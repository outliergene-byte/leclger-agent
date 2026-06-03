(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 841583, e => {
    "use strict";
    let t = function(e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        let t = new Uint8Array(256);
        for (let e = 0; e < t.length; e++) t[e] = 255;
        for (let r = 0; r < e.length; r++) {
            let i = e.charAt(r),
                s = i.charCodeAt(0);
            if (255 !== t[s]) throw TypeError(i + " is ambiguous");
            t[s] = r
        }
        let r = e.length,
            i = e.charAt(0),
            s = Math.log(r) / Math.log(256),
            n = Math.log(256) / Math.log(r);

        function o(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array;
            let n = 0,
                o = 0,
                a = 0;
            for (; e[n] === i;) o++, n++;
            let c = (e.length - n) * s + 1 >>> 0,
                l = new Uint8Array(c);
            for (; n < e.length;) {
                let i = e.charCodeAt(n);
                if (i > 255) return;
                let s = t[i];
                if (255 === s) return;
                let o = 0;
                for (let e = c - 1;
                    (0 !== s || o < a) && -1 !== e; e--, o++) s += r * l[e] >>> 0, l[e] = s % 256 >>> 0, s = s / 256 >>> 0;
                if (0 !== s) throw Error("Non-zero carry");
                a = o, n++
            }
            let h = c - a;
            for (; h !== c && 0 === l[h];) h++;
            let d = new Uint8Array(o + (c - h)),
                u = o;
            for (; h !== c;) d[u++] = l[h++];
            return d
        }
        return {
            encode: function(t) {
                if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                if (0 === t.length) return "";
                let s = 0,
                    o = 0,
                    a = 0,
                    c = t.length;
                for (; a !== c && 0 === t[a];) a++, s++;
                let l = (c - a) * n + 1 >>> 0,
                    h = new Uint8Array(l);
                for (; a !== c;) {
                    let e = t[a],
                        i = 0;
                    for (let t = l - 1;
                        (0 !== e || i < o) && -1 !== t; t--, i++) e += 256 * h[t] >>> 0, h[t] = e % r >>> 0, e = e / r >>> 0;
                    if (0 !== e) throw Error("Non-zero carry");
                    o = i, a++
                }
                let d = l - o;
                for (; d !== l && 0 === h[d];) d++;
                let u = i.repeat(s);
                for (; d < l; ++d) u += e.charAt(h[d]);
                return u
            },
            decodeUnsafe: o,
            decode: function(e) {
                let t = o(e);
                if (t) return t;
                throw Error("Non-base" + r + " character")
            }
        }
    }("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    e.s(["default", 0, t], 841583)
}, 77755, e => {
    "use strict";
    let t, r;
    var i, s = e.i(711790),
        n = e.i(712314);

    function o(e, ...t) {
        if (!(e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length)) throw Error("Uint8Array expected of length " + t + ", got length=" + e.length)
    }

    function a(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished) throw Error("Hash#digest() has already been called")
    }
    let c = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0,
        l = e => new DataView(e.buffer, e.byteOffset, e.byteLength);

    function h(e) {
        return "string" == typeof e && (e = function(e) {
            if ("string" != typeof e) throw Error("utf8ToBytes expected string, got " + typeof e);
            return new Uint8Array(new TextEncoder().encode(e))
        }(e)), o(e), e
    }
    class d {
        clone() {
            return this._cloneInto()
        }
    }

    function u(e = 32) {
        if (c && "function" == typeof c.getRandomValues) return c.getRandomValues(new Uint8Array(e));
        if (c && "function" == typeof c.randomBytes) return c.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined")
    }
    class p extends d {
        constructor(e, t, r, i) {
            super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = l(this.buffer)
        }
        update(e) {
            a(this);
            let {
                view: t,
                buffer: r,
                blockLen: i
            } = this, s = (e = h(e)).length;
            for (let n = 0; n < s;) {
                let o = Math.min(i - this.pos, s - n);
                if (o === i) {
                    let t = l(e);
                    for (; i <= s - n; n += i) this.process(t, n);
                    continue
                }
                r.set(e.subarray(n, n + o), this.pos), this.pos += o, n += o, this.pos === i && (this.process(t, 0), this.pos = 0)
            }
            return this.length += e.length, this.roundClean(), this
        }
        digestInto(e) {
            a(this),
                function(e, t) {
                    o(e);
                    let r = t.outputLen;
                    if (e.length < r) throw Error("digestInto() expects output buffer of length at least " + r)
                }(e, this), this.finished = !0;
            let {
                buffer: t,
                view: r,
                blockLen: i,
                isLE: s
            } = this, {
                pos: n
            } = this;
            t[n++] = 128, this.buffer.subarray(n).fill(0), this.padOffset > i - n && (this.process(r, 0), n = 0);
            for (let e = n; e < i; e++) t[e] = 0;
            (function(e, t, r, i) {
                if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
                let s = BigInt(32),
                    n = BigInt(0xffffffff),
                    o = Number(r >> s & n),
                    a = Number(r & n),
                    c = 4 * !!i,
                    l = 4 * !i;
                e.setUint32(t + c, o, i), e.setUint32(t + l, a, i)
            })(r, i - 8, BigInt(8 * this.length), s), this.process(r, 0);
            let c = l(e),
                h = this.outputLen;
            if (h % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
            let d = h / 4,
                u = this.get();
            if (d > u.length) throw Error("_sha2: outputLen bigger than state");
            for (let e = 0; e < d; e++) c.setUint32(4 * e, u[e], s)
        }
        digest() {
            let {
                buffer: e,
                outputLen: t
            } = this;
            this.digestInto(e);
            let r = e.slice(0, t);
            return this.destroy(), r
        }
        _cloneInto(e) {
            e || (e = new this.constructor), e.set(...this.get());
            let {
                blockLen: t,
                buffer: r,
                length: i,
                finished: s,
                destroyed: n,
                pos: o
            } = this;
            return e.length = i, e.pos = o, e.finished = s, e.destroyed = n, i % t && e.buffer.set(r), e
        }
    }
    let g = BigInt(0x100000000 - 1),
        f = BigInt(32),
        m = (e, t, r) => e >>> r,
        y = (e, t, r) => e << 32 - r | t >>> r,
        w = (e, t, r) => e >>> r | t << 32 - r,
        b = (e, t, r) => e << 32 - r | t >>> r,
        v = (e, t, r) => e << 64 - r | t >>> r - 32,
        E = (e, t, r) => e >>> r - 32 | t << 64 - r,
        I = function(e, t, r, i) {
            let s = (t >>> 0) + (i >>> 0);
            return {
                h: e + r + (s / 0x100000000 | 0) | 0,
                l: 0 | s
            }
        },
        C = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        S = (e, t, r, i) => t + r + i + (e / 0x100000000 | 0) | 0,
        x = (e, t, r, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0),
        A = (e, t, r, i, s) => t + r + i + s + (e / 0x100000000 | 0) | 0,
        N = (e, t, r, i, s, n) => t + r + i + s + n + (e / 0x100000000 | 0) | 0,
        _ = (e, t, r, i, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0) + (s >>> 0),
        [T, k] = function(e, t = !1) {
            let r = new Uint32Array(e.length),
                i = new Uint32Array(e.length);
            for (let s = 0; s < e.length; s++) {
                let {
                    h: n,
                    l: o
                } = function(e, t = !1) {
                    return t ? {
                        h: Number(e & g),
                        l: Number(e >> f & g)
                    } : {
                        h: 0 | Number(e >> f & g),
                        l: 0 | Number(e & g)
                    }
                }(e[s], t);
                [r[s], i[s]] = [n, o]
            }
            return [r, i]
        }(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(e => BigInt(e))),
        P = new Uint32Array(80),
        O = new Uint32Array(80);
    class R extends p {
        constructor() {
            super(128, 64, 16, !1), this.Ah = 0x6a09e667, this.Al = -0xc4336f8, this.Bh = -0x4498517b, this.Bl = -0x7b3558c5, this.Ch = 0x3c6ef372, this.Cl = -0x16b07d5, this.Dh = -0x5ab00ac6, this.Dl = 0x5f1d36f1, this.Eh = 0x510e527f, this.El = -0x52197d2f, this.Fh = -0x64fa9774, this.Fl = 0x2b3e6c1f, this.Gh = 0x1f83d9ab, this.Gl = -0x4be4295, this.Hh = 0x5be0cd19, this.Hl = 0x137e2179
        }
        get() {
            let {
                Ah: e,
                Al: t,
                Bh: r,
                Bl: i,
                Ch: s,
                Cl: n,
                Dh: o,
                Dl: a,
                Eh: c,
                El: l,
                Fh: h,
                Fl: d,
                Gh: u,
                Gl: p,
                Hh: g,
                Hl: f
            } = this;
            return [e, t, r, i, s, n, o, a, c, l, h, d, u, p, g, f]
        }
        set(e, t, r, i, s, n, o, a, c, l, h, d, u, p, g, f) {
            this.Ah = 0 | e, this.Al = 0 | t, this.Bh = 0 | r, this.Bl = 0 | i, this.Ch = 0 | s, this.Cl = 0 | n, this.Dh = 0 | o, this.Dl = 0 | a, this.Eh = 0 | c, this.El = 0 | l, this.Fh = 0 | h, this.Fl = 0 | d, this.Gh = 0 | u, this.Gl = 0 | p, this.Hh = 0 | g, this.Hl = 0 | f
        }
        process(e, t) {
            for (let r = 0; r < 16; r++, t += 4) P[r] = e.getUint32(t), O[r] = e.getUint32(t += 4);
            for (let e = 16; e < 80; e++) {
                let t = 0 | P[e - 15],
                    r = 0 | O[e - 15],
                    i = w(t, r, 1) ^ w(t, r, 8) ^ m(t, r, 7),
                    s = b(t, r, 1) ^ b(t, r, 8) ^ y(t, r, 7),
                    n = 0 | P[e - 2],
                    o = 0 | O[e - 2],
                    a = w(n, o, 19) ^ v(n, o, 61) ^ m(n, o, 6),
                    c = x(s, b(n, o, 19) ^ E(n, o, 61) ^ y(n, o, 6), O[e - 7], O[e - 16]),
                    l = A(c, i, a, P[e - 7], P[e - 16]);
                P[e] = 0 | l, O[e] = 0 | c
            }
            let {
                Ah: r,
                Al: i,
                Bh: s,
                Bl: n,
                Ch: o,
                Cl: a,
                Dh: c,
                Dl: l,
                Eh: h,
                El: d,
                Fh: u,
                Fl: p,
                Gh: g,
                Gl: f,
                Hh: R,
                Hl: U
            } = this;
            for (let e = 0; e < 80; e++) {
                let t = w(h, d, 14) ^ w(h, d, 18) ^ v(h, d, 41),
                    m = b(h, d, 14) ^ b(h, d, 18) ^ E(h, d, 41),
                    y = h & u ^ ~h & g,
                    x = _(U, m, d & p ^ ~d & f, k[e], O[e]),
                    A = N(x, R, t, y, T[e], P[e]),
                    D = 0 | x,
                    L = w(r, i, 28) ^ v(r, i, 34) ^ v(r, i, 39),
                    M = b(r, i, 28) ^ E(r, i, 34) ^ E(r, i, 39),
                    B = r & s ^ r & o ^ s & o,
                    q = i & n ^ i & a ^ n & a;
                R = 0 | g, U = 0 | f, g = 0 | u, f = 0 | p, u = 0 | h, p = 0 | d, ({
                    h: h,
                    l: d
                } = I(0 | c, 0 | l, 0 | A, 0 | D)), c = 0 | o, l = 0 | a, o = 0 | s, a = 0 | n, s = 0 | r, n = 0 | i;
                let j = C(D, M, q);
                r = S(j, A, L, B), i = 0 | j
            }({
                h: r,
                l: i
            } = I(0 | this.Ah, 0 | this.Al, 0 | r, 0 | i)), ({
                h: s,
                l: n
            } = I(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | n)), ({
                h: o,
                l: a
            } = I(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)), ({
                h: c,
                l: l
            } = I(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)), ({
                h: h,
                l: d
            } = I(0 | this.Eh, 0 | this.El, 0 | h, 0 | d)), ({
                h: u,
                l: p
            } = I(0 | this.Fh, 0 | this.Fl, 0 | u, 0 | p)), ({
                h: g,
                l: f
            } = I(0 | this.Gh, 0 | this.Gl, 0 | g, 0 | f)), ({
                h: R,
                l: U
            } = I(0 | this.Hh, 0 | this.Hl, 0 | R, 0 | U)), this.set(r, i, s, n, o, a, c, l, h, d, u, p, g, f, R, U)
        }
        roundClean() {
            P.fill(0), O.fill(0)
        }
        destroy() {
            this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        }
    }
    let U = (i = () => new R, (t = e => i().update(h(e)).digest()).outputLen = (r = i()).outputLen, t.blockLen = r.blockLen, t.create = () => i(), t),
        D = BigInt(0),
        L = BigInt(1),
        M = BigInt(2);

    function B(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name
    }

    function q(e) {
        if (!B(e)) throw Error("Uint8Array expected")
    }

    function j(e, t) {
        if ("boolean" != typeof t) throw Error(e + " boolean expected, got " + t)
    }
    let $ = Array.from({
        length: 256
    }, (e, t) => t.toString(16).padStart(2, "0"));

    function V(e) {
        q(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += $[e[r]];
        return t
    }

    function z(e) {
        if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
        return "" === e ? D : BigInt("0x" + e)
    }

    function F(e) {
        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void 0
    }

    function K(e) {
        if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
        let t = e.length,
            r = t / 2;
        if (t % 2) throw Error("hex string expected, got unpadded hex of length " + t);
        let i = new Uint8Array(r);
        for (let t = 0, s = 0; t < r; t++, s += 2) {
            let r = F(e.charCodeAt(s)),
                n = F(e.charCodeAt(s + 1));
            if (void 0 === r || void 0 === n) throw Error('hex string expected, got non-hex character "' + (e[s] + e[s + 1]) + '" at index ' + s);
            i[t] = 16 * r + n
        }
        return i
    }

    function W(e) {
        return q(e), z(V(Uint8Array.from(e).reverse()))
    }

    function H(e, t) {
        return K(e.toString(16).padStart(2 * t, "0"))
    }

    function G(e, t) {
        return H(e, t).reverse()
    }

    function J(e, t, r) {
        let i;
        if ("string" == typeof t) try {
                i = K(t)
            } catch (t) {
                throw Error(e + " must be hex string or Uint8Array, cause: " + t)
            } else if (B(t)) i = Uint8Array.from(t);
            else throw Error(e + " must be hex string or Uint8Array");
        let s = i.length;
        if ("number" == typeof r && s !== r) throw Error(e + " of length " + r + " expected, got " + s);
        return i
    }

    function Y(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
            let i = e[r];
            q(i), t += i.length
        }
        let r = new Uint8Array(t);
        for (let t = 0, i = 0; t < e.length; t++) {
            let s = e[t];
            r.set(s, i), i += s.length
        }
        return r
    }
    let X = e => "bigint" == typeof e && D <= e;

    function Q(e, t, r, i) {
        if (!(X(t) && X(r) && X(i)) || !(r <= t) || !(t < i)) throw Error("expected valid " + e + ": " + r + " <= n < " + i + ", got " + t)
    }
    let Z = {
        bigint: e => "bigint" == typeof e,
        function: e => "function" == typeof e,
        boolean: e => "boolean" == typeof e,
        string: e => "string" == typeof e,
        stringOrUint8Array: e => "string" == typeof e || B(e),
        isSafeInteger: e => Number.isSafeInteger(e),
        array: e => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: e => "function" == typeof e && Number.isSafeInteger(e.outputLen)
    };

    function ee(e, t, r = {}) {
        let i = (t, r, i) => {
            let s = Z[r];
            if ("function" != typeof s) throw Error("invalid validator function");
            let n = e[t];
            if (!(i && void 0 === n) && !s(n, e)) throw Error("param " + String(t) + " is invalid. Expected " + r + ", got " + n)
        };
        for (let [e, r] of Object.entries(t)) i(e, r, !1);
        for (let [e, t] of Object.entries(r)) i(e, t, !0);
        return e
    }

    function et(e) {
        let t = new WeakMap;
        return (r, ...i) => {
            let s = t.get(r);
            if (void 0 !== s) return s;
            let n = e(r, ...i);
            return t.set(r, n), n
        }
    }
    let er = BigInt(0),
        ei = BigInt(1),
        es = BigInt(2),
        en = BigInt(3),
        eo = BigInt(4),
        ea = BigInt(5),
        ec = BigInt(8);

    function el(e, t) {
        let r = e % t;
        return r >= er ? r : t + r
    }

    function eh(e, t, r) {
        let i = e;
        for (; t-- > er;) i *= i, i %= r;
        return i
    }

    function ed(e, t) {
        if (e === er) throw Error("invert: expected non-zero number");
        if (t <= er) throw Error("invert: expected positive modulus, got " + t);
        let r = el(e, t),
            i = t,
            s = er,
            n = ei;
        for (; r !== er;) {
            let e = i / r,
                t = i % r,
                o = s - n * e;
            i = r, r = t, s = n, n = o
        }
        if (i !== ei) throw Error("invert: does not exist");
        return el(s, t)
    }
    let eu = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

    function ep(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length,
            i = Math.ceil(r / 8);
        return {
            nBitLength: r,
            nByteLength: i
        }
    }

    function eg(e, t, r = !1, i = {}) {
        let s;
        if (e <= er) throw Error("invalid field: expected ORDER > 0, got " + e);
        let {
            nBitLength: n,
            nByteLength: o
        } = ep(e, t);
        if (o > 2048) throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let a = Object.freeze({
            ORDER: e,
            isLE: r,
            BITS: n,
            BYTES: o,
            MASK: (M << BigInt(n - 1)) - L,
            ZERO: er,
            ONE: ei,
            create: t => el(t, e),
            isValid: t => {
                if ("bigint" != typeof t) throw Error("invalid field element: expected bigint, got " + typeof t);
                return er <= t && t < e
            },
            is0: e => e === er,
            isOdd: e => (e & ei) === ei,
            neg: t => el(-t, e),
            eql: (e, t) => e === t,
            sqr: t => el(t * t, e),
            add: (t, r) => el(t + r, e),
            sub: (t, r) => el(t - r, e),
            mul: (t, r) => el(t * r, e),
            pow: (e, t) => (function(e, t, r) {
                if (r < er) throw Error("invalid exponent, negatives unsupported");
                if (r === er) return e.ONE;
                if (r === ei) return t;
                let i = e.ONE,
                    s = t;
                for (; r > er;) r & ei && (i = e.mul(i, s)), s = e.sqr(s), r >>= ei;
                return i
            })(a, e, t),
            div: (t, r) => el(t * ed(r, e), e),
            sqrN: e => e * e,
            addN: (e, t) => e + t,
            subN: (e, t) => e - t,
            mulN: (e, t) => e * t,
            inv: t => ed(t, e),
            sqrt: i.sqrt || (t => (s || (s = function(e) {
                if (e % eo === en) {
                    let t = (e + ei) / eo;
                    return function(e, r) {
                        let i = e.pow(r, t);
                        if (!e.eql(e.sqr(i), r)) throw Error("Cannot find square root");
                        return i
                    }
                }
                if (e % ec === ea) {
                    let t = (e - ea) / ec;
                    return function(e, r) {
                        let i = e.mul(r, es),
                            s = e.pow(i, t),
                            n = e.mul(r, s),
                            o = e.mul(e.mul(n, es), s),
                            a = e.mul(n, e.sub(o, e.ONE));
                        if (!e.eql(e.sqr(a), r)) throw Error("Cannot find square root");
                        return a
                    }
                }
                return function(e) {
                    let t, r, i, s = (e - ei) / es;
                    for (t = e - ei, r = 0; t % es === er; t /= es, r++);
                    for (i = es; i < e && function(e, t, r) {
                            if (t < er) throw Error("invalid exponent, negatives unsupported");
                            if (r <= er) throw Error("invalid modulus");
                            if (r === ei) return er;
                            let i = ei;
                            for (; t > er;) t & ei && (i = i * e % r), e = e * e % r, t >>= ei;
                            return i
                        }(i, s, e) !== e - ei; i++)
                        if (i > 1e3) throw Error("Cannot find square root: likely non-prime P");
                    if (1 === r) {
                        let t = (e + ei) / eo;
                        return function(e, r) {
                            let i = e.pow(r, t);
                            if (!e.eql(e.sqr(i), r)) throw Error("Cannot find square root");
                            return i
                        }
                    }
                    let n = (t + ei) / es;
                    return function(e, o) {
                        if (e.pow(o, s) === e.neg(e.ONE)) throw Error("Cannot find square root");
                        let a = r,
                            c = e.pow(e.mul(e.ONE, i), t),
                            l = e.pow(o, n),
                            h = e.pow(o, t);
                        for (; !e.eql(h, e.ONE);) {
                            if (e.eql(h, e.ZERO)) return e.ZERO;
                            let t = 1;
                            for (let r = e.sqr(h); t < a && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                            let r = e.pow(c, ei << BigInt(a - t - 1));
                            c = e.sqr(r), l = e.mul(l, r), h = e.mul(h, c), a = t
                        }
                        return l
                    }
                }(e)
            }(e)), s(a, t))),
            invertBatch: e => {
                let t, r, i;
                return t = Array(e.length), r = e.reduce((e, r, i) => a.is0(r) ? e : (t[i] = e, a.mul(e, r)), a.ONE), i = a.inv(r), e.reduceRight((e, r, i) => a.is0(r) ? e : (t[i] = a.mul(e, t[i]), a.mul(e, r)), i), t
            },
            cmov: (e, t, r) => r ? t : e,
            toBytes: e => r ? G(e, o) : H(e, o),
            fromBytes: e => {
                if (e.length !== o) throw Error("Field.fromBytes: expected " + o + " bytes, got " + e.length);
                return r ? W(e) : z(V(e))
            }
        });
        return Object.freeze(a)
    }
    let ef = BigInt(0),
        em = BigInt(1);

    function ey(e, t) {
        let r = t.negate();
        return e ? r : t
    }

    function ew(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t) throw Error("invalid window size, expected [1.." + t + "], got W=" + e)
    }

    function eb(e, t) {
        return ew(e, t), {
            windows: Math.ceil(t / e) + 1,
            windowSize: 2 ** (e - 1)
        }
    }
    let ev = new WeakMap,
        eE = new WeakMap;

    function eI(e) {
        return eE.get(e) || 1
    }
    let eC = BigInt(0),
        eS = BigInt(1),
        ex = BigInt(2),
        eA = BigInt(8),
        eN = {
            zip215: !0
        };
    BigInt(0), BigInt(1);
    let e_ = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
        eT = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
    BigInt(0);
    let ek = BigInt(1),
        eP = BigInt(2);
    BigInt(3);
    let eO = BigInt(5),
        eR = BigInt(8),
        eU = eg(e_, void 0, !0),
        eD = function(e) {
            var t;
            let r, i = (ee(e.Fp, eu.reduce((e, t) => (e[t] = "function", e), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger"
                })), ee(e, {
                    n: "bigint",
                    h: "bigint",
                    Gx: "field",
                    Gy: "field"
                }, {
                    nBitLength: "isSafeInteger",
                    nByteLength: "isSafeInteger"
                }), r = Object.freeze({ ...ep(e.n, e.nBitLength),
                    ...e,
                    p: e.Fp.ORDER
                }), ee(e, {
                    hash: "function",
                    a: "bigint",
                    d: "bigint",
                    randomBytes: "function"
                }, {
                    adjustScalarBytes: "function",
                    domain: "function",
                    uvRatio: "function",
                    mapToCurve: "function"
                }), Object.freeze({ ...r
                })),
                {
                    Fp: s,
                    n: n,
                    prehash: o,
                    hash: a,
                    randomBytes: c,
                    nByteLength: l,
                    h: h
                } = i,
                d = ex << BigInt(8 * l) - eS,
                u = s.create,
                p = eg(i.n, i.nBitLength),
                g = i.uvRatio || ((e, t) => {
                    try {
                        return {
                            isValid: !0,
                            value: s.sqrt(e * s.inv(t))
                        }
                    } catch {
                        return {
                            isValid: !1,
                            value: eC
                        }
                    }
                }),
                f = i.adjustScalarBytes || (e => e),
                m = i.domain || ((e, t, r) => {
                    if (j("phflag", r), t.length || r) throw Error("Contexts/pre-hash are not supported");
                    return e
                });

            function y(e, t) {
                Q("coordinate " + e, t, eC, d)
            }

            function w(e) {
                if (!(e instanceof E)) throw Error("ExtendedPoint expected")
            }
            let b = et((e, t) => {
                    let {
                        ex: r,
                        ey: i,
                        ez: n
                    } = e, o = e.is0();
                    null == t && (t = o ? eA : s.inv(n));
                    let a = u(r * t),
                        c = u(i * t),
                        l = u(n * t);
                    if (o) return {
                        x: eC,
                        y: eS
                    };
                    if (l !== eS) throw Error("invZ was invalid");
                    return {
                        x: a,
                        y: c
                    }
                }),
                v = et(e => {
                    let {
                        a: t,
                        d: r
                    } = i;
                    if (e.is0()) throw Error("bad point: ZERO");
                    let {
                        ex: s,
                        ey: n,
                        ez: o,
                        et: a
                    } = e, c = u(s * s), l = u(n * n), h = u(o * o), d = u(h * h), p = u(c * t);
                    if (u(h * u(p + l)) !== u(d + u(r * u(c * l)))) throw Error("bad point: equation left != right (1)");
                    if (u(s * n) !== u(o * a)) throw Error("bad point: equation left != right (2)");
                    return !0
                });
            class E {
                constructor(e, t, r, i) {
                    this.ex = e, this.ey = t, this.ez = r, this.et = i, y("x", e), y("y", t), y("z", r), y("t", i), Object.freeze(this)
                }
                get x() {
                    return this.toAffine().x
                }
                get y() {
                    return this.toAffine().y
                }
                static fromAffine(e) {
                    if (e instanceof E) throw Error("extended point not allowed");
                    let {
                        x: t,
                        y: r
                    } = e || {};
                    return y("x", t), y("y", r), new E(t, r, eS, u(t * r))
                }
                static normalizeZ(e) {
                    let t = s.invertBatch(e.map(e => e.ez));
                    return e.map((e, r) => e.toAffine(t[r])).map(E.fromAffine)
                }
                static msm(e, t) {
                    return function(e, t, r, i) {
                        if (function(e, t) {
                                if (!Array.isArray(e)) throw Error("array expected");
                                e.forEach((e, r) => {
                                    if (!(e instanceof t)) throw Error("invalid point at index " + r)
                                })
                            }(r, e), function(e, t) {
                                if (!Array.isArray(e)) throw Error("array of scalars expected");
                                e.forEach((e, r) => {
                                    if (!t.isValid(e)) throw Error("invalid scalar at index " + r)
                                })
                            }(i, t), r.length !== i.length) throw Error("arrays of points and scalars must have equal length");
                        let s = e.ZERO,
                            n = function(e) {
                                let t;
                                for (t = 0; e > D; e >>= L, t += 1);
                                return t
                            }(BigInt(r.length)),
                            o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                            a = (1 << o) - 1,
                            c = Array(a + 1).fill(s),
                            l = Math.floor((t.BITS - 1) / o) * o,
                            h = s;
                        for (let e = l; e >= 0; e -= o) {
                            c.fill(s);
                            for (let t = 0; t < i.length; t++) {
                                let s = Number(i[t] >> BigInt(e) & BigInt(a));
                                c[s] = c[s].add(r[t])
                            }
                            let t = s;
                            for (let e = c.length - 1, r = s; e > 0; e--) r = r.add(c[e]), t = t.add(r);
                            if (h = h.add(t), 0 !== e)
                                for (let e = 0; e < o; e++) h = h.double()
                        }
                        return h
                    }(E, p, e, t)
                }
                _setWindowSize(e) {
                    S.setWindowSize(this, e)
                }
                assertValidity() {
                    v(this)
                }
                equals(e) {
                    w(e);
                    let {
                        ex: t,
                        ey: r,
                        ez: i
                    } = this, {
                        ex: s,
                        ey: n,
                        ez: o
                    } = e, a = u(t * o), c = u(s * i), l = u(r * o), h = u(n * i);
                    return a === c && l === h
                }
                is0() {
                    return this.equals(E.ZERO)
                }
                negate() {
                    return new E(u(-this.ex), this.ey, this.ez, u(-this.et))
                }
                double() {
                    let {
                        a: e
                    } = i, {
                        ex: t,
                        ey: r,
                        ez: s
                    } = this, n = u(t * t), o = u(r * r), a = u(ex * u(s * s)), c = u(e * n), l = t + r, h = u(u(l * l) - n - o), d = c + o, p = d - a, g = c - o, f = u(h * p), m = u(d * g), y = u(h * g);
                    return new E(f, m, u(p * d), y)
                }
                add(e) {
                    w(e);
                    let {
                        a: t,
                        d: r
                    } = i, {
                        ex: s,
                        ey: n,
                        ez: o,
                        et: a
                    } = this, {
                        ex: c,
                        ey: l,
                        ez: h,
                        et: d
                    } = e;
                    if (t === BigInt(-1)) {
                        let e = u((n - s) * (l + c)),
                            t = u((n + s) * (l - c)),
                            r = u(t - e);
                        if (r === eC) return this.double();
                        let i = u(o * ex * d),
                            p = u(a * ex * h),
                            g = p + i,
                            f = t + e,
                            m = p - i,
                            y = u(g * r),
                            w = u(f * m),
                            b = u(g * m);
                        return new E(y, w, u(r * f), b)
                    }
                    let p = u(s * c),
                        g = u(n * l),
                        f = u(a * r * d),
                        m = u(o * h),
                        y = u((s + n) * (c + l) - p - g),
                        b = m - f,
                        v = m + f,
                        I = u(g - t * p),
                        C = u(y * b),
                        S = u(v * I),
                        x = u(y * I);
                    return new E(C, S, u(b * v), x)
                }
                subtract(e) {
                    return this.add(e.negate())
                }
                wNAF(e) {
                    return S.wNAFCached(this, e, E.normalizeZ)
                }
                multiply(e) {
                    Q("scalar", e, eS, n);
                    let {
                        p: t,
                        f: r
                    } = this.wNAF(e);
                    return E.normalizeZ([t, r])[0]
                }
                multiplyUnsafe(e, t = E.ZERO) {
                    return Q("scalar", e, eC, n), e === eC ? C : this.is0() || e === eS ? this : S.wNAFCachedUnsafe(this, e, E.normalizeZ, t)
                }
                isSmallOrder() {
                    return this.multiplyUnsafe(h).is0()
                }
                isTorsionFree() {
                    return S.unsafeLadder(this, n).is0()
                }
                toAffine(e) {
                    return b(this, e)
                }
                clearCofactor() {
                    let {
                        h: e
                    } = i;
                    return e === eS ? this : this.multiplyUnsafe(e)
                }
                static fromHex(e, t = !1) {
                    let {
                        d: r,
                        a: n
                    } = i, o = s.BYTES;
                    e = J("pointHex", e, o), j("zip215", t);
                    let a = e.slice(),
                        c = e[o - 1];
                    a[o - 1] = -129 & c;
                    let l = W(a);
                    Q("pointHex.y", l, eC, t ? d : s.ORDER);
                    let h = u(l * l),
                        {
                            isValid: p,
                            value: f
                        } = g(u(h - eS), u(r * h - n));
                    if (!p) throw Error("Point.fromHex: invalid y coordinate");
                    let m = (f & eS) === eS,
                        y = (128 & c) != 0;
                    if (!t && f === eC && y) throw Error("Point.fromHex: x=0 and x_0=1");
                    return y !== m && (f = u(-f)), E.fromAffine({
                        x: f,
                        y: l
                    })
                }
                static fromPrivateKey(e) {
                    return x(e).point
                }
                toRawBytes() {
                    let {
                        x: e,
                        y: t
                    } = this.toAffine(), r = G(t, s.BYTES);
                    return r[r.length - 1] |= e & eS ? 128 : 0, r
                }
                toHex() {
                    return V(this.toRawBytes())
                }
            }
            E.BASE = new E(i.Gx, i.Gy, eS, u(i.Gx * i.Gy)), E.ZERO = new E(eC, eS, eS, eC);
            let {
                BASE: I,
                ZERO: C
            } = E, S = (t = 8 * l, {
                constTimeNegate: ey,
                hasPrecomputes: e => 1 !== eI(e),
                unsafeLadder(e, t, r = E.ZERO) {
                    let i = e;
                    for (; t > ef;) t & em && (r = r.add(i)), i = i.double(), t >>= em;
                    return r
                },
                precomputeWindow(e, r) {
                    let {
                        windows: i,
                        windowSize: s
                    } = eb(r, t), n = [], o = e, a = o;
                    for (let e = 0; e < i; e++) {
                        a = o, n.push(a);
                        for (let e = 1; e < s; e++) a = a.add(o), n.push(a);
                        o = a.double()
                    }
                    return n
                },
                wNAF(e, r, i) {
                    let {
                        windows: s,
                        windowSize: n
                    } = eb(e, t), o = E.ZERO, a = E.BASE, c = BigInt(2 ** e - 1), l = 2 ** e, h = BigInt(e);
                    for (let e = 0; e < s; e++) {
                        let t = e * n,
                            s = Number(i & c);
                        i >>= h, s > n && (s -= l, i += em);
                        let d = t + Math.abs(s) - 1,
                            u = e % 2 != 0,
                            p = s < 0;
                        0 === s ? a = a.add(ey(u, r[t])) : o = o.add(ey(p, r[d]))
                    }
                    return {
                        p: o,
                        f: a
                    }
                },
                wNAFUnsafe(e, r, i, s = E.ZERO) {
                    let {
                        windows: n,
                        windowSize: o
                    } = eb(e, t), a = BigInt(2 ** e - 1), c = 2 ** e, l = BigInt(e);
                    for (let e = 0; e < n; e++) {
                        let t = e * o;
                        if (i === ef) break;
                        let n = Number(i & a);
                        if (i >>= l, n > o && (n -= c, i += em), 0 === n) continue;
                        let h = r[t + Math.abs(n) - 1];
                        n < 0 && (h = h.negate()), s = s.add(h)
                    }
                    return s
                },
                getPrecomputes(e, t, r) {
                    let i = ev.get(t);
                    return i || (i = this.precomputeWindow(t, e), 1 !== e && ev.set(t, r(i))), i
                },
                wNAFCached(e, t, r) {
                    let i = eI(e);
                    return this.wNAF(i, this.getPrecomputes(i, e, r), t)
                },
                wNAFCachedUnsafe(e, t, r, i) {
                    let s = eI(e);
                    return 1 === s ? this.unsafeLadder(e, t, i) : this.wNAFUnsafe(s, this.getPrecomputes(s, e, r), t, i)
                },
                setWindowSize(e, r) {
                    ew(r, t), eE.set(e, r), ev.delete(e)
                }
            });

            function x(e) {
                let t = s.BYTES;
                e = J("private key", e, t);
                let r = J("hashed private key", a(e), 2 * t),
                    i = f(r.slice(0, t)),
                    o = r.slice(t, 2 * t),
                    c = el(W(i), n),
                    l = I.multiply(c),
                    h = l.toRawBytes();
                return {
                    head: i,
                    prefix: o,
                    scalar: c,
                    point: l,
                    pointBytes: h
                }
            }

            function A(e = new Uint8Array, ...t) {
                return el(W(a(m(Y(...t), J("context", e), !!o))), n)
            }
            return I._setWindowSize(8), {
                CURVE: i,
                getPublicKey: function(e) {
                    return x(e).pointBytes
                },
                sign: function(e, t, r = {}) {
                    e = J("message", e), o && (e = o(e));
                    let {
                        prefix: i,
                        scalar: a,
                        pointBytes: c
                    } = x(t), l = A(r.context, i, e), h = I.multiply(l).toRawBytes(), d = el(l + A(r.context, h, c, e) * a, n);
                    return Q("signature.s", d, eC, n), J("result", Y(h, G(d, s.BYTES)), 2 * s.BYTES)
                },
                verify: function(e, t, r, i = eN) {
                    let n, a, c, {
                            context: l,
                            zip215: h
                        } = i,
                        d = s.BYTES;
                    e = J("signature", e, 2 * d), t = J("message", t), r = J("publicKey", r, d), void 0 !== h && j("zip215", h), o && (t = o(t));
                    let u = W(e.slice(d, 2 * d));
                    try {
                        n = E.fromHex(r, h), a = E.fromHex(e.slice(0, d), h), c = I.multiplyUnsafe(u)
                    } catch {
                        return !1
                    }
                    if (!h && n.isSmallOrder()) return !1;
                    let p = A(l, a.toRawBytes(), n.toRawBytes(), t);
                    return a.add(n.multiplyUnsafe(p)).subtract(c).clearCofactor().equals(E.ZERO)
                },
                ExtendedPoint: E,
                utils: {
                    getExtendedPublicKey: x,
                    randomPrivateKey: () => c(s.BYTES),
                    precompute: (e = 8, t = E.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t)
                }
            }
        }({
            a: BigInt(-1),
            d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
            Fp: eU,
            n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
            h: eR,
            Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
            Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
            hash: U,
            randomBytes: u,
            adjustScalarBytes: function(e) {
                return e[0] &= 248, e[31] &= 127, e[31] |= 64, e
            },
            uvRatio: function(e, t) {
                var r;
                let i, s, n, o, a, c, l, h, d, u, p, g, f, m, y = el(t * t * t, e_),
                    w = (r = e * el(y * y * t, e_), i = BigInt(10), s = BigInt(20), n = BigInt(40), o = BigInt(80), c = eh(a = r * r % e_ * r % e_, eP, e_) * a % e_, l = eh(c, ek, e_) * r % e_, h = eh(l, eO, e_) * l % e_, d = eh(h, i, e_) * h % e_, u = eh(d, s, e_) * d % e_, p = eh(u, n, e_) * u % e_, g = eh(p, o, e_) * p % e_, f = eh(g, o, e_) * p % e_, m = eh(f, i, e_) * h % e_, {
                        pow_p_5_8: eh(m, eP, e_) * r % e_,
                        b2: a
                    }).pow_p_5_8,
                    b = el(e * y * w, e_),
                    v = el(t * b * b, e_),
                    E = b,
                    I = el(b * eT, e_),
                    C = v === e,
                    S = v === el(-e, e_),
                    x = v === el(-e * eT, e_);
                return C && (b = E), (S || x) && (b = I), (el(b, e_) & ei) === ei && (b = el(-b, e_)), {
                    isValid: C || S,
                    value: b
                }
            }
        }),
        eL = "base64url",
        eM = "utf8",
        eB = "utf8",
        eq = "base58btc";

    function ej(e) {
        return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
    }

    function e$(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? ej(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
    }

    function eV(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = e$(t),
            i = 0;
        for (let t of e) r.set(t, i), i += t.length;
        return ej(r)
    }
    var ez = function(e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
            var n = e.charAt(s),
                o = n.charCodeAt(0);
            if (255 !== r[o]) throw TypeError(n + " is ambiguous");
            r[o] = s
        }
        var a = e.length,
            c = e.charAt(0),
            l = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);

        function d(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array;
            var t = 0;
            if (" " !== e[0]) {
                for (var i = 0, s = 0; e[t] === c;) i++, t++;
                for (var n = (e.length - t) * l + 1 >>> 0, o = new Uint8Array(n); e[t];) {
                    var h = r[e.charCodeAt(t)];
                    if (255 === h) return;
                    for (var d = 0, u = n - 1;
                        (0 !== h || d < s) && -1 !== u; u--, d++) h += a * o[u] >>> 0, o[u] = h % 256 >>> 0, h = h / 256 >>> 0;
                    if (0 !== h) throw Error("Non-zero carry");
                    s = d, t++
                }
                if (" " !== e[t]) {
                    for (var p = n - s; p !== n && 0 === o[p];) p++;
                    for (var g = new Uint8Array(i + (n - p)), f = i; p !== n;) g[f++] = o[p++];
                    return g
                }
            }
        }
        return {
            encode: function(t) {
                if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                if (0 === t.length) return "";
                for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s];) s++, r++;
                for (var o = (n - s) * h + 1 >>> 0, l = new Uint8Array(o); s !== n;) {
                    for (var d = t[s], u = 0, p = o - 1;
                        (0 !== d || u < i) && -1 !== p; p--, u++) d += 256 * l[p] >>> 0, l[p] = d % a >>> 0, d = d / a >>> 0;
                    if (0 !== d) throw Error("Non-zero carry");
                    i = u, s++
                }
                for (var g = o - i; g !== o && 0 === l[g];) g++;
                for (var f = c.repeat(r); g < o; ++g) f += e.charAt(l[g]);
                return f
            },
            decodeUnsafe: d,
            decode: function(e) {
                var r = d(e);
                if (r) return r;
                throw Error(`Non-${t} character`)
            }
        }
    };
    let eF = e => {
        if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw Error("Unknown type, must be binary type")
    };
    class eK {
        constructor(e, t, r) {
            this.name = e, this.prefix = t, this.baseEncode = r
        }
        encode(e) {
            if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
            throw Error("Unknown type, must be binary type")
        }
    }
    class eW {
        constructor(e, t, r) {
            if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
            this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
        }
        decode(e) {
            if ("string" == typeof e) {
                if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                return this.baseDecode(e.slice(this.prefix.length))
            }
            throw Error("Can only multibase decode strings")
        }
        or(e) {
            return eG(this, e)
        }
    }
    class eH {
        constructor(e) {
            this.decoders = e
        }
        or(e) {
            return eG(this, e)
        }
        decode(e) {
            let t = e[0],
                r = this.decoders[t];
            if (r) return r.decode(e);
            throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
        }
    }
    let eG = (e, t) => new eH({ ...e.decoders || {
            [e.prefix]: e
        },
        ...t.decoders || {
            [t.prefix]: t
        }
    });
    class eJ {
        constructor(e, t, r, i) {
            this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new eK(e, t, r), this.decoder = new eW(e, t, i)
        }
        encode(e) {
            return this.encoder.encode(e)
        }
        decode(e) {
            return this.decoder.decode(e)
        }
    }
    let eY = ({
            name: e,
            prefix: t,
            encode: r,
            decode: i
        }) => new eJ(e, t, r, i),
        eX = ({
            prefix: e,
            name: t,
            alphabet: r
        }) => {
            let {
                encode: i,
                decode: s
            } = ez(r, t);
            return eY({
                prefix: e,
                name: t,
                encode: i,
                decode: e => eF(s(e))
            })
        },
        eQ = ({
            name: e,
            prefix: t,
            bitsPerChar: r,
            alphabet: i
        }) => eY({
            prefix: t,
            name: e,
            encode: e => ((e, t, r) => {
                let i = "=" === t[t.length - 1],
                    s = (1 << r) - 1,
                    n = "",
                    o = 0,
                    a = 0;
                for (let i = 0; i < e.length; ++i)
                    for (a = a << 8 | e[i], o += 8; o > r;) o -= r, n += t[s & a >> o];
                if (o && (n += t[s & a << r - o]), i)
                    for (; n.length * r & 7;) n += "=";
                return n
            })(e, i, r),
            decode: t => ((e, t, r, i) => {
                let s = {};
                for (let e = 0; e < t.length; ++e) s[t[e]] = e;
                let n = e.length;
                for (;
                    "=" === e[n - 1];) --n;
                let o = new Uint8Array(n * r / 8 | 0),
                    a = 0,
                    c = 0,
                    l = 0;
                for (let t = 0; t < n; ++t) {
                    let n = s[e[t]];
                    if (void 0 === n) throw SyntaxError(`Non-${i} character`);
                    c = c << r | n, (a += r) >= 8 && (a -= 8, o[l++] = 255 & c >> a)
                }
                if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                return o
            })(t, i, r, e)
        });
    var eZ = Object.freeze({
            __proto__: null,
            identity: eY({
                prefix: "\0",
                name: "identity",
                encode: e => new TextDecoder().decode(e),
                decode: e => new TextEncoder().encode(e)
            })
        }),
        e0 = Object.freeze({
            __proto__: null,
            base2: eQ({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            })
        }),
        e1 = Object.freeze({
            __proto__: null,
            base8: eQ({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            })
        }),
        e2 = Object.freeze({
            __proto__: null,
            base10: eX({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            })
        }),
        e5 = Object.freeze({
            __proto__: null,
            base16: eQ({
                prefix: "f",
                name: "base16",
                alphabet: "0123456789abcdef",
                bitsPerChar: 4
            }),
            base16upper: eQ({
                prefix: "F",
                name: "base16upper",
                alphabet: "0123456789ABCDEF",
                bitsPerChar: 4
            })
        }),
        e3 = Object.freeze({
            __proto__: null,
            base32: eQ({
                prefix: "b",
                name: "base32",
                alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                bitsPerChar: 5
            }),
            base32upper: eQ({
                prefix: "B",
                name: "base32upper",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                bitsPerChar: 5
            }),
            base32pad: eQ({
                prefix: "c",
                name: "base32pad",
                alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                bitsPerChar: 5
            }),
            base32padupper: eQ({
                prefix: "C",
                name: "base32padupper",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                bitsPerChar: 5
            }),
            base32hex: eQ({
                prefix: "v",
                name: "base32hex",
                alphabet: "0123456789abcdefghijklmnopqrstuv",
                bitsPerChar: 5
            }),
            base32hexupper: eQ({
                prefix: "V",
                name: "base32hexupper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                bitsPerChar: 5
            }),
            base32hexpad: eQ({
                prefix: "t",
                name: "base32hexpad",
                alphabet: "0123456789abcdefghijklmnopqrstuv=",
                bitsPerChar: 5
            }),
            base32hexpadupper: eQ({
                prefix: "T",
                name: "base32hexpadupper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                bitsPerChar: 5
            }),
            base32z: eQ({
                prefix: "h",
                name: "base32z",
                alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                bitsPerChar: 5
            })
        }),
        e8 = Object.freeze({
            __proto__: null,
            base36: eX({
                prefix: "k",
                name: "base36",
                alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
            }),
            base36upper: eX({
                prefix: "K",
                name: "base36upper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            })
        }),
        e6 = Object.freeze({
            __proto__: null,
            base58btc: eX({
                name: "base58btc",
                prefix: "z",
                alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
            }),
            base58flickr: eX({
                name: "base58flickr",
                prefix: "Z",
                alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
            })
        }),
        e4 = Object.freeze({
            __proto__: null,
            base64: eQ({
                prefix: "m",
                name: "base64",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                bitsPerChar: 6
            }),
            base64pad: eQ({
                prefix: "M",
                name: "base64pad",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                bitsPerChar: 6
            }),
            base64url: eQ({
                prefix: "u",
                name: "base64url",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                bitsPerChar: 6
            }),
            base64urlpad: eQ({
                prefix: "U",
                name: "base64urlpad",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                bitsPerChar: 6
            })
        });
    let e9 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
        e7 = e9.reduce((e, t, r) => (e[r] = t, e), []),
        te = e9.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
    var tt = Object.freeze({
        __proto__: null,
        base256emoji: eY({
            prefix: "🚀",
            name: "base256emoji",
            encode: function(e) {
                return e.reduce((e, t) => e += e7[t], "")
            },
            decode: function(e) {
                let t = [];
                for (let r of e) {
                    let e = te[r.codePointAt(0)];
                    if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                    t.push(e)
                }
                return new Uint8Array(t)
            }
        })
    });

    function tr(e, t, r) {
        t = t || [], r = r || 0;
        for (var i = r; e >= 0x80000000;) t[r++] = 255 & e | 128, e /= 128;
        for (; - 128 & e;) t[r++] = 255 & e | 128, e >>>= 7;
        return t[r] = 0 | e, tr.bytes = r - i + 1, t
    }
    var ti = function(e) {
        return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 0x10000000 ? 4 : e < 0x800000000 ? 5 : e < 0x40000000000 ? 6 : e < 0x2000000000000 ? 7 : e < 0x100000000000000 ? 8 : e < 0x8000000000000000 ? 9 : 10
    };
    let ts = (e, t, r = 0) => (tr(e, t, r), t),
        tn = (e, t) => {
            let r = t.byteLength,
                i = ti(e),
                s = i + ti(r),
                n = new Uint8Array(s + r);
            return ts(e, n, 0), ts(r, n, i), n.set(t, s), new to(e, r, t, n)
        };
    class to {
        constructor(e, t, r, i) {
            this.code = e, this.size = t, this.digest = r, this.bytes = i
        }
    }
    let ta = ({
        name: e,
        code: t,
        encode: r
    }) => new tc(e, t, r);
    class tc {
        constructor(e, t, r) {
            this.name = e, this.code = t, this.encode = r
        }
        digest(e) {
            if (e instanceof Uint8Array) {
                let t = this.encode(e);
                return t instanceof Uint8Array ? tn(this.code, t) : t.then(e => tn(this.code, e))
            }
            throw Error("Unknown type, must be binary type")
        }
    }
    let tl = e => async t => new Uint8Array(await crypto.subtle.digest(e, t));
    var th = Object.freeze({
            __proto__: null,
            sha256: ta({
                name: "sha2-256",
                code: 18,
                encode: tl("SHA-256")
            }),
            sha512: ta({
                name: "sha2-512",
                code: 19,
                encode: tl("SHA-512")
            })
        }),
        td = Object.freeze({
            __proto__: null,
            identity: {
                code: 0,
                name: "identity",
                encode: eF,
                digest: e => tn(0, eF(e))
            }
        });
    new TextEncoder, new TextDecoder;
    let tu = { ...eZ,
        ...e0,
        ...e1,
        ...e2,
        ...e5,
        ...e3,
        ...e8,
        ...e6,
        ...e4,
        ...tt
    };

    function tp(e, t, r, i) {
        return {
            name: e,
            prefix: t,
            encoder: {
                name: e,
                prefix: t,
                encode: r
            },
            decoder: {
                decode: i
            }
        }
    }({ ...th,
        ...td
    });
    let tg = tp("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
        tf = tp("ascii", "a", e => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t
        }, e => {
            let t = e$((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t
        }),
        tm = {
            utf8: tg,
            "utf-8": tg,
            hex: tu.base16,
            latin1: tf,
            ascii: tf,
            binary: tf,
            ...tu
        };

    function ty(e, t = "utf8") {
        let r = tm[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1)
    }

    function tw(e, t = "utf8") {
        let r = tm[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? ej(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
    }

    function tb(e) {
        return (0, n.safeJsonParse)(ty(tw(e, eL), eM))
    }

    function tv(e) {
        return ty(tw((0, n.safeJsonStringify)(e), eM), eL)
    }

    function tE(e) {
        return ["did:key", "z" + ty(eV([tw("K36", eq), e]), eq)].join(":")
    }
    async function tI(e, t, r, i, n = (0, s.fromMiliseconds)(Date.now())) {
        let o = {
                alg: "EdDSA",
                typ: "JWT"
            },
            a = {
                iss: tE(i.publicKey),
                sub: e,
                aud: t,
                iat: n,
                exp: n + r
            },
            c = tw([tv((l = {
                header: o,
                payload: a
            }).header), tv(l.payload)].join("."), eB);
        var l, h = {
            header: o,
            payload: a,
            signature: eD.sign(c, i.secretKey.slice(0, 32))
        };
        return [tv(h.header), tv(h.payload), ty(h.signature, eL)].join(".")
    }
    e.s(["decodeJWT", 0, function(e) {
        let t = e.split(".");
        return {
            header: tb(t[0]),
            payload: tb(t[1]),
            signature: tw(t[2], eL),
            data: tw(t.slice(0, 2).join("."), eB)
        }
    }, "encodeIss", 0, tE, "generateKeyPair", 0, function(e = u(32)) {
        let t = eD.getPublicKey(e);
        return {
            secretKey: eV([e, t]),
            publicKey: t
        }
    }, "signJWT", 0, tI])
}, 70119, (e, t, r) => {
    "use strict";
    t.exports = function() {
        throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
}, 697400, e => {
    "use strict";
    var t = e.i(679753),
        r = e.i(712314);
    e.i(191105);
    var i = e.i(230886),
        s = e.i(470774),
        n = e.i(948031),
        o = e.i(586991);
    let a = e => e.split("?")[0],
        c = "u" > typeof WebSocket ? WebSocket : "u" > typeof e.g.WebSocket ? e.g.WebSocket : "u" > typeof window && "u" > typeof window.WebSocket ? window.WebSocket : "u" > typeof self && "u" > typeof self.WebSocket ? self.WebSocket : e.r(70119);
    e.s(["default", 0, class {
        constructor(e) {
            if (this.url = e, this.events = new t.EventEmitter, this.registering = !1, !(0, i.isWsUrl)(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
            this.url = e
        }
        get connected() {
            return "u" > typeof this.socket
        }
        get connecting() {
            return this.registering
        }
        on(e, t) {
            this.events.on(e, t)
        }
        once(e, t) {
            this.events.once(e, t)
        }
        off(e, t) {
            this.events.off(e, t)
        }
        removeListener(e, t) {
            this.events.removeListener(e, t)
        }
        async open(e = this.url) {
            await this.register(e)
        }
        async close() {
            return new Promise((e, t) => {
                typeof this.socket > "u" ? t(Error("Connection already closed")) : (this.socket.onclose = t => {
                    this.onClose(t), e()
                }, this.socket.close())
            })
        }
        async send(e) {
            typeof this.socket > "u" && (this.socket = await this.register());
            try {
                this.socket.send((0, r.safeJsonStringify)(e))
            } catch (t) {
                this.onError(e.id, t)
            }
        }
        register(t = this.url) {
            if (!(0, i.isWsUrl)(t)) throw Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
            if (this.registering) {
                let e = this.events.getMaxListeners();
                return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                    this.events.once("register_error", e => {
                        this.resetMaxListeners(), t(e)
                    }), this.events.once("open", () => {
                        if (this.resetMaxListeners(), typeof this.socket > "u") return t(Error("WebSocket connection is missing or invalid"));
                        e(this.socket)
                    })
                })
            }
            return this.url = t, this.registering = !0, new Promise((r, n) => {
                let o = (0, s.isReactNative)() ? void 0 : {
                        rejectUnauthorized: !(0, i.isLocalhostUrl)(t)
                    },
                    a = new c(t, [], o);
                "u" > typeof WebSocket || "u" > typeof e.g.WebSocket || "u" > typeof window && "u" > typeof window.WebSocket || "u" > typeof self && "u" > typeof self.WebSocket ? a.onerror = e => {
                    n(this.emitError(e.error))
                } : a.on("error", e => {
                    n(this.emitError(e))
                }), a.onopen = () => {
                    this.onOpen(a), r(a)
                }
            })
        }
        onOpen(e) {
            e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
        }
        onClose(e) {
            this.socket = void 0, this.registering = !1, this.events.emit("close", e)
        }
        onPayload(e) {
            if (typeof e.data > "u") return;
            let t = "string" == typeof e.data ? (0, r.safeJsonParse)(e.data) : e.data;
            this.events.emit("payload", t)
        }
        onError(e, t) {
            let r = this.parseError(t),
                i = r.message || r.toString(),
                s = (0, n.formatJsonRpcError)(e, i);
            this.events.emit("payload", s)
        }
        parseError(e, t = this.url) {
            return (0, o.parseConnectionError)(e, a(t), "WS")
        }
        resetMaxListeners() {
            this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
        }
        emitError(e) {
            let t = this.parseError(Error(e ? .message || `WebSocket connection failed for host: ${a(this.url)}`));
            return this.events.emit("register_error", t), t
        }
    }])
}, 934522, e => {
    "use strict";
    Symbol();
    let t = Symbol(),
        r = Object.getPrototypeOf,
        i = new WeakMap,
        s = e => {
            let s;
            return (s = e) && (i.has(s) ? i.get(s) : r(s) === Object.prototype || r(s) === Array.prototype) && e[t] || null
        },
        n = (e, t = !0) => {
            i.set(e, t)
        },
        o = {
            get url() {
                return `file://${e.P("node_modules/@reown/appkit-controllers/node_modules/valtio/esm/vanilla.mjs")}`
            }
        },
        a = e => "object" == typeof e && null !== e,
        c = new WeakMap,
        l = new WeakSet,
        h = (e = Object.is, t = (e, t) => new Proxy(e, t), r = e => a(e) && !l.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer), i = e => {
            switch (e.status) {
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw e.reason;
                default:
                    throw e
            }
        }, h = new WeakMap, d = (e, t, r = i) => {
            let s = h.get(e);
            if ((null == s ? void 0 : s[0]) === t) return s[1];
            let o = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
            return n(o, !0), h.set(e, [t, o]), Reflect.ownKeys(e).forEach(t => {
                if (Object.getOwnPropertyDescriptor(o, t)) return;
                let i = Reflect.get(e, t),
                    {
                        enumerable: s
                    } = Reflect.getOwnPropertyDescriptor(e, t),
                    a = {
                        value: i,
                        enumerable: s,
                        configurable: !0
                    };
                if (l.has(i)) n(i, !1);
                else if (i instanceof Promise) delete a.value, a.get = () => r(i);
                else if (c.has(i)) {
                    let [e, t] = c.get(i);
                    a.value = d(e, t(), r)
                }
                Object.defineProperty(o, t, a)
            }), Object.preventExtensions(o)
        }, u = new WeakMap, p = [1, 1], g = i => {
            if (!a(i)) throw Error("object required");
            let n = u.get(i);
            if (n) return n;
            let h = p[0],
                f = new Set,
                m = (e, t = ++p[0]) => {
                    h !== t && (h = t, f.forEach(r => r(e, t)))
                },
                y = p[1],
                w = (e = ++p[1]) => (y === e || f.size || (y = e, v.forEach(([t]) => {
                    let r = t[1](e);
                    r > h && (h = r)
                })), h),
                b = e => (t, r) => {
                    let i = [...t];
                    i[1] = [e, ...i[1]], m(i, r)
                },
                v = new Map,
                E = (e, t) => {
                    if ((o.env ? o.env.MODE : void 0) !== "production" && v.has(e)) throw Error("prop listener already exists");
                    if (f.size) {
                        let r = t[3](b(e));
                        v.set(e, [t, r])
                    } else v.set(e, [t])
                },
                I = e => {
                    var t;
                    let r = v.get(e);
                    r && (v.delete(e), null == (t = r[1]) || t.call(r))
                },
                C = e => {
                    f.add(e), 1 === f.size && v.forEach(([e, t], r) => {
                        if ((o.env ? o.env.MODE : void 0) !== "production" && t) throw Error("remove already exists");
                        let i = e[3](b(r));
                        v.set(r, [e, i])
                    });
                    let t = () => {
                        f.delete(e), 0 === f.size && v.forEach(([e, t], r) => {
                            t && (t(), v.set(r, [e]))
                        })
                    };
                    return t
                },
                S = Array.isArray(i) ? [] : Object.create(Object.getPrototypeOf(i)),
                x = {
                    deleteProperty(e, t) {
                        let r = Reflect.get(e, t);
                        I(t);
                        let i = Reflect.deleteProperty(e, t);
                        return i && m(["delete", [t], r]), i
                    },
                    set(t, i, n, o) {
                        let h = Reflect.has(t, i),
                            d = Reflect.get(t, i, o);
                        if (h && (e(d, n) || u.has(n) && e(d, u.get(n)))) return !0;
                        I(i), a(n) && (n = s(n) || n);
                        let p = n;
                        if (n instanceof Promise) n.then(e => {
                            n.status = "fulfilled", n.value = e, m(["resolve", [i], e])
                        }).catch(e => {
                            n.status = "rejected", n.reason = e, m(["reject", [i], e])
                        });
                        else {
                            !c.has(n) && r(n) && (p = g(n));
                            let e = !l.has(p) && c.get(p);
                            e && E(i, e)
                        }
                        return Reflect.set(t, i, p, o), m(["set", [i], n, d]), !0
                    }
                },
                A = t(S, x);
            u.set(i, A);
            let N = [S, w, d, C];
            return c.set(A, N), Reflect.ownKeys(i).forEach(e => {
                let t = Object.getOwnPropertyDescriptor(i, e);
                "value" in t && (A[e] = i[e], delete t.value, delete t.writable), Object.defineProperty(S, e, t)
            }), A
        }) => [g, c, l, e, t, r, i, h, d, u, p],
        [d] = h();
    e.s(["proxy", 0, function(e = {}) {
        return d(e)
    }, "ref", 0, function(e) {
        return l.add(e), e
    }, "snapshot", 0, function(e, t) {
        let r = c.get(e);
        (o.env ? o.env.MODE : void 0) === "production" || r || console.warn("Please use proxy object");
        let [i, s, n] = r;
        return n(i, s(), t)
    }, "subscribe", 0, function(e, t, r) {
        let i, s = c.get(e);
        (o.env ? o.env.MODE : void 0) === "production" || s || console.warn("Please use proxy object");
        let n = [],
            a = s[3],
            l = !1,
            h = a(e => {
                (n.push(e), r) ? t(n.splice(0)): i || (i = Promise.resolve().then(() => {
                    i = void 0, l && t(n.splice(0))
                }))
            });
        return l = !0, () => {
            l = !1, h()
        }
    }, "unstable_buildProxyFunction", 0, h], 934522)
}, 409546, e => {
    "use strict";
    var t = e.i(350461);
    let r = (void 0 !== t.default && void 0 !== t.default.env ? t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
        i = {
            FOUR_MINUTES_MS: 24e4,
            TEN_SEC_MS: 1e4,
            FIVE_SEC_MS: 5e3,
            THREE_SEC_MS: 3e3,
            ONE_SEC_MS: 1e3,
            SECURE_SITE: r,
            SECURE_SITE_DASHBOARD: `${r}/dashboard`,
            SECURE_SITE_FAVICON: `${r}/images/favicon.png`,
            RESTRICTED_TIMEZONES: ["ASIA/SHANGHAI", "ASIA/URUMQI", "ASIA/CHONGQING", "ASIA/HARBIN", "ASIA/KASHGAR", "ASIA/MACAU", "ASIA/HONG_KONG", "ASIA/MACAO", "ASIA/BEIJING", "ASIA/HARBIN"],
            WC_COINBASE_PAY_SDK_CHAINS: ["ethereum", "arbitrum", "polygon", "berachain", "avalanche-c-chain", "optimism", "celo", "base"],
            WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: "ethereum",
            WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
                Ethereum: "ethereum",
                "Arbitrum One": "arbitrum",
                Polygon: "polygon",
                Berachain: "berachain",
                Avalanche: "avalanche-c-chain",
                "OP Mainnet": "optimism",
                Celo: "celo",
                Base: "base"
            },
            WC_COINBASE_ONRAMP_APP_ID: "bf18c88d-495a-463b-b249-0b9d3656cf5e",
            SWAP_SUGGESTED_TOKENS: ["ETH", "UNI", "1INCH", "AAVE", "SOL", "ADA", "AVAX", "DOT", "LINK", "NITRO", "GAIA", "MILK", "TRX", "NEAR", "GNO", "WBTC", "DAI", "WETH", "USDC", "USDT", "ARB", "BAL", "BICO", "CRV", "ENS", "MATIC", "OP"],
            SWAP_POPULAR_TOKENS: ["ETH", "UNI", "1INCH", "AAVE", "SOL", "ADA", "AVAX", "DOT", "LINK", "NITRO", "GAIA", "MILK", "TRX", "NEAR", "GNO", "WBTC", "DAI", "WETH", "USDC", "USDT", "ARB", "BAL", "BICO", "CRV", "ENS", "MATIC", "OP", "METAL", "DAI", "CHAMP", "WOLF", "SALE", "BAL", "BUSD", "MUST", "BTCpx", "ROUTE", "HEX", "WELT", "amDAI", "VSQ", "VISION", "AURUM", "pSP", "SNX", "VC", "LINK", "CHP", "amUSDT", "SPHERE", "FOX", "GIDDY", "GFC", "OMEN", "OX_OLD", "DE", "WNT"],
            BALANCE_SUPPORTED_CHAINS: ["eip155", "solana"],
            SWAP_SUPPORTED_NETWORKS: ["eip155:1", "eip155:42161", "eip155:10", "eip155:324", "eip155:8453", "eip155:56", "eip155:137", "eip155:100", "eip155:43114", "eip155:250", "eip155:8217", "eip155:1313161554"],
            NAMES_SUPPORTED_CHAIN_NAMESPACES: ["eip155"],
            ONRAMP_SUPPORTED_CHAIN_NAMESPACES: ["eip155", "solana"],
            ACTIVITY_ENABLED_CHAIN_NAMESPACES: ["eip155", "solana"],
            NATIVE_TOKEN_ADDRESS: {
                eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                solana: "So11111111111111111111111111111111111111111",
                polkadot: "0x",
                bip122: "0x"
            },
            CONVERT_SLIPPAGE_TOLERANCE: 1,
            CONNECT_LABELS: {
                MOBILE: "Open and continue in a new browser tab"
            },
            DEFAULT_FEATURES: {
                swaps: !0,
                onramp: !0,
                receive: !0,
                send: !0,
                email: !0,
                emailShowWallets: !0,
                socials: ["google", "x", "discord", "farcaster", "github", "apple", "facebook"],
                connectorTypeOrder: ["walletConnect", "recent", "injected", "featured", "custom", "external", "recommended"],
                history: !0,
                analytics: !0,
                allWallets: !0,
                legalCheckbox: !1,
                smartSessions: !1,
                collapseWallets: !1,
                walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
                connectMethodsOrder: void 0
            },
            DEFAULT_ACCOUNT_TYPES: {
                bip122: "payment",
                eip155: "smartAccount",
                polkadot: "eoa",
                solana: "eoa"
            },
            ADAPTER_TYPES: {
                UNIVERSAL: "universal",
                SOLANA: "solana",
                WAGMI: "wagmi",
                ETHERS: "ethers",
                ETHERS5: "ethers5",
                BITCOIN: "bitcoin"
            }
        };
    e.s(["ConstantsUtil", 0, i])
}, 970422, e => {
    "use strict";
    e.s(["ConstantsUtil", 0, {
        WC_NAME_SUFFIX: ".reown.id",
        WC_NAME_SUFFIX_LEGACY: ".wcn.id",
        BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
        PULSE_API_URL: "https://pulse.walletconnect.org",
        W3M_API_URL: "https://api.web3modal.org",
        CONNECTOR_ID: {
            WALLET_CONNECT: "walletConnect",
            INJECTED: "injected",
            WALLET_STANDARD: "announced",
            COINBASE: "coinbaseWallet",
            COINBASE_SDK: "coinbaseWalletSDK",
            SAFE: "safe",
            LEDGER: "ledger",
            OKX: "okx",
            EIP6963: "eip6963",
            AUTH: "ID_AUTH"
        },
        CONNECTOR_NAMES: {
            AUTH: "Auth"
        },
        AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
        LIMITS: {
            PENDING_TRANSACTIONS: 99
        },
        CHAIN: {
            EVM: "eip155",
            SOLANA: "solana",
            POLKADOT: "polkadot",
            BITCOIN: "bip122"
        },
        CHAIN_NAME_MAP: {
            eip155: "EVM Networks",
            solana: "Solana",
            polkadot: "Polkadot",
            bip122: "Bitcoin"
        },
        ADAPTER_TYPES: {
            BITCOIN: "bitcoin",
            SOLANA: "solana",
            WAGMI: "wagmi",
            ETHERS: "ethers",
            ETHERS5: "ethers5"
        },
        USDT_CONTRACT_ADDRESSES: ["0xdac17f958d2ee523a2206206994597c13d831ec7", "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7", "0x919C1c267BC06a7039e03fcc2eF738525769109c", "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e", "0x55d398326f99059fF775485246999027B3197955", "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],
        HTTP_STATUS_CODES: {
            SERVICE_UNAVAILABLE: 503,
            FORBIDDEN: 403
        },
        UNSUPPORTED_NETWORK_NAME: "Unknown Network"
    }])
}, 425609, 606285, 609294, 9115, e => {
    "use strict";
    var t = e.i(970422),
        r = e.i(409546);
    let i = {
        WALLET_ID: "@appkit/wallet_id",
        WALLET_NAME: "@appkit/wallet_name",
        SOLANA_WALLET: "@appkit/solana_wallet",
        SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
        ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
        CONNECTED_SOCIAL: "@appkit/connected_social",
        CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
        RECENT_WALLETS: "@appkit/recent_wallets",
        DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
        ACTIVE_NAMESPACE: "@appkit/active_namespace",
        CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
        CONNECTION_STATUS: "@appkit/connection_status",
        SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
        SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
        TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
        NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
        PORTFOLIO_CACHE: "@appkit/portfolio_cache",
        ENS_CACHE: "@appkit/ens_cache",
        IDENTITY_CACHE: "@appkit/identity_cache"
    };

    function s(e) {
        if (!e) throw Error("Namespace is required for CONNECTED_CONNECTOR_ID");
        return `@appkit/${e}:connected_connector_id`
    }
    let n = {
        setItem(e, t) {
            o() && void 0 !== t && localStorage.setItem(e, t)
        },
        getItem(e) {
            if (o()) return localStorage.getItem(e) || void 0
        },
        removeItem(e) {
            o() && localStorage.removeItem(e)
        },
        clear() {
            o() && localStorage.clear()
        }
    };

    function o() {
        return "u" > typeof window && "u" > typeof localStorage
    }
    e.s(["SafeLocalStorage", 0, n, "SafeLocalStorageKeys", 0, i, "getSafeConnectorIdKey", 0, s, "isSafe", 0, o], 606285);
    let a = {
        cacheExpiry: {
            portfolio: 3e4,
            nativeBalance: 3e4,
            ens: 3e5,
            identity: 3e5
        },
        isCacheExpired: (e, t) => Date.now() - e > t,
        getActiveNetworkProps() {
            let e = a.getActiveNamespace(),
                t = a.getActiveCaipNetworkId(),
                r = t ? t.split(":")[1] : void 0;
            return {
                namespace: e,
                caipNetworkId: t,
                chainId: r ? isNaN(Number(r)) ? r : Number(r) : void 0
            }
        },
        setWalletConnectDeepLink({
            name: e,
            href: t
        }) {
            try {
                n.setItem(i.DEEPLINK_CHOICE, JSON.stringify({
                    href: t,
                    name: e
                }))
            } catch {
                console.info("Unable to set WalletConnect deep link")
            }
        },
        getWalletConnectDeepLink() {
            try {
                let e = n.getItem(i.DEEPLINK_CHOICE);
                if (e) return JSON.parse(e)
            } catch {
                console.info("Unable to get WalletConnect deep link")
            }
        },
        deleteWalletConnectDeepLink() {
            try {
                n.removeItem(i.DEEPLINK_CHOICE)
            } catch {
                console.info("Unable to delete WalletConnect deep link")
            }
        },
        setActiveNamespace(e) {
            try {
                n.setItem(i.ACTIVE_NAMESPACE, e)
            } catch {
                console.info("Unable to set active namespace")
            }
        },
        setActiveCaipNetworkId(e) {
            try {
                n.setItem(i.ACTIVE_CAIP_NETWORK_ID, e), a.setActiveNamespace(e.split(":")[0])
            } catch {
                console.info("Unable to set active caip network id")
            }
        },
        getActiveCaipNetworkId() {
            try {
                return n.getItem(i.ACTIVE_CAIP_NETWORK_ID)
            } catch {
                console.info("Unable to get active caip network id");
                return
            }
        },
        deleteActiveCaipNetworkId() {
            try {
                n.removeItem(i.ACTIVE_CAIP_NETWORK_ID)
            } catch {
                console.info("Unable to delete active caip network id")
            }
        },
        deleteConnectedConnectorId(e) {
            try {
                let t = s(e);
                n.removeItem(t)
            } catch {
                console.info("Unable to delete connected connector id")
            }
        },
        setAppKitRecent(e) {
            try {
                let t = a.getRecentWallets();
                t.find(t => t.id === e.id) || (t.unshift(e), t.length > 2 && t.pop(), n.setItem(i.RECENT_WALLETS, JSON.stringify(t)))
            } catch {
                console.info("Unable to set AppKit recent")
            }
        },
        getRecentWallets() {
            try {
                let e = n.getItem(i.RECENT_WALLETS);
                return e ? JSON.parse(e) : []
            } catch {
                console.info("Unable to get AppKit recent")
            }
            return []
        },
        setConnectedConnectorId(e, t) {
            try {
                let r = s(e);
                n.setItem(r, t)
            } catch {
                console.info("Unable to set Connected Connector Id")
            }
        },
        getActiveNamespace() {
            try {
                return n.getItem(i.ACTIVE_NAMESPACE)
            } catch {
                console.info("Unable to get active namespace")
            }
        },
        getConnectedConnectorId(e) {
            if (e) try {
                let t = s(e);
                return n.getItem(t)
            } catch (t) {
                console.info("Unable to get connected connector id in namespace ", e)
            }
        },
        setConnectedSocialProvider(e) {
            try {
                n.setItem(i.CONNECTED_SOCIAL, e)
            } catch {
                console.info("Unable to set connected social provider")
            }
        },
        getConnectedSocialProvider() {
            try {
                return n.getItem(i.CONNECTED_SOCIAL)
            } catch {
                console.info("Unable to get connected social provider")
            }
        },
        deleteConnectedSocialProvider() {
            try {
                n.removeItem(i.CONNECTED_SOCIAL)
            } catch {
                console.info("Unable to delete connected social provider")
            }
        },
        getConnectedSocialUsername() {
            try {
                return n.getItem(i.CONNECTED_SOCIAL_USERNAME)
            } catch {
                console.info("Unable to get connected social username")
            }
        },
        getStoredActiveCaipNetworkId() {
            let e = n.getItem(i.ACTIVE_CAIP_NETWORK_ID);
            return e ? .split(":") ? .[1]
        },
        setConnectionStatus(e) {
            try {
                n.setItem(i.CONNECTION_STATUS, e)
            } catch {
                console.info("Unable to set connection status")
            }
        },
        getConnectionStatus() {
            try {
                return n.getItem(i.CONNECTION_STATUS)
            } catch {
                return
            }
        },
        getConnectedNamespaces() {
            try {
                let e = n.getItem(i.CONNECTED_NAMESPACES);
                if (!e ? .length) return [];
                return e.split(",")
            } catch {
                return []
            }
        },
        setConnectedNamespaces(e) {
            try {
                let t = Array.from(new Set(e));
                n.setItem(i.CONNECTED_NAMESPACES, t.join(","))
            } catch {
                console.info("Unable to set namespaces in storage")
            }
        },
        addConnectedNamespace(e) {
            try {
                let t = a.getConnectedNamespaces();
                t.includes(e) || (t.push(e), a.setConnectedNamespaces(t))
            } catch {
                console.info("Unable to add connected namespace")
            }
        },
        removeConnectedNamespace(e) {
            try {
                let t = a.getConnectedNamespaces(),
                    r = t.indexOf(e);
                r > -1 && (t.splice(r, 1), a.setConnectedNamespaces(t))
            } catch {
                console.info("Unable to remove connected namespace")
            }
        },
        getTelegramSocialProvider() {
            try {
                return n.getItem(i.TELEGRAM_SOCIAL_PROVIDER)
            } catch {
                return console.info("Unable to get telegram social provider"), null
            }
        },
        setTelegramSocialProvider(e) {
            try {
                n.setItem(i.TELEGRAM_SOCIAL_PROVIDER, e)
            } catch {
                console.info("Unable to set telegram social provider")
            }
        },
        removeTelegramSocialProvider() {
            try {
                n.removeItem(i.TELEGRAM_SOCIAL_PROVIDER)
            } catch {
                console.info("Unable to remove telegram social provider")
            }
        },
        getBalanceCache() {
            let e = {};
            try {
                let t = n.getItem(i.PORTFOLIO_CACHE);
                e = t ? JSON.parse(t) : {}
            } catch {
                console.info("Unable to get balance cache")
            }
            return e
        },
        removeAddressFromBalanceCache(e) {
            try {
                let t = a.getBalanceCache();
                n.setItem(i.PORTFOLIO_CACHE, JSON.stringify({ ...t,
                    [e]: void 0
                }))
            } catch {
                console.info("Unable to remove address from balance cache", e)
            }
        },
        getBalanceCacheForCaipAddress(e) {
            try {
                let t = a.getBalanceCache()[e];
                if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.portfolio)) return t.balance;
                a.removeAddressFromBalanceCache(e)
            } catch {
                console.info("Unable to get balance cache for address", e)
            }
        },
        updateBalanceCache(e) {
            try {
                let t = a.getBalanceCache();
                t[e.caipAddress] = e, n.setItem(i.PORTFOLIO_CACHE, JSON.stringify(t))
            } catch {
                console.info("Unable to update balance cache", e)
            }
        },
        getNativeBalanceCache() {
            let e = {};
            try {
                let t = n.getItem(i.NATIVE_BALANCE_CACHE);
                e = t ? JSON.parse(t) : {}
            } catch {
                console.info("Unable to get balance cache")
            }
            return e
        },
        removeAddressFromNativeBalanceCache(e) {
            try {
                let t = a.getBalanceCache();
                n.setItem(i.NATIVE_BALANCE_CACHE, JSON.stringify({ ...t,
                    [e]: void 0
                }))
            } catch {
                console.info("Unable to remove address from balance cache", e)
            }
        },
        getNativeBalanceCacheForCaipAddress(e) {
            try {
                let t = a.getNativeBalanceCache()[e];
                if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.nativeBalance)) return t;
                console.info("Discarding cache for address", e), a.removeAddressFromBalanceCache(e)
            } catch {
                console.info("Unable to get balance cache for address", e)
            }
        },
        updateNativeBalanceCache(e) {
            try {
                let t = a.getNativeBalanceCache();
                t[e.caipAddress] = e, n.setItem(i.NATIVE_BALANCE_CACHE, JSON.stringify(t))
            } catch {
                console.info("Unable to update balance cache", e)
            }
        },
        getEnsCache() {
            let e = {};
            try {
                let t = n.getItem(i.ENS_CACHE);
                e = t ? JSON.parse(t) : {}
            } catch {
                console.info("Unable to get ens name cache")
            }
            return e
        },
        getEnsFromCacheForAddress(e) {
            try {
                let t = a.getEnsCache()[e];
                if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.ens)) return t.ens;
                a.removeEnsFromCache(e)
            } catch {
                console.info("Unable to get ens name from cache", e)
            }
        },
        updateEnsCache(e) {
            try {
                let t = a.getEnsCache();
                t[e.address] = e, n.setItem(i.ENS_CACHE, JSON.stringify(t))
            } catch {
                console.info("Unable to update ens name cache", e)
            }
        },
        removeEnsFromCache(e) {
            try {
                let t = a.getEnsCache();
                n.setItem(i.ENS_CACHE, JSON.stringify({ ...t,
                    [e]: void 0
                }))
            } catch {
                console.info("Unable to remove ens name from cache", e)
            }
        },
        getIdentityCache() {
            let e = {};
            try {
                let t = n.getItem(i.IDENTITY_CACHE);
                e = t ? JSON.parse(t) : {}
            } catch {
                console.info("Unable to get identity cache")
            }
            return e
        },
        getIdentityFromCacheForAddress(e) {
            try {
                let t = a.getIdentityCache()[e];
                if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.identity)) return t.identity;
                a.removeIdentityFromCache(e)
            } catch {
                console.info("Unable to get identity from cache", e)
            }
        },
        updateIdentityCache(e) {
            try {
                let t = a.getIdentityCache();
                t[e.address] = {
                    identity: e.identity,
                    timestamp: e.timestamp
                }, n.setItem(i.IDENTITY_CACHE, JSON.stringify(t))
            } catch {
                console.info("Unable to update identity cache", e)
            }
        },
        removeIdentityFromCache(e) {
            try {
                let t = a.getIdentityCache();
                n.setItem(i.IDENTITY_CACHE, JSON.stringify({ ...t,
                    [e]: void 0
                }))
            } catch {
                console.info("Unable to remove identity from cache", e)
            }
        },
        clearAddressCache() {
            try {
                n.removeItem(i.PORTFOLIO_CACHE), n.removeItem(i.NATIVE_BALANCE_CACHE), n.removeItem(i.ENS_CACHE), n.removeItem(i.IDENTITY_CACHE)
            } catch {
                console.info("Unable to clear address cache")
            }
        }
    };
    e.s(["StorageUtil", 0, a], 609294);
    let c = {
        isMobile() {
            return !!this.isClient() && !!(window ? .matchMedia("(pointer:coarse)") ? .matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))
        },
        checkCaipNetwork: (e, t = "") => e ? .caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase()),
        isAndroid() {
            if (!this.isMobile()) return !1;
            let e = window ? .navigator.userAgent.toLowerCase();
            return c.isMobile() && e.includes("android")
        },
        isIos() {
            if (!this.isMobile()) return !1;
            let e = window ? .navigator.userAgent.toLowerCase();
            return e.includes("iphone") || e.includes("ipad")
        },
        isSafari() {
            return !!this.isClient() && (window ? .navigator.userAgent.toLowerCase()).includes("safari")
        },
        isClient: () => "u" > typeof window,
        isPairingExpired: e => !e || e - Date.now() <= r.ConstantsUtil.TEN_SEC_MS,
        isAllowedRetry: (e, t = r.ConstantsUtil.ONE_SEC_MS) => Date.now() - e >= t,
        copyToClopboard(e) {
            navigator.clipboard.writeText(e)
        },
        isIframe() {
            try {
                return window ? .self !== window ? .top
            } catch (e) {
                return !1
            }
        },
        getPairingExpiry: () => Date.now() + r.ConstantsUtil.FOUR_MINUTES_MS,
        getNetworkId: e => e ? .split(":")[1],
        getPlainAddress: e => e ? .split(":")[2],
        wait: async e => new Promise(t => {
            setTimeout(t, e)
        }),
        debounce(e, t = 500) {
            let r;
            return (...i) => {
                r && clearTimeout(r), r = setTimeout(function() {
                    e(...i)
                }, t)
            }
        },
        isHttpUrl: e => e.startsWith("http://") || e.startsWith("https://"),
        formatNativeUrl(e, t) {
            if (c.isHttpUrl(e)) return this.formatUniversalUrl(e, t);
            let r = e;
            r.includes("://") || (r = e.replaceAll("/", "").replaceAll(":", ""), r = `${r}://`), r.endsWith("/") || (r = `${r}/`), this.isTelegram() && this.isAndroid() && (t = encodeURIComponent(t));
            let i = encodeURIComponent(t);
            return {
                redirect: `${r}wc?uri=${i}`,
                href: r
            }
        },
        formatUniversalUrl(e, t) {
            if (!c.isHttpUrl(e)) return this.formatNativeUrl(e, t);
            let r = e;
            r.endsWith("/") || (r = `${r}/`);
            let i = encodeURIComponent(t);
            return {
                redirect: `${r}wc?uri=${i}`,
                href: r
            }
        },
        getOpenTargetForPlatform(e) {
            return "popupWindow" === e ? e : this.isTelegram() ? a.getTelegramSocialProvider() ? "_top" : "_blank" : e
        },
        openHref(e, t, r) {
            window ? .open(e, this.getOpenTargetForPlatform(t), r || "noreferrer noopener")
        },
        returnOpenHref(e, t, r) {
            return window ? .open(e, this.getOpenTargetForPlatform(t), r || "noreferrer noopener")
        },
        isTelegram: () => "u" > typeof window && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto),
        preloadImage: async e => Promise.race([new Promise((t, r) => {
            let i = new Image;
            i.onload = t, i.onerror = r, i.crossOrigin = "anonymous", i.src = e
        }), c.wait(2e3)]),
        formatBalance(e, t) {
            let r = "0.000";
            if ("string" == typeof e) {
                let t = Number(e);
                if (t) {
                    let e = Math.floor(1e3 * t) / 1e3;
                    e && (r = e.toString())
                }
            }
            return `${r}${t?` ${t}`:""}`
        },
        formatBalance2(e, t) {
            let r;
            if ("0" === e) r = "0";
            else if ("string" == typeof e) {
                let t = Number(e);
                t && (r = t.toString().match(/^-?\d+(?:\.\d{0,3})?/u) ? .[0])
            }
            return {
                value: r ? ? "0",
                rest: "0" === r ? "000" : "",
                symbol: t
            }
        },
        getApiUrl: () => t.ConstantsUtil.W3M_API_URL,
        getBlockchainApiUrl: () => t.ConstantsUtil.BLOCKCHAIN_API_RPC_URL,
        getAnalyticsUrl: () => t.ConstantsUtil.PULSE_API_URL,
        getUUID: () => crypto ? .randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, e => {
            let t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        }),
        parseError: e => "string" == typeof e ? e : "string" == typeof e ? .issues ? .[0] ? .message ? e.issues[0].message : e instanceof Error ? e.message : "Unknown error",
        sortRequestedNetworks(e, t = []) {
            let r = {};
            return t && e && (e.forEach((e, t) => {
                r[e] = t
            }), t.sort((e, t) => {
                let i = r[e.id],
                    s = r[t.id];
                return void 0 !== i && void 0 !== s ? i - s : void 0 !== i ? -1 : 1 * (void 0 !== s)
            })), t
        },
        calculateBalance(e) {
            let t = 0;
            for (let r of e) t += r.value ? ? 0;
            return t
        },
        formatTokenBalance(e) {
            let [t, r] = e.toFixed(2).split(".");
            return {
                dollars: t,
                pennies: r
            }
        },
        isAddress(e, t = "eip155") {
            switch (t) {
                case "eip155":
                    if (/^(?:0x)?[0-9a-f]{40}$/iu.test(e) && (/^(?:0x)?[0-9a-f]{40}$/iu.test(e) || /^(?:0x)?[0-9A-F]{40}$/iu.test(e))) return !0;
                    return !1;
                case "solana":
                    return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);
                default:
                    return !1
            }
        },
        uniqueBy(e, t) {
            let r = new Set;
            return e.filter(e => {
                let i = e[t];
                return !r.has(i) && (r.add(i), !0)
            })
        },
        generateSdkVersion(e, t, i) {
            let s = 0 === e.length ? r.ConstantsUtil.ADAPTER_TYPES.UNIVERSAL : e.map(e => e.adapterType).join(",");
            return `${t}-${s}-${i}`
        },
        createAccount: (e, t, r, i, s) => ({
            namespace: e,
            address: t,
            type: r,
            publicKey: i,
            path: s
        }),
        isCaipAddress(e) {
            if ("string" != typeof e) return !1;
            let r = e.split(":"),
                i = r[0];
            return 3 === r.filter(Boolean).length && i in t.ConstantsUtil.CHAIN_NAME_MAP
        },
        isMac() {
            let e = window ? .navigator.userAgent.toLowerCase();
            return e.includes("macintosh") && !e.includes("safari")
        },
        formatTelegramSocialLoginUrl(e) {
            let t = `--${encodeURIComponent(window?.location.href)}`,
                r = "state=";
            if ("auth.magic.link" === new URL(e).host) {
                let i = "provider_authorization_url=",
                    s = e.substring(e.indexOf(i) + i.length),
                    n = this.injectIntoUrl(decodeURIComponent(s), r, t);
                return e.replace(s, encodeURIComponent(n))
            }
            return this.injectIntoUrl(e, r, t)
        },
        injectIntoUrl(e, t, r) {
            let i = e.indexOf(t);
            if (-1 === i) throw Error(`${t} parameter not found in the URL: ${e}`);
            let s = e.indexOf("&", i),
                n = t.length,
                o = -1 !== s ? s : e.length;
            return e.substring(0, i + n) + (e.substring(i + n, o) + r) + e.substring(s)
        }
    };
    async function l(...e) {
        let t = await fetch(...e);
        if (!t.ok) throw Error(`HTTP status code: ${t.status}`, {
            cause: t
        });
        return t
    }
    e.s(["CoreHelperUtil", 0, c], 425609), e.s(["FetchUtil", 0, class {
        constructor({
            baseUrl: e,
            clientId: t
        }) {
            this.baseUrl = e, this.clientId = t
        }
        async get({
            headers: e,
            signal: t,
            cache: r,
            ...i
        }) {
            let s = this.createUrl(i);
            return (await l(s, {
                method: "GET",
                headers: e,
                signal: t,
                cache: r
            })).json()
        }
        async getBlob({
            headers: e,
            signal: t,
            ...r
        }) {
            let i = this.createUrl(r);
            return (await l(i, {
                method: "GET",
                headers: e,
                signal: t
            })).blob()
        }
        async post({
            body: e,
            headers: t,
            signal: r,
            ...i
        }) {
            let s = this.createUrl(i);
            return (await l(s, {
                method: "POST",
                headers: t,
                body: e ? JSON.stringify(e) : void 0,
                signal: r
            })).json()
        }
        async put({
            body: e,
            headers: t,
            signal: r,
            ...i
        }) {
            let s = this.createUrl(i);
            return (await l(s, {
                method: "PUT",
                headers: t,
                body: e ? JSON.stringify(e) : void 0,
                signal: r
            })).json()
        }
        async delete({
            body: e,
            headers: t,
            signal: r,
            ...i
        }) {
            let s = this.createUrl(i);
            return (await l(s, {
                method: "DELETE",
                headers: t,
                body: e ? JSON.stringify(e) : void 0,
                signal: r
            })).json()
        }
        createUrl({
            path: e,
            params: t
        }) {
            let r = new URL(e, this.baseUrl);
            return t && Object.entries(t).forEach(([e, t]) => {
                t && r.searchParams.append(e, t)
            }), this.clientId && r.searchParams.append("clientId", this.clientId), r
        }
    }], 9115)
}, 405163, 152967, e => {
    "use strict";
    var t = e.i(934522),
        r = e.i(972276);
    let i = new WeakMap,
        s = new WeakMap,
        n = (e, t) => {
            let r = i.get(e);
            r && (r[0].forEach(t => {
                let {
                    d: r
                } = t;
                e !== r && n(r)
            }), ++r[2], t && r[3].add(t))
        },
        o = e => {
            let t = i.get(e);
            t && (--t[2], t[2] || (t[3].forEach(e => e()), t[3].clear()), t[0].forEach(t => {
                let {
                    d: r
                } = t;
                e !== r && o(r)
            }))
        };
    e.s(["derive", 0, function(e, t) {
        let a = (null == t ? void 0 : t.proxy) || (0, r.proxy)({}),
            c = !(null == t || !t.sync),
            l = Object.keys(e);
        return l.forEach(t => {
            if (Object.getOwnPropertyDescriptor(a, t)) throw Error("object property already defined");
            let h = e[t],
                d = null,
                u = () => {
                    if (d && (Array.from(d).map(([e]) => {
                            let t;
                            return !(null == (t = i.get(e)) || !t[2] || (t[3].add(u), 0))
                        }).some(e => e) || Array.from(d).every(([e, t]) => (0, r.getVersion)(e) === t.v))) return;
                    let e = new Map,
                        p = h(t => (e.set(t, {
                            v: (0, r.getVersion)(t)
                        }), t)),
                        g = () => {
                            var h;
                            e.forEach((e, h) => {
                                var p;
                                let g = null == (p = d) || null == (p = p.get(h)) ? void 0 : p.s;
                                if (g) e.s = g;
                                else {
                                    let d = {
                                        s: h,
                                        d: a,
                                        k: t,
                                        c: u,
                                        n: c,
                                        i: l
                                    };
                                    (e => {
                                        let {
                                            s: t,
                                            d: a
                                        } = e, c = s.get(a);
                                        c || (c = [new Set], s.set(e.d, c)), c[0].add(e);
                                        let l = i.get(t);
                                        if (!l) {
                                            let e = new Set,
                                                s = (0, r.subscribe)(t, r => {
                                                    e.forEach(e => {
                                                        let {
                                                            d: i,
                                                            c: s,
                                                            n: a,
                                                            i: c
                                                        } = e;
                                                        t === i && r.every(e => 1 === e[1].length && c.includes(e[1][0])) || e.p || (n(t, s), a ? o(t) : e.p = Promise.resolve().then(() => {
                                                            delete e.p, o(t)
                                                        }))
                                                    })
                                                }, !0);
                                            l = [e, s, 0, new Set], i.set(t, l)
                                        }
                                        l[0].add(e)
                                    })(d), e.s = d
                                }
                            }), null == (h = d) || h.forEach((t, r) => {
                                !e.has(r) && t.s && (e => {
                                    let {
                                        s: t,
                                        d: r
                                    } = e, n = s.get(r);
                                    null == n || n[0].delete(e), 0 === (null == n ? void 0 : n[0].size) && s.delete(r);
                                    let o = i.get(t);
                                    if (o) {
                                        let [r, s] = o;
                                        r.delete(e), r.size || (s(), i.delete(t))
                                    }
                                })(t.s)
                            }), d = e
                        };
                    p instanceof Promise ? p.finally(g) : g(), a[t] = p
                };
            u()
        }), a
    }], 152967), Symbol(), e.s(["proxyMap", 0, function(e) {
        let r = (0, t.proxy)({
            data: Array.from(e || []),
            has(e) {
                return this.data.some(t => t[0] === e)
            },
            set(e, t) {
                let r = this.data.find(t => t[0] === e);
                return r ? r[1] = t : this.data.push([e, t]), this
            },
            get(e) {
                var t;
                return null == (t = this.data.find(t => t[0] === e)) ? void 0 : t[1]
            },
            delete(e) {
                let t = this.data.findIndex(t => t[0] === e);
                return -1 !== t && (this.data.splice(t, 1), !0)
            },
            clear() {
                this.data.splice(0)
            },
            get size() {
                return this.data.length
            },
            toJSON() {
                return new Map(this.data)
            },
            forEach(e) {
                this.data.forEach(t => {
                    e(t[1], t[0], this)
                })
            },
            keys() {
                return this.data.map(e => e[0]).values()
            },
            values() {
                return this.data.map(e => e[1]).values()
            },
            entries() {
                return new Map(this.data).entries()
            },
            get [Symbol.toStringTag]() {
                return "Map"
            },
            [Symbol.iterator]() {
                return this.entries()
            }
        });
        return Object.defineProperties(r, {
            data: {
                enumerable: !1
            },
            size: {
                enumerable: !1
            },
            toJSON: {
                enumerable: !1
            }
        }), Object.seal(r), r
    }, "subscribeKey", 0, function(e, r, i, s) {
        let n = e[r];
        return (0, t.subscribe)(e, () => {
            let t = e[r];
            Object.is(n, t) || i(n = t)
        }, s)
    }], 405163)
}, 38371, 440268, 633147, e => {
    "use strict";
    e.s(["NetworkUtil", 0, {
        caipNetworkIdToNumber: e => e ? Number(e.split(":")[1]) : void 0,
        parseEvmChainId(e) {
            return "string" == typeof e ? this.caipNetworkIdToNumber(e) : e
        },
        getNetworksByNamespace: (e, t) => e ? .filter(e => e.chainNamespace === t) || [],
        getFirstNetworkByNamespace(e, t) {
            return this.getNetworksByNamespace(e, t)[0]
        }
    }], 38371), e.s(["getW3mThemeVariables", 0, function(e, t) {
        return "light" === t ? {
            "--w3m-accent": e ? .["--w3m-accent"] || "hsla(231, 100%, 70%, 1)",
            "--w3m-background": "#fff"
        } : {
            "--w3m-accent": e ? .["--w3m-accent"] || "hsla(230, 100%, 67%, 1)",
            "--w3m-background": "#121313"
        }
    }], 440268), e.s(["MobileWalletUtil", () => i], 633147);
    var t = e.i(970422),
        r = e.i(947366);
    let i = {
        handleSolanaDeeplinkRedirect(e) {
            if (r.ChainController.state.activeChain === t.ConstantsUtil.CHAIN.SOLANA) {
                let t = window.location.href,
                    r = encodeURIComponent(t);
                if ("Phantom" === e && !("phantom" in window)) {
                    let e = t.startsWith("https") ? "https" : "http",
                        i = t.split("/")[2],
                        s = encodeURIComponent(`${e}://${i}`);
                    window.location.href = `https://phantom.app/ul/browse/${r}?ref=${s}`
                }
                "Coinbase Wallet" !== e || "coinbaseSolana" in window || (window.location.href = `https://go.cb-w.com/dapp?cb_url=${r}`)
            }
        }
    }
}, 76054, 138573, e => {
    "use strict";
    e.s(["AssetUtil", () => c], 76054);
    var t = e.i(934522),
        r = e.i(439522),
        i = e.i(405163);
    let s = (0, t.proxy)({
            walletImages: {},
            networkImages: {},
            chainImages: {},
            connectorImages: {},
            tokenImages: {},
            currencyImages: {}
        }),
        n = {
            state: s,
            subscribeNetworkImages: e => (0, t.subscribe)(s.networkImages, () => e(s.networkImages)),
            subscribeKey: (e, t) => (0, i.subscribeKey)(s, e, t),
            subscribe: e => (0, t.subscribe)(s, () => e(s)),
            setWalletImage(e, t) {
                s.walletImages[e] = t
            },
            setNetworkImage(e, t) {
                s.networkImages[e] = t
            },
            setChainImage(e, t) {
                s.chainImages[e] = t
            },
            setConnectorImage(e, t) {
                s.connectorImages = { ...s.connectorImages,
                    [e]: t
                }
            },
            setTokenImage(e, t) {
                s.tokenImages[e] = t
            },
            setCurrencyImage(e, t) {
                s.currencyImages[e] = t
            }
        };
    e.s(["AssetController", 0, n], 138573);
    let o = {
            eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
            solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
            polkadot: "",
            bip122: "0b4838db-0161-4ffe-022d-532bf03dba00"
        },
        a = (0, t.proxy)({
            networkImagePromises: {}
        }),
        c = {
            async fetchWalletImage(e) {
                if (e) return await r.ApiController._fetchWalletImage(e), this.getWalletImageById(e)
            },
            async fetchNetworkImage(e) {
                if (!e) return;
                let t = this.getNetworkImageById(e);
                return t || (a.networkImagePromises[e] || (a.networkImagePromises[e] = r.ApiController._fetchNetworkImage(e)), await a.networkImagePromises[e], this.getNetworkImageById(e))
            },
            getWalletImageById(e) {
                if (e) return n.state.walletImages[e]
            },
            getWalletImage: e => e ? .image_url ? e ? .image_url : e ? .image_id ? n.state.walletImages[e.image_id] : void 0,
            getNetworkImage: e => e ? .assets ? .imageUrl ? e ? .assets ? .imageUrl : e ? .assets ? .imageId ? n.state.networkImages[e.assets.imageId] : void 0,
            getNetworkImageById(e) {
                if (e) return n.state.networkImages[e]
            },
            getConnectorImage: e => e ? .imageUrl ? e.imageUrl : e ? .imageId ? n.state.connectorImages[e.imageId] : void 0,
            getChainImage: e => n.state.networkImages[o[e]]
        }
}, 906349, e => {
    "use strict";
    var t = e.i(934522),
        r = e.i(405163),
        i = e.i(409546),
        s = e.i(425609);
    let n = {
            getFeatureValue(e, t) {
                let r = t ? .[e];
                return void 0 === r ? i.ConstantsUtil.DEFAULT_FEATURES[e] : r
            },
            filterSocialsByPlatform(e) {
                if (!e || !e.length) return e;
                if (s.CoreHelperUtil.isTelegram()) {
                    if (s.CoreHelperUtil.isIos()) return e.filter(e => "google" !== e);
                    if (s.CoreHelperUtil.isMac()) return e.filter(e => "x" !== e);
                    if (s.CoreHelperUtil.isAndroid()) return e.filter(e => !["facebook", "x"].includes(e))
                }
                return e
            }
        },
        o = (0, t.proxy)({
            features: i.ConstantsUtil.DEFAULT_FEATURES,
            projectId: "",
            sdkType: "appkit",
            sdkVersion: "html-wagmi-undefined",
            defaultAccountTypes: i.ConstantsUtil.DEFAULT_ACCOUNT_TYPES,
            enableNetworkSwitch: !0
        });
    e.s(["OptionsController", 0, {
        state: o,
        subscribeKey: (e, t) => (0, r.subscribeKey)(o, e, t),
        setOptions(e) {
            Object.assign(o, e)
        },
        setFeatures(e) {
            if (!e) return;
            o.features || (o.features = i.ConstantsUtil.DEFAULT_FEATURES);
            let t = { ...o.features,
                ...e
            };
            o.features = t, o.features.socials && (o.features.socials = n.filterSocialsByPlatform(o.features.socials))
        },
        setProjectId(e) {
            o.projectId = e
        },
        setCustomRpcUrls(e) {
            o.customRpcUrls = e
        },
        setAllWallets(e) {
            o.allWallets = e
        },
        setIncludeWalletIds(e) {
            o.includeWalletIds = e
        },
        setExcludeWalletIds(e) {
            o.excludeWalletIds = e
        },
        setFeaturedWalletIds(e) {
            o.featuredWalletIds = e
        },
        setTokens(e) {
            o.tokens = e
        },
        setTermsConditionsUrl(e) {
            o.termsConditionsUrl = e
        },
        setPrivacyPolicyUrl(e) {
            o.privacyPolicyUrl = e
        },
        setCustomWallets(e) {
            o.customWallets = e
        },
        setIsSiweEnabled(e) {
            o.isSiweEnabled = e
        },
        setIsUniversalProvider(e) {
            o.isUniversalProvider = e
        },
        setSdkVersion(e) {
            o.sdkVersion = e
        },
        setMetadata(e) {
            o.metadata = e
        },
        setDisableAppend(e) {
            o.disableAppend = e
        },
        setEIP6963Enabled(e) {
            o.enableEIP6963 = e
        },
        setDebug(e) {
            o.debug = e
        },
        setEnableWalletConnect(e) {
            o.enableWalletConnect = e
        },
        setEnableWalletGuide(e) {
            o.enableWalletGuide = e
        },
        setEnableAuthLogger(e) {
            o.enableAuthLogger = e
        },
        setEnableWallets(e) {
            o.enableWallets = e
        },
        setHasMultipleAddresses(e) {
            o.hasMultipleAddresses = e
        },
        setSIWX(e) {
            o.siwx = e
        },
        setConnectMethodsOrder(e) {
            o.features = { ...o.features,
                connectMethodsOrder: e
            }
        },
        setWalletFeaturesOrder(e) {
            o.features = { ...o.features,
                walletFeaturesOrder: e
            }
        },
        setSocialsOrder(e) {
            o.features = { ...o.features,
                socials: e
            }
        },
        setCollapseWallets(e) {
            o.features = { ...o.features,
                collapseWallets: e
            }
        },
        setEnableEmbedded(e) {
            o.enableEmbedded = e
        },
        setAllowUnsupportedChain(e) {
            o.allowUnsupportedChain = e
        },
        setManualWCControl(e) {
            o.manualWCControl = e
        },
        setEnableNetworkSwitch(e) {
            o.enableNetworkSwitch = e
        },
        setDefaultAccountTypes(e = {}) {
            Object.entries(e).forEach(([e, t]) => {
                t && (o.defaultAccountTypes[e] = t)
            })
        },
        setUniversalProviderConfigOverride(e) {
            o.universalProviderConfigOverride = e
        },
        getUniversalProviderConfigOverride: () => o.universalProviderConfigOverride,
        getSnapshot: () => (0, t.snapshot)(o)
    }], 906349)
}, 405784, 149991, e => {
    "use strict";
    e.s(["EventsController", () => f], 405784);
    var t = e.i(934522),
        r = e.i(970422),
        i = e.i(606285),
        s = e.i(425609),
        n = e.i(9115),
        o = e.i(123214),
        a = e.i(405163),
        c = e.i(906349);
    let l = (0, t.proxy)({
            message: "",
            variant: "info",
            open: !1
        }),
        h = {
            state: l,
            subscribeKey: (e, t) => (0, a.subscribeKey)(l, e, t),
            open(e, t) {
                let {
                    debug: r
                } = c.OptionsController.state, {
                    shortMessage: i,
                    longMessage: s
                } = e;
                r && (l.message = i, l.variant = t, l.open = !0), s && console.error("function" == typeof s ? s() : s)
            },
            close() {
                l.open = !1, l.message = "", l.variant = "info"
            }
        };
    e.s(["AlertController", 0, h], 149991);
    let d = s.CoreHelperUtil.getAnalyticsUrl(),
        u = new n.FetchUtil({
            baseUrl: d,
            clientId: null
        }),
        p = ["MODAL_CREATED"],
        g = (0, t.proxy)({
            timestamp: Date.now(),
            reportedErrors: {},
            data: {
                type: "track",
                event: "MODAL_CREATED"
            }
        }),
        f = {
            state: g,
            subscribe: e => (0, t.subscribe)(g, () => e(g)),
            getSdkProperties() {
                let {
                    projectId: e,
                    sdkType: t,
                    sdkVersion: r
                } = c.OptionsController.state;
                return {
                    projectId: e,
                    st: t,
                    sv: r || "html-wagmi-4.2.2"
                }
            },
            async _sendAnalyticsEvent(e) {
                try {
                    let t = o.AccountController.state.address;
                    if (p.includes(e.data.event) || "u" < typeof window) return;
                    await u.post({
                        path: "/e",
                        params: f.getSdkProperties(),
                        body: {
                            eventId: s.CoreHelperUtil.getUUID(),
                            url: window.location.href,
                            domain: window.location.hostname,
                            timestamp: e.timestamp,
                            props: { ...e.data,
                                address: t
                            }
                        }
                    }), g.reportedErrors.FORBIDDEN = !1
                } catch (e) {
                    e instanceof Error && e.cause instanceof Response && e.cause.status === r.ConstantsUtil.HTTP_STATUS_CODES.FORBIDDEN && !g.reportedErrors.FORBIDDEN && (h.open({
                        shortMessage: "Invalid App Configuration",
                        longMessage: `Origin ${(0,i.isSafe)()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`
                    }, "error"), g.reportedErrors.FORBIDDEN = !0)
                }
            },
            sendEvent(e) {
                g.timestamp = Date.now(), g.data = e, c.OptionsController.state.features ? .analytics && f._sendAnalyticsEvent(g)
            }
        }
}, 439522, e => {
    "use strict";
    e.s(["ApiController", () => f]);
    var t = e.i(934522),
        r = e.i(405163),
        i = e.i(76054),
        s = e.i(425609),
        n = e.i(9115),
        o = e.i(609294),
        a = e.i(138573),
        c = e.i(947366),
        l = e.i(260687),
        h = e.i(405784),
        d = e.i(906349);
    let u = s.CoreHelperUtil.getApiUrl(),
        p = new n.FetchUtil({
            baseUrl: u,
            clientId: null
        }),
        g = (0, t.proxy)({
            promises: {},
            page: 1,
            count: 0,
            featured: [],
            allFeatured: [],
            recommended: [],
            allRecommended: [],
            wallets: [],
            search: [],
            isAnalyticsEnabled: !1,
            excludedWallets: [],
            isFetchingRecommendedWallets: !1
        }),
        f = {
            state: g,
            subscribeKey: (e, t) => (0, r.subscribeKey)(g, e, t),
            _getSdkProperties() {
                let {
                    projectId: e,
                    sdkType: t,
                    sdkVersion: r
                } = d.OptionsController.state;
                return {
                    projectId: e,
                    st: t || "appkit",
                    sv: r || "html-wagmi-4.2.2"
                }
            },
            _filterOutExtensions: e => d.OptionsController.state.isUniversalProvider ? e.filter(e => !!(e.mobile_link || e.desktop_link || e.webapp_link)) : e,
            async _fetchWalletImage(e) {
                let t = `${p.baseUrl}/getWalletImage/${e}`,
                    r = await p.getBlob({
                        path: t,
                        params: f._getSdkProperties()
                    });
                a.AssetController.setWalletImage(e, URL.createObjectURL(r))
            },
            async _fetchNetworkImage(e) {
                let t = `${p.baseUrl}/public/getAssetImage/${e}`,
                    r = await p.getBlob({
                        path: t,
                        params: f._getSdkProperties()
                    });
                a.AssetController.setNetworkImage(e, URL.createObjectURL(r))
            },
            async _fetchConnectorImage(e) {
                let t = `${p.baseUrl}/public/getAssetImage/${e}`,
                    r = await p.getBlob({
                        path: t,
                        params: f._getSdkProperties()
                    });
                a.AssetController.setConnectorImage(e, URL.createObjectURL(r))
            },
            async _fetchCurrencyImage(e) {
                let t = `${p.baseUrl}/public/getCurrencyImage/${e}`,
                    r = await p.getBlob({
                        path: t,
                        params: f._getSdkProperties()
                    });
                a.AssetController.setCurrencyImage(e, URL.createObjectURL(r))
            },
            async _fetchTokenImage(e) {
                let t = `${p.baseUrl}/public/getTokenImage/${e}`,
                    r = await p.getBlob({
                        path: t,
                        params: f._getSdkProperties()
                    });
                a.AssetController.setTokenImage(e, URL.createObjectURL(r))
            },
            async fetchNetworkImages() {
                let e = c.ChainController.getAllRequestedCaipNetworks(),
                    t = e ? .map(({
                        assets: e
                    }) => e ? .imageId).filter(Boolean).filter(e => !i.AssetUtil.getNetworkImageById(e));
                t && await Promise.allSettled(t.map(e => f._fetchNetworkImage(e)))
            },
            async fetchConnectorImages() {
                let {
                    connectors: e
                } = l.ConnectorController.state, t = e.map(({
                    imageId: e
                }) => e).filter(Boolean);
                await Promise.allSettled(t.map(e => f._fetchConnectorImage(e)))
            },
            async fetchCurrencyImages(e = []) {
                await Promise.allSettled(e.map(e => f._fetchCurrencyImage(e)))
            },
            async fetchTokenImages(e = []) {
                await Promise.allSettled(e.map(e => f._fetchTokenImage(e)))
            },
            async fetchFeaturedWallets() {
                let {
                    featuredWalletIds: e
                } = d.OptionsController.state;
                if (e ? .length) {
                    let {
                        data: t
                    } = await p.get({
                        path: "/getWallets",
                        params: { ...f._getSdkProperties(),
                            page: "1",
                            entries: e ? .length ? String(e.length) : "4",
                            include: e ? .join(",")
                        }
                    });
                    t.sort((t, r) => e.indexOf(t.id) - e.indexOf(r.id));
                    let r = t.map(e => e.image_id).filter(Boolean);
                    await Promise.allSettled(r.map(e => f._fetchWalletImage(e))), g.featured = t, g.allFeatured = t
                }
            },
            async fetchRecommendedWallets() {
                try {
                    g.isFetchingRecommendedWallets = !0;
                    let {
                        includeWalletIds: e,
                        excludeWalletIds: t,
                        featuredWalletIds: r
                    } = d.OptionsController.state, i = [...t ? ? [], ...r ? ? []].filter(Boolean), s = c.ChainController.getRequestedCaipNetworkIds().join(","), {
                        data: n,
                        count: a
                    } = await p.get({
                        path: "/getWallets",
                        params: { ...f._getSdkProperties(),
                            page: "1",
                            chains: s,
                            entries: "4",
                            include: e ? .join(","),
                            exclude: i ? .join(",")
                        }
                    }), l = o.StorageUtil.getRecentWallets(), h = n.map(e => e.image_id).filter(Boolean), u = l.map(e => e.image_id).filter(Boolean);
                    await Promise.allSettled([...h, ...u].map(e => f._fetchWalletImage(e))), g.recommended = n, g.allRecommended = n, g.count = a ? ? 0
                } catch {} finally {
                    g.isFetchingRecommendedWallets = !1
                }
            },
            async fetchWallets({
                page: e
            }) {
                let {
                    includeWalletIds: t,
                    excludeWalletIds: r,
                    featuredWalletIds: i
                } = d.OptionsController.state, n = c.ChainController.getRequestedCaipNetworkIds().join(","), o = [...g.recommended.map(({
                    id: e
                }) => e), ...r ? ? [], ...i ? ? []].filter(Boolean), {
                    data: a,
                    count: l
                } = await p.get({
                    path: "/getWallets",
                    params: { ...f._getSdkProperties(),
                        page: String(e),
                        entries: "40",
                        chains: n,
                        include: t ? .join(","),
                        exclude: o.join(",")
                    }
                }), h = a.slice(0, 20).map(e => e.image_id).filter(Boolean);
                await Promise.allSettled(h.map(e => f._fetchWalletImage(e))), g.wallets = s.CoreHelperUtil.uniqueBy([...g.wallets, ...f._filterOutExtensions(a)], "id"), g.count = l > g.count ? l : g.count, g.page = e
            },
            async initializeExcludedWallets({
                ids: e
            }) {
                let t = c.ChainController.getRequestedCaipNetworkIds().join(","),
                    {
                        data: r
                    } = await p.get({
                        path: "/getWallets",
                        params: { ...f._getSdkProperties(),
                            page: "1",
                            entries: String(e.length),
                            chains: t,
                            include: e ? .join(",")
                        }
                    });
                r && r.forEach(e => {
                    e ? .rdns && g.excludedWallets.push({
                        rdns: e.rdns,
                        name: e.name
                    })
                })
            },
            async searchWallet({
                search: e,
                badge: t
            }) {
                let {
                    includeWalletIds: r,
                    excludeWalletIds: i
                } = d.OptionsController.state;
                g.search = [];
                let n = c.ChainController.getRequestedCaipNetworkIds().join(","),
                    {
                        data: o
                    } = await p.get({
                        path: "/getWallets",
                        params: { ...f._getSdkProperties(),
                            page: "1",
                            entries: "100",
                            search: e ? .trim(),
                            badge_type: t,
                            chains: n,
                            include: r ? .join(","),
                            exclude: i ? .join(",")
                        }
                    });
                h.EventsController.sendEvent({
                    type: "track",
                    event: "SEARCH_WALLET",
                    properties: {
                        badge: t ? ? "",
                        search: e ? ? ""
                    }
                });
                let a = o.map(e => e.image_id).filter(Boolean);
                await Promise.allSettled([...a.map(e => f._fetchWalletImage(e)), s.CoreHelperUtil.wait(300)]), g.search = f._filterOutExtensions(o)
            },
            initPromise(e, t) {
                let r = g.promises[e];
                return r || (g.promises[e] = t())
            },
            prefetch: ({
                fetchConnectorImages: e = !0,
                fetchFeaturedWallets: t = !0,
                fetchRecommendedWallets: r = !0,
                fetchNetworkImages: i = !0
            } = {}) => Promise.allSettled([e && f.initPromise("connectorImages", f.fetchConnectorImages), t && f.initPromise("featuredWallets", f.fetchFeaturedWallets), r && f.initPromise("recommendedWallets", f.fetchRecommendedWallets), i && f.initPromise("networkImages", f.fetchNetworkImages)].filter(Boolean)),
            prefetchAnalyticsConfig() {
                d.OptionsController.state.features ? .analytics && f.fetchAnalyticsConfig()
            },
            async fetchAnalyticsConfig() {
                try {
                    let {
                        isAnalyticsEnabled: e
                    } = await p.get({
                        path: "/getAnalyticsConfig",
                        params: f._getSdkProperties()
                    });
                    d.OptionsController.setFeatures({
                        analytics: e
                    })
                } catch (e) {
                    d.OptionsController.setFeatures({
                        analytics: !1
                    })
                }
            },
            setFilterByNamespace(e) {
                if (!e) {
                    g.featured = g.allFeatured, g.recommended = g.allRecommended;
                    return
                }
                let t = c.ChainController.getRequestedCaipNetworkIds().join(",");
                g.featured = g.allFeatured.filter(e => e.chains ? .some(e => t.includes(e))), g.recommended = g.allRecommended.filter(e => e.chains ? .some(e => t.includes(e)))
            }
        }
}, 251007, e => {
    "use strict";
    var t = e.i(211902),
        r = e.i(679753),
        i = Object.defineProperty,
        s = (e, t, r) => {
            let s;
            return (s = "symbol" != typeof t ? t + "" : t) in e ? i(e, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[s] = r
        };
    class n extends t.IEvents {
        constructor(e) {
            super(), this.opts = e, s(this, "protocol", "wc"), s(this, "version", 2)
        }
    }
    var o = Object.defineProperty;
    class a extends t.IEvents {
        constructor(e, t) {
            super(), this.core = e, this.logger = t, ((e, t, r) => {
                let i;
                return (i = "symbol" != typeof t ? t + "" : t) in e ? o(e, i, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[i] = r
            })(this, "records", new Map)
        }
    }
    class c extends t.IEvents {
        constructor(e, t) {
            super(), this.relayer = e, this.logger = t
        }
    }
    class l extends t.IEvents {
        constructor(e) {
            super()
        }
    }
    class h extends t.IEvents {
        constructor(e, t) {
            super(), this.relayer = e, this.logger = t
        }
    }
    class d extends t.IEvents {
        constructor(e, t) {
            super(), this.core = e, this.logger = t
        }
    }
    var u = Object.defineProperty,
        p = (e, t, r) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? u(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[i] = r
        };
    r.default, r.EventEmitter, e.s(["ICore", 0, n, "IEchoClient", 0, class {
        constructor(e, t) {
            this.projectId = e, this.logger = t
        }
    }, "IEngine", 0, class {
        constructor(e) {
            this.client = e
        }
    }, "IEventClient", 0, class {
        constructor(e, t, r) {
            this.core = e, this.logger = t, this.telemetryEnabled = r
        }
    }, "IExpirer", 0, d, "IJsonRpcHistory", 0, a, "IMessageTracker", 0, class {
        constructor(e, t) {
            this.logger = e, this.core = t
        }
    }, "IPublisher", 0, c, "IRelayer", 0, l, "ISignClient", 0, class {
        constructor(e) {
            this.opts = e, p(this, "protocol", "wc"), p(this, "version", 2)
        }
    }, "IStore", 0, class {
        constructor(e, t, r, i) {
            this.core = e, this.logger = t, this.name = r
        }
    }, "ISubscriber", 0, h, "IVerify", 0, class {
        constructor(e, t, r) {
            this.core = e, this.logger = t, this.store = r
        }
    }])
}, 631608, e => {
    "use strict";
    var t;
    let r, i, s = "2.23.2",
        n = {
            getDocsUrl: ({
                docsBaseUrl: e,
                docsPath: t = "",
                docsSlug: r
            }) => t ? `${e??"https://viem.sh"}${t}${r?`#${r}`:""}` : void 0,
            version: `viem@${s}`
        };
    class o extends Error {
        constructor(e, t = {}) {
            const r = t.cause instanceof o ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                i = t.cause instanceof o && t.cause.docsPath || t.docsPath,
                a = n.getDocsUrl ? .({ ...t,
                    docsPath: i
                });
            super([e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...a ? [`Docs: ${a}`] : [], ...r ? [`Details: ${r}`] : [], ...n.version ? [`Version: ${n.version}`] : []].join("\n"), t.cause ? {
                cause: t.cause
            } : void 0), Object.defineProperty(this, "details", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "docsPath", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "metaMessages", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "shortMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "version", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "BaseError"
            }), this.details = r, this.docsPath = i, this.metaMessages = t.metaMessages, this.name = t.name ? ? this.name, this.shortMessage = e, this.version = s
        }
        walk(e) {
            return function e(t, r) {
                return r ? .(t) ? t : t && "object" == typeof t && "cause" in t && void 0 !== t.cause ? e(t.cause, r) : r ? null : t
            }(this, e)
        }
    }

    function a(e, {
        strict: t = !0
    } = {}) {
        return !!e && "string" == typeof e && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
    }
    class c extends o {
        constructor({
            size: e,
            targetSize: t,
            type: r
        }) {
            super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`, {
                name: "SizeExceedsPaddingSizeError"
            })
        }
    }

    function l(e, {
        dir: t,
        size: r = 32
    } = {}) {
        return "string" == typeof e ? function(e, {
            dir: t,
            size: r = 32
        } = {}) {
            if (null === r) return e;
            let i = e.replace("0x", "");
            if (i.length > 2 * r) throw new c({
                size: Math.ceil(i.length / 2),
                targetSize: r,
                type: "hex"
            });
            return `0x${i["right"===t?"padEnd":"padStart"](2*r,"0")}`
        }(e, {
            dir: t,
            size: r
        }) : function(e, {
            dir: t,
            size: r = 32
        } = {}) {
            if (null === r) return e;
            if (e.length > r) throw new c({
                size: e.length,
                targetSize: r,
                type: "bytes"
            });
            let i = new Uint8Array(r);
            for (let s = 0; s < r; s++) {
                let n = "right" === t;
                i[n ? s : r - s - 1] = e[n ? s : e.length - s - 1]
            }
            return i
        }(e, {
            dir: t,
            size: r
        })
    }
    class h extends o {
        constructor({
            max: e,
            min: t,
            signed: r,
            size: i,
            value: s
        }) {
            super(`Number "${s}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`, {
                name: "IntegerOutOfRangeError"
            })
        }
    }
    class d extends o {
        constructor({
            givenSize: e,
            maxSize: t
        }) {
            super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
                name: "SizeOverflowError"
            })
        }
    }

    function u(e) {
        return a(e, {
            strict: !1
        }) ? Math.ceil((e.length - 2) / 2) : e.length
    }

    function p(e, {
        size: t
    }) {
        if (u(e) > t) throw new d({
            givenSize: u(e),
            maxSize: t
        })
    }

    function g(e, t = {}) {
        let {
            signed: r
        } = t;
        t.size && p(e, {
            size: t.size
        });
        let i = BigInt(e);
        if (!r) return i;
        let s = (e.length - 2) / 2;
        return i <= (1 n << 8 n * BigInt(s) - 1 n) - 1 n ? i : i - BigInt(`0x${"f".padStart(2*s,"f")}`) - 1 n
    }
    let f = Array.from({
        length: 256
    }, (e, t) => t.toString(16).padStart(2, "0"));

    function m(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e ? w(e, t) : "string" == typeof e ? function(e, t = {}) {
            return y(b.encode(e), t)
        }(e, t) : "boolean" == typeof e ? function(e, t = {}) {
            let r = `0x${Number(e)}`;
            return "number" == typeof t.size ? (p(r, {
                size: t.size
            }), l(r, {
                size: t.size
            })) : r
        }(e, t) : y(e, t)
    }

    function y(e, t = {}) {
        let r = "";
        for (let t = 0; t < e.length; t++) r += f[e[t]];
        let i = `0x${r}`;
        return "number" == typeof t.size ? (p(i, {
            size: t.size
        }), l(i, {
            dir: "right",
            size: t.size
        })) : i
    }

    function w(e, t = {}) {
        let r, {
                signed: i,
                size: s
            } = t,
            n = BigInt(e);
        s ? r = i ? (1 n << 8 n * BigInt(s) - 1 n) - 1 n : 2 n ** (8 n * BigInt(s)) - 1 n : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let o = "bigint" == typeof r && i ? -r - 1 n : 0;
        if (r && n > r || n < o) {
            let t = "bigint" == typeof e ? "n" : "";
            throw new h({
                max: r ? `${r}${t}` : void 0,
                min: `${o}${t}`,
                signed: i,
                size: s,
                value: `${e}${t}`
            })
        }
        let a = `0x${(i&&n<0?(1n<<BigInt(8*s))+BigInt(n):n).toString(16)}`;
        return s ? l(a, {
            size: s
        }) : a
    }
    let b = new TextEncoder,
        v = new TextEncoder;

    function E(e) {
        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void 0
    }

    function I(e, t = {}) {
        let r = e;
        t.size && (p(r, {
            size: t.size
        }), r = l(r, {
            dir: "right",
            size: t.size
        }));
        let i = r.slice(2);
        i.length % 2 && (i = `0${i}`);
        let s = i.length / 2,
            n = new Uint8Array(s);
        for (let e = 0, t = 0; e < s; e++) {
            let r = E(i.charCodeAt(t++)),
                s = E(i.charCodeAt(t++));
            if (void 0 === r || void 0 === s) throw new o(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);
            n[e] = 16 * r + s
        }
        return n
    }

    function C(e, t = {}) {
        let r = v.encode(e);
        return "number" == typeof t.size ? (p(r, {
            size: t.size
        }), l(r, {
            dir: "right",
            size: t.size
        })) : r
    }

    function S(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error("positive integer expected, got " + e)
    }

    function x(e, ...t) {
        if (!(e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length)) throw Error("Uint8Array expected of length " + t + ", got length=" + e.length)
    }

    function A(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished) throw Error("Hash#digest() has already been called")
    }
    let N = BigInt(0x100000000 - 1),
        _ = BigInt(32),
        T = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];

    function k(e) {
        for (let r = 0; r < e.length; r++) {
            var t;
            e[r] = (t = e[r]) << 24 & 0xff000000 | t << 8 & 0xff0000 | t >>> 8 & 65280 | t >>> 24 & 255
        }
    }

    function P(e) {
        return "string" == typeof e && (e = function(e) {
            if ("string" != typeof e) throw Error("utf8ToBytes expected string, got " + typeof e);
            return new Uint8Array(new TextEncoder().encode(e))
        }(e)), x(e), e
    }
    class O {
        clone() {
            return this._cloneInto()
        }
    }
    let R = [],
        U = [],
        D = [],
        L = BigInt(0),
        M = BigInt(1),
        B = BigInt(2),
        q = BigInt(7),
        j = BigInt(256),
        $ = BigInt(113);
    for (let e = 0, t = M, r = 1, i = 0; e < 24; e++) {
        [r, i] = [i, (2 * r + 3 * i) % 5], R.push(2 * (5 * i + r)), U.push((e + 1) * (e + 2) / 2 % 64);
        let s = L;
        for (let e = 0; e < 7; e++)(t = (t << M ^ (t >> q) * $) % j) & B && (s ^= M << (M << BigInt(e)) - M);
        D.push(s)
    }
    let [V, z] = function(e, t = !1) {
        let r = new Uint32Array(e.length),
            i = new Uint32Array(e.length);
        for (let s = 0; s < e.length; s++) {
            let {
                h: n,
                l: o
            } = function(e, t = !1) {
                return t ? {
                    h: Number(e & N),
                    l: Number(e >> _ & N)
                } : {
                    h: 0 | Number(e >> _ & N),
                    l: 0 | Number(e & N)
                }
            }(e[s], t);
            [r[s], i[s]] = [n, o]
        }
        return [r, i]
    }(D, !0), F = (e, t, r) => r > 32 ? t << r - 32 | e >>> 64 - r : e << r | t >>> 32 - r, K = (e, t, r) => r > 32 ? e << r - 32 | t >>> 64 - r : t << r | e >>> 32 - r;
    class W extends O {
        constructor(e, t, r, i = !1, s = 24) {
            if (super(), this.blockLen = e, this.suffix = t, this.outputLen = r, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, S(r), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
            this.state = new Uint8Array(200), this.state32 = function(e) {
                return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4))
            }(this.state)
        }
        keccak() {
            T || k(this.state32),
                function(e, t = 24) {
                    let r = new Uint32Array(10);
                    for (let i = 24 - t; i < 24; i++) {
                        for (let t = 0; t < 10; t++) r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                        for (let t = 0; t < 10; t += 2) {
                            let i = (t + 8) % 10,
                                s = (t + 2) % 10,
                                n = r[s],
                                o = r[s + 1],
                                a = F(n, o, 1) ^ r[i],
                                c = K(n, o, 1) ^ r[i + 1];
                            for (let r = 0; r < 50; r += 10) e[t + r] ^= a, e[t + r + 1] ^= c
                        }
                        let t = e[2],
                            s = e[3];
                        for (let r = 0; r < 24; r++) {
                            let i = U[r],
                                n = F(t, s, i),
                                o = K(t, s, i),
                                a = R[r];
                            t = e[a], s = e[a + 1], e[a] = n, e[a + 1] = o
                        }
                        for (let t = 0; t < 50; t += 10) {
                            for (let i = 0; i < 10; i++) r[i] = e[t + i];
                            for (let i = 0; i < 10; i++) e[t + i] ^= ~r[(i + 2) % 10] & r[(i + 4) % 10]
                        }
                        e[0] ^= V[i], e[1] ^= z[i]
                    }
                    r.fill(0)
                }(this.state32, this.rounds), T || k(this.state32), this.posOut = 0, this.pos = 0
        }
        update(e) {
            A(this);
            let {
                blockLen: t,
                state: r
            } = this, i = (e = P(e)).length;
            for (let s = 0; s < i;) {
                let n = Math.min(t - this.pos, i - s);
                for (let t = 0; t < n; t++) r[this.pos++] ^= e[s++];
                this.pos === t && this.keccak()
            }
            return this
        }
        finish() {
            if (this.finished) return;
            this.finished = !0;
            let {
                state: e,
                suffix: t,
                pos: r,
                blockLen: i
            } = this;
            e[r] ^= t, (128 & t) != 0 && r === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak()
        }
        writeInto(e) {
            A(this, !1), x(e), this.finish();
            let t = this.state,
                {
                    blockLen: r
                } = this;
            for (let i = 0, s = e.length; i < s;) {
                this.posOut >= r && this.keccak();
                let n = Math.min(r - this.posOut, s - i);
                e.set(t.subarray(this.posOut, this.posOut + n), i), this.posOut += n, i += n
            }
            return e
        }
        xofInto(e) {
            if (!this.enableXOF) throw Error("XOF is not possible for this instance");
            return this.writeInto(e)
        }
        xof(e) {
            return S(e), this.xofInto(new Uint8Array(e))
        }
        digestInto(e) {
            x(e);
            let t = this.outputLen;
            if (e.length < t) throw Error("digestInto() expects output buffer of length at least " + t);
            if (this.finished) throw Error("digest() was already called");
            return this.writeInto(e), this.destroy(), e
        }
        digest() {
            return this.digestInto(new Uint8Array(this.outputLen))
        }
        destroy() {
            this.destroyed = !0, this.state.fill(0)
        }
        _cloneInto(e) {
            let {
                blockLen: t,
                suffix: r,
                outputLen: i,
                rounds: s,
                enableXOF: n
            } = this;
            return e || (e = new W(t, r, i, n, s)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = s, e.suffix = r, e.outputLen = i, e.enableXOF = n, e.destroyed = this.destroyed, e
        }
    }
    let H = (t = () => new W(136, 1, 32), (r = e => t().update(P(e)).digest()).outputLen = (i = t()).outputLen, r.blockLen = i.blockLen, r.create = () => t(), r);

    function G(e, t) {
        let r = H(a(e, {
            strict: !1
        }) ? function(e, t = {}) {
            return "number" == typeof e || "bigint" == typeof e ? I(w(e, t)) : "boolean" == typeof e ? function(e, t = {}) {
                let r = new Uint8Array(1);
                return (r[0] = Number(e), "number" == typeof t.size) ? (p(r, {
                    size: t.size
                }), l(r, {
                    size: t.size
                })) : r
            }(e, t) : a(e) ? I(e, t) : C(e, t)
        }(e) : e);
        return "bytes" === (t || "hex") ? r : m(r)
    }
    class J extends Map {
        constructor(e) {
            super(), Object.defineProperty(this, "maxSize", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.maxSize = e
        }
        get(e) {
            let t = super.get(e);
            return super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
        }
        set(e, t) {
            if (super.set(e, t), this.maxSize && this.size > this.maxSize) {
                let e = this.keys().next().value;
                e && this.delete(e)
            }
            return this
        }
    }
    let Y = new J(8192);
    async function X({
        hash: t,
        signature: r
    }) {
        let i = a(t) ? t : m(t),
            {
                secp256k1: s
            } = await e.A(471578),
            n = (() => {
                if ("object" == typeof r && "r" in r && "s" in r) {
                    let {
                        r: e,
                        s: t,
                        v: i,
                        yParity: n
                    } = r, o = Q(Number(n ? ? i));
                    return new s.Signature(g(e), g(t)).addRecoveryBit(o)
                }
                let e = a(r) ? r : m(r),
                    t = Q(function(e, t = {}) {
                        return Number(g(e, t))
                    }(`0x${e.slice(130)}`));
                return s.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(t)
            })().recoverPublicKey(i.substring(2)).toHex(!1);
        return `0x${n}`
    }

    function Q(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value")
    }
    async function Z({
        hash: e,
        signature: t
    }) {
        var r;
        let i;
        return r = await X({
                hash: e,
                signature: t
            }), i = G(`0x${r.substring(4)}`).substring(26),
            function(e) {
                if (Y.has(`${e}.undefined`)) return Y.get(`${e}.undefined`);
                let t = e.substring(2).toLowerCase(),
                    r = G(C(t), "bytes"),
                    i = t.split("");
                for (let e = 0; e < 40; e += 2) r[e >> 1] >> 4 >= 8 && i[e] && (i[e] = i[e].toUpperCase()), (15 & r[e >> 1]) >= 8 && i[e + 1] && (i[e + 1] = i[e + 1].toUpperCase());
                let s = `0x${i.join("")}`;
                return Y.set(`${e}.undefined`, s), s
            }(`0x${i}`)
    }
    e.s(["recoverAddress", 0, Z], 631608)
}, 542849, e => {
    "use strict";
    let t, r;
    var i, s = e.i(350461),
        n = e.i(221168),
        o = e.i(602016),
        a = e.i(711790),
        c = e.i(744934),
        l = e.i(386736),
        h = e.i(631608),
        d = e.i(841583),
        u = e.i(77755);
    e.i(73730);
    var p = e.i(187978),
        g = e.i(513011),
        f = e.i(737640),
        m = e.i(145502),
        y = e.i(848522);

    function w(e) {
        let [t, r] = e.split(":");
        return {
            namespace: t,
            reference: r
        }
    }

    function b(e, t) {
        return e.includes(":") ? [e] : t.chains || []
    }
    let v = "react-native",
        E = "node",
        I = "browser";

    function C() {
        return "u" > typeof s.default && "u" > typeof s.default.versions && "u" > typeof s.default.versions.node
    }

    function S() {
        return !(0, c.getDocument)() && !!(0, c.getNavigator)() && "ReactNative" === navigator.product
    }

    function x() {
        return !C() && !!(0, c.getNavigator)() && !!(0, c.getDocument)()
    }

    function A() {
        return S() ? v : C() ? E : x() ? I : "unknown"
    }

    function N(t, r, i) {
        var s;
        let n, a = function() {
                if (A() === v && "u" > typeof(null == e.g ? void 0 : e.g.Platform)) {
                    let {
                        OS: t,
                        Version: r
                    } = e.g.Platform;
                    return [t, r].join("-")
                }
                let t = (0, o.detect)();
                if (null === t) return "unknown";
                let r = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
                return "browser" === t.type ? [r, t.name, t.version].join("-") : [r, t.version].join("-")
            }(),
            l = (n = A()) === I ? [n, (null == (s = (0, c.getLocation)()) ? void 0 : s.host) || "unknown"].join(":") : n;
        return [
            [t, r].join("-"), ["js", i].join("-"), a, l
        ].join("/")
    }

    function _(e, t) {
        return e.filter(e => t.includes(e)).length === e.length
    }

    function T(e, t) {
        if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
        if ("topic" === e.toLowerCase()) {
            if ("string" != typeof t) throw Error('Value must be "string" for expirer target type: topic');
            return `topic:${t}`
        }
        if ("id" === e.toLowerCase()) {
            if ("number" != typeof t) throw Error('Value must be "number" for expirer target type: id');
            return `id:${t}`
        }
        throw Error(`Unknown expirer target type: ${e}`)
    }

    function k(e = [], t = []) {
        return [...new Set([...e, ...t])]
    }
    async function P({
        id: t,
        topic: r,
        wcDeepLink: i
    }) {
        var s, o;
        try {
            if (!i) return;
            let a = "string" == typeof i ? JSON.parse(i) : i,
                l = a ? .href;
            if ("string" != typeof l) return;
            let h = function(e, t, r) {
                    let i = `requestId=${t}&sessionTopic=${r}`;
                    e.endsWith("/") && (e = e.slice(0, -1));
                    let s = `${e}`;
                    if (e.startsWith("https://t.me")) {
                        let t = e.includes("?") ? "&startapp=" : "?startapp=";
                        s = `${s}${t}${function(e,t=!1){let r=n.Buffer.from(e).toString("base64");return t?r.replace(/[=]/g,""):r}(i,!0)}`
                    } else s = `${s}/wc?${i}`;
                    return s
                }(l, t, r),
                d = A();
            if (d === I) {
                let e;
                if (!(null != (s = (0, c.getDocument)()) && s.hasFocus())) return void console.warn("Document does not have focus, skipping deeplink.");
                o = h, e = "_self", ! function() {
                    try {
                        return window.self !== window.top
                    } catch {
                        return !1
                    }
                }() ? ("u" > typeof window && (window.TelegramWebviewProxy || window.Telegram || window.TelegramWebviewProxyProto) || o.startsWith("https://") || o.startsWith("http://")) && (e = "_blank") : e = "_top", window.open(o, e, "noreferrer noopener")
            } else d === v && "u" > typeof(null == e.g ? void 0 : e.g.Linking) && await e.g.Linking.openURL(h)
        } catch (e) {
            console.error(e)
        }
    }
    async function O(e, t) {
        let r = "";
        try {
            if (x() && (r = localStorage.getItem(t))) return r;
            r = await e.getItem(t)
        } catch (e) {
            console.error(e)
        }
        return r
    }

    function R(e) {
        return n.Buffer.from(e, "base64").toString("utf-8")
    }

    function U(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error("positive integer expected, got " + e)
    }

    function D(e, ...t) {
        if (!(e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length)) throw Error("Uint8Array expected of length " + t + ", got length=" + e.length)
    }

    function L(e) {
        if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
        U(e.outputLen), U(e.blockLen)
    }

    function M(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished) throw Error("Hash#digest() has already been called")
    }

    function B(e, t) {
        D(e);
        let r = t.outputLen;
        if (e.length < r) throw Error("digestInto() expects output buffer of length at least " + r)
    }
    let q = BigInt(0x100000000 - 1),
        j = BigInt(32),
        $ = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0;

    function V(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength)
    }

    function z(e, t) {
        return e << 32 - t | e >>> t
    }
    let F = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];

    function K(e) {
        for (let r = 0; r < e.length; r++) {
            var t;
            e[r] = (t = e[r]) << 24 & 0xff000000 | t << 8 & 0xff0000 | t >>> 8 & 65280 | t >>> 24 & 255
        }
    }

    function W(e) {
        return "string" == typeof e && (e = function(e) {
            if ("string" != typeof e) throw Error("utf8ToBytes expected string, got " + typeof e);
            return new Uint8Array(new TextEncoder().encode(e))
        }(e)), D(e), e
    }
    class H {
        clone() {
            return this._cloneInto()
        }
    }

    function G(e) {
        let t = t => e().update(W(t)).digest(),
            r = e();
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
    }

    function J(e = 32) {
        if ($ && "function" == typeof $.getRandomValues) return $.getRandomValues(new Uint8Array(e));
        if ($ && "function" == typeof $.randomBytes) return $.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined")
    }
    let Y = [],
        X = [],
        Q = [],
        Z = BigInt(0),
        ee = BigInt(1),
        et = BigInt(2),
        er = BigInt(7),
        ei = BigInt(256),
        es = BigInt(113);
    for (let e = 0, t = ee, r = 1, i = 0; e < 24; e++) {
        [r, i] = [i, (2 * r + 3 * i) % 5], Y.push(2 * (5 * i + r)), X.push((e + 1) * (e + 2) / 2 % 64);
        let s = Z;
        for (let e = 0; e < 7; e++)(t = (t << ee ^ (t >> er) * es) % ei) & et && (s ^= ee << (ee << BigInt(e)) - ee);
        Q.push(s)
    }
    let [en, eo] = function(e, t = !1) {
        let r = new Uint32Array(e.length),
            i = new Uint32Array(e.length);
        for (let s = 0; s < e.length; s++) {
            let {
                h: n,
                l: o
            } = function(e, t = !1) {
                return t ? {
                    h: Number(e & q),
                    l: Number(e >> j & q)
                } : {
                    h: 0 | Number(e >> j & q),
                    l: 0 | Number(e & q)
                }
            }(e[s], t);
            [r[s], i[s]] = [n, o]
        }
        return [r, i]
    }(Q, !0), ea = (e, t, r) => r > 32 ? t << r - 32 | e >>> 64 - r : e << r | t >>> 32 - r, ec = (e, t, r) => r > 32 ? e << r - 32 | t >>> 64 - r : t << r | e >>> 32 - r;
    class el extends H {
        constructor(e, t, r, i = !1, s = 24) {
            if (super(), this.blockLen = e, this.suffix = t, this.outputLen = r, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, U(r), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
            this.state = new Uint8Array(200), this.state32 = function(e) {
                return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4))
            }(this.state)
        }
        keccak() {
            F || K(this.state32),
                function(e, t = 24) {
                    let r = new Uint32Array(10);
                    for (let i = 24 - t; i < 24; i++) {
                        for (let t = 0; t < 10; t++) r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                        for (let t = 0; t < 10; t += 2) {
                            let i = (t + 8) % 10,
                                s = (t + 2) % 10,
                                n = r[s],
                                o = r[s + 1],
                                a = ea(n, o, 1) ^ r[i],
                                c = ec(n, o, 1) ^ r[i + 1];
                            for (let r = 0; r < 50; r += 10) e[t + r] ^= a, e[t + r + 1] ^= c
                        }
                        let t = e[2],
                            s = e[3];
                        for (let r = 0; r < 24; r++) {
                            let i = X[r],
                                n = ea(t, s, i),
                                o = ec(t, s, i),
                                a = Y[r];
                            t = e[a], s = e[a + 1], e[a] = n, e[a + 1] = o
                        }
                        for (let t = 0; t < 50; t += 10) {
                            for (let i = 0; i < 10; i++) r[i] = e[t + i];
                            for (let i = 0; i < 10; i++) e[t + i] ^= ~r[(i + 2) % 10] & r[(i + 4) % 10]
                        }
                        e[0] ^= en[i], e[1] ^= eo[i]
                    }
                    r.fill(0)
                }(this.state32, this.rounds), F || K(this.state32), this.posOut = 0, this.pos = 0
        }
        update(e) {
            M(this);
            let {
                blockLen: t,
                state: r
            } = this, i = (e = W(e)).length;
            for (let s = 0; s < i;) {
                let n = Math.min(t - this.pos, i - s);
                for (let t = 0; t < n; t++) r[this.pos++] ^= e[s++];
                this.pos === t && this.keccak()
            }
            return this
        }
        finish() {
            if (this.finished) return;
            this.finished = !0;
            let {
                state: e,
                suffix: t,
                pos: r,
                blockLen: i
            } = this;
            e[r] ^= t, (128 & t) != 0 && r === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak()
        }
        writeInto(e) {
            M(this, !1), D(e), this.finish();
            let t = this.state,
                {
                    blockLen: r
                } = this;
            for (let i = 0, s = e.length; i < s;) {
                this.posOut >= r && this.keccak();
                let n = Math.min(r - this.posOut, s - i);
                e.set(t.subarray(this.posOut, this.posOut + n), i), this.posOut += n, i += n
            }
            return e
        }
        xofInto(e) {
            if (!this.enableXOF) throw Error("XOF is not possible for this instance");
            return this.writeInto(e)
        }
        xof(e) {
            return U(e), this.xofInto(new Uint8Array(e))
        }
        digestInto(e) {
            if (B(e, this), this.finished) throw Error("digest() was already called");
            return this.writeInto(e), this.destroy(), e
        }
        digest() {
            return this.digestInto(new Uint8Array(this.outputLen))
        }
        destroy() {
            this.destroyed = !0, this.state.fill(0)
        }
        _cloneInto(e) {
            let {
                blockLen: t,
                suffix: r,
                outputLen: i,
                rounds: s,
                enableXOF: n
            } = this;
            return e || (e = new el(t, r, i, n, s)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = s, e.suffix = r, e.outputLen = i, e.enableXOF = n, e.destroyed = this.destroyed, e
        }
    }
    let eh = G(() => new el(136, 1, 32));

    function ed(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
            r = new TextEncoder().encode(t + e);
        return "0x" + n.Buffer.from(eh(r)).toString("hex")
    }
    async function eu(e, t, r, i, s, n) {
        switch (r.t) {
            case "eip191":
                return await ep(e, t, r.s);
            case "eip1271":
                return await eg(e, t, r.s, i, s, n);
            default:
                throw Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`)
        }
    }
    async function ep(e, t, r) {
        return (await (0, h.recoverAddress)({
            hash: ed(t),
            signature: r
        })).toLowerCase() === e.toLowerCase()
    }
    async function eg(e, t, r, i, s, n) {
        let o = w(i);
        if (!o.namespace || !o.reference) throw Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`);
        try {
            let o = "0x1626ba7e",
                a = r.substring(2),
                c = ed(t).substring(2),
                l = o + c + "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041" + a,
                h = await fetch(`${n||"https://rpc.walletconnect.org/v1"}/?chainId=${i}&projectId=${s}`, {
                    method: "POST",
                    body: JSON.stringify({
                        id: Date.now() + Math.floor(1e3 * Math.random()),
                        jsonrpc: "2.0",
                        method: "eth_call",
                        params: [{
                            to: e,
                            data: l
                        }, "latest"]
                    })
                }),
                {
                    result: d
                } = await h.json();
            return !!d && d.slice(0, o.length).toLowerCase() === o.toLowerCase()
        } catch (e) {
            return console.error("isValidEip1271Signature: ", e), !1
        }
    }
    var ef = Object.defineProperty,
        em = Object.defineProperties,
        ey = Object.getOwnPropertyDescriptors,
        ew = Object.getOwnPropertySymbols,
        eb = Object.prototype.hasOwnProperty,
        ev = Object.prototype.propertyIsEnumerable,
        eE = (e, t, r) => t in e ? ef(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r;
    let eI = e => e ? .split(":"),
        eC = e => {
            let t = e && eI(e);
            if (t) return t[2] + ":" + t[3]
        },
        eS = e => {
            let t = e && eI(e);
            if (t) return t.pop()
        };
    async function ex(e) {
        let {
            cacao: t,
            projectId: r
        } = e, {
            s: i,
            p: s
        } = t, n = eA(s, s.iss), o = eS(s.iss);
        return await eu(o, n, i, eC(s.iss), r)
    }
    let eA = (e, t) => {
        let r = `${e.domain} wants you to sign in with your Ethereum account:`,
            i = eS(t);
        if (!e.aud && !e.uri) throw Error("Either `aud` or `uri` is required to construct the message");
        let s = e.statement || void 0,
            n = `URI: ${e.aud||e.uri}`,
            o = `Version: ${e.version}`,
            a = `Chain ID: ${(e=>{let t=e&&eI(e);if(t)return e.includes("did:pkh:")?t[3]:t[1]})(t)}`,
            c = `Nonce: ${e.nonce}`,
            l = `Issued At: ${e.iat}`,
            h = e.exp ? `Expiration Time: ${e.exp}` : void 0,
            d = e.nbf ? `Not Before: ${e.nbf}` : void 0,
            u = e.requestId ? `Request ID: ${e.requestId}` : void 0,
            p = e.resources ? `Resources:${e.resources.map(e=>`
- ${e}`).join("")}` : void 0,
            g = ek(e.resources);
        return g && (s = function(e = "", t) {
            eN(t);
            let r = "I further authorize the stated URI to perform the following actions on my behalf: ";
            if (e.includes(r)) return e;
            let i = [],
                s = 0;
            Object.keys(t.att).forEach(e => {
                let r = Object.keys(t.att[e]).map(e => ({
                    ability: e.split("/")[0],
                    action: e.split("/")[1]
                }));
                r.sort((e, t) => e.action.localeCompare(t.action));
                let n = {};
                r.forEach(e => {
                    n[e.ability] || (n[e.ability] = []), n[e.ability].push(e.action)
                });
                let o = Object.keys(n).map(t => (s++, `(${s}) '${t}': '${n[t].join("', '")}' for '${e}'.`));
                i.push(o.join(", ").replace(".,", "."))
            });
            let n = i.join(" "),
                o = `${r}${n}`;
            return `${e?e+" ":""}${o}`
        }(s, eT(g))), [r, i, "", s, "", n, o, a, c, l, h, d, u, p].filter(e => null != e).join(`
`)
    };

    function eN(e) {
        if (!e) throw Error("No recap provided, value is undefined");
        if (!e.att) throw Error("No `att` property found");
        let t = Object.keys(e.att);
        if (!(null != t && t.length)) throw Error("No resources found in `att` property");
        t.forEach(t => {
            let r = e.att[t];
            if (Array.isArray(r) || "object" != typeof r) throw Error(`Resource must be an object: ${t}`);
            if (!Object.keys(r).length) throw Error(`Resource object is empty: ${t}`);
            Object.keys(r).forEach(e => {
                let t = r[e];
                if (!Array.isArray(t)) throw Error(`Ability limits ${e} must be an array of objects, found: ${t}`);
                if (!t.length) throw Error(`Value of ${e} is empty array, must be an array with objects`);
                t.forEach(t => {
                    if ("object" != typeof t) throw Error(`Ability limits (${e}) must be an array of objects, found: ${t}`)
                })
            })
        })
    }

    function e_(e) {
        return eN(e), `urn:recap:${n.Buffer.from(JSON.stringify(e)).toString("base64").replace(/=/g,"")}`
    }

    function eT(e) {
        var t;
        let r = (t = e.replace("urn:recap:", ""), JSON.parse(n.Buffer.from(t, "base64").toString("utf-8")));
        return eN(r), r
    }

    function ek(e) {
        if (!e) return;
        let t = e ? .[e.length - 1];
        return t && t.includes("urn:recap:") ? t : void 0
    }

    function eP(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error("positive integer expected, got " + e)
    }

    function eO(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name
    }

    function eR(e, ...t) {
        if (!eO(e)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length)) throw Error("Uint8Array expected of length " + t + ", got length=" + e.length)
    }

    function eU(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished) throw Error("Hash#digest() has already been called")
    }

    function eD(e) {
        if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`)
    }
    let eL = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
    if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]) throw Error("Non little-endian hardware is not supported");

    function eM(e) {
        if ("string" == typeof e) e = function(e) {
            if ("string" != typeof e) throw Error("string expected");
            return new Uint8Array(new TextEncoder().encode(e))
        }(e);
        else if (eO(e)) e = ej(e);
        else throw Error("Uint8Array expected, got " + typeof e);
        return e
    }

    function eB(e, t, r = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e) throw Error("invalid output length, expected " + e + ", got: " + t.length);
        if (r && t.byteOffset % 4 != 0) throw Error("invalid output, must be aligned");
        return t
    }

    function eq(e, t, r, i) {
        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
        let s = BigInt(32),
            n = BigInt(0xffffffff),
            o = Number(r >> s & n),
            a = Number(r & n),
            c = 4 * !!i,
            l = 4 * !i;
        e.setUint32(t + c, o, i), e.setUint32(t + l, a, i)
    }

    function ej(e) {
        return Uint8Array.from(e)
    }

    function e$(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0)
    }
    let eV = e => Uint8Array.from(e.split("").map(e => e.charCodeAt(0))),
        ez = eV("expand 16-byte k"),
        eF = eV("expand 32-byte k"),
        eK = eL(ez),
        eW = eL(eF);

    function eH(e, t) {
        return e << t | e >>> 32 - t
    }

    function eG(e) {
        return e.byteOffset % 4 == 0
    }
    let eJ = 0x100000000 - 1,
        eY = new Uint32Array,
        eX = (e, t) => 255 & e[t++] | (255 & e[t++]) << 8;
    class eQ {
        constructor(e) {
            this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = !1, eR(e = eM(e), 32);
            const t = eX(e, 0),
                r = eX(e, 2),
                i = eX(e, 4),
                s = eX(e, 6),
                n = eX(e, 8),
                o = eX(e, 10),
                a = eX(e, 12),
                c = eX(e, 14);
            this.r[0] = 8191 & t, this.r[1] = (t >>> 13 | r << 3) & 8191, this.r[2] = (r >>> 10 | i << 6) & 7939, this.r[3] = (i >>> 7 | s << 9) & 8191, this.r[4] = (s >>> 4 | n << 12) & 255, this.r[5] = n >>> 1 & 8190, this.r[6] = (n >>> 14 | o << 2) & 8191, this.r[7] = (o >>> 11 | a << 5) & 8065, this.r[8] = (a >>> 8 | c << 8) & 8191, this.r[9] = c >>> 5 & 127;
            for (let t = 0; t < 8; t++) this.pad[t] = eX(e, 16 + 2 * t)
        }
        process(e, t, r = !1) {
            let {
                h: i,
                r: s
            } = this, n = s[0], o = s[1], a = s[2], c = s[3], l = s[4], h = s[5], d = s[6], u = s[7], p = s[8], g = s[9], f = eX(e, t + 0), m = eX(e, t + 2), y = eX(e, t + 4), w = eX(e, t + 6), b = eX(e, t + 8), v = eX(e, t + 10), E = eX(e, t + 12), I = eX(e, t + 14), C = i[0] + (8191 & f), S = i[1] + ((f >>> 13 | m << 3) & 8191), x = i[2] + ((m >>> 10 | y << 6) & 8191), A = i[3] + ((y >>> 7 | w << 9) & 8191), N = i[4] + ((w >>> 4 | b << 12) & 8191), _ = i[5] + (b >>> 1 & 8191), T = i[6] + ((b >>> 14 | v << 2) & 8191), k = i[7] + ((v >>> 11 | E << 5) & 8191), P = i[8] + ((E >>> 8 | I << 8) & 8191), O = i[9] + (I >>> 5 | 2048 * !r), R = 0, U = 0 + C * n + 5 * g * S + 5 * p * x + 5 * u * A + 5 * d * N;
            R = U >>> 13, U &= 8191, U += 5 * h * _ + 5 * l * T + 5 * c * k + 5 * a * P + 5 * o * O, R += U >>> 13, U &= 8191;
            let D = R + C * o + S * n + 5 * g * x + 5 * p * A + 5 * u * N;
            R = D >>> 13, D &= 8191, D += 5 * d * _ + 5 * h * T + 5 * l * k + 5 * c * P + 5 * a * O, R += D >>> 13, D &= 8191;
            let L = R + C * a + S * o + x * n + 5 * g * A + 5 * p * N;
            R = L >>> 13, L &= 8191, L += 5 * u * _ + 5 * d * T + 5 * h * k + 5 * l * P + 5 * c * O, R += L >>> 13, L &= 8191;
            let M = R + C * c + S * a + x * o + A * n + 5 * g * N;
            R = M >>> 13, M &= 8191, M += 5 * p * _ + 5 * u * T + 5 * d * k + 5 * h * P + 5 * l * O, R += M >>> 13, M &= 8191;
            let B = R + C * l + S * c + x * a + A * o + N * n;
            R = B >>> 13, B &= 8191, B += 5 * g * _ + 5 * p * T + 5 * u * k + 5 * d * P + 5 * h * O, R += B >>> 13, B &= 8191;
            let q = R + C * h + S * l + x * c + A * a + N * o;
            R = q >>> 13, q &= 8191, q += _ * n + 5 * g * T + 5 * p * k + 5 * u * P + 5 * d * O, R += q >>> 13, q &= 8191;
            let j = R + C * d + S * h + x * l + A * c + N * a;
            R = j >>> 13, j &= 8191, j += _ * o + T * n + 5 * g * k + 5 * p * P + 5 * u * O, R += j >>> 13, j &= 8191;
            let $ = R + C * u + S * d + x * h + A * l + N * c;
            R = $ >>> 13, $ &= 8191, $ += _ * a + T * o + k * n + 5 * g * P + 5 * p * O, R += $ >>> 13, $ &= 8191;
            let V = R + C * p + S * u + x * d + A * h + N * l;
            R = V >>> 13, V &= 8191, V += _ * c + T * a + k * o + P * n + 5 * g * O, R += V >>> 13, V &= 8191;
            let z = R + C * g + S * p + x * u + A * d + N * h;
            R = z >>> 13, z &= 8191, z += _ * l + T * c + k * a + P * o + O * n, R += z >>> 13, z &= 8191, U = 8191 & (R = (R = (R << 2) + R | 0) + U | 0), R >>>= 13, D += R, i[0] = U, i[1] = D, i[2] = L, i[3] = M, i[4] = B, i[5] = q, i[6] = j, i[7] = $, i[8] = V, i[9] = z
        }
        finalize() {
            let {
                h: e,
                pad: t
            } = this, r = new Uint16Array(10), i = e[1] >>> 13;
            e[1] &= 8191;
            for (let t = 2; t < 10; t++) e[t] += i, i = e[t] >>> 13, e[t] &= 8191;
            e[0] += 5 * i, i = e[0] >>> 13, e[0] &= 8191, e[1] += i, i = e[1] >>> 13, e[1] &= 8191, e[2] += i, r[0] = e[0] + 5, i = r[0] >>> 13, r[0] &= 8191;
            for (let t = 1; t < 10; t++) r[t] = e[t] + i, i = r[t] >>> 13, r[t] &= 8191;
            r[9] -= 8192;
            let s = (1 ^ i) - 1;
            for (let e = 0; e < 10; e++) r[e] &= s;
            s = ~s;
            for (let t = 0; t < 10; t++) e[t] = e[t] & s | r[t];
            e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
            let n = e[0] + t[0];
            e[0] = 65535 & n;
            for (let r = 1; r < 8; r++) n = (e[r] + t[r] | 0) + (n >>> 16) | 0, e[r] = 65535 & n;
            e$(r)
        }
        update(e) {
            eU(this);
            let {
                buffer: t,
                blockLen: r
            } = this, i = (e = eM(e)).length;
            for (let s = 0; s < i;) {
                let n = Math.min(r - this.pos, i - s);
                if (n === r) {
                    for (; r <= i - s; s += r) this.process(e, s);
                    continue
                }
                t.set(e.subarray(s, s + n), this.pos), this.pos += n, s += n, this.pos === r && (this.process(t, 0, !1), this.pos = 0)
            }
            return this
        }
        destroy() {
            e$(this.h, this.r, this.buffer, this.pad)
        }
        digestInto(e) {
            eU(this),
                function(e, t) {
                    eR(e);
                    let r = t.outputLen;
                    if (e.length < r) throw Error("digestInto() expects output buffer of length at least " + r)
                }(e, this), this.finished = !0;
            let {
                buffer: t,
                h: r
            } = this, {
                pos: i
            } = this;
            if (i) {
                for (t[i++] = 1; i < 16; i++) t[i] = 0;
                this.process(t, 0, !0)
            }
            this.finalize();
            let s = 0;
            for (let t = 0; t < 8; t++) e[s++] = r[t] >>> 0, e[s++] = r[t] >>> 8;
            return e
        }
        digest() {
            let {
                buffer: e,
                outputLen: t
            } = this;
            this.digestInto(e);
            let r = e.slice(0, t);
            return this.destroy(), r
        }
    }
    let eZ = (i = e => new eQ(e), (t = (e, t) => i(t).update(eM(e)).digest()).outputLen = (r = i(new Uint8Array(32))).outputLen, t.blockLen = r.blockLen, t.create = e => i(e), t),
        e0 = function(e, t) {
            let {
                allowShortKeys: r,
                extendNonceFn: i,
                counterLength: s,
                counterRight: n,
                rounds: o
            } = function(e, t) {
                if (null == t || "object" != typeof t) throw Error("options must be defined");
                return Object.assign(e, t)
            }({
                allowShortKeys: !1,
                counterLength: 8,
                counterRight: !1,
                rounds: 20
            }, t);
            if ("function" != typeof e) throw Error("core must be a function");
            return eP(s), eP(o), eD(n), eD(r), (t, a, c, l, h = 0) => {
                eR(t), eR(a), eR(c);
                let d = c.length;
                if (void 0 === l && (l = new Uint8Array(d)), eR(l), eP(h), h < 0 || h >= eJ) throw Error("arx: counter overflow");
                if (l.length < d) throw Error(`arx: output (${l.length}) is shorter than data (${d})`);
                let u = [],
                    p = t.length,
                    g, f;
                if (32 === p) u.push(g = ej(t)), f = eW;
                else if (16 === p && r)(g = new Uint8Array(32)).set(t), g.set(t, 16), f = eK, u.push(g);
                else throw Error(`arx: invalid 32-byte key, got length=${p}`);
                eG(a) || u.push(a = ej(a));
                let m = eL(g);
                if (i) {
                    if (24 !== a.length) throw Error("arx: extended nonce must be 24 bytes");
                    i(f, m, eL(a.subarray(0, 16)), m), a = a.subarray(16)
                }
                let y = 16 - s;
                if (y !== a.length) throw Error(`arx: nonce must be ${y} or 16 bytes`);
                if (12 !== y) {
                    let e = new Uint8Array(12);
                    e.set(a, n ? 0 : 12 - a.length), a = e, u.push(a)
                }
                return function(e, t, r, i, s, n, o, a) {
                    let c = s.length,
                        l = new Uint8Array(64),
                        h = eL(l),
                        d = eG(s) && eG(n),
                        u = d ? eL(s) : eY,
                        p = d ? eL(n) : eY;
                    for (let g = 0; g < c; o++) {
                        if (e(t, r, i, h, o, a), o >= eJ) throw Error("arx: counter overflow");
                        let f = Math.min(64, c - g);
                        if (d && 64 === f) {
                            let e = g / 4;
                            if (g % 4 != 0) throw Error("arx: invalid block position");
                            for (let t = 0, r; t < 16; t++) p[r = e + t] = u[r] ^ h[t];
                            g += 64;
                            continue
                        }
                        for (let e = 0, t; e < f; e++) n[t = g + e] = s[t] ^ l[e];
                        g += f
                    }
                }(e, f, m, eL(a), c, l, h, o), e$(...u), l
            }
        }(function(e, t, r, i, s, n = 20) {
            let o = e[0],
                a = e[1],
                c = e[2],
                l = e[3],
                h = t[0],
                d = t[1],
                u = t[2],
                p = t[3],
                g = t[4],
                f = t[5],
                m = t[6],
                y = t[7],
                w = r[0],
                b = r[1],
                v = r[2],
                E = o,
                I = a,
                C = c,
                S = l,
                x = h,
                A = d,
                N = u,
                _ = p,
                T = g,
                k = f,
                P = m,
                O = y,
                R = s,
                U = w,
                D = b,
                L = v;
            for (let e = 0; e < n; e += 2) T = T + (R = eH(R ^ (E = E + x | 0), 16)) | 0, E = E + (x = eH(x ^ T, 12)) | 0, T = T + (R = eH(R ^ E, 8)) | 0, x = eH(x ^ T, 7), k = k + (U = eH(U ^ (I = I + A | 0), 16)) | 0, I = I + (A = eH(A ^ k, 12)) | 0, k = k + (U = eH(U ^ I, 8)) | 0, A = eH(A ^ k, 7), P = P + (D = eH(D ^ (C = C + N | 0), 16)) | 0, C = C + (N = eH(N ^ P, 12)) | 0, P = P + (D = eH(D ^ C, 8)) | 0, N = eH(N ^ P, 7), O = O + (L = eH(L ^ (S = S + _ | 0), 16)) | 0, S = S + (_ = eH(_ ^ O, 12)) | 0, O = O + (L = eH(L ^ S, 8)) | 0, _ = eH(_ ^ O, 7), P = P + (L = eH(L ^ (E = E + A | 0), 16)) | 0, E = E + (A = eH(A ^ P, 12)) | 0, P = P + (L = eH(L ^ E, 8)) | 0, A = eH(A ^ P, 7), O = O + (R = eH(R ^ (I = I + N | 0), 16)) | 0, I = I + (N = eH(N ^ O, 12)) | 0, O = O + (R = eH(R ^ I, 8)) | 0, N = eH(N ^ O, 7), T = T + (U = eH(U ^ (C = C + _ | 0), 16)) | 0, C = C + (_ = eH(_ ^ T, 12)) | 0, T = T + (U = eH(U ^ C, 8)) | 0, _ = eH(_ ^ T, 7), k = k + (D = eH(D ^ (S = S + x | 0), 16)) | 0, S = S + (x = eH(x ^ k, 12)) | 0, k = k + (D = eH(D ^ S, 8)) | 0, x = eH(x ^ k, 7);
            let M = 0;
            i[M++] = o + E | 0, i[M++] = a + I | 0, i[M++] = c + C | 0, i[M++] = l + S | 0, i[M++] = h + x | 0, i[M++] = d + A | 0, i[M++] = u + N | 0, i[M++] = p + _ | 0, i[M++] = g + T | 0, i[M++] = f + k | 0, i[M++] = m + P | 0, i[M++] = y + O | 0, i[M++] = s + R | 0, i[M++] = w + U | 0, i[M++] = b + D | 0, i[M++] = v + L | 0
        }, {
            counterRight: !1,
            counterLength: 4,
            allowShortKeys: !1
        }),
        e1 = new Uint8Array(16),
        e2 = (e, t) => {
            e.update(t);
            let r = t.length % 16;
            r && e.update(e1.subarray(r))
        },
        e5 = new Uint8Array(32);

    function e3(e, t, r, i, s) {
        let n = e(t, r, e5),
            o = eZ.create(n);
        s && e2(o, s), e2(o, i);
        let a = new Uint8Array(16),
            c = new DataView(a.buffer, a.byteOffset, a.byteLength);
        eq(c, 0, BigInt(s ? s.length : 0), !0), eq(c, 8, BigInt(i.length), !0), o.update(a);
        let l = o.digest();
        return e$(n, a), l
    }
    let e8 = ((e, t) => {
        function r(i, ...s) {
            if (eR(i), void 0 !== e.nonceLength) {
                let t = s[0];
                if (!t) throw Error("nonce / iv required");
                e.varSizeNonce ? eR(t) : eR(t, e.nonceLength)
            }
            let n = e.tagLength;
            n && void 0 !== s[1] && eR(s[1]);
            let o = t(i, ...s),
                a = (e, t) => {
                    if (void 0 !== t) {
                        if (2 !== e) throw Error("cipher output not supported");
                        eR(t)
                    }
                },
                c = !1;
            return {
                encrypt(e, t) {
                    if (c) throw Error("cannot encrypt() twice with same key + nonce");
                    return c = !0, eR(e), a(o.encrypt.length, t), o.encrypt(e, t)
                },
                decrypt(e, t) {
                    if (eR(e), n && e.length < n) throw Error("invalid ciphertext length: smaller than tagLength=" + n);
                    return a(o.decrypt.length, t), o.decrypt(e, t)
                }
            }
        }
        return Object.assign(r, e), r
    })({
        blockSize: 64,
        nonceLength: 12,
        tagLength: 16
    }, (e, t, r) => ({
        encrypt(i, s) {
            let n = i.length;
            (s = eB(n + 16, s, !1)).set(i);
            let o = s.subarray(0, -16);
            e0(e, t, o, o, 1);
            let a = e3(e0, e, t, o, r);
            return s.set(a, n), e$(a), s
        },
        decrypt(i, s) {
            s = eB(i.length - 16, s, !1);
            let n = i.subarray(0, -16),
                o = i.subarray(-16),
                a = e3(e0, e, t, n, r);
            if (! function(e, t) {
                    if (e.length !== t.length) return !1;
                    let r = 0;
                    for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                    return 0 === r
                }(o, a)) throw Error("invalid tag");
            return s.set(i.subarray(0, -16)), e0(e, t, s, s, 1), e$(a), s
        }
    }));
    class e6 extends H {
        constructor(e, t) {
            super(), this.finished = !1, this.destroyed = !1, L(e);
            const r = W(t);
            if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
            this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
            const i = this.blockLen,
                s = new Uint8Array(i);
            s.set(r.length > i ? e.create().update(r).digest() : r);
            for (let e = 0; e < s.length; e++) s[e] ^= 54;
            this.iHash.update(s), this.oHash = e.create();
            for (let e = 0; e < s.length; e++) s[e] ^= 106;
            this.oHash.update(s), s.fill(0)
        }
        update(e) {
            return M(this), this.iHash.update(e), this
        }
        digestInto(e) {
            M(this), D(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
        }
        digest() {
            let e = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(e), e
        }
        _cloneInto(e) {
            e || (e = Object.create(Object.getPrototypeOf(this), {}));
            let {
                oHash: t,
                iHash: r,
                finished: i,
                destroyed: s,
                blockLen: n,
                outputLen: o
            } = this;
            return e.finished = i, e.destroyed = s, e.blockLen = n, e.outputLen = o, e.oHash = t._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e
        }
        destroy() {
            this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
        }
    }
    let e4 = (e, t, r) => new e6(e, t).update(r).digest();
    e4.create = (e, t) => new e6(e, t);
    let e9 = new Uint8Array([0]),
        e7 = new Uint8Array;
    class te extends H {
        constructor(e, t, r, i) {
            super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = V(this.buffer)
        }
        update(e) {
            M(this);
            let {
                view: t,
                buffer: r,
                blockLen: i
            } = this, s = (e = W(e)).length;
            for (let n = 0; n < s;) {
                let o = Math.min(i - this.pos, s - n);
                if (o === i) {
                    let t = V(e);
                    for (; i <= s - n; n += i) this.process(t, n);
                    continue
                }
                r.set(e.subarray(n, n + o), this.pos), this.pos += o, n += o, this.pos === i && (this.process(t, 0), this.pos = 0)
            }
            return this.length += e.length, this.roundClean(), this
        }
        digestInto(e) {
            M(this), B(e, this), this.finished = !0;
            let {
                buffer: t,
                view: r,
                blockLen: i,
                isLE: s
            } = this, {
                pos: n
            } = this;
            t[n++] = 128, this.buffer.subarray(n).fill(0), this.padOffset > i - n && (this.process(r, 0), n = 0);
            for (let e = n; e < i; e++) t[e] = 0;
            (function(e, t, r, i) {
                if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
                let s = BigInt(32),
                    n = BigInt(0xffffffff),
                    o = Number(r >> s & n),
                    a = Number(r & n),
                    c = 4 * !!i,
                    l = 4 * !i;
                e.setUint32(t + c, o, i), e.setUint32(t + l, a, i)
            })(r, i - 8, BigInt(8 * this.length), s), this.process(r, 0);
            let o = V(e),
                a = this.outputLen;
            if (a % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
            let c = a / 4,
                l = this.get();
            if (c > l.length) throw Error("_sha2: outputLen bigger than state");
            for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], s)
        }
        digest() {
            let {
                buffer: e,
                outputLen: t
            } = this;
            this.digestInto(e);
            let r = e.slice(0, t);
            return this.destroy(), r
        }
        _cloneInto(e) {
            e || (e = new this.constructor), e.set(...this.get());
            let {
                blockLen: t,
                buffer: r,
                length: i,
                finished: s,
                destroyed: n,
                pos: o
            } = this;
            return e.length = i, e.pos = o, e.finished = s, e.destroyed = n, i % t && e.buffer.set(r), e
        }
    }
    let tt = new Uint32Array([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]),
        tr = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]),
        ti = new Uint32Array(64);
    class ts extends te {
        constructor() {
            super(64, 32, 8, !1), this.A = 0 | tr[0], this.B = 0 | tr[1], this.C = 0 | tr[2], this.D = 0 | tr[3], this.E = 0 | tr[4], this.F = 0 | tr[5], this.G = 0 | tr[6], this.H = 0 | tr[7]
        }
        get() {
            let {
                A: e,
                B: t,
                C: r,
                D: i,
                E: s,
                F: n,
                G: o,
                H: a
            } = this;
            return [e, t, r, i, s, n, o, a]
        }
        set(e, t, r, i, s, n, o, a) {
            this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | i, this.E = 0 | s, this.F = 0 | n, this.G = 0 | o, this.H = 0 | a
        }
        process(e, t) {
            for (let r = 0; r < 16; r++, t += 4) ti[r] = e.getUint32(t, !1);
            for (let e = 16; e < 64; e++) {
                let t = ti[e - 15],
                    r = ti[e - 2],
                    i = z(t, 7) ^ z(t, 18) ^ t >>> 3,
                    s = z(r, 17) ^ z(r, 19) ^ r >>> 10;
                ti[e] = s + ti[e - 7] + i + ti[e - 16] | 0
            }
            let {
                A: r,
                B: i,
                C: s,
                D: n,
                E: o,
                F: a,
                G: c,
                H: l
            } = this;
            for (let e = 0; e < 64; e++) {
                var h, d, u, p;
                let t = l + (z(o, 6) ^ z(o, 11) ^ z(o, 25)) + ((h = o) & a ^ ~h & c) + tt[e] + ti[e] | 0,
                    g = (z(r, 2) ^ z(r, 13) ^ z(r, 22)) + ((d = r) & (u = i) ^ d & (p = s) ^ u & p) | 0;
                l = c, c = a, a = o, o = n + t | 0, n = s, s = i, i = r, r = t + g | 0
            }
            r = r + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, n = n + this.D | 0, o = o + this.E | 0, a = a + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(r, i, s, n, o, a, c, l)
        }
        roundClean() {
            ti.fill(0)
        }
        destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
        }
    }
    let tn = G(() => new ts),
        to = BigInt(0);

    function ta(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name
    }

    function tc(e) {
        if (!ta(e)) throw Error("Uint8Array expected")
    }
    let tl = Array.from({
        length: 256
    }, (e, t) => t.toString(16).padStart(2, "0"));

    function th(e) {
        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void 0
    }

    function td(e) {
        if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
        let t = e.length,
            r = t / 2;
        if (t % 2) throw Error("hex string expected, got unpadded hex of length " + t);
        let i = new Uint8Array(r);
        for (let t = 0, s = 0; t < r; t++, s += 2) {
            let r = th(e.charCodeAt(s)),
                n = th(e.charCodeAt(s + 1));
            if (void 0 === r || void 0 === n) throw Error('hex string expected, got non-hex character "' + (e[s] + e[s + 1]) + '" at index ' + s);
            i[t] = 16 * r + n
        }
        return i
    }

    function tu(e) {
        return tc(e),
            function(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                return "" === e ? to : BigInt("0x" + e)
            }(function(e) {
                tc(e);
                let t = "";
                for (let r = 0; r < e.length; r++) t += tl[e[r]];
                return t
            }(Uint8Array.from(e).reverse()))
    }

    function tp(e, t, r) {
        let i;
        if ("string" == typeof t) try {
                i = td(t)
            } catch (t) {
                throw Error(e + " must be hex string or Uint8Array, cause: " + t)
            } else if (ta(t)) i = Uint8Array.from(t);
            else throw Error(e + " must be hex string or Uint8Array");
        let s = i.length;
        if ("number" == typeof r && s !== r) throw Error(e + " of length " + r + " expected, got " + s);
        return i
    }
    let tg = e => "bigint" == typeof e && to <= e;

    function tf(e, t, r, i) {
        if (!(tg(t) && tg(r) && tg(i)) || !(r <= t) || !(t < i)) throw Error("expected valid " + e + ": " + r + " <= n < " + i + ", got " + t)
    }
    let tm = {
            bigint: e => "bigint" == typeof e,
            function: e => "function" == typeof e,
            boolean: e => "boolean" == typeof e,
            string: e => "string" == typeof e,
            stringOrUint8Array: e => "string" == typeof e || ta(e),
            isSafeInteger: e => Number.isSafeInteger(e),
            array: e => Array.isArray(e),
            field: (e, t) => t.Fp.isValid(e),
            hash: e => "function" == typeof e && Number.isSafeInteger(e.outputLen)
        },
        ty = BigInt(0),
        tw = BigInt(1);

    function tb(e, t) {
        let r = e % t;
        return r >= ty ? r : t + r
    }

    function tv(e, t, r) {
        let i = e;
        for (; t-- > ty;) i *= i, i %= r;
        return i
    }
    BigInt(0), BigInt(1), BigInt(0), BigInt(1), BigInt(2), BigInt(8);
    let tE = BigInt(0),
        tI = BigInt(1),
        tC = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
    BigInt(0);
    let tS = BigInt(1),
        tx = BigInt(2),
        tA = BigInt(3),
        tN = BigInt(5);
    BigInt(8);
    let t_ = function(e) {
            let t = (function(e, t, r = {}) {
                    let i = (t, r, i) => {
                        let s = tm[r];
                        if ("function" != typeof s) throw Error("invalid validator function");
                        let n = e[t];
                        if (!(i && void 0 === n) && !s(n, e)) throw Error("param " + String(t) + " is invalid. Expected " + r + ", got " + n)
                    };
                    for (let [e, r] of Object.entries(t)) i(e, r, !1);
                    for (let [e, t] of Object.entries(r)) i(e, t, !0)
                }(e, {
                    a: "bigint"
                }, {
                    montgomeryBits: "isSafeInteger",
                    nByteLength: "isSafeInteger",
                    adjustScalarBytes: "function",
                    domain: "function",
                    powPminus2: "function",
                    Gu: "bigint"
                }), Object.freeze({ ...e
                })),
                {
                    P: r
                } = t,
                i = e => tb(e, r),
                s = t.montgomeryBits,
                n = Math.ceil(s / 8),
                o = t.nByteLength,
                a = t.adjustScalarBytes || (e => e),
                c = t.powPminus2 || (e => (function(e, t, r) {
                    if (t < ty) throw Error("invalid exponent, negatives unsupported");
                    if (r <= ty) throw Error("invalid modulus");
                    if (r === tw) return ty;
                    let i = tw;
                    for (; t > ty;) t & tw && (i = i * e % r), e = e * e % r, t >>= tw;
                    return i
                })(e, r - BigInt(2), r));

            function l(e, t, r) {
                let s = i(e * (t - r));
                return [t = i(t - s), r = i(r + s)]
            }
            let h = (t.a - BigInt(2)) / BigInt(4);

            function d(e) {
                var t;
                return t = i(e), td(t.toString(16).padStart(2 * n, "0")).reverse()
            }

            function u(e, t) {
                let u, p = function(e, t) {
                    tf("u", e, tE, r), tf("scalar", t, tE, r);
                    let n = tI,
                        o = tE,
                        a = e,
                        d = tI,
                        u = tE,
                        p;
                    for (let r = BigInt(s - 1); r >= tE; r--) {
                        let s = t >> r & tI;
                        u ^= s, n = (p = l(u, n, a))[0], a = p[1], o = (p = l(u, o, d))[0], d = p[1], u = s;
                        let c = n + o,
                            g = i(c * c),
                            f = n - o,
                            m = i(f * f),
                            y = g - m,
                            w = a + d,
                            b = i((a - d) * c),
                            v = i(w * f),
                            E = b + v,
                            I = b - v;
                        a = i(E * E), d = i(e * i(I * I)), n = i(g * m), o = i(y * (g + i(h * y)))
                    }
                    return n = (p = l(u, n, a))[0], a = p[1], o = (p = l(u, o, d))[0], d = p[1], i(n * c(o))
                }((u = tp("u coordinate", t, n), 32 === o && (u[31] &= 127), tu(u)), function(e) {
                    let t = tp("scalar", e),
                        r = t.length;
                    if (r !== n && r !== o) throw Error("invalid scalar, expected " + ("" + n + " or ") + o + " bytes, got " + r);
                    return tu(a(t))
                }(e));
                if (p === tE) throw Error("invalid private or public key received");
                return d(p)
            }
            let p = d(t.Gu);

            function g(e) {
                return u(e, p)
            }
            return {
                scalarMult: u,
                scalarMultBase: g,
                getSharedSecret: (e, t) => u(e, t),
                getPublicKey: e => g(e),
                utils: {
                    randomPrivateKey: () => t.randomBytes(t.nByteLength)
                },
                GuBytes: p
            }
        }({
            P: tC,
            a: BigInt(486662),
            montgomeryBits: 255,
            nByteLength: 32,
            Gu: BigInt(9),
            powPminus2: e => {
                let t, r, i, s, n, o, a, c, l, h, d, u, p, g, {
                    pow_p_5_8: f,
                    b2: m
                } = (t = BigInt(10), r = BigInt(20), i = BigInt(40), s = BigInt(80), o = tv(n = e * e % tC * e % tC, tx, tC) * n % tC, a = tv(o, tS, tC) * e % tC, c = tv(a, tN, tC) * a % tC, l = tv(c, t, tC) * c % tC, h = tv(l, r, tC) * l % tC, d = tv(h, i, tC) * h % tC, u = tv(d, s, tC) * d % tC, p = tv(u, s, tC) * d % tC, g = tv(p, t, tC) * c % tC, {
                    pow_p_5_8: tv(g, tx, tC) * e % tC,
                    b2: n
                });
                return tb(tv(f, tA, tC) * m, tC)
            },
            adjustScalarBytes: function(e) {
                return e[0] &= 248, e[31] &= 127, e[31] |= 64, e
            },
            randomBytes: J
        }),
        tT = "base10",
        tk = "base16",
        tP = "base64pad",
        tO = "utf8";

    function tR(e) {
        return (0, g.fromString)(`${e}`, tT)
    }

    function tU(e) {
        return Number((0, p.toString)(e, tT))
    }

    function tD(e) {
        let {
            encoding: t = tP
        } = e;
        if (2 === tU(e.type)) return (0, p.toString)((0, f.concat)([e.type, e.sealed]), t);
        if (1 === tU(e.type)) {
            if (typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
            return (0, p.toString)((0, f.concat)([e.type, e.senderPublicKey, e.iv, e.sealed]), t)
        }
        return (0, p.toString)((0, f.concat)([e.type, e.iv, e.sealed]), t)
    }

    function tL(e) {
        let {
            encoded: t,
            encoding: r = tP
        } = e, i = (0, g.fromString)(t, r), s = i.slice(0, 1);
        if (1 === tU(s)) {
            let e = i.slice(1, 33),
                t = i.slice(33, 45);
            return {
                type: s,
                sealed: i.slice(45),
                iv: t,
                senderPublicKey: e
            }
        }
        if (2 === tU(s)) return {
            type: s,
            sealed: i.slice(1),
            iv: J(12)
        };
        let n = i.slice(1, 13);
        return {
            type: s,
            sealed: i.slice(13),
            iv: n
        }
    }

    function tM(e) {
        let t = e ? .type || 0;
        if (1 === t) {
            if (typeof e ? .senderPublicKey > "u") throw Error("missing sender public key");
            if (typeof e ? .receiverPublicKey > "u") throw Error("missing receiver public key")
        }
        return {
            type: t,
            senderPublicKey: e ? .senderPublicKey,
            receiverPublicKey: e ? .receiverPublicKey
        }
    }

    function tB(e) {
        let t = [];
        return e.forEach(e => {
            let [r, i] = e.split(":");
            t.push(`${r}:${i}`)
        }), t
    }

    function tq(e) {
        return e.includes(":")
    }
    Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
    let tj = {
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
        t$ = {
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

    function tV(e, t) {
        let {
            message: r,
            code: i
        } = t$[e];
        return {
            message: t ? `${r} ${t}` : r,
            code: i
        }
    }

    function tz(e, t) {
        let {
            message: r,
            code: i
        } = tj[e];
        return {
            message: t ? `${r} ${t}` : r,
            code: i
        }
    }

    function tF(e, t) {
        return !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
    }

    function tK(e) {
        return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
    }

    function tW(e) {
        return typeof e > "u"
    }

    function tH(e, t) {
        return !!(t && tW(e)) || "string" == typeof e && !!e.trim().length
    }

    function tG(e, t) {
        return !!(t && tW(e)) || "number" == typeof e && !isNaN(e)
    }

    function tJ(e) {
        return !!(tH(e, !1) && e.includes(":")) && 2 === e.split(":").length
    }

    function tY(e) {
        let t = !0;
        return tF(e) ? e.length && (t = e.every(e => tH(e, !1))) : t = !1, t
    }

    function tX(e, t) {
        let r = null;
        return Object.values(e).forEach(e => {
            var i;
            let s;
            if (r) return;
            let n = (i = `${t}, namespace`, s = null, tY(e ? .methods) ? tY(e ? .events) || (s = tz("UNSUPPORTED_EVENTS", `${i}, events should be an array of strings or empty array for no events`)) : s = tz("UNSUPPORTED_METHODS", `${i}, methods should be an array of strings or empty array for no methods`), s);
            n && (r = n)
        }), r
    }

    function tQ(e) {
        return tH(e.protocol, !0)
    }

    function tZ(e) {
        return [...new Set(e.map(e => e.includes(":") ? e.split(":")[0] : e))]
    }
    async function t0() {
        if (S() && null != e.g && e.g.NetInfo) {
            let t = await (null == e.g ? void 0 : e.g.NetInfo.fetch());
            return t ? .isConnected
        }
        return !0
    }
    let t1 = {};
    e.s(["BASE16", 0, tk, "BASE64", 0, tP, "BASE64URL", 0, "base64url", "MemoryStore", 0, class {
        static get(e) {
            return t1[e]
        }
        static set(e, t) {
            t1[e] = t
        }
        static delete(e) {
            delete t1[e]
        }
    }, "TYPE_1", 0, 1, "TYPE_2", 0, 2, "buildNamespacesFromAuth", 0, function(e, t) {
        var r;
        let i, s = (r = t = t.map(e => e.replace("did:pkh:", "")), i = {}, r ? .forEach(e => {
            var t;
            let [r, s] = e.split(":");
            i[r] || (i[r] = {
                accounts: [],
                chains: [],
                events: [],
                methods: []
            }), i[r].accounts.push(e), null == (t = i[r].chains) || t.push(`${r}:${s}`)
        }), i);
        for (let [t, r] of Object.entries(s)) r.methods ? r.methods = k(r.methods, e) : r.methods = e, r.events = ["chainChanged", "accountsChanged"];
        return s
    }, "calcExpiry", 0, function(e, t) {
        return (0, a.fromMiliseconds)((t || Date.now()) + (0, a.toMiliseconds)(e))
    }, "createDelayedPromise", 0, function(e = a.FIVE_MINUTES, t) {
        let r, i, s, n, o = (0, a.toMiliseconds)(e || a.FIVE_MINUTES);
        return {
            resolve: e => {
                s && r && (clearTimeout(s), r(e), n = Promise.resolve(e))
            },
            reject: e => {
                s && i && (clearTimeout(s), i(e))
            },
            done: () => new Promise((e, a) => {
                if (n) return e(n);
                s = setTimeout(() => {
                    let e = Error(t);
                    n = Promise.reject(e), a(e)
                }, o), r = e, i = a
            })
        }
    }, "createEncodedRecap", 0, function(e, t, r) {
        return e_(function(e, t, r, i = {}) {
            return r ? .sort((e, t) => e.localeCompare(t)), {
                att: {
                    [e]: function(e, t, r = {}) {
                        return Object.assign({}, ...(t = t ? .sort((e, t) => e.localeCompare(t))).map(t => ({
                            [`${e}/${t}`]: [r]
                        })))
                    }(t, r, i)
                }
            }
        }(e, t, r))
    }, "createExpiringPromise", 0, function(e, t, r) {
        return new Promise(async (i, s) => {
            let n = setTimeout(() => s(Error(r)), t);
            try {
                let t = await e;
                i(t)
            } catch (e) {
                s(e)
            }
            clearTimeout(n)
        })
    }, "decodeTypeByte", 0, tU, "decodeTypeTwoEnvelope", 0, function(e, t) {
        let {
            sealed: r
        } = tL({
            encoded: e,
            encoding: t
        });
        return (0, p.toString)(r, tO)
    }, "decrypt", 0, function(e) {
        let t = (0, g.fromString)(e.symKey, tk),
            {
                sealed: r,
                iv: i
            } = tL(e),
            s = e8(t, i).decrypt(r);
        if (null === s) throw Error("Failed to decrypt");
        return (0, p.toString)(s, tO)
    }, "deriveSymKey", 0, function(e, t) {
        var r, i;
        let s = t_.getSharedSecret((0, g.fromString)(e, tk), (0, g.fromString)(t, tk)),
            n = (r = void 0, function(e, t, r, i = 32) {
                if (L(e), U(i), i > 255 * e.outputLen) throw Error("Length should be <= 255*HashLen");
                let s = Math.ceil(i / e.outputLen);
                void 0 === r && (r = e7);
                let n = new Uint8Array(s * e.outputLen),
                    o = e4.create(e, t),
                    a = o._cloneInto(),
                    c = new Uint8Array(o.outputLen);
                for (let t = 0; t < s; t++) e9[0] = t + 1, a.update(0 === t ? e7 : c).update(r).update(e9).digestInto(c), n.set(c, e.outputLen * t), o._cloneInto(a);
                return o.destroy(), a.destroy(), c.fill(0), e9.fill(0), n.slice(0, i)
            }(tn, (i = void 0, L(tn), void 0 === i && (i = new Uint8Array(tn.outputLen)), e4(tn, W(i), W(s))), r, 32));
        return (0, p.toString)(n, tk)
    }, "deserialize", 0, tL, "encodeTypeTwoEnvelope", 0, function(e, t) {
        let r = tR(2),
            i = J(12);
        return tD({
            type: r,
            sealed: (0, g.fromString)(e, tO),
            iv: i,
            encoding: t
        })
    }, "encrypt", 0, function(e) {
        let t = tR("u" > typeof e.type ? e.type : 0);
        if (1 === tU(t) && typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
        let r = "u" > typeof e.senderPublicKey ? (0, g.fromString)(e.senderPublicKey, tk) : void 0,
            i = "u" > typeof e.iv ? (0, g.fromString)(e.iv, tk) : J(12);
        return tD({
            type: t,
            sealed: e8((0, g.fromString)(e.symKey, tk), i).encrypt((0, g.fromString)(e.message, tO)),
            iv: i,
            senderPublicKey: r,
            encoding: e.encoding
        })
    }, "engineEvent", 0, function(e, t) {
        return `${e}${t?`:${t}`:""}`
    }, "extractSolanaTransactionId", 0, function(e) {
        let t = atob(e),
            r = new Uint8Array(t.length);
        for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
        let i = r[0];
        if (0 === i) throw Error("No signatures found");
        if (r.length < 1 + 64 * i) throw Error("Transaction data too short for claimed signature count");
        if (r.length < 100) throw Error("Transaction too short");
        let s = n.Buffer.from(e, "base64").slice(1, 65);
        return d.default.encode(s)
    }, "formatIdTarget", 0, function(e) {
        return T("id", e)
    }, "formatMessage", 0, eA, "formatRelayRpcUrl", 0, function({
        protocol: e,
        version: t,
        relayUrl: r,
        sdkVersion: i,
        auth: s,
        projectId: n,
        useOnCloseEvent: o,
        bundleId: a,
        packageName: c
    }) {
        let l = r.split("?"),
            h = N(e, t, i),
            d = function(e, t) {
                let r = new URLSearchParams(e);
                for (let e of Object.keys(t).sort())
                    if (t.hasOwnProperty(e)) {
                        let i = t[e];
                        void 0 !== i && r.set(e, i)
                    }
                return r.toString()
            }(l[1] || "", {
                auth: s,
                ua: h,
                projectId: n,
                useOnCloseEvent: o || void 0,
                packageName: c || void 0,
                bundleId: a || void 0
            });
        return l[0] + "?" + d
    }, "formatTopicTarget", 0, function(e) {
        return T("topic", e)
    }, "formatUA", 0, N, "formatUri", 0, function(e) {
        let t = new URLSearchParams,
            r = function(e, t = "-") {
                let r = {};
                return Object.keys(e).forEach(i => {
                    e[i] && (r["relay" + t + i] = e[i])
                }), r
            }(e.relay);
        Object.keys(r).sort().forEach(e => {
            t.set(e, r[e])
        }), t.set("symKey", e.symKey), e.expiryTimestamp && t.set("expiryTimestamp", e.expiryTimestamp.toString()), e.methods && t.set("methods", e.methods.join(","));
        let i = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${i}`
    }, "generateKeyPair", 0, function() {
        let e = t_.utils.randomPrivateKey(),
            t = t_.getPublicKey(e);
        return {
            privateKey: (0, p.toString)(e, tk),
            publicKey: (0, p.toString)(t, tk)
        }
    }, "generateRandomBytes32", 0, function() {
        let e = J(32);
        return (0, p.toString)(e, tk)
    }, "getAppId", 0, function() {
        var t;
        try {
            return S() && "u" > typeof(null == e.g ? void 0 : e.g.Application) ? null == (t = e.g.Application) ? void 0 : t.applicationId : void 0
        } catch {
            return
        }
    }, "getAppMetadata", 0, function() {
        return (0, l.getWindowMetadata)() || {
            name: "",
            description: "",
            url: "",
            icons: [""]
        }
    }, "getChainsFromRecap", 0, function(e) {
        let t = eT(e);
        eN(t);
        let r = [];
        return Object.values(t.att).forEach(e => {
            Object.values(e).forEach(e => {
                var t;
                null != (t = e ? .[0]) && t.chains && r.push(e[0].chains)
            })
        }), [...new Set(r.flat())]
    }, "getDeepLink", 0, O, "getDidAddress", 0, eS, "getInternalError", 0, tV, "getLinkModeURL", 0, function(e, t, r) {
        return `${e}?wc_ev=${r}&topic=${t}`
    }, "getMethodsFromRecap", 0, function(e) {
        var t;
        let r = eT(e);
        eN(r);
        let i = null == (t = r.att) ? void 0 : t.eip155;
        return i ? Object.keys(i).map(e => e.split("/")[1]) : []
    }, "getNamespacedDidChainId", 0, eC, "getRecapFromResources", 0, ek, "getRelayProtocolApi", 0, function(e) {
        let t = y.RELAY_JSONRPC[e];
        if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
        return t
    }, "getRelayProtocolName", 0, function(e) {
        return e ? .relay || {
            protocol: "irn"
        }
    }, "getSdkError", 0, tz, "getSearchParamFromURL", 0, function(e, t) {
        if (!e.includes(t)) return null;
        let r = e.split(/([&,?,=])/),
            i = r.indexOf(t);
        return r[i + 2]
    }, "handleDeeplinkRedirect", 0, P, "hashKey", 0, function(e) {
        let t = tn((0, g.fromString)(e, tk));
        return (0, p.toString)(t, tk)
    }, "hashMessage", 0, function(e) {
        let t = tn((0, g.fromString)(e, tO));
        return (0, p.toString)(t, tk)
    }, "isAndroid", 0, function() {
        return S() && "u" > typeof(null == e.g ? void 0 : e.g.Platform) && (null == e.g ? void 0 : e.g.Platform.OS) === "android"
    }, "isBrowser", 0, x, "isCaipNamespace", 0, tq, "isConformingNamespaces", 0, function(e, t, r) {
        var i, s;
        let n, o, a = null,
            c = (n = {}, Object.keys(i = e).forEach(e => {
                var t;
                e.includes(":") ? n[e] = i[e] : null == (t = i[e].chains) || t.forEach(t => {
                    n[t] = {
                        methods: i[e].methods,
                        events: i[e].events
                    }
                })
            }), n),
            l = (o = {}, Object.keys(s = t).forEach(e => {
                if (e.includes(":")) o[e] = s[e];
                else {
                    let t = tB(s[e].accounts);
                    t ? .forEach(t => {
                        o[t] = {
                            accounts: s[e].accounts.filter(e => e.includes(`${t}:`)),
                            methods: s[e].methods,
                            events: s[e].events
                        }
                    })
                }
            }), o),
            h = Object.keys(c),
            d = Object.keys(l),
            u = tZ(Object.keys(e)),
            p = tZ(Object.keys(t)),
            g = u.filter(e => !p.includes(e));
        return g.length && (a = tV("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${g.toString()}
      Received: ${Object.keys(t).toString()}`)), _(h, d) || (a = tV("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${h.toString()}
      Approved: ${d.toString()}`)), Object.keys(t).forEach(e => {
            if (!e.includes(":") || a) return;
            let i = tB(t[e].accounts);
            i.includes(e) || (a = tV("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${i.toString()}`))
        }), h.forEach(e => {
            a || (_(c[e].methods, l[e].methods) ? _(c[e].events, l[e].events) || (a = tV("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${e}`)) : a = tV("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${e}`))
        }), a
    }, "isExpired", 0, function(e) {
        return Date.now() >= (0, a.toMiliseconds)(e)
    }, "isIos", 0, function() {
        return S() && "u" > typeof(null == e.g ? void 0 : e.g.Platform) && (null == e.g ? void 0 : e.g.Platform.OS) === "ios"
    }, "isNode", 0, C, "isOnline", 0, function() {
        let e = A();
        return new Promise(t => {
            switch (e) {
                case I:
                    t(x() && navigator ? .onLine);
                    break;
                case v:
                    t(t0());
                    break;
                default:
                    t(!0)
            }
        })
    }, "isProposalStruct", 0, function(e) {
        var t;
        return null == (t = e ? .proposer) ? void 0 : t.publicKey
    }, "isReactNative", 0, S, "isSessionCompatible", 0, function(e, t) {
        let {
            requiredNamespaces: r
        } = t, i = Object.keys(e.namespaces), s = Object.keys(r), n = !0;
        return !!_(s, i) && (i.forEach(t => {
            let {
                accounts: i,
                methods: s,
                events: o
            } = e.namespaces[t], a = tB(i), c = r[t];
            _(b(t, c), a) && _(c.methods, s) && _(c.events, o) || (n = !1)
        }), n)
    }, "isSessionStruct", 0, function(e) {
        return e ? .topic
    }, "isTestRun", 0, function() {
        return "u" > typeof s.default && "true" === s.default.env.IS_VITEST
    }, "isTypeOneEnvelope", 0, function(e) {
        return 1 === e.type && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
    }, "isTypeTwoEnvelope", 0, function(e) {
        return 2 === e.type
    }, "isUndefined", 0, tW, "isValidArray", 0, tF, "isValidController", 0, function(e, t) {
        let r = null;
        return tH(e ? .publicKey, !1) || (r = tV("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r
    }, "isValidErrorReason", 0, function(e) {
        return !(!e || "object" != typeof e || !e.code || !tG(e.code, !1) || !e.message || !tH(e.message, !1))
    }, "isValidEvent", 0, function(e) {
        return !(tW(e) || !tH(e.name, !1))
    }, "isValidId", 0, function(e) {
        return "number" == typeof e
    }, "isValidNamespaces", 0, function(e, t) {
        let r = null;
        if (e && tK(e)) {
            let i, s = tX(e, t);
            s && (r = s);
            let n = (i = null, Object.values(e).forEach(e => {
                var r, s;
                let n;
                if (i) return;
                let o = (r = e ? .accounts, s = `${t} namespace`, n = null, tF(r) ? r.forEach(e => {
                    n || function(e) {
                        if (tH(e, !1) && e.includes(":")) {
                            let t = e.split(":");
                            if (3 === t.length) {
                                let e = t[0] + ":" + t[1];
                                return !!t[2] && tJ(e)
                            }
                        }
                        return !1
                    }(e) || (n = tz("UNSUPPORTED_ACCOUNTS", `${s}, account ${e} should be a string and conform to "namespace:chainId:address" format`))
                }) : n = tz("UNSUPPORTED_ACCOUNTS", `${s}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n);
                o && (i = o)
            }), i);
            n && (r = n)
        } else r = tV("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
        return r
    }, "isValidNamespacesChainId", 0, function(e, t) {
        let r;
        return !(!tJ(t) || !(r = [], Object.values(e).forEach(e => {
            r.push(...tB(e.accounts))
        }), r).includes(t))
    }, "isValidNamespacesEvent", 0, function(e, t, r) {
        let i;
        return !!tH(r, !1) && (i = [], Object.values(e).forEach(e => {
            tB(e.accounts).includes(t) && i.push(...e.events)
        }), i).includes(r)
    }, "isValidNamespacesRequest", 0, function(e, t, r) {
        let i;
        return !!tH(r, !1) && (i = [], Object.values(e).forEach(e => {
            tB(e.accounts).includes(t) && i.push(...e.methods)
        }), i).includes(r)
    }, "isValidObject", 0, tK, "isValidParams", 0, function(e) {
        return "u" > typeof e
    }, "isValidRelay", 0, tQ, "isValidRelays", 0, function(e, t) {
        let r = !1;
        return t && !e ? r = !0 : e && tF(e) && e.length && e.forEach(e => {
            r = tQ(e)
        }), r
    }, "isValidRequest", 0, function(e) {
        return !(tW(e) || !tH(e.method, !1))
    }, "isValidRequestExpiry", 0, function(e, t) {
        return tG(e, !1) && e <= t.max && e >= t.min
    }, "isValidRequiredNamespaces", 0, function(e, t, r) {
        let i = null;
        if (e && tK(e)) {
            let s, n = tX(e, t);
            n && (i = n);
            let o = (s = null, Object.entries(e).forEach(([e, i]) => {
                var n, o;
                let a;
                if (s) return;
                let c = (n = b(e, i), o = `${t} ${r}`, a = null, tF(n) && n.length ? n.forEach(e => {
                    a || tJ(e) || (a = tz("UNSUPPORTED_CHAINS", `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`))
                }) : tJ(e) || (a = tz("UNSUPPORTED_CHAINS", `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), a);
                c && (s = c)
            }), s);
            o && (i = o)
        } else i = tV("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
        return i
    }, "isValidResponse", 0, function(e) {
        return !(tW(e) || tW(e.result) && tW(e.error) || !tG(e.id, !1) || !tH(e.jsonrpc, !1))
    }, "isValidString", 0, tH, "isValidUrl", 0, function(e) {
        function t(e) {
            try {
                return "u" > typeof new URL(e)
            } catch {
                return !1
            }
        }
        try {
            if (tH(e, !1)) {
                if (t(e)) return !0;
                let r = R(e);
                return t(r)
            }
        } catch {}
        return !1
    }, "mapToObj", 0, function(e) {
        return Object.fromEntries(e.entries())
    }, "mergeArrays", 0, k, "mergeEncodedRecaps", 0, function(e, t) {
        var r, i;
        let s, n;
        return e_((r = eT(e), i = eT(t), eN(r), eN(i), s = Object.keys(r.att).concat(Object.keys(i.att)).sort((e, t) => e.localeCompare(t)), n = {
            att: {}
        }, s.forEach(e => {
            var t, s;
            Object.keys((null == (t = r.att) ? void 0 : t[e]) || {}).concat(Object.keys((null == (s = i.att) ? void 0 : s[e]) || {})).sort((e, t) => e.localeCompare(t)).forEach(t => {
                var s, o;
                n.att[e] = em(((e, t) => {
                    for (var r in t || (t = {})) eb.call(t, r) && eE(e, r, t[r]);
                    if (ew)
                        for (var r of ew(t)) ev.call(t, r) && eE(e, r, t[r]);
                    return e
                })({}, n.att[e]), ey({
                    [t]: (null == (s = r.att[e]) ? void 0 : s[t]) || (null == (o = i.att[e]) ? void 0 : o[t])
                }))
            })
        }), n))
    }, "objToMap", 0, function(e) {
        return new Map(Object.entries(e))
    }, "parseChainId", 0, w, "parseExpirerTarget", 0, function(e) {
        let [t, r] = e.split(":"), i = {
            id: void 0,
            topic: void 0
        };
        if ("topic" === t && "string" == typeof r) i.topic = r;
        else if ("id" === t && Number.isInteger(Number(r))) i.id = Number(r);
        else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
        return i
    }, "parseNamespaceKey", 0, function(e) {
        return tq(e) ? e.split(":")[0] : e
    }, "parseUri", 0, function(e) {
        var t;
        if (!e.includes("wc:")) {
            let t = R(e);
            null != t && t.includes("wc:") && (e = t)
        }
        let r = (e = (e = e.includes("wc://") ? e.replace("wc://", "") : e).includes("wc:") ? e.replace("wc:", "") : e).indexOf(":"),
            i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
            s = e.substring(0, r),
            n = e.substring(r + 1, i).split("@"),
            o = new URLSearchParams("u" > typeof i ? e.substring(i) : ""),
            a = {};
        o.forEach((e, t) => {
            a[t] = e
        });
        let c = "string" == typeof a.methods ? a.methods.split(",") : void 0;
        return {
            protocol: s,
            topic: (t = n[0]).startsWith("//") ? t.substring(2) : t,
            version: parseInt(n[1], 10),
            symKey: a.symKey,
            relay: function(e, t = "-") {
                let r = {},
                    i = "relay" + t;
                return Object.keys(e).forEach(t => {
                    if (t.startsWith(i)) {
                        let s = t.replace(i, ""),
                            n = e[t];
                        r[s] = n
                    }
                }), r
            }(a),
            methods: c,
            expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
        }
    }, "sleep", 0, function(e) {
        return new Promise(t => setTimeout(t, e))
    }, "subscribeToNetworkChange", 0, function(t) {
        var r, i;
        switch (A()) {
            case I:
                r = t, !S() && x() && (window.addEventListener("online", () => r(!0)), window.addEventListener("offline", () => r(!1)));
                break;
            case v:
                i = t, S() && null != e.g && e.g.NetInfo && e.g ? .NetInfo.addEventListener(e => i(e ? .isConnected))
        }
    }, "uuidv4", 0, function() {
        return "u" > typeof crypto && null != crypto && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, e => {
            let t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }, "validateDecoding", 0, function(e, t) {
        let r = tL({
            encoded: e,
            encoding: t ? .encoding
        });
        return tM({
            type: tU(r.type),
            senderPublicKey: "u" > typeof r.senderPublicKey ? (0, p.toString)(r.senderPublicKey, tk) : void 0,
            receiverPublicKey: t ? .receiverPublicKey
        })
    }, "validateEncoding", 0, tM, "validateSignedCacao", 0, ex, "verifyP256Jwt", 0, function(e, t) {
        var r;
        let i, s, [o, a, c] = e.split("."),
            l = (r = c, n.Buffer.from(((s = (i = r.replace(/-/g, "+").replace(/_/g, "/")).length % 4) > 0 && (i += "=".repeat(4 - s)), i), "base64"));
        if (64 !== l.length) throw Error("Invalid signature length");
        let h = l.slice(0, 32).toString("hex"),
            d = l.slice(32, 64).toString("hex"),
            g = tn(`${o}.${a}`),
            f = new m.ec("p256").keyFromPublic({
                x: n.Buffer.from(t.x, "base64").toString("hex"),
                y: n.Buffer.from(t.y, "base64").toString("hex")
            }, "hex"),
            y = (0, p.toString)(g, tk);
        if (!f.verify(y, {
                r: h,
                s: d
            })) throw Error("Invalid signature");
        return (0, u.decodeJWT)(e).payload
    }])
}, 469550, 93024, e => {
    "use strict";
    var t = e.i(221168),
        r = e.i(679753),
        i = e.i(835588),
        s = e.i(829432),
        n = e.i(513582),
        o = e.i(319592),
        a = e.i(251007),
        c = e.i(711790),
        l = e.i(712314),
        h = e.i(77755),
        d = e.i(542849);
    e.i(73730);
    var u = e.i(187978),
        p = e.i(319863);
    e.i(191105);
    var g = e.i(948031),
        f = e.i(583486),
        m = e.i(697400),
        y = e.i(744934);
    let w = "core",
        b = `wc@2:${w}:`,
        v = {
            database: ":memory:"
        },
        E = "client_ed25519_seed",
        I = c.ONE_DAY,
        C = c.SIX_HOURS,
        S = "wss://relay.walletconnect.org",
        x = "relayer_message",
        A = "relayer_message_ack",
        N = "relayer_connection_stalled",
        _ = "relayer_publish",
        T = "payload",
        k = "connect",
        P = "disconnect",
        O = "error",
        R = "2.19.1",
        U = "link_mode",
        D = "relay",
        L = "inbound",
        M = "WALLETCONNECT_LINK_MODE_APPS",
        B = "subscription_created",
        q = "subscription_deleted",
        j = (c.THIRTY_DAYS, c.FIVE_SECONDS, c.THIRTY_DAYS, {
            wc_pairingDelete: {
                req: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 1e3
                },
                res: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 1001
                }
            },
            wc_pairingPing: {
                req: {
                    ttl: c.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1002
                },
                res: {
                    ttl: c.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1003
                }
            },
            unregistered_method: {
                req: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 0
                },
                res: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 0
                }
            }
        }),
        $ = "pairing_create",
        V = "pairing_delete",
        z = "history_created",
        F = "history_updated",
        K = "history_deleted",
        W = "expirer_created",
        H = "expirer_deleted",
        G = "expirer_expired",
        J = (c.ONE_DAY, "https://verify.walletconnect.org"),
        Y = `${J}/v3`,
        X = ["https://verify.walletconnect.com", J],
        Q = "malformed_pairing_uri",
        Z = "session_approve_started";
    var ee = function(e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
            var n = e.charAt(s),
                o = n.charCodeAt(0);
            if (255 !== r[o]) throw TypeError(n + " is ambiguous");
            r[o] = s
        }
        var a = e.length,
            c = e.charAt(0),
            l = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);

        function d(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array;
            var t = 0;
            if (" " !== e[0]) {
                for (var i = 0, s = 0; e[t] === c;) i++, t++;
                for (var n = (e.length - t) * l + 1 >>> 0, o = new Uint8Array(n); e[t];) {
                    var h = r[e.charCodeAt(t)];
                    if (255 === h) return;
                    for (var d = 0, u = n - 1;
                        (0 !== h || d < s) && -1 !== u; u--, d++) h += a * o[u] >>> 0, o[u] = h % 256 >>> 0, h = h / 256 >>> 0;
                    if (0 !== h) throw Error("Non-zero carry");
                    s = d, t++
                }
                if (" " !== e[t]) {
                    for (var p = n - s; p !== n && 0 === o[p];) p++;
                    for (var g = new Uint8Array(i + (n - p)), f = i; p !== n;) g[f++] = o[p++];
                    return g
                }
            }
        }
        return {
            encode: function(t) {
                if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                if (0 === t.length) return "";
                for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s];) s++, r++;
                for (var o = (n - s) * h + 1 >>> 0, l = new Uint8Array(o); s !== n;) {
                    for (var d = t[s], u = 0, p = o - 1;
                        (0 !== d || u < i) && -1 !== p; p--, u++) d += 256 * l[p] >>> 0, l[p] = d % a >>> 0, d = d / a >>> 0;
                    if (0 !== d) throw Error("Non-zero carry");
                    i = u, s++
                }
                for (var g = o - i; g !== o && 0 === l[g];) g++;
                for (var f = c.repeat(r); g < o; ++g) f += e.charAt(l[g]);
                return f
            },
            decodeUnsafe: d,
            decode: function(e) {
                var r = d(e);
                if (r) return r;
                throw Error(`Non-${t} character`)
            }
        }
    };
    let et = e => {
        if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw Error("Unknown type, must be binary type")
    };
    class er {
        constructor(e, t, r) {
            this.name = e, this.prefix = t, this.baseEncode = r
        }
        encode(e) {
            if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
            throw Error("Unknown type, must be binary type")
        }
    }
    class ei {
        constructor(e, t, r) {
            if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
            this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
        }
        decode(e) {
            if ("string" == typeof e) {
                if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                return this.baseDecode(e.slice(this.prefix.length))
            }
            throw Error("Can only multibase decode strings")
        }
        or(e) {
            return en(this, e)
        }
    }
    class es {
        constructor(e) {
            this.decoders = e
        }
        or(e) {
            return en(this, e)
        }
        decode(e) {
            let t = e[0],
                r = this.decoders[t];
            if (r) return r.decode(e);
            throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
        }
    }
    let en = (e, t) => new es({ ...e.decoders || {
            [e.prefix]: e
        },
        ...t.decoders || {
            [t.prefix]: t
        }
    });
    class eo {
        constructor(e, t, r, i) {
            this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new er(e, t, r), this.decoder = new ei(e, t, i)
        }
        encode(e) {
            return this.encoder.encode(e)
        }
        decode(e) {
            return this.decoder.decode(e)
        }
    }
    let ea = ({
            name: e,
            prefix: t,
            encode: r,
            decode: i
        }) => new eo(e, t, r, i),
        ec = ({
            prefix: e,
            name: t,
            alphabet: r
        }) => {
            let {
                encode: i,
                decode: s
            } = ee(r, t);
            return ea({
                prefix: e,
                name: t,
                encode: i,
                decode: e => et(s(e))
            })
        },
        el = ({
            name: e,
            prefix: t,
            bitsPerChar: r,
            alphabet: i
        }) => ea({
            prefix: t,
            name: e,
            encode: e => ((e, t, r) => {
                let i = "=" === t[t.length - 1],
                    s = (1 << r) - 1,
                    n = "",
                    o = 0,
                    a = 0;
                for (let i = 0; i < e.length; ++i)
                    for (a = a << 8 | e[i], o += 8; o > r;) o -= r, n += t[s & a >> o];
                if (o && (n += t[s & a << r - o]), i)
                    for (; n.length * r & 7;) n += "=";
                return n
            })(e, i, r),
            decode: t => ((e, t, r, i) => {
                let s = {};
                for (let e = 0; e < t.length; ++e) s[t[e]] = e;
                let n = e.length;
                for (;
                    "=" === e[n - 1];) --n;
                let o = new Uint8Array(n * r / 8 | 0),
                    a = 0,
                    c = 0,
                    l = 0;
                for (let t = 0; t < n; ++t) {
                    let n = s[e[t]];
                    if (void 0 === n) throw SyntaxError(`Non-${i} character`);
                    c = c << r | n, (a += r) >= 8 && (a -= 8, o[l++] = 255 & c >> a)
                }
                if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                return o
            })(t, i, r, e)
        });
    var eh = Object.freeze({
            __proto__: null,
            identity: ea({
                prefix: "\0",
                name: "identity",
                encode: e => new TextDecoder().decode(e),
                decode: e => new TextEncoder().encode(e)
            })
        }),
        ed = Object.freeze({
            __proto__: null,
            base2: el({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            })
        }),
        eu = Object.freeze({
            __proto__: null,
            base8: el({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            })
        }),
        ep = Object.freeze({
            __proto__: null,
            base10: ec({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            })
        }),
        eg = Object.freeze({
            __proto__: null,
            base16: el({
                prefix: "f",
                name: "base16",
                alphabet: "0123456789abcdef",
                bitsPerChar: 4
            }),
            base16upper: el({
                prefix: "F",
                name: "base16upper",
                alphabet: "0123456789ABCDEF",
                bitsPerChar: 4
            })
        }),
        ef = Object.freeze({
            __proto__: null,
            base32: el({
                prefix: "b",
                name: "base32",
                alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                bitsPerChar: 5
            }),
            base32upper: el({
                prefix: "B",
                name: "base32upper",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                bitsPerChar: 5
            }),
            base32pad: el({
                prefix: "c",
                name: "base32pad",
                alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                bitsPerChar: 5
            }),
            base32padupper: el({
                prefix: "C",
                name: "base32padupper",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                bitsPerChar: 5
            }),
            base32hex: el({
                prefix: "v",
                name: "base32hex",
                alphabet: "0123456789abcdefghijklmnopqrstuv",
                bitsPerChar: 5
            }),
            base32hexupper: el({
                prefix: "V",
                name: "base32hexupper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                bitsPerChar: 5
            }),
            base32hexpad: el({
                prefix: "t",
                name: "base32hexpad",
                alphabet: "0123456789abcdefghijklmnopqrstuv=",
                bitsPerChar: 5
            }),
            base32hexpadupper: el({
                prefix: "T",
                name: "base32hexpadupper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                bitsPerChar: 5
            }),
            base32z: el({
                prefix: "h",
                name: "base32z",
                alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                bitsPerChar: 5
            })
        }),
        em = Object.freeze({
            __proto__: null,
            base36: ec({
                prefix: "k",
                name: "base36",
                alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
            }),
            base36upper: ec({
                prefix: "K",
                name: "base36upper",
                alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            })
        }),
        ey = Object.freeze({
            __proto__: null,
            base58btc: ec({
                name: "base58btc",
                prefix: "z",
                alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
            }),
            base58flickr: ec({
                name: "base58flickr",
                prefix: "Z",
                alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
            })
        }),
        ew = Object.freeze({
            __proto__: null,
            base64: el({
                prefix: "m",
                name: "base64",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                bitsPerChar: 6
            }),
            base64pad: el({
                prefix: "M",
                name: "base64pad",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                bitsPerChar: 6
            }),
            base64url: el({
                prefix: "u",
                name: "base64url",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                bitsPerChar: 6
            }),
            base64urlpad: el({
                prefix: "U",
                name: "base64urlpad",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                bitsPerChar: 6
            })
        });
    let eb = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
        ev = eb.reduce((e, t, r) => (e[r] = t, e), []),
        eE = eb.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
    var eI = Object.freeze({
        __proto__: null,
        base256emoji: ea({
            prefix: "🚀",
            name: "base256emoji",
            encode: function(e) {
                return e.reduce((e, t) => e += ev[t], "")
            },
            decode: function(e) {
                let t = [];
                for (let r of e) {
                    let e = eE[r.codePointAt(0)];
                    if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                    t.push(e)
                }
                return new Uint8Array(t)
            }
        })
    });

    function eC(e, t, r) {
        t = t || [], r = r || 0;
        for (var i = r; e >= 0x80000000;) t[r++] = 255 & e | 128, e /= 128;
        for (; - 128 & e;) t[r++] = 255 & e | 128, e >>>= 7;
        return t[r] = 0 | e, eC.bytes = r - i + 1, t
    }
    var eS = function(e) {
        return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 0x10000000 ? 4 : e < 0x800000000 ? 5 : e < 0x40000000000 ? 6 : e < 0x2000000000000 ? 7 : e < 0x100000000000000 ? 8 : e < 0x8000000000000000 ? 9 : 10
    };
    let ex = (e, t, r = 0) => (eC(e, t, r), t),
        eA = (e, t) => {
            let r = t.byteLength,
                i = eS(e),
                s = i + eS(r),
                n = new Uint8Array(s + r);
            return ex(e, n, 0), ex(r, n, i), n.set(t, s), new eN(e, r, t, n)
        };
    class eN {
        constructor(e, t, r, i) {
            this.code = e, this.size = t, this.digest = r, this.bytes = i
        }
    }
    let e_ = ({
        name: e,
        code: t,
        encode: r
    }) => new eT(e, t, r);
    class eT {
        constructor(e, t, r) {
            this.name = e, this.code = t, this.encode = r
        }
        digest(e) {
            if (e instanceof Uint8Array) {
                let t = this.encode(e);
                return t instanceof Uint8Array ? eA(this.code, t) : t.then(e => eA(this.code, e))
            }
            throw Error("Unknown type, must be binary type")
        }
    }
    let ek = e => async t => new Uint8Array(await crypto.subtle.digest(e, t));
    var eP = Object.freeze({
            __proto__: null,
            sha256: e_({
                name: "sha2-256",
                code: 18,
                encode: ek("SHA-256")
            }),
            sha512: e_({
                name: "sha2-512",
                code: 19,
                encode: ek("SHA-512")
            })
        }),
        eO = Object.freeze({
            __proto__: null,
            identity: {
                code: 0,
                name: "identity",
                encode: et,
                digest: e => eA(0, et(e))
            }
        });
    new TextEncoder, new TextDecoder;
    let eR = { ...eh,
        ...ed,
        ...eu,
        ...ep,
        ...eg,
        ...ef,
        ...em,
        ...ey,
        ...ew,
        ...eI
    };

    function eU(e, t, r, i) {
        return {
            name: e,
            prefix: t,
            encoder: {
                name: e,
                prefix: t,
                encode: r
            },
            decoder: {
                decode: i
            }
        }
    }({ ...eP,
        ...eO
    });
    let eD = eU("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
        eL = eU("ascii", "a", e => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t
        }, e => {
            let t = function(e = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e)
            }((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t
        }),
        eM = {
            utf8: eD,
            "utf-8": eD,
            hex: eR.base16,
            latin1: eL,
            ascii: eL,
            binary: eL,
            ...eR
        };
    var eB = Object.defineProperty,
        eq = (e, t, r) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? eB(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[i] = r
        };
    class ej {
        constructor(e, t) {
            this.core = e, this.logger = t, eq(this, "keychain", new Map), eq(this, "name", "keychain"), eq(this, "version", "0.3"), eq(this, "initialized", !1), eq(this, "storagePrefix", b), eq(this, "init", async () => {
                if (!this.initialized) {
                    let e = await this.getKeyChain();
                    "u" > typeof e && (this.keychain = e), this.initialized = !0
                }
            }), eq(this, "has", e => (this.isInitialized(), this.keychain.has(e))), eq(this, "set", async (e, t) => {
                this.isInitialized(), this.keychain.set(e, t), await this.persist()
            }), eq(this, "get", e => {
                this.isInitialized();
                let t = this.keychain.get(e);
                if (typeof t > "u") {
                    let {
                        message: t
                    } = (0, d.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                    throw Error(t)
                }
                return t
            }), eq(this, "del", async e => {
                this.isInitialized(), this.keychain.delete(e), await this.persist()
            }), this.core = e, this.logger = (0, n.generateChildLogger)(t, this.name)
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
        }
        get storageKey() {
            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
        }
        async setKeyChain(e) {
            await this.core.storage.setItem(this.storageKey, (0, d.mapToObj)(e))
        }
        async getKeyChain() {
            let e = await this.core.storage.getItem(this.storageKey);
            return "u" > typeof e ? (0, d.objToMap)(e) : void 0
        }
        async persist() {
            await this.setKeyChain(this.keychain)
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: e
                } = (0, d.getInternalError)("NOT_INITIALIZED", this.name);
                throw Error(e)
            }
        }
    }
    var e$ = Object.defineProperty,
        eV = (e, t, r) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? e$(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[i] = r
        };
    class ez {
        constructor(e, t, r) {
            this.core = e, this.logger = t, eV(this, "name", "crypto"), eV(this, "keychain"), eV(this, "randomSessionIdentifier", (0, d.generateRandomBytes32)()), eV(this, "initialized", !1), eV(this, "init", async () => {
                this.initialized || (await this.keychain.init(), this.initialized = !0)
            }), eV(this, "hasKeys", e => (this.isInitialized(), this.keychain.has(e))), eV(this, "getClientId", async () => {
                this.isInitialized();
                let e = await this.getClientSeed(),
                    t = h.generateKeyPair(e);
                return h.encodeIss(t.publicKey)
            }), eV(this, "generateKeyPair", () => {
                this.isInitialized();
                let e = (0, d.generateKeyPair)();
                return this.setPrivateKey(e.publicKey, e.privateKey)
            }), eV(this, "signJWT", async e => {
                this.isInitialized();
                let t = await this.getClientSeed(),
                    r = h.generateKeyPair(t),
                    i = this.randomSessionIdentifier;
                return await h.signJWT(i, e, I, r)
            }), eV(this, "generateSharedKey", (e, t, r) => {
                this.isInitialized();
                let i = this.getPrivateKey(e),
                    s = (0, d.deriveSymKey)(i, t);
                return this.setSymKey(s, r)
            }), eV(this, "setSymKey", async (e, t) => {
                this.isInitialized();
                let r = t || (0, d.hashKey)(e);
                return await this.keychain.set(r, e), r
            }), eV(this, "deleteKeyPair", async e => {
                this.isInitialized(), await this.keychain.del(e)
            }), eV(this, "deleteSymKey", async e => {
                this.isInitialized(), await this.keychain.del(e)
            }), eV(this, "encode", async (e, t, r) => {
                this.isInitialized();
                let i = (0, d.validateEncoding)(r),
                    s = (0, l.safeJsonStringify)(t);
                if ((0, d.isTypeTwoEnvelope)(i)) return (0, d.encodeTypeTwoEnvelope)(s, r ? .encoding);
                if ((0, d.isTypeOneEnvelope)(i)) {
                    let t = i.senderPublicKey,
                        r = i.receiverPublicKey;
                    e = await this.generateSharedKey(t, r)
                }
                let n = this.getSymKey(e),
                    {
                        type: o,
                        senderPublicKey: a
                    } = i;
                return (0, d.encrypt)({
                    type: o,
                    symKey: n,
                    message: s,
                    senderPublicKey: a,
                    encoding: r ? .encoding
                })
            }), eV(this, "decode", async (e, t, r) => {
                this.isInitialized();
                let i = (0, d.validateDecoding)(t, r);
                if ((0, d.isTypeTwoEnvelope)(i)) {
                    let e = (0, d.decodeTypeTwoEnvelope)(t, r ? .encoding);
                    return (0, l.safeJsonParse)(e)
                }
                if ((0, d.isTypeOneEnvelope)(i)) {
                    let t = i.receiverPublicKey,
                        r = i.senderPublicKey;
                    e = await this.generateSharedKey(t, r)
                }
                try {
                    let i = this.getSymKey(e),
                        s = (0, d.decrypt)({
                            symKey: i,
                            encoded: t,
                            encoding: r ? .encoding
                        });
                    return (0, l.safeJsonParse)(s)
                } catch (t) {
                    this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`), this.logger.error(t)
                }
            }), eV(this, "getPayloadType", (e, t = d.BASE64) => {
                let r = (0, d.deserialize)({
                    encoded: e,
                    encoding: t
                });
                return (0, d.decodeTypeByte)(r.type)
            }), eV(this, "getPayloadSenderPublicKey", (e, t = d.BASE64) => {
                let r = (0, d.deserialize)({
                    encoded: e,
                    encoding: t
                });
                return r.senderPublicKey ? (0, u.toString)(r.senderPublicKey, d.BASE16) : void 0
            }), this.core = e, this.logger = (0, n.generateChildLogger)(t, this.name), this.keychain = r || new ej(this.core, this.logger)
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
        }
        async setPrivateKey(e, t) {
            return await this.keychain.set(e, t), e
        }
        getPrivateKey(e) {
            return this.keychain.get(e)
        }
        async getClientSeed() {
            let e = "";
            try {
                e = this.keychain.get(E)
            } catch {
                e = (0, d.generateRandomBytes32)(), await this.keychain.set(E, e)
            }
            return function(e, t = "utf8") {
                let r = eM[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e, "utf8") : r.decoder.decode(`${r.prefix}${e}`)
            }(e, "base16")
        }
        getSymKey(e) {
            return this.keychain.get(e)
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: e
                } = (0, d.getInternalError)("NOT_INITIALIZED", this.name);
                throw Error(e)
            }
        }
    }
    var eF = Object.defineProperty,
        eK = Object.defineProperties,
        eW = Object.getOwnPropertyDescriptors,
        eH = Object.getOwnPropertySymbols,
        eG = Object.prototype.hasOwnProperty,
        eJ = Object.prototype.propertyIsEnumerable,
        eY = (e, t, r) => t in e ? eF(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        eX = (e, t, r) => eY(e, "symbol" != typeof t ? t + "" : t, r);
    class eQ extends a.IMessageTracker {
        constructor(e, t) {
            super(e, t), this.logger = e, this.core = t, eX(this, "messages", new Map), eX(this, "messagesWithoutClientAck", new Map), eX(this, "name", "messages"), eX(this, "version", "0.3"), eX(this, "initialized", !1), eX(this, "storagePrefix", b), eX(this, "init", async () => {
                if (!this.initialized) {
                    this.logger.trace("Initialized");
                    try {
                        let e = await this.getRelayerMessages();
                        "u" > typeof e && (this.messages = e);
                        let t = await this.getRelayerMessagesWithoutClientAck();
                        "u" > typeof t && (this.messagesWithoutClientAck = t), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            size: this.messages.size
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    } finally {
                        this.initialized = !0
                    }
                }
            }), eX(this, "set", async (e, t, r) => {
                this.isInitialized();
                let i = (0, d.hashMessage)(t),
                    s = this.messages.get(e);
                if (typeof s > "u" && (s = {}), "u" > typeof s[i]) return i;
                if (s[i] = t, this.messages.set(e, s), r === L) {
                    let r = this.messagesWithoutClientAck.get(e) || {};
                    this.messagesWithoutClientAck.set(e, eK(((e, t) => {
                        for (var r in t || (t = {})) eG.call(t, r) && eY(e, r, t[r]);
                        if (eH)
                            for (var r of eH(t)) eJ.call(t, r) && eY(e, r, t[r]);
                        return e
                    })({}, r), eW({
                        [i]: t
                    })))
                }
                return await this.persist(), i
            }), eX(this, "get", e => {
                this.isInitialized();
                let t = this.messages.get(e);
                return typeof t > "u" && (t = {}), t
            }), eX(this, "getWithoutAck", e => {
                this.isInitialized();
                let t = {};
                for (let r of e) {
                    let e = this.messagesWithoutClientAck.get(r) || {};
                    t[r] = Object.values(e)
                }
                return t
            }), eX(this, "has", (e, t) => (this.isInitialized(), "u" > typeof this.get(e)[(0, d.hashMessage)(t)])), eX(this, "ack", async (e, t) => {
                this.isInitialized();
                let r = this.messagesWithoutClientAck.get(e);
                if (typeof r > "u") return;
                let i = (0, d.hashMessage)(t);
                delete r[i], 0 === Object.keys(r).length ? this.messagesWithoutClientAck.delete(e) : this.messagesWithoutClientAck.set(e, r), await this.persist()
            }), eX(this, "del", async e => {
                this.isInitialized(), this.messages.delete(e), this.messagesWithoutClientAck.delete(e), await this.persist()
            }), this.logger = (0, n.generateChildLogger)(e, this.name), this.core = t
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
        }
        get storageKey() {
            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
        }
        get storageKeyWithoutClientAck() {
            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck"
        }
        async setRelayerMessages(e) {
            await this.core.storage.setItem(this.storageKey, (0, d.mapToObj)(e))
        }
        async setRelayerMessagesWithoutClientAck(e) {
            await this.core.storage.setItem(this.storageKeyWithoutClientAck, (0, d.mapToObj)(e))
        }
        async getRelayerMessages() {
            let e = await this.core.storage.getItem(this.storageKey);
            return "u" > typeof e ? (0, d.objToMap)(e) : void 0
        }
        async getRelayerMessagesWithoutClientAck() {
            let e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
            return "u" > typeof e ? (0, d.objToMap)(e) : void 0
        }
        async persist() {
            await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck)
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: e
                } = (0, d.getInternalError)("NOT_INITIALIZED", this.name);
                throw Error(e)
            }
        }
    }
    var eZ = Object.defineProperty,
        e0 = Object.defineProperties,
        e1 = Object.getOwnPropertyDescriptors,
        e2 = Object.getOwnPropertySymbols,
        e5 = Object.prototype.hasOwnProperty,
        e3 = Object.prototype.propertyIsEnumerable,
        e8 = (e, t, r) => t in e ? eZ(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        e6 = (e, t) => {
            for (var r in t || (t = {})) e5.call(t, r) && e8(e, r, t[r]);
            if (e2)
                for (var r of e2(t)) e3.call(t, r) && e8(e, r, t[r]);
            return e
        },
        e4 = (e, t, r) => e8(e, "symbol" != typeof t ? t + "" : t, r);
    class e9 extends a.IPublisher {
        constructor(e, t) {
            super(e, t), this.relayer = e, this.logger = t, e4(this, "events", new r.EventEmitter), e4(this, "name", "publisher"), e4(this, "queue", new Map), e4(this, "publishTimeout", (0, c.toMiliseconds)(c.ONE_MINUTE)), e4(this, "initialPublishTimeout", (0, c.toMiliseconds)(15 * c.ONE_SECOND)), e4(this, "needsTransportRestart", !1), e4(this, "publish", async (e, t, r) => {
                var i;
                this.logger.debug("Publishing Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: e,
                        message: t,
                        opts: r
                    }
                });
                let s = r ? .ttl || C,
                    n = (0, d.getRelayProtocolName)(r),
                    o = r ? .prompt || !1,
                    a = r ? .tag || 0,
                    c = r ? .id || (0, g.getBigIntRpcId)().toString(),
                    l = {
                        topic: e,
                        message: t,
                        opts: {
                            ttl: s,
                            relay: n,
                            prompt: o,
                            tag: a,
                            id: c,
                            attestation: r ? .attestation,
                            tvf: r ? .tvf
                        }
                    },
                    h = `Failed to publish payload, please try again. id:${c} tag:${a}`;
                try {
                    let i = new Promise(async i => {
                        let n = ({
                            id: e
                        }) => {
                            l.opts.id === e && (this.removeRequestFromQueue(e), this.relayer.events.removeListener(_, n), i(l))
                        };
                        this.relayer.events.on(_, n);
                        let h = (0, d.createExpiringPromise)(new Promise((i, n) => {
                            this.rpcPublish({
                                topic: e,
                                message: t,
                                ttl: s,
                                prompt: o,
                                tag: a,
                                id: c,
                                attestation: r ? .attestation,
                                tvf: r ? .tvf
                            }).then(i).catch(e => {
                                this.logger.warn(e, e ? .message), n(e)
                            })
                        }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${c} tag:${a}`);
                        try {
                            await h, this.events.removeListener(_, n)
                        } catch (r) {
                            let e, t;
                            this.queue.set(c, (e = e6({}, l), t = {
                                attempt: 1
                            }, e0(e, e1(t)))), this.logger.warn(r, r ? .message)
                        }
                    });
                    this.logger.trace({
                        type: "method",
                        method: "publish",
                        params: {
                            id: c,
                            topic: e,
                            message: t,
                            opts: r
                        }
                    }), await (0, d.createExpiringPromise)(i, this.publishTimeout, h)
                } catch (e) {
                    if (this.logger.debug("Failed to Publish Payload"), this.logger.error(e), null != (i = r ? .internal) && i.throwOnFailedPublish) throw e
                } finally {
                    this.queue.delete(c)
                }
            }), e4(this, "on", (e, t) => {
                this.events.on(e, t)
            }), e4(this, "once", (e, t) => {
                this.events.once(e, t)
            }), e4(this, "off", (e, t) => {
                this.events.off(e, t)
            }), e4(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t)
            }), this.relayer = e, this.logger = (0, n.generateChildLogger)(t, this.name), this.registerEventListeners()
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
        }
        async rpcPublish(e) {
            var t, r, i, s;
            let {
                topic: n,
                message: o,
                ttl: a = C,
                prompt: c,
                tag: l,
                id: h,
                attestation: u,
                tvf: p
            } = e, g = {
                method: (0, d.getRelayProtocolApi)((0, d.getRelayProtocolName)().protocol).publish,
                params: e6({
                    topic: n,
                    message: o,
                    ttl: a,
                    prompt: c,
                    tag: l,
                    attestation: u
                }, p),
                id: h
            };
            (0, d.isUndefined)(null == (t = g.params) ? void 0 : t.prompt) && (null == (r = g.params) || delete r.prompt), (0, d.isUndefined)(null == (i = g.params) ? void 0 : i.tag) && (null == (s = g.params) || delete s.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                type: "message",
                direction: "outgoing",
                request: g
            });
            let f = await this.relayer.request(g);
            return this.relayer.events.emit(_, e), this.logger.debug("Successfully Published Payload"), f
        }
        removeRequestFromQueue(e) {
            this.queue.delete(e)
        }
        checkQueue() {
            this.queue.forEach(async (e, t) => {
                let r = e.attempt + 1;
                this.queue.set(t, e0(e6({}, e), e1({
                    attempt: r
                })));
                let {
                    topic: i,
                    message: s,
                    opts: n,
                    attestation: o
                } = e;
                this.logger.warn({}, `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`), await this.rpcPublish(e0(e6({}, e), e1({
                    topic: i,
                    message: s,
                    ttl: n.ttl,
                    prompt: n.prompt,
                    tag: n.tag,
                    id: n.id,
                    attestation: o,
                    tvf: n.tvf
                }))), this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`)
            })
        }
        registerEventListeners() {
            this.relayer.core.heartbeat.on(i.HEARTBEAT_EVENTS.pulse, () => {
                if (this.needsTransportRestart) {
                    this.needsTransportRestart = !1, this.relayer.events.emit(N);
                    return
                }
                this.checkQueue()
            }), this.relayer.on(A, e => {
                this.removeRequestFromQueue(e.id.toString())
            })
        }
    }
    var e7 = Object.defineProperty,
        te = (e, t, r) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? e7(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[i] = r
        };
    class tt {
        constructor() {
            te(this, "map", new Map), te(this, "set", (e, t) => {
                let r = this.get(e);
                this.exists(e, t) || this.map.set(e, [...r, t])
            }), te(this, "get", e => this.map.get(e) || []), te(this, "exists", (e, t) => this.get(e).includes(t)), te(this, "delete", (e, t) => {
                if (typeof t > "u") return void this.map.delete(e);
                if (!this.map.has(e)) return;
                let r = this.get(e);
                if (!this.exists(e, t)) return;
                let i = r.filter(e => e !== t);
                i.length ? this.map.set(e, i) : this.map.delete(e)
            }), te(this, "clear", () => {
                this.map.clear()
            })
        }
        get topics() {
            return Array.from(this.map.keys())
        }
    }
    var tr = Object.defineProperty,
        ti = Object.defineProperties,
        ts = Object.getOwnPropertyDescriptors,
        tn = Object.getOwnPropertySymbols,
        to = Object.prototype.hasOwnProperty,
        ta = Object.prototype.propertyIsEnumerable,
        tc = (e, t, r) => t in e ? tr(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        tl = (e, t) => {
            for (var r in t || (t = {})) to.call(t, r) && tc(e, r, t[r]);
            if (tn)
                for (var r of tn(t)) ta.call(t, r) && tc(e, r, t[r]);
            return e
        },
        th = (e, t, r) => tc(e, "symbol" != typeof t ? t + "" : t, r);
    class td extends a.ISubscriber {
        constructor(e, t) {
            super(e, t), this.relayer = e, this.logger = t, th(this, "subscriptions", new Map), th(this, "topicMap", new tt), th(this, "events", new r.EventEmitter), th(this, "name", "subscription"), th(this, "version", "0.3"), th(this, "pending", new Map), th(this, "cached", []), th(this, "initialized", !1), th(this, "storagePrefix", b), th(this, "subscribeTimeout", (0, c.toMiliseconds)(c.ONE_MINUTE)), th(this, "initialSubscribeTimeout", (0, c.toMiliseconds)(15 * c.ONE_SECOND)), th(this, "clientId"), th(this, "batchSubscribeTopicsLimit", 500), th(this, "init", async () => {
                this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = !0
            }), th(this, "subscribe", async (e, t) => {
                this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: e,
                        opts: t
                    }
                });
                try {
                    let r = (0, d.getRelayProtocolName)(t),
                        i = {
                            topic: e,
                            relay: r,
                            transportType: t ? .transportType
                        };
                    this.pending.set(e, i);
                    let s = await this.rpcSubscribe(e, r, t);
                    return "string" == typeof s && (this.onSubscribe(s, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                        type: "method",
                        method: "subscribe",
                        params: {
                            topic: e,
                            opts: t
                        }
                    })), s
                } catch (e) {
                    throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(e), e
                }
            }), th(this, "unsubscribe", async (e, t) => {
                this.isInitialized(), "u" > typeof t ? .id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
            }), th(this, "isSubscribed", e => new Promise(t => {
                t(this.topicMap.topics.includes(e))
            })), th(this, "isKnownTopic", e => new Promise(t => {
                t(this.topicMap.topics.includes(e) || this.pending.has(e) || this.cached.some(t => t.topic === e))
            })), th(this, "on", (e, t) => {
                this.events.on(e, t)
            }), th(this, "once", (e, t) => {
                this.events.once(e, t)
            }), th(this, "off", (e, t) => {
                this.events.off(e, t)
            }), th(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t)
            }), th(this, "start", async () => {
                await this.onConnect()
            }), th(this, "stop", async () => {
                await this.onDisconnect()
            }), th(this, "restart", async () => {
                await this.restore(), await this.onRestart()
            }), th(this, "checkPending", async () => {
                if (0 === this.pending.size && (!this.initialized || !this.relayer.connected)) return;
                let e = [];
                this.pending.forEach(t => {
                    e.push(t)
                }), await this.batchSubscribe(e)
            }), th(this, "registerEventListeners", () => {
                this.relayer.core.heartbeat.on(i.HEARTBEAT_EVENTS.pulse, async () => {
                    await this.checkPending()
                }), this.events.on(B, async e => {
                    this.logger.info(`Emitting ${B}`), this.logger.debug({
                        type: "event",
                        event: B,
                        data: e
                    }), await this.persist()
                }), this.events.on(q, async e => {
                    this.logger.info(`Emitting ${q}`), this.logger.debug({
                        type: "event",
                        event: q,
                        data: e
                    }), await this.persist()
                })
            }), this.relayer = e, this.logger = (0, n.generateChildLogger)(t, this.name), this.clientId = ""
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
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
        get hasAnyTopics() {
            return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0
        }
        hasSubscription(e, t) {
            let r = !1;
            try {
                r = this.getSubscription(e).topic === t
            } catch {}
            return r
        }
        reset() {
            this.cached = [], this.initialized = !0
        }
        onDisable() {
            this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
        }
        async unsubscribeByTopic(e, t) {
            let r = this.topicMap.get(e);
            await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
        }
        async unsubscribeById(e, t, r) {
            this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: r
                }
            });
            try {
                let i = (0, d.getRelayProtocolName)(r);
                await this.restartToComplete({
                    topic: e,
                    id: t,
                    relay: i
                }), await this.rpcUnsubscribe(e, t, i);
                let s = (0, d.getSdkError)("USER_DISCONNECTED", `${this.name}, ${e}`);
                await this.onUnsubscribe(e, t, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "unsubscribe",
                    params: {
                        topic: e,
                        id: t,
                        opts: r
                    }
                })
            } catch (e) {
                throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e), e
            }
        }
        async rpcSubscribe(e, t, r) {
            var i;
            r && r ? .transportType !== D || await this.restartToComplete({
                topic: e,
                id: e,
                relay: t
            });
            let s = {
                method: (0, d.getRelayProtocolApi)(t.protocol).subscribe,
                params: {
                    topic: e
                }
            };
            this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: s
            });
            let n = null == (i = r ? .internal) ? void 0 : i.throwOnFailedPublish;
            try {
                let t = await this.getSubscriptionId(e);
                if (r ? .transportType === U) return setTimeout(() => {
                    (this.relayer.connected || this.relayer.connecting) && this.relayer.request(s).catch(e => this.logger.warn(e))
                }, (0, c.toMiliseconds)(c.ONE_SECOND)), t;
                let i = new Promise(async t => {
                        let r = i => {
                            i.topic === e && (this.events.removeListener(B, r), t(i.id))
                        };
                        this.events.on(B, r);
                        try {
                            let i = await (0, d.createExpiringPromise)(new Promise((e, t) => {
                                this.relayer.request(s).catch(e => {
                                    this.logger.warn(e, e ? .message), t(e)
                                }).then(e)
                            }), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
                            this.events.removeListener(B, r), t(i)
                        } catch {}
                    }),
                    o = await (0, d.createExpiringPromise)(i, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
                if (!o && n) throw Error(`Subscribing to ${e} failed, please try again`);
                return o ? t : null
            } catch (e) {
                if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(N), n) throw e
            }
            return null
        }
        async rpcBatchSubscribe(e) {
            if (!e.length) return;
            let t = e[0].relay,
                r = {
                    method: (0, d.getRelayProtocolApi)(t.protocol).batchSubscribe,
                    params: {
                        topics: e.map(e => e.topic)
                    }
                };
            this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: r
            });
            try {
                await await (0, d.createExpiringPromise)(new Promise(e => {
                    this.relayer.request(r).catch(e => this.logger.warn(e)).then(e)
                }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again")
            } catch {
                this.relayer.events.emit(N)
            }
        }
        async rpcBatchFetchMessages(e) {
            let t;
            if (!e.length) return;
            let r = e[0].relay,
                i = {
                    method: (0, d.getRelayProtocolApi)(r.protocol).batchFetchMessages,
                    params: {
                        topics: e.map(e => e.topic)
                    }
                };
            this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: i
            });
            try {
                t = await await (0, d.createExpiringPromise)(new Promise((e, t) => {
                    this.relayer.request(i).catch(e => {
                        this.logger.warn(e), t(e)
                    }).then(e)
                }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again")
            } catch {
                this.relayer.events.emit(N)
            }
            return t
        }
        rpcUnsubscribe(e, t, r) {
            let i = {
                method: (0, d.getRelayProtocolApi)(r.protocol).unsubscribe,
                params: {
                    topic: e,
                    id: t
                }
            };
            return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: i
            }), this.relayer.request(i)
        }
        onSubscribe(e, t) {
            this.setSubscription(e, ti(tl({}, t), ts({
                id: e
            }))), this.pending.delete(t.topic)
        }
        onBatchSubscribe(e) {
            e.length && e.forEach(e => {
                this.setSubscription(e.id, tl({}, e)), this.pending.delete(e.topic)
            })
        }
        async onUnsubscribe(e, t, r) {
            this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
        }
        async setRelayerSubscriptions(e) {
            await this.relayer.core.storage.setItem(this.storageKey, e)
        }
        async getRelayerSubscriptions() {
            return await this.relayer.core.storage.getItem(this.storageKey)
        }
        setSubscription(e, t) {
            this.logger.debug("Setting subscription"), this.logger.trace({
                type: "method",
                method: "setSubscription",
                id: e,
                subscription: t
            }), this.addSubscription(e, t)
        }
        addSubscription(e, t) {
            this.subscriptions.set(e, tl({}, t)), this.topicMap.set(t.topic, e), this.events.emit(B, t)
        }
        getSubscription(e) {
            this.logger.debug("Getting subscription"), this.logger.trace({
                type: "method",
                method: "getSubscription",
                id: e
            });
            let t = this.subscriptions.get(e);
            if (!t) {
                let {
                    message: t
                } = (0, d.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                throw Error(t)
            }
            return t
        }
        deleteSubscription(e, t) {
            this.logger.debug("Deleting subscription"), this.logger.trace({
                type: "method",
                method: "deleteSubscription",
                id: e,
                reason: t
            });
            let r = this.getSubscription(e);
            this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(q, ti(tl({}, r), ts({
                reason: t
            })))
        }
        async persist() {
            await this.setRelayerSubscriptions(this.values), this.events.emit("subscription_sync")
        }
        async onRestart() {
            if (this.cached.length) {
                let e = [...this.cached],
                    t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                for (let r = 0; r < t; r++) {
                    let t = e.splice(0, this.batchSubscribeTopicsLimit);
                    await this.batchSubscribe(t)
                }
            }
            this.events.emit("subscription_resubscribed")
        }
        async restore() {
            try {
                let e = await this.getRelayerSubscriptions();
                if (typeof e > "u" || !e.length) return;
                if (this.subscriptions.size) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(e)
                }
                this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                    type: "method",
                    method: "restore",
                    subscriptions: this.values
                })
            } catch (e) {
                this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
            }
        }
        async batchSubscribe(e) {
            e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async e => ti(tl({}, e), ts({
                id: await this.getSubscriptionId(e.topic)
            }))))))
        }
        async batchFetchMessages(e) {
            if (!e.length) return;
            this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
            let t = await this.rpcBatchFetchMessages(e);
            t && t.messages && (await (0, d.sleep)((0, c.toMiliseconds)(c.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t.messages))
        }
        async onConnect() {
            await this.restart(), this.reset()
        }
        onDisconnect() {
            this.onDisable()
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: e
                } = (0, d.getInternalError)("NOT_INITIALIZED", this.name);
                throw Error(e)
            }
        }
        async restartToComplete(e) {
            this.relayer.connected || this.relayer.connecting || (this.cached.push(e), await this.relayer.transportOpen())
        }
        async getClientId() {
            return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId
        }
        async getSubscriptionId(e) {
            return (0, d.hashMessage)(e + await this.getClientId())
        }
    }
    var tu = Object.defineProperty,
        tp = Object.getOwnPropertySymbols,
        tg = Object.prototype.hasOwnProperty,
        tf = Object.prototype.propertyIsEnumerable,
        tm = (e, t, r) => t in e ? tu(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        ty = (e, t) => {
            for (var r in t || (t = {})) tg.call(t, r) && tm(e, r, t[r]);
            if (tp)
                for (var r of tp(t)) tf.call(t, r) && tm(e, r, t[r]);
            return e
        },
        tw = (e, t, r) => tm(e, "symbol" != typeof t ? t + "" : t, r);
    class tb extends a.IRelayer {
        constructor(e) {
            super(e), tw(this, "protocol", "wc"), tw(this, "version", 2), tw(this, "core"), tw(this, "logger"), tw(this, "events", new r.EventEmitter), tw(this, "provider"), tw(this, "messages"), tw(this, "subscriber"), tw(this, "publisher"), tw(this, "name", "relayer"), tw(this, "transportExplicitlyClosed", !1), tw(this, "initialized", !1), tw(this, "connectionAttemptInProgress", !1), tw(this, "relayUrl"), tw(this, "projectId"), tw(this, "packageName"), tw(this, "bundleId"), tw(this, "hasExperiencedNetworkDisruption", !1), tw(this, "pingTimeout"), tw(this, "heartBeatTimeout", (0, c.toMiliseconds)(c.THIRTY_SECONDS + c.FIVE_SECONDS)), tw(this, "reconnectTimeout"), tw(this, "connectPromise"), tw(this, "reconnectInProgress", !1), tw(this, "requestsInFlight", []), tw(this, "connectTimeout", (0, c.toMiliseconds)(15 * c.ONE_SECOND)), tw(this, "request", async e => {
                var t, r;
                this.logger.debug("Publishing Request Payload");
                let i = e.id || (0, g.getBigIntRpcId)().toString();
                await this.toEstablishConnection();
                try {
                    this.logger.trace({
                        id: i,
                        method: e.method,
                        topic: null == (t = e.params) ? void 0 : t.topic
                    }, "relayer.request - publishing...");
                    let s = `${i}:${(null==(r=e.params)?void 0:r.tag)||""}`;
                    this.requestsInFlight.push(s);
                    let n = await this.provider.request(e);
                    return this.requestsInFlight = this.requestsInFlight.filter(e => e !== s), n
                } catch (e) {
                    throw this.logger.debug(`Failed to Publish Request: ${i}`), e
                }
            }), tw(this, "resetPingTimeout", () => {
                (0, d.isNode)() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
                    var e, t, r, i;
                    try {
                        this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), null == (i = null == (r = null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket) ? void 0 : r.terminate) || i.call(r)
                    } catch (e) {
                        this.logger.warn(e, e ? .message)
                    }
                }, this.heartBeatTimeout))
            }), tw(this, "onPayloadHandler", e => {
                this.onProviderPayload(e), this.resetPingTimeout()
            }), tw(this, "onConnectHandler", () => {
                this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit("relayer_connect")
            }), tw(this, "onDisconnectHandler", () => {
                this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect()
            }), tw(this, "onProviderErrorHandler", e => {
                this.logger.fatal(`Fatal socket error: ${e.message}`), this.events.emit("relayer_error", e), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose()
            }), tw(this, "registerProviderListeners", () => {
                this.provider.on(T, this.onPayloadHandler), this.provider.on(k, this.onConnectHandler), this.provider.on(P, this.onDisconnectHandler), this.provider.on(O, this.onProviderErrorHandler)
            }), this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? (0, n.generateChildLogger)(e.logger, this.name) : (0, o.pino)((0, n.getDefaultLoggerOptions)({
                level: e.logger || "error"
            })), this.messages = new eQ(this.logger, e.core), this.subscriber = new td(this, this.logger), this.publisher = new e9(this, this.logger), this.relayUrl = e ? .relayUrl || S, this.projectId = e.projectId, (0, d.isAndroid)() ? this.packageName = (0, d.getAppId)() : (0, d.isIos)() && (this.bundleId = (0, d.getAppId)()), this.provider = {}
        }
        async init() {
            if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = !0, this.subscriber.hasAnyTopics) try {
                await this.transportOpen()
            } catch (e) {
                this.logger.warn(e, e ? .message)
            }
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
        }
        get connected() {
            var e, t, r;
            return (null == (r = null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket) ? void 0 : r.readyState) === 1
        }
        get connecting() {
            var e, t, r;
            return (null == (r = null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket) ? void 0 : r.readyState) === 0 || void 0 !== this.connectPromise
        }
        async publish(e, t, r) {
            this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: D
            }, "outbound")
        }
        async subscribe(e, t) {
            var r, i, s;
            this.isInitialized(), null != t && t.transportType && t ? .transportType !== "relay" || await this.toEstablishConnection();
            let n = typeof(null == (r = t ? .internal) ? void 0 : r.throwOnFailedPublish) > "u" || (null == (i = t ? .internal) ? void 0 : i.throwOnFailedPublish),
                o = (null == (s = this.subscriber.topicMap.get(e)) ? void 0 : s[0]) || "",
                a, c = t => {
                    t.topic === e && (this.subscriber.off(B, c), a())
                };
            return await Promise.all([new Promise(e => {
                a = e, this.subscriber.on(B, c)
            }), new Promise(async (r, i) => {
                o = await this.subscriber.subscribe(e, ty({
                    internal: {
                        throwOnFailedPublish: n
                    }
                }, t)).catch(e => {
                    n && i(e)
                }) || o, r()
            })]), o
        }
        async unsubscribe(e, t) {
            this.isInitialized(), await this.subscriber.unsubscribe(e, t)
        }
        on(e, t) {
            this.events.on(e, t)
        }
        once(e, t) {
            this.events.once(e, t)
        }
        off(e, t) {
            this.events.off(e, t)
        }
        removeListener(e, t) {
            this.events.removeListener(e, t)
        }
        async transportDisconnect() {
            this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await (0, d.createExpiringPromise)(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect()
        }
        async transportClose() {
            this.transportExplicitlyClosed = !0, await this.transportDisconnect()
        }
        async transportOpen(e) {
            if (!this.subscriber.hasAnyTopics) return void this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
            if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, r) => {
                    await this.connect(e).then(t).catch(r).finally(() => {
                        this.connectPromise = void 0
                    })
                }), await this.connectPromise), !this.connected) throw Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`)
        }
        async restartTransport(e) {
            this.logger.debug({}, "Restarting transport..."), this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen())
        }
        async confirmOnlineStateOrThrow() {
            if (!await (0, d.isOnline)()) throw Error("No internet connection detected. Please restart your network and try again.")
        }
        async handleBatchMessageEvents(e) {
            if (e ? .length === 0) return void this.logger.trace("Batch message events is empty. Ignoring...");
            let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
            for (let e of (this.logger.debug(`Batch of ${t.length} message events sorted`), t)) try {
                await this.onMessageEvent(e)
            } catch (e) {
                this.logger.warn(e, "Error while processing batch message event: " + e ? .message)
            }
            this.logger.trace(`Batch of ${t.length} message events processed`)
        }
        async onLinkMessageEvent(e, t) {
            let {
                topic: r
            } = e;
            if (!t.sessionExists) {
                let e = (0, d.calcExpiry)(c.FIVE_MINUTES);
                await this.core.pairing.pairings.set(r, {
                    topic: r,
                    expiry: e,
                    relay: {
                        protocol: "irn"
                    },
                    active: !1
                })
            }
            this.events.emit(x, e), await this.recordMessageEvent(e, L)
        }
        async connect(e) {
            await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
            let t = 1;
            for (; t < 6;) {
                try {
                    if (this.transportExplicitlyClosed) break;
                    this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`), await this.createProvider(), await new Promise(async (e, t) => {
                        let r = () => {
                            t(Error("Connection interrupted while trying to subscribe"))
                        };
                        this.provider.once(P, r), await (0, d.createExpiringPromise)(new Promise((e, t) => {
                            this.provider.connect().then(e).catch(t)
                        }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch(e => {
                            t(e)
                        }).finally(() => {
                            this.provider.off(P, r), clearTimeout(this.reconnectTimeout)
                        }), await new Promise(async (e, t) => {
                            let r = () => {
                                t(Error("Connection interrupted while trying to subscribe"))
                            };
                            this.provider.once(P, r), await this.subscriber.start().then(e).catch(t).finally(() => {
                                this.provider.off(P, r)
                            })
                        }), this.hasExperiencedNetworkDisruption = !1, e()
                    })
                } catch (e) {
                    await this.subscriber.stop(), this.logger.warn({}, e.message), this.hasExperiencedNetworkDisruption = !0
                } finally {
                    this.connectionAttemptInProgress = !1
                }
                if (this.connected) {
                    this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
                    break
                }
                await new Promise(e => setTimeout(e, (0, c.toMiliseconds)(+t))), t++
            }
        }
        startPingTimeout() {
            var e, t, r, i, s;
            if ((0, d.isNode)()) try {
                null != (t = null == (e = this.provider) ? void 0 : e.connection) && t.socket && (null == (s = null == (i = null == (r = this.provider) ? void 0 : r.connection) ? void 0 : i.socket) || s.on("ping", () => {
                    this.resetPingTimeout()
                })), this.resetPingTimeout()
            } catch (e) {
                this.logger.warn(e, e ? .message)
            }
        }
        async createProvider() {
            this.provider.connection && this.unregisterProviderListeners();
            let e = await this.core.crypto.signJWT(this.relayUrl);
            this.provider = new p.JsonRpcProvider(new m.default((0, d.formatRelayRpcUrl)({
                sdkVersion: R,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
                packageName: this.packageName
            }))), this.registerProviderListeners()
        }
        async recordMessageEvent(e, t) {
            let {
                topic: r,
                message: i
            } = e;
            await this.messages.set(r, i, t)
        }
        async shouldIgnoreMessageEvent(e) {
            let {
                topic: t,
                message: r
            } = e;
            if (!r || 0 === r.length) return this.logger.warn(`Ignoring invalid/empty message: ${r}`), !0;
            if (!await this.subscriber.isKnownTopic(t)) return this.logger.warn(`Ignoring message for unknown topic ${t}`), !0;
            let i = this.messages.has(t, r);
            return i && this.logger.warn(`Ignoring duplicate message: ${r}`), i
        }
        async onProviderPayload(e) {
            if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                    type: "payload",
                    direction: "incoming",
                    payload: e
                }), (0, f.isJsonRpcRequest)(e)) {
                if (!e.method.endsWith("_subscription")) return;
                let t = e.params,
                    {
                        topic: r,
                        message: i,
                        publishedAt: s,
                        attestation: n
                    } = t.data,
                    o = {
                        topic: r,
                        message: i,
                        publishedAt: s,
                        transportType: D,
                        attestation: n
                    };
                this.logger.debug("Emitting Relayer Payload"), this.logger.trace(ty({
                    type: "event",
                    event: t.id
                }, o)), this.events.emit(t.id, o), await this.acknowledgePayload(e), await this.onMessageEvent(o)
            } else(0, f.isJsonRpcResponse)(e) && this.events.emit(A, e)
        }
        async onMessageEvent(e) {
            await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, L), this.events.emit(x, e))
        }
        async acknowledgePayload(e) {
            let t = (0, g.formatJsonRpcResult)(e.id, !0);
            await this.provider.connection.send(t)
        }
        unregisterProviderListeners() {
            this.provider.off(T, this.onPayloadHandler), this.provider.off(k, this.onConnectHandler), this.provider.off(P, this.onDisconnectHandler), this.provider.off(O, this.onProviderErrorHandler), clearTimeout(this.pingTimeout)
        }
        async registerEventListeners() {
            let e = await (0, d.isOnline)();
            (0, d.subscribeToNetworkChange)(async t => {
                e !== t && (e = t, t ? await this.transportOpen().catch(e => this.logger.error(e, e ? .message)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1))
            })
        }
        async onProviderDisconnect() {
            clearTimeout(this.pingTimeout), this.events.emit("relayer_disconnect"), this.connectionAttemptInProgress = !1, !this.reconnectInProgress && (this.reconnectInProgress = !0, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
                await this.transportOpen().catch(e => this.logger.error(e, e ? .message)), this.reconnectTimeout = void 0, this.reconnectInProgress = !1
            }, (0, c.toMiliseconds)(.1)))))
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: e
                } = (0, d.getInternalError)("NOT_INITIALIZED", this.name);
                throw Error(e)
            }
        }
        async toEstablishConnection() {
            await this.confirmOnlineStateOrThrow(), this.connected || await this.connect()
        }
    }

    function tv() {}

    function tE(e) {
        if (!e || "object" != typeof e) return !1;
        let t = Object.getPrototypeOf(e);
        return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && "[object Object]" === Object.prototype.toString.call(e)
    }

    function tI(e) {
        return Object.getOwnPropertySymbols(e).filter(t => Object.prototype.propertyIsEnumerable.call(e, t))
    }

    function tC(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
    }
    let tS = "[object Arguments]",
        tx = "[object Object]";
    var tA = Object.defineProperty,
        tN = Object.getOwnPropertySymbols,
        t_ = Object.prototype.hasOwnProperty,
        tT = Object.prototype.propertyIsEnumerable,
        tk = (e, t, r) => t in e ? tA(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        tP = (e, t) => {
            for (var r in t || (t = {})) t_.call(t, r) && tk(e, r, t[r]);
            if (tN)
                for (var r of tN(t)) tT.call(t, r) && tk(e, r, t[r]);
            return e
        },
        tO = (e, t, r) => tk(e, "symbol" != typeof t ? t + "" : t, r);
    class tR extends a.IStore {
        constructor(e, r, i, s = b, o) {
            super(e, r, i, s), this.core = e, this.logger = r, this.name = i, tO(this, "map", new Map), tO(this, "version", "0.3"), tO(this, "cached", []), tO(this, "initialized", !1), tO(this, "getKey"), tO(this, "storagePrefix", b), tO(this, "recentlyDeleted", []), tO(this, "recentlyDeletedLimit", 200), tO(this, "init", async () => {
                this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
                    this.getKey && null !== e && !(0, d.isUndefined)(e) ? this.map.set(this.getKey(e), e) : (0, d.isProposalStruct)(e) ? this.map.set(e.id, e) : (0, d.isSessionStruct)(e) && this.map.set(e.topic, e)
                }), this.cached = [], this.initialized = !0)
            }), tO(this, "set", async (e, t) => {
                this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                    type: "method",
                    method: "set",
                    key: e,
                    value: t
                }), this.map.set(e, t), await this.persist())
            }), tO(this, "get", e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                type: "method",
                method: "get",
                key: e
            }), this.getData(e))), tO(this, "getAll", e => (this.isInitialized(), e ? this.values.filter(r => Object.keys(e).every(i => {
                var s;
                return s = r[i],
                    function e(r, i, s, n, o, a, c) {
                        let l = c(r, i, s, n, o, a);
                        if (void 0 !== l) return l;
                        if (typeof r == typeof i) switch (typeof r) {
                            case "bigint":
                            case "string":
                            case "boolean":
                            case "symbol":
                            case "undefined":
                            case "function":
                                return r === i;
                            case "number":
                                return r === i || Object.is(r, i)
                        }
                        return function r(i, s, n, o) {
                            if (Object.is(i, s)) return !0;
                            let a = tC(i),
                                c = tC(s);
                            if (a === tS && (a = tx), c === tS && (c = tx), a !== c) return !1;
                            switch (a) {
                                case "[object String]":
                                    return i.toString() === s.toString();
                                case "[object Number]":
                                    {
                                        let e = i.valueOf(),
                                            t = s.valueOf();
                                        return e === t || Number.isNaN(e) && Number.isNaN(t)
                                    }
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Symbol]":
                                    return Object.is(i.valueOf(), s.valueOf());
                                case "[object RegExp]":
                                    return i.source === s.source && i.flags === s.flags;
                                case "[object Function]":
                                    return i === s
                            }
                            let l = (n = n ? ? new Map).get(i),
                                h = n.get(s);
                            if (null != l && null != h) return l === s;
                            n.set(i, s), n.set(s, i);
                            try {
                                switch (a) {
                                    case "[object Map]":
                                        if (i.size !== s.size) return !1;
                                        for (let [t, r] of i.entries())
                                            if (!s.has(t) || !e(r, s.get(t), t, i, s, n, o)) return !1;
                                        return !0;
                                    case "[object Set]":
                                        {
                                            if (i.size !== s.size) return !1;
                                            let t = Array.from(i.values()),
                                                r = Array.from(s.values());
                                            for (let a = 0; a < t.length; a++) {
                                                let c = t[a],
                                                    l = r.findIndex(t => e(c, t, void 0, i, s, n, o));
                                                if (-1 === l) return !1;
                                                r.splice(l, 1)
                                            }
                                            return !0
                                        }
                                    case "[object Array]":
                                    case "[object Uint8Array]":
                                    case "[object Uint8ClampedArray]":
                                    case "[object Uint16Array]":
                                    case "[object Uint32Array]":
                                    case "[object BigUint64Array]":
                                    case "[object Int8Array]":
                                    case "[object Int16Array]":
                                    case "[object Int32Array]":
                                    case "[object BigInt64Array]":
                                    case "[object Float32Array]":
                                    case "[object Float64Array]":
                                        if ("u" > typeof t.Buffer && t.Buffer.isBuffer(i) !== t.Buffer.isBuffer(s) || i.length !== s.length) return !1;
                                        for (let t = 0; t < i.length; t++)
                                            if (!e(i[t], s[t], t, i, s, n, o)) return !1;
                                        return !0;
                                    case "[object ArrayBuffer]":
                                        return i.byteLength === s.byteLength && r(new Uint8Array(i), new Uint8Array(s), n, o);
                                    case "[object DataView]":
                                        return i.byteLength === s.byteLength && i.byteOffset === s.byteOffset && r(new Uint8Array(i), new Uint8Array(s), n, o);
                                    case "[object Error]":
                                        return i.name === s.name && i.message === s.message;
                                    case tx:
                                        {
                                            if (!(r(i.constructor, s.constructor, n, o) || tE(i) && tE(s))) return !1;
                                            let t = [...Object.keys(i), ...tI(i)],
                                                a = [...Object.keys(s), ...tI(s)];
                                            if (t.length !== a.length) return !1;
                                            for (let r = 0; r < t.length; r++) {
                                                let a = t[r],
                                                    c = i[a];
                                                if (!Object.hasOwn(s, a)) return !1;
                                                let l = s[a];
                                                if (!e(c, l, a, i, s, n, o)) return !1
                                            }
                                            return !0
                                        }
                                    default:
                                        return !1
                                }
                            } finally {
                                n.delete(i), n.delete(s)
                            }
                        }(r, i, a, c)
                    }(s, e[i], void 0, void 0, void 0, void 0, tv)
            })) : this.values)), tO(this, "update", async (e, t) => {
                this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                    type: "method",
                    method: "update",
                    key: e,
                    update: t
                });
                let r = tP(tP({}, this.getData(e)), t);
                this.map.set(e, r), await this.persist()
            }), tO(this, "delete", async (e, t) => {
                this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t
                }), this.map.delete(e), this.addToRecentlyDeleted(e), await this.persist())
            }), this.logger = (0, n.generateChildLogger)(r, this.name), this.storagePrefix = s, this.getKey = o
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
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
        addToRecentlyDeleted(e) {
            this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2)
        }
        async setDataStore(e) {
            await this.core.storage.setItem(this.storageKey, e)
        }
        async getDataStore() {
            return await this.core.storage.getItem(this.storageKey)
        }
        getData(e) {
            let t = this.map.get(e);
            if (!t) {
                if (this.recentlyDeleted.includes(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                    throw this.logger.error(t), Error(t)
                }
                let {
                    message: t
                } = (0, d.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                throw this.logger.error(t), Error(t)
            }
            return t
        }
        async persist() {
            await this.setDataStore(this.values)
        }
        async restore() {
            try {
                let e = await this.getDataStore();
                if (typeof e > "u" || !e.length) return;
                if (this.map.size) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(e), Error(e)
                }
                this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                    type: "method",
                    method: "restore",
                    value: this.values
                })
            } catch (e) {
                this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
            }
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: e
                } = (0, d.getInternalError)("NOT_INITIALIZED", this.name);
                throw Error(e)
            }
        }
    }
    var tU = Object.defineProperty,
        tD = (e, t, r) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? tU(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[i] = r
        };
    class tL {
        constructor(e, t) {
            this.core = e, this.logger = t, tD(this, "name", "pairing"), tD(this, "version", "0.3"), tD(this, "events", new r.default), tD(this, "pairings"), tD(this, "initialized", !1), tD(this, "storagePrefix", b), tD(this, "ignoredPayloadTypes", [d.TYPE_1]), tD(this, "registeredMethods", []), tD(this, "init", async () => {
                this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
            }), tD(this, "register", ({
                methods: e
            }) => {
                this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
            }), tD(this, "create", async e => {
                this.isInitialized();
                let t = (0, d.generateRandomBytes32)(),
                    r = await this.core.crypto.setSymKey(t),
                    i = (0, d.calcExpiry)(c.FIVE_MINUTES),
                    s = {
                        protocol: "irn"
                    },
                    n = {
                        topic: r,
                        expiry: i,
                        relay: s,
                        active: !1,
                        methods: e ? .methods
                    },
                    o = (0, d.formatUri)({
                        protocol: this.core.protocol,
                        version: this.core.version,
                        topic: r,
                        symKey: t,
                        relay: s,
                        expiryTimestamp: i,
                        methods: e ? .methods
                    });
                return this.events.emit($, n), this.core.expirer.set(r, i), await this.pairings.set(r, n), await this.core.relayer.subscribe(r, {
                    transportType: e ? .transportType
                }), {
                    topic: r,
                    uri: o
                }
            }), tD(this, "pair", async e => {
                let t;
                this.isInitialized();
                let r = this.core.eventClient.createEvent({
                    properties: {
                        topic: e ? .uri,
                        trace: ["pairing_started"]
                    }
                });
                this.isValidPair(e, r);
                let {
                    topic: i,
                    symKey: s,
                    relay: n,
                    expiryTimestamp: o,
                    methods: a
                } = (0, d.parseUri)(e.uri);
                if (r.props.properties.topic = i, r.addTrace("pairing_uri_validation_success"), r.addTrace("pairing_uri_not_expired"), this.pairings.keys.includes(i)) {
                    if (t = this.pairings.get(i), r.addTrace("existing_pairing"), t.active) throw r.setError("active_pairing_already_exists"), Error(`Pairing already exists: ${i}. Please try again with a new connection URI.`);
                    r.addTrace("pairing_not_expired")
                }
                let l = o || (0, d.calcExpiry)(c.FIVE_MINUTES),
                    h = {
                        topic: i,
                        relay: n,
                        expiry: l,
                        active: !1,
                        methods: a
                    };
                this.core.expirer.set(i, l), await this.pairings.set(i, h), r.addTrace("store_new_pairing"), e.activatePairing && await this.activate({
                    topic: i
                }), this.events.emit($, h), r.addTrace("emit_inactive_pairing"), this.core.crypto.keychain.has(i) || await this.core.crypto.setSymKey(s, i), r.addTrace("subscribing_pairing_topic");
                try {
                    await this.core.relayer.confirmOnlineStateOrThrow()
                } catch {
                    r.setError("no_internet_connection")
                }
                try {
                    await this.core.relayer.subscribe(i, {
                        relay: n
                    })
                } catch (e) {
                    throw r.setError("subscribe_pairing_topic_failure"), e
                }
                return r.addTrace("subscribe_pairing_topic_success"), h
            }), tD(this, "activate", async ({
                topic: e
            }) => {
                this.isInitialized();
                let t = (0, d.calcExpiry)(c.FIVE_MINUTES);
                this.core.expirer.set(e, t), await this.pairings.update(e, {
                    active: !0,
                    expiry: t
                })
            }), tD(this, "ping", async e => {
                this.isInitialized(), await this.isValidPing(e), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
                let {
                    topic: t
                } = e;
                if (this.pairings.keys.includes(t)) {
                    let e = await this.sendRequest(t, "wc_pairingPing", {}),
                        {
                            done: r,
                            resolve: i,
                            reject: s
                        } = (0, d.createDelayedPromise)();
                    this.events.once((0, d.engineEvent)("pairing_ping", e), ({
                        error: e
                    }) => {
                        e ? s(e) : i()
                    }), await r()
                }
            }), tD(this, "updateExpiry", async ({
                topic: e,
                expiry: t
            }) => {
                this.isInitialized(), await this.pairings.update(e, {
                    expiry: t
                })
            }), tD(this, "updateMetadata", async ({
                topic: e,
                metadata: t
            }) => {
                this.isInitialized(), await this.pairings.update(e, {
                    peerMetadata: t
                })
            }), tD(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), tD(this, "disconnect", async e => {
                this.isInitialized(), await this.isValidDisconnect(e);
                let {
                    topic: t
                } = e;
                this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", (0, d.getSdkError)("USER_DISCONNECTED")), await this.deletePairing(t))
            }), tD(this, "formatUriFromPairing", e => {
                this.isInitialized();
                let {
                    topic: t,
                    relay: r,
                    expiry: i,
                    methods: s
                } = e, n = this.core.crypto.keychain.get(t);
                return (0, d.formatUri)({
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: t,
                    symKey: n,
                    relay: r,
                    expiryTimestamp: i,
                    methods: s
                })
            }), tD(this, "sendRequest", async (e, t, r) => {
                let i = (0, g.formatJsonRpcRequest)(t, r),
                    s = await this.core.crypto.encode(e, i),
                    n = j[t].req;
                return this.core.history.set(e, i), this.core.relayer.publish(e, s, n), i.id
            }), tD(this, "sendResult", async (e, t, r) => {
                let i = (0, g.formatJsonRpcResult)(e, r),
                    s = await this.core.crypto.encode(t, i),
                    n = j[(await this.core.history.get(t, e)).request.method].res;
                await this.core.relayer.publish(t, s, n), await this.core.history.resolve(i)
            }), tD(this, "sendError", async (e, t, r) => {
                let i = (0, g.formatJsonRpcError)(e, r),
                    s = await this.core.crypto.encode(t, i),
                    n = (await this.core.history.get(t, e)).request.method,
                    o = j[n] ? j[n].res : j.unregistered_method.res;
                await this.core.relayer.publish(t, s, o), await this.core.history.resolve(i)
            }), tD(this, "deletePairing", async (e, t) => {
                await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, (0, d.getSdkError)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
            }), tD(this, "cleanup", async () => {
                let e = this.pairings.getAll().filter(e => (0, d.isExpired)(e.expiry));
                await Promise.all(e.map(e => this.deletePairing(e.topic)))
            }), tD(this, "onRelayEventRequest", async e => {
                let {
                    topic: t,
                    payload: r
                } = e;
                switch (r.method) {
                    case "wc_pairingPing":
                        return await this.onPairingPingRequest(t, r);
                    case "wc_pairingDelete":
                        return await this.onPairingDeleteRequest(t, r);
                    default:
                        return await this.onUnknownRpcMethodRequest(t, r)
                }
            }), tD(this, "onRelayEventResponse", async e => {
                let {
                    topic: t,
                    payload: r
                } = e, i = (await this.core.history.get(t, r.id)).request.method;
                return "wc_pairingPing" === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i)
            }), tD(this, "onPairingPingRequest", async (e, t) => {
                let {
                    id: r
                } = t;
                try {
                    this.isValidPing({
                        topic: e
                    }), await this.sendResult(r, e, !0), this.events.emit("pairing_ping", {
                        id: r,
                        topic: e
                    })
                } catch (t) {
                    await this.sendError(r, e, t), this.logger.error(t)
                }
            }), tD(this, "onPairingPingResponse", (e, t) => {
                let {
                    id: r
                } = t;
                setTimeout(() => {
                    (0, f.isJsonRpcResult)(t) ? this.events.emit((0, d.engineEvent)("pairing_ping", r), {}): (0, f.isJsonRpcError)(t) && this.events.emit((0, d.engineEvent)("pairing_ping", r), {
                        error: t.error
                    })
                }, 500)
            }), tD(this, "onPairingDeleteRequest", async (e, t) => {
                let {
                    id: r
                } = t;
                try {
                    this.isValidDisconnect({
                        topic: e
                    }), await this.deletePairing(e), this.events.emit(V, {
                        id: r,
                        topic: e
                    })
                } catch (t) {
                    await this.sendError(r, e, t), this.logger.error(t)
                }
            }), tD(this, "onUnknownRpcMethodRequest", async (e, t) => {
                let {
                    id: r,
                    method: i
                } = t;
                try {
                    if (this.registeredMethods.includes(i)) return;
                    let t = (0, d.getSdkError)("WC_METHOD_UNSUPPORTED", i);
                    await this.sendError(r, e, t), this.logger.error(t)
                } catch (t) {
                    await this.sendError(r, e, t), this.logger.error(t)
                }
            }), tD(this, "onUnknownRpcMethodResponse", e => {
                this.registeredMethods.includes(e) || this.logger.error((0, d.getSdkError)("WC_METHOD_UNSUPPORTED", e))
            }), tD(this, "isValidPair", (e, t) => {
                var r;
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: r
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `pair() params: ${e}`);
                    throw t.setError(Q), Error(r)
                }
                if (!(0, d.isValidUrl)(e.uri)) {
                    let {
                        message: r
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                    throw t.setError(Q), Error(r)
                }
                let i = (0, d.parseUri)(e ? .uri);
                if (!(null != (r = i ? .relay) && r.protocol)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                    throw t.setError(Q), Error(e)
                }
                if (!(null != i && i.symKey)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", "pair() uri#symKey");
                    throw t.setError(Q), Error(e)
                }
                if (null != i && i.expiryTimestamp && (0, c.toMiliseconds)(i ? .expiryTimestamp) < Date.now()) {
                    t.setError("pairing_expired");
                    let {
                        message: e
                    } = (0, d.getInternalError)("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                    throw Error(e)
                }
            }), tD(this, "isValidPing", async e => {
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `ping() params: ${e}`);
                    throw Error(t)
                }
                let {
                    topic: t
                } = e;
                await this.isValidPairingTopic(t)
            }), tD(this, "isValidDisconnect", async e => {
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                    throw Error(t)
                }
                let {
                    topic: t
                } = e;
                await this.isValidPairingTopic(t)
            }), tD(this, "isValidPairingTopic", async e => {
                if (!(0, d.isValidString)(e, !1)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                    throw Error(t)
                }
                if (!this.pairings.keys.includes(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                    throw Error(t)
                }
                if ((0, d.isExpired)(this.pairings.get(e).expiry)) {
                    await this.deletePairing(e);
                    let {
                        message: t
                    } = (0, d.getInternalError)("EXPIRED", `pairing topic: ${e}`);
                    throw Error(t)
                }
            }), this.core = e, this.logger = (0, n.generateChildLogger)(t, this.name), this.pairings = new tR(this.core, this.logger, this.name, this.storagePrefix)
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: e
                } = (0, d.getInternalError)("NOT_INITIALIZED", this.name);
                throw Error(e)
            }
        }
        registerRelayerEvents() {
            this.core.relayer.on(x, async e => {
                let {
                    topic: t,
                    message: r,
                    transportType: i
                } = e;
                if (this.pairings.keys.includes(t) && i !== U && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) try {
                    let e = await this.core.crypto.decode(t, r);
                    (0, f.isJsonRpcRequest)(e) ? (this.core.history.set(t, e), await this.onRelayEventRequest({
                        topic: t,
                        payload: e
                    })) : (0, f.isJsonRpcResponse)(e) && (await this.core.history.resolve(e), await this.onRelayEventResponse({
                        topic: t,
                        payload: e
                    }), this.core.history.delete(t, e.id)), await this.core.relayer.messages.ack(t, r)
                } catch (e) {
                    this.logger.error(e)
                }
            })
        }
        registerExpirerEvents() {
            this.core.expirer.on(G, async e => {
                let {
                    topic: t
                } = (0, d.parseExpirerTarget)(e.target);
                t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit("pairing_expire", {
                    topic: t
                }))
            })
        }
    }
    var tM = Object.defineProperty,
        tB = (e, t, r) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? tM(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[i] = r
        };
    class tq extends a.IJsonRpcHistory {
        constructor(e, t) {
            super(e, t), this.core = e, this.logger = t, tB(this, "records", new Map), tB(this, "events", new r.EventEmitter), tB(this, "name", "history"), tB(this, "version", "0.3"), tB(this, "cached", []), tB(this, "initialized", !1), tB(this, "storagePrefix", b), tB(this, "init", async () => {
                this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
            }), tB(this, "set", (e, t, r) => {
                if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                        type: "method",
                        method: "set",
                        topic: e,
                        request: t,
                        chainId: r
                    }), this.records.has(t.id)) return;
                let i = {
                    id: t.id,
                    topic: e,
                    request: {
                        method: t.method,
                        params: t.params || null
                    },
                    chainId: r,
                    expiry: (0, d.calcExpiry)(c.THIRTY_DAYS)
                };
                this.records.set(i.id, i), this.persist(), this.events.emit(z, i)
            }), tB(this, "resolve", async e => {
                if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                        type: "method",
                        method: "update",
                        response: e
                    }), !this.records.has(e.id)) return;
                let t = await this.getRecord(e.id);
                typeof t.response > "u" && (t.response = (0, f.isJsonRpcError)(e) ? {
                    error: e.error
                } : {
                    result: e.result
                }, this.records.set(t.id, t), this.persist(), this.events.emit(F, t))
            }), tB(this, "get", async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t
            }), await this.getRecord(t))), tB(this, "delete", (e, t) => {
                this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                    type: "method",
                    method: "delete",
                    id: t
                }), this.values.forEach(r => {
                    r.topic === e && ("u" > typeof t && r.id !== t || (this.records.delete(r.id), this.events.emit(K, r)))
                }), this.persist()
            }), tB(this, "exists", async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e)), tB(this, "on", (e, t) => {
                this.events.on(e, t)
            }), tB(this, "once", (e, t) => {
                this.events.once(e, t)
            }), tB(this, "off", (e, t) => {
                this.events.off(e, t)
            }), tB(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t)
            }), this.logger = (0, n.generateChildLogger)(t, this.name)
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
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
            let e = [];
            return this.values.forEach(t => {
                if ("u" > typeof t.response) return;
                let r = {
                    topic: t.topic,
                    request: (0, g.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                    chainId: t.chainId
                };
                return e.push(r)
            }), e
        }
        async setJsonRpcRecords(e) {
            await this.core.storage.setItem(this.storageKey, e)
        }
        async getJsonRpcRecords() {
            return await this.core.storage.getItem(this.storageKey)
        }
        getRecord(e) {
            this.isInitialized();
            let t = this.records.get(e);
            if (!t) {
                let {
                    message: t
                } = (0, d.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                throw Error(t)
            }
            return t
        }
        async persist() {
            await this.setJsonRpcRecords(this.values), this.events.emit("history_sync")
        }
        async restore() {
            try {
                let e = await this.getJsonRpcRecords();
                if (typeof e > "u" || !e.length) return;
                if (this.records.size) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(e), Error(e)
                }
                this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                    type: "method",
                    method: "restore",
                    records: this.values
                })
            } catch (e) {
                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
            }
        }
        registerEventListeners() {
            this.events.on(z, e => {
                this.logger.info(`Emitting ${z}`), this.logger.debug({
                    type: "event",
                    event: z,
                    record: e
                })
            }), this.events.on(F, e => {
                this.logger.info(`Emitting ${F}`), this.logger.debug({
                    type: "event",
                    event: F,
                    record: e
                })
            }), this.events.on(K, e => {
                this.logger.info(`Emitting ${K}`), this.logger.debug({
                    type: "event",
                    event: K,
                    record: e
                })
            }), this.core.heartbeat.on(i.HEARTBEAT_EVENTS.pulse, () => {
                this.cleanup()
            })
        }
        cleanup() {
            try {
                this.isInitialized();
                let e = !1;
                this.records.forEach(t => {
                    (0, c.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(K, t, !1), e = !0)
                }), e && this.persist()
            } catch (e) {
                this.logger.warn(e)
            }
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: e
                } = (0, d.getInternalError)("NOT_INITIALIZED", this.name);
                throw Error(e)
            }
        }
    }
    var tj = Object.defineProperty,
        t$ = (e, t, r) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? tj(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[i] = r
        };
    class tV extends a.IExpirer {
        constructor(e, t) {
            super(e, t), this.core = e, this.logger = t, t$(this, "expirations", new Map), t$(this, "events", new r.EventEmitter), t$(this, "name", "expirer"), t$(this, "version", "0.3"), t$(this, "cached", []), t$(this, "initialized", !1), t$(this, "storagePrefix", b), t$(this, "init", async () => {
                this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
            }), t$(this, "has", e => {
                try {
                    let t = this.formatTarget(e);
                    return "u" > typeof this.getExpiration(t)
                } catch {
                    return !1
                }
            }), t$(this, "set", (e, t) => {
                this.isInitialized();
                let r = this.formatTarget(e),
                    i = {
                        target: r,
                        expiry: t
                    };
                this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(W, {
                    target: r,
                    expiration: i
                })
            }), t$(this, "get", e => {
                this.isInitialized();
                let t = this.formatTarget(e);
                return this.getExpiration(t)
            }), t$(this, "del", e => {
                if (this.isInitialized(), this.has(e)) {
                    let t = this.formatTarget(e),
                        r = this.getExpiration(t);
                    this.expirations.delete(t), this.events.emit(H, {
                        target: t,
                        expiration: r
                    })
                }
            }), t$(this, "on", (e, t) => {
                this.events.on(e, t)
            }), t$(this, "once", (e, t) => {
                this.events.once(e, t)
            }), t$(this, "off", (e, t) => {
                this.events.off(e, t)
            }), t$(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t)
            }), this.logger = (0, n.generateChildLogger)(t, this.name)
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
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
        formatTarget(e) {
            if ("string" == typeof e) return (0, d.formatTopicTarget)(e);
            if ("number" == typeof e) return (0, d.formatIdTarget)(e);
            let {
                message: t
            } = (0, d.getInternalError)("UNKNOWN_TYPE", `Target type: ${typeof e}`);
            throw Error(t)
        }
        async setExpirations(e) {
            await this.core.storage.setItem(this.storageKey, e)
        }
        async getExpirations() {
            return await this.core.storage.getItem(this.storageKey)
        }
        async persist() {
            await this.setExpirations(this.values), this.events.emit("expirer_sync")
        }
        async restore() {
            try {
                let e = await this.getExpirations();
                if (typeof e > "u" || !e.length) return;
                if (this.expirations.size) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(e), Error(e)
                }
                this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                    type: "method",
                    method: "restore",
                    expirations: this.values
                })
            } catch (e) {
                this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
            }
        }
        getExpiration(e) {
            let t = this.expirations.get(e);
            if (!t) {
                let {
                    message: t
                } = (0, d.getInternalError)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                throw this.logger.warn(t), Error(t)
            }
            return t
        }
        checkExpiry(e, t) {
            let {
                expiry: r
            } = t;
            (0, c.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
        }
        expire(e, t) {
            this.expirations.delete(e), this.events.emit(G, {
                target: e,
                expiration: t
            })
        }
        checkExpirations() {
            this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
        }
        registerEventListeners() {
            this.core.heartbeat.on(i.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(W, e => {
                this.logger.info(`Emitting ${W}`), this.logger.debug({
                    type: "event",
                    event: W,
                    data: e
                }), this.persist()
            }), this.events.on(G, e => {
                this.logger.info(`Emitting ${G}`), this.logger.debug({
                    type: "event",
                    event: G,
                    data: e
                }), this.persist()
            }), this.events.on(H, e => {
                this.logger.info(`Emitting ${H}`), this.logger.debug({
                    type: "event",
                    event: H,
                    data: e
                }), this.persist()
            })
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: e
                } = (0, d.getInternalError)("NOT_INITIALIZED", this.name);
                throw Error(e)
            }
        }
    }
    var tz = Object.defineProperty,
        tF = (e, t, r) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? tz(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[i] = r
        };
    class tK extends a.IVerify {
        constructor(e, t, r) {
            super(e, t, r), this.core = e, this.logger = t, this.store = r, tF(this, "name", "verify-api"), tF(this, "abortController"), tF(this, "isDevEnv"), tF(this, "verifyUrlV3", Y), tF(this, "storagePrefix", b), tF(this, "version", 2), tF(this, "publicKey"), tF(this, "fetchPromise"), tF(this, "init", async () => {
                var e;
                this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, c.toMiliseconds)(null == (e = this.publicKey) ? void 0 : e.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()))
            }), tF(this, "register", async e => {
                if (!(0, d.isBrowser)() || this.isDevEnv) return;
                let t = window.location.origin,
                    {
                        id: r,
                        decryptedId: i
                    } = e,
                    s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${r}&decryptedId=${i}`;
                try {
                    let e = (0, y.getDocument)(),
                        t = this.startAbortTimer(5 * c.ONE_SECOND),
                        i = await new Promise((i, n) => {
                            let o = () => {
                                window.removeEventListener("message", c), e.body.removeChild(a), n("attestation aborted")
                            };
                            this.abortController.signal.addEventListener("abort", o);
                            let a = e.createElement("iframe");
                            a.src = s, a.style.display = "none", a.addEventListener("error", o, {
                                signal: this.abortController.signal
                            });
                            let c = s => {
                                if (s.data && "string" == typeof s.data) try {
                                    let n = JSON.parse(s.data);
                                    if ("verify_attestation" === n.type) {
                                        if ((0, h.decodeJWT)(n.attestation).payload.id !== r) return;
                                        clearInterval(t), e.body.removeChild(a), this.abortController.signal.removeEventListener("abort", o), window.removeEventListener("message", c), i(null === n.attestation ? "" : n.attestation)
                                    }
                                } catch (e) {
                                    this.logger.warn(e)
                                }
                            };
                            e.body.appendChild(a), window.addEventListener("message", c, {
                                signal: this.abortController.signal
                            })
                        });
                    return this.logger.debug("jwt attestation", i), i
                } catch (e) {
                    this.logger.warn(e)
                }
                return ""
            }), tF(this, "resolve", async e => {
                if (this.isDevEnv) return "";
                let {
                    attestationId: t,
                    hash: r,
                    encryptedId: i
                } = e;
                if ("" === t) return void this.logger.debug("resolve: attestationId is empty, skipping");
                if (t) {
                    if ((0, h.decodeJWT)(t).payload.id !== i) return;
                    let e = await this.isValidJwtAttestation(t);
                    if (e) return e.isVerified ? e : void this.logger.warn("resolve: jwt attestation: origin url not verified")
                }
                if (!r) return;
                let s = this.getVerifyUrl(e ? .verifyUrl);
                return this.fetchAttestation(r, s)
            }), tF(this, "fetchAttestation", async (e, t) => {
                this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
                let r = this.startAbortTimer(5 * c.ONE_SECOND),
                    i = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                        signal: this.abortController.signal
                    });
                return clearTimeout(r), 200 === i.status ? await i.json() : void 0
            }), tF(this, "getVerifyUrl", e => {
                let t = e || J;
                return X.includes(t) || (this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${J}`), t = J), t
            }), tF(this, "fetchPublicKey", async () => {
                try {
                    this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                    let e = this.startAbortTimer(c.FIVE_SECONDS),
                        t = await fetch(`${this.verifyUrlV3}/public-key`, {
                            signal: this.abortController.signal
                        });
                    return clearTimeout(e), await t.json()
                } catch (e) {
                    this.logger.warn(e)
                }
            }), tF(this, "persistPublicKey", async e => {
                this.logger.debug("persisting public key to local storage", e), await this.store.setItem(this.storeKey, e), this.publicKey = e
            }), tF(this, "removePublicKey", async () => {
                this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0
            }), tF(this, "isValidJwtAttestation", async e => {
                let t = await this.getPublicKey();
                try {
                    if (t) return this.validateAttestation(e, t)
                } catch (e) {
                    this.logger.error(e), this.logger.warn("error validating attestation")
                }
                let r = await this.fetchAndPersistPublicKey();
                try {
                    if (r) return this.validateAttestation(e, r)
                } catch (e) {
                    this.logger.error(e), this.logger.warn("error validating attestation")
                }
            }), tF(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), tF(this, "fetchAndPersistPublicKey", async () => {
                if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
                this.fetchPromise = new Promise(async e => {
                    let t = await this.fetchPublicKey();
                    t && (await this.persistPublicKey(t), e(t))
                });
                let e = await this.fetchPromise;
                return this.fetchPromise = void 0, e
            }), tF(this, "validateAttestation", (e, t) => {
                let r = (0, d.verifyP256Jwt)(e, t.publicKey),
                    i = {
                        hasExpired: (0, c.toMiliseconds)(r.exp) < Date.now(),
                        payload: r
                    };
                if (i.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), Error("JWT attestation expired");
                return {
                    origin: i.payload.origin,
                    isScam: i.payload.isScam,
                    isVerified: i.payload.isVerified
                }
            }), this.logger = (0, n.generateChildLogger)(t, this.name), this.abortController = new AbortController, this.isDevEnv = (0, d.isTestRun)(), this.init()
        }
        get storeKey() {
            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key"
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
        }
        startAbortTimer(e) {
            return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, c.toMiliseconds)(e))
        }
    }
    var tW = Object.defineProperty,
        tH = (e, t, r) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? tW(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[i] = r
        };
    class tG extends a.IEchoClient {
        constructor(e, t) {
            super(e, t), this.projectId = e, this.logger = t, tH(this, "context", "echo"), tH(this, "registerDeviceToken", async e => {
                let {
                    clientId: t,
                    token: r,
                    notificationType: i,
                    enableEncrypted: s = !1
                } = e, n = `https://echo.walletconnect.com/${this.projectId}/clients`;
                await fetch(n, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        client_id: t,
                        type: i,
                        token: r,
                        always_raw: s
                    })
                })
            }), this.logger = (0, n.generateChildLogger)(t, this.context)
        }
    }
    var tJ = Object.defineProperty,
        tY = Object.getOwnPropertySymbols,
        tX = Object.prototype.hasOwnProperty,
        tQ = Object.prototype.propertyIsEnumerable,
        tZ = (e, t, r) => t in e ? tJ(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        t0 = (e, t) => {
            for (var r in t || (t = {})) tX.call(t, r) && tZ(e, r, t[r]);
            if (tY)
                for (var r of tY(t)) tQ.call(t, r) && tZ(e, r, t[r]);
            return e
        },
        t1 = (e, t, r) => tZ(e, "symbol" != typeof t ? t + "" : t, r);
    class t2 extends a.IEventClient {
        constructor(e, t, r = !0) {
            super(e, t, r), this.core = e, this.logger = t, t1(this, "context", "event-client"), t1(this, "storagePrefix", b), t1(this, "storageVersion", .1), t1(this, "events", new Map), t1(this, "shouldPersist", !1), t1(this, "init", async () => {
                if (!(0, d.isTestRun)()) try {
                    let e = {
                        eventId: (0, d.uuidv4)(),
                        timestamp: Date.now(),
                        domain: this.getAppDomain(),
                        props: {
                            event: "INIT",
                            type: "",
                            properties: {
                                client_id: await this.core.crypto.getClientId(),
                                user_agent: (0, d.formatUA)(this.core.relayer.protocol, this.core.relayer.version, R)
                            }
                        }
                    };
                    await this.sendEvent([e])
                } catch (e) {
                    this.logger.warn(e)
                }
            }), t1(this, "createEvent", e => {
                let {
                    event: t = "ERROR",
                    type: r = "",
                    properties: {
                        topic: i,
                        trace: s
                    }
                } = e, n = (0, d.uuidv4)(), o = this.core.projectId || "", a = t0({
                    eventId: n,
                    timestamp: Date.now(),
                    props: {
                        event: t,
                        type: r,
                        properties: {
                            topic: i,
                            trace: s
                        }
                    },
                    bundleId: o,
                    domain: this.getAppDomain()
                }, this.setMethods(n));
                return this.telemetryEnabled && (this.events.set(n, a), this.shouldPersist = !0), a
            }), t1(this, "getEvent", e => {
                let {
                    eventId: t,
                    topic: r
                } = e;
                if (t) return this.events.get(t);
                let i = Array.from(this.events.values()).find(e => e.props.properties.topic === r);
                if (i) return t0(t0({}, i), this.setMethods(i.eventId))
            }), t1(this, "deleteEvent", e => {
                let {
                    eventId: t
                } = e;
                this.events.delete(t), this.shouldPersist = !0
            }), t1(this, "setEventListeners", () => {
                this.core.heartbeat.on(i.HEARTBEAT_EVENTS.pulse, async () => {
                    this.shouldPersist && await this.persist(), this.events.forEach(e => {
                        (0, c.fromMiliseconds)(Date.now()) - (0, c.fromMiliseconds)(e.timestamp) > 86400 && (this.events.delete(e.eventId), this.shouldPersist = !0)
                    })
                })
            }), t1(this, "setMethods", e => ({
                addTrace: t => this.addTrace(e, t),
                setError: t => this.setError(e, t)
            })), t1(this, "addTrace", (e, t) => {
                let r = this.events.get(e);
                r && (r.props.properties.trace.push(t), this.events.set(e, r), this.shouldPersist = !0)
            }), t1(this, "setError", (e, t) => {
                let r = this.events.get(e);
                r && (r.props.type = t, r.timestamp = Date.now(), this.events.set(e, r), this.shouldPersist = !0)
            }), t1(this, "persist", async () => {
                await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1
            }), t1(this, "restore", async () => {
                try {
                    let e = await this.core.storage.getItem(this.storageKey) || [];
                    if (!e.length) return;
                    e.forEach(e => {
                        this.events.set(e.eventId, t0(t0({}, e), this.setMethods(e.eventId)))
                    })
                } catch (e) {
                    this.logger.warn(e)
                }
            }), t1(this, "submit", async () => {
                if (!this.telemetryEnabled || 0 === this.events.size) return;
                let e = [];
                for (let [t, r] of this.events) r.props.type && e.push(r);
                if (0 !== e.length) try {
                    if ((await this.sendEvent(e)).ok)
                        for (let t of e) this.events.delete(t.eventId), this.shouldPersist = !0
                } catch (e) {
                    this.logger.warn(e)
                }
            }), t1(this, "sendEvent", async e => {
                let t = this.getAppDomain() ? "" : "&sp=desktop";
                return await fetch(`https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${R}${t}`, {
                    method: "POST",
                    body: JSON.stringify(e)
                })
            }), t1(this, "getAppDomain", () => (0, d.getAppMetadata)().url), this.logger = (0, n.generateChildLogger)(t, this.context), this.telemetryEnabled = r, r ? this.restore().then(async () => {
                await this.submit(), this.setEventListeners()
            }) : this.persist()
        }
        get storageKey() {
            return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context
        }
    }
    var t5 = Object.defineProperty,
        t3 = Object.getOwnPropertySymbols,
        t8 = Object.prototype.hasOwnProperty,
        t6 = Object.prototype.propertyIsEnumerable,
        t4 = (e, t, r) => t in e ? t5(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        t9 = (e, t) => {
            for (var r in t || (t = {})) t8.call(t, r) && t4(e, r, t[r]);
            if (t3)
                for (var r of t3(t)) t6.call(t, r) && t4(e, r, t[r]);
            return e
        },
        t7 = (e, t, r) => t4(e, "symbol" != typeof t ? t + "" : t, r);
    class re extends a.ICore {
        constructor(e) {
            var t;
            super(e), t7(this, "protocol", "wc"), t7(this, "version", 2), t7(this, "name", w), t7(this, "relayUrl"), t7(this, "projectId"), t7(this, "customStoragePrefix"), t7(this, "events", new r.EventEmitter), t7(this, "logger"), t7(this, "heartbeat"), t7(this, "relayer"), t7(this, "crypto"), t7(this, "storage"), t7(this, "history"), t7(this, "expirer"), t7(this, "pairing"), t7(this, "verify"), t7(this, "echoClient"), t7(this, "linkModeSupportedApps"), t7(this, "eventClient"), t7(this, "initialized", !1), t7(this, "logChunkController"), t7(this, "on", (e, t) => this.events.on(e, t)), t7(this, "once", (e, t) => this.events.once(e, t)), t7(this, "off", (e, t) => this.events.off(e, t)), t7(this, "removeListener", (e, t) => this.events.removeListener(e, t)), t7(this, "dispatchEnvelope", ({
                topic: e,
                message: t,
                sessionExists: r
            }) => {
                if (!e || !t) return;
                let i = {
                    topic: e,
                    message: t,
                    publishedAt: Date.now(),
                    transportType: U
                };
                this.relayer.onLinkMessageEvent(i, {
                    sessionExists: r
                })
            }), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || S, this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
            const o = (0, n.getDefaultLoggerOptions)({
                    level: "string" == typeof e ? .logger && e.logger ? e.logger : "error",
                    name: w
                }),
                {
                    logger: a,
                    chunkLoggerController: c
                } = (0, n.generatePlatformLogger)({
                    opts: o,
                    maxSizeInBytes: e ? .maxLogBlobSizeInBytes,
                    loggerOverride: e ? .logger
                });
            this.logChunkController = c, null != (t = this.logChunkController) && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) && e.downloadLogsBlobInBrowser && (null == (t = this.logChunkController) || t.downloadLogsBlobInBrowser({
                    clientId: await this.crypto.getClientId()
                }))
            }), this.logger = (0, n.generateChildLogger)(a, this.name), this.heartbeat = new i.HeartBeat, this.crypto = new ez(this, this.logger, e ? .keychain), this.history = new tq(this, this.logger), this.expirer = new tV(this, this.logger), this.storage = null != e && e.storage ? e.storage : new s.default(t9(t9({}, v), e ? .storageOptions)), this.relayer = new tb({
                core: this,
                logger: this.logger,
                relayUrl: this.relayUrl,
                projectId: this.projectId
            }), this.pairing = new tL(this, this.logger), this.verify = new tK(this, this.logger, this.storage), this.echoClient = new tG(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new t2(this, this.logger, e ? .telemetryEnabled)
        }
        static async init(e) {
            let t = new re(e);
            await t.initialize();
            let r = await t.crypto.getClientId();
            return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
        }
        async start() {
            this.initialized || await this.initialize()
        }
        async getLogsBlob() {
            var e;
            return null == (e = this.logChunkController) ? void 0 : e.logsToBlob({
                clientId: await this.crypto.getClientId()
            })
        }
        async addLinkModeSupportedApp(e) {
            this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem(M, this.linkModeSupportedApps))
        }
        async initialize() {
            this.logger.trace("Initialized");
            try {
                await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(M) || [], this.initialized = !0, this.logger.info("Core Initialization Success")
            } catch (e) {
                throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
            }
        }
    }
    var rt = a;
    let rr = "client",
        ri = `wc@2:${rr}:`,
        rs = "WALLETCONNECT_DEEPLINK_CHOICE",
        rn = (c.THIRTY_DAYS, "Proposal expired"),
        ro = c.SEVEN_DAYS,
        ra = {
            wc_sessionPropose: {
                req: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1100
                },
                res: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1101
                },
                reject: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1120
                },
                autoReject: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1121
                }
            },
            wc_sessionSettle: {
                req: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1102
                },
                res: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1103
                }
            },
            wc_sessionUpdate: {
                req: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 1104
                },
                res: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 1105
                }
            },
            wc_sessionExtend: {
                req: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 1106
                },
                res: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 1107
                }
            },
            wc_sessionRequest: {
                req: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1108
                },
                res: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1109
                }
            },
            wc_sessionEvent: {
                req: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1110
                },
                res: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1111
                }
            },
            wc_sessionDelete: {
                req: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 1112
                },
                res: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 1113
                }
            },
            wc_sessionPing: {
                req: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 1114
                },
                res: {
                    ttl: c.ONE_DAY,
                    prompt: !1,
                    tag: 1115
                }
            },
            wc_sessionAuthenticate: {
                req: {
                    ttl: c.ONE_HOUR,
                    prompt: !0,
                    tag: 1116
                },
                res: {
                    ttl: c.ONE_HOUR,
                    prompt: !1,
                    tag: 1117
                },
                reject: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1118
                },
                autoReject: {
                    ttl: c.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1119
                }
            }
        },
        rc = {
            min: c.FIVE_MINUTES,
            max: c.SEVEN_DAYS
        },
        rl = "IDLE",
        rh = "ACTIVE",
        rd = {
            eth_sendTransaction: {
                key: ""
            },
            eth_sendRawTransaction: {
                key: ""
            },
            wallet_sendCalls: {
                key: ""
            },
            solana_signTransaction: {
                key: "signature"
            },
            solana_signAllTransactions: {
                key: "transactions"
            },
            solana_signAndSendTransaction: {
                key: "signature"
            }
        },
        ru = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"],
        rp = "wc@1.5:auth:",
        rg = `${rp}:PUB_KEY`;
    var rf = Object.defineProperty,
        rm = Object.defineProperties,
        ry = Object.getOwnPropertyDescriptors,
        rw = Object.getOwnPropertySymbols,
        rb = Object.prototype.hasOwnProperty,
        rv = Object.prototype.propertyIsEnumerable,
        rE = (e, t, r) => t in e ? rf(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        rI = (e, t) => {
            for (var r in t || (t = {})) rb.call(t, r) && rE(e, r, t[r]);
            if (rw)
                for (var r of rw(t)) rv.call(t, r) && rE(e, r, t[r]);
            return e
        },
        rC = (e, t, r) => rE(e, "symbol" != typeof t ? t + "" : t, r);
    class rS extends rt.IEngine {
        constructor(t) {
            super(t), rC(this, "name", "engine"), rC(this, "events", new r.default), rC(this, "initialized", !1), rC(this, "requestQueue", {
                state: rl,
                queue: []
            }), rC(this, "sessionRequestQueue", {
                state: rl,
                queue: []
            }), rC(this, "requestQueueDelay", c.ONE_SECOND), rC(this, "expectedPairingMethodMap", new Map), rC(this, "recentlyDeletedMap", new Map), rC(this, "recentlyDeletedLimit", 200), rC(this, "relayMessageCache", []), rC(this, "pendingSessions", new Map), rC(this, "init", async () => {
                this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({
                    methods: Object.keys(ra)
                }), this.initialized = !0, setTimeout(async () => {
                    await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                }, (0, c.toMiliseconds)(this.requestQueueDelay)))
            }), rC(this, "connect", async e => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                let t = rm(rI({}, e), ry({
                    requiredNamespaces: e.requiredNamespaces || {},
                    optionalNamespaces: e.optionalNamespaces || {}
                }));
                await this.isValidConnect(t);
                let {
                    pairingTopic: r,
                    requiredNamespaces: i,
                    optionalNamespaces: s,
                    sessionProperties: n,
                    scopedProperties: o,
                    relays: a
                } = t, l = r, h, u = !1;
                try {
                    if (l) {
                        let e = this.client.core.pairing.pairings.get(l);
                        this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), u = e.active
                    }
                } catch (e) {
                    throw this.client.logger.error(`connect() -> pairing.get(${l}) failed`), e
                }
                if (!l || !u) {
                    let {
                        topic: e,
                        uri: t
                    } = await this.client.core.pairing.create();
                    l = e, h = t
                }
                if (!l) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
                    throw Error(e)
                }
                let p = await this.client.core.crypto.generateKeyPair(),
                    f = ra.wc_sessionPropose.req.ttl || c.FIVE_MINUTES,
                    m = (0, d.calcExpiry)(f),
                    y = rm(rI(rI({
                        requiredNamespaces: i,
                        optionalNamespaces: s,
                        relays: a ? ? [{
                            protocol: "irn"
                        }],
                        proposer: {
                            publicKey: p,
                            metadata: this.client.metadata
                        },
                        expiryTimestamp: m,
                        pairingTopic: l
                    }, n && {
                        sessionProperties: n
                    }), o && {
                        scopedProperties: o
                    }), ry({
                        id: (0, g.payloadId)()
                    })),
                    w = (0, d.engineEvent)("session_connect", y.id),
                    {
                        reject: b,
                        resolve: v,
                        done: E
                    } = (0, d.createDelayedPromise)(f, rn),
                    I = ({
                        id: e
                    }) => {
                        e === y.id && (this.client.events.off("proposal_expire", I), this.pendingSessions.delete(y.id), this.events.emit(w, {
                            error: {
                                message: rn,
                                code: 0
                            }
                        }))
                    };
                return this.client.events.on("proposal_expire", I), this.events.once(w, ({
                    error: e,
                    session: t
                }) => {
                    this.client.events.off("proposal_expire", I), e ? b(e) : t && v(t)
                }), await this.sendRequest({
                    topic: l,
                    method: "wc_sessionPropose",
                    params: y,
                    throwOnFailedPublish: !0,
                    clientRpcId: y.id
                }), await this.setProposal(y.id, y), {
                    uri: h,
                    approval: E
                }
            }), rC(this, "pair", async e => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                    return await this.client.core.pairing.pair(e)
                } catch (e) {
                    throw this.client.logger.error("pair() failed"), e
                }
            }), rC(this, "approve", async e => {
                var t, r, i;
                let s = this.client.core.eventClient.createEvent({
                    properties: {
                        topic: null == (t = e ? .id) ? void 0 : t.toString(),
                        trace: [Z]
                    }
                });
                try {
                    this.isInitialized(), await this.confirmOnlineStateOrThrow()
                } catch (e) {
                    throw s.setError("no_internet_connection"), e
                }
                try {
                    await this.isValidProposalId(e ? .id)
                } catch (t) {
                    throw this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`), s.setError("proposal_not_found"), t
                }
                try {
                    await this.isValidApprove(e)
                } catch (e) {
                    throw this.client.logger.error("approve() -> isValidApprove() failed"), s.setError("session_approve_namespace_validation_failure"), e
                }
                let {
                    id: n,
                    relayProtocol: o,
                    namespaces: a,
                    sessionProperties: c,
                    scopedProperties: l,
                    sessionConfig: h
                } = e, u = this.client.proposal.get(n);
                this.client.core.eventClient.deleteEvent({
                    eventId: s.eventId
                });
                let {
                    pairingTopic: p,
                    proposer: g,
                    requiredNamespaces: f,
                    optionalNamespaces: m
                } = u, y = null == (r = this.client.core.eventClient) ? void 0 : r.getEvent({
                    topic: p
                });
                y || (y = null == (i = this.client.core.eventClient) ? void 0 : i.createEvent({
                    type: Z,
                    properties: {
                        topic: p,
                        trace: [Z, "session_namespaces_validation_success"]
                    }
                }));
                let w = await this.client.core.crypto.generateKeyPair(),
                    b = g.publicKey,
                    v = await this.client.core.crypto.generateSharedKey(w, b),
                    E = rI(rI(rI({
                        relay: {
                            protocol: o ? ? "irn"
                        },
                        namespaces: a,
                        controller: {
                            publicKey: w,
                            metadata: this.client.metadata
                        },
                        expiry: (0, d.calcExpiry)(ro)
                    }, c && {
                        sessionProperties: c
                    }), l && {
                        scopedProperties: l
                    }), h && {
                        sessionConfig: h
                    });
                y.addTrace("subscribing_session_topic");
                try {
                    await this.client.core.relayer.subscribe(v, {
                        transportType: D
                    })
                } catch (e) {
                    throw y.setError("subscribe_session_topic_failure"), e
                }
                y.addTrace("subscribe_session_topic_success");
                let I = rm(rI({}, E), ry({
                    topic: v,
                    requiredNamespaces: f,
                    optionalNamespaces: m,
                    pairingTopic: p,
                    acknowledged: !1,
                    self: E.controller,
                    peer: {
                        publicKey: g.publicKey,
                        metadata: g.metadata
                    },
                    controller: w,
                    transportType: D
                }));
                await this.client.session.set(v, I), y.addTrace("store_session");
                try {
                    y.addTrace("publishing_session_settle"), await this.sendRequest({
                        topic: v,
                        method: "wc_sessionSettle",
                        params: E,
                        throwOnFailedPublish: !0
                    }).catch(e => {
                        throw y ? .setError("session_settle_publish_failure"), e
                    }), y.addTrace("session_settle_publish_success"), y.addTrace("publishing_session_approve"), await this.sendResult({
                        id: n,
                        topic: p,
                        result: {
                            relay: {
                                protocol: o ? ? "irn"
                            },
                            responderPublicKey: w
                        },
                        throwOnFailedPublish: !0
                    }).catch(e => {
                        throw y ? .setError("session_approve_publish_failure"), e
                    }), y.addTrace("session_approve_publish_success")
                } catch (e) {
                    throw this.client.logger.error(e), this.client.session.delete(v, (0, d.getSdkError)("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(v), e
                }
                return this.client.core.eventClient.deleteEvent({
                    eventId: y.eventId
                }), await this.client.core.pairing.updateMetadata({
                    topic: p,
                    metadata: g.metadata
                }), await this.client.proposal.delete(n, (0, d.getSdkError)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                    topic: p
                }), await this.setExpiry(v, (0, d.calcExpiry)(ro)), {
                    topic: v,
                    acknowledged: () => Promise.resolve(this.client.session.get(v))
                }
            }), rC(this, "reject", async e => {
                let t;
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                    await this.isValidReject(e)
                } catch (e) {
                    throw this.client.logger.error("reject() -> isValidReject() failed"), e
                }
                let {
                    id: r,
                    reason: i
                } = e;
                try {
                    t = this.client.proposal.get(r).pairingTopic
                } catch (e) {
                    throw this.client.logger.error(`reject() -> proposal.get(${r}) failed`), e
                }
                t && (await this.sendError({
                    id: r,
                    topic: t,
                    error: i,
                    rpcOpts: ra.wc_sessionPropose.reject
                }), await this.client.proposal.delete(r, (0, d.getSdkError)("USER_DISCONNECTED")))
            }), rC(this, "update", async e => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                    await this.isValidUpdate(e)
                } catch (e) {
                    throw this.client.logger.error("update() -> isValidUpdate() failed"), e
                }
                let {
                    topic: t,
                    namespaces: r
                } = e, {
                    done: i,
                    resolve: s,
                    reject: n
                } = (0, d.createDelayedPromise)(), o = (0, g.payloadId)(), a = (0, g.getBigIntRpcId)().toString(), c = this.client.session.get(t).namespaces;
                return this.events.once((0, d.engineEvent)("session_update", o), ({
                    error: e
                }) => {
                    e ? n(e) : s()
                }), await this.client.session.update(t, {
                    namespaces: r
                }), await this.sendRequest({
                    topic: t,
                    method: "wc_sessionUpdate",
                    params: {
                        namespaces: r
                    },
                    throwOnFailedPublish: !0,
                    clientRpcId: o,
                    relayRpcId: a
                }).catch(e => {
                    this.client.logger.error(e), this.client.session.update(t, {
                        namespaces: c
                    }), n(e)
                }), {
                    acknowledged: i
                }
            }), rC(this, "extend", async e => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                    await this.isValidExtend(e)
                } catch (e) {
                    throw this.client.logger.error("extend() -> isValidExtend() failed"), e
                }
                let {
                    topic: t
                } = e, r = (0, g.payloadId)(), {
                    done: i,
                    resolve: s,
                    reject: n
                } = (0, d.createDelayedPromise)();
                return this.events.once((0, d.engineEvent)("session_extend", r), ({
                    error: e
                }) => {
                    e ? n(e) : s()
                }), await this.setExpiry(t, (0, d.calcExpiry)(ro)), this.sendRequest({
                    topic: t,
                    method: "wc_sessionExtend",
                    params: {},
                    clientRpcId: r,
                    throwOnFailedPublish: !0
                }).catch(e => {
                    n(e)
                }), {
                    acknowledged: i
                }
            }), rC(this, "request", async e => {
                this.isInitialized();
                try {
                    await this.isValidRequest(e)
                } catch (e) {
                    throw this.client.logger.error("request() -> isValidRequest() failed"), e
                }
                let {
                    chainId: t,
                    request: r,
                    topic: i,
                    expiry: s = ra.wc_sessionRequest.req.ttl
                } = e, n = this.client.session.get(i);
                n ? .transportType === D && await this.confirmOnlineStateOrThrow();
                let o = (0, g.payloadId)(),
                    a = (0, g.getBigIntRpcId)().toString(),
                    {
                        done: c,
                        resolve: l,
                        reject: h
                    } = (0, d.createDelayedPromise)(s, "Request expired. Please try again.");
                this.events.once((0, d.engineEvent)("session_request", o), ({
                    error: e,
                    result: t
                }) => {
                    e ? h(e) : l(t)
                });
                let u = "wc_sessionRequest",
                    p = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
                if (p) return await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: i,
                    method: u,
                    params: {
                        request: rm(rI({}, r), ry({
                            expiryTimestamp: (0, d.calcExpiry)(s)
                        })),
                        chainId: t
                    },
                    expiry: s,
                    throwOnFailedPublish: !0,
                    appLink: p
                }).catch(e => h(e)), this.client.events.emit("session_request_sent", {
                    topic: i,
                    request: r,
                    chainId: t,
                    id: o
                }), await c();
                let f = {
                        request: rm(rI({}, r), ry({
                            expiryTimestamp: (0, d.calcExpiry)(s)
                        })),
                        chainId: t
                    },
                    m = this.shouldSetTVF(u, f);
                return await Promise.all([new Promise(async e => {
                    await this.sendRequest(rI({
                        clientRpcId: o,
                        relayRpcId: a,
                        topic: i,
                        method: u,
                        params: f,
                        expiry: s,
                        throwOnFailedPublish: !0
                    }, m && {
                        tvf: this.getTVFParams(o, f)
                    })).catch(e => h(e)), this.client.events.emit("session_request_sent", {
                        topic: i,
                        request: r,
                        chainId: t,
                        id: o
                    }), e()
                }), new Promise(async e => {
                    var t;
                    if (!(null != (t = n.sessionConfig) && t.disableDeepLink)) {
                        let e = await (0, d.getDeepLink)(this.client.core.storage, rs);
                        await (0, d.handleDeeplinkRedirect)({
                            id: o,
                            topic: i,
                            wcDeepLink: e
                        })
                    }
                    e()
                }), c()]).then(e => e[2])
            }), rC(this, "respond", async e => {
                this.isInitialized(), await this.isValidRespond(e);
                let {
                    topic: t,
                    response: r
                } = e, {
                    id: i
                } = r, s = this.client.session.get(t);
                s.transportType === D && await this.confirmOnlineStateOrThrow();
                let n = this.getAppLinkIfEnabled(s.peer.metadata, s.transportType);
                (0, f.isJsonRpcResult)(r) ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                    appLink: n
                }): (0, f.isJsonRpcError)(r) && await this.sendError({
                    id: i,
                    topic: t,
                    error: r.error,
                    appLink: n
                }), this.cleanupAfterResponse(e)
            }), rC(this, "ping", async e => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                    await this.isValidPing(e)
                } catch (e) {
                    throw this.client.logger.error("ping() -> isValidPing() failed"), e
                }
                let {
                    topic: t
                } = e;
                if (this.client.session.keys.includes(t)) {
                    let e = (0, g.payloadId)(),
                        r = (0, g.getBigIntRpcId)().toString(),
                        {
                            done: i,
                            resolve: s,
                            reject: n
                        } = (0, d.createDelayedPromise)();
                    this.events.once((0, d.engineEvent)("session_ping", e), ({
                        error: e
                    }) => {
                        e ? n(e) : s()
                    }), await Promise.all([this.sendRequest({
                        topic: t,
                        method: "wc_sessionPing",
                        params: {},
                        throwOnFailedPublish: !0,
                        clientRpcId: e,
                        relayRpcId: r
                    }), i()])
                } else this.client.core.pairing.pairings.keys.includes(t) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({
                    topic: t
                }))
            }), rC(this, "emit", async e => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(e);
                let {
                    topic: t,
                    event: r,
                    chainId: i
                } = e, s = (0, g.getBigIntRpcId)().toString(), n = (0, g.payloadId)();
                await this.sendRequest({
                    topic: t,
                    method: "wc_sessionEvent",
                    params: {
                        event: r,
                        chainId: i
                    },
                    throwOnFailedPublish: !0,
                    relayRpcId: s,
                    clientRpcId: n
                })
            }), rC(this, "disconnect", async e => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(e);
                let {
                    topic: t
                } = e;
                if (this.client.session.keys.includes(t)) await this.sendRequest({
                    topic: t,
                    method: "wc_sessionDelete",
                    params: (0, d.getSdkError)("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0
                }), await this.deleteSession({
                    topic: t,
                    emitEvent: !1
                });
                else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({
                    topic: t
                });
                else {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
                    throw Error(e)
                }
            }), rC(this, "find", e => (this.isInitialized(), this.client.session.getAll().filter(t => (0, d.isSessionCompatible)(t, e)))), rC(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), rC(this, "authenticate", async (e, t) => {
                var r;
                let i;
                this.isInitialized(), this.isValidAuthenticate(e);
                let s = t && this.client.core.linkModeSupportedApps.includes(t) && (null == (r = this.client.metadata.redirect) ? void 0 : r.linkMode),
                    n = s ? U : D;
                n === D && await this.confirmOnlineStateOrThrow();
                let {
                    chains: o,
                    statement: a = "",
                    uri: c,
                    domain: l,
                    nonce: h,
                    type: u,
                    exp: p,
                    nbf: f,
                    methods: m = [],
                    expiry: y
                } = e, w = [...e.resources || []], {
                    topic: b,
                    uri: v
                } = await this.client.core.pairing.create({
                    methods: ["wc_sessionAuthenticate"],
                    transportType: n
                });
                this.client.logger.info({
                    message: "Generated new pairing",
                    pairing: {
                        topic: b,
                        uri: v
                    }
                });
                let E = await this.client.core.crypto.generateKeyPair(),
                    I = (0, d.hashKey)(E);
                if (await Promise.all([this.client.auth.authKeys.set(rg, {
                        responseTopic: I,
                        publicKey: E
                    }), this.client.auth.pairingTopics.set(I, {
                        topic: I,
                        pairingTopic: b
                    })]), await this.client.core.relayer.subscribe(I, {
                        transportType: n
                    }), this.client.logger.info(`sending request to new pairing topic: ${b}`), m.length > 0) {
                    let {
                        namespace: e
                    } = (0, d.parseChainId)(o[0]), t = (0, d.createEncodedRecap)(e, "request", m);
                    (0, d.getRecapFromResources)(w) && (t = (0, d.mergeEncodedRecaps)(t, w.pop())), w.push(t)
                }
                let C = y && y > ra.wc_sessionAuthenticate.req.ttl ? y : ra.wc_sessionAuthenticate.req.ttl,
                    S = {
                        authPayload: {
                            type: u ? ? "caip122",
                            chains: o,
                            statement: a,
                            aud: c,
                            domain: l,
                            version: "1",
                            nonce: h,
                            iat: new Date().toISOString(),
                            exp: p,
                            nbf: f,
                            resources: w
                        },
                        requester: {
                            publicKey: E,
                            metadata: this.client.metadata
                        },
                        expiryTimestamp: (0, d.calcExpiry)(C)
                    },
                    x = {
                        requiredNamespaces: {},
                        optionalNamespaces: {
                            eip155: {
                                chains: o,
                                methods: [...new Set(["personal_sign", ...m])],
                                events: ["chainChanged", "accountsChanged"]
                            }
                        },
                        relays: [{
                            protocol: "irn"
                        }],
                        pairingTopic: b,
                        proposer: {
                            publicKey: E,
                            metadata: this.client.metadata
                        },
                        expiryTimestamp: (0, d.calcExpiry)(ra.wc_sessionPropose.req.ttl),
                        id: (0, g.payloadId)()
                    },
                    {
                        done: A,
                        resolve: N,
                        reject: _
                    } = (0, d.createDelayedPromise)(C, "Request expired"),
                    T = (0, g.payloadId)(),
                    k = (0, d.engineEvent)("session_connect", x.id),
                    P = (0, d.engineEvent)("session_request", T),
                    O = async ({
                        error: e,
                        session: t
                    }) => {
                        this.events.off(P, R), e ? _(e) : t && N({
                            session: t
                        })
                    },
                    R = async e => {
                        var r, i, s;
                        let o;
                        if (await this.deletePendingAuthRequest(T, {
                                message: "fulfilled",
                                code: 0
                            }), e.error) {
                            let t = (0, d.getSdkError)("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                            return e.error.code === t.code ? void 0 : (this.events.off(k, O), _(e.error.message))
                        }
                        await this.deleteProposal(x.id), this.events.off(k, O);
                        let {
                            cacaos: a,
                            responder: c
                        } = e.result, l = [], h = [];
                        for (let e of a) {
                            await (0, d.validateSignedCacao)({
                                cacao: e,
                                projectId: this.client.core.projectId
                            }) || (this.client.logger.error(e, "Signature verification failed"), _((0, d.getSdkError)("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                            let {
                                p: t
                            } = e, r = (0, d.getRecapFromResources)(t.resources), i = [(0, d.getNamespacedDidChainId)(t.iss)], s = (0, d.getDidAddress)(t.iss);
                            if (r) {
                                let e = (0, d.getMethodsFromRecap)(r),
                                    t = (0, d.getChainsFromRecap)(r);
                                l.push(...e), i.push(...t)
                            }
                            for (let e of i) h.push(`${e}:${s}`)
                        }
                        let u = await this.client.core.crypto.generateSharedKey(E, c.publicKey);
                        l.length > 0 && (o = {
                            topic: u,
                            acknowledged: !0,
                            self: {
                                publicKey: E,
                                metadata: this.client.metadata
                            },
                            peer: c,
                            controller: c.publicKey,
                            expiry: (0, d.calcExpiry)(ro),
                            requiredNamespaces: {},
                            optionalNamespaces: {},
                            relay: {
                                protocol: "irn"
                            },
                            pairingTopic: b,
                            namespaces: (0, d.buildNamespacesFromAuth)([...new Set(l)], [...new Set(h)]),
                            transportType: n
                        }, await this.client.core.relayer.subscribe(u, {
                            transportType: n
                        }), await this.client.session.set(u, o), b && await this.client.core.pairing.updateMetadata({
                            topic: b,
                            metadata: c.metadata
                        }), o = this.client.session.get(u)), null != (r = this.client.metadata.redirect) && r.linkMode && null != (i = c.metadata.redirect) && i.linkMode && null != (s = c.metadata.redirect) && s.universal && t && (this.client.core.addLinkModeSupportedApp(c.metadata.redirect.universal), this.client.session.update(u, {
                            transportType: U
                        })), N({
                            auths: a,
                            session: o
                        })
                    };
                this.events.once(k, O), this.events.once(P, R);
                try {
                    if (s) {
                        let e = (0, g.formatJsonRpcRequest)("wc_sessionAuthenticate", S, T);
                        this.client.core.history.set(b, e);
                        let r = await this.client.core.crypto.encode("", e, {
                            type: d.TYPE_2,
                            encoding: d.BASE64URL
                        });
                        i = (0, d.getLinkModeURL)(t, b, r)
                    } else await Promise.all([this.sendRequest({
                        topic: b,
                        method: "wc_sessionAuthenticate",
                        params: S,
                        expiry: e.expiry,
                        throwOnFailedPublish: !0,
                        clientRpcId: T
                    }), this.sendRequest({
                        topic: b,
                        method: "wc_sessionPropose",
                        params: x,
                        expiry: ra.wc_sessionPropose.req.ttl,
                        throwOnFailedPublish: !0,
                        clientRpcId: x.id
                    })])
                } catch (e) {
                    throw this.events.off(k, O), this.events.off(P, R), e
                }
                return await this.setProposal(x.id, x), await this.setAuthRequest(T, {
                    request: rm(rI({}, S), ry({
                        verifyContext: {}
                    })),
                    pairingTopic: b,
                    transportType: n
                }), {
                    uri: i ? ? v,
                    response: A
                }
            }), rC(this, "approveSessionAuthenticate", async e => {
                let t, {
                        id: r,
                        auths: i
                    } = e,
                    s = this.client.core.eventClient.createEvent({
                        properties: {
                            topic: r.toString(),
                            trace: ["authenticated_session_approve_started"]
                        }
                    });
                try {
                    this.isInitialized()
                } catch (e) {
                    throw s.setError("no_internet_connection"), e
                }
                let n = this.getPendingAuthRequest(r);
                if (!n) throw s.setError("authenticated_session_pending_request_not_found"), Error(`Could not find pending auth request with id ${r}`);
                let o = n.transportType || D;
                o === D && await this.confirmOnlineStateOrThrow();
                let a = n.requester.publicKey,
                    c = await this.client.core.crypto.generateKeyPair(),
                    l = (0, d.hashKey)(a),
                    h = {
                        type: d.TYPE_1,
                        receiverPublicKey: a,
                        senderPublicKey: c
                    },
                    u = [],
                    p = [];
                for (let e of i) {
                    if (!await (0, d.validateSignedCacao)({
                            cacao: e,
                            projectId: this.client.core.projectId
                        })) {
                        s.setError("invalid_cacao");
                        let e = (0, d.getSdkError)("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                        throw await this.sendError({
                            id: r,
                            topic: l,
                            error: e,
                            encodeOpts: h
                        }), Error(e.message)
                    }
                    s.addTrace("cacaos_verified");
                    let {
                        p: t
                    } = e, i = (0, d.getRecapFromResources)(t.resources), n = [(0, d.getNamespacedDidChainId)(t.iss)], o = (0, d.getDidAddress)(t.iss);
                    if (i) {
                        let e = (0, d.getMethodsFromRecap)(i),
                            t = (0, d.getChainsFromRecap)(i);
                        u.push(...e), n.push(...t)
                    }
                    for (let e of n) p.push(`${e}:${o}`)
                }
                let g = await this.client.core.crypto.generateSharedKey(c, a);
                if (s.addTrace("create_authenticated_session_topic"), u ? .length > 0) {
                    t = {
                        topic: g,
                        acknowledged: !0,
                        self: {
                            publicKey: c,
                            metadata: this.client.metadata
                        },
                        peer: {
                            publicKey: a,
                            metadata: n.requester.metadata
                        },
                        controller: a,
                        expiry: (0, d.calcExpiry)(ro),
                        authentication: i,
                        requiredNamespaces: {},
                        optionalNamespaces: {},
                        relay: {
                            protocol: "irn"
                        },
                        pairingTopic: n.pairingTopic,
                        namespaces: (0, d.buildNamespacesFromAuth)([...new Set(u)], [...new Set(p)]),
                        transportType: o
                    }, s.addTrace("subscribing_authenticated_session_topic");
                    try {
                        await this.client.core.relayer.subscribe(g, {
                            transportType: o
                        })
                    } catch (e) {
                        throw s.setError("subscribe_authenticated_session_topic_failure"), e
                    }
                    s.addTrace("subscribe_authenticated_session_topic_success"), await this.client.session.set(g, t), s.addTrace("store_authenticated_session"), await this.client.core.pairing.updateMetadata({
                        topic: n.pairingTopic,
                        metadata: n.requester.metadata
                    })
                }
                s.addTrace("publishing_authenticated_session_approve");
                try {
                    await this.sendResult({
                        topic: l,
                        id: r,
                        result: {
                            cacaos: i,
                            responder: {
                                publicKey: c,
                                metadata: this.client.metadata
                            }
                        },
                        encodeOpts: h,
                        throwOnFailedPublish: !0,
                        appLink: this.getAppLinkIfEnabled(n.requester.metadata, o)
                    })
                } catch (e) {
                    throw s.setError("authenticated_session_approve_publish_failure"), e
                }
                return await this.client.auth.requests.delete(r, {
                    message: "fulfilled",
                    code: 0
                }), await this.client.core.pairing.activate({
                    topic: n.pairingTopic
                }), this.client.core.eventClient.deleteEvent({
                    eventId: s.eventId
                }), {
                    session: t
                }
            }), rC(this, "rejectSessionAuthenticate", async e => {
                this.isInitialized();
                let {
                    id: t,
                    reason: r
                } = e, i = this.getPendingAuthRequest(t);
                if (!i) throw Error(`Could not find pending auth request with id ${t}`);
                i.transportType === D && await this.confirmOnlineStateOrThrow();
                let s = i.requester.publicKey,
                    n = await this.client.core.crypto.generateKeyPair(),
                    o = (0, d.hashKey)(s),
                    a = {
                        type: d.TYPE_1,
                        receiverPublicKey: s,
                        senderPublicKey: n
                    };
                await this.sendError({
                    id: t,
                    topic: o,
                    error: r,
                    encodeOpts: a,
                    rpcOpts: ra.wc_sessionAuthenticate.reject,
                    appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType)
                }), await this.client.auth.requests.delete(t, {
                    message: "rejected",
                    code: 0
                }), await this.client.proposal.delete(t, (0, d.getSdkError)("USER_DISCONNECTED"))
            }), rC(this, "formatAuthMessage", e => {
                this.isInitialized();
                let {
                    request: t,
                    iss: r
                } = e;
                return (0, d.formatMessage)(t, r)
            }), rC(this, "processRelayMessageCache", () => {
                setTimeout(async () => {
                    if (0 !== this.relayMessageCache.length)
                        for (; this.relayMessageCache.length > 0;) try {
                            let e = this.relayMessageCache.shift();
                            e && await this.onRelayMessage(e)
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                }, 50)
            }), rC(this, "cleanupDuplicatePairings", async e => {
                if (e.pairingTopic) try {
                    let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                        r = this.client.core.pairing.pairings.getAll().filter(r => {
                            var i, s;
                            return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (s = r.peerMetadata) ? void 0 : s.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                        });
                    if (0 === r.length) return;
                    this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                        topic: e.topic
                    }))), this.client.logger.info("Duplicate pairings clean up finished")
                } catch (e) {
                    this.client.logger.error(e)
                }
            }), rC(this, "deleteSession", async e => {
                var t;
                let {
                    topic: r,
                    expirerHasDeleted: i = !1,
                    emitEvent: s = !0,
                    id: n = 0
                } = e, {
                    self: o
                } = this.client.session.get(r);
                await this.client.core.relayer.unsubscribe(r), await this.client.session.delete(r, (0, d.getSdkError)("USER_DISCONNECTED")), this.addToRecentlyDeleted(r, "session"), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(rs).catch(e => this.client.logger.warn(e)), this.getPendingSessionRequests().forEach(e => {
                    e.topic === r && this.deletePendingSessionRequest(e.id, (0, d.getSdkError)("USER_DISCONNECTED"))
                }), r === (null == (t = this.sessionRequestQueue.queue[0]) ? void 0 : t.topic) && (this.sessionRequestQueue.state = rl), s && this.client.events.emit("session_delete", {
                    id: n,
                    topic: r
                })
            }), rC(this, "deleteProposal", async (e, t) => {
                if (t) try {
                    let t = this.client.proposal.get(e),
                        r = this.client.core.eventClient.getEvent({
                            topic: t.pairingTopic
                        });
                    r ? .setError("proposal_expired")
                } catch {}
                await Promise.all([this.client.proposal.delete(e, (0, d.getSdkError)("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "proposal")
            }), rC(this, "deletePendingSessionRequest", async (e, t, r = !1) => {
                await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(t => t.id !== e), r && (this.sessionRequestQueue.state = rl, this.client.events.emit("session_request_expire", {
                    id: e
                }))
            }), rC(this, "deletePendingAuthRequest", async (e, t, r = !1) => {
                await Promise.all([this.client.auth.requests.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)])
            }), rC(this, "setExpiry", async (e, t) => {
                this.client.session.keys.includes(e) && (this.client.core.expirer.set(e, t), await this.client.session.update(e, {
                    expiry: t
                }))
            }), rC(this, "setProposal", async (e, t) => {
                this.client.core.expirer.set(e, (0, d.calcExpiry)(ra.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e, t)
            }), rC(this, "setAuthRequest", async (e, t) => {
                let {
                    request: r,
                    pairingTopic: i,
                    transportType: s = D
                } = t;
                this.client.core.expirer.set(e, r.expiryTimestamp), await this.client.auth.requests.set(e, {
                    authPayload: r.authPayload,
                    requester: r.requester,
                    expiryTimestamp: r.expiryTimestamp,
                    id: e,
                    pairingTopic: i,
                    verifyContext: r.verifyContext,
                    transportType: s
                })
            }), rC(this, "setPendingSessionRequest", async e => {
                let {
                    id: t,
                    topic: r,
                    params: i,
                    verifyContext: s
                } = e, n = i.request.expiryTimestamp || (0, d.calcExpiry)(ra.wc_sessionRequest.req.ttl);
                this.client.core.expirer.set(t, n), await this.client.pendingRequest.set(t, {
                    id: t,
                    topic: r,
                    params: i,
                    verifyContext: s
                })
            }), rC(this, "sendRequest", async t => {
                let r, i, {
                        topic: s,
                        method: n,
                        params: o,
                        expiry: a,
                        relayRpcId: c,
                        clientRpcId: l,
                        throwOnFailedPublish: h,
                        appLink: u,
                        tvf: p
                    } = t,
                    f = (0, g.formatJsonRpcRequest)(n, o, l),
                    m = !!u;
                try {
                    let e = m ? d.BASE64URL : d.BASE64;
                    r = await this.client.core.crypto.encode(s, f, {
                        encoding: e
                    })
                } catch (e) {
                    throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${s} failed`), e
                }
                if (ru.includes(n)) {
                    let e = (0, d.hashMessage)(JSON.stringify(f)),
                        t = (0, d.hashMessage)(r);
                    i = await this.client.core.verify.register({
                        id: t,
                        decryptedId: e
                    })
                }
                let y = ra[n].req;
                if (y.attestation = i, a && (y.ttl = a), c && (y.id = c), this.client.core.history.set(s, f), m) {
                    let t = (0, d.getLinkModeURL)(u, s, r);
                    await e.g.Linking.openURL(t, this.client.name)
                } else {
                    let e, t = ra[n].req;
                    a && (t.ttl = a), c && (t.id = c), t.tvf = rm(rI({}, p), ry({
                        correlationId: f.id
                    })), h ? (e = rI({}, t.internal), t.internal = rm(e, ry({
                        throwOnFailedPublish: !0
                    })), await this.client.core.relayer.publish(s, r, t)) : this.client.core.relayer.publish(s, r, t).catch(e => this.client.logger.error(e))
                }
                return f.id
            }), rC(this, "sendResult", async t => {
                let r, i, s, {
                        id: n,
                        topic: o,
                        result: a,
                        throwOnFailedPublish: c,
                        encodeOpts: l,
                        appLink: h
                    } = t,
                    u = (0, g.formatJsonRpcResult)(n, a),
                    p = h && "u" > typeof(null == e.g ? void 0 : e.g.Linking);
                try {
                    let e, t, i = p ? d.BASE64URL : d.BASE64;
                    r = await this.client.core.crypto.encode(o, u, (e = rI({}, l || {}), t = {
                        encoding: i
                    }, rm(e, ry(t))))
                } catch (e) {
                    throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${o} failed`), e
                }
                try {
                    let e = (i = await this.client.core.history.get(o, n)).request;
                    try {
                        this.shouldSetTVF(e.method, e.params) && (s = this.getTVFParams(n, e.params, a))
                    } catch (e) {
                        this.client.logger.warn("sendResult() -> getTVFParams() failed", e)
                    }
                } catch (e) {
                    throw this.client.logger.error(`sendResult() -> history.get(${o}, ${n}) failed`), e
                }
                if (p) {
                    let t = (0, d.getLinkModeURL)(h, o, r);
                    await e.g.Linking.openURL(t, this.client.name)
                } else {
                    let e, t = ra[i.request.method].res;
                    t.tvf = rm(rI({}, s), ry({
                        correlationId: n
                    })), c ? (e = rI({}, t.internal), t.internal = rm(e, ry({
                        throwOnFailedPublish: !0
                    })), await this.client.core.relayer.publish(o, r, t)) : this.client.core.relayer.publish(o, r, t).catch(e => this.client.logger.error(e))
                }
                await this.client.core.history.resolve(u)
            }), rC(this, "sendError", async t => {
                let r, i, {
                        id: s,
                        topic: n,
                        error: o,
                        encodeOpts: a,
                        rpcOpts: c,
                        appLink: l
                    } = t,
                    h = (0, g.formatJsonRpcError)(s, o),
                    u = l && "u" > typeof(null == e.g ? void 0 : e.g.Linking);
                try {
                    let e, t, i = u ? d.BASE64URL : d.BASE64;
                    r = await this.client.core.crypto.encode(n, h, (e = rI({}, a || {}), t = {
                        encoding: i
                    }, rm(e, ry(t))))
                } catch (e) {
                    throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${n} failed`), e
                }
                try {
                    i = await this.client.core.history.get(n, s)
                } catch (e) {
                    throw this.client.logger.error(`sendError() -> history.get(${n}, ${s}) failed`), e
                }
                if (u) {
                    let t = (0, d.getLinkModeURL)(l, n, r);
                    await e.g.Linking.openURL(t, this.client.name)
                } else {
                    let e = i.request.method,
                        t = c || ra[e].res;
                    this.client.core.relayer.publish(n, r, t)
                }
                await this.client.core.history.resolve(h)
            }), rC(this, "cleanup", async () => {
                let e = [],
                    t = [];
                this.client.session.getAll().forEach(t => {
                    let r = !1;
                    (0, d.isExpired)(t.expiry) && (r = !0), this.client.core.crypto.keychain.has(t.topic) || (r = !0), r && e.push(t.topic)
                }), this.client.proposal.getAll().forEach(e => {
                    (0, d.isExpired)(e.expiryTimestamp) && t.push(e.id)
                }), await Promise.all([...e.map(e => this.deleteSession({
                    topic: e
                })), ...t.map(e => this.deleteProposal(e))])
            }), rC(this, "onProviderMessageEvent", async e => {
                !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(e) : await this.onRelayMessage(e)
            }), rC(this, "onRelayEventRequest", async e => {
                this.requestQueue.queue.push(e), await this.processRequestsQueue()
            }), rC(this, "processRequestsQueue", async () => {
                if (this.requestQueue.state === rh) return void this.client.logger.info("Request queue already active, skipping...");
                for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                    this.requestQueue.state = rh;
                    let e = this.requestQueue.queue.shift();
                    if (e) try {
                        await this.processRequest(e)
                    } catch (e) {
                        this.client.logger.warn(e)
                    }
                }
                this.requestQueue.state = rl
            }), rC(this, "processRequest", async e => {
                let {
                    topic: t,
                    payload: r,
                    attestation: i,
                    transportType: s,
                    encryptedId: n
                } = e, o = r.method;
                if (!this.shouldIgnorePairingRequest({
                        topic: t,
                        requestMethod: o
                    })) switch (o) {
                    case "wc_sessionPropose":
                        return await this.onSessionProposeRequest({
                            topic: t,
                            payload: r,
                            attestation: i,
                            encryptedId: n
                        });
                    case "wc_sessionSettle":
                        return await this.onSessionSettleRequest(t, r);
                    case "wc_sessionUpdate":
                        return await this.onSessionUpdateRequest(t, r);
                    case "wc_sessionExtend":
                        return await this.onSessionExtendRequest(t, r);
                    case "wc_sessionPing":
                        return await this.onSessionPingRequest(t, r);
                    case "wc_sessionDelete":
                        return await this.onSessionDeleteRequest(t, r);
                    case "wc_sessionRequest":
                        return await this.onSessionRequest({
                            topic: t,
                            payload: r,
                            attestation: i,
                            encryptedId: n,
                            transportType: s
                        });
                    case "wc_sessionEvent":
                        return await this.onSessionEventRequest(t, r);
                    case "wc_sessionAuthenticate":
                        return await this.onSessionAuthenticateRequest({
                            topic: t,
                            payload: r,
                            attestation: i,
                            encryptedId: n,
                            transportType: s
                        });
                    default:
                        return this.client.logger.info(`Unsupported request method ${o}`)
                }
            }), rC(this, "onRelayEventResponse", async e => {
                let {
                    topic: t,
                    payload: r,
                    transportType: i
                } = e, s = (await this.client.core.history.get(t, r.id)).request.method;
                switch (s) {
                    case "wc_sessionPropose":
                        return this.onSessionProposeResponse(t, r, i);
                    case "wc_sessionSettle":
                        return this.onSessionSettleResponse(t, r);
                    case "wc_sessionUpdate":
                        return this.onSessionUpdateResponse(t, r);
                    case "wc_sessionExtend":
                        return this.onSessionExtendResponse(t, r);
                    case "wc_sessionPing":
                        return this.onSessionPingResponse(t, r);
                    case "wc_sessionRequest":
                        return this.onSessionRequestResponse(t, r);
                    case "wc_sessionAuthenticate":
                        return this.onSessionAuthenticateResponse(t, r);
                    default:
                        return this.client.logger.info(`Unsupported response method ${s}`)
                }
            }), rC(this, "onRelayEventUnknownPayload", e => {
                let {
                    topic: t
                } = e, {
                    message: r
                } = (0, d.getInternalError)("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                throw Error(r)
            }), rC(this, "shouldIgnorePairingRequest", e => {
                let {
                    topic: t,
                    requestMethod: r
                } = e, i = this.expectedPairingMethodMap.get(t);
                return !(!i || i.includes(r)) && !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0)
            }), rC(this, "onSessionProposeRequest", async e => {
                let {
                    topic: t,
                    payload: r,
                    attestation: i,
                    encryptedId: s
                } = e, {
                    params: n,
                    id: o
                } = r;
                try {
                    let e = this.client.core.eventClient.getEvent({
                        topic: t
                    });
                    0 === this.client.events.listenerCount("session_proposal") && (console.warn("No listener for session_proposal event"), e ? .setError("proposal_listener_not_found")), this.isValidConnect(rI({}, r.params));
                    let a = n.expiryTimestamp || (0, d.calcExpiry)(ra.wc_sessionPropose.req.ttl),
                        c = rI({
                            id: o,
                            pairingTopic: t,
                            expiryTimestamp: a
                        }, n);
                    await this.setProposal(o, c);
                    let l = await this.getVerifyContext({
                        attestationId: i,
                        hash: (0, d.hashMessage)(JSON.stringify(r)),
                        encryptedId: s,
                        metadata: c.proposer.metadata
                    });
                    e ? .addTrace("emit_session_proposal"), this.client.events.emit("session_proposal", {
                        id: o,
                        params: c,
                        verifyContext: l
                    })
                } catch (e) {
                    await this.sendError({
                        id: o,
                        topic: t,
                        error: e,
                        rpcOpts: ra.wc_sessionPropose.autoReject
                    }), this.client.logger.error(e)
                }
            }), rC(this, "onSessionProposeResponse", async (e, t, r) => {
                let {
                    id: i
                } = t;
                if ((0, f.isJsonRpcResult)(t)) {
                    let {
                        result: s
                    } = t;
                    this.client.logger.trace({
                        type: "method",
                        method: "onSessionProposeResponse",
                        result: s
                    });
                    let n = this.client.proposal.get(i);
                    this.client.logger.trace({
                        type: "method",
                        method: "onSessionProposeResponse",
                        proposal: n
                    });
                    let o = n.proposer.publicKey;
                    this.client.logger.trace({
                        type: "method",
                        method: "onSessionProposeResponse",
                        selfPublicKey: o
                    });
                    let a = s.responderPublicKey;
                    this.client.logger.trace({
                        type: "method",
                        method: "onSessionProposeResponse",
                        peerPublicKey: a
                    });
                    let c = await this.client.core.crypto.generateSharedKey(o, a);
                    this.pendingSessions.set(i, {
                        sessionTopic: c,
                        pairingTopic: e,
                        proposalId: i,
                        publicKey: o
                    });
                    let l = await this.client.core.relayer.subscribe(c, {
                        transportType: r
                    });
                    this.client.logger.trace({
                        type: "method",
                        method: "onSessionProposeResponse",
                        subscriptionId: l
                    }), await this.client.core.pairing.activate({
                        topic: e
                    })
                } else if ((0, f.isJsonRpcError)(t)) {
                    await this.client.proposal.delete(i, (0, d.getSdkError)("USER_DISCONNECTED"));
                    let e = (0, d.engineEvent)("session_connect", i);
                    if (0 === this.events.listenerCount(e)) throw Error(`emitting ${e} without any listeners, 954`);
                    this.events.emit(e, {
                        error: t.error
                    })
                }
            }), rC(this, "onSessionSettleRequest", async (e, t) => {
                let {
                    id: r,
                    params: i
                } = t;
                try {
                    let r, s;
                    this.isValidSessionSettleRequest(i);
                    let {
                        relay: n,
                        controller: o,
                        expiry: a,
                        namespaces: c,
                        sessionProperties: l,
                        scopedProperties: h,
                        sessionConfig: u
                    } = t.params, p = [...this.pendingSessions.values()].find(t => t.sessionTopic === e);
                    if (!p) return this.client.logger.error(`Pending session not found for topic ${e}`);
                    let g = this.client.proposal.get(p.proposalId),
                        f = (r = rI(rI(rI({
                            topic: e,
                            relay: n,
                            expiry: a,
                            namespaces: c,
                            acknowledged: !0,
                            pairingTopic: p.pairingTopic,
                            requiredNamespaces: g.requiredNamespaces,
                            optionalNamespaces: g.optionalNamespaces,
                            controller: o.publicKey,
                            self: {
                                publicKey: p.publicKey,
                                metadata: this.client.metadata
                            },
                            peer: {
                                publicKey: o.publicKey,
                                metadata: o.metadata
                            }
                        }, l && {
                            sessionProperties: l
                        }), h && {
                            scopedProperties: h
                        }), u && {
                            sessionConfig: u
                        }), s = {
                            transportType: D
                        }, rm(r, ry(s)));
                    await this.client.session.set(f.topic, f), await this.setExpiry(f.topic, f.expiry), await this.client.core.pairing.updateMetadata({
                        topic: p.pairingTopic,
                        metadata: f.peer.metadata
                    }), this.client.events.emit("session_connect", {
                        session: f
                    }), this.events.emit((0, d.engineEvent)("session_connect", p.proposalId), {
                        session: f
                    }), this.pendingSessions.delete(p.proposalId), this.deleteProposal(p.proposalId, !1), this.cleanupDuplicatePairings(f), await this.sendResult({
                        id: t.id,
                        topic: e,
                        result: !0,
                        throwOnFailedPublish: !0
                    })
                } catch (t) {
                    await this.sendError({
                        id: r,
                        topic: e,
                        error: t
                    }), this.client.logger.error(t)
                }
            }), rC(this, "onSessionSettleResponse", async (e, t) => {
                let {
                    id: r
                } = t;
                (0, f.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                    acknowledged: !0
                }), this.events.emit((0, d.engineEvent)("session_approve", r), {})) : (0, f.isJsonRpcError)(t) && (await this.client.session.delete(e, (0, d.getSdkError)("USER_DISCONNECTED")), this.events.emit((0, d.engineEvent)("session_approve", r), {
                    error: t.error
                }))
            }), rC(this, "onSessionUpdateRequest", async (e, t) => {
                let {
                    params: r,
                    id: i
                } = t;
                try {
                    let t = `${e}_session_update`,
                        s = d.MemoryStore.get(t);
                    if (s && this.isRequestOutOfSync(s, i)) {
                        this.client.logger.warn(`Discarding out of sync request - ${i}`), this.sendError({
                            id: i,
                            topic: e,
                            error: (0, d.getSdkError)("INVALID_UPDATE_REQUEST")
                        });
                        return
                    }
                    this.isValidUpdate(rI({
                        topic: e
                    }, r));
                    try {
                        d.MemoryStore.set(t, i), await this.client.session.update(e, {
                            namespaces: r.namespaces
                        }), await this.sendResult({
                            id: i,
                            topic: e,
                            result: !0,
                            throwOnFailedPublish: !0
                        })
                    } catch (e) {
                        throw d.MemoryStore.delete(t), e
                    }
                    this.client.events.emit("session_update", {
                        id: i,
                        topic: e,
                        params: r
                    })
                } catch (t) {
                    await this.sendError({
                        id: i,
                        topic: e,
                        error: t
                    }), this.client.logger.error(t)
                }
            }), rC(this, "isRequestOutOfSync", (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)), rC(this, "onSessionUpdateResponse", (e, t) => {
                let {
                    id: r
                } = t, i = (0, d.engineEvent)("session_update", r);
                if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                (0, f.isJsonRpcResult)(t) ? this.events.emit((0, d.engineEvent)("session_update", r), {}): (0, f.isJsonRpcError)(t) && this.events.emit((0, d.engineEvent)("session_update", r), {
                    error: t.error
                })
            }), rC(this, "onSessionExtendRequest", async (e, t) => {
                let {
                    id: r
                } = t;
                try {
                    this.isValidExtend({
                        topic: e
                    }), await this.setExpiry(e, (0, d.calcExpiry)(ro)), await this.sendResult({
                        id: r,
                        topic: e,
                        result: !0,
                        throwOnFailedPublish: !0
                    }), this.client.events.emit("session_extend", {
                        id: r,
                        topic: e
                    })
                } catch (t) {
                    await this.sendError({
                        id: r,
                        topic: e,
                        error: t
                    }), this.client.logger.error(t)
                }
            }), rC(this, "onSessionExtendResponse", (e, t) => {
                let {
                    id: r
                } = t, i = (0, d.engineEvent)("session_extend", r);
                if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                (0, f.isJsonRpcResult)(t) ? this.events.emit((0, d.engineEvent)("session_extend", r), {}): (0, f.isJsonRpcError)(t) && this.events.emit((0, d.engineEvent)("session_extend", r), {
                    error: t.error
                })
            }), rC(this, "onSessionPingRequest", async (e, t) => {
                let {
                    id: r
                } = t;
                try {
                    this.isValidPing({
                        topic: e
                    }), await this.sendResult({
                        id: r,
                        topic: e,
                        result: !0,
                        throwOnFailedPublish: !0
                    }), this.client.events.emit("session_ping", {
                        id: r,
                        topic: e
                    })
                } catch (t) {
                    await this.sendError({
                        id: r,
                        topic: e,
                        error: t
                    }), this.client.logger.error(t)
                }
            }), rC(this, "onSessionPingResponse", (e, t) => {
                let {
                    id: r
                } = t, i = (0, d.engineEvent)("session_ping", r);
                setTimeout(() => {
                    if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners 2176`);
                    (0, f.isJsonRpcResult)(t) ? this.events.emit((0, d.engineEvent)("session_ping", r), {}): (0, f.isJsonRpcError)(t) && this.events.emit((0, d.engineEvent)("session_ping", r), {
                        error: t.error
                    })
                }, 500)
            }), rC(this, "onSessionDeleteRequest", async (e, t) => {
                let {
                    id: r
                } = t;
                try {
                    this.isValidDisconnect({
                        topic: e,
                        reason: t.params
                    }), Promise.all([new Promise(t => {
                        this.client.core.relayer.once(_, async () => {
                            t(await this.deleteSession({
                                topic: e,
                                id: r
                            }))
                        })
                    }), this.sendResult({
                        id: r,
                        topic: e,
                        result: !0,
                        throwOnFailedPublish: !0
                    }), this.cleanupPendingSentRequestsForTopic({
                        topic: e,
                        error: (0, d.getSdkError)("USER_DISCONNECTED")
                    })]).catch(e => this.client.logger.error(e))
                } catch (e) {
                    this.client.logger.error(e)
                }
            }), rC(this, "onSessionRequest", async e => {
                var t, r, i;
                let {
                    topic: s,
                    payload: n,
                    attestation: o,
                    encryptedId: a,
                    transportType: c
                } = e, {
                    id: l,
                    params: h
                } = n;
                try {
                    await this.isValidRequest(rI({
                        topic: s
                    }, h));
                    let e = this.client.session.get(s),
                        n = await this.getVerifyContext({
                            attestationId: o,
                            hash: (0, d.hashMessage)(JSON.stringify((0, g.formatJsonRpcRequest)("wc_sessionRequest", h, l))),
                            encryptedId: a,
                            metadata: e.peer.metadata,
                            transportType: c
                        }),
                        u = {
                            id: l,
                            topic: s,
                            params: h,
                            verifyContext: n
                        };
                    await this.setPendingSessionRequest(u), c === U && null != (t = e.peer.metadata.redirect) && t.universal && this.client.core.addLinkModeSupportedApp(null == (r = e.peer.metadata.redirect) ? void 0 : r.universal), null != (i = this.client.signConfig) && i.disableRequestQueue ? this.emitSessionRequest(u) : (this.addSessionRequestToSessionRequestQueue(u), this.processSessionRequestQueue())
                } catch (e) {
                    await this.sendError({
                        id: l,
                        topic: s,
                        error: e
                    }), this.client.logger.error(e)
                }
            }), rC(this, "onSessionRequestResponse", (e, t) => {
                let {
                    id: r
                } = t, i = (0, d.engineEvent)("session_request", r);
                if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                (0, f.isJsonRpcResult)(t) ? this.events.emit((0, d.engineEvent)("session_request", r), {
                    result: t.result
                }): (0, f.isJsonRpcError)(t) && this.events.emit((0, d.engineEvent)("session_request", r), {
                    error: t.error
                })
            }), rC(this, "onSessionEventRequest", async (e, t) => {
                let {
                    id: r,
                    params: i
                } = t;
                try {
                    let t = `${e}_session_event_${i.event.name}`,
                        s = d.MemoryStore.get(t);
                    if (s && this.isRequestOutOfSync(s, r)) return void this.client.logger.info(`Discarding out of sync request - ${r}`);
                    this.isValidEmit(rI({
                        topic: e
                    }, i)), this.client.events.emit("session_event", {
                        id: r,
                        topic: e,
                        params: i
                    }), d.MemoryStore.set(t, r)
                } catch (t) {
                    await this.sendError({
                        id: r,
                        topic: e,
                        error: t
                    }), this.client.logger.error(t)
                }
            }), rC(this, "onSessionAuthenticateResponse", (e, t) => {
                let {
                    id: r
                } = t;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionAuthenticateResponse",
                    topic: e,
                    payload: t
                }), (0, f.isJsonRpcResult)(t) ? this.events.emit((0, d.engineEvent)("session_request", r), {
                    result: t.result
                }) : (0, f.isJsonRpcError)(t) && this.events.emit((0, d.engineEvent)("session_request", r), {
                    error: t.error
                })
            }), rC(this, "onSessionAuthenticateRequest", async e => {
                var t;
                let {
                    topic: r,
                    payload: i,
                    attestation: s,
                    encryptedId: n,
                    transportType: o
                } = e;
                try {
                    let {
                        requester: e,
                        authPayload: a,
                        expiryTimestamp: c
                    } = i.params, l = await this.getVerifyContext({
                        attestationId: s,
                        hash: (0, d.hashMessage)(JSON.stringify(i)),
                        encryptedId: n,
                        metadata: e.metadata,
                        transportType: o
                    }), h = {
                        requester: e,
                        pairingTopic: r,
                        id: i.id,
                        authPayload: a,
                        verifyContext: l,
                        expiryTimestamp: c
                    };
                    await this.setAuthRequest(i.id, {
                        request: h,
                        pairingTopic: r,
                        transportType: o
                    }), o === U && null != (t = e.metadata.redirect) && t.universal && this.client.core.addLinkModeSupportedApp(e.metadata.redirect.universal), this.client.events.emit("session_authenticate", {
                        topic: r,
                        params: i.params,
                        id: i.id,
                        verifyContext: l
                    })
                } catch (a) {
                    this.client.logger.error(a);
                    let e = i.params.requester.publicKey,
                        t = await this.client.core.crypto.generateKeyPair(),
                        s = this.getAppLinkIfEnabled(i.params.requester.metadata, o),
                        n = {
                            type: d.TYPE_1,
                            receiverPublicKey: e,
                            senderPublicKey: t
                        };
                    await this.sendError({
                        id: i.id,
                        topic: r,
                        error: a,
                        encodeOpts: n,
                        rpcOpts: ra.wc_sessionAuthenticate.autoReject,
                        appLink: s
                    })
                }
            }), rC(this, "addSessionRequestToSessionRequestQueue", e => {
                this.sessionRequestQueue.queue.push(e)
            }), rC(this, "cleanupAfterResponse", e => {
                this.deletePendingSessionRequest(e.response.id, {
                    message: "fulfilled",
                    code: 0
                }), setTimeout(() => {
                    this.sessionRequestQueue.state = rl, this.processSessionRequestQueue()
                }, (0, c.toMiliseconds)(this.requestQueueDelay))
            }), rC(this, "cleanupPendingSentRequestsForTopic", ({
                topic: e,
                error: t
            }) => {
                let r = this.client.core.history.pending;
                r.length > 0 && r.filter(t => t.topic === e && "wc_sessionRequest" === t.request.method).forEach(e => {
                    let r = e.request.id,
                        i = (0, d.engineEvent)("session_request", r);
                    if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                    this.events.emit((0, d.engineEvent)("session_request", e.request.id), {
                        error: t
                    })
                })
            }), rC(this, "processSessionRequestQueue", () => {
                if (this.sessionRequestQueue.state === rh) return void this.client.logger.info("session request queue is already active.");
                let e = this.sessionRequestQueue.queue[0];
                if (!e) return void this.client.logger.info("session request queue is empty.");
                try {
                    this.sessionRequestQueue.state = rh, this.emitSessionRequest(e)
                } catch (e) {
                    this.client.logger.error(e)
                }
            }), rC(this, "emitSessionRequest", e => {
                this.client.events.emit("session_request", e)
            }), rC(this, "onPairingCreated", e => {
                if (e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active) return;
                let t = this.client.proposal.getAll().find(t => t.pairingTopic === e.topic);
                t && this.onSessionProposeRequest({
                    topic: e.topic,
                    payload: (0, g.formatJsonRpcRequest)("wc_sessionPropose", rm(rI({}, t), ry({
                        requiredNamespaces: t.requiredNamespaces,
                        optionalNamespaces: t.optionalNamespaces,
                        relays: t.relays,
                        proposer: t.proposer,
                        sessionProperties: t.sessionProperties,
                        scopedProperties: t.scopedProperties
                    })), t.id)
                })
            }), rC(this, "isValidConnect", async e => {
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                    throw Error(t)
                }
                let {
                    pairingTopic: t,
                    requiredNamespaces: r,
                    optionalNamespaces: i,
                    sessionProperties: s,
                    scopedProperties: n,
                    relays: o
                } = e;
                if ((0, d.isUndefined)(t) || await this.isValidPairingTopic(t), !(0, d.isValidRelays)(o, !0)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `connect() relays: ${o}`);
                    throw Error(e)
                }
                if ((0, d.isUndefined)(r) || 0 === (0, d.isValidObject)(r) || this.validateNamespaces(r, "requiredNamespaces"), (0, d.isUndefined)(i) || 0 === (0, d.isValidObject)(i) || this.validateNamespaces(i, "optionalNamespaces"), (0, d.isUndefined)(s) || this.validateSessionProps(s, "sessionProperties"), !(0, d.isUndefined)(n)) {
                    this.validateSessionProps(n, "scopedProperties");
                    let e = Object.keys(r || {}).concat(Object.keys(i || {}));
                    if (!Object.keys(n).every(t => e.includes(t))) throw Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(n)}, required/optional namespaces: ${JSON.stringify(e)}`)
                }
            }), rC(this, "validateNamespaces", (e, t) => {
                let r = (0, d.isValidRequiredNamespaces)(e, "connect()", t);
                if (r) throw Error(r.message)
            }), rC(this, "isValidApprove", async e => {
                if (!(0, d.isValidParams)(e)) throw Error((0, d.getInternalError)("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                let {
                    id: t,
                    namespaces: r,
                    relayProtocol: i,
                    sessionProperties: s,
                    scopedProperties: n
                } = e;
                this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
                let o = this.client.proposal.get(t),
                    a = (0, d.isValidNamespaces)(r, "approve()");
                if (a) throw Error(a.message);
                let c = (0, d.isConformingNamespaces)(o.requiredNamespaces, r, "approve()");
                if (c) throw Error(c.message);
                if (!(0, d.isValidString)(i, !0)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                    throw Error(e)
                }
                if ((0, d.isUndefined)(s) || this.validateSessionProps(s, "sessionProperties"), !(0, d.isUndefined)(n)) {
                    this.validateSessionProps(n, "scopedProperties");
                    let e = new Set(Object.keys(r));
                    if (!Object.keys(n).every(t => e.has(t))) throw Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(n)}, approved namespaces: ${Array.from(e).join(", ")}`)
                }
            }), rC(this, "isValidReject", async e => {
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `reject() params: ${e}`);
                    throw Error(t)
                }
                let {
                    id: t,
                    reason: r
                } = e;
                if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !(0, d.isValidErrorReason)(r)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                    throw Error(e)
                }
            }), rC(this, "isValidSessionSettleRequest", e => {
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                    throw Error(t)
                }
                let {
                    relay: t,
                    controller: r,
                    namespaces: i,
                    expiry: s
                } = e;
                if (!(0, d.isValidRelay)(t)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                    throw Error(e)
                }
                let n = (0, d.isValidController)(r, "onSessionSettleRequest()");
                if (n) throw Error(n.message);
                let o = (0, d.isValidNamespaces)(i, "onSessionSettleRequest()");
                if (o) throw Error(o.message);
                if ((0, d.isExpired)(s)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("EXPIRED", "onSessionSettleRequest()");
                    throw Error(e)
                }
            }), rC(this, "isValidUpdate", async e => {
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `update() params: ${e}`);
                    throw Error(t)
                }
                let {
                    topic: t,
                    namespaces: r
                } = e;
                this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
                let i = this.client.session.get(t),
                    s = (0, d.isValidNamespaces)(r, "update()");
                if (s) throw Error(s.message);
                let n = (0, d.isConformingNamespaces)(i.requiredNamespaces, r, "update()");
                if (n) throw Error(n.message)
            }), rC(this, "isValidExtend", async e => {
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `extend() params: ${e}`);
                    throw Error(t)
                }
                let {
                    topic: t
                } = e;
                this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t)
            }), rC(this, "isValidRequest", async e => {
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `request() params: ${e}`);
                    throw Error(t)
                }
                let {
                    topic: t,
                    request: r,
                    chainId: i,
                    expiry: s
                } = e;
                this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
                let {
                    namespaces: n
                } = this.client.session.get(t);
                if (!(0, d.isValidNamespacesChainId)(n, i)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `request() chainId: ${i}`);
                    throw Error(e)
                }
                if (!(0, d.isValidRequest)(r)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                    throw Error(e)
                }
                if (!(0, d.isValidNamespacesRequest)(n, i, r.method)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `request() method: ${r.method}`);
                    throw Error(e)
                }
                if (s && !(0, d.isValidRequestExpiry)(s, rc)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `request() expiry: ${s}. Expiry must be a number (in seconds) between ${rc.min} and ${rc.max}`);
                    throw Error(e)
                }
            }), rC(this, "isValidRespond", async e => {
                var t;
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `respond() params: ${e}`);
                    throw Error(t)
                }
                let {
                    topic: r,
                    response: i
                } = e;
                try {
                    await this.isValidSessionTopic(r)
                } catch (r) {
                    throw null != (t = e ? .response) && t.id && this.cleanupAfterResponse(e), r
                }
                if (!(0, d.isValidResponse)(i)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                    throw Error(e)
                }
            }), rC(this, "isValidPing", async e => {
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `ping() params: ${e}`);
                    throw Error(t)
                }
                let {
                    topic: t
                } = e;
                await this.isValidSessionOrPairingTopic(t)
            }), rC(this, "isValidEmit", async e => {
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `emit() params: ${e}`);
                    throw Error(t)
                }
                let {
                    topic: t,
                    event: r,
                    chainId: i
                } = e;
                await this.isValidSessionTopic(t);
                let {
                    namespaces: s
                } = this.client.session.get(t);
                if (!(0, d.isValidNamespacesChainId)(s, i)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                    throw Error(e)
                }
                if (!(0, d.isValidEvent)(r) || !(0, d.isValidNamespacesEvent)(s, i, r.name)) {
                    let {
                        message: e
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                    throw Error(e)
                }
            }), rC(this, "isValidDisconnect", async e => {
                if (!(0, d.isValidParams)(e)) {
                    let {
                        message: t
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                    throw Error(t)
                }
                let {
                    topic: t
                } = e;
                await this.isValidSessionOrPairingTopic(t)
            }), rC(this, "isValidAuthenticate", e => {
                let {
                    chains: t,
                    uri: r,
                    domain: i,
                    nonce: s
                } = e;
                if (!Array.isArray(t) || 0 === t.length) throw Error("chains is required and must be a non-empty array");
                if (!(0, d.isValidString)(r, !1)) throw Error("uri is required parameter");
                if (!(0, d.isValidString)(i, !1)) throw Error("domain is required parameter");
                if (!(0, d.isValidString)(s, !1)) throw Error("nonce is required parameter");
                if ([...new Set(t.map(e => (0, d.parseChainId)(e).namespace))].length > 1) throw Error("Multi-namespace requests are not supported. Please request single namespace only.");
                let {
                    namespace: n
                } = (0, d.parseChainId)(t[0]);
                if ("eip155" !== n) throw Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")
            }), rC(this, "getVerifyContext", async e => {
                let {
                    attestationId: t,
                    hash: r,
                    encryptedId: i,
                    metadata: s,
                    transportType: n
                } = e, o = {
                    verified: {
                        verifyUrl: s.verifyUrl || J,
                        validation: "UNKNOWN",
                        origin: s.url || ""
                    }
                };
                try {
                    if (n === U) {
                        let e = this.getAppLinkIfEnabled(s, n);
                        return o.verified.validation = e && new URL(e).origin === new URL(s.url).origin ? "VALID" : "INVALID", o
                    }
                    let e = await this.client.core.verify.resolve({
                        attestationId: t,
                        hash: r,
                        encryptedId: i,
                        verifyUrl: s.verifyUrl
                    });
                    e && (o.verified.origin = e.origin, o.verified.isScam = e.isScam, o.verified.validation = e.origin === new URL(s.url).origin ? "VALID" : "INVALID")
                } catch (e) {
                    this.client.logger.warn(e)
                }
                return this.client.logger.debug(`Verify context: ${JSON.stringify(o)}`), o
            }), rC(this, "validateSessionProps", (e, t) => {
                Object.values(e).forEach((r, i) => {
                    if (null == r) {
                        let {
                            message: s
                        } = (0, d.getInternalError)("MISSING_OR_INVALID", `${t} must contain an existing value for each key. Received: ${r} for key ${Object.keys(e)[i]}`);
                        throw Error(s)
                    }
                })
            }), rC(this, "getPendingAuthRequest", e => {
                let t = this.client.auth.requests.get(e);
                return "object" == typeof t ? t : void 0
            }), rC(this, "addToRecentlyDeleted", (e, t) => {
                if (this.recentlyDeletedMap.set(e, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
                    let e = 0,
                        t = this.recentlyDeletedLimit / 2;
                    for (let r of this.recentlyDeletedMap.keys()) {
                        if (e++ >= t) break;
                        this.recentlyDeletedMap.delete(r)
                    }
                }
            }), rC(this, "checkRecentlyDeleted", e => {
                let t = this.recentlyDeletedMap.get(e);
                if (t) {
                    let {
                        message: r
                    } = (0, d.getInternalError)("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e}`);
                    throw Error(r)
                }
            }), rC(this, "isLinkModeEnabled", (t, r) => {
                var i, s, n, o, a, c, l, h, d;
                return !!t && r === U && (null == (s = null == (i = this.client.metadata) ? void 0 : i.redirect) ? void 0 : s.linkMode) === !0 && (null == (o = null == (n = this.client.metadata) ? void 0 : n.redirect) ? void 0 : o.universal) !== void 0 && (null == (c = null == (a = this.client.metadata) ? void 0 : a.redirect) ? void 0 : c.universal) !== "" && (null == (l = t ? .redirect) ? void 0 : l.universal) !== void 0 && (null == (h = t ? .redirect) ? void 0 : h.universal) !== "" && (null == (d = t ? .redirect) ? void 0 : d.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(t.redirect.universal) && "u" > typeof(null == e.g ? void 0 : e.g.Linking)
            }), rC(this, "getAppLinkIfEnabled", (e, t) => {
                var r;
                return this.isLinkModeEnabled(e, t) ? null == (r = e ? .redirect) ? void 0 : r.universal : void 0
            }), rC(this, "handleLinkModeMessage", ({
                url: e
            }) => {
                if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
                let t = (0, d.getSearchParamFromURL)(e, "topic") || "",
                    r = decodeURIComponent((0, d.getSearchParamFromURL)(e, "wc_ev") || ""),
                    i = this.client.session.keys.includes(t);
                i && this.client.session.update(t, {
                    transportType: U
                }), this.client.core.dispatchEnvelope({
                    topic: t,
                    message: r,
                    sessionExists: i
                })
            }), rC(this, "registerLinkModeListeners", async () => {
                var t;
                if ((0, d.isTestRun)() || (0, d.isReactNative)() && null != (t = this.client.metadata.redirect) && t.linkMode) {
                    let t = null == e.g ? void 0 : e.g.Linking;
                    if ("u" > typeof t) {
                        t.addEventListener("url", this.handleLinkModeMessage, this.client.name);
                        let e = await t.getInitialURL();
                        e && setTimeout(() => {
                            this.handleLinkModeMessage({
                                url: e
                            })
                        }, 50)
                    }
                }
            }), rC(this, "shouldSetTVF", (e, t) => {
                if (!t || "wc_sessionRequest" !== e) return !1;
                let {
                    request: r
                } = t;
                return Object.keys(rd).includes(r.method)
            }), rC(this, "getTVFParams", (e, t, r) => {
                var i, s;
                try {
                    let n, o, a = t.request.method,
                        c = this.extractTxHashesFromResult(a, r);
                    return n = rI({
                        correlationId: e,
                        rpcMethods: [a],
                        chainId: t.chainId
                    }, this.isValidContractData(t.request.params) && {
                        contractAddresses: [null == (s = null == (i = t.request.params) ? void 0 : i[0]) ? void 0 : s.to]
                    }), o = {
                        txHashes: c
                    }, rm(n, ry(o))
                } catch (e) {
                    this.client.logger.warn("Error getting TVF params", e)
                }
                return {}
            }), rC(this, "isValidContractData", e => {
                var t;
                if (!e) return !1;
                try {
                    let r = e ? .data || (null == (t = e ? .[0]) ? void 0 : t.data);
                    if (!r.startsWith("0x")) return !1;
                    let i = r.slice(2);
                    return !!/^[0-9a-fA-F]*$/.test(i) && i.length % 2 == 0
                } catch {}
                return !1
            }), rC(this, "extractTxHashesFromResult", (e, t) => {
                try {
                    let r = rd[e];
                    if ("string" == typeof t) return [t];
                    let i = t[r.key];
                    if ((0, d.isValidArray)(i)) return "solana_signAllTransactions" === e ? i.map(e => (0, d.extractSolanaTransactionId)(e)) : i;
                    if ("string" == typeof i) return [i]
                } catch (e) {
                    this.client.logger.warn("Error extracting tx hashes from result", e)
                }
                return []
            })
        }
        async processPendingMessageEvents() {
            try {
                let e = this.client.session.keys,
                    t = this.client.core.relayer.messages.getWithoutAck(e);
                for (let [e, r] of Object.entries(t))
                    for (let t of r) try {
                        await this.onProviderMessageEvent({
                            topic: e,
                            message: t,
                            publishedAt: Date.now()
                        })
                    } catch {
                        this.client.logger.warn(`Error processing pending message event for topic: ${e}, message: ${t}`)
                    }
            } catch (e) {
                this.client.logger.warn("processPendingMessageEvents failed", e)
            }
        }
        isInitialized() {
            if (!this.initialized) {
                let {
                    message: e
                } = (0, d.getInternalError)("NOT_INITIALIZED", this.name);
                throw Error(e)
            }
        }
        async confirmOnlineStateOrThrow() {
            await this.client.core.relayer.confirmOnlineStateOrThrow()
        }
        registerRelayerEvents() {
            this.client.core.relayer.on(x, e => {
                this.onProviderMessageEvent(e)
            })
        }
        async onRelayMessage(e) {
            let {
                topic: t,
                message: r,
                attestation: i,
                transportType: s
            } = e, {
                publicKey: n
            } = this.client.auth.authKeys.keys.includes(rg) ? this.client.auth.authKeys.get(rg) : {
                responseTopic: void 0,
                publicKey: void 0
            };
            try {
                let e = await this.client.core.crypto.decode(t, r, {
                    receiverPublicKey: n,
                    encoding: s === U ? d.BASE64URL : d.BASE64
                });
                (0, f.isJsonRpcRequest)(e) ? (this.client.core.history.set(t, e), await this.onRelayEventRequest({
                    topic: t,
                    payload: e,
                    attestation: i,
                    transportType: s,
                    encryptedId: (0, d.hashMessage)(r)
                })) : (0, f.isJsonRpcResponse)(e) ? (await this.client.core.history.resolve(e), await this.onRelayEventResponse({
                    topic: t,
                    payload: e,
                    transportType: s
                }), this.client.core.history.delete(t, e.id)) : await this.onRelayEventUnknownPayload({
                    topic: t,
                    payload: e,
                    transportType: s
                }), await this.client.core.relayer.messages.ack(t, r)
            } catch (e) {
                this.client.logger.error(e)
            }
        }
        registerExpirerEvents() {
            this.client.core.expirer.on(G, async e => {
                let {
                    topic: t,
                    id: r
                } = (0, d.parseExpirerTarget)(e.target);
                return r && this.client.pendingRequest.keys.includes(r) ? await this.deletePendingSessionRequest(r, (0, d.getInternalError)("EXPIRED"), !0) : r && this.client.auth.requests.keys.includes(r) ? await this.deletePendingAuthRequest(r, (0, d.getInternalError)("EXPIRED"), !0) : void(t ? this.client.session.keys.includes(t) && (await this.deleteSession({
                    topic: t,
                    expirerHasDeleted: !0
                }), this.client.events.emit("session_expire", {
                    topic: t
                })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                    id: r
                })))
            })
        }
        registerPairingEvents() {
            this.client.core.pairing.events.on($, e => this.onPairingCreated(e)), this.client.core.pairing.events.on(V, e => {
                this.addToRecentlyDeleted(e.topic, "pairing")
            })
        }
        isValidPairingTopic(e) {
            if (!(0, d.isValidString)(e, !1)) {
                let {
                    message: t
                } = (0, d.getInternalError)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                throw Error(t)
            }
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
                let {
                    message: t
                } = (0, d.getInternalError)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                throw Error(t)
            }
            if ((0, d.isExpired)(this.client.core.pairing.pairings.get(e).expiry)) {
                let {
                    message: t
                } = (0, d.getInternalError)("EXPIRED", `pairing topic: ${e}`);
                throw Error(t)
            }
        }
        async isValidSessionTopic(e) {
            if (!(0, d.isValidString)(e, !1)) {
                let {
                    message: t
                } = (0, d.getInternalError)("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                throw Error(t)
            }
            if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
                let {
                    message: t
                } = (0, d.getInternalError)("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                throw Error(t)
            }
            if ((0, d.isExpired)(this.client.session.get(e).expiry)) {
                await this.deleteSession({
                    topic: e
                });
                let {
                    message: t
                } = (0, d.getInternalError)("EXPIRED", `session topic: ${e}`);
                throw Error(t)
            }
            if (!this.client.core.crypto.keychain.has(e)) {
                let {
                    message: t
                } = (0, d.getInternalError)("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
                throw await this.deleteSession({
                    topic: e
                }), Error(t)
            }
        }
        async isValidSessionOrPairingTopic(e) {
            if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
            else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
            else if ((0, d.isValidString)(e, !1)) {
                let {
                    message: t
                } = (0, d.getInternalError)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                throw Error(t)
            } else {
                let {
                    message: t
                } = (0, d.getInternalError)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                throw Error(t)
            }
        }
        async isValidProposalId(e) {
            if (!(0, d.isValidId)(e)) {
                let {
                    message: t
                } = (0, d.getInternalError)("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                throw Error(t)
            }
            if (!this.client.proposal.keys.includes(e)) {
                let {
                    message: t
                } = (0, d.getInternalError)("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                throw Error(t)
            }
            if ((0, d.isExpired)(this.client.proposal.get(e).expiryTimestamp)) {
                await this.deleteProposal(e);
                let {
                    message: t
                } = (0, d.getInternalError)("EXPIRED", `proposal id: ${e}`);
                throw Error(t)
            }
        }
    }
    class rx extends tR {
        constructor(e, t) {
            super(e, t, "proposal", ri), this.core = e, this.logger = t
        }
    }
    class rA extends tR {
        constructor(e, t) {
            super(e, t, "session", ri), this.core = e, this.logger = t
        }
    }
    class rN extends tR {
        constructor(e, t) {
            super(e, t, "request", ri, e => e.id), this.core = e, this.logger = t
        }
    }
    class r_ extends tR {
        constructor(e, t) {
            super(e, t, "authKeys", rp, () => rg), this.core = e, this.logger = t
        }
    }
    class rT extends tR {
        constructor(e, t) {
            super(e, t, "pairingTopics", rp), this.core = e, this.logger = t
        }
    }
    class rk extends tR {
        constructor(e, t) {
            super(e, t, "requests", rp, e => e.id), this.core = e, this.logger = t
        }
    }
    var rP = Object.defineProperty,
        rO = (e, t, r) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? rP(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[i] = r
        };
    class rR {
        constructor(e, t) {
            this.core = e, this.logger = t, rO(this, "authKeys"), rO(this, "pairingTopics"), rO(this, "requests"), this.authKeys = new r_(this.core, this.logger), this.pairingTopics = new rT(this.core, this.logger), this.requests = new rk(this.core, this.logger)
        }
        async init() {
            await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init()
        }
    }
    var rU = Object.defineProperty,
        rD = (e, t, r) => {
            let i;
            return (i = "symbol" != typeof t ? t + "" : t) in e ? rU(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[i] = r
        };
    class rL extends rt.ISignClient {
        constructor(e) {
            super(e), rD(this, "protocol", "wc"), rD(this, "version", 2), rD(this, "name", rr), rD(this, "metadata"), rD(this, "core"), rD(this, "logger"), rD(this, "events", new r.EventEmitter), rD(this, "engine"), rD(this, "session"), rD(this, "proposal"), rD(this, "pendingRequest"), rD(this, "auth"), rD(this, "signConfig"), rD(this, "on", (e, t) => this.events.on(e, t)), rD(this, "once", (e, t) => this.events.once(e, t)), rD(this, "off", (e, t) => this.events.off(e, t)), rD(this, "removeListener", (e, t) => this.events.removeListener(e, t)), rD(this, "removeAllListeners", e => this.events.removeAllListeners(e)), rD(this, "connect", async e => {
                try {
                    return await this.engine.connect(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "pair", async e => {
                try {
                    return await this.engine.pair(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "approve", async e => {
                try {
                    return await this.engine.approve(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "reject", async e => {
                try {
                    return await this.engine.reject(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "update", async e => {
                try {
                    return await this.engine.update(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "extend", async e => {
                try {
                    return await this.engine.extend(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "request", async e => {
                try {
                    return await this.engine.request(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "respond", async e => {
                try {
                    return await this.engine.respond(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "ping", async e => {
                try {
                    return await this.engine.ping(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "emit", async e => {
                try {
                    return await this.engine.emit(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "disconnect", async e => {
                try {
                    return await this.engine.disconnect(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "find", e => {
                try {
                    return this.engine.find(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "getPendingSessionRequests", () => {
                try {
                    return this.engine.getPendingSessionRequests()
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "authenticate", async (e, t) => {
                try {
                    return await this.engine.authenticate(e, t)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "formatAuthMessage", e => {
                try {
                    return this.engine.formatAuthMessage(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "approveSessionAuthenticate", async e => {
                try {
                    return await this.engine.approveSessionAuthenticate(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), rD(this, "rejectSessionAuthenticate", async e => {
                try {
                    return await this.engine.rejectSessionAuthenticate(e)
                } catch (e) {
                    throw this.logger.error(e.message), e
                }
            }), this.name = e ? .name || rr, this.metadata = e ? .metadata || (0, d.getAppMetadata)(), this.signConfig = e ? .signConfig;
            const t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, o.pino)((0, n.getDefaultLoggerOptions)({
                level: e ? .logger || "error"
            }));
            this.core = e ? .core || new re(e), this.logger = (0, n.generateChildLogger)(t, this.name), this.session = new rA(this.core, this.logger), this.proposal = new rx(this.core, this.logger), this.pendingRequest = new rN(this.core, this.logger), this.engine = new rS(this), this.auth = new rR(this.core, this.logger)
        }
        static async init(e) {
            let t = new rL(e);
            return await t.initialize(), t
        }
        get context() {
            return (0, n.getLoggerContext)(this.logger)
        }
        get pairing() {
            return this.core.pairing.pairings
        }
        async initialize() {
            this.logger.trace("Initialized");
            try {
                await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), setTimeout(() => {
                    this.engine.processRelayMessageCache()
                }, (0, c.toMiliseconds)(c.ONE_SECOND))
            } catch (e) {
                throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
            }
        }
    }
    e.i(383332), Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, e.s([], 469550);
    var rM = e.i(350461);
    void 0 !== rM.default && void 0 !== rM.default.env && rM.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL, void 0 !== rM.default && void 0 !== rM.default.env && rM.default.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL, void 0 !== rM.default && void 0 !== rM.default.env && rM.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION, e.s(["W3mFrameRpcConstants", 0, {
        SAFE_RPC_METHODS: ["eth_accounts", "eth_blockNumber", "eth_call", "eth_chainId", "eth_estimateGas", "eth_feeHistory", "eth_gasPrice", "eth_getAccount", "eth_getBalance", "eth_getBlockByHash", "eth_getBlockByNumber", "eth_getBlockReceipts", "eth_getBlockTransactionCountByHash", "eth_getBlockTransactionCountByNumber", "eth_getCode", "eth_getFilterChanges", "eth_getFilterLogs", "eth_getLogs", "eth_getProof", "eth_getStorageAt", "eth_getTransactionByBlockHashAndIndex", "eth_getTransactionByBlockNumberAndIndex", "eth_getTransactionByHash", "eth_getTransactionCount", "eth_getTransactionReceipt", "eth_getUncleCountByBlockHash", "eth_getUncleCountByBlockNumber", "eth_maxPriorityFeePerGas", "eth_newBlockFilter", "eth_newFilter", "eth_newPendingTransactionFilter", "eth_sendRawTransaction", "eth_syncing", "eth_uninstallFilter", "wallet_getCapabilities", "wallet_getCallsStatus", "eth_getUserOperationReceipt", "eth_estimateUserOperationGas", "eth_getUserOperationByHash", "eth_supportedEntryPoints", "wallet_getAssets"],
        NOT_SAFE_RPC_METHODS: ["personal_sign", "eth_signTypedData_v4", "eth_sendTransaction", "solana_signMessage", "solana_signTransaction", "solana_signAllTransactions", "solana_signAndSendTransaction", "wallet_sendCalls", "wallet_grantPermissions", "wallet_revokePermissions", "eth_sendUserOperation"],
        GET_CHAIN_ID: "eth_chainId",
        RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
        RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
        ACCOUNT_TYPES: {
            EOA: "eoa",
            SMART_ACCOUNT: "smartAccount"
        }
    }], 93024)
}, 921822, e => {
    "use strict";
    var t = e.i(934522),
        r = e.i(405163),
        i = e.i(425609);
    let s = Object.freeze({
            message: "",
            variant: "success",
            svg: void 0,
            open: !1,
            autoClose: !0
        }),
        n = (0, t.proxy)({ ...s
        });
    e.s(["SnackController", 0, {
        state: n,
        subscribeKey: (e, t) => (0, r.subscribeKey)(n, e, t),
        showLoading(e, t = {}) {
            this._showMessage({
                message: e,
                variant: "loading",
                ...t
            })
        },
        showSuccess(e) {
            this._showMessage({
                message: e,
                variant: "success"
            })
        },
        showSvg(e, t) {
            this._showMessage({
                message: e,
                svg: t
            })
        },
        showError(e) {
            let t = i.CoreHelperUtil.parseError(e);
            this._showMessage({
                message: t,
                variant: "error"
            })
        },
        hide() {
            n.message = s.message, n.variant = s.variant, n.svg = s.svg, n.open = s.open, n.autoClose = s.autoClose
        },
        _showMessage({
            message: e,
            svg: t,
            variant: r = "success",
            autoClose: i = s.autoClose
        }) {
            n.open ? (n.open = !1, setTimeout(() => {
                n.message = e, n.variant = r, n.svg = t, n.open = !0, n.autoClose = i
            }, 150)) : (n.message = e, n.variant = r, n.svg = t, n.open = !0, n.autoClose = i)
        }
    }])
}, 947366, 179281, 591516, 389855, 982109, 424756, 19469, 260687, e => {
    "use strict";
    let t;
    e.s(["ChainController", () => er], 947366);
    var r = e.i(934522),
        i = e.i(405163),
        s = e.i(970422),
        n = e.i(38371);
    e.s(["ConnectorController", () => O], 260687);
    var o = e.i(440268),
        a = e.i(633147),
        c = e.i(609294),
        l = e.i(439522),
        h = e.i(906349);
    e.s(["RouterController", () => N], 424756);
    var d = e.i(123214);
    e.s(["ModalController", () => x], 982109);
    var u = e.i(425609);
    e.s(["ConnectionController", () => E], 591516), e.s(["SIWXUtil", () => m], 179281), e.i(469550);
    var p = e.i(93024),
        g = e.i(405784),
        f = e.i(921822);
    let m = {
        getSIWX: () => h.OptionsController.state.siwx,
        async initializeIfEnabled() {
            let e = h.OptionsController.state.siwx,
                t = er.getActiveCaipAddress();
            if (!(e && t)) return;
            let [r, i, s] = t.split(":");
            if (er.checkIfSupportedNetwork(r)) try {
                if ((await e.getSessions(`${r}:${i}`, s)).length) return;
                await x.open({
                    view: "SIWXSignMessage"
                })
            } catch (e) {
                console.error("SIWXUtil:initializeIfEnabled", e), g.EventsController.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_ERROR",
                    properties: this.getSIWXEventProperties()
                }), await E._getClient() ? .disconnect().catch(console.error), N.reset("Connect"), f.SnackController.showError("A problem occurred while trying initialize authentication")
            }
        },
        async requestSignMessage() {
            let e = h.OptionsController.state.siwx,
                t = u.CoreHelperUtil.getPlainAddress(er.getActiveCaipAddress()),
                r = er.getActiveCaipNetwork(),
                i = E._getClient();
            if (!e) throw Error("SIWX is not enabled");
            if (!t) throw Error("No ActiveCaipAddress found");
            if (!r) throw Error("No ActiveCaipNetwork or client found");
            if (!i) throw Error("No ConnectionController client found");
            try {
                let n = await e.createMessage({
                        chainId: r.caipNetworkId,
                        accountAddress: t
                    }),
                    o = n.toString();
                O.getConnectorId(r.chainNamespace) === s.ConstantsUtil.CONNECTOR_ID.AUTH && N.pushTransactionStack({
                    view: null,
                    goBack: !1,
                    replace: !0
                });
                let a = await i.signMessage(o);
                await e.addSession({
                    data: n,
                    message: o,
                    signature: a
                }), x.close(), g.EventsController.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_SUCCESS",
                    properties: this.getSIWXEventProperties()
                })
            } catch (t) {
                let e = this.getSIWXEventProperties();
                x.state.open && "ApproveTransaction" !== N.state.view || await x.open({
                    view: "SIWXSignMessage"
                }), e.isSmartAccount ? f.SnackController.showError("This application might not support Smart Accounts") : f.SnackController.showError("Signature declined"), g.EventsController.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_ERROR",
                    properties: e
                }), console.error("SWIXUtil:requestSignMessage", t)
            }
        },
        async cancelSignMessage() {
            try {
                let e = this.getSIWX();
                e ? .getRequired ? .() ? await E.disconnect() : x.close(), N.reset("Connect"), g.EventsController.sendEvent({
                    event: "CLICK_CANCEL_SIWX",
                    type: "track",
                    properties: this.getSIWXEventProperties()
                })
            } catch (e) {
                console.error("SIWXUtil:cancelSignMessage", e)
            }
        },
        async getSessions() {
            let e = h.OptionsController.state.siwx,
                t = u.CoreHelperUtil.getPlainAddress(er.getActiveCaipAddress()),
                r = er.getActiveCaipNetwork();
            return e && t && r ? e.getSessions(r.caipNetworkId, t) : []
        },
        async isSIWXCloseDisabled() {
            let e = this.getSIWX();
            if (e) {
                let t = "ApproveTransaction" === N.state.view,
                    r = "SIWXSignMessage" === N.state.view;
                if (t || r) return e.getRequired ? .() && 0 === (await this.getSessions()).length
            }
            return !1
        },
        async universalProviderAuthenticate({
            universalProvider: e,
            chains: t,
            methods: r
        }) {
            let i = m.getSIWX(),
                s = new Set(t.map(e => e.split(":")[0]));
            if (!i || 1 !== s.size || !s.has("eip155")) return !1;
            let n = await i.createMessage({
                    chainId: er.getActiveCaipNetwork() ? .caipNetworkId || "",
                    accountAddress: ""
                }),
                o = await e.authenticate({
                    nonce: n.nonce,
                    domain: n.domain,
                    uri: n.uri,
                    exp: n.expirationTime,
                    iat: n.issuedAt,
                    nbf: n.notBefore,
                    requestId: n.requestId,
                    version: n.version,
                    resources: n.resources,
                    statement: n.statement,
                    chainId: n.chainId,
                    methods: r,
                    chains: [n.chainId, ...t.filter(e => e !== n.chainId)]
                });
            if (f.SnackController.showLoading("Authenticating...", {
                    autoClose: !1
                }), d.AccountController.setConnectedWalletInfo({ ...o.session.peer.metadata,
                    name: o.session.peer.metadata.name,
                    icon: o.session.peer.metadata.icons ? .[0],
                    type: "WALLET_CONNECT"
                }, Array.from(s)[0]), o ? .auths ? .length) {
                let t = o.auths.map(t => {
                    let r = e.client.formatAuthMessage({
                        request: t.p,
                        iss: t.p.iss
                    });
                    return {
                        data: { ...t.p,
                            accountAddress: t.p.iss.split(":").slice(-1).join(""),
                            chainId: t.p.iss.split(":").slice(2, 4).join(":"),
                            uri: t.p.aud,
                            version: t.p.version || n.version,
                            expirationTime: t.p.exp,
                            issuedAt: t.p.iat,
                            notBefore: t.p.nbf
                        },
                        message: r,
                        signature: t.s.s,
                        cacao: t
                    }
                });
                try {
                    await i.setSessions(t), g.EventsController.sendEvent({
                        type: "track",
                        event: "SIWX_AUTH_SUCCESS",
                        properties: m.getSIWXEventProperties()
                    })
                } catch (t) {
                    throw console.error("SIWX:universalProviderAuth - failed to set sessions", t), g.EventsController.sendEvent({
                        type: "track",
                        event: "SIWX_AUTH_ERROR",
                        properties: m.getSIWXEventProperties()
                    }), await e.disconnect().catch(console.error), t
                } finally {
                    f.SnackController.hide()
                }
            }
            return !0
        },
        getSIWXEventProperties: () => ({
            network: er.state.activeCaipNetwork ? .caipNetworkId || "",
            isSmartAccount: d.AccountController.state.preferredAccountType === p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }),
        async clearSessions() {
            let e = this.getSIWX();
            e && await e.setSessions([])
        }
    };
    var y = e.i(862087);
    let w = (0, r.proxy)({
            transactions: [],
            coinbaseTransactions: {},
            transactionsByYear: {},
            lastNetworkInView: void 0,
            loading: !1,
            empty: !1,
            next: void 0
        }),
        b = {
            state: w,
            subscribe: e => (0, r.subscribe)(w, () => e(w)),
            setLastNetworkInView(e) {
                w.lastNetworkInView = e
            },
            async fetchTransactions(e, t) {
                if (!e) throw Error("Transactions can't be fetched without an accountAddress");
                w.loading = !0;
                try {
                    let r = await y.BlockchainApiController.fetchTransactions({
                            account: e,
                            cursor: w.next,
                            onramp: t,
                            cache: "coinbase" === t ? "no-cache" : void 0,
                            chainId: er.state.activeCaipNetwork ? .caipNetworkId
                        }),
                        i = this.filterSpamTransactions(r.data),
                        s = this.filterByConnectedChain(i),
                        n = [...w.transactions, ...s];
                    w.loading = !1, "coinbase" === t ? w.coinbaseTransactions = this.groupTransactionsByYearAndMonth(w.coinbaseTransactions, r.data) : (w.transactions = n, w.transactionsByYear = this.groupTransactionsByYearAndMonth(w.transactionsByYear, s)), w.empty = 0 === n.length, w.next = r.next ? r.next : void 0
                } catch (t) {
                    g.EventsController.sendEvent({
                        type: "track",
                        event: "ERROR_FETCH_TRANSACTIONS",
                        properties: {
                            address: e,
                            projectId: h.OptionsController.state.projectId,
                            cursor: w.next,
                            isSmartAccount: d.AccountController.state.preferredAccountType === p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
                        }
                    }), f.SnackController.showError("Failed to fetch transactions"), w.loading = !1, w.empty = !0, w.next = void 0
                }
            },
            groupTransactionsByYearAndMonth: (e = {}, t = []) => (t.forEach(t => {
                let r = new Date(t.metadata.minedAt).getFullYear(),
                    i = new Date(t.metadata.minedAt).getMonth(),
                    s = e[r] ? ? {},
                    n = (s[i] ? ? []).filter(e => e.id !== t.id);
                e[r] = { ...s,
                    [i]: [...n, t].sort((e, t) => new Date(t.metadata.minedAt).getTime() - new Date(e.metadata.minedAt).getTime())
                }
            }), e),
            filterSpamTransactions: e => e.filter(e => !e.transfers.every(e => e.nft_info ? .flags.is_spam === !0)),
            filterByConnectedChain(e) {
                let t = er.state.activeCaipNetwork ? .caipNetworkId;
                return e.filter(e => e.metadata.chain === t)
            },
            clearCursor() {
                w.next = void 0
            },
            resetTransactions() {
                w.transactions = [], w.transactionsByYear = {}, w.lastNetworkInView = void 0, w.loading = !1, w.empty = !1, w.next = void 0
            }
        },
        v = (0, r.proxy)({
            wcError: !1,
            buffering: !1,
            status: "disconnected"
        }),
        E = {
            state: v,
            subscribeKey: (e, t) => (0, i.subscribeKey)(v, e, t),
            _getClient: () => v._client,
            setClient(e) {
                v._client = (0, r.ref)(e)
            },
            async connectWalletConnect() {
                if (u.CoreHelperUtil.isTelegram() || u.CoreHelperUtil.isSafari() && u.CoreHelperUtil.isIos()) {
                    if (t) {
                        await t, t = void 0;
                        return
                    }
                    if (!u.CoreHelperUtil.isPairingExpired(v ? .wcPairingExpiry)) {
                        let e = v.wcUri;
                        v.wcUri = e;
                        return
                    }
                    t = this._getClient() ? .connectWalletConnect ? .().catch(() => void 0), this.state.status = "connecting", await t, t = void 0, v.wcPairingExpiry = void 0, this.state.status = "connected"
                } else await this._getClient() ? .connectWalletConnect ? .()
            },
            async connectExternal(e, t, r = !0) {
                await this._getClient() ? .connectExternal ? .(e), r && er.setActiveNamespace(t)
            },
            async reconnectExternal(e) {
                await this._getClient() ? .reconnectExternal ? .(e);
                let t = e.chain || er.state.activeChain;
                t && O.setConnectorId(e.id, t)
            },
            async setPreferredAccountType(e) {
                x.setLoading(!0, er.state.activeChain);
                let t = O.getAuthConnector();
                t && (await t ? .provider.setPreferredAccount(e), await this.reconnectExternal(t), x.setLoading(!1, er.state.activeChain), g.EventsController.sendEvent({
                    type: "track",
                    event: "SET_PREFERRED_ACCOUNT_TYPE",
                    properties: {
                        accountType: e,
                        network: er.state.activeCaipNetwork ? .caipNetworkId || ""
                    }
                }))
            },
            async signMessage(e) {
                return this._getClient() ? .signMessage(e)
            },
            parseUnits(e, t) {
                return this._getClient() ? .parseUnits(e, t)
            },
            formatUnits(e, t) {
                return this._getClient() ? .formatUnits(e, t)
            },
            async sendTransaction(e) {
                return this._getClient() ? .sendTransaction(e)
            },
            async getCapabilities(e) {
                return this._getClient() ? .getCapabilities(e)
            },
            async grantPermissions(e) {
                return this._getClient() ? .grantPermissions(e)
            },
            async walletGetAssets(e) {
                return this._getClient() ? .walletGetAssets(e) ? ? {}
            },
            async estimateGas(e) {
                return this._getClient() ? .estimateGas(e)
            },
            async writeContract(e) {
                return this._getClient() ? .writeContract(e)
            },
            async getEnsAddress(e) {
                return this._getClient() ? .getEnsAddress(e)
            },
            async getEnsAvatar(e) {
                return this._getClient() ? .getEnsAvatar(e)
            },
            checkInstalled(e) {
                return this._getClient() ? .checkInstalled ? .(e) || !1
            },
            resetWcConnection() {
                v.wcUri = void 0, v.wcPairingExpiry = void 0, v.wcLinking = void 0, v.recentWallet = void 0, v.status = "disconnected", b.resetTransactions(), c.StorageUtil.deleteWalletConnectDeepLink()
            },
            resetUri() {
                v.wcUri = void 0, v.wcPairingExpiry = void 0
            },
            finalizeWcConnection() {
                let {
                    wcLinking: e,
                    recentWallet: t
                } = E.state;
                e && c.StorageUtil.setWalletConnectDeepLink(e), t && c.StorageUtil.setAppKitRecent(t), g.EventsController.sendEvent({
                    type: "track",
                    event: "CONNECT_SUCCESS",
                    properties: {
                        method: e ? "mobile" : "qrcode",
                        name: N.state.data ? .wallet ? .name || "Unknown"
                    }
                })
            },
            setWcBasic(e) {
                v.wcBasic = e
            },
            setUri(e) {
                v.wcUri = e, v.wcPairingExpiry = u.CoreHelperUtil.getPairingExpiry()
            },
            setWcLinking(e) {
                v.wcLinking = e
            },
            setWcError(e) {
                v.wcError = e, v.buffering = !1
            },
            setRecentWallet(e) {
                v.recentWallet = e
            },
            setBuffering(e) {
                v.buffering = e
            },
            setStatus(e) {
                v.status = e
            },
            async disconnect(e) {
                try {
                    x.setLoading(!0, e), await m.clearSessions(), await er.disconnect(e), x.setLoading(!1, e), O.setFilterByNamespace(void 0)
                } catch (e) {
                    throw Error("Failed to disconnect")
                }
            }
        },
        I = (0, r.proxy)({
            loading: !1,
            open: !1,
            selectedNetworkId: void 0,
            activeChain: void 0,
            initialized: !1
        }),
        C = {
            state: I,
            subscribe: e => (0, r.subscribe)(I, () => e(I)),
            set(e) {
                Object.assign(I, { ...I,
                    ...e
                })
            }
        };
    e.s(["PublicStateController", 0, C], 389855);
    let S = (0, r.proxy)({
            loading: !1,
            loadingNamespaceMap: new Map,
            open: !1,
            shake: !1,
            namespace: void 0
        }),
        x = {
            state: S,
            subscribe: e => (0, r.subscribe)(S, () => e(S)),
            subscribeKey: (e, t) => (0, i.subscribeKey)(S, e, t),
            async open(e) {
                let t = "connected" === d.AccountController.state.status;
                E.state.wcBasic ? l.ApiController.prefetch({
                    fetchNetworkImages: !1,
                    fetchConnectorImages: !1
                }) : await l.ApiController.prefetch({
                    fetchConnectorImages: !t,
                    fetchFeaturedWallets: !t,
                    fetchRecommendedWallets: !t
                }), e ? .namespace ? (await er.switchActiveNamespace(e.namespace), x.setLoading(!0, e.namespace)) : x.setLoading(!0), O.setFilterByNamespace(e ? .namespace);
                let r = er.getAccountData(e ? .namespace) ? .caipAddress;
                er.state.noAdapters && !r ? u.CoreHelperUtil.isMobile() ? N.reset("AllWallets") : N.reset("ConnectingWalletConnectBasic") : e ? .view ? N.reset(e.view) : r ? N.reset("Account") : N.reset("Connect"), S.open = !0, C.set({
                    open: !0
                }), g.EventsController.sendEvent({
                    type: "track",
                    event: "MODAL_OPEN",
                    properties: {
                        connected: !!r
                    }
                })
            },
            close() {
                let e = h.OptionsController.state.enableEmbedded,
                    t = !!er.state.activeCaipAddress;
                S.open && g.EventsController.sendEvent({
                    type: "track",
                    event: "MODAL_CLOSE",
                    properties: {
                        connected: t
                    }
                }), S.open = !1, x.clearLoading(), e ? t ? N.replace("Account") : N.push("Connect") : C.set({
                    open: !1
                }), E.resetUri()
            },
            setLoading(e, t) {
                t && S.loadingNamespaceMap.set(t, e), S.loading = e, C.set({
                    loading: e
                })
            },
            clearLoading() {
                S.loadingNamespaceMap.clear(), S.loading = !1
            },
            shake() {
                S.shake || (S.shake = !0, setTimeout(() => {
                    S.shake = !1
                }, 500))
            }
        },
        A = (0, r.proxy)({
            view: "Connect",
            history: ["Connect"],
            transactionStack: []
        }),
        N = {
            state: A,
            subscribeKey: (e, t) => (0, i.subscribeKey)(A, e, t),
            pushTransactionStack(e) {
                A.transactionStack.push(e)
            },
            popTransactionStack(e) {
                let t = A.transactionStack.pop();
                if (t)
                    if (e) this.goBack(), t ? .onCancel ? .();
                    else {
                        if (t.goBack) this.goBack();
                        else if (t.replace) {
                            let e = A.history.indexOf("ConnectingSiwe");
                            e > 0 ? this.goBackToIndex(e - 1) : (x.close(), A.history = [])
                        } else t.view && this.reset(t.view);
                        t ? .onSuccess ? .()
                    }
            },
            push(e, t) {
                e !== A.view && (A.view = e, A.history.push(e), A.data = t)
            },
            reset(e, t) {
                A.view = e, A.history = [e], A.data = t
            },
            replace(e, t) {
                A.history.at(-1) !== e && (A.view = e, A.history[A.history.length - 1] = e, A.data = t)
            },
            goBack() {
                let e = !er.state.activeCaipAddress && "ConnectingFarcaster" === this.state.view;
                if (A.history.length > 1 && !A.history.includes("UnsupportedChain")) {
                    A.history.pop();
                    let [e] = A.history.slice(-1);
                    e && (A.view = e)
                } else x.close();
                A.data ? .wallet && (A.data.wallet = void 0), setTimeout(() => {
                    if (e) {
                        d.AccountController.setFarcasterUrl(void 0, er.state.activeChain);
                        let e = O.getAuthConnector();
                        e ? .provider ? .reload();
                        let t = (0, r.snapshot)(h.OptionsController.state);
                        e ? .provider ? .syncDappData ? .({
                            metadata: t.metadata,
                            sdkVersion: t.sdkVersion,
                            projectId: t.projectId,
                            sdkType: t.sdkType
                        })
                    }
                }, 100)
            },
            goBackToIndex(e) {
                if (A.history.length > 1) {
                    A.history = A.history.slice(0, e + 1);
                    let [t] = A.history.slice(-1);
                    t && (A.view = t)
                }
            }
        };
    e.s(["ThemeController", () => T], 19469);
    let _ = (0, r.proxy)({
            themeMode: "dark",
            themeVariables: {},
            w3mThemeVariables: void 0
        }),
        T = {
            state: _,
            subscribe: e => (0, r.subscribe)(_, () => e(_)),
            setThemeMode(e) {
                _.themeMode = e;
                try {
                    let t = O.getAuthConnector();
                    if (t) {
                        let r = T.getSnapshot().themeVariables;
                        t.provider.syncTheme({
                            themeMode: e,
                            themeVariables: r,
                            w3mThemeVariables: (0, o.getW3mThemeVariables)(r, e)
                        })
                    }
                } catch {
                    console.info("Unable to sync theme to auth connector")
                }
            },
            setThemeVariables(e) {
                _.themeVariables = { ..._.themeVariables,
                    ...e
                };
                try {
                    let e = O.getAuthConnector();
                    if (e) {
                        let t = T.getSnapshot().themeVariables;
                        e.provider.syncTheme({
                            themeVariables: t,
                            w3mThemeVariables: (0, o.getW3mThemeVariables)(_.themeVariables, _.themeMode)
                        })
                    }
                } catch {
                    console.info("Unable to sync theme to auth connector")
                }
            },
            getSnapshot: () => (0, r.snapshot)(_)
        },
        k = {
            eip155: void 0,
            solana: void 0,
            polkadot: void 0,
            bip122: void 0
        },
        P = (0, r.proxy)({
            allConnectors: [],
            connectors: [],
            activeConnector: void 0,
            filterByNamespace: void 0,
            activeConnectorIds: { ...k
            }
        }),
        O = {
            state: P,
            subscribe: e => (0, r.subscribe)(P, () => {
                e(P)
            }),
            subscribeKey: (e, t) => (0, i.subscribeKey)(P, e, t),
            initialize(e) {
                e.forEach(e => {
                    let t = c.StorageUtil.getConnectedConnectorId(e);
                    t && this.setConnectorId(t, e)
                })
            },
            setActiveConnector(e) {
                e && (P.activeConnector = (0, r.ref)(e))
            },
            setConnectors(e) {
                e.filter(e => !P.allConnectors.some(t => t.id === e.id && this.getConnectorName(t.name) === this.getConnectorName(e.name) && t.chain === e.chain)).forEach(e => {
                    "MULTI_CHAIN" !== e.type && P.allConnectors.push((0, r.ref)(e))
                }), P.connectors = this.mergeMultiChainConnectors(P.allConnectors)
            },
            removeAdapter(e) {
                P.allConnectors = P.allConnectors.filter(t => t.chain !== e), P.connectors = this.mergeMultiChainConnectors(P.allConnectors)
            },
            mergeMultiChainConnectors(e) {
                let t = this.generateConnectorMapByName(e),
                    r = [];
                return t.forEach(e => {
                    let t = e[0],
                        i = t ? .id === s.ConstantsUtil.CONNECTOR_ID.AUTH;
                    e.length > 1 && t ? r.push({
                        name: t.name,
                        imageUrl: t.imageUrl,
                        imageId: t.imageId,
                        connectors: [...e],
                        type: i ? "AUTH" : "MULTI_CHAIN",
                        chain: "eip155",
                        id: t ? .id || ""
                    }) : t && r.push(t)
                }), r
            },
            generateConnectorMapByName(e) {
                let t = new Map;
                return e.forEach(e => {
                    let {
                        name: r
                    } = e, i = this.getConnectorName(r);
                    if (!i) return;
                    let s = t.get(i) || [];
                    s.find(t => t.chain === e.chain) || s.push(e), t.set(i, s)
                }), t
            },
            getConnectorName: e => e && ({
                "Trust Wallet": "Trust"
            })[e] || e,
            getUniqueConnectorsByName(e) {
                let t = [];
                return e.forEach(e => {
                    t.find(t => t.chain === e.chain) || t.push(e)
                }), t
            },
            addConnector(e) {
                if (e.id === s.ConstantsUtil.CONNECTOR_ID.AUTH) {
                    let t = (0, r.snapshot)(h.OptionsController.state),
                        i = T.getSnapshot().themeMode,
                        s = T.getSnapshot().themeVariables;
                    e ? .provider ? .syncDappData ? .({
                        metadata: t.metadata,
                        sdkVersion: t.sdkVersion,
                        projectId: t.projectId,
                        sdkType: t.sdkType
                    }), e ? .provider ? .syncTheme({
                        themeMode: i,
                        themeVariables: s,
                        w3mThemeVariables: (0, o.getW3mThemeVariables)(s, i)
                    }), this.setConnectors([e])
                } else this.setConnectors([e])
            },
            getAuthConnector(e) {
                let t = e || er.state.activeChain,
                    r = P.connectors.find(e => e.id === s.ConstantsUtil.CONNECTOR_ID.AUTH);
                if (r) return r ? .connectors ? .length ? r.connectors.find(e => e.chain === t) : r
            },
            getAnnouncedConnectorRdns: () => P.connectors.filter(e => "ANNOUNCED" === e.type).map(e => e.info ? .rdns),
            getConnectorById: e => P.allConnectors.find(t => t.id === e),
            getConnector: (e, t) => P.allConnectors.filter(e => e.chain === er.state.activeChain).find(r => r.explorerId === e || r.info ? .rdns === t),
            syncIfAuthConnector(e) {
                if ("ID_AUTH" !== e.id) return;
                let t = (0, r.snapshot)(h.OptionsController.state),
                    i = T.getSnapshot().themeMode,
                    s = T.getSnapshot().themeVariables;
                e ? .provider ? .syncDappData ? .({
                    metadata: t.metadata,
                    sdkVersion: t.sdkVersion,
                    sdkType: t.sdkType,
                    projectId: t.projectId
                }), e.provider.syncTheme({
                    themeMode: i,
                    themeVariables: s,
                    w3mThemeVariables: (0, o.getW3mThemeVariables)(s, i)
                })
            },
            getConnectorsByNamespace(e) {
                let t = P.allConnectors.filter(t => t.chain === e);
                return this.mergeMultiChainConnectors(t)
            },
            selectWalletConnector(e) {
                let t = O.getConnector(e.id, e.rdns);
                er.state.activeChain === s.ConstantsUtil.CHAIN.SOLANA && a.MobileWalletUtil.handleSolanaDeeplinkRedirect(t ? .name || e.name || ""), t ? N.push("ConnectingExternal", {
                    connector: t
                }) : N.push("ConnectingWalletConnect", {
                    wallet: e
                })
            },
            getConnectors(e) {
                return e ? this.getConnectorsByNamespace(e) : this.mergeMultiChainConnectors(P.allConnectors)
            },
            setFilterByNamespace(e) {
                P.filterByNamespace = e, P.connectors = this.getConnectors(e), l.ApiController.setFilterByNamespace(e)
            },
            setConnectorId(e, t) {
                e && (P.activeConnectorIds = { ...P.activeConnectorIds,
                    [t]: e
                }, c.StorageUtil.setConnectedConnectorId(t, e))
            },
            removeConnectorId(e) {
                P.activeConnectorIds = { ...P.activeConnectorIds,
                    [e]: void 0
                }, c.StorageUtil.deleteConnectedConnectorId(e)
            },
            getConnectorId(e) {
                if (e) return P.activeConnectorIds[e]
            },
            isConnected: e => e ? !!P.activeConnectorIds[e] : Object.values(P.activeConnectorIds).some(e => !!e),
            resetConnectorIds() {
                P.activeConnectorIds = { ...k
                }
            }
        };

    function R(e, t) {
        return O.getConnectorId(e) === t
    }
    var U = e.i(409546),
        D = "[big.js] ",
        L = D + "Invalid ",
        M = L + "decimal places",
        B = L + "rounding mode",
        q = D + "Division by zero",
        j = {},
        $ = void 0,
        V = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

    function z(e, t, r, i) {
        var s = e.c;
        if (r === $ && (r = e.constructor.RM), 0 !== r && 1 !== r && 2 !== r && 3 !== r) throw Error(B);
        if (t < 1) i = 3 === r && (i || !!s[0]) || 0 === t && (1 === r && s[0] >= 5 || 2 === r && (s[0] > 5 || 5 === s[0] && (i || s[1] !== $))), s.length = 1, i ? (e.e = e.e - t + 1, s[0] = 1) : s[0] = e.e = 0;
        else if (t < s.length) {
            if (i = 1 === r && s[t] >= 5 || 2 === r && (s[t] > 5 || 5 === s[t] && (i || s[t + 1] !== $ || 1 & s[t - 1])) || 3 === r && (i || !!s[0]), s.length = t, i) {
                for (; ++s[--t] > 9;)
                    if (s[t] = 0, 0 === t) {
                        ++e.e, s.unshift(1);
                        break
                    }
            }
            for (t = s.length; !s[--t];) s.pop()
        }
        return e
    }

    function F(e, t, r) {
        var i = e.e,
            s = e.c.join(""),
            n = s.length;
        if (t) s = s.charAt(0) + (n > 1 ? "." + s.slice(1) : "") + (i < 0 ? "e" : "e+") + i;
        else if (i < 0) {
            for (; ++i;) s = "0" + s;
            s = "0." + s
        } else if (i > 0)
            if (++i > n)
                for (i -= n; i--;) s += "0";
            else i < n && (s = s.slice(0, i) + "." + s.slice(i));
        else n > 1 && (s = s.charAt(0) + "." + s.slice(1));
        return e.s < 0 && r ? "-" + s : s
    }
    j.abs = function() {
        var e = new this.constructor(this);
        return e.s = 1, e
    }, j.cmp = function(e) {
        var t, r = this.c,
            i = (e = new this.constructor(e)).c,
            s = this.s,
            n = e.s,
            o = this.e,
            a = e.e;
        if (!r[0] || !i[0]) return r[0] ? s : i[0] ? -n : 0;
        if (s != n) return s;
        if (t = s < 0, o != a) return o > a ^ t ? 1 : -1;
        for (s = -1, n = (o = r.length) < (a = i.length) ? o : a; ++s < n;)
            if (r[s] != i[s]) return r[s] > i[s] ^ t ? 1 : -1;
        return o == a ? 0 : o > a ^ t ? 1 : -1
    }, j.div = function(e) {
        var t = this.constructor,
            r = this.c,
            i = (e = new t(e)).c,
            s = this.s == e.s ? 1 : -1,
            n = t.DP;
        if (n !== ~~n || n < 0 || n > 1e6) throw Error(M);
        if (!i[0]) throw Error(q);
        if (!r[0]) return e.s = s, e.c = [e.e = 0], e;
        var o, a, c, l, h, d = i.slice(),
            u = o = i.length,
            p = r.length,
            g = r.slice(0, o),
            f = g.length,
            m = e,
            y = m.c = [],
            w = 0,
            b = n + (m.e = this.e - e.e) + 1;
        for (m.s = s, s = b < 0 ? 0 : b, d.unshift(0); f++ < o;) g.push(0);
        do {
            for (c = 0; c < 10; c++) {
                if (o != (f = g.length)) l = o > f ? 1 : -1;
                else
                    for (h = -1, l = 0; ++h < o;)
                        if (i[h] != g[h]) {
                            l = i[h] > g[h] ? 1 : -1;
                            break
                        } if (l < 0) {
                    for (a = f == o ? i : d; f;) {
                        if (g[--f] < a[f]) {
                            for (h = f; h && !g[--h];) g[h] = 9;
                            --g[h], g[f] += 10
                        }
                        g[f] -= a[f]
                    }
                    for (; !g[0];) g.shift()
                } else break
            }
            y[w++] = l ? c : ++c, g[0] && l ? g[f] = r[u] || 0 : g = [r[u]]
        } while ((u++ < p || g[0] !== $) && s--) return !y[0] && 1 != w && (y.shift(), m.e--, b--), w > b && z(m, b, t.RM, g[0] !== $), m
    }, j.eq = function(e) {
        return 0 === this.cmp(e)
    }, j.gt = function(e) {
        return this.cmp(e) > 0
    }, j.gte = function(e) {
        return this.cmp(e) > -1
    }, j.lt = function(e) {
        return 0 > this.cmp(e)
    }, j.lte = function(e) {
        return 1 > this.cmp(e)
    }, j.minus = j.sub = function(e) {
        var t, r, i, s, n = this.constructor,
            o = this.s,
            a = (e = new n(e)).s;
        if (o != a) return e.s = -a, this.plus(e);
        var c = this.c.slice(),
            l = this.e,
            h = e.c,
            d = e.e;
        if (!c[0] || !h[0]) return h[0] ? e.s = -a : c[0] ? e = new n(this) : e.s = 1, e;
        if (o = l - d) {
            for ((s = o < 0) ? (o = -o, i = c) : (d = l, i = h), i.reverse(), a = o; a--;) i.push(0);
            i.reverse()
        } else
            for (r = ((s = c.length < h.length) ? c : h).length, o = a = 0; a < r; a++)
                if (c[a] != h[a]) {
                    s = c[a] < h[a];
                    break
                } if (s && (i = c, c = h, h = i, e.s = -e.s), (a = (r = h.length) - (t = c.length)) > 0)
            for (; a--;) c[t++] = 0;
        for (a = t; r > o;) {
            if (c[--r] < h[r]) {
                for (t = r; t && !c[--t];) c[t] = 9;
                --c[t], c[r] += 10
            }
            c[r] -= h[r]
        }
        for (; 0 === c[--a];) c.pop();
        for (; 0 === c[0];) c.shift(), --d;
        return c[0] || (e.s = 1, c = [d = 0]), e.c = c, e.e = d, e
    }, j.mod = function(e) {
        var t, r = this,
            i = r.constructor,
            s = r.s,
            n = (e = new i(e)).s;
        if (!e.c[0]) throw Error(q);
        return (r.s = e.s = 1, t = 1 == e.cmp(r), r.s = s, e.s = n, t) ? new i(r) : (s = i.DP, n = i.RM, i.DP = i.RM = 0, r = r.div(e), i.DP = s, i.RM = n, this.minus(r.times(e)))
    }, j.neg = function() {
        var e = new this.constructor(this);
        return e.s = -e.s, e
    }, j.plus = j.add = function(e) {
        var t, r, i, s = this.constructor;
        if (e = new s(e), this.s != e.s) return e.s = -e.s, this.minus(e);
        var n = this.e,
            o = this.c,
            a = e.e,
            c = e.c;
        if (!o[0] || !c[0]) return c[0] || (o[0] ? e = new s(this) : e.s = this.s), e;
        if (o = o.slice(), t = n - a) {
            for (t > 0 ? (a = n, i = c) : (t = -t, i = o), i.reverse(); t--;) i.push(0);
            i.reverse()
        }
        for (o.length - c.length < 0 && (i = c, c = o, o = i), t = c.length, r = 0; t; o[t] %= 10) r = (o[--t] = o[t] + c[t] + r) / 10 | 0;
        for (r && (o.unshift(r), ++a), t = o.length; 0 === o[--t];) o.pop();
        return e.c = o, e.e = a, e
    }, j.pow = function(e) {
        var t = this,
            r = new t.constructor("1"),
            i = r,
            s = e < 0;
        if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(L + "exponent");
        for (s && (e = -e); 1 & e && (i = i.times(t)), e >>= 1;) t = t.times(t);
        return s ? r.div(i) : i
    }, j.prec = function(e, t) {
        if (e !== ~~e || e < 1 || e > 1e6) throw Error(L + "precision");
        return z(new this.constructor(this), e, t)
    }, j.round = function(e, t) {
        if (e === $) e = 0;
        else if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(M);
        return z(new this.constructor(this), e + this.e + 1, t)
    }, j.sqrt = function() {
        var e, t, r, i = this.constructor,
            s = this.s,
            n = this.e,
            o = new i("0.5");
        if (!this.c[0]) return new i(this);
        if (s < 0) throw Error(D + "No square root");
        0 === (s = Math.sqrt(+F(this, !0, !0))) || s === 1 / 0 ? ((t = this.c.join("")).length + n & 1 || (t += "0"), n = ((n + 1) / 2 | 0) - (n < 0 || 1 & n), e = new i(((s = Math.sqrt(t)) == 1 / 0 ? "5e" : (s = s.toExponential()).slice(0, s.indexOf("e") + 1)) + n)) : e = new i(s + ""), n = e.e + (i.DP += 4);
        do r = e, e = o.times(r.plus(this.div(r))); while (r.c.slice(0, n).join("") !== e.c.slice(0, n).join("")) return z(e, (i.DP -= 4) + e.e + 1, i.RM)
    }, j.times = j.mul = function(e) {
        var t, r = this.constructor,
            i = this.c,
            s = (e = new r(e)).c,
            n = i.length,
            o = s.length,
            a = this.e,
            c = e.e;
        if (e.s = this.s == e.s ? 1 : -1, !i[0] || !s[0]) return e.c = [e.e = 0], e;
        for (e.e = a + c, n < o && (t = i, i = s, s = t, c = n, n = o, o = c), t = Array(c = n + o); c--;) t[c] = 0;
        for (a = o; a--;) {
            for (o = 0, c = n + a; c > a;) o = t[c] + s[a] * i[c - a - 1] + o, t[c--] = o % 10, o = o / 10 | 0;
            t[c] = o
        }
        for (o ? ++e.e : t.shift(), a = t.length; !t[--a];) t.pop();
        return e.c = t, e
    }, j.toExponential = function(e, t) {
        var r = this,
            i = r.c[0];
        if (e !== $) {
            if (e !== ~~e || e < 0 || e > 1e6) throw Error(M);
            for (r = z(new r.constructor(r), ++e, t); r.c.length < e;) r.c.push(0)
        }
        return F(r, !0, !!i)
    }, j.toFixed = function(e, t) {
        var r = this,
            i = r.c[0];
        if (e !== $) {
            if (e !== ~~e || e < 0 || e > 1e6) throw Error(M);
            for (r = z(new r.constructor(r), e + r.e + 1, t), e = e + r.e + 1; r.c.length < e;) r.c.push(0)
        }
        return F(r, !1, !!i)
    }, j[Symbol.for("nodejs.util.inspect.custom")] = j.toJSON = j.toString = function() {
        var e = this.constructor;
        return F(this, this.e <= e.NE || this.e >= e.PE, !!this.c[0])
    }, j.toNumber = function() {
        var e = +F(this, !0, !0);
        if (!0 === this.constructor.strict && !this.eq(e.toString())) throw Error(D + "Imprecise conversion");
        return e
    }, j.toPrecision = function(e, t) {
        var r = this,
            i = r.constructor,
            s = r.c[0];
        if (e !== $) {
            if (e !== ~~e || e < 1 || e > 1e6) throw Error(L + "precision");
            for (r = z(new i(r), e, t); r.c.length < e;) r.c.push(0)
        }
        return F(r, e <= r.e || r.e <= i.NE || r.e >= i.PE, !!s)
    }, j.valueOf = function() {
        var e = this.constructor;
        if (!0 === e.strict) throw Error(D + "valueOf disallowed");
        return F(this, this.e <= e.NE || this.e >= e.PE, !0)
    };
    var K = function e() {
        function t(r) {
            if (!(this instanceof t)) return r === $ ? e() : new t(r);
            if (r instanceof t) this.s = r.s, this.e = r.e, this.c = r.c.slice();
            else {
                if ("string" != typeof r) {
                    if (!0 === t.strict && "bigint" != typeof r) throw TypeError(L + "value");
                    r = 0 === r && 1 / r < 0 ? "-0" : String(r)
                }! function(e, t) {
                    var r, i, s;
                    if (!V.test(t)) throw Error(L + "number");
                    for (e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (i = t.search(/e/i)) > 0 ? (r < 0 && (r = i), r += +t.slice(i + 1), t = t.substring(0, i)) : r < 0 && (r = t.length), s = t.length, i = 0; i < s && "0" == t.charAt(i);) ++i;
                    if (i == s) e.c = [e.e = 0];
                    else {
                        for (; s > 0 && "0" == t.charAt(--s););
                        for (e.e = r - i - 1, e.c = [], r = 0; i <= s;) e.c[r++] = +t.charAt(i++)
                    }
                }(this, r)
            }
            this.constructor = t
        }
        return t.prototype = j, t.DP = 20, t.RM = 1, t.NE = -7, t.PE = 21, t.strict = !1, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t
    }();
    let W = {
            bigNumber: e => new K(e ? e : 0),
            multiply(e, t) {
                if (void 0 === e || void 0 === t) return new K(0);
                let r = new K(e),
                    i = new K(t);
                return r.times(i)
            },
            formatNumberToLocalString: (e, t = 2) => void 0 === e ? "0.00" : "number" == typeof e ? e.toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t
            }) : parseFloat(e).toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t
            }),
            parseLocalStringToNumber: e => void 0 === e ? 0 : parseFloat(e.replace(/,/gu, ""))
        },
        H = [{
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [{
                name: "_to",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }],
            outputs: [{
                name: "",
                type: "bool"
            }]
        }, {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [{
                name: "_from",
                type: "address"
            }, {
                name: "_to",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }],
            outputs: [{
                name: "",
                type: "bool"
            }]
        }],
        G = [{
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [{
                name: "recipient",
                type: "address"
            }, {
                name: "amount",
                type: "uint256"
            }],
            outputs: []
        }, {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [{
                name: "sender",
                type: "address"
            }, {
                name: "recipient",
                type: "address"
            }, {
                name: "amount",
                type: "uint256"
            }],
            outputs: [{
                name: "",
                type: "bool"
            }]
        }],
        J = {
            createBalance(e, t) {
                let r = {
                    name: e.metadata.name || "",
                    symbol: e.metadata.symbol || "",
                    decimals: e.metadata.decimals || 0,
                    value: e.metadata.value || 0,
                    price: e.metadata.price || 0,
                    iconUrl: e.metadata.iconUrl || ""
                };
                return {
                    name: r.name,
                    symbol: r.symbol,
                    chainId: t,
                    address: "native" === e.address ? void 0 : this.convertAddressToCAIP10Address(e.address, t),
                    value: r.value,
                    price: r.price,
                    quantity: {
                        decimals: r.decimals.toString(),
                        numeric: this.convertHexToBalance({
                            hex: e.balance,
                            decimals: r.decimals
                        })
                    },
                    iconUrl: r.iconUrl
                }
            },
            convertHexToBalance: ({
                hex: e,
                decimals: t
            }) => (function(e, t) {
                let r = e.toString(),
                    i = r.startsWith("-");
                i && (r = r.slice(1));
                let [s, n] = [(r = r.padStart(t, "0")).slice(0, r.length - t), r.slice(r.length - t)];
                return n = n.replace(/(0+)$/, ""), `${i?"-":""}${s||"0"}${n?`.${n}`:""}`
            })(BigInt(e), t),
            convertAddressToCAIP10Address: (e, t) => `${t}:${e}`,
            createCAIP2ChainId: (e, t) => `${t}:${parseInt(e,16)}`,
            getChainIdHexFromCAIP2ChainId(e) {
                let t = e.split(":");
                if (t.length < 2 || !t[1]) return "0x0";
                let r = parseInt(t[1], 10);
                return isNaN(r) ? "0x0" : `0x${r.toString(16)}`
            },
            isWalletGetAssetsResponse(e) {
                return "object" == typeof e && null !== e && Object.values(e).every(e => Array.isArray(e) && e.every(e => this.isValidAsset(e)))
            },
            isValidAsset: e => "object" == typeof e && null !== e && "string" == typeof e.address && "string" == typeof e.balance && ("ERC20" === e.type || "NATIVE" === e.type) && "object" == typeof e.metadata && null !== e.metadata && "string" == typeof e.metadata.name && "string" == typeof e.metadata.symbol && "number" == typeof e.metadata.decimals && "number" == typeof e.metadata.price && "string" == typeof e.metadata.iconUrl
        },
        Y = {
            async getMyTokensWithBalance(e) {
                let t = d.AccountController.state.address,
                    r = er.state.activeCaipNetwork;
                if (!t || !r) return [];
                if ("eip155" === r.chainNamespace) {
                    let e = await this.getEIP155Balances(t, r);
                    if (e) return this.filterLowQualityTokens(e)
                }
                let i = await y.BlockchainApiController.getBalance(t, r.caipNetworkId, e);
                return this.filterLowQualityTokens(i.balances)
            },
            async getEIP155Balances(e, t) {
                try {
                    let r = J.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),
                        i = await E.getCapabilities(e);
                    if (!i ? .[r] ? .assetDiscovery ? .supported) return null;
                    let s = await E.walletGetAssets({
                        account: e,
                        chainFilter: [r]
                    });
                    if (!J.isWalletGetAssetsResponse(s)) return null;
                    return (s[r] || []).map(e => J.createBalance(e, t.caipNetworkId))
                } catch (e) {
                    return null
                }
            },
            filterLowQualityTokens: e => e.filter(e => "0" !== e.quantity.decimals),
            mapBalancesToSwapTokens: e => e ? .map(e => ({ ...e,
                address: e ? .address ? e.address : er.getActiveNetworkTokenAddress(),
                decimals: parseInt(e.quantity.decimals, 10),
                logoUri: e.iconUrl,
                eip2612: !1
            })) || []
        },
        X = (0, r.proxy)({
            tokenBalances: [],
            loading: !1
        }),
        Q = {
            state: X,
            subscribe: e => (0, r.subscribe)(X, () => e(X)),
            subscribeKey: (e, t) => (0, i.subscribeKey)(X, e, t),
            setToken(e) {
                e && (X.token = (0, r.ref)(e))
            },
            setTokenAmount(e) {
                X.sendTokenAmount = e
            },
            setReceiverAddress(e) {
                X.receiverAddress = e
            },
            setReceiverProfileImageUrl(e) {
                X.receiverProfileImageUrl = e
            },
            setReceiverProfileName(e) {
                X.receiverProfileName = e
            },
            setGasPrice(e) {
                X.gasPrice = e
            },
            setGasPriceInUsd(e) {
                X.gasPriceInUSD = e
            },
            setNetworkBalanceInUsd(e) {
                X.networkBalanceInUSD = e
            },
            setLoading(e) {
                X.loading = e
            },
            sendToken() {
                switch (er.state.activeCaipNetwork ? .chainNamespace) {
                    case "eip155":
                        this.sendEvmToken();
                        return;
                    case "solana":
                        this.sendSolanaToken();
                        return;
                    default:
                        throw Error("Unsupported chain")
                }
            },
            sendEvmToken() {
                this.state.token ? .address && this.state.sendTokenAmount && this.state.receiverAddress ? (g.EventsController.sendEvent({
                    type: "track",
                    event: "SEND_INITIATED",
                    properties: {
                        isSmartAccount: d.AccountController.state.preferredAccountType === p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                        token: this.state.token.address,
                        amount: this.state.sendTokenAmount,
                        network: er.state.activeCaipNetwork ? .caipNetworkId || ""
                    }
                }), this.sendERC20Token({
                    receiverAddress: this.state.receiverAddress,
                    tokenAddress: this.state.token.address,
                    sendTokenAmount: this.state.sendTokenAmount,
                    decimals: this.state.token.quantity.decimals
                })) : this.state.receiverAddress && this.state.sendTokenAmount && this.state.gasPrice && this.state.token ? .quantity.decimals && (g.EventsController.sendEvent({
                    type: "track",
                    event: "SEND_INITIATED",
                    properties: {
                        isSmartAccount: d.AccountController.state.preferredAccountType === p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                        token: this.state.token ? .symbol,
                        amount: this.state.sendTokenAmount,
                        network: er.state.activeCaipNetwork ? .caipNetworkId || ""
                    }
                }), this.sendNativeToken({
                    receiverAddress: this.state.receiverAddress,
                    sendTokenAmount: this.state.sendTokenAmount,
                    gasPrice: this.state.gasPrice,
                    decimals: this.state.token.quantity.decimals
                }))
            },
            async fetchTokenBalance(e) {
                X.loading = !0;
                let t = er.state.activeCaipNetwork ? .caipNetworkId,
                    r = er.state.activeCaipNetwork ? .chainNamespace,
                    i = er.state.activeCaipAddress,
                    s = i ? u.CoreHelperUtil.getPlainAddress(i) : void 0;
                if (X.lastRetry && !u.CoreHelperUtil.isAllowedRetry(X.lastRetry, 30 * U.ConstantsUtil.ONE_SEC_MS)) return X.loading = !1, [];
                try {
                    if (s && t && r) {
                        let e = await Y.getMyTokensWithBalance();
                        return X.tokenBalances = e, X.lastRetry = void 0, e
                    }
                } catch (t) {
                    X.lastRetry = Date.now(), e ? .(t), f.SnackController.showError("Token Balance Unavailable")
                } finally {
                    X.loading = !1
                }
                return []
            },
            fetchNetworkBalance() {
                if (0 === X.tokenBalances.length) return;
                let e = Y.mapBalancesToSwapTokens(X.tokenBalances);
                if (!e) return;
                let t = e.find(e => e.address === er.getActiveNetworkTokenAddress());
                t && (X.networkBalanceInUSD = t ? W.multiply(t.quantity.numeric, t.price).toString() : "0")
            },
            isInsufficientNetworkTokenForGas: (e, t) => !!W.bigNumber(e).eq(0) || W.bigNumber(W.bigNumber(t || "0")).gt(e),
            hasInsufficientGasFunds() {
                let e = !0;
                return d.AccountController.state.preferredAccountType === p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT ? e = !1 : X.networkBalanceInUSD && (e = this.isInsufficientNetworkTokenForGas(X.networkBalanceInUSD, X.gasPriceInUSD)), e
            },
            async sendNativeToken(e) {
                N.pushTransactionStack({
                    view: "Account",
                    goBack: !1
                });
                let t = e.receiverAddress,
                    r = d.AccountController.state.address,
                    i = E.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals));
                try {
                    await E.sendTransaction({
                        chainNamespace: "eip155",
                        to: t,
                        address: r,
                        data: "0x",
                        value: i ? ? BigInt(0),
                        gasPrice: e.gasPrice
                    }), f.SnackController.showSuccess("Transaction started"), g.EventsController.sendEvent({
                        type: "track",
                        event: "SEND_SUCCESS",
                        properties: {
                            isSmartAccount: d.AccountController.state.preferredAccountType === p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                            token: this.state.token ? .symbol || "",
                            amount: e.sendTokenAmount,
                            network: er.state.activeCaipNetwork ? .caipNetworkId || ""
                        }
                    }), this.resetSend()
                } catch (r) {
                    console.error("SendController:sendERC20Token - failed to send native token", r);
                    let t = r instanceof Error ? r.message : "Unknown error";
                    g.EventsController.sendEvent({
                        type: "track",
                        event: "SEND_ERROR",
                        properties: {
                            message: t,
                            isSmartAccount: d.AccountController.state.preferredAccountType === p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                            token: this.state.token ? .symbol || "",
                            amount: e.sendTokenAmount,
                            network: er.state.activeCaipNetwork ? .caipNetworkId || ""
                        }
                    }), f.SnackController.showError("Something went wrong")
                }
            },
            async sendERC20Token(e) {
                N.pushTransactionStack({
                    view: "Account",
                    goBack: !1
                });
                let t = E.parseUnits(e.sendTokenAmount.toString(), Number(e.decimals));
                try {
                    if (d.AccountController.state.address && e.sendTokenAmount && e.receiverAddress && e.tokenAddress) {
                        let r, i = u.CoreHelperUtil.getPlainAddress(e.tokenAddress);
                        await E.writeContract({
                            fromAddress: d.AccountController.state.address,
                            tokenAddress: i,
                            args: [e.receiverAddress, t ? ? BigInt(0)],
                            method: "transfer",
                            abi: (r = i, s.ConstantsUtil.USDT_CONTRACT_ADDRESSES.includes(r) ? G : H),
                            chainNamespace: "eip155"
                        }), f.SnackController.showSuccess("Transaction started"), this.resetSend()
                    }
                } catch (r) {
                    console.error("SendController:sendERC20Token - failed to send erc20 token", r);
                    let t = r instanceof Error ? r.message : "Unknown error";
                    g.EventsController.sendEvent({
                        type: "track",
                        event: "SEND_ERROR",
                        properties: {
                            message: t,
                            isSmartAccount: d.AccountController.state.preferredAccountType === p.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                            token: this.state.token ? .symbol || "",
                            amount: e.sendTokenAmount,
                            network: er.state.activeCaipNetwork ? .caipNetworkId || ""
                        }
                    }), f.SnackController.showError("Something went wrong")
                }
            },
            sendSolanaToken() {
                this.state.sendTokenAmount && this.state.receiverAddress ? (N.pushTransactionStack({
                    view: "Account",
                    goBack: !1
                }), E.sendTransaction({
                    chainNamespace: "solana",
                    to: this.state.receiverAddress,
                    value: this.state.sendTokenAmount
                }).then(() => {
                    this.resetSend(), d.AccountController.fetchTokenBalance()
                }).catch(e => {
                    f.SnackController.showError("Failed to send transaction. Please try again."), console.error("SendController:sendToken - failed to send solana transaction", e)
                })) : f.SnackController.showError("Please enter a valid amount and receiver address")
            },
            resetSend() {
                X.token = void 0, X.sendTokenAmount = void 0, X.receiverAddress = void 0, X.receiverProfileImageUrl = void 0, X.receiverProfileName = void 0, X.loading = !1, X.tokenBalances = []
            }
        },
        Z = {
            currentTab: 0,
            tokenBalance: [],
            smartAccountDeployed: !1,
            addressLabels: new Map,
            allAccounts: [],
            user: void 0
        },
        ee = {
            caipNetwork: void 0,
            supportsAllNetworks: !0,
            smartAccountEnabledNetworks: []
        },
        et = (0, r.proxy)({
            chains: (0, i.proxyMap)(),
            activeCaipAddress: void 0,
            activeChain: void 0,
            activeCaipNetwork: void 0,
            noAdapters: !1,
            universalAdapter: {
                networkControllerClient: void 0,
                connectionControllerClient: void 0
            },
            isSwitchingNamespace: !1
        }),
        er = {
            state: et,
            subscribe: e => (0, r.subscribe)(et, () => {
                e(et)
            }),
            subscribeKey: (e, t) => (0, i.subscribeKey)(et, e, t),
            subscribeChainProp(e, t, i) {
                let s;
                return (0, r.subscribe)(et.chains, () => {
                    let r = i || et.activeChain;
                    if (r) {
                        let i = et.chains.get(r) ? .[e];
                        s !== i && (s = i, t(i))
                    }
                })
            },
            initialize(e, t, i) {
                let {
                    chainId: s,
                    namespace: n
                } = c.StorageUtil.getActiveNetworkProps(), o = t ? .find(e => e.id.toString() === s ? .toString()), a = e.find(e => e ? .namespace === n) || e ? .[0], l = new Set([...t ? .map(e => e.chainNamespace) ? ? []]);
                e ? .length !== 0 && a || (et.noAdapters = !0), !et.noAdapters && (et.activeChain = a ? .namespace, et.activeCaipNetwork = o, this.setChainNetworkData(a ? .namespace, {
                    caipNetwork: o
                }), et.activeChain && C.set({
                    activeChain: a ? .namespace
                })), l.forEach(e => {
                    let s = t ? .filter(t => t.chainNamespace === e);
                    er.state.chains.set(e, {
                        namespace: e,
                        networkState: (0, r.proxy)({ ...ee,
                            caipNetwork: s ? .[0]
                        }),
                        accountState: (0, r.proxy)(Z),
                        caipNetworks: s ? ? [],
                        ...i
                    }), this.setRequestedCaipNetworks(s ? ? [], e)
                })
            },
            removeAdapter(e) {
                if (et.activeChain === e) {
                    let t = Array.from(et.chains.entries()).find(([t]) => t !== e);
                    if (t) {
                        let e = t[1] ? .caipNetworks ? .[0];
                        e && this.setActiveCaipNetwork(e)
                    }
                }
                et.chains.delete(e)
            },
            addAdapter(e, {
                networkControllerClient: t,
                connectionControllerClient: r
            }, i) {
                et.chains.set(e.namespace, {
                    namespace: e.namespace,
                    networkState: { ...ee,
                        caipNetwork: i[0]
                    },
                    accountState: Z,
                    caipNetworks: i,
                    connectionControllerClient: r,
                    networkControllerClient: t
                }), this.setRequestedCaipNetworks(i ? .filter(t => t.chainNamespace === e.namespace) ? ? [], e.namespace)
            },
            addNetwork(e) {
                let t = et.chains.get(e.chainNamespace);
                if (t) {
                    let r = [...t.caipNetworks || []];
                    t.caipNetworks ? .find(t => t.id === e.id) || r.push(e), et.chains.set(e.chainNamespace, { ...t,
                        caipNetworks: r
                    }), this.setRequestedCaipNetworks(r, e.chainNamespace)
                }
            },
            removeNetwork(e, t) {
                let r = et.chains.get(e);
                if (r) {
                    let i = et.activeCaipNetwork ? .id === t,
                        s = [...r.caipNetworks ? .filter(e => e.id !== t) || []];
                    i && r ? .caipNetworks ? .[0] && this.setActiveCaipNetwork(r.caipNetworks[0]), et.chains.set(e, { ...r,
                        caipNetworks: s
                    }), this.setRequestedCaipNetworks(s || [], e)
                }
            },
            setAdapterNetworkState(e, t) {
                let r = et.chains.get(e);
                r && (r.networkState = { ...r.networkState || ee,
                    ...t
                }, et.chains.set(e, r))
            },
            setChainAccountData(e, t, r = !0) {
                if (!e) throw Error("Chain is required to update chain account data");
                let i = et.chains.get(e);
                if (i) {
                    let r = { ...i.accountState || Z,
                        ...t
                    };
                    et.chains.set(e, { ...i,
                        accountState: r
                    }), (1 === et.chains.size || et.activeChain === e) && (t.caipAddress && (et.activeCaipAddress = t.caipAddress), d.AccountController.replaceState(r))
                }
            },
            setChainNetworkData(e, t) {
                if (!e) return;
                let r = et.chains.get(e);
                if (r) {
                    let i = { ...r.networkState || ee,
                        ...t
                    };
                    et.chains.set(e, { ...r,
                        networkState: i
                    })
                }
            },
            setAccountProp(e, t, r, i = !0) {
                this.setChainAccountData(r, {
                    [e]: t
                }, i), "status" === e && "disconnected" === t && r && O.removeConnectorId(r)
            },
            setActiveNamespace(e) {
                et.activeChain = e;
                let t = e ? et.chains.get(e) : void 0,
                    r = t ? .networkState ? .caipNetwork;
                r ? .id && e && (et.activeCaipAddress = t ? .accountState ? .caipAddress, et.activeCaipNetwork = r, this.setChainNetworkData(e, {
                    caipNetwork: r
                }), c.StorageUtil.setActiveCaipNetworkId(r ? .caipNetworkId), C.set({
                    activeChain: e,
                    selectedNetworkId: r ? .caipNetworkId
                }))
            },
            setActiveCaipNetwork(e) {
                if (!e) return;
                et.activeChain !== e.chainNamespace && this.setIsSwitchingNamespace(!0);
                let t = et.chains.get(e.chainNamespace);
                et.activeChain = e.chainNamespace, et.activeCaipNetwork = e, this.setChainNetworkData(e.chainNamespace, {
                    caipNetwork: e
                }), t ? .accountState ? .address ? et.activeCaipAddress = `${e.chainNamespace}:${e.id}:${t?.accountState?.address}` : et.activeCaipAddress = void 0, this.setAccountProp("caipAddress", et.activeCaipAddress, e.chainNamespace), t && d.AccountController.replaceState(t.accountState), Q.resetSend(), C.set({
                    activeChain: et.activeChain,
                    selectedNetworkId: et.activeCaipNetwork ? .caipNetworkId
                }), c.StorageUtil.setActiveCaipNetworkId(e.caipNetworkId), this.checkIfSupportedNetwork(e.chainNamespace) || !h.OptionsController.state.enableNetworkSwitch || h.OptionsController.state.allowUnsupportedChain || E.state.wcBasic || this.showUnsupportedChainUI()
            },
            addCaipNetwork(e) {
                if (!e) return;
                let t = et.chains.get(e.chainNamespace);
                t && t ? .caipNetworks ? .push(e)
            },
            async switchActiveNamespace(e) {
                if (!e) return;
                let t = e !== er.state.activeChain,
                    r = er.getNetworkData(e) ? .caipNetwork,
                    i = er.getCaipNetworkByNamespace(e, r ? .id);
                t && i && await er.switchActiveNetwork(i)
            },
            async switchActiveNetwork(e) {
                let t = er.state.chains.get(er.state.activeChain);
                t ? .caipNetworks ? .some(e => e.id === et.activeCaipNetwork ? .id) || N.goBack();
                let r = this.getNetworkControllerClient(e.chainNamespace);
                r && (await r.switchCaipNetwork(e), g.EventsController.sendEvent({
                    type: "track",
                    event: "SWITCH_NETWORK",
                    properties: {
                        network: e.caipNetworkId
                    }
                }))
            },
            getNetworkControllerClient(e) {
                let t = e || et.activeChain,
                    r = et.chains.get(t);
                if (!r) throw Error("Chain adapter not found");
                if (!r.networkControllerClient) throw Error("NetworkController client not set");
                return r.networkControllerClient
            },
            getConnectionControllerClient(e) {
                let t = e || et.activeChain;
                if (!t) throw Error("Chain is required to get connection controller client");
                let r = et.chains.get(t);
                if (!r ? .connectionControllerClient) throw Error("ConnectionController client not set");
                return r.connectionControllerClient
            },
            getAccountProp(e, t) {
                let r = et.activeChain;
                if (t && (r = t), !r) return;
                let i = et.chains.get(r) ? .accountState;
                if (i) return i[e]
            },
            getNetworkProp(e, t) {
                let r = et.chains.get(t) ? .networkState;
                if (r) return r[e]
            },
            getRequestedCaipNetworks(e) {
                let t = et.chains.get(e),
                    {
                        approvedCaipNetworkIds: r = [],
                        requestedCaipNetworks: i = []
                    } = t ? .networkState || {};
                return u.CoreHelperUtil.sortRequestedNetworks(r, i)
            },
            getAllRequestedCaipNetworks() {
                let e = [];
                return et.chains.forEach(t => {
                    let r = this.getRequestedCaipNetworks(t.namespace);
                    e.push(...r)
                }), e
            },
            setRequestedCaipNetworks(e, t) {
                this.setAdapterNetworkState(t, {
                    requestedCaipNetworks: e
                })
            },
            getAllApprovedCaipNetworkIds() {
                let e = [];
                return et.chains.forEach(t => {
                    let r = this.getApprovedCaipNetworkIds(t.namespace);
                    e.push(...r)
                }), e
            },
            getActiveCaipNetwork: () => et.activeCaipNetwork,
            getActiveCaipAddress: () => et.activeCaipAddress,
            getApprovedCaipNetworkIds(e) {
                let t = et.chains.get(e);
                return t ? .networkState ? .approvedCaipNetworkIds || []
            },
            async setApprovedCaipNetworksData(e) {
                let t = this.getNetworkControllerClient(),
                    r = await t ? .getApprovedCaipNetworksData();
                this.setAdapterNetworkState(e, {
                    approvedCaipNetworkIds: r ? .approvedCaipNetworkIds,
                    supportsAllNetworks: r ? .supportsAllNetworks
                })
            },
            checkIfSupportedNetwork(e, t) {
                let r = t || et.activeCaipNetwork,
                    i = this.getRequestedCaipNetworks(e);
                return !i.length || i ? .some(e => e.id === r ? .id)
            },
            checkIfSupportedChainId(e) {
                if (!et.activeChain) return !0;
                let t = this.getRequestedCaipNetworks(et.activeChain);
                return t ? .some(t => t.id === e)
            },
            setSmartAccountEnabledNetworks(e, t) {
                this.setAdapterNetworkState(t, {
                    smartAccountEnabledNetworks: e
                })
            },
            checkIfSmartAccountEnabled() {
                let e = n.NetworkUtil.caipNetworkIdToNumber(et.activeCaipNetwork ? .caipNetworkId),
                    t = et.activeChain;
                if (!t || !e) return !1;
                let r = this.getNetworkProp("smartAccountEnabledNetworks", t);
                return !!r ? .includes(Number(e))
            },
            getActiveNetworkTokenAddress() {
                let e = et.activeCaipNetwork ? .chainNamespace || "eip155",
                    t = et.activeCaipNetwork ? .id || 1,
                    r = U.ConstantsUtil.NATIVE_TOKEN_ADDRESS[e];
                return `${e}:${t}:${r}`
            },
            showUnsupportedChainUI() {
                x.open({
                    view: "UnsupportedChain"
                })
            },
            checkIfNamesSupported() {
                let e = et.activeCaipNetwork;
                return !!(e ? .chainNamespace && U.ConstantsUtil.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))
            },
            resetNetwork(e) {
                this.setAdapterNetworkState(e, {
                    approvedCaipNetworkIds: void 0,
                    supportsAllNetworks: !0,
                    smartAccountEnabledNetworks: []
                })
            },
            resetAccount(e) {
                if (!e) throw Error("Chain is required to set account prop");
                et.activeCaipAddress = void 0, this.setChainAccountData(e, {
                    smartAccountDeployed: !1,
                    currentTab: 0,
                    caipAddress: void 0,
                    address: void 0,
                    balance: void 0,
                    balanceSymbol: void 0,
                    profileName: void 0,
                    profileImage: void 0,
                    addressExplorerUrl: void 0,
                    tokenBalance: [],
                    connectedWalletInfo: void 0,
                    preferredAccountType: void 0,
                    socialProvider: void 0,
                    socialWindow: void 0,
                    farcasterUrl: void 0,
                    allAccounts: [],
                    user: void 0,
                    status: "disconnected"
                }), O.removeConnectorId(e)
            },
            async disconnect(e) {
                let t, r, i = (t = Array.from(er.state.chains.keys()), r = [], e ? (r.push([e, er.state.chains.get(e)]), R(e, s.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT) ? t.forEach(t => {
                    t !== e && R(t, s.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT) && r.push([t, er.state.chains.get(t)])
                }) : R(e, s.ConstantsUtil.CONNECTOR_ID.AUTH) && t.forEach(t => {
                    t !== e && R(t, s.ConstantsUtil.CONNECTOR_ID.AUTH) && r.push([t, er.state.chains.get(t)])
                })) : r = Array.from(er.state.chains.entries()), r);
                try {
                    Q.resetSend();
                    let t = await Promise.allSettled(i.map(async ([e, t]) => {
                        try {
                            let {
                                caipAddress: r
                            } = this.getAccountData(e) || {};
                            r && t.connectionControllerClient ? .disconnect && await t.connectionControllerClient.disconnect(e), this.resetAccount(e), this.resetNetwork(e)
                        } catch (t) {
                            throw Error(`Failed to disconnect chain ${e}: ${t.message}`)
                        }
                    }));
                    E.resetWcConnection();
                    let r = t.filter(e => "rejected" === e.status);
                    if (r.length > 0) throw Error(r.map(e => e.reason.message).join(", "));
                    c.StorageUtil.deleteConnectedSocialProvider(), e ? O.removeConnectorId(e) : O.resetConnectorIds(), g.EventsController.sendEvent({
                        type: "track",
                        event: "DISCONNECT_SUCCESS",
                        properties: {
                            namespace: e || "all"
                        }
                    })
                } catch (e) {
                    console.error(e.message || "Failed to disconnect chains"), g.EventsController.sendEvent({
                        type: "track",
                        event: "DISCONNECT_ERROR",
                        properties: {
                            message: e.message || "Failed to disconnect chains"
                        }
                    })
                }
            },
            setIsSwitchingNamespace(e) {
                et.isSwitchingNamespace = e
            },
            getFirstCaipNetworkSupportsAuthConnector() {
                let e = [];
                if (et.chains.forEach(t => {
                        s.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e => e === t.namespace) && t.namespace && e.push(t.namespace)
                    }), e.length > 0) {
                    let t = e[0];
                    return t ? et.chains.get(t) ? .caipNetworks ? .[0] : void 0
                }
            },
            getAccountData: e => e ? er.state.chains.get(e) ? .accountState : d.AccountController.state,
            getNetworkData(e) {
                let t = e || et.activeChain;
                if (t) return er.state.chains.get(t) ? .networkState
            },
            getCaipNetworkByNamespace(e, t) {
                if (!e) return;
                let r = er.state.chains.get(e),
                    i = r ? .caipNetworks ? .find(e => e.id === t);
                return i || r ? .networkState ? .caipNetwork || r ? .caipNetworks ? .[0]
            },
            getRequestedCaipNetworkIds() {
                let e = O.state.filterByNamespace;
                return (e ? [et.chains.get(e)] : Array.from(et.chains.values())).flatMap(e => e ? .caipNetworks || []).map(e => e.caipNetworkId)
            }
        }
}, 123214, 862087, e => {
    "use strict";
    e.s(["AccountController", () => g], 123214);
    var t = e.i(934522),
        r = e.i(409546),
        i = e.i(425609);
    e.s(["BlockchainApiController", () => u], 862087);
    var s = e.i(9115),
        n = e.i(609294),
        o = e.i(947366),
        a = e.i(906349),
        c = e.i(921822);
    let l = {
            purchaseCurrencies: [{
                id: "2b92315d-eab7-5bef-84fa-089a131333f5",
                name: "USD Coin",
                symbol: "USDC",
                networks: [{
                    name: "ethereum-mainnet",
                    display_name: "Ethereum",
                    chain_id: "1",
                    contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                }, {
                    name: "polygon-mainnet",
                    display_name: "Polygon",
                    chain_id: "137",
                    contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
                }]
            }, {
                id: "2b92315d-eab7-5bef-84fa-089a131333f5",
                name: "Ether",
                symbol: "ETH",
                networks: [{
                    name: "ethereum-mainnet",
                    display_name: "Ethereum",
                    chain_id: "1",
                    contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                }, {
                    name: "polygon-mainnet",
                    display_name: "Polygon",
                    chain_id: "137",
                    contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
                }]
            }],
            paymentCurrencies: [{
                id: "USD",
                payment_method_limits: [{
                    id: "card",
                    min: "10.00",
                    max: "7500.00"
                }, {
                    id: "ach_bank_account",
                    min: "10.00",
                    max: "25000.00"
                }]
            }, {
                id: "EUR",
                payment_method_limits: [{
                    id: "card",
                    min: "10.00",
                    max: "7500.00"
                }, {
                    id: "ach_bank_account",
                    min: "10.00",
                    max: "25000.00"
                }]
            }]
        },
        h = i.CoreHelperUtil.getBlockchainApiUrl(),
        d = (0, t.proxy)({
            clientId: null,
            api: new s.FetchUtil({
                baseUrl: h,
                clientId: null
            }),
            supportedChains: {
                http: [],
                ws: []
            }
        }),
        u = {
            state: d,
            async get(e) {
                let {
                    st: t,
                    sv: r
                } = u.getSdkProperties(), i = a.OptionsController.state.projectId, s = { ...e.params || {},
                    st: t,
                    sv: r,
                    projectId: i
                };
                return d.api.get({ ...e,
                    params: s
                })
            },
            getSdkProperties() {
                let {
                    sdkType: e,
                    sdkVersion: t
                } = a.OptionsController.state;
                return {
                    st: e || "unknown",
                    sv: t || "unknown"
                }
            },
            async isNetworkSupported(e) {
                if (!e) return !1;
                try {
                    d.supportedChains.http.length || await u.getSupportedNetworks()
                } catch (e) {
                    return !1
                }
                return d.supportedChains.http.includes(e)
            },
            async getSupportedNetworks() {
                let e = await u.get({
                    path: "v1/supported-chains"
                });
                return d.supportedChains = e, e
            },
            async fetchIdentity({
                address: e,
                caipNetworkId: t
            }) {
                if (!await u.isNetworkSupported(t)) return {
                    avatar: "",
                    name: ""
                };
                let r = n.StorageUtil.getIdentityFromCacheForAddress(e);
                if (r) return r;
                let s = await u.get({
                    path: `/v1/identity/${e}`,
                    params: {
                        sender: o.ChainController.state.activeCaipAddress ? i.CoreHelperUtil.getPlainAddress(o.ChainController.state.activeCaipAddress) : void 0
                    }
                });
                return n.StorageUtil.updateIdentityCache({
                    address: e,
                    identity: s,
                    timestamp: Date.now()
                }), s
            },
            fetchTransactions: async ({
                account: e,
                cursor: t,
                onramp: r,
                signal: i,
                cache: s,
                chainId: n
            }) => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? u.get({
                path: `/v1/account/${e}/history`,
                params: {
                    cursor: t,
                    onramp: r,
                    chainId: n
                },
                signal: i,
                cache: s
            }) : {
                data: [],
                next: void 0
            },
            fetchSwapQuote: async ({
                amount: e,
                userAddress: t,
                from: r,
                to: i,
                gasPrice: s
            }) => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? u.get({
                path: "/v1/convert/quotes",
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    amount: e,
                    userAddress: t,
                    from: r,
                    to: i,
                    gasPrice: s
                }
            }) : {
                quotes: []
            },
            fetchSwapTokens: async ({
                chainId: e
            }) => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? u.get({
                path: "/v1/convert/tokens",
                params: {
                    chainId: e
                }
            }) : {
                tokens: []
            },
            fetchTokenPrice: async ({
                addresses: e
            }) => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? d.api.post({
                path: "/v1/fungible/price",
                body: {
                    currency: "usd",
                    addresses: e,
                    projectId: a.OptionsController.state.projectId
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }) : {
                fungibles: []
            },
            fetchSwapAllowance: async ({
                tokenAddress: e,
                userAddress: t
            }) => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? u.get({
                path: "/v1/convert/allowance",
                params: {
                    tokenAddress: e,
                    userAddress: t
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }) : {
                allowance: "0"
            },
            async fetchGasPrice({
                chainId: e
            }) {
                let {
                    st: t,
                    sv: r
                } = u.getSdkProperties();
                if (!await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId)) throw Error("Network not supported for Gas Price");
                return u.get({
                    path: "/v1/convert/gas-price",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        chainId: e,
                        st: t,
                        sv: r
                    }
                })
            },
            async generateSwapCalldata({
                amount: e,
                from: t,
                to: i,
                userAddress: s,
                disableEstimate: n
            }) {
                if (!await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId)) throw Error("Network not supported for Swaps");
                return d.api.post({
                    path: "/v1/convert/build-transaction",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: {
                        amount: e,
                        eip155: {
                            slippage: r.ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE
                        },
                        projectId: a.OptionsController.state.projectId,
                        from: t,
                        to: i,
                        userAddress: s,
                        disableEstimate: n
                    }
                })
            },
            async generateApproveCalldata({
                from: e,
                to: t,
                userAddress: r
            }) {
                let {
                    st: i,
                    sv: s
                } = u.getSdkProperties();
                if (!await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId)) throw Error("Network not supported for Swaps");
                return u.get({
                    path: "/v1/convert/build-approve",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: {
                        userAddress: r,
                        from: e,
                        to: t,
                        st: i,
                        sv: s
                    }
                })
            },
            async getBalance(e, t, r) {
                let {
                    st: i,
                    sv: s
                } = u.getSdkProperties();
                if (!await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId)) return c.SnackController.showError("Token Balance Unavailable"), {
                    balances: []
                };
                let a = `${t}:${e}`,
                    l = n.StorageUtil.getBalanceCacheForCaipAddress(a);
                if (l) return l;
                let h = await u.get({
                    path: `/v1/account/${e}/balance`,
                    params: {
                        currency: "usd",
                        chainId: t,
                        forceUpdate: r,
                        st: i,
                        sv: s
                    }
                });
                return n.StorageUtil.updateBalanceCache({
                    caipAddress: a,
                    balance: h,
                    timestamp: Date.now()
                }), h
            },
            lookupEnsName: async e => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? u.get({
                path: `/v1/profile/account/${e}`,
                params: {
                    apiVersion: "2"
                }
            }) : {
                addresses: {},
                attributes: []
            },
            reverseLookupEnsName: async ({
                address: e
            }) => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? u.get({
                path: `/v1/profile/reverse/${e}`,
                params: {
                    sender: g.state.address,
                    apiVersion: "2"
                }
            }) : [],
            getEnsNameSuggestions: async e => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? u.get({
                path: `/v1/profile/suggestions/${e}`,
                params: {
                    zone: "reown.id"
                }
            }) : {
                suggestions: []
            },
            registerEnsName: async ({
                coinType: e,
                address: t,
                message: r,
                signature: i
            }) => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? d.api.post({
                path: "/v1/profile/account",
                body: {
                    coin_type: e,
                    address: t,
                    message: r,
                    signature: i
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }) : {
                success: !1
            },
            generateOnRampURL: async ({
                destinationWallets: e,
                partnerUserId: t,
                defaultNetwork: r,
                purchaseAmount: i,
                paymentAmount: s
            }) => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? (await d.api.post({
                path: "/v1/generators/onrampurl",
                params: {
                    projectId: a.OptionsController.state.projectId
                },
                body: {
                    destinationWallets: e,
                    defaultNetwork: r,
                    partnerUserId: t,
                    defaultExperience: "buy",
                    presetCryptoAmount: i,
                    presetFiatAmount: s
                }
            })).url : "",
            async getOnrampOptions() {
                if (!await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId)) return {
                    paymentCurrencies: [],
                    purchaseCurrencies: []
                };
                try {
                    return await u.get({
                        path: "/v1/onramp/options"
                    })
                } catch (e) {
                    return l
                }
            },
            async getOnrampQuote({
                purchaseCurrency: e,
                paymentCurrency: t,
                amount: r,
                network: i
            }) {
                try {
                    if (!await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId)) return null;
                    return await d.api.post({
                        path: "/v1/onramp/quote",
                        params: {
                            projectId: a.OptionsController.state.projectId
                        },
                        body: {
                            purchaseCurrency: e,
                            paymentCurrency: t,
                            amount: r,
                            network: i
                        }
                    })
                } catch (e) {
                    return {
                        coinbaseFee: {
                            amount: r,
                            currency: t.id
                        },
                        networkFee: {
                            amount: r,
                            currency: t.id
                        },
                        paymentSubtotal: {
                            amount: r,
                            currency: t.id
                        },
                        paymentTotal: {
                            amount: r,
                            currency: t.id
                        },
                        purchaseAmount: {
                            amount: r,
                            currency: t.id
                        },
                        quoteId: "mocked-quote-id"
                    }
                }
            },
            getSmartSessions: async e => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? u.get({
                path: `/v1/sessions/${e}`
            }) : [],
            revokeSmartSession: async (e, t, r) => await u.isNetworkSupported(o.ChainController.state.activeCaipNetwork ? .caipNetworkId) ? d.api.post({
                path: `/v1/sessions/${e}/revoke`,
                params: {
                    projectId: a.OptionsController.state.projectId
                },
                body: {
                    pci: t,
                    signature: r
                }
            }) : {
                success: !1
            },
            setClientId(e) {
                d.clientId = e, d.api = new s.FetchUtil({
                    baseUrl: h,
                    clientId: e
                })
            }
        },
        p = (0, t.proxy)({
            currentTab: 0,
            tokenBalance: [],
            smartAccountDeployed: !1,
            addressLabels: new Map,
            allAccounts: []
        }),
        g = {
            state: p,
            replaceState(e) {
                e && Object.assign(p, (0, t.ref)(e))
            },
            subscribe: e => o.ChainController.subscribeChainProp("accountState", t => {
                if (t) return e(t)
            }),
            subscribeKey(e, t, r) {
                let i;
                return o.ChainController.subscribeChainProp("accountState", r => {
                    if (r) {
                        let s = r[e];
                        i !== s && (i = s, t(s))
                    }
                }, r)
            },
            setStatus(e, t) {
                o.ChainController.setAccountProp("status", e, t)
            },
            getCaipAddress: e => o.ChainController.getAccountProp("caipAddress", e),
            setCaipAddress(e, t) {
                let r = e ? i.CoreHelperUtil.getPlainAddress(e) : void 0;
                t === o.ChainController.state.activeChain && (o.ChainController.state.activeCaipAddress = e), o.ChainController.setAccountProp("caipAddress", e, t), o.ChainController.setAccountProp("address", r, t)
            },
            setBalance(e, t, r) {
                o.ChainController.setAccountProp("balance", e, r), o.ChainController.setAccountProp("balanceSymbol", t, r)
            },
            setProfileName(e, t) {
                o.ChainController.setAccountProp("profileName", e, t)
            },
            setProfileImage(e, t) {
                o.ChainController.setAccountProp("profileImage", e, t)
            },
            setUser(e, t) {
                o.ChainController.setAccountProp("user", e, t)
            },
            setAddressExplorerUrl(e, t) {
                o.ChainController.setAccountProp("addressExplorerUrl", e, t)
            },
            setSmartAccountDeployed(e, t) {
                o.ChainController.setAccountProp("smartAccountDeployed", e, t)
            },
            setCurrentTab(e) {
                o.ChainController.setAccountProp("currentTab", e, o.ChainController.state.activeChain)
            },
            setTokenBalance(e, t) {
                e && o.ChainController.setAccountProp("tokenBalance", e, t)
            },
            setShouldUpdateToAddress(e, t) {
                o.ChainController.setAccountProp("shouldUpdateToAddress", e, t)
            },
            setAllAccounts(e, t) {
                o.ChainController.setAccountProp("allAccounts", e, t)
            },
            addAddressLabel(e, t, r) {
                let i = o.ChainController.getAccountProp("addressLabels", r) || new Map;
                i.set(e, t), o.ChainController.setAccountProp("addressLabels", i, r)
            },
            removeAddressLabel(e, t) {
                let r = o.ChainController.getAccountProp("addressLabels", t) || new Map;
                r.delete(e), o.ChainController.setAccountProp("addressLabels", r, t)
            },
            setConnectedWalletInfo(e, t) {
                o.ChainController.setAccountProp("connectedWalletInfo", e, t, !1)
            },
            setPreferredAccountType(e, t) {
                o.ChainController.setAccountProp("preferredAccountType", e, t)
            },
            setSocialProvider(e, t) {
                e && o.ChainController.setAccountProp("socialProvider", e, t)
            },
            setSocialWindow(e, r) {
                o.ChainController.setAccountProp("socialWindow", e ? (0, t.ref)(e) : void 0, r)
            },
            setFarcasterUrl(e, t) {
                o.ChainController.setAccountProp("farcasterUrl", e, t)
            },
            async fetchTokenBalance(e) {
                p.balanceLoading = !0;
                let t = o.ChainController.state.activeCaipNetwork ? .caipNetworkId,
                    s = o.ChainController.state.activeCaipNetwork ? .chainNamespace,
                    n = o.ChainController.state.activeCaipAddress,
                    a = n ? i.CoreHelperUtil.getPlainAddress(n) : void 0;
                if (p.lastRetry && !i.CoreHelperUtil.isAllowedRetry(p.lastRetry, 30 * r.ConstantsUtil.ONE_SEC_MS)) return p.balanceLoading = !1, [];
                try {
                    if (a && t && s) {
                        let e = (await u.getBalance(a, t)).balances.filter(e => "0" !== e.quantity.decimals);
                        return this.setTokenBalance(e, s), p.lastRetry = void 0, p.balanceLoading = !1, e
                    }
                } catch (t) {
                    p.lastRetry = Date.now(), e ? .(t), c.SnackController.showError("Token Balance Unavailable")
                } finally {
                    p.balanceLoading = !1
                }
                return []
            },
            resetAccount(e) {
                o.ChainController.resetAccount(e)
            }
        }
}, 464664, e => {
    "use strict";
    var t = e.i(350461);
    let r = {
        ACCOUNT_TABS: [{
            label: "Tokens"
        }, {
            label: "NFTs"
        }, {
            label: "Activity"
        }],
        SECURE_SITE_ORIGIN: (void 0 !== t.default && void 0 !== t.default.env ? t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN : void 0) || "https://secure.walletconnect.org",
        VIEW_DIRECTION: {
            Next: "next",
            Prev: "prev"
        },
        DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"],
        ANIMATION_DURATIONS: {
            HeaderText: 120,
            ModalHeight: 150,
            ViewTransition: 150
        }
    };
    e.s(["ConstantsUtil", 0, r])
}, 570493, 167040, e => {
    "use strict";
    let t, r, i;
    e.i(791300);
    var s = e.i(333490),
        n = e.i(440268);

    function o(e) {
        r && i && ("light" === e ? (r.removeAttribute("media"), i.media = "enabled") : (i.removeAttribute("media"), r.media = "enabled"))
    }

    function a(e) {
        return {
            core: s.css `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${(0,s.unsafeCSS)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,s.unsafeCSS)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,s.unsafeCSS)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,s.unsafeCSS)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,s.unsafeCSS)(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,
            light: s.css `
      :root {
        --w3m-color-mix: ${(0,s.unsafeCSS)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,s.unsafeCSS)((0,n.getW3mThemeVariables)(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${(0,s.unsafeCSS)((0,n.getW3mThemeVariables)(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,
            dark: s.css `
      :root {
        --w3m-color-mix: ${(0,s.unsafeCSS)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,s.unsafeCSS)((0,n.getW3mThemeVariables)(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${(0,s.unsafeCSS)((0,n.getW3mThemeVariables)(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `
        }
    }
    let c = s.css `
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,
        l = s.css `
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,
        h = s.css `
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;
    e.s(["colorStyles", 0, h, "elementStyles", 0, l, "initializeTheming", 0, function(e, s) {
        t = document.createElement("style"), r = document.createElement("style"), i = document.createElement("style"), t.textContent = a(e).core.cssText, r.textContent = a(e).dark.cssText, i.textContent = a(e).light.cssText, document.head.appendChild(t), document.head.appendChild(r), document.head.appendChild(i), o(s)
    }, "resetStyles", 0, c, "setColorTheme", 0, o, "setThemeVariables", 0, function(e) {
        t && r && i && (t.textContent = a(e).core.cssText, r.textContent = a(e).dark.cssText, i.textContent = a(e).light.cssText)
    }], 167040), e.s([], 570493)
}]);

//# sourceMappingURL=0it_78_~5i2be.js.map