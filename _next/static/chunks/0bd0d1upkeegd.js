(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 221168, (e, t, r) => {
    var n = {
            675: function(e, t) {
                "use strict";
                t.byteLength = function(e) {
                    var t = l(e),
                        r = t[0],
                        n = t[1];
                    return (r + n) * 3 / 4 - n
                }, t.toByteArray = function(e) {
                    var t, r, o = l(e),
                        a = o[0],
                        s = o[1],
                        u = new i((a + s) * 3 / 4 - s),
                        f = 0,
                        c = s > 0 ? a - 4 : a;
                    for (r = 0; r < c; r += 4) t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)], u[f++] = t >> 16 & 255, u[f++] = t >> 8 & 255, u[f++] = 255 & t;
                    return 2 === s && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4, u[f++] = 255 & t), 1 === s && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2, u[f++] = t >> 8 & 255, u[f++] = 255 & t), u
                }, t.fromByteArray = function(e) {
                    for (var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i; a < s; a += 16383) o.push(function(e, t, n) {
                        for (var i, o = [], a = t; a < n; a += 3) i = (e[a] << 16 & 0xff0000) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(r[i >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                        return o.join("")
                    }(e, a, a + 16383 > s ? s : a + 16383));
                    return 1 === i ? o.push(r[(t = e[n - 1]) >> 2] + r[t << 4 & 63] + "==") : 2 === i && o.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="), o.join("")
                };
                for (var r = [], n = [], i = "u" > typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = o.length; a < s; ++a) r[a] = o[a], n[o.charCodeAt(a)] = a;

                function l(e) {
                    var t = e.length;
                    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                    var r = e.indexOf("="); - 1 === r && (r = t);
                    var n = r === t ? 0 : 4 - r % 4;
                    return [r, n]
                }
                n[45] = 62, n[95] = 63
            },
            72: function(e, t, r) {
                "use strict";
                var n = r(675),
                    i = r(783),
                    o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                function a(e) {
                    if (e > 0x7fffffff) throw RangeError('The value "' + e + '" is invalid for option "size"');
                    var t = new Uint8Array(e);
                    return Object.setPrototypeOf(t, s.prototype), t
                }

                function s(e, t, r) {
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                        return f(e)
                    }
                    return l(e, t, r)
                }

                function l(e, t, r) {
                    if ("string" == typeof e) {
                        var n = e,
                            i = t;
                        if (("string" != typeof i || "" === i) && (i = "utf8"), !s.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                        var o = 0 | d(n, i),
                            l = a(o),
                            u = l.write(n, i);
                        return u !== o && (l = l.slice(0, u)), l
                    }
                    if (ArrayBuffer.isView(e)) return c(e);
                    if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    if (T(e, ArrayBuffer) || e && T(e.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (T(e, SharedArrayBuffer) || e && T(e.buffer, SharedArrayBuffer))) return function(e, t, r) {
                        var n;
                        if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                        if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                        return Object.setPrototypeOf(n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), s.prototype), n
                    }(e, t, r);
                    if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                    var f = e.valueOf && e.valueOf();
                    if (null != f && f !== e) return s.from(f, t, r);
                    var p = function(e) {
                        if (s.isBuffer(e)) {
                            var t = 0 | h(e.length),
                                r = a(t);
                            return 0 === r.length || e.copy(r, 0, 0, t), r
                        }
                        return void 0 !== e.length ? "number" != typeof e.length || function(e) {
                            return e != e
                        }(e.length) ? a(0) : c(e) : "Buffer" === e.type && Array.isArray(e.data) ? c(e.data) : void 0
                    }(e);
                    if (p) return p;
                    if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, r);
                    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                }

                function u(e) {
                    if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                    if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
                }

                function f(e) {
                    return u(e), a(e < 0 ? 0 : 0 | h(e))
                }

                function c(e) {
                    for (var t = e.length < 0 ? 0 : 0 | h(e.length), r = a(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
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
                    return (u(e), e <= 0) ? a(e) : void 0 !== t ? "string" == typeof r ? a(e).fill(t, r) : a(e).fill(t) : a(e)
                }, s.allocUnsafe = function(e) {
                    return f(e)
                }, s.allocUnsafeSlow = function(e) {
                    return f(e)
                };

                function h(e) {
                    if (e >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                    return 0 | e
                }

                function d(e, t) {
                    if (s.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || T(e, ArrayBuffer)) return e.byteLength;
                    if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                    var r = e.length,
                        n = arguments.length > 2 && !0 === arguments[2];
                    if (!n && 0 === r) return 0;
                    for (var i = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return A(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return B(e).length;
                        default:
                            if (i) return n ? -1 : A(e).length;
                            t = ("" + t).toLowerCase(), i = !0
                    }
                }

                function p(e, t, r) {
                    var i, o, a, s = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return function(e, t, r) {
                                var n = e.length;
                                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                                for (var i = "", o = t; o < r; ++o) i += k[e[o]];
                                return i
                            }(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return b(this, t, r);
                        case "ascii":
                            return function(e, t, r) {
                                var n = "";
                                r = Math.min(e.length, r);
                                for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                                return n
                            }(this, t, r);
                        case "latin1":
                        case "binary":
                            return function(e, t, r) {
                                var n = "";
                                r = Math.min(e.length, r);
                                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                                return n
                            }(this, t, r);
                        case "base64":
                            return i = this, o = t, a = r, 0 === o && a === i.length ? n.fromByteArray(i) : n.fromByteArray(i.slice(o, a));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function(e, t, r) {
                                for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                                return i
                            }(this, t, r);
                        default:
                            if (s) throw TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), s = !0
                    }
                }

                function m(e, t, r) {
                    var n = e[t];
                    e[t] = e[r], e[r] = n
                }

                function y(e, t, r, n, i) {
                    var o;
                    if (0 === e.length) return -1;
                    if ("string" == typeof r ? (n = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (o = r *= 1) != o && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length)
                        if (i) return -1;
                        else r = e.length - 1;
                    else if (r < 0)
                        if (!i) return -1;
                        else r = 0;
                    if ("string" == typeof t && (t = s.from(t, n)), s.isBuffer(t)) return 0 === t.length ? -1 : g(e, t, r, n, i);
                    if ("number" == typeof t) {
                        if (t &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                            if (i) return Uint8Array.prototype.indexOf.call(e, t, r);
                            else return Uint8Array.prototype.lastIndexOf.call(e, t, r);
                        return g(e, [t], r, n, i)
                    }
                    throw TypeError("val must be string, number or Buffer")
                }

                function g(e, t, r, n, i) {
                    var o, a = 1,
                        s = e.length,
                        l = t.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        a = 2, s /= 2, l /= 2, r /= 2
                    }

                    function u(e, t) {
                        return 1 === a ? e[t] : e.readUInt16BE(t * a)
                    }
                    if (i) {
                        var f = -1;
                        for (o = r; o < s; o++)
                            if (u(e, o) === u(t, -1 === f ? 0 : o - f)) {
                                if (-1 === f && (f = o), o - f + 1 === l) return f * a
                            } else -1 !== f && (o -= o - f), f = -1
                    } else
                        for (r + l > s && (r = s - l), o = r; o >= 0; o--) {
                            for (var c = !0, h = 0; h < l; h++)
                                if (u(e, o + h) !== u(t, h)) {
                                    c = !1;
                                    break
                                }
                            if (c) return o
                        }
                    return -1
                }
                s.isBuffer = function(e) {
                    return null != e && !0 === e._isBuffer && e !== s.prototype
                }, s.compare = function(e, t) {
                    if (T(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), T(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                        if (e[i] !== t[i]) {
                            r = e[i], n = t[i];
                            break
                        }
                    return r < n ? -1 : +(n < r)
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
                    var r, n = s.allocUnsafe(t),
                        i = 0;
                    for (r = 0; r < e.length; ++r) {
                        var o = e[r];
                        if (T(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o)) throw TypeError('"list" argument must be an Array of Buffers');
                        o.copy(n, i), i += o.length
                    }
                    return n
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
                }, o && (s.prototype[o] = s.prototype.inspect), s.prototype.compare = function(e, t, r, n, i) {
                    if (T(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw RangeError("out of range index");
                    if (n >= i && t >= r) return 0;
                    if (n >= i) return -1;
                    if (t >= r) return 1;
                    if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0;
                    for (var o = i - n, a = r - t, l = Math.min(o, a), u = this.slice(n, i), f = e.slice(t, r), c = 0; c < l; ++c)
                        if (u[c] !== f[c]) {
                            o = u[c], a = f[c];
                            break
                        }
                    return o < a ? -1 : +(a < o)
                }, s.prototype.includes = function(e, t, r) {
                    return -1 !== this.indexOf(e, t, r)
                }, s.prototype.indexOf = function(e, t, r) {
                    return y(this, e, t, r, !0)
                }, s.prototype.lastIndexOf = function(e, t, r) {
                    return y(this, e, t, r, !1)
                };

                function b(e, t, r) {
                    r = Math.min(e.length, r);
                    for (var n = [], i = t; i < r;) {
                        var o, a, s, l, u = e[i],
                            f = null,
                            c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                        if (i + c <= r) switch (c) {
                            case 1:
                                u < 128 && (f = u);
                                break;
                            case 2:
                                (192 & (o = e[i + 1])) == 128 && (l = (31 & u) << 6 | 63 & o) > 127 && (f = l);
                                break;
                            case 3:
                                o = e[i + 1], a = e[i + 2], (192 & o) == 128 && (192 & a) == 128 && (l = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (f = l);
                                break;
                            case 4:
                                o = e[i + 1], a = e[i + 2], s = e[i + 3], (192 & o) == 128 && (192 & a) == 128 && (192 & s) == 128 && (l = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && l < 1114112 && (f = l)
                        }
                        null === f ? (f = 65533, c = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), i += c
                    }
                    var h = n,
                        d = h.length;
                    if (d <= 4096) return String.fromCharCode.apply(String, h);
                    for (var p = "", m = 0; m < d;) p += String.fromCharCode.apply(String, h.slice(m, m += 4096));
                    return p
                }

                function v(e, t, r) {
                    if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                    if (e + t > r) throw RangeError("Trying to access beyond buffer length")
                }

                function w(e, t, r, n, i, o) {
                    if (!s.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                    if (t > i || t < o) throw RangeError('"value" argument is out of bounds');
                    if (r + n > e.length) throw RangeError("Index out of range")
                }

                function x(e, t, r, n, i, o) {
                    if (r + n > e.length || r < 0) throw RangeError("Index out of range")
                }

                function E(e, t, r, n, o) {
                    return t *= 1, r >>>= 0, o || x(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), i.write(e, t, r, n, 23, 4), r + 4
                }

                function _(e, t, r, n, o) {
                    return t *= 1, r >>>= 0, o || x(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), i.write(e, t, r, n, 52, 8), r + 8
                }
                s.prototype.write = function(e, t, r, n) {
                    if (void 0 === t) n = "utf8", r = this.length, t = 0;
                    else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                    else if (isFinite(t)) t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    var i, o, a, s, l, u, f, c, h = this.length - t;
                    if ((void 0 === r || r > h) && (r = h), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    for (var d = !1;;) switch (n) {
                        case "hex":
                            return function(e, t, r, n) {
                                r = Number(r) || 0;
                                var i = e.length - r;
                                n ? (n = Number(n)) > i && (n = i) : n = i;
                                var o = t.length;
                                n > o / 2 && (n = o / 2);
                                for (var a = 0; a < n; ++a) {
                                    var s, l = parseInt(t.substr(2 * a, 2), 16);
                                    if ((s = l) != s) break;
                                    e[r + a] = l
                                }
                                return a
                            }(this, e, t, r);
                        case "utf8":
                        case "utf-8":
                            return i = t, o = r, O(A(e, this.length - i), this, i, o);
                        case "ascii":
                            return a = t, s = r, O(S(e), this, a, s);
                        case "latin1":
                        case "binary":
                            return function(e, t, r, n) {
                                return O(S(t), e, r, n)
                            }(this, e, t, r);
                        case "base64":
                            return l = t, u = r, O(B(e), this, l, u);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return f = t, c = r, O(function(e, t) {
                                for (var r, n, i = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) n = (r = e.charCodeAt(o)) >> 8, i.push(r % 256), i.push(n);
                                return i
                            }(e, this.length - f), this, f, c);
                        default:
                            if (d) throw TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), d = !0
                    }
                }, s.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }, s.prototype.slice = function(e, t) {
                    var r = this.length;
                    e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                    var n = this.subarray(e, t);
                    return Object.setPrototypeOf(n, s.prototype), n
                }, s.prototype.readUIntLE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || v(e, t, this.length);
                    for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                    return n
                }, s.prototype.readUIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || v(e, t, this.length);
                    for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                    return n
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
                    for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                    return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
                }, s.prototype.readIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || v(e, t, this.length);
                    for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
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
                    return e >>>= 0, t || v(e, 4, this.length), i.read(this, e, !0, 23, 4)
                }, s.prototype.readFloatBE = function(e, t) {
                    return e >>>= 0, t || v(e, 4, this.length), i.read(this, e, !1, 23, 4)
                }, s.prototype.readDoubleLE = function(e, t) {
                    return e >>>= 0, t || v(e, 8, this.length), i.read(this, e, !0, 52, 8)
                }, s.prototype.readDoubleBE = function(e, t) {
                    return e >>>= 0, t || v(e, 8, this.length), i.read(this, e, !1, 52, 8)
                }, s.prototype.writeUIntLE = function(e, t, r, n) {
                    if (e *= 1, t >>>= 0, r >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r) - 1;
                        w(this, e, t, r, i, 0)
                    }
                    var o = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++a < r && (o *= 256);) this[t + a] = e / o & 255;
                    return t + r
                }, s.prototype.writeUIntBE = function(e, t, r, n) {
                    if (e *= 1, t >>>= 0, r >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r) - 1;
                        w(this, e, t, r, i, 0)
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
                }, s.prototype.writeIntLE = function(e, t, r, n) {
                    if (e *= 1, t >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r - 1);
                        w(this, e, t, r, i - 1, -i)
                    }
                    var o = 0,
                        a = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++o < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a | 0) - s & 255;
                    return t + r
                }, s.prototype.writeIntBE = function(e, t, r, n) {
                    if (e *= 1, t >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r - 1);
                        w(this, e, t, r, i - 1, -i)
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
                    return _(this, e, t, !0, r)
                }, s.prototype.writeDoubleBE = function(e, t, r) {
                    return _(this, e, t, !1, r)
                }, s.prototype.copy = function(e, t, r, n) {
                    if (!s.isBuffer(e)) throw TypeError("argument should be a Buffer");
                    if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || 0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                    if (n < 0) throw RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                    var i = n - r;
                    if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);
                    else if (this === e && r < t && t < n)
                        for (var o = i - 1; o >= 0; --o) e[o + t] = this[o + r];
                    else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                    return i
                }, s.prototype.fill = function(e, t, r, n) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                        if ("string" == typeof n && !s.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                        if (1 === e.length) {
                            var i, o = e.charCodeAt(0);
                            ("utf8" === n && o < 128 || "latin1" === n) && (e = o)
                        }
                    } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                    if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
                    if (r <= t) return this;
                    if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                        for (i = t; i < r; ++i) this[i] = e;
                    else {
                        var a = s.isBuffer(e) ? e : s.from(e, n),
                            l = a.length;
                        if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (i = 0; i < r - t; ++i) this[i + t] = a[i % l]
                    }
                    return this
                };
                var j = /[^+/0-9A-Za-z-_]/g;

                function A(e, t) {
                    t = t || 1 / 0;
                    for (var r, n = e.length, i = null, o = [], a = 0; a < n; ++a) {
                        if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                            if (!i) {
                                if (r > 56319 || a + 1 === n) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                i = r;
                                continue
                            }
                            if (r < 56320) {
                                (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                                continue
                            }
                            r = (i - 55296 << 10 | r - 56320) + 65536
                        } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                        if (i = null, r < 128) {
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

                function S(e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }

                function B(e) {
                    return n.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(j, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e
                    }(e))
                }

                function O(e, t, r, n) {
                    for (var i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i) t[i + r] = e[i];
                    return i
                }

                function T(e, t) {
                    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                }
                var k = function() {
                    for (var e = "0123456789abcdef", t = Array(256), r = 0; r < 16; ++r)
                        for (var n = 16 * r, i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
                    return t
                }()
            },
            783: function(e, t) {
                t.read = function(e, t, r, n, i) {
                    var o, a, s = 8 * i - n - 1,
                        l = (1 << s) - 1,
                        u = l >> 1,
                        f = -7,
                        c = r ? i - 1 : 0,
                        h = r ? -1 : 1,
                        d = e[t + c];
                    for (c += h, o = d & (1 << -f) - 1, d >>= -f, f += s; f > 0; o = 256 * o + e[t + c], c += h, f -= 8);
                    for (a = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; a = 256 * a + e[t + c], c += h, f -= 8);
                    if (0 === o) o = 1 - u;
                    else {
                        if (o === l) return a ? NaN : 1 / 0 * (d ? -1 : 1);
                        a += Math.pow(2, n), o -= u
                    }
                    return (d ? -1 : 1) * a * Math.pow(2, o - n)
                }, t.write = function(e, t, r, n, i, o) {
                    var a, s, l, u = 8 * o - i - 1,
                        f = (1 << u) - 1,
                        c = f >> 1,
                        h = 5960464477539062e-23 * (23 === i),
                        d = n ? 0 : o - 1,
                        p = n ? 1 : -1,
                        m = +(t < 0 || 0 === t && 1 / t < 0);
                    for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (s = +!!isNaN(t), a = f) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), a + c >= 1 ? t += h / l : t += h * Math.pow(2, 1 - c), t * l >= 2 && (a++, l /= 2), a + c >= f ? (s = 0, a = f) : a + c >= 1 ? (s = (t * l - 1) * Math.pow(2, i), a += c) : (s = t * Math.pow(2, c - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + d] = 255 & s, d += p, s /= 256, i -= 8);
                    for (a = a << i | s, u += i; u > 0; e[r + d] = 255 & a, d += p, a /= 256, u -= 8);
                    e[r + d - p] |= 128 * m
                }
            }
        },
        i = {};

    function o(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var r = i[e] = {
                exports: {}
            },
            a = !0;
        try {
            n[e](r, r.exports, o), a = !1
        } finally {
            a && delete i[e]
        }
        return r.exports
    }
    o.ab = "/ROOT/node_modules/next/dist/compiled/buffer/", t.exports = o(72)
}, 161592, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "LoadableContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(731640)._(e.r(191788)).default.createContext(null)
}, 852414, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return h
        }
    });
    let n = e.r(731640)._(e.r(191788)),
        i = e.r(161592),
        o = [],
        a = [],
        s = !1;

    function l(e) {
        let t = e(),
            r = {
                loading: !0,
                loaded: null,
                error: null
            };
        return r.promise = t.then(e => (r.loading = !1, r.loaded = e, e)).catch(e => {
            throw r.loading = !1, r.error = e, e
        }), r
    }
    class u {
        constructor(e, t) {
            this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
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
                _res: e,
                _opts: t
            } = this;
            e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                this._update({
                    pastDelay: !0
                })
            }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                this._update({
                    timedOut: !0
                })
            }, t.timeout))), this._res.promise.then(() => {
                this._update({}), this._clearTimeouts()
            }).catch(e => {
                this._update({}), this._clearTimeouts()
            }), this._update({})
        }
        _update(e) {
            this._state = { ...this._state,
                error: this._res.error,
                loaded: this._res.loaded,
                loading: this._res.loading,
                ...e
            }, this._callbacks.forEach(e => e())
        }
        _clearTimeouts() {
            clearTimeout(this._delay), clearTimeout(this._timeout)
        }
        getCurrentValue() {
            return this._state
        }
        subscribe(e) {
            return this._callbacks.add(e), () => {
                this._callbacks.delete(e)
            }
        }
    }

    function f(t) {
        return function(t, r) {
            let l = Object.assign({
                    loader: null,
                    loading: null,
                    delay: 200,
                    timeout: null,
                    webpack: null,
                    modules: null
                }, r),
                f = null;

            function c() {
                if (!f) {
                    let e = new u(t, l);
                    f = {
                        getCurrentValue: e.getCurrentValue.bind(e),
                        subscribe: e.subscribe.bind(e),
                        retry: e.retry.bind(e),
                        promise: e.promise.bind(e)
                    }
                }
                return f.promise()
            }
            if ("u" < typeof window && o.push(c), !s && "u" > typeof window) {
                let t = l.webpack && "function" == typeof e.t.resolveWeak ? l.webpack() : l.modules;
                t && a.push(e => {
                    for (let r of t)
                        if (e.includes(r)) return c()
                })
            }

            function h(e, t) {
                let r;
                c(), (r = n.default.useContext(i.LoadableContext)) && Array.isArray(l.modules) && l.modules.forEach(e => {
                    r(e)
                });
                let o = n.default.useSyncExternalStore(f.subscribe, f.getCurrentValue, f.getCurrentValue);
                return n.default.useImperativeHandle(t, () => ({
                    retry: f.retry
                }), []), n.default.useMemo(() => {
                    var t;
                    return o.loading || o.error ? n.default.createElement(l.loading, {
                        isLoading: o.loading,
                        pastDelay: o.pastDelay,
                        timedOut: o.timedOut,
                        error: o.error,
                        retry: f.retry
                    }) : o.loaded ? n.default.createElement((t = o.loaded) && t.default ? t.default : t, e) : null
                }, [e, o])
            }
            return h.preload = () => c(), h.displayName = "LoadableComponent", n.default.forwardRef(h)
        }(l, t)
    }

    function c(e, t) {
        let r = [];
        for (; e.length;) {
            let n = e.pop();
            r.push(n(t))
        }
        return Promise.all(r).then(() => {
            if (e.length) return c(e, t)
        })
    }
    f.preloadAll = () => new Promise((e, t) => {
        c(o).then(e, t)
    }), f.preloadReady = (e = []) => new Promise(t => {
        let r = () => (s = !0, t());
        c(a, e).then(r, r)
    }), "u" > typeof window && (window.__NEXT_PRELOADREADY = f.preloadReady);
    let h = f
}, 425167, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return c
        },
        noSSR: function() {
            return f
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = e.r(731640),
        a = e.r(391398);
    e.r(191788);
    let s = o._(e.r(852414)),
        l = "u" < typeof window;

    function u(e) {
        return {
            default: e ? .default || e
        }
    }

    function f(e, t) {
        if (delete t.webpack, delete t.modules, !l) return e(t);
        let r = t.loading;
        return () => (0, a.jsx)(r, {
            error: null,
            isLoading: !0,
            pastDelay: !1,
            timedOut: !1
        })
    }

    function c(e, t) {
        let r = s.default,
            n = {
                loading: ({
                    error: e,
                    isLoading: t,
                    pastDelay: r
                }) => null
            };
        e instanceof Promise ? n.loader = () => e : "function" == typeof e ? n.loader = e : "object" == typeof e && (n = { ...n,
            ...e
        });
        let i = (n = { ...n,
            ...t
        }).loader;
        return (n.loadableGenerated && (n = { ...n,
            ...n.loadableGenerated
        }, delete n.loadableGenerated), "boolean" != typeof n.ssr || n.ssr) ? r({ ...n,
            loader: () => null != i ? i().then(u) : Promise.resolve(u(() => null))
        }) : (delete n.webpack, delete n.modules, f(r, n))
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 168489, (e, t, r) => {
    t.exports = e.r(425167)
}, 366539, 150077, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        n = e.i(495854),
        i = e.i(799444);
    let o = e => {
        let i, o, a, s, l = (0, r.c)(10),
            {
                displayValue: u,
                theme: f
            } = e,
            c = void 0 === f ? "light" : f,
            h = "light" === c ? "bg-black text-white" : "bg-white text-black";
        l[0] !== h ? (i = (0, n.default)("relative flex items-center justify-center rounded-xs px-8 py-4 text-center body-3", h), l[0] = h, l[1] = i) : i = l[1];
        let d = "light" === c ? "bg-black text-white" : "bg-white text-black";
        return l[2] !== d ? (o = (0, n.default)("absolute left-[-4px] top-[11px] h-8 w-8 rotate-45", d), l[2] = d, l[3] = o) : o = l[3], l[4] !== o ? (a = (0, t.jsx)("div", {
            className: o
        }), l[4] = o, l[5] = a) : a = l[5], l[6] !== u || l[7] !== i || l[8] !== a ? (s = (0, t.jsxs)("div", {
            className: i,
            "data-testid": "discount",
            children: [u, a]
        }), l[6] = u, l[7] = i, l[8] = a, l[9] = s) : s = l[9], s
    };
    var a = e.i(455108),
        s = e.i(203828);
    e.s(["default", 0, e => {
        let l, u, f, c, h, d, p = (0, r.c)(35),
            {
                variant: m,
                direction: y,
                size: g,
                showTaxMessage: b,
                center: v,
                showDiscount: w,
                discountLabel: x,
                showStrikedPrice: E,
                manualDiscountConversion: _,
                theme: j
            } = e,
            A = void 0 === y ? "horizontal" : y,
            S = void 0 === g ? "small" : g,
            B = void 0 === b || b,
            O = void 0 !== w && w,
            T = void 0 === x ? null : x,
            k = void 0 === E || E,
            C = void 0 === j ? "light" : j,
            {
                locale: N
            } = (0, s.useRouter)(),
            U = m ? .id;
        p[0] !== U ? (l = [U], p[0] = U, p[1] = l) : l = p[1];
        let {
            prices: L
        } = (0, i.default)(l);
        p[2] !== S ? (u = () => {
            switch (S) {
                case "large":
                    return "heading-4-semi-bold";
                case "extra-small":
                    return "body-4";
                default:
                    return "body-1 font-normal"
            }
        }, p[2] = S, p[3] = u) : u = p[3];
        let I = u();
        if (!L) {
            let e, r, i = "extra-small" === S,
                o = "small" === S,
                s = "vertical" === A,
                l = O && T;
            return p[4] !== i || p[5] !== o || p[6] !== s || p[7] !== l ? (e = (0, n.default)("h-32 w-20 animate-spin text-white", {
                "h-16": i,
                "h-24": o,
                "h-32": s,
                "mb-16 h-48": l
            }), p[4] = i, p[5] = o, p[6] = s, p[7] = l, p[8] = e) : e = p[8], p[9] !== e ? (r = (0, t.jsx)("div", {
                role: "status",
                "data-testid": "price-display__loading",
                className: "flex min-h-56 items-center lg:min-h-full",
                children: (0, t.jsx)(a.default.LoadingSpinner, {
                    className: e
                })
            }), p[9] = e, p[10] = r) : r = p[10], r
        }
        let R = L[0];
        if (p[11] !== N || p[12] !== _ || p[13] !== R) {
            var P, D, M;
            f = _ && (P = R.amount, D = R.currency, M = N || "EN", Intl.NumberFormat(M.toUpperCase(), {
                style: "currency",
                currency: D,
                trailingZeroDisplay: "stripIfInteger"
            }).format(Number(P * (1 - _)))), p[11] = N, p[12] = _, p[13] = R, p[14] = f
        } else f = p[14];
        let z = f,
            V = "vertical" === A && "flex-col items-start justify-center",
            F = "horizontal" === A && "flex-row items-center",
            W = "vertical-reversed" === A && "flex-col-reverse items-start justify-center",
            Y = void 0 !== v && v ? "items-center" : "";
        return p[15] !== V || p[16] !== F || p[17] !== W || p[18] !== Y ? (c = (0, n.default)("flex flex-wrap", V, F, W, Y), p[15] = V, p[16] = F, p[17] = W, p[18] = Y, p[19] = c) : c = p[19], p[20] !== z || p[21] !== A || p[22] !== T || p[23] !== I || p[24] !== R || p[25] !== O || p[26] !== k || p[27] !== B || p[28] !== C || p[29] !== m.pricePrefix || p[30] !== m.priceSuffix ? (h = O || R.compareAtLabel || z ? (0, t.jsxs)(t.Fragment, {
            children: [(z || R.compareAtLabel) && k && (0, t.jsx)("div", {
                className: "pe-8 text-neutral-400 line-through body-3",
                children: z ? R.label : R.compareAtLabel
            }), (0, t.jsxs)("div", {
                className: (0, n.default)("flex flex-row flex-wrap items-center gap-x-12", "vertical-reversed" === A && "-mb-4", "vertical" === A && "-mt-4"),
                children: [(0, t.jsxs)("span", {
                    "data-testid": "price-display__price",
                    className: I,
                    children: [m.pricePrefix && (0, t.jsx)("span", {
                        children: m.pricePrefix
                    }), z || R.label, m.priceSuffix && (0, t.jsx)("span", {
                        children: m.priceSuffix
                    })]
                }), O && T && (0, t.jsx)(o, {
                    displayValue: T,
                    theme: C
                })]
            }), B && (0, t.jsx)("div", {
                className: "basis-full text-gray-500 body-4",
                children: R.taxMessage
            })]
        }) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("span", {
                "data-testid": "price-display__price",
                className: I,
                children: [m.pricePrefix && (0, t.jsx)("span", {
                    children: m.pricePrefix
                }), R.label, m.priceSuffix && (0, t.jsx)("span", {
                    children: m.priceSuffix
                })]
            }), B && (0, t.jsx)("div", {
                className: "text-gray-500 body-4",
                children: R.taxMessage
            })]
        }), p[20] = z, p[21] = A, p[22] = T, p[23] = I, p[24] = R, p[25] = O, p[26] = k, p[27] = B, p[28] = C, p[29] = m.pricePrefix, p[30] = m.priceSuffix, p[31] = h) : h = p[31], p[32] !== c || p[33] !== h ? (d = (0, t.jsx)("div", {
            className: c,
            "data-testid": "price-display",
            children: h
        }), p[32] = c, p[33] = h, p[34] = d) : d = p[34], d
    }], 150077), e.s([], 366539)
}, 305231, 913473, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.i(664157);
    var n = e.i(271179),
        i = e.i(191788),
        o = e.i(495854);
    e.i(338018);
    var a = e.i(985129);
    e.i(108399);
    var s = e.i(860231),
        l = e.i(126019),
        u = e.i(198311),
        f = e.i(648684);
    let c = (0, f.cva)("flex w-full cursor-pointer items-center gap-4 rounded-[50px] px-8 outline-none ring-offset-0 transition-colors hover:ring-1 disabled:cursor-default disabled:opacity-60 md:gap-8", {
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
        h = e => {
            let n, i, f, h, d, p, m, y, g, b, v, w, x, E, _, j = (0, r.c)(58),
                {
                    buttonRef: A,
                    isOpen: S,
                    onToggle: B,
                    onKeyDown: O,
                    size: T,
                    theme: k,
                    colorDot: C,
                    variantNumber: N,
                    showText: U,
                    image: L,
                    currentVariant: I,
                    variants: R,
                    expandedWidth: P,
                    dropdownDirection: D,
                    isSelected: M
                } = e,
                z = void 0 !== M && M,
                V = R.length,
                F = S && "relative flex justify-center overflow-hidden",
                W = S && ("dark" === k ? "bg-neutral-900" : "bg-neutral-50"),
                Y = "up" === D ? "rounded-b-[20px]" : "rounded-t-[20px]";
            j[0] !== F || j[1] !== W || j[2] !== Y ? (n = (0, o.default)(F, W, Y), j[0] = F, j[1] = W, j[2] = Y, j[3] = n) : n = j[3];
            let q = S && ("up" === D ? "mb-[10px] pt-px" : "mt-[10px] pb-px");
            j[4] !== q ? (i = (0, o.default)(q), j[4] = q, j[5] = i) : i = j[5], j[6] !== C || j[7] !== L || j[8] !== S || j[9] !== z || j[10] !== U || j[11] !== T || j[12] !== k ? (f = (0, o.default)("[-webkit-tap-highlight-color:transparent]", c({
                theme: k,
                size: T,
                isSelected: z,
                showText: U,
                colorDot: C,
                image: L,
                isOpen: S
            })), j[6] = C, j[7] = L, j[8] = S, j[9] = z, j[10] = U, j[11] = T, j[12] = k, j[13] = f) : f = j[13];
            let K = S && "number" == typeof P ? Math.max(0, P - 8) : "auto";
            j[14] !== K ? (h = {
                width: K
            }, j[14] = K, j[15] = h) : h = j[15];
            let $ = S ? .04000000000000001 : .006;
            return j[16] === Symbol.for("react.memo_cache_sentinel") ? (d = [.2, .8, .2, 1], j[16] = d) : d = j[16], j[17] !== $ ? (p = {
                duration: $,
                ease: d
            }, j[17] = $, j[18] = p) : p = j[18], j[19] !== C || j[20] !== I || j[21] !== k ? (m = C && (0, t.jsx)(a.default, {
                isDisabled: !0,
                colorName: I.colorName,
                colorClassName: I.colorClassName,
                theme: k
            }), j[19] = C, j[20] = I, j[21] = k, j[22] = m) : m = j[22], j[23] !== m ? (y = (0, t.jsx)("div", {
                className: "flex items-center",
                children: m
            }), j[23] = m, j[24] = y) : y = j[24], j[25] !== V || j[26] !== U || j[27] !== k || j[28] !== N ? (g = N && (0, t.jsxs)(u.motion.div, {
                className: (0, o.default)("body-3 ms-4 whitespace-nowrap text-neutral-500", {
                    "text-neutral-300": "dark" === k
                }),
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: +!U
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
                    children: V - 1
                })]
            }), j[25] = V, j[26] = U, j[27] = k, j[28] = N, j[29] = g) : g = j[29], j[30] !== I || j[31] !== L ? (b = L && (0, t.jsx)(l.default, {
                src: I.imageUrl,
                alt: I.title,
                width: 32,
                height: 32
            }), j[30] = I, j[31] = L, j[32] = b) : b = j[32], j[33] !== I || j[34] !== S || j[35] !== U ? (v = U && (0, t.jsx)(u.motion.span, {
                initial: {
                    opacity: +!!U,
                    x: U ? 0 : -10
                },
                animate: S || U ? {
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
                children: I.title
            }), j[33] = I, j[34] = S, j[35] = U, j[36] = v) : v = j[36], j[37] !== S ? (w = !S && (0, t.jsx)(s.default, {
                name: "chevronDown",
                size: 24,
                color: "current"
            }), j[37] = S, j[38] = w) : w = j[38], j[39] !== A || j[40] !== S || j[41] !== O || j[42] !== B || j[43] !== h || j[44] !== p || j[45] !== y || j[46] !== g || j[47] !== b || j[48] !== v || j[49] !== w || j[50] !== f ? (x = (0, t.jsxs)(u.motion.button, {
                ref: A,
                type: "button",
                className: f,
                onClick: B,
                onKeyDown: O,
                "aria-expanded": S,
                "aria-haspopup": "listbox",
                animate: h,
                transition: p,
                children: [y, g, b, v, w]
            }), j[39] = A, j[40] = S, j[41] = O, j[42] = B, j[43] = h, j[44] = p, j[45] = y, j[46] = g, j[47] = b, j[48] = v, j[49] = w, j[50] = f, j[51] = x) : x = j[51], j[52] !== x || j[53] !== i ? (E = (0, t.jsx)("div", {
                className: i,
                children: x
            }), j[52] = x, j[53] = i, j[54] = E) : E = j[54], j[55] !== E || j[56] !== n ? (_ = (0, t.jsx)("div", {
                className: n,
                children: E
            }), j[55] = E, j[56] = n, j[57] = _) : _ = j[57], _
        },
        d = e => {
            let n, i, o, u, f, c = (0, r.c)(19),
                {
                    colorDot: h,
                    colorName: d,
                    colorClassName: p,
                    theme: m,
                    isOutOfStock: y,
                    image: g,
                    imageUrl: b,
                    title: v,
                    isPromo: w
                } = e;
            return c[0] !== p || c[1] !== h || c[2] !== d || c[3] !== y || c[4] !== m ? (n = h && (0, t.jsx)("div", {
                className: "flex items-center",
                children: (0, t.jsx)(a.default, {
                    colorName: d,
                    colorClassName: p,
                    theme: m,
                    isDisabled: !0,
                    isOutOfStock: y
                })
            }), c[0] = p, c[1] = h, c[2] = d, c[3] = y, c[4] = m, c[5] = n) : n = c[5], c[6] !== g || c[7] !== b || c[8] !== v ? (i = g && (0, t.jsx)(l.default, {
                src: b,
                alt: v,
                width: 32,
                height: 32
            }), c[6] = g, c[7] = b, c[8] = v, c[9] = i) : i = c[9], c[10] !== v ? (o = (0, t.jsx)("span", {
                className: "whitespace-nowrap",
                children: v
            }), c[10] = v, c[11] = o) : o = c[11], c[12] !== w ? (u = w && (0, t.jsx)("span", {
                className: "text-primary",
                children: (0, t.jsx)(s.default, {
                    name: "label",
                    size: 16,
                    color: "current"
                })
            }), c[12] = w, c[13] = u) : u = c[13], c[14] !== n || c[15] !== i || c[16] !== o || c[17] !== u ? (f = (0, t.jsxs)(t.Fragment, {
                children: [n, i, o, u]
            }), c[14] = n, c[15] = i, c[16] = o, c[17] = u, c[18] = f) : f = c[18], f
        },
        p = e => {
            let n, i, a = (0, r.c)(15),
                {
                    variants: s,
                    theme: l,
                    colorDot: u,
                    image: f,
                    size: c,
                    registerItemRef: h
                } = e;
            if (a[0] !== u || a[1] !== f || a[2] !== h || a[3] !== c || a[4] !== l || a[5] !== s) {
                let e;
                a[7] !== u || a[8] !== f || a[9] !== h || a[10] !== c || a[11] !== l ? (e = e => {
                    let {
                        id: r,
                        isOutOfStock: n,
                        colorName: i,
                        colorClassName: a,
                        imageUrl: s,
                        title: p,
                        isPromo: m
                    } = e;
                    return (0, t.jsx)("li", {
                        children: (0, t.jsx)("button", {
                            ref: e => h ? .(r, e),
                            type: "button",
                            disabled: n,
                            className: (0, o.default)("flex w-auto items-center gap-4 whitespace-nowrap rounded-full px-12 pe-16", {
                                "h-[40px]": "small" === c,
                                "h-[52px]": "medium" === c
                            }),
                            children: (0, t.jsx)(d, {
                                colorDot: u,
                                colorName: i,
                                colorClassName: a,
                                theme: l,
                                isOutOfStock: n,
                                image: f,
                                imageUrl: s,
                                title: p,
                                isPromo: m
                            })
                        })
                    }, `measure-${r}`)
                }, a[7] = u, a[8] = f, a[9] = h, a[10] = c, a[11] = l, a[12] = e) : e = a[12], n = s.map(e), a[0] = u, a[1] = f, a[2] = h, a[3] = c, a[4] = l, a[5] = s, a[6] = n
            } else n = a[6];
            return a[13] !== n ? (i = (0, t.jsx)("div", {
                "aria-hidden": !0,
                className: "fixed -left-[99999px] top-0",
                children: (0, t.jsx)("ul", {
                    className: "flex flex-col gap-8 p-8",
                    children: n
                })
            }), a[13] = n, a[14] = i) : i = a[14], i
        },
        m = e => {
            let n, i, a, s, l, f, h, m, y = (0, r.c)(39),
                {
                    variants: g,
                    theme: b,
                    colorDot: v,
                    image: w,
                    size: x,
                    currentId: E,
                    onSelect: _,
                    registerItemRef: j,
                    dropdownVariants: A,
                    isOpen: S,
                    direction: B
                } = e,
                O = "up" === (void 0 === B ? "down" : B) ? "rounded-t-[32px] border-t" : "rounded-b-[32px] border-b",
                T = "dark" === b ? "border-neutral-600 bg-neutral-900" : "border-neutral-200 bg-neutral-50";
            y[0] !== O || y[1] !== T ? (n = (0, o.default)("relative z-50 flex min-w-128 flex-col gap-8 border-l border-r p-8 px-[9px]", O, T), y[0] = O, y[1] = T, y[2] = n) : n = y[2], y[3] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                opacity: 0
            }, y[3] = i) : i = y[3];
            let k = +!!S;
            y[4] !== k ? (a = {
                opacity: k
            }, y[4] = k, y[5] = a) : a = y[5], y[6] === Symbol.for("react.memo_cache_sentinel") ? (s = [.5, .2, .1, 1], y[6] = s) : s = y[6];
            let C = .06 * !!S;
            y[7] !== C ? (l = {
                duration: .24,
                ease: s,
                delay: C
            }, y[7] = C, y[8] = l) : l = y[8];
            let N = A || g;
            if (y[9] !== v || y[10] !== E || y[11] !== w || y[12] !== S || y[13] !== _ || y[14] !== x || y[15] !== N || y[16] !== b) {
                let e;
                y[18] !== v || y[19] !== E || y[20] !== w || y[21] !== S || y[22] !== _ || y[23] !== x || y[24] !== b ? (e = (e, r) => {
                    let {
                        id: n,
                        isOutOfStock: i,
                        colorName: a,
                        colorClassName: s,
                        imageUrl: l,
                        title: f,
                        isPromo: h
                    } = e, p = n === E;
                    return (0, t.jsx)(u.motion.li, {
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
                            disabled: i,
                            onClick: () => _(n),
                            "data-option": !0,
                            className: (0, o.default)(c({
                                theme: b,
                                size: x,
                                isSelected: p,
                                showText: !0,
                                colorDot: v,
                                image: w,
                                isOpen: S
                            }), "[-webkit-tap-highlight-color:transparent] disabled:cursor-default disabled:opacity-60"),
                            children: (0, t.jsx)(d, {
                                colorDot: v,
                                colorName: a,
                                colorClassName: s,
                                theme: b,
                                isOutOfStock: i,
                                image: w,
                                imageUrl: l,
                                title: f,
                                isPromo: h
                            })
                        })
                    }, n)
                }, y[18] = v, y[19] = E, y[20] = w, y[21] = S, y[22] = _, y[23] = x, y[24] = b, y[25] = e) : e = y[25], f = N.map(e), y[9] = v, y[10] = E, y[11] = w, y[12] = S, y[13] = _, y[14] = x, y[15] = N, y[16] = b, y[17] = f
            } else f = y[17];
            return y[26] !== v || y[27] !== w || y[28] !== j || y[29] !== x || y[30] !== b || y[31] !== g ? (h = j && (0, t.jsx)(p, {
                variants: g,
                theme: b,
                colorDot: v,
                image: w,
                size: x,
                registerItemRef: j
            }), y[26] = v, y[27] = w, y[28] = j, y[29] = x, y[30] = b, y[31] = g, y[32] = h) : h = y[32], y[33] !== l || y[34] !== f || y[35] !== h || y[36] !== n || y[37] !== a ? (m = (0, t.jsxs)(u.motion.ul, {
                className: n,
                initial: i,
                animate: a,
                transition: l,
                children: [f, h]
            }), y[33] = l, y[34] = f, y[35] = h, y[36] = n, y[37] = a, y[38] = m) : m = y[38], m
        },
        y = (0, f.cva)("absolute z-30 transition-[padding,border-color] duration-300", {
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
        g = e => {
            let n, a, s, l, f, c, d, p, g, v, w, x, E, _, j, A, S, B, O, T, k, C, N, U, L, I, R, P = (0, r.c)(117),
                {
                    variants: D,
                    currentVariant: M,
                    onChange: z,
                    variantNumber: V,
                    colorDot: F,
                    showText: W,
                    image: Y,
                    size: q,
                    theme: K,
                    promoText: $,
                    dataCsOverrideId: G,
                    forceClose: H
                } = e,
                X = void 0 !== F && F,
                Z = void 0 !== Y && Y,
                J = void 0 === q ? "medium" : q,
                Q = void 0 === K ? "light" : K,
                ee = M ? .id ? ? "",
                [et, er] = (0, i.useState)(ee),
                en = J || "medium";
            P[0] !== H || P[1] !== en || P[2] !== D.length ? (n = {
                variantsLength: D.length,
                size: en,
                forceClose: H
            }, P[0] = H, P[1] = en, P[2] = D.length, P[3] = n) : n = P[3];
            let {
                isOpen: ei,
                setIsOpen: eo,
                showBorder: ea,
                dropdownDirection: es,
                horizontalShift: el,
                containerRef: eu,
                triggerRef: ef,
                listContainerRef: ec,
                initialWidth: eh,
                expandedWidth: ed,
                maxWidth: ep,
                registerItemRef: em,
                focusItemAt: ey
            } = (e => {
                let t, n, o, a, s, l, u, f, c, h, d, p, m, y, g, b, v = (0, r.c)(40),
                    {
                        variantsLength: w,
                        size: x,
                        forceClose: E
                    } = e,
                    [_, j] = (0, i.useState)(!1),
                    [A, S] = (0, i.useState)(!1),
                    [B, O] = (0, i.useState)("down"),
                    [T, k] = (0, i.useState)(0),
                    C = (0, i.useRef)(null),
                    N = (0, i.useRef)(null),
                    U = (0, i.useRef)(null),
                    {
                        maxWidth: L,
                        registerItemRef: I
                    } = (() => {
                        let e, t, n, o, a, s = (0, r.c)(6);
                        s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = new Map, s[0] = e) : e = s[0];
                        let l = (0, i.useRef)(e),
                            [u, f] = (0, i.useState)(0);
                        s[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (e, t) => {
                            t ? l.current.set(e, t) : l.current.delete(e)
                        }, s[1] = t) : t = s[1];
                        let c = t;
                        return s[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                            let e = () => {
                                let e = 0;
                                l.current.forEach(t => {
                                    e = Math.max(e, t.offsetWidth)
                                }), f(e)
                            };
                            e();
                            let t = new ResizeObserver(() => e());
                            return l.current.forEach(e => t.observe(e)), () => t.disconnect()
                        }, o = [], s[2] = n, s[3] = o) : (n = s[2], o = s[3]), (0, i.useLayoutEffect)(n, o), s[4] !== u ? (a = {
                            maxWidth: u,
                            registerItemRef: c
                        }, s[4] = u, s[5] = a) : a = s[5], a
                    })(),
                    [R, P] = (0, i.useState)(0),
                    [D, M] = (0, i.useState)(0);
                v[0] !== E ? (t = () => {
                    E && j(!1)
                }, n = [E], v[0] = E, v[1] = t, v[2] = n) : (t = v[1], n = v[2]), (0, i.useEffect)(t, n), v[3] !== R || v[4] !== _ || v[5] !== L ? (o = () => {
                    if (N.current) {
                        let e = N.current.offsetWidth;
                        0 === R ? (P(e), M(e)) : _ ? M(Math.max(e, L) + 12) : M(R)
                    }
                }, a = [_, L, R], v[3] = R, v[4] = _, v[5] = L, v[6] = o, v[7] = a) : (o = v[6], a = v[7]), (0, i.useLayoutEffect)(o, a), v[8] !== L || v[9] !== x || v[10] !== w ? (s = () => {
                    if (!N.current) return;
                    let e = N.current.getBoundingClientRect(),
                        t = window.innerHeight,
                        r = window.innerWidth,
                        n = e.top,
                        i = t - e.bottom;
                    O(i < w * ("small" === x ? 40 : 52) + 16 && n > i ? "up" : "down");
                    let o = Math.max(e.width, L) + 12,
                        a = e.left + (o + 4);
                    a > r - 75 ? k(r - 75 - a) : k(0)
                }, v[8] = L, v[9] = x, v[10] = w, v[11] = s) : s = v[11], v[12] !== R || v[13] !== _ || v[14] !== L || v[15] !== x || v[16] !== w ? (l = [w, x, _, L, R], v[12] = R, v[13] = _, v[14] = L, v[15] = x, v[16] = w, v[17] = l) : l = v[17], (0, i.useLayoutEffect)(s, l), v[18] === Symbol.for("react.memo_cache_sentinel") ? (u = () => {
                    let e = e => {
                        "Escape" === e.key && j(!1)
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, v[18] = u) : u = v[18], v[19] !== _ ? (f = [_], v[19] = _, v[20] = f) : f = v[20], (0, i.useEffect)(u, f), v[21] === Symbol.for("react.memo_cache_sentinel") ? (c = () => {
                    let e = e => {
                        C.current && (C.current.contains(e.target) || j(!1))
                    };
                    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
                }, v[21] = c) : c = v[21], v[22] !== _ ? (h = [_], v[22] = _, v[23] = h) : h = v[23], (0, i.useEffect)(c, h), v[24] !== _ ? (d = () => {
                    if (_) {
                        let e = setTimeout(() => {
                            S(!0)
                        }, 100);
                        return () => clearTimeout(e)
                    }
                    S(!1)
                }, p = [_], v[24] = _, v[25] = d, v[26] = p) : (d = v[25], p = v[26]), (0, i.useEffect)(d, p), v[27] === Symbol.for("react.memo_cache_sentinel") ? (m = e => {
                    let t = U.current;
                    if (!t) return;
                    let r = t.querySelectorAll("button[data-option]");
                    if (!r.length) return;
                    let n = Math.max(0, Math.min(e, r.length - 1));
                    r[n].focus({
                        preventScroll: !0
                    })
                }, v[27] = m) : m = v[27];
                let z = m;
                return v[28] !== _ ? (y = () => {
                    if (_) {
                        let e = window.setTimeout(() => z(0), 120);
                        return () => window.clearTimeout(e)
                    }
                }, g = [_, z], v[28] = _, v[29] = y, v[30] = g) : (y = v[29], g = v[30]), (0, i.useEffect)(y, g), v[31] !== B || v[32] !== D || v[33] !== T || v[34] !== R || v[35] !== _ || v[36] !== L || v[37] !== I || v[38] !== A ? (b = {
                    isOpen: _,
                    setIsOpen: j,
                    showBorder: A,
                    dropdownDirection: B,
                    horizontalShift: T,
                    containerRef: C,
                    triggerRef: N,
                    listContainerRef: U,
                    initialWidth: R,
                    expandedWidth: D,
                    maxWidth: L,
                    registerItemRef: I,
                    focusItemAt: z
                }, v[31] = B, v[32] = D, v[33] = T, v[34] = R, v[35] = _, v[36] = L, v[37] = I, v[38] = A, v[39] = b) : b = v[39], b
            })(n);
            P[4] !== et || P[5] !== ei || P[6] !== ee ? (s = () => {
                ei || et === ee || er(ee)
            }, a = [ei, ee, et], P[4] = et, P[5] = ei, P[6] = ee, P[7] = a, P[8] = s) : (a = P[7], s = P[8]), (0, i.useEffect)(s, a), P[9] !== M || P[10] !== et || P[11] !== D ? (l = D.find(e => e.id === et) || M, P[9] = M, P[10] = et, P[11] = D, P[12] = l) : l = P[12];
            let eg = l;
            if (P[13] !== et || P[14] !== D) {
                let e;
                P[16] !== et ? (e = e => e.id !== et, P[16] = et, P[17] = e) : e = P[17], f = D.filter(e), P[13] = et, P[14] = D, P[15] = f
            } else f = P[15];
            let eb = f,
                ev = "up" === es ? 8 : -8;
            P[18] !== ev ? (c = {
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                y: ev
            }, P[18] = ev, P[19] = c) : c = P[19];
            let ew = ei ? "auto" : 0,
                ex = ei && "down" === es ? 8 : 0,
                eE = ei && "up" === es ? 8 : 0;
            P[20] !== ew || P[21] !== ex || P[22] !== eE ? (d = {
                height: ew,
                paddingBottom: ex,
                paddingTop: eE,
                y: 0
            }, P[20] = ew, P[21] = ex, P[22] = eE, P[23] = d) : d = P[23], P[24] === Symbol.for("react.memo_cache_sentinel") ? (p = [.2, .8, .2, 1], P[24] = p) : p = P[24];
            let e_ = .08000000000000002 * !!ei;
            P[25] !== e_ ? (g = {
                duration: .16000000000000003,
                ease: p,
                delay: e_
            }, P[25] = e_, P[26] = g) : g = P[26], P[27] !== c || P[28] !== d || P[29] !== g ? (v = {
                initial: c,
                animate: d,
                transition: g
            }, P[27] = c, P[28] = d, P[29] = g, P[30] = v) : v = P[30];
            let ej = v;
            P[31] !== z || P[32] !== eo || P[33] !== ee ? (w = e => {
                eo(!1), e !== ee && z(e)
            }, P[31] = z, P[32] = eo, P[33] = ee, P[34] = w) : w = P[34];
            let eA = w;
            P[35] !== ey || P[36] !== ec ? (x = e => {
                var t, r, n;
                let i = ec.current;
                if (!i) return;
                let o = i.querySelectorAll("button[data-option]");
                if (!o.length) return;
                let a = Array.from(o).findIndex(b),
                    s = (t = e.key, r = o.length, n = a, "ArrowDown" === t ? n + 1 : "ArrowUp" === t ? n - 1 : "Home" === t ? 0 : "End" === t ? r - 1 : null);
                null !== s && (e.preventDefault(), ey(s))
            }, P[35] = ey, P[36] = ec, P[37] = x) : x = P[37];
            let eS = x;
            P[38] !== et || P[39] !== ey || P[40] !== eA || P[41] !== ei || P[42] !== eo ? (E = e => {
                if ("Enter" === e.key || " " === e.key) e.preventDefault(), ei ? eA(et) : eo(!0);
                else if ("ArrowDown" === e.key) {
                    e.preventDefault(), ei || eo(!0);
                    let t = window.setTimeout(() => ey(0), 40);
                    window.setTimeout(() => window.clearTimeout(t), 60)
                }
            }, P[38] = et, P[39] = ey, P[40] = eA, P[41] = ei, P[42] = eo, P[43] = E) : E = P[43];
            let eB = E;
            if (D.length < 2) return null;
            P[44] !== $ ? (_ = $ && (0, t.jsx)("div", {
                className: "text-primary body-3",
                children: $
            }), P[44] = $, P[45] = _) : _ = P[45];
            let eO = eh || "auto",
                eT = "small" === J ? "38px" : "52px";
            P[46] !== eO || P[47] !== eT ? (j = {
                width: eO,
                height: eT
            }, P[46] = eO, P[47] = eT, P[48] = j) : j = P[48], P[49] !== es || P[50] !== ei || P[51] !== ea || P[52] !== J || P[53] !== Q ? (A = y({
                theme: Q,
                dropdownDirection: es,
                showBorder: ea,
                isOpen: ei,
                size: J
            }), P[49] = es, P[50] = ei, P[51] = ea, P[52] = J, P[53] = Q, P[54] = A) : A = P[54];
            let ek = ei ? Math.max(ed, ep) + 4 : ed,
                eC = ei ? el : 0;
            P[55] !== ek || P[56] !== eC ? (S = {
                width: ek,
                x: eC
            }, P[55] = ek, P[56] = eC, P[57] = S) : S = P[57], P[58] === Symbol.for("react.memo_cache_sentinel") ? (B = {
                duration: .24,
                ease: [.2, .8, .2, 1]
            }, P[58] = B) : B = P[58], P[59] !== et || P[60] !== eA || P[61] !== ei || P[62] !== eo ? (O = () => {
                ei ? eA(et) : eo(!0)
            }, P[59] = et, P[60] = eA, P[61] = ei, P[62] = eo, P[63] = O) : O = P[63];
            let eN = J || "medium",
                eU = Q || "light",
                eL = void 0 !== V && V && !ei,
                eI = ei || void 0 !== W && W,
                eR = ed - 10,
                eP = ee === et;
            P[64] !== X || P[65] !== eg || P[66] !== es || P[67] !== eB || P[68] !== Z || P[69] !== ei || P[70] !== O || P[71] !== eN || P[72] !== eU || P[73] !== eL || P[74] !== eI || P[75] !== eR || P[76] !== eP || P[77] !== ef || P[78] !== D ? (T = (0, t.jsx)(h, {
                buttonRef: ef,
                isOpen: ei,
                onToggle: O,
                onKeyDown: eB,
                size: eN,
                theme: eU,
                dropdownDirection: es,
                colorDot: X,
                variantNumber: eL,
                showText: eI,
                currentVariant: eg,
                variants: D,
                image: Z,
                expandedWidth: eR,
                isSelected: eP
            }), P[64] = X, P[65] = eg, P[66] = es, P[67] = eB, P[68] = Z, P[69] = ei, P[70] = O, P[71] = eN, P[72] = eU, P[73] = eL, P[74] = eI, P[75] = eR, P[76] = eP, P[77] = ef, P[78] = D, P[79] = T) : T = P[79];
            let eD = "up" === es ? "bottom-full" : "top-full";
            P[80] !== eD ? (k = (0, o.default)("pointer-events-none absolute -left-px z-20 overflow-hidden", eD), P[80] = eD, P[81] = k) : k = P[81];
            let eM = ei ? Math.max(ed, ep) + 4 : ed,
                ez = ei ? "auto" : "none";
            P[82] !== eM || P[83] !== ez ? (C = {
                width: eM,
                pointerEvents: ez
            }, P[82] = eM, P[83] = ez, P[84] = C) : C = P[84];
            let eV = Q || "light",
                eF = J || "medium";
            return P[85] !== X || P[86] !== es || P[87] !== eb || P[88] !== eA || P[89] !== Z || P[90] !== ei || P[91] !== em || P[92] !== eV || P[93] !== eF || P[94] !== ee || P[95] !== D ? (N = (0, t.jsx)(m, {
                variants: D,
                theme: eV,
                colorDot: X,
                image: Z,
                size: eF,
                currentId: ee,
                onSelect: eA,
                registerItemRef: em,
                dropdownVariants: eb,
                isOpen: ei,
                direction: es
            }), P[85] = X, P[86] = es, P[87] = eb, P[88] = eA, P[89] = Z, P[90] = ei, P[91] = em, P[92] = eV, P[93] = eF, P[94] = ee, P[95] = D, P[96] = N) : N = P[96], P[97] !== ej || P[98] !== eS || P[99] !== ec || P[100] !== k || P[101] !== C || P[102] !== N ? (U = (0, t.jsx)(u.motion.div, {
                ref: ec,
                className: k,
                style: C,
                ...ej,
                onKeyDown: eS,
                children: N
            }), P[97] = ej, P[98] = eS, P[99] = ec, P[100] = k, P[101] = C, P[102] = N, P[103] = U) : U = P[103], P[104] !== eu || P[105] !== A || P[106] !== S || P[107] !== T || P[108] !== U ? (L = (0, t.jsxs)(u.motion.div, {
                ref: eu,
                className: A,
                animate: S,
                transition: B,
                children: [T, U]
            }), P[104] = eu, P[105] = A, P[106] = S, P[107] = T, P[108] = U, P[109] = L) : L = P[109], P[110] !== j || P[111] !== L ? (I = (0, t.jsx)("div", {
                className: "relative",
                style: j,
                children: L
            }), P[110] = j, P[111] = L, P[112] = I) : I = P[112], P[113] !== G || P[114] !== _ || P[115] !== I ? (R = (0, t.jsxs)("div", {
                "data-testid": "variant-selector-swatches",
                className: "relative flex flex-col gap-8",
                "data-cs-override-id": G,
                children: [_, I]
            }), P[113] = G, P[114] = _, P[115] = I, P[116] = R) : R = P[116], R
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
        let i, o, a, s, l, u, f, c, h = (0, r.c)(17);
        h[0] !== e ? ({
            variants: u,
            currentVariant: i,
            onChange: o,
            primaryVariants: a,
            secondaryVariants: l,
            ...s
        } = e, h[0] = e, h[1] = i, h[2] = o, h[3] = a, h[4] = s, h[5] = l, h[6] = u) : (i = h[1], o = h[2], a = h[3], s = h[4], l = h[5], u = h[6]);
        let {
            t: d
        } = (0, n.useTranslation)("common");
        h[7] !== i || h[8] !== o || h[9] !== a || h[10] !== l || h[11] !== d || h[12] !== u ? (f = (e => {
            let {
                variants: t,
                dataCsOverrideId: r,
                secondaryVariants: n,
                primaryVariants: i,
                currentVariant: o,
                onChange: a,
                t: s
            } = e, l = i ? .variants.length || n ? .variants.length ? [...i ? .variants ? .map(e => x(e, !!i.label)) ? ? [], ...n ? .variants ? .map(e => x(e, !1)) ? ? []] : t ? .map(e => x(e)), u = x(o), f = i ? .label || n ? .label || null;
            return {
                variants: (l ? ? []).map(e => E(e, s)),
                currentVariant: E(u, s),
                onChange: e => {
                    let r = ((e, t) => {
                        let {
                            currentVariant: r,
                            variantsFromShopify: n,
                            primaryVariants: i,
                            secondaryVariants: o
                        } = t;
                        return r.id === e ? r : [...i ? .variants || [], ...o ? .variants || [], ...n].find(t => t.id === e)
                    })(e, {
                        currentVariant: o,
                        variantsFromShopify: t ? ? [],
                        primaryVariants: i,
                        secondaryVariants: n
                    });
                    r && a(r)
                },
                promoText: f,
                dataCsOverrideId: r
            }
        })({
            variants: u,
            primaryVariants: a,
            secondaryVariants: l,
            currentVariant: i,
            onChange: o,
            t: d
        }), h[7] = i, h[8] = o, h[9] = a, h[10] = l, h[11] = d, h[12] = u, h[13] = f) : f = h[13];
        let p = f;
        return h[14] !== p || h[15] !== s ? (c = (0, t.jsx)(g, { ...p,
            ...s
        }), h[14] = p, h[15] = s, h[16] = c) : c = h[16], c
    }], 913473), e.s([], 305231)
}, 345082, 627528, e => {
    "use strict";
    e.s(["default", 0, (e, t, r) => {
        let n, i, o, a, s, l = "affiliate-named" === e.activeEntryChannel ? e.cryptoVouchers : null;
        return n = t.filter(({
            type: e
        }) => "campaign" === e), i = "affiliate-anonymous" === e.activeEntryChannel ? "affiliate-named" : e.activeEntryChannel, o = t.filter(({
            type: e
        }) => e === i), a = [], ("affiliate-named" === e.activeEntryChannel || "affiliate-anonymous" === e.activeEntryChannel) && l && l ? .length && (a = l), [...n, ...a, ...o].find(({
            eligibleVariantIds: e,
            type: t
        }) => (!s || t === s) && e.find(e => r === e)) || null
    }], 345082);
    var t = e.i(391398),
        r = e.i(261576),
        n = e.i(495854),
        i = e.i(870155);
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
        let u, f, c, h, d, p, m, y, g, b = (0, r.c)(28),
            {
                label: v,
                theme: w,
                drawer: x,
                cryptoCurrency: E,
                size: _
            } = e,
            j = void 0 === _ ? "medium" : _,
            A = s[E],
            S = l[w];
        b[0] !== E || b[1] !== v || b[2] !== j ? (u = (0, i.default)(v, {
            style: E,
            size: j
        }), b[0] = E, b[1] = v, b[2] = j, b[3] = u) : u = b[3];
        let B = u;
        b[4] !== A.border ? (f = (0, n.default)("inline-flex h-fit min-h-0 w-fit max-w-full flex-col p-4", A.border), b[4] = A.border, b[5] = f) : f = b[5];
        let O = "small" === j ? "body-3" : "body-1-semi-bold";
        b[6] !== A.background || b[7] !== O || b[8] !== S ? (c = (0, n.default)("inline-flex w-fit max-w-full items-center bg-linear-to-r p-4 leading-tight", S, A.background, O), b[6] = A.background, b[7] = O, b[8] = S, b[9] = c) : c = b[9];
        let T = "small" === j && "[&>em]:!py-0";
        b[10] !== T ? (h = (0, n.default)("inline-flex min-h-0 items-center gap-4", T), b[10] = T, b[11] = h) : h = b[11], b[12] !== j || b[13] !== A.icon ? (d = "small" !== j && (0, t.jsx)("span", {
            className: "inline-flex shrink-0",
            "data-testid": `offerBanner__icon--${A.icon}`,
            children: (0, t.jsx)(a.default, {
                name: A.icon,
                size: 24,
                strokeWidth: 1.5,
                color: "black",
                isFilled: !0
            })
        }), b[12] = j, b[13] = A.icon, b[14] = d) : d = b[14], b[15] !== B || b[16] !== h || b[17] !== d ? (p = (0, t.jsxs)("span", {
            "data-testid": "offerBanner__label",
            className: h,
            children: [B, d]
        }), b[15] = B, b[16] = h, b[17] = d, b[18] = p) : p = b[18], b[19] !== c || b[20] !== p ? (m = (0, t.jsx)("div", {
            className: c,
            children: p
        }), b[19] = c, b[20] = p, b[21] = m) : m = b[21], b[22] !== m || b[23] !== f ? (y = (0, t.jsx)("div", {
            className: f,
            "data-testid": "offerBanner",
            children: m
        }), b[22] = m, b[23] = f, b[24] = y) : y = b[24];
        let k = y;
        return b[25] !== k || b[26] !== x ? (g = x ? .dynamicDrawerContent ? (0, t.jsx)(o.default, {
            dynamicDrawerContent: x.dynamicDrawerContent,
            label: x.label,
            buttonClassname: (0, n.default)("text-primary body-1-semi-bold inline-flex h-fit min-h-0 w-fit max-w-full items-center p-0 text-start leading-tight"),
            children: k
        }) : k, b[25] = k, b[26] = x, b[27] = g) : g = b[27], g
    }], 627528)
}, 657610, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(798715);
    let n = {
        some: 0,
        all: 1
    };
    e.s(["useInView", 0, function(e, {
        root: i,
        margin: o,
        amount: a,
        once: s = !1,
        initial: l = !1
    } = {}) {
        let [u, f] = (0, t.useState)(l);
        return (0, t.useEffect)(() => {
            if (!e.current || s && u) return;
            let t = {
                root: i && i.current || void 0,
                margin: o,
                amount: a
            };
            return function(e, t, {
                root: i,
                margin: o,
                amount: a = "some"
            } = {}) {
                let s = (0, r.resolveElements)(e),
                    l = new WeakMap,
                    u = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = l.get(e.target);
                            if (!!r !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let r = t(e.target, e);
                                    "function" == typeof r ? l.set(e.target, r) : u.unobserve(e.target)
                                } else "function" == typeof r && (r(e), l.delete(e.target))
                        })
                    }, {
                        root: i,
                        rootMargin: o,
                        threshold: "number" == typeof a ? a : n[a]
                    });
                return s.forEach(e => u.observe(e)), () => u.disconnect()
            }(e.current, () => (f(!0), s ? void 0 : () => f(!1)), t)
        }, [i, e, o, s, a]), u
    }], 657610)
}]);

//# sourceMappingURL=05r9onia51et-.js.map