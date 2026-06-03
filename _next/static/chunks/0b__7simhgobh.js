(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 449305, e => {
    "use strict";
    let t = {
            log: "log",
            debug: "debug",
            info: "info",
            warn: "warn",
            error: "error"
        },
        r = console,
        n = {};
    Object.keys(t).forEach(e => {
        n[e] = r[e]
    });
    let i = "Datadog Browser SDK:",
        o = {
            debug: n.debug.bind(r, i),
            log: n.log.bind(r, i),
            info: n.info.bind(r, i),
            warn: n.warn.bind(r, i),
            error: n.error.bind(r, i)
        },
        a = "https://docs.datadoghq.com",
        s = `${a}/real_user_monitoring/browser/troubleshooting`;
    e.s(["ConsoleApiName", 0, t, "DOCS_ORIGIN", 0, a, "DOCS_TROUBLESHOOTING", 0, s, "MORE_DETAILS", 0, "More details:", "display", 0, o, "globalConsole", 0, r])
}, 12379, e => {
    "use strict";
    var t = e.i(449305);
    e.s(["catchUserErrors", 0, function(e, r) {
        return (...n) => {
            try {
                return e(...n)
            } catch (e) {
                t.display.error(r, e)
            }
        }
    }])
}, 38464, e => {
    "use strict";
    let t;
    var r = e.i(449305);
    let n = !1;

    function i(e, t, r) {
        try {
            return e.apply(t, r)
        } catch (e) {
            o(e)
        }
    }

    function o(e) {
        if (a(e), t) try {
            t(e)
        } catch (e) {
            a(e)
        }
    }

    function a(...e) {
        n && r.display.error("[MONITOR]", ...e)
    }
    e.s(["callMonitored", 0, i, "displayIfDebugEnabled", 0, a, "monitor", 0, function(e) {
        return function(...t) {
            return i(e, this, t)
        }
    }, "monitorError", 0, o, "setDebugMode", 0, function(e) {
        n = e
    }, "startMonitorErrorCollection", 0, function(e) {
        t = e
    }])
}, 326856, e => {
    "use strict";

    function t() {
        if ("object" == typeof globalThis) return globalThis;
        Object.defineProperty(Object.prototype, "_dd_temp_", {
            get() {
                return this
            },
            configurable: !0
        });
        let e = _dd_temp_;
        return delete Object.prototype._dd_temp_, "object" != typeof e && (e = "object" == typeof self ? self : "object" == typeof window ? window : {}), e
    }
    let r = t();
    e.s(["getGlobalObject", 0, t, "globalObject", 0, r, "isWorkerEnvironment", 0, "WorkerGlobalScope" in r])
}, 253265, e => {
    "use strict";
    var t = e.i(326856);
    e.s(["sendToExtension", 0, function(e, r) {
        let n = t.globalObject.__ddBrowserSdkExtensionCallback;
        n && n({
            type: e,
            payload: r
        })
    }])
}, 628872, e => {
    "use strict";
    var t = e.i(38464),
        r = e.i(326856);

    function n(e) {
        var n;
        let i = null == (n = r.globalObject.queueMicrotask) ? void 0 : n.bind(r.globalObject);
        "function" == typeof i ? i((0, t.monitor)(e)) : Promise.resolve().then((0, t.monitor)(e))
    }
    class i {
        constructor(e) {
            this.onFirstSubscribe = e, this.observers = []
        }
        subscribe(e) {
            return this.addObserver(e), {
                unsubscribe: () => this.removeObserver(e)
            }
        }
        notify(e) {
            this.observers.forEach(t => t(e))
        }
        addObserver(e) {
            this.observers.push(e), 1 === this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0)
        }
        removeObserver(e) {
            this.observers = this.observers.filter(t => e !== t), !this.observers.length && this.onLastUnsubscribe && this.onLastUnsubscribe()
        }
    }
    e.s(["BufferedObservable", 0, class extends i {
        constructor(e) {
            super(), this.maxBufferSize = e, this.buffer = []
        }
        notify(e) {
            this.buffer.push(e), this.buffer.length > this.maxBufferSize && this.buffer.shift(), super.notify(e)
        }
        subscribe(e) {
            let t = !1;
            return n(() => {
                for (let r of this.buffer) {
                    if (t) return;
                    e(r)
                }
                t || this.addObserver(e)
            }), {
                unsubscribe: () => {
                    t = !0, this.removeObserver(e)
                }
            }
        }
        unbuffer() {
            n(() => {
                this.maxBufferSize = this.buffer.length = 0
            })
        }
    }, "Observable", 0, i, "mergeObservables", 0, function(...e) {
        return new i(t => {
            let r = e.map(e => e.subscribe(e => t.notify(e)));
            return () => r.forEach(e => e.unsubscribe())
        })
    }], 628872)
}, 103067, e => {
    "use strict";
    e.s(["findLast", 0, function(e, t) {
        for (let r = e.length - 1; r >= 0; r -= 1) {
            let n = e[r];
            if (t(n, r, e)) return n
        }
    }, "objectEntries", 0, function(e) {
        return Object.entries(e)
    }, "objectValues", 0, function(e) {
        return Object.values(e)
    }])
}, 917701, e => {
    "use strict";
    var t = e.i(326856);
    e.s(["getZoneJsOriginalValue", 0, function(e, r) {
        let n, i = (0, t.getGlobalObject)();
        return i.Zone && "function" == typeof i.Zone.__symbol__ && (n = e[i.Zone.__symbol__(r)]), n || (n = e[r]), n
    }])
}, 124385, e => {
    "use strict";
    var t = e.i(38464),
        r = e.i(917701);

    function n(e, i, o, a, {
        once: s,
        capture: u,
        passive: l
    } = {}) {
        let c = (0, t.monitor)(t => {
                (t.isTrusted || t.__ddIsTrusted || e.allowUntrustedEvents) && (s && m(), a(t))
            }),
            d = l ? {
                capture: u,
                passive: l
            } : u,
            f = window.EventTarget && i instanceof EventTarget ? window.EventTarget.prototype : i,
            p = (0, r.getZoneJsOriginalValue)(f, "addEventListener");

        function m() {
            let e = (0, r.getZoneJsOriginalValue)(f, "removeEventListener");
            o.forEach(t => e.call(i, t, c, d))
        }
        return o.forEach(e => p.call(i, e, c, d)), {
            stop: m
        }
    }
    e.s(["addEventListener", 0, function(e, t, r, i, o) {
        return n(e, t, [r], i, o)
    }, "addEventListeners", 0, n])
}, 590336, e => {
    "use strict";
    var t = e.i(628872),
        r = e.i(103067),
        n = e.i(124385);
    let i = {
        HIDDEN: "visibility_hidden",
        UNLOADING: "before_unload",
        PAGEHIDE: "page_hide",
        FROZEN: "page_frozen"
    };
    e.s(["PageExitReason", 0, i, "createPageMayExitObservable", 0, function(e) {
        return new t.Observable(t => {
            let {
                stop: r
            } = (0, n.addEventListeners)(e, window, ["visibilitychange", "freeze"], e => {
                "visibilitychange" === e.type && "hidden" === document.visibilityState ? t.notify({
                    reason: i.HIDDEN
                }) : "freeze" === e.type && t.notify({
                    reason: i.FROZEN
                })
            }, {
                capture: !0
            }), o = (0, n.addEventListener)(e, window, "beforeunload", () => {
                t.notify({
                    reason: i.UNLOADING
                })
            }).stop;
            return () => {
                r(), o()
            }
        })
    }, "isPageExitReason", 0, function(e) {
        return (0, r.objectValues)(i).includes(e)
    }])
}, 548544, e => {
    "use strict";
    let t = /[^\u0000-\u007F]/;
    e.s(["ONE_KIBI_BYTE", 0, 1024, "ONE_MEBI_BYTE", 0, 1048576, "computeBytesCount", 0, function(e) {
        return t.test(e) ? void 0 !== window.TextEncoder ? new TextEncoder().encode(e).length : new Blob([e]).size : e.length
    }, "concatBuffers", 0, function(e) {
        if (1 === e.length) return e[0];
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
            r = 0;
        for (let n of e) t.set(n, r), r += n.length;
        return t
    }])
}, 442504, e => {
    "use strict";
    var t = e.i(917701),
        r = e.i(38464),
        n = e.i(326856);
    e.s(["clearInterval", 0, function(e) {
        (0, t.getZoneJsOriginalValue)((0, n.getGlobalObject)(), "clearInterval")(e)
    }, "clearTimeout", 0, function(e) {
        (0, t.getZoneJsOriginalValue)((0, n.getGlobalObject)(), "clearTimeout")(e)
    }, "setInterval", 0, function(e, i) {
        return (0, t.getZoneJsOriginalValue)((0, n.getGlobalObject)(), "setInterval")((0, r.monitor)(e), i)
    }, "setTimeout", 0, function(e, i) {
        return (0, t.getZoneJsOriginalValue)((0, n.getGlobalObject)(), "setTimeout")((0, r.monitor)(e), i)
    }])
}, 797719, 563746, 271019, 287555, 57329, 256721, 931675, e => {
    "use strict";
    let t;
    var r = e.i(449305),
        n = e.i(548544),
        i = e.i(442504);

    function o() {}

    function a(e, t, r) {
        if ("object" != typeof e || null === e) return JSON.stringify(e);
        let n = s(Object.prototype),
            i = s(Array.prototype),
            o = s(Object.getPrototypeOf(e)),
            a = s(e);
        try {
            return JSON.stringify(e, t, r)
        } catch (e) {
            return "<error: unable to serialize object>"
        } finally {
            n(), i(), o(), a()
        }
    }

    function s(e) {
        let t = e.toJSON;
        return t ? (delete e.toJSON, () => {
            e.toJSON = t
        }) : o
    }
    e.s(["noop", 0, o, "throttle", 0, function(e, t, r) {
        let n, o, a = !r || void 0 === r.leading || r.leading,
            s = !r || void 0 === r.trailing || r.trailing,
            u = !1;
        return {
            throttled: (...r) => {
                if (u) {
                    n = r;
                    return
                }
                a ? e(...r) : n = r, u = !0, o = (0, i.setTimeout)(() => {
                    s && n && e(...n), u = !1, n = void 0
                }, t)
            },
            cancel: () => {
                (0, i.clearTimeout)(o), u = !1, n = void 0
            }
        }
    }], 563746), e.s(["detachToJsonMethod", 0, s, "jsonStringify", 0, a], 271019);
    let u = 220 * n.ONE_KIBI_BYTE;

    function l(e, t = u) {
        let r = s(Object.prototype),
            n = s(Array.prototype),
            i = [],
            o = new WeakMap,
            a = c(e, "$", void 0, i, o),
            f = JSON.stringify(a),
            p = f ? f.length : 0;
        if (p > t) return void d(t, "discarded", e);
        for (; i.length > 0 && p < t;) {
            let r = i.shift(),
                n = 0;
            if (Array.isArray(r.source))
                for (let a = 0; a < r.source.length; a++) {
                    let s = c(r.source[a], r.path, a, i, o);
                    if (void 0 !== s ? p += JSON.stringify(s).length : p += 4, p += n, n = 1, p > t) {
                        d(t, "truncated", e);
                        break
                    }
                    r.target[a] = s
                } else
                    for (let a in r.source)
                        if (Object.prototype.hasOwnProperty.call(r.source, a)) {
                            let s = c(r.source[a], r.path, a, i, o);
                            if (void 0 !== s && (p += JSON.stringify(s).length + n + a.length + 3, n = 1), p > t) {
                                d(t, "truncated", e);
                                break
                            }
                            r.target[a] = s
                        }
        }
        return r(), n(), a
    }

    function c(e, t, r, n, i) {
        let o = function(e) {
            if (e && "function" == typeof e.toJSON) try {
                return e.toJSON()
            } catch (e) {}
            return e
        }(e);
        if (!o || "object" != typeof o) {
            var a;
            return "bigint" == typeof(a = o) ? `[BigInt] ${a.toString()}` : "function" == typeof a ? `[Function] ${a.name||"unknown"}` : "symbol" == typeof a ? `[Symbol] ${a.description||a.toString()}` : a
        }
        let s = function e(t) {
            try {
                if (t instanceof Event) {
                    var r;
                    return {
                        type: (r = t).type,
                        isTrusted: r.isTrusted,
                        currentTarget: r.currentTarget ? e(r.currentTarget) : null,
                        target: r.target ? e(r.target) : null
                    }
                }
                if (t instanceof RegExp) return `[RegExp] ${t.toString()}`;
                let n = Object.prototype.toString.call(t).match(/\[object (.*)\]/);
                if (n && n[1]) return `[${n[1]}]`
            } catch (e) {}
            return "[Unserializable]"
        }(o);
        if ("[Object]" !== s && "[Array]" !== s && "[Error]" !== s) return s;
        if (i.has(e)) return `[Reference seen at ${i.get(e)}]`;
        let u = void 0 !== r ? `${t}.${r}` : t,
            l = Array.isArray(o) ? [] : {};
        return i.set(e, u), n.push({
            source: o,
            target: l,
            path: u
        }), l
    }

    function d(e, t, n) {
        r.display.warn(`The data provided has been ${t} as it is over the limit of ${e} characters:`, n)
    }

    function f(e) {
        return null === e ? "null" : Array.isArray(e) ? "array" : typeof e
    }

    function p(e) {
        return "object" === f(e)
    }

    function m(e) {
        var r, n;
        let i = [],
            o = T(e, "stack"),
            a = String(e);
        if (o && o.startsWith(a) && (o = o.slice(a.length)), o && o.split("\n").forEach(e => {
                let t = function(e) {
                    let t = b.exec(e);
                    if (!t) return;
                    let r = t[2] && 0 === t[2].indexOf("native"),
                        n = t[2] && 0 === t[2].indexOf("eval"),
                        i = y.exec(t[2]);
                    return n && i && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), {
                        args: r ? [t[2]] : [],
                        column: t[4] ? +t[4] : void 0,
                        func: t[1] || "?",
                        line: t[3] ? +t[3] : void 0,
                        url: r ? void 0 : t[2]
                    }
                }(e) || function(e) {
                    let t = E.exec(e);
                    if (t) return {
                        args: [],
                        column: t[4] ? +t[4] : void 0,
                        func: t[1] || "?",
                        line: t[3] ? +t[3] : void 0,
                        url: t[2]
                    }
                }(e) || function(e) {
                    let t = S.exec(e);
                    if (t) return {
                        args: [],
                        column: t[4] ? +t[4] : void 0,
                        func: t[1] || "?",
                        line: +t[3],
                        url: t[2]
                    }
                }(e) || function(e) {
                    let t = h.exec(e);
                    if (!t) return;
                    let r = t[3] && t[3].indexOf(" > eval") > -1,
                        n = _.exec(t[3]);
                    return r && n && (t[3] = n[1], t[4] = n[2], t[5] = void 0), {
                        args: t[2] ? t[2].split(",") : [],
                        column: t[5] ? +t[5] : void 0,
                        func: t[1] || "?",
                        line: t[4] ? +t[4] : void 0,
                        url: t[3]
                    }
                }(e);
                t && (!t.func && t.line && (t.func = "?"), i.push(t))
            }), i.length > 0 && function() {
                if (void 0 !== t) return t;
                let [e, r] = [class extends Error {
                    constructor() {
                        super(), this.name = "Error"
                    }
                }, Error].map(e => new e);
                return t = w(Object.getPrototypeOf(e)) && r.stack !== e.stack
            }() && e instanceof Error) {
            let t = [],
                o = e;
            for (;
                (o = Object.getPrototypeOf(o)) && w(o);) {
                let e = (null == (r = o.constructor) ? void 0 : r.name) || "?";
                t.push(e)
            }
            for (let e = t.length - 1; e >= 0 && (null == (n = i[0]) ? void 0 : n.func) === t[e]; e--) i.shift()
        }
        return {
            message: T(e, "message"),
            name: T(e, "name"),
            stack: i
        }
    }
    e.s(["sanitize", 0, l], 287555), e.s(["getType", 0, f, "isIndexableObject", 0, p], 57329);
    let g = "((?:file|https?|blob|chrome-extension|electron|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
        v = "(?::(\\d+))",
        b = RegExp(`^\\s*at (.*?) ?\\(${g}${v}?${v}?\\)?\\s*$`, "i"),
        y = RegExp(`\\((\\S*)${v}${v}\\)`),
        E = RegExp(`^\\s*at\\s*(?:(.*)?(?: @))?\\s*${g}${v}?${v}??\\s*$`, "i"),
        S = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        h = /^\s*(.*?)(?:\((.*?)\))?(?:(?:(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle|\[wasm code\])(?::(\d+))?(?::(\d+))?)|@)\s*$/i,
        _ = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

    function T(e, t) {
        return p(e) && "string" == typeof e[t] ? e[t] : void 0
    }
    let O = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;

    function w(e) {
        return String(e.constructor).startsWith("class ")
    }
    e.s(["computeStackTrace", 0, m, "computeStackTraceFromOnErrorMessage", 0, function(e, t, r, n) {
        var i;
        let o, a;
        if (void 0 === t) return;
        let {
            name: s,
            message: u
        } = (i = e, "[object String]" === ({}).toString.call(i) && ([, o, a] = O.exec(i)), {
            name: o,
            message: a
        });
        return {
            name: s,
            message: u,
            stack: [{
                url: t,
                column: n,
                line: r
            }]
        }
    }], 256721);
    var I = e.i(38464);

    function A(e) {
        let t = N(e);
        return e.stack.forEach(e => {
            let r = "?" === e.func ? "<anonymous>" : e.func,
                n = e.args && e.args.length > 0 ? `(${e.args.join(", ")})` : "",
                i = e.line ? `:${e.line}` : "",
                o = e.line && e.column ? `:${e.column}` : "";
            t += `
  at ${r}${n} @ ${e.url}${i}${o}`
        }), t
    }

    function N(e) {
        return `${e.name||"Error"}: ${e.message}`
    }
    e.s(["createHandlingStack", 0, function(e) {
        let t, r = Error(e);
        return r.name = "HandlingStack", (0, I.callMonitored)(() => {
            let e = m(r);
            e.stack = e.stack.slice(2), t = A(e)
        }), t
    }, "formatErrorMessage", 0, N, "toStackTraceString", 0, A], 931675);
    let C = "No stack, consider using an instance of Error";

    function R({
        originalError: e,
        stackTrace: t,
        source: r,
        useFallbackStack: n = !0,
        nonErrorPrefix: i
    }) {
        var o, s, u, c;
        let d = k(e);
        return !t && d && (t = m(e)), {
            source: r,
            type: t ? t.name : void 0,
            message: (o = t, s = d, u = i, c = e, (null == o ? void 0 : o.message) && (null == o ? void 0 : o.name) ? o.message : s ? "Empty message" : u ? `${u} ${a(l(c))}` : a(l(c))),
            stack: t ? A(t) : n ? C : void 0
        }
    }

    function k(e) {
        return e instanceof Error || "[object Error]" === Object.prototype.toString.call(e)
    }
    e.s(["NO_ERROR_STACK_PRESENT_MESSAGE", 0, C, "computeRawError", 0, function({
        stackTrace: e,
        originalError: t,
        handlingStack: r,
        componentStack: n,
        startClocks: i,
        nonErrorPrefix: o,
        useFallbackStack: a = !0,
        source: s,
        handling: u
    }) {
        var l;
        let c = R({
            originalError: t,
            stackTrace: e,
            source: s,
            useFallbackStack: a,
            nonErrorPrefix: o
        });
        return {
            startClocks: i,
            handling: u,
            handlingStack: r,
            componentStack: n,
            originalError: t,
            ...c,
            causes: k(t) ? function(e, t) {
                let r = [],
                    n = e.cause;
                for (; null != n && r.length < 10;) {
                    let e = R({
                        originalError: n,
                        source: t,
                        useFallbackStack: !1
                    });
                    r.push(e), n = k(n) ? n.cause : void 0
                }
                return r.length ? r : void 0
            }(t, s) : void 0,
            fingerprint: k(l = t) && "dd_fingerprint" in l ? String(l.dd_fingerprint) : void 0,
            context: function(e) {
                if (p(e)) return e.dd_context
            }(t)
        }
    }, "isError", 0, k], 797719)
}, 191819, 568432, e => {
    "use strict";
    var t, r;

    function n(e, t) {
        return Object.keys(e).some(r => e[r] === t)
    }
    e.s(["isEmptyObject", 0, function(e) {
        return 0 === Object.keys(e).length
    }, "mapValues", 0, function(e, t) {
        let r = {};
        for (let n of Object.keys(e)) r[n] = t(e[n]);
        return r
    }, "objectHasValue", 0, n, "shallowClone", 0, function(e) {
        return { ...e
        }
    }], 568432), (r = t || (t = {})).TRACK_INTAKE_REQUESTS = "track_intake_requests", r.USE_TREE_WALKER_FOR_ACTION_NAME = "use_tree_walker_for_action_name", r.FEATURE_OPERATION_VITAL = "feature_operation_vital", r.SHORT_SESSION_INVESTIGATION = "short_session_investigation", r.AVOID_FETCH_KEEPALIVE = "avoid_fetch_keepalive", r.START_STOP_ACTION = "start_stop_action", r.USE_CHANGE_RECORDS = "use_change_records", r.SOURCE_CODE_CONTEXT = "source_code_context";
    let i = new Set;
    e.s(["ExperimentalFeature", 0, t, "getExperimentalFeatures", 0, function() {
        return i
    }, "initFeatureFlags", 0, function(e) {
        Array.isArray(e) && e.filter(e => n(t, e)).forEach(e => {
            i.add(e)
        })
    }, "isExperimentalFeatureEnabled", 0, function(e) {
        return i.has(e)
    }], 191819)
}, 337165, 93258, e => {
    "use strict";
    var t = e.i(449305);

    function r(e, r) {
        var n;
        let i = r ? `${e}:${r}` : e;
        return (i.length > 200 || (n = i, function() {
            try {
                return RegExp("[\\p{Ll}]", "u"), !0
            } catch (e) {
                return !1
            }
        }() && RegExp("[^\\p{Ll}\\p{Lo}0-9_:./-]", "u").test(n))) && t.display.warn(`Tag ${i} doesn't meet tag requirements and will be sanitized. ${t.MORE_DETAILS} ${t.DOCS_ORIGIN}/getting_started/tagging/#defining-tags`), i.replace(/,/g, "_")
    }
    e.s(["buildTags", 0, function(e) {
        let {
            env: t,
            service: n,
            version: i,
            datacenter: o,
            sdkVersion: a,
            variant: s
        } = e, u = [r("sdk_version", null != a ? a : "6.26.0")];
        return t && u.push(r("env", t)), n && u.push(r("service", n)), i && u.push(r("version", i)), o && u.push(r("datacenter", o)), s && u.push(r("variant", s)), u
    }], 337165), e.s(["INTAKE_SITE_EU1", 0, "datadoghq.eu", "INTAKE_SITE_FED_STAGING", 0, "dd0g-gov.com", "INTAKE_SITE_STAGING", 0, "datad0g.com", "INTAKE_SITE_US1", 0, "datadoghq.com", "INTAKE_SITE_US1_FED", 0, "ddog-gov.com", "INTAKE_URL_PARAMETERS", 0, ["ddsource", "dd-api-key", "dd-request-id"], "PCI_INTAKE_HOST_US1", 0, "pci.browser-intake-datadoghq.com"], 93258)
}, 602006, 982067, e => {
    "use strict";
    let t;

    function r(e, t) {
        return +e.toFixed(t)
    }

    function n(e) {
        return "number" == typeof e
    }
    e.s(["isNumber", 0, n, "isPercentage", 0, function(e) {
        return n(e) && e >= 0 && e <= 100
    }, "performDraw", 0, function(e) {
        return 0 !== e && 100 * Math.random() <= e
    }, "round", 0, r], 982067);

    function i() {
        return new Date().getTime()
    }

    function o() {
        return i()
    }

    function a() {
        return performance.now()
    }

    function s(e, t) {
        return e + t
    }

    function u(e) {
        return e - l()
    }

    function l() {
        var e, r;
        return void 0 === t && (t = null != (r = null == (e = performance.timing) ? void 0 : e.navigationStart) ? r : performance.timeOrigin), t
    }
    e.s(["ONE_HOUR", 0, 36e5, "ONE_MINUTE", 0, 6e4, "ONE_SECOND", 0, 1e3, "ONE_YEAR", 0, 31536e6, "addDuration", 0, s, "clocksNow", 0, function() {
        return {
            relative: a(),
            timeStamp: o()
        }
    }, "clocksOrigin", 0, function() {
        return {
            relative: 0,
            timeStamp: l()
        }
    }, "currentDrift", 0, function() {
        return Math.round(i() - s(l(), performance.now()))
    }, "dateNow", 0, i, "elapsed", 0, function(e, t) {
        return t - e
    }, "getRelativeTime", 0, u, "looksLikeRelativeTime", 0, function(e) {
        return e < 31536e6
    }, "relativeNow", 0, a, "relativeToClocks", 0, function(e) {
        var t, r;
        let n;
        return {
            relative: e,
            timeStamp: (t = e, (n = i() - performance.now()) > l() ? Math.round(s(n, t)) : (r = t, Math.round(s(l(), r))))
        }
    }, "timeStampNow", 0, o, "timeStampToClocks", 0, function(e) {
        return {
            relative: u(e),
            timeStamp: e
        }
    }, "toServerDuration", 0, function(e) {
        return n(e) ? r(1e6 * e, 0) : e
    }], 602006)
}, 328275, 575599, 841259, e => {
    "use strict";
    var t = e.i(57329);

    function r(e, n, i = function() {
        if ("u" > typeof WeakSet) {
            let e = new WeakSet;
            return {
                hasAlreadyBeenSeen(t) {
                    let r = e.has(t);
                    return r || e.add(t), r
                }
            }
        }
        let e = [];
        return {
            hasAlreadyBeenSeen(t) {
                let r = e.indexOf(t) >= 0;
                return r || e.push(t), r
            }
        }
    }()) {
        if (void 0 === n) return e;
        if ("object" != typeof n || null === n) return n;
        if (n instanceof Date) return new Date(n.getTime());
        if (n instanceof RegExp) {
            let e = n.flags || [n.global ? "g" : "", n.ignoreCase ? "i" : "", n.multiline ? "m" : "", n.sticky ? "y" : "", n.unicode ? "u" : ""].join("");
            return new RegExp(n.source, e)
        }
        if (i.hasAlreadyBeenSeen(n)) return;
        if (Array.isArray(n)) {
            let t = Array.isArray(e) ? e : [];
            for (let e = 0; e < n.length; ++e) t[e] = r(t[e], n[e], i);
            return t
        }
        let o = "object" === (0, t.getType)(e) ? e : {};
        for (let e in n) Object.prototype.hasOwnProperty.call(n, e) && (o[e] = r(o[e], n[e], i));
        return o
    }
    e.s(["combine", 0, function(...e) {
        let t;
        for (let n of e) null != n && (t = r(t, n));
        return t
    }, "deepClone", 0, function(e) {
        return r(void 0, e)
    }], 328275);
    var n = e.i(326856);

    function i() {
        let e = (0, n.getGlobalObject)().DatadogEventBridge;
        if (e) return {
            getCapabilities() {
                var t;
                return JSON.parse((null == (t = e.getCapabilities) ? void 0 : t.call(e)) || "[]")
            },
            getPrivacyLevel() {
                var t;
                return null == (t = e.getPrivacyLevel) ? void 0 : t.call(e)
            },
            getAllowedWebViewHosts: () => JSON.parse(e.getAllowedWebViewHosts()),
            send(t, r, n) {
                e.send(JSON.stringify({
                    eventType: t,
                    event: r,
                    view: n ? {
                        id: n
                    } : void 0
                }))
            }
        }
    }
    e.s(["getConnectivity", 0, function() {
        var e;
        let t = n.globalObject.navigator;
        return {
            status: t.onLine ? "connected" : "not_connected",
            interfaces: t.connection && t.connection.type ? [t.connection.type] : void 0,
            effective_type: null == (e = t.connection) ? void 0 : e.effectiveType
        }
    }], 575599), e.s(["bridgeSupports", 0, function(e) {
        let t = i();
        return !!t && t.getCapabilities().includes(e)
    }, "canUseEventBridge", 0, function(e) {
        var t;
        void 0 === e && (e = null == (t = (0, n.getGlobalObject)().location) ? void 0 : t.hostname);
        let r = i();
        return !!r && r.getAllowedWebViewHosts().some(t => e === t || e.endsWith(`.${t}`))
    }, "getEventBridge", 0, i], 841259)
}, 572528, e => {
    "use strict";
    var t = e.i(917701),
        r = e.i(326856);
    e.s(["fetch", 0, function(e, n) {
        return (0, t.getZoneJsOriginalValue)((0, r.getGlobalObject)(), "fetch")(e, n)
    }])
}, 299561, 470252, 592568, e => {
    "use strict";
    var t = e.i(572528),
        r = e.i(38464),
        n = e.i(191819),
        i = e.i(628872),
        o = e.i(548544),
        a = e.i(442504),
        s = e.i(602006);

    function u(e) {
        return e >= 500
    }
    e.s(["isServerError", 0, u, "tryToClone", 0, function(e) {
        try {
            return e.clone()
        } catch (e) {
            return
        }
    }], 470252);
    let l = {
        AGENT: "agent",
        CONSOLE: "console",
        CUSTOM: "custom",
        LOGGER: "logger",
        NETWORK: "network",
        SOURCE: "source",
        REPORT: "report"
    };
    e.s(["ErrorSource", 0, l], 592568);
    let c = 80 * o.ONE_KIBI_BYTE,
        d = 20 * o.ONE_MEBI_BYTE,
        f = s.ONE_MINUTE,
        p = s.ONE_SECOND;

    function m(e, t, r, n, i, o) {
        0 === t.transportStatus && 0 === t.queuedPayloads.size() && t.bandwidthMonitor.canHandle(e) ? g(e, t, r, o, {
            onSuccess: () => v(0, t, r, n, i, o),
            onFailure: () => {
                t.queuedPayloads.enqueue(e) || o.notify({
                        type: "queue-full",
                        bandwidth: t.bandwidthMonitor.stats(),
                        payload: e
                    }),
                    function e(t, r, n, i, o) {
                        2 === t.transportStatus && (0, a.setTimeout)(() => {
                            g(t.queuedPayloads.first(), t, r, o, {
                                onSuccess: () => {
                                    t.queuedPayloads.dequeue(), t.currentBackoffTime = p, v(1, t, r, n, i, o)
                                },
                                onFailure: () => {
                                    t.currentBackoffTime = Math.min(f, 2 * t.currentBackoffTime), e(t, r, n, i, o)
                                }
                            })
                        }, t.currentBackoffTime)
                    }(t, r, n, i, o)
            }
        }) : t.queuedPayloads.enqueue(e) || o.notify({
            type: "queue-full",
            bandwidth: t.bandwidthMonitor.stats(),
            payload: e
        })
    }

    function g(e, t, r, n, {
        onSuccess: i,
        onFailure: o
    }) {
        t.bandwidthMonitor.add(e), r(e, r => {
            var a;
            t.bandwidthMonitor.remove(e), "opaque" !== (a = r).type && (0 === a.status && !navigator.onLine || 408 === a.status || 429 === a.status || u(a.status)) ? (t.transportStatus = t.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, e.retry = {
                count: e.retry ? e.retry.count + 1 : 1,
                lastFailureStatus: r.status
            }, n.notify({
                type: "failure",
                bandwidth: t.bandwidthMonitor.stats(),
                payload: e
            }), o()) : (t.transportStatus = 0, n.notify({
                type: "success",
                bandwidth: t.bandwidthMonitor.stats(),
                payload: e
            }), i())
        })
    }

    function v(e, t, r, n, i, a) {
        0 === e && t.queuedPayloads.isFull() && !t.queueFullReported && (i({
            message: `Reached max ${n} events size queued for upload: ${d/o.ONE_MEBI_BYTE}MiB`,
            source: l.AGENT,
            startClocks: (0, s.clocksNow)()
        }), t.queueFullReported = !0);
        let u = t.queuedPayloads;
        for (t.queuedPayloads = b(); u.size() > 0;) m(u.dequeue(), t, r, n, i, a)
    }

    function b() {
        let e = [];
        return {
            bytesCount: 0,
            enqueue(t) {
                return !this.isFull() && (e.push(t), this.bytesCount += t.bytesCount, !0)
            },
            first: () => e[0],
            dequeue() {
                let t = e.shift();
                return t && (this.bytesCount -= t.bytesCount), t
            },
            size: () => e.length,
            isFull() {
                return this.bytesCount >= d
            }
        }
    }
    let y = 16 * o.ONE_KIBI_BYTE,
        E = !1;

    function S(e, n, i) {
        let o = e.build("fetch", n);
        (0, t.fetch)(o, {
            method: "POST",
            body: n.data,
            mode: "cors"
        }).then((0, r.monitor)(e => null == i ? void 0 : i({
            status: e.status,
            type: e.type
        }))).catch((0, r.monitor)(() => null == i ? void 0 : i({
            status: 0
        })))
    }
    e.s(["RECOMMENDED_REQUEST_BYTES_LIMIT", 0, y, "createHttpRequest", 0, function(e, o, a = y) {
        let s = new i.Observable,
            u = {
                transportStatus: 0,
                currentBackoffTime: p,
                bandwidthMonitor: {
                    ongoingRequestCount: 0,
                    ongoingByteCount: 0,
                    canHandle(e) {
                        return 0 === this.ongoingRequestCount || this.ongoingByteCount + e.bytesCount <= c && this.ongoingRequestCount < 32
                    },
                    add(e) {
                        this.ongoingRequestCount += 1, this.ongoingByteCount += e.bytesCount
                    },
                    remove(e) {
                        this.ongoingRequestCount -= 1, this.ongoingByteCount -= e.bytesCount
                    },
                    stats() {
                        return {
                            ongoingByteCount: this.ongoingByteCount,
                            ongoingRequestCount: this.ongoingRequestCount
                        }
                    }
                },
                queuedPayloads: b(),
                queueFullReported: !1
            };
        return {
            observable: s,
            send: i => {
                for (let l of e) m(i, u, (e, i) => {
                    (0, n.isExperimentalFeatureEnabled)(n.ExperimentalFeature.AVOID_FETCH_KEEPALIVE) ? S(l, e, i): function(e, n, i, o) {
                        if (function() {
                                try {
                                    return window.Request && "keepalive" in new Request("http://a")
                                } catch (e) {
                                    return !1
                                }
                            }() && i.bytesCount < n) {
                            let n = e.build("fetch-keepalive", i);
                            (0, t.fetch)(n, {
                                method: "POST",
                                body: i.data,
                                keepalive: !0,
                                mode: "cors"
                            }).then((0, r.monitor)(e => null == o ? void 0 : o({
                                status: e.status,
                                type: e.type
                            }))).catch((0, r.monitor)(() => S(e, i, o)))
                        } else S(e, i, o)
                    }(l, a, e, i)
                }, l.trackType, o, s)
            },
            sendOnExit: t => {
                for (let n of e) ! function(e, t, n) {
                    if (navigator.sendBeacon && n.bytesCount < t) try {
                        let t = e.build("beacon", n);
                        if (navigator.sendBeacon(t, n.data)) return
                    } catch (e) {
                        var i;
                        i = e, E || (E = !0, (0, r.monitorError)(i))
                    }
                    S(e, n)
                }(n, a, t)
            }
        }
    }], 299561)
}, 581028, e => {
    "use strict";
    var t = e.i(326856),
        r = e.i(628872),
        n = e.i(442504),
        i = e.i(602006),
        o = e.i(299561);
    let a = 30 * i.ONE_SECOND,
        s = t.isWorkerEnvironment ? 1 : 50;
    e.s(["createFlushController", 0, function({
        pageMayExitObservable: e,
        sessionExpireObservable: t
    }) {
        let i, u = e.subscribe(e => p(e.reason)),
            l = t.subscribe(() => p("session_expire")),
            c = new r.Observable(() => () => {
                u.unsubscribe(), l.unsubscribe()
            }),
            d = 0,
            f = 0;

        function p(e) {
            if (0 === f) return;
            let t = f,
                r = d;
            f = 0, d = 0, m(), c.notify({
                reason: e,
                messagesCount: t,
                bytesCount: r
            })
        }

        function m() {
            (0, n.clearTimeout)(i), i = void 0
        }
        return {
            flushObservable: c,
            get messagesCount() {
                return f
            },
            notifyBeforeAddMessage(e) {
                d + e >= o.RECOMMENDED_REQUEST_BYTES_LIMIT && p("bytes_limit"), f += 1, d += e, void 0 === i && (i = (0, n.setTimeout)(() => {
                    p("duration_limit")
                }, a))
            },
            notifyAfterAddMessage(e = 0) {
                d += e, f >= s ? p("messages_limit") : d >= o.RECOMMENDED_REQUEST_BYTES_LIMIT && p("bytes_limit")
            },
            notifyAfterRemoveMessage(e) {
                d -= e, 0 == (f -= 1) && m()
            }
        }
    }])
}, 793018, 753084, 401017, 595649, 754614, 110977, 815806, 534984, 291495, 91978, 955165, 407480, 543757, 472822, 619623, 314748, 633673, 901721, 553790, 968678, 328861, 279710, 268562, 438137, 921458, e => {
    "use strict";
    let t, r, n, i;
    var o = e.i(449305),
        a = e.i(797719),
        s = e.i(931675),
        u = e.i(191819),
        l = e.i(337165),
        c = e.i(93258),
        d = e.i(628872),
        f = e.i(602006),
        p = e.i(38464),
        m = e.i(253265),
        g = e.i(982067),
        v = e.i(271019),
        b = e.i(328275),
        y = e.i(256721),
        E = e.i(575599),
        S = e.i(841259),
        h = e.i(581028),
        _ = e.i(299561),
        T = e.i(103067),
        O = e.i(590336),
        w = e.i(548544);
    let I = 256 * w.ONE_KIBI_BYTE;

    function A({
        encoder: e,
        request: t,
        flushController: r
    }) {
        let n = {},
            i = r.flushObservable.subscribe(r => (function(r) {
                let i = (0, T.objectValues)(n).join("\n");
                n = {};
                let o = (0, O.isPageExitReason)(r.reason),
                    a = o ? t.sendOnExit : t.send;
                if (o && e.isAsync) {
                    let t = e.finishSync();
                    t.outputBytesCount && a(N(t));
                    let r = [t.pendingData, i].filter(Boolean).join("\n");
                    r && a({
                        data: r,
                        bytesCount: (0, w.computeBytesCount)(r)
                    })
                } else i && e.write(e.isEmpty ? i : `
${i}`), e.finish(e => {
                    a(N(e))
                })
            })(r));

        function a(t, i) {
            let a, s, u = (0, v.jsonStringify)(t),
                l = e.estimateEncodedBytesCount(u);
            l >= I ? o.display.warn(`Discarded a message whose size was bigger than the maximum allowed size ${I/w.ONE_KIBI_BYTE}KiB. ${o.MORE_DETAILS} ${o.DOCS_TROUBLESHOOTING}/#technical-limitations`) : (void 0 !== i && void 0 !== n[i] && (a = n[i], delete n[i], s = e.estimateEncodedBytesCount(a), r.notifyAfterRemoveMessage(s)), r.notifyBeforeAddMessage(l), void 0 !== i ? (n[i] = u, r.notifyAfterAddMessage()) : e.write(e.isEmpty ? u : `
${u}`, e => {
                r.notifyAfterAddMessage(e - l)
            }))
        }
        return {
            flushController: r,
            add: a,
            upsert: a,
            stop: i.unsubscribe
        }
    }

    function N(e) {
        return {
            data: "string" == typeof e.output ? e.output : new Blob([e.output], {
                type: "text/plain"
            }),
            bytesCount: e.outputBytesCount,
            encoding: e.encoding
        }
    }
    e.s(["createBatch", 0, A], 753084);
    let C = "DISCARDED",
        R = "SKIPPED";
    e.s(["DISCARDED", 0, C, "SKIPPED", 0, R, "abstractHooks", 0, function() {
        let e = {};
        return {
            register: (t, r) => (e[t] || (e[t] = []), e[t].push(r), {
                unregister: () => {
                    e[t] = e[t].filter(e => e !== r)
                }
            }),
            triggerHook(t, r) {
                let n = e[t] || [],
                    i = [];
                for (let e of n) {
                    let t = e(r);
                    if (t === C) return C;
                    t !== R && i.push(t)
                }
                return (0, b.combine)(...i)
            }
        }
    }], 401017);
    var k = e.i(326856);
    let D = "configuration",
        x = "usage",
        L = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "https://d3uc069fcn7uxw.cloudfront.net", "https://d20xtzwzcl0ceb.cloudfront.net", "http://localhost", "<anonymous>"],
        M = [c.INTAKE_SITE_US1_FED];

    function U() {
        return t || (t = new d.BufferedObservable(100)), t
    }

    function P(e, t) {
        U().notify({
            rawEvent: {
                type: "log",
                status: "error",
                ... function(e) {
                    if ((0, a.isError)(e)) {
                        var t;
                        let r = (0, y.computeStackTrace)(e);
                        return {
                            error: {
                                kind: r.name,
                                stack: (0, s.toStackTraceString)(((t = r).stack = t.stack.filter(e => !e.url || L.some(t => e.url.startsWith(t))), t))
                            },
                            message: r.message
                        }
                    }
                    return {
                        error: {
                            stack: a.NO_ERROR_STACK_PRESENT_MESSAGE
                        },
                        message: `Uncaught ${(0,v.jsonStringify)(e)}`
                    }
                }(e),
                ...t
            }
        })
    }
    e.s(["addTelemetryConfiguration", 0, function(e) {
        U().notify({
            rawEvent: {
                type: D,
                configuration: e
            }
        })
    }, "addTelemetryDebug", 0, function(e, t) {
        (0, p.displayIfDebugEnabled)(o.ConsoleApiName.debug, e, t), U().notify({
            rawEvent: {
                type: "log",
                message: e,
                status: "debug",
                ...t
            }
        })
    }, "addTelemetryError", 0, P, "addTelemetryMetrics", 0, function(e, t) {
        U().notify({
            rawEvent: {
                type: "log",
                message: e,
                status: "debug",
                ...t
            },
            metricName: e
        })
    }, "addTelemetryUsage", 0, function(e) {
        U().notify({
            rawEvent: {
                type: x,
                usage: e
            }
        })
    }, "startTelemetry", 0, function(e, t, r, n, i, o) {
        let a = new d.Observable,
            {
                stop: s
            } = function(e, t, r, n, i) {
                let o = [];
                if ((0, S.canUseEventBridge)()) {
                    let e = (0, S.getEventBridge)(),
                        t = i.subscribe(t => e.send("internal_telemetry", t));
                    o.push(t.unsubscribe)
                } else {
                    let a = [e.rumEndpointBuilder];
                    e.replica && e.site === c.INTAKE_SITE_STAGING && a.push(e.replica.rumEndpointBuilder);
                    let s = A({
                        encoder: n(4),
                        request: (0, _.createHttpRequest)(a, t),
                        flushController: (0, h.createFlushController)({
                            pageMayExitObservable: r,
                            sessionExpireObservable: new d.Observable
                        })
                    });
                    o.push(s.stop);
                    let u = i.subscribe(s.add);
                    o.push(u.unsubscribe)
                }
                return {
                    stop: () => o.forEach(e => e())
                }
            }(t, n, i, o, a),
            {
                enabled: y,
                metricsEnabled: T
            } = function(e, t, r, n, i = 1, o = 15) {
                var a;
                let s = {},
                    c = !M.includes(t.site) && (0, g.performDraw)(t.telemetrySampleRate),
                    d = {
                        log: c,
                        [D]: c && (0, g.performDraw)(t.telemetryConfigurationSampleRate),
                        [x]: c && (0, g.performDraw)(t.telemetryUsageSampleRate),
                        metric: c && (0, g.performDraw)(i)
                    },
                    y = {
                        is_local_file: (null == (a = k.globalObject.location) ? void 0 : a.protocol) === "file:",
                        is_worker: k.isWorkerEnvironment
                    },
                    S = U();
                return S.subscribe(({
                    rawEvent: i,
                    metricName: a
                }) => {
                    var c, p, g, S;
                    let h;
                    if (a && !d.metric || !d[i.type]) return;
                    let _ = a || i.status || i.type,
                        T = s[_];
                    if (T || (T = s[_] = new Set), T.size >= o) return;
                    let O = (0, v.jsonStringify)(i);
                    if (T.has(O)) return;
                    let w = r.triggerHook(1, {
                        startTime: (0, f.clocksNow)().relative
                    });
                    if (w === C) return;
                    let I = (c = w, p = e, g = i, S = y, h = {
                        type: "telemetry",
                        date: (0, f.clocksNow)().timeStamp,
                        service: p,
                        version: "6.26.0",
                        source: "browser",
                        _dd: {
                            format_version: 2
                        },
                        telemetry: (0, b.combine)(g, {
                            runtime_env: S,
                            connectivity: (0, E.getConnectivity)(),
                            sdk_setup: "npm"
                        }),
                        ddtags: (0, l.buildTags)(t).join(","),
                        experimental_features: Array.from((0, u.getExperimentalFeatures)())
                    }, (0, b.combine)(h, c));
                    n.notify(I), (0, m.sendToExtension)("telemetry", I), T.add(O)
                }), S.unbuffer(), (0, p.startMonitorErrorCollection)(P), {
                    enabled: c,
                    metricsEnabled: d.metric
                }
            }(e, t, r, a);
        return {
            stop: s,
            enabled: y,
            metricsEnabled: T
        }
    }], 793018);
    var $ = e.i(124385),
        B = e.i(568432);
    let V = [];

    function F(e, t, r, n) {
        var i, o;
        let a = (i = r, o = n, `_dd_c_${i}_${o}`);
        V.push((0, $.addEventListener)(e, window, "storage", ({
            key: e
        }) => {
            a === e && t.setContext(u())
        })), t.changeObservable.subscribe(function() {
            localStorage.setItem(a, JSON.stringify(t.getContext()))
        });
        let s = (0, b.combine)(u(), t.getContext());

        function u() {
            let e = localStorage.getItem(a);
            return e ? JSON.parse(e) : {}
        }(0, B.isEmptyObject)(s) || t.setContext(s)
    }
    var K = e.i(287555),
        j = e.i(57329);

    function q(e, t, r) {
        let n = { ...e
        };
        for (let [e, {
                required: i,
                type: a
            }] of Object.entries(t)) "string" !== a || H(n[e]) || (n[e] = String(n[e])), i && H(n[e]) && o.display.warn(`The property ${e} of ${r} is required; context will not be sent to the intake.`);
        return n
    }

    function H(e) {
        return null == e || "" === e
    }

    function G(e = "", {
        propertiesConfig: t = {}
    } = {}) {
        let r = {},
            n = new d.Observable,
            i = {
                getContext: () => (0, b.deepClone)(r),
                setContext: a => {
                    let s;
                    ((s = "object" === (0, j.getType)(a)) || o.display.error("Unsupported context:", a), s) ? r = (0, K.sanitize)(q(a, t, e)): i.clearContext(), n.notify()
                },
                setContextProperty: (i, o) => {
                    r = (0, K.sanitize)(q({ ...r,
                        [i]: o
                    }, t, e)), n.notify()
                },
                removeContextProperty: i => {
                    delete r[i], q(r, t, e), n.notify()
                },
                clearContext: () => {
                    r = {}, n.notify()
                },
                changeObservable: n
            };
        return i
    }

    function W() {
        return G("account", {
            propertiesConfig: {
                id: {
                    type: "string",
                    required: !0
                },
                name: {
                    type: "string"
                }
            }
        })
    }

    function z() {
        return G("global context")
    }

    function Y() {
        return G("user", {
            propertiesConfig: {
                id: {
                    type: "string"
                },
                name: {
                    type: "string"
                },
                email: {
                    type: "string"
                }
            }
        })
    }
    e.s(["createContextManager", 0, G], 595649), e.s(["buildAccountContextManager", 0, W, "startAccountContext", 0, function(e, t, r) {
        let n = W();
        return t.storeContextsAcrossPages && F(t, n, r, 4), e.register(0, () => {
            let e = n.getContext();
            return (0, B.isEmptyObject)(e) || !e.id ? R : {
                account: e
            }
        }), n
    }], 754614), e.s(["buildGlobalContextManager", 0, z, "startGlobalContext", 0, function(e, t, r, n) {
        let i = z();
        return t.storeContextsAcrossPages && F(t, i, r, 2), e.register(0, () => {
            let e = i.getContext();
            return n ? {
                context: e
            } : e
        }), i
    }], 110977), e.s(["buildUserContextManager", 0, Y, "startUserContext", 0, function(e, t, r, n) {
        let i = Y();
        return t.storeContextsAcrossPages && F(t, i, n, 1), e.register(0, ({
            eventType: e,
            startTime: n
        }) => {
            let o = i.getContext(),
                a = r.findTrackedSession(n);
            return (a && a.anonymousId && !o.anonymous_id && t.trackAnonymousUser && (o.anonymous_id = a.anonymousId), (0, B.isEmptyObject)(o)) ? R : {
                type: e,
                usr: o
            }
        }), e.register(1, ({
            startTime: e
        }) => {
            var t;
            return {
                anonymous_id: null == (t = r.findTrackedSession(e)) ? void 0 : t.anonymousId
            }
        }), i
    }], 815806);
    var J = e.i(563746),
        X = e.i(917701);

    function Z() {
        let e, t = window;
        if (t.Zone && (e = (0, X.getZoneJsOriginalValue)(t, "MutationObserver"), t.MutationObserver && e === t.MutationObserver)) {
            let r = new t.MutationObserver(J.noop),
                n = (0, X.getZoneJsOriginalValue)(r, "originalInstance");
            e = n && n.constructor
        }
        return e || (e = t.MutationObserver), e
    }
    e.s(["createDOMMutationObservable", 0, function() {
        let e = Z();
        return new d.Observable(t => {
            if (!e) return;
            let r = new e((0, p.monitor)(e => t.notify(e)));
            return r.observe(document, {
                attributes: !0,
                characterData: !0,
                childList: !0,
                subtree: !0
            }), () => r.disconnect()
        })
    }, "getMutationObserverConstructor", 0, Z], 534984);
    var Q = e.i(442504);

    function ee(e, t, r, {
        computeHandlingStack: n
    } = {}) {
        let i = e[t];
        if ("function" != typeof i)
            if (!(t in e && "string" == typeof t && t.startsWith("on"))) return {
                stop: J.noop
            };
            else i = J.noop;
        let o = !1,
            a = function() {
                let e;
                if (o) return i.apply(this, arguments);
                let t = Array.from(arguments);
                (0, p.callMonitored)(r, null, [{
                    target: this,
                    parameters: t,
                    onPostCall: t => {
                        e = t
                    },
                    handlingStack: n ? (0, s.createHandlingStack)("instrumented method") : void 0
                }]);
                let a = i.apply(this, t);
                return e && (0, p.callMonitored)(e, null, [a]), a
            };
        return e[t] = a, {
            stop: () => {
                o = !0, e[t] === a && (e[t] = i)
            }
        }
    }
    e.s(["instrumentMethod", 0, ee, "instrumentSetter", 0, function(e, t, r) {
        let n = Object.getOwnPropertyDescriptor(e, t);
        if (!n || !n.set || !n.configurable) return {
            stop: J.noop
        };
        let i = J.noop,
            o = (e, t) => {
                (0, Q.setTimeout)(() => {
                    o !== i && r(e, t)
                }, 0)
            },
            a = function(e) {
                n.set.call(this, e), o(this, e)
            };
        return Object.defineProperty(e, t, {
            set: a
        }), {
            stop: () => {
                var r;
                (null == (r = Object.getOwnPropertyDescriptor(e, t)) ? void 0 : r.set) === a && Object.defineProperty(e, t, n), o = i
            }
        }
    }], 291495), e.s(["createWindowOpenObservable", 0, function() {
        let e = new d.Observable,
            {
                stop: t
            } = ee(window, "open", () => e.notify());
        return {
            observable: e,
            stop: t
        }
    }], 91978), e.s(["startInternalContext", 0, function(e, t, r, n, i) {
        return {
            get: o => {
                let a = r.findView(o),
                    s = i.findUrl(o),
                    u = t.findTrackedSession(o);
                if (u && a && s) {
                    let t = n.findActionId(o);
                    return {
                        application_id: e,
                        session_id: u.id,
                        user_action: t ? {
                            id: t
                        } : void 0,
                        view: {
                            id: a.id,
                            name: a.name,
                            referrer: s.referrer,
                            url: s.url
                        }
                    }
                }
            }
        }
    }], 955165);
    let et = class {
        constructor() {
            this.callbacks = {}
        }
        notify(e, t) {
            let r = this.callbacks[e];
            r && r.forEach(e => e(t))
        }
        subscribe(e, t) {
            return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), {
                unsubscribe: () => {
                    this.callbacks[e] = this.callbacks[e].filter(e => t !== e)
                }
            }
        }
    };
    e.s(["LifeCycle", 0, et], 407480);
    let er = 4 * f.ONE_HOUR,
        en = 15 * f.ONE_MINUTE,
        ei = f.ONE_YEAR;

    function eo(e, t) {
        let r = e.indexOf(t);
        r >= 0 && e.splice(r, 1)
    }
    e.s(["SESSION_COOKIE_EXPIRATION_DELAY", 0, ei, "SESSION_EXPIRATION_DELAY", 0, en, "SESSION_NOT_TRACKED", 0, "0", "SESSION_TIME_OUT_DELAY", 0, er, "SessionPersistence", 0, {
        COOKIE: "cookie",
        LOCAL_STORAGE: "local-storage"
    }], 543757), e.s(["isNonEmptyArray", 0, function(e) {
        return Array.isArray(e) && e.length > 0
    }, "removeItem", 0, eo], 472822);
    let ea = 1 / 0,
        es = f.ONE_MINUTE,
        eu = null,
        el = new Set;

    function ec({
        expireDelay: e,
        maxEntries: t
    }) {
        let r = [];
        eu || (eu = (0, Q.setInterval)(() => void el.forEach(e => e()), es));
        let n = () => {
            let t = (0, f.relativeNow)() - e;
            for (; r.length > 0 && r[r.length - 1].endTime < t;) r.pop()
        };
        return el.add(n), {
            add: function(e, n) {
                let i = {
                    value: e,
                    startTime: n,
                    endTime: ea,
                    remove: () => {
                        eo(r, i)
                    },
                    close: e => {
                        i.endTime = e
                    }
                };
                return t && r.length >= t && r.pop(), r.unshift(i), i
            },
            find: function(e = ea, t = {
                returnInactive: !1
            }) {
                for (let n of r)
                    if (n.startTime <= e) {
                        if (t.returnInactive || e <= n.endTime) return n.value;
                        break
                    }
            },
            closeActive: function(e) {
                let t = r[0];
                t && t.endTime === ea && t.close(e)
            },
            findAll: function(e = ea, t = 0) {
                let n = (0, f.addDuration)(e, t);
                return r.filter(t => t.startTime <= n && e <= t.endTime).map(e => e.value)
            },
            reset: function() {
                r = []
            },
            stop: function() {
                el.delete(n), 0 === el.size && eu && ((0, Q.clearInterval)(eu), eu = null)
            }
        }
    }
    e.s(["createValueHistory", 0, ec], 619623), e.s(["startViewHistory", 0, function(e) {
        let t = ec({
            expireDelay: er
        });
        return e.subscribe(1, e => {
            var r;
            t.add({
                service: (r = e).service,
                version: r.version,
                context: r.context,
                id: r.id,
                name: r.name,
                startClocks: r.startClocks
            }, e.startClocks.relative)
        }), e.subscribe(6, ({
            endClocks: e
        }) => {
            t.closeActive(e.relative)
        }), e.subscribe(3, e => {
            let r = t.find(e.startClocks.relative);
            r && (e.name && (r.name = e.name), e.context && (r.context = e.context), r.sessionIsActive = e.sessionIsActive)
        }), e.subscribe(10, () => {
            t.reset()
        }), {
            findView: e => t.find(e),
            stop: () => {
                t.stop()
            }
        }
    }], 314748);
    let ed = {
            DOCUMENT: "document",
            XHR: "xhr",
            BEACON: "beacon",
            FETCH: "fetch",
            CSS: "css",
            JS: "js",
            IMAGE: "image",
            FONT: "font",
            MEDIA: "media",
            OTHER: "other"
        },
        ef = {
            FETCH: ed.FETCH,
            XHR: ed.XHR
        };

    function ep(e) {
        return ev(e, location.href).href
    }

    function em(e) {
        try {
            return !!ev(e)
        } catch (e) {
            return !1
        }
    }

    function eg(e) {
        let t = ev(e).pathname;
        return "/" === t[0] ? t : `/${t}`
    }

    function ev(e, t) {
        let {
            URL: n
        } = function() {
            if (!r) {
                let e, t;
                try {
                    (e = document.createElement("iframe")).style.display = "none", document.body.appendChild(e), t = e.contentWindow
                } catch (e) {
                    t = k.globalObject
                }
                r = {
                    URL: t.URL
                }, null == e || e.remove()
            }
            return r
        }();
        try {
            return void 0 !== t ? new n(e, t) : new n(e)
        } catch (e) {
            throw Error(`Failed to construct URL: ${String(e)}`)
        }
    }
    async function eb(e, t) {
        let r = e.getReader(),
            n = [];
        for (;;) {
            let e = await r.read();
            if (e.done) break;
            t.collectStreamBody && n.push(e.value)
        }
        return r.cancel().catch(J.noop), t.collectStreamBody ? (0, w.concatBuffers)(n) : void 0
    }
    e.s(["RequestType", 0, ef, "ResourceType", 0, ed], 633673), e.s(["buildUrl", 0, ev, "getPathName", 0, eg, "isValidUrl", 0, em, "normalizeUrl", 0, ep], 901721);
    var ey = e.i(470252);
    let eE = [];
    async function eS(e, t, r) {
        var n, i;
        let o;
        r.state = "resolve";
        try {
            o = await t
        } catch (t) {
            r.status = 0, r.isAborted = (null == (i = null == (n = r.init) ? void 0 : n.signal) ? void 0 : i.aborted) || t instanceof DOMException && t.code === DOMException.ABORT_ERR, r.error = t, e.notify(r);
            return
        }
        r.response = o, r.status = o.status, r.responseType = o.type, r.isAborted = !1;
        let a = eE.reduce((e, t) => Math.max(e, t(r)), 0);
        if (0 !== a) {
            let e = (0, ey.tryToClone)(o);
            if (e && e.body) try {
                let t = await eb(e.body, {
                    collectStreamBody: 2 === a
                });
                r.responseBody = t && new TextDecoder().decode(t)
            } catch (e) {}
        }
        e.notify(r)
    }
    e.s(["initFetchObservable", 0, function({
        responseBodyAction: e
    } = {}) {
        return e && eE.push(e), n || (n = new d.Observable(e => {
            if (!k.globalObject.fetch) return;
            let {
                stop: t
            } = ee(k.globalObject, "fetch", t => (function({
                parameters: e,
                onPostCall: t,
                handlingStack: r
            }, n) {
                let [i, o] = e, a = o && o.method;
                void 0 === a && i instanceof Request && (a = i.method);
                let s = void 0 !== a ? String(a).toUpperCase() : "GET",
                    u = i instanceof Request ? i.url : ep(String(i)),
                    l = {
                        state: "start",
                        init: o,
                        input: i,
                        method: s,
                        startClocks: (0, f.clocksNow)(),
                        url: u,
                        handlingStack: r
                    };
                n.notify(l), e[0] = l.input, e[1] = l.init, t(e => {
                    eS(n, e, l).catch(p.monitorError)
                })
            })(t, e), {
                computeHandlingStack: !0
            });
            return t
        })), n
    }], 553790);
    let eh = new WeakMap;

    function e_({
        target: e,
        parameters: [t, r]
    }) {
        eh.set(e, {
            state: "open",
            method: String(t).toUpperCase(),
            url: ep(String(r))
        })
    }

    function eT({
        target: e
    }) {
        let t = eh.get(e);
        t && (t.isAborted = !0)
    }

    function eO(e) {
        return e ? (parseInt(e, 10) ^ 16 * Math.random() >> parseInt(e, 10) / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, eO)
    }
    e.s(["initXhrObservable", 0, function(e) {
        var t;
        return i || (t = e, i = new d.Observable(e => {
            let {
                stop: r
            } = ee(XMLHttpRequest.prototype, "open", e_), {
                stop: n
            } = ee(XMLHttpRequest.prototype, "send", r => {
                ! function({
                    target: e,
                    parameters: [t],
                    handlingStack: r
                }, n, i) {
                    let o = eh.get(e);
                    if (!o) return;
                    o.state = "start", o.startClocks = (0, f.clocksNow)(), o.isAborted = !1, o.xhr = e, o.handlingStack = r, o.requestBody = t;
                    let a = !1,
                        {
                            stop: s
                        } = ee(e, "onreadystatechange", () => {
                            e.readyState === XMLHttpRequest.DONE && u()
                        }),
                        u = () => {
                            l(), s(), a || (a = !0, o.state = "complete", o.duration = (0, f.elapsed)(o.startClocks.timeStamp, (0, f.timeStampNow)()), o.status = e.status, "string" == typeof e.response && (o.responseBody = e.response), i.notify((0, B.shallowClone)(o)))
                        },
                        {
                            stop: l
                        } = (0, $.addEventListener)(n, e, "loadend", u);
                    i.notify(o)
                }(r, t, e)
            }, {
                computeHandlingStack: !0
            }), {
                stop: i
            } = ee(XMLHttpRequest.prototype, "abort", eT);
            return () => {
                r(), n(), i()
            }
        })), i
    }], 968678);
    let ew = /(\S+?)\s*=\s*(.+?)(?:;|$)/g;

    function eI(e, t, r) {
        let n = function(e, t) {
            let r = `/api/v2/${t}`,
                n = e.proxy;
            if ("string" == typeof n) {
                let e = ep(n);
                return t => `${e}?ddforward=${encodeURIComponent(`${r}?${t}`)}`
            }
            if ("function" == typeof n) return e => n({
                path: r,
                parameters: e
            });
            let i = eA(t, e);
            return e => `https://${i}${r}?${e}`
        }(e, t);
        return {
            build: (i, o) => n(function({
                clientToken: e,
                internalAnalyticsSubdomain: t,
                source: r = "browser"
            }, n, i, {
                retry: o,
                encoding: a
            }, s = []) {
                let u = [`ddsource=${r}`, `dd-api-key=${e}`, `dd-evp-origin-version=${encodeURIComponent("6.26.0")}`, "dd-evp-origin=browser", `dd-request-id=${eO()}`].concat(s);
                return a && u.push(`dd-evp-encoding=${a}`), "rum" === n && (u.push(`batch_time=${(0,f.timeStampNow)()}`, `_dd.api=${i}`), o && u.push(`_dd.retry_count=${o.count}`, `_dd.retry_after=${o.lastFailureStatus}`)), t && u.reverse(), u.join("&")
            }(e, t, i, o, r)),
            trackType: t
        }
    }

    function eA(e, t) {
        let {
            site: r = c.INTAKE_SITE_US1,
            internalAnalyticsSubdomain: n
        } = t;
        if ("logs" === e && t.usePciIntake && r === c.INTAKE_SITE_US1) return c.PCI_INTAKE_HOST_US1;
        if (n && r === c.INTAKE_SITE_US1) return `${n}.${c.INTAKE_SITE_US1}`;
        if (r === c.INTAKE_SITE_FED_STAGING) return `http-intake.logs.${r}`;
        let i = r.split("."),
            o = i.pop();
        return `browser-intake-${i.join("-")}.${o}`
    }

    function eN(e) {
        return c.INTAKE_URL_PARAMETERS.every(t => e.includes(t))
    }
    e.s(["findAllCommaSeparatedValues", 0, function(e) {
        let t = new Map;
        for (ew.lastIndex = 0;;) {
            let r = ew.exec(e);
            if (r) {
                let e = r[1],
                    n = r[2];
                t.has(e) ? t.get(e).push(n) : t.set(e, [n])
            } else break
        }
        return t
    }, "findCommaSeparatedValue", 0, function(e, t) {
        for (ew.lastIndex = 0;;) {
            let r = ew.exec(e);
            if (r) {
                if (r[1] === t) return r[2]
            } else break
        }
    }, "findCommaSeparatedValues", 0, function(e) {
        let t = new Map;
        for (ew.lastIndex = 0;;) {
            let r = ew.exec(e);
            if (r) t.set(r[1], r[2]);
            else break
        }
        return t
    }, "generateUUID", 0, eO, "safeTruncate", 0, function(e, t, r = "") {
        let n = e.charCodeAt(t - 1),
            i = n >= 55296 && n <= 56319 ? t + 1 : t;
        return e.length <= i ? e : `${e.slice(0,i)}${r}`
    }], 328861), e.s(["buildEndpointHost", 0, eA, "createEndpointBuilder", 0, eI], 279710), e.s(["computeTransportConfiguration", 0, function(e) {
        var t, r;
        let n = e.site || c.INTAKE_SITE_US1,
            i = "flutter" === (t = e.source) || "unity" === t ? t : "browser",
            o = {
                logsEndpointBuilder: eI(r = { ...e,
                    site: n,
                    source: i
                }, "logs"),
                rumEndpointBuilder: eI(r, "rum"),
                profilingEndpointBuilder: eI(r, "profile"),
                sessionReplayEndpointBuilder: eI(r, "replay"),
                exposuresEndpointBuilder: eI(r, "exposures"),
                flagEvaluationEndpointBuilder: eI(r, "flagevaluation")
            };
        return {
            replica: function(e) {
                if (!e.replica) return;
                let t = { ...e,
                    site: c.INTAKE_SITE_US1,
                    clientToken: e.replica.clientToken
                };
                return {
                    logsEndpointBuilder: eI(t, "logs"),
                    rumEndpointBuilder: eI(t, "rum", [`application.id=${e.replica.applicationId}`])
                }
            }({ ...e,
                site: n,
                source: i
            }),
            site: n,
            source: i,
            ...o
        }
    }, "isIntakeUrl", 0, eN], 268562);
    let eC = "initial_document",
        eR = [
            [ed.DOCUMENT, e => eC === e],
            [ed.XHR, e => "xmlhttprequest" === e],
            [ed.FETCH, e => "fetch" === e],
            [ed.BEACON, e => "beacon" === e],
            [ed.CSS, (e, t) => /\.css$/i.test(t)],
            [ed.JS, (e, t) => /\.js$/i.test(t)],
            [ed.IMAGE, (e, t) => ["image", "img", "icon"].includes(e) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(t)],
            [ed.FONT, (e, t) => null !== /\.(woff|eot|woff2|ttf)$/i.exec(t)],
            [ed.MEDIA, (e, t) => ["audio", "video"].includes(e) || null !== /\.(mp3|mp4)$/i.exec(t)]
        ];

    function ek(...e) {
        for (let t = 1; t < e.length; t += 1)
            if (e[t - 1] > e[t]) return !1;
        return !0
    }

    function eD(e) {
        var t;
        let r = ek(e.startTime, e.fetchStart, e.domainLookupStart, e.domainLookupEnd, e.connectStart, e.connectEnd, e.requestStart, e.responseStart, e.responseEnd),
            n = !((t = e).redirectEnd > t.startTime) || ek(e.startTime, e.redirectStart, e.redirectEnd, e.fetchStart);
        return r && n
    }

    function ex(e, t, r) {
        if (e <= t && t <= r) return {
            duration: (0, f.toServerDuration)((0, f.elapsed)(t, r)),
            start: (0, f.toServerDuration)((0, f.elapsed)(e, t))
        }
    }
    let eL = /data:(.+)?(;base64)?,/g;
    e.s(["FAKE_INITIAL_DOCUMENT", 0, eC, "computeResourceEntryDeliveryType", 0, function(e) {
        return "" === e.deliveryType ? "other" : e.deliveryType
    }, "computeResourceEntryDetails", 0, function(e) {
        if (!eD(e)) return;
        let {
            startTime: t,
            fetchStart: r,
            workerStart: n,
            redirectStart: i,
            redirectEnd: o,
            domainLookupStart: a,
            domainLookupEnd: s,
            connectStart: u,
            secureConnectionStart: l,
            connectEnd: c,
            requestStart: d,
            responseStart: f,
            responseEnd: p
        } = e, m = {
            download: ex(t, f, p),
            first_byte: ex(t, d, f)
        };
        return 0 < n && n < r && (m.worker = ex(t, n, r)), r < c && (m.connect = ex(t, u, c), u <= l && l <= c && (m.ssl = ex(t, l, c))), r < s && (m.dns = ex(t, a, s)), t < o && (m.redirect = ex(t, i, o)), m
    }, "computeResourceEntryDuration", 0, function(e) {
        let {
            duration: t,
            startTime: r,
            responseEnd: n
        } = e;
        return 0 === t && r < n ? (0, f.elapsed)(r, n) : t
    }, "computeResourceEntryProtocol", 0, function(e) {
        return "" === e.nextHopProtocol ? void 0 : e.nextHopProtocol
    }, "computeResourceEntrySize", 0, function(e) {
        if (e.startTime < e.responseStart) {
            let {
                encodedBodySize: t,
                decodedBodySize: r,
                transferSize: n
            } = e;
            return {
                size: r,
                encoded_body_size: t,
                decoded_body_size: r,
                transfer_size: n
            }
        }
        return {
            size: void 0,
            encoded_body_size: void 0,
            decoded_body_size: void 0,
            transfer_size: void 0
        }
    }, "computeResourceEntryType", 0, function(e) {
        let t = e.name;
        if (!em(t)) return ed.OTHER;
        let r = eg(t);
        for (let [t, n] of eR)
            if (n(e.initiatorType, r)) return t;
        return ed.OTHER
    }, "hasValidResourceEntryDuration", 0, function(e) {
        return e.duration >= 0
    }, "hasValidResourceEntryTimings", 0, eD, "isAllowedRequestUrl", 0, function(e) {
        return e && (!eN(e) || (0, u.isExperimentalFeatureEnabled)(u.ExperimentalFeature.TRACK_INTAKE_REQUESTS))
    }, "isResourceEntryRequestType", 0, function(e) {
        return "xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType
    }, "sanitizeIfLongDataUrl", 0, function(e, t = 24e3) {
        if (e.length <= t || !e.startsWith("data:")) return e;
        let r = e.substring(0, 100).match(eL);
        return r ? `${r[0]}[...]` : e
    }], 438137), e.s(["isMatchOption", 0, function(e) {
        let t = (0, j.getType)(e);
        return "string" === t || "function" === t || e instanceof RegExp
    }, "matchList", 0, function(e, t, r = !1) {
        return e.some(e => {
            try {
                if ("function" == typeof e) return e(t);
                if (e instanceof RegExp) return e.test(t);
                if ("string" == typeof e) return r ? t.startsWith(e) : e === t
            } catch (e) {
                o.display.error(e)
            }
            return !1
        })
    }], 921458)
}, 393713, 989584, 774557, 61555, 867494, 533253, 450653, 158239, 278487, 942637, 380466, 796411, 748407, 384641, 376426, 197038, 730306, e => {
    "use strict";
    let t, r, n, i, o, a, s, u, l, c;
    var d, f, p = e.i(253265),
        m = e.i(590336),
        g = e.i(793018),
        v = e.i(841259),
        b = e.i(754614),
        y = e.i(110977),
        E = e.i(815806),
        S = e.i(534984),
        h = e.i(91978),
        _ = e.i(955165),
        T = e.i(407480),
        O = e.i(314748),
        w = e.i(633673),
        I = e.i(602006),
        A = e.i(553790),
        N = e.i(968678),
        C = e.i(438137),
        R = e.i(103067),
        k = e.i(568432),
        D = e.i(921458),
        x = e.i(12379),
        L = e.i(449305),
        M = e.i(982067),
        U = e.i(442504),
        P = e.i(628872),
        $ = e.i(563746),
        B = e.i(328861);

    function V() {
        return 0 === F()
    }

    function F() {
        return null != t ? t : t = function(e = window) {
            var t;
            let r = e.navigator.userAgent;
            return e.chrome || /HeadlessChrome/.test(r) ? 0 : (null == (t = e.navigator.vendor) ? void 0 : t.indexOf("Apple")) === 0 || /safari/i.test(r) && !/chrome|android/i.test(r) ? 1 : 2
        }()
    }
    e.s(["isChromium", 0, V, "isSafari", 0, function() {
        return 1 === F()
    }], 989584);
    var K = e.i(901721);

    function j(e, t, r = 0, n) {
        let i = new Date;
        i.setTime(i.getTime() + r);
        let o = `expires=${i.toUTCString()}`,
            a = n && n.crossSite ? "none" : "strict",
            s = n && n.domain ? `;domain=${n.domain}` : "",
            u = n && n.secure ? ";secure" : "",
            l = n && n.partitioned ? ";partitioned" : "";
        document.cookie = `${e}=${t};${o};path=/;samesite=${a}${s}${u}${l}`
    }

    function q(e) {
        return (0, B.findCommaSeparatedValue)(document.cookie, e)
    }

    function H(e) {
        return (0, B.findAllCommaSeparatedValues)(document.cookie).get(e) || []
    }

    function G(e) {
        return r || (r = (0, B.findCommaSeparatedValues)(document.cookie)), r.get(e)
    }

    function W(e) {
        if (void 0 === document.cookie || null === document.cookie) return !1;
        try {
            let t = `dd_cookie_test_${(0,B.generateUUID)()}`,
                r = "test";
            j(t, r, I.ONE_MINUTE, e);
            let n = q(t) === r;
            return j(t, "", 0, e), n
        } catch (e) {
            return L.display.error(e), !1
        }
    }

    function z(e = location.hostname, t = document.referrer) {
        if (void 0 === n) {
            let r = function(e, t) {
                try {
                    return e || (0, K.buildUrl)(t).hostname
                } catch (e) {}
            }(e, t);
            if (r) {
                let e = `dd_site_test_${(0,B.generateUUID)()}`,
                    t = r.split("."),
                    i = t.pop();
                for (; t.length && !q(e);) i = `${t.pop()}.${i}`, j(e, "test", I.ONE_SECOND, {
                    domain: i
                });
                j(e, "", 0, {
                    domain: i
                }), n = i
            }
        }
        return n
    }
    e.s(["areCookiesAuthorized", 0, W, "getCookie", 0, q, "getCookies", 0, H, "getCurrentSite", 0, z, "getInitCookie", 0, G, "setCookie", 0, j], 774557);
    let Y = "_dd_s";
    var J = e.i(543757);
    let X = /^([a-zA-Z]+)=([a-z0-9-]+)$/;

    function Z(e, t) {
        let r = {
            isExpired: "1"
        };
        return t.trackAnonymousUser && (null == e ? void 0 : e.anonymousId) && (r.anonymousId = null == e ? void 0 : e.anonymousId), r
    }

    function Q(e) {
        return (0, k.isEmptyObject)(e)
    }

    function ee(e) {
        var t;
        return void 0 !== e.isExpired || !((void 0 === (t = e).created || (0, I.dateNow)() - Number(t.created) < J.SESSION_TIME_OUT_DELAY) && (void 0 === t.expire || (0, I.dateNow)() < Number(t.expire)))
    }

    function et(e) {
        e.expire = String((0, I.dateNow)() + J.SESSION_EXPIRATION_DELAY)
    }

    function er(e) {
        return (0, R.objectEntries)(e).map(([e, t]) => "anonymousId" === e ? `aid=${t}` : `${e}=${t}`).join("&")
    }

    function en(e) {
        let t = {};
        return e && (-1 !== e.indexOf("&") || X.test(e)) && e.split("&").forEach(e => {
            let r = X.exec(e);
            if (null !== r) {
                let [, e, n] = r;
                "aid" === e ? t.anonymousId = n : t[e] = n
            }
        }), t
    }

    function ei(e) {
        let t = function(e) {
            let t = {};
            if (t.secure = !!e.useSecureSessionCookie || !!e.usePartitionedCrossSiteSessionCookie, t.crossSite = !!e.usePartitionedCrossSiteSessionCookie, t.partitioned = !!e.usePartitionedCrossSiteSessionCookie, e.trackSessionAcrossSubdomains) {
                let e = z();
                if (!e) return;
                t.domain = e
            }
            return t
        }(e);
        return t && W(t) ? {
            type: J.SessionPersistence.COOKIE,
            cookieOptions: t
        } : void 0
    }

    function eo(e, t, r, n) {
        let i = er(r);
        t.betaEncodeCookieOptions && (i = er({ ...r,
            ...!(0, k.isEmptyObject)(r) ? {
                c: es(e)
            } : {}
        })), j(Y, i, t.trackAnonymousUser ? J.SESSION_COOKIE_EXPIRATION_DELAY : n, e)
    }

    function ea(e, t) {
        return t.betaEncodeCookieOptions ? function(e) {
            let t, r = H(Y),
                n = es(e);
            for (let e of r.reverse())
                if ((t = en(e)).c === n) break;
            return null == t || delete t.c, null != t ? t : {}
        }(e) : en(q(Y))
    }

    function es(e) {
        return ((e.domain ? e.domain.split(".").length - 1 : 0) << 1 | !!e.crossSite).toString(16)
    }

    function eu() {
        try {
            let e = (0, B.generateUUID)(),
                t = `_dd_test_${e}`;
            localStorage.setItem(t, e);
            let r = localStorage.getItem(t);
            return localStorage.removeItem(t), e === r ? {
                type: J.SessionPersistence.LOCAL_STORAGE
            } : void 0
        } catch (e) {
            return
        }
    }

    function el(e) {
        localStorage.setItem(Y, er(e))
    }

    function ec() {
        return en(localStorage.getItem(Y))
    }
    let ed = I.ONE_SECOND,
        ef = [];

    function ep(e, t, r = 0) {
        var n;
        let o, {
                isLockEnabled: a,
                persistSession: s,
                expireSession: u
            } = t,
            l = e => s({ ...e,
                lock: o
            }),
            c = () => {
                let {
                    lock: e,
                    ...r
                } = t.retrieveSession();
                return {
                    session: r,
                    lock: e && ! function(e) {
                        let [, t] = e.split("--");
                        return !t || (0, I.elapsed)(Number(t), (0, I.timeStampNow)()) > ed
                    }(e) ? e : void 0
                }
            };
        if (i || (i = e), e !== i) return void ef.push(e);
        if (a && r >= 100) return void eg(t);
        let d = c();
        if (a && (d.lock || (o = (0, B.generateUUID)() + "--" + (0, I.timeStampNow)(), l(d.session), (d = c()).lock !== o))) return void em(e, t, r);
        let f = e.process(d.session);
        if (a && (d = c()).lock !== o) return void em(e, t, r);
        if (f && (ee(f) ? u(f) : (et(f), a ? l(f) : s(f))), a && !(f && ee(f))) {
            if ((d = c()).lock !== o) return void em(e, t, r);
            s(d.session), f = d.session
        }
        null == (n = e.after) || n.call(e, f || d.session), eg(t)
    }

    function em(e, t, r) {
        (0, U.setTimeout)(() => {
            ep(e, t, r + 1)
        }, 10)
    }

    function eg(e) {
        i = void 0;
        let t = ef.shift();
        t && ep(t, e)
    }
    let ev = I.ONE_SECOND,
        eb = {
            GRANTED: "granted",
            NOT_GRANTED: "not-granted"
        };
    e.s(["TrackingConsent", 0, eb, "createTrackingConsentState", 0, function(e) {
        let t = new P.Observable;
        return {
            tryToInit(t) {
                e || (e = t)
            },
            update(r) {
                e = r, t.notify()
            },
            isGranted: () => e === eb.GRANTED,
            observable: t
        }
    }], 61555);
    let ey = ["chrome-extension://", "moz-extension://"];

    function eE(e) {
        return ey.some(t => e.includes(t))
    }
    var eS = e.i(326856),
        eh = e.i(268562);
    let e_ = {
            ALLOW: "allow",
            MASK: "mask",
            MASK_USER_INPUT: "mask-user-input",
            MASK_UNLESS_ALLOWLISTED: "mask-unless-allowlisted"
        },
        eT = {
            ALL: "all",
            SAMPLED: "sampled"
        };

    function eO(e, t) {
        return null == e || "string" == typeof e || (L.display.error(`${t} must be defined as a string`), !1)
    }

    function ew(e, t) {
        return void 0 === e || !!(0, M.isPercentage)(e) || (L.display.error(`${t} Sample Rate should be a number between 0 and 100`), !1)
    }
    e.s(["DefaultPrivacyLevel", 0, e_, "TraceContextInjection", 0, eT, "isSampleRate", 0, ew, "serializeConfiguration", 0, function(e) {
        return {
            session_sample_rate: e.sessionSampleRate,
            telemetry_sample_rate: e.telemetrySampleRate,
            telemetry_configuration_sample_rate: e.telemetryConfigurationSampleRate,
            telemetry_usage_sample_rate: e.telemetryUsageSampleRate,
            use_before_send: !!e.beforeSend,
            use_partitioned_cross_site_session_cookie: e.usePartitionedCrossSiteSessionCookie,
            use_secure_session_cookie: e.useSecureSessionCookie,
            use_proxy: !!e.proxy,
            silent_multiple_init: e.silentMultipleInit,
            track_session_across_subdomains: e.trackSessionAcrossSubdomains,
            track_anonymous_user: e.trackAnonymousUser,
            session_persistence: e.sessionPersistence,
            allow_fallback_to_local_storage: !!e.allowFallbackToLocalStorage,
            store_contexts_across_pages: !!e.storeContextsAcrossPages,
            allow_untrusted_events: !!e.allowUntrustedEvents,
            tracking_consent: e.trackingConsent,
            use_allowed_tracking_origins: Array.isArray(e.allowedTrackingOrigins),
            beta_encode_cookie_options: e.betaEncodeCookieOptions,
            source: e.source,
            sdk_version: e.sdkVersion,
            variant: e.variant
        }
    }, "validateAndBuildConfiguration", 0, function(e, t) {
        var r, n, i, o, a, s, u, l, c, d, f;
        return e && e.clientToken ? void 0 === e.allowedTrackingOrigins || Array.isArray(e.allowedTrackingOrigins) ? (!(f = e.site) || "string" != typeof f || /(datadog|ddog|datad0g|dd0g)/.test(f) || (L.display.error(`Site should be a valid Datadog site. ${L.MORE_DETAILS} ${L.DOCS_ORIGIN}/getting_started/site/.`), 0)) && ew(e.sessionSampleRate, "Session") && ew(e.telemetrySampleRate, "Telemetry") && ew(e.telemetryConfigurationSampleRate, "Telemetry Configuration") && ew(e.telemetryUsageSampleRate, "Telemetry Usage") && eO(e.version, "Version") && eO(e.env, "Env") && eO(e.service, "Service") && function(e, t, r = "u" > typeof location ? location.origin : "") {
            let n = e.allowedTrackingOrigins;
            if (!n) return ! function(e, t = "") {
                return !eE(e) && eE(t.split("\n").filter(e => {
                    let t = e.trim();
                    return t.length && /^at\s+|@/.test(t)
                })[1] || "")
            }(r, t) || (L.display.error("Running the Browser SDK in a Web extension content script is forbidden unless the `allowedTrackingOrigins` option is provided."), !1);
            let i = (0, D.matchList)(n, r);
            return i || L.display.error("SDK initialized on a non-allowed domain."), i
        }(e, null != t ? t : "") ? void 0 === e.trackingConsent || (0, k.objectHasValue)(eb, e.trackingConsent) ? {
            beforeSend: e.beforeSend && (0, x.catchUserErrors)(e.beforeSend, "beforeSend threw an error:"),
            sessionStoreStrategyType: eS.isWorkerEnvironment ? void 0 : function(e) {
                switch (e.sessionPersistence) {
                    case J.SessionPersistence.COOKIE:
                        return ei(e);
                    case J.SessionPersistence.LOCAL_STORAGE:
                        return eu();
                    case void 0:
                        {
                            let t = ei(e);
                            return !t && e.allowFallbackToLocalStorage && (t = eu()),
                            t
                        }
                    default:
                        L.display.error(`Invalid session persistence '${String(e.sessionPersistence)}'`)
                }
            }(e),
            sessionSampleRate: null != (r = e.sessionSampleRate) ? r : 100,
            telemetrySampleRate: null != (n = e.telemetrySampleRate) ? n : 20,
            telemetryConfigurationSampleRate: null != (i = e.telemetryConfigurationSampleRate) ? i : 5,
            telemetryUsageSampleRate: null != (o = e.telemetryUsageSampleRate) ? o : 5,
            service: null != (a = e.service) ? a : void 0,
            env: null != (s = e.env) ? s : void 0,
            version: null != (u = e.version) ? u : void 0,
            datacenter: null != (l = e.datacenter) ? l : void 0,
            silentMultipleInit: !!e.silentMultipleInit,
            allowUntrustedEvents: !!e.allowUntrustedEvents,
            trackingConsent: null != (c = e.trackingConsent) ? c : eb.GRANTED,
            trackAnonymousUser: null == (d = e.trackAnonymousUser) || d,
            storeContextsAcrossPages: !!e.storeContextsAcrossPages,
            betaEncodeCookieOptions: !!e.betaEncodeCookieOptions,
            variant: e.variant,
            sdkVersion: e.sdkVersion,
            ...(0, eh.computeTransportConfiguration)(e)
        } : void L.display.error('Tracking Consent should be either "granted" or "not-granted"') : void 0 : void L.display.error("Allowed Tracking Origins must be an array") : void L.display.error("Client Token is not configured, we will not send any data.")
    }], 867494);
    let eI = new Map;

    function eA(e, t) {
        var r, n;
        let i, o, a;
        if (100 === t) return !0;
        if (0 === t) return !1;
        let s = eI.get(t);
        return s && e === s.sessionId ? s.decision : (i = window.BigInt ? (r = BigInt(`0x${e.split("-")[4]}`), n = t, o = BigInt("1111111111111111111"), Number(r * o % (a = BigInt("0x10000000000000000"))) <= n / 100 * Number(a)) : (0, M.performDraw)(t), eI.set(t, {
            sessionId: e,
            decision: i
        }), i)
    }
    e.s(["isSampled", 0, eA], 533253);

    function eN(e) {
        let t = crypto.getRandomValues(new Uint32Array(2));
        return 63 === e && (t[t.length - 1] >>>= 1), {
            toString(e = 10) {
                let r = t[1],
                    n = t[0],
                    i = "";
                do {
                    let t = r % e * 0x100000000 + n;
                    r = Math.floor(r / e), n = Math.floor(t / e), i = (t % e).toString(e) + i
                } while (r || n) return i
            }
        }
    }

    function eC(e) {
        return e.toString(16).padStart(16, "0")
    }

    function eR(e) {
        0 !== e.status || e.isAborted || (e.traceId = void 0, e.spanId = void 0, e.traceSampled = void 0)
    }

    function ek(e, t, r, n, i, o) {
        let a = r.findTrackedSession();
        if (!a) return;
        let s = e.allowedTracingUrls.find(e => (0, D.matchList)([e.match], t.url, !0));
        if (!s) return;
        let u = eA(a.id, e.traceSampleRate);
        (u || e.traceContextInjection === eT.ALL) && (t.traceSampled = u, t.traceId = eN(64), t.spanId = eN(63), o(function(e, t, r, n, i, o, a, s) {
            let u = {};
            if (i.forEach(n => {
                    switch (n) {
                        case "datadog":
                            Object.assign(u, {
                                "x-datadog-origin": "rum",
                                "x-datadog-parent-id": t.toString(),
                                "x-datadog-sampling-priority": r ? "1" : "0",
                                "x-datadog-trace-id": e.toString()
                            });
                            break;
                        case "tracecontext":
                            Object.assign(u, {
                                traceparent: `00-0000000000000000${eC(e)}-${eC(t)}-0${r?"1":"0"}`,
                                tracestate: `dd=s:${r?"1":"0"};o:rum`
                            });
                            break;
                        case "b3":
                            Object.assign(u, {
                                b3: `${eC(e)}-${eC(t)}-${r?"1":"0"}`
                            });
                            break;
                        case "b3multi":
                            Object.assign(u, {
                                "X-B3-TraceId": eC(e),
                                "X-B3-SpanId": eC(t),
                                "X-B3-Sampled": r ? "1" : "0"
                            })
                    }
                }), s.propagateTraceBaggage) {
                let e = {
                        "session.id": n
                    },
                    t = o.getContext().id;
                "string" == typeof t && (e["user.id"] = t);
                let r = a.getContext().id;
                "string" == typeof r && (e["account.id"] = r);
                let i = Object.entries(e).map(([e, t]) => `${e}=${encodeURIComponent(t)}`).join(",");
                i && (u.baggage = i)
            }
            return u
        }(t.traceId, t.spanId, t.traceSampled, a.id, s.propagatorTypes, n, i, e)))
    }
    var eD = e.i(472822);
    let ex = 32 * e.i(548544).ONE_KIBI_BYTE;

    function eL(e, t) {
        return t.allowedGraphQlUrls.find(t => (0, D.matchList)([t.match], e))
    }
    let eM = 1;

    function eU() {
        let e = eM;
        return eM += 1, e
    }
    var eP = e.i(401017);

    function e$(e) {
        return (0, M.isNumber)(e) && e < 0 ? void 0 : e
    }
    let eB = {
            ACTION: "action",
            ERROR: "error",
            LONG_TASK: "long_task",
            VIEW: "view",
            RESOURCE: "resource",
            VITAL: "vital"
        },
        eV = {
            LONG_TASK: "long-task",
            LONG_ANIMATION_FRAME: "long-animation-frame"
        },
        eF = {
            INITIAL_LOAD: "initial_load",
            ROUTE_CHANGE: "route_change",
            BF_CACHE: "bf_cache"
        },
        eK = {
            CLICK: "click",
            CUSTOM: "custom",
            TAP: "tap",
            SCROLL: "scroll",
            SWIPE: "swipe",
            APPLICATION_START: "application_start",
            BACK: "back"
        },
        ej = {
            RAGE_CLICK: "rage_click",
            ERROR_CLICK: "error_click",
            DEAD_CLICK: "dead_click"
        },
        eq = {
            DURATION: "duration",
            OPERATION_STEP: "operation_step"
        };

    function eH(e) {
        return e.nodeType === Node.TEXT_NODE
    }

    function eG(e) {
        return e.nodeType === Node.COMMENT_NODE
    }

    function eW(e) {
        return e.nodeType === Node.ELEMENT_NODE
    }

    function ez(e) {
        return eW(e) && !!e.shadowRoot
    }

    function eY(e) {
        return !!e.host && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && eW(e.host)
    }

    function eJ(e) {
        return eY(e) ? e.host : e.parentNode
    }

    function eX(e) {
        if (e.parentElement) return e.parentElement;
        let t = e.parentNode;
        return t && eY(t) ? t.host : null
    }
    e.s(["ActionType", 0, eK, "FrustrationType", 0, ej, "RumEventType", 0, eB, "RumLongTaskEntryType", 0, eV, "ViewLoadingType", 0, eF, "VitalType", 0, eq], 450653), e.s(["forEachChildNodes", 0, function(e, t) {
        let r = e.firstChild;
        for (; r;) t(r), r = r.nextSibling;
        ez(e) && t(e.shadowRoot)
    }, "getParentElement", 0, eX, "getParentNode", 0, eJ, "hasChildNodes", 0, function(e) {
        return e.childNodes.length > 0 || ez(e)
    }, "isCommentNode", 0, eG, "isElementNode", 0, eW, "isNodeShadowHost", 0, ez, "isNodeShadowRoot", 0, eY, "isTextNode", 0, eH], 158239);
    var eZ = e.i(38464),
        eQ = e.i(124385);

    function e0(e, t) {
        return new P.Observable(r => {
            var n;
            let i, a;
            if (!window.PerformanceObserver) return;
            let s = e => {
                    let t = e.filter(e => {
                        var t;
                        return !((t = e).entryType === f.RESOURCE && (!(0, C.isAllowedRequestUrl)(t.name) || !(0, C.hasValidResourceEntryDuration)(t)))
                    });
                    t.length > 0 && r.notify(t)
                },
                u = !0,
                l = new PerformanceObserver((0, eZ.monitor)(e => {
                    u ? i = (0, U.setTimeout)(() => s(e.getEntries())) : s(e.getEntries())
                }));
            try {
                l.observe(t)
            } catch (e) {
                if ([f.RESOURCE, f.NAVIGATION, f.LONG_TASK, f.PAINT].includes(t.type)) {
                    t.buffered && (i = (0, U.setTimeout)(() => s(performance.getEntriesByType(t.type))));
                    try {
                        l.observe({
                            entryTypes: [t.type]
                        })
                    } catch (e) {
                        return
                    }
                }
            }
            return u = !1, n = e, !o && void 0 !== window.performance && "getEntries" in performance && "addEventListener" in performance && (o = (0, eQ.addEventListener)(n, performance, "resourcetimingbufferfull", () => {
                performance.clearResourceTimings()
            })), e1(f.FIRST_INPUT) || t.type !== f.FIRST_INPUT || ({
                stop: a
            } = function(e, t) {
                let r = (0, I.dateNow)(),
                    n = !1,
                    {
                        stop: i
                    } = (0, eQ.addEventListeners)(e, window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], t => {
                        var r, n;
                        if (!t.cancelable) return;
                        let i = {
                            entryType: "first-input",
                            processingStart: (0, I.relativeNow)(),
                            processingEnd: (0, I.relativeNow)(),
                            startTime: t.timeStamp,
                            duration: 0,
                            name: "",
                            cancelable: !1,
                            target: null,
                            toJSON: () => ({})
                        };
                        "pointerdown" === t.type ? (r = e, n = i, (0, eQ.addEventListeners)(r, window, ["pointerup", "pointercancel"], e => {
                            "pointerup" === e.type && o(n)
                        }, {
                            once: !0
                        })) : o(i)
                    }, {
                        passive: !0,
                        capture: !0
                    });
                return {
                    stop: i
                };

                function o(e) {
                    if (!n) {
                        n = !0, i();
                        let o = e.processingStart - e.startTime;
                        o >= 0 && o < (0, I.dateNow)() - r && t(e)
                    }
                }
            }(e, e => {
                s([e])
            })), () => {
                l.disconnect(), a && a(), (0, U.clearTimeout)(i)
            }
        })
    }

    function e1(e) {
        return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(e)
    }(d = f || (f = {})).EVENT = "event", d.FIRST_INPUT = "first-input", d.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint", d.LAYOUT_SHIFT = "layout-shift", d.LONG_TASK = "longtask", d.LONG_ANIMATION_FRAME = "long-animation-frame", d.NAVIGATION = "navigation", d.PAINT = "paint", d.RESOURCE = "resource", d.VISIBILITY_STATE = "visibility-state";
    let e2 = "data-dd-excluded-activity-mutations";

    function e5(e, t, r) {
        let n, i = !1,
            o = (0, U.setTimeout)((0, eZ.monitor)(() => l({
                hadActivity: !1
            })), 100),
            a = void 0 !== r ? (0, U.setTimeout)((0, eZ.monitor)(() => l({
                hadActivity: !0,
                end: (0, I.timeStampNow)()
            })), r) : void 0,
            s = e.subscribe(({
                isBusy: e
            }) => {
                (0, U.clearTimeout)(o), (0, U.clearTimeout)(n);
                let t = (0, I.timeStampNow)();
                e || (n = (0, U.setTimeout)((0, eZ.monitor)(() => l({
                    hadActivity: !0,
                    end: t
                })), 100))
            }),
            u = () => {
                i = !0, (0, U.clearTimeout)(o), (0, U.clearTimeout)(n), (0, U.clearTimeout)(a), s.unsubscribe()
            };

        function l(e) {
            i || (u(), t(e))
        }
        return {
            stop: u
        }
    }

    function e3(e, t, r, n) {
        return new P.Observable(i => {
            let o, a = [],
                s = 0;
            return a.push(t.subscribe(e => {
                e.every(e6) || u()
            }), r.subscribe(u), e0(n, {
                type: f.RESOURCE
            }).subscribe(e => {
                e.some(e => !e4(n, e.name)) && u()
            }), e.subscribe(7, e => {
                e4(n, e.url) || (void 0 === o && (o = e.requestIndex), s += 1, u())
            }), e.subscribe(8, e => {
                e4(n, e.url) || void 0 === o || e.requestIndex < o || (s -= 1, u())
            })), () => {
                a.forEach(e => e.unsubscribe())
            };

            function u() {
                i.notify({
                    isBusy: s > 0
                })
            }
        })
    }

    function e4(e, t) {
        return (0, D.matchList)(e.excludedActivityUrls, t)
    }

    function e6(e) {
        let t = "characterData" === e.type ? e.target.parentElement : e.target;
        return !!(t && eW(t) && t.matches(`[${e2}], [${e2}] *`))
    }
    let e7 = "data-dd-action-name",
        e8 = "Masked Element",
        e9 = [e7, "data-testid", "data-test", "data-qa", "data-cy", "data-test-id", "data-qa-id", "data-testing", "data-component", "data-element", "data-source-file"],
        te = [ti, function(e) {
            if (e.id && !tn(e.id)) return `#${CSS.escape(e.id)}`
        }],
        tt = [ti, function(e) {
            if ("BODY" === e.tagName) return;
            let t = e.classList;
            for (let r = 0; r < t.length; r += 1) {
                let n = t[r];
                if (!tn(n)) return `${CSS.escape(e.tagName)}.${CSS.escape(n)}`
            }
        }, function(e) {
            return CSS.escape(e.tagName)
        }];

    function tr(e, t) {
        let r;
        if (!e.isConnected) return;
        let n = e;
        for (; n && "HTML" !== n.nodeName;) {
            let e = to(n, te, ta, t, r);
            if (e) return e;
            r = to(n, tt, ts, t, r) || tu(function(e) {
                let t = e.parentElement.firstElementChild,
                    r = 1;
                for (; t && t !== e;) t.tagName === e.tagName && (r += 1), t = t.nextElementSibling;
                return `${CSS.escape(e.tagName)}:nth-of-type(${r})`
            }(n), r), n = n.parentElement
        }
        return r
    }

    function tn(e) {
        return /[0-9]/.test(e)
    }

    function ti(e, t) {
        if (t) {
            let e = r(t);
            if (e) return e
        }
        for (let e of e9) {
            let t = r(e);
            if (t) return t
        }

        function r(t) {
            if (e.hasAttribute(t)) return `${CSS.escape(e.tagName)}[${t}="${CSS.escape(e.getAttribute(t))}"]`
        }
    }

    function to(e, t, r, n, i) {
        for (let o of t) {
            let t = o(e, n);
            if (t && r(e, t, i)) return tu(t, i)
        }
    }

    function ta(e, t, r) {
        return 1 === e.ownerDocument.querySelectorAll(tu(t, r)).length
    }

    function ts(e, t, r) {
        let n;
        if (void 0 === r) n = e => e.matches(t);
        else {
            let e = tu(`${t}:scope`, r);
            n = t => null !== t.querySelector(e)
        }
        let i = e.parentElement.firstElementChild;
        for (; i;) {
            if (i !== e && n(i)) return !1;
            i = i.nextElementSibling
        }
        return !0
    }

    function tu(e, t) {
        return t ? `${e}>${t}` : e
    }
    let tl = {
            IGNORE: "ignore",
            HIDDEN: "hidden",
            ALLOW: e_.ALLOW,
            MASK: e_.MASK,
            MASK_USER_INPUT: e_.MASK_USER_INPUT,
            MASK_UNLESS_ALLOWLISTED: e_.MASK_UNLESS_ALLOWLISTED
        },
        tc = "data-dd-privacy",
        td = {
            INPUT: !0,
            OUTPUT: !0,
            TEXTAREA: !0,
            SELECT: !0,
            OPTION: !0,
            DATALIST: !0,
            OPTGROUP: !0
        };

    function tf(e) {
        return `[${tc}="${e}"], .dd-privacy-${e}`
    }

    function tp(e, t, r) {
        if (r && r.has(e)) return r.get(e);
        let n = eJ(e),
            i = n ? tp(n, t, r) : t,
            o = tm(tg(e), i);
        return r && r.set(e, o), o
    }

    function tm(e, t) {
        switch (t) {
            case tl.HIDDEN:
            case tl.IGNORE:
                return t
        }
        switch (e) {
            case tl.ALLOW:
            case tl.MASK:
            case tl.MASK_USER_INPUT:
            case tl.MASK_UNLESS_ALLOWLISTED:
            case tl.HIDDEN:
            case tl.IGNORE:
                return e;
            default:
                return t
        }
    }

    function tg(e) {
        if (eW(e)) {
            if ("BASE" === e.tagName) return tl.ALLOW;
            if ("INPUT" === e.tagName) {
                if ("password" === e.type || "email" === e.type || "tel" === e.type || "hidden" === e.type) return tl.MASK;
                let t = e.getAttribute("autocomplete");
                if (t && (t.startsWith("cc-") || t.endsWith("-password"))) return tl.MASK
            }
            if (e.matches(tf(tl.HIDDEN))) return tl.HIDDEN;
            if (e.matches(tf(tl.MASK))) return tl.MASK;
            if (e.matches(tf(tl.MASK_UNLESS_ALLOWLISTED))) return tl.MASK_UNLESS_ALLOWLISTED;
            if (e.matches(tf(tl.MASK_USER_INPUT))) return tl.MASK_USER_INPUT;
            if (e.matches(tf(tl.ALLOW))) return tl.ALLOW;
            if (function(e) {
                    if ("SCRIPT" === e.nodeName) return !0;
                    if ("LINK" === e.nodeName) {
                        let e = t("rel");
                        return /preload|prefetch/i.test(e) && "script" === t("as") || "shortcut icon" === e || "icon" === e
                    }
                    if ("META" === e.nodeName) {
                        let r = t("name"),
                            n = t("rel"),
                            i = t("property");
                        return /^msapplication-tile(image|color)$/.test(r) || "application-name" === r || "icon" === n || "apple-touch-icon" === n || "shortcut icon" === n || "keywords" === r || "description" === r || /^(og|twitter|fb):/.test(i) || /^(og|twitter):/.test(r) || "pinterest" === r || "robots" === r || "googlebot" === r || "bingbot" === r || e.hasAttribute("http-equiv") || "author" === r || "generator" === r || "framework" === r || "publisher" === r || "progid" === r || /^article:/.test(i) || /^product:/.test(i) || "google-site-verification" === r || "yandex-verification" === r || "csrf-token" === r || "p:domain_verify" === r || "verify-v1" === r || "verification" === r || "shopify-checkout-api-token" === r
                    }

                    function t(t) {
                        return (e.getAttribute(t) || "").toLowerCase()
                    }
                    return !1
                }(e)) return tl.IGNORE
        }
    }

    function tv(e, t) {
        switch (t) {
            case tl.MASK:
            case tl.HIDDEN:
            case tl.IGNORE:
                return !0;
            case tl.MASK_UNLESS_ALLOWLISTED:
                if (eH(e)) return !!ty(e.parentNode) || !tE(e.textContent || "");
                return ty(e);
            case tl.MASK_USER_INPUT:
                return eH(e) ? ty(e.parentNode) : ty(e);
            default:
                return !1
        }
    }

    function tb(e, t, r, n, i) {
        if (n !== tl.MASK && n !== tl.MASK_UNLESS_ALLOWLISTED || t === tc || e9.includes(t) || t === i.actionNameAttribute) return !1;
        switch (t) {
            case "title":
            case "alt":
            case "placeholder":
            case "aria-label":
            case "name":
                return !0
        }
        return !!("A" === e && "href" === t || "IFRAME" === e && "srcdoc" === t || r && t.startsWith("data-")) || ("IMG" === e || "SOURCE" === e) && ("src" === t || "srcset" === t)
    }

    function ty(e) {
        if (!e || e.nodeType !== e.ELEMENT_NODE) return !1;
        if ("INPUT" === e.tagName) switch (e.type) {
            case "button":
            case "color":
            case "reset":
            case "submit":
                return !1
        }
        return !!td[e.tagName]
    }

    function tE(e) {
        var t;
        return !(e && e.trim()) || (null == (t = window.$DD_ALLOW) ? void 0 : t.has(e.toLocaleLowerCase())) || !1
    }

    function tS(e, t) {
        return tE(e) ? e : t || e.replace(/\S/g, "x")
    }
    e.s(["CENSORED_IMG_MARK", 0, "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", "CENSORED_STRING_MARK", 0, "***", "FORM_PRIVATE_TAG_NAMES", 0, td, "NodePrivacyLevel", 0, tl, "PRIVACY_ATTR_NAME", 0, tc, "PRIVACY_ATTR_VALUE_HIDDEN", 0, "hidden", "TEXT_MASKING_CHAR", 0, "x", "getPrivacySelector", 0, tf], 278487), e.s(["getNodePrivacyLevel", 0, tp, "getNodeSelfPrivacyLevel", 0, tg, "getTextContent", 0, function(e, t) {
        var r;
        let n = null == (r = e.parentElement) ? void 0 : r.tagName,
            i = e.textContent || "";
        if ("HEAD" !== n || i.trim()) {
            if ("SCRIPT" === n) i = "***";
            else if (t === tl.HIDDEN) i = "***";
            else if (tv(e, t))
                if ("DATALIST" === n || "SELECT" === n || "OPTGROUP" === n) {
                    if (!i.trim()) return
                } else i = "OPTION" === n ? "***" : t === tl.MASK_UNLESS_ALLOWLISTED ? tS(i) : i.replace(/\S/g, "x");
            return i
        }
    }, "maskDisallowedTextContent", 0, tS, "reducePrivacyLevel", 0, tm, "shouldMaskAttribute", 0, tb, "shouldMaskNode", 0, tv], 942637);
    let th = I.ONE_SECOND;
    var t_ = e.i(191819);

    function tT(e, t) {
        let r = function(e, t) {
            let r = e;
            for (; r;) {
                if (r.matches(t)) return r;
                r = eX(r)
            }
            return null
        }(e, `[${t}]`);
        if (r) return tN(tA(r.getAttribute(t).trim()))
    }
    let tO = [(e, t, r) => {
            if ("labels" in e && e.labels && e.labels.length > 0) return tR(e.labels[0], t, r)
        }, e => {
            if ("INPUT" === e.nodeName) {
                let t = e.getAttribute("type");
                if ("button" === t || "submit" === t || "reset" === t) return {
                    name: e.value,
                    nameSource: "text_content"
                }
            }
        }, (e, t, r) => {
            if ("BUTTON" === e.nodeName || "LABEL" === e.nodeName || "button" === e.getAttribute("role")) return tR(e, t, r)
        }, (e, t, r) => tC(e, "aria-label", t, r), (e, t, r) => {
            let n = e.getAttribute("aria-labelledby");
            if (n) return {
                name: n.split(/\s+/).map(t => (function(e, t) {
                    let r = e.getRootNode();
                    if (r instanceof ShadowRoot) {
                        let e = r.getElementById(t);
                        if (e) return e
                    }
                    return e.ownerDocument ? e.ownerDocument.getElementById(t) : null
                })(e, t)).filter(e => !!e).map(e => tk(e, t, r)).join(" "),
                nameSource: "text_content"
            }
        }, (e, t, r) => tC(e, "alt", t, r), (e, t, r) => tC(e, "name", t, r), (e, t, r) => tC(e, "title", t, r), (e, t, r) => tC(e, "placeholder", t, r), (e, t, r) => {
            if ("options" in e && e.options.length > 0) return tR(e.options[0], t, r)
        }],
        tw = [(e, t, r) => tR(e, t, r)];

    function tI(e, t, r, n) {
        let i = e,
            o = 0;
        for (; o <= 10 && i && "BODY" !== i.nodeName && "HTML" !== i.nodeName && "HEAD" !== i.nodeName;) {
            for (let e of t) {
                let t = e(i, r, n);
                if (t) {
                    let {
                        name: e,
                        nameSource: r
                    } = t, n = e && e.trim();
                    if (n) return {
                        name: tN(tA(n)),
                        nameSource: r
                    }
                }
            }
            if ("FORM" === i.nodeName) break;
            i = eX(i), o += 1
        }
    }

    function tA(e) {
        return e.replace(/\s+/g, " ")
    }

    function tN(e) {
        return e.length > 100 ? `${(0,B.safeTruncate)(e,100)} [...]` : e
    }

    function tC(e, t, r, n) {
        let {
            enablePrivacyForActionName: i,
            defaultPrivacyLevel: o
        } = r, a = e.getAttribute(t);
        if (a && i) {
            let i = tp(e, o, n);
            tb(e.tagName, t, a, i, r) && (a = tS(a, e8))
        } else a || (a = "");
        return {
            name: a,
            nameSource: "standard_attribute"
        }
    }

    function tR(e, t, r) {
        return {
            name: tk(e, t, r) || "",
            nameSource: "text_content"
        }
    }

    function tk(e, t, r) {
        if (e.isContentEditable) return;
        let {
            enablePrivacyForActionName: n,
            actionNameAttribute: i,
            defaultPrivacyLevel: o
        } = t;
        if ((0, t_.isExperimentalFeatureEnabled)(t_.ExperimentalFeature.USE_TREE_WALKER_FOR_ACTION_NAME)) {
            var a = e,
                s = i,
                u = n,
                l = o,
                c = r;
            let t = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, function(e) {
                    let t = tp(e, l, c);
                    if (u && t && tv(e, t)) return NodeFilter.FILTER_REJECT;
                    if (eW(e)) {
                        if (e.hasAttribute(e7) || s && e.hasAttribute(s)) return NodeFilter.FILTER_REJECT;
                        let t = getComputedStyle(e);
                        if ("visible" !== t.visibility || "none" === t.display || t.contentVisibility && "visible" !== t.contentVisibility) return NodeFilter.FILTER_REJECT
                    }
                    return NodeFilter.FILTER_ACCEPT
                }),
                d = "";
            for (; t.nextNode();) {
                let e = t.currentNode;
                if (eW(e)) {
                    ("BR" === e.nodeName || "P" === e.nodeName || ["block", "flex", "grid", "list-item", "table", "table-caption"].includes(getComputedStyle(e).display)) && (d += " ");
                    continue
                }
                d += e.textContent || ""
            }
            return d.replace(/\s+/g, " ").trim()
        }
        if ("innerText" in e) {
            let t = e.innerText,
                r = r => {
                    let n = e.querySelectorAll(r);
                    for (let e = 0; e < n.length; e += 1) {
                        let r = n[e];
                        if ("innerText" in r) {
                            let e = r.innerText;
                            e && e.trim().length > 0 && (t = t.replace(e, ""))
                        }
                    }
                };
            return r(`[${e7}]`), i && r(`[${i}]`), n && r(`${tf(tl.HIDDEN)}, ${tf(tl.MASK)}`), t
        }
        return e.textContent
    }

    function tD() {
        let e = window.getSelection();
        return !e || e.isCollapsed
    }

    function tx(e) {
        return e.target instanceof Element && !1 !== e.isPrimary
    }

    function tL(e) {
        if (e.hasPageActivity || e.getUserActivity().input || e.getUserActivity().scroll) return !1;
        let t = e.event.target;
        return "LABEL" === t.tagName && t.hasAttribute("for") && (t = document.getElementById(t.getAttribute("for"))), !t || !t.matches('input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *')
    }
    let tM = 10 * I.ONE_SECOND,
        tU = new Map;

    function tP(e, t) {
        tU.set(e, t), tU.forEach((e, t) => {
            (0, I.elapsed)(t, (0, I.relativeNow)()) > tM && tU.delete(t)
        })
    }

    function t$(e) {
        if (e.composed && ez(e.target) && "function" == typeof e.composedPath) {
            let t = e.composedPath();
            if (t.length > 0 && t[0] instanceof Element) return t[0]
        }
        return e.target
    }
    var tB = e.i(619623);

    function tV({
        lifeCycle: e,
        isChildEvent: t,
        onChange: r = $.noop
    }) {
        let n = {
                errorCount: 0,
                longTaskCount: 0,
                resourceCount: 0,
                actionCount: 0,
                frustrationCount: 0
            },
            i = e.subscribe(13, e => {
                var i;
                if ("view" !== e.type && "vital" !== e.type && t(e)) switch (e.type) {
                    case eB.ERROR:
                        n.errorCount += 1, r();
                        break;
                    case eB.ACTION:
                        n.actionCount += 1, e.action.frustration && (n.frustrationCount += e.action.frustration.type.length), r();
                        break;
                    case eB.LONG_TASK:
                        n.longTaskCount += 1, r();
                        break;
                    case eB.RESOURCE:
                        (null == (i = e._dd) ? void 0 : i.discarded) || (n.resourceCount += 1, r())
                }
            });
        return {
            stop: () => {
                i.unsubscribe()
            },
            eventCounts: n
        }
    }
    let tF = 5 * I.ONE_MINUTE;
    var tK = e.i(328275);

    function tj(e) {
        let t = "events" in e,
            r = e$((0, I.toServerDuration)(e.duration));
        return {
            rawRumEvent: {
                type: eB.ACTION,
                date: e.startClocks.timeStamp,
                action: {
                    id: e.id,
                    target: {
                        name: e.name
                    },
                    type: e.type,
                    ...void 0 !== r && {
                        loading_time: r
                    },
                    ...e.counts && {
                        error: {
                            count: e.counts.errorCount
                        },
                        long_task: {
                            count: e.counts.longTaskCount
                        },
                        resource: {
                            count: e.counts.resourceCount
                        }
                    },
                    frustration: {
                        type: e.frustrationTypes
                    }
                },
                ...t ? {
                    _dd: {
                        action: {
                            target: e.target,
                            position: e.position,
                            name_source: e.nameSource
                        }
                    }
                } : {
                    context: e.context
                }
            },
            duration: e.duration,
            startTime: e.startClocks.relative,
            domainContext: t ? {
                events: e.events
            } : {
                handlingStack: e.handlingStack
            }
        }
    }
    var tq = e.i(592568),
        tH = e.i(797719),
        tG = e.i(287555),
        tW = e.i(271019),
        tz = e.i(256721),
        tY = e.i(931675);
    let tJ = {},
        tX = "csp_violation";

    function tZ(e) {
        return {
            startClocks: (0, I.clocksNow)(),
            source: tq.ErrorSource.REPORT,
            handling: "unhandled",
            ...e
        }
    }

    function tQ(e, t, r, n, i) {
        return r ? (0, tY.toStackTraceString)({
            name: e,
            message: t,
            stack: [{
                func: "?",
                url: r,
                line: null != n ? n : void 0,
                column: null != i ? i : void 0
            }]
        }) : void 0
    }

    function t0(e, t) {
        var r;
        let n, i;
        if (window.requestIdleCallback && window.cancelIdleCallback) {
            let r = window.requestIdleCallback((0, eZ.monitor)(e), t);
            return () => window.cancelIdleCallback(r)
        }
        return r = e, n = (0, I.dateNow)(), i = (0, U.setTimeout)(() => {
            r({
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - ((0, I.dateNow)() - n))
            })
        }, 0), () => (0, U.clearTimeout)(i)
    }
    e.s(["requestIdleCallback", 0, t0], 380466);
    let t1 = I.ONE_SECOND,
        t2 = new WeakSet;

    function t5(e) {
        return (0, I.addDuration)(e.startTime, e.duration)
    }

    function t3(e, t, r) {
        return document.readyState === t || "complete" === document.readyState ? (r(), {
            stop: $.noop
        }) : (0, eQ.addEventListener)(e, window, "complete" === t ? "load" : "DOMContentLoaded", r, {
            once: !0
        })
    }
    e.s(["asyncRunOnReadyState", 0, function(e, t) {
        return new Promise(r => {
            t3(e, t, r)
        })
    }, "runOnReadyState", 0, t3], 796411);
    let t4 = 2 * I.ONE_MINUTE;

    function t6(e, t) {
        let r = t && Number(t);
        if (e && r) return {
            traceId: e,
            traceTime: r
        }
    }

    function t7(e) {
        if (e && eG(e)) {
            let t = /^\s*DATADOG;(.*?)\s*$/.exec(e.data);
            if (t) return t[1]
        }
    }

    function t8() {
        if (e1(f.NAVIGATION)) {
            let e = performance.getEntriesByType(f.NAVIGATION)[0];
            if (e) return e
        }
        let e = function() {
                let e = {},
                    t = performance.timing;
                for (let r in t)
                    if ((0, M.isNumber)(t[r])) {
                        let n = t[r];
                        e[r] = 0 === n ? 0 : (0, I.getRelativeTime)(n)
                    }
                return e
            }(),
            t = {
                entryType: f.NAVIGATION,
                initiatorType: "navigation",
                name: window.location.href,
                startTime: 0,
                duration: e.loadEventEnd,
                decodedBodySize: 0,
                encodedBodySize: 0,
                transferSize: 0,
                workerStart: 0,
                toJSON: () => ({ ...t,
                    toJSON: void 0
                }),
                ...e
            };
        return t
    }

    function t9(e, t, r, n) {
        let i = (0, C.isResourceEntryRequestType)(e) && n ? n.getMatchingRequest(e) : void 0;
        return re(e, i, r, t)
    }

    function re(e, t, r, n) {
        var i, o, a, s;
        if (!e && !t) return;
        let u = t ? function(e, t) {
            if (e.traceSampled && e.traceId && e.spanId) return {
                _dd: {
                    span_id: e.spanId.toString(),
                    trace_id: e.traceId.toString(),
                    rule_psr: t.rulePsr
                }
            }
        }(t, n) : function(e, t) {
            if (e.traceId) return {
                _dd: {
                    trace_id: e.traceId,
                    span_id: eN(63).toString(),
                    rule_psr: t.rulePsr
                }
            }
        }(e, n);
        if (!n.trackResources && !u) return;
        let l = e ? (0, I.relativeToClocks)(e.startTime) : t.startClocks,
            c = e ? (0, C.computeResourceEntryDuration)(e) : (i = r, o = l, a = t.duration, i.wasInPageStateDuringPeriod("frozen", o.relative, a) ? void 0 : a),
            d = t && function(e, t) {
                let r = eL(e.url, t);
                if (r) {
                    let t = function(e, t = !1) {
                        let r, n, i, o;
                        if (!e || "string" != typeof e) return;
                        try {
                            r = JSON.parse(e)
                        } catch (e) {
                            return
                        }
                        if (!r) return;
                        if (r.query) {
                            var a;
                            let e = r.query.trim();
                            n = null == (a = e.match(/^\s*(query|mutation|subscription)\b/i)) ? void 0 : a[1], t && (i = (0, B.safeTruncate)(e, ex, "..."))
                        }
                        let s = r.operationName;
                        return r.variables && (o = JSON.stringify(r.variables)), {
                            operationType: n,
                            operationName: s,
                            variables: o,
                            payload: i
                        }
                    }(e.requestBody, r.trackPayload);
                    if (t) {
                        if (r.trackResponseErrors && e.responseBody) {
                            let r = function(e) {
                                let t;
                                try {
                                    t = JSON.parse(e)
                                } catch (e) {
                                    return
                                }
                                if (!t || "object" != typeof t) return;
                                let r = t;
                                if ((0, eD.isNonEmptyArray)(r.errors)) return r.errors.map(e => {
                                    var t;
                                    return {
                                        message: e.message,
                                        path: e.path,
                                        locations: e.locations,
                                        code: null == (t = e.extensions) ? void 0 : t.code
                                    }
                                })
                            }(e.responseBody);
                            r && (t.error_count = r.length, t.errors = r)
                        }
                        return t
                    }
                    return
                }
            }(t, n),
            f = (0, tK.combine)({
                date: l.timeStamp,
                resource: {
                    id: (0, B.generateUUID)(),
                    duration: (0, I.toServerDuration)(c),
                    type: t ? t.type === w.RequestType.XHR ? w.ResourceType.XHR : w.ResourceType.FETCH : (0, C.computeResourceEntryType)(e),
                    method: t ? t.method : void 0,
                    status_code: t ? t.status : 0 === (s = e.responseStatus) ? void 0 : s,
                    url: t ? (0, C.sanitizeIfLongDataUrl)(t.url) : e.name,
                    protocol: e && (0, C.computeResourceEntryProtocol)(e),
                    delivery_type: e && (0, C.computeResourceEntryDeliveryType)(e),
                    graphql: d
                },
                type: eB.RESOURCE,
                _dd: {
                    discarded: !n.trackResources
                }
            }, u, e && function(e) {
                let {
                    renderBlockingStatus: t
                } = e;
                return {
                    resource: {
                        render_blocking_status: t,
                        ...(0, C.computeResourceEntrySize)(e),
                        ...(0, C.computeResourceEntryDetails)(e)
                    }
                }
            }(e));
        return {
            startTime: l.relative,
            duration: c,
            rawRumEvent: f,
            domainContext: function(e, t) {
                if (t) {
                    let r = {
                        performanceEntry: e,
                        isAborted: t.isAborted,
                        handlingStack: t.handlingStack
                    };
                    return t.type === w.RequestType.XHR ? {
                        xhr: t.xhr,
                        ...r
                    } : {
                        requestInput: t.input,
                        requestInit: t.init,
                        response: t.response,
                        error: t.error,
                        ...r
                    }
                }
                return {
                    performanceEntry: e
                }
            }(e, t)
        }
    }
    var rt = I,
        rr = e.i(595649);
    let rn = 10 * I.ONE_MINUTE,
        ri = 10 * I.ONE_MINUTE;

    function ro(e, t, r = window) {
        if ("hidden" === document.visibilityState) return {
            timeStamp: 0,
            stop: $.noop
        };
        if (e1(f.VISIBILITY_STATE)) {
            let e = performance.getEntriesByType(f.VISIBILITY_STATE).filter(e => "hidden" === e.name).find(e => e.startTime >= t.relative);
            if (e) return {
                timeStamp: e.startTime,
                stop: $.noop
            }
        }
        let n = 1 / 0,
            {
                stop: i
            } = (0, eQ.addEventListeners)(e, r, ["pagehide", "visibilitychange"], e => {
                ("pagehide" === e.type || "hidden" === document.visibilityState) && (n = e.timeStamp, i())
            }, {
                capture: !0
            });
        return {
            get timeStamp() {
                return n
            },
            stop: i
        }
    }
    let ra = e => {
        var t, r;
        let n, i, o, a;
        return e.previousRect.width * e.previousRect.height + e.currentRect.width * e.currentRect.height - (t = e.previousRect, r = e.currentRect, n = Math.max(t.left, r.left), i = Math.max(t.top, r.top), o = Math.min(t.right, r.right), a = Math.min(t.bottom, r.bottom), n >= o || i >= a ? 0 : (o - n) * (a - i))
    };

    function rs({
        x: e,
        y: t,
        width: r,
        height: n
    }) {
        return {
            x: e,
            y: t,
            width: r,
            height: n
        }
    }
    let ru = 5 * I.ONE_SECOND,
        rl = I.ONE_SECOND,
        rc = 0,
        rd = 1 / 0,
        rf = 0,
        rp = () => a ? rc : window.performance.interactionCount || 0,
        rm = +I.ONE_MINUTE;

    function rg() {
        let e = window.visualViewport;
        return Math.round(e ? e.pageTop - e.offsetTop : void 0 !== window.scrollY ? window.scrollY : window.pageYOffset || 0)
    }

    function rv(e) {
        var t;
        return s || (t = e, s = new P.Observable(e => {
            let {
                throttled: r
            } = (0, $.throttle)(() => {
                e.notify(rb())
            }, 200);
            return (0, eQ.addEventListener)(t, window, "resize", r, {
                capture: !0,
                passive: !0
            }).stop
        })), s
    }

    function rb() {
        let e = window.visualViewport;
        return e ? {
            width: Number(e.width * e.scale),
            height: Number(e.height * e.scale)
        } : {
            width: Number(window.innerWidth || 0),
            height: Number(window.innerHeight || 0)
        }
    }
    e.s(["getScrollX", 0, function() {
        let e = window.visualViewport;
        return Math.round(e ? e.pageLeft - e.offsetLeft : void 0 !== window.scrollX ? window.scrollX : window.pageXOffset || 0)
    }, "getScrollY", 0, rg], 748407), e.s(["getViewportDimension", 0, rb, "initViewportObservable", 0, rv], 384641);
    let ry = I.ONE_SECOND,
        rE = 5 * rt.ONE_MINUTE,
        rS = 5 * rt.ONE_MINUTE;

    function rh(e) {
        let t = e.indexOf("?");
        return t < 0 ? e : e.slice(0, t)
    }

    function r_() {
        return !eS.isWorkerEnvironment && !!(eS.globalObject._DATADOG_SYNTHETICS_INJECTS_RUM || G("datadog-synthetics-injects-rum"))
    }

    function rT() {
        let e = window._DATADOG_SYNTHETICS_PUBLIC_ID || G("datadog-synthetics-public-id");
        return "string" == typeof e ? e : void 0
    }

    function rO() {
        let e = window._DATADOG_SYNTHETICS_RESULT_ID || G("datadog-synthetics-result-id");
        return "string" == typeof e ? e : void 0
    }

    function rw() {
        return !!(rT() && rO())
    }
    e.s(["getSyntheticsResultId", 0, rO, "getSyntheticsTestId", 0, rT, "isSyntheticsTest", 0, rw, "willSyntheticsInjectRum", 0, r_], 376426);
    let rI = I.ONE_MINUTE,
        rA = J.SESSION_TIME_OUT_DELAY,
        rN = [];
    async function rC(e) {
        let t, r, n = e.sessionStoreStrategyType;
        n && (n.type === J.SessionPersistence.COOKIE ? (t = ea(n.cookieOptions, e), r = {
            cookie: await rR(),
            currentDomain: `${window.location.protocol}//${window.location.hostname}`
        }) : t = ec(), (0, g.addTelemetryDebug)("Unexpected session state", {
            sessionStoreStrategyType: n.type,
            session: t,
            isSyntheticsTest: rw(),
            createdTimestamp: null == t ? void 0 : t.created,
            expireTimestamp: null == t ? void 0 : t.expire,
            ...r
        }))
    }
    async function rR() {
        let e;
        return {
            count: (e = "cookieStore" in window ? await window.cookieStore.getAll(Y) : document.cookie.split(/\s*;\s*/).filter(e => e.startsWith(Y))).length,
            domain: z() || "undefined",
            ...e
        }
    }
    var rk = e.i(753084),
        rD = e.i(581028),
        rx = e.i(299561);
    let rL = J.SESSION_TIME_OUT_DELAY;
    var rM = e.i(291495);

    function rU(e) {
        return Object.prototype.hasOwnProperty.call(history, e) ? history : History.prototype
    }
    let rP = J.SESSION_TIME_OUT_DELAY,
        r$ = 10 * I.ONE_SECOND;

    function rB() {
        0 !== u.batchCount && ((0, g.addTelemetryMetrics)("Customer data measures", u), rK())
    }

    function rV() {
        return {
            min: 1 / 0,
            max: 0,
            sum: 0
        }
    }

    function rF(e, t) {
        e.sum += t, e.min = Math.min(e.min, t), e.max = Math.max(e.max, t)
    }

    function rK() {
        u = {
            batchCount: 0,
            batchBytesCount: rV(),
            batchMessagesCount: rV()
        }
    }
    let rj = J.SESSION_TIME_OUT_DELAY;

    function rq() {
        return "hidden" === document.visibilityState ? "hidden" : document.hasFocus() ? "active" : "passive"
    }

    function rH(e, t, r) {
        function n(r) {
            t.wasInPageStateDuringPeriod("frozen", r.startClocks.relative, r.duration) || e.notify(12, rz(r))
        }
        return {
            addOperationStepVital: function(t, r, n, i) {
                if (!(0, t_.isExperimentalFeatureEnabled)(t_.ExperimentalFeature.FEATURE_OPERATION_VITAL)) return;
                let {
                    operationKey: o,
                    context: a,
                    description: s
                } = n || {}, u = {
                    name: t,
                    type: eq.OPERATION_STEP,
                    operationKey: o,
                    failureReason: i,
                    stepType: r,
                    startClocks: (0, I.clocksNow)(),
                    context: (0, tG.sanitize)(a),
                    description: s
                };
                e.notify(12, rz(u))
            },
            addDurationVital: n,
            startDurationVital: (e, t = {}) => rG(r, e, t),
            stopDurationVital: (e, t = {}) => {
                rW(n, r, e, t)
            }
        }
    }

    function rG({
        vitalsByName: e,
        vitalsByReference: t
    }, r, n = {}) {
        let i = {
                name: r,
                startClocks: (0, I.clocksNow)(),
                ...n
            },
            o = {
                __dd_vital_reference: !0
            };
        return e.set(r, i), t.set(o, i), o
    }

    function rW(e, {
        vitalsByName: t,
        vitalsByReference: r
    }, n, i = {}) {
        var o, a, s, u, l;
        let c = "string" == typeof n ? t.get(n) : r.get(n);
        c && (e((o = c, a = c.startClocks, s = i, u = (0, I.clocksNow)(), {
            name: o.name,
            type: eq.DURATION,
            startClocks: a,
            duration: (0, I.elapsed)(a.timeStamp, u.timeStamp),
            context: (0, tK.combine)(o.context, s.context),
            description: null != (l = s.description) ? l : o.description
        })), "string" == typeof n ? t.delete(n) : r.delete(n))
    }

    function rz(e) {
        let {
            startClocks: t,
            type: r,
            name: n,
            description: i,
            context: o
        } = e, a = {
            id: (0, B.generateUUID)(),
            type: r,
            name: n,
            description: i,
            ...r === eq.DURATION ? {
                duration: (0, I.toServerDuration)(e.duration)
            } : {
                step_type: e.stepType,
                operation_key: e.operationKey,
                failure_reason: e.failureReason
            }
        };
        return {
            rawRumEvent: {
                date: t.timeStamp,
                vital: a,
                type: eB.VITAL,
                context: o
            },
            startTime: t.relative,
            duration: r === eq.DURATION ? e.duration : void 0,
            domainContext: {}
        }
    }
    e.s(["createCustomVitalsState", 0, function() {
        return {
            vitalsByName: new Map,
            vitalsByReference: new WeakMap
        }
    }, "startDurationVital", 0, rG, "startVitalCollection", 0, rH, "stopDurationVital", 0, rW], 197038);
    let rY = I.ONE_SECOND;

    function rJ(e, t) {
        let r = (0, B.findCommaSeparatedValue)(document.cookie, e),
            n = (0, U.setInterval)(() => {
                let n = (0, B.findCommaSeparatedValue)(document.cookie, e);
                n !== r && t(n)
            }, rY);
        return () => {
            (0, U.clearInterval)(n)
        }
    }
    let rX = "datadog-ci-visibility-test-execution-id",
        rZ = J.SESSION_TIME_OUT_DELAY;

    function rQ(e, t, r = 3e3) {
        let n = 0,
            i = !1;
        return {
            isLimitReached() {
                if (0 === n && (0, U.setTimeout)(() => {
                        n = 0
                    }, I.ONE_MINUTE), (n += 1) <= r || i) return i = !1, !1;
                if (n === r + 1) {
                    i = !0;
                    try {
                        t({
                            message: `Reached max number of ${e}s by minute: ${r}`,
                            source: tq.ErrorSource.AGENT,
                            startClocks: (0, I.clocksNow)()
                        })
                    } finally {
                        i = !1
                    }
                }
                return !0
            }
        }
    }
    var r0 = e.i(337165),
        r1 = e.i(57329);

    function r2(e) {
        return "object" === (0, r1.getType)(e)
    }
    let r5 = {
            "view.name": "string",
            "view.url": "string",
            "view.referrer": "string"
        },
        r3 = {
            context: "object"
        },
        r4 = {
            service: "string",
            version: "string"
        };
    var r6 = e.i(575599);
    let r7 = eP.abstractHooks,
        r8 = [eB.ACTION, eB.ERROR, eB.LONG_TASK, eB.RESOURCE, eB.VITAL];
    e.s(["startRum", 0, function(e, t, r, n, i, o, s, d, D) {
        var x, F;
        let K, j, q = [],
            H = new T.LifeCycle,
            W = r7();
        H.subscribe(13, e => (0, p.sendToExtension)("rum", e));
        let z = e => {
                H.notify(14, {
                    error: e
                }), (0, g.addTelemetryDebug)("Error reported to customer", {
                    "error.message": e.message
                })
            },
            X = (0, m.createPageMayExitObservable)(e),
            er = X.subscribe(e => {
                H.notify(11, e)
            });
        q.push(() => er.unsubscribe());
        let ei = (0, g.startTelemetry)("browser-rum-sdk", e, W, z, X, i);
        q.push(ei.stop);
        let es = (0, v.canUseEventBridge)() ? (K = {
            id: "00000000-aaaa-0000-aaaa-000000000000",
            sessionReplay: +!!(0, v.bridgeSupports)("records")
        }, {
            findTrackedSession: () => K,
            expire: $.noop,
            expireObservable: new P.Observable,
            setForcedReplay: $.noop
        }) : ((j = function(e, t, r) {
            let n = new P.Observable,
                i = new P.Observable,
                o = function(e, t, r, n = function(e, t) {
                    return e.type === J.SessionPersistence.COOKIE ? function(e, t) {
                        let r = {
                            isLockEnabled: V(),
                            persistSession: r => eo(t, e, r, J.SESSION_EXPIRATION_DELAY),
                            retrieveSession: () => ea(t, e),
                            expireSession: r => eo(t, e, Z(r, e), J.SESSION_TIME_OUT_DELAY)
                        };
                        if (!G(Y)) {
                            let e = G("_dd"),
                                t = G("_dd_r"),
                                n = G("_dd_l"),
                                i = {};
                            e && (i.id = e), n && /^[01]$/.test(n) && (i.logs = n), t && /^[012]$/.test(t) && (i.rum = t), Q(i) || (et(i), r.persistSession(i))
                        }
                        return r
                    }(t, e.cookieOptions) : {
                        isLockEnabled: !1,
                        persistSession: el,
                        retrieveSession: ec,
                        expireSession: e => (function(e, t) {
                            el(Z(e, t))
                        })(e, t)
                    }
                }(e, t)) {
                    let i, o = new P.Observable,
                        a = new P.Observable,
                        s = new P.Observable,
                        u = (0, U.setInterval)(function() {
                            let e = n.retrieveSession();
                            ee(e) ? ep({
                                process: e => ee(e) ? Z(e, t) : void 0,
                                after: d
                            }, n) : d(e)
                        }, ev);
                    f();
                    let {
                        throttled: l,
                        cancel: c
                    } = (0, $.throttle)(() => {
                        ep({
                            process: e => {
                                if (Q(e)) return;
                                let t = d(e);
                                return function(e) {
                                    if (Q(e)) return;
                                    let t = r(e.rum);
                                    e.rum = t, delete e.isExpired, t === J.SESSION_NOT_TRACKED || e.id || (e.id = (0, B.generateUUID)(), e.created = String((0, I.dateNow)()))
                                }(t), t
                            },
                            after: e => {
                                Q(e) || p() || (i = e, o.notify()), i = e
                            }
                        }, n)
                    }, ev);

                    function d(e) {
                        var r;
                        return ee(e) && (e = Z(e, t)), p() && ((r = e, i.id !== r.id || i.rum !== r.rum) ? (i = Z(i, t), a.notify()) : (s.notify({
                            previousState: i,
                            newState: e
                        }), i = e)), e
                    }

                    function f() {
                        ep({
                            process: e => {
                                if (Q(e)) return e.anonymousId = (0, B.generateUUID)(), Z(e, t)
                            },
                            after: e => {
                                i = e
                            }
                        }, n)
                    }

                    function p() {
                        return (null == i ? void 0 : i.rum) !== void 0
                    }
                    return {
                        expandOrRenewSession: l,
                        expandSession: function() {
                            ep({
                                process: e => p() ? d(e) : void 0
                            }, n)
                        },
                        getSession: () => i,
                        renewObservable: o,
                        expireObservable: a,
                        sessionStateUpdateObservable: s,
                        restartSession: f,
                        expire: e => {
                            c(), !1 === e && i && delete i.anonymousId, n.expireSession(i), d(Z(i, t))
                        },
                        stop: () => {
                            (0, U.clearInterval)(u)
                        },
                        updateSessionState: function(e) {
                            ep({
                                process: t => ({ ...t,
                                    ...e
                                }),
                                after: d
                            }, n)
                        }
                    }
                }(e.sessionStoreStrategyType, e, t);
            rN.push(() => o.stop());
            let a = (0, tB.createValueHistory)({
                expireDelay: rA
            });
            if (rN.push(() => a.stop()), o.renewObservable.subscribe(() => {
                    a.add(s(), (0, I.relativeNow)()), n.notify()
                }), o.expireObservable.subscribe(() => {
                    i.notify(), a.closeActive((0, I.relativeNow)())
                }), o.expandOrRenewSession(), a.add(s(), (0, I.clocksOrigin)().relative), (0, t_.isExperimentalFeatureEnabled)(t_.ExperimentalFeature.SHORT_SESSION_INVESTIGATION)) {
                let t = o.getSession();
                t && function(e, t) {
                    if (!window.cookieStore || !t.created) return;
                    let r = Number(t.created),
                        n = (0, I.dateNow)(),
                        {
                            stop: i
                        } = (0, eQ.addEventListener)(e, cookieStore, "change", function(e) {
                            let o = (0, R.findLast)(e.changed, e => e.name === Y);
                            if (!o) return;
                            let a = (0, I.dateNow)() - r;
                            if (a > 14 * I.ONE_MINUTE) i();
                            else {
                                let e = en(o.value);
                                if (e.id && e.id !== t.id) {
                                    i();
                                    let r = (0, I.dateNow)() - n;
                                    rR().then(n => {
                                        (0, g.addTelemetryDebug)("Session cookie changed", {
                                            time: r,
                                            session_age: a,
                                            old: t,
                                            new: e,
                                            cookie: n
                                        })
                                    }).catch(eZ.monitorError)
                                }
                            }
                        });
                    rN.push(i)
                }(e, t)
            }

            function s() {
                let t = o.getSession();
                return t ? {
                    id: t.id,
                    trackingType: t.rum,
                    isReplayForced: !!t.forcedReplay,
                    anonymousId: t.anonymousId
                } : (rC(e).catch(() => void 0), {
                    id: "invalid",
                    trackingType: J.SESSION_NOT_TRACKED,
                    isReplayForced: !1,
                    anonymousId: void 0
                })
            }
            return r.observable.subscribe(() => {
                    r.isGranted() ? o.expandOrRenewSession() : o.expire(!1)
                }),
                function(e, t) {
                    let {
                        stop: r
                    } = (0, eQ.addEventListeners)(e, window, ["click", "touchstart", "keydown", "scroll"], t, {
                        capture: !0,
                        passive: !0
                    });
                    rN.push(r)
                }(e, () => {
                    r.isGranted() && o.expandOrRenewSession()
                }),
                function(e, t) {
                    let r = () => {
                            "visible" === document.visibilityState && t()
                        },
                        {
                            stop: n
                        } = (0, eQ.addEventListener)(e, document, "visibilitychange", r);
                    rN.push(n);
                    let i = (0, U.setInterval)(r, rI);
                    rN.push(() => {
                        (0, U.clearInterval)(i)
                    })
                }(e, () => o.expandSession()),
                function(e, t) {
                    let {
                        stop: r
                    } = (0, eQ.addEventListener)(e, window, "resume", t, {
                        capture: !0
                    });
                    rN.push(r)
                }(e, () => o.restartSession()), {
                    findSession: (e, t) => a.find(e, t),
                    renewObservable: n,
                    expireObservable: i,
                    sessionStateUpdateObservable: o.sessionStateUpdateObservable,
                    expire: o.expire,
                    updateSessionState: o.updateSessionState
                }
        }(e, t => {
            var r, n, i;
            return r = e, "0" === (i = n = t) || "1" === i || "2" === i ? n : (0, M.performDraw)(r.sessionSampleRate) ? (0, M.performDraw)(r.sessionReplaySampleRate) ? "1" : "2" : "0"
        }, o)).expireObservable.subscribe(() => {
            H.notify(9)
        }), j.renewObservable.subscribe(() => {
            H.notify(10)
        }), j.sessionStateUpdateObservable.subscribe(({
            previousState: e,
            newState: t
        }) => {
            if (!e.forcedReplay && t.forcedReplay) {
                let e = j.findSession();
                e && (e.isReplayForced = !0)
            }
        }), {
            findTrackedSession: e => {
                let t = j.findSession(e);
                if (t && "0" !== t.trackingType) return {
                    id: t.id,
                    sessionReplay: "1" === t.trackingType ? 1 : 2 * !!t.isReplayForced,
                    anonymousId: t.anonymousId
                }
            },
            expire: j.expire,
            expireObservable: j.expireObservable,
            setForcedReplay: () => j.updateSessionState({
                forcedReplay: "1"
            })
        });
        if ((0, v.canUseEventBridge)()) {
            let e;
            e = (0, v.getEventBridge)(), H.subscribe(13, t => {
                e.send("rum", t)
            })
        } else {
            let t, r, n = (x = es.expireObservable, t = [e.rumEndpointBuilder], e.replica && t.push(e.replica.rumEndpointBuilder), r = (0, rk.createBatch)({
                encoder: i(2),
                request: (0, rx.createHttpRequest)(t, z),
                flushController: (0, rD.createFlushController)({
                    pageMayExitObservable: X,
                    sessionExpireObservable: x
                })
            }), H.subscribe(13, e => {
                e.type === eB.VIEW ? r.upsert(e, e.view.id) : r.add(e)
            }), r);
            q.push(() => n.stop()), F = n.flushController.flushObservable, ei.metricsEnabled && (rK(), l = !1, H.subscribe(13, () => {
                l = !0
            }), F.subscribe(({
                bytesCount: e,
                messagesCount: t
            }) => {
                l && (l = !1, u.batchCount += 1, rF(u.batchBytesCount, e), rF(u.batchMessagesCount, t))
            }), (0, U.setInterval)(rB, r$))
        }
        W.register(1, () => o.isGranted() ? eP.SKIPPED : eP.DISCARDED);
        let {
            stop: eu
        } = function(e, t) {
            if (!t.metricsEnabled) return {
                stop: $.noop
            };
            let {
                unsubscribe: r
            } = e.subscribe(4, ({
                initialViewMetrics: e
            }) => {
                var t, n;
                e.largestContentfulPaint && e.navigationTimings && ((0, g.addTelemetryMetrics)("Initial view metrics", {
                    metrics: (t = e.largestContentfulPaint, n = e.navigationTimings, {
                        lcp: {
                            value: t.value
                        },
                        navigation: {
                            domComplete: n.domComplete,
                            domContentLoaded: n.domContentLoaded,
                            domInteractive: n.domInteractive,
                            firstByte: n.firstByte,
                            loadEvent: n.loadEvent
                        }
                    })
                }), r())
            });
            return {
                stop: r
            }
        }(H, ei);
        q.push(eu);
        let {
            stop: ed,
            ...ef
        } = function(e, t, r, n, i, o, s, u, l, d) {
            var p, T, D, x, V, F, K, j, q, H, W, z, Y;
            let J, X, Z, Q, ee, et, er, en, ei, eo, ea, es, eu, el, ec = [],
                ed = (0, S.createDOMMutationObservable)(),
                ef = (p = location, X = (0, k.shallowClone)(p), new P.Observable(e => {
                    var t, n;
                    let {
                        stop: i
                    } = function(e, t) {
                        let {
                            stop: r
                        } = (0, rM.instrumentMethod)(rU("pushState"), "pushState", ({
                            onPostCall: e
                        }) => {
                            e(t)
                        }), {
                            stop: n
                        } = (0, rM.instrumentMethod)(rU("replaceState"), "replaceState", ({
                            onPostCall: e
                        }) => {
                            e(t)
                        }), {
                            stop: i
                        } = (0, eQ.addEventListener)(e, window, "popstate", t);
                        return {
                            stop: () => {
                                r(), n(), i()
                            }
                        }
                    }(r, a), {
                        stop: o
                    } = (t = r, n = a, (0, eQ.addEventListener)(t, window, "hashchange", n));

                    function a() {
                        if (X.href === p.href) return;
                        let t = (0, k.shallowClone)(p);
                        e.notify({
                            newLocation: t,
                            oldLocation: X
                        }), X = t
                    }
                    return () => {
                        i(), o()
                    }
                })),
                {
                    observable: ep,
                    stop: em
                } = (0, h.createWindowOpenObservable)();
            ec.push(em), t.register(0, ({
                eventType: e
            }) => {
                let t = r.source;
                return {
                    type: e,
                    _dd: {
                        format_version: 2,
                        drift: (0, I.currentDrift)(),
                        configuration: {
                            session_sample_rate: (0, M.round)(r.sessionSampleRate, 3),
                            session_replay_sample_rate: (0, M.round)(r.sessionReplaySampleRate, 3),
                            profiling_sample_rate: (0, M.round)(r.profilingSampleRate, 3),
                            trace_sample_rate: (0, M.round)(r.traceSampleRate, 3),
                            beta_encode_cookie_options: r.betaEncodeCookieOptions
                        },
                        browser_sdk_version: (0, v.canUseEventBridge)() ? "6.26.0" : void 0,
                        sdk_name: l
                    },
                    application: {
                        id: r.applicationId
                    },
                    date: (0, I.timeStampNow)(),
                    source: t
                }
            }), t.register(1, () => ({
                application: {
                    id: r.applicationId
                }
            }));
            let eg = function(e, t, r = 500) {
                let n, i = (0, tB.createValueHistory)({
                    expireDelay: rj,
                    maxEntries: 4e3
                });
                e1(f.VISIBILITY_STATE) && performance.getEntriesByType(f.VISIBILITY_STATE).forEach(e => {
                    a("hidden" === e.name ? "hidden" : "active", e.startTime)
                }), a(rq(), (0, I.relativeNow)());
                let {
                    stop: o
                } = (0, eQ.addEventListeners)(t, window, ["pageshow", "focus", "blur", "visibilitychange", "resume", "freeze", "pagehide"], e => {
                    var t;
                    a("freeze" === (t = e).type ? "frozen" : "pagehide" === t.type ? t.persisted ? "frozen" : "terminated" : rq(), e.timeStamp)
                }, {
                    capture: !0
                });

                function a(e, t = (0, I.relativeNow)()) {
                    e !== n && (n = e, i.closeActive(t), i.add({
                        state: n,
                        startTime: t
                    }, t))
                }

                function s(e, t, r) {
                    return i.findAll(t, r).some(t => t.state === e)
                }
                return e.register(0, ({
                    startTime: e,
                    duration: t = 0,
                    eventType: n
                }) => n === eB.VIEW ? {
                    type: n,
                    _dd: {
                        page_states: function(e, t, r) {
                            if (0 !== e.length) return e.slice(-r).reverse().map(({
                                state: e,
                                startTime: r
                            }) => ({
                                state: e,
                                start: (0, I.toServerDuration)((0, I.elapsed)(t, r))
                            }))
                        }(i.findAll(e, t), e, r)
                    }
                } : n === eB.ACTION || n === eB.ERROR ? {
                    type: n,
                    view: {
                        in_foreground: s("active", e, 0)
                    }
                } : eP.SKIPPED), {
                    wasInPageStateDuringPeriod: s,
                    addPageState: a,
                    stop: () => {
                        o(), i.stop()
                    }
                }
            }(t, r);
            ec.push(() => eg.stop());
            let ev = (0, O.startViewHistory)(e);
            ec.push(() => ev.stop());
            let eb = function(e, t, r, n) {
                let i, o = (0, tB.createValueHistory)({
                    expireDelay: rL
                });
                e.subscribe(1, ({
                    startClocks: e
                }) => {
                    let t = n.href;
                    o.add(s({
                        url: t,
                        referrer: i || document.referrer
                    }), e.relative), i = t
                }), e.subscribe(6, ({
                    endClocks: e
                }) => {
                    o.closeActive(e.relative)
                });
                let a = r.subscribe(({
                    newLocation: e
                }) => {
                    let t = o.find();
                    if (t) {
                        let r = (0, I.relativeNow)();
                        o.closeActive(r), o.add(s({
                            url: e.href,
                            referrer: t.referrer
                        }), r)
                    }
                });

                function s({
                    url: e,
                    referrer: t
                }) {
                    return {
                        url: e,
                        referrer: t
                    }
                }
                return t.register(0, ({
                    startTime: e,
                    eventType: t
                }) => {
                    let r = o.find(e);
                    return r ? {
                        type: t,
                        view: {
                            url: r.url,
                            referrer: r.referrer
                        }
                    } : eP.DISCARDED
                }), {
                    findUrl: e => o.find(e),
                    stop: () => {
                        a.unsubscribe(), o.stop()
                    }
                }
            }(e, t, ef, location);
            ec.push(() => eb.stop());
            let ey = (Z = (0, tB.createValueHistory)({
                expireDelay: rP
            }), e.subscribe(1, ({
                startClocks: e
            }) => {
                Z.add({}, e.relative)
            }), e.subscribe(6, ({
                endClocks: e
            }) => {
                Z.closeActive(e.relative)
            }), t.register(0, ({
                startTime: e,
                eventType: t
            }) => {
                if (!r.trackFeatureFlagsForEvents.concat([eB.VIEW, eB.ERROR]).includes(t)) return eP.SKIPPED;
                let n = Z.find(e);
                return !n || (0, k.isEmptyObject)(n) ? eP.SKIPPED : {
                    type: t,
                    feature_flags: n
                }
            }), {
                addFeatureFlagEvaluation: (e, t) => {
                    let r = Z.find();
                    r && (r[e] = t)
                }
            });
            t.register(0, ({
                eventType: e,
                startTime: t
            }) => {
                let r, o, a, s = n.findTrackedSession(t),
                    u = ev.findView(t);
                return s && u ? (e === eB.VIEW ? (r = !!i.getReplayStats(u.id) || void 0, o = 1 === s.sessionReplay, a = !!u.sessionIsActive && void 0) : r = !!i.isRecording() || void 0, {
                    type: e,
                    session: {
                        id: s.id,
                        type: "user",
                        has_replay: r,
                        sampled_for_replay: o,
                        is_active: a
                    }
                }) : eP.DISCARDED
            }), t.register(1, ({
                startTime: e
            }) => {
                let t = n.findTrackedSession(e);
                return t ? {
                    session: {
                        id: t.id
                    }
                } : eP.SKIPPED
            }), t.register(0, ({
                eventType: e
            }) => ({
                type: e,
                connectivity: (0, r6.getConnectivity)()
            }));
            let eE = (0, y.startGlobalContext)(t, r, "rum", !0),
                eS = (0, E.startUserContext)(t, r, n, "rum"),
                eh = (0, b.startAccountContext)(t, r, "rum"),
                e_ = function(e, t, r, n, i) {
                    var o;
                    let a, s, u, l, c = (a = (0, tB.createValueHistory)({
                            expireDelay: tF
                        }), s = new Set, u = e.subscribe(10, () => {
                            a.reset(), s.forEach(e => e.stop()), s.clear()
                        }), {
                            createTrackedAction: function(t) {
                                let r, n = (0, B.generateUUID)(),
                                    i = a.add(n, t.relative),
                                    o = tV({
                                        lifeCycle: e,
                                        isChildEvent: e => void 0 !== e.action && (Array.isArray(e.action.id) ? e.action.id.includes(n) : e.action.id === n)
                                    });

                                function u() {
                                    o.stop(), s.delete(o)
                                }
                                return s.add(o), {
                                    id: n,
                                    startClocks: t,
                                    get duration() {
                                        return r
                                    },
                                    get counts() {
                                        return o.eventCounts
                                    },
                                    stop(e) {
                                        i.close(e), r = (0, I.elapsed)(t.relative, e), u()
                                    },
                                    discard() {
                                        i.remove(), u()
                                    }
                                }
                            },
                            findActionId: function(e) {
                                let t = a.findAll(e);
                                return t.length ? t : void 0
                            },
                            stop: function() {
                                u.unsubscribe(), s.forEach(e => e.stop()), s.clear(), a.reset(), a.stop()
                            }
                        }),
                        {
                            unsubscribe: d
                        } = e.subscribe(0, t => {
                            e.notify(12, tj(t))
                        }),
                        f = $.noop;
                    i.trackUserInteractions && ({
                        stop: f
                    } = function(e, t, r, n, i) {
                        let o, a = new P.Observable;
                        e.subscribe(5, l), e.subscribe(11, l);
                        let {
                            stop: s
                        } = function(e, {
                            onPointerDown: t,
                            onPointerUp: r
                        }) {
                            let n, i, o = {
                                    selection: !1,
                                    input: !1,
                                    scroll: !1
                                },
                                a = [(0, eQ.addEventListener)(e, window, "pointerdown", e => {
                                    tx(e) && (n = tD(), o = {
                                        selection: !1,
                                        input: !1,
                                        scroll: !1
                                    }, i = t(e))
                                }, {
                                    capture: !0
                                }), (0, eQ.addEventListener)(e, window, "selectionchange", () => {
                                    n && tD() || (o.selection = !0)
                                }, {
                                    capture: !0
                                }), (0, eQ.addEventListener)(e, window, "scroll", () => {
                                    o.scroll = !0
                                }, {
                                    capture: !0,
                                    passive: !0
                                }), (0, eQ.addEventListener)(e, window, "pointerup", e => {
                                    if (tx(e) && i) {
                                        let t = o;
                                        r(i, e, () => t), i = void 0
                                    }
                                }, {
                                    capture: !0
                                }), (0, eQ.addEventListener)(e, window, "input", () => {
                                    o.input = !0
                                }, {
                                    capture: !0
                                })];
                            return {
                                stop: () => {
                                    a.forEach(e => e.stop())
                                }
                            }
                        }(n, {
                            onPointerDown: i => (function(e, t, r, n, i) {
                                var o;
                                let a, s = e.betaTrackActionsInShadowDom ? t$(n) : n.target;
                                if ((a = e.enablePrivacyForActionName ? tp(s, e.defaultPrivacyLevel) : tl.ALLOW) === tl.HIDDEN) return;
                                let u = function(e, t, r) {
                                        let n = e.target,
                                            i = n.getBoundingClientRect(),
                                            o = tr(n, r.actionNameAttribute);
                                        o && tP(e.timeStamp, o);
                                        let {
                                            name: a,
                                            nameSource: s
                                        } = function(e, t, r = tl.ALLOW) {
                                            let n = new Map,
                                                {
                                                    actionNameAttribute: i
                                                } = t,
                                                o = tT(e, e7) || i && tT(e, i);
                                            return o ? {
                                                name: o,
                                                nameSource: "custom_attribute"
                                            } : r === tl.MASK ? {
                                                name: e8,
                                                nameSource: "mask_placeholder"
                                            } : tI(e, tO, t, n) || tI(e, tw, t, n) || {
                                                name: "",
                                                nameSource: "blank"
                                            }
                                        }(r.betaTrackActionsInShadowDom ? t$(e) : e.target, r, t);
                                        return {
                                            type: eK.CLICK,
                                            target: {
                                                width: Math.round(i.width),
                                                height: Math.round(i.height),
                                                selector: o
                                            },
                                            position: {
                                                x: Math.round(e.clientX - i.left),
                                                y: Math.round(e.clientY - i.top)
                                            },
                                            name: a,
                                            nameSource: s
                                        }
                                    }(n, a, e),
                                    l = !1;
                                return o = e => {
                                    l = e.hadActivity
                                }, e5(e3(t, r, i, e), o, 100), {
                                    clickActionBase: u,
                                    hadActivityOnPointerDown: () => l
                                }
                            })(n, e, t, i, r),
                            onPointerUp: ({
                                clickActionBase: o,
                                hadActivityOnPointerDown: s
                            }, l, c) => {
                                ! function(e, t, r, n, i, o, a, s, u, l, c) {
                                    var d, f;
                                    let p = function e(t, r, n, i, o) {
                                        let a, s = r.createTrackedAction((0, I.relativeToClocks)(o.timeStamp)),
                                            u = 0,
                                            l = [],
                                            c = new P.Observable;

                                        function d(e) {
                                            0 === u && (u = 1, (a = e) ? s.stop((0, I.getRelativeTime)(a)) : s.discard(), c.notify())
                                        }
                                        return {
                                            event: o,
                                            stop: d,
                                            stopObservable: c,
                                            get hasError() {
                                                return s.counts.errorCount > 0
                                            },
                                            get hasPageActivity() {
                                                return void 0 !== a
                                            },
                                            getUserActivity: n,
                                            addFrustration: e => {
                                                l.push(e)
                                            },
                                            get startClocks() {
                                                return s.startClocks
                                            },
                                            isStopped: () => 1 === u || 2 === u,
                                            clone: () => e(t, r, n, i, o),
                                            validate: e => {
                                                if (d(), 1 !== u) return;
                                                let r = {
                                                    startClocks: s.startClocks,
                                                    duration: s.duration,
                                                    id: s.id,
                                                    frustrationTypes: l,
                                                    counts: s.counts,
                                                    events: null != e ? e : [o],
                                                    event: o,
                                                    ...i
                                                };
                                                t.notify(0, r), u = 2
                                            },
                                            discard: () => {
                                                d(), u = 2
                                            }
                                        }
                                    }(t, i, l, s, u);
                                    a(p);
                                    let m = null == (d = null == s ? void 0 : s.target) ? void 0 : d.selector;
                                    m && tP(u.timeStamp, m);
                                    let {
                                        stop: g
                                    } = (f = e => {
                                        e.hadActivity && e.end < p.startClocks.timeStamp ? p.discard() : e.hadActivity ? p.stop(e.end) : c() ? p.stop(p.startClocks.timeStamp) : p.stop()
                                    }, e5(e3(t, r, n, e), f, tM)), v = t.subscribe(5, ({
                                        endClocks: e
                                    }) => {
                                        p.stop(e.timeStamp)
                                    }), b = t.subscribe(11, () => {
                                        p.stop((0, I.timeStampNow)())
                                    }), y = o.subscribe(() => {
                                        p.stop()
                                    });
                                    p.stopObservable.subscribe(() => {
                                        b.unsubscribe(), v.unsubscribe(), g(), y.unsubscribe()
                                    })
                                }(n, e, t, r, i, a, u, o, l, c, s)
                            }
                        });
                        return {
                            stop: () => {
                                l(), a.notify(), s()
                            }
                        };

                        function u(e) {
                            if (!o || !o.tryAppend(e)) {
                                let t = e.clone();
                                o = function(e, t) {
                                    let r, n = [],
                                        i = 0;

                                    function o(e) {
                                        e.stopObservable.subscribe(a), n.push(e), (0, U.clearTimeout)(r), r = (0, U.setTimeout)(s, th)
                                    }

                                    function a() {
                                        1 === i && n.every(e => e.isStopped()) && (i = 2, t(n))
                                    }

                                    function s() {
                                        (0, U.clearTimeout)(r), 0 === i && (i = 1, a())
                                    }
                                    return o(e), {
                                        tryAppend: e => {
                                            var t, r, a, u;
                                            return 0 === i && (!(n.length > 0) || (t = n[n.length - 1].event, r = e.event, t.target === r.target && 100 >= (a = t, u = r, Math.sqrt(Math.pow(a.clientX - u.clientX, 2) + Math.pow(a.clientY - u.clientY, 2))) && t.timeStamp - r.timeStamp <= th) ? (o(e), !0) : (s(), !1))
                                        },
                                        stop: () => {
                                            s()
                                        }
                                    }
                                }(e, e => {
                                    (function(e, t) {
                                        let {
                                            isRage: r
                                        } = function(e, t) {
                                            if (function(e) {
                                                    if (e.some(e => e.getUserActivity().selection || e.getUserActivity().scroll)) return !1;
                                                    for (let t = 0; t < e.length - 2; t += 1)
                                                        if (e[t + 3 - 1].event.timeStamp - e[t].event.timeStamp <= I.ONE_SECOND) return !0;
                                                    return !1
                                                }(e)) return t.addFrustration(ej.RAGE_CLICK), e.some(tL) && t.addFrustration(ej.DEAD_CLICK), t.hasError && t.addFrustration(ej.ERROR_CLICK), {
                                                isRage: !0
                                            };
                                            let r = e.some(e => e.getUserActivity().selection);
                                            return e.forEach(e => {
                                                e.hasError && e.addFrustration(ej.ERROR_CLICK), tL(e) && !r && e.addFrustration(ej.DEAD_CLICK)
                                            }), {
                                                isRage: !1
                                            }
                                        }(e, t);
                                        r ? (e.forEach(e => e.discard()), t.stop((0, I.timeStampNow)()), t.validate(e.map(e => e.event))) : (t.discard(), e.forEach(e => e.validate()))
                                    })(e, t), o = void 0
                                })
                            }
                        }

                        function l() {
                            o && o.stop()
                        }
                    }(e, r, n, i, c));
                    let p = (o = t => {
                            e.notify(12, tj(t))
                        }, l = new Map, e.subscribe(10, () => l.clear()), {
                            addAction: function(e) {
                                o({
                                    id: (0, B.generateUUID)(),
                                    frustrationTypes: [],
                                    ...e
                                })
                            },
                            startAction: function(e, t = {}, r = (0, I.clocksNow)()) {
                                var n;
                                let i = null != (n = t.actionKey) ? n : e,
                                    o = l.get(i);
                                o && (o.trackedAction.discard(), l.delete(i));
                                let a = c.createTrackedAction(r);
                                l.set(i, {
                                    name: e,
                                    type: t.type,
                                    context: t.context,
                                    trackedAction: a
                                })
                            },
                            stopAction: function(e, t = {}, r = (0, I.clocksNow)()) {
                                var n, i;
                                let a = null != (n = t.actionKey) ? n : e,
                                    s = l.get(a);
                                if (!s) return;
                                s.trackedAction.stop(r.relative);
                                let u = [];
                                s.trackedAction.counts.errorCount > 0 && u.push(ej.ERROR_CLICK), o({
                                    id: s.trackedAction.id,
                                    name: s.name,
                                    type: (null != (i = t.type) ? i : s.type) || eK.CUSTOM,
                                    startClocks: s.trackedAction.startClocks,
                                    duration: s.trackedAction.duration,
                                    context: (0, tK.combine)(s.context, t.context),
                                    counts: s.trackedAction.counts,
                                    frustrationTypes: u
                                }), l.delete(a)
                            },
                            stop: function() {
                                l.forEach(e => e.trackedAction.discard()), l.clear()
                            }
                        }),
                        m = {
                            findActionId: c.findActionId
                        };
                    return t.register(0, ({
                        startTime: e,
                        eventType: t
                    }) => {
                        if (t !== eB.ERROR && t !== eB.RESOURCE && t !== eB.LONG_TASK) return eP.SKIPPED;
                        let r = t === eB.LONG_TASK ? (0, I.addDuration)(e, 1) : e,
                            n = m.findActionId(r);
                        return n ? {
                            type: t,
                            action: {
                                id: n
                            }
                        } : eP.SKIPPED
                    }), t.register(1, ({
                        startTime: e
                    }) => ({
                        action: {
                            id: m.findActionId(e)
                        }
                    })), {
                        addAction: p.addAction,
                        startAction: p.startAction,
                        stopAction: p.stopAction,
                        actionContexts: m,
                        stop: () => {
                            d(), f(), p.stop(), c.stop()
                        }
                    }
                }(e, t, ed, ep, r);
            ec.push(e_.stop);
            let eT = {
                    addEvent: (t, r, n, i) => {
                        r8.includes(r.type) && e.notify(12, {
                            startTime: t,
                            rawRumEvent: r,
                            domainContext: n,
                            duration: i
                        })
                    }
                },
                eO = (ee = requestAnimationFrame((0, eZ.monitor)(() => {
                    Q = rb()
                })), et = rv(r).subscribe(e => {
                    Q = e
                }).unsubscribe, t.register(0, ({
                    eventType: e
                }) => ({
                    type: e,
                    display: Q ? {
                        viewport: Q
                    } : void 0
                })), {
                    stop: () => {
                        et(), ee && cancelAnimationFrame(ee)
                    }
                });
            ec.push(eO.stop);
            let ew = function(e, t, r = function(e, t) {
                let r = window.cookieStore ? function(e) {
                    return (t, r) => (0, eQ.addEventListener)(e, window.cookieStore, "change", e => {
                        let n = e.changed.find(e => e.name === t) || e.deleted.find(e => e.name === t);
                        n && r(n.value)
                    }).stop
                }(e) : rJ;
                return new P.Observable(e => r(t, t => e.notify(t)))
            }(e, rX)) {
                var n;
                let i = G(rX) || (null == (n = window.Cypress) ? void 0 : n.env("traceId")),
                    o = r.subscribe(e => {
                        i = e
                    });
                return t.register(0, ({
                    eventType: e
                }) => "string" != typeof i ? eP.SKIPPED : {
                    type: e,
                    session: {
                        type: "ci_test"
                    },
                    ci_test: {
                        test_execution_id: i
                    }
                }), {
                    stop: () => {
                        o.unsubscribe()
                    }
                }
            }(r, t);
            ec.push(ew.stop), t.register(0, ({
                eventType: e
            }) => rw() ? {
                type: e,
                session: {
                    type: "synthetics"
                },
                synthetics: {
                    test_id: rT(),
                    result_id: rO(),
                    injected: r_()
                }
            } : eP.SKIPPED), c = {
                [eB.VIEW]: {
                    "view.performance.lcp.resource_url": "string",
                    ...r3,
                    ...r5,
                    ...r4
                },
                [eB.ERROR]: {
                    "error.message": "string",
                    "error.stack": "string",
                    "error.resource.url": "string",
                    "error.fingerprint": "string",
                    ...r3,
                    ...r5,
                    ...r4
                },
                [eB.RESOURCE]: {
                    "resource.url": "string",
                    "resource.graphql.variables": "string",
                    ...r3,
                    ...r5,
                    ...r4
                },
                [eB.ACTION]: {
                    "action.target.name": "string",
                    ...r3,
                    ...r5,
                    ...r4
                },
                [eB.LONG_TASK]: {
                    "long_task.scripts[].source_url": "string",
                    "long_task.scripts[].invoker": "string",
                    ...r3,
                    ...r5,
                    ...r4
                },
                [eB.VITAL]: { ...r3,
                    ...r5,
                    ...r4
                }
            }, er = {
                [eB.ERROR]: rQ(eB.ERROR, d, void 0),
                [eB.ACTION]: rQ(eB.ACTION, d, void 0),
                [eB.VITAL]: rQ(eB.VITAL, d, void 0)
            }, e.subscribe(12, ({
                startTime: n,
                duration: i,
                rawRumEvent: o,
                domainContext: a
            }) => {
                let s = t.triggerHook(0, {
                    eventType: o.type,
                    rawRumEvent: o,
                    domainContext: a,
                    startTime: n,
                    duration: i
                });
                if (s === eP.DISCARDED) return;
                let u = (0, tK.combine)(s, o, {
                    ddtags: (0, r0.buildTags)(r).join(",")
                });
                (function(e, t, r, n) {
                    var i, o;
                    if (t) {
                        let n, i, a = (o = c[e.type], i = (e => t(e, r))(n = (0, tK.deepClone)(e)), (0, R.objectEntries)(o).forEach(([t, r]) => (function e(t, r, n, i) {
                            let [o, ...a] = n;
                            if ("[]" === o) {
                                Array.isArray(t) && Array.isArray(r) && t.forEach((t, n) => e(t, r[n], a, i));
                                return
                            }
                            if (r2(t) && r2(r)) {
                                var s, u, l, c;
                                let n;
                                if (a.length > 0) return e(t[o], r[o], a, i);
                                s = t, u = o, l = r[o], c = i, (n = (0, r1.getType)(l)) === c ? s[u] = (0, tG.sanitize)(l) : "object" === c && ("undefined" === n || "null" === n) && (s[u] = {})
                            }
                        })(e, n, t.split(/\.|(?=\[\])/), r)), i);
                        if (!1 === a && e.type !== eB.VIEW) return !1;
                        !1 === a && L.display.warn("Can't dismiss view events using beforeSend!")
                    }
                    return !(null == (i = n[e.type]) ? void 0 : i.isLimitReached())
                })(u, r.beforeSend, a, er) && ((0, k.isEmptyObject)(u.context) && delete u.context, e.notify(13, u))
            });
            let {
                addTiming: eI,
                startView: eA,
                setViewName: eN,
                setViewContext: eC,
                setViewContextProperty: eD,
                getViewContext: ex,
                stop: eM
            } = (T = location, e.subscribe(4, t => {
                var n, o, a, s, u, l, c, d, f, p, m, g, v, b, y, E, S, h, _, T;
                let O, w, A;
                return e.notify(12, (n = t, o = r, O = i.getReplayStats(n.id), w = null == (s = null == (a = n.commonViewMetrics) ? void 0 : a.cumulativeLayoutShift) ? void 0 : s.devicePixelRatio, A = {
                    _dd: {
                        document_version: n.documentVersion,
                        replay_stats: O,
                        cls: w ? {
                            device_pixel_ratio: w
                        } : void 0,
                        configuration: {
                            start_session_replay_recording_manually: o.startSessionReplayRecordingManually
                        }
                    },
                    date: n.startClocks.timeStamp,
                    type: eB.VIEW,
                    view: {
                        action: {
                            count: n.eventCounts.actionCount
                        },
                        frustration: {
                            count: n.eventCounts.frustrationCount
                        },
                        cumulative_layout_shift: null == (u = n.commonViewMetrics.cumulativeLayoutShift) ? void 0 : u.value,
                        cumulative_layout_shift_time: (0, I.toServerDuration)(null == (l = n.commonViewMetrics.cumulativeLayoutShift) ? void 0 : l.time),
                        cumulative_layout_shift_target_selector: null == (c = n.commonViewMetrics.cumulativeLayoutShift) ? void 0 : c.targetSelector,
                        first_byte: (0, I.toServerDuration)(null == (d = n.initialViewMetrics.navigationTimings) ? void 0 : d.firstByte),
                        dom_complete: (0, I.toServerDuration)(null == (f = n.initialViewMetrics.navigationTimings) ? void 0 : f.domComplete),
                        dom_content_loaded: (0, I.toServerDuration)(null == (p = n.initialViewMetrics.navigationTimings) ? void 0 : p.domContentLoaded),
                        dom_interactive: (0, I.toServerDuration)(null == (m = n.initialViewMetrics.navigationTimings) ? void 0 : m.domInteractive),
                        error: {
                            count: n.eventCounts.errorCount
                        },
                        first_contentful_paint: (0, I.toServerDuration)(n.initialViewMetrics.firstContentfulPaint),
                        first_input_delay: (0, I.toServerDuration)(null == (g = n.initialViewMetrics.firstInput) ? void 0 : g.delay),
                        first_input_time: (0, I.toServerDuration)(null == (v = n.initialViewMetrics.firstInput) ? void 0 : v.time),
                        first_input_target_selector: null == (b = n.initialViewMetrics.firstInput) ? void 0 : b.targetSelector,
                        interaction_to_next_paint: (0, I.toServerDuration)(null == (y = n.commonViewMetrics.interactionToNextPaint) ? void 0 : y.value),
                        interaction_to_next_paint_time: (0, I.toServerDuration)(null == (E = n.commonViewMetrics.interactionToNextPaint) ? void 0 : E.time),
                        interaction_to_next_paint_target_selector: null == (S = n.commonViewMetrics.interactionToNextPaint) ? void 0 : S.targetSelector,
                        is_active: n.isActive,
                        name: n.name,
                        largest_contentful_paint: (0, I.toServerDuration)(null == (h = n.initialViewMetrics.largestContentfulPaint) ? void 0 : h.value),
                        largest_contentful_paint_target_selector: null == (_ = n.initialViewMetrics.largestContentfulPaint) ? void 0 : _.targetSelector,
                        load_event: (0, I.toServerDuration)(null == (T = n.initialViewMetrics.navigationTimings) ? void 0 : T.loadEvent),
                        loading_time: e$((0, I.toServerDuration)(n.commonViewMetrics.loadingTime)),
                        loading_type: n.loadingType,
                        long_task: {
                            count: n.eventCounts.longTaskCount
                        },
                        performance: function({
                            cumulativeLayoutShift: e,
                            interactionToNextPaint: t
                        }, {
                            firstContentfulPaint: r,
                            firstInput: n,
                            largestContentfulPaint: i
                        }) {
                            return {
                                cls: e && {
                                    score: e.value,
                                    timestamp: (0, I.toServerDuration)(e.time),
                                    target_selector: e.targetSelector,
                                    previous_rect: e.previousRect,
                                    current_rect: e.currentRect
                                },
                                fcp: r && {
                                    timestamp: (0, I.toServerDuration)(r)
                                },
                                fid: n && {
                                    duration: (0, I.toServerDuration)(n.delay),
                                    timestamp: (0, I.toServerDuration)(n.time),
                                    target_selector: n.targetSelector
                                },
                                inp: t && {
                                    duration: (0, I.toServerDuration)(t.value),
                                    timestamp: (0, I.toServerDuration)(t.time),
                                    target_selector: t.targetSelector
                                },
                                lcp: i && {
                                    timestamp: (0, I.toServerDuration)(i.value),
                                    target_selector: i.targetSelector,
                                    resource_url: i.resourceUrl
                                }
                            }
                        }(n.commonViewMetrics, n.initialViewMetrics),
                        resource: {
                            count: n.eventCounts.resourceCount
                        },
                        time_spent: (0, I.toServerDuration)(n.duration)
                    },
                    display: n.commonViewMetrics.scroll ? {
                        scroll: {
                            max_depth: n.commonViewMetrics.scroll.maxDepth,
                            max_depth_scroll_top: n.commonViewMetrics.scroll.maxDepthScrollTop,
                            max_scroll_height: n.commonViewMetrics.scroll.maxScrollHeight,
                            max_scroll_height_time: (0, I.toServerDuration)(n.commonViewMetrics.scroll.maxScrollHeightTime)
                        }
                    } : void 0,
                    privacy: {
                        replay_level: o.defaultPrivacyLevel
                    },
                    device: {
                        locale: navigator.language,
                        locales: navigator.languages,
                        time_zone: function() {
                            try {
                                return new Intl.DateTimeFormat().resolvedOptions().timeZone
                            } catch (e) {
                                return
                            }
                        }()
                    }
                }, (0, k.isEmptyObject)(n.customTimings) || (A.view.custom_timings = (0, k.mapValues)(n.customTimings, I.toServerDuration)), {
                    rawRumEvent: A,
                    startTime: n.startClocks.relative,
                    duration: n.duration,
                    domainContext: {
                        location: n.location
                    }
                }))
            }), t.register(0, ({
                startTime: e,
                eventType: t
            }) => {
                let r = ev.findView(e);
                return r ? {
                    type: t,
                    service: r.service,
                    version: r.version,
                    context: r.context,
                    view: {
                        id: r.id,
                        name: r.name
                    }
                } : eP.DISCARDED
            }), t.register(1, ({
                startTime: e
            }) => {
                var t;
                return {
                    view: {
                        id: null == (t = ev.findView(e)) ? void 0 : t.id
                    }
                }
            }), function(e, t, r, n, i, o, s, u) {
                let l, c, d = new Set,
                    p = g(eF.INITIAL_LOAD, (0, rt.clocksOrigin)(), u);

                function g(o, s, u) {
                    let l = function(e, t, r, n, i, o, s = (0, rt.clocksNow)(), u) {
                        var l;
                        let c, d = (0, B.generateUUID)(),
                            p = new P.Observable,
                            g = {},
                            v = 0,
                            b = (0, k.shallowClone)(i),
                            y = (0, rr.createContextManager)(),
                            E = !0,
                            S = null == u ? void 0 : u.name,
                            h = (null == u ? void 0 : u.service) || n.service,
                            _ = (null == u ? void 0 : u.version) || n.version,
                            T = null == u ? void 0 : u.context;
                        T && y.setContext(T);
                        let O = {
                            id: d,
                            name: S,
                            startClocks: s,
                            service: h,
                            version: _,
                            context: T
                        };
                        e.notify(1, O), e.notify(2, O);
                        let {
                            throttled: w,
                            cancel: A
                        } = (0, $.throttle)(Y, 3e3, {
                            leading: !1
                        }), {
                            setLoadEvent: N,
                            setViewEnd: C,
                            stop: D,
                            stopINPTracking: x,
                            getCommonViewMetrics: V
                        } = function(e, t, r, n, i, o, s) {
                            let u = {},
                                {
                                    stop: l,
                                    setLoadEvent: c
                                } = function(e, t, r, n, i, o, a) {
                                    var s;
                                    let u = i === eF.INITIAL_LOAD,
                                        l = !0,
                                        c = [],
                                        d = ro(n, o);

                                    function f() {
                                        if (!l && !u && c.length > 0) {
                                            let e = Math.max(...c);
                                            e < d.timeStamp - o.relative && a(e)
                                        }
                                    }
                                    let {
                                        stop: p
                                    } = (s = e => {
                                        l && (l = !1, e.hadActivity && c.push((0, I.elapsed)(o.timeStamp, e.end)), f())
                                    }, e5(e3(e, t, r, n), s, void 0));
                                    return {
                                        stop: () => {
                                            p(), d.stop()
                                        },
                                        setLoadEvent: e => {
                                            u && (u = !1, c.push(e), f())
                                        }
                                    }
                                }(e, t, r, n, o, s, e => {
                                    u.loadingTime = e, i()
                                }),
                                {
                                    stop: d
                                } = function(e, t, r, n = function(e, t = ry) {
                                    return new P.Observable(r => {
                                        if (window.ResizeObserver) {
                                            let n = (0, $.throttle)(function() {
                                                    r.notify(function() {
                                                        let e = rg(),
                                                            {
                                                                height: t
                                                            } = rb();
                                                        return {
                                                            scrollHeight: Math.round((document.scrollingElement || document.documentElement).scrollHeight),
                                                            scrollDepth: Math.round(t + e),
                                                            scrollTop: e
                                                        }
                                                    }())
                                                }, t, {
                                                    leading: !1,
                                                    trailing: !0
                                                }),
                                                i = document.scrollingElement || document.documentElement,
                                                o = new ResizeObserver((0, eZ.monitor)(n.throttled));
                                            i && o.observe(i);
                                            let a = (0, eQ.addEventListener)(e, window, "scroll", n.throttled, {
                                                passive: !0
                                            });
                                            return () => {
                                                n.cancel(), o.disconnect(), a.stop()
                                            }
                                        }
                                    })
                                }(e)) {
                                    let i = 0,
                                        o = 0,
                                        a = 0,
                                        s = n.subscribe(({
                                            scrollDepth: e,
                                            scrollTop: n,
                                            scrollHeight: s
                                        }) => {
                                            let u = !1;
                                            if (e > i && (i = e, u = !0), s > o) {
                                                o = s;
                                                let e = (0, I.relativeNow)();
                                                a = (0, I.elapsed)(t.relative, e), u = !0
                                            }
                                            u && r({
                                                maxDepth: Math.min(i, o),
                                                maxDepthScrollTop: n,
                                                maxScrollHeight: o,
                                                maxScrollHeightTime: a
                                            })
                                        });
                                    return {
                                        stop: () => s.unsubscribe()
                                    }
                                }(n, s, e => {
                                    u.scroll = e
                                }),
                                {
                                    stop: p
                                } = function(e, t, r) {
                                    let n, i, o, a, s;
                                    if (!(e1(f.LAYOUT_SHIFT) && "WeakRef" in window)) return {
                                        stop: $.noop
                                    };
                                    let u = 0;
                                    r({
                                        value: 0
                                    });
                                    let l = (a = 0, s = 0, {
                                            update: e => {
                                                let t;
                                                return void 0 === i || e.startTime - o >= rl || e.startTime - i >= ru ? (i = o = e.startTime, s = a = e.value, t = !0) : (a += e.value, o = e.startTime, (t = e.value > s) && (s = e.value)), {
                                                    cumulatedValue: a,
                                                    isMaxValue: t
                                                }
                                            }
                                        }),
                                        c = e0(e, {
                                            type: f.LAYOUT_SHIFT,
                                            buffered: !0
                                        }).subscribe(i => {
                                            var o;
                                            for (let a of i) {
                                                if (a.hadRecentInput || a.startTime < t) continue;
                                                let {
                                                    cumulatedValue: i,
                                                    isMaxValue: s
                                                } = l.update(a);
                                                if (s) {
                                                    let e = function(e) {
                                                        let t;
                                                        for (let r of e)
                                                            if (r.node && eW(r.node)) {
                                                                let e = ra(r);
                                                                (!t || ra(t) < e) && (t = r)
                                                            }
                                                        return t
                                                    }(a.sources);
                                                    n = {
                                                        target: (null == e ? void 0 : e.node) ? new WeakRef(e.node) : void 0,
                                                        time: (0, I.elapsed)(t, a.startTime),
                                                        previousRect: null == e ? void 0 : e.previousRect,
                                                        currentRect: null == e ? void 0 : e.currentRect,
                                                        devicePixelRatio: window.devicePixelRatio
                                                    }
                                                }
                                                if (i > u) {
                                                    u = i;
                                                    let t = null == (o = null == n ? void 0 : n.target) ? void 0 : o.deref();
                                                    r({
                                                        value: (0, M.round)(u, 4),
                                                        targetSelector: t && tr(t, e.actionNameAttribute),
                                                        time: null == n ? void 0 : n.time,
                                                        previousRect: (null == n ? void 0 : n.previousRect) ? rs(n.previousRect) : void 0,
                                                        currentRect: (null == n ? void 0 : n.currentRect) ? rs(n.currentRect) : void 0,
                                                        devicePixelRatio: null == n ? void 0 : n.devicePixelRatio
                                                    })
                                                }
                                            }
                                        });
                                    return {
                                        stop: () => {
                                            c.unsubscribe()
                                        }
                                    }
                                }(n, s.relative, e => {
                                    u.cumulativeLayoutShift = e, i()
                                }),
                                {
                                    stop: m,
                                    getInteractionToNextPaint: g,
                                    setViewEnd: v
                                } = function(e, t, r) {
                                    var n;
                                    let i, o, s, u;
                                    if (!(e1(f.EVENT) && window.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype)) return {
                                        getInteractionToNextPaint: () => void 0,
                                        setViewEnd: $.noop,
                                        stop: $.noop
                                    };
                                    let {
                                        getViewInteractionCount: l,
                                        stopViewInteractionCount: c
                                    } = (n = r, "interactionCount" in performance || a || (a = new window.PerformanceObserver((0, eZ.monitor)(e => {
                                        e.getEntries().forEach(e => {
                                            e.interactionId && (rd = Math.min(rd, e.interactionId), rc = ((rf = Math.max(rf, e.interactionId)) - rd) / 7 + 1)
                                        })
                                    }))).observe({
                                        type: "event",
                                        buffered: !0,
                                        durationThreshold: 0
                                    }), s = n === eF.INITIAL_LOAD ? 0 : rp(), u = {
                                        stopped: !1
                                    }, {
                                        getViewInteractionCount: () => u.stopped ? u.interactionCount : rp() - s,
                                        stopViewInteractionCount: () => {
                                            u = {
                                                stopped: !0,
                                                interactionCount: rp() - s
                                            }
                                        }
                                    }), d = 1 / 0, p = function(e) {
                                        let t = [];

                                        function r() {
                                            t.sort((e, t) => t.duration - e.duration).splice(10)
                                        }
                                        return {
                                            process(e) {
                                                let n = t.findIndex(t => e.interactionId === t.interactionId),
                                                    i = t[t.length - 1]; - 1 !== n ? e.duration > t[n].duration && (t[n] = e, r()) : (t.length < 10 || e.duration > i.duration) && (t.push(e), r())
                                            },
                                            estimateP98Interaction() {
                                                let r = Math.min(t.length - 1, Math.floor(e() / 50));
                                                return t[r]
                                            }
                                        }
                                    }(l), m = -1;

                                    function g(r) {
                                        for (let e of r) e.interactionId && e.startTime >= t && e.startTime <= d && p.process(e);
                                        let n = p.estimateP98Interaction();
                                        if (n && n.duration !== m) {
                                            var a;
                                            let r;
                                            m = n.duration, o = (0, I.elapsed)(t, n.startTime), a = n.startTime, r = tU.get(a), tU.delete(a), !(i = r) && n.target && eW(n.target) && (i = tr(n.target, e.actionNameAttribute))
                                        }
                                    }
                                    let v = e0(e, {
                                            type: f.FIRST_INPUT,
                                            buffered: !0
                                        }).subscribe(g),
                                        b = e0(e, {
                                            type: f.EVENT,
                                            durationThreshold: 40,
                                            buffered: !0
                                        }).subscribe(g);
                                    return {
                                        getInteractionToNextPaint: () => m >= 0 ? {
                                            value: Math.min(m, rm),
                                            targetSelector: i,
                                            time: o
                                        } : l() ? {
                                            value: 0
                                        } : void 0,
                                        setViewEnd: e => {
                                            d = e, c()
                                        },
                                        stop: () => {
                                            b.unsubscribe(), v.unsubscribe()
                                        }
                                    }
                                }(n, s.relative, o);
                            return {
                                stop: () => {
                                    l(), p(), d()
                                },
                                stopINPTracking: m,
                                setLoadEvent: c,
                                setViewEnd: v,
                                getCommonViewMetrics: () => (u.interactionToNextPaint = g(), u)
                            }
                        }(e, t, r, n, z, o, s), {
                            stop: F,
                            initialViewMetrics: K
                        } = o === eF.INITIAL_LOAD ? function(e, t, r, n) {
                            var i, o;
                            let a, s = {},
                                {
                                    stop: u
                                } = function(e, t, r = t8) {
                                    return function(e, t) {
                                        let r, {
                                            stop: n
                                        } = t3(e, "complete", () => {
                                            r = (0, U.setTimeout)(() => t())
                                        });
                                        return {
                                            stop: () => {
                                                n(), (0, U.clearTimeout)(r)
                                            }
                                        }
                                    }(e, () => {
                                        var e;
                                        let n = r();
                                        n.loadEventEnd <= 0 || t({
                                            domComplete: (e = n).domComplete,
                                            domContentLoaded: e.domContentLoadedEventEnd,
                                            domInteractive: e.domInteractive,
                                            loadEvent: e.loadEventEnd,
                                            firstByte: e.responseStart >= 0 && e.responseStart <= (0, I.relativeNow)() ? e.responseStart : void 0
                                        })
                                    })
                                }(e, e => {
                                    r(e.loadEvent), s.navigationTimings = e, n()
                                }),
                                l = ro(e, t),
                                {
                                    stop: c
                                } = (i = e => {
                                    s.firstContentfulPaint = e, n()
                                }, {
                                    stop: e0(e, {
                                        type: f.PAINT,
                                        buffered: !0
                                    }).subscribe(e => {
                                        let t = e.find(e => "first-contentful-paint" === e.name && e.startTime < l.timeStamp && e.startTime < rn);
                                        t && i(t.startTime)
                                    }).unsubscribe
                                }),
                                {
                                    stop: d
                                } = function(e, t, r, n) {
                                    let i = 1 / 0,
                                        {
                                            stop: o
                                        } = (0, eQ.addEventListeners)(e, r, ["pointerdown", "keydown"], e => {
                                            i = e.timeStamp
                                        }, {
                                            capture: !0,
                                            once: !0
                                        }),
                                        a = 0,
                                        s = e0(e, {
                                            type: f.LARGEST_CONTENTFUL_PAINT,
                                            buffered: !0
                                        }).subscribe(r => {
                                            let o = (0, R.findLast)(r, e => e.entryType === f.LARGEST_CONTENTFUL_PAINT && e.startTime < i && e.startTime < t.timeStamp && e.startTime < ri && e.size > a);
                                            if (o) {
                                                var s;
                                                let t;
                                                o.element && (t = tr(o.element, e.actionNameAttribute)), n({
                                                    value: o.startTime,
                                                    targetSelector: t,
                                                    resourceUrl: "" === (s = o).url ? void 0 : s.url
                                                }), a = o.size
                                            }
                                        });
                                    return {
                                        stop: () => {
                                            o(), s.unsubscribe()
                                        }
                                    }
                                }(e, l, window, e => {
                                    s.largestContentfulPaint = e, n()
                                }),
                                {
                                    stop: p
                                } = (o = e => {
                                    s.firstInput = e, n()
                                }, a = e0(e, {
                                    type: f.FIRST_INPUT,
                                    buffered: !0
                                }).subscribe(t => {
                                    let r = t.find(e => e.startTime < l.timeStamp);
                                    if (r) {
                                        let t, n = (0, I.elapsed)(r.startTime, r.processingStart);
                                        r.target && eW(r.target) && (t = tr(r.target, e.actionNameAttribute)), o({
                                            delay: n >= 0 ? n : 0,
                                            time: r.startTime,
                                            targetSelector: t
                                        })
                                    }
                                }), {
                                    stop: () => {
                                        a.unsubscribe()
                                    }
                                });
                            return {
                                stop: function() {
                                    u(), c(), d(), p(), l.stop()
                                },
                                initialViewMetrics: s
                            }
                        }(n, s, N, z) : {
                            stop: $.noop,
                            initialViewMetrics: {}
                        };
                        o === eF.BF_CACHE && (l = s.relative, requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                (e => {
                                    K.firstContentfulPaint = e, K.largestContentfulPaint = {
                                        value: e
                                    }, z()
                                })((0, I.elapsed)(l, (0, I.relativeNow)()))
                            })
                        }));
                        let {
                            stop: j,
                            eventCounts: q
                        } = function(e, t, r) {
                            let {
                                stop: n,
                                eventCounts: i
                            } = tV({
                                lifeCycle: e,
                                isChildEvent: e => e.view.id === t,
                                onChange: r
                            });
                            return {
                                stop: n,
                                eventCounts: i
                            }
                        }(e, d, z), H = (0, U.setInterval)(Y, rE), G = e.subscribe(11, e => {
                            e.reason === m.PageExitReason.UNLOADING && Y()
                        });

                        function W() {
                            e.notify(3, {
                                id: d,
                                name: S,
                                context: y.getContext(),
                                startClocks: s,
                                sessionIsActive: E
                            })
                        }

                        function z() {
                            W(), w()
                        }

                        function Y() {
                            A(), W(), v += 1;
                            let t = void 0 === c ? (0, rt.timeStampNow)() : c.timeStamp;
                            e.notify(4, {
                                customTimings: g,
                                documentVersion: v,
                                id: d,
                                name: S,
                                service: h,
                                version: _,
                                context: y.getContext(),
                                loadingType: o,
                                location: b,
                                startClocks: s,
                                commonViewMetrics: V(),
                                initialViewMetrics: K,
                                duration: (0, rt.elapsed)(s.timeStamp, t),
                                isActive: void 0 === c,
                                sessionIsActive: E,
                                eventCounts: q
                            })
                        }
                        return Y(), y.changeObservable.subscribe(z), {
                            get name() {
                                return S
                            },
                            service: h,
                            version: _,
                            contextManager: y,
                            stopObservable: p,
                            end(t = {}) {
                                var r, n;
                                c || (c = null != (r = t.endClocks) ? r : (0, rt.clocksNow)(), E = null == (n = t.sessionIsActive) || n, e.notify(5, {
                                    endClocks: c
                                }), e.notify(6, {
                                    endClocks: c
                                }), (0, U.clearInterval)(H), C(c.relative), D(), G.unsubscribe(), Y(), (0, U.setTimeout)(() => {
                                    this.stop()
                                }, rS))
                            },
                            stop() {
                                F(), j(), x(), p.notify()
                            },
                            addTiming(e, t) {
                                var r;
                                let n;
                                if (c) return;
                                let i = (0, rt.looksLikeRelativeTime)(t) ? t : (0, rt.elapsed)(s.timeStamp, t);
                                g[(n = (r = e).replace(/[^a-zA-Z0-9-_.@$]/g, "_")) !== r && L.display.warn(`Invalid timing name: ${r}, sanitized to: ${n}`), n] = i, z()
                            },
                            setViewName(e) {
                                S = e, Y()
                            }
                        }
                    }(t, r, n, i, e, o, s, u);
                    return d.add(l), l.stopObservable.subscribe(() => {
                        d.delete(l)
                    }), l
                }
                return t.subscribe(10, () => {
                    p = g(eF.ROUTE_CHANGE, void 0, {
                        name: p.name,
                        service: p.service,
                        version: p.version,
                        context: p.contextManager.getContext()
                    })
                }), t.subscribe(9, () => {
                    p.end({
                        sessionIsActive: !1
                    })
                }), s && (c = o.subscribe(({
                    oldLocation: e,
                    newLocation: t
                }) => {
                    var r, n;
                    let i;
                    r = e, n = t, r.pathname === n.pathname && ("" !== (i = n.hash.substring(1)) && document.getElementById(i) || rh(n.hash) === rh(r.hash)) || (p.end(), p = g(eF.ROUTE_CHANGE))
                }), i.trackBfcacheViews && (l = function(e, t) {
                    let {
                        stop: r
                    } = (0, eQ.addEventListener)(e, window, "pageshow", e => {
                        e.persisted && t(e)
                    }, {
                        capture: !0
                    });
                    return r
                }(i, e => {
                    p.end();
                    let t = (0, rt.relativeToClocks)(e.timeStamp);
                    p = g(eF.BF_CACHE, t, void 0)
                }))), {
                    addTiming: (e, t = (0, rt.timeStampNow)()) => {
                        p.addTiming(e, t)
                    },
                    startView: (e, t) => {
                        p.end({
                            endClocks: t
                        }), p = g(eF.ROUTE_CHANGE, t, e)
                    },
                    setViewContext: e => {
                        p.contextManager.setContext(e)
                    },
                    setViewContextProperty: (e, t) => {
                        p.contextManager.setContextProperty(e, t)
                    },
                    setViewName: e => {
                        p.setViewName(e)
                    },
                    getViewContext: () => p.contextManager.getContext(),
                    stop: () => {
                        c && c.unsubscribe(), l && l(), p.end(), d.forEach(e => e.stop())
                    }
                }
            }(T, e, ed, ep, r, ef, !r.trackViewsManually, o));
            ! function(e) {
                if (!(0, t_.isExperimentalFeatureEnabled)(t_.ExperimentalFeature.SOURCE_CODE_CONTEXT)) return;
                let t = window,
                    r = new Map;

                function n() {
                    t.DD_SOURCE_CODE_CONTEXT && ((0, R.objectEntries)(t.DD_SOURCE_CODE_CONTEXT).forEach(([e, t]) => {
                        let n = (0, tz.computeStackTrace)({
                            stack: e
                        }).stack[0];
                        n.url ? r.has(n.url) || r.set(n.url, t) : (0, g.addTelemetryError)("Source code context: missing frame url", {
                            stack: e
                        })
                    }), t.DD_SOURCE_CODE_CONTEXT = {})
                }
                n(), e.register(0, ({
                    domainContext: e,
                    rawRumEvent: t
                }) => {
                    var i, o, a, s;
                    let u;
                    n();
                    let l = (i = e, "long_task" === (o = t).type && "long-animation-frame" === o.long_task.entry_type ? null == (a = o.long_task.scripts[0]) ? void 0 : a.source_url : ("handlingStack" in i && (u = i.handlingStack), "error" === o.type && o.error.stack && (u = o.error.stack), null == (s = (0, tz.computeStackTrace)({
                        stack: u
                    }).stack[0]) ? void 0 : s.url));
                    if (l) {
                        let e = r.get(l);
                        if (e) return {
                            type: t.type,
                            service: e.service,
                            version: e.version
                        }
                    }
                    return eP.SKIPPED
                })
            }(t), ec.push(eM);
            let {
                stop: eq
            } = function(e, t, r, n = function() {
                let e = [];

                function t(t) {
                    let n;
                    if (t.didTimeout) {
                        let e = performance.now();
                        n = () => 30 - (performance.now() - e)
                    } else n = t.timeRemaining.bind(t);
                    for (; n() > 0 && e.length;) e.shift()();
                    e.length && r()
                }

                function r() {
                    t0(t, {
                        timeout: t1
                    })
                }
                return {
                    push(t) {
                        1 === e.push(t) && r()
                    },
                    stop() {
                        e.length = 0
                    }
                }
            }(), i = function(e, t, r = t8) {
                t3(e, "interactive", () => {
                    let e = r(),
                        n = Object.assign(e.toJSON(), {
                            entryType: f.RESOURCE,
                            initiatorType: C.FAKE_INITIAL_DOCUMENT,
                            duration: e.responseEnd,
                            traceId: function(e) {
                                var t;
                                let r, n, i = (r = (t = e).querySelector("meta[name=dd-trace-id]"), n = t.querySelector("meta[name=dd-trace-time]"), t6(r && r.content, n && n.content) || function(e) {
                                    let t = function(e) {
                                        for (let t = 0; t < e.childNodes.length; t += 1) {
                                            let r = t7(e.childNodes[t]);
                                            if (r) return r
                                        }
                                        if (e.body)
                                            for (let t = e.body.childNodes.length - 1; t >= 0; t -= 1) {
                                                let r = e.body.childNodes[t],
                                                    n = t7(r);
                                                if (n) return n;
                                                if (!eH(r)) break
                                            }
                                    }(e);
                                    if (t) return t6((0, B.findCommaSeparatedValue)(t, "trace-id"), (0, B.findCommaSeparatedValue)(t, "trace-time"))
                                }(e));
                                if (!(!i || i.traceTime <= (0, I.dateNow)() - t4)) return i.traceId
                            }(document),
                            toJSON: () => ({ ...n,
                                toJSON: void 0
                            })
                        });
                    t(n)
                })
            }) {
                let o, a = t.trackEarlyRequests;
                if (a) {
                    let t, r;
                    t = new Set, r = e.subscribe(8, e => {
                        t.add(e), t.size > 1e3 && ((0, g.addTelemetryDebug)("Too many requests"), t.delete(t.values().next().value))
                    }), o = {
                        getMatchingRequest(e) {
                            let r, n = 1 / 0;
                            for (let i of t) {
                                let t = e.startTime - i.startClocks.relative;
                                0 <= t && t < n && i.url === e.name && (n = Math.abs(t), r = i)
                            }
                            return r && t.delete(r), r
                        },
                        stop() {
                            r.unsubscribe()
                        }
                    }
                } else e.subscribe(8, e => {
                    u(() => {
                        var n, i, o;
                        return n = e, i = t, o = r, re(function(e) {
                            if (!performance || !("getEntriesByName" in performance)) return;
                            let t = performance.getEntriesByName(e.url, "resource");
                            if (!t.length || !("toJSON" in t[0])) return;
                            let r = t.filter(e => !t2.has(e)).filter(e => (0, C.hasValidResourceEntryDuration)(e) && (0, C.hasValidResourceEntryTimings)(e)).filter(t => {
                                var r, n, i;
                                return r = t, n = e.startClocks.relative, i = t5({
                                    startTime: e.startClocks.relative,
                                    duration: e.duration
                                }), r.startTime >= n - 1 && t5(r) <= (0, I.addDuration)(i, 1)
                            });
                            if (1 === r.length) return t2.add(r[0]), r[0].toJSON()
                        }(n), n, o, i)
                    })
                });
                let s = e0(t, {
                    type: f.RESOURCE,
                    buffered: !0
                }).subscribe(e => {
                    for (let n of e)(a || !(0, C.isResourceEntryRequestType)(n)) && u(() => t9(n, t, r, o))
                });

                function u(t) {
                    n.push(() => {
                        let r = t();
                        r && e.notify(12, r)
                    })
                }
                return i(t, e => {
                    u(() => t9(e, t, r, o))
                }), {
                    stop: () => {
                        n.stop(), s.unsubscribe()
                    }
                }
            }(e, r, eg);
            ec.push(eq);
            let {
                stop: eG,
                longTaskContexts: ez
            } = (en = (0, tB.createValueHistory)({
                expireDelay: rZ
            }), eo = e0(r, {
                type: ei = e1(f.LONG_ANIMATION_FRAME) ? f.LONG_ANIMATION_FRAME : f.LONG_TASK,
                buffered: !0
            }).subscribe(t => {
                for (let n of t) {
                    if (!r.trackLongTasks) break;
                    let t = (0, I.relativeToClocks)(n.startTime),
                        i = (0, B.generateUUID)(),
                        o = function(e, t, r) {
                            let n = {
                                date: t.timeStamp,
                                type: eB.LONG_TASK,
                                _dd: {
                                    discarded: !1
                                }
                            };
                            return e.entryType === f.LONG_TASK ? { ...n,
                                long_task: {
                                    id: r,
                                    entry_type: eV.LONG_TASK,
                                    duration: (0, I.toServerDuration)(e.duration)
                                }
                            } : { ...n,
                                long_task: {
                                    id: r,
                                    entry_type: eV.LONG_ANIMATION_FRAME,
                                    duration: (0, I.toServerDuration)(e.duration),
                                    blocking_duration: (0, I.toServerDuration)(e.blockingDuration),
                                    first_ui_event_timestamp: (0, I.toServerDuration)(e.firstUIEventTimestamp),
                                    render_start: (0, I.toServerDuration)(e.renderStart),
                                    style_and_layout_start: (0, I.toServerDuration)(e.styleAndLayoutStart),
                                    start_time: (0, I.toServerDuration)(e.startTime),
                                    scripts: e.scripts.map(e => ({
                                        duration: (0, I.toServerDuration)(e.duration),
                                        pause_duration: (0, I.toServerDuration)(e.pauseDuration),
                                        forced_style_and_layout_duration: (0, I.toServerDuration)(e.forcedStyleAndLayoutDuration),
                                        start_time: (0, I.toServerDuration)(e.startTime),
                                        execution_start: (0, I.toServerDuration)(e.executionStart),
                                        source_url: e.sourceURL,
                                        source_function_name: e.sourceFunctionName,
                                        source_char_position: e.sourceCharPosition,
                                        invoker: e.invoker,
                                        invoker_type: e.invokerType,
                                        window_attribution: e.windowAttribution
                                    }))
                                }
                            }
                        }(n, t, i);
                    e.notify(12, {
                        rawRumEvent: o,
                        startTime: t.relative,
                        duration: n.duration,
                        domainContext: {
                            performanceEntry: n
                        }
                    }), en.add({
                        id: i,
                        startClocks: t,
                        duration: n.duration,
                        entryType: ei
                    }, t.relative), en.closeActive((0, I.addDuration)(t.relative, n.duration))
                }
            }), {
                stop: () => {
                    eo.unsubscribe(), en.stop()
                },
                longTaskContexts: {
                    findLongTasks: (e, t) => en.findAll(e, t)
                }
            });
            ec.push(eG);
            let {
                addError: eY
            } = (ea = new P.Observable, u.subscribe(e => {
                0 === e.type && ea.notify(e.error)
            }), x = ea, (J = [L.ConsoleApiName.error].map(e => {
                var t;
                return tJ[e] || (tJ[e] = (t = e, new P.Observable(e => {
                    let r = L.globalConsole[t];
                    return L.globalConsole[t] = (...n) => {
                        r.apply(console, n);
                        let i = (0, tY.createHandlingStack)("console error");
                        (0, eZ.callMonitored)(() => {
                            e.notify(function(e, t, r) {
                                let n = e.map(e => {
                                    var t;
                                    return "string" == typeof(t = e) ? (0, tG.sanitize)(t) : (0, tH.isError)(t) ? (0, tY.formatErrorMessage)((0, tz.computeStackTrace)(t)) : (0, tW.jsonStringify)((0, tG.sanitize)(t), void 0, 2)
                                }).join(" ");
                                if (t === L.ConsoleApiName.error) {
                                    let i = e.find(tH.isError),
                                        o = (0, tH.computeRawError)({
                                            originalError: i,
                                            handlingStack: r,
                                            startClocks: (0, I.clocksNow)(),
                                            source: tq.ErrorSource.CONSOLE,
                                            handling: "handled",
                                            nonErrorPrefix: "Provided",
                                            useFallbackStack: !1
                                        });
                                    return o.message = n, {
                                        api: t,
                                        message: n,
                                        handlingStack: r,
                                        error: o
                                    }
                                }
                                return {
                                    api: t,
                                    message: n,
                                    error: void 0,
                                    handlingStack: r
                                }
                            }(n, t, i))
                        })
                    }, () => {
                        L.globalConsole[t] = r
                    }
                }))), tJ[e]
            }), (0, P.mergeObservables)(...J)).subscribe(e => x.notify(e.error)), (es = [], (D = [tX, "intervention"]).includes(tX) && es.push((V = r, new P.Observable(e => {
                let {
                    stop: t
                } = (0, eQ.addEventListener)(V, document, "securitypolicyviolation", t => {
                    var r;
                    let n;
                    e.notify((r = t, n = `'${r.blockedURI}' blocked by '${r.effectiveDirective}' directive`, tZ({
                        type: r.effectiveDirective,
                        message: `${tX}: ${n}`,
                        originalError: r,
                        csp: {
                            disposition: r.disposition
                        },
                        stack: tQ(r.effectiveDirective, r.originalPolicy ? `${n} of the policy "${(0,B.safeTruncate)(r.originalPolicy,100,"...")}"` : "no policy", r.sourceFile, r.lineNumber, r.columnNumber)
                    })))
                });
                return t
            }))), (eu = D.filter(e => e !== tX)).length && es.push((F = eu, new P.Observable(e => {
                if (!window.ReportingObserver) return;
                let t = (0, eZ.monitor)((t, r) => t.forEach(t => e.notify(function(e) {
                        let {
                            type: t,
                            body: r
                        } = e;
                        return tZ({
                            type: r.id,
                            message: `${t}: ${r.message}`,
                            originalError: e,
                            stack: tQ(r.id, r.message, r.sourceFile, r.lineNumber, r.columnNumber)
                        })
                    }(t)))),
                    r = new window.ReportingObserver(t, {
                        types: F,
                        buffered: !0
                    });
                return r.observe(), () => {
                    r.disconnect()
                }
            }))), (0, P.mergeObservables)(...es)).subscribe(e => ea.notify(e)), ea.subscribe(t => e.notify(14, {
                error: t
            })), (K = e).subscribe(14, ({
                error: e
            }) => {
                var t;
                let r, n;
                K.notify(12, (r = {
                    date: (t = e).startClocks.timeStamp,
                    error: {
                        id: (0, B.generateUUID)(),
                        message: t.message,
                        source: t.source,
                        stack: t.stack,
                        handling_stack: t.handlingStack,
                        component_stack: t.componentStack,
                        type: t.type,
                        handling: t.handling,
                        causes: t.causes,
                        source_type: "browser",
                        fingerprint: t.fingerprint,
                        csp: t.csp
                    },
                    type: eB.ERROR,
                    context: t.context
                }, n = {
                    error: t.originalError,
                    handlingStack: t.handlingStack
                }, {
                    rawRumEvent: r,
                    startTime: t.startClocks.relative,
                    domainContext: n
                }))
            }), {
                addError: ({
                    error: e,
                    handlingStack: t,
                    componentStack: r,
                    startClocks: n,
                    context: i
                }) => {
                    let o = (0, tH.computeRawError)({
                        originalError: e,
                        handlingStack: t,
                        componentStack: r,
                        startClocks: n,
                        nonErrorPrefix: "Provided",
                        source: tq.ErrorSource.CUSTOM,
                        handling: "handled"
                    });
                    o.context = (0, tK.combine)(o.context, i), K.notify(14, {
                        error: o
                    })
                }
            });
            el = {
                clearTracingIfNeeded: eR,
                traceFetch: e => ek(r, e, n, eS, eh, t => {
                    var r;
                    if (e.input instanceof Request && !(null == (r = e.init) ? void 0 : r.headers)) e.input = new Request(e.input), Object.keys(t).forEach(r => {
                        e.input.headers.append(r, t[r])
                    });
                    else {
                        e.init = (0, k.shallowClone)(e.init);
                        let r = [];
                        e.init.headers instanceof Headers ? e.init.headers.forEach((e, t) => {
                            r.push([t, e])
                        }) : Array.isArray(e.init.headers) ? e.init.headers.forEach(e => {
                            r.push(e)
                        }) : e.init.headers && Object.keys(e.init.headers).forEach(t => {
                            r.push([t, e.init.headers[t]])
                        }), e.init.headers = r.concat((0, R.objectEntries)(t))
                    }
                }),
                traceXhr: (e, t) => ek(r, e, n, eS, eh, e => {
                    Object.keys(e).forEach(r => {
                        t.setRequestHeader(r, e[r])
                    })
                })
            }, j = e, q = r, H = el, (0, N.initXhrObservable)(q).subscribe(e => {
                if ((0, C.isAllowedRequestUrl)(e.url)) switch (e.state) {
                    case "start":
                        H.traceXhr(e, e.xhr), e.requestIndex = eU(), j.notify(7, {
                            requestIndex: e.requestIndex,
                            url: e.url
                        });
                        break;
                    case "complete":
                        H.clearTracingIfNeeded(e), j.notify(8, {
                            duration: e.duration,
                            method: e.method,
                            requestIndex: e.requestIndex,
                            spanId: e.spanId,
                            startClocks: e.startClocks,
                            status: e.status,
                            traceId: e.traceId,
                            traceSampled: e.traceSampled,
                            type: w.RequestType.XHR,
                            url: e.url,
                            xhr: e.xhr,
                            isAborted: e.isAborted,
                            handlingStack: e.handlingStack,
                            requestBody: e.requestBody,
                            responseBody: e.responseBody
                        })
                }
            }), W = e, z = r, Y = el, (0, A.initFetchObservable)({
                responseBodyAction: e => {
                    var t;
                    return (null == (t = eL(e.url, z)) ? void 0 : t.trackResponseErrors) ? 2 : 1
                }
            }).subscribe(e => {
                var t;
                if ((0, C.isAllowedRequestUrl)(e.url)) switch (e.state) {
                    case "start":
                        Y.traceFetch(e), e.requestIndex = eU(), W.notify(7, {
                            requestIndex: e.requestIndex,
                            url: e.url
                        });
                        break;
                    case "resolve":
                        Y.clearTracingIfNeeded(e), W.notify(8, {
                            duration: (0, I.elapsed)(e.startClocks.timeStamp, (0, I.timeStampNow)()),
                            method: e.method,
                            requestIndex: e.requestIndex,
                            responseType: e.responseType,
                            spanId: e.spanId,
                            startClocks: e.startClocks,
                            status: e.status,
                            traceId: e.traceId,
                            traceSampled: e.traceSampled,
                            type: w.RequestType.FETCH,
                            url: e.url,
                            response: e.response,
                            init: e.init,
                            input: e.input,
                            isAborted: e.isAborted,
                            handlingStack: e.handlingStack,
                            requestBody: null == (t = e.init) ? void 0 : t.body,
                            responseBody: e.responseBody
                        })
                }
            });
            let eJ = rH(e, eg, s),
                eX = (0, _.startInternalContext)(r.applicationId, n, ev, e_.actionContexts, eb);
            return {
                addAction: e_.addAction,
                startAction: e_.startAction,
                stopAction: e_.stopAction,
                addEvent: eT.addEvent,
                addError: eY,
                addTiming: eI,
                addFeatureFlagEvaluation: ey.addFeatureFlagEvaluation,
                startView: eA,
                setViewContext: eC,
                setViewContextProperty: eD,
                getViewContext: ex,
                setViewName: eN,
                viewHistory: ev,
                getInternalContext: eX.get,
                startDurationVital: eJ.startDurationVital,
                stopDurationVital: eJ.stopDurationVital,
                addDurationVital: eJ.addDurationVital,
                addOperationStepVital: eJ.addOperationStepVital,
                globalContext: eE,
                userContext: eS,
                accountContext: eh,
                longTaskContexts: ez,
                stop: () => ec.forEach(e => e())
            }
        }(H, W, e, es, t, n, s, d, D, z);
        return q.push(ed), d.unbuffer(), q.push(() => r.stop()), { ...ef,
            lifeCycle: H,
            session: es,
            stopSession: () => es.expire(),
            telemetry: ei,
            stop: () => {
                q.forEach(e => e())
            },
            hooks: W
        }
    }], 730306), e.s([], 393713)
}]);

//# sourceMappingURL=01eryni9fb-5a.js.map