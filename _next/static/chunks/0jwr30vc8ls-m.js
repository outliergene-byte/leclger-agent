(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 221168, (t, e, r) => {
    var i = {
            675: function(t, e) {
                "use strict";
                e.byteLength = function(t) {
                    var e = f(t),
                        r = e[0],
                        i = e[1];
                    return (r + i) * 3 / 4 - i
                }, e.toByteArray = function(t) {
                    var e, r, o = f(t),
                        a = o[0],
                        s = o[1],
                        u = new n((a + s) * 3 / 4 - s),
                        l = 0,
                        h = s > 0 ? a - 4 : a;
                    for (r = 0; r < h; r += 4) e = i[t.charCodeAt(r)] << 18 | i[t.charCodeAt(r + 1)] << 12 | i[t.charCodeAt(r + 2)] << 6 | i[t.charCodeAt(r + 3)], u[l++] = e >> 16 & 255, u[l++] = e >> 8 & 255, u[l++] = 255 & e;
                    return 2 === s && (e = i[t.charCodeAt(r)] << 2 | i[t.charCodeAt(r + 1)] >> 4, u[l++] = 255 & e), 1 === s && (e = i[t.charCodeAt(r)] << 10 | i[t.charCodeAt(r + 1)] << 4 | i[t.charCodeAt(r + 2)] >> 2, u[l++] = e >> 8 & 255, u[l++] = 255 & e), u
                }, e.fromByteArray = function(t) {
                    for (var e, i = t.length, n = i % 3, o = [], a = 0, s = i - n; a < s; a += 16383) o.push(function(t, e, i) {
                        for (var n, o = [], a = e; a < i; a += 3) n = (t[a] << 16 & 0xff0000) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), o.push(r[n >> 18 & 63] + r[n >> 12 & 63] + r[n >> 6 & 63] + r[63 & n]);
                        return o.join("")
                    }(t, a, a + 16383 > s ? s : a + 16383));
                    return 1 === n ? o.push(r[(e = t[i - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === n && o.push(r[(e = (t[i - 2] << 8) + t[i - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), o.join("")
                };
                for (var r = [], i = [], n = "u" > typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = o.length; a < s; ++a) r[a] = o[a], i[o.charCodeAt(a)] = a;

                function f(t) {
                    var e = t.length;
                    if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                    var r = t.indexOf("="); - 1 === r && (r = e);
                    var i = r === e ? 0 : 4 - r % 4;
                    return [r, i]
                }
                i[45] = 62, i[95] = 63
            },
            72: function(t, e, r) {
                "use strict";
                var i = r(675),
                    n = r(783),
                    o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                function a(t) {
                    if (t > 0x7fffffff) throw RangeError('The value "' + t + '" is invalid for option "size"');
                    var e = new Uint8Array(t);
                    return Object.setPrototypeOf(e, s.prototype), e
                }

                function s(t, e, r) {
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                        return l(t)
                    }
                    return f(t, e, r)
                }

                function f(t, e, r) {
                    if ("string" == typeof t) {
                        var i = t,
                            n = e;
                        if (("string" != typeof n || "" === n) && (n = "utf8"), !s.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                        var o = 0 | d(i, n),
                            f = a(o),
                            u = f.write(i, n);
                        return u !== o && (f = f.slice(0, u)), f
                    }
                    if (ArrayBuffer.isView(t)) return h(t);
                    if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                    if (C(t, ArrayBuffer) || t && C(t.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (C(t, SharedArrayBuffer) || t && C(t.buffer, SharedArrayBuffer))) return function(t, e, r) {
                        var i;
                        if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                        if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                        return Object.setPrototypeOf(i = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), s.prototype), i
                    }(t, e, r);
                    if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                    var l = t.valueOf && t.valueOf();
                    if (null != l && l !== t) return s.from(l, e, r);
                    var p = function(t) {
                        if (s.isBuffer(t)) {
                            var e = 0 | c(t.length),
                                r = a(e);
                            return 0 === r.length || t.copy(r, 0, 0, e), r
                        }
                        return void 0 !== t.length ? "number" != typeof t.length || function(t) {
                            return t != t
                        }(t.length) ? a(0) : h(t) : "Buffer" === t.type && Array.isArray(t.data) ? h(t.data) : void 0
                    }(t);
                    if (p) return p;
                    if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return s.from(t[Symbol.toPrimitive]("string"), e, r);
                    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                }

                function u(t) {
                    if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                    if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
                }

                function l(t) {
                    return u(t), a(t < 0 ? 0 : 0 | c(t))
                }

                function h(t) {
                    for (var e = t.length < 0 ? 0 : 0 | c(t.length), r = a(e), i = 0; i < e; i += 1) r[i] = 255 & t[i];
                    return r
                }
                e.Buffer = s, e.SlowBuffer = function(t) {
                    return +t != t && (t = 0), s.alloc(+t)
                }, e.INSPECT_MAX_BYTES = 50, e.kMaxLength = 0x7fffffff, s.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var t = new Uint8Array(1),
                            e = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                    } catch (t) {
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
                }), s.poolSize = 8192, s.from = function(t, e, r) {
                    return f(t, e, r)
                }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(t, e, r) {
                    return (u(t), t <= 0) ? a(t) : void 0 !== e ? "string" == typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t)
                }, s.allocUnsafe = function(t) {
                    return l(t)
                }, s.allocUnsafeSlow = function(t) {
                    return l(t)
                };

                function c(t) {
                    if (t >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                    return 0 | t
                }

                function d(t, e) {
                    if (s.isBuffer(t)) return t.length;
                    if (ArrayBuffer.isView(t) || C(t, ArrayBuffer)) return t.byteLength;
                    if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                    var r = t.length,
                        i = arguments.length > 2 && !0 === arguments[2];
                    if (!i && 0 === r) return 0;
                    for (var n = !1;;) switch (e) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return S(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return B(t).length;
                        default:
                            if (n) return i ? -1 : S(t).length;
                            e = ("" + e).toLowerCase(), n = !0
                    }
                }

                function p(t, e, r) {
                    var n, o, a, s = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0))) return "";
                    for (t || (t = "utf8");;) switch (t) {
                        case "hex":
                            return function(t, e, r) {
                                var i = t.length;
                                (!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i);
                                for (var n = "", o = e; o < r; ++o) n += T[t[o]];
                                return n
                            }(this, e, r);
                        case "utf8":
                        case "utf-8":
                            return b(this, e, r);
                        case "ascii":
                            return function(t, e, r) {
                                var i = "";
                                r = Math.min(t.length, r);
                                for (var n = e; n < r; ++n) i += String.fromCharCode(127 & t[n]);
                                return i
                            }(this, e, r);
                        case "latin1":
                        case "binary":
                            return function(t, e, r) {
                                var i = "";
                                r = Math.min(t.length, r);
                                for (var n = e; n < r; ++n) i += String.fromCharCode(t[n]);
                                return i
                            }(this, e, r);
                        case "base64":
                            return n = this, o = e, a = r, 0 === o && a === n.length ? i.fromByteArray(n) : i.fromByteArray(n.slice(o, a));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function(t, e, r) {
                                for (var i = t.slice(e, r), n = "", o = 0; o < i.length; o += 2) n += String.fromCharCode(i[o] + 256 * i[o + 1]);
                                return n
                            }(this, e, r);
                        default:
                            if (s) throw TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), s = !0
                    }
                }

                function y(t, e, r) {
                    var i = t[e];
                    t[e] = t[r], t[r] = i
                }

                function g(t, e, r, i, n) {
                    var o;
                    if (0 === t.length) return -1;
                    if ("string" == typeof r ? (i = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (o = r *= 1) != o && (r = n ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length)
                        if (n) return -1;
                        else r = t.length - 1;
                    else if (r < 0)
                        if (!n) return -1;
                        else r = 0;
                    if ("string" == typeof e && (e = s.from(e, i)), s.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, i, n);
                    if ("number" == typeof e) {
                        if (e &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                            if (n) return Uint8Array.prototype.indexOf.call(t, e, r);
                            else return Uint8Array.prototype.lastIndexOf.call(t, e, r);
                        return m(t, [e], r, i, n)
                    }
                    throw TypeError("val must be string, number or Buffer")
                }

                function m(t, e, r, i, n) {
                    var o, a = 1,
                        s = t.length,
                        f = e.length;
                    if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        a = 2, s /= 2, f /= 2, r /= 2
                    }

                    function u(t, e) {
                        return 1 === a ? t[e] : t.readUInt16BE(e * a)
                    }
                    if (n) {
                        var l = -1;
                        for (o = r; o < s; o++)
                            if (u(t, o) === u(e, -1 === l ? 0 : o - l)) {
                                if (-1 === l && (l = o), o - l + 1 === f) return l * a
                            } else -1 !== l && (o -= o - l), l = -1
                    } else
                        for (r + f > s && (r = s - f), o = r; o >= 0; o--) {
                            for (var h = !0, c = 0; c < f; c++)
                                if (u(t, o + c) !== u(e, c)) {
                                    h = !1;
                                    break
                                }
                            if (h) return o
                        }
                    return -1
                }
                s.isBuffer = function(t) {
                    return null != t && !0 === t._isBuffer && t !== s.prototype
                }, s.compare = function(t, e) {
                    if (C(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), C(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(t) || !s.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (t === e) return 0;
                    for (var r = t.length, i = e.length, n = 0, o = Math.min(r, i); n < o; ++n)
                        if (t[n] !== e[n]) {
                            r = t[n], i = e[n];
                            break
                        }
                    return r < i ? -1 : +(i < r)
                }, s.isEncoding = function(t) {
                    switch (String(t).toLowerCase()) {
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
                }, s.concat = function(t, e) {
                    if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return s.alloc(0);
                    if (void 0 === e)
                        for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                    var r, i = s.allocUnsafe(e),
                        n = 0;
                    for (r = 0; r < t.length; ++r) {
                        var o = t[r];
                        if (C(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o)) throw TypeError('"list" argument must be an Array of Buffers');
                        o.copy(i, n), n += o.length
                    }
                    return i
                }, s.byteLength = d, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
                    var t = this.length;
                    if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                    return this
                }, s.prototype.swap32 = function() {
                    var t = this.length;
                    if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                    return this
                }, s.prototype.swap64 = function() {
                    var t = this.length;
                    if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                    return this
                }, s.prototype.toString = function() {
                    var t = this.length;
                    return 0 === t ? "" : 0 == arguments.length ? b(this, 0, t) : p.apply(this, arguments)
                }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(t) {
                    if (!s.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                    return this === t || 0 === s.compare(this, t)
                }, s.prototype.inspect = function() {
                    var t = "",
                        r = e.INSPECT_MAX_BYTES;
                    return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
                }, o && (s.prototype[o] = s.prototype.inspect), s.prototype.compare = function(t, e, r, i, n) {
                    if (C(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                    if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), e < 0 || r > t.length || i < 0 || n > this.length) throw RangeError("out of range index");
                    if (i >= n && e >= r) return 0;
                    if (i >= n) return -1;
                    if (e >= r) return 1;
                    if (e >>>= 0, r >>>= 0, i >>>= 0, n >>>= 0, this === t) return 0;
                    for (var o = n - i, a = r - e, f = Math.min(o, a), u = this.slice(i, n), l = t.slice(e, r), h = 0; h < f; ++h)
                        if (u[h] !== l[h]) {
                            o = u[h], a = l[h];
                            break
                        }
                    return o < a ? -1 : +(a < o)
                }, s.prototype.includes = function(t, e, r) {
                    return -1 !== this.indexOf(t, e, r)
                }, s.prototype.indexOf = function(t, e, r) {
                    return g(this, t, e, r, !0)
                }, s.prototype.lastIndexOf = function(t, e, r) {
                    return g(this, t, e, r, !1)
                };

                function b(t, e, r) {
                    r = Math.min(t.length, r);
                    for (var i = [], n = e; n < r;) {
                        var o, a, s, f, u = t[n],
                            l = null,
                            h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                        if (n + h <= r) switch (h) {
                            case 1:
                                u < 128 && (l = u);
                                break;
                            case 2:
                                (192 & (o = t[n + 1])) == 128 && (f = (31 & u) << 6 | 63 & o) > 127 && (l = f);
                                break;
                            case 3:
                                o = t[n + 1], a = t[n + 2], (192 & o) == 128 && (192 & a) == 128 && (f = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (f < 55296 || f > 57343) && (l = f);
                                break;
                            case 4:
                                o = t[n + 1], a = t[n + 2], s = t[n + 3], (192 & o) == 128 && (192 & a) == 128 && (192 & s) == 128 && (f = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && f < 1114112 && (l = f)
                        }
                        null === l ? (l = 65533, h = 1) : l > 65535 && (l -= 65536, i.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), i.push(l), n += h
                    }
                    var c = i,
                        d = c.length;
                    if (d <= 4096) return String.fromCharCode.apply(String, c);
                    for (var p = "", y = 0; y < d;) p += String.fromCharCode.apply(String, c.slice(y, y += 4096));
                    return p
                }

                function v(t, e, r) {
                    if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                    if (t + e > r) throw RangeError("Trying to access beyond buffer length")
                }

                function w(t, e, r, i, n, o) {
                    if (!s.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                    if (e > n || e < o) throw RangeError('"value" argument is out of bounds');
                    if (r + i > t.length) throw RangeError("Index out of range")
                }

                function x(t, e, r, i, n, o) {
                    if (r + i > t.length || r < 0) throw RangeError("Index out of range")
                }

                function E(t, e, r, i, o) {
                    return e *= 1, r >>>= 0, o || x(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(t, e, r, i, 23, 4), r + 4
                }

                function A(t, e, r, i, o) {
                    return e *= 1, r >>>= 0, o || x(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(t, e, r, i, 52, 8), r + 8
                }
                s.prototype.write = function(t, e, r, i) {
                    if (void 0 === e) i = "utf8", r = this.length, e = 0;
                    else if (void 0 === r && "string" == typeof e) i = e, r = this.length, e = 0;
                    else if (isFinite(e)) e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0);
                    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    var n, o, a, s, f, u, l, h, c = this.length - e;
                    if ((void 0 === r || r > c) && (r = c), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var d = !1;;) switch (i) {
                        case "hex":
                            return function(t, e, r, i) {
                                r = Number(r) || 0;
                                var n = t.length - r;
                                i ? (i = Number(i)) > n && (i = n) : i = n;
                                var o = e.length;
                                i > o / 2 && (i = o / 2);
                                for (var a = 0; a < i; ++a) {
                                    var s, f = parseInt(e.substr(2 * a, 2), 16);
                                    if ((s = f) != s) break;
                                    t[r + a] = f
                                }
                                return a
                            }(this, t, e, r);
                        case "utf8":
                        case "utf-8":
                            return n = e, o = r, O(S(t, this.length - n), this, n, o);
                        case "ascii":
                            return a = e, s = r, O(_(t), this, a, s);
                        case "latin1":
                        case "binary":
                            return function(t, e, r, i) {
                                return O(_(e), t, r, i)
                            }(this, t, e, r);
                        case "base64":
                            return f = e, u = r, O(B(t), this, f, u);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return l = e, h = r, O(function(t, e) {
                                for (var r, i, n = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) i = (r = t.charCodeAt(o)) >> 8, n.push(r % 256), n.push(i);
                                return n
                            }(t, this.length - l), this, l, h);
                        default:
                            if (d) throw TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(), d = !0
                    }
                }, s.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }, s.prototype.slice = function(t, e) {
                    var r = this.length;
                    t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                    var i = this.subarray(t, e);
                    return Object.setPrototypeOf(i, s.prototype), i
                }, s.prototype.readUIntLE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || v(t, e, this.length);
                    for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256);) i += this[t + o] * n;
                    return i
                }, s.prototype.readUIntBE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || v(t, e, this.length);
                    for (var i = this[t + --e], n = 1; e > 0 && (n *= 256);) i += this[t + --e] * n;
                    return i
                }, s.prototype.readUInt8 = function(t, e) {
                    return t >>>= 0, e || v(t, 1, this.length), this[t]
                }, s.prototype.readUInt16LE = function(t, e) {
                    return t >>>= 0, e || v(t, 2, this.length), this[t] | this[t + 1] << 8
                }, s.prototype.readUInt16BE = function(t, e) {
                    return t >>>= 0, e || v(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, s.prototype.readUInt32LE = function(t, e) {
                    return t >>>= 0, e || v(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 0x1000000 * this[t + 3]
                }, s.prototype.readUInt32BE = function(t, e) {
                    return t >>>= 0, e || v(t, 4, this.length), 0x1000000 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, s.prototype.readIntLE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || v(t, e, this.length);
                    for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256);) i += this[t + o] * n;
                    return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)), i
                }, s.prototype.readIntBE = function(t, e, r) {
                    t >>>= 0, e >>>= 0, r || v(t, e, this.length);
                    for (var i = e, n = 1, o = this[t + --i]; i > 0 && (n *= 256);) o += this[t + --i] * n;
                    return o >= (n *= 128) && (o -= Math.pow(2, 8 * e)), o
                }, s.prototype.readInt8 = function(t, e) {
                    return (t >>>= 0, e || v(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
                }, s.prototype.readInt16LE = function(t, e) {
                    t >>>= 0, e || v(t, 2, this.length);
                    var r = this[t] | this[t + 1] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, s.prototype.readInt16BE = function(t, e) {
                    t >>>= 0, e || v(t, 2, this.length);
                    var r = this[t + 1] | this[t] << 8;
                    return 32768 & r ? 0xffff0000 | r : r
                }, s.prototype.readInt32LE = function(t, e) {
                    return t >>>= 0, e || v(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, s.prototype.readInt32BE = function(t, e) {
                    return t >>>= 0, e || v(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, s.prototype.readFloatLE = function(t, e) {
                    return t >>>= 0, e || v(t, 4, this.length), n.read(this, t, !0, 23, 4)
                }, s.prototype.readFloatBE = function(t, e) {
                    return t >>>= 0, e || v(t, 4, this.length), n.read(this, t, !1, 23, 4)
                }, s.prototype.readDoubleLE = function(t, e) {
                    return t >>>= 0, e || v(t, 8, this.length), n.read(this, t, !0, 52, 8)
                }, s.prototype.readDoubleBE = function(t, e) {
                    return t >>>= 0, e || v(t, 8, this.length), n.read(this, t, !1, 52, 8)
                }, s.prototype.writeUIntLE = function(t, e, r, i) {
                    if (t *= 1, e >>>= 0, r >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r) - 1;
                        w(this, t, e, r, n, 0)
                    }
                    var o = 1,
                        a = 0;
                    for (this[e] = 255 & t; ++a < r && (o *= 256);) this[e + a] = t / o & 255;
                    return e + r
                }, s.prototype.writeUIntBE = function(t, e, r, i) {
                    if (t *= 1, e >>>= 0, r >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r) - 1;
                        w(this, t, e, r, n, 0)
                    }
                    var o = r - 1,
                        a = 1;
                    for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) this[e + o] = t / a & 255;
                    return e + r
                }, s.prototype.writeUInt8 = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                }, s.prototype.writeUInt16LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, s.prototype.writeUInt16BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, s.prototype.writeUInt32LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0xffffffff, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                }, s.prototype.writeUInt32BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0xffffffff, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, s.prototype.writeIntLE = function(t, e, r, i) {
                    if (t *= 1, e >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r - 1);
                        w(this, t, e, r, n - 1, -n)
                    }
                    var o = 0,
                        a = 1,
                        s = 0;
                    for (this[e] = 255 & t; ++o < r && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / a | 0) - s & 255;
                    return e + r
                }, s.prototype.writeIntBE = function(t, e, r, i) {
                    if (t *= 1, e >>>= 0, !i) {
                        var n = Math.pow(2, 8 * r - 1);
                        w(this, t, e, r, n - 1, -n)
                    }
                    var o = r - 1,
                        a = 1,
                        s = 0;
                    for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / a | 0) - s & 255;
                    return e + r
                }, s.prototype.writeInt8 = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, s.prototype.writeInt16LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                }, s.prototype.writeInt16BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                }, s.prototype.writeInt32LE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0x7fffffff, -0x80000000), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                }, s.prototype.writeInt32BE = function(t, e, r) {
                    return t *= 1, e >>>= 0, r || w(this, t, e, 4, 0x7fffffff, -0x80000000), t < 0 && (t = 0xffffffff + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                }, s.prototype.writeFloatLE = function(t, e, r) {
                    return E(this, t, e, !0, r)
                }, s.prototype.writeFloatBE = function(t, e, r) {
                    return E(this, t, e, !1, r)
                }, s.prototype.writeDoubleLE = function(t, e, r) {
                    return A(this, t, e, !0, r)
                }, s.prototype.writeDoubleBE = function(t, e, r) {
                    return A(this, t, e, !1, r)
                }, s.prototype.copy = function(t, e, r, i) {
                    if (!s.isBuffer(t)) throw TypeError("argument should be a Buffer");
                    if (r || (r = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < r && (i = r), i === r || 0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                    if (i < 0) throw RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), t.length - e < i - r && (i = t.length - e + r);
                    var n = i - r;
                    if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, i);
                    else if (this === t && r < e && e < i)
                        for (var o = n - 1; o >= 0; --o) t[o + e] = this[o + r];
                    else Uint8Array.prototype.set.call(t, this.subarray(r, i), e);
                    return n
                }, s.prototype.fill = function(t, e, r, i) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (i = e, e = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw TypeError("encoding must be a string");
                        if ("string" == typeof i && !s.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                        if (1 === t.length) {
                            var n, o = t.charCodeAt(0);
                            ("utf8" === i && o < 128 || "latin1" === i) && (t = o)
                        }
                    } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                    if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                    if (r <= e) return this;
                    if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                        for (n = e; n < r; ++n) this[n] = t;
                    else {
                        var a = s.isBuffer(t) ? t : s.from(t, i),
                            f = a.length;
                        if (0 === f) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                        for (n = 0; n < r - e; ++n) this[n + e] = a[n % f]
                    }
                    return this
                };
                var j = /[^+/0-9A-Za-z-_]/g;

                function S(t, e) {
                    e = e || 1 / 0;
                    for (var r, i = t.length, n = null, o = [], a = 0; a < i; ++a) {
                        if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                            if (!n) {
                                if (r > 56319 || a + 1 === i) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                n = r;
                                continue
                            }
                            if (r < 56320) {
                                (e -= 3) > -1 && o.push(239, 191, 189), n = r;
                                continue
                            }
                            r = (n - 55296 << 10 | r - 56320) + 65536
                        } else n && (e -= 3) > -1 && o.push(239, 191, 189);
                        if (n = null, r < 128) {
                            if ((e -= 1) < 0) break;
                            o.push(r)
                        } else if (r < 2048) {
                            if ((e -= 2) < 0) break;
                            o.push(r >> 6 | 192, 63 & r | 128)
                        } else if (r < 65536) {
                            if ((e -= 3) < 0) break;
                            o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                        } else if (r < 1114112) {
                            if ((e -= 4) < 0) break;
                            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                        } else throw Error("Invalid code point")
                    }
                    return o
                }

                function _(t) {
                    for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                    return e
                }

                function B(t) {
                    return i.toByteArray(function(t) {
                        if ((t = (t = t.split("=")[0]).trim().replace(j, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function O(t, e, r, i) {
                    for (var n = 0; n < i && !(n + r >= e.length) && !(n >= t.length); ++n) e[n + r] = t[n];
                    return n
                }

                function C(t, e) {
                    return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                }
                var T = function() {
                    for (var t = "0123456789abcdef", e = Array(256), r = 0; r < 16; ++r)
                        for (var i = 16 * r, n = 0; n < 16; ++n) e[i + n] = t[r] + t[n];
                    return e
                }()
            },
            783: function(t, e) {
                e.read = function(t, e, r, i, n) {
                    var o, a, s = 8 * n - i - 1,
                        f = (1 << s) - 1,
                        u = f >> 1,
                        l = -7,
                        h = r ? n - 1 : 0,
                        c = r ? -1 : 1,
                        d = t[e + h];
                    for (h += c, o = d & (1 << -l) - 1, d >>= -l, l += s; l > 0; o = 256 * o + t[e + h], h += c, l -= 8);
                    for (a = o & (1 << -l) - 1, o >>= -l, l += i; l > 0; a = 256 * a + t[e + h], h += c, l -= 8);
                    if (0 === o) o = 1 - u;
                    else {
                        if (o === f) return a ? NaN : 1 / 0 * (d ? -1 : 1);
                        a += Math.pow(2, i), o -= u
                    }
                    return (d ? -1 : 1) * a * Math.pow(2, o - i)
                }, e.write = function(t, e, r, i, n, o) {
                    var a, s, f, u = 8 * o - n - 1,
                        l = (1 << u) - 1,
                        h = l >> 1,
                        c = 5960464477539062e-23 * (23 === n),
                        d = i ? 0 : o - 1,
                        p = i ? 1 : -1,
                        y = +(e < 0 || 0 === e && 1 / e < 0);
                    for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (s = +!!isNaN(e), a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -a)) < 1 && (a--, f *= 2), a + h >= 1 ? e += c / f : e += c * Math.pow(2, 1 - h), e * f >= 2 && (a++, f /= 2), a + h >= l ? (s = 0, a = l) : a + h >= 1 ? (s = (e * f - 1) * Math.pow(2, n), a += h) : (s = e * Math.pow(2, h - 1) * Math.pow(2, n), a = 0)); n >= 8; t[r + d] = 255 & s, d += p, s /= 256, n -= 8);
                    for (a = a << n | s, u += n; u > 0; t[r + d] = 255 & a, d += p, a /= 256, u -= 8);
                    t[r + d - p] |= 128 * y
                }
            }
        },
        n = {};

    function o(t) {
        var e = n[t];
        if (void 0 !== e) return e.exports;
        var r = n[t] = {
                exports: {}
            },
            a = !0;
        try {
            i[t](r, r.exports, o), a = !1
        } finally {
            a && delete n[t]
        }
        return r.exports
    }
    o.ab = "/ROOT/node_modules/next/dist/compiled/buffer/", e.exports = o(72)
}, 161592, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "LoadableContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = t.r(731640)._(t.r(191788)).default.createContext(null)
}, 852414, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return c
        }
    });
    let i = t.r(731640)._(t.r(191788)),
        n = t.r(161592),
        o = [],
        a = [],
        s = !1;

    function f(t) {
        let e = t(),
            r = {
                loading: !0,
                loaded: null,
                error: null
            };
        return r.promise = e.then(t => (r.loading = !1, r.loaded = t, t)).catch(t => {
            throw r.loading = !1, r.error = t, t
        }), r
    }
    class u {
        constructor(t, e) {
            this._loadFn = t, this._opts = e, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
        }
        promise() {
            return this._res.promise
        }
        retry() {
            this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                pastDelay: !1,
                timedOut: !1
            };
            let {
                _res: t,
                _opts: e
            } = this;
            t.loading && ("number" == typeof e.delay && (0 === e.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                this._update({
                    pastDelay: !0
                })
            }, e.delay)), "number" == typeof e.timeout && (this._timeout = setTimeout(() => {
                this._update({
                    timedOut: !0
                })
            }, e.timeout))), this._res.promise.then(() => {
                this._update({}), this._clearTimeouts()
            }).catch(t => {
                this._update({}), this._clearTimeouts()
            }), this._update({})
        }
        _update(t) {
            this._state = { ...this._state,
                error: this._res.error,
                loaded: this._res.loaded,
                loading: this._res.loading,
                ...t
            }, this._callbacks.forEach(t => t())
        }
        _clearTimeouts() {
            clearTimeout(this._delay), clearTimeout(this._timeout)
        }
        getCurrentValue() {
            return this._state
        }
        subscribe(t) {
            return this._callbacks.add(t), () => {
                this._callbacks.delete(t)
            }
        }
    }

    function l(e) {
        return function(e, r) {
            let f = Object.assign({
                    loader: null,
                    loading: null,
                    delay: 200,
                    timeout: null,
                    webpack: null,
                    modules: null
                }, r),
                l = null;

            function h() {
                if (!l) {
                    let t = new u(e, f);
                    l = {
                        getCurrentValue: t.getCurrentValue.bind(t),
                        subscribe: t.subscribe.bind(t),
                        retry: t.retry.bind(t),
                        promise: t.promise.bind(t)
                    }
                }
                return l.promise()
            }
            if ("u" < typeof window && o.push(h), !s && "u" > typeof window) {
                let e = f.webpack && "function" == typeof t.t.resolveWeak ? f.webpack() : f.modules;
                e && a.push(t => {
                    for (let r of e)
                        if (t.includes(r)) return h()
                })
            }

            function c(t, e) {
                let r;
                h(), (r = i.default.useContext(n.LoadableContext)) && Array.isArray(f.modules) && f.modules.forEach(t => {
                    r(t)
                });
                let o = i.default.useSyncExternalStore(l.subscribe, l.getCurrentValue, l.getCurrentValue);
                return i.default.useImperativeHandle(e, () => ({
                    retry: l.retry
                }), []), i.default.useMemo(() => {
                    var e;
                    return o.loading || o.error ? i.default.createElement(f.loading, {
                        isLoading: o.loading,
                        pastDelay: o.pastDelay,
                        timedOut: o.timedOut,
                        error: o.error,
                        retry: l.retry
                    }) : o.loaded ? i.default.createElement((e = o.loaded) && e.default ? e.default : e, t) : null
                }, [t, o])
            }
            return c.preload = () => h(), c.displayName = "LoadableComponent", i.default.forwardRef(c)
        }(f, e)
    }

    function h(t, e) {
        let r = [];
        for (; t.length;) {
            let i = t.pop();
            r.push(i(e))
        }
        return Promise.all(r).then(() => {
            if (t.length) return h(t, e)
        })
    }
    l.preloadAll = () => new Promise((t, e) => {
        h(o).then(t, e)
    }), l.preloadReady = (t = []) => new Promise(e => {
        let r = () => (s = !0, e());
        h(a, t).then(r, r)
    }), "u" > typeof window && (window.__NEXT_PRELOADREADY = l.preloadReady);
    let c = l
}, 425167, (t, e, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        default: function() {
            return h
        },
        noSSR: function() {
            return l
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let o = t.r(731640),
        a = t.r(391398);
    t.r(191788);
    let s = o._(t.r(852414)),
        f = "u" < typeof window;

    function u(t) {
        return {
            default: t ? .default || t
        }
    }

    function l(t, e) {
        if (delete e.webpack, delete e.modules, !f) return t(e);
        let r = e.loading;
        return () => (0, a.jsx)(r, {
            error: null,
            isLoading: !0,
            pastDelay: !1,
            timedOut: !1
        })
    }

    function h(t, e) {
        let r = s.default,
            i = {
                loading: ({
                    error: t,
                    isLoading: e,
                    pastDelay: r
                }) => null
            };
        t instanceof Promise ? i.loader = () => t : "function" == typeof t ? i.loader = t : "object" == typeof t && (i = { ...i,
            ...t
        });
        let n = (i = { ...i,
            ...e
        }).loader;
        return (i.loadableGenerated && (i = { ...i,
            ...i.loadableGenerated
        }, delete i.loadableGenerated), "boolean" != typeof i.ssr || i.ssr) ? r({ ...i,
            loader: () => null != n ? n().then(u) : Promise.resolve(u(() => null))
        }) : (delete i.webpack, delete i.modules, l(r, i))
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), e.exports = r.default)
}, 168489, (t, e, r) => {
    e.exports = t.r(425167)
}, 725524, 998109, t => {
    "use strict";
    var e = t.i(391398),
        r = t.i(261576);
    t.i(664157);
    var i = t.i(271179),
        n = t.i(767574),
        o = t.i(264516),
        a = t.i(495854);
    t.i(338018);
    var s = t.i(985129),
        f = t.i(191788),
        u = t.i(608404),
        l = t.i(760360),
        h = t.i(128708),
        c = t.i(196061),
        d = t.i(774664),
        p = t.i(472381),
        y = t.i(709769);
    let g = (0, d.forwardRefWithAs)(function(t, e) {
        let r = `headlessui-control-${(0,f.useId)()}`,
            [i, n] = (0, y.useLabels)(),
            [o, a] = (0, p.useDescriptions)(),
            s = (0, l.useDisabled)(),
            {
                disabled: g = s || !1,
                ...m
            } = t,
            b = (0, u.useSlot)({
                disabled: g
            }),
            v = (0, d.useRender)();
        return f.default.createElement(l.DisabledProvider, {
            value: g
        }, f.default.createElement(n, {
            value: i
        }, f.default.createElement(a, {
            value: o
        }, f.default.createElement(c.IdProvider, {
            id: r
        }, v({
            ourProps: {
                ref: e,
                disabled: g || void 0,
                "aria-disabled": g || void 0
            },
            theirProps: { ...m,
                children: f.default.createElement(h.FormFieldsProvider, null, "function" == typeof m.children ? m.children(b) : m.children)
            },
            slot: b,
            defaultTag: "div",
            name: "Field"
        })))))
    });
    t.s(["Field", 0, g], 998109);
    var m = t.i(978722);
    let b = t => {
            let f, u, l, h = (0, r.c)(18),
                {
                    variants: c,
                    onChange: d,
                    currentVariant: p,
                    theme: y,
                    disableOutOfStock: b
                } = t,
                v = void 0 !== b && b,
                {
                    t: w
                } = (0, i.useTranslation)("common");
            h[0] !== p || h[1] !== d ? (f = (t, e) => {
                e || t.id !== p.id || d(t)
            }, h[0] = p, h[1] = d, h[2] = f) : f = h[2];
            let x = f;
            if (h[3] !== v || h[4] !== x || h[5] !== w || h[6] !== y || h[7] !== c) {
                let t;
                h[9] !== v || h[10] !== x || h[11] !== w || h[12] !== y ? (t = t => {
                    let r = (0, n.default)(t.sku),
                        i = !t.availableForSale;
                    if (!r) return null;
                    let f = i && v;
                    return (0, e.jsx)(g, {
                        children: (0, e.jsx)(m.Radio, {
                            "data-testid": "color-swatch",
                            value: t,
                            onClick: () => x(t, f),
                            disabled: f,
                            className: (0, a.default)("cursor-pointer focus:outline-none", f && "cursor-default"),
                            children: t => {
                                let {
                                    checked: n
                                } = t;
                                return (0, e.jsx)(s.default, {
                                    isSelected: n,
                                    colorName: w(`variantColors.${(0,o.toCamelCase)(r.variantTitle)}`),
                                    colorClassName: r.colorClass,
                                    theme: y,
                                    isOutOfStock: i,
                                    disableOutOfStockAnimation: f
                                })
                            }
                        })
                    }, t.id)
                }, h[9] = v, h[10] = x, h[11] = w, h[12] = y, h[13] = t) : t = h[13], u = c.map(t), h[3] = v, h[4] = x, h[5] = w, h[6] = y, h[7] = c, h[8] = u
            } else u = h[8];
            return h[14] !== p || h[15] !== d || h[16] !== u ? (l = (0, e.jsx)(m.RadioGroup, {
                as: "ul",
                className: "flex flex-wrap justify-center gap-[16px] self-start md:gap-[14px]",
                onChange: d,
                value: p,
                children: u
            }), h[14] = p, h[15] = d, h[16] = u, h[17] = l) : l = h[17], l
        },
        v = t => {
            let i, n, o, s, f, u, l = (0, r.c)(22),
                {
                    variants: h,
                    tag: c,
                    currentVariant: d,
                    onChange: p,
                    label: y,
                    theme: g,
                    noDefaultColor: m,
                    disableOutOfStock: v
                } = t,
                w = void 0 === g ? "light" : g;
            l[0] !== y ? (i = y && (0, e.jsx)("p", {
                "data-testid": "variant-selector-swatches__title",
                className: "text-primary body-3",
                children: y
            }), l[0] = y, l[1] = i) : i = l[1];
            let x = c && "relative rounded-full border",
                E = "dark" === w ? "border-neutral-700" : "border-neutral-300";
            return l[2] !== x || l[3] !== E ? (n = (0, a.default)("flex max-w-max items-center gap-8 p-[6px]", x, E, "before:absolute before:-top-px before:left-24 before:h-px before:w-96", 'before:bg-linear-to-r before:from-transparent before:via-white before:to-transparent before:content-[""]'), l[2] = x, l[3] = E, l[4] = n) : n = l[4], l[5] !== d || l[6] !== v || l[7] !== m || l[8] !== p || l[9] !== w || l[10] !== h ? (o = (0, e.jsx)(b, {
                variants: h,
                currentVariant: d,
                onChange: p,
                noDefaultColor: m,
                theme: w,
                disableOutOfStock: v
            }), l[5] = d, l[6] = v, l[7] = m, l[8] = p, l[9] = w, l[10] = h, l[11] = o) : o = l[11], l[12] !== c || l[13] !== w ? (s = c && (0, e.jsx)("span", {
                className: (0, a.default)("body-3 pr-16 pl-8", "dark" === w ? "text-white" : "text-neutral-900"),
                children: c
            }), l[12] = c, l[13] = w, l[14] = s) : s = l[14], l[15] !== n || l[16] !== o || l[17] !== s ? (f = (0, e.jsxs)("div", {
                className: n,
                children: [o, s]
            }), l[15] = n, l[16] = o, l[17] = s, l[18] = f) : f = l[18], l[19] !== i || l[20] !== f ? (u = (0, e.jsxs)(e.Fragment, {
                children: [i, f]
            }), l[19] = i, l[20] = f, l[21] = u) : u = l[21], u
        };
    t.s(["default", 0, t => {
        let s, f, u, l, h, c = (0, r.c)(26),
            {
                className: d,
                currentVariant: p,
                onChange: y,
                showColorName: g,
                title: m,
                variants: b,
                dataCsOverrideId: w,
                secondaryVariants: x,
                primaryVariants: E,
                theme: A,
                noDefaultColor: j,
                disableOutOfStock: S
            } = t,
            _ = void 0 === d ? "" : d,
            B = void 0 === A ? "light" : A,
            O = void 0 !== j && j,
            C = void 0 !== S && S,
            T = (0, n.default)(p.sku),
            {
                t: k
            } = (0, i.useTranslation)("common");
        if ((E ? .variants.length || b.length || 0) + (x ? .variants.length || 0) < 2) return null;
        c[0] !== _ ? (s = (0, a.default)("flex gap-4", _), c[0] = _, c[1] = s) : s = c[1];
        let I = E ? E ? .variants : b,
            U = E ? E.label : m,
            R = E ? .tag;
        c[2] !== p || c[3] !== C || c[4] !== O || c[5] !== y || c[6] !== R || c[7] !== I || c[8] !== U || c[9] !== B ? (f = (0, e.jsx)(v, {
            theme: B,
            currentVariant: p,
            onChange: y,
            variants: I,
            label: U,
            tag: R,
            noDefaultColor: O,
            disableOutOfStock: C
        }), c[2] = p, c[3] = C, c[4] = O, c[5] = y, c[6] = R, c[7] = I, c[8] = U, c[9] = B, c[10] = f) : f = c[10], c[11] !== p || c[12] !== C || c[13] !== O || c[14] !== y || c[15] !== x || c[16] !== B ? (u = x && x.variants.length > 0 && (0, e.jsx)(v, {
            theme: B,
            currentVariant: p,
            onChange: y,
            variants: x.variants,
            label: x.label,
            tag: x.tag,
            noDefaultColor: O,
            disableOutOfStock: C
        }), c[11] = p, c[12] = C, c[13] = O, c[14] = y, c[15] = x, c[16] = B, c[17] = u) : u = c[17], c[18] !== f || c[19] !== u || c[20] !== s ? (l = (0, e.jsxs)("div", {
            className: s,
            children: [f, u]
        }), c[18] = f, c[19] = u, c[20] = s, c[21] = l) : l = c[21];
        let L = T && (void 0 === g || g) && (0, e.jsx)("p", {
            className: "mt-[10px] body-3",
            "data-testid": "variant-selector-swatches__color-name",
            children: k(`variantColors.${(0,o.toCamelCase)(T.variantTitle)}`)
        });
        return c[22] !== w || c[23] !== l || c[24] !== L ? (h = (0, e.jsxs)("div", {
            "data-testid": "variant-selector-swatches",
            "data-cs-override-id": w,
            children: [l, L]
        }), c[22] = w, c[23] = l, c[24] = L, c[25] = h) : h = c[25], h
    }], 725524)
}, 867094, t => {
    "use strict";
    t.i(725524), t.s([])
}, 620391, t => {
    "use strict";
    var e = t.i(261576),
        r = t.i(150257),
        i = t.i(203828),
        n = t.i(468411),
        o = t.i(726774),
        a = t.i(219501),
        s = t.i(870256);
    t.s(["usePrefetchLocalisedPrices", 0, function(t) {
        let f, u, l, h = (0, e.c)(13),
            {
                locale: c
            } = (0, i.useRouter)();
        h[0] !== t ? (f = t.map(n.toNumericId), h[0] = t, h[1] = f) : f = h[1];
        let d = f,
            {
                countryCode: p
            } = (0, a.default)();
        if (h[2] !== p || h[3] !== d || h[4] !== c || h[5] !== t) {
            let e;
            h[7] !== p || h[8] !== d || h[9] !== c ? (e = t => ({
                queryKey: [t, p],
                queryFn: () => (0, o.default)(t, c ? .toUpperCase() ? ? "EN", p, ""),
                enabled: !!(d.length > 0 && p),
                staleTime: s.oneDay
            }), h[7] = p, h[8] = d, h[9] = c, h[10] = e) : e = h[10], u = t.map(e), h[2] = p, h[3] = d, h[4] = c, h[5] = t, h[6] = u
        } else u = h[6];
        h[11] !== u ? (l = {
            queries: u
        }, h[11] = u, h[12] = l) : l = h[12], (0, r.useQueries)(l)
    }])
}, 872044, t => {
    "use strict";
    t.i(627528), t.s([])
}, 573614, 126298, t => {
    "use strict";
    var e = t.i(391398),
        r = t.i(261576),
        i = t.i(191788);
    t.i(409931);
    var n = t.i(943960),
        o = t.i(495854);
    t.s(["default", 0, t => {
        let a, s, f, u, l = (0, r.c)(13),
            {
                isOpen: h,
                close: c,
                title: d,
                children: p,
                theme: y
            } = t,
            g = void 0 === y ? "light" : y;
        return l[0] !== p ? (a = 1 === i.Children.count(p) ? "md:grid-cols-1" : "md:grid-cols-2", l[0] = p, l[1] = a) : a = l[1], l[2] !== a ? (s = (0, o.default)("grid items-center gap-16 px-16 py-32 md:gap-80 md:px-112 md:py-48", a), l[2] = a, l[3] = s) : s = l[3], l[4] !== p || l[5] !== s ? (f = (0, e.jsx)("div", {
            className: s,
            children: p
        }), l[4] = p, l[5] = s, l[6] = f) : f = l[6], l[7] !== c || l[8] !== h || l[9] !== f || l[10] !== g || l[11] !== d ? (u = (0, e.jsx)(n.default, {
            isOpen: h,
            title: d,
            closeModal: c,
            theme: g,
            children: f
        }), l[7] = c, l[8] = h, l[9] = f, l[10] = g, l[11] = d, l[12] = u) : u = l[12], u
    }], 126298), t.s([], 573614)
}, 349837, 64498, t => {
    "use strict";
    var e = t.i(391398),
        r = t.i(261576),
        i = t.i(191788),
        n = t.i(126019);
    t.i(573614);
    var o = t.i(126298);
    t.i(946262);
    var a = t.i(843888),
        s = t.i(157762);
    t.s(["default", 0, t => {
        let f, u, l, h, c, d, p, y = (0, r.c)(25),
            {
                promoInfoText: g,
                promoInfoLink: m,
                theme: b
            } = t,
            v = void 0 === b ? "light" : b,
            [w, x] = (0, i.useState)(!1);
        y[0] === Symbol.for("react.memo_cache_sentinel") ? (f = () => x(!0), y[0] = f) : f = y[0];
        let E = f;
        y[1] === Symbol.for("react.memo_cache_sentinel") ? (u = () => x(!1), y[1] = u) : u = y[1];
        let A = u;
        if (m ? .textToCopy) {
            let t;
            return y[2] !== m || y[3] !== g || y[4] !== v ? (t = (0, e.jsx)(s.default, {
                promoInfoLink: m,
                theme: v,
                promoInfoText: g
            }), y[2] = m, y[3] = g, y[4] = v, y[5] = t) : t = y[5], t
        }
        let j = m ? .dynamicDrawerContent ? .[0],
            S = j ? .type === "ContentBlock" ? j.data : void 0;
        if (!(g || m) || !S ? .image || !S.description) return null;
        let _ = S.title,
            B = S.image,
            O = S.description;
        y[6] !== m || y[7] !== g || y[8] !== v ? (l = (0, e.jsx)("button", {
            type: "button",
            onClick: E,
            "data-cs-override-id": "promo-info",
            children: (0, e.jsx)(s.default, {
                promoInfoLink: m,
                theme: v,
                promoInfoText: g
            })
        }), y[6] = m, y[7] = g, y[8] = v, y[9] = l) : l = y[9];
        let C = B.title || "";
        return y[10] !== B.url || y[11] !== C ? (h = (0, e.jsx)(n.default, {
            src: B.url,
            alt: C,
            width: 550,
            height: 330,
            priority: !0,
            className: "w-full"
        }), y[10] = B.url, y[11] = C, y[12] = h) : h = y[12], y[13] !== O || y[14] !== v ? (c = (0, e.jsx)(a.default, {
            richText: O,
            theme: v
        }), y[13] = O, y[14] = v, y[15] = c) : c = y[15], y[16] !== _ || y[17] !== w || y[18] !== h || y[19] !== c || y[20] !== v ? (d = (0, e.jsxs)(o.default, {
            close: A,
            isOpen: w,
            title: _,
            theme: v,
            children: [h, c]
        }), y[16] = _, y[17] = w, y[18] = h, y[19] = c, y[20] = v, y[21] = d) : d = y[21], y[22] !== l || y[23] !== d ? (p = (0, e.jsxs)(e.Fragment, {
            children: [l, d]
        }), y[22] = l, y[23] = d, y[24] = p) : p = y[24], p
    }], 64498), t.s([], 349837)
}, 753221, t => {
    "use strict";
    var e = t.i(391398);
    let r = (0, t.i(191788).forwardRef)(({
        id: t,
        children: r
    }, i) => (0, e.jsx)("section", {
        id: t,
        ref: i,
        children: r
    }));
    r.displayName = "AnchorSection", t.s(["default", 0, r])
}, 544808, t => {
    "use strict";
    var e = t.i(391398),
        r = t.i(261576),
        i = t.i(198311),
        n = t.i(126019);
    t.i(286941);
    var o = t.i(126762),
        a = t.i(455108),
        s = t.i(992219);
    t.i(919993);
    var f = t.i(636985),
        u = t.i(495854);
    let l = () => [{
            position: "-top-4 -left-4",
            key: "topLeft",
            initialState: {
                y: 100
            },
            endState: {
                y: 0
            }
        }, {
            position: "-top-4 -right-4",
            key: "topRight",
            initialState: {
                x: -100
            },
            endState: {
                x: 0
            }
        }, {
            position: "-bottom-4 -left-4",
            key: "bottomLeft",
            initialState: {
                x: 100
            },
            endState: {
                x: 0
            }
        }, {
            position: "-bottom-4 -right-4",
            key: "bottomRight",
            initialState: {
                y: -100
            },
            endState: {
                y: 0
            }
        }].map(({
            position: t,
            key: r,
            initialState: n,
            endState: o
        }) => (0, e.jsx)(i.motion.div, {
            className: (0, u.default)(t, "animate-corner pointer-events-none absolute h-8 w-8 bg-neutral-400"),
            variants: {
                initialState: { ...n,
                    opacity: 0
                },
                endState: { ...o,
                    opacity: 1
                }
            },
            transition: {
                duration: .3,
                ease: "easeInOut",
                delay: .3
            }
        }, r)),
        h = ["BinanceSquaredIcon", "GoogleSquaredIcon", "KrakenSquaredIcon", "OKXSquaredIcon", "XSquaredIcon"];

    function c(t) {
        return (0, e.jsx)(n.default, {
            src: `/images/${t}.png`,
            alt: "",
            width: 32,
            height: 32
        }, t)
    }
    t.s(["default", 0, t => {
        let d, p, y, g, m, b, v, w, x, E, A, j, S, _, B, O, C, T, k, I = (0, r.c)(54),
            {
                title: U,
                subtitle: R,
                description: L,
                link: N,
                caption: P,
                image: M,
                imageMobile: D,
                videoUrl: F,
                videoMobileUrl: q,
                videoTitle: V,
                loopVideo: z,
                theme: Y,
                direction: G,
                dataCsOverrideId: K,
                contentBlockVariant: X,
                verticalSpacing: W
            } = t,
            $ = void 0 === Y ? "dark" : Y,
            H = void 0 === W ? "none" : W;
        if (!U && !L && !M && !F) return null;
        let J = "dark" === $ ? "border-neutral-600 bg-grey-linear" : "border-neutral-200 bg-neutral-50";
        I[0] !== M || I[1] !== D ? .url || I[2] !== z || I[3] !== q || I[4] !== V || I[5] !== F ? (d = () => {
            let t = {
                muted: !0,
                playsInline: !0,
                autoPlay: !0,
                ...z && {
                    loop: !0
                }
            };
            if (F) return (0, e.jsxs)(e.Fragment, {
                children: [(0, e.jsx)(s.default, {
                    source: F,
                    ...t,
                    title: V ? ? void 0,
                    className: (0, u.default)("w-full h-full object-cover", q && "hidden md:block"),
                    role: "video"
                }), q && (0, e.jsx)(s.default, {
                    source: q,
                    title: V ? ? void 0,
                    ...t,
                    role: "video",
                    className: (0, u.default)("w-full h-full object-cover", "md:hidden")
                })]
            });
            if (M ? .url) {
                let t = {
                    alt: M ? .title ? ? "",
                    width: 608,
                    height: 440
                };
                return (0, e.jsxs)(e.Fragment, {
                    children: [(0, e.jsx)(n.default, {
                        src: M.url,
                        className: (0, u.default)(D ? .url && "hidden md:block", "w-full h-full object-cover"),
                        ...t
                    }), D ? .url && (0, e.jsx)(n.default, {
                        src: D ? .url,
                        className: (0, u.default)("md:hidden", "w-full h-full object-cover"),
                        ...t
                    })]
                })
            }
            return null
        }, I[0] = M, I[1] = D ? .url, I[2] = z, I[3] = q, I[4] = V, I[5] = F, I[6] = d) : d = I[6];
        let Q = d,
            Z = "dark" === $ ? "bg-black text-white" : "bg-neutral-50 text-black";
        I[7] !== Z ? (p = (0, u.default)(Z, "relative w-full"), I[7] = Z, I[8] = p) : p = I[8];
        let tt = "rtl" === (void 0 === G ? "rtl" : G) ? "md:flex-row-reverse" : "md:flex-row";
        return I[9] !== J || I[10] !== tt ? (y = (0, u.default)("relative flex flex-col border border-solid", J, tt), I[9] = J, I[10] = tt, I[11] = y) : y = I[11], I[12] === Symbol.for("react.memo_cache_sentinel") ? (b = {
            initialState: {
                opacity: 0
            },
            endState: {
                opacity: 1
            }
        }, g = {
            once: !0,
            amount: .7
        }, m = {
            duration: .3,
            ease: "easeInOut"
        }, I[12] = g, I[13] = m, I[14] = b) : (g = I[12], m = I[13], b = I[14]), I[15] !== R || I[16] !== $ ? (v = R && (0, e.jsx)(a.default.TagHud, {
            label: R,
            size: "medium",
            theme: $
        }), I[15] = R, I[16] = $, I[17] = v) : v = I[17], I[18] !== U ? (w = (0, e.jsx)("h3", {
            className: "responsive-display-4",
            children: U
        }), I[18] = U, I[19] = w) : w = I[19], I[20] !== L || I[21] !== $ ? (x = L && (0, e.jsx)(o.default, {
            content: L,
            className: (0, u.default)("rich-text-p:m-0 rich-text-p:text-balance rich-text-p:heading-4 rich-text-a:heading-1-semi-bold rich-text-a:font-normal my-0 leading-5", "dark" === $ ? "rich-text-a:text-white" : "rich-text-a:text-black")
        }), I[20] = L, I[21] = $, I[22] = x) : x = I[22], I[23] !== X || I[24] !== $ ? (E = "Ledger Security Focus Feature" === X && (0, e.jsxs)("div", {
            className: "flex flex-row gap-12 md:gap-16",
            "data-testid": "security-focus-icons",
            children: [h.map(c), (0, e.jsx)("span", {
                className: (0, u.default)("content-center", "dark" === $ ? "text-neutral-400" : "text-neutral-600"),
                children: "+"
            })]
        }), I[23] = X, I[24] = $, I[25] = E) : E = I[25], I[26] !== N || I[27] !== $ ? (A = (0, e.jsx)(f.default, {
            link: N,
            theme: $
        }), I[26] = N, I[27] = $, I[28] = A) : A = I[28], I[29] !== P ? (j = P && (0, e.jsx)("p", {
            className: "body-3",
            children: P
        }), I[29] = P, I[30] = j) : j = I[30], I[31] !== v || I[32] !== w || I[33] !== x || I[34] !== E || I[35] !== A || I[36] !== j ? (S = (0, e.jsx)("div", {
            className: "flex flex-1 items-center",
            children: (0, e.jsxs)("div", {
                className: "flex flex-col gap-16 p-24 lg:p-48",
                children: [v, w, x, E, A, j]
            })
        }), I[31] = v, I[32] = w, I[33] = x, I[34] = E, I[35] = A, I[36] = j, I[37] = S) : S = I[37], I[38] !== Q ? (_ = Q(), I[38] = Q, I[39] = _) : _ = I[39], I[40] !== _ ? (B = (0, e.jsx)("div", {
            className: "flex flex-1 justify-center",
            children: _
        }), I[40] = _, I[41] = B) : B = I[41], I[42] === Symbol.for("react.memo_cache_sentinel") ? (O = (0, e.jsx)(l, {}), I[42] = O) : O = I[42], I[43] !== S || I[44] !== B || I[45] !== y ? (C = (0, e.jsxs)(i.motion.div, {
            className: y,
            initial: "initialState",
            whileInView: "endState",
            variants: b,
            viewport: g,
            transition: m,
            "data-testid": "focus-feature-motion",
            children: [S, B, O]
        }), I[43] = S, I[44] = B, I[45] = y, I[46] = C) : C = I[46], I[47] !== K || I[48] !== C || I[49] !== H ? (T = (0, e.jsx)(a.default.Section, {
            dataCsOverrideId: K,
            verticalSpacing: H,
            children: C
        }), I[47] = K, I[48] = C, I[49] = H, I[50] = T) : T = I[50], I[51] !== T || I[52] !== p ? (k = (0, e.jsx)("div", {
            className: p,
            "data-testid": "page-content-block",
            children: T
        }), I[51] = T, I[52] = p, I[53] = k) : k = I[53], k
    }])
}]);

//# sourceMappingURL=0~fwe61n~njhh.js.map