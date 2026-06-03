(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 51777, (t, e, r) => {
    "use strict";
    e.exports = t => encodeURIComponent(t).replace(/[!'()*]/g, t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`)
}, 140355, (t, e, r) => {
    "use strict";
    var i = "%[a-f0-9]{2}",
        n = RegExp("(" + i + ")|([^%]+?)", "gi"),
        s = RegExp("(" + i + ")+", "gi");
    e.exports = function(t) {
        if ("string" != typeof t) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
        try {
            return t = t.replace(/\+/g, " "), decodeURIComponent(t)
        } catch (e) {
            return function(t) {
                for (var e = {
                        "%FE%FF": "��",
                        "%FF%FE": "��"
                    }, r = s.exec(t); r;) {
                    try {
                        e[r[0]] = decodeURIComponent(r[0])
                    } catch (t) {
                        var i = function(t) {
                            try {
                                return decodeURIComponent(t)
                            } catch (i) {
                                for (var e = t.match(n) || [], r = 1; r < e.length; r++) e = (t = (function t(e, r) {
                                    try {
                                        return [decodeURIComponent(e.join(""))]
                                    } catch (t) {}
                                    if (1 === e.length) return e;
                                    r = r || 1;
                                    var i = e.slice(0, r),
                                        n = e.slice(r);
                                    return Array.prototype.concat.call([], t(i), t(n))
                                })(e, r).join("")).match(n) || [];
                                return t
                            }
                        }(r[0]);
                        i !== r[0] && (e[r[0]] = i)
                    }
                    r = s.exec(t)
                }
                e["%C2"] = "�";
                for (var o = Object.keys(e), a = 0; a < o.length; a++) {
                    var h = o[a];
                    t = t.replace(RegExp(h, "g"), e[h])
                }
                return t
            }(t)
        }
    }
}, 774545, (t, e, r) => {
    "use strict";
    e.exports = (t, e) => {
        if ("string" != typeof t || "string" != typeof e) throw TypeError("Expected the arguments to be of type `string`");
        if ("" === e) return [t];
        let r = t.indexOf(e);
        return -1 === r ? [t] : [t.slice(0, r), t.slice(r + e.length)]
    }
}, 352048, (t, e, r) => {
    "use strict";
    e.exports = function(t, e) {
        for (var r = {}, i = Object.keys(t), n = Array.isArray(e), s = 0; s < i.length; s++) {
            var o = i[s],
                a = t[o];
            (n ? -1 !== e.indexOf(o) : e(o, a, t)) && (r[o] = a)
        }
        return r
    }
}, 476979, (t, e, r) => {
    "use strict";
    let i = t.r(51777),
        n = t.r(140355),
        s = t.r(774545),
        o = t.r(352048),
        a = Symbol("encodeFragmentIdentifier");

    function h(t) {
        if ("string" != typeof t || 1 !== t.length) throw TypeError("arrayFormatSeparator must be single character string")
    }

    function c(t, e) {
        return e.encode ? e.strict ? i(t) : encodeURIComponent(t) : t
    }

    function u(t, e) {
        return e.decode ? n(t) : t
    }

    function l(t) {
        let e = t.indexOf("#");
        return -1 !== e && (t = t.slice(0, e)), t
    }

    function f(t) {
        let e = (t = l(t)).indexOf("?");
        return -1 === e ? "" : t.slice(e + 1)
    }

    function d(t, e) {
        return e.parseNumbers && !Number.isNaN(Number(t)) && "string" == typeof t && "" !== t.trim() ? t = Number(t) : e.parseBooleans && null !== t && ("true" === t.toLowerCase() || "false" === t.toLowerCase()) && (t = "true" === t.toLowerCase()), t
    }

    function p(t, e) {
        h((e = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, e)).arrayFormatSeparator);
        let r = function(t) {
                let e;
                switch (t.arrayFormat) {
                    case "index":
                        return (t, r, i) => {
                            if (e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), !e) {
                                i[t] = r;
                                return
                            }
                            void 0 === i[t] && (i[t] = {}), i[t][e[1]] = r
                        };
                    case "bracket":
                        return (t, r, i) => {
                            if (e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), !e) {
                                i[t] = r;
                                return
                            }
                            if (void 0 === i[t]) {
                                i[t] = [r];
                                return
                            }
                            i[t] = [].concat(i[t], r)
                        };
                    case "colon-list-separator":
                        return (t, r, i) => {
                            if (e = /(:list)$/.exec(t), t = t.replace(/:list$/, ""), !e) {
                                i[t] = r;
                                return
                            }
                            if (void 0 === i[t]) {
                                i[t] = [r];
                                return
                            }
                            i[t] = [].concat(i[t], r)
                        };
                    case "comma":
                    case "separator":
                        return (e, r, i) => {
                            let n = "string" == typeof r && r.includes(t.arrayFormatSeparator),
                                s = "string" == typeof r && !n && u(r, t).includes(t.arrayFormatSeparator);
                            r = s ? u(r, t) : r;
                            let o = n || s ? r.split(t.arrayFormatSeparator).map(e => u(e, t)) : null === r ? r : u(r, t);
                            i[e] = o
                        };
                    case "bracket-separator":
                        return (e, r, i) => {
                            let n = /(\[\])$/.test(e);
                            if (e = e.replace(/\[\]$/, ""), !n) {
                                i[e] = r ? u(r, t) : r;
                                return
                            }
                            let s = null === r ? [] : r.split(t.arrayFormatSeparator).map(e => u(e, t));
                            if (void 0 === i[e]) {
                                i[e] = s;
                                return
                            }
                            i[e] = [].concat(i[e], s)
                        };
                    default:
                        return (t, e, r) => {
                            if (void 0 === r[t]) {
                                r[t] = e;
                                return
                            }
                            r[t] = [].concat(r[t], e)
                        }
                }
            }(e),
            i = Object.create(null);
        if ("string" != typeof t || !(t = t.trim().replace(/^[?#&]/, ""))) return i;
        for (let n of t.split("&")) {
            if ("" === n) continue;
            let [t, o] = s(e.decode ? n.replace(/\+/g, " ") : n, "=");
            o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(e.arrayFormat) ? o : u(o, e), r(u(t, e), o, i)
        }
        for (let t of Object.keys(i)) {
            let r = i[t];
            if ("object" == typeof r && null !== r)
                for (let t of Object.keys(r)) r[t] = d(r[t], e);
            else i[t] = d(r, e)
        }
        return !1 === e.sort ? i : (!0 === e.sort ? Object.keys(i).sort() : Object.keys(i).sort(e.sort)).reduce((t, e) => {
            let r = i[e];
            return r && "object" == typeof r && !Array.isArray(r) ? t[e] = function t(e) {
                return Array.isArray(e) ? e.sort() : "object" == typeof e ? t(Object.keys(e)).sort((t, e) => Number(t) - Number(e)).map(t => e[t]) : e
            }(r) : t[e] = r, t
        }, Object.create(null))
    }
    r.extract = f, r.parse = p, r.stringify = (t, e) => {
        if (!t) return "";
        h((e = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, e)).arrayFormatSeparator);
        let r = r => e.skipNull && null == t[r] || e.skipEmptyString && "" === t[r],
            i = function(t) {
                switch (t.arrayFormat) {
                    case "index":
                        return e => (r, i) => {
                            let n = r.length;
                            return void 0 === i || t.skipNull && null === i || t.skipEmptyString && "" === i ? r : null === i ? [...r, c(e, t) + "[" + n + "]"] : [...r, c(e, t) + "[" + c(n, t) + "]=" + c(i, t)]
                        };
                    case "bracket":
                        return e => (r, i) => void 0 === i || t.skipNull && null === i || t.skipEmptyString && "" === i ? r : null === i ? [...r, c(e, t) + "[]"] : [...r, c(e, t) + "[]=" + c(i, t)];
                    case "colon-list-separator":
                        return e => (r, i) => void 0 === i || t.skipNull && null === i || t.skipEmptyString && "" === i ? r : null === i ? [...r, c(e, t) + ":list="] : [...r, c(e, t) + ":list=" + c(i, t)];
                    case "comma":
                    case "separator":
                    case "bracket-separator":
                        {
                            let e = "bracket-separator" === t.arrayFormat ? "[]=" : "=";
                            return r => (i, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? i : (n = null === n ? "" : n, 0 === i.length) ? [
                                [c(r, t), e, c(n, t)].join("")
                            ] : [
                                [i, c(n, t)].join(t.arrayFormatSeparator)
                            ]
                        }
                    default:
                        return e => (r, i) => void 0 === i || t.skipNull && null === i || t.skipEmptyString && "" === i ? r : null === i ? [...r, c(e, t)] : [...r, c(e, t) + "=" + c(i, t)]
                }
            }(e),
            n = {};
        for (let e of Object.keys(t)) r(e) || (n[e] = t[e]);
        let s = Object.keys(n);
        return !1 !== e.sort && s.sort(e.sort), s.map(r => {
            let n = t[r];
            return void 0 === n ? "" : null === n ? c(r, e) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === e.arrayFormat ? c(r, e) + "[]" : n.reduce(i(r), []).join("&") : c(r, e) + "=" + c(n, e)
        }).filter(t => t.length > 0).join("&")
    }, r.parseUrl = (t, e) => {
        e = Object.assign({
            decode: !0
        }, e);
        let [r, i] = s(t, "#");
        return Object.assign({
            url: r.split("?")[0] || "",
            query: p(f(t), e)
        }, e && e.parseFragmentIdentifier && i ? {
            fragmentIdentifier: u(i, e)
        } : {})
    }, r.stringifyUrl = (t, e) => {
        var i;
        let n, s;
        e = Object.assign({
            encode: !0,
            strict: !0,
            [a]: !0
        }, e);
        let o = l(t.url).split("?")[0] || "",
            h = r.extract(t.url),
            u = Object.assign(r.parse(h, {
                sort: !1
            }), t.query),
            f = r.stringify(u, e);
        f && (f = `?${f}`);
        let d = (i = t.url, n = "", -1 !== (s = i.indexOf("#")) && (n = i.slice(s)), n);
        return t.fragmentIdentifier && (d = `#${e[a]?c(t.fragmentIdentifier,e):t.fragmentIdentifier}`), `${o}${f}${d}`
    }, r.pick = (t, e, i) => {
        i = Object.assign({
            parseFragmentIdentifier: !0,
            [a]: !1
        }, i);
        let {
            url: n,
            query: s,
            fragmentIdentifier: h
        } = r.parseUrl(t, i);
        return r.stringifyUrl({
            url: n,
            query: o(s, e),
            fragmentIdentifier: h
        }, i)
    }, r.exclude = (t, e, i) => {
        let n = Array.isArray(e) ? t => !e.includes(t) : (t, r) => !e(t, r);
        return r.pick(t, n, i)
    }
}, 177687, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.mul = Math.imul || function(t, e) {
        var r = 65535 & t,
            i = 65535 & e;
        return r * i + ((t >>> 16 & 65535) * i + r * (e >>> 16 & 65535) << 16 >>> 0) | 0
    }, r.add = function(t, e) {
        return t + e | 0
    }, r.sub = function(t, e) {
        return t - e | 0
    }, r.rotl = function(t, e) {
        return t << e | t >>> 32 - e
    }, r.rotr = function(t, e) {
        return t << 32 - e | t >>> e
    }, r.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, r.MAX_SAFE_INTEGER = 0x1fffffffffffff, r.isSafeInteger = function(t) {
        return r.isInteger(t) && t >= -r.MAX_SAFE_INTEGER && t <= r.MAX_SAFE_INTEGER
    }
}, 54892, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = t.r(177687);

    function n(t, e, r) {
        return void 0 === e && (e = new Uint8Array(2)), void 0 === r && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e
    }

    function s(t, e, r) {
        return void 0 === e && (e = new Uint8Array(2)), void 0 === r && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e
    }

    function o(t, e) {
        return void 0 === e && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
    }

    function a(t, e) {
        return void 0 === e && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
    }

    function h(t, e) {
        return void 0 === e && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]
    }

    function c(t, e) {
        return void 0 === e && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0
    }

    function u(t, e, r) {
        return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e
    }

    function l(t, e, r) {
        return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e
    }

    function f(t, e, r) {
        return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), u(t / 0x100000000 >>> 0, e, r), u(t >>> 0, e, r + 4), e
    }

    function d(t, e, r) {
        return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), l(t >>> 0, e, r), l(t / 0x100000000 >>> 0, e, r + 4), e
    }
    r.readInt16BE = function(t, e) {
        return void 0 === e && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16
    }, r.readUint16BE = function(t, e) {
        return void 0 === e && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0
    }, r.readInt16LE = function(t, e) {
        return void 0 === e && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16
    }, r.readUint16LE = function(t, e) {
        return void 0 === e && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0
    }, r.writeUint16BE = n, r.writeInt16BE = n, r.writeUint16LE = s, r.writeInt16LE = s, r.readInt32BE = o, r.readUint32BE = a, r.readInt32LE = h, r.readUint32LE = c, r.writeUint32BE = u, r.writeInt32BE = u, r.writeUint32LE = l, r.writeInt32LE = l, r.readInt64BE = function(t, e) {
        void 0 === e && (e = 0);
        var r = o(t, e),
            i = o(t, e + 4);
        return 0x100000000 * r + i - (i >> 31) * 0x100000000
    }, r.readUint64BE = function(t, e) {
        return void 0 === e && (e = 0), 0x100000000 * a(t, e) + a(t, e + 4)
    }, r.readInt64LE = function(t, e) {
        void 0 === e && (e = 0);
        var r = h(t, e);
        return 0x100000000 * h(t, e + 4) + r - (r >> 31) * 0x100000000
    }, r.readUint64LE = function(t, e) {
        void 0 === e && (e = 0);
        var r = c(t, e);
        return 0x100000000 * c(t, e + 4) + r
    }, r.writeUint64BE = f, r.writeInt64BE = f, r.writeUint64LE = d, r.writeInt64LE = d, r.readUintBE = function(t, e, r) {
        if (void 0 === r && (r = 0), t % 8 != 0) throw Error("readUintBE supports only bitLengths divisible by 8");
        if (t / 8 > e.length - r) throw Error("readUintBE: array is too short for the given bitLength");
        for (var i = 0, n = 1, s = t / 8 + r - 1; s >= r; s--) i += e[s] * n, n *= 256;
        return i
    }, r.readUintLE = function(t, e, r) {
        if (void 0 === r && (r = 0), t % 8 != 0) throw Error("readUintLE supports only bitLengths divisible by 8");
        if (t / 8 > e.length - r) throw Error("readUintLE: array is too short for the given bitLength");
        for (var i = 0, n = 1, s = r; s < r + t / 8; s++) i += e[s] * n, n *= 256;
        return i
    }, r.writeUintBE = function(t, e, r, n) {
        if (void 0 === r && (r = new Uint8Array(t / 8)), void 0 === n && (n = 0), t % 8 != 0) throw Error("writeUintBE supports only bitLengths divisible by 8");
        if (!i.isSafeInteger(e)) throw Error("writeUintBE value must be an integer");
        for (var s = 1, o = t / 8 + n - 1; o >= n; o--) r[o] = e / s & 255, s *= 256;
        return r
    }, r.writeUintLE = function(t, e, r, n) {
        if (void 0 === r && (r = new Uint8Array(t / 8)), void 0 === n && (n = 0), t % 8 != 0) throw Error("writeUintLE supports only bitLengths divisible by 8");
        if (!i.isSafeInteger(e)) throw Error("writeUintLE value must be an integer");
        for (var s = 1, o = n; o < n + t / 8; o++) r[o] = e / s & 255, s *= 256;
        return r
    }, r.readFloat32BE = function(t, e) {
        return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e)
    }, r.readFloat32LE = function(t, e) {
        return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e, !0)
    }, r.readFloat64BE = function(t, e) {
        return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e)
    }, r.readFloat64LE = function(t, e) {
        return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e, !0)
    }, r.writeFloat32BE = function(t, e, r) {
        return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(r, t), e
    }, r.writeFloat32LE = function(t, e, r) {
        return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(r, t, !0), e
    }, r.writeFloat64BE = function(t, e, r) {
        return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(r, t), e
    }, r.writeFloat64LE = function(t, e, r) {
        return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(r, t, !0), e
    }
}, 950961, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.wipe = function(t) {
        for (var e = 0; e < t.length; e++) t[e] = 0;
        return t
    }
}, 320768, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = t.r(54892),
        n = t.r(950961);

    function s(t, e, r, s, o) {
        if (void 0 === o && (o = 0), 32 !== t.length) throw Error("ChaCha: key size must be 32 bytes");
        if (s.length < r.length) throw Error("ChaCha: destination is shorter than source");
        if (0 === o) {
            if (8 !== e.length && 12 !== e.length) throw Error("ChaCha nonce must be 8 or 12 bytes");
            h = (a = new Uint8Array(16)).length - e.length, a.set(e, h)
        } else {
            if (16 !== e.length) throw Error("ChaCha nonce with counter must be 16 bytes");
            a = e, h = o
        }
        for (var a, h, c = new Uint8Array(64), u = 0; u < r.length; u += 64) {
            ! function(t, e, r) {
                for (var n = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], s = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], o = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], a = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], h = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], c = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], u = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], l = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], f = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], d = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], p = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], g = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], m = 0x61707865, y = 0x3320646e, v = 0x79622d32, b = 0x6b206574, w = n, _ = s, A = o, x = a, E = h, I = c, S = u, M = l, P = f, R = d, C = p, N = g, O = 0; O < 20; O += 2) P ^= m = m + w | 0, w ^= E = E + (P = P >>> 16 | P << 16) | 0, w = w >>> 20 | w << 12, R ^= y = y + _ | 0, _ ^= I = I + (R = R >>> 16 | R << 16) | 0, _ = _ >>> 20 | _ << 12, C ^= v = v + A | 0, A ^= S = S + (C = C >>> 16 | C << 16) | 0, A = A >>> 20 | A << 12, N ^= b = b + x | 0, x ^= M = M + (N = N >>> 16 | N << 16) | 0, x = x >>> 20 | x << 12, C ^= v = v + A | 0, A ^= S = S + (C = C >>> 24 | C << 8) | 0, A = A >>> 25 | A << 7, N ^= b = b + x | 0, x ^= M = M + (N = N >>> 24 | N << 8) | 0, x = x >>> 25 | x << 7, R ^= y = y + _ | 0, _ ^= I = I + (R = R >>> 24 | R << 8) | 0, _ = _ >>> 25 | _ << 7, P ^= m = m + w | 0, w ^= E = E + (P = P >>> 24 | P << 8) | 0, w = w >>> 25 | w << 7, N ^= m = m + _ | 0, _ ^= S = S + (N = N >>> 16 | N << 16) | 0, _ = _ >>> 20 | _ << 12, P ^= y = y + A | 0, A ^= M = M + (P = P >>> 16 | P << 16) | 0, A = A >>> 20 | A << 12, R ^= v = v + x | 0, x ^= E = E + (R = R >>> 16 | R << 16) | 0, x = x >>> 20 | x << 12, C ^= b = b + w | 0, w ^= I = I + (C = C >>> 16 | C << 16) | 0, w = w >>> 20 | w << 12, R ^= v = v + x | 0, x ^= E = E + (R = R >>> 24 | R << 8) | 0, x = x >>> 25 | x << 7, C ^= b = b + w | 0, w ^= I = I + (C = C >>> 24 | C << 8) | 0, w = w >>> 25 | w << 7, P ^= y = y + A | 0, A ^= M = M + (P = P >>> 24 | P << 8) | 0, A = A >>> 25 | A << 7, N ^= m = m + _ | 0, _ ^= S = S + (N = N >>> 24 | N << 8) | 0, _ = _ >>> 25 | _ << 7;
                i.writeUint32LE(m + 0x61707865 | 0, t, 0), i.writeUint32LE(y + 0x3320646e | 0, t, 4), i.writeUint32LE(v + 0x79622d32 | 0, t, 8), i.writeUint32LE(b + 0x6b206574 | 0, t, 12), i.writeUint32LE(w + n | 0, t, 16), i.writeUint32LE(_ + s | 0, t, 20), i.writeUint32LE(A + o | 0, t, 24), i.writeUint32LE(x + a | 0, t, 28), i.writeUint32LE(E + h | 0, t, 32), i.writeUint32LE(I + c | 0, t, 36), i.writeUint32LE(S + u | 0, t, 40), i.writeUint32LE(M + l | 0, t, 44), i.writeUint32LE(P + f | 0, t, 48), i.writeUint32LE(R + d | 0, t, 52), i.writeUint32LE(C + p | 0, t, 56), i.writeUint32LE(N + g | 0, t, 60)
            }(c, a, t);
            for (var l = u; l < u + 64 && l < r.length; l++) s[l] = r[l] ^ c[l - u];
            for (var f = a, d = 0, p = h, g = 1; p--;) g = g + (255 & f[d]) | 0, f[d] = 255 & g, g >>>= 8, d++;
            if (g > 0) throw Error("ChaCha: counter overflow")
        }
        return n.wipe(c), 0 === o && n.wipe(a), s
    }
    r.streamXOR = s, r.stream = function(t, e, r, i) {
        return void 0 === i && (i = 0), n.wipe(r), s(t, e, r, r, i)
    }
}, 675063, (t, e, r) => {
    "use strict";

    function i(t, e) {
        if (t.length !== e.length) return 0;
        for (var r = 0, i = 0; i < t.length; i++) r |= t[i] ^ e[i];
        return 1 & r - 1 >>> 8
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.select = function(t, e, r) {
        return ~(t - 1) & e | t - 1 & r
    }, r.lessOrEqual = function(t, e) {
        return (0 | t) - (0 | e) - 1 >>> 31 & 1
    }, r.compare = i, r.equal = function(t, e) {
        return 0 !== t.length && 0 !== e.length && 0 !== i(t, e)
    }
}, 429487, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = t.r(675063),
        n = t.r(950961);
    r.DIGEST_LENGTH = 16;
    var s = function() {
        function t(t) {
            this.digestLength = r.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
            var e = t[0] | t[1] << 8;
            this._r[0] = 8191 & e;
            var i = t[2] | t[3] << 8;
            this._r[1] = (e >>> 13 | i << 3) & 8191;
            var n = t[4] | t[5] << 8;
            this._r[2] = (i >>> 10 | n << 6) & 7939;
            var s = t[6] | t[7] << 8;
            this._r[3] = (n >>> 7 | s << 9) & 8191;
            var o = t[8] | t[9] << 8;
            this._r[4] = (s >>> 4 | o << 12) & 255, this._r[5] = o >>> 1 & 8190;
            var a = t[10] | t[11] << 8;
            this._r[6] = (o >>> 14 | a << 2) & 8191;
            var h = t[12] | t[13] << 8;
            this._r[7] = (a >>> 11 | h << 5) & 8065;
            var c = t[14] | t[15] << 8;
            this._r[8] = (h >>> 8 | c << 8) & 8191, this._r[9] = c >>> 5 & 127, this._pad[0] = t[16] | t[17] << 8, this._pad[1] = t[18] | t[19] << 8, this._pad[2] = t[20] | t[21] << 8, this._pad[3] = t[22] | t[23] << 8, this._pad[4] = t[24] | t[25] << 8, this._pad[5] = t[26] | t[27] << 8, this._pad[6] = t[28] | t[29] << 8, this._pad[7] = t[30] | t[31] << 8
        }
        return t.prototype._blocks = function(t, e, r) {
            for (var i = 2048 * !this._fin, n = this._h[0], s = this._h[1], o = this._h[2], a = this._h[3], h = this._h[4], c = this._h[5], u = this._h[6], l = this._h[7], f = this._h[8], d = this._h[9], p = this._r[0], g = this._r[1], m = this._r[2], y = this._r[3], v = this._r[4], b = this._r[5], w = this._r[6], _ = this._r[7], A = this._r[8], x = this._r[9]; r >= 16;) {
                var E, I = t[e + 0] | t[e + 1] << 8;
                n += 8191 & I;
                var S = t[e + 2] | t[e + 3] << 8;
                s += (I >>> 13 | S << 3) & 8191;
                var M = t[e + 4] | t[e + 5] << 8;
                o += (S >>> 10 | M << 6) & 8191;
                var P = t[e + 6] | t[e + 7] << 8;
                a += (M >>> 7 | P << 9) & 8191;
                var R = t[e + 8] | t[e + 9] << 8;
                h += (P >>> 4 | R << 12) & 8191, c += R >>> 1 & 8191;
                var C = t[e + 10] | t[e + 11] << 8;
                u += (R >>> 14 | C << 2) & 8191;
                var N = t[e + 12] | t[e + 13] << 8;
                l += (C >>> 11 | N << 5) & 8191;
                var O = t[e + 14] | t[e + 15] << 8;
                f += (N >>> 8 | O << 8) & 8191, d += O >>> 5 | i;
                var T = 0;
                T = (E = 0 + n * p + 5 * x * s + 5 * A * o + 5 * _ * a + 5 * w * h) >>> 13, E &= 8191, E += 5 * b * c, E += 5 * v * u, E += 5 * y * l, E += 5 * m * f, E += 5 * g * d, T += E >>> 13, E &= 8191;
                var k = T;
                k += n * g, k += s * p, k += 5 * x * o, k += 5 * A * a, k += 5 * _ * h, T = k >>> 13, k &= 8191, k += 5 * w * c, k += 5 * b * u, k += 5 * v * l, k += 5 * y * f, k += 5 * m * d, T += k >>> 13, k &= 8191;
                var D = T;
                D += n * m, D += s * g, D += o * p, D += 5 * x * a, D += 5 * A * h, T = D >>> 13, D &= 8191, D += 5 * _ * c, D += 5 * w * u, D += 5 * b * l, D += 5 * v * f, D += 5 * y * d, T += D >>> 13, D &= 8191;
                var q = T;
                q += n * y, q += s * m, q += o * g, q += a * p, q += 5 * x * h, T = q >>> 13, q &= 8191, q += 5 * A * c, q += 5 * _ * u, q += 5 * w * l, q += 5 * b * f, q += 5 * v * d, T += q >>> 13, q &= 8191;
                var L = T;
                L += n * v, L += s * y, L += o * m, L += a * g, L += h * p, T = L >>> 13, L &= 8191, L += 5 * x * c, L += 5 * A * u, L += 5 * _ * l, L += 5 * w * f, L += 5 * b * d, T += L >>> 13, L &= 8191;
                var U = T;
                U += n * b, U += s * v, U += o * y, U += a * m, U += h * g, T = U >>> 13, U &= 8191, U += c * p, U += 5 * x * u, U += 5 * A * l, U += 5 * _ * f, U += 5 * w * d, T += U >>> 13, U &= 8191;
                var B = T;
                B += n * w, B += s * b, B += o * v, B += a * y, B += h * m, T = B >>> 13, B &= 8191, B += c * g, B += u * p, B += 5 * x * l, B += 5 * A * f, B += 5 * _ * d, T += B >>> 13, B &= 8191;
                var j = T;
                j += n * _, j += s * w, j += o * b, j += a * v, j += h * y, T = j >>> 13, j &= 8191, j += c * m, j += u * g, j += l * p, j += 5 * x * f, j += 5 * A * d, T += j >>> 13, j &= 8191;
                var z = T;
                z += n * A, z += s * _, z += o * w, z += a * b, z += h * v, T = z >>> 13, z &= 8191, z += c * y, z += u * m, z += l * g, z += f * p, z += 5 * x * d, T += z >>> 13, z &= 8191;
                var F = T;
                F += n * x, F += s * A, F += o * _, F += a * w, F += h * b, T = F >>> 13, F &= 8191, F += c * v, F += u * y, F += l * m, F += f * g, F += d * p, T += F >>> 13, F &= 8191, E = 8191 & (T = (T = (T << 2) + T | 0) + E | 0), T >>>= 13, k += T, n = E, s = k, o = D, a = q, h = L, c = U, u = B, l = j, f = z, d = F, e += 16, r -= 16
            }
            this._h[0] = n, this._h[1] = s, this._h[2] = o, this._h[3] = a, this._h[4] = h, this._h[5] = c, this._h[6] = u, this._h[7] = l, this._h[8] = f, this._h[9] = d
        }, t.prototype.finish = function(t, e) {
            void 0 === e && (e = 0);
            var r, i, n, s, o = new Uint16Array(10);
            if (this._leftover) {
                for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++) this._buffer[s] = 0;
                this._fin = 1, this._blocks(this._buffer, 0, 16)
            }
            for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++) this._h[s] += r, r = this._h[s] >>> 13, this._h[s] &= 8191;
            for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += r, o[0] = this._h[0] + 5, r = o[0] >>> 13, o[0] &= 8191, s = 1; s < 10; s++) o[s] = this._h[s] + r, r = o[s] >>> 13, o[s] &= 8191;
            for (o[9] -= 8192, i = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= i;
            for (s = 0, i = ~i; s < 10; s++) this._h[s] = this._h[s] & i | o[s];
            for (s = 1, this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, n = this._h[0] + this._pad[0], this._h[0] = 65535 & n; s < 8; s++) n = (this._h[s] + this._pad[s] | 0) + (n >>> 16) | 0, this._h[s] = 65535 & n;
            return t[e + 0] = this._h[0] >>> 0, t[e + 1] = this._h[0] >>> 8, t[e + 2] = this._h[1] >>> 0, t[e + 3] = this._h[1] >>> 8, t[e + 4] = this._h[2] >>> 0, t[e + 5] = this._h[2] >>> 8, t[e + 6] = this._h[3] >>> 0, t[e + 7] = this._h[3] >>> 8, t[e + 8] = this._h[4] >>> 0, t[e + 9] = this._h[4] >>> 8, t[e + 10] = this._h[5] >>> 0, t[e + 11] = this._h[5] >>> 8, t[e + 12] = this._h[6] >>> 0, t[e + 13] = this._h[6] >>> 8, t[e + 14] = this._h[7] >>> 0, t[e + 15] = this._h[7] >>> 8, this._finished = !0, this
        }, t.prototype.update = function(t) {
            var e, r = 0,
                i = t.length;
            if (this._leftover) {
                (e = 16 - this._leftover) > i && (e = i);
                for (var n = 0; n < e; n++) this._buffer[this._leftover + n] = t[r + n];
                if (i -= e, r += e, this._leftover += e, this._leftover < 16) return this;
                this._blocks(this._buffer, 0, 16), this._leftover = 0
            }
            if (i >= 16 && (e = i - i % 16, this._blocks(t, r, e), r += e, i -= e), i) {
                for (var n = 0; n < i; n++) this._buffer[this._leftover + n] = t[r + n];
                this._leftover += i
            }
            return this
        }, t.prototype.digest = function() {
            if (this._finished) throw Error("Poly1305 was finished");
            var t = new Uint8Array(16);
            return this.finish(t), t
        }, t.prototype.clean = function() {
            return n.wipe(this._buffer), n.wipe(this._r), n.wipe(this._h), n.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
        }, t
    }();
    r.Poly1305 = s, r.oneTimeAuth = function(t, e) {
        var r = new s(t);
        r.update(e);
        var i = r.digest();
        return r.clean(), i
    }, r.equal = function(t, e) {
        return t.length === r.DIGEST_LENGTH && e.length === r.DIGEST_LENGTH && i.equal(t, e)
    }
}, 353623, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = t.r(320768),
        n = t.r(429487),
        s = t.r(950961),
        o = t.r(54892),
        a = t.r(675063);
    r.KEY_LENGTH = 32, r.NONCE_LENGTH = 12, r.TAG_LENGTH = 16;
    var h = new Uint8Array(16),
        c = function() {
            function t(t) {
                if (this.nonceLength = r.NONCE_LENGTH, this.tagLength = r.TAG_LENGTH, t.length !== r.KEY_LENGTH) throw Error("ChaCha20Poly1305 needs 32-byte key");
                this._key = new Uint8Array(t)
            }
            return t.prototype.seal = function(t, e, r, n) {
                if (t.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                var o, a = new Uint8Array(16);
                a.set(t, a.length - t.length);
                var h = new Uint8Array(32);
                i.stream(this._key, a, h, 4);
                var c = e.length + this.tagLength;
                if (n) {
                    if (n.length !== c) throw Error("ChaCha20Poly1305: incorrect destination length");
                    o = n
                } else o = new Uint8Array(c);
                return i.streamXOR(this._key, a, e, o, 4), this._authenticate(o.subarray(o.length - this.tagLength, o.length), h, o.subarray(0, o.length - this.tagLength), r), s.wipe(a), o
            }, t.prototype.open = function(t, e, r, n) {
                if (t.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                if (e.length < this.tagLength) return null;
                var o, h = new Uint8Array(16);
                h.set(t, h.length - t.length);
                var c = new Uint8Array(32);
                i.stream(this._key, h, c, 4);
                var u = new Uint8Array(this.tagLength);
                if (this._authenticate(u, c, e.subarray(0, e.length - this.tagLength), r), !a.equal(u, e.subarray(e.length - this.tagLength, e.length))) return null;
                var l = e.length - this.tagLength;
                if (n) {
                    if (n.length !== l) throw Error("ChaCha20Poly1305: incorrect destination length");
                    o = n
                } else o = new Uint8Array(l);
                return i.streamXOR(this._key, h, e.subarray(0, e.length - this.tagLength), o, 4), s.wipe(h), o
            }, t.prototype.clean = function() {
                return s.wipe(this._key), this
            }, t.prototype._authenticate = function(t, e, r, i) {
                var a = new n.Poly1305(e);
                i && (a.update(i), i.length % 16 > 0 && a.update(h.subarray(i.length % 16))), a.update(r), r.length % 16 > 0 && a.update(h.subarray(r.length % 16));
                var c = new Uint8Array(8);
                i && o.writeUint64LE(i.length, c), a.update(c), o.writeUint64LE(r.length, c), a.update(c);
                for (var u = a.digest(), l = 0; l < u.length; l++) t[l] = u[l];
                a.clean(), s.wipe(u), s.wipe(c)
            }, t
        }();
    r.ChaCha20Poly1305 = c
}, 319223, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.isSerializableHash = function(t) {
        return void 0 !== t.saveState && void 0 !== t.restoreState && void 0 !== t.cleanSavedState
    }
}, 238136, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = t.r(319223),
        n = t.r(675063),
        s = t.r(950961),
        o = function() {
            function t(t, e) {
                this._finished = !1, this._inner = new t, this._outer = new t, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
                var r = new Uint8Array(this.blockSize);
                e.length > this.blockSize ? this._inner.update(e).finish(r).clean() : r.set(e);
                for (var n = 0; n < r.length; n++) r[n] ^= 54;
                this._inner.update(r);
                for (var n = 0; n < r.length; n++) r[n] ^= 106;
                this._outer.update(r), i.isSerializableHash(this._inner) && i.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), s.wipe(r)
            }
            return t.prototype.reset = function() {
                if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't reset() because hash doesn't implement restoreState()");
                return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
            }, t.prototype.clean = function() {
                i.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), i.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
            }, t.prototype.update = function(t) {
                return this._inner.update(t), this
            }, t.prototype.finish = function(t) {
                return this._finished ? this._outer.finish(t) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0), this
            }, t.prototype.digest = function() {
                var t = new Uint8Array(this.digestLength);
                return this.finish(t), t
            }, t.prototype.saveState = function() {
                if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't saveState() because hash doesn't implement it");
                return this._inner.saveState()
            }, t.prototype.restoreState = function(t) {
                if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't restoreState() because hash doesn't implement it");
                return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
            }, t.prototype.cleanSavedState = function(t) {
                if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                this._inner.cleanSavedState(t)
            }, t
        }();
    r.HMAC = o, r.hmac = function(t, e, r) {
        var i = new o(t, e);
        i.update(r);
        var n = i.digest();
        return i.clean(), n
    }, r.equal = n.equal
}, 676096, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = t.r(238136),
        n = t.r(950961);
    r.HKDF = function() {
        function t(t, e, r, n) {
            void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = n;
            var s = i.hmac(this._hash, r, e);
            this._hmac = new i.HMAC(t, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
        }
        return t.prototype._fillBuffer = function() {
            this._counter[0]++;
            var t = this._counter[0];
            if (0 === t) throw Error("hkdf: cannot expand more");
            this._hmac.reset(), t > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
        }, t.prototype.expand = function(t) {
            for (var e = new Uint8Array(t), r = 0; r < e.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), e[r] = this._buffer[this._bufpos++];
            return e
        }, t.prototype.clean = function() {
            this._hmac.clean(), n.wipe(this._buffer), n.wipe(this._counter), this._bufpos = 0
        }, t
    }()
}, 591816, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.BrowserRandomSource = void 0, r.BrowserRandomSource = class {
        constructor() {
            this.isAvailable = !1, this.isInstantiated = !1;
            const t = "u" > typeof self ? self.crypto || self.msCrypto : null;
            t && void 0 !== t.getRandomValues && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0)
        }
        randomBytes(t) {
            if (!this.isAvailable || !this._crypto) throw Error("Browser random byte generator is not available.");
            let e = new Uint8Array(t);
            for (let t = 0; t < e.length; t += 65536) this._crypto.getRandomValues(e.subarray(t, t + Math.min(e.length - t, 65536)));
            return e
        }
    }
}, 311791, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.NodeRandomSource = void 0;
    let i = t.r(950961);
    r.NodeRandomSource = class {
        constructor() {
            this.isAvailable = !1, this.isInstantiated = !1; {
                const t = {};
                t && t.randomBytes && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0)
            }
        }
        randomBytes(t) {
            if (!this.isAvailable || !this._crypto) throw Error("Node.js random byte generator is not available.");
            let e = this._crypto.randomBytes(t);
            if (e.length !== t) throw Error("NodeRandomSource: got fewer bytes than requested");
            let r = new Uint8Array(t);
            for (let t = 0; t < r.length; t++) r[t] = e[t];
            return (0, i.wipe)(e), r
        }
    }
}, 242663, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.SystemRandomSource = void 0;
    let i = t.r(591816),
        n = t.r(311791);
    r.SystemRandomSource = class {
        constructor() {
            if (this.isAvailable = !1, this.name = "", this._source = new i.BrowserRandomSource, this._source.isAvailable) {
                this.isAvailable = !0, this.name = "Browser";
                return
            }
            if (this._source = new n.NodeRandomSource, this._source.isAvailable) {
                this.isAvailable = !0, this.name = "Node";
                return
            }
        }
        randomBytes(t) {
            if (!this.isAvailable) throw Error("System random byte generator is not available.");
            return this._source.randomBytes(t)
        }
    }
}, 638222, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.randomStringForEntropy = r.randomString = r.randomUint32 = r.randomBytes = r.defaultRandomSource = void 0;
    let i = t.r(242663),
        n = t.r(54892),
        s = t.r(950961);

    function o(t, e = r.defaultRandomSource) {
        return e.randomBytes(t)
    }
    r.defaultRandomSource = new i.SystemRandomSource, r.randomBytes = o, r.randomUint32 = function(t = r.defaultRandomSource) {
        let e = o(4, t),
            i = (0, n.readUint32LE)(e);
        return (0, s.wipe)(e), i
    };
    let a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    function h(t, e = a, i = r.defaultRandomSource) {
        if (e.length < 2) throw Error("randomString charset is too short");
        if (e.length > 256) throw Error("randomString charset is too long");
        let n = "",
            c = e.length,
            u = 256 - 256 % c;
        for (; t > 0;) {
            let r = o(Math.ceil(256 * t / u), i);
            for (let i = 0; i < r.length && t > 0; i++) {
                let s = r[i];
                s < u && (n += e.charAt(s % c), t--)
            }(0, s.wipe)(r)
        }
        return n
    }
    r.randomString = h, r.randomStringForEntropy = function(t, e = a, i = r.defaultRandomSource) {
        return h(Math.ceil(t / (Math.log(e.length) / Math.LN2)), e, i)
    }
}, 659203, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = t.r(54892),
        n = t.r(950961);
    r.DIGEST_LENGTH = 32, r.BLOCK_SIZE = 64;
    var s = function() {
        function t() {
            this.digestLength = r.DIGEST_LENGTH, this.blockSize = r.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return t.prototype._initState = function() {
            this._state[0] = 0x6a09e667, this._state[1] = 0xbb67ae85, this._state[2] = 0x3c6ef372, this._state[3] = 0xa54ff53a, this._state[4] = 0x510e527f, this._state[5] = 0x9b05688c, this._state[6] = 0x1f83d9ab, this._state[7] = 0x5be0cd19
        }, t.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, t.prototype.clean = function() {
            n.wipe(this._buffer), n.wipe(this._temp), this.reset()
        }, t.prototype.update = function(t, e) {
            if (void 0 === e && (e = t.length), this._finished) throw Error("SHA256: can't update because hash was finished.");
            var r = 0;
            if (this._bytesHashed += e, this._bufferLength > 0) {
                for (; this._bufferLength < this.blockSize && e > 0;) this._buffer[this._bufferLength++] = t[r++], e--;
                this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (e >= this.blockSize && (r = a(this._temp, this._state, t, r, e), e %= this.blockSize); e > 0;) this._buffer[this._bufferLength++] = t[r++], e--;
            return this
        }, t.prototype.finish = function(t) {
            if (!this._finished) {
                var e = this._bytesHashed,
                    r = this._bufferLength,
                    n = e % 64 < 56 ? 64 : 128;
                this._buffer[r] = 128;
                for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                i.writeUint32BE(e / 0x20000000 | 0, this._buffer, n - 8), i.writeUint32BE(e << 3, this._buffer, n - 4), a(this._temp, this._state, this._buffer, 0, n), this._finished = !0
            }
            for (var s = 0; s < this.digestLength / 4; s++) i.writeUint32BE(this._state[s], t, 4 * s);
            return this
        }, t.prototype.digest = function() {
            var t = new Uint8Array(this.digestLength);
            return this.finish(t), t
        }, t.prototype.saveState = function() {
            if (this._finished) throw Error("SHA256: cannot save finished state");
            return {
                state: new Int32Array(this._state),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, t.prototype.restoreState = function(t) {
            return this._state.set(t.state), this._bufferLength = t.bufferLength, t.buffer && this._buffer.set(t.buffer), this._bytesHashed = t.bytesHashed, this._finished = !1, this
        }, t.prototype.cleanSavedState = function(t) {
            n.wipe(t.state), t.buffer && n.wipe(t.buffer), t.bufferLength = 0, t.bytesHashed = 0
        }, t
    }();
    r.SHA256 = s;
    var o = new Int32Array([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]);

    function a(t, e, r, n, s) {
        for (; s >= 64;) {
            for (var a = e[0], h = e[1], c = e[2], u = e[3], l = e[4], f = e[5], d = e[6], p = e[7], g = 0; g < 16; g++) {
                var m = n + 4 * g;
                t[g] = i.readUint32BE(r, m)
            }
            for (var g = 16; g < 64; g++) {
                var y = t[g - 2],
                    v = (y >>> 17 | y << 15) ^ (y >>> 19 | y << 13) ^ y >>> 10,
                    b = ((y = t[g - 15]) >>> 7 | y << 25) ^ (y >>> 18 | y << 14) ^ y >>> 3;
                t[g] = (v + t[g - 7] | 0) + (b + t[g - 16] | 0)
            }
            for (var g = 0; g < 64; g++) {
                var v = (((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & f ^ ~l & d) | 0) + (p + (o[g] + t[g] | 0) | 0) | 0,
                    b = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & h ^ a & c ^ h & c) | 0;
                p = d, d = f, f = l, l = u + v | 0, u = c, c = h, h = a, a = v + b | 0
            }
            e[0] += a, e[1] += h, e[2] += c, e[3] += u, e[4] += l, e[5] += f, e[6] += d, e[7] += p, n += 64, s -= 64
        }
        return n
    }
    r.hash = function(t) {
        var e = new s;
        e.update(t);
        var r = e.digest();
        return e.clean(), r
    }
}, 825936, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.sharedKey = r.generateKeyPair = r.generateKeyPairFromSeed = r.scalarMultBase = r.scalarMult = r.SHARED_KEY_LENGTH = r.SECRET_KEY_LENGTH = r.PUBLIC_KEY_LENGTH = void 0;
    let i = t.r(638222),
        n = t.r(950961);

    function s(t) {
        let e = new Float64Array(16);
        if (t)
            for (let r = 0; r < t.length; r++) e[r] = t[r];
        return e
    }
    r.PUBLIC_KEY_LENGTH = 32, r.SECRET_KEY_LENGTH = 32, r.SHARED_KEY_LENGTH = 32;
    let o = new Uint8Array(32);
    o[0] = 9;
    let a = s([56129, 1]);

    function h(t) {
        let e = 1;
        for (let r = 0; r < 16; r++) {
            let i = t[r] + e + 65535;
            e = Math.floor(i / 65536), t[r] = i - 65536 * e
        }
        t[0] += e - 1 + 37 * (e - 1)
    }

    function c(t, e, r) {
        let i = ~(r - 1);
        for (let r = 0; r < 16; r++) {
            let n = i & (t[r] ^ e[r]);
            t[r] ^= n, e[r] ^= n
        }
    }

    function u(t, e, r) {
        for (let i = 0; i < 16; i++) t[i] = e[i] + r[i]
    }

    function l(t, e, r) {
        for (let i = 0; i < 16; i++) t[i] = e[i] - r[i]
    }

    function f(t, e, r) {
        let i, n, s = 0,
            o = 0,
            a = 0,
            h = 0,
            c = 0,
            u = 0,
            l = 0,
            f = 0,
            d = 0,
            p = 0,
            g = 0,
            m = 0,
            y = 0,
            v = 0,
            b = 0,
            w = 0,
            _ = 0,
            A = 0,
            x = 0,
            E = 0,
            I = 0,
            S = 0,
            M = 0,
            P = 0,
            R = 0,
            C = 0,
            N = 0,
            O = 0,
            T = 0,
            k = 0,
            D = 0,
            q = r[0],
            L = r[1],
            U = r[2],
            B = r[3],
            j = r[4],
            z = r[5],
            F = r[6],
            H = r[7],
            K = r[8],
            $ = r[9],
            V = r[10],
            G = r[11],
            J = r[12],
            Q = r[13],
            Y = r[14],
            W = r[15];
        s += (i = e[0]) * q, o += i * L, a += i * U, h += i * B, c += i * j, u += i * z, l += i * F, f += i * H, d += i * K, p += i * $, g += i * V, m += i * G, y += i * J, v += i * Q, b += i * Y, w += i * W, o += (i = e[1]) * q, a += i * L, h += i * U, c += i * B, u += i * j, l += i * z, f += i * F, d += i * H, p += i * K, g += i * $, m += i * V, y += i * G, v += i * J, b += i * Q, w += i * Y, _ += i * W, a += (i = e[2]) * q, h += i * L, c += i * U, u += i * B, l += i * j, f += i * z, d += i * F, p += i * H, g += i * K, m += i * $, y += i * V, v += i * G, b += i * J, w += i * Q, _ += i * Y, A += i * W, h += (i = e[3]) * q, c += i * L, u += i * U, l += i * B, f += i * j, d += i * z, p += i * F, g += i * H, m += i * K, y += i * $, v += i * V, b += i * G, w += i * J, _ += i * Q, A += i * Y, x += i * W, c += (i = e[4]) * q, u += i * L, l += i * U, f += i * B, d += i * j, p += i * z, g += i * F, m += i * H, y += i * K, v += i * $, b += i * V, w += i * G, _ += i * J, A += i * Q, x += i * Y, E += i * W, u += (i = e[5]) * q, l += i * L, f += i * U, d += i * B, p += i * j, g += i * z, m += i * F, y += i * H, v += i * K, b += i * $, w += i * V, _ += i * G, A += i * J, x += i * Q, E += i * Y, I += i * W, l += (i = e[6]) * q, f += i * L, d += i * U, p += i * B, g += i * j, m += i * z, y += i * F, v += i * H, b += i * K, w += i * $, _ += i * V, A += i * G, x += i * J, E += i * Q, I += i * Y, S += i * W, f += (i = e[7]) * q, d += i * L, p += i * U, g += i * B, m += i * j, y += i * z, v += i * F, b += i * H, w += i * K, _ += i * $, A += i * V, x += i * G, E += i * J, I += i * Q, S += i * Y, M += i * W, d += (i = e[8]) * q, p += i * L, g += i * U, m += i * B, y += i * j, v += i * z, b += i * F, w += i * H, _ += i * K, A += i * $, x += i * V, E += i * G, I += i * J, S += i * Q, M += i * Y, P += i * W, p += (i = e[9]) * q, g += i * L, m += i * U, y += i * B, v += i * j, b += i * z, w += i * F, _ += i * H, A += i * K, x += i * $, E += i * V, I += i * G, S += i * J, M += i * Q, P += i * Y, R += i * W, g += (i = e[10]) * q, m += i * L, y += i * U, v += i * B, b += i * j, w += i * z, _ += i * F, A += i * H, x += i * K, E += i * $, I += i * V, S += i * G, M += i * J, P += i * Q, R += i * Y, C += i * W, m += (i = e[11]) * q, y += i * L, v += i * U, b += i * B, w += i * j, _ += i * z, A += i * F, x += i * H, E += i * K, I += i * $, S += i * V, M += i * G, P += i * J, R += i * Q, C += i * Y, N += i * W, y += (i = e[12]) * q, v += i * L, b += i * U, w += i * B, _ += i * j, A += i * z, x += i * F, E += i * H, I += i * K, S += i * $, M += i * V, P += i * G, R += i * J, C += i * Q, N += i * Y, O += i * W, v += (i = e[13]) * q, b += i * L, w += i * U, _ += i * B, A += i * j, x += i * z, E += i * F, I += i * H, S += i * K, M += i * $, P += i * V, R += i * G, C += i * J, N += i * Q, O += i * Y, T += i * W, b += (i = e[14]) * q, w += i * L, _ += i * U, A += i * B, x += i * j, E += i * z, I += i * F, S += i * H, M += i * K, P += i * $, R += i * V, C += i * G, N += i * J, O += i * Q, T += i * Y, k += i * W, w += (i = e[15]) * q, _ += i * L, A += i * U, x += i * B, E += i * j, I += i * z, S += i * F, M += i * H, P += i * K, R += i * $, C += i * V, N += i * G, O += i * J, T += i * Q, k += i * Y, D += i * W, s += 38 * _, o += 38 * A, a += 38 * x, h += 38 * E, c += 38 * I, u += 38 * S, l += 38 * M, f += 38 * P, d += 38 * R, p += 38 * C, g += 38 * N, m += 38 * O, y += 38 * T, v += 38 * k, b += 38 * D, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), t[0] = s, t[1] = o, t[2] = a, t[3] = h, t[4] = c, t[5] = u, t[6] = l, t[7] = f, t[8] = d, t[9] = p, t[10] = g, t[11] = m, t[12] = y, t[13] = v, t[14] = b, t[15] = w
    }

    function d(t, e) {
        let r = new Uint8Array(32),
            i = new Float64Array(80),
            n = s(),
            o = s(),
            d = s(),
            p = s(),
            g = s(),
            m = s();
        for (let e = 0; e < 31; e++) r[e] = t[e];
        r[31] = 127 & t[31] | 64, r[0] &= 248;
        for (let t = 0; t < 16; t++) i[t] = e[2 * t] + (e[2 * t + 1] << 8);
        i[15] &= 32767;
        for (let t = 0; t < 16; t++) o[t] = i[t];
        n[0] = p[0] = 1;
        for (let t = 254; t >= 0; --t) {
            let e = r[t >>> 3] >>> (7 & t) & 1;
            c(n, o, e), c(d, p, e), u(g, n, d), l(n, n, d), u(d, o, p), l(o, o, p), f(p, g, g), f(m, n, n), f(n, d, n), f(d, o, g), u(g, n, d), l(n, n, d), f(o, n, n), l(d, p, m), f(n, d, a), u(n, n, p), f(d, d, n), f(n, p, m), f(p, o, i), f(o, g, g), c(n, o, e), c(d, p, e)
        }
        for (let t = 0; t < 16; t++) i[t + 16] = n[t], i[t + 32] = d[t], i[t + 48] = o[t], i[t + 64] = p[t];
        let y = i.subarray(32),
            v = i.subarray(16);
        ! function(t, e) {
            let r = s();
            for (let t = 0; t < 16; t++) r[t] = e[t];
            for (let t = 253; t >= 0; t--) f(r, r, r), 2 !== t && 4 !== t && f(r, r, e);
            for (let e = 0; e < 16; e++) t[e] = r[e]
        }(y, y), f(v, v, y);
        let b = new Uint8Array(32);
        return ! function(t, e) {
            let r = s(),
                i = s();
            for (let t = 0; t < 16; t++) i[t] = e[t];
            h(i), h(i), h(i);
            for (let t = 0; t < 2; t++) {
                r[0] = i[0] - 65517;
                for (let t = 1; t < 15; t++) r[t] = i[t] - 65535 - (r[t - 1] >> 16 & 1), r[t - 1] &= 65535;
                r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                let t = r[15] >> 16 & 1;
                r[14] &= 65535, c(i, r, 1 - t)
            }
            for (let e = 0; e < 16; e++) t[2 * e] = 255 & i[e], t[2 * e + 1] = i[e] >> 8
        }(b, v), b
    }

    function p(t) {
        return d(t, o)
    }

    function g(t) {
        if (t.length !== r.SECRET_KEY_LENGTH) throw Error(`x25519: seed must be ${r.SECRET_KEY_LENGTH} bytes`);
        let e = new Uint8Array(t);
        return {
            publicKey: p(e),
            secretKey: e
        }
    }
    r.scalarMult = d, r.scalarMultBase = p, r.generateKeyPairFromSeed = g, r.generateKeyPair = function(t) {
        let e = (0, i.randomBytes)(32, t),
            r = g(e);
        return (0, n.wipe)(e), r
    }, r.sharedKey = function(t, e, i = !1) {
        if (t.length !== r.PUBLIC_KEY_LENGTH) throw Error("X25519: incorrect secret key length");
        if (e.length !== r.PUBLIC_KEY_LENGTH) throw Error("X25519: incorrect public key length");
        let n = d(t, e);
        if (i) {
            let t = 0;
            for (let e = 0; e < n.length; e++) t |= n[e];
            if (0 === t) throw Error("X25519: invalid shared key")
        }
        return n
    }
}, 422242, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = t.r(54892),
        n = t.r(950961);
    r.DIGEST_LENGTH = 64, r.BLOCK_SIZE = 128;
    var s = function() {
        function t() {
            this.digestLength = r.DIGEST_LENGTH, this.blockSize = r.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return t.prototype._initState = function() {
            this._stateHi[0] = 0x6a09e667, this._stateHi[1] = 0xbb67ae85, this._stateHi[2] = 0x3c6ef372, this._stateHi[3] = 0xa54ff53a, this._stateHi[4] = 0x510e527f, this._stateHi[5] = 0x9b05688c, this._stateHi[6] = 0x1f83d9ab, this._stateHi[7] = 0x5be0cd19, this._stateLo[0] = 0xf3bcc908, this._stateLo[1] = 0x84caa73b, this._stateLo[2] = 0xfe94f82b, this._stateLo[3] = 0x5f1d36f1, this._stateLo[4] = 0xade682d1, this._stateLo[5] = 0x2b3e6c1f, this._stateLo[6] = 0xfb41bd6b, this._stateLo[7] = 0x137e2179
        }, t.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, t.prototype.clean = function() {
            n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
        }, t.prototype.update = function(t, e) {
            if (void 0 === e && (e = t.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
            var i = 0;
            if (this._bytesHashed += e, this._bufferLength > 0) {
                for (; this._bufferLength < r.BLOCK_SIZE && e > 0;) this._buffer[this._bufferLength++] = t[i++], e--;
                this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (e >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, t, i, e), e %= this.blockSize); e > 0;) this._buffer[this._bufferLength++] = t[i++], e--;
            return this
        }, t.prototype.finish = function(t) {
            if (!this._finished) {
                var e = this._bytesHashed,
                    r = this._bufferLength,
                    n = e % 128 < 112 ? 128 : 256;
                this._buffer[r] = 128;
                for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                i.writeUint32BE(e / 0x20000000 | 0, this._buffer, n - 8), i.writeUint32BE(e << 3, this._buffer, n - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n), this._finished = !0
            }
            for (var s = 0; s < this.digestLength / 8; s++) i.writeUint32BE(this._stateHi[s], t, 8 * s), i.writeUint32BE(this._stateLo[s], t, 8 * s + 4);
            return this
        }, t.prototype.digest = function() {
            var t = new Uint8Array(this.digestLength);
            return this.finish(t), t
        }, t.prototype.saveState = function() {
            if (this._finished) throw Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, t.prototype.restoreState = function(t) {
            return this._stateHi.set(t.stateHi), this._stateLo.set(t.stateLo), this._bufferLength = t.bufferLength, t.buffer && this._buffer.set(t.buffer), this._bytesHashed = t.bytesHashed, this._finished = !1, this
        }, t.prototype.cleanSavedState = function(t) {
            n.wipe(t.stateHi), n.wipe(t.stateLo), t.buffer && n.wipe(t.buffer), t.bufferLength = 0, t.bytesHashed = 0
        }, t
    }();
    r.SHA512 = s;
    var o = new Int32Array([0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f, 0x14292967, 0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817]);

    function a(t, e, r, n, s, a, h) {
        for (var c, u, l, f, d, p, g, m, y = r[0], v = r[1], b = r[2], w = r[3], _ = r[4], A = r[5], x = r[6], E = r[7], I = n[0], S = n[1], M = n[2], P = n[3], R = n[4], C = n[5], N = n[6], O = n[7]; h >= 128;) {
            for (var T = 0; T < 16; T++) {
                var k = 8 * T + a;
                t[T] = i.readUint32BE(s, k), e[T] = i.readUint32BE(s, k + 4)
            }
            for (var T = 0; T < 80; T++) {
                var D = y,
                    q = v,
                    L = b,
                    U = w,
                    B = _,
                    j = A,
                    z = x,
                    F = E,
                    H = I,
                    K = S,
                    $ = M,
                    V = P,
                    G = R,
                    J = C,
                    Q = N,
                    Y = O;
                if (c = E, d = 65535 & (u = O), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = (_ >>> 14 | R << 18) ^ (_ >>> 18 | R << 14) ^ (R >>> 9 | _ << 23), d += 65535 & (u = (R >>> 14 | _ << 18) ^ (R >>> 18 | _ << 14) ^ (_ >>> 9 | R << 23)), p += u >>> 16, g += 65535 & c, m += c >>> 16, c = _ & A ^ ~_ & x, d += 65535 & (u = R & C ^ ~R & N), p += u >>> 16, g += 65535 & c, m += c >>> 16, c = o[2 * T], d += 65535 & (u = o[2 * T + 1]), p += u >>> 16, g += 65535 & c, m += c >>> 16, c = t[T % 16], d += 65535 & (u = e[T % 16]), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, l = 65535 & g | m << 16, f = 65535 & d | p << 16, c = l, d = 65535 & (u = f), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = (y >>> 28 | I << 4) ^ (I >>> 2 | y << 30) ^ (I >>> 7 | y << 25), d += 65535 & (u = (I >>> 28 | y << 4) ^ (y >>> 2 | I << 30) ^ (y >>> 7 | I << 25)), p += u >>> 16, g += 65535 & c, m += c >>> 16, c = y & v ^ y & b ^ v & b, d += 65535 & (u = I & S ^ I & M ^ S & M), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, F = 65535 & g | m << 16, Y = 65535 & d | p << 16, c = U, d = 65535 & (u = V), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = l, d += 65535 & (u = f), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, U = 65535 & g | m << 16, V = 65535 & d | p << 16, v = D, b = q, w = L, _ = U, A = B, x = j, E = z, y = F, S = H, M = K, P = $, R = V, C = G, N = J, O = Q, I = Y, T % 16 == 15)
                    for (var k = 0; k < 16; k++) c = t[k], d = 65535 & (u = e[k]), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = t[(k + 9) % 16], d += 65535 & (u = e[(k + 9) % 16]), p += u >>> 16, g += 65535 & c, m += c >>> 16, c = ((l = t[(k + 1) % 16]) >>> 1 | (f = e[(k + 1) % 16]) << 31) ^ (l >>> 8 | f << 24) ^ l >>> 7, d += 65535 & (u = (f >>> 1 | l << 31) ^ (f >>> 8 | l << 24) ^ (f >>> 7 | l << 25)), p += u >>> 16, g += 65535 & c, m += c >>> 16, c = ((l = t[(k + 14) % 16]) >>> 19 | (f = e[(k + 14) % 16]) << 13) ^ (f >>> 29 | l << 3) ^ l >>> 6, d += 65535 & (u = (f >>> 19 | l << 13) ^ (l >>> 29 | f << 3) ^ (f >>> 6 | l << 26)), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, t[k] = 65535 & g | m << 16, e[k] = 65535 & d | p << 16
            }
            c = y, d = 65535 & (u = I), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = r[0], d += 65535 & (u = n[0]), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, r[0] = y = 65535 & g | m << 16, n[0] = I = 65535 & d | p << 16, c = v, d = 65535 & (u = S), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = r[1], d += 65535 & (u = n[1]), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, r[1] = v = 65535 & g | m << 16, n[1] = S = 65535 & d | p << 16, c = b, d = 65535 & (u = M), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = r[2], d += 65535 & (u = n[2]), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, r[2] = b = 65535 & g | m << 16, n[2] = M = 65535 & d | p << 16, c = w, d = 65535 & (u = P), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = r[3], d += 65535 & (u = n[3]), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, r[3] = w = 65535 & g | m << 16, n[3] = P = 65535 & d | p << 16, c = _, d = 65535 & (u = R), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = r[4], d += 65535 & (u = n[4]), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, r[4] = _ = 65535 & g | m << 16, n[4] = R = 65535 & d | p << 16, c = A, d = 65535 & (u = C), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = r[5], d += 65535 & (u = n[5]), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, r[5] = A = 65535 & g | m << 16, n[5] = C = 65535 & d | p << 16, c = x, d = 65535 & (u = N), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = r[6], d += 65535 & (u = n[6]), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, r[6] = x = 65535 & g | m << 16, n[6] = N = 65535 & d | p << 16, c = E, d = 65535 & (u = O), p = u >>> 16, g = 65535 & c, m = c >>> 16, c = r[7], d += 65535 & (u = n[7]), p += u >>> 16, g += 65535 & c, m += c >>> 16, p += d >>> 16, g += p >>> 16, m += g >>> 16, r[7] = E = 65535 & g | m << 16, n[7] = O = 65535 & d | p << 16, a += 128, h -= 128
        }
        return a
    }
    r.hash = function(t) {
        var e = new s;
        e.update(t);
        var r = e.digest();
        return e.clean(), r
    }
}, 15309, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.convertSecretKeyToX25519 = r.convertPublicKeyToX25519 = r.verify = r.sign = r.extractPublicKeyFromSecretKey = r.generateKeyPair = r.generateKeyPairFromSeed = r.SEED_LENGTH = r.SECRET_KEY_LENGTH = r.PUBLIC_KEY_LENGTH = r.SIGNATURE_LENGTH = void 0;
    let i = t.r(638222),
        n = t.r(422242),
        s = t.r(950961);

    function o(t) {
        let e = new Float64Array(16);
        if (t)
            for (let r = 0; r < t.length; r++) e[r] = t[r];
        return e
    }
    r.SIGNATURE_LENGTH = 64, r.PUBLIC_KEY_LENGTH = 32, r.SECRET_KEY_LENGTH = 64, r.SEED_LENGTH = 32, new Uint8Array(32)[0] = 9;
    let a = o(),
        h = o([1]),
        c = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
        u = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
        l = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
        f = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
        d = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

    function p(t, e) {
        for (let r = 0; r < 16; r++) t[r] = 0 | e[r]
    }

    function g(t) {
        let e = 1;
        for (let r = 0; r < 16; r++) {
            let i = t[r] + e + 65535;
            e = Math.floor(i / 65536), t[r] = i - 65536 * e
        }
        t[0] += e - 1 + 37 * (e - 1)
    }

    function m(t, e, r) {
        let i = ~(r - 1);
        for (let r = 0; r < 16; r++) {
            let n = i & (t[r] ^ e[r]);
            t[r] ^= n, e[r] ^= n
        }
    }

    function y(t, e) {
        let r = o(),
            i = o();
        for (let t = 0; t < 16; t++) i[t] = e[t];
        g(i), g(i), g(i);
        for (let t = 0; t < 2; t++) {
            r[0] = i[0] - 65517;
            for (let t = 1; t < 15; t++) r[t] = i[t] - 65535 - (r[t - 1] >> 16 & 1), r[t - 1] &= 65535;
            r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
            let t = r[15] >> 16 & 1;
            r[14] &= 65535, m(i, r, 1 - t)
        }
        for (let e = 0; e < 16; e++) t[2 * e] = 255 & i[e], t[2 * e + 1] = i[e] >> 8
    }

    function v(t, e) {
        let r = 0;
        for (let i = 0; i < 32; i++) r |= t[i] ^ e[i];
        return (1 & r - 1 >>> 8) - 1
    }

    function b(t, e) {
        let r = new Uint8Array(32),
            i = new Uint8Array(32);
        return y(r, t), y(i, e), v(r, i)
    }

    function w(t) {
        let e = new Uint8Array(32);
        return y(e, t), 1 & e[0]
    }

    function _(t, e, r) {
        for (let i = 0; i < 16; i++) t[i] = e[i] + r[i]
    }

    function A(t, e, r) {
        for (let i = 0; i < 16; i++) t[i] = e[i] - r[i]
    }

    function x(t, e, r) {
        let i, n, s = 0,
            o = 0,
            a = 0,
            h = 0,
            c = 0,
            u = 0,
            l = 0,
            f = 0,
            d = 0,
            p = 0,
            g = 0,
            m = 0,
            y = 0,
            v = 0,
            b = 0,
            w = 0,
            _ = 0,
            A = 0,
            x = 0,
            E = 0,
            I = 0,
            S = 0,
            M = 0,
            P = 0,
            R = 0,
            C = 0,
            N = 0,
            O = 0,
            T = 0,
            k = 0,
            D = 0,
            q = r[0],
            L = r[1],
            U = r[2],
            B = r[3],
            j = r[4],
            z = r[5],
            F = r[6],
            H = r[7],
            K = r[8],
            $ = r[9],
            V = r[10],
            G = r[11],
            J = r[12],
            Q = r[13],
            Y = r[14],
            W = r[15];
        s += (i = e[0]) * q, o += i * L, a += i * U, h += i * B, c += i * j, u += i * z, l += i * F, f += i * H, d += i * K, p += i * $, g += i * V, m += i * G, y += i * J, v += i * Q, b += i * Y, w += i * W, o += (i = e[1]) * q, a += i * L, h += i * U, c += i * B, u += i * j, l += i * z, f += i * F, d += i * H, p += i * K, g += i * $, m += i * V, y += i * G, v += i * J, b += i * Q, w += i * Y, _ += i * W, a += (i = e[2]) * q, h += i * L, c += i * U, u += i * B, l += i * j, f += i * z, d += i * F, p += i * H, g += i * K, m += i * $, y += i * V, v += i * G, b += i * J, w += i * Q, _ += i * Y, A += i * W, h += (i = e[3]) * q, c += i * L, u += i * U, l += i * B, f += i * j, d += i * z, p += i * F, g += i * H, m += i * K, y += i * $, v += i * V, b += i * G, w += i * J, _ += i * Q, A += i * Y, x += i * W, c += (i = e[4]) * q, u += i * L, l += i * U, f += i * B, d += i * j, p += i * z, g += i * F, m += i * H, y += i * K, v += i * $, b += i * V, w += i * G, _ += i * J, A += i * Q, x += i * Y, E += i * W, u += (i = e[5]) * q, l += i * L, f += i * U, d += i * B, p += i * j, g += i * z, m += i * F, y += i * H, v += i * K, b += i * $, w += i * V, _ += i * G, A += i * J, x += i * Q, E += i * Y, I += i * W, l += (i = e[6]) * q, f += i * L, d += i * U, p += i * B, g += i * j, m += i * z, y += i * F, v += i * H, b += i * K, w += i * $, _ += i * V, A += i * G, x += i * J, E += i * Q, I += i * Y, S += i * W, f += (i = e[7]) * q, d += i * L, p += i * U, g += i * B, m += i * j, y += i * z, v += i * F, b += i * H, w += i * K, _ += i * $, A += i * V, x += i * G, E += i * J, I += i * Q, S += i * Y, M += i * W, d += (i = e[8]) * q, p += i * L, g += i * U, m += i * B, y += i * j, v += i * z, b += i * F, w += i * H, _ += i * K, A += i * $, x += i * V, E += i * G, I += i * J, S += i * Q, M += i * Y, P += i * W, p += (i = e[9]) * q, g += i * L, m += i * U, y += i * B, v += i * j, b += i * z, w += i * F, _ += i * H, A += i * K, x += i * $, E += i * V, I += i * G, S += i * J, M += i * Q, P += i * Y, R += i * W, g += (i = e[10]) * q, m += i * L, y += i * U, v += i * B, b += i * j, w += i * z, _ += i * F, A += i * H, x += i * K, E += i * $, I += i * V, S += i * G, M += i * J, P += i * Q, R += i * Y, C += i * W, m += (i = e[11]) * q, y += i * L, v += i * U, b += i * B, w += i * j, _ += i * z, A += i * F, x += i * H, E += i * K, I += i * $, S += i * V, M += i * G, P += i * J, R += i * Q, C += i * Y, N += i * W, y += (i = e[12]) * q, v += i * L, b += i * U, w += i * B, _ += i * j, A += i * z, x += i * F, E += i * H, I += i * K, S += i * $, M += i * V, P += i * G, R += i * J, C += i * Q, N += i * Y, O += i * W, v += (i = e[13]) * q, b += i * L, w += i * U, _ += i * B, A += i * j, x += i * z, E += i * F, I += i * H, S += i * K, M += i * $, P += i * V, R += i * G, C += i * J, N += i * Q, O += i * Y, T += i * W, b += (i = e[14]) * q, w += i * L, _ += i * U, A += i * B, x += i * j, E += i * z, I += i * F, S += i * H, M += i * K, P += i * $, R += i * V, C += i * G, N += i * J, O += i * Q, T += i * Y, k += i * W, w += (i = e[15]) * q, _ += i * L, A += i * U, x += i * B, E += i * j, I += i * z, S += i * F, M += i * H, P += i * K, R += i * $, C += i * V, N += i * G, O += i * J, T += i * Q, k += i * Y, D += i * W, s += 38 * _, o += 38 * A, a += 38 * x, h += 38 * E, c += 38 * I, u += 38 * S, l += 38 * M, f += 38 * P, d += 38 * R, p += 38 * C, g += 38 * N, m += 38 * O, y += 38 * T, v += 38 * k, b += 38 * D, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), t[0] = s, t[1] = o, t[2] = a, t[3] = h, t[4] = c, t[5] = u, t[6] = l, t[7] = f, t[8] = d, t[9] = p, t[10] = g, t[11] = m, t[12] = y, t[13] = v, t[14] = b, t[15] = w
    }

    function E(t, e) {
        let r, i = o();
        for (r = 0; r < 16; r++) i[r] = e[r];
        for (r = 253; r >= 0; r--) x(i, i, i), 2 !== r && 4 !== r && x(i, i, e);
        for (r = 0; r < 16; r++) t[r] = i[r]
    }

    function I(t, e) {
        let r = o(),
            i = o(),
            n = o(),
            s = o(),
            a = o(),
            h = o(),
            c = o(),
            l = o(),
            f = o();
        A(r, t[1], t[0]), A(f, e[1], e[0]), x(r, r, f), _(i, t[0], t[1]), _(f, e[0], e[1]), x(i, i, f), x(n, t[3], e[3]), x(n, n, u), x(s, t[2], e[2]), _(s, s, s), A(a, i, r), A(h, s, n), _(c, s, n), _(l, i, r), x(t[0], a, h), x(t[1], l, c), x(t[2], c, h), x(t[3], a, l)
    }

    function S(t, e, r) {
        for (let i = 0; i < 4; i++) m(t[i], e[i], r)
    }

    function M(t, e) {
        let r = o(),
            i = o(),
            n = o();
        E(n, e[2]), x(r, e[0], n), x(i, e[1], n), y(t, i), t[31] ^= w(r) << 7
    }

    function P(t, e, r) {
        p(t[0], a), p(t[1], h), p(t[2], h), p(t[3], a);
        for (let i = 255; i >= 0; --i) {
            let n = r[i / 8 | 0] >> (7 & i) & 1;
            S(t, e, n), I(e, t), I(t, t), S(t, e, n)
        }
    }

    function R(t, e) {
        let r = [o(), o(), o(), o()];
        p(r[0], l), p(r[1], f), p(r[2], h), x(r[3], l, f), P(t, r, e)
    }

    function C(t) {
        if (t.length !== r.SEED_LENGTH) throw Error(`ed25519: seed must be ${r.SEED_LENGTH} bytes`);
        let e = (0, n.hash)(t);
        e[0] &= 248, e[31] &= 127, e[31] |= 64;
        let i = new Uint8Array(32),
            s = [o(), o(), o(), o()];
        R(s, e), M(i, s);
        let a = new Uint8Array(64);
        return a.set(t), a.set(i, 32), {
            publicKey: i,
            secretKey: a
        }
    }
    r.generateKeyPairFromSeed = C, r.generateKeyPair = function(t) {
        let e = (0, i.randomBytes)(32, t),
            r = C(e);
        return (0, s.wipe)(e), r
    }, r.extractPublicKeyFromSecretKey = function(t) {
        if (t.length !== r.SECRET_KEY_LENGTH) throw Error(`ed25519: secret key must be ${r.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array(t.subarray(32))
    };
    let N = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

    function O(t, e) {
        let r, i, n, s;
        for (i = 63; i >= 32; --i) {
            for (r = 0, n = i - 32, s = i - 12; n < s; ++n) e[n] += r - 16 * e[i] * N[n - (i - 32)], r = Math.floor((e[n] + 128) / 256), e[n] -= 256 * r;
            e[n] += r, e[i] = 0
        }
        for (n = 0, r = 0; n < 32; n++) e[n] += r - (e[31] >> 4) * N[n], r = e[n] >> 8, e[n] &= 255;
        for (n = 0; n < 32; n++) e[n] -= r * N[n];
        for (i = 0; i < 32; i++) e[i + 1] += e[i] >> 8, t[i] = 255 & e[i]
    }

    function T(t) {
        let e = new Float64Array(64);
        for (let r = 0; r < 64; r++) e[r] = t[r];
        for (let e = 0; e < 64; e++) t[e] = 0;
        O(t, e)
    }

    function k(t, e) {
        let r, i = o(),
            n = o(),
            s = o(),
            u = o(),
            l = o(),
            f = o(),
            g = o();
        p(t[2], h);
        var m, y, v, E = t[1];
        for (let t = 0; t < 16; t++) E[t] = e[2 * t] + (e[2 * t + 1] << 8);
        E[15] &= 32767, x(s, m = t[1], m), x(u, s, c), A(s, s, t[2]), _(u, t[2], u), x(l, u, u), x(f, l, l), x(g, f, l), x(i, g, s), x(i, i, u);
        let I = o();
        for (r = 0; r < 16; r++) I[r] = i[r];
        for (r = 250; r >= 0; r--) x(I, I, I), 1 !== r && x(I, I, i);
        for (r = 0; r < 16; r++) i[r] = I[r];
        return (x(i, i, s), x(i, i, u), x(i, i, u), x(t[0], i, u), x(n, y = t[0], y), x(n, n, u), b(n, s) && x(t[0], t[0], d), x(n, v = t[0], v), x(n, n, u), b(n, s)) ? -1 : (w(t[0]) === e[31] >> 7 && A(t[0], a, t[0]), x(t[3], t[0], t[1]), 0)
    }
    r.sign = function(t, e) {
        let r = new Float64Array(64),
            i = [o(), o(), o(), o()],
            s = (0, n.hash)(t.subarray(0, 32));
        s[0] &= 248, s[31] &= 127, s[31] |= 64;
        let a = new Uint8Array(64);
        a.set(s.subarray(32), 32);
        let h = new n.SHA512;
        h.update(a.subarray(32)), h.update(e);
        let c = h.digest();
        h.clean(), T(c), R(i, c), M(a, i), h.reset(), h.update(a.subarray(0, 32)), h.update(t.subarray(32)), h.update(e);
        let u = h.digest();
        T(u);
        for (let t = 0; t < 32; t++) r[t] = c[t];
        for (let t = 0; t < 32; t++)
            for (let e = 0; e < 32; e++) r[t + e] += u[t] * s[e];
        return O(a.subarray(32), r), a
    }, r.verify = function(t, e, i) {
        let s = new Uint8Array(32),
            a = [o(), o(), o(), o()],
            h = [o(), o(), o(), o()];
        if (i.length !== r.SIGNATURE_LENGTH) throw Error(`ed25519: signature must be ${r.SIGNATURE_LENGTH} bytes`);
        if (k(h, t)) return !1;
        let c = new n.SHA512;
        c.update(i.subarray(0, 32)), c.update(t), c.update(e);
        let u = c.digest();
        return T(u), P(a, h, u), R(h, i.subarray(32)), I(a, h), M(s, a), !v(i, s)
    }, r.convertPublicKeyToX25519 = function(t) {
        let e = [o(), o(), o(), o()];
        if (k(e, t)) throw Error("Ed25519: invalid public key");
        let r = o(),
            i = o(),
            n = e[1];
        _(r, h, n), A(i, h, n), E(i, i), x(r, r, i);
        let s = new Uint8Array(32);
        return y(s, r), s
    }, r.convertSecretKeyToX25519 = function(t) {
        let e = (0, n.hash)(t.subarray(0, 32));
        e[0] &= 248, e[31] &= 127, e[31] |= 64;
        let r = new Uint8Array(e.subarray(0, 32));
        return (0, s.wipe)(e), r
    }
}, 114918, (t, e, r) => {
    "use strict";
    e.exports = function() {
        throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
}, 297338, t => {
    "use strict";
    let e, r;
    var i, n, s, o, a, h, c, u, l, f, d, p, g = t.i(679753),
        m = t.i(350461),
        y = t.i(221168),
        v = t.i(602016),
        b = t.i(711790),
        w = t.i(744934),
        _ = t.i(386736),
        A = t.i(476979),
        x = t.i(353623),
        E = t.i(676096),
        I = t.i(638222),
        S = t.i(659203),
        M = t.i(825936);
    t.i(73730);
    var P = t.i(187978),
        R = t.i(513011),
        C = t.i(737640),
        N = t.i(145502),
        O = t.i(15309);
    let T = "base64url",
        k = "utf8",
        D = "utf8",
        q = "base58btc";
    var L = t.i(712314);

    function U(t) {
        return (0, L.safeJsonParse)((0, P.toString)((0, R.fromString)(t, T), k))
    }

    function B(t) {
        return (0, P.toString)((0, R.fromString)((0, L.safeJsonStringify)(t), k), T)
    }

    function j(t) {
        let e = (0, R.fromString)("K36", q);
        return ["did:key", "z" + (0, P.toString)((0, C.concat)([e, t]), q)].join(":")
    }

    function z(t) {
        var e;
        let r = t.split("."),
            i = U(r[0]),
            n = U(r[1]);
        return {
            header: i,
            payload: n,
            signature: (e = r[2], (0, R.fromString)(e, T)),
            data: (0, R.fromString)(r.slice(0, 2).join("."), D)
        }
    }

    function F(t = (0, I.randomBytes)(32)) {
        return O.generateKeyPairFromSeed(t)
    }
    async function H(t, e, r, i, n = (0, b.fromMiliseconds)(Date.now())) {
        var s, o, a;
        let h = {
                alg: "EdDSA",
                typ: "JWT"
            },
            c = {
                iss: j(i.publicKey),
                sub: t,
                aud: e,
                iat: n,
                exp: n + r
            },
            u = (s = {
                header: h,
                payload: c
            }, (0, R.fromString)([B(s.header), B(s.payload)].join("."), D));
        return [B((o = {
            header: h,
            payload: c,
            signature: O.sign(i.secretKey, u)
        }).header), B(o.payload), (a = o.signature, (0, P.toString)(a, T))].join(".")
    }
    var K = t.i(848522);

    function $(t) {
        let [e, r] = t.split(":");
        return {
            namespace: e,
            reference: r
        }
    }

    function V(t, e = []) {
        let r = [];
        return Object.keys(t).forEach(i => {
            if (e.length && !e.includes(i)) return;
            let n = t[i];
            r.push(...n.accounts)
        }), r
    }

    function G(t, e) {
        return t.includes(":") ? [t] : e.chains || []
    }
    var J = Object.defineProperty,
        Q = Object.getOwnPropertySymbols,
        Y = Object.prototype.hasOwnProperty,
        W = Object.prototype.propertyIsEnumerable,
        X = (t, e, r) => e in t ? J(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        Z = (t, e) => {
            for (var r in e || (e = {})) Y.call(e, r) && X(t, r, e[r]);
            if (Q)
                for (var r of Q(e)) W.call(e, r) && X(t, r, e[r]);
            return t
        };
    let tt = "react-native",
        te = "node",
        tr = "browser";

    function ti() {
        return "u" > typeof m.default && "u" > typeof m.default.versions && "u" > typeof m.default.versions.node
    }

    function tn() {
        return !(0, w.getDocument)() && !!(0, w.getNavigator)() && "ReactNative" === navigator.product
    }

    function ts() {
        return !ti() && !!(0, w.getNavigator)() && !!(0, w.getDocument)()
    }

    function to() {
        return tn() ? tt : ti() ? te : ts() ? tr : "unknown"
    }

    function ta() {
        return (0, _.getWindowMetadata)() || {
            name: "",
            description: "",
            url: "",
            icons: [""]
        }
    }

    function th(e, r, i) {
        var n;
        let s, o = function() {
                if (to() === tt && "u" > typeof(null == t.g ? void 0 : t.g.Platform)) {
                    let {
                        OS: e,
                        Version: r
                    } = t.g.Platform;
                    return [e, r].join("-")
                }
                let e = (0, v.detect)();
                if (null === e) return "unknown";
                let r = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                return "browser" === e.type ? [r, e.name, e.version].join("-") : [r, e.version].join("-")
            }(),
            a = (s = to()) === tr ? [s, (null == (n = (0, w.getLocation)()) ? void 0 : n.host) || "unknown"].join(":") : s;
        return [
            [e, r].join("-"), ["js", i].join("-"), o, a
        ].join("/")
    }

    function tc(t, e) {
        return t.filter(t => e.includes(t)).length === t.length
    }

    function tu(t) {
        return Object.fromEntries(t.entries())
    }

    function tl(t) {
        return new Map(Object.entries(t))
    }

    function tf(t = b.FIVE_MINUTES, e) {
        let r, i, n, s = (0, b.toMiliseconds)(t || b.FIVE_MINUTES);
        return {
            resolve: t => {
                n && r && (clearTimeout(n), r(t))
            },
            reject: t => {
                n && i && (clearTimeout(n), i(t))
            },
            done: () => new Promise((t, o) => {
                n = setTimeout(() => {
                    o(Error(e))
                }, s), r = t, i = o
            })
        }
    }

    function td(t, e, r) {
        return new Promise(async (i, n) => {
            let s = setTimeout(() => n(Error(r)), e);
            try {
                let e = await t;
                i(e)
            } catch (t) {
                n(t)
            }
            clearTimeout(s)
        })
    }

    function tp(t, e) {
        if ("string" == typeof e && e.startsWith(`${t}:`)) return e;
        if ("topic" === t.toLowerCase()) {
            if ("string" != typeof e) throw Error('Value must be "string" for expirer target type: topic');
            return `topic:${e}`
        }
        if ("id" === t.toLowerCase()) {
            if ("number" != typeof e) throw Error('Value must be "number" for expirer target type: id');
            return `id:${e}`
        }
        throw Error(`Unknown expirer target type: ${t}`)
    }

    function tg(t) {
        let [e, r] = t.split(":"), i = {
            id: void 0,
            topic: void 0
        };
        if ("topic" === e && "string" == typeof r) i.topic = r;
        else if ("id" === e && Number.isInteger(Number(r))) i.id = Number(r);
        else throw Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
        return i
    }

    function tm(t, e) {
        return (0, b.fromMiliseconds)((e || Date.now()) + (0, b.toMiliseconds)(t))
    }

    function ty(t) {
        return Date.now() >= (0, b.toMiliseconds)(t)
    }

    function tv(t, e) {
        return `${t}${e?`:${e}`:""}`
    }

    function tb(t = [], e = []) {
        return [...new Set([...t, ...e])]
    }
    async function tw({
        id: e,
        topic: r,
        wcDeepLink: i
    }) {
        var n;
        try {
            if (!i) return;
            let s = "string" == typeof i ? JSON.parse(i) : i,
                o = s ? .href;
            if ("string" != typeof o) return;
            let a = function(t, e, r) {
                    let i = `requestId=${e}&sessionTopic=${r}`;
                    t.endsWith("/") && (t = t.slice(0, -1));
                    let n = `${t}`;
                    if (t.startsWith("https://t.me")) {
                        let e = t.includes("?") ? "&startapp=" : "?startapp=";
                        n = `${n}${e}${function(t,e=!1){let r=y.Buffer.from(t).toString("base64");return e?r.replace(/[=]/g,""):r}(i,!0)}`
                    } else n = `${n}/wc?${i}`;
                    return n
                }(o, e, r),
                h = to();
            if (h === tr) {
                if (!(null != (n = (0, w.getDocument)()) && n.hasFocus())) return void console.warn("Document does not have focus, skipping deeplink.");
                a.startsWith("https://") || a.startsWith("http://") ? window.open(a, "_blank", "noreferrer noopener") : window.open(a, "u" > typeof window && (window.TelegramWebviewProxy || window.Telegram || window.TelegramWebviewProxyProto) ? "_blank" : "_self", "noreferrer noopener")
            } else h === tt && "u" > typeof(null == t.g ? void 0 : t.g.Linking) && await t.g.Linking.openURL(a)
        } catch (t) {
            console.error(t)
        }
    }
    async function t_(t, e) {
        let r = "";
        try {
            if (ts() && (r = localStorage.getItem(e))) return r;
            r = await t.getItem(e)
        } catch (t) {
            console.error(t)
        }
        return r
    }

    function tA(t, e) {
        if (!t.includes(e)) return null;
        let r = t.split(/([&,?,=])/),
            i = r.indexOf(e);
        return r[i + 2]
    }

    function tx() {
        return "u" > typeof crypto && null != crypto && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, t => {
            let e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }

    function tE() {
        return "u" > typeof m.default && "true" === m.default.env.IS_VITEST
    }

    function tI(t) {
        return y.Buffer.from(t, "base64").toString("utf-8")
    }
    var tS = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : t.g,
        tM = {
            exports: {}
        };
    (function() {
        var t = "input is invalid type",
            e = "object" == typeof window,
            r = e ? window : {};
        r.JS_SHA3_NO_WINDOW && (e = !1);
        var i = !e && "object" == typeof self;
        !r.JS_SHA3_NO_NODE_JS && "object" == typeof m.default && m.default.versions && m.default.versions.node ? r = tS : i && (r = self);
        var n = !r.JS_SHA3_NO_COMMON_JS && tM.exports,
            s = !r.JS_SHA3_NO_ARRAY_BUFFER && "u" > typeof ArrayBuffer,
            o = "0123456789abcdef".split(""),
            a = [4, 1024, 262144, 0x4000000],
            h = [0, 8, 16, 24],
            c = [1, 0, 32898, 0, 32906, 0x80000000, 0x80008000, 0x80000000, 32907, 0, 0x80000001, 0, 0x80008081, 0x80000000, 32777, 0x80000000, 138, 0, 136, 0, 0x80008009, 0, 0x8000000a, 0, 0x8000808b, 0, 139, 0x80000000, 32905, 0x80000000, 32771, 0x80000000, 32770, 0x80000000, 128, 0x80000000, 32778, 0, 0x8000000a, 0x80000000, 0x80008081, 0x80000000, 32896, 0x80000000, 0x80000001, 0, 0x80008008, 0x80000000],
            u = [224, 256, 384, 512],
            l = [128, 256],
            f = ["hex", "buffer", "arrayBuffer", "array", "digest"],
            d = {
                128: 168,
                256: 136
            };
        (r.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }), s && (r.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
            return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
        });
        for (var p = function(t, e, r) {
                return function(i) {
                    return new C(t, e, t).update(i)[r]()
                }
            }, g = function(t, e, r) {
                return function(i, n) {
                    return new C(t, e, n).update(i)[r]()
                }
            }, y = function(t, e, r) {
                return function(e, i, n, s) {
                    return A["cshake" + t].update(e, i, n, s)[r]()
                }
            }, v = function(t, e, r) {
                return function(e, i, n, s) {
                    return A["kmac" + t].update(e, i, n, s)[r]()
                }
            }, b = function(t, e, r, i) {
                for (var n = 0; n < f.length; ++n) {
                    var s = f[n];
                    t[s] = e(r, i, s)
                }
                return t
            }, w = function(t, e) {
                var r = p(t, e, "hex");
                return r.create = function() {
                    return new C(t, e, t)
                }, r.update = function(t) {
                    return r.create().update(t)
                }, b(r, p, t, e)
            }, _ = [{
                name: "keccak",
                padding: [1, 256, 65536, 0x1000000],
                bits: u,
                createMethod: w
            }, {
                name: "sha3",
                padding: [6, 1536, 393216, 0x6000000],
                bits: u,
                createMethod: w
            }, {
                name: "shake",
                padding: [31, 7936, 2031616, 0x1f000000],
                bits: l,
                createMethod: function(t, e) {
                    var r = g(t, e, "hex");
                    return r.create = function(r) {
                        return new C(t, e, r)
                    }, r.update = function(t, e) {
                        return r.create(e).update(t)
                    }, b(r, g, t, e)
                }
            }, {
                name: "cshake",
                padding: a,
                bits: l,
                createMethod: function(t, e) {
                    var r = d[t],
                        i = y(t, e, "hex");
                    return i.create = function(i, n, s) {
                        return n || s ? new C(t, e, i).bytepad([n, s], r) : A["shake" + t].create(i)
                    }, i.update = function(t, e, r, n) {
                        return i.create(e, r, n).update(t)
                    }, b(i, y, t, e)
                }
            }, {
                name: "kmac",
                padding: a,
                bits: l,
                createMethod: function(t, e) {
                    var r = d[t],
                        i = v(t, e, "hex");
                    return i.create = function(i, n, s) {
                        return new N(t, e, n).bytepad(["KMAC", s], r).bytepad([i], r)
                    }, i.update = function(t, e, r, n) {
                        return i.create(t, r, n).update(e)
                    }, b(i, v, t, e)
                }
            }], A = {}, x = [], E = 0; E < _.length; ++E)
            for (var I = _[E], S = I.bits, M = 0; M < S.length; ++M) {
                var P = I.name + "_" + S[M];
                if (x.push(P), A[P] = I.createMethod(S[M], I.padding), "sha3" !== I.name) {
                    var R = I.name + S[M];
                    x.push(R), A[R] = A[P]
                }
            }

        function C(t, e, r) {
            this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
            for (var i = 0; i < 50; ++i) this.s[i] = 0
        }

        function N(t, e, r) {
            C.call(this, t, e, r)
        }
        C.prototype.update = function(e) {
            if (this.finalized) throw Error("finalize already called");
            var r, i = typeof e;
            if ("string" !== i) {
                if ("object" === i) {
                    if (null === e) throw Error(t);
                    if (s && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                    else if (!Array.isArray(e) && (!s || !ArrayBuffer.isView(e))) throw Error(t)
                } else throw Error(t);
                r = !0
            }
            for (var n, o, a = this.blocks, c = this.byteCount, u = e.length, l = this.blockCount, f = 0, d = this.s; f < u;) {
                if (this.reset)
                    for (this.reset = !1, a[0] = this.block, n = 1; n < l + 1; ++n) a[n] = 0;
                if (r)
                    for (n = this.start; f < u && n < c; ++f) a[n >> 2] |= e[f] << h[3 & n++];
                else
                    for (n = this.start; f < u && n < c; ++f)(o = e.charCodeAt(f)) < 128 ? a[n >> 2] |= o << h[3 & n++] : (o < 2048 ? a[n >> 2] |= (192 | o >> 6) << h[3 & n++] : (o < 55296 || o >= 57344 ? a[n >> 2] |= (224 | o >> 12) << h[3 & n++] : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++f)), a[n >> 2] |= (240 | o >> 18) << h[3 & n++], a[n >> 2] |= (128 | o >> 12 & 63) << h[3 & n++]), a[n >> 2] |= (128 | o >> 6 & 63) << h[3 & n++]), a[n >> 2] |= (128 | 63 & o) << h[3 & n++]);
                if (this.lastByteIndex = n, n >= c) {
                    for (this.start = n - c, this.block = a[l], n = 0; n < l; ++n) d[n] ^= a[n];
                    O(d), this.reset = !0
                } else this.start = n
            }
            return this
        }, C.prototype.encode = function(t, e) {
            var r = 255 & t,
                i = 1,
                n = [r];
            for (t >>= 8, r = 255 & t; r > 0;) n.unshift(r), t >>= 8, r = 255 & t, ++i;
            return e ? n.push(i) : n.unshift(i), this.update(n), n.length
        }, C.prototype.encodeString = function(e) {
            var r, i = typeof e;
            if ("string" !== i) {
                if ("object" === i) {
                    if (null === e) throw Error(t);
                    if (s && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                    else if (!Array.isArray(e) && (!s || !ArrayBuffer.isView(e))) throw Error(t)
                } else throw Error(t);
                r = !0
            }
            var n = 0,
                o = e.length;
            if (r) n = o;
            else
                for (var a = 0; a < e.length; ++a) {
                    var h = e.charCodeAt(a);
                    h < 128 ? n += 1 : h < 2048 ? n += 2 : h < 55296 || h >= 57344 ? n += 3 : (h = 65536 + ((1023 & h) << 10 | 1023 & e.charCodeAt(++a)), n += 4)
                }
            return n += this.encode(8 * n), this.update(e), n
        }, C.prototype.bytepad = function(t, e) {
            for (var r = this.encode(e), i = 0; i < t.length; ++i) r += this.encodeString(t[i]);
            var n = [];
            return n.length = e - r % e, this.update(n), this
        }, C.prototype.finalize = function() {
            if (!this.finalized) {
                this.finalized = !0;
                var t = this.blocks,
                    e = this.lastByteIndex,
                    r = this.blockCount,
                    i = this.s;
                if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                    for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
                for (t[r - 1] |= 0x80000000, e = 0; e < r; ++e) i[e] ^= t[e];
                O(i)
            }
        }, C.prototype.toString = C.prototype.hex = function() {
            this.finalize();
            for (var t, e = this.blockCount, r = this.s, i = this.outputBlocks, n = this.extraBytes, s = 0, a = 0, h = ""; a < i;) {
                for (s = 0; s < e && a < i; ++s, ++a) h += o[(t = r[s]) >> 4 & 15] + o[15 & t] + o[t >> 12 & 15] + o[t >> 8 & 15] + o[t >> 20 & 15] + o[t >> 16 & 15] + o[t >> 28 & 15] + o[t >> 24 & 15];
                a % e == 0 && (O(r), s = 0)
            }
            return n && (h += o[(t = r[s]) >> 4 & 15] + o[15 & t], n > 1 && (h += o[t >> 12 & 15] + o[t >> 8 & 15]), n > 2 && (h += o[t >> 20 & 15] + o[t >> 16 & 15])), h
        }, C.prototype.arrayBuffer = function() {
            this.finalize();
            var t, e = this.blockCount,
                r = this.s,
                i = this.outputBlocks,
                n = this.extraBytes,
                s = 0,
                o = 0,
                a = this.outputBits >> 3;
            t = new ArrayBuffer(n ? i + 1 << 2 : a);
            for (var h = new Uint32Array(t); o < i;) {
                for (s = 0; s < e && o < i; ++s, ++o) h[o] = r[s];
                o % e == 0 && O(r)
            }
            return n && (h[s] = r[s], t = t.slice(0, a)), t
        }, C.prototype.buffer = C.prototype.arrayBuffer, C.prototype.digest = C.prototype.array = function() {
            this.finalize();
            for (var t, e, r = this.blockCount, i = this.s, n = this.outputBlocks, s = this.extraBytes, o = 0, a = 0, h = []; a < n;) {
                for (o = 0; o < r && a < n; ++o, ++a) t = a << 2, e = i[o], h[t] = 255 & e, h[t + 1] = e >> 8 & 255, h[t + 2] = e >> 16 & 255, h[t + 3] = e >> 24 & 255;
                a % r == 0 && O(i)
            }
            return s && (t = a << 2, e = i[o], h[t] = 255 & e, s > 1 && (h[t + 1] = e >> 8 & 255), s > 2 && (h[t + 2] = e >> 16 & 255)), h
        }, N.prototype = new C, N.prototype.finalize = function() {
            return this.encode(this.outputBits, !0), C.prototype.finalize.call(this)
        };
        var O = function(t) {
            var e, r, i, n, s, o, a, h, u, l, f, d, p, g, m, y, v, b, w, _, A, x, E, I, S, M, P, R, C, N, O, T, k, D, q, L, U, B, j, z, F, H, K, $, V, G, J, Q, Y, W, X, Z, tt, te, tr, ti, tn, ts, to, ta, th, tc, tu;
            for (i = 0; i < 48; i += 2) n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], s = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], o = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], h = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], f = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], e = d ^ (o << 1 | a >>> 31), r = p ^ (a << 1 | o >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = n ^ (h << 1 | u >>> 31), r = s ^ (u << 1 | h >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = o ^ (l << 1 | f >>> 31), r = a ^ (f << 1 | l >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = h ^ (d << 1 | p >>> 31), r = u ^ (p << 1 | d >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = l ^ (n << 1 | s >>> 31), r = f ^ (s << 1 | n >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, g = t[0], m = t[1], G = t[11] << 4 | t[10] >>> 28, J = t[10] << 4 | t[11] >>> 28, R = t[20] << 3 | t[21] >>> 29, C = t[21] << 3 | t[20] >>> 29, ta = t[31] << 9 | t[30] >>> 23, th = t[30] << 9 | t[31] >>> 23, H = t[40] << 18 | t[41] >>> 14, K = t[41] << 18 | t[40] >>> 14, D = t[2] << 1 | t[3] >>> 31, q = t[3] << 1 | t[2] >>> 31, y = t[13] << 12 | t[12] >>> 20, v = t[12] << 12 | t[13] >>> 20, Q = t[22] << 10 | t[23] >>> 22, Y = t[23] << 10 | t[22] >>> 22, N = t[33] << 13 | t[32] >>> 19, O = t[32] << 13 | t[33] >>> 19, tc = t[42] << 2 | t[43] >>> 30, tu = t[43] << 2 | t[42] >>> 30, te = t[5] << 30 | t[4] >>> 2, tr = t[4] << 30 | t[5] >>> 2, L = t[14] << 6 | t[15] >>> 26, U = t[15] << 6 | t[14] >>> 26, b = t[25] << 11 | t[24] >>> 21, w = t[24] << 11 | t[25] >>> 21, W = t[34] << 15 | t[35] >>> 17, X = t[35] << 15 | t[34] >>> 17, T = t[45] << 29 | t[44] >>> 3, k = t[44] << 29 | t[45] >>> 3, I = t[6] << 28 | t[7] >>> 4, S = t[7] << 28 | t[6] >>> 4, ti = t[17] << 23 | t[16] >>> 9, tn = t[16] << 23 | t[17] >>> 9, B = t[26] << 25 | t[27] >>> 7, j = t[27] << 25 | t[26] >>> 7, _ = t[36] << 21 | t[37] >>> 11, A = t[37] << 21 | t[36] >>> 11, Z = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, $ = t[8] << 27 | t[9] >>> 5, V = t[9] << 27 | t[8] >>> 5, M = t[18] << 20 | t[19] >>> 12, P = t[19] << 20 | t[18] >>> 12, ts = t[29] << 7 | t[28] >>> 25, to = t[28] << 7 | t[29] >>> 25, z = t[38] << 8 | t[39] >>> 24, F = t[39] << 8 | t[38] >>> 24, x = t[48] << 14 | t[49] >>> 18, E = t[49] << 14 | t[48] >>> 18, t[0] = g ^ ~y & b, t[1] = m ^ ~v & w, t[10] = I ^ ~M & R, t[11] = S ^ ~P & C, t[20] = D ^ ~L & B, t[21] = q ^ ~U & j, t[30] = $ ^ ~G & Q, t[31] = V ^ ~J & Y, t[40] = te ^ ~ti & ts, t[41] = tr ^ ~tn & to, t[2] = y ^ ~b & _, t[3] = v ^ ~w & A, t[12] = M ^ ~R & N, t[13] = P ^ ~C & O, t[22] = L ^ ~B & z, t[23] = U ^ ~j & F, t[32] = G ^ ~Q & W, t[33] = J ^ ~Y & X, t[42] = ti ^ ~ts & ta, t[43] = tn ^ ~to & th, t[4] = b ^ ~_ & x, t[5] = w ^ ~A & E, t[14] = R ^ ~N & T, t[15] = C ^ ~O & k, t[24] = B ^ ~z & H, t[25] = j ^ ~F & K, t[34] = Q ^ ~W & Z, t[35] = Y ^ ~X & tt, t[44] = ts ^ ~ta & tc, t[45] = to ^ ~th & tu, t[6] = _ ^ ~x & g, t[7] = A ^ ~E & m, t[16] = N ^ ~T & I, t[17] = O ^ ~k & S, t[26] = z ^ ~H & D, t[27] = F ^ ~K & q, t[36] = W ^ ~Z & $, t[37] = X ^ ~tt & V, t[46] = ta ^ ~tc & te, t[47] = th ^ ~tu & tr, t[8] = x ^ ~g & y, t[9] = E ^ ~m & v, t[18] = T ^ ~I & M, t[19] = k ^ ~S & P, t[28] = H ^ ~D & L, t[29] = K ^ ~q & U, t[38] = Z ^ ~$ & G, t[39] = tt ^ ~V & J, t[48] = tc ^ ~te & ti, t[49] = tu ^ ~tr & tn, t[0] ^= c[i], t[1] ^= c[i + 1]
        };
        if (n) tM.exports = A;
        else
            for (E = 0; E < x.length; ++E) r[x[E]] = A[x[E]]
    })();
    var tP = tM.exports;
    let tR = !1,
        tC = !1,
        tN = {
            debug: 1,
            default: 2,
            info: 2,
            warning: 3,
            error: 4,
            off: 5
        },
        tO = tN.default,
        tT = null,
        tk = function() {
            try {
                let t = [];
                if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
                        try {
                            if ("test" !== "test".normalize(e)) throw Error("bad normalize")
                        } catch {
                            t.push(e)
                        }
                    }), t.length) throw Error("missing " + t.join(", "));
                if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw Error("broken implementation")
            } catch (t) {
                return t.message
            }
            return null
        }();
    (n = u || (u = {})).DEBUG = "DEBUG", n.INFO = "INFO", n.WARNING = "WARNING", n.ERROR = "ERROR", n.OFF = "OFF", (s = l || (l = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR", s.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", s.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", s.NETWORK_ERROR = "NETWORK_ERROR", s.SERVER_ERROR = "SERVER_ERROR", s.TIMEOUT = "TIMEOUT", s.BUFFER_OVERRUN = "BUFFER_OVERRUN", s.NUMERIC_FAULT = "NUMERIC_FAULT", s.MISSING_NEW = "MISSING_NEW", s.INVALID_ARGUMENT = "INVALID_ARGUMENT", s.MISSING_ARGUMENT = "MISSING_ARGUMENT", s.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", s.CALL_EXCEPTION = "CALL_EXCEPTION", s.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", s.NONCE_EXPIRED = "NONCE_EXPIRED", s.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", s.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", s.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", s.ACTION_REJECTED = "ACTION_REJECTED";
    let tD = "0123456789abcdef";
    class tq {
        constructor(t) {
            Object.defineProperty(this, "version", {
                enumerable: !0,
                value: t,
                writable: !1
            })
        }
        _log(t, e) {
            let r = t.toLowerCase();
            null == tN[r] && this.throwArgumentError("invalid log level name", "logLevel", t), tO > tN[r] || console.log.apply(console, e)
        }
        debug(...t) {
            this._log(tq.levels.DEBUG, t)
        }
        info(...t) {
            this._log(tq.levels.INFO, t)
        }
        warn(...t) {
            this._log(tq.levels.WARNING, t)
        }
        makeError(t, e, r) {
            if (tC) return this.makeError("censored error", e, {});
            e || (e = tq.errors.UNKNOWN_ERROR), r || (r = {});
            let i = [];
            Object.keys(r).forEach(t => {
                let e = r[t];
                try {
                    if (e instanceof Uint8Array) {
                        let r = "";
                        for (let t = 0; t < e.length; t++) r += tD[e[t] >> 4], r += tD[15 & e[t]];
                        i.push(t + "=Uint8Array(0x" + r + ")")
                    } else i.push(t + "=" + JSON.stringify(e))
                } catch {
                    i.push(t + "=" + JSON.stringify(r[t].toString()))
                }
            }), i.push(`code=${e}`), i.push(`version=${this.version}`);
            let n = t,
                s = "";
            switch (e) {
                case l.NUMERIC_FAULT:
                    {
                        s = "NUMERIC_FAULT";
                        let e = t;
                        switch (e) {
                            case "overflow":
                            case "underflow":
                            case "division-by-zero":
                                s += "-" + e;
                                break;
                            case "negative-power":
                            case "negative-width":
                                s += "-unsupported";
                                break;
                            case "unbound-bitwise-result":
                                s += "-unbound-result"
                        }
                        break
                    }
                case l.CALL_EXCEPTION:
                case l.INSUFFICIENT_FUNDS:
                case l.MISSING_NEW:
                case l.NONCE_EXPIRED:
                case l.REPLACEMENT_UNDERPRICED:
                case l.TRANSACTION_REPLACED:
                case l.UNPREDICTABLE_GAS_LIMIT:
                    s = e
            }
            s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), i.length && (t += " (" + i.join(", ") + ")");
            let o = Error(t);
            return o.reason = n, o.code = e, Object.keys(r).forEach(function(t) {
                o[t] = r[t]
            }), o
        }
        throwError(t, e, r) {
            throw this.makeError(t, e, r)
        }
        throwArgumentError(t, e, r) {
            return this.throwError(t, tq.errors.INVALID_ARGUMENT, {
                argument: e,
                value: r
            })
        }
        assert(t, e, r, i) {
            t || this.throwError(e, r, i)
        }
        assertArgument(t, e, r, i) {
            t || this.throwArgumentError(e, r, i)
        }
        checkNormalize(t) {
            tk && this.throwError("platform missing String.prototype.normalize", tq.errors.UNSUPPORTED_OPERATION, {
                operation: "String.prototype.normalize",
                form: tk
            })
        }
        checkSafeUint53(t, e) {
            "number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 0x1fffffffffffff) && this.throwError(e, tq.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t
            }), t % 1 && this.throwError(e, tq.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t
            }))
        }
        checkArgumentCount(t, e, r) {
            r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, tq.errors.MISSING_ARGUMENT, {
                count: t,
                expectedCount: e
            }), t > e && this.throwError("too many arguments" + r, tq.errors.UNEXPECTED_ARGUMENT, {
                count: t,
                expectedCount: e
            })
        }
        checkNew(t, e) {
            (t === Object || null == t) && this.throwError("missing new", tq.errors.MISSING_NEW, {
                name: e.name
            })
        }
        checkAbstract(t, e) {
            t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", tq.errors.UNSUPPORTED_OPERATION, {
                name: t.name,
                operation: "new"
            }) : (t === Object || null == t) && this.throwError("missing new", tq.errors.MISSING_NEW, {
                name: e.name
            })
        }
        static globalLogger() {
            return tT || (tT = new tq("logger/5.7.0")), tT
        }
        static setCensorship(t, e) {
            if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", tq.errors.UNSUPPORTED_OPERATION, {
                    operation: "setCensorship"
                }), tR) {
                if (!t) return;
                this.globalLogger().throwError("error censorship permanent", tq.errors.UNSUPPORTED_OPERATION, {
                    operation: "setCensorship"
                })
            }
            tC = !!t, tR = !!e
        }
        static setLogLevel(t) {
            let e = tN[t.toLowerCase()];
            null == e ? tq.globalLogger().warn("invalid log level - " + t) : tO = e
        }
        static from(t) {
            return new tq(t)
        }
    }
    tq.errors = l, tq.levels = u;
    let tL = new tq("bytes/5.7.0");

    function tU(t) {
        return !!t.toHexString
    }

    function tB(t) {
        return t.slice || (t.slice = function() {
            let e = Array.prototype.slice.call(arguments);
            return tB(new Uint8Array(Array.prototype.slice.apply(t, e)))
        }), t
    }

    function tj(t) {
        return "number" == typeof t && t == t && t % 1 == 0
    }

    function tz(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" == typeof t || !tj(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
            let r = t[e];
            if (!tj(r) || r < 0 || r >= 256) return !1
        }
        return !0
    }

    function tF(t, e) {
        if (e || (e = {}), "number" == typeof t) {
            tL.checkSafeUint53(t, "invalid arrayify value");
            let e = [];
            for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
            return 0 === e.length && e.push(0), tB(new Uint8Array(e))
        }
        if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), tU(t) && (t = t.toHexString()), tH(t)) {
            let r = t.substring(2);
            r.length % 2 && ("left" === e.hexPad ? r = "0" + r : "right" === e.hexPad ? r += "0" : tL.throwArgumentError("hex data is odd-length", "value", t));
            let i = [];
            for (let t = 0; t < r.length; t += 2) i.push(parseInt(r.substring(t, t + 2), 16));
            return tB(new Uint8Array(i))
        }
        return tz(t) ? tB(new Uint8Array(t)) : tL.throwArgumentError("invalid arrayify value", "value", t)
    }

    function tH(t, e) {
        return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e)
    }
    let tK = "0123456789abcdef";

    function t$(t, e) {
        if (e || (e = {}), "number" == typeof t) {
            tL.checkSafeUint53(t, "invalid hexlify value");
            let e = "";
            for (; t;) e = tK[15 & t] + e, t = Math.floor(t / 16);
            return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
        }
        if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
        if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), tU(t)) return t.toHexString();
        if (tH(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : tL.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
        if (tz(t)) {
            let e = "0x";
            for (let r = 0; r < t.length; r++) {
                let i = t[r];
                e += tK[(240 & i) >> 4] + tK[15 & i]
            }
            return e
        }
        return tL.throwArgumentError("invalid hexlify value", "value", t)
    }

    function tV(t, e, r) {
        return "string" != typeof t ? t = t$(t) : (!tH(t) || t.length % 2) && tL.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
    }

    function tG(t, e) {
        for ("string" != typeof t ? t = t$(t) : tH(t) || tL.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && tL.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);
        return t
    }

    function tJ(t) {
        let e = {
            r: "0x",
            s: "0x",
            _vs: "0x",
            recoveryParam: 0,
            v: 0,
            yParityAndS: "0x",
            compact: "0x"
        };
        if (tH(t) && !(t.length % 2) || tz(t)) {
            let r = tF(t);
            64 === r.length ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = t$(r.slice(0, 32)), e.s = t$(r.slice(32, 64))) : 65 === r.length ? (e.r = t$(r.slice(0, 32)), e.s = t$(r.slice(32, 64)), e.v = r[64]) : tL.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : tL.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = t$(r.slice(32, 64))
        } else {
            if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, null != e._vs) {
                let r = function(t, e) {
                    (t = tF(t)).length > e && tL.throwArgumentError("value out of range", "value", arguments[0]);
                    let r = new Uint8Array(e);
                    return r.set(t, e - t.length), tB(r)
                }(tF(e._vs), 32);
                e._vs = t$(r);
                let i = +(r[0] >= 128);
                null == e.recoveryParam ? e.recoveryParam = i : e.recoveryParam !== i && tL.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), r[0] &= 127;
                let n = t$(r);
                null == e.s ? e.s = n : e.s !== n && tL.throwArgumentError("signature v mismatch _vs", "signature", t)
            }
            if (null == e.recoveryParam) null == e.v ? tL.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
            else if (null == e.v) e.v = 27 + e.recoveryParam;
            else {
                let r = 0 === e.v || 1 === e.v ? e.v : 1 - e.v % 2;
                e.recoveryParam !== r && tL.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
            }
            null != e.r && tH(e.r) ? e.r = tG(e.r, 32) : tL.throwArgumentError("signature missing or invalid r", "signature", t), null != e.s && tH(e.s) ? e.s = tG(e.s, 32) : tL.throwArgumentError("signature missing or invalid s", "signature", t);
            let r = tF(e.s);
            r[0] >= 128 && tL.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
            let i = t$(r);
            e._vs && (tH(e._vs) || tL.throwArgumentError("signature invalid _vs", "signature", t), e._vs = tG(e._vs, 32)), null == e._vs ? e._vs = i : e._vs !== i && tL.throwArgumentError("signature _vs mismatch v and s", "signature", t)
        }
        return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e
    }

    function tQ(t) {
        return "0x" + tP.keccak_256(tF(t))
    }
    var tY = {
            exports: {}
        },
        tW = function(t) {
            var e = t.default;
            if ("function" == typeof e) {
                var r = function() {
                    return e.apply(this, arguments)
                };
                r.prototype = e.prototype
            } else r = {};
            return Object.defineProperty(r, "__esModule", {
                value: !0
            }), Object.keys(t).forEach(function(e) {
                var i = Object.getOwnPropertyDescriptor(t, e);
                Object.defineProperty(r, e, i.get ? i : {
                    enumerable: !0,
                    get: function() {
                        return t[e]
                    }
                })
            }), r
        }(Object.freeze({
            __proto__: null,
            default: {}
        }));
    ! function(t, e) {
        function r(t, e) {
            if (!t) throw Error(e || "Assertion failed")
        }

        function i(t, e) {
            t.super_ = e;
            var r = function() {};
            r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
        }

        function n(t, e, r) {
            if (n.isBN(t)) return t;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
        }
        "object" == typeof t ? t.exports = n : e.BN = n, n.BN = n, n.wordSize = 26;
        try {
            u = "u" > typeof window && "u" > typeof window.Buffer ? window.Buffer : tW.Buffer
        } catch {}

        function s(t, e) {
            var i = t.charCodeAt(e);
            return i >= 48 && i <= 57 ? i - 48 : i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : void r(!1, "Invalid character in " + t)
        }

        function o(t, e, r) {
            var i = s(t, r);
            return r - 1 >= e && (i |= s(t, r - 1) << 4), i
        }

        function a(t, e, i, n) {
            for (var s = 0, o = 0, a = Math.min(t.length, i), h = e; h < a; h++) {
                var c = t.charCodeAt(h) - 48;
                s *= n, o = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c, r(c >= 0 && o < n, "Invalid character"), s += o
            }
            return s
        }

        function h(t, e) {
            t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
        }
        if (n.isBN = function(t) {
                return t instanceof n || null !== t && "object" == typeof t && t.constructor.wordSize === n.wordSize && Array.isArray(t.words)
            }, n.max = function(t, e) {
                return t.cmp(e) > 0 ? t : e
            }, n.min = function(t, e) {
                return 0 > t.cmp(e) ? t : e
            }, n.prototype._init = function(t, e, i) {
                if ("number" == typeof t) return this._initNumber(t, e, i);
                if ("object" == typeof t) return this._initArray(t, e, i);
                "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                var n = 0;
                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, i) : (this._parseBase(t, e, n), "le" === i && this._initArray(this.toArray(), e, i)))
            }, n.prototype._initNumber = function(t, e, i) {
                t < 0 && (this.negative = 1, t = -t), t < 0x4000000 ? (this.words = [0x3ffffff & t], this.length = 1) : t < 0x10000000000000 ? (this.words = [0x3ffffff & t, t / 0x4000000 & 0x3ffffff], this.length = 2) : (r(t < 0x20000000000000), this.words = [0x3ffffff & t, t / 0x4000000 & 0x3ffffff, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), e, i)
            }, n.prototype._initArray = function(t, e, i) {
                if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                for (var n = 0; n < this.length; n++) this.words[n] = 0;
                var s, o, a = 0;
                if ("be" === i)
                    for (n = t.length - 1, s = 0; n >= 0; n -= 3) o = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[s] |= o << a & 0x3ffffff, this.words[s + 1] = o >>> 26 - a & 0x3ffffff, (a += 24) >= 26 && (a -= 26, s++);
                else if ("le" === i)
                    for (n = 0, s = 0; n < t.length; n += 3) o = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[s] |= o << a & 0x3ffffff, this.words[s + 1] = o >>> 26 - a & 0x3ffffff, (a += 24) >= 26 && (a -= 26, s++);
                return this._strip()
            }, n.prototype._parseHex = function(t, e, r) {
                this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                for (var i = 0; i < this.length; i++) this.words[i] = 0;
                var n, s = 0,
                    a = 0;
                if ("be" === r)
                    for (i = t.length - 1; i >= e; i -= 2) n = o(t, e, i) << s, this.words[a] |= 0x3ffffff & n, s >= 18 ? (s -= 18, a += 1, this.words[a] |= n >>> 26) : s += 8;
                else
                    for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) n = o(t, e, i) << s, this.words[a] |= 0x3ffffff & n, s >= 18 ? (s -= 18, a += 1, this.words[a] |= n >>> 26) : s += 8;
                this._strip()
            }, n.prototype._parseBase = function(t, e, r) {
                this.words = [0], this.length = 1;
                for (var i = 0, n = 1; n <= 0x3ffffff; n *= e) i++;
                i--, n = n / e | 0;
                for (var s = t.length - r, o = s % i, h = Math.min(s, s - o) + r, c = 0, u = r; u < h; u += i) c = a(t, u, u + i, e), this.imuln(n), this.words[0] + c < 0x4000000 ? this.words[0] += c : this._iaddn(c);
                if (0 !== o) {
                    var l = 1;
                    for (c = a(t, u, t.length, e), u = 0; u < o; u++) l *= e;
                    this.imuln(l), this.words[0] + c < 0x4000000 ? this.words[0] += c : this._iaddn(c)
                }
                this._strip()
            }, n.prototype.copy = function(t) {
                t.words = Array(this.length);
                for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                t.length = this.length, t.negative = this.negative, t.red = this.red
            }, n.prototype._move = function(t) {
                h(t, this)
            }, n.prototype.clone = function() {
                var t = new n(null);
                return this.copy(t), t
            }, n.prototype._expand = function(t) {
                for (; this.length < t;) this.words[this.length++] = 0;
                return this
            }, n.prototype._strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                return this._normSign()
            }, n.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
            }, "u" > typeof Symbol && "function" == typeof Symbol.for) try {
            n.prototype[Symbol.for("nodejs.util.inspect.custom")] = c
        } catch {
            n.prototype.inspect = c
        } else n.prototype.inspect = c;

        function c() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        }
        var u, l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
            f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            d = [0, 0, 0x2000000, 0x290d741, 0x1000000, 0x2e90edd, 0x39aa400, 0x267bf47, 0x1000000, 0x290d741, 1e7, 0x12959c3, 0x222c000, 0x3bd7765, 7529536, 0xadcea1, 0x1000000, 0x1704f61, 0x206fc40, 0x2cddcf9, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 0xb54ba0, 0xdaf26b, 0x1069c00, 0x138f9ad, 243e5, 0x1b4d89f, 0x2000000, 0x25528a1, 0x2b54a20, 0x3216b93, 0x39aa400];

        function p(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var i = t.length + e.length | 0;
            r.length = i, i = i - 1 | 0;
            var n = 0 | t.words[0],
                s = 0 | e.words[0],
                o = n * s,
                a = 0x3ffffff & o,
                h = o / 0x4000000 | 0;
            r.words[0] = a;
            for (var c = 1; c < i; c++) {
                for (var u = h >>> 26, l = 0x3ffffff & h, f = Math.min(c, e.length - 1), d = Math.max(0, c - t.length + 1); d <= f; d++) {
                    var p = c - d | 0;
                    u += (o = (n = 0 | t.words[p]) * (s = 0 | e.words[d]) + l) / 0x4000000 | 0, l = 0x3ffffff & o
                }
                r.words[c] = 0 | l, h = 0 | u
            }
            return 0 !== h ? r.words[c] = 0 | h : r.length--, r._strip()
        }
        n.prototype.toString = function(t, e) {
            if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                i = "";
                for (var i, n = 0, s = 0, o = 0; o < this.length; o++) {
                    var a = this.words[o],
                        h = ((a << n | s) & 0xffffff).toString(16);
                    s = a >>> 24 - n & 0xffffff, (n += 2) >= 26 && (n -= 26, o--), i = 0 !== s || o !== this.length - 1 ? l[6 - h.length] + h + i : h + i
                }
                for (0 !== s && (i = s.toString(16) + i); i.length % e != 0;) i = "0" + i;
                return 0 !== this.negative && (i = "-" + i), i
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
                var c = f[t],
                    u = d[t];
                i = "";
                var p = this.clone();
                for (p.negative = 0; !p.isZero();) {
                    var g = p.modrn(u).toString(t);
                    i = (p = p.idivn(u)).isZero() ? g + i : l[c - g.length] + g + i
                }
                for (this.isZero() && (i = "0" + i); i.length % e != 0;) i = "0" + i;
                return 0 !== this.negative && (i = "-" + i), i
            }
            r(!1, "Base should be between 2 and 36")
        }, n.prototype.toNumber = function() {
            var t = this.words[0];
            return 2 === this.length ? t += 0x4000000 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 0x10000000000000 + 0x4000000 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
        }, n.prototype.toJSON = function() {
            return this.toString(16, 2)
        }, u && (n.prototype.toBuffer = function(t, e) {
            return this.toArrayLike(u, t, e)
        }), n.prototype.toArray = function(t, e) {
            return this.toArrayLike(Array, t, e)
        }, n.prototype.toArrayLike = function(t, e, i) {
            this._strip();
            var n = this.byteLength(),
                s = i || Math.max(1, n);
            r(n <= s, "byte array longer than desired length"), r(s > 0, "Requested array length <= 0");
            var o = t.allocUnsafe ? t.allocUnsafe(s) : new t(s);
            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](o, n), o
        }, n.prototype._toArrayLikeLE = function(t, e) {
            for (var r = 0, i = 0, n = 0, s = 0; n < this.length; n++) {
                var o = this.words[n] << s | i;
                t[r++] = 255 & o, r < t.length && (t[r++] = o >> 8 & 255), r < t.length && (t[r++] = o >> 16 & 255), 6 === s ? (r < t.length && (t[r++] = o >> 24 & 255), i = 0, s = 0) : (i = o >>> 24, s += 2)
            }
            if (r < t.length)
                for (t[r++] = i; r < t.length;) t[r++] = 0
        }, n.prototype._toArrayLikeBE = function(t, e) {
            for (var r = t.length - 1, i = 0, n = 0, s = 0; n < this.length; n++) {
                var o = this.words[n] << s | i;
                t[r--] = 255 & o, r >= 0 && (t[r--] = o >> 8 & 255), r >= 0 && (t[r--] = o >> 16 & 255), 6 === s ? (r >= 0 && (t[r--] = o >> 24 & 255), i = 0, s = 0) : (i = o >>> 24, s += 2)
            }
            if (r >= 0)
                for (t[r--] = i; r >= 0;) t[r--] = 0
        }, Math.clz32 ? n.prototype._countBits = function(t) {
            return 32 - Math.clz32(t)
        } : n.prototype._countBits = function(t) {
            var e = t,
                r = 0;
            return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
        }, n.prototype._zeroBits = function(t) {
            if (0 === t) return 26;
            var e = t,
                r = 0;
            return 8191 & e || (r += 13, e >>>= 13), 127 & e || (r += 7, e >>>= 7), 15 & e || (r += 4, e >>>= 4), 3 & e || (r += 2, e >>>= 2), 1 & e || r++, r
        }, n.prototype.bitLength = function() {
            var t = this.words[this.length - 1],
                e = this._countBits(t);
            return (this.length - 1) * 26 + e
        }, n.prototype.zeroBits = function() {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e]);
                if (t += r, 26 !== r) break
            }
            return t
        }, n.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
        }, n.prototype.toTwos = function(t) {
            return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
        }, n.prototype.fromTwos = function(t) {
            return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
        }, n.prototype.isNeg = function() {
            return 0 !== this.negative
        }, n.prototype.neg = function() {
            return this.clone().ineg()
        }, n.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this
        }, n.prototype.iuor = function(t) {
            for (; this.length < t.length;) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
            return this._strip()
        }, n.prototype.ior = function(t) {
            return r((this.negative | t.negative) == 0), this.iuor(t)
        }, n.prototype.or = function(t) {
            return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
        }, n.prototype.uor = function(t) {
            return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
        }, n.prototype.iuand = function(t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
            return this.length = e.length, this._strip()
        }, n.prototype.iand = function(t) {
            return r((this.negative | t.negative) == 0), this.iuand(t)
        }, n.prototype.and = function(t) {
            return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
        }, n.prototype.uand = function(t) {
            return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
        }, n.prototype.iuxor = function(t) {
            var e, r;
            this.length > t.length ? (e = this, r = t) : (e = t, r = this);
            for (var i = 0; i < r.length; i++) this.words[i] = e.words[i] ^ r.words[i];
            if (this !== e)
                for (; i < e.length; i++) this.words[i] = e.words[i];
            return this.length = e.length, this._strip()
        }, n.prototype.ixor = function(t) {
            return r((this.negative | t.negative) == 0), this.iuxor(t)
        }, n.prototype.xor = function(t) {
            return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
        }, n.prototype.uxor = function(t) {
            return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
        }, n.prototype.inotn = function(t) {
            r("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
                i = t % 26;
            this._expand(e), i > 0 && e--;
            for (var n = 0; n < e; n++) this.words[n] = 0x3ffffff & ~this.words[n];
            return i > 0 && (this.words[n] = ~this.words[n] & 0x3ffffff >> 26 - i), this._strip()
        }, n.prototype.notn = function(t) {
            return this.clone().inotn(t)
        }, n.prototype.setn = function(t, e) {
            r("number" == typeof t && t >= 0);
            var i = t / 26 | 0,
                n = t % 26;
            return this._expand(i + 1), e ? this.words[i] = this.words[i] | 1 << n : this.words[i] = this.words[i] & ~(1 << n), this._strip()
        }, n.prototype.iadd = function(t) {
            if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
            if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
            this.length > t.length ? (r = this, i = t) : (r = t, i = this);
            for (var e, r, i, n = 0, s = 0; s < i.length; s++) e = (0 | r.words[s]) + (0 | i.words[s]) + n, this.words[s] = 0x3ffffff & e, n = e >>> 26;
            for (; 0 !== n && s < r.length; s++) e = (0 | r.words[s]) + n, this.words[s] = 0x3ffffff & e, n = e >>> 26;
            if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
            else if (r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
            return this
        }, n.prototype.add = function(t) {
            var e;
            return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
        }, n.prototype.isub = function(t) {
            if (0 !== t.negative) {
                t.negative = 0;
                var e, r, i = this.iadd(t);
                return t.negative = 1, i._normSign()
            }
            if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
            var n = this.cmp(t);
            if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            n > 0 ? (e = this, r = t) : (e = t, r = this);
            for (var s = 0, o = 0; o < r.length; o++) s = (i = (0 | e.words[o]) - (0 | r.words[o]) + s) >> 26, this.words[o] = 0x3ffffff & i;
            for (; 0 !== s && o < e.length; o++) s = (i = (0 | e.words[o]) + s) >> 26, this.words[o] = 0x3ffffff & i;
            if (0 === s && o < e.length && e !== this)
                for (; o < e.length; o++) this.words[o] = e.words[o];
            return this.length = Math.max(this.length, o), e !== this && (this.negative = 1), this._strip()
        }, n.prototype.sub = function(t) {
            return this.clone().isub(t)
        };
        var g = function(t, e, r) {
            var i, n, s, o = t.words,
                a = e.words,
                h = r.words,
                c = 0,
                u = 0 | o[0],
                l = 8191 & u,
                f = u >>> 13,
                d = 0 | o[1],
                p = 8191 & d,
                g = d >>> 13,
                m = 0 | o[2],
                y = 8191 & m,
                v = m >>> 13,
                b = 0 | o[3],
                w = 8191 & b,
                _ = b >>> 13,
                A = 0 | o[4],
                x = 8191 & A,
                E = A >>> 13,
                I = 0 | o[5],
                S = 8191 & I,
                M = I >>> 13,
                P = 0 | o[6],
                R = 8191 & P,
                C = P >>> 13,
                N = 0 | o[7],
                O = 8191 & N,
                T = N >>> 13,
                k = 0 | o[8],
                D = 8191 & k,
                q = k >>> 13,
                L = 0 | o[9],
                U = 8191 & L,
                B = L >>> 13,
                j = 0 | a[0],
                z = 8191 & j,
                F = j >>> 13,
                H = 0 | a[1],
                K = 8191 & H,
                $ = H >>> 13,
                V = 0 | a[2],
                G = 8191 & V,
                J = V >>> 13,
                Q = 0 | a[3],
                Y = 8191 & Q,
                W = Q >>> 13,
                X = 0 | a[4],
                Z = 8191 & X,
                tt = X >>> 13,
                te = 0 | a[5],
                tr = 8191 & te,
                ti = te >>> 13,
                tn = 0 | a[6],
                ts = 8191 & tn,
                to = tn >>> 13,
                ta = 0 | a[7],
                th = 8191 & ta,
                tc = ta >>> 13,
                tu = 0 | a[8],
                tl = 8191 & tu,
                tf = tu >>> 13,
                td = 0 | a[9],
                tp = 8191 & td,
                tg = td >>> 13;
            r.negative = t.negative ^ e.negative, r.length = 19, i = Math.imul(l, z), n = (n = Math.imul(l, F)) + Math.imul(f, z) | 0, s = Math.imul(f, F);
            var tm = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tm >>> 26) | 0, tm &= 0x3ffffff, i = Math.imul(p, z), n = (n = Math.imul(p, F)) + Math.imul(g, z) | 0, s = Math.imul(g, F), i = i + Math.imul(l, K) | 0, n = (n = n + Math.imul(l, $) | 0) + Math.imul(f, K) | 0, s = s + Math.imul(f, $) | 0;
            var ty = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (ty >>> 26) | 0, ty &= 0x3ffffff, i = Math.imul(y, z), n = (n = Math.imul(y, F)) + Math.imul(v, z) | 0, s = Math.imul(v, F), i = i + Math.imul(p, K) | 0, n = (n = n + Math.imul(p, $) | 0) + Math.imul(g, K) | 0, s = s + Math.imul(g, $) | 0, i = i + Math.imul(l, G) | 0, n = (n = n + Math.imul(l, J) | 0) + Math.imul(f, G) | 0, s = s + Math.imul(f, J) | 0;
            var tv = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tv >>> 26) | 0, tv &= 0x3ffffff, i = Math.imul(w, z), n = (n = Math.imul(w, F)) + Math.imul(_, z) | 0, s = Math.imul(_, F), i = i + Math.imul(y, K) | 0, n = (n = n + Math.imul(y, $) | 0) + Math.imul(v, K) | 0, s = s + Math.imul(v, $) | 0, i = i + Math.imul(p, G) | 0, n = (n = n + Math.imul(p, J) | 0) + Math.imul(g, G) | 0, s = s + Math.imul(g, J) | 0, i = i + Math.imul(l, Y) | 0, n = (n = n + Math.imul(l, W) | 0) + Math.imul(f, Y) | 0, s = s + Math.imul(f, W) | 0;
            var tb = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tb >>> 26) | 0, tb &= 0x3ffffff, i = Math.imul(x, z), n = (n = Math.imul(x, F)) + Math.imul(E, z) | 0, s = Math.imul(E, F), i = i + Math.imul(w, K) | 0, n = (n = n + Math.imul(w, $) | 0) + Math.imul(_, K) | 0, s = s + Math.imul(_, $) | 0, i = i + Math.imul(y, G) | 0, n = (n = n + Math.imul(y, J) | 0) + Math.imul(v, G) | 0, s = s + Math.imul(v, J) | 0, i = i + Math.imul(p, Y) | 0, n = (n = n + Math.imul(p, W) | 0) + Math.imul(g, Y) | 0, s = s + Math.imul(g, W) | 0, i = i + Math.imul(l, Z) | 0, n = (n = n + Math.imul(l, tt) | 0) + Math.imul(f, Z) | 0, s = s + Math.imul(f, tt) | 0;
            var tw = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tw >>> 26) | 0, tw &= 0x3ffffff, i = Math.imul(S, z), n = (n = Math.imul(S, F)) + Math.imul(M, z) | 0, s = Math.imul(M, F), i = i + Math.imul(x, K) | 0, n = (n = n + Math.imul(x, $) | 0) + Math.imul(E, K) | 0, s = s + Math.imul(E, $) | 0, i = i + Math.imul(w, G) | 0, n = (n = n + Math.imul(w, J) | 0) + Math.imul(_, G) | 0, s = s + Math.imul(_, J) | 0, i = i + Math.imul(y, Y) | 0, n = (n = n + Math.imul(y, W) | 0) + Math.imul(v, Y) | 0, s = s + Math.imul(v, W) | 0, i = i + Math.imul(p, Z) | 0, n = (n = n + Math.imul(p, tt) | 0) + Math.imul(g, Z) | 0, s = s + Math.imul(g, tt) | 0, i = i + Math.imul(l, tr) | 0, n = (n = n + Math.imul(l, ti) | 0) + Math.imul(f, tr) | 0, s = s + Math.imul(f, ti) | 0;
            var t_ = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 0x3ffffff, i = Math.imul(R, z), n = (n = Math.imul(R, F)) + Math.imul(C, z) | 0, s = Math.imul(C, F), i = i + Math.imul(S, K) | 0, n = (n = n + Math.imul(S, $) | 0) + Math.imul(M, K) | 0, s = s + Math.imul(M, $) | 0, i = i + Math.imul(x, G) | 0, n = (n = n + Math.imul(x, J) | 0) + Math.imul(E, G) | 0, s = s + Math.imul(E, J) | 0, i = i + Math.imul(w, Y) | 0, n = (n = n + Math.imul(w, W) | 0) + Math.imul(_, Y) | 0, s = s + Math.imul(_, W) | 0, i = i + Math.imul(y, Z) | 0, n = (n = n + Math.imul(y, tt) | 0) + Math.imul(v, Z) | 0, s = s + Math.imul(v, tt) | 0, i = i + Math.imul(p, tr) | 0, n = (n = n + Math.imul(p, ti) | 0) + Math.imul(g, tr) | 0, s = s + Math.imul(g, ti) | 0, i = i + Math.imul(l, ts) | 0, n = (n = n + Math.imul(l, to) | 0) + Math.imul(f, ts) | 0, s = s + Math.imul(f, to) | 0;
            var tA = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tA >>> 26) | 0, tA &= 0x3ffffff, i = Math.imul(O, z), n = (n = Math.imul(O, F)) + Math.imul(T, z) | 0, s = Math.imul(T, F), i = i + Math.imul(R, K) | 0, n = (n = n + Math.imul(R, $) | 0) + Math.imul(C, K) | 0, s = s + Math.imul(C, $) | 0, i = i + Math.imul(S, G) | 0, n = (n = n + Math.imul(S, J) | 0) + Math.imul(M, G) | 0, s = s + Math.imul(M, J) | 0, i = i + Math.imul(x, Y) | 0, n = (n = n + Math.imul(x, W) | 0) + Math.imul(E, Y) | 0, s = s + Math.imul(E, W) | 0, i = i + Math.imul(w, Z) | 0, n = (n = n + Math.imul(w, tt) | 0) + Math.imul(_, Z) | 0, s = s + Math.imul(_, tt) | 0, i = i + Math.imul(y, tr) | 0, n = (n = n + Math.imul(y, ti) | 0) + Math.imul(v, tr) | 0, s = s + Math.imul(v, ti) | 0, i = i + Math.imul(p, ts) | 0, n = (n = n + Math.imul(p, to) | 0) + Math.imul(g, ts) | 0, s = s + Math.imul(g, to) | 0, i = i + Math.imul(l, th) | 0, n = (n = n + Math.imul(l, tc) | 0) + Math.imul(f, th) | 0, s = s + Math.imul(f, tc) | 0;
            var tx = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tx >>> 26) | 0, tx &= 0x3ffffff, i = Math.imul(D, z), n = (n = Math.imul(D, F)) + Math.imul(q, z) | 0, s = Math.imul(q, F), i = i + Math.imul(O, K) | 0, n = (n = n + Math.imul(O, $) | 0) + Math.imul(T, K) | 0, s = s + Math.imul(T, $) | 0, i = i + Math.imul(R, G) | 0, n = (n = n + Math.imul(R, J) | 0) + Math.imul(C, G) | 0, s = s + Math.imul(C, J) | 0, i = i + Math.imul(S, Y) | 0, n = (n = n + Math.imul(S, W) | 0) + Math.imul(M, Y) | 0, s = s + Math.imul(M, W) | 0, i = i + Math.imul(x, Z) | 0, n = (n = n + Math.imul(x, tt) | 0) + Math.imul(E, Z) | 0, s = s + Math.imul(E, tt) | 0, i = i + Math.imul(w, tr) | 0, n = (n = n + Math.imul(w, ti) | 0) + Math.imul(_, tr) | 0, s = s + Math.imul(_, ti) | 0, i = i + Math.imul(y, ts) | 0, n = (n = n + Math.imul(y, to) | 0) + Math.imul(v, ts) | 0, s = s + Math.imul(v, to) | 0, i = i + Math.imul(p, th) | 0, n = (n = n + Math.imul(p, tc) | 0) + Math.imul(g, th) | 0, s = s + Math.imul(g, tc) | 0, i = i + Math.imul(l, tl) | 0, n = (n = n + Math.imul(l, tf) | 0) + Math.imul(f, tl) | 0, s = s + Math.imul(f, tf) | 0;
            var tE = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tE >>> 26) | 0, tE &= 0x3ffffff, i = Math.imul(U, z), n = (n = Math.imul(U, F)) + Math.imul(B, z) | 0, s = Math.imul(B, F), i = i + Math.imul(D, K) | 0, n = (n = n + Math.imul(D, $) | 0) + Math.imul(q, K) | 0, s = s + Math.imul(q, $) | 0, i = i + Math.imul(O, G) | 0, n = (n = n + Math.imul(O, J) | 0) + Math.imul(T, G) | 0, s = s + Math.imul(T, J) | 0, i = i + Math.imul(R, Y) | 0, n = (n = n + Math.imul(R, W) | 0) + Math.imul(C, Y) | 0, s = s + Math.imul(C, W) | 0, i = i + Math.imul(S, Z) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(M, Z) | 0, s = s + Math.imul(M, tt) | 0, i = i + Math.imul(x, tr) | 0, n = (n = n + Math.imul(x, ti) | 0) + Math.imul(E, tr) | 0, s = s + Math.imul(E, ti) | 0, i = i + Math.imul(w, ts) | 0, n = (n = n + Math.imul(w, to) | 0) + Math.imul(_, ts) | 0, s = s + Math.imul(_, to) | 0, i = i + Math.imul(y, th) | 0, n = (n = n + Math.imul(y, tc) | 0) + Math.imul(v, th) | 0, s = s + Math.imul(v, tc) | 0, i = i + Math.imul(p, tl) | 0, n = (n = n + Math.imul(p, tf) | 0) + Math.imul(g, tl) | 0, s = s + Math.imul(g, tf) | 0, i = i + Math.imul(l, tp) | 0, n = (n = n + Math.imul(l, tg) | 0) + Math.imul(f, tp) | 0, s = s + Math.imul(f, tg) | 0;
            var tI = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tI >>> 26) | 0, tI &= 0x3ffffff, i = Math.imul(U, K), n = (n = Math.imul(U, $)) + Math.imul(B, K) | 0, s = Math.imul(B, $), i = i + Math.imul(D, G) | 0, n = (n = n + Math.imul(D, J) | 0) + Math.imul(q, G) | 0, s = s + Math.imul(q, J) | 0, i = i + Math.imul(O, Y) | 0, n = (n = n + Math.imul(O, W) | 0) + Math.imul(T, Y) | 0, s = s + Math.imul(T, W) | 0, i = i + Math.imul(R, Z) | 0, n = (n = n + Math.imul(R, tt) | 0) + Math.imul(C, Z) | 0, s = s + Math.imul(C, tt) | 0, i = i + Math.imul(S, tr) | 0, n = (n = n + Math.imul(S, ti) | 0) + Math.imul(M, tr) | 0, s = s + Math.imul(M, ti) | 0, i = i + Math.imul(x, ts) | 0, n = (n = n + Math.imul(x, to) | 0) + Math.imul(E, ts) | 0, s = s + Math.imul(E, to) | 0, i = i + Math.imul(w, th) | 0, n = (n = n + Math.imul(w, tc) | 0) + Math.imul(_, th) | 0, s = s + Math.imul(_, tc) | 0, i = i + Math.imul(y, tl) | 0, n = (n = n + Math.imul(y, tf) | 0) + Math.imul(v, tl) | 0, s = s + Math.imul(v, tf) | 0, i = i + Math.imul(p, tp) | 0, n = (n = n + Math.imul(p, tg) | 0) + Math.imul(g, tp) | 0, s = s + Math.imul(g, tg) | 0;
            var tS = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tS >>> 26) | 0, tS &= 0x3ffffff, i = Math.imul(U, G), n = (n = Math.imul(U, J)) + Math.imul(B, G) | 0, s = Math.imul(B, J), i = i + Math.imul(D, Y) | 0, n = (n = n + Math.imul(D, W) | 0) + Math.imul(q, Y) | 0, s = s + Math.imul(q, W) | 0, i = i + Math.imul(O, Z) | 0, n = (n = n + Math.imul(O, tt) | 0) + Math.imul(T, Z) | 0, s = s + Math.imul(T, tt) | 0, i = i + Math.imul(R, tr) | 0, n = (n = n + Math.imul(R, ti) | 0) + Math.imul(C, tr) | 0, s = s + Math.imul(C, ti) | 0, i = i + Math.imul(S, ts) | 0, n = (n = n + Math.imul(S, to) | 0) + Math.imul(M, ts) | 0, s = s + Math.imul(M, to) | 0, i = i + Math.imul(x, th) | 0, n = (n = n + Math.imul(x, tc) | 0) + Math.imul(E, th) | 0, s = s + Math.imul(E, tc) | 0, i = i + Math.imul(w, tl) | 0, n = (n = n + Math.imul(w, tf) | 0) + Math.imul(_, tl) | 0, s = s + Math.imul(_, tf) | 0, i = i + Math.imul(y, tp) | 0, n = (n = n + Math.imul(y, tg) | 0) + Math.imul(v, tp) | 0, s = s + Math.imul(v, tg) | 0;
            var tM = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tM >>> 26) | 0, tM &= 0x3ffffff, i = Math.imul(U, Y), n = (n = Math.imul(U, W)) + Math.imul(B, Y) | 0, s = Math.imul(B, W), i = i + Math.imul(D, Z) | 0, n = (n = n + Math.imul(D, tt) | 0) + Math.imul(q, Z) | 0, s = s + Math.imul(q, tt) | 0, i = i + Math.imul(O, tr) | 0, n = (n = n + Math.imul(O, ti) | 0) + Math.imul(T, tr) | 0, s = s + Math.imul(T, ti) | 0, i = i + Math.imul(R, ts) | 0, n = (n = n + Math.imul(R, to) | 0) + Math.imul(C, ts) | 0, s = s + Math.imul(C, to) | 0, i = i + Math.imul(S, th) | 0, n = (n = n + Math.imul(S, tc) | 0) + Math.imul(M, th) | 0, s = s + Math.imul(M, tc) | 0, i = i + Math.imul(x, tl) | 0, n = (n = n + Math.imul(x, tf) | 0) + Math.imul(E, tl) | 0, s = s + Math.imul(E, tf) | 0, i = i + Math.imul(w, tp) | 0, n = (n = n + Math.imul(w, tg) | 0) + Math.imul(_, tp) | 0, s = s + Math.imul(_, tg) | 0;
            var tP = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tP >>> 26) | 0, tP &= 0x3ffffff, i = Math.imul(U, Z), n = (n = Math.imul(U, tt)) + Math.imul(B, Z) | 0, s = Math.imul(B, tt), i = i + Math.imul(D, tr) | 0, n = (n = n + Math.imul(D, ti) | 0) + Math.imul(q, tr) | 0, s = s + Math.imul(q, ti) | 0, i = i + Math.imul(O, ts) | 0, n = (n = n + Math.imul(O, to) | 0) + Math.imul(T, ts) | 0, s = s + Math.imul(T, to) | 0, i = i + Math.imul(R, th) | 0, n = (n = n + Math.imul(R, tc) | 0) + Math.imul(C, th) | 0, s = s + Math.imul(C, tc) | 0, i = i + Math.imul(S, tl) | 0, n = (n = n + Math.imul(S, tf) | 0) + Math.imul(M, tl) | 0, s = s + Math.imul(M, tf) | 0, i = i + Math.imul(x, tp) | 0, n = (n = n + Math.imul(x, tg) | 0) + Math.imul(E, tp) | 0, s = s + Math.imul(E, tg) | 0;
            var tR = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tR >>> 26) | 0, tR &= 0x3ffffff, i = Math.imul(U, tr), n = (n = Math.imul(U, ti)) + Math.imul(B, tr) | 0, s = Math.imul(B, ti), i = i + Math.imul(D, ts) | 0, n = (n = n + Math.imul(D, to) | 0) + Math.imul(q, ts) | 0, s = s + Math.imul(q, to) | 0, i = i + Math.imul(O, th) | 0, n = (n = n + Math.imul(O, tc) | 0) + Math.imul(T, th) | 0, s = s + Math.imul(T, tc) | 0, i = i + Math.imul(R, tl) | 0, n = (n = n + Math.imul(R, tf) | 0) + Math.imul(C, tl) | 0, s = s + Math.imul(C, tf) | 0, i = i + Math.imul(S, tp) | 0, n = (n = n + Math.imul(S, tg) | 0) + Math.imul(M, tp) | 0, s = s + Math.imul(M, tg) | 0;
            var tC = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tC >>> 26) | 0, tC &= 0x3ffffff, i = Math.imul(U, ts), n = (n = Math.imul(U, to)) + Math.imul(B, ts) | 0, s = Math.imul(B, to), i = i + Math.imul(D, th) | 0, n = (n = n + Math.imul(D, tc) | 0) + Math.imul(q, th) | 0, s = s + Math.imul(q, tc) | 0, i = i + Math.imul(O, tl) | 0, n = (n = n + Math.imul(O, tf) | 0) + Math.imul(T, tl) | 0, s = s + Math.imul(T, tf) | 0, i = i + Math.imul(R, tp) | 0, n = (n = n + Math.imul(R, tg) | 0) + Math.imul(C, tp) | 0, s = s + Math.imul(C, tg) | 0;
            var tN = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tN >>> 26) | 0, tN &= 0x3ffffff, i = Math.imul(U, th), n = (n = Math.imul(U, tc)) + Math.imul(B, th) | 0, s = Math.imul(B, tc), i = i + Math.imul(D, tl) | 0, n = (n = n + Math.imul(D, tf) | 0) + Math.imul(q, tl) | 0, s = s + Math.imul(q, tf) | 0, i = i + Math.imul(O, tp) | 0, n = (n = n + Math.imul(O, tg) | 0) + Math.imul(T, tp) | 0, s = s + Math.imul(T, tg) | 0;
            var tO = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tO >>> 26) | 0, tO &= 0x3ffffff, i = Math.imul(U, tl), n = (n = Math.imul(U, tf)) + Math.imul(B, tl) | 0, s = Math.imul(B, tf), i = i + Math.imul(D, tp) | 0, n = (n = n + Math.imul(D, tg) | 0) + Math.imul(q, tp) | 0, s = s + Math.imul(q, tg) | 0;
            var tT = (c + i | 0) + ((8191 & n) << 13) | 0;
            c = (s + (n >>> 13) | 0) + (tT >>> 26) | 0, tT &= 0x3ffffff, i = Math.imul(U, tp), n = (n = Math.imul(U, tg)) + Math.imul(B, tp) | 0, s = Math.imul(B, tg);
            var tk = (c + i | 0) + ((8191 & n) << 13) | 0;
            return c = (s + (n >>> 13) | 0) + (tk >>> 26) | 0, tk &= 0x3ffffff, h[0] = tm, h[1] = ty, h[2] = tv, h[3] = tb, h[4] = tw, h[5] = t_, h[6] = tA, h[7] = tx, h[8] = tE, h[9] = tI, h[10] = tS, h[11] = tM, h[12] = tP, h[13] = tR, h[14] = tC, h[15] = tN, h[16] = tO, h[17] = tT, h[18] = tk, 0 !== c && (h[19] = c, r.length++), r
        };

        function m(t, e, r) {
            r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
            for (var i = 0, n = 0, s = 0; s < r.length - 1; s++) {
                var o = n;
                n = 0;
                for (var a = 0x3ffffff & i, h = Math.min(s, e.length - 1), c = Math.max(0, s - t.length + 1); c <= h; c++) {
                    var u = s - c,
                        l = (0 | t.words[u]) * (0 | e.words[c]),
                        f = 0x3ffffff & l;
                    o = o + (l / 0x4000000 | 0) | 0, a = 0x3ffffff & (f = f + a | 0), n += (o = o + (f >>> 26) | 0) >>> 26, o &= 0x3ffffff
                }
                r.words[s] = a, i = o, o = n
            }
            return 0 !== i ? r.words[s] = i : r.length--, r._strip()
        }
        Math.imul || (g = p), n.prototype.mulTo = function(t, e) {
            var r, i = this.length + t.length;
            return 10 === this.length && 10 === t.length ? r = g(this, t, e) : i < 63 ? r = p(this, t, e) : (i < 1024, r = m(this, t, e)), r
        }, n.prototype.mul = function(t) {
            var e = new n(null);
            return e.words = Array(this.length + t.length), this.mulTo(t, e)
        }, n.prototype.mulf = function(t) {
            var e = new n(null);
            return e.words = Array(this.length + t.length), m(this, t, e)
        }, n.prototype.imul = function(t) {
            return this.clone().mulTo(t, this)
        }, n.prototype.imuln = function(t) {
            var e = t < 0;
            e && (t = -t), r("number" == typeof t), r(t < 0x4000000);
            for (var i = 0, n = 0; n < this.length; n++) {
                var s = (0 | this.words[n]) * t,
                    o = (0x3ffffff & s) + (0x3ffffff & i);
                i >>= 26, i += (s / 0x4000000 | 0) + (o >>> 26), this.words[n] = 0x3ffffff & o
            }
            return 0 !== i && (this.words[n] = i, this.length++), e ? this.ineg() : this
        }, n.prototype.muln = function(t) {
            return this.clone().imuln(t)
        }, n.prototype.sqr = function() {
            return this.mul(this)
        }, n.prototype.isqr = function() {
            return this.imul(this.clone())
        }, n.prototype.pow = function(t) {
            var e = function(t) {
                for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                    var i = r / 26 | 0,
                        n = r % 26;
                    e[r] = t.words[i] >>> n & 1
                }
                return e
            }(t);
            if (0 === e.length) return new n(1);
            for (var r = this, i = 0; i < e.length && 0 === e[i]; i++, r = r.sqr());
            if (++i < e.length)
                for (var s = r.sqr(); i < e.length; i++, s = s.sqr()) 0 !== e[i] && (r = r.mul(s));
            return r
        }, n.prototype.iushln = function(t) {
            r("number" == typeof t && t >= 0);
            var e, i = t % 26,
                n = (t - i) / 26,
                s = 0x3ffffff >>> 26 - i << 26 - i;
            if (0 !== i) {
                var o = 0;
                for (e = 0; e < this.length; e++) {
                    var a = this.words[e] & s,
                        h = (0 | this.words[e]) - a << i;
                    this.words[e] = h | o, o = a >>> 26 - i
                }
                o && (this.words[e] = o, this.length++)
            }
            if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n
            }
            return this._strip()
        }, n.prototype.ishln = function(t) {
            return r(0 === this.negative), this.iushln(t)
        }, n.prototype.iushrn = function(t, e, i) {
            r("number" == typeof t && t >= 0);
            var n = e ? (e - e % 26) / 26 : 0,
                s = t % 26,
                o = Math.min((t - s) / 26, this.length),
                a = 0x3ffffff ^ 0x3ffffff >>> s << s;
            if (n -= o, n = Math.max(0, n), i) {
                for (var h = 0; h < o; h++) i.words[h] = this.words[h];
                i.length = o
            }
            if (0 !== o)
                if (this.length > o)
                    for (this.length -= o, h = 0; h < this.length; h++) this.words[h] = this.words[h + o];
                else this.words[0] = 0, this.length = 1;
            var c = 0;
            for (h = this.length - 1; h >= 0 && (0 !== c || h >= n); h--) {
                var u = 0 | this.words[h];
                this.words[h] = c << 26 - s | u >>> s, c = u & a
            }
            return i && 0 !== c && (i.words[i.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
        }, n.prototype.ishrn = function(t, e, i) {
            return r(0 === this.negative), this.iushrn(t, e, i)
        }, n.prototype.shln = function(t) {
            return this.clone().ishln(t)
        }, n.prototype.ushln = function(t) {
            return this.clone().iushln(t)
        }, n.prototype.shrn = function(t) {
            return this.clone().ishrn(t)
        }, n.prototype.ushrn = function(t) {
            return this.clone().iushrn(t)
        }, n.prototype.testn = function(t) {
            r("number" == typeof t && t >= 0);
            var e = t % 26,
                i = (t - e) / 26;
            return !(this.length <= i) && !!(this.words[i] & 1 << e)
        }, n.prototype.imaskn = function(t) {
            r("number" == typeof t && t >= 0);
            var e = t % 26,
                i = (t - e) / 26;
            return (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) ? this : (0 !== e && i++, this.length = Math.min(i, this.length), 0 !== e && (this.words[this.length - 1] &= 0x3ffffff ^ 0x3ffffff >>> e << e), this._strip())
        }, n.prototype.maskn = function(t) {
            return this.clone().imaskn(t)
        }, n.prototype.iaddn = function(t) {
            return r("number" == typeof t), r(t < 0x4000000), t < 0 ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(t), this.negative = 1), this) : this._iaddn(t)
        }, n.prototype._iaddn = function(t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 0x4000000; e++) this.words[e] -= 0x4000000, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
            return this.length = Math.max(this.length, e + 1), this
        }, n.prototype.isubn = function(t) {
            if (r("number" == typeof t), r(t < 0x4000000), t < 0) return this.iaddn(-t);
            if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
            if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
            else
                for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 0x4000000, this.words[e + 1] -= 1;
            return this._strip()
        }, n.prototype.addn = function(t) {
            return this.clone().iaddn(t)
        }, n.prototype.subn = function(t) {
            return this.clone().isubn(t)
        }, n.prototype.iabs = function() {
            return this.negative = 0, this
        }, n.prototype.abs = function() {
            return this.clone().iabs()
        }, n.prototype._ishlnsubmul = function(t, e, i) {
            var n, s = t.length + i;
            this._expand(s);
            var o, a = 0;
            for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + i]) + a;
                var h = (0 | t.words[n]) * e;
                o -= 0x3ffffff & h, a = (o >> 26) - (h / 0x4000000 | 0), this.words[n + i] = 0x3ffffff & o
            }
            for (; n < this.length - i; n++) a = (o = (0 | this.words[n + i]) + a) >> 26, this.words[n + i] = 0x3ffffff & o;
            if (0 === a) return this._strip();
            for (r(-1 === a), a = 0, n = 0; n < this.length; n++) a = (o = -(0 | this.words[n]) + a) >> 26, this.words[n] = 0x3ffffff & o;
            return this.negative = 1, this._strip()
        }, n.prototype._wordDiv = function(t, e) {
            var r = this.length - t.length,
                i = this.clone(),
                s = t,
                o = 0 | s.words[s.length - 1];
            0 != (r = 26 - this._countBits(o)) && (s = s.ushln(r), i.iushln(r), o = 0 | s.words[s.length - 1]);
            var a, h = i.length - s.length;
            if ("mod" !== e) {
                (a = new n(null)).length = h + 1, a.words = Array(a.length);
                for (var c = 0; c < a.length; c++) a.words[c] = 0
            }
            var u = i.clone()._ishlnsubmul(s, 1, h);
            0 === u.negative && (i = u, a && (a.words[h] = 1));
            for (var l = h - 1; l >= 0; l--) {
                var f = (0 | i.words[s.length + l]) * 0x4000000 + (0 | i.words[s.length + l - 1]);
                for (f = Math.min(f / o | 0, 0x3ffffff), i._ishlnsubmul(s, f, l); 0 !== i.negative;) f--, i.negative = 0, i._ishlnsubmul(s, 1, l), i.isZero() || (i.negative ^= 1);
                a && (a.words[l] = f)
            }
            return a && a._strip(), i._strip(), "div" !== e && 0 !== r && i.iushrn(r), {
                div: a || null,
                mod: i
            }
        }, n.prototype.divmod = function(t, e, i) {
            var s, o, a;
            return (r(!t.isZero()), this.isZero()) ? {
                div: new n(0),
                mod: new n(0)
            } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (s = a.div.neg()), "div" !== e && (o = a.mod.neg(), i && 0 !== o.negative && o.iadd(t)), {
                div: s,
                mod: o
            }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (s = a.div.neg()), {
                div: s,
                mod: a.mod
            }) : this.negative & t.negative ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (o = a.mod.neg(), i && 0 !== o.negative && o.isub(t)), {
                div: a.div,
                mod: o
            }) : t.length > this.length || 0 > this.cmp(t) ? {
                div: new n(0),
                mod: this
            } : 1 === t.length ? "div" === e ? {
                div: this.divn(t.words[0]),
                mod: null
            } : "mod" === e ? {
                div: null,
                mod: new n(this.modrn(t.words[0]))
            } : {
                div: this.divn(t.words[0]),
                mod: new n(this.modrn(t.words[0]))
            } : this._wordDiv(t, e)
        }, n.prototype.div = function(t) {
            return this.divmod(t, "div", !1).div
        }, n.prototype.mod = function(t) {
            return this.divmod(t, "mod", !1).mod
        }, n.prototype.umod = function(t) {
            return this.divmod(t, "mod", !0).mod
        }, n.prototype.divRound = function(t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                s = r.cmp(i);
            return s < 0 || 1 === n && 0 === s ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
        }, n.prototype.modrn = function(t) {
            var e = t < 0;
            e && (t = -t), r(t <= 0x3ffffff);
            for (var i = 0x4000000 % t, n = 0, s = this.length - 1; s >= 0; s--) n = (i * n + (0 | this.words[s])) % t;
            return e ? -n : n
        }, n.prototype.modn = function(t) {
            return this.modrn(t)
        }, n.prototype.idivn = function(t) {
            var e = t < 0;
            e && (t = -t), r(t <= 0x3ffffff);
            for (var i = 0, n = this.length - 1; n >= 0; n--) {
                var s = (0 | this.words[n]) + 0x4000000 * i;
                this.words[n] = s / t | 0, i = s % t
            }
            return this._strip(), e ? this.ineg() : this
        }, n.prototype.divn = function(t) {
            return this.clone().idivn(t)
        }, n.prototype.egcd = function(t) {
            r(0 === t.negative), r(!t.isZero());
            var e = this,
                i = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (var s = new n(1), o = new n(0), a = new n(0), h = new n(1), c = 0; e.isEven() && i.isEven();) e.iushrn(1), i.iushrn(1), ++c;
            for (var u = i.clone(), l = e.clone(); !e.isZero();) {
                for (var f = 0, d = 1; !(e.words[0] & d) && f < 26; ++f, d <<= 1);
                if (f > 0)
                    for (e.iushrn(f); f-- > 0;)(s.isOdd() || o.isOdd()) && (s.iadd(u), o.isub(l)), s.iushrn(1), o.iushrn(1);
                for (var p = 0, g = 1; !(i.words[0] & g) && p < 26; ++p, g <<= 1);
                if (p > 0)
                    for (i.iushrn(p); p-- > 0;)(a.isOdd() || h.isOdd()) && (a.iadd(u), h.isub(l)), a.iushrn(1), h.iushrn(1);
                e.cmp(i) >= 0 ? (e.isub(i), s.isub(a), o.isub(h)) : (i.isub(e), a.isub(s), h.isub(o))
            }
            return {
                a: a,
                b: h,
                gcd: i.iushln(c)
            }
        }, n.prototype._invmp = function(t) {
            r(0 === t.negative), r(!t.isZero());
            var e, i = this,
                s = t.clone();
            i = 0 !== i.negative ? i.umod(t) : i.clone();
            for (var o = new n(1), a = new n(0), h = s.clone(); i.cmpn(1) > 0 && s.cmpn(1) > 0;) {
                for (var c = 0, u = 1; !(i.words[0] & u) && c < 26; ++c, u <<= 1);
                if (c > 0)
                    for (i.iushrn(c); c-- > 0;) o.isOdd() && o.iadd(h), o.iushrn(1);
                for (var l = 0, f = 1; !(s.words[0] & f) && l < 26; ++l, f <<= 1);
                if (l > 0)
                    for (s.iushrn(l); l-- > 0;) a.isOdd() && a.iadd(h), a.iushrn(1);
                i.cmp(s) >= 0 ? (i.isub(s), o.isub(a)) : (s.isub(i), a.isub(o))
            }
            return 0 > (e = 0 === i.cmpn(1) ? o : a).cmpn(0) && e.iadd(t), e
        }, n.prototype.gcd = function(t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
                r = t.clone();
            e.negative = 0, r.negative = 0;
            for (var i = 0; e.isEven() && r.isEven(); i++) e.iushrn(1), r.iushrn(1);
            for (;;) {
                for (; e.isEven();) e.iushrn(1);
                for (; r.isEven();) r.iushrn(1);
                var n = e.cmp(r);
                if (n < 0) {
                    var s = e;
                    e = r, r = s
                } else if (0 === n || 0 === r.cmpn(1)) break;
                e.isub(r)
            }
            return r.iushln(i)
        }, n.prototype.invm = function(t) {
            return this.egcd(t).a.umod(t)
        }, n.prototype.isEven = function() {
            return (1 & this.words[0]) == 0
        }, n.prototype.isOdd = function() {
            return (1 & this.words[0]) == 1
        }, n.prototype.andln = function(t) {
            return this.words[0] & t
        }, n.prototype.bincn = function(t) {
            r("number" == typeof t);
            var e = t % 26,
                i = (t - e) / 26,
                n = 1 << e;
            if (this.length <= i) return this._expand(i + 1), this.words[i] |= n, this;
            for (var s = n, o = i; 0 !== s && o < this.length; o++) {
                var a = 0 | this.words[o];
                a += s, s = a >>> 26, a &= 0x3ffffff, this.words[o] = a
            }
            return 0 !== s && (this.words[o] = s, this.length++), this
        }, n.prototype.isZero = function() {
            return 1 === this.length && 0 === this.words[0]
        }, n.prototype.cmpn = function(t) {
            var e, i = t < 0;
            if (0 !== this.negative && !i) return -1;
            if (0 === this.negative && i) return 1;
            if (this._strip(), this.length > 1) e = 1;
            else {
                i && (t = -t), r(t <= 0x3ffffff, "Number is too big");
                var n = 0 | this.words[0];
                e = n === t ? 0 : n < t ? -1 : 1
            }
            return 0 !== this.negative ? 0 | -e : e
        }, n.prototype.cmp = function(t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e
        }, n.prototype.ucmp = function(t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var i = 0 | this.words[r],
                    n = 0 | t.words[r];
                if (i !== n) {
                    i < n ? e = -1 : i > n && (e = 1);
                    break
                }
            }
            return e
        }, n.prototype.gtn = function(t) {
            return 1 === this.cmpn(t)
        }, n.prototype.gt = function(t) {
            return 1 === this.cmp(t)
        }, n.prototype.gten = function(t) {
            return this.cmpn(t) >= 0
        }, n.prototype.gte = function(t) {
            return this.cmp(t) >= 0
        }, n.prototype.ltn = function(t) {
            return -1 === this.cmpn(t)
        }, n.prototype.lt = function(t) {
            return -1 === this.cmp(t)
        }, n.prototype.lten = function(t) {
            return 0 >= this.cmpn(t)
        }, n.prototype.lte = function(t) {
            return 0 >= this.cmp(t)
        }, n.prototype.eqn = function(t) {
            return 0 === this.cmpn(t)
        }, n.prototype.eq = function(t) {
            return 0 === this.cmp(t)
        }, n.red = function(t) {
            return new x(t)
        }, n.prototype.toRed = function(t) {
            return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
        }, n.prototype.fromRed = function() {
            return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
        }, n.prototype._forceRed = function(t) {
            return this.red = t, this
        }, n.prototype.forceRed = function(t) {
            return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
        }, n.prototype.redAdd = function(t) {
            return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
        }, n.prototype.redIAdd = function(t) {
            return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
        }, n.prototype.redSub = function(t) {
            return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
        }, n.prototype.redISub = function(t) {
            return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
        }, n.prototype.redShl = function(t) {
            return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
        }, n.prototype.redMul = function(t) {
            return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
        }, n.prototype.redIMul = function(t) {
            return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
        }, n.prototype.redSqr = function() {
            return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
        }, n.prototype.redISqr = function() {
            return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
        }, n.prototype.redSqrt = function() {
            return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
        }, n.prototype.redInvm = function() {
            return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
        }, n.prototype.redNeg = function() {
            return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
        }, n.prototype.redPow = function(t) {
            return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
        };
        var y = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };

        function v(t, e) {
            this.name = t, this.p = new n(e, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
        }

        function b() {
            v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }

        function w() {
            v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }

        function _() {
            v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }

        function A() {
            v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }

        function x(t) {
            if ("string" == typeof t) {
                var e = n._prime(t);
                this.m = e.p, this.prime = e
            } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
        }

        function E(t) {
            x.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
        }
        v.prototype._tmp = function() {
            var t = new n(null);
            return t.words = Array(Math.ceil(this.n / 13)), t
        }, v.prototype.ireduce = function(t) {
            var e, r = t;
            do this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (e > this.n) var i = e < this.n ? -1 : r.ucmp(this.p);
            return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
        }, v.prototype.split = function(t, e) {
            t.iushrn(this.n, 0, e)
        }, v.prototype.imulK = function(t) {
            return t.imul(this.k)
        }, i(b, v), b.prototype.split = function(t, e) {
            for (var r = Math.min(t.length, 9), i = 0; i < r; i++) e.words[i] = t.words[i];
            if (e.length = r, t.length <= 9) {
                t.words[0] = 0, t.length = 1;
                return
            }
            var n = t.words[9];
            for (e.words[e.length++] = 4194303 & n, i = 10; i < t.length; i++) {
                var s = 0 | t.words[i];
                t.words[i - 10] = (4194303 & s) << 4 | n >>> 22, n = s
            }
            n >>>= 22, t.words[i - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
        }, b.prototype.imulK = function(t) {
            t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
            for (var e = 0, r = 0; r < t.length; r++) {
                var i = 0 | t.words[r];
                e += 977 * i, t.words[r] = 0x3ffffff & e, e = 64 * i + (e / 0x4000000 | 0)
            }
            return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
        }, i(w, v), i(_, v), i(A, v), A.prototype.imulK = function(t) {
            for (var e = 0, r = 0; r < t.length; r++) {
                var i = (0 | t.words[r]) * 19 + e,
                    n = 0x3ffffff & i;
                i >>>= 26, t.words[r] = n, e = i
            }
            return 0 !== e && (t.words[t.length++] = e), t
        }, n._prime = function(t) {
            var e;
            if (y[t]) return y[t];
            if ("k256" === t) e = new b;
            else if ("p224" === t) e = new w;
            else if ("p192" === t) e = new _;
            else if ("p25519" === t) e = new A;
            else throw Error("Unknown prime " + t);
            return y[t] = e, e
        }, x.prototype._verify1 = function(t) {
            r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
        }, x.prototype._verify2 = function(t, e) {
            r((t.negative | e.negative) == 0, "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
        }, x.prototype.imod = function(t) {
            return this.prime ? this.prime.ireduce(t)._forceRed(this) : (h(t, t.umod(this.m)._forceRed(this)), t)
        }, x.prototype.neg = function(t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
        }, x.prototype.add = function(t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
        }, x.prototype.iadd = function(t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r
        }, x.prototype.sub = function(t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
        }, x.prototype.isub = function(t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r
        }, x.prototype.shl = function(t, e) {
            return this._verify1(t), this.imod(t.ushln(e))
        }, x.prototype.imul = function(t, e) {
            return this._verify2(t, e), this.imod(t.imul(e))
        }, x.prototype.mul = function(t, e) {
            return this._verify2(t, e), this.imod(t.mul(e))
        }, x.prototype.isqr = function(t) {
            return this.imul(t, t.clone())
        }, x.prototype.sqr = function(t) {
            return this.mul(t, t)
        }, x.prototype.sqrt = function(t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if (r(e % 2 == 1), 3 === e) {
                var i = this.m.add(new n(1)).iushrn(2);
                return this.pow(t, i)
            }
            for (var s = this.m.subn(1), o = 0; !s.isZero() && 0 === s.andln(1);) o++, s.iushrn(1);
            r(!s.isZero());
            var a = new n(1).toRed(this),
                h = a.redNeg(),
                c = this.m.subn(1).iushrn(1),
                u = this.m.bitLength();
            for (u = new n(2 * u * u).toRed(this); 0 !== this.pow(u, c).cmp(h);) u.redIAdd(h);
            for (var l = this.pow(u, s), f = this.pow(t, s.addn(1).iushrn(1)), d = this.pow(t, s), p = o; 0 !== d.cmp(a);) {
                for (var g = d, m = 0; 0 !== g.cmp(a); m++) g = g.redSqr();
                r(m < p);
                var y = this.pow(l, new n(1).iushln(p - m - 1));
                f = f.redMul(y), l = y.redSqr(), d = d.redMul(l), p = m
            }
            return f
        }, x.prototype.invm = function(t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
        }, x.prototype.pow = function(t, e) {
            if (e.isZero()) return new n(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            r[0] = new n(1).toRed(this), r[1] = t;
            for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
            var s = r[0],
                o = 0,
                a = 0,
                h = e.bitLength() % 26;
            for (0 === h && (h = 26), i = e.length - 1; i >= 0; i--) {
                for (var c = e.words[i], u = h - 1; u >= 0; u--) {
                    var l = c >> u & 1;
                    if (s !== r[0] && (s = this.sqr(s)), 0 === l && 0 === o) {
                        a = 0;
                        continue
                    }
                    o <<= 1, o |= l, (4 == ++a || 0 === i && 0 === u) && (s = this.mul(s, r[o]), a = 0, o = 0)
                }
                h = 26
            }
            return s
        }, x.prototype.convertTo = function(t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e
        }, x.prototype.convertFrom = function(t) {
            var e = t.clone();
            return e.red = null, e
        }, n.mont = function(t) {
            return new E(t)
        }, i(E, x), E.prototype.convertTo = function(t) {
            return this.imod(t.ushln(this.shift))
        }, E.prototype.convertFrom = function(t) {
            var e = this.imod(t.mul(this.rinv));
            return e.red = null, e
        }, E.prototype.imul = function(t, e) {
            if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
            var r = t.imul(e),
                i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                s = n;
            return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : 0 > n.cmpn(0) && (s = n.iadd(this.m)), s._forceRed(this)
        }, E.prototype.mul = function(t, e) {
            if (t.isZero() || e.isZero()) return new n(0)._forceRed(this);
            var r = t.mul(e),
                i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                s = r.isub(i).iushrn(this.shift),
                o = s;
            return s.cmp(this.m) >= 0 ? o = s.isub(this.m) : 0 > s.cmpn(0) && (o = s.iadd(this.m)), o._forceRed(this)
        }, E.prototype.invm = function(t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
        }
    }(tY, tS);
    var tX = tY.exports;
    let tZ = "bignumber/5.7.0";
    var t0 = tX.BN;
    let t1 = new tq(tZ),
        t2 = {},
        t5 = !1;
    class t6 {
        constructor(t, e) {
            t !== t2 && t1.throwError("cannot call constructor directly; use BigNumber.from", tq.errors.UNSUPPORTED_OPERATION, {
                operation: "new (BigNumber)"
            }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
        }
        fromTwos(t) {
            return t8(t4(this).fromTwos(t))
        }
        toTwos(t) {
            return t8(t4(this).toTwos(t))
        }
        abs() {
            return "-" === this._hex[0] ? t6.from(this._hex.substring(1)) : this
        }
        add(t) {
            return t8(t4(this).add(t4(t)))
        }
        sub(t) {
            return t8(t4(this).sub(t4(t)))
        }
        div(t) {
            return t6.from(t).isZero() && t9("division-by-zero", "div"), t8(t4(this).div(t4(t)))
        }
        mul(t) {
            return t8(t4(this).mul(t4(t)))
        }
        mod(t) {
            let e = t4(t);
            return e.isNeg() && t9("division-by-zero", "mod"), t8(t4(this).umod(e))
        }
        pow(t) {
            let e = t4(t);
            return e.isNeg() && t9("negative-power", "pow"), t8(t4(this).pow(e))
        }
        and(t) {
            let e = t4(t);
            return (this.isNegative() || e.isNeg()) && t9("unbound-bitwise-result", "and"), t8(t4(this).and(e))
        }
        or(t) {
            let e = t4(t);
            return (this.isNegative() || e.isNeg()) && t9("unbound-bitwise-result", "or"), t8(t4(this).or(e))
        }
        xor(t) {
            let e = t4(t);
            return (this.isNegative() || e.isNeg()) && t9("unbound-bitwise-result", "xor"), t8(t4(this).xor(e))
        }
        mask(t) {
            return (this.isNegative() || t < 0) && t9("negative-width", "mask"), t8(t4(this).maskn(t))
        }
        shl(t) {
            return (this.isNegative() || t < 0) && t9("negative-width", "shl"), t8(t4(this).shln(t))
        }
        shr(t) {
            return (this.isNegative() || t < 0) && t9("negative-width", "shr"), t8(t4(this).shrn(t))
        }
        eq(t) {
            return t4(this).eq(t4(t))
        }
        lt(t) {
            return t4(this).lt(t4(t))
        }
        lte(t) {
            return t4(this).lte(t4(t))
        }
        gt(t) {
            return t4(this).gt(t4(t))
        }
        gte(t) {
            return t4(this).gte(t4(t))
        }
        isNegative() {
            return "-" === this._hex[0]
        }
        isZero() {
            return t4(this).isZero()
        }
        toNumber() {
            try {
                return t4(this).toNumber()
            } catch {
                t9("overflow", "toNumber", this.toString())
            }
            return null
        }
        toBigInt() {
            try {
                return BigInt(this.toString())
            } catch {}
            return t1.throwError("this platform does not support BigInt", tq.errors.UNSUPPORTED_OPERATION, {
                value: this.toString()
            })
        }
        toString() {
            return arguments.length > 0 && (10 === arguments[0] ? t5 || (t5 = !0, t1.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? t1.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", tq.errors.UNEXPECTED_ARGUMENT, {}) : t1.throwError("BigNumber.toString does not accept parameters", tq.errors.UNEXPECTED_ARGUMENT, {})), t4(this).toString(10)
        }
        toHexString() {
            return this._hex
        }
        toJSON(t) {
            return {
                type: "BigNumber",
                hex: this.toHexString()
            }
        }
        static from(t) {
            if (t instanceof t6) return t;
            if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new t6(t2, t3(t)) : t.match(/^-?[0-9]+$/) ? new t6(t2, t3(new t0(t))) : t1.throwArgumentError("invalid BigNumber string", "value", t);
            if ("number" == typeof t) return t % 1 && t9("underflow", "BigNumber.from", t), (t >= 0x1fffffffffffff || t <= -0x1fffffffffffff) && t9("overflow", "BigNumber.from", t), t6.from(String(t));
            if ("bigint" == typeof t) return t6.from(t.toString());
            if (tz(t)) return t6.from(t$(t));
            if (t)
                if (t.toHexString) {
                    let e = t.toHexString();
                    if ("string" == typeof e) return t6.from(e)
                } else {
                    let e = t._hex;
                    if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (tH(e) || "-" === e[0] && tH(e.substring(1)))) return t6.from(e)
                }
            return t1.throwArgumentError("invalid BigNumber value", "value", t)
        }
        static isBigNumber(t) {
            return !!(t && t._isBigNumber)
        }
    }

    function t3(t) {
        if ("string" != typeof t) return t3(t.toString(16));
        if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && t1.throwArgumentError("invalid hex", "value", t), "0x00" === (t = t3(t)) ? t : "-" + t;
        if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
        for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
        return t
    }

    function t8(t) {
        return t6.from(t3(t))
    }

    function t4(t) {
        let e = t6.from(t).toHexString();
        return "-" === e[0] ? new t0("-" + e.substring(3), 16) : new t0(e.substring(2), 16)
    }

    function t9(t, e, r) {
        let i = {
            fault: t,
            operation: e
        };
        return null != r && (i.value = r), t1.throwError(t, tq.errors.NUMERIC_FAULT, i)
    }
    let t7 = new tq(tZ),
        et = {},
        ee = t6.from(0),
        er = t6.from(-1);

    function ei(t, e, r, i) {
        let n = {
            fault: e,
            operation: r
        };
        return void 0 !== i && (n.value = i), t7.throwError(t, tq.errors.NUMERIC_FAULT, n)
    }
    let en = "0";
    for (; en.length < 256;) en += en;

    function es(t) {
        if ("number" != typeof t) try {
            t = t6.from(t).toNumber()
        } catch {}
        return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1) ? "1" + en.substring(0, t) : t7.throwArgumentError("invalid decimal size", "decimals", t)
    }

    function eo(t, e) {
        null == e && (e = 0);
        let r = es(e),
            i = (t = t6.from(t)).lt(ee);
        i && (t = t.mul(er));
        let n = t.mod(r).toString();
        for (; n.length < r.length - 1;) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        let s = t.div(r).toString();
        return t = 1 === r.length ? s : s + "." + n, i && (t = "-" + t), t
    }

    function ea(t, e) {
        null == e && (e = 0);
        let r = es(e);
        "string" == typeof t && t.match(/^-?[0-9.]+$/) || t7.throwArgumentError("invalid decimal value", "value", t);
        let i = "-" === t.substring(0, 1);
        i && (t = t.substring(1)), "." === t && t7.throwArgumentError("missing value", "value", t);
        let n = t.split(".");
        n.length > 2 && t7.throwArgumentError("too many decimal points", "value", t);
        let s = n[0],
            o = n[1];
        for (s || (s = "0"), o || (o = "0");
            "0" === o[o.length - 1];) o = o.substring(0, o.length - 1);
        for (o.length > r.length - 1 && ei("fractional component exceeds decimals", "underflow", "parseFixed"), "" === o && (o = "0"); o.length < r.length - 1;) o += "0";
        let a = t6.from(s),
            h = t6.from(o),
            c = a.mul(r).add(h);
        return i && (c = c.mul(er)), c
    }
    class eh {
        constructor(t, e, r, i) {
            t !== et && t7.throwError("cannot use FixedFormat constructor; use FixedFormat.from", tq.errors.UNSUPPORTED_OPERATION, {
                operation: "new FixedFormat"
            }), this.signed = e, this.width = r, this.decimals = i, this.name = (e ? "" : "u") + "fixed" + String(r) + "x" + String(i), this._multiplier = es(i), Object.freeze(this)
        }
        static from(t) {
            if (t instanceof eh) return t;
            "number" == typeof t && (t = `fixed128x${t}`);
            let e = !0,
                r = 128,
                i = 18;
            if ("string" == typeof t) {
                if ("fixed" !== t)
                    if ("ufixed" === t) e = !1;
                    else {
                        let n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                        n || t7.throwArgumentError("invalid fixed format", "format", t), e = "u" !== n[1], r = parseInt(n[2]), i = parseInt(n[3])
                    }
            } else if (t) {
                let n = (e, r, i) => null == t[e] ? i : (typeof t[e] !== r && t7.throwArgumentError("invalid fixed format (" + e + " not " + r + ")", "format." + e, t[e]), t[e]);
                e = n("signed", "boolean", e), r = n("width", "number", r), i = n("decimals", "number", i)
            }
            return r % 8 && t7.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), i > 80 && t7.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", i), new eh(et, e, r, i)
        }
    }
    class ec {
        constructor(t, e, r, i) {
            t !== et && t7.throwError("cannot use FixedNumber constructor; use FixedNumber.from", tq.errors.UNSUPPORTED_OPERATION, {
                operation: "new FixedFormat"
            }), this.format = i, this._hex = e, this._value = r, this._isFixedNumber = !0, Object.freeze(this)
        }
        _checkFormat(t) {
            this.format.name !== t.format.name && t7.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
        }
        addUnsafe(t) {
            this._checkFormat(t);
            let e = ea(this._value, this.format.decimals),
                r = ea(t._value, t.format.decimals);
            return ec.fromValue(e.add(r), this.format.decimals, this.format)
        }
        subUnsafe(t) {
            this._checkFormat(t);
            let e = ea(this._value, this.format.decimals),
                r = ea(t._value, t.format.decimals);
            return ec.fromValue(e.sub(r), this.format.decimals, this.format)
        }
        mulUnsafe(t) {
            this._checkFormat(t);
            let e = ea(this._value, this.format.decimals),
                r = ea(t._value, t.format.decimals);
            return ec.fromValue(e.mul(r).div(this.format._multiplier), this.format.decimals, this.format)
        }
        divUnsafe(t) {
            this._checkFormat(t);
            let e = ea(this._value, this.format.decimals),
                r = ea(t._value, t.format.decimals);
            return ec.fromValue(e.mul(this.format._multiplier).div(r), this.format.decimals, this.format)
        }
        floor() {
            let t = this.toString().split(".");
            1 === t.length && t.push("0");
            let e = ec.from(t[0], this.format),
                r = !t[1].match(/^(0*)$/);
            return this.isNegative() && r && (e = e.subUnsafe(eu.toFormat(e.format))), e
        }
        ceiling() {
            let t = this.toString().split(".");
            1 === t.length && t.push("0");
            let e = ec.from(t[0], this.format),
                r = !t[1].match(/^(0*)$/);
            return !this.isNegative() && r && (e = e.addUnsafe(eu.toFormat(e.format))), e
        }
        round(t) {
            null == t && (t = 0);
            let e = this.toString().split(".");
            if (1 === e.length && e.push("0"), (t < 0 || t > 80 || t % 1) && t7.throwArgumentError("invalid decimal count", "decimals", t), e[1].length <= t) return this;
            let r = ec.from("1" + en.substring(0, t), this.format),
                i = el.toFormat(this.format);
            return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r)
        }
        isZero() {
            return "0.0" === this._value || "0" === this._value
        }
        isNegative() {
            return "-" === this._value[0]
        }
        toString() {
            return this._value
        }
        toHexString(t) {
            return null == t ? this._hex : (t % 8 && t7.throwArgumentError("invalid byte width", "width", t), tG(t6.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString(), t / 8))
        }
        toUnsafeFloat() {
            return parseFloat(this.toString())
        }
        toFormat(t) {
            return ec.fromString(this._value, t)
        }
        static fromValue(t, e, r) {
            var i;
            return null != r || null == e || null != (i = e) && (t6.isBigNumber(i) || "number" == typeof i && i % 1 == 0 || "string" == typeof i && i.match(/^-?[0-9]+$/) || tH(i) || "bigint" == typeof i || tz(i)) || (r = e, e = null), null == e && (e = 0), null == r && (r = "fixed"), ec.fromString(eo(t, e), eh.from(r))
        }
        static fromString(t, e) {
            null == e && (e = "fixed");
            let r = eh.from(e),
                i = ea(t, r.decimals);
            !r.signed && i.lt(ee) && ei("unsigned value cannot be negative", "overflow", "value", t);
            let n = null;
            return new ec(et, n = r.signed ? i.toTwos(r.width).toHexString() : tG(n = i.toHexString(), r.width / 8), eo(i, r.decimals), r)
        }
        static fromBytes(t, e) {
            null == e && (e = "fixed");
            let r = eh.from(e);
            if (tF(t).length > r.width / 8) throw Error("overflow");
            let i = t6.from(t);
            return r.signed && (i = i.fromTwos(r.width)), new ec(et, i.toTwos(+!r.signed + r.width).toHexString(), eo(i, r.decimals), r)
        }
        static from(t, e) {
            if ("string" == typeof t) return ec.fromString(t, e);
            if (tz(t)) return ec.fromBytes(t, e);
            try {
                return ec.fromValue(t, 0, e)
            } catch (t) {
                if (t.code !== tq.errors.INVALID_ARGUMENT) throw t
            }
            return t7.throwArgumentError("invalid FixedNumber value", "value", t)
        }
        static isFixedNumber(t) {
            return !!(t && t._isFixedNumber)
        }
    }
    let eu = ec.from(1),
        el = ec.from("0.5"),
        ef = new tq("strings/5.7.0");

    function ed(t, e, r, i, n) {
        if (t === d.BAD_PREFIX || t === d.UNEXPECTED_CONTINUE) {
            let t = 0;
            for (let i = e + 1; i < r.length && r[i] >> 6 == 2; i++) t++;
            return t
        }
        return t === d.OVERRUN ? r.length - e - 1 : 0
    }

    function ep(t, e = f.current) {
        e != f.current && (ef.checkNormalize(), t = t.normalize(e));
        let r = [];
        for (let e = 0; e < t.length; e++) {
            let i = t.charCodeAt(e);
            if (i < 128) r.push(i);
            else if (i < 2048) r.push(i >> 6 | 192), r.push(63 & i | 128);
            else if ((64512 & i) == 55296) {
                e++;
                let n = t.charCodeAt(e);
                if (e >= t.length || (64512 & n) != 56320) throw Error("invalid utf-8 string");
                let s = 65536 + ((1023 & i) << 10) + (1023 & n);
                r.push(s >> 18 | 240), r.push(s >> 12 & 63 | 128), r.push(s >> 6 & 63 | 128), r.push(63 & s | 128)
            } else r.push(i >> 12 | 224), r.push(i >> 6 & 63 | 128), r.push(63 & i | 128)
        }
        return tF(r)
    }

    function eg(t, e) {
        e || (e = function(t) {
            return [parseInt(t, 16)]
        });
        let r = 0,
            i = {};
        return t.split(",").forEach(t => {
            let n = t.split(":");
            i[r += parseInt(n[0], 16)] = e(n[1])
        }), i
    }

    function em(t) {
        let e = 0;
        return t.split(",").map(t => {
            let r = t.split("-");
            return 1 === r.length ? r[1] = "0" : "" === r[1] && (r[1] = "1"), {
                l: e + parseInt(r[0], 16),
                h: e = parseInt(r[1], 16)
            }
        })
    }(o = f || (f = {})).current = "", o.NFC = "NFC", o.NFD = "NFD", o.NFKC = "NFKC", o.NFKD = "NFKD", (a = d || (d = {})).UNEXPECTED_CONTINUE = "unexpected continuation byte", a.BAD_PREFIX = "bad codepoint prefix", a.OVERRUN = "string overrun", a.MISSING_CONTINUE = "missing continuation byte", a.OUT_OF_RANGE = "out of UTF-8 range", a.UTF16_SURROGATE = "UTF-16 surrogate", a.OVERLONG = "overlong representation", Object.freeze({
        error: function(t, e, r, i, n) {
            return ef.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r)
        },
        ignore: ed,
        replace: function(t, e, r, i, n) {
            return t === d.OVERLONG ? (i.push(n), 0) : (i.push(65533), ed(t, e, r))
        }
    }), em("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(t => parseInt(t, 16)), eg("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), eg("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), eg("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", function(t) {
        if (t.length % 4 != 0) throw Error("bad data");
        let e = [];
        for (let r = 0; r < t.length; r += 4) e.push(parseInt(t.substring(r, r + 4), 16));
        return e
    }), em("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
    let ey = "hash/5.7.0";

    function ev(t, e) {
        null == e && (e = 1);
        let r = [],
            i = r.forEach,
            n = function(t, e) {
                i.call(t, function(t) {
                    e > 0 && Array.isArray(t) ? n(t, e - 1) : r.push(t)
                })
            };
        return n(t, e), r
    }

    function eb(t, e) {
        let r = Array(t);
        for (let i = 0, n = -1; i < t; i++) r[i] = n += 1 + e();
        return r
    }

    function ew(t, e) {
        let r = eb(t(), t),
            i = t(),
            n = eb(i, t),
            s = function(t, e) {
                let r = Array(t);
                for (let i = 0; i < t; i++) r[i] = 1 + e();
                return r
            }(i, t);
        for (let t = 0; t < i; t++)
            for (let e = 0; e < s[t]; e++) r.push(n[t] + e);
        return e ? r.map(t => e[t]) : r
    }

    function e_(t, e, r) {
        let i = Array(t).fill(void 0).map(() => []);
        for (let n = 0; n < e; n++)(function(t, e) {
            let r = Array(t);
            for (let n = 0, s = 0; n < t; n++) {
                var i;
                r[n] = s += 1 & (i = e()) ? ~i >> 1 : i >> 1
            }
            return r
        })(t, r).forEach((t, e) => i[e].push(t));
        return i
    }
    let eA = (i = function(t) {
        let e = 0;

        function r() {
            return t[e++] << 8 | t[e++]
        }
        let i = r(),
            n = 1,
            s = [0, 1];
        for (let t = 1; t < i; t++) s.push(n += r());
        let o = r(),
            a = e;
        e += o;
        let h = 0,
            c = 0;

        function u() {
            return 0 == h && (c = c << 8 | t[e++], h = 8), c >> --h & 1
        }
        let l = 0;
        for (let t = 0; t < 31; t++) l = l << 1 | u();
        let f = [],
            d = 0,
            p = 0x80000000;
        for (;;) {
            let t = Math.floor(((l - d + 1) * n - 1) / p),
                e = 0,
                r = i;
            for (; r - e > 1;) {
                let i = e + r >>> 1;
                t < s[i] ? r = i : e = i
            }
            if (0 == e) break;
            f.push(e);
            let o = d + Math.floor(p * s[e] / n),
                a = d + Math.floor(p * s[e + 1] / n) - 1;
            for (; !((o ^ a) & 0x40000000);) l = l << 1 & 0x7fffffff | u(), o = o << 1 & 0x7fffffff, a = a << 1 & 0x7fffffff | 1;
            for (; o & ~a & 0x20000000;) l = 0x40000000 & l | l << 1 & 0x3fffffff | u(), o = o << 1 ^ 0x40000000, a = (0x40000000 ^ a) << 1 | 0x40000000 | 1;
            d = o, p = 1 + a - o
        }
        let g = i - 4;
        return f.map(e => {
            switch (e - g) {
                case 3:
                    return g + 65792 + (t[a++] << 16 | t[a++] << 8 | t[a++]);
                case 2:
                    return g + 256 + (t[a++] << 8 | t[a++]);
                case 1:
                    return g + t[a++];
                default:
                    return e - 1
            }
        })
    }(function(t) {
        t = atob(t);
        let e = [];
        for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
        return tF(e)
    }("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA==")), r = 0, () => i[r++]);
    ew(eA), ew(eA),
        function(t) {
            let e = [];
            for (;;) {
                let r = t();
                if (0 == r) break;
                e.push(function(t, e) {
                    let r = 1 + e(),
                        i = e(),
                        n = function(t) {
                            let e = [];
                            for (;;) {
                                let r = t();
                                if (0 == r) break;
                                e.push(r)
                            }
                            return e
                        }(e);
                    return ev(e_(n.length, 1 + t, e).map((t, e) => {
                        let s = t[0],
                            o = t.slice(1);
                        return Array(n[e]).fill(void 0).map((t, e) => {
                            let n = e * i;
                            return [s + e * r, o.map(t => t + n)]
                        })
                    }))
                }(r, t))
            }
            for (;;) {
                var r, i;
                let n = t() - 1;
                if (n < 0) break;
                e.push((r = n, e_(1 + (i = t)(), 1 + r, i).map(t => [t[0], t.slice(1)])))
            }! function(t) {
                let e = {};
                for (let r = 0; r < t.length; r++) {
                    let i = t[r];
                    e[i[0]] = i[1]
                }
            }(ev(e))
        }(eA), e = ew(eA).sort((t, e) => t - e),
        function t() {
            let r = [];
            for (;;) {
                let i = ew(eA, e);
                if (0 == i.length) break;
                r.push({
                    set: new Set(i),
                    node: t()
                })
            }
            r.sort((t, e) => e.set.size - t.set.size);
            let i = eA();
            return {
                branches: r,
                valid: i % 3,
                fe0f: !!(1 & (i = i / 3 | 0)),
                save: 1 == (i >>= 1),
                check: 2 == i
            }
        }(), new tq(ey), new Uint8Array(32).fill(0);
    let ex = `Ethereum Signed Message:
`;

    function eE(t) {
        let e, r;
        return "string" == typeof t && (t = ep(t)), tQ((r = new Uint8Array((e = [ep(ex), ep(String(t.length)), t].map(t => tF(t))).reduce((t, e) => t + e.length, 0)), e.reduce((t, e) => (r.set(e, t), t + e.length), 0), tB(r)))
    }
    new tq("rlp/5.7.0");
    let eI = new tq("address/5.7.0");

    function eS(t) {
        tH(t, 20) || eI.throwArgumentError("invalid address", "address", t);
        let e = (t = t.toLowerCase()).substring(2).split(""),
            r = new Uint8Array(40);
        for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
        let i = tF(tQ(r));
        for (let t = 0; t < 40; t += 2) i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()), (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
        return "0x" + e.join("")
    }
    let eM = {};
    for (let t = 0; t < 10; t++) eM[String(t)] = String(t);
    for (let t = 0; t < 26; t++) eM[String.fromCharCode(65 + t)] = String(10 + t);
    let eP = Math.floor(Math.log10 ? Math.log10(0x1fffffffffffff) : Math.log(0x1fffffffffffff) / Math.LN10);

    function eR(t, e, r) {
        Object.defineProperty(t, e, {
            enumerable: !0,
            value: r,
            writable: !1
        })
    }
    new tq("properties/5.7.0"), new tq(ey), new Uint8Array(32).fill(0), t6.from(-1);
    let eC = t6.from(0),
        eN = t6.from(1);
    t6.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), tG(eN.toHexString(), 32), tG(eC.toHexString(), 32);
    var eO = {},
        eT = {};

    function ek(t, e) {
        if (!t) throw Error(e || "Assertion failed")
    }
    ek.equal = function(t, e, r) {
        if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e)
    };
    var eD = {
        exports: {}
    };

    function eq(t) {
        return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 0xff0000 | (255 & t) << 24) >>> 0
    }

    function eL(t) {
        return 1 === t.length ? "0" + t : t
    }

    function eU(t) {
        return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
    }
    "function" == typeof Object.create ? eD.exports = function(t, e) {
        e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    } : eD.exports = function(t, e) {
        if (e) {
            t.super_ = e;
            var r = function() {};
            r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
        }
    }, eT.inherits = eD.exports, eT.toArray = function(t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var r = [];
        if ("string" == typeof t)
            if (e) {
                if ("hex" === e)
                    for ((t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
            } else
                for (var i = 0, n = 0; n < t.length; n++) {
                    var s, o, a = t.charCodeAt(n);
                    a < 128 ? r[i++] = a : (a < 2048 ? r[i++] = a >> 6 | 192 : ((s = t, o = n, (64512 & s.charCodeAt(o)) != 55296 || o < 0 || o + 1 >= s.length || (64512 & s.charCodeAt(o + 1)) != 56320) ? r[i++] = a >> 12 | 224 : (a = 65536 + ((1023 & a) << 10) + (1023 & t.charCodeAt(++n)), r[i++] = a >> 18 | 240, r[i++] = a >> 12 & 63 | 128), r[i++] = a >> 6 & 63 | 128), r[i++] = 63 & a | 128)
                } else
                    for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
        return r
    }, eT.toHex = function(t) {
        for (var e = "", r = 0; r < t.length; r++) e += eL(t[r].toString(16));
        return e
    }, eT.htonl = eq, eT.toHex32 = function(t, e) {
        for (var r = "", i = 0; i < t.length; i++) {
            var n = t[i];
            "little" === e && (n = eq(n)), r += eU(n.toString(16))
        }
        return r
    }, eT.zero2 = eL, eT.zero8 = eU, eT.join32 = function(t, e, r, i) {
        var n, s = r - e;
        ek(s % 4 == 0);
        for (var o = Array(s / 4), a = 0, h = e; a < o.length; a++, h += 4) n = "big" === i ? t[h] << 24 | t[h + 1] << 16 | t[h + 2] << 8 | t[h + 3] : t[h + 3] << 24 | t[h + 2] << 16 | t[h + 1] << 8 | t[h], o[a] = n >>> 0;
        return o
    }, eT.split32 = function(t, e) {
        for (var r = Array(4 * t.length), i = 0, n = 0; i < t.length; i++, n += 4) {
            var s = t[i];
            "big" === e ? (r[n] = s >>> 24, r[n + 1] = s >>> 16 & 255, r[n + 2] = s >>> 8 & 255, r[n + 3] = 255 & s) : (r[n + 3] = s >>> 24, r[n + 2] = s >>> 16 & 255, r[n + 1] = s >>> 8 & 255, r[n] = 255 & s)
        }
        return r
    }, eT.rotr32 = function(t, e) {
        return t >>> e | t << 32 - e
    }, eT.rotl32 = function(t, e) {
        return t << e | t >>> 32 - e
    }, eT.sum32 = function(t, e) {
        return t + e >>> 0
    }, eT.sum32_3 = function(t, e, r) {
        return t + e + r >>> 0
    }, eT.sum32_4 = function(t, e, r, i) {
        return t + e + r + i >>> 0
    }, eT.sum32_5 = function(t, e, r, i, n) {
        return t + e + r + i + n >>> 0
    }, eT.sum64 = function(t, e, r, i) {
        var n = t[e],
            s = i + t[e + 1] >>> 0;
        t[e] = +(s < i) + r + n >>> 0, t[e + 1] = s
    }, eT.sum64_hi = function(t, e, r, i) {
        return +(e + i >>> 0 < e) + t + r >>> 0
    }, eT.sum64_lo = function(t, e, r, i) {
        return e + i >>> 0
    }, eT.sum64_4_hi = function(t, e, r, i, n, s, o, a) {
        var h, c = e;
        return t + r + n + o + (h = 0 + +((c = c + i >>> 0) < e) + +((c = c + s >>> 0) < s) + +((c = c + a >>> 0) < a)) >>> 0
    }, eT.sum64_4_lo = function(t, e, r, i, n, s, o, a) {
        return e + i + s + a >>> 0
    }, eT.sum64_5_hi = function(t, e, r, i, n, s, o, a, h, c) {
        var u, l = e;
        return t + r + n + o + h + (u = 0 + +((l = l + i >>> 0) < e) + +((l = l + s >>> 0) < s) + +((l = l + a >>> 0) < a) + +((l = l + c >>> 0) < c)) >>> 0
    }, eT.sum64_5_lo = function(t, e, r, i, n, s, o, a, h, c) {
        return e + i + s + a + c >>> 0
    }, eT.rotr64_hi = function(t, e, r) {
        return (e << 32 - r | t >>> r) >>> 0
    }, eT.rotr64_lo = function(t, e, r) {
        return (t << 32 - r | e >>> r) >>> 0
    }, eT.shr64_hi = function(t, e, r) {
        return t >>> r
    }, eT.shr64_lo = function(t, e, r) {
        return (t << 32 - r | e >>> r) >>> 0
    };
    var eB = {};

    function ej() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
    }
    eB.BlockHash = ej, ej.prototype.update = function(t, e) {
        if (t = eT.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
            var r = (t = this.pending).length % this._delta8;
            this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = eT.join32(t, 0, t.length - r, this.endian);
            for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
        }
        return this
    }, ej.prototype.digest = function(t) {
        return this.update(this._pad()), ek(null === this.pending), this._digest(t)
    }, ej.prototype._pad = function() {
        var t = this.pendingTotal,
            e = this._delta8,
            r = e - (t + this.padLength) % e,
            i = Array(r + this.padLength);
        i[0] = 128;
        for (var n = 1; n < r; n++) i[n] = 0;
        if (t <<= 3, "big" === this.endian) {
            for (var s = 8; s < this.padLength; s++) i[n++] = 0;
            i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = t >>> 24 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 8 & 255, i[n++] = 255 & t
        } else
            for (i[n++] = 255 & t, i[n++] = t >>> 8 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, s = 8; s < this.padLength; s++) i[n++] = 0;
        return i
    };
    var ez = {},
        eF = {},
        eH = eT.rotr32;

    function eK(t, e, r) {
        return t & e ^ t & r ^ e & r
    }
    eF.ft_1 = function(t, e, r, i) {
        var n;
        return 0 === t ? (n = e) & r ^ ~n & i : 1 === t || 3 === t ? e ^ r ^ i : 2 === t ? eK(e, r, i) : void 0
    }, eF.ch32 = function(t, e, r) {
        return t & e ^ ~t & r
    }, eF.maj32 = eK, eF.p32 = function(t, e, r) {
        return t ^ e ^ r
    }, eF.s0_256 = function(t) {
        return eH(t, 2) ^ eH(t, 13) ^ eH(t, 22)
    }, eF.s1_256 = function(t) {
        return eH(t, 6) ^ eH(t, 11) ^ eH(t, 25)
    }, eF.g0_256 = function(t) {
        return eH(t, 7) ^ eH(t, 18) ^ t >>> 3
    }, eF.g1_256 = function(t) {
        return eH(t, 17) ^ eH(t, 19) ^ t >>> 10
    };
    var e$ = eT.rotl32,
        eV = eT.sum32,
        eG = eT.sum32_5,
        eJ = eF.ft_1,
        eQ = eB.BlockHash,
        eY = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

    function eW() {
        if (!(this instanceof eW)) return new eW;
        eQ.call(this), this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0], this.W = Array(80)
    }
    eT.inherits(eW, eQ), eW.blockSize = 512, eW.outSize = 160, eW.hmacStrength = 80, eW.padLength = 64, eW.prototype._update = function(t, e) {
        for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
        for (; i < r.length; i++) r[i] = e$(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
        var n = this.h[0],
            s = this.h[1],
            o = this.h[2],
            a = this.h[3],
            h = this.h[4];
        for (i = 0; i < r.length; i++) {
            var c = ~~(i / 20),
                u = eG(e$(n, 5), eJ(c, s, o, a), h, r[i], eY[c]);
            h = a, a = o, o = e$(s, 30), s = n, n = u
        }
        this.h[0] = eV(this.h[0], n), this.h[1] = eV(this.h[1], s), this.h[2] = eV(this.h[2], o), this.h[3] = eV(this.h[3], a), this.h[4] = eV(this.h[4], h)
    }, eW.prototype._digest = function(t) {
        return "hex" === t ? eT.toHex32(this.h, "big") : eT.split32(this.h, "big")
    };
    var eX = eT.sum32,
        eZ = eT.sum32_4,
        e0 = eT.sum32_5,
        e1 = eF.ch32,
        e2 = eF.maj32,
        e5 = eF.s0_256,
        e6 = eF.s1_256,
        e3 = eF.g0_256,
        e8 = eF.g1_256,
        e4 = eB.BlockHash,
        e9 = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

    function e7() {
        if (!(this instanceof e7)) return new e7;
        e4.call(this), this.h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19], this.k = e9, this.W = Array(64)
    }

    function rt() {
        if (!(this instanceof rt)) return new rt;
        e7.call(this), this.h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]
    }
    eT.inherits(e7, e4), e7.blockSize = 512, e7.outSize = 256, e7.hmacStrength = 192, e7.padLength = 64, e7.prototype._update = function(t, e) {
        for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
        for (; i < r.length; i++) r[i] = eZ(e8(r[i - 2]), r[i - 7], e3(r[i - 15]), r[i - 16]);
        var n = this.h[0],
            s = this.h[1],
            o = this.h[2],
            a = this.h[3],
            h = this.h[4],
            c = this.h[5],
            u = this.h[6],
            l = this.h[7];
        for (ek(this.k.length === r.length), i = 0; i < r.length; i++) {
            var f = e0(l, e6(h), e1(h, c, u), this.k[i], r[i]),
                d = eX(e5(n), e2(n, s, o));
            l = u, u = c, c = h, h = eX(a, f), a = o, o = s, s = n, n = eX(f, d)
        }
        this.h[0] = eX(this.h[0], n), this.h[1] = eX(this.h[1], s), this.h[2] = eX(this.h[2], o), this.h[3] = eX(this.h[3], a), this.h[4] = eX(this.h[4], h), this.h[5] = eX(this.h[5], c), this.h[6] = eX(this.h[6], u), this.h[7] = eX(this.h[7], l)
    }, e7.prototype._digest = function(t) {
        return "hex" === t ? eT.toHex32(this.h, "big") : eT.split32(this.h, "big")
    }, eT.inherits(rt, e7), rt.blockSize = 512, rt.outSize = 224, rt.hmacStrength = 192, rt.padLength = 64, rt.prototype._digest = function(t) {
        return "hex" === t ? eT.toHex32(this.h.slice(0, 7), "big") : eT.split32(this.h.slice(0, 7), "big")
    };
    var re = eT.rotr64_hi,
        rr = eT.rotr64_lo,
        ri = eT.shr64_hi,
        rn = eT.shr64_lo,
        rs = eT.sum64,
        ro = eT.sum64_hi,
        ra = eT.sum64_lo,
        rh = eT.sum64_4_hi,
        rc = eT.sum64_4_lo,
        ru = eT.sum64_5_hi,
        rl = eT.sum64_5_lo,
        rf = eB.BlockHash,
        rd = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f, 0x14292967, 0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

    function rp() {
        if (!(this instanceof rp)) return new rp;
        rf.call(this), this.h = [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179], this.k = rd, this.W = Array(160)
    }

    function rg() {
        if (!(this instanceof rg)) return new rg;
        rp.call(this), this.h = [0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4]
    }
    eT.inherits(rp, rf), rp.blockSize = 1024, rp.outSize = 512, rp.hmacStrength = 192, rp.padLength = 128, rp.prototype._prepareBlock = function(t, e) {
        for (var r = this.W, i = 0; i < 32; i++) r[i] = t[e + i];
        for (; i < r.length; i += 2) {
            var n = function(t, e) {
                    var r = re(t, e, 19) ^ re(e, t, 29) ^ ri(t, e, 6);
                    return r < 0 && (r += 0x100000000), r
                }(r[i - 4], r[i - 3]),
                s = function(t, e) {
                    var r = rr(t, e, 19) ^ rr(e, t, 29) ^ rn(t, e, 6);
                    return r < 0 && (r += 0x100000000), r
                }(r[i - 4], r[i - 3]),
                o = r[i - 14],
                a = r[i - 13],
                h = function(t, e) {
                    var r = re(t, e, 1) ^ re(t, e, 8) ^ ri(t, e, 7);
                    return r < 0 && (r += 0x100000000), r
                }(r[i - 30], r[i - 29]),
                c = function(t, e) {
                    var r = rr(t, e, 1) ^ rr(t, e, 8) ^ rn(t, e, 7);
                    return r < 0 && (r += 0x100000000), r
                }(r[i - 30], r[i - 29]),
                u = r[i - 32],
                l = r[i - 31];
            r[i] = rh(n, s, o, a, h, c, u, l), r[i + 1] = rc(n, s, o, a, h, c, u, l)
        }
    }, rp.prototype._update = function(t, e) {
        this._prepareBlock(t, e);
        var r = this.W,
            i = this.h[0],
            n = this.h[1],
            s = this.h[2],
            o = this.h[3],
            a = this.h[4],
            h = this.h[5],
            c = this.h[6],
            u = this.h[7],
            l = this.h[8],
            f = this.h[9],
            d = this.h[10],
            p = this.h[11],
            g = this.h[12],
            m = this.h[13],
            y = this.h[14],
            v = this.h[15];
        ek(this.k.length === r.length);
        for (var b = 0; b < r.length; b += 2) {
            var w = y,
                _ = v,
                A = function(t, e) {
                    var r = re(t, e, 14) ^ re(t, e, 18) ^ re(e, t, 9);
                    return r < 0 && (r += 0x100000000), r
                }(l, f),
                x = function(t, e) {
                    var r = rr(t, e, 14) ^ rr(t, e, 18) ^ rr(e, t, 9);
                    return r < 0 && (r += 0x100000000), r
                }(l, f),
                E = function(t, e, r) {
                    var i = t & e ^ ~t & r;
                    return i < 0 && (i += 0x100000000), i
                }(l, d, g),
                I = function(t, e, r) {
                    var i = t & e ^ ~t & r;
                    return i < 0 && (i += 0x100000000), i
                }(f, p, m),
                S = this.k[b],
                M = this.k[b + 1],
                P = r[b],
                R = r[b + 1],
                C = ru(w, _, A, x, E, I, S, M, P, R),
                N = rl(w, _, A, x, E, I, S, M, P, R);
            w = function(t, e) {
                var r = re(t, e, 28) ^ re(e, t, 2) ^ re(e, t, 7);
                return r < 0 && (r += 0x100000000), r
            }(i, n), _ = function(t, e) {
                var r = rr(t, e, 28) ^ rr(e, t, 2) ^ rr(e, t, 7);
                return r < 0 && (r += 0x100000000), r
            }(i, n);
            var O = ro(w, _, A = function(t, e, r) {
                    var i = t & e ^ t & r ^ e & r;
                    return i < 0 && (i += 0x100000000), i
                }(i, s, a), x = function(t, e, r) {
                    var i = t & e ^ t & r ^ e & r;
                    return i < 0 && (i += 0x100000000), i
                }(n, o, h)),
                T = ra(w, _, A, x);
            y = g, v = m, g = d, m = p, d = l, p = f, l = ro(c, u, C, N), f = ra(u, u, C, N), c = a, u = h, a = s, h = o, s = i, o = n, i = ro(C, N, O, T), n = ra(C, N, O, T)
        }
        rs(this.h, 0, i, n), rs(this.h, 2, s, o), rs(this.h, 4, a, h), rs(this.h, 6, c, u), rs(this.h, 8, l, f), rs(this.h, 10, d, p), rs(this.h, 12, g, m), rs(this.h, 14, y, v)
    }, rp.prototype._digest = function(t) {
        return "hex" === t ? eT.toHex32(this.h, "big") : eT.split32(this.h, "big")
    }, eT.inherits(rg, rp), rg.blockSize = 1024, rg.outSize = 384, rg.hmacStrength = 192, rg.padLength = 128, rg.prototype._digest = function(t) {
        return "hex" === t ? eT.toHex32(this.h.slice(0, 12), "big") : eT.split32(this.h.slice(0, 12), "big")
    }, ez.sha1 = eW, ez.sha224 = rt, ez.sha256 = e7, ez.sha384 = rg, ez.sha512 = rp;
    var rm = {},
        ry = eT.rotl32,
        rv = eT.sum32,
        rb = eT.sum32_3,
        rw = eT.sum32_4,
        r_ = eB.BlockHash;

    function rA() {
        if (!(this instanceof rA)) return new rA;
        r_.call(this), this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0], this.endian = "little"
    }

    function rx(t, e, r, i) {
        return t <= 15 ? e ^ r ^ i : t <= 31 ? e & r | ~e & i : t <= 47 ? (e | ~r) ^ i : t <= 63 ? e & i | r & ~i : e ^ (r | ~i)
    }
    eT.inherits(rA, r_), rm.ripemd160 = rA, rA.blockSize = 512, rA.outSize = 160, rA.hmacStrength = 192, rA.padLength = 64, rA.prototype._update = function(t, e) {
        for (var r = this.h[0], i = this.h[1], n = this.h[2], s = this.h[3], o = this.h[4], a = r, h = i, c = n, u = s, l = o, f = 0; f < 80; f++) {
            var d, p, g = rv(ry(rw(r, rx(f, i, n, s), t[rE[f] + e], (d = f) <= 15 ? 0 : d <= 31 ? 0x5a827999 : d <= 47 ? 0x6ed9eba1 : d <= 63 ? 0x8f1bbcdc : 0xa953fd4e), rS[f]), o);
            r = o, o = s, s = ry(n, 10), n = i, i = g, g = rv(ry(rw(a, rx(79 - f, h, c, u), t[rI[f] + e], (p = f) <= 15 ? 0x50a28be6 : p <= 31 ? 0x5c4dd124 : p <= 47 ? 0x6d703ef3 : 0x7a6d76e9 * (p <= 63)), rM[f]), l), a = l, l = u, u = ry(c, 10), c = h, h = g
        }
        g = rb(this.h[1], n, u), this.h[1] = rb(this.h[2], s, l), this.h[2] = rb(this.h[3], o, a), this.h[3] = rb(this.h[4], r, h), this.h[4] = rb(this.h[0], i, c), this.h[0] = g
    }, rA.prototype._digest = function(t) {
        return "hex" === t ? eT.toHex32(this.h, "little") : eT.split32(this.h, "little")
    };
    var rE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        rI = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        rS = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        rM = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];

    function rP(t, e, r) {
        if (!(this instanceof rP)) return new rP(t, e, r);
        this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(eT.toArray(e, r))
    }

    function rR(t, e, r) {
        return t(r = {
            path: e,
            exports: {},
            require: function(t, e) {
                throw e ? ? r.path, Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }
        }, r.exports), r.exports
    }
    rP.prototype._init = function(t) {
        t.length > this.blockSize && (t = new this.Hash().update(t).digest()), ek(t.length <= this.blockSize);
        for (var e = t.length; e < this.blockSize; e++) t.push(0);
        for (e = 0; e < t.length; e++) t[e] ^= 54;
        for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++) t[e] ^= 106;
        this.outer = new this.Hash().update(t)
    }, rP.prototype.update = function(t, e) {
        return this.inner.update(t, e), this
    }, rP.prototype.digest = function(t) {
        return this.outer.update(this.inner.digest()), this.outer.digest(t)
    }, eO.utils = eT, eO.common = eB, eO.sha = ez, eO.ripemd = rm, eO.hmac = rP, eO.sha1 = eO.sha.sha1, eO.sha256 = eO.sha.sha256, eO.sha224 = eO.sha.sha224, eO.sha384 = eO.sha.sha384, eO.sha512 = eO.sha.sha512, eO.ripemd160 = eO.ripemd.ripemd160;
    var rC = rN;

    function rN(t, e) {
        if (!t) throw Error(e || "Assertion failed")
    }
    rN.equal = function(t, e, r) {
        if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e)
    };
    var rO = rR(function(t, e) {
            function r(t) {
                return 1 === t.length ? "0" + t : t
            }

            function i(t) {
                for (var e = "", i = 0; i < t.length; i++) e += r(t[i].toString(16));
                return e
            }
            e.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" != typeof t) {
                    for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
                    return r
                }
                if ("hex" === e) {
                    (t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t);
                    for (var i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
                } else
                    for (var i = 0; i < t.length; i++) {
                        var n = t.charCodeAt(i),
                            s = n >> 8,
                            o = 255 & n;
                        s ? r.push(s, o) : r.push(o)
                    }
                return r
            }, e.zero2 = r, e.toHex = i, e.encode = function(t, e) {
                return "hex" === e ? i(t) : t
            }
        }),
        rT = rR(function(t, e) {
            e.assert = rC, e.toArray = rO.toArray, e.zero2 = rO.zero2, e.toHex = rO.toHex, e.encode = rO.encode, e.getNAF = function(t, e, r) {
                var i = Array(Math.max(t.bitLength(), r) + 1);
                i.fill(0);
                for (var n = 1 << e + 1, s = t.clone(), o = 0; o < i.length; o++) {
                    var a, h = s.andln(n - 1);
                    s.isOdd() ? (a = h > (n >> 1) - 1 ? (n >> 1) - h : h, s.isubn(a)) : a = 0, i[o] = a, s.iushrn(1)
                }
                return i
            }, e.getJSF = function(t, e) {
                var r = [
                    [],
                    []
                ];
                t = t.clone(), e = e.clone();
                for (var i, n = 0, s = 0; t.cmpn(-n) > 0 || e.cmpn(-s) > 0;) {
                    var o, a, h = t.andln(3) + n & 3,
                        c = e.andln(3) + s & 3;
                    3 === h && (h = -1), 3 === c && (c = -1), o = 1 & h ? (3 == (i = t.andln(7) + n & 7) || 5 === i) && 2 === c ? -h : h : 0, r[0].push(o), a = 1 & c ? (3 == (i = e.andln(7) + s & 7) || 5 === i) && 2 === h ? -c : c : 0, r[1].push(a), 2 * n === o + 1 && (n = 1 - n), 2 * s === a + 1 && (s = 1 - s), t.iushrn(1), e.iushrn(1)
                }
                return r
            }, e.cachedProperty = function(t, e, r) {
                var i = "_" + e;
                t.prototype[e] = function() {
                    return void 0 !== this[i] ? this[i] : this[i] = r.call(this)
                }
            }, e.parseBytes = function(t) {
                return "string" == typeof t ? e.toArray(t, "hex") : t
            }, e.intFromLE = function(t) {
                return new tX(t, "hex", "le")
            }
        }),
        rk = rT.getNAF,
        rD = rT.getJSF,
        rq = rT.assert;

    function rL(t, e) {
        this.type = t, this.p = new tX(e.p, 16), this.red = e.prime ? tX.red(e.prime) : tX.mont(this.p), this.zero = new tX(0).toRed(this.red), this.one = new tX(1).toRed(this.red), this.two = new tX(2).toRed(this.red), this.n = e.n && new tX(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
    }

    function rU(t, e) {
        this.curve = t, this.type = e, this.precomputed = null
    }
    rL.prototype.point = function() {
        throw Error("Not implemented")
    }, rL.prototype.validate = function() {
        throw Error("Not implemented")
    }, rL.prototype._fixedNafMul = function(t, e) {
        rq(t.precomputed);
        var r = t._getDoubles(),
            i = rk(e, 1, this._bitLength),
            n = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
        n /= 3;
        var s, o, a = [];
        for (s = 0; s < i.length; s += r.step) {
            o = 0;
            for (var h = s + r.step - 1; h >= s; h--) o = (o << 1) + i[h];
            a.push(o)
        }
        for (var c = this.jpoint(null, null, null), u = this.jpoint(null, null, null), l = n; l > 0; l--) {
            for (s = 0; s < a.length; s++)(o = a[s]) === l ? u = u.mixedAdd(r.points[s]) : o === -l && (u = u.mixedAdd(r.points[s].neg()));
            c = c.add(u)
        }
        return c.toP()
    }, rL.prototype._wnafMul = function(t, e) {
        var r = 4,
            i = t._getNAFPoints(r);
        r = i.wnd;
        for (var n = i.points, s = rk(e, r, this._bitLength), o = this.jpoint(null, null, null), a = s.length - 1; a >= 0; a--) {
            for (var h = 0; a >= 0 && 0 === s[a]; a--) h++;
            if (a >= 0 && h++, o = o.dblp(h), a < 0) break;
            var c = s[a];
            rq(0 !== c), o = "affine" === t.type ? c > 0 ? o.mixedAdd(n[c - 1 >> 1]) : o.mixedAdd(n[-c - 1 >> 1].neg()) : c > 0 ? o.add(n[c - 1 >> 1]) : o.add(n[-c - 1 >> 1].neg())
        }
        return "affine" === t.type ? o.toP() : o
    }, rL.prototype._wnafMulAdd = function(t, e, r, i, n) {
        var s, o, a, h = this._wnafT1,
            c = this._wnafT2,
            u = this._wnafT3,
            l = 0;
        for (s = 0; s < i; s++) {
            var f = (a = e[s])._getNAFPoints(t);
            h[s] = f.wnd, c[s] = f.points
        }
        for (s = i - 1; s >= 1; s -= 2) {
            var d = s - 1,
                p = s;
            if (1 !== h[d] || 1 !== h[p]) {
                u[d] = rk(r[d], h[d], this._bitLength), u[p] = rk(r[p], h[p], this._bitLength), l = Math.max(u[d].length, l), l = Math.max(u[p].length, l);
                continue
            }
            var g = [e[d], null, null, e[p]];
            0 === e[d].y.cmp(e[p].y) ? (g[1] = e[d].add(e[p]), g[2] = e[d].toJ().mixedAdd(e[p].neg())) : 0 === e[d].y.cmp(e[p].y.redNeg()) ? (g[1] = e[d].toJ().mixedAdd(e[p]), g[2] = e[d].add(e[p].neg())) : (g[1] = e[d].toJ().mixedAdd(e[p]), g[2] = e[d].toJ().mixedAdd(e[p].neg()));
            var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                y = rD(r[d], r[p]);
            for (l = Math.max(y[0].length, l), u[d] = Array(l), u[p] = Array(l), o = 0; o < l; o++) {
                var v = 0 | y[0][o],
                    b = 0 | y[1][o];
                u[d][o] = m[(v + 1) * 3 + (b + 1)], u[p][o] = 0, c[d] = g
            }
        }
        var w = this.jpoint(null, null, null),
            _ = this._wnafT4;
        for (s = l; s >= 0; s--) {
            for (var A = 0; s >= 0;) {
                var x = !0;
                for (o = 0; o < i; o++) _[o] = 0 | u[o][s], 0 !== _[o] && (x = !1);
                if (!x) break;
                A++, s--
            }
            if (s >= 0 && A++, w = w.dblp(A), s < 0) break;
            for (o = 0; o < i; o++) {
                var E = _[o];
                0 !== E && (E > 0 ? a = c[o][E - 1 >> 1] : E < 0 && (a = c[o][-E - 1 >> 1].neg()), w = "affine" === a.type ? w.mixedAdd(a) : w.add(a))
            }
        }
        for (s = 0; s < i; s++) c[s] = null;
        return n ? w : w.toP()
    }, rL.BasePoint = rU, rU.prototype.eq = function() {
        throw Error("Not implemented")
    }, rU.prototype.validate = function() {
        return this.curve.validate(this)
    }, rL.prototype.decodePoint = function(t, e) {
        t = rT.toArray(t, e);
        var r = this.p.byteLength();
        if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? rq(t[t.length - 1] % 2 == 0) : 7 === t[0] && rq(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
        if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
        throw Error("Unknown point format")
    }, rU.prototype.encodeCompressed = function(t) {
        return this.encode(t, !0)
    }, rU.prototype._encode = function(t) {
        var e = this.curve.p.byteLength(),
            r = this.getX().toArray("be", e);
        return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
    }, rU.prototype.encode = function(t, e) {
        return rT.encode(this._encode(e), t)
    }, rU.prototype.precompute = function(t) {
        if (this.precomputed) return this;
        var e = {
            doubles: null,
            naf: null,
            beta: null
        };
        return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
    }, rU.prototype._hasDoubles = function(t) {
        if (!this.precomputed) return !1;
        var e = this.precomputed.doubles;
        return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
    }, rU.prototype._getDoubles = function(t, e) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var r = [this], i = this, n = 0; n < e; n += t) {
            for (var s = 0; s < t; s++) i = i.dbl();
            r.push(i)
        }
        return {
            step: t,
            points: r
        }
    }, rU.prototype._getNAFPoints = function(t) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var e = [this], r = (1 << t) - 1, i = 1 === r ? null : this.dbl(), n = 1; n < r; n++) e[n] = e[n - 1].add(i);
        return {
            wnd: t,
            points: e
        }
    }, rU.prototype._getBeta = function() {
        return null
    }, rU.prototype.dblp = function(t) {
        for (var e = this, r = 0; r < t; r++) e = e.dbl();
        return e
    };
    var rB = rR(function(t) {
            "function" == typeof Object.create ? t.exports = function(t, e) {
                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : t.exports = function(t, e) {
                if (e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }
            }
        }),
        rj = rT.assert;

    function rz(t) {
        rL.call(this, "short", t), this.a = new tX(t.a, 16).toRed(this.red), this.b = new tX(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
    }

    function rF(t, e, r, i) {
        rL.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new tX(e, 16), this.y = new tX(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
    }

    function rH(t, e, r, i) {
        rL.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new tX(0)) : (this.x = new tX(e, 16), this.y = new tX(r, 16), this.z = new tX(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
    }
    rB(rz, rL), rz.prototype._getEndomorphism = function(t) {
        if (!(!this.zeroA || !this.g || !this.n || 1 !== this.p.modn(3))) {
            if (t.beta) e = new tX(t.beta, 16).toRed(this.red);
            else {
                var e, r, i, n = this._getEndoRoots(this.p);
                e = (e = 0 > n[0].cmp(n[1]) ? n[0] : n[1]).toRed(this.red)
            }
            if (t.lambda) r = new tX(t.lambda, 16);
            else {
                var s = this._getEndoRoots(this.n);
                0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(e)) ? r = s[0] : (r = s[1], rj(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
            }
            return i = t.basis ? t.basis.map(function(t) {
                return {
                    a: new tX(t.a, 16),
                    b: new tX(t.b, 16)
                }
            }) : this._getEndoBasis(r), {
                beta: e,
                lambda: r,
                basis: i
            }
        }
    }, rz.prototype._getEndoRoots = function(t) {
        var e = t === this.p ? this.red : tX.mont(t),
            r = new tX(2).toRed(e).redInvm(),
            i = r.redNeg(),
            n = new tX(3).toRed(e).redNeg().redSqrt().redMul(r);
        return [i.redAdd(n).fromRed(), i.redSub(n).fromRed()]
    }, rz.prototype._getEndoBasis = function(t) {
        for (var e, r, i, n, s, o, a, h, c, u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), l = t, f = this.n.clone(), d = new tX(1), p = new tX(0), g = new tX(0), m = new tX(1), y = 0; 0 !== l.cmpn(0);) {
            var v = f.div(l);
            h = f.sub(v.mul(l)), c = g.sub(v.mul(d));
            var b = m.sub(v.mul(p));
            if (!i && 0 > h.cmp(u)) e = a.neg(), r = d, i = h.neg(), n = c;
            else if (i && 2 == ++y) break;
            a = h, f = l, l = h, g = d, d = c, m = p, p = b
        }
        s = h.neg(), o = c;
        var w = i.sqr().add(n.sqr());
        return s.sqr().add(o.sqr()).cmp(w) >= 0 && (s = e, o = r), i.negative && (i = i.neg(), n = n.neg()), s.negative && (s = s.neg(), o = o.neg()), [{
            a: i,
            b: n
        }, {
            a: s,
            b: o
        }]
    }, rz.prototype._endoSplit = function(t) {
        var e = this.endo.basis,
            r = e[0],
            i = e[1],
            n = i.b.mul(t).divRound(this.n),
            s = r.b.neg().mul(t).divRound(this.n),
            o = n.mul(r.a),
            a = s.mul(i.a),
            h = n.mul(r.b),
            c = s.mul(i.b);
        return {
            k1: t.sub(o).sub(a),
            k2: h.add(c).neg()
        }
    }, rz.prototype.pointFromX = function(t, e) {
        (t = new tX(t, 16)).red || (t = t.toRed(this.red));
        var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
            i = r.redSqrt();
        if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
        var n = i.fromRed().isOdd();
        return (e && !n || !e && n) && (i = i.redNeg()), this.point(t, i)
    }, rz.prototype.validate = function(t) {
        if (t.inf) return !0;
        var e = t.x,
            r = t.y,
            i = this.a.redMul(e),
            n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
        return 0 === r.redSqr().redISub(n).cmpn(0)
    }, rz.prototype._endoWnafMulAdd = function(t, e, r) {
        for (var i = this._endoWnafT1, n = this._endoWnafT2, s = 0; s < t.length; s++) {
            var o = this._endoSplit(e[s]),
                a = t[s],
                h = a._getBeta();
            o.k1.negative && (o.k1.ineg(), a = a.neg(!0)), o.k2.negative && (o.k2.ineg(), h = h.neg(!0)), i[2 * s] = a, i[2 * s + 1] = h, n[2 * s] = o.k1, n[2 * s + 1] = o.k2
        }
        for (var c = this._wnafMulAdd(1, i, n, 2 * s, r), u = 0; u < 2 * s; u++) i[u] = null, n[u] = null;
        return c
    }, rB(rF, rL.BasePoint), rz.prototype.point = function(t, e, r) {
        return new rF(this, t, e, r)
    }, rz.prototype.pointFromJSON = function(t, e) {
        return rF.fromJSON(this, t, e)
    }, rF.prototype._getBeta = function() {
        if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (t) {
                var r = this.curve,
                    i = function(t) {
                        return r.point(t.x.redMul(r.endo.beta), t.y)
                    };
                t.beta = e, e.precomputed = {
                    beta: null,
                    naf: t.naf && {
                        wnd: t.naf.wnd,
                        points: t.naf.points.map(i)
                    },
                    doubles: t.doubles && {
                        step: t.doubles.step,
                        points: t.doubles.points.map(i)
                    }
                }
            }
            return e
        }
    }, rF.prototype.toJSON = function() {
        return this.precomputed ? [this.x, this.y, this.precomputed && {
            doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {
                wnd: this.precomputed.naf.wnd,
                points: this.precomputed.naf.points.slice(1)
            }
        }] : [this.x, this.y]
    }, rF.fromJSON = function(t, e, r) {
        "string" == typeof e && (e = JSON.parse(e));
        var i = t.point(e[0], e[1], r);
        if (!e[2]) return i;

        function n(e) {
            return t.point(e[0], e[1], r)
        }
        var s = e[2];
        return i.precomputed = {
            beta: null,
            doubles: s.doubles && {
                step: s.doubles.step,
                points: [i].concat(s.doubles.points.map(n))
            },
            naf: s.naf && {
                wnd: s.naf.wnd,
                points: [i].concat(s.naf.points.map(n))
            }
        }, i
    }, rF.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
    }, rF.prototype.isInfinity = function() {
        return this.inf
    }, rF.prototype.add = function(t) {
        if (this.inf) return t;
        if (t.inf) return this;
        if (this.eq(t)) return this.dbl();
        if (this.neg().eq(t) || 0 === this.x.cmp(t.x)) return this.curve.point(null, null);
        var e = this.y.redSub(t.y);
        0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
        var r = e.redSqr().redISub(this.x).redISub(t.x),
            i = e.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, i)
    }, rF.prototype.dbl = function() {
        if (this.inf) return this;
        var t = this.y.redAdd(this.y);
        if (0 === t.cmpn(0)) return this.curve.point(null, null);
        var e = this.curve.a,
            r = this.x.redSqr(),
            i = t.redInvm(),
            n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),
            s = n.redSqr().redISub(this.x.redAdd(this.x)),
            o = n.redMul(this.x.redSub(s)).redISub(this.y);
        return this.curve.point(s, o)
    }, rF.prototype.getX = function() {
        return this.x.fromRed()
    }, rF.prototype.getY = function() {
        return this.y.fromRed()
    }, rF.prototype.mul = function(t) {
        return t = new tX(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
    }, rF.prototype.mulAdd = function(t, e, r) {
        var i = [this, e],
            n = [t, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
    }, rF.prototype.jmulAdd = function(t, e, r) {
        var i = [this, e],
            n = [t, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
    }, rF.prototype.eq = function(t) {
        return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
    }, rF.prototype.neg = function(t) {
        if (this.inf) return this;
        var e = this.curve.point(this.x, this.y.redNeg());
        if (t && this.precomputed) {
            var r = this.precomputed,
                i = function(t) {
                    return t.neg()
                };
            e.precomputed = {
                naf: r.naf && {
                    wnd: r.naf.wnd,
                    points: r.naf.points.map(i)
                },
                doubles: r.doubles && {
                    step: r.doubles.step,
                    points: r.doubles.points.map(i)
                }
            }
        }
        return e
    }, rF.prototype.toJ = function() {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
    }, rB(rH, rL.BasePoint), rz.prototype.jpoint = function(t, e, r) {
        return new rH(this, t, e, r)
    }, rH.prototype.toP = function() {
        if (this.isInfinity()) return this.curve.point(null, null);
        var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            i = this.y.redMul(e).redMul(t);
        return this.curve.point(r, i)
    }, rH.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
    }, rH.prototype.add = function(t) {
        if (this.isInfinity()) return t;
        if (t.isInfinity()) return this;
        var e = t.z.redSqr(),
            r = this.z.redSqr(),
            i = this.x.redMul(e),
            n = t.x.redMul(r),
            s = this.y.redMul(e.redMul(t.z)),
            o = t.y.redMul(r.redMul(this.z)),
            a = i.redSub(n),
            h = s.redSub(o);
        if (0 === a.cmpn(0)) return 0 !== h.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var c = a.redSqr(),
            u = c.redMul(a),
            l = i.redMul(c),
            f = h.redSqr().redIAdd(u).redISub(l).redISub(l),
            d = h.redMul(l.redISub(f)).redISub(s.redMul(u)),
            p = this.z.redMul(t.z).redMul(a);
        return this.curve.jpoint(f, d, p)
    }, rH.prototype.mixedAdd = function(t) {
        if (this.isInfinity()) return t.toJ();
        if (t.isInfinity()) return this;
        var e = this.z.redSqr(),
            r = this.x,
            i = t.x.redMul(e),
            n = this.y,
            s = t.y.redMul(e).redMul(this.z),
            o = r.redSub(i),
            a = n.redSub(s);
        if (0 === o.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var h = o.redSqr(),
            c = h.redMul(o),
            u = r.redMul(h),
            l = a.redSqr().redIAdd(c).redISub(u).redISub(u),
            f = a.redMul(u.redISub(l)).redISub(n.redMul(c)),
            d = this.z.redMul(o);
        return this.curve.jpoint(l, f, d)
    }, rH.prototype.dblp = function(t) {
        if (0 === t || this.isInfinity()) return this;
        if (!t) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            var e, r = this;
            for (e = 0; e < t; e++) r = r.dbl();
            return r
        }
        var i = this.curve.a,
            n = this.curve.tinv,
            s = this.x,
            o = this.y,
            a = this.z,
            h = a.redSqr().redSqr(),
            c = o.redAdd(o);
        for (e = 0; e < t; e++) {
            var u = s.redSqr(),
                l = c.redSqr(),
                f = l.redSqr(),
                d = u.redAdd(u).redIAdd(u).redIAdd(i.redMul(h)),
                p = s.redMul(l),
                g = d.redSqr().redISub(p.redAdd(p)),
                m = p.redISub(g),
                y = d.redMul(m);
            y = y.redIAdd(y).redISub(f);
            var v = c.redMul(a);
            e + 1 < t && (h = h.redMul(f)), s = g, a = v, c = y
        }
        return this.curve.jpoint(s, c.redMul(n), a)
    }, rH.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
    }, rH.prototype._zeroDbl = function() {
        var t, e, r;
        if (this.zOne) {
            var i = this.x.redSqr(),
                n = this.y.redSqr(),
                s = n.redSqr(),
                o = this.x.redAdd(n).redSqr().redISub(i).redISub(s);
            o = o.redIAdd(o);
            var a = i.redAdd(i).redIAdd(i),
                h = a.redSqr().redISub(o).redISub(o),
                c = s.redIAdd(s);
            c = (c = c.redIAdd(c)).redIAdd(c), t = h, e = a.redMul(o.redISub(h)).redISub(c), r = this.y.redAdd(this.y)
        } else {
            var u = this.x.redSqr(),
                l = this.y.redSqr(),
                f = l.redSqr(),
                d = this.x.redAdd(l).redSqr().redISub(u).redISub(f);
            d = d.redIAdd(d);
            var p = u.redAdd(u).redIAdd(u),
                g = p.redSqr(),
                m = f.redIAdd(f);
            m = (m = m.redIAdd(m)).redIAdd(m), t = g.redISub(d).redISub(d), e = p.redMul(d.redISub(t)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r)
        }
        return this.curve.jpoint(t, e, r)
    }, rH.prototype._threeDbl = function() {
        var t, e, r;
        if (this.zOne) {
            var i = this.x.redSqr(),
                n = this.y.redSqr(),
                s = n.redSqr(),
                o = this.x.redAdd(n).redSqr().redISub(i).redISub(s);
            o = o.redIAdd(o);
            var a = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                h = a.redSqr().redISub(o).redISub(o);
            t = h;
            var c = s.redIAdd(s);
            c = (c = c.redIAdd(c)).redIAdd(c), e = a.redMul(o.redISub(h)).redISub(c), r = this.y.redAdd(this.y)
        } else {
            var u = this.z.redSqr(),
                l = this.y.redSqr(),
                f = this.x.redMul(l),
                d = this.x.redSub(u).redMul(this.x.redAdd(u));
            d = d.redAdd(d).redIAdd(d);
            var p = f.redIAdd(f),
                g = (p = p.redIAdd(p)).redAdd(p);
            t = d.redSqr().redISub(g), r = this.y.redAdd(this.z).redSqr().redISub(l).redISub(u);
            var m = l.redSqr();
            m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), e = d.redMul(p.redISub(t)).redISub(m)
        }
        return this.curve.jpoint(t, e, r)
    }, rH.prototype._dbl = function() {
        var t = this.curve.a,
            e = this.x,
            r = this.y,
            i = this.z,
            n = i.redSqr().redSqr(),
            s = e.redSqr(),
            o = r.redSqr(),
            a = s.redAdd(s).redIAdd(s).redIAdd(t.redMul(n)),
            h = e.redAdd(e),
            c = (h = h.redIAdd(h)).redMul(o),
            u = a.redSqr().redISub(c.redAdd(c)),
            l = c.redISub(u),
            f = o.redSqr();
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var d = a.redMul(l).redISub(f),
            p = r.redAdd(r).redMul(i);
        return this.curve.jpoint(u, d, p)
    }, rH.prototype.trpl = function() {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            i = e.redSqr(),
            n = t.redAdd(t).redIAdd(t),
            s = n.redSqr(),
            o = this.x.redAdd(e).redSqr().redISub(t).redISub(i),
            a = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(s)).redSqr(),
            h = i.redIAdd(i);
        h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
        var c = n.redIAdd(o).redSqr().redISub(s).redISub(a).redISub(h),
            u = e.redMul(c);
        u = (u = u.redIAdd(u)).redIAdd(u);
        var l = this.x.redMul(a).redISub(u);
        l = (l = l.redIAdd(l)).redIAdd(l);
        var f = this.y.redMul(c.redMul(h.redISub(c)).redISub(o.redMul(a)));
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var d = this.z.redAdd(o).redSqr().redISub(r).redISub(a);
        return this.curve.jpoint(l, f, d)
    }, rH.prototype.mul = function(t, e) {
        return t = new tX(t, e), this.curve._wnafMul(this, t)
    }, rH.prototype.eq = function(t) {
        if ("affine" === t.type) return this.eq(t.toJ());
        if (this === t) return !0;
        var e = this.z.redSqr(),
            r = t.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
        var i = e.redMul(this.z),
            n = r.redMul(t.z);
        return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0)
    }, rH.prototype.eqXToP = function(t) {
        var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e);
        if (0 === this.x.cmp(r)) return !0;
        for (var i = t.clone(), n = this.curve.redN.redMul(e);;) {
            if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
            if (r.redIAdd(n), 0 === this.x.cmp(r)) return !0
        }
    }, rH.prototype.inspect = function() {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
    }, rH.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    };
    var rK = rR(function(t, e) {
            e.base = rL, e.short = rz, e.mont = null, e.edwards = null
        }),
        r$ = rR(function(t, e) {
            var r, i = rT.assert;

            function n(t) {
                "short" === t.type ? this.curve = new rK.short(t) : "edwards" === t.type ? this.curve = new rK.edwards(t) : this.curve = new rK.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }

            function s(t, r) {
                Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var i = new n(r);
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: i
                        }), i
                    }
                })
            }
            e.PresetCurve = n, s("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: eO.sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }), s("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: eO.sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }), s("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: eO.sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }), s("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: eO.sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }), s("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: eO.sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }), s("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: eO.sha256,
                gRed: !1,
                g: ["9"]
            }), s("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: eO.sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                r = null.crash()
            } catch {
                r = void 0
            }
            s("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: eO.sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
            })
        });

    function rV(t) {
        if (!(this instanceof rV)) return new rV(t);
        this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var e = rO.toArray(t.entropy, t.entropyEnc || "hex"),
            r = rO.toArray(t.nonce, t.nonceEnc || "hex"),
            i = rO.toArray(t.pers, t.persEnc || "hex");
        rC(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, i)
    }
    rV.prototype._init = function(t, e, r) {
        var i = t.concat(e).concat(r);
        this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
        for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
        this._update(i), this._reseed = 1, this.reseedInterval = 0x1000000000000
    }, rV.prototype._hmac = function() {
        return new eO.hmac(this.hash, this.K)
    }, rV.prototype._update = function(t) {
        var e = this._hmac().update(this.V).update([0]);
        t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
    }, rV.prototype.reseed = function(t, e, r, i) {
        "string" != typeof e && (i = r, r = e, e = null), t = rO.toArray(t, e), r = rO.toArray(r, i), rC(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
    }, rV.prototype.generate = function(t, e, r, i) {
        if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
        "string" != typeof e && (i = r, r = e, e = null), r && (r = rO.toArray(r, i || "hex"), this._update(r));
        for (var n = []; n.length < t;) this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
        var s = n.slice(0, t);
        return this._update(r), this._reseed++, rO.encode(s, e)
    };
    var rG = rT.assert;

    function rJ(t, e) {
        this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
    }
    rJ.fromPublic = function(t, e, r) {
        return e instanceof rJ ? e : new rJ(t, {
            pub: e,
            pubEnc: r
        })
    }, rJ.fromPrivate = function(t, e, r) {
        return e instanceof rJ ? e : new rJ(t, {
            priv: e,
            privEnc: r
        })
    }, rJ.prototype.validate = function() {
        var t = this.getPublic();
        return t.isInfinity() ? {
            result: !1,
            reason: "Invalid public key"
        } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
            result: !0,
            reason: null
        } : {
            result: !1,
            reason: "Public key * N != O"
        } : {
            result: !1,
            reason: "Public key is not a point"
        }
    }, rJ.prototype.getPublic = function(t, e) {
        return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
    }, rJ.prototype.getPrivate = function(t) {
        return "hex" === t ? this.priv.toString(16, 2) : this.priv
    }, rJ.prototype._importPrivate = function(t, e) {
        this.priv = new tX(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
    }, rJ.prototype._importPublic = function(t, e) {
        if (t.x || t.y) {
            "mont" === this.ec.curve.type ? rG(t.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && rG(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
            return
        }
        this.pub = this.ec.curve.decodePoint(t, e)
    }, rJ.prototype.derive = function(t) {
        return t.validate() || rG(t.validate(), "public point not validated"), t.mul(this.priv).getX()
    }, rJ.prototype.sign = function(t, e, r) {
        return this.ec.sign(t, this, e, r)
    }, rJ.prototype.verify = function(t, e) {
        return this.ec.verify(t, e, this)
    }, rJ.prototype.inspect = function() {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
    };
    var rQ = rT.assert;

    function rY(t, e) {
        if (t instanceof rY) return t;
        this._importDER(t, e) || (rQ(t.r && t.s, "Signature without r or s"), this.r = new tX(t.r, 16), this.s = new tX(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
    }

    function rW() {
        this.place = 0
    }

    function rX(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var i = 15 & r;
        if (0 === i || i > 4) return !1;
        for (var n = 0, s = 0, o = e.place; s < i; s++, o++) n <<= 8, n |= t[o], n >>>= 0;
        return !(n <= 127) && (e.place = o, n)
    }

    function rZ(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
        return 0 === e ? t : t.slice(e)
    }

    function r0(t, e) {
        if (e < 128) return void t.push(e);
        var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
        for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
        t.push(e)
    }
    rY.prototype._importDER = function(t, e) {
        t = rT.toArray(t, e);
        var r = new rW;
        if (48 !== t[r.place++]) return !1;
        var i = rX(t, r);
        if (!1 === i || i + r.place !== t.length || 2 !== t[r.place++]) return !1;
        var n = rX(t, r);
        if (!1 === n) return !1;
        var s = t.slice(r.place, n + r.place);
        if (r.place += n, 2 !== t[r.place++]) return !1;
        var o = rX(t, r);
        if (!1 === o || t.length !== o + r.place) return !1;
        var a = t.slice(r.place, o + r.place);
        if (0 === s[0])
            if (!(128 & s[1])) return !1;
            else s = s.slice(1);
        if (0 === a[0])
            if (!(128 & a[1])) return !1;
            else a = a.slice(1);
        return this.r = new tX(s), this.s = new tX(a), this.recoveryParam = null, !0
    }, rY.prototype.toDER = function(t) {
        var e = this.r.toArray(),
            r = this.s.toArray();
        for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = rZ(e), r = rZ(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
        var i = [2];
        r0(i, e.length), (i = i.concat(e)).push(2), r0(i, r.length);
        var n = i.concat(r),
            s = [48];
        return r0(s, n.length), s = s.concat(n), rT.encode(s, t)
    };
    var r1 = function() {
            throw Error("unsupported")
        },
        r2 = rT.assert;

    function r5(t) {
        if (!(this instanceof r5)) return new r5(t);
        "string" == typeof t && (r2(Object.prototype.hasOwnProperty.call(r$, t), "Unknown curve " + t), t = r$[t]), t instanceof r$.PresetCurve && (t = {
            curve: t
        }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
    }
    r5.prototype.keyPair = function(t) {
        return new rJ(this, t)
    }, r5.prototype.keyFromPrivate = function(t, e) {
        return rJ.fromPrivate(this, t, e)
    }, r5.prototype.keyFromPublic = function(t, e) {
        return rJ.fromPublic(this, t, e)
    }, r5.prototype.genKeyPair = function(t) {
        t || (t = {});
        for (var e = new rV({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || r1(this.hash.hmacStrength),
                entropyEnc: t.entropy && t.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), r = this.n.byteLength(), i = this.n.sub(new tX(2));;) {
            var n = new tX(e.generate(r));
            if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n)
        }
    }, r5.prototype._truncateToN = function(t, e) {
        var r = 8 * t.byteLength() - this.n.bitLength();
        return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
    }, r5.prototype.sign = function(t, e, r, i) {
        "object" == typeof r && (i = r, r = null), i || (i = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new tX(t, 16));
        for (var n = this.n.byteLength(), s = e.getPrivate().toArray("be", n), o = t.toArray("be", n), a = new rV({
                hash: this.hash,
                entropy: s,
                nonce: o,
                pers: i.pers,
                persEnc: i.persEnc || "utf8"
            }), h = this.n.sub(new tX(1)), c = 0;; c++) {
            var u = i.k ? i.k(c) : new tX(a.generate(this.n.byteLength()));
            if (!(0 >= (u = this._truncateToN(u, !0)).cmpn(1) || u.cmp(h) >= 0)) {
                var l = this.g.mul(u);
                if (!l.isInfinity()) {
                    var f = l.getX(),
                        d = f.umod(this.n);
                    if (0 !== d.cmpn(0)) {
                        var p = u.invm(this.n).mul(d.mul(e.getPrivate()).iadd(t));
                        if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                            var g = !!l.getY().isOdd() | 2 * (0 !== f.cmp(d));
                            return i.canonical && p.cmp(this.nh) > 0 && (p = this.n.sub(p), g ^= 1), new rY({
                                r: d,
                                s: p,
                                recoveryParam: g
                            })
                        }
                    }
                }
            }
        }
    }, r5.prototype.verify = function(t, e, r, i) {
        t = this._truncateToN(new tX(t, 16)), r = this.keyFromPublic(r, i);
        var n = (e = new rY(e, "hex")).r,
            s = e.s;
        if (0 > n.cmpn(1) || n.cmp(this.n) >= 0 || 0 > s.cmpn(1) || s.cmp(this.n) >= 0) return !1;
        var o, a = s.invm(this.n),
            h = a.mul(t).umod(this.n),
            c = a.mul(n).umod(this.n);
        return this.curve._maxwellTrick ? !(o = this.g.jmulAdd(h, r.getPublic(), c)).isInfinity() && o.eqXToP(n) : !(o = this.g.mulAdd(h, r.getPublic(), c)).isInfinity() && 0 === o.getX().umod(this.n).cmp(n)
    }, r5.prototype.recoverPubKey = function(t, e, r, i) {
        r2((3 & r) === r, "The recovery param is more than two bits"), e = new rY(e, i);
        var n = this.n,
            s = new tX(t),
            o = e.r,
            a = e.s,
            h = 1 & r,
            c = r >> 1;
        if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c) throw Error("Unable to find sencond key candinate");
        o = c ? this.curve.pointFromX(o.add(this.curve.n), h) : this.curve.pointFromX(o, h);
        var u = e.r.invm(n),
            l = n.sub(s).mul(u).umod(n),
            f = a.mul(u).umod(n);
        return this.g.mulAdd(l, o, f)
    }, r5.prototype.getKeyRecoveryParam = function(t, e, r, i) {
        if (null !== (e = new rY(e, i)).recoveryParam) return e.recoveryParam;
        for (var n, s = 0; s < 4; s++) {
            try {
                n = this.recoverPubKey(t, e, s)
            } catch {
                continue
            }
            if (n.eq(r)) return s
        }
        throw Error("Unable to find valid recovery factor")
    };
    var r6 = rR(function(t, e) {
        e.version = "6.5.4", e.utils = rT, e.rand = function() {
            throw Error("unsupported")
        }, e.curve = rK, e.curves = r$, e.ec = r5, e.eddsa = null
    }).ec;
    let r3 = new tq("signing-key/5.7.0"),
        r8 = null;

    function r4() {
        return r8 || (r8 = new r6("secp256k1")), r8
    }
    class r9 {
        constructor(t) {
            eR(this, "curve", "secp256k1"), eR(this, "privateKey", t$(t)), 32 !== function(t) {
                if ("string" != typeof t) t = t$(t);
                else if (!tH(t) || t.length % 2) return null;
                return (t.length - 2) / 2
            }(this.privateKey) && r3.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
            const e = r4().keyFromPrivate(tF(this.privateKey));
            eR(this, "publicKey", "0x" + e.getPublic(!1, "hex")), eR(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), eR(this, "_isSigningKey", !0)
        }
        _addPoint(t) {
            let e = r4().keyFromPublic(tF(this.publicKey)),
                r = r4().keyFromPublic(tF(t));
            return "0x" + e.pub.add(r.pub).encodeCompressed("hex")
        }
        signDigest(t) {
            let e = r4().keyFromPrivate(tF(this.privateKey)),
                r = tF(t);
            32 !== r.length && r3.throwArgumentError("bad digest length", "digest", t);
            let i = e.sign(r, {
                canonical: !0
            });
            return tJ({
                recoveryParam: i.recoveryParam,
                r: tG("0x" + i.r.toString(16), 32),
                s: tG("0x" + i.s.toString(16), 32)
            })
        }
        computeSharedSecret(t) {
            let e = r4().keyFromPrivate(tF(this.privateKey)),
                r = r4().keyFromPublic(tF(r7(t)));
            return tG("0x" + e.derive(r.getPublic()).toString(16), 32)
        }
        static isSigningKey(t) {
            return !!(t && t._isSigningKey)
        }
    }

    function r7(t, e) {
        let r = tF(t);
        if (32 === r.length) {
            let t = new r9(r);
            return e ? "0x" + r4().keyFromPrivate(r).getPublic(!0, "hex") : t.publicKey
        }
        return 33 === r.length ? e ? t$(r) : "0x" + r4().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? e ? "0x" + r4().keyFromPublic(r).getPublic(!0, "hex") : t$(r) : r3.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
    }
    async function it(t, e, r, i, n, s) {
        switch (r.t) {
            case "eip191":
                var o, a, h;
                return o = t, a = e, h = r.s, (function(t, e) {
                    let r, i;
                    var n, s = tV(tQ(tV(r7((n = tF(t), i = {
                        r: tF((r = tJ(e)).r),
                        s: tF(r.s)
                    }, "0x" + r4().recoverPubKey(tF(n), i, r.recoveryParam).encode("hex", !1))), 1)), 12);
                    let o = null;
                    if ("string" != typeof s && eI.throwArgumentError("invalid address", "address", s), s.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== s.substring(0, 2) && (s = "0x" + s), o = eS(s), s.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && o !== s && eI.throwArgumentError("bad address checksum", "address", s);
                    else if (s.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                        for (s.substring(2, 4) !== function(t) {
                                let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t => eM[t]).join("");
                                for (; e.length >= eP;) {
                                    let t = e.substring(0, eP);
                                    e = parseInt(t, 10) % 97 + e.substring(t.length)
                                }
                                let r = String(98 - parseInt(e, 10) % 97);
                                for (; r.length < 2;) r = "0" + r;
                                return r
                            }(s) && eI.throwArgumentError("bad icap checksum", "address", s), o = new t0(s.substring(4), 36).toString(16); o.length < 40;) o = "0" + o;
                        o = eS("0x" + o)
                    } else eI.throwArgumentError("invalid address", "address", s);
                    return o
                })(eE(a), h).toLowerCase() === o.toLowerCase();
            case "eip1271":
                return await ie(t, e, r.s, i, n, s);
            default:
                throw Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`)
        }
    }
    async function ie(t, e, r, i, n, s) {
        try {
            let o = "0x1626ba7e",
                a = r.substring(2),
                h = eE(e).substring(2),
                c = o + h + "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041" + a,
                u = await fetch(`${s||"https://rpc.walletconnect.org/v1"}/?chainId=${i}&projectId=${n}`, {
                    method: "POST",
                    body: JSON.stringify({
                        id: Date.now() + Math.floor(1e3 * Math.random()),
                        jsonrpc: "2.0",
                        method: "eth_call",
                        params: [{
                            to: t,
                            data: c
                        }, "latest"]
                    })
                }),
                {
                    result: l
                } = await u.json();
            return !!l && l.slice(0, o.length).toLowerCase() === o.toLowerCase()
        } catch (t) {
            return console.error("isValidEip1271Signature: ", t), !1
        }
    }
    new tq("transactions/5.7.0"), (h = p || (p = {}))[h.legacy = 0] = "legacy", h[h.eip2930 = 1] = "eip2930", h[h.eip1559 = 2] = "eip1559";
    var ir = Object.defineProperty,
        ii = Object.defineProperties,
        is = Object.getOwnPropertyDescriptors,
        io = Object.getOwnPropertySymbols,
        ia = Object.prototype.hasOwnProperty,
        ih = Object.prototype.propertyIsEnumerable,
        ic = (t, e, r) => e in t ? ir(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r;
    let iu = t => t ? .split(":"),
        il = t => {
            let e = t && iu(t);
            if (e) return t.includes("did:pkh:") ? e[3] : e[1]
        },
        id = t => {
            let e = t && iu(t);
            if (e) return e[2] + ":" + e[3]
        },
        ip = t => {
            let e = t && iu(t);
            if (e) return e.pop()
        };
    async function ig(t) {
        let {
            cacao: e,
            projectId: r
        } = t, {
            s: i,
            p: n
        } = e, s = im(n, n.iss), o = ip(n.iss);
        return await it(o, s, i, il(n.iss), r)
    }
    let im = (t, e) => {
        let r = `${t.domain} wants you to sign in with your Ethereum account:`,
            i = ip(e);
        if (!t.aud && !t.uri) throw Error("Either `aud` or `uri` is required to construct the message");
        let n = t.statement || void 0,
            s = `URI: ${t.aud||t.uri}`,
            o = `Version: ${t.version}`,
            a = `Chain ID: ${il(e)}`,
            h = `Nonce: ${t.nonce}`,
            c = `Issued At: ${t.iat}`,
            u = t.exp ? `Expiration Time: ${t.exp}` : void 0,
            l = t.nbf ? `Not Before: ${t.nbf}` : void 0,
            f = t.requestId ? `Request ID: ${t.requestId}` : void 0,
            d = t.resources ? `Resources:${t.resources.map(t=>`
- ${t}`).join("")}` : void 0,
            p = iA(t.resources);
        return p && (n = function(t = "", e) {
            iy(e);
            let r = "I further authorize the stated URI to perform the following actions on my behalf: ";
            if (t.includes(r)) return t;
            let i = [],
                n = 0;
            Object.keys(e.att).forEach(t => {
                let r = Object.keys(e.att[t]).map(t => ({
                    ability: t.split("/")[0],
                    action: t.split("/")[1]
                }));
                r.sort((t, e) => t.action.localeCompare(e.action));
                let s = {};
                r.forEach(t => {
                    s[t.ability] || (s[t.ability] = []), s[t.ability].push(t.action)
                });
                let o = Object.keys(s).map(e => (n++, `(${n}) '${e}': '${s[e].join("', '")}' for '${t}'.`));
                i.push(o.join(", ").replace(".,", "."))
            });
            let s = i.join(" "),
                o = `${r}${s}`;
            return `${t?t+" ":""}${o}`
        }(n, ib(p))), [r, i, "", n, "", s, o, a, h, c, u, l, f, d].filter(t => null != t).join(`
`)
    };

    function iy(t) {
        if (!t) throw Error("No recap provided, value is undefined");
        if (!t.att) throw Error("No `att` property found");
        let e = Object.keys(t.att);
        if (!(null != e && e.length)) throw Error("No resources found in `att` property");
        e.forEach(e => {
            let r = t.att[e];
            if (Array.isArray(r) || "object" != typeof r) throw Error(`Resource must be an object: ${e}`);
            if (!Object.keys(r).length) throw Error(`Resource object is empty: ${e}`);
            Object.keys(r).forEach(t => {
                let e = r[t];
                if (!Array.isArray(e)) throw Error(`Ability limits ${t} must be an array of objects, found: ${e}`);
                if (!e.length) throw Error(`Value of ${t} is empty array, must be an array with objects`);
                e.forEach(e => {
                    if ("object" != typeof e) throw Error(`Ability limits (${t}) must be an array of objects, found: ${e}`)
                })
            })
        })
    }

    function iv(t) {
        return iy(t), `urn:recap:${y.Buffer.from(JSON.stringify(t)).toString("base64").replace(/=/g,"")}`
    }

    function ib(t) {
        var e;
        let r = (e = t.replace("urn:recap:", ""), JSON.parse(y.Buffer.from(e, "base64").toString("utf-8")));
        return iy(r), r
    }

    function iw(t) {
        var e;
        let r = ib(t);
        iy(r);
        let i = null == (e = r.att) ? void 0 : e.eip155;
        return i ? Object.keys(i).map(t => t.split("/")[1]) : []
    }

    function i_(t) {
        let e = ib(t);
        iy(e);
        let r = [];
        return Object.values(e.att).forEach(t => {
            Object.values(t).forEach(t => {
                var e;
                null != (e = t ? .[0]) && e.chains && r.push(t[0].chains)
            })
        }), [...new Set(r.flat())]
    }

    function iA(t) {
        if (!t) return;
        let e = t ? .[t.length - 1];
        return e && e.includes("urn:recap:") ? e : void 0
    }
    let ix = "base10",
        iE = "base16",
        iI = "base64pad",
        iS = "base64url",
        iM = "utf8";

    function iP() {
        let t = (0, I.randomBytes)(32);
        return (0, P.toString)(t, iE)
    }

    function iR(t) {
        let e = (0, S.hash)((0, R.fromString)(t, iE));
        return (0, P.toString)(e, iE)
    }

    function iC(t) {
        let e = (0, S.hash)((0, R.fromString)(t, iM));
        return (0, P.toString)(e, iE)
    }

    function iN(t) {
        return (0, R.fromString)(`${t}`, ix)
    }

    function iO(t) {
        return Number((0, P.toString)(t, ix))
    }

    function iT(t) {
        let {
            encoding: e = iI
        } = t;
        if (2 === iO(t.type)) return (0, P.toString)((0, C.concat)([t.type, t.sealed]), e);
        if (1 === iO(t.type)) {
            if (typeof t.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
            return (0, P.toString)((0, C.concat)([t.type, t.senderPublicKey, t.iv, t.sealed]), e)
        }
        return (0, P.toString)((0, C.concat)([t.type, t.iv, t.sealed]), e)
    }

    function ik(t) {
        let {
            encoded: e,
            encoding: r = iI
        } = t, i = (0, R.fromString)(e, r), n = i.slice(0, 1);
        if (1 === iO(n)) {
            let t = i.slice(1, 33),
                e = i.slice(33, 45);
            return {
                type: n,
                sealed: i.slice(45),
                iv: e,
                senderPublicKey: t
            }
        }
        if (2 === iO(n)) return {
            type: n,
            sealed: i.slice(1),
            iv: (0, I.randomBytes)(12)
        };
        let s = i.slice(1, 13);
        return {
            type: n,
            sealed: i.slice(13),
            iv: s
        }
    }

    function iD(t) {
        let e = t ? .type || 0;
        if (1 === e) {
            if (typeof t ? .senderPublicKey > "u") throw Error("missing sender public key");
            if (typeof t ? .receiverPublicKey > "u") throw Error("missing receiver public key")
        }
        return {
            type: e,
            senderPublicKey: t ? .senderPublicKey,
            receiverPublicKey: t ? .receiverPublicKey
        }
    }

    function iq(t) {
        return 1 === t.type && "string" == typeof t.senderPublicKey && "string" == typeof t.receiverPublicKey
    }

    function iL(t) {
        return t ? .relay || {
            protocol: "irn"
        }
    }

    function iU(t) {
        let e = K.RELAY_JSONRPC[t];
        if (typeof e > "u") throw Error(`Relay Protocol not supported: ${t}`);
        return e
    }
    var iB = Object.defineProperty,
        ij = Object.defineProperties,
        iz = Object.getOwnPropertyDescriptors,
        iF = Object.getOwnPropertySymbols,
        iH = Object.prototype.hasOwnProperty,
        iK = Object.prototype.propertyIsEnumerable,
        i$ = (t, e, r) => e in t ? iB(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        iV = (t, e) => {
            for (var r in e || (e = {})) iH.call(e, r) && i$(t, r, e[r]);
            if (iF)
                for (var r of iF(e)) iK.call(e, r) && i$(t, r, e[r]);
            return t
        };

    function iG(t) {
        var e;
        if (!t.includes("wc:")) {
            let e = tI(t);
            null != e && e.includes("wc:") && (t = e)
        }
        let r = (t = (t = t.includes("wc://") ? t.replace("wc://", "") : t).includes("wc:") ? t.replace("wc:", "") : t).indexOf(":"),
            i = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
            n = t.substring(0, r),
            s = t.substring(r + 1, i).split("@"),
            o = "u" > typeof i ? t.substring(i) : "",
            a = A.parse(o),
            h = "string" == typeof a.methods ? a.methods.split(",") : void 0;
        return {
            protocol: n,
            topic: (e = s[0]).startsWith("//") ? e.substring(2) : e,
            version: parseInt(s[1], 10),
            symKey: a.symKey,
            relay: function(t, e = "-") {
                let r = {},
                    i = "relay" + e;
                return Object.keys(t).forEach(e => {
                    if (e.startsWith(i)) {
                        let n = e.replace(i, ""),
                            s = t[e];
                        r[n] = s
                    }
                }), r
            }(a),
            methods: h,
            expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
        }
    }

    function iJ(t) {
        return `${t.protocol}:${t.topic}@${t.version}?` + A.stringify(iV(ij(iV({
            symKey: t.symKey
        }, function(t, e = "-") {
            let r = {};
            return Object.keys(t).forEach(i => {
                t[i] && (r["relay" + e + i] = t[i])
            }), r
        }(t.relay)), iz({
            expiryTimestamp: t.expiryTimestamp
        })), t.methods ? {
            methods: t.methods.join(",")
        } : {}))
    }

    function iQ(t, e, r) {
        return `${t}?wc_ev=${r}&topic=${e}`
    }

    function iY(t) {
        let e = [];
        return t.forEach(t => {
            let [r, i] = t.split(":");
            e.push(`${r}:${i}`)
        }), e
    }

    function iW(t) {
        return t.includes(":")
    }

    function iX(t) {
        return iW(t) ? t.split(":")[0] : t
    }

    function iZ(t, e) {
        var r;
        let i, n = (r = e = e.map(t => t.replace("did:pkh:", "")), i = {}, r ? .forEach(t => {
            let [e, r] = t.split(":");
            i[e] || (i[e] = {
                accounts: [],
                chains: [],
                events: []
            }), i[e].accounts.push(t), i[e].chains.push(`${e}:${r}`)
        }), i);
        for (let [e, r] of Object.entries(n)) r.methods ? r.methods = tb(r.methods, t) : r.methods = t, r.events = ["chainChanged", "accountsChanged"];
        return n
    }
    Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
    let i0 = {
            INVALID_METHOD: {
                message: "Invalid method.",
                code: 1001
            },
            INVALID_EVENT: {
                message: "Invalid event.",
                code: 1002
            },
            INVALID_UPDATE_REQUEST: {
                message: "Invalid update request.",
                code: 1003
            },
            INVALID_EXTEND_REQUEST: {
                message: "Invalid extend request.",
                code: 1004
            },
            INVALID_SESSION_SETTLE_REQUEST: {
                message: "Invalid session settle request.",
                code: 1005
            },
            UNAUTHORIZED_METHOD: {
                message: "Unauthorized method.",
                code: 3001
            },
            UNAUTHORIZED_EVENT: {
                message: "Unauthorized event.",
                code: 3002
            },
            UNAUTHORIZED_UPDATE_REQUEST: {
                message: "Unauthorized update request.",
                code: 3003
            },
            UNAUTHORIZED_EXTEND_REQUEST: {
                message: "Unauthorized extend request.",
                code: 3004
            },
            USER_REJECTED: {
                message: "User rejected.",
                code: 5e3
            },
            USER_REJECTED_CHAINS: {
                message: "User rejected chains.",
                code: 5001
            },
            USER_REJECTED_METHODS: {
                message: "User rejected methods.",
                code: 5002
            },
            USER_REJECTED_EVENTS: {
                message: "User rejected events.",
                code: 5003
            },
            UNSUPPORTED_CHAINS: {
                message: "Unsupported chains.",
                code: 5100
            },
            UNSUPPORTED_METHODS: {
                message: "Unsupported methods.",
                code: 5101
            },
            UNSUPPORTED_EVENTS: {
                message: "Unsupported events.",
                code: 5102
            },
            UNSUPPORTED_ACCOUNTS: {
                message: "Unsupported accounts.",
                code: 5103
            },
            UNSUPPORTED_NAMESPACE_KEY: {
                message: "Unsupported namespace key.",
                code: 5104
            },
            USER_DISCONNECTED: {
                message: "User disconnected.",
                code: 6e3
            },
            SESSION_SETTLEMENT_FAILED: {
                message: "Session settlement failed.",
                code: 7e3
            },
            WC_METHOD_UNSUPPORTED: {
                message: "Unsupported wc_ method.",
                code: 10001
            }
        },
        i1 = {
            NOT_INITIALIZED: {
                message: "Not initialized.",
                code: 1
            },
            NO_MATCHING_KEY: {
                message: "No matching key.",
                code: 2
            },
            RESTORE_WILL_OVERRIDE: {
                message: "Restore will override.",
                code: 3
            },
            RESUBSCRIBED: {
                message: "Resubscribed.",
                code: 4
            },
            MISSING_OR_INVALID: {
                message: "Missing or invalid.",
                code: 5
            },
            EXPIRED: {
                message: "Expired.",
                code: 6
            },
            UNKNOWN_TYPE: {
                message: "Unknown type.",
                code: 7
            },
            MISMATCHED_TOPIC: {
                message: "Mismatched topic.",
                code: 8
            },
            NON_CONFORMING_NAMESPACES: {
                message: "Non conforming namespaces.",
                code: 9
            }
        };

    function i2(t, e) {
        let {
            message: r,
            code: i
        } = i1[t];
        return {
            message: e ? `${r} ${e}` : r,
            code: i
        }
    }

    function i5(t, e) {
        let {
            message: r,
            code: i
        } = i0[t];
        return {
            message: e ? `${r} ${e}` : r,
            code: i
        }
    }

    function i6(t, e) {
        return !!Array.isArray(t) && (!("u" > typeof e) || !t.length || t.every(e))
    }

    function i3(t) {
        return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length
    }

    function i8(t) {
        return typeof t > "u"
    }

    function i4(t, e) {
        return !!(e && i8(t)) || "string" == typeof t && !!t.trim().length
    }

    function i9(t, e) {
        return !!(e && i8(t)) || "number" == typeof t && !isNaN(t)
    }

    function i7(t) {
        return !!(i4(t, !1) && t.includes(":")) && 2 === t.split(":").length
    }

    function nt(t) {
        let e = !0;
        return i6(t) ? t.length && (e = t.every(t => i4(t, !1))) : e = !1, e
    }

    function ne(t, e) {
        let r = null;
        return Object.values(t).forEach(t => {
            var i;
            let n;
            if (r) return;
            let s = (i = `${e}, namespace`, n = null, nt(t ? .methods) ? nt(t ? .events) || (n = i5("UNSUPPORTED_EVENTS", `${i}, events should be an array of strings or empty array for no events`)) : n = i5("UNSUPPORTED_METHODS", `${i}, methods should be an array of strings or empty array for no methods`), n);
            s && (r = s)
        }), r
    }

    function nr(t, e) {
        let r = null;
        if (t && i3(t)) {
            let i, n = ne(t, e);
            n && (r = n);
            let s = (i = null, Object.values(t).forEach(t => {
                var r, n;
                let s;
                if (i) return;
                let o = (r = t ? .accounts, n = `${e} namespace`, s = null, i6(r) ? r.forEach(t => {
                    s || function(t) {
                        if (i4(t, !1) && t.includes(":")) {
                            let e = t.split(":");
                            if (3 === e.length) {
                                let t = e[0] + ":" + e[1];
                                return !!e[2] && i7(t)
                            }
                        }
                        return !1
                    }(t) || (s = i5("UNSUPPORTED_ACCOUNTS", `${n}, account ${t} should be a string and conform to "namespace:chainId:address" format`))
                }) : s = i5("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s);
                o && (i = o)
            }), i);
            s && (r = s)
        } else r = i2("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
        return r
    }

    function ni(t) {
        return i4(t.protocol, !0)
    }

    function nn(t) {
        return "u" > typeof t
    }

    function ns(t, e) {
        let r;
        return !(!i7(e) || !(r = [], Object.values(t).forEach(t => {
            r.push(...iY(t.accounts))
        }), r).includes(e))
    }

    function no(t, e, r) {
        var i, n;
        let s, o, a = null,
            h = (s = {}, Object.keys(i = t).forEach(t => {
                var e;
                t.includes(":") ? s[t] = i[t] : null == (e = i[t].chains) || e.forEach(e => {
                    s[e] = {
                        methods: i[t].methods,
                        events: i[t].events
                    }
                })
            }), s),
            c = (o = {}, Object.keys(n = e).forEach(t => {
                if (t.includes(":")) o[t] = n[t];
                else {
                    let e = iY(n[t].accounts);
                    e ? .forEach(e => {
                        o[e] = {
                            accounts: n[t].accounts.filter(t => t.includes(`${e}:`)),
                            methods: n[t].methods,
                            events: n[t].events
                        }
                    })
                }
            }), o),
            u = Object.keys(h),
            l = Object.keys(c),
            f = na(Object.keys(t)),
            d = na(Object.keys(e)),
            p = f.filter(t => !d.includes(t));
        return p.length && (a = i2("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${p.toString()}
      Received: ${Object.keys(e).toString()}`)), tc(u, l) || (a = i2("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${l.toString()}`)), Object.keys(e).forEach(t => {
            if (!t.includes(":") || a) return;
            let i = iY(e[t].accounts);
            i.includes(t) || (a = i2("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${t}
        Required: ${t}
        Approved: ${i.toString()}`))
        }), u.forEach(t => {
            a || (tc(h[t].methods, c[t].methods) ? tc(h[t].events, c[t].events) || (a = i2("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${t}`)) : a = i2("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${t}`))
        }), a
    }

    function na(t) {
        return [...new Set(t.map(t => t.includes(":") ? t.split(":")[0] : t))]
    }

    function nh() {
        let t = to();
        return new Promise(e => {
            switch (t) {
                case tr:
                    e(ts() && navigator ? .onLine);
                    break;
                case tt:
                    e(nc());
                    break;
                default:
                    e(!0)
            }
        })
    }
    async function nc() {
        if (tn() && null != t.g && t.g.NetInfo) {
            let e = await (null == t.g ? void 0 : t.g.NetInfo.fetch());
            return e ? .isConnected
        }
        return !0
    }
    let nu = {};
    class nl {
        static get(t) {
            return nu[t]
        }
        static set(t, e) {
            nu[t] = e
        }
        static delete(t) {
            delete nu[t]
        }
    }
    var nf = t.i(835588),
        nd = t.i(829432),
        np = t.i(513582),
        ng = t.i(319592),
        nm = t.i(211902);
    class ny extends nm.IEvents {
        constructor(t) {
            super(), this.opts = t, this.protocol = "wc", this.version = 2
        }
    }
    class nv extends nm.IEvents {
        constructor(t, e) {
            super(), this.core = t, this.logger = e, this.records = new Map
        }
    }
    class nb {
        constructor(t, e) {
            this.logger = t, this.core = e
        }
    }
    class nw extends nm.IEvents {
        constructor(t, e) {
            super(), this.relayer = t, this.logger = e
        }
    }
    class n_ extends nm.IEvents {
        constructor(t) {
            super()
        }
    }
    class nA {
        constructor(t, e, r, i) {
            this.core = t, this.logger = e, this.name = r
        }
    }
    class nx extends nm.IEvents {
        constructor(t, e) {
            super(), this.relayer = t, this.logger = e
        }
    }
    class nE extends nm.IEvents {
        constructor(t, e) {
            super(), this.core = t, this.logger = e
        }
    }
    class nI {
        constructor(t, e, r) {
            this.core = t, this.logger = e, this.store = r
        }
    }
    class nS {
        constructor(t, e) {
            this.projectId = t, this.logger = e
        }
    }
    class nM {
        constructor(t, e, r) {
            this.core = t, this.logger = e, this.telemetryEnabled = r
        }
    }
    g.default;
    class nP {
        constructor(t) {
            this.opts = t, this.protocol = "wc", this.version = 2
        }
    }
    g.EventEmitter;
    class nR {
        constructor(t) {
            this.client = t
        }
    }
    var nC = t.i(319863);
    t.i(191105);
    var nN = t.i(948031),
        nO = t.i(583486),
        nT = t.i(230886),
        nk = t.i(470774),
        nD = t.i(586991);
    let nq = t => t.split("?")[0],
        nL = "u" > typeof WebSocket ? WebSocket : "u" > typeof t.g.WebSocket ? t.g.WebSocket : "u" > typeof window && "u" > typeof window.WebSocket ? window.WebSocket : "u" > typeof self && "u" > typeof self.WebSocket ? self.WebSocket : t.r(114918);
    class nU {
        constructor(t) {
            if (this.url = t, this.events = new g.EventEmitter, this.registering = !1, !(0, nT.isWsUrl)(t)) throw Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
            this.url = t
        }
        get connected() {
            return "u" > typeof this.socket
        }
        get connecting() {
            return this.registering
        }
        on(t, e) {
            this.events.on(t, e)
        }
        once(t, e) {
            this.events.once(t, e)
        }
        off(t, e) {
            this.events.off(t, e)
        }
        removeListener(t, e) {
            this.events.removeListener(t, e)
        }
        async open(t = this.url) {
            await this.register(t)
        }
        async close() {
            return new Promise((t, e) => {
                typeof this.socket > "u" ? e(Error("Connection already closed")) : (this.socket.onclose = e => {
                    this.onClose(e), t()
                }, this.socket.close())
            })
        }
        async send(t) {
            typeof this.socket > "u" && (this.socket = await this.register());
            try {
                this.socket.send((0, L.safeJsonStringify)(t))
            } catch (e) {
                this.onError(t.id, e)
            }
        }
        register(e = this.url) {
            if (!(0, nT.isWsUrl)(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
            if (this.registering) {
                let t = this.events.getMaxListeners();
                return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((t, e) => {
                    this.events.once("register_error", t => {
                        this.resetMaxListeners(), e(t)
                    }), this.events.once("open", () => {
                        if (this.resetMaxListeners(), typeof this.socket > "u") return e(Error("WebSocket connection is missing or invalid"));
                        t(this.socket)
                    })
                })
            }
            return this.url = e, this.registering = !0, new Promise((r, i) => {
                let n = new URLSearchParams(e).get("origin"),
                    s = (0, nk.isReactNative)() ? {
                        headers: {
                            origin: n
                        }
                    } : {
                        rejectUnauthorized: !(0, nT.isLocalhostUrl)(e)
                    },
                    o = new nL(e, [], s);
                "u" > typeof WebSocket || "u" > typeof t.g.WebSocket || "u" > typeof window && "u" > typeof window.WebSocket || "u" > typeof self && "u" > typeof self.WebSocket ? o.onerror = t => {
                    i(this.emitError(t.error))
                } : o.on("error", t => {
                    i(this.emitError(t))
                }), o.onopen = () => {
                    this.onOpen(o), r(o)
                }
            })
        }
        onOpen(t) {
            t.onmessage = t => this.onPayload(t), t.onclose = t => this.onClose(t), this.socket = t, this.registering = !1, this.events.emit("open")
        }
        onClose(t) {
            this.socket = void 0, this.registering = !1, this.events.emit("close", t)
        }
        onPayload(t) {
            if (typeof t.data > "u") return;
            let e = "string" == typeof t.data ? (0, L.safeJsonParse)(t.data) : t.data;
            this.events.emit("payload", e)
        }
        onError(t, e) {
            let r = this.parseError(e),
                i = r.message || r.toString(),
                n = (0, nN.formatJsonRpcError)(t, i);
            this.events.emit("payload", n)
        }
        parseError(t, e = this.url) {
            return (0, nD.parseConnectionError)(t, nq(e), "WS")
        }
        resetMaxListeners() {
            this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
        }
        emitError(t) {
            let e = this.parseError(Error(t ? .message || `WebSocket connection failed for host: ${nq(this.url)}`));
            return this.events.emit("register_error", e), e
        }
    }
    var nB = t.i(119134);
    let nj = "core",
        nz = `wc@2:${nj}:`,
        nF = {
            database: ":memory:"
        },
        nH = "client_ed25519_seed",
        nK = b.ONE_DAY,
        n$ = b.SIX_HOURS,
        nV = "wss://relay.walletconnect.org",
        nG = "relayer_message",
        nJ = "relayer_message_ack",
        nQ = "relayer_connection_stalled",
        nY = "relayer_publish",
        nW = "payload",
        nX = "connect",
        nZ = "disconnect",
        n0 = "error",
        n1 = "2.17.0",
        n2 = "link_mode",
        n5 = "relay",
        n6 = "WALLETCONNECT_LINK_MODE_APPS",
        n3 = "subscription_created",
        n8 = "subscription_deleted",
        n4 = (b.THIRTY_DAYS, 1e3 * b.FIVE_SECONDS),
        n9 = (b.THIRTY_DAYS, {
            wc_pairingDelete: {
                req: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 1e3
                },
                res: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 1001
                }
            },
            wc_pairingPing: {
                req: {
                    ttl: b.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1002
                },
                res: {
                    ttl: b.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1003
                }
            },
            unregistered_method: {
                req: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 0
                },
                res: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 0
                }
            }
        }),
        n7 = "pairing_create",
        st = "pairing_delete",
        se = "history_created",
        sr = "history_updated",
        si = "history_deleted",
        sn = "expirer_created",
        ss = "expirer_deleted",
        so = "expirer_expired",
        sa = (b.ONE_DAY, "https://verify.walletconnect.org"),
        sh = `${sa}/v3`,
        sc = ["https://verify.walletconnect.com", sa],
        su = "malformed_pairing_uri",
        sl = "session_approve_started";
    var sf = function(t, e) {
        if (t.length >= 255) throw TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var n = 0; n < t.length; n++) {
            var s = t.charAt(n),
                o = s.charCodeAt(0);
            if (255 !== r[o]) throw TypeError(s + " is ambiguous");
            r[o] = n
        }
        var a = t.length,
            h = t.charAt(0),
            c = Math.log(a) / Math.log(256),
            u = Math.log(256) / Math.log(a);

        function l(t) {
            if ("string" != typeof t) throw TypeError("Expected String");
            if (0 === t.length) return new Uint8Array;
            var e = 0;
            if (" " !== t[0]) {
                for (var i = 0, n = 0; t[e] === h;) i++, e++;
                for (var s = (t.length - e) * c + 1 >>> 0, o = new Uint8Array(s); t[e];) {
                    var u = r[t.charCodeAt(e)];
                    if (255 === u) return;
                    for (var l = 0, f = s - 1;
                        (0 !== u || l < n) && -1 !== f; f--, l++) u += a * o[f] >>> 0, o[f] = u % 256 >>> 0, u = u / 256 >>> 0;
                    if (0 !== u) throw Error("Non-zero carry");
                    n = l, e++
                }
                if (" " !== t[e]) {
                    for (var d = s - n; d !== s && 0 === o[d];) d++;
                    for (var p = new Uint8Array(i + (s - d)), g = i; d !== s;) p[g++] = o[d++];
                    return p
                }
            }
        }
        return {
            encode: function(e) {
                if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                if (0 === e.length) return "";
                for (var r = 0, i = 0, n = 0, s = e.length; n !== s && 0 === e[n];) n++, r++;
                for (var o = (s - n) * u + 1 >>> 0, c = new Uint8Array(o); n !== s;) {
                    for (var l = e[n], f = 0, d = o - 1;
                        (0 !== l || f < i) && -1 !== d; d--, f++) l += 256 * c[d] >>> 0, c[d] = l % a >>> 0, l = l / a >>> 0;
                    if (0 !== l) throw Error("Non-zero carry");
                    i = f, n++
                }
                for (var p = o - i; p !== o && 0 === c[p];) p++;
                for (var g = h.repeat(r); p < o; ++p) g += t.charAt(c[p]);
                return g
            },
            decodeUnsafe: l,
            decode: function(t) {
                var r = l(t);
                if (r) return r;
                throw Error(`Non-${e} character`)
            }
        }
    };
    let sd = t => {
        if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t;
        if (t instanceof ArrayBuffer) return new Uint8Array(t);
        if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
        throw Error("Unknown type, must be binary type")
    };
    class sp {
        constructor(t, e, r) {
            this.name = t, this.prefix = e, this.baseEncode = r
        }
        encode(t) {
            if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
            throw Error("Unknown type, must be binary type")
        }
    }
    class sg {
        constructor(t, e, r) {
            if (this.name = t, this.prefix = e, void 0 === e.codePointAt(0)) throw Error("Invalid prefix character");
            this.prefixCodePoint = e.codePointAt(0), this.baseDecode = r
        }
        decode(t) {
            if ("string" == typeof t) {
                if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                return this.baseDecode(t.slice(this.prefix.length))
            }
            throw Error("Can only multibase decode strings")
        }
        or(t) {
            return sy(this, t)
        }
    }
    class sm {
        constructor(t) {
            this.decoders = t
        }
        or(t) {
            return sy(this, t)
        }
        decode(t) {
            let e = t[0],
                r = this.decoders[e];
            if (r) return r.decode(t);
            throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
        }
    }
    let sy = (t, e) => new sm({ ...t.decoders || {
            [t.prefix]: t
        },
        ...e.decoders || {
            [e.prefix]: e
        }
    });
    class sv {
        constructor(t, e, r, i) {
            this.name = t, this.prefix = e, this.baseEncode = r, this.baseDecode = i, this.encoder = new sp(t, e, r), this.decoder = new sg(t, e, i)
        }
        encode(t) {
            return this.encoder.encode(t)
        }
        decode(t) {
            return this.decoder.decode(t)
        }
    }
    let sb = ({
            name: t,
            prefix: e,
            encode: r,
            decode: i
        }) => new sv(t, e, r, i),
        sw = ({
            prefix: t,
            name: e,
            alphabet: r
        }) => {
            let {
                encode: i,
                decode: n
            } = sf(r, e);
            return sb({
                prefix: t,
                name: e,
                encode: i,
                decode: t => sd(n(t))
            })
        },
        s_ = ({
            name: t,
            prefix: e,
            bitsPerChar: r,
            alphabet: i
        }) => sb({
            prefix: e,
            name: t,
            encode: t => ((t, e, r) => {
                let i = "=" === e[e.length - 1],
                    n = (1 << r) - 1,
                    s = "",
                    o = 0,
                    a = 0;
                for (let i = 0; i < t.length; ++i)
                    for (a = a << 8 | t[i], o += 8; o > r;) o -= r, s += e[n & a >> o];
                if (o && (s += e[n & a << r - o]), i)
                    for (; s.length * r & 7;) s += "=";
                return s
            })(t, i, r),
            decode: e => ((t, e, r, i) => {
                let n = {};
                for (let t = 0; t < e.length; ++t) n[e[t]] = t;
                let s = t.length;
                for (;
                    "=" === t[s - 1];) --s;
                let o = new Uint8Array(s * r / 8 | 0),
                    a = 0,
                    h = 0,
                    c = 0;
                for (let e = 0; e < s; ++e) {
                    let s = n[t[e]];
                    if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                    h = h << r | s, (a += r) >= 8 && (a -= 8, o[c++] = 255 & h >> a)
                }
                if (a >= r || 255 & h << 8 - a) throw SyntaxError("Unexpected end of data");
                return o
            })(e, i, r, t)
        });
    var sA = Object.freeze({
            __proto__: null,
            identity: sb({
                prefix: "\0",
                name: "identity",
                encode: t => new TextDecoder().decode(t),
                decode: t => new TextEncoder().encode(t)
            })
        }),
        sx = Object.freeze({
            __proto__: null,
            base2: s_({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            })
        }),
        sE = Object.freeze({
            __proto__: null,
            base8: s_({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            })
        }),
        sI = Object.freeze({
            __proto__: null,
            base10: sw({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            })
        }),
        sS = Object.freeze({
            __proto__: null,
            base16: s_({
                prefix: "f",
                name: "base16",
                alphabet: "0123456789abcdef",
                bitsPerChar: 4
            }),
            base16upper: s_({
                prefix: "F",
                name: "base16upper",
                alphabet: "0123456789ABCDEF",
                bitsPerChar: 4
            })
        }),
        sM = Object.freeze({
            __proto__: null,
            base32: s_({
                prefix: "b",
                name: "base32",
                alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                bitsPerChar: 5
            }),
            base32upper: s_({
                prefix: "B",
                name: "base32upper",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                bitsPerChar: 5
            }),
            base32pad: s_({
                prefix: "c",
                name: "base32pad",
                alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                bitsPerChar: 5
            }),
            base32padupper: s_({
                prefix: "C",
                name: "base32padupper",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                bitsPerChar: 5
            }),
            base32hex: s_({
                prefix: "v",
                name: "base32hex",
                alphabet: "0123456789abcdefghijklmnopqrstuv",
                bitsPerChar: 5
            }),
            base32hexupper: s_({
                prefix: "V",
                name: "base32hexupper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                bitsPerChar: 5
            }),
            base32hexpad: s_({
                prefix: "t",
                name: "base32hexpad",
                alphabet: "0123456789abcdefghijklmnopqrstuv=",
                bitsPerChar: 5
            }),
            base32hexpadupper: s_({
                prefix: "T",
                name: "base32hexpadupper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                bitsPerChar: 5
            }),
            base32z: s_({
                prefix: "h",
                name: "base32z",
                alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                bitsPerChar: 5
            })
        }),
        sP = Object.freeze({
            __proto__: null,
            base36: sw({
                prefix: "k",
                name: "base36",
                alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
            }),
            base36upper: sw({
                prefix: "K",
                name: "base36upper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            })
        }),
        sR = Object.freeze({
            __proto__: null,
            base58btc: sw({
                name: "base58btc",
                prefix: "z",
                alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
            }),
            base58flickr: sw({
                name: "base58flickr",
                prefix: "Z",
                alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
            })
        }),
        sC = Object.freeze({
            __proto__: null,
            base64: s_({
                prefix: "m",
                name: "base64",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                bitsPerChar: 6
            }),
            base64pad: s_({
                prefix: "M",
                name: "base64pad",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                bitsPerChar: 6
            }),
            base64url: s_({
                prefix: "u",
                name: "base64url",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                bitsPerChar: 6
            }),
            base64urlpad: s_({
                prefix: "U",
                name: "base64urlpad",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                bitsPerChar: 6
            })
        });
    let sN = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
        sO = sN.reduce((t, e, r) => (t[r] = e, t), []),
        sT = sN.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
    var sk = Object.freeze({
        __proto__: null,
        base256emoji: sb({
            prefix: "🚀",
            name: "base256emoji",
            encode: function(t) {
                return t.reduce((t, e) => t += sO[e], "")
            },
            decode: function(t) {
                let e = [];
                for (let r of t) {
                    let t = sT[r.codePointAt(0)];
                    if (void 0 === t) throw Error(`Non-base256emoji character: ${r}`);
                    e.push(t)
                }
                return new Uint8Array(e)
            }
        })
    });

    function sD(t, e, r) {
        e = e || [], r = r || 0;
        for (var i = r; t >= 0x80000000;) e[r++] = 255 & t | 128, t /= 128;
        for (; - 128 & t;) e[r++] = 255 & t | 128, t >>>= 7;
        return e[r] = 0 | t, sD.bytes = r - i + 1, e
    }
    var sq = function(t) {
        return t < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 0x10000000 ? 4 : t < 0x800000000 ? 5 : t < 0x40000000000 ? 6 : t < 0x2000000000000 ? 7 : t < 0x100000000000000 ? 8 : t < 0x8000000000000000 ? 9 : 10
    };
    let sL = (t, e, r = 0) => (sD(t, e, r), e),
        sU = (t, e) => {
            let r = e.byteLength,
                i = sq(t),
                n = i + sq(r),
                s = new Uint8Array(n + r);
            return sL(t, s, 0), sL(r, s, i), s.set(e, n), new sB(t, r, e, s)
        };
    class sB {
        constructor(t, e, r, i) {
            this.code = t, this.size = e, this.digest = r, this.bytes = i
        }
    }
    let sj = ({
        name: t,
        code: e,
        encode: r
    }) => new sz(t, e, r);
    class sz {
        constructor(t, e, r) {
            this.name = t, this.code = e, this.encode = r
        }
        digest(t) {
            if (t instanceof Uint8Array) {
                let e = this.encode(t);
                return e instanceof Uint8Array ? sU(this.code, e) : e.then(t => sU(this.code, t))
            }
            throw Error("Unknown type, must be binary type")
        }
    }
    let sF = t => async e => new Uint8Array(await crypto.subtle.digest(t, e));
    var sH = Object.freeze({
            __proto__: null,
            sha256: sj({
                name: "sha2-256",
                code: 18,
                encode: sF("SHA-256")
            }),
            sha512: sj({
                name: "sha2-512",
                code: 19,
                encode: sF("SHA-512")
            })
        }),
        sK = Object.freeze({
            __proto__: null,
            identity: {
                code: 0,
                name: "identity",
                encode: sd,
                digest: t => sU(0, sd(t))
            }
        });
    new TextEncoder, new TextDecoder;
    let s$ = { ...sA,
        ...sx,
        ...sE,
        ...sI,
        ...sS,
        ...sM,
        ...sP,
        ...sR,
        ...sC,
        ...sk
    };

    function sV(t, e, r, i) {
        return {
            name: t,
            prefix: e,
            encoder: {
                name: t,
                prefix: e,
                encode: r
            },
            decoder: {
                decode: i
            }
        }
    }({ ...sH,
        ...sK
    });
    let sG = sV("utf8", "u", t => "u" + new TextDecoder("utf8").decode(t), t => new TextEncoder().encode(t.substring(1))),
        sJ = sV("ascii", "a", t => {
            let e = "a";
            for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
            return e
        }, t => {
            let e = function(t = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(t) : new Uint8Array(t)
            }((t = t.substring(1)).length);
            for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
            return e
        }),
        sQ = {
            utf8: sG,
            "utf-8": sG,
            hex: s$.base16,
            latin1: sJ,
            ascii: sJ,
            binary: sJ,
            ...s$
        };
    class sY {
        constructor(t, e) {
            this.core = t, this.logger = e, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = nz, this.init = async () => {
                if (!this.initialized) {
                    let t = await this.getKeyChain();
                    "u" > typeof t && (this.keychain = t), this.initialized = !0
                }
            }, this.has = t => (this.isInitialized(), this.keychain.has(t)), this.set = async (t, e) => {
                this.isInitialized(), this.keychain.set(t, e), await this.persist()
            }, this.get = t => {
                this.isInitialized();
                let e = this.keychain.get(t);
                if (typeof e > "u") {
                    let {
                        message: e
                    } = i2("NO_MATCHING_KEY", `${this.name}: ${t}`);
                    throw Error(e)
                }
                return e
            }, this.del = async t => {
                this.isInitialized(), this.keychain.delete(t), await this.persist()
            }, this.core = t, this.logger = (0, np.generateChildLogger)(e, this.name)
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        get storageKey() {
            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
        }
        async setKeyChain(t) {
            await this.core.storage.setItem(this.storageKey, tu(t))
        }
        async getKeyChain() {
            let t = await this.core.storage.getItem(this.storageKey);
            return "u" > typeof t ? tl(t) : void 0
        }
        async persist() {
            await this.setKeyChain(this.keychain)
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: t
                } = i2("NOT_INITIALIZED", this.name);
                throw Error(t)
            }
        }
    }
    class sW {
        constructor(t, e, r) {
            this.core = t, this.logger = e, this.name = "crypto", this.randomSessionIdentifier = iP(), this.initialized = !1, this.init = async () => {
                this.initialized || (await this.keychain.init(), this.initialized = !0)
            }, this.hasKeys = t => (this.isInitialized(), this.keychain.has(t)), this.getClientId = async () => (this.isInitialized(), j(F(await this.getClientSeed()).publicKey)), this.generateKeyPair = () => {
                let t;
                this.isInitialized();
                let e = (t = M.generateKeyPair(), {
                    privateKey: (0, P.toString)(t.secretKey, iE),
                    publicKey: (0, P.toString)(t.publicKey, iE)
                });
                return this.setPrivateKey(e.publicKey, e.privateKey)
            }, this.signJWT = async t => {
                this.isInitialized();
                let e = F(await this.getClientSeed()),
                    r = this.randomSessionIdentifier;
                return await H(r, t, nK, e)
            }, this.generateSharedKey = (t, e, r) => {
                var i;
                let n, s;
                this.isInitialized();
                let o = (i = this.getPrivateKey(t), n = M.sharedKey((0, R.fromString)(i, iE), (0, R.fromString)(e, iE), !0), s = new E.HKDF(S.SHA256, n).expand(32), (0, P.toString)(s, iE));
                return this.setSymKey(o, r)
            }, this.setSymKey = async (t, e) => {
                this.isInitialized();
                let r = e || iR(t);
                return await this.keychain.set(r, t), r
            }, this.deleteKeyPair = async t => {
                this.isInitialized(), await this.keychain.del(t)
            }, this.deleteSymKey = async t => {
                this.isInitialized(), await this.keychain.del(t)
            }, this.encode = async (t, e, r) => {
                this.isInitialized();
                let i = iD(r),
                    n = (0, L.safeJsonStringify)(e);
                if (2 === i.type) {
                    var s;
                    let t, e;
                    return s = r ? .encoding, t = iN(2), e = (0, I.randomBytes)(12), iT({
                        type: t,
                        sealed: (0, R.fromString)(n, iM),
                        iv: e,
                        encoding: s
                    })
                }
                if (iq(i)) {
                    let e = i.senderPublicKey,
                        r = i.receiverPublicKey;
                    t = await this.generateSharedKey(e, r)
                }
                let o = this.getSymKey(t),
                    {
                        type: a,
                        senderPublicKey: h
                    } = i;
                return function(t) {
                    let e = iN("u" > typeof t.type ? t.type : 0);
                    if (1 === iO(e) && typeof t.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                    let r = "u" > typeof t.senderPublicKey ? (0, R.fromString)(t.senderPublicKey, iE) : void 0,
                        i = "u" > typeof t.iv ? (0, R.fromString)(t.iv, iE) : (0, I.randomBytes)(12);
                    return iT({
                        type: e,
                        sealed: new x.ChaCha20Poly1305((0, R.fromString)(t.symKey, iE)).seal(i, (0, R.fromString)(t.message, iM)),
                        iv: i,
                        senderPublicKey: r,
                        encoding: t.encoding
                    })
                }({
                    type: a,
                    symKey: o,
                    message: n,
                    senderPublicKey: h,
                    encoding: r ? .encoding
                })
            }, this.decode = async (t, e, r) => {
                let i;
                this.isInitialized();
                let n = iD({
                    type: iO((i = ik({
                        encoded: e,
                        encoding: r ? .encoding
                    })).type),
                    senderPublicKey: "u" > typeof i.senderPublicKey ? (0, P.toString)(i.senderPublicKey, iE) : void 0,
                    receiverPublicKey: r ? .receiverPublicKey
                });
                if (2 === n.type) {
                    let t = function(t, e) {
                        let {
                            sealed: r
                        } = ik({
                            encoded: t,
                            encoding: e
                        });
                        return (0, P.toString)(r, iM)
                    }(e, r ? .encoding);
                    return (0, L.safeJsonParse)(t)
                }
                if (iq(n)) {
                    let e = n.receiverPublicKey,
                        r = n.senderPublicKey;
                    t = await this.generateSharedKey(e, r)
                }
                try {
                    let i = this.getSymKey(t),
                        n = function(t) {
                            let e = new x.ChaCha20Poly1305((0, R.fromString)(t.symKey, iE)),
                                {
                                    sealed: r,
                                    iv: i
                                } = ik({
                                    encoded: t.encoded,
                                    encoding: t ? .encoding
                                }),
                                n = e.open(i, r);
                            if (null === n) throw Error("Failed to decrypt");
                            return (0, P.toString)(n, iM)
                        }({
                            symKey: i,
                            encoded: e,
                            encoding: r ? .encoding
                        });
                    return (0, L.safeJsonParse)(n)
                } catch (e) {
                    this.logger.error(`Failed to decode message from topic: '${t}', clientId: '${await this.getClientId()}'`), this.logger.error(e)
                }
            }, this.getPayloadType = (t, e = iI) => iO(ik({
                encoded: t,
                encoding: e
            }).type), this.getPayloadSenderPublicKey = (t, e = iI) => {
                let r = ik({
                    encoded: t,
                    encoding: e
                });
                return r.senderPublicKey ? (0, P.toString)(r.senderPublicKey, iE) : void 0
            }, this.core = t, this.logger = (0, np.generateChildLogger)(e, this.name), this.keychain = r || new sY(this.core, this.logger)
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        async setPrivateKey(t, e) {
            return await this.keychain.set(t, e), t
        }
        getPrivateKey(t) {
            return this.keychain.get(t)
        }
        async getClientSeed() {
            let t = "";
            try {
                t = this.keychain.get(nH)
            } catch {
                t = iP(), await this.keychain.set(nH, t)
            }
            return function(t, e = "utf8") {
                let r = sQ[e];
                if (!r) throw Error(`Unsupported encoding "${e}"`);
                return ("utf8" === e || "utf-8" === e) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(t, "utf8") : r.decoder.decode(`${r.prefix}${t}`)
            }(t, "base16")
        }
        getSymKey(t) {
            return this.keychain.get(t)
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: t
                } = i2("NOT_INITIALIZED", this.name);
                throw Error(t)
            }
        }
    }
    class sX extends nb {
        constructor(t, e) {
            super(t, e), this.logger = t, this.core = e, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = nz, this.init = async () => {
                if (!this.initialized) {
                    this.logger.trace("Initialized");
                    try {
                        let t = await this.getRelayerMessages();
                        "u" > typeof t && (this.messages = t), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            size: this.messages.size
                        })
                    } catch (t) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
                    } finally {
                        this.initialized = !0
                    }
                }
            }, this.set = async (t, e) => {
                this.isInitialized();
                let r = iC(e),
                    i = this.messages.get(t);
                return typeof i > "u" && (i = {}), "u" > typeof i[r] || (i[r] = e, this.messages.set(t, i), await this.persist()), r
            }, this.get = t => {
                this.isInitialized();
                let e = this.messages.get(t);
                return typeof e > "u" && (e = {}), e
            }, this.has = (t, e) => (this.isInitialized(), "u" > typeof this.get(t)[iC(e)]), this.del = async t => {
                this.isInitialized(), this.messages.delete(t), await this.persist()
            }, this.logger = (0, np.generateChildLogger)(t, this.name), this.core = e
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        get storageKey() {
            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
        }
        async setRelayerMessages(t) {
            await this.core.storage.setItem(this.storageKey, tu(t))
        }
        async getRelayerMessages() {
            let t = await this.core.storage.getItem(this.storageKey);
            return "u" > typeof t ? tl(t) : void 0
        }
        async persist() {
            await this.setRelayerMessages(this.messages)
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: t
                } = i2("NOT_INITIALIZED", this.name);
                throw Error(t)
            }
        }
    }
    class sZ extends nw {
        constructor(t, e) {
            super(t, e), this.relayer = t, this.logger = e, this.events = new g.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, b.toMiliseconds)(b.ONE_MINUTE), this.failedPublishTimeout = (0, b.toMiliseconds)(b.ONE_SECOND), this.needsTransportRestart = !1, this.publish = async (t, e, r) => {
                var i;
                this.logger.debug("Publishing Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: t,
                        message: e,
                        opts: r
                    }
                });
                let n = r ? .ttl || n$,
                    s = iL(r),
                    o = r ? .prompt || !1,
                    a = r ? .tag || 0,
                    h = r ? .id || (0, nN.getBigIntRpcId)().toString(),
                    c = {
                        topic: t,
                        message: e,
                        opts: {
                            ttl: n,
                            relay: s,
                            prompt: o,
                            tag: a,
                            id: h,
                            attestation: r ? .attestation
                        }
                    },
                    u = `Failed to publish payload, please try again. id:${h} tag:${a}`,
                    l = Date.now(),
                    f, d = 1;
                try {
                    for (; void 0 === f;) {
                        if (Date.now() - l > this.publishTimeout) throw Error(u);
                        this.logger.trace({
                            id: h,
                            attempts: d
                        }, `publisher.publish - attempt ${d}`), f = await await td(this.rpcPublish(t, e, n, s, o, a, h, r ? .attestation).catch(t => this.logger.warn(t)), this.publishTimeout, u), d++, f || await new Promise(t => setTimeout(t, this.failedPublishTimeout))
                    }
                    this.relayer.events.emit(nY, c), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                        type: "method",
                        method: "publish",
                        params: {
                            id: h,
                            topic: t,
                            message: e,
                            opts: r
                        }
                    })
                } catch (t) {
                    if (this.logger.debug("Failed to Publish Payload"), this.logger.error(t), null != (i = r ? .internal) && i.throwOnFailedPublish) throw t;
                    this.queue.set(h, c)
                }
            }, this.on = (t, e) => {
                this.events.on(t, e)
            }, this.once = (t, e) => {
                this.events.once(t, e)
            }, this.off = (t, e) => {
                this.events.off(t, e)
            }, this.removeListener = (t, e) => {
                this.events.removeListener(t, e)
            }, this.relayer = t, this.logger = (0, np.generateChildLogger)(e, this.name), this.registerEventListeners()
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        rpcPublish(t, e, r, i, n, s, o, a) {
            var h, c, u, l;
            let f = {
                method: iU(i.protocol).publish,
                params: {
                    topic: t,
                    message: e,
                    ttl: r,
                    prompt: n,
                    tag: s,
                    attestation: a
                },
                id: o
            };
            return i8(null == (h = f.params) ? void 0 : h.prompt) && (null == (c = f.params) || delete c.prompt), i8(null == (u = f.params) ? void 0 : u.tag) && (null == (l = f.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                type: "message",
                direction: "outgoing",
                request: f
            }), this.relayer.request(f)
        }
        removeRequestFromQueue(t) {
            this.queue.delete(t)
        }
        checkQueue() {
            this.queue.forEach(async t => {
                let {
                    topic: e,
                    message: r,
                    opts: i
                } = t;
                await this.publish(e, r, i)
            })
        }
        registerEventListeners() {
            this.relayer.core.heartbeat.on(nf.HEARTBEAT_EVENTS.pulse, () => {
                if (this.needsTransportRestart) {
                    this.needsTransportRestart = !1, this.relayer.events.emit(nQ);
                    return
                }
                this.checkQueue()
            }), this.relayer.on(nJ, t => {
                this.removeRequestFromQueue(t.id.toString())
            })
        }
    }
    class s0 {
        constructor() {
            this.map = new Map, this.set = (t, e) => {
                let r = this.get(t);
                this.exists(t, e) || this.map.set(t, [...r, e])
            }, this.get = t => this.map.get(t) || [], this.exists = (t, e) => this.get(t).includes(e), this.delete = (t, e) => {
                if (typeof e > "u") return void this.map.delete(t);
                if (!this.map.has(t)) return;
                let r = this.get(t);
                if (!this.exists(t, e)) return;
                let i = r.filter(t => t !== e);
                i.length ? this.map.set(t, i) : this.map.delete(t)
            }, this.clear = () => {
                this.map.clear()
            }
        }
        get topics() {
            return Array.from(this.map.keys())
        }
    }
    var s1 = Object.defineProperty,
        s2 = Object.defineProperties,
        s5 = Object.getOwnPropertyDescriptors,
        s6 = Object.getOwnPropertySymbols,
        s3 = Object.prototype.hasOwnProperty,
        s8 = Object.prototype.propertyIsEnumerable,
        s4 = (t, e, r) => e in t ? s1(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        s9 = (t, e) => {
            for (var r in e || (e = {})) s3.call(e, r) && s4(t, r, e[r]);
            if (s6)
                for (var r of s6(e)) s8.call(e, r) && s4(t, r, e[r]);
            return t
        };
    class s7 extends nx {
        constructor(t, e) {
            super(t, e), this.relayer = t, this.logger = e, this.subscriptions = new Map, this.topicMap = new s0, this.events = new g.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = nz, this.subscribeTimeout = (0, b.toMiliseconds)(b.ONE_MINUTE), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
                this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId(), await this.restore()), this.initialized = !0
            }, this.subscribe = async (t, e) => {
                this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: t,
                        opts: e
                    }
                });
                try {
                    let r = iL(e),
                        i = {
                            topic: t,
                            relay: r,
                            transportType: e ? .transportType
                        };
                    this.pending.set(t, i);
                    let n = await this.rpcSubscribe(t, r, e ? .transportType);
                    return "string" == typeof n && (this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                        type: "method",
                        method: "subscribe",
                        params: {
                            topic: t,
                            opts: e
                        }
                    })), n
                } catch (t) {
                    throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(t), t
                }
            }, this.unsubscribe = async (t, e) => {
                await this.restartToComplete(), this.isInitialized(), "u" > typeof e ? .id ? await this.unsubscribeById(t, e.id, e) : await this.unsubscribeByTopic(t, e)
            }, this.isSubscribed = async t => {
                if (this.topics.includes(t)) return !0;
                let e = `${this.pendingSubscriptionWatchLabel}_${t}`;
                return await new Promise((r, i) => {
                    let n = new b.Watch;
                    n.start(e);
                    let s = setInterval(() => {
                        !this.pending.has(t) && this.topics.includes(t) && (clearInterval(s), n.stop(e), r(!0)), n.elapsed(e) >= n4 && (clearInterval(s), n.stop(e), i(Error("Subscription resolution timeout")))
                    }, this.pollingInterval)
                }).catch(() => !1)
            }, this.on = (t, e) => {
                this.events.on(t, e)
            }, this.once = (t, e) => {
                this.events.once(t, e)
            }, this.off = (t, e) => {
                this.events.off(t, e)
            }, this.removeListener = (t, e) => {
                this.events.removeListener(t, e)
            }, this.start = async () => {
                await this.onConnect()
            }, this.stop = async () => {
                await this.onDisconnect()
            }, this.restart = async () => {
                this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
            }, this.relayer = t, this.logger = (0, np.generateChildLogger)(e, this.name), this.clientId = ""
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        get storageKey() {
            return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
        }
        get length() {
            return this.subscriptions.size
        }
        get ids() {
            return Array.from(this.subscriptions.keys())
        }
        get values() {
            return Array.from(this.subscriptions.values())
        }
        get topics() {
            return this.topicMap.topics
        }
        hasSubscription(t, e) {
            let r = !1;
            try {
                r = this.getSubscription(t).topic === e
            } catch {}
            return r
        }
        onEnable() {
            this.cached = [], this.initialized = !0
        }
        onDisable() {
            this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
        }
        async unsubscribeByTopic(t, e) {
            let r = this.topicMap.get(t);
            await Promise.all(r.map(async r => await this.unsubscribeById(t, r, e)))
        }
        async unsubscribeById(t, e, r) {
            this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: t,
                    id: e,
                    opts: r
                }
            });
            try {
                let i = iL(r);
                await this.rpcUnsubscribe(t, e, i);
                let n = i5("USER_DISCONNECTED", `${this.name}, ${t}`);
                await this.onUnsubscribe(t, e, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "unsubscribe",
                    params: {
                        topic: t,
                        id: e,
                        opts: r
                    }
                })
            } catch (t) {
                throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(t), t
            }
        }
        async rpcSubscribe(t, e, r = n5) {
            r === n5 && await this.restartToComplete();
            let i = {
                method: iU(e.protocol).subscribe,
                params: {
                    topic: t
                }
            };
            this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: i
            });
            try {
                let e = iC(t + this.clientId);
                return r === n2 ? (setTimeout(() => {
                    (this.relayer.connected || this.relayer.connecting) && this.relayer.request(i).catch(t => this.logger.warn(t))
                }, (0, b.toMiliseconds)(b.ONE_SECOND)), e) : await await td(this.relayer.request(i).catch(t => this.logger.warn(t)), this.subscribeTimeout) ? e : null
            } catch {
                this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(nQ)
            }
            return null
        }
        async rpcBatchSubscribe(t) {
            if (!t.length) return;
            let e = {
                method: iU(t[0].relay.protocol).batchSubscribe,
                params: {
                    topics: t.map(t => t.topic)
                }
            };
            this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: e
            });
            try {
                return await await td(this.relayer.request(e).catch(t => this.logger.warn(t)), this.subscribeTimeout)
            } catch {
                this.relayer.events.emit(nQ)
            }
        }
        async rpcBatchFetchMessages(t) {
            let e;
            if (!t.length) return;
            let r = {
                method: iU(t[0].relay.protocol).batchFetchMessages,
                params: {
                    topics: t.map(t => t.topic)
                }
            };
            this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: r
            });
            try {
                e = await await td(this.relayer.request(r).catch(t => this.logger.warn(t)), this.subscribeTimeout)
            } catch {
                this.relayer.events.emit(nQ)
            }
            return e
        }
        rpcUnsubscribe(t, e, r) {
            let i = {
                method: iU(r.protocol).unsubscribe,
                params: {
                    topic: t,
                    id: e
                }
            };
            return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: i
            }), this.relayer.request(i)
        }
        onSubscribe(t, e) {
            this.setSubscription(t, s2(s9({}, e), s5({
                id: t
            }))), this.pending.delete(e.topic)
        }
        onBatchSubscribe(t) {
            t.length && t.forEach(t => {
                this.setSubscription(t.id, s9({}, t)), this.pending.delete(t.topic)
            })
        }
        async onUnsubscribe(t, e, r) {
            this.events.removeAllListeners(e), this.hasSubscription(e, t) && this.deleteSubscription(e, r), await this.relayer.messages.del(t)
        }
        async setRelayerSubscriptions(t) {
            await this.relayer.core.storage.setItem(this.storageKey, t)
        }
        async getRelayerSubscriptions() {
            return await this.relayer.core.storage.getItem(this.storageKey)
        }
        setSubscription(t, e) {
            this.logger.debug("Setting subscription"), this.logger.trace({
                type: "method",
                method: "setSubscription",
                id: t,
                subscription: e
            }), this.addSubscription(t, e)
        }
        addSubscription(t, e) {
            this.subscriptions.set(t, s9({}, e)), this.topicMap.set(e.topic, t), this.events.emit(n3, e)
        }
        getSubscription(t) {
            this.logger.debug("Getting subscription"), this.logger.trace({
                type: "method",
                method: "getSubscription",
                id: t
            });
            let e = this.subscriptions.get(t);
            if (!e) {
                let {
                    message: e
                } = i2("NO_MATCHING_KEY", `${this.name}: ${t}`);
                throw Error(e)
            }
            return e
        }
        deleteSubscription(t, e) {
            this.logger.debug("Deleting subscription"), this.logger.trace({
                type: "method",
                method: "deleteSubscription",
                id: t,
                reason: e
            });
            let r = this.getSubscription(t);
            this.subscriptions.delete(t), this.topicMap.delete(r.topic, t), this.events.emit(n8, s2(s9({}, r), s5({
                reason: e
            })))
        }
        async persist() {
            await this.setRelayerSubscriptions(this.values), this.events.emit("subscription_sync")
        }
        async reset() {
            if (this.cached.length) {
                let t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                for (let e = 0; e < t; e++) {
                    let t = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                    await this.batchFetchMessages(t), await this.batchSubscribe(t)
                }
            }
            this.events.emit("subscription_resubscribed")
        }
        async restore() {
            try {
                let t = await this.getRelayerSubscriptions();
                if (typeof t > "u" || !t.length) return;
                if (this.subscriptions.size) {
                    let {
                        message: t
                    } = i2("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(t)
                }
                this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                    type: "method",
                    method: "restore",
                    subscriptions: this.values
                })
            } catch (t) {
                this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t)
            }
        }
        async batchSubscribe(t) {
            if (!t.length) return;
            let e = await this.rpcBatchSubscribe(t);
            i6(e) && this.onBatchSubscribe(e.map((e, r) => s2(s9({}, t[r]), s5({
                id: e
            }))))
        }
        async batchFetchMessages(t) {
            if (!t.length) return;
            this.logger.trace(`Fetching batch messages for ${t.length} subscriptions`);
            let e = await this.rpcBatchFetchMessages(t);
            e && e.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(e.messages))
        }
        async onConnect() {
            await this.restart(), this.onEnable()
        }
        onDisconnect() {
            this.onDisable()
        }
        async checkPending() {
            if (!this.initialized || !this.relayer.connected) return;
            let t = [];
            this.pending.forEach(e => {
                t.push(e)
            }), await this.batchSubscribe(t), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = [])
        }
        registerEventListeners() {
            this.relayer.core.heartbeat.on(nf.HEARTBEAT_EVENTS.pulse, async () => {
                await this.checkPending()
            }), this.events.on(n3, async t => {
                this.logger.info(`Emitting ${n3}`), this.logger.debug({
                    type: "event",
                    event: n3,
                    data: t
                }), await this.persist()
            }), this.events.on(n8, async t => {
                this.logger.info(`Emitting ${n8}`), this.logger.debug({
                    type: "event",
                    event: n8,
                    data: t
                }), await this.persist()
            })
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: t
                } = i2("NOT_INITIALIZED", this.name);
                throw Error(t)
            }
        }
        async restartToComplete() {
            this.relayer.connected || this.relayer.connecting || await this.relayer.transportOpen(), this.restartInProgress && await new Promise(t => {
                let e = setInterval(() => {
                    this.restartInProgress || (clearInterval(e), t())
                }, this.pollingInterval)
            })
        }
    }
    var ot = Object.defineProperty,
        oe = Object.getOwnPropertySymbols,
        or = Object.prototype.hasOwnProperty,
        oi = Object.prototype.propertyIsEnumerable,
        on = (t, e, r) => e in t ? ot(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r;
    class os extends n_ {
        constructor(e) {
            super(e), this.protocol = "wc", this.version = 2, this.events = new g.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.heartBeatTimeout = (0, b.toMiliseconds)(b.THIRTY_SECONDS + b.ONE_SECOND), this.request = async t => {
                var e, r;
                this.logger.debug("Publishing Request Payload");
                let i = t.id || (0, nN.getBigIntRpcId)().toString();
                await this.toEstablishConnection();
                try {
                    let n = this.provider.request(t);
                    this.requestsInFlight.set(i, {
                        promise: n,
                        request: t
                    }), this.logger.trace({
                        id: i,
                        method: t.method,
                        topic: null == (e = t.params) ? void 0 : e.topic
                    }, "relayer.request - attempt to publish...");
                    let s = await new Promise(async (t, e) => {
                        let r = () => {
                            e(Error(`relayer.request - publish interrupted, id: ${i}`))
                        };
                        this.provider.on(nZ, r);
                        let s = await n;
                        this.provider.off(nZ, r), t(s)
                    });
                    return this.logger.trace({
                        id: i,
                        method: t.method,
                        topic: null == (r = t.params) ? void 0 : r.topic
                    }, "relayer.request - published"), s
                } catch (t) {
                    throw this.logger.debug(`Failed to Publish Request: ${i}`), t
                } finally {
                    this.requestsInFlight.delete(i)
                }
            }, this.resetPingTimeout = () => {
                if (ti()) try {
                    clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
                        var t, e, r;
                        null == (r = null == (e = null == (t = this.provider) ? void 0 : t.connection) ? void 0 : e.socket) || r.terminate()
                    }, this.heartBeatTimeout)
                } catch (t) {
                    this.logger.warn(t)
                }
            }, this.onPayloadHandler = t => {
                this.onProviderPayload(t), this.resetPingTimeout()
            }, this.onConnectHandler = () => {
                this.logger.trace("relayer connected"), this.startPingTimeout(), this.events.emit("relayer_connect")
            }, this.onDisconnectHandler = () => {
                this.logger.trace("relayer disconnected"), this.onProviderDisconnect()
            }, this.onProviderErrorHandler = t => {
                this.logger.error(t), this.events.emit("relayer_error", t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
            }, this.registerProviderListeners = () => {
                this.provider.on(nW, this.onPayloadHandler), this.provider.on(nX, this.onConnectHandler), this.provider.on(nZ, this.onDisconnectHandler), this.provider.on(n0, this.onProviderErrorHandler)
            }, this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? (0, np.generateChildLogger)(e.logger, this.name) : (0, ng.pino)((0, np.getDefaultLoggerOptions)({
                level: e.logger || "error"
            })), this.messages = new sX(this.logger, e.core), this.subscriber = new s7(this, this.logger), this.publisher = new sZ(this, this.logger), this.relayUrl = e ? .relayUrl || nV, this.projectId = e.projectId, this.bundleId = function() {
                var e;
                try {
                    return tn() && "u" > typeof(null == t.g ? void 0 : t.g.Application) ? null == (e = t.g.Application) ? void 0 : e.applicationId : void 0
                } catch {
                    return
                }
            }(), this.provider = {}
        }
        async init() {
            if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = !0, this.subscriber.cached.length > 0) try {
                await this.transportOpen()
            } catch (t) {
                this.logger.warn(t)
            }
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        get connected() {
            var t, e, r;
            return (null == (r = null == (e = null == (t = this.provider) ? void 0 : t.connection) ? void 0 : e.socket) ? void 0 : r.readyState) === 1
        }
        get connecting() {
            var t, e, r;
            return (null == (r = null == (e = null == (t = this.provider) ? void 0 : t.connection) ? void 0 : e.socket) ? void 0 : r.readyState) === 0
        }
        async publish(t, e, r) {
            this.isInitialized(), await this.publisher.publish(t, e, r), await this.recordMessageEvent({
                topic: t,
                message: e,
                publishedAt: Date.now(),
                transportType: n5
            })
        }
        async subscribe(t, e) {
            var r;
            this.isInitialized(), e ? .transportType === "relay" && await this.toEstablishConnection();
            let i = (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) || "",
                n, s = e => {
                    e.topic === t && (this.subscriber.off(n3, s), n())
                };
            return await Promise.all([new Promise(t => {
                n = t, this.subscriber.on(n3, s)
            }), new Promise(async r => {
                i = await this.subscriber.subscribe(t, e) || i, r()
            })]), i
        }
        async unsubscribe(t, e) {
            this.isInitialized(), await this.subscriber.unsubscribe(t, e)
        }
        on(t, e) {
            this.events.on(t, e)
        }
        once(t, e) {
            this.events.once(t, e)
        }
        off(t, e) {
            this.events.off(t, e)
        }
        removeListener(t, e) {
            this.events.removeListener(t, e)
        }
        async transportDisconnect() {
            if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
                await Promise.all(Array.from(this.requestsInFlight.values()).map(t => t.promise))
            } catch (t) {
                this.logger.warn(t)
            }
            this.hasExperiencedNetworkDisruption || this.connected ? await td(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect()
        }
        async transportClose() {
            this.transportExplicitlyClosed = !0, await this.transportDisconnect()
        }
        async transportOpen(t) {
            await this.confirmOnlineStateOrThrow(), t && t !== this.relayUrl && (this.relayUrl = t, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
            try {
                await new Promise(async (t, e) => {
                    let r = () => {
                        this.provider.off(nZ, r), e(Error("Connection interrupted while trying to subscribe"))
                    };
                    this.provider.on(nZ, r), await td(this.provider.connect(), (0, b.toMiliseconds)(b.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch(t => {
                        e(t)
                    }).finally(() => {
                        clearTimeout(this.reconnectTimeout), this.reconnectTimeout = void 0
                    }), this.subscriber.start().catch(t => {
                        this.logger.error(t), this.onDisconnectHandler()
                    }), this.hasExperiencedNetworkDisruption = !1, t()
                })
            } catch (t) {
                if (this.logger.error(t), this.hasExperiencedNetworkDisruption = !0, !this.isConnectionStalled(t.message)) throw t
            } finally {
                this.connectionAttemptInProgress = !1
            }
        }
        async restartTransport(t) {
            this.connectionAttemptInProgress || (this.relayUrl = t || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen())
        }
        async confirmOnlineStateOrThrow() {
            if (!await nh()) throw Error("No internet connection detected. Please restart your network and try again.")
        }
        async handleBatchMessageEvents(t) {
            if (t ? .length === 0) return void this.logger.trace("Batch message events is empty. Ignoring...");
            let e = t.sort((t, e) => t.publishedAt - e.publishedAt);
            for (let t of (this.logger.trace(`Batch of ${e.length} message events sorted`), e)) try {
                await this.onMessageEvent(t)
            } catch (t) {
                this.logger.warn(t)
            }
            this.logger.trace(`Batch of ${e.length} message events processed`)
        }
        async onLinkMessageEvent(t, e) {
            let {
                topic: r
            } = t;
            if (!e.sessionExists) {
                let t = tm(b.FIVE_MINUTES);
                await this.core.pairing.pairings.set(r, {
                    topic: r,
                    expiry: t,
                    relay: {
                        protocol: "irn"
                    },
                    active: !1
                })
            }
            this.events.emit(nG, t), await this.recordMessageEvent(t)
        }
        startPingTimeout() {
            var t, e, r, i, n;
            if (ti()) try {
                null != (e = null == (t = this.provider) ? void 0 : t.connection) && e.socket && (null == (n = null == (i = null == (r = this.provider) ? void 0 : r.connection) ? void 0 : i.socket) || n.once("ping", () => {
                    this.resetPingTimeout()
                })), this.resetPingTimeout()
            } catch (t) {
                this.logger.warn(t)
            }
        }
        isConnectionStalled(t) {
            return this.staleConnectionErrors.some(e => t.includes(e))
        }
        async createProvider() {
            this.provider.connection && this.unregisterProviderListeners();
            let t = await this.core.crypto.signJWT(this.relayUrl);
            this.provider = new nC.JsonRpcProvider(new nU(function({
                protocol: t,
                version: e,
                relayUrl: r,
                sdkVersion: i,
                auth: n,
                projectId: s,
                useOnCloseEvent: o,
                bundleId: a
            }) {
                var h, c;
                let u, l = r.split("?"),
                    f = th(t, e, i),
                    d = (h = l[1] || "", c = {
                        auth: n,
                        ua: f,
                        projectId: s,
                        useOnCloseEvent: o || void 0,
                        origin: a || void 0
                    }, u = Z(Z({}, u = A.parse(h)), c), h = A.stringify(u));
                return l[0] + "?" + d
            }({
                sdkVersion: n1,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: t,
                useOnCloseEvent: !0,
                bundleId: this.bundleId
            }))), this.registerProviderListeners()
        }
        async recordMessageEvent(t) {
            let {
                topic: e,
                message: r
            } = t;
            await this.messages.set(e, r)
        }
        async shouldIgnoreMessageEvent(t) {
            let {
                topic: e,
                message: r
            } = t;
            if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
            if (!await this.subscriber.isSubscribed(e)) return this.logger.debug(`Ignoring message for non-subscribed topic ${e}`), !0;
            let i = this.messages.has(e, r);
            return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
        }
        async onProviderPayload(t) {
            if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                    type: "payload",
                    direction: "incoming",
                    payload: t
                }), (0, nO.isJsonRpcRequest)(t)) {
                if (!t.method.endsWith("_subscription")) return;
                let e = t.params,
                    {
                        topic: r,
                        message: i,
                        publishedAt: n,
                        attestation: s
                    } = e.data,
                    o = {
                        topic: r,
                        message: i,
                        publishedAt: n,
                        transportType: n5,
                        attestation: s
                    };
                this.logger.debug("Emitting Relayer Payload"), this.logger.trace(((t, e) => {
                    for (var r in e || (e = {})) or.call(e, r) && on(t, r, e[r]);
                    if (oe)
                        for (var r of oe(e)) oi.call(e, r) && on(t, r, e[r]);
                    return t
                })({
                    type: "event",
                    event: e.id
                }, o)), this.events.emit(e.id, o), await this.acknowledgePayload(t), await this.onMessageEvent(o)
            } else(0, nO.isJsonRpcResponse)(t) && this.events.emit(nJ, t)
        }
        async onMessageEvent(t) {
            await this.shouldIgnoreMessageEvent(t) || (this.events.emit(nG, t), await this.recordMessageEvent(t))
        }
        async acknowledgePayload(t) {
            let e = (0, nN.formatJsonRpcResult)(t.id, !0);
            await this.provider.connection.send(e)
        }
        unregisterProviderListeners() {
            this.provider.off(nW, this.onPayloadHandler), this.provider.off(nX, this.onConnectHandler), this.provider.off(nZ, this.onDisconnectHandler), this.provider.off(n0, this.onProviderErrorHandler), clearTimeout(this.pingTimeout)
        }
        async registerEventListeners() {
            let e = await nh();
            var r, i, n = async t => {
                e !== t && (e = t, t ? await this.restartTransport().catch(t => this.logger.error(t)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1))
            };
            switch (to()) {
                case tr:
                    r = n, !tn() && ts() && (window.addEventListener("online", () => r(!0)), window.addEventListener("offline", () => r(!1)));
                    break;
                case tt:
                    i = n, tn() && null != t.g && t.g.NetInfo && t.g ? .NetInfo.addEventListener(t => i(t ? .isConnected))
            }
        }
        async onProviderDisconnect() {
            await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit("relayer_disconnect"), this.connectionAttemptInProgress = !1, !this.transportExplicitlyClosed && (this.reconnectTimeout || (this.reconnectTimeout = setTimeout(async () => {
                await this.transportOpen().catch(t => this.logger.error(t))
            }, (0, b.toMiliseconds)(.1))))
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: t
                } = i2("NOT_INITIALIZED", this.name);
                throw Error(t)
            }
        }
        async toEstablishConnection() {
            await this.confirmOnlineStateOrThrow(), this.connected || (this.connectionAttemptInProgress && await new Promise(t => {
                let e = setInterval(() => {
                    this.connected && (clearInterval(e), t())
                }, this.connectionStatusPollingInterval)
            }), await this.transportOpen())
        }
    }
    var oo = Object.defineProperty,
        oa = Object.getOwnPropertySymbols,
        oh = Object.prototype.hasOwnProperty,
        oc = Object.prototype.propertyIsEnumerable,
        ou = (t, e, r) => e in t ? oo(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        ol = (t, e) => {
            for (var r in e || (e = {})) oh.call(e, r) && ou(t, r, e[r]);
            if (oa)
                for (var r of oa(e)) oc.call(e, r) && ou(t, r, e[r]);
            return t
        };
    class of extends nA {
        constructor(t, e, r, i = nz, n) {
            super(t, e, r, i), this.core = t, this.logger = e, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = nz, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
                this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(t => {
                    var e;
                    this.getKey && null !== t && !i8(t) ? this.map.set(this.getKey(t), t) : (null == (e = t ? .proposer) ? void 0 : e.publicKey) ? this.map.set(t.id, t) : t ? .topic && this.map.set(t.topic, t)
                }), this.cached = [], this.initialized = !0)
            }, this.set = async (t, e) => {
                this.isInitialized(), this.map.has(t) ? await this.update(t, e) : (this.logger.debug("Setting value"), this.logger.trace({
                    type: "method",
                    method: "set",
                    key: t,
                    value: e
                }), this.map.set(t, e), await this.persist())
            }, this.get = t => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                type: "method",
                method: "get",
                key: t
            }), this.getData(t)), this.getAll = t => (this.isInitialized(), t ? this.values.filter(e => Object.keys(t).every(r => (0, nB.default)(e[r], t[r]))) : this.values), this.update = async (t, e) => {
                this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                    type: "method",
                    method: "update",
                    key: t,
                    update: e
                });
                let r = ol(ol({}, this.getData(t)), e);
                this.map.set(t, r), await this.persist()
            }, this.delete = async (t, e) => {
                this.isInitialized(), this.map.has(t) && (this.logger.debug("Deleting value"), this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: t,
                    reason: e
                }), this.map.delete(t), this.addToRecentlyDeleted(t), await this.persist())
            }, this.logger = (0, np.generateChildLogger)(e, this.name), this.storagePrefix = i, this.getKey = n
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        get storageKey() {
            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
        }
        get length() {
            return this.map.size
        }
        get keys() {
            return Array.from(this.map.keys())
        }
        get values() {
            return Array.from(this.map.values())
        }
        addToRecentlyDeleted(t) {
            this.recentlyDeleted.push(t), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2)
        }
        async setDataStore(t) {
            await this.core.storage.setItem(this.storageKey, t)
        }
        async getDataStore() {
            return await this.core.storage.getItem(this.storageKey)
        }
        getData(t) {
            let e = this.map.get(t);
            if (!e) {
                if (this.recentlyDeleted.includes(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${t}`);
                    throw this.logger.error(e), Error(e)
                }
                let {
                    message: e
                } = i2("NO_MATCHING_KEY", `${this.name}: ${t}`);
                throw this.logger.error(e), Error(e)
            }
            return e
        }
        async persist() {
            await this.setDataStore(this.values)
        }
        async restore() {
            try {
                let t = await this.getDataStore();
                if (typeof t > "u" || !t.length) return;
                if (this.map.size) {
                    let {
                        message: t
                    } = i2("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(t), Error(t)
                }
                this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                    type: "method",
                    method: "restore",
                    value: this.values
                })
            } catch (t) {
                this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t)
            }
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: t
                } = i2("NOT_INITIALIZED", this.name);
                throw Error(t)
            }
        }
    }
    class od {
        constructor(t, e) {
            this.core = t, this.logger = e, this.name = "pairing", this.version = "0.3", this.events = new g.default, this.initialized = !1, this.storagePrefix = nz, this.ignoredPayloadTypes = [1], this.registeredMethods = [], this.init = async () => {
                this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
            }, this.register = ({
                methods: t
            }) => {
                this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...t])]
            }, this.create = async t => {
                this.isInitialized();
                let e = iP(),
                    r = await this.core.crypto.setSymKey(e),
                    i = tm(b.FIVE_MINUTES),
                    n = {
                        protocol: "irn"
                    },
                    s = {
                        topic: r,
                        expiry: i,
                        relay: n,
                        active: !1,
                        methods: t ? .methods
                    },
                    o = iJ({
                        protocol: this.core.protocol,
                        version: this.core.version,
                        topic: r,
                        symKey: e,
                        relay: n,
                        expiryTimestamp: i,
                        methods: t ? .methods
                    });
                return this.events.emit(n7, s), this.core.expirer.set(r, i), await this.pairings.set(r, s), await this.core.relayer.subscribe(r, {
                    transportType: t ? .transportType
                }), {
                    topic: r,
                    uri: o
                }
            }, this.pair = async t => {
                let e;
                this.isInitialized();
                let r = this.core.eventClient.createEvent({
                    properties: {
                        topic: t ? .uri,
                        trace: ["pairing_started"]
                    }
                });
                this.isValidPair(t, r);
                let {
                    topic: i,
                    symKey: n,
                    relay: s,
                    expiryTimestamp: o,
                    methods: a
                } = iG(t.uri);
                if (r.props.properties.topic = i, r.addTrace("pairing_uri_validation_success"), r.addTrace("pairing_uri_not_expired"), this.pairings.keys.includes(i)) {
                    if (e = this.pairings.get(i), r.addTrace("existing_pairing"), e.active) throw r.setError("active_pairing_already_exists"), Error(`Pairing already exists: ${i}. Please try again with a new connection URI.`);
                    r.addTrace("pairing_not_expired")
                }
                let h = o || tm(b.FIVE_MINUTES),
                    c = {
                        topic: i,
                        relay: s,
                        expiry: h,
                        active: !1,
                        methods: a
                    };
                this.core.expirer.set(i, h), await this.pairings.set(i, c), r.addTrace("store_new_pairing"), t.activatePairing && await this.activate({
                    topic: i
                }), this.events.emit(n7, c), r.addTrace("emit_inactive_pairing"), this.core.crypto.keychain.has(i) || await this.core.crypto.setSymKey(n, i), r.addTrace("subscribing_pairing_topic");
                try {
                    await this.core.relayer.confirmOnlineStateOrThrow()
                } catch {
                    r.setError("no_internet_connection")
                }
                try {
                    await this.core.relayer.subscribe(i, {
                        relay: s
                    })
                } catch (t) {
                    throw r.setError("subscribe_pairing_topic_failure"), t
                }
                return r.addTrace("subscribe_pairing_topic_success"), c
            }, this.activate = async ({
                topic: t
            }) => {
                this.isInitialized();
                let e = tm(b.THIRTY_DAYS);
                this.core.expirer.set(t, e), await this.pairings.update(t, {
                    active: !0,
                    expiry: e
                })
            }, this.ping = async t => {
                this.isInitialized(), await this.isValidPing(t);
                let {
                    topic: e
                } = t;
                if (this.pairings.keys.includes(e)) {
                    let t = await this.sendRequest(e, "wc_pairingPing", {}),
                        {
                            done: r,
                            resolve: i,
                            reject: n
                        } = tf();
                    this.events.once(tv("pairing_ping", t), ({
                        error: t
                    }) => {
                        t ? n(t) : i()
                    }), await r()
                }
            }, this.updateExpiry = async ({
                topic: t,
                expiry: e
            }) => {
                this.isInitialized(), await this.pairings.update(t, {
                    expiry: e
                })
            }, this.updateMetadata = async ({
                topic: t,
                metadata: e
            }) => {
                this.isInitialized(), await this.pairings.update(t, {
                    peerMetadata: e
                })
            }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async t => {
                this.isInitialized(), await this.isValidDisconnect(t);
                let {
                    topic: e
                } = t;
                this.pairings.keys.includes(e) && (await this.sendRequest(e, "wc_pairingDelete", i5("USER_DISCONNECTED")), await this.deletePairing(e))
            }, this.formatUriFromPairing = t => {
                this.isInitialized();
                let {
                    topic: e,
                    relay: r,
                    expiry: i,
                    methods: n
                } = t, s = this.core.crypto.keychain.get(e);
                return iJ({
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: e,
                    symKey: s,
                    relay: r,
                    expiryTimestamp: i,
                    methods: n
                })
            }, this.sendRequest = async (t, e, r) => {
                let i = (0, nN.formatJsonRpcRequest)(e, r),
                    n = await this.core.crypto.encode(t, i),
                    s = n9[e].req;
                return this.core.history.set(t, i), this.core.relayer.publish(t, n, s), i.id
            }, this.sendResult = async (t, e, r) => {
                let i = (0, nN.formatJsonRpcResult)(t, r),
                    n = await this.core.crypto.encode(e, i),
                    s = n9[(await this.core.history.get(e, t)).request.method].res;
                await this.core.relayer.publish(e, n, s), await this.core.history.resolve(i)
            }, this.sendError = async (t, e, r) => {
                let i = (0, nN.formatJsonRpcError)(t, r),
                    n = await this.core.crypto.encode(e, i),
                    s = await this.core.history.get(e, t),
                    o = n9[s.request.method] ? n9[s.request.method].res : n9.unregistered_method.res;
                await this.core.relayer.publish(e, n, o), await this.core.history.resolve(i)
            }, this.deletePairing = async (t, e) => {
                await this.core.relayer.unsubscribe(t), await Promise.all([this.pairings.delete(t, i5("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(t), e ? Promise.resolve() : this.core.expirer.del(t)])
            }, this.cleanup = async () => {
                let t = this.pairings.getAll().filter(t => ty(t.expiry));
                await Promise.all(t.map(t => this.deletePairing(t.topic)))
            }, this.onRelayEventRequest = t => {
                let {
                    topic: e,
                    payload: r
                } = t;
                switch (r.method) {
                    case "wc_pairingPing":
                        return this.onPairingPingRequest(e, r);
                    case "wc_pairingDelete":
                        return this.onPairingDeleteRequest(e, r);
                    default:
                        return this.onUnknownRpcMethodRequest(e, r)
                }
            }, this.onRelayEventResponse = async t => {
                let {
                    topic: e,
                    payload: r
                } = t, i = (await this.core.history.get(e, r.id)).request.method;
                return "wc_pairingPing" === i ? this.onPairingPingResponse(e, r) : this.onUnknownRpcMethodResponse(i)
            }, this.onPairingPingRequest = async (t, e) => {
                let {
                    id: r
                } = e;
                try {
                    this.isValidPing({
                        topic: t
                    }), await this.sendResult(r, t, !0), this.events.emit("pairing_ping", {
                        id: r,
                        topic: t
                    })
                } catch (e) {
                    await this.sendError(r, t, e), this.logger.error(e)
                }
            }, this.onPairingPingResponse = (t, e) => {
                let {
                    id: r
                } = e;
                setTimeout(() => {
                    (0, nO.isJsonRpcResult)(e) ? this.events.emit(tv("pairing_ping", r), {}): (0, nO.isJsonRpcError)(e) && this.events.emit(tv("pairing_ping", r), {
                        error: e.error
                    })
                }, 500)
            }, this.onPairingDeleteRequest = async (t, e) => {
                let {
                    id: r
                } = e;
                try {
                    this.isValidDisconnect({
                        topic: t
                    }), await this.deletePairing(t), this.events.emit(st, {
                        id: r,
                        topic: t
                    })
                } catch (e) {
                    await this.sendError(r, t, e), this.logger.error(e)
                }
            }, this.onUnknownRpcMethodRequest = async (t, e) => {
                let {
                    id: r,
                    method: i
                } = e;
                try {
                    if (this.registeredMethods.includes(i)) return;
                    let e = i5("WC_METHOD_UNSUPPORTED", i);
                    await this.sendError(r, t, e), this.logger.error(e)
                } catch (e) {
                    await this.sendError(r, t, e), this.logger.error(e)
                }
            }, this.onUnknownRpcMethodResponse = t => {
                this.registeredMethods.includes(t) || this.logger.error(i5("WC_METHOD_UNSUPPORTED", t))
            }, this.isValidPair = (t, e) => {
                var r;
                if (!nn(t)) {
                    let {
                        message: r
                    } = i2("MISSING_OR_INVALID", `pair() params: ${t}`);
                    throw e.setError(su), Error(r)
                }
                if (! function(t) {
                        function e(t) {
                            try {
                                return "u" > typeof new URL(t)
                            } catch {
                                return !1
                            }
                        }
                        try {
                            if (i4(t, !1)) {
                                if (e(t)) return !0;
                                let r = tI(t);
                                return e(r)
                            }
                        } catch {}
                        return !1
                    }(t.uri)) {
                    let {
                        message: r
                    } = i2("MISSING_OR_INVALID", `pair() uri: ${t.uri}`);
                    throw e.setError(su), Error(r)
                }
                let i = iG(t ? .uri);
                if (!(null != (r = i ? .relay) && r.protocol)) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                    throw e.setError(su), Error(t)
                }
                if (!(null != i && i.symKey)) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", "pair() uri#symKey");
                    throw e.setError(su), Error(t)
                }
                if (null != i && i.expiryTimestamp && (0, b.toMiliseconds)(i ? .expiryTimestamp) < Date.now()) {
                    e.setError("pairing_expired");
                    let {
                        message: t
                    } = i2("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                    throw Error(t)
                }
            }, this.isValidPing = async t => {
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `ping() params: ${t}`);
                    throw Error(e)
                }
                let {
                    topic: e
                } = t;
                await this.isValidPairingTopic(e)
            }, this.isValidDisconnect = async t => {
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                    throw Error(e)
                }
                let {
                    topic: e
                } = t;
                await this.isValidPairingTopic(e)
            }, this.isValidPairingTopic = async t => {
                if (!i4(t, !1)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                    throw Error(e)
                }
                if (!this.pairings.keys.includes(t)) {
                    let {
                        message: e
                    } = i2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                    throw Error(e)
                }
                if (ty(this.pairings.get(t).expiry)) {
                    await this.deletePairing(t);
                    let {
                        message: e
                    } = i2("EXPIRED", `pairing topic: ${t}`);
                    throw Error(e)
                }
            }, this.core = t, this.logger = (0, np.generateChildLogger)(e, this.name), this.pairings = new of (this.core, this.logger, this.name, this.storagePrefix)
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: t
                } = i2("NOT_INITIALIZED", this.name);
                throw Error(t)
            }
        }
        registerRelayerEvents() {
            this.core.relayer.on(nG, async t => {
                let {
                    topic: e,
                    message: r,
                    transportType: i
                } = t;
                if (!this.pairings.keys.includes(e) || i === n2 || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                let n = await this.core.crypto.decode(e, r);
                try {
                    (0, nO.isJsonRpcRequest)(n) ? (this.core.history.set(e, n), this.onRelayEventRequest({
                        topic: e,
                        payload: n
                    })) : (0, nO.isJsonRpcResponse)(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({
                        topic: e,
                        payload: n
                    }), this.core.history.delete(e, n.id))
                } catch (t) {
                    this.logger.error(t)
                }
            })
        }
        registerExpirerEvents() {
            this.core.expirer.on(so, async t => {
                let {
                    topic: e
                } = tg(t.target);
                e && this.pairings.keys.includes(e) && (await this.deletePairing(e, !0), this.events.emit("pairing_expire", {
                    topic: e
                }))
            })
        }
    }
    class op extends nv {
        constructor(t, e) {
            super(t, e), this.core = t, this.logger = e, this.records = new Map, this.events = new g.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = nz, this.init = async () => {
                this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(t => this.records.set(t.id, t)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
            }, this.set = (t, e, r) => {
                if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                        type: "method",
                        method: "set",
                        topic: t,
                        request: e,
                        chainId: r
                    }), this.records.has(e.id)) return;
                let i = {
                    id: e.id,
                    topic: t,
                    request: {
                        method: e.method,
                        params: e.params || null
                    },
                    chainId: r,
                    expiry: tm(b.THIRTY_DAYS)
                };
                this.records.set(i.id, i), this.persist(), this.events.emit(se, i)
            }, this.resolve = async t => {
                if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                        type: "method",
                        method: "update",
                        response: t
                    }), !this.records.has(t.id)) return;
                let e = await this.getRecord(t.id);
                typeof e.response > "u" && (e.response = (0, nO.isJsonRpcError)(t) ? {
                    error: t.error
                } : {
                    result: t.result
                }, this.records.set(e.id, e), this.persist(), this.events.emit(sr, e))
            }, this.get = async (t, e) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                type: "method",
                method: "get",
                topic: t,
                id: e
            }), await this.getRecord(e)), this.delete = (t, e) => {
                this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                    type: "method",
                    method: "delete",
                    id: e
                }), this.values.forEach(r => {
                    r.topic === t && ("u" > typeof e && r.id !== e || (this.records.delete(r.id), this.events.emit(si, r)))
                }), this.persist()
            }, this.exists = async (t, e) => (this.isInitialized(), !!this.records.has(e) && (await this.getRecord(e)).topic === t), this.on = (t, e) => {
                this.events.on(t, e)
            }, this.once = (t, e) => {
                this.events.once(t, e)
            }, this.off = (t, e) => {
                this.events.off(t, e)
            }, this.removeListener = (t, e) => {
                this.events.removeListener(t, e)
            }, this.logger = (0, np.generateChildLogger)(e, this.name)
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        get storageKey() {
            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
        }
        get size() {
            return this.records.size
        }
        get keys() {
            return Array.from(this.records.keys())
        }
        get values() {
            return Array.from(this.records.values())
        }
        get pending() {
            let t = [];
            return this.values.forEach(e => {
                if ("u" > typeof e.response) return;
                let r = {
                    topic: e.topic,
                    request: (0, nN.formatJsonRpcRequest)(e.request.method, e.request.params, e.id),
                    chainId: e.chainId
                };
                return t.push(r)
            }), t
        }
        async setJsonRpcRecords(t) {
            await this.core.storage.setItem(this.storageKey, t)
        }
        async getJsonRpcRecords() {
            return await this.core.storage.getItem(this.storageKey)
        }
        getRecord(t) {
            this.isInitialized();
            let e = this.records.get(t);
            if (!e) {
                let {
                    message: e
                } = i2("NO_MATCHING_KEY", `${this.name}: ${t}`);
                throw Error(e)
            }
            return e
        }
        async persist() {
            await this.setJsonRpcRecords(this.values), this.events.emit("history_sync")
        }
        async restore() {
            try {
                let t = await this.getJsonRpcRecords();
                if (typeof t > "u" || !t.length) return;
                if (this.records.size) {
                    let {
                        message: t
                    } = i2("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(t), Error(t)
                }
                this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                    type: "method",
                    method: "restore",
                    records: this.values
                })
            } catch (t) {
                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
            }
        }
        registerEventListeners() {
            this.events.on(se, t => {
                this.logger.info(`Emitting ${se}`), this.logger.debug({
                    type: "event",
                    event: se,
                    record: t
                })
            }), this.events.on(sr, t => {
                this.logger.info(`Emitting ${sr}`), this.logger.debug({
                    type: "event",
                    event: sr,
                    record: t
                })
            }), this.events.on(si, t => {
                this.logger.info(`Emitting ${si}`), this.logger.debug({
                    type: "event",
                    event: si,
                    record: t
                })
            }), this.core.heartbeat.on(nf.HEARTBEAT_EVENTS.pulse, () => {
                this.cleanup()
            })
        }
        cleanup() {
            try {
                this.isInitialized();
                let t = !1;
                this.records.forEach(e => {
                    (0, b.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.records.delete(e.id), this.events.emit(si, e, !1), t = !0)
                }), t && this.persist()
            } catch (t) {
                this.logger.warn(t)
            }
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: t
                } = i2("NOT_INITIALIZED", this.name);
                throw Error(t)
            }
        }
    }
    class og extends nE {
        constructor(t, e) {
            super(t, e), this.core = t, this.logger = e, this.expirations = new Map, this.events = new g.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = nz, this.init = async () => {
                this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(t => this.expirations.set(t.target, t)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
            }, this.has = t => {
                try {
                    let e = this.formatTarget(t);
                    return "u" > typeof this.getExpiration(e)
                } catch {
                    return !1
                }
            }, this.set = (t, e) => {
                this.isInitialized();
                let r = this.formatTarget(t),
                    i = {
                        target: r,
                        expiry: e
                    };
                this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(sn, {
                    target: r,
                    expiration: i
                })
            }, this.get = t => {
                this.isInitialized();
                let e = this.formatTarget(t);
                return this.getExpiration(e)
            }, this.del = t => {
                if (this.isInitialized(), this.has(t)) {
                    let e = this.formatTarget(t),
                        r = this.getExpiration(e);
                    this.expirations.delete(e), this.events.emit(ss, {
                        target: e,
                        expiration: r
                    })
                }
            }, this.on = (t, e) => {
                this.events.on(t, e)
            }, this.once = (t, e) => {
                this.events.once(t, e)
            }, this.off = (t, e) => {
                this.events.off(t, e)
            }, this.removeListener = (t, e) => {
                this.events.removeListener(t, e)
            }, this.logger = (0, np.generateChildLogger)(e, this.name)
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        get storageKey() {
            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
        }
        get length() {
            return this.expirations.size
        }
        get keys() {
            return Array.from(this.expirations.keys())
        }
        get values() {
            return Array.from(this.expirations.values())
        }
        formatTarget(t) {
            if ("string" == typeof t) return tp("topic", t);
            if ("number" == typeof t) return tp("id", t);
            let {
                message: e
            } = i2("UNKNOWN_TYPE", `Target type: ${typeof t}`);
            throw Error(e)
        }
        async setExpirations(t) {
            await this.core.storage.setItem(this.storageKey, t)
        }
        async getExpirations() {
            return await this.core.storage.getItem(this.storageKey)
        }
        async persist() {
            await this.setExpirations(this.values), this.events.emit("expirer_sync")
        }
        async restore() {
            try {
                let t = await this.getExpirations();
                if (typeof t > "u" || !t.length) return;
                if (this.expirations.size) {
                    let {
                        message: t
                    } = i2("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(t), Error(t)
                }
                this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                    type: "method",
                    method: "restore",
                    expirations: this.values
                })
            } catch (t) {
                this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t)
            }
        }
        getExpiration(t) {
            let e = this.expirations.get(t);
            if (!e) {
                let {
                    message: e
                } = i2("NO_MATCHING_KEY", `${this.name}: ${t}`);
                throw this.logger.warn(e), Error(e)
            }
            return e
        }
        checkExpiry(t, e) {
            let {
                expiry: r
            } = e;
            (0, b.toMiliseconds)(r) - Date.now() <= 0 && this.expire(t, e)
        }
        expire(t, e) {
            this.expirations.delete(t), this.events.emit(so, {
                target: t,
                expiration: e
            })
        }
        checkExpirations() {
            this.core.relayer.connected && this.expirations.forEach((t, e) => this.checkExpiry(e, t))
        }
        registerEventListeners() {
            this.core.heartbeat.on(nf.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(sn, t => {
                this.logger.info(`Emitting ${sn}`), this.logger.debug({
                    type: "event",
                    event: sn,
                    data: t
                }), this.persist()
            }), this.events.on(so, t => {
                this.logger.info(`Emitting ${so}`), this.logger.debug({
                    type: "event",
                    event: so,
                    data: t
                }), this.persist()
            }), this.events.on(ss, t => {
                this.logger.info(`Emitting ${ss}`), this.logger.debug({
                    type: "event",
                    event: ss,
                    data: t
                }), this.persist()
            })
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: t
                } = i2("NOT_INITIALIZED", this.name);
                throw Error(t)
            }
        }
    }
    var om = {};

    function oy(t) {
        let e;
        return "u" > typeof window && "u" > typeof window[t] && (e = window[t]), e
    }

    function ov(t) {
        let e = oy(t);
        if (!e) throw Error(`${t} is not defined in Window`);
        return e
    }
    Object.defineProperty(om, "__esModule", {
        value: !0
    }), om.getLocalStorage = om.getLocalStorageOrThrow = om.getCrypto = om.getCryptoOrThrow = om.getLocation = om.getLocationOrThrow = om.getNavigator = om.getNavigatorOrThrow = ob = om.getDocument = om.getDocumentOrThrow = om.getFromWindowOrThrow = om.getFromWindow = void 0, om.getFromWindow = oy, om.getFromWindowOrThrow = ov, om.getDocumentOrThrow = function() {
        return ov("document")
    };
    var ob = om.getDocument = function() {
        return oy("document")
    };
    om.getNavigatorOrThrow = function() {
        return ov("navigator")
    }, om.getNavigator = function() {
        return oy("navigator")
    }, om.getLocationOrThrow = function() {
        return ov("location")
    }, om.getLocation = function() {
        return oy("location")
    }, om.getCryptoOrThrow = function() {
        return ov("crypto")
    }, om.getCrypto = function() {
        return oy("crypto")
    }, om.getLocalStorageOrThrow = function() {
        return ov("localStorage")
    }, om.getLocalStorage = function() {
        return oy("localStorage")
    };
    class ow extends nI {
        constructor(t, e, r) {
            super(t, e, r), this.core = t, this.logger = e, this.store = r, this.name = "verify-api", this.verifyUrlV3 = sh, this.storagePrefix = nz, this.version = 2, this.init = async () => {
                var t;
                this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, b.toMiliseconds)(null == (t = this.publicKey) ? void 0 : t.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()))
            }, this.register = async t => {
                if (!ts() || this.isDevEnv) return;
                let e = window.location.origin,
                    {
                        id: r,
                        decryptedId: i
                    } = t,
                    n = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${e}&id=${r}&decryptedId=${i}`;
                try {
                    let t = ob(),
                        e = this.startAbortTimer(5 * b.ONE_SECOND),
                        i = await new Promise((i, s) => {
                            let o = () => {
                                window.removeEventListener("message", h), t.body.removeChild(a), s("attestation aborted")
                            };
                            this.abortController.signal.addEventListener("abort", o);
                            let a = t.createElement("iframe");
                            a.src = n, a.style.display = "none", a.addEventListener("error", o, {
                                signal: this.abortController.signal
                            });
                            let h = n => {
                                if (n.data && "string" == typeof n.data) try {
                                    let s = JSON.parse(n.data);
                                    if ("verify_attestation" === s.type) {
                                        if (z(s.attestation).payload.id !== r) return;
                                        clearInterval(e), t.body.removeChild(a), this.abortController.signal.removeEventListener("abort", o), window.removeEventListener("message", h), i(null === s.attestation ? "" : s.attestation)
                                    }
                                } catch (t) {
                                    this.logger.warn(t)
                                }
                            };
                            t.body.appendChild(a), window.addEventListener("message", h, {
                                signal: this.abortController.signal
                            })
                        });
                    return this.logger.debug("jwt attestation", i), i
                } catch (t) {
                    this.logger.warn(t)
                }
                return ""
            }, this.resolve = async t => {
                if (this.isDevEnv) return "";
                let {
                    attestationId: e,
                    hash: r,
                    encryptedId: i
                } = t;
                if ("" === e) return void this.logger.debug("resolve: attestationId is empty, skipping");
                if (e) {
                    if (z(e).payload.id !== i) return;
                    let t = await this.isValidJwtAttestation(e);
                    if (t) return t.isVerified ? t : void this.logger.warn("resolve: jwt attestation: origin url not verified")
                }
                if (!r) return;
                let n = this.getVerifyUrl(t ? .verifyUrl);
                return this.fetchAttestation(r, n)
            }, this.fetchAttestation = async (t, e) => {
                this.logger.debug(`resolving attestation: ${t} from url: ${e}`);
                let r = this.startAbortTimer(5 * b.ONE_SECOND),
                    i = await fetch(`${e}/attestation/${t}?v2Supported=true`, {
                        signal: this.abortController.signal
                    });
                return clearTimeout(r), 200 === i.status ? await i.json() : void 0
            }, this.getVerifyUrl = t => {
                let e = t || sa;
                return sc.includes(e) || (this.logger.info(`verify url: ${e}, not included in trusted list, assigning default: ${sa}`), e = sa), e
            }, this.fetchPublicKey = async () => {
                try {
                    this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                    let t = this.startAbortTimer(b.FIVE_SECONDS),
                        e = await fetch(`${this.verifyUrlV3}/public-key`, {
                            signal: this.abortController.signal
                        });
                    return clearTimeout(t), await e.json()
                } catch (t) {
                    this.logger.warn(t)
                }
            }, this.persistPublicKey = async t => {
                this.logger.debug("persisting public key to local storage", t), await this.store.setItem(this.storeKey, t), this.publicKey = t
            }, this.removePublicKey = async () => {
                this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0
            }, this.isValidJwtAttestation = async t => {
                let e = await this.getPublicKey();
                try {
                    if (e) return this.validateAttestation(t, e)
                } catch (t) {
                    this.logger.error(t), this.logger.warn("error validating attestation")
                }
                let r = await this.fetchAndPersistPublicKey();
                try {
                    if (r) return this.validateAttestation(t, r)
                } catch (t) {
                    this.logger.error(t), this.logger.warn("error validating attestation")
                }
            }, this.getPublicKey = async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey(), this.fetchAndPersistPublicKey = async () => {
                if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
                this.fetchPromise = new Promise(async t => {
                    let e = await this.fetchPublicKey();
                    e && (await this.persistPublicKey(e), t(e))
                });
                let t = await this.fetchPromise;
                return this.fetchPromise = void 0, t
            }, this.validateAttestation = (t, e) => {
                let r = function(t, e) {
                        var r;
                        let i, n, [s, o, a] = t.split("."),
                            h = (r = a, y.Buffer.from(((n = (i = r.replace(/-/g, "+").replace(/_/g, "/")).length % 4) > 0 && (i += "=".repeat(4 - n)), i), "base64"));
                        if (64 !== h.length) throw Error("Invalid signature length");
                        let c = h.slice(0, 32).toString("hex"),
                            u = h.slice(32, 64).toString("hex"),
                            l = `${s}.${o}`,
                            f = new S.SHA256().update(y.Buffer.from(l)).digest(),
                            d = new N.ec("p256").keyFromPublic({
                                x: y.Buffer.from(e.x, "base64").toString("hex"),
                                y: y.Buffer.from(e.y, "base64").toString("hex")
                            }, "hex"),
                            p = y.Buffer.from(f).toString("hex");
                        if (!d.verify(p, {
                                r: c,
                                s: u
                            })) throw Error("Invalid signature");
                        return z(t).payload
                    }(t, e.publicKey),
                    i = {
                        hasExpired: (0, b.toMiliseconds)(r.exp) < Date.now(),
                        payload: r
                    };
                if (i.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), Error("JWT attestation expired");
                return {
                    origin: i.payload.origin,
                    isScam: i.payload.isScam,
                    isVerified: i.payload.isVerified
                }
            }, this.logger = (0, np.generateChildLogger)(e, this.name), this.abortController = new AbortController, this.isDevEnv = tE(), this.init()
        }
        get storeKey() {
            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key"
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        startAbortTimer(t) {
            return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, b.toMiliseconds)(t))
        }
    }
    class o_ extends nS {
        constructor(t, e) {
            super(t, e), this.projectId = t, this.logger = e, this.context = "echo", this.registerDeviceToken = async t => {
                let {
                    clientId: e,
                    token: r,
                    notificationType: i,
                    enableEncrypted: n = !1
                } = t, s = `https://echo.walletconnect.com/${this.projectId}/clients`;
                await fetch(s, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        client_id: e,
                        type: i,
                        token: r,
                        always_raw: n
                    })
                })
            }, this.logger = (0, np.generateChildLogger)(e, this.context)
        }
    }
    var oA = Object.defineProperty,
        ox = Object.getOwnPropertySymbols,
        oE = Object.prototype.hasOwnProperty,
        oI = Object.prototype.propertyIsEnumerable,
        oS = (t, e, r) => e in t ? oA(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        oM = (t, e) => {
            for (var r in e || (e = {})) oE.call(e, r) && oS(t, r, e[r]);
            if (ox)
                for (var r of ox(e)) oI.call(e, r) && oS(t, r, e[r]);
            return t
        };
    class oP extends nM {
        constructor(t, e, r = !0) {
            super(t, e, r), this.core = t, this.logger = e, this.context = "event-client", this.storagePrefix = nz, this.storageVersion = .1, this.events = new Map, this.shouldPersist = !1, this.init = async () => {
                if (!tE()) try {
                    let t = {
                        eventId: tx(),
                        timestamp: Date.now(),
                        domain: this.getAppDomain(),
                        props: {
                            event: "INIT",
                            type: "",
                            properties: {
                                client_id: await this.core.crypto.getClientId(),
                                user_agent: th(this.core.relayer.protocol, this.core.relayer.version, n1)
                            }
                        }
                    };
                    await this.sendEvent([t])
                } catch (t) {
                    this.logger.warn(t)
                }
            }, this.createEvent = t => {
                let {
                    event: e = "ERROR",
                    type: r = "",
                    properties: {
                        topic: i,
                        trace: n
                    }
                } = t, s = tx(), o = this.core.projectId || "", a = oM({
                    eventId: s,
                    timestamp: Date.now(),
                    props: {
                        event: e,
                        type: r,
                        properties: {
                            topic: i,
                            trace: n
                        }
                    },
                    bundleId: o,
                    domain: this.getAppDomain()
                }, this.setMethods(s));
                return this.telemetryEnabled && (this.events.set(s, a), this.shouldPersist = !0), a
            }, this.getEvent = t => {
                let {
                    eventId: e,
                    topic: r
                } = t;
                if (e) return this.events.get(e);
                let i = Array.from(this.events.values()).find(t => t.props.properties.topic === r);
                if (i) return oM(oM({}, i), this.setMethods(i.eventId))
            }, this.deleteEvent = t => {
                let {
                    eventId: e
                } = t;
                this.events.delete(e), this.shouldPersist = !0
            }, this.setEventListeners = () => {
                this.core.heartbeat.on(nf.HEARTBEAT_EVENTS.pulse, async () => {
                    this.shouldPersist && await this.persist(), this.events.forEach(t => {
                        (0, b.fromMiliseconds)(Date.now()) - (0, b.fromMiliseconds)(t.timestamp) > 86400 && (this.events.delete(t.eventId), this.shouldPersist = !0)
                    })
                })
            }, this.setMethods = t => ({
                addTrace: e => this.addTrace(t, e),
                setError: e => this.setError(t, e)
            }), this.addTrace = (t, e) => {
                let r = this.events.get(t);
                r && (r.props.properties.trace.push(e), this.events.set(t, r), this.shouldPersist = !0)
            }, this.setError = (t, e) => {
                let r = this.events.get(t);
                r && (r.props.type = e, r.timestamp = Date.now(), this.events.set(t, r), this.shouldPersist = !0)
            }, this.persist = async () => {
                await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1
            }, this.restore = async () => {
                try {
                    let t = await this.core.storage.getItem(this.storageKey) || [];
                    if (!t.length) return;
                    t.forEach(t => {
                        this.events.set(t.eventId, oM(oM({}, t), this.setMethods(t.eventId)))
                    })
                } catch (t) {
                    this.logger.warn(t)
                }
            }, this.submit = async () => {
                if (!this.telemetryEnabled || 0 === this.events.size) return;
                let t = [];
                for (let [e, r] of this.events) r.props.type && t.push(r);
                if (0 !== t.length) try {
                    if ((await this.sendEvent(t)).ok)
                        for (let e of t) this.events.delete(e.eventId), this.shouldPersist = !0
                } catch (t) {
                    this.logger.warn(t)
                }
            }, this.sendEvent = async t => {
                let e = this.getAppDomain() ? "" : "&sp=desktop";
                return await fetch(`https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${n1}${e}`, {
                    method: "POST",
                    body: JSON.stringify(t)
                })
            }, this.getAppDomain = () => ta().url, this.logger = (0, np.generateChildLogger)(e, this.context), this.telemetryEnabled = r, r ? this.restore().then(async () => {
                await this.submit(), this.setEventListeners()
            }) : this.persist()
        }
        get storageKey() {
            return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context
        }
    }
    var oR = Object.defineProperty,
        oC = Object.getOwnPropertySymbols,
        oN = Object.prototype.hasOwnProperty,
        oO = Object.prototype.propertyIsEnumerable,
        oT = (t, e, r) => e in t ? oR(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        ok = (t, e) => {
            for (var r in e || (e = {})) oN.call(e, r) && oT(t, r, e[r]);
            if (oC)
                for (var r of oC(e)) oO.call(e, r) && oT(t, r, e[r]);
            return t
        };
    class oD extends ny {
        constructor(t) {
            var e;
            super(t), this.protocol = "wc", this.version = 2, this.name = nj, this.events = new g.EventEmitter, this.initialized = !1, this.on = (t, e) => this.events.on(t, e), this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), this.removeListener = (t, e) => this.events.removeListener(t, e), this.dispatchEnvelope = ({
                topic: t,
                message: e,
                sessionExists: r
            }) => {
                if (!t || !e) return;
                let i = {
                    topic: t,
                    message: e,
                    publishedAt: Date.now(),
                    transportType: n2
                };
                this.relayer.onLinkMessageEvent(i, {
                    sessionExists: r
                })
            }, this.projectId = t ? .projectId, this.relayUrl = t ? .relayUrl || nV, this.customStoragePrefix = null != t && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
            const r = (0, np.getDefaultLoggerOptions)({
                    level: "string" == typeof t ? .logger && t.logger ? t.logger : "error"
                }),
                {
                    logger: i,
                    chunkLoggerController: n
                } = (0, np.generatePlatformLogger)({
                    opts: r,
                    maxSizeInBytes: t ? .maxLogBlobSizeInBytes,
                    loggerOverride: t ? .logger
                });
            this.logChunkController = n, null != (e = this.logChunkController) && e.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
                var t, e;
                null != (t = this.logChunkController) && t.downloadLogsBlobInBrowser && (null == (e = this.logChunkController) || e.downloadLogsBlobInBrowser({
                    clientId: await this.crypto.getClientId()
                }))
            }), this.logger = (0, np.generateChildLogger)(i, this.name), this.heartbeat = new nf.HeartBeat, this.crypto = new sW(this, this.logger, t ? .keychain), this.history = new op(this, this.logger), this.expirer = new og(this, this.logger), this.storage = null != t && t.storage ? t.storage : new nd.default(ok(ok({}, nF), t ? .storageOptions)), this.relayer = new os({
                core: this,
                logger: this.logger,
                relayUrl: this.relayUrl,
                projectId: this.projectId
            }), this.pairing = new od(this, this.logger), this.verify = new ow(this, this.logger, this.storage), this.echoClient = new o_(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new oP(this, this.logger, t ? .telemetryEnabled)
        }
        static async init(t) {
            let e = new oD(t);
            await e.initialize();
            let r = await e.crypto.getClientId();
            return await e.storage.setItem("WALLETCONNECT_CLIENT_ID", r), e
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        async start() {
            this.initialized || await this.initialize()
        }
        async getLogsBlob() {
            var t;
            return null == (t = this.logChunkController) ? void 0 : t.logsToBlob({
                clientId: await this.crypto.getClientId()
            })
        }
        async addLinkModeSupportedApp(t) {
            this.linkModeSupportedApps.includes(t) || (this.linkModeSupportedApps.push(t), await this.storage.setItem(n6, this.linkModeSupportedApps))
        }
        async initialize() {
            this.logger.trace("Initialized");
            try {
                await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.eventClient.init(), this.linkModeSupportedApps = await this.storage.getItem(n6) || [], this.initialized = !0, this.logger.info("Core Initialization Success")
            } catch (t) {
                throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t
            }
        }
    }
    let oq = "client",
        oL = `wc@2:${oq}:`,
        oU = "WALLETCONNECT_DEEPLINK_CHOICE",
        oB = (b.THIRTY_DAYS, "Proposal expired"),
        oj = b.SEVEN_DAYS,
        oz = {
            wc_sessionPropose: {
                req: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1100
                },
                res: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1101
                },
                reject: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1120
                },
                autoReject: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1121
                }
            },
            wc_sessionSettle: {
                req: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1102
                },
                res: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1103
                }
            },
            wc_sessionUpdate: {
                req: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 1104
                },
                res: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 1105
                }
            },
            wc_sessionExtend: {
                req: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 1106
                },
                res: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 1107
                }
            },
            wc_sessionRequest: {
                req: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1108
                },
                res: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1109
                }
            },
            wc_sessionEvent: {
                req: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1110
                },
                res: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1111
                }
            },
            wc_sessionDelete: {
                req: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 1112
                },
                res: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 1113
                }
            },
            wc_sessionPing: {
                req: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 1114
                },
                res: {
                    ttl: b.ONE_DAY,
                    prompt: !1,
                    tag: 1115
                }
            },
            wc_sessionAuthenticate: {
                req: {
                    ttl: b.ONE_HOUR,
                    prompt: !0,
                    tag: 1116
                },
                res: {
                    ttl: b.ONE_HOUR,
                    prompt: !1,
                    tag: 1117
                },
                reject: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1118
                },
                autoReject: {
                    ttl: b.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1119
                }
            }
        },
        oF = {
            min: b.FIVE_MINUTES,
            max: b.SEVEN_DAYS
        },
        oH = "IDLE",
        oK = "ACTIVE",
        o$ = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"],
        oV = "wc@1.5:auth:",
        oG = `${oV}:PUB_KEY`;
    var oJ = Object.defineProperty,
        oQ = Object.defineProperties,
        oY = Object.getOwnPropertyDescriptors,
        oW = Object.getOwnPropertySymbols,
        oX = Object.prototype.hasOwnProperty,
        oZ = Object.prototype.propertyIsEnumerable,
        o0 = (t, e, r) => e in t ? oJ(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        o1 = (t, e) => {
            for (var r in e || (e = {})) oX.call(e, r) && o0(t, r, e[r]);
            if (oW)
                for (var r of oW(e)) oZ.call(e, r) && o0(t, r, e[r]);
            return t
        };
    class o2 extends nR {
        constructor(e) {
            super(e), this.name = "engine", this.events = new g.default, this.initialized = !1, this.requestQueue = {
                state: oH,
                queue: []
            }, this.sessionRequestQueue = {
                state: oH,
                queue: []
            }, this.requestQueueDelay = b.ONE_SECOND, this.expectedPairingMethodMap = new Map, this.recentlyDeletedMap = new Map, this.recentlyDeletedLimit = 200, this.relayMessageCache = [], this.init = async () => {
                this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({
                    methods: Object.keys(oz)
                }), this.initialized = !0, setTimeout(() => {
                    this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                }, (0, b.toMiliseconds)(this.requestQueueDelay)))
            }, this.connect = async t => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                let e = oQ(o1({}, t), oY({
                    requiredNamespaces: t.requiredNamespaces || {},
                    optionalNamespaces: t.optionalNamespaces || {}
                }));
                await this.isValidConnect(e);
                let {
                    pairingTopic: r,
                    requiredNamespaces: i,
                    optionalNamespaces: n,
                    sessionProperties: s,
                    relays: o
                } = e, a = r, h, c = !1;
                try {
                    a && (c = this.client.core.pairing.pairings.get(a).active)
                } catch (t) {
                    throw this.client.logger.error(`connect() -> pairing.get(${a}) failed`), t
                }
                if (!a || !c) {
                    let {
                        topic: t,
                        uri: e
                    } = await this.client.core.pairing.create();
                    a = t, h = e
                }
                if (!a) {
                    let {
                        message: t
                    } = i2("NO_MATCHING_KEY", `connect() pairing topic: ${a}`);
                    throw Error(t)
                }
                let u = await this.client.core.crypto.generateKeyPair(),
                    l = oz.wc_sessionPropose.req.ttl || b.FIVE_MINUTES,
                    f = tm(l),
                    d = o1({
                        requiredNamespaces: i,
                        optionalNamespaces: n,
                        relays: o ? ? [{
                            protocol: "irn"
                        }],
                        proposer: {
                            publicKey: u,
                            metadata: this.client.metadata
                        },
                        expiryTimestamp: f,
                        pairingTopic: a
                    }, s && {
                        sessionProperties: s
                    }),
                    {
                        reject: p,
                        resolve: g,
                        done: m
                    } = tf(l, oB);
                this.events.once(tv("session_connect"), async ({
                    error: t,
                    session: e
                }) => {
                    if (t) p(t);
                    else if (e) {
                        e.self.publicKey = u;
                        let t = oQ(o1({}, e), oY({
                            pairingTopic: d.pairingTopic,
                            requiredNamespaces: d.requiredNamespaces,
                            optionalNamespaces: d.optionalNamespaces,
                            transportType: n5
                        }));
                        await this.client.session.set(e.topic, t), await this.setExpiry(e.topic, e.expiry), a && await this.client.core.pairing.updateMetadata({
                            topic: a,
                            metadata: e.peer.metadata
                        }), this.cleanupDuplicatePairings(t), g(t)
                    }
                });
                let y = await this.sendRequest({
                    topic: a,
                    method: "wc_sessionPropose",
                    params: d,
                    throwOnFailedPublish: !0
                });
                return await this.setProposal(y, o1({
                    id: y
                }, d)), {
                    uri: h,
                    approval: m
                }
            }, this.pair = async t => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                    return await this.client.core.pairing.pair(t)
                } catch (t) {
                    throw this.client.logger.error("pair() failed"), t
                }
            }, this.approve = async t => {
                var e, r, i;
                let n = this.client.core.eventClient.createEvent({
                    properties: {
                        topic: null == (e = t ? .id) ? void 0 : e.toString(),
                        trace: [sl]
                    }
                });
                try {
                    this.isInitialized(), await this.confirmOnlineStateOrThrow()
                } catch (t) {
                    throw n.setError("no_internet_connection"), t
                }
                try {
                    await this.isValidProposalId(t ? .id)
                } catch (e) {
                    throw this.client.logger.error(`approve() -> proposal.get(${t?.id}) failed`), n.setError("proposal_not_found"), e
                }
                try {
                    await this.isValidApprove(t)
                } catch (t) {
                    throw this.client.logger.error("approve() -> isValidApprove() failed"), n.setError("session_approve_namespace_validation_failure"), t
                }
                let {
                    id: s,
                    relayProtocol: o,
                    namespaces: a,
                    sessionProperties: h,
                    sessionConfig: c
                } = t, u = this.client.proposal.get(s);
                this.client.core.eventClient.deleteEvent({
                    eventId: n.eventId
                });
                let {
                    pairingTopic: l,
                    proposer: f,
                    requiredNamespaces: d,
                    optionalNamespaces: p
                } = u, g = null == (r = this.client.core.eventClient) ? void 0 : r.getEvent({
                    topic: l
                });
                g || (g = null == (i = this.client.core.eventClient) ? void 0 : i.createEvent({
                    type: sl,
                    properties: {
                        topic: l,
                        trace: [sl, "session_namespaces_validation_success"]
                    }
                }));
                let m = await this.client.core.crypto.generateKeyPair(),
                    y = f.publicKey,
                    v = await this.client.core.crypto.generateSharedKey(m, y),
                    b = o1(o1({
                        relay: {
                            protocol: o ? ? "irn"
                        },
                        namespaces: a,
                        controller: {
                            publicKey: m,
                            metadata: this.client.metadata
                        },
                        expiry: tm(oj)
                    }, h && {
                        sessionProperties: h
                    }), c && {
                        sessionConfig: c
                    });
                g.addTrace("subscribing_session_topic");
                try {
                    await this.client.core.relayer.subscribe(v, {
                        transportType: n5
                    })
                } catch (t) {
                    throw g.setError("subscribe_session_topic_failure"), t
                }
                g.addTrace("subscribe_session_topic_success");
                let w = oQ(o1({}, b), oY({
                    topic: v,
                    requiredNamespaces: d,
                    optionalNamespaces: p,
                    pairingTopic: l,
                    acknowledged: !1,
                    self: b.controller,
                    peer: {
                        publicKey: f.publicKey,
                        metadata: f.metadata
                    },
                    controller: m,
                    transportType: n5
                }));
                await this.client.session.set(v, w), g.addTrace("store_session");
                try {
                    g.addTrace("publishing_session_settle"), await this.sendRequest({
                        topic: v,
                        method: "wc_sessionSettle",
                        params: b,
                        throwOnFailedPublish: !0
                    }).catch(t => {
                        throw g ? .setError("session_settle_publish_failure"), t
                    }), g.addTrace("session_settle_publish_success"), g.addTrace("publishing_session_approve"), await this.sendResult({
                        id: s,
                        topic: l,
                        result: {
                            relay: {
                                protocol: o ? ? "irn"
                            },
                            responderPublicKey: m
                        },
                        throwOnFailedPublish: !0
                    }).catch(t => {
                        throw g ? .setError("session_approve_publish_failure"), t
                    }), g.addTrace("session_approve_publish_success")
                } catch (t) {
                    throw this.client.logger.error(t), this.client.session.delete(v, i5("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(v), t
                }
                return this.client.core.eventClient.deleteEvent({
                    eventId: g.eventId
                }), await this.client.core.pairing.updateMetadata({
                    topic: l,
                    metadata: f.metadata
                }), await this.client.proposal.delete(s, i5("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                    topic: l
                }), await this.setExpiry(v, tm(oj)), {
                    topic: v,
                    acknowledged: () => Promise.resolve(this.client.session.get(v))
                }
            }, this.reject = async t => {
                let e;
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                    await this.isValidReject(t)
                } catch (t) {
                    throw this.client.logger.error("reject() -> isValidReject() failed"), t
                }
                let {
                    id: r,
                    reason: i
                } = t;
                try {
                    e = this.client.proposal.get(r).pairingTopic
                } catch (t) {
                    throw this.client.logger.error(`reject() -> proposal.get(${r}) failed`), t
                }
                e && (await this.sendError({
                    id: r,
                    topic: e,
                    error: i,
                    rpcOpts: oz.wc_sessionPropose.reject
                }), await this.client.proposal.delete(r, i5("USER_DISCONNECTED")))
            }, this.update = async t => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                    await this.isValidUpdate(t)
                } catch (t) {
                    throw this.client.logger.error("update() -> isValidUpdate() failed"), t
                }
                let {
                    topic: e,
                    namespaces: r
                } = t, {
                    done: i,
                    resolve: n,
                    reject: s
                } = tf(), o = (0, nN.payloadId)(), a = (0, nN.getBigIntRpcId)().toString(), h = this.client.session.get(e).namespaces;
                return this.events.once(tv("session_update", o), ({
                    error: t
                }) => {
                    t ? s(t) : n()
                }), await this.client.session.update(e, {
                    namespaces: r
                }), await this.sendRequest({
                    topic: e,
                    method: "wc_sessionUpdate",
                    params: {
                        namespaces: r
                    },
                    throwOnFailedPublish: !0,
                    clientRpcId: o,
                    relayRpcId: a
                }).catch(t => {
                    this.client.logger.error(t), this.client.session.update(e, {
                        namespaces: h
                    }), s(t)
                }), {
                    acknowledged: i
                }
            }, this.extend = async t => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                    await this.isValidExtend(t)
                } catch (t) {
                    throw this.client.logger.error("extend() -> isValidExtend() failed"), t
                }
                let {
                    topic: e
                } = t, r = (0, nN.payloadId)(), {
                    done: i,
                    resolve: n,
                    reject: s
                } = tf();
                return this.events.once(tv("session_extend", r), ({
                    error: t
                }) => {
                    t ? s(t) : n()
                }), await this.setExpiry(e, tm(oj)), this.sendRequest({
                    topic: e,
                    method: "wc_sessionExtend",
                    params: {},
                    clientRpcId: r,
                    throwOnFailedPublish: !0
                }).catch(t => {
                    s(t)
                }), {
                    acknowledged: i
                }
            }, this.request = async t => {
                this.isInitialized();
                try {
                    await this.isValidRequest(t)
                } catch (t) {
                    throw this.client.logger.error("request() -> isValidRequest() failed"), t
                }
                let {
                    chainId: e,
                    request: r,
                    topic: i,
                    expiry: n = oz.wc_sessionRequest.req.ttl
                } = t, s = this.client.session.get(i);
                s ? .transportType === n5 && await this.confirmOnlineStateOrThrow();
                let o = (0, nN.payloadId)(),
                    a = (0, nN.getBigIntRpcId)().toString(),
                    {
                        done: h,
                        resolve: c,
                        reject: u
                    } = tf(n, "Request expired. Please try again.");
                this.events.once(tv("session_request", o), ({
                    error: t,
                    result: e
                }) => {
                    t ? u(t) : c(e)
                });
                let l = this.getAppLinkIfEnabled(s.peer.metadata, s.transportType);
                return l ? (await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: i,
                    method: "wc_sessionRequest",
                    params: {
                        request: oQ(o1({}, r), oY({
                            expiryTimestamp: tm(n)
                        })),
                        chainId: e
                    },
                    expiry: n,
                    throwOnFailedPublish: !0,
                    appLink: l
                }).catch(t => u(t)), this.client.events.emit("session_request_sent", {
                    topic: i,
                    request: r,
                    chainId: e,
                    id: o
                }), await h()) : await Promise.all([new Promise(async t => {
                    await this.sendRequest({
                        clientRpcId: o,
                        relayRpcId: a,
                        topic: i,
                        method: "wc_sessionRequest",
                        params: {
                            request: oQ(o1({}, r), oY({
                                expiryTimestamp: tm(n)
                            })),
                            chainId: e
                        },
                        expiry: n,
                        throwOnFailedPublish: !0
                    }).catch(t => u(t)), this.client.events.emit("session_request_sent", {
                        topic: i,
                        request: r,
                        chainId: e,
                        id: o
                    }), t()
                }), new Promise(async t => {
                    var e;
                    if (!(null != (e = s.sessionConfig) && e.disableDeepLink)) {
                        let t = await t_(this.client.core.storage, oU);
                        await tw({
                            id: o,
                            topic: i,
                            wcDeepLink: t
                        })
                    }
                    t()
                }), h()]).then(t => t[2])
            }, this.respond = async t => {
                this.isInitialized(), await this.isValidRespond(t);
                let {
                    topic: e,
                    response: r
                } = t, {
                    id: i
                } = r, n = this.client.session.get(e);
                n.transportType === n5 && await this.confirmOnlineStateOrThrow();
                let s = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
                (0, nO.isJsonRpcResult)(r) ? await this.sendResult({
                    id: i,
                    topic: e,
                    result: r.result,
                    throwOnFailedPublish: !0,
                    appLink: s
                }): (0, nO.isJsonRpcError)(r) && await this.sendError({
                    id: i,
                    topic: e,
                    error: r.error,
                    appLink: s
                }), this.cleanupAfterResponse(t)
            }, this.ping = async t => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                    await this.isValidPing(t)
                } catch (t) {
                    throw this.client.logger.error("ping() -> isValidPing() failed"), t
                }
                let {
                    topic: e
                } = t;
                if (this.client.session.keys.includes(e)) {
                    let t = (0, nN.payloadId)(),
                        r = (0, nN.getBigIntRpcId)().toString(),
                        {
                            done: i,
                            resolve: n,
                            reject: s
                        } = tf();
                    this.events.once(tv("session_ping", t), ({
                        error: t
                    }) => {
                        t ? s(t) : n()
                    }), await Promise.all([this.sendRequest({
                        topic: e,
                        method: "wc_sessionPing",
                        params: {},
                        throwOnFailedPublish: !0,
                        clientRpcId: t,
                        relayRpcId: r
                    }), i()])
                } else this.client.core.pairing.pairings.keys.includes(e) && await this.client.core.pairing.ping({
                    topic: e
                })
            }, this.emit = async t => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(t);
                let {
                    topic: e,
                    event: r,
                    chainId: i
                } = t, n = (0, nN.getBigIntRpcId)().toString();
                await this.sendRequest({
                    topic: e,
                    method: "wc_sessionEvent",
                    params: {
                        event: r,
                        chainId: i
                    },
                    throwOnFailedPublish: !0,
                    relayRpcId: n
                })
            }, this.disconnect = async t => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(t);
                let {
                    topic: e
                } = t;
                if (this.client.session.keys.includes(e)) await this.sendRequest({
                    topic: e,
                    method: "wc_sessionDelete",
                    params: i5("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0
                }), await this.deleteSession({
                    topic: e,
                    emitEvent: !1
                });
                else if (this.client.core.pairing.pairings.keys.includes(e)) await this.client.core.pairing.disconnect({
                    topic: e
                });
                else {
                    let {
                        message: t
                    } = i2("MISMATCHED_TOPIC", `Session or pairing topic not found: ${e}`);
                    throw Error(t)
                }
            }, this.find = t => (this.isInitialized(), this.client.session.getAll().filter(e => (function(t, e) {
                let {
                    requiredNamespaces: r
                } = e, i = Object.keys(t.namespaces), n = Object.keys(r), s = !0;
                return !!tc(n, i) && (i.forEach(e => {
                    let {
                        accounts: i,
                        methods: n,
                        events: o
                    } = t.namespaces[e], a = iY(i), h = r[e];
                    tc(G(e, h), a) && tc(h.methods, n) && tc(h.events, o) || (s = !1)
                }), s)
            })(e, t))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async (t, e) => {
                var r, i, n, s, o;
                let a;
                this.isInitialized(), this.isValidAuthenticate(t);
                let h = e && this.client.core.linkModeSupportedApps.includes(e) && (null == (r = this.client.metadata.redirect) ? void 0 : r.linkMode),
                    c = h ? n2 : n5;
                c === n5 && await this.confirmOnlineStateOrThrow();
                let {
                    chains: u,
                    statement: l = "",
                    uri: f,
                    domain: d,
                    nonce: p,
                    type: g,
                    exp: m,
                    nbf: y,
                    methods: v = [],
                    expiry: b
                } = t, w = [...t.resources || []], {
                    topic: _,
                    uri: A
                } = await this.client.core.pairing.create({
                    methods: ["wc_sessionAuthenticate"],
                    transportType: c
                });
                this.client.logger.info({
                    message: "Generated new pairing",
                    pairing: {
                        topic: _,
                        uri: A
                    }
                });
                let x = await this.client.core.crypto.generateKeyPair(),
                    E = iR(x);
                if (await Promise.all([this.client.auth.authKeys.set(oG, {
                        responseTopic: E,
                        publicKey: x
                    }), this.client.auth.pairingTopics.set(E, {
                        topic: E,
                        pairingTopic: _
                    })]), await this.client.core.relayer.subscribe(E, {
                        transportType: c
                    }), this.client.logger.info(`sending request to new pairing topic: ${_}`), v.length > 0) {
                    let t, e, {
                            namespace: r
                        } = $(u[0]),
                        a = iv(function(t, e, r, i = {}) {
                            return r ? .sort((t, e) => t.localeCompare(e)), {
                                att: {
                                    [t]: function(t, e, r = {}) {
                                        return Object.assign({}, ...(e = e ? .sort((t, e) => t.localeCompare(e))).map(e => ({
                                            [`${t}/${e}`]: [r]
                                        })))
                                    }(e, r, i)
                                }
                            }
                        }(r, "request", v));
                    iA(w) && (i = a, n = w.pop(), a = iv((s = ib(i), o = ib(n), iy(s), iy(o), t = Object.keys(s.att).concat(Object.keys(o.att)).sort((t, e) => t.localeCompare(e)), e = {
                        att: {}
                    }, t.forEach(t => {
                        var r, i;
                        Object.keys((null == (r = s.att) ? void 0 : r[t]) || {}).concat(Object.keys((null == (i = o.att) ? void 0 : i[t]) || {})).sort((t, e) => t.localeCompare(e)).forEach(r => {
                            var i, n;
                            e.att[t] = ii(((t, e) => {
                                for (var r in e || (e = {})) ia.call(e, r) && ic(t, r, e[r]);
                                if (io)
                                    for (var r of io(e)) ih.call(e, r) && ic(t, r, e[r]);
                                return t
                            })({}, e.att[t]), is({
                                [r]: (null == (i = s.att[t]) ? void 0 : i[r]) || (null == (n = o.att[t]) ? void 0 : n[r])
                            }))
                        })
                    }), e))), w.push(a)
                }
                let I = b && b > oz.wc_sessionAuthenticate.req.ttl ? b : oz.wc_sessionAuthenticate.req.ttl,
                    S = {
                        authPayload: {
                            type: g ? ? "caip122",
                            chains: u,
                            statement: l,
                            aud: f,
                            domain: d,
                            version: "1",
                            nonce: p,
                            iat: new Date().toISOString(),
                            exp: m,
                            nbf: y,
                            resources: w
                        },
                        requester: {
                            publicKey: x,
                            metadata: this.client.metadata
                        },
                        expiryTimestamp: tm(I)
                    },
                    M = {
                        requiredNamespaces: {},
                        optionalNamespaces: {
                            eip155: {
                                chains: u,
                                methods: [...new Set(["personal_sign", ...v])],
                                events: ["chainChanged", "accountsChanged"]
                            }
                        },
                        relays: [{
                            protocol: "irn"
                        }],
                        pairingTopic: _,
                        proposer: {
                            publicKey: x,
                            metadata: this.client.metadata
                        },
                        expiryTimestamp: tm(oz.wc_sessionPropose.req.ttl)
                    },
                    {
                        done: P,
                        resolve: R,
                        reject: C
                    } = tf(I, "Request expired"),
                    N = async ({
                        error: t,
                        session: e
                    }) => {
                        if (this.events.off(tv("session_request", T), O), t) C(t);
                        else if (e) {
                            e.self.publicKey = x, await this.client.session.set(e.topic, e), await this.setExpiry(e.topic, e.expiry), _ && await this.client.core.pairing.updateMetadata({
                                topic: _,
                                metadata: e.peer.metadata
                            });
                            let t = this.client.session.get(e.topic);
                            await this.deleteProposal(k), R({
                                session: t
                            })
                        }
                    },
                    O = async t => {
                        var r, i, n;
                        let s;
                        if (await this.deletePendingAuthRequest(T, {
                                message: "fulfilled",
                                code: 0
                            }), t.error) {
                            let e = i5("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                            return t.error.code === e.code ? void 0 : (this.events.off(tv("session_connect"), N), C(t.error.message))
                        }
                        await this.deleteProposal(k), this.events.off(tv("session_connect"), N);
                        let {
                            cacaos: o,
                            responder: a
                        } = t.result, h = [], u = [];
                        for (let t of o) {
                            await ig({
                                cacao: t,
                                projectId: this.client.core.projectId
                            }) || (this.client.logger.error(t, "Signature verification failed"), C(i5("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                            let {
                                p: e
                            } = t, r = iA(e.resources), i = [id(e.iss)], n = ip(e.iss);
                            if (r) {
                                let t = iw(r),
                                    e = i_(r);
                                h.push(...t), i.push(...e)
                            }
                            for (let t of i) u.push(`${t}:${n}`)
                        }
                        let l = await this.client.core.crypto.generateSharedKey(x, a.publicKey);
                        h.length > 0 && (s = {
                            topic: l,
                            acknowledged: !0,
                            self: {
                                publicKey: x,
                                metadata: this.client.metadata
                            },
                            peer: a,
                            controller: a.publicKey,
                            expiry: tm(oj),
                            requiredNamespaces: {},
                            optionalNamespaces: {},
                            relay: {
                                protocol: "irn"
                            },
                            pairingTopic: _,
                            namespaces: iZ([...new Set(h)], [...new Set(u)]),
                            transportType: c
                        }, await this.client.core.relayer.subscribe(l, {
                            transportType: c
                        }), await this.client.session.set(l, s), _ && await this.client.core.pairing.updateMetadata({
                            topic: _,
                            metadata: a.metadata
                        }), s = this.client.session.get(l)), null != (r = this.client.metadata.redirect) && r.linkMode && null != (i = a.metadata.redirect) && i.linkMode && null != (n = a.metadata.redirect) && n.universal && e && (this.client.core.addLinkModeSupportedApp(a.metadata.redirect.universal), this.client.session.update(l, {
                            transportType: n2
                        })), R({
                            auths: o,
                            session: s
                        })
                    },
                    T = (0, nN.payloadId)(),
                    k = (0, nN.payloadId)();
                this.events.once(tv("session_connect"), N), this.events.once(tv("session_request", T), O);
                try {
                    if (h) {
                        let t = (0, nN.formatJsonRpcRequest)("wc_sessionAuthenticate", S, T);
                        this.client.core.history.set(_, t);
                        let r = await this.client.core.crypto.encode("", t, {
                            type: 2,
                            encoding: iS
                        });
                        a = iQ(e, _, r)
                    } else await Promise.all([this.sendRequest({
                        topic: _,
                        method: "wc_sessionAuthenticate",
                        params: S,
                        expiry: t.expiry,
                        throwOnFailedPublish: !0,
                        clientRpcId: T
                    }), this.sendRequest({
                        topic: _,
                        method: "wc_sessionPropose",
                        params: M,
                        expiry: oz.wc_sessionPropose.req.ttl,
                        throwOnFailedPublish: !0,
                        clientRpcId: k
                    })])
                } catch (t) {
                    throw this.events.off(tv("session_connect"), N), this.events.off(tv("session_request", T), O), t
                }
                return await this.setProposal(k, o1({
                    id: k
                }, M)), await this.setAuthRequest(T, {
                    request: oQ(o1({}, S), oY({
                        verifyContext: {}
                    })),
                    pairingTopic: _,
                    transportType: c
                }), {
                    uri: a ? ? A,
                    response: P
                }
            }, this.approveSessionAuthenticate = async t => {
                let e, {
                        id: r,
                        auths: i
                    } = t,
                    n = this.client.core.eventClient.createEvent({
                        properties: {
                            topic: r.toString(),
                            trace: ["authenticated_session_approve_started"]
                        }
                    });
                try {
                    this.isInitialized()
                } catch (t) {
                    throw n.setError("no_internet_connection"), t
                }
                let s = this.getPendingAuthRequest(r);
                if (!s) throw n.setError("authenticated_session_pending_request_not_found"), Error(`Could not find pending auth request with id ${r}`);
                let o = s.transportType || n5;
                o === n5 && await this.confirmOnlineStateOrThrow();
                let a = s.requester.publicKey,
                    h = await this.client.core.crypto.generateKeyPair(),
                    c = iR(a),
                    u = {
                        type: 1,
                        receiverPublicKey: a,
                        senderPublicKey: h
                    },
                    l = [],
                    f = [];
                for (let t of i) {
                    if (!await ig({
                            cacao: t,
                            projectId: this.client.core.projectId
                        })) {
                        n.setError("invalid_cacao");
                        let t = i5("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                        throw await this.sendError({
                            id: r,
                            topic: c,
                            error: t,
                            encodeOpts: u
                        }), Error(t.message)
                    }
                    n.addTrace("cacaos_verified");
                    let {
                        p: e
                    } = t, i = iA(e.resources), s = [id(e.iss)], o = ip(e.iss);
                    if (i) {
                        let t = iw(i),
                            e = i_(i);
                        l.push(...t), s.push(...e)
                    }
                    for (let t of s) f.push(`${t}:${o}`)
                }
                let d = await this.client.core.crypto.generateSharedKey(h, a);
                if (n.addTrace("create_authenticated_session_topic"), l ? .length > 0) {
                    e = {
                        topic: d,
                        acknowledged: !0,
                        self: {
                            publicKey: h,
                            metadata: this.client.metadata
                        },
                        peer: {
                            publicKey: a,
                            metadata: s.requester.metadata
                        },
                        controller: a,
                        expiry: tm(oj),
                        authentication: i,
                        requiredNamespaces: {},
                        optionalNamespaces: {},
                        relay: {
                            protocol: "irn"
                        },
                        pairingTopic: s.pairingTopic,
                        namespaces: iZ([...new Set(l)], [...new Set(f)]),
                        transportType: o
                    }, n.addTrace("subscribing_authenticated_session_topic");
                    try {
                        await this.client.core.relayer.subscribe(d, {
                            transportType: o
                        })
                    } catch (t) {
                        throw n.setError("subscribe_authenticated_session_topic_failure"), t
                    }
                    n.addTrace("subscribe_authenticated_session_topic_success"), await this.client.session.set(d, e), n.addTrace("store_authenticated_session"), await this.client.core.pairing.updateMetadata({
                        topic: s.pairingTopic,
                        metadata: s.requester.metadata
                    })
                }
                n.addTrace("publishing_authenticated_session_approve");
                try {
                    await this.sendResult({
                        topic: c,
                        id: r,
                        result: {
                            cacaos: i,
                            responder: {
                                publicKey: h,
                                metadata: this.client.metadata
                            }
                        },
                        encodeOpts: u,
                        throwOnFailedPublish: !0,
                        appLink: this.getAppLinkIfEnabled(s.requester.metadata, o)
                    })
                } catch (t) {
                    throw n.setError("authenticated_session_approve_publish_failure"), t
                }
                return await this.client.auth.requests.delete(r, {
                    message: "fulfilled",
                    code: 0
                }), await this.client.core.pairing.activate({
                    topic: s.pairingTopic
                }), this.client.core.eventClient.deleteEvent({
                    eventId: n.eventId
                }), {
                    session: e
                }
            }, this.rejectSessionAuthenticate = async t => {
                this.isInitialized();
                let {
                    id: e,
                    reason: r
                } = t, i = this.getPendingAuthRequest(e);
                if (!i) throw Error(`Could not find pending auth request with id ${e}`);
                i.transportType === n5 && await this.confirmOnlineStateOrThrow();
                let n = i.requester.publicKey,
                    s = await this.client.core.crypto.generateKeyPair(),
                    o = iR(n);
                await this.sendError({
                    id: e,
                    topic: o,
                    error: r,
                    encodeOpts: {
                        type: 1,
                        receiverPublicKey: n,
                        senderPublicKey: s
                    },
                    rpcOpts: oz.wc_sessionAuthenticate.reject,
                    appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType)
                }), await this.client.auth.requests.delete(e, {
                    message: "rejected",
                    code: 0
                }), await this.client.proposal.delete(e, i5("USER_DISCONNECTED"))
            }, this.formatAuthMessage = t => {
                this.isInitialized();
                let {
                    request: e,
                    iss: r
                } = t;
                return im(e, r)
            }, this.processRelayMessageCache = () => {
                setTimeout(async () => {
                    if (0 !== this.relayMessageCache.length)
                        for (; this.relayMessageCache.length > 0;) try {
                            let t = this.relayMessageCache.shift();
                            t && await this.onRelayMessage(t)
                        } catch (t) {
                            this.client.logger.error(t)
                        }
                }, 50)
            }, this.cleanupDuplicatePairings = async t => {
                if (t.pairingTopic) try {
                    let e = this.client.core.pairing.pairings.get(t.pairingTopic),
                        r = this.client.core.pairing.pairings.getAll().filter(r => {
                            var i, n;
                            return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === t.peer.metadata.url && r.topic && r.topic !== e.topic
                        });
                    if (0 === r.length) return;
                    this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(t => this.client.core.pairing.disconnect({
                        topic: t.topic
                    }))), this.client.logger.info("Duplicate pairings clean up finished")
                } catch (t) {
                    this.client.logger.error(t)
                }
            }, this.deleteSession = async t => {
                var e;
                let {
                    topic: r,
                    expirerHasDeleted: i = !1,
                    emitEvent: n = !0,
                    id: s = 0
                } = t, {
                    self: o
                } = this.client.session.get(r);
                await this.client.core.relayer.unsubscribe(r), await this.client.session.delete(r, i5("USER_DISCONNECTED")), this.addToRecentlyDeleted(r, "session"), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(oU).catch(t => this.client.logger.warn(t)), this.getPendingSessionRequests().forEach(t => {
                    t.topic === r && this.deletePendingSessionRequest(t.id, i5("USER_DISCONNECTED"))
                }), r === (null == (e = this.sessionRequestQueue.queue[0]) ? void 0 : e.topic) && (this.sessionRequestQueue.state = oH), n && this.client.events.emit("session_delete", {
                    id: s,
                    topic: r
                })
            }, this.deleteProposal = async (t, e) => {
                if (e) try {
                    let e = this.client.proposal.get(t),
                        r = this.client.core.eventClient.getEvent({
                            topic: e.pairingTopic
                        });
                    r ? .setError("proposal_expired")
                } catch {}
                await Promise.all([this.client.proposal.delete(t, i5("USER_DISCONNECTED")), e ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "proposal")
            }, this.deletePendingSessionRequest = async (t, e, r = !1) => {
                await Promise.all([this.client.pendingRequest.delete(t, e), r ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(e => e.id !== t), r && (this.sessionRequestQueue.state = oH, this.client.events.emit("session_request_expire", {
                    id: t
                }))
            }, this.deletePendingAuthRequest = async (t, e, r = !1) => {
                await Promise.all([this.client.auth.requests.delete(t, e), r ? Promise.resolve() : this.client.core.expirer.del(t)])
            }, this.setExpiry = async (t, e) => {
                this.client.session.keys.includes(t) && (this.client.core.expirer.set(t, e), await this.client.session.update(t, {
                    expiry: e
                }))
            }, this.setProposal = async (t, e) => {
                this.client.core.expirer.set(t, tm(oz.wc_sessionPropose.req.ttl)), await this.client.proposal.set(t, e)
            }, this.setAuthRequest = async (t, e) => {
                let {
                    request: r,
                    pairingTopic: i,
                    transportType: n = n5
                } = e;
                this.client.core.expirer.set(t, r.expiryTimestamp), await this.client.auth.requests.set(t, {
                    authPayload: r.authPayload,
                    requester: r.requester,
                    expiryTimestamp: r.expiryTimestamp,
                    id: t,
                    pairingTopic: i,
                    verifyContext: r.verifyContext,
                    transportType: n
                })
            }, this.setPendingSessionRequest = async t => {
                let {
                    id: e,
                    topic: r,
                    params: i,
                    verifyContext: n
                } = t, s = i.request.expiryTimestamp || tm(oz.wc_sessionRequest.req.ttl);
                this.client.core.expirer.set(e, s), await this.client.pendingRequest.set(e, {
                    id: e,
                    topic: r,
                    params: i,
                    verifyContext: n
                })
            }, this.sendRequest = async e => {
                let r, i, {
                        topic: n,
                        method: s,
                        params: o,
                        expiry: a,
                        relayRpcId: h,
                        clientRpcId: c,
                        throwOnFailedPublish: u,
                        appLink: l
                    } = e,
                    f = (0, nN.formatJsonRpcRequest)(s, o, c),
                    d = !!l;
                try {
                    let t = d ? iS : iI;
                    r = await this.client.core.crypto.encode(n, f, {
                        encoding: t
                    })
                } catch (t) {
                    throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${n} failed`), t
                }
                if (o$.includes(s)) {
                    let t = iC(JSON.stringify(f)),
                        e = iC(r);
                    i = await this.client.core.verify.register({
                        id: e,
                        decryptedId: t
                    })
                }
                let p = oz[s].req;
                if (p.attestation = i, a && (p.ttl = a), h && (p.id = h), this.client.core.history.set(n, f), d) {
                    let e = iQ(l, n, r);
                    await t.g.Linking.openURL(e, this.client.name)
                } else {
                    let t, e = oz[s].req;
                    a && (e.ttl = a), h && (e.id = h), u ? (t = o1({}, e.internal), e.internal = oQ(t, oY({
                        throwOnFailedPublish: !0
                    })), await this.client.core.relayer.publish(n, r, e)) : this.client.core.relayer.publish(n, r, e).catch(t => this.client.logger.error(t))
                }
                return f.id
            }, this.sendResult = async e => {
                let r, i, {
                        id: n,
                        topic: s,
                        result: o,
                        throwOnFailedPublish: a,
                        encodeOpts: h,
                        appLink: c
                    } = e,
                    u = (0, nN.formatJsonRpcResult)(n, o),
                    l = c && "u" > typeof(null == t.g ? void 0 : t.g.Linking);
                try {
                    let t, e, i = l ? iS : iI;
                    r = await this.client.core.crypto.encode(s, u, (t = o1({}, h || {}), e = {
                        encoding: i
                    }, oQ(t, oY(e))))
                } catch (t) {
                    throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), t
                }
                try {
                    i = await this.client.core.history.get(s, n)
                } catch (t) {
                    throw this.client.logger.error(`sendResult() -> history.get(${s}, ${n}) failed`), t
                }
                if (l) {
                    let e = iQ(c, s, r);
                    await t.g.Linking.openURL(e, this.client.name)
                } else {
                    let t, e = oz[i.request.method].res;
                    a ? (t = o1({}, e.internal), e.internal = oQ(t, oY({
                        throwOnFailedPublish: !0
                    })), await this.client.core.relayer.publish(s, r, e)) : this.client.core.relayer.publish(s, r, e).catch(t => this.client.logger.error(t))
                }
                await this.client.core.history.resolve(u)
            }, this.sendError = async e => {
                let r, i, {
                        id: n,
                        topic: s,
                        error: o,
                        encodeOpts: a,
                        rpcOpts: h,
                        appLink: c
                    } = e,
                    u = (0, nN.formatJsonRpcError)(n, o),
                    l = c && "u" > typeof(null == t.g ? void 0 : t.g.Linking);
                try {
                    let t, e, i = l ? iS : iI;
                    r = await this.client.core.crypto.encode(s, u, (t = o1({}, a || {}), e = {
                        encoding: i
                    }, oQ(t, oY(e))))
                } catch (t) {
                    throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), t
                }
                try {
                    i = await this.client.core.history.get(s, n)
                } catch (t) {
                    throw this.client.logger.error(`sendError() -> history.get(${s}, ${n}) failed`), t
                }
                if (l) {
                    let e = iQ(c, s, r);
                    await t.g.Linking.openURL(e, this.client.name)
                } else {
                    let t = h || oz[i.request.method].res;
                    this.client.core.relayer.publish(s, r, t)
                }
                await this.client.core.history.resolve(u)
            }, this.cleanup = async () => {
                let t = [],
                    e = [];
                this.client.session.getAll().forEach(e => {
                    let r = !1;
                    ty(e.expiry) && (r = !0), this.client.core.crypto.keychain.has(e.topic) || (r = !0), r && t.push(e.topic)
                }), this.client.proposal.getAll().forEach(t => {
                    ty(t.expiryTimestamp) && e.push(t.id)
                }), await Promise.all([...t.map(t => this.deleteSession({
                    topic: t
                })), ...e.map(t => this.deleteProposal(t))])
            }, this.onRelayEventRequest = async t => {
                this.requestQueue.queue.push(t), await this.processRequestsQueue()
            }, this.processRequestsQueue = async () => {
                if (this.requestQueue.state === oK) return void this.client.logger.info("Request queue already active, skipping...");
                for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                    this.requestQueue.state = oK;
                    let t = this.requestQueue.queue.shift();
                    if (t) try {
                        await this.processRequest(t)
                    } catch (t) {
                        this.client.logger.warn(t)
                    }
                }
                this.requestQueue.state = oH
            }, this.processRequest = async t => {
                let {
                    topic: e,
                    payload: r,
                    attestation: i,
                    transportType: n,
                    encryptedId: s
                } = t, o = r.method;
                if (!this.shouldIgnorePairingRequest({
                        topic: e,
                        requestMethod: o
                    })) switch (o) {
                    case "wc_sessionPropose":
                        return await this.onSessionProposeRequest({
                            topic: e,
                            payload: r,
                            attestation: i,
                            encryptedId: s
                        });
                    case "wc_sessionSettle":
                        return await this.onSessionSettleRequest(e, r);
                    case "wc_sessionUpdate":
                        return await this.onSessionUpdateRequest(e, r);
                    case "wc_sessionExtend":
                        return await this.onSessionExtendRequest(e, r);
                    case "wc_sessionPing":
                        return await this.onSessionPingRequest(e, r);
                    case "wc_sessionDelete":
                        return await this.onSessionDeleteRequest(e, r);
                    case "wc_sessionRequest":
                        return await this.onSessionRequest({
                            topic: e,
                            payload: r,
                            attestation: i,
                            encryptedId: s,
                            transportType: n
                        });
                    case "wc_sessionEvent":
                        return await this.onSessionEventRequest(e, r);
                    case "wc_sessionAuthenticate":
                        return await this.onSessionAuthenticateRequest({
                            topic: e,
                            payload: r,
                            attestation: i,
                            encryptedId: s,
                            transportType: n
                        });
                    default:
                        return this.client.logger.info(`Unsupported request method ${o}`)
                }
            }, this.onRelayEventResponse = async t => {
                let {
                    topic: e,
                    payload: r,
                    transportType: i
                } = t, n = (await this.client.core.history.get(e, r.id)).request.method;
                switch (n) {
                    case "wc_sessionPropose":
                        return this.onSessionProposeResponse(e, r, i);
                    case "wc_sessionSettle":
                        return this.onSessionSettleResponse(e, r);
                    case "wc_sessionUpdate":
                        return this.onSessionUpdateResponse(e, r);
                    case "wc_sessionExtend":
                        return this.onSessionExtendResponse(e, r);
                    case "wc_sessionPing":
                        return this.onSessionPingResponse(e, r);
                    case "wc_sessionRequest":
                        return this.onSessionRequestResponse(e, r);
                    case "wc_sessionAuthenticate":
                        return this.onSessionAuthenticateResponse(e, r);
                    default:
                        return this.client.logger.info(`Unsupported response method ${n}`)
                }
            }, this.onRelayEventUnknownPayload = t => {
                let {
                    topic: e
                } = t, {
                    message: r
                } = i2("MISSING_OR_INVALID", `Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);
                throw Error(r)
            }, this.shouldIgnorePairingRequest = t => {
                let {
                    topic: e,
                    requestMethod: r
                } = t, i = this.expectedPairingMethodMap.get(e);
                return !(!i || i.includes(r)) && !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0)
            }, this.onSessionProposeRequest = async t => {
                let {
                    topic: e,
                    payload: r,
                    attestation: i,
                    encryptedId: n
                } = t, {
                    params: s,
                    id: o
                } = r;
                try {
                    let t = this.client.core.eventClient.getEvent({
                        topic: e
                    });
                    this.isValidConnect(o1({}, r.params));
                    let a = s.expiryTimestamp || tm(oz.wc_sessionPropose.req.ttl),
                        h = o1({
                            id: o,
                            pairingTopic: e,
                            expiryTimestamp: a
                        }, s);
                    await this.setProposal(o, h);
                    let c = await this.getVerifyContext({
                        attestationId: i,
                        hash: iC(JSON.stringify(r)),
                        encryptedId: n,
                        metadata: h.proposer.metadata
                    });
                    0 === this.client.events.listenerCount("session_proposal") && (console.warn("No listener for session_proposal event"), t ? .setError("proposal_listener_not_found")), t ? .addTrace("emit_session_proposal"), this.client.events.emit("session_proposal", {
                        id: o,
                        params: h,
                        verifyContext: c
                    })
                } catch (t) {
                    await this.sendError({
                        id: o,
                        topic: e,
                        error: t,
                        rpcOpts: oz.wc_sessionPropose.autoReject
                    }), this.client.logger.error(t)
                }
            }, this.onSessionProposeResponse = async (t, e, r) => {
                let {
                    id: i
                } = e;
                if ((0, nO.isJsonRpcResult)(e)) {
                    let {
                        result: n
                    } = e;
                    this.client.logger.trace({
                        type: "method",
                        method: "onSessionProposeResponse",
                        result: n
                    });
                    let s = this.client.proposal.get(i);
                    this.client.logger.trace({
                        type: "method",
                        method: "onSessionProposeResponse",
                        proposal: s
                    });
                    let o = s.proposer.publicKey;
                    this.client.logger.trace({
                        type: "method",
                        method: "onSessionProposeResponse",
                        selfPublicKey: o
                    });
                    let a = n.responderPublicKey;
                    this.client.logger.trace({
                        type: "method",
                        method: "onSessionProposeResponse",
                        peerPublicKey: a
                    });
                    let h = await this.client.core.crypto.generateSharedKey(o, a);
                    this.client.logger.trace({
                        type: "method",
                        method: "onSessionProposeResponse",
                        sessionTopic: h
                    });
                    let c = await this.client.core.relayer.subscribe(h, {
                        transportType: r
                    });
                    this.client.logger.trace({
                        type: "method",
                        method: "onSessionProposeResponse",
                        subscriptionId: c
                    }), await this.client.core.pairing.activate({
                        topic: t
                    })
                } else if ((0, nO.isJsonRpcError)(e)) {
                    await this.client.proposal.delete(i, i5("USER_DISCONNECTED"));
                    let t = tv("session_connect");
                    if (0 === this.events.listenerCount(t)) throw Error(`emitting ${t} without any listeners, 954`);
                    this.events.emit(tv("session_connect"), {
                        error: e.error
                    })
                }
            }, this.onSessionSettleRequest = async (t, e) => {
                let {
                    id: r,
                    params: i
                } = e;
                try {
                    let r, n;
                    this.isValidSessionSettleRequest(i);
                    let {
                        relay: s,
                        controller: o,
                        expiry: a,
                        namespaces: h,
                        sessionProperties: c,
                        sessionConfig: u
                    } = e.params, l = (r = o1(o1({
                        topic: t,
                        relay: s,
                        expiry: a,
                        namespaces: h,
                        acknowledged: !0,
                        pairingTopic: "",
                        requiredNamespaces: {},
                        optionalNamespaces: {},
                        controller: o.publicKey,
                        self: {
                            publicKey: "",
                            metadata: this.client.metadata
                        },
                        peer: {
                            publicKey: o.publicKey,
                            metadata: o.metadata
                        }
                    }, c && {
                        sessionProperties: c
                    }), u && {
                        sessionConfig: u
                    }), n = {
                        transportType: n5
                    }, oQ(r, oY(n))), f = tv("session_connect");
                    if (0 === this.events.listenerCount(f)) throw Error(`emitting ${f} without any listeners 997`);
                    this.events.emit(tv("session_connect"), {
                        session: l
                    }), await this.sendResult({
                        id: e.id,
                        topic: t,
                        result: !0,
                        throwOnFailedPublish: !0
                    })
                } catch (e) {
                    await this.sendError({
                        id: r,
                        topic: t,
                        error: e
                    }), this.client.logger.error(e)
                }
            }, this.onSessionSettleResponse = async (t, e) => {
                let {
                    id: r
                } = e;
                (0, nO.isJsonRpcResult)(e) ? (await this.client.session.update(t, {
                    acknowledged: !0
                }), this.events.emit(tv("session_approve", r), {})) : (0, nO.isJsonRpcError)(e) && (await this.client.session.delete(t, i5("USER_DISCONNECTED")), this.events.emit(tv("session_approve", r), {
                    error: e.error
                }))
            }, this.onSessionUpdateRequest = async (t, e) => {
                let {
                    params: r,
                    id: i
                } = e;
                try {
                    let e = `${t}_session_update`,
                        n = nl.get(e);
                    if (n && this.isRequestOutOfSync(n, i)) {
                        this.client.logger.info(`Discarding out of sync request - ${i}`), this.sendError({
                            id: i,
                            topic: t,
                            error: i5("INVALID_UPDATE_REQUEST")
                        });
                        return
                    }
                    this.isValidUpdate(o1({
                        topic: t
                    }, r));
                    try {
                        nl.set(e, i), await this.client.session.update(t, {
                            namespaces: r.namespaces
                        }), await this.sendResult({
                            id: i,
                            topic: t,
                            result: !0,
                            throwOnFailedPublish: !0
                        })
                    } catch (t) {
                        throw nl.delete(e), t
                    }
                    this.client.events.emit("session_update", {
                        id: i,
                        topic: t,
                        params: r
                    })
                } catch (e) {
                    await this.sendError({
                        id: i,
                        topic: t,
                        error: e
                    }), this.client.logger.error(e)
                }
            }, this.isRequestOutOfSync = (t, e) => parseInt(e.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, e) => {
                let {
                    id: r
                } = e, i = tv("session_update", r);
                if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                (0, nO.isJsonRpcResult)(e) ? this.events.emit(tv("session_update", r), {}): (0, nO.isJsonRpcError)(e) && this.events.emit(tv("session_update", r), {
                    error: e.error
                })
            }, this.onSessionExtendRequest = async (t, e) => {
                let {
                    id: r
                } = e;
                try {
                    this.isValidExtend({
                        topic: t
                    }), await this.setExpiry(t, tm(oj)), await this.sendResult({
                        id: r,
                        topic: t,
                        result: !0,
                        throwOnFailedPublish: !0
                    }), this.client.events.emit("session_extend", {
                        id: r,
                        topic: t
                    })
                } catch (e) {
                    await this.sendError({
                        id: r,
                        topic: t,
                        error: e
                    }), this.client.logger.error(e)
                }
            }, this.onSessionExtendResponse = (t, e) => {
                let {
                    id: r
                } = e, i = tv("session_extend", r);
                if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                (0, nO.isJsonRpcResult)(e) ? this.events.emit(tv("session_extend", r), {}): (0, nO.isJsonRpcError)(e) && this.events.emit(tv("session_extend", r), {
                    error: e.error
                })
            }, this.onSessionPingRequest = async (t, e) => {
                let {
                    id: r
                } = e;
                try {
                    this.isValidPing({
                        topic: t
                    }), await this.sendResult({
                        id: r,
                        topic: t,
                        result: !0,
                        throwOnFailedPublish: !0
                    }), this.client.events.emit("session_ping", {
                        id: r,
                        topic: t
                    })
                } catch (e) {
                    await this.sendError({
                        id: r,
                        topic: t,
                        error: e
                    }), this.client.logger.error(e)
                }
            }, this.onSessionPingResponse = (t, e) => {
                let {
                    id: r
                } = e, i = tv("session_ping", r);
                if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                setTimeout(() => {
                    (0, nO.isJsonRpcResult)(e) ? this.events.emit(tv("session_ping", r), {}): (0, nO.isJsonRpcError)(e) && this.events.emit(tv("session_ping", r), {
                        error: e.error
                    })
                }, 500)
            }, this.onSessionDeleteRequest = async (t, e) => {
                let {
                    id: r
                } = e;
                try {
                    this.isValidDisconnect({
                        topic: t,
                        reason: e.params
                    }), Promise.all([new Promise(e => {
                        this.client.core.relayer.once(nY, async () => {
                            e(await this.deleteSession({
                                topic: t,
                                id: r
                            }))
                        })
                    }), this.sendResult({
                        id: r,
                        topic: t,
                        result: !0,
                        throwOnFailedPublish: !0
                    }), this.cleanupPendingSentRequestsForTopic({
                        topic: t,
                        error: i5("USER_DISCONNECTED")
                    })]).catch(t => this.client.logger.error(t))
                } catch (t) {
                    this.client.logger.error(t)
                }
            }, this.onSessionRequest = async t => {
                var e, r, i;
                let {
                    topic: n,
                    payload: s,
                    attestation: o,
                    encryptedId: a,
                    transportType: h
                } = t, {
                    id: c,
                    params: u
                } = s;
                try {
                    await this.isValidRequest(o1({
                        topic: n
                    }, u));
                    let t = this.client.session.get(n),
                        s = await this.getVerifyContext({
                            attestationId: o,
                            hash: iC(JSON.stringify((0, nN.formatJsonRpcRequest)("wc_sessionRequest", u, c))),
                            encryptedId: a,
                            metadata: t.peer.metadata,
                            transportType: h
                        }),
                        l = {
                            id: c,
                            topic: n,
                            params: u,
                            verifyContext: s
                        };
                    await this.setPendingSessionRequest(l), h === n2 && null != (e = t.peer.metadata.redirect) && e.universal && this.client.core.addLinkModeSupportedApp(null == (r = t.peer.metadata.redirect) ? void 0 : r.universal), null != (i = this.client.signConfig) && i.disableRequestQueue ? this.emitSessionRequest(l) : (this.addSessionRequestToSessionRequestQueue(l), this.processSessionRequestQueue())
                } catch (t) {
                    await this.sendError({
                        id: c,
                        topic: n,
                        error: t
                    }), this.client.logger.error(t)
                }
            }, this.onSessionRequestResponse = (t, e) => {
                let {
                    id: r
                } = e, i = tv("session_request", r);
                if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                (0, nO.isJsonRpcResult)(e) ? this.events.emit(tv("session_request", r), {
                    result: e.result
                }): (0, nO.isJsonRpcError)(e) && this.events.emit(tv("session_request", r), {
                    error: e.error
                })
            }, this.onSessionEventRequest = async (t, e) => {
                let {
                    id: r,
                    params: i
                } = e;
                try {
                    let e = `${t}_session_event_${i.event.name}`,
                        n = nl.get(e);
                    if (n && this.isRequestOutOfSync(n, r)) return void this.client.logger.info(`Discarding out of sync request - ${r}`);
                    this.isValidEmit(o1({
                        topic: t
                    }, i)), this.client.events.emit("session_event", {
                        id: r,
                        topic: t,
                        params: i
                    }), nl.set(e, r)
                } catch (e) {
                    await this.sendError({
                        id: r,
                        topic: t,
                        error: e
                    }), this.client.logger.error(e)
                }
            }, this.onSessionAuthenticateResponse = (t, e) => {
                let {
                    id: r
                } = e;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionAuthenticateResponse",
                    topic: t,
                    payload: e
                }), (0, nO.isJsonRpcResult)(e) ? this.events.emit(tv("session_request", r), {
                    result: e.result
                }) : (0, nO.isJsonRpcError)(e) && this.events.emit(tv("session_request", r), {
                    error: e.error
                })
            }, this.onSessionAuthenticateRequest = async t => {
                var e;
                let {
                    topic: r,
                    payload: i,
                    attestation: n,
                    encryptedId: s,
                    transportType: o
                } = t;
                try {
                    let {
                        requester: t,
                        authPayload: a,
                        expiryTimestamp: h
                    } = i.params, c = await this.getVerifyContext({
                        attestationId: n,
                        hash: iC(JSON.stringify(i)),
                        encryptedId: s,
                        metadata: t.metadata,
                        transportType: o
                    }), u = {
                        requester: t,
                        pairingTopic: r,
                        id: i.id,
                        authPayload: a,
                        verifyContext: c,
                        expiryTimestamp: h
                    };
                    await this.setAuthRequest(i.id, {
                        request: u,
                        pairingTopic: r,
                        transportType: o
                    }), o === n2 && null != (e = t.metadata.redirect) && e.universal && this.client.core.addLinkModeSupportedApp(t.metadata.redirect.universal), this.client.events.emit("session_authenticate", {
                        topic: r,
                        params: i.params,
                        id: i.id,
                        verifyContext: c
                    })
                } catch (s) {
                    this.client.logger.error(s);
                    let t = i.params.requester.publicKey,
                        e = await this.client.core.crypto.generateKeyPair(),
                        n = this.getAppLinkIfEnabled(i.params.requester.metadata, o);
                    await this.sendError({
                        id: i.id,
                        topic: r,
                        error: s,
                        encodeOpts: {
                            type: 1,
                            receiverPublicKey: t,
                            senderPublicKey: e
                        },
                        rpcOpts: oz.wc_sessionAuthenticate.autoReject,
                        appLink: n
                    })
                }
            }, this.addSessionRequestToSessionRequestQueue = t => {
                this.sessionRequestQueue.queue.push(t)
            }, this.cleanupAfterResponse = t => {
                this.deletePendingSessionRequest(t.response.id, {
                    message: "fulfilled",
                    code: 0
                }), setTimeout(() => {
                    this.sessionRequestQueue.state = oH, this.processSessionRequestQueue()
                }, (0, b.toMiliseconds)(this.requestQueueDelay))
            }, this.cleanupPendingSentRequestsForTopic = ({
                topic: t,
                error: e
            }) => {
                let r = this.client.core.history.pending;
                r.length > 0 && r.filter(e => e.topic === t && "wc_sessionRequest" === e.request.method).forEach(t => {
                    let r = tv("session_request", t.request.id);
                    if (0 === this.events.listenerCount(r)) throw Error(`emitting ${r} without any listeners`);
                    this.events.emit(tv("session_request", t.request.id), {
                        error: e
                    })
                })
            }, this.processSessionRequestQueue = () => {
                if (this.sessionRequestQueue.state === oK) return void this.client.logger.info("session request queue is already active.");
                let t = this.sessionRequestQueue.queue[0];
                if (!t) return void this.client.logger.info("session request queue is empty.");
                try {
                    this.sessionRequestQueue.state = oK, this.emitSessionRequest(t)
                } catch (t) {
                    this.client.logger.error(t)
                }
            }, this.emitSessionRequest = t => {
                this.client.events.emit("session_request", t)
            }, this.onPairingCreated = t => {
                if (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods), t.active) return;
                let e = this.client.proposal.getAll().find(e => e.pairingTopic === t.topic);
                e && this.onSessionProposeRequest({
                    topic: t.topic,
                    payload: (0, nN.formatJsonRpcRequest)("wc_sessionPropose", {
                        requiredNamespaces: e.requiredNamespaces,
                        optionalNamespaces: e.optionalNamespaces,
                        relays: e.relays,
                        proposer: e.proposer,
                        sessionProperties: e.sessionProperties
                    }, e.id)
                })
            }, this.isValidConnect = async t => {
                let e;
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                    throw Error(e)
                }
                let {
                    pairingTopic: r,
                    requiredNamespaces: i,
                    optionalNamespaces: n,
                    sessionProperties: s,
                    relays: o
                } = t;
                if (i8(r) || await this.isValidPairingTopic(r), e = !1, o ? o && i6(o) && o.length && o.forEach(t => {
                        e = ni(t)
                    }) : e = !0, !e) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", `connect() relays: ${o}`);
                    throw Error(t)
                }
                i8(i) || 0 === i3(i) || this.validateNamespaces(i, "requiredNamespaces"), i8(n) || 0 === i3(n) || this.validateNamespaces(n, "optionalNamespaces"), i8(s) || this.validateSessionProps(s, "sessionProperties")
            }, this.validateNamespaces = (t, e) => {
                let r = function(t, e, r) {
                    let i = null;
                    if (t && i3(t)) {
                        let n, s = ne(t, e);
                        s && (i = s);
                        let o = (n = null, Object.entries(t).forEach(([t, i]) => {
                            var s, o;
                            let a;
                            if (n) return;
                            let h = (s = G(t, i), o = `${e} ${r}`, a = null, i6(s) && s.length ? s.forEach(t => {
                                a || i7(t) || (a = i5("UNSUPPORTED_CHAINS", `${o}, chain ${t} should be a string and conform to "namespace:chainId" format`))
                            }) : i7(t) || (a = i5("UNSUPPORTED_CHAINS", `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), a);
                            h && (n = h)
                        }), n);
                        o && (i = o)
                    } else i = i2("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
                    return i
                }(t, "connect()", e);
                if (r) throw Error(r.message)
            }, this.isValidApprove = async t => {
                if (!nn(t)) throw Error(i2("MISSING_OR_INVALID", `approve() params: ${t}`).message);
                let {
                    id: e,
                    namespaces: r,
                    relayProtocol: i,
                    sessionProperties: n
                } = t;
                this.checkRecentlyDeleted(e), await this.isValidProposalId(e);
                let s = this.client.proposal.get(e),
                    o = nr(r, "approve()");
                if (o) throw Error(o.message);
                let a = no(s.requiredNamespaces, r, "approve()");
                if (a) throw Error(a.message);
                if (!i4(i, !0)) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                    throw Error(t)
                }
                i8(n) || this.validateSessionProps(n, "sessionProperties")
            }, this.isValidReject = async t => {
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `reject() params: ${t}`);
                    throw Error(e)
                }
                let {
                    id: e,
                    reason: r
                } = t;
                if (this.checkRecentlyDeleted(e), await this.isValidProposalId(e), !r || "object" != typeof r || !r.code || !i9(r.code, !1) || !r.message || !i4(r.message, !1)) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                    throw Error(t)
                }
            }, this.isValidSessionSettleRequest = t => {
                let e;
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                    throw Error(e)
                }
                let {
                    relay: r,
                    controller: i,
                    namespaces: n,
                    expiry: s
                } = t;
                if (!ni(r)) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                    throw Error(t)
                }
                let o = (e = null, i4(i ? .publicKey, !1) || (e = i2("MISSING_OR_INVALID", "onSessionSettleRequest() controller public key should be a string")), e);
                if (o) throw Error(o.message);
                let a = nr(n, "onSessionSettleRequest()");
                if (a) throw Error(a.message);
                if (ty(s)) {
                    let {
                        message: t
                    } = i2("EXPIRED", "onSessionSettleRequest()");
                    throw Error(t)
                }
            }, this.isValidUpdate = async t => {
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `update() params: ${t}`);
                    throw Error(e)
                }
                let {
                    topic: e,
                    namespaces: r
                } = t;
                this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
                let i = this.client.session.get(e),
                    n = nr(r, "update()");
                if (n) throw Error(n.message);
                let s = no(i.requiredNamespaces, r, "update()");
                if (s) throw Error(s.message)
            }, this.isValidExtend = async t => {
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `extend() params: ${t}`);
                    throw Error(e)
                }
                let {
                    topic: e
                } = t;
                this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e)
            }, this.isValidRequest = async t => {
                var e;
                let r;
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `request() params: ${t}`);
                    throw Error(e)
                }
                let {
                    topic: i,
                    request: n,
                    chainId: s,
                    expiry: o
                } = t;
                this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
                let {
                    namespaces: a
                } = this.client.session.get(i);
                if (!ns(a, s)) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", `request() chainId: ${s}`);
                    throw Error(t)
                }
                if (i8(n) || !i4(n.method, !1)) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
                    throw Error(t)
                }
                if (!(i4(e = n.method, !1) && (r = [], Object.values(a).forEach(t => {
                        iY(t.accounts).includes(s) && r.push(...t.methods)
                    }), r).includes(e))) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", `request() method: ${n.method}`);
                    throw Error(t)
                }
                if (o && (!i9(o, !1) || !(o <= oF.max) || !(o >= oF.min))) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${oF.min} and ${oF.max}`);
                    throw Error(t)
                }
            }, this.isValidRespond = async t => {
                var e;
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `respond() params: ${t}`);
                    throw Error(e)
                }
                let {
                    topic: r,
                    response: i
                } = t;
                try {
                    await this.isValidSessionTopic(r)
                } catch (r) {
                    throw null != (e = t ? .response) && e.id && this.cleanupAfterResponse(t), r
                }
                if (i8(i) || i8(i.result) && i8(i.error) || !i9(i.id, !1) || !i4(i.jsonrpc, !1)) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                    throw Error(t)
                }
            }, this.isValidPing = async t => {
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `ping() params: ${t}`);
                    throw Error(e)
                }
                let {
                    topic: e
                } = t;
                await this.isValidSessionOrPairingTopic(e)
            }, this.isValidEmit = async t => {
                var e;
                let r;
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `emit() params: ${t}`);
                    throw Error(e)
                }
                let {
                    topic: i,
                    event: n,
                    chainId: s
                } = t;
                await this.isValidSessionTopic(i);
                let {
                    namespaces: o
                } = this.client.session.get(i);
                if (!ns(o, s)) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", `emit() chainId: ${s}`);
                    throw Error(t)
                }
                if (i8(n) || !i4(n.name, !1) || !(i4(e = n.name, !1) && (r = [], Object.values(o).forEach(t => {
                        iY(t.accounts).includes(s) && r.push(...t.events)
                    }), r).includes(e))) {
                    let {
                        message: t
                    } = i2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
                    throw Error(t)
                }
            }, this.isValidDisconnect = async t => {
                if (!nn(t)) {
                    let {
                        message: e
                    } = i2("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                    throw Error(e)
                }
                let {
                    topic: e
                } = t;
                await this.isValidSessionOrPairingTopic(e)
            }, this.isValidAuthenticate = t => {
                let {
                    chains: e,
                    uri: r,
                    domain: i,
                    nonce: n
                } = t;
                if (!Array.isArray(e) || 0 === e.length) throw Error("chains is required and must be a non-empty array");
                if (!i4(r, !1)) throw Error("uri is required parameter");
                if (!i4(i, !1)) throw Error("domain is required parameter");
                if (!i4(n, !1)) throw Error("nonce is required parameter");
                if ([...new Set(e.map(t => $(t).namespace))].length > 1) throw Error("Multi-namespace requests are not supported. Please request single namespace only.");
                let {
                    namespace: s
                } = $(e[0]);
                if ("eip155" !== s) throw Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")
            }, this.getVerifyContext = async t => {
                let {
                    attestationId: e,
                    hash: r,
                    encryptedId: i,
                    metadata: n,
                    transportType: s
                } = t, o = {
                    verified: {
                        verifyUrl: n.verifyUrl || sa,
                        validation: "UNKNOWN",
                        origin: n.url || ""
                    }
                };
                try {
                    if (s === n2) {
                        let t = this.getAppLinkIfEnabled(n, s);
                        return o.verified.validation = t && new URL(t).origin === new URL(n.url).origin ? "VALID" : "INVALID", o
                    }
                    let t = await this.client.core.verify.resolve({
                        attestationId: e,
                        hash: r,
                        encryptedId: i,
                        verifyUrl: n.verifyUrl
                    });
                    t && (o.verified.origin = t.origin, o.verified.isScam = t.isScam, o.verified.validation = t.origin === new URL(n.url).origin ? "VALID" : "INVALID")
                } catch (t) {
                    this.client.logger.warn(t)
                }
                return this.client.logger.debug(`Verify context: ${JSON.stringify(o)}`), o
            }, this.validateSessionProps = (t, e) => {
                Object.values(t).forEach(t => {
                    if (!i4(t, !1)) {
                        let {
                            message: r
                        } = i2("MISSING_OR_INVALID", `${e} must be in Record<string, string> format. Received: ${JSON.stringify(t)}`);
                        throw Error(r)
                    }
                })
            }, this.getPendingAuthRequest = t => {
                let e = this.client.auth.requests.get(t);
                return "object" == typeof e ? e : void 0
            }, this.addToRecentlyDeleted = (t, e) => {
                if (this.recentlyDeletedMap.set(t, e), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
                    let t = 0,
                        e = this.recentlyDeletedLimit / 2;
                    for (let r of this.recentlyDeletedMap.keys()) {
                        if (t++ >= e) break;
                        this.recentlyDeletedMap.delete(r)
                    }
                }
            }, this.checkRecentlyDeleted = t => {
                let e = this.recentlyDeletedMap.get(t);
                if (e) {
                    let {
                        message: r
                    } = i2("MISSING_OR_INVALID", `Record was recently deleted - ${e}: ${t}`);
                    throw Error(r)
                }
            }, this.isLinkModeEnabled = (e, r) => {
                var i, n, s, o, a, h, c, u, l;
                return !!e && r === n2 && (null == (n = null == (i = this.client.metadata) ? void 0 : i.redirect) ? void 0 : n.linkMode) === !0 && (null == (o = null == (s = this.client.metadata) ? void 0 : s.redirect) ? void 0 : o.universal) !== void 0 && (null == (h = null == (a = this.client.metadata) ? void 0 : a.redirect) ? void 0 : h.universal) !== "" && (null == (c = e ? .redirect) ? void 0 : c.universal) !== void 0 && (null == (u = e ? .redirect) ? void 0 : u.universal) !== "" && (null == (l = e ? .redirect) ? void 0 : l.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(e.redirect.universal) && "u" > typeof(null == t.g ? void 0 : t.g.Linking)
            }, this.getAppLinkIfEnabled = (t, e) => {
                var r;
                return this.isLinkModeEnabled(t, e) ? null == (r = t ? .redirect) ? void 0 : r.universal : void 0
            }, this.handleLinkModeMessage = ({
                url: t
            }) => {
                if (!t || !t.includes("wc_ev") || !t.includes("topic")) return;
                let e = tA(t, "topic") || "",
                    r = decodeURIComponent(tA(t, "wc_ev") || ""),
                    i = this.client.session.keys.includes(e);
                i && this.client.session.update(e, {
                    transportType: n2
                }), this.client.core.dispatchEnvelope({
                    topic: e,
                    message: r,
                    sessionExists: i
                })
            }, this.registerLinkModeListeners = async () => {
                var e;
                if (tE() || tn() && null != (e = this.client.metadata.redirect) && e.linkMode) {
                    let e = null == t.g ? void 0 : t.g.Linking;
                    if ("u" > typeof e) {
                        e.addEventListener("url", this.handleLinkModeMessage, this.client.name);
                        let t = await e.getInitialURL();
                        t && setTimeout(() => {
                            this.handleLinkModeMessage({
                                url: t
                            })
                        }, 50)
                    }
                }
            }
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: t
                } = i2("NOT_INITIALIZED", this.name);
                throw Error(t)
            }
        }
        async confirmOnlineStateOrThrow() {
            await this.client.core.relayer.confirmOnlineStateOrThrow()
        }
        registerRelayerEvents() {
            this.client.core.relayer.on(nG, t => {
                !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(t) : this.onRelayMessage(t)
            })
        }
        async onRelayMessage(t) {
            let {
                topic: e,
                message: r,
                attestation: i,
                transportType: n
            } = t, {
                publicKey: s
            } = this.client.auth.authKeys.keys.includes(oG) ? this.client.auth.authKeys.get(oG) : {
                responseTopic: void 0,
                publicKey: void 0
            }, o = await this.client.core.crypto.decode(e, r, {
                receiverPublicKey: s,
                encoding: n === n2 ? iS : iI
            });
            try {
                (0, nO.isJsonRpcRequest)(o) ? (this.client.core.history.set(e, o), this.onRelayEventRequest({
                    topic: e,
                    payload: o,
                    attestation: i,
                    transportType: n,
                    encryptedId: iC(r)
                })) : (0, nO.isJsonRpcResponse)(o) ? (await this.client.core.history.resolve(o), await this.onRelayEventResponse({
                    topic: e,
                    payload: o,
                    transportType: n
                }), this.client.core.history.delete(e, o.id)) : this.onRelayEventUnknownPayload({
                    topic: e,
                    payload: o,
                    transportType: n
                })
            } catch (t) {
                this.client.logger.error(t)
            }
        }
        registerExpirerEvents() {
            this.client.core.expirer.on(so, async t => {
                let {
                    topic: e,
                    id: r
                } = tg(t.target);
                return r && this.client.pendingRequest.keys.includes(r) ? await this.deletePendingSessionRequest(r, i2("EXPIRED"), !0) : r && this.client.auth.requests.keys.includes(r) ? await this.deletePendingAuthRequest(r, i2("EXPIRED"), !0) : void(e ? this.client.session.keys.includes(e) && (await this.deleteSession({
                    topic: e,
                    expirerHasDeleted: !0
                }), this.client.events.emit("session_expire", {
                    topic: e
                })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                    id: r
                })))
            })
        }
        registerPairingEvents() {
            this.client.core.pairing.events.on(n7, t => this.onPairingCreated(t)), this.client.core.pairing.events.on(st, t => {
                this.addToRecentlyDeleted(t.topic, "pairing")
            })
        }
        isValidPairingTopic(t) {
            if (!i4(t, !1)) {
                let {
                    message: e
                } = i2("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                throw Error(e)
            }
            if (!this.client.core.pairing.pairings.keys.includes(t)) {
                let {
                    message: e
                } = i2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                throw Error(e)
            }
            if (ty(this.client.core.pairing.pairings.get(t).expiry)) {
                let {
                    message: e
                } = i2("EXPIRED", `pairing topic: ${t}`);
                throw Error(e)
            }
        }
        async isValidSessionTopic(t) {
            if (!i4(t, !1)) {
                let {
                    message: e
                } = i2("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
                throw Error(e)
            }
            if (this.checkRecentlyDeleted(t), !this.client.session.keys.includes(t)) {
                let {
                    message: e
                } = i2("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
                throw Error(e)
            }
            if (ty(this.client.session.get(t).expiry)) {
                await this.deleteSession({
                    topic: t
                });
                let {
                    message: e
                } = i2("EXPIRED", `session topic: ${t}`);
                throw Error(e)
            }
            if (!this.client.core.crypto.keychain.has(t)) {
                let {
                    message: e
                } = i2("MISSING_OR_INVALID", `session topic does not exist in keychain: ${t}`);
                throw await this.deleteSession({
                    topic: t
                }), Error(e)
            }
        }
        async isValidSessionOrPairingTopic(t) {
            if (this.checkRecentlyDeleted(t), this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
            else if (this.client.core.pairing.pairings.keys.includes(t)) this.isValidPairingTopic(t);
            else if (i4(t, !1)) {
                let {
                    message: e
                } = i2("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
                throw Error(e)
            } else {
                let {
                    message: e
                } = i2("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
                throw Error(e)
            }
        }
        async isValidProposalId(t) {
            if ("number" != typeof t) {
                let {
                    message: e
                } = i2("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
                throw Error(e)
            }
            if (!this.client.proposal.keys.includes(t)) {
                let {
                    message: e
                } = i2("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
                throw Error(e)
            }
            if (ty(this.client.proposal.get(t).expiryTimestamp)) {
                await this.deleteProposal(t);
                let {
                    message: e
                } = i2("EXPIRED", `proposal id: ${t}`);
                throw Error(e)
            }
        }
    }
    class o5 extends of {
        constructor(t, e) {
            super(t, e, "proposal", oL), this.core = t, this.logger = e
        }
    }
    class o6 extends of {
        constructor(t, e) {
            super(t, e, "session", oL), this.core = t, this.logger = e
        }
    }
    class o3 extends of {
        constructor(t, e) {
            super(t, e, "request", oL, t => t.id), this.core = t, this.logger = e
        }
    }
    class o8 extends of {
        constructor(t, e) {
            super(t, e, "authKeys", oV, () => oG), this.core = t, this.logger = e
        }
    }
    class o4 extends of {
        constructor(t, e) {
            super(t, e, "pairingTopics", oV), this.core = t, this.logger = e
        }
    }
    class o9 extends of {
        constructor(t, e) {
            super(t, e, "requests", oV, t => t.id), this.core = t, this.logger = e
        }
    }
    class o7 {
        constructor(t, e) {
            this.core = t, this.logger = e, this.authKeys = new o8(this.core, this.logger), this.pairingTopics = new o4(this.core, this.logger), this.requests = new o9(this.core, this.logger)
        }
        async init() {
            await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init()
        }
    }
    class at extends nP {
        constructor(t) {
            super(t), this.protocol = "wc", this.version = 2, this.name = oq, this.events = new g.EventEmitter, this.on = (t, e) => this.events.on(t, e), this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), this.removeListener = (t, e) => this.events.removeListener(t, e), this.removeAllListeners = t => this.events.removeAllListeners(t), this.connect = async t => {
                try {
                    return await this.engine.connect(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.pair = async t => {
                try {
                    return await this.engine.pair(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.approve = async t => {
                try {
                    return await this.engine.approve(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.reject = async t => {
                try {
                    return await this.engine.reject(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.update = async t => {
                try {
                    return await this.engine.update(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.extend = async t => {
                try {
                    return await this.engine.extend(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.request = async t => {
                try {
                    return await this.engine.request(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.respond = async t => {
                try {
                    return await this.engine.respond(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.ping = async t => {
                try {
                    return await this.engine.ping(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.emit = async t => {
                try {
                    return await this.engine.emit(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.disconnect = async t => {
                try {
                    return await this.engine.disconnect(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.find = t => {
                try {
                    return this.engine.find(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.getPendingSessionRequests = () => {
                try {
                    return this.engine.getPendingSessionRequests()
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.authenticate = async (t, e) => {
                try {
                    return await this.engine.authenticate(t, e)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.formatAuthMessage = t => {
                try {
                    return this.engine.formatAuthMessage(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.approveSessionAuthenticate = async t => {
                try {
                    return await this.engine.approveSessionAuthenticate(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.rejectSessionAuthenticate = async t => {
                try {
                    return await this.engine.rejectSessionAuthenticate(t)
                } catch (t) {
                    throw this.logger.error(t.message), t
                }
            }, this.name = t ? .name || oq, this.metadata = t ? .metadata || ta(), this.signConfig = t ? .signConfig;
            const e = "u" > typeof t ? .logger && "string" != typeof t ? .logger ? t.logger : (0, ng.pino)((0, np.getDefaultLoggerOptions)({
                level: t ? .logger || "error"
            }));
            this.core = t ? .core || new oD(t), this.logger = (0, np.generateChildLogger)(e, this.name), this.session = new o6(this.core, this.logger), this.proposal = new o5(this.core, this.logger), this.pendingRequest = new o3(this.core, this.logger), this.engine = new o2(this), this.auth = new o7(this.core, this.logger)
        }
        static async init(t) {
            let e = new at(t);
            return await e.initialize(), e
        }
        get context() {
            return (0, np.getLoggerContext)(this.logger)
        }
        get pairing() {
            return this.core.pairing.pairings
        }
        async initialize() {
            this.logger.trace("Initialized");
            try {
                await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), this.engine.processRelayMessageCache()
            } catch (t) {
                throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t
            }
        }
    }
    var ae = t.i(383332);
    let ar = "error",
        ai = "wc@2:universal_provider:",
        an = "https://rpc.walletconnect.org/v1/",
        as = "generic",
        ao = `${an}bundler`,
        aa = "default_chain_changed";
    var ah = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : t.g,
        ac = {
            exports: {}
        };
    c = ac.exports, (function() {
        var t, e = "Expected a function",
            r = "__lodash_hash_undefined__",
            i = "__lodash_placeholder__",
            n = 1 / 0,
            s = 0 / 0,
            o = [
                ["ary", 128],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", 16],
                ["flip", 512],
                ["partial", 32],
                ["partialRight", 64],
                ["rearg", 256]
            ],
            a = "[object Arguments]",
            h = "[object Array]",
            u = "[object Boolean]",
            l = "[object Date]",
            f = "[object Error]",
            d = "[object Function]",
            p = "[object GeneratorFunction]",
            g = "[object Map]",
            m = "[object Number]",
            y = "[object Object]",
            v = "[object Promise]",
            b = "[object RegExp]",
            w = "[object Set]",
            _ = "[object String]",
            A = "[object Symbol]",
            x = "[object WeakMap]",
            E = "[object ArrayBuffer]",
            I = "[object DataView]",
            S = "[object Float32Array]",
            M = "[object Float64Array]",
            P = "[object Int8Array]",
            R = "[object Int16Array]",
            C = "[object Int32Array]",
            N = "[object Uint8Array]",
            O = "[object Uint8ClampedArray]",
            T = "[object Uint16Array]",
            k = "[object Uint32Array]",
            D = /\b__p \+= '';/g,
            q = /\b(__p \+=) '' \+/g,
            L = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            U = /&(?:amp|lt|gt|quot|#39);/g,
            B = /[&<>"']/g,
            j = RegExp(U.source),
            z = RegExp(B.source),
            F = /<%-([\s\S]+?)%>/g,
            H = /<%([\s\S]+?)%>/g,
            K = /<%=([\s\S]+?)%>/g,
            $ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            V = /^\w*$/,
            G = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            J = /[\\^$.*+?()[\]{}|]/g,
            Q = RegExp(J.source),
            Y = /^\s+/,
            W = /\s/,
            X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            Z = /\{\n\/\* \[wrapped with (.+)\] \*/,
            tt = /,? & /,
            te = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            tr = /[()=,{}\[\]\/\s]/,
            ti = /\\(\\)?/g,
            tn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            ts = /\w*$/,
            to = /^[-+]0x[0-9a-f]+$/i,
            ta = /^0b[01]+$/i,
            th = /^\[object .+?Constructor\]$/,
            tc = /^0o[0-7]+$/i,
            tu = /^(?:0|[1-9]\d*)$/,
            tl = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            tf = /($^)/,
            td = /['\n\r\u2028\u2029\\]/g,
            tp = "\\ud800-\\udfff",
            tg = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            tm = "\\u2700-\\u27bf",
            ty = "a-z\\xdf-\\xf6\\xf8-\\xff",
            tv = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            tb = "\\ufe0e\\ufe0f",
            tw = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            t_ = "['’]",
            tA = "[" + tw + "]",
            tx = "[" + tg + "]",
            tE = "[" + ty + "]",
            tI = "[^" + tp + tw + "\\d+" + tm + ty + tv + "]",
            tS = "\\ud83c[\\udffb-\\udfff]",
            tM = "[^" + tp + "]",
            tP = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            tR = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            tC = "[" + tv + "]",
            tN = "\\u200d",
            tO = "(?:" + tE + "|" + tI + ")",
            tT = "(?:" + tC + "|" + tI + ")",
            tk = "(?:" + t_ + "(?:d|ll|m|re|s|t|ve))?",
            tD = "(?:" + t_ + "(?:D|LL|M|RE|S|T|VE))?",
            tq = "(?:" + tx + "|" + tS + ")?",
            tL = "[" + tb + "]?",
            tU = "(?:" + tN + "(?:" + [tM, tP, tR].join("|") + ")" + tL + tq + ")*",
            tB = tL + tq + tU,
            tj = "(?:" + ["[" + tm + "]", tP, tR].join("|") + ")" + tB,
            tz = "(?:" + [tM + tx + "?", tx, tP, tR, "[" + tp + "]"].join("|") + ")",
            tF = RegExp(t_, "g"),
            tH = RegExp(tx, "g"),
            tK = RegExp(tS + "(?=" + tS + ")|" + tz + tB, "g"),
            t$ = RegExp([tC + "?" + tE + "+" + tk + "(?=" + [tA, tC, "$"].join("|") + ")", tT + "+" + tD + "(?=" + [tA, tC + tO, "$"].join("|") + ")", tC + "?" + tO + "+" + tk, tC + "+" + tD, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+", tj].join("|"), "g"),
            tV = RegExp("[" + tN + tp + tg + tb + "]"),
            tG = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            tJ = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            tQ = -1,
            tY = {};
        tY[S] = tY[M] = tY[P] = tY[R] = tY[C] = tY[N] = tY[O] = tY[T] = tY[k] = !0, tY[a] = tY[h] = tY[E] = tY[u] = tY[I] = tY[l] = tY[f] = tY[d] = tY[g] = tY[m] = tY[y] = tY[b] = tY[w] = tY[_] = tY[x] = !1;
        var tW = {};
        tW[a] = tW[h] = tW[E] = tW[I] = tW[u] = tW[l] = tW[S] = tW[M] = tW[P] = tW[R] = tW[C] = tW[g] = tW[m] = tW[y] = tW[b] = tW[w] = tW[_] = tW[A] = tW[N] = tW[O] = tW[T] = tW[k] = !0, tW[f] = tW[d] = tW[x] = !1;
        var tX = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            tZ = parseFloat,
            t0 = parseInt,
            t1 = "object" == typeof ah && ah && ah.Object === Object && ah,
            t2 = "object" == typeof self && self && self.Object === Object && self,
            t5 = t1 || t2 || Function("return this")(),
            t6 = c && !c.nodeType && c,
            t3 = t6 && ac && !ac.nodeType && ac,
            t8 = t3 && t3.exports === t6,
            t4 = t8 && t1.process,
            t9 = function() {
                try {
                    return t3 && t3.require && t3.require("util").types || t4 && t4.binding && t4.binding("util")
                } catch {}
            }(),
            t7 = t9 && t9.isArrayBuffer,
            et = t9 && t9.isDate,
            ee = t9 && t9.isMap,
            er = t9 && t9.isRegExp,
            ei = t9 && t9.isSet,
            en = t9 && t9.isTypedArray;

        function es(t, e, r) {
            switch (r.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, r[0]);
                case 2:
                    return t.call(e, r[0], r[1]);
                case 3:
                    return t.call(e, r[0], r[1], r[2])
            }
            return t.apply(e, r)
        }

        function eo(t, e, r, i) {
            for (var n = -1, s = null == t ? 0 : t.length; ++n < s;) {
                var o = t[n];
                e(i, o, r(o), t)
            }
            return i
        }

        function ea(t, e) {
            for (var r = -1, i = null == t ? 0 : t.length; ++r < i && !1 !== e(t[r], r, t););
            return t
        }

        function eh(t, e) {
            for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                if (!e(t[r], r, t)) return !1;
            return !0
        }

        function ec(t, e) {
            for (var r = -1, i = null == t ? 0 : t.length, n = 0, s = []; ++r < i;) {
                var o = t[r];
                e(o, r, t) && (s[n++] = o)
            }
            return s
        }

        function eu(t, e) {
            return !!(null == t ? 0 : t.length) && ew(t, e, 0) > -1
        }

        function el(t, e, r) {
            for (var i = -1, n = null == t ? 0 : t.length; ++i < n;)
                if (r(e, t[i])) return !0;
            return !1
        }

        function ef(t, e) {
            for (var r = -1, i = null == t ? 0 : t.length, n = Array(i); ++r < i;) n[r] = e(t[r], r, t);
            return n
        }

        function ed(t, e) {
            for (var r = -1, i = e.length, n = t.length; ++r < i;) t[n + r] = e[r];
            return t
        }

        function ep(t, e, r, i) {
            var n = -1,
                s = null == t ? 0 : t.length;
            for (i && s && (r = t[++n]); ++n < s;) r = e(r, t[n], n, t);
            return r
        }

        function eg(t, e, r, i) {
            var n = null == t ? 0 : t.length;
            for (i && n && (r = t[--n]); n--;) r = e(r, t[n], n, t);
            return r
        }

        function em(t, e) {
            for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                if (e(t[r], r, t)) return !0;
            return !1
        }
        var ey = eE("length");

        function ev(t, e, r) {
            var i;
            return r(t, function(t, r, n) {
                if (e(t, r, n)) return i = r, !1
            }), i
        }

        function eb(t, e, r, i) {
            for (var n = t.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                if (e(t[s], s, t)) return s;
            return -1
        }

        function ew(t, e, r) {
            return e == e ? function(t, e, r) {
                for (var i = r - 1, n = t.length; ++i < n;)
                    if (t[i] === e) return i;
                return -1
            }(t, e, r) : eb(t, eA, r)
        }

        function e_(t, e, r, i) {
            for (var n = r - 1, s = t.length; ++n < s;)
                if (i(t[n], e)) return n;
            return -1
        }

        function eA(t) {
            return t != t
        }

        function ex(t, e) {
            var r = null == t ? 0 : t.length;
            return r ? eM(t, e) / r : s
        }

        function eE(e) {
            return function(r) {
                return null == r ? t : r[e]
            }
        }

        function eI(e) {
            return function(r) {
                return null == e ? t : e[r]
            }
        }

        function eS(t, e, r, i, n) {
            return n(t, function(t, n, s) {
                r = i ? (i = !1, t) : e(r, t, n, s)
            }), r
        }

        function eM(e, r) {
            for (var i, n = -1, s = e.length; ++n < s;) {
                var o = r(e[n]);
                o !== t && (i = i === t ? o : i + o)
            }
            return i
        }

        function eP(t, e) {
            for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
            return i
        }

        function eR(t) {
            return t && t.slice(0, e$(t) + 1).replace(Y, "")
        }

        function eC(t) {
            return function(e) {
                return t(e)
            }
        }

        function eN(t, e) {
            return ef(e, function(e) {
                return t[e]
            })
        }

        function eO(t, e) {
            return t.has(e)
        }

        function eT(t, e) {
            for (var r = -1, i = t.length; ++r < i && ew(e, t[r], 0) > -1;);
            return r
        }

        function ek(t, e) {
            for (var r = t.length; r-- && ew(e, t[r], 0) > -1;);
            return r
        }
        var eD = eI({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s"
            }),
            eq = eI({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            });

        function eL(t) {
            return "\\" + tX[t]
        }

        function eU(t) {
            return tV.test(t)
        }

        function eB(t) {
            var e = -1,
                r = Array(t.size);
            return t.forEach(function(t, i) {
                r[++e] = [i, t]
            }), r
        }

        function ej(t, e) {
            return function(r) {
                return t(e(r))
            }
        }

        function ez(t, e) {
            for (var r = -1, n = t.length, s = 0, o = []; ++r < n;) {
                var a = t[r];
                (a === e || a === i) && (t[r] = i, o[s++] = r)
            }
            return o
        }

        function eF(t) {
            var e = -1,
                r = Array(t.size);
            return t.forEach(function(t) {
                r[++e] = t
            }), r
        }

        function eH(t) {
            return eU(t) ? function(t) {
                for (var e = tK.lastIndex = 0; tK.test(t);) ++e;
                return e
            }(t) : ey(t)
        }

        function eK(t) {
            return eU(t) ? t.match(tK) || [] : t.split("")
        }

        function e$(t) {
            for (var e = t.length; e-- && W.test(t.charAt(e)););
            return e
        }
        var eV = eI({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            }),
            eG = function c(W) {
                var tp, tg, tm, ty, tv = (W = null == W ? t5 : eG.defaults(t5.Object(), W, eG.pick(t5, tJ))).Array,
                    tb = W.Date,
                    tw = W.Error,
                    t_ = W.Function,
                    tA = W.Math,
                    tx = W.Object,
                    tE = W.RegExp,
                    tI = W.String,
                    tS = W.TypeError,
                    tM = tv.prototype,
                    tP = t_.prototype,
                    tR = tx.prototype,
                    tC = W["__core-js_shared__"],
                    tN = tP.toString,
                    tO = tR.hasOwnProperty,
                    tT = 0,
                    tk = (tp = /[^.]+$/.exec(tC && tC.keys && tC.keys.IE_PROTO || "")) ? "Symbol(src)_1." + tp : "",
                    tD = tR.toString,
                    tq = tN.call(tx),
                    tL = t5._,
                    tU = tE("^" + tN.call(tO).replace(J, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    tB = t8 ? W.Buffer : t,
                    tj = W.Symbol,
                    tz = W.Uint8Array,
                    tK = tB ? tB.allocUnsafe : t,
                    tV = ej(tx.getPrototypeOf, tx),
                    tX = tx.create,
                    t1 = tR.propertyIsEnumerable,
                    t2 = tM.splice,
                    t6 = tj ? tj.isConcatSpreadable : t,
                    t3 = tj ? tj.iterator : t,
                    t4 = tj ? tj.toStringTag : t,
                    t9 = function() {
                        try {
                            var t = np(tx, "defineProperty");
                            return t({}, "", {}), t
                        } catch {}
                    }(),
                    ey = W.clearTimeout !== t5.clearTimeout && W.clearTimeout,
                    eI = tb && tb.now !== t5.Date.now && tb.now,
                    eJ = W.setTimeout !== t5.setTimeout && W.setTimeout,
                    eQ = tA.ceil,
                    eY = tA.floor,
                    eW = tx.getOwnPropertySymbols,
                    eX = tB ? tB.isBuffer : t,
                    eZ = W.isFinite,
                    e0 = tM.join,
                    e1 = ej(tx.keys, tx),
                    e2 = tA.max,
                    e5 = tA.min,
                    e6 = tb.now,
                    e3 = W.parseInt,
                    e8 = tA.random,
                    e4 = tM.reverse,
                    e9 = np(W, "DataView"),
                    e7 = np(W, "Map"),
                    rt = np(W, "Promise"),
                    re = np(W, "Set"),
                    rr = np(W, "WeakMap"),
                    ri = np(tx, "create"),
                    rn = rr && new rr,
                    rs = {},
                    ro = nB(e9),
                    ra = nB(e7),
                    rh = nB(rt),
                    rc = nB(re),
                    ru = nB(rr),
                    rl = tj ? tj.prototype : t,
                    rf = rl ? rl.valueOf : t,
                    rd = rl ? rl.toString : t;

                function rp(t) {
                    if (sJ(t) && !sL(t) && !(t instanceof rv)) {
                        if (t instanceof ry) return t;
                        if (tO.call(t, "__wrapped__")) return nj(t)
                    }
                    return new ry(t)
                }
                var rg = function() {
                    function e() {}
                    return function(r) {
                        if (!sG(r)) return {};
                        if (tX) return tX(r);
                        e.prototype = r;
                        var i = new e;
                        return e.prototype = t, i
                    }
                }();

                function rm() {}

                function ry(e, r) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = t
                }

                function rv(t) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 0xffffffff, this.__views__ = []
                }

                function rb(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.clear(); ++e < r;) {
                        var i = t[e];
                        this.set(i[0], i[1])
                    }
                }

                function rw(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.clear(); ++e < r;) {
                        var i = t[e];
                        this.set(i[0], i[1])
                    }
                }

                function r_(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.clear(); ++e < r;) {
                        var i = t[e];
                        this.set(i[0], i[1])
                    }
                }

                function rA(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.__data__ = new r_; ++e < r;) this.add(t[e])
                }

                function rx(t) {
                    var e = this.__data__ = new rw(t);
                    this.size = e.size
                }

                function rE(t, e) {
                    var r = sL(t),
                        i = !r && sq(t),
                        n = !r && !i && sz(t),
                        s = !r && !i && !n && s2(t),
                        o = r || i || n || s,
                        a = o ? eP(t.length, tI) : [],
                        h = a.length;
                    for (var c in t)(e || tO.call(t, c)) && !(o && ("length" == c || n && ("offset" == c || "parent" == c) || s && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || n_(c, h))) && a.push(c);
                    return a
                }

                function rI(e) {
                    var r = e.length;
                    return r ? e[iu(0, r - 1)] : t
                }
                rp.templateSettings = {
                    escape: F,
                    evaluate: H,
                    interpolate: K,
                    variable: "",
                    imports: {
                        _: rp
                    }
                }, rp.prototype = rm.prototype, rp.prototype.constructor = rp, ry.prototype = rg(rm.prototype), ry.prototype.constructor = ry, rv.prototype = rg(rm.prototype), rv.prototype.constructor = rv, rb.prototype.clear = function() {
                    this.__data__ = ri ? ri(null) : {}, this.size = 0
                }, rb.prototype.delete = function(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= !!e, e
                }, rb.prototype.get = function(e) {
                    var i = this.__data__;
                    if (ri) {
                        var n = i[e];
                        return n === r ? t : n
                    }
                    return tO.call(i, e) ? i[e] : t
                }, rb.prototype.has = function(e) {
                    var r = this.__data__;
                    return ri ? r[e] !== t : tO.call(r, e)
                }, rb.prototype.set = function(e, i) {
                    var n = this.__data__;
                    return this.size += +!this.has(e), n[e] = ri && i === t ? r : i, this
                }, rw.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, rw.prototype.delete = function(t) {
                    var e = this.__data__,
                        r = rP(e, t);
                    return !(r < 0) && (r == e.length - 1 ? e.pop() : t2.call(e, r, 1), --this.size, !0)
                }, rw.prototype.get = function(e) {
                    var r = this.__data__,
                        i = rP(r, e);
                    return i < 0 ? t : r[i][1]
                }, rw.prototype.has = function(t) {
                    return rP(this.__data__, t) > -1
                }, rw.prototype.set = function(t, e) {
                    var r = this.__data__,
                        i = rP(r, t);
                    return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
                }, r_.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new rb,
                        map: new(e7 || rw),
                        string: new rb
                    }
                }, r_.prototype.delete = function(t) {
                    var e = nf(this, t).delete(t);
                    return this.size -= !!e, e
                }, r_.prototype.get = function(t) {
                    return nf(this, t).get(t)
                }, r_.prototype.has = function(t) {
                    return nf(this, t).has(t)
                }, r_.prototype.set = function(t, e) {
                    var r = nf(this, t),
                        i = r.size;
                    return r.set(t, e), this.size += +(r.size != i), this
                }, rA.prototype.add = rA.prototype.push = function(t) {
                    return this.__data__.set(t, r), this
                }, rA.prototype.has = function(t) {
                    return this.__data__.has(t)
                };

                function rS(e, r, i) {
                    (i === t || sT(e[r], i)) && (i !== t || r in e) || rN(e, r, i)
                }

                function rM(e, r, i) {
                    var n = e[r];
                    tO.call(e, r) && sT(n, i) && (i !== t || r in e) || rN(e, r, i)
                }

                function rP(t, e) {
                    for (var r = t.length; r--;)
                        if (sT(t[r][0], e)) return r;
                    return -1
                }

                function rR(t, e, r, i) {
                    return rU(t, function(t, n, s) {
                        e(i, t, r(t), s)
                    }), i
                }

                function rC(t, e) {
                    return t && iH(e, op(e), t)
                }

                function rN(t, e, r) {
                    "__proto__" == e && t9 ? t9(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    }) : t[e] = r
                }

                function rO(e, r) {
                    for (var i = -1, n = r.length, s = tv(n), o = null == e; ++i < n;) s[i] = o ? t : oc(e, r[i]);
                    return s
                }

                function rT(e, r, i) {
                    return e == e && (i !== t && (e = e <= i ? e : i), r !== t && (e = e >= r ? e : r)), e
                }

                function rk(e, r, i, n, s, o) {
                    var h, c = 1 & r,
                        f = 2 & r,
                        v = 4 & r;
                    if (i && (h = s ? i(e, n, s, o) : i(e)), h !== t) return h;
                    if (!sG(e)) return e;
                    var x = sL(e);
                    if (x) {
                        if (q = (D = e).length, L = new D.constructor(q), q && "string" == typeof D[0] && tO.call(D, "index") && (L.index = D.index, L.input = D.input), h = L, !c) return iF(e, h)
                    } else {
                        var D, q, L, U, B, j, z, F, H = ny(e),
                            K = H == d || H == p;
                        if (sz(e)) return iq(e, c);
                        if (H == y || H == a || K && !s) {
                            if (h = f || K ? {} : nb(e), !c) {
                                return f ? (U = e, B = (F = h) && iH(e, og(e), F), iH(U, nm(U), B)) : (j = e, z = rC(h, e), iH(j, ng(j), z))
                            }
                        } else {
                            if (!tW[H]) return s ? e : {};
                            h = function(t, e, r) {
                                var i, n, s = t.constructor;
                                switch (e) {
                                    case E:
                                        return iL(t);
                                    case u:
                                    case l:
                                        return new s(+t);
                                    case I:
                                        return i = r ? iL(t.buffer) : t.buffer, new t.constructor(i, t.byteOffset, t.byteLength);
                                    case S:
                                    case M:
                                    case P:
                                    case R:
                                    case C:
                                    case N:
                                    case O:
                                    case T:
                                    case k:
                                        return iU(t, r);
                                    case g:
                                        return new s;
                                    case m:
                                    case _:
                                        return new s(t);
                                    case b:
                                        return (n = new t.constructor(t.source, ts.exec(t))).lastIndex = t.lastIndex, n;
                                    case w:
                                        return new s;
                                    case A:
                                        return rf ? tx(rf.call(t)) : {}
                                }
                            }(e, H, c)
                        }
                    }
                    o || (o = new rx);
                    var $ = o.get(e);
                    if ($) return $;
                    o.set(e, h), sZ(e) ? e.forEach(function(t) {
                        h.add(rk(t, r, i, t, e, o))
                    }) : sQ(e) && e.forEach(function(t, n) {
                        h.set(n, rk(t, r, i, n, e, o))
                    });
                    var V = v ? f ? na : no : f ? og : op,
                        G = x ? t : V(e);
                    return ea(G || e, function(t, n) {
                        G && (t = e[n = t]), rM(h, n, rk(t, r, i, n, e, o))
                    }), h
                }

                function rD(e, r, i) {
                    var n = i.length;
                    if (null == e) return !n;
                    for (e = tx(e); n--;) {
                        var s = i[n],
                            o = r[s],
                            a = e[s];
                        if (a === t && !(s in e) || !o(a)) return !1
                    }
                    return !0
                }

                function rq(r, i, n) {
                    if ("function" != typeof r) throw new tS(e);
                    return nO(function() {
                        r.apply(t, n)
                    }, i)
                }

                function rL(t, e, r, i) {
                    var n = -1,
                        s = eu,
                        o = !0,
                        a = t.length,
                        h = [],
                        c = e.length;
                    if (!a) return h;
                    r && (e = ef(e, eC(r))), i ? (s = el, o = !1) : e.length >= 200 && (s = eO, o = !1, e = new rA(e));
                    t: for (; ++n < a;) {
                        var u = t[n],
                            l = null == r ? u : r(u);
                        if (u = i || 0 !== u ? u : 0, o && l == l) {
                            for (var f = c; f--;)
                                if (e[f] === l) continue t;
                            h.push(u)
                        } else s(e, l, i) || h.push(u)
                    }
                    return h
                }
                rx.prototype.clear = function() {
                    this.__data__ = new rw, this.size = 0
                }, rx.prototype.delete = function(t) {
                    var e = this.__data__,
                        r = e.delete(t);
                    return this.size = e.size, r
                }, rx.prototype.get = function(t) {
                    return this.__data__.get(t)
                }, rx.prototype.has = function(t) {
                    return this.__data__.has(t)
                }, rx.prototype.set = function(t, e) {
                    var r = this.__data__;
                    if (r instanceof rw) {
                        var i = r.__data__;
                        if (!e7 || i.length < 199) return i.push([t, e]), this.size = ++r.size, this;
                        r = this.__data__ = new r_(i)
                    }
                    return r.set(t, e), this.size = r.size, this
                };
                var rU = iV(rV),
                    rB = iV(rG, !0);

                function rj(t, e) {
                    var r = !0;
                    return rU(t, function(t, i, n) {
                        return r = !!e(t, i, n)
                    }), r
                }

                function rz(e, r, i) {
                    for (var n = -1, s = e.length; ++n < s;) {
                        var o = e[n],
                            a = r(o);
                        if (null != a && (h === t ? a == a && !s1(a) : i(a, h))) var h = a,
                            c = o
                    }
                    return c
                }

                function rF(t, e) {
                    var r = [];
                    return rU(t, function(t, i, n) {
                        e(t, i, n) && r.push(t)
                    }), r
                }

                function rH(t, e, r, i, n) {
                    var s = -1,
                        o = t.length;
                    for (r || (r = nw), n || (n = []); ++s < o;) {
                        var a = t[s];
                        e > 0 && r(a) ? e > 1 ? rH(a, e - 1, r, i, n) : ed(n, a) : i || (n[n.length] = a)
                    }
                    return n
                }
                var rK = iG(),
                    r$ = iG(!0);

                function rV(t, e) {
                    return t && rK(t, e, op)
                }

                function rG(t, e) {
                    return t && r$(t, e, op)
                }

                function rJ(t, e) {
                    return ec(e, function(e) {
                        return sK(t[e])
                    })
                }

                function rQ(e, r) {
                    r = iT(r, e);
                    for (var i = 0, n = r.length; null != e && i < n;) e = e[nU(r[i++])];
                    return i && i == n ? e : t
                }

                function rY(t, e, r) {
                    var i = e(t);
                    return sL(t) ? i : ed(i, r(t))
                }

                function rW(e) {
                    var r;
                    return null == e ? e === t ? "[object Undefined]" : "[object Null]" : t4 && t4 in tx(e) ? function(e) {
                        var r = tO.call(e, t4),
                            i = e[t4];
                        try {
                            e[t4] = t;
                            var n = !0
                        } catch {}
                        var s = tD.call(e);
                        return n && (r ? e[t4] = i : delete e[t4]), s
                    }(e) : (r = e, tD.call(r))
                }

                function rX(t, e) {
                    return t > e
                }

                function rZ(t, e) {
                    return null != t && tO.call(t, e)
                }

                function r0(t, e) {
                    return null != t && e in tx(t)
                }

                function r1(e, r, i) {
                    for (var n = i ? el : eu, s = e[0].length, o = e.length, a = o, h = tv(o), c = 1 / 0, u = []; a--;) {
                        var l = e[a];
                        a && r && (l = ef(l, eC(r))), c = e5(l.length, c), h[a] = !i && (r || s >= 120 && l.length >= 120) ? new rA(a && l) : t
                    }
                    l = e[0];
                    var f = -1,
                        d = h[0];
                    t: for (; ++f < s && u.length < c;) {
                        var p = l[f],
                            g = r ? r(p) : p;
                        if (p = i || 0 !== p ? p : 0, !(d ? eO(d, g) : n(u, g, i))) {
                            for (a = o; --a;) {
                                var m = h[a];
                                if (!(m ? eO(m, g) : n(e[a], g, i))) continue t
                            }
                            d && d.push(g), u.push(p)
                        }
                    }
                    return u
                }

                function r2(e, r, i) {
                    r = iT(r, e);
                    var n = null == (e = nR(e, r)) ? e : e[nU(nW(r))];
                    return null == n ? t : es(n, e, i)
                }

                function r5(t) {
                    return sJ(t) && rW(t) == a
                }

                function r6(e, r, i, n, s) {
                    return e === r || (null != e && null != r && (sJ(e) || sJ(r)) ? function(e, r, i, n, s, o) {
                        var c = sL(e),
                            d = sL(r),
                            p = c ? h : ny(e),
                            v = d ? h : ny(r);
                        p = p == a ? y : p, v = v == a ? y : v;
                        var x = p == y,
                            S = v == y,
                            M = p == v;
                        if (M && sz(e)) {
                            if (!sz(r)) return !1;
                            c = !0, x = !1
                        }
                        if (M && !x) return o || (o = new rx), c || s2(e) ? nn(e, r, i, n, s, o) : function(t, e, r, i, n, s, o) {
                            switch (r) {
                                case I:
                                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
                                    t = t.buffer, e = e.buffer;
                                case E:
                                    return !(t.byteLength != e.byteLength || !s(new tz(t), new tz(e)));
                                case u:
                                case l:
                                case m:
                                    return sT(+t, +e);
                                case f:
                                    return t.name == e.name && t.message == e.message;
                                case b:
                                case _:
                                    return t == e + "";
                                case g:
                                    var a = eB;
                                case w:
                                    var h = 1 & i;
                                    if (a || (a = eF), t.size != e.size && !h) break;
                                    var c = o.get(t);
                                    if (c) return c == e;
                                    i |= 2, o.set(t, e);
                                    var d = nn(a(t), a(e), i, n, s, o);
                                    return o.delete(t), d;
                                case A:
                                    if (rf) return rf.call(t) == rf.call(e)
                            }
                            return !1
                        }(e, r, p, i, n, s, o);
                        if (!(1 & i)) {
                            var P = x && tO.call(e, "__wrapped__"),
                                R = S && tO.call(r, "__wrapped__");
                            if (P || R) {
                                var C = P ? e.value() : e,
                                    N = R ? r.value() : r;
                                return o || (o = new rx), s(C, N, i, n, o)
                            }
                        }
                        return !!M && (o || (o = new rx), function(e, r, i, n, s, o) {
                            var a = 1 & i,
                                h = no(e),
                                c = h.length;
                            if (c != no(r).length && !a) return !1;
                            for (var u = c; u--;) {
                                var l = h[u];
                                if (!(a ? l in r : tO.call(r, l))) return !1
                            }
                            var f = o.get(e),
                                d = o.get(r);
                            if (f && d) return f == r && d == e;
                            var p = !0;
                            o.set(e, r), o.set(r, e);
                            for (var g = a; ++u < c;) {
                                var m = e[l = h[u]],
                                    y = r[l];
                                if (n) var v = a ? n(y, m, l, r, e, o) : n(m, y, l, e, r, o);
                                if (!(v === t ? m === y || s(m, y, i, n, o) : v)) {
                                    p = !1;
                                    break
                                }
                                g || (g = "constructor" == l)
                            }
                            if (p && !g) {
                                var b = e.constructor,
                                    w = r.constructor;
                                b != w && "constructor" in e && "constructor" in r && !("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) && (p = !1)
                            }
                            return o.delete(e), o.delete(r), p
                        }(e, r, i, n, s, o))
                    }(e, r, i, n, r6, s) : e != e && r != r)
                }

                function r3(e, r, i, n) {
                    var s = i.length,
                        o = s,
                        a = !n;
                    if (null == e) return !o;
                    for (e = tx(e); s--;) {
                        var h = i[s];
                        if (a && h[2] ? h[1] !== e[h[0]] : !(h[0] in e)) return !1
                    }
                    for (; ++s < o;) {
                        var c = (h = i[s])[0],
                            u = e[c],
                            l = h[1];
                        if (a && h[2]) {
                            if (u === t && !(c in e)) return !1
                        } else {
                            var f = new rx;
                            if (n) var d = n(u, l, c, e, r, f);
                            if (!(d === t ? r6(l, u, 3, n, f) : d)) return !1
                        }
                    }
                    return !0
                }

                function r8(t) {
                    var e;
                    return !(!sG(t) || (e = t, tk && tk in e)) && (sK(t) ? tU : th).test(nB(t))
                }

                function r4(t) {
                    return "function" == typeof t ? t : null == t ? oj : "object" == typeof t ? sL(t) ? ir(t[0], t[1]) : ie(t) : oQ(t)
                }

                function r9(t) {
                    if (!nS(t)) return e1(t);
                    var e = [];
                    for (var r in tx(t)) tO.call(t, r) && "constructor" != r && e.push(r);
                    return e
                }

                function r7(t, e) {
                    return t < e
                }

                function it(t, e) {
                    var r = -1,
                        i = sB(t) ? tv(t.length) : [];
                    return rU(t, function(t, n, s) {
                        i[++r] = e(t, n, s)
                    }), i
                }

                function ie(t) {
                    var e = nd(t);
                    return 1 == e.length && e[0][2] ? nM(e[0][0], e[0][1]) : function(r) {
                        return r === t || r3(r, t, e)
                    }
                }

                function ir(e, r) {
                    var i;
                    return nx(e) && (i = r) == i && !sG(i) ? nM(nU(e), r) : function(i) {
                        var n = oc(i, e);
                        return n === t && n === r ? ou(i, e) : r6(r, n, 3)
                    }
                }

                function ii(e, r, i, n, s) {
                    e !== r && rK(r, function(o, a) {
                        if (s || (s = new rx), sG(o)) ! function(e, r, i, n, s, o, a) {
                            var h = nC(e, i),
                                c = nC(r, i),
                                u = a.get(c);
                            if (u) return rS(e, i, u);
                            var l = o ? o(h, c, i + "", e, r, a) : t,
                                f = l === t;
                            if (f) {
                                var d = sL(c),
                                    p = !d && sz(c),
                                    g = !d && !p && s2(c);
                                l = c, d || p || g ? sL(h) ? l = h : sj(h) ? l = iF(h) : p ? (f = !1, l = iq(c, !0)) : g ? (f = !1, l = iU(c, !0)) : l = [] : sW(c) || sq(c) ? (l = h, sq(h) ? l = ot(h) : (!sG(h) || sK(h)) && (l = nb(c))) : f = !1
                            }
                            f && (a.set(c, l), s(l, c, n, o, a), a.delete(c)), rS(e, i, l)
                        }(e, r, a, i, ii, n, s);
                        else {
                            var h = n ? n(nC(e, a), o, a + "", e, r, s) : t;
                            h === t && (h = o), rS(e, a, h)
                        }
                    }, og)
                }

                function is(e, r) {
                    var i = e.length;
                    if (i) return n_(r += r < 0 ? i : 0, i) ? e[r] : t
                }

                function io(t, e, r) {
                    e = e.length ? ef(e, function(t) {
                        return sL(t) ? function(e) {
                            return rQ(e, 1 === t.length ? t[0] : t)
                        } : t
                    }) : [oj];
                    var i = -1;
                    e = ef(e, eC(nl()));
                    var n = it(t, function(t, r, n) {
                            return {
                                criteria: ef(e, function(e) {
                                    return e(t)
                                }),
                                index: ++i,
                                value: t
                            }
                        }),
                        s = n.length;
                    for (n.sort(function(t, e) {
                            return function(t, e, r) {
                                for (var i = -1, n = t.criteria, s = e.criteria, o = n.length, a = r.length; ++i < o;) {
                                    var h = iB(n[i], s[i]);
                                    if (h) {
                                        if (i >= a) return h;
                                        return h * ("desc" == r[i] ? -1 : 1)
                                    }
                                }
                                return t.index - e.index
                            }(t, e, r)
                        }); s--;) n[s] = n[s].value;
                    return n
                }

                function ia(t, e, r) {
                    for (var i = -1, n = e.length, s = {}; ++i < n;) {
                        var o = e[i],
                            a = rQ(t, o);
                        r(a, o) && ip(s, iT(o, t), a)
                    }
                    return s
                }

                function ih(t, e, r, i) {
                    var n = i ? e_ : ew,
                        s = -1,
                        o = e.length,
                        a = t;
                    for (t === e && (e = iF(e)), r && (a = ef(t, eC(r))); ++s < o;)
                        for (var h = 0, c = e[s], u = r ? r(c) : c;
                            (h = n(a, u, h, i)) > -1;) a !== t && t2.call(a, h, 1), t2.call(t, h, 1);
                    return t
                }

                function ic(t, e) {
                    for (var r = t ? e.length : 0, i = r - 1; r--;) {
                        var n = e[r];
                        if (r == i || n !== s) {
                            var s = n;
                            n_(n) ? t2.call(t, n, 1) : iI(t, n)
                        }
                    }
                    return t
                }

                function iu(t, e) {
                    return t + eY(e8() * (e - t + 1))
                }

                function il(t, e) {
                    var r = "";
                    if (!t || e < 1 || e > 0x1fffffffffffff) return r;
                    do e % 2 && (r += t), (e = eY(e / 2)) && (t += t); while (e) return r
                }

                function id(t, e) {
                    return nT(nP(t, e, oj), t + "")
                }

                function ip(e, r, i, n) {
                    if (!sG(e)) return e;
                    r = iT(r, e);
                    for (var s = -1, o = r.length, a = o - 1, h = e; null != h && ++s < o;) {
                        var c = nU(r[s]),
                            u = i;
                        if ("__proto__" === c || "constructor" === c || "prototype" === c) break;
                        if (s != a) {
                            var l = h[c];
                            (u = n ? n(l, c, h) : t) === t && (u = sG(l) ? l : n_(r[s + 1]) ? [] : {})
                        }
                        rM(h, c, u), h = h[c]
                    }
                    return e
                }
                var ig = rn ? function(t, e) {
                        return rn.set(t, e), t
                    } : oj,
                    im = t9 ? function(t, e) {
                        return t9(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: oL(e),
                            writable: !0
                        })
                    } : oj;

                function iy(t, e, r) {
                    var i = -1,
                        n = t.length;
                    e < 0 && (e = -e > n ? 0 : n + e), (r = r > n ? n : r) < 0 && (r += n), n = e > r ? 0 : r - e >>> 0, e >>>= 0;
                    for (var s = tv(n); ++i < n;) s[i] = t[i + e];
                    return s
                }

                function iv(t, e) {
                    var r;
                    return rU(t, function(t, i, n) {
                        return !(r = e(t, i, n))
                    }), !!r
                }

                function ib(t, e, r) {
                    var i = 0,
                        n = null == t ? i : t.length;
                    if ("number" == typeof e && e == e && n <= 0x7fffffff) {
                        for (; i < n;) {
                            var s = i + n >>> 1,
                                o = t[s];
                            null !== o && !s1(o) && (r ? o <= e : o < e) ? i = s + 1 : n = s
                        }
                        return n
                    }
                    return iw(t, e, oj, r)
                }

                function iw(e, r, i, n) {
                    var s = 0,
                        o = null == e ? 0 : e.length;
                    if (0 === o) return 0;
                    r = i(r);
                    for (var a = r != r, h = null === r, c = s1(r), u = r === t; s < o;) {
                        var l = eY((s + o) / 2),
                            f = i(e[l]),
                            d = f !== t,
                            p = null === f,
                            g = f == f,
                            m = s1(f);
                        if (a) var y = n || g;
                        else y = u ? g && (n || d) : h ? g && d && (n || !p) : c ? g && d && !p && (n || !m) : !p && !m && (n ? f <= r : f < r);
                        y ? s = l + 1 : o = l
                    }
                    return e5(o, 0xfffffffe)
                }

                function i_(t, e) {
                    for (var r = -1, i = t.length, n = 0, s = []; ++r < i;) {
                        var o = t[r],
                            a = e ? e(o) : o;
                        if (!r || !sT(a, h)) {
                            var h = a;
                            s[n++] = 0 === o ? 0 : o
                        }
                    }
                    return s
                }

                function iA(t) {
                    return "number" == typeof t ? t : s1(t) ? s : +t
                }

                function ix(t) {
                    if ("string" == typeof t) return t;
                    if (sL(t)) return ef(t, ix) + "";
                    if (s1(t)) return rd ? rd.call(t) : "";
                    var e = t + "";
                    return "0" == e && 1 / t == -n ? "-0" : e
                }

                function iE(t, e, r) {
                    var i = -1,
                        n = eu,
                        s = t.length,
                        o = !0,
                        a = [],
                        h = a;
                    if (r) o = !1, n = el;
                    else if (s >= 200) {
                        var c = e ? null : i9(t);
                        if (c) return eF(c);
                        o = !1, n = eO, h = new rA
                    } else h = e ? [] : a;
                    t: for (; ++i < s;) {
                        var u = t[i],
                            l = e ? e(u) : u;
                        if (u = r || 0 !== u ? u : 0, o && l == l) {
                            for (var f = h.length; f--;)
                                if (h[f] === l) continue t;
                            e && h.push(l), a.push(u)
                        } else n(h, l, r) || (h !== a && h.push(l), a.push(u))
                    }
                    return a
                }

                function iI(t, e) {
                    return e = iT(e, t), null == (t = nR(t, e)) || delete t[nU(nW(e))]
                }

                function iS(t, e, r, i) {
                    return ip(t, e, r(rQ(t, e)), i)
                }

                function iM(t, e, r, i) {
                    for (var n = t.length, s = i ? n : -1;
                        (i ? s-- : ++s < n) && e(t[s], s, t););
                    return r ? iy(t, i ? 0 : s, i ? s + 1 : n) : iy(t, i ? s + 1 : 0, i ? n : s)
                }

                function iP(t, e) {
                    var r = t;
                    return r instanceof rv && (r = r.value()), ep(e, function(t, e) {
                        return e.func.apply(e.thisArg, ed([t], e.args))
                    }, r)
                }

                function iR(t, e, r) {
                    var i = t.length;
                    if (i < 2) return i ? iE(t[0]) : [];
                    for (var n = -1, s = tv(i); ++n < i;)
                        for (var o = t[n], a = -1; ++a < i;) a != n && (s[n] = rL(s[n] || o, t[a], e, r));
                    return iE(rH(s, 1), e, r)
                }

                function iC(e, r, i) {
                    for (var n = -1, s = e.length, o = r.length, a = {}; ++n < s;) {
                        var h = n < o ? r[n] : t;
                        i(a, e[n], h)
                    }
                    return a
                }

                function iN(t) {
                    return sj(t) ? t : []
                }

                function iO(t) {
                    return "function" == typeof t ? t : oj
                }

                function iT(t, e) {
                    return sL(t) ? t : nx(t, e) ? [t] : nL(oe(t))
                }

                function ik(e, r, i) {
                    var n = e.length;
                    return i = i === t ? n : i, !r && i >= n ? e : iy(e, r, i)
                }
                var iD = ey || function(t) {
                    return t5.clearTimeout(t)
                };

                function iq(t, e) {
                    if (e) return t.slice();
                    var r = t.length,
                        i = tK ? tK(r) : new t.constructor(r);
                    return t.copy(i), i
                }

                function iL(t) {
                    var e = new t.constructor(t.byteLength);
                    return new tz(e).set(new tz(t)), e
                }

                function iU(t, e) {
                    var r = e ? iL(t.buffer) : t.buffer;
                    return new t.constructor(r, t.byteOffset, t.length)
                }

                function iB(e, r) {
                    if (e !== r) {
                        var i = e !== t,
                            n = null === e,
                            s = e == e,
                            o = s1(e),
                            a = r !== t,
                            h = null === r,
                            c = r == r,
                            u = s1(r);
                        if (!h && !u && !o && e > r || o && a && c && !h && !u || n && a && c || !i && c || !s) return 1;
                        if (!n && !o && !u && e < r || u && i && s && !n && !o || h && i && s || !a && s || !c) return -1
                    }
                    return 0
                }

                function ij(t, e, r, i) {
                    for (var n = -1, s = t.length, o = r.length, a = -1, h = e.length, c = e2(s - o, 0), u = tv(h + c), l = !i; ++a < h;) u[a] = e[a];
                    for (; ++n < o;)(l || n < s) && (u[r[n]] = t[n]);
                    for (; c--;) u[a++] = t[n++];
                    return u
                }

                function iz(t, e, r, i) {
                    for (var n = -1, s = t.length, o = -1, a = r.length, h = -1, c = e.length, u = e2(s - a, 0), l = tv(u + c), f = !i; ++n < u;) l[n] = t[n];
                    for (var d = n; ++h < c;) l[d + h] = e[h];
                    for (; ++o < a;)(f || n < s) && (l[d + r[o]] = t[n++]);
                    return l
                }

                function iF(t, e) {
                    var r = -1,
                        i = t.length;
                    for (e || (e = tv(i)); ++r < i;) e[r] = t[r];
                    return e
                }

                function iH(e, r, i, n) {
                    var s = !i;
                    i || (i = {});
                    for (var o = -1, a = r.length; ++o < a;) {
                        var h = r[o],
                            c = n ? n(i[h], e[h], h, i, e) : t;
                        c === t && (c = e[h]), s ? rN(i, h, c) : rM(i, h, c)
                    }
                    return i
                }

                function iK(t, e) {
                    return function(r, i) {
                        var n = sL(r) ? eo : rR,
                            s = e ? e() : {};
                        return n(r, t, nl(i, 2), s)
                    }
                }

                function i$(e) {
                    return id(function(r, i) {
                        var n = -1,
                            s = i.length,
                            o = s > 1 ? i[s - 1] : t,
                            a = s > 2 ? i[2] : t;
                        for (o = e.length > 3 && "function" == typeof o ? (s--, o) : t, a && nA(i[0], i[1], a) && (o = s < 3 ? t : o, s = 1), r = tx(r); ++n < s;) {
                            var h = i[n];
                            h && e(r, h, n, o)
                        }
                        return r
                    })
                }

                function iV(t, e) {
                    return function(r, i) {
                        if (null == r) return r;
                        if (!sB(r)) return t(r, i);
                        for (var n = r.length, s = e ? n : -1, o = tx(r);
                            (e ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                        return r
                    }
                }

                function iG(t) {
                    return function(e, r, i) {
                        for (var n = -1, s = tx(e), o = i(e), a = o.length; a--;) {
                            var h = o[t ? a : ++n];
                            if (!1 === r(s[h], h, s)) break
                        }
                        return e
                    }
                }

                function iJ(e) {
                    return function(r) {
                        var i = eU(r = oe(r)) ? eK(r) : t,
                            n = i ? i[0] : r.charAt(0),
                            s = i ? ik(i, 1).join("") : r.slice(1);
                        return n[e]() + s
                    }
                }

                function iQ(t) {
                    return function(e) {
                        return ep(ok(oS(e).replace(tF, "")), t, "")
                    }
                }

                function iY(t) {
                    return function() {
                        var e = arguments;
                        switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3]);
                            case 5:
                                return new t(e[0], e[1], e[2], e[3], e[4]);
                            case 6:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                            case 7:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                        }
                        var r = rg(t.prototype),
                            i = t.apply(r, e);
                        return sG(i) ? i : r
                    }
                }

                function iW(e) {
                    return function(r, i, n) {
                        var s = tx(r);
                        if (!sB(r)) {
                            var o = nl(i, 3);
                            r = op(r), i = function(t) {
                                return o(s[t], t, s)
                            }
                        }
                        var a = e(r, i, n);
                        return a > -1 ? s[o ? r[a] : a] : t
                    }
                }

                function iX(r) {
                    return ns(function(i) {
                        var n = i.length,
                            s = n,
                            o = ry.prototype.thru;
                        for (r && i.reverse(); s--;) {
                            var a = i[s];
                            if ("function" != typeof a) throw new tS(e);
                            if (o && !h && "wrapper" == nc(a)) var h = new ry([], !0)
                        }
                        for (s = h ? s : n; ++s < n;) {
                            var c = nc(a = i[s]),
                                u = "wrapper" == c ? nh(a) : t;
                            h = u && nE(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? h[nc(u[0])].apply(h, u[3]) : 1 == a.length && nE(a) ? h[c]() : h.thru(a)
                        }
                        return function() {
                            var t = arguments,
                                e = t[0];
                            if (h && 1 == t.length && sL(e)) return h.plant(e).value();
                            for (var r = 0, s = n ? i[r].apply(this, t) : e; ++r < n;) s = i[r].call(this, s);
                            return s
                        }
                    })
                }

                function iZ(e, r, i, n, s, o, a, h, c, u) {
                    var l = 128 & r,
                        f = 1 & r,
                        d = 2 & r,
                        p = 24 & r,
                        g = 512 & r,
                        m = d ? t : iY(e);

                    function y() {
                        for (var v = arguments.length, b = tv(v), w = v; w--;) b[w] = arguments[w];
                        if (p) var _ = nu(y),
                            A = function(t, e) {
                                for (var r = t.length, i = 0; r--;) t[r] === e && ++i;
                                return i
                            }(b, _);
                        if (n && (b = ij(b, n, s, p)), o && (b = iz(b, o, a, p)), v -= A, p && v < u) {
                            var x = ez(b, _);
                            return i8(e, r, iZ, y.placeholder, i, b, x, h, c, u - v)
                        }
                        var E = f ? i : this,
                            I = d ? E[e] : e;
                        return v = b.length, h ? b = function(e, r) {
                            for (var i = e.length, n = e5(r.length, i), s = iF(e); n--;) {
                                var o = r[n];
                                e[n] = n_(o, i) ? s[o] : t
                            }
                            return e
                        }(b, h) : g && v > 1 && b.reverse(), l && c < v && (b.length = c), this && this !== t5 && this instanceof y && (I = m || iY(I)), I.apply(E, b)
                    }
                    return y
                }

                function i0(t, e) {
                    return function(r, i) {
                        var n, s;
                        return n = e(i), s = {}, rV(r, function(e, r, i) {
                            t(s, n(e), r, i)
                        }), s
                    }
                }

                function i1(e, r) {
                    return function(i, n) {
                        var s;
                        if (i === t && n === t) return r;
                        if (i !== t && (s = i), n !== t) {
                            if (s === t) return n;
                            "string" == typeof i || "string" == typeof n ? (i = ix(i), n = ix(n)) : (i = iA(i), n = iA(n)), s = e(i, n)
                        }
                        return s
                    }
                }

                function i2(t) {
                    return ns(function(e) {
                        return e = ef(e, eC(nl())), id(function(r) {
                            var i = this;
                            return t(e, function(t) {
                                return es(t, i, r)
                            })
                        })
                    })
                }

                function i5(e, r) {
                    var i = (r = r === t ? " " : ix(r)).length;
                    if (i < 2) return i ? il(r, e) : r;
                    var n = il(r, eQ(e / eH(r)));
                    return eU(r) ? ik(eK(n), 0, e).join("") : n.slice(0, e)
                }

                function i6(e) {
                    return function(r, i, n) {
                        return n && "number" != typeof n && nA(r, i, n) && (i = n = t), r = s8(r), i === t ? (i = r, r = 0) : i = s8(i), n = n === t ? r < i ? 1 : -1 : s8(n),
                            function(t, e, r, i) {
                                for (var n = -1, s = e2(eQ((e - t) / (r || 1)), 0), o = tv(s); s--;) o[i ? s : ++n] = t, t += r;
                                return o
                            }(r, i, n, e)
                    }
                }

                function i3(t) {
                    return function(e, r) {
                        return "string" == typeof e && "string" == typeof r || (e = s7(e), r = s7(r)), t(e, r)
                    }
                }

                function i8(e, r, i, n, s, o, a, h, c, u) {
                    var l = 8 & r,
                        f = l ? a : t,
                        d = l ? t : a,
                        p = l ? o : t,
                        g = l ? t : o;
                    r |= l ? 32 : 64, 4 & (r &= ~(l ? 64 : 32)) || (r &= -4);
                    var m = [e, r, s, p, f, g, d, h, c, u],
                        y = i.apply(t, m);
                    return nE(e) && nN(y, m), y.placeholder = n, nk(y, e, r)
                }

                function i4(t) {
                    var e = tA[t];
                    return function(t, r) {
                        if (t = s7(t), (r = null == r ? 0 : e5(s4(r), 292)) && eZ(t)) {
                            var i = (oe(t) + "e").split("e");
                            return +((i = (oe(e(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (i[1] - r))
                        }
                        return e(t)
                    }
                }
                var i9 = re && 1 / eF(new re([, -0]))[1] == n ? function(t) {
                    return new re(t)
                } : o$;

                function i7(t) {
                    return function(e) {
                        var r, i, n = ny(e);
                        return n == g ? eB(e) : n == w ? (r = -1, i = Array(e.size), e.forEach(function(t) {
                            i[++r] = [t, t]
                        }), i) : ef(t(e), function(t) {
                            return [t, e[t]]
                        })
                    }
                }

                function nt(r, n, s, o, a, h, c, u) {
                    var l = 2 & n;
                    if (!l && "function" != typeof r) throw new tS(e);
                    var f = o ? o.length : 0;
                    if (f || (n &= -97, o = a = t), c = c === t ? c : e2(s4(c), 0), u = u === t ? u : s4(u), f -= a ? a.length : 0, 64 & n) {
                        var d = o,
                            p = a;
                        o = a = t
                    }
                    var g = l ? t : nh(r),
                        m = [r, n, s, o, a, d, p, h, c, u];
                    if (g && function(t, e) {
                            var r = t[1],
                                n = e[1],
                                s = r | n,
                                o = s < 131,
                                a = 128 == n && 8 == r || 128 == n && 256 == r && t[7].length <= e[8] || 384 == n && e[7].length <= e[8] && 8 == r;
                            if (o || a) {
                                1 & n && (t[2] = e[2], s |= 1 & r ? 0 : 4);
                                var h = e[3];
                                if (h) {
                                    var c = t[3];
                                    t[3] = c ? ij(c, h, e[4]) : h, t[4] = c ? ez(t[3], i) : e[4]
                                }(h = e[5]) && (c = t[5], t[5] = c ? iz(c, h, e[6]) : h, t[6] = c ? ez(t[5], i) : e[6]), (h = e[7]) && (t[7] = h), 128 & n && (t[8] = null == t[8] ? e[8] : e5(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = s
                            }
                        }(m, g), r = m[0], n = m[1], s = m[2], o = m[3], a = m[4], (u = m[9] = m[9] === t ? l ? 0 : r.length : e2(m[9] - f, 0)) || !(24 & n) || (n &= -25), n && 1 != n) 8 == n || 16 == n ? P = function(e, r, i) {
                        var n = iY(e);

                        function s() {
                            for (var o = arguments.length, a = tv(o), h = o, c = nu(s); h--;) a[h] = arguments[h];
                            var u = o < 3 && a[0] !== c && a[o - 1] !== c ? [] : ez(a, c);
                            return (o -= u.length) < i ? i8(e, r, iZ, s.placeholder, t, a, u, t, t, i - o) : es(this && this !== t5 && this instanceof s ? n : e, this, a)
                        }
                        return s
                    }(r, n, u) : 32 != n && 33 != n || a.length ? P = iZ.apply(t, m) : (y = r, v = n, b = s, w = o, _ = 1 & v, A = iY(y), P = function t() {
                        for (var e = -1, r = arguments.length, i = -1, n = w.length, s = tv(n + r), o = this && this !== t5 && this instanceof t ? A : y; ++i < n;) s[i] = w[i];
                        for (; r--;) s[i++] = arguments[++e];
                        return es(o, _ ? b : this, s)
                    });
                    else var y, v, b, w, _, A, x, E, I, S, M, P = (x = r, E = n, I = s, S = 1 & E, M = iY(x), function t() {
                        return (this && this !== t5 && this instanceof t ? M : x).apply(S ? I : this, arguments)
                    });
                    return nk((g ? ig : nN)(P, m), r, n)
                }

                function ne(e, r, i, n) {
                    return e === t || sT(e, tR[i]) && !tO.call(n, i) ? r : e
                }

                function nr(e, r, i, n, s, o) {
                    return sG(e) && sG(r) && (o.set(r, e), ii(e, r, t, nr, o), o.delete(r)), e
                }

                function ni(e) {
                    return sW(e) ? t : e
                }

                function nn(e, r, i, n, s, o) {
                    var a = 1 & i,
                        h = e.length,
                        c = r.length;
                    if (h != c && !(a && c > h)) return !1;
                    var u = o.get(e),
                        l = o.get(r);
                    if (u && l) return u == r && l == e;
                    var f = -1,
                        d = !0,
                        p = 2 & i ? new rA : t;
                    for (o.set(e, r), o.set(r, e); ++f < h;) {
                        var g = e[f],
                            m = r[f];
                        if (n) var y = a ? n(m, g, f, r, e, o) : n(g, m, f, e, r, o);
                        if (y !== t) {
                            if (y) continue;
                            d = !1;
                            break
                        }
                        if (p) {
                            if (!em(r, function(t, e) {
                                    if (!eO(p, e) && (g === t || s(g, t, i, n, o))) return p.push(e)
                                })) {
                                d = !1;
                                break
                            }
                        } else if (!(g === m || s(g, m, i, n, o))) {
                            d = !1;
                            break
                        }
                    }
                    return o.delete(e), o.delete(r), d
                }

                function ns(e) {
                    return nT(nP(e, t, nV), e + "")
                }

                function no(t) {
                    return rY(t, op, ng)
                }

                function na(t) {
                    return rY(t, og, nm)
                }
                var nh = rn ? function(t) {
                    return rn.get(t)
                } : o$;

                function nc(t) {
                    for (var e = t.name + "", r = rs[e], i = tO.call(rs, e) ? r.length : 0; i--;) {
                        var n = r[i],
                            s = n.func;
                        if (null == s || s == t) return n.name
                    }
                    return e
                }

                function nu(t) {
                    return (tO.call(rp, "placeholder") ? rp : t).placeholder
                }

                function nl() {
                    var t = rp.iteratee || oz;
                    return t = t === oz ? r4 : t, arguments.length ? t(arguments[0], arguments[1]) : t
                }

                function nf(t, e) {
                    var r, i, n = t.__data__;
                    return ("string" == (i = typeof(r = e)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== r : null === r) ? n["string" == typeof e ? "string" : "hash"] : n.map
                }

                function nd(t) {
                    for (var e = op(t), r = e.length; r--;) {
                        var i, n = e[r],
                            s = t[n];
                        e[r] = [n, s, (i = s) == i && !sG(i)]
                    }
                    return e
                }

                function np(e, r) {
                    var i = null == e ? t : e[r];
                    return r8(i) ? i : t
                }
                var ng = eW ? function(t) {
                        return null == t ? [] : ec(eW(t = tx(t)), function(e) {
                            return t1.call(t, e)
                        })
                    } : oX,
                    nm = eW ? function(t) {
                        for (var e = []; t;) ed(e, ng(t)), t = tV(t);
                        return e
                    } : oX,
                    ny = rW;

                function nv(t, e, r) {
                    e = iT(e, t);
                    for (var i = -1, n = e.length, s = !1; ++i < n;) {
                        var o = nU(e[i]);
                        if (!(s = null != t && r(t, o))) break;
                        t = t[o]
                    }
                    return s || ++i != n ? s : !!(n = null == t ? 0 : t.length) && sV(n) && n_(o, n) && (sL(t) || sq(t))
                }

                function nb(t) {
                    return "function" != typeof t.constructor || nS(t) ? {} : rg(tV(t))
                }

                function nw(t) {
                    return sL(t) || sq(t) || !!(t6 && t && t[t6])
                }

                function n_(t, e) {
                    var r = typeof t;
                    return !!(e = e ? ? 0x1fffffffffffff) && ("number" == r || "symbol" != r && tu.test(t)) && t > -1 && t % 1 == 0 && t < e
                }

                function nA(t, e, r) {
                    if (!sG(r)) return !1;
                    var i = typeof e;
                    return ("number" == i ? !!(sB(r) && n_(e, r.length)) : "string" == i && e in r) && sT(r[e], t)
                }

                function nx(t, e) {
                    if (sL(t)) return !1;
                    var r = typeof t;
                    return !!("number" == r || "symbol" == r || "boolean" == r || null == t || s1(t)) || V.test(t) || !$.test(t) || null != e && t in tx(e)
                }

                function nE(t) {
                    var e = nc(t),
                        r = rp[e];
                    if ("function" != typeof r || !(e in rv.prototype)) return !1;
                    if (t === r) return !0;
                    var i = nh(r);
                    return !!i && t === i[0]
                }(e9 && ny(new e9(new ArrayBuffer(1))) != I || e7 && ny(new e7) != g || rt && ny(rt.resolve()) != v || re && ny(new re) != w || rr && ny(new rr) != x) && (ny = function(e) {
                    var r = rW(e),
                        i = r == y ? e.constructor : t,
                        n = i ? nB(i) : "";
                    if (n) switch (n) {
                        case ro:
                            return I;
                        case ra:
                            return g;
                        case rh:
                            return v;
                        case rc:
                            return w;
                        case ru:
                            return x
                    }
                    return r
                });
                var nI = tC ? sK : oZ;

                function nS(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || tR)
                }

                function nM(e, r) {
                    return function(i) {
                        return null != i && i[e] === r && (r !== t || e in tx(i))
                    }
                }

                function nP(e, r, i) {
                    return r = e2(r === t ? e.length - 1 : r, 0),
                        function() {
                            for (var t = arguments, n = -1, s = e2(t.length - r, 0), o = tv(s); ++n < s;) o[n] = t[r + n];
                            n = -1;
                            for (var a = tv(r + 1); ++n < r;) a[n] = t[n];
                            return a[r] = i(o), es(e, this, a)
                        }
                }

                function nR(t, e) {
                    return e.length < 2 ? t : rQ(t, iy(e, 0, -1))
                }

                function nC(t, e) {
                    if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
                }
                var nN = nD(ig),
                    nO = eJ || function(t, e) {
                        return t5.setTimeout(t, e)
                    },
                    nT = nD(im);

                function nk(t, e, r) {
                    var i, n, s, a = e + "";
                    return nT(t, function(t, e) {
                        var r = e.length;
                        if (!r) return t;
                        var i = r - 1;
                        return e[i] = (r > 1 ? "& " : "") + e[i], e = e.join(r > 2 ? ", " : " "), t.replace(X, `{
/* [wrapped with ` + e + `] */
`)
                    }(a, (i = (s = a.match(Z)) ? s[1].split(tt) : [], n = r, ea(o, function(t) {
                        var e = "_." + t[0];
                        n & t[1] && !eu(i, e) && i.push(e)
                    }), i.sort())))
                }

                function nD(e) {
                    var r = 0,
                        i = 0;
                    return function() {
                        var n = e6(),
                            s = 16 - (n - i);
                        if (i = n, s > 0) {
                            if (++r >= 800) return arguments[0]
                        } else r = 0;
                        return e.apply(t, arguments)
                    }
                }

                function nq(e, r) {
                    var i = -1,
                        n = e.length,
                        s = n - 1;
                    for (r = r === t ? n : r; ++i < r;) {
                        var o = iu(i, s),
                            a = e[o];
                        e[o] = e[i], e[i] = a
                    }
                    return e.length = r, e
                }
                var nL = (tm = (tg = sM(function(t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace(G, function(t, r, i, n) {
                        e.push(i ? n.replace(ti, "$1") : r || t)
                    }), e
                }, function(t) {
                    return 500 === tm.size && tm.clear(), t
                })).cache, tg);

                function nU(t) {
                    if ("string" == typeof t || s1(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -n ? "-0" : e
                }

                function nB(t) {
                    if (null != t) {
                        try {
                            return tN.call(t)
                        } catch {}
                        try {
                            return t + ""
                        } catch {}
                    }
                    return ""
                }

                function nj(t) {
                    if (t instanceof rv) return t.clone();
                    var e = new ry(t.__wrapped__, t.__chain__);
                    return e.__actions__ = iF(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
                }
                var nz = id(function(t, e) {
                        return sj(t) ? rL(t, rH(e, 1, sj, !0)) : []
                    }),
                    nF = id(function(e, r) {
                        var i = nW(r);
                        return sj(i) && (i = t), sj(e) ? rL(e, rH(r, 1, sj, !0), nl(i, 2)) : []
                    }),
                    nH = id(function(e, r) {
                        var i = nW(r);
                        return sj(i) && (i = t), sj(e) ? rL(e, rH(r, 1, sj, !0), t, i) : []
                    });

                function nK(t, e, r) {
                    var i = null == t ? 0 : t.length;
                    if (!i) return -1;
                    var n = null == r ? 0 : s4(r);
                    return n < 0 && (n = e2(i + n, 0)), eb(t, nl(e, 3), n)
                }

                function n$(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var s = n - 1;
                    return i !== t && (s = s4(i), s = i < 0 ? e2(n + s, 0) : e5(s, n - 1)), eb(e, nl(r, 3), s, !0)
                }

                function nV(t) {
                    return (null == t ? 0 : t.length) ? rH(t, 1) : []
                }

                function nG(e) {
                    return e && e.length ? e[0] : t
                }
                var nJ = id(function(t) {
                        var e = ef(t, iN);
                        return e.length && e[0] === t[0] ? r1(e) : []
                    }),
                    nQ = id(function(e) {
                        var r = nW(e),
                            i = ef(e, iN);
                        return r === nW(i) ? r = t : i.pop(), i.length && i[0] === e[0] ? r1(i, nl(r, 2)) : []
                    }),
                    nY = id(function(e) {
                        var r = nW(e),
                            i = ef(e, iN);
                        return (r = "function" == typeof r ? r : t) && i.pop(), i.length && i[0] === e[0] ? r1(i, t, r) : []
                    });

                function nW(e) {
                    var r = null == e ? 0 : e.length;
                    return r ? e[r - 1] : t
                }
                var nX = id(nZ);

                function nZ(t, e) {
                    return t && t.length && e && e.length ? ih(t, e) : t
                }
                var n0 = ns(function(t, e) {
                    var r = null == t ? 0 : t.length,
                        i = rO(t, e);
                    return ic(t, ef(e, function(t) {
                        return n_(t, r) ? +t : t
                    }).sort(iB)), i
                });

                function n1(t) {
                    return null == t ? t : e4.call(t)
                }
                var n2 = id(function(t) {
                        return iE(rH(t, 1, sj, !0))
                    }),
                    n5 = id(function(e) {
                        var r = nW(e);
                        return sj(r) && (r = t), iE(rH(e, 1, sj, !0), nl(r, 2))
                    }),
                    n6 = id(function(e) {
                        var r = nW(e);
                        return r = "function" == typeof r ? r : t, iE(rH(e, 1, sj, !0), t, r)
                    });

                function n3(t) {
                    if (!(t && t.length)) return [];
                    var e = 0;
                    return t = ec(t, function(t) {
                        if (sj(t)) return e = e2(t.length, e), !0
                    }), eP(e, function(e) {
                        return ef(t, eE(e))
                    })
                }

                function n8(e, r) {
                    if (!(e && e.length)) return [];
                    var i = n3(e);
                    return null == r ? i : ef(i, function(e) {
                        return es(r, t, e)
                    })
                }
                var n4 = id(function(t, e) {
                        return sj(t) ? rL(t, e) : []
                    }),
                    n9 = id(function(t) {
                        return iR(ec(t, sj))
                    }),
                    n7 = id(function(e) {
                        var r = nW(e);
                        return sj(r) && (r = t), iR(ec(e, sj), nl(r, 2))
                    }),
                    st = id(function(e) {
                        var r = nW(e);
                        return r = "function" == typeof r ? r : t, iR(ec(e, sj), t, r)
                    }),
                    se = id(n3),
                    sr = id(function(e) {
                        var r = e.length,
                            i = r > 1 ? e[r - 1] : t;
                        return i = "function" == typeof i ? (e.pop(), i) : t, n8(e, i)
                    });

                function si(t) {
                    var e = rp(t);
                    return e.__chain__ = !0, e
                }

                function sn(t, e) {
                    return e(t)
                }
                var ss = ns(function(e) {
                        var r = e.length,
                            i = r ? e[0] : 0,
                            n = this.__wrapped__,
                            s = function(t) {
                                return rO(t, e)
                            };
                        return !(r > 1) && !this.__actions__.length && n instanceof rv && n_(i) ? ((n = n.slice(i, +i + +!!r)).__actions__.push({
                            func: sn,
                            args: [s],
                            thisArg: t
                        }), new ry(n, this.__chain__).thru(function(e) {
                            return r && !e.length && e.push(t), e
                        })) : this.thru(s)
                    }),
                    so = iK(function(t, e, r) {
                        tO.call(t, r) ? ++t[r] : rN(t, r, 1)
                    }),
                    sa = iW(nK),
                    sh = iW(n$);

                function sc(t, e) {
                    return (sL(t) ? ea : rU)(t, nl(e, 3))
                }

                function su(t, e) {
                    return (sL(t) ? function(t, e) {
                        for (var r = null == t ? 0 : t.length; r-- && !1 !== e(t[r], r, t););
                        return t
                    } : rB)(t, nl(e, 3))
                }
                var sl = iK(function(t, e, r) {
                        tO.call(t, r) ? t[r].push(e) : rN(t, r, [e])
                    }),
                    sf = id(function(t, e, r) {
                        var i = -1,
                            n = "function" == typeof e,
                            s = sB(t) ? tv(t.length) : [];
                        return rU(t, function(t) {
                            s[++i] = n ? es(e, t, r) : r2(t, e, r)
                        }), s
                    }),
                    sd = iK(function(t, e, r) {
                        rN(t, r, e)
                    });

                function sp(t, e) {
                    return (sL(t) ? ef : it)(t, nl(e, 3))
                }
                var sg = iK(function(t, e, r) {
                        t[+!r].push(e)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    }),
                    sm = id(function(t, e) {
                        if (null == t) return [];
                        var r = e.length;
                        return r > 1 && nA(t, e[0], e[1]) ? e = [] : r > 2 && nA(e[0], e[1], e[2]) && (e = [e[0]]), io(t, rH(e, 1), [])
                    }),
                    sy = eI || function() {
                        return t5.Date.now()
                    };

                function sv(e, r, i) {
                    return r = i ? t : r, r = e && null == r ? e.length : r, nt(e, 128, t, t, t, t, r)
                }

                function sb(r, i) {
                    var n;
                    if ("function" != typeof i) throw new tS(e);
                    return r = s4(r),
                        function() {
                            return --r > 0 && (n = i.apply(this, arguments)), r <= 1 && (i = t), n
                        }
                }
                var sw = id(function(t, e, r) {
                        var i = 1;
                        if (r.length) {
                            var n = ez(r, nu(sw));
                            i |= 32
                        }
                        return nt(t, i, e, r, n)
                    }),
                    s_ = id(function(t, e, r) {
                        var i = 3;
                        if (r.length) {
                            var n = ez(r, nu(s_));
                            i |= 32
                        }
                        return nt(e, i, t, r, n)
                    });

                function sA(e, r, i) {
                    r = i ? t : r;
                    var n = nt(e, 8, t, t, t, t, t, r);
                    return n.placeholder = sA.placeholder, n
                }

                function sx(e, r, i) {
                    r = i ? t : r;
                    var n = nt(e, 16, t, t, t, t, t, r);
                    return n.placeholder = sx.placeholder, n
                }

                function sE(r, i, n) {
                    var s, o, a, h, c, u, l = 0,
                        f = !1,
                        d = !1,
                        p = !0;
                    if ("function" != typeof r) throw new tS(e);

                    function g(e) {
                        var i = s,
                            n = o;
                        return s = o = t, l = e, h = r.apply(n, i)
                    }

                    function m(e) {
                        var r = e - u,
                            n = e - l;
                        return u === t || r >= i || r < 0 || d && n >= a
                    }

                    function y() {
                        var t, e, r, n = sy();
                        if (m(n)) return v(n);
                        c = nO(y, (t = n - u, e = n - l, r = i - t, d ? e5(r, a - e) : r))
                    }

                    function v(e) {
                        return c = t, p && s ? g(e) : (s = o = t, h)
                    }

                    function b() {
                        var e, r = sy(),
                            n = m(r);
                        if (s = arguments, o = this, u = r, n) {
                            if (c === t) return l = e = u, c = nO(y, i), f ? g(e) : h;
                            if (d) return iD(c), c = nO(y, i), g(u)
                        }
                        return c === t && (c = nO(y, i)), h
                    }
                    return i = s7(i) || 0, sG(n) && (f = !!n.leading, a = (d = "maxWait" in n) ? e2(s7(n.maxWait) || 0, i) : a, p = "trailing" in n ? !!n.trailing : p), b.cancel = function() {
                        c !== t && iD(c), l = 0, s = u = o = c = t
                    }, b.flush = function() {
                        return c === t ? h : v(sy())
                    }, b
                }
                var sI = id(function(t, e) {
                        return rq(t, 1, e)
                    }),
                    sS = id(function(t, e, r) {
                        return rq(t, s7(e) || 0, r)
                    });

                function sM(t, r) {
                    if ("function" != typeof t || null != r && "function" != typeof r) throw new tS(e);
                    var i = function() {
                        var e = arguments,
                            n = r ? r.apply(this, e) : e[0],
                            s = i.cache;
                        if (s.has(n)) return s.get(n);
                        var o = t.apply(this, e);
                        return i.cache = s.set(n, o) || s, o
                    };
                    return i.cache = new(sM.Cache || r_), i
                }

                function sP(t) {
                    if ("function" != typeof t) throw new tS(e);
                    return function() {
                        var e = arguments;
                        switch (e.length) {
                            case 0:
                                return !t.call(this);
                            case 1:
                                return !t.call(this, e[0]);
                            case 2:
                                return !t.call(this, e[0], e[1]);
                            case 3:
                                return !t.call(this, e[0], e[1], e[2])
                        }
                        return !t.apply(this, e)
                    }
                }
                sM.Cache = r_;
                var sR = id(function(t, e) {
                        var r = (e = 1 == e.length && sL(e[0]) ? ef(e[0], eC(nl())) : ef(rH(e, 1), eC(nl()))).length;
                        return id(function(i) {
                            for (var n = -1, s = e5(i.length, r); ++n < s;) i[n] = e[n].call(this, i[n]);
                            return es(t, this, i)
                        })
                    }),
                    sC = id(function(e, r) {
                        var i = ez(r, nu(sC));
                        return nt(e, 32, t, r, i)
                    }),
                    sN = id(function(e, r) {
                        var i = ez(r, nu(sN));
                        return nt(e, 64, t, r, i)
                    }),
                    sO = ns(function(e, r) {
                        return nt(e, 256, t, t, t, r)
                    });

                function sT(t, e) {
                    return t === e || t != t && e != e
                }
                var sk = i3(rX),
                    sD = i3(function(t, e) {
                        return t >= e
                    }),
                    sq = r5(function() {
                        return arguments
                    }()) ? r5 : function(t) {
                        return sJ(t) && tO.call(t, "callee") && !t1.call(t, "callee")
                    },
                    sL = tv.isArray,
                    sU = t7 ? eC(t7) : function(t) {
                        return sJ(t) && rW(t) == E
                    };

                function sB(t) {
                    return null != t && sV(t.length) && !sK(t)
                }

                function sj(t) {
                    return sJ(t) && sB(t)
                }
                var sz = eX || oZ,
                    sF = et ? eC(et) : function(t) {
                        return sJ(t) && rW(t) == l
                    };

                function sH(t) {
                    if (!sJ(t)) return !1;
                    var e = rW(t);
                    return e == f || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !sW(t)
                }

                function sK(t) {
                    if (!sG(t)) return !1;
                    var e = rW(t);
                    return e == d || e == p || "[object AsyncFunction]" == e || "[object Proxy]" == e
                }

                function s$(t) {
                    return "number" == typeof t && t == s4(t)
                }

                function sV(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff
                }

                function sG(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }

                function sJ(t) {
                    return null != t && "object" == typeof t
                }
                var sQ = ee ? eC(ee) : function(t) {
                    return sJ(t) && ny(t) == g
                };

                function sY(t) {
                    return "number" == typeof t || sJ(t) && rW(t) == m
                }

                function sW(t) {
                    if (!sJ(t) || rW(t) != y) return !1;
                    var e = tV(t);
                    if (null === e) return !0;
                    var r = tO.call(e, "constructor") && e.constructor;
                    return "function" == typeof r && r instanceof r && tN.call(r) == tq
                }
                var sX = er ? eC(er) : function(t) {
                        return sJ(t) && rW(t) == b
                    },
                    sZ = ei ? eC(ei) : function(t) {
                        return sJ(t) && ny(t) == w
                    };

                function s0(t) {
                    return "string" == typeof t || !sL(t) && sJ(t) && rW(t) == _
                }

                function s1(t) {
                    return "symbol" == typeof t || sJ(t) && rW(t) == A
                }
                var s2 = en ? eC(en) : function(t) {
                        return sJ(t) && sV(t.length) && !!tY[rW(t)]
                    },
                    s5 = i3(r7),
                    s6 = i3(function(t, e) {
                        return t <= e
                    });

                function s3(t) {
                    if (!t) return [];
                    if (sB(t)) return s0(t) ? eK(t) : iF(t);
                    if (t3 && t[t3]) {
                        for (var e, r = t[t3](), i = []; !(e = r.next()).done;) i.push(e.value);
                        return i
                    }
                    var n = ny(t);
                    return (n == g ? eB : n == w ? eF : ox)(t)
                }

                function s8(t) {
                    return t ? (t = s7(t)) === n || t === -n ? (t < 0 ? -1 : 1) * 17976931348623157e292 : t == t ? t : 0 : 0 === t ? t : 0
                }

                function s4(t) {
                    var e = s8(t),
                        r = e % 1;
                    return e == e ? r ? e - r : e : 0
                }

                function s9(t) {
                    return t ? rT(s4(t), 0, 0xffffffff) : 0
                }

                function s7(t) {
                    if ("number" == typeof t) return t;
                    if (s1(t)) return s;
                    if (sG(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = sG(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = eR(t);
                    var r = ta.test(t);
                    return r || tc.test(t) ? t0(t.slice(2), r ? 2 : 8) : to.test(t) ? s : +t
                }

                function ot(t) {
                    return iH(t, og(t))
                }

                function oe(t) {
                    return null == t ? "" : ix(t)
                }
                var or = i$(function(t, e) {
                        if (nS(e) || sB(e)) return void iH(e, op(e), t);
                        for (var r in e) tO.call(e, r) && rM(t, r, e[r])
                    }),
                    oi = i$(function(t, e) {
                        iH(e, og(e), t)
                    }),
                    on = i$(function(t, e, r, i) {
                        iH(e, og(e), t, i)
                    }),
                    os = i$(function(t, e, r, i) {
                        iH(e, op(e), t, i)
                    }),
                    oo = ns(rO),
                    oa = id(function(e, r) {
                        e = tx(e);
                        var i = -1,
                            n = r.length,
                            s = n > 2 ? r[2] : t;
                        for (s && nA(r[0], r[1], s) && (n = 1); ++i < n;)
                            for (var o = r[i], a = og(o), h = -1, c = a.length; ++h < c;) {
                                var u = a[h],
                                    l = e[u];
                                (l === t || sT(l, tR[u]) && !tO.call(e, u)) && (e[u] = o[u])
                            }
                        return e
                    }),
                    oh = id(function(e) {
                        return e.push(t, nr), es(oy, t, e)
                    });

                function oc(e, r, i) {
                    var n = null == e ? t : rQ(e, r);
                    return n === t ? i : n
                }

                function ou(t, e) {
                    return null != t && nv(t, e, r0)
                }
                var ol = i0(function(t, e, r) {
                        null != e && "function" != typeof e.toString && (e = tD.call(e)), t[e] = r
                    }, oL(oj)),
                    of = i0(function(t, e, r) {
                        null != e && "function" != typeof e.toString && (e = tD.call(e)), tO.call(t, e) ? t[e].push(r) : t[e] = [r]
                    }, nl),
                    od = id(r2);

                function op(t) {
                    return sB(t) ? rE(t) : r9(t)
                }

                function og(t) {
                    return sB(t) ? rE(t, !0) : function(t) {
                        if (!sG(t)) {
                            var e = t,
                                r = [];
                            if (null != e)
                                for (var i in tx(e)) r.push(i);
                            return r
                        }
                        var n = nS(t),
                            s = [];
                        for (var o in t) "constructor" == o && (n || !tO.call(t, o)) || s.push(o);
                        return s
                    }(t)
                }
                var om = i$(function(t, e, r) {
                        ii(t, e, r)
                    }),
                    oy = i$(function(t, e, r, i) {
                        ii(t, e, r, i)
                    }),
                    ov = ns(function(t, e) {
                        var r = {};
                        if (null == t) return r;
                        var i = !1;
                        e = ef(e, function(e) {
                            return e = iT(e, t), i || (i = e.length > 1), e
                        }), iH(t, na(t), r), i && (r = rk(r, 7, ni));
                        for (var n = e.length; n--;) iI(r, e[n]);
                        return r
                    }),
                    ob = ns(function(t, e) {
                        return null == t ? {} : ia(t, e, function(e, r) {
                            return ou(t, r)
                        })
                    });

                function ow(t, e) {
                    if (null == t) return {};
                    var r = ef(na(t), function(t) {
                        return [t]
                    });
                    return e = nl(e), ia(t, r, function(t, r) {
                        return e(t, r[0])
                    })
                }
                var o_ = i7(op),
                    oA = i7(og);

                function ox(t) {
                    return null == t ? [] : eN(t, op(t))
                }
                var oE = iQ(function(t, e, r) {
                    return e = e.toLowerCase(), t + (r ? oI(e) : e)
                });

                function oI(t) {
                    return oT(oe(t).toLowerCase())
                }

                function oS(t) {
                    return (t = oe(t)) && t.replace(tl, eD).replace(tH, "")
                }
                var oM = iQ(function(t, e, r) {
                        return t + (r ? "-" : "") + e.toLowerCase()
                    }),
                    oP = iQ(function(t, e, r) {
                        return t + (r ? " " : "") + e.toLowerCase()
                    }),
                    oR = iJ("toLowerCase"),
                    oC = iQ(function(t, e, r) {
                        return t + (r ? "_" : "") + e.toLowerCase()
                    }),
                    oN = iQ(function(t, e, r) {
                        return t + (r ? " " : "") + oT(e)
                    }),
                    oO = iQ(function(t, e, r) {
                        return t + (r ? " " : "") + e.toUpperCase()
                    }),
                    oT = iJ("toUpperCase");

                function ok(e, r, i) {
                    var n;
                    return e = oe(e), (r = i ? t : r) === t ? (n = e, tG.test(n)) ? e.match(t$) || [] : e.match(te) || [] : e.match(r) || []
                }
                var oD = id(function(e, r) {
                        try {
                            return es(e, t, r)
                        } catch (t) {
                            return sH(t) ? t : new tw(t)
                        }
                    }),
                    oq = ns(function(t, e) {
                        return ea(e, function(e) {
                            rN(t, e = nU(e), sw(t[e], t))
                        }), t
                    });

                function oL(t) {
                    return function() {
                        return t
                    }
                }
                var oU = iX(),
                    oB = iX(!0);

                function oj(t) {
                    return t
                }

                function oz(t) {
                    return r4("function" == typeof t ? t : rk(t, 1))
                }
                var oF = id(function(t, e) {
                        return function(r) {
                            return r2(r, t, e)
                        }
                    }),
                    oH = id(function(t, e) {
                        return function(r) {
                            return r2(t, r, e)
                        }
                    });

                function oK(t, e, r) {
                    var i = op(e),
                        n = rJ(e, i);
                    null != r || sG(e) && (n.length || !i.length) || (r = e, e = t, t = this, n = rJ(e, op(e)));
                    var s = !(sG(r) && "chain" in r) || !!r.chain,
                        o = sK(t);
                    return ea(n, function(r) {
                        var i = e[r];
                        t[r] = i, o && (t.prototype[r] = function() {
                            var e = this.__chain__;
                            if (s || e) {
                                var r = t(this.__wrapped__);
                                return (r.__actions__ = iF(this.__actions__)).push({
                                    func: i,
                                    args: arguments,
                                    thisArg: t
                                }), r.__chain__ = e, r
                            }
                            return i.apply(t, ed([this.value()], arguments))
                        })
                    }), t
                }

                function o$() {}
                var oV = i2(ef),
                    oG = i2(eh),
                    oJ = i2(em);

                function oQ(t) {
                    return nx(t) ? eE(nU(t)) : function(e) {
                        return rQ(e, t)
                    }
                }
                var oY = i6(),
                    oW = i6(!0);

                function oX() {
                    return []
                }

                function oZ() {
                    return !1
                }
                var o0 = i1(function(t, e) {
                        return t + e
                    }, 0),
                    o1 = i4("ceil"),
                    o2 = i1(function(t, e) {
                        return t / e
                    }, 1),
                    o5 = i4("floor"),
                    o6 = i1(function(t, e) {
                        return t * e
                    }, 1),
                    o3 = i4("round"),
                    o8 = i1(function(t, e) {
                        return t - e
                    }, 0);
                return rp.after = function(t, r) {
                    if ("function" != typeof r) throw new tS(e);
                    return t = s4(t),
                        function() {
                            if (--t < 1) return r.apply(this, arguments)
                        }
                }, rp.ary = sv, rp.assign = or, rp.assignIn = oi, rp.assignInWith = on, rp.assignWith = os, rp.at = oo, rp.before = sb, rp.bind = sw, rp.bindAll = oq, rp.bindKey = s_, rp.castArray = function() {
                    if (!arguments.length) return [];
                    var t = arguments[0];
                    return sL(t) ? t : [t]
                }, rp.chain = si, rp.chunk = function(e, r, i) {
                    r = (i ? nA(e, r, i) : r === t) ? 1 : e2(s4(r), 0);
                    var n = null == e ? 0 : e.length;
                    if (!n || r < 1) return [];
                    for (var s = 0, o = 0, a = tv(eQ(n / r)); s < n;) a[o++] = iy(e, s, s += r);
                    return a
                }, rp.compact = function(t) {
                    for (var e = -1, r = null == t ? 0 : t.length, i = 0, n = []; ++e < r;) {
                        var s = t[e];
                        s && (n[i++] = s)
                    }
                    return n
                }, rp.concat = function() {
                    var t = arguments.length;
                    if (!t) return [];
                    for (var e = tv(t - 1), r = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
                    return ed(sL(r) ? iF(r) : [r], rH(e, 1))
                }, rp.cond = function(t) {
                    var r = null == t ? 0 : t.length,
                        i = nl();
                    return t = r ? ef(t, function(t) {
                        if ("function" != typeof t[1]) throw new tS(e);
                        return [i(t[0]), t[1]]
                    }) : [], id(function(e) {
                        for (var i = -1; ++i < r;) {
                            var n = t[i];
                            if (es(n[0], this, e)) return es(n[1], this, e)
                        }
                    })
                }, rp.conforms = function(t) {
                    var e, r;
                    return r = op(e = rk(t, 1)),
                        function(t) {
                            return rD(t, e, r)
                        }
                }, rp.constant = oL, rp.countBy = so, rp.create = function(t, e) {
                    var r = rg(t);
                    return null == e ? r : rC(r, e)
                }, rp.curry = sA, rp.curryRight = sx, rp.debounce = sE, rp.defaults = oa, rp.defaultsDeep = oh, rp.defer = sI, rp.delay = sS, rp.difference = nz, rp.differenceBy = nF, rp.differenceWith = nH, rp.drop = function(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? iy(e, (r = i || r === t ? 1 : s4(r)) < 0 ? 0 : r, n) : []
                }, rp.dropRight = function(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? iy(e, 0, (r = n - (r = i || r === t ? 1 : s4(r))) < 0 ? 0 : r) : []
                }, rp.dropRightWhile = function(t, e) {
                    return t && t.length ? iM(t, nl(e, 3), !0, !0) : []
                }, rp.dropWhile = function(t, e) {
                    return t && t.length ? iM(t, nl(e, 3), !0) : []
                }, rp.fill = function(e, r, i, n) {
                    var s = null == e ? 0 : e.length;
                    return s ? (i && "number" != typeof i && nA(e, r, i) && (i = 0, n = s), function(e, r, i, n) {
                        var s = e.length;
                        for ((i = s4(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === t || n > s ? s : s4(n)) < 0 && (n += s), n = i > n ? 0 : s9(n); i < n;) e[i++] = r;
                        return e
                    }(e, r, i, n)) : []
                }, rp.filter = function(t, e) {
                    return (sL(t) ? ec : rF)(t, nl(e, 3))
                }, rp.flatMap = function(t, e) {
                    return rH(sp(t, e), 1)
                }, rp.flatMapDeep = function(t, e) {
                    return rH(sp(t, e), n)
                }, rp.flatMapDepth = function(e, r, i) {
                    return i = i === t ? 1 : s4(i), rH(sp(e, r), i)
                }, rp.flatten = nV, rp.flattenDeep = function(t) {
                    return (null == t ? 0 : t.length) ? rH(t, n) : []
                }, rp.flattenDepth = function(e, r) {
                    return (null == e ? 0 : e.length) ? rH(e, r = r === t ? 1 : s4(r)) : []
                }, rp.flip = function(t) {
                    return nt(t, 512)
                }, rp.flow = oU, rp.flowRight = oB, rp.fromPairs = function(t) {
                    for (var e = -1, r = null == t ? 0 : t.length, i = {}; ++e < r;) {
                        var n = t[e];
                        i[n[0]] = n[1]
                    }
                    return i
                }, rp.functions = function(t) {
                    return null == t ? [] : rJ(t, op(t))
                }, rp.functionsIn = function(t) {
                    return null == t ? [] : rJ(t, og(t))
                }, rp.groupBy = sl, rp.initial = function(t) {
                    return (null == t ? 0 : t.length) ? iy(t, 0, -1) : []
                }, rp.intersection = nJ, rp.intersectionBy = nQ, rp.intersectionWith = nY, rp.invert = ol, rp.invertBy = of , rp.invokeMap = sf, rp.iteratee = oz, rp.keyBy = sd, rp.keys = op, rp.keysIn = og, rp.map = sp, rp.mapKeys = function(t, e) {
                    var r = {};
                    return e = nl(e, 3), rV(t, function(t, i, n) {
                        rN(r, e(t, i, n), t)
                    }), r
                }, rp.mapValues = function(t, e) {
                    var r = {};
                    return e = nl(e, 3), rV(t, function(t, i, n) {
                        rN(r, i, e(t, i, n))
                    }), r
                }, rp.matches = function(t) {
                    return ie(rk(t, 1))
                }, rp.matchesProperty = function(t, e) {
                    return ir(t, rk(e, 1))
                }, rp.memoize = sM, rp.merge = om, rp.mergeWith = oy, rp.method = oF, rp.methodOf = oH, rp.mixin = oK, rp.negate = sP, rp.nthArg = function(t) {
                    return t = s4(t), id(function(e) {
                        return is(e, t)
                    })
                }, rp.omit = ov, rp.omitBy = function(t, e) {
                    return ow(t, sP(nl(e)))
                }, rp.once = function(t) {
                    return sb(2, t)
                }, rp.orderBy = function(e, r, i, n) {
                    return null == e ? [] : (sL(r) || (r = null == r ? [] : [r]), sL(i = n ? t : i) || (i = null == i ? [] : [i]), io(e, r, i))
                }, rp.over = oV, rp.overArgs = sR, rp.overEvery = oG, rp.overSome = oJ, rp.partial = sC, rp.partialRight = sN, rp.partition = sg, rp.pick = ob, rp.pickBy = ow, rp.property = oQ, rp.propertyOf = function(e) {
                    return function(r) {
                        return null == e ? t : rQ(e, r)
                    }
                }, rp.pull = nX, rp.pullAll = nZ, rp.pullAllBy = function(t, e, r) {
                    return t && t.length && e && e.length ? ih(t, e, nl(r, 2)) : t
                }, rp.pullAllWith = function(e, r, i) {
                    return e && e.length && r && r.length ? ih(e, r, t, i) : e
                }, rp.pullAt = n0, rp.range = oY, rp.rangeRight = oW, rp.rearg = sO, rp.reject = function(t, e) {
                    return (sL(t) ? ec : rF)(t, sP(nl(e, 3)))
                }, rp.remove = function(t, e) {
                    var r = [];
                    if (!(t && t.length)) return r;
                    var i = -1,
                        n = [],
                        s = t.length;
                    for (e = nl(e, 3); ++i < s;) {
                        var o = t[i];
                        e(o, i, t) && (r.push(o), n.push(i))
                    }
                    return ic(t, n), r
                }, rp.rest = function(r, i) {
                    if ("function" != typeof r) throw new tS(e);
                    return id(r, i = i === t ? i : s4(i))
                }, rp.reverse = n1, rp.sampleSize = function(e, r, i) {
                    return r = (i ? nA(e, r, i) : r === t) ? 1 : s4(r), (sL(e) ? function(t, e) {
                        return nq(iF(t), rT(e, 0, t.length))
                    } : function(t, e) {
                        var r = ox(t);
                        return nq(r, rT(e, 0, r.length))
                    })(e, r)
                }, rp.set = function(t, e, r) {
                    return null == t ? t : ip(t, e, r)
                }, rp.setWith = function(e, r, i, n) {
                    return n = "function" == typeof n ? n : t, null == e ? e : ip(e, r, i, n)
                }, rp.shuffle = function(t) {
                    return (sL(t) ? function(t) {
                        return nq(iF(t))
                    } : function(t) {
                        return nq(ox(t))
                    })(t)
                }, rp.slice = function(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? (i && "number" != typeof i && nA(e, r, i) ? (r = 0, i = n) : (r = null == r ? 0 : s4(r), i = i === t ? n : s4(i)), iy(e, r, i)) : []
                }, rp.sortBy = sm, rp.sortedUniq = function(t) {
                    return t && t.length ? i_(t) : []
                }, rp.sortedUniqBy = function(t, e) {
                    return t && t.length ? i_(t, nl(e, 2)) : []
                }, rp.split = function(e, r, i) {
                    return i && "number" != typeof i && nA(e, r, i) && (r = i = t), (i = i === t ? 0xffffffff : i >>> 0) ? (e = oe(e)) && ("string" == typeof r || null != r && !sX(r)) && !(r = ix(r)) && eU(e) ? ik(eK(e), 0, i) : e.split(r, i) : []
                }, rp.spread = function(t, r) {
                    if ("function" != typeof t) throw new tS(e);
                    return r = null == r ? 0 : e2(s4(r), 0), id(function(e) {
                        var i = e[r],
                            n = ik(e, 0, r);
                        return i && ed(n, i), es(t, this, n)
                    })
                }, rp.tail = function(t) {
                    var e = null == t ? 0 : t.length;
                    return e ? iy(t, 1, e) : []
                }, rp.take = function(e, r, i) {
                    return e && e.length ? iy(e, 0, (r = i || r === t ? 1 : s4(r)) < 0 ? 0 : r) : []
                }, rp.takeRight = function(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? iy(e, (r = n - (r = i || r === t ? 1 : s4(r))) < 0 ? 0 : r, n) : []
                }, rp.takeRightWhile = function(t, e) {
                    return t && t.length ? iM(t, nl(e, 3), !1, !0) : []
                }, rp.takeWhile = function(t, e) {
                    return t && t.length ? iM(t, nl(e, 3)) : []
                }, rp.tap = function(t, e) {
                    return e(t), t
                }, rp.throttle = function(t, r, i) {
                    var n = !0,
                        s = !0;
                    if ("function" != typeof t) throw new tS(e);
                    return sG(i) && (n = "leading" in i ? !!i.leading : n, s = "trailing" in i ? !!i.trailing : s), sE(t, r, {
                        leading: n,
                        maxWait: r,
                        trailing: s
                    })
                }, rp.thru = sn, rp.toArray = s3, rp.toPairs = o_, rp.toPairsIn = oA, rp.toPath = function(t) {
                    return sL(t) ? ef(t, nU) : s1(t) ? [t] : iF(nL(oe(t)))
                }, rp.toPlainObject = ot, rp.transform = function(t, e, r) {
                    var i = sL(t),
                        n = i || sz(t) || s2(t);
                    if (e = nl(e, 4), null == r) {
                        var s = t && t.constructor;
                        r = n ? i ? new s : [] : sG(t) && sK(s) ? rg(tV(t)) : {}
                    }
                    return (n ? ea : rV)(t, function(t, i, n) {
                        return e(r, t, i, n)
                    }), r
                }, rp.unary = function(t) {
                    return sv(t, 1)
                }, rp.union = n2, rp.unionBy = n5, rp.unionWith = n6, rp.uniq = function(t) {
                    return t && t.length ? iE(t) : []
                }, rp.uniqBy = function(t, e) {
                    return t && t.length ? iE(t, nl(e, 2)) : []
                }, rp.uniqWith = function(e, r) {
                    return r = "function" == typeof r ? r : t, e && e.length ? iE(e, t, r) : []
                }, rp.unset = function(t, e) {
                    return null == t || iI(t, e)
                }, rp.unzip = n3, rp.unzipWith = n8, rp.update = function(t, e, r) {
                    return null == t ? t : iS(t, e, iO(r))
                }, rp.updateWith = function(e, r, i, n) {
                    return n = "function" == typeof n ? n : t, null == e ? e : iS(e, r, iO(i), n)
                }, rp.values = ox, rp.valuesIn = function(t) {
                    return null == t ? [] : eN(t, og(t))
                }, rp.without = n4, rp.words = ok, rp.wrap = function(t, e) {
                    return sC(iO(e), t)
                }, rp.xor = n9, rp.xorBy = n7, rp.xorWith = st, rp.zip = se, rp.zipObject = function(t, e) {
                    return iC(t || [], e || [], rM)
                }, rp.zipObjectDeep = function(t, e) {
                    return iC(t || [], e || [], ip)
                }, rp.zipWith = sr, rp.entries = o_, rp.entriesIn = oA, rp.extend = oi, rp.extendWith = on, oK(rp, rp), rp.add = o0, rp.attempt = oD, rp.camelCase = oE, rp.capitalize = oI, rp.ceil = o1, rp.clamp = function(e, r, i) {
                    return i === t && (i = r, r = t), i !== t && (i = (i = s7(i)) == i ? i : 0), r !== t && (r = (r = s7(r)) == r ? r : 0), rT(s7(e), r, i)
                }, rp.clone = function(t) {
                    return rk(t, 4)
                }, rp.cloneDeep = function(t) {
                    return rk(t, 5)
                }, rp.cloneDeepWith = function(e, r) {
                    return rk(e, 5, r = "function" == typeof r ? r : t)
                }, rp.cloneWith = function(e, r) {
                    return rk(e, 4, r = "function" == typeof r ? r : t)
                }, rp.conformsTo = function(t, e) {
                    return null == e || rD(t, e, op(e))
                }, rp.deburr = oS, rp.defaultTo = function(t, e) {
                    return null == t || t != t ? e : t
                }, rp.divide = o2, rp.endsWith = function(e, r, i) {
                    e = oe(e), r = ix(r);
                    var n = e.length,
                        s = i = i === t ? n : rT(s4(i), 0, n);
                    return (i -= r.length) >= 0 && e.slice(i, s) == r
                }, rp.eq = sT, rp.escape = function(t) {
                    return (t = oe(t)) && z.test(t) ? t.replace(B, eq) : t
                }, rp.escapeRegExp = function(t) {
                    return (t = oe(t)) && Q.test(t) ? t.replace(J, "\\$&") : t
                }, rp.every = function(e, r, i) {
                    var n = sL(e) ? eh : rj;
                    return i && nA(e, r, i) && (r = t), n(e, nl(r, 3))
                }, rp.find = sa, rp.findIndex = nK, rp.findKey = function(t, e) {
                    return ev(t, nl(e, 3), rV)
                }, rp.findLast = sh, rp.findLastIndex = n$, rp.findLastKey = function(t, e) {
                    return ev(t, nl(e, 3), rG)
                }, rp.floor = o5, rp.forEach = sc, rp.forEachRight = su, rp.forIn = function(t, e) {
                    return null == t ? t : rK(t, nl(e, 3), og)
                }, rp.forInRight = function(t, e) {
                    return null == t ? t : r$(t, nl(e, 3), og)
                }, rp.forOwn = function(t, e) {
                    return t && rV(t, nl(e, 3))
                }, rp.forOwnRight = function(t, e) {
                    return t && rG(t, nl(e, 3))
                }, rp.get = oc, rp.gt = sk, rp.gte = sD, rp.has = function(t, e) {
                    return null != t && nv(t, e, rZ)
                }, rp.hasIn = ou, rp.head = nG, rp.identity = oj, rp.includes = function(t, e, r, i) {
                    t = sB(t) ? t : ox(t), r = r && !i ? s4(r) : 0;
                    var n = t.length;
                    return r < 0 && (r = e2(n + r, 0)), s0(t) ? r <= n && t.indexOf(e, r) > -1 : !!n && ew(t, e, r) > -1
                }, rp.indexOf = function(t, e, r) {
                    var i = null == t ? 0 : t.length;
                    if (!i) return -1;
                    var n = null == r ? 0 : s4(r);
                    return n < 0 && (n = e2(i + n, 0)), ew(t, e, n)
                }, rp.inRange = function(e, r, i) {
                    var n, s, o;
                    return r = s8(r), i === t ? (i = r, r = 0) : i = s8(i), (n = e = s7(e)) >= e5(s = r, o = i) && n < e2(s, o)
                }, rp.invoke = od, rp.isArguments = sq, rp.isArray = sL, rp.isArrayBuffer = sU, rp.isArrayLike = sB, rp.isArrayLikeObject = sj, rp.isBoolean = function(t) {
                    return !0 === t || !1 === t || sJ(t) && rW(t) == u
                }, rp.isBuffer = sz, rp.isDate = sF, rp.isElement = function(t) {
                    return sJ(t) && 1 === t.nodeType && !sW(t)
                }, rp.isEmpty = function(t) {
                    if (null == t) return !0;
                    if (sB(t) && (sL(t) || "string" == typeof t || "function" == typeof t.splice || sz(t) || s2(t) || sq(t))) return !t.length;
                    var e = ny(t);
                    if (e == g || e == w) return !t.size;
                    if (nS(t)) return !r9(t).length;
                    for (var r in t)
                        if (tO.call(t, r)) return !1;
                    return !0
                }, rp.isEqual = function(t, e) {
                    return r6(t, e)
                }, rp.isEqualWith = function(e, r, i) {
                    var n = (i = "function" == typeof i ? i : t) ? i(e, r) : t;
                    return n === t ? r6(e, r, t, i) : !!n
                }, rp.isError = sH, rp.isFinite = function(t) {
                    return "number" == typeof t && eZ(t)
                }, rp.isFunction = sK, rp.isInteger = s$, rp.isLength = sV, rp.isMap = sQ, rp.isMatch = function(t, e) {
                    return t === e || r3(t, e, nd(e))
                }, rp.isMatchWith = function(e, r, i) {
                    return i = "function" == typeof i ? i : t, r3(e, r, nd(r), i)
                }, rp.isNaN = function(t) {
                    return sY(t) && t != +t
                }, rp.isNative = function(t) {
                    if (nI(t)) throw new tw("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                    return r8(t)
                }, rp.isNil = function(t) {
                    return null == t
                }, rp.isNull = function(t) {
                    return null === t
                }, rp.isNumber = sY, rp.isObject = sG, rp.isObjectLike = sJ, rp.isPlainObject = sW, rp.isRegExp = sX, rp.isSafeInteger = function(t) {
                    return s$(t) && t >= -0x1fffffffffffff && t <= 0x1fffffffffffff
                }, rp.isSet = sZ, rp.isString = s0, rp.isSymbol = s1, rp.isTypedArray = s2, rp.isUndefined = function(e) {
                    return e === t
                }, rp.isWeakMap = function(t) {
                    return sJ(t) && ny(t) == x
                }, rp.isWeakSet = function(t) {
                    return sJ(t) && "[object WeakSet]" == rW(t)
                }, rp.join = function(t, e) {
                    return null == t ? "" : e0.call(t, e)
                }, rp.kebabCase = oM, rp.last = nW, rp.lastIndexOf = function(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var s = n;
                    return i !== t && (s = (s = s4(i)) < 0 ? e2(n + s, 0) : e5(s, n - 1)), r == r ? function(t, e, r) {
                        for (var i = r + 1; i-- && t[i] !== e;);
                        return i
                    }(e, r, s) : eb(e, eA, s, !0)
                }, rp.lowerCase = oP, rp.lowerFirst = oR, rp.lt = s5, rp.lte = s6, rp.max = function(e) {
                    return e && e.length ? rz(e, oj, rX) : t
                }, rp.maxBy = function(e, r) {
                    return e && e.length ? rz(e, nl(r, 2), rX) : t
                }, rp.mean = function(t) {
                    return ex(t, oj)
                }, rp.meanBy = function(t, e) {
                    return ex(t, nl(e, 2))
                }, rp.min = function(e) {
                    return e && e.length ? rz(e, oj, r7) : t
                }, rp.minBy = function(e, r) {
                    return e && e.length ? rz(e, nl(r, 2), r7) : t
                }, rp.stubArray = oX, rp.stubFalse = oZ, rp.stubObject = function() {
                    return {}
                }, rp.stubString = function() {
                    return ""
                }, rp.stubTrue = function() {
                    return !0
                }, rp.multiply = o6, rp.nth = function(e, r) {
                    return e && e.length ? is(e, s4(r)) : t
                }, rp.noConflict = function() {
                    return t5._ === this && (t5._ = tL), this
                }, rp.noop = o$, rp.now = sy, rp.pad = function(t, e, r) {
                    t = oe(t);
                    var i = (e = s4(e)) ? eH(t) : 0;
                    if (!e || i >= e) return t;
                    var n = (e - i) / 2;
                    return i5(eY(n), r) + t + i5(eQ(n), r)
                }, rp.padEnd = function(t, e, r) {
                    t = oe(t);
                    var i = (e = s4(e)) ? eH(t) : 0;
                    return e && i < e ? t + i5(e - i, r) : t
                }, rp.padStart = function(t, e, r) {
                    t = oe(t);
                    var i = (e = s4(e)) ? eH(t) : 0;
                    return e && i < e ? i5(e - i, r) + t : t
                }, rp.parseInt = function(t, e, r) {
                    return r || null == e ? e = 0 : e && (e *= 1), e3(oe(t).replace(Y, ""), e || 0)
                }, rp.random = function(e, r, i) {
                    if (i && "boolean" != typeof i && nA(e, r, i) && (r = i = t), i === t && ("boolean" == typeof r ? (i = r, r = t) : "boolean" == typeof e && (i = e, e = t)), e === t && r === t ? (e = 0, r = 1) : (e = s8(e), r === t ? (r = e, e = 0) : r = s8(r)), e > r) {
                        var n = e;
                        e = r, r = n
                    }
                    if (i || e % 1 || r % 1) {
                        var s = e8();
                        return e5(e + s * (r - e + tZ("1e-" + ((s + "").length - 1))), r)
                    }
                    return iu(e, r)
                }, rp.reduce = function(t, e, r) {
                    var i = sL(t) ? ep : eS,
                        n = arguments.length < 3;
                    return i(t, nl(e, 4), r, n, rU)
                }, rp.reduceRight = function(t, e, r) {
                    var i = sL(t) ? eg : eS,
                        n = arguments.length < 3;
                    return i(t, nl(e, 4), r, n, rB)
                }, rp.repeat = function(e, r, i) {
                    return r = (i ? nA(e, r, i) : r === t) ? 1 : s4(r), il(oe(e), r)
                }, rp.replace = function() {
                    var t = arguments,
                        e = oe(t[0]);
                    return t.length < 3 ? e : e.replace(t[1], t[2])
                }, rp.result = function(e, r, i) {
                    r = iT(r, e);
                    var n = -1,
                        s = r.length;
                    for (s || (s = 1, e = t); ++n < s;) {
                        var o = null == e ? t : e[nU(r[n])];
                        o === t && (n = s, o = i), e = sK(o) ? o.call(e) : o
                    }
                    return e
                }, rp.round = o3, rp.runInContext = c, rp.sample = function(t) {
                    return (sL(t) ? rI : function(t) {
                        return rI(ox(t))
                    })(t)
                }, rp.size = function(t) {
                    if (null == t) return 0;
                    if (sB(t)) return s0(t) ? eH(t) : t.length;
                    var e = ny(t);
                    return e == g || e == w ? t.size : r9(t).length
                }, rp.snakeCase = oC, rp.some = function(e, r, i) {
                    var n = sL(e) ? em : iv;
                    return i && nA(e, r, i) && (r = t), n(e, nl(r, 3))
                }, rp.sortedIndex = function(t, e) {
                    return ib(t, e)
                }, rp.sortedIndexBy = function(t, e, r) {
                    return iw(t, e, nl(r, 2))
                }, rp.sortedIndexOf = function(t, e) {
                    var r = null == t ? 0 : t.length;
                    if (r) {
                        var i = ib(t, e);
                        if (i < r && sT(t[i], e)) return i
                    }
                    return -1
                }, rp.sortedLastIndex = function(t, e) {
                    return ib(t, e, !0)
                }, rp.sortedLastIndexBy = function(t, e, r) {
                    return iw(t, e, nl(r, 2), !0)
                }, rp.sortedLastIndexOf = function(t, e) {
                    if (null == t ? 0 : t.length) {
                        var r = ib(t, e, !0) - 1;
                        if (sT(t[r], e)) return r
                    }
                    return -1
                }, rp.startCase = oN, rp.startsWith = function(t, e, r) {
                    return t = oe(t), r = null == r ? 0 : rT(s4(r), 0, t.length), e = ix(e), t.slice(r, r + e.length) == e
                }, rp.subtract = o8, rp.sum = function(t) {
                    return t && t.length ? eM(t, oj) : 0
                }, rp.sumBy = function(t, e) {
                    return t && t.length ? eM(t, nl(e, 2)) : 0
                }, rp.template = function(e, r, i) {
                    var n = rp.templateSettings;
                    i && nA(e, r, i) && (r = t), e = oe(e), r = on({}, r, n, ne);
                    var s, o, a = on({}, r.imports, n.imports, ne),
                        h = op(a),
                        c = eN(a, h),
                        u = 0,
                        l = r.interpolate || tf,
                        f = "__p += '",
                        d = tE((r.escape || tf).source + "|" + l.source + "|" + (l === K ? tn : tf).source + "|" + (r.evaluate || tf).source + "|$", "g"),
                        p = "//# sourceURL=" + (tO.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++tQ + "]") + `
`;
                    e.replace(d, function(t, r, i, n, a, h) {
                        return i || (i = n), f += e.slice(u, h).replace(td, eL), r && (s = !0, f += `' +
__e(` + r + `) +
'`), a && (o = !0, f += `';
` + a + `;
__p += '`), i && (f += `' +
((__t = (` + i + `)) == null ? '' : __t) +
'`), u = h + t.length, t
                    }), f += `';
`;
                    var g = tO.call(r, "variable") && r.variable;
                    if (g) {
                        if (tr.test(g)) throw new tw("Invalid `variable` option passed into `_.template`")
                    } else f = `with (obj) {
` + f + `
}
`;
                    f = (o ? f.replace(D, "") : f).replace(q, "$1").replace(L, "$1;"), f = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + f + `return __p
}`;
                    var m = oD(function() {
                        return t_(h, p + "return " + f).apply(t, c)
                    });
                    if (m.source = f, sH(m)) throw m;
                    return m
                }, rp.times = function(t, e) {
                    if ((t = s4(t)) < 1 || t > 0x1fffffffffffff) return [];
                    var r = 0xffffffff,
                        i = e5(t, 0xffffffff);
                    e = nl(e), t -= 0xffffffff;
                    for (var n = eP(i, e); ++r < t;) e(r);
                    return n
                }, rp.toFinite = s8, rp.toInteger = s4, rp.toLength = s9, rp.toLower = function(t) {
                    return oe(t).toLowerCase()
                }, rp.toNumber = s7, rp.toSafeInteger = function(t) {
                    return t ? rT(s4(t), -0x1fffffffffffff, 0x1fffffffffffff) : 0 === t ? t : 0
                }, rp.toString = oe, rp.toUpper = function(t) {
                    return oe(t).toUpperCase()
                }, rp.trim = function(e, r, i) {
                    if ((e = oe(e)) && (i || r === t)) return eR(e);
                    if (!e || !(r = ix(r))) return e;
                    var n = eK(e),
                        s = eK(r),
                        o = eT(n, s),
                        a = ek(n, s) + 1;
                    return ik(n, o, a).join("")
                }, rp.trimEnd = function(e, r, i) {
                    if ((e = oe(e)) && (i || r === t)) return e.slice(0, e$(e) + 1);
                    if (!e || !(r = ix(r))) return e;
                    var n = eK(e),
                        s = ek(n, eK(r)) + 1;
                    return ik(n, 0, s).join("")
                }, rp.trimStart = function(e, r, i) {
                    if ((e = oe(e)) && (i || r === t)) return e.replace(Y, "");
                    if (!e || !(r = ix(r))) return e;
                    var n = eK(e),
                        s = eT(n, eK(r));
                    return ik(n, s).join("")
                }, rp.truncate = function(e, r) {
                    var i = 30,
                        n = "...";
                    if (sG(r)) {
                        var s = "separator" in r ? r.separator : s;
                        i = "length" in r ? s4(r.length) : i, n = "omission" in r ? ix(r.omission) : n
                    }
                    var o = (e = oe(e)).length;
                    if (eU(e)) {
                        var a = eK(e);
                        o = a.length
                    }
                    if (i >= o) return e;
                    var h = i - eH(n);
                    if (h < 1) return n;
                    var c = a ? ik(a, 0, h).join("") : e.slice(0, h);
                    if (s === t) return c + n;
                    if (a && (h += c.length - h), sX(s)) {
                        if (e.slice(h).search(s)) {
                            var u, l = c;
                            for (s.global || (s = tE(s.source, oe(ts.exec(s)) + "g")), s.lastIndex = 0; u = s.exec(l);) var f = u.index;
                            c = c.slice(0, f === t ? h : f)
                        }
                    } else if (e.indexOf(ix(s), h) != h) {
                        var d = c.lastIndexOf(s);
                        d > -1 && (c = c.slice(0, d))
                    }
                    return c + n
                }, rp.unescape = function(t) {
                    return (t = oe(t)) && j.test(t) ? t.replace(U, eV) : t
                }, rp.uniqueId = function(t) {
                    var e = ++tT;
                    return oe(t) + e
                }, rp.upperCase = oO, rp.upperFirst = oT, rp.each = sc, rp.eachRight = su, rp.first = nG, oK(rp, (ty = {}, rV(rp, function(t, e) {
                    tO.call(rp.prototype, e) || (ty[e] = t)
                }), ty), {
                    chain: !1
                }), rp.VERSION = "4.17.21", ea(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
                    rp[t].placeholder = rp
                }), ea(["drop", "take"], function(e, r) {
                    rv.prototype[e] = function(i) {
                        i = i === t ? 1 : e2(s4(i), 0);
                        var n = this.__filtered__ && !r ? new rv(this) : this.clone();
                        return n.__filtered__ ? n.__takeCount__ = e5(i, n.__takeCount__) : n.__views__.push({
                            size: e5(i, 0xffffffff),
                            type: e + (n.__dir__ < 0 ? "Right" : "")
                        }), n
                    }, rv.prototype[e + "Right"] = function(t) {
                        return this.reverse()[e](t).reverse()
                    }
                }), ea(["filter", "map", "takeWhile"], function(t, e) {
                    var r = e + 1,
                        i = 1 == r || 3 == r;
                    rv.prototype[t] = function(t) {
                        var e = this.clone();
                        return e.__iteratees__.push({
                            iteratee: nl(t, 3),
                            type: r
                        }), e.__filtered__ = e.__filtered__ || i, e
                    }
                }), ea(["head", "last"], function(t, e) {
                    var r = "take" + (e ? "Right" : "");
                    rv.prototype[t] = function() {
                        return this[r](1).value()[0]
                    }
                }), ea(["initial", "tail"], function(t, e) {
                    var r = "drop" + (e ? "" : "Right");
                    rv.prototype[t] = function() {
                        return this.__filtered__ ? new rv(this) : this[r](1)
                    }
                }), rv.prototype.compact = function() {
                    return this.filter(oj)
                }, rv.prototype.find = function(t) {
                    return this.filter(t).head()
                }, rv.prototype.findLast = function(t) {
                    return this.reverse().find(t)
                }, rv.prototype.invokeMap = id(function(t, e) {
                    return "function" == typeof t ? new rv(this) : this.map(function(r) {
                        return r2(r, t, e)
                    })
                }), rv.prototype.reject = function(t) {
                    return this.filter(sP(nl(t)))
                }, rv.prototype.slice = function(e, r) {
                    e = s4(e);
                    var i = this;
                    return i.__filtered__ && (e > 0 || r < 0) ? new rv(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), r !== t && (i = (r = s4(r)) < 0 ? i.dropRight(-r) : i.take(r - e)), i)
                }, rv.prototype.takeRightWhile = function(t) {
                    return this.reverse().takeWhile(t).reverse()
                }, rv.prototype.toArray = function() {
                    return this.take(0xffffffff)
                }, rV(rv.prototype, function(e, r) {
                    var i = /^(?:filter|find|map|reject)|While$/.test(r),
                        n = /^(?:head|last)$/.test(r),
                        s = rp[n ? "take" + ("last" == r ? "Right" : "") : r],
                        o = n || /^find/.test(r);
                    s && (rp.prototype[r] = function() {
                        var r = this.__wrapped__,
                            a = n ? [1] : arguments,
                            h = r instanceof rv,
                            c = a[0],
                            u = h || sL(r),
                            l = function(t) {
                                var e = s.apply(rp, ed([t], a));
                                return n && f ? e[0] : e
                            };
                        u && i && "function" == typeof c && 1 != c.length && (h = u = !1);
                        var f = this.__chain__,
                            d = !!this.__actions__.length,
                            p = o && !f,
                            g = h && !d;
                        if (!o && u) {
                            r = g ? r : new rv(this);
                            var m = e.apply(r, a);
                            return m.__actions__.push({
                                func: sn,
                                args: [l],
                                thisArg: t
                            }), new ry(m, f)
                        }
                        return p && g ? e.apply(this, a) : (m = this.thru(l), p ? n ? m.value()[0] : m.value() : m)
                    })
                }), ea(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
                    var e = tM[t],
                        r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                        i = /^(?:pop|shift)$/.test(t);
                    rp.prototype[t] = function() {
                        var t = arguments;
                        if (i && !this.__chain__) {
                            var n = this.value();
                            return e.apply(sL(n) ? n : [], t)
                        }
                        return this[r](function(r) {
                            return e.apply(sL(r) ? r : [], t)
                        })
                    }
                }), rV(rv.prototype, function(t, e) {
                    var r = rp[e];
                    if (r) {
                        var i = r.name + "";
                        tO.call(rs, i) || (rs[i] = []), rs[i].push({
                            name: e,
                            func: r
                        })
                    }
                }), rs[iZ(t, 2).name] = [{
                    name: "wrapper",
                    func: t
                }], rv.prototype.clone = function() {
                    var t = new rv(this.__wrapped__);
                    return t.__actions__ = iF(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = iF(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = iF(this.__views__), t
                }, rv.prototype.reverse = function() {
                    if (this.__filtered__) {
                        var t = new rv(this);
                        t.__dir__ = -1, t.__filtered__ = !0
                    } else t = this.clone(), t.__dir__ *= -1;
                    return t
                }, rv.prototype.value = function() {
                    var t = this.__wrapped__.value(),
                        e = this.__dir__,
                        r = sL(t),
                        i = e < 0,
                        n = r ? t.length : 0,
                        s = function(t, e, r) {
                            for (var i = -1, n = r.length; ++i < n;) {
                                var s = r[i],
                                    o = s.size;
                                switch (s.type) {
                                    case "drop":
                                        t += o;
                                        break;
                                    case "dropRight":
                                        e -= o;
                                        break;
                                    case "take":
                                        e = e5(e, t + o);
                                        break;
                                    case "takeRight":
                                        t = e2(t, e - o)
                                }
                            }
                            return {
                                start: t,
                                end: e
                            }
                        }(0, n, this.__views__),
                        o = s.start,
                        a = s.end,
                        h = a - o,
                        c = i ? a : o - 1,
                        u = this.__iteratees__,
                        l = u.length,
                        f = 0,
                        d = e5(h, this.__takeCount__);
                    if (!r || !i && n == h && d == h) return iP(t, this.__actions__);
                    var p = [];
                    t: for (; h-- && f < d;) {
                        c += e;
                        for (var g = -1, m = t[c]; ++g < l;) {
                            var y = u[g],
                                v = y.iteratee,
                                b = y.type,
                                w = v(m);
                            if (2 == b) m = w;
                            else if (!w) {
                                if (1 == b) continue t;
                                break t
                            }
                        }
                        p[f++] = m
                    }
                    return p
                }, rp.prototype.at = ss, rp.prototype.chain = function() {
                    return si(this)
                }, rp.prototype.commit = function() {
                    return new ry(this.value(), this.__chain__)
                }, rp.prototype.next = function() {
                    this.__values__ === t && (this.__values__ = s3(this.value()));
                    var e = this.__index__ >= this.__values__.length,
                        r = e ? t : this.__values__[this.__index__++];
                    return {
                        done: e,
                        value: r
                    }
                }, rp.prototype.plant = function(e) {
                    for (var r, i = this; i instanceof rm;) {
                        var n = nj(i);
                        n.__index__ = 0, n.__values__ = t, r ? s.__wrapped__ = n : r = n;
                        var s = n;
                        i = i.__wrapped__
                    }
                    return s.__wrapped__ = e, r
                }, rp.prototype.reverse = function() {
                    var e = this.__wrapped__;
                    if (e instanceof rv) {
                        var r = e;
                        return this.__actions__.length && (r = new rv(this)), (r = r.reverse()).__actions__.push({
                            func: sn,
                            args: [n1],
                            thisArg: t
                        }), new ry(r, this.__chain__)
                    }
                    return this.thru(n1)
                }, rp.prototype.toJSON = rp.prototype.valueOf = rp.prototype.value = function() {
                    return iP(this.__wrapped__, this.__actions__)
                }, rp.prototype.first = rp.prototype.head, t3 && (rp.prototype[t3] = function() {
                    return this
                }), rp
            }();
        t3 ? ((t3.exports = eG)._ = eG, t6._ = eG) : t5._ = eG
    }).call(ah);
    var au = Object.defineProperty,
        al = Object.defineProperties,
        af = Object.getOwnPropertyDescriptors,
        ad = Object.getOwnPropertySymbols,
        ap = Object.prototype.hasOwnProperty,
        ag = Object.prototype.propertyIsEnumerable,
        am = (t, e, r) => e in t ? au(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        ay = (t, e) => {
            for (var r in e || (e = {})) ap.call(e, r) && am(t, r, e[r]);
            if (ad)
                for (var r of ad(e)) ag.call(e, r) && am(t, r, e[r]);
            return t
        },
        av = (t, e) => al(t, af(e));

    function ab(t, e, r) {
        var i;
        let n = $(t);
        return (null == (i = e.rpcMap) ? void 0 : i[n.reference]) || `${an}?chainId=${n.namespace}:${n.reference}&projectId=${r}`
    }

    function aw(t) {
        return t.includes(":") ? t.split(":")[1] : t
    }

    function a_(t) {
        return t.map(t => `${t.split(":")[0]}:${t.split(":")[1]}`)
    }

    function aA(t = {}, e = {}) {
        let r = ax(t),
            i = ax(e);
        return ac.exports.merge(r, i)
    }

    function ax(t) {
        var e, r, i, n;
        let s = {};
        if (!i3(t)) return s;
        for (let [o, a] of Object.entries(t)) {
            let t = iW(o) ? [o] : a.chains,
                h = a.methods || [],
                c = a.events || [],
                u = a.rpcMap || {},
                l = iX(o);
            s[l] = av(ay(ay({}, s[l]), a), {
                chains: tb(t, null == (e = s[l]) ? void 0 : e.chains),
                methods: tb(h, null == (r = s[l]) ? void 0 : r.methods),
                events: tb(c, null == (i = s[l]) ? void 0 : i.events),
                rpcMap: ay(ay({}, u), null == (n = s[l]) ? void 0 : n.rpcMap)
            })
        }
        return s
    }

    function aE(t) {
        return t.includes(":") ? t.split(":")[2] : t
    }

    function aI(t) {
        let e = {};
        for (let [r, i] of Object.entries(t)) {
            let t = i.methods || [],
                n = i.events || [],
                s = i.accounts || [],
                o = iW(r) ? [r] : i.chains ? i.chains : a_(i.accounts);
            e[r] = {
                chains: o,
                methods: t,
                events: n,
                accounts: s
            }
        }
        return e
    }

    function aS(t) {
        return "number" == typeof t ? t : t.includes("0x") ? parseInt(t, 16) : isNaN(Number(t = t.includes(":") ? t.split(":")[1] : t)) ? t : Number(t)
    }
    let aM = {},
        aP = t => aM[t],
        aR = (t, e) => {
            aM[t] = e
        };
    class aC {
        constructor(t) {
            this.name = "polkadot", this.namespace = t.namespace, this.events = aP("events"), this.client = aP("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
        }
        updateNamespace(t) {
            this.namespace = Object.assign(this.namespace, t)
        }
        requestAccounts() {
            return this.getAccounts()
        }
        getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let t = this.namespace.chains[0];
            if (!t) throw Error("ChainId not found");
            return t.split(":")[1]
        }
        request(t) {
            return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
        }
        setDefaultChain(t, e) {
            this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(aa, `${this.name}:${t}`)
        }
        getAccounts() {
            let t = this.namespace.accounts;
            return t && t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || []
        }
        createHttpProviders() {
            let t = {};
            return this.namespace.chains.forEach(e => {
                var r;
                let i = aw(e);
                t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
            }), t
        }
        getHttpProvider() {
            let t = `${this.name}:${this.chainId}`,
                e = this.httpProviders[t];
            if (typeof e > "u") throw Error(`JSON-RPC provider for ${t} not found`);
            return e
        }
        setHttpProvider(t, e) {
            let r = this.createHttpProvider(t, e);
            r && (this.httpProviders[t] = r)
        }
        createHttpProvider(t, e) {
            let r = e || ab(t, this.namespace, this.client.core.projectId);
            return new nC.JsonRpcProvider(new ae.default(r, aP("disableProviderPing")))
        }
    }
    var aN = Object.defineProperty,
        aO = Object.defineProperties,
        aT = Object.getOwnPropertyDescriptors,
        ak = Object.getOwnPropertySymbols,
        aD = Object.prototype.hasOwnProperty,
        aq = Object.prototype.propertyIsEnumerable,
        aL = (t, e, r) => e in t ? aN(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        aU = (t, e) => {
            for (var r in e || (e = {})) aD.call(e, r) && aL(t, r, e[r]);
            if (ak)
                for (var r of ak(e)) aq.call(e, r) && aL(t, r, e[r]);
            return t
        };
    class aB {
        constructor(t) {
            this.name = "eip155", this.namespace = t.namespace, this.events = aP("events"), this.client = aP("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
        }
        async request(t) {
            switch (t.request.method) {
                case "eth_requestAccounts":
                case "eth_accounts":
                    return this.getAccounts();
                case "wallet_switchEthereumChain":
                    return await this.handleSwitchChain(t);
                case "eth_chainId":
                    return parseInt(this.getDefaultChain());
                case "wallet_getCapabilities":
                    return await this.getCapabilities(t);
                case "wallet_getCallsStatus":
                    return await this.getCallStatus(t)
            }
            return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
        }
        updateNamespace(t) {
            this.namespace = Object.assign(this.namespace, t)
        }
        setDefaultChain(t, e) {
            this.httpProviders[t] || this.setHttpProvider(parseInt(t), e), this.chainId = parseInt(t), this.events.emit(aa, `${this.name}:${t}`)
        }
        requestAccounts() {
            return this.getAccounts()
        }
        getDefaultChain() {
            if (this.chainId) return this.chainId.toString();
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let t = this.namespace.chains[0];
            if (!t) throw Error("ChainId not found");
            return t.split(":")[1]
        }
        createHttpProvider(t, e) {
            let r = e || ab(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
            return new nC.JsonRpcProvider(new ae.HttpConnection(r, aP("disableProviderPing")))
        }
        setHttpProvider(t, e) {
            let r = this.createHttpProvider(t, e);
            r && (this.httpProviders[t] = r)
        }
        createHttpProviders() {
            let t = {};
            return this.namespace.chains.forEach(e => {
                var r;
                let i = parseInt(aw(e));
                t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
            }), t
        }
        getAccounts() {
            let t = this.namespace.accounts;
            return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
        }
        getHttpProvider() {
            let t = this.chainId,
                e = this.httpProviders[t];
            if (typeof e > "u") throw Error(`JSON-RPC provider for ${t} not found`);
            return e
        }
        async handleSwitchChain(t) {
            var e, r;
            let i = t.request.params ? null == (e = t.request.params[0]) ? void 0 : e.chainId : "0x0",
                n = parseInt(i = i.startsWith("0x") ? i : `0x${i}`, 16);
            if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
            else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
                topic: t.topic,
                request: {
                    method: t.request.method,
                    params: [{
                        chainId: i
                    }]
                },
                chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
            }), this.setDefaultChain(`${n}`);
            else throw Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
            return null
        }
        isChainApproved(t) {
            return this.namespace.chains.includes(`${this.name}:${t}`)
        }
        async getCapabilities(t) {
            var e, r, i;
            let n = null == (r = null == (e = t.request) ? void 0 : e.params) ? void 0 : r[0];
            if (!n) throw Error("Missing address parameter in `wallet_getCapabilities` request");
            let s = this.client.session.get(t.topic),
                o = (null == (i = s ? .sessionProperties) ? void 0 : i.capabilities) || {};
            if (null != o && o[n]) return o ? .[n];
            let a = await this.client.request(t);
            try {
                let e, r, i, h;
                await this.client.session.update(t.topic, {
                    sessionProperties: (i = aU({}, s.sessionProperties || {}), h = {
                        capabilities: (e = aU({}, o || {}), r = {
                            [n]: a
                        }, aO(e, aT(r)))
                    }, aO(i, aT(h)))
                })
            } catch (t) {
                console.warn("Failed to update session with capabilities", t)
            }
            return a
        }
        async getCallStatus(t) {
            var e, r;
            let i = this.client.session.get(t.topic),
                n = null == (e = i.sessionProperties) ? void 0 : e.bundler_name;
            if (n) {
                let e = this.getBundlerUrl(t.chainId, n);
                try {
                    return await this.getUserOperationReceipt(e, t)
                } catch (t) {
                    console.warn("Failed to fetch call status from bundler", t, e)
                }
            }
            let s = null == (r = i.sessionProperties) ? void 0 : r.bundler_url;
            if (s) try {
                return await this.getUserOperationReceipt(s, t)
            } catch (t) {
                console.warn("Failed to fetch call status from custom bundler", t, s)
            }
            if (this.namespace.methods.includes(t.request.method)) return await this.client.request(t);
            throw Error("Fetching call status not approved by the wallet.")
        }
        async getUserOperationReceipt(t, e) {
            var r;
            let i = new URL(t),
                n = await fetch(i, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify((0, nN.formatJsonRpcRequest)("eth_getUserOperationReceipt", [null == (r = e.request.params) ? void 0 : r[0]]))
                });
            if (!n.ok) throw Error(`Failed to fetch user operation receipt - ${n.status}`);
            return await n.json()
        }
        getBundlerUrl(t, e) {
            return `${ao}?projectId=${this.client.core.projectId}&chainId=${t}&bundler=${e}`
        }
    }
    class aj {
        constructor(t) {
            this.name = "solana", this.namespace = t.namespace, this.events = aP("events"), this.client = aP("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
        }
        updateNamespace(t) {
            this.namespace = Object.assign(this.namespace, t)
        }
        requestAccounts() {
            return this.getAccounts()
        }
        request(t) {
            return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
        }
        setDefaultChain(t, e) {
            this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(aa, `${this.name}:${t}`)
        }
        getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let t = this.namespace.chains[0];
            if (!t) throw Error("ChainId not found");
            return t.split(":")[1]
        }
        getAccounts() {
            let t = this.namespace.accounts;
            return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
        }
        createHttpProviders() {
            let t = {};
            return this.namespace.chains.forEach(e => {
                var r;
                let i = aw(e);
                t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
            }), t
        }
        getHttpProvider() {
            let t = `${this.name}:${this.chainId}`,
                e = this.httpProviders[t];
            if (typeof e > "u") throw Error(`JSON-RPC provider for ${t} not found`);
            return e
        }
        setHttpProvider(t, e) {
            let r = this.createHttpProvider(t, e);
            r && (this.httpProviders[t] = r)
        }
        createHttpProvider(t, e) {
            let r = e || ab(t, this.namespace, this.client.core.projectId);
            return new nC.JsonRpcProvider(new ae.default(r, aP("disableProviderPing")))
        }
    }
    class az {
        constructor(t) {
            this.name = "cosmos", this.namespace = t.namespace, this.events = aP("events"), this.client = aP("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
        }
        updateNamespace(t) {
            this.namespace = Object.assign(this.namespace, t)
        }
        requestAccounts() {
            return this.getAccounts()
        }
        getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let t = this.namespace.chains[0];
            if (!t) throw Error("ChainId not found");
            return t.split(":")[1]
        }
        request(t) {
            return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
        }
        setDefaultChain(t, e) {
            this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(aa, `${this.name}:${this.chainId}`)
        }
        getAccounts() {
            let t = this.namespace.accounts;
            return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
        }
        createHttpProviders() {
            let t = {};
            return this.namespace.chains.forEach(e => {
                var r;
                let i = aw(e);
                t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
            }), t
        }
        getHttpProvider() {
            let t = `${this.name}:${this.chainId}`,
                e = this.httpProviders[t];
            if (typeof e > "u") throw Error(`JSON-RPC provider for ${t} not found`);
            return e
        }
        setHttpProvider(t, e) {
            let r = this.createHttpProvider(t, e);
            r && (this.httpProviders[t] = r)
        }
        createHttpProvider(t, e) {
            let r = e || ab(t, this.namespace, this.client.core.projectId);
            return new nC.JsonRpcProvider(new ae.default(r, aP("disableProviderPing")))
        }
    }
    class aF {
        constructor(t) {
            this.name = "algorand", this.namespace = t.namespace, this.events = aP("events"), this.client = aP("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
        }
        updateNamespace(t) {
            this.namespace = Object.assign(this.namespace, t)
        }
        requestAccounts() {
            return this.getAccounts()
        }
        request(t) {
            return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
        }
        setDefaultChain(t, e) {
            if (!this.httpProviders[t]) {
                let r = e || ab(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
                this.setHttpProvider(t, r)
            }
            this.chainId = t, this.events.emit(aa, `${this.name}:${this.chainId}`)
        }
        getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let t = this.namespace.chains[0];
            if (!t) throw Error("ChainId not found");
            return t.split(":")[1]
        }
        getAccounts() {
            let t = this.namespace.accounts;
            return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
        }
        createHttpProviders() {
            let t = {};
            return this.namespace.chains.forEach(e => {
                var r;
                t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
            }), t
        }
        getHttpProvider() {
            let t = `${this.name}:${this.chainId}`,
                e = this.httpProviders[t];
            if (typeof e > "u") throw Error(`JSON-RPC provider for ${t} not found`);
            return e
        }
        setHttpProvider(t, e) {
            let r = this.createHttpProvider(t, e);
            r && (this.httpProviders[t] = r)
        }
        createHttpProvider(t, e) {
            let r = e || ab(t, this.namespace, this.client.core.projectId);
            return typeof r > "u" ? void 0 : new nC.JsonRpcProvider(new ae.default(r, aP("disableProviderPing")))
        }
    }
    class aH {
        constructor(t) {
            this.name = "cip34", this.namespace = t.namespace, this.events = aP("events"), this.client = aP("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
        }
        updateNamespace(t) {
            this.namespace = Object.assign(this.namespace, t)
        }
        requestAccounts() {
            return this.getAccounts()
        }
        getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let t = this.namespace.chains[0];
            if (!t) throw Error("ChainId not found");
            return t.split(":")[1]
        }
        request(t) {
            return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
        }
        setDefaultChain(t, e) {
            this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(aa, `${this.name}:${this.chainId}`)
        }
        getAccounts() {
            let t = this.namespace.accounts;
            return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
        }
        createHttpProviders() {
            let t = {};
            return this.namespace.chains.forEach(e => {
                let r = this.getCardanoRPCUrl(e),
                    i = aw(e);
                t[i] = this.createHttpProvider(i, r)
            }), t
        }
        getHttpProvider() {
            let t = `${this.name}:${this.chainId}`,
                e = this.httpProviders[t];
            if (typeof e > "u") throw Error(`JSON-RPC provider for ${t} not found`);
            return e
        }
        getCardanoRPCUrl(t) {
            let e = this.namespace.rpcMap;
            if (e) return e[t]
        }
        setHttpProvider(t, e) {
            let r = this.createHttpProvider(t, e);
            r && (this.httpProviders[t] = r)
        }
        createHttpProvider(t, e) {
            let r = e || this.getCardanoRPCUrl(t);
            if (!r) throw Error(`No RPC url provided for chainId: ${t}`);
            return new nC.JsonRpcProvider(new ae.default(r, aP("disableProviderPing")))
        }
    }
    class aK {
        constructor(t) {
            this.name = "elrond", this.namespace = t.namespace, this.events = aP("events"), this.client = aP("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
        }
        updateNamespace(t) {
            this.namespace = Object.assign(this.namespace, t)
        }
        requestAccounts() {
            return this.getAccounts()
        }
        request(t) {
            return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
        }
        setDefaultChain(t, e) {
            this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(aa, `${this.name}:${t}`)
        }
        getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let t = this.namespace.chains[0];
            if (!t) throw Error("ChainId not found");
            return t.split(":")[1]
        }
        getAccounts() {
            let t = this.namespace.accounts;
            return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
        }
        createHttpProviders() {
            let t = {};
            return this.namespace.chains.forEach(e => {
                var r;
                let i = aw(e);
                t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
            }), t
        }
        getHttpProvider() {
            let t = `${this.name}:${this.chainId}`,
                e = this.httpProviders[t];
            if (typeof e > "u") throw Error(`JSON-RPC provider for ${t} not found`);
            return e
        }
        setHttpProvider(t, e) {
            let r = this.createHttpProvider(t, e);
            r && (this.httpProviders[t] = r)
        }
        createHttpProvider(t, e) {
            let r = e || ab(t, this.namespace, this.client.core.projectId);
            return new nC.JsonRpcProvider(new ae.default(r, aP("disableProviderPing")))
        }
    }
    class a$ {
        constructor(t) {
            this.name = "multiversx", this.namespace = t.namespace, this.events = aP("events"), this.client = aP("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
        }
        updateNamespace(t) {
            this.namespace = Object.assign(this.namespace, t)
        }
        requestAccounts() {
            return this.getAccounts()
        }
        request(t) {
            return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
        }
        setDefaultChain(t, e) {
            this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(aa, `${this.name}:${t}`)
        }
        getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let t = this.namespace.chains[0];
            if (!t) throw Error("ChainId not found");
            return t.split(":")[1]
        }
        getAccounts() {
            let t = this.namespace.accounts;
            return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
        }
        createHttpProviders() {
            let t = {};
            return this.namespace.chains.forEach(e => {
                var r;
                let i = aw(e);
                t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
            }), t
        }
        getHttpProvider() {
            let t = `${this.name}:${this.chainId}`,
                e = this.httpProviders[t];
            if (typeof e > "u") throw Error(`JSON-RPC provider for ${t} not found`);
            return e
        }
        setHttpProvider(t, e) {
            let r = this.createHttpProvider(t, e);
            r && (this.httpProviders[t] = r)
        }
        createHttpProvider(t, e) {
            let r = e || ab(t, this.namespace, this.client.core.projectId);
            return new nC.JsonRpcProvider(new ae.default(r, aP("disableProviderPing")))
        }
    }
    class aV {
        constructor(t) {
            this.name = "near", this.namespace = t.namespace, this.events = aP("events"), this.client = aP("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
        }
        updateNamespace(t) {
            this.namespace = Object.assign(this.namespace, t)
        }
        requestAccounts() {
            return this.getAccounts()
        }
        getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let t = this.namespace.chains[0];
            if (!t) throw Error("ChainId not found");
            return t.split(":")[1]
        }
        request(t) {
            return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
        }
        setDefaultChain(t, e) {
            if (this.chainId = t, !this.httpProviders[t]) {
                let r = e || ab(`${this.name}:${t}`, this.namespace);
                this.setHttpProvider(t, r)
            }
            this.events.emit(aa, `${this.name}:${this.chainId}`)
        }
        getAccounts() {
            let t = this.namespace.accounts;
            return t && t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || []
        }
        createHttpProviders() {
            let t = {};
            return this.namespace.chains.forEach(e => {
                var r;
                t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
            }), t
        }
        getHttpProvider() {
            let t = `${this.name}:${this.chainId}`,
                e = this.httpProviders[t];
            if (typeof e > "u") throw Error(`JSON-RPC provider for ${t} not found`);
            return e
        }
        setHttpProvider(t, e) {
            let r = this.createHttpProvider(t, e);
            r && (this.httpProviders[t] = r)
        }
        createHttpProvider(t, e) {
            let r = e || ab(t, this.namespace);
            return typeof r > "u" ? void 0 : new nC.JsonRpcProvider(new ae.default(r, aP("disableProviderPing")))
        }
    }
    class aG {
        constructor(t) {
            this.name = as, this.namespace = t.namespace, this.events = aP("events"), this.client = aP("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
        }
        updateNamespace(t) {
            this.namespace.chains = [...new Set((this.namespace.chains || []).concat(t.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(t.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(t.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(t.events || []))], this.httpProviders = this.createHttpProviders()
        }
        requestAccounts() {
            return this.getAccounts()
        }
        request(t) {
            return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider(t.chainId).request(t.request)
        }
        setDefaultChain(t, e) {
            this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(aa, `${this.name}:${t}`)
        }
        getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let t = this.namespace.chains[0];
            if (!t) throw Error("ChainId not found");
            return t.split(":")[1]
        }
        getAccounts() {
            let t = this.namespace.accounts;
            return t ? [...new Set(t.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
        }
        createHttpProviders() {
            var t, e;
            let r = {};
            return null == (e = null == (t = this.namespace) ? void 0 : t.accounts) || e.forEach(t => {
                let e = $(t);
                r[`${e.namespace}:${e.reference}`] = this.createHttpProvider(t)
            }), r
        }
        getHttpProvider(t) {
            let e = this.httpProviders[t];
            if (typeof e > "u") throw Error(`JSON-RPC provider for ${t} not found`);
            return e
        }
        setHttpProvider(t, e) {
            let r = this.createHttpProvider(t, e);
            r && (this.httpProviders[t] = r)
        }
        createHttpProvider(t, e) {
            let r = e || ab(t, this.namespace, this.client.core.projectId);
            return new nC.JsonRpcProvider(new ae.default(r, aP("disableProviderPing")))
        }
    }
    var aJ = Object.defineProperty,
        aQ = Object.defineProperties,
        aY = Object.getOwnPropertyDescriptors,
        aW = Object.getOwnPropertySymbols,
        aX = Object.prototype.hasOwnProperty,
        aZ = Object.prototype.propertyIsEnumerable,
        a0 = (t, e, r) => e in t ? aJ(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        a1 = (t, e) => {
            for (var r in e || (e = {})) aX.call(e, r) && a0(t, r, e[r]);
            if (aW)
                for (var r of aW(e)) aZ.call(e, r) && a0(t, r, e[r]);
            return t
        };
    class a2 {
        constructor(t) {
            this.events = new g.default, this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = "u" > typeof t ? .logger && "string" != typeof t ? .logger ? t.logger : (0, ng.pino)((0, np.getDefaultLoggerOptions)({
                level: t ? .logger || ar
            })), this.disableProviderPing = t ? .disableProviderPing || !1
        }
        static async init(t) {
            let e = new a2(t);
            return await e.initialize(), e
        }
        async request(t, e, r) {
            let [i, n] = this.validateChain(e);
            if (!this.session) throw Error("Please call connect() before request()");
            return await this.getProvider(i).request({
                request: a1({}, t),
                chainId: `${i}:${n}`,
                topic: this.session.topic,
                expiry: r
            })
        }
        sendAsync(t, e, r, i) {
            let n = new Date().getTime();
            this.request(t, r, i).then(t => e(null, (0, nN.formatJsonRpcResult)(n, t))).catch(t => e(t, void 0))
        }
        async enable() {
            if (!this.client) throw Error("Sign Client not initialized");
            return this.session || await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            }), await this.requestAccounts()
        }
        async disconnect() {
            var t;
            if (!this.session) throw Error("Please call connect() before enable()");
            await this.client.disconnect({
                topic: null == (t = this.session) ? void 0 : t.topic,
                reason: i5("USER_DISCONNECTED")
            }), await this.cleanup()
        }
        async connect(t) {
            if (!this.client) throw Error("Sign Client not initialized");
            if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic)
        }
        async authenticate(t, e) {
            if (!this.client) throw Error("Sign Client not initialized");
            this.setNamespaces(t), await this.cleanupPendingPairings();
            let {
                uri: r,
                response: i
            } = await this.client.authenticate(t, e);
            r && (this.uri = r, this.events.emit("display_uri", r));
            let n = await i();
            if (this.session = n.session, this.session) {
                let t = aI(this.session.namespaces);
                this.namespaces = aA(this.namespaces, t), this.persist("namespaces", this.namespaces), this.onConnect()
            }
            return n
        }
        on(t, e) {
            this.events.on(t, e)
        }
        once(t, e) {
            this.events.once(t, e)
        }
        removeListener(t, e) {
            this.events.removeListener(t, e)
        }
        off(t, e) {
            this.events.off(t, e)
        }
        get isWalletConnect() {
            return !0
        }
        async pair(t) {
            this.shouldAbortPairingAttempt = !1;
            let e = 0;
            do {
                if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                if (e >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                let {
                    uri: r,
                    approval: i
                } = await this.client.connect({
                    pairingTopic: t,
                    requiredNamespaces: this.namespaces,
                    optionalNamespaces: this.optionalNamespaces,
                    sessionProperties: this.sessionProperties
                });
                r && (this.uri = r, this.events.emit("display_uri", r)), await i().then(t => {
                    this.session = t;
                    let e = aI(t.namespaces);
                    this.namespaces = aA(this.namespaces, e), this.persist("namespaces", this.namespaces)
                }).catch(t => {
                    if (t.message !== oB) throw t;
                    e++
                })
            } while (!this.session) return this.onConnect(), this.session
        }
        setDefaultChain(t, e) {
            try {
                if (!this.session) return;
                let [r, i] = this.validateChain(t), n = this.getProvider(r);
                n.name === as ? n.setDefaultChain(`${r}:${i}`, e) : n.setDefaultChain(i, e)
            } catch (t) {
                if (!/Please call connect/.test(t.message)) throw t
            }
        }
        async cleanupPendingPairings(t = {}) {
            this.logger.info("Cleaning up inactive pairings...");
            let e = this.client.pairing.getAll();
            if (i6(e)) {
                for (let r of e) t.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                this.logger.info(`Inactive pairings cleared: ${e.length}`)
            }
        }
        abortPairingAttempt() {
            this.shouldAbortPairingAttempt = !0
        }
        async checkStorage() {
            if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                let t = this.client.session.keys.length - 1;
                this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders()
            }
        }
        async initialize() {
            this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
        }
        async createClient() {
            this.client = this.providerOpts.client || await at.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || ar,
                relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.org",
                projectId: this.providerOpts.projectId,
                metadata: this.providerOpts.metadata,
                storageOptions: this.providerOpts.storageOptions,
                storage: this.providerOpts.storage,
                name: this.providerOpts.name,
                customStoragePrefix: this.providerOpts.customStoragePrefix,
                telemetryEnabled: this.providerOpts.telemetryEnabled
            }), this.logger.trace("SignClient Initialized")
        }
        createProviders() {
            if (!this.client) throw Error("Sign Client not initialized");
            if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
            let t = [...new Set(Object.keys(this.session.namespaces).map(t => iX(t)))];
            aR("client", this.client), aR("events", this.events), aR("disableProviderPing", this.disableProviderPing), t.forEach(t => {
                if (!this.session) return;
                let e = function(t, e) {
                        let r = Object.keys(e.namespaces).filter(e => e.includes(t));
                        if (!r.length) return [];
                        let i = [];
                        return r.forEach(t => {
                            let r = e.namespaces[t].accounts;
                            i.push(...r)
                        }), i
                    }(t, this.session),
                    r = a_(e),
                    i = aQ(a1({}, aA(this.namespaces, this.optionalNamespaces)[t]), aY({
                        accounts: e,
                        chains: r
                    }));
                switch (t) {
                    case "eip155":
                        this.rpcProviders[t] = new aB({
                            namespace: i
                        });
                        break;
                    case "algorand":
                        this.rpcProviders[t] = new aF({
                            namespace: i
                        });
                        break;
                    case "solana":
                        this.rpcProviders[t] = new aj({
                            namespace: i
                        });
                        break;
                    case "cosmos":
                        this.rpcProviders[t] = new az({
                            namespace: i
                        });
                        break;
                    case "polkadot":
                        this.rpcProviders[t] = new aC({
                            namespace: i
                        });
                        break;
                    case "cip34":
                        this.rpcProviders[t] = new aH({
                            namespace: i
                        });
                        break;
                    case "elrond":
                        this.rpcProviders[t] = new aK({
                            namespace: i
                        });
                        break;
                    case "multiversx":
                        this.rpcProviders[t] = new a$({
                            namespace: i
                        });
                        break;
                    case "near":
                        this.rpcProviders[t] = new aV({
                            namespace: i
                        });
                        break;
                    default:
                        this.rpcProviders[as] ? this.rpcProviders[as].updateNamespace(i) : this.rpcProviders[as] = new aG({
                            namespace: i
                        })
                }
            })
        }
        registerEventListeners() {
            if (typeof this.client > "u") throw Error("Sign Client is not initialized");
            this.client.on("session_ping", t => {
                this.events.emit("session_ping", t)
            }), this.client.on("session_event", t => {
                let {
                    params: e
                } = t, {
                    event: r
                } = e;
                if ("accountsChanged" === r.name) {
                    let t = r.data;
                    t && i6(t) && this.events.emit("accountsChanged", t.map(aE))
                } else if ("chainChanged" === r.name) {
                    let t = e.chainId,
                        r = e.event.data,
                        i = iX(t),
                        n = aS(t) !== aS(r) ? `${i}:${aS(r)}` : t;
                    this.onChainChanged(n)
                } else this.events.emit(r.name, r.data);
                this.events.emit("session_event", t)
            }), this.client.on("session_update", ({
                topic: t,
                params: e
            }) => {
                var r;
                let {
                    namespaces: i
                } = e, n = null == (r = this.client) ? void 0 : r.session.get(t);
                this.session = aQ(a1({}, n), aY({
                    namespaces: i
                })), this.onSessionUpdate(), this.events.emit("session_update", {
                    topic: t,
                    params: e
                })
            }), this.client.on("session_delete", async t => {
                await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", aQ(a1({}, i5("USER_DISCONNECTED")), aY({
                    data: t.topic
                })))
            }), this.on(aa, t => {
                this.onChainChanged(t, !0)
            })
        }
        getProvider(t) {
            return this.rpcProviders[t] || this.rpcProviders[as]
        }
        onSessionUpdate() {
            Object.keys(this.rpcProviders).forEach(t => {
                var e;
                this.getProvider(t).updateNamespace(null == (e = this.session) ? void 0 : e.namespaces[t])
            })
        }
        setNamespaces(t) {
            let {
                namespaces: e,
                optionalNamespaces: r,
                sessionProperties: i
            } = t;
            e && Object.keys(e).length && (this.namespaces = e), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", e), this.persist("optionalNamespaces", r)
        }
        validateChain(t) {
            let [e, r] = t ? .split(":") || ["", ""];
            if (!this.namespaces || !Object.keys(this.namespaces).length) return [e, r];
            if (e && !Object.keys(this.namespaces || {}).map(t => iX(t)).includes(e)) throw Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
            if (e && r) return [e, r];
            let i = iX(Object.keys(this.namespaces)[0]),
                n = this.rpcProviders[i].getDefaultChain();
            return [i, n]
        }
        async requestAccounts() {
            let [t] = this.validateChain();
            return await this.getProvider(t).requestAccounts()
        }
        onChainChanged(t, e = !1) {
            if (!this.namespaces) return;
            let [r, i] = this.validateChain(t);
            i && (e || this.getProvider(r).setDefaultChain(i), this.namespaces[r] ? this.namespaces[r].defaultChain = i : this.namespaces[`${r}:${i}`] ? this.namespaces[`${r}:${i}`].defaultChain = i : this.namespaces[`${r}:${i}`] = {
                defaultChain: i
            }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", i))
        }
        onConnect() {
            this.createProviders(), this.events.emit("connect", {
                session: this.session
            })
        }
        async cleanup() {
            this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                deletePairings: !0
            })
        }
        persist(t, e) {
            this.client.core.storage.setItem(`${ai}/${t}`, e)
        }
        async getFromStore(t) {
            return await this.client.core.storage.getItem(`${ai}/${t}`)
        }
    }
    let a5 = ["eth_sendTransaction", "personal_sign"],
        a6 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"],
        a3 = ["chainChanged", "accountsChanged"],
        a8 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
    var a4 = Object.defineProperty,
        a9 = Object.defineProperties,
        a7 = Object.getOwnPropertyDescriptors,
        ht = Object.getOwnPropertySymbols,
        he = Object.prototype.hasOwnProperty,
        hr = Object.prototype.propertyIsEnumerable,
        hi = (t, e, r) => e in t ? a4(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        hn = (t, e) => {
            for (var r in e || (e = {})) he.call(e, r) && hi(t, r, e[r]);
            if (ht)
                for (var r of ht(e)) hr.call(e, r) && hi(t, r, e[r]);
            return t
        };

    function hs(t) {
        return Number(t[0].split(":")[1])
    }

    function ho(t) {
        return `0x${t.toString(16)}`
    }
    class ha {
        constructor() {
            this.events = new g.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (t, e) => (this.events.on(t, e), this), this.once = (t, e) => (this.events.once(t, e), this), this.removeListener = (t, e) => (this.events.removeListener(t, e), this), this.off = (t, e) => (this.events.off(t, e), this), this.parseAccount = t => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {}
        }
        static async init(t) {
            let e = new ha;
            return await e.initialize(t), e
        }
        async request(t, e) {
            return await this.signer.request(t, this.formatChainId(this.chainId), e)
        }
        sendAsync(t, e, r) {
            this.signer.sendAsync(t, e, this.formatChainId(this.chainId), r)
        }
        get connected() {
            return !!this.signer.client && this.signer.client.core.relayer.connected
        }
        get connecting() {
            return !!this.signer.client && this.signer.client.core.relayer.connecting
        }
        async enable() {
            return this.session || await this.connect(), await this.request({
                method: "eth_requestAccounts"
            })
        }
        async connect(t) {
            if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
            this.loadConnectOpts(t);
            let {
                required: e,
                optional: r
            } = function(t) {
                let {
                    chains: e,
                    optionalChains: r,
                    methods: i,
                    optionalMethods: n,
                    events: s,
                    optionalEvents: o,
                    rpcMap: a
                } = t;
                if (!i6(e)) throw Error("Invalid chains");
                let h = {
                        chains: e,
                        methods: i || a5,
                        events: s || a3,
                        rpcMap: hn({}, e.length ? {
                            [hs(e)]: a[hs(e)]
                        } : {})
                    },
                    c = s ? .filter(t => !a3.includes(t)),
                    u = i ? .filter(t => !a5.includes(t));
                if (!r && !o && !n && !(null != c && c.length) && !(null != u && u.length)) return {
                    required: e.length ? h : void 0
                };
                let l = {
                    chains: [...new Set(c ? .length && u ? .length || !r ? h.chains.concat(r || []) : r)],
                    methods: [...new Set(h.methods.concat(null != n && n.length ? n : a6))],
                    events: [...new Set(h.events.concat(null != o && o.length ? o : a8))],
                    rpcMap: a
                };
                return {
                    required: e.length ? h : void 0,
                    optional: r.length ? l : void 0
                }
            }(this.rpc);
            try {
                let i = await new Promise(async (i, n) => {
                    var s;
                    let o, a;
                    this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(t => {
                        t.open || this.signer.session || (this.signer.abortPairingAttempt(), n(Error("Connection request reset. Please try again.")))
                    })), await this.signer.connect((o = hn({
                        namespaces: hn({}, e && {
                            [this.namespace]: e
                        })
                    }, r && {
                        optionalNamespaces: {
                            [this.namespace]: r
                        }
                    }), a = {
                        pairingTopic: t ? .pairingTopic
                    }, a9(o, a7(a)))).then(t => {
                        i(t)
                    }).catch(t => {
                        n(Error(t.message))
                    })
                });
                if (!i) return;
                let n = V(i.namespaces, [this.namespace]);
                this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                    chainId: ho(this.chainId)
                })
            } catch (t) {
                throw this.signer.logger.error(t), t
            } finally {
                this.modal && this.modal.closeModal()
            }
        }
        async authenticate(t, e) {
            if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
            this.loadConnectOpts({
                chains: t ? .chains
            });
            try {
                let r = await new Promise(async (r, i) => {
                        var n;
                        let s, o;
                        this.rpc.showQrModal && (null == (n = this.modal) || n.subscribeModal(t => {
                            t.open || this.signer.session || (this.signer.abortPairingAttempt(), i(Error("Connection request reset. Please try again.")))
                        })), await this.signer.authenticate((s = hn({}, t), o = {
                            chains: this.rpc.chains
                        }, a9(s, a7(o))), e).then(t => {
                            r(t)
                        }).catch(t => {
                            i(Error(t.message))
                        })
                    }),
                    i = r.session;
                if (i) {
                    let t = V(i.namespaces, [this.namespace]);
                    this.setChainIds(this.rpc.chains.length ? this.rpc.chains : t), this.setAccounts(t), this.events.emit("connect", {
                        chainId: ho(this.chainId)
                    })
                }
                return r
            } catch (t) {
                throw this.signer.logger.error(t), t
            } finally {
                this.modal && this.modal.closeModal()
            }
        }
        async disconnect() {
            this.session && await this.signer.disconnect(), this.reset()
        }
        get isWalletConnect() {
            return !0
        }
        get session() {
            return this.signer.session
        }
        registerEventListeners() {
            this.signer.on("session_event", t => {
                let {
                    params: e
                } = t, {
                    event: r
                } = e;
                "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", t)
            }), this.signer.on("chainChanged", t => {
                let e = parseInt(t);
                this.chainId = e, this.events.emit("chainChanged", ho(this.chainId)), this.persist()
            }), this.signer.on("session_update", t => {
                this.events.emit("session_update", t)
            }), this.signer.on("session_delete", t => {
                this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", a9(hn({}, i5("USER_DISCONNECTED")), a7({
                    data: t.topic,
                    name: "USER_DISCONNECTED"
                })))
            }), this.signer.on("display_uri", t => {
                var e, r;
                this.rpc.showQrModal && (null == (e = this.modal) || e.closeModal(), null == (r = this.modal) || r.openModal({
                    uri: t
                })), this.events.emit("display_uri", t)
            })
        }
        switchEthereumChain(t) {
            this.request({
                method: "wallet_switchEthereumChain",
                params: [{
                    chainId: t.toString(16)
                }]
            })
        }
        isCompatibleChainId(t) {
            return "string" == typeof t && t.startsWith(`${this.namespace}:`)
        }
        formatChainId(t) {
            return `${this.namespace}:${t}`
        }
        parseChainId(t) {
            return Number(t.split(":")[1])
        }
        setChainIds(t) {
            let e = t.filter(t => this.isCompatibleChainId(t)).map(t => this.parseChainId(t));
            e.length && (this.chainId = e[0], this.events.emit("chainChanged", ho(this.chainId)), this.persist())
        }
        setChainId(t) {
            if (this.isCompatibleChainId(t)) {
                let e = this.parseChainId(t);
                this.chainId = e, this.switchEthereumChain(e)
            }
        }
        parseAccountId(t) {
            let [e, r, i] = t.split(":");
            return {
                chainId: `${e}:${r}`,
                address: i
            }
        }
        setAccounts(t) {
            this.accounts = t.filter(t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map(t => this.parseAccountId(t).address), this.events.emit("accountsChanged", this.accounts)
        }
        getRpcConfig(t) {
            var e, r;
            let i = null != (e = t ? .chains) ? e : [],
                n = null != (r = t ? .optionalChains) ? r : [],
                s = i.concat(n);
            if (!s.length) throw Error("No chains specified in either `chains` or `optionalChains`");
            let o = i.length ? t ? .methods || a5 : [],
                a = i.length ? t ? .events || a3 : [],
                h = t ? .optionalMethods || [],
                c = t ? .optionalEvents || [],
                u = t ? .rpcMap || this.buildRpcMap(s, t.projectId),
                l = t ? .qrModalOptions || void 0;
            return {
                chains: i ? .map(t => this.formatChainId(t)),
                optionalChains: n.map(t => this.formatChainId(t)),
                methods: o,
                events: a,
                optionalMethods: h,
                optionalEvents: c,
                rpcMap: u,
                showQrModal: !!(null != t && t.showQrModal),
                qrModalOptions: l,
                projectId: t.projectId,
                metadata: t.metadata
            }
        }
        buildRpcMap(t, e) {
            let r = {};
            return t.forEach(t => {
                r[t] = this.getRpcUrl(t, e)
            }), r
        }
        async initialize(e) {
            if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? hs(this.rpc.chains) : hs(this.rpc.optionalChains), this.signer = await a2.init({
                    projectId: this.rpc.projectId,
                    metadata: this.rpc.metadata,
                    disableProviderPing: e.disableProviderPing,
                    relayUrl: e.relayUrl,
                    storageOptions: e.storageOptions,
                    customStoragePrefix: e.customStoragePrefix,
                    telemetryEnabled: e.telemetryEnabled
                }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                let e;
                try {
                    let {
                        WalletConnectModal: r
                    } = await t.A(512001);
                    e = r
                } catch {
                    throw Error("To use QR modal, please install @walletconnect/modal package")
                }
                if (e) try {
                    this.modal = new e(hn({
                        projectId: this.rpc.projectId
                    }, this.rpc.qrModalOptions))
                } catch (t) {
                    throw this.signer.logger.error(t), Error("Could not generate WalletConnectModal Instance")
                }
            }
        }
        loadConnectOpts(t) {
            if (!t) return;
            let {
                chains: e,
                optionalChains: r,
                rpcMap: i
            } = t;
            e && i6(e) && (this.rpc.chains = e.map(t => this.formatChainId(t)), e.forEach(t => {
                this.rpc.rpcMap[t] = i ? .[t] || this.getRpcUrl(t)
            })), r && i6(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map(t => this.formatChainId(t)), r.forEach(t => {
                this.rpc.rpcMap[t] = i ? .[t] || this.getRpcUrl(t)
            }))
        }
        getRpcUrl(t, e) {
            var r;
            return (null == (r = this.rpc.rpcMap) ? void 0 : r[t]) || `https://rpc.walletconnect.org/v1/?chainId=eip155:${t}&projectId=${e||this.rpc.projectId}`
        }
        async loadPersistedSession() {
            if (this.session) try {
                let t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                    e = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
                this.setChainIds(t ? [this.formatChainId(t)] : e ? .accounts), this.setAccounts(e ? .accounts)
            } catch (t) {
                this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch(t => this.signer.logger.warn(t))
            }
        }
        reset() {
            this.chainId = 1, this.accounts = []
        }
        persist() {
            this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
        }
        parseAccounts(t) {
            return "string" == typeof t || t instanceof String ? [this.parseAccount(t)] : t.map(t => this.parseAccount(t))
        }
    }
    t.s(["EthereumProvider", 0, ha], 297338)
}]);

//# sourceMappingURL=0jizd7_-h.6ct.js.map