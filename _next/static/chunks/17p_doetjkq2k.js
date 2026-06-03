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
        let l, r, o, c, u, m, h, f, x, v, g = (0, a.c)(25),
            {
                image: b,
                hideImageMobile: p,
                text: j,
                subText: y,
                hasDrawer: w,
                link: k,
                isClickable: N
            } = e;
        return g[0] !== p || g[1] !== b ? (l = b && "object" == typeof b && (0, t.jsx)(s.default, {
            src: b.url,
            alt: b.title || "",
            height: 40,
            width: 40,
            className: (0, i.default)("md:flex", p && "hidden")
        }), g[0] = p, g[1] = b, g[2] = l) : l = g[2], g[3] !== b ? (r = "string" == typeof b && (0, t.jsx)(n.default, {
            name: b,
            size: 20,
            strokeWidth: 3.5
        }), g[3] = b, g[4] = r) : r = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, i.default)("flex flex-col items-start gap-1"), c = (0, i.default)("text-start"), g[5] = o, g[6] = c) : (o = g[5], c = g[6]), g[7] !== j ? (u = (0, t.jsx)("span", {
            className: c,
            children: j
        }), g[7] = j, g[8] = u) : u = g[8], g[9] !== y ? (m = y && (0, t.jsx)("span", {
            className: (0, i.default)("text-start"),
            children: y
        }), g[9] = y, g[10] = m) : m = g[10], g[11] !== w || g[12] !== k ? (h = !w && k ? .url && (0, t.jsx)(d.default, {
            href: k.url,
            className: "underline",
            children: k.label
        }), g[11] = w, g[12] = k, g[13] = h) : h = g[13], g[14] !== u || g[15] !== m || g[16] !== h ? (f = (0, t.jsxs)("div", {
            className: o,
            children: [u, m, h]
        }), g[14] = u, g[15] = m, g[16] = h, g[17] = f) : f = g[17], g[18] !== N ? (x = N && (0, t.jsx)("span", {
            className: "ms-auto",
            children: (0, t.jsx)(n.default, {
                name: "arrowRight",
                size: 20,
                strokeWidth: 3.5
            })
        }), g[18] = N, g[19] = x) : x = g[19], g[20] !== l || g[21] !== r || g[22] !== f || g[23] !== x ? (v = (0, t.jsxs)(t.Fragment, {
            children: [l, r, f, x]
        }), g[20] = l, g[21] = r, g[22] = f, g[23] = x, g[24] = v) : v = g[24], v
    }
    e.s(["default", 0, e => {
        var s;
        let n, d, c, u, m, h, f = (0, a.c)(37),
            {
                text: x,
                subText: v,
                link: g,
                image: b,
                theme: p,
                isFull: j,
                hideImageMobile: y,
                textSize: w,
                onClick: k
            } = e,
            N = void 0 === p ? "light" : p,
            C = void 0 !== y && y;
        f[0] !== x ? (n = (0, l.default)(x, {
            font: "bold"
        }), f[0] = x, f[1] = n) : n = f[1];
        let S = n;
        f[2] !== v ? (d = (0, l.default)(v, {
            font: "bold"
        }), f[2] = v, f[3] = d) : d = f[3];
        let T = d;
        if (!x) return null;
        f[4] !== g ? (c = !!((s = g) && s.dynamicDrawerContent && s.dynamicDrawerContent.length > 0), f[4] = g, f[5] = c) : c = f[5];
        let V = c,
            z = !!(V || k),
            I = z && "cursor-pointer",
            P = "light" === N ? "border-neutral-200 bg-white" : "border-neutral-600 bg-neutral-900 text-white",
            _ = void 0 !== j && j ? "w-full justify-start" : "w-fit",
            D = "caption" === (void 0 === w ? "sm" : w) ? "body-3" : "text-sm";
        f[6] !== _ || f[7] !== D || f[8] !== I || f[9] !== P ? (u = (0, i.default)("flex items-center justify-center gap-4 rounded-xs border px-16 py-8", I, P, _, D), f[6] = _, f[7] = D, f[8] = I, f[9] = P, f[10] = u) : u = f[10];
        let L = u,
            F = "dark" === N ? "dark" : "light";
        if (V) {
            let e, a, l = g.label ? ? x;
            return f[11] !== S || f[12] !== T || f[13] !== V || f[14] !== C || f[15] !== b || f[16] !== z || f[17] !== g ? (e = (0, t.jsx)(o, {
                hasDrawer: V,
                isClickable: z,
                image: b,
                link: g,
                hideImageMobile: C,
                text: S,
                subText: T
            }), f[11] = S, f[12] = T, f[13] = V, f[14] = C, f[15] = b, f[16] = z, f[17] = g, f[18] = e) : e = f[18], f[19] !== L || f[20] !== F || f[21] !== g.dynamicDrawerContent || f[22] !== l || f[23] !== e ? (a = (0, t.jsx)(r.default, {
                label: l,
                dynamicDrawerContent: g.dynamicDrawerContent,
                drawerTheme: F,
                buttonClassname: L,
                dataCsOverrideId: void 0,
                children: e
            }), f[19] = L, f[20] = F, f[21] = g.dynamicDrawerContent, f[22] = l, f[23] = e, f[24] = a) : a = f[24], a
        }
        return f[25] !== S || f[26] !== T || f[27] !== V || f[28] !== C || f[29] !== b || f[30] !== z || f[31] !== g ? (m = (0, t.jsx)(o, {
            hasDrawer: V,
            isClickable: z,
            image: b,
            link: g,
            hideImageMobile: C,
            text: S,
            subText: T
        }), f[25] = S, f[26] = T, f[27] = V, f[28] = C, f[29] = b, f[30] = z, f[31] = g, f[32] = m) : m = f[32], f[33] !== L || f[34] !== k || f[35] !== m ? (h = (0, t.jsx)("div", {
            className: L,
            onClick: k,
            children: m
        }), f[33] = L, f[34] = k, f[35] = m, f[36] = h) : h = f[36], h
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
        h = e.i(264516),
        f = e.i(985129);
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
                                    children: (0, t.jsx)(f.default, {
                                        colorName: o(`variantColors.${(0,h.toCamelCase)(e.title)}`),
                                        colorClassName: a.colorClass,
                                        isSelected: r,
                                        isOutOfStock: l
                                    })
                                }), (0, t.jsx)("div", {
                                    "data-testid": "nav-color-swatch",
                                    children: o(`variantColors.${(0,h.toCamelCase)(e.title)}`)
                                })]
                            })
                        }
                    }, e.id)
                }, r[4] = o, r[5] = d, r[6] = e) : e = r[6], l = s.filter(g).map(e), r[0] = o, r[1] = d, r[2] = s, r[3] = l
            } else l = r[3];
            return r[7] !== l ? (i = (0, t.jsx)(t.Fragment, {
                children: l
            }), r[7] = l, r[8] = i) : i = r[8], i
        },
        v = e => {
            let l, i, r, s, d, o, v, g, b = (0, a.c)(23),
                {
                    variants: p,
                    currentVariant: j,
                    onChange: y,
                    theme: w
                } = e,
                k = void 0 === w ? "light" : w,
                {
                    t: N
                } = (0, c.useTranslation)("common");
            b[0] !== j.sku ? (l = (0, m.default)(j.sku), b[0] = j.sku, b[1] = l) : l = b[1];
            let C = l;
            b[2] !== j.title ? (i = (0, h.toCamelCase)(j.title), b[2] = j.title, b[3] = i) : i = b[3];
            let S = `variantColors.${i}`;
            b[4] !== N || b[5] !== S ? (r = N(S), b[4] = N, b[5] = S, b[6] = r) : r = b[6];
            let T = C ? .colorClass ? ? "";
            b[7] !== r || b[8] !== T ? (s = (0, t.jsx)(u.ListboxButton, {
                children: (0, t.jsx)(f.default, {
                    isSelected: !0,
                    colorName: r,
                    colorClassName: T
                })
            }), b[7] = r, b[8] = T, b[9] = s) : s = b[9];
            let V = "light" === k ? "bg-white" : "bg-neutral-900 lg:bg-white";
            return b[10] !== V ? (d = (0, n.default)("fixed bottom-[73px] left-0 z-40 flex w-full flex-col gap-8 overflow-hidden rounded-t-2xl bg-white p-16 body-1 font-normal", "lg:absolute lg:-left-80 lg:top-32 lg:h-fit lg:w-fit lg:min-w-max lg:rounded-xs lg:p-8", V), b[10] = V, b[11] = d) : d = b[11], b[12] !== k || b[13] !== p ? (o = (0, t.jsx)(x, {
                variants: p,
                theme: k
            }), b[12] = k, b[13] = p, b[14] = o) : o = b[14], b[15] !== o || b[16] !== d ? (v = (0, t.jsx)(u.ListboxOptions, {
                "data-testid": "variant-selector-navigation-swatches",
                className: d,
                children: o
            }), b[15] = o, b[16] = d, b[17] = v) : v = b[17], b[18] !== j || b[19] !== y || b[20] !== v || b[21] !== s ? (g = (0, t.jsxs)(u.Listbox, {
                as: "div",
                "data-testid": "variant-selector-navigation",
                value: j,
                onChange: y,
                className: "flex justify-center",
                children: [s, v]
            }), b[18] = j, b[19] = y, b[20] = v, b[21] = s, b[22] = g) : g = b[22], g
        };

    function g(e) {
        let {
            sku: t
        } = e;
        return (0, m.default)(t)
    }
    e.i(544063);
    var b = e.i(525487),
        p = e.i(455108),
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
            let l, i, u, m, h, f, x, g, N, T, V, z, I, P, _, D, L, F, M, O, A = (0, a.c)(64),
                {
                    theme: E,
                    product: B,
                    overrideTitle: R,
                    currentVariant: $,
                    variants: H,
                    setCurrentVariant: Q,
                    onVariantChange: U,
                    navigation: Y,
                    sectionRefs: q,
                    overrideButton: W,
                    overrideButtonAnchorScroll: K,
                    addToCart: G
                } = e,
                {
                    t: J
                } = (0, c.useTranslation)("common"),
                {
                    isUSAvailable: X
                } = (0, y.default)(),
                {
                    isDeviceAvailable: Z
                } = (0, w.default)(),
                [ee, et] = (0, r.useState)(!1),
                [ea, el] = (0, r.useState)("");
            A[0] !== $ || A[1] !== Z || A[2] !== X ? (l = $ && $.availableForSale && X($.id) && Z($.sku), A[0] = $, A[1] = Z, A[2] = X, A[3] = l) : l = A[3];
            let ei = l,
                er = (O = q.map(e => e ? .current ? .id), Y.filter(({
                    url: e
                }) => e && O.includes(e.replace("#", "")))),
                es = "dark" === E ? "text-white" : "text-black",
                en = H ? .length && $ && Q;
            A[4] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
                let e = () => {
                    window.scrollY > 500 ? et(!0) : et(!1)
                };
                return window.addEventListener("scroll", e), () => {
                    window.removeEventListener("scroll", e)
                }
            }, u = [], A[4] = i, A[5] = u) : (i = A[4], u = A[5]), (0, r.useEffect)(i, u), A[6] !== Y || A[7] !== q ? (m = () => {
                if (!Y && !q) return;
                let e = new IntersectionObserver(e => {
                    let t = e.filter(C);
                    t.length > 0 ? el(t.reduce(S).target.id) : el("")
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
            }, A[6] = Y, A[7] = q, A[8] = m) : m = A[8], A[9] === Symbol.for("react.memo_cache_sentinel") ? (h = [], A[9] = h) : h = A[9], (0, r.useEffect)(m, h), A[10] !== q ? (f = (e, t) => {
                let a = q ? .find(e => e.current && e.current.id === t);
                a ? (0, j.scrollTo)(e, a) : history.pushState(null, "", e.currentTarget.href)
            }, A[10] = q, A[11] = f) : f = A[11];
            let ed = f,
                eo = !ee && "pointer-events-none";
            A[12] !== eo ? (x = (0, n.default)("md:z-navigation fixed bottom-0 left-0 z-30 hidden w-full lg:top-16 lg:bottom-auto lg:left-1/2 lg:block lg:w-[calc(100%_-_var(--spacing-16)_-_var(--spacing-16))] lg:max-w-(--breakpoint-2xl) lg:-translate-x-1/2", eo), A[12] = eo, A[13] = x) : x = A[13];
            let ec = s.motion,
                eu = ee && "opacity-100",
                em = "light" === E ? "border-t-neutral-200 bg-white lg:bg-white/80" : "border-t-neutral-800 bg-neutral-900 lg:bg-neutral-900/80";
            A[14] !== es || A[15] !== eu || A[16] !== em ? (g = (0, n.default)("w-full border-t py-8 drop-shadow-lg lg:rounded-[24px] lg:border-0 lg:py-0 lg:pr-16 lg:pl-24 lg:backdrop-blur-xl", eu, em, es), A[14] = es, A[15] = eu, A[16] = em, A[17] = g) : g = A[17];
            let eh = ee ? "visible" : "hidden",
                ef = p.default;
            A[18] !== es ? (N = (0, n.default)("body-3 lg:heading-4-semi-bold hidden overflow-hidden !text-nowrap text-ellipsis lg:block", es), A[18] = es, A[19] = N) : N = A[19];
            let ex = B ? .title || R;
            A[20] !== N || A[21] !== ex ? (T = (0, t.jsx)("div", {
                className: N,
                children: ex
            }), A[20] = N, A[21] = ex, A[22] = T) : T = A[22], A[23] !== es || A[24] !== $ || A[25] !== en ? (V = en ? (0, t.jsx)("div", {
                className: (0, n.default)("flex min-h-56 min-w-[80px] lg:hidden lg:min-h-full", es),
                "data-testid": "priceDisplay",
                children: (0, t.jsx)(o.default, {
                    size: "small",
                    direction: "vertical-reversed",
                    variant: $
                })
            }) : null, A[23] = es, A[24] = $, A[25] = en, A[26] = V) : V = A[26], A[27] !== T || A[28] !== V ? (z = (0, t.jsxs)("div", {
                className: "max-w-[190px] sm:max-w-min",
                children: [T, V]
            }), A[27] = T, A[28] = V, A[29] = z) : z = A[29];
            let ev = er && (0, t.jsx)("ul", {
                className: "col-span-3 hidden grow flex-row justify-center lg:flex",
                children: er.map((e, a) => e.url && (0, t.jsx)("li", {
                    children: (0, t.jsx)("a", {
                        href: e.url,
                        className: (0, n.default)("body-3 block h-full p-24 transition-all duration-300", "dark" === E ? "hover:bg-white/5" : "hover:bg-black/5", `#${ea}` === e.url && ("light" === E ? "tab-halo-bottom-primary" : "tab-halo-bottom-white")),
                        onClick: t => e.url && ed(t, e.url.split("#")[1]),
                        "data-cs-override-id": `sticky-nav-${a+1}`,
                        children: e.label
                    })
                }, e.label))
            });
            return A[30] !== G || A[31] !== $ || A[32] !== en || A[33] !== ei || A[34] !== U || A[35] !== W || A[36] !== B || A[37] !== Q || A[38] !== J || A[39] !== E || A[40] !== H ? (I = en ? (0, t.jsxs)(t.Fragment, {
                children: [H.length > 1 && (0, t.jsx)("div", {
                    className: "me-auto md:relative lg:me-0",
                    "data-cs-override-id": "sticky-nav-variant",
                    children: (0, t.jsx)(v, {
                        variants: H,
                        currentVariant: $,
                        onChange: U || Q,
                        theme: E
                    })
                }), (0, t.jsx)("div", {
                    className: "hidden lg:flex",
                    children: (0, t.jsx)(o.default, {
                        size: "small",
                        direction: "vertical",
                        variant: $,
                        center: !0
                    })
                }), !ei && B ? .notifyMeFormName && !W ? (0, t.jsx)(b.default, {
                    formName: B.notifyMeFormName,
                    variant: $,
                    buttonSize: "medium",
                    theme: E
                }) : (0, t.jsx)(d.default, {
                    nowrap: !1,
                    size: "small",
                    label: J(ei ? "productCards.addToCard" : "productCards.outOfStock"),
                    onClick: () => G([{
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
            }) : null, A[30] = G, A[31] = $, A[32] = en, A[33] = ei, A[34] = U, A[35] = W, A[36] = B, A[37] = Q, A[38] = J, A[39] = E, A[40] = H, A[41] = I) : I = A[41], A[42] !== W || A[43] !== K ? (P = W && (0, t.jsx)(d.default, {
                size: "small",
                label: W.label,
                ...K && {
                    onClick: e => K(e)
                },
                href: W.url
            }), A[42] = W, A[43] = K, A[44] = P) : P = A[44], A[45] !== I || A[46] !== P ? (_ = (0, t.jsxs)("div", {
                className: "flex items-center justify-end gap-16",
                children: [I, P]
            }), A[45] = I, A[46] = P, A[47] = _) : _ = A[47], A[48] !== z || A[49] !== ev || A[50] !== _ ? (D = (0, t.jsxs)("div", {
                className: "flex items-center justify-between gap-8 xl:grid xl:grid-cols-5",
                children: [z, ev, _]
            }), A[48] = z, A[49] = ev, A[50] = _, A[51] = D) : D = A[51], A[52] !== ef.Section || A[53] !== D ? (L = (0, t.jsx)(ef.Section, {
                verticalSpacing: "none",
                as: "div",
                className: "max-w-none px-0 md:px-0 lg:px-0 xl:px-0",
                children: D
            }), A[52] = ef.Section, A[53] = D, A[54] = L) : L = A[54], A[55] !== g || A[56] !== k || A[57] !== eh || A[58] !== L || A[59] !== ec.div ? (F = (0, t.jsx)(ec.div, {
                className: g,
                variants: k,
                initial: !1,
                animate: eh,
                children: L
            }), A[55] = g, A[56] = k, A[57] = eh, A[58] = L, A[59] = ec.div, A[60] = F) : F = A[60], A[61] !== F || A[62] !== x ? (M = (0, t.jsx)("nav", {
                children: (0, t.jsx)("div", {
                    className: x,
                    children: F
                })
            }), A[61] = F, A[62] = x, A[63] = M) : M = A[63], M
        };

    function C(e) {
        return e.isIntersecting
    }

    function S(e, t) {
        return e.intersectionRatio > t.intersectionRatio ? e : t
    }
    e.i(108399);
    var T = e.i(860231);
    e.i(305231);
    var V = e.i(913473);
    e.i(831184);
    var z = e.i(229620);
    let I = e => {
        let l, i, s, d, o = (0, a.c)(10),
            {
                children: c,
                dataCsOverrideId: u
            } = e,
            [m, h] = (0, r.useState)(!1);
        o[0] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
            if (!z.isBrowser) return;
            let e = () => {
                h(globalThis.scrollY > globalThis.innerHeight)
            };
            return e(), globalThis.addEventListener("scroll", e, {
                passive: !0
            }), () => globalThis.removeEventListener("scroll", e)
        }, i = [], o[0] = l, o[1] = i) : (l = o[0], i = o[1]), (0, r.useEffect)(l, i), o[2] !== m ? (s = (0, n.default)("z-navigation fixed right-16 bottom-16 rounded-2xl border border-neutral-300 p-12 lg:hidden", "bg-[linear-gradient(123deg,var(--color-light-grey-050-70)_0%,var(--color-light-grey-050-50)_100%)]", "shadow-lg backdrop-blur-sm", "translate-y-256 transition-transform duration-300 ease-in-out motion-reduce:transition-none", {
            "translate-y-0": m
        }), o[2] = m, o[3] = s) : s = o[3];
        let f = !m,
            x = !m;
        return o[4] !== c || o[5] !== u || o[6] !== s || o[7] !== f || o[8] !== x ? (d = (0, t.jsx)("div", {
            className: s,
            "data-cs-override-id": u,
            "aria-hidden": f,
            inert: x,
            children: c
        }), o[4] = c, o[5] = u, o[6] = s, o[7] = f, o[8] = x, o[9] = d) : d = o[9], d
    };
    e.s(["default", 0, I], 482441), e.s([], 310047);
    let P = e => {
        let l, i, r, s, n, d, o, u = (0, a.c)(24),
            {
                currentVariant: m,
                variants: h,
                setCurrentVariant: f,
                onVariantChange: x,
                addToCart: v
            } = e,
            {
                t: g
            } = (0, c.useTranslation)("common"),
            {
                isUSAvailable: b
            } = (0, y.default)(),
            {
                isDeviceAvailable: p
            } = (0, w.default)(),
            j = h ? .length && m && f;
        u[0] !== m || u[1] !== p || u[2] !== b ? (l = !!m && m.availableForSale && b(m.id) && p(m.sku), u[0] = m, u[1] = p, u[2] = b, u[3] = l) : l = u[3];
        let k = l;
        if (!j) return null;
        u[4] !== m || u[5] !== x || u[6] !== f || u[7] !== h ? (i = h.length > 1 && (0, t.jsx)(V.default, {
            currentVariant: m,
            onChange: x || f,
            variants: h,
            theme: "light",
            colorDot: !0,
            size: "small",
            dataCsOverrideId: "sticky-nav-variant"
        }), u[4] = m, u[5] = x, u[6] = f, u[7] = h, u[8] = i) : i = u[8], u[9] !== v || u[10] !== m.id || u[11] !== m.maxQuantityAllowed || u[12] !== m.productHandle ? (r = () => v([{
            product: {
                handle: m.productHandle,
                maxQuantityAllowed: m.maxQuantityAllowed ? ? 0
            },
            variantId: m.id,
            quantityToAdd: 1
        }]), u[9] = v, u[10] = m.id, u[11] = m.maxQuantityAllowed, u[12] = m.productHandle, u[13] = r) : r = u[13];
        let N = !k;
        return u[14] !== g ? (s = g("addToCart"), u[14] = g, u[15] = s) : s = u[15], u[16] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(T.default, {
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
            children: (0, t.jsx)(I, {
                dataCsOverrideId: "marketing-navigation-mobile",
                children: (0, t.jsxs)("div", {
                    className: "flex items-center justify-between gap-32",
                    children: [i, d]
                })
            })
        }), u[21] = i, u[22] = d, u[23] = o) : o = u[23], o
    };

    function _(e) {
        return e.id
    }
    e.s(["default", 0, e => {
        let r, s, n, d, o, c = (0, a.c)(25),
            {
                navigation: u,
                currentVariant: m,
                product: h,
                variants: f,
                setCurrentVariant: x,
                onVariantChange: v,
                theme: g,
                overrideButton: b,
                overrideButtonAnchorScroll: p,
                overrideTitle: j,
                sectionRefs: y
            } = e,
            w = void 0 === g ? "dark" : g;
        c[0] === Symbol.for("react.memo_cache_sentinel") ? (r = {
            placement: "marketingNavigation"
        }, c[0] = r) : r = c[0];
        let {
            add: k
        } = (0, l.default)(r);
        c[1] !== f ? (s = f ? .map(_) || [], c[1] = f, c[2] = s) : s = c[2];
        let C = s;
        return (0, i.usePrefetchLocalisedPrices)(C), c[3] !== k || c[4] !== m || c[5] !== u || c[6] !== v || c[7] !== b || c[8] !== p || c[9] !== j || c[10] !== h || c[11] !== y || c[12] !== x || c[13] !== w || c[14] !== f ? (n = (0, t.jsx)(N, {
            theme: w,
            product: h,
            overrideTitle: j,
            currentVariant: m,
            variants: f,
            setCurrentVariant: x,
            onVariantChange: v,
            navigation: u,
            sectionRefs: y,
            overrideButton: b,
            overrideButtonAnchorScroll: p,
            addToCart: k
        }), c[3] = k, c[4] = m, c[5] = u, c[6] = v, c[7] = b, c[8] = p, c[9] = j, c[10] = h, c[11] = y, c[12] = x, c[13] = w, c[14] = f, c[15] = n) : n = c[15], c[16] !== k || c[17] !== m || c[18] !== v || c[19] !== x || c[20] !== f ? (d = (0, t.jsx)(P, {
            currentVariant: m,
            variants: f,
            setCurrentVariant: x,
            onVariantChange: v,
            addToCart: k
        }), c[16] = k, c[17] = m, c[18] = v, c[19] = x, c[20] = f, c[21] = d) : d = c[21], c[22] !== n || c[23] !== d ? (o = (0, t.jsxs)(t.Fragment, {
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
        let s, n, d, o, c, u, m, h, f, x, v, g, b, p, j, y = (0, a.c)(35),
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
        let [C, S] = (0, i.useState)(n);
        y[4] !== N ? (d = () => {
            let e = setInterval(() => {
                S(N())
            }, 1e3);
            return () => clearInterval(e)
        }, y[4] = N, y[5] = d) : d = y[5], y[6] !== w ? (o = [w], y[6] = w, y[7] = o) : o = y[7], (0, i.useEffect)(d, o), y[8] !== k ? (c = (e, t) => k(`countdown.${e}`, {
            count: t
        }), y[8] = k, y[9] = c) : c = y[9];
        let T = c;
        y[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("div", {
            className: "bg-grey-divider h-px w-full"
        }), y[10] = u) : u = y[10];
        let V = C.days;
        y[11] !== T || y[12] !== C.days ? (m = T("days", C.days), y[11] = T, y[12] = C.days, y[13] = m) : m = y[13], y[14] !== m || y[15] !== C.days ? (h = (0, t.jsx)(r, {
            number: V,
            label: m
        }), y[14] = m, y[15] = C.days, y[16] = h) : h = y[16], y[17] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, t.jsx)("span", {
            className: "animate-countdownBlink text-neutral-700 responsive-display-4",
            children: ":"
        }), y[17] = f) : f = y[17];
        let z = C.hours;
        y[18] !== T || y[19] !== C.hours ? (x = T("hours", C.hours), y[18] = T, y[19] = C.hours, y[20] = x) : x = y[20], y[21] !== x || y[22] !== C.hours ? (v = (0, t.jsx)(r, {
            number: z,
            label: x
        }), y[21] = x, y[22] = C.hours, y[23] = v) : v = y[23], y[24] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, t.jsx)("span", {
            className: "animate-countdownBlink text-neutral-700 responsive-display-4",
            children: ":"
        }), y[24] = g) : g = y[24];
        let I = C.minutes;
        return y[25] !== T || y[26] !== C.minutes ? (b = T("minutes", C.minutes), y[25] = T, y[26] = C.minutes, y[27] = b) : b = y[27], y[28] !== b || y[29] !== C.minutes ? (p = (0, t.jsx)(r, {
            number: I,
            label: b
        }), y[28] = b, y[29] = C.minutes, y[30] = p) : p = y[30], y[31] !== v || y[32] !== p || y[33] !== h ? (j = (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
                children: [u, (0, t.jsx)("div", {
                    className: "pb-32 pt-32",
                    children: (0, t.jsxs)("div", {
                        className: "flex justify-center gap-8 sm:gap-40 md:gap-80",
                        children: [h, f, v, g, p]
                    })
                })]
            })
        }), y[31] = v, y[32] = p, y[33] = h, y[34] = j) : j = y[34], j
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
        let l, i, r, v, g, b, p, j = (0, a.c)(26),
            {
                title: y,
                contentBlocks: w,
                theme: k,
                dataCsOverrideId: N,
                sizeVariant: C
            } = e,
            S = "compact" === C ? 24 : 48,
            T = "dark" === k ? "bg-black text-white" : "bg-neutral-50 text-black";
        j[0] !== T ? (l = (0, o.default)(T), j[0] = T, j[1] = l) : l = j[1], j[2] !== y ? (i = y && (0, t.jsx)("h3", {
            className: "responsive-display-4 mb-16 text-center",
            "data-testid": "icon-cards-title",
            children: y
        }), j[2] = y, j[3] = i) : i = j[3];
        let V = "dark" === k ? "divide-neutral-600" : "divide-neutral-200";
        if (j[4] !== V ? (r = (0, o.default)("flex flex-col max-md:divide-y md:flex-row md:divide-x md:py-32 rtl:md:divide-x-reverse", V), j[4] = V, j[5] = r) : r = j[5], j[6] !== w || j[7] !== N || j[8] !== S || j[9] !== C || j[10] !== k) {
            let e;
            j[12] !== N || j[13] !== S || j[14] !== C || j[15] !== k ? (e = (e, a) => (0, t.jsxs)("div", {
                className: (0, o.default)("flex w-full flex-col gap-16 px-40 py-32 first:ps-0 last:pe-0 max-md:px-0", !x(e) && "max-md:items-center"),
                "data-cs-override-id": N && `${N}-${a+1}`,
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
                        className: (0, o.default)("body-1 m-0 font-normal", "dark" === k ? "text-neutral-200" : "text-neutral-800"),
                        children: e.subtitle
                    })
                }), e.description && (0, t.jsx)(m.motion.span, { ...f(.3),
                    children: (0, t.jsx)(d.default, {
                        content: e.description,
                        className: (0, o.default)("rich-text-p:m-0 rich-text-p:heading-4", "dark" === k ? "text-neutral-200" : "text-neutral-800")
                    })
                }), e.link ? .dynamicDrawerContent && (0, t.jsx)(m.motion.span, { ...f(.3),
                    "data-testid": "icon-cards-link-to-drawer",
                    children: (0, t.jsx)(h.default, {
                        label: e.link.label,
                        dynamicDrawerContent: e.link.dynamicDrawerContent,
                        drawerTheme: k,
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
                                color: "dark" === k ? "white" : "black"
                            })
                        })]
                    })
                })]
            }, e.title), j[12] = N, j[13] = S, j[14] = C, j[15] = k, j[16] = e) : e = j[16], v = w.map(e), j[6] = w, j[7] = N, j[8] = S, j[9] = C, j[10] = k, j[11] = v
        } else v = j[11];
        return j[17] !== r || j[18] !== v ? (g = (0, t.jsx)("div", {
            className: r,
            children: v
        }), j[17] = r, j[18] = v, j[19] = g) : g = j[19], j[20] !== i || j[21] !== g ? (b = (0, t.jsxs)(n.default.Section, {
            verticalSpacing: "none",
            children: [i, g]
        }), j[20] = i, j[21] = g, j[22] = b) : b = j[22], j[23] !== l || j[24] !== b ? (p = (0, t.jsx)("div", {
            className: l,
            "data-testid": "icon-cards",
            children: b
        }), j[23] = l, j[24] = b, j[25] = p) : p = j[25], p
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
                    image: h,
                    imageForMobile: f,
                    theme: x
                } = e;
            if (!h) return null;
            let v = h.title || "Product image",
                g = f ? .title || v,
                b = h.url,
                p = m ? "left-0" : "right-0",
                j = f && "hidden md:block";
            u[0] !== p || u[1] !== j ? (l = (0, s.default)("absolute top-0 bottom-0 z-0 h-full w-3/5 object-cover object-right xl:w-auto xl:object-center", p, j), u[0] = p, u[1] = j, u[2] = l) : l = u[2], u[3] !== v || u[4] !== h.url || u[5] !== l ? (i = (0, t.jsx)(c.default, {
                src: b,
                alt: v,
                className: l,
                priority: !0,
                sizes: "max-height: 100vh, 100vw",
                width: 748,
                height: 600
            }), u[3] = v, u[4] = h.url, u[5] = l, u[6] = i) : i = u[6], u[7] !== f || u[8] !== g ? (r = f && (0, t.jsx)(c.default, {
                src: f.url,
                alt: g,
                className: "block h-full w-full object-contain md:hidden",
                priority: !0,
                sizes: "320px",
                width: 320,
                height: 320
            }), u[7] = f, u[8] = g, u[9] = r) : r = u[9];
            let y = "dark" === x ? "bg-linear-to-t from-black via-black/80 to-transparent" : "bg-linear-to-t from-neutral-50 via-neutral-50/90";
            return u[10] !== y ? (n = (0, s.default)("pointer-events-none absolute right-0 bottom-0 left-0 z-30 h-256 lg:hidden lg:h-256", y), u[10] = y, u[11] = n) : n = u[11], u[12] !== n ? (d = (0, t.jsx)("div", {
                className: n
            }), u[12] = n, u[13] = d) : d = u[13], u[14] !== i || u[15] !== r || u[16] !== d ? (o = (0, t.jsxs)("div", {
                className: "relative -mt-[72px] flex w-full justify-center md:static md:w-auto lg:mt-0",
                children: [i, r, d]
            }), u[14] = i, u[15] = r, u[16] = d, u[17] = o) : o = u[17], o
        },
        h = e => {
            let l, i, r, n, d = (0, a.c)(12),
                {
                    image: o,
                    imageForMobile: u
                } = e;
            if (!o) return null;
            let m = o.title || "Product image",
                h = u ? .title || m,
                f = o.url,
                x = u && "hidden lg:block";
            return d[0] !== x ? (l = (0, s.default)("block max-h-256 object-contain lg:max-h-full", x), d[0] = x, d[1] = l) : l = d[1], d[2] !== m || d[3] !== o.url || d[4] !== l ? (i = (0, t.jsx)(c.default, {
                src: f,
                alt: m,
                className: l,
                priority: !0,
                sizes: "(max-width: 748px) 100vw, 748px",
                width: 748,
                height: 600
            }), d[2] = m, d[3] = o.url, d[4] = l, d[5] = i) : i = d[5], d[6] !== u || d[7] !== h ? (r = u && (0, t.jsx)(c.default, {
                src: u.url,
                alt: h,
                className: "block w-full object-contain lg:hidden",
                priority: !0,
                sizes: "320px",
                width: 320,
                height: 320
            }), d[6] = u, d[7] = h, d[8] = r) : r = d[8], d[9] !== i || d[10] !== r ? (n = (0, t.jsxs)("div", {
                className: "relative z-10 flex justify-center lg:static",
                children: [i, r]
            }), d[9] = i, d[10] = r, d[11] = n) : n = d[11], n
        },
        f = e => {
            let l = (0, a.c)(12),
                {
                    videoUrl: i,
                    loopVideo: r,
                    welcomingVideo: n,
                    fullScreenVisual: d,
                    visualPositionLeft: o,
                    image: c,
                    imageForMobile: f,
                    theme: x
                } = e,
                v = void 0 === r || r;
            if (i && n && !d) {
                let e, a;
                return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.default)("max-h-256 w-full md:max-h-full"), l[0] = e) : e = l[0], l[1] !== v || l[2] !== i ? (a = (0, t.jsx)("div", {
                    role: "img",
                    "aria-label": "Product video",
                    children: (0, t.jsx)(u.default, {
                        className: e,
                        muted: !0,
                        playsInline: !0,
                        autoPlay: !0,
                        source: i,
                        loop: v
                    })
                }), l[1] = v, l[2] = i, l[3] = a) : a = l[3], a
            }
            if (c) {
                let e;
                if (d) {
                    let e;
                    return l[4] !== c || l[5] !== f || l[6] !== x || l[7] !== o ? (e = (0, t.jsx)(m, {
                        visualPositionLeft: o,
                        image: c,
                        imageForMobile: f,
                        theme: x
                    }), l[4] = c, l[5] = f, l[6] = x, l[7] = o, l[8] = e) : e = l[8], e
                }
                return l[9] !== c || l[10] !== f ? (e = (0, t.jsx)(h, {
                    image: c,
                    imageForMobile: f
                }), l[9] = c, l[10] = f, l[11] = e) : e = l[11], e
            }
            return null
        };
    e.i(664157);
    var x = e.i(271179);
    e.i(366539);
    var v = e.i(150077);
    e.i(544063);
    var g = e.i(525487);
    e.i(867094);
    var b = e.i(725524);
    e.i(259936);
    var p = e.i(838779),
        j = e.i(83899);
    e.i(349837);
    var y = e.i(64498);
    e.i(643781);
    var w = e.i(989606),
        k = e.i(253770),
        N = e.i(345082),
        C = e.i(999750);
    e.i(872044);
    var S = e.i(627528),
        T = e.i(79564);

    function V(e) {
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
    var z = e.i(766442),
        I = e.i(212376);
    let P = e => {
        let i, r, n, d, o, c, u, m, h, f, P, _, D, L, F = (0, a.c)(62),
            {
                productVariants: M,
                currentVariant: O,
                setCurrentVariant: A,
                primaryVariants: E,
                secondaryVariants: B,
                theme: R,
                visualPositionLeft: $,
                scrollToButton: H,
                onVariantChange: Q
            } = e,
            {
                t: U
            } = (0, x.useTranslation)("common");
        F[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
            placement: "marketingPageHeader"
        }, F[0] = i) : i = F[0];
        let {
            add: Y
        } = (0, T.default)(i), {
            cryptoVouchers: q
        } = (0, l.useContext)(k.cryptoVouchersContext), {
            entryChannel: W
        } = (0, l.useContext)(C.EntryChannelContext), {
            isUSAvailable: K
        } = (0, z.default)(), {
            isDeviceAvailable: G
        } = (0, I.default)(), {
            discountLabel: J,
            shippingTag: X
        } = O, Z = (0, j.default)(O), ee = X ? .title, et = E ? .variants ? .length || B ? .variants ? .length;
        F[1] !== q.activeCryptoVouchers || F[2] !== O.id || F[3] !== W ? (r = (0, N.default)(W, q.activeCryptoVouchers, O.id), F[1] = q.activeCryptoVouchers, F[2] = O.id, F[3] = W, F[4] = r) : r = F[4];
        let ea = r;
        F[5] !== Q || F[6] !== A ? (n = e => {
            A(e), Q ? .(e)
        }, F[5] = Q, F[6] = A, F[7] = n) : n = F[7];
        let el = n,
            {
                availableForSale: ei,
                bisFormName: er,
                productHandle: es,
                maxQuantityAllowed: en,
                id: ed
            } = O;
        F[8] !== ei || F[9] !== O.sku || F[10] !== G || F[11] !== K || F[12] !== ed ? (d = ei && K(ed) && G(O.sku), F[8] = ei, F[9] = O.sku, F[10] = G, F[11] = K, F[12] = ed, F[13] = d) : d = F[13];
        let eo = d,
            ec = "light" === R ? "secondary-black" : "secondary-white";
        F[14] !== Y || F[15] !== en || F[16] !== es || F[17] !== ed ? (o = () => {
            Y([{
                product: {
                    handle: es,
                    maxQuantityAllowed: en
                },
                variantId: ed,
                quantityToAdd: 1
            }])
        }, F[14] = Y, F[15] = en, F[16] = es, F[17] = ed, F[18] = o) : o = F[18];
        let eu = o,
            em = $ ? "md:items-end" : "md:items-start";
        return F[19] !== em ? (c = (0, s.default)("flex flex-col items-center gap-24 md:gap-32", em), F[19] = em, F[20] = c) : c = F[20], F[21] !== O || F[22] !== el || F[23] !== E || F[24] !== M || F[25] !== B || F[26] !== et || F[27] !== R || F[28] !== J || F[29] !== $ ? (u = et && (0, t.jsxs)("div", {
            className: (0, s.default)("flex items-center gap-16", $ ? "md:items-end" : "md:items-start", B ? .variants ? .length ? "flex-col-reverse" : "flex-col md:flex-row md:items-center"),
            children: [(0, t.jsx)(b.default, {
                className: (0, s.default)("flex flex-col items-center text-right md:items-end", $ ? "md:items-end" : "md:items-start"),
                currentVariant: O,
                onChange: el,
                showColorName: !1,
                variants: M,
                primaryVariants: E,
                secondaryVariants: B,
                theme: R
            }), (0, t.jsx)(v.default, {
                size: "large",
                direction: "horizontal",
                variant: O,
                center: !0,
                showDiscount: !!J,
                discountLabel: J,
                theme: R
            })]
        }), F[21] = O, F[22] = el, F[23] = E, F[24] = M, F[25] = B, F[26] = et, F[27] = R, F[28] = J, F[29] = $, F[30] = u) : u = F[30], F[31] !== ea || F[32] !== R ? (m = ea && (0, t.jsx)("div", {
            className: "w-fit shrink-0",
            children: (0, t.jsx)(S.default, {
                label: ea.cardLabel,
                theme: R,
                cryptoCurrency: ea.cryptoCurrency,
                ...ea.link && {
                    drawer: ea.link
                }
            })
        }), F[31] = ea, F[32] = R, F[33] = m) : m = F[33], F[34] !== er || F[35] !== ec || F[36] !== O || F[37] !== eu || F[38] !== eo || F[39] !== U ? (h = (0, t.jsx)("div", {
            className: "flex",
            children: !eo && er ? (0, t.jsx)(g.default, {
                formName: er,
                variant: O,
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
        }), F[34] = er, F[35] = ec, F[36] = O, F[37] = eu, F[38] = eo, F[39] = U, F[40] = h) : h = F[40], F[41] !== H || F[42] !== R ? (f = H && (0, t.jsx)(V, {
            scrollToButton: H,
            theme: R
        }), F[41] = H, F[42] = R, F[43] = f) : f = F[43], F[44] !== h || F[45] !== f ? (P = (0, t.jsxs)("div", {
            className: "flex gap-16",
            children: [h, f]
        }), F[44] = h, F[45] = f, F[46] = P) : P = F[46], F[47] !== Z || F[48] !== X || F[49] !== ee ? (_ = ee ? (0, t.jsx)(p.default, {
            label: X.title,
            variant: X.variant ? ? "primary",
            icon: X.icon ? ? "informationFillFlexMP"
        }) : Z ? (0, t.jsx)(p.default, {
            label: Z.batchMessage,
            icon: "informationFillFlexMP"
        }) : null, F[47] = Z, F[48] = X, F[49] = ee, F[50] = _) : _ = F[50], F[51] !== O.promoInfoLink || F[52] !== O.promoInfoText || F[53] !== R ? (D = O ? .promoInfoText && (0, t.jsx)("div", {
            className: "flex justify-center md:justify-end",
            children: (0, t.jsx)(y.default, {
                promoInfoText: O.promoInfoText,
                promoInfoLink: O.promoInfoLink,
                theme: R
            })
        }), F[51] = O.promoInfoLink, F[52] = O.promoInfoText, F[53] = R, F[54] = D) : D = F[54], F[55] !== P || F[56] !== _ || F[57] !== D || F[58] !== c || F[59] !== u || F[60] !== m ? (L = (0, t.jsxs)("div", {
            className: c,
            children: [u, m, P, _, D]
        }), F[55] = P, F[56] = _, F[57] = D, F[58] = c, F[59] = u, F[60] = m, F[61] = L) : L = F[61], L
    };
    var _ = e.i(349057);
    let D = e => {
        let l, i, r, n, d = (0, a.c)(13),
            {
                videoUrl: o,
                videoUrlMobile: c,
                loopVideo: m,
                theme: h
            } = e,
            f = void 0 !== m && m;
        if (!o) return null;
        let x = c && "hidden md:block";
        return d[0] !== x ? (l = (0, s.default)("w-full object-cover md:absolute md:inset-0 md:h-full md:object-[60%_50%] lg:object-[55%_50%] xl:object-[40%_50%]", x), d[0] = x, d[1] = l) : l = d[1], d[2] !== f || d[3] !== l || d[4] !== o ? (i = (0, t.jsx)(u.default, {
            source: o,
            loop: f,
            playsInline: !0,
            className: l,
            autoPlay: !0,
            muted: !0
        }), d[2] = f, d[3] = l, d[4] = o, d[5] = i) : i = d[5], d[6] !== f || d[7] !== h || d[8] !== c ? (r = c && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(u.default, {
                source: c,
                loop: f,
                playsInline: !0,
                className: "-mt-[76px] w-full object-cover object-center md:hidden",
                autoPlay: !0,
                muted: !0,
                role: "image"
            }), (0, t.jsx)("div", {
                className: (0, s.default)("pointer-events-none absolute right-0 bottom-0 left-0 z-30 h-256 md:h-32 lg:hidden lg:h-256", "dark" === h ? "bg-linear-to-t from-black via-black/80 to-transparent" : "bg-linear-to-t from-neutral-50 via-neutral-50/90")
            })]
        }), d[6] = f, d[7] = h, d[8] = c, d[9] = r) : r = d[9], d[10] !== i || d[11] !== r ? (n = (0, t.jsxs)("div", {
            "aria-label": "Product video",
            className: "relative inset-0 mx-auto w-full max-w-[2000px] object-cover md:absolute md:block md:h-full",
            children: [i, r]
        }), d[10] = i, d[11] = r, d[12] = n) : n = d[12], n
    };
    var L = e.i(393783);
    let F = (0, i.cva)(["relative mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col items-center"], {
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
        M = (0, i.cva)(["pointer-events-none absolute right-0 bottom-0 left-0 z-10 hidden h-3/4 lg:block"], {
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
        O = (0, i.cva)(["flex w-full flex-1 flex-col items-center justify-end md:min-h-[600px]", "gap-24 px-16 py-24 md:relative md:bottom-auto md:justify-center md:gap-32 md:px-0"], {
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
        A = (0, i.cva)(["flex flex-col items-center gap-8 text-center"], {
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
        E = (0, i.cva)(["flex flex-col items-center gap-8"], {
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
        let i, u, m, h, x, v, g, b, p, j, y, k, N, C, S, T, z, I, B, R, $, H, Q, U, Y, q = (0, a.c)(103),
            {
                title: W,
                titleSize: K,
                miniTitle: G,
                description: J,
                videoUrl: X,
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
                image: eh,
                imageForMobile: ef,
                heroProductFeatures: ex,
                cta: ev,
                ctaSecondary: eg,
                countdownEndDate: eb
            } = e,
            ep = void 0 === K ? "responsive-display-3" : K,
            ej = void 0 === et ? "primary" : et,
            ey = void 0 === ei ? "dark" : ei,
            ew = void 0 === ec || ec,
            [ek, eN] = (0, l.useState)(!!X),
            [eC, eS] = (0, l.useState)(!!eh),
            {
                enteredViaLedgerLive: eT
            } = (0, _.default)(),
            eV = em && (ek || eC),
            ez = !!(eu || eV),
            eI = eC ? ef : es ? .headerAssetMobile,
            eP = eC ? eh : em && X && ek ? void 0 : es ? .headerAsset,
            e_ = W || "";
        q[0] !== e_ ? (i = (0, r.default)(e_, {
            style: "thin"
        }), q[0] = e_, q[1] = i) : i = q[1];
        let eD = i,
            eL = J || "";
        q[2] !== ej || q[3] !== eL ? (u = (0, r.default)(eL, {
            style: ej
        }), q[2] = ej, q[3] = eL, q[4] = u) : u = q[4];
        let eF = u;
        q[5] === Symbol.for("react.memo_cache_sentinel") ? (m = e => {
            eN(!1), eS(!1)
        }, q[5] = m) : m = q[5];
        let eM = m,
            eO = "dark" === ey ? "bg-black" : "bg-neutral-50",
            eA = ew ? "md:items-end rtl:md:items-start rtl:md:justify-start" : "md:items-start rtl:md:items-end rtl:md:justify-end",
            eE = !eV && "md:flex-col md:justify-center",
            eB = !eT && "navigation-safe-space";
        q[6] !== eO || q[7] !== eA || q[8] !== eE || q[9] !== eB ? (h = (0, s.default)("relative md:flex md:flex-col", eO, eA, eE, eB), q[6] = eO, q[7] = eA, q[8] = eE, q[9] = eB, q[10] = h) : h = q[10], q[11] !== eu ? (x = eu && (0, t.jsx)(c.default, {
            src: eu.url,
            alt: eu.title ? ? "",
            fill: !0,
            className: (0, s.default)("absolute inset-0 hidden object-cover md:block"),
            sizes: "(max-width: 1200px) 100vw, 1200px"
        }), q[11] = eu, q[12] = x) : x = q[12], q[13] !== em || q[14] !== ee || q[15] !== ey || q[16] !== X || q[17] !== Z || q[18] !== ek ? (v = em && X && ek && (0, t.jsx)(D, {
            videoUrl: X,
            videoUrlMobile: Z,
            loopVideo: ee,
            theme: ey
        }), q[13] = em, q[14] = ee, q[15] = ey, q[16] = X, q[17] = Z, q[18] = ek, q[19] = v) : v = q[19];
        let eR = ew ? "left" : "right",
            e$ = !!eV;
        q[20] !== eR || q[21] !== e$ || q[22] !== ey ? (g = F({
            theme: ey,
            visualPosition: eR,
            fullScreenVisual: e$
        }), q[20] = eR, q[21] = e$, q[22] = ey, q[23] = g) : g = q[23];
        let eH = ek ? null : eI;
        q[24] !== eP || q[25] !== ee || q[26] !== eV || q[27] !== eH || q[28] !== ey || q[29] !== X || q[30] !== ew || q[31] !== ek ? (b = (0, t.jsx)("div", {
            className: "w-full flex-1",
            children: (0, t.jsx)(f, {
                videoUrl: X,
                visualPositionLeft: ew,
                image: eP,
                imageForMobile: eH,
                welcomingVideo: ek,
                loopVideo: ee,
                fullScreenVisual: eV,
                theme: ey
            })
        }), q[24] = eP, q[25] = ee, q[26] = eV, q[27] = eH, q[28] = ey, q[29] = X, q[30] = ew, q[31] = ek, q[32] = b) : b = q[32], q[33] !== eb || q[34] !== eV || q[35] !== ew ? (p = (0, s.default)(O({
            visualPosition: ew ? "left" : "right",
            fullScreenVisual: !!eV
        }), eb && "pb-48 lg:pb-24"), q[33] = eb, q[34] = eV, q[35] = ew, q[36] = p) : p = q[36];
        let eQ = ew ? "left" : "right";
        q[37] !== eQ ? (j = A({
            visualPosition: eQ
        }), q[37] = eQ, q[38] = j) : j = q[38], q[39] !== G || q[40] !== ey ? (y = G && (0, t.jsx)(o.default.TagHud, {
            label: G,
            size: "medium",
            theme: ey,
            variant: "purple"
        }), q[39] = G, q[40] = ey, q[41] = y) : y = q[41], q[42] !== ep ? (k = (0, s.default)(ep, "md:mb-8 md:max-w-[560px] lg:max-w-[789px] xl:max-w-full"), q[42] = ep, q[43] = k) : k = q[43], q[44] !== eD || q[45] !== k ? (N = (0, t.jsx)("h1", {
            className: k,
            children: eD
        }), q[44] = eD, q[45] = k, q[46] = N) : N = q[46];
        let eU = "dark" === ey ? "text-white" : "text-neutral-800";
        return q[47] !== eU ? (C = (0, s.default)("heading-4 flex w-auto items-center md:pr-16 [&>span]:py-0", eU), q[47] = eU, q[48] = C) : C = q[48], q[49] !== eF || q[50] !== C ? (S = (0, t.jsx)("p", {
            className: C,
            children: eF
        }), q[49] = eF, q[50] = C, q[51] = S) : S = q[51], q[52] !== j || q[53] !== y || q[54] !== N || q[55] !== S ? (T = (0, t.jsxs)("div", {
            className: j,
            children: [y, N, S]
        }), q[52] = j, q[53] = y, q[54] = N, q[55] = S, q[56] = T) : T = q[56], q[57] !== el ? (z = el ? .text && (0, t.jsx)(n.default, {
            text: el.text,
            image: el.image,
            theme: "dark",
            hideImageMobile: !0
        }), q[57] = el, q[58] = z) : z = q[58], q[59] !== es || q[60] !== en || q[61] !== ea || q[62] !== eo || q[63] !== ed || q[64] !== er || q[65] !== ey || q[66] !== ew ? (I = es && er && (0, t.jsx)(P, {
            productVariants: ea,
            currentVariant: es,
            setCurrentVariant: er,
            primaryVariants: en,
            secondaryVariants: ed,
            theme: ey,
            visualPositionLeft: ew ? ? !0,
            scrollToButton: eo,
            onVariantChange: eM
        }), q[59] = es, q[60] = en, q[61] = ea, q[62] = eo, q[63] = ed, q[64] = er, q[65] = ey, q[66] = ew, q[67] = I) : I = q[67], q[68] !== ev || q[69] !== eg || q[70] !== es || q[71] !== eo || q[72] !== ey ? (B = !es && (0, t.jsxs)("div", {
            className: "flex flex-wrap justify-center gap-16 md:flex-nowrap",
            children: [ev && (0, t.jsx)(w.default, {
                label: ev.label,
                href: ev.url,
                size: "medium",
                variant: "light" === ey ? "secondary-black" : "secondary-white",
                ...ev.displayDownloadIcon && {
                    icon: "download"
                }
            }), eg && !eo && (0, t.jsx)(w.default, {
                label: eg.label,
                href: eg.url,
                size: "medium",
                variant: "light" === ey ? "primary-black" : "primary-white",
                ...eg.displayDownloadIcon && {
                    icon: "download"
                }
            }), eo && (0, t.jsx)(V, {
                scrollToButton: eo,
                theme: ey
            })]
        }), q[68] = ev, q[69] = eg, q[70] = es, q[71] = eo, q[72] = ey, q[73] = B) : B = q[73], q[74] !== ex || q[75] !== ey || q[76] !== ew ? (R = ex && ex.length > 0 && (0, t.jsx)("div", {
            className: E({
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
        }), q[74] = ex, q[75] = ey, q[76] = ew, q[77] = R) : R = q[77], q[78] !== p || q[79] !== T || q[80] !== z || q[81] !== I || q[82] !== B || q[83] !== R ? ($ = (0, t.jsxs)("div", {
            className: p,
            children: [T, z, I, B, R]
        }), q[78] = p, q[79] = T, q[80] = z, q[81] = I, q[82] = B, q[83] = R, q[84] = $) : $ = q[84], q[85] !== g || q[86] !== b || q[87] !== $ ? (H = (0, t.jsxs)("div", {
            "data-testid": "marketing-header-container",
            className: g,
            children: [b, $]
        }), q[85] = g, q[86] = b, q[87] = $, q[88] = H) : H = q[88], q[89] !== eu || q[90] !== eb || q[91] !== ez || q[92] !== ey ? (Q = ez && (0, t.jsx)("div", {
            className: M({
                theme: ey,
                size: eb ? "extraLarge" : eu ? "large" : "small"
            })
        }), q[89] = eu, q[90] = eb, q[91] = ez, q[92] = ey, q[93] = Q) : Q = q[93], q[94] !== eb ? (U = eb && (0, t.jsx)("div", {
            className: "z-20 w-full",
            children: (0, t.jsx)(L.default, {
                countdownEndDate: eb
            })
        }), q[94] = eb, q[95] = U) : U = q[95], q[96] !== h || q[97] !== x || q[98] !== v || q[99] !== H || q[100] !== Q || q[101] !== U ? (Y = (0, t.jsxs)("header", {
            className: h,
            "data-cs-override-id": "hero-block",
            children: [x, v, H, Q, U]
        }), q[96] = h, q[97] = x, q[98] = v, q[99] = H, q[100] = Q, q[101] = U, q[102] = Y) : Y = q[102], Y
    }], 747815)
}]);

//# sourceMappingURL=028dwj-0wm051.js.map