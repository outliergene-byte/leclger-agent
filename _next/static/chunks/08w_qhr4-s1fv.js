(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 366539, 150077, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(495854),
        i = e.i(799444);
    let r = e => {
        let i, r, n, s, o = (0, a.c)(10),
            {
                displayValue: c,
                theme: d
            } = e,
            m = void 0 === d ? "light" : d,
            h = "light" === m ? "bg-black text-white" : "bg-white text-black";
        o[0] !== h ? (i = (0, l.default)("relative flex items-center justify-center rounded-xs px-8 py-4 text-center body-3", h), o[0] = h, o[1] = i) : i = o[1];
        let u = "light" === m ? "bg-black text-white" : "bg-white text-black";
        return o[2] !== u ? (r = (0, l.default)("absolute left-[-4px] top-[11px] h-8 w-8 rotate-45", u), o[2] = u, o[3] = r) : r = o[3], o[4] !== r ? (n = (0, t.jsx)("div", {
            className: r
        }), o[4] = r, o[5] = n) : n = o[5], o[6] !== c || o[7] !== i || o[8] !== n ? (s = (0, t.jsxs)("div", {
            className: i,
            "data-testid": "discount",
            children: [c, n]
        }), o[6] = c, o[7] = i, o[8] = n, o[9] = s) : s = o[9], s
    };
    var n = e.i(455108),
        s = e.i(203828);
    e.s(["default", 0, e => {
        let o, c, d, m, h, u, f = (0, a.c)(35),
            {
                variant: p,
                direction: x,
                size: b,
                showTaxMessage: g,
                center: w,
                showDiscount: v,
                discountLabel: y,
                showStrikedPrice: j,
                manualDiscountConversion: N,
                theme: k
            } = e,
            S = void 0 === x ? "horizontal" : x,
            T = void 0 === b ? "small" : b,
            D = void 0 === g || g,
            _ = void 0 !== v && v,
            C = void 0 === y ? null : y,
            E = void 0 === j || j,
            z = void 0 === k ? "light" : k,
            {
                locale: L
            } = (0, s.useRouter)(),
            O = p ? .id;
        f[0] !== O ? (o = [O], f[0] = O, f[1] = o) : o = f[1];
        let {
            prices: B
        } = (0, i.default)(o);
        f[2] !== T ? (c = () => {
            switch (T) {
                case "large":
                    return "heading-4-semi-bold";
                case "extra-small":
                    return "body-4";
                default:
                    return "body-1 font-normal"
            }
        }, f[2] = T, f[3] = c) : c = f[3];
        let R = c();
        if (!B) {
            let e, a, i = "extra-small" === T,
                r = "small" === T,
                s = "vertical" === S,
                o = _ && C;
            return f[4] !== i || f[5] !== r || f[6] !== s || f[7] !== o ? (e = (0, l.default)("h-32 w-20 animate-spin text-white", {
                "h-16": i,
                "h-24": r,
                "h-32": s,
                "mb-16 h-48": o
            }), f[4] = i, f[5] = r, f[6] = s, f[7] = o, f[8] = e) : e = f[8], f[9] !== e ? (a = (0, t.jsx)("div", {
                role: "status",
                "data-testid": "price-display__loading",
                className: "flex min-h-56 items-center lg:min-h-full",
                children: (0, t.jsx)(n.default.LoadingSpinner, {
                    className: e
                })
            }), f[9] = e, f[10] = a) : a = f[10], a
        }
        let $ = B[0];
        if (f[11] !== L || f[12] !== N || f[13] !== $) {
            var A, I, P;
            d = N && (A = $.amount, I = $.currency, P = L || "EN", Intl.NumberFormat(P.toUpperCase(), {
                style: "currency",
                currency: I,
                trailingZeroDisplay: "stripIfInteger"
            }).format(Number(A * (1 - N)))), f[11] = L, f[12] = N, f[13] = $, f[14] = d
        } else d = f[14];
        let M = d,
            Z = "vertical" === S && "flex-col items-start justify-center",
            F = "horizontal" === S && "flex-row items-center",
            W = "vertical-reversed" === S && "flex-col-reverse items-start justify-center",
            V = void 0 !== w && w ? "items-center" : "";
        return f[15] !== Z || f[16] !== F || f[17] !== W || f[18] !== V ? (m = (0, l.default)("flex flex-wrap", Z, F, W, V), f[15] = Z, f[16] = F, f[17] = W, f[18] = V, f[19] = m) : m = f[19], f[20] !== M || f[21] !== S || f[22] !== C || f[23] !== R || f[24] !== $ || f[25] !== _ || f[26] !== E || f[27] !== D || f[28] !== z || f[29] !== p.pricePrefix || f[30] !== p.priceSuffix ? (h = _ || $.compareAtLabel || M ? (0, t.jsxs)(t.Fragment, {
            children: [(M || $.compareAtLabel) && E && (0, t.jsx)("div", {
                className: "pe-8 text-neutral-400 line-through body-3",
                children: M ? $.label : $.compareAtLabel
            }), (0, t.jsxs)("div", {
                className: (0, l.default)("flex flex-row flex-wrap items-center gap-x-12", "vertical-reversed" === S && "-mb-4", "vertical" === S && "-mt-4"),
                children: [(0, t.jsxs)("span", {
                    "data-testid": "price-display__price",
                    className: R,
                    children: [p.pricePrefix && (0, t.jsx)("span", {
                        children: p.pricePrefix
                    }), M || $.label, p.priceSuffix && (0, t.jsx)("span", {
                        children: p.priceSuffix
                    })]
                }), _ && C && (0, t.jsx)(r, {
                    displayValue: C,
                    theme: z
                })]
            }), D && (0, t.jsx)("div", {
                className: "basis-full text-gray-500 body-4",
                children: $.taxMessage
            })]
        }) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("span", {
                "data-testid": "price-display__price",
                className: R,
                children: [p.pricePrefix && (0, t.jsx)("span", {
                    children: p.pricePrefix
                }), $.label, p.priceSuffix && (0, t.jsx)("span", {
                    children: p.priceSuffix
                })]
            }), D && (0, t.jsx)("div", {
                className: "text-gray-500 body-4",
                children: $.taxMessage
            })]
        }), f[20] = M, f[21] = S, f[22] = C, f[23] = R, f[24] = $, f[25] = _, f[26] = E, f[27] = D, f[28] = z, f[29] = p.pricePrefix, f[30] = p.priceSuffix, f[31] = h) : h = f[31], f[32] !== m || f[33] !== h ? (u = (0, t.jsx)("div", {
            className: m,
            "data-testid": "price-display",
            children: h
        }), f[32] = m, f[33] = h, f[34] = u) : u = f[34], u
    }], 150077), e.s([], 366539)
}, 305231, 913473, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576);
    e.i(664157);
    var l = e.i(271179),
        i = e.i(191788),
        r = e.i(495854);
    e.i(338018);
    var n = e.i(985129);
    e.i(108399);
    var s = e.i(860231),
        o = e.i(126019),
        c = e.i(198311),
        d = e.i(648684);
    let m = (0, d.cva)("flex w-full cursor-pointer items-center gap-4 rounded-[50px] px-8 outline-none ring-offset-0 transition-colors hover:ring-1 disabled:cursor-default disabled:opacity-60 md:gap-8", {
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
            let l, i, d, h, u, f, p, x, b, g, w, v, y, j, N, k = (0, a.c)(58),
                {
                    buttonRef: S,
                    isOpen: T,
                    onToggle: D,
                    onKeyDown: _,
                    size: C,
                    theme: E,
                    colorDot: z,
                    variantNumber: L,
                    showText: O,
                    image: B,
                    currentVariant: R,
                    variants: $,
                    expandedWidth: A,
                    dropdownDirection: I,
                    isSelected: P
                } = e,
                M = void 0 !== P && P,
                Z = $.length,
                F = T && "relative flex justify-center overflow-hidden",
                W = T && ("dark" === E ? "bg-neutral-900" : "bg-neutral-50"),
                V = "up" === I ? "rounded-b-[20px]" : "rounded-t-[20px]";
            k[0] !== F || k[1] !== W || k[2] !== V ? (l = (0, r.default)(F, W, V), k[0] = F, k[1] = W, k[2] = V, k[3] = l) : l = k[3];
            let q = T && ("up" === I ? "mb-[10px] pt-px" : "mt-[10px] pb-px");
            k[4] !== q ? (i = (0, r.default)(q), k[4] = q, k[5] = i) : i = k[5], k[6] !== z || k[7] !== B || k[8] !== T || k[9] !== M || k[10] !== O || k[11] !== C || k[12] !== E ? (d = (0, r.default)("[-webkit-tap-highlight-color:transparent]", m({
                theme: E,
                size: C,
                isSelected: M,
                showText: O,
                colorDot: z,
                image: B,
                isOpen: T
            })), k[6] = z, k[7] = B, k[8] = T, k[9] = M, k[10] = O, k[11] = C, k[12] = E, k[13] = d) : d = k[13];
            let H = T && "number" == typeof A ? Math.max(0, A - 8) : "auto";
            k[14] !== H ? (h = {
                width: H
            }, k[14] = H, k[15] = h) : h = k[15];
            let U = T ? .04000000000000001 : .006;
            return k[16] === Symbol.for("react.memo_cache_sentinel") ? (u = [.2, .8, .2, 1], k[16] = u) : u = k[16], k[17] !== U ? (f = {
                duration: U,
                ease: u
            }, k[17] = U, k[18] = f) : f = k[18], k[19] !== z || k[20] !== R || k[21] !== E ? (p = z && (0, t.jsx)(n.default, {
                isDisabled: !0,
                colorName: R.colorName,
                colorClassName: R.colorClassName,
                theme: E
            }), k[19] = z, k[20] = R, k[21] = E, k[22] = p) : p = k[22], k[23] !== p ? (x = (0, t.jsx)("div", {
                className: "flex items-center",
                children: p
            }), k[23] = p, k[24] = x) : x = k[24], k[25] !== Z || k[26] !== O || k[27] !== E || k[28] !== L ? (b = L && (0, t.jsxs)(c.motion.div, {
                className: (0, r.default)("body-3 ms-4 whitespace-nowrap text-neutral-500", {
                    "text-neutral-300": "dark" === E
                }),
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: +!O
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
                    children: Z - 1
                })]
            }), k[25] = Z, k[26] = O, k[27] = E, k[28] = L, k[29] = b) : b = k[29], k[30] !== R || k[31] !== B ? (g = B && (0, t.jsx)(o.default, {
                src: R.imageUrl,
                alt: R.title,
                width: 32,
                height: 32
            }), k[30] = R, k[31] = B, k[32] = g) : g = k[32], k[33] !== R || k[34] !== T || k[35] !== O ? (w = O && (0, t.jsx)(c.motion.span, {
                initial: {
                    opacity: +!!O,
                    x: O ? 0 : -10
                },
                animate: T || O ? {
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
            }), k[33] = R, k[34] = T, k[35] = O, k[36] = w) : w = k[36], k[37] !== T ? (v = !T && (0, t.jsx)(s.default, {
                name: "chevronDown",
                size: 24,
                color: "current"
            }), k[37] = T, k[38] = v) : v = k[38], k[39] !== S || k[40] !== T || k[41] !== _ || k[42] !== D || k[43] !== h || k[44] !== f || k[45] !== x || k[46] !== b || k[47] !== g || k[48] !== w || k[49] !== v || k[50] !== d ? (y = (0, t.jsxs)(c.motion.button, {
                ref: S,
                type: "button",
                className: d,
                onClick: D,
                onKeyDown: _,
                "aria-expanded": T,
                "aria-haspopup": "listbox",
                animate: h,
                transition: f,
                children: [x, b, g, w, v]
            }), k[39] = S, k[40] = T, k[41] = _, k[42] = D, k[43] = h, k[44] = f, k[45] = x, k[46] = b, k[47] = g, k[48] = w, k[49] = v, k[50] = d, k[51] = y) : y = k[51], k[52] !== y || k[53] !== i ? (j = (0, t.jsx)("div", {
                className: i,
                children: y
            }), k[52] = y, k[53] = i, k[54] = j) : j = k[54], k[55] !== j || k[56] !== l ? (N = (0, t.jsx)("div", {
                className: l,
                children: j
            }), k[55] = j, k[56] = l, k[57] = N) : N = k[57], N
        },
        u = e => {
            let l, i, r, c, d, m = (0, a.c)(19),
                {
                    colorDot: h,
                    colorName: u,
                    colorClassName: f,
                    theme: p,
                    isOutOfStock: x,
                    image: b,
                    imageUrl: g,
                    title: w,
                    isPromo: v
                } = e;
            return m[0] !== f || m[1] !== h || m[2] !== u || m[3] !== x || m[4] !== p ? (l = h && (0, t.jsx)("div", {
                className: "flex items-center",
                children: (0, t.jsx)(n.default, {
                    colorName: u,
                    colorClassName: f,
                    theme: p,
                    isDisabled: !0,
                    isOutOfStock: x
                })
            }), m[0] = f, m[1] = h, m[2] = u, m[3] = x, m[4] = p, m[5] = l) : l = m[5], m[6] !== b || m[7] !== g || m[8] !== w ? (i = b && (0, t.jsx)(o.default, {
                src: g,
                alt: w,
                width: 32,
                height: 32
            }), m[6] = b, m[7] = g, m[8] = w, m[9] = i) : i = m[9], m[10] !== w ? (r = (0, t.jsx)("span", {
                className: "whitespace-nowrap",
                children: w
            }), m[10] = w, m[11] = r) : r = m[11], m[12] !== v ? (c = v && (0, t.jsx)("span", {
                className: "text-primary",
                children: (0, t.jsx)(s.default, {
                    name: "label",
                    size: 16,
                    color: "current"
                })
            }), m[12] = v, m[13] = c) : c = m[13], m[14] !== l || m[15] !== i || m[16] !== r || m[17] !== c ? (d = (0, t.jsxs)(t.Fragment, {
                children: [l, i, r, c]
            }), m[14] = l, m[15] = i, m[16] = r, m[17] = c, m[18] = d) : d = m[18], d
        },
        f = e => {
            let l, i, n = (0, a.c)(15),
                {
                    variants: s,
                    theme: o,
                    colorDot: c,
                    image: d,
                    size: m,
                    registerItemRef: h
                } = e;
            if (n[0] !== c || n[1] !== d || n[2] !== h || n[3] !== m || n[4] !== o || n[5] !== s) {
                let e;
                n[7] !== c || n[8] !== d || n[9] !== h || n[10] !== m || n[11] !== o ? (e = e => {
                    let {
                        id: a,
                        isOutOfStock: l,
                        colorName: i,
                        colorClassName: n,
                        imageUrl: s,
                        title: f,
                        isPromo: p
                    } = e;
                    return (0, t.jsx)("li", {
                        children: (0, t.jsx)("button", {
                            ref: e => h ? .(a, e),
                            type: "button",
                            disabled: l,
                            className: (0, r.default)("flex w-auto items-center gap-4 whitespace-nowrap rounded-full px-12 pe-16", {
                                "h-[40px]": "small" === m,
                                "h-[52px]": "medium" === m
                            }),
                            children: (0, t.jsx)(u, {
                                colorDot: c,
                                colorName: i,
                                colorClassName: n,
                                theme: o,
                                isOutOfStock: l,
                                image: d,
                                imageUrl: s,
                                title: f,
                                isPromo: p
                            })
                        })
                    }, `measure-${a}`)
                }, n[7] = c, n[8] = d, n[9] = h, n[10] = m, n[11] = o, n[12] = e) : e = n[12], l = s.map(e), n[0] = c, n[1] = d, n[2] = h, n[3] = m, n[4] = o, n[5] = s, n[6] = l
            } else l = n[6];
            return n[13] !== l ? (i = (0, t.jsx)("div", {
                "aria-hidden": !0,
                className: "fixed -left-[99999px] top-0",
                children: (0, t.jsx)("ul", {
                    className: "flex flex-col gap-8 p-8",
                    children: l
                })
            }), n[13] = l, n[14] = i) : i = n[14], i
        },
        p = e => {
            let l, i, n, s, o, d, h, p, x = (0, a.c)(39),
                {
                    variants: b,
                    theme: g,
                    colorDot: w,
                    image: v,
                    size: y,
                    currentId: j,
                    onSelect: N,
                    registerItemRef: k,
                    dropdownVariants: S,
                    isOpen: T,
                    direction: D
                } = e,
                _ = "up" === (void 0 === D ? "down" : D) ? "rounded-t-[32px] border-t" : "rounded-b-[32px] border-b",
                C = "dark" === g ? "border-neutral-600 bg-neutral-900" : "border-neutral-200 bg-neutral-50";
            x[0] !== _ || x[1] !== C ? (l = (0, r.default)("relative z-50 flex min-w-128 flex-col gap-8 border-l border-r p-8 px-[9px]", _, C), x[0] = _, x[1] = C, x[2] = l) : l = x[2], x[3] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                opacity: 0
            }, x[3] = i) : i = x[3];
            let E = +!!T;
            x[4] !== E ? (n = {
                opacity: E
            }, x[4] = E, x[5] = n) : n = x[5], x[6] === Symbol.for("react.memo_cache_sentinel") ? (s = [.5, .2, .1, 1], x[6] = s) : s = x[6];
            let z = .06 * !!T;
            x[7] !== z ? (o = {
                duration: .24,
                ease: s,
                delay: z
            }, x[7] = z, x[8] = o) : o = x[8];
            let L = S || b;
            if (x[9] !== w || x[10] !== j || x[11] !== v || x[12] !== T || x[13] !== N || x[14] !== y || x[15] !== L || x[16] !== g) {
                let e;
                x[18] !== w || x[19] !== j || x[20] !== v || x[21] !== T || x[22] !== N || x[23] !== y || x[24] !== g ? (e = (e, a) => {
                    let {
                        id: l,
                        isOutOfStock: i,
                        colorName: n,
                        colorClassName: s,
                        imageUrl: o,
                        title: d,
                        isPromo: h
                    } = e, f = l === j;
                    return (0, t.jsx)(c.motion.li, {
                        "aria-selected": f,
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
                            delay: .05 * a * .2,
                            ease: [.2, .8, .2, 1]
                        },
                        children: (0, t.jsx)("button", {
                            type: "button",
                            disabled: i,
                            onClick: () => N(l),
                            "data-option": !0,
                            className: (0, r.default)(m({
                                theme: g,
                                size: y,
                                isSelected: f,
                                showText: !0,
                                colorDot: w,
                                image: v,
                                isOpen: T
                            }), "[-webkit-tap-highlight-color:transparent] disabled:cursor-default disabled:opacity-60"),
                            children: (0, t.jsx)(u, {
                                colorDot: w,
                                colorName: n,
                                colorClassName: s,
                                theme: g,
                                isOutOfStock: i,
                                image: v,
                                imageUrl: o,
                                title: d,
                                isPromo: h
                            })
                        })
                    }, l)
                }, x[18] = w, x[19] = j, x[20] = v, x[21] = T, x[22] = N, x[23] = y, x[24] = g, x[25] = e) : e = x[25], d = L.map(e), x[9] = w, x[10] = j, x[11] = v, x[12] = T, x[13] = N, x[14] = y, x[15] = L, x[16] = g, x[17] = d
            } else d = x[17];
            return x[26] !== w || x[27] !== v || x[28] !== k || x[29] !== y || x[30] !== g || x[31] !== b ? (h = k && (0, t.jsx)(f, {
                variants: b,
                theme: g,
                colorDot: w,
                image: v,
                size: y,
                registerItemRef: k
            }), x[26] = w, x[27] = v, x[28] = k, x[29] = y, x[30] = g, x[31] = b, x[32] = h) : h = x[32], x[33] !== o || x[34] !== d || x[35] !== h || x[36] !== l || x[37] !== n ? (p = (0, t.jsxs)(c.motion.ul, {
                className: l,
                initial: i,
                animate: n,
                transition: o,
                children: [d, h]
            }), x[33] = o, x[34] = d, x[35] = h, x[36] = l, x[37] = n, x[38] = p) : p = x[38], p
        },
        x = (0, d.cva)("absolute z-30 transition-[padding,border-color] duration-300", {
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
        b = e => {
            let l, n, s, o, d, m, u, f, b, w, v, y, j, N, k, S, T, D, _, C, E, z, L, O, B, R, $, A = (0, a.c)(117),
                {
                    variants: I,
                    currentVariant: P,
                    onChange: M,
                    variantNumber: Z,
                    colorDot: F,
                    showText: W,
                    image: V,
                    size: q,
                    theme: H,
                    promoText: U,
                    dataCsOverrideId: K,
                    forceClose: Q
                } = e,
                G = void 0 !== F && F,
                X = void 0 !== V && V,
                J = void 0 === q ? "medium" : q,
                Y = void 0 === H ? "light" : H,
                ee = P ? .id ? ? "",
                [et, ea] = (0, i.useState)(ee),
                el = J || "medium";
            A[0] !== Q || A[1] !== el || A[2] !== I.length ? (l = {
                variantsLength: I.length,
                size: el,
                forceClose: Q
            }, A[0] = Q, A[1] = el, A[2] = I.length, A[3] = l) : l = A[3];
            let {
                isOpen: ei,
                setIsOpen: er,
                showBorder: en,
                dropdownDirection: es,
                horizontalShift: eo,
                containerRef: ec,
                triggerRef: ed,
                listContainerRef: em,
                initialWidth: eh,
                expandedWidth: eu,
                maxWidth: ef,
                registerItemRef: ep,
                focusItemAt: ex
            } = (e => {
                let t, l, r, n, s, o, c, d, m, h, u, f, p, x, b, g, w = (0, a.c)(40),
                    {
                        variantsLength: v,
                        size: y,
                        forceClose: j
                    } = e,
                    [N, k] = (0, i.useState)(!1),
                    [S, T] = (0, i.useState)(!1),
                    [D, _] = (0, i.useState)("down"),
                    [C, E] = (0, i.useState)(0),
                    z = (0, i.useRef)(null),
                    L = (0, i.useRef)(null),
                    O = (0, i.useRef)(null),
                    {
                        maxWidth: B,
                        registerItemRef: R
                    } = (() => {
                        let e, t, l, r, n, s = (0, a.c)(6);
                        s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = new Map, s[0] = e) : e = s[0];
                        let o = (0, i.useRef)(e),
                            [c, d] = (0, i.useState)(0);
                        s[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (e, t) => {
                            t ? o.current.set(e, t) : o.current.delete(e)
                        }, s[1] = t) : t = s[1];
                        let m = t;
                        return s[2] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
                            let e = () => {
                                let e = 0;
                                o.current.forEach(t => {
                                    e = Math.max(e, t.offsetWidth)
                                }), d(e)
                            };
                            e();
                            let t = new ResizeObserver(() => e());
                            return o.current.forEach(e => t.observe(e)), () => t.disconnect()
                        }, r = [], s[2] = l, s[3] = r) : (l = s[2], r = s[3]), (0, i.useLayoutEffect)(l, r), s[4] !== c ? (n = {
                            maxWidth: c,
                            registerItemRef: m
                        }, s[4] = c, s[5] = n) : n = s[5], n
                    })(),
                    [$, A] = (0, i.useState)(0),
                    [I, P] = (0, i.useState)(0);
                w[0] !== j ? (t = () => {
                    j && k(!1)
                }, l = [j], w[0] = j, w[1] = t, w[2] = l) : (t = w[1], l = w[2]), (0, i.useEffect)(t, l), w[3] !== $ || w[4] !== N || w[5] !== B ? (r = () => {
                    if (L.current) {
                        let e = L.current.offsetWidth;
                        0 === $ ? (A(e), P(e)) : N ? P(Math.max(e, B) + 12) : P($)
                    }
                }, n = [N, B, $], w[3] = $, w[4] = N, w[5] = B, w[6] = r, w[7] = n) : (r = w[6], n = w[7]), (0, i.useLayoutEffect)(r, n), w[8] !== B || w[9] !== y || w[10] !== v ? (s = () => {
                    if (!L.current) return;
                    let e = L.current.getBoundingClientRect(),
                        t = window.innerHeight,
                        a = window.innerWidth,
                        l = e.top,
                        i = t - e.bottom;
                    _(i < v * ("small" === y ? 40 : 52) + 16 && l > i ? "up" : "down");
                    let r = Math.max(e.width, B) + 12,
                        n = e.left + (r + 4);
                    n > a - 75 ? E(a - 75 - n) : E(0)
                }, w[8] = B, w[9] = y, w[10] = v, w[11] = s) : s = w[11], w[12] !== $ || w[13] !== N || w[14] !== B || w[15] !== y || w[16] !== v ? (o = [v, y, N, B, $], w[12] = $, w[13] = N, w[14] = B, w[15] = y, w[16] = v, w[17] = o) : o = w[17], (0, i.useLayoutEffect)(s, o), w[18] === Symbol.for("react.memo_cache_sentinel") ? (c = () => {
                    let e = e => {
                        "Escape" === e.key && k(!1)
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, w[18] = c) : c = w[18], w[19] !== N ? (d = [N], w[19] = N, w[20] = d) : d = w[20], (0, i.useEffect)(c, d), w[21] === Symbol.for("react.memo_cache_sentinel") ? (m = () => {
                    let e = e => {
                        z.current && (z.current.contains(e.target) || k(!1))
                    };
                    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
                }, w[21] = m) : m = w[21], w[22] !== N ? (h = [N], w[22] = N, w[23] = h) : h = w[23], (0, i.useEffect)(m, h), w[24] !== N ? (u = () => {
                    if (N) {
                        let e = setTimeout(() => {
                            T(!0)
                        }, 100);
                        return () => clearTimeout(e)
                    }
                    T(!1)
                }, f = [N], w[24] = N, w[25] = u, w[26] = f) : (u = w[25], f = w[26]), (0, i.useEffect)(u, f), w[27] === Symbol.for("react.memo_cache_sentinel") ? (p = e => {
                    let t = O.current;
                    if (!t) return;
                    let a = t.querySelectorAll("button[data-option]");
                    if (!a.length) return;
                    let l = Math.max(0, Math.min(e, a.length - 1));
                    a[l].focus({
                        preventScroll: !0
                    })
                }, w[27] = p) : p = w[27];
                let M = p;
                return w[28] !== N ? (x = () => {
                    if (N) {
                        let e = window.setTimeout(() => M(0), 120);
                        return () => window.clearTimeout(e)
                    }
                }, b = [N, M], w[28] = N, w[29] = x, w[30] = b) : (x = w[29], b = w[30]), (0, i.useEffect)(x, b), w[31] !== D || w[32] !== I || w[33] !== C || w[34] !== $ || w[35] !== N || w[36] !== B || w[37] !== R || w[38] !== S ? (g = {
                    isOpen: N,
                    setIsOpen: k,
                    showBorder: S,
                    dropdownDirection: D,
                    horizontalShift: C,
                    containerRef: z,
                    triggerRef: L,
                    listContainerRef: O,
                    initialWidth: $,
                    expandedWidth: I,
                    maxWidth: B,
                    registerItemRef: R,
                    focusItemAt: M
                }, w[31] = D, w[32] = I, w[33] = C, w[34] = $, w[35] = N, w[36] = B, w[37] = R, w[38] = S, w[39] = g) : g = w[39], g
            })(l);
            A[4] !== et || A[5] !== ei || A[6] !== ee ? (s = () => {
                ei || et === ee || ea(ee)
            }, n = [ei, ee, et], A[4] = et, A[5] = ei, A[6] = ee, A[7] = n, A[8] = s) : (n = A[7], s = A[8]), (0, i.useEffect)(s, n), A[9] !== P || A[10] !== et || A[11] !== I ? (o = I.find(e => e.id === et) || P, A[9] = P, A[10] = et, A[11] = I, A[12] = o) : o = A[12];
            let eb = o;
            if (A[13] !== et || A[14] !== I) {
                let e;
                A[16] !== et ? (e = e => e.id !== et, A[16] = et, A[17] = e) : e = A[17], d = I.filter(e), A[13] = et, A[14] = I, A[15] = d
            } else d = A[15];
            let eg = d,
                ew = "up" === es ? 8 : -8;
            A[18] !== ew ? (m = {
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                y: ew
            }, A[18] = ew, A[19] = m) : m = A[19];
            let ev = ei ? "auto" : 0,
                ey = ei && "down" === es ? 8 : 0,
                ej = ei && "up" === es ? 8 : 0;
            A[20] !== ev || A[21] !== ey || A[22] !== ej ? (u = {
                height: ev,
                paddingBottom: ey,
                paddingTop: ej,
                y: 0
            }, A[20] = ev, A[21] = ey, A[22] = ej, A[23] = u) : u = A[23], A[24] === Symbol.for("react.memo_cache_sentinel") ? (f = [.2, .8, .2, 1], A[24] = f) : f = A[24];
            let eN = .08000000000000002 * !!ei;
            A[25] !== eN ? (b = {
                duration: .16000000000000003,
                ease: f,
                delay: eN
            }, A[25] = eN, A[26] = b) : b = A[26], A[27] !== m || A[28] !== u || A[29] !== b ? (w = {
                initial: m,
                animate: u,
                transition: b
            }, A[27] = m, A[28] = u, A[29] = b, A[30] = w) : w = A[30];
            let ek = w;
            A[31] !== M || A[32] !== er || A[33] !== ee ? (v = e => {
                er(!1), e !== ee && M(e)
            }, A[31] = M, A[32] = er, A[33] = ee, A[34] = v) : v = A[34];
            let eS = v;
            A[35] !== ex || A[36] !== em ? (y = e => {
                var t, a, l;
                let i = em.current;
                if (!i) return;
                let r = i.querySelectorAll("button[data-option]");
                if (!r.length) return;
                let n = Array.from(r).findIndex(g),
                    s = (t = e.key, a = r.length, l = n, "ArrowDown" === t ? l + 1 : "ArrowUp" === t ? l - 1 : "Home" === t ? 0 : "End" === t ? a - 1 : null);
                null !== s && (e.preventDefault(), ex(s))
            }, A[35] = ex, A[36] = em, A[37] = y) : y = A[37];
            let eT = y;
            A[38] !== et || A[39] !== ex || A[40] !== eS || A[41] !== ei || A[42] !== er ? (j = e => {
                if ("Enter" === e.key || " " === e.key) e.preventDefault(), ei ? eS(et) : er(!0);
                else if ("ArrowDown" === e.key) {
                    e.preventDefault(), ei || er(!0);
                    let t = window.setTimeout(() => ex(0), 40);
                    window.setTimeout(() => window.clearTimeout(t), 60)
                }
            }, A[38] = et, A[39] = ex, A[40] = eS, A[41] = ei, A[42] = er, A[43] = j) : j = A[43];
            let eD = j;
            if (I.length < 2) return null;
            A[44] !== U ? (N = U && (0, t.jsx)("div", {
                className: "text-primary body-3",
                children: U
            }), A[44] = U, A[45] = N) : N = A[45];
            let e_ = eh || "auto",
                eC = "small" === J ? "38px" : "52px";
            A[46] !== e_ || A[47] !== eC ? (k = {
                width: e_,
                height: eC
            }, A[46] = e_, A[47] = eC, A[48] = k) : k = A[48], A[49] !== es || A[50] !== ei || A[51] !== en || A[52] !== J || A[53] !== Y ? (S = x({
                theme: Y,
                dropdownDirection: es,
                showBorder: en,
                isOpen: ei,
                size: J
            }), A[49] = es, A[50] = ei, A[51] = en, A[52] = J, A[53] = Y, A[54] = S) : S = A[54];
            let eE = ei ? Math.max(eu, ef) + 4 : eu,
                ez = ei ? eo : 0;
            A[55] !== eE || A[56] !== ez ? (T = {
                width: eE,
                x: ez
            }, A[55] = eE, A[56] = ez, A[57] = T) : T = A[57], A[58] === Symbol.for("react.memo_cache_sentinel") ? (D = {
                duration: .24,
                ease: [.2, .8, .2, 1]
            }, A[58] = D) : D = A[58], A[59] !== et || A[60] !== eS || A[61] !== ei || A[62] !== er ? (_ = () => {
                ei ? eS(et) : er(!0)
            }, A[59] = et, A[60] = eS, A[61] = ei, A[62] = er, A[63] = _) : _ = A[63];
            let eL = J || "medium",
                eO = Y || "light",
                eB = void 0 !== Z && Z && !ei,
                eR = ei || void 0 !== W && W,
                e$ = eu - 10,
                eA = ee === et;
            A[64] !== G || A[65] !== eb || A[66] !== es || A[67] !== eD || A[68] !== X || A[69] !== ei || A[70] !== _ || A[71] !== eL || A[72] !== eO || A[73] !== eB || A[74] !== eR || A[75] !== e$ || A[76] !== eA || A[77] !== ed || A[78] !== I ? (C = (0, t.jsx)(h, {
                buttonRef: ed,
                isOpen: ei,
                onToggle: _,
                onKeyDown: eD,
                size: eL,
                theme: eO,
                dropdownDirection: es,
                colorDot: G,
                variantNumber: eB,
                showText: eR,
                currentVariant: eb,
                variants: I,
                image: X,
                expandedWidth: e$,
                isSelected: eA
            }), A[64] = G, A[65] = eb, A[66] = es, A[67] = eD, A[68] = X, A[69] = ei, A[70] = _, A[71] = eL, A[72] = eO, A[73] = eB, A[74] = eR, A[75] = e$, A[76] = eA, A[77] = ed, A[78] = I, A[79] = C) : C = A[79];
            let eI = "up" === es ? "bottom-full" : "top-full";
            A[80] !== eI ? (E = (0, r.default)("pointer-events-none absolute -left-px z-20 overflow-hidden", eI), A[80] = eI, A[81] = E) : E = A[81];
            let eP = ei ? Math.max(eu, ef) + 4 : eu,
                eM = ei ? "auto" : "none";
            A[82] !== eP || A[83] !== eM ? (z = {
                width: eP,
                pointerEvents: eM
            }, A[82] = eP, A[83] = eM, A[84] = z) : z = A[84];
            let eZ = Y || "light",
                eF = J || "medium";
            return A[85] !== G || A[86] !== es || A[87] !== eg || A[88] !== eS || A[89] !== X || A[90] !== ei || A[91] !== ep || A[92] !== eZ || A[93] !== eF || A[94] !== ee || A[95] !== I ? (L = (0, t.jsx)(p, {
                variants: I,
                theme: eZ,
                colorDot: G,
                image: X,
                size: eF,
                currentId: ee,
                onSelect: eS,
                registerItemRef: ep,
                dropdownVariants: eg,
                isOpen: ei,
                direction: es
            }), A[85] = G, A[86] = es, A[87] = eg, A[88] = eS, A[89] = X, A[90] = ei, A[91] = ep, A[92] = eZ, A[93] = eF, A[94] = ee, A[95] = I, A[96] = L) : L = A[96], A[97] !== ek || A[98] !== eT || A[99] !== em || A[100] !== E || A[101] !== z || A[102] !== L ? (O = (0, t.jsx)(c.motion.div, {
                ref: em,
                className: E,
                style: z,
                ...ek,
                onKeyDown: eT,
                children: L
            }), A[97] = ek, A[98] = eT, A[99] = em, A[100] = E, A[101] = z, A[102] = L, A[103] = O) : O = A[103], A[104] !== ec || A[105] !== S || A[106] !== T || A[107] !== C || A[108] !== O ? (B = (0, t.jsxs)(c.motion.div, {
                ref: ec,
                className: S,
                animate: T,
                transition: D,
                children: [C, O]
            }), A[104] = ec, A[105] = S, A[106] = T, A[107] = C, A[108] = O, A[109] = B) : B = A[109], A[110] !== k || A[111] !== B ? (R = (0, t.jsx)("div", {
                className: "relative",
                style: k,
                children: B
            }), A[110] = k, A[111] = B, A[112] = R) : R = A[112], A[113] !== K || A[114] !== N || A[115] !== R ? ($ = (0, t.jsxs)("div", {
                "data-testid": "variant-selector-swatches",
                className: "relative flex flex-col gap-8",
                "data-cs-override-id": K,
                children: [N, R]
            }), A[113] = K, A[114] = N, A[115] = R, A[116] = $) : $ = A[116], $
        };

    function g(e) {
        return e === document.activeElement
    }
    var w = e.i(767574),
        v = e.i(264516);
    let y = (e, t = !1) => {
            let a = (0, w.default)(e ? .sku ? ? "");
            return {
                colorClassName: a ? .colorClass ? ? "",
                colorName: a ? .variantTitle ? ? "",
                id: e.id,
                title: a ? .variantTitle ? ? e.title,
                isPromo: t || !!e ? .discountLabel,
                isOutOfStock: !e.availableForSale,
                imageUrl: e.image ? .url ? ? ""
            }
        },
        j = (e, t) => e.colorName && t ? { ...e,
            title: t(`variantColors.${(0,v.toCamelCase)(e.title)}`, {
                defaultValue: e.title
            }),
            colorName: t(`variantColors.${(0,v.toCamelCase)(e.colorName)}`, {
                defaultValue: e.colorName
            })
        } : e;
    e.s(["default", 0, e => {
        let i, r, n, s, o, c, d, m, h = (0, a.c)(17);
        h[0] !== e ? ({
            variants: c,
            currentVariant: i,
            onChange: r,
            primaryVariants: n,
            secondaryVariants: o,
            ...s
        } = e, h[0] = e, h[1] = i, h[2] = r, h[3] = n, h[4] = s, h[5] = o, h[6] = c) : (i = h[1], r = h[2], n = h[3], s = h[4], o = h[5], c = h[6]);
        let {
            t: u
        } = (0, l.useTranslation)("common");
        h[7] !== i || h[8] !== r || h[9] !== n || h[10] !== o || h[11] !== u || h[12] !== c ? (d = (e => {
            let {
                variants: t,
                dataCsOverrideId: a,
                secondaryVariants: l,
                primaryVariants: i,
                currentVariant: r,
                onChange: n,
                t: s
            } = e, o = i ? .variants.length || l ? .variants.length ? [...i ? .variants ? .map(e => y(e, !!i.label)) ? ? [], ...l ? .variants ? .map(e => y(e, !1)) ? ? []] : t ? .map(e => y(e)), c = y(r), d = i ? .label || l ? .label || null;
            return {
                variants: (o ? ? []).map(e => j(e, s)),
                currentVariant: j(c, s),
                onChange: e => {
                    let a = ((e, t) => {
                        let {
                            currentVariant: a,
                            variantsFromShopify: l,
                            primaryVariants: i,
                            secondaryVariants: r
                        } = t;
                        return a.id === e ? a : [...i ? .variants || [], ...r ? .variants || [], ...l].find(t => t.id === e)
                    })(e, {
                        currentVariant: r,
                        variantsFromShopify: t ? ? [],
                        primaryVariants: i,
                        secondaryVariants: l
                    });
                    a && n(a)
                },
                promoText: d,
                dataCsOverrideId: a
            }
        })({
            variants: c,
            primaryVariants: n,
            secondaryVariants: o,
            currentVariant: i,
            onChange: r,
            t: u
        }), h[7] = i, h[8] = r, h[9] = n, h[10] = o, h[11] = u, h[12] = c, h[13] = d) : d = h[13];
        let f = d;
        return h[14] !== f || h[15] !== s ? (m = (0, t.jsx)(b, { ...f,
            ...s
        }), h[14] = f, h[15] = s, h[16] = m) : m = h[16], m
    }], 913473), e.s([], 305231)
}, 345082, 627528, e => {
    "use strict";
    e.s(["default", 0, (e, t, a) => {
        let l, i, r, n, s = "affiliate-named" === e.activeEntryChannel ? e.cryptoVouchers : null;
        return l = t.filter(({
            type: e
        }) => "campaign" === e), i = "affiliate-anonymous" === e.activeEntryChannel ? "affiliate-named" : e.activeEntryChannel, r = t.filter(({
            type: e
        }) => e === i), n = [], ("affiliate-named" === e.activeEntryChannel || "affiliate-anonymous" === e.activeEntryChannel) && s && s ? .length && (n = s), [...l, ...n, ...r].find(({
            eligibleVariantIds: e,
            type: t
        }) => e.find(e => a === e)) || null
    }], 345082);
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(495854),
        i = e.i(870155);
    e.i(828684);
    var r = e.i(454720);
    e.i(108399);
    var n = e.i(860231);
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
        o = {
            light: "text-black",
            dark: "text-white"
        };
    e.s(["default", 0, e => {
        let c, d, m, h, u, f, p, x, b, g = (0, a.c)(28),
            {
                label: w,
                theme: v,
                drawer: y,
                cryptoCurrency: j,
                size: N
            } = e,
            k = void 0 === N ? "medium" : N,
            S = s[j],
            T = o[v];
        g[0] !== j || g[1] !== w || g[2] !== k ? (c = (0, i.default)(w, {
            style: j,
            size: k
        }), g[0] = j, g[1] = w, g[2] = k, g[3] = c) : c = g[3];
        let D = c;
        g[4] !== S.border ? (d = (0, l.default)("inline-flex h-fit min-h-0 w-fit max-w-full flex-col p-4", S.border), g[4] = S.border, g[5] = d) : d = g[5];
        let _ = "small" === k ? "body-3" : "body-1-semi-bold";
        g[6] !== S.background || g[7] !== _ || g[8] !== T ? (m = (0, l.default)("inline-flex w-fit max-w-full items-center bg-linear-to-r p-4 leading-tight", T, S.background, _), g[6] = S.background, g[7] = _, g[8] = T, g[9] = m) : m = g[9];
        let C = "small" === k && "[&>em]:!py-0";
        g[10] !== C ? (h = (0, l.default)("inline-flex min-h-0 items-center gap-4", C), g[10] = C, g[11] = h) : h = g[11], g[12] !== k || g[13] !== S.icon ? (u = "small" !== k && (0, t.jsx)("span", {
            className: "inline-flex shrink-0",
            "data-testid": `offerBanner__icon--${S.icon}`,
            children: (0, t.jsx)(n.default, {
                name: S.icon,
                size: 24,
                strokeWidth: 1.5,
                color: "black",
                isFilled: !0
            })
        }), g[12] = k, g[13] = S.icon, g[14] = u) : u = g[14], g[15] !== D || g[16] !== h || g[17] !== u ? (f = (0, t.jsxs)("span", {
            "data-testid": "offerBanner__label",
            className: h,
            children: [D, u]
        }), g[15] = D, g[16] = h, g[17] = u, g[18] = f) : f = g[18], g[19] !== m || g[20] !== f ? (p = (0, t.jsx)("div", {
            className: m,
            children: f
        }), g[19] = m, g[20] = f, g[21] = p) : p = g[21], g[22] !== p || g[23] !== d ? (x = (0, t.jsx)("div", {
            className: d,
            "data-testid": "offerBanner",
            children: p
        }), g[22] = p, g[23] = d, g[24] = x) : x = g[24];
        let E = x;
        return g[25] !== E || g[26] !== y ? (b = y ? .dynamicDrawerContent ? (0, t.jsx)(r.default, {
            dynamicDrawerContent: y.dynamicDrawerContent,
            label: y.label,
            buttonClassname: (0, l.default)("text-primary body-1-semi-bold inline-flex h-fit min-h-0 w-fit max-w-full items-center p-0 text-start leading-tight"),
            children: E
        }) : E, g[25] = E, g[26] = y, g[27] = b) : b = g[27], b
    }], 627528)
}, 657610, e => {
    "use strict";
    var t = e.i(191788),
        a = e.i(798715);
    let l = {
        some: 0,
        all: 1
    };
    e.s(["useInView", 0, function(e, {
        root: i,
        margin: r,
        amount: n,
        once: s = !1,
        initial: o = !1
    } = {}) {
        let [c, d] = (0, t.useState)(o);
        return (0, t.useEffect)(() => {
            if (!e.current || s && c) return;
            let t = {
                root: i && i.current || void 0,
                margin: r,
                amount: n
            };
            return function(e, t, {
                root: i,
                margin: r,
                amount: n = "some"
            } = {}) {
                let s = (0, a.resolveElements)(e),
                    o = new WeakMap,
                    c = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let a = o.get(e.target);
                            if (!!a !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let a = t(e.target, e);
                                    "function" == typeof a ? o.set(e.target, a) : c.unobserve(e.target)
                                } else "function" == typeof a && (a(e), o.delete(e.target))
                        })
                    }, {
                        root: i,
                        rootMargin: r,
                        threshold: "number" == typeof n ? n : l[n]
                    });
                return s.forEach(e => c.observe(e)), () => c.disconnect()
            }(e.current, () => (d(!0), s ? void 0 : () => d(!1)), t)
        }, [i, e, r, s, n]), c
    }], 657610)
}, 9446, e => {
    "use strict";
    e.s(["scrollTo", 0, (e, t) => {
        if (!t.current) return;
        e.preventDefault();
        let a = `#${t.current?.id}`;
        history.pushState(null, "", a), window.scrollTo({
            behavior: "smooth",
            top: t.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 70
        })
    }])
}, 274250, 170255, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(969821),
        i = e.i(335536),
        r = e.i(295485);
    e.i(664157);
    var n = e.i(271179),
        s = e.i(203828),
        o = e.i(191788);
    e.i(286941);
    var c = e.i(126762);
    e.i(108399);
    var d = e.i(860231),
        m = e.i(455108),
        h = e.i(495854);
    let u = e => {
            let l, r, n, o, m, u, f, p, x, b, g, w, v, y, j = (0, a.c)(34),
                {
                    faq: N
                } = e,
                {
                    questions: k,
                    theme: S
                } = N,
                T = void 0 === S ? "dark" : S,
                {
                    locale: D
                } = (0, s.useRouter)(),
                _ = "ar" === D;
            if (j[0] !== _ || j[1] !== k || j[2] !== T) {
                var C;
                let e = (C = T ? ? "dark", _ ? "dark" === C ? "data-selected:tab-halo-right-white" : "data-selected:tab-halo-right-black" : "dark" === C ? "data-selected:tab-halo-left-white" : "data-selected:tab-halo-left-black");
                p = "hidden md:block", x = "true", r = i.TabGroup, m = "div", u = "flex flex-row gap-56", f = !0, l = i.TabList, n = "flex w-1/2 flex-col gap-16", o = k.map((a, l) => {
                    let {
                        question: r
                    } = a;
                    return (0, t.jsxs)(i.Tab, {
                        className: (0, h.default)("body-1-semi-bold flex w-full cursor-pointer items-center justify-between bg-linear-to-r px-24 py-12 text-start text-balance outline-none hover:bg-linear-to-r rtl:bg-linear-to-l rtl:hover:bg-linear-to-l", "dark" === T ? "from-white/10 to-white/0 hover:from-white/20" : "from-black/10 to-black/0 hover:from-black/20", e),
                        as: "h3",
                        "data-cs-override-id": `FAQ-question${l+1}`,
                        children: [r, (0, t.jsx)("div", {
                            className: (0, h.default)("-rotate-90 rtl:rotate-90", "dark" === T ? "text-neutral-400" : "text-neutral-600"),
                            children: (0, t.jsx)(d.default, {
                                name: "chevronDown",
                                color: "current",
                                size: 25,
                                strokeWidth: 3.5
                            })
                        })]
                    }, r)
                }), j[0] = _, j[1] = k, j[2] = T, j[3] = l, j[4] = r, j[5] = n, j[6] = o, j[7] = m, j[8] = u, j[9] = f, j[10] = p, j[11] = x
            } else l = j[3], r = j[4], n = j[5], o = j[6], m = j[7], u = j[8], f = j[9], p = j[10], x = j[11];
            if (j[12] !== l || j[13] !== n || j[14] !== o ? (b = (0, t.jsx)(l, {
                    className: n,
                    children: o
                }), j[12] = l, j[13] = n, j[14] = o, j[15] = b) : b = j[15], j[16] !== k || j[17] !== T) {
                let e;
                j[19] !== T ? (e = e => {
                    let {
                        answer: a,
                        question: l
                    } = e;
                    return (0, t.jsx)(i.TabPanel, {
                        children: (0, t.jsx)(c.default, {
                            content: a,
                            className: (0, h.default)("rich-text-p:mt-0 rich-text-p:text-balance mt-16 max-w-full md:mt-0", "dark" === T ? "rich-text-p:text-gray-300 rich-text-a:text-gray-300" : "rich-text-p:text-gray-700 rich-text-a:text-gray-700")
                        })
                    }, `${l}-answer`)
                }, j[19] = T, j[20] = e) : e = j[20], g = k.map(e), j[16] = k, j[17] = T, j[18] = g
            } else g = j[18];
            return j[21] !== g ? (w = (0, t.jsx)(i.TabPanels, {
                className: "flex w-1/2 flex-col gap-16",
                children: g
            }), j[21] = g, j[22] = w) : w = j[22], j[23] !== r || j[24] !== w || j[25] !== m || j[26] !== u || j[27] !== f || j[28] !== b ? (v = (0, t.jsxs)(r, {
                as: m,
                className: u,
                vertical: f,
                children: [b, w]
            }), j[23] = r, j[24] = w, j[25] = m, j[26] = u, j[27] = f, j[28] = b, j[29] = v) : v = j[29], j[30] !== v || j[31] !== p || j[32] !== x ? (y = (0, t.jsx)("div", {
                className: p,
                "aria-hidden": x,
                children: v
            }), j[30] = v, j[31] = p, j[32] = x, j[33] = y) : y = j[33], y
        },
        f = e => {
            let i, n, s, o, m = (0, a.c)(15),
                {
                    faq: u
                } = e,
                {
                    questions: f,
                    theme: b
                } = u,
                g = void 0 === b ? "dark" : b;
            m[0] !== f ? (i = f.map(p) ? ? [], m[0] = f, m[1] = i) : i = m[1];
            let w = i;
            m[2] !== w ? (n = function(e) {
                w.filter(t => t.current ? .getAttribute("data-id") !== e).forEach(x)
            }, m[2] = w, m[3] = n) : n = m[3];
            let v = n;
            if (m[4] !== v || m[5] !== f || m[6] !== w || m[7] !== g) {
                let e;
                m[9] !== v || m[10] !== w || m[11] !== g ? (e = (e, a) => {
                    let {
                        question: i,
                        answer: n
                    } = e;
                    return (0, t.jsx)(l.Disclosure, {
                        as: "li",
                        className: "flex flex-col",
                        itemScope: !0,
                        itemProp: "mainEntity",
                        itemType: "https://schema.org/Question",
                        children: e => {
                            let {
                                open: s
                            } = e;
                            return (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsxs)(l.DisclosureButton, {
                                    className: (0, h.default)("group me-12 flex w-full items-center justify-between bg-linear-to-r px-16 py-12 transition duration-600 rtl:bg-linear-to-l", "dark" === g ? "from-white/10 to-white/0" : "from-black/10 to-black/0", {
                                        "tab-halo-top-white": s && "dark" === g,
                                        "tab-halo-top-black": s && "light" === g
                                    }),
                                    ref: w[a],
                                    "data-id": `question-${a}`,
                                    onClick: () => v(`question-${a}`),
                                    "data-cs-override-id": `FAQ-question${a+1}`,
                                    children: [(0, t.jsx)("h3", {
                                        className: "body-1-semi-bold text-start text-balance",
                                        itemProp: "name",
                                        children: i
                                    }), (0, t.jsx)("div", {
                                        className: "transition duration-500 group-data-open:rotate-180",
                                        children: (0, t.jsx)(d.default, {
                                            name: "chevronDown",
                                            color: "dark" === g ? "white" : "black",
                                            size: 30,
                                            strokeWidth: 3.5
                                        })
                                    })]
                                }), (0, t.jsx)(r.Transition, {
                                    unmount: !1,
                                    enter: "transition transition-[max-height] duration-500 ease-in",
                                    enterFrom: "transform max-h-0 ",
                                    enterTo: "transform max-h-screen ",
                                    leave: "transition transition-[max-height] duration-300 ease-out",
                                    leaveFrom: "transform max-h-screen",
                                    leaveTo: "transform max-h-0 ",
                                    children: (0, t.jsx)(l.DisclosurePanel, {
                                        className: "overflow-hidden",
                                        "data-testid": "faq__answer",
                                        itemScope: !0,
                                        itemProp: "acceptedAnswer",
                                        itemType: "https://schema.org/Answer",
                                        static: !0,
                                        children: (0, t.jsx)(c.default, {
                                            itemProp: "text",
                                            content: n,
                                            className: (0, h.default)("rich-text-p:mt-0 rich-text-p:text-balance mt-16 max-w-full lg:mt-0", "dark" === g ? "rich-text-p:text-gray-300 rich-text-a:text-gray-300" : "rich-text-p:text-gray-800 rich-text-a:text-gray-700")
                                        })
                                    })
                                })]
                            })
                        }
                    }, i)
                }, m[9] = v, m[10] = w, m[11] = g, m[12] = e) : e = m[12], s = f.map(e), m[4] = v, m[5] = f, m[6] = w, m[7] = g, m[8] = s
            } else s = m[8];
            return m[13] !== s ? (o = (0, t.jsx)("div", {
                className: "md:hidden",
                itemScope: !0,
                itemType: "https://schema.org/FAQPage",
                children: (0, t.jsx)("div", {
                    className: "w-full gap-32 lg:w-1/2",
                    children: (0, t.jsx)("ul", {
                        className: "relative flex flex-col gap-16",
                        children: s
                    })
                })
            }), m[13] = s, m[14] = o) : o = m[14], o
        };

    function p() {
        return (0, o.createRef)()
    }

    function x(e) {
        e.current ? .dataset.headlessuiState === "open" && e.current ? .click()
    }
    e.s(["default", 0, e => {
        let l, i, r, s, o, d, p, x, b = (0, a.c)(21),
            {
                faq: g,
                title: w
            } = e,
            {
                t: v
            } = (0, n.useTranslation)("sections"),
            {
                termsAndConditions: y,
                theme: j
            } = g,
            N = void 0 === j ? "dark" : j,
            k = "dark" === N ? "bg-neon-purple-radial text-white" : "bg-neutral-50 text-black";
        return b[0] !== k ? (l = (0, h.default)(k), b[0] = k, b[1] = l) : l = b[1], b[2] !== v || b[3] !== w ? (i = w || v("faq.title"), b[2] = v, b[3] = w, b[4] = i) : i = b[4], b[5] !== i ? (r = (0, t.jsx)("h2", {
            className: "responsive-display-4 mb-32 sm:mb-40",
            children: i
        }), b[5] = i, b[6] = r) : r = b[6], b[7] !== g ? (s = (0, t.jsx)(u, {
            faq: g
        }), o = (0, t.jsx)(f, {
            faq: g
        }), b[7] = g, b[8] = s, b[9] = o) : (s = b[8], o = b[9]), b[10] !== y || b[11] !== N ? (d = y && (0, t.jsx)("div", {
            className: "pt-64 md:pt-80",
            id: "terms-and-conditions",
            children: (0, t.jsx)(c.default, {
                className: (0, h.default)("body-4 m-auto text-center md:max-w-[70%]", "dark" === N ? "rich-text-a:text-white text-white" : "rich-text-a:text-black text-black"),
                content: y
            })
        }), b[10] = y, b[11] = N, b[12] = d) : d = b[12], b[13] !== r || b[14] !== s || b[15] !== o || b[16] !== d ? (p = (0, t.jsxs)(m.default.Section, {
            children: [r, s, o, d]
        }), b[13] = r, b[14] = s, b[15] = o, b[16] = d, b[17] = p) : p = b[17], b[18] !== l || b[19] !== p ? (x = (0, t.jsx)("div", {
            className: l,
            children: p
        }), b[18] = l, b[19] = p, b[20] = x) : x = b[20], x
    }], 170255), e.s([], 274250)
}, 83899, e => {
    "use strict";
    var t = e.i(261576),
        a = e.i(203828),
        l = e.i(799444);
    e.i(664157);
    var i = e.i(271179),
        r = e.i(654816);
    let n = {
            "lstax-01": [{
                batchNumber: 4,
                threshold: 39e3,
                shippingDate: "2024-09-30T00:00:00Z",
                display: "month"
            }],
            "flex-enfres": [{
                batchNumber: 1,
                threshold: 35400,
                shippingDate: "2024-07-25T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 2,
                threshold: 35200,
                shippingDate: "2024-07-31T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 3,
                threshold: 34200,
                shippingDate: "2024-08-05T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 4,
                threshold: 33600,
                shippingDate: "2024-08-12T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 5,
                threshold: 3e4,
                shippingDate: "2024-08-16T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 6,
                threshold: 24e3,
                shippingDate: "2024-08-26T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 7,
                threshold: 19e3,
                shippingDate: "2024-09-02T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 8,
                threshold: 14e3,
                shippingDate: "2024-09-09T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 9,
                threshold: 9e3,
                shippingDate: "2024-09-16T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 10,
                threshold: 4500,
                shippingDate: "2024-09-23T00:00:00Z",
                display: "day"
            }],
            "flex-orabtc-enfres": [{
                batchNumber: 1,
                threshold: 12500,
                shippingDate: "2024-08-05T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 2,
                threshold: 11700,
                shippingDate: "2024-08-12T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 3,
                threshold: 10500,
                shippingDate: "2024-08-19T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 4,
                threshold: 8800,
                shippingDate: "2024-08-26T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 5,
                threshold: 7e3,
                shippingDate: "2024-09-02T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 6,
                threshold: 5200,
                shippingDate: "2024-09-09T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 7,
                threshold: 3400,
                shippingDate: "2024-09-16T00:00:00Z",
                display: "day"
            }, {
                batchNumber: 8,
                threshold: 1700,
                shippingDate: "2024-09-23T00:00:00Z",
                display: "day"
            }]
        },
        s = (e, t, a) => {
            let l = "en-gb" === r.locales[a].fullLocale ? "en-us" : r.locales[a].fullLocale,
                i = new Date(e);
            return "day" === t ? i.toLocaleDateString(l, {
                month: "long",
                day: "numeric"
            }) : i.toLocaleDateString(l, {
                month: "long"
            })
        };
    e.s(["default", 0, e => {
        let r, o, c = (0, t.c)(7),
            {
                t: d
            } = (0, i.useTranslation)("common"),
            {
                locale: m
            } = (0, a.useRouter)(),
            h = m || "en",
            {
                id: u,
                sku: f
            } = e;
        c[0] !== u ? (r = [u], c[0] = u, c[1] = r) : r = c[1];
        let {
            prices: p
        } = (0, l.default)(r), x = p ? p[0] : null, b = n[f];
        if (!x || !b) return null;
        let {
            quantityAvailable: g
        } = x;
        if (c[2] !== h || c[3] !== g || c[4] !== b || c[5] !== d) {
            for (let e of (o = Symbol.for("react.early_return_sentinel"), b))
                if (g >= e.threshold) {
                    let {
                        shippingDate: t,
                        display: a,
                        batchNumber: l
                    } = e;
                    if (new Date(t) < new Date) {
                        o = null;
                        break
                    }
                    let i = s(t, a, h);
                    o = {
                        batchNumber: l,
                        batchMessage: d("day" === e.display ? "shippingInMessage" : "shippingInLateMessage", {
                            date: i
                        })
                    };
                    break
                }
            c[2] = h, c[3] = g, c[4] = b, c[5] = d, c[6] = o
        } else o = c[6];
        return o !== Symbol.for("react.early_return_sentinel") ? o : null
    }])
}, 506411, 237341, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(203828),
        i = e.i(41158);
    e.i(643781);
    var r = e.i(989606);
    e.i(108399);
    var n = e.i(860231),
        s = e.i(455108),
        o = e.i(495854);
    let c = [{
            name: "Bitcoin",
            href: "https://www.ledger.com/coin/wallet/bitcoin",
            icon: "bitcoin2"
        }, {
            name: "Ethereum",
            href: "https://www.ledger.com/coin/wallet/ethereum",
            icon: "ethereum2"
        }, {
            name: "XRP",
            href: "https://www.ledger.com/coin/wallet/ripple",
            icon: "xrp"
        }, {
            name: "TRON",
            href: "https://www.ledger.com/coin/wallet/tron",
            icon: "tron"
        }, {
            name: "Tether",
            href: "https://www.ledger.com/coin/wallet/tether",
            icon: "tether"
        }, {
            name: "BNB",
            href: "https://www.ledger.com/coin/wallet/binancecoin",
            icon: "bnb"
        }, {
            name: "Solana",
            href: "https://www.ledger.com/coin/wallet/solana",
            icon: "solana"
        }, {
            name: "Cardano",
            href: "https://www.ledger.com/coin/wallet/cardano",
            icon: "cardano"
        }, {
            name: "Dogecoin",
            href: "https://www.ledger.com/coin/wallet/dogecoin",
            icon: "dogecoin2"
        }, {
            name: "Chainlink",
            href: "https://www.ledger.com/coin/wallet/chainlink",
            icon: "chainlink2"
        }, {
            name: "Polygon",
            href: "https://www.ledger.com/coin/wallet/matic-network",
            icon: "polygon"
        }, {
            name: "Polkadot",
            href: "https://www.ledger.com/coin/wallet/polkadot",
            icon: "polkadot"
        }, {
            name: "Wrapped Bitcoin",
            href: "https://www.ledger.com/coin/wallet/wrapped-bitcoin",
            icon: "wrappedbitcoin"
        }, {
            name: "Litecoin",
            href: "https://www.ledger.com/coin/wallet/litecoin",
            icon: "litecoin2"
        }, {
            name: "DAI",
            href: "https://www.ledger.com/coin/wallet/dai",
            icon: "dai3"
        }, {
            name: "Shiba Inu",
            href: "https://www.ledger.com/coin/wallet/shiba-inu",
            icon: "shibainu"
        }, {
            name: "Uniswap",
            href: "https://www.ledger.com/coin/wallet/uniswap",
            icon: "uniswap"
        }, {
            name: "Optimism",
            href: "https://www.ledger.com/coin/wallet/optimism",
            icon: "optimism"
        }, {
            name: "Arbitrum",
            href: "https://www.ledger.com/coin/wallet/arbitrum",
            icon: "arbitrum"
        }, {
            name: "USD Coin",
            href: "https://www.ledger.com/coin/wallet/usd-coin",
            icon: "usdc"
        }],
        d = [...c, ...c],
        m = e => {
            let r, s = (0, a.c)(9),
                {
                    item: o
                } = e,
                {
                    locale: c
                } = (0, l.useRouter)();
            if ("en" === c) {
                let e, a;
                return s[0] !== o.icon ? (e = (0, t.jsx)(n.default, {
                    name: o.icon,
                    size: 60,
                    strokeWidth: 1.5,
                    color: "black",
                    isFilled: !0
                }), s[0] = o.icon, s[1] = e) : e = s[1], s[2] !== o.href || s[3] !== o.icon || s[4] !== o.name || s[5] !== e ? (a = (0, t.jsx)(i.default, {
                    href: o.href,
                    className: "block h-56 w-56 sm:h-64 sm:w-64 [&>svg]:w-full",
                    title: o.name,
                    "data-testid": o.icon,
                    children: e
                }), s[2] = o.href, s[3] = o.icon, s[4] = o.name, s[5] = e, s[6] = a) : a = s[6], a
            }
            return s[7] !== o.icon ? (r = (0, t.jsx)(n.default, {
                name: o.icon,
                size: 60,
                strokeWidth: 1.5,
                color: "black",
                isFilled: !0
            }), s[7] = o.icon, s[8] = r) : r = s[8], r
        };

    function h(e, a) {
        let l = `${e.name}-${a}`;
        return (0, t.jsx)("div", {
            className: "flex h-56 w-56 shrink-0 sm:h-64 sm:w-64",
            children: (0, t.jsx)(m, {
                item: e
            })
        }, l)
    }
    e.s(["default", 0, e => {
        let l, i, n, c, m, u, f, p, x, b, g, w, v, y = (0, a.c)(35),
            {
                contentBlock: j
            } = e,
            {
                title: N,
                subtitle: k,
                link: S,
                dataCsOverrideId: T
            } = j,
            D = j.theme || "dark",
            _ = "dark" === D ? "bg-black" : "bg-neutral-50";
        y[0] !== _ ? (l = (0, o.default)("w-full", _), y[0] = _, y[1] = l) : l = y[1];
        let C = "dark" === D ? "text-white" : "text-black";
        y[2] !== C ? (i = (0, o.default)("md:flex-row", C), y[2] = C, y[3] = i) : i = y[3], y[4] !== N ? (n = (0, t.jsx)("h3", {
            className: "responsive-display-4 flex",
            children: N
        }), y[4] = N, y[5] = n) : n = y[5], y[6] !== k || y[7] !== D ? (c = k && (0, t.jsx)("p", {
            className: (0, o.default)("heading-4 flex w-auto items-center pt-16 md:pr-16", "dark" === D ? "text-white" : "text-black"),
            children: k
        }), y[6] = k, y[7] = D, y[8] = c) : c = y[8], y[9] !== n || y[10] !== c ? (m = (0, t.jsxs)("div", {
            children: [n, c]
        }), y[9] = n, y[10] = c, y[11] = m) : m = y[11], y[12] !== S || y[13] !== D ? (u = S && (0, t.jsx)("div", {
            className: "hidden self-start sm:block",
            children: (0, t.jsx)(r.default, {
                label: S.label,
                variant: "dark" === D ? "secondary-white" : "primary-black",
                href: S.url,
                size: "medium"
            })
        }), y[12] = S, y[13] = D, y[14] = u) : u = y[14], y[15] !== m || y[16] !== u ? (f = (0, t.jsxs)("div", {
            className: "flex flex-col justify-between gap-40 sm:flex-row",
            children: [m, u]
        }), y[15] = m, y[16] = u, y[17] = f) : f = y[17];
        let E = "dark" === D ? "before:bg-linear-to-r before:from-neutral-950 before:to-neutral-950/0 after:bg-linear-to-r after:from-neutral-950/0 after:to-neutral-950" : "before:bg-linear-to-r before:from-neutral-50 before:to-neutral-50/0 after:bg-linear-to-r after:from-neutral-50/0 after:to-neutral-50";
        return y[18] !== E ? (p = (0, o.default)("relative mt-48 flex h-64 flex-row gap-x-64 overflow-hidden before:absolute before:z-10 before:h-64 before:w-[100px] after:absolute after:right-0 after:h-64 after:w-[100px] before:sm:w-[200px] after:sm:w-[200px]", E), y[18] = E, y[19] = p) : p = y[19], y[20] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, t.jsx)("div", {
            className: "animate-carouselScrollAnimation flex gap-24 hover:[animation-play-state:paused] sm:gap-80",
            children: d.map(h)
        }), y[20] = x) : x = y[20], y[21] !== p ? (b = (0, t.jsx)("div", {
            className: p,
            children: x
        }), y[21] = p, y[22] = b) : b = y[22], y[23] !== S || y[24] !== D ? (g = S && (0, t.jsx)("div", {
            className: "mt-40 flex justify-center self-start sm:hidden",
            children: (0, t.jsx)(r.default, {
                label: S.label,
                variant: "dark" === D ? "secondary-white" : "primary-black",
                href: S.url,
                size: "medium"
            })
        }), y[23] = S, y[24] = D, y[25] = g) : g = y[25], y[26] !== b || y[27] !== g || y[28] !== i || y[29] !== f ? (w = (0, t.jsx)(s.default.Section, {
            children: (0, t.jsxs)("div", {
                className: i,
                children: [f, b, g]
            })
        }), y[26] = b, y[27] = g, y[28] = i, y[29] = f, y[30] = w) : w = y[30], y[31] !== T || y[32] !== w || y[33] !== l ? (v = (0, t.jsx)("div", {
            className: l,
            "data-cs-override-id": T,
            children: w
        }), y[31] = T, y[32] = w, y[33] = l, y[34] = v) : v = y[34], v
    }], 237341), e.s([], 506411)
}, 601917, 125125, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576);
    e.i(923160);
    var l = e.i(217863),
        i = e.i(349057),
        r = e.i(455108),
        n = e.i(495854);
    e.s(["default", 0, e => {
        let s, o, c, d, m, h, u, f, p, x = (0, a.c)(24),
            {
                title: b,
                subtitle: g,
                hudLabel: w,
                theme: v,
                displayReviews: y,
                displayAsHero: j
            } = e,
            N = void 0 === v ? "dark" : v,
            k = void 0 === y || y,
            {
                enteredViaLedgerLive: S
            } = (0, i.default)();
        if (!b) return null;
        let T = "dark" === N ? "bg-black" : "bg-neutral-50",
            D = !S && void 0 !== j && j && "navigation-safe-space";
        x[0] !== T || x[1] !== D ? (s = (0, n.default)(T, D), x[0] = T, x[1] = D, x[2] = s) : s = x[2], x[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)("div", {
            className: "mask-[radial-gradient(white, transparent)] col-start-1 row-start-1 flex h-full min-h-160 w-full max-w-(--breakpoint-xl)",
            children: (0, t.jsx)("div", {
                className: "bg-dot-large-white flex h-full w-full mask-[radial-gradient(white,transparent)] bg-center bg-no-repeat"
            })
        }), c = (0, t.jsx)("div", {
            className: "col-start-1 row-start-1 m-auto flex size-3/5 bg-white/10 blur-3xl"
        }), x[3] = o, x[4] = c) : (o = x[3], c = x[4]);
        let _ = "dark" === N ? "text-white" : "text-black";
        return x[5] !== _ ? (d = (0, n.default)("z-10 col-start-1 row-start-1 flex flex-col items-center justify-center gap-32 text-center", _), x[5] = _, x[6] = d) : d = x[6], x[7] !== w || x[8] !== N ? (m = w && (0, t.jsx)(r.default.TagHud, {
            label: w,
            size: "medium",
            theme: N
        }), x[7] = w, x[8] = N, x[9] = m) : m = x[9], x[10] !== b ? (h = (0, t.jsx)("h2", {
            className: "responsive-display-2 max-w-(--breakpoint-xl)",
            children: b
        }), x[10] = b, x[11] = h) : h = x[11], x[12] !== k || x[13] !== g || x[14] !== N ? (u = g && (0, t.jsxs)("div", {
            className: "flex w-fit flex-row items-center justify-center self-center bg-linear-to-r from-transparent via-white/10 to-transparent px-16 py-8",
            children: [k && (0, t.jsx)("span", {
                className: "hidden md:inline-block",
                children: (0, t.jsx)(l.default, {
                    rating: 4.5,
                    size: "medium",
                    color: "dark" === N ? "white" : "black"
                })
            }), (0, t.jsx)("span", {
                className: "body-3 ms-8 max-w-(--breakpoint-xl)",
                children: g
            })]
        }), x[12] = k, x[13] = g, x[14] = N, x[15] = u) : u = x[15], x[16] !== d || x[17] !== m || x[18] !== h || x[19] !== u ? (f = (0, t.jsx)(r.default.Section, {
            children: (0, t.jsxs)("div", {
                className: "grid justify-center",
                children: [o, c, (0, t.jsxs)("div", {
                    className: d,
                    children: [m, h, u]
                })]
            })
        }), x[16] = d, x[17] = m, x[18] = h, x[19] = u, x[20] = f) : f = x[20], x[21] !== f || x[22] !== s ? (p = (0, t.jsx)("div", {
            className: s,
            children: f
        }), x[21] = f, x[22] = s, x[23] = p) : p = x[23], p
    }], 125125), e.s([], 601917)
}, 63535, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(455108),
        i = e.i(522441),
        r = e.i(495854);
    e.s(["default", 0, e => {
        let n, s, o, c, d, m, h, u, f, p = (0, a.c)(27),
            {
                title: x,
                subtitle: b,
                productsToCompareByDevice: g,
                theme: w,
                template: v,
                dataCSOverrideId: y,
                hasStickyHeader: j,
                buyMode: N
            } = e,
            k = void 0 === w ? "light" : w,
            S = void 0 === v ? "standard" : v,
            T = void 0 !== j && j,
            D = "dark" === k ? "bg-black" : "bg-white";
        p[0] !== D ? (n = (0, r.default)(D), p[0] = D, p[1] = n) : n = p[1];
        let _ = "dark" === k && "text-white";
        return p[2] !== _ ? (s = (0, r.default)("flex flex-col gap-16 md:gap-24", _), p[2] = _, p[3] = s) : s = p[3], p[4] !== x ? (o = (0, t.jsx)("h2", {
            className: "responsive-display-4 text-center",
            children: x
        }), p[4] = x, p[5] = o) : o = p[5], p[6] !== b ? (c = b && (0, t.jsx)("p", {
            className: "heading-4 mx-auto max-w-3xl px-16 text-center lg:px-0",
            children: b
        }), p[6] = b, p[7] = c) : c = p[7], p[8] !== s || p[9] !== o || p[10] !== c ? (d = (0, t.jsxs)("div", {
            className: s,
            children: [o, c]
        }), p[8] = s, p[9] = o, p[10] = c, p[11] = d) : d = p[11], p[12] !== N || p[13] !== T || p[14] !== g || p[15] !== S || p[16] !== k ? (m = (0, t.jsx)(i.default, {
            productsToCompareByDevice: g,
            theme: k,
            hideExtendedInformation: !0,
            hasStickyHeader: T,
            template: S,
            buyMode: N
        }), p[12] = N, p[13] = T, p[14] = g, p[15] = S, p[16] = k, p[17] = m) : m = p[17], p[18] !== d || p[19] !== m ? (h = (0, t.jsxs)("div", {
            className: "flex flex-col gap-40 md:gap-56",
            children: [d, m]
        }), p[18] = d, p[19] = m, p[20] = h) : h = p[20], p[21] !== y || p[22] !== h ? (u = (0, t.jsx)(l.default.Section, {
            dataCsOverrideId: y,
            children: h
        }), p[21] = y, p[22] = h, p[23] = u) : u = p[23], p[24] !== u || p[25] !== n ? (f = (0, t.jsx)("div", {
            className: n,
            children: u
        }), p[24] = u, p[25] = n, p[26] = f) : f = p[26], f
    }])
}, 413202, 188532, 780629, e => {
    "use strict";
    var t = e.i(391398),
        a = e.i(261576),
        l = e.i(203828),
        i = e.i(41158),
        r = e.i(219501),
        n = e.i(495854),
        s = e.i(191788),
        o = e.i(198311),
        c = e.i(657610),
        d = e.i(455108);
    let m = ["GB", "ES", "TH"],
        h = e => {
            let l, i, r, s, o, c, d = (0, a.c)(17),
                {
                    contentBlock: m,
                    theme: h,
                    isSmallBlock: u
                } = e,
                f = void 0 === h ? "light" : h;
            d[0] !== m.image || d[1] !== u ? (l = m.image && (0, t.jsx)("div", {
                className: (0, n.default)("relative h-160 md:h-256", u && "md:h-160"),
                children: (0, t.jsx)("img", {
                    src: m.image.url,
                    alt: m.image.title ? ? "",
                    className: "h-full w-full object-contain"
                })
            }), d[0] = m.image, d[1] = u, d[2] = l) : l = d[2], d[3] !== m.title ? (i = (0, t.jsx)("span", {
                className: "heading-4-semi-bold",
                children: m.title
            }), d[3] = m.title, d[4] = i) : i = d[4];
            let p = "dark" === f && "text-neutral-200",
                x = "light" === f && "text-neutral-700";
            return d[5] !== p || d[6] !== x ? (r = (0, n.default)("mt-8 body-1 font-normal", p, x), d[5] = p, d[6] = x, d[7] = r) : r = d[7], d[8] !== m.subtitle || d[9] !== r ? (s = (0, t.jsx)("span", {
                className: r,
                children: m.subtitle
            }), d[8] = m.subtitle, d[9] = r, d[10] = s) : s = d[10], d[11] !== i || d[12] !== s ? (o = (0, t.jsxs)("div", {
                className: "flex flex-col p-0 pb-24 text-center md:p-24 md:pt-16",
                children: [i, s]
            }), d[11] = i, d[12] = s, d[13] = o) : o = d[13], d[14] !== l || d[15] !== o ? (c = (0, t.jsxs)(t.Fragment, {
                children: [l, o]
            }), d[14] = l, d[15] = o, d[16] = c) : c = d[16], c
        };
    e.s(["default", 0, e => {
        let u, f, p, x, b, g, w, v, y, j, N, k, S, T, D, _, C = (0, a.c)(46),
            {
                title: E,
                description: z,
                tag: L,
                image: O,
                contentBlocks: B,
                disclaimer: R,
                dataCSOverrideId: $,
                theme: A
            } = e,
            I = void 0 === A ? "light" : A,
            {
                isPreview: P
            } = (0, l.useRouter)(),
            M = (0, s.useRef)(null);
        C[0] === Symbol.for("react.memo_cache_sentinel") ? (u = {
            once: !0,
            amount: .2
        }, C[0] = u) : u = C[0];
        let Z = (0, c.useInView)(M, u),
            {
                countryCode: F
            } = (0, r.default)();
        if (!P && m.includes(F ? ? "") || !E || !O || B.length < 1) return null;
        let W = "dark" === I && "bg-black text-white",
            V = "light" === I && "bg-neutral-50 text-black";
        C[1] !== W || C[2] !== V ? (f = (0, n.default)(W, V), C[1] = W, C[2] = V, C[3] = f) : f = C[3], C[4] !== E ? (p = (0, t.jsx)("h2", {
            className: "responsive-display-4",
            dangerouslySetInnerHTML: {
                __html: E
            }
        }), C[4] = E, C[5] = p) : p = C[5], C[6] !== z || C[7] !== I ? (x = z && (0, t.jsx)("span", {
            className: (0, n.default)("mt-16 heading-3-semi-bold font-normal", "dark" === I && "text-neutral-200", "light" === I && "text-neutral-800"),
            children: z
        }), C[6] = z, C[7] = I, C[8] = x) : x = C[8], C[9] !== p || C[10] !== x ? (b = (0, t.jsxs)("div", {
            className: "flex flex-col",
            children: [p, x]
        }), C[9] = p, C[10] = x, C[11] = b) : b = C[11], C[12] !== L || C[13] !== I ? (g = L && (0, t.jsx)("div", {
            className: "max-h-fit",
            children: (0, t.jsx)(d.default.TagHud, {
                label: L,
                theme: I
            })
        }), C[12] = L, C[13] = I, C[14] = g) : g = C[14], C[15] !== b || C[16] !== g ? (w = (0, t.jsxs)("div", {
            className: "mb-40 flex flex-col justify-between gap-16 md:mb-56 md:flex-row",
            children: [b, g]
        }), C[15] = b, C[16] = g, C[17] = w) : w = C[17], C[18] === Symbol.for("react.memo_cache_sentinel") ? (v = {
            opacity: 0
        }, C[18] = v) : v = C[18], C[19] === Symbol.for("react.memo_cache_sentinel") ? (y = {
            hidden: v,
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: .3
                }
            }
        }, C[19] = y) : y = C[19];
        let q = Z ? "visible" : "hidden";
        if (C[20] !== B || C[21] !== I) {
            let e;
            C[23] !== B.length || C[24] !== I ? (e = (e, a) => {
                let l = a === B.length - 1 || 0 === a;
                return (0, t.jsx)(o.motion.div, {
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 20
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .5
                            }
                        }
                    },
                    className: (0, n.default)("flex flex-col gap-16 border md:row-span-6 md:gap-0", l && "md:row-span-5", "dark" === I && "border-neutral-800 bg-neutral-950", "light" === I && "border-neutral-200 bg-neutral-100"),
                    children: e.link ? .url ? (0, t.jsx)(i.default, {
                        href: e.link ? .url,
                        children: (0, t.jsx)(h, {
                            contentBlock: e,
                            theme: I,
                            isSmallBlock: l
                        })
                    }) : (0, t.jsx)(h, {
                        contentBlock: e,
                        theme: I,
                        isSmallBlock: l
                    })
                }, e.title + a)
            }, C[23] = B.length, C[24] = I, C[25] = e) : e = C[25], j = B.map(e), C[20] = B, C[21] = I, C[22] = j
        } else j = C[22];
        C[26] !== q || C[27] !== j ? (N = (0, t.jsx)(o.motion.div, {
            ref: M,
            variants: y,
            initial: "hidden",
            animate: q,
            className: "grid basis-8/3 grid-cols-1 gap-24 md:grid-cols-2 md:grid-rows-11",
            children: j
        }), C[26] = q, C[27] = j, C[28] = N) : N = C[28];
        let H = O.title ? ? "";
        return C[29] !== O.url || C[30] !== H ? (k = (0, t.jsx)("div", {
            className: "relative h-full basis-4/3 self-center",
            children: (0, t.jsx)("img", {
                src: O.url,
                alt: H,
                className: "mb-16 h-full max-h-[370px] object-contain md:mb-0 md:max-h-[630px]"
            })
        }), C[29] = O.url, C[30] = H, C[31] = k) : k = C[31], C[32] !== N || C[33] !== k ? (S = (0, t.jsxs)("div", {
            className: "flex flex-col-reverse md:flex-row md:gap-24",
            children: [N, k]
        }), C[32] = N, C[33] = k, C[34] = S) : S = C[34], C[35] !== R || C[36] !== I ? (T = R && (0, t.jsx)("div", {
            className: (0, n.default)("mt-48 body-3", "dark" === I && "text-neutral-200", "light" === I && "text-neutral-800"),
            children: R
        }), C[35] = R, C[36] = I, C[37] = T) : T = C[37], C[38] !== w || C[39] !== S || C[40] !== T ? (D = (0, t.jsxs)(d.default.Section, {
            children: [w, S, T]
        }), C[38] = w, C[39] = S, C[40] = T, C[41] = D) : D = C[41], C[42] !== $ || C[43] !== D || C[44] !== f ? (_ = (0, t.jsx)("div", {
            className: f,
            "data-cs-override-id": $,
            children: D
        }), C[42] = $, C[43] = D, C[44] = f, C[45] = _) : _ = C[45], _
    }], 188532);
    var u = e.i(126019);
    e.i(643781);
    var f = e.i(989606);
    e.i(286941);
    var p = e.i(126762);

    function x(e) {
        let l, i, r, o, c, d, m, h, x, y, j = (0, a.c)(23),
            {
                steps: N,
                theme: k,
                dataCsOverrideId: S
            } = e,
            [T, D] = (0, s.useState)(0),
            [_, C] = (0, s.useState)(!1);
        j[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [], j[0] = l) : l = j[0];
        let E = (0, s.useRef)(l),
            z = (0, s.useRef)(null);
        j[1] === Symbol.for("react.memo_cache_sentinel") ? (i = (e, t) => {
            E.current[e] = t
        }, j[1] = i) : i = j[1];
        let L = i;
        j[2] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
            if ("function" != typeof window.matchMedia) return;
            let e = window.matchMedia("(max-width: 767px)"),
                t = () => C(e.matches);
            return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t)
        }, o = [], j[2] = r, j[3] = o) : (r = j[2], o = j[3]), (0, s.useLayoutEffect)(r, o), j[4] !== _ || j[5] !== N.length ? (c = () => {
            if (_ || 0 === N.length) {
                z.current && (z.current.disconnect(), z.current = null);
                return
            }
            let e = new IntersectionObserver(e => {
                let t = e.filter(v);
                if (0 === t.length) return;
                t.sort(w);
                let a = t[0].target.getAttribute("data-step-index"),
                    l = null != a ? Number.parseInt(a, 10) : NaN;
                !Number.isNaN(l) && l >= 0 && l < N.length && D(l)
            }, {
                root: null,
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0
            });
            return z.current = e, E.current.forEach(t => {
                t && e.observe(t)
            }), () => {
                e.disconnect(), z.current = null
            }
        }, d = [_, N.length], j[4] = _, j[5] = N.length, j[6] = c, j[7] = d) : (c = j[6], d = j[7]), (0, s.useEffect)(c, d), j[8] !== N.length ? (m = e => e === N.length - 1, j[8] = N.length, j[9] = m) : m = j[9];
        let O = m;
        j[10] !== O || j[11] !== k ? (h = (e, a, l) => {
            if (!e.link ? .url || l && !O(a)) return null;
            let i = l || O(a),
                r = (0, t.jsx)(f.default, {
                    variant: i ? "dark" === k ? "primary-white" : "primary-black" : "dark" === k ? "secondary-white" : "secondary-black",
                    href: e.link.url,
                    label: e.link.label,
                    isFull: l,
                    size: "medium"
                });
            return l ? (0, t.jsx)("div", {
                className: "mt-32",
                children: r
            }) : r
        }, j[10] = O, j[11] = k, j[12] = h) : h = j[12];
        let B = h;
        j[13] !== B || j[14] !== k ? (x = (e, a, l) => (0, t.jsxs)("div", {
            className: (0, n.default)("flex max-w-[586px] flex-col", l.mobile ? "gap-0" : "gap-16", l.animate && "transition-[opacity,transform] duration-600 ease-out", l.animate && (l.isActive ? "translate-y-0 opacity-100" : "translate-y-15 opacity-0")),
            "data-testid": l.animate ? `scrolly-step-text-${a}` : void 0,
            children: [!l.mobile && 0 === a && (0, t.jsx)(u.default, {
                src: "https://cdn.shopify.com/s/files/1/2974/4858/files/Vector_131b91f2-a86d-4b96-b62b-5c3a3c551bee.png?v=1775656830",
                alt: "Ledger Wallet Logo",
                width: 576,
                height: 40,
                className: (0, n.default)("h-40 w-xl object-contain object-left rtl:object-right", "dark" === k ? "invert" : "")
            }), (0, t.jsx)("h3", {
                className: l.mobile ? "heading-4-semi-bold" : "responsive-display-4",
                children: e.title
            }), e.description && (0, t.jsx)(p.default, {
                content: e.description,
                className: (0, n.default)("[&>p]:heading-4 [&_li]:m-0 [&_li_p]:m-0", l.mobile ? "mt-4" : "", "dark" === k && "text-neutral-200", "light" === k && "text-neutral-800")
            }), e.informationSections && e.informationSections.length > 0 && (0, t.jsxs)("div", {
                className: (0, n.default)("flex items-center gap-12", l.mobile ? "mt-16" : ""),
                children: [e.informationSections.filter(g).map(b), (0, t.jsx)("span", {
                    className: "body-3 text-neutral-500",
                    children: "50+"
                })]
            }), B(e, a, l.mobile)]
        }), j[13] = B, j[14] = k, j[15] = x) : x = j[15];
        let R = x;
        return 0 === N.length ? null : (j[16] !== T || j[17] !== S || j[18] !== _ || j[19] !== R || j[20] !== N || j[21] !== k ? (y = (0, t.jsx)("div", {
            "data-testid": "ledger-wallet-scrolly",
            children: _ ? (0, t.jsx)("div", {
                className: "flex flex-col gap-32 py-1",
                children: N.map((e, a) => (0, t.jsxs)("div", {
                    className: "flex flex-col",
                    "data-cs-override-id": S && `${S}-m-${a+1}`,
                    children: [0 === a && (0, t.jsx)(u.default, {
                        src: "https://cdn.shopify.com/s/files/1/2974/4858/files/Vector_131b91f2-a86d-4b96-b62b-5c3a3c551bee.png?v=1775656830",
                        alt: "Ledger Wallet Logo",
                        width: 147,
                        height: 40,
                        className: (0, n.default)("mb-32 h-40 w-xl object-contain object-left rtl:object-right", "dark" === k ? "invert" : "")
                    }), (0, t.jsx)("div", {
                        className: "flex justify-center",
                        children: function(e, a) {
                            let l = e.imageMobile ? ? e.image;
                            return l ? (0, t.jsx)(u.default, {
                                src: l.url,
                                alt: l.title ? ? "",
                                width: 608,
                                height: 440,
                                className: "rounded-4 h-auto w-full object-contain"
                            }, `m-${a}`) : null
                        }(e, a)
                    }), (0, t.jsx)("div", {
                        className: "mt-16 px-16",
                        children: R(e, a, {
                            animate: !1,
                            isActive: !0,
                            mobile: !0
                        })
                    })]
                }, `${e.title}-${a}`))
            }) : (0, t.jsxs)("div", {
                className: "flex flex-row justify-between",
                children: [(0, t.jsx)("div", {
                    className: "flex flex-3 flex-col",
                    children: N.map((e, a) => (0, t.jsx)("div", {
                        ref: e => L(a, e),
                        "data-step-index": a,
                        className: (0, n.default)("flex items-center", N.length <= 1 ? "min-h-[60vh]" : "min-h-[80vh]"),
                        "data-cs-override-id": S && `${S}-${a+1}`,
                        children: R(e, a, {
                            animate: !0,
                            isActive: T === a,
                            mobile: !1
                        })
                    }, `${e.title}-${a}`))
                }), (0, t.jsx)("div", {
                    className: "relative w-[40%]",
                    children: (0, t.jsx)("div", {
                        className: "sticky top-[8vh] h-[75vh] w-full",
                        children: (0, t.jsx)("div", {
                            className: "relative h-full w-full",
                            children: N.map((e, a) => {
                                let l = T === a;
                                return (0, t.jsx)("div", {
                                    className: (0, n.default)("absolute inset-0 flex items-center justify-center transition-opacity duration-900 ease-out", l ? "z-1 opacity-100" : "pointer-events-none z-0 opacity-0"),
                                    "aria-hidden": !l,
                                    children: function(e, a) {
                                        return e.image ? (0, t.jsx)(u.default, {
                                            src: e.image.url,
                                            alt: e.image.title ? ? "",
                                            width: 608,
                                            height: 608,
                                            className: "max-h-full max-w-full object-contain"
                                        }, `d-${a}`) : null
                                    }(e, a)
                                }, `layer-${e.title}-${a}`)
                            })
                        })
                    })
                })]
            })
        }), j[16] = T, j[17] = S, j[18] = _, j[19] = R, j[20] = N, j[21] = k, j[22] = y) : y = j[22], y)
    }

    function b(e, a) {
        return (0, t.jsx)(u.default, {
            src: e.image.url,
            alt: e.image.title ? ? "",
            width: 32,
            height: 32,
            className: "h-32 w-32 object-contain"
        }, `info-${a}`)
    }

    function g(e) {
        return e.image
    }

    function w(e, t) {
        return t.intersectionRatio - e.intersectionRatio
    }

    function v(e) {
        return e.isIntersecting
    }
    let y = ["GB", "ES", "TH"];
    e.s([], 413202), e.s(["LedgerWalletInfoNew", 0, e => {
        let i, s, o, c = (0, a.c)(11),
            {
                contentBlocks: m,
                dataCSOverrideId: h,
                theme: u
            } = e,
            f = u ? ? "light",
            {
                isPreview: p
            } = (0, l.useRouter)(),
            {
                countryCode: b
            } = (0, r.default)();
        if (!p && y.includes(b ? ? "") || m.length < 1) return null;
        let g = "dark" === f && "bg-black text-white",
            w = "light" === f && "bg-neutral-50 text-black";
        return c[0] !== g || c[1] !== w ? (i = (0, n.default)(g, w), c[0] = g, c[1] = w, c[2] = i) : i = c[2], c[3] !== m || c[4] !== h || c[5] !== f ? (s = (0, t.jsx)(d.default.Section, {
            children: (0, t.jsx)(x, {
                steps: m,
                theme: f,
                dataCsOverrideId: h
            })
        }), c[3] = m, c[4] = h, c[5] = f, c[6] = s) : s = c[6], c[7] !== h || c[8] !== i || c[9] !== s ? (o = (0, t.jsx)("div", {
            className: i,
            "data-cs-override-id": h,
            children: s
        }), c[7] = h, c[8] = i, c[9] = s, c[10] = o) : o = c[10], o
    }], 780629)
}]);

//# sourceMappingURL=17d7c6d4jcow1.js.map