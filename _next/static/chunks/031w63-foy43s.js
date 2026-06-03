(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 217920, e => {
    "use strict";
    var t = e.i(391398),
        i = e.i(261576),
        l = e.i(455108),
        a = e.i(495854);
    e.i(286941);
    var r = e.i(126762),
        n = e.i(698501);
    e.i(664157);
    var s = e.i(109007),
        o = e.i(203828);
    e.s(["default", 0, e => {
        let c, d, m, u, h = (0, i.c)(8),
            {
                content: f
            } = e,
            {
                asPath: x
            } = (0, o.useRouter)();
        return h[0] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.default)("ar:ps-4", "body-1 max-w-full overflow-scroll py-12 leading-24 font-normal", "rich-text-h1:heading-4 md:rich-text-h1:leading-[1.3]", "rich-text-thead:bg-slate-400 rich-text-td:border rich-text-td:px-20 rich-text-td:py-8"), h[0] = c) : c = h[0], h[1] !== f ? (d = (0, t.jsx)(r.default, {
            content: f,
            className: c
        }), h[1] = f, h[2] = d) : d = h[2], h[3] !== x ? (m = "/pages/cookie-policy" === x && (0, t.jsx)("p", {
            className: "body-1 -mt-12 pb-12 font-normal",
            children: (0, t.jsx)(s.Trans, {
                i18nKey: "common:cookiesSettings",
                components: {
                    button: (0, t.jsx)(n.default, {
                        name: "Cookies Settings"
                    })
                }
            })
        }), h[3] = x, h[4] = m) : m = h[4], h[5] !== d || h[6] !== m ? (u = (0, t.jsxs)(l.default.Section, {
            children: [d, m]
        }), h[5] = d, h[6] = m, h[7] = u) : u = h[7], u
    }])
}, 580665, e => {
    "use strict";
    var t = e.i(391398),
        i = e.i(261576),
        l = e.i(191788),
        a = e.i(637847);
    let r = (0, l.createContext)({
        variantLists: [],
        currentVariant: void 0,
        setCurrentVariant: () => {}
    });

    function n(e) {
        return e.variants
    }
    e.s(["PageBuilderVariantListsProvider", 0, e => {
        let l, s, o, c, d = (0, i.c)(10),
            {
                children: m,
                variantLists: u
            } = e;
        if (d[0] !== u) {
            let e = u ? .flatMap(n) || [];
            l = a.default, s = [e[0], ...e], d[0] = u, d[1] = l, d[2] = s
        } else l = d[1], s = d[2];
        let {
            currentVariant: h,
            setCurrentVariant: f
        } = l(s);
        return d[3] !== h || d[4] !== f || d[5] !== u ? (o = {
            variantLists: u,
            currentVariant: h,
            setCurrentVariant: f
        }, d[3] = h, d[4] = f, d[5] = u, d[6] = o) : o = d[6], d[7] !== m || d[8] !== o ? (c = (0, t.jsx)(r.Provider, {
            value: o,
            children: m
        }), d[7] = m, d[8] = o, d[9] = c) : c = d[9], c
    }, "usePageBuilderVariantLists", 0, () => (0, l.useContext)(r)])
}, 429228, 31904, 316176, 659786, 273635, 608367, 661031, 391127, 77545, 578594, 968461, 516257, e => {
    "use strict";
    var t = e.i(391398),
        i = e.i(261576),
        l = e.i(126019),
        a = e.i(191788),
        r = e.i(295485),
        n = e.i(495854);
    e.i(643781);
    var s = e.i(989606),
        o = e.i(870155),
        c = e.i(455108),
        d = e.i(349057);
    e.s(["default", 0, e => {
        let m, u, h, f, x, g, p, b, v, j, y, w, k, N, S, T, M = (0, i.c)(40),
            {
                title: C,
                miniTitle: L,
                description: I,
                cta: B,
                image: F,
                imageForMobile: _,
                scrollToButton: D
            } = e,
            [V, P] = (0, a.useState)(0);
        M[0] !== I ? (m = (0, o.default)(I, {
            style: "primary"
        }), M[0] = I, M[1] = m) : m = M[1];
        let z = m,
            {
                enteredViaLedgerLive: O
            } = (0, d.default)();
        M[2] === Symbol.for("react.memo_cache_sentinel") ? (u = () => {
            P(window.scrollY)
        }, M[2] = u) : u = M[2];
        let A = u;
        M[3] === Symbol.for("react.memo_cache_sentinel") ? (h = () => {
            A();
            let e = () => {
                requestAnimationFrame(A)
            };
            return window.addEventListener("scroll", e), () => {
                window.removeEventListener("scroll", e)
            }
        }, f = [], M[3] = h, M[4] = f) : (h = M[3], f = M[4]), (0, a.useEffect)(h, f);
        let U = !O && "navigation-safe-space";
        M[5] !== U ? (x = (0, n.default)("relative flex flex-col items-center justify-center overflow-hidden bg-black px-16 md:h-full md:flex-row md:px-0 rtl:md:flex-row-reverse", U), M[5] = U, M[6] = x) : x = M[6];
        let R = L ? "" : "mt-20 py-20 md:mt-40";
        M[7] !== R ? (g = (0, n.default)("z-[1] mb-[40vw] w-full max-w-(--breakpoint-lg) self-center md:mb-256", R), M[7] = R, M[8] = g) : g = M[8], M[9] !== L || M[10] !== C ? (p = (L || C) && (0, t.jsxs)(r.TransitionChild, {
            as: "div",
            enter: "transition-opacity duration-500 delay-75",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            children: [L && (0, t.jsx)("div", {
                className: "mb-16 flex justify-center",
                children: (0, t.jsx)(c.default.TagHud, {
                    size: "medium",
                    label: L,
                    variant: "grey",
                    theme: "dark"
                })
            }), C && (0, t.jsx)("h1", {
                className: "mb-12 responsive-display-3",
                children: C
            })]
        }), M[9] = L, M[10] = C, M[11] = p) : p = M[11], M[12] !== I || M[13] !== z ? (b = I && (0, t.jsx)(r.TransitionChild, {
            as: "div",
            enter: "transition-opacity duration-500 delay-200",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            children: (0, t.jsx)("p", {
                className: "py-12 heading-3-semi-bold font-normal",
                children: z
            })
        }), M[12] = I, M[13] = z, M[14] = b) : b = M[14], M[15] !== B || M[16] !== D ? (v = B && (0, t.jsx)("div", {
            className: "m-auto my-12 flex w-fit items-center rounded-full backdrop-blur-lg md:flex-row",
            children: (0, t.jsx)(r.TransitionChild, {
                as: "div",
                enter: "transition-opacity duration-500 delay-275",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                children: (0, t.jsx)(s.default, {
                    icon: B.displayAnchorArrow ? "arrowDown" : void 0,
                    label: B.label,
                    href: B.url,
                    variant: "secondary-white",
                    dataCsOverrideId: "hero-cta",
                    ...D && {
                        onClick: e => D(e)
                    }
                })
            })
        }), M[15] = B, M[16] = D, M[17] = v) : v = M[17], M[18] !== b || M[19] !== v || M[20] !== g || M[21] !== p ? (j = (0, t.jsx)("div", {
            className: "mt-20 flex w-full max-w-(--breakpoint-2xl) justify-center text-center text-white md:mt-40",
            children: (0, t.jsxs)("div", {
                className: g,
                children: [p, b, v]
            })
        }), M[18] = b, M[19] = v, M[20] = g, M[21] = p, M[22] = j) : j = M[22], M[23] !== _ || M[24] !== V ? (y = _ && (0, t.jsx)(l.default, {
            src: _.url,
            alt: _.title ? ? "",
            width: 750,
            height: 630,
            className: (0, n.default)("md:hidden", "absolute bottom-0 left-0 z-0 w-full", "transition-opacity duration-900"),
            style: {
                transform: `translateY(${.2*V}px)`
            }
        }), M[23] = _, M[24] = V, M[25] = y) : y = M[25];
        let E = F.url,
            $ = F.title ? ? "";
        M[26] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, n.default)("absolute object-cover object-bottom 2xl:object-contain", "transition-opacity duration-900"), M[26] = w) : w = M[26];
        let H = `translateY(${.2*V}px)`;
        return M[27] !== H ? (k = {
            transform: H
        }, M[27] = H, M[28] = k) : k = M[28], M[29] !== F.url || M[30] !== $ || M[31] !== k ? (N = (0, t.jsx)("div", {
            className: "z-0 hidden md:block",
            children: (0, t.jsx)(l.default, {
                src: E,
                alt: $,
                fill: !0,
                className: w,
                style: k
            })
        }), M[29] = F.url, M[30] = $, M[31] = k, M[32] = N) : N = M[32], M[33] !== y || M[34] !== N ? (S = (0, t.jsxs)(r.TransitionChild, {
            as: "div",
            enter: "transition-all duration-800",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            children: [y, N]
        }), M[33] = y, M[34] = N, M[35] = S) : S = M[35], M[36] !== j || M[37] !== S || M[38] !== x ? (T = (0, t.jsxs)(r.Transition, {
            as: "header",
            show: !0,
            appear: !0,
            className: x,
            children: [j, S]
        }), M[36] = j, M[37] = S, M[38] = x, M[39] = T) : T = M[39], T
    }], 31904), e.s([], 429228), e.i(828278);
    var m = e.i(739504);
    e.i(286941);
    var u = e.i(126762),
        h = e.i(489180),
        f = e.i(290350),
        x = e.i(212376),
        g = e.i(778305);
    e.s(["default", 0, e => {
        let l, a, r, o, d, p, b, v = (0, i.c)(31),
            {
                title: j,
                subtitle: y,
                deprecated_products: w,
                cta: k,
                legalDisclaimer: N,
                offerCards: S,
                scrollToHighlightedBlock: T,
                theme: M,
                buyMode: C,
                index: L,
                cardSize: I,
                hideOnMobile: B
            } = e,
            F = void 0 === M ? "dark" : M;
        v[0] !== S ? (l = S || [], v[0] = S, v[1] = l) : l = v[1];
        let _ = (e => {
                let t, l = (0, i.c)(9),
                    {
                        isDeviceAvailable: a
                    } = (0, x.default)(),
                    r = (0, g.useClassicSignersPageBypass)(),
                    n = (0, f.default)();
                if (l[0] !== n || l[1] !== a || l[2] !== e || l[3] !== r) {
                    let i;
                    l[5] !== n || l[6] !== a || l[7] !== r ? (i = e => r || e.variantLists[0].variants.some(e => a(e.sku)) && !e.combinedAddToCartVariants.some(e => "ledger-recover" === e.productHandle && !n), l[5] = n, l[6] = a, l[7] = r, l[8] = i) : i = l[8], t = e.filter(i), l[0] = n, l[1] = a, l[2] = e, l[3] = r, l[4] = t
                } else t = l[4];
                return t
            })(l),
            D = "dark" === F ? "bg-black text-white" : "bg-neutral-50 text-black",
            V = B && "hidden md:block";
        v[2] !== D || v[3] !== V ? (a = (0, n.default)("block", D, V), v[2] = D, v[3] = V, v[4] = a) : a = v[4];
        let P = `offers-${L}`;
        return v[5] !== w || v[6] !== y || v[7] !== F || v[8] !== j ? (r = w.length > 0 && (0, t.jsx)(c.default.Section, {
            children: (0, t.jsx)(m.default, {
                products: w,
                features: [],
                title: j,
                subtitle: y,
                theme: F,
                animateCards: !0
            })
        }), v[5] = w, v[6] = y, v[7] = F, v[8] = j, v[9] = r) : r = v[9], v[10] !== C || v[11] !== I || v[12] !== _ || v[13] !== T || v[14] !== y || v[15] !== F || v[16] !== j ? (o = _ && _.length > 0 && (0, t.jsx)(c.default.Section, {
            "data-testid": "hardware-wallet-collection",
            verticalSpacing: "x-small",
            children: (0, t.jsx)(h.default, {
                title: j,
                subtitle: y,
                offerCards: _,
                scrollToHighlightedBlock: T,
                theme: F,
                buyMode: C,
                size: I
            })
        }), v[10] = C, v[11] = I, v[12] = _, v[13] = T, v[14] = y, v[15] = F, v[16] = j, v[17] = o) : o = v[17], v[18] !== k || v[19] !== F ? (d = k && (0, t.jsx)(c.default.Section, {
            verticalSpacing: "x-small",
            children: (0, t.jsx)("div", {
                className: "flex justify-center",
                children: (0, t.jsx)(s.default, {
                    label: k.label,
                    href: k.url,
                    variant: "dark" === F ? "secondary-white" : "link-black",
                    icon: "light" === F ? "arrowRight" : void 0
                })
            })
        }), v[18] = k, v[19] = F, v[20] = d) : d = v[20], v[21] !== N || v[22] !== F ? (p = N && (0, t.jsx)("div", {
            "data-testid": "legal-disclaimer",
            className: "p-32",
            children: (0, t.jsx)(u.default, {
                openLinkInNewTab: !0,
                className: (0, n.default)("body-4 m-auto max-w-full text-center md:max-w-3xl", "dark" === F ? "text-neutral-200" : "text-black"),
                content: N
            })
        }), v[21] = N, v[22] = F, v[23] = p) : p = v[23], v[24] !== p || v[25] !== a || v[26] !== P || v[27] !== r || v[28] !== o || v[29] !== d ? (b = (0, t.jsxs)("div", {
            "data-testid": "offers-recap-block",
            className: a,
            id: P,
            children: [r, o, d, p]
        }), v[24] = p, v[25] = a, v[26] = P, v[27] = r, v[28] = o, v[29] = d, v[30] = b) : b = v[30], b
    }], 316176), e.s([], 659786), e.i(573614);
    var p = e.i(126298);
    let b = () => {
            let e, l, a = (0, i.c)(2);
            return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
                className: "col-start-1 row-start-1 mb-12 h-full w-4 self-center justify-self-center bg-linear-to-t from-purple-600 to-purple-600/0 lg:me-8 lg:mb-0 lg:h-4 lg:w-full lg:bg-linear-to-l lg:rtl:bg-linear-to-r"
            }), a[0] = e) : e = a[0], a[1] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsxs)("div", {
                className: "me-32 grid grid-cols-1 grid-rows-1 lg:me-0",
                children: [e, (0, t.jsx)("div", {
                    className: "col-start-1 row-start-1 mt-auto rotate-90 justify-self-center lg:ms-auto lg:mt-0 lg:rotate-0 lg:rtl:-scale-x-100",
                    children: (0, t.jsx)("svg", {
                        width: "14",
                        height: "22",
                        viewBox: "0 0 14 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, t.jsx)("path", {
                            d: "M2.50414 2L11.4941 11.027L2.49414 20",
                            stroke: "#D4A0FF",
                            strokeWidth: "4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                })]
            }), a[1] = l) : l = a[1], l
        },
        v = e => {
            let r, n, o, c, d, m, h, f, x, g, b = (0, i.c)(23),
                {
                    roadmap: v,
                    index: w
                } = e,
                [k, N] = (0, a.useState)(!1);
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (r = () => N(!0), b[0] = r) : r = b[0];
            let S = r;
            b[1] === Symbol.for("react.memo_cache_sentinel") ? (n = () => N(!1), b[1] = n) : n = b[1];
            let T = n;
            b[2] !== v.link ? .dynamicDrawerContent ? (o = v.link ? .dynamicDrawerContent ? .filter(j).map(y) ? ? null, b[2] = v.link ? .dynamicDrawerContent, b[3] = o) : o = b[3];
            let M = o;
            return b[4] !== w ? (c = 0 !== w && (0, t.jsx)("div", {
                className: "h-px bg-linear-to-r from-neutral-600/0 via-neutral-600 to-neutral-600/0 lg:mx-48 lg:h-auto lg:w-px lg:bg-linear-to-b lg:ps-px"
            }), b[4] = w, b[5] = c) : c = b[5], b[6] !== v.title ? (d = (0, t.jsx)("span", {
                className: "responsive-display-4 mb-16 bg-linear-to-r from-white to-neutral-600 bg-clip-text text-transparent rtl:bg-linear-to-l",
                children: v.title
            }), b[6] = v.title, b[7] = d) : d = b[7], b[8] !== v.description ? (m = v.description && (0, t.jsx)(u.default, {
                content: v.description,
                className: "heading-1-semi-bold font-normal rich-text-p:m-0"
            }), b[8] = v.description, b[9] = m) : m = b[9], b[10] !== v.link ? (h = v.link && (0, t.jsx)("div", {
                className: "mt-auto pt-16",
                children: (0, t.jsx)(s.default, {
                    label: v.link.label,
                    variant: "link-white",
                    icon: "arrowRight",
                    onClick: S
                })
            }), b[10] = v.link, b[11] = h) : h = b[11], b[12] !== d || b[13] !== m || b[14] !== h ? (f = (0, t.jsx)("div", {
                className: "flex flex-col text-white lg:flex-row",
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col py-32 lg:py-56",
                    children: [d, m, h]
                })
            }), b[12] = d, b[13] = m, b[14] = h, b[15] = f) : f = b[15], b[16] !== k || b[17] !== M ? (x = M && (0, t.jsx)(p.default, {
                close: T,
                isOpen: k,
                title: M[0].title,
                theme: "dark",
                children: M[0].image && (0, t.jsxs)("div", {
                    className: "max-w-full justify-self-center",
                    children: [(0, t.jsx)(l.default, {
                        src: M[0].image.url,
                        alt: M[0].image.title || "",
                        width: 1216,
                        height: 484,
                        priority: !0,
                        className: "hidden w-full rounded-xs md:block"
                    }), M[0].imageMobile && (0, t.jsx)(l.default, {
                        src: M[0].imageMobile.url,
                        alt: M[0].image.title || "",
                        width: 375,
                        height: 697,
                        priority: !0,
                        className: "block min-h-256 w-full rounded-xs md:hidden"
                    })]
                })
            }), b[16] = k, b[17] = M, b[18] = x) : x = b[18], b[19] !== c || b[20] !== f || b[21] !== x ? (g = (0, t.jsxs)(t.Fragment, {
                children: [c, f, x]
            }), b[19] = c, b[20] = f, b[21] = x, b[22] = g) : g = b[22], g
        };

    function j(e) {
        return "ContentBlock" === e.type
    }

    function y(e) {
        return e.data
    }

    function w(e, i) {
        return (0, t.jsx)(v, {
            roadmap: e,
            index: i
        }, `${i}-${e.title}`)
    }
    e.s(["default", 0, e => {
        let l, a, r, s, o, d, m = (0, i.c)(13),
            {
                roadmapBlocks: u,
                theme: h
            } = e,
            f = void 0 === h ? "light" : h,
            x = "dark" === f && "bg-black text-white",
            g = "light" === f && "bg-neutral-50 text-black";
        return m[0] !== x || m[1] !== g ? (l = (0, n.default)(x, g), m[0] = x, m[1] = g, m[2] = l) : l = m[2], m[3] !== u ? (a = u.map(w), m[3] = u, m[4] = a) : a = m[4], m[5] !== a ? (r = (0, t.jsx)("div", {
            className: "flex flex-col lg:flex-row",
            children: a
        }), m[5] = a, m[6] = r) : r = m[6], m[7] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, t.jsx)(b, {}), m[7] = s) : s = m[7], m[8] !== r ? (o = (0, t.jsx)(c.default.Section, {
            verticalSpacing: "small",
            children: (0, t.jsxs)("div", {
                className: "flex flex-row-reverse lg:flex-col",
                children: [r, s]
            })
        }), m[8] = r, m[9] = o) : o = m[9], m[10] !== l || m[11] !== o ? (d = (0, t.jsx)("div", {
            className: l,
            children: o
        }), m[10] = l, m[11] = o, m[12] = d) : d = m[12], d
    }], 273635), e.s([], 608367);
    let k = e => {
        let a, r, s, o, c, d, m, h, f, x = (0, i.c)(24),
            {
                testimonialData: g,
                theme: p
            } = e,
            b = "dark" === p ? "border-neutral-600 bg-neutral-900 text-white" : "border-neutral-200 bg-white";
        x[0] !== b ? (a = (0, n.default)("flex min-w-256 flex-col gap-16 rounded-xs border p-24 md:min-w-256 md:gap-24 md:p-40", b), x[0] = b, x[1] = a) : a = x[1], x[2] !== g.description ? (r = (0, t.jsx)("div", {
            className: "flex",
            children: (0, t.jsx)(u.default, {
                className: "rich-text-p:my-0",
                content: g.description
            })
        }), x[2] = g.description, x[3] = r) : r = x[3];
        let v = g.image.title || "";
        x[4] !== v || x[5] !== g.image.url ? (s = (0, t.jsx)("div", {
            className: "flex h-40 w-40 self-center overflow-hidden rounded-full",
            children: (0, t.jsx)(l.default, {
                src: g.image.url,
                alt: v,
                width: 40,
                height: 40
            })
        }), x[4] = v, x[5] = g.image.url, x[6] = s) : s = x[6], x[7] !== g.title ? (o = (0, t.jsx)("span", {
            className: "body-1-semi-bold",
            children: g.title
        }), x[7] = g.title, x[8] = o) : o = x[8];
        let j = "dark" === p ? "text-neutral-400" : "text-neutral-500";
        return x[9] !== j ? (c = (0, n.default)("body-3", j), x[9] = j, x[10] = c) : c = x[10], x[11] !== c || x[12] !== g.subtitle ? (d = (0, t.jsx)("span", {
            className: c,
            children: g.subtitle
        }), x[11] = c, x[12] = g.subtitle, x[13] = d) : d = x[13], x[14] !== o || x[15] !== d ? (m = (0, t.jsxs)("div", {
            className: "flex flex-col",
            children: [o, d]
        }), x[14] = o, x[15] = d, x[16] = m) : m = x[16], x[17] !== m || x[18] !== s ? (h = (0, t.jsxs)("div", {
            className: "mt-auto flex flex-row gap-16",
            children: [s, m]
        }), x[17] = m, x[18] = s, x[19] = h) : h = x[19], x[20] !== h || x[21] !== a || x[22] !== r ? (f = (0, t.jsxs)("div", {
            className: a,
            children: [r, h]
        }), x[20] = h, x[21] = a, x[22] = r, x[23] = f) : f = x[23], f
    };
    var N = e.i(948085);

    function S(e) {
        return (0, t.jsxs)("div", {
            className: "flex flex-1 flex-col justify-between border border-white/30 bg-white/5 px-24 py-16 text-white backdrop-blur",
            children: [e.image && (0, t.jsx)("div", {
                className: "relative my-12 h-12 w-full max-w-44 shrink-0 sm:max-w-48",
                children: (0, t.jsx)(l.default, {
                    src: e.image.url,
                    alt: e.image.title ? ? "",
                    fill: !0,
                    sizes: "(max-width: 640px) 45vw, 192px",
                    className: "object-contain object-left rtl:object-right"
                })
            }), !e.image && (0, t.jsx)("span", {
                className: "heading-1-semi-bold",
                children: e.title
            }), (0, t.jsx)("span", {
                className: "heading-3-semi-bold font-normal text-neutral-200",
                children: e.subtitle
            })]
        }, e.title)
    }
    e.s(["default", 0, e => {
        let l, a, r, s, o = (0, i.c)(14),
            {
                theme: c,
                title: d,
                testimonials: m
            } = e,
            u = "light" === c ? "bg-neutral-50" : "bg-black";
        if (o[0] !== u ? (l = (0, n.default)(u), o[0] = u, o[1] = l) : l = o[1], o[2] !== m || o[3] !== c) {
            let e;
            o[5] !== c ? (e = (e, i) => (0, t.jsx)(k, {
                testimonialData: e,
                theme: c ? ? "light"
            }, i), o[5] = c, o[6] = e) : e = o[6], a = m.map(e), o[2] = m, o[3] = c, o[4] = a
        } else a = o[4];
        let h = c ? ? "light";
        return o[7] !== a || o[8] !== h || o[9] !== d ? (r = (0, t.jsx)(N.default, {
            slides: a,
            title: d,
            theme: h
        }), o[7] = a, o[8] = h, o[9] = d, o[10] = r) : r = o[10], o[11] !== l || o[12] !== r ? (s = (0, t.jsx)("div", {
            className: l,
            children: r
        }), o[11] = l, o[12] = r, o[13] = s) : s = o[13], s
    }], 661031), e.s([], 391127), e.s(["default", 0, e => {
        let a, r, o, d, m, u, h, f, x, g = (0, i.c)(24),
            {
                title: p,
                cards: b,
                link: v,
                backgroundImage: j,
                theme: y
            } = e,
            w = void 0 === y ? "dark" : y,
            k = b ? .length % 2 != 0,
            N = "dark" === w ? "bg-black" : "bg-neutral-50";
        return g[0] !== N ? (a = (0, n.default)(N), g[0] = N, g[1] = a) : a = g[1], g[2] !== j || g[3] !== w ? (r = j && (0, t.jsx)(l.default, {
            src: j.url ? ? "",
            alt: j.title ? ? "",
            fill: !0,
            className: (0, n.default)("border object-cover", "dark" === w ? "border-neutral-600" : "border-neutral-200")
        }), g[2] = j, g[3] = w, g[4] = r) : r = g[4], g[5] !== r ? (o = (0, t.jsx)("div", {
            className: "relative z-0 col-start-1 row-start-1 h-full w-full",
            children: r
        }), g[5] = r, g[6] = o) : o = g[6], g[7] !== p ? (d = (0, t.jsx)("h2", {
            className: "responsive-display-4 w-full self-center text-center text-white",
            children: p
        }), g[7] = p, g[8] = d) : d = g[8], g[9] !== v ? (m = v && (0, t.jsx)(s.default, {
            href: v.url,
            label: v.label,
            variant: "primary-white",
            size: "medium"
        }), g[9] = v, g[10] = m) : m = g[10], g[11] !== b || g[12] !== k ? (u = b && (0, t.jsx)("div", {
            className: (0, n.default)("grid w-full grid-cols-1 gap-8 pt-8 sm:grid-cols-2 md:gap-16 md:pt-24 lg:grid-cols-4", k && "sm:grid-cols-3 lg:grid-cols-3"),
            children: b.map(S)
        }), g[11] = b, g[12] = k, g[13] = u) : u = g[13], g[14] !== d || g[15] !== m || g[16] !== u ? (h = (0, t.jsxs)("div", {
            className: "z-10 col-start-1 row-start-1 flex flex-col items-center justify-center gap-16 px-24 py-40 md:px-40 md:py-80",
            children: [d, m, u]
        }), g[14] = d, g[15] = m, g[16] = u, g[17] = h) : h = g[17], g[18] !== o || g[19] !== h ? (f = (0, t.jsx)(c.default.Section, {
            children: (0, t.jsxs)("div", {
                className: "grid w-full",
                children: [o, h]
            })
        }), g[18] = o, g[19] = h, g[20] = f) : f = g[20], g[21] !== f || g[22] !== a ? (x = (0, t.jsx)("div", {
            className: a,
            children: f
        }), g[21] = f, g[22] = a, g[23] = x) : x = g[23], x
    }], 77545), e.s([], 578594), e.i(108399);
    var T = e.i(860231),
        M = e.i(725069);
    e.i(366539);
    var C = e.i(150077),
        L = e.i(773184),
        I = e.i(799444);

    function B(e) {
        return e.availableForSale
    }
    e.s(["default", 0, e => {
        let a, r, o, d, m, u, h, f, x, g, p, b, v, j, y = (0, i.c)(45),
            {
                theme: w,
                features: k,
                title: N,
                image: S,
                buttonOverride: F,
                combinedAddToCartVariants: _,
                variantList: D,
                notifyMeFormName: V
            } = e,
            P = void 0 === w ? "light" : w;
        y[0] !== D ? (a = D ? [D] : [], y[0] = D, y[1] = a) : a = y[1], y[2] !== _ || y[3] !== a ? (r = {
            variants: _,
            variantLists: a
        }, y[2] = _, y[3] = a, y[4] = r) : r = y[4];
        let {
            currentVariant: z,
            variants: O,
            priceLabel: A,
            priceConversion: U
        } = (0, L.default)(r);
        y[5] !== O[0].id ? (o = [O[0].id], y[5] = O[0].id, y[6] = o) : o = y[6];
        let {
            prices: R
        } = (0, I.default)(o);
        y[7] !== _ ? (d = _.every(B), y[7] = _, y[8] = d) : d = y[8];
        let E = d,
            {
                discountLabel: $
            } = z;
        if (!N || !S) return null;
        let H = "dark" === P ? "bg-black text-white" : "bg-neutral-50 text-black";
        y[9] !== H ? (m = (0, n.default)("h-auto md:h-full", H), y[9] = H, y[10] = m) : m = y[10];
        let W = "dark" === P ? "text-white" : "text-black";
        y[11] !== W ? (u = (0, n.default)("responsive-display-4", W), y[11] = W, y[12] = u) : u = y[12], y[13] !== u || y[14] !== N ? (h = (0, t.jsx)("h3", {
            className: u,
            children: N
        }), y[13] = u, y[14] = N, y[15] = h) : h = y[15], y[16] !== z || y[17] !== E || y[18] !== V || y[19] !== U || y[20] !== A || y[21] !== R || y[22] !== P || y[23] !== $ || y[24] !== O ? (f = R && O.length > 0 && (0, t.jsxs)("div", {
            className: "flex items-center gap-16",
            children: [(0, t.jsx)(M.default, {
                variants: O,
                isOfferAvailable: E && z.availableForSale,
                notifyMeFormName: V,
                dataCsOverrideId: "product-summary-add-to-cart",
                size: "medium",
                theme: P
            }), (0, t.jsx)(C.default, {
                discountLabel: A || $,
                showDiscount: !!U || !!$,
                size: "large",
                theme: "dark",
                direction: "horizontal",
                variant: z,
                ...U && {
                    manualDiscountConversion: U,
                    showDiscount: !0,
                    showStrikedPrice: !0
                }
            })]
        }), y[16] = z, y[17] = E, y[18] = V, y[19] = U, y[20] = A, y[21] = R, y[22] = P, y[23] = $, y[24] = O, y[25] = f) : f = y[25], y[26] !== F ? (x = F && (0, t.jsx)("div", {
            children: (0, t.jsx)(s.default, {
                label: F.label,
                href: F.url,
                variant: "primary-orange",
                size: "medium"
            })
        }), y[26] = F, y[27] = x) : x = y[27], y[28] !== k || y[29] !== P ? (g = k ? .length && (0, t.jsx)("div", {
            className: "flex flex-wrap items-center justify-start gap-8 md:gap-24",
            children: k.map((e, i) => (0, t.jsxs)("div", {
                className: "flex flex-row items-center justify-between gap-8",
                children: [(0, t.jsx)(T.default, {
                    name: "check2",
                    size: 20,
                    color: "green",
                    strokeWidth: 3
                }), (0, t.jsx)("span", {
                    className: (0, n.default)("body-3", "dark" === P ? "text-neutral-300" : "text-neutral-700"),
                    children: e
                })]
            }, i))
        }), y[28] = k, y[29] = P, y[30] = g) : g = y[30], y[31] !== h || y[32] !== f || y[33] !== x || y[34] !== g ? (p = (0, t.jsxs)("div", {
            className: "flex flex-col gap-24 pt-48 md:w-full md:py-48",
            children: [h, f, x, g]
        }), y[31] = h, y[32] = f, y[33] = x, y[34] = g, y[35] = p) : p = y[35];
        let q = S ? .url ? ? "",
            K = S ? .title || N;
        return y[36] !== q || y[37] !== K ? (b = (0, t.jsx)("div", {
            className: "relative flex min-h-0 flex-col items-end md:w-1/2",
            children: (0, t.jsx)(l.default, {
                src: q,
                alt: K,
                width: 568,
                height: 640,
                className: "h-full w-full object-contain object-bottom",
                sizes: "(max-width: 768px) 100vw, 50vw"
            })
        }), y[36] = q, y[37] = K, y[38] = b) : b = y[38], y[39] !== p || y[40] !== b ? (v = (0, t.jsx)(c.default.Section, {
            verticalSpacing: "none",
            children: (0, t.jsxs)("div", {
                className: "flex flex-col items-stretch gap-24 md:flex-row md:justify-stretch md:gap-32 xl:flex-row",
                children: [p, b]
            })
        }), y[39] = p, y[40] = b, y[41] = v) : v = y[41], y[42] !== v || y[43] !== m ? (j = (0, t.jsx)("div", {
            className: m,
            children: v
        }), y[42] = v, y[43] = m, y[44] = j) : j = y[44], j
    }], 968461), e.s([], 516257)
}, 357638, e => {
    "use strict";
    var t = e.i(391398),
        i = e.i(261576);
    e.i(664157);
    var l = e.i(271179),
        a = e.i(191788),
        r = e.i(458211),
        n = e.i(849513);
    e.i(274250);
    var s = e.i(170255);
    e.i(429228);
    var o = e.i(31904);
    e.i(7382);
    var c = e.i(860613);
    e.i(659786);
    var d = e.i(316176);
    e.i(431877);
    var m = e.i(119978),
        u = e.i(685472);
    e.i(431624);
    var h = e.i(520792);
    e.i(611275);
    var f = e.i(6714);
    e.i(608367);
    var x = e.i(273635),
        g = e.i(9446);
    e.i(917350);
    var p = e.i(753221),
        b = e.i(941436),
        v = e.i(63535);
    e.i(391127);
    var j = e.i(661031);
    e.i(883820);
    var y = e.i(748016),
        w = e.i(557398);
    e.i(578594);
    var k = e.i(77545);
    e.i(516257);
    var N = e.i(968461),
        S = e.i(747815),
        T = e.i(580665),
        M = e.i(198311),
        C = e.i(455108),
        L = e.i(495854),
        I = e.i(279084);
    e.i(108399);
    var B = e.i(860231);
    let F = e => {
        let l, a, r, n, s, o, c, d, m = (0, i.c)(22),
            {
                block: u,
                theme: h,
                isOpen: f,
                index: x,
                onBlockClick: g
            } = e;
        m[0] !== x || m[1] !== g ? (l = () => g(x), m[0] = x, m[1] = g, m[2] = l) : l = m[2], m[3] !== u.title ? (a = (0, t.jsx)("span", {
            className: "shrink grow basis-full heading-4-semi-bold",
            children: u.title
        }), m[3] = u.title, m[4] = a) : a = m[4], m[5] !== u.titleImage ? (r = u.titleImage && (0, t.jsx)("img", {
            src: u.titleImage.url,
            alt: u.titleImage.title ? ? void 0,
            className: "ms-auto h-24 flex-1 object-contain"
        }), m[5] = u.titleImage, m[6] = r) : r = m[6];
        let p = f && "rotate-180",
            b = u.titleImage && "ms-auto";
        m[7] !== p || m[8] !== b ? (n = (0, L.default)("my-auto flex self-start transition duration-300", p, b), m[7] = p, m[8] = b, m[9] = n) : n = m[9];
        let v = "dark" === h ? "white" : "black";
        return m[10] !== v ? (s = (0, t.jsx)(B.default, {
            name: "chevronDown",
            color: v,
            size: 30,
            strokeWidth: 3.5
        }), m[10] = v, m[11] = s) : s = m[11], m[12] !== n || m[13] !== s ? (o = (0, t.jsx)("div", {
            className: n,
            children: s
        }), m[12] = n, m[13] = s, m[14] = o) : o = m[14], m[15] !== a || m[16] !== r || m[17] !== o ? (c = (0, t.jsxs)("div", {
            className: "flex items-center justify-between gap-8",
            children: [a, r, o]
        }), m[15] = a, m[16] = r, m[17] = o, m[18] = c) : c = m[18], m[19] !== l || m[20] !== c ? (d = (0, t.jsx)("button", {
            onClick: l,
            className: "w-full text-start",
            children: c
        }), m[19] = l, m[20] = c, m[21] = d) : d = m[21], d
    };
    var _ = e.i(498817),
        D = e.i(923027);
    let V = e => {
        let l, a, r, n, s, o, c, d, m, u = (0, i.c)(24),
            {
                section: h,
                theme: f
            } = e,
            x = "dark" === f && "border-neutral-600 bg-neutral-900";
        u[0] !== x ? (l = (0, L.default)("mb-16 border border-neutral-200 bg-white p-16 md:mb-0 lg:p-32", x), u[0] = x, u[1] = l) : l = u[1], u[2] !== h.image || u[3] !== f ? (a = h.image && (0, t.jsx)("div", {
            className: (0, L.default)("h-fit rounded-full bg-neutral-50 p-12 md:p-20", "dark" === f && "bg-neutral-950"),
            children: (0, t.jsx)("img", {
                src: h.image.url,
                alt: h.image.title ? ? void 0,
                className: "h-24 w-24 max-w-fit object-contain md:h-32 md:w-32 lg:h-40 lg:w-40"
            })
        }), u[2] = h.image, u[3] = f, u[4] = a) : a = u[4];
        let g = "dark" === f && "text-white";
        u[5] !== g ? (r = (0, L.default)("heading-1-semi-bold text-black", g), u[5] = g, u[6] = r) : r = u[6], u[7] !== h.title || u[8] !== r ? (n = (0, t.jsx)("span", {
            className: r,
            children: h.title
        }), u[7] = h.title, u[8] = r, u[9] = n) : n = u[9];
        let p = "dark" === f && "text-neutral-200";
        return u[10] !== p ? (s = (0, L.default)("heading-4 text-neutral-800", p), u[10] = p, u[11] = s) : s = u[11], u[12] !== h.subtitle || u[13] !== s ? (o = (0, t.jsx)("span", {
            className: s,
            children: h.subtitle
        }), u[12] = h.subtitle, u[13] = s, u[14] = o) : o = u[14], u[15] !== n || u[16] !== o ? (c = (0, t.jsxs)("div", {
            className: "flex flex-col gap-8",
            children: [n, o]
        }), u[15] = n, u[16] = o, u[17] = c) : c = u[17], u[18] !== c || u[19] !== a ? (d = (0, t.jsxs)("div", {
            className: "flex flex-row items-center gap-16 lg:gap-24",
            children: [a, c]
        }), u[18] = c, u[19] = a, u[20] = d) : d = u[20], u[21] !== d || u[22] !== l ? (m = (0, t.jsx)("div", {
            className: l,
            children: d
        }), u[21] = d, u[22] = l, u[23] = m) : m = u[23], m
    };
    var P = e.i(992219);
    let z = e => {
            let l, a, r, n, s, o, c, d, m, u, h, f, x, g, p, b, v = (0, i.c)(43),
                {
                    selectedBlock: j,
                    theme: y
                } = e,
                w = !!j.informationSections ? .length,
                k = j.videoUrl && !w,
                N = j.image && !k && !w,
                S = w ? `info-${j.informationSections?.[0]?.title}` : k ? `video-${j.videoUrl}` : `image-${j.image?.url}`;
            v[0] !== w || v[1] !== y ? (l = !w && (0, t.jsx)(M.motion.div, {
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                children: (0, t.jsx)(D.CornerDecoration, {
                    position: "top-left",
                    theme: y
                })
            }, "top-left-corner"), v[0] = w, v[1] = y, v[2] = l) : l = v[2], v[3] !== l ? (a = (0, t.jsx)(_.AnimatePresence, {
                mode: "wait",
                children: l
            }), v[3] = l, v[4] = a) : a = v[4];
            let T = "dark" === y && "border-neutral-600",
                C = w && "h-auto max-h-none overflow-visible border-none";
            v[5] !== T || v[6] !== C ? (r = (0, L.default)("relative h-[640px] max-h-[640px] w-full overflow-hidden border border-neutral-200", T, C), v[5] = T, v[6] = C, v[7] = r) : r = v[7], v[8] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                opacity: 0
            }, s = {
                opacity: 1
            }, o = {
                opacity: 0
            }, c = {
                duration: .3
            }, v[8] = n, v[9] = s, v[10] = o, v[11] = c) : (n = v[8], s = v[9], o = v[10], c = v[11]);
            let I = w && "h-auto";
            return v[12] !== I ? (d = (0, L.default)("h-[640px]", I), v[12] = I, v[13] = d) : d = v[13], v[14] !== w || v[15] !== j.informationSections || v[16] !== y ? (m = w && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "mt-64",
                    children: (0, t.jsx)(D.CornerDecoration, {
                        position: "top-left",
                        theme: y
                    })
                }), (0, t.jsx)(M.motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .3
                    },
                    className: "flex flex-col gap-16",
                    children: j.informationSections ? .map(e => (0, t.jsx)(V, {
                        section: e,
                        theme: y
                    }, e.title))
                }), (0, t.jsx)(D.CornerDecoration, {
                    position: "bottom-right",
                    theme: y
                })]
            }), v[14] = w, v[15] = j.informationSections, v[16] = y, v[17] = m) : m = v[17], v[18] !== k || v[19] !== j.videoTitle || v[20] !== j.videoUrl ? (u = k && j.videoUrl && (0, t.jsx)(M.motion.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                className: "h-full w-full",
                children: (0, t.jsx)(P.default, {
                    source: j.videoUrl,
                    title: j.videoTitle ? ? void 0,
                    "data-testid": "video-block",
                    className: "h-full w-full object-cover",
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0,
                    loop: !0
                })
            }), v[18] = k, v[19] = j.videoTitle, v[20] = j.videoUrl, v[21] = u) : u = v[21], v[22] !== N || v[23] !== j.image ? (h = N && j.image && (0, t.jsx)(M.motion.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                className: "h-full w-full",
                children: (0, t.jsx)("img", {
                    src: j.image.url,
                    alt: j.image.title ? ? void 0,
                    className: "h-full w-full object-cover",
                    "data-testid": "image-block"
                })
            }), v[22] = N, v[23] = j.image, v[24] = h) : h = v[24], v[25] !== S || v[26] !== d || v[27] !== m || v[28] !== u || v[29] !== h ? (f = (0, t.jsx)(_.AnimatePresence, {
                mode: "wait",
                children: (0, t.jsxs)(M.motion.div, {
                    initial: n,
                    animate: s,
                    exit: o,
                    transition: c,
                    className: d,
                    children: [m, u, h]
                }, S)
            }), v[25] = S, v[26] = d, v[27] = m, v[28] = u, v[29] = h, v[30] = f) : f = v[30], v[31] !== f || v[32] !== r ? (x = (0, t.jsx)("div", {
                "data-testid": "desktop-assets",
                className: r,
                children: f
            }), v[31] = f, v[32] = r, v[33] = x) : x = v[33], v[34] !== w || v[35] !== y ? (g = !w && (0, t.jsx)(M.motion.div, {
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                children: (0, t.jsx)(D.CornerDecoration, {
                    position: "bottom-right",
                    theme: y
                })
            }, "bottom-right-corner"), v[34] = w, v[35] = y, v[36] = g) : g = v[36], v[37] !== g ? (p = (0, t.jsx)(_.AnimatePresence, {
                mode: "wait",
                children: g
            }), v[37] = g, v[38] = p) : p = v[38], v[39] !== x || v[40] !== p || v[41] !== a ? (b = (0, t.jsxs)(t.Fragment, {
                children: [a, x, p]
            }), v[39] = x, v[40] = p, v[41] = a, v[42] = b) : b = v[42], b
        },
        O = e => {
            let l, a, r, n, s, o, c = (0, i.c)(24),
                {
                    block: d,
                    theme: m,
                    isOpen: u,
                    index: h
                } = e,
                f = !!d.informationSections ? .length,
                x = d.videoMobileUrl && !f,
                g = d.imageMobile && !x && !f,
                p = `mobile-assets-${h}`,
                b = u ? f ? "auto" : 400 : 0,
                v = +!!u;
            c[0] !== b || c[1] !== v ? (l = {
                height: b,
                opacity: v
            }, c[0] = b, c[1] = v, c[2] = l) : l = c[2], c[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                duration: .3,
                ease: "easeOut"
            }, c[3] = a) : a = c[3];
            let j = !u;
            return c[4] !== d.informationSections || c[5] !== f || c[6] !== m ? (r = f && d.informationSections && (0, t.jsx)("div", {
                className: "flex w-full flex-col sm:mx-auto sm:w-auto",
                children: d.informationSections.map(e => (0, t.jsx)(V, {
                    section: e,
                    theme: m
                }, e.title))
            }), c[4] = d.informationSections, c[5] = f, c[6] = m, c[7] = r) : r = c[7], c[8] !== d.videoMobileUrl || c[9] !== d.videoTitle || c[10] !== x || c[11] !== m ? (n = x && d ? .videoMobileUrl && (0, t.jsx)(P.default, {
                source: d.videoMobileUrl,
                title: d.videoTitle ? ? void 0,
                "data-testid": "video-block",
                className: (0, L.default)("max-h-[384px] w-full border border-neutral-200 object-cover sm:mx-auto sm:w-auto", "dark" === m && "border-neutral-600"),
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                loop: !0
            }), c[8] = d.videoMobileUrl, c[9] = d.videoTitle, c[10] = x, c[11] = m, c[12] = n) : n = c[12], c[13] !== d.imageMobile || c[14] !== g || c[15] !== m ? (s = g && d.imageMobile && (0, t.jsx)("img", {
                src: d.imageMobile.url,
                alt: d.imageMobile.title ? ? void 0,
                className: (0, L.default)("max-h-[384px] w-full border border-neutral-200 object-cover sm:mx-auto sm:w-auto", "dark" === m && "border-neutral-600"),
                "data-testid": "image-block"
            }), c[13] = d.imageMobile, c[14] = g, c[15] = m, c[16] = s) : s = c[16], c[17] !== p || c[18] !== l || c[19] !== j || c[20] !== r || c[21] !== n || c[22] !== s ? (o = (0, t.jsxs)(M.motion.div, {
                "data-testid": p,
                initial: !1,
                animate: l,
                transition: a,
                className: "flex overflow-hidden md:hidden",
                "aria-hidden": j,
                children: [r, n, s]
            }), c[17] = p, c[18] = l, c[19] = j, c[20] = r, c[21] = n, c[22] = s, c[23] = o) : o = c[23], o
        };
    e.i(286941);
    var A = e.i(126762);
    e.i(828684);
    var U = e.i(454720),
        R = e.i(41158);
    let E = e => {
            let l, a, r, n, s, o, c, d = (0, i.c)(21),
                {
                    block: m,
                    theme: u,
                    isOpen: h
                } = e,
                f = h ? "auto" : 0,
                x = +!!h;
            d[0] !== f || d[1] !== x ? (l = {
                height: f,
                opacity: x
            }, d[0] = f, d[1] = x, d[2] = l) : l = d[2], d[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                duration: .3,
                ease: "easeOut"
            }, d[3] = a) : a = d[3];
            let g = !h;
            return d[4] !== m.description || d[5] !== u ? (r = m.description && (0, t.jsx)(A.default, {
                content: m.description,
                theme: u,
                className: (0, L.default)("heading-4 mt-16 text-neutral-800", "dark" === u && "text-neutral-200")
            }), d[4] = m.description, d[5] = u, d[6] = r) : r = d[6], d[7] !== m.link || d[8] !== u ? (n = m.link ? .dynamicDrawerContent && (0, t.jsx)("div", {
                className: "mb-16 md:mb-0",
                "data-testid": "block-description-link-to-drawer",
                children: (0, t.jsx)(U.default, {
                    label: m.link.label,
                    dynamicDrawerContent: m.link.dynamicDrawerContent,
                    drawerTheme: u
                })
            }), d[7] = m.link, d[8] = u, d[9] = n) : n = d[9], d[10] !== m.link || d[11] !== u ? (s = m.link ? .url && (0, t.jsx)("div", {
                className: "mb-16 md:mb-0",
                "data-testid": "block-description-link",
                children: (0, t.jsx)(R.default, {
                    href: m.link.url,
                    className: (0, L.default)("heading-4 mb-16 text-neutral-800 underline md:mb-0", "dark" === u && "text-neutral-200"),
                    children: m.link.label
                })
            }), d[10] = m.link, d[11] = u, d[12] = s) : s = d[12], d[13] !== r || d[14] !== n || d[15] !== s ? (o = (0, t.jsxs)(t.Fragment, {
                children: [r, n, s]
            }), d[13] = r, d[14] = n, d[15] = s, d[16] = o) : o = d[16], d[17] !== l || d[18] !== g || d[19] !== o ? (c = (0, t.jsx)(M.motion.div, {
                initial: !1,
                animate: l,
                transition: a,
                className: "overflow-hidden",
                "aria-hidden": g,
                "data-testid": "block-description",
                children: o
            }), d[17] = l, d[18] = g, d[19] = o, d[20] = c) : c = d[20], c
        },
        $ = e => {
            let l, r, n, s, o, c, d, m, u, h, f, x, g, p, b, v, j, y = (0, i.c)(46),
                {
                    title: w,
                    tag: k,
                    contentBlocks: N,
                    theme: S
                } = e,
                T = void 0 === S ? "light" : S,
                B = (0, I.default)(),
                [_, D] = (0, a.useState)(0);
            y[0] === Symbol.for("react.memo_cache_sentinel") ? (l = new Set, y[0] = l) : l = y[0];
            let [V, P] = (0, a.useState)(l);
            y[1] !== B ? (r = () => {
                B || P(H)
            }, y[1] = B, y[2] = r) : r = y[2];
            let A = r;
            y[3] !== A ? (n = () => {
                A()
            }, s = [A], y[3] = A, y[4] = n, y[5] = s) : (n = y[4], s = y[5]), (0, a.useEffect)(n, s), y[6] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
                P(t => {
                    let i = new Set(t);
                    return i.has(e) ? i.delete(e) : i.add(e), i
                })
            }, y[6] = o) : o = y[6];
            let U = o;
            y[7] !== B ? (c = e => {
                B ? D(e) : U(e)
            }, y[7] = B, y[8] = c) : c = y[8];
            let R = c,
                $ = "dark" === T && "bg-black text-white";
            if (y[9] !== $ ? (d = (0, L.default)("bg-neutral-50 text-black", $), y[9] = $, y[10] = d) : d = y[10], y[11] !== k || y[12] !== T ? (m = k && (0, t.jsx)(C.default.TagHud, {
                    label: k,
                    theme: T
                }), y[11] = k, y[12] = T, y[13] = m) : m = y[13], y[14] !== w ? (u = (0, t.jsx)("h3", {
                    className: "responsive-display-4 mt-16 mb-40 text-start",
                    children: w
                }), y[14] = w, y[15] = u) : u = y[15], y[16] === Symbol.for("react.memo_cache_sentinel") ? (h = {
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: .3,
                            delayChildren: .3
                        }
                    }
                }, y[16] = h) : h = y[16], y[17] === Symbol.for("react.memo_cache_sentinel") ? (f = {
                    once: !0,
                    amount: .2
                }, y[17] = f) : f = y[17], y[18] !== N || y[19] !== R || y[20] !== B || y[21] !== V || y[22] !== _ || y[23] !== T) {
                let e;
                y[25] !== R || y[26] !== B || y[27] !== V || y[28] !== _ || y[29] !== T ? (e = (e, i) => {
                    let l = B ? _ === i : V.has(i);
                    return (0, t.jsxs)(M.motion.div, {
                        variants: {
                            hidden: {
                                opacity: 0,
                                y: 32
                            },
                            show: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: .3,
                                    ease: "easeOut"
                                }
                            }
                        },
                        className: (0, L.default)("border-b border-neutral-200 py-16", "dark" === T && "border-neutral-600", l && "pb-16"),
                        children: [(0, t.jsx)(F, {
                            block: e,
                            theme: T,
                            isOpen: l,
                            index: i,
                            onBlockClick: R
                        }), (0, t.jsx)(E, {
                            block: e,
                            theme: T,
                            isOpen: l
                        }), (0, t.jsx)(O, {
                            block: e,
                            theme: T,
                            isOpen: l,
                            index: i
                        })]
                    }, `${e.title}-${i}`)
                }, y[25] = R, y[26] = B, y[27] = V, y[28] = _, y[29] = T, y[30] = e) : e = y[30], x = N.map(e), y[18] = N, y[19] = R, y[20] = B, y[21] = V, y[22] = _, y[23] = T, y[24] = x
            } else x = y[24];
            y[31] !== x ? (g = (0, t.jsx)(M.motion.div, {
                variants: h,
                initial: "hidden",
                whileInView: "show",
                viewport: f,
                children: x
            }), y[31] = x, y[32] = g) : g = y[32], y[33] !== m || y[34] !== u || y[35] !== g ? (p = (0, t.jsxs)("div", {
                className: "col-start-1 col-end-2 flex flex-col justify-center",
                children: [m, u, g]
            }), y[33] = m, y[34] = u, y[35] = g, y[36] = p) : p = y[36];
            let W = N[_];
            return y[37] !== W || y[38] !== T ? (b = (0, t.jsx)("div", {
                className: "col-start-2 col-end-3 hidden flex-row justify-center md:flex",
                children: (0, t.jsx)("div", {
                    className: "w-full",
                    children: (0, t.jsx)("div", {
                        className: "sticky top-128 -mt-32",
                        children: (0, t.jsx)(z, {
                            selectedBlock: W,
                            theme: T
                        })
                    })
                })
            }), y[37] = W, y[38] = T, y[39] = b) : b = y[39], y[40] !== p || y[41] !== b ? (v = (0, t.jsx)(C.default.Section, {
                children: (0, t.jsxs)("div", {
                    className: "grid grid-cols-1 justify-center md:grid-cols-2 md:gap-56 lg:gap-80",
                    children: [p, b]
                })
            }), y[40] = p, y[41] = b, y[42] = v) : v = y[42], y[43] !== v || y[44] !== d ? (j = (0, t.jsx)("div", {
                "data-testid": "expandable-content-root",
                className: d,
                children: v
            }), y[43] = v, y[44] = d, y[45] = j) : j = y[45], j
        };

    function H(e) {
        return 0 === e.size ? new Set([0]) : e
    }
    e.i(375244);
    var W = e.i(37935);
    e.i(413202);
    var q = e.i(188532),
        K = e.i(780629),
        G = e.i(260144);
    e.i(643781);
    var Y = e.i(989606);
    let J = e => {
            let l, a, r, n, s, o, c = (0, i.c)(19),
                {
                    block: d,
                    theme: m
                } = e,
                u = void 0 === m ? "light" : m,
                h = "dark" === u && "border-neutral-600 bg-neutral-900",
                f = "light" === u && "border-neutral-200 bg-white";
            return c[0] !== h || c[1] !== f ? (l = (0, L.default)("relative flex flex-col gap-16 border p-16 pb-32 lg:flex-row lg:gap-0 lg:p-0 lg:pb-0", h, f), c[0] = h, c[1] = f, c[2] = l) : l = c[2], c[3] !== d.image || c[4] !== d.imageMobile ? .url || c[5] !== d.title ? (a = d.image && (0, t.jsxs)("div", {
                className: "flex flex-[1_0_33%] items-end justify-end",
                children: [(0, t.jsx)("img", {
                    src: d.imageMobile ? .url || d.image.url,
                    alt: d.title,
                    className: "h-full max-h-[162px] w-full transform object-contain object-center lg:hidden"
                }), (0, t.jsx)("img", {
                    src: d.image.url,
                    alt: d.title,
                    className: "hidden h-full max-h-[234px] w-full -translate-y-10 transform object-contain object-center lg:block"
                })]
            }), c[3] = d.image, c[4] = d.imageMobile ? .url, c[5] = d.title, c[6] = a) : a = c[6], c[7] !== d.title ? (r = (0, t.jsx)("span", {
                className: "heading-4-semi-bold",
                children: d.title
            }), c[7] = d.title, c[8] = r) : r = c[8], c[9] !== d.description || c[10] !== u ? (n = d.description && (0, t.jsx)("div", {
                className: (0, L.default)("body-1 font-normal", "dark" === u && "text-neutral-200", "light" === u && "text-neutral-800"),
                children: (0, t.jsx)(A.default, {
                    content: d.description,
                    isInsideBlockRichText: !0
                })
            }), c[9] = d.description, c[10] = u, c[11] = n) : n = c[11], c[12] !== r || c[13] !== n ? (s = (0, t.jsxs)("div", {
                className: "flex flex-col justify-center gap-4 text-center lg:py-8 lg:ps-0 lg:pe-10 lg:text-start",
                children: [r, n]
            }), c[12] = r, c[13] = n, c[14] = s) : s = c[14], c[15] !== l || c[16] !== a || c[17] !== s ? (o = (0, t.jsx)("div", {
                className: "relative max-w-(--breakpoint-sm) flex-1",
                children: (0, t.jsxs)("div", {
                    className: l,
                    children: [a, s]
                })
            }), c[15] = l, c[16] = a, c[17] = s, c[18] = o) : o = c[18], o
        },
        Q = e => {
            let l, a, r, n, s, o = (0, i.c)(14),
                {
                    sectionInformation: c,
                    theme: d
                } = e,
                m = void 0 === d ? "light" : d,
                {
                    title: u,
                    subtitle: h,
                    link: f
                } = c;
            return o[0] !== u ? (l = u && (0, t.jsx)("span", {
                className: "responsive-display-4",
                children: u
            }), o[0] = u, o[1] = l) : l = o[1], o[2] !== h || o[3] !== m ? (a = h && (0, t.jsx)("span", {
                className: (0, L.default)("heading-4", "dark" === m && "text-neutral-200", "light" === m && "text-neutral-800"),
                children: h
            }), o[2] = h, o[3] = m, o[4] = a) : a = o[4], o[5] !== l || o[6] !== a ? (r = (0, t.jsxs)("div", {
                className: "flex flex-col items-center gap-8 lg:items-start",
                children: [l, a]
            }), o[5] = l, o[6] = a, o[7] = r) : r = o[7], o[8] !== f || o[9] !== m ? (n = f ? .url && (0, t.jsx)("div", {
                className: "self-center lg:self-start",
                children: (0, t.jsx)(Y.default, {
                    label: f.label,
                    icon: f.displayAnchorArrow ? "arrowRight" : void 0,
                    variant: "dark" === m ? "primary-white" : "primary-black",
                    size: "medium",
                    href: f.url,
                    nowrap: !0
                })
            }), o[8] = f, o[9] = m, o[10] = n) : n = o[10], o[11] !== r || o[12] !== n ? (s = (0, t.jsxs)("div", {
                className: "mb-40 flex flex-col gap-24 lg:mb-80 lg:flex-row lg:justify-between lg:gap-32",
                children: [r, n]
            }), o[11] = r, o[12] = n, o[13] = s) : s = o[13], s
        },
        X = e => {
            let l, a, r, n, s, o = (0, i.c)(16),
                {
                    sectionInformation: c,
                    theme: d
                } = e,
                m = void 0 === d ? "light" : d,
                {
                    contentBlocks: u,
                    showPlusIcon: h
                } = c,
                f = "dark" === m && "bg-black text-white",
                x = "light" === m && "bg-neutral-50 text-black";
            return o[0] !== f || o[1] !== x ? (l = (0, L.default)(f, x), o[0] = f, o[1] = x, o[2] = l) : l = o[2], o[3] !== c || o[4] !== m ? (a = (0, t.jsx)(Q, {
                sectionInformation: c,
                theme: m
            }), o[3] = c, o[4] = m, o[5] = a) : a = o[5], o[6] !== u || o[7] !== h || o[8] !== m ? (r = u && u.length > 0 && (0, t.jsx)("div", {
                className: "flex flex-col items-center gap-16 lg:flex-row lg:gap-24",
                children: u.map((e, i) => (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(J, {
                        block: e,
                        theme: m
                    }, i), i < u.length - 1 && h && (0, t.jsx)("div", {
                        className: "shrink-0",
                        children: (0, t.jsx)(B.default, {
                            name: "plusCircleFilled",
                            size: 40,
                            color: "dark" === m ? "white" : "black",
                            isFilled: !0
                        })
                    })]
                }))
            }), o[6] = u, o[7] = h, o[8] = m, o[9] = r) : r = o[9], o[10] !== a || o[11] !== r ? (n = (0, t.jsxs)(C.default.Section, {
                children: [a, r]
            }), o[10] = a, o[11] = r, o[12] = n) : n = o[12], o[13] !== l || o[14] !== n ? (s = (0, t.jsx)("div", {
                className: l,
                children: n
            }), o[13] = l, o[14] = n, o[15] = s) : s = o[15], s
        };
    var Z = e.i(126019);
    let ee = "0px 1px 2px 0px rgba(0,0,0,0.06), 0px 4px 16px 0px rgba(0,0,0,0.08)",
        et = function(e) {
            let l, r, n, s, o, c, d, m, u, h, f, x = (0, i.c)(33),
                {
                    partner: g,
                    theme: p,
                    stretch: b
                } = e,
                v = (0, a.useRef)(null);
            x[0] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
                v.current && (v.current.style.boxShadow = "0px 2px 4px 0px rgba(0,0,0,0.08), 0px 8px 24px 0px rgba(0,0,0,0.12)")
            }, x[0] = l) : l = x[0];
            let j = l;
            x[1] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
                v.current && (v.current.style.boxShadow = ee)
            }, x[1] = r) : r = x[1];
            let y = r,
                w = g.logo,
                k = "light" === p ? "border-black/5" : "border-white/10";
            x[2] !== k ? (n = (0, L.default)("size-40 overflow-clip rounded-[12px] border object-contain", k), x[2] = k, x[3] = n) : n = x[3], x[4] !== g.logo || x[5] !== n ? (s = (0, t.jsx)(Z.default, {
                src: w,
                alt: "",
                width: 40,
                height: 40,
                className: n
            }), x[4] = g.logo, x[5] = n, x[6] = s) : s = x[6];
            let N = "light" === p ? "text-neutral-800" : "text-white";
            x[7] !== N ? (o = (0, L.default)("body-3 text-center whitespace-nowrap", N), x[7] = N, x[8] = o) : o = x[8], x[9] !== g.name || x[10] !== o ? (c = (0, t.jsx)("span", {
                className: o,
                children: g.name
            }), x[9] = g.name, x[10] = o, x[11] = c) : c = x[11], x[12] !== s || x[13] !== c ? (d = (0, t.jsxs)("div", {
                className: "flex flex-col items-center gap-8 px-8 pt-16 pb-12",
                children: [s, c]
            }), x[12] = s, x[13] = c, x[14] = d) : d = x[14];
            let S = d,
                T = "light" === p,
                M = b ? "min-w-0 flex-1" : "w-[138px] shrink-0",
                C = T ? "border-neutral-200 bg-white md:hover:border-neutral-400" : "border-neutral-600 bg-neutral-950 md:hover:border-neutral-400";
            x[15] !== M || x[16] !== C ? (m = (0, L.default)("flex h-[104px] items-center justify-center rounded-[16px] border transition-all duration-300", M, C), x[15] = M, x[16] = C, x[17] = m) : m = x[17];
            let I = m;
            x[18] !== T ? (u = T ? {
                boxShadow: ee
            } : void 0, x[18] = T, x[19] = u) : u = x[19];
            let B = u;
            x[20] !== T ? (h = T ? {
                onMouseEnter: j,
                onMouseLeave: y
            } : void 0, x[20] = T, x[21] = h) : h = x[21];
            let F = h;
            if (g.href) {
                let e;
                return x[22] !== I || x[23] !== S || x[24] !== F || x[25] !== g.href || x[26] !== B ? (e = (0, t.jsx)(R.default, {
                    ref: v,
                    href: g.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: I,
                    style: B,
                    ...F,
                    children: S
                }), x[22] = I, x[23] = S, x[24] = F, x[25] = g.href, x[26] = B, x[27] = e) : e = x[27], e
            }
            return x[28] !== I || x[29] !== S || x[30] !== F || x[31] !== B ? (f = (0, t.jsx)("div", {
                ref: v,
                className: I,
                style: B,
                ...F,
                children: S
            }), x[28] = I, x[29] = S, x[30] = F, x[31] = B, x[32] = f) : f = x[32], f
        },
        ei = function(e) {
            let l, r, n, s, o, c, d, m, u, h, f, x, g = (0, i.c)(24),
                {
                    partners: p,
                    theme: b
                } = e,
                v = (0, a.useRef)(null),
                j = (0, a.useRef)(null),
                y = (0, a.useRef)(null),
                w = (0, a.useRef)(!1),
                k = (0, a.useRef)(0),
                N = Math.ceil(2 * Math.max(Math.ceil(2e3 / 154), 2) / Math.max(p.length, 1));
            if (g[0] !== p || g[1] !== N) {
                let e;
                g[3] !== p ? (e = () => p, g[3] = p, g[4] = e) : e = g[4], l = Array.from({
                    length: N
                }, e).flat(), g[0] = p, g[1] = N, g[2] = l
            } else l = g[2];
            let S = l;
            g[5] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
                y.current && clearTimeout(y.current), y.current = setTimeout(() => {
                    w.current = !1
                }, 3e3)
            }, g[5] = r) : r = g[5];
            let T = r;
            g[6] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                if (j.current) return;
                let e = () => {
                    let t = v.current;
                    if (t && !w.current) {
                        t.scrollLeft = t.scrollLeft + .5, k.current = t.scrollLeft;
                        let e = t.scrollWidth / 2;
                        t.scrollLeft >= e && (t.scrollLeft = t.scrollLeft - e, k.current = t.scrollLeft)
                    }
                    j.current = requestAnimationFrame(e)
                };
                j.current = requestAnimationFrame(e)
            }, g[6] = n) : n = g[6];
            let M = n;
            g[7] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
                j.current && (cancelAnimationFrame(j.current), j.current = null)
            }, g[7] = s) : s = g[7];
            let C = s;
            g[8] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
                w.current = !0, T()
            }, g[8] = o) : o = g[8];
            let I = o;
            g[9] === Symbol.for("react.memo_cache_sentinel") ? (c = () => {
                let e = v.current;
                e && (Math.abs(e.scrollLeft - k.current) > 1.5 && (w.current = !0, T()), k.current = e.scrollLeft)
            }, g[9] = c) : c = g[9];
            let B = c;
            g[10] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
                let e = window.matchMedia("(prefers-reduced-motion: reduce)");
                e.matches || M();
                let t = e => {
                    e.matches ? C() : M()
                };
                return e.addEventListener("change", t), () => {
                    e.removeEventListener("change", t), C(), y.current && clearTimeout(y.current)
                }
            }, m = [M, C], g[10] = d, g[11] = m) : (d = g[10], m = g[11]), (0, a.useEffect)(d, m);
            let F = "light" === b ? "before:bg-linear-to-r before:from-neutral-50 before:to-neutral-50/0 after:bg-linear-to-r after:from-neutral-50/0 after:to-neutral-50" : "before:bg-linear-to-r before:from-black before:to-black/0 after:bg-linear-to-r after:from-black/0 after:to-black";
            if (g[12] !== F ? (u = (0, L.default)("relative", "before:pointer-events-none before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-[80px]", "after:pointer-events-none after:absolute after:top-0 after:right-0 after:h-full after:w-[80px]", F), g[12] = F, g[13] = u) : u = g[13], g[14] !== S || g[15] !== b) {
                let e;
                g[17] !== b ? (e = (e, i) => (0, t.jsx)("div", {
                    className: "shrink-0",
                    children: (0, t.jsx)(et, {
                        partner: e,
                        theme: b
                    })
                }, `${e.name}-${i}`), g[17] = b, g[18] = e) : e = g[18], h = S.map(e), g[14] = S, g[15] = b, g[16] = h
            } else h = g[16];
            return g[19] !== h ? (f = (0, t.jsx)("div", {
                ref: v,
                className: "no-scrollbar flex gap-16 overflow-x-auto",
                onTouchStart: I,
                onMouseDown: I,
                onScroll: B,
                children: h
            }), g[19] = h, g[20] = f) : f = g[20], g[21] !== u || g[22] !== f ? (x = (0, t.jsx)("div", {
                role: "region",
                "aria-label": "Partners carousel",
                className: u,
                children: f
            }), g[21] = u, g[22] = f, g[23] = x) : x = g[23], x
        };

    function el(e) {
        let l, a, r, n = (0, i.c)(12),
            {
                label: s,
                href: o,
                theme: c,
                isFull: d
            } = e;
        if ("light" === c) {
            let e;
            return n[0] !== o || n[1] !== d || n[2] !== s ? (e = (0, t.jsx)(Y.default, {
                label: s,
                variant: "secondary-black",
                href: o,
                size: "medium",
                isFull: d
            }), n[0] = o, n[1] = d, n[2] = s, n[3] = e) : e = n[3], e
        }
        let m = d && "w-full";
        return n[4] !== m ? (l = (0, L.default)("flex items-center justify-center rounded-full border border-white bg-white/10 px-24 py-12 backdrop-blur-[8px] transition-colors duration-300 hover:bg-white/20", m), n[4] = m, n[5] = l) : l = n[5], n[6] !== s ? (a = (0, t.jsx)("span", {
            className: "body-3 whitespace-nowrap text-white",
            children: s
        }), n[6] = s, n[7] = a) : a = n[7], n[8] !== o || n[9] !== l || n[10] !== a ? (r = (0, t.jsx)(R.default, {
            href: o,
            className: l,
            children: a
        }), n[8] = o, n[9] = l, n[10] = a, n[11] = r) : r = n[11], r
    }
    let ea = function(e) {
            let l, a, r, n, s, o, c, d, m, u, h, f, x = (0, i.c)(36),
                {
                    title: g,
                    subtitle: p,
                    ctaLabel: b,
                    ctaHref: v,
                    partners: j,
                    theme: y
                } = e;
            x[0] !== j ? (l = void 0 === j ? [] : j, x[0] = j, x[1] = l) : l = x[1];
            let w = l,
                k = (void 0 === y ? "light" : y) ? ? "light",
                N = "light" === k ? "bg-neutral-50" : "bg-black";
            x[2] !== N ? (a = (0, L.default)("w-full", N), x[2] = N, x[3] = a) : a = x[3];
            let S = "light" === k ? "text-black" : "text-white";
            return x[4] !== S ? (r = (0, L.default)(S), x[4] = S, x[5] = r) : r = x[5], x[6] !== g ? (n = g && (0, t.jsx)("h3", {
                className: "heading-3",
                children: g
            }), x[6] = g, x[7] = n) : n = x[7], x[8] !== k || x[9] !== p ? (s = p && (0, t.jsx)("p", {
                className: (0, L.default)("body-1 font-normal pt-16", "light" === k ? "text-neutral-800" : "text-neutral-200"),
                children: p
            }), x[8] = k, x[9] = p, x[10] = s) : s = x[10], x[11] !== n || x[12] !== s ? (o = (0, t.jsxs)("div", {
                children: [n, s]
            }), x[11] = n, x[12] = s, x[13] = o) : o = x[13], x[14] !== v || x[15] !== b || x[16] !== k ? (c = b && v && (0, t.jsx)("div", {
                className: "hidden self-start sm:block",
                children: (0, t.jsx)(el, {
                    label: b,
                    href: v,
                    theme: k
                })
            }), x[14] = v, x[15] = b, x[16] = k, x[17] = c) : c = x[17], x[18] !== o || x[19] !== c ? (d = (0, t.jsxs)("div", {
                className: "flex flex-col justify-between gap-16 sm:flex-row sm:items-start",
                children: [o, c]
            }), x[18] = o, x[19] = c, x[20] = d) : d = x[20], x[21] !== w || x[22] !== k ? (m = w.length > 0 && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    "data-testid": "small-cards-grid",
                    className: "mt-48 hidden flex-wrap gap-16 md:flex",
                    children: w.map((e, i) => (0, t.jsx)(et, {
                        partner: e,
                        theme: k,
                        stretch: w.length < 7
                    }, `${e.name}-${i}`))
                }), (0, t.jsx)("div", {
                    className: "mt-48 md:hidden",
                    children: (0, t.jsx)(ei, {
                        partners: w,
                        theme: k
                    })
                })]
            }), x[21] = w, x[22] = k, x[23] = m) : m = x[23], x[24] !== v || x[25] !== b || x[26] !== k ? (u = b && v && (0, t.jsx)("div", {
                className: "mt-32 sm:hidden",
                children: (0, t.jsx)(el, {
                    label: b,
                    href: v,
                    theme: k,
                    isFull: !0
                })
            }), x[24] = v, x[25] = b, x[26] = k, x[27] = u) : u = x[27], x[28] !== d || x[29] !== m || x[30] !== u || x[31] !== r ? (h = (0, t.jsx)(C.default.Section, {
                children: (0, t.jsxs)("div", {
                    className: r,
                    children: [d, m, u]
                })
            }), x[28] = d, x[29] = m, x[30] = u, x[31] = r, x[32] = h) : h = x[32], x[33] !== h || x[34] !== a ? (f = (0, t.jsx)("div", {
                className: a,
                children: h
            }), x[33] = h, x[34] = a, x[35] = f) : f = x[35], f
        },
        er = (0, e.i(168489).default)(() => e.A(96530), {
            loadableGenerated: {
                modules: [912393]
            },
            ssr: !1
        }),
        en = e => {
            let p, M = (0, i.c)(193),
                {
                    scrollRef: C,
                    item: L,
                    index: I,
                    dynamicContent: B,
                    buyMode: F
                } = e,
                _ = (0, a.useRef)(null),
                {
                    t: D
                } = (0, l.useTranslation)("sections"),
                {
                    variantLists: V,
                    currentVariant: P,
                    setCurrentVariant: z
                } = (0, T.usePageBuilderVariantLists)();
            M[0] === Symbol.for("react.memo_cache_sentinel") ? (p = () => {
                _ ? .current ? .scrollIntoView({
                    behavior: "smooth"
                })
            }, M[0] = p) : p = M[0];
            let O = p;
            if ("ComparisonSection" === L.type) {
                let e;
                return M[1] !== L.component ? (e = (0, t.jsx)(w.default, { ...L.component
                }), M[1] = L.component, M[2] = e) : e = M[2], e
            }
            if ("SectionFaq" === L.type) {
                let e, i = L.component;
                return M[3] !== i ? (e = (0, t.jsx)(s.default, {
                    faq: i
                }), M[3] = i, M[4] = e) : e = M[4], e
            }
            if ("SectionFeatures" === L.type) {
                let e, i, l = L.component;
                return M[5] !== D ? (e = D("featureBlocks.title"), M[5] = D, M[6] = e) : e = M[6], M[7] !== l || M[8] !== e ? (i = (0, t.jsx)(n.default, {
                    title: e,
                    featureBlocks: l
                }), M[7] = l, M[8] = e, M[9] = i) : i = M[9], i
            }
            if ("SectionSpecifications" === L.type) {
                let e, i, l = L.component;
                return M[10] !== D ? (e = D("specifications.title"), M[10] = D, M[11] = e) : e = M[11], M[12] !== l || M[13] !== e ? (i = (0, t.jsx)(r.default, {
                    title: e,
                    sectionSpecifications: l,
                    theme: "dark"
                }), M[12] = l, M[13] = e, M[14] = i) : i = M[14], i
            }
            if ("CardsBlock" === L.type) {
                let e, i = L.component;
                if ("Social Component" === i.variant) {
                    let e;
                    return M[15] !== i ? (e = (0, t.jsx)(k.default, { ...i
                    }), M[15] = i, M[16] = e) : e = M[16], e
                }
                let l = "Compact" === i.variant ? "Compact" : "Standard";
                return M[17] !== i || M[18] !== l ? (e = (0, t.jsx)(u.default, { ...i,
                    size: l
                }), M[17] = i, M[18] = l, M[19] = e) : e = M[19], e
            }
            if ("ContentBlock" === L.type) {
                let e;
                return M[20] !== I || M[21] !== L ? (e = (0, t.jsx)(b.default, {
                    index: I,
                    item: L
                }), M[20] = I, M[21] = L, M[22] = e) : e = M[22], e
            }
            if ("MarketingHeader" === L.type) {
                let e, i, l = L.component;
                if ("Small" === l.marketingPageHeaderVariant) {
                    let e, i;
                    return M[23] !== l.scrollToIndex || M[24] !== C ? (e = l.scrollToIndex ? e => (0, g.scrollTo)(e, C) : void 0, M[23] = l.scrollToIndex, M[24] = C, M[25] = e) : e = M[25], M[26] !== F || M[27] !== l.brandLogo || M[28] !== l.bulletPointsWithIcon || M[29] !== l.countdownEndDate || M[30] !== l.cta || M[31] !== l.headerDescription || M[32] !== l.loopVideo || M[33] !== l.miniTitle || M[34] !== l.queryParam || M[35] !== l.showLedgerLogo || M[36] !== l.smallVariantImage || M[37] !== l.subDescriptionLink || M[38] !== l.theme || M[39] !== l.title || M[40] !== l.videoUrl || M[41] !== e ? (i = (0, t.jsx)(m.default, {
                        title: l.title,
                        description: l.headerDescription,
                        image: l.smallVariantImage,
                        queryParam: l.queryParam,
                        subDescriptionLink: l.subDescriptionLink,
                        miniTitle: l.miniTitle,
                        cta: l.cta,
                        scrollToButton: e,
                        theme: l.theme,
                        showLedgerLogo: l.showLedgerLogo,
                        brandLogo: l.brandLogo,
                        loopVideo: l.loopVideo,
                        videoUrl: l.videoUrl,
                        countdownEndDate: l.countdownEndDate,
                        bulletPointsWithIcon: l.bulletPointsWithIcon,
                        buyMode: F
                    }), M[26] = F, M[27] = l.brandLogo, M[28] = l.bulletPointsWithIcon, M[29] = l.countdownEndDate, M[30] = l.cta, M[31] = l.headerDescription, M[32] = l.loopVideo, M[33] = l.miniTitle, M[34] = l.queryParam, M[35] = l.showLedgerLogo, M[36] = l.smallVariantImage, M[37] = l.subDescriptionLink, M[38] = l.theme, M[39] = l.title, M[40] = l.videoUrl, M[41] = e, M[42] = i) : i = M[42], i
                }
                if ("2025 Version" === l.marketingPageHeaderVariant) {
                    let e, i, a, r = l.loopVideo || void 0;
                    M[43] !== l.productVariants ? (e = l.productVariants || [], M[43] = l.productVariants, M[44] = e) : e = M[44];
                    let n = l.theme || void 0,
                        s = V ? .[0] || null,
                        o = V ? .[1] || null;
                    return M[45] !== l.scrollToIndex || M[46] !== C ? (i = l.scrollToIndex ? e => (0, g.scrollTo)(e, C) : void 0, M[45] = l.scrollToIndex, M[46] = C, M[47] = i) : i = M[47], M[48] !== l.backgroundImage || M[49] !== l.countdownEndDate || M[50] !== l.cta || M[51] !== l.ctaSecondary || M[52] !== l.description || M[53] !== l.emphasisStyle || M[54] !== l.fullScreenVisual || M[55] !== l.heroProductFeatures || M[56] !== l.highlightBlock || M[57] !== l.image || M[58] !== l.imageForMobile || M[59] !== l.imagePositionLeft || M[60] !== l.miniTitle || M[61] !== l.title || M[62] !== l.titleSize || M[63] !== l.videoUrl || M[64] !== l.videoUrlMobile || M[65] !== P || M[66] !== z || M[67] !== r || M[68] !== e || M[69] !== n || M[70] !== s || M[71] !== o || M[72] !== i ? (a = (0, t.jsx)(S.default, {
                        title: l.title,
                        titleSize: l.titleSize,
                        miniTitle: l.miniTitle,
                        description: l.description,
                        videoUrl: l.videoUrl,
                        videoUrlMobile: l.videoUrlMobile,
                        loopVideo: r,
                        emphasisStyle: l.emphasisStyle,
                        productVariants: e,
                        highlightBlock: l.highlightBlock,
                        theme: n,
                        heroProductFeatures: l.heroProductFeatures,
                        primaryVariants: s,
                        secondaryVariants: o,
                        scrollToButton: i,
                        visualPositionLeft: l.imagePositionLeft,
                        backgroundImage: l.backgroundImage,
                        fullScreenVisual: l.fullScreenVisual,
                        image: l.image,
                        imageForMobile: l.imageForMobile,
                        cta: l.cta,
                        ctaSecondary: l.ctaSecondary,
                        setCurrentVariant: z,
                        currentVariant: P,
                        countdownEndDate: l.countdownEndDate
                    }), M[48] = l.backgroundImage, M[49] = l.countdownEndDate, M[50] = l.cta, M[51] = l.ctaSecondary, M[52] = l.description, M[53] = l.emphasisStyle, M[54] = l.fullScreenVisual, M[55] = l.heroProductFeatures, M[56] = l.highlightBlock, M[57] = l.image, M[58] = l.imageForMobile, M[59] = l.imagePositionLeft, M[60] = l.miniTitle, M[61] = l.title, M[62] = l.titleSize, M[63] = l.videoUrl, M[64] = l.videoUrlMobile, M[65] = P, M[66] = z, M[67] = r, M[68] = e, M[69] = n, M[70] = s, M[71] = o, M[72] = i, M[73] = a) : a = M[73], a
                }
                return M[74] !== l.scrollToIndex || M[75] !== C ? (e = l.scrollToIndex ? e => (0, g.scrollTo)(e, C) : void 0, M[74] = l.scrollToIndex, M[75] = C, M[76] = e) : e = M[76], M[77] !== l.cta || M[78] !== l.headerDescription || M[79] !== l.image || M[80] !== l.imageForMobile || M[81] !== l.miniTitle || M[82] !== l.title || M[83] !== e ? (i = (0, t.jsx)(o.default, {
                    title: l.title,
                    miniTitle: l.miniTitle,
                    description: l.headerDescription,
                    cta: l.cta,
                    image: l.image,
                    imageForMobile: l.imageForMobile,
                    scrollToButton: e
                }), M[77] = l.cta, M[78] = l.headerDescription, M[79] = l.image, M[80] = l.imageForMobile, M[81] = l.miniTitle, M[82] = l.title, M[83] = e, M[84] = i) : i = M[84], i
            }
            if ("HighlightedDetails" === L.type) {
                let e, i = L.component;
                if (M[85] !== B || M[86] !== I) {
                    let t;
                    M[88] !== I ? (t = (e, t) => t < I && "HighlightedDetails" === e.type, M[88] = I, M[89] = t) : t = M[89], e = B.filter(t), M[85] = B, M[86] = I, M[87] = e
                } else e = M[87];
                let l = e.length;
                if ("Product Summary" === i.pageBuilderVariant) {
                    let e, l, a = i.title,
                        r = i.image;
                    return M[90] !== i.specifications ? (e = i.specifications.map(es), M[90] = i.specifications, M[91] = e) : e = M[91], M[92] !== i.buttonOverride || M[93] !== i.combinedAddToCartVariants || M[94] !== i.image || M[95] !== i.notifyMeFormName || M[96] !== i.theme || M[97] !== i.title || M[98] !== i.variantList || M[99] !== e ? (l = (0, t.jsx)(N.default, {
                        title: a,
                        image: r,
                        features: e,
                        theme: i.theme,
                        buttonOverride: i.buttonOverride,
                        combinedAddToCartVariants: i.combinedAddToCartVariants,
                        variantList: i.variantList,
                        notifyMeFormName: i.notifyMeFormName
                    }), M[92] = i.buttonOverride, M[93] = i.combinedAddToCartVariants, M[94] = i.image, M[95] = i.notifyMeFormName, M[96] = i.theme, M[97] = i.title, M[98] = i.variantList, M[99] = e, M[100] = l) : l = M[100], l
                } {
                    let e;
                    return M[101] !== F || M[102] !== i.buttonOverride || M[103] !== i.combinedAddToCartVariants || M[104] !== i.description || M[105] !== i.hideOnDesktop || M[106] !== i.highlightedBlock || M[107] !== i.image || M[108] !== i.imageMobile || M[109] !== i.link || M[110] !== i.notifyMeFormName || M[111] !== i.reviews || M[112] !== i.secondarySubtitle || M[113] !== i.specifications || M[114] !== i.subtitle || M[115] !== i.theme || M[116] !== i.title || M[117] !== i.variantList || M[118] !== l || M[119] !== I ? (e = (0, t.jsx)(c.default, {
                        buyMode: F,
                        title: i.title,
                        subtitle: i.subtitle,
                        secondarySubtitle: i.secondarySubtitle,
                        description: i.description,
                        link: i.link,
                        image: i.image,
                        imageMobile: i.imageMobile,
                        highlightedBlock: i.highlightedBlock,
                        specifications: i.specifications,
                        combinedAddToCartVariants: i.combinedAddToCartVariants,
                        reviews: i.reviews,
                        notifyMeFormName: i.notifyMeFormName,
                        variantList: i.variantList,
                        priorHighlightedBlocksCount: l,
                        index: I,
                        highlightRef: _,
                        theme: i.theme,
                        buttonOverride: i.buttonOverride,
                        hideOnDesktop: i.hideOnDesktop
                    }), M[101] = F, M[102] = i.buttonOverride, M[103] = i.combinedAddToCartVariants, M[104] = i.description, M[105] = i.hideOnDesktop, M[106] = i.highlightedBlock, M[107] = i.image, M[108] = i.imageMobile, M[109] = i.link, M[110] = i.notifyMeFormName, M[111] = i.reviews, M[112] = i.secondarySubtitle, M[113] = i.specifications, M[114] = i.subtitle, M[115] = i.theme, M[116] = i.title, M[117] = i.variantList, M[118] = l, M[119] = I, M[120] = e) : e = M[120], e
                }
            }
            if ("OffersRecap" === L.type) {
                let e, i = L.component;
                return M[121] !== F || M[122] !== i.cardSize || M[123] !== i.cta || M[124] !== i.hideOnMobile || M[125] !== i.legalDisclaimer || M[126] !== i.offerCards || M[127] !== i.products || M[128] !== i.subtitle || M[129] !== i.theme || M[130] !== i.title || M[131] !== I ? (e = (0, t.jsx)(d.default, {
                    title: i.title,
                    cta: i.cta,
                    legalDisclaimer: i.legalDisclaimer,
                    subtitle: i.subtitle,
                    deprecated_products: i.products,
                    offerCards: i.offerCards,
                    scrollToHighlightedBlock: O,
                    theme: i.theme,
                    buyMode: F,
                    index: I,
                    cardSize: i.cardSize,
                    hideOnMobile: i.hideOnMobile
                }), M[121] = F, M[122] = i.cardSize, M[123] = i.cta, M[124] = i.hideOnMobile, M[125] = i.legalDisclaimer, M[126] = i.offerCards, M[127] = i.products, M[128] = i.subtitle, M[129] = i.theme, M[130] = i.title, M[131] = I, M[132] = e) : e = M[132], e
            }
            if ("ProductComparisonPage" === L.type) {
                let e, i = L.component;
                return M[133] !== F || M[134] !== i ? (e = (0, t.jsx)(v.default, { ...i,
                    dataCSOverrideId: "block-comparison",
                    buyMode: F
                }), M[133] = F, M[134] = i, M[135] = e) : e = M[135], e
            }
            if ("Reviews" === L.type) {
                let e, i = L.component;
                return M[136] !== i.testimonials || M[137] !== i.theme || M[138] !== i.title ? (e = (0, t.jsx)(j.default, {
                    testimonials: i.testimonials,
                    theme: i.theme,
                    title: i.title
                }), M[136] = i.testimonials, M[137] = i.theme, M[138] = i.title, M[139] = e) : e = M[139], e
            }
            if ("SocialAndNewsletter" === L.type) {
                let e, i = L.component;
                return M[140] !== i ? (e = (0, t.jsx)(W.default, {
                    socialAndNewsletter: i
                }), M[140] = i, M[141] = e) : e = M[141], e
            }
            if ("SectionInformation" === L.type) {
                let e = L.component;
                switch (e.sectionInformationVariant) {
                    case "Ledger Wallet Info":
                        {
                            let i, l = e.tag ? ? null;
                            return M[142] !== e.contentBlocks || M[143] !== e.disclaimer || M[144] !== e.image || M[145] !== e.subtitle || M[146] !== e.theme || M[147] !== e.title || M[148] !== l ? (i = (0, t.jsx)(q.default, {
                                title: e.title,
                                description: e.subtitle,
                                tag: l,
                                image: e.image,
                                contentBlocks: e.contentBlocks,
                                disclaimer: e.disclaimer,
                                theme: e.theme
                            }), M[142] = e.contentBlocks, M[143] = e.disclaimer, M[144] = e.image, M[145] = e.subtitle, M[146] = e.theme, M[147] = e.title, M[148] = l, M[149] = i) : i = M[149],
                            i
                        }
                    case "Ledger Wallet V4 Info":
                        {
                            let i;
                            return M[150] !== e.contentBlocks || M[151] !== e.theme ? (i = (0, t.jsx)(K.LedgerWalletInfoNew, {
                                contentBlocks: e.contentBlocks,
                                theme: e.theme
                            }), M[150] = e.contentBlocks, M[151] = e.theme, M[152] = i) : i = M[152],
                            i
                        }
                    case "KSP grid":
                        {
                            let i, l = e.theme ? ? "dark";
                            return M[153] !== e || M[154] !== l ? (i = (0, t.jsx)(h.default, {
                                sectionInformation: e,
                                theme: l
                            }), M[153] = e, M[154] = l, M[155] = i) : i = M[155],
                            i
                        }
                    case "Scrolling Spotlights":
                        {
                            let i, l = e.theme ? ? "light";
                            return M[156] !== e.contentBlocks || M[157] !== l ? (i = (0, t.jsx)(f.default, {
                                featureSpotlights: e.contentBlocks,
                                theme: l
                            }), M[156] = e.contentBlocks, M[157] = l, M[158] = i) : i = M[158],
                            i
                        }
                    case "Icon Cards [Compact]":
                    case "Icon Cards":
                        {
                            let i, l = "Icon Cards [Compact]" === e.sectionInformationVariant ? "compact" : "default",
                                a = `three-columns-${I}`;
                            return M[159] !== e.contentBlocks || M[160] !== e.theme || M[161] !== e.title || M[162] !== l || M[163] !== a ? (i = (0, t.jsx)(y.default, {
                                title: e.title,
                                sizeVariant: l,
                                contentBlocks: e.contentBlocks,
                                theme: e.theme,
                                dataCsOverrideId: a
                            }), M[159] = e.contentBlocks, M[160] = e.theme, M[161] = e.title, M[162] = l, M[163] = a, M[164] = i) : i = M[164],
                            i
                        }
                    case "Roadmap":
                        {
                            let i, l = e.theme ? ? "light";
                            return M[165] !== e.contentBlocks || M[166] !== l ? (i = (0, t.jsx)(x.default, {
                                roadmapBlocks: e.contentBlocks,
                                theme: l
                            }), M[165] = e.contentBlocks, M[166] = l, M[167] = i) : i = M[167],
                            i
                        }
                    case "Expandable Content":
                        {
                            let i, l = e.title ? ? "",
                                a = e.theme ? ? "light";
                            return M[168] !== e.contentBlocks || M[169] !== e.tag || M[170] !== l || M[171] !== a ? (i = (0, t.jsx)($, {
                                title: l,
                                tag: e.tag,
                                contentBlocks: e.contentBlocks,
                                theme: a
                            }), M[168] = e.contentBlocks, M[169] = e.tag, M[170] = l, M[171] = a, M[172] = i) : i = M[172],
                            i
                        }
                    case "Device Synergy":
                        {
                            let i;
                            return M[173] !== e ? (i = (0, t.jsx)(X, {
                                sectionInformation: e,
                                theme: e.theme
                            }), M[173] = e, M[174] = i) : i = M[174],
                            i
                        }
                    case "Small Cards Grid":
                        {
                            let i, l, a = e.title,
                                r = e.subtitle,
                                n = e.link ? .label ? ? null,
                                s = e.link ? .url ? ? null;
                            return M[175] !== e.contentBlocks ? (i = e.contentBlocks.flatMap(eo), M[175] = e.contentBlocks, M[176] = i) : i = M[176],
                            M[177] !== e.subtitle || M[178] !== e.theme || M[179] !== e.title || M[180] !== n || M[181] !== s || M[182] !== i ? (l = (0, t.jsx)(ea, {
                                title: a,
                                subtitle: r,
                                ctaLabel: n,
                                ctaHref: s,
                                partners: i,
                                theme: e.theme
                            }), M[177] = e.subtitle, M[178] = e.theme, M[179] = e.title, M[180] = n, M[181] = s, M[182] = i, M[183] = l) : l = M[183],
                            l
                        }
                }
            }
            if ("FeatureExperiment" === L.type) {
                let e;
                return M[184] !== L.component.componentId || M[185] !== L.component.featureFlagId ? (e = (0, t.jsx)(er, {
                    componentId: L.component.componentId,
                    featureFlagId: L.component.featureFlagId
                }), M[184] = L.component.componentId, M[185] = L.component.featureFlagId, M[186] = e) : e = M[186], e
            }
            if ("PictureGallery" === L.type) {
                let e, i = L.component;
                return M[187] !== i.images || M[188] !== i.subTitle || M[189] !== i.tags || M[190] !== i.theme || M[191] !== i.title ? (e = (0, t.jsx)(G.default, {
                    images: i.images,
                    theme: i.theme,
                    tags: i.tags,
                    title: i.title,
                    subTitle: i.subTitle
                }), M[187] = i.images, M[188] = i.subTitle, M[189] = i.tags, M[190] = i.theme, M[191] = i.title, M[192] = e) : e = M[192], e
            }
            return null
        };

    function es(e) {
        return e.title
    }

    function eo(e) {
        return e.title && e.image ? .url ? [{
            name: e.title,
            logo: e.image.url,
            href: e.link ? .url ? ? null
        }] : []
    }
    e.s(["default", 0, ({
        dynamicContent: e,
        buyMode: i,
        sectionRefs: l
    }) => {
        let r = (0, a.useRef)(null),
            n = e.find(e => "MarketingHeader" === e.type) ? .component,
            s = n ? .scrollToIndex ? ? void 0,
            o = 0,
            c = e.map((n, c) => {
                let d = `${c}${n.type}`;
                if ("MarketingHeader" !== n.type && n.marketingNavigationSectionId) {
                    let m = l ? .[o];
                    return o++, (0, t.jsxs)(a.Fragment, {
                        children: [c === s && (0, t.jsx)("div", {
                            ref: r
                        }), (0, t.jsx)(p.default, {
                            id: n.marketingNavigationSectionId,
                            ref: m,
                            children: (0, t.jsx)(en, {
                                scrollRef: r,
                                dynamicContent: e,
                                item: n,
                                index: c,
                                buyMode: i
                            })
                        })]
                    }, d)
                }
                return (0, t.jsxs)(a.Fragment, {
                    children: [c === s && (0, t.jsx)("div", {
                        ref: r
                    }), (0, t.jsx)(en, {
                        scrollRef: r,
                        item: n,
                        dynamicContent: e,
                        index: c,
                        buyMode: i
                    })]
                }, d)
            });
        return (0, t.jsx)(t.Fragment, {
            children: c
        })
    }], 357638)
}]);

//# sourceMappingURL=16wo8958qfxg7.js.map