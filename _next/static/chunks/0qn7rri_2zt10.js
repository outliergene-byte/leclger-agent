(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 937412, 339668, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(870155),
        i = e.i(495854);
    e.i(828684);
    var r = e.i(454720),
        s = e.i(126019);
    e.i(108399);
    var n = e.i(860231),
        d = e.i(41158);

    function o(e) {
        let l, r, o, c, u, m, f, h, x, p, v = (0, a.c)(25),
            {
                image: g,
                hideImageMobile: b,
                text: j,
                subText: y,
                hasDrawer: w,
                link: k,
                isClickable: N
            } = e;
        return v[0] !== b || v[1] !== g ? (l = g && "object" == typeof g && (0, t.jsx)(s.default, {
            src: g.url,
            alt: g.title || "",
            height: 40,
            width: 40,
            className: (0, i.default)("md:flex", b && "hidden")
        }), v[0] = b, v[1] = g, v[2] = l) : l = v[2], v[3] !== g ? (r = "string" == typeof g && (0, t.jsx)(n.default, {
            name: g,
            size: 20,
            strokeWidth: 3.5
        }), v[3] = g, v[4] = r) : r = v[4], v[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, i.default)("flex flex-col items-start gap-1"), c = (0, i.default)("text-start"), v[5] = o, v[6] = c) : (o = v[5], c = v[6]), v[7] !== j ? (u = (0, t.jsx)("span", {
            className: c,
            children: j
        }), v[7] = j, v[8] = u) : u = v[8], v[9] !== y ? (m = y && (0, t.jsx)("span", {
            className: (0, i.default)("text-start"),
            children: y
        }), v[9] = y, v[10] = m) : m = v[10], v[11] !== w || v[12] !== k ? (f = !w && k ? .url && (0, t.jsx)(d.default, {
            href: k.url,
            className: "underline",
            children: k.label
        }), v[11] = w, v[12] = k, v[13] = f) : f = v[13], v[14] !== u || v[15] !== m || v[16] !== f ? (h = (0, t.jsxs)("div", {
            className: o,
            children: [u, m, f]
        }), v[14] = u, v[15] = m, v[16] = f, v[17] = h) : h = v[17], v[18] !== N ? (x = N && (0, t.jsx)("span", {
            className: "ms-auto",
            children: (0, t.jsx)(n.default, {
                name: "arrowRight",
                size: 20,
                strokeWidth: 3.5
            })
        }), v[18] = N, v[19] = x) : x = v[19], v[20] !== l || v[21] !== r || v[22] !== h || v[23] !== x ? (p = (0, t.jsxs)(t.Fragment, {
            children: [l, r, h, x]
        }), v[20] = l, v[21] = r, v[22] = h, v[23] = x, v[24] = p) : p = v[24], p
    }
    e.s(["default", 0, e => {
        var s;
        let n, d, c, u, m, f, h = (0, a.c)(37),
            {
                text: x,
                subText: p,
                link: v,
                image: g,
                theme: b,
                isFull: j,
                hideImageMobile: y,
                textSize: w,
                onClick: k
            } = e,
            N = void 0 === b ? "light" : b,
            C = void 0 !== y && y;
        h[0] !== x ? (n = (0, l.default)(x, {
            font: "bold"
        }), h[0] = x, h[1] = n) : n = h[1];
        let T = n;
        h[2] !== p ? (d = (0, l.default)(p, {
            font: "bold"
        }), h[2] = p, h[3] = d) : d = h[3];
        let S = d;
        if (!x) return null;
        h[4] !== v ? (c = !!((s = v) && s.dynamicDrawerContent && s.dynamicDrawerContent.length > 0), h[4] = v, h[5] = c) : c = h[5];
        let z = c,
            I = !!(z || k),
            _ = I && "cursor-pointer",
            V = "light" === N ? "border-neutral-200 bg-white" : "border-neutral-600 bg-neutral-900 text-white",
            P = void 0 !== j && j ? "w-full justify-start" : "w-fit",
            O = "caption" === (void 0 === w ? "sm" : w) ? "body-3" : "text-sm";
        h[6] !== P || h[7] !== O || h[8] !== _ || h[9] !== V ? (u = (0, i.default)("flex items-center justify-center gap-4 rounded-xs border px-16 py-8", _, V, P, O), h[6] = P, h[7] = O, h[8] = _, h[9] = V, h[10] = u) : u = h[10];
        let F = u,
            L = "dark" === N ? "dark" : "light";
        if (z) {
            let e, a, l = v.label ? ? x;
            return h[11] !== T || h[12] !== S || h[13] !== z || h[14] !== C || h[15] !== g || h[16] !== I || h[17] !== v ? (e = (0, t.jsx)(o, {
                hasDrawer: z,
                isClickable: I,
                image: g,
                link: v,
                hideImageMobile: C,
                text: T,
                subText: S
            }), h[11] = T, h[12] = S, h[13] = z, h[14] = C, h[15] = g, h[16] = I, h[17] = v, h[18] = e) : e = h[18], h[19] !== F || h[20] !== L || h[21] !== v.dynamicDrawerContent || h[22] !== l || h[23] !== e ? (a = (0, t.jsx)(r.default, {
                label: l,
                dynamicDrawerContent: v.dynamicDrawerContent,
                drawerTheme: L,
                buttonClassname: F,
                dataCsOverrideId: void 0,
                children: e
            }), h[19] = F, h[20] = L, h[21] = v.dynamicDrawerContent, h[22] = l, h[23] = e, h[24] = a) : a = h[24], a
        }
        return h[25] !== T || h[26] !== S || h[27] !== z || h[28] !== C || h[29] !== g || h[30] !== I || h[31] !== v ? (m = (0, t.jsx)(o, {
            hasDrawer: z,
            isClickable: I,
            image: g,
            link: v,
            hideImageMobile: C,
            text: T,
            subText: S
        }), h[25] = T, h[26] = S, h[27] = z, h[28] = C, h[29] = g, h[30] = I, h[31] = v, h[32] = m) : m = h[32], h[33] !== F || h[34] !== k || h[35] !== m ? (f = (0, t.jsx)("div", {
            className: F,
            onClick: k,
            children: m
        }), h[33] = F, h[34] = k, h[35] = m, h[36] = f) : f = h[36], f
    }], 339668), e.s([], 937412)
}, 536168, 482441, 310047, 452693, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(79564),
        i = e.i(620391),
        r = e.i(191788),
        s = e.i(198311),
        n = e.i(495854);
    e.i(643781);
    var d = e.i(989606);
    e.i(366539);
    var o = e.i(150077);
    e.i(664157);
    var c = e.i(271179),
        u = e.i(660600),
        m = e.i(767574),
        f = e.i(264516),
        h = e.i(985129);
    let x = e => {
            let l, i, r = (0, a.c)(9),
                {
                    variants: s,
                    theme: d
                } = e,
                {
                    t: o
                } = (0, c.useTranslation)("common");
            if (r[0] !== o || r[1] !== d || r[2] !== s) {
                let e;
                r[4] !== o || r[5] !== d ? (e = e => {
                    let a = (0, m.default)(e.sku),
                        l = !e.availableForSale;
                    return (0, t.jsx)(u.ListboxOption, {
                        value: e,
                        disabled: l,
                        className: e => {
                            let {
                                disabled: t,
                                selected: a
                            } = e;
                            return (0, n.default)("flex cursor-pointer items-center gap-8 rounded-sm border p-8 text-neutral-800", "light" === d ? "border-neutral-100 bg-white text-black hover:border-neutral-200 hover:bg-neutral-50" : "border-neutral-600 bg-neutral-900 text-white hover:bg-neutral-800 lg:border-neutral-100 lg:bg-white lg:text-black lg:hover:border-neutral-200 lg:hover:bg-neutral-50", t && "pointer-events-none opacity-40", a && "border-neutral-100", a && "dark" === d && "border-neutral-200 bg-neutral-800 lg:border-neutral-200 lg:bg-neutral-50", a && "light" === d && "border-neutral-200 bg-neutral-50")
                        },
                        children: i => {
                            let {
                                selected: r
                            } = i;
                            return (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("div", {
                                    children: (0, t.jsx)(h.default, {
                                        colorName: o(`variantColors.${(0,f.toCamelCase)(e.title)}`),
                                        colorClassName: a.colorClass,
                                        isSelected: r,
                                        isOutOfStock: l
                                    })
                                }), (0, t.jsx)("div", {
                                    "data-testid": "nav-color-swatch",
                                    children: o(`variantColors.${(0,f.toCamelCase)(e.title)}`)
                                })]
                            })
                        }
                    }, e.id)
                }, r[4] = o, r[5] = d, r[6] = e) : e = r[6], l = s.filter(v).map(e), r[0] = o, r[1] = d, r[2] = s, r[3] = l
            } else l = r[3];
            return r[7] !== l ? (i = (0, t.jsx)(t.Fragment, {
                children: l
            }), r[7] = l, r[8] = i) : i = r[8], i
        },
        p = e => {
            let l, i, r, s, d, o, p, v, g = (0, a.c)(23),
                {
                    variants: b,
                    currentVariant: j,
                    onChange: y,
                    theme: w
                } = e,
                k = void 0 === w ? "light" : w,
                {
                    t: N
                } = (0, c.useTranslation)("common");
            g[0] !== j.sku ? (l = (0, m.default)(j.sku), g[0] = j.sku, g[1] = l) : l = g[1];
            let C = l;
            g[2] !== j.title ? (i = (0, f.toCamelCase)(j.title), g[2] = j.title, g[3] = i) : i = g[3];
            let T = `variantColors.${i}`;
            g[4] !== N || g[5] !== T ? (r = N(T), g[4] = N, g[5] = T, g[6] = r) : r = g[6];
            let S = C ? .colorClass ? ? "";
            g[7] !== r || g[8] !== S ? (s = (0, t.jsx)(u.ListboxButton, {
                children: (0, t.jsx)(h.default, {
                    isSelected: !0,
                    colorName: r,
                    colorClassName: S
                })
            }), g[7] = r, g[8] = S, g[9] = s) : s = g[9];
            let z = "light" === k ? "bg-white" : "bg-neutral-900 lg:bg-white";
            return g[10] !== z ? (d = (0, n.default)("fixed bottom-[73px] left-0 z-40 flex w-full flex-col gap-8 overflow-hidden rounded-t-2xl bg-white p-16 body-1 font-normal", "lg:absolute lg:-left-80 lg:top-32 lg:h-fit lg:w-fit lg:min-w-max lg:rounded-xs lg:p-8", z), g[10] = z, g[11] = d) : d = g[11], g[12] !== k || g[13] !== b ? (o = (0, t.jsx)(x, {
                variants: b,
                theme: k
            }), g[12] = k, g[13] = b, g[14] = o) : o = g[14], g[15] !== o || g[16] !== d ? (p = (0, t.jsx)(u.ListboxOptions, {
                "data-testid": "variant-selector-navigation-swatches",
                className: d,
                children: o
            }), g[15] = o, g[16] = d, g[17] = p) : p = g[17], g[18] !== j || g[19] !== y || g[20] !== p || g[21] !== s ? (v = (0, t.jsxs)(u.Listbox, {
                as: "div",
                "data-testid": "variant-selector-navigation",
                value: j,
                onChange: y,
                className: "flex justify-center",
                children: [s, p]
            }), g[18] = j, g[19] = y, g[20] = p, g[21] = s, g[22] = v) : v = g[22], v
        };

    function v(e) {
        let {
            sku: t
        } = e;
        return (0, m.default)(t)
    }
    e.i(544063);
    var g = e.i(525487),
        b = e.i(455108),
        j = e.i(9446),
        y = e.i(766442),
        w = e.i(212376);
    let k = {
            hidden: {
                opacity: 0,
                y: -24,
                scale: .98,
                transition: {
                    duration: .22,
                    ease: [.4, 0, 1, 1]
                }
            },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: .52,
                    ease: [.34, 1.56, .64, 1]
                }
            }
        },
        N = e => {
            let l, i, u, m, f, h, x, v, N, S, z, I, _, V, P, O, F, L, R, E, M = (0, a.c)(64),
                {
                    theme: D,
                    product: A,
                    overrideTitle: B,
                    currentVariant: $,
                    variants: H,
                    setCurrentVariant: W,
                    onVariantChange: U,
                    navigation: J,
                    sectionRefs: q,
                    overrideButton: Q,
                    overrideButtonAnchorScroll: G,
                    addToCart: X
                } = e,
                {
                    t: Y
                } = (0, c.useTranslation)("common"),
                {
                    isUSAvailable: K
                } = (0, y.default)(),
                {
                    isDeviceAvailable: Z
                } = (0, w.default)(),
                [ee, et] = (0, r.useState)(!1),
                [ea, el] = (0, r.useState)("");
            M[0] !== $ || M[1] !== Z || M[2] !== K ? (l = $ && $.availableForSale && K($.id) && Z($.sku), M[0] = $, M[1] = Z, M[2] = K, M[3] = l) : l = M[3];
            let ei = l,
                er = (E = q.map(e => e ? .current ? .id), J.filter(({
                    url: e
                }) => e && E.includes(e.replace("#", "")))),
                es = "dark" === D ? "text-white" : "text-black",
                en = H ? .length && $ && W;
            M[4] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
                let e = () => {
                    window.scrollY > 500 ? et(!0) : et(!1)
                };
                return window.addEventListener("scroll", e), () => {
                    window.removeEventListener("scroll", e)
                }
            }, u = [], M[4] = i, M[5] = u) : (i = M[4], u = M[5]), (0, r.useEffect)(i, u), M[6] !== J || M[7] !== q ? (m = () => {
                if (!J && !q) return;
                let e = new IntersectionObserver(e => {
                    let t = e.filter(C);
                    t.length > 0 ? el(t.reduce(T).target.id) : el("")
                }, {
                    root: null,
                    rootMargin: "-30% 0% -70% 0%",
                    threshold: 0
                });
                return q ? .forEach(t => {
                    t.current && e.observe(t.current)
                }), () => {
                    q ? .forEach(t => {
                        t.current && e.unobserve(t.current)
                    })
                }
            }, M[6] = J, M[7] = q, M[8] = m) : m = M[8], M[9] === Symbol.for("react.memo_cache_sentinel") ? (f = [], M[9] = f) : f = M[9], (0, r.useEffect)(m, f), M[10] !== q ? (h = (e, t) => {
                let a = q ? .find(e => e.current && e.current.id === t);
                a ? (0, j.scrollTo)(e, a) : history.pushState(null, "", e.currentTarget.href)
            }, M[10] = q, M[11] = h) : h = M[11];
            let ed = h,
                eo = !ee && "pointer-events-none";
            M[12] !== eo ? (x = (0, n.default)("md:z-navigation fixed bottom-0 left-0 z-30 hidden w-full lg:top-16 lg:bottom-auto lg:left-1/2 lg:block lg:w-[calc(100%_-_var(--spacing-16)_-_var(--spacing-16))] lg:max-w-(--breakpoint-2xl) lg:-translate-x-1/2", eo), M[12] = eo, M[13] = x) : x = M[13];
            let ec = s.motion,
                eu = ee && "opacity-100",
                em = "light" === D ? "border-t-neutral-200 bg-white lg:bg-white/80" : "border-t-neutral-800 bg-neutral-900 lg:bg-neutral-900/80";
            M[14] !== es || M[15] !== eu || M[16] !== em ? (v = (0, n.default)("w-full border-t py-8 drop-shadow-lg lg:rounded-[24px] lg:border-0 lg:py-0 lg:pr-16 lg:pl-24 lg:backdrop-blur-xl", eu, em, es), M[14] = es, M[15] = eu, M[16] = em, M[17] = v) : v = M[17];
            let ef = ee ? "visible" : "hidden",
                eh = b.default;
            M[18] !== es ? (N = (0, n.default)("body-3 lg:heading-4-semi-bold hidden overflow-hidden !text-nowrap text-ellipsis lg:block", es), M[18] = es, M[19] = N) : N = M[19];
            let ex = A ? .title || B;
            M[20] !== N || M[21] !== ex ? (S = (0, t.jsx)("div", {
                className: N,
                children: ex
            }), M[20] = N, M[21] = ex, M[22] = S) : S = M[22], M[23] !== es || M[24] !== $ || M[25] !== en ? (z = en ? (0, t.jsx)("div", {
                className: (0, n.default)("flex min-h-56 min-w-[80px] lg:hidden lg:min-h-full", es),
                "data-testid": "priceDisplay",
                children: (0, t.jsx)(o.default, {
                    size: "small",
                    direction: "vertical-reversed",
                    variant: $
                })
            }) : null, M[23] = es, M[24] = $, M[25] = en, M[26] = z) : z = M[26], M[27] !== S || M[28] !== z ? (I = (0, t.jsxs)("div", {
                className: "max-w-[190px] sm:max-w-min",
                children: [S, z]
            }), M[27] = S, M[28] = z, M[29] = I) : I = M[29];
            let ep = er && (0, t.jsx)("ul", {
                className: "col-span-3 hidden grow flex-row justify-center lg:flex",
                children: er.map((e, a) => e.url && (0, t.jsx)("li", {
                    children: (0, t.jsx)("a", {
                        href: e.url,
                        className: (0, n.default)("body-3 block h-full p-24 transition-all duration-300", "dark" === D ? "hover:bg-white/5" : "hover:bg-black/5", `#${ea}` === e.url && ("light" === D ? "tab-halo-bottom-primary" : "tab-halo-bottom-white")),
                        onClick: t => e.url && ed(t, e.url.split("#")[1]),
                        "data-cs-override-id": `sticky-nav-${a+1}`,
                        children: e.label
                    })
                }, e.label))
            });
            return M[30] !== X || M[31] !== $ || M[32] !== en || M[33] !== ei || M[34] !== U || M[35] !== Q || M[36] !== A || M[37] !== W || M[38] !== Y || M[39] !== D || M[40] !== H ? (_ = en ? (0, t.jsxs)(t.Fragment, {
                children: [H.length > 1 && (0, t.jsx)("div", {
                    className: "me-auto md:relative lg:me-0",
                    "data-cs-override-id": "sticky-nav-variant",
                    children: (0, t.jsx)(p, {
                        variants: H,
                        currentVariant: $,
                        onChange: U || W,
                        theme: D
                    })
                }), (0, t.jsx)("div", {
                    className: "hidden lg:flex",
                    children: (0, t.jsx)(o.default, {
                        size: "small",
                        direction: "vertical",
                        variant: $,
                        center: !0
                    })
                }), !ei && A ? .notifyMeFormName && !Q ? (0, t.jsx)(g.default, {
                    formName: A.notifyMeFormName,
                    variant: $,
                    buttonSize: "medium",
                    theme: D
                }) : (0, t.jsx)(d.default, {
                    nowrap: !1,
                    size: "small",
                    label: Y(ei ? "productCards.addToCard" : "productCards.outOfStock"),
                    onClick: () => X([{
                        product: {
                            handle: $.productHandle,
                            maxQuantityAllowed: $.maxQuantityAllowed ? ? 0
                        },
                        variantId: $.id,
                        quantityToAdd: 1
                    }]),
                    isDisabled: !ei,
                    dataCsOverrideId: "sticky-nav-cta"
                })]
            }) : null, M[30] = X, M[31] = $, M[32] = en, M[33] = ei, M[34] = U, M[35] = Q, M[36] = A, M[37] = W, M[38] = Y, M[39] = D, M[40] = H, M[41] = _) : _ = M[41], M[42] !== Q || M[43] !== G ? (V = Q && (0, t.jsx)(d.default, {
                size: "small",
                label: Q.label,
                ...G && {
                    onClick: e => G(e)
                },
                href: Q.url
            }), M[42] = Q, M[43] = G, M[44] = V) : V = M[44], M[45] !== _ || M[46] !== V ? (P = (0, t.jsxs)("div", {
                className: "flex items-center justify-end gap-16",
                children: [_, V]
            }), M[45] = _, M[46] = V, M[47] = P) : P = M[47], M[48] !== I || M[49] !== ep || M[50] !== P ? (O = (0, t.jsxs)("div", {
                className: "flex items-center justify-between gap-8 xl:grid xl:grid-cols-5",
                children: [I, ep, P]
            }), M[48] = I, M[49] = ep, M[50] = P, M[51] = O) : O = M[51], M[52] !== eh.Section || M[53] !== O ? (F = (0, t.jsx)(eh.Section, {
                verticalSpacing: "none",
                as: "div",
                className: "max-w-none px-0 md:px-0 lg:px-0 xl:px-0",
                children: O
            }), M[52] = eh.Section, M[53] = O, M[54] = F) : F = M[54], M[55] !== v || M[56] !== k || M[57] !== ef || M[58] !== F || M[59] !== ec.div ? (L = (0, t.jsx)(ec.div, {
                className: v,
                variants: k,
                initial: !1,
                animate: ef,
                children: F
            }), M[55] = v, M[56] = k, M[57] = ef, M[58] = F, M[59] = ec.div, M[60] = L) : L = M[60], M[61] !== L || M[62] !== x ? (R = (0, t.jsx)("nav", {
                children: (0, t.jsx)("div", {
                    className: x,
                    children: L
                })
            }), M[61] = L, M[62] = x, M[63] = R) : R = M[63], R
        };

    function C(e) {
        return e.isIntersecting
    }

    function T(e, t) {
        return e.intersectionRatio > t.intersectionRatio ? e : t
    }
    e.i(108399);
    var S = e.i(860231);
    e.i(305231);
    var z = e.i(913473);
    e.i(831184);
    var I = e.i(229620);
    let _ = e => {
        let l, i, s, d, o = (0, a.c)(10),
            {
                children: c,
                dataCsOverrideId: u
            } = e,
            [m, f] = (0, r.useState)(!1);
        o[0] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
            if (!I.isBrowser) return;
            let e = () => {
                f(globalThis.scrollY > globalThis.innerHeight)
            };
            return e(), globalThis.addEventListener("scroll", e, {
                passive: !0
            }), () => globalThis.removeEventListener("scroll", e)
        }, i = [], o[0] = l, o[1] = i) : (l = o[0], i = o[1]), (0, r.useEffect)(l, i), o[2] !== m ? (s = (0, n.default)("z-navigation fixed right-16 bottom-16 rounded-2xl border border-neutral-300 p-12 lg:hidden", "bg-[linear-gradient(123deg,var(--color-light-grey-050-70)_0%,var(--color-light-grey-050-50)_100%)]", "shadow-lg backdrop-blur-sm", "translate-y-256 transition-transform duration-300 ease-in-out motion-reduce:transition-none", {
            "translate-y-0": m
        }), o[2] = m, o[3] = s) : s = o[3];
        let h = !m,
            x = !m;
        return o[4] !== c || o[5] !== u || o[6] !== s || o[7] !== h || o[8] !== x ? (d = (0, t.jsx)("div", {
            className: s,
            "data-cs-override-id": u,
            "aria-hidden": h,
            inert: x,
            children: c
        }), o[4] = c, o[5] = u, o[6] = s, o[7] = h, o[8] = x, o[9] = d) : d = o[9], d
    };
    e.s(["default", 0, _], 482441), e.s([], 310047);
    let V = e => {
        let l, i, r, s, n, d, o, u = (0, a.c)(24),
            {
                currentVariant: m,
                variants: f,
                setCurrentVariant: h,
                onVariantChange: x,
                addToCart: p
            } = e,
            {
                t: v
            } = (0, c.useTranslation)("common"),
            {
                isUSAvailable: g
            } = (0, y.default)(),
            {
                isDeviceAvailable: b
            } = (0, w.default)(),
            j = f ? .length && m && h;
        u[0] !== m || u[1] !== b || u[2] !== g ? (l = !!m && m.availableForSale && g(m.id) && b(m.sku), u[0] = m, u[1] = b, u[2] = g, u[3] = l) : l = u[3];
        let k = l;
        if (!j) return null;
        u[4] !== m || u[5] !== x || u[6] !== h || u[7] !== f ? (i = f.length > 1 && (0, t.jsx)(z.default, {
            currentVariant: m,
            onChange: x || h,
            variants: f,
            theme: "light",
            colorDot: !0,
            size: "small",
            dataCsOverrideId: "sticky-nav-variant"
        }), u[4] = m, u[5] = x, u[6] = h, u[7] = f, u[8] = i) : i = u[8], u[9] !== p || u[10] !== m.id || u[11] !== m.maxQuantityAllowed || u[12] !== m.productHandle ? (r = () => p([{
            product: {
                handle: m.productHandle,
                maxQuantityAllowed: m.maxQuantityAllowed ? ? 0
            },
            variantId: m.id,
            quantityToAdd: 1
        }]), u[9] = p, u[10] = m.id, u[11] = m.maxQuantityAllowed, u[12] = m.productHandle, u[13] = r) : r = u[13];
        let N = !k;
        return u[14] !== v ? (s = v("addToCart"), u[14] = v, u[15] = s) : s = u[15], u[16] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(S.default, {
            name: "basketPutIn",
            size: 20,
            color: "white"
        }), u[16] = n) : n = u[16], u[17] !== r || u[18] !== N || u[19] !== s ? (d = (0, t.jsx)("button", {
            type: "button",
            onClick: r,
            disabled: N,
            className: "flex items-center justify-center rounded-full bg-black px-16 py-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:bg-neutral-600",
            "aria-label": s,
            "data-cs-override-id": "sticky-nav-cta",
            children: n
        }), u[17] = r, u[18] = N, u[19] = s, u[20] = d) : d = u[20], u[21] !== i || u[22] !== d ? (o = (0, t.jsx)("nav", {
            children: (0, t.jsx)(_, {
                dataCsOverrideId: "marketing-navigation-mobile",
                children: (0, t.jsxs)("div", {
                    className: "flex items-center justify-between gap-32",
                    children: [i, d]
                })
            })
        }), u[21] = i, u[22] = d, u[23] = o) : o = u[23], o
    };

    function P(e) {
        return e.id
    }
    e.s(["default", 0, e => {
        let r, s, n, d, o, c = (0, a.c)(25),
            {
                navigation: u,
                currentVariant: m,
                product: f,
                variants: h,
                setCurrentVariant: x,
                onVariantChange: p,
                theme: v,
                overrideButton: g,
                overrideButtonAnchorScroll: b,
                overrideTitle: j,
                sectionRefs: y
            } = e,
            w = void 0 === v ? "dark" : v;
        c[0] === Symbol.for("react.memo_cache_sentinel") ? (r = {
            placement: "marketingNavigation"
        }, c[0] = r) : r = c[0];
        let {
            add: k
        } = (0, l.default)(r);
        c[1] !== h ? (s = h ? .map(P) || [], c[1] = h, c[2] = s) : s = c[2];
        let C = s;
        return (0, i.usePrefetchLocalisedPrices)(C), c[3] !== k || c[4] !== m || c[5] !== u || c[6] !== p || c[7] !== g || c[8] !== b || c[9] !== j || c[10] !== f || c[11] !== y || c[12] !== x || c[13] !== w || c[14] !== h ? (n = (0, t.jsx)(N, {
            theme: w,
            product: f,
            overrideTitle: j,
            currentVariant: m,
            variants: h,
            setCurrentVariant: x,
            onVariantChange: p,
            navigation: u,
            sectionRefs: y,
            overrideButton: g,
            overrideButtonAnchorScroll: b,
            addToCart: k
        }), c[3] = k, c[4] = m, c[5] = u, c[6] = p, c[7] = g, c[8] = b, c[9] = j, c[10] = f, c[11] = y, c[12] = x, c[13] = w, c[14] = h, c[15] = n) : n = c[15], c[16] !== k || c[17] !== m || c[18] !== p || c[19] !== x || c[20] !== h ? (d = (0, t.jsx)(V, {
            currentVariant: m,
            variants: h,
            setCurrentVariant: x,
            onVariantChange: p,
            addToCart: k
        }), c[16] = k, c[17] = m, c[18] = p, c[19] = x, c[20] = h, c[21] = d) : d = c[21], c[22] !== n || c[23] !== d ? (o = (0, t.jsxs)(t.Fragment, {
            children: [n, d]
        }), c[22] = n, c[23] = d, c[24] = o) : o = c[24], o
    }], 452693), e.s([], 536168)
}, 393783, 748016, 883820, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576);
    e.i(664157);
    var l = e.i(271179),
        i = e.i(191788);
    let r = e => {
        let l, i, r, s, n = (0, a.c)(10),
            {
                number: d,
                label: o
            } = e;
        n[0] !== o || n[1] !== d ? (l = "days" === o ? d.toString() : d.toString().padStart(2, "0"), n[0] = o, n[1] = d, n[2] = l) : l = n[2];
        let c = l;
        return n[3] !== c ? (i = (0, t.jsx)("span", {
            className: "responsive-display-4",
            children: c
        }), n[3] = c, n[4] = i) : i = n[4], n[5] !== o ? (r = (0, t.jsx)("span", {
            className: "heading-4-semi-bold",
            children: o
        }), n[5] = o, n[6] = r) : r = n[6], n[7] !== i || n[8] !== r ? (s = (0, t.jsxs)("div", {
            className: "flex items-center gap-8 text-white",
            children: [i, r]
        }), n[7] = i, n[8] = r, n[9] = s) : s = n[9], s
    };
    e.s(["default", 0, e => {
        let s, n, d, o, c, u, m, f, h, x, p, v, g, b, j, y = (0, a.c)(35),
            {
                countdownEndDate: w
            } = e,
            {
                t: k
            } = (0, l.useTranslation)("common");
        y[0] !== w ? (s = () => {
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
        }, y[0] = w, y[1] = s) : s = y[1];
        let N = s;
        y[2] !== N ? (n = N(), y[2] = N, y[3] = n) : n = y[3];
        let [C, T] = (0, i.useState)(n);
        y[4] !== N ? (d = () => {
            let e = setInterval(() => {
                T(N())
            }, 1e3);
            return () => clearInterval(e)
        }, y[4] = N, y[5] = d) : d = y[5], y[6] !== w ? (o = [w], y[6] = w, y[7] = o) : o = y[7], (0, i.useEffect)(d, o), y[8] !== k ? (c = (e, t) => k(`countdown.${e}`, {
            count: t
        }), y[8] = k, y[9] = c) : c = y[9];
        let S = c;
        y[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("div", {
            className: "bg-grey-divider h-px w-full"
        }), y[10] = u) : u = y[10];
        let z = C.days;
        y[11] !== S || y[12] !== C.days ? (m = S("days", C.days), y[11] = S, y[12] = C.days, y[13] = m) : m = y[13], y[14] !== m || y[15] !== C.days ? (f = (0, t.jsx)(r, {
            number: z,
            label: m
        }), y[14] = m, y[15] = C.days, y[16] = f) : f = y[16], y[17] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, t.jsx)("span", {
            className: "animate-countdownBlink text-neutral-700 responsive-display-4",
            children: ":"
        }), y[17] = h) : h = y[17];
        let I = C.hours;
        y[18] !== S || y[19] !== C.hours ? (x = S("hours", C.hours), y[18] = S, y[19] = C.hours, y[20] = x) : x = y[20], y[21] !== x || y[22] !== C.hours ? (p = (0, t.jsx)(r, {
            number: I,
            label: x
        }), y[21] = x, y[22] = C.hours, y[23] = p) : p = y[23], y[24] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, t.jsx)("span", {
            className: "animate-countdownBlink text-neutral-700 responsive-display-4",
            children: ":"
        }), y[24] = v) : v = y[24];
        let _ = C.minutes;
        return y[25] !== S || y[26] !== C.minutes ? (g = S("minutes", C.minutes), y[25] = S, y[26] = C.minutes, y[27] = g) : g = y[27], y[28] !== g || y[29] !== C.minutes ? (b = (0, t.jsx)(r, {
            number: _,
            label: g
        }), y[28] = g, y[29] = C.minutes, y[30] = b) : b = y[30], y[31] !== p || y[32] !== b || y[33] !== f ? (j = (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
                children: [u, (0, t.jsx)("div", {
                    className: "pb-32 pt-32",
                    children: (0, t.jsxs)("div", {
                        className: "flex justify-center gap-8 sm:gap-40 md:gap-80",
                        children: [f, h, p, v, b]
                    })
                })]
            })
        }), y[31] = p, y[32] = b, y[33] = f, y[34] = j) : j = y[34], j
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
    var f = e.i(454720);
    let h = e => ({
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
        let l, i, r, p, v, g, b, j = (0, a.c)(26),
            {
                title: y,
                contentBlocks: w,
                theme: k,
                dataCsOverrideId: N,
                sizeVariant: C
            } = e,
            T = "compact" === C ? 24 : 48,
            S = "dark" === k ? "bg-black text-white" : "bg-neutral-50 text-black";
        j[0] !== S ? (l = (0, o.default)(S), j[0] = S, j[1] = l) : l = j[1], j[2] !== y ? (i = y && (0, t.jsx)("h3", {
            className: "responsive-display-4 mb-16 text-center",
            "data-testid": "icon-cards-title",
            children: y
        }), j[2] = y, j[3] = i) : i = j[3];
        let z = "dark" === k ? "divide-neutral-600" : "divide-neutral-200";
        if (j[4] !== z ? (r = (0, o.default)("flex flex-col max-md:divide-y md:flex-row md:divide-x md:py-32 rtl:md:divide-x-reverse", z), j[4] = z, j[5] = r) : r = j[5], j[6] !== w || j[7] !== N || j[8] !== T || j[9] !== C || j[10] !== k) {
            let e;
            j[12] !== N || j[13] !== T || j[14] !== C || j[15] !== k ? (e = (e, a) => (0, t.jsxs)("div", {
                className: (0, o.default)("flex w-full flex-col gap-16 px-40 py-32 first:ps-0 last:pe-0 max-md:px-0", !x(e) && "max-md:items-center"),
                "data-cs-override-id": N && `${N}-${a+1}`,
                children: [(0, t.jsxs)("div", {
                    className: (0, o.default)("flex", "compact" === C ? (0, o.default)("flex-row items-center gap-8", !x(e) && "justify-center") : "flex-col gap-16"),
                    children: [e.image && (0, t.jsx)(m.motion.div, { ...h(0),
                        children: (0, t.jsx)(s.default, {
                            src: e.image.url,
                            alt: e.image.title ? ? "",
                            width: T,
                            height: T,
                            "data-testid": "icon-cards-image"
                        })
                    }), (0, t.jsx)(m.motion.h4, { ...h(.15),
                        className: "heading-4-semi-bold",
                        children: e.title
                    })]
                }), e.subtitle && (0, t.jsx)(m.motion.span, { ...h(.3),
                    children: (0, t.jsx)("p", {
                        className: (0, o.default)("body-1 m-0 font-normal", "dark" === k ? "text-neutral-200" : "text-neutral-800"),
                        children: e.subtitle
                    })
                }), e.description && (0, t.jsx)(m.motion.span, { ...h(.3),
                    children: (0, t.jsx)(d.default, {
                        content: e.description,
                        className: (0, o.default)("rich-text-p:m-0 rich-text-p:heading-4", "dark" === k ? "text-neutral-200" : "text-neutral-800")
                    })
                }), e.link ? .dynamicDrawerContent && (0, t.jsx)(m.motion.span, { ...h(.3),
                    "data-testid": "icon-cards-link-to-drawer",
                    children: (0, t.jsx)(f.default, {
                        label: e.link.label,
                        dynamicDrawerContent: e.link.dynamicDrawerContent,
                        drawerTheme: k,
                        variant: "underline-body-highlight",
                        variantIcon: "arrowRight"
                    })
                }), e.link ? .url && (0, t.jsx)(m.motion.span, { ...h(.3),
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
                                color: "dark" === k ? "white" : "black"
                            })
                        })]
                    })
                })]
            }, e.title), j[12] = N, j[13] = T, j[14] = C, j[15] = k, j[16] = e) : e = j[16], p = w.map(e), j[6] = w, j[7] = N, j[8] = T, j[9] = C, j[10] = k, j[11] = p
        } else p = j[11];
        return j[17] !== r || j[18] !== p ? (v = (0, t.jsx)("div", {
            className: r,
            children: p
        }), j[17] = r, j[18] = p, j[19] = v) : v = j[19], j[20] !== i || j[21] !== v ? (g = (0, t.jsxs)(n.default.Section, {
            verticalSpacing: "none",
            children: [i, v]
        }), j[20] = i, j[21] = v, j[22] = g) : g = j[22], j[23] !== l || j[24] !== g ? (b = (0, t.jsx)("div", {
            className: l,
            "data-testid": "icon-cards",
            children: g
        }), j[23] = l, j[24] = g, j[25] = b) : b = j[25], b
    }], 748016), e.s([], 883820)
}, 747815, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(191788),
        i = e.i(648684),
        r = e.i(870155),
        s = e.i(495854);
    e.i(937412);
    var n = e.i(339668),
        d = e.i(722068),
        o = e.i(455108),
        c = e.i(126019),
        u = e.i(992219);
    let m = e => {
            let l, i, r, n, d, o, u = (0, a.c)(18),
                {
                    visualPositionLeft: m,
                    image: f,
                    imageForMobile: h,
                    theme: x
                } = e;
            if (!f) return null;
            let p = f.title || "Product image",
                v = h ? .title || p,
                g = f.url,
                b = m ? "left-0" : "right-0",
                j = h && "hidden md:block";
            u[0] !== b || u[1] !== j ? (l = (0, s.default)("absolute top-0 bottom-0 z-0 h-full w-3/5 object-cover object-right xl:w-auto xl:object-center", b, j), u[0] = b, u[1] = j, u[2] = l) : l = u[2], u[3] !== p || u[4] !== f.url || u[5] !== l ? (i = (0, t.jsx)(c.default, {
                src: g,
                alt: p,
                className: l,
                priority: !0,
                sizes: "max-height: 100vh, 100vw",
                width: 748,
                height: 600
            }), u[3] = p, u[4] = f.url, u[5] = l, u[6] = i) : i = u[6], u[7] !== h || u[8] !== v ? (r = h && (0, t.jsx)(c.default, {
                src: h.url,
                alt: v,
                className: "block h-full w-full object-contain md:hidden",
                priority: !0,
                sizes: "320px",
                width: 320,
                height: 320
            }), u[7] = h, u[8] = v, u[9] = r) : r = u[9];
            let y = "dark" === x ? "bg-linear-to-t from-black via-black/80 to-transparent" : "bg-linear-to-t from-neutral-50 via-neutral-50/90";
            return u[10] !== y ? (n = (0, s.default)("pointer-events-none absolute right-0 bottom-0 left-0 z-30 h-256 lg:hidden lg:h-256", y), u[10] = y, u[11] = n) : n = u[11], u[12] !== n ? (d = (0, t.jsx)("div", {
                className: n
            }), u[12] = n, u[13] = d) : d = u[13], u[14] !== i || u[15] !== r || u[16] !== d ? (o = (0, t.jsxs)("div", {
                className: "relative -mt-[72px] flex w-full justify-center md:static md:w-auto lg:mt-0",
                children: [i, r, d]
            }), u[14] = i, u[15] = r, u[16] = d, u[17] = o) : o = u[17], o
        },
        f = e => {
            let l, i, r, n, d = (0, a.c)(12),
                {
                    image: o,
                    imageForMobile: u
                } = e;
            if (!o) return null;
            let m = o.title || "Product image",
                f = u ? .title || m,
                h = o.url,
                x = u && "hidden lg:block";
            return d[0] !== x ? (l = (0, s.default)("block max-h-256 object-contain lg:max-h-full", x), d[0] = x, d[1] = l) : l = d[1], d[2] !== m || d[3] !== o.url || d[4] !== l ? (i = (0, t.jsx)(c.default, {
                src: h,
                alt: m,
                className: l,
                priority: !0,
                sizes: "(max-width: 748px) 100vw, 748px",
                width: 748,
                height: 600
            }), d[2] = m, d[3] = o.url, d[4] = l, d[5] = i) : i = d[5], d[6] !== u || d[7] !== f ? (r = u && (0, t.jsx)(c.default, {
                src: u.url,
                alt: f,
                className: "block w-full object-contain lg:hidden",
                priority: !0,
                sizes: "320px",
                width: 320,
                height: 320
            }), d[6] = u, d[7] = f, d[8] = r) : r = d[8], d[9] !== i || d[10] !== r ? (n = (0, t.jsxs)("div", {
                className: "relative z-10 flex justify-center lg:static",
                children: [i, r]
            }), d[9] = i, d[10] = r, d[11] = n) : n = d[11], n
        },
        h = e => {
            let l = (0, a.c)(12),
                {
                    videoUrl: i,
                    loopVideo: r,
                    welcomingVideo: n,
                    fullScreenVisual: d,
                    visualPositionLeft: o,
                    image: c,
                    imageForMobile: h,
                    theme: x
                } = e,
                p = void 0 === r || r;
            if (i && n && !d) {
                let e, a;
                return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.default)("max-h-256 w-full md:max-h-full"), l[0] = e) : e = l[0], l[1] !== p || l[2] !== i ? (a = (0, t.jsx)("div", {
                    role: "img",
                    "aria-label": "Product video",
                    children: (0, t.jsx)(u.default, {
                        className: e,
                        muted: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        source: i,
                        loop: p
                    })
                }), l[1] = p, l[2] = i, l[3] = a) : a = l[3], a
            }
            if (c) {
                let e;
                if (d) {
                    let e;
                    return l[4] !== c || l[5] !== h || l[6] !== x || l[7] !== o ? (e = (0, t.jsx)(m, {
                        visualPositionLeft: o,
                        image: c,
                        imageForMobile: h,
                        theme: x
                    }), l[4] = c, l[5] = h, l[6] = x, l[7] = o, l[8] = e) : e = l[8], e
                }
                return l[9] !== c || l[10] !== h ? (e = (0, t.jsx)(f, {
                    image: c,
                    imageForMobile: h
                }), l[9] = c, l[10] = h, l[11] = e) : e = l[11], e
            }
            return null
        };
    e.i(664157);
    var x = e.i(271179);
    e.i(366539);
    var p = e.i(150077);
    e.i(544063);
    var v = e.i(525487);
    e.i(867094);
    var g = e.i(725524);
    e.i(259936);
    var b = e.i(838779),
        j = e.i(83899);
    e.i(349837);
    var y = e.i(64498);
    e.i(643781);
    var w = e.i(989606),
        k = e.i(253770),
        N = e.i(345082),
        C = e.i(999750);
    e.i(872044);
    var T = e.i(627528),
        S = e.i(79564);

    function z(e) {
        let l, i, r = (0, a.c)(6),
            {
                scrollToButton: s,
                theme: n
            } = e,
            {
                t: d
            } = (0, x.useTranslation)("common");
        r[0] !== d ? (l = d("productCards.learnMore"), r[0] = d, r[1] = l) : l = r[1];
        let o = "light" === n ? "primary-black" : "primary-white";
        return r[2] !== s || r[3] !== l || r[4] !== o ? (i = (0, t.jsx)(w.default, {
            label: l,
            onClick: s,
            icon: "arrowDown",
            dataTestId: "marketing-page-learn-more",
            size: "medium",
            variant: o,
            dataCsOverrideId: "learnmore-anchor"
        }), r[2] = s, r[3] = l, r[4] = o, r[5] = i) : i = r[5], i
    }
    var I = e.i(766442),
        _ = e.i(212376);
    let V = e => {
        let i, r, n, d, o, c, u, m, f, h, V, P, O, F, L = (0, a.c)(62),
            {
                productVariants: R,
                currentVariant: E,
                setCurrentVariant: M,
                primaryVariants: D,
                secondaryVariants: A,
                theme: B,
                visualPositionLeft: $,
                scrollToButton: H,
                onVariantChange: W
            } = e,
            {
                t: U
            } = (0, x.useTranslation)("common");
        L[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
            placement: "marketingPageHeader"
        }, L[0] = i) : i = L[0];
        let {
            add: J
        } = (0, S.default)(i), {
            cryptoVouchers: q
        } = (0, l.useContext)(k.cryptoVouchersContext), {
            entryChannel: Q
        } = (0, l.useContext)(C.EntryChannelContext), {
            isUSAvailable: G
        } = (0, I.default)(), {
            isDeviceAvailable: X
        } = (0, _.default)(), {
            discountLabel: Y,
            shippingTag: K
        } = E, Z = (0, j.default)(E), ee = K ? .title, et = D ? .variants ? .length || A ? .variants ? .length;
        L[1] !== q.activeCryptoVouchers || L[2] !== E.id || L[3] !== Q ? (r = (0, N.default)(Q, q.activeCryptoVouchers, E.id), L[1] = q.activeCryptoVouchers, L[2] = E.id, L[3] = Q, L[4] = r) : r = L[4];
        let ea = r;
        L[5] !== W || L[6] !== M ? (n = e => {
            M(e), W ? .(e)
        }, L[5] = W, L[6] = M, L[7] = n) : n = L[7];
        let el = n,
            {
                availableForSale: ei,
                bisFormName: er,
                productHandle: es,
                maxQuantityAllowed: en,
                id: ed
            } = E;
        L[8] !== ei || L[9] !== E.sku || L[10] !== X || L[11] !== G || L[12] !== ed ? (d = ei && G(ed) && X(E.sku), L[8] = ei, L[9] = E.sku, L[10] = X, L[11] = G, L[12] = ed, L[13] = d) : d = L[13];
        let eo = d,
            ec = "light" === B ? "secondary-black" : "secondary-white";
        L[14] !== J || L[15] !== en || L[16] !== es || L[17] !== ed ? (o = () => {
            J([{
                product: {
                    handle: es,
                    maxQuantityAllowed: en
                },
                variantId: ed,
                quantityToAdd: 1
            }])
        }, L[14] = J, L[15] = en, L[16] = es, L[17] = ed, L[18] = o) : o = L[18];
        let eu = o,
            em = $ ? "md:items-end" : "md:items-start";
        return L[19] !== em ? (c = (0, s.default)("flex flex-col items-center gap-24 md:gap-32", em), L[19] = em, L[20] = c) : c = L[20], L[21] !== E || L[22] !== el || L[23] !== D || L[24] !== R || L[25] !== A || L[26] !== et || L[27] !== B || L[28] !== Y || L[29] !== $ ? (u = et && (0, t.jsxs)("div", {
            className: (0, s.default)("flex items-center gap-16", $ ? "md:items-end" : "md:items-start", A ? .variants ? .length ? "flex-col-reverse" : "flex-col md:flex-row md:items-center"),
            children: [(0, t.jsx)(g.default, {
                className: (0, s.default)("flex flex-col items-center text-right md:items-end", $ ? "md:items-end" : "md:items-start"),
                currentVariant: E,
                onChange: el,
                showColorName: !1,
                variants: R,
                primaryVariants: D,
                secondaryVariants: A,
                theme: B
            }), (0, t.jsx)(p.default, {
                size: "large",
                direction: "horizontal",
                variant: E,
                center: !0,
                showDiscount: !!Y,
                discountLabel: Y,
                theme: B
            })]
        }), L[21] = E, L[22] = el, L[23] = D, L[24] = R, L[25] = A, L[26] = et, L[27] = B, L[28] = Y, L[29] = $, L[30] = u) : u = L[30], L[31] !== ea || L[32] !== B ? (m = ea && (0, t.jsx)("div", {
            className: "w-fit shrink-0",
            children: (0, t.jsx)(T.default, {
                label: ea.cardLabel,
                theme: B,
                cryptoCurrency: ea.cryptoCurrency,
                ...ea.link && {
                    drawer: ea.link
                }
            })
        }), L[31] = ea, L[32] = B, L[33] = m) : m = L[33], L[34] !== er || L[35] !== ec || L[36] !== E || L[37] !== eu || L[38] !== eo || L[39] !== U ? (f = (0, t.jsx)("div", {
            className: "flex",
            children: !eo && er ? (0, t.jsx)(v.default, {
                formName: er,
                variant: E,
                buttonVariant: ec,
                buttonSize: "medium",
                dataCsOverrideId: "notify-me-CTA"
            }) : (0, t.jsx)(w.default, {
                size: "medium",
                label: U(eo ? "productCards.addToCard" : "productCards.outOfStock"),
                onClick: eu,
                isDisabled: !eo,
                variant: ec,
                dataTestId: "marketing-header-pdp-add-to-cart",
                dataCsOverrideId: "add-to-cart-CTA"
            })
        }), L[34] = er, L[35] = ec, L[36] = E, L[37] = eu, L[38] = eo, L[39] = U, L[40] = f) : f = L[40], L[41] !== H || L[42] !== B ? (h = H && (0, t.jsx)(z, {
            scrollToButton: H,
            theme: B
        }), L[41] = H, L[42] = B, L[43] = h) : h = L[43], L[44] !== f || L[45] !== h ? (V = (0, t.jsxs)("div", {
            className: "flex gap-16",
            children: [f, h]
        }), L[44] = f, L[45] = h, L[46] = V) : V = L[46], L[47] !== Z || L[48] !== K || L[49] !== ee ? (P = ee ? (0, t.jsx)(b.default, {
            label: K.title,
            variant: K.variant ? ? "primary",
            icon: K.icon ? ? "informationFillFlexMP"
        }) : Z ? (0, t.jsx)(b.default, {
            label: Z.batchMessage,
            icon: "informationFillFlexMP"
        }) : null, L[47] = Z, L[48] = K, L[49] = ee, L[50] = P) : P = L[50], L[51] !== E.promoInfoLink || L[52] !== E.promoInfoText || L[53] !== B ? (O = E ? .promoInfoText && (0, t.jsx)("div", {
            className: "flex justify-center md:justify-end",
            children: (0, t.jsx)(y.default, {
                promoInfoText: E.promoInfoText,
                promoInfoLink: E.promoInfoLink,
                theme: B
            })
        }), L[51] = E.promoInfoLink, L[52] = E.promoInfoText, L[53] = B, L[54] = O) : O = L[54], L[55] !== V || L[56] !== P || L[57] !== O || L[58] !== c || L[59] !== u || L[60] !== m ? (F = (0, t.jsxs)("div", {
            className: c,
            children: [u, m, V, P, O]
        }), L[55] = V, L[56] = P, L[57] = O, L[58] = c, L[59] = u, L[60] = m, L[61] = F) : F = L[61], F
    };
    var P = e.i(349057);
    let O = e => {
        let l, i, r, n, d = (0, a.c)(13),
            {
                videoUrl: o,
                videoUrlMobile: c,
                loopVideo: m,
                theme: f
            } = e,
            h = void 0 !== m && m;
        if (!o) return null;
        let x = c && "hidden md:block";
        return d[0] !== x ? (l = (0, s.default)("w-full object-cover md:absolute md:inset-0 md:h-full md:object-[60%_50%] lg:object-[55%_50%] xl:object-[40%_50%]", x), d[0] = x, d[1] = l) : l = d[1], d[2] !== h || d[3] !== l || d[4] !== o ? (i = (0, t.jsx)(u.default, {
            source: o,
            loop: h,
            playsInline: !0,
            className: l,
            autoPlay: !0,
            muted: !0
        }), d[2] = h, d[3] = l, d[4] = o, d[5] = i) : i = d[5], d[6] !== h || d[7] !== f || d[8] !== c ? (r = c && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(u.default, {
                source: c,
                loop: h,
                playsInline: !0,
                className: "-mt-[76px] w-full object-cover object-center md:hidden",
                autoPlay: !0,
                muted: !0,
                role: "image"
            }), (0, t.jsx)("div", {
                className: (0, s.default)("pointer-events-none absolute right-0 bottom-0 left-0 z-30 h-256 md:h-32 lg:hidden lg:h-256", "dark" === f ? "bg-linear-to-t from-black via-black/80 to-transparent" : "bg-linear-to-t from-neutral-50 via-neutral-50/90")
            })]
        }), d[6] = h, d[7] = f, d[8] = c, d[9] = r) : r = d[9], d[10] !== i || d[11] !== r ? (n = (0, t.jsxs)("div", {
            "aria-label": "Product video",
            className: "relative inset-0 mx-auto w-full max-w-[2000px] object-cover md:absolute md:block md:h-full",
            children: [i, r]
        }), d[10] = i, d[11] = r, d[12] = n) : n = d[12], n
    };
    var F = e.i(393783);
    let L = (0, i.cva)(["relative mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col items-center"], {
            variants: {
                theme: {
                    dark: "text-white",
                    light: "text-black"
                },
                visualPosition: {
                    left: "md:flex-row rtl:md:flex-row-reverse",
                    right: "md:flex-row-reverse rtl:md:flex-row"
                },
                fullScreenVisual: {
                    true: "",
                    false: "px-16 md:px-40 lg:px-48 xl:px-96"
                }
            },
            compoundVariants: [{
                fullScreenVisual: !0,
                visualPosition: "left",
                class: "md:pe-40 lg:pe-48 xl:pe-96"
            }, {
                fullScreenVisual: !0,
                visualPosition: "right",
                class: "md:ps-40 lg:ps-48 xl:ps-96"
            }],
            defaultVariants: {
                theme: "dark",
                visualPosition: "left",
                fullScreenVisual: !1
            }
        }),
        R = (0, i.cva)(["pointer-events-none absolute right-0 bottom-0 left-0 z-10 hidden h-3/4 lg:block"], {
            variants: {
                theme: {
                    dark: "bg-linear-to-t from-black via-black/80 to-transparent",
                    light: "bg-linear-to-t from-neutral-50 via-neutral-50/80 to-transparent"
                },
                size: {
                    small: "lg:h-32",
                    large: "lg:h-160",
                    extraLarge: "lg:h-256"
                }
            },
            defaultVariants: {
                theme: "dark",
                size: "small"
            }
        }),
        E = (0, i.cva)(["flex w-full flex-1 flex-col items-center justify-end md:min-h-[600px]", "gap-24 px-16 py-24 md:relative md:bottom-auto md:justify-center md:gap-32 md:px-0"], {
            variants: {
                visualPosition: {
                    left: "md:items-end",
                    right: "md:items-start"
                },
                fullScreenVisual: {
                    true: "z-40 -mt-[208px] md:mt-0",
                    false: ""
                }
            },
            defaultVariants: {
                visualPosition: "left",
                fullScreenVisual: !1
            }
        }),
        M = (0, i.cva)(["flex flex-col items-center gap-8 text-center"], {
            variants: {
                visualPosition: {
                    left: "md:items-end md:text-end",
                    right: "md:items-start md:text-start"
                }
            },
            defaultVariants: {
                visualPosition: "left"
            }
        }),
        D = (0, i.cva)(["flex flex-col items-center gap-8"], {
            variants: {
                visualPosition: {
                    left: "md:items-end",
                    right: "md:items-start"
                }
            },
            defaultVariants: {
                visualPosition: "left"
            }
        });
    e.s(["default", 0, e => {
        let i, u, m, f, x, p, v, g, b, j, y, k, N, C, T, S, I, _, A, B, $, H, W, U, J, q = (0, a.c)(103),
            {
                title: Q,
                titleSize: G,
                miniTitle: X,
                description: Y,
                videoUrl: K,
                videoUrlMobile: Z,
                loopVideo: ee,
                emphasisStyle: et,
                productVariants: ea,
                highlightBlock: el,
                theme: ei,
                setCurrentVariant: er,
                currentVariant: es,
                primaryVariants: en,
                secondaryVariants: ed,
                scrollToButton: eo,
                visualPositionLeft: ec,
                backgroundImage: eu,
                fullScreenVisual: em,
                image: ef,
                imageForMobile: eh,
                heroProductFeatures: ex,
                cta: ep,
                ctaSecondary: ev,
                countdownEndDate: eg
            } = e,
            eb = void 0 === G ? "responsive-display-3" : G,
            ej = void 0 === et ? "primary" : et,
            ey = void 0 === ei ? "dark" : ei,
            ew = void 0 === ec || ec,
            [ek, eN] = (0, l.useState)(!!K),
            [eC, eT] = (0, l.useState)(!!ef),
            {
                enteredViaLedgerLive: eS
            } = (0, P.default)(),
            ez = em && (ek || eC),
            eI = !!(eu || ez),
            e_ = eC ? eh : es ? .headerAssetMobile,
            eV = eC ? ef : em && K && ek ? void 0 : es ? .headerAsset,
            eP = Q || "";
        q[0] !== eP ? (i = (0, r.default)(eP, {
            style: "thin"
        }), q[0] = eP, q[1] = i) : i = q[1];
        let eO = i,
            eF = Y || "";
        q[2] !== ej || q[3] !== eF ? (u = (0, r.default)(eF, {
            style: ej
        }), q[2] = ej, q[3] = eF, q[4] = u) : u = q[4];
        let eL = u;
        q[5] === Symbol.for("react.memo_cache_sentinel") ? (m = e => {
            eN(!1), eT(!1)
        }, q[5] = m) : m = q[5];
        let eR = m,
            eE = "dark" === ey ? "bg-black" : "bg-neutral-50",
            eM = ew ? "md:items-end rtl:md:items-start rtl:md:justify-start" : "md:items-start rtl:md:items-end rtl:md:justify-end",
            eD = !ez && "md:flex-col md:justify-center",
            eA = !eS && "navigation-safe-space";
        q[6] !== eE || q[7] !== eM || q[8] !== eD || q[9] !== eA ? (f = (0, s.default)("relative md:flex md:flex-col", eE, eM, eD, eA), q[6] = eE, q[7] = eM, q[8] = eD, q[9] = eA, q[10] = f) : f = q[10], q[11] !== eu ? (x = eu && (0, t.jsx)(c.default, {
            src: eu.url,
            alt: eu.title ? ? "",
            fill: !0,
            className: (0, s.default)("absolute inset-0 hidden object-cover md:block"),
            sizes: "(max-width: 1200px) 100vw, 1200px"
        }), q[11] = eu, q[12] = x) : x = q[12], q[13] !== em || q[14] !== ee || q[15] !== ey || q[16] !== K || q[17] !== Z || q[18] !== ek ? (p = em && K && ek && (0, t.jsx)(O, {
            videoUrl: K,
            videoUrlMobile: Z,
            loopVideo: ee,
            theme: ey
        }), q[13] = em, q[14] = ee, q[15] = ey, q[16] = K, q[17] = Z, q[18] = ek, q[19] = p) : p = q[19];
        let eB = ew ? "left" : "right",
            e$ = !!ez;
        q[20] !== eB || q[21] !== e$ || q[22] !== ey ? (v = L({
            theme: ey,
            visualPosition: eB,
            fullScreenVisual: e$
        }), q[20] = eB, q[21] = e$, q[22] = ey, q[23] = v) : v = q[23];
        let eH = ek ? null : e_;
        q[24] !== eV || q[25] !== ee || q[26] !== ez || q[27] !== eH || q[28] !== ey || q[29] !== K || q[30] !== ew || q[31] !== ek ? (g = (0, t.jsx)("div", {
            className: "w-full flex-1",
            children: (0, t.jsx)(h, {
                videoUrl: K,
                visualPositionLeft: ew,
                image: eV,
                imageForMobile: eH,
                welcomingVideo: ek,
                loopVideo: ee,
                fullScreenVisual: ez,
                theme: ey
            })
        }), q[24] = eV, q[25] = ee, q[26] = ez, q[27] = eH, q[28] = ey, q[29] = K, q[30] = ew, q[31] = ek, q[32] = g) : g = q[32], q[33] !== eg || q[34] !== ez || q[35] !== ew ? (b = (0, s.default)(E({
            visualPosition: ew ? "left" : "right",
            fullScreenVisual: !!ez
        }), eg && "pb-48 lg:pb-24"), q[33] = eg, q[34] = ez, q[35] = ew, q[36] = b) : b = q[36];
        let eW = ew ? "left" : "right";
        q[37] !== eW ? (j = M({
            visualPosition: eW
        }), q[37] = eW, q[38] = j) : j = q[38], q[39] !== X || q[40] !== ey ? (y = X && (0, t.jsx)(o.default.TagHud, {
            label: X,
            size: "medium",
            theme: ey,
            variant: "purple"
        }), q[39] = X, q[40] = ey, q[41] = y) : y = q[41], q[42] !== eb ? (k = (0, s.default)(eb, "md:mb-8 md:max-w-[560px] lg:max-w-[789px] xl:max-w-full"), q[42] = eb, q[43] = k) : k = q[43], q[44] !== eO || q[45] !== k ? (N = (0, t.jsx)("h1", {
            className: k,
            children: eO
        }), q[44] = eO, q[45] = k, q[46] = N) : N = q[46];
        let eU = "dark" === ey ? "text-white" : "text-neutral-800";
        return q[47] !== eU ? (C = (0, s.default)("heading-4 flex w-auto items-center md:pr-16 [&>span]:py-0", eU), q[47] = eU, q[48] = C) : C = q[48], q[49] !== eL || q[50] !== C ? (T = (0, t.jsx)("p", {
            className: C,
            children: eL
        }), q[49] = eL, q[50] = C, q[51] = T) : T = q[51], q[52] !== j || q[53] !== y || q[54] !== N || q[55] !== T ? (S = (0, t.jsxs)("div", {
            className: j,
            children: [y, N, T]
        }), q[52] = j, q[53] = y, q[54] = N, q[55] = T, q[56] = S) : S = q[56], q[57] !== el ? (I = el ? .text && (0, t.jsx)(n.default, {
            text: el.text,
            image: el.image,
            theme: "dark",
            hideImageMobile: !0
        }), q[57] = el, q[58] = I) : I = q[58], q[59] !== es || q[60] !== en || q[61] !== ea || q[62] !== eo || q[63] !== ed || q[64] !== er || q[65] !== ey || q[66] !== ew ? (_ = es && er && (0, t.jsx)(V, {
            productVariants: ea,
            currentVariant: es,
            setCurrentVariant: er,
            primaryVariants: en,
            secondaryVariants: ed,
            theme: ey,
            visualPositionLeft: ew ? ? !0,
            scrollToButton: eo,
            onVariantChange: eR
        }), q[59] = es, q[60] = en, q[61] = ea, q[62] = eo, q[63] = ed, q[64] = er, q[65] = ey, q[66] = ew, q[67] = _) : _ = q[67], q[68] !== ep || q[69] !== ev || q[70] !== es || q[71] !== eo || q[72] !== ey ? (A = !es && (0, t.jsxs)("div", {
            className: "flex flex-wrap justify-center gap-16 md:flex-nowrap",
            children: [ep && (0, t.jsx)(w.default, {
                label: ep.label,
                href: ep.url,
                size: "medium",
                variant: "light" === ey ? "secondary-black" : "secondary-white",
                ...ep.displayDownloadIcon && {
                    icon: "download"
                }
            }), ev && !eo && (0, t.jsx)(w.default, {
                label: ev.label,
                href: ev.url,
                size: "medium",
                variant: "light" === ey ? "primary-black" : "primary-white",
                ...ev.displayDownloadIcon && {
                    icon: "download"
                }
            }), eo && (0, t.jsx)(z, {
                scrollToButton: eo,
                theme: ey
            })]
        }), q[68] = ep, q[69] = ev, q[70] = es, q[71] = eo, q[72] = ey, q[73] = A) : A = q[73], q[74] !== ex || q[75] !== ey || q[76] !== ew ? (B = ex && ex.length > 0 && (0, t.jsx)("div", {
            className: D({
                visualPosition: ew ? "left" : "right"
            }),
            children: ex.map(e => {
                let {
                    title: a,
                    icon: l
                } = e;
                return (0, t.jsx)(d.default, {
                    message: a,
                    icon: l,
                    variant: "default",
                    theme: ey,
                    size: "small"
                }, a)
            })
        }), q[74] = ex, q[75] = ey, q[76] = ew, q[77] = B) : B = q[77], q[78] !== b || q[79] !== S || q[80] !== I || q[81] !== _ || q[82] !== A || q[83] !== B ? ($ = (0, t.jsxs)("div", {
            className: b,
            children: [S, I, _, A, B]
        }), q[78] = b, q[79] = S, q[80] = I, q[81] = _, q[82] = A, q[83] = B, q[84] = $) : $ = q[84], q[85] !== v || q[86] !== g || q[87] !== $ ? (H = (0, t.jsxs)("div", {
            "data-testid": "marketing-header-container",
            className: v,
            children: [g, $]
        }), q[85] = v, q[86] = g, q[87] = $, q[88] = H) : H = q[88], q[89] !== eu || q[90] !== eg || q[91] !== eI || q[92] !== ey ? (W = eI && (0, t.jsx)("div", {
            className: R({
                theme: ey,
                size: eg ? "extraLarge" : eu ? "large" : "small"
            })
        }), q[89] = eu, q[90] = eg, q[91] = eI, q[92] = ey, q[93] = W) : W = q[93], q[94] !== eg ? (U = eg && (0, t.jsx)("div", {
            className: "z-20 w-full",
            children: (0, t.jsx)(F.default, {
                countdownEndDate: eg
            })
        }), q[94] = eg, q[95] = U) : U = q[95], q[96] !== f || q[97] !== x || q[98] !== p || q[99] !== H || q[100] !== W || q[101] !== U ? (J = (0, t.jsxs)("header", {
            className: f,
            "data-cs-override-id": "hero-block",
            children: [x, p, H, W, U]
        }), q[96] = f, q[97] = x, q[98] = p, q[99] = H, q[100] = W, q[101] = U, q[102] = J) : J = q[102], J
    }], 747815)
}, 685472, e => {
    "use strict";
    let t = e.i(462948).default;
    e.s(["default", 0, t])
}, 927947, e => {
    "use strict";
    var t = e.i(191788);
    e.s(["default", 0, (e, a, l = 200) => {
        let i = (0, t.useRef)(a);
        i.current = a, (0, t.useEffect)(() => {
            var t, a;
            let r, s, n;
            if (!e.current) return () => null;
            let d = (t = e.current, a = () => {
                i.current && i.current()
            }, r = !1, s = null, n = () => {
                s && clearTimeout(s), s = setTimeout(a, l)
            }, t.addEventListener("scroll", n), () => {
                r || (r = !0, s && clearTimeout(s), t.removeEventListener("scroll", n))
            });
            return () => d()
        })
    }])
}, 195512, 847562, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(203828),
        i = e.i(455108),
        r = e.i(799444);
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
        let d, o, c, u = (0, a.c)(8),
            {
                variants: m
            } = e,
            {
                locale: f
            } = (0, l.useRouter)(),
            h = void 0 === f ? "en" : f;
        u[0] !== m ? (d = m.map(n), u[0] = m, u[1] = d) : d = u[1];
        let {
            prices: x
        } = (0, r.default)(d);
        u[2] !== h || u[3] !== x ? (o = ((e, t) => {
            if (!(e && 0 !== e.length)) return {
                combinedPrice: null,
                combinedCompareAtPrice: null
            };
            let {
                currency: a
            } = e[0], l = e.reduce((e, {
                amount: t
            }) => e + t, 0), i = e.reduce((e, {
                compareAtAmount: t,
                amount: a
            }) => e + (t || a), 0), r = s(l, t, a);
            return l === i ? {
                combinedPrice: r,
                combinedCompareAtPrice: null
            } : {
                combinedPrice: r,
                combinedCompareAtPrice: s(i, t, a)
            }
        })(x, h), u[2] = h, u[3] = x, u[4] = o) : o = u[4];
        let {
            combinedPrice: p,
            combinedCompareAtPrice: v
        } = o;
        return u[5] !== v || u[6] !== p ? (c = p ? (0, t.jsxs)("div", {
            className: "flex items-center gap-8",
            "data-testid": "price-display",
            children: [v && (0, t.jsx)("div", {
                className: "pe-8 text-neutral-400 line-through body-1 font-normal",
                children: v
            }), (0, t.jsx)("div", {
                className: "flex flex-row flex-wrap items-center gap-x-12",
                children: (0, t.jsx)("span", {
                    "data-testid": "price-display__price",
                    className: "heading-4-semi-bold",
                    children: p
                })
            })]
        }) : (0, t.jsx)(i.default.LoadingSpinner, {
            className: "h-32 w-20 animate-spin text-white"
        }), u[5] = v, u[6] = p, u[7] = c) : c = u[7], c
    }], 847562), e.s([], 195512)
}, 849513, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(455108);
    e.i(108399);
    var i = e.i(860231);
    let r = e => {
        let l, r, s, n, d = (0, a.c)(10),
            {
                title: o,
                description: c,
                icon: u
            } = e;
        return d[0] !== u ? (l = u && (0, t.jsx)(i.default, {
            name: u,
            color: "white",
            size: 25,
            strokeWidth: 3.5
        }), d[0] = u, d[1] = l) : l = d[1], d[2] !== o ? (r = (0, t.jsx)("h3", {
            className: "mb-12 mt-20 heading-5-semi-bold",
            children: o
        }), d[2] = o, d[3] = r) : r = d[3], d[4] !== c ? (s = (0, t.jsx)("p", {
            className: "text-gray-300",
            children: c
        }), d[4] = c, d[5] = s) : s = d[5], d[6] !== l || d[7] !== r || d[8] !== s ? (n = (0, t.jsxs)("div", {
            className: "w-full rounded-xs bg-neutral-900 px-16 py-24 text-white lg:px-24 lg:py-32",
            children: [l, r, s]
        }), d[6] = l, d[7] = r, d[8] = s, d[9] = n) : n = d[9], n
    };

    function s(e) {
        let {
            title: a,
            description: l,
            icon: i
        } = e;
        return (0, t.jsx)("div", {
            className: "flex w-[85vw] shrink-0 snap-start md:h-auto md:w-full md:items-stretch",
            children: (0, t.jsx)(r, {
                title: a,
                description: l,
                icon: i
            })
        }, a)
    }
    e.s(["default", 0, e => {
        let i, r, n, d, o = (0, a.c)(9),
            {
                title: c,
                featureBlocks: u
            } = e;
        return o[0] !== c ? (i = (0, t.jsx)("h2", {
            className: "pb-48 responsive-display-4",
            children: c
        }), o[0] = c, o[1] = i) : i = o[1], o[2] !== u ? (r = u.map(s), o[2] = u, o[3] = r) : r = o[3], o[4] !== r ? (n = (0, t.jsx)("div", {
            className: "no-scrollbar flex snap-x snap-mandatory gap-16 overflow-x-scroll scroll-smooth md:grid md:grid-cols-2 md:gap-24 md:overflow-x-hidden lg:grid-cols-3",
            children: r
        }), o[4] = r, o[5] = n) : n = o[5], o[6] !== i || o[7] !== n ? (d = (0, t.jsx)("div", {
            className: "bg-black text-white",
            children: (0, t.jsxs)(l.default.Section, {
                children: [i, n]
            })
        }), o[6] = i, o[7] = n, o[8] = d) : d = o[8], d
    }], 849513)
}, 633905, 923027, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(126019);
    e.i(286941);
    var i = e.i(126762),
        r = e.i(495854),
        s = e.i(992219),
        n = e.i(455108);
    e.i(919993);
    var d = e.i(636985);
    let o = e => {
            let l, i, s = (0, a.c)(8),
                {
                    position: n,
                    animatedOnStart: d,
                    theme: o
                } = e,
                c = d && "opacity-0",
                u = "top-left" === n && "top-[23px] -ms-[7px] border-s border-t",
                m = "bottom-right" === n && "-top-[23px] float-end -me-[7px] border-e border-b",
                f = "dark" === o && "border-white",
                h = "light" === o && "border-neutral-400";
            return s[0] !== c || s[1] !== u || s[2] !== m || s[3] !== f || s[4] !== h ? (l = (0, r.default)("relative block h-[30px] w-[14px]", c, u, m, f, h), s[0] = c, s[1] = u, s[2] = m, s[3] = f, s[4] = h, s[5] = l) : l = s[5], s[6] !== l ? (i = (0, t.jsx)("div", {
                className: l
            }), s[6] = l, s[7] = i) : i = s[7], i
        },
        c = e => {
            let i, n, d, o = (0, a.c)(13),
                {
                    videoUrl: c,
                    videoMobileUrl: u,
                    videoTitle: m,
                    image: f,
                    title: h,
                    imageMobile: x,
                    theme: p
                } = e;
            return o[0] !== f || o[1] !== x || o[2] !== p || o[3] !== h || o[4] !== c ? (i = !c && f && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(l.default, {
                    src: f.url,
                    alt: h,
                    height: 640,
                    width: 568,
                    priority: !0,
                    className: (0, r.default)("h-fit border border-solid object-cover", x && "hidden md:block", "dark" === p && "border-neutral-700", "light" === p && "border-neutral-200"),
                    "data-testid": "feature-spotlight-image"
                }), x && (0, t.jsx)(l.default, {
                    src: x.url,
                    alt: h,
                    height: 376,
                    width: 333,
                    priority: !0,
                    className: (0, r.default)("border-sol block h-fit border object-cover md:hidden", "dark" === p && "border-neutral-700", "light" === p && "border-neutral-200"),
                    "data-testid": "feature-spotlight-image-mobile"
                })]
            }), o[0] = f, o[1] = x, o[2] = p, o[3] = h, o[4] = c, o[5] = i) : i = o[5], o[6] !== u || o[7] !== m || o[8] !== c ? (n = c && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(s.default, {
                    className: (0, r.default)("h-auto w-full", u && "hidden md:block"),
                    title: m ? ? void 0,
                    muted: !0,
                    playsInline: !0,
                    autoPlay: !0,
                    source: c,
                    "data-testid": "feature-spotlight-video"
                }), u && (0, t.jsx)(s.default, {
                    className: "block h-auto w-full md:hidden",
                    title: m ? ? void 0,
                    muted: !0,
                    playsInline: !0,
                    autoPlay: !0,
                    source: u,
                    "data-testid": "feature-spotlight-video-mobile"
                })]
            }), o[6] = u, o[7] = m, o[8] = c, o[9] = n) : n = o[9], o[10] !== i || o[11] !== n ? (d = (0, t.jsxs)(t.Fragment, {
                children: [i, n]
            }), o[10] = i, o[11] = n, o[12] = d) : d = o[12], d
        };
    e.s(["CornerDecoration", 0, o, "default", 0, e => {
        let l, s, u, m, f, h, x, p, v, g, b, j, y = (0, a.c)(41),
            {
                featureSpotlight: w,
                theme: k,
                isMediaOnRight: N
            } = e;
        y[0] !== w ? (l = w || {}, y[0] = w, y[1] = l) : l = y[1];
        let {
            image: C,
            imageMobile: T,
            title: S,
            subtitle: z,
            description: I,
            videoUrl: _,
            videoMobileUrl: V,
            videoTitle: P,
            link: O,
            dataCsOverrideId: F
        } = l, L = void 0 !== N && N ? "md:flex-row-reverse" : "md:flex-row", R = "dark" === k ? "text-white" : "text-neutral-800";
        return y[2] !== L || y[3] !== R ? (s = (0, r.default)("flex flex-col-reverse gap-32 md:gap-80", L, R), y[2] = L, y[3] = R, y[4] = s) : s = y[4], y[5] !== k ? (u = (0, t.jsx)(o, {
            position: "top-left",
            theme: k
        }), y[5] = k, y[6] = u) : u = y[6], y[7] !== C || y[8] !== T || y[9] !== k || y[10] !== S || y[11] !== V || y[12] !== P || y[13] !== _ ? (m = (0, t.jsx)(c, {
            videoUrl: _,
            videoMobileUrl: V,
            videoTitle: P,
            image: C,
            title: S,
            imageMobile: T,
            theme: k
        }), y[7] = C, y[8] = T, y[9] = k, y[10] = S, y[11] = V, y[12] = P, y[13] = _, y[14] = m) : m = y[14], y[15] !== k ? (f = (0, t.jsx)(o, {
            position: "bottom-right",
            theme: k
        }), y[15] = k, y[16] = f) : f = y[16], y[17] !== u || y[18] !== m || y[19] !== f ? (h = (0, t.jsxs)("div", {
            className: "-my-[23px] w-fit max-w-[343px] flex-1 self-center md:max-w-[568px]",
            children: [u, m, f]
        }), y[17] = u, y[18] = m, y[19] = f, y[20] = h) : h = y[20], y[21] !== z || y[22] !== k ? (x = z && (0, t.jsx)(n.default.TagHud, {
            label: z,
            size: "medium",
            theme: k,
            variant: "light" === k ? "grey" : "purple"
        }), y[21] = z, y[22] = k, y[23] = x) : x = y[23], y[24] !== S ? (p = (0, t.jsx)("h2", {
            className: "responsive-display-4",
            children: S
        }), y[24] = S, y[25] = p) : p = y[25], y[26] !== I ? (v = I && (0, t.jsx)(i.default, {
            content: I,
            className: "[&>p]:heading-4 [&_li]:m-0 [&_li_p]:m-0"
        }), y[26] = I, y[27] = v) : v = y[27], y[28] !== O || y[29] !== k ? (g = O && (0, t.jsx)(d.default, {
            link: O,
            theme: k
        }), y[28] = O, y[29] = k, y[30] = g) : g = y[30], y[31] !== x || y[32] !== p || y[33] !== v || y[34] !== g ? (b = (0, t.jsxs)("div", {
            className: "flex flex-1 flex-col gap-16 self-center",
            children: [x, p, v, g]
        }), y[31] = x, y[32] = p, y[33] = v, y[34] = g, y[35] = b) : b = y[35], y[36] !== F || y[37] !== b || y[38] !== s || y[39] !== h ? (j = (0, t.jsx)(n.default.Section, {
            verticalSpacing: "none",
            children: (0, t.jsxs)("div", {
                className: s,
                "data-testid": "feature-spotlight-component",
                "data-cs-override-id": F,
                children: [h, b]
            })
        }), y[36] = F, y[37] = b, y[38] = s, y[39] = h, y[40] = j) : j = y[40], j
    }], 923027), e.s([], 633905)
}, 611275, 6714, 260144, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(191788),
        i = e.i(491900),
        r = e.i(793087),
        s = e.i(498817),
        n = e.i(198311),
        d = e.i(126019),
        o = e.i(455108);
    e.i(286941);
    var c = e.i(126762),
        u = e.i(992219),
        m = e.i(923027),
        f = e.i(495854);
    e.i(919993);
    var h = e.i(636985);
    let x = e => {
            let l, i, r, s, o, c, m = (0, a.c)(22),
                {
                    videoUrl: h,
                    imageUrl: x,
                    imageTitle: p,
                    loopVideo: v,
                    theme: g
                } = e;
            if (h) {
                let e, a, l, i, r, s;
                m[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                    opacity: 0
                }, a = {
                    opacity: 1
                }, l = {
                    opacity: 0
                }, i = {
                    duration: .3
                }, m[0] = e, m[1] = a, m[2] = l, m[3] = i) : (e = m[0], a = m[1], l = m[2], i = m[3]);
                let d = "dark" === g && "border-neutral-700",
                    o = "light" === g && "border-neutral-200";
                return m[4] !== d || m[5] !== o ? (r = (0, f.default)("h-auto w-full border border-solid", d, o), m[4] = d, m[5] = o, m[6] = r) : r = m[6], m[7] !== v || m[8] !== r || m[9] !== h ? (s = (0, t.jsx)(n.motion.div, {
                    initial: e,
                    animate: a,
                    exit: l,
                    transition: i,
                    children: (0, t.jsx)(u.default, {
                        className: r,
                        muted: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        source: h,
                        height: 640,
                        width: 568,
                        loop: v
                    }, h)
                }), m[7] = v, m[8] = r, m[9] = h, m[10] = s) : s = m[10], s
            }
            m[11] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                opacity: 0
            }, i = {
                opacity: 1
            }, r = {
                opacity: 0
            }, s = {
                duration: .3
            }, m[11] = l, m[12] = i, m[13] = r, m[14] = s) : (l = m[11], i = m[12], r = m[13], s = m[14]);
            let b = "dark" === g && "border-neutral-700",
                j = "light" === g && "border-neutral-200";
            return m[15] !== b || m[16] !== j ? (o = (0, f.default)("h-auto w-full border border-solid object-cover", b, j), m[15] = b, m[16] = j, m[17] = o) : o = m[17], m[18] !== p || m[19] !== x || m[20] !== o ? (c = (0, t.jsx)(n.motion.div, {
                initial: l,
                animate: i,
                exit: r,
                transition: s,
                children: (0, t.jsx)(d.default, {
                    src: x,
                    alt: p,
                    height: 640,
                    width: 568,
                    priority: !0,
                    className: o
                })
            }), m[18] = p, m[19] = x, m[20] = o, m[21] = c) : c = m[21], c
        },
        p = e => {
            let d, u, p, v, g, b, j, y, w, k, N, C, T = (0, a.c)(43),
                {
                    content: S,
                    dataCsOverrideId: z,
                    theme: I
                } = e,
                [_, V] = (0, l.useState)(0),
                P = (0, l.useRef)(null),
                O = 1 === S.length;
            T[0] === Symbol.for("react.memo_cache_sentinel") ? (d = {
                target: P,
                offset: ["start start", "end end"]
            }, T[0] = d) : d = T[0];
            let {
                scrollYProgress: F
            } = (0, r.useScroll)(d), L = S.length;
            T[1] !== L || T[2] !== S ? (u = e => {
                let t = S.map((e, t) => t / Math.max(L - 1, 1));
                V(t.reduce((a, l, i) => Math.abs(e - l) < Math.abs(e - t[a]) ? i : a, 0))
            }, T[1] = L, T[2] = S, T[3] = u) : u = T[3], (0, i.useMotionValueEvent)(F, "change", u);
            let R = S[_] ? .videoUrl,
                E = !O && "h-[50vh] 2xl:h-[60vh]";
            T[4] !== E ? (p = (0, f.default)("sticky top-[25vh] flex items-center 2xl:top-[20vh]", E), T[4] = E, T[5] = p) : p = T[5], T[6] !== I ? (v = (0, t.jsx)(m.CornerDecoration, {
                position: "top-left",
                theme: I
            }), T[6] = I, T[7] = v) : v = T[7];
            let M = R ? ? void 0,
                D = S[_] ? .image ? .url || "",
                A = S[_] ? .image ? .title || "",
                B = S[_] ? .loopVideo;
            T[8] !== _ || T[9] !== M || T[10] !== D || T[11] !== A || T[12] !== B || T[13] !== I ? (g = (0, t.jsx)("div", {
                className: "relative",
                children: (0, t.jsx)(s.AnimatePresence, {
                    mode: "wait",
                    children: (0, t.jsx)(x, {
                        videoUrl: M,
                        imageUrl: D,
                        imageTitle: A,
                        loopVideo: B,
                        theme: I
                    }, _)
                })
            }), T[8] = _, T[9] = M, T[10] = D, T[11] = A, T[12] = B, T[13] = I, T[14] = g) : g = T[14], T[15] !== I ? (b = (0, t.jsx)(m.CornerDecoration, {
                position: "bottom-right",
                theme: I
            }), T[15] = I, T[16] = b) : b = T[16], T[17] !== g || T[18] !== b || T[19] !== v ? (j = (0, t.jsxs)("div", {
                children: [v, g, b]
            }), T[17] = g, T[18] = b, T[19] = v, T[20] = j) : j = T[20], T[21] !== j || T[22] !== p ? (y = (0, t.jsx)("div", {
                className: p,
                children: j
            }), T[21] = j, T[22] = p, T[23] = y) : y = T[23];
            let $ = O && "justify-center";
            if (T[24] !== $ ? (w = (0, f.default)("relative flex h-full flex-col items-start gap-40", $), T[24] = $, T[25] = w) : w = T[25], T[26] !== _ || T[27] !== S || T[28] !== z || T[29] !== O || T[30] !== I) {
                let e;
                T[32] !== _ || T[33] !== z || T[34] !== O || T[35] !== I ? (e = (e, a) => (0, t.jsx)("div", {
                    className: (0, f.default)("flex flex-col items-center justify-center text-white md:flex-row", !O && "min-h-[50vh] 2xl:min-h-[60vh]"),
                    children: (0, t.jsx)(n.motion.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: _ === a ? 1 : .3
                        },
                        className: (0, f.default)("text-2xl font-bold", "dark" === I ? "text-slate-100" : "text-neutral-800"),
                        "data-cs-override-id": z && `${z}-${a+1}`,
                        children: (0, t.jsxs)("div", {
                            className: "flex flex-1 flex-col gap-16 self-center",
                            children: [e.subtitle && (0, t.jsx)(o.default.TagHud, {
                                label: e.subtitle,
                                size: "medium",
                                theme: I,
                                variant: "light" === I ? "grey" : "purple"
                            }), (0, t.jsx)("h2", {
                                className: "responsive-display-4",
                                children: e.title
                            }), e.description && (0, t.jsx)(c.default, {
                                content: e.description,
                                className: "[&>p]:heading-4 p]:font-normal [&_li]:m-0 [&_li_p]:m-0"
                            }), e.link && (0, t.jsx)(h.default, {
                                link: e.link,
                                theme: I
                            })]
                        })
                    })
                }, e.title + a), T[32] = _, T[33] = z, T[34] = O, T[35] = I, T[36] = e) : e = T[36], k = S.map(e), T[26] = _, T[27] = S, T[28] = z, T[29] = O, T[30] = I, T[31] = k
            } else k = T[31];
            return T[37] !== w || T[38] !== k ? (N = (0, t.jsx)("div", {
                className: w,
                children: k
            }), T[37] = w, T[38] = k, T[39] = N) : N = T[39], T[40] !== y || T[41] !== N ? (C = (0, t.jsxs)("div", {
                className: "no-scrollbar relative grid w-full scroll-m-0 auto-rows-max grid-cols-[1fr_1fr] justify-center gap-40 pt-[6.25vh] xl:gap-80",
                ref: P,
                "data-testid": "sticky-scroll-spotlights",
                children: [y, N]
            }), T[40] = y, T[41] = N, T[42] = C) : C = T[42], C
        };
    e.i(633905), e.s(["default", 0, e => {
        let l, i, r, s, n, d, c, u = (0, a.c)(25),
            {
                featureSpotlights: h,
                dataCsOverrideId: x,
                theme: v
            } = e,
            g = "dark" == v ? "bg-black" : "bg-neutral-50";
        u[0] !== g ? (l = (0, f.default)(g), u[0] = g, u[1] = l) : l = u[1];
        let b = "dark" == v ? "text-white" : "text-black";
        if (u[2] !== b ? (i = (0, f.default)("flex flex-col gap-80 md:flex-row", b), u[2] = b, u[3] = i) : i = u[3], u[4] !== x || u[5] !== h || u[6] !== v ? (r = (0, t.jsx)("div", {
                className: "hidden md:flex md:flex-col",
                "data-testid": "scrolling-spotlights-desktop",
                children: (0, t.jsx)(p, {
                    content: h,
                    dataCsOverrideId: x,
                    theme: v
                })
            }), u[4] = x, u[5] = h, u[6] = v, u[7] = r) : r = u[7], u[8] !== x || u[9] !== h || u[10] !== v) {
            let e;
            u[12] !== x || u[13] !== h.length || u[14] !== v ? (e = (e, a) => (0, t.jsxs)("div", {
                children: [(0, t.jsx)(m.default, {
                    theme: v,
                    featureSpotlight: { ...e,
                        dataCsOverrideId: x && `${x}-${a+1}`
                    }
                }), a < h.length - 1 && (0, t.jsx)("div", {
                    className: "pt-16",
                    children: (0, t.jsx)(o.default.Divider, {
                        theme: v
                    })
                })]
            }, `separator-${a}`), u[12] = x, u[13] = h.length, u[14] = v, u[15] = e) : e = u[15], s = h.map(e), u[8] = x, u[9] = h, u[10] = v, u[11] = s
        } else s = u[11];
        return u[16] !== s ? (n = (0, t.jsx)("div", {
            children: (0, t.jsx)("div", {
                className: "flex flex-col gap-16 md:hidden",
                "data-testid": "scrolling-spotlights-mobile",
                children: s
            })
        }), u[16] = s, u[17] = n) : n = u[17], u[18] !== i || u[19] !== r || u[20] !== n ? (d = (0, t.jsx)(o.default.Section, {
            children: (0, t.jsxs)("div", {
                className: i,
                children: [r, n]
            })
        }), u[18] = i, u[19] = r, u[20] = n, u[21] = d) : d = u[21], u[22] !== l || u[23] !== d ? (c = (0, t.jsx)("div", {
            className: l,
            children: d
        }), u[22] = l, u[23] = d, u[24] = c) : c = u[24], c
    }], 6714), e.s([], 611275), e.s(["default", 0, e => {
        let l, i, r, s, c, u, m, h = (0, a.c)(23),
            {
                theme: x,
                tags: p,
                images: v,
                title: g,
                subTitle: b
            } = e,
            j = void 0 === x ? "dark" : x,
            y = "dark" === j ? "bg-black text-white" : "bg-neutral-50 text-black";
        if (h[0] !== y ? (l = (0, f.default)("relative flex max-w-full flex-col justify-center py-48 text-center md:py-56 xl:mx-0", y), h[0] = y, h[1] = l) : l = h[1], h[2] !== b || h[3] !== j || h[4] !== g ? (i = (g || b) && (0, t.jsxs)("div", {
                className: (0, f.default)("mx-auto flex w-full max-w-3xl flex-col gap-16 self-center bg-center bg-no-repeat px-16 md:px-0", "dark" === j ? "bg-dot-large-neutral-600" : "bg-dot-large-white"),
                children: [(0, t.jsx)(n.motion.h3, {
                    initial: {
                        opacity: 0,
                        y: 64
                    },
                    transition: {
                        duration: .6
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "responsive-display-4",
                    children: g
                }), (0, t.jsx)(n.motion.p, {
                    initial: {
                        opacity: 0,
                        y: 64
                    },
                    transition: {
                        duration: .6
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "heading-4",
                    children: b
                })]
            }), h[2] = b, h[3] = j, h[4] = g, h[5] = i) : i = h[5], h[6] !== p || h[7] !== j ? (r = p && p.length > 0 && (0, t.jsx)(n.motion.div, {
                className: "flex flex-wrap justify-center gap-8",
                initial: {
                    opacity: 0,
                    y: 64
                },
                transition: {
                    duration: .6
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: p.map(e => (0, t.jsx)(o.default.TagHud, {
                    variant: "grey",
                    theme: j,
                    size: "medium",
                    label: e,
                    className: "whitespace-nowrap"
                }, e))
            }), h[6] = p, h[7] = j, h[8] = r) : r = h[8], h[9] !== i || h[10] !== r ? (s = (0, t.jsx)(o.default.Section, {
                verticalSpacing: "none",
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col gap-40",
                    children: [i, r]
                })
            }), h[9] = i, h[10] = r, h[11] = s) : s = h[11], h[12] !== v || h[13] !== j) {
            let e;
            h[15] !== j ? (e = (e, a) => (0, t.jsx)(d.default, {
                height: 480,
                width: 352,
                src: e.url,
                alt: e.title ? ? "",
                className: (0, f.default)(a > 3 && "hidden md:block", a > 5 && "hidden lg:block", "bg-grey h-full border", "dark" === j ? "border-neutral-600" : "border-neutral-200")
            }, e.url ? ? ""), h[15] = j, h[16] = e) : e = h[16], c = v.map(e), h[12] = v, h[13] = j, h[14] = c
        } else c = h[14];
        return h[17] !== c ? (u = (0, t.jsx)("div", {
            className: "mx-auto mt-40 max-w-(--breakpoint-2xl) justify-center overflow-hidden md:flex md:px-40 lg:px-48 xl:px-96",
            children: (0, t.jsx)("div", {
                className: "-mr-96 -ml-96 grid grid-cols-4 gap-16 md:grid-cols-6 lg:mr-0 lg:ml-0 lg:w-full lg:gap-32",
                children: c
            })
        }), h[17] = c, h[18] = u) : u = h[18], h[19] !== l || h[20] !== s || h[21] !== u ? (m = (0, t.jsxs)("div", {
            className: l,
            children: [s, u]
        }), h[19] = l, h[20] = s, h[21] = u, h[22] = m) : m = h[22], m
    }], 260144)
}, 773184, 725069, e => {
    "use strict";
    var t = e.i(261576),
        a = e.i(191788),
        l = e.i(620391);

    function i(e) {
        return e.id
    }

    function r(e) {
        return e.id
    }

    function s(e) {
        return e.id
    }
    e.s(["default", 0, e => {
        let n, d, o, c = (0, t.c)(14),
            {
                variants: u,
                variantLists: m
            } = e,
            [f, h] = m,
            x = f ? .priceLabel,
            p = f ? .priceConversion;
        c[0] !== f ? .variants || c[1] !== h ? .variants || c[2] !== u ? (n = [...u.map(i), ...f ? .variants.map(r) || [], ...h ? .variants.map(s) || []], c[0] = f ? .variants, c[1] = h ? .variants, c[2] = u, c[3] = n) : n = c[3];
        let v = n;
        (0, l.usePrefetchLocalisedPrices)(v);
        let [g, b] = (0, a.useState)(f ? .variants[0] || u[0]);
        return c[4] !== g || c[5] !== u ? (d = g ? [g, ...u] : u, c[4] = g, c[5] = u, c[6] = d) : d = c[6], c[7] !== g || c[8] !== p || c[9] !== x || c[10] !== f || c[11] !== h || c[12] !== d ? (o = {
            variants: d,
            primaryVariants: f,
            secondaryVariants: h,
            currentVariant: g,
            setCurrentVariant: b,
            priceLabel: x,
            priceConversion: p
        }, c[7] = g, c[8] = p, c[9] = x, c[10] = f, c[11] = h, c[12] = d, c[13] = o) : o = c[13], o
    }], 773184);
    var n = e.i(391398),
        d = e.i(525487),
        o = e.i(79564);

    function c(e) {
        let {
            id: t,
            productHandle: a,
            maxQuantityAllowed: l
        } = e;
        return {
            product: {
                handle: a,
                maxQuantityAllowed: l
            },
            variantId: t
        }
    }
    e.i(664157);
    var u = e.i(271179);
    e.i(643781);
    var m = e.i(989606),
        f = e.i(414448);
    e.s(["default", 0, e => {
        let a, l, i = (0, t.c)(27),
            {
                variants: r,
                isOfferAvailable: s,
                notifyMeFormName: h,
                dataCsOverrideId: x,
                size: p,
                theme: v
            } = e,
            g = void 0 === p ? "medium" : p,
            b = void 0 === v ? "light" : v,
            {
                t: j
            } = (0, u.useTranslation)("common"),
            y = (e => {
                let a, l = (0, t.c)(3),
                    {
                        add: i
                    } = (0, o.default)();
                return l[0] !== i || l[1] !== e ? (a = () => {
                    i(e.map(c))
                }, l[0] = i, l[1] = e, l[2] = a) : a = l[2], a
            })(r);
        if (!s && h) {
            let e;
            return i[0] !== h || i[1] !== g || i[2] !== r[0] ? (e = (0, n.jsx)(d.default, {
                buttonSize: g,
                buttonVariant: "primary-orange",
                formName: h,
                variant: r[0]
            }), i[0] = h, i[1] = g, i[2] = r[0], i[3] = e) : e = i[3], e
        }
        if (!s) {
            let e, t;
            i[4] !== g || i[5] !== j ? (e = "small" === g ? void 0 : j("productCards.outOfStock"), i[4] = g, i[5] = j, i[6] = e) : e = i[6];
            let a = "dark" === b ? "primary-white" : "primary-black";
            return i[7] !== y || i[8] !== x || i[9] !== g || i[10] !== e || i[11] !== a || i[12] !== r[0].id || i[13] !== r[0].productHandle || i[14] !== r[0].sku || i[15] !== r[0].title ? (t = (0, n.jsx)(f.default, {
                productName: r[0].productHandle,
                variantId: r[0].id,
                variantName: r[0].title,
                sku: r[0].sku,
                label: e,
                onClick: y,
                dataCsOverrideId: x,
                size: g,
                variant: a,
                nowrap: !1
            }), i[7] = y, i[8] = x, i[9] = g, i[10] = e, i[11] = a, i[12] = r[0].id, i[13] = r[0].productHandle, i[14] = r[0].sku, i[15] = r[0].title, i[16] = t) : t = i[16], t
        }
        i[17] !== g || i[18] !== j ? (a = "small" === g ? null : j("productCards.addToCard"), i[17] = g, i[18] = j, i[19] = a) : a = i[19];
        let w = "small" === g ? "basketPutIn" : void 0,
            k = "dark" === b ? "primary-orange" : "primary-black";
        return i[20] !== y || i[21] !== x || i[22] !== g || i[23] !== a || i[24] !== w || i[25] !== k ? (l = (0, n.jsx)(m.default, {
            nowrap: !1,
            label: a,
            onClick: y,
            dataCsOverrideId: x,
            size: g,
            icon: w,
            variant: k
        }), i[20] = y, i[21] = x, i[22] = g, i[23] = a, i[24] = w, i[25] = k, i[26] = l) : l = i[26], l
    }], 725069)
}, 547627, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576);
    e.i(664157);
    var l = e.i(271179);
    e.i(643781);
    var i = e.i(989606),
        r = e.i(292905),
        s = e.i(217837),
        n = e.i(477180);
    let d = async e => {
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
    var o = e.i(414448);
    e.s(["default", 0, e => {
        let c, u, m, f = (0, a.c)(19),
            {
                variantId: h,
                dataCsOverrideId: x,
                isOfferAvailable: p,
                sku: v,
                size: g
            } = e,
            b = void 0 === g ? "medium" : g,
            {
                t: j
            } = (0, l.useTranslation)("common");
        f[0] !== h ? (c = {
            variantId: h
        }, f[0] = h, f[1] = c) : c = f[1];
        let {
            buyItNow: y,
            isPending: w
        } = (e => {
            let t, l, i, o, c, u, m, f = (0, a.c)(23),
                {
                    variantId: h,
                    onError: x
                } = e,
                {
                    country: p,
                    language: v
                } = (0, n.default)(),
                g = (0, s.useSearchParams)(),
                b = (0, s.useRouter)();
            f[0] !== g ? (t = g ? .get("discount_code"), f[0] = g, f[1] = t) : t = f[1];
            let j = t;
            f[2] !== j || f[3] !== h ? (l = ["buy-it-now", h, j], f[2] = j, f[3] = h, f[4] = l) : l = f[4], f[5] !== p || f[6] !== j || f[7] !== v || f[8] !== h ? (i = () => d({
                variantId: h,
                discountCode: j,
                language: v,
                country: p
            }), f[5] = p, f[6] = j, f[7] = v, f[8] = h, f[9] = i) : i = f[9], f[10] !== b ? (o = e => {
                b.push(e.checkoutUrl)
            }, f[10] = b, f[11] = o) : o = f[11], f[12] !== x ? (c = e => {
                console.error("Buy it now error:", e), x ? .(e)
            }, f[12] = x, f[13] = c) : c = f[13], f[14] !== l || f[15] !== i || f[16] !== o || f[17] !== c ? (u = {
                mutationKey: l,
                mutationFn: i,
                onSuccess: o,
                onError: c
            }, f[14] = l, f[15] = i, f[16] = o, f[17] = c, f[18] = u) : u = f[18];
            let {
                mutate: y,
                isPending: w,
                error: k
            } = (0, r.useMutation)(u);
            return f[19] !== k || f[20] !== w || f[21] !== y ? (m = {
                buyItNow: y,
                isPending: w,
                error: k
            }, f[19] = k, f[20] = w, f[21] = y, f[22] = m) : m = f[22], m
        })(c);
        if (!p) {
            let e, a;
            f[2] !== j ? (e = j("productCards.outOfStock"), f[2] = j, f[3] = e) : e = f[3];
            let l = `${x}-buy-now`;
            return f[4] !== y || f[5] !== b || f[6] !== v || f[7] !== e || f[8] !== l || f[9] !== h ? (a = (0, t.jsx)(o.default, {
                variantId: h,
                sku: v,
                label: e,
                onClick: y,
                dataCsOverrideId: l,
                size: b,
                variant: "primary-orange",
                nowrap: !1
            }), f[4] = y, f[5] = b, f[6] = v, f[7] = e, f[8] = l, f[9] = h, f[10] = a) : a = f[10], a
        }
        f[11] !== j ? (u = j("productCards.buyItNow"), f[11] = j, f[12] = u) : u = f[12];
        let k = `${x}-buy-now`;
        return f[13] !== y || f[14] !== w || f[15] !== b || f[16] !== u || f[17] !== k ? (m = (0, t.jsx)(i.default, {
            nowrap: !1,
            size: b,
            variant: "primary-orange",
            label: u,
            onClick: y,
            isDisabled: w,
            dataCsOverrideId: k
        }), f[13] = y, f[14] = w, f[15] = b, f[16] = u, f[17] = k, f[18] = m) : m = f[18], m
    }], 547627)
}, 310356, e => {
    "use strict";
    e.i(621351), e.s([])
}, 489180, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(295485),
        i = e.i(648684),
        r = e.i(191788),
        s = e.i(253770),
        n = e.i(345082),
        d = e.i(999750),
        o = e.i(43039),
        c = e.i(773184),
        u = e.i(657510),
        m = e.i(126019);
    e.i(945210);
    var f = e.i(381234),
        h = e.i(981047),
        x = e.i(276284),
        p = e.i(108113),
        v = e.i(16951),
        g = e.i(708235),
        b = e.i(236663);
    e.i(310356);
    var j = e.i(621351);
    e.i(151153);
    var y = e.i(46050);
    e.i(349837);
    var w = e.i(64498);
    e.i(195512);
    var k = e.i(847562),
        N = e.i(150077);
    e.i(867094);
    var C = e.i(725524);
    e.i(872044);
    var T = e.i(627528);
    e.i(259936);
    var S = e.i(838779),
        z = e.i(725069),
        I = e.i(547627),
        _ = e.i(766442),
        V = e.i(212376),
        P = e.i(30210),
        O = e.i(309189);
    let F = e => {
            let l, i, r = (0, a.c)(27),
                {
                    variant: s,
                    notifyMeFormName: n,
                    theme: d,
                    buyMode: o,
                    variants: c,
                    offerTitle: u,
                    priceConversion: m,
                    priceLabel: f,
                    isOfferAvailable: h,
                    size: x
                } = e,
                p = void 0 === m ? null : m,
                v = void 0 === f ? null : f,
                g = void 0 === x ? "medium" : x,
                {
                    isUSAvailable: b
                } = (0, _.default)(),
                {
                    isDeviceAvailable: j
                } = (0, V.default)();
            r[0] !== j || r[1] !== h || r[2] !== b || r[3] !== s ? (l = h && b(s.id) && j(s.sku), r[0] = j, r[1] = h, r[2] = b, r[3] = s, r[4] = l) : l = r[4];
            let y = l;
            if ("buy-it-now" === o && s) {
                let e, a = `${u}-buy-it-now`;
                return r[5] !== y || r[6] !== g || r[7] !== a || r[8] !== s.id || r[9] !== s.sku ? (e = (0, t.jsx)(I.default, {
                    variantId: s.id,
                    sku: s.sku,
                    isOfferAvailable: y,
                    dataCsOverrideId: a,
                    size: g
                }), r[5] = y, r[6] = g, r[7] = a, r[8] = s.id, r[9] = s.sku, r[10] = e) : e = r[10], e
            }
            if ("device-unlock-lns" === o && s) {
                let e;
                return r[11] !== p || r[12] !== v || r[13] !== d || r[14] !== s ? (e = (0, t.jsx)(P.default, {
                    theme: d,
                    productVariant: s,
                    priceConversion: p,
                    priceLabel: v
                }), r[11] = p, r[12] = v, r[13] = d, r[14] = s, r[15] = e) : e = r[15], e
            }
            if ("cro-campaign" === o && s) {
                let e, a = `${u}-exclusive-offer`;
                return r[16] !== g || r[17] !== a || r[18] !== s ? (e = (0, t.jsx)(O.default, {
                    variant: s,
                    size: g,
                    dataCsOverrideId: a
                }), r[16] = g, r[17] = a, r[18] = s, r[19] = e) : e = r[19], e
            }
            let w = `${u}-atc`;
            return r[20] !== y || r[21] !== n || r[22] !== g || r[23] !== w || r[24] !== d || r[25] !== c ? (i = (0, t.jsx)(z.default, {
                variants: c,
                notifyMeFormName: n,
                isOfferAvailable: y,
                dataCsOverrideId: w,
                size: g,
                theme: d
            }), r[20] = y, r[21] = n, r[22] = g, r[23] = w, r[24] = d, r[25] = c, r[26] = i) : i = r[26], i
        },
        L = e => {
            let l, i, r, s, n, d, o, c, u, z, I, _, V, P, O, L, R, E = (0, a.c)(80),
                {
                    horizontal: M,
                    theme: D,
                    href: A,
                    isRecoverCard: B,
                    scrollToHighlightedBlock: $,
                    tag: H,
                    recover: W,
                    cardImageUrl: U,
                    offerTitle: J,
                    variants: q,
                    currentVariant: Q,
                    setCurrentVariant: G,
                    primaryVariants: X,
                    secondaryVariants: Y,
                    buyMode: K,
                    freeShipping: Z,
                    hideFreeShippingForNanoX: ee,
                    isBodyCentered: et,
                    isCombinedAddToCart: ea,
                    features: el,
                    reviews: ei,
                    cryptoVoucher: er,
                    priceConversion: es,
                    priceLabel: en,
                    variantDiscountLabel: ed,
                    isOfferAvailable: eo
                } = e,
                ec = B && $ || void 0;
            return E[0] !== H || E[1] !== D ? (l = H && (0, t.jsx)(j.default, {
                label: H,
                theme: D,
                variant: "purple"
            }), E[0] = H, E[1] = D, E[2] = l) : l = E[2], E[3] !== U || E[4] !== Q || E[5] !== J || E[6] !== W ? (i = W && Q ? (0, t.jsx)(g.CardImageWithRecover, {
                currentVariant: Q,
                productHandle: Q.handle,
                recoverCardImageUrl: W.image.url
            }) : (0, t.jsx)(m.default, {
                src: U,
                alt: "",
                fill: !0,
                priority: !0,
                sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
                className: "object-contain",
                "data-cs-override-id": `${J}-picture`
            }), E[3] = U, E[4] = Q, E[5] = J, E[6] = W, E[7] = i) : i = E[7], E[8] !== A || E[9] !== ec || E[10] !== l || E[11] !== i ? (r = (0, t.jsxs)(h.CardHeader, {
                href: A,
                onClick: ec,
                children: [l, i]
            }), E[8] = A, E[9] = ec, E[10] = l, E[11] = i, E[12] = r) : r = E[12], E[13] !== A || E[14] !== J ? (s = (0, t.jsx)(v.CardTitle, {
                title: J,
                href: A
            }), E[13] = A, E[14] = J, E[15] = s) : s = E[15], E[16] !== Q || E[17] !== D ? (n = Q ? .promoInfoText && (0, t.jsx)(w.default, {
                promoInfoText: Q.promoInfoText,
                promoInfoLink: Q.promoInfoLink,
                theme: D
            }), E[16] = Q, E[17] = D, E[18] = n) : n = E[18], E[19] !== Q || E[20] !== ea || E[21] !== es || E[22] !== en || E[23] !== D || E[24] !== ed || E[25] !== q ? (d = ea ? (0, t.jsx)(k.default, {
                variants: q
            }) : (0, t.jsx)(N.default, {
                variant: Q,
                size: "large",
                theme: D,
                discountLabel: en || ed,
                showDiscount: !!es || !!ed,
                ...es && {
                    manualDiscountConversion: es,
                    showStrikedPrice: !0
                }
            }), E[19] = Q, E[20] = ea, E[21] = es, E[22] = en, E[23] = D, E[24] = ed, E[25] = q, E[26] = d) : d = E[26], E[27] !== K || E[28] !== er || E[29] !== D ? (o = er && "device-unlock-lns" !== K && (0, t.jsx)(T.default, {
                label: er.cardLabel,
                theme: D,
                cryptoCurrency: er.cryptoCurrency,
                ...er.link && {
                    drawer: er.link
                }
            }), E[27] = K, E[28] = er, E[29] = D, E[30] = o) : o = E[30], E[31] !== ei || E[32] !== D ? (c = ei && (0, t.jsx)(y.default, {
                rating: ei.rating,
                totalReviews: ei.totalReviews,
                color: "dark" === D ? "white" : "black"
            }), E[31] = ei, E[32] = D, E[33] = c) : c = E[33], E[34] !== s || E[35] !== n || E[36] !== d || E[37] !== o || E[38] !== c ? (u = (0, t.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [s, n, d, o, c]
            }), E[34] = s, E[35] = n, E[36] = d, E[37] = o, E[38] = c, E[39] = u) : u = E[39], E[40] !== el || E[41] !== D ? (z = el.length > 0 && (0, t.jsx)("div", {
                className: "flex flex-wrap gap-8",
                children: el.map(e => {
                    let {
                        title: a,
                        icon: l,
                        variant: i
                    } = e;
                    return (0, t.jsx)(S.default, {
                        theme: D,
                        size: "small",
                        label: a,
                        icon: l,
                        variant: i
                    }, a)
                })
            }), E[40] = el, E[41] = D, E[42] = z) : z = E[42], E[43] !== Q || E[44] !== X || E[45] !== Y || E[46] !== G || E[47] !== D || E[48] !== q ? (I = Q && (0, t.jsx)(C.default, {
                className: "flex-col",
                currentVariant: Q,
                onChange: G,
                variants: q,
                primaryVariants: X,
                secondaryVariants: Y,
                theme: D
            }), E[43] = Q, E[44] = X, E[45] = Y, E[46] = G, E[47] = D, E[48] = q, E[49] = I) : I = E[49], E[50] !== K || E[51] !== Q || E[52] !== eo || E[53] !== J || E[54] !== es || E[55] !== en || E[56] !== D || E[57] !== q ? (_ = (0, t.jsx)(F, {
                variant: Q,
                theme: D,
                buyMode: K,
                variants: q,
                offerTitle: J,
                isOfferAvailable: eo,
                priceConversion: es,
                priceLabel: en,
                size: "medium"
            }), E[50] = K, E[51] = Q, E[52] = eo, E[53] = J, E[54] = es, E[55] = en, E[56] = D, E[57] = q, E[58] = _) : _ = E[58], E[59] !== Z || E[60] !== ee || E[61] !== D ? (V = Z && !ee && (0, t.jsx)(b.CardFreeShipping, {
                theme: D
            }), E[59] = Z, E[60] = ee, E[61] = D, E[62] = V) : V = E[62], E[63] !== _ || E[64] !== V ? (P = (0, t.jsxs)("div", {
                className: "flex flex-wrap justify-between gap-16",
                children: [_, V]
            }), E[63] = _, E[64] = V, E[65] = P) : P = E[65], E[66] !== et || E[67] !== I || E[68] !== P ? (O = (0, t.jsxs)(p.CardFooter, {
                isCardBodyCentered: et,
                children: [I, P]
            }), E[66] = et, E[67] = I, E[68] = P, E[69] = O) : O = E[69], E[70] !== et || E[71] !== u || E[72] !== z || E[73] !== O ? (L = (0, t.jsxs)(x.CardBody, {
                isCardBodyCentered: et,
                children: [u, z, O]
            }), E[70] = et, E[71] = u, E[72] = z, E[73] = O, E[74] = L) : L = E[74], E[75] !== M || E[76] !== L || E[77] !== r || E[78] !== D ? (R = (0, t.jsxs)(f.CardBorder, {
                className: "h-full scroll-smooth",
                horizontal: M,
                theme: D,
                children: [r, L]
            }), E[75] = M, E[76] = L, E[77] = r, E[78] = D, E[79] = R) : R = E[79], R
        };
    e.i(366539), e.i(923160);
    var R = e.i(217863);
    e.i(305231);
    var E = e.i(913473),
        M = e.i(682129),
        D = e.i(383375),
        A = e.i(938936),
        B = e.i(628710),
        $ = e.i(495854),
        H = e.i(41158);
    let W = e => {
            let l, i = (0, a.c)(3),
                {
                    href: r,
                    children: s
                } = e;
            return i[0] !== s || i[1] !== r ? (l = r ? (0, t.jsx)(H.default, {
                href: r,
                className: "block flex h-full flex-col gap-12",
                children: s
            }) : (0, t.jsx)(t.Fragment, {
                children: s
            }), i[0] = s, i[1] = r, i[2] = l) : l = i[2], l
        },
        U = e => {
            let l, i, r, s, n, d, o, c = (0, a.c)(25),
                {
                    tags: u,
                    theme: m
                } = e;
            if (c[0] !== u || c[1] !== m) {
                let e;
                c[3] !== m ? (e = e => {
                    let {
                        title: a,
                        icon: l,
                        variant: i
                    } = e;
                    return (0, t.jsx)(S.default, {
                        label: a,
                        icon: l,
                        variant: i,
                        theme: m,
                        size: "small"
                    }, a)
                }, c[3] = m, c[4] = e) : e = c[4], l = u.map(e), c[0] = u, c[1] = m, c[2] = l
            } else l = c[2];
            if (c[5] !== l ? (i = (0, t.jsx)("div", {
                    className: "hidden flex-1 flex-col items-start gap-8 sm:flex sm:flex-wrap sm:items-center lg:hidden xl:flex xl:flex-wrap xl:items-center",
                    children: l
                }), c[5] = l, c[6] = i) : i = c[6], c[7] !== u || c[8] !== m) {
                let e;
                c[10] !== m ? (e = e => {
                    let {
                        title: a,
                        variant: l
                    } = e;
                    return (0, t.jsx)(S.default, {
                        label: a,
                        variant: l,
                        theme: m,
                        size: "small"
                    }, a)
                }, c[10] = m, c[11] = e) : e = c[11], r = u.map(e), c[7] = u, c[8] = m, c[9] = r
            } else r = c[9];
            if (c[12] !== r ? (s = (0, t.jsx)("div", {
                    className: "hidden flex-1 flex-col items-start gap-8 lg:flex lg:flex-wrap lg:items-center xl:hidden",
                    children: r
                }), c[12] = r, c[13] = s) : s = c[13], c[14] !== u || c[15] !== m) {
                let e;
                c[17] !== m ? (e = e => {
                    let {
                        title: a,
                        icon: l,
                        variant: i
                    } = e;
                    return (0, t.jsx)(S.default, {
                        label: a,
                        icon: l,
                        size: "tiny",
                        variant: i,
                        theme: m
                    }, a)
                }, c[17] = m, c[18] = e) : e = c[18], n = u.map(e), c[14] = u, c[15] = m, c[16] = n
            } else n = c[16];
            return c[19] !== n ? (d = (0, t.jsx)("div", {
                className: "flex flex-1 flex-col items-start gap-8 sm:hidden sm:items-center",
                children: n
            }), c[19] = n, c[20] = d) : d = c[20], c[21] !== i || c[22] !== s || c[23] !== d ? (o = (0, t.jsxs)(t.Fragment, {
                children: [i, s, d]
            }), c[21] = i, c[22] = s, c[23] = d, c[24] = o) : o = c[24], o
        },
        J = e => {
            let l, i, s, n, d, o, c, u, f, h, x, p, v, g, b, y, w, k, C, S, z, I = (0, a.c)(71),
                {
                    title: _,
                    subtitle: V,
                    tags: P,
                    rating: O,
                    hudTag: L,
                    cryptoVoucher: H,
                    currentVariant: J,
                    variants: q,
                    primaryVariants: Q,
                    secondaryVariants: G,
                    setCurrentVariant: X,
                    theme: Y,
                    href: K,
                    image: Z
                } = e;
            I[0] !== P ? (l = void 0 === P ? [] : P, I[0] = P, I[1] = l) : l = I[1];
            let ee = l;
            I[2] !== q ? (i = void 0 === q ? [] : q, I[2] = q, I[3] = i) : i = I[3];
            let et = i,
                ea = void 0 === Y ? "light" : Y,
                [el, ei] = (0, r.useState)(!!Z ? .url),
                er = el ? Z ? .url : J ? .image.url;
            I[4] !== L || I[5] !== ea ? (s = L && (0, t.jsx)(j.default, {
                label: L,
                theme: ea,
                variant: "purple"
            }), I[4] = L, I[5] = ea, I[6] = s) : s = I[6];
            let es = !el && "bg-neutral-100 sm:bg-transparent";
            return I[7] !== es ? (n = (0, $.default)("relative h-[150px] rounded-xs sm:rounded-none md:h-[230px]", es), I[7] = es, I[8] = n) : n = I[8], I[9] !== er || I[10] !== el || I[11] !== J ? .image || I[12] !== Z ? .title ? (d = er && (0, t.jsx)(m.default, {
                src: er,
                alt: Z ? .title || J ? .image.description || "",
                fill: !0,
                className: (0, $.default)(el ? "object-cover" : "object-contain", "rounded-xs sm:rounded-none"),
                priority: !0,
                sizes: "(max-width: 768px) 168px, (max-width: 1024px) 352px, 230px",
                "data-cs-override-id": "small-offer-card-picture"
            }), I[9] = er, I[10] = el, I[11] = J ? .image, I[12] = Z ? .title, I[13] = d) : d = I[13], I[14] !== n || I[15] !== d ? (o = (0, t.jsx)("div", {
                className: n,
                children: d
            }), I[14] = n, I[15] = d, I[16] = o) : o = I[16], I[17] !== K || I[18] !== o || I[19] !== s ? (c = (0, t.jsxs)(B.default, {
                size: "small",
                href: K,
                children: [s, o]
            }), I[17] = K, I[18] = o, I[19] = s, I[20] = c) : c = I[20], I[21] !== _ ? (u = _ && (0, t.jsx)(A.default, {
                title: _,
                size: "small"
            }), I[21] = _, I[22] = u) : u = I[22], I[23] !== V || I[24] !== ea ? (f = V && (0, t.jsx)("p", {
                className: (0, $.default)("body-3 sm:body-1 sm:font-normal sm:text-center", "dark" === ea ? "text-neutral-400" : "text-neutral-600"),
                children: V
            }), I[23] = V, I[24] = ea, I[25] = f) : f = I[25], I[26] !== u || I[27] !== f ? (h = (0, t.jsxs)("div", {
                className: "flex flex-col gap-4 sm:items-center sm:text-center",
                children: [u, f]
            }), I[26] = u, I[27] = f, I[28] = h) : h = I[28], I[29] !== ee || I[30] !== ea ? (x = ee.length > 0 && (0, t.jsx)(U, {
                tags: ee,
                theme: ea
            }), I[29] = ee, I[30] = ea, I[31] = x) : x = I[31], I[32] !== O || I[33] !== ea ? (p = O && (0, t.jsx)(R.default, {
                rating: O,
                size: "small",
                color: "dark" === ea ? "white" : "black"
            }), I[32] = O, I[33] = ea, I[34] = p) : p = I[34], I[35] !== J || I[36] !== ea ? (v = J && (0, t.jsx)(N.default, {
                variant: J,
                showDiscount: !!J ? .discountLabel,
                discountLabel: J ? .discountLabel,
                theme: ea
            }), I[35] = J, I[36] = ea, I[37] = v) : v = I[37], I[38] !== H || I[39] !== ea ? (g = H && (0, t.jsx)(T.default, {
                label: H.cardLabel,
                theme: ea,
                cryptoCurrency: H.cryptoCurrency,
                size: "small",
                ...H.link && {
                    drawer: H.link
                }
            }), I[38] = H, I[39] = ea, I[40] = g) : g = I[40], I[41] !== p || I[42] !== v || I[43] !== g ? (b = (0, t.jsxs)("div", {
                className: "flex flex-col gap-8 sm:items-center",
                children: [p, v, g]
            }), I[41] = p, I[42] = v, I[43] = g, I[44] = b) : b = I[44], I[45] !== K || I[46] !== h || I[47] !== x || I[48] !== b ? (y = (0, t.jsxs)(W, {
                href: K,
                children: [h, x, b]
            }), I[45] = K, I[46] = h, I[47] = x, I[48] = b, I[49] = y) : y = I[49], I[50] !== J || I[51] !== Q || I[52] !== G || I[53] !== X || I[54] !== ea || I[55] !== et ? (w = J && (0, t.jsx)(E.default, {
                currentVariant: J,
                onChange: e => {
                    ei(!1), X(e)
                },
                variants: et,
                secondaryVariants: G,
                primaryVariants: Q,
                colorDot: !0,
                variantNumber: !0,
                size: "small",
                theme: ea
            }), I[50] = J, I[51] = Q, I[52] = G, I[53] = X, I[54] = ea, I[55] = et, I[56] = w) : w = I[56], I[57] !== J || I[58] !== ea || I[59] !== et ? (k = J && (0, t.jsx)(F, {
                variant: J,
                theme: ea,
                buyMode: "standard",
                variants: et,
                offerTitle: J.title,
                isOfferAvailable: J.availableForSale,
                size: "small"
            }), I[57] = J, I[58] = ea, I[59] = et, I[60] = k) : k = I[60], I[61] !== w || I[62] !== k ? (C = (0, t.jsxs)("div", {
                className: "flex flex-row items-end gap-8 sm:pt-12",
                children: [w, k]
            }), I[61] = w, I[62] = k, I[63] = C) : C = I[63], I[64] !== y || I[65] !== C ? (S = (0, t.jsxs)(D.default, {
                size: "small",
                children: [y, C]
            }), I[64] = y, I[65] = C, I[66] = S) : S = I[66], I[67] !== c || I[68] !== S || I[69] !== ea ? (z = (0, t.jsxs)(M.default, {
                className: "max-w-auto relative flex h-full flex-col sm:border",
                size: "small",
                theme: ea,
                children: [c, S]
            }), I[67] = c, I[68] = S, I[69] = ea, I[70] = z) : z = I[70], z
        },
        q = e => {
            let l, i, m, f, h, x, p, v, g, b = (0, a.c)(64),
                {
                    data: j,
                    scrollToHighlightedBlock: y,
                    theme: w,
                    horizontal: k,
                    buyMode: N,
                    size: C
                } = e,
                T = void 0 === w ? "dark" : w,
                S = void 0 !== k && k,
                {
                    combinedAddToCartVariants: z,
                    offerTitle: I,
                    reviews: _,
                    tag: V,
                    image: P,
                    subTitle: O,
                    features: F,
                    freeShipping: R,
                    variantLists: E
                } = j;
            b[0] !== z || b[1] !== E ? (l = {
                variants: z,
                variantLists: E
            }, b[0] = z, b[1] = E, b[2] = l) : l = b[2];
            let {
                variants: M,
                primaryVariants: D,
                secondaryVariants: A,
                currentVariant: B,
                setCurrentVariant: $,
                priceConversion: H,
                priceLabel: W
            } = (0, c.default)(l);
            b[3] !== M ? (i = M.every(Q), b[3] = M, b[4] = i) : i = b[4];
            let U = i,
                {
                    entryChannel: q
                } = (0, r.useContext)(d.EntryChannelContext),
                {
                    cryptoVouchers: K
                } = (0, r.useContext)(s.cryptoVouchersContext),
                Z = K ? .activeCryptoVouchers;
            b[5] !== B.id || b[6] !== q || b[7] !== Z ? (m = (0, n.default)(q, Z, B.id), b[5] = B.id, b[6] = q, b[7] = Z, b[8] = m) : m = b[8];
            let ee = m;
            b[9] !== M[0] || b[10] !== M.length ? (f = 1 === M.length ? (0, o.default)(M[0].productHandle, M[0]) : null, b[9] = M[0], b[10] = M.length, b[11] = f) : f = b[11];
            let et = f;
            b[12] !== M ? (h = M.find(G), b[12] = M, b[13] = h) : h = b[13];
            let ea = h;
            b[14] !== et || b[15] !== M ? (x = null === et && M.some(X), b[14] = et, b[15] = M, b[16] = x) : x = b[16];
            let el = x,
                ei = B ? .customOfferCardImage ? .url || B ? .image.url || P ? .url || "";
            b[17] !== M ? (p = M.find(Y), b[17] = M, b[18] = p) : p = b[18];
            let er = p,
                {
                    discountLabel: es
                } = B,
                en = (0, u.default)(er ? .productHandle);
            if (b[19] !== S || b[20] !== j) {
                let e, t;
                e = j.variantLists[0] ? .variants ? .length > 1, t = j.features ? .length > 0, v = !e && !t && S, b[19] = S, b[20] = j, b[21] = v
            } else v = b[21];
            let ed = v,
                eo = z.length > 0;
            if ("small" === (void 0 === C ? "medium" : C)) {
                let e, a = _ ? .rating;
                return b[22] !== ee || b[23] !== B || b[24] !== F || b[25] !== et || b[26] !== P || b[27] !== I || b[28] !== D || b[29] !== A || b[30] !== $ || b[31] !== O || b[32] !== a || b[33] !== V || b[34] !== T || b[35] !== M ? (e = (0, t.jsx)(J, {
                    cryptoVoucher: ee,
                    currentVariant: B,
                    hudTag: V,
                    primaryVariants: D,
                    rating: a,
                    secondaryVariants: A,
                    setCurrentVariant: $,
                    subtitle: O,
                    tags: F,
                    theme: T,
                    title: I,
                    href: et,
                    image: P,
                    variants: M
                }), b[22] = ee, b[23] = B, b[24] = F, b[25] = et, b[26] = P, b[27] = I, b[28] = D, b[29] = A, b[30] = $, b[31] = O, b[32] = a, b[33] = V, b[34] = T, b[35] = M, b[36] = e) : e = b[36], e
            }
            return b[37] !== N || b[38] !== ei || b[39] !== ee || b[40] !== B || b[41] !== F || b[42] !== R || b[43] !== en || b[44] !== S || b[45] !== et || b[46] !== ed || b[47] !== eo || b[48] !== U || b[49] !== el || b[50] !== I || b[51] !== H || b[52] !== W || b[53] !== D || b[54] !== ea || b[55] !== _ || b[56] !== y || b[57] !== A || b[58] !== $ || b[59] !== V || b[60] !== T || b[61] !== es || b[62] !== M ? (g = (0, t.jsx)(L, {
                buyMode: N,
                cardImageUrl: ei,
                cryptoVoucher: ee,
                currentVariant: B,
                features: F,
                freeShipping: R,
                hideFreeShippingForNanoX: en,
                horizontal: S,
                href: et,
                isBodyCentered: ed,
                isCombinedAddToCart: eo,
                isOfferAvailable: U,
                isRecoverCard: el,
                offerTitle: I,
                priceConversion: H,
                priceLabel: W,
                primaryVariants: D,
                recover: ea,
                reviews: _,
                scrollToHighlightedBlock: y,
                secondaryVariants: A,
                setCurrentVariant: $,
                tag: V,
                theme: T,
                variantDiscountLabel: es,
                variants: M
            }), b[37] = N, b[38] = ei, b[39] = ee, b[40] = B, b[41] = F, b[42] = R, b[43] = en, b[44] = S, b[45] = et, b[46] = ed, b[47] = eo, b[48] = U, b[49] = el, b[50] = I, b[51] = H, b[52] = W, b[53] = D, b[54] = ea, b[55] = _, b[56] = y, b[57] = A, b[58] = $, b[59] = V, b[60] = T, b[61] = es, b[62] = M, b[63] = g) : g = b[63], g
        };

    function Q(e) {
        return e.availableForSale
    }

    function G(e) {
        return "ledger-recover" === e.productHandle
    }

    function X(e) {
        return "ledger-recover" === e.productHandle
    }

    function Y(e) {
        return "ledger-nano-x" === e.productHandle
    }
    let K = (0, i.cva)("mx-auto grid w-full", {
        variants: {
            size: {
                small: "gap-x-8 gap-y-16 md:gap-12 lg:gap-16",
                medium: "grid-cols-1 gap-16 lg:gap-32"
            },
            layout: {
                horizontal: "",
                vertical: ""
            },
            displayThreeColumns: {
                true: "",
                false: ""
            },
            displayFourColumns: {
                true: "",
                false: ""
            },
            displayTwoColumns: {
                true: "",
                false: ""
            },
            displayOneColumn: {
                true: "",
                false: ""
            }
        },
        compoundVariants: [{
            size: "medium",
            layout: "horizontal",
            class: "md:grid-cols-2 lg:grid-cols-2"
        }, {
            size: "medium",
            layout: "horizontal",
            displayOneColumn: !0,
            class: "justify-center md:grid-cols-[minmax(0,600px)] lg:grid-cols-[minmax(0,600px)]"
        }, {
            size: "medium",
            layout: "vertical",
            class: "md:grid-cols-2 lg:grid-cols-3"
        }, {
            size: "small",
            displayThreeColumns: !0,
            displayTwoColumns: !1,
            class: "max-w-max grid-cols-[minmax(0,320px)minmax(0,320px)] justify-center md:grid-cols-[minmax(0,320px)minmax(0,320px)minmax(0,320px)] lg:max-w-screen-2xl"
        }, {
            size: "small",
            displayFourColumns: !0,
            displayThreeColumns: !1,
            displayTwoColumns: !1,
            class: "max-w-max grid-cols-[minmax(0,320px)minmax(0,320px)] justify-center md:grid-cols-[repeat(4,minmax(0,320px))] lg:max-w-screen-2xl"
        }, {
            size: "small",
            displayOneColumn: !0,
            displayTwoColumns: !1,
            displayThreeColumns: !1,
            displayFourColumns: !1,
            class: "max-w-max grid-cols-[minmax(0,320px)] justify-center lg:max-w-screen-2xl"
        }, {
            size: "small",
            displayOneColumn: !1,
            displayFourColumns: !1,
            displayThreeColumns: !1,
            displayTwoColumns: !1,
            class: "grid-cols-2 lg:max-w-screen-2xl lg:grid-cols-5"
        }, {
            size: "small",
            displayTwoColumns: !0,
            displayThreeColumns: !1,
            class: "max-w-max grid-cols-[minmax(0,320px)minmax(0,320px)] justify-center lg:max-w-screen-2xl"
        }],
        defaultVariants: {
            size: "medium",
            layout: "vertical"
        }
    });
    e.s(["default", 0, e => {
        let i, r, s, n, d, o, c, u = (0, a.c)(34),
            {
                title: m,
                subtitle: f,
                offerCards: h,
                scrollToHighlightedBlock: x,
                theme: p,
                buyMode: v,
                size: g
            } = e;
        u[0] !== h ? (i = void 0 === h ? [] : h, u[0] = h, u[1] = i) : i = u[1];
        let b = i,
            j = void 0 === g ? "medium" : g,
            y = b.length,
            w = 1 === y || y % 2 == 0;
        u[2] !== f || u[3] !== m ? (r = m && (0, t.jsx)("h2", {
            className: (0, $.default)("responsive-display-4 mt-24 text-center", f ? "mb-16" : "mb-40"),
            children: m
        }), u[2] = f, u[3] = m, u[4] = r) : r = u[4], u[5] !== f ? (s = f && (0, t.jsx)("p", {
            className: "heading-4 mb-40 text-center",
            children: f
        }), u[5] = f, u[6] = s) : s = u[6];
        let k = j || "medium",
            N = w ? "horizontal" : "vertical",
            C = 4 === y,
            T = 3 === y,
            S = 2 === y,
            z = 1 === y;
        if (u[7] !== S || u[8] !== z || u[9] !== k || u[10] !== N || u[11] !== C || u[12] !== T ? (n = K({
                size: k,
                layout: N,
                displayFourColumns: C,
                displayThreeColumns: T,
                displayTwoColumns: S,
                displayOneColumn: z
            }), u[7] = S, u[8] = z, u[9] = k, u[10] = N, u[11] = C, u[12] = T, u[13] = n) : n = u[13], u[14] !== v || u[15] !== w || u[16] !== b || u[17] !== x || u[18] !== j || u[19] !== p) {
            let e;
            u[21] !== v || u[22] !== w || u[23] !== x || u[24] !== j || u[25] !== p ? (e = (e, a) => {
                let i = `ease-linear transition-all duration-500 ${"small"===j?"":["","delay-200","delay-400"][a]}`;
                return (0, t.jsx)(l.Transition, {
                    as: "div",
                    appear: !0,
                    show: !0,
                    enter: i,
                    enterFrom: "opacity-0 translate-y-10",
                    enterTo: "opacity-100 translate-y-0",
                    children: (0, t.jsx)(q, {
                        data: e,
                        horizontal: w,
                        scrollToHighlightedBlock: x,
                        theme: p,
                        buyMode: v,
                        size: j
                    })
                }, e.image ? .url)
            }, u[21] = v, u[22] = w, u[23] = x, u[24] = j, u[25] = p, u[26] = e) : e = u[26], d = b.map(e), u[14] = v, u[15] = w, u[16] = b, u[17] = x, u[18] = j, u[19] = p, u[20] = d
        } else d = u[20];
        return u[27] !== n || u[28] !== d ? (o = (0, t.jsx)("div", {
            className: n,
            children: d
        }), u[27] = n, u[28] = d, u[29] = o) : o = u[29], u[30] !== o || u[31] !== r || u[32] !== s ? (c = (0, t.jsxs)(t.Fragment, {
            children: [r, s, o]
        }), u[30] = o, u[31] = r, u[32] = s, u[33] = c) : c = u[33], c
    }], 489180)
}, 151153, 46050, 621351, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576);
    e.i(664157);
    var l = e.i(271179),
        i = e.i(495854);
    e.i(923160);
    var r = e.i(217863);
    e.i(831184);
    var s = e.i(229620);
    e.s(["default", 0, e => {
        let n, d, o, c, u, m, f = (0, a.c)(19),
            {
                rating: h,
                totalReviews: x,
                direction: p,
                color: v,
                size: g
            } = e,
            b = void 0 === p ? "horizontal" : p,
            j = void 0 === v ? "black" : v,
            y = void 0 === g ? "medium" : g,
            {
                t: w
            } = (0, l.useTranslation)("common");
        if (f[0] !== b || f[1] !== x) {
            let e = 0 === x && (0, s.isProduction)();
            n = (0, i.default)("flex gap-[2px]", "horizontal" === b ? "flex-row" : "flex-col", e && "invisible"), f[0] = b, f[1] = x, f[2] = n
        } else n = f[2];
        f[3] !== j || f[4] !== h || f[5] !== y ? (d = (0, t.jsx)(r.default, {
            rating: h,
            size: y,
            color: j
        }), f[3] = j, f[4] = h, f[5] = y, f[6] = d) : d = f[6];
        let k = "horizontal" === b;
        return f[7] !== k ? (o = (0, i.default)("pl-8 text-neutral-500 body-3", {
            "mt-2": k
        }), f[7] = k, f[8] = o) : o = f[8], f[9] !== w || f[10] !== x ? (c = w("productCards.reviewsWithCount", {
            count: x
        }), f[9] = w, f[10] = x, f[11] = c) : c = f[11], f[12] !== o || f[13] !== c ? (u = (0, t.jsx)("p", {
            className: o,
            children: c
        }), f[12] = o, f[13] = c, f[14] = u) : u = f[14], f[15] !== n || f[16] !== d || f[17] !== u ? (m = (0, t.jsxs)("div", {
            className: n,
            children: [d, u]
        }), f[15] = n, f[16] = d, f[17] = u, f[18] = m) : m = f[18], m
    }], 46050), e.s([], 151153);
    var n = e.i(44073);
    e.s(["default", 0, e => {
        let l, r, s, d, o = (0, a.c)(10),
            {
                label: c,
                variant: u,
                theme: m,
                size: f
            } = e,
            h = void 0 === f ? "medium" : f;
        switch (u) {
            case "primary":
            case "highlight":
            case "purple":
                l = "purple";
                break;
            default:
                l = "grey"
        }
        let x = "small" === h && "start-8 top-8",
            p = "medium" === h && "start-12 top-12";
        return o[0] !== x || o[1] !== p ? (r = (0, i.default)("absolute z-10", x, p), o[0] = x, o[1] = p, o[2] = r) : r = o[2], o[3] !== l || o[4] !== c || o[5] !== m ? (s = (0, t.jsx)(n.default, {
            label: c,
            variant: l,
            theme: m
        }), o[3] = l, o[4] = c, o[5] = m, o[6] = s) : s = o[6], o[7] !== r || o[8] !== s ? (d = (0, t.jsx)("div", {
            className: r,
            children: s
        }), o[7] = r, o[8] = s, o[9] = d) : d = o[9], d
    }], 621351)
}, 917350, e => {
    "use strict";
    e.i(753221), e.s([])
}, 277551, e => {
    "use strict";
    e.i(544808), e.s([])
}, 657510, e => {
    "use strict";
    var t = e.i(261576),
        a = e.i(219501);
    e.s(["default", 0, e => {
        let l, i = (0, t.c)(3),
            {
                countryCode: r
            } = (0, a.default)(),
            s = "ledger-nano-x" === e;
        return i[0] !== r || i[1] !== s ? (l = !!r && s && ["GB", "AU", "ES", "US"].includes(r), i[0] = r, i[1] = s, i[2] = l) : l = i[2], l
    }])
}, 114168, e => {
    "use strict";
    var t = e.i(191788),
        a = Object.defineProperty,
        l = new Map,
        i = new WeakMap,
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
        fallbackInView: f,
        onChange: h
    } = {}) {
        var x;
        let [p, v] = t.useState(null), g = t.useRef(h), [b, j] = t.useState({
            inView: !!m,
            entry: void 0
        });
        g.current = h, t.useEffect(() => {
            let t;
            if (!u && p) return t = function(e, t, a = {}, n = s) {
                if (void 0 === window.IntersectionObserver && void 0 !== n) {
                    let l = e.getBoundingClientRect();
                    return t(n, {
                        isIntersecting: n,
                        target: e,
                        intersectionRatio: "number" == typeof a.threshold ? a.threshold : 0,
                        time: 0,
                        boundingClientRect: l,
                        intersectionRect: l,
                        rootBounds: l
                    }), () => {}
                }
                let {
                    id: d,
                    observer: o,
                    elements: c
                } = function(e) {
                    let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                            var a;
                            return `${t}_${"root"===t?!(a=e.root)?"0":(i.has(a)||(r+=1,i.set(a,r.toString())),i.get(a)):e[t]}`
                        }).toString(),
                        a = l.get(t);
                    if (!a) {
                        let i, r = new Map,
                            s = new IntersectionObserver(t => {
                                t.forEach(t => {
                                    var a;
                                    let l = t.isIntersecting && i.some(e => t.intersectionRatio >= e);
                                    e.trackVisibility && void 0 === t.isVisible && (t.isVisible = l), null == (a = r.get(t.target)) || a.forEach(e => {
                                        e(l, t)
                                    })
                                })
                            }, e);
                        i = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), a = {
                            id: t,
                            observer: s,
                            elements: r
                        }, l.set(t, a)
                    }
                    return a
                }(a), u = c.get(e) || [];
                return c.has(e) || c.set(e, u), u.push(t), o.observe(e),
                    function() {
                        u.splice(u.indexOf(t), 1), 0 === u.length && (c.delete(e), o.unobserve(e)), 0 === c.size && (o.disconnect(), l.delete(d))
                    }
            }(p, (e, a) => {
                j({
                    inView: e,
                    entry: a
                }), g.current && g.current(e, a), a.isIntersecting && c && t && (t(), t = void 0)
            }, {
                root: o,
                rootMargin: d,
                threshold: e,
                trackVisibility: n,
                delay: a
            }, f), () => {
                t && t()
            }
        }, [Array.isArray(e) ? e.toString() : e, p, o, d, c, u, n, f, a]);
        let y = null == (x = b.entry) ? void 0 : x.target,
            w = t.useRef(void 0);
        p || !y || c || u || w.current === y || (w.current = y, j({
            inView: !!m,
            entry: void 0
        }));
        let k = [v, b.inView, b.entry];
        return k.ref = k[0], k.inView = k[1], k.entry = k[2], k
    }])
}, 828278, 739504, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(295485),
        i = e.i(191788),
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
    var f = e.i(46050),
        h = e.i(43039);
    e.i(544063);
    var x = e.i(525487),
        p = e.i(253770),
        v = e.i(345082);
    e.i(872044);
    var g = e.i(627528),
        b = e.i(495854);
    e.i(349837);
    var j = e.i(64498),
        y = e.i(621351),
        w = e.i(455108),
        k = e.i(83899),
        N = e.i(657510),
        C = e.i(79564),
        T = e.i(999750),
        S = e.i(620391),
        z = e.i(766442),
        I = e.i(212376),
        _ = e.i(414448);
    let V = e => {
        let l, V, L, R, E, M, D, A, B, $, H, W, U, J, q, Q, G, X, Y, K, Z, ee, et, ea, el, ei, er, es, en, ed, eo, ec, eu = (0, a.c)(124),
            {
                product: em,
                collectionFeatures: ef,
                isLayoutHorizontal: eh,
                showReviews: ex,
                theme: ep
            } = e,
            ev = void 0 !== eh && eh,
            eg = void 0 === ep ? "light" : ep,
            {
                features: eb,
                freeShipping: ej,
                rating: ey,
                statusLabel: ew,
                title: ek,
                totalReviews: eN,
                secondaryVariants: eC,
                primaryVariants: eT
            } = em,
            {
                query: eS
            } = (0, d.useRouter)(),
            {
                entryChannel: ez
            } = (0, i.useContext)(T.EntryChannelContext);
        if (eT ? .variants || eC ? .variants) {
            let e, t, a;
            eu[0] !== eT ? .variants ? (e = eT ? .variants || [], eu[0] = eT ? .variants, eu[1] = e) : e = eu[1], eu[2] !== eC ? .variants ? (t = eC ? .variants || [], eu[2] = eC ? .variants, eu[3] = t) : t = eu[3], eu[4] !== e || eu[5] !== t ? (a = [...e, ...t], eu[4] = e, eu[5] = t, eu[6] = a) : a = eu[6], l = a
        } else l = em.variants;
        let eI = l[0],
            [e_, eV] = (0, i.useState)(eI),
            eP = eb.map(P);
        eu[7] !== e_ || eu[8] !== em.handle ? (V = (0, h.default)(em.handle, e_), eu[7] = e_, eu[8] = em.handle, eu[9] = V) : V = eu[9];
        let eO = V,
            {
                id: eF,
                discountLabel: eL,
                shippingTag: eR
            } = e_;
        eu[10] === Symbol.for("react.memo_cache_sentinel") ? (L = {
            placement: "hardwareWalletCard"
        }, eu[10] = L) : L = eu[10];
        let {
            add: eE
        } = (0, C.default)(L), {
            t: eM
        } = (0, n.useTranslation)("common"), {
            isUSAvailable: eD
        } = (0, z.default)(), {
            isDeviceAvailable: eA
        } = (0, I.default)();
        eu[11] !== em.handle || eu[12] !== em.variants || eu[13] !== eS ? (R = () => {
            let e = em.variants.find(e => eS[em.handle] === e.handle);
            e && eV(e)
        }, E = [em.handle, em.variants, eS], eu[11] = em.handle, eu[12] = em.variants, eu[13] = eS, eu[14] = R, eu[15] = E) : (R = eu[14], E = eu[15]), (0, i.useEffect)(R, E), eu[16] !== l ? (M = l.map(O), eu[16] = l, eu[17] = M) : M = eu[17];
        let eB = M;
        (0, S.usePrefetchLocalisedPrices)(eB);
        let {
            cryptoVouchers: e$
        } = (0, i.useContext)(p.cryptoVouchersContext), eH = e$ ? .activeCryptoVouchers;
        eu[18] !== e_.id || eu[19] !== ez || eu[20] !== eH ? (D = (0, v.default)(ez, eH, e_.id), eu[18] = e_.id, eu[19] = ez, eu[20] = eH, eu[21] = D) : D = eu[21];
        let eW = D,
            eU = l.length > 1,
            eJ = (0, k.default)(e_),
            eq = F,
            eQ = (0, N.default)(em.handle),
            eG = eR ? .title;
        eu[22] !== e_.availableForSale || eu[23] !== e_.id || eu[24] !== e_.sku || eu[25] !== eA || eu[26] !== eD ? (A = e_.availableForSale && eD(e_.id) && eA(e_.sku), eu[22] = e_.availableForSale, eu[23] = e_.id, eu[24] = e_.sku, eu[25] = eA, eu[26] = eD, eu[27] = A) : A = eu[27];
        let eX = A,
            eY = w.default,
            eK = !!ew,
            eZ = `hardware-card-${em.handle}`;
        eu[28] !== ev ? (B = (0, b.default)({
            "grid grow lg:flex": ev
        }, {
            "flex grow flex-col": !ev
        }), eu[28] = ev, eu[29] = B) : B = eu[29], eu[30] === Symbol.for("react.memo_cache_sentinel") ? ($ = (0, b.default)("lg:basis-8/5"), eu[30] = $) : $ = eu[30];
        let e0 = ev && "mr-0";
        eu[31] !== e0 ? (H = (0, b.default)("-mx-16 block", e0), eu[31] = e0, eu[32] = H) : H = eu[32], eu[33] !== ew || eu[34] !== eg ? (W = ew && (0, t.jsx)(y.default, {
            label: ew.title,
            variant: ew.variant,
            theme: eg
        }), eu[33] = ew, eu[34] = eg, eu[35] = W) : W = eu[35], eu[36] !== e_ || eu[37] !== em.handle ? (U = e_ && (0, t.jsx)(r.default, {
            src: e_.image.url,
            alt: e_.title,
            fill: !0,
            priority: !0,
            sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
            className: "object-contain",
            "data-cs-override-id": `${em.handle}-picture`
        }), eu[36] = e_, eu[37] = em.handle, eu[38] = U) : U = eu[38], eu[39] !== eO || eu[40] !== H || eu[41] !== W || eu[42] !== U ? (J = (0, t.jsx)("div", {
            className: $,
            children: (0, t.jsxs)(w.default.CardHeader, {
                href: eO,
                className: H,
                children: [W, U]
            })
        }), eu[39] = eO, eu[40] = H, eu[41] = W, eu[42] = U, eu[43] = J) : J = eu[43], eu[44] !== ev ? (q = (0, b.default)("flex grow flex-col lg:basis-12/5", {
            "pt-12": ev
        }), eu[44] = ev, eu[45] = q) : q = eu[45], eu[46] !== eO || eu[47] !== ek ? (Q = (0, t.jsx)(w.default.CardTitle, {
            className: "my-12",
            href: eO,
            title: ek
        }), eu[46] = eO, eu[47] = ek, eu[48] = Q) : Q = eu[48];
        let e1 = !!eL;
        eu[49] !== e_ || eu[50] !== e1 || eu[51] !== eL ? (G = (0, t.jsx)("div", {
            className: "flex",
            children: (0, t.jsx)(u.default, {
                variant: e_,
                size: "large",
                showDiscount: e1,
                discountLabel: eL
            })
        }), eu[49] = e_, eu[50] = e1, eu[51] = eL, eu[52] = G) : G = eu[52], eu[53] !== eW || eu[54] !== eg ? (X = eW && (0, t.jsx)("div", {
            className: "my-32 w-fit",
            children: (0, t.jsx)(g.default, {
                label: eW.cardLabel,
                cryptoCurrency: eW.cryptoCurrency,
                theme: eg,
                ...eW.link && {
                    drawer: eW.link
                }
            })
        }), eu[53] = eW, eu[54] = eg, eu[55] = X) : X = eu[55], eu[56] !== e_.promoInfoLink || eu[57] !== e_.promoInfoText || eu[58] !== eg ? (Y = e_ ? .promoInfoText && (0, t.jsx)("div", {
            className: "my-32 w-fit",
            children: (0, t.jsx)(j.default, {
                promoInfoText: e_.promoInfoText,
                promoInfoLink: e_.promoInfoLink,
                theme: eg
            })
        }), eu[56] = e_.promoInfoLink, eu[57] = e_.promoInfoText, eu[58] = eg, eu[59] = Y) : Y = eu[59];
        let e2 = (void 0 === ex || ex) && "md:h-32";
        eu[60] !== e2 ? (K = (0, b.default)("mb-12 flex items-center gap-12", e2), eu[60] = e2, eu[61] = K) : K = eu[61], eu[62] !== eO || eu[63] !== ey || eu[64] !== eg || eu[65] !== eN ? (Z = eN > 0 && (0, t.jsx)(s.default, {
            href: `${eO}#reviews`,
            children: (0, t.jsx)(f.default, {
                rating: ey,
                totalReviews: eN,
                color: "dark" === eg ? "white" : "black"
            })
        }), eu[62] = eO, eu[63] = ey, eu[64] = eg, eu[65] = eN, eu[66] = Z) : Z = eu[66], eu[67] !== K || eu[68] !== Z ? (ee = (0, t.jsx)("div", {
            className: K,
            children: Z
        }), eu[67] = K, eu[68] = Z, eu[69] = ee) : ee = eu[69];
        let e3 = ef && (0, t.jsxs)("div", {
            "data-testid": "hardware-wallet-card__features",
            className: "flex flex-wrap gap-8",
            children: [ef.length > 0 && ef.filter(e => eP.includes(e.title)).map(e => {
                let a = eq(e.icon, eg);
                return (0, t.jsx)(o.default, {
                    variant: a,
                    theme: eg,
                    size: "small",
                    label: e.title,
                    icon: e.icon
                }, e.title)
            }), 0 === ef.length && eb.map(e => {
                let a = eq(e.icon, eg);
                return (0, t.jsx)(o.default, {
                    variant: a,
                    theme: eg,
                    size: "small",
                    label: e.title,
                    icon: e.icon
                }, e.title)
            })]
        });
        eu[70] !== e_ || eu[71] !== eU || eu[72] !== eT || eu[73] !== em.handle || eu[74] !== eC || eu[75] !== l ? (et = eU && (0, t.jsx)("div", {
            className: "my-16",
            "data-cs-override": `${em.handle}-colors`,
            children: (0, t.jsx)(m.default, {
                className: "flex-col",
                currentVariant: e_,
                onChange: eV,
                variants: l,
                secondaryVariants: eC,
                primaryVariants: eT
            })
        }), eu[70] = e_, eu[71] = eU, eu[72] = eT, eu[73] = em.handle, eu[74] = eC, eu[75] = l, eu[76] = et) : et = eu[76];
        let e4 = eU ? "" : "pt-16";
        return eu[77] !== e4 ? (ea = (0, b.default)(e4, "mt-auto mb-12 flex flex-wrap justify-between gap-16 md:mb-24"), eu[77] = e4, eu[78] = ea) : ea = eu[78], eu[79] !== eE || eu[80] !== e_ || eu[81] !== eX || eu[82] !== em || eu[83] !== eM || eu[84] !== eg || eu[85] !== ek || eu[86] !== eF ? (el = (0, t.jsx)("div", {
            children: !eX && em.notifyMeFormName ? (0, t.jsx)(x.default, {
                formName: em.notifyMeFormName,
                variant: e_,
                dataCsOverrideId: `notify-me-${em.handle}`,
                theme: eg,
                buttonSize: "medium"
            }) : eX ? (0, t.jsx)(c.default, {
                label: eM("productCards.addToCard"),
                variant: "primary-orange",
                size: "medium",
                onClick: () => eE([{
                    product: em,
                    variantId: eF
                }]),
                dataCsOverrideId: `${em.handle}-atc`
            }) : (0, t.jsx)(_.default, {
                productName: ek,
                variantId: e_.id,
                variantName: e_.title,
                sku: e_.sku,
                label: eM("productCards.outOfStock"),
                variant: "primary-orange",
                size: "medium",
                onClick: () => eE([{
                    product: em,
                    variantId: eF
                }]),
                dataCsOverrideId: `${em.handle}-atc`
            })
        }), eu[79] = eE, eu[80] = e_, eu[81] = eX, eu[82] = em, eu[83] = eM, eu[84] = eg, eu[85] = ek, eu[86] = eF, eu[87] = el) : el = eu[87], eu[88] !== ej || eu[89] !== eQ || eu[90] !== eg ? (ei = ej && !eQ && (0, t.jsx)("div", {
            className: "flex justify-end",
            children: (0, t.jsx)(w.default.CardFreeShipping, {
                theme: eg
            })
        }), eu[88] = ej, eu[89] = eQ, eu[90] = eg, eu[91] = ei) : ei = eu[91], eu[92] !== ea || eu[93] !== el || eu[94] !== ei ? (er = (0, t.jsxs)("div", {
            "data-testid": "hardware-wallet-card__buttons",
            className: ea,
            children: [el, ei]
        }), eu[92] = ea, eu[93] = el, eu[94] = ei, eu[95] = er) : er = eu[95], eu[96] !== eJ || eu[97] !== eR || eu[98] !== eG || eu[99] !== eg ? (es = eG ? (0, t.jsx)("div", {
            className: "mb-16 w-fit",
            children: (0, t.jsx)(o.default, {
                label: eR.title,
                variant: eR.variant ? ? "primary",
                theme: eg,
                icon: eR.icon ? ? "informationFillFlexMP"
            })
        }) : eJ ? (0, t.jsx)(o.default, {
            label: eJ.batchMessage,
            icon: "informationFillFlexMP",
            theme: eg
        }) : null, eu[96] = eJ, eu[97] = eR, eu[98] = eG, eu[99] = eg, eu[100] = es) : es = eu[100], eu[101] !== ee || eu[102] !== e3 || eu[103] !== et || eu[104] !== er || eu[105] !== es ? (en = (0, t.jsxs)("div", {
            className: "my-8 flex grow flex-col",
            children: [ee, e3, et, er, es]
        }), eu[101] = ee, eu[102] = e3, eu[103] = et, eu[104] = er, eu[105] = es, eu[106] = en) : en = eu[106], eu[107] !== q || eu[108] !== Q || eu[109] !== G || eu[110] !== X || eu[111] !== Y || eu[112] !== en ? (ed = (0, t.jsxs)("div", {
            className: q,
            children: [Q, G, X, Y, en]
        }), eu[107] = q, eu[108] = Q, eu[109] = G, eu[110] = X, eu[111] = Y, eu[112] = en, eu[113] = ed) : ed = eu[113], eu[114] !== B || eu[115] !== J || eu[116] !== ed ? (eo = (0, t.jsxs)("div", {
            className: B,
            children: [J, ed]
        }), eu[114] = B, eu[115] = J, eu[116] = ed, eu[117] = eo) : eo = eu[117], eu[118] !== eY.CardBorder || eu[119] !== eK || eu[120] !== eZ || eu[121] !== eo || eu[122] !== eg ? (ec = (0, t.jsx)(eY.CardBorder, {
            className: "h-full px-16",
            highlighted: eK,
            theme: eg,
            "data-testid": "hardware-wallet-card",
            "data-cs-override-id": eZ,
            children: eo
        }), eu[118] = eY.CardBorder, eu[119] = eK, eu[120] = eZ, eu[121] = eo, eu[122] = eg, eu[123] = ec) : ec = eu[123], ec
    };

    function P(e) {
        return e.title
    }

    function O(e) {
        return e.id
    }

    function F(e, t) {
        return "stax" === e ? "dark" === t ? "primary" : "secondary" : "dark" === t ? "secondary" : "primary"
    }
    let L = [1, 2, 4];

    function R(e, t) {
        return e + t.totalReviews
    }
    e.s(["default", 0, e => {
        let i, r, s, n, d, o, c, u, m, f = (0, a.c)(43),
            {
                title: h,
                subtitle: x,
                products: p,
                features: v,
                theme: g,
                animateCards: j
            } = e;
        f[0] !== v ? (i = void 0 === v ? [] : v, f[0] = v, f[1] = i) : i = f[1];
        let y = i,
            w = void 0 === g ? "light" : g,
            k = void 0 !== j && j;
        if (f[2] !== p || f[3] !== x || f[4] !== w || f[5] !== h) {
            let e, a, l, i;
            s = L.includes(p.length), f[11] !== p ? (e = p.reduce(R, 0), f[11] = p, f[12] = e) : e = f[12], r = e, d = "hardware-wallet-collection";
            let c = "dark" === w;
            f[13] !== c ? (a = (0, b.default)("mb-56 flex flex-col items-center gap-16 text-center", {
                "text-white": c
            }), f[13] = c, f[14] = a) : a = f[14], f[15] !== h ? (l = h && (0, t.jsx)("h2", {
                className: "responsive-display-4",
                children: h
            }), f[15] = h, f[16] = l) : l = f[16], f[17] !== x ? (i = x && (0, t.jsx)("p", {
                className: "heading-3-semi-bold font-normal",
                children: x
            }), f[17] = x, f[18] = i) : i = f[18], f[19] !== a || f[20] !== l || f[21] !== i ? (o = (0, t.jsxs)("div", {
                className: a,
                children: [l, i]
            }), f[19] = a, f[20] = l, f[21] = i, f[22] = o) : o = f[22], n = (0, b.default)("mx-auto grid gap-32", {
                "md:grid-cols-2": s
            }, {
                "md:grid-cols-2 lg:grid-cols-3 lg:gap-32": !s
            }), f[2] = p, f[3] = x, f[4] = w, f[5] = h, f[6] = r, f[7] = s, f[8] = n, f[9] = d, f[10] = o
        } else r = f[6], s = f[7], n = f[8], d = f[9], o = f[10];
        if (f[23] !== r || f[24] !== k || f[25] !== y || f[26] !== s || f[27] !== p || f[28] !== w) {
            let e;
            f[30] !== r || f[31] !== k || f[32] !== y || f[33] !== s || f[34] !== w ? (e = (e, a) => {
                let i = `ease-linear transition-all duration-500 ${["","delay-200","delay-400"][a]}`;
                return (0, t.jsx)(l.Transition, {
                    as: "div",
                    appear: k,
                    show: !0,
                    enter: i,
                    enterFrom: "opacity-0 translate-y-10",
                    enterTo: "opacity-100 translate-y-0",
                    children: (0, t.jsx)(V, {
                        product: e,
                        collectionFeatures: y,
                        theme: w,
                        isLayoutHorizontal: s,
                        showReviews: !!r
                    })
                }, e.handle)
            }, f[30] = r, f[31] = k, f[32] = y, f[33] = s, f[34] = w, f[35] = e) : e = f[35], c = p.map(e), f[23] = r, f[24] = k, f[25] = y, f[26] = s, f[27] = p, f[28] = w, f[29] = c
        } else c = f[29];
        return f[36] !== n || f[37] !== c ? (u = (0, t.jsx)("div", {
            className: n,
            children: c
        }), f[36] = n, f[37] = c, f[38] = u) : u = f[38], f[39] !== d || f[40] !== o || f[41] !== u ? (m = (0, t.jsxs)("div", {
            "data-testid": d,
            children: [o, u]
        }), f[39] = d, f[40] = o, f[41] = u, f[42] = m) : m = f[42], m
    }], 739504), e.s([], 828278)
}, 431877, 119978, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(126019),
        i = e.i(41158),
        r = e.i(870155);
    e.i(643781);
    var s = e.i(989606),
        n = e.i(495854),
        d = e.i(217837),
        o = e.i(455108);
    let c = e => {
        let i, r, s, n = (0, a.c)(7),
            {
                showLedgerLogo: d,
                brandLogo: o
            } = e;
        return d || o ? (n[0] !== d ? (i = d && (0, t.jsx)("div", {
            className: "max-w-xs",
            children: (0, t.jsx)(l.default, {
                src: "/ledger-logo-long-white.svg",
                alt: "Ledger Logo",
                height: 32,
                width: 95
            })
        }), n[0] = d, n[1] = i) : i = n[1], n[2] !== o ? (r = o && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                className: "text-white body-1 font-normal",
                children: "x"
            }), (0, t.jsx)("div", {
                className: "relative h-40 w-128 max-w-128",
                children: (0, t.jsx)(l.default, {
                    src: o.url,
                    alt: o.title ? ? "",
                    fill: !0,
                    style: {
                        objectFit: "contain"
                    }
                })
            })]
        }), n[2] = o, n[3] = r) : r = n[3], n[4] !== i || n[5] !== r ? (s = (0, t.jsxs)("div", {
            className: "mb-16 flex flex-row items-center justify-center gap-16 md:justify-start",
            children: [i, r]
        }), n[4] = i, n[5] = r, n[6] = s) : s = n[6], s) : null
    };
    var u = e.i(270314),
        m = e.i(393783),
        f = e.i(44073),
        h = e.i(349057);
    e.i(108399);
    var x = e.i(860231);
    e.i(664157);
    var p = e.i(271179);
    let v = e => {
        let l, i, r = (0, a.c)(4),
            {
                bulletPointsWithIcon: s
            } = e;
        return r[0] !== s ? (l = s.map(g), r[0] = s, r[1] = l) : l = r[1], r[2] !== l ? (i = (0, t.jsx)("ul", {
            className: "flex flex-col gap-0 divide-y divide-solid divide-neutral-200 md:gap-8 md:divide-none md:py-16",
            children: l
        }), r[2] = l, r[3] = i) : i = r[3], i
    };

    function g(e, a) {
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
        let x, g, b, j, y, w, k, N, C, T, S, z, I, _, V, P, O, F, L, R, E = (0, a.c)(71),
            {
                title: M,
                description: D,
                image: A,
                brandLogo: B,
                showLedgerLogo: $,
                miniTitle: H,
                emphasisStyle: W,
                queryParam: U,
                subDescriptionLink: J,
                cta: q,
                scrollToButton: Q,
                theme: G,
                loopVideo: X,
                videoUrl: Y,
                countdownEndDate: K,
                bulletPointsWithIcon: Z,
                buyMode: ee
            } = e,
            et = void 0 === W ? "primary" : W,
            ea = void 0 === G ? "dark" : G;
        E[0] !== D || E[1] !== et ? (x = (0, r.default)(D, {
            style: et
        }), E[0] = D, E[1] = et, E[2] = x) : x = E[2];
        let el = x;
        E[3] !== et || E[4] !== M ? (g = (0, r.default)(M, {
            style: et
        }), E[3] = et, E[4] = M, E[5] = g) : g = E[5];
        let ei = g,
            {
                enteredViaLedgerLive: er
            } = (0, h.default)(),
            {
                t: es
            } = (0, p.useTranslation)("productUpgrade"),
            en = (0, d.useSearchParams)(),
            ed = en ? .get("utm_id");
        if (!ed && U || ed && U !== ed) return null;
        let eo = "dark" === ea ? "bg-black" : "bg-neutral-50",
            ec = !er && "navigation-safe-space";
        E[6] !== eo || E[7] !== ec ? (b = (0, n.default)(eo, ec), E[6] = eo, E[7] = ec, E[8] = b) : b = E[8];
        let eu = q ? "flex-col-reverse" : "flex-col",
            em = q && H ? "justify-between" : "justify-center";
        E[9] !== eu || E[10] !== em ? (j = (0, n.default)("relative flex items-center overflow-hidden pb-48 md:h-full md:flex-row md:pb-0 rtl:md:flex-row-reverse", eu, em), E[9] = eu, E[10] = em, E[11] = j) : j = E[11];
        let ef = "dark" === ea ? "text-white" : "text-black",
            eh = q && H ? "max-w-xl" : "",
            ex = Y && "w-full md:w-16/2";
        return E[12] !== ef || E[13] !== eh || E[14] !== ex ? (y = (0, n.default)("flex flex-col gap-8 text-center md:pt-64 md:pb-80 md:text-start", ef, eh, ex), E[12] = ef, E[13] = eh, E[14] = ex, E[15] = y) : y = E[15], E[16] !== B || E[17] !== $ ? (w = (0, t.jsx)(c, {
            brandLogo: B,
            showLedgerLogo: $
        }), E[16] = B, E[17] = $, E[18] = w) : w = E[18], E[19] !== B || E[20] !== H || E[21] !== $ || E[22] !== ea ? (k = (!B || !$) && H && (0, t.jsx)("h2", {
            className: "flex justify-center pt-16 uppercase md:justify-start",
            children: (0, t.jsx)(f.default, {
                label: H,
                variant: "grey",
                theme: ea
            })
        }), E[19] = B, E[20] = H, E[21] = $, E[22] = ea, E[23] = k) : k = E[23], E[24] !== ei ? (N = (0, t.jsx)("h1", {
            className: "responsive-display-4",
            children: ei
        }), E[24] = ei, E[25] = N) : N = E[25], E[26] !== Z ? (C = Z ? .length ? (0, t.jsx)(v, {
            bulletPointsWithIcon: Z
        }) : null, E[26] = Z, E[27] = C) : C = E[27], E[28] !== el || E[29] !== ea ? (T = el && (0, t.jsx)("p", {
            className: (0, n.default)("heading-4 pt-16", "dark" === ea ? "text-neutral-200" : "text-neutral-700"),
            children: el
        }), E[28] = el, E[29] = ea, E[30] = T) : T = E[30], E[31] !== J || E[32] !== ea ? (S = J ? .url && (0, t.jsx)(i.default, {
            className: (0, n.default)("body-3 underline", "dark" === ea ? "text-neutral-200" : "text-neutral-700"),
            href: J.url,
            "data-cs-override-id": "sub-description-link",
            children: J.label
        }), E[31] = J, E[32] = ea, E[33] = S) : S = E[33], E[34] !== ee || E[35] !== es ? (z = "device-unlock-lns" === ee && (0, t.jsx)("div", {
            className: "body-1 mt-16 block rounded-md border border-neutral-200 p-8 font-normal lg:hidden",
            children: (0, t.jsx)("p", {
                children: es("disclaimerOnMobile")
            })
        }), E[34] = ee, E[35] = es, E[36] = z) : z = E[36], E[37] !== q || E[38] !== Q ? (I = q && (0, t.jsx)("div", {
            className: "flex justify-center pt-24 md:justify-start",
            children: (0, t.jsx)(s.default, {
                icon: q.displayAnchorArrow ? "arrowDown" : void 0,
                label: q.label,
                href: q.url,
                size: "medium",
                dataCsOverrideId: "hero-cta",
                ...Q && {
                    onClick: e => Q(e)
                }
            })
        }), E[37] = q, E[38] = Q, E[39] = I) : I = E[39], E[40] !== y || E[41] !== w || E[42] !== k || E[43] !== N || E[44] !== C || E[45] !== T || E[46] !== S || E[47] !== z || E[48] !== I ? (_ = (0, t.jsxs)("div", {
            className: y,
            children: [w, k, N, C, T, S, z, I]
        }), E[40] = y, E[41] = w, E[42] = k, E[43] = N, E[44] = C, E[45] = T, E[46] = S, E[47] = z, E[48] = I, E[49] = _) : _ = E[49], E[50] !== A || E[51] !== M || E[52] !== Y ? (V = A && !Y && (0, t.jsx)(l.default, {
            src: A.url,
            alt: M,
            priority: !0,
            height: 480,
            width: 650,
            className: "h-full object-contain md:max-w-xs lg:max-w-full"
        }), E[50] = A, E[51] = M, E[52] = Y, E[53] = V) : V = E[53], E[54] !== X || E[55] !== M || E[56] !== Y ? (P = Y && (0, t.jsx)("div", {
            className: "w-full p-16 md:w-16/2",
            children: (0, t.jsx)(u.default, {
                autoPlay: !0,
                playsInline: !0,
                className: "z-1 w-full",
                loop: X,
                muted: !0,
                source: Y,
                title: M
            })
        }), E[54] = X, E[55] = M, E[56] = Y, E[57] = P) : P = E[57], E[58] !== j || E[59] !== _ || E[60] !== V || E[61] !== P ? (O = (0, t.jsxs)("div", {
            className: j,
            children: [_, V, P]
        }), E[58] = j, E[59] = _, E[60] = V, E[61] = P, E[62] = O) : O = E[62], E[63] !== K ? (F = K && (0, t.jsx)(m.default, {
            countdownEndDate: K
        }), E[63] = K, E[64] = F) : F = E[64], E[65] !== O || E[66] !== F ? (L = (0, t.jsxs)(o.default.Section, {
            verticalSpacing: "none",
            as: "div",
            children: [O, F]
        }), E[65] = O, E[66] = F, E[67] = L) : L = E[67], E[68] !== L || E[69] !== b ? (R = (0, t.jsx)("header", {
            className: b,
            children: L
        }), E[68] = L, E[69] = b, E[70] = R) : R = E[70], R
    }], 119978), e.s([], 431877)
}, 697526, (e, t, a) => {
    t.exports = [{
        incomingPath: "/pages/ledger-nano-gen5",
        featureFlag: "comparisonblock_gen5_mp_march26"
    }, {
        incomingPath: "/pages/march-2026-added-value-promo",
        featureFlag: "campaign_march26"
    }]
}, 891150, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576);
    e.i(663485);
    var l = e.i(98887),
        i = e.i(217920),
        r = e.i(191788),
        s = e.i(580665);
    e.i(536168);
    var n = e.i(452693),
        d = e.i(126019),
        o = e.i(41158);
    e.i(831184);
    var c = e.i(229620);
    e.i(310047);
    var u = e.i(482441),
        m = e.i(70471);
    let f = "flex items-center justify-center rounded-full bg-black px-16 py-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2";

    function h(e) {
        let l, i, r, s, n = (0, a.c)(15),
            {
                label: h,
                url: x,
                iconUrl: p
            } = e;
        n[0] !== x ? (l = x.startsWith("#"), n[0] = x, n[1] = l) : l = n[1];
        let v = l;
        n[2] !== x ? (i = (0, m.getLinkTarget)(x), n[2] = x, n[3] = i) : i = n[3];
        let g = i,
            b = "_blank" === g,
            j = b ? `${h} (opens in new tab)` : h;
        n[4] !== v || n[5] !== x ? (r = () => {
            if (!c.isBrowser || !v) return;
            let e = x.slice(1),
                t = document.getElementById(e);
            t && (globalThis.history.pushState(null, "", `#${t.id}`), globalThis.scrollTo({
                behavior: "smooth",
                top: t.getBoundingClientRect().top - document.body.getBoundingClientRect().top - (c.isBrowser && Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--navigation-height-mobile"), 10) || 0)
            }))
        }, n[4] = v, n[5] = x, n[6] = r) : r = n[6];
        let y = r;
        if (n[7] !== j || n[8] !== y || n[9] !== p || n[10] !== v || n[11] !== b || n[12] !== g || n[13] !== x) {
            let e = v ? (0, t.jsx)("button", {
                type: "button",
                onClick: y,
                className: f,
                "aria-label": j,
                children: (0, t.jsx)(d.default, {
                    src: p,
                    alt: "",
                    width: 20,
                    height: 20
                })
            }) : (0, t.jsx)(o.default, {
                href: x,
                className: f,
                "aria-label": j,
                target: g,
                ...b && {
                    rel: "noopener noreferrer"
                },
                children: (0, t.jsx)(d.default, {
                    src: p,
                    alt: "",
                    width: 20,
                    height: 20
                })
            });
            s = (0, t.jsx)(u.default, {
                dataCsOverrideId: "product-sticky-button",
                children: e
            }), n[7] = j, n[8] = y, n[9] = p, n[10] = v, n[11] = b, n[12] = g, n[13] = x, n[14] = s
        } else s = n[14];
        return s
    }
    var x = e.i(357638);
    let p = ({
        dynamicContent: e,
        buyMode: a,
        marketingNavigation: l,
        customMarketingNavigationButton: i,
        marketingNavigationTitle: d,
        stickyButton: o
    }) => {
        let {
            variantLists: c,
            currentVariant: u,
            setCurrentVariant: m
        } = (0, s.usePageBuilderVariantLists)(), f = (0, r.useRef)(e.map(e => "MarketingHeader" !== e.type && e.marketingNavigationSectionId).filter(Boolean).map(() => r.default.createRef()));
        return (0, t.jsxs)(t.Fragment, {
            children: [l && d && (0, t.jsx)(n.default, {
                navigation: l,
                currentVariant: u,
                setCurrentVariant: m,
                variants: c ? .flatMap(e => e.variants) || [],
                sectionRefs: f.current,
                overrideButton: i,
                overrideTitle: d
            }), (0, t.jsx)(x.default, {
                dynamicContent: e,
                buyMode: a,
                sectionRefs: f.current
            }), o && (0, t.jsx)(h, { ...o
            })]
        })
    };
    var v = e.i(203828),
        g = e.i(480495),
        b = e.i(715108),
        j = e.i(814532);
    new TextEncoder;
    let y = new TextDecoder;
    class w extends Error {
        constructor(e, t) {
            super(e, t), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, Error.captureStackTrace ? .(this, this.constructor)
        }
    }
    w.code = "ERR_JOSE_GENERIC";
    class k extends w {
        constructor() {
            super(...arguments), this.code = "ERR_JWT_INVALID"
        }
    }
    k.code = "ERR_JWT_INVALID";
    var N = e.i(610014);
    let C = "exclusive-offer-";
    var T = e.i(495854),
        S = e.i(697526),
        z = e.i(595990);
    let I = e => {
        let {
            featureFlag: t
        } = e;
        return (0, z.useFeatureFlag)(t), null
    };

    function _(e) {
        return e.unlock
    }

    function V(e) {
        return e.unlock
    }

    function P(e) {
        return e.setEligible
    }
    e.s(["__N_SSG", 0, !0, "default", 0, e => {
        let n, d, o, c, u, m, f, h, x, w, z = (0, a.c)(36),
            {
                settings: O,
                page: F,
                footer: L,
                navigationData: R
            } = e,
            {
                buyMode: E,
                content: M,
                pageMeta: D,
                dynamicContent: A,
                theme: B,
                marketingNavigation: $,
                customMarketingNavigationButton: H,
                marketingNavigationTitle: W,
                stickyButton: U
            } = F,
            J = (0, b.default)(_),
            q = (0, j.default)(V),
            Q = (x = (0, N.default)(e => e.setError), w = (0, N.default)(e => e.setEligible), e => {
                let t = "string" == typeof e ? e : e ? .[0];
                if (!t) return void x();
                try {
                    let e = function(e) {
                        let t, a;
                        if ("string" != typeof e) throw new k("JWTs must use Compact JWS serialization, JWT must be a string");
                        let {
                            1: l,
                            length: i
                        } = e.split(".");
                        if (5 === i) throw new k("Only JWTs using Compact JWS serialization can be decoded");
                        if (3 !== i) throw new k("Invalid JWT");
                        if (!l) throw new k("JWTs must contain a payload");
                        try {
                            t = (e => {
                                let t = e;
                                t instanceof Uint8Array && (t = y.decode(t)), t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
                                try {
                                    var a = t;
                                    let e = atob(a),
                                        l = new Uint8Array(e.length);
                                    for (let t = 0; t < e.length; t++) l[t] = e.charCodeAt(t);
                                    return l
                                } catch {
                                    throw TypeError("The input to be decoded is not correctly encoded.")
                                }
                            })(l)
                        } catch {
                            throw new k("Failed to base64url decode the payload")
                        }
                        try {
                            a = JSON.parse(y.decode(t))
                        } catch {
                            throw new k("Failed to parse the decoded payload as JSON")
                        }
                        if (! function(e) {
                                if ("object" != typeof e || null === e || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
                                if (null === Object.getPrototypeOf(e)) return !0;
                                let t = e;
                                for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                                return Object.getPrototypeOf(e) === t
                            }(a)) throw new k("Invalid JWT Claims Set");
                        return a
                    }(t);
                    if ("string" != typeof e.campaignId) return void x();
                    let a = e.exp;
                    if (!a) return void x();
                    let l = "string" == typeof a ? parseInt(a, 10) : a,
                        i = Math.floor(Date.now() / 1e3);
                    if (l < i) return void x();
                    let r = Math.max(0, l - i),
                        s = e.campaignId,
                        n = `${C}${s}`;
                    (0, g.setCookie)(n, t, {
                        maxAge: r,
                        path: "/"
                    }), w()
                } catch (e) {
                    console.error("Failed to decode voucher JWT:", e), x()
                }
            }),
            G = (0, N.default)(P),
            X = F.variantLists,
            Y = (0, v.useRouter)();
        z[0] !== Y.asPath ? (n = S.default.find(e => e.incomingPath === Y.asPath) ? .featureFlag, z[0] = Y.asPath, z[1] = n) : n = z[1];
        let K = n;
        z[2] !== E || z[3] !== Q || z[4] !== Y.isReady || z[5] !== Y.query || z[6] !== G || z[7] !== J || z[8] !== q ? (d = () => {
            if ("device-unlock-lns" === E)((0, g.getCookie)("upgrade_program_token") || (0, g.getCookie)("lns_upgrade_token")) && J();
            else if ("recovery-key-claim" === E)(0, g.getCookie)("recovery_key_claim_token") && q();
            else if ("cro-campaign" === E) {
                if (!Y.isReady) return;
                let e = Y.query.voucher;
                e ? Q(e) : document.cookie.includes(C) && G()
            }
        }, z[2] = E, z[3] = Q, z[4] = Y.isReady, z[5] = Y.query, z[6] = G, z[7] = J, z[8] = q, z[9] = d) : d = z[9], z[10] !== Y.isReady ? (o = [Y.isReady], z[10] = Y.isReady, z[11] = o) : o = z[11], (0, r.useEffect)(d, o);
        let Z = !!$;
        return z[12] === Symbol.for("react.memo_cache_sentinel") ? (c = {
            page_type: "product detail page"
        }, z[12] = c) : c = z[12], z[13] !== K ? (u = !!K && (0, t.jsx)(I, {
            featureFlag: K
        }), z[13] = K, z[14] = u) : u = z[14], z[15] !== M ? (m = M && (0, t.jsx)(i.default, {
            content: M
        }), z[15] = M, z[16] = m) : m = z[16], z[17] !== E || z[18] !== H || z[19] !== A || z[20] !== $ || z[21] !== W || z[22] !== U || z[23] !== B || z[24] !== X ? (f = A && (0, t.jsx)(s.PageBuilderVariantListsProvider, {
            variantLists: X,
            children: (0, t.jsx)("div", {
                className: (0, T.default)("dark" === B && "bg-black", "light" === B && "bg-neutral-50"),
                children: (0, t.jsx)(p, {
                    dynamicContent: A,
                    buyMode: E,
                    marketingNavigationTitle: W,
                    marketingNavigation: $,
                    customMarketingNavigationButton: H,
                    stickyButton: U
                })
            })
        }), z[17] = E, z[18] = H, z[19] = A, z[20] = $, z[21] = W, z[22] = U, z[23] = B, z[24] = X, z[25] = f) : f = z[25], z[26] !== L || z[27] !== R || z[28] !== D || z[29] !== O || z[30] !== Z || z[31] !== u || z[32] !== m || z[33] !== f || z[34] !== B ? (h = (0, t.jsxs)(l.default, {
            theme: B,
            pageMeta: D,
            siteSettings: O,
            footer: L,
            navigationData: R,
            hideNavOnScroll: Z,
            trackingData: c,
            children: [u, m, f]
        }), z[26] = L, z[27] = R, z[28] = D, z[29] = O, z[30] = Z, z[31] = u, z[32] = m, z[33] = f, z[34] = B, z[35] = h) : h = z[35], h
    }], 891150)
}, 334487, (e, t, a) => {
    let l = "/pages/[handle]";
    (window.__NEXT_P = window.__NEXT_P || []).push([l, () => e.r(891150)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push([l])
    })
}, 648761, e => {
    e.v(t => Promise.all(["static/chunks/0~1y3rya3twqr.js"].map(t => e.l(t))).then(() => t(493594)))
}, 828805, e => {
    e.v(t => Promise.all(["static/chunks/17m4lcp7g44-4.js"].map(t => e.l(t))).then(() => t(879466)))
}, 153459, e => {
    e.v(t => Promise.all(["static/chunks/0oryq34t1edi..js"].map(t => e.l(t))).then(() => t(531976)))
}, 854172, e => {
    e.v(t => Promise.all(["static/chunks/0t50en83hc_a7.js"].map(t => e.l(t))).then(() => t(202295)))
}, 96530, e => {
    e.v(t => Promise.all(["static/chunks/0d89x2vlmwhw6.js"].map(t => e.l(t))).then(() => t(912393)))
}]);

//# sourceMappingURL=06nfklusrs4vd.js.map