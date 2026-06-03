(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 88513, (e, t, i) => {
    "use strict";
    let r;
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = function() {
        if (!r && !(r = "u" > typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(n)
    };
    let n = new Uint8Array(16)
}, 269365, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0, i.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
}, 689173, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var r, n = (r = e.r(269365)) && r.__esModule ? r : {
        default: r
    };
    i.default = function(e) {
        return "string" == typeof e && n.default.test(e)
    }
}, 259464, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0, i.unsafeStringify = a;
    var r, n = (r = e.r(689173)) && r.__esModule ? r : {
        default: r
    };
    let o = [];
    for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));

    function a(e, t = 0) {
        return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
    }
    i.default = function(e, t = 0) {
        let i = a(e, t);
        if (!(0, n.default)(i)) throw TypeError("Stringified UUID is invalid");
        return i
    }
}, 323973, (e, t, i) => {
    "use strict";
    let r, n;
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var o, a = (o = e.r(88513)) && o.__esModule ? o : {
            default: o
        },
        s = e.r(259464);
    let u = 0,
        l = 0;
    i.default = function(e, t, i) {
        let o = t && i || 0,
            c = t || Array(16),
            d = (e = e || {}).node || r,
            f = void 0 !== e.clockseq ? e.clockseq : n;
        if (null == d || null == f) {
            let t = e.random || (e.rng || a.default)();
            null == d && (d = r = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]), null == f && (f = n = (t[6] << 8 | t[7]) & 16383)
        }
        let p = void 0 !== e.msecs ? e.msecs : Date.now(),
            g = void 0 !== e.nsecs ? e.nsecs : l + 1,
            h = p - u + (g - l) / 1e4;
        if (h < 0 && void 0 === e.clockseq && (f = f + 1 & 16383), (h < 0 || p > u) && void 0 === e.nsecs && (g = 0), g >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
        u = p, l = g, n = f;
        let E = ((0xfffffff & (p += 122192928e5)) * 1e4 + g) % 0x100000000;
        c[o++] = E >>> 24 & 255, c[o++] = E >>> 16 & 255, c[o++] = E >>> 8 & 255, c[o++] = 255 & E;
        let v = p / 0x100000000 * 1e4 & 0xfffffff;
        c[o++] = v >>> 8 & 255, c[o++] = 255 & v, c[o++] = v >>> 24 & 15 | 16, c[o++] = v >>> 16 & 255, c[o++] = f >>> 8 | 128, c[o++] = 255 & f;
        for (let e = 0; e < 6; ++e) c[o + e] = d[e];
        return t || (0, s.unsafeStringify)(c)
    }
}, 547853, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var r, n = (r = e.r(689173)) && r.__esModule ? r : {
        default: r
    };
    i.default = function(e) {
        let t;
        if (!(0, n.default)(e)) throw TypeError("Invalid UUID");
        let i = new Uint8Array(16);
        return i[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, i[1] = t >>> 16 & 255, i[2] = t >>> 8 & 255, i[3] = 255 & t, i[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, i[5] = 255 & t, i[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, i[7] = 255 & t, i[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, i[9] = 255 & t, i[10] = (t = parseInt(e.slice(24, 36), 16)) / 0x10000000000 & 255, i[11] = t / 0x100000000 & 255, i[12] = t >>> 24 & 255, i[13] = t >>> 16 & 255, i[14] = t >>> 8 & 255, i[15] = 255 & t, i
    }
}, 863254, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.URL = i.DNS = void 0, i.default = function(e, t, i) {
        function r(e, r, a, s) {
            var u;
            if ("string" == typeof e && (e = function(e) {
                    e = unescape(encodeURIComponent(e));
                    let t = [];
                    for (let i = 0; i < e.length; ++i) t.push(e.charCodeAt(i));
                    return t
                }(e)), "string" == typeof r && (r = (0, o.default)(r)), (null == (u = r) ? void 0 : u.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            let l = new Uint8Array(16 + e.length);
            if (l.set(r), l.set(e, r.length), (l = i(l))[6] = 15 & l[6] | t, l[8] = 63 & l[8] | 128, a) {
                s = s || 0;
                for (let e = 0; e < 16; ++e) a[s + e] = l[e];
                return a
            }
            return (0, n.unsafeStringify)(l)
        }
        try {
            r.name = e
        } catch (e) {}
        return r.DNS = a, r.URL = s, r
    };
    var r, n = e.r(259464),
        o = (r = e.r(547853)) && r.__esModule ? r : {
            default: r
        };
    let a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    i.DNS = a;
    let s = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    i.URL = s
}, 152429, (e, t, i) => {
    "use strict";

    function r(e) {
        return (e + 64 >>> 9 << 4) + 14 + 1
    }

    function n(e, t) {
        let i = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
    }

    function o(e, t, i, r, o, a) {
        var s;
        return n((s = n(n(t, e), n(r, a))) << o | s >>> 32 - o, i)
    }

    function a(e, t, i, r, n, a, s) {
        return o(t & i | ~t & r, e, t, n, a, s)
    }

    function s(e, t, i, r, n, a, s) {
        return o(t & r | i & ~r, e, t, n, a, s)
    }

    function u(e, t, i, r, n, a, s) {
        return o(t ^ i ^ r, e, t, n, a, s)
    }

    function l(e, t, i, r, n, a, s) {
        return o(i ^ (t | ~r), e, t, n, a, s)
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0, i.default = function(e) {
        if ("string" == typeof e) {
            let t = unescape(encodeURIComponent(e));
            e = new Uint8Array(t.length);
            for (let i = 0; i < t.length; ++i) e[i] = t.charCodeAt(i)
        }
        return function(e) {
            let t = [],
                i = 32 * e.length,
                r = "0123456789abcdef";
            for (let n = 0; n < i; n += 8) {
                let i = e[n >> 5] >>> n % 32 & 255,
                    o = parseInt(r.charAt(i >>> 4 & 15) + r.charAt(15 & i), 16);
                t.push(o)
            }
            return t
        }(function(e, t) {
            e[t >> 5] |= 128 << t % 32, e[r(t) - 1] = t;
            let i = 0x67452301,
                o = -0x10325477,
                c = -0x67452302,
                d = 0x10325476;
            for (let t = 0; t < e.length; t += 16) {
                let r = i,
                    f = o,
                    p = c,
                    g = d;
                i = a(i, o, c, d, e[t], 7, -0x28955b88), d = a(d, i, o, c, e[t + 1], 12, -0x173848aa), c = a(c, d, i, o, e[t + 2], 17, 0x242070db), o = a(o, c, d, i, e[t + 3], 22, -0x3e423112), i = a(i, o, c, d, e[t + 4], 7, -0xa83f051), d = a(d, i, o, c, e[t + 5], 12, 0x4787c62a), c = a(c, d, i, o, e[t + 6], 17, -0x57cfb9ed), o = a(o, c, d, i, e[t + 7], 22, -0x2b96aff), i = a(i, o, c, d, e[t + 8], 7, 0x698098d8), d = a(d, i, o, c, e[t + 9], 12, -0x74bb0851), c = a(c, d, i, o, e[t + 10], 17, -42063), o = a(o, c, d, i, e[t + 11], 22, -0x76a32842), i = a(i, o, c, d, e[t + 12], 7, 0x6b901122), d = a(d, i, o, c, e[t + 13], 12, -0x2678e6d), c = a(c, d, i, o, e[t + 14], 17, -0x5986bc72), o = a(o, c, d, i, e[t + 15], 22, 0x49b40821), i = s(i, o, c, d, e[t + 1], 5, -0x9e1da9e), d = s(d, i, o, c, e[t + 6], 9, -0x3fbf4cc0), c = s(c, d, i, o, e[t + 11], 14, 0x265e5a51), o = s(o, c, d, i, e[t], 20, -0x16493856), i = s(i, o, c, d, e[t + 5], 5, -0x29d0efa3), d = s(d, i, o, c, e[t + 10], 9, 0x2441453), c = s(c, d, i, o, e[t + 15], 14, -0x275e197f), o = s(o, c, d, i, e[t + 4], 20, -0x182c0438), i = s(i, o, c, d, e[t + 9], 5, 0x21e1cde6), d = s(d, i, o, c, e[t + 14], 9, -0x3cc8f82a), c = s(c, d, i, o, e[t + 3], 14, -0xb2af279), o = s(o, c, d, i, e[t + 8], 20, 0x455a14ed), i = s(i, o, c, d, e[t + 13], 5, -0x561c16fb), d = s(d, i, o, c, e[t + 2], 9, -0x3105c08), c = s(c, d, i, o, e[t + 7], 14, 0x676f02d9), o = s(o, c, d, i, e[t + 12], 20, -0x72d5b376), i = u(i, o, c, d, e[t + 5], 4, -378558), d = u(d, i, o, c, e[t + 8], 11, -0x788e097f), c = u(c, d, i, o, e[t + 11], 16, 0x6d9d6122), o = u(o, c, d, i, e[t + 14], 23, -0x21ac7f4), i = u(i, o, c, d, e[t + 1], 4, -0x5b4115bc), d = u(d, i, o, c, e[t + 4], 11, 0x4bdecfa9), c = u(c, d, i, o, e[t + 7], 16, -0x944b4a0), o = u(o, c, d, i, e[t + 10], 23, -0x41404390), i = u(i, o, c, d, e[t + 13], 4, 0x289b7ec6), d = u(d, i, o, c, e[t], 11, -0x155ed806), c = u(c, d, i, o, e[t + 3], 16, -0x2b10cf7b), o = u(o, c, d, i, e[t + 6], 23, 0x4881d05), i = u(i, o, c, d, e[t + 9], 4, -0x262b2fc7), d = u(d, i, o, c, e[t + 12], 11, -0x1924661b), c = u(c, d, i, o, e[t + 15], 16, 0x1fa27cf8), o = u(o, c, d, i, e[t + 2], 23, -0x3b53a99b), i = l(i, o, c, d, e[t], 6, -0xbd6ddbc), d = l(d, i, o, c, e[t + 7], 10, 0x432aff97), c = l(c, d, i, o, e[t + 14], 15, -0x546bdc59), o = l(o, c, d, i, e[t + 5], 21, -0x36c5fc7), i = l(i, o, c, d, e[t + 12], 6, 0x655b59c3), d = l(d, i, o, c, e[t + 3], 10, -0x70f3336e), c = l(c, d, i, o, e[t + 10], 15, -1051523), o = l(o, c, d, i, e[t + 1], 21, -0x7a7ba22f), i = l(i, o, c, d, e[t + 8], 6, 0x6fa87e4f), d = l(d, i, o, c, e[t + 15], 10, -0x1d31920), c = l(c, d, i, o, e[t + 6], 15, -0x5cfebcec), o = l(o, c, d, i, e[t + 13], 21, 0x4e0811a1), i = l(i, o, c, d, e[t + 4], 6, -0x8ac817e), d = l(d, i, o, c, e[t + 11], 10, -0x42c50dcb), c = l(c, d, i, o, e[t + 2], 15, 0x2ad7d2bb), o = l(o, c, d, i, e[t + 9], 21, -0x14792c6f), i = n(i, r), o = n(o, f), c = n(c, p), d = n(d, g)
            }
            return [i, o, c, d]
        }(function(e) {
            if (0 === e.length) return [];
            let t = 8 * e.length,
                i = new Uint32Array(r(t));
            for (let r = 0; r < t; r += 8) i[r >> 5] |= (255 & e[r / 8]) << r % 32;
            return i
        }(e), 8 * e.length))
    }
}, 192399, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var r = o(e.r(863254)),
        n = o(e.r(152429));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    i.default = (0, r.default)("v3", 48, n.default)
}, 718297, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0, i.default = {
        randomUUID: "u" > typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
    }
}, 916806, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var r = a(e.r(718297)),
        n = a(e.r(88513)),
        o = e.r(259464);

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    i.default = function(e, t, i) {
        if (r.default.randomUUID && !t && !e) return r.default.randomUUID();
        let a = (e = e || {}).random || (e.rng || n.default)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) {
            i = i || 0;
            for (let e = 0; e < 16; ++e) t[i + e] = a[e];
            return t
        }
        return (0, o.unsafeStringify)(a)
    }
}, 645602, (e, t, i) => {
    "use strict";

    function r(e, t) {
        return e << t | e >>> 32 - t
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0, i.default = function(e) {
        let t = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6],
            i = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
        if ("string" == typeof e) {
            let t = unescape(encodeURIComponent(e));
            e = [];
            for (let i = 0; i < t.length; ++i) e.push(t.charCodeAt(i))
        } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
        e.push(128);
        let n = Math.ceil((e.length / 4 + 2) / 16),
            o = Array(n);
        for (let t = 0; t < n; ++t) {
            let i = new Uint32Array(16);
            for (let r = 0; r < 16; ++r) i[r] = e[64 * t + 4 * r] << 24 | e[64 * t + 4 * r + 1] << 16 | e[64 * t + 4 * r + 2] << 8 | e[64 * t + 4 * r + 3];
            o[t] = i
        }
        o[n - 1][14] = (e.length - 1) * 8 / 0x100000000, o[n - 1][14] = Math.floor(o[n - 1][14]), o[n - 1][15] = (e.length - 1) * 8 | 0;
        for (let e = 0; e < n; ++e) {
            let n = new Uint32Array(80);
            for (let t = 0; t < 16; ++t) n[t] = o[e][t];
            for (let e = 16; e < 80; ++e) n[e] = r(n[e - 3] ^ n[e - 8] ^ n[e - 14] ^ n[e - 16], 1);
            let a = i[0],
                s = i[1],
                u = i[2],
                l = i[3],
                c = i[4];
            for (let e = 0; e < 80; ++e) {
                let i = Math.floor(e / 20),
                    o = r(a, 5) + function(e, t, i, r) {
                        switch (e) {
                            case 0:
                                return t & i ^ ~t & r;
                            case 1:
                            case 3:
                                return t ^ i ^ r;
                            case 2:
                                return t & i ^ t & r ^ i & r
                        }
                    }(i, s, u, l) + c + t[i] + n[e] >>> 0;
                c = l, l = u, u = r(s, 30) >>> 0, s = a, a = o
            }
            i[0] = i[0] + a >>> 0, i[1] = i[1] + s >>> 0, i[2] = i[2] + u >>> 0, i[3] = i[3] + l >>> 0, i[4] = i[4] + c >>> 0
        }
        return [i[0] >> 24 & 255, i[0] >> 16 & 255, i[0] >> 8 & 255, 255 & i[0], i[1] >> 24 & 255, i[1] >> 16 & 255, i[1] >> 8 & 255, 255 & i[1], i[2] >> 24 & 255, i[2] >> 16 & 255, i[2] >> 8 & 255, 255 & i[2], i[3] >> 24 & 255, i[3] >> 16 & 255, i[3] >> 8 & 255, 255 & i[3], i[4] >> 24 & 255, i[4] >> 16 & 255, i[4] >> 8 & 255, 255 & i[4]]
    }
}, 995391, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var r = o(e.r(863254)),
        n = o(e.r(645602));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    i.default = (0, r.default)("v5", 80, n.default)
}, 808895, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0, i.default = "00000000-0000-0000-0000-000000000000"
}, 463301, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.default = void 0;
    var r, n = (r = e.r(689173)) && r.__esModule ? r : {
        default: r
    };
    i.default = function(e) {
        if (!(0, n.default)(e)) throw TypeError("Invalid UUID");
        return parseInt(e.slice(14, 15), 16)
    }
}, 385168, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "NIL", {
        enumerable: !0,
        get: function() {
            return s.default
        }
    }), Object.defineProperty(i, "parse", {
        enumerable: !0,
        get: function() {
            return d.default
        }
    }), Object.defineProperty(i, "stringify", {
        enumerable: !0,
        get: function() {
            return c.default
        }
    }), Object.defineProperty(i, "v1", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }), Object.defineProperty(i, "v3", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }), Object.defineProperty(i, "v4", {
        enumerable: !0,
        get: function() {
            return o.default
        }
    }), Object.defineProperty(i, "v5", {
        enumerable: !0,
        get: function() {
            return a.default
        }
    }), Object.defineProperty(i, "validate", {
        enumerable: !0,
        get: function() {
            return l.default
        }
    }), Object.defineProperty(i, "version", {
        enumerable: !0,
        get: function() {
            return u.default
        }
    });
    var r = f(e.r(323973)),
        n = f(e.r(192399)),
        o = f(e.r(916806)),
        a = f(e.r(995391)),
        s = f(e.r(808895)),
        u = f(e.r(463301)),
        l = f(e.r(689173)),
        c = f(e.r(259464)),
        d = f(e.r(547853));

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, 434822, (e, t, i) => {
    ! function(i, r) {
        if ("function" == typeof define && define.amd) {
            let t;
            void 0 !== (t = r()) && e.v(t)
        } else t.exports ? t.exports = r() : i.jsonSchema = r()
    }(e.e, function() {
        var e = i;
        e.Integer = {
            type: "integer"
        };
        var t = {
            String: String,
            Boolean: Boolean,
            Number: Number,
            Object: Object,
            Array: Array,
            Date: Date
        };

        function i(e, t) {
            return i(e, t, {
                changing: !1
            })
        }
        e.validate = i, e.checkPropertyChange = function(e, t, r) {
            return i(e, t, {
                changing: r || "property"
            })
        };
        var i = e._validate = function(e, i, r) {
            r || (r = {});
            var n = r.changing;

            function o(e) {
                return e.type || t[e.name] == e && e.name.toLowerCase()
            }
            var a = [];

            function s(e, t, i, u) {
                var l;

                function c(e) {
                    a.push({
                        property: i,
                        message: e
                    })
                }
                if (i += i ? "number" == typeof u ? "[" + u + "]" : void 0 === u ? "" : "." + u : u, ("object" != typeof t || t instanceof Array) && (i || "function" != typeof t) && !(t && o(t))) return "function" == typeof t ? e instanceof t || c("is not an instance of the class/constructor " + t.name) : t && c("Invalid schema/property definition " + t), null;

                function d(e, t) {
                    if (e) {
                        if ("string" == typeof e && "any" != e && ("null" == e ? null !== t : typeof t != e) && !(t instanceof Array && "array" == e) && !(t instanceof Date && "date" == e) && ("integer" != e || t % 1 != 0)) return [{
                            property: i,
                            message: t + " - " + typeof t + " value found, but a " + e + " is required"
                        }];
                        if (e instanceof Array) {
                            for (var r = [], n = 0; n < e.length && (r = d(e[n], t)).length; n++);
                            if (r.length) return r
                        } else if ("object" == typeof e) {
                            var o = a;
                            a = [], s(t, e, i);
                            var u = a;
                            return a = o, u
                        }
                    }
                    return []
                }
                if (n && t.readonly && c("is a readonly field, it can not be changed"), t.extends && s(e, t.extends, i, u), void 0 === e) t.required && c("is missing and it is required");
                else if (a = a.concat(d(o(t), e)), t.disallow && !d(t.disallow, e).length && c(" disallowed value was matched"), null !== e) {
                    if (e instanceof Array) {
                        if (t.items) {
                            var f = t.items instanceof Array,
                                p = t.items;
                            for (u = 0, l = e.length; u < l; u += 1) f && (p = t.items[u]), r.coerce && (e[u] = r.coerce(e[u], p)), a.concat(s(e[u], p, i, u))
                        }
                        t.minItems && e.length < t.minItems && c("There must be a minimum of " + t.minItems + " in the array"), t.maxItems && e.length > t.maxItems && c("There must be a maximum of " + t.maxItems + " in the array")
                    } else(t.properties || t.additionalProperties) && a.concat(function(e, t, i, o) {
                        if ("object" == typeof t) {
                            for (var u in ("object" != typeof e || e instanceof Array) && a.push({
                                    property: i,
                                    message: "an object is required"
                                }), t)
                                if (t.hasOwnProperty(u) && "__proto__" != u && "constructor" != u) {
                                    var l = e.hasOwnProperty(u) ? e[u] : void 0;
                                    if (void 0 === l && r.existingOnly) continue;
                                    var c = t[u];
                                    void 0 === l && c.default && (l = e[u] = c.default), r.coerce && u in e && (l = e[u] = r.coerce(l, c)), s(l, c, i, u)
                                }
                        }
                        for (u in e) {
                            if (e.hasOwnProperty(u) && ("_" != u.charAt(0) || "_" != u.charAt(1)) && t && !t[u] && !1 === o)
                                if (r.filter) {
                                    delete e[u];
                                    continue
                                } else a.push({
                                    property: i,
                                    message: "The property " + u + " is not defined in the schema and the schema does not allow additional properties"
                                });
                            var d = t && t[u] && t[u].requires;
                            !d || d in e || a.push({
                                property: i,
                                message: "the presence of the property " + u + " requires that " + d + " also be present"
                            }), l = e[u], !o || t && "object" == typeof t && u in t || (r.coerce && (l = e[u] = r.coerce(l, o)), s(l, o, i, u)), !n && l && l.$schema && (a = a.concat(s(l, l.$schema, i, u)))
                        }
                        return a
                    }(e, t.properties, i, t.additionalProperties));
                    if (t.pattern && "string" == typeof e && !e.match(t.pattern) && c("does not match the regex pattern " + t.pattern), t.maxLength && "string" == typeof e && e.length > t.maxLength && c("may only be " + t.maxLength + " characters long"), t.minLength && "string" == typeof e && e.length < t.minLength && c("must be at least " + t.minLength + " characters long"), void 0 !== t.minimum && typeof e == typeof t.minimum && t.minimum > e && c("must have a minimum value of " + t.minimum), void 0 !== t.maximum && typeof e == typeof t.maximum && t.maximum < e && c("must have a maximum value of " + t.maximum), t.enum) {
                        var g, h = t.enum;
                        l = h.length;
                        for (var E = 0; E < l; E++)
                            if (h[E] === e) {
                                g = 1;
                                break
                            }
                        g || c("does not have a value in the enumeration " + h.join(", "))
                    }
                    "number" == typeof t.maxDecimal && e.toString().match(RegExp("\\.[0-9]{" + (t.maxDecimal + 1) + ",}")) && c("may only have " + t.maxDecimal + " digits of decimal places")
                }
                return null
            }
            return i && s(e, i, "", n || ""), !n && e && e.$schema && s(e, e.$schema, "", ""), {
                valid: !a.length,
                errors: a
            }
        };
        return e.mustBeValid = function(e) {
            if (!e.valid) throw TypeError(e.errors.map(function(e) {
                return "for property " + e.property + ": " + e.message
            }).join(", \n"))
        }, e
    })
}, 8234, (e, t, i) => {
    let r = e => new TextEncoder().encode(e);

    function n(e, t) {
        let i, n, o, a, s, u;
        for ("string" == typeof e && (e = r(e)), i = 3 & e.length, n = e.length - i, o = t, u = 0; u < n;) s = 255 & e[u] | (255 & e[++u]) << 8 | (255 & e[++u]) << 16 | (255 & e[++u]) << 24, ++u, o ^= s = (65535 & (s = (s = (65535 & s) * 0xcc9e2d51 + (((s >>> 16) * 0xcc9e2d51 & 65535) << 16) | 0) << 15 | s >>> 17)) * 0x1b873593 + (((s >>> 16) * 0x1b873593 & 65535) << 16) | 0, o = (65535 & (a = (65535 & (o = o << 13 | o >>> 19)) * 5 + (((o >>> 16) * 5 & 65535) << 16) | 0)) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
        switch (s = 0, i) {
            case 3:
                s ^= (255 & e[u + 2]) << 16;
            case 2:
                s ^= (255 & e[u + 1]) << 8;
            case 1:
                s ^= 255 & e[u], o ^= s = (65535 & (s = (s = (65535 & s) * 0xcc9e2d51 + (((s >>> 16) * 0xcc9e2d51 & 65535) << 16) | 0) << 15 | s >>> 17)) * 0x1b873593 + (((s >>> 16) * 0x1b873593 & 65535) << 16) | 0
        }
        return o ^= e.length, o ^= o >>> 16, o = (65535 & o) * 0x85ebca6b + (((o >>> 16) * 0x85ebca6b & 65535) << 16) | 0, o ^= o >>> 13, o = (65535 & o) * 0xc2b2ae35 + (((o >>> 16) * 0xc2b2ae35 & 65535) << 16) | 0, (o ^= o >>> 16) >>> 0
    }
    n.v2 = function(e, t) {
        "string" == typeof e && (e = r(e));
        let i = e.length,
            n = t ^ i,
            o = 0,
            a;
        for (; i >= 4;) a = (65535 & (a = 255 & e[o] | (255 & e[++o]) << 8 | (255 & e[++o]) << 16 | (255 & e[++o]) << 24)) * 0x5bd1e995 + (((a >>> 16) * 0x5bd1e995 & 65535) << 16), a ^= a >>> 24, n = (65535 & n) * 0x5bd1e995 + (((n >>> 16) * 0x5bd1e995 & 65535) << 16) ^ (a = (65535 & a) * 0x5bd1e995 + (((a >>> 16) * 0x5bd1e995 & 65535) << 16)), i -= 4, ++o;
        switch (i) {
            case 3:
                n ^= (255 & e[o + 2]) << 16;
            case 2:
                n ^= (255 & e[o + 1]) << 8;
            case 1:
                n ^= 255 & e[o], n = (65535 & n) * 0x5bd1e995 + (((n >>> 16) * 0x5bd1e995 & 65535) << 16)
        }
        return n ^= n >>> 13, n = (65535 & n) * 0x5bd1e995 + (((n >>> 16) * 0x5bd1e995 & 65535) << 16), (n ^= n >>> 15) >>> 0
    }, n.v3 = n, t.exports = n
}, 937229, (e, t, i) => {
    ! function(e) {
        "use strict";
        var r = "function",
            n = "undefined",
            o = "object",
            a = "string",
            s = "major",
            u = "model",
            l = "name",
            c = "type",
            d = "vendor",
            f = "version",
            p = "architecture",
            g = "console",
            h = "mobile",
            E = "tablet",
            v = "smarttv",
            y = "wearable",
            I = "embedded",
            _ = "Amazon",
            m = "Apple",
            O = "ASUS",
            b = "BlackBerry",
            R = "Browser",
            N = "Chrome",
            T = "Firefox",
            A = "Google",
            U = "Honor",
            S = "Huawei",
            D = "Microsoft",
            L = "Motorola",
            C = "Nvidia",
            w = "OnePlus",
            P = "Opera",
            x = "OPPO",
            V = "Samsung",
            M = "Sharp",
            F = "Sony",
            k = "Xiaomi",
            G = "Zebra",
            K = "Facebook",
            j = "Chromium OS",
            z = "Mac OS",
            B = " Browser",
            q = function(e, t) {
                var i = {};
                for (var r in e) t[r] && t[r].length % 2 == 0 ? i[r] = t[r].concat(e[r]) : i[r] = e[r];
                return i
            },
            H = function(e) {
                for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
                return t
            },
            Y = function(e, t) {
                return typeof e === a && -1 !== X(t).indexOf(X(e))
            },
            X = function(e) {
                return e.toLowerCase()
            },
            W = function(e, t) {
                if (typeof e === a) return e = e.replace(/^\s\s*/, ""), typeof t === n ? e : e.substring(0, 500)
            },
            J = function(e, t) {
                for (var i, n, a, s, u, l, c = 0; c < t.length && !u;) {
                    var d = t[c],
                        f = t[c + 1];
                    for (i = n = 0; i < d.length && !u && d[i];)
                        if (u = d[i++].exec(e))
                            for (a = 0; a < f.length; a++) l = u[++n], typeof(s = f[a]) === o && s.length > 0 ? 2 === s.length ? typeof s[1] == r ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== r || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : void 0 : this[s[0]] = l ? s[1].call(this, l, s[2]) : void 0 : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : void 0) : this[s] = l || void 0;
                    c += 2
                }
            },
            Z = function(e, t) {
                for (var i in t)
                    if (typeof t[i] === o && t[i].length > 0) {
                        for (var r = 0; r < t[i].length; r++)
                            if (Y(t[i][r], e)) return "?" === i ? void 0 : i
                    } else if (Y(t[i], e)) return "?" === i ? void 0 : i;
                return t.hasOwnProperty("*") ? t["*"] : e
            },
            Q = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            },
            $ = {
                browser: [
                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                    [f, [l, "Chrome"]],
                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                    [f, [l, "Edge"]],
                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                    [l, f],
                    [/opios[\/ ]+([\w\.]+)/i],
                    [f, [l, P + " Mini"]],
                    [/\bop(?:rg)?x\/([\w\.]+)/i],
                    [f, [l, P + " GX"]],
                    [/\bopr\/([\w\.]+)/i],
                    [f, [l, P]],
                    [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                    [f, [l, "Baidu"]],
                    [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
                    [f, [l, "Maxthon"]],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                    [l, f],
                    [/quark(?:pc)?\/([-\w\.]+)/i],
                    [f, [l, "Quark"]],
                    [/\bddg\/([\w\.]+)/i],
                    [f, [l, "DuckDuckGo"]],
                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                    [f, [l, "UC" + R]],
                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                    [f, [l, "WeChat"]],
                    [/konqueror\/([\w\.]+)/i],
                    [f, [l, "Konqueror"]],
                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                    [f, [l, "IE"]],
                    [/ya(?:search)?browser\/([\w\.]+)/i],
                    [f, [l, "Yandex"]],
                    [/slbrowser\/([\w\.]+)/i],
                    [f, [l, "Smart Lenovo " + R]],
                    [/(avast|avg)\/([\w\.]+)/i],
                    [
                        [l, /(.+)/, "$1 Secure " + R], f
                    ],
                    [/\bfocus\/([\w\.]+)/i],
                    [f, [l, T + " Focus"]],
                    [/\bopt\/([\w\.]+)/i],
                    [f, [l, P + " Touch"]],
                    [/coc_coc\w+\/([\w\.]+)/i],
                    [f, [l, "Coc Coc"]],
                    [/dolfin\/([\w\.]+)/i],
                    [f, [l, "Dolphin"]],
                    [/coast\/([\w\.]+)/i],
                    [f, [l, P + " Coast"]],
                    [/miuibrowser\/([\w\.]+)/i],
                    [f, [l, "MIUI" + B]],
                    [/fxios\/([\w\.-]+)/i],
                    [f, [l, T]],
                    [/\bqihoobrowser\/?([\w\.]*)/i],
                    [f, [l, "360"]],
                    [/\b(qq)\/([\w\.]+)/i],
                    [
                        [l, /(.+)/, "$1Browser"], f
                    ],
                    [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                    [
                        [l, /(.+)/, "$1" + B], f
                    ],
                    [/samsungbrowser\/([\w\.]+)/i],
                    [f, [l, V + " Internet"]],
                    [/metasr[\/ ]?([\d\.]+)/i],
                    [f, [l, "Sogou Explorer"]],
                    [/(sogou)mo\w+\/([\d\.]+)/i],
                    [
                        [l, "Sogou Mobile"], f
                    ],
                    [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
                    [l, f],
                    [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                    [l],
                    [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
                    [f, l],
                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                    [
                        [l, K], f
                    ],
                    [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                    [l, f],
                    [/\bgsa\/([\w\.]+) .*safari\//i],
                    [f, [l, "GSA"]],
                    [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                    [f, [l, "TikTok"]],
                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                    [f, [l, N + " Headless"]],
                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [l, N + " WebView"], f
                    ],
                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                    [f, [l, "Android " + R]],
                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                    [l, f],
                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                    [f, [l, "Mobile Safari"]],
                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                    [f, l],
                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                    [l, [f, Z, {
                        "1.0": "/8",
                        "1.2": "/1",
                        "1.3": "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [l, f],
                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                    [
                        [l, "Netscape"], f
                    ],
                    [/(wolvic|librewolf)\/([\w\.]+)/i],
                    [l, f],
                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                    [f, [l, T + " Reality"]],
                    [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
                    [l, [f, /_/g, "."]],
                    [/(cobalt)\/([\w\.]+)/i],
                    [l, [f, /master.|lts./, ""]]
                ],
                cpu: [
                    [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
                    [
                        [p, "amd64"]
                    ],
                    [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
                    [
                        [p, "ia32"]
                    ],
                    [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
                    [
                        [p, "arm64"]
                    ],
                    [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
                    [
                        [p, "armhf"]
                    ],
                    [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
                    [
                        [p, "arm"]
                    ],
                    [/((ppc|powerpc)(64)?)( mac|;|\))/i],
                    [
                        [p, /ower/, "", X]
                    ],
                    [/ sun4\w[;\)]/i],
                    [
                        [p, "sparc"]
                    ],
                    [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
                    [
                        [p, X]
                    ]
                ],
                device: [
                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                    [u, [d, V],
                        [c, E]
                    ],
                    [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
                    [u, [d, V],
                        [c, h]
                    ],
                    [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                    [u, [d, m],
                        [c, h]
                    ],
                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                    [u, [d, m],
                        [c, E]
                    ],
                    [/(macintosh);/i],
                    [u, [d, m]],
                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                    [u, [d, M],
                        [c, h]
                    ],
                    [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
                    [u, [d, U],
                        [c, E]
                    ],
                    [/honor([-\w ]+)[;\)]/i],
                    [u, [d, U],
                        [c, h]
                    ],
                    [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
                    [u, [d, S],
                        [c, E]
                    ],
                    [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                    [u, [d, S],
                        [c, h]
                    ],
                    [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
                    [
                        [u, /_/g, " "],
                        [d, k],
                        [c, E]
                    ],
                    [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
                    [
                        [u, /_/g, " "],
                        [d, k],
                        [c, h]
                    ],
                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                    [u, [d, x],
                        [c, h]
                    ],
                    [/\b(opd2(\d{3}a?))(?: bui|\))/i],
                    [u, [d, Z, {
                            OnePlus: ["304", "403", "203"],
                            "*": x
                        }],
                        [c, E]
                    ],
                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                    [u, [d, "Vivo"],
                        [c, h]
                    ],
                    [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                    [u, [d, "Realme"],
                        [c, h]
                    ],
                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                    [u, [d, L],
                        [c, h]
                    ],
                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                    [u, [d, L],
                        [c, E]
                    ],
                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                    [u, [d, "LG"],
                        [c, E]
                    ],
                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
                    [u, [d, "LG"],
                        [c, h]
                    ],
                    [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
                    [u, [d, "Lenovo"],
                        [c, E]
                    ],
                    [/(nokia) (t[12][01])/i],
                    [d, u, [c, E]],
                    [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
                    [
                        [u, /_/g, " "],
                        [c, h],
                        [d, "Nokia"]
                    ],
                    [/(pixel (c|tablet))\b/i],
                    [u, [d, A],
                        [c, E]
                    ],
                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                    [u, [d, A],
                        [c, h]
                    ],
                    [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [u, [d, F],
                        [c, h]
                    ],
                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                    [
                        [u, "Xperia Tablet"],
                        [d, F],
                        [c, E]
                    ],
                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                    [u, [d, w],
                        [c, h]
                    ],
                    [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                    [u, [d, _],
                        [c, E]
                    ],
                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                    [
                        [u, /(.+)/g, "Fire Phone $1"],
                        [d, _],
                        [c, h]
                    ],
                    [/(playbook);[-\w\),; ]+(rim)/i],
                    [u, d, [c, E]],
                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                    [u, [d, b],
                        [c, h]
                    ],
                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                    [u, [d, O],
                        [c, E]
                    ],
                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                    [u, [d, O],
                        [c, h]
                    ],
                    [/(nexus 9)/i],
                    [u, [d, "HTC"],
                        [c, E]
                    ],
                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                    [d, [u, /_/g, " "],
                        [c, h]
                    ],
                    [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
                    [u, [d, "TCL"],
                        [c, E]
                    ],
                    [/(itel) ((\w+))/i],
                    [
                        [d, X], u, [c, Z, {
                            tablet: ["p10001l", "w7001"],
                            "*": "mobile"
                        }]
                    ],
                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                    [u, [d, "Acer"],
                        [c, E]
                    ],
                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                    [u, [d, "Meizu"],
                        [c, h]
                    ],
                    [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                    [u, [d, "Ulefone"],
                        [c, h]
                    ],
                    [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
                    [u, [d, "Energizer"],
                        [c, h]
                    ],
                    [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
                    [u, [d, "Cat"],
                        [c, h]
                    ],
                    [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
                    [u, [d, "Smartfren"],
                        [c, h]
                    ],
                    [/droid.+; (a(?:015|06[35]|142p?))/i],
                    [u, [d, "Nothing"],
                        [c, h]
                    ],
                    [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
                    [u, [d, "Archos"],
                        [c, E]
                    ],
                    [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
                    [u, [d, "Archos"],
                        [c, h]
                    ],
                    [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
                    [d, u, [c, E]],
                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
                    [d, u, [c, h]],
                    [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                    [d, u, [c, E]],
                    [/(surface duo)/i],
                    [u, [d, D],
                        [c, E]
                    ],
                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                    [u, [d, "Fairphone"],
                        [c, h]
                    ],
                    [/(u304aa)/i],
                    [u, [d, "AT&T"],
                        [c, h]
                    ],
                    [/\bsie-(\w*)/i],
                    [u, [d, "Siemens"],
                        [c, h]
                    ],
                    [/\b(rct\w+) b/i],
                    [u, [d, "RCA"],
                        [c, E]
                    ],
                    [/\b(venue[\d ]{2,7}) b/i],
                    [u, [d, "Dell"],
                        [c, E]
                    ],
                    [/\b(q(?:mv|ta)\w+) b/i],
                    [u, [d, "Verizon"],
                        [c, E]
                    ],
                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                    [u, [d, "Barnes & Noble"],
                        [c, E]
                    ],
                    [/\b(tm\d{3}\w+) b/i],
                    [u, [d, "NuVision"],
                        [c, E]
                    ],
                    [/\b(k88) b/i],
                    [u, [d, "ZTE"],
                        [c, E]
                    ],
                    [/\b(nx\d{3}j) b/i],
                    [u, [d, "ZTE"],
                        [c, h]
                    ],
                    [/\b(gen\d{3}) b.+49h/i],
                    [u, [d, "Swiss"],
                        [c, h]
                    ],
                    [/\b(zur\d{3}) b/i],
                    [u, [d, "Swiss"],
                        [c, E]
                    ],
                    [/\b((zeki)?tb.*\b) b/i],
                    [u, [d, "Zeki"],
                        [c, E]
                    ],
                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                    [
                        [d, "Dragon Touch"], u, [c, E]
                    ],
                    [/\b(ns-?\w{0,9}) b/i],
                    [u, [d, "Insignia"],
                        [c, E]
                    ],
                    [/\b((nxa|next)-?\w{0,9}) b/i],
                    [u, [d, "NextBook"],
                        [c, E]
                    ],
                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                    [
                        [d, "Voice"], u, [c, h]
                    ],
                    [/\b(lvtel\-)?(v1[12]) b/i],
                    [
                        [d, "LvTel"], u, [c, h]
                    ],
                    [/\b(ph-1) /i],
                    [u, [d, "Essential"],
                        [c, h]
                    ],
                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                    [u, [d, "Envizen"],
                        [c, E]
                    ],
                    [/\b(trio[-\w\. ]+) b/i],
                    [u, [d, "MachSpeed"],
                        [c, E]
                    ],
                    [/\btu_(1491) b/i],
                    [u, [d, "Rotor"],
                        [c, E]
                    ],
                    [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
                    [u, [d, C],
                        [c, E]
                    ],
                    [/(sprint) (\w+)/i],
                    [d, u, [c, h]],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [u, /\./g, " "],
                        [d, D],
                        [c, h]
                    ],
                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                    [u, [d, G],
                        [c, E]
                    ],
                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                    [u, [d, G],
                        [c, h]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [d, [c, v]],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [u, /^/, "SmartTV"],
                        [d, V],
                        [c, v]
                    ],
                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                    [
                        [d, "LG"],
                        [c, v]
                    ],
                    [/(apple) ?tv/i],
                    [d, [u, m + " TV"],
                        [c, v]
                    ],
                    [/crkey/i],
                    [
                        [u, N + "cast"],
                        [d, A],
                        [c, v]
                    ],
                    [/droid.+aft(\w+)( bui|\))/i],
                    [u, [d, _],
                        [c, v]
                    ],
                    [/(shield \w+ tv)/i],
                    [u, [d, C],
                        [c, v]
                    ],
                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                    [u, [d, M],
                        [c, v]
                    ],
                    [/(bravia[\w ]+)( bui|\))/i],
                    [u, [d, F],
                        [c, v]
                    ],
                    [/(mi(tv|box)-?\w+) bui/i],
                    [u, [d, k],
                        [c, v]
                    ],
                    [/Hbbtv.*(technisat) (.*);/i],
                    [d, u, [c, v]],
                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                    [
                        [d, W],
                        [u, W],
                        [c, v]
                    ],
                    [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
                    [u, [c, v]],
                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                    [
                        [c, v]
                    ],
                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                    [d, u, [c, g]],
                    [/droid.+; (shield)( bui|\))/i],
                    [u, [d, C],
                        [c, g]
                    ],
                    [/(playstation \w+)/i],
                    [u, [d, F],
                        [c, g]
                    ],
                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                    [u, [d, D],
                        [c, g]
                    ],
                    [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
                    [u, [d, V],
                        [c, y]
                    ],
                    [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
                    [d, u, [c, y]],
                    [/(ow(?:19|20)?we?[1-3]{1,3})/i],
                    [u, [d, x],
                        [c, y]
                    ],
                    [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                    [u, [d, m],
                        [c, y]
                    ],
                    [/(opwwe\d{3})/i],
                    [u, [d, w],
                        [c, y]
                    ],
                    [/(moto 360)/i],
                    [u, [d, L],
                        [c, y]
                    ],
                    [/(smartwatch 3)/i],
                    [u, [d, F],
                        [c, y]
                    ],
                    [/(g watch r)/i],
                    [u, [d, "LG"],
                        [c, y]
                    ],
                    [/droid.+; (wt63?0{2,3})\)/i],
                    [u, [d, G],
                        [c, y]
                    ],
                    [/droid.+; (glass) \d/i],
                    [u, [d, A],
                        [c, y]
                    ],
                    [/(pico) (4|neo3(?: link|pro)?)/i],
                    [d, u, [c, y]],
                    [/; (quest( \d| pro)?)/i],
                    [u, [d, K],
                        [c, y]
                    ],
                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                    [d, [c, I]],
                    [/(aeobc)\b/i],
                    [u, [d, _],
                        [c, I]
                    ],
                    [/(homepod).+mac os/i],
                    [u, [d, m],
                        [c, I]
                    ],
                    [/windows iot/i],
                    [
                        [c, I]
                    ],
                    [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                    [u, [c, h]],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                    [u, [c, E]],
                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                    [
                        [c, E]
                    ],
                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                    [
                        [c, h]
                    ],
                    [/droid .+?; ([\w\. -]+)( bui|\))/i],
                    [u, [d, "Generic"]]
                ],
                engine: [
                    [/windows.+ edge\/([\w\.]+)/i],
                    [f, [l, "EdgeHTML"]],
                    [/(arkweb)\/([\w\.]+)/i],
                    [l, f],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [f, [l, "Blink"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                    [l, f],
                    [/ladybird\//i],
                    [
                        [l, "LibWeb"]
                    ],
                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                    [f, l]
                ],
                os: [
                    [/microsoft (windows) (vista|xp)/i],
                    [l, f],
                    [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
                    [l, [f, Z, Q]],
                    [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                    [
                        [f, Z, Q],
                        [l, "Windows"]
                    ],
                    [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                    [
                        [f, /_/g, "."],
                        [l, "iOS"]
                    ],
                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                    [
                        [l, z],
                        [f, /_/g, "."]
                    ],
                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                    [f, l],
                    [/(ubuntu) ([\w\.]+) like android/i],
                    [
                        [l, /(.+)/, "$1 Touch"], f
                    ],
                    [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
                    [l, f],
                    [/\(bb(10);/i],
                    [f, [l, b]],
                    [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
                    [f, [l, "Symbian"]],
                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                    [f, [l, T + " OS"]],
                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                    [f, [l, "webOS"]],
                    [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                    [f, [l, "watchOS"]],
                    [/crkey\/([\d\.]+)/i],
                    [f, [l, N + "cast"]],
                    [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                    [
                        [l, j], f
                    ],
                    [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                    [l, f],
                    [/(sunos) ?([\w\.\d]*)/i],
                    [
                        [l, "Solaris"], f
                    ],
                    [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                    [l, f]
                ]
            },
            ee = function(t, i) {
                if (typeof t === o && (i = t, t = void 0), !(this instanceof ee)) return new ee(t, i).getResult();
                var g = typeof e !== n && e.navigator ? e.navigator : void 0,
                    v = t || (g && g.userAgent ? g.userAgent : ""),
                    y = g && g.userAgentData ? g.userAgentData : void 0,
                    I = i ? q($, i) : $,
                    _ = g && g.userAgent == v;
                return this.getBrowser = function() {
                    var e, t = {};
                    return t[l] = void 0, t[f] = void 0, J.call(t, v, I.browser), t[s] = typeof(e = t[f]) === a ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0, _ && g && g.brave && typeof g.brave.isBrave == r && (t[l] = "Brave"), t
                }, this.getCPU = function() {
                    var e = {};
                    return e[p] = void 0, J.call(e, v, I.cpu), e
                }, this.getDevice = function() {
                    var e = {};
                    return e[d] = void 0, e[u] = void 0, e[c] = void 0, J.call(e, v, I.device), _ && !e[c] && y && y.mobile && (e[c] = h), _ && "Macintosh" == e[u] && g && typeof g.standalone !== n && g.maxTouchPoints && g.maxTouchPoints > 2 && (e[u] = "iPad", e[c] = E), e
                }, this.getEngine = function() {
                    var e = {};
                    return e[l] = void 0, e[f] = void 0, J.call(e, v, I.engine), e
                }, this.getOS = function() {
                    var e = {};
                    return e[l] = void 0, e[f] = void 0, J.call(e, v, I.os), _ && !e[l] && y && y.platform && "Unknown" != y.platform && (e[l] = y.platform.replace(/chrome os/i, j).replace(/macos/i, z)), e
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return v
                }, this.setUA = function(e) {
                    return v = typeof e === a && e.length > 500 ? W(e, 500) : e, this
                }, this.setUA(v), this
            };
        ee.VERSION = "1.0.41", ee.BROWSER = H([l, f, s]), ee.CPU = H([p]), ee.DEVICE = H([u, d, c, g, h, v, E, y, I]), ee.ENGINE = ee.OS = H([l, f]), t.exports && (i = t.exports = ee), i.UAParser = ee;
        var et = typeof e !== n && (e.jQuery || e.Zepto);
        if (et && !et.ua) {
            var ei = new ee;
            et.ua = ei.getResult(), et.ua.get = function() {
                return ei.getUA()
            }, et.ua.set = function(e) {
                ei.setUA(e);
                var t = ei.getResult();
                for (var i in t) et.ua[i] = t[i]
            }
        }
    }("object" == typeof window ? window : e.e)
}, 718566, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r, n, o = e.r(385168),
        a = e.r(434822),
        s = (n = e.r(8234)) && "object" == typeof n && "default" in n ? n.default : n,
        u = e.r(937229),
        l = function(e, t) {
            return (l = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            })(e, t)
        };

    function c(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function i() {
            this.constructor = e
        }
        l(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    }
    var d = function() {
        return (d = Object.assign || function(e) {
            for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };

    function f(e, t, i, r) {
        return new(i || (i = Promise))(function(n, o) {
            function a(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                    e(t)
                })).then(a, s)
            }
            u((r = r.apply(e, t || [])).next())
        })
    }

    function p(e, t) {
        var i, r, n, o, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(s) {
            return function(u) {
                var l = [s, u];
                if (i) throw TypeError("Generator is already executing.");
                for (; o && (o = 0, l[0] && (a = 0)), a;) try {
                    if (i = 1, r && (n = 2 & l[0] ? r.return : l[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, l[1])).done) return n;
                    switch (r = 0, n && (l = [2 & l[0], n.value]), l[0]) {
                        case 0:
                        case 1:
                            n = l;
                            break;
                        case 4:
                            return a.label++, {
                                value: l[1],
                                done: !1
                            };
                        case 5:
                            a.label++, r = l[1], l = [0];
                            continue;
                        case 7:
                            l = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
                                a.label = l[1];
                                break
                            }
                            if (6 === l[0] && a.label < n[1]) {
                                a.label = n[1], n = l;
                                break
                            }
                            if (n && a.label < n[2]) {
                                a.label = n[2], a.ops.push(l);
                                break
                            }
                            n[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    l = t.call(e, a)
                } catch (e) {
                    l = [6, e], r = 0
                } finally {
                    i = n = 0
                }
                if (5 & l[0]) throw l[1];
                return {
                    value: l[0] ? l[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function g(e, t, i) {
        if (i || 2 == arguments.length)
            for (var r, n = 0, o = t.length; n < o; n++) !r && n in t || (r || (r = Array.prototype.slice.call(t, 0, n)), r[n] = t[n]);
        return e.concat(r || Array.prototype.slice.call(t))
    }
    "function" == typeof SuppressedError && SuppressedError;
    var h = new(function() {
        function e() {}
        return e.prototype.handleError = function(e) {}, e
    }());

    function E(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        if (!e) return {};
        if ("function" == typeof Object.assign) return Object.assign.apply(Object, g([e], t, !1));
        for (var r = Object(e), n = 0; n < t.length; n++) {
            var o = t[n];
            if (null != o)
                for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a])
        }
        return r
    }

    function v(e, t) {
        return e ? function(e, t) {
            var i = {};
            return e.forEach(function(e) {
                i[t(e)] = e
            }), i
        }(e, function(e) {
            return e[t]
        }) : {}
    }

    function y() {
        return o.v4()
    }

    function I(e, t) {
        for (var i = !1, r = Object.keys(e), n = 0; n < r.length; n++)
            if (t === e[r[n]]) {
                i = !0;
                break
            }
        return i
    }

    function _(e) {
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    }

    function m(e, t) {
        for (var i, r = 0; r < e.length; r++) {
            var n = e[r];
            if (t(n)) {
                i = n;
                break
            }
        }
        return i
    }

    function O(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        var r = 0;
        return e.replace(/%s/g, function() {
            var e = t[r++],
                i = typeof e;
            return "function" === i ? e() : "string" === i ? e : String(e)
        })
    }
    var b, R = function() {
            return Math.round((new Date).getTime())
        },
        N = function(e) {
            return "number" == typeof e && 0x20000000000000 >= Math.abs(e)
        },
        T = function(e) {
            return "number" == typeof e
        };
    (b = i.LogLevel || (i.LogLevel = {}))[b.NOTSET = 0] = "NOTSET", b[b.DEBUG = 1] = "DEBUG", b[b.INFO = 2] = "INFO", b[b.WARNING = 3] = "WARNING", b[b.ERROR = 4] = "ERROR";
    var A = {
        NOTSET: 0,
        DEBUG: 1,
        INFO: 2,
        WARNING: 3,
        ERROR: 4
    };

    function U(e) {
        return "string" != typeof e ? e : ("WARN" === (e = e.toUpperCase()) && (e = "WARNING"), A[e] ? A[e] : e)
    }
    var S = function() {
            function e() {
                this.defaultLoggerFacade = new w, this.loggers = {}
            }
            return e.prototype.getLogger = function(e) {
                return e ? (this.loggers[e] || (this.loggers[e] = new w({
                    messagePrefix: e
                })), this.loggers[e]) : this.defaultLoggerFacade
            }, e
        }(),
        D = function() {
            function e(e) {
                void 0 === e && (e = {}), this.logLevel = i.LogLevel.NOTSET, void 0 !== e.logLevel && I(i.LogLevel, e.logLevel) && this.setLogLevel(e.logLevel), this.logToConsole = void 0 === e.logToConsole || !!e.logToConsole, this.prefix = void 0 !== e.prefix ? e.prefix : "[OPTIMIZELY]"
            }
            return e.prototype.log = function(e, t) {
                if (this.shouldLog(e) && this.logToConsole) {
                    var i = "".concat(this.prefix, " - ").concat(this.getLogLevelName(e), " ").concat(this.getTime(), " ").concat(t);
                    this.consoleLog(e, [i])
                }
            }, e.prototype.setLogLevel = function(e) {
                e = U(e), I(i.LogLevel, e) && void 0 !== e ? this.logLevel = e : this.logLevel = i.LogLevel.ERROR
            }, e.prototype.getTime = function() {
                return (new Date).toISOString()
            }, e.prototype.shouldLog = function(e) {
                return e >= this.logLevel
            }, e.prototype.getLogLevelName = function(e) {
                switch (e) {
                    case i.LogLevel.DEBUG:
                        return "DEBUG";
                    case i.LogLevel.INFO:
                        return "INFO ";
                    case i.LogLevel.WARNING:
                        return "WARN ";
                    case i.LogLevel.ERROR:
                        return "ERROR";
                    default:
                        return "NOTSET"
                }
            }, e.prototype.consoleLog = function(e, t) {
                switch (e) {
                    case i.LogLevel.DEBUG:
                        console.log.apply(console, t);
                        break;
                    case i.LogLevel.INFO:
                        console.info.apply(console, t);
                        break;
                    case i.LogLevel.WARNING:
                        console.warn.apply(console, t);
                        break;
                    case i.LogLevel.ERROR:
                        console.error.apply(console, t);
                        break;
                    default:
                        console.log.apply(console, t)
                }
            }, e
        }(),
        L = i.LogLevel.NOTSET,
        C = null,
        w = function() {
            function e(e) {
                void 0 === e && (e = {}), this.messagePrefix = "", e.messagePrefix && (this.messagePrefix = e.messagePrefix)
            }
            return e.prototype.log = function(e, t) {
                for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
                this.internalLog(U(e), {
                    message: t,
                    splat: i
                })
            }, e.prototype.info = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                this.namedLog(i.LogLevel.INFO, e, t)
            }, e.prototype.debug = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                this.namedLog(i.LogLevel.DEBUG, e, t)
            }, e.prototype.warn = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                this.namedLog(i.LogLevel.WARNING, e, t)
            }, e.prototype.error = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                this.namedLog(i.LogLevel.ERROR, e, t)
            }, e.prototype.format = function(e) {
                return "".concat(this.messagePrefix ? this.messagePrefix + ": " : "").concat(O.apply(void 0, g([e.message], e.splat, !1)))
            }, e.prototype.internalLog = function(e, t) {
                C && (e < L || (C.log(e, this.format(t)), t.error && t.error instanceof Error && h.handleError(t.error)))
            }, e.prototype.namedLog = function(e, t, i) {
                var r;
                if (t instanceof Error) return t = (r = t).message, void this.internalLog(e, {
                    error: r,
                    message: t,
                    splat: i
                });
                if (0 !== i.length) {
                    var n = i[i.length - 1];
                    n instanceof Error && (r = n, i.splice(-1)), this.internalLog(e, {
                        message: t,
                        error: r,
                        splat: i
                    })
                } else this.internalLog(e, {
                    message: t,
                    splat: i
                })
            }, e
        }(),
        P = new S;

    function x(e) {
        return P.getLogger(e)
    }

    function V(e) {
        C = e
    }
    var M = function(e) {
        e = U(e), L = I(i.LogLevel, e) && void 0 !== e ? e : i.LogLevel.ERROR
    };

    function F(e, t) {
        var i = e.context,
            r = t.context;
        return i.accountId === r.accountId && i.projectId === r.projectId && i.clientName === r.clientName && i.clientVersion === r.clientVersion && i.revision === r.revision && i.anonymizeIP === r.anonymizeIP && i.botFiltering === r.botFiltering
    }
    var k, G = x("EventProcessor"),
        K = function() {
            function e(e) {
                var t = e.timeout,
                    i = e.callback;
                this.timeout = Math.max(t, 0), this.callback = i
            }
            return e.prototype.start = function() {
                this.timeoutId = setTimeout(this.callback, this.timeout)
            }, e.prototype.refresh = function() {
                this.stop(), this.start()
            }, e.prototype.stop = function() {
                this.timeoutId && clearTimeout(this.timeoutId)
            }, e
        }(),
        j = function() {
            function e(e) {
                var t = e.sink;
                this.sink = t
            }
            return e.prototype.start = function() {
                return Promise.resolve()
            }, e.prototype.stop = function() {
                return Promise.resolve()
            }, e.prototype.enqueue = function(e) {
                this.sink([e])
            }, e
        }(),
        z = function() {
            function e(e) {
                var t = e.flushInterval,
                    i = e.maxQueueSize,
                    r = e.sink,
                    n = e.closingSink,
                    o = e.batchComparator;
                this.buffer = [], this.maxQueueSize = Math.max(i, 1), this.sink = r, this.closingSink = n, this.batchComparator = o, this.timer = new K({
                    callback: this.flush.bind(this),
                    timeout: t
                }), this.started = !1
            }
            return e.prototype.start = function() {
                return this.started = !0, Promise.resolve()
            }, e.prototype.stop = function() {
                this.started = !1;
                var e = this.closingSink ? this.closingSink(this.buffer) : this.sink(this.buffer);
                return this.buffer = [], this.timer.stop(), e
            }, e.prototype.enqueue = function(e) {
                if (this.started) {
                    var t = this.buffer[0];
                    t && !this.batchComparator(t, e) && this.flush(), 0 === this.buffer.length && this.timer.refresh(), this.buffer.push(e), this.buffer.length >= this.maxQueueSize && this.flush()
                } else G.warn("Queue is stopped, not accepting event")
            }, e.prototype.flush = function() {
                this.sink(this.buffer), this.buffer = [], this.timer.stop()
            }, e
        }(),
        B = {
            NOTSET: 0,
            DEBUG: 1,
            INFO: 2,
            WARNING: 3,
            ERROR: 4
        },
        q = {
            BROWSER_ODP_MANAGER_INITIALIZATION_FAILED: "%s: Error initializing Browser ODP Manager.",
            CONDITION_EVALUATOR_ERROR: "%s: Error evaluating audience condition of type %s: %s",
            DATAFILE_AND_SDK_KEY_MISSING: "%s: You must provide at least one of sdkKey or datafile. Cannot start Optimizely",
            EXPERIMENT_KEY_NOT_IN_DATAFILE: "%s: Experiment key %s is not in datafile.",
            FEATURE_NOT_IN_DATAFILE: "%s: Feature key %s is not in datafile.",
            FETCH_SEGMENTS_FAILED_NETWORK_ERROR: "%s: Audience segments fetch failed. (network error)",
            FETCH_SEGMENTS_FAILED_DECODE_ERROR: "%s: Audience segments fetch failed. (decode error)",
            IMPROPERLY_FORMATTED_EXPERIMENT: "%s: Experiment key %s is improperly formatted.",
            INVALID_ATTRIBUTES: "%s: Provided attributes are in an invalid format.",
            INVALID_BUCKETING_ID: "%s: Unable to generate hash for bucketing ID %s: %s",
            INVALID_DATAFILE: "%s: Datafile is invalid - property %s: %s",
            INVALID_DATAFILE_MALFORMED: "%s: Datafile is invalid because it is malformed.",
            INVALID_CONFIG: "%s: Provided Optimizely config is in an invalid format.",
            INVALID_JSON: "%s: JSON object is not valid.",
            INVALID_ERROR_HANDLER: '%s: Provided "errorHandler" is in an invalid format.',
            INVALID_EVENT_DISPATCHER: '%s: Provided "eventDispatcher" is in an invalid format.',
            INVALID_EVENT_TAGS: "%s: Provided event tags are in an invalid format.",
            INVALID_EXPERIMENT_KEY: "%s: Experiment key %s is not in datafile. It is either invalid, paused, or archived.",
            INVALID_EXPERIMENT_ID: "%s: Experiment ID %s is not in datafile.",
            INVALID_GROUP_ID: "%s: Group ID %s is not in datafile.",
            INVALID_LOGGER: '%s: Provided "logger" is in an invalid format.',
            INVALID_ROLLOUT_ID: "%s: Invalid rollout ID %s attached to feature %s",
            INVALID_USER_ID: "%s: Provided user ID is in an invalid format.",
            INVALID_USER_PROFILE_SERVICE: "%s: Provided user profile service instance is in an invalid format: %s.",
            LOCAL_STORAGE_DOES_NOT_EXIST: "Error accessing window localStorage.",
            MISSING_INTEGRATION_KEY: "%s: Integration key missing from datafile. All integrations should include a key.",
            NO_DATAFILE_SPECIFIED: "%s: No datafile specified. Cannot start optimizely.",
            NO_JSON_PROVIDED: "%s: No JSON object to validate against schema.",
            NO_VARIATION_FOR_EXPERIMENT_KEY: "%s: No variation key %s defined in datafile for experiment %s.",
            ODP_CONFIG_NOT_AVAILABLE: "%s: ODP is not integrated to the project.",
            ODP_EVENT_FAILED: "ODP event send failed.",
            ODP_FETCH_QUALIFIED_SEGMENTS_SEGMENTS_MANAGER_MISSING: "%s: ODP unable to fetch qualified segments (Segments Manager not initialized).",
            ODP_IDENTIFY_FAILED_EVENT_MANAGER_MISSING: "%s: ODP identify event %s is not dispatched (Event Manager not instantiated).",
            ODP_INITIALIZATION_FAILED: "%s: ODP failed to initialize.",
            ODP_INVALID_DATA: "%s: ODP data is not valid",
            ODP_EVENT_FAILED_ODP_MANAGER_MISSING: "%s: ODP Event failed to send. (ODP Manager not initialized).",
            ODP_FETCH_QUALIFIED_SEGMENTS_FAILED_ODP_MANAGER_MISSING: "%s: ODP failed to Fetch Qualified Segments. (ODP Manager not initialized).",
            ODP_IDENTIFY_USER_FAILED_ODP_MANAGER_MISSING: "%s: ODP failed to Identify User. (ODP Manager not initialized).",
            ODP_IDENTIFY_USER_FAILED_USER_CONTEXT_INITIALIZATION: "%s: ODP failed to Identify User. (Failed during User Context Initialization).",
            ODP_MANAGER_UPDATE_SETTINGS_FAILED_EVENT_MANAGER_MISSING: "%s: ODP Manager failed to update OdpConfig settings for internal event manager. (Event Manager not initialized).",
            ODP_MANAGER_UPDATE_SETTINGS_FAILED_SEGMENTS_MANAGER_MISSING: "%s: ODP Manager failed to update OdpConfig settings for internal segments manager. (Segments Manager not initialized).",
            ODP_NOT_ENABLED: "ODP is not enabled",
            ODP_NOT_INTEGRATED: "%s: ODP is not integrated",
            ODP_SEND_EVENT_FAILED_EVENT_MANAGER_MISSING: "%s: ODP send event %s was not dispatched (Event Manager not instantiated).",
            ODP_SEND_EVENT_FAILED_UID_MISSING: "%s: ODP send event %s was not dispatched (No valid user identifier provided).",
            ODP_SEND_EVENT_FAILED_VUID_MISSING: "%s: ODP send event %s was not dispatched (Unable to fetch VUID).",
            ODP_VUID_INITIALIZATION_FAILED: "%s: ODP VUID initialization failed.",
            ODP_VUID_REGISTRATION_FAILED: "%s: ODP VUID failed to be registered.",
            ODP_VUID_REGISTRATION_FAILED_EVENT_MANAGER_MISSING: "%s: ODP register vuid failed. (Event Manager not instantiated).",
            UNDEFINED_ATTRIBUTE: "%s: Provided attribute: %s has an undefined value.",
            UNRECOGNIZED_ATTRIBUTE: "%s: Unrecognized attribute %s provided. Pruning before sending event to Optimizely.",
            UNABLE_TO_CAST_VALUE: "%s: Unable to cast value %s to type %s, returning null.",
            USER_NOT_IN_FORCED_VARIATION: "%s: User %s is not in the forced variation map. Cannot remove their forced variation.",
            USER_PROFILE_LOOKUP_ERROR: '%s: Error while looking up user profile for user ID "%s": %s.',
            USER_PROFILE_SAVE_ERROR: '%s: Error while saving user profile for user ID "%s": %s.',
            VARIABLE_KEY_NOT_IN_DATAFILE: '%s: Variable with key "%s" associated with feature with key "%s" is not in datafile.',
            VARIATION_ID_NOT_IN_DATAFILE: "%s: No variation ID %s defined in datafile for experiment %s.",
            VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT: "%s: Variation ID %s is not in the datafile.",
            INVALID_INPUT_FORMAT: "%s: Provided %s is in an invalid format.",
            INVALID_DATAFILE_VERSION: "%s: This version of the JavaScript SDK does not support the given datafile version: %s",
            INVALID_VARIATION_KEY: "%s: Provided variation key is in an invalid format."
        },
        H = {
            ACTIVATE_USER: "%s: Activating user %s in experiment %s.",
            DISPATCH_CONVERSION_EVENT: "%s: Dispatching conversion event to URL %s with params %s.",
            DISPATCH_IMPRESSION_EVENT: "%s: Dispatching impression event to URL %s with params %s.",
            DEPRECATED_EVENT_VALUE: "%s: Event value is deprecated in %s call.",
            EVENT_KEY_NOT_FOUND: "%s: Event key %s is not in datafile.",
            EXPERIMENT_NOT_RUNNING: "%s: Experiment %s is not running.",
            FEATURE_ENABLED_FOR_USER: "%s: Feature %s is enabled for user %s.",
            FEATURE_NOT_ENABLED_FOR_USER: "%s: Feature %s is not enabled for user %s.",
            FEATURE_HAS_NO_EXPERIMENTS: "%s: Feature %s is not attached to any experiments.",
            FAILED_TO_PARSE_VALUE: '%s: Failed to parse event value "%s" from event tags.',
            FAILED_TO_PARSE_REVENUE: '%s: Failed to parse revenue value "%s" from event tags.',
            FORCED_BUCKETING_FAILED: "%s: Variation key %s is not in datafile. Not activating user %s.",
            INVALID_OBJECT: "%s: Optimizely object is not valid. Failing %s.",
            INVALID_CLIENT_ENGINE: "%s: Invalid client engine passed: %s. Defaulting to node-sdk.",
            INVALID_DEFAULT_DECIDE_OPTIONS: "%s: Provided default decide options is not an array.",
            INVALID_DECIDE_OPTIONS: "%s: Provided decide options is not an array. Using default decide options.",
            INVALID_VARIATION_ID: "%s: Bucketed into an invalid variation ID. Returning null.",
            NOTIFICATION_LISTENER_EXCEPTION: "%s: Notification listener for (%s) threw exception: %s",
            NO_ROLLOUT_EXISTS: "%s: There is no rollout of feature %s.",
            NOT_ACTIVATING_USER: "%s: Not activating user %s for experiment %s.",
            NOT_TRACKING_USER: "%s: Not tracking user %s.",
            ODP_DISABLED: "ODP Disabled.",
            ODP_IDENTIFY_FAILED_ODP_DISABLED: "%s: ODP identify event for user %s is not dispatched (ODP disabled).",
            ODP_IDENTIFY_FAILED_ODP_NOT_INTEGRATED: "%s: ODP identify event %s is not dispatched (ODP not integrated).",
            ODP_SEND_EVENT_IDENTIFIER_CONVERSION_FAILED: "%s: sendOdpEvent failed to parse through and convert fs_user_id aliases",
            PARSED_REVENUE_VALUE: '%s: Parsed revenue value "%s" from event tags.',
            PARSED_NUMERIC_VALUE: '%s: Parsed event value "%s" from event tags.',
            RETURNING_STORED_VARIATION: '%s: Returning previously activated variation "%s" of experiment "%s" for user "%s" from user profile.',
            ROLLOUT_HAS_NO_EXPERIMENTS: "%s: Rollout of feature %s has no experiments",
            SAVED_VARIATION: '%s: Saved variation "%s" of experiment "%s" for user "%s".',
            SAVED_VARIATION_NOT_FOUND: "%s: User %s was previously bucketed into variation with ID %s for experiment %s, but no matching variation was found.",
            SHOULD_NOT_DISPATCH_ACTIVATE: '%s: Experiment %s is not in "Running" state. Not activating user.',
            SKIPPING_JSON_VALIDATION: "%s: Skipping JSON schema validation.",
            TRACK_EVENT: "%s: Tracking event %s for user %s.",
            UNRECOGNIZED_DECIDE_OPTION: "%s: Unrecognized decide option %s provided.",
            USER_ASSIGNED_TO_EXPERIMENT_BUCKET: "%s: Assigned bucket %s to user with bucketing ID %s.",
            USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is in experiment %s of group %s.",
            USER_BUCKETED_INTO_TARGETING_RULE: "%s: User %s bucketed into targeting rule %s.",
            USER_IN_FEATURE_EXPERIMENT: "%s: User %s is in variation %s of experiment %s on the feature %s.",
            USER_IN_ROLLOUT: "%s: User %s is in rollout of feature %s.",
            USER_NOT_BUCKETED_INTO_EVERYONE_TARGETING_RULE: "%s: User %s not bucketed into everyone targeting rule due to traffic allocation.",
            USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is not in experiment %s of group %s.",
            USER_NOT_BUCKETED_INTO_ANY_EXPERIMENT_IN_GROUP: "%s: User %s is not in any experiment of group %s.",
            USER_NOT_BUCKETED_INTO_TARGETING_RULE: "%s User %s not bucketed into targeting rule %s due to traffic allocation. Trying everyone rule.",
            USER_NOT_IN_FEATURE_EXPERIMENT: "%s: User %s is not in any experiment on the feature %s.",
            USER_NOT_IN_ROLLOUT: "%s: User %s is not in rollout of feature %s.",
            USER_FORCED_IN_VARIATION: "%s: User %s is forced in variation %s.",
            USER_MAPPED_TO_FORCED_VARIATION: "%s: Set variation %s for experiment %s and user %s in the forced variation map.",
            USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s does not meet conditions for targeting rule %s.",
            USER_MEETS_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s meets conditions for targeting rule %s.",
            USER_HAS_VARIATION: "%s: User %s is in variation %s of experiment %s.",
            USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_VARIATION: "%s: Variation %s is mapped to experiment %s and user %s in the forced variation map.",
            USER_HAS_NO_VARIATION: "%s: User %s is in no variation of experiment %s.",
            USER_HAS_NO_FORCED_VARIATION: "%s: User %s is not in the forced variation map.",
            USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT: "%s: No experiment %s mapped to user %s in the forced variation map.",
            USER_NOT_IN_ANY_EXPERIMENT: "%s: User %s is not in any experiment of group %s.",
            USER_NOT_IN_EXPERIMENT: "%s: User %s does not meet conditions to be in experiment %s.",
            USER_RECEIVED_DEFAULT_VARIABLE_VALUE: '%s: User "%s" is not in any variation or rollout rule. Returning default value for variable "%s" of feature flag "%s".',
            FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Feature "%s" is not enabled for user %s. Returning the default variable value "%s".',
            VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Variable "%s" is not used in variation "%s". Returning default value.',
            USER_RECEIVED_VARIABLE_VALUE: '%s: Got variable value "%s" for variable "%s" of feature flag "%s"',
            VALID_DATAFILE: "%s: Datafile is valid.",
            VALID_USER_PROFILE_SERVICE: "%s: Valid user profile service provided.",
            VARIATION_REMOVED_FOR_USER: "%s: Variation mapped to experiment %s has been removed for user %s.",
            VARIABLE_REQUESTED_WITH_WRONG_TYPE: '%s: Requested variable type "%s", but variable is of type "%s". Use correct API to retrieve value. Returning None.',
            VALID_BUCKETING_ID: '%s: BucketingId is valid: "%s"',
            BUCKETING_ID_NOT_STRING: "%s: BucketingID attribute is not a string. Defaulted to userId",
            EVALUATING_AUDIENCE: '%s: Starting to evaluate audience "%s" with conditions: %s.',
            EVALUATING_AUDIENCES_COMBINED: '%s: Evaluating audiences for %s "%s": %s.',
            AUDIENCE_EVALUATION_RESULT: '%s: Audience "%s" evaluated to %s.',
            AUDIENCE_EVALUATION_RESULT_COMBINED: "%s: Audiences for %s %s collectively evaluated to %s.",
            MISSING_ATTRIBUTE_VALUE: '%s: Audience condition %s evaluated to UNKNOWN because no value was passed for user attribute "%s".',
            UNEXPECTED_CONDITION_VALUE: "%s: Audience condition %s evaluated to UNKNOWN because the condition value is not supported.",
            UNEXPECTED_TYPE: '%s: Audience condition %s evaluated to UNKNOWN because a value of type "%s" was passed for user attribute "%s".',
            UNEXPECTED_TYPE_NULL: '%s: Audience condition %s evaluated to UNKNOWN because a null value was passed for user attribute "%s".',
            UNKNOWN_CONDITION_TYPE: "%s: Audience condition %s has an unknown condition type. You may need to upgrade to a newer release of the Optimizely SDK.",
            UNKNOWN_MATCH_TYPE: "%s: Audience condition %s uses an unknown match type. You may need to upgrade to a newer release of the Optimizely SDK.",
            UPDATED_OPTIMIZELY_CONFIG: "%s: Updated Optimizely config to revision %s (project id %s)",
            OUT_OF_BOUNDS: '%s: Audience condition %s evaluated to UNKNOWN because the number value for user attribute "%s" is not in the range [-2^53, +2^53].',
            UNABLE_TO_ATTACH_UNLOAD: '%s: unable to bind optimizely.close() to page unload event: "%s"'
        },
        Y = {
            BOT_FILTERING: "$opt_bot_filtering",
            BUCKETING_ID: "$opt_bucketing_id",
            STICKY_BUCKETING_KEY: "$opt_experiment_bucket_map",
            USER_AGENT: "$opt_user_agent",
            FORCED_DECISION_NULL_RULE_KEY: "$opt_null_rule_key"
        },
        X = {
            AB_TEST: "ab-test",
            FEATURE: "feature",
            FEATURE_TEST: "feature-test",
            FEATURE_VARIABLE: "feature-variable",
            ALL_FEATURE_VARIABLES: "all-feature-variables",
            FLAG: "flag"
        },
        W = {
            FEATURE_TEST: "feature-test",
            ROLLOUT: "rollout",
            EXPERIMENT: "experiment"
        },
        J = {
            RULE: "rule",
            EXPERIMENT: "experiment"
        },
        Z = {
            BOOLEAN: "boolean",
            DOUBLE: "double",
            INTEGER: "integer",
            STRING: "string",
            JSON: "json"
        },
        Q = {
            V2: "2",
            V3: "3",
            V4: "4"
        },
        $ = {
            SDK_NOT_READY: "Optimizely SDK not configured properly yet.",
            FLAG_KEY_INVALID: 'No flag was found for key "%s".',
            VARIABLE_VALUE_INVALID: 'Variable value for key "%s" is invalid or wrong type.'
        };
    (e_ = k || (k = {})).ACTIVATE = "ACTIVATE:experiment, user_id,attributes, variation, event", e_.DECISION = "DECISION:type, userId, attributes, decisionInfo", e_.LOG_EVENT = "LOG_EVENT:logEvent", e_.OPTIMIZELY_CONFIG_UPDATE = "OPTIMIZELY_CONFIG_UPDATE", e_.TRACK = "TRACK:event_key, user_id, attributes, event_tags, event", (em = eb || (eb = {})).VUID = "vuid", em.FS_USER_ID = "fs_user_id", (eO = eR || (eR = {})).IDENTIFIED = "identified", eO.INITIALIZED = "client_initialized";
    var ee = Object.freeze({
            __proto__: null,
            LOG_LEVEL: B,
            ERROR_MESSAGES: q,
            LOG_MESSAGES: H,
            CONTROL_ATTRIBUTES: Y,
            JAVASCRIPT_CLIENT_ENGINE: "javascript-sdk",
            NODE_CLIENT_ENGINE: "node-sdk",
            REACT_CLIENT_ENGINE: "react-sdk",
            REACT_NATIVE_CLIENT_ENGINE: "react-native-sdk",
            REACT_NATIVE_JS_CLIENT_ENGINE: "react-native-js-sdk",
            CLIENT_VERSION: "5.3.4",
            DECISION_NOTIFICATION_TYPES: X,
            DECISION_SOURCES: W,
            AUDIENCE_EVALUATION_TYPES: J,
            FEATURE_VARIABLE_TYPES: Z,
            DATAFILE_VERSIONS: Q,
            DECISION_MESSAGES: $,
            get NOTIFICATION_TYPES() {
                return k
            },
            REQUEST_TIMEOUT_MS: 6e4,
            REQUEST_TIMEOUT_ODP_SEGMENTS_MS: 1e4,
            REQUEST_TIMEOUT_ODP_EVENTS_MS: 1e4,
            get ODP_USER_KEY() {
                return eb
            },
            FS_USER_ID_ALIAS: "fs-user-id",
            ODP_DEFAULT_EVENT_TYPE: "fullstack",
            get ODP_EVENT_ACTION() {
                return eR
            }
        }),
        et = x("EventProcessor"),
        ei = x("EventProcessor"),
        er = function() {
            function e(e) {
                var t = e.key,
                    i = e.maxValues;
                this.LS_KEY = t, this.maxValues = void 0 === i ? 1e3 : i
            }
            return e.prototype.get = function(e) {
                return this.getMap()[e] || null
            }, e.prototype.set = function(e, t) {
                var i = this.getMap();
                i[e] = t, this.replace(i)
            }, e.prototype.remove = function(e) {
                var t = this.getMap();
                delete t[e], this.replace(t)
            }, e.prototype.values = function() {
                return _(this.getMap())
            }, e.prototype.clear = function() {
                this.replace({})
            }, e.prototype.replace = function(e) {
                try {
                    "u" > typeof window ? window && window.localStorage && localStorage.setItem(this.LS_KEY, JSON.stringify(e)) : localStorage.setItem(this.LS_KEY, JSON.stringify(e)), this.clean()
                } catch (e) {
                    ei.error(String(e))
                }
            }, e.prototype.clean = function() {
                var e = this.getMap(),
                    t = Object.keys(e),
                    i = t.length - this.maxValues;
                if (!(i < 1)) {
                    var r = t.map(function(t) {
                        return {
                            key: t,
                            value: e[t]
                        }
                    });
                    r.sort(function(e, t) {
                        return e.value.timestamp - t.value.timestamp
                    });
                    for (var n = 0; n < i; n++) delete e[r[n].key];
                    this.replace(e)
                }
            }, e.prototype.getMap = function() {
                try {
                    var e = "u" > typeof window ? window && window.localStorage && localStorage.getItem(this.LS_KEY) : localStorage.getItem(this.LS_KEY);
                    if (e) return JSON.parse(e) || {}
                } catch (e) {
                    ei.error(e)
                }
                return {}
            }, e
        }(),
        en = x("EventProcessor"),
        eo = function(e) {
            function t(t) {
                var i = t.eventDispatcher;
                return e.call(this, {
                    eventDispatcher: i,
                    store: new er({
                        maxValues: 100,
                        key: "fs_optly_pending_events"
                    })
                }) || this
            }
            return c(t, e), t
        }(function() {
            function e(e) {
                var t = e.eventDispatcher,
                    i = e.store;
                this.dispatcher = t, this.store = i
            }
            return e.prototype.dispatchEvent = function(e, t) {
                this.send({
                    uuid: y(),
                    timestamp: (new Date).getTime(),
                    request: e
                }, t)
            }, e.prototype.sendPendingEvents = function() {
                var e = this,
                    t = this.store.values();
                en.debug("Sending %s pending events from previous page", t.length), t.forEach(function(t) {
                    try {
                        e.send(t, function() {})
                    } catch (e) {
                        en.debug(String(e))
                    }
                })
            }, e.prototype.send = function(e, t) {
                var i = this;
                this.store.set(e.uuid, e), this.dispatcher.dispatchEvent(e.request, function(r) {
                    i.store.remove(e.uuid), t(r)
                })
            }, e
        }()),
        ea = function() {
            function e() {
                this.reqsInFlightCount = 0, this.reqsCompleteResolvers = []
            }
            return e.prototype.trackRequest = function(e) {
                var t = this;
                this.reqsInFlightCount++;
                var i = function() {
                    t.reqsInFlightCount--, 0 === t.reqsInFlightCount && (t.reqsCompleteResolvers.forEach(function(e) {
                        return e()
                    }), t.reqsCompleteResolvers = [])
                };
                e.then(i, i)
            }, e.prototype.onRequestsComplete = function() {
                var e = this;
                return new Promise(function(t) {
                    0 === e.reqsInFlightCount ? t() : e.reqsCompleteResolvers.push(t)
                })
            }, e
        }(),
        es = x("LogTierV1EventProcessor"),
        eu = function() {
            function e(e) {
                var t, i, r, n, o, a, s = e.dispatcher,
                    u = e.closingDispatcher,
                    l = e.flushInterval,
                    c = void 0 === l ? 3e4 : l,
                    d = e.batchSize,
                    f = void 0 === d ? 10 : d,
                    p = e.notificationCenter;
                this.dispatcher = s, this.closingDispatcher = u, this.notificationCenter = p, this.requestTracker = new ea, (t = c) <= 0 && (et.warn("Invalid flushInterval ".concat(t, ", defaulting to ").concat(3e4)), t = 3e4), c = t, (i = Math.floor(i = f)) < 1 && (et.warn("Invalid batchSize ".concat(i, ", defaulting to ").concat(10)), i = 10), f = i = Math.max(1, i), this.queue = (r = f, n = c, o = this.drainQueue.bind(this, !1), a = this.drainQueue.bind(this, !0), r > 1 ? new z({
                    flushInterval: n,
                    maxQueueSize: r,
                    sink: o,
                    closingSink: a,
                    batchComparator: F
                }) : new j({
                    sink: o
                }))
            }
            return e.prototype.drainQueue = function(e, t) {
                var i = this,
                    r = new Promise(function(r) {
                        if (es.debug("draining queue with %s events", t.length), 0 !== t.length) {
                            var n, o, a, s = {
                                url: "https://logx.optimizely.com/v1/events",
                                httpVerb: "POST",
                                params: (n = [], o = t[0], t.forEach(function(e) {
                                    if ("conversion" === e.type || "impression" === e.type) {
                                        var t, i, r, o, a, s, u, l, c, f, p, g, h, E = (t = {
                                            snapshots: [],
                                            visitor_id: e.user.id,
                                            attributes: []
                                        }, e.user.attributes.forEach(function(e) {
                                            t.attributes.push({
                                                entity_id: e.entityId,
                                                key: e.key,
                                                type: "custom",
                                                value: e.value
                                            })
                                        }), "boolean" == typeof e.context.botFiltering && t.attributes.push({
                                            entity_id: "$opt_bot_filtering",
                                            key: "$opt_bot_filtering",
                                            type: "custom",
                                            value: e.context.botFiltering
                                        }), t);
                                        "impression" === e.type ? E.snapshots.push((o = e.layer, a = e.experiment, s = e.variation, u = e.ruleKey, l = e.flagKey, c = e.ruleType, f = e.enabled, {
                                            decisions: [{
                                                campaign_id: p = o ? o.id : null,
                                                experiment_id: null != (i = null == a ? void 0 : a.id) ? i : "",
                                                variation_id: null != (r = null == s ? void 0 : s.id) ? r : "",
                                                metadata: {
                                                    flag_key: l,
                                                    rule_key: u,
                                                    rule_type: c,
                                                    variation_key: s ? s.key : "",
                                                    enabled: f
                                                }
                                            }],
                                            events: [{
                                                entity_id: p,
                                                timestamp: e.timestamp,
                                                key: "campaign_activated",
                                                uuid: e.uuid
                                            }]
                                        })) : "conversion" === e.type && E.snapshots.push((g = d({}, e.tags), delete g.revenue, delete g.value, h = {
                                            entity_id: e.event.id,
                                            key: e.event.key,
                                            timestamp: e.timestamp,
                                            uuid: e.uuid
                                        }, e.tags && (h.tags = e.tags), null != e.value && (h.value = e.value), null != e.revenue && (h.revenue = e.revenue), {
                                            events: [h]
                                        })), n.push(E)
                                    }
                                }), {
                                    client_name: o.context.clientName,
                                    client_version: o.context.clientVersion,
                                    account_id: o.context.accountId,
                                    project_id: o.context.projectId,
                                    revision: o.context.revision,
                                    anonymize_ip: o.context.anonymizeIP,
                                    enrich_decisions: !0,
                                    visitors: n
                                })
                            };
                            (e && i.closingDispatcher ? i.closingDispatcher : i.dispatcher).dispatchEvent(s, function() {
                                r()
                            }), (a = i.notificationCenter) && a.sendNotifications(k.LOG_EVENT, s)
                        } else r()
                    });
                return this.requestTracker.trackRequest(r), r
            }, e.prototype.process = function(e) {
                this.queue.enqueue(e)
            }, e.prototype.stop = function() {
                try {
                    return this.queue.stop(), this.requestTracker.onRequestsComplete()
                } catch (e) {
                    es.error('Error stopping EventProcessor: "%s"', Object(e).message, String(e))
                }
                return Promise.resolve()
            }, e.prototype.start = function() {
                return f(this, void 0, void 0, function() {
                    return p(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.queue.start()];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            }, e
        }(),
        el = "CONFIG_VALIDATOR",
        ec = [Q.V2, Q.V3, Q.V4],
        ed = function(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.errorHandler,
                    i = e.eventDispatcher,
                    r = e.logger;
                if (t && "function" != typeof t.handleError) throw Error(O(q.INVALID_ERROR_HANDLER, el));
                if (i && "function" != typeof i.dispatchEvent) throw Error(O(q.INVALID_EVENT_DISPATCHER, el));
                if (r && "function" != typeof r.log) throw Error(O(q.INVALID_LOGGER, el));
                return !0
            }
            throw Error(O(q.INVALID_CONFIG, el))
        },
        ef = function(e) {
            if (!e) throw Error(O(q.NO_DATAFILE_SPECIFIED, el));
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (e) {
                throw Error(O(q.INVALID_DATAFILE_MALFORMED, el))
            }
            if ("object" == typeof e && !Array.isArray(e) && null !== e && -1 === ec.indexOf(e.version)) throw Error(O(q.INVALID_DATAFILE_VERSION, el, e.version));
            return e
        },
        ep = {
            handleError: function() {}
        },
        eg = {
            dispatchEvent: function(e, t) {
                var i, r = e.params,
                    n = e.url;
                "POST" === e.httpVerb ? ((i = new XMLHttpRequest).open("POST", n, !0), i.setRequestHeader("Content-Type", "application/json"), i.onreadystatechange = function() {
                    if (4 === i.readyState && t && "function" == typeof t) try {
                        t({
                            statusCode: i.status
                        })
                    } catch (e) {}
                }, i.send(JSON.stringify(r))) : (n += "?wxhr=true", r && (n += "&" + Object.keys(r).map(function(e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(r[e])
                }).join("&")), (i = new XMLHttpRequest).open("GET", n, !0), i.onreadystatechange = function() {
                    if (4 === i.readyState && t && "function" == typeof t) try {
                        t({
                            statusCode: i.status
                        })
                    } catch (e) {}
                }, i.send())
            }
        },
        eh = {
            dispatchEvent: function(e, t) {
                var i = e.params,
                    r = e.url,
                    n = new Blob([JSON.stringify(i)], {
                        type: "application/json"
                    });
                t({
                    statusCode: navigator.sendBeacon(r, n) ? 200 : 500
                })
            }
        },
        eE = function() {
            function e() {}
            return e.prototype.log = function() {}, e
        }();

    function ev(e) {
        return new D(e)
    }
    var ey = Object.freeze({
            __proto__: null,
            NoOpLogger: eE,
            createLogger: ev,
            createNoOpLogger: function() {
                return new eE
            }
        }),
        eI = function() {
            function e(e) {
                var t = this;
                this.logger = e.logger, this.errorHandler = e.errorHandler, this.notificationListeners = {}, _(k).forEach(function(e) {
                    t.notificationListeners[e] = []
                }), this.listenerId = 1
            }
            return e.prototype.addNotificationListener = function(e, t) {
                try {
                    if (!(_(k).indexOf(e) > -1)) return -1;
                    this.notificationListeners[e] || (this.notificationListeners[e] = []);
                    var i = !1;
                    if ((this.notificationListeners[e] || []).forEach(function(e) {
                            e.callback !== t || (i = !0)
                        }), i) return -1;
                    this.notificationListeners[e].push({
                        id: this.listenerId,
                        callback: t
                    });
                    var r = this.listenerId;
                    return this.listenerId += 1, r
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), -1
                }
            }, e.prototype.removeNotificationListener = function(e) {
                var t, i, r = this;
                try {
                    if (Object.keys(this.notificationListeners).some(function(n) {
                            return (r.notificationListeners[n] || []).every(function(r, o) {
                                return r.id !== e || (t = o, i = n, !1)
                            }), void 0 !== t && void 0 !== i
                        }), void 0 !== t && void 0 !== i) return this.notificationListeners[i].splice(t, 1), !0
                } catch (e) {
                    this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e)
                }
                return !1
            }, e.prototype.clearAllNotificationListeners = function() {
                var e = this;
                try {
                    _(k).forEach(function(t) {
                        e.notificationListeners[t] = []
                    })
                } catch (e) {
                    this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e)
                }
            }, e.prototype.clearNotificationListeners = function(e) {
                try {
                    this.notificationListeners[e] = []
                } catch (e) {
                    this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e)
                }
            }, e.prototype.sendNotifications = function(e, t) {
                var i = this;
                try {
                    (this.notificationListeners[e] || []).forEach(function(r) {
                        var n = r.callback;
                        try {
                            n(t)
                        } catch (t) {
                            i.logger.log(B.ERROR, H.NOTIFICATION_LISTENER_EXCEPTION, "NOTIFICATION_CENTER", e, t.message)
                        }
                    })
                } catch (e) {
                    this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e)
                }
            }, e
        }(),
        e_, em, eO, eb, eR, eN, eT, eA, eU = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(eu.bind.apply(eu, g([void 0], e, !1)))
        };
    (eN = i.OptimizelySegmentOption || (i.OptimizelySegmentOption = {})).IGNORE_CACHE = "IGNORE_CACHE", eN.RESET_CACHE = "RESET_CACHE", (tt = eT || (eT = {})).BOOLEAN = "boolean", tt.DOUBLE = "double", tt.INTEGER = "integer", tt.STRING = "string", tt.JSON = "json", (eA = i.OptimizelyDecideOption || (i.OptimizelyDecideOption = {})).DISABLE_DECISION_EVENT = "DISABLE_DECISION_EVENT", eA.ENABLED_FLAGS_ONLY = "ENABLED_FLAGS_ONLY", eA.IGNORE_USER_PROFILE_SERVICE = "IGNORE_USER_PROFILE_SERVICE", eA.INCLUDE_REASONS = "INCLUDE_REASONS", eA.EXCLUDE_VARIABLES = "EXCLUDE_VARIABLES";
    var eS = "Polling intervals below ".concat(30, " seconds are not recommended."),
        eD = [0, 8, 16, 32, 64, 128, 256, 512],
        eL = x("DatafileManager"),
        eC = function() {
            function e() {
                this.listeners = {}, this.listenerId = 1
            }
            return e.prototype.on = function(e, t) {
                var i = this;
                this.listeners[e] || (this.listeners[e] = {});
                var r = String(this.listenerId);
                return this.listenerId++, this.listeners[e][r] = t,
                    function() {
                        i.listeners[e] && delete i.listeners[e][r]
                    }
            }, e.prototype.emit = function(e, t) {
                var i = this.listeners[e];
                i && Object.keys(i).forEach(function(e) {
                    (0, i[e])(t)
                })
            }, e.prototype.removeAllListeners = function() {
                this.listeners = {}
            }, e
        }(),
        ew = function() {
            function e() {
                this.errorCount = 0
            }
            return e.prototype.getDelay = function() {
                return 0 === this.errorCount ? 0 : 1e3 * eD[Math.min(eD.length - 1, this.errorCount)] + Math.round(1e3 * Math.random())
            }, e.prototype.countError = function() {
                this.errorCount < eD.length - 1 && this.errorCount++
            }, e.prototype.reset = function() {
                this.errorCount = 0
            }, e
        }(),
        eP = function() {
            function e() {}
            return e.getNotificationCenter = function(e, t) {
                var r;
                if (void 0 === t && (t = x()), e) return this._notificationCenters.has(e) ? r = this._notificationCenters.get(e) : (r = new eI({
                    logger: t,
                    errorHandler: {
                        handleError: function() {}
                    }
                }), this._notificationCenters.set(e, r)), r;
                t.log(i.LogLevel.ERROR, "No SDK key provided to getNotificationCenter.")
            }, e.removeNotificationCenter = function(e) {
                if (e) {
                    var t = this._notificationCenters.get(e);
                    t && (t.clearAllNotificationListeners(), this._notificationCenters.delete(e))
                }
            }, e._notificationCenters = new Map, e
        }(),
        ex = x("DatafileManager");

    function eV(e) {
        return e >= 200 && e < 400
    }
    var eM = {
            get: function() {
                return Promise.resolve(void 0)
            },
            set: function() {
                return Promise.resolve()
            },
            contains: function() {
                return Promise.resolve(!1)
            },
            remove: function() {
                return Promise.resolve(!1)
            }
        },
        eF = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return c(t, e), t.prototype.makeGetRequest = function(e, t) {
                var i;
                return i = new XMLHttpRequest, {
                    responsePromise: new Promise(function(r, n) {
                        i.open("GET", e, !0), Object.keys(t).forEach(function(e) {
                            var r = t[e];
                            i.setRequestHeader(e, r)
                        }), i.onreadystatechange = function() {
                            if (4 === i.readyState) {
                                if (0 === i.status) return void n(Error("Request error"));
                                var e = function(e) {
                                    var t = e.getAllResponseHeaders();
                                    if (null === t) return {};
                                    var i = t.split("\r\n"),
                                        r = {};
                                    return i.forEach(function(e) {
                                        var t = e.indexOf(": ");
                                        if (t > -1) {
                                            var i = e.slice(0, t),
                                                n = e.slice(t + 2);
                                            n.length > 0 && (r[i] = n)
                                        }
                                    }), r
                                }(i);
                                r({
                                    statusCode: i.status,
                                    body: i.responseText,
                                    headers: e
                                })
                            }
                        }, i.timeout = 6e4, i.ontimeout = function() {
                            eL.error("Request timed out")
                        }, i.send()
                    }),
                    abort: function() {
                        i.abort()
                    }
                }
            }, t.prototype.getConfigDefaults = function() {
                return {
                    autoUpdate: !1
                }
            }, t
        }(function() {
            function e(e) {
                var t = this,
                    i = d(d({}, this.getConfigDefaults()), e),
                    r = i.datafile,
                    n = i.autoUpdate,
                    o = i.sdkKey,
                    a = i.updateInterval,
                    s = i.urlTemplate,
                    u = i.cache;
                this.cache = void 0 === u ? eM : u, this.cacheKey = "opt-datafile-" + o, this.sdkKey = o, this.isReadyPromiseSettled = !1, this.readyPromiseResolver = function() {}, this.readyPromiseRejecter = function() {}, this.readyPromise = new Promise(function(e, i) {
                    t.readyPromiseResolver = e, t.readyPromiseRejecter = i
                }), r ? (this.currentDatafile = r, o || this.resolveReadyPromise()) : this.currentDatafile = "", this.isStarted = !1, this.datafileUrl = O(void 0 === s ? "https://cdn.optimizely.com/datafiles/%s.json" : s, o), this.emitter = new eC, this.autoUpdate = void 0 !== n && n, this.updateInterval = void 0 === a ? 3e5 : a, this.updateInterval < 3e4 && ex.warn(eS), this.currentTimeout = null, this.currentRequest = null, this.backoffController = new ew, this.syncOnCurrentRequestComplete = !1
            }
            return e.prototype.get = function() {
                return this.currentDatafile
            }, e.prototype.start = function() {
                this.isStarted || (ex.debug("Datafile manager started"), this.isStarted = !0, this.backoffController.reset(), this.setDatafileFromCacheIfAvailable(), this.syncDatafile())
            }, e.prototype.stop = function() {
                return ex.debug("Datafile manager stopped"), this.isStarted = !1, this.currentTimeout && (clearTimeout(this.currentTimeout), this.currentTimeout = null), this.emitter.removeAllListeners(), this.currentRequest && (this.currentRequest.abort(), this.currentRequest = null), Promise.resolve()
            }, e.prototype.onReady = function() {
                return this.readyPromise
            }, e.prototype.on = function(e, t) {
                return this.emitter.on(e, t)
            }, e.prototype.onRequestRejected = function(e) {
                this.isStarted && (this.backoffController.countError(), e instanceof Error ? ex.error("Error fetching datafile: %s", e.message, e) : "string" == typeof e ? ex.error("Error fetching datafile: %s", e) : ex.error("Error fetching datafile"))
            }, e.prototype.onRequestResolved = function(e) {
                var t;
                if (this.isStarted) {
                    void 0 !== e.statusCode && eV(e.statusCode) ? this.backoffController.reset() : this.backoffController.countError(), this.trySavingLastModified(e.headers);
                    var i = this.getNextDatafileFromResponse(e);
                    "" !== i && ((ex.info("Updating datafile from response"), this.currentDatafile = i, this.cache.set(this.cacheKey, i), this.isReadyPromiseSettled) ? (null == (t = eP.getNotificationCenter(this.sdkKey, ex)) || t.sendNotifications(k.OPTIMIZELY_CONFIG_UPDATE), this.emitter.emit("update", {
                        datafile: i
                    })) : this.resolveReadyPromise())
                }
            }, e.prototype.onRequestComplete = function() {
                this.isStarted && (this.currentRequest = null, this.isReadyPromiseSettled || this.autoUpdate || this.rejectReadyPromise(Error("Failed to become ready")), this.autoUpdate && this.syncOnCurrentRequestComplete && this.syncDatafile(), this.syncOnCurrentRequestComplete = !1)
            }, e.prototype.syncDatafile = function() {
                var e = this,
                    t = {};
                this.lastResponseLastModified && (t["if-modified-since"] = this.lastResponseLastModified), ex.debug("Making datafile request to url %s with headers: %s", this.datafileUrl, function() {
                    return JSON.stringify(t)
                }), this.currentRequest = this.makeGetRequest(this.datafileUrl, t);
                var i = function() {
                    e.onRequestComplete()
                };
                this.currentRequest.responsePromise.then(function(t) {
                    e.onRequestResolved(t)
                }, function(t) {
                    e.onRequestRejected(t)
                }).then(i, i), this.autoUpdate && this.scheduleNextUpdate()
            }, e.prototype.resolveReadyPromise = function() {
                this.readyPromiseResolver(), this.isReadyPromiseSettled = !0
            }, e.prototype.rejectReadyPromise = function(e) {
                this.readyPromiseRejecter(e), this.isReadyPromiseSettled = !0
            }, e.prototype.scheduleNextUpdate = function() {
                var e = this,
                    t = Math.max(this.backoffController.getDelay(), this.updateInterval);
                ex.debug("Scheduling sync in %s ms", t), this.currentTimeout = setTimeout(function() {
                    e.currentRequest ? e.syncOnCurrentRequestComplete = !0 : e.syncDatafile()
                }, t)
            }, e.prototype.getNextDatafileFromResponse = function(e) {
                return ex.debug("Response status code: %s", e.statusCode), void 0 === e.statusCode || 304 === e.statusCode ? "" : eV(e.statusCode) ? e.body : (ex.error("Datafile fetch request failed with status: ".concat(e.statusCode)), "")
            }, e.prototype.trySavingLastModified = function(e) {
                var t = e["last-modified"] || e["Last-Modified"];
                void 0 !== t && (this.lastResponseLastModified = t, ex.debug("Saved last modified header value from response: %s", this.lastResponseLastModified))
            }, e.prototype.setDatafileFromCacheIfAvailable = function() {
                var e = this;
                this.cache.get(this.cacheKey).then(function(t) {
                    e.isStarted && !e.isReadyPromiseSettled && t && (ex.debug("Using datafile from cache"), e.currentDatafile = t, e.resolveReadyPromise())
                })
            }, e
        }()),
        ek = function() {
            function e(e, t, i, r) {
                this.apiKey = e, this.apiHost = t, this.pixelUrl = i, this.segmentsToCheck = r
            }
            return e.prototype.equals = function(e) {
                var t, i;
                return this.apiHost === e.apiHost && this.apiKey === e.apiKey && this.pixelUrl === e.pixelUrl && (t = this.segmentsToCheck, i = e.segmentsToCheck, t.length === i.length && t.every(function(e, t) {
                    return e === i[t]
                }))
            }, e
        }(),
        eG = "PROJECT_CONFIG",
        eK = function(e, t) {
            void 0 === t && (t = null);
            var i, r, n, o, a = ((o = E({}, e)).audiences = (e.audiences || []).map(function(e) {
                return E({}, e)
            }), o.experiments = (e.experiments || []).map(function(e) {
                return E({}, e)
            }), o.featureFlags = (e.featureFlags || []).map(function(e) {
                return E({}, e)
            }), o.groups = (e.groups || []).map(function(e) {
                var t = E({}, e);
                return t.experiments = (e.experiments || []).map(function(e) {
                    return E({}, e)
                }), t
            }), o.rollouts = (e.rollouts || []).map(function(e) {
                var t = E({}, e);
                return t.experiments = (e.experiments || []).map(function(e) {
                    return E({}, e)
                }), t
            }), o.environmentKey = null != (r = e.environmentKey) ? r : "", o.sdkKey = null != (n = e.sdkKey) ? n : "", o);
            a.__datafileStr = null === t ? JSON.stringify(e) : t, (a.audiences || []).forEach(function(e) {
                e.conditions = JSON.parse(e.conditions)
            }), a.audiencesById = v(a.audiences, "id"), E(a.audiencesById, v(a.typedAudiences, "id")), a.attributeKeyMap = v(a.attributes, "key"), a.eventKeyMap = v(a.events, "key"), a.groupIdMap = v(a.groups, "id"), Object.keys(a.groupIdMap || {}).forEach(function(e) {
                (a.groupIdMap[e].experiments || []).forEach(function(t) {
                    a.experiments.push(E(t, {
                        groupId: e
                    }))
                })
            }), a.rolloutIdMap = v(a.rollouts || [], "id"), _(a.rolloutIdMap || {}).forEach(function(e) {
                (e.experiments || []).forEach(function(e) {
                    a.experiments.push(e), e.variationKeyMap = v(e.variations, "key")
                })
            });
            var s = new Set;
            Object.keys(a.audiencesById).map(function(e) {
                return ej(a.audiencesById[e])
            }).forEach(function(e) {
                e.forEach(function(e) {
                    s.add(e)
                })
            });
            var u = Array.from(s),
                l = !1,
                c = "",
                d = "",
                f = "";
            return a.integrations && (a.integrationKeyMap = v(a.integrations, "key"), a.integrations.forEach(function(e) {
                if (!("key" in e)) throw Error(O(q.MISSING_INTEGRATION_KEY, eG));
                "odp" === e.key && (l = !0, d = d || e.publicKey || "", c = c || e.host || "", f = f || e.pixelUrl || "")
            })), a.odpIntegrationConfig = l ? {
                integrated: !0,
                odpConfig: new ek(d, c, f, u)
            } : {
                integrated: !1
            }, a.experimentKeyMap = v(a.experiments, "key"), a.experimentIdMap = v(a.experiments, "id"), a.variationIdMap = {}, a.variationVariableUsageMap = {}, (a.experiments || []).forEach(function(e) {
                e.variationKeyMap = v(e.variations, "key"), E(a.variationIdMap, v(e.variations, "id")), _(e.variationKeyMap || {}).forEach(function(e) {
                    e.variables && (a.variationVariableUsageMap[e.id] = v(e.variables, "id"))
                })
            }), a.experimentFeatureMap = {}, a.featureKeyMap = v(a.featureFlags || [], "key"), _(a.featureKeyMap || {}).forEach(function(e) {
                e.variables.forEach(function(e) {
                    e.type === Z.STRING && e.subType === Z.JSON && (e.type = Z.JSON, delete e.subType)
                }), e.variableKeyMap = v(e.variables, "key"), (e.experimentIds || []).forEach(function(t) {
                    a.experimentFeatureMap[t] ? a.experimentFeatureMap[t].push(e.id) : a.experimentFeatureMap[t] = [e.id]
                })
            }), a.flagRulesMap = {}, (a.featureFlags || []).forEach(function(e) {
                var t = [];
                e.experimentIds.forEach(function(e) {
                    var i = a.experimentIdMap[e];
                    i && t.push(i)
                });
                var i = a.rolloutIdMap[e.rolloutId];
                i && t.push.apply(t, i.experiments), a.flagRulesMap[e.key] = t
            }), a.flagVariationsMap = {}, Object.keys(i = a.flagRulesMap || {}).map(function(e) {
                return [e, i[e]]
            }).forEach(function(e) {
                var t = e[0],
                    i = e[1],
                    r = [];
                i.forEach(function(e) {
                    e.variations.forEach(function(e) {
                        m(r, function(t) {
                            return t.id === e.id
                        }) || r.push(e)
                    })
                }), a.flagVariationsMap[t] = r
            }), a
        },
        ej = function(e) {
            return e.conditions ? ez(e.conditions) : []
        },
        ez = function(e) {
            var t = [];
            return ["and", "or", "not"].includes(e) ? [] : (Array.isArray(e) ? e.forEach(function(e) {
                return t.push.apply(t, ez(e))
            }) : "qualified" === e.match && t.push(e.value), t)
        },
        eB = function(e, t) {
            var i = e.experimentIdMap[t];
            if (!i) throw Error(O(q.INVALID_EXPERIMENT_ID, eG, t));
            return i.layerId
        },
        eq = function(e, t, i) {
            var r = e.attributeKeyMap[t],
                n = 0 === t.indexOf("$opt_");
            return r ? (n && i.log(B.WARNING, "Attribute %s unexpectedly has reserved prefix %s; using attribute ID instead of reserved attribute name.", t, "$opt_"), r.id) : n ? t : (i.log(B.DEBUG, q.UNRECOGNIZED_ATTRIBUTE, eG, t), null)
        },
        eH = function(e, t) {
            var i = e.eventKeyMap[t];
            return i ? i.id : null
        },
        eY = function(e, t) {
            var i = e.experimentKeyMap[t];
            if (!i) throw Error(O(q.INVALID_EXPERIMENT_KEY, eG, t));
            return i.status
        },
        eX = function(e, t) {
            return e.variationIdMap.hasOwnProperty(t) ? e.variationIdMap[t].key : null
        },
        eW = function(e, t) {
            if (e.experimentKeyMap.hasOwnProperty(t)) {
                var i = e.experimentKeyMap[t];
                if (i) return i
            }
            throw Error(O(q.EXPERIMENT_KEY_NOT_IN_DATAFILE, eG, t))
        },
        eJ = function(e, t) {
            var i = e.experimentIdMap[t];
            if (!i) throw Error(O(q.INVALID_EXPERIMENT_ID, eG, t));
            return i.trafficAllocation
        },
        eZ = function(e, t, i) {
            if (e.experimentIdMap.hasOwnProperty(t)) {
                var r = e.experimentIdMap[t];
                if (r) return r
            }
            return i.log(B.ERROR, q.INVALID_EXPERIMENT_ID, eG, t), null
        },
        eQ = function(e, t, i) {
            return e && m(e.flagVariationsMap[t], function(e) {
                return e.key === i
            }) || null
        },
        e$ = function(e, t, i) {
            if (e.featureKeyMap.hasOwnProperty(t)) {
                var r = e.featureKeyMap[t];
                if (r) return r
            }
            return i.log(B.ERROR, q.FEATURE_NOT_IN_DATAFILE, eG, t), null
        },
        e0 = function(e) {
            return e.__datafileStr
        },
        e1 = function(e) {
            try {
                t = ef(e.datafile)
            } catch (e) {
                return {
                    configObj: null,
                    error: e
                }
            }
            if (e.jsonSchemaValidator) try {
                e.jsonSchemaValidator.validate(t), e.logger.log(B.INFO, H.VALID_DATAFILE, eG)
            } catch (e) {
                return {
                    configObj: null,
                    error: e
                }
            } else e.logger.log(B.INFO, H.SKIPPING_JSON_VALIDATION, eG);
            var t, i = [t];
            return "string" == typeof e.datafile && i.push(e.datafile), {
                configObj: eK.apply(void 0, i),
                error: null
            }
        },
        e2 = function(e) {
            return !!e.sendFlagDecisions
        },
        e5 = function() {
            function e(e, t) {
                void 0 === t && (t = 6e4), this.logger = e, this.timeout = t
            }
            return e.prototype.makeRequest = function(e, t, r, n) {
                var o = this,
                    a = new XMLHttpRequest;
                return {
                    responsePromise: new Promise(function(s, u) {
                        a.open(r, e, !0), o.setHeadersInXhr(t, a), a.onreadystatechange = function() {
                            if (a.readyState === XMLHttpRequest.DONE) {
                                if (0 === a.status) return void u(Error("Request error"));
                                var e = o.parseHeadersFromXhr(a);
                                s({
                                    statusCode: a.status,
                                    body: a.responseText,
                                    headers: e
                                })
                            }
                        }, a.timeout = o.timeout, a.ontimeout = function() {
                            o.logger.log(i.LogLevel.WARNING, "Request timed out")
                        }, a.send(n)
                    }),
                    abort: function() {
                        a.abort()
                    }
                }
            }, e.prototype.setHeadersInXhr = function(e, t) {
                Object.keys(e).forEach(function(i) {
                    var r = e[i];
                    "string" == typeof r && t.setRequestHeader(i, r)
                })
            }, e.prototype.parseHeadersFromXhr = function(e) {
                var t = this,
                    r = e.getAllResponseHeaders();
                if (null === r) return {};
                var n = r.split("\r\n"),
                    o = {};
                return n.forEach(function(e) {
                    try {
                        var r = e.indexOf(": ");
                        if (r > -1) {
                            var n = e.slice(0, r),
                                a = e.slice(r + 2);
                            n && a && (o[n] = a)
                        }
                    } catch (r) {
                        t.logger.log(i.LogLevel.WARNING, "Unable to parse & skipped header item '".concat(e, "'"))
                    }
                }), o
            }, e
        }(),
        e3 = function(e) {
            var t = e.browserCallback,
                i = e.nonBrowserCallback;
            return "u" > typeof window ? t(null == window ? void 0 : window.localStorage) : i()
        },
        e6 = function() {
            function e() {
                this.logger = x()
            }
            return e.prototype.contains = function(e) {
                return f(this, void 0, void 0, function() {
                    var t = this;
                    return p(this, function(i) {
                        return [2, e3({
                            browserCallback: function(t) {
                                return null !== (null == t ? void 0 : t.getItem(e))
                            },
                            nonBrowserCallback: function() {
                                return t.logger.error(q.LOCAL_STORAGE_DOES_NOT_EXIST), !1
                            }
                        })]
                    })
                })
            }, e.prototype.get = function(e) {
                return f(this, void 0, void 0, function() {
                    var t = this;
                    return p(this, function(i) {
                        return [2, e3({
                            browserCallback: function(t) {
                                return (null == t ? void 0 : t.getItem(e)) || void 0
                            },
                            nonBrowserCallback: function() {
                                t.logger.error(q.LOCAL_STORAGE_DOES_NOT_EXIST)
                            }
                        })]
                    })
                })
            }, e.prototype.remove = function(e) {
                return f(this, void 0, void 0, function() {
                    var t = this;
                    return p(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.contains(e)];
                            case 1:
                                return i.sent() ? (e3({
                                    browserCallback: function(t) {
                                        null == t || t.removeItem(e)
                                    },
                                    nonBrowserCallback: function() {
                                        t.logger.error(q.LOCAL_STORAGE_DOES_NOT_EXIST)
                                    }
                                }), [2, !0]) : [2, !1]
                        }
                    })
                })
            }, e.prototype.set = function(e, t) {
                return f(this, void 0, void 0, function() {
                    var i = this;
                    return p(this, function(r) {
                        return [2, e3({
                            browserCallback: function(i) {
                                null == i || i.setItem(e, t)
                            },
                            nonBrowserCallback: function() {
                                i.logger.error(q.LOCAL_STORAGE_DOES_NOT_EXIST)
                            }
                        })]
                    })
                })
            }, e
        }(),
        e4 = function() {
            function e(e) {
                void 0 === e && (e = null), this._value = e, this._time = Date.now()
            }
            return Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this._value
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "time", {
                get: function() {
                    return this._time
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.is_stale = function(e) {
                return !(e <= 0) && Date.now() - this._time >= e
            }, e
        }(),
        e8 = function() {
            function e(e) {
                var t = e.maxSize,
                    i = e.timeout;
                this._map = new Map;
                var r = x();
                r.debug("Provisioning cache with maxSize of ".concat(t)), r.debug("Provisioning cache with timeout of ".concat(i)), this._maxSize = t, this._timeout = i
            }
            return Object.defineProperty(e.prototype, "map", {
                get: function() {
                    return this._map
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "maxSize", {
                get: function() {
                    return this._maxSize
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "timeout", {
                get: function() {
                    return this._timeout
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.lookup = function(e) {
                if (this._maxSize <= 0) return null;
                var t = this._map.get(e);
                return t ? t.is_stale(this._timeout) ? (this._map.delete(e), null) : (this._map.delete(e), this._map.set(e, t), t.value) : null
            }, e.prototype.save = function(e) {
                var t = e.key,
                    i = e.value;
                if (!(this._maxSize <= 0) && (this._map.get(t) && this._map.delete(t), this._map.set(t, new e4(i)), this._map.size > this._maxSize)) {
                    var r = this._map.keys().next().value;
                    this._map.delete(r)
                }
            }, e.prototype.reset = function() {
                this._maxSize <= 0 || this._map.clear()
            }, e.prototype.peek = function(e) {
                if (this._maxSize <= 0) return null;
                var t, i = this._map.get(e);
                return null != (t = null == i ? void 0 : i.value) ? t : null
            }, e
        }(),
        e9 = function(e) {
            function t(t) {
                var i, r;
                return e.call(this, {
                    maxSize: null != (i = null == t ? void 0 : t.maxSize) ? i : 100,
                    timeout: null != (r = null == t ? void 0 : t.timeout) ? r : 6e5
                }) || this
            }
            return c(t, e), t
        }(e8),
        e7 = (c(function(e) {
            var t, i;
            return ti.call(this, {
                maxSize: null != (t = null == e ? void 0 : e.maxSize) ? t : 1e4,
                timeout: null != (i = null == e ? void 0 : e.timeout) ? i : 6e5
            }) || this
        }, ti = e8), function() {
            function e() {
                this._keyForVuid = "optimizely-vuid", this._vuid = ""
            }
            return Object.defineProperty(e.prototype, "vuid", {
                get: function() {
                    return this._vuid
                },
                enumerable: !1,
                configurable: !0
            }), e.instance = function(t) {
                return f(this, void 0, void 0, function() {
                    return p(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return this._instance || (this._instance = new e), this._instance._vuid ? [3, 2] : [4, this._instance.load(t)];
                            case 1:
                                i.sent(), i.label = 2;
                            case 2:
                                return [2, this._instance]
                        }
                    })
                })
            }, e.prototype.load = function(t) {
                return f(this, void 0, void 0, function() {
                    var i;
                    return p(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, t.get(this._keyForVuid)];
                            case 1:
                                return (i = r.sent()) && e.isVuid(i) ? (this._vuid = i, [3, 4]) : [3, 2];
                            case 2:
                                return this._vuid = this.makeVuid(), [4, this.save(this._vuid, t)];
                            case 3:
                                r.sent(), r.label = 4;
                            case 4:
                                return [2, this._vuid]
                        }
                    })
                })
            }, e.prototype.makeVuid = function() {
                var t = y().replace(/-/g, "").toLowerCase(),
                    i = "".concat(e.vuid_prefix).concat(t);
                return i.length <= 32 ? i : i.substring(0, 32)
            }, e.prototype.save = function(e, t) {
                return f(this, void 0, void 0, function() {
                    return p(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, t.set(this._keyForVuid, e)];
                            case 1:
                                return i.sent(), [2]
                        }
                    })
                })
            }, e._reset = function() {
                this._instance._vuid = ""
            }, e.vuid_prefix = "vuid_", e.isVuid = function(t) {
                return (null == t ? void 0 : t.startsWith(e.vuid_prefix)) || !1
            }, e
        }());

    function te(e) {
        var t = ["string", "number", "boolean"],
            i = !1;
        return e.forEach(function(e) {
            t.includes(typeof e) || null === e || (i = !0)
        }), i
    }
    var tt, ti, tr, tn = function(e, t, i, r) {
            this.type = e, this.action = t, this.identifiers = null != i ? i : new Map, this.data = null != r ? r : new Map
        },
        to = function() {};
    (ta = tr || (tr = {}))[ta.Running = 0] = "Running", ta[ta.Stopped = 1] = "Stopped";
    var ta, ts, tu = function() {
            function e(e) {
                var t, i, r, n = e.odpIntegrationConfig,
                    o = e.segmentManager,
                    a = e.eventManager,
                    s = e.logger,
                    u = this;
                this.ready = !1, this.status = tr.Stopped, this.segmentManager = o, this.eventManager = a, this.logger = s, this.configPromise = (t = to, i = to, {
                    promise: r = new Promise(function(e, r) {
                        t = e, i = r
                    }),
                    resolve: t,
                    reject: i,
                    then: r.then.bind(r)
                });
                var l = [this.configPromise];
                this.isVuidEnabled() && l.push(this.initializeVuid()), this.initPromise = Promise.all(l), this.onReady().then(function() {
                    u.ready = !0, u.isVuidEnabled() && u.status === tr.Running && u.registerVuid()
                }), n && this.updateSettings(n)
            }
            return e.prototype.getStatus = function() {
                return this.status
            }, e.prototype.start = function() {
                return f(this, void 0, void 0, function() {
                    return p(this, function(e) {
                        return this.status === tr.Running ? [2] : this.odpIntegrationConfig ? this.odpIntegrationConfig.integrated ? (this.status = tr.Running, this.segmentManager.updateSettings(this.odpIntegrationConfig.odpConfig), this.eventManager.updateSettings(this.odpIntegrationConfig.odpConfig), this.eventManager.start(), [2, Promise.resolve()]) : [2, Promise.reject(Error("start() called when ODP is not integrated"))] : [2, Promise.reject(Error("cannot start without ODP config"))]
                    })
                })
            }, e.prototype.stop = function() {
                return f(this, void 0, void 0, function() {
                    return p(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.status === tr.Stopped ? [2] : (this.status = tr.Stopped, [4, this.eventManager.stop()]);
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            }, e.prototype.onReady = function() {
                return this.initPromise
            }, e.prototype.isReady = function() {
                return this.ready
            }, e.prototype.updateSettings = function(e) {
                var t;
                return this.configPromise.resolve(), !(this.odpIntegrationConfig && !((t = this.odpIntegrationConfig).integrated !== e.integrated || t.integrated && e.integrated && !t.odpConfig.equals(e.odpConfig))) && (this.odpIntegrationConfig = e, e.integrated ? this.status === tr.Running ? (this.segmentManager.updateSettings(e.odpConfig), this.eventManager.updateSettings(e.odpConfig)) : this.start() : this.stop(), !0)
            }, e.prototype.fetchQualifiedSegments = function(e, t) {
                return void 0 === t && (t = []), f(this, void 0, void 0, function() {
                    return p(this, function(r) {
                        return this.odpIntegrationConfig ? this.odpIntegrationConfig.integrated ? e7.isVuid(e) ? [2, this.segmentManager.fetchQualifiedSegments(eb.VUID, e, t)] : [2, this.segmentManager.fetchQualifiedSegments(eb.FS_USER_ID, e, t)] : (this.logger.log(i.LogLevel.ERROR, q.ODP_NOT_INTEGRATED), [2, null]) : (this.logger.log(i.LogLevel.ERROR, q.ODP_CONFIG_NOT_AVAILABLE), [2, null])
                    })
                })
            }, e.prototype.identifyUser = function(e, t) {
                this.odpIntegrationConfig ? this.odpIntegrationConfig.integrated ? e && e7.isVuid(e) ? this.eventManager.identifyUser(void 0, e) : this.eventManager.identifyUser(e, t) : this.logger.log(i.LogLevel.INFO, q.ODP_NOT_INTEGRATED) : this.logger.log(i.LogLevel.ERROR, q.ODP_CONFIG_NOT_AVAILABLE)
            }, e.prototype.sendEvent = function(e) {
                var t = e.type,
                    r = e.action,
                    n = e.identifiers,
                    o = e.data,
                    a = t;
                if ("string" == typeof a && "" !== a || (a = "fullstack"), this.odpIntegrationConfig)
                    if (this.odpIntegrationConfig.integrated) {
                        if (te(o)) throw Error(q.ODP_INVALID_DATA);
                        if ("string" != typeof r || "" === r) throw Error("ODP action is not valid (cannot be empty).");
                        this.eventManager.sendEvent(new tn(a, r, n, o))
                    } else this.logger.log(i.LogLevel.ERROR, q.ODP_NOT_INTEGRATED);
                else this.logger.log(i.LogLevel.ERROR, q.ODP_CONFIG_NOT_AVAILABLE)
            }, e.prototype.initializeVuid = function() {
                return Promise.resolve()
            }, e.prototype.registerVuid = function() {
                if (this.odpIntegrationConfig)
                    if (this.odpIntegrationConfig.integrated) {
                        var e = this.getVuid();
                        if (e) try {
                            this.eventManager.registerVuid(e)
                        } catch (e) {
                            this.logger.log(i.LogLevel.ERROR, q.ODP_VUID_REGISTRATION_FAILED)
                        }
                    } else this.logger.log(i.LogLevel.INFO, q.ODP_NOT_INTEGRATED);
                else this.logger.log(i.LogLevel.ERROR, q.ODP_CONFIG_NOT_AVAILABLE)
            }, e
        }(),
        tl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return c(t, e), t.prototype.shouldSendEvents = function(e) {
                return e.length <= 1 || (this.getLogger().log(i.LogLevel.ERROR, "".concat("ODP event send failed", " (browser only supports batch size 1)")), !1)
            }, t.prototype.getPixelApiEndpoint = function(e) {
                return new URL("v2/zaius.gif", e.pixelUrl).href
            }, t.prototype.generateRequestData = function(e, t) {
                var i = this.getPixelApiEndpoint(e),
                    r = e.apiKey,
                    n = t[0],
                    o = new URL(i);
                return n.identifiers.forEach(function(e, t) {
                    o.searchParams.append(t, e)
                }), n.data.forEach(function(e, t) {
                    o.searchParams.append(t, e)
                }), o.searchParams.append("tracker_id", r), o.searchParams.append("event_type", n.type), o.searchParams.append("vdl_action", n.action), {
                    method: "GET",
                    endpoint: o.toString(),
                    headers: {},
                    data: ""
                }
            }, t
        }(function() {
            function e(e, t) {
                this.requestHandler = e, this.logger = t
            }
            return e.prototype.getLogger = function() {
                return this.logger
            }, e.prototype.sendEvents = function(e, t) {
                var r;
                return f(this, void 0, void 0, function() {
                    var n, o, a, s, u, l, c, d, f;
                    return p(this, function(p) {
                        switch (p.label) {
                            case 0:
                                if (n = !1, 0 === t.length) return this.logger.log(i.LogLevel.ERROR, "".concat("ODP event send failed", " (no events)")), [2, n];
                                if (!this.shouldSendEvents(t)) return [2, n];
                                a = (o = this.generateRequestData(e, t)).method, s = o.endpoint, u = o.headers, l = o.data, c = 0, p.label = 1;
                            case 1:
                                return p.trys.push([1, 3, , 4]), [4, this.requestHandler.makeRequest(s, u, a, l).responsePromise];
                            case 2:
                                return c = null != (r = p.sent().statusCode) ? r : c, [3, 4];
                            case 3:
                                return d = p.sent(), f = "network error", d instanceof Error && (f = d.message), this.logger.log(i.LogLevel.ERROR, "".concat("ODP event send failed", " (").concat(f, ")")), n = !0, [3, 4];
                            case 4:
                                return c >= 400 && this.logger.log(i.LogLevel.ERROR, "".concat("ODP event send failed", " (").concat(c, ")")), c >= 500 && (n = !0), [2, n]
                        }
                    })
                })
            }, e
        }()),
        tc = function(e) {
            "function" == typeof queueMicrotask ? queueMicrotask(e) : setTimeout(e)
        };
    (r = ts || (ts = {}))[r.Stopped = 0] = "Stopped", r[r.Running = 1] = "Running";
    var td = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.hasNecessaryIdentifiers = function(e) {
                    return e.identifiers.size >= 0
                }, t
            }
            return c(t, e), t.prototype.initParams = function(e, t, r) {
                this.queueSize = t || 100, this.batchSize = 1, this.flushInterval = 0, void 0 !== e && 1 !== e && this.getLogger().log(i.LogLevel.WARNING, "ODP event batch size must be 1 in the browser."), void 0 !== r && 0 !== r && this.getLogger().log(i.LogLevel.WARNING, "ODP event flush interval must be 0 in the browser.")
            }, t.prototype.discardEventsIfNeeded = function() {
                this.getLogger().log(i.LogLevel.DEBUG, "ODPConfig not ready. Leaving events in queue.")
            }, t
        }(function() {
            function e(e) {
                var t = e.odpConfig,
                    i = e.apiManager,
                    r = e.logger,
                    n = e.clientEngine,
                    o = e.clientVersion,
                    a = e.queueSize,
                    s = e.batchSize,
                    u = e.flushInterval,
                    l = e.userAgentParser,
                    c = e.retries;
                if (this.status = ts.Stopped, this.queue = [], this.apiManager = i, this.logger = r, this.clientEngine = n, this.clientVersion = o, this.initParams(s, a, u), this.status = ts.Stopped, this.userAgentParser = l, this.retries = c || 3, l) {
                    var d = l.parseUserAgentInfo(),
                        f = d.os,
                        p = d.device,
                        g = {
                            os: f.name,
                            os_version: f.version,
                            device_type: p.type,
                            model: p.model
                        };
                    this.userAgentData = new Map(Object.entries(g).filter(function(e) {
                        e[0];
                        var t = e[1];
                        return null != t && null != t
                    }))
                }
                t && this.updateSettings(t)
            }
            return e.prototype.updateSettings = function(e) {
                this.odpConfig && this.odpConfig.equals(e) || (this.flush(), this.odpConfig = e)
            }, e.prototype.flush = function() {
                this.processQueue(!0)
            }, e.prototype.start = function() {
                this.odpConfig ? (this.status = ts.Running, this.batchSize > 1 && this.setNewTimeout()) : this.logger.log(i.LogLevel.ERROR, q.ODP_CONFIG_NOT_AVAILABLE)
            }, e.prototype.stop = function() {
                return f(this, void 0, void 0, function() {
                    return p(this, function(e) {
                        return this.logger.log(i.LogLevel.DEBUG, "Stop requested."), this.flush(), this.clearCurrentTimeout(), this.status = ts.Stopped, this.logger.log(i.LogLevel.DEBUG, "Stopped. Queue Count: %s", this.queue.length), [2]
                    })
                })
            }, e.prototype.registerVuid = function(e) {
                var t = new Map;
                t.set(eb.VUID, e);
                var i = new tn("fullstack", eR.INITIALIZED, t);
                this.sendEvent(i)
            }, e.prototype.identifyUser = function(e, t) {
                var r = new Map;
                if (e || t) {
                    t && r.set(eb.VUID, t), e && r.set(eb.FS_USER_ID, e);
                    var n = new tn("fullstack", eR.IDENTIFIED, r);
                    this.sendEvent(n)
                } else this.logger.log(i.LogLevel.ERROR, q.ODP_SEND_EVENT_FAILED_UID_MISSING)
            }, e.prototype.sendEvent = function(e) {
                te(e.data) ? this.logger.log(i.LogLevel.ERROR, "Event data found to be invalid.") : (e.data = this.augmentCommonData(e.data), this.enqueue(e))
            }, e.prototype.enqueue = function(e) {
                this.status !== ts.Stopped ? this.hasNecessaryIdentifiers(e) ? this.queue.length >= this.queueSize ? this.logger.log(i.LogLevel.WARNING, "Failed to Process ODP Event. Event Queue full. queueSize = %s.", this.queue.length) : (this.queue.push(e), this.processQueue()) : this.logger.log(i.LogLevel.ERROR, "ODP events should have at least one key-value pair in identifiers.") : this.logger.log(i.LogLevel.WARNING, "Failed to Process ODP Event. ODPEventManager is not running.")
            }, e.prototype.processQueue = function(e) {
                if (void 0 === e && (e = !1), this.status === ts.Running) {
                    if (e)
                        for (this.clearCurrentTimeout(); this.queueContainsItems();) this.makeAndSend1Batch();
                    else if (this.queueHasBatches())
                        for (this.clearCurrentTimeout(); this.queueHasBatches();) this.makeAndSend1Batch();
                    this.batchSize > 1 && this.setNewTimeout()
                }
            }, e.prototype.clearCurrentTimeout = function() {
                clearTimeout(this.timeoutId), this.timeoutId = void 0
            }, e.prototype.setNewTimeout = function() {
                var e = this;
                void 0 === this.timeoutId && (this.timeoutId = setTimeout(function() {
                    return e.processQueue(!0)
                }, this.flushInterval))
            }, e.prototype.makeAndSend1Batch = function() {
                var e = this;
                if (this.odpConfig) {
                    var t = this.queue.splice(0, this.batchSize),
                        i = this.odpConfig;
                    t.length > 0 && tc(function() {
                        return f(e, void 0, void 0, function() {
                            var e, r;
                            return p(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        r = 0, n.label = 1;
                                    case 1:
                                        return [4, this.apiManager.sendEvents(i, t)];
                                    case 2:
                                        e = n.sent(), r += 1, n.label = 3;
                                    case 3:
                                        if (e && r < this.retries) return [3, 1];
                                        n.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    })
                }
            }, e.prototype.queueHasBatches = function() {
                return this.queueContainsItems() && this.queue.length % this.batchSize == 0
            }, e.prototype.queueContainsItems = function() {
                return this.queue.length > 0
            }, e.prototype.augmentCommonData = function(e) {
                var t = new Map(this.userAgentData);
                return t.set("idempotence_id", y()), t.set("data_source_type", "sdk"), t.set("data_source", this.clientEngine), t.set("data_source_version", this.clientVersion), e.forEach(function(e, i) {
                    return t.set(i, e)
                }), t
            }, e.prototype.getLogger = function() {
                return this.logger
            }, e.prototype.getQueue = function() {
                return this.queue
            }, e
        }()),
        tf = function() {
            function e(e, t, i, r) {
                this.odpConfig = r, this._segmentsCache = e, this.odpSegmentApiManager = t, this.logger = i || x("OdpSegmentManager")
            }
            return Object.defineProperty(e.prototype, "segmentsCache", {
                get: function() {
                    return this._segmentsCache
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.fetchQualifiedSegments = function(e, t, r) {
                return f(this, void 0, void 0, function() {
                    var n, o, a, s, u, l;
                    return p(this, function(c) {
                        switch (c.label) {
                            case 0:
                                if (!this.odpConfig) return this.logger.log(i.LogLevel.WARNING, q.ODP_CONFIG_NOT_AVAILABLE), [2, null];
                                if (!(n = this.odpConfig.segmentsToCheck) || n.length <= 0) return this.logger.log(i.LogLevel.DEBUG, "No segments are used in the project. Returning an empty list."), [2, []];
                                if (o = this.makeCacheKey(e, t), a = r.includes(i.OptimizelySegmentOption.IGNORE_CACHE), (s = r.includes(i.OptimizelySegmentOption.RESET_CACHE)) && this.reset(), !a && !s) {
                                    if (u = this._segmentsCache.lookup(o)) return this.logger.log(i.LogLevel.DEBUG, 'ODP cache hit. Returning segments from cache "%s".', o), [2, u];
                                    this.logger.log(i.LogLevel.DEBUG, "ODP cache miss.")
                                }
                                return this.logger.log(i.LogLevel.DEBUG, "Making a call to ODP server."), [4, this.odpSegmentApiManager.fetchSegments(this.odpConfig.apiKey, this.odpConfig.apiHost, e, t, n)];
                            case 1:
                                return (l = c.sent()) && !a && this._segmentsCache.save({
                                    key: o,
                                    value: l
                                }), [2, l]
                        }
                    })
                })
            }, e.prototype.reset = function() {
                this._segmentsCache.reset()
            }, e.prototype.makeCacheKey = function(e, t) {
                return "".concat(e, "-$-").concat(t)
            }, e.prototype.updateSettings = function(e) {
                this.odpConfig = e, this.reset()
            }, e
        }(),
        tp = {
            $schema: "http://json-schema.org/draft-04/schema#",
            title: "Project Config JSON Schema",
            type: "object",
            properties: {
                projectId: {
                    type: "string",
                    required: !0
                },
                accountId: {
                    type: "string",
                    required: !0
                },
                groups: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                required: !0
                            },
                            policy: {
                                type: "string",
                                required: !0
                            },
                            trafficAllocation: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        entityId: {
                                            type: "string",
                                            required: !0
                                        },
                                        endOfRange: {
                                            type: "integer",
                                            required: !0
                                        }
                                    }
                                },
                                required: !0
                            },
                            experiments: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                            required: !0
                                        },
                                        key: {
                                            type: "string",
                                            required: !0
                                        },
                                        status: {
                                            type: "string",
                                            required: !0
                                        },
                                        layerId: {
                                            type: "string",
                                            required: !0
                                        },
                                        variations: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    id: {
                                                        type: "string",
                                                        required: !0
                                                    },
                                                    key: {
                                                        type: "string",
                                                        required: !0
                                                    }
                                                }
                                            },
                                            required: !0
                                        },
                                        trafficAllocation: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    entityId: {
                                                        type: "string",
                                                        required: !0
                                                    },
                                                    endOfRange: {
                                                        type: "integer",
                                                        required: !0
                                                    }
                                                }
                                            },
                                            required: !0
                                        },
                                        audienceIds: {
                                            type: "array",
                                            items: {
                                                type: "string"
                                            },
                                            required: !0
                                        },
                                        forcedVariations: {
                                            type: "object",
                                            required: !0
                                        }
                                    }
                                },
                                required: !0
                            }
                        }
                    },
                    required: !0
                },
                experiments: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                required: !0
                            },
                            key: {
                                type: "string",
                                required: !0
                            },
                            status: {
                                type: "string",
                                required: !0
                            },
                            layerId: {
                                type: "string",
                                required: !0
                            },
                            variations: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                            required: !0
                                        },
                                        key: {
                                            type: "string",
                                            required: !0
                                        }
                                    }
                                },
                                required: !0
                            },
                            trafficAllocation: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        entityId: {
                                            type: "string",
                                            required: !0
                                        },
                                        endOfRange: {
                                            type: "integer",
                                            required: !0
                                        }
                                    }
                                },
                                required: !0
                            },
                            audienceIds: {
                                type: "array",
                                items: {
                                    type: "string"
                                },
                                required: !0
                            },
                            forcedVariations: {
                                type: "object",
                                required: !0
                            }
                        }
                    },
                    required: !0
                },
                events: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            key: {
                                type: "string",
                                required: !0
                            },
                            experimentIds: {
                                type: "array",
                                items: {
                                    type: "string",
                                    required: !0
                                }
                            },
                            id: {
                                type: "string",
                                required: !0
                            }
                        }
                    },
                    required: !0
                },
                audiences: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                required: !0
                            },
                            name: {
                                type: "string",
                                required: !0
                            },
                            conditions: {
                                type: "string",
                                required: !0
                            }
                        }
                    },
                    required: !0
                },
                attributes: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                required: !0
                            },
                            key: {
                                type: "string",
                                required: !0
                            }
                        }
                    },
                    required: !0
                },
                version: {
                    type: "string",
                    required: !0
                },
                revision: {
                    type: "string",
                    required: !0
                },
                integrations: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            key: {
                                type: "string",
                                required: !0
                            },
                            host: {
                                type: "string"
                            },
                            publicKey: {
                                type: "string"
                            },
                            pixelUrl: {
                                type: "string"
                            }
                        }
                    }
                }
            }
        },
        tg = {
            $schema: "https://json-schema.org/draft/2019-09/schema",
            $id: "https://example.com/example.json",
            title: "ODP Response Schema",
            type: "object",
            required: ["data"],
            properties: {
                data: {
                    title: "The data Schema",
                    type: "object",
                    required: ["customer"],
                    properties: {
                        customer: {
                            title: "The customer Schema",
                            type: "object",
                            required: [],
                            properties: {
                                audiences: {
                                    title: "The audiences Schema",
                                    type: "object",
                                    required: ["edges"],
                                    properties: {
                                        edges: {
                                            title: "The edges Schema",
                                            type: "array",
                                            items: {
                                                title: "A Schema",
                                                type: "object",
                                                required: ["node"],
                                                properties: {
                                                    node: {
                                                        title: "The node Schema",
                                                        type: "object",
                                                        required: ["name", "state"],
                                                        properties: {
                                                            name: {
                                                                title: "The name Schema",
                                                                type: "string",
                                                                examples: ["has_email", "has_email_opted_in"]
                                                            },
                                                            state: {
                                                                title: "The state Schema",
                                                                type: "string",
                                                                examples: ["qualified"]
                                                            }
                                                        },
                                                        examples: []
                                                    }
                                                },
                                                examples: []
                                            },
                                            examples: []
                                        }
                                    },
                                    examples: []
                                }
                            },
                            examples: []
                        }
                    },
                    examples: []
                },
                errors: {
                    title: "The errors Schema",
                    type: "array",
                    default: [],
                    items: {
                        title: "A Schema",
                        type: "object",
                        required: ["message", "locations", "extensions"],
                        properties: {
                            message: {
                                title: "The message Schema",
                                type: "string",
                                examples: ["Exception while fetching data (/customer) : java.lang.RuntimeException: could not resolve _fs_user_id = asdsdaddddd"]
                            },
                            locations: {
                                title: "The locations Schema",
                                type: "array",
                                items: {
                                    title: "A Schema",
                                    type: "object",
                                    required: ["line", "column"],
                                    properties: {
                                        line: {
                                            title: "The line Schema",
                                            type: "integer",
                                            examples: [2]
                                        },
                                        column: {
                                            title: "The column Schema",
                                            type: "integer",
                                            examples: [3]
                                        }
                                    },
                                    examples: []
                                },
                                examples: []
                            },
                            path: {
                                title: "The path Schema",
                                type: "array",
                                items: {
                                    title: "A Schema",
                                    type: "string",
                                    examples: ["customer"]
                                },
                                examples: []
                            },
                            extensions: {
                                title: "The extensions Schema",
                                type: "object",
                                required: ["classification"],
                                properties: {
                                    classification: {
                                        title: "The classification Schema",
                                        type: "string",
                                        examples: ["InvalidIdentifierException"]
                                    }
                                },
                                examples: []
                            }
                        },
                        examples: []
                    },
                    examples: []
                }
            },
            examples: []
        },
        th = [],
        tE = function() {
            function e(e, t) {
                this.toGraphQLJson = function(e, t, i) {
                    return g(g(['{"query" : "query {customer', "(".concat(e, ' : \\"').concat(t, '\\") '), "{audiences", "(subset: ["], (null == i ? void 0 : i.map(function(e, t) {
                        return '\\"'.concat(e, '\\"').concat(t < i.length - 1 ? "," : "")
                    })) || "", !0), [']) {edges {node {name state}}}}}"}'], !1).join("")
                }, this.requestHandler = e, this.logger = t
            }
            return e.prototype.fetchSegments = function(e, t, r, n, o) {
                var a, s, u, l;
                return f(this, void 0, void 0, function() {
                    var c, d, f, g, h, E, v, y;
                    return p(this, function(p) {
                        switch (p.label) {
                            case 0:
                                return e && t ? 0 === (null == o ? void 0 : o.length) ? [2, th] : (c = "".concat(t, "/v3/graphql"), d = this.toGraphQLJson(r, n, o), [4, this.querySegments(e, c, r, n, d)]) : (this.logger.log(i.LogLevel.ERROR, "".concat("Audience segments fetch failed", " (Parameters apiKey or apiHost invalid)")), [2, null]);
                            case 1:
                                return (f = p.sent()) ? (g = this.parseSegmentsResponseJson(f)) ? (null == (a = g.errors) ? void 0 : a.length) > 0 ? (E = (h = g.errors[0].extensions).code, v = h.classification, "INVALID_IDENTIFIER_EXCEPTION" == E ? this.logger.log(i.LogLevel.ERROR, "".concat("Audience segments fetch failed", " (invalid identifier)")) : this.logger.log(i.LogLevel.ERROR, "".concat("Audience segments fetch failed", " (").concat(v, ")")), [2, null]) : (y = null == (l = null == (u = null == (s = null == g ? void 0 : g.data) ? void 0 : s.customer) ? void 0 : u.audiences) ? void 0 : l.edges) ? [2, y.filter(function(e) {
                                    return "qualified" == e.node.state
                                }).map(function(e) {
                                    return e.node.name
                                })] : (this.logger.log(i.LogLevel.ERROR, "".concat("Audience segments fetch failed", " (decode error)")), [2, null]) : (this.logger.log(i.LogLevel.ERROR, "".concat("Audience segments fetch failed", " (decode error)")), [2, null]) : (this.logger.log(i.LogLevel.ERROR, "".concat("Audience segments fetch failed", " (network error)")), [2, null])
                        }
                    })
                })
            }, e.prototype.querySegments = function(e, t, i, r, n) {
                return f(this, void 0, void 0, function() {
                    var i, r, o, a;
                    return p(this, function(s) {
                        switch (s.label) {
                            case 0:
                                i = "POST", r = t, o = {
                                    "Content-Type": "application/json",
                                    "x-api-key": e
                                }, s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, , 4]), [4, this.requestHandler.makeRequest(r, o, i, n).responsePromise];
                            case 2:
                                return a = s.sent(), [3, 4];
                            case 3:
                                return s.sent(), [2, null];
                            case 4:
                                return [2, a.body]
                        }
                    })
                })
            }, e.prototype.parseSegmentsResponseJson = function(e) {
                var t = {};
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    return null
                }
                return ! function(e, t, i) {
                    void 0 === t && (t = tp), void 0 === i && (i = !0);
                    var r = "".concat("JSON_SCHEMA_VALIDATOR", " (").concat(t.title, ")");
                    if ("object" != typeof e || null === e) throw Error(O(q.NO_JSON_PROVIDED, r));
                    var n = a.validate(e, t);
                    if (n.valid) return !0;
                    if (!i) return !1;
                    if (Array.isArray(n.errors)) throw Error(O(q.INVALID_DATAFILE, r, n.errors[0].property, n.errors[0].message));
                    throw Error(O(q.INVALID_JSON, r))
                }(t, tg, !1) ? null : t
            }, e
        }(),
        tv = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return c(t, e), t.createInstance = function(e) {
                var i = e.logger,
                    r = e.odpOptions,
                    n = e.odpIntegrationConfig,
                    o = e.clientEngine,
                    a = e.clientVersion;
                i = i || x(), o = o || "javascript-sdk", a = a || "5.3.4";
                var s, u, l, c = void 0;
                return (null == n ? void 0 : n.integrated) && (c = n.odpConfig), s = (null == r ? void 0 : r.segmentsRequestHandler) ? r.segmentsRequestHandler : new e5(i, (null == r ? void 0 : r.segmentsApiTimeout) || 1e4), u = (null == r ? void 0 : r.segmentManager) ? r.segmentManager : new tf((null == r ? void 0 : r.segmentsCache) || new e9({
                    maxSize: null == r ? void 0 : r.segmentsCacheSize,
                    timeout: null == r ? void 0 : r.segmentsCacheTimeout
                }), new tE(s, i), i, c), l = (null == r ? void 0 : r.eventRequestHandler) ? r.eventRequestHandler : new e5(i, (null == r ? void 0 : r.eventApiTimeout) || 1e4), new t({
                    odpIntegrationConfig: n,
                    segmentManager: u,
                    eventManager: (null == r ? void 0 : r.eventManager) ? r.eventManager : new td({
                        odpConfig: c,
                        apiManager: new tl(l, i),
                        logger: i,
                        clientEngine: o,
                        clientVersion: a,
                        flushInterval: null == r ? void 0 : r.eventFlushInterval,
                        batchSize: null == r ? void 0 : r.eventBatchSize,
                        queueSize: null == r ? void 0 : r.eventQueueSize,
                        userAgentParser: null == r ? void 0 : r.userAgentParser
                    }),
                    logger: i
                })
            }, t.prototype.initializeVuid = function() {
                return f(this, void 0, void 0, function() {
                    var e;
                    return p(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, e7.instance(t.cache)];
                            case 1:
                                return e = i.sent(), this.vuid = e.vuid, [2]
                        }
                    })
                })
            }, t.prototype.identifyUser = function(t, i) {
                t && e7.isVuid(t) ? e.prototype.identifyUser.call(this, void 0, t) : t && i && e7.isVuid(i) ? e.prototype.identifyUser.call(this, t, i) : e.prototype.identifyUser.call(this, t, i || this.vuid)
            }, t.prototype.sendEvent = function(t) {
                var i = t.type,
                    r = t.action,
                    n = t.identifiers,
                    o = t.data,
                    a = new Map(n);
                if (!n.has(eb.VUID)) {
                    if (!this.vuid) throw Error(q.ODP_SEND_EVENT_FAILED_VUID_MISSING);
                    a.set(eb.VUID, this.vuid)
                }
                e.prototype.sendEvent.call(this, {
                    type: i,
                    action: r,
                    identifiers: a,
                    data: o
                })
            }, t.prototype.isVuidEnabled = function() {
                return !0
            }, t.prototype.getVuid = function() {
                return this.vuid
            }, t.cache = new e6, t
        }(tu);

    function ty(e, t, i) {
        return {
            variationKey: null,
            enabled: !1,
            variables: {},
            ruleKey: null,
            flagKey: e,
            userContext: t,
            reasons: i
        }
    }
    var tI = function() {
            function e(e) {
                var t, i = e.optimizely,
                    r = e.userId,
                    n = e.attributes,
                    o = e.shouldIdentifyUser,
                    a = this;
                this._qualifiedSegments = null, this.optimizely = i, this.userId = r, this.attributes = null != (t = d({}, n)) ? t : {}, this.forcedDecisionsMap = {}, (void 0 === o || o) && this.optimizely.onReady().then(function(e) {
                    e.success && a.identifyUser()
                })
            }
            return e.prototype.identifyUser = function() {
                this.optimizely.identifyUser(this.userId)
            }, e.prototype.setAttribute = function(e, t) {
                this.attributes[e] = t
            }, e.prototype.getUserId = function() {
                return this.userId
            }, e.prototype.getAttributes = function() {
                return d({}, this.attributes)
            }, e.prototype.getOptimizely = function() {
                return this.optimizely
            }, Object.defineProperty(e.prototype, "qualifiedSegments", {
                get: function() {
                    return this._qualifiedSegments
                },
                set: function(e) {
                    this._qualifiedSegments = e
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.decide = function(e, t) {
                return void 0 === t && (t = []), this.optimizely.decide(this.cloneUserContext(), e, t)
            }, e.prototype.decideForKeys = function(e, t) {
                return void 0 === t && (t = []), this.optimizely.decideForKeys(this.cloneUserContext(), e, t)
            }, e.prototype.decideAll = function(e) {
                return void 0 === e && (e = []), this.optimizely.decideAll(this.cloneUserContext(), e)
            }, e.prototype.trackEvent = function(e, t) {
                this.optimizely.track(e, this.userId, this.attributes, t)
            }, e.prototype.setForcedDecision = function(e, t) {
                var i, r = e.flagKey,
                    n = null != (i = e.ruleKey) ? i : Y.FORCED_DECISION_NULL_RULE_KEY,
                    o = {
                        variationKey: t.variationKey
                    };
                return this.forcedDecisionsMap[r] || (this.forcedDecisionsMap[r] = {}), this.forcedDecisionsMap[r][n] = o, !0
            }, e.prototype.getForcedDecision = function(e) {
                return this.findForcedDecision(e)
            }, e.prototype.removeForcedDecision = function(e) {
                var t, i = null != (t = e.ruleKey) ? t : Y.FORCED_DECISION_NULL_RULE_KEY,
                    r = e.flagKey,
                    n = !1;
                return this.forcedDecisionsMap.hasOwnProperty(r) && (this.forcedDecisionsMap[r].hasOwnProperty(i) && (delete this.forcedDecisionsMap[r][i], n = !0), 0 === Object.keys(this.forcedDecisionsMap[r]).length && delete this.forcedDecisionsMap[r]), n
            }, e.prototype.removeAllForcedDecisions = function() {
                return this.forcedDecisionsMap = {}, !0
            }, e.prototype.findForcedDecision = function(e) {
                var t, i = null != (t = e.ruleKey) ? t : Y.FORCED_DECISION_NULL_RULE_KEY,
                    r = e.flagKey;
                if (this.forcedDecisionsMap.hasOwnProperty(e.flagKey)) {
                    var n = this.forcedDecisionsMap[r];
                    if (n.hasOwnProperty(i)) return {
                        variationKey: n[i].variationKey
                    }
                }
                return null
            }, e.prototype.cloneUserContext = function() {
                var t = new e({
                    shouldIdentifyUser: !1,
                    optimizely: this.getOptimizely(),
                    userId: this.getUserId(),
                    attributes: this.getAttributes()
                });
                return Object.keys(this.forcedDecisionsMap).length > 0 && (t.forcedDecisionsMap = d({}, this.forcedDecisionsMap)), t._qualifiedSegments = this._qualifiedSegments, t
            }, e.prototype.fetchQualifiedSegments = function(e) {
                return f(this, void 0, void 0, function() {
                    var t;
                    return p(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.optimizely.fetchQualifiedSegments(this.userId, e)];
                            case 1:
                                return t = i.sent(), this.qualifiedSegments = t, [2, null !== t]
                        }
                    })
                })
            }, e.prototype.isQualifiedFor = function(e) {
                return !!this._qualifiedSegments && this._qualifiedSegments.indexOf(e) > -1
            }, e
        }(),
        t_ = ["and", "or", "not"];

    function tm(e, t) {
        if (Array.isArray(e)) {
            var i = e[0],
                r = e.slice(1);
            switch ("string" == typeof i && -1 === t_.indexOf(i) && (i = "or", r = e), i) {
                case "and":
                    var n = r,
                        o = !1;
                    if (Array.isArray(n)) {
                        for (var a = 0; a < n.length; a++) {
                            var s = tm(n[a], t);
                            if (!1 === s) return !1;
                            null === s && (o = !0)
                        }
                        return !o || null
                    }
                    return null;
                case "not":
                    var u = r;
                    if (Array.isArray(u) && u.length > 0) {
                        var l = tm(u[0], t);
                        return null === l ? null : !l
                    }
                    return null;
                default:
                    var c = r,
                        d = !1;
                    if (Array.isArray(c)) {
                        for (var f = 0; f < c.length; f++) {
                            var p = tm(c[f], t);
                            if (!0 === p) return !0;
                            null === p && (d = !0)
                        }
                        return !!d && null
                    }
                    return null
            }
        }
        return t(e)
    }
    var tO = function() {
            function e(t, i, r) {
                this.sdkKey = null != (n = t.sdkKey) ? n : "", this.environmentKey = null != (o = t.environmentKey) ? o : "", this.attributes = t.attributes, this.audiences = e.getAudiences(t), this.events = t.events, this.revision = t.revision;
                var n, o, a = (t.featureFlags || []).reduce(function(e, t) {
                        return e[t.id] = t.variables, e
                    }, {}),
                    s = e.getVariableIdMap(t),
                    u = e.getExperimentsMap(t, a, s, r),
                    l = u.experimentsMapById,
                    c = u.experimentsMapByKey;
                this.experimentsMap = c, this.featuresMap = e.getFeaturesMap(t, a, l, s), this.datafile = i
            }
            return e.prototype.getDatafile = function() {
                return this.datafile
            }, e.getAudiences = function(e) {
                var t = [],
                    i = [];
                return (e.typedAudiences || []).forEach(function(e) {
                    t.push({
                        id: e.id,
                        conditions: JSON.stringify(e.conditions),
                        name: e.name
                    }), i.push(e.id)
                }), (e.audiences || []).forEach(function(e) {
                    -1 === i.indexOf(e.id) && "$opt_dummy_audience" != e.id && t.push({
                        id: e.id,
                        conditions: JSON.stringify(e.conditions),
                        name: e.name
                    })
                }), t
            }, e.getSerializedAudiences = function(t, i) {
                var r = "";
                if (t) {
                    var n = "";
                    t.forEach(function(t) {
                        var o = "";
                        if (t instanceof Array) o = e.getSerializedAudiences(t, i), o = "(".concat(o, ")");
                        else if (t_.indexOf(t) > -1) n = t.toUpperCase();
                        else {
                            var a = i[t] ? i[t].name : t;
                            r || "NOT" === n ? (n = "" === n ? "OR" : n, r = "" === r ? "".concat(n, ' "').concat(i[t].name, '"') : r.concat(" ".concat(n, ' "').concat(a, '"'))) : r = '"'.concat(a, '"')
                        }
                        "" !== o && ("" !== r || "NOT" === n ? (n = "" === n ? "OR" : n, r = "" === r ? "".concat(n, " ").concat(o) : r.concat(" ".concat(n, " ").concat(o))) : r = r.concat(o))
                    })
                }
                return r
            }, e.getExperimentAudiences = function(t, i) {
                return t.audienceConditions ? e.getSerializedAudiences(t.audienceConditions, i.audiencesById) : ""
            }, e.mergeFeatureVariables = function(e, t, i, r, n) {
                var o = (e[i] || []).reduce(function(e, t) {
                    return e[t.key] = {
                        id: t.id,
                        key: t.key,
                        type: t.type,
                        value: t.defaultValue
                    }, e
                }, {});
                return (r || []).forEach(function(e) {
                    var i = t[e.id],
                        r = {
                            id: e.id,
                            key: i.key,
                            type: i.type,
                            value: n ? e.value : i.defaultValue
                        };
                    o[i.key] = r
                }), o
            }, e.getVariationsMap = function(t, i, r, n) {
                return t.reduce(function(t, o) {
                    var a = e.mergeFeatureVariables(i, r, n, o.variables, o.featureEnabled);
                    return t[o.key] = {
                        id: o.id,
                        key: o.key,
                        featureEnabled: o.featureEnabled,
                        variablesMap: a
                    }, t
                }, {})
            }, e.getVariableIdMap = function(e) {
                return (e.featureFlags || []).reduce(function(e, t) {
                    return t.variables.forEach(function(t) {
                        e[t.id] = t
                    }), e
                }, {})
            }, e.getDeliveryRules = function(t, i, r, n, o) {
                return n.map(function(n) {
                    return {
                        id: n.id,
                        key: n.key,
                        audiences: e.getExperimentAudiences(n, t),
                        variationsMap: e.getVariationsMap(n.variations, i, o, r)
                    }
                })
            }, e.getRolloutExperimentIds = function(e) {
                var t = [];
                return (e || []).forEach(function(e) {
                    e.experiments.forEach(function(e) {
                        t.push(e.id)
                    })
                }), t
            }, e.getExperimentsMap = function(t, i, r, n) {
                var o = this.getRolloutExperimentIds(t.rollouts),
                    a = {},
                    s = {};
                return (t.experiments || []).forEach(function(u) {
                    if (-1 === o.indexOf(u.id)) {
                        var l = t.experimentFeatureMap[u.id],
                            c = "";
                        l && l.length > 0 && (c = l[0]);
                        var d = e.getVariationsMap(u.variations, i, r, c.toString()),
                            f = {
                                id: u.id,
                                key: u.key,
                                audiences: e.getExperimentAudiences(u, t),
                                variationsMap: d
                            };
                        a[u.id] = f, s[u.key] && n && n.warn("Duplicate experiment keys found in datafile: ".concat(u.key)), s[u.key] = f
                    }
                }), {
                    experimentsMapById: a,
                    experimentsMapByKey: s
                }
            }, e.getExperimentsKeyMap = function(e) {
                var t = {};
                for (var i in e) {
                    var r = e[i];
                    t[r.key] = r
                }
                return t
            }, e.getFeaturesMap = function(t, i, r, n) {
                var o = {};
                return t.featureFlags.forEach(function(a) {
                    var s = {},
                        u = [];
                    a.experimentIds.forEach(function(e) {
                        var t = r[e];
                        t && (s[t.key] = t), u.push(r[e])
                    });
                    var l = (a.variables || []).reduce(function(e, t) {
                            return e[t.key] = {
                                id: t.id,
                                key: t.key,
                                type: t.type,
                                value: t.defaultValue
                            }, e
                        }, {}),
                        c = [],
                        d = t.rolloutIdMap[a.rolloutId];
                    d && (c = e.getDeliveryRules(t, i, a.id, d.experiments, n)), o[a.key] = {
                        id: a.id,
                        key: a.key,
                        experimentRules: u,
                        deliveryRules: c,
                        experimentsMap: s,
                        variablesMap: l
                    }
                }), o
            }, e
        }(),
        tb = x();

    function tR(e, t) {
        return e instanceof Error ? e.message : t || "Unknown error"
    }
    var tN = function() {
            function e(e) {
                this.updateListeners = [], this.configObj = null, this.optimizelyConfigObj = null, this.datafileManager = null;
                try {
                    if (this.jsonSchemaValidator = e.jsonSchemaValidator, !e.datafile && !e.sdkKey) {
                        var t = Error(O(q.DATAFILE_AND_SDK_KEY_MISSING, "PROJECT_CONFIG_MANAGER"));
                        return this.readyPromise = Promise.resolve({
                            success: !1,
                            reason: tR(t)
                        }), void tb.error(t)
                    }
                    var i = null;
                    e.datafile && (i = this.handleNewDatafile(e.datafile)), e.sdkKey && e.datafileManager ? (this.datafileManager = e.datafileManager, this.datafileManager.start(), this.readyPromise = this.datafileManager.onReady().then(this.onDatafileManagerReadyFulfill.bind(this), this.onDatafileManagerReadyReject.bind(this)), this.datafileManager.on("update", this.onDatafileManagerUpdate.bind(this))) : this.configObj ? this.readyPromise = Promise.resolve({
                        success: !0
                    }) : this.readyPromise = Promise.resolve({
                        success: !1,
                        reason: tR(i, "Invalid datafile")
                    })
                } catch (e) {
                    tb.error(e), this.readyPromise = Promise.resolve({
                        success: !1,
                        reason: tR(e, "Error in initialize")
                    })
                }
            }
            return e.prototype.onDatafileManagerReadyFulfill = function() {
                if (this.datafileManager) {
                    var e = this.handleNewDatafile(this.datafileManager.get());
                    return e ? {
                        success: !1,
                        reason: tR(e)
                    } : {
                        success: !0
                    }
                }
                return {
                    success: !1,
                    reason: tR(null, "Datafile manager is not provided")
                }
            }, e.prototype.onDatafileManagerReadyReject = function(e) {
                return {
                    success: !1,
                    reason: tR(e, "Failed to become ready")
                }
            }, e.prototype.onDatafileManagerUpdate = function() {
                this.datafileManager && this.handleNewDatafile(this.datafileManager.get())
            }, e.prototype.handleNewDatafile = function(e) {
                var t = this,
                    i = e1({
                        datafile: e,
                        jsonSchemaValidator: this.jsonSchemaValidator,
                        logger: tb
                    }),
                    r = i.configObj,
                    n = i.error;
                if (n) tb.error(n);
                else {
                    var o = this.configObj ? this.configObj.revision : "null";
                    r && o !== r.revision && (this.configObj = r, this.optimizelyConfigObj = null, tc(function() {
                        t.updateListeners.forEach(function(e) {
                            return e(r)
                        })
                    }))
                }
                return n
            }, e.prototype.getConfig = function() {
                return this.configObj
            }, e.prototype.getOptimizelyConfig = function() {
                var e;
                return !this.optimizelyConfigObj && this.configObj && (this.optimizelyConfigObj = (e = this.configObj, new tO(e, e0(this.configObj), tb))), this.optimizelyConfigObj
            }, e.prototype.onReady = function() {
                return this.readyPromise
            }, e.prototype.onUpdate = function(e) {
                var t = this;
                return this.updateListeners.push(e),
                    function() {
                        var i = t.updateListeners.indexOf(e);
                        i > -1 && t.updateListeners.splice(i, 1)
                    }
            }, e.prototype.stop = function() {
                this.datafileManager && this.datafileManager.stop(), this.updateListeners = []
            }, e
        }(),
        tT = function(e) {
            var t = [],
                i = e.experimentIdMap[e.experimentId].groupId;
            if (i) {
                var r = e.groupIdMap[i];
                if (!r) throw Error(O(q.INVALID_GROUP_ID, "BUCKETER", i));
                if ("random" === r.policy) {
                    var n = tA(r, e.bucketingId, e.userId, e.logger);
                    if (null === n) return e.logger.log(B.INFO, H.USER_NOT_IN_ANY_EXPERIMENT, "BUCKETER", e.userId, i), t.push([H.USER_NOT_IN_ANY_EXPERIMENT, "BUCKETER", e.userId, i]), {
                        result: null,
                        reasons: t
                    };
                    if (n !== e.experimentId) return e.logger.log(B.INFO, H.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", e.userId, e.experimentKey, i), t.push([H.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", e.userId, e.experimentKey, i]), {
                        result: null,
                        reasons: t
                    };
                    e.logger.log(B.INFO, H.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", e.userId, e.experimentKey, i), t.push([H.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP, "BUCKETER", e.userId, e.experimentKey, i])
                }
            }
            var o = tS("".concat(e.bucketingId).concat(e.experimentId));
            e.logger.log(B.DEBUG, H.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, "BUCKETER", o, e.userId), t.push([H.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, "BUCKETER", o, e.userId]);
            var a = tU(o, e.trafficAllocationConfig);
            return null === a || e.variationIdMap[a] ? {
                result: a,
                reasons: t
            } : (a && (e.logger.log(B.WARNING, H.INVALID_VARIATION_ID, "BUCKETER"), t.push([H.INVALID_VARIATION_ID, "BUCKETER"])), {
                result: null,
                reasons: t
            })
        },
        tA = function(e, t, i, r) {
            var n = tS("".concat(t).concat(e.id));
            return r.log(B.DEBUG, H.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, "BUCKETER", n, i), tU(n, e.trafficAllocation)
        },
        tU = function(e, t) {
            for (var i = 0; i < t.length; i++)
                if (e < t[i].endOfRange) return t[i].entityId;
            return null
        },
        tS = function(e) {
            try {
                var t = s.v3(e, 1) / 0x100000000;
                return Math.floor(1e4 * t)
            } catch (t) {
                throw Error(O(q.INVALID_BUCKETING_ID, "BUCKETER", e, t.message))
            }
        },
        tD = x();

    function tL(e) {
        return /^\d+$/.test(e)
    }

    function tC(e) {
        var t = e.indexOf("-"),
            i = e.indexOf("+");
        return !(t < 0) && (i < 0 || t < i)
    }

    function tw(e) {
        var t = e.indexOf("-"),
            i = e.indexOf("+");
        return !(i < 0) && (t < 0 || i < t)
    }

    function tP(e) {
        var t = e,
            i = "";
        if (/\s/.test(e)) return tD.warn(H.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", e), null;
        if (tC(e) ? (t = e.substring(0, e.indexOf("-")), i = e.substring(e.indexOf("-") + 1)) : tw(e) && (t = e.substring(0, e.indexOf("+")), i = e.substring(e.indexOf("+") + 1)), "string" != typeof t || "string" != typeof i) return null;
        var r = t.split(".").length - 1;
        if (r > 2) return tD.warn(H.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", e), null;
        var n = t.split(".");
        if (n.length != r + 1) return tD.warn(H.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", e), null;
        for (var o = 0; o < n.length; o++)
            if (!tL(n[o])) return tD.warn(H.UNKNOWN_MATCH_TYPE, "SEMANTIC VERSION", e), null;
        return i && n.push(i), n
    }
    var tx = "CUSTOM_ATTRIBUTE_CONDITION_EVALUATOR",
        tV = x(),
        tM = ["exact", "exists", "gt", "ge", "lt", "le", "substring", "semver_eq", "semver_lt", "semver_le", "semver_gt", "semver_ge"],
        tF = {};

    function tk(e) {
        return "string" == typeof e || "boolean" == typeof e || T(e)
    }

    function tG(e, t) {
        var i = t.getAttributes(),
            r = e.value,
            n = typeof r,
            o = e.name,
            a = i[o],
            s = typeof a;
        return !tk(r) || T(r) && !N(r) ? (tV.warn(H.UNEXPECTED_CONDITION_VALUE, tx, JSON.stringify(e)), null) : null === a ? (tV.debug(H.UNEXPECTED_TYPE_NULL, tx, JSON.stringify(e), o), null) : tk(a) && n === s ? T(a) && !N(a) ? (tV.warn(H.OUT_OF_BOUNDS, tx, JSON.stringify(e), o), null) : r === a : (tV.warn(H.UNEXPECTED_TYPE, tx, JSON.stringify(e), s, o), null)
    }

    function tK(e, t) {
        var i = t.getAttributes(),
            r = e.name,
            n = i[r],
            o = typeof n,
            a = e.value;
        return null !== a && N(a) ? null === n ? (tV.debug(H.UNEXPECTED_TYPE_NULL, tx, JSON.stringify(e), r), !1) : T(n) ? !!N(n) || (tV.warn(H.OUT_OF_BOUNDS, tx, JSON.stringify(e), r), !1) : (tV.warn(H.UNEXPECTED_TYPE, tx, JSON.stringify(e), o, r), !1) : (tV.warn(H.UNEXPECTED_CONDITION_VALUE, tx, JSON.stringify(e)), !1)
    }

    function tj(e, t) {
        var i = t.getAttributes(),
            r = e.name,
            n = i[r],
            o = e.value;
        return "string" != typeof o ? (tV.warn(H.UNEXPECTED_CONDITION_VALUE, tx, JSON.stringify(e)), null) : null === n ? (tV.debug(H.UNEXPECTED_TYPE_NULL, tx, JSON.stringify(e), r), null) : "string" != typeof n ? (tV.warn(H.UNEXPECTED_TYPE, tx, JSON.stringify(e), typeof n, r), null) : function(e, t) {
            var i = tP(t),
                r = tP(e);
            if (!i || !r) return null;
            for (var n = i.length, o = 0; o < r.length; o++) {
                if (n <= o) return tC(e) || tw(e) ? 1 : -1;
                if (tL(i[o])) {
                    var a = parseInt(i[o]),
                        s = parseInt(r[o]);
                    if (a > s) return 1;
                    if (a < s) return -1
                } else {
                    if (i[o] < r[o]) return tC(e) && !tC(t) ? 1 : -1;
                    if (i[o] > r[o]) return !tC(e) && tC(t) ? -1 : 1
                }
            }
            return tC(t) && !tC(e) ? -1 : 0
        }(o, n)
    }
    tF.exact = tG, tF.exists = function(e, t) {
        return null != t.getAttributes()[e.name]
    }, tF.gt = function(e, t) {
        var i = t.getAttributes()[e.name],
            r = e.value;
        return tK(e, t) && null !== r ? i > r : null
    }, tF.ge = function(e, t) {
        var i = t.getAttributes()[e.name],
            r = e.value;
        return tK(e, t) && null !== r ? i >= r : null
    }, tF.lt = function(e, t) {
        var i = t.getAttributes()[e.name],
            r = e.value;
        return tK(e, t) && null !== r ? i < r : null
    }, tF.le = function(e, t) {
        var i = t.getAttributes()[e.name],
            r = e.value;
        return tK(e, t) && null !== r ? i <= r : null
    }, tF.substring = function(e, t) {
        var i = t.getAttributes(),
            r = e.name,
            n = i[e.name],
            o = typeof n,
            a = e.value;
        return "string" != typeof a ? (tV.warn(H.UNEXPECTED_CONDITION_VALUE, tx, JSON.stringify(e)), null) : null === n ? (tV.debug(H.UNEXPECTED_TYPE_NULL, tx, JSON.stringify(e), r), null) : "string" != typeof n ? (tV.warn(H.UNEXPECTED_TYPE, tx, JSON.stringify(e), o, r), null) : -1 !== n.indexOf(a)
    }, tF.semver_eq = function(e, t) {
        var i = tj(e, t);
        return null === i ? null : 0 === i
    }, tF.semver_gt = function(e, t) {
        var i = tj(e, t);
        return null === i ? null : i > 0
    }, tF.semver_ge = function(e, t) {
        var i = tj(e, t);
        return null === i ? null : i >= 0
    }, tF.semver_lt = function(e, t) {
        var i = tj(e, t);
        return null === i ? null : i < 0
    }, tF.semver_le = function(e, t) {
        var i = tj(e, t);
        return null === i ? null : i <= 0
    };
    var tz = Object.freeze({
            __proto__: null,
            evaluate: function(e, t) {
                var i = t.getAttributes(),
                    r = e.match;
                if (void 0 !== r && -1 === tM.indexOf(r)) return tV.warn(H.UNKNOWN_MATCH_TYPE, tx, JSON.stringify(e)), null;
                var n = e.name;
                return i.hasOwnProperty(n) || "exists" == r ? (r && tF[r] || tG)(e, t) : (tV.debug(H.MISSING_ATTRIBUTE_VALUE, tx, JSON.stringify(e), n), null)
            }
        }),
        tB = x(),
        tq = ["qualified"],
        tH = {};

    function tY(e, t) {
        return t.isQualifiedFor(e.value)
    }
    tH.qualified = tY;
    var tX = Object.freeze({
            __proto__: null,
            evaluate: function(e, t) {
                var i = e.match;
                return void 0 !== i && -1 === tq.indexOf(i) ? (tB.warn(H.UNKNOWN_MATCH_TYPE, "ODP_SEGMENT_CONDITION_EVALUATOR", JSON.stringify(e)), null) : (i && tH[i] || tY)(e, t)
            }
        }),
        tW = x(),
        tJ = function() {
            function e(e) {
                this.typeToEvaluatorMap = E({}, e, {
                    custom_attribute: tz,
                    third_party_dimension: tX
                })
            }
            return e.prototype.evaluate = function(e, t, i) {
                var r = this;
                return !e || 0 === e.length || !!tm(e, function(e) {
                    var n = t[e];
                    if (n) {
                        tW.log(B.DEBUG, H.EVALUATING_AUDIENCE, "AUDIENCE_EVALUATOR", e, JSON.stringify(n.conditions));
                        var o = tm(n.conditions, r.evaluateConditionWithUserAttributes.bind(r, i)),
                            a = null === o ? "UNKNOWN" : o.toString().toUpperCase();
                        return tW.log(B.DEBUG, H.AUDIENCE_EVALUATION_RESULT, "AUDIENCE_EVALUATOR", e, a), o
                    }
                    return null
                })
            }, e.prototype.evaluateConditionWithUserAttributes = function(e, t) {
                var i = this.typeToEvaluatorMap[t.type];
                if (!i) return tW.log(B.WARNING, H.UNKNOWN_CONDITION_TYPE, "AUDIENCE_EVALUATOR", JSON.stringify(t)), null;
                try {
                    return i.evaluate(t, e)
                } catch (e) {
                    tW.log(B.ERROR, q.CONDITION_EVALUATOR_ERROR, "AUDIENCE_EVALUATOR", t.type, e.message)
                }
                return null
            }, e
        }();

    function tZ(e) {
        return "string" == typeof e && "" !== e
    }
    var tQ = "DECISION_SERVICE",
        t$ = function() {
            function e(e) {
                this.audienceEvaluator = new tJ(e.UNSTABLE_conditionEvaluators), this.forcedVariationMap = {}, this.logger = e.logger, this.userProfileService = e.userProfileService || null
            }
            return e.prototype.getVariation = function(e, t, r, n) {
                void 0 === n && (n = {});
                var o = r.getUserId(),
                    a = r.getAttributes(),
                    s = this.getBucketingId(o, a),
                    u = [],
                    l = t.key;
                if (!this.checkIfExperimentIsActive(e, l)) return this.logger.log(B.INFO, H.EXPERIMENT_NOT_RUNNING, tQ, l), u.push([H.EXPERIMENT_NOT_RUNNING, tQ, l]), {
                    result: null,
                    reasons: u
                };
                var c = this.getForcedVariation(e, l, o);
                u.push.apply(u, c.reasons);
                var d = c.result;
                if (d) return {
                    result: d,
                    reasons: u
                };
                var f = this.getWhitelistedVariation(t, o);
                u.push.apply(u, f.reasons);
                var p = f.result;
                if (p) return {
                    result: p.key,
                    reasons: u
                };
                var g = n[i.OptimizelyDecideOption.IGNORE_USER_PROFILE_SERVICE],
                    h = this.resolveExperimentBucketMap(o, a);
                if (!g && (p = this.getStoredVariation(e, t, o, h))) return this.logger.log(B.INFO, H.RETURNING_STORED_VARIATION, tQ, p.key, l, o), u.push([H.RETURNING_STORED_VARIATION, tQ, p.key, l, o]), {
                    result: p.key,
                    reasons: u
                };
                var E = this.checkIfUserIsInAudience(e, t, J.EXPERIMENT, r, "");
                if (u.push.apply(u, E.reasons), !E.result) return this.logger.log(B.INFO, H.USER_NOT_IN_EXPERIMENT, tQ, o, l), u.push([H.USER_NOT_IN_EXPERIMENT, tQ, o, l]), {
                    result: null,
                    reasons: u
                };
                var v = tT(this.buildBucketerParams(e, t, s, o));
                u.push.apply(u, v.reasons);
                var y = v.result;
                return y && (p = e.variationIdMap[y]), p ? (this.logger.log(B.INFO, H.USER_HAS_VARIATION, tQ, o, p.key, l), u.push([H.USER_HAS_VARIATION, tQ, o, p.key, l]), g || this.saveUserProfile(t, p, o, h), {
                    result: p.key,
                    reasons: u
                }) : (this.logger.log(B.DEBUG, H.USER_HAS_NO_VARIATION, tQ, o, l), u.push([H.USER_HAS_NO_VARIATION, tQ, o, l]), {
                    result: null,
                    reasons: u
                })
            }, e.prototype.resolveExperimentBucketMap = function(e, t) {
                t = t || {};
                var i = this.getUserProfile(e) || {},
                    r = t[Y.STICKY_BUCKETING_KEY];
                return E({}, i.experiment_bucket_map, r)
            }, e.prototype.checkIfExperimentIsActive = function(e, t) {
                return "Running" === eY(e, t)
            }, e.prototype.getWhitelistedVariation = function(e, t) {
                var i = [];
                if (e.forcedVariations && e.forcedVariations.hasOwnProperty(t)) {
                    var r = e.forcedVariations[t];
                    return e.variationKeyMap.hasOwnProperty(r) ? (this.logger.log(B.INFO, H.USER_FORCED_IN_VARIATION, tQ, t, r), i.push([H.USER_FORCED_IN_VARIATION, tQ, t, r]), {
                        result: e.variationKeyMap[r],
                        reasons: i
                    }) : (this.logger.log(B.ERROR, H.FORCED_BUCKETING_FAILED, tQ, r, t), i.push([H.FORCED_BUCKETING_FAILED, tQ, r, t]), {
                        result: null,
                        reasons: i
                    })
                }
                return {
                    result: null,
                    reasons: i
                }
            }, e.prototype.checkIfUserIsInAudience = function(e, t, i, r, n) {
                var o = [],
                    a = function(e, t) {
                        var i = e.experimentIdMap[t];
                        if (!i) throw Error(O(q.INVALID_EXPERIMENT_ID, eG, t));
                        return i.audienceConditions || i.audienceIds
                    }(e, t.id),
                    s = e.audiencesById;
                this.logger.log(B.DEBUG, H.EVALUATING_AUDIENCES_COMBINED, tQ, i, n || t.key, JSON.stringify(a)), o.push([H.EVALUATING_AUDIENCES_COMBINED, tQ, i, n || t.key, JSON.stringify(a)]);
                var u = this.audienceEvaluator.evaluate(a, s, r);
                return this.logger.log(B.INFO, H.AUDIENCE_EVALUATION_RESULT_COMBINED, tQ, i, n || t.key, u.toString().toUpperCase()), o.push([H.AUDIENCE_EVALUATION_RESULT_COMBINED, tQ, i, n || t.key, u.toString().toUpperCase()]), {
                    result: u,
                    reasons: o
                }
            }, e.prototype.buildBucketerParams = function(e, t, i, r) {
                return {
                    bucketingId: i,
                    experimentId: t.id,
                    experimentKey: t.key,
                    experimentIdMap: e.experimentIdMap,
                    experimentKeyMap: e.experimentKeyMap,
                    groupIdMap: e.groupIdMap,
                    logger: this.logger,
                    trafficAllocationConfig: eJ(e, t.id),
                    userId: r,
                    variationIdMap: e.variationIdMap
                }
            }, e.prototype.getStoredVariation = function(e, t, i, r) {
                if (r.hasOwnProperty(t.id)) {
                    var n = r[t.id],
                        o = n.variation_id;
                    if (e.variationIdMap.hasOwnProperty(o)) return e.variationIdMap[n.variation_id];
                    this.logger.log(B.INFO, H.SAVED_VARIATION_NOT_FOUND, tQ, i, o, t.key)
                }
                return null
            }, e.prototype.getUserProfile = function(e) {
                if (!this.userProfileService) return {
                    user_id: e,
                    experiment_bucket_map: {}
                };
                try {
                    return this.userProfileService.lookup(e)
                } catch (t) {
                    this.logger.log(B.ERROR, q.USER_PROFILE_LOOKUP_ERROR, tQ, e, t.message)
                }
                return null
            }, e.prototype.saveUserProfile = function(e, t, i, r) {
                if (this.userProfileService) try {
                    r[e.id] = {
                        variation_id: t.id
                    }, this.userProfileService.save({
                        user_id: i,
                        experiment_bucket_map: r
                    }), this.logger.log(B.INFO, H.SAVED_VARIATION, tQ, t.key, e.key, i)
                } catch (e) {
                    this.logger.log(B.ERROR, q.USER_PROFILE_SAVE_ERROR, tQ, i, e.message)
                }
            }, e.prototype.getVariationForFeature = function(e, t, i, r) {
                void 0 === r && (r = {});
                var n = [],
                    o = this.getVariationForFeatureExperiment(e, t, i, r);
                n.push.apply(n, o.reasons);
                var a = o.result;
                if (null !== a.variation) return {
                    result: a,
                    reasons: n
                };
                var s = this.getVariationForRollout(e, t, i);
                n.push.apply(n, s.reasons);
                var u = s.result,
                    l = i.getUserId();
                return u.variation ? (this.logger.log(B.DEBUG, H.USER_IN_ROLLOUT, tQ, l, t.key), n.push([H.USER_IN_ROLLOUT, tQ, l, t.key])) : (this.logger.log(B.DEBUG, H.USER_NOT_IN_ROLLOUT, tQ, l, t.key), n.push([H.USER_NOT_IN_ROLLOUT, tQ, l, t.key])), {
                    result: u,
                    reasons: n
                }
            }, e.prototype.getVariationForFeatureExperiment = function(e, t, i, r) {
                void 0 === r && (r = {});
                var n, o, a = [],
                    s = null;
                if (t.experimentIds.length > 0)
                    for (o = 0; o < t.experimentIds.length; o++) {
                        var u = eZ(e, t.experimentIds[o], this.logger);
                        if (u && (n = this.getVariationFromExperimentRule(e, t.key, u, i, r), a.push.apply(a, n.reasons), s = n.result)) {
                            var l = null;
                            return (l = u.variationKeyMap[s]) || (l = eQ(e, t.key, s)), {
                                result: {
                                    experiment: u,
                                    variation: l,
                                    decisionSource: W.FEATURE_TEST
                                },
                                reasons: a
                            }
                        }
                    } else this.logger.log(B.DEBUG, H.FEATURE_HAS_NO_EXPERIMENTS, tQ, t.key), a.push([H.FEATURE_HAS_NO_EXPERIMENTS, tQ, t.key]);
                return {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: W.FEATURE_TEST
                    },
                    reasons: a
                }
            }, e.prototype.getVariationForRollout = function(e, t, i) {
                var r = [];
                if (!t.rolloutId) return this.logger.log(B.DEBUG, H.NO_ROLLOUT_EXISTS, tQ, t.key), r.push([H.NO_ROLLOUT_EXISTS, tQ, t.key]), {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: W.ROLLOUT
                    },
                    reasons: r
                };
                var n = e.rolloutIdMap[t.rolloutId];
                if (!n) return this.logger.log(B.ERROR, q.INVALID_ROLLOUT_ID, tQ, t.rolloutId, t.key), r.push([q.INVALID_ROLLOUT_ID, tQ, t.rolloutId, t.key]), {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: W.ROLLOUT
                    },
                    reasons: r
                };
                var o, a, s, u = n.experiments;
                if (0 === u.length) return this.logger.log(B.ERROR, H.ROLLOUT_HAS_NO_EXPERIMENTS, tQ, t.rolloutId), r.push([H.ROLLOUT_HAS_NO_EXPERIMENTS, tQ, t.rolloutId]), {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: W.ROLLOUT
                    },
                    reasons: r
                };
                for (var l = 0; l < u.length;) {
                    if (o = this.getVariationFromDeliveryRule(e, t.key, u, l, i), r.push.apply(r, o.reasons), s = o.result, a = o.skipToEveryoneElse, s) return {
                        result: {
                            experiment: e.experimentIdMap[u[l].id],
                            variation: s,
                            decisionSource: W.ROLLOUT
                        },
                        reasons: r
                    };
                    l = a ? u.length - 1 : l + 1
                }
                return {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: W.ROLLOUT
                    },
                    reasons: r
                }
            }, e.prototype.getBucketingId = function(e, t) {
                var i = e;
                return null != t && "object" == typeof t && t.hasOwnProperty(Y.BUCKETING_ID) && ("string" == typeof t[Y.BUCKETING_ID] ? (i = String(t[Y.BUCKETING_ID]), this.logger.log(B.DEBUG, H.VALID_BUCKETING_ID, tQ, i)) : this.logger.log(B.WARNING, H.BUCKETING_ID_NOT_STRING, tQ)), i
            }, e.prototype.findValidatedForcedDecision = function(e, t, i, r) {
                var n, o = [],
                    a = t.getForcedDecision({
                        flagKey: i,
                        ruleKey: r
                    }),
                    s = null,
                    u = t.getUserId();
                return e && a && ((s = eQ(e, i, n = a.variationKey)) ? r ? (this.logger.log(B.INFO, H.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED, n, i, r, u), o.push([H.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED, n, i, r, u])) : (this.logger.log(B.INFO, H.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED, n, i, u), o.push([H.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED, n, i, u])) : r ? (this.logger.log(B.INFO, H.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID, i, r, u), o.push([H.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID, i, r, u])) : (this.logger.log(B.INFO, H.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID, i, u), o.push([H.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID, i, u]))), {
                    result: s,
                    reasons: o
                }
            }, e.prototype.removeForcedVariation = function(e, t, i) {
                if (!e) throw Error(O(q.INVALID_USER_ID, tQ));
                if (!this.forcedVariationMap.hasOwnProperty(e)) throw Error(O(q.USER_NOT_IN_FORCED_VARIATION, tQ, e));
                delete this.forcedVariationMap[e][t], this.logger.log(B.DEBUG, H.VARIATION_REMOVED_FOR_USER, tQ, i, e)
            }, e.prototype.setInForcedVariationMap = function(e, t, i) {
                this.forcedVariationMap.hasOwnProperty(e) || (this.forcedVariationMap[e] = {}), this.forcedVariationMap[e][t] = i, this.logger.log(B.DEBUG, H.USER_MAPPED_TO_FORCED_VARIATION, tQ, i, t, e)
            }, e.prototype.getForcedVariation = function(e, t, i) {
                var r, n = [],
                    o = this.forcedVariationMap[i];
                if (!o) return this.logger.log(B.DEBUG, H.USER_HAS_NO_FORCED_VARIATION, tQ, i), {
                    result: null,
                    reasons: n
                };
                try {
                    var a = eW(e, t);
                    if (!a.hasOwnProperty("id")) return this.logger.log(B.ERROR, q.IMPROPERLY_FORMATTED_EXPERIMENT, tQ, t), n.push([q.IMPROPERLY_FORMATTED_EXPERIMENT, tQ, t]), {
                        result: null,
                        reasons: n
                    };
                    r = a.id
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), n.push(e.message), {
                        result: null,
                        reasons: n
                    }
                }
                var s = o[r];
                if (!s) return this.logger.log(B.DEBUG, H.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, tQ, t, i), {
                    result: null,
                    reasons: n
                };
                var u = eX(e, s);
                return u ? (this.logger.log(B.DEBUG, H.USER_HAS_FORCED_VARIATION, tQ, u, t, i), n.push([H.USER_HAS_FORCED_VARIATION, tQ, u, t, i])) : this.logger.log(B.DEBUG, H.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, tQ, t, i), {
                    result: u,
                    reasons: n
                }
            }, e.prototype.setForcedVariation = function(e, t, i, r) {
                if (null != r && !tZ(r)) return this.logger.log(B.ERROR, q.INVALID_VARIATION_KEY, tQ), !1;
                try {
                    var n, o, a = eW(e, t);
                    if (!a.hasOwnProperty("id")) return this.logger.log(B.ERROR, q.IMPROPERLY_FORMATTED_EXPERIMENT, tQ, t), !1;
                    o = a.id
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), !1
                }
                if (null == r) try {
                    return this.removeForcedVariation(i, o, t), !0
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), !1
                }
                var s = (n = e.experimentKeyMap[t]).variationKeyMap.hasOwnProperty(r) ? n.variationKeyMap[r].id : null;
                if (!s) return this.logger.log(B.ERROR, q.NO_VARIATION_FOR_EXPERIMENT_KEY, tQ, r, t), !1;
                try {
                    return this.setInForcedVariationMap(i, o, s), !0
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), !1
                }
            }, e.prototype.getVariationFromExperimentRule = function(e, t, i, r, n) {
                void 0 === n && (n = {});
                var o = [],
                    a = this.findValidatedForcedDecision(e, r, t, i.key);
                o.push.apply(o, a.reasons);
                var s = a.result;
                if (s) return {
                    result: s.key,
                    reasons: o
                };
                var u = this.getVariation(e, i, r, n);
                return o.push.apply(o, u.reasons), {
                    result: u.result,
                    reasons: o
                }
            }, e.prototype.getVariationFromDeliveryRule = function(e, t, i, r, n) {
                var o = [],
                    a = !1,
                    s = i[r],
                    u = this.findValidatedForcedDecision(e, n, t, s.key);
                o.push.apply(o, u.reasons);
                var l = u.result;
                if (l) return {
                    result: l,
                    reasons: o,
                    skipToEveryoneElse: a
                };
                var c, d, f = n.getUserId(),
                    p = n.getAttributes(),
                    g = this.getBucketingId(f, p),
                    h = r === i.length - 1,
                    E = h ? "Everyone Else" : r + 1,
                    v = null,
                    y = this.checkIfUserIsInAudience(e, s, J.RULE, n, E);
                return o.push.apply(o, y.reasons), y.result ? (this.logger.log(B.DEBUG, H.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE, tQ, f, E), o.push([H.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE, tQ, f, E]), d = tT(this.buildBucketerParams(e, s, g, f)), o.push.apply(o, d.reasons), (c = d.result) && (v = e.variationIdMap.hasOwnProperty(c) ? e.variationIdMap[c] : null), v ? (this.logger.log(B.DEBUG, H.USER_BUCKETED_INTO_TARGETING_RULE, tQ, f, E), o.push([H.USER_BUCKETED_INTO_TARGETING_RULE, tQ, f, E])) : h || (this.logger.log(B.DEBUG, H.USER_NOT_BUCKETED_INTO_TARGETING_RULE, tQ, f, E), o.push([H.USER_NOT_BUCKETED_INTO_TARGETING_RULE, tQ, f, E]), a = !0)) : (this.logger.log(B.DEBUG, H.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE, tQ, f, E), o.push([H.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE, tQ, f, E])), {
                    result: v,
                    reasons: o,
                    skipToEveryoneElse: a
                }
            }, e
        }();

    function t0(e, t) {
        var i = e.revenue;
        if (null == i) return null;
        var r = "string" == typeof i ? parseInt(i) : i;
        return isFinite(r) ? (t.log(B.INFO, H.PARSED_REVENUE_VALUE, "EVENT_TAG_UTILS", r), r) : (t.log(B.INFO, H.FAILED_TO_PARSE_REVENUE, "EVENT_TAG_UTILS", i), null)
    }

    function t1(e, t) {
        var i = e.value;
        if (null == i) return null;
        var r = "string" == typeof i ? parseFloat(i) : i;
        return isFinite(r) ? (t.log(B.INFO, H.PARSED_NUMERIC_VALUE, "EVENT_TAG_UTILS", r), r) : (t.log(B.INFO, H.FAILED_TO_PARSE_VALUE, "EVENT_TAG_UTILS", i), null)
    }

    function t2(e, t) {
        return "string" == typeof e && ("string" == typeof t || "boolean" == typeof t || T(t) && N(t))
    }
    var t5 = "https://logx.optimizely.com/v1/events";

    function t3(e) {
        var t = e.attributes,
            i = e.userId,
            r = e.clientEngine,
            n = e.clientVersion,
            o = e.configObj,
            a = e.logger,
            s = !!o.anonymizeIP && o.anonymizeIP,
            u = o.botFiltering,
            l = {
                account_id: o.accountId,
                project_id: o.projectId,
                visitors: [{
                    snapshots: [],
                    visitor_id: i,
                    attributes: []
                }],
                revision: o.revision,
                client_name: r,
                client_version: n,
                anonymize_ip: s,
                enrich_decisions: !0
            };
        return t && Object.keys(t || {}).forEach(function(e) {
            var i = t[e];
            if (t2(e, i)) {
                var r = eq(o, e, a);
                r && l.visitors[0].attributes.push({
                    entity_id: r,
                    key: e,
                    type: "custom",
                    value: i
                })
            }
        }), "boolean" == typeof u && l.visitors[0].attributes.push({
            entity_id: Y.BOT_FILTERING,
            key: Y.BOT_FILTERING,
            type: "custom",
            value: u
        }), l
    }

    function t6(e) {
        var t, i;
        return null != (i = null == (t = e.experiment) ? void 0 : t.key) ? i : ""
    }

    function t4(e) {
        var t, i;
        return null != (i = null == (t = e.variation) ? void 0 : t.key) ? i : ""
    }

    function t8(e) {
        var t, i;
        return null != (i = null == (t = e.variation) ? void 0 : t.featureEnabled) && i
    }

    function t9(e) {
        var t, i;
        return null != (i = null == (t = e.experiment) ? void 0 : t.id) ? i : null
    }

    function t7(e) {
        var t, i;
        return null != (i = null == (t = e.variation) ? void 0 : t.id) ? i : null
    }
    var ie = x("EVENT_BUILDER");

    function it(e, t) {
        var i = [];
        return t && Object.keys(t || {}).forEach(function(r) {
            var n = t[r];
            if (t2(r, n)) {
                var o = eq(e, r, ie);
                o && i.push({
                    entityId: o,
                    key: r,
                    value: n
                })
            }
        }), i
    }
    var ii = "USER_PROFILE_SERVICE_VALIDATOR",
        ir = function() {
            function e(e) {
                var t, r = this,
                    n = e.clientEngine;
                n || (e.logger.log(B.INFO, H.INVALID_CLIENT_ENGINE, "OPTIMIZELY", n), n = "node-sdk"), this.clientEngine = n, this.clientVersion = e.clientVersion || "5.3.4", this.errorHandler = e.errorHandler, this.isOptimizelyConfigValid = e.isValidInstance, this.logger = e.logger, this.odpManager = e.odpManager;
                var o = null != (t = e.defaultDecideOptions) ? t : [];
                Array.isArray(o) || (this.logger.log(B.DEBUG, H.INVALID_DEFAULT_DECIDE_OPTIONS, "OPTIMIZELY"), o = []);
                var a = {};
                o.forEach(function(e) {
                    i.OptimizelyDecideOption[e] ? a[e] = !0 : r.logger.log(B.WARNING, H.UNRECOGNIZED_DECIDE_OPTION, "OPTIMIZELY", e)
                }), this.defaultDecideOptions = a, this.projectConfigManager = new tN({
                    datafile: e.datafile,
                    jsonSchemaValidator: e.jsonSchemaValidator,
                    sdkKey: e.sdkKey,
                    datafileManager: e.datafileManager
                }), this.disposeOnUpdate = this.projectConfigManager.onUpdate(function(e) {
                    r.logger.log(B.INFO, H.UPDATED_OPTIMIZELY_CONFIG, "OPTIMIZELY", e.revision, e.projectId), r.notificationCenter.sendNotifications(k.OPTIMIZELY_CONFIG_UPDATE), r.updateOdpSettings()
                });
                var s = this.projectConfigManager.onReady(),
                    u = null;
                if (e.userProfileService) try {
                    (function(e) {
                        if ("object" == typeof e && null !== e) {
                            if ("function" != typeof e.lookup) throw Error(O(q.INVALID_USER_PROFILE_SERVICE, ii, "Missing function 'lookup'"));
                            if ("function" != typeof e.save) throw Error(O(q.INVALID_USER_PROFILE_SERVICE, ii, "Missing function 'save'"));
                            return !0
                        }
                        throw Error(O(q.INVALID_USER_PROFILE_SERVICE, ii))
                    })(e.userProfileService) && (u = e.userProfileService, this.logger.log(B.INFO, H.VALID_USER_PROFILE_SERVICE, "OPTIMIZELY"))
                } catch (e) {
                    this.logger.log(B.WARNING, e.message)
                }
                this.decisionService = new t$({
                    userProfileService: u,
                    logger: this.logger,
                    UNSTABLE_conditionEvaluators: e.UNSTABLE_conditionEvaluators
                }), this.notificationCenter = e.notificationCenter, this.eventProcessor = e.eventProcessor;
                var l = this.eventProcessor.start();
                this.readyPromise = Promise.all([s, l, e.odpManager ? e.odpManager.onReady() : Promise.resolve()]).then(function(e) {
                    return e[0]
                }), this.readyTimeouts = {}, this.nextReadyTimeoutId = 0
            }
            return e.prototype.getProjectConfig = function() {
                return this.projectConfigManager.getConfig()
            }, e.prototype.isValidInstance = function() {
                return this.isOptimizelyConfigValid && !!this.projectConfigManager.getConfig()
            }, e.prototype.activate = function(e, t, i) {
                try {
                    if (!this.isValidInstance()) return this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "activate"), null;
                    if (!this.validateInputs({
                            experiment_key: e,
                            user_id: t
                        }, i)) return this.notActivatingExperiment(e, t);
                    var r = this.projectConfigManager.getConfig();
                    if (!r) return null;
                    try {
                        var n = this.getVariation(e, t, i);
                        if (null === n) return this.notActivatingExperiment(e, t);
                        if ("Running" !== eY(r, e)) return this.logger.log(B.DEBUG, H.SHOULD_NOT_DISPATCH_ACTIVATE, "OPTIMIZELY", e), n;
                        var o = eW(r, e),
                            a = {
                                experiment: o,
                                variation: o.variationKeyMap[n],
                                decisionSource: W.EXPERIMENT
                            };
                        return this.sendImpressionEvent(a, "", t, !0, i), n
                    } catch (i) {
                        return this.logger.log(B.ERROR, i.message), this.logger.log(B.INFO, H.NOT_ACTIVATING_USER, "OPTIMIZELY", t, e), this.errorHandler.handleError(i), null
                    }
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.sendImpressionEvent = function(e, t, i, r, n) {
                var o = this.projectConfigManager.getConfig();
                if (o) {
                    var a, s, u, l, c, d, f, p, g, h, E, v, I, _, m, O = (s = (a = {
                        decisionObj: e,
                        flagKey: t,
                        enabled: r,
                        userId: i,
                        userAttributes: n,
                        clientEngine: this.clientEngine,
                        clientVersion: this.clientVersion,
                        configObj: o
                    }).configObj, u = a.decisionObj, l = a.userId, c = a.flagKey, d = a.enabled, f = a.userAttributes, p = a.clientEngine, g = a.clientVersion, h = u.decisionSource, E = t6(u), v = t9(u), I = t4(u), _ = t7(u), m = null !== v ? eB(s, v) : null, {
                        type: "impression",
                        timestamp: R(),
                        uuid: y(),
                        user: {
                            id: l,
                            attributes: it(s, f)
                        },
                        context: {
                            accountId: s.accountId,
                            projectId: s.projectId,
                            revision: s.revision,
                            clientName: p,
                            clientVersion: g,
                            anonymizeIP: s.anonymizeIP || !1,
                            botFiltering: s.botFiltering
                        },
                        layer: {
                            id: m
                        },
                        experiment: {
                            id: v,
                            key: E
                        },
                        variation: {
                            id: _,
                            key: I
                        },
                        ruleKey: E,
                        flagKey: c,
                        ruleType: h,
                        enabled: d
                    });
                    this.eventProcessor.process(O), this.emitNotificationCenterActivate(e, t, i, r, n)
                }
            }, e.prototype.emitNotificationCenterActivate = function(e, t, i, r, n) {
                var o = this.projectConfigManager.getConfig();
                if (o) {
                    var a, s = e.decisionSource,
                        u = t6(e),
                        l = t9(e),
                        c = t4(e),
                        d = t7(e);
                    null !== l && "" !== c && (a = o.experimentIdMap[l]);
                    var f, p, g, h, E, v, I, _, m, O, b, N, T, A = (b = t3(f = {
                        attributes: n,
                        clientEngine: this.clientEngine,
                        clientVersion: this.clientVersion,
                        configObj: o,
                        experimentId: l,
                        ruleKey: u,
                        flagKey: t,
                        ruleType: s,
                        userId: i,
                        enabled: r,
                        variationId: d,
                        logger: this.logger
                    }), p = f.configObj, g = f.experimentId, h = f.variationId, E = f.ruleKey, v = f.ruleType, I = f.flagKey, _ = f.enabled, m = g ? eB(p, g) : null, O = h ? eX(p, h) : null, N = {
                        decisions: [{
                            campaign_id: m,
                            experiment_id: g,
                            variation_id: h,
                            metadata: {
                                flag_key: I,
                                rule_key: E,
                                rule_type: v,
                                variation_key: O = O || "",
                                enabled: _
                            }
                        }],
                        events: [{
                            entity_id: m,
                            timestamp: R(),
                            key: "campaign_activated",
                            uuid: y()
                        }]
                    }, b.visitors[0].snapshots.push(N), {
                        httpVerb: "POST",
                        url: t5,
                        params: b
                    });
                    a && a.variationKeyMap && "" !== c && (T = a.variationKeyMap[c]), this.notificationCenter.sendNotifications(k.ACTIVATE, {
                        experiment: a,
                        userId: i,
                        attributes: n,
                        variation: T,
                        logEvent: A
                    })
                }
            }, e.prototype.track = function(e, t, i, r) {
                try {
                    if (!this.isValidInstance()) return void this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "track");
                    if (!this.validateInputs({
                            user_id: t,
                            event_key: e
                        }, i, r)) return;
                    var n, o, a, s, u, l, c, d, f, p, g, h = this.projectConfigManager.getConfig();
                    if (!h) return;
                    if (!h.eventKeyMap.hasOwnProperty(e)) return this.logger.log(B.WARNING, H.EVENT_KEY_NOT_FOUND, "OPTIMIZELY", e), void this.logger.log(B.WARNING, H.NOT_TRACKING_USER, "OPTIMIZELY", t);
                    var E = (o = (n = {
                        eventKey: e,
                        eventTags: r = this.filterEmptyValues(r),
                        userId: t,
                        userAttributes: i,
                        clientEngine: this.clientEngine,
                        clientVersion: this.clientVersion,
                        configObj: h
                    }).configObj, a = n.userId, s = n.userAttributes, u = n.clientEngine, l = n.clientVersion, c = n.eventKey, d = n.eventTags, f = eH(o, c), p = d ? t0(d, ie) : null, g = d ? t1(d, ie) : null, {
                        type: "conversion",
                        timestamp: R(),
                        uuid: y(),
                        user: {
                            id: a,
                            attributes: it(o, s)
                        },
                        context: {
                            accountId: o.accountId,
                            projectId: o.projectId,
                            revision: o.revision,
                            clientName: u,
                            clientVersion: l,
                            anonymizeIP: o.anonymizeIP || !1,
                            botFiltering: o.botFiltering
                        },
                        event: {
                            id: f,
                            key: c
                        },
                        revenue: p,
                        value: g,
                        tags: d
                    });
                    this.logger.log(B.INFO, H.TRACK_EVENT, "OPTIMIZELY", e, t), this.eventProcessor.process(E), this.emitNotificationCenterTrack(e, t, i, r)
                } catch (e) {
                    this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), this.logger.log(B.ERROR, H.NOT_TRACKING_USER, "OPTIMIZELY", t)
                }
            }, e.prototype.emitNotificationCenterTrack = function(e, t, i, r) {
                try {
                    var n, o, a, s = this.projectConfigManager.getConfig();
                    if (!s) return;
                    var u = (n = {
                        attributes: i,
                        clientEngine: this.clientEngine,
                        clientVersion: this.clientVersion,
                        configObj: s,
                        eventKey: e,
                        eventTags: r,
                        logger: this.logger,
                        userId: t
                    }, o = t3(n), a = function(e, t, i, r) {
                        var n = {
                                events: []
                            },
                            o = {
                                entity_id: eH(e, t),
                                timestamp: R(),
                                uuid: y(),
                                key: t
                            };
                        if (r) {
                            var a = t0(r, i);
                            null !== a && (o.revenue = a);
                            var s = t1(r, i);
                            null !== s && (o.value = s), o.tags = r
                        }
                        return n.events.push(o), n
                    }(n.configObj, n.eventKey, n.logger, n.eventTags), o.visitors[0].snapshots = [a], {
                        httpVerb: "POST",
                        url: t5,
                        params: o
                    });
                    this.notificationCenter.sendNotifications(k.TRACK, {
                        eventKey: e,
                        userId: t,
                        attributes: i,
                        eventTags: r,
                        logEvent: u
                    })
                } catch (e) {
                    this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e)
                }
            }, e.prototype.getVariation = function(e, t, i) {
                var r;
                try {
                    if (!this.isValidInstance()) return this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "getVariation"), null;
                    try {
                        if (!this.validateInputs({
                                experiment_key: e,
                                user_id: t
                            }, i)) return null;
                        var n = this.projectConfigManager.getConfig();
                        if (!n) return null;
                        var o = n.experimentKeyMap[e];
                        if (!o) return this.logger.log(B.DEBUG, q.INVALID_EXPERIMENT_KEY, "OPTIMIZELY", e), null;
                        var a = this.decisionService.getVariation(n, o, this.createInternalUserContext(t, i)).result,
                            s = (r = o.id, n.experimentFeatureMap.hasOwnProperty(r) ? X.FEATURE_TEST : X.AB_TEST);
                        return this.notificationCenter.sendNotifications(k.DECISION, {
                            type: s,
                            userId: t,
                            attributes: i || {},
                            decisionInfo: {
                                experimentKey: e,
                                variationKey: a
                            }
                        }), a
                    } catch (e) {
                        return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                    }
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.setForcedVariation = function(e, t, i) {
                if (!this.validateInputs({
                        experiment_key: e,
                        user_id: t
                    })) return !1;
                var r = this.projectConfigManager.getConfig();
                if (!r) return !1;
                try {
                    return this.decisionService.setForcedVariation(r, e, t, i)
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), !1
                }
            }, e.prototype.getForcedVariation = function(e, t) {
                if (!this.validateInputs({
                        experiment_key: e,
                        user_id: t
                    })) return null;
                var i = this.projectConfigManager.getConfig();
                if (!i) return null;
                try {
                    return this.decisionService.getForcedVariation(i, e, t).result
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.validateInputs = function(e, t, i) {
                try {
                    if (e.hasOwnProperty("user_id")) {
                        var r = e.user_id;
                        if ("string" != typeof r || null === r || "undefined" === r) throw Error(O(q.INVALID_INPUT_FORMAT, "OPTIMIZELY", "user_id"));
                        delete e.user_id
                    }
                    return Object.keys(e).forEach(function(t) {
                        if (!tZ(e[t])) throw Error(O(q.INVALID_INPUT_FORMAT, "OPTIMIZELY", t))
                    }), t && function(e) {
                        if ("object" != typeof e || Array.isArray(e) || null === e) throw Error(O(q.INVALID_ATTRIBUTES, "ATTRIBUTES_VALIDATOR"));
                        Object.keys(e).forEach(function(t) {
                            if (void 0 === e[t]) throw Error(O(q.UNDEFINED_ATTRIBUTE, "ATTRIBUTES_VALIDATOR", t))
                        })
                    }(t), i && function(e) {
                        if ("object" != typeof e || Array.isArray(e) || null === e) throw Error(O(q.INVALID_EVENT_TAGS, "EVENT_TAGS_VALIDATOR"))
                    }(i), !0
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), !1
                }
            }, e.prototype.notActivatingExperiment = function(e, t) {
                return this.logger.log(B.INFO, H.NOT_ACTIVATING_USER, "OPTIMIZELY", t, e), null
            }, e.prototype.filterEmptyValues = function(e) {
                for (var t in e) e.hasOwnProperty(t) && (null === e[t] || void 0 === e[t]) && delete e[t];
                return e
            }, e.prototype.isFeatureEnabled = function(e, t, i) {
                try {
                    if (!this.isValidInstance()) return this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "isFeatureEnabled"), !1;
                    if (!this.validateInputs({
                            feature_key: e,
                            user_id: t
                        }, i)) return !1;
                    var r = this.projectConfigManager.getConfig();
                    if (!r) return !1;
                    var n = e$(r, e, this.logger);
                    if (!n) return !1;
                    var o = {},
                        a = this.createInternalUserContext(t, i),
                        s = this.decisionService.getVariationForFeature(r, n, a).result,
                        u = s.decisionSource,
                        l = t6(s),
                        c = t4(s),
                        d = t8(s);
                    u === W.FEATURE_TEST && (o = {
                        experimentKey: l,
                        variationKey: c
                    }), (u === W.FEATURE_TEST || u === W.ROLLOUT && e2(r)) && this.sendImpressionEvent(s, n.key, t, d, i), !0 === d ? this.logger.log(B.INFO, H.FEATURE_ENABLED_FOR_USER, "OPTIMIZELY", e, t) : (this.logger.log(B.INFO, H.FEATURE_NOT_ENABLED_FOR_USER, "OPTIMIZELY", e, t), d = !1);
                    var f = {
                        featureKey: e,
                        featureEnabled: d,
                        source: s.decisionSource,
                        sourceInfo: o
                    };
                    return this.notificationCenter.sendNotifications(k.DECISION, {
                        type: X.FEATURE,
                        userId: t,
                        attributes: i || {},
                        decisionInfo: f
                    }), d
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), !1
                }
            }, e.prototype.getEnabledFeatures = function(e, t) {
                var i = this;
                try {
                    var r = [];
                    if (!this.isValidInstance()) return this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "getEnabledFeatures"), r;
                    if (!this.validateInputs({
                            user_id: e
                        })) return r;
                    var n = this.projectConfigManager.getConfig();
                    return n && _(n.featureKeyMap).forEach(function(n) {
                        i.isFeatureEnabled(n.key, e, t) && r.push(n.key)
                    }), r
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), []
                }
            }, e.prototype.getFeatureVariable = function(e, t, i, r) {
                try {
                    return this.isValidInstance() ? this.getFeatureVariableForType(e, t, null, i, r) : (this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariable"), null)
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getFeatureVariableForType = function(e, t, i, r, n) {
                if (!this.validateInputs({
                        feature_key: e,
                        variable_key: t,
                        user_id: r
                    }, n)) return null;
                var o, a, s = this.projectConfigManager.getConfig();
                if (!s) return null;
                var u = e$(s, e, this.logger);
                if (!u) return null;
                var l = (o = this.logger, (a = s.featureKeyMap[e]) ? a.variableKeyMap[t] || (o.log(B.ERROR, q.VARIABLE_KEY_NOT_IN_DATAFILE, eG, t, e), null) : (o.log(B.ERROR, q.FEATURE_NOT_IN_DATAFILE, eG, e), null));
                if (!l) return null;
                if (i && l.type !== i) return this.logger.log(B.WARNING, H.VARIABLE_REQUESTED_WITH_WRONG_TYPE, "OPTIMIZELY", i, l.type), null;
                var c = this.createInternalUserContext(r, n),
                    d = this.decisionService.getVariationForFeature(s, u, c).result,
                    f = t8(d),
                    p = this.getFeatureVariableValueFromVariation(e, f, d.variation, l, r),
                    g = {};
                return d.decisionSource === W.FEATURE_TEST && null !== d.experiment && null !== d.variation && (g = {
                    experimentKey: d.experiment.key,
                    variationKey: d.variation.key
                }), this.notificationCenter.sendNotifications(k.DECISION, {
                    type: X.FEATURE_VARIABLE,
                    userId: r,
                    attributes: n || {},
                    decisionInfo: {
                        featureKey: e,
                        featureEnabled: f,
                        source: d.decisionSource,
                        variableKey: t,
                        variableValue: p,
                        variableType: l.type,
                        sourceInfo: g
                    }
                }), p
            }, e.prototype.getFeatureVariableValueFromVariation = function(e, t, i, r, n) {
                var o = this.projectConfigManager.getConfig();
                if (!o) return null;
                var a = r.defaultValue;
                if (null !== i) {
                    var s = function(e, t, i, r) {
                        if (!t || !i) return null;
                        if (!e.variationVariableUsageMap.hasOwnProperty(i.id)) return r.log(B.ERROR, q.VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT, eG, i.id), null;
                        var n = e.variationVariableUsageMap[i.id][t.id];
                        return n ? n.value : null
                    }(o, r, i, this.logger);
                    null !== s ? t ? (a = s, this.logger.log(B.INFO, H.USER_RECEIVED_VARIABLE_VALUE, "OPTIMIZELY", a, r.key, e)) : this.logger.log(B.INFO, H.FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE, "OPTIMIZELY", e, n, a) : this.logger.log(B.INFO, H.VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE, "OPTIMIZELY", r.key, i.key)
                } else this.logger.log(B.INFO, H.USER_RECEIVED_DEFAULT_VARIABLE_VALUE, "OPTIMIZELY", n, r.key, e);
                return function(e, t, i) {
                    var r;
                    switch (t) {
                        case Z.BOOLEAN:
                            "true" !== e && "false" !== e ? (i.log(B.ERROR, q.UNABLE_TO_CAST_VALUE, eG, e, t), r = null) : r = "true" === e;
                            break;
                        case Z.INTEGER:
                            isNaN(r = parseInt(e, 10)) && (i.log(B.ERROR, q.UNABLE_TO_CAST_VALUE, eG, e, t), r = null);
                            break;
                        case Z.DOUBLE:
                            isNaN(r = parseFloat(e)) && (i.log(B.ERROR, q.UNABLE_TO_CAST_VALUE, eG, e, t), r = null);
                            break;
                        case Z.JSON:
                            try {
                                r = JSON.parse(e)
                            } catch (n) {
                                i.log(B.ERROR, q.UNABLE_TO_CAST_VALUE, eG, e, t), r = null
                            }
                            break;
                        default:
                            r = e
                    }
                    return r
                }(a, r.type, this.logger)
            }, e.prototype.getFeatureVariableBoolean = function(e, t, i, r) {
                try {
                    return this.isValidInstance() ? this.getFeatureVariableForType(e, t, Z.BOOLEAN, i, r) : (this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableBoolean"), null)
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getFeatureVariableDouble = function(e, t, i, r) {
                try {
                    return this.isValidInstance() ? this.getFeatureVariableForType(e, t, Z.DOUBLE, i, r) : (this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableDouble"), null)
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getFeatureVariableInteger = function(e, t, i, r) {
                try {
                    return this.isValidInstance() ? this.getFeatureVariableForType(e, t, Z.INTEGER, i, r) : (this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableInteger"), null)
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getFeatureVariableString = function(e, t, i, r) {
                try {
                    return this.isValidInstance() ? this.getFeatureVariableForType(e, t, Z.STRING, i, r) : (this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableString"), null)
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getFeatureVariableJSON = function(e, t, i, r) {
                try {
                    return this.isValidInstance() ? this.getFeatureVariableForType(e, t, Z.JSON, i, r) : (this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "getFeatureVariableJSON"), null)
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getAllFeatureVariables = function(e, t, i) {
                var r = this;
                try {
                    if (!this.isValidInstance()) return this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "getAllFeatureVariables"), null;
                    if (!this.validateInputs({
                            feature_key: e,
                            user_id: t
                        }, i)) return null;
                    var n = this.projectConfigManager.getConfig();
                    if (!n) return null;
                    var o = e$(n, e, this.logger);
                    if (!o) return null;
                    var a = this.createInternalUserContext(t, i),
                        s = this.decisionService.getVariationForFeature(n, o, a).result,
                        u = t8(s),
                        l = {};
                    o.variables.forEach(function(i) {
                        l[i.key] = r.getFeatureVariableValueFromVariation(e, u, s.variation, i, t)
                    });
                    var c = {};
                    return s.decisionSource === W.FEATURE_TEST && null !== s.experiment && null !== s.variation && (c = {
                        experimentKey: s.experiment.key,
                        variationKey: s.variation.key
                    }), this.notificationCenter.sendNotifications(k.DECISION, {
                        type: X.ALL_FEATURE_VARIABLES,
                        userId: t,
                        attributes: i || {},
                        decisionInfo: {
                            featureKey: e,
                            featureEnabled: u,
                            source: s.decisionSource,
                            variableValues: l,
                            sourceInfo: c
                        }
                    }), l
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getOptimizelyConfig = function() {
                try {
                    return this.projectConfigManager.getConfig() ? this.projectConfigManager.getOptimizelyConfig() : null
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.close = function() {
                var e, t = this;
                try {
                    this.odpManager && this.odpManager.stop(), this.notificationCenter.clearAllNotificationListeners();
                    var i = null == (e = this.projectConfigManager.getConfig()) ? void 0 : e.sdkKey;
                    i && eP.removeNotificationCenter(i);
                    var r = this.eventProcessor.stop();
                    return this.disposeOnUpdate && (this.disposeOnUpdate(), this.disposeOnUpdate = null), this.projectConfigManager && this.projectConfigManager.stop(), Object.keys(this.readyTimeouts).forEach(function(e) {
                        var i = t.readyTimeouts[e];
                        clearTimeout(i.readyTimeout), i.onClose()
                    }), this.readyTimeouts = {}, r.then(function() {
                        return {
                            success: !0
                        }
                    }, function(e) {
                        return {
                            success: !1,
                            reason: String(e)
                        }
                    })
                } catch (e) {
                    return this.logger.log(B.ERROR, e.message), this.errorHandler.handleError(e), Promise.resolve({
                        success: !1,
                        reason: String(e)
                    })
                }
            }, e.prototype.onReady = function(e) {
                var t, i, r = this;
                "object" == typeof e && null !== e && void 0 !== e.timeout && (t = e.timeout), N(t) || (t = 3e4);
                var n = new Promise(function(e) {
                        i = e
                    }),
                    o = this.nextReadyTimeoutId;
                this.nextReadyTimeoutId++;
                var a = setTimeout(function() {
                    delete r.readyTimeouts[o], i({
                        success: !1,
                        reason: O("onReady timeout expired after %s ms", t)
                    })
                }, t);
                return this.readyTimeouts[o] = {
                    readyTimeout: a,
                    onClose: function() {
                        i({
                            success: !1,
                            reason: "Instance closed"
                        })
                    }
                }, this.readyPromise.then(function() {
                    clearTimeout(a), delete r.readyTimeouts[o], i({
                        success: !0
                    })
                }), Promise.race([this.readyPromise, n])
            }, e.prototype.createUserContext = function(e, t) {
                var i, r = null != e ? e : null == (i = this.odpManager) ? void 0 : i.getVuid();
                return void 0 !== r && this.validateInputs({
                    user_id: r
                }, t) ? new tI({
                    optimizely: this,
                    userId: r,
                    attributes: t,
                    shouldIdentifyUser: !0
                }) : null
            }, e.prototype.createInternalUserContext = function(e, t) {
                return new tI({
                    optimizely: this,
                    userId: e,
                    attributes: t,
                    shouldIdentifyUser: !1
                })
            }, e.prototype.decide = function(e, t, r) {
                var n, o, a, s, u = this;
                void 0 === r && (r = []);
                var l, c = e.getUserId(),
                    d = e.getAttributes(),
                    f = this.projectConfigManager.getConfig(),
                    p = [];
                if (!this.isValidInstance() || !f) return this.logger.log(B.INFO, H.INVALID_OBJECT, "OPTIMIZELY", "decide"), ty(t, e, [$.SDK_NOT_READY]);
                var h = f.featureKeyMap[t];
                if (!h) return this.logger.log(B.ERROR, q.FEATURE_NOT_IN_DATAFILE, "OPTIMIZELY", t), ty(t, e, [O($.FLAG_KEY_INVALID, t)]);
                var E = this.getAllDecideOptions(r),
                    v = this.decisionService.findValidatedForcedDecision(f, e, t);
                p.push.apply(p, v.reasons);
                var y = v.result;
                if (y) l = {
                    experiment: null,
                    variation: y,
                    decisionSource: W.FEATURE_TEST
                };
                else {
                    var I = this.decisionService.getVariationForFeature(f, h, e, E);
                    p.push.apply(p, I.reasons), l = I.result
                }
                var _ = l.decisionSource,
                    m = null != (o = null == (n = l.experiment) ? void 0 : n.key) ? o : null,
                    b = null != (s = null == (a = l.variation) ? void 0 : a.key) ? s : null,
                    R = t8(l);
                !0 === R ? this.logger.log(B.INFO, H.FEATURE_ENABLED_FOR_USER, "OPTIMIZELY", t, c) : this.logger.log(B.INFO, H.FEATURE_NOT_ENABLED_FOR_USER, "OPTIMIZELY", t, c);
                var N = {},
                    T = !1;
                E[i.OptimizelyDecideOption.EXCLUDE_VARIABLES] || h.variables.forEach(function(e) {
                    N[e.key] = u.getFeatureVariableValueFromVariation(t, R, l.variation, e, c)
                }), !E[i.OptimizelyDecideOption.DISABLE_DECISION_EVENT] && (_ === W.FEATURE_TEST || _ === W.ROLLOUT && e2(f)) && (this.sendImpressionEvent(l, t, c, R, d), T = !0);
                var A = [];
                E[i.OptimizelyDecideOption.INCLUDE_REASONS] && (A = p.map(function(e) {
                    return O.apply(void 0, g([e[0]], e.slice(1), !1))
                }));
                var U = {
                    flagKey: t,
                    enabled: R,
                    variationKey: b,
                    ruleKey: m,
                    variables: N,
                    reasons: A,
                    decisionEventDispatched: T
                };
                return this.notificationCenter.sendNotifications(k.DECISION, {
                    type: X.FLAG,
                    userId: c,
                    attributes: d,
                    decisionInfo: U
                }), {
                    variationKey: b,
                    enabled: R,
                    variables: N,
                    ruleKey: m,
                    flagKey: t,
                    userContext: e,
                    reasons: A
                }
            }, e.prototype.getAllDecideOptions = function(e) {
                var t = this,
                    r = d({}, this.defaultDecideOptions);
                return Array.isArray(e) ? e.forEach(function(e) {
                    i.OptimizelyDecideOption[e] ? r[e] = !0 : t.logger.log(B.WARNING, H.UNRECOGNIZED_DECIDE_OPTION, "OPTIMIZELY", e)
                }) : this.logger.log(B.DEBUG, H.INVALID_DECIDE_OPTIONS, "OPTIMIZELY"), r
            }, e.prototype.decideForKeys = function(e, t, r) {
                var n = this;
                void 0 === r && (r = []);
                var o = {};
                if (!this.isValidInstance()) return this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "decideForKeys"), o;
                if (0 === t.length) return o;
                var a = this.getAllDecideOptions(r);
                return t.forEach(function(t) {
                    var s = n.decide(e, t, r);
                    a[i.OptimizelyDecideOption.ENABLED_FLAGS_ONLY] && !s.enabled || (o[t] = s)
                }), o
            }, e.prototype.decideAll = function(e, t) {
                void 0 === t && (t = []);
                var i = this.projectConfigManager.getConfig();
                if (!this.isValidInstance() || !i) return this.logger.log(B.ERROR, H.INVALID_OBJECT, "OPTIMIZELY", "decideAll"), {};
                var r = Object.keys(i.featureKeyMap);
                return this.decideForKeys(e, r, t)
            }, e.prototype.updateOdpSettings = function() {
                var e = this.projectConfigManager.getConfig();
                e && this.odpManager && this.odpManager.updateSettings(e.odpIntegrationConfig)
            }, e.prototype.sendOdpEvent = function(e, t, i, r) {
                if (this.odpManager) {
                    var n = new Map(i);
                    if (i && i.size > 0) try {
                        i.forEach(function(e, t) {
                            "fs-user-id" !== t.toLowerCase() && eb.FS_USER_ID !== t.toLowerCase() || (n.delete(t), n.set(eb.FS_USER_ID, e))
                        })
                    } catch (e) {
                        this.logger.warn(H.ODP_SEND_EVENT_IDENTIFIER_CONVERSION_FAILED)
                    }
                    try {
                        var o = new tn(null != t ? t : "fullstack", e, n, r);
                        this.odpManager.sendEvent(o)
                    } catch (e) {
                        this.logger.error(q.ODP_EVENT_FAILED, e)
                    }
                } else this.logger.error(q.ODP_EVENT_FAILED_ODP_MANAGER_MISSING)
            }, e.prototype.isOdpIntegrated = function() {
                var e, t, i;
                return null != (i = null == (t = null == (e = this.projectConfigManager.getConfig()) ? void 0 : e.odpIntegrationConfig) ? void 0 : t.integrated) && i
            }, e.prototype.identifyUser = function(e) {
                this.odpManager && this.isOdpIntegrated() && this.odpManager.identifyUser(e)
            }, e.prototype.fetchQualifiedSegments = function(e, t) {
                return f(this, void 0, void 0, function() {
                    return p(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return this.odpManager ? [4, this.odpManager.fetchQualifiedSegments(e, t)] : [2, null];
                            case 1:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.prototype.getVuid = function() {
                var e;
                if (this.odpManager) {
                    if (this.odpManager.isVuidEnabled()) return this.odpManager.getVuid();
                    this.logger.log(B.WARNING, "getVuid() unavailable for this platform", "OPTIMIZELY")
                } else null == (e = this.logger) || e.error("Unable to get VUID - ODP Manager is not instantiated yet.")
            }, e
        }(),
        io = {
            parseUserAgentInfo: function() {
                var e = (new u.UAParser).getResult();
                return {
                    os: e.os,
                    device: e.device
                }
            }
        };

    function ia() {
        return io
    }
    var is = Object.freeze({
            __proto__: null,
            get LogLevel() {
                return i.LogLevel
            },
            getLogger: x,
            setLogHandler: V,
            LOG_LEVEL: B,
            createLogger: ev
        }),
        iu = x();
    V(ev()), M(i.LogLevel.INFO);
    var il = !1,
        ic = function(e) {
            var t;
            try {
                var r, n, o, a = !1;
                e.errorHandler && (h = e.errorHandler), e.logger && (V(e.logger), M(i.LogLevel.NOTSET)), void 0 !== e.logLevel && M(e.logLevel);
                try {
                    ed(e), a = !0
                } catch (e) {
                    iu.error(e)
                }
                var s = void 0;
                null == e.eventDispatcher ? (s = new eo({
                    eventDispatcher: eg
                }), il || (s.sendPendingEvents(), il = !0)) : s = e.eventDispatcher;
                var u = e.closingEventDispatcher;
                !e.eventDispatcher && !u && window.navigator && "sendBeacon" in window.navigator && (u = eh);
                var l = e.eventBatchSize,
                    c = e.eventFlushInterval;
                r = e.eventBatchSize, !("number" != typeof r || !N(r)) && r >= 1 || (iu.warn("Invalid eventBatchSize %s, defaulting to %s", e.eventBatchSize, 10), l = 10), n = e.eventFlushInterval, !("number" != typeof n || !N(n)) && n > 0 || (iu.warn("Invalid eventFlushInterval %s, defaulting to %s", e.eventFlushInterval, 1e3), c = 1e3);
                var f = h,
                    p = (o = {
                        logger: iu,
                        errorHandler: f
                    }, new eI(o)),
                    g = {
                        dispatcher: s,
                        closingDispatcher: u,
                        flushInterval: c,
                        batchSize: l,
                        maxQueueSize: e.eventMaxQueueSize || 1e4,
                        notificationCenter: p
                    },
                    v = !0 === (null == (t = e.odpOptions) ? void 0 : t.disabled);
                v && iu.info(H.ODP_DISABLED);
                var y = e.clientEngine,
                    I = e.clientVersion,
                    _ = d(d({
                        clientEngine: "javascript-sdk"
                    }, e), {
                        eventProcessor: eU(g),
                        logger: iu,
                        errorHandler: f,
                        datafileManager: e.sdkKey ? function(e, t, i, r) {
                            var n = {
                                sdkKey: e
                            };
                            if ((void 0 === r || "object" == typeof r && null !== r) && E(n, r), i) {
                                var o = e1({
                                        datafile: i,
                                        jsonSchemaValidator: void 0,
                                        logger: t
                                    }),
                                    a = o.configObj,
                                    s = o.error;
                                s && t.error(s), a && (n.datafile = e0(a))
                            }
                            return new eF(n)
                        }(e.sdkKey, iu, e.datafile, e.datafileOptions) : void 0,
                        notificationCenter: p,
                        isValidInstance: a,
                        odpManager: v ? void 0 : tv.createInstance({
                            logger: iu,
                            odpOptions: e.odpOptions,
                            clientEngine: y,
                            clientVersion: I
                        })
                    }),
                    m = new ir(_);
                try {
                    if ("function" == typeof window.addEventListener) {
                        var O = "onpagehide" in window ? "pagehide" : "unload";
                        window.addEventListener(O, function() {
                            m.close()
                        }, !1)
                    }
                } catch (e) {
                    iu.error(H.UNABLE_TO_ATTACH_UNLOAD, "INDEX_BROWSER", e.message)
                }
                return m
            } catch (e) {
                return iu.error(e), null
            }
        },
        id = function() {
            il = !1
        },
        ip = d(d({}, is), {
            logging: ey,
            errorHandler: ep,
            eventDispatcher: eg,
            sendBeaconEventDispatcher: eh,
            enums: ee,
            setLogger: V,
            setLogLevel: M,
            createInstance: ic,
            __internalResetRetryState: id,
            OptimizelyDecideOption: i.OptimizelyDecideOption,
            getUserAgentParser: ia
        });
    i.LOG_LEVEL = B, i.__internalResetRetryState = id, i.createInstance = ic, i.createLogger = ev, i.default = ip, i.enums = ee, i.errorHandler = ep, i.eventDispatcher = eg, i.getLogger = x, i.getUserAgentParser = ia, i.logging = ey, i.sendBeaconEventDispatcher = eh, i.setLogHandler = V, i.setLogLevel = M, i.setLogger = V
}, 251462, (e, t, i) => {
    "use strict";
    var r, n, o, a, s = e.r(191788),
        u = e.r(718566),
        l = e.r(734980);

    function c(e) {
        var t = Object.create(null);
        return e && Object.keys(e).forEach(function(i) {
            if ("default" !== i) {
                var r = Object.getOwnPropertyDescriptor(e, i);
                Object.defineProperty(t, i, r.get ? r : {
                    enumerable: !0,
                    get: function() {
                        return e[i]
                    }
                })
            }
        }), t.default = e, Object.freeze(t)
    }
    var d = c(s),
        f = c(u),
        p = s.createContext({
            optimizely: null,
            isServerSide: !1,
            timeout: 0
        }),
        g = p.Consumer,
        h = p.Provider,
        E = function(e, t) {
            return (E = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            })(e, t)
        };

    function v(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function i() {
            this.constructor = e
        }
        E(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    }
    var y = function() {
        return (y = Object.assign || function(e) {
            for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };

    function I(e, t, i, r) {
        return new(i || (i = Promise))(function(n, o) {
            function a(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                    e(t)
                })).then(a, s)
            }
            u((r = r.apply(e, t || [])).next())
        })
    }

    function _(e, t) {
        var i, r, n, o, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(s) {
            return function(u) {
                var l = [s, u];
                if (i) throw TypeError("Generator is already executing.");
                for (; o && (o = 0, l[0] && (a = 0)), a;) try {
                    if (i = 1, r && (n = 2 & l[0] ? r.return : l[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, l[1])).done) return n;
                    switch (r = 0, n && (l = [2 & l[0], n.value]), l[0]) {
                        case 0:
                        case 1:
                            n = l;
                            break;
                        case 4:
                            return a.label++, {
                                value: l[1],
                                done: !1
                            };
                        case 5:
                            a.label++, r = l[1], l = [0];
                            continue;
                        case 7:
                            l = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
                                a.label = l[1];
                                break
                            }
                            if (6 === l[0] && a.label < n[1]) {
                                a.label = n[1], n = l;
                                break
                            }
                            if (n && a.label < n[2]) {
                                a.label = n[2], a.ops.push(l);
                                break
                            }
                            n[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    l = t.call(e, a)
                } catch (e) {
                    l = [6, e], r = 0
                } finally {
                    i = n = 0
                }
                if (5 & l[0]) throw l[1];
                return {
                    value: l[0] ? l[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function m(e, t, i) {
        if (i || 2 == arguments.length)
            for (var r, n = 0, o = t.length; n < o; n++) !r && n in t || (r || (r = Array.prototype.slice.call(t, 0, n)), r[n] = t[n]);
        return e.concat(r || Array.prototype.slice.call(t))
    }

    function O(e, t) {
        if (e.id !== t.id) return !1;
        var i = e.attributes || {},
            r = t.attributes || {},
            n = Object.keys(i),
            o = Object.keys(r);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++) {
            var s = n[a];
            if (i[s] !== r[s]) return !1
        }
        return !0
    }

    function b(e) {
        return "object" == typeof e && null !== e ? e : {}
    }

    function R(e, t) {
        var i = b(e),
            r = b(t),
            n = Object.keys(i),
            o = Object.keys(r);
        return n.length === o.length && n.every(function(e) {
            return e in r && i[e] === r[e]
        })
    }

    function N(e, t, i) {
        return {
            enabled: !1,
            flagKey: e,
            ruleKey: null,
            variationKey: null,
            variables: {},
            reasons: [t],
            userContext: {
                id: i.id,
                attributes: i.attributes
            }
        }
    }

    function T(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        var r = 0;
        return e.replace(/%s/g, function() {
            var e = t[r++],
                i = typeof e;
            return "function" === i ? e() : "string" === i ? e : String(e)
        })
    }
    "function" == typeof SuppressedError && SuppressedError;
    var A = (function() {
            function e() {
                this.observers = []
            }
            return e.getInstance = function() {
                return e.instance || (e.instance = new e), e.instance
            }, e.prototype.subscribe = function(e, t) {
                var i = this,
                    r = "key-".concat(Math.floor(1e5 + 999999 * Math.random()));
                return this.observers.push({
                        subscriptionId: r,
                        key: e,
                        callback: t
                    }),
                    function() {
                        var e = i.observers.findIndex(function(e) {
                            return e.subscriptionId === r
                        });
                        e >= 0 && i.observers.splice(e, 1)
                    }
            }, e.prototype.notify = function(e) {
                this.observers.filter(function(t) {
                    return t.key === e
                }).forEach(function(e) {
                    return e.callback()
                })
            }, e
        })().getInstance(),
        U = f.getLogger("ReactSDK"),
        S = function(e) {
            for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
            return U.log(f.enums.LOG_LEVEL.WARNING, T.apply(void 0, m([e], t, !1)))
        },
        D = function(e) {
            for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
            return U.log(f.enums.LOG_LEVEL.INFO, T.apply(void 0, m([e], t, !1)))
        },
        L = function(e) {
            for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
            return U.log(f.enums.LOG_LEVEL.ERROR, T.apply(void 0, m([e], t, !1)))
        };
    (r = o || (o = {})).TIMEOUT = "TIMEOUT", r.NO_CLIENT = "NO_CLIENT", r.USER_NOT_READY = "USER_NOT_READY";
    var C = {
            id: null,
            attributes: {}
        },
        w = function() {
            function e(e) {
                var t = this;
                this.userContext = null, this.onUserUpdateHandlers = [], this.isUserPromiseResolved = !1, this.isUserReady = !1, this.onForcedVariationsUpdateHandlers = [], this.forcedDecisionFlagKeys = new Set, this.isClientReady = !1, this.clientAndUserReadyPromiseFulfilled = !1, this.isUsingSdkKey = !1, this.user = y({}, C), this.initialConfig = e;
                var i = y(y({}, e), {
                    clientEngine: "react-sdk",
                    clientVersion: "3.2.3"
                });
                this.userPromiseResolver = function() {};
                var r = new Promise(function(e) {
                    t.userPromiseResolver = e
                });
                if (this._client = f.createInstance(i), this.isClientReady = !!this.getOptimizelyConfig(), this.isUsingSdkKey = !!i.sdkKey, this._client) {
                    var n = this._client.onReady();
                    this.clientAndUserReadyPromise = Promise.all([r, n]).then(function(e) {
                        var i = e[0];
                        t.isClientReady = e[1].success, t.isUserReady = i.success;
                        var r = t.isReady();
                        return t.clientAndUserReadyPromiseFulfilled = !0, {
                            success: r,
                            message: r ? "Client and user are both ready." : "Client or user did not become ready."
                        }
                    })
                } else S("Unable to resolve datafile and user information because Optimizely client failed to initialize."), this.clientAndUserReadyPromise = new Promise(function(e) {
                    e({
                        success: !1,
                        reason: o.NO_CLIENT,
                        message: "Optimizely client failed to initialize."
                    })
                })
            }
            return e.prototype.getUserWithOverrides = function(e, t) {
                return {
                    id: void 0 === e ? this.user.id : e,
                    attributes: void 0 === t ? this.user.attributes : t
                }
            }, e.prototype.getIsReadyPromiseFulfilled = function() {
                return this.clientAndUserReadyPromiseFulfilled
            }, e.prototype.getIsUsingSdkKey = function() {
                return this.isUsingSdkKey
            }, Object.defineProperty(e.prototype, "odpExplicitlyOff", {
                get: function() {
                    var e;
                    return null == (e = this.initialConfig.odpOptions) ? void 0 : e.disabled
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.onReady = function(e) {
                var t, i = this;
                void 0 === e && (e = {});
                var r = 5e3;
                e && void 0 !== e.timeout && (r = e.timeout);
                var n = new Promise(function(e) {
                    t = setTimeout(function() {
                        e({
                            success: !1,
                            reason: o.TIMEOUT,
                            message: "Failed to initialize before timeout",
                            dataReadyPromise: i.clientAndUserReadyPromise
                        })
                    }, r)
                });
                return Promise.race([this.clientAndUserReadyPromise, n]).then(function(e) {
                    return I(i, void 0, void 0, function() {
                        return _(this, function(i) {
                            return clearTimeout(t), [2, e]
                        })
                    })
                })
            }, e.prototype.getUserContext = function() {
                return this._client ? this.userContext ? this.userContext : (S("Unable to get user context. User context not set."), null) : (S("Unable to get user context. Optimizely client not initialized."), null)
            }, e.prototype.setCurrentUserContext = function(e) {
                if (!this._client) return void S("Unable to set user context for user ID ".concat(e.id, ". Optimizely client not initialized."));
                if (!this.userContext) {
                    this.userContext = this._client.createUserContext(e.id || void 0, e.attributes);
                    return
                }
                O(e, {
                    id: this.userContext.getUserId(),
                    attributes: this.userContext.getAttributes()
                }) || (this.userContext = this._client.createUserContext(e.id || void 0, e.attributes))
            }, e.prototype.makeUserContextInstance = function(e) {
                return this._client ? this.userContext && O(e, this.user) ? this.userContext : this._client.createUserContext(e.id || void 0, e.attributes) : (S("Unable to create user context for ".concat(e.id, ". Optimizely client failed to initialize or not ready.")), null)
            }, e.prototype.fetchQualifiedSegments = function(e) {
                return I(this, void 0, void 0, function() {
                    var t;
                    return _(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!this.userContext) return [2, !1];
                                if (this.odpExplicitlyOff || !(null == (t = this._client) ? void 0 : t.isOdpIntegrated())) return [2, !0];
                                return [4, this.userContext.fetchQualifiedSegments(e)];
                            case 1:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.prototype.setUser = function(e) {
                return I(this, void 0, void 0, function() {
                    var t, i, r, n, o = this;
                    return _(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (this.user = {
                                        id: e.id || C.id,
                                        attributes: e.attributes || C.attributes
                                    }, e.id !== C.id) return [3, 2];
                                return [4, null == (i = this._client) ? void 0 : i.onReady()];
                            case 1:
                                return a.sent(), this.setCurrentUserContext(e), this.user.id = (null == (r = this.userContext) ? void 0 : r.getUserId()) || C.id, [3, 4];
                            case 2:
                                return this.setCurrentUserContext(e), [4, null == (n = this._client) ? void 0 : n.onReady()];
                            case 3:
                                a.sent(), a.label = 4;
                            case 4:
                                return [4, this.fetchQualifiedSegments()];
                            case 5:
                                return t = a.sent(), this.isUserPromiseResolved || (this.userPromiseResolver({
                                    success: t
                                }), this.isUserPromiseResolved = !0), this.onUserUpdateHandlers.forEach(function(e) {
                                    return e(o.user)
                                }), [2]
                        }
                    })
                })
            }, e.prototype.onUserUpdate = function(e) {
                var t = this;
                return this.onUserUpdateHandlers.push(e),
                    function() {
                        var i = t.onUserUpdateHandlers.indexOf(e);
                        i > -1 && t.onUserUpdateHandlers.splice(i, 1)
                    }
            }, e.prototype.onForcedVariationsUpdate = function(e) {
                var t = this;
                return this.onForcedVariationsUpdateHandlers.push(e),
                    function() {
                        var i = t.onForcedVariationsUpdateHandlers.indexOf(e);
                        i > -1 && t.onForcedVariationsUpdateHandlers.splice(i, 1)
                    }
            }, e.prototype.isReady = function() {
                return this.isClientReady && this.isUserReady
            }, e.prototype.activate = function(e, t, i) {
                if (!this._client) return S('Unable to activate experiment "%s" because Optimizely client failed to initialize.', e), null;
                var r = this.getUserWithOverrides(t, i);
                return null === r.id ? (D('Unable to activate experiment "%s" because User ID is not set', e), null) : this._client.activate(e, r.id, r.attributes)
            }, e.prototype.decide = function(e, t, i, r) {
                if (void 0 === t && (t = []), !this._client) return S('Unable to evaluate feature "%s" because Optimizely client failed to initialize.', e), N(e, "Unable to evaluate flag ".concat(e, " because Optimizely client failed to initialize."), this.user);
                var n = this.getUserWithOverrides(i, r);
                if (null === n.id) return D('Unable to evaluate feature "%s" because User ID is not set.', e), N(e, "Unable to evaluate flag ".concat(e, " because User ID is not set."), n);
                var o = this.makeUserContextInstance(n);
                return o ? y(y({}, o.decide(e, t)), {
                    userContext: {
                        id: n.id,
                        attributes: n.attributes
                    }
                }) : N(e, "Not Evaluating flag ".concat(e, " because user id or attributes are not valid"), n)
            }, e.prototype.decideForKeys = function(e, t, i, r) {
                if (void 0 === t && (t = []), !this._client) return S("Unable to evaluate features for keys because Optimizely client failed to initialize."), {};
                var n = this.getUserWithOverrides(i, r);
                if (null === n.id) return D("Unable to evaluate features for keys because User ID is not set"), {};
                var o = this.makeUserContextInstance(n);
                return o ? Object.entries(o.decideForKeys(e, t)).reduce(function(e, t) {
                    var i = t[0],
                        r = t[1];
                    return e[i] = y(y({}, r), {
                        userContext: {
                            id: n.id || "",
                            attributes: n.attributes
                        }
                    }), e
                }, {}) : {}
            }, e.prototype.decideAll = function(e, t, i) {
                if (void 0 === e && (e = []), !this._client) return S("Unable to evaluate all feature decisions because Optimizely client is not initialized."), {};
                var r = this.getUserWithOverrides(t, i);
                if (null === r.id) return D("Unable to evaluate all feature decisions because User ID is not set"), {};
                var n = this.makeUserContextInstance(r);
                return n ? Object.entries(n.decideAll(e)).reduce(function(e, t) {
                    var i = t[0],
                        n = t[1];
                    return e[i] = y(y({}, n), {
                        userContext: {
                            id: r.id || "",
                            attributes: r.attributes
                        }
                    }), e
                }, {}) : {}
            }, e.prototype.getVariation = function(e, t, i) {
                if (!this._client) return S('Unable to get variation for experiment "%s" because Optimizely client failed to initialize.', e), null;
                var r = this.getUserWithOverrides(t, i);
                return null === r.id ? (D('Unable to get variation for experiment "%s" because User ID is not set', e), null) : this._client.getVariation(e, r.id, r.attributes)
            }, e.prototype.track = function(e, t, i, r) {
                if (!this._client) return void S('Unable to send tracking event "%s" because Optimizely client failed to initialize.', e);
                void 0 !== t && "string" != typeof t && (r = t, t = void 0);
                var n = this.getUserWithOverrides(t, i);
                null === n.id ? D('Unable to send tracking event "%s" because User ID is not set', e) : this._client.track(e, n.id, n.attributes, r)
            }, e.prototype.setForcedDecision = function(e, t) {
                this.userContext ? this.userContext.setForcedDecision(e, t) && (this.forcedDecisionFlagKeys.add(e.flagKey), A.notify(e.flagKey)) : S("Unable to set a forced decision because the user context has not been set yet.")
            }, e.prototype.getForcedDecision = function(e) {
                return this.userContext ? this.userContext.getForcedDecision(e) : (S("Unable to get a forced decision because the user context has not been set yet."), null)
            }, e.prototype.removeForcedDecision = function(e) {
                if (!this.userContext) return S("Unable to remove forced decisions because the user context has not been set yet."), !1;
                var t = this.userContext.removeForcedDecision(e);
                return t && (this.forcedDecisionFlagKeys.delete(e.flagKey), A.notify(e.flagKey)), t
            }, e.prototype.removeAllForcedDecisions = function() {
                if (!this.userContext) return S("Unable to remove all forced decisions because the user context has not been set yet."), !1;
                var e = this.userContext.removeAllForcedDecisions();
                return e && (this.forcedDecisionFlagKeys.forEach(function(e) {
                    return A.notify(e)
                }), this.forcedDecisionFlagKeys.clear()), e
            }, e.prototype.isFeatureEnabled = function(e, t, i) {
                if (!this._client) return S('Unable to determine if feature "%s" is enabled because Optimizely client failed to initialize.', e), !1;
                var r = this.getUserWithOverrides(t, i);
                return null === r.id ? (D('Unable to determine if feature "%s" is enabled because User ID is not set', e), !1) : this._client.isFeatureEnabled(e, r.id, r.attributes)
            }, e.prototype.getFeatureVariables = function(e, t, i) {
                var r = this;
                if (!this._client) return S('Unable to get feature variables for feature "%s" because Optimizely client failed to initialize.', e), {};
                var n = this.getUserWithOverrides(t, i),
                    o = n.id;
                if (null === o) return S('Unable to get feature variables for feature "%s" because User ID is not set', e), {};
                var a = n.attributes,
                    s = {},
                    u = this._client.getOptimizelyConfig();
                if (!u) return S('Unable to retrieve feature variables for feature "%s" because Optimizely client failed to initialize.', e), {};
                var l = u.featuresMap[e];
                return l ? (Object.keys(l.variablesMap).forEach(function(t) {
                    var i = l.variablesMap[t];
                    s[i.key] = r._client.getFeatureVariable(e, i.key, o, a)
                }), s) : (D('Unable to retrieve feature variables for feature "%s" because config features map is not set', e), {})
            }, e.prototype.getFeatureVariableString = function(e, t, i, r) {
                if (!this._client) return S('Unable to get feature variable string from feature "%s" because Optimizely client failed to initialize.', e), null;
                var n = this.getUserWithOverrides(i, r);
                return null === n.id ? (D('Unable to get feature variable string from feature "%s" because User ID is not set', e), null) : this._client.getFeatureVariableString(e, t, n.id, n.attributes)
            }, e.prototype.getFeatureVariableBoolean = function(e, t, i, r) {
                if (!this._client) return S('Unable to get feature variable boolean from feature "%s" because Optimizely client failed to initialize.', e), null;
                var n = this.getUserWithOverrides(i, r);
                return null === n.id ? (D('Unable to get feature variable boolean from feature "%s" because User ID is not set', e), null) : this._client.getFeatureVariableBoolean(e, t, n.id, n.attributes)
            }, e.prototype.getFeatureVariableInteger = function(e, t, i, r) {
                if (!this._client) return S('Unable to get feature variable integer from feature "%s" because Optimizely client failed to initialize.', e), null;
                var n = this.getUserWithOverrides(i, r);
                return null === n.id ? (D('Unable to get feature variable integer from feature "%s" because User ID is not set', e), null) : this._client.getFeatureVariableInteger(e, t, n.id, n.attributes)
            }, e.prototype.getFeatureVariableDouble = function(e, t, i, r) {
                if (!this._client) return S('Unable to get feature variable double from feature "%s" because Optimizely client failed to initialize.', e), null;
                var n = this.getUserWithOverrides(i, r);
                return null === n.id ? (D('Unable to get feature variable double from feature "%s" because User ID is not set', e), null) : this._client.getFeatureVariableDouble(e, t, n.id, n.attributes)
            }, e.prototype.getFeatureVariableJSON = function(e, t, i, r) {
                if (!this._client) return S('Unable to get feature variable JSON from feature "%s" because Optimizely client failed to initialize.', e), null;
                var n = this.getUserWithOverrides(i, r);
                return null === n.id ? (D('Unable to get feature variable JSON from feature "%s" because User ID is not set', e), null) : this._client.getFeatureVariableJSON(e, t, n.id, n.attributes)
            }, e.prototype.getFeatureVariable = function(e, t, i, r) {
                if (!this._client) return S('Unable to get feature variable from feature "%s" because Optimizely client failed to initialize.', e, t), null;
                var n = this.getUserWithOverrides(i, r);
                return null === n.id ? (D('Unable to get feature variable from feature "%s" because User ID is not set', e, t), null) : this._client.getFeatureVariable(e, t, n.id, n.attributes)
            }, e.prototype.getAllFeatureVariables = function(e, t, i) {
                if (!this._client) return S('Unable to get all feature variables from feature "%s" because Optimizely client failed to initialize.', e), {};
                var r = this.getUserWithOverrides(t, i);
                return null === r.id ? (D('Unable to get all feature variables from feature "%s" because User ID is not set', e), {}) : this._client.getAllFeatureVariables(e, r.id, r.attributes)
            }, e.prototype.getEnabledFeatures = function(e, t) {
                if (!this._client) return S("Unable to get list of enabled features because Optimizely client failed to initialize."), [];
                var i = this.getUserWithOverrides(e, t);
                return null === i.id ? (D("Unable to get list of enabled features because User ID is not set"), []) : this._client.getEnabledFeatures(i.id, i.attributes)
            }, e.prototype.getForcedVariation = function(e, t) {
                if (!this._client) return S('Unable to get forced variation for experiment "%s" because Optimizely client failed to initialize.', e), null;
                var i = this.getUserWithOverrides(t);
                return null === i.id ? (D('Unable to get forced variation for experiment "%s" because User ID is not set', e), null) : this._client.getForcedVariation(e, i.id)
            }, e.prototype.setForcedVariation = function(e, t, i) {
                if (!this._client) return S('Unable to set forced variation for experiment "%s" because Optimizely client failed to initialize.', e), !1;
                var r = null,
                    n = null;
                if (2 == arguments.length) n = t, r = this.getUserWithOverrides().id;
                else if (3 == arguments.length) {
                    if (r = this.getUserWithOverrides(t).id, void 0 === i) return !1;
                    n = i
                }
                if (null === r) return S('Unable to set forced variation for experiment "%s" because User ID is not set', e), !1;
                var o = this._client.setForcedVariation(e, r, n);
                return this.onForcedVariationsUpdateHandlers.forEach(function(e) {
                    return e()
                }), o
            }, e.prototype.getOptimizelyConfig = function() {
                return this._client ? this._client.getOptimizelyConfig() : (S("Unable to get Optimizely configuration because Optimizely client failed to initialize."), null)
            }, e.prototype.close = function() {
                return this._client ? this._client.close() : new Promise(function(e, t) {
                    return e({
                        success: !0,
                        reason: "Optimizely client is not initialized."
                    })
                })
            }, Object.defineProperty(e.prototype, "client", {
                get: function() {
                    return this._client ? this._client : (S("Unable to get client because Optimizely client failed to initialize."), null)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "notificationCenter", {
                get: function() {
                    return this._client ? this._client.notificationCenter : {
                        addNotificationListener: function() {
                            return S("Unable to add notification listener because Optimizely client failed to initialize."), 0
                        },
                        removeNotificationListener: function() {
                            return S("Unable to remove notification listener because Optimizely client failed to initialize."), !1
                        },
                        clearAllNotificationListeners: function() {
                            S("Unable to clear all notification listeners because Optimizely client failed to initialize.")
                        },
                        clearNotificationListeners: function() {
                            S("Unable to clear notification listeners because Optimizely client failed to initialize.")
                        }
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.sendOdpEvent = function(e, t, i, r) {
                var n;
                e && e.trim() ? null == (n = this.client) || n.sendOdpEvent(e, t, i, r) : L("ODP action is not valid (cannot be empty).")
            }, e.prototype.getVuid = function() {
                return this._client ? this._client.getVuid() : void S("Unable to get VUID because Optimizely client failed to initialize.")
            }, e
        }(),
        P = u.getLogger("<OptimizelyProvider>"),
        x = function(e) {
            function t(t) {
                var i = e.call(this, t) || this;
                return i.setUserInOptimizely(), i
            }
            return v(t, e), t.prototype.setUserInOptimizely = function() {
                return I(this, void 0, void 0, function() {
                    var e, t, i, r, n, o, a, s, u;
                    return _(this, function(l) {
                        switch (l.label) {
                            case 0:
                                if (t = (e = this.props).optimizely, i = e.userId, r = e.userAttributes, n = e.user, !t) return P.error("OptimizelyProvider must be passed an instance of the Optimizely SDK client"), [2];
                                if (o = null, n ? "then" in n ? n.then(function(e) {
                                        t.setUser(e)
                                    }) : o = {
                                        id: n.id,
                                        attributes: n.attributes || {}
                                    } : i ? (o = {
                                        id: i,
                                        attributes: r || {}
                                    }, P.warn("Passing userId and userAttributes as props is deprecated, please switch to using `user` prop")) : t.user ? (s = (a = t.user).id, u = a.attributes, o = {
                                        id: s,
                                        attributes: r || u || {}
                                    }) : o = {
                                        id: C.id,
                                        attributes: r || C.attributes
                                    }, !o) return [3, 4];
                                l.label = 1;
                            case 1:
                                return l.trys.push([1, 3, , 4]), [4, t.setUser(o)];
                            case 2:
                                return l.sent(), [3, 4];
                            case 3:
                                return l.sent(), P.error("Error while trying to set user."), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.componentDidUpdate = function(e) {
                if (!e.isServerSide) {
                    var t = this.props.optimizely;
                    this.props.user && "id" in this.props.user && (t.user.id && O({
                        id: t.user.id,
                        attributes: t.user.attributes || {}
                    }, {
                        id: this.props.user.id,
                        attributes: this.props.user.attributes || {}
                    }) || t.setUser(this.props.user))
                }
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.optimizely,
                    i = e.children,
                    r = e.timeout,
                    n = !!this.props.isServerSide;
                return d.createElement(h, {
                    value: {
                        optimizely: t,
                        isServerSide: n,
                        timeout: r
                    }
                }, i)
            }, t
        }(d.Component),
        V = function(e, t, i, r, n) {
            var o = "re-evaluating ".concat(t, '="').concat(i, '" for user="').concat(e.user.id, '"'),
                a = e.notificationCenter.addNotificationListener(u.enums.NOTIFICATION_TYPES.OPTIMIZELY_CONFIG_UPDATE, function() {
                    r.info("".concat(u.enums.NOTIFICATION_TYPES.OPTIMIZELY_CONFIG_UPDATE, ", ").concat(o)), n()
                }),
                s = e.onUserUpdate(function() {
                    r.info("User update, ".concat(o)), n()
                });
            return function() {
                e.notificationCenter.removeNotificationListener(a), s()
            }
        },
        M = u.getLogger("ReactSDK"),
        F = "The 'optimizely' prop must be supplied via a parent <OptimizelyProvider>";

    function k(e, t) {
        return e.entityKey === t.entityKey && e.overrideUserId === t.overrideUserId && R(e.overrideAttributes, t.overrideAttributes)
    }

    function G(e, t, i) {
        e.onReady({
            timeout: t
        }).then(function(e) {
            var r, n, a, s;
            if (e.success) {
                M.info("Client immediately ready"), i({
                    clientReady: !0,
                    didTimeout: !1
                });
                return
            }
            switch (e.reason) {
                case o.NO_CLIENT:
                    M.warn('Client not ready, reason="'.concat(e.message, '"')), i({
                        clientReady: !1,
                        didTimeout: !1
                    }), null == (r = e.dataReadyPromise) || r.then(function(e) {
                        if (e) {
                            var t = e.success,
                                r = e.message;
                            t ? M.info("Client became ready.") : M.warn('Client not ready, reason="'.concat(r, '"')), i({
                                clientReady: t,
                                didTimeout: !1
                            })
                        }
                    });
                    break;
                case o.USER_NOT_READY:
                    M.warn('User was not ready, reason="'.concat(e.message, '"')), i({
                        clientReady: !1,
                        didTimeout: !1
                    }), null == (n = e.dataReadyPromise) || n.then(function(e) {
                        if (e) {
                            var t = e.success,
                                r = e.message;
                            t ? M.info("User became ready later.") : M.warn('Client not ready, reason="'.concat(r, '"')), i({
                                clientReady: t,
                                didTimeout: !1
                            })
                        }
                    });
                    break;
                case o.TIMEOUT:
                    M.info("Client did not become ready before timeout of ".concat(t, ' ms, reason="').concat(e.message, '"')), i({
                        clientReady: !1,
                        didTimeout: !0
                    }), null == (a = e.dataReadyPromise) || a.then(function(e) {
                        if (e) {
                            var t = e.success,
                                r = e.message;
                            t ? M.info("Client became ready after timeout already elapsed") : M.warn('Client not ready, reason="'.concat(r, '"')), i({
                                clientReady: t,
                                didTimeout: !0
                            })
                        }
                    });
                    break;
                default:
                    M.warn('Other reason client not ready, reason="'.concat(e.message, '"')), i({
                        clientReady: !1,
                        didTimeout: !1
                    }), null == (s = e.dataReadyPromise) || s.then(function(e) {
                        if (e) {
                            var t = e.success,
                                r = e.message;
                            t ? M.info("Client became ready later") : M.warn('Client not ready, reason="'.concat(r, '"')), i({
                                clientReady: t,
                                didTimeout: !1
                            })
                        }
                    })
            }
        }).catch(function() {
            M.error("Error initializing client. The core client or user promise(s) rejected.")
        })
    }

    function K(e) {
        var t = s.useRef();
        return R(e, t.current) || (t.current = e), t.current
    }(n = a || (a = {})).EXPERIMENT = "Experiment", n.FEATURE = "Feature";
    var j = function(e, t, i) {
            void 0 === t && (t = {}), void 0 === i && (i = {});
            var r = s.useContext(p),
                n = r.optimizely,
                o = r.isServerSide,
                u = r.timeout,
                l = K(i.overrideAttributes),
                c = s.useCallback(function() {
                    return {
                        variation: (null == n ? void 0 : n.activate(e, i.overrideUserId, l)) || null
                    }
                }, [n, e, i.overrideUserId, l]),
                d = o || !!(null == n ? void 0 : n.isReady()),
                f = !!(null == n ? void 0 : n.getIsReadyPromiseFulfilled()),
                g = s.useState(function() {
                    var e = d ? c() : {
                        variation: null
                    };
                    return y(y({}, e), {
                        clientReady: d,
                        didTimeout: !1
                    })
                }),
                h = g[0],
                E = g[1],
                v = {
                    entityKey: e,
                    overrideUserId: i.overrideUserId,
                    overrideAttributes: l
                },
                I = s.useState(v),
                _ = I[0],
                m = I[1];
            k(_, v) || (m(v), E(function(e) {
                return y(y({}, e), c())
            }));
            var O = void 0 !== t.timeout ? t.timeout : u;
            return s.useEffect(function() {
                n && (n.getIsUsingSdkKey() && !f || !d) && G(n, O, function(e) {
                    E(y(y({}, c()), e))
                })
            }, [O, c, d, f, n]), s.useEffect(function() {
                return n && f && t.autoUpdate ? V(n, a.EXPERIMENT, e, M, function() {
                    E(function(e) {
                        return y(y({}, e), c())
                    })
                }) : function() {}
            }, [f, t.autoUpdate, n, e, c]), s.useEffect(function() {
                return null == n ? void 0 : n.onForcedVariationsUpdate(function() {
                    E(function(e) {
                        return y(y({}, e), c())
                    })
                })
            }, [c, n]), n || M.error("Unable to use experiment ".concat(e, ". ").concat(F)), [h.variation, h.clientReady, h.didTimeout]
        },
        z = function(e, t, i) {
            void 0 === t && (t = {}), void 0 === i && (i = {});
            var r = s.useContext(p),
                n = r.optimizely,
                o = r.isServerSide,
                u = r.timeout,
                l = K(i.overrideAttributes),
                c = s.useCallback(function() {
                    return {
                        isEnabled: !!(null == n ? void 0 : n.isFeatureEnabled(e, i.overrideUserId, l)),
                        variables: (null == n ? void 0 : n.getFeatureVariables(e, i.overrideUserId, l)) || {}
                    }
                }, [n, e, i.overrideUserId, l]),
                d = o || !!(null == n ? void 0 : n.isReady()),
                f = !!(null == n ? void 0 : n.getIsReadyPromiseFulfilled()),
                g = s.useState(function() {
                    var e = d ? c() : {
                        isEnabled: !1,
                        variables: {}
                    };
                    return y(y({}, e), {
                        clientReady: d,
                        didTimeout: !1
                    })
                }),
                h = g[0],
                E = g[1],
                v = {
                    entityKey: e,
                    overrideUserId: i.overrideUserId,
                    overrideAttributes: i.overrideAttributes
                },
                I = s.useState(v),
                _ = I[0],
                m = I[1];
            k(_, v) || (m(v), E(function(e) {
                return y(y({}, e), c())
            }));
            var O = void 0 !== t.timeout ? t.timeout : u;
            return s.useEffect(function() {
                n && (n.getIsUsingSdkKey() || !d) && G(n, O, function(e) {
                    E(y(y({}, c()), e))
                })
            }, [O, c, n]), s.useEffect(function() {
                return n && f && t.autoUpdate ? V(n, a.FEATURE, e, M, function() {
                    E(function(e) {
                        return y(y({}, e), c())
                    })
                }) : function() {}
            }, [f, t.autoUpdate, n, e, c]), n || M.error("Unable to properly use feature ".concat(e, ". ").concat(F)), [h.isEnabled, h.variables, h.clientReady, h.didTimeout]
        },
        B = f.getLogger("ReactSDK");
    Object.defineProperty(i, "OptimizelyDecideOption", {
        enumerable: !0,
        get: function() {
            return u.OptimizelyDecideOption
        }
    }), Object.defineProperty(i, "OptimizelySegmentOption", {
        enumerable: !0,
        get: function() {
            return u.OptimizelySegmentOption
        }
    }), Object.defineProperty(i, "enums", {
        enumerable: !0,
        get: function() {
            return u.enums
        }
    }), Object.defineProperty(i, "errorHandler", {
        enumerable: !0,
        get: function() {
            return u.errorHandler
        }
    }), Object.defineProperty(i, "eventDispatcher", {
        enumerable: !0,
        get: function() {
            return u.eventDispatcher
        }
    }), Object.defineProperty(i, "logging", {
        enumerable: !0,
        get: function() {
            return u.logging
        }
    }), Object.defineProperty(i, "setLogLevel", {
        enumerable: !0,
        get: function() {
            return u.setLogLevel
        }
    }), Object.defineProperty(i, "setLogger", {
        enumerable: !0,
        get: function() {
            return u.setLogger
        }
    }), i.OptimizelyContext = p, i.OptimizelyContextConsumer = g, i.OptimizelyContextProvider = h, i.OptimizelyExperiment = function(e) {
        var t = e.experiment,
            i = e.autoUpdate,
            r = e.timeout,
            n = e.overrideUserId,
            o = e.overrideAttributes,
            a = e.children,
            s = j(t, {
                timeout: r,
                autoUpdate: i
            }, {
                overrideUserId: n,
                overrideAttributes: o
            }),
            u = s[0],
            l = s[1],
            c = s[2];
        if (!l && !c) return null;
        if (null != a && "function" == typeof a) return d.createElement(d.Fragment, null, a(u, l, c));
        var f = null,
            p = null;
        d.Children.forEach(a, function(e) {
            d.isValidElement(e) && (e.props.variation && u === e.props.variation && (p = e), e.props.default && (f = e))
        });
        var g = null;
        return p ? g = p : f && (g = f), g
    }, i.OptimizelyFeature = function(e) {
        var t = e.feature,
            i = e.timeout,
            r = e.autoUpdate,
            n = e.children,
            o = z(t, {
                timeout: i,
                autoUpdate: r
            }, {
                overrideUserId: e.overrideUserId,
                overrideAttributes: e.overrideAttributes
            }),
            a = o[0],
            s = o[1],
            u = o[2],
            l = o[3];
        return u || l ? d.createElement(d.Fragment, null, n(a, s, u, l)) : null
    }, i.OptimizelyProvider = x, i.OptimizelyVariation = function(e) {
        var t = e.children;
        return d.createElement(d.Fragment, null, t)
    }, i.createInstance = function(e) {
        return new w(e)
    }, i.logOnlyEventDispatcher = {
        dispatchEvent: function(e, t) {
            B.debug("Event not dispatched by disabled event dispatcher: %s", function() {
                var t;
                try {
                    t = JSON.stringify(e)
                } catch (e) {
                    t = "error stringifying event"
                }
                return t
            }), t({
                statusCode: 204
            })
        }
    }, i.useDecision = function(e, t, i) {
        void 0 === t && (t = {}), void 0 === i && (i = {});
        var r = s.useContext(p),
            n = r.optimizely,
            o = r.isServerSide,
            u = r.timeout,
            l = K(i.overrideAttributes),
            c = s.useMemo(function() {
                return N(e, "Optimizely SDK not configured properly yet.", {
                    id: i.overrideUserId || null,
                    attributes: l || {}
                })
            }, [e, l, i.overrideUserId]),
            d = s.useCallback(function() {
                return {
                    decision: (null == n ? void 0 : n.decide(e, t.decideOptions, i.overrideUserId, l)) || c
                }
            }, [e, c, n, t.decideOptions, l, i.overrideUserId]),
            f = o || !!(null == n ? void 0 : n.isReady()),
            g = !!(null == n ? void 0 : n.getIsReadyPromiseFulfilled()),
            h = s.useState(function() {
                var e = f ? d() : {
                    decision: c
                };
                return y(y({}, e), {
                    clientReady: f,
                    didTimeout: !1
                })
            }),
            E = h[0],
            v = h[1],
            I = {
                entityKey: e,
                overrideUserId: i.overrideUserId,
                overrideAttributes: i.overrideAttributes
            },
            _ = s.useState(I),
            m = _[0],
            O = _[1];
        k(m, I) || (O(I), v(function(e) {
            return y(y({}, e), d())
        }));
        var b = void 0 !== t.timeout ? t.timeout : u;
        return s.useEffect(function() {
            n && (n.getIsUsingSdkKey() || !f) && G(n, b, function(e) {
                v(y(y({}, d()), e))
            })
        }, [b, d, n]), s.useEffect(function() {
            if (!i.overrideUserId && !i.overrideAttributes && t.autoUpdate) return A.subscribe(e, function() {
                v(function(e) {
                    return y(y({}, e), d())
                })
            })
        }, [i.overrideUserId, i.overrideAttributes, t.autoUpdate, e, d]), s.useEffect(function() {
            return n && g && t.autoUpdate ? V(n, a.FEATURE, e, M, function() {
                v(function(e) {
                    return y(y({}, e), d())
                })
            }) : function() {}
        }, [g, t.autoUpdate, n, e, d]), n || M.error("Unable to use decision ".concat(e, ". ").concat(F)), [E.decision, E.clientReady, E.didTimeout]
    }, i.useExperiment = j, i.useFeature = z, i.useTrackEvent = function() {
        var e = s.useContext(p),
            t = e.optimizely,
            i = e.isServerSide,
            r = e.timeout,
            n = i || !!(null == t ? void 0 : t.isReady()),
            o = s.useCallback(function() {
                for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                t ? n ? t.track.apply(t, e) : M.error("Unable to track events. Optimizely client is not ready yet.") : M.error("Unable to track events. ".concat(F))
            }, [t, n]),
            a = s.useState(function() {
                return {
                    clientReady: n,
                    didTimeout: !1
                }
            }),
            u = a[0],
            l = a[1];
        return s.useEffect(function() {
            t && (t.getIsUsingSdkKey() || !n) && G(t, r, function(e) {
                l(e)
            })
        }, [t, r]), [o, u.clientReady, u.didTimeout]
    }, i.withOptimizely = function(e) {
        var t, i;
        return t = function(t) {
            function i() {
                return null !== t && t.apply(this, arguments) || this
            }
            return v(i, t), i.prototype.render = function() {
                var t = this.props,
                    i = t.forwardedRef,
                    r = function(e, t) {
                        var i = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (i[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                            for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) 0 > t.indexOf(r[n]) && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (i[r[n]] = e[r[n]]);
                        return i
                    }(t, ["forwardedRef"]);
                return d.createElement(g, null, function(t) {
                    return d.createElement(e, y({}, r, {
                        optimizelyReadyTimeout: t.timeout,
                        optimizely: t.optimizely,
                        isServerSide: t.isServerSide,
                        ref: i
                    }))
                })
            }, i
        }(d.Component), (i = function(e, i) {
            return d.createElement(t, y({}, e, {
                forwardedRef: i
            }))
        }).displayName = "".concat("withOptimizely", "(").concat(e.displayName || e.name, ")"), l(d.forwardRef(i), e)
    }
}, 595990, e => {
    "use strict";
    var t = e.i(261576),
        i = e.i(251462),
        r = e.i(480495),
        n = e.i(191788);
    e.s(["useDecideFeatureFlag", 0, () => {
        let e, o, a = (0, t.c)(4),
            {
                optimizely: s
            } = (0, n.useContext)(i.OptimizelyContext);
        a[0] !== s ? (e = function(e, t) {
            if (!s || t && !t.decideIf) return {
                enabled: !1,
                variation: "off",
                variables: {}
            };
            let i = (0, r.getCookie)(e) ? .toString().toLowerCase();
            if (i) return {
                enabled: !!i,
                variation: i,
                variables: {}
            };
            let n = s.decide(e);
            return {
                enabled: n.enabled,
                variation: n.variationKey,
                variables: n.variables || {}
            }
        }, a[0] = s, a[1] = e) : e = a[1];
        let u = e;
        return a[2] !== u ? (o = {
            decideFeatureFlag: u
        }, a[2] = u, a[3] = o) : o = a[3], o
    }, "useFeatureFlag", 0, e => {
        let n, o, a, s, u = (0, t.c)(9);
        u[0] !== e ? (n = (0, r.getCookie)(e) ? .toString().toLowerCase(), u[0] = e, u[1] = n) : n = u[1];
        let l = n;
        u[2] === Symbol.for("react.memo_cache_sentinel") ? (o = {
            autoUpdate: !0
        }, u[2] = o) : o = u[2];
        let [c] = (0, i.useDecision)(e, o), d = !!l || c.enabled, f = l || c.variationKey;
        return u[3] !== c.variables ? (a = c.variables || {}, u[3] = c.variables, u[4] = a) : a = u[4], u[5] !== d || u[6] !== f || u[7] !== a ? (s = {
            enabled: d,
            variation: f,
            variables: a
        }, u[5] = d, u[6] = f, u[7] = a, u[8] = s) : s = u[8], s
    }])
}]);

//# sourceMappingURL=157dow~t-fq.6.js.map