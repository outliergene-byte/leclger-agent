(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 221168, (e, t, r) => {
    var i = {
            675: function(e, t) {
                "use strict";
                t.byteLength = function(e) {
                    var t = l(e),
                        r = t[0],
                        i = t[1];
                    return (r + i) * 3 / 4 - i
                }, t.toByteArray = function(e) {
                    var t, r, o = l(e),
                        a = o[0],
                        s = o[1],
                        f = new n((a + s) * 3 / 4 - s),
                        u = 0,
                        h = s > 0 ? a - 4 : a;
                    for (r = 0; r < h; r += 4) t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)], f[u++] = t >> 16 & 255, f[u++] = t >> 8 & 255, f[u++] = 255 & t;
                    return 2 === s && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4, f[u++] = 255 & t), 1 === s && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2, f[u++] = t >> 8 & 255, f[u++] = 255 & t), f
                }, t.fromByteArray = function(e) {
                    for (var t, i = e.length, n = i % 3, o = [], a = 0, s = i - n; a < s; a += 16383) o.push(function(e, t, i) {
                        for (var n, o = [], a = t; a < i; a += 3) n = (e[a] << 16 & 0xff0000) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(r[n >> 18 & 63] + r[n >> 12 & 63] + r[n >> 6 & 63] + r[63 & n]);
                        return o.join("")
                    }(e, a, a + 16383 > s ? s : a + 16383));
                    return 1 === n ? o.push(r[(t = e[i - 1]) >> 2] + r[t << 4 & 63] + "==") : 2 === n && o.push(r[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="), o.join("")
                };
                for (var r = [], i = [], n = "u" > typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = o.length; a < s; ++a) r[a] = o[a], i[o.charCodeAt(a)] = a;

                function l(e) {
                    var t = e.length;
                    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                    var r = e.indexOf("="); - 1 === r && (r = t);
                    var i = r === t ? 0 : 4 - r % 4;
                    return [r, i]
                }
                i[45] = 62, i[95] = 63
            },
            72: function(e, t, r) {
                "use strict";
                var i = r(675),
                    n = r(783),
                    o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                function a(e) {
                    if (e > 0x7fffffff) throw RangeError('The value "' + e + '" is invalid for option "size"');
                    var t = new Uint8Array(e);
                    return Object.setPrototypeOf(t, s.prototype), t
                }

                function s(e, t, r) {
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                        return u(e)
                    }
                    return l(e, t, r)
                }

                function l(e, t, r) {
                    if ("string" == typeof e) {
                        var i = e,
                            n = t;
                        if (("string" != typeof n || "" === n) && (n = "utf8"), !s.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                        var o = 0 | d(i, n),
                            l = a(o),
                            f = l.write(i, n);
                        return f !== o && (l = l.slice(0, f)), l
                    }
                    if (ArrayBuffer.isView(e)) return h(e);
                    if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    if (k(e, ArrayBuffer) || e && k(e.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (k(e, SharedArrayBuffer) || e && k(e.buffer, SharedArrayBuffer))) return function(e, t, r) {
                        var i;
                        if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                        if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                        return Object.setPrototypeOf(i = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), s.prototype), i
                    }(e, t, r);
                    if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                    var u = e.valueOf && e.valueOf();
                    if (null != u && u !== e) return s.from(u, t, r);
                    var p = function(e) {
                        if (s.isBuffer(e)) {
                            var t = 0 | c(e.length),
                                r = a(t);
                            return 0 === r.length || e.copy(r, 0, 0, t), r
                        }
                        return void 0 !== e.length ? "number" != typeof e.length || function(e) {
                            return e != e
                        }(e.length) ? a(0) : h(e) : "Buffer" === e.type && Array.isArray(e.data) ? h(e.data) : void 0
                    }(e);
                    if (p) return p;
                    if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, r);
                    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                }

                function f(e) {
                    if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                    if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
                }

                function u(e) {
                    return f(e), a(e < 0 ? 0 : 0 | c(e))
                }

                function h(e) {
                    for (var t = e.length < 0 ? 0 : 0 | c(e.length), r = a(t), i = 0; i < t; i += 1) r[i] = 255 & e[i];
                    return r
                }
                t.Buffer = s, t.SlowBuffer = function(e) {
                    return +e != e && (e = 0), s.alloc(+e)
                }, t.INSPECT_MAX_BYTES = 50, t.kMaxLength = 0x7fffffff, s.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var e = new Uint8Array(1),
                            t = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                    } catch (e) {
                        return !1
                    }
                }(), !s.TYPED_ARRAY_SUPPORT && "u" > typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (s.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(s.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (s.isBuffer(this)) return this.byteOffset
                    }
                }), s.poolSize = 8192, s.from = function(e, t, r) {
                    return l(e, t, r)
                }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(e, t, r) {
                    return (f(e), e <= 0) ? a(e) : void 0 !== t ? "string" == typeof r ? a(e).fill(t, r) : a(e).fill(t) : a(e)
                }, s.allocUnsafe = function(e) {
                    return u(e)
                }, s.allocUnsafeSlow = function(e) {
                    return u(e)
                };

                function c(e) {
                    if (e >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                    return 0 | e
                }

                function d(e, t) {
                    if (s.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || k(e, ArrayBuffer)) return e.byteLength;
                    if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                    var r = e.length,
                        i = arguments.length > 2 && !0 === arguments[2];
                    if (!i && 0 === r) return 0;
                    for (var n = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return S(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return N(e).length;
                        default:
                            if (n) return i ? -1 : S(e).length;
                            t = ("" + t).toLowerCase(), n = !0
                    }
                }

                function p(e, t, r) {
                    var n, o, a, s = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return function(e, t, r) {
                                var i = e.length;
                                (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
                                for (var n = "", o = t; o < r; ++o) n += C[e[o]];
                                return n
                            }(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return b(this, t, r);
                        case "ascii":
                            return function(e, t, r) {
                                var i = "";
                                r = Math.min(e.length, r);
                                for (var n = t; n < r; ++n) i += String.fromCharCode(127 & e[n]);
                                return i
                            }(this, t, r);
                        case "latin1":
                        case "binary":
                            return function(e, t, r) {
                                var i = "";
                                r = Math.min(e.length, r);
                                for (var n = t; n < r; ++n) i += String.fromCharCode(e[n]);
                                return i
                            }(this, t, r);
                        case "base64":
                            return n = this, o = t, a = r, 0 === o && a === n.length ? i.fromByteArray(n) : i.fromByteArray(n.slice(o, a));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function(e, t, r) {
                                for (var i = e.slice(t, r), n = "", o = 0; o < i.length; o += 2) n += String.fromCharCode(i[o] + 256 * i[o + 1]);
                                return n
                            }(this, t, r);
                        default:
                            if (s) throw TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), s = !0
                    }
                }

                function m(e, t, r) {
                    var i = e[t];
                    e[t] = e[r], e[r] = i
                }

                function g(e, t, r, i, n) {
                    var o;
                    if (0 === e.length) return -1;
                    if ("string" == typeof r ? (i = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (o = r *= 1) != o && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length)
                        if (n) return -1;
                        else r = e.length - 1;
                    else if (r < 0)
                        if (!n) return -1;
                        else r = 0;
                    if ("string" == typeof t && (t = s.from(t, i)), s.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, r, i, n);
                    if ("number" == typeof t) {
                        if (t &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                            if (n) return Uint8Array.prototype.indexOf.call(e, t, r);
                            else return Uint8Array.prototype.lastIndexOf.call(e, t, r);
                        return y(e, [t], r, i, n)
                    }
                    throw TypeError("val must be string, number or Buffer")
                }

                function y(e, t, r, i, n) {
                    var o, a = 1,
                        s = e.length,
                        l = t.length;
                    if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        a = 2, s /= 2, l /= 2, r /= 2
                    }

                    function f(e, t) {
                        return 1 === a ? e[t] : e.readUInt16BE(t * a)
                    }
                    if (n) {
                        var u = -1;
                        for (o = r; o < s; o++)
                            if (f(e, o) === f(t, -1 === u ? 0 : o - u)) {
                                if (-1 === u && (u = o), o - u + 1 === l) return u * a
                            } else -1 !== u && (o -= o - u), u = -1
                    } else
                        for (r + l > s && (r = s - l), o = r; o >= 0; o--) {
                            for (var h = !0, c = 0; c < l; c++)
                                if (f(e, o + c) !== f(t, c)) {
                                    h = !1;
                                    break
                                }
                            if (h) return o
                        }
                    return -1
                }
                s.isBuffer = function(e) {
                    return null != e && !0 === e._isBuffer && e !== s.prototype
                }, s.compare = function(e, t) {
                    if (k(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), k(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    for (var r = e.length, i = t.length, n = 0, o = Math.min(r, i); n < o; ++n)
                        if (e[n] !== t[n]) {
                            r = e[n], i = t[n];
                            break
                        }
                    return r < i ? -1 : +(i < r)
                }, s.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, s.concat = function(e, t) {
                    if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return s.alloc(0);
                    if (void 0 === t)
                        for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
                    var r, i = s.allocUnsafe(t),
                        n = 0;
                    for (r = 0; r < e.length; ++r) {
                        var o = e[r];
                        if (k(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o)) throw TypeError('"list" argument must be an Array of Buffers');
                        o.copy(i, n), n += o.length
                    }
                    return i
                }, s.byteLength = d, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) m(this, t, t + 1);
                    return this
                }, s.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
                    return this
                }, s.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
                    return this
                }, s.prototype.toString = function() {
                    var e = this.length;
                    return 0 === e ? "" : 0 == arguments.length ? b(this, 0, e) : p.apply(this, arguments)
                }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
                    if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                    return this === e || 0 === s.compare(this, e)
                }, s.prototype.inspect = function() {
                    var e = "",
                        r = t.INSPECT_MAX_BYTES;
                    return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
                }, o && (s.prototype[o] = s.prototype.inspect), s.prototype.compare = function(e, t, r, i, n) {
                    if (k(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), t < 0 || r > e.length || i < 0 || n > this.length) throw RangeError("out of range index");
                    if (i >= n && t >= r) return 0;
                    if (i >= n) return -1;
                    if (t >= r) return 1;
                    if (t >>>= 0, r >>>= 0, i >>>= 0, n >>>= 0, this === e) return 0;
                    for (var o = n - i, a = r - t, l = Math.min(o, a), f = this.slice(i, n), u = e.slice(t, r), h = 0; h < l; ++h)
                        if (f[h] !== u[h]) {
                            o = f[h], a = u[h];
                            break
                        }
                    return o < a ? -1 : +(a < o)
                }, s.prototype.includes = function(e, t, r) {
                    return -1 !== this.indexOf(e, t, r)
                }, s.prototype.indexOf = function(e, t, r) {
                    return g(this, e, t, r, !0)
                }, s.prototype.lastIndexOf = function(e, t, r) {
                    return g(this, e, t, r, !1)
                };

                function b(e, t, r) {
                    r = Math.min(e.length, r);
                    for (var i = [], n = t; n < r;) {
                        var o, a, s, l, f = e[n],
                            u = null,
                            h = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                        if (n + h <= r) switch (h) {
                            case 1:
                                f < 128 && (u = f);
                                break;
                            case 2:
                                (192 & (o = e[n + 1])) == 128 && (l = (31 & f) << 6 | 63 & o) > 127 && (u = l);
                                break;
                            case 3:
                                o = e[n + 1], a = e[n + 2], (192 & o) == 128 && (192 & a) == 128 && (l = (15 & f) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (u = l);
                                break;
                            case 4:
                                o = e[n + 1], a = e[n + 2], s = e[n + 3], (192 & o) == 128 && (192 & a) == 128 && (192 & s) == 128 && (l = (15 & f) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && l < 1114112 && (u = l)
                        }
                        null === u ? (u = 65533, h = 1) : u > 65535 && (u -= 65536, i.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), i.push(u), n += h
                    }
                    var c = i,
                        d = c.length;
                    if (d <= 4096) return String.fromCharCode.apply(String, c);
                    for (var p = "", m = 0; m < d;) p += String.fromCharCode.apply(String, c.slice(m, m += 4096));
                    return p
                }

                function v(e, t, r) {
                    if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                    if (e + t > r) throw RangeError("Trying to access beyond buffer length")
                }

                function w(e, t, r, i, n, o) {
                    if (!s.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                    if (t > n || t < o) throw RangeError('"value" argument is out of bounds');
                    if (r + i > e.length) throw RangeError("Index out of range")
                }

                function x(e, t, r, i, n, o) {
                    if (r + i > e.length || r < 0) throw RangeError("Index out of range")
                }

                function E(e, t, r, i, o) {
                    return t *= 1, r >>>= 0, o || x(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4
                }

                function A(e, t, r, i, o) {
                    return t *= 1, r >>>= 0, o || x(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8
                }
                s.prototype.write = function(e, t, r, i) {
                    if (void 0 === t) i = "utf8", r = this.length, t = 0;
                    else if (void 0 === r && "string" == typeof t) i = t, r = this.length, t = 0;
                    else if (isFinite(t)) t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0);
                    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    var n, o, a, s, l, f, u, h, c = this.length - t;
                    if ((void 0 === r || r > c) && (r = c), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var d = !1;;) switch (i) {
                        case "hex":
                            return function(e, t, r, i) {
                                r = Number(r) || 0;
                                var n = e.length - r;
                                i ? (i = Number(i)) > n && (i = n) : i = n;
                                var o = t.length;
                                i > o / 2 && (i = o / 2);
                                for (var a = 0; a < i; ++a) {
                                    var s, l = parseInt(t.substr(2 * a, 2), 16);
                                    if ((s = l) != s) break;
                                    e[r + a] = l
                                }
                                return a
                            }(this, e, t, r);
                        case "utf8":
                        case "utf-8":
                            return n = t, o = r, T(S(e, this.length - n), this, n, o);
                        case "ascii":
                            return a = t, s = r, T(j(e), this, a, s);
                        case "latin1":
                        case "binary":
                            return function(e, t, r, i) {
                                return T(j(t), e, r, i)
                            }(this, e, t, r);
                        case "base64":
                            return l = t, f = r, T(N(e), this, l, f);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return u = t, h = r, T(function(e, t) {
                                for (var r, i, n = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) i = (r = e.charCodeAt(o)) >> 8, n.push(r % 256), n.push(i);
                                return n
                            }(e, this.length - u), this, u, h);
                        default:
                            if (d) throw TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(), d = !0
                    }
                }, s.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }, s.prototype.slice = function(e, t) {
                    var r = this.length;
                    e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                    var i = this.subarray(e, t);
                    return Object.setPrototypeOf(i, s.prototype), i
                }, s.prototype.readUIntLE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || v(e, t, this.length);
                    for (var i = this[e], n = 1, o = 0; ++o < t && (n *= 256);) i += this[e + o] * n;
                    return i
                }, s.prototype.readUIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || v(e, t, this.length);
                    for (var i = this[e + --t], n = 1; t > 0 && (n *= 256);) i += this[e + --t] * n;
                    return i
                }, s.prototype.readUInt8 = function(e, t) {
                    return e >>>= 0, t || v(e, 1, this.length), this[e]
                }, s.prototype.readUInt16LE = function(e, t) {
                    return e >>>= 0, t || v(e, 2, this.length), this[e] | this[e + 1] << 8
                }, s.prototype.readUInt16BE = function(e, t) {
                    return e >>>= 0, t || v(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, s.prototype.readUInt32LE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 0x1000000 * this[e + 3]
                }, s.prototype.readUInt32BE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), 0x1000000 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, s.prototype.readIntLE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || v(e, t, this.length);
                    for (var i = this[e], n = 1, o = 0; ++o < t && (n *= 256);) i += this[e + o] * n;
                    return i >= (n *= 128) && (i -= Math.pow(2, 8 * t)), i
                }, s.prototype.readIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || v(e, t, this.length);
                    for (var i = t, n = 1, o = this[e + --i]; i > 0 && (n *= 256);) o += this[e + --i] * n;
                    return o >= (n *= 128) && (o -= Math.pow(2, 8 * t)), o
                }, s.prototype.readInt8 = function(e, t) {
                    return (e >>>= 0, t || v(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
                }, s.prototype.readInt16LE = function(e, t) {
                    e >>>= 0, t || v(e, 2, this.length);
                    var r = this[e] | this[e + 1] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, s.prototype.readInt16BE = function(e, t) {
                    e >>>= 0, t || v(e, 2, this.length);
                    var r = this[e + 1] | this[e] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, s.prototype.readInt32LE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, s.prototype.readInt32BE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, s.prototype.readFloatLE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), n.read(this, e, !0, 23, 4)
                }, s.prototype.readFloatBE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), n.read(this, e, !1, 23, 4)
                }, s.prototype.readDoubleLE = function(e, t) {
                    return e >>>= 0, t || v(e, 8, this.length), n.read(this, e, !0, 52, 8)
                }, s.prototype.readDoubleBE = function(e, t) {
                    return e >>>= 0, t || v(e, 8, this.length), n.read(this, e, !1, 52, 8)
                }, s.prototype.writeUIntLE = function(e, t, r, i) {
                    if (e *= 1, t >>>= 0, r >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r) - 1;
                        w(this, e, t, r, n, 0)
                    }
                    var o = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++a < r && (o *= 256);) this[t + a] = e / o & 255;
                    return t + r
                }, s.prototype.writeUIntBE = function(e, t, r, i) {
                    if (e *= 1, t >>>= 0, r >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r) - 1;
                        w(this, e, t, r, n, 0)
                    }
                    var o = r - 1,
                        a = 1;
                    for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) this[t + o] = e / a & 255;
                    return t + r
                }, s.prototype.writeUInt8 = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || w(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                }, s.prototype.writeUInt16LE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || w(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, s.prototype.writeUInt16BE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || w(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, s.prototype.writeUInt32LE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || w(this, e, t, 4, 0xffffffff, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                }, s.prototype.writeUInt32BE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || w(this, e, t, 4, 0xffffffff, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, s.prototype.writeIntLE = function(e, t, r, i) {
                    if (e *= 1, t >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r - 1);
                        w(this, e, t, r, n - 1, -n)
                    }
                    var o = 0,
                        a = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++o < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a | 0) - s & 255;
                    return t + r
                }, s.prototype.writeIntBE = function(e, t, r, i) {
                    if (e *= 1, t >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r - 1);
                        w(this, e, t, r, n - 1, -n)
                    }
                    var o = r - 1,
                        a = 1,
                        s = 0;
                    for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a | 0) - s & 255;
                    return t + r
                }, s.prototype.writeInt8 = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || w(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, s.prototype.writeInt16LE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || w(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, s.prototype.writeInt16BE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || w(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, s.prototype.writeInt32LE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || w(this, e, t, 4, 0x7fffffff, -0x80000000), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                }, s.prototype.writeInt32BE = function(e, t, r) {
                    return e *= 1, t >>>= 0, r || w(this, e, t, 4, 0x7fffffff, -0x80000000), e < 0 && (e = 0xffffffff + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, s.prototype.writeFloatLE = function(e, t, r) {
                    return E(this, e, t, !0, r)
                }, s.prototype.writeFloatBE = function(e, t, r) {
                    return E(this, e, t, !1, r)
                }, s.prototype.writeDoubleLE = function(e, t, r) {
                    return A(this, e, t, !0, r)
                }, s.prototype.writeDoubleBE = function(e, t, r) {
                    return A(this, e, t, !1, r)
                }, s.prototype.copy = function(e, t, r, i) {
                    if (!s.isBuffer(e)) throw TypeError("argument should be a Buffer");
                    if (r || (r = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < r && (i = r), i === r || 0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                    if (i < 0) throw RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), e.length - t < i - r && (i = e.length - t + r);
                    var n = i - r;
                    if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, i);
                    else if (this === e && r < t && t < i)
                        for (var o = n - 1; o >= 0; --o) e[o + t] = this[o + r];
                    else Uint8Array.prototype.set.call(e, this.subarray(r, i), t);
                    return n
                }, s.prototype.fill = function(e, t, r, i) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (i = t, t = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw TypeError("encoding must be a string");
                        if ("string" == typeof i && !s.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                        if (1 === e.length) {
                            var n, o = e.charCodeAt(0);
                            ("utf8" === i && o < 128 || "latin1" === i) && (e = o)
                        }
                    } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                    if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
                    if (r <= t) return this;
                    if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                        for (n = t; n < r; ++n) this[n] = e;
                    else {
                        var a = s.isBuffer(e) ? e : s.from(e, i),
                            l = a.length;
                        if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (n = 0; n < r - t; ++n) this[n + t] = a[n % l]
                    }
                    return this
                };
                var B = /[^+/0-9A-Za-z-_]/g;

                function S(e, t) {
                    t = t || 1 / 0;
                    for (var r, i = e.length, n = null, o = [], a = 0; a < i; ++a) {
                        if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                            if (!n) {
                                if (r > 56319 || a + 1 === i) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                n = r;
                                continue
                            }
                            if (r < 56320) {
                                (t -= 3) > -1 && o.push(239, 191, 189), n = r;
                                continue
                            }
                            r = (n - 55296 << 10 | r - 56320) + 65536
                        } else n && (t -= 3) > -1 && o.push(239, 191, 189);
                        if (n = null, r < 128) {
                            if ((t -= 1) < 0) break;
                            o.push(r)
                        } else if (r < 2048) {
                            if ((t -= 2) < 0) break;
                            o.push(r >> 6 | 192, 63 & r | 128)
                        } else if (r < 65536) {
                            if ((t -= 3) < 0) break;
                            o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                        } else if (r < 1114112) {
                            if ((t -= 4) < 0) break;
                            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                        } else throw Error("Invalid code point")
                    }
                    return o
                }

                function j(e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }

                function N(e) {
                    return i.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(B, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e
                    }(e))
                }

                function T(e, t, r, i) {
                    for (var n = 0; n < i && !(n + r >= t.length) && !(n >= e.length); ++n) t[n + r] = e[n];
                    return n
                }

                function k(e, t) {
                    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                }
                var C = function() {
                    for (var e = "0123456789abcdef", t = Array(256), r = 0; r < 16; ++r)
                        for (var i = 16 * r, n = 0; n < 16; ++n) t[i + n] = e[r] + e[n];
                    return t
                }()
            },
            783: function(e, t) {
                t.read = function(e, t, r, i, n) {
                    var o, a, s = 8 * n - i - 1,
                        l = (1 << s) - 1,
                        f = l >> 1,
                        u = -7,
                        h = r ? n - 1 : 0,
                        c = r ? -1 : 1,
                        d = e[t + h];
                    for (h += c, o = d & (1 << -u) - 1, d >>= -u, u += s; u > 0; o = 256 * o + e[t + h], h += c, u -= 8);
                    for (a = o & (1 << -u) - 1, o >>= -u, u += i; u > 0; a = 256 * a + e[t + h], h += c, u -= 8);
                    if (0 === o) o = 1 - f;
                    else {
                        if (o === l) return a ? NaN : 1 / 0 * (d ? -1 : 1);
                        a += Math.pow(2, i), o -= f
                    }
                    return (d ? -1 : 1) * a * Math.pow(2, o - i)
                }, t.write = function(e, t, r, i, n, o) {
                    var a, s, l, f = 8 * o - n - 1,
                        u = (1 << f) - 1,
                        h = u >> 1,
                        c = 5960464477539062e-23 * (23 === n),
                        d = i ? 0 : o - 1,
                        p = i ? 1 : -1,
                        m = +(t < 0 || 0 === t && 1 / t < 0);
                    for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (s = +!!isNaN(t), a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), a + h >= 1 ? t += c / l : t += c * Math.pow(2, 1 - h), t * l >= 2 && (a++, l /= 2), a + h >= u ? (s = 0, a = u) : a + h >= 1 ? (s = (t * l - 1) * Math.pow(2, n), a += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, n), a = 0)); n >= 8; e[r + d] = 255 & s, d += p, s /= 256, n -= 8);
                    for (a = a << n | s, f += n; f > 0; e[r + d] = 255 & a, d += p, a /= 256, f -= 8);
                    e[r + d - p] |= 128 * m
                }
            }
        },
        n = {};

    function o(e) {
        var t = n[e];
        if (void 0 !== t) return t.exports;
        var r = n[e] = {
                exports: {}
            },
            a = !0;
        try {
            i[e](r, r.exports, o), a = !1
        } finally {
            a && delete n[e]
        }
        return r.exports
    }
    o.ab = "/ROOT/node_modules/next/dist/compiled/buffer/", t.exports = o(72)
}, 366539, 150077, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        i = e.i(495854),
        n = e.i(799444);
    let o = e => {
        let n, o, a, s, l = (0, r.c)(10),
            {
                displayValue: f,
                theme: u
            } = e,
            h = void 0 === u ? "light" : u,
            c = "light" === h ? "bg-black text-white" : "bg-white text-black";
        l[0] !== c ? (n = (0, i.default)("relative flex items-center justify-center rounded-xs px-8 py-4 text-center body-3", c), l[0] = c, l[1] = n) : n = l[1];
        let d = "light" === h ? "bg-black text-white" : "bg-white text-black";
        return l[2] !== d ? (o = (0, i.default)("absolute left-[-4px] top-[11px] h-8 w-8 rotate-45", d), l[2] = d, l[3] = o) : o = l[3], l[4] !== o ? (a = (0, t.jsx)("div", {
            className: o
        }), l[4] = o, l[5] = a) : a = l[5], l[6] !== f || l[7] !== n || l[8] !== a ? (s = (0, t.jsxs)("div", {
            className: n,
            "data-testid": "discount",
            children: [f, a]
        }), l[6] = f, l[7] = n, l[8] = a, l[9] = s) : s = l[9], s
    };
    var a = e.i(455108),
        s = e.i(203828);
    e.s(["default", 0, e => {
        let l, f, u, h, c, d, p = (0, r.c)(35),
            {
                variant: m,
                direction: g,
                size: y,
                showTaxMessage: b,
                center: v,
                showDiscount: w,
                discountLabel: x,
                showStrikedPrice: E,
                manualDiscountConversion: A,
                theme: B
            } = e,
            S = void 0 === g ? "horizontal" : g,
            j = void 0 === y ? "small" : y,
            N = void 0 === b || b,
            T = void 0 !== w && w,
            k = void 0 === x ? null : x,
            C = void 0 === E || E,
            O = void 0 === B ? "light" : B,
            {
                locale: U
            } = (0, s.useRouter)(),
            L = m ? .id;
        p[0] !== L ? (l = [L], p[0] = L, p[1] = l) : l = p[1];
        let {
            prices: I
        } = (0, n.default)(l);
        p[2] !== j ? (f = () => {
            switch (j) {
                case "large":
                    return "heading-4-semi-bold";
                case "extra-small":
                    return "body-4";
                default:
                    return "body-1 font-normal"
            }
        }, p[2] = j, p[3] = f) : f = p[3];
        let R = f();
        if (!I) {
            let e, r, n = "extra-small" === j,
                o = "small" === j,
                s = "vertical" === S,
                l = T && k;
            return p[4] !== n || p[5] !== o || p[6] !== s || p[7] !== l ? (e = (0, i.default)("h-32 w-20 animate-spin text-white", {
                "h-16": n,
                "h-24": o,
                "h-32": s,
                "mb-16 h-48": l
            }), p[4] = n, p[5] = o, p[6] = s, p[7] = l, p[8] = e) : e = p[8], p[9] !== e ? (r = (0, t.jsx)("div", {
                role: "status",
                "data-testid": "price-display__loading",
                className: "flex min-h-56 items-center lg:min-h-full",
                children: (0, t.jsx)(a.default.LoadingSpinner, {
                    className: e
                })
            }), p[9] = e, p[10] = r) : r = p[10], r
        }
        let _ = I[0];
        if (p[11] !== U || p[12] !== A || p[13] !== _) {
            var M, D, P;
            u = A && (M = _.amount, D = _.currency, P = U || "EN", Intl.NumberFormat(P.toUpperCase(), {
                style: "currency",
                currency: D,
                trailingZeroDisplay: "stripIfInteger"
            }).format(Number(M * (1 - A)))), p[11] = U, p[12] = A, p[13] = _, p[14] = u
        } else u = p[14];
        let z = u,
            F = "vertical" === S && "flex-col items-start justify-center",
            V = "horizontal" === S && "flex-row items-center",
            W = "vertical-reversed" === S && "flex-col-reverse items-start justify-center",
            Y = void 0 !== v && v ? "items-center" : "";
        return p[15] !== F || p[16] !== V || p[17] !== W || p[18] !== Y ? (h = (0, i.default)("flex flex-wrap", F, V, W, Y), p[15] = F, p[16] = V, p[17] = W, p[18] = Y, p[19] = h) : h = p[19], p[20] !== z || p[21] !== S || p[22] !== k || p[23] !== R || p[24] !== _ || p[25] !== T || p[26] !== C || p[27] !== N || p[28] !== O || p[29] !== m.pricePrefix || p[30] !== m.priceSuffix ? (c = T || _.compareAtLabel || z ? (0, t.jsxs)(t.Fragment, {
            children: [(z || _.compareAtLabel) && C && (0, t.jsx)("div", {
                className: "pe-8 text-neutral-400 line-through body-3",
                children: z ? _.label : _.compareAtLabel
            }), (0, t.jsxs)("div", {
                className: (0, i.default)("flex flex-row flex-wrap items-center gap-x-12", "vertical-reversed" === S && "-mb-4", "vertical" === S && "-mt-4"),
                children: [(0, t.jsxs)("span", {
                    "data-testid": "price-display__price",
                    className: R,
                    children: [m.pricePrefix && (0, t.jsx)("span", {
                        children: m.pricePrefix
                    }), z || _.label, m.priceSuffix && (0, t.jsx)("span", {
                        children: m.priceSuffix
                    })]
                }), T && k && (0, t.jsx)(o, {
                    displayValue: k,
                    theme: O
                })]
            }), N && (0, t.jsx)("div", {
                className: "basis-full text-gray-500 body-4",
                children: _.taxMessage
            })]
        }) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("span", {
                "data-testid": "price-display__price",
                className: R,
                children: [m.pricePrefix && (0, t.jsx)("span", {
                    children: m.pricePrefix
                }), _.label, m.priceSuffix && (0, t.jsx)("span", {
                    children: m.priceSuffix
                })]
            }), N && (0, t.jsx)("div", {
                className: "text-gray-500 body-4",
                children: _.taxMessage
            })]
        }), p[20] = z, p[21] = S, p[22] = k, p[23] = R, p[24] = _, p[25] = T, p[26] = C, p[27] = N, p[28] = O, p[29] = m.pricePrefix, p[30] = m.priceSuffix, p[31] = c) : c = p[31], p[32] !== h || p[33] !== c ? (d = (0, t.jsx)("div", {
            className: h,
            "data-testid": "price-display",
            children: c
        }), p[32] = h, p[33] = c, p[34] = d) : d = p[34], d
    }], 150077), e.s([], 366539)
}, 345082, 627528, e => {
    "use strict";
    e.s(["default", 0, (e, t, r) => {
        let i, n, o, a, s, l = "affiliate-named" === e.activeEntryChannel ? e.cryptoVouchers : null;
        return i = t.filter(({
            type: e
        }) => "campaign" === e), n = "affiliate-anonymous" === e.activeEntryChannel ? "affiliate-named" : e.activeEntryChannel, o = t.filter(({
            type: e
        }) => e === n), a = [], ("affiliate-named" === e.activeEntryChannel || "affiliate-anonymous" === e.activeEntryChannel) && l && l ? .length && (a = l), [...i, ...a, ...o].find(({
            eligibleVariantIds: e,
            type: t
        }) => (!s || t === s) && e.find(e => r === e)) || null
    }], 345082);
    var t = e.i(391398),
        r = e.i(261576),
        i = e.i(495854),
        n = e.i(870155);
    e.i(828684);
    var o = e.i(454720);
    e.i(108399);
    var a = e.i(860231);
    let s = {
            BTC: {
                background: "from-crypto-btc/30 to-crypto-btc/10",
                border: "border-corner-crypto-btc",
                icon: "bitcoin2"
            },
            SOL: {
                background: "from-crypto-sol/30 to-crypto-sol/10",
                border: "border-corner-crypto-sol",
                icon: "solana2"
            }
        },
        l = {
            light: "text-black",
            dark: "text-white"
        };
    e.s(["default", 0, e => {
        let f, u, h, c, d, p, m, g, y, b = (0, r.c)(28),
            {
                label: v,
                theme: w,
                drawer: x,
                cryptoCurrency: E,
                size: A
            } = e,
            B = void 0 === A ? "medium" : A,
            S = s[E],
            j = l[w];
        b[0] !== E || b[1] !== v || b[2] !== B ? (f = (0, n.default)(v, {
            style: E,
            size: B
        }), b[0] = E, b[1] = v, b[2] = B, b[3] = f) : f = b[3];
        let N = f;
        b[4] !== S.border ? (u = (0, i.default)("inline-flex h-fit min-h-0 w-fit max-w-full flex-col p-4", S.border), b[4] = S.border, b[5] = u) : u = b[5];
        let T = "small" === B ? "body-3" : "body-1-semi-bold";
        b[6] !== S.background || b[7] !== T || b[8] !== j ? (h = (0, i.default)("inline-flex w-fit max-w-full items-center bg-linear-to-r p-4 leading-tight", j, S.background, T), b[6] = S.background, b[7] = T, b[8] = j, b[9] = h) : h = b[9];
        let k = "small" === B && "[&>em]:!py-0";
        b[10] !== k ? (c = (0, i.default)("inline-flex min-h-0 items-center gap-4", k), b[10] = k, b[11] = c) : c = b[11], b[12] !== B || b[13] !== S.icon ? (d = "small" !== B && (0, t.jsx)("span", {
            className: "inline-flex shrink-0",
            "data-testid": `offerBanner__icon--${S.icon}`,
            children: (0, t.jsx)(a.default, {
                name: S.icon,
                size: 24,
                strokeWidth: 1.5,
                color: "black",
                isFilled: !0
            })
        }), b[12] = B, b[13] = S.icon, b[14] = d) : d = b[14], b[15] !== N || b[16] !== c || b[17] !== d ? (p = (0, t.jsxs)("span", {
            "data-testid": "offerBanner__label",
            className: c,
            children: [N, d]
        }), b[15] = N, b[16] = c, b[17] = d, b[18] = p) : p = b[18], b[19] !== h || b[20] !== p ? (m = (0, t.jsx)("div", {
            className: h,
            children: p
        }), b[19] = h, b[20] = p, b[21] = m) : m = b[21], b[22] !== m || b[23] !== u ? (g = (0, t.jsx)("div", {
            className: u,
            "data-testid": "offerBanner",
            children: m
        }), b[22] = m, b[23] = u, b[24] = g) : g = b[24];
        let C = g;
        return b[25] !== C || b[26] !== x ? (y = x ? .dynamicDrawerContent ? (0, t.jsx)(o.default, {
            dynamicDrawerContent: x.dynamicDrawerContent,
            label: x.label,
            buttonClassname: (0, i.default)("text-primary body-1-semi-bold inline-flex h-fit min-h-0 w-fit max-w-full items-center p-0 text-start leading-tight"),
            children: C
        }) : C, b[25] = C, b[26] = x, b[27] = y) : y = b[27], y
    }], 627528)
}, 305231, 913473, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.i(664157);
    var i = e.i(271179),
        n = e.i(191788),
        o = e.i(495854);
    e.i(338018);
    var a = e.i(985129);
    e.i(108399);
    var s = e.i(860231),
        l = e.i(126019),
        f = e.i(198311),
        u = e.i(648684);
    let h = (0, u.cva)("flex w-full cursor-pointer items-center gap-4 rounded-[50px] px-8 outline-none ring-offset-0 transition-colors hover:ring-1 disabled:cursor-default disabled:opacity-60 md:gap-8", {
            variants: {
                theme: {
                    light: "",
                    dark: ""
                },
                size: {
                    small: "h-40",
                    medium: "h-[52px]"
                },
                isSelected: {
                    true: "",
                    false: ""
                },
                showText: {
                    true: "",
                    false: ""
                },
                colorDot: {
                    true: "",
                    false: ""
                },
                image: {
                    true: "",
                    false: ""
                },
                isOpen: {
                    true: "",
                    false: ""
                }
            },
            compoundVariants: [{
                theme: "light",
                isSelected: !0,
                isOpen: !1,
                class: "bg-white ring-1 ring-neutral-400/50 hover:bg-white/90 hover:ring-neutral-300/70"
            }, {
                theme: "light",
                isSelected: !0,
                isOpen: !0,
                class: "bg-white hover:bg-white/90"
            }, {
                theme: "light",
                isSelected: !1,
                class: "hover:bg-white/20 hover:ring-neutral-200"
            }, {
                theme: "dark",
                isSelected: !0,
                class: "bg-neutral-900 text-white"
            }, {
                theme: "dark",
                isSelected: !1,
                class: "bg-neutral-900 text-white hover:ring-neutral-600"
            }, {
                showText: !0,
                colorDot: !1,
                image: !1,
                isOpen: !0,
                class: "min-w-128"
            }, {
                theme: "dark",
                isOpen: !1,
                class: "ring-1 ring-neutral-400"
            }, {
                theme: "dark",
                isOpen: !0,
                class: "ring-1 ring-neutral-600 hover:ring-neutral-600"
            }, {
                theme: "light",
                isOpen: !0,
                class: "ring-1 ring-neutral-200 hover:ring-neutral-200"
            }]
        }),
        c = e => {
            let i, n, u, c, d, p, m, g, y, b, v, w, x, E, A, B = (0, r.c)(58),
                {
                    buttonRef: S,
                    isOpen: j,
                    onToggle: N,
                    onKeyDown: T,
                    size: k,
                    theme: C,
                    colorDot: O,
                    variantNumber: U,
                    showText: L,
                    image: I,
                    currentVariant: R,
                    variants: _,
                    expandedWidth: M,
                    dropdownDirection: D,
                    isSelected: P
                } = e,
                z = void 0 !== P && P,
                F = _.length,
                V = j && "relative flex justify-center overflow-hidden",
                W = j && ("dark" === C ? "bg-neutral-900" : "bg-neutral-50"),
                Y = "up" === D ? "rounded-b-[20px]" : "rounded-t-[20px]";
            B[0] !== V || B[1] !== W || B[2] !== Y ? (i = (0, o.default)(V, W, Y), B[0] = V, B[1] = W, B[2] = Y, B[3] = i) : i = B[3];
            let q = j && ("up" === D ? "mb-[10px] pt-px" : "mt-[10px] pb-px");
            B[4] !== q ? (n = (0, o.default)(q), B[4] = q, B[5] = n) : n = B[5], B[6] !== O || B[7] !== I || B[8] !== j || B[9] !== z || B[10] !== L || B[11] !== k || B[12] !== C ? (u = (0, o.default)("[-webkit-tap-highlight-color:transparent]", h({
                theme: C,
                size: k,
                isSelected: z,
                showText: L,
                colorDot: O,
                image: I,
                isOpen: j
            })), B[6] = O, B[7] = I, B[8] = j, B[9] = z, B[10] = L, B[11] = k, B[12] = C, B[13] = u) : u = B[13];
            let K = j && "number" == typeof M ? Math.max(0, M - 8) : "auto";
            B[14] !== K ? (c = {
                width: K
            }, B[14] = K, B[15] = c) : c = B[15];
            let $ = j ? .04000000000000001 : .006;
            return B[16] === Symbol.for("react.memo_cache_sentinel") ? (d = [.2, .8, .2, 1], B[16] = d) : d = B[16], B[17] !== $ ? (p = {
                duration: $,
                ease: d
            }, B[17] = $, B[18] = p) : p = B[18], B[19] !== O || B[20] !== R || B[21] !== C ? (m = O && (0, t.jsx)(a.default, {
                isDisabled: !0,
                colorName: R.colorName,
                colorClassName: R.colorClassName,
                theme: C
            }), B[19] = O, B[20] = R, B[21] = C, B[22] = m) : m = B[22], B[23] !== m ? (g = (0, t.jsx)("div", {
                className: "flex items-center",
                children: m
            }), B[23] = m, B[24] = g) : g = B[24], B[25] !== F || B[26] !== L || B[27] !== C || B[28] !== U ? (y = U && (0, t.jsxs)(f.motion.div, {
                className: (0, o.default)("body-3 ms-4 whitespace-nowrap text-neutral-500", {
                    "text-neutral-300": "dark" === C
                }),
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: +!L
                },
                transition: {
                    duration: .3,
                    ease: [.2, .8, .2, 1]
                },
                children: [(0, t.jsx)("span", {
                    className: "align-middle",
                    children: "+"
                }), (0, t.jsx)("span", {
                    className: "align-middle",
                    children: F - 1
                })]
            }), B[25] = F, B[26] = L, B[27] = C, B[28] = U, B[29] = y) : y = B[29], B[30] !== R || B[31] !== I ? (b = I && (0, t.jsx)(l.default, {
                src: R.imageUrl,
                alt: R.title,
                width: 32,
                height: 32
            }), B[30] = R, B[31] = I, B[32] = b) : b = B[32], B[33] !== R || B[34] !== j || B[35] !== L ? (v = L && (0, t.jsx)(f.motion.span, {
                initial: {
                    opacity: +!!L,
                    x: L ? 0 : -10
                },
                animate: j || L ? {
                    opacity: 1,
                    x: 0
                } : {
                    opacity: 0,
                    x: -10
                },
                transition: {
                    duration: .5,
                    ease: [.5, .2, .2, 1]
                },
                className: "whitespace-nowrap",
                children: R.title
            }), B[33] = R, B[34] = j, B[35] = L, B[36] = v) : v = B[36], B[37] !== j ? (w = !j && (0, t.jsx)(s.default, {
                name: "chevronDown",
                size: 24,
                color: "current"
            }), B[37] = j, B[38] = w) : w = B[38], B[39] !== S || B[40] !== j || B[41] !== T || B[42] !== N || B[43] !== c || B[44] !== p || B[45] !== g || B[46] !== y || B[47] !== b || B[48] !== v || B[49] !== w || B[50] !== u ? (x = (0, t.jsxs)(f.motion.button, {
                ref: S,
                type: "button",
                className: u,
                onClick: N,
                onKeyDown: T,
                "aria-expanded": j,
                "aria-haspopup": "listbox",
                animate: c,
                transition: p,
                children: [g, y, b, v, w]
            }), B[39] = S, B[40] = j, B[41] = T, B[42] = N, B[43] = c, B[44] = p, B[45] = g, B[46] = y, B[47] = b, B[48] = v, B[49] = w, B[50] = u, B[51] = x) : x = B[51], B[52] !== x || B[53] !== n ? (E = (0, t.jsx)("div", {
                className: n,
                children: x
            }), B[52] = x, B[53] = n, B[54] = E) : E = B[54], B[55] !== E || B[56] !== i ? (A = (0, t.jsx)("div", {
                className: i,
                children: E
            }), B[55] = E, B[56] = i, B[57] = A) : A = B[57], A
        },
        d = e => {
            let i, n, o, f, u, h = (0, r.c)(19),
                {
                    colorDot: c,
                    colorName: d,
                    colorClassName: p,
                    theme: m,
                    isOutOfStock: g,
                    image: y,
                    imageUrl: b,
                    title: v,
                    isPromo: w
                } = e;
            return h[0] !== p || h[1] !== c || h[2] !== d || h[3] !== g || h[4] !== m ? (i = c && (0, t.jsx)("div", {
                className: "flex items-center",
                children: (0, t.jsx)(a.default, {
                    colorName: d,
                    colorClassName: p,
                    theme: m,
                    isDisabled: !0,
                    isOutOfStock: g
                })
            }), h[0] = p, h[1] = c, h[2] = d, h[3] = g, h[4] = m, h[5] = i) : i = h[5], h[6] !== y || h[7] !== b || h[8] !== v ? (n = y && (0, t.jsx)(l.default, {
                src: b,
                alt: v,
                width: 32,
                height: 32
            }), h[6] = y, h[7] = b, h[8] = v, h[9] = n) : n = h[9], h[10] !== v ? (o = (0, t.jsx)("span", {
                className: "whitespace-nowrap",
                children: v
            }), h[10] = v, h[11] = o) : o = h[11], h[12] !== w ? (f = w && (0, t.jsx)("span", {
                className: "text-primary",
                children: (0, t.jsx)(s.default, {
                    name: "label",
                    size: 16,
                    color: "current"
                })
            }), h[12] = w, h[13] = f) : f = h[13], h[14] !== i || h[15] !== n || h[16] !== o || h[17] !== f ? (u = (0, t.jsxs)(t.Fragment, {
                children: [i, n, o, f]
            }), h[14] = i, h[15] = n, h[16] = o, h[17] = f, h[18] = u) : u = h[18], u
        },
        p = e => {
            let i, n, a = (0, r.c)(15),
                {
                    variants: s,
                    theme: l,
                    colorDot: f,
                    image: u,
                    size: h,
                    registerItemRef: c
                } = e;
            if (a[0] !== f || a[1] !== u || a[2] !== c || a[3] !== h || a[4] !== l || a[5] !== s) {
                let e;
                a[7] !== f || a[8] !== u || a[9] !== c || a[10] !== h || a[11] !== l ? (e = e => {
                    let {
                        id: r,
                        isOutOfStock: i,
                        colorName: n,
                        colorClassName: a,
                        imageUrl: s,
                        title: p,
                        isPromo: m
                    } = e;
                    return (0, t.jsx)("li", {
                        children: (0, t.jsx)("button", {
                            ref: e => c ? .(r, e),
                            type: "button",
                            disabled: i,
                            className: (0, o.default)("flex w-auto items-center gap-4 whitespace-nowrap rounded-full px-12 pe-16", {
                                "h-[40px]": "small" === h,
                                "h-[52px]": "medium" === h
                            }),
                            children: (0, t.jsx)(d, {
                                colorDot: f,
                                colorName: n,
                                colorClassName: a,
                                theme: l,
                                isOutOfStock: i,
                                image: u,
                                imageUrl: s,
                                title: p,
                                isPromo: m
                            })
                        })
                    }, `measure-${r}`)
                }, a[7] = f, a[8] = u, a[9] = c, a[10] = h, a[11] = l, a[12] = e) : e = a[12], i = s.map(e), a[0] = f, a[1] = u, a[2] = c, a[3] = h, a[4] = l, a[5] = s, a[6] = i
            } else i = a[6];
            return a[13] !== i ? (n = (0, t.jsx)("div", {
                "aria-hidden": !0,
                className: "fixed -left-[99999px] top-0",
                children: (0, t.jsx)("ul", {
                    className: "flex flex-col gap-8 p-8",
                    children: i
                })
            }), a[13] = i, a[14] = n) : n = a[14], n
        },
        m = e => {
            let i, n, a, s, l, u, c, m, g = (0, r.c)(39),
                {
                    variants: y,
                    theme: b,
                    colorDot: v,
                    image: w,
                    size: x,
                    currentId: E,
                    onSelect: A,
                    registerItemRef: B,
                    dropdownVariants: S,
                    isOpen: j,
                    direction: N
                } = e,
                T = "up" === (void 0 === N ? "down" : N) ? "rounded-t-[32px] border-t" : "rounded-b-[32px] border-b",
                k = "dark" === b ? "border-neutral-600 bg-neutral-900" : "border-neutral-200 bg-neutral-50";
            g[0] !== T || g[1] !== k ? (i = (0, o.default)("relative z-50 flex min-w-128 flex-col gap-8 border-l border-r p-8 px-[9px]", T, k), g[0] = T, g[1] = k, g[2] = i) : i = g[2], g[3] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                opacity: 0
            }, g[3] = n) : n = g[3];
            let C = +!!j;
            g[4] !== C ? (a = {
                opacity: C
            }, g[4] = C, g[5] = a) : a = g[5], g[6] === Symbol.for("react.memo_cache_sentinel") ? (s = [.5, .2, .1, 1], g[6] = s) : s = g[6];
            let O = .06 * !!j;
            g[7] !== O ? (l = {
                duration: .24,
                ease: s,
                delay: O
            }, g[7] = O, g[8] = l) : l = g[8];
            let U = S || y;
            if (g[9] !== v || g[10] !== E || g[11] !== w || g[12] !== j || g[13] !== A || g[14] !== x || g[15] !== U || g[16] !== b) {
                let e;
                g[18] !== v || g[19] !== E || g[20] !== w || g[21] !== j || g[22] !== A || g[23] !== x || g[24] !== b ? (e = (e, r) => {
                    let {
                        id: i,
                        isOutOfStock: n,
                        colorName: a,
                        colorClassName: s,
                        imageUrl: l,
                        title: u,
                        isPromo: c
                    } = e, p = i === E;
                    return (0, t.jsx)(f.motion.li, {
                        "aria-selected": p,
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .06,
                            delay: .05 * r * .2,
                            ease: [.2, .8, .2, 1]
                        },
                        children: (0, t.jsx)("button", {
                            type: "button",
                            disabled: n,
                            onClick: () => A(i),
                            "data-option": !0,
                            className: (0, o.default)(h({
                                theme: b,
                                size: x,
                                isSelected: p,
                                showText: !0,
                                colorDot: v,
                                image: w,
                                isOpen: j
                            }), "[-webkit-tap-highlight-color:transparent] disabled:cursor-default disabled:opacity-60"),
                            children: (0, t.jsx)(d, {
                                colorDot: v,
                                colorName: a,
                                colorClassName: s,
                                theme: b,
                                isOutOfStock: n,
                                image: w,
                                imageUrl: l,
                                title: u,
                                isPromo: c
                            })
                        })
                    }, i)
                }, g[18] = v, g[19] = E, g[20] = w, g[21] = j, g[22] = A, g[23] = x, g[24] = b, g[25] = e) : e = g[25], u = U.map(e), g[9] = v, g[10] = E, g[11] = w, g[12] = j, g[13] = A, g[14] = x, g[15] = U, g[16] = b, g[17] = u
            } else u = g[17];
            return g[26] !== v || g[27] !== w || g[28] !== B || g[29] !== x || g[30] !== b || g[31] !== y ? (c = B && (0, t.jsx)(p, {
                variants: y,
                theme: b,
                colorDot: v,
                image: w,
                size: x,
                registerItemRef: B
            }), g[26] = v, g[27] = w, g[28] = B, g[29] = x, g[30] = b, g[31] = y, g[32] = c) : c = g[32], g[33] !== l || g[34] !== u || g[35] !== c || g[36] !== i || g[37] !== a ? (m = (0, t.jsxs)(f.motion.ul, {
                className: i,
                initial: n,
                animate: a,
                transition: l,
                children: [u, c]
            }), g[33] = l, g[34] = u, g[35] = c, g[36] = i, g[37] = a, g[38] = m) : m = g[38], m
        },
        g = (0, u.cva)("absolute z-30 transition-[padding,border-color] duration-300", {
            variants: {
                theme: {
                    light: "",
                    dark: "border-neutral-600"
                },
                dropdownDirection: {
                    up: "rounded-b-[1.25rem]",
                    down: "rounded-t-[1.25rem]"
                },
                showBorder: {
                    true: "",
                    false: ""
                },
                isOpen: {
                    true: "",
                    false: ""
                },
                size: {
                    small: "",
                    medium: ""
                }
            },
            compoundVariants: [{
                showBorder: !0,
                dropdownDirection: "up",
                theme: "light",
                class: "border-b border-l border-r border-neutral-200 text-neutral-900 shadow-sm"
            }, {
                showBorder: !0,
                dropdownDirection: "down",
                theme: "light",
                class: "border-l border-r border-t border-neutral-200 text-neutral-900 shadow-sm"
            }, {
                showBorder: !0,
                dropdownDirection: "up",
                theme: "dark",
                class: "border-b border-l border-r text-white shadow-sm"
            }, {
                showBorder: !0,
                dropdownDirection: "down",
                theme: "dark",
                class: "border-l border-r border-t text-white shadow-sm"
            }, {
                isOpen: !0,
                theme: "light",
                class: "text-neutral-900"
            }, {
                isOpen: !0,
                theme: "dark",
                class: "text-white"
            }]
        }),
        y = e => {
            let i, a, s, l, u, h, d, p, y, v, w, x, E, A, B, S, j, N, T, k, C, O, U, L, I, R, _, M = (0, r.c)(117),
                {
                    variants: D,
                    currentVariant: P,
                    onChange: z,
                    variantNumber: F,
                    colorDot: V,
                    showText: W,
                    image: Y,
                    size: q,
                    theme: K,
                    promoText: $,
                    dataCsOverrideId: H,
                    forceClose: X
                } = e,
                Z = void 0 !== V && V,
                J = void 0 !== Y && Y,
                G = void 0 === q ? "medium" : q,
                Q = void 0 === K ? "light" : K,
                ee = P ? .id ? ? "",
                [et, er] = (0, n.useState)(ee),
                ei = G || "medium";
            M[0] !== X || M[1] !== ei || M[2] !== D.length ? (i = {
                variantsLength: D.length,
                size: ei,
                forceClose: X
            }, M[0] = X, M[1] = ei, M[2] = D.length, M[3] = i) : i = M[3];
            let {
                isOpen: en,
                setIsOpen: eo,
                showBorder: ea,
                dropdownDirection: es,
                horizontalShift: el,
                containerRef: ef,
                triggerRef: eu,
                listContainerRef: eh,
                initialWidth: ec,
                expandedWidth: ed,
                maxWidth: ep,
                registerItemRef: em,
                focusItemAt: eg
            } = (e => {
                let t, i, o, a, s, l, f, u, h, c, d, p, m, g, y, b, v = (0, r.c)(40),
                    {
                        variantsLength: w,
                        size: x,
                        forceClose: E
                    } = e,
                    [A, B] = (0, n.useState)(!1),
                    [S, j] = (0, n.useState)(!1),
                    [N, T] = (0, n.useState)("down"),
                    [k, C] = (0, n.useState)(0),
                    O = (0, n.useRef)(null),
                    U = (0, n.useRef)(null),
                    L = (0, n.useRef)(null),
                    {
                        maxWidth: I,
                        registerItemRef: R
                    } = (() => {
                        let e, t, i, o, a, s = (0, r.c)(6);
                        s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = new Map, s[0] = e) : e = s[0];
                        let l = (0, n.useRef)(e),
                            [f, u] = (0, n.useState)(0);
                        s[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (e, t) => {
                            t ? l.current.set(e, t) : l.current.delete(e)
                        }, s[1] = t) : t = s[1];
                        let h = t;
                        return s[2] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
                            let e = () => {
                                let e = 0;
                                l.current.forEach(t => {
                                    e = Math.max(e, t.offsetWidth)
                                }), u(e)
                            };
                            e();
                            let t = new ResizeObserver(() => e());
                            return l.current.forEach(e => t.observe(e)), () => t.disconnect()
                        }, o = [], s[2] = i, s[3] = o) : (i = s[2], o = s[3]), (0, n.useLayoutEffect)(i, o), s[4] !== f ? (a = {
                            maxWidth: f,
                            registerItemRef: h
                        }, s[4] = f, s[5] = a) : a = s[5], a
                    })(),
                    [_, M] = (0, n.useState)(0),
                    [D, P] = (0, n.useState)(0);
                v[0] !== E ? (t = () => {
                    E && B(!1)
                }, i = [E], v[0] = E, v[1] = t, v[2] = i) : (t = v[1], i = v[2]), (0, n.useEffect)(t, i), v[3] !== _ || v[4] !== A || v[5] !== I ? (o = () => {
                    if (U.current) {
                        let e = U.current.offsetWidth;
                        0 === _ ? (M(e), P(e)) : A ? P(Math.max(e, I) + 12) : P(_)
                    }
                }, a = [A, I, _], v[3] = _, v[4] = A, v[5] = I, v[6] = o, v[7] = a) : (o = v[6], a = v[7]), (0, n.useLayoutEffect)(o, a), v[8] !== I || v[9] !== x || v[10] !== w ? (s = () => {
                    if (!U.current) return;
                    let e = U.current.getBoundingClientRect(),
                        t = window.innerHeight,
                        r = window.innerWidth,
                        i = e.top,
                        n = t - e.bottom;
                    T(n < w * ("small" === x ? 40 : 52) + 16 && i > n ? "up" : "down");
                    let o = Math.max(e.width, I) + 12,
                        a = e.left + (o + 4);
                    a > r - 75 ? C(r - 75 - a) : C(0)
                }, v[8] = I, v[9] = x, v[10] = w, v[11] = s) : s = v[11], v[12] !== _ || v[13] !== A || v[14] !== I || v[15] !== x || v[16] !== w ? (l = [w, x, A, I, _], v[12] = _, v[13] = A, v[14] = I, v[15] = x, v[16] = w, v[17] = l) : l = v[17], (0, n.useLayoutEffect)(s, l), v[18] === Symbol.for("react.memo_cache_sentinel") ? (f = () => {
                    let e = e => {
                        "Escape" === e.key && B(!1)
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, v[18] = f) : f = v[18], v[19] !== A ? (u = [A], v[19] = A, v[20] = u) : u = v[20], (0, n.useEffect)(f, u), v[21] === Symbol.for("react.memo_cache_sentinel") ? (h = () => {
                    let e = e => {
                        O.current && (O.current.contains(e.target) || B(!1))
                    };
                    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
                }, v[21] = h) : h = v[21], v[22] !== A ? (c = [A], v[22] = A, v[23] = c) : c = v[23], (0, n.useEffect)(h, c), v[24] !== A ? (d = () => {
                    if (A) {
                        let e = setTimeout(() => {
                            j(!0)
                        }, 100);
                        return () => clearTimeout(e)
                    }
                    j(!1)
                }, p = [A], v[24] = A, v[25] = d, v[26] = p) : (d = v[25], p = v[26]), (0, n.useEffect)(d, p), v[27] === Symbol.for("react.memo_cache_sentinel") ? (m = e => {
                    let t = L.current;
                    if (!t) return;
                    let r = t.querySelectorAll("button[data-option]");
                    if (!r.length) return;
                    let i = Math.max(0, Math.min(e, r.length - 1));
                    r[i].focus({
                        preventScroll: !0
                    })
                }, v[27] = m) : m = v[27];
                let z = m;
                return v[28] !== A ? (g = () => {
                    if (A) {
                        let e = window.setTimeout(() => z(0), 120);
                        return () => window.clearTimeout(e)
                    }
                }, y = [A, z], v[28] = A, v[29] = g, v[30] = y) : (g = v[29], y = v[30]), (0, n.useEffect)(g, y), v[31] !== N || v[32] !== D || v[33] !== k || v[34] !== _ || v[35] !== A || v[36] !== I || v[37] !== R || v[38] !== S ? (b = {
                    isOpen: A,
                    setIsOpen: B,
                    showBorder: S,
                    dropdownDirection: N,
                    horizontalShift: k,
                    containerRef: O,
                    triggerRef: U,
                    listContainerRef: L,
                    initialWidth: _,
                    expandedWidth: D,
                    maxWidth: I,
                    registerItemRef: R,
                    focusItemAt: z
                }, v[31] = N, v[32] = D, v[33] = k, v[34] = _, v[35] = A, v[36] = I, v[37] = R, v[38] = S, v[39] = b) : b = v[39], b
            })(i);
            M[4] !== et || M[5] !== en || M[6] !== ee ? (s = () => {
                en || et === ee || er(ee)
            }, a = [en, ee, et], M[4] = et, M[5] = en, M[6] = ee, M[7] = a, M[8] = s) : (a = M[7], s = M[8]), (0, n.useEffect)(s, a), M[9] !== P || M[10] !== et || M[11] !== D ? (l = D.find(e => e.id === et) || P, M[9] = P, M[10] = et, M[11] = D, M[12] = l) : l = M[12];
            let ey = l;
            if (M[13] !== et || M[14] !== D) {
                let e;
                M[16] !== et ? (e = e => e.id !== et, M[16] = et, M[17] = e) : e = M[17], u = D.filter(e), M[13] = et, M[14] = D, M[15] = u
            } else u = M[15];
            let eb = u,
                ev = "up" === es ? 8 : -8;
            M[18] !== ev ? (h = {
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                y: ev
            }, M[18] = ev, M[19] = h) : h = M[19];
            let ew = en ? "auto" : 0,
                ex = en && "down" === es ? 8 : 0,
                eE = en && "up" === es ? 8 : 0;
            M[20] !== ew || M[21] !== ex || M[22] !== eE ? (d = {
                height: ew,
                paddingBottom: ex,
                paddingTop: eE,
                y: 0
            }, M[20] = ew, M[21] = ex, M[22] = eE, M[23] = d) : d = M[23], M[24] === Symbol.for("react.memo_cache_sentinel") ? (p = [.2, .8, .2, 1], M[24] = p) : p = M[24];
            let eA = .08000000000000002 * !!en;
            M[25] !== eA ? (y = {
                duration: .16000000000000003,
                ease: p,
                delay: eA
            }, M[25] = eA, M[26] = y) : y = M[26], M[27] !== h || M[28] !== d || M[29] !== y ? (v = {
                initial: h,
                animate: d,
                transition: y
            }, M[27] = h, M[28] = d, M[29] = y, M[30] = v) : v = M[30];
            let eB = v;
            M[31] !== z || M[32] !== eo || M[33] !== ee ? (w = e => {
                eo(!1), e !== ee && z(e)
            }, M[31] = z, M[32] = eo, M[33] = ee, M[34] = w) : w = M[34];
            let eS = w;
            M[35] !== eg || M[36] !== eh ? (x = e => {
                var t, r, i;
                let n = eh.current;
                if (!n) return;
                let o = n.querySelectorAll("button[data-option]");
                if (!o.length) return;
                let a = Array.from(o).findIndex(b),
                    s = (t = e.key, r = o.length, i = a, "ArrowDown" === t ? i + 1 : "ArrowUp" === t ? i - 1 : "Home" === t ? 0 : "End" === t ? r - 1 : null);
                null !== s && (e.preventDefault(), eg(s))
            }, M[35] = eg, M[36] = eh, M[37] = x) : x = M[37];
            let ej = x;
            M[38] !== et || M[39] !== eg || M[40] !== eS || M[41] !== en || M[42] !== eo ? (E = e => {
                if ("Enter" === e.key || " " === e.key) e.preventDefault(), en ? eS(et) : eo(!0);
                else if ("ArrowDown" === e.key) {
                    e.preventDefault(), en || eo(!0);
                    let t = window.setTimeout(() => eg(0), 40);
                    window.setTimeout(() => window.clearTimeout(t), 60)
                }
            }, M[38] = et, M[39] = eg, M[40] = eS, M[41] = en, M[42] = eo, M[43] = E) : E = M[43];
            let eN = E;
            if (D.length < 2) return null;
            M[44] !== $ ? (A = $ && (0, t.jsx)("div", {
                className: "text-primary body-3",
                children: $
            }), M[44] = $, M[45] = A) : A = M[45];
            let eT = ec || "auto",
                ek = "small" === G ? "38px" : "52px";
            M[46] !== eT || M[47] !== ek ? (B = {
                width: eT,
                height: ek
            }, M[46] = eT, M[47] = ek, M[48] = B) : B = M[48], M[49] !== es || M[50] !== en || M[51] !== ea || M[52] !== G || M[53] !== Q ? (S = g({
                theme: Q,
                dropdownDirection: es,
                showBorder: ea,
                isOpen: en,
                size: G
            }), M[49] = es, M[50] = en, M[51] = ea, M[52] = G, M[53] = Q, M[54] = S) : S = M[54];
            let eC = en ? Math.max(ed, ep) + 4 : ed,
                eO = en ? el : 0;
            M[55] !== eC || M[56] !== eO ? (j = {
                width: eC,
                x: eO
            }, M[55] = eC, M[56] = eO, M[57] = j) : j = M[57], M[58] === Symbol.for("react.memo_cache_sentinel") ? (N = {
                duration: .24,
                ease: [.2, .8, .2, 1]
            }, M[58] = N) : N = M[58], M[59] !== et || M[60] !== eS || M[61] !== en || M[62] !== eo ? (T = () => {
                en ? eS(et) : eo(!0)
            }, M[59] = et, M[60] = eS, M[61] = en, M[62] = eo, M[63] = T) : T = M[63];
            let eU = G || "medium",
                eL = Q || "light",
                eI = void 0 !== F && F && !en,
                eR = en || void 0 !== W && W,
                e_ = ed - 10,
                eM = ee === et;
            M[64] !== Z || M[65] !== ey || M[66] !== es || M[67] !== eN || M[68] !== J || M[69] !== en || M[70] !== T || M[71] !== eU || M[72] !== eL || M[73] !== eI || M[74] !== eR || M[75] !== e_ || M[76] !== eM || M[77] !== eu || M[78] !== D ? (k = (0, t.jsx)(c, {
                buttonRef: eu,
                isOpen: en,
                onToggle: T,
                onKeyDown: eN,
                size: eU,
                theme: eL,
                dropdownDirection: es,
                colorDot: Z,
                variantNumber: eI,
                showText: eR,
                currentVariant: ey,
                variants: D,
                image: J,
                expandedWidth: e_,
                isSelected: eM
            }), M[64] = Z, M[65] = ey, M[66] = es, M[67] = eN, M[68] = J, M[69] = en, M[70] = T, M[71] = eU, M[72] = eL, M[73] = eI, M[74] = eR, M[75] = e_, M[76] = eM, M[77] = eu, M[78] = D, M[79] = k) : k = M[79];
            let eD = "up" === es ? "bottom-full" : "top-full";
            M[80] !== eD ? (C = (0, o.default)("pointer-events-none absolute -left-px z-20 overflow-hidden", eD), M[80] = eD, M[81] = C) : C = M[81];
            let eP = en ? Math.max(ed, ep) + 4 : ed,
                ez = en ? "auto" : "none";
            M[82] !== eP || M[83] !== ez ? (O = {
                width: eP,
                pointerEvents: ez
            }, M[82] = eP, M[83] = ez, M[84] = O) : O = M[84];
            let eF = Q || "light",
                eV = G || "medium";
            return M[85] !== Z || M[86] !== es || M[87] !== eb || M[88] !== eS || M[89] !== J || M[90] !== en || M[91] !== em || M[92] !== eF || M[93] !== eV || M[94] !== ee || M[95] !== D ? (U = (0, t.jsx)(m, {
                variants: D,
                theme: eF,
                colorDot: Z,
                image: J,
                size: eV,
                currentId: ee,
                onSelect: eS,
                registerItemRef: em,
                dropdownVariants: eb,
                isOpen: en,
                direction: es
            }), M[85] = Z, M[86] = es, M[87] = eb, M[88] = eS, M[89] = J, M[90] = en, M[91] = em, M[92] = eF, M[93] = eV, M[94] = ee, M[95] = D, M[96] = U) : U = M[96], M[97] !== eB || M[98] !== ej || M[99] !== eh || M[100] !== C || M[101] !== O || M[102] !== U ? (L = (0, t.jsx)(f.motion.div, {
                ref: eh,
                className: C,
                style: O,
                ...eB,
                onKeyDown: ej,
                children: U
            }), M[97] = eB, M[98] = ej, M[99] = eh, M[100] = C, M[101] = O, M[102] = U, M[103] = L) : L = M[103], M[104] !== ef || M[105] !== S || M[106] !== j || M[107] !== k || M[108] !== L ? (I = (0, t.jsxs)(f.motion.div, {
                ref: ef,
                className: S,
                animate: j,
                transition: N,
                children: [k, L]
            }), M[104] = ef, M[105] = S, M[106] = j, M[107] = k, M[108] = L, M[109] = I) : I = M[109], M[110] !== B || M[111] !== I ? (R = (0, t.jsx)("div", {
                className: "relative",
                style: B,
                children: I
            }), M[110] = B, M[111] = I, M[112] = R) : R = M[112], M[113] !== H || M[114] !== A || M[115] !== R ? (_ = (0, t.jsxs)("div", {
                "data-testid": "variant-selector-swatches",
                className: "relative flex flex-col gap-8",
                "data-cs-override-id": H,
                children: [A, R]
            }), M[113] = H, M[114] = A, M[115] = R, M[116] = _) : _ = M[116], _
        };

    function b(e) {
        return e === document.activeElement
    }
    var v = e.i(767574),
        w = e.i(264516);
    let x = (e, t = !1) => {
            let r = (0, v.default)(e ? .sku ? ? "");
            return {
                colorClassName: r ? .colorClass ? ? "",
                colorName: r ? .variantTitle ? ? "",
                id: e.id,
                title: r ? .variantTitle ? ? e.title,
                isPromo: t || !!e ? .discountLabel,
                isOutOfStock: !e.availableForSale,
                imageUrl: e.image ? .url ? ? ""
            }
        },
        E = (e, t) => e.colorName && t ? { ...e,
            title: t(`variantColors.${(0,w.toCamelCase)(e.title)}`, {
                defaultValue: e.title
            }),
            colorName: t(`variantColors.${(0,w.toCamelCase)(e.colorName)}`, {
                defaultValue: e.colorName
            })
        } : e;
    e.s(["default", 0, e => {
        let n, o, a, s, l, f, u, h, c = (0, r.c)(17);
        c[0] !== e ? ({
            variants: f,
            currentVariant: n,
            onChange: o,
            primaryVariants: a,
            secondaryVariants: l,
            ...s
        } = e, c[0] = e, c[1] = n, c[2] = o, c[3] = a, c[4] = s, c[5] = l, c[6] = f) : (n = c[1], o = c[2], a = c[3], s = c[4], l = c[5], f = c[6]);
        let {
            t: d
        } = (0, i.useTranslation)("common");
        c[7] !== n || c[8] !== o || c[9] !== a || c[10] !== l || c[11] !== d || c[12] !== f ? (u = (e => {
            let {
                variants: t,
                dataCsOverrideId: r,
                secondaryVariants: i,
                primaryVariants: n,
                currentVariant: o,
                onChange: a,
                t: s
            } = e, l = n ? .variants.length || i ? .variants.length ? [...n ? .variants ? .map(e => x(e, !!n.label)) ? ? [], ...i ? .variants ? .map(e => x(e, !1)) ? ? []] : t ? .map(e => x(e)), f = x(o), u = n ? .label || i ? .label || null;
            return {
                variants: (l ? ? []).map(e => E(e, s)),
                currentVariant: E(f, s),
                onChange: e => {
                    let r = ((e, t) => {
                        let {
                            currentVariant: r,
                            variantsFromShopify: i,
                            primaryVariants: n,
                            secondaryVariants: o
                        } = t;
                        return r.id === e ? r : [...n ? .variants || [], ...o ? .variants || [], ...i].find(t => t.id === e)
                    })(e, {
                        currentVariant: o,
                        variantsFromShopify: t ? ? [],
                        primaryVariants: n,
                        secondaryVariants: i
                    });
                    r && a(r)
                },
                promoText: u,
                dataCsOverrideId: r
            }
        })({
            variants: f,
            primaryVariants: a,
            secondaryVariants: l,
            currentVariant: n,
            onChange: o,
            t: d
        }), c[7] = n, c[8] = o, c[9] = a, c[10] = l, c[11] = d, c[12] = f, c[13] = u) : u = c[13];
        let p = u;
        return c[14] !== p || c[15] !== s ? (h = (0, t.jsx)(y, { ...p,
            ...s
        }), c[14] = p, c[15] = s, c[16] = h) : h = c[16], h
    }], 913473), e.s([], 305231)
}]);

//# sourceMappingURL=0_7r4o2sua8yc.js.map