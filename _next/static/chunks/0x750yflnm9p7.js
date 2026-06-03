(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 394941, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(191788),
        o = "u" < typeof window,
        i = o ? () => {} : n.useLayoutEffect,
        u = o ? () => {} : n.useEffect;

    function s(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function s() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return o && (t ? .mountedInstances ? .add(e.children), s()), i(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), i(() => (t && (t._pendingUpdate = s), () => {
            t && (t._pendingUpdate = s)
        })), u(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 280963, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return g
        },
        defaultHead: function() {
            return f
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = e.r(731640),
        u = e.r(871650),
        s = e.r(391398),
        a = u._(e.r(191788)),
        l = i._(e.r(394941)),
        c = e.r(713584);

    function f() {
        return [(0, s.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, s.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function d(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(894470);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function y(e) {
        let t, r, n, o;
        return e.reduce(d, []).reverse().concat(f().reverse()).filter((t = new Set, r = new Set, n = new Set, o = {}, e => {
            let i = !0,
                u = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                u = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? i = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? i = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) n.has(r) ? i = !1 : n.add(r);
                            else {
                                let t = e.props[r],
                                    n = o[r] || new Set;
                                ("name" !== r || !u) && n.has(t) ? i = !1 : (n.add(t), o[r] = n)
                            }
                    }
            }
            return i
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return a.default.cloneElement(e, {
                key: r
            })
        })
    }
    let g = function({
        children: e
    }) {
        let t = (0, a.useContext)(c.HeadManagerContext);
        return (0, s.jsx)(l.default, {
            reduceComponentsToState: y,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 889129, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return h
        },
        MiddlewareNotFoundError: function() {
            return E
        },
        MissingStaticPage: function() {
            return b
        },
        NormalizeError: function() {
            return v
        },
        PageNotFoundError: function() {
            return _
        },
        SP: function() {
            return g
        },
        ST: function() {
            return m
        },
        WEB_VITALS: function() {
            return i
        },
        execOnce: function() {
            return u
        },
        getDisplayName: function() {
            return f
        },
        getLocationOrigin: function() {
            return l
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return a
        },
        isResSent: function() {
            return d
        },
        loadGetInitialProps: function() {
            return y
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return S
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function u(e) {
        let t, r = !1;
        return (...n) => (r || (r = !0, t = e(...n)), t)
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        a = e => s.test(e);

    function l() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function c() {
        let {
            href: e
        } = window.location, t = l();
        return e.substring(t.length)
    }

    function f(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function d(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function y(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await y(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && d(r)) return n;
        if (!n) throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let g = "u" > typeof performance,
        m = g && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class h extends Error {}
    class v extends Error {}
    class _ extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class b extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class E extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function S(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 920955, (e, t, r) => {
    var n = {
            229: function(e) {
                var t, r, n, o = e.exports = {};

                function i() {
                    throw Error("setTimeout has not been defined")
                }

                function u() {
                    throw Error("clearTimeout has not been defined")
                }
                try {
                    t = "function" == typeof setTimeout ? setTimeout : i
                } catch (e) {
                    t = i
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : u
                } catch (e) {
                    r = u
                }

                function s(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (r) {
                        try {
                            return t.call(null, e, 0)
                        } catch (r) {
                            return t.call(this, e, 0)
                        }
                    }
                }
                var a = [],
                    l = !1,
                    c = -1;

                function f() {
                    l && n && (l = !1, n.length ? a = n.concat(a) : c = -1, a.length && d())
                }

                function d() {
                    if (!l) {
                        var e = s(f);
                        l = !0;
                        for (var t = a.length; t;) {
                            for (n = a, a = []; ++c < t;) n && n[c].run();
                            c = -1, t = a.length
                        }
                        n = null, l = !1,
                            function(e) {
                                if (r === clearTimeout) return clearTimeout(e);
                                if ((r === u || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                                try {
                                    r(e)
                                } catch (t) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function p(e, t) {
                    this.fun = e, this.array = t
                }

                function y() {}
                o.nextTick = function(e) {
                    var t = Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    a.push(new p(e, t)), 1 !== a.length || l || s(d)
                }, p.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function(e) {
                    return []
                }, o.binding = function(e) {
                    throw Error("process.binding is not supported")
                }, o.cwd = function() {
                    return "/"
                }, o.chdir = function(e) {
                    throw Error("process.chdir is not supported")
                }, o.umask = function() {
                    return 0
                }
            }
        },
        o = {};

    function i(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = o[e] = {
                exports: {}
            },
            u = !0;
        try {
            n[e](r, r.exports, i), u = !1
        } finally {
            u && delete o[e]
        }
        return r.exports
    }
    i.ab = "/ROOT/node_modules/next/dist/compiled/process/", t.exports = i(229)
}, 350461, (e, t, r) => {
    "use strict";
    var n, o;
    t.exports = (null == (n = e.g.process) ? void 0 : n.env) && "object" == typeof(null == (o = e.g.process) ? void 0 : o.env) ? e.g.process : e.r(920955)
}, 361556, (e, t, r) => {
    "use strict";
    var n = e.i(350461),
        o = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        u = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        l = Symbol.for("react.consumer"),
        c = Symbol.for("react.context"),
        f = Symbol.for("react.forward_ref"),
        d = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        g = Symbol.for("react.activity"),
        m = Symbol.iterator,
        h = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        v = Object.assign,
        _ = {};

    function b(e, t, r) {
        this.props = e, this.context = t, this.refs = _, this.updater = r || h
    }

    function E() {}

    function S(e, t, r) {
        this.props = e, this.context = t, this.refs = _, this.updater = r || h
    }
    b.prototype.isReactComponent = {}, b.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, E.prototype = b.prototype;
    var O = S.prototype = new E;
    O.constructor = S, v(O, b.prototype), O.isPureReactComponent = !0;
    var w = Array.isArray;

    function x() {}
    var T = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        P = Object.prototype.hasOwnProperty;

    function j(e, t, r) {
        var n = r.ref;
        return {
            $$typeof: o,
            type: e,
            key: t,
            ref: void 0 !== n ? n : null,
            props: r
        }
    }

    function C(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }
    var k = /\/+/g;

    function L(e, t) {
        var r, n;
        return "object" == typeof e && null !== e && null != e.key ? (r = "" + e.key, n = {
            "=": "=0",
            ":": "=2"
        }, "$" + r.replace(/[=:]/g, function(e) {
            return n[e]
        })) : t.toString(36)
    }

    function R(e, t, r) {
        if (null == e) return e;
        var n = [],
            u = 0;
        return ! function e(t, r, n, u, s) {
            var a, l, c, f = typeof t;
            ("undefined" === f || "boolean" === f) && (t = null);
            var d = !1;
            if (null === t) d = !0;
            else switch (f) {
                case "bigint":
                case "string":
                case "number":
                    d = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case o:
                        case i:
                            d = !0;
                            break;
                        case y:
                            return e((d = t._init)(t._payload), r, n, u, s)
                    }
            }
            if (d) return s = s(t), d = "" === u ? "." + L(t, 0) : u, w(s) ? (n = "", null != d && (n = d.replace(k, "$&/") + "/"), e(s, r, n, "", function(e) {
                return e
            })) : null != s && (C(s) && (a = s, l = n + (null == s.key || t && t.key === s.key ? "" : ("" + s.key).replace(k, "$&/") + "/") + d, s = j(a.type, l, a.props)), r.push(s)), 1;
            d = 0;
            var p = "" === u ? "." : u + ":";
            if (w(t))
                for (var g = 0; g < t.length; g++) f = p + L(u = t[g], g), d += e(u, r, n, f, s);
            else if ("function" == typeof(g = null === (c = t) || "object" != typeof c ? null : "function" == typeof(c = m && c[m] || c["@@iterator"]) ? c : null))
                for (t = g.call(t), g = 0; !(u = t.next()).done;) f = p + L(u = u.value, g++), d += e(u, r, n, f, s);
            else if ("object" === f) {
                if ("function" == typeof t.then) return e(function(e) {
                    switch (e.status) {
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            switch ("string" == typeof e.status ? e.then(x, x) : (e.status = "pending", e.then(function(t) {
                                "pending" === e.status && (e.status = "fulfilled", e.value = t)
                            }, function(t) {
                                "pending" === e.status && (e.status = "rejected", e.reason = t)
                            })), e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason
                            }
                    }
                    throw e
                }(t), r, n, u, s);
                throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (r = String(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.")
            }
            return d
        }(e, n, "", "", function(e) {
            return t.call(r, e, u++)
        }), n
    }

    function A(e) {
        if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(function(t) {
                (0 === e._status || -1 === e._status) && (e._status = 1, e._result = t)
            }, function(t) {
                (0 === e._status || -1 === e._status) && (e._status = 2, e._result = t)
            }), -1 === e._status && (e._status = 0, e._result = t)
        }
        if (1 === e._status) return e._result.default;
        throw e._result
    }
    var N = "function" == typeof reportError ? reportError : function(e) {
        if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if ("object" == typeof n.default && "function" == typeof n.default.emit) return void n.default.emit("uncaughtException", e);
        console.error(e)
    };
    r.Activity = g, r.Children = {
        map: R,
        forEach: function(e, t, r) {
            R(e, function() {
                t.apply(this, arguments)
            }, r)
        },
        count: function(e) {
            var t = 0;
            return R(e, function() {
                t++
            }), t
        },
        toArray: function(e) {
            return R(e, function(e) {
                return e
            }) || []
        },
        only: function(e) {
            if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    }, r.Component = b, r.Fragment = u, r.Profiler = a, r.PureComponent = S, r.StrictMode = s, r.Suspense = d, r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(e) {
            return T.H.useMemoCache(e)
        }
    }, r.cache = function(e) {
        return function() {
            return e.apply(null, arguments)
        }
    }, r.cacheSignal = function() {
        return null
    }, r.cloneElement = function(e, t, r) {
        if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
        var n = v({}, e.props),
            o = e.key;
        if (null != t)
            for (i in void 0 !== t.key && (o = "" + t.key), t) P.call(t, i) && "key" !== i && "__self" !== i && "__source" !== i && ("ref" !== i || void 0 !== t.ref) && (n[i] = t[i]);
        var i = arguments.length - 2;
        if (1 === i) n.children = r;
        else if (1 < i) {
            for (var u = Array(i), s = 0; s < i; s++) u[s] = arguments[s + 2];
            n.children = u
        }
        return j(e.type, o, n)
    }, r.createContext = function(e) {
        return (e = {
            $$typeof: c,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = e, e.Consumer = {
            $$typeof: l,
            _context: e
        }, e
    }, r.createElement = function(e, t, r) {
        var n, o = {},
            i = null;
        if (null != t)
            for (n in void 0 !== t.key && (i = "" + t.key), t) P.call(t, n) && "key" !== n && "__self" !== n && "__source" !== n && (o[n] = t[n]);
        var u = arguments.length - 2;
        if (1 === u) o.children = r;
        else if (1 < u) {
            for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
            o.children = s
        }
        if (e && e.defaultProps)
            for (n in u = e.defaultProps) void 0 === o[n] && (o[n] = u[n]);
        return j(e, i, o)
    }, r.createRef = function() {
        return {
            current: null
        }
    }, r.forwardRef = function(e) {
        return {
            $$typeof: f,
            render: e
        }
    }, r.isValidElement = C, r.lazy = function(e) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: A
        }
    }, r.memo = function(e, t) {
        return {
            $$typeof: p,
            type: e,
            compare: void 0 === t ? null : t
        }
    }, r.startTransition = function(e) {
        var t = T.T,
            r = {};
        T.T = r;
        try {
            var n = e(),
                o = T.S;
            null !== o && o(r, n), "object" == typeof n && null !== n && "function" == typeof n.then && n.then(x, N)
        } catch (e) {
            N(e)
        } finally {
            null !== t && null !== r.types && (t.types = r.types), T.T = t
        }
    }, r.unstable_useCacheRefresh = function() {
        return T.H.useCacheRefresh()
    }, r.use = function(e) {
        return T.H.use(e)
    }, r.useActionState = function(e, t, r) {
        return T.H.useActionState(e, t, r)
    }, r.useCallback = function(e, t) {
        return T.H.useCallback(e, t)
    }, r.useContext = function(e) {
        return T.H.useContext(e)
    }, r.useDebugValue = function() {}, r.useDeferredValue = function(e, t) {
        return T.H.useDeferredValue(e, t)
    }, r.useEffect = function(e, t) {
        return T.H.useEffect(e, t)
    }, r.useEffectEvent = function(e) {
        return T.H.useEffectEvent(e)
    }, r.useId = function() {
        return T.H.useId()
    }, r.useImperativeHandle = function(e, t, r) {
        return T.H.useImperativeHandle(e, t, r)
    }, r.useInsertionEffect = function(e, t) {
        return T.H.useInsertionEffect(e, t)
    }, r.useLayoutEffect = function(e, t) {
        return T.H.useLayoutEffect(e, t)
    }, r.useMemo = function(e, t) {
        return T.H.useMemo(e, t)
    }, r.useOptimistic = function(e, t) {
        return T.H.useOptimistic(e, t)
    }, r.useReducer = function(e, t, r) {
        return T.H.useReducer(e, t, r)
    }, r.useRef = function(e) {
        return T.H.useRef(e)
    }, r.useState = function(e) {
        return T.H.useState(e)
    }, r.useSyncExternalStore = function(e, t, r) {
        return T.H.useSyncExternalStore(e, t, r)
    }, r.useTransition = function() {
        return T.H.useTransition()
    }, r.version = "19.2.4"
}, 191788, (e, t, r) => {
    "use strict";
    t.exports = e.r(361556)
}, 708481, (e, t, r) => {
    "use strict";
    var n = Symbol.for("react.transitional.element");

    function o(e, t, r) {
        var o = null;
        if (void 0 !== r && (o = "" + r), void 0 !== t.key && (o = "" + t.key), "key" in t)
            for (var i in r = {}, t) "key" !== i && (r[i] = t[i]);
        else r = t;
        return {
            $$typeof: n,
            type: e,
            key: o,
            ref: void 0 !== (t = r.ref) ? t : null,
            props: r
        }
    }
    r.Fragment = Symbol.for("react.fragment"), r.jsx = o, r.jsxs = o
}, 391398, (e, t, r) => {
    "use strict";
    t.exports = e.r(708481)
}, 731640, (e, t, r) => {
    "use strict";
    r._ = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, 871650, (e, t, r) => {
    "use strict";

    function n(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            r = new WeakMap;
        return (n = function(e) {
            return e ? r : t
        })(e)
    }
    r._ = function(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var r = n(t);
        if (r && r.has(e)) return r.get(e);
        var o = {
                __proto__: null
            },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                var s = i ? Object.getOwnPropertyDescriptor(e, u) : null;
                s && (s.get || s.set) ? Object.defineProperty(o, u, s) : o[u] = e[u]
            }
        return o.default = e, r && r.set(e, o), o
    }
}, 977915, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DEFAULT_SEGMENT_KEY: function() {
            return f
        },
        NOT_FOUND_SEGMENT_KEY: function() {
            return d
        },
        PAGE_SEGMENT_KEY: function() {
            return c
        },
        addSearchParamsIfPageSegment: function() {
            return a
        },
        computeSelectedLayoutSegment: function() {
            return l
        },
        getSegmentValue: function() {
            return i
        },
        getSelectedLayoutSegmentPath: function() {
            return function e(t, r, n = !0, o = []) {
                let u;
                if (n) u = t[1][r];
                else {
                    let e = t[1];
                    u = e.children ? ? Object.values(e)[0]
                }
                if (!u) return o;
                let s = i(u[0]);
                return !s || s.startsWith(c) ? o : (o.push(s), e(u, r, !1, o))
            }
        },
        isGroupSegment: function() {
            return u
        },
        isParallelRouteSegment: function() {
            return s
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });

    function i(e) {
        return Array.isArray(e) ? e[1] : e
    }

    function u(e) {
        return "(" === e[0] && e.endsWith(")")
    }

    function s(e) {
        return e.startsWith("@") && "@children" !== e
    }

    function a(e, t) {
        if (e.includes(c)) {
            let e = JSON.stringify(t);
            return "{}" !== e ? c + "?" + e : c
        }
        return e
    }

    function l(e, t) {
        if (!e || 0 === e.length) return null;
        let r = "children" === t ? e[0] : e[e.length - 1];
        return r === f ? null : r
    }
    let c = "__PAGE__",
        f = "__DEFAULT__",
        d = "/_not-found"
}, 7117, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "InvariantError", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    class n extends Error {
        constructor(e, t) {
            super(`Invariant: ${e.endsWith(".")?e:e+"."} This is a bug in Next.js.`, t), this.name = "InvariantError"
        }
    }
}, 713584, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "HeadManagerContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(731640)._(e.r(191788)).default.createContext({})
}, 894470, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 17431, (e, t, r) => {
    "use strict";
    var n = e.r(191788);

    function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var r = 2; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function i() {}
    var u = {
            d: {
                f: i,
                r: function() {
                    throw Error(o(522))
                },
                D: i,
                C: i,
                L: i,
                m: i,
                X: i,
                S: i,
                M: i
            },
            p: 0,
            findDOMNode: null
        },
        s = Symbol.for("react.portal"),
        a = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function l(e, t) {
        return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0
    }
    r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, r.createPortal = function(e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(o(299));
        return function(e, t, r) {
            var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: s,
                key: null == n ? null : "" + n,
                children: e,
                containerInfo: t,
                implementation: r
            }
        }(e, t, null, r)
    }, r.flushSync = function(e) {
        var t = a.T,
            r = u.p;
        try {
            if (a.T = null, u.p = 2, e) return e()
        } finally {
            a.T = t, u.p = r, u.d.f()
        }
    }, r.preconnect = function(e, t) {
        "string" == typeof e && (t = t ? "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, u.d.C(e, t))
    }, r.prefetchDNS = function(e) {
        "string" == typeof e && u.d.D(e)
    }, r.preinit = function(e, t) {
        if ("string" == typeof e && t && "string" == typeof t.as) {
            var r = t.as,
                n = l(r, t.crossOrigin),
                o = "string" == typeof t.integrity ? t.integrity : void 0,
                i = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
            "style" === r ? u.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
                crossOrigin: n,
                integrity: o,
                fetchPriority: i
            }) : "script" === r && u.d.X(e, {
                crossOrigin: n,
                integrity: o,
                fetchPriority: i,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0
            })
        }
    }, r.preinitModule = function(e, t) {
        if ("string" == typeof e)
            if ("object" == typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                    var r = l(t.as, t.crossOrigin);
                    u.d.M(e, {
                        crossOrigin: r,
                        integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                        nonce: "string" == typeof t.nonce ? t.nonce : void 0
                    })
                }
            } else null == t && u.d.M(e)
    }, r.preload = function(e, t) {
        if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
            var r = t.as,
                n = l(r, t.crossOrigin);
            u.d.L(e, r, {
                crossOrigin: n,
                integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                type: "string" == typeof t.type ? t.type : void 0,
                fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
                referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" == typeof t.media ? t.media : void 0
            })
        }
    }, r.preloadModule = function(e, t) {
        if ("string" == typeof e)
            if (t) {
                var r = l(t.as, t.crossOrigin);
                u.d.m(e, {
                    as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
                    crossOrigin: r,
                    integrity: "string" == typeof t.integrity ? t.integrity : void 0
                })
            } else u.d.m(e)
    }, r.requestFormReset = function(e) {
        u.d.r(e)
    }, r.unstable_batchedUpdates = function(e, t) {
        return e(t)
    }, r.useFormState = function(e, t, r) {
        return a.H.useFormState(e, t, r)
    }, r.useFormStatus = function() {
        return a.H.useHostTransitionStatus()
    }, r.version = "19.2.4"
}, 730943, (e, t, r) => {
    "use strict";
    ! function e() {
        if ("u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
            console.error(e)
        }
    }(), t.exports = e.r(17431)
}, 420262, (e, t, r) => {
    "use strict";
    let n;
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        getAssetToken: function() {
            return a
        },
        getAssetTokenQuery: function() {
            return l
        },
        getDeploymentId: function() {
            return u
        },
        getDeploymentIdQuery: function() {
            return s
        }
    };
    for (var i in o) Object.defineProperty(r, i, {
        enumerable: !0,
        get: o[i]
    });

    function u() {
        return n
    }

    function s(e = !1) {
        let t = n;
        return t ? `${e?"&":"?"}dpl=${t}` : ""
    }

    function a() {
        return !1
    }

    function l(e = !1) {
        return ""
    }
    "u" > typeof window ? (n = document.documentElement.dataset.dplId, delete document.documentElement.dataset.dplId) : n = void 0
}, 215125, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return i
        },
        imageConfigDefault: function() {
            return u
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        u = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumDiskCacheSize: void 0,
            maximumRedirects: 3,
            maximumResponseBody: 5e7,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1,
            customCacheHandler: !1
        }
}, 813521, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(731640)._(e.r(191788)),
        o = e.r(215125),
        i = n.default.createContext(o.imageConfigDefault)
}, 349057, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(480495),
        n = e.i(191788);
    e.s(["default", 0, () => {
        let e, o, i, u = (0, t.c)(4);
        u[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.getCookie)("entryViaLedgerLive"), u[0] = e) : e = u[0];
        let [s, a] = (0, n.useState)("true" === e);
        u[1] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
            a(!0), (0, r.setCookie)("entryViaLedgerLive", "true")
        }, u[1] = o) : o = u[1];
        let l = o;
        return u[2] !== s ? (i = {
            enteredViaLedgerLive: s,
            recordEntryViaLedgerLive: l
        }, u[2] = s, u[3] = i) : i = u[3], i
    }])
}, 793087, e => {
    "use strict";
    let t, r;
    var n = e.i(83026),
        o = e.i(388905),
        i = e.i(191788),
        u = e.i(344063),
        s = e.i(262448);

    function a(e, t) {
        let r, n = () => {
            let {
                currentTime: n
            } = t, o = (null === n ? 0 : n.value) / 100;
            r !== o && e(o), r = o
        };
        return s.frame.preUpdate(n, !0), () => (0, s.cancelFrame)(n)
    }
    var l = e.i(391424),
        c = e.i(720972),
        f = e.i(798715);
    let d = new WeakMap,
        p = (e, t, r) => (n, o) => o && o[0] ? o[0][e + "Size"] : (0, c.isSVGElement)(n) && "getBBox" in n ? n.getBBox()[t] : n[r],
        y = p("inline", "width", "offsetWidth"),
        g = p("block", "height", "offsetHeight");

    function m({
        target: e,
        borderBoxSize: t
    }) {
        d.get(e) ? .forEach(r => {
            r(e, {
                get width() {
                    return y(e, t)
                },
                get height() {
                    return g(e, t)
                }
            })
        })
    }

    function h(e) {
        e.forEach(m)
    }
    let v = new Set;
    var _ = e.i(661064),
        b = e.i(350833);
    let E = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        S = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function O(e, t, r, n) {
        let o = r[t],
            {
                length: i,
                position: u
            } = S[t],
            s = o.current,
            a = r.time;
        o.current = e[`scroll${u}`], o.scrollLength = e[`scroll${i}`] - e[`client${i}`], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = (0, _.progress)(0, o.scrollLength, o.current);
        let l = n - a;
        o.velocity = l > 50 ? 0 : (0, b.velocityPerSecond)(o.current - s, l)
    }
    e.i(350461);
    var w = e.i(354833),
        x = e.i(195129),
        T = e.i(371955),
        P = e.i(251723);
    let j = {
        start: 0,
        center: .5,
        end: 1
    };

    function C(e, t, r = 0) {
        let n = 0;
        if (e in j && (e = j[e]), "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? n = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? n = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (n = t * e), r + n
    }
    let k = [0, 0],
        L = [
            [0, 0],
            [1, 1]
        ],
        R = {
            x: 0,
            y: 0
        },
        A = new WeakMap,
        N = new WeakMap,
        M = new WeakMap,
        H = e => e === document.scrollingElement ? window : e;

    function I(e, {
        container: n = document.scrollingElement,
        ...o
    } = {}) {
        if (!n) return u.noop;
        let i = M.get(n);
        i || (i = new Set, M.set(n, i));
        let a = function(e, t, r, n = {}) {
            return {
                measure: t => {
                    ! function(e, t = e, r) {
                        if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
                            let n = t;
                            for (; n && n !== e;) r.x.targetOffset += n.offsetLeft, r.y.targetOffset += n.offsetTop, n = n.offsetParent
                        }
                        r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
                    }(e, n.target, r), O(e, "x", r, t), O(e, "y", r, t), r.time = t, (n.offset || n.target) && function(e, t, r) {
                        let {
                            offset: n = L
                        } = r, {
                            target: o = e,
                            axis: i = "y"
                        } = r, u = "y" === i ? "height" : "width", s = o !== e ? function(e, t) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                n = e;
                            for (; n && n !== t;)
                                if ((0, P.isHTMLElement)(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;
                                else if ("svg" === n.tagName) {
                                let e = n.getBoundingClientRect(),
                                    t = (n = n.parentElement).getBoundingClientRect();
                                r.x += e.left - t.left, r.y += e.top - t.top
                            } else if (n instanceof SVGGraphicsElement) {
                                let {
                                    x: e,
                                    y: t
                                } = n.getBBox();
                                r.x += e, r.y += t;
                                let o = null,
                                    i = n.parentNode;
                                for (; !o;) "svg" === i.tagName && (o = i), i = n.parentNode;
                                n = o
                            } else break;
                            return r
                        }(o, e) : R, a = o === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in o && "svg" !== o.tagName ? o.getBBox() : {
                            width: o.clientWidth,
                            height: o.clientHeight
                        }, l = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[i].offset.length = 0;
                        let c = !t[i].interpolate,
                            f = n.length;
                        for (let e = 0; e < f; e++) {
                            let r = function(e, t, r, n) {
                                let o = Array.isArray(e) ? e : k,
                                    i = 0;
                                return "number" == typeof e ? o = [e, e] : "string" == typeof e && (o = (e = e.trim()).includes(" ") ? e.split(" ") : [e, j[e] ? e : "0"]), (i = C(o[0], r, n)) - C(o[1], t)
                            }(n[e], l[u], a[u], s[i]);
                            c || r === t[i].interpolatorOffsets[e] || (c = !0), t[i].offset[e] = r
                        }
                        c && (t[i].interpolate = (0, w.interpolate)(t[i].offset, (0, x.defaultOffset)(n), {
                            clamp: !1
                        }), t[i].interpolatorOffsets = [...t[i].offset]), t[i].progress = (0, T.clamp)(0, 1, t[i].interpolate(t[i].current))
                    }(e, r, n)
                },
                notify: () => t(r)
            }
        }(n, e, {
            time: 0,
            x: E(),
            y: E()
        }, o);
        if (i.add(a), !A.has(n)) {
            let e, o = () => {
                    for (let e of i) e.measure(s.frameData.timestamp);
                    s.frame.preUpdate(u)
                },
                u = () => {
                    for (let e of i) e.notify()
                },
                a = () => s.frame.read(o);
            A.set(n, a);
            let l = H(n);
            window.addEventListener("resize", a, {
                passive: !0
            }), n !== document.documentElement && N.set(n, "function" == typeof n ? (v.add(n), r || (r = () => {
                let e = {
                    get width() {
                        return window.innerWidth
                    },
                    get height() {
                        return window.innerHeight
                    }
                };
                v.forEach(t => t(e))
            }, window.addEventListener("resize", r)), () => {
                v.delete(n), v.size || "function" != typeof r || (window.removeEventListener("resize", r), r = void 0)
            }) : (!t && "u" > typeof ResizeObserver && (t = new ResizeObserver(h)), (e = (0, f.resolveElements)(n)).forEach(e => {
                let r = d.get(e);
                r || (r = new Set, d.set(e, r)), r.add(a), t ? .observe(e)
            }), () => {
                e.forEach(e => {
                    let r = d.get(e);
                    r ? .delete(a), r ? .size || t ? .unobserve(e)
                })
            })), l.addEventListener("scroll", a, {
                passive: !0
            }), a()
        }
        let l = A.get(n);
        return s.frame.read(l, !1, !0), () => {
            (0, s.cancelFrame)(l);
            let e = M.get(n);
            if (!e || (e.delete(a), e.size)) return;
            let t = A.get(n);
            A.delete(n), t && (H(n).removeEventListener("scroll", t), N.get(n) ? .(), window.removeEventListener("resize", t))
        }
    }
    let $ = new Map;

    function D({
        source: e,
        container: t,
        ...r
    }) {
        var n;
        let o, i, {
            axis: u
        } = r;
        e && (t = e);
        let s = $.get(t) ? ? new Map;
        $.set(t, s);
        let a = r.target ? ? "self",
            c = s.get(a) ? ? {},
            f = u + (r.offset ? ? []).join(",");
        return c[f] || (c[f] = !r.target && (0, l.supportsScrollTimeline)() ? new ScrollTimeline({
            source: t,
            axis: u
        }) : (n = {
            container: t,
            ...r
        }, o = {
            value: 0
        }, i = I(e => {
            o.value = 100 * e[n.axis].progress
        }, n), {
            currentTime: o,
            cancel: i
        })), c[f]
    }
    var U = e.i(357126),
        z = e.i(39016);
    let V = () => ({
            scrollX: (0, n.motionValue)(0),
            scrollY: (0, n.motionValue)(0),
            scrollXProgress: (0, n.motionValue)(0),
            scrollYProgress: (0, n.motionValue)(0)
        }),
        W = e => !!e && !e.current;
    e.s(["useScroll", 0, function({
        container: e,
        target: t,
        ...r
    } = {}) {
        let n = (0, U.useConstant)(V),
            s = (0, i.useRef)(null),
            l = (0, i.useRef)(!1),
            c = (0, i.useCallback)(() => (s.current = function(e, {
                axis: t = "y",
                container: r = document.scrollingElement,
                ...n
            } = {}) {
                var o, i;
                let s;
                if (!r) return u.noop;
                let l = {
                    axis: t,
                    container: r,
                    ...n
                };
                return "function" == typeof e ? (o = e, i = l, 2 === o.length ? I(e => {
                    o(e[i.axis].progress, e)
                }, i) : a(o, D(i))) : (s = D(l), e.attachTimeline({
                    timeline: l.target ? void 0 : s,
                    observe: e => (e.pause(), a(t => {
                        e.time = e.iterationDuration * t
                    }, s))
                }))
            }((e, {
                x: t,
                y: r
            }) => {
                n.scrollX.set(t.current), n.scrollXProgress.set(t.progress), n.scrollY.set(r.current), n.scrollYProgress.set(r.progress)
            }, { ...r,
                container: e ? .current || void 0,
                target: t ? .current || void 0
            }), () => {
                s.current ? .()
            }), [e, t, JSON.stringify(r.offset)]);
        return (0, z.useIsomorphicLayoutEffect)(() => {
            if (l.current = !1, !(W(e) || W(t))) return c();
            l.current = !0
        }, [c]), (0, i.useEffect)(() => l.current ? ((0, o.invariant)(!W(e), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, o.invariant)(!W(t), "Target ref is defined but not hydrated", "use-scroll-ref"), c()) : void 0, [c]), n
    }], 793087)
}, 259936, 870155, 838779, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        n = e.i(648684);
    e.i(108399);
    var o = e.i(860231),
        i = e.i(495854);
    let u = (0, n.cva)("not-italic", {
            variants: {
                style: {
                    primary: "text-primary",
                    purple: "text-purple",
                    purpleBox: "bg-purple px-4 py-4 text-black",
                    BTC: "bg-crypto-btc px-4 py-4 text-black",
                    SOL: "bg-crypto-sol px-4 py-4 text-black",
                    thin: "font-light text-[#6A6A6A]"
                },
                font: {
                    bold: "font-bold"
                },
                size: {
                    medium: "",
                    small: ""
                }
            },
            compoundVariants: [{
                style: ["BTC", "SOL"],
                size: "small",
                class: "py-0"
            }],
            defaultVariants: {
                size: "medium"
            }
        }),
        s = (e, r = {}) => {
            if (!e) return null;
            let n = e.replaceAll("<em>", "</em>").split("</em>");
            return n.map((e, o) => {
                let i = `${e}`;
                if (o % 2 == 1) return (0, t.jsx)("em", {
                    className: u({
                        style: r.style,
                        font: r.font,
                        size: r.size
                    }),
                    children: e
                }, i);
                if (e.length > 0) {
                    let r = 1 === n.length;
                    return (0, t.jsxs)("span", {
                        className: r ? "py-8" : "",
                        children: [" ", e]
                    }, i)
                }
                return null
            })
        };
    e.s(["default", 0, s], 870155);
    let a = (0, n.cva)("flex w-fit grow-0 items-center gap-4 rounded-xs", {
            variants: {
                size: {
                    tiny: "body-4 px-6 py-2",
                    small: "body-3 px-6 py-2",
                    medium: "body-1 px-6 py-2 font-normal"
                },
                variant: {
                    primary: "bg-neutral-100 text-black",
                    secondary: "bg-neutral-900 text-white *:stroke-white"
                },
                theme: {
                    light: "",
                    dark: ""
                }
            },
            compoundVariants: [{
                variant: "primary",
                theme: "dark",
                class: "bg-neutral-700 text-white *:stroke-white"
            }, {
                variant: "secondary",
                theme: "dark",
                class: "bg-neutral-100 text-black *:stroke-black"
            }],
            defaultVariants: {
                size: "medium",
                variant: "primary"
            }
        }),
        l = e => {
            let n, u, l, c, f, d, p, y, g, m, h, v, _, b = (0, r.c)(27);
            b[0] !== e ? ({
                className: n,
                label: l,
                icon: u,
                variant: y,
                size: f,
                rtlIconRotation: d,
                theme: p,
                ...c
            } = e, b[0] = e, b[1] = n, b[2] = u, b[3] = l, b[4] = c, b[5] = f, b[6] = d, b[7] = p, b[8] = y) : (n = b[1], u = b[2], l = b[3], c = b[4], f = b[5], d = b[6], p = b[7], y = b[8]);
            let E = void 0 !== d && d,
                S = "medium" === f ? 20 : 16;
            return b[9] !== n || b[10] !== f || b[11] !== p || b[12] !== y ? (g = (0, i.default)(a({
                variant: y || "primary",
                size: f,
                theme: p
            }), n), b[9] = n, b[10] = f, b[11] = p, b[12] = y, b[13] = g) : g = b[13], b[14] !== u || b[15] !== S || b[16] !== E ? (m = u && (0, t.jsx)(o.default, {
                name: u,
                size: S,
                rtlRotation: E
            }), b[14] = u, b[15] = S, b[16] = E, b[17] = m) : m = b[17], b[18] !== l ? (h = s(l, {
                font: "bold"
            }), b[18] = l, b[19] = h) : h = b[19], b[20] !== h ? (v = (0, t.jsx)("span", {
                "data-testid": "tag__label",
                children: h
            }), b[20] = h, b[21] = v) : v = b[21], b[22] !== c || b[23] !== g || b[24] !== m || b[25] !== v ? (_ = (0, t.jsxs)("span", {
                "data-testid": "tag",
                className: g,
                ...c,
                children: [m, v]
            }), b[22] = c, b[23] = g, b[24] = m, b[25] = v, b[26] = _) : _ = b[26], _
        };
    l.displayName = "Tag", e.s(["default", 0, l], 838779), e.s([], 259936)
}, 63120, e => {
    "use strict";
    var t = e.i(354833),
        r = e.i(357126),
        n = e.i(262448),
        o = e.i(39016),
        i = e.i(83026),
        u = e.i(191788),
        s = e.i(112600);

    function a(e, t) {
        let a = function(e) {
                let t = (0, r.useConstant)(() => (0, i.motionValue)(e)),
                    {
                        isStatic: n
                    } = (0, u.useContext)(s.MotionConfigContext);
                if (n) {
                    let [, r] = (0, u.useState)(e);
                    (0, u.useEffect)(() => t.on("change", r), [])
                }
                return t
            }(t()),
            l = () => a.set(t());
        return l(), (0, o.useIsomorphicLayoutEffect)(() => {
            let t = () => n.frame.preRender(l, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, n.cancelFrame)(l)
            }
        }), a
    }

    function l(e, t) {
        let n = (0, r.useConstant)(() => []);
        return a(e, () => {
            n.length = 0;
            let r = e.length;
            for (let t = 0; t < r; t++) n[t] = e[t].get();
            return t(n)
        })
    }
    e.s(["useTransform", 0, function(e, r, n, o) {
        if ("function" == typeof e) {
            let t;
            return i.collectMotionValues.current = [], e(), t = a(i.collectMotionValues.current, e), i.collectMotionValues.current = void 0, t
        }
        let u = "function" == typeof r ? r : function(...e) {
            let r = !Array.isArray(e[0]),
                n = r ? 0 : -1,
                o = e[0 + n],
                i = e[1 + n],
                u = e[2 + n],
                s = e[3 + n],
                a = (0, t.interpolate)(i, u, s);
            return r ? a(o) : a
        }(r, n, o);
        return Array.isArray(e) ? l(e, u) : l([e], ([e]) => u(e))
    }], 63120)
}]);

//# sourceMappingURL=0ipeo6jweqey_.js.map