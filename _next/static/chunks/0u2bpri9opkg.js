(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 393783, 748016, 883820, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576);
    e.i(664157);
    var i = e.i(271179),
        l = e.i(191788);
    let r = e => {
        let i, l, r, s, n = (0, a.c)(10),
            {
                number: d,
                label: o
            } = e;
        n[0] !== o || n[1] !== d ? (i = "days" === o ? d.toString() : d.toString().padStart(2, "0"), n[0] = o, n[1] = d, n[2] = i) : i = n[2];
        let c = i;
        return n[3] !== c ? (l = (0, t.jsx)("span", {
            className: "responsive-display-4",
            children: c
        }), n[3] = c, n[4] = l) : l = n[4], n[5] !== o ? (r = (0, t.jsx)("span", {
            className: "heading-4-semi-bold",
            children: o
        }), n[5] = o, n[6] = r) : r = n[6], n[7] !== l || n[8] !== r ? (s = (0, t.jsxs)("div", {
            className: "flex items-center gap-8 text-white",
            children: [l, r]
        }), n[7] = l, n[8] = r, n[9] = s) : s = n[9], s
    };
    e.s(["default", 0, e => {
        let s, n, d, o, c, u, m, h, f, x, v, p, j, g, y, b = (0, a.c)(35),
            {
                countdownEndDate: w
            } = e,
            {
                t: N
            } = (0, i.useTranslation)("common");
        b[0] !== w ? (s = () => {
            let e = new Date,
                t = new Date(w).getTime() - e.getTime(),
                a = {
                    days: 0,
                    hours: 0,
                    minutes: 0
                };
            return t > 0 && (a = {
                days: Math.floor(t / 864e5),
                hours: Math.floor(t / 36e5 % 24),
                minutes: Math.ceil(t / 1e3 / 60 % 60)
            }), a
        }, b[0] = w, b[1] = s) : s = b[1];
        let k = s;
        b[2] !== k ? (n = k(), b[2] = k, b[3] = n) : n = b[3];
        let [C, S] = (0, l.useState)(n);
        b[4] !== k ? (d = () => {
            let e = setInterval(() => {
                S(k())
            }, 1e3);
            return () => clearInterval(e)
        }, b[4] = k, b[5] = d) : d = b[5], b[6] !== w ? (o = [w], b[6] = w, b[7] = o) : o = b[7], (0, l.useEffect)(d, o), b[8] !== N ? (c = (e, t) => N(`countdown.${e}`, {
            count: t
        }), b[8] = N, b[9] = c) : c = b[9];
        let I = c;
        b[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("div", {
            className: "bg-grey-divider h-px w-full"
        }), b[10] = u) : u = b[10];
        let z = C.days;
        b[11] !== I || b[12] !== C.days ? (m = I("days", C.days), b[11] = I, b[12] = C.days, b[13] = m) : m = b[13], b[14] !== m || b[15] !== C.days ? (h = (0, t.jsx)(r, {
            number: z,
            label: m
        }), b[14] = m, b[15] = C.days, b[16] = h) : h = b[16], b[17] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, t.jsx)("span", {
            className: "animate-countdownBlink text-neutral-700 responsive-display-4",
            children: ":"
        }), b[17] = f) : f = b[17];
        let T = C.hours;
        b[18] !== I || b[19] !== C.hours ? (x = I("hours", C.hours), b[18] = I, b[19] = C.hours, b[20] = x) : x = b[20], b[21] !== x || b[22] !== C.hours ? (v = (0, t.jsx)(r, {
            number: T,
            label: x
        }), b[21] = x, b[22] = C.hours, b[23] = v) : v = b[23], b[24] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsx)("span", {
            className: "animate-countdownBlink text-neutral-700 responsive-display-4",
            children: ":"
        }), b[24] = p) : p = b[24];
        let R = C.minutes;
        return b[25] !== I || b[26] !== C.minutes ? (j = I("minutes", C.minutes), b[25] = I, b[26] = C.minutes, b[27] = j) : j = b[27], b[28] !== j || b[29] !== C.minutes ? (g = (0, t.jsx)(r, {
            number: R,
            label: j
        }), b[28] = j, b[29] = C.minutes, b[30] = g) : g = b[30], b[31] !== v || b[32] !== g || b[33] !== h ? (y = (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
                children: [u, (0, t.jsx)("div", {
                    className: "pb-32 pt-32",
                    children: (0, t.jsxs)("div", {
                        className: "flex justify-center gap-8 sm:gap-40 md:gap-80",
                        children: [h, f, v, p, g]
                    })
                })]
            })
        }), b[31] = v, b[32] = g, b[33] = h, b[34] = y) : y = b[34], y
    }], 393783);
    var s = e.i(126019),
        n = e.i(455108);
    e.i(286941);
    var d = e.i(126762),
        o = e.i(495854),
        c = e.i(41158);
    e.i(108399);
    var u = e.i(860231),
        m = e.i(198311);
    e.i(828684);
    var h = e.i(454720);
    let f = e => ({
        initial: {
            opacity: 0,
            translateY: 32
        },
        transition: {
            duration: .3,
            ease: "easeOut",
            delay: e
        },
        whileInView: {
            opacity: 1,
            translateY: 0
        },
        viewport: {
            once: !0
        }
    });

    function x(e) {
        return !!(e.subtitle ? .trim() || e.description ? .json)
    }
    e.s(["default", 0, e => {
        let i, l, r, v, p, j, g, y = (0, a.c)(26),
            {
                title: b,
                contentBlocks: w,
                theme: N,
                dataCsOverrideId: k,
                sizeVariant: C
            } = e,
            S = "compact" === C ? 24 : 48,
            I = "dark" === N ? "bg-black text-white" : "bg-neutral-50 text-black";
        y[0] !== I ? (i = (0, o.default)(I), y[0] = I, y[1] = i) : i = y[1], y[2] !== b ? (l = b && (0, t.jsx)("h3", {
            className: "responsive-display-4 mb-16 text-center",
            "data-testid": "icon-cards-title",
            children: b
        }), y[2] = b, y[3] = l) : l = y[3];
        let z = "dark" === N ? "divide-neutral-600" : "divide-neutral-200";
        if (y[4] !== z ? (r = (0, o.default)("flex flex-col max-md:divide-y md:flex-row md:divide-x md:py-32 rtl:md:divide-x-reverse", z), y[4] = z, y[5] = r) : r = y[5], y[6] !== w || y[7] !== k || y[8] !== S || y[9] !== C || y[10] !== N) {
            let e;
            y[12] !== k || y[13] !== S || y[14] !== C || y[15] !== N ? (e = (e, a) => (0, t.jsxs)("div", {
                className: (0, o.default)("flex w-full flex-col gap-16 px-40 py-32 first:ps-0 last:pe-0 max-md:px-0", !x(e) && "max-md:items-center"),
                "data-cs-override-id": k && `${k}-${a+1}`,
                children: [(0, t.jsxs)("div", {
                    className: (0, o.default)("flex", "compact" === C ? (0, o.default)("flex-row items-center gap-8", !x(e) && "justify-center") : "flex-col gap-16"),
                    children: [e.image && (0, t.jsx)(m.motion.div, { ...f(0),
                        children: (0, t.jsx)(s.default, {
                            src: e.image.url,
                            alt: e.image.title ? ? "",
                            width: S,
                            height: S,
                            "data-testid": "icon-cards-image"
                        })
                    }), (0, t.jsx)(m.motion.h4, { ...f(.15),
                        className: "heading-4-semi-bold",
                        children: e.title
                    })]
                }), e.subtitle && (0, t.jsx)(m.motion.span, { ...f(.3),
                    children: (0, t.jsx)("p", {
                        className: (0, o.default)("body-1 m-0 font-normal", "dark" === N ? "text-neutral-200" : "text-neutral-800"),
                        children: e.subtitle
                    })
                }), e.description && (0, t.jsx)(m.motion.span, { ...f(.3),
                    children: (0, t.jsx)(d.default, {
                        content: e.description,
                        className: (0, o.default)("rich-text-p:m-0 rich-text-p:heading-4", "dark" === N ? "text-neutral-200" : "text-neutral-800")
                    })
                }), e.link ? .dynamicDrawerContent && (0, t.jsx)(m.motion.span, { ...f(.3),
                    "data-testid": "icon-cards-link-to-drawer",
                    children: (0, t.jsx)(h.default, {
                        label: e.link.label,
                        dynamicDrawerContent: e.link.dynamicDrawerContent,
                        drawerTheme: N,
                        variant: "underline-body-highlight",
                        variantIcon: "arrowRight"
                    })
                }), e.link ? .url && (0, t.jsx)(m.motion.span, { ...f(.3),
                    "data-testid": "icon-cards-link",
                    children: (0, t.jsxs)(c.default, {
                        href: e.link.url,
                        className: (0, o.default)("group flex items-center gap-4", !x(e) && "max-md:justify-center"),
                        children: [(0, t.jsx)("span", {
                            className: "body-1-semi-bold",
                            children: e.link.label
                        }), (0, t.jsx)("span", {
                            className: "transition-all group-hover:translate-x-8 group-hover:transform rtl:-scale-x-100 rtl:group-hover:-translate-x-8",
                            children: (0, t.jsx)(u.default, {
                                name: "arrowRight",
                                size: 18,
                                strokeWidth: 4.5,
                                color: "dark" === N ? "white" : "black"
                            })
                        })]
                    })
                })]
            }, e.title), y[12] = k, y[13] = S, y[14] = C, y[15] = N, y[16] = e) : e = y[16], v = w.map(e), y[6] = w, y[7] = k, y[8] = S, y[9] = C, y[10] = N, y[11] = v
        } else v = y[11];
        return y[17] !== r || y[18] !== v ? (p = (0, t.jsx)("div", {
            className: r,
            children: v
        }), y[17] = r, y[18] = v, y[19] = p) : p = y[19], y[20] !== l || y[21] !== p ? (j = (0, t.jsxs)(n.default.Section, {
            verticalSpacing: "none",
            children: [l, p]
        }), y[20] = l, y[21] = p, y[22] = j) : j = y[22], y[23] !== i || y[24] !== j ? (g = (0, t.jsx)("div", {
            className: i,
            "data-testid": "icon-cards",
            children: j
        }), y[23] = i, y[24] = j, y[25] = g) : g = y[25], g
    }], 748016), e.s([], 883820)
}, 151153, 46050, 621351, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576);
    e.i(664157);
    var i = e.i(271179),
        l = e.i(495854);
    e.i(923160);
    var r = e.i(217863);
    e.i(831184);
    var s = e.i(229620);
    e.s(["default", 0, e => {
        let n, d, o, c, u, m, h = (0, a.c)(19),
            {
                rating: f,
                totalReviews: x,
                direction: v,
                color: p,
                size: j
            } = e,
            g = void 0 === v ? "horizontal" : v,
            y = void 0 === p ? "black" : p,
            b = void 0 === j ? "medium" : j,
            {
                t: w
            } = (0, i.useTranslation)("common");
        if (h[0] !== g || h[1] !== x) {
            let e = 0 === x && (0, s.isProduction)();
            n = (0, l.default)("flex gap-[2px]", "horizontal" === g ? "flex-row" : "flex-col", e && "invisible"), h[0] = g, h[1] = x, h[2] = n
        } else n = h[2];
        h[3] !== y || h[4] !== f || h[5] !== b ? (d = (0, t.jsx)(r.default, {
            rating: f,
            size: b,
            color: y
        }), h[3] = y, h[4] = f, h[5] = b, h[6] = d) : d = h[6];
        let N = "horizontal" === g;
        return h[7] !== N ? (o = (0, l.default)("pl-8 text-neutral-500 body-3", {
            "mt-2": N
        }), h[7] = N, h[8] = o) : o = h[8], h[9] !== w || h[10] !== x ? (c = w("productCards.reviewsWithCount", {
            count: x
        }), h[9] = w, h[10] = x, h[11] = c) : c = h[11], h[12] !== o || h[13] !== c ? (u = (0, t.jsx)("p", {
            className: o,
            children: c
        }), h[12] = o, h[13] = c, h[14] = u) : u = h[14], h[15] !== n || h[16] !== d || h[17] !== u ? (m = (0, t.jsxs)("div", {
            className: n,
            children: [d, u]
        }), h[15] = n, h[16] = d, h[17] = u, h[18] = m) : m = h[18], m
    }], 46050), e.s([], 151153);
    var n = e.i(44073);
    e.s(["default", 0, e => {
        let i, r, s, d, o = (0, a.c)(10),
            {
                label: c,
                variant: u,
                theme: m,
                size: h
            } = e,
            f = void 0 === h ? "medium" : h;
        switch (u) {
            case "primary":
            case "highlight":
            case "purple":
                i = "purple";
                break;
            default:
                i = "grey"
        }
        let x = "small" === f && "start-8 top-8",
            v = "medium" === f && "start-12 top-12";
        return o[0] !== x || o[1] !== v ? (r = (0, l.default)("absolute z-10", x, v), o[0] = x, o[1] = v, o[2] = r) : r = o[2], o[3] !== i || o[4] !== c || o[5] !== m ? (s = (0, t.jsx)(n.default, {
            label: c,
            variant: i,
            theme: m
        }), o[3] = i, o[4] = c, o[5] = m, o[6] = s) : s = o[6], o[7] !== r || o[8] !== s ? (d = (0, t.jsx)("div", {
            className: r,
            children: s
        }), o[7] = r, o[8] = s, o[9] = d) : d = o[9], d
    }], 621351)
}, 277551, e => {
    "use strict";
    e.i(544808), e.s([])
}, 917350, e => {
    "use strict";
    e.i(753221), e.s([])
}, 657510, e => {
    "use strict";
    var t = e.i(261576),
        a = e.i(219501);
    e.s(["default", 0, e => {
        let i, l = (0, t.c)(3),
            {
                countryCode: r
            } = (0, a.default)(),
            s = "ledger-nano-x" === e;
        return l[0] !== r || l[1] !== s ? (i = !!r && s && ["GB", "AU", "ES", "US"].includes(r), l[0] = r, l[1] = s, l[2] = i) : i = l[2], i
    }])
}, 114168, e => {
    "use strict";
    var t = e.i(191788),
        a = Object.defineProperty,
        i = new Map,
        l = new WeakMap,
        r = 0,
        s = void 0;
    t.Component, e.s(["useInView", 0, function({
        threshold: e,
        delay: a,
        trackVisibility: n,
        rootMargin: d,
        root: o,
        triggerOnce: c,
        skip: u,
        initialInView: m,
        fallbackInView: h,
        onChange: f
    } = {}) {
        var x;
        let [v, p] = t.useState(null), j = t.useRef(f), [g, y] = t.useState({
            inView: !!m,
            entry: void 0
        });
        j.current = f, t.useEffect(() => {
            let t;
            if (!u && v) return t = function(e, t, a = {}, n = s) {
                if (void 0 === window.IntersectionObserver && void 0 !== n) {
                    let i = e.getBoundingClientRect();
                    return t(n, {
                        isIntersecting: n,
                        target: e,
                        intersectionRatio: "number" == typeof a.threshold ? a.threshold : 0,
                        time: 0,
                        boundingClientRect: i,
                        intersectionRect: i,
                        rootBounds: i
                    }), () => {}
                }
                let {
                    id: d,
                    observer: o,
                    elements: c
                } = function(e) {
                    let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                            var a;
                            return `${t}_${"root"===t?!(a=e.root)?"0":(l.has(a)||(r+=1,l.set(a,r.toString())),l.get(a)):e[t]}`
                        }).toString(),
                        a = i.get(t);
                    if (!a) {
                        let l, r = new Map,
                            s = new IntersectionObserver(t => {
                                t.forEach(t => {
                                    var a;
                                    let i = t.isIntersecting && l.some(e => t.intersectionRatio >= e);
                                    e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i), null == (a = r.get(t.target)) || a.forEach(e => {
                                        e(i, t)
                                    })
                                })
                            }, e);
                        l = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), a = {
                            id: t,
                            observer: s,
                            elements: r
                        }, i.set(t, a)
                    }
                    return a
                }(a), u = c.get(e) || [];
                return c.has(e) || c.set(e, u), u.push(t), o.observe(e),
                    function() {
                        u.splice(u.indexOf(t), 1), 0 === u.length && (c.delete(e), o.unobserve(e)), 0 === c.size && (o.disconnect(), i.delete(d))
                    }
            }(v, (e, a) => {
                y({
                    inView: e,
                    entry: a
                }), j.current && j.current(e, a), a.isIntersecting && c && t && (t(), t = void 0)
            }, {
                root: o,
                rootMargin: d,
                threshold: e,
                trackVisibility: n,
                delay: a
            }, h), () => {
                t && t()
            }
        }, [Array.isArray(e) ? e.toString() : e, v, o, d, c, u, n, h, a]);
        let b = null == (x = g.entry) ? void 0 : x.target,
            w = t.useRef(void 0);
        v || !b || c || u || w.current === b || (w.current = b, y({
            inView: !!m,
            entry: void 0
        }));
        let N = [p, g.inView, g.entry];
        return N.ref = N[0], N.inView = N[1], N.entry = N[2], N
    }])
}, 431877, 119978, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        i = e.i(126019),
        l = e.i(41158),
        r = e.i(870155);
    e.i(643781);
    var s = e.i(989606),
        n = e.i(495854),
        d = e.i(217837),
        o = e.i(455108);
    let c = e => {
        let l, r, s, n = (0, a.c)(7),
            {
                showLedgerLogo: d,
                brandLogo: o
            } = e;
        return d || o ? (n[0] !== d ? (l = d && (0, t.jsx)("div", {
            className: "max-w-xs",
            children: (0, t.jsx)(i.default, {
                src: "/ledger-logo-long-white.svg",
                alt: "Ledger Logo",
                height: 32,
                width: 95
            })
        }), n[0] = d, n[1] = l) : l = n[1], n[2] !== o ? (r = o && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                className: "text-white body-1 font-normal",
                children: "x"
            }), (0, t.jsx)("div", {
                className: "relative h-40 w-128 max-w-128",
                children: (0, t.jsx)(i.default, {
                    src: o.url,
                    alt: o.title ? ? "",
                    fill: !0,
                    style: {
                        objectFit: "contain"
                    }
                })
            })]
        }), n[2] = o, n[3] = r) : r = n[3], n[4] !== l || n[5] !== r ? (s = (0, t.jsxs)("div", {
            className: "mb-16 flex flex-row items-center justify-center gap-16 md:justify-start",
            children: [l, r]
        }), n[4] = l, n[5] = r, n[6] = s) : s = n[6], s) : null
    };
    var u = e.i(270314),
        m = e.i(393783),
        h = e.i(44073),
        f = e.i(349057);
    e.i(108399);
    var x = e.i(860231);
    e.i(664157);
    var v = e.i(271179);
    let p = e => {
        let i, l, r = (0, a.c)(4),
            {
                bulletPointsWithIcon: s
            } = e;
        return r[0] !== s ? (i = s.map(j), r[0] = s, r[1] = i) : i = r[1], r[2] !== i ? (l = (0, t.jsx)("ul", {
            className: "flex flex-col gap-0 divide-y divide-solid divide-neutral-200 md:gap-8 md:divide-none md:py-16",
            children: i
        }), r[2] = i, r[3] = l) : l = r[3], l
    };

    function j(e, a) {
        return (0, t.jsxs)("li", {
            className: "heading-4 lg:heading-4 flex items-center justify-center gap-8 py-8 font-normal text-neutral-800 md:justify-normal md:py-0 md:text-left lg:font-normal",
            children: [e.icon && (0, t.jsx)("span", {
                className: "hidden h-24 w-24 items-center justify-center md:flex",
                children: (0, t.jsx)(x.default, {
                    name: e.icon,
                    size: 24
                })
            }), e.title]
        }, a)
    }
    e.s(["default", 0, e => {
        let x, j, g, y, b, w, N, k, C, S, I, z, T, R, _, F, L, O, V, $, M = (0, a.c)(71),
            {
                title: P,
                description: B,
                image: A,
                brandLogo: D,
                showLedgerLogo: E,
                miniTitle: U,
                emphasisStyle: W,
                queryParam: H,
                subDescriptionLink: K,
                cta: Y,
                scrollToButton: G,
                theme: q,
                loopVideo: J,
                videoUrl: Q,
                countdownEndDate: X,
                bulletPointsWithIcon: Z,
                buyMode: ee
            } = e,
            et = void 0 === W ? "primary" : W,
            ea = void 0 === q ? "dark" : q;
        M[0] !== B || M[1] !== et ? (x = (0, r.default)(B, {
            style: et
        }), M[0] = B, M[1] = et, M[2] = x) : x = M[2];
        let ei = x;
        M[3] !== et || M[4] !== P ? (j = (0, r.default)(P, {
            style: et
        }), M[3] = et, M[4] = P, M[5] = j) : j = M[5];
        let el = j,
            {
                enteredViaLedgerLive: er
            } = (0, f.default)(),
            {
                t: es
            } = (0, v.useTranslation)("productUpgrade"),
            en = (0, d.useSearchParams)(),
            ed = en ? .get("utm_id");
        if (!ed && H || ed && H !== ed) return null;
        let eo = "dark" === ea ? "bg-black" : "bg-neutral-50",
            ec = !er && "navigation-safe-space";
        M[6] !== eo || M[7] !== ec ? (g = (0, n.default)(eo, ec), M[6] = eo, M[7] = ec, M[8] = g) : g = M[8];
        let eu = Y ? "flex-col-reverse" : "flex-col",
            em = Y && U ? "justify-between" : "justify-center";
        M[9] !== eu || M[10] !== em ? (y = (0, n.default)("relative flex items-center overflow-hidden pb-48 md:h-full md:flex-row md:pb-0 rtl:md:flex-row-reverse", eu, em), M[9] = eu, M[10] = em, M[11] = y) : y = M[11];
        let eh = "dark" === ea ? "text-white" : "text-black",
            ef = Y && U ? "max-w-xl" : "",
            ex = Q && "w-full md:w-16/2";
        return M[12] !== eh || M[13] !== ef || M[14] !== ex ? (b = (0, n.default)("flex flex-col gap-8 text-center md:pt-64 md:pb-80 md:text-start", eh, ef, ex), M[12] = eh, M[13] = ef, M[14] = ex, M[15] = b) : b = M[15], M[16] !== D || M[17] !== E ? (w = (0, t.jsx)(c, {
            brandLogo: D,
            showLedgerLogo: E
        }), M[16] = D, M[17] = E, M[18] = w) : w = M[18], M[19] !== D || M[20] !== U || M[21] !== E || M[22] !== ea ? (N = (!D || !E) && U && (0, t.jsx)("h2", {
            className: "flex justify-center pt-16 uppercase md:justify-start",
            children: (0, t.jsx)(h.default, {
                label: U,
                variant: "grey",
                theme: ea
            })
        }), M[19] = D, M[20] = U, M[21] = E, M[22] = ea, M[23] = N) : N = M[23], M[24] !== el ? (k = (0, t.jsx)("h1", {
            className: "responsive-display-4",
            children: el
        }), M[24] = el, M[25] = k) : k = M[25], M[26] !== Z ? (C = Z ? .length ? (0, t.jsx)(p, {
            bulletPointsWithIcon: Z
        }) : null, M[26] = Z, M[27] = C) : C = M[27], M[28] !== ei || M[29] !== ea ? (S = ei && (0, t.jsx)("p", {
            className: (0, n.default)("heading-4 pt-16", "dark" === ea ? "text-neutral-200" : "text-neutral-700"),
            children: ei
        }), M[28] = ei, M[29] = ea, M[30] = S) : S = M[30], M[31] !== K || M[32] !== ea ? (I = K ? .url && (0, t.jsx)(l.default, {
            className: (0, n.default)("body-3 underline", "dark" === ea ? "text-neutral-200" : "text-neutral-700"),
            href: K.url,
            "data-cs-override-id": "sub-description-link",
            children: K.label
        }), M[31] = K, M[32] = ea, M[33] = I) : I = M[33], M[34] !== ee || M[35] !== es ? (z = "device-unlock-lns" === ee && (0, t.jsx)("div", {
            className: "body-1 mt-16 block rounded-md border border-neutral-200 p-8 font-normal lg:hidden",
            children: (0, t.jsx)("p", {
                children: es("disclaimerOnMobile")
            })
        }), M[34] = ee, M[35] = es, M[36] = z) : z = M[36], M[37] !== Y || M[38] !== G ? (T = Y && (0, t.jsx)("div", {
            className: "flex justify-center pt-24 md:justify-start",
            children: (0, t.jsx)(s.default, {
                icon: Y.displayAnchorArrow ? "arrowDown" : void 0,
                label: Y.label,
                href: Y.url,
                size: "medium",
                dataCsOverrideId: "hero-cta",
                ...G && {
                    onClick: e => G(e)
                }
            })
        }), M[37] = Y, M[38] = G, M[39] = T) : T = M[39], M[40] !== b || M[41] !== w || M[42] !== N || M[43] !== k || M[44] !== C || M[45] !== S || M[46] !== I || M[47] !== z || M[48] !== T ? (R = (0, t.jsxs)("div", {
            className: b,
            children: [w, N, k, C, S, I, z, T]
        }), M[40] = b, M[41] = w, M[42] = N, M[43] = k, M[44] = C, M[45] = S, M[46] = I, M[47] = z, M[48] = T, M[49] = R) : R = M[49], M[50] !== A || M[51] !== P || M[52] !== Q ? (_ = A && !Q && (0, t.jsx)(i.default, {
            src: A.url,
            alt: P,
            priority: !0,
            height: 480,
            width: 650,
            className: "h-full object-contain md:max-w-xs lg:max-w-full"
        }), M[50] = A, M[51] = P, M[52] = Q, M[53] = _) : _ = M[53], M[54] !== J || M[55] !== P || M[56] !== Q ? (F = Q && (0, t.jsx)("div", {
            className: "w-full p-16 md:w-16/2",
            children: (0, t.jsx)(u.default, {
                autoPlay: !0,
                playsInline: !0,
                className: "z-1 w-full",
                loop: J,
                muted: !0,
                source: Q,
                title: P
            })
        }), M[54] = J, M[55] = P, M[56] = Q, M[57] = F) : F = M[57], M[58] !== y || M[59] !== R || M[60] !== _ || M[61] !== F ? (L = (0, t.jsxs)("div", {
            className: y,
            children: [R, _, F]
        }), M[58] = y, M[59] = R, M[60] = _, M[61] = F, M[62] = L) : L = M[62], M[63] !== X ? (O = X && (0, t.jsx)(m.default, {
            countdownEndDate: X
        }), M[63] = X, M[64] = O) : O = M[64], M[65] !== L || M[66] !== O ? (V = (0, t.jsxs)(o.default.Section, {
            verticalSpacing: "none",
            as: "div",
            children: [L, O]
        }), M[65] = L, M[66] = O, M[67] = V) : V = M[67], M[68] !== V || M[69] !== g ? ($ = (0, t.jsx)("header", {
            className: g,
            children: V
        }), M[68] = V, M[69] = g, M[70] = $) : $ = M[70], $
    }], 119978), e.s([], 431877)
}, 828278, 739504, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        i = e.i(295485),
        l = e.i(191788),
        r = e.i(126019),
        s = e.i(41158);
    e.i(664157);
    var n = e.i(271179),
        d = e.i(203828);
    e.i(259936);
    var o = e.i(838779);
    e.i(643781);
    var c = e.i(989606);
    e.i(366539);
    var u = e.i(150077);
    e.i(867094);
    var m = e.i(725524);
    e.i(151153);
    var h = e.i(46050),
        f = e.i(43039);
    e.i(544063);
    var x = e.i(525487),
        v = e.i(253770),
        p = e.i(345082);
    e.i(872044);
    var j = e.i(627528),
        g = e.i(495854);
    e.i(349837);
    var y = e.i(64498),
        b = e.i(621351),
        w = e.i(455108),
        N = e.i(83899),
        k = e.i(657510),
        C = e.i(79564),
        S = e.i(999750),
        I = e.i(620391),
        z = e.i(766442),
        T = e.i(212376),
        R = e.i(414448);
    let _ = e => {
        let i, _, V, $, M, P, B, A, D, E, U, W, H, K, Y, G, q, J, Q, X, Z, ee, et, ea, ei, el, er, es, en, ed, eo, ec, eu = (0, a.c)(124),
            {
                product: em,
                collectionFeatures: eh,
                isLayoutHorizontal: ef,
                showReviews: ex,
                theme: ev
            } = e,
            ep = void 0 !== ef && ef,
            ej = void 0 === ev ? "light" : ev,
            {
                features: eg,
                freeShipping: ey,
                rating: eb,
                statusLabel: ew,
                title: eN,
                totalReviews: ek,
                secondaryVariants: eC,
                primaryVariants: eS
            } = em,
            {
                query: eI
            } = (0, d.useRouter)(),
            {
                entryChannel: ez
            } = (0, l.useContext)(S.EntryChannelContext);
        if (eS ? .variants || eC ? .variants) {
            let e, t, a;
            eu[0] !== eS ? .variants ? (e = eS ? .variants || [], eu[0] = eS ? .variants, eu[1] = e) : e = eu[1], eu[2] !== eC ? .variants ? (t = eC ? .variants || [], eu[2] = eC ? .variants, eu[3] = t) : t = eu[3], eu[4] !== e || eu[5] !== t ? (a = [...e, ...t], eu[4] = e, eu[5] = t, eu[6] = a) : a = eu[6], i = a
        } else i = em.variants;
        let eT = i[0],
            [eR, e_] = (0, l.useState)(eT),
            eF = eg.map(F);
        eu[7] !== eR || eu[8] !== em.handle ? (_ = (0, f.default)(em.handle, eR), eu[7] = eR, eu[8] = em.handle, eu[9] = _) : _ = eu[9];
        let eL = _,
            {
                id: eO,
                discountLabel: eV,
                shippingTag: e$
            } = eR;
        eu[10] === Symbol.for("react.memo_cache_sentinel") ? (V = {
            placement: "hardwareWalletCard"
        }, eu[10] = V) : V = eu[10];
        let {
            add: eM
        } = (0, C.default)(V), {
            t: eP
        } = (0, n.useTranslation)("common"), {
            isUSAvailable: eB
        } = (0, z.default)(), {
            isDeviceAvailable: eA
        } = (0, T.default)();
        eu[11] !== em.handle || eu[12] !== em.variants || eu[13] !== eI ? ($ = () => {
            let e = em.variants.find(e => eI[em.handle] === e.handle);
            e && e_(e)
        }, M = [em.handle, em.variants, eI], eu[11] = em.handle, eu[12] = em.variants, eu[13] = eI, eu[14] = $, eu[15] = M) : ($ = eu[14], M = eu[15]), (0, l.useEffect)($, M), eu[16] !== i ? (P = i.map(L), eu[16] = i, eu[17] = P) : P = eu[17];
        let eD = P;
        (0, I.usePrefetchLocalisedPrices)(eD);
        let {
            cryptoVouchers: eE
        } = (0, l.useContext)(v.cryptoVouchersContext), eU = eE ? .activeCryptoVouchers;
        eu[18] !== eR.id || eu[19] !== ez || eu[20] !== eU ? (B = (0, p.default)(ez, eU, eR.id), eu[18] = eR.id, eu[19] = ez, eu[20] = eU, eu[21] = B) : B = eu[21];
        let eW = B,
            eH = i.length > 1,
            eK = (0, N.default)(eR),
            eY = O,
            eG = (0, k.default)(em.handle),
            eq = e$ ? .title;
        eu[22] !== eR.availableForSale || eu[23] !== eR.id || eu[24] !== eR.sku || eu[25] !== eA || eu[26] !== eB ? (A = eR.availableForSale && eB(eR.id) && eA(eR.sku), eu[22] = eR.availableForSale, eu[23] = eR.id, eu[24] = eR.sku, eu[25] = eA, eu[26] = eB, eu[27] = A) : A = eu[27];
        let eJ = A,
            eQ = w.default,
            eX = !!ew,
            eZ = `hardware-card-${em.handle}`;
        eu[28] !== ep ? (D = (0, g.default)({
            "grid grow lg:flex": ep
        }, {
            "flex grow flex-col": !ep
        }), eu[28] = ep, eu[29] = D) : D = eu[29], eu[30] === Symbol.for("react.memo_cache_sentinel") ? (E = (0, g.default)("lg:basis-8/5"), eu[30] = E) : E = eu[30];
        let e0 = ep && "mr-0";
        eu[31] !== e0 ? (U = (0, g.default)("-mx-16 block", e0), eu[31] = e0, eu[32] = U) : U = eu[32], eu[33] !== ew || eu[34] !== ej ? (W = ew && (0, t.jsx)(b.default, {
            label: ew.title,
            variant: ew.variant,
            theme: ej
        }), eu[33] = ew, eu[34] = ej, eu[35] = W) : W = eu[35], eu[36] !== eR || eu[37] !== em.handle ? (H = eR && (0, t.jsx)(r.default, {
            src: eR.image.url,
            alt: eR.title,
            fill: !0,
            priority: !0,
            sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
            className: "object-contain",
            "data-cs-override-id": `${em.handle}-picture`
        }), eu[36] = eR, eu[37] = em.handle, eu[38] = H) : H = eu[38], eu[39] !== eL || eu[40] !== U || eu[41] !== W || eu[42] !== H ? (K = (0, t.jsx)("div", {
            className: E,
            children: (0, t.jsxs)(w.default.CardHeader, {
                href: eL,
                className: U,
                children: [W, H]
            })
        }), eu[39] = eL, eu[40] = U, eu[41] = W, eu[42] = H, eu[43] = K) : K = eu[43], eu[44] !== ep ? (Y = (0, g.default)("flex grow flex-col lg:basis-12/5", {
            "pt-12": ep
        }), eu[44] = ep, eu[45] = Y) : Y = eu[45], eu[46] !== eL || eu[47] !== eN ? (G = (0, t.jsx)(w.default.CardTitle, {
            className: "my-12",
            href: eL,
            title: eN
        }), eu[46] = eL, eu[47] = eN, eu[48] = G) : G = eu[48];
        let e1 = !!eV;
        eu[49] !== eR || eu[50] !== e1 || eu[51] !== eV ? (q = (0, t.jsx)("div", {
            className: "flex",
            children: (0, t.jsx)(u.default, {
                variant: eR,
                size: "large",
                showDiscount: e1,
                discountLabel: eV
            })
        }), eu[49] = eR, eu[50] = e1, eu[51] = eV, eu[52] = q) : q = eu[52], eu[53] !== eW || eu[54] !== ej ? (J = eW && (0, t.jsx)("div", {
            className: "my-32 w-fit",
            children: (0, t.jsx)(j.default, {
                label: eW.cardLabel,
                cryptoCurrency: eW.cryptoCurrency,
                theme: ej,
                ...eW.link && {
                    drawer: eW.link
                }
            })
        }), eu[53] = eW, eu[54] = ej, eu[55] = J) : J = eu[55], eu[56] !== eR.promoInfoLink || eu[57] !== eR.promoInfoText || eu[58] !== ej ? (Q = eR ? .promoInfoText && (0, t.jsx)("div", {
            className: "my-32 w-fit",
            children: (0, t.jsx)(y.default, {
                promoInfoText: eR.promoInfoText,
                promoInfoLink: eR.promoInfoLink,
                theme: ej
            })
        }), eu[56] = eR.promoInfoLink, eu[57] = eR.promoInfoText, eu[58] = ej, eu[59] = Q) : Q = eu[59];
        let e2 = (void 0 === ex || ex) && "md:h-32";
        eu[60] !== e2 ? (X = (0, g.default)("mb-12 flex items-center gap-12", e2), eu[60] = e2, eu[61] = X) : X = eu[61], eu[62] !== eL || eu[63] !== eb || eu[64] !== ej || eu[65] !== ek ? (Z = ek > 0 && (0, t.jsx)(s.default, {
            href: `${eL}#reviews`,
            children: (0, t.jsx)(h.default, {
                rating: eb,
                totalReviews: ek,
                color: "dark" === ej ? "white" : "black"
            })
        }), eu[62] = eL, eu[63] = eb, eu[64] = ej, eu[65] = ek, eu[66] = Z) : Z = eu[66], eu[67] !== X || eu[68] !== Z ? (ee = (0, t.jsx)("div", {
            className: X,
            children: Z
        }), eu[67] = X, eu[68] = Z, eu[69] = ee) : ee = eu[69];
        let e3 = eh && (0, t.jsxs)("div", {
            "data-testid": "hardware-wallet-card__features",
            className: "flex flex-wrap gap-8",
            children: [eh.length > 0 && eh.filter(e => eF.includes(e.title)).map(e => {
                let a = eY(e.icon, ej);
                return (0, t.jsx)(o.default, {
                    variant: a,
                    theme: ej,
                    size: "small",
                    label: e.title,
                    icon: e.icon
                }, e.title)
            }), 0 === eh.length && eg.map(e => {
                let a = eY(e.icon, ej);
                return (0, t.jsx)(o.default, {
                    variant: a,
                    theme: ej,
                    size: "small",
                    label: e.title,
                    icon: e.icon
                }, e.title)
            })]
        });
        eu[70] !== eR || eu[71] !== eH || eu[72] !== eS || eu[73] !== em.handle || eu[74] !== eC || eu[75] !== i ? (et = eH && (0, t.jsx)("div", {
            className: "my-16",
            "data-cs-override": `${em.handle}-colors`,
            children: (0, t.jsx)(m.default, {
                className: "flex-col",
                currentVariant: eR,
                onChange: e_,
                variants: i,
                secondaryVariants: eC,
                primaryVariants: eS
            })
        }), eu[70] = eR, eu[71] = eH, eu[72] = eS, eu[73] = em.handle, eu[74] = eC, eu[75] = i, eu[76] = et) : et = eu[76];
        let e4 = eH ? "" : "pt-16";
        return eu[77] !== e4 ? (ea = (0, g.default)(e4, "mt-auto mb-12 flex flex-wrap justify-between gap-16 md:mb-24"), eu[77] = e4, eu[78] = ea) : ea = eu[78], eu[79] !== eM || eu[80] !== eR || eu[81] !== eJ || eu[82] !== em || eu[83] !== eP || eu[84] !== ej || eu[85] !== eN || eu[86] !== eO ? (ei = (0, t.jsx)("div", {
            children: !eJ && em.notifyMeFormName ? (0, t.jsx)(x.default, {
                formName: em.notifyMeFormName,
                variant: eR,
                dataCsOverrideId: `notify-me-${em.handle}`,
                theme: ej,
                buttonSize: "medium"
            }) : eJ ? (0, t.jsx)(c.default, {
                label: eP("productCards.addToCard"),
                variant: "primary-orange",
                size: "medium",
                onClick: () => eM([{
                    product: em,
                    variantId: eO
                }]),
                dataCsOverrideId: `${em.handle}-atc`
            }) : (0, t.jsx)(R.default, {
                productName: eN,
                variantId: eR.id,
                variantName: eR.title,
                sku: eR.sku,
                label: eP("productCards.outOfStock"),
                variant: "primary-orange",
                size: "medium",
                onClick: () => eM([{
                    product: em,
                    variantId: eO
                }]),
                dataCsOverrideId: `${em.handle}-atc`
            })
        }), eu[79] = eM, eu[80] = eR, eu[81] = eJ, eu[82] = em, eu[83] = eP, eu[84] = ej, eu[85] = eN, eu[86] = eO, eu[87] = ei) : ei = eu[87], eu[88] !== ey || eu[89] !== eG || eu[90] !== ej ? (el = ey && !eG && (0, t.jsx)("div", {
            className: "flex justify-end",
            children: (0, t.jsx)(w.default.CardFreeShipping, {
                theme: ej
            })
        }), eu[88] = ey, eu[89] = eG, eu[90] = ej, eu[91] = el) : el = eu[91], eu[92] !== ea || eu[93] !== ei || eu[94] !== el ? (er = (0, t.jsxs)("div", {
            "data-testid": "hardware-wallet-card__buttons",
            className: ea,
            children: [ei, el]
        }), eu[92] = ea, eu[93] = ei, eu[94] = el, eu[95] = er) : er = eu[95], eu[96] !== eK || eu[97] !== e$ || eu[98] !== eq || eu[99] !== ej ? (es = eq ? (0, t.jsx)("div", {
            className: "mb-16 w-fit",
            children: (0, t.jsx)(o.default, {
                label: e$.title,
                variant: e$.variant ? ? "primary",
                theme: ej,
                icon: e$.icon ? ? "informationFillFlexMP"
            })
        }) : eK ? (0, t.jsx)(o.default, {
            label: eK.batchMessage,
            icon: "informationFillFlexMP",
            theme: ej
        }) : null, eu[96] = eK, eu[97] = e$, eu[98] = eq, eu[99] = ej, eu[100] = es) : es = eu[100], eu[101] !== ee || eu[102] !== e3 || eu[103] !== et || eu[104] !== er || eu[105] !== es ? (en = (0, t.jsxs)("div", {
            className: "my-8 flex grow flex-col",
            children: [ee, e3, et, er, es]
        }), eu[101] = ee, eu[102] = e3, eu[103] = et, eu[104] = er, eu[105] = es, eu[106] = en) : en = eu[106], eu[107] !== Y || eu[108] !== G || eu[109] !== q || eu[110] !== J || eu[111] !== Q || eu[112] !== en ? (ed = (0, t.jsxs)("div", {
            className: Y,
            children: [G, q, J, Q, en]
        }), eu[107] = Y, eu[108] = G, eu[109] = q, eu[110] = J, eu[111] = Q, eu[112] = en, eu[113] = ed) : ed = eu[113], eu[114] !== D || eu[115] !== K || eu[116] !== ed ? (eo = (0, t.jsxs)("div", {
            className: D,
            children: [K, ed]
        }), eu[114] = D, eu[115] = K, eu[116] = ed, eu[117] = eo) : eo = eu[117], eu[118] !== eQ.CardBorder || eu[119] !== eX || eu[120] !== eZ || eu[121] !== eo || eu[122] !== ej ? (ec = (0, t.jsx)(eQ.CardBorder, {
            className: "h-full px-16",
            highlighted: eX,
            theme: ej,
            "data-testid": "hardware-wallet-card",
            "data-cs-override-id": eZ,
            children: eo
        }), eu[118] = eQ.CardBorder, eu[119] = eX, eu[120] = eZ, eu[121] = eo, eu[122] = ej, eu[123] = ec) : ec = eu[123], ec
    };

    function F(e) {
        return e.title
    }

    function L(e) {
        return e.id
    }

    function O(e, t) {
        return "stax" === e ? "dark" === t ? "primary" : "secondary" : "dark" === t ? "secondary" : "primary"
    }
    let V = [1, 2, 4];

    function $(e, t) {
        return e + t.totalReviews
    }
    e.s(["default", 0, e => {
        let l, r, s, n, d, o, c, u, m, h = (0, a.c)(43),
            {
                title: f,
                subtitle: x,
                products: v,
                features: p,
                theme: j,
                animateCards: y
            } = e;
        h[0] !== p ? (l = void 0 === p ? [] : p, h[0] = p, h[1] = l) : l = h[1];
        let b = l,
            w = void 0 === j ? "light" : j,
            N = void 0 !== y && y;
        if (h[2] !== v || h[3] !== x || h[4] !== w || h[5] !== f) {
            let e, a, i, l;
            s = V.includes(v.length), h[11] !== v ? (e = v.reduce($, 0), h[11] = v, h[12] = e) : e = h[12], r = e, d = "hardware-wallet-collection";
            let c = "dark" === w;
            h[13] !== c ? (a = (0, g.default)("mb-56 flex flex-col items-center gap-16 text-center", {
                "text-white": c
            }), h[13] = c, h[14] = a) : a = h[14], h[15] !== f ? (i = f && (0, t.jsx)("h2", {
                className: "responsive-display-4",
                children: f
            }), h[15] = f, h[16] = i) : i = h[16], h[17] !== x ? (l = x && (0, t.jsx)("p", {
                className: "heading-3-semi-bold font-normal",
                children: x
            }), h[17] = x, h[18] = l) : l = h[18], h[19] !== a || h[20] !== i || h[21] !== l ? (o = (0, t.jsxs)("div", {
                className: a,
                children: [i, l]
            }), h[19] = a, h[20] = i, h[21] = l, h[22] = o) : o = h[22], n = (0, g.default)("mx-auto grid gap-32", {
                "md:grid-cols-2": s
            }, {
                "md:grid-cols-2 lg:grid-cols-3 lg:gap-32": !s
            }), h[2] = v, h[3] = x, h[4] = w, h[5] = f, h[6] = r, h[7] = s, h[8] = n, h[9] = d, h[10] = o
        } else r = h[6], s = h[7], n = h[8], d = h[9], o = h[10];
        if (h[23] !== r || h[24] !== N || h[25] !== b || h[26] !== s || h[27] !== v || h[28] !== w) {
            let e;
            h[30] !== r || h[31] !== N || h[32] !== b || h[33] !== s || h[34] !== w ? (e = (e, a) => {
                let l = `ease-linear transition-all duration-500 ${["","delay-200","delay-400"][a]}`;
                return (0, t.jsx)(i.Transition, {
                    as: "div",
                    appear: N,
                    show: !0,
                    enter: l,
                    enterFrom: "opacity-0 translate-y-10",
                    enterTo: "opacity-100 translate-y-0",
                    children: (0, t.jsx)(_, {
                        product: e,
                        collectionFeatures: b,
                        theme: w,
                        isLayoutHorizontal: s,
                        showReviews: !!r
                    })
                }, e.handle)
            }, h[30] = r, h[31] = N, h[32] = b, h[33] = s, h[34] = w, h[35] = e) : e = h[35], c = v.map(e), h[23] = r, h[24] = N, h[25] = b, h[26] = s, h[27] = v, h[28] = w, h[29] = c
        } else c = h[29];
        return h[36] !== n || h[37] !== c ? (u = (0, t.jsx)("div", {
            className: n,
            children: c
        }), h[36] = n, h[37] = c, h[38] = u) : u = h[38], h[39] !== d || h[40] !== o || h[41] !== u ? (m = (0, t.jsxs)("div", {
            "data-testid": d,
            children: [o, u]
        }), h[39] = d, h[40] = o, h[41] = u, h[42] = m) : m = h[42], m
    }], 739504), e.s([], 828278)
}]);

//# sourceMappingURL=04mxlnla67zda.js.map