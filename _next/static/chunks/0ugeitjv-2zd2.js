(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 161592, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "LoadableContext", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e.r(731640)._(e.r(191788)).default.createContext(null)
}, 852414, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function() {
            return f
        }
    });
    let r = e.r(731640)._(e.r(191788)),
        i = e.r(161592),
        l = [],
        s = [],
        n = !1;

    function o(e) {
        let t = e(),
            a = {
                loading: !0,
                loaded: null,
                error: null
            };
        return a.promise = t.then(e => (a.loading = !1, a.loaded = e, e)).catch(e => {
            throw a.loading = !1, a.error = e, e
        }), a
    }
    class d {
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

    function u(t) {
        return function(t, a) {
            let o = Object.assign({
                    loader: null,
                    loading: null,
                    delay: 200,
                    timeout: null,
                    webpack: null,
                    modules: null
                }, a),
                u = null;

            function c() {
                if (!u) {
                    let e = new d(t, o);
                    u = {
                        getCurrentValue: e.getCurrentValue.bind(e),
                        subscribe: e.subscribe.bind(e),
                        retry: e.retry.bind(e),
                        promise: e.promise.bind(e)
                    }
                }
                return u.promise()
            }
            if ("u" < typeof window && l.push(c), !n && "u" > typeof window) {
                let t = o.webpack && "function" == typeof e.t.resolveWeak ? o.webpack() : o.modules;
                t && s.push(e => {
                    for (let a of t)
                        if (e.includes(a)) return c()
                })
            }

            function f(e, t) {
                let a;
                c(), (a = r.default.useContext(i.LoadableContext)) && Array.isArray(o.modules) && o.modules.forEach(e => {
                    a(e)
                });
                let l = r.default.useSyncExternalStore(u.subscribe, u.getCurrentValue, u.getCurrentValue);
                return r.default.useImperativeHandle(t, () => ({
                    retry: u.retry
                }), []), r.default.useMemo(() => {
                    var t;
                    return l.loading || l.error ? r.default.createElement(o.loading, {
                        isLoading: l.loading,
                        pastDelay: l.pastDelay,
                        timedOut: l.timedOut,
                        error: l.error,
                        retry: u.retry
                    }) : l.loaded ? r.default.createElement((t = l.loaded) && t.default ? t.default : t, e) : null
                }, [e, l])
            }
            return f.preload = () => c(), f.displayName = "LoadableComponent", r.default.forwardRef(f)
        }(o, t)
    }

    function c(e, t) {
        let a = [];
        for (; e.length;) {
            let r = e.pop();
            a.push(r(t))
        }
        return Promise.all(a).then(() => {
            if (e.length) return c(e, t)
        })
    }
    u.preloadAll = () => new Promise((e, t) => {
        c(l).then(e, t)
    }), u.preloadReady = (e = []) => new Promise(t => {
        let a = () => (n = !0, t());
        c(s, e).then(a, a)
    }), "u" > typeof window && (window.__NEXT_PRELOADREADY = u.preloadReady);
    let f = u
}, 425167, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return c
        },
        noSSR: function() {
            return u
        }
    };
    for (var i in r) Object.defineProperty(a, i, {
        enumerable: !0,
        get: r[i]
    });
    let l = e.r(731640),
        s = e.r(391398);
    e.r(191788);
    let n = l._(e.r(852414)),
        o = "u" < typeof window;

    function d(e) {
        return {
            default: e ? .default || e
        }
    }

    function u(e, t) {
        if (delete t.webpack, delete t.modules, !o) return e(t);
        let a = t.loading;
        return () => (0, s.jsx)(a, {
            error: null,
            isLoading: !0,
            pastDelay: !1,
            timedOut: !1
        })
    }

    function c(e, t) {
        let a = n.default,
            r = {
                loading: ({
                    error: e,
                    isLoading: t,
                    pastDelay: a
                }) => null
            };
        e instanceof Promise ? r.loader = () => e : "function" == typeof e ? r.loader = e : "object" == typeof e && (r = { ...r,
            ...e
        });
        let i = (r = { ...r,
            ...t
        }).loader;
        return (r.loadableGenerated && (r = { ...r,
            ...r.loadableGenerated
        }, delete r.loadableGenerated), "boolean" != typeof r.ssr || r.ssr) ? a({ ...r,
            loader: () => null != i ? i().then(d) : Promise.resolve(d(() => null))
        }) : (delete r.webpack, delete r.modules, u(a, r))
    }("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", {
        value: !0
    }), Object.assign(a.default, a), t.exports = a.default)
}, 168489, (e, t, a) => {
    t.exports = e.r(425167)
}, 725524, 998109, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576);
    e.i(664157);
    var r = e.i(271179),
        i = e.i(767574),
        l = e.i(264516),
        s = e.i(495854);
    e.i(338018);
    var n = e.i(985129),
        o = e.i(191788),
        d = e.i(608404),
        u = e.i(760360),
        c = e.i(128708),
        f = e.i(196061),
        m = e.i(774664),
        p = e.i(472381),
        h = e.i(709769);
    let v = (0, m.forwardRefWithAs)(function(e, t) {
        let a = `headlessui-control-${(0,o.useId)()}`,
            [r, i] = (0, h.useLabels)(),
            [l, s] = (0, p.useDescriptions)(),
            n = (0, u.useDisabled)(),
            {
                disabled: v = n || !1,
                ...b
            } = e,
            x = (0, d.useSlot)({
                disabled: v
            }),
            y = (0, m.useRender)();
        return o.default.createElement(u.DisabledProvider, {
            value: v
        }, o.default.createElement(i, {
            value: r
        }, o.default.createElement(s, {
            value: l
        }, o.default.createElement(f.IdProvider, {
            id: a
        }, y({
            ourProps: {
                ref: t,
                disabled: v || void 0,
                "aria-disabled": v || void 0
            },
            theirProps: { ...b,
                children: o.default.createElement(c.FormFieldsProvider, null, "function" == typeof b.children ? b.children(x) : b.children)
            },
            slot: x,
            defaultTag: "div",
            name: "Field"
        })))))
    });
    e.s(["Field", 0, v], 998109);
    var b = e.i(978722);
    let x = e => {
            let o, d, u, c = (0, a.c)(18),
                {
                    variants: f,
                    onChange: m,
                    currentVariant: p,
                    theme: h,
                    disableOutOfStock: x
                } = e,
                y = void 0 !== x && x,
                {
                    t: g
                } = (0, r.useTranslation)("common");
            c[0] !== p || c[1] !== m ? (o = (e, t) => {
                t || e.id !== p.id || m(e)
            }, c[0] = p, c[1] = m, c[2] = o) : o = c[2];
            let j = o;
            if (c[3] !== y || c[4] !== j || c[5] !== g || c[6] !== h || c[7] !== f) {
                let e;
                c[9] !== y || c[10] !== j || c[11] !== g || c[12] !== h ? (e = e => {
                    let a = (0, i.default)(e.sku),
                        r = !e.availableForSale;
                    if (!a) return null;
                    let o = r && y;
                    return (0, t.jsx)(v, {
                        children: (0, t.jsx)(b.Radio, {
                            "data-testid": "color-swatch",
                            value: e,
                            onClick: () => j(e, o),
                            disabled: o,
                            className: (0, s.default)("cursor-pointer focus:outline-none", o && "cursor-default"),
                            children: e => {
                                let {
                                    checked: i
                                } = e;
                                return (0, t.jsx)(n.default, {
                                    isSelected: i,
                                    colorName: g(`variantColors.${(0,l.toCamelCase)(a.variantTitle)}`),
                                    colorClassName: a.colorClass,
                                    theme: h,
                                    isOutOfStock: r,
                                    disableOutOfStockAnimation: o
                                })
                            }
                        })
                    }, e.id)
                }, c[9] = y, c[10] = j, c[11] = g, c[12] = h, c[13] = e) : e = c[13], d = f.map(e), c[3] = y, c[4] = j, c[5] = g, c[6] = h, c[7] = f, c[8] = d
            } else d = c[8];
            return c[14] !== p || c[15] !== m || c[16] !== d ? (u = (0, t.jsx)(b.RadioGroup, {
                as: "ul",
                className: "flex flex-wrap justify-center gap-[16px] self-start md:gap-[14px]",
                onChange: m,
                value: p,
                children: d
            }), c[14] = p, c[15] = m, c[16] = d, c[17] = u) : u = c[17], u
        },
        y = e => {
            let r, i, l, n, o, d, u = (0, a.c)(22),
                {
                    variants: c,
                    tag: f,
                    currentVariant: m,
                    onChange: p,
                    label: h,
                    theme: v,
                    noDefaultColor: b,
                    disableOutOfStock: y
                } = e,
                g = void 0 === v ? "light" : v;
            u[0] !== h ? (r = h && (0, t.jsx)("p", {
                "data-testid": "variant-selector-swatches__title",
                className: "text-primary body-3",
                children: h
            }), u[0] = h, u[1] = r) : r = u[1];
            let j = f && "relative rounded-full border",
                w = "dark" === g ? "border-neutral-700" : "border-neutral-300";
            return u[2] !== j || u[3] !== w ? (i = (0, s.default)("flex max-w-max items-center gap-8 p-[6px]", j, w, "before:absolute before:-top-px before:left-24 before:h-px before:w-96", 'before:bg-linear-to-r before:from-transparent before:via-white before:to-transparent before:content-[""]'), u[2] = j, u[3] = w, u[4] = i) : i = u[4], u[5] !== m || u[6] !== y || u[7] !== b || u[8] !== p || u[9] !== g || u[10] !== c ? (l = (0, t.jsx)(x, {
                variants: c,
                currentVariant: m,
                onChange: p,
                noDefaultColor: b,
                theme: g,
                disableOutOfStock: y
            }), u[5] = m, u[6] = y, u[7] = b, u[8] = p, u[9] = g, u[10] = c, u[11] = l) : l = u[11], u[12] !== f || u[13] !== g ? (n = f && (0, t.jsx)("span", {
                className: (0, s.default)("body-3 pr-16 pl-8", "dark" === g ? "text-white" : "text-neutral-900"),
                children: f
            }), u[12] = f, u[13] = g, u[14] = n) : n = u[14], u[15] !== i || u[16] !== l || u[17] !== n ? (o = (0, t.jsxs)("div", {
                className: i,
                children: [l, n]
            }), u[15] = i, u[16] = l, u[17] = n, u[18] = o) : o = u[18], u[19] !== r || u[20] !== o ? (d = (0, t.jsxs)(t.Fragment, {
                children: [r, o]
            }), u[19] = r, u[20] = o, u[21] = d) : d = u[21], d
        };
    e.s(["default", 0, e => {
        let n, o, d, u, c, f = (0, a.c)(26),
            {
                className: m,
                currentVariant: p,
                onChange: h,
                showColorName: v,
                title: b,
                variants: x,
                dataCsOverrideId: g,
                secondaryVariants: j,
                primaryVariants: w,
                theme: _,
                noDefaultColor: k,
                disableOutOfStock: C
            } = e,
            S = void 0 === m ? "" : m,
            N = void 0 === _ ? "light" : _,
            O = void 0 !== k && k,
            P = void 0 !== C && C,
            I = (0, i.default)(p.sku),
            {
                t: T
            } = (0, r.useTranslation)("common");
        if ((w ? .variants.length || x.length || 0) + (j ? .variants.length || 0) < 2) return null;
        f[0] !== S ? (n = (0, s.default)("flex gap-4", S), f[0] = S, f[1] = n) : n = f[1];
        let D = w ? w ? .variants : x,
            R = w ? w.label : b,
            E = w ? .tag;
        f[2] !== p || f[3] !== P || f[4] !== O || f[5] !== h || f[6] !== E || f[7] !== D || f[8] !== R || f[9] !== N ? (o = (0, t.jsx)(y, {
            theme: N,
            currentVariant: p,
            onChange: h,
            variants: D,
            label: R,
            tag: E,
            noDefaultColor: O,
            disableOutOfStock: P
        }), f[2] = p, f[3] = P, f[4] = O, f[5] = h, f[6] = E, f[7] = D, f[8] = R, f[9] = N, f[10] = o) : o = f[10], f[11] !== p || f[12] !== P || f[13] !== O || f[14] !== h || f[15] !== j || f[16] !== N ? (d = j && j.variants.length > 0 && (0, t.jsx)(y, {
            theme: N,
            currentVariant: p,
            onChange: h,
            variants: j.variants,
            label: j.label,
            tag: j.tag,
            noDefaultColor: O,
            disableOutOfStock: P
        }), f[11] = p, f[12] = P, f[13] = O, f[14] = h, f[15] = j, f[16] = N, f[17] = d) : d = f[17], f[18] !== o || f[19] !== d || f[20] !== n ? (u = (0, t.jsxs)("div", {
            className: n,
            children: [o, d]
        }), f[18] = o, f[19] = d, f[20] = n, f[21] = u) : u = f[21];
        let F = I && (void 0 === v || v) && (0, t.jsx)("p", {
            className: "mt-[10px] body-3",
            "data-testid": "variant-selector-swatches__color-name",
            children: T(`variantColors.${(0,l.toCamelCase)(I.variantTitle)}`)
        });
        return f[22] !== g || f[23] !== u || f[24] !== F ? (c = (0, t.jsxs)("div", {
            "data-testid": "variant-selector-swatches",
            "data-cs-override-id": g,
            children: [u, F]
        }), f[22] = g, f[23] = u, f[24] = F, f[25] = c) : c = f[25], c
    }], 725524)
}, 867094, e => {
    "use strict";
    e.i(725524), e.s([])
}, 620391, e => {
    "use strict";
    var t = e.i(261576),
        a = e.i(150257),
        r = e.i(203828),
        i = e.i(468411),
        l = e.i(726774),
        s = e.i(219501),
        n = e.i(870256);
    e.s(["usePrefetchLocalisedPrices", 0, function(e) {
        let o, d, u, c = (0, t.c)(13),
            {
                locale: f
            } = (0, r.useRouter)();
        c[0] !== e ? (o = e.map(i.toNumericId), c[0] = e, c[1] = o) : o = c[1];
        let m = o,
            {
                countryCode: p
            } = (0, s.default)();
        if (c[2] !== p || c[3] !== m || c[4] !== f || c[5] !== e) {
            let t;
            c[7] !== p || c[8] !== m || c[9] !== f ? (t = e => ({
                queryKey: [e, p],
                queryFn: () => (0, l.default)(e, f ? .toUpperCase() ? ? "EN", p, ""),
                enabled: !!(m.length > 0 && p),
                staleTime: n.oneDay
            }), c[7] = p, c[8] = m, c[9] = f, c[10] = t) : t = c[10], d = e.map(t), c[2] = p, c[3] = m, c[4] = f, c[5] = e, c[6] = d
        } else d = c[6];
        c[11] !== d ? (u = {
            queries: d
        }, c[11] = d, c[12] = u) : u = c[12], (0, a.useQueries)(u)
    }])
}, 573614, 126298, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        r = e.i(191788);
    e.i(409931);
    var i = e.i(943960),
        l = e.i(495854);
    e.s(["default", 0, e => {
        let s, n, o, d, u = (0, a.c)(13),
            {
                isOpen: c,
                close: f,
                title: m,
                children: p,
                theme: h
            } = e,
            v = void 0 === h ? "light" : h;
        return u[0] !== p ? (s = 1 === r.Children.count(p) ? "md:grid-cols-1" : "md:grid-cols-2", u[0] = p, u[1] = s) : s = u[1], u[2] !== s ? (n = (0, l.default)("grid items-center gap-16 px-16 py-32 md:gap-80 md:px-112 md:py-48", s), u[2] = s, u[3] = n) : n = u[3], u[4] !== p || u[5] !== n ? (o = (0, t.jsx)("div", {
            className: n,
            children: p
        }), u[4] = p, u[5] = n, u[6] = o) : o = u[6], u[7] !== f || u[8] !== c || u[9] !== o || u[10] !== v || u[11] !== m ? (d = (0, t.jsx)(i.default, {
            isOpen: c,
            title: m,
            closeModal: f,
            theme: v,
            children: o
        }), u[7] = f, u[8] = c, u[9] = o, u[10] = v, u[11] = m, u[12] = d) : d = u[12], d
    }], 126298), e.s([], 573614)
}, 544808, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        r = e.i(198311),
        i = e.i(126019);
    e.i(286941);
    var l = e.i(126762),
        s = e.i(455108),
        n = e.i(992219);
    e.i(919993);
    var o = e.i(636985),
        d = e.i(495854);
    let u = () => [{
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
            position: e,
            key: a,
            initialState: i,
            endState: l
        }) => (0, t.jsx)(r.motion.div, {
            className: (0, d.default)(e, "animate-corner pointer-events-none absolute h-8 w-8 bg-neutral-400"),
            variants: {
                initialState: { ...i,
                    opacity: 0
                },
                endState: { ...l,
                    opacity: 1
                }
            },
            transition: {
                duration: .3,
                ease: "easeInOut",
                delay: .3
            }
        }, a)),
        c = ["BinanceSquaredIcon", "GoogleSquaredIcon", "KrakenSquaredIcon", "OKXSquaredIcon", "XSquaredIcon"];

    function f(e) {
        return (0, t.jsx)(i.default, {
            src: `/images/${e}.png`,
            alt: "",
            width: 32,
            height: 32
        }, e)
    }
    e.s(["default", 0, e => {
        let m, p, h, v, b, x, y, g, j, w, _, k, C, S, N, O, P, I, T, D = (0, a.c)(54),
            {
                title: R,
                subtitle: E,
                description: F,
                link: L,
                caption: z,
                image: A,
                imageMobile: V,
                videoUrl: q,
                videoMobileUrl: M,
                videoTitle: B,
                loopVideo: G,
                theme: K,
                direction: U,
                dataCsOverrideId: $,
                contentBlockVariant: H,
                verticalSpacing: W
            } = e,
            X = void 0 === K ? "dark" : K,
            J = void 0 === W ? "none" : W;
        if (!R && !F && !A && !q) return null;
        let Q = "dark" === X ? "border-neutral-600 bg-grey-linear" : "border-neutral-200 bg-neutral-50";
        D[0] !== A || D[1] !== V ? .url || D[2] !== G || D[3] !== M || D[4] !== B || D[5] !== q ? (m = () => {
            let e = {
                muted: !0,
                playsInline: !0,
                autoPlay: !0,
                ...G && {
                    loop: !0
                }
            };
            if (q) return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(n.default, {
                    source: q,
                    ...e,
                    title: B ? ? void 0,
                    className: (0, d.default)("w-full h-full object-cover", M && "hidden md:block"),
                    role: "video"
                }), M && (0, t.jsx)(n.default, {
                    source: M,
                    title: B ? ? void 0,
                    ...e,
                    role: "video",
                    className: (0, d.default)("w-full h-full object-cover", "md:hidden")
                })]
            });
            if (A ? .url) {
                let e = {
                    alt: A ? .title ? ? "",
                    width: 608,
                    height: 440
                };
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(i.default, {
                        src: A.url,
                        className: (0, d.default)(V ? .url && "hidden md:block", "w-full h-full object-cover"),
                        ...e
                    }), V ? .url && (0, t.jsx)(i.default, {
                        src: V ? .url,
                        className: (0, d.default)("md:hidden", "w-full h-full object-cover"),
                        ...e
                    })]
                })
            }
            return null
        }, D[0] = A, D[1] = V ? .url, D[2] = G, D[3] = M, D[4] = B, D[5] = q, D[6] = m) : m = D[6];
        let Y = m,
            Z = "dark" === X ? "bg-black text-white" : "bg-neutral-50 text-black";
        D[7] !== Z ? (p = (0, d.default)(Z, "relative w-full"), D[7] = Z, D[8] = p) : p = D[8];
        let ee = "rtl" === (void 0 === U ? "rtl" : U) ? "md:flex-row-reverse" : "md:flex-row";
        return D[9] !== Q || D[10] !== ee ? (h = (0, d.default)("relative flex flex-col border border-solid", Q, ee), D[9] = Q, D[10] = ee, D[11] = h) : h = D[11], D[12] === Symbol.for("react.memo_cache_sentinel") ? (x = {
            initialState: {
                opacity: 0
            },
            endState: {
                opacity: 1
            }
        }, v = {
            once: !0,
            amount: .7
        }, b = {
            duration: .3,
            ease: "easeInOut"
        }, D[12] = v, D[13] = b, D[14] = x) : (v = D[12], b = D[13], x = D[14]), D[15] !== E || D[16] !== X ? (y = E && (0, t.jsx)(s.default.TagHud, {
            label: E,
            size: "medium",
            theme: X
        }), D[15] = E, D[16] = X, D[17] = y) : y = D[17], D[18] !== R ? (g = (0, t.jsx)("h3", {
            className: "responsive-display-4",
            children: R
        }), D[18] = R, D[19] = g) : g = D[19], D[20] !== F || D[21] !== X ? (j = F && (0, t.jsx)(l.default, {
            content: F,
            className: (0, d.default)("rich-text-p:m-0 rich-text-p:text-balance rich-text-p:heading-4 rich-text-a:heading-1-semi-bold rich-text-a:font-normal my-0 leading-5", "dark" === X ? "rich-text-a:text-white" : "rich-text-a:text-black")
        }), D[20] = F, D[21] = X, D[22] = j) : j = D[22], D[23] !== H || D[24] !== X ? (w = "Ledger Security Focus Feature" === H && (0, t.jsxs)("div", {
            className: "flex flex-row gap-12 md:gap-16",
            "data-testid": "security-focus-icons",
            children: [c.map(f), (0, t.jsx)("span", {
                className: (0, d.default)("content-center", "dark" === X ? "text-neutral-400" : "text-neutral-600"),
                children: "+"
            })]
        }), D[23] = H, D[24] = X, D[25] = w) : w = D[25], D[26] !== L || D[27] !== X ? (_ = (0, t.jsx)(o.default, {
            link: L,
            theme: X
        }), D[26] = L, D[27] = X, D[28] = _) : _ = D[28], D[29] !== z ? (k = z && (0, t.jsx)("p", {
            className: "body-3",
            children: z
        }), D[29] = z, D[30] = k) : k = D[30], D[31] !== y || D[32] !== g || D[33] !== j || D[34] !== w || D[35] !== _ || D[36] !== k ? (C = (0, t.jsx)("div", {
            className: "flex flex-1 items-center",
            children: (0, t.jsxs)("div", {
                className: "flex flex-col gap-16 p-24 lg:p-48",
                children: [y, g, j, w, _, k]
            })
        }), D[31] = y, D[32] = g, D[33] = j, D[34] = w, D[35] = _, D[36] = k, D[37] = C) : C = D[37], D[38] !== Y ? (S = Y(), D[38] = Y, D[39] = S) : S = D[39], D[40] !== S ? (N = (0, t.jsx)("div", {
            className: "flex flex-1 justify-center",
            children: S
        }), D[40] = S, D[41] = N) : N = D[41], D[42] === Symbol.for("react.memo_cache_sentinel") ? (O = (0, t.jsx)(u, {}), D[42] = O) : O = D[42], D[43] !== C || D[44] !== N || D[45] !== h ? (P = (0, t.jsxs)(r.motion.div, {
            className: h,
            initial: "initialState",
            whileInView: "endState",
            variants: x,
            viewport: v,
            transition: b,
            "data-testid": "focus-feature-motion",
            children: [C, N, O]
        }), D[43] = C, D[44] = N, D[45] = h, D[46] = P) : P = D[46], D[47] !== $ || D[48] !== P || D[49] !== J ? (I = (0, t.jsx)(s.default.Section, {
            dataCsOverrideId: $,
            verticalSpacing: J,
            children: P
        }), D[47] = $, D[48] = P, D[49] = J, D[50] = I) : I = D[50], D[51] !== I || D[52] !== p ? (T = (0, t.jsx)("div", {
            className: p,
            "data-testid": "page-content-block",
            children: I
        }), D[51] = I, D[52] = p, D[53] = T) : T = D[53], T
    }])
}, 349837, 64498, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        r = e.i(191788),
        i = e.i(126019);
    e.i(573614);
    var l = e.i(126298);
    e.i(946262);
    var s = e.i(843888),
        n = e.i(157762);
    e.s(["default", 0, e => {
        let o, d, u, c, f, m, p, h = (0, a.c)(25),
            {
                promoInfoText: v,
                promoInfoLink: b,
                theme: x
            } = e,
            y = void 0 === x ? "light" : x,
            [g, j] = (0, r.useState)(!1);
        h[0] === Symbol.for("react.memo_cache_sentinel") ? (o = () => j(!0), h[0] = o) : o = h[0];
        let w = o;
        h[1] === Symbol.for("react.memo_cache_sentinel") ? (d = () => j(!1), h[1] = d) : d = h[1];
        let _ = d;
        if (b ? .textToCopy) {
            let e;
            return h[2] !== b || h[3] !== v || h[4] !== y ? (e = (0, t.jsx)(n.default, {
                promoInfoLink: b,
                theme: y,
                promoInfoText: v
            }), h[2] = b, h[3] = v, h[4] = y, h[5] = e) : e = h[5], e
        }
        let k = b ? .dynamicDrawerContent ? .[0],
            C = k ? .type === "ContentBlock" ? k.data : void 0;
        if (!(v || b) || !C ? .image || !C.description) return null;
        let S = C.title,
            N = C.image,
            O = C.description;
        h[6] !== b || h[7] !== v || h[8] !== y ? (u = (0, t.jsx)("button", {
            type: "button",
            onClick: w,
            "data-cs-override-id": "promo-info",
            children: (0, t.jsx)(n.default, {
                promoInfoLink: b,
                theme: y,
                promoInfoText: v
            })
        }), h[6] = b, h[7] = v, h[8] = y, h[9] = u) : u = h[9];
        let P = N.title || "";
        return h[10] !== N.url || h[11] !== P ? (c = (0, t.jsx)(i.default, {
            src: N.url,
            alt: P,
            width: 550,
            height: 330,
            priority: !0,
            className: "w-full"
        }), h[10] = N.url, h[11] = P, h[12] = c) : c = h[12], h[13] !== O || h[14] !== y ? (f = (0, t.jsx)(s.default, {
            richText: O,
            theme: y
        }), h[13] = O, h[14] = y, h[15] = f) : f = h[15], h[16] !== S || h[17] !== g || h[18] !== c || h[19] !== f || h[20] !== y ? (m = (0, t.jsxs)(l.default, {
            close: _,
            isOpen: g,
            title: S,
            theme: y,
            children: [c, f]
        }), h[16] = S, h[17] = g, h[18] = c, h[19] = f, h[20] = y, h[21] = m) : m = h[21], h[22] !== u || h[23] !== m ? (p = (0, t.jsxs)(t.Fragment, {
            children: [u, m]
        }), h[22] = u, h[23] = m, h[24] = p) : p = h[24], p
    }], 64498), e.s([], 349837)
}, 872044, e => {
    "use strict";
    e.i(627528), e.s([])
}, 753221, e => {
    "use strict";
    var t = e.i(391398);
    let a = (0, e.i(191788).forwardRef)(({
        id: e,
        children: a
    }, r) => (0, t.jsx)("section", {
        id: e,
        ref: r,
        children: a
    }));
    a.displayName = "AnchorSection", e.s(["default", 0, a])
}, 277551, e => {
    "use strict";
    e.i(544808), e.s([])
}, 917350, e => {
    "use strict";
    e.i(753221), e.s([])
}, 151153, 46050, 621351, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576);
    e.i(664157);
    var r = e.i(271179),
        i = e.i(495854);
    e.i(923160);
    var l = e.i(217863);
    e.i(831184);
    var s = e.i(229620);
    e.s(["default", 0, e => {
        let n, o, d, u, c, f, m = (0, a.c)(19),
            {
                rating: p,
                totalReviews: h,
                direction: v,
                color: b,
                size: x
            } = e,
            y = void 0 === v ? "horizontal" : v,
            g = void 0 === b ? "black" : b,
            j = void 0 === x ? "medium" : x,
            {
                t: w
            } = (0, r.useTranslation)("common");
        if (m[0] !== y || m[1] !== h) {
            let e = 0 === h && (0, s.isProduction)();
            n = (0, i.default)("flex gap-[2px]", "horizontal" === y ? "flex-row" : "flex-col", e && "invisible"), m[0] = y, m[1] = h, m[2] = n
        } else n = m[2];
        m[3] !== g || m[4] !== p || m[5] !== j ? (o = (0, t.jsx)(l.default, {
            rating: p,
            size: j,
            color: g
        }), m[3] = g, m[4] = p, m[5] = j, m[6] = o) : o = m[6];
        let _ = "horizontal" === y;
        return m[7] !== _ ? (d = (0, i.default)("pl-8 text-neutral-500 body-3", {
            "mt-2": _
        }), m[7] = _, m[8] = d) : d = m[8], m[9] !== w || m[10] !== h ? (u = w("productCards.reviewsWithCount", {
            count: h
        }), m[9] = w, m[10] = h, m[11] = u) : u = m[11], m[12] !== d || m[13] !== u ? (c = (0, t.jsx)("p", {
            className: d,
            children: u
        }), m[12] = d, m[13] = u, m[14] = c) : c = m[14], m[15] !== n || m[16] !== o || m[17] !== c ? (f = (0, t.jsxs)("div", {
            className: n,
            children: [o, c]
        }), m[15] = n, m[16] = o, m[17] = c, m[18] = f) : f = m[18], f
    }], 46050), e.s([], 151153);
    var n = e.i(44073);
    e.s(["default", 0, e => {
        let r, l, s, o, d = (0, a.c)(10),
            {
                label: u,
                variant: c,
                theme: f,
                size: m
            } = e,
            p = void 0 === m ? "medium" : m;
        switch (c) {
            case "primary":
            case "highlight":
            case "purple":
                r = "purple";
                break;
            default:
                r = "grey"
        }
        let h = "small" === p && "start-8 top-8",
            v = "medium" === p && "start-12 top-12";
        return d[0] !== h || d[1] !== v ? (l = (0, i.default)("absolute z-10", h, v), d[0] = h, d[1] = v, d[2] = l) : l = d[2], d[3] !== r || d[4] !== u || d[5] !== f ? (s = (0, t.jsx)(n.default, {
            label: u,
            variant: r,
            theme: f
        }), d[3] = r, d[4] = u, d[5] = f, d[6] = s) : s = d[6], d[7] !== l || d[8] !== s ? (o = (0, t.jsx)("div", {
            className: l,
            children: s
        }), d[7] = l, d[8] = s, d[9] = o) : o = d[9], o
    }], 621351)
}, 657510, e => {
    "use strict";
    var t = e.i(261576),
        a = e.i(219501);
    e.s(["default", 0, e => {
        let r, i = (0, t.c)(3),
            {
                countryCode: l
            } = (0, a.default)(),
            s = "ledger-nano-x" === e;
        return i[0] !== l || i[1] !== s ? (r = !!l && s && ["GB", "AU", "ES", "US"].includes(l), i[0] = l, i[1] = s, i[2] = r) : r = i[2], r
    }])
}, 195512, 847562, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        r = e.i(203828),
        i = e.i(455108),
        l = e.i(799444);
    let s = (e, t, a) => Intl.NumberFormat(t, {
        style: "currency",
        currency: a,
        trailingZeroDisplay: "stripIfInteger"
    }).format(e);

    function n(e) {
        let {
            id: t
        } = e;
        return t
    }
    e.s(["default", 0, e => {
        let o, d, u, c = (0, a.c)(8),
            {
                variants: f
            } = e,
            {
                locale: m
            } = (0, r.useRouter)(),
            p = void 0 === m ? "en" : m;
        c[0] !== f ? (o = f.map(n), c[0] = f, c[1] = o) : o = c[1];
        let {
            prices: h
        } = (0, l.default)(o);
        c[2] !== p || c[3] !== h ? (d = ((e, t) => {
            if (!(e && 0 !== e.length)) return {
                combinedPrice: null,
                combinedCompareAtPrice: null
            };
            let {
                currency: a
            } = e[0], r = e.reduce((e, {
                amount: t
            }) => e + t, 0), i = e.reduce((e, {
                compareAtAmount: t,
                amount: a
            }) => e + (t || a), 0), l = s(r, t, a);
            return r === i ? {
                combinedPrice: l,
                combinedCompareAtPrice: null
            } : {
                combinedPrice: l,
                combinedCompareAtPrice: s(i, t, a)
            }
        })(h, p), c[2] = p, c[3] = h, c[4] = d) : d = c[4];
        let {
            combinedPrice: v,
            combinedCompareAtPrice: b
        } = d;
        return c[5] !== b || c[6] !== v ? (u = v ? (0, t.jsxs)("div", {
            className: "flex items-center gap-8",
            "data-testid": "price-display",
            children: [b && (0, t.jsx)("div", {
                className: "pe-8 text-neutral-400 line-through body-1 font-normal",
                children: b
            }), (0, t.jsx)("div", {
                className: "flex flex-row flex-wrap items-center gap-x-12",
                children: (0, t.jsx)("span", {
                    "data-testid": "price-display__price",
                    className: "heading-4-semi-bold",
                    children: v
                })
            })]
        }) : (0, t.jsx)(i.default.LoadingSpinner, {
            className: "h-32 w-20 animate-spin text-white"
        }), c[5] = b, c[6] = v, c[7] = u) : u = c[7], u
    }], 847562), e.s([], 195512)
}, 310356, e => {
    "use strict";
    e.i(621351), e.s([])
}, 773184, 725069, e => {
    "use strict";
    var t = e.i(261576),
        a = e.i(191788),
        r = e.i(620391);

    function i(e) {
        return e.id
    }

    function l(e) {
        return e.id
    }

    function s(e) {
        return e.id
    }
    e.s(["default", 0, e => {
        let n, o, d, u = (0, t.c)(14),
            {
                variants: c,
                variantLists: f
            } = e,
            [m, p] = f,
            h = m ? .priceLabel,
            v = m ? .priceConversion;
        u[0] !== m ? .variants || u[1] !== p ? .variants || u[2] !== c ? (n = [...c.map(i), ...m ? .variants.map(l) || [], ...p ? .variants.map(s) || []], u[0] = m ? .variants, u[1] = p ? .variants, u[2] = c, u[3] = n) : n = u[3];
        let b = n;
        (0, r.usePrefetchLocalisedPrices)(b);
        let [x, y] = (0, a.useState)(m ? .variants[0] || c[0]);
        return u[4] !== x || u[5] !== c ? (o = x ? [x, ...c] : c, u[4] = x, u[5] = c, u[6] = o) : o = u[6], u[7] !== x || u[8] !== v || u[9] !== h || u[10] !== m || u[11] !== p || u[12] !== o ? (d = {
            variants: o,
            primaryVariants: m,
            secondaryVariants: p,
            currentVariant: x,
            setCurrentVariant: y,
            priceLabel: h,
            priceConversion: v
        }, u[7] = x, u[8] = v, u[9] = h, u[10] = m, u[11] = p, u[12] = o, u[13] = d) : d = u[13], d
    }], 773184);
    var n = e.i(391398),
        o = e.i(525487),
        d = e.i(79564);

    function u(e) {
        let {
            id: t,
            productHandle: a,
            maxQuantityAllowed: r
        } = e;
        return {
            product: {
                handle: a,
                maxQuantityAllowed: r
            },
            variantId: t
        }
    }
    e.i(664157);
    var c = e.i(271179);
    e.i(643781);
    var f = e.i(989606),
        m = e.i(414448);
    e.s(["default", 0, e => {
        let a, r, i = (0, t.c)(27),
            {
                variants: l,
                isOfferAvailable: s,
                notifyMeFormName: p,
                dataCsOverrideId: h,
                size: v,
                theme: b
            } = e,
            x = void 0 === v ? "medium" : v,
            y = void 0 === b ? "light" : b,
            {
                t: g
            } = (0, c.useTranslation)("common"),
            j = (e => {
                let a, r = (0, t.c)(3),
                    {
                        add: i
                    } = (0, d.default)();
                return r[0] !== i || r[1] !== e ? (a = () => {
                    i(e.map(u))
                }, r[0] = i, r[1] = e, r[2] = a) : a = r[2], a
            })(l);
        if (!s && p) {
            let e;
            return i[0] !== p || i[1] !== x || i[2] !== l[0] ? (e = (0, n.jsx)(o.default, {
                buttonSize: x,
                buttonVariant: "primary-orange",
                formName: p,
                variant: l[0]
            }), i[0] = p, i[1] = x, i[2] = l[0], i[3] = e) : e = i[3], e
        }
        if (!s) {
            let e, t;
            i[4] !== x || i[5] !== g ? (e = "small" === x ? void 0 : g("productCards.outOfStock"), i[4] = x, i[5] = g, i[6] = e) : e = i[6];
            let a = "dark" === y ? "primary-white" : "primary-black";
            return i[7] !== j || i[8] !== h || i[9] !== x || i[10] !== e || i[11] !== a || i[12] !== l[0].id || i[13] !== l[0].productHandle || i[14] !== l[0].sku || i[15] !== l[0].title ? (t = (0, n.jsx)(m.default, {
                productName: l[0].productHandle,
                variantId: l[0].id,
                variantName: l[0].title,
                sku: l[0].sku,
                label: e,
                onClick: j,
                dataCsOverrideId: h,
                size: x,
                variant: a,
                nowrap: !1
            }), i[7] = j, i[8] = h, i[9] = x, i[10] = e, i[11] = a, i[12] = l[0].id, i[13] = l[0].productHandle, i[14] = l[0].sku, i[15] = l[0].title, i[16] = t) : t = i[16], t
        }
        i[17] !== x || i[18] !== g ? (a = "small" === x ? null : g("productCards.addToCard"), i[17] = x, i[18] = g, i[19] = a) : a = i[19];
        let w = "small" === x ? "basketPutIn" : void 0,
            _ = "dark" === y ? "primary-orange" : "primary-black";
        return i[20] !== j || i[21] !== h || i[22] !== x || i[23] !== a || i[24] !== w || i[25] !== _ ? (r = (0, n.jsx)(f.default, {
            nowrap: !1,
            label: a,
            onClick: j,
            dataCsOverrideId: h,
            size: x,
            icon: w,
            variant: _
        }), i[20] = j, i[21] = h, i[22] = x, i[23] = a, i[24] = w, i[25] = _, i[26] = r) : r = i[26], r
    }], 725069)
}, 547627, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576);
    e.i(664157);
    var r = e.i(271179);
    e.i(643781);
    var i = e.i(989606),
        l = e.i(292905),
        s = e.i(217837),
        n = e.i(477180);
    let o = async e => {
        let t = await fetch("/api/buy-it-now", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        });
        if (!t.ok) throw Error("Buy it now failed");
        return t.json()
    };
    var d = e.i(414448);
    e.s(["default", 0, e => {
        let u, c, f, m = (0, a.c)(19),
            {
                variantId: p,
                dataCsOverrideId: h,
                isOfferAvailable: v,
                sku: b,
                size: x
            } = e,
            y = void 0 === x ? "medium" : x,
            {
                t: g
            } = (0, r.useTranslation)("common");
        m[0] !== p ? (u = {
            variantId: p
        }, m[0] = p, m[1] = u) : u = m[1];
        let {
            buyItNow: j,
            isPending: w
        } = (e => {
            let t, r, i, d, u, c, f, m = (0, a.c)(23),
                {
                    variantId: p,
                    onError: h
                } = e,
                {
                    country: v,
                    language: b
                } = (0, n.default)(),
                x = (0, s.useSearchParams)(),
                y = (0, s.useRouter)();
            m[0] !== x ? (t = x ? .get("discount_code"), m[0] = x, m[1] = t) : t = m[1];
            let g = t;
            m[2] !== g || m[3] !== p ? (r = ["buy-it-now", p, g], m[2] = g, m[3] = p, m[4] = r) : r = m[4], m[5] !== v || m[6] !== g || m[7] !== b || m[8] !== p ? (i = () => o({
                variantId: p,
                discountCode: g,
                language: b,
                country: v
            }), m[5] = v, m[6] = g, m[7] = b, m[8] = p, m[9] = i) : i = m[9], m[10] !== y ? (d = e => {
                y.push(e.checkoutUrl)
            }, m[10] = y, m[11] = d) : d = m[11], m[12] !== h ? (u = e => {
                console.error("Buy it now error:", e), h ? .(e)
            }, m[12] = h, m[13] = u) : u = m[13], m[14] !== r || m[15] !== i || m[16] !== d || m[17] !== u ? (c = {
                mutationKey: r,
                mutationFn: i,
                onSuccess: d,
                onError: u
            }, m[14] = r, m[15] = i, m[16] = d, m[17] = u, m[18] = c) : c = m[18];
            let {
                mutate: j,
                isPending: w,
                error: _
            } = (0, l.useMutation)(c);
            return m[19] !== _ || m[20] !== w || m[21] !== j ? (f = {
                buyItNow: j,
                isPending: w,
                error: _
            }, m[19] = _, m[20] = w, m[21] = j, m[22] = f) : f = m[22], f
        })(u);
        if (!v) {
            let e, a;
            m[2] !== g ? (e = g("productCards.outOfStock"), m[2] = g, m[3] = e) : e = m[3];
            let r = `${h}-buy-now`;
            return m[4] !== j || m[5] !== y || m[6] !== b || m[7] !== e || m[8] !== r || m[9] !== p ? (a = (0, t.jsx)(d.default, {
                variantId: p,
                sku: b,
                label: e,
                onClick: j,
                dataCsOverrideId: r,
                size: y,
                variant: "primary-orange",
                nowrap: !1
            }), m[4] = j, m[5] = y, m[6] = b, m[7] = e, m[8] = r, m[9] = p, m[10] = a) : a = m[10], a
        }
        m[11] !== g ? (c = g("productCards.buyItNow"), m[11] = g, m[12] = c) : c = m[12];
        let _ = `${h}-buy-now`;
        return m[13] !== j || m[14] !== w || m[15] !== y || m[16] !== c || m[17] !== _ ? (f = (0, t.jsx)(i.default, {
            nowrap: !1,
            size: y,
            variant: "primary-orange",
            label: c,
            onClick: j,
            isDisabled: w,
            dataCsOverrideId: _
        }), m[13] = j, m[14] = w, m[15] = y, m[16] = c, m[17] = _, m[18] = f) : f = m[18], f
    }], 547627)
}]);

//# sourceMappingURL=0mqti9kk1-~-f.js.map