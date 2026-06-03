(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 578283, e => {
    "use strict";
    var t = function(e, r) {
            return (t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, r)
        },
        r = function() {
            return (r = Object.assign || function(e) {
                for (var t, r = 1, i = arguments.length; r < i; r++)
                    for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }).apply(this, arguments)
        };

    function i(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && i >= e.length && (e = void 0), {
                    value: e && e[i++],
                    done: !e
                }
            }
        };
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function n(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i, n, a = r.call(e),
            f = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = a.next()).done;) f.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (r = a.return) && r.call(a)
            } finally {
                if (n) throw n.error
            }
        }
        return f
    }

    function a(e) {
        return this instanceof a ? (this.v = e, this) : new a(e)
    }
    e.s(["__assign", () => r, "__asyncDelegator", 0, function(e) {
        var t, r;
        return t = {}, i("next"), i("throw", function(e) {
            throw e
        }), i("return"), t[Symbol.iterator] = function() {
            return this
        }, t;

        function i(i, n) {
            t[i] = e[i] ? function(t) {
                return (r = !r) ? {
                    value: a(e[i](t)),
                    done: "return" === i
                } : n ? n(t) : t
            } : n
        }
    }, "__asyncGenerator", 0, function(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var i, n = r.apply(e, t || []),
            f = [];
        return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
            return this
        }, i;

        function s(e) {
            n[e] && (i[e] = function(t) {
                return new Promise(function(r, i) {
                    f.push([e, t, r, i]) > 1 || o(e, t)
                })
            })
        }

        function o(e, t) {
            try {
                var r;
                (r = n[e](t)).value instanceof a ? Promise.resolve(r.value.v).then(d, c) : h(f[0][2], r)
            } catch (e) {
                h(f[0][3], e)
            }
        }

        function d(e) {
            o("next", e)
        }

        function c(e) {
            o("throw", e)
        }

        function h(e, t) {
            e(t), f.shift(), f.length && o(f[0][0], f[0][1])
        }
    }, "__asyncValues", 0, function(e) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = i(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function n(r) {
            t[r] = e[r] && function(t) {
                return new Promise(function(i, n) {
                    var a, f, s;
                    a = i, f = n, s = (t = e[r](t)).done, Promise.resolve(t.value).then(function(e) {
                        a({
                            value: e,
                            done: s
                        })
                    }, f)
                })
            }
        }
    }, "__await", 0, a, "__awaiter", 0, function(e, t, r, i) {
        return new(r || (r = Promise))(function(n, a) {
            function f(e) {
                try {
                    o(i.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    o(i.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(f, s)
            }
            o((i = i.apply(e, t || [])).next())
        })
    }, "__classPrivateFieldGet", 0, function(e, t) {
        if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
        return t.get(e)
    }, "__classPrivateFieldSet", 0, function(e, t, r) {
        if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r
    }, "__createBinding", 0, function(e, t, r, i) {
        void 0 === i && (i = r), e[i] = t[r]
    }, "__decorate", 0, function(e, t, r, i) {
        var n, a = arguments.length,
            f = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) f = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (f = (a < 3 ? n(f) : a > 3 ? n(t, r, f) : n(t, r)) || f);
        return a > 3 && f && Object.defineProperty(t, r, f), f
    }, "__exportStar", 0, function(e, t) {
        for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
    }, "__extends", 0, function(e, r) {
        function i() {
            this.constructor = e
        }
        t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
    }, "__generator", 0, function(e, t) {
        var r, i, n, a, f = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(a) {
            return function(s) {
                var o = [a, s];
                if (r) throw TypeError("Generator is already executing.");
                for (; f;) try {
                    if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                    switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                        case 0:
                        case 1:
                            n = o;
                            break;
                        case 4:
                            return f.label++, {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            f.label++, i = o[1], o = [0];
                            continue;
                        case 7:
                            o = f.ops.pop(), f.trys.pop();
                            continue;
                        default:
                            if (!(n = (n = f.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                f = 0;
                                continue
                            }
                            if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                f.label = o[1];
                                break
                            }
                            if (6 === o[0] && f.label < n[1]) {
                                f.label = n[1], n = o;
                                break
                            }
                            if (n && f.label < n[2]) {
                                f.label = n[2], f.ops.push(o);
                                break
                            }
                            n[2] && f.ops.pop(), f.trys.pop();
                            continue
                    }
                    o = t.call(e, f)
                } catch (e) {
                    o = [6, e], i = 0
                } finally {
                    r = n = 0
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }
        }
    }, "__importDefault", 0, function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }, "__importStar", 0, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t
    }, "__makeTemplateObject", 0, function(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
        }) : e.raw = t, e
    }, "__metadata", 0, function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }, "__param", 0, function(e, t) {
        return function(r, i) {
            t(r, i, e)
        }
    }, "__read", 0, n, "__rest", 0, function(e, t) {
        var r = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
        return r
    }, "__spread", 0, function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(n(arguments[t]));
        return e
    }, "__spreadArrays", 0, function() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        for (var i = Array(e), n = 0, t = 0; t < r; t++)
            for (var a = arguments[t], f = 0, s = a.length; f < s; f++, n++) i[n] = a[f];
        return i
    }, "__values", 0, i])
}, 249298, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.delay = void 0, r.delay = function(e) {
        return new Promise(t => {
            setTimeout(() => {
                t(!0)
            }, e)
        })
    }
}, 51790, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.ONE_THOUSAND = r.ONE_HUNDRED = void 0, r.ONE_HUNDRED = 100, r.ONE_THOUSAND = 1e3
}, 502286, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.ONE_YEAR = r.FOUR_WEEKS = r.THREE_WEEKS = r.TWO_WEEKS = r.ONE_WEEK = r.THIRTY_DAYS = r.SEVEN_DAYS = r.FIVE_DAYS = r.THREE_DAYS = r.ONE_DAY = r.TWENTY_FOUR_HOURS = r.TWELVE_HOURS = r.SIX_HOURS = r.THREE_HOURS = r.ONE_HOUR = r.SIXTY_MINUTES = r.THIRTY_MINUTES = r.TEN_MINUTES = r.FIVE_MINUTES = r.ONE_MINUTE = r.SIXTY_SECONDS = r.THIRTY_SECONDS = r.TEN_SECONDS = r.FIVE_SECONDS = r.ONE_SECOND = void 0, r.ONE_SECOND = 1, r.FIVE_SECONDS = 5, r.TEN_SECONDS = 10, r.THIRTY_SECONDS = 30, r.SIXTY_SECONDS = 60, r.ONE_MINUTE = r.SIXTY_SECONDS, r.FIVE_MINUTES = 5 * r.ONE_MINUTE, r.TEN_MINUTES = 10 * r.ONE_MINUTE, r.THIRTY_MINUTES = 30 * r.ONE_MINUTE, r.SIXTY_MINUTES = 60 * r.ONE_MINUTE, r.ONE_HOUR = r.SIXTY_MINUTES, r.THREE_HOURS = 3 * r.ONE_HOUR, r.SIX_HOURS = 6 * r.ONE_HOUR, r.TWELVE_HOURS = 12 * r.ONE_HOUR, r.TWENTY_FOUR_HOURS = 24 * r.ONE_HOUR, r.ONE_DAY = r.TWENTY_FOUR_HOURS, r.THREE_DAYS = 3 * r.ONE_DAY, r.FIVE_DAYS = 5 * r.ONE_DAY, r.SEVEN_DAYS = 7 * r.ONE_DAY, r.THIRTY_DAYS = 30 * r.ONE_DAY, r.ONE_WEEK = r.SEVEN_DAYS, r.TWO_WEEKS = 2 * r.ONE_WEEK, r.THREE_WEEKS = 3 * r.ONE_WEEK, r.FOUR_WEEKS = 4 * r.ONE_WEEK, r.ONE_YEAR = 365 * r.ONE_DAY
}, 556804, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    let i = e.r(578283);
    i.__exportStar(e.r(51790), r), i.__exportStar(e.r(502286), r)
}, 243899, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.fromMiliseconds = r.toMiliseconds = void 0;
    let i = e.r(556804);
    r.toMiliseconds = function(e) {
        return e * i.ONE_THOUSAND
    }, r.fromMiliseconds = function(e) {
        return Math.floor(e / i.ONE_THOUSAND)
    }
}, 954890, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    let i = e.r(578283);
    i.__exportStar(e.r(249298), r), i.__exportStar(e.r(243899), r)
}, 135060, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.Watch = void 0;
    class i {
        constructor() {
            this.timestamps = new Map
        }
        start(e) {
            if (this.timestamps.has(e)) throw Error(`Watch already started for label: ${e}`);
            this.timestamps.set(e, {
                started: Date.now()
            })
        }
        stop(e) {
            let t = this.get(e);
            if (void 0 !== t.elapsed) throw Error(`Watch already stopped for label: ${e}`);
            let r = Date.now() - t.started;
            this.timestamps.set(e, {
                started: t.started,
                elapsed: r
            })
        }
        get(e) {
            let t = this.timestamps.get(e);
            if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
            return t
        }
        elapsed(e) {
            let t = this.get(e);
            return t.elapsed || Date.now() - t.started
        }
    }
    r.Watch = i, r.default = i
}, 937357, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.IWatch = void 0, r.IWatch = class {}
}, 658396, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), e.r(578283).__exportStar(e.r(937357), r)
}, 711790, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    let i = e.r(578283);
    i.__exportStar(e.r(954890), r), i.__exportStar(e.r(135060), r), i.__exportStar(e.r(658396), r), i.__exportStar(e.r(556804), r)
}, 835588, 211902, 96469, 136362, e => {
    "use strict";
    let t;
    var r = e.i(679753),
        i = e.i(711790);
    class n {}
    e.s(["IEvents", 0, n], 211902);
    class a extends n {
        constructor(e) {
            super()
        }
    }
    let f = i.FIVE_SECONDS,
        s = {
            pulse: "heartbeat_pulse"
        };
    class o extends a {
        constructor(e) {
            super(e), this.events = new r.EventEmitter, this.interval = f, this.interval = e ? .interval || f
        }
        static async init(e) {
            let t = new o(e);
            return await t.init(), t
        }
        async init() {
            await this.initialize()
        }
        stop() {
            clearInterval(this.intervalRef)
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
        async initialize() {
            this.intervalRef = setInterval(() => this.pulse(), (0, i.toMiliseconds)(this.interval))
        }
        pulse() {
            this.events.emit(s.pulse)
        }
    }
    e.s(["HEARTBEAT_EVENTS", 0, s, "HeartBeat", 0, o], 835588);
    let d = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        c = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        h = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

    function u(e, t) {
        var r;
        return "__proto__" === e || "constructor" === e && t && "object" == typeof t && "prototype" in t ? void(r = e, console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`)) : t
    }

    function l(e, t = {}) {
        if ("string" != typeof e) return e;
        if ('"' === e[0] && '"' === e[e.length - 1] && -1 === e.indexOf("\\")) return e.slice(1, -1);
        let r = e.trim();
        if (r.length <= 9) switch (r.toLowerCase()) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "undefined":
                return;
            case "null":
                return null;
            case "nan":
                return NaN;
            case "infinity":
                return 1 / 0;
            case "-infinity":
                return -1 / 0
        }
        if (!h.test(e)) {
            if (t.strict) throw SyntaxError("[destr] Invalid JSON");
            return e
        }
        try {
            if (d.test(e) || c.test(e)) {
                if (t.strict) throw Error("[destr] Possible prototype pollution");
                return JSON.parse(e, u)
            }
            return JSON.parse(e)
        } catch (r) {
            if (t.strict) throw r;
            return e
        }
    }
    var b = e.i(221168);

    function p(e, ...t) {
        try {
            var r;
            return (r = e(...t)) && "function" == typeof r.then ? r : Promise.resolve(r)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    function m(e) {
        let t, r;
        if (t = typeof e, null === e || "object" !== t && "function" !== t) return String(e);
        if (!(r = Object.getPrototypeOf(e)) || r.isPrototypeOf(Object) || Array.isArray(e)) return JSON.stringify(e);
        if ("function" == typeof e.toJSON) return m(e.toJSON());
        throw Error("[unstorage] Cannot stringify value!")
    }
    let v = "base64:";

    function g(e) {
        return e && e.split("?")[0] ? .replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || ""
    }

    function y(e) {
        return (e = g(e)) ? e + ":" : ""
    }

    function w(e, t, r) {
        return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {}
    }
    async function x(e) {
        "function" == typeof e.dispose && await p(e.dispose)
    }

    function M(e) {
        return new Promise((t, r) => {
            e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
        })
    }

    function _(e, t) {
        let r;
        return (i, n) => (() => {
            if (r) return r;
            let i = indexedDB.open(e);
            return i.onupgradeneeded = () => i.result.createObjectStore(t), (r = M(i)).then(e => {
                e.onclose = () => r = void 0
            }, () => {}), r
        })().then(e => n(e.transaction(t, i).objectStore(t)))
    }

    function S() {
        return t || (t = _("keyval-store", "keyval")), t
    }
    e.s(["createStorage", 0, function(e = {}) {
        let t, r = {
                mounts: {
                    "": e.driver || (t = new Map, {
                        name: "memory",
                        getInstance: () => t,
                        hasItem: e => t.has(e),
                        getItem: e => t.get(e) ? ? null,
                        getItemRaw: e => t.get(e) ? ? null,
                        setItem(e, r) {
                            t.set(e, r)
                        },
                        setItemRaw(e, r) {
                            t.set(e, r)
                        },
                        removeItem(e) {
                            t.delete(e)
                        },
                        getKeys: () => [...t.keys()],
                        clear() {
                            t.clear()
                        },
                        dispose() {
                            t.clear()
                        }
                    })
                },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {}
            },
            i = e => {
                for (let t of r.mountpoints)
                    if (e.startsWith(t)) return {
                        base: t,
                        relativeKey: e.slice(t.length),
                        driver: r.mounts[t]
                    };
                return {
                    base: "",
                    relativeKey: e,
                    driver: r.mounts[""]
                }
            },
            n = (e, t) => r.mountpoints.filter(r => r.startsWith(e) || t && e.startsWith(r)).map(t => ({
                relativeBase: e.length > t.length ? e.slice(t.length) : void 0,
                mountpoint: t,
                driver: r.mounts[t]
            })),
            a = (e, t) => {
                if (r.watching)
                    for (let i of (t = g(t), r.watchListeners)) i(e, t)
            },
            f = async () => {
                if (!r.watching)
                    for (let e in r.watching = !0, r.mounts) r.unwatch[e] = await w(r.mounts[e], a, e)
            },
            s = async () => {
                if (r.watching) {
                    for (let e in r.unwatch) await r.unwatch[e]();
                    r.unwatch = {}, r.watching = !1
                }
            },
            o = (e, t, r) => {
                let n = new Map,
                    a = e => {
                        let t = n.get(e.base);
                        return t || (t = {
                            driver: e.driver,
                            base: e.base,
                            items: []
                        }, n.set(e.base, t)), t
                    };
                for (let r of e) {
                    let e = "string" == typeof r,
                        n = g(e ? r : r.key),
                        f = e ? void 0 : r.value,
                        s = e || !r.options ? t : { ...t,
                            ...r.options
                        },
                        o = i(n);
                    a(o).items.push({
                        key: n,
                        value: f,
                        relativeKey: o.relativeKey,
                        options: s
                    })
                }
                return Promise.all([...n.values()].map(e => r(e))).then(e => e.flat())
            },
            d = {
                hasItem(e, t = {}) {
                    let {
                        relativeKey: r,
                        driver: n
                    } = i(e = g(e));
                    return p(n.hasItem, r, t)
                },
                getItem(e, t = {}) {
                    let {
                        relativeKey: r,
                        driver: n
                    } = i(e = g(e));
                    return p(n.getItem, r, t).then(e => l(e))
                },
                getItems: (e, t = {}) => o(e, t, e => e.driver.getItems ? p(e.driver.getItems, e.items.map(e => ({
                    key: e.relativeKey,
                    options: e.options
                })), t).then(t => t.map(t => ({
                    key: function(...e) {
                        return g(e.join(":"))
                    }(e.base, t.key),
                    value: l(t.value)
                }))) : Promise.all(e.items.map(t => p(e.driver.getItem, t.relativeKey, t.options).then(e => ({
                    key: t.key,
                    value: l(e)
                }))))),
                getItemRaw(e, t = {}) {
                    let {
                        relativeKey: r,
                        driver: n
                    } = i(e = g(e));
                    return n.getItemRaw ? p(n.getItemRaw, r, t) : p(n.getItem, r, t).then(e => {
                        var t;
                        return "string" == typeof e && e.startsWith(v) ? (t = e.slice(v.length), globalThis.Buffer ? b.Buffer.from(t, "base64") : Uint8Array.from(globalThis.atob(t), e => e.codePointAt(0))) : e
                    })
                },
                async setItem(e, t, r = {}) {
                    if (void 0 === t) return d.removeItem(e);
                    let {
                        relativeKey: n,
                        driver: f
                    } = i(e = g(e));
                    f.setItem && (await p(f.setItem, n, m(t), r), f.watch || a("update", e))
                },
                async setItems(e, t) {
                    await o(e, t, async e => {
                        if (e.driver.setItems) return p(e.driver.setItems, e.items.map(e => ({
                            key: e.relativeKey,
                            value: m(e.value),
                            options: e.options
                        })), t);
                        e.driver.setItem && await Promise.all(e.items.map(t => p(e.driver.setItem, t.relativeKey, m(t.value), t.options)))
                    })
                },
                async setItemRaw(e, t, r = {}) {
                    if (void 0 === t) return d.removeItem(e, r);
                    let {
                        relativeKey: n,
                        driver: f
                    } = i(e = g(e));
                    if (f.setItemRaw) await p(f.setItemRaw, n, t, r);
                    else {
                        var s;
                        if (!f.setItem) return;
                        await p(f.setItem, n, "string" == typeof t ? t : v + (s = t, globalThis.Buffer ? b.Buffer.from(s).toString("base64") : globalThis.btoa(String.fromCodePoint(...s))), r)
                    }
                    f.watch || a("update", e)
                },
                async removeItem(e, t = {}) {
                    "boolean" == typeof t && (t = {
                        removeMeta: t
                    });
                    let {
                        relativeKey: r,
                        driver: n
                    } = i(e = g(e));
                    n.removeItem && (await p(n.removeItem, r, t), (t.removeMeta || t.removeMata) && await p(n.removeItem, r + "$", t), n.watch || a("remove", e))
                },
                async getMeta(e, t = {}) {
                    "boolean" == typeof t && (t = {
                        nativeOnly: t
                    });
                    let {
                        relativeKey: r,
                        driver: n
                    } = i(e = g(e)), a = Object.create(null);
                    if (n.getMeta && Object.assign(a, await p(n.getMeta, r, t)), !t.nativeOnly) {
                        let e = await p(n.getItem, r + "$", t).then(e => l(e));
                        e && "object" == typeof e && ("string" == typeof e.atime && (e.atime = new Date(e.atime)), "string" == typeof e.mtime && (e.mtime = new Date(e.mtime)), Object.assign(a, e))
                    }
                    return a
                },
                setMeta(e, t, r = {}) {
                    return this.setItem(e + "$", t, r)
                },
                removeMeta(e, t = {}) {
                    return this.removeItem(e + "$", t)
                },
                async getKeys(e, t = {}) {
                    let r = n(e = y(e), !0),
                        i = [],
                        a = [],
                        f = !0;
                    for (let e of r) {
                        for (let r of (e.driver.flags ? .maxDepth || (f = !1), await p(e.driver.getKeys, e.relativeBase, t))) {
                            let t = e.mountpoint + g(r);
                            i.some(e => t.startsWith(e)) || a.push(t)
                        }
                        i = [e.mountpoint, ...i.filter(t => !t.startsWith(e.mountpoint))]
                    }
                    let s = void 0 !== t.maxDepth && !f;
                    return a.filter(r => {
                        var i;
                        return (!s || function(e, t) {
                            if (void 0 === t) return !0;
                            let r = 0,
                                i = e.indexOf(":");
                            for (; i > -1;) r++, i = e.indexOf(":", i + 1);
                            return r <= t
                        }(r, t.maxDepth)) && ((i = e) ? r.startsWith(i) && "$" !== r[r.length - 1] : "$" !== r[r.length - 1])
                    })
                },
                async clear(e, t = {}) {
                    e = y(e), await Promise.all(n(e, !1).map(async e => e.driver.clear ? p(e.driver.clear, e.relativeBase, t) : e.driver.removeItem ? Promise.all((await e.driver.getKeys(e.relativeBase || "", t)).map(r => e.driver.removeItem(r, t))) : void 0))
                },
                async dispose() {
                    await Promise.all(Object.values(r.mounts).map(e => x(e)))
                },
                watch: async e => (await f(), r.watchListeners.push(e), async () => {
                    r.watchListeners = r.watchListeners.filter(t => t !== e), 0 === r.watchListeners.length && await s()
                }),
                async unwatch() {
                    r.watchListeners = [], await s()
                },
                mount(e, t) {
                    if ((e = y(e)) && r.mounts[e]) throw Error(`already mounted at ${e}`);
                    return e && (r.mountpoints.push(e), r.mountpoints.sort((e, t) => t.length - e.length)), r.mounts[e] = t, r.watching && Promise.resolve(w(t, a, e)).then(t => {
                        r.unwatch[e] = t
                    }).catch(console.error), d
                },
                async unmount(e, t = !0) {
                    (e = y(e)) && r.mounts[e] && (r.watching && e in r.unwatch && (r.unwatch[e] ? .(), delete r.unwatch[e]), t && await x(r.mounts[e]), r.mountpoints = r.mountpoints.filter(t => t !== e), delete r.mounts[e])
                },
                getMount(e = "") {
                    let t = i(e = g(e) + ":");
                    return {
                        driver: t.driver,
                        base: t.base
                    }
                },
                getMounts: (e = "", t = {}) => n(e = g(e), t.parents).map(e => ({
                    driver: e.driver,
                    base: e.mountpoint
                })),
                keys: (e, t = {}) => d.getKeys(e, t),
                get: (e, t = {}) => d.getItem(e, t),
                set: (e, t, r = {}) => d.setItem(e, t, r),
                has: (e, t = {}) => d.hasItem(e, t),
                del: (e, t = {}) => d.removeItem(e, t),
                remove: (e, t = {}) => d.removeItem(e, t)
            };
        return d
    }], 96469), e.s(["clear", 0, function(e = S()) {
        return e("readwrite", e => (e.clear(), M(e.transaction)))
    }, "createStore", 0, _, "del", 0, function(e, t = S()) {
        return t("readwrite", t => (t.delete(e), M(t.transaction)))
    }, "get", 0, function(e, t = S()) {
        return t("readonly", t => M(t.get(e)))
    }, "keys", 0, function(e = S()) {
        return e("readonly", e => {
            var t;
            if (e.getAllKeys) return M(e.getAllKeys());
            let r = [];
            return (t = e => r.push(e.key), e.openCursor().onsuccess = function() {
                this.result && (t(this.result), this.result.continue())
            }, M(e.transaction)).then(() => r)
        })
    }, "set", 0, function(e, t, r = S()) {
        return r("readwrite", r => (r.put(t, e), M(r.transaction)))
    }], 136362)
}, 712314, e => {
    "use strict";
    e.s(["safeJsonParse", 0, function(e) {
        if ("string" != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
        try {
            return JSON.parse(e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3'), (e, t) => "string" == typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t)
        } catch (t) {
            return e
        }
    }, "safeJsonStringify", 0, function(e) {
        return "string" == typeof e ? e : JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t) || ""
    }])
}, 608842, (e, t, r) => {
    "use strict";

    function i(e) {
        try {
            return JSON.stringify(e)
        } catch (e) {
            return '"[Circular]"'
        }
    }
    t.exports = function(e, t, r) {
        var n = r && r.stringify || i;
        if ("object" == typeof e && null !== e) {
            var a = t.length + 1;
            if (1 === a) return e;
            var f = Array(a);
            f[0] = n(e);
            for (var s = 1; s < a; s++) f[s] = n(t[s]);
            return f.join(" ")
        }
        if ("string" != typeof e) return e;
        var o = t.length;
        if (0 === o) return e;
        for (var d = "", c = 0, h = -1, u = e && e.length || 0, l = 0; l < u;) {
            if (37 === e.charCodeAt(l) && l + 1 < u) {
                switch (h = h > -1 ? h : 0, e.charCodeAt(l + 1)) {
                    case 100:
                    case 102:
                        if (c >= o || null == t[c]) break;
                        h < l && (d += e.slice(h, l)), d += Number(t[c]), h = l + 2, l++;
                        break;
                    case 105:
                        if (c >= o || null == t[c]) break;
                        h < l && (d += e.slice(h, l)), d += Math.floor(Number(t[c])), h = l + 2, l++;
                        break;
                    case 79:
                    case 111:
                    case 106:
                        if (c >= o || void 0 === t[c]) break;
                        h < l && (d += e.slice(h, l));
                        var b = typeof t[c];
                        if ("string" === b) {
                            d += "'" + t[c] + "'", h = l + 2, l++;
                            break
                        }
                        if ("function" === b) {
                            d += t[c].name || "<anonymous>", h = l + 2, l++;
                            break
                        }
                        d += n(t[c]), h = l + 2, l++;
                        break;
                    case 115:
                        if (c >= o) break;
                        h < l && (d += e.slice(h, l)), d += String(t[c]), h = l + 2, l++;
                        break;
                    case 37:
                        h < l && (d += e.slice(h, l)), d += "%", h = l + 2, l++, c--
                }++c
            }++l
        }
        return -1 === h ? e : (h < u && (d += e.slice(h)), d)
    }
}, 5548, (e, t, r) => {
    "use strict";
    let i = e.r(608842);
    t.exports = a;
    let n = function() {
        function e(e) {
            return void 0 !== e && e
        }
        try {
            if ("u" > typeof globalThis) return globalThis;
            return Object.defineProperty(Object.prototype, "globalThis", {
                get: function() {
                    return delete Object.prototype.globalThis, this.globalThis = this
                },
                configurable: !0
            }), globalThis
        } catch (t) {
            return e(self) || e(window) || e(this) || {}
        }
    }().console || {};

    function a(e) {
        var t, r;
        (e = e || {}).browser = e.browser || {};
        let i = e.browser.transmit;
        if (i && "function" != typeof i.send) throw Error("pino: transmit option must have a send function");
        let c = e.browser.write || n;
        e.browser.write && (e.browser.asObject = !0);
        let h = e.serializers || {},
            p = (t = e.browser.serialize, Array.isArray(t) ? t.filter(function(e) {
                return "!stdSerializers.err" !== e
            }) : !0 === t && Object.keys(h)),
            m = e.browser.serialize;
        Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (m = !1), "function" == typeof c && (c.error = c.fatal = c.warn = c.info = c.debug = c.trace = c), !1 === e.enabled && (e.level = "silent");
        let v = e.level || "info",
            g = Object.create(c);
        g.log || (g.log = u), Object.defineProperty(g, "levelVal", {
            get: function() {
                return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
            }
        }), Object.defineProperty(g, "level", {
            get: function() {
                return this._level
            },
            set: function(e) {
                if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                this._level = e, f(y, g, "error", "log"), f(y, g, "fatal", "error"), f(y, g, "warn", "error"), f(y, g, "info", "log"), f(y, g, "debug", "log"), f(y, g, "trace", "log")
            }
        });
        let y = {
            transmit: i,
            serialize: p,
            asObject: e.browser.asObject,
            levels: ["error", "fatal", "warn", "info", "debug", "trace"],
            timestamp: "function" == typeof(r = e).timestamp ? r.timestamp : !1 === r.timestamp ? l : b
        };
        return g.levels = a.levels, g.level = v, g.setMaxListeners = g.getMaxListeners = g.emit = g.addListener = g.on = g.prependListener = g.once = g.prependOnceListener = g.removeListener = g.removeAllListeners = g.listeners = g.listenerCount = g.eventNames = g.write = g.flush = u, g.serializers = h, g._serialize = p, g._stdErrSerialize = m, g.child = function(t, r) {
            if (!t) throw Error("missing bindings for child Pino");
            r = r || {}, p && t.serializers && (r.serializers = t.serializers);
            let n = r.serializers;
            if (p && n) {
                var a = Object.assign({}, h, n),
                    f = !0 === e.browser.serialize ? Object.keys(a) : p;
                delete t.serializers, s([t], f, a, this._stdErrSerialize)
            }

            function c(e) {
                this._childLevel = (0 | e._childLevel) + 1, this.error = o(e, t, "error"), this.fatal = o(e, t, "fatal"), this.warn = o(e, t, "warn"), this.info = o(e, t, "info"), this.debug = o(e, t, "debug"), this.trace = o(e, t, "trace"), a && (this.serializers = a, this._serialize = f), i && (this._logEvent = d([].concat(e._logEvent.bindings, t)))
            }
            return c.prototype = this, new c(this)
        }, i && (g._logEvent = d()), g
    }

    function f(e, t, r, f) {
        let o = Object.getPrototypeOf(t);
        t[r] = t.levelVal > t.levels.values[r] ? u : o[r] ? o[r] : n[r] || n[f] || u,
            function(e, t, r) {
                if (e.transmit || t[r] !== u) {
                    var f;
                    t[r] = (f = t[r], function() {
                        let o = e.timestamp(),
                            c = Array(arguments.length),
                            h = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                        for (var u, l, b, p = 0; p < c.length; p++) c[p] = arguments[p];
                        if (e.serialize && !e.asObject && s(c, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? f.call(h, function(e, t, r, n) {
                                e._serialize && s(r, e._serialize, e.serializers, e._stdErrSerialize);
                                let f = r.slice(),
                                    o = f[0],
                                    d = {};
                                n && (d.time = n), d.level = a.levels.values[t];
                                let c = (0 | e._childLevel) + 1;
                                if (c < 1 && (c = 1), null !== o && "object" == typeof o) {
                                    for (; c-- && "object" == typeof f[0];) Object.assign(d, f.shift());
                                    o = f.length ? i(f.shift(), f) : void 0
                                } else "string" == typeof o && (o = i(f.shift(), f));
                                return void 0 !== o && (d.msg = o), d
                            }(this, r, c, o)) : f.apply(h, c), e.transmit) {
                            let i, n, f, h, p, m, v = e.transmit.level || t.level,
                                g = a.levels.values[v],
                                y = a.levels.values[r];
                            if (y < g) return;
                            u = this, l = {
                                ts: o,
                                methodLevel: r,
                                methodValue: y,
                                transmitLevel: v,
                                transmitValue: a.levels.values[e.transmit.level || t.level],
                                send: e.transmit.send,
                                val: t.levelVal
                            }, b = c, i = l.send, n = l.ts, f = l.methodLevel, h = l.methodValue, p = l.val, m = u._logEvent.bindings, s(b, u._serialize || Object.keys(u.serializers), u.serializers, void 0 === u._stdErrSerialize || u._stdErrSerialize), u._logEvent.ts = n, u._logEvent.messages = b.filter(function(e) {
                                return -1 === m.indexOf(e)
                            }), u._logEvent.level.label = f, u._logEvent.level.value = h, i(f, u._logEvent, p), u._logEvent = d(m)
                        }
                    })
                }
            }(e, t, r)
    }

    function s(e, t, r, i) {
        for (let n in e)
            if (i && e[n] instanceof Error) e[n] = a.stdSerializers.err(e[n]);
            else if ("object" == typeof e[n] && !Array.isArray(e[n]))
            for (let i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]))
    }

    function o(e, t, r) {
        return function() {
            let i = Array(1 + arguments.length);
            i[0] = t;
            for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
            return e[r].apply(this, i)
        }
    }

    function d(e) {
        return {
            ts: 0,
            messages: [],
            bindings: e || [],
            level: {
                label: "",
                value: 0
            }
        }
    }

    function c() {
        return {}
    }

    function h(e) {
        return e
    }

    function u() {}

    function l() {
        return !1
    }

    function b() {
        return Date.now()
    }
    a.levels = {
        values: {
            fatal: 60,
            error: 50,
            warn: 40,
            info: 30,
            debug: 20,
            trace: 10
        },
        labels: {
            10: "trace",
            20: "debug",
            30: "info",
            40: "warn",
            50: "error",
            60: "fatal"
        }
    }, a.stdSerializers = {
        mapHttpRequest: c,
        mapHttpResponse: c,
        wrapRequestSerializer: h,
        wrapResponseSerializer: h,
        wrapErrorSerializer: h,
        req: c,
        res: c,
        err: function(e) {
            let t = {
                type: e.constructor.name,
                msg: e.message,
                stack: e.stack
            };
            for (let r in e) void 0 === t[r] && (t[r] = e[r]);
            return t
        }
    }, a.stdTimeFunctions = Object.assign({}, {
        nullTime: l,
        epochTime: b,
        unixTime: function() {
            return Math.round(Date.now() / 1e3)
        },
        isoTime: function() {
            return new Date(Date.now()).toISOString()
        }
    })
}, 829432, 513582, 319592, e => {
    "use strict";
    var t = e.i(96469),
        r = e.i(136362),
        i = e.i(712314);
    class n {
        constructor() {
            this.indexedDb = (0, t.createStorage)({
                driver: ((e = {}) => {
                    let t, i = e.base && e.base.length > 0 ? `${e.base}:` : "";
                    return e.dbName && e.storeName && (t = (0, r.createStore)(e.dbName, e.storeName)), {
                        name: "idb-keyval",
                        options: e,
                        hasItem: async e => !(typeof await (0, r.get)(i + e, t) > "u"),
                        getItem: async e => await (0, r.get)(i + e, t) ? ? null,
                        setItem: (e, n) => (0, r.set)(i + e, n, t),
                        removeItem: e => (0, r.del)(i + e, t),
                        getKeys: () => (0, r.keys)(t),
                        clear: () => (0, r.clear)(t)
                    }
                })({
                    dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                    storeName: "keyvaluestorage"
                })
            })
        }
        async getKeys() {
            return this.indexedDb.getKeys()
        }
        async getEntries() {
            return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
        }
        async getItem(e) {
            let t = await this.indexedDb.getItem(e);
            if (null !== t) return t
        }
        async setItem(e, t) {
            await this.indexedDb.setItem(e, (0, i.safeJsonStringify)(t))
        }
        async removeItem(e) {
            await this.indexedDb.removeItem(e)
        }
    }
    var a = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : e.g,
        f = {
            exports: {}
        };

    function s(e) {
        var t;
        return [e[0], (0, i.safeJsonParse)(null != (t = e[1]) ? t : "")]
    }

    function o() {}
    o.prototype.getItem = function(e) {
        return this.hasOwnProperty(e) ? String(this[e]) : null
    }, o.prototype.setItem = function(e, t) {
        this[e] = String(t)
    }, o.prototype.removeItem = function(e) {
        delete this[e]
    }, o.prototype.clear = function() {
        let e = this;
        Object.keys(e).forEach(function(t) {
            e[t] = void 0, delete e[t]
        })
    }, o.prototype.key = function(e) {
        return e = e || 0, Object.keys(this)[e]
    }, o.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length
    }), "u" > typeof a && a.localStorage ? f.exports = a.localStorage : "u" > typeof window && window.localStorage ? f.exports = window.localStorage : f.exports = new o;
    class d {
        constructor() {
            this.localStorage = f.exports
        }
        async getKeys() {
            return Object.keys(this.localStorage)
        }
        async getEntries() {
            return Object.entries(this.localStorage).map(s)
        }
        async getItem(e) {
            let t = this.localStorage.getItem(e);
            if (null !== t) return (0, i.safeJsonParse)(t)
        }
        async setItem(e, t) {
            this.localStorage.setItem(e, (0, i.safeJsonStringify)(t))
        }
        async removeItem(e) {
            this.localStorage.removeItem(e)
        }
    }
    let c = async (e, t, r) => {
            let i = "wc_storage_version",
                n = await t.getItem(i);
            if (n && n >= 1) return void r(t);
            let a = await e.getKeys();
            if (!a.length) return void r(t);
            let f = [];
            for (; a.length;) {
                let r = a.shift();
                if (!r) continue;
                let i = r.toLowerCase();
                if (i.includes("wc@") || i.includes("walletconnect") || i.includes("wc_") || i.includes("wallet_connect")) {
                    let i = await e.getItem(r);
                    await t.setItem(r, i), f.push(r)
                }
            }
            await t.setItem(i, 1), r(t), h(e, f)
        },
        h = async (e, t) => {
            t.length && t.forEach(async t => {
                await e.removeItem(t)
            })
        };
    e.s(["default", 0, class {
        constructor() {
            this.initialized = !1, this.setInitialized = e => {
                this.storage = e, this.initialized = !0
            };
            const e = new d;
            this.storage = e;
            try {
                const t = new n;
                c(e, t, this.setInitialized)
            } catch {
                this.initialized = !0
            }
        }
        async getKeys() {
            return await this.initialize(), this.storage.getKeys()
        }
        async getEntries() {
            return await this.initialize(), this.storage.getEntries()
        }
        async getItem(e) {
            return await this.initialize(), this.storage.getItem(e)
        }
        async setItem(e, t) {
            return await this.initialize(), this.storage.setItem(e, t)
        }
        async removeItem(e) {
            return await this.initialize(), this.storage.removeItem(e)
        }
        async initialize() {
            this.initialized || await new Promise(e => {
                let t = setInterval(() => {
                    this.initialized && (clearInterval(t), e())
                }, 20)
            })
        }
    }], 829432);
    var u = e.i(5548);
    let l = "custom_context";
    class b {
        constructor(e) {
            this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null
        }
        get value() {
            return this.nodeValue
        }
        get size() {
            return this.sizeInBytes
        }
    }
    class p {
        constructor(e) {
            this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0
        }
        append(e) {
            let t = new b(e);
            if (t.size > this.maxSizeInBytes) throw Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
            for (; this.size + t.size > this.maxSizeInBytes;) this.shift();
            this.head ? this.tail && (this.tail.next = t) : this.head = t, this.tail = t, this.lengthInNodes++, this.sizeInBytes += t.size
        }
        shift() {
            if (!this.head) return;
            let e = this.head;
            this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size
        }
        toArray() {
            let e = [],
                t = this.head;
            for (; null !== t;) e.push(t.value), t = t.next;
            return e
        }
        get length() {
            return this.lengthInNodes
        }
        get size() {
            return this.sizeInBytes
        }
        toOrderedArray() {
            return Array.from(this)
        }[Symbol.iterator]() {
            let e = this.head;
            return {
                next: () => {
                    if (!e) return {
                        done: !0,
                        value: null
                    };
                    let t = e.value;
                    return e = e.next, {
                        done: !1,
                        value: t
                    }
                }
            }
        }
    }
    class m {
        constructor(e, t = 1024e3) {
            this.level = e ? ? "error", this.levelValue = u.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new p(this.MAX_LOG_SIZE_IN_BYTES)
        }
        forwardToConsole(e, t) {
            t === u.levels.values.error ? console.error(e) : t === u.levels.values.warn ? console.warn(e) : t === u.levels.values.debug ? console.debug(e) : t === u.levels.values.trace ? console.trace(e) : console.log(e)
        }
        appendToLogs(e) {
            this.logs.append((0, i.safeJsonStringify)({
                timestamp: new Date().toISOString(),
                log: e
            }));
            let t = "string" == typeof e ? JSON.parse(e).level : e.level;
            t >= this.levelValue && this.forwardToConsole(e, t)
        }
        getLogs() {
            return this.logs
        }
        clearLogs() {
            this.logs = new p(this.MAX_LOG_SIZE_IN_BYTES)
        }
        getLogArray() {
            return Array.from(this.logs)
        }
        logsToBlob(e) {
            let t = this.getLogArray();
            return t.push((0, i.safeJsonStringify)({
                extraMetadata: e
            })), new Blob(t, {
                type: "application/json"
            })
        }
    }
    class v {
        constructor(e, t = 1024e3) {
            this.baseChunkLogger = new m(e, t)
        }
        write(e) {
            this.baseChunkLogger.appendToLogs(e)
        }
        getLogs() {
            return this.baseChunkLogger.getLogs()
        }
        clearLogs() {
            this.baseChunkLogger.clearLogs()
        }
        getLogArray() {
            return this.baseChunkLogger.getLogArray()
        }
        logsToBlob(e) {
            return this.baseChunkLogger.logsToBlob(e)
        }
        downloadLogsBlobInBrowser(e) {
            let t = URL.createObjectURL(this.logsToBlob(e)),
                r = document.createElement("a");
            r.href = t, r.download = `walletconnect-logs-${new Date().toISOString()}.txt`, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(t)
        }
    }
    class g {
        constructor(e, t = 1024e3) {
            this.baseChunkLogger = new m(e, t)
        }
        write(e) {
            this.baseChunkLogger.appendToLogs(e)
        }
        getLogs() {
            return this.baseChunkLogger.getLogs()
        }
        clearLogs() {
            this.baseChunkLogger.clearLogs()
        }
        getLogArray() {
            return this.baseChunkLogger.getLogArray()
        }
        logsToBlob(e) {
            return this.baseChunkLogger.logsToBlob(e)
        }
    }
    var y = Object.defineProperty,
        w = Object.defineProperties,
        x = Object.getOwnPropertyDescriptors,
        M = Object.getOwnPropertySymbols,
        _ = Object.prototype.hasOwnProperty,
        S = Object.prototype.propertyIsEnumerable,
        I = (e, t, r) => t in e ? y(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        A = (e, t) => {
            for (var r in t || (t = {})) _.call(t, r) && I(e, r, t[r]);
            if (M)
                for (var r of M(t)) S.call(t, r) && I(e, r, t[r]);
            return e
        };

    function E(e, t = l) {
        return typeof e.bindings > "u" ? function(e, t = l) {
            return e[t] || ""
        }(e, t) : e.bindings().context || ""
    }
    e.s(["generateChildLogger", 0, function(e, t, r = l) {
        let i = function(e, t, r = l) {
            let i = E(e, r);
            return i.trim() ? `${i}/${t}` : t
        }(e, t, r);
        return function(e, t, r = l) {
            return e[r] = t, e
        }(e.child({
            context: i
        }), i, r)
    }, "generatePlatformLogger", 0, function(e) {
        var t, r, i, n;
        let a, f, s, o;
        return "u" > typeof e.loggerOverride && "string" != typeof e.loggerOverride ? {
            logger: e.loggerOverride,
            chunkLoggerController: null
        } : "u" > typeof window ? (o = new v(null == (i = (r = e).opts) ? void 0 : i.level, r.maxSizeInBytes), {
            logger: (0, u.default)((f = A({}, r.opts), s = {
                level: "trace",
                browser: w(A({}, null == (n = r.opts) ? void 0 : n.browser), x({
                    write: e => o.write(e)
                }))
            }, w(f, x(s)))),
            chunkLoggerController: o
        }) : (a = new g(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes), {
            logger: (0, u.default)(w(A({}, e.opts), x({
                level: "trace"
            })), a),
            chunkLoggerController: a
        })
    }, "getDefaultLoggerOptions", 0, function(e) {
        return w(A({}, e), x({
            level: e ? .level || "info"
        }))
    }, "getLoggerContext", 0, E], 513582), e.s(["pino", () => u.default], 319592)
}, 744934, (e, t, r) => {
    "use strict";

    function i(e) {
        let t;
        return "u" > typeof window && void 0 !== window[e] && (t = window[e]), t
    }

    function n(e) {
        let t = i(e);
        if (!t) throw Error(`${e} is not defined in Window`);
        return t
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.getLocalStorage = r.getLocalStorageOrThrow = r.getCrypto = r.getCryptoOrThrow = r.getLocation = r.getLocationOrThrow = r.getNavigator = r.getNavigatorOrThrow = r.getDocument = r.getDocumentOrThrow = r.getFromWindowOrThrow = r.getFromWindow = void 0, r.getFromWindow = i, r.getFromWindowOrThrow = n, r.getDocumentOrThrow = function() {
        return n("document")
    }, r.getDocument = function() {
        return i("document")
    }, r.getNavigatorOrThrow = function() {
        return n("navigator")
    }, r.getNavigator = function() {
        return i("navigator")
    }, r.getLocationOrThrow = function() {
        return n("location")
    }, r.getLocation = function() {
        return i("location")
    }, r.getCryptoOrThrow = function() {
        return n("crypto")
    }, r.getCrypto = function() {
        return i("crypto")
    }, r.getLocalStorageOrThrow = function() {
        return n("localStorage")
    }, r.getLocalStorage = function() {
        return i("localStorage")
    }
}, 386736, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.getWindowMetadata = void 0;
    let i = e.r(744934);
    r.getWindowMetadata = function() {
        let e, t, r;
        try {
            e = i.getDocumentOrThrow(), t = i.getLocationOrThrow()
        } catch (e) {
            return null
        }

        function n(...t) {
            let r = e.getElementsByTagName("meta");
            for (let e = 0; e < r.length; e++) {
                let i = r[e],
                    n = ["itemprop", "property", "name"].map(e => i.getAttribute(e)).filter(e => !!e && t.includes(e));
                if (n.length && n) {
                    let e = i.getAttribute("content");
                    if (e) return e
                }
            }
            return ""
        }
        let a = ((r = n("name", "og:site_name", "og:title", "twitter:title")) || (r = e.title), r),
            f = n("description", "og:description", "twitter:description", "keywords"),
            s = t.origin;
        return {
            description: f,
            url: s,
            icons: function() {
                let r = e.getElementsByTagName("link"),
                    i = [];
                for (let e = 0; e < r.length; e++) {
                    let n = r[e],
                        a = n.getAttribute("rel");
                    if (a && a.toLowerCase().indexOf("icon") > -1) {
                        let e = n.getAttribute("href");
                        if (e)
                            if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                                let r = t.protocol + "//" + t.host;
                                if (0 === e.indexOf("/")) r += e;
                                else {
                                    let i = t.pathname.split("/");
                                    i.pop(), r += i.join("/") + "/" + e
                                }
                                i.push(r)
                            } else if (0 === e.indexOf("//")) {
                            let r = t.protocol + e;
                            i.push(r)
                        } else i.push(e)
                    }
                }
                return i
            }(),
            name: a
        }
    }
}, 602016, 737640, 513011, 187978, 73730, e => {
    "use strict";
    var t = e.i(350461),
        r = function(e, t, r) {
            if (r || 2 == arguments.length)
                for (var i, n = 0, a = t.length; n < a; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
            return e.concat(i || Array.prototype.slice.call(t))
        },
        i = function(e, t, r) {
            this.name = e, this.version = t, this.os = r, this.type = "browser"
        },
        n = function(e) {
            this.version = e, this.type = "node", this.name = "node", this.os = t.default.platform
        },
        a = function(e, t, r, i) {
            this.name = e, this.version = t, this.os = r, this.bot = i, this.type = "bot-device"
        },
        f = function() {
            this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
        },
        s = function() {
            this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
        },
        o = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        d = [
            ["aol", /AOLShield\/([0-9\._]+)/],
            ["edge", /Edge\/([0-9\._]+)/],
            ["edge-ios", /EdgiOS\/([0-9\._]+)/],
            ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
            ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
            ["samsung", /SamsungBrowser\/([0-9\.]+)/],
            ["silk", /\bSilk\/([0-9._-]+)\b/],
            ["miui", /MiuiBrowser\/([0-9\.]+)$/],
            ["beaker", /BeakerBrowser\/([0-9\.]+)/],
            ["edge-chromium", /EdgA?\/([0-9\.]+)/],
            ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
            ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
            ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
            ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
            ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
            ["fxios", /FxiOS\/([0-9\.]+)/],
            ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
            ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
            ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
            ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
            ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
            ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
            ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
            ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
            ["ie", /MSIE\s(7\.0)/],
            ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
            ["android", /Android\s([0-9\.]+)/],
            ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
            ["safari", /Version\/([0-9\._]+).*Safari/],
            ["facebook", /FB[AS]V\/([0-9\.]+)/],
            ["instagram", /Instagram\s([0-9\.]+)/],
            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
            ["curl", /^curl\/([0-9\.]+)$/],
            ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
        ],
        c = [
            ["iOS", /iP(hone|od|ad)/],
            ["Android OS", /Android/],
            ["BlackBerry OS", /BlackBerry|BB10/],
            ["Windows Mobile", /IEMobile/],
            ["Amazon OS", /Kindle/],
            ["Windows 3.11", /Win16/],
            ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
            ["Windows 98", /(Windows 98)|(Win98)/],
            ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
            ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
            ["Windows Server 2003", /(Windows NT 5.2)/],
            ["Windows Vista", /(Windows NT 6.0)/],
            ["Windows 7", /(Windows NT 6.1)/],
            ["Windows 8", /(Windows NT 6.2)/],
            ["Windows 8.1", /(Windows NT 6.3)/],
            ["Windows 10", /(Windows NT 10.0)/],
            ["Windows ME", /Windows ME/],
            ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
            ["Open BSD", /OpenBSD/],
            ["Sun OS", /SunOS/],
            ["Chrome OS", /CrOS/],
            ["Linux", /(Linux)|(X11)/],
            ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
            ["QNX", /QNX/],
            ["BeOS", /BeOS/],
            ["OS/2", /OS\/2/]
        ];

    function h(e) {
        var t = "" !== e && d.reduce(function(t, r) {
            var i = r[0],
                n = r[1];
            if (t) return t;
            var a = n.exec(e);
            return !!a && [i, a]
        }, !1);
        if (!t) return null;
        var n = t[0],
            s = t[1];
        if ("searchbot" === n) return new f;
        var h = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
        h ? h.length < 3 && (h = r(r([], h, !0), function(e) {
            for (var t = [], r = 0; r < e; r++) t.push("0");
            return t
        }(3 - h.length), !0)) : h = [];
        var u = h.join("."),
            l = function(e) {
                for (var t = 0, r = c.length; t < r; t++) {
                    var i = c[t],
                        n = i[0];
                    if (i[1].exec(e)) return n
                }
                return null
            }(e),
            b = o.exec(e);
        return b && b[1] ? new a(n, u, l, b[1]) : new i(n, u, l)
    }

    function u(e = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e)
    }
    e.s(["detect", 0, function(e) {
        return e ? h(e) : "u" < typeof document && "u" > typeof navigator && "ReactNative" === navigator.product ? new s : "u" > typeof navigator ? h(navigator.userAgent) : void 0 !== t.default && t.default.version ? new n(t.default.version.slice(1)) : null
    }], 602016), e.s(["concat", 0, function(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = u(t),
            i = 0;
        for (let t of e) r.set(t, i), i += t.length;
        return r
    }], 737640);
    let l = function(e, t) {
            if (e.length >= 255) throw TypeError("Alphabet too long");
            for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
            for (var n = 0; n < e.length; n++) {
                var a = e.charAt(n),
                    f = a.charCodeAt(0);
                if (255 !== r[f]) throw TypeError(a + " is ambiguous");
                r[f] = n
            }
            var s = e.length,
                o = e.charAt(0),
                d = Math.log(s) / Math.log(256),
                c = Math.log(256) / Math.log(s);

            function h(e) {
                if ("string" != typeof e) throw TypeError("Expected String");
                if (0 === e.length) return new Uint8Array;
                var t = 0;
                if (" " !== e[0]) {
                    for (var i = 0, n = 0; e[t] === o;) i++, t++;
                    for (var a = (e.length - t) * d + 1 >>> 0, f = new Uint8Array(a); e[t];) {
                        var c = r[e.charCodeAt(t)];
                        if (255 === c) return;
                        for (var h = 0, u = a - 1;
                            (0 !== c || h < n) && -1 !== u; u--, h++) c += s * f[u] >>> 0, f[u] = c % 256 >>> 0, c = c / 256 >>> 0;
                        if (0 !== c) throw Error("Non-zero carry");
                        n = h, t++
                    }
                    if (" " !== e[t]) {
                        for (var l = a - n; l !== a && 0 === f[l];) l++;
                        for (var b = new Uint8Array(i + (a - l)), p = i; l !== a;) b[p++] = f[l++];
                        return b
                    }
                }
            }
            return {
                encode: function(t) {
                    if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                    if (0 === t.length) return "";
                    for (var r = 0, i = 0, n = 0, a = t.length; n !== a && 0 === t[n];) n++, r++;
                    for (var f = (a - n) * c + 1 >>> 0, d = new Uint8Array(f); n !== a;) {
                        for (var h = t[n], u = 0, l = f - 1;
                            (0 !== h || u < i) && -1 !== l; l--, u++) h += 256 * d[l] >>> 0, d[l] = h % s >>> 0, h = h / s >>> 0;
                        if (0 !== h) throw Error("Non-zero carry");
                        i = u, n++
                    }
                    for (var b = f - i; b !== f && 0 === d[b];) b++;
                    for (var p = o.repeat(r); b < f; ++b) p += e.charAt(d[b]);
                    return p
                },
                decodeUnsafe: h,
                decode: function(e) {
                    var r = h(e);
                    if (r) return r;
                    throw Error(`Non-${t} character`)
                }
            }
        },
        b = new Uint8Array(0),
        p = (e, t) => {
            if (e === t) return !0;
            if (e.byteLength !== t.byteLength) return !1;
            for (let r = 0; r < e.byteLength; r++)
                if (e[r] !== t[r]) return !1;
            return !0
        },
        m = e => {
            if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
            if (e instanceof ArrayBuffer) return new Uint8Array(e);
            if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            throw Error("Unknown type, must be binary type")
        },
        v = e => new TextEncoder().encode(e),
        g = e => new TextDecoder().decode(e);
    e.s(["coerce", 0, m, "empty", 0, b, "equals", 0, p, "fromHex", 0, e => {
        let t = e.match(/../g);
        return t ? new Uint8Array(t.map(e => parseInt(e, 16))) : b
    }, "fromString", 0, v, "isBinary", 0, e => e instanceof ArrayBuffer || ArrayBuffer.isView(e), "toHex", 0, e => e.reduce((e, t) => e + t.toString(16).padStart(2, "0"), ""), "toString", 0, g], 715483);
    class y {
        constructor(e, t, r) {
            this.name = e, this.prefix = t, this.baseEncode = r
        }
        encode(e) {
            if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
            throw Error("Unknown type, must be binary type")
        }
    }
    class w {
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
            return M(this, e)
        }
    }
    class x {
        constructor(e) {
            this.decoders = e
        }
        or(e) {
            return M(this, e)
        }
        decode(e) {
            let t = e[0],
                r = this.decoders[t];
            if (r) return r.decode(e);
            throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
        }
    }
    let M = (e, t) => new x({ ...e.decoders || {
            [e.prefix]: e
        },
        ...t.decoders || {
            [t.prefix]: t
        }
    });
    class _ {
        constructor(e, t, r, i) {
            this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new y(e, t, r), this.decoder = new w(e, t, i)
        }
        encode(e) {
            return this.encoder.encode(e)
        }
        decode(e) {
            return this.decoder.decode(e)
        }
    }
    let S = ({
            name: e,
            prefix: t,
            encode: r,
            decode: i
        }) => new _(e, t, r, i),
        I = ({
            prefix: e,
            name: t,
            alphabet: r
        }) => {
            let {
                encode: i,
                decode: n
            } = l(r, t);
            return S({
                prefix: e,
                name: t,
                encode: i,
                decode: e => m(n(e))
            })
        },
        A = ({
            name: e,
            prefix: t,
            bitsPerChar: r,
            alphabet: i
        }) => S({
            prefix: t,
            name: e,
            encode: e => ((e, t, r) => {
                let i = "=" === t[t.length - 1],
                    n = (1 << r) - 1,
                    a = "",
                    f = 0,
                    s = 0;
                for (let i = 0; i < e.length; ++i)
                    for (s = s << 8 | e[i], f += 8; f > r;) f -= r, a += t[n & s >> f];
                if (f && (a += t[n & s << r - f]), i)
                    for (; a.length * r & 7;) a += "=";
                return a
            })(e, i, r),
            decode: t => ((e, t, r, i) => {
                let n = {};
                for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                let a = e.length;
                for (;
                    "=" === e[a - 1];) --a;
                let f = new Uint8Array(a * r / 8 | 0),
                    s = 0,
                    o = 0,
                    d = 0;
                for (let t = 0; t < a; ++t) {
                    let a = n[e[t]];
                    if (void 0 === a) throw SyntaxError(`Non-${i} character`);
                    o = o << r | a, (s += r) >= 8 && (s -= 8, f[d++] = 255 & o >> s)
                }
                if (s >= r || 255 & o << 8 - s) throw SyntaxError("Unexpected end of data");
                return f
            })(t, i, r, e)
        }),
        E = S({
            prefix: "\0",
            name: "identity",
            encode: e => g(e),
            decode: e => v(e)
        });
    e.s(["identity", 0, E], 148964);
    var O = e.i(148964);
    let P = A({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1
    });
    e.s(["base2", 0, P], 756162);
    var R = e.i(756162);
    let z = A({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3
    });
    e.s(["base8", 0, z], 738409);
    var N = e.i(738409);
    let k = I({
        prefix: "9",
        name: "base10",
        alphabet: "0123456789"
    });
    e.s(["base10", 0, k], 593970);
    var T = e.i(593970);
    let L = A({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4
        }),
        C = A({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4
        });
    e.s(["base16", 0, L, "base16upper", 0, C], 188951);
    var j = e.i(188951);
    let B = A({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5
        }),
        q = A({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5
        }),
        D = A({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5
        }),
        U = A({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5
        }),
        W = A({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5
        }),
        F = A({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5
        }),
        H = A({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5
        }),
        V = A({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5
        }),
        J = A({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5
        });
    e.s(["base32", 0, B, "base32hex", 0, W, "base32hexpad", 0, H, "base32hexpadupper", 0, V, "base32hexupper", 0, F, "base32pad", 0, D, "base32padupper", 0, U, "base32upper", 0, q, "base32z", 0, J], 643477);
    var K = e.i(643477);
    let $ = I({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
        }),
        Y = I({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        });
    e.s(["base36", 0, $, "base36upper", 0, Y], 641932);
    var X = e.i(641932);
    let Z = I({
            name: "base58btc",
            prefix: "z",
            alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        }),
        G = I({
            name: "base58flickr",
            prefix: "Z",
            alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
        });
    e.s(["base58btc", 0, Z, "base58flickr", 0, G], 814227);
    var Q = e.i(814227);
    let ee = A({
            prefix: "m",
            name: "base64",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6
        }),
        et = A({
            prefix: "M",
            name: "base64pad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6
        }),
        er = A({
            prefix: "u",
            name: "base64url",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6
        }),
        ei = A({
            prefix: "U",
            name: "base64urlpad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6
        });
    e.s(["base64", 0, ee, "base64pad", 0, et, "base64url", 0, er, "base64urlpad", 0, ei], 185953);
    var en = e.i(185953);
    let ea = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
        ef = ea.reduce((e, t, r) => (e[r] = t, e), []),
        es = ea.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
        eo = S({
            prefix: "🚀",
            name: "base256emoji",
            encode: function(e) {
                return e.reduce((e, t) => e += ef[t], "")
            },
            decode: function(e) {
                let t = [];
                for (let r of e) {
                    let e = es[r.codePointAt(0)];
                    if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                    t.push(e)
                }
                return new Uint8Array(t)
            }
        });
    e.s(["base256emoji", 0, eo], 342926);
    var ed = e.i(342926);

    function ec(e, t, r) {
        t = t || [];
        for (var i = r = r || 0; e >= 0x80000000;) t[r++] = 255 & e | 128, e /= 128;
        for (; - 128 & e;) t[r++] = 255 & e | 128, e >>>= 7;
        return t[r] = 0 | e, ec.bytes = r - i + 1, t
    }

    function eh(e, t) {
        var r, i = 0,
            t = t || 0,
            n = 0,
            a = t,
            f = e.length;
        do {
            if (a >= f) throw eh.bytes = 0, RangeError("Could not decode varint");
            r = e[a++], i += n < 28 ? (127 & r) << n : (127 & r) * Math.pow(2, n), n += 7
        } while (r >= 128) return eh.bytes = a - t, i
    }
    let eu = (e, t = 0) => [eh(e, t), eh.bytes],
        el = (e, t, r = 0) => (ec(e, t, r), t),
        eb = e => {
            var t;
            return (t = e) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 0x10000000 ? 4 : t < 0x800000000 ? 5 : t < 0x40000000000 ? 6 : t < 0x2000000000000 ? 7 : t < 0x100000000000000 ? 8 : t < 0x8000000000000000 ? 9 : 10
        };
    e.s(["decode", 0, eu, "encodeTo", 0, el, "encodingLength", 0, eb], 245553);
    let ep = (e, t) => {
            let r = t.byteLength,
                i = eb(e),
                n = i + eb(r),
                a = new Uint8Array(n + r);
            return el(e, a, 0), el(r, a, i), a.set(t, n), new eg(e, r, t, a)
        },
        em = e => {
            let t = m(e),
                [r, i] = eu(t),
                [n, a] = eu(t.subarray(i)),
                f = t.subarray(i + a);
            if (f.byteLength !== n) throw Error("Incorrect length");
            return new eg(r, n, f, t)
        },
        ev = (e, t) => e === t || e.code === t.code && e.size === t.size && p(e.bytes, t.bytes);
    class eg {
        constructor(e, t, r, i) {
            this.code = e, this.size = t, this.digest = r, this.bytes = i
        }
    }
    e.s(["Digest", 0, eg, "create", 0, ep, "decode", 0, em, "equals", 0, ev], 271167);
    let ey = ({
        name: e,
        code: t,
        encode: r
    }) => new ew(e, t, r);
    class ew {
        constructor(e, t, r) {
            this.name = e, this.code = t, this.encode = r
        }
        digest(e) {
            if (e instanceof Uint8Array) {
                let t = this.encode(e);
                return t instanceof Uint8Array ? ep(this.code, t) : t.then(e => ep(this.code, e))
            }
            throw Error("Unknown type, must be binary type")
        }
    }
    e.s(["Hasher", 0, ew, "from", 0, ey], 508274);
    let ex = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
        eM = ey({
            name: "sha2-256",
            code: 18,
            encode: ex("SHA-256")
        }),
        e_ = ey({
            name: "sha2-512",
            code: 19,
            encode: ex("SHA-512")
        });
    e.s(["sha256", 0, eM, "sha512", 0, e_], 775544);
    var eS = e.i(775544);
    e.s(["identity", 0, {
        code: 0,
        name: "identity",
        encode: m,
        digest: e => ep(0, m(e))
    }], 494707);
    var eI = e.i(494707);
    e.s(["code", 0, 85, "decode", 0, e => m(e), "encode", 0, e => m(e), "name", 0, "raw"], 272108), e.i(272108);
    let eA = new TextEncoder,
        eE = new TextDecoder;
    e.s(["code", 0, 512, "decode", 0, e => JSON.parse(eE.decode(e)), "encode", 0, e => eA.encode(JSON.stringify(e)), "name", 0, "json"], 408862), e.i(408862);
    class eO {
        constructor(e, t, r, i) {
            this.code = t, this.version = e, this.multihash = r, this.bytes = i, this.byteOffset = i.byteOffset, this.byteLength = i.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                byteOffset: ej,
                byteLength: ej,
                code: eC,
                version: eC,
                multihash: eC,
                bytes: eC,
                _baseCache: ej,
                asCID: ej
            })
        }
        toV0() {
            if (0 === this.version) return this; {
                let {
                    code: e,
                    multihash: t
                } = this;
                if (e !== eN) throw Error("Cannot convert a non dag-pb CID to CIDv0");
                if (t.code !== ek) throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                return eO.createV0(t)
            }
        }
        toV1() {
            switch (this.version) {
                case 0:
                    {
                        let {
                            code: e,
                            digest: t
                        } = this.multihash,
                        r = ep(e, t);
                        return eO.createV1(this.code, r)
                    }
                case 1:
                    return this;
                default:
                    throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
            }
        }
        equals(e) {
            return e && this.code === e.code && this.version === e.version && ev(this.multihash, e.multihash)
        }
        toString(e) {
            let {
                bytes: t,
                version: r,
                _baseCache: i
            } = this;
            return 0 === r ? eR(t, i, e || Z.encoder) : ez(t, i, e || B.encoder)
        }
        toJSON() {
            return {
                code: this.code,
                version: this.version,
                hash: this.multihash.bytes
            }
        }
        get[Symbol.toStringTag]() {
            return "CID"
        }[Symbol.for("nodejs.util.inspect.custom")]() {
            return "CID(" + this.toString() + ")"
        }
        static isCID(e) {
            return eB(/^0\.0/, eq), !!(e && (e[eL] || e.asCID === e))
        }
        get toBaseEncodedString() {
            throw Error("Deprecated, use .toString()")
        }
        get codec() {
            throw Error('"codec" property is deprecated, use integer "code" property instead')
        }
        get buffer() {
            throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
        }
        get multibaseName() {
            throw Error('"multibaseName" property is deprecated')
        }
        get prefix() {
            throw Error('"prefix" property is deprecated')
        }
        static asCID(e) {
            if (e instanceof eO) return e;
            if (null != e && e.asCID === e) {
                let {
                    version: t,
                    code: r,
                    multihash: i,
                    bytes: n
                } = e;
                return new eO(t, r, i, n || eT(t, r, i.bytes))
            }
            if (null == e || !0 !== e[eL]) return null; {
                let {
                    version: t,
                    multihash: r,
                    code: i
                } = e, n = em(r);
                return eO.create(t, i, n)
            }
        }
        static create(e, t, r) {
            if ("number" != typeof t) throw Error("String codecs are no longer supported");
            switch (e) {
                case 0:
                    if (t === eN) return new eO(e, t, r, r.bytes);
                    throw Error(`Version 0 CID must use dag-pb (code: ${eN}) block encoding`);
                case 1:
                    {
                        let i = eT(e, t, r.bytes);
                        return new eO(e, t, r, i)
                    }
                default:
                    throw Error("Invalid version")
            }
        }
        static createV0(e) {
            return eO.create(0, eN, e)
        }
        static createV1(e, t) {
            return eO.create(1, e, t)
        }
        static decode(e) {
            let [t, r] = eO.decodeFirst(e);
            if (r.length) throw Error("Incorrect length");
            return t
        }
        static decodeFirst(e) {
            let t = eO.inspectBytes(e),
                r = t.size - t.multihashSize,
                i = m(e.subarray(r, r + t.multihashSize));
            if (i.byteLength !== t.multihashSize) throw Error("Incorrect length");
            let n = i.subarray(t.multihashSize - t.digestSize),
                a = new eg(t.multihashCode, t.digestSize, n, i);
            return [0 === t.version ? eO.createV0(a) : eO.createV1(t.codec, a), e.subarray(t.size)]
        }
        static inspectBytes(e) {
            let t = 0,
                r = () => {
                    let [r, i] = eu(e.subarray(t));
                    return t += i, r
                },
                i = r(),
                n = eN;
            if (18 === i ? (i = 0, t = 0) : 1 === i && (n = r()), 0 !== i && 1 !== i) throw RangeError(`Invalid CID version ${i}`);
            let a = t,
                f = r(),
                s = r(),
                o = t + s;
            return {
                version: i,
                codec: n,
                multihashCode: f,
                digestSize: s,
                multihashSize: o - a,
                size: o
            }
        }
        static parse(e, t) {
            let [r, i] = eP(e, t), n = eO.decode(i);
            return n._baseCache.set(r, e), n
        }
    }
    let eP = (e, t) => {
            switch (e[0]) {
                case "Q":
                    {
                        let r = t || Z;
                        return [Z.prefix, r.decode(`${Z.prefix}${e}`)]
                    }
                case Z.prefix:
                    {
                        let r = t || Z;
                        return [Z.prefix, r.decode(e)]
                    }
                case B.prefix:
                    {
                        let r = t || B;
                        return [B.prefix, r.decode(e)]
                    }
                default:
                    if (null == t) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                    return [e[0], t.decode(e)]
            }
        },
        eR = (e, t, r) => {
            let {
                prefix: i
            } = r;
            if (i !== Z.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
            let n = t.get(i);
            if (null != n) return n; {
                let n = r.encode(e).slice(1);
                return t.set(i, n), n
            }
        },
        ez = (e, t, r) => {
            let {
                prefix: i
            } = r, n = t.get(i);
            if (null != n) return n; {
                let n = r.encode(e);
                return t.set(i, n), n
            }
        },
        eN = 112,
        ek = 18,
        eT = (e, t, r) => {
            let i = eb(e),
                n = i + eb(t),
                a = new Uint8Array(n + r.byteLength);
            return el(e, a, 0), el(t, a, i), a.set(r, n), a
        },
        eL = Symbol.for("@ipld/js-cid/CID"),
        eC = {
            writable: !1,
            configurable: !1,
            enumerable: !0
        },
        ej = {
            writable: !1,
            enumerable: !1,
            configurable: !1
        },
        eB = (e, t) => {
            if (e.test("0.0.0-dev")) console.warn(t);
            else throw Error(t)
        },
        eq = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
    e.i(245553), e.i(715483), e.i(508274), e.i(271167);
    let eD = { ...O,
        ...R,
        ...N,
        ...T,
        ...j,
        ...K,
        ...X,
        ...Q,
        ...en,
        ...ed
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
    }({ ...eS,
        ...eI
    });
    let eW = eU("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
        eF = eU("ascii", "a", e => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t
        }, e => {
            let t = u((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t
        }),
        eH = {
            utf8: eW,
            "utf-8": eW,
            hex: eD.base16,
            latin1: eF,
            ascii: eF,
            binary: eF,
            ...eD
        };
    e.s(["fromString", 0, function(e, t = "utf8") {
        let r = eH[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e, "utf8") : r.decoder.decode(`${r.prefix}${e}`)
    }], 513011), e.s(["toString", 0, function(e, t = "utf8") {
        let r = eH[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1)
    }], 187978), e.s([], 73730)
}, 999053, (e, t, r) => {
    t.exports = {
        name: "elliptic",
        version: "6.6.1",
        description: "EC cryptography",
        main: "lib/elliptic.js",
        files: ["lib"],
        scripts: {
            lint: "eslint lib test",
            "lint:fix": "npm run lint -- --fix",
            unit: "istanbul test _mocha --reporter=spec test/index.js",
            test: "npm run lint && npm run unit",
            version: "grunt dist && git add dist/"
        },
        repository: {
            type: "git",
            url: "git@github.com:indutny/elliptic"
        },
        keywords: ["EC", "Elliptic", "curve", "Cryptography"],
        author: "Fedor Indutny <fedor@indutny.com>",
        license: "MIT",
        bugs: {
            url: "https://github.com/indutny/elliptic/issues"
        },
        homepage: "https://github.com/indutny/elliptic",
        devDependencies: {
            brfs: "^2.0.2",
            coveralls: "^3.1.0",
            eslint: "^7.6.0",
            grunt: "^1.2.1",
            "grunt-browserify": "^5.3.0",
            "grunt-cli": "^1.3.2",
            "grunt-contrib-connect": "^3.0.0",
            "grunt-contrib-copy": "^1.0.0",
            "grunt-contrib-uglify": "^5.0.0",
            "grunt-mocha-istanbul": "^5.0.2",
            "grunt-saucelabs": "^9.0.1",
            istanbul: "^0.4.5",
            mocha: "^8.0.1"
        },
        dependencies: {
            "bn.js": "^4.11.9",
            brorand: "^1.1.0",
            "hash.js": "^1.0.0",
            "hmac-drbg": "^1.0.1",
            inherits: "^2.0.4",
            "minimalistic-assert": "^1.0.1",
            "minimalistic-crypto-utils": "^1.0.1"
        }
    }
}, 416450, (e, t, r) => {
    ! function(e, t) {
        "use strict";

        function r(e, t) {
            if (!e) throw Error(t || "Assertion failed")
        }

        function i(e, t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        }

        function n(e, t, r) {
            if (n.isBN(e)) return e;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && (("le" === t || "be" === t) && (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
        }
        e.exports = n, n.BN = n, n.wordSize = 26;
        try {
            o = "u" > typeof window && void 0 !== window.Buffer ? window.Buffer : void 0
        } catch (e) {}

        function a(e, t) {
            var r = e.charCodeAt(t);
            return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
        }

        function f(e, t, r) {
            var i = a(e, r);
            return r - 1 >= t && (i |= a(e, r - 1) << 4), i
        }

        function s(e, t, r, i) {
            for (var n = 0, a = Math.min(e.length, r), f = t; f < a; f++) {
                var s = e.charCodeAt(f) - 48;
                n *= i, s >= 49 ? n += s - 49 + 10 : s >= 17 ? n += s - 17 + 10 : n += s
            }
            return n
        }
        n.isBN = function(e) {
            return e instanceof n || null !== e && "object" == typeof e && e.constructor.wordSize === n.wordSize && Array.isArray(e.words)
        }, n.max = function(e, t) {
            return e.cmp(t) > 0 ? e : t
        }, n.min = function(e, t) {
            return 0 > e.cmp(t) ? e : t
        }, n.prototype._init = function(e, t, i) {
            if ("number" == typeof e) return this._initNumber(e, t, i);
            if ("object" == typeof e) return this._initArray(e, t, i);
            "hex" === t && (t = 16), r(t === (0 | t) && t >= 2 && t <= 36);
            var n = 0;
            "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < e.length && (16 === t ? this._parseHex(e, n, i) : (this._parseBase(e, t, n), "le" === i && this._initArray(this.toArray(), t, i)))
        }, n.prototype._initNumber = function(e, t, i) {
            e < 0 && (this.negative = 1, e = -e), e < 0x4000000 ? (this.words = [0x3ffffff & e], this.length = 1) : e < 0x10000000000000 ? (this.words = [0x3ffffff & e, e / 0x4000000 & 0x3ffffff], this.length = 2) : (r(e < 0x20000000000000), this.words = [0x3ffffff & e, e / 0x4000000 & 0x3ffffff, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), t, i)
        }, n.prototype._initArray = function(e, t, i) {
            if (r("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(e.length / 3), this.words = Array(this.length);
            for (var n, a, f = 0; f < this.length; f++) this.words[f] = 0;
            var s = 0;
            if ("be" === i)
                for (f = e.length - 1, n = 0; f >= 0; f -= 3) a = e[f] | e[f - 1] << 8 | e[f - 2] << 16, this.words[n] |= a << s & 0x3ffffff, this.words[n + 1] = a >>> 26 - s & 0x3ffffff, (s += 24) >= 26 && (s -= 26, n++);
            else if ("le" === i)
                for (f = 0, n = 0; f < e.length; f += 3) a = e[f] | e[f + 1] << 8 | e[f + 2] << 16, this.words[n] |= a << s & 0x3ffffff, this.words[n + 1] = a >>> 26 - s & 0x3ffffff, (s += 24) >= 26 && (s -= 26, n++);
            return this.strip()
        }, n.prototype._parseHex = function(e, t, r) {
            this.length = Math.ceil((e.length - t) / 6), this.words = Array(this.length);
            for (var i, n = 0; n < this.length; n++) this.words[n] = 0;
            var a = 0,
                s = 0;
            if ("be" === r)
                for (n = e.length - 1; n >= t; n -= 2) i = f(e, t, n) << a, this.words[s] |= 0x3ffffff & i, a >= 18 ? (a -= 18, s += 1, this.words[s] |= i >>> 26) : a += 8;
            else
                for (n = (e.length - t) % 2 == 0 ? t + 1 : t; n < e.length; n += 2) i = f(e, t, n) << a, this.words[s] |= 0x3ffffff & i, a >= 18 ? (a -= 18, s += 1, this.words[s] |= i >>> 26) : a += 8;
            this.strip()
        }, n.prototype._parseBase = function(e, t, r) {
            this.words = [0], this.length = 1;
            for (var i = 0, n = 1; n <= 0x3ffffff; n *= t) i++;
            i--, n = n / t | 0;
            for (var a = e.length - r, f = a % i, o = Math.min(a, a - f) + r, d = 0, c = r; c < o; c += i) d = s(e, c, c + i, t), this.imuln(n), this.words[0] + d < 0x4000000 ? this.words[0] += d : this._iaddn(d);
            if (0 !== f) {
                var h = 1;
                for (d = s(e, c, e.length, t), c = 0; c < f; c++) h *= t;
                this.imuln(h), this.words[0] + d < 0x4000000 ? this.words[0] += d : this._iaddn(d)
            }
            this.strip()
        }, n.prototype.copy = function(e) {
            e.words = Array(this.length);
            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
            e.length = this.length, e.negative = this.negative, e.red = this.red
        }, n.prototype.clone = function() {
            var e = new n(null);
            return this.copy(e), e
        }, n.prototype._expand = function(e) {
            for (; this.length < e;) this.words[this.length++] = 0;
            return this
        }, n.prototype.strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
            return this._normSign()
        }, n.prototype._normSign = function() {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
        }, n.prototype.inspect = function() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        };
        var o, d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
            c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            h = [0, 0, 0x2000000, 0x290d741, 0x1000000, 0x2e90edd, 0x39aa400, 0x267bf47, 0x1000000, 0x290d741, 1e7, 0x12959c3, 0x222c000, 0x3bd7765, 7529536, 0xadcea1, 0x1000000, 0x1704f61, 0x206fc40, 0x2cddcf9, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 0xb54ba0, 0xdaf26b, 0x1069c00, 0x138f9ad, 243e5, 0x1b4d89f, 0x2000000, 0x25528a1, 0x2b54a20, 0x3216b93, 0x39aa400];

        function u(e, t, r) {
            r.negative = t.negative ^ e.negative;
            var i = e.length + t.length | 0;
            r.length = i, i = i - 1 | 0;
            var n = 0 | e.words[0],
                a = 0 | t.words[0],
                f = n * a,
                s = 0x3ffffff & f,
                o = f / 0x4000000 | 0;
            r.words[0] = s;
            for (var d = 1; d < i; d++) {
                for (var c = o >>> 26, h = 0x3ffffff & o, u = Math.min(d, t.length - 1), l = Math.max(0, d - e.length + 1); l <= u; l++) {
                    var b = d - l | 0;
                    c += (f = (n = 0 | e.words[b]) * (a = 0 | t.words[l]) + h) / 0x4000000 | 0, h = 0x3ffffff & f
                }
                r.words[d] = 0 | h, o = 0 | c
            }
            return 0 !== o ? r.words[d] = 0 | o : r.length--, r.strip()
        }
        n.prototype.toString = function(e, t) {
            if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                for (var i = "", n = 0, a = 0, f = 0; f < this.length; f++) {
                    var s = this.words[f],
                        o = ((s << n | a) & 0xffffff).toString(16);
                    a = s >>> 24 - n & 0xffffff, (n += 2) >= 26 && (n -= 26, f--), i = 0 !== a || f !== this.length - 1 ? d[6 - o.length] + o + i : o + i
                }
                for (0 !== a && (i = a.toString(16) + i); i.length % t != 0;) i = "0" + i;
                return 0 !== this.negative && (i = "-" + i), i
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
                var u = c[e],
                    l = h[e];
                i = "";
                var b = this.clone();
                for (b.negative = 0; !b.isZero();) {
                    var p = b.modn(l).toString(e);
                    i = (b = b.idivn(l)).isZero() ? p + i : d[u - p.length] + p + i
                }
                for (this.isZero() && (i = "0" + i); i.length % t != 0;) i = "0" + i;
                return 0 !== this.negative && (i = "-" + i), i
            }
            r(!1, "Base should be between 2 and 36")
        }, n.prototype.toNumber = function() {
            var e = this.words[0];
            return 2 === this.length ? e += 0x4000000 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 0x10000000000000 + 0x4000000 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
        }, n.prototype.toJSON = function() {
            return this.toString(16)
        }, n.prototype.toBuffer = function(e, t) {
            return r(void 0 !== o), this.toArrayLike(o, e, t)
        }, n.prototype.toArray = function(e, t) {
            return this.toArrayLike(Array, e, t)
        }, n.prototype.toArrayLike = function(e, t, i) {
            var n, a, f = this.byteLength(),
                s = i || Math.max(1, f);
            r(f <= s, "byte array longer than desired length"), r(s > 0, "Requested array length <= 0"), this.strip();
            var o = new e(s),
                d = this.clone();
            if ("le" === t) {
                for (a = 0; !d.isZero(); a++) n = d.andln(255), d.iushrn(8), o[a] = n;
                for (; a < s; a++) o[a] = 0
            } else {
                for (a = 0; a < s - f; a++) o[a] = 0;
                for (a = 0; !d.isZero(); a++) n = d.andln(255), d.iushrn(8), o[s - a - 1] = n
            }
            return o
        }, Math.clz32 ? n.prototype._countBits = function(e) {
            return 32 - Math.clz32(e)
        } : n.prototype._countBits = function(e) {
            var t = e,
                r = 0;
            return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
        }, n.prototype._zeroBits = function(e) {
            if (0 === e) return 26;
            var t = e,
                r = 0;
            return (8191 & t) == 0 && (r += 13, t >>>= 13), (127 & t) == 0 && (r += 7, t >>>= 7), (15 & t) == 0 && (r += 4, t >>>= 4), (3 & t) == 0 && (r += 2, t >>>= 2), (1 & t) == 0 && r++, r
        }, n.prototype.bitLength = function() {
            var e = this.words[this.length - 1],
                t = this._countBits(e);
            return (this.length - 1) * 26 + t
        }, n.prototype.zeroBits = function() {
            if (this.isZero()) return 0;
            for (var e = 0, t = 0; t < this.length; t++) {
                var r = this._zeroBits(this.words[t]);
                if (e += r, 26 !== r) break
            }
            return e
        }, n.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
        }, n.prototype.toTwos = function(e) {
            return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
        }, n.prototype.fromTwos = function(e) {
            return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
        }, n.prototype.isNeg = function() {
            return 0 !== this.negative
        }, n.prototype.neg = function() {
            return this.clone().ineg()
        }, n.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this
        }, n.prototype.iuor = function(e) {
            for (; this.length < e.length;) this.words[this.length++] = 0;
            for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
            return this.strip()
        }, n.prototype.ior = function(e) {
            return r((this.negative | e.negative) == 0), this.iuor(e)
        }, n.prototype.or = function(e) {
            return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
        }, n.prototype.uor = function(e) {
            return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
        }, n.prototype.iuand = function(e) {
            var t;
            t = this.length > e.length ? e : this;
            for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
            return this.length = t.length, this.strip()
        }, n.prototype.iand = function(e) {
            return r((this.negative | e.negative) == 0), this.iuand(e)
        }, n.prototype.and = function(e) {
            return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
        }, n.prototype.uand = function(e) {
            return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
        }, n.prototype.iuxor = function(e) {
            this.length > e.length ? (t = this, r = e) : (t = e, r = this);
            for (var t, r, i = 0; i < r.length; i++) this.words[i] = t.words[i] ^ r.words[i];
            if (this !== t)
                for (; i < t.length; i++) this.words[i] = t.words[i];
            return this.length = t.length, this.strip()
        }, n.prototype.ixor = function(e) {
            return r((this.negative | e.negative) == 0), this.iuxor(e)
        }, n.prototype.xor = function(e) {
            return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
        }, n.prototype.uxor = function(e) {
            return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
        }, n.prototype.inotn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = 0 | Math.ceil(e / 26),
                i = e % 26;
            this._expand(t), i > 0 && t--;
            for (var n = 0; n < t; n++) this.words[n] = 0x3ffffff & ~this.words[n];
            return i > 0 && (this.words[n] = ~this.words[n] & 0x3ffffff >> 26 - i), this.strip()
        }, n.prototype.notn = function(e) {
            return this.clone().inotn(e)
        }, n.prototype.setn = function(e, t) {
            r("number" == typeof e && e >= 0);
            var i = e / 26 | 0,
                n = e % 26;
            return this._expand(i + 1), t ? this.words[i] = this.words[i] | 1 << n : this.words[i] = this.words[i] & ~(1 << n), this.strip()
        }, n.prototype.iadd = function(e) {
            if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
            if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
            this.length > e.length ? (r = this, i = e) : (r = e, i = this);
            for (var t, r, i, n = 0, a = 0; a < i.length; a++) t = (0 | r.words[a]) + (0 | i.words[a]) + n, this.words[a] = 0x3ffffff & t, n = t >>> 26;
            for (; 0 !== n && a < r.length; a++) t = (0 | r.words[a]) + n, this.words[a] = 0x3ffffff & t, n = t >>> 26;
            if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
            else if (r !== this)
                for (; a < r.length; a++) this.words[a] = r.words[a];
            return this
        }, n.prototype.add = function(e) {
            var t;
            return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
        }, n.prototype.isub = function(e) {
            if (0 !== e.negative) {
                e.negative = 0;
                var t, r, i = this.iadd(e);
                return e.negative = 1, i._normSign()
            }
            if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
            var n = this.cmp(e);
            if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            n > 0 ? (t = this, r = e) : (t = e, r = this);
            for (var a = 0, f = 0; f < r.length; f++) a = (i = (0 | t.words[f]) - (0 | r.words[f]) + a) >> 26, this.words[f] = 0x3ffffff & i;
            for (; 0 !== a && f < t.length; f++) a = (i = (0 | t.words[f]) + a) >> 26, this.words[f] = 0x3ffffff & i;
            if (0 === a && f < t.length && t !== this)
                for (; f < t.length; f++) this.words[f] = t.words[f];
            return this.length = Math.max(this.length, f), t !== this && (this.negative = 1), this.strip()
        }, n.prototype.sub = function(e) {
            return this.clone().isub(e)
        };
        var l = function(e, t, r) {
            var i, n, a, f = e.words,
                s = t.words,
                o = r.words,
                d = 0,
                c = 0 | f[0],
                h = 8191 & c,
                u = c >>> 13,
                l = 0 | f[1],
                b = 8191 & l,
                p = l >>> 13,
                m = 0 | f[2],
                v = 8191 & m,
                g = m >>> 13,
                y = 0 | f[3],
                w = 8191 & y,
                x = y >>> 13,
                M = 0 | f[4],
                _ = 8191 & M,
                S = M >>> 13,
                I = 0 | f[5],
                A = 8191 & I,
                E = I >>> 13,
                O = 0 | f[6],
                P = 8191 & O,
                R = O >>> 13,
                z = 0 | f[7],
                N = 8191 & z,
                k = z >>> 13,
                T = 0 | f[8],
                L = 8191 & T,
                C = T >>> 13,
                j = 0 | f[9],
                B = 8191 & j,
                q = j >>> 13,
                D = 0 | s[0],
                U = 8191 & D,
                W = D >>> 13,
                F = 0 | s[1],
                H = 8191 & F,
                V = F >>> 13,
                J = 0 | s[2],
                K = 8191 & J,
                $ = J >>> 13,
                Y = 0 | s[3],
                X = 8191 & Y,
                Z = Y >>> 13,
                G = 0 | s[4],
                Q = 8191 & G,
                ee = G >>> 13,
                et = 0 | s[5],
                er = 8191 & et,
                ei = et >>> 13,
                en = 0 | s[6],
                ea = 8191 & en,
                ef = en >>> 13,
                es = 0 | s[7],
                eo = 8191 & es,
                ed = es >>> 13,
                ec = 0 | s[8],
                eh = 8191 & ec,
                eu = ec >>> 13,
                el = 0 | s[9],
                eb = 8191 & el,
                ep = el >>> 13;
            r.negative = e.negative ^ t.negative, r.length = 19, i = Math.imul(h, U);
            var em = (d + i | 0) + ((8191 & (n = (n = Math.imul(h, W)) + Math.imul(u, U) | 0)) << 13) | 0;
            d = ((a = Math.imul(u, W)) + (n >>> 13) | 0) + (em >>> 26) | 0, em &= 0x3ffffff, i = Math.imul(b, U), n = (n = Math.imul(b, W)) + Math.imul(p, U) | 0, a = Math.imul(p, W), i = i + Math.imul(h, H) | 0;
            var ev = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(h, V) | 0) + Math.imul(u, H) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(u, V) | 0) + (n >>> 13) | 0) + (ev >>> 26) | 0, ev &= 0x3ffffff, i = Math.imul(v, U), n = (n = Math.imul(v, W)) + Math.imul(g, U) | 0, a = Math.imul(g, W), i = i + Math.imul(b, H) | 0, n = (n = n + Math.imul(b, V) | 0) + Math.imul(p, H) | 0, a = a + Math.imul(p, V) | 0, i = i + Math.imul(h, K) | 0;
            var eg = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(h, $) | 0) + Math.imul(u, K) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(u, $) | 0) + (n >>> 13) | 0) + (eg >>> 26) | 0, eg &= 0x3ffffff, i = Math.imul(w, U), n = (n = Math.imul(w, W)) + Math.imul(x, U) | 0, a = Math.imul(x, W), i = i + Math.imul(v, H) | 0, n = (n = n + Math.imul(v, V) | 0) + Math.imul(g, H) | 0, a = a + Math.imul(g, V) | 0, i = i + Math.imul(b, K) | 0, n = (n = n + Math.imul(b, $) | 0) + Math.imul(p, K) | 0, a = a + Math.imul(p, $) | 0, i = i + Math.imul(h, X) | 0;
            var ey = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(h, Z) | 0) + Math.imul(u, X) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(u, Z) | 0) + (n >>> 13) | 0) + (ey >>> 26) | 0, ey &= 0x3ffffff, i = Math.imul(_, U), n = (n = Math.imul(_, W)) + Math.imul(S, U) | 0, a = Math.imul(S, W), i = i + Math.imul(w, H) | 0, n = (n = n + Math.imul(w, V) | 0) + Math.imul(x, H) | 0, a = a + Math.imul(x, V) | 0, i = i + Math.imul(v, K) | 0, n = (n = n + Math.imul(v, $) | 0) + Math.imul(g, K) | 0, a = a + Math.imul(g, $) | 0, i = i + Math.imul(b, X) | 0, n = (n = n + Math.imul(b, Z) | 0) + Math.imul(p, X) | 0, a = a + Math.imul(p, Z) | 0, i = i + Math.imul(h, Q) | 0;
            var ew = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(h, ee) | 0) + Math.imul(u, Q) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(u, ee) | 0) + (n >>> 13) | 0) + (ew >>> 26) | 0, ew &= 0x3ffffff, i = Math.imul(A, U), n = (n = Math.imul(A, W)) + Math.imul(E, U) | 0, a = Math.imul(E, W), i = i + Math.imul(_, H) | 0, n = (n = n + Math.imul(_, V) | 0) + Math.imul(S, H) | 0, a = a + Math.imul(S, V) | 0, i = i + Math.imul(w, K) | 0, n = (n = n + Math.imul(w, $) | 0) + Math.imul(x, K) | 0, a = a + Math.imul(x, $) | 0, i = i + Math.imul(v, X) | 0, n = (n = n + Math.imul(v, Z) | 0) + Math.imul(g, X) | 0, a = a + Math.imul(g, Z) | 0, i = i + Math.imul(b, Q) | 0, n = (n = n + Math.imul(b, ee) | 0) + Math.imul(p, Q) | 0, a = a + Math.imul(p, ee) | 0, i = i + Math.imul(h, er) | 0;
            var ex = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(h, ei) | 0) + Math.imul(u, er) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(u, ei) | 0) + (n >>> 13) | 0) + (ex >>> 26) | 0, ex &= 0x3ffffff, i = Math.imul(P, U), n = (n = Math.imul(P, W)) + Math.imul(R, U) | 0, a = Math.imul(R, W), i = i + Math.imul(A, H) | 0, n = (n = n + Math.imul(A, V) | 0) + Math.imul(E, H) | 0, a = a + Math.imul(E, V) | 0, i = i + Math.imul(_, K) | 0, n = (n = n + Math.imul(_, $) | 0) + Math.imul(S, K) | 0, a = a + Math.imul(S, $) | 0, i = i + Math.imul(w, X) | 0, n = (n = n + Math.imul(w, Z) | 0) + Math.imul(x, X) | 0, a = a + Math.imul(x, Z) | 0, i = i + Math.imul(v, Q) | 0, n = (n = n + Math.imul(v, ee) | 0) + Math.imul(g, Q) | 0, a = a + Math.imul(g, ee) | 0, i = i + Math.imul(b, er) | 0, n = (n = n + Math.imul(b, ei) | 0) + Math.imul(p, er) | 0, a = a + Math.imul(p, ei) | 0, i = i + Math.imul(h, ea) | 0;
            var eM = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(h, ef) | 0) + Math.imul(u, ea) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(u, ef) | 0) + (n >>> 13) | 0) + (eM >>> 26) | 0, eM &= 0x3ffffff, i = Math.imul(N, U), n = (n = Math.imul(N, W)) + Math.imul(k, U) | 0, a = Math.imul(k, W), i = i + Math.imul(P, H) | 0, n = (n = n + Math.imul(P, V) | 0) + Math.imul(R, H) | 0, a = a + Math.imul(R, V) | 0, i = i + Math.imul(A, K) | 0, n = (n = n + Math.imul(A, $) | 0) + Math.imul(E, K) | 0, a = a + Math.imul(E, $) | 0, i = i + Math.imul(_, X) | 0, n = (n = n + Math.imul(_, Z) | 0) + Math.imul(S, X) | 0, a = a + Math.imul(S, Z) | 0, i = i + Math.imul(w, Q) | 0, n = (n = n + Math.imul(w, ee) | 0) + Math.imul(x, Q) | 0, a = a + Math.imul(x, ee) | 0, i = i + Math.imul(v, er) | 0, n = (n = n + Math.imul(v, ei) | 0) + Math.imul(g, er) | 0, a = a + Math.imul(g, ei) | 0, i = i + Math.imul(b, ea) | 0, n = (n = n + Math.imul(b, ef) | 0) + Math.imul(p, ea) | 0, a = a + Math.imul(p, ef) | 0, i = i + Math.imul(h, eo) | 0;
            var e_ = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(h, ed) | 0) + Math.imul(u, eo) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(u, ed) | 0) + (n >>> 13) | 0) + (e_ >>> 26) | 0, e_ &= 0x3ffffff, i = Math.imul(L, U), n = (n = Math.imul(L, W)) + Math.imul(C, U) | 0, a = Math.imul(C, W), i = i + Math.imul(N, H) | 0, n = (n = n + Math.imul(N, V) | 0) + Math.imul(k, H) | 0, a = a + Math.imul(k, V) | 0, i = i + Math.imul(P, K) | 0, n = (n = n + Math.imul(P, $) | 0) + Math.imul(R, K) | 0, a = a + Math.imul(R, $) | 0, i = i + Math.imul(A, X) | 0, n = (n = n + Math.imul(A, Z) | 0) + Math.imul(E, X) | 0, a = a + Math.imul(E, Z) | 0, i = i + Math.imul(_, Q) | 0, n = (n = n + Math.imul(_, ee) | 0) + Math.imul(S, Q) | 0, a = a + Math.imul(S, ee) | 0, i = i + Math.imul(w, er) | 0, n = (n = n + Math.imul(w, ei) | 0) + Math.imul(x, er) | 0, a = a + Math.imul(x, ei) | 0, i = i + Math.imul(v, ea) | 0, n = (n = n + Math.imul(v, ef) | 0) + Math.imul(g, ea) | 0, a = a + Math.imul(g, ef) | 0, i = i + Math.imul(b, eo) | 0, n = (n = n + Math.imul(b, ed) | 0) + Math.imul(p, eo) | 0, a = a + Math.imul(p, ed) | 0, i = i + Math.imul(h, eh) | 0;
            var eS = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(h, eu) | 0) + Math.imul(u, eh) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(u, eu) | 0) + (n >>> 13) | 0) + (eS >>> 26) | 0, eS &= 0x3ffffff, i = Math.imul(B, U), n = (n = Math.imul(B, W)) + Math.imul(q, U) | 0, a = Math.imul(q, W), i = i + Math.imul(L, H) | 0, n = (n = n + Math.imul(L, V) | 0) + Math.imul(C, H) | 0, a = a + Math.imul(C, V) | 0, i = i + Math.imul(N, K) | 0, n = (n = n + Math.imul(N, $) | 0) + Math.imul(k, K) | 0, a = a + Math.imul(k, $) | 0, i = i + Math.imul(P, X) | 0, n = (n = n + Math.imul(P, Z) | 0) + Math.imul(R, X) | 0, a = a + Math.imul(R, Z) | 0, i = i + Math.imul(A, Q) | 0, n = (n = n + Math.imul(A, ee) | 0) + Math.imul(E, Q) | 0, a = a + Math.imul(E, ee) | 0, i = i + Math.imul(_, er) | 0, n = (n = n + Math.imul(_, ei) | 0) + Math.imul(S, er) | 0, a = a + Math.imul(S, ei) | 0, i = i + Math.imul(w, ea) | 0, n = (n = n + Math.imul(w, ef) | 0) + Math.imul(x, ea) | 0, a = a + Math.imul(x, ef) | 0, i = i + Math.imul(v, eo) | 0, n = (n = n + Math.imul(v, ed) | 0) + Math.imul(g, eo) | 0, a = a + Math.imul(g, ed) | 0, i = i + Math.imul(b, eh) | 0, n = (n = n + Math.imul(b, eu) | 0) + Math.imul(p, eh) | 0, a = a + Math.imul(p, eu) | 0, i = i + Math.imul(h, eb) | 0;
            var eI = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(h, ep) | 0) + Math.imul(u, eb) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(u, ep) | 0) + (n >>> 13) | 0) + (eI >>> 26) | 0, eI &= 0x3ffffff, i = Math.imul(B, H), n = (n = Math.imul(B, V)) + Math.imul(q, H) | 0, a = Math.imul(q, V), i = i + Math.imul(L, K) | 0, n = (n = n + Math.imul(L, $) | 0) + Math.imul(C, K) | 0, a = a + Math.imul(C, $) | 0, i = i + Math.imul(N, X) | 0, n = (n = n + Math.imul(N, Z) | 0) + Math.imul(k, X) | 0, a = a + Math.imul(k, Z) | 0, i = i + Math.imul(P, Q) | 0, n = (n = n + Math.imul(P, ee) | 0) + Math.imul(R, Q) | 0, a = a + Math.imul(R, ee) | 0, i = i + Math.imul(A, er) | 0, n = (n = n + Math.imul(A, ei) | 0) + Math.imul(E, er) | 0, a = a + Math.imul(E, ei) | 0, i = i + Math.imul(_, ea) | 0, n = (n = n + Math.imul(_, ef) | 0) + Math.imul(S, ea) | 0, a = a + Math.imul(S, ef) | 0, i = i + Math.imul(w, eo) | 0, n = (n = n + Math.imul(w, ed) | 0) + Math.imul(x, eo) | 0, a = a + Math.imul(x, ed) | 0, i = i + Math.imul(v, eh) | 0, n = (n = n + Math.imul(v, eu) | 0) + Math.imul(g, eh) | 0, a = a + Math.imul(g, eu) | 0, i = i + Math.imul(b, eb) | 0;
            var eA = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(b, ep) | 0) + Math.imul(p, eb) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(p, ep) | 0) + (n >>> 13) | 0) + (eA >>> 26) | 0, eA &= 0x3ffffff, i = Math.imul(B, K), n = (n = Math.imul(B, $)) + Math.imul(q, K) | 0, a = Math.imul(q, $), i = i + Math.imul(L, X) | 0, n = (n = n + Math.imul(L, Z) | 0) + Math.imul(C, X) | 0, a = a + Math.imul(C, Z) | 0, i = i + Math.imul(N, Q) | 0, n = (n = n + Math.imul(N, ee) | 0) + Math.imul(k, Q) | 0, a = a + Math.imul(k, ee) | 0, i = i + Math.imul(P, er) | 0, n = (n = n + Math.imul(P, ei) | 0) + Math.imul(R, er) | 0, a = a + Math.imul(R, ei) | 0, i = i + Math.imul(A, ea) | 0, n = (n = n + Math.imul(A, ef) | 0) + Math.imul(E, ea) | 0, a = a + Math.imul(E, ef) | 0, i = i + Math.imul(_, eo) | 0, n = (n = n + Math.imul(_, ed) | 0) + Math.imul(S, eo) | 0, a = a + Math.imul(S, ed) | 0, i = i + Math.imul(w, eh) | 0, n = (n = n + Math.imul(w, eu) | 0) + Math.imul(x, eh) | 0, a = a + Math.imul(x, eu) | 0, i = i + Math.imul(v, eb) | 0;
            var eE = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(v, ep) | 0) + Math.imul(g, eb) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(g, ep) | 0) + (n >>> 13) | 0) + (eE >>> 26) | 0, eE &= 0x3ffffff, i = Math.imul(B, X), n = (n = Math.imul(B, Z)) + Math.imul(q, X) | 0, a = Math.imul(q, Z), i = i + Math.imul(L, Q) | 0, n = (n = n + Math.imul(L, ee) | 0) + Math.imul(C, Q) | 0, a = a + Math.imul(C, ee) | 0, i = i + Math.imul(N, er) | 0, n = (n = n + Math.imul(N, ei) | 0) + Math.imul(k, er) | 0, a = a + Math.imul(k, ei) | 0, i = i + Math.imul(P, ea) | 0, n = (n = n + Math.imul(P, ef) | 0) + Math.imul(R, ea) | 0, a = a + Math.imul(R, ef) | 0, i = i + Math.imul(A, eo) | 0, n = (n = n + Math.imul(A, ed) | 0) + Math.imul(E, eo) | 0, a = a + Math.imul(E, ed) | 0, i = i + Math.imul(_, eh) | 0, n = (n = n + Math.imul(_, eu) | 0) + Math.imul(S, eh) | 0, a = a + Math.imul(S, eu) | 0, i = i + Math.imul(w, eb) | 0;
            var eO = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(w, ep) | 0) + Math.imul(x, eb) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(x, ep) | 0) + (n >>> 13) | 0) + (eO >>> 26) | 0, eO &= 0x3ffffff, i = Math.imul(B, Q), n = (n = Math.imul(B, ee)) + Math.imul(q, Q) | 0, a = Math.imul(q, ee), i = i + Math.imul(L, er) | 0, n = (n = n + Math.imul(L, ei) | 0) + Math.imul(C, er) | 0, a = a + Math.imul(C, ei) | 0, i = i + Math.imul(N, ea) | 0, n = (n = n + Math.imul(N, ef) | 0) + Math.imul(k, ea) | 0, a = a + Math.imul(k, ef) | 0, i = i + Math.imul(P, eo) | 0, n = (n = n + Math.imul(P, ed) | 0) + Math.imul(R, eo) | 0, a = a + Math.imul(R, ed) | 0, i = i + Math.imul(A, eh) | 0, n = (n = n + Math.imul(A, eu) | 0) + Math.imul(E, eh) | 0, a = a + Math.imul(E, eu) | 0, i = i + Math.imul(_, eb) | 0;
            var eP = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(_, ep) | 0) + Math.imul(S, eb) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(S, ep) | 0) + (n >>> 13) | 0) + (eP >>> 26) | 0, eP &= 0x3ffffff, i = Math.imul(B, er), n = (n = Math.imul(B, ei)) + Math.imul(q, er) | 0, a = Math.imul(q, ei), i = i + Math.imul(L, ea) | 0, n = (n = n + Math.imul(L, ef) | 0) + Math.imul(C, ea) | 0, a = a + Math.imul(C, ef) | 0, i = i + Math.imul(N, eo) | 0, n = (n = n + Math.imul(N, ed) | 0) + Math.imul(k, eo) | 0, a = a + Math.imul(k, ed) | 0, i = i + Math.imul(P, eh) | 0, n = (n = n + Math.imul(P, eu) | 0) + Math.imul(R, eh) | 0, a = a + Math.imul(R, eu) | 0, i = i + Math.imul(A, eb) | 0;
            var eR = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(A, ep) | 0) + Math.imul(E, eb) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(E, ep) | 0) + (n >>> 13) | 0) + (eR >>> 26) | 0, eR &= 0x3ffffff, i = Math.imul(B, ea), n = (n = Math.imul(B, ef)) + Math.imul(q, ea) | 0, a = Math.imul(q, ef), i = i + Math.imul(L, eo) | 0, n = (n = n + Math.imul(L, ed) | 0) + Math.imul(C, eo) | 0, a = a + Math.imul(C, ed) | 0, i = i + Math.imul(N, eh) | 0, n = (n = n + Math.imul(N, eu) | 0) + Math.imul(k, eh) | 0, a = a + Math.imul(k, eu) | 0, i = i + Math.imul(P, eb) | 0;
            var ez = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(P, ep) | 0) + Math.imul(R, eb) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(R, ep) | 0) + (n >>> 13) | 0) + (ez >>> 26) | 0, ez &= 0x3ffffff, i = Math.imul(B, eo), n = (n = Math.imul(B, ed)) + Math.imul(q, eo) | 0, a = Math.imul(q, ed), i = i + Math.imul(L, eh) | 0, n = (n = n + Math.imul(L, eu) | 0) + Math.imul(C, eh) | 0, a = a + Math.imul(C, eu) | 0, i = i + Math.imul(N, eb) | 0;
            var eN = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(N, ep) | 0) + Math.imul(k, eb) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(k, ep) | 0) + (n >>> 13) | 0) + (eN >>> 26) | 0, eN &= 0x3ffffff, i = Math.imul(B, eh), n = (n = Math.imul(B, eu)) + Math.imul(q, eh) | 0, a = Math.imul(q, eu), i = i + Math.imul(L, eb) | 0;
            var ek = (d + i | 0) + ((8191 & (n = (n = n + Math.imul(L, ep) | 0) + Math.imul(C, eb) | 0)) << 13) | 0;
            d = ((a = a + Math.imul(C, ep) | 0) + (n >>> 13) | 0) + (ek >>> 26) | 0, ek &= 0x3ffffff, i = Math.imul(B, eb);
            var eT = (d + i | 0) + ((8191 & (n = (n = Math.imul(B, ep)) + Math.imul(q, eb) | 0)) << 13) | 0;
            return d = ((a = Math.imul(q, ep)) + (n >>> 13) | 0) + (eT >>> 26) | 0, eT &= 0x3ffffff, o[0] = em, o[1] = ev, o[2] = eg, o[3] = ey, o[4] = ew, o[5] = ex, o[6] = eM, o[7] = e_, o[8] = eS, o[9] = eI, o[10] = eA, o[11] = eE, o[12] = eO, o[13] = eP, o[14] = eR, o[15] = ez, o[16] = eN, o[17] = ek, o[18] = eT, 0 !== d && (o[19] = d, r.length++), r
        };

        function b(e, t, r) {
            return new p().mulp(e, t, r)
        }

        function p(e, t) {
            this.x = e, this.y = t
        }
        Math.imul || (l = u), n.prototype.mulTo = function(e, t) {
            var r = this.length + e.length;
            return 10 === this.length && 10 === e.length ? l(this, e, t) : r < 63 ? u(this, e, t) : r < 1024 ? function(e, t, r) {
                r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                for (var i = 0, n = 0, a = 0; a < r.length - 1; a++) {
                    var f = n;
                    n = 0;
                    for (var s = 0x3ffffff & i, o = Math.min(a, t.length - 1), d = Math.max(0, a - e.length + 1); d <= o; d++) {
                        var c = a - d,
                            h = (0 | e.words[c]) * (0 | t.words[d]),
                            u = 0x3ffffff & h;
                        f = f + (h / 0x4000000 | 0) | 0, s = 0x3ffffff & (u = u + s | 0), n += (f = f + (u >>> 26) | 0) >>> 26, f &= 0x3ffffff
                    }
                    r.words[a] = s, i = f, f = n
                }
                return 0 !== i ? r.words[a] = i : r.length--, r.strip()
            }(this, e, t) : b(this, e, t)
        }, p.prototype.makeRBT = function(e) {
            for (var t = Array(e), r = n.prototype._countBits(e) - 1, i = 0; i < e; i++) t[i] = this.revBin(i, r, e);
            return t
        }, p.prototype.revBin = function(e, t, r) {
            if (0 === e || e === r - 1) return e;
            for (var i = 0, n = 0; n < t; n++) i |= (1 & e) << t - n - 1, e >>= 1;
            return i
        }, p.prototype.permute = function(e, t, r, i, n, a) {
            for (var f = 0; f < a; f++) i[f] = t[e[f]], n[f] = r[e[f]]
        }, p.prototype.transform = function(e, t, r, i, n, a) {
            this.permute(a, e, t, r, i, n);
            for (var f = 1; f < n; f <<= 1)
                for (var s = f << 1, o = Math.cos(2 * Math.PI / s), d = Math.sin(2 * Math.PI / s), c = 0; c < n; c += s)
                    for (var h = o, u = d, l = 0; l < f; l++) {
                        var b = r[c + l],
                            p = i[c + l],
                            m = r[c + l + f],
                            v = i[c + l + f],
                            g = h * m - u * v;
                        v = h * v + u * m, m = g, r[c + l] = b + m, i[c + l] = p + v, r[c + l + f] = b - m, i[c + l + f] = p - v, l !== s && (g = o * h - d * u, u = o * u + d * h, h = g)
                    }
        }, p.prototype.guessLen13b = function(e, t) {
            var r = 1 | Math.max(t, e),
                i = 1 & r,
                n = 0;
            for (r = r / 2 | 0; r; r >>>= 1) n++;
            return 1 << n + 1 + i
        }, p.prototype.conjugate = function(e, t, r) {
            if (!(r <= 1))
                for (var i = 0; i < r / 2; i++) {
                    var n = e[i];
                    e[i] = e[r - i - 1], e[r - i - 1] = n, n = t[i], t[i] = -t[r - i - 1], t[r - i - 1] = -n
                }
        }, p.prototype.normalize13b = function(e, t) {
            for (var r = 0, i = 0; i < t / 2; i++) {
                var n = 8192 * Math.round(e[2 * i + 1] / t) + Math.round(e[2 * i] / t) + r;
                e[i] = 0x3ffffff & n, r = n < 0x4000000 ? 0 : n / 0x4000000 | 0
            }
            return e
        }, p.prototype.convert13b = function(e, t, i, n) {
            for (var a = 0, f = 0; f < t; f++) a += 0 | e[f], i[2 * f] = 8191 & a, a >>>= 13, i[2 * f + 1] = 8191 & a, a >>>= 13;
            for (f = 2 * t; f < n; ++f) i[f] = 0;
            r(0 === a), r((-8192 & a) == 0)
        }, p.prototype.stub = function(e) {
            for (var t = Array(e), r = 0; r < e; r++) t[r] = 0;
            return t
        }, p.prototype.mulp = function(e, t, r) {
            var i = 2 * this.guessLen13b(e.length, t.length),
                n = this.makeRBT(i),
                a = this.stub(i),
                f = Array(i),
                s = Array(i),
                o = Array(i),
                d = Array(i),
                c = Array(i),
                h = Array(i),
                u = r.words;
            u.length = i, this.convert13b(e.words, e.length, f, i), this.convert13b(t.words, t.length, d, i), this.transform(f, a, s, o, i, n), this.transform(d, a, c, h, i, n);
            for (var l = 0; l < i; l++) {
                var b = s[l] * c[l] - o[l] * h[l];
                o[l] = s[l] * h[l] + o[l] * c[l], s[l] = b
            }
            return this.conjugate(s, o, i), this.transform(s, o, u, a, i, n), this.conjugate(u, a, i), this.normalize13b(u, i), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
        }, n.prototype.mul = function(e) {
            var t = new n(null);
            return t.words = Array(this.length + e.length), this.mulTo(e, t)
        }, n.prototype.mulf = function(e) {
            var t = new n(null);
            return t.words = Array(this.length + e.length), b(this, e, t)
        }, n.prototype.imul = function(e) {
            return this.clone().mulTo(e, this)
        }, n.prototype.imuln = function(e) {
            r("number" == typeof e), r(e < 0x4000000);
            for (var t = 0, i = 0; i < this.length; i++) {
                var n = (0 | this.words[i]) * e,
                    a = (0x3ffffff & n) + (0x3ffffff & t);
                t >>= 26, t += (n / 0x4000000 | 0) + (a >>> 26), this.words[i] = 0x3ffffff & a
            }
            return 0 !== t && (this.words[i] = t, this.length++), this.length = 0 === e ? 1 : this.length, this
        }, n.prototype.muln = function(e) {
            return this.clone().imuln(e)
        }, n.prototype.sqr = function() {
            return this.mul(this)
        }, n.prototype.isqr = function() {
            return this.imul(this.clone())
        }, n.prototype.pow = function(e) {
            var t = function(e) {
                for (var t = Array(e.bitLength()), r = 0; r < t.length; r++) {
                    var i = r / 26 | 0,
                        n = r % 26;
                    t[r] = (e.words[i] & 1 << n) >>> n
                }
                return t
            }(e);
            if (0 === t.length) return new n(1);
            for (var r = this, i = 0; i < t.length && 0 === t[i]; i++, r = r.sqr());
            if (++i < t.length)
                for (var a = r.sqr(); i < t.length; i++, a = a.sqr()) 0 !== t[i] && (r = r.mul(a));
            return r
        }, n.prototype.iushln = function(e) {
            r("number" == typeof e && e >= 0);
            var t, i = e % 26,
                n = (e - i) / 26,
                a = 0x3ffffff >>> 26 - i << 26 - i;
            if (0 !== i) {
                var f = 0;
                for (t = 0; t < this.length; t++) {
                    var s = this.words[t] & a,
                        o = (0 | this.words[t]) - s << i;
                    this.words[t] = o | f, f = s >>> 26 - i
                }
                f && (this.words[t] = f, this.length++)
            }
            if (0 !== n) {
                for (t = this.length - 1; t >= 0; t--) this.words[t + n] = this.words[t];
                for (t = 0; t < n; t++) this.words[t] = 0;
                this.length += n
            }
            return this.strip()
        }, n.prototype.ishln = function(e) {
            return r(0 === this.negative), this.iushln(e)
        }, n.prototype.iushrn = function(e, t, i) {
            r("number" == typeof e && e >= 0);
            var n = t ? (t - t % 26) / 26 : 0,
                a = e % 26,
                f = Math.min((e - a) / 26, this.length),
                s = 0x3ffffff ^ 0x3ffffff >>> a << a;
            if (n -= f, n = Math.max(0, n), i) {
                for (var o = 0; o < f; o++) i.words[o] = this.words[o];
                i.length = f
            }
            if (0 === f);
            else if (this.length > f)
                for (this.length -= f, o = 0; o < this.length; o++) this.words[o] = this.words[o + f];
            else this.words[0] = 0, this.length = 1;
            var d = 0;
            for (o = this.length - 1; o >= 0 && (0 !== d || o >= n); o--) {
                var c = 0 | this.words[o];
                this.words[o] = d << 26 - a | c >>> a, d = c & s
            }
            return i && 0 !== d && (i.words[i.length++] = d), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
        }, n.prototype.ishrn = function(e, t, i) {
            return r(0 === this.negative), this.iushrn(e, t, i)
        }, n.prototype.shln = function(e) {
            return this.clone().ishln(e)
        }, n.prototype.ushln = function(e) {
            return this.clone().iushln(e)
        }, n.prototype.shrn = function(e) {
            return this.clone().ishrn(e)
        }, n.prototype.ushrn = function(e) {
            return this.clone().iushrn(e)
        }, n.prototype.testn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = e % 26,
                i = (e - t) / 26;
            return !(this.length <= i) && !!(this.words[i] & 1 << t)
        }, n.prototype.imaskn = function(e) {
            r("number" == typeof e && e >= 0);
            var t = e % 26,
                i = (e - t) / 26;
            return (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) ? this : (0 !== t && i++, this.length = Math.min(i, this.length), 0 !== t && (this.words[this.length - 1] &= 0x3ffffff ^ 0x3ffffff >>> t << t), this.strip())
        }, n.prototype.maskn = function(e) {
            return this.clone().imaskn(e)
        }, n.prototype.iaddn = function(e) {
            return (r("number" == typeof e), r(e < 0x4000000), e < 0) ? this.isubn(-e) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(e), this.negative = 1), this) : this._iaddn(e)
        }, n.prototype._iaddn = function(e) {
            this.words[0] += e;
            for (var t = 0; t < this.length && this.words[t] >= 0x4000000; t++) this.words[t] -= 0x4000000, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
            return this.length = Math.max(this.length, t + 1), this
        }, n.prototype.isubn = function(e) {
            if (r("number" == typeof e), r(e < 0x4000000), e < 0) return this.iaddn(-e);
            if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
            if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
            else
                for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 0x4000000, this.words[t + 1] -= 1;
            return this.strip()
        }, n.prototype.addn = function(e) {
            return this.clone().iaddn(e)
        }, n.prototype.subn = function(e) {
            return this.clone().isubn(e)
        }, n.prototype.iabs = function() {
            return this.negative = 0, this
        }, n.prototype.abs = function() {
            return this.clone().iabs()
        }, n.prototype._ishlnsubmul = function(e, t, i) {
            var n, a, f = e.length + i;
            this._expand(f);
            var s = 0;
            for (n = 0; n < e.length; n++) {
                a = (0 | this.words[n + i]) + s;
                var o = (0 | e.words[n]) * t;
                a -= 0x3ffffff & o, s = (a >> 26) - (o / 0x4000000 | 0), this.words[n + i] = 0x3ffffff & a
            }
            for (; n < this.length - i; n++) s = (a = (0 | this.words[n + i]) + s) >> 26, this.words[n + i] = 0x3ffffff & a;
            if (0 === s) return this.strip();
            for (r(-1 === s), s = 0, n = 0; n < this.length; n++) s = (a = -(0 | this.words[n]) + s) >> 26, this.words[n] = 0x3ffffff & a;
            return this.negative = 1, this.strip()
        }, n.prototype._wordDiv = function(e, t) {
            var r, i = this.length - e.length,
                a = this.clone(),
                f = e,
                s = 0 | f.words[f.length - 1];
            0 != (i = 26 - this._countBits(s)) && (f = f.ushln(i), a.iushln(i), s = 0 | f.words[f.length - 1]);
            var o = a.length - f.length;
            if ("mod" !== t) {
                (r = new n(null)).length = o + 1, r.words = Array(r.length);
                for (var d = 0; d < r.length; d++) r.words[d] = 0
            }
            var c = a.clone()._ishlnsubmul(f, 1, o);
            0 === c.negative && (a = c, r && (r.words[o] = 1));
            for (var h = o - 1; h >= 0; h--) {
                var u = (0 | a.words[f.length + h]) * 0x4000000 + (0 | a.words[f.length + h - 1]);
                for (u = Math.min(u / s | 0, 0x3ffffff), a._ishlnsubmul(f, u, h); 0 !== a.negative;) u--, a.negative = 0, a._ishlnsubmul(f, 1, h), a.isZero() || (a.negative ^= 1);
                r && (r.words[h] = u)
            }
            return r && r.strip(), a.strip(), "div" !== t && 0 !== i && a.iushrn(i), {
                div: r || null,
                mod: a
            }
        }, n.prototype.divmod = function(e, t, i) {
            var a, f, s;
            return (r(!e.isZero()), this.isZero()) ? {
                div: new n(0),
                mod: new n(0)
            } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (a = s.div.neg()), "div" !== t && (f = s.mod.neg(), i && 0 !== f.negative && f.iadd(e)), {
                div: a,
                mod: f
            }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (a = s.div.neg()), {
                div: a,
                mod: s.mod
            }) : (this.negative & e.negative) != 0 ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (f = s.mod.neg(), i && 0 !== f.negative && f.isub(e)), {
                div: s.div,
                mod: f
            }) : e.length > this.length || 0 > this.cmp(e) ? {
                div: new n(0),
                mod: this
            } : 1 === e.length ? "div" === t ? {
                div: this.divn(e.words[0]),
                mod: null
            } : "mod" === t ? {
                div: null,
                mod: new n(this.modn(e.words[0]))
            } : {
                div: this.divn(e.words[0]),
                mod: new n(this.modn(e.words[0]))
            } : this._wordDiv(e, t)
        }, n.prototype.div = function(e) {
            return this.divmod(e, "div", !1).div
        }, n.prototype.mod = function(e) {
            return this.divmod(e, "mod", !1).mod
        }, n.prototype.umod = function(e) {
            return this.divmod(e, "mod", !0).mod
        }, n.prototype.divRound = function(e) {
            var t = this.divmod(e);
            if (t.mod.isZero()) return t.div;
            var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                i = e.ushrn(1),
                n = e.andln(1),
                a = r.cmp(i);
            return a < 0 || 1 === n && 0 === a ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
        }, n.prototype.modn = function(e) {
            r(e <= 0x3ffffff);
            for (var t = 0x4000000 % e, i = 0, n = this.length - 1; n >= 0; n--) i = (t * i + (0 | this.words[n])) % e;
            return i
        }, n.prototype.idivn = function(e) {
            r(e <= 0x3ffffff);
            for (var t = 0, i = this.length - 1; i >= 0; i--) {
                var n = (0 | this.words[i]) + 0x4000000 * t;
                this.words[i] = n / e | 0, t = n % e
            }
            return this.strip()
        }, n.prototype.divn = function(e) {
            return this.clone().idivn(e)
        }, n.prototype.egcd = function(e) {
            r(0 === e.negative), r(!e.isZero());
            var t = this,
                i = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (var a = new n(1), f = new n(0), s = new n(0), o = new n(1), d = 0; t.isEven() && i.isEven();) t.iushrn(1), i.iushrn(1), ++d;
            for (var c = i.clone(), h = t.clone(); !t.isZero();) {
                for (var u = 0, l = 1;
                    (t.words[0] & l) == 0 && u < 26; ++u, l <<= 1);
                if (u > 0)
                    for (t.iushrn(u); u-- > 0;)(a.isOdd() || f.isOdd()) && (a.iadd(c), f.isub(h)), a.iushrn(1), f.iushrn(1);
                for (var b = 0, p = 1;
                    (i.words[0] & p) == 0 && b < 26; ++b, p <<= 1);
                if (b > 0)
                    for (i.iushrn(b); b-- > 0;)(s.isOdd() || o.isOdd()) && (s.iadd(c), o.isub(h)), s.iushrn(1), o.iushrn(1);
                t.cmp(i) >= 0 ? (t.isub(i), a.isub(s), f.isub(o)) : (i.isub(t), s.isub(a), o.isub(f))
            }
            return {
                a: s,
                b: o,
                gcd: i.iushln(d)
            }
        }, n.prototype._invmp = function(e) {
            r(0 === e.negative), r(!e.isZero());
            var t, i = this,
                a = e.clone();
            i = 0 !== i.negative ? i.umod(e) : i.clone();
            for (var f = new n(1), s = new n(0), o = a.clone(); i.cmpn(1) > 0 && a.cmpn(1) > 0;) {
                for (var d = 0, c = 1;
                    (i.words[0] & c) == 0 && d < 26; ++d, c <<= 1);
                if (d > 0)
                    for (i.iushrn(d); d-- > 0;) f.isOdd() && f.iadd(o), f.iushrn(1);
                for (var h = 0, u = 1;
                    (a.words[0] & u) == 0 && h < 26; ++h, u <<= 1);
                if (h > 0)
                    for (a.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(o), s.iushrn(1);
                i.cmp(a) >= 0 ? (i.isub(a), f.isub(s)) : (a.isub(i), s.isub(f))
            }
            return 0 > (t = 0 === i.cmpn(1) ? f : s).cmpn(0) && t.iadd(e), t
        }, n.prototype.gcd = function(e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var t = this.clone(),
                r = e.clone();
            t.negative = 0, r.negative = 0;
            for (var i = 0; t.isEven() && r.isEven(); i++) t.iushrn(1), r.iushrn(1);
            for (;;) {
                for (; t.isEven();) t.iushrn(1);
                for (; r.isEven();) r.iushrn(1);
                var n = t.cmp(r);
                if (n < 0) {
                    var a = t;
                    t = r, r = a
                } else if (0 === n || 0 === r.cmpn(1)) break;
                t.isub(r)
            }
            return r.iushln(i)
        }, n.prototype.invm = function(e) {
            return this.egcd(e).a.umod(e)
        }, n.prototype.isEven = function() {
            return (1 & this.words[0]) == 0
        }, n.prototype.isOdd = function() {
            return (1 & this.words[0]) == 1
        }, n.prototype.andln = function(e) {
            return this.words[0] & e
        }, n.prototype.bincn = function(e) {
            r("number" == typeof e);
            var t = e % 26,
                i = (e - t) / 26,
                n = 1 << t;
            if (this.length <= i) return this._expand(i + 1), this.words[i] |= n, this;
            for (var a = n, f = i; 0 !== a && f < this.length; f++) {
                var s = 0 | this.words[f];
                s += a, a = s >>> 26, s &= 0x3ffffff, this.words[f] = s
            }
            return 0 !== a && (this.words[f] = a, this.length++), this
        }, n.prototype.isZero = function() {
            return 1 === this.length && 0 === this.words[0]
        }, n.prototype.cmpn = function(e) {
            var t, i = e < 0;
            if (0 !== this.negative && !i) return -1;
            if (0 === this.negative && i) return 1;
            if (this.strip(), this.length > 1) t = 1;
            else {
                i && (e = -e), r(e <= 0x3ffffff, "Number is too big");
                var n = 0 | this.words[0];
                t = n === e ? 0 : n < e ? -1 : 1
            }
            return 0 !== this.negative ? 0 | -t : t
        }, n.prototype.cmp = function(e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var t = this.ucmp(e);
            return 0 !== this.negative ? 0 | -t : t
        }, n.prototype.ucmp = function(e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var t = 0, r = this.length - 1; r >= 0; r--) {
                var i = 0 | this.words[r],
                    n = 0 | e.words[r];
                if (i !== n) {
                    i < n ? t = -1 : i > n && (t = 1);
                    break
                }
            }
            return t
        }, n.prototype.gtn = function(e) {
            return 1 === this.cmpn(e)
        }, n.prototype.gt = function(e) {
            return 1 === this.cmp(e)
        }, n.prototype.gten = function(e) {
            return this.cmpn(e) >= 0
        }, n.prototype.gte = function(e) {
            return this.cmp(e) >= 0
        }, n.prototype.ltn = function(e) {
            return -1 === this.cmpn(e)
        }, n.prototype.lt = function(e) {
            return -1 === this.cmp(e)
        }, n.prototype.lten = function(e) {
            return 0 >= this.cmpn(e)
        }, n.prototype.lte = function(e) {
            return 0 >= this.cmp(e)
        }, n.prototype.eqn = function(e) {
            return 0 === this.cmpn(e)
        }, n.prototype.eq = function(e) {
            return 0 === this.cmp(e)
        }, n.red = function(e) {
            return new M(e)
        }, n.prototype.toRed = function(e) {
            return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
        }, n.prototype.fromRed = function() {
            return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
        }, n.prototype._forceRed = function(e) {
            return this.red = e, this
        }, n.prototype.forceRed = function(e) {
            return r(!this.red, "Already a number in reduction context"), this._forceRed(e)
        }, n.prototype.redAdd = function(e) {
            return r(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
        }, n.prototype.redIAdd = function(e) {
            return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
        }, n.prototype.redSub = function(e) {
            return r(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
        }, n.prototype.redISub = function(e) {
            return r(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
        }, n.prototype.redShl = function(e) {
            return r(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
        }, n.prototype.redMul = function(e) {
            return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
        }, n.prototype.redIMul = function(e) {
            return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
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
        }, n.prototype.redPow = function(e) {
            return r(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
        };
        var m = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };

        function v(e, t) {
            this.name = e, this.p = new n(t, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
        }

        function g() {
            v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }

        function y() {
            v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }

        function w() {
            v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }

        function x() {
            v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }

        function M(e) {
            if ("string" == typeof e) {
                var t = n._prime(e);
                this.m = t.p, this.prime = t
            } else r(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
        }

        function _(e) {
            M.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
        }
        v.prototype._tmp = function() {
            var e = new n(null);
            return e.words = Array(Math.ceil(this.n / 13)), e
        }, v.prototype.ireduce = function(e) {
            var t, r = e;
            do this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (t > this.n) var i = t < this.n ? -1 : r.ucmp(this.p);
            return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
        }, v.prototype.split = function(e, t) {
            e.iushrn(this.n, 0, t)
        }, v.prototype.imulK = function(e) {
            return e.imul(this.k)
        }, i(g, v), g.prototype.split = function(e, t) {
            for (var r = Math.min(e.length, 9), i = 0; i < r; i++) t.words[i] = e.words[i];
            if (t.length = r, e.length <= 9) {
                e.words[0] = 0, e.length = 1;
                return
            }
            var n = e.words[9];
            for (i = 10, t.words[t.length++] = 4194303 & n; i < e.length; i++) {
                var a = 0 | e.words[i];
                e.words[i - 10] = (4194303 & a) << 4 | n >>> 22, n = a
            }
            n >>>= 22, e.words[i - 10] = n, 0 === n && e.length > 10 ? e.length -= 10 : e.length -= 9
        }, g.prototype.imulK = function(e) {
            e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
            for (var t = 0, r = 0; r < e.length; r++) {
                var i = 0 | e.words[r];
                t += 977 * i, e.words[r] = 0x3ffffff & t, t = 64 * i + (t / 0x4000000 | 0)
            }
            return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
        }, i(y, v), i(w, v), i(x, v), x.prototype.imulK = function(e) {
            for (var t = 0, r = 0; r < e.length; r++) {
                var i = (0 | e.words[r]) * 19 + t,
                    n = 0x3ffffff & i;
                i >>>= 26, e.words[r] = n, t = i
            }
            return 0 !== t && (e.words[e.length++] = t), e
        }, n._prime = function(e) {
            var t;
            if (m[e]) return m[e];
            if ("k256" === e) t = new g;
            else if ("p224" === e) t = new y;
            else if ("p192" === e) t = new w;
            else if ("p25519" === e) t = new x;
            else throw Error("Unknown prime " + e);
            return m[e] = t, t
        }, M.prototype._verify1 = function(e) {
            r(0 === e.negative, "red works only with positives"), r(e.red, "red works only with red numbers")
        }, M.prototype._verify2 = function(e, t) {
            r((e.negative | t.negative) == 0, "red works only with positives"), r(e.red && e.red === t.red, "red works only with red numbers")
        }, M.prototype.imod = function(e) {
            return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
        }, M.prototype.neg = function(e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
        }, M.prototype.add = function(e, t) {
            this._verify2(e, t);
            var r = e.add(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
        }, M.prototype.iadd = function(e, t) {
            this._verify2(e, t);
            var r = e.iadd(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r
        }, M.prototype.sub = function(e, t) {
            this._verify2(e, t);
            var r = e.sub(t);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
        }, M.prototype.isub = function(e, t) {
            this._verify2(e, t);
            var r = e.isub(t);
            return 0 > r.cmpn(0) && r.iadd(this.m), r
        }, M.prototype.shl = function(e, t) {
            return this._verify1(e), this.imod(e.ushln(t))
        }, M.prototype.imul = function(e, t) {
            return this._verify2(e, t), this.imod(e.imul(t))
        }, M.prototype.mul = function(e, t) {
            return this._verify2(e, t), this.imod(e.mul(t))
        }, M.prototype.isqr = function(e) {
            return this.imul(e, e.clone())
        }, M.prototype.sqr = function(e) {
            return this.mul(e, e)
        }, M.prototype.sqrt = function(e) {
            if (e.isZero()) return e.clone();
            var t = this.m.andln(3);
            if (r(t % 2 == 1), 3 === t) {
                var i = this.m.add(new n(1)).iushrn(2);
                return this.pow(e, i)
            }
            for (var a = this.m.subn(1), f = 0; !a.isZero() && 0 === a.andln(1);) f++, a.iushrn(1);
            r(!a.isZero());
            var s = new n(1).toRed(this),
                o = s.redNeg(),
                d = this.m.subn(1).iushrn(1),
                c = this.m.bitLength();
            for (c = new n(2 * c * c).toRed(this); 0 !== this.pow(c, d).cmp(o);) c.redIAdd(o);
            for (var h = this.pow(c, a), u = this.pow(e, a.addn(1).iushrn(1)), l = this.pow(e, a), b = f; 0 !== l.cmp(s);) {
                for (var p = l, m = 0; 0 !== p.cmp(s); m++) p = p.redSqr();
                r(m < b);
                var v = this.pow(h, new n(1).iushln(b - m - 1));
                u = u.redMul(v), h = v.redSqr(), l = l.redMul(h), b = m
            }
            return u
        }, M.prototype.invm = function(e) {
            var t = e._invmp(this.m);
            return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
        }, M.prototype.pow = function(e, t) {
            if (t.isZero()) return new n(1).toRed(this);
            if (0 === t.cmpn(1)) return e.clone();
            var r = Array(16);
            r[0] = new n(1).toRed(this), r[1] = e;
            for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], e);
            var a = r[0],
                f = 0,
                s = 0,
                o = t.bitLength() % 26;
            for (0 === o && (o = 26), i = t.length - 1; i >= 0; i--) {
                for (var d = t.words[i], c = o - 1; c >= 0; c--) {
                    var h = d >> c & 1;
                    if (a !== r[0] && (a = this.sqr(a)), 0 === h && 0 === f) {
                        s = 0;
                        continue
                    }
                    f <<= 1, f |= h, (4 == ++s || 0 === i && 0 === c) && (a = this.mul(a, r[f]), s = 0, f = 0)
                }
                o = 26
            }
            return a
        }, M.prototype.convertTo = function(e) {
            var t = e.umod(this.m);
            return t === e ? t.clone() : t
        }, M.prototype.convertFrom = function(e) {
            var t = e.clone();
            return t.red = null, t
        }, n.mont = function(e) {
            return new _(e)
        }, i(_, M), _.prototype.convertTo = function(e) {
            return this.imod(e.ushln(this.shift))
        }, _.prototype.convertFrom = function(e) {
            var t = this.imod(e.mul(this.rinv));
            return t.red = null, t
        }, _.prototype.imul = function(e, t) {
            if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
            var r = e.imul(t),
                i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                a = n;
            return n.cmp(this.m) >= 0 ? a = n.isub(this.m) : 0 > n.cmpn(0) && (a = n.iadd(this.m)), a._forceRed(this)
        }, _.prototype.mul = function(e, t) {
            if (e.isZero() || t.isZero()) return new n(0)._forceRed(this);
            var r = e.mul(t),
                i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                a = r.isub(i).iushrn(this.shift),
                f = a;
            return a.cmp(this.m) >= 0 ? f = a.isub(this.m) : 0 > a.cmpn(0) && (f = a.iadd(this.m)), f._forceRed(this)
        }, _.prototype.invm = function(e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
        }
    }(t, e.e)
}, 877744, (e, t, r) => {
    function i(e, t) {
        if (!e) throw Error(t || "Assertion failed")
    }
    t.exports = i, i.equal = function(e, t, r) {
        if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t)
    }
}, 583409, (e, t, r) => {
    "use strict";

    function i(e) {
        return 1 === e.length ? "0" + e : e
    }

    function n(e) {
        for (var t = "", r = 0; r < e.length; r++) t += i(e[r].toString(16));
        return t
    }
    r.toArray = function(e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var r = [];
        if ("string" != typeof e) {
            for (var i = 0; i < e.length; i++) r[i] = 0 | e[i];
            return r
        }
        if ("hex" === t) {
            (e = e.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (e = "0" + e);
            for (var i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16))
        } else
            for (var i = 0; i < e.length; i++) {
                var n = e.charCodeAt(i),
                    a = n >> 8,
                    f = 255 & n;
                a ? r.push(a, f) : r.push(f)
            }
        return r
    }, r.zero2 = i, r.toHex = n, r.encode = function(e, t) {
        return "hex" === t ? n(e) : e
    }
}, 386480, (e, t, r) => {
    "use strict";
    var i = e.r(416450),
        n = e.r(877744),
        a = e.r(583409);
    r.assert = n, r.toArray = a.toArray, r.zero2 = a.zero2, r.toHex = a.toHex, r.encode = a.encode, r.getNAF = function(e, t, r) {
        var i = Array(Math.max(e.bitLength(), r) + 1);
        for (f = 0; f < i.length; f += 1) i[f] = 0;
        var n = 1 << t + 1,
            a = e.clone();
        for (f = 0; f < i.length; f++) {
            var f, s, o = a.andln(n - 1);
            a.isOdd() ? (s = o > (n >> 1) - 1 ? (n >> 1) - o : o, a.isubn(s)) : s = 0, i[f] = s, a.iushrn(1)
        }
        return i
    }, r.getJSF = function(e, t) {
        var r = [
            [],
            []
        ];
        e = e.clone(), t = t.clone();
        for (var i = 0, n = 0; e.cmpn(-i) > 0 || t.cmpn(-n) > 0;) {
            var a, f, s, o = e.andln(3) + i & 3,
                d = t.andln(3) + n & 3;
            3 === o && (o = -1), 3 === d && (d = -1), f = (1 & o) == 0 ? 0 : (3 == (a = e.andln(7) + i & 7) || 5 === a) && 2 === d ? -o : o, r[0].push(f), s = (1 & d) == 0 ? 0 : (3 == (a = t.andln(7) + n & 7) || 5 === a) && 2 === o ? -d : d, r[1].push(s), 2 * i === f + 1 && (i = 1 - i), 2 * n === s + 1 && (n = 1 - n), e.iushrn(1), t.iushrn(1)
        }
        return r
    }, r.cachedProperty = function(e, t, r) {
        var i = "_" + t;
        e.prototype[t] = function() {
            return void 0 !== this[i] ? this[i] : this[i] = r.call(this)
        }
    }, r.parseBytes = function(e) {
        return "string" == typeof e ? r.toArray(e, "hex") : e
    }, r.intFromLE = function(e) {
        return new i(e, "hex", "le")
    }
}, 954173, (e, t, r) => {
    var i;

    function n(e) {
        this.rand = e
    }
    if (t.exports = function(e) {
            return i || (i = new n(null)), i.generate(e)
        }, t.exports.Rand = n, n.prototype.generate = function(e) {
            return this._rand(e)
        }, n.prototype._rand = function(e) {
            if (this.rand.getBytes) return this.rand.getBytes(e);
            for (var t = new Uint8Array(e), r = 0; r < t.length; r++) t[r] = this.rand.getByte();
            return t
        }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? n.prototype._rand = function(e) {
        var t = new Uint8Array(e);
        return self.crypto.getRandomValues(t), t
    } : self.msCrypto && self.msCrypto.getRandomValues ? n.prototype._rand = function(e) {
        var t = new Uint8Array(e);
        return self.msCrypto.getRandomValues(t), t
    } : "object" == typeof window && (n.prototype._rand = function() {
        throw Error("Not implemented yet")
    });
    else try {
        var a = {};
        if ("function" != typeof a.randomBytes) throw Error("Not supported");
        n.prototype._rand = function(e) {
            return a.randomBytes(e)
        }
    } catch (e) {}
}, 394661, (e, t, r) => {
    "use strict";
    var i = e.r(416450),
        n = e.r(386480),
        a = n.getNAF,
        f = n.getJSF,
        s = n.assert;

    function o(e, t) {
        this.type = e, this.p = new i(t.p, 16), this.red = t.prime ? i.red(t.prime) : i.mont(this.p), this.zero = new i(0).toRed(this.red), this.one = new i(1).toRed(this.red), this.two = new i(2).toRed(this.red), this.n = t.n && new i(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
    }

    function d(e, t) {
        this.curve = e, this.type = t, this.precomputed = null
    }
    t.exports = o, o.prototype.point = function() {
        throw Error("Not implemented")
    }, o.prototype.validate = function() {
        throw Error("Not implemented")
    }, o.prototype._fixedNafMul = function(e, t) {
        s(e.precomputed);
        var r, i, n = e._getDoubles(),
            f = a(t, 1, this._bitLength),
            o = (1 << n.step + 1) - (n.step % 2 == 0 ? 2 : 1);
        o /= 3;
        var d = [];
        for (r = 0; r < f.length; r += n.step) {
            i = 0;
            for (var c = r + n.step - 1; c >= r; c--) i = (i << 1) + f[c];
            d.push(i)
        }
        for (var h = this.jpoint(null, null, null), u = this.jpoint(null, null, null), l = o; l > 0; l--) {
            for (r = 0; r < d.length; r++)(i = d[r]) === l ? u = u.mixedAdd(n.points[r]) : i === -l && (u = u.mixedAdd(n.points[r].neg()));
            h = h.add(u)
        }
        return h.toP()
    }, o.prototype._wnafMul = function(e, t) {
        var r = 4,
            i = e._getNAFPoints(r);
        r = i.wnd;
        for (var n = i.points, f = a(t, r, this._bitLength), o = this.jpoint(null, null, null), d = f.length - 1; d >= 0; d--) {
            for (var c = 0; d >= 0 && 0 === f[d]; d--) c++;
            if (d >= 0 && c++, o = o.dblp(c), d < 0) break;
            var h = f[d];
            s(0 !== h), o = "affine" === e.type ? h > 0 ? o.mixedAdd(n[h - 1 >> 1]) : o.mixedAdd(n[-h - 1 >> 1].neg()) : h > 0 ? o.add(n[h - 1 >> 1]) : o.add(n[-h - 1 >> 1].neg())
        }
        return "affine" === e.type ? o.toP() : o
    }, o.prototype._wnafMulAdd = function(e, t, r, i, n) {
        var s, o, d, c = this._wnafT1,
            h = this._wnafT2,
            u = this._wnafT3,
            l = 0;
        for (s = 0; s < i; s++) {
            var b = (d = t[s])._getNAFPoints(e);
            c[s] = b.wnd, h[s] = b.points
        }
        for (s = i - 1; s >= 1; s -= 2) {
            var p = s - 1,
                m = s;
            if (1 !== c[p] || 1 !== c[m]) {
                u[p] = a(r[p], c[p], this._bitLength), u[m] = a(r[m], c[m], this._bitLength), l = Math.max(u[p].length, l), l = Math.max(u[m].length, l);
                continue
            }
            var v = [t[p], null, null, t[m]];
            0 === t[p].y.cmp(t[m].y) ? (v[1] = t[p].add(t[m]), v[2] = t[p].toJ().mixedAdd(t[m].neg())) : 0 === t[p].y.cmp(t[m].y.redNeg()) ? (v[1] = t[p].toJ().mixedAdd(t[m]), v[2] = t[p].add(t[m].neg())) : (v[1] = t[p].toJ().mixedAdd(t[m]), v[2] = t[p].toJ().mixedAdd(t[m].neg()));
            var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                y = f(r[p], r[m]);
            for (o = 0, l = Math.max(y[0].length, l), u[p] = Array(l), u[m] = Array(l); o < l; o++) {
                var w = 0 | y[0][o],
                    x = 0 | y[1][o];
                u[p][o] = g[(w + 1) * 3 + (x + 1)], u[m][o] = 0, h[p] = v
            }
        }
        var M = this.jpoint(null, null, null),
            _ = this._wnafT4;
        for (s = l; s >= 0; s--) {
            for (var S = 0; s >= 0;) {
                var I = !0;
                for (o = 0; o < i; o++) _[o] = 0 | u[o][s], 0 !== _[o] && (I = !1);
                if (!I) break;
                S++, s--
            }
            if (s >= 0 && S++, M = M.dblp(S), s < 0) break;
            for (o = 0; o < i; o++) {
                var A = _[o];
                0 !== A && (A > 0 ? d = h[o][A - 1 >> 1] : A < 0 && (d = h[o][-A - 1 >> 1].neg()), M = "affine" === d.type ? M.mixedAdd(d) : M.add(d))
            }
        }
        for (s = 0; s < i; s++) h[s] = null;
        return n ? M : M.toP()
    }, o.BasePoint = d, d.prototype.eq = function() {
        throw Error("Not implemented")
    }, d.prototype.validate = function() {
        return this.curve.validate(this)
    }, o.prototype.decodePoint = function(e, t) {
        e = n.toArray(e, t);
        var r = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? s(e[e.length - 1] % 2 == 0) : 7 === e[0] && s(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
        throw Error("Unknown point format")
    }, d.prototype.encodeCompressed = function(e) {
        return this.encode(e, !0)
    }, d.prototype._encode = function(e) {
        var t = this.curve.p.byteLength(),
            r = this.getX().toArray("be", t);
        return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
    }, d.prototype.encode = function(e, t) {
        return n.encode(this._encode(t), e)
    }, d.prototype.precompute = function(e) {
        if (this.precomputed) return this;
        var t = {
            doubles: null,
            naf: null,
            beta: null
        };
        return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
    }, d.prototype._hasDoubles = function(e) {
        if (!this.precomputed) return !1;
        var t = this.precomputed.doubles;
        return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
    }, d.prototype._getDoubles = function(e, t) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var r = [this], i = this, n = 0; n < t; n += e) {
            for (var a = 0; a < e; a++) i = i.dbl();
            r.push(i)
        }
        return {
            step: e,
            points: r
        }
    }, d.prototype._getNAFPoints = function(e) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var t = [this], r = (1 << e) - 1, i = 1 === r ? null : this.dbl(), n = 1; n < r; n++) t[n] = t[n - 1].add(i);
        return {
            wnd: e,
            points: t
        }
    }, d.prototype._getBeta = function() {
        return null
    }, d.prototype.dblp = function(e) {
        for (var t = this, r = 0; r < e; r++) t = t.dbl();
        return t
    }
}, 188777, (e, t, r) => {
    "use strict";
    var i = e.r(386480),
        n = e.r(416450),
        a = e.r(840387),
        f = e.r(394661),
        s = i.assert;

    function o(e) {
        f.call(this, "short", e), this.a = new n(e.a, 16).toRed(this.red), this.b = new n(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
    }

    function d(e, t, r, i) {
        f.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new n(t, 16), this.y = new n(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
    }

    function c(e, t, r, i) {
        f.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new n(0)) : (this.x = new n(t, 16), this.y = new n(r, 16), this.z = new n(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
    }
    a(o, f), t.exports = o, o.prototype._getEndomorphism = function(e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) t = new n(e.beta, 16).toRed(this.red);
            else {
                var t, r, i, a = this._getEndoRoots(this.p);
                t = (t = 0 > a[0].cmp(a[1]) ? a[0] : a[1]).toRed(this.red)
            }
            if (e.lambda) r = new n(e.lambda, 16);
            else {
                var f = this._getEndoRoots(this.n);
                0 === this.g.mul(f[0]).x.cmp(this.g.x.redMul(t)) ? r = f[0] : (r = f[1], s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
            }
            return i = e.basis ? e.basis.map(function(e) {
                return {
                    a: new n(e.a, 16),
                    b: new n(e.b, 16)
                }
            }) : this._getEndoBasis(r), {
                beta: t,
                lambda: r,
                basis: i
            }
        }
    }, o.prototype._getEndoRoots = function(e) {
        var t = e === this.p ? this.red : n.mont(e),
            r = new n(2).toRed(t).redInvm(),
            i = r.redNeg(),
            a = new n(3).toRed(t).redNeg().redSqrt().redMul(r);
        return [i.redAdd(a).fromRed(), i.redSub(a).fromRed()]
    }, o.prototype._getEndoBasis = function(e) {
        for (var t, r, i, a, f, s, o, d, c, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = e, l = this.n.clone(), b = new n(1), p = new n(0), m = new n(0), v = new n(1), g = 0; 0 !== u.cmpn(0);) {
            var y = l.div(u);
            d = l.sub(y.mul(u)), c = m.sub(y.mul(b));
            var w = v.sub(y.mul(p));
            if (!i && 0 > d.cmp(h)) t = o.neg(), r = b, i = d.neg(), a = c;
            else if (i && 2 == ++g) break;
            o = d, l = u, u = d, m = b, b = c, v = p, p = w
        }
        f = d.neg(), s = c;
        var x = i.sqr().add(a.sqr());
        return f.sqr().add(s.sqr()).cmp(x) >= 0 && (f = t, s = r), i.negative && (i = i.neg(), a = a.neg()), f.negative && (f = f.neg(), s = s.neg()), [{
            a: i,
            b: a
        }, {
            a: f,
            b: s
        }]
    }, o.prototype._endoSplit = function(e) {
        var t = this.endo.basis,
            r = t[0],
            i = t[1],
            n = i.b.mul(e).divRound(this.n),
            a = r.b.neg().mul(e).divRound(this.n),
            f = n.mul(r.a),
            s = a.mul(i.a),
            o = n.mul(r.b),
            d = a.mul(i.b);
        return {
            k1: e.sub(f).sub(s),
            k2: o.add(d).neg()
        }
    }, o.prototype.pointFromX = function(e, t) {
        (e = new n(e, 16)).red || (e = e.toRed(this.red));
        var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
            i = r.redSqrt();
        if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
        var a = i.fromRed().isOdd();
        return (t && !a || !t && a) && (i = i.redNeg()), this.point(e, i)
    }, o.prototype.validate = function(e) {
        if (e.inf) return !0;
        var t = e.x,
            r = e.y,
            i = this.a.redMul(t),
            n = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
        return 0 === r.redSqr().redISub(n).cmpn(0)
    }, o.prototype._endoWnafMulAdd = function(e, t, r) {
        for (var i = this._endoWnafT1, n = this._endoWnafT2, a = 0; a < e.length; a++) {
            var f = this._endoSplit(t[a]),
                s = e[a],
                o = s._getBeta();
            f.k1.negative && (f.k1.ineg(), s = s.neg(!0)), f.k2.negative && (f.k2.ineg(), o = o.neg(!0)), i[2 * a] = s, i[2 * a + 1] = o, n[2 * a] = f.k1, n[2 * a + 1] = f.k2
        }
        for (var d = this._wnafMulAdd(1, i, n, 2 * a, r), c = 0; c < 2 * a; c++) i[c] = null, n[c] = null;
        return d
    }, a(d, f.BasePoint), o.prototype.point = function(e, t, r) {
        return new d(this, e, t, r)
    }, o.prototype.pointFromJSON = function(e, t) {
        return d.fromJSON(this, e, t)
    }, d.prototype._getBeta = function() {
        if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var r = this.curve,
                    i = function(e) {
                        return r.point(e.x.redMul(r.endo.beta), e.y)
                    };
                e.beta = t, t.precomputed = {
                    beta: null,
                    naf: e.naf && {
                        wnd: e.naf.wnd,
                        points: e.naf.points.map(i)
                    },
                    doubles: e.doubles && {
                        step: e.doubles.step,
                        points: e.doubles.points.map(i)
                    }
                }
            }
            return t
        }
    }, d.prototype.toJSON = function() {
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
    }, d.fromJSON = function(e, t, r) {
        "string" == typeof t && (t = JSON.parse(t));
        var i = e.point(t[0], t[1], r);
        if (!t[2]) return i;

        function n(t) {
            return e.point(t[0], t[1], r)
        }
        var a = t[2];
        return i.precomputed = {
            beta: null,
            doubles: a.doubles && {
                step: a.doubles.step,
                points: [i].concat(a.doubles.points.map(n))
            },
            naf: a.naf && {
                wnd: a.naf.wnd,
                points: [i].concat(a.naf.points.map(n))
            }
        }, i
    }, d.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
    }, d.prototype.isInfinity = function() {
        return this.inf
    }, d.prototype.add = function(e) {
        if (this.inf) return e;
        if (e.inf) return this;
        if (this.eq(e)) return this.dbl();
        if (this.neg().eq(e) || 0 === this.x.cmp(e.x)) return this.curve.point(null, null);
        var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
        var r = t.redSqr().redISub(this.x).redISub(e.x),
            i = t.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, i)
    }, d.prototype.dbl = function() {
        if (this.inf) return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0)) return this.curve.point(null, null);
        var t = this.curve.a,
            r = this.x.redSqr(),
            i = e.redInvm(),
            n = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i),
            a = n.redSqr().redISub(this.x.redAdd(this.x)),
            f = n.redMul(this.x.redSub(a)).redISub(this.y);
        return this.curve.point(a, f)
    }, d.prototype.getX = function() {
        return this.x.fromRed()
    }, d.prototype.getY = function() {
        return this.y.fromRed()
    }, d.prototype.mul = function(e) {
        return (e = new n(e, 16), this.isInfinity()) ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
    }, d.prototype.mulAdd = function(e, t, r) {
        var i = [this, t],
            n = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
    }, d.prototype.jmulAdd = function(e, t, r) {
        var i = [this, t],
            n = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
    }, d.prototype.eq = function(e) {
        return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
    }, d.prototype.neg = function(e) {
        if (this.inf) return this;
        var t = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
            var r = this.precomputed,
                i = function(e) {
                    return e.neg()
                };
            t.precomputed = {
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
        return t
    }, d.prototype.toJ = function() {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
    }, a(c, f.BasePoint), o.prototype.jpoint = function(e, t, r) {
        return new c(this, e, t, r)
    }, c.prototype.toP = function() {
        if (this.isInfinity()) return this.curve.point(null, null);
        var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            i = this.y.redMul(t).redMul(e);
        return this.curve.point(r, i)
    }, c.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
    }, c.prototype.add = function(e) {
        if (this.isInfinity()) return e;
        if (e.isInfinity()) return this;
        var t = e.z.redSqr(),
            r = this.z.redSqr(),
            i = this.x.redMul(t),
            n = e.x.redMul(r),
            a = this.y.redMul(t.redMul(e.z)),
            f = e.y.redMul(r.redMul(this.z)),
            s = i.redSub(n),
            o = a.redSub(f);
        if (0 === s.cmpn(0))
            if (0 !== o.cmpn(0)) return this.curve.jpoint(null, null, null);
            else return this.dbl();
        var d = s.redSqr(),
            c = d.redMul(s),
            h = i.redMul(d),
            u = o.redSqr().redIAdd(c).redISub(h).redISub(h),
            l = o.redMul(h.redISub(u)).redISub(a.redMul(c)),
            b = this.z.redMul(e.z).redMul(s);
        return this.curve.jpoint(u, l, b)
    }, c.prototype.mixedAdd = function(e) {
        if (this.isInfinity()) return e.toJ();
        if (e.isInfinity()) return this;
        var t = this.z.redSqr(),
            r = this.x,
            i = e.x.redMul(t),
            n = this.y,
            a = e.y.redMul(t).redMul(this.z),
            f = r.redSub(i),
            s = n.redSub(a);
        if (0 === f.cmpn(0))
            if (0 !== s.cmpn(0)) return this.curve.jpoint(null, null, null);
            else return this.dbl();
        var o = f.redSqr(),
            d = o.redMul(f),
            c = r.redMul(o),
            h = s.redSqr().redIAdd(d).redISub(c).redISub(c),
            u = s.redMul(c.redISub(h)).redISub(n.redMul(d)),
            l = this.z.redMul(f);
        return this.curve.jpoint(h, u, l)
    }, c.prototype.dblp = function(e) {
        if (0 === e || this.isInfinity()) return this;
        if (!e) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            var t, r = this;
            for (t = 0; t < e; t++) r = r.dbl();
            return r
        }
        var i = this.curve.a,
            n = this.curve.tinv,
            a = this.x,
            f = this.y,
            s = this.z,
            o = s.redSqr().redSqr(),
            d = f.redAdd(f);
        for (t = 0; t < e; t++) {
            var c = a.redSqr(),
                h = d.redSqr(),
                u = h.redSqr(),
                l = c.redAdd(c).redIAdd(c).redIAdd(i.redMul(o)),
                b = a.redMul(h),
                p = l.redSqr().redISub(b.redAdd(b)),
                m = b.redISub(p),
                v = l.redMul(m);
            v = v.redIAdd(v).redISub(u);
            var g = d.redMul(s);
            t + 1 < e && (o = o.redMul(u)), a = p, s = g, d = v
        }
        return this.curve.jpoint(a, d.redMul(n), s)
    }, c.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
    }, c.prototype._zeroDbl = function() {
        if (this.zOne) {
            var e, t, r, i = this.x.redSqr(),
                n = this.y.redSqr(),
                a = n.redSqr(),
                f = this.x.redAdd(n).redSqr().redISub(i).redISub(a);
            f = f.redIAdd(f);
            var s = i.redAdd(i).redIAdd(i),
                o = s.redSqr().redISub(f).redISub(f),
                d = a.redIAdd(a);
            d = (d = d.redIAdd(d)).redIAdd(d), e = o, t = s.redMul(f.redISub(o)).redISub(d), r = this.y.redAdd(this.y)
        } else {
            var c = this.x.redSqr(),
                h = this.y.redSqr(),
                u = h.redSqr(),
                l = this.x.redAdd(h).redSqr().redISub(c).redISub(u);
            l = l.redIAdd(l);
            var b = c.redAdd(c).redIAdd(c),
                p = b.redSqr(),
                m = u.redIAdd(u);
            m = (m = m.redIAdd(m)).redIAdd(m), e = p.redISub(l).redISub(l), t = b.redMul(l.redISub(e)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r)
        }
        return this.curve.jpoint(e, t, r)
    }, c.prototype._threeDbl = function() {
        if (this.zOne) {
            var e, t, r, i = this.x.redSqr(),
                n = this.y.redSqr(),
                a = n.redSqr(),
                f = this.x.redAdd(n).redSqr().redISub(i).redISub(a);
            f = f.redIAdd(f);
            var s = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                o = s.redSqr().redISub(f).redISub(f);
            e = o;
            var d = a.redIAdd(a);
            d = (d = d.redIAdd(d)).redIAdd(d), t = s.redMul(f.redISub(o)).redISub(d), r = this.y.redAdd(this.y)
        } else {
            var c = this.z.redSqr(),
                h = this.y.redSqr(),
                u = this.x.redMul(h),
                l = this.x.redSub(c).redMul(this.x.redAdd(c));
            l = l.redAdd(l).redIAdd(l);
            var b = u.redIAdd(u),
                p = (b = b.redIAdd(b)).redAdd(b);
            e = l.redSqr().redISub(p), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(c);
            var m = h.redSqr();
            m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), t = l.redMul(b.redISub(e)).redISub(m)
        }
        return this.curve.jpoint(e, t, r)
    }, c.prototype._dbl = function() {
        var e = this.curve.a,
            t = this.x,
            r = this.y,
            i = this.z,
            n = i.redSqr().redSqr(),
            a = t.redSqr(),
            f = r.redSqr(),
            s = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(n)),
            o = t.redAdd(t),
            d = (o = o.redIAdd(o)).redMul(f),
            c = s.redSqr().redISub(d.redAdd(d)),
            h = d.redISub(c),
            u = f.redSqr();
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var l = s.redMul(h).redISub(u),
            b = r.redAdd(r).redMul(i);
        return this.curve.jpoint(c, l, b)
    }, c.prototype.trpl = function() {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            i = t.redSqr(),
            n = e.redAdd(e).redIAdd(e),
            a = n.redSqr(),
            f = this.x.redAdd(t).redSqr().redISub(e).redISub(i),
            s = (f = (f = (f = f.redIAdd(f)).redAdd(f).redIAdd(f)).redISub(a)).redSqr(),
            o = i.redIAdd(i);
        o = (o = (o = o.redIAdd(o)).redIAdd(o)).redIAdd(o);
        var d = n.redIAdd(f).redSqr().redISub(a).redISub(s).redISub(o),
            c = t.redMul(d);
        c = (c = c.redIAdd(c)).redIAdd(c);
        var h = this.x.redMul(s).redISub(c);
        h = (h = h.redIAdd(h)).redIAdd(h);
        var u = this.y.redMul(d.redMul(o.redISub(d)).redISub(f.redMul(s)));
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var l = this.z.redAdd(f).redSqr().redISub(r).redISub(s);
        return this.curve.jpoint(h, u, l)
    }, c.prototype.mul = function(e, t) {
        return e = new n(e, t), this.curve._wnafMul(this, e)
    }, c.prototype.eq = function(e) {
        if ("affine" === e.type) return this.eq(e.toJ());
        if (this === e) return !0;
        var t = this.z.redSqr(),
            r = e.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
        var i = t.redMul(this.z),
            n = r.redMul(e.z);
        return 0 === this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0)
    }, c.prototype.eqXToP = function(e) {
        var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t);
        if (0 === this.x.cmp(r)) return !0;
        for (var i = e.clone(), n = this.curve.redN.redMul(t);;) {
            if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
            if (r.redIAdd(n), 0 === this.x.cmp(r)) return !0
        }
    }, c.prototype.inspect = function() {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
    }, c.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }
}, 45658, (e, t, r) => {
    "use strict";
    var i = e.r(416450),
        n = e.r(840387),
        a = e.r(394661),
        f = e.r(386480);

    function s(e) {
        a.call(this, "mont", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.i4 = new i(4).toRed(this.red).redInvm(), this.two = new i(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
    }

    function o(e, t, r) {
        a.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new i(t, 16), this.z = new i(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
    }
    n(s, a), t.exports = s, s.prototype.validate = function(e) {
        var t = e.normalize().x,
            r = t.redSqr(),
            i = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
        return 0 === i.redSqrt().redSqr().cmp(i)
    }, n(o, a.BasePoint), s.prototype.decodePoint = function(e, t) {
        return this.point(f.toArray(e, t), 1)
    }, s.prototype.point = function(e, t) {
        return new o(this, e, t)
    }, s.prototype.pointFromJSON = function(e) {
        return o.fromJSON(this, e)
    }, o.prototype.precompute = function() {}, o.prototype._encode = function() {
        return this.getX().toArray("be", this.curve.p.byteLength())
    }, o.fromJSON = function(e, t) {
        return new o(e, t[0], t[1] || e.one)
    }, o.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, o.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }, o.prototype.dbl = function() {
        var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            r = e.redSub(t),
            i = e.redMul(t),
            n = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
        return this.curve.point(i, n)
    }, o.prototype.add = function() {
        throw Error("Not supported on Montgomery curve")
    }, o.prototype.diffAdd = function(e, t) {
        var r = this.x.redAdd(this.z),
            i = this.x.redSub(this.z),
            n = e.x.redAdd(e.z),
            a = e.x.redSub(e.z).redMul(r),
            f = n.redMul(i),
            s = t.z.redMul(a.redAdd(f).redSqr()),
            o = t.x.redMul(a.redISub(f).redSqr());
        return this.curve.point(s, o)
    }, o.prototype.mul = function(e) {
        for (var t = e.clone(), r = this, i = this.curve.point(null, null), n = []; 0 !== t.cmpn(0); t.iushrn(1)) n.push(t.andln(1));
        for (var a = n.length - 1; a >= 0; a--) 0 === n[a] ? (r = r.diffAdd(i, this), i = i.dbl()) : (i = r.diffAdd(i, this), r = r.dbl());
        return i
    }, o.prototype.mulAdd = function() {
        throw Error("Not supported on Montgomery curve")
    }, o.prototype.jumlAdd = function() {
        throw Error("Not supported on Montgomery curve")
    }, o.prototype.eq = function(e) {
        return 0 === this.getX().cmp(e.getX())
    }, o.prototype.normalize = function() {
        return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
    }, o.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    }
}, 484020, (e, t, r) => {
    "use strict";
    var i = e.r(386480),
        n = e.r(416450),
        a = e.r(840387),
        f = e.r(394661),
        s = i.assert;

    function o(e) {
        this.twisted = (0 | e.a) != 1, this.mOneA = this.twisted && (0 | e.a) == -1, this.extended = this.mOneA, f.call(this, "edwards", e), this.a = new n(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new n(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new n(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = (0 | e.c) == 1
    }

    function d(e, t, r, i, a) {
        f.BasePoint.call(this, e, "projective"), null === t && null === r && null === i ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new n(t, 16), this.y = new n(r, 16), this.z = i ? new n(i, 16) : this.curve.one, this.t = a && new n(a, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
    }
    a(o, f), t.exports = o, o.prototype._mulA = function(e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e)
    }, o.prototype._mulC = function(e) {
        return this.oneC ? e : this.c.redMul(e)
    }, o.prototype.jpoint = function(e, t, r, i) {
        return this.point(e, t, r, i)
    }, o.prototype.pointFromX = function(e, t) {
        (e = new n(e, 16)).red || (e = e.toRed(this.red));
        var r = e.redSqr(),
            i = this.c2.redSub(this.a.redMul(r)),
            a = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            f = i.redMul(a.redInvm()),
            s = f.redSqrt();
        if (0 !== s.redSqr().redSub(f).cmp(this.zero)) throw Error("invalid point");
        var o = s.fromRed().isOdd();
        return (t && !o || !t && o) && (s = s.redNeg()), this.point(e, s)
    }, o.prototype.pointFromY = function(e, t) {
        (e = new n(e, 16)).red || (e = e.toRed(this.red));
        var r = e.redSqr(),
            i = r.redSub(this.c2),
            a = r.redMul(this.d).redMul(this.c2).redSub(this.a),
            f = i.redMul(a.redInvm());
        if (0 === f.cmp(this.zero))
            if (!t) return this.point(this.zero, e);
            else throw Error("invalid point");
        var s = f.redSqrt();
        if (0 !== s.redSqr().redSub(f).cmp(this.zero)) throw Error("invalid point");
        return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e)
    }, o.prototype.validate = function(e) {
        if (e.isInfinity()) return !0;
        e.normalize();
        var t = e.x.redSqr(),
            r = e.y.redSqr(),
            i = t.redMul(this.a).redAdd(r),
            n = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
        return 0 === i.cmp(n)
    }, a(d, f.BasePoint), o.prototype.pointFromJSON = function(e) {
        return d.fromJSON(this, e)
    }, o.prototype.point = function(e, t, r, i) {
        return new d(this, e, t, r, i)
    }, d.fromJSON = function(e, t) {
        return new d(e, t[0], t[1], t[2])
    }, d.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, d.prototype.isInfinity = function() {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
    }, d.prototype._extDbl = function() {
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr();
        r = r.redIAdd(r);
        var i = this.curve._mulA(e),
            n = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            a = i.redAdd(t),
            f = a.redSub(r),
            s = i.redSub(t),
            o = n.redMul(f),
            d = a.redMul(s),
            c = n.redMul(s),
            h = f.redMul(a);
        return this.curve.point(o, d, h, c)
    }, d.prototype._projDbl = function() {
        var e, t, r, i, n, a, f = this.x.redAdd(this.y).redSqr(),
            s = this.x.redSqr(),
            o = this.y.redSqr();
        if (this.curve.twisted) {
            var d = (i = this.curve._mulA(s)).redAdd(o);
            this.zOne ? (e = f.redSub(s).redSub(o).redMul(d.redSub(this.curve.two)), t = d.redMul(i.redSub(o)), r = d.redSqr().redSub(d).redSub(d)) : (n = this.z.redSqr(), a = d.redSub(n).redISub(n), e = f.redSub(s).redISub(o).redMul(a), t = d.redMul(i.redSub(o)), r = d.redMul(a))
        } else i = s.redAdd(o), n = this.curve._mulC(this.z).redSqr(), a = i.redSub(n).redSub(n), e = this.curve._mulC(f.redISub(i)).redMul(a), t = this.curve._mulC(i).redMul(s.redISub(o)), r = i.redMul(a);
        return this.curve.point(e, t, r)
    }, d.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
    }, d.prototype._extAdd = function(e) {
        var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            i = this.t.redMul(this.curve.dd).redMul(e.t),
            n = this.z.redMul(e.z.redAdd(e.z)),
            a = r.redSub(t),
            f = n.redSub(i),
            s = n.redAdd(i),
            o = r.redAdd(t),
            d = a.redMul(f),
            c = s.redMul(o),
            h = a.redMul(o),
            u = f.redMul(s);
        return this.curve.point(d, c, u, h)
    }, d.prototype._projAdd = function(e) {
        var t, r, i = this.z.redMul(e.z),
            n = i.redSqr(),
            a = this.x.redMul(e.x),
            f = this.y.redMul(e.y),
            s = this.curve.d.redMul(a).redMul(f),
            o = n.redSub(s),
            d = n.redAdd(s),
            c = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(f),
            h = i.redMul(o).redMul(c);
        return this.curve.twisted ? (t = i.redMul(d).redMul(f.redSub(this.curve._mulA(a))), r = o.redMul(d)) : (t = i.redMul(d).redMul(f.redSub(a)), r = this.curve._mulC(o).redMul(d)), this.curve.point(h, t, r)
    }, d.prototype.add = function(e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
    }, d.prototype.mul = function(e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
    }, d.prototype.mulAdd = function(e, t, r) {
        return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
    }, d.prototype.jmulAdd = function(e, t, r) {
        return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
    }, d.prototype.normalize = function() {
        if (this.zOne) return this;
        var e = this.z.redInvm();
        return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
    }, d.prototype.neg = function() {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
    }, d.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    }, d.prototype.getY = function() {
        return this.normalize(), this.y.fromRed()
    }, d.prototype.eq = function(e) {
        return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
    }, d.prototype.eqXToP = function(e) {
        var t = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(t)) return !0;
        for (var r = e.clone(), i = this.curve.redN.redMul(this.z);;) {
            if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
            if (t.redIAdd(i), 0 === this.x.cmp(t)) return !0
        }
    }, d.prototype.toP = d.prototype.normalize, d.prototype.mixedAdd = d.prototype.add
}, 325889, (e, t, r) => {
    "use strict";
    r.base = e.r(394661), r.short = e.r(188777), r.mont = e.r(45658), r.edwards = e.r(484020)
}, 111820, (e, t, r) => {
    t.exports = {
        doubles: {
            step: 4,
            points: [
                ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
            ]
        },
        naf: {
            wnd: 7,
            points: [
                ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
            ]
        }
    }
}, 293698, (e, t, r) => {
    "use strict";
    var i = e.r(877744);

    function n(e) {
        return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 0xff0000 | (255 & e) << 24) >>> 0
    }

    function a(e) {
        return 1 === e.length ? "0" + e : e
    }

    function f(e) {
        if (7 === e.length) return "0" + e;
        if (6 === e.length) return "00" + e;
        if (5 === e.length) return "000" + e;
        if (4 === e.length) return "0000" + e;
        if (3 === e.length) return "00000" + e;
        else if (2 === e.length) return "000000" + e;
        else if (1 === e.length) return "0000000" + e;
        else return e
    }
    r.inherits = e.r(840387), r.toArray = function(e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var r = [];
        if ("string" == typeof e)
            if (t) {
                if ("hex" === t)
                    for ((e = e.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
            } else
                for (var i = 0, n = 0; n < e.length; n++) {
                    var a, f, s = e.charCodeAt(n);
                    s < 128 ? r[i++] = s : (s < 2048 ? r[i++] = s >> 6 | 192 : ((a = e, f = n, (64512 & a.charCodeAt(f)) != 55296 || f < 0 || f + 1 >= a.length ? 1 : (64512 & a.charCodeAt(f + 1)) != 56320) ? r[i++] = s >> 12 | 224 : (s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++n)), r[i++] = s >> 18 | 240, r[i++] = s >> 12 & 63 | 128), r[i++] = s >> 6 & 63 | 128), r[i++] = 63 & s | 128)
                } else
                    for (n = 0; n < e.length; n++) r[n] = 0 | e[n];
        return r
    }, r.toHex = function(e) {
        for (var t = "", r = 0; r < e.length; r++) t += a(e[r].toString(16));
        return t
    }, r.htonl = n, r.toHex32 = function(e, t) {
        for (var r = "", i = 0; i < e.length; i++) {
            var a = e[i];
            "little" === t && (a = n(a)), r += f(a.toString(16))
        }
        return r
    }, r.zero2 = a, r.zero8 = f, r.join32 = function(e, t, r, n) {
        var a, f = r - t;
        i(f % 4 == 0);
        for (var s = Array(f / 4), o = 0, d = t; o < s.length; o++, d += 4) a = "big" === n ? e[d] << 24 | e[d + 1] << 16 | e[d + 2] << 8 | e[d + 3] : e[d + 3] << 24 | e[d + 2] << 16 | e[d + 1] << 8 | e[d], s[o] = a >>> 0;
        return s
    }, r.split32 = function(e, t) {
        for (var r = Array(4 * e.length), i = 0, n = 0; i < e.length; i++, n += 4) {
            var a = e[i];
            "big" === t ? (r[n] = a >>> 24, r[n + 1] = a >>> 16 & 255, r[n + 2] = a >>> 8 & 255, r[n + 3] = 255 & a) : (r[n + 3] = a >>> 24, r[n + 2] = a >>> 16 & 255, r[n + 1] = a >>> 8 & 255, r[n] = 255 & a)
        }
        return r
    }, r.rotr32 = function(e, t) {
        return e >>> t | e << 32 - t
    }, r.rotl32 = function(e, t) {
        return e << t | e >>> 32 - t
    }, r.sum32 = function(e, t) {
        return e + t >>> 0
    }, r.sum32_3 = function(e, t, r) {
        return e + t + r >>> 0
    }, r.sum32_4 = function(e, t, r, i) {
        return e + t + r + i >>> 0
    }, r.sum32_5 = function(e, t, r, i, n) {
        return e + t + r + i + n >>> 0
    }, r.sum64 = function(e, t, r, i) {
        var n = e[t],
            a = i + e[t + 1] >>> 0;
        e[t] = +(a < i) + r + n >>> 0, e[t + 1] = a
    }, r.sum64_hi = function(e, t, r, i) {
        return +(t + i >>> 0 < t) + e + r >>> 0
    }, r.sum64_lo = function(e, t, r, i) {
        return t + i >>> 0
    }, r.sum64_4_hi = function(e, t, r, i, n, a, f, s) {
        var o, d = t;
        return e + r + n + f + (o = 0 + +((d = d + i >>> 0) < t) + +((d = d + a >>> 0) < a) + +((d = d + s >>> 0) < s)) >>> 0
    }, r.sum64_4_lo = function(e, t, r, i, n, a, f, s) {
        return t + i + a + s >>> 0
    }, r.sum64_5_hi = function(e, t, r, i, n, a, f, s, o, d) {
        var c, h = t;
        return e + r + n + f + o + (c = 0 + +((h = h + i >>> 0) < t) + +((h = h + a >>> 0) < a) + +((h = h + s >>> 0) < s) + +((h = h + d >>> 0) < d)) >>> 0
    }, r.sum64_5_lo = function(e, t, r, i, n, a, f, s, o, d) {
        return t + i + a + s + d >>> 0
    }, r.rotr64_hi = function(e, t, r) {
        return (t << 32 - r | e >>> r) >>> 0
    }, r.rotr64_lo = function(e, t, r) {
        return (e << 32 - r | t >>> r) >>> 0
    }, r.shr64_hi = function(e, t, r) {
        return e >>> r
    }, r.shr64_lo = function(e, t, r) {
        return (e << 32 - r | t >>> r) >>> 0
    }
}, 630787, (e, t, r) => {
    "use strict";
    var i = e.r(293698),
        n = e.r(877744);

    function a() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
    }
    r.BlockHash = a, a.prototype.update = function(e, t) {
        if (e = i.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
            var r = (e = this.pending).length % this._delta8;
            this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = i.join32(e, 0, e.length - r, this.endian);
            for (var n = 0; n < e.length; n += this._delta32) this._update(e, n, n + this._delta32)
        }
        return this
    }, a.prototype.digest = function(e) {
        return this.update(this._pad()), n(null === this.pending), this._digest(e)
    }, a.prototype._pad = function() {
        var e = this.pendingTotal,
            t = this._delta8,
            r = t - (e + this.padLength) % t,
            i = Array(r + this.padLength);
        i[0] = 128;
        for (var n = 1; n < r; n++) i[n] = 0;
        if (e <<= 3, "big" === this.endian) {
            for (var a = 8; a < this.padLength; a++) i[n++] = 0;
            i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = e >>> 24 & 255, i[n++] = e >>> 16 & 255, i[n++] = e >>> 8 & 255, i[n++] = 255 & e
        } else
            for (a = 8, i[n++] = 255 & e, i[n++] = e >>> 8 & 255, i[n++] = e >>> 16 & 255, i[n++] = e >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0; a < this.padLength; a++) i[n++] = 0;
        return i
    }
}, 33331, (e, t, r) => {
    "use strict";
    var i = e.r(293698).rotr32;

    function n(e, t, r) {
        return e & t ^ e & r ^ t & r
    }
    r.ft_1 = function(e, t, r, i) {
        var a;
        return 0 === e ? (a = t) & r ^ ~a & i : 1 === e || 3 === e ? t ^ r ^ i : 2 === e ? n(t, r, i) : void 0
    }, r.ch32 = function(e, t, r) {
        return e & t ^ ~e & r
    }, r.maj32 = n, r.p32 = function(e, t, r) {
        return e ^ t ^ r
    }, r.s0_256 = function(e) {
        return i(e, 2) ^ i(e, 13) ^ i(e, 22)
    }, r.s1_256 = function(e) {
        return i(e, 6) ^ i(e, 11) ^ i(e, 25)
    }, r.g0_256 = function(e) {
        return i(e, 7) ^ i(e, 18) ^ e >>> 3
    }, r.g1_256 = function(e) {
        return i(e, 17) ^ i(e, 19) ^ e >>> 10
    }
}, 765392, (e, t, r) => {
    "use strict";
    var i = e.r(293698),
        n = e.r(630787),
        a = e.r(33331),
        f = i.rotl32,
        s = i.sum32,
        o = i.sum32_5,
        d = a.ft_1,
        c = n.BlockHash,
        h = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

    function u() {
        if (!(this instanceof u)) return new u;
        c.call(this), this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0], this.W = Array(80)
    }
    i.inherits(u, c), t.exports = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 80, u.padLength = 64, u.prototype._update = function(e, t) {
        for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
        for (; i < r.length; i++) r[i] = f(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
        var n = this.h[0],
            a = this.h[1],
            c = this.h[2],
            u = this.h[3],
            l = this.h[4];
        for (i = 0; i < r.length; i++) {
            var b = ~~(i / 20),
                p = o(f(n, 5), d(b, a, c, u), l, r[i], h[b]);
            l = u, u = c, c = f(a, 30), a = n, n = p
        }
        this.h[0] = s(this.h[0], n), this.h[1] = s(this.h[1], a), this.h[2] = s(this.h[2], c), this.h[3] = s(this.h[3], u), this.h[4] = s(this.h[4], l)
    }, u.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
    }
}, 619009, (e, t, r) => {
    "use strict";
    var i = e.r(293698),
        n = e.r(630787),
        a = e.r(33331),
        f = e.r(877744),
        s = i.sum32,
        o = i.sum32_4,
        d = i.sum32_5,
        c = a.ch32,
        h = a.maj32,
        u = a.s0_256,
        l = a.s1_256,
        b = a.g0_256,
        p = a.g1_256,
        m = n.BlockHash,
        v = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

    function g() {
        if (!(this instanceof g)) return new g;
        m.call(this), this.h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19], this.k = v, this.W = Array(64)
    }
    i.inherits(g, m), t.exports = g, g.blockSize = 512, g.outSize = 256, g.hmacStrength = 192, g.padLength = 64, g.prototype._update = function(e, t) {
        for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
        for (; i < r.length; i++) r[i] = o(p(r[i - 2]), r[i - 7], b(r[i - 15]), r[i - 16]);
        var n = this.h[0],
            a = this.h[1],
            m = this.h[2],
            v = this.h[3],
            g = this.h[4],
            y = this.h[5],
            w = this.h[6],
            x = this.h[7];
        for (f(this.k.length === r.length), i = 0; i < r.length; i++) {
            var M = d(x, l(g), c(g, y, w), this.k[i], r[i]),
                _ = s(u(n), h(n, a, m));
            x = w, w = y, y = g, g = s(v, M), v = m, m = a, a = n, n = s(M, _)
        }
        this.h[0] = s(this.h[0], n), this.h[1] = s(this.h[1], a), this.h[2] = s(this.h[2], m), this.h[3] = s(this.h[3], v), this.h[4] = s(this.h[4], g), this.h[5] = s(this.h[5], y), this.h[6] = s(this.h[6], w), this.h[7] = s(this.h[7], x)
    }, g.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
    }
}, 81764, (e, t, r) => {
    "use strict";
    var i = e.r(293698),
        n = e.r(619009);

    function a() {
        if (!(this instanceof a)) return new a;
        n.call(this), this.h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]
    }
    i.inherits(a, n), t.exports = a, a.blockSize = 512, a.outSize = 224, a.hmacStrength = 192, a.padLength = 64, a.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h.slice(0, 7), "big") : i.split32(this.h.slice(0, 7), "big")
    }
}, 850773, (e, t, r) => {
    "use strict";
    var i = e.r(293698),
        n = e.r(630787),
        a = e.r(877744),
        f = i.rotr64_hi,
        s = i.rotr64_lo,
        o = i.shr64_hi,
        d = i.shr64_lo,
        c = i.sum64,
        h = i.sum64_hi,
        u = i.sum64_lo,
        l = i.sum64_4_hi,
        b = i.sum64_4_lo,
        p = i.sum64_5_hi,
        m = i.sum64_5_lo,
        v = n.BlockHash,
        g = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f, 0x14292967, 0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

    function y() {
        if (!(this instanceof y)) return new y;
        v.call(this), this.h = [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179], this.k = g, this.W = Array(160)
    }
    i.inherits(y, v), t.exports = y, y.blockSize = 1024, y.outSize = 512, y.hmacStrength = 192, y.padLength = 128, y.prototype._prepareBlock = function(e, t) {
        for (var r = this.W, i = 0; i < 32; i++) r[i] = e[t + i];
        for (; i < r.length; i += 2) {
            var n = function(e, t) {
                    var r = f(e, t, 19) ^ f(t, e, 29) ^ o(e, t, 6);
                    return r < 0 && (r += 0x100000000), r
                }(r[i - 4], r[i - 3]),
                a = function(e, t) {
                    var r = s(e, t, 19) ^ s(t, e, 29) ^ d(e, t, 6);
                    return r < 0 && (r += 0x100000000), r
                }(r[i - 4], r[i - 3]),
                c = r[i - 14],
                h = r[i - 13],
                u = function(e, t) {
                    var r = f(e, t, 1) ^ f(e, t, 8) ^ o(e, t, 7);
                    return r < 0 && (r += 0x100000000), r
                }(r[i - 30], r[i - 29]),
                p = function(e, t) {
                    var r = s(e, t, 1) ^ s(e, t, 8) ^ d(e, t, 7);
                    return r < 0 && (r += 0x100000000), r
                }(r[i - 30], r[i - 29]),
                m = r[i - 32],
                v = r[i - 31];
            r[i] = l(n, a, c, h, u, p, m, v), r[i + 1] = b(n, a, c, h, u, p, m, v)
        }
    }, y.prototype._update = function(e, t) {
        this._prepareBlock(e, t);
        var r = this.W,
            i = this.h[0],
            n = this.h[1],
            o = this.h[2],
            d = this.h[3],
            l = this.h[4],
            b = this.h[5],
            v = this.h[6],
            g = this.h[7],
            y = this.h[8],
            w = this.h[9],
            x = this.h[10],
            M = this.h[11],
            _ = this.h[12],
            S = this.h[13],
            I = this.h[14],
            A = this.h[15];
        a(this.k.length === r.length);
        for (var E = 0; E < r.length; E += 2) {
            var O = I,
                P = A,
                R = function(e, t) {
                    var r = f(e, t, 14) ^ f(e, t, 18) ^ f(t, e, 9);
                    return r < 0 && (r += 0x100000000), r
                }(y, w),
                z = function(e, t) {
                    var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
                    return r < 0 && (r += 0x100000000), r
                }(y, w),
                N = function(e, t, r) {
                    var i = e & t ^ ~e & r;
                    return i < 0 && (i += 0x100000000), i
                }(y, x, _),
                k = function(e, t, r) {
                    var i = e & t ^ ~e & r;
                    return i < 0 && (i += 0x100000000), i
                }(w, M, S),
                T = this.k[E],
                L = this.k[E + 1],
                C = r[E],
                j = r[E + 1],
                B = p(O, P, R, z, N, k, T, L, C, j),
                q = m(O, P, R, z, N, k, T, L, C, j);
            O = function(e, t) {
                var r = f(e, t, 28) ^ f(t, e, 2) ^ f(t, e, 7);
                return r < 0 && (r += 0x100000000), r
            }(i, n), P = function(e, t) {
                var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
                return r < 0 && (r += 0x100000000), r
            }(i, n);
            var D = h(O, P, R = function(e, t, r) {
                    var i = e & t ^ e & r ^ t & r;
                    return i < 0 && (i += 0x100000000), i
                }(i, o, l), z = function(e, t, r) {
                    var i = e & t ^ e & r ^ t & r;
                    return i < 0 && (i += 0x100000000), i
                }(n, d, b)),
                U = u(O, P, R, z);
            I = _, A = S, _ = x, S = M, x = y, M = w, y = h(v, g, B, q), w = u(g, g, B, q), v = l, g = b, l = o, b = d, o = i, d = n, i = h(B, q, D, U), n = u(B, q, D, U)
        }
        c(this.h, 0, i, n), c(this.h, 2, o, d), c(this.h, 4, l, b), c(this.h, 6, v, g), c(this.h, 8, y, w), c(this.h, 10, x, M), c(this.h, 12, _, S), c(this.h, 14, I, A)
    }, y.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h, "big") : i.split32(this.h, "big")
    }
}, 128268, (e, t, r) => {
    "use strict";
    var i = e.r(293698),
        n = e.r(850773);

    function a() {
        if (!(this instanceof a)) return new a;
        n.call(this), this.h = [0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4]
    }
    i.inherits(a, n), t.exports = a, a.blockSize = 1024, a.outSize = 384, a.hmacStrength = 192, a.padLength = 128, a.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h.slice(0, 12), "big") : i.split32(this.h.slice(0, 12), "big")
    }
}, 668497, (e, t, r) => {
    "use strict";
    r.sha1 = e.r(765392), r.sha224 = e.r(81764), r.sha256 = e.r(619009), r.sha384 = e.r(128268), r.sha512 = e.r(850773)
}, 373701, (e, t, r) => {
    "use strict";
    var i = e.r(293698),
        n = e.r(630787),
        a = i.rotl32,
        f = i.sum32,
        s = i.sum32_3,
        o = i.sum32_4,
        d = n.BlockHash;

    function c() {
        if (!(this instanceof c)) return new c;
        d.call(this), this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0], this.endian = "little"
    }

    function h(e, t, r, i) {
        return e <= 15 ? t ^ r ^ i : e <= 31 ? t & r | ~t & i : e <= 47 ? (t | ~r) ^ i : e <= 63 ? t & i | r & ~i : t ^ (r | ~i)
    }
    i.inherits(c, d), r.ripemd160 = c, c.blockSize = 512, c.outSize = 160, c.hmacStrength = 192, c.padLength = 64, c.prototype._update = function(e, t) {
        for (var r = this.h[0], i = this.h[1], n = this.h[2], d = this.h[3], c = this.h[4], m = r, v = i, g = n, y = d, w = c, x = 0; x < 80; x++) {
            var M, _, S = f(a(o(r, h(x, i, n, d), e[u[x] + t], (M = x) <= 15 ? 0 : M <= 31 ? 0x5a827999 : M <= 47 ? 0x6ed9eba1 : M <= 63 ? 0x8f1bbcdc : 0xa953fd4e), b[x]), c);
            r = c, c = d, d = a(n, 10), n = i, i = S, S = f(a(o(m, h(79 - x, v, g, y), e[l[x] + t], (_ = x) <= 15 ? 0x50a28be6 : _ <= 31 ? 0x5c4dd124 : _ <= 47 ? 0x6d703ef3 : 0x7a6d76e9 * !!(_ <= 63)), p[x]), w), m = w, w = y, y = a(g, 10), g = v, v = S
        }
        S = s(this.h[1], n, y), this.h[1] = s(this.h[2], d, w), this.h[2] = s(this.h[3], c, m), this.h[3] = s(this.h[4], r, v), this.h[4] = s(this.h[0], i, g), this.h[0] = S
    }, c.prototype._digest = function(e) {
        return "hex" === e ? i.toHex32(this.h, "little") : i.split32(this.h, "little")
    };
    var u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        l = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        b = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        p = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
}, 7646, (e, t, r) => {
    "use strict";
    var i = e.r(293698),
        n = e.r(877744);

    function a(e, t, r) {
        if (!(this instanceof a)) return new a(e, t, r);
        this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(i.toArray(t, r))
    }
    t.exports = a, a.prototype._init = function(e) {
        e.length > this.blockSize && (e = new this.Hash().update(e).digest()), n(e.length <= this.blockSize);
        for (var t = e.length; t < this.blockSize; t++) e.push(0);
        for (t = 0; t < e.length; t++) e[t] ^= 54;
        for (t = 0, this.inner = new this.Hash().update(e); t < e.length; t++) e[t] ^= 106;
        this.outer = new this.Hash().update(e)
    }, a.prototype.update = function(e, t) {
        return this.inner.update(e, t), this
    }, a.prototype.digest = function(e) {
        return this.outer.update(this.inner.digest()), this.outer.digest(e)
    }
}, 47807, (e, t, r) => {
    r.utils = e.r(293698), r.common = e.r(630787), r.sha = e.r(668497), r.ripemd = e.r(373701), r.hmac = e.r(7646), r.sha1 = r.sha.sha1, r.sha256 = r.sha.sha256, r.sha224 = r.sha.sha224, r.sha384 = r.sha.sha384, r.sha512 = r.sha.sha512, r.ripemd160 = r.ripemd.ripemd160
}, 384705, (e, t, r) => {
    "use strict";
    var i, n = e.r(47807),
        a = e.r(325889),
        f = e.r(386480).assert;

    function s(e) {
        "short" === e.type ? this.curve = new a.short(e) : "edwards" === e.type ? this.curve = new a.edwards(e) : this.curve = new a.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, f(this.g.validate(), "Invalid curve"), f(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
    }

    function o(e, t) {
        Object.defineProperty(r, e, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var i = new s(t);
                return Object.defineProperty(r, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                }), i
            }
        })
    }
    r.PresetCurve = s, o("p192", {
        type: "short",
        prime: "p192",
        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
        hash: n.sha256,
        gRed: !1,
        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
    }), o("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: n.sha256,
        gRed: !1,
        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
    }), o("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: n.sha256,
        gRed: !1,
        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
    }), o("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: n.sha384,
        gRed: !1,
        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
    }), o("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: n.sha512,
        gRed: !1,
        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
    }), o("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: n.sha256,
        gRed: !1,
        g: ["9"]
    }), o("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: n.sha256,
        gRed: !1,
        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
    });
    try {
        i = e.r(111820)
    } catch (e) {
        i = void 0
    }
    o("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: n.sha256,
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
        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", i]
    })
}, 597651, (e, t, r) => {
    "use strict";
    var i = e.r(47807),
        n = e.r(583409),
        a = e.r(877744);

    function f(e) {
        if (!(this instanceof f)) return new f(e);
        this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var t = n.toArray(e.entropy, e.entropyEnc || "hex"),
            r = n.toArray(e.nonce, e.nonceEnc || "hex"),
            i = n.toArray(e.pers, e.persEnc || "hex");
        a(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, i)
    }
    t.exports = f, f.prototype._init = function(e, t, r) {
        var i = e.concat(t).concat(r);
        this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
        for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
        this._update(i), this._reseed = 1, this.reseedInterval = 0x1000000000000
    }, f.prototype._hmac = function() {
        return new i.hmac(this.hash, this.K)
    }, f.prototype._update = function(e) {
        var t = this._hmac().update(this.V).update([0]);
        e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
    }, f.prototype.reseed = function(e, t, r, i) {
        "string" != typeof t && (i = r, r = t, t = null), e = n.toArray(e, t), r = n.toArray(r, i), a(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
    }, f.prototype.generate = function(e, t, r, i) {
        if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
        "string" != typeof t && (i = r, r = t, t = null), r && (r = n.toArray(r, i || "hex"), this._update(r));
        for (var a = []; a.length < e;) this.V = this._hmac().update(this.V).digest(), a = a.concat(this.V);
        var f = a.slice(0, e);
        return this._update(r), this._reseed++, n.encode(f, t)
    }
}, 670051, (e, t, r) => {
    "use strict";
    var i = e.r(416450),
        n = e.r(386480).assert;

    function a(e, t) {
        this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
    }
    t.exports = a, a.fromPublic = function(e, t, r) {
        return t instanceof a ? t : new a(e, {
            pub: t,
            pubEnc: r
        })
    }, a.fromPrivate = function(e, t, r) {
        return t instanceof a ? t : new a(e, {
            priv: t,
            privEnc: r
        })
    }, a.prototype.validate = function() {
        var e = this.getPublic();
        return e.isInfinity() ? {
            result: !1,
            reason: "Invalid public key"
        } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
            result: !0,
            reason: null
        } : {
            result: !1,
            reason: "Public key * N != O"
        } : {
            result: !1,
            reason: "Public key is not a point"
        }
    }, a.prototype.getPublic = function(e, t) {
        return ("string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t) ? this.pub.encode(t, e) : this.pub
    }, a.prototype.getPrivate = function(e) {
        return "hex" === e ? this.priv.toString(16, 2) : this.priv
    }, a.prototype._importPrivate = function(e, t) {
        this.priv = new i(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
    }, a.prototype._importPublic = function(e, t) {
        if (e.x || e.y) {
            "mont" === this.ec.curve.type ? n(e.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && n(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
            return
        }
        this.pub = this.ec.curve.decodePoint(e, t)
    }, a.prototype.derive = function(e) {
        return e.validate() || n(e.validate(), "public point not validated"), e.mul(this.priv).getX()
    }, a.prototype.sign = function(e, t, r) {
        return this.ec.sign(e, this, t, r)
    }, a.prototype.verify = function(e, t, r) {
        return this.ec.verify(e, t, this, void 0, r)
    }, a.prototype.inspect = function() {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
    }
}, 539084, (e, t, r) => {
    "use strict";
    var i = e.r(416450),
        n = e.r(386480),
        a = n.assert;

    function f(e, t) {
        if (e instanceof f) return e;
        this._importDER(e, t) || (a(e.r && e.s, "Signature without r or s"), this.r = new i(e.r, 16), this.s = new i(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
    }

    function s() {
        this.place = 0
    }

    function o(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        var i = 15 & r;
        if (0 === i || i > 4 || 0 === e[t.place]) return !1;
        for (var n = 0, a = 0, f = t.place; a < i; a++, f++) n <<= 8, n |= e[f], n >>>= 0;
        return !(n <= 127) && (t.place = f, n)
    }

    function d(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
        return 0 === t ? e : e.slice(t)
    }

    function c(e, t) {
        if (t < 128) return void e.push(t);
        var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
        for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
        e.push(t)
    }
    t.exports = f, f.prototype._importDER = function(e, t) {
        e = n.toArray(e, t);
        var r = new s;
        if (48 !== e[r.place++]) return !1;
        var a = o(e, r);
        if (!1 === a || a + r.place !== e.length || 2 !== e[r.place++]) return !1;
        var f = o(e, r);
        if (!1 === f || (128 & e[r.place]) != 0) return !1;
        var d = e.slice(r.place, f + r.place);
        if (r.place += f, 2 !== e[r.place++]) return !1;
        var c = o(e, r);
        if (!1 === c || e.length !== c + r.place || (128 & e[r.place]) != 0) return !1;
        var h = e.slice(r.place, c + r.place);
        if (0 === d[0])
            if (!(128 & d[1])) return !1;
            else d = d.slice(1);
        if (0 === h[0])
            if (!(128 & h[1])) return !1;
            else h = h.slice(1);
        return this.r = new i(d), this.s = new i(h), this.recoveryParam = null, !0
    }, f.prototype.toDER = function(e) {
        var t = this.r.toArray(),
            r = this.s.toArray();
        for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = d(t), r = d(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
        var i = [2];
        c(i, t.length), (i = i.concat(t)).push(2), c(i, r.length);
        var a = i.concat(r),
            f = [48];
        return c(f, a.length), f = f.concat(a), n.encode(f, e)
    }
}, 925208, (e, t, r) => {
    "use strict";
    var i = e.r(416450),
        n = e.r(597651),
        a = e.r(386480),
        f = e.r(384705),
        s = e.r(954173),
        o = a.assert,
        d = e.r(670051),
        c = e.r(539084);

    function h(e) {
        if (!(this instanceof h)) return new h(e);
        "string" == typeof e && (o(Object.prototype.hasOwnProperty.call(f, e), "Unknown curve " + e), e = f[e]), e instanceof f.PresetCurve && (e = {
            curve: e
        }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
    }
    t.exports = h, h.prototype.keyPair = function(e) {
        return new d(this, e)
    }, h.prototype.keyFromPrivate = function(e, t) {
        return d.fromPrivate(this, e, t)
    }, h.prototype.keyFromPublic = function(e, t) {
        return d.fromPublic(this, e, t)
    }, h.prototype.genKeyPair = function(e) {
        e || (e = {});
        for (var t = new n({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || s(this.hash.hmacStrength),
                entropyEnc: e.entropy && e.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), r = this.n.byteLength(), a = this.n.sub(new i(2));;) {
            var f = new i(t.generate(r));
            if (!(f.cmp(a) > 0)) return f.iaddn(1), this.keyFromPrivate(f)
        }
    }, h.prototype._truncateToN = function(e, t, r) {
        if (i.isBN(e) || "number" == typeof e) n = (e = new i(e, 16)).byteLength();
        else if ("object" == typeof e) n = e.length, e = new i(e, 16);
        else {
            var n, a = e.toString();
            n = a.length + 1 >>> 1, e = new i(a, 16)
        }
        "number" != typeof r && (r = 8 * n);
        var f = r - this.n.bitLength();
        return (f > 0 && (e = e.ushrn(f)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e
    }, h.prototype.sign = function(e, t, r, a) {
        if ("object" == typeof r && (a = r, r = null), a || (a = {}), "string" != typeof e && "number" != typeof e && !i.isBN(e)) {
            o("object" == typeof e && e && "number" == typeof e.length, "Expected message to be an array-like, a hex string, or a BN instance"), o(e.length >>> 0 === e.length);
            for (var f = 0; f < e.length; f++) o((255 & e[f]) === e[f])
        }
        t = this.keyFromPrivate(t, r), o(!(e = this._truncateToN(e, !1, a.msgBitLength)).isNeg(), "Can not sign a negative message");
        var s = this.n.byteLength(),
            d = t.getPrivate().toArray("be", s),
            h = e.toArray("be", s);
        o(new i(h).eq(e), "Can not sign message");
        for (var u = new n({
                hash: this.hash,
                entropy: d,
                nonce: h,
                pers: a.pers,
                persEnc: a.persEnc || "utf8"
            }), l = this.n.sub(new i(1)), b = 0;; b++) {
            var p = a.k ? a.k(b) : new i(u.generate(this.n.byteLength()));
            if (0 >= (p = this._truncateToN(p, !0)).cmpn(1) || p.cmp(l) >= 0) continue;
            var m = this.g.mul(p);
            if (!m.isInfinity()) {
                var v = m.getX(),
                    g = v.umod(this.n);
                if (0 !== g.cmpn(0)) {
                    var y = p.invm(this.n).mul(g.mul(t.getPrivate()).iadd(e));
                    if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                        var w = !!m.getY().isOdd() | 2 * (0 !== v.cmp(g));
                        return a.canonical && y.cmp(this.nh) > 0 && (y = this.n.sub(y), w ^= 1), new c({
                            r: g,
                            s: y,
                            recoveryParam: w
                        })
                    }
                }
            }
        }
    }, h.prototype.verify = function(e, t, r, i, n) {
        n || (n = {}), e = this._truncateToN(e, !1, n.msgBitLength), r = this.keyFromPublic(r, i);
        var a, f = (t = new c(t, "hex")).r,
            s = t.s;
        if (0 > f.cmpn(1) || f.cmp(this.n) >= 0 || 0 > s.cmpn(1) || s.cmp(this.n) >= 0) return !1;
        var o = s.invm(this.n),
            d = o.mul(e).umod(this.n),
            h = o.mul(f).umod(this.n);
        return this.curve._maxwellTrick ? !(a = this.g.jmulAdd(d, r.getPublic(), h)).isInfinity() && a.eqXToP(f) : !(a = this.g.mulAdd(d, r.getPublic(), h)).isInfinity() && 0 === a.getX().umod(this.n).cmp(f)
    }, h.prototype.recoverPubKey = function(e, t, r, n) {
        o((3 & r) === r, "The recovery param is more than two bits"), t = new c(t, n);
        var a = this.n,
            f = new i(e),
            s = t.r,
            d = t.s,
            h = 1 & r,
            u = r >> 1;
        if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw Error("Unable to find sencond key candinate");
        s = u ? this.curve.pointFromX(s.add(this.curve.n), h) : this.curve.pointFromX(s, h);
        var l = t.r.invm(a),
            b = a.sub(f).mul(l).umod(a),
            p = d.mul(l).umod(a);
        return this.g.mulAdd(b, s, p)
    }, h.prototype.getKeyRecoveryParam = function(e, t, r, i) {
        if (null !== (t = new c(t, i)).recoveryParam) return t.recoveryParam;
        for (var n, a = 0; a < 4; a++) {
            try {
                n = this.recoverPubKey(e, t, a)
            } catch (e) {
                continue
            }
            if (n.eq(r)) return a
        }
        throw Error("Unable to find valid recovery factor")
    }
}, 694283, (e, t, r) => {
    "use strict";
    var i = e.r(386480),
        n = i.assert,
        a = i.parseBytes,
        f = i.cachedProperty;

    function s(e, t) {
        this.eddsa = e, this._secret = a(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = a(t.pub)
    }
    s.fromPublic = function(e, t) {
        return t instanceof s ? t : new s(e, {
            pub: t
        })
    }, s.fromSecret = function(e, t) {
        return t instanceof s ? t : new s(e, {
            secret: t
        })
    }, s.prototype.secret = function() {
        return this._secret
    }, f(s, "pubBytes", function() {
        return this.eddsa.encodePoint(this.pub())
    }), f(s, "pub", function() {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
    }), f(s, "privBytes", function() {
        var e = this.eddsa,
            t = this.hash(),
            r = e.encodingLength - 1,
            i = t.slice(0, e.encodingLength);
        return i[0] &= 248, i[r] &= 127, i[r] |= 64, i
    }), f(s, "priv", function() {
        return this.eddsa.decodeInt(this.privBytes())
    }), f(s, "hash", function() {
        return this.eddsa.hash().update(this.secret()).digest()
    }), f(s, "messagePrefix", function() {
        return this.hash().slice(this.eddsa.encodingLength)
    }), s.prototype.sign = function(e) {
        return n(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
    }, s.prototype.verify = function(e, t) {
        return this.eddsa.verify(e, t, this)
    }, s.prototype.getSecret = function(e) {
        return n(this._secret, "KeyPair is public only"), i.encode(this.secret(), e)
    }, s.prototype.getPublic = function(e) {
        return i.encode(this.pubBytes(), e)
    }, t.exports = s
}, 625403, (e, t, r) => {
    "use strict";
    var i = e.r(416450),
        n = e.r(386480),
        a = n.assert,
        f = n.cachedProperty,
        s = n.parseBytes;

    function o(e, t) {
        this.eddsa = e, "object" != typeof t && (t = s(t)), Array.isArray(t) && (a(t.length === 2 * e.encodingLength, "Signature has invalid size"), t = {
            R: t.slice(0, e.encodingLength),
            S: t.slice(e.encodingLength)
        }), a(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof i && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
    }
    f(o, "S", function() {
        return this.eddsa.decodeInt(this.Sencoded())
    }), f(o, "R", function() {
        return this.eddsa.decodePoint(this.Rencoded())
    }), f(o, "Rencoded", function() {
        return this.eddsa.encodePoint(this.R())
    }), f(o, "Sencoded", function() {
        return this.eddsa.encodeInt(this.S())
    }), o.prototype.toBytes = function() {
        return this.Rencoded().concat(this.Sencoded())
    }, o.prototype.toHex = function() {
        return n.encode(this.toBytes(), "hex").toUpperCase()
    }, t.exports = o
}, 338795, (e, t, r) => {
    "use strict";
    var i = e.r(47807),
        n = e.r(384705),
        a = e.r(386480),
        f = a.assert,
        s = a.parseBytes,
        o = e.r(694283),
        d = e.r(625403);

    function c(e) {
        if (f("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof c)) return new c(e);
        e = n[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = i.sha512
    }
    t.exports = c, c.prototype.sign = function(e, t) {
        e = s(e);
        var r = this.keyFromSecret(t),
            i = this.hashInt(r.messagePrefix(), e),
            n = this.g.mul(i),
            a = this.encodePoint(n),
            f = this.hashInt(a, r.pubBytes(), e).mul(r.priv()),
            o = i.add(f).umod(this.curve.n);
        return this.makeSignature({
            R: n,
            S: o,
            Rencoded: a
        })
    }, c.prototype.verify = function(e, t, r) {
        if (e = s(e), (t = this.makeSignature(t)).S().gte(t.eddsa.curve.n) || t.S().isNeg()) return !1;
        var i = this.keyFromPublic(r),
            n = this.hashInt(t.Rencoded(), i.pubBytes(), e),
            a = this.g.mul(t.S());
        return t.R().add(i.pub().mul(n)).eq(a)
    }, c.prototype.hashInt = function() {
        for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
        return a.intFromLE(e.digest()).umod(this.curve.n)
    }, c.prototype.keyFromPublic = function(e) {
        return o.fromPublic(this, e)
    }, c.prototype.keyFromSecret = function(e) {
        return o.fromSecret(this, e)
    }, c.prototype.makeSignature = function(e) {
        return e instanceof d ? e : new d(this, e)
    }, c.prototype.encodePoint = function(e) {
        var t = e.getY().toArray("le", this.encodingLength);
        return t[this.encodingLength - 1] |= 128 * !!e.getX().isOdd(), t
    }, c.prototype.decodePoint = function(e) {
        var t = (e = a.parseBytes(e)).length - 1,
            r = e.slice(0, t).concat(-129 & e[t]),
            i = (128 & e[t]) != 0,
            n = a.intFromLE(r);
        return this.curve.pointFromY(n, i)
    }, c.prototype.encodeInt = function(e) {
        return e.toArray("le", this.encodingLength)
    }, c.prototype.decodeInt = function(e) {
        return a.intFromLE(e)
    }, c.prototype.isPoint = function(e) {
        return e instanceof this.pointClass
    }
}, 145502, (e, t, r) => {
    "use strict";
    r.version = e.r(999053).version, r.utils = e.r(386480), r.rand = e.r(954173), r.curve = e.r(325889), r.curves = e.r(384705), r.ec = e.r(925208), r.eddsa = e.r(338795)
}, 848522, e => {
    "use strict";
    e.s(["RELAY_JSONRPC", 0, {
        waku: {
            publish: "waku_publish",
            batchPublish: "waku_batchPublish",
            subscribe: "waku_subscribe",
            batchSubscribe: "waku_batchSubscribe",
            subscription: "waku_subscription",
            unsubscribe: "waku_unsubscribe",
            batchUnsubscribe: "waku_batchUnsubscribe",
            batchFetchMessages: "waku_batchFetchMessages"
        },
        irn: {
            publish: "irn_publish",
            batchPublish: "irn_batchPublish",
            subscribe: "irn_subscribe",
            batchSubscribe: "irn_batchSubscribe",
            subscription: "irn_subscription",
            unsubscribe: "irn_unsubscribe",
            batchUnsubscribe: "irn_batchUnsubscribe",
            batchFetchMessages: "irn_batchFetchMessages"
        },
        iridium: {
            publish: "iridium_publish",
            batchPublish: "iridium_batchPublish",
            subscribe: "iridium_subscribe",
            batchSubscribe: "iridium_batchSubscribe",
            subscription: "iridium_subscription",
            unsubscribe: "iridium_unsubscribe",
            batchUnsubscribe: "iridium_batchUnsubscribe",
            batchFetchMessages: "iridium_batchFetchMessages"
        }
    }])
}, 24945, e => {
    "use strict";
    var t = function(e, r) {
            return (t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })(e, r)
        },
        r = function() {
            return (r = Object.assign || function(e) {
                for (var t, r = 1, i = arguments.length; r < i; r++)
                    for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }).apply(this, arguments)
        };

    function i(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && i >= e.length && (e = void 0), {
                    value: e && e[i++],
                    done: !e
                }
            }
        };
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function n(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i, n, a = r.call(e),
            f = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = a.next()).done;) f.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (r = a.return) && r.call(a)
            } finally {
                if (n) throw n.error
            }
        }
        return f
    }

    function a(e) {
        return this instanceof a ? (this.v = e, this) : new a(e)
    }
    e.s(["__assign", () => r, "__asyncDelegator", 0, function(e) {
        var t, r;
        return t = {}, i("next"), i("throw", function(e) {
            throw e
        }), i("return"), t[Symbol.iterator] = function() {
            return this
        }, t;

        function i(i, n) {
            t[i] = e[i] ? function(t) {
                return (r = !r) ? {
                    value: a(e[i](t)),
                    done: "return" === i
                } : n ? n(t) : t
            } : n
        }
    }, "__asyncGenerator", 0, function(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var i, n = r.apply(e, t || []),
            f = [];
        return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
            return this
        }, i;

        function s(e) {
            n[e] && (i[e] = function(t) {
                return new Promise(function(r, i) {
                    f.push([e, t, r, i]) > 1 || o(e, t)
                })
            })
        }

        function o(e, t) {
            try {
                var r;
                (r = n[e](t)).value instanceof a ? Promise.resolve(r.value.v).then(d, c) : h(f[0][2], r)
            } catch (e) {
                h(f[0][3], e)
            }
        }

        function d(e) {
            o("next", e)
        }

        function c(e) {
            o("throw", e)
        }

        function h(e, t) {
            e(t), f.shift(), f.length && o(f[0][0], f[0][1])
        }
    }, "__asyncValues", 0, function(e) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = i(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function n(r) {
            t[r] = e[r] && function(t) {
                return new Promise(function(i, n) {
                    var a, f, s;
                    a = i, f = n, s = (t = e[r](t)).done, Promise.resolve(t.value).then(function(e) {
                        a({
                            value: e,
                            done: s
                        })
                    }, f)
                })
            }
        }
    }, "__await", 0, a, "__awaiter", 0, function(e, t, r, i) {
        return new(r || (r = Promise))(function(n, a) {
            function f(e) {
                try {
                    o(i.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    o(i.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(f, s)
            }
            o((i = i.apply(e, t || [])).next())
        })
    }, "__classPrivateFieldGet", 0, function(e, t) {
        if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
        return t.get(e)
    }, "__classPrivateFieldSet", 0, function(e, t, r) {
        if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r
    }, "__createBinding", 0, function(e, t, r, i) {
        void 0 === i && (i = r), e[i] = t[r]
    }, "__decorate", 0, function(e, t, r, i) {
        var n, a = arguments.length,
            f = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) f = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (f = (a < 3 ? n(f) : a > 3 ? n(t, r, f) : n(t, r)) || f);
        return a > 3 && f && Object.defineProperty(t, r, f), f
    }, "__exportStar", 0, function(e, t) {
        for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
    }, "__extends", 0, function(e, r) {
        function i() {
            this.constructor = e
        }
        t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
    }, "__generator", 0, function(e, t) {
        var r, i, n, a, f = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(a) {
            return function(s) {
                var o = [a, s];
                if (r) throw TypeError("Generator is already executing.");
                for (; f;) try {
                    if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                    switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                        case 0:
                        case 1:
                            n = o;
                            break;
                        case 4:
                            return f.label++, {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            f.label++, i = o[1], o = [0];
                            continue;
                        case 7:
                            o = f.ops.pop(), f.trys.pop();
                            continue;
                        default:
                            if (!(n = (n = f.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                f = 0;
                                continue
                            }
                            if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                f.label = o[1];
                                break
                            }
                            if (6 === o[0] && f.label < n[1]) {
                                f.label = n[1], n = o;
                                break
                            }
                            if (n && f.label < n[2]) {
                                f.label = n[2], f.ops.push(o);
                                break
                            }
                            n[2] && f.ops.pop(), f.trys.pop();
                            continue
                    }
                    o = t.call(e, f)
                } catch (e) {
                    o = [6, e], i = 0
                } finally {
                    r = n = 0
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }
        }
    }, "__importDefault", 0, function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }, "__importStar", 0, function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t
    }, "__makeTemplateObject", 0, function(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
        }) : e.raw = t, e
    }, "__metadata", 0, function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }, "__param", 0, function(e, t) {
        return function(r, i) {
            t(r, i, e)
        }
    }, "__read", 0, n, "__rest", 0, function(e, t) {
        var r = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
        return r
    }, "__spread", 0, function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(n(arguments[t]));
        return e
    }, "__spreadArrays", 0, function() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        for (var i = Array(e), n = 0, t = 0; t < r; t++)
            for (var a = arguments[t], f = 0, s = a.length; f < s; f++, n++) i[n] = a[f];
        return i
    }, "__values", 0, i])
}, 274711, (e, t, r) => {
    "use strict";

    function i() {
        return (null === e.g || void 0 === e.g ? void 0 : e.g.crypto) || (null === e.g || void 0 === e.g ? void 0 : e.g.msCrypto) || {}
    }

    function n() {
        let e = i();
        return e.subtle || e.webkitSubtle
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.isBrowserCryptoAvailable = r.getSubtleCrypto = r.getBrowerCrypto = void 0, r.getBrowerCrypto = i, r.getSubtleCrypto = n, r.isBrowserCryptoAvailable = function() {
        return !!i() && !!n()
    }
}, 646060, (e, t, r) => {
    "use strict";
    var i = e.i(350461);

    function n() {
        return "u" < typeof document && "u" > typeof navigator && "ReactNative" === navigator.product
    }

    function a() {
        return void 0 !== i.default && void 0 !== i.default.versions && void 0 !== i.default.versions.node
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.isBrowser = r.isNode = r.isReactNative = void 0, r.isReactNative = n, r.isNode = a, r.isBrowser = function() {
        return !n() && !a()
    }
}, 470774, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    let i = e.r(24945);
    i.__exportStar(e.r(274711), r), i.__exportStar(e.r(646060), r)
}, 319863, 191105, 586991, 948031, 583486, 230886, 383332, e => {
    "use strict";
    var t = e.i(679753);
    e.i(470774).isNode, e.s([], 191105);
    class r {}
    class i extends r {
        constructor() {
            super()
        }
    }
    class n extends i {
        constructor(e) {
            super()
        }
    }
    let a = "INTERNAL_ERROR",
        f = "SERVER_ERROR",
        s = [-32700, -32600, -32601, -32602, -32603],
        o = {
            PARSE_ERROR: {
                code: -32700,
                message: "Parse error"
            },
            INVALID_REQUEST: {
                code: -32600,
                message: "Invalid Request"
            },
            METHOD_NOT_FOUND: {
                code: -32601,
                message: "Method not found"
            },
            INVALID_PARAMS: {
                code: -32602,
                message: "Invalid params"
            },
            [a]: {
                code: -32603,
                message: "Internal error"
            },
            [f]: {
                code: -32e3,
                message: "Server error"
            }
        };

    function d(e) {
        return s.includes(e)
    }

    function c(e) {
        return Object.keys(o).includes(e) ? o[e] : o[f]
    }

    function h(e) {
        let t = Object.values(o).find(t => t.code === e);
        return t || o[f]
    }

    function u(e, t, r) {
        return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? Error(`Unavailable ${r} RPC url at ${t}`) : e
    }

    function l(e = 3) {
        return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e))
    }

    function b(e = 6) {
        return BigInt(l(e))
    }

    function p(e, t, r) {
        return {
            id: r || l(),
            jsonrpc: "2.0",
            method: e,
            params: t
        }
    }

    function m(e, t, r) {
        var i, n;
        return {
            id: e,
            jsonrpc: "2.0",
            error: (i = t, n = r, void 0 === i ? c(a) : ("string" == typeof i && (i = Object.assign(Object.assign({}, c(f)), {
                message: i
            })), void 0 !== n && (i.data = n), d(i.code) && (i = h(i.code)), i))
        }
    }

    function v(e) {
        return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
    }

    function g(e) {
        return v(e) && (y(e) || w(e))
    }

    function y(e) {
        return "result" in e
    }

    function w(e) {
        return "error" in e
    }

    function x(e, t) {
        let r = function(e) {
            let t = e.match(RegExp(/^\w+:/, "gi"));
            if (t && t.length) return t[0]
        }(e);
        return void 0 !== r && new RegExp(t).test(r)
    }

    function M(e) {
        return x(e, "^https?:")
    }
    e.s(["getError", 0, c, "getErrorByCode", 0, h, "isReservedErrorCode", 0, d, "parseConnectionError", 0, u], 586991), e.s(["formatJsonRpcError", 0, m, "formatJsonRpcRequest", 0, p, "formatJsonRpcResult", 0, function(e, t) {
        return {
            id: e,
            jsonrpc: "2.0",
            result: t
        }
    }, "getBigIntRpcId", 0, b, "payloadId", 0, l], 948031), e.s(["isJsonRpcError", 0, w, "isJsonRpcRequest", 0, function(e) {
        return v(e) && "method" in e
    }, "isJsonRpcResponse", 0, g, "isJsonRpcResult", 0, y], 583486), e.s(["JsonRpcProvider", 0, class extends n {
        constructor(e) {
            super(e), this.events = new t.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
        }
        async connect(e = this.connection) {
            await this.open(e)
        }
        async disconnect() {
            await this.close()
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
        async request(e, t) {
            return this.requestStrict(p(e.method, e.params || [], e.id || b().toString()), t)
        }
        async requestStrict(e, t) {
            return new Promise(async (r, i) => {
                if (!this.connection.connected) try {
                    await this.open()
                } catch (e) {
                    i(e)
                }
                this.events.on(`${e.id}`, e => {
                    w(e) ? i(e.error) : r(e.result)
                });
                try {
                    await this.connection.send(e, t)
                } catch (e) {
                    i(e)
                }
            })
        }
        setConnection(e = this.connection) {
            return e
        }
        onPayload(e) {
            this.events.emit("payload", e), g(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
                type: e.method,
                data: e.params
            })
        }
        onClose(e) {
            e && 3e3 === e.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
        }
        async open(e = this.connection) {
            this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
        }
        async close() {
            await this.connection.close()
        }
        registerEventListeners() {
            this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
        }
    }], 319863), e.s(["isHttpUrl", 0, M, "isLocalhostUrl", 0, function(e) {
        return RegExp("wss?://localhost(:d{2,5})?").test(e)
    }, "isWsUrl", 0, function(e) {
        return x(e, "^wss?:")
    }], 230886);
    var _ = e.i(509625),
        S = e.i(712314),
        I = Object.defineProperty,
        A = Object.defineProperties,
        E = Object.getOwnPropertyDescriptors,
        O = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        R = Object.prototype.propertyIsEnumerable,
        z = (e, t, r) => t in e ? I(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        N = (e, t) => {
            for (var r in t || (t = {})) P.call(t, r) && z(e, r, t[r]);
            if (O)
                for (var r of O(t)) R.call(t, r) && z(e, r, t[r]);
            return e
        };
    let k = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST"
    };
    class T {
        constructor(e, r = !1) {
            if (this.url = e, this.disableProviderPing = r, this.events = new t.EventEmitter, this.isAvailable = !1, this.registering = !1, !M(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
            this.url = e, this.disableProviderPing = r
        }
        get connected() {
            return this.isAvailable
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
            if (!this.isAvailable) throw Error("Connection already closed");
            this.onClose()
        }
        async send(e) {
            this.isAvailable || await this.register();
            try {
                let t, r, i = (0, S.safeJsonStringify)(e),
                    n = await (await (0, _.default)(this.url, (t = N({}, k), r = {
                        body: i
                    }, A(t, E(r))))).json();
                this.onPayload({
                    data: n
                })
            } catch (t) {
                this.onError(e.id, t)
            }
        }
        async register(e = this.url) {
            if (!M(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
            if (this.registering) {
                let e = this.events.getMaxListeners();
                return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                    this.events.once("register_error", e => {
                        this.resetMaxListeners(), t(e)
                    }), this.events.once("open", () => {
                        if (this.resetMaxListeners(), typeof this.isAvailable > "u") return t(Error("HTTP connection is missing or invalid"));
                        e()
                    })
                })
            }
            this.url = e, this.registering = !0;
            try {
                if (!this.disableProviderPing) {
                    let t, r, i = (0, S.safeJsonStringify)({
                        id: 1,
                        jsonrpc: "2.0",
                        method: "test",
                        params: []
                    });
                    await (0, _.default)(e, (t = N({}, k), r = {
                        body: i
                    }, A(t, E(r))))
                }
                this.onOpen()
            } catch (t) {
                let e = this.parseError(t);
                throw this.events.emit("register_error", e), this.onClose(), e
            }
        }
        onOpen() {
            this.isAvailable = !0, this.registering = !1, this.events.emit("open")
        }
        onClose() {
            this.isAvailable = !1, this.registering = !1, this.events.emit("close")
        }
        onPayload(e) {
            if (typeof e.data > "u") return;
            let t = "string" == typeof e.data ? (0, S.safeJsonParse)(e.data) : e.data;
            this.events.emit("payload", t)
        }
        onError(e, t) {
            let r = this.parseError(t),
                i = m(e, r.message || r.toString());
            this.events.emit("payload", i)
        }
        parseError(e, t = this.url) {
            return u(e, t, "HTTP")
        }
        resetMaxListeners() {
            this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
        }
    }
    e.s(["HttpConnection", 0, T, "default", 0, T], 383332)
}]);

//# sourceMappingURL=0k.ps-y7e3r5q.js.map