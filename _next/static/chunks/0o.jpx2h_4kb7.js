(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 210053, 767049, e => {
    "use strict";
    var i = e.i(391398),
        l = e.i(261576),
        t = e.i(660600),
        s = e.i(126019);
    e.i(108399);
    var r = e.i(860231),
        n = e.i(495854);
    e.s(["default", 0, e => {
        let a, c, o, d, h, x, p, u, C, y, m, f = (0, l.c)(45),
            {
                productsToCompare: j,
                product1: g,
                product2: b,
                setProduct: L,
                theme: v
            } = e;
        if (f[0] !== g || f[1] !== b || f[2] !== j || f[3] !== L || f[4] !== v) {
            let e, l, C, y, m, w;
            f[13] !== b ? (e = e => {
                let {
                    handle: i
                } = e;
                return i !== b.handle
            }, f[13] = b, f[14] = e) : e = f[14];
            let V = j.filter(e),
                k = g.variants[0];
            c = t.Listbox, p = g, u = L, h = "relative";
            let S = "dark" === v && "border-neutral-600 bg-black text-white",
                H = "light" === v && "border-neutral-300 bg-white text-black";
            f[15] !== S || f[16] !== H ? (l = (0, n.default)("relative flex w-full cursor-default items-center gap-8 rounded-xs border px-12 py-8 text-left sm:body-3", S, H), f[15] = S, f[16] = H, f[17] = l) : l = f[17], f[18] !== k ? (C = k ? .image && (0, i.jsx)(s.default, {
                src: k.image.url,
                alt: "",
                width: 32,
                height: 32,
                className: "h-32 w-32 object-contain"
            }), f[18] = k, f[19] = C) : C = f[19], f[20] !== g.title ? (y = (0, i.jsx)("span", {
                className: "block truncate",
                children: g.title
            }), f[20] = g.title, f[21] = y) : y = f[21], f[22] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, i.jsx)("div", {
                className: "ms-auto",
                children: (0, i.jsx)(r.default, {
                    name: "chevronDown",
                    size: 25,
                    strokeWidth: 3.5,
                    color: "current"
                })
            }), f[22] = m) : m = f[22], f[23] !== l || f[24] !== C || f[25] !== y ? (x = (0, i.jsxs)(t.ListboxButton, {
                className: l,
                children: [C, y, m]
            }), f[23] = l, f[24] = C, f[25] = y, f[26] = x) : x = f[26], a = t.ListboxOptions;
            let M = "dark" === v && "bg-black text-white ring-neutral-800",
                _ = "light" === v && "bg-white text-black ring-neutral-200";
            f[27] !== M || f[28] !== _ ? (o = (0, n.default)("absolute z-20 mt-16 max-h-256 w-full overflow-auto rounded-xs py-16 shadow-lg ring-1 body-1 font-normal focus:outline-none sm:body-3", M, _), f[27] = M, f[28] = _, f[29] = o) : o = f[29], f[30] !== v ? (w = e => (0, i.jsx)(t.ListboxOption, {
                className: (0, n.default)("relative cursor-default select-none py-8 pl-12 pr-16", "dark" === v && "text-white hover:bg-neutral-900 focus:bg-neutral-900"),
                value: e,
                children: l => {
                    let {
                        selected: t
                    } = l;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("span", {
                            className: "block truncate",
                            children: e.title
                        }), t ? (0, i.jsx)("span", {
                            children: " "
                        }) : null]
                    })
                }
            }, e.handle), f[30] = v, f[31] = w) : w = f[31], d = V.map(w), f[0] = g, f[1] = b, f[2] = j, f[3] = L, f[4] = v, f[5] = a, f[6] = c, f[7] = o, f[8] = d, f[9] = h, f[10] = x, f[11] = p, f[12] = u
        } else a = f[5], c = f[6], o = f[7], d = f[8], h = f[9], x = f[10], p = f[11], u = f[12];
        return f[32] !== a || f[33] !== o || f[34] !== d ? (C = (0, i.jsx)(a, {
            className: o,
            children: d
        }), f[32] = a, f[33] = o, f[34] = d, f[35] = C) : C = f[35], f[36] !== h || f[37] !== x || f[38] !== C ? (y = (0, i.jsxs)("div", {
            className: h,
            children: [x, C]
        }), f[36] = h, f[37] = x, f[38] = C, f[39] = y) : y = f[39], f[40] !== c || f[41] !== p || f[42] !== u || f[43] !== y ? (m = (0, i.jsx)(c, {
            value: p,
            onChange: u,
            children: y
        }), f[40] = c, f[41] = p, f[42] = u, f[43] = y, f[44] = m) : m = f[44], m
    }], 210053);
    var a = e.i(191788);
    e.i(305231);
    var c = e.i(913473);
    e.s(["default", 0, e => {
        let t, s, r, o, d, h, x, p = (0, l.c)(24),
            {
                setSelectedVariants: u,
                selectedVariants: C,
                handle: y,
                discontinuedHandles: m,
                variants: f,
                borderColor: j,
                theme: g
            } = e,
            [b, L] = (0, a.useState)(C[y]),
            v = m ? .includes(y);
        p[0] !== y || p[1] !== C ? (t = () => {
            L(C[y])
        }, p[0] = y, p[1] = C, p[2] = t) : t = p[2], p[3] !== y ? (s = [y], p[3] = y, p[4] = s) : s = p[4], (0, a.useEffect)(t, s), p[5] !== b || p[6] !== y || p[7] !== C || p[8] !== u ? (r = () => {
            b.handle !== C[y].handle && u(e => ({ ...e,
                [y]: b
            }))
        }, p[5] = b, p[6] = y, p[7] = C, p[8] = u, p[9] = r) : r = p[9], p[10] !== b || p[11] !== u ? (o = [b, u], p[10] = b, p[11] = u, p[12] = o) : o = p[12], (0, a.useEffect)(r, o);
        let w = `${y}-comparison-product-cell`,
            V = (0, n.default)("border-e px-20 last:border-e-0 lg:px-24 xl:px-40", j, "dark" === g && v && "bg-neutral-800", "light" === g && v && "bg-neutral-100"),
            k = `${y}-colors`,
            S = C[y];
        return p[13] !== S || p[14] !== g || p[15] !== f ? (d = (0, i.jsx)(c.default, {
            variants: f,
            theme: g,
            onChange: L,
            currentVariant: S,
            colorDot: !0,
            size: "small",
            variantNumber: !0
        }), p[13] = S, p[14] = g, p[15] = f, p[16] = d) : d = p[16], p[17] !== k || p[18] !== d ? (h = (0, i.jsx)("div", {
            className: "mb-16 flex w-full justify-center",
            "data-cs-override": k,
            children: d
        }), p[17] = k, p[18] = d, p[19] = h) : h = p[19], p[20] !== h || p[21] !== w || p[22] !== V ? (x = (0, i.jsx)("td", {
            className: V,
            children: h
        }, w), p[20] = h, p[21] = w, p[22] = V, p[23] = x) : x = p[23], x
    }], 767049)
}, 544063, e => {
    "use strict";
    e.i(525487), e.s([])
}, 522441, e => {
    "use strict";
    var i = e.i(391398),
        l = e.i(261576);
    e.i(664157);
    var t = e.i(271179),
        s = e.i(495854),
        r = e.i(210053),
        n = e.i(191788),
        a = e.i(126019),
        c = e.i(43039);
    e.i(923160);
    var o = e.i(217863);
    e.i(366539);
    var d = e.i(150077),
        h = e.i(41158);
    e.i(108399);
    var x = e.i(860231),
        p = e.i(767049),
        u = e.i(44073),
        C = e.i(766442),
        y = e.i(212376),
        m = e.i(30210),
        f = e.i(309189);
    e.i(544063);
    var j = e.i(525487);
    let g = e => {
        let t, s, r, a, c = (0, l.c)(13),
            {
                currentVariant: o,
                handle: d,
                notifyMeFormName: h
            } = e,
            {
                theme: x
            } = (0, n.useContext)(ev),
            p = `notify-me-${d}`;
        c[0] !== o || c[1] !== h || c[2] !== p ? (t = {
            formName: h,
            variant: o,
            dataCsOverrideId: p
        }, c[0] = o, c[1] = h, c[2] = p, c[3] = t) : t = c[3];
        let u = t;
        return c[4] !== u || c[5] !== x ? (s = (0, i.jsx)("div", {
            className: "hidden md:block",
            children: (0, i.jsx)(j.default, { ...u,
                buttonSize: "medium",
                theme: x
            })
        }), c[4] = u, c[5] = x, c[6] = s) : s = c[6], c[7] !== u || c[8] !== x ? (r = (0, i.jsx)("div", {
            className: "md:hidden",
            children: (0, i.jsx)(j.default, { ...u,
                buttonSize: "small",
                theme: x
            })
        }), c[7] = u, c[8] = x, c[9] = r) : r = c[9], c[10] !== s || c[11] !== r ? (a = (0, i.jsxs)(i.Fragment, {
            children: [s, r]
        }), c[10] = s, c[11] = r, c[12] = a) : a = c[12], a
    };
    e.i(643781);
    var b = e.i(989606),
        L = e.i(79564),
        v = e.i(414448);
    let w = e => {
            let s, r, n, a, c, o, d, h = (0, l.c)(34),
                {
                    currentVariant: x,
                    handle: p,
                    maxQuantityAllowed: u,
                    isAvailable: C
                } = e;
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                placement: "comparison"
            }, h[0] = s) : s = h[0];
            let {
                add: y
            } = (0, L.default)(s), {
                t: m
            } = (0, t.useTranslation)("common"), f = x.id;
            h[1] !== C || h[2] !== m ? (r = m(C ? "productCards.addToCard" : "productCards.outOfStock"), h[1] = C, h[2] = m, h[3] = r) : r = h[3], h[4] !== y || h[5] !== p || h[6] !== u || h[7] !== f ? (n = () => y([{
                product: {
                    handle: p,
                    maxQuantityAllowed: u
                },
                variantId: f
            }]), h[4] = y, h[5] = p, h[6] = u, h[7] = f, h[8] = n) : n = h[8];
            let j = !C,
                g = `atc-comparison-${p}`;
            h[9] !== r || h[10] !== n || h[11] !== j || h[12] !== g ? (a = {
                label: r,
                onClick: n,
                isDisabled: j,
                dataCsOverrideId: g,
                dataTestId: "add-to-cart-button"
            }, h[9] = r, h[10] = n, h[11] = j, h[12] = g, h[13] = a) : a = h[13];
            let w = a;
            if (!C) {
                let e, l, t;
                return h[14] !== w || h[15] !== x.id || h[16] !== x.sku || h[17] !== x.title ? (e = (0, i.jsx)("div", {
                    className: "hidden md:block",
                    children: (0, i.jsx)(v.default, { ...w,
                        size: "medium",
                        productName: x.title,
                        variantId: x.id,
                        variantName: x.title,
                        sku: x.sku
                    })
                }), h[14] = w, h[15] = x.id, h[16] = x.sku, h[17] = x.title, h[18] = e) : e = h[18], h[19] !== w || h[20] !== x.id || h[21] !== x.sku || h[22] !== x.title ? (l = (0, i.jsx)("div", {
                    className: "md:hidden",
                    children: (0, i.jsx)(v.default, { ...w,
                        size: "small",
                        productName: x.title,
                        variantId: x.id,
                        variantName: x.title,
                        sku: x.sku
                    })
                }), h[19] = w, h[20] = x.id, h[21] = x.sku, h[22] = x.title, h[23] = l) : l = h[23], h[24] !== e || h[25] !== l ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, l]
                }), h[24] = e, h[25] = l, h[26] = t) : t = h[26], t
            }
            return h[27] !== w ? (c = (0, i.jsx)("div", {
                className: "hidden md:block",
                children: (0, i.jsx)(b.default, { ...w,
                    size: "medium"
                })
            }), h[27] = w, h[28] = c) : c = h[28], h[29] !== w ? (o = (0, i.jsx)("div", {
                className: "md:hidden",
                children: (0, i.jsx)(b.default, { ...w,
                    size: "small"
                })
            }), h[29] = w, h[30] = o) : o = h[30], h[31] !== c || h[32] !== o ? (d = (0, i.jsxs)(i.Fragment, {
                children: [c, o]
            }), h[31] = c, h[32] = o, h[33] = d) : d = h[33], d
        },
        V = e => {
            let t, s = (0, l.c)(15),
                {
                    buyMode: r,
                    theme: n,
                    currentVariant: a,
                    isAvailable: c,
                    handle: o,
                    notifyMeFormName: d,
                    priceConversion: h,
                    priceLabel: x
                } = e;
            if ("device-unlock-lns" === r) {
                let e;
                return s[0] !== a || s[1] !== h || s[2] !== x || s[3] !== n ? (e = (0, i.jsx)(m.default, {
                    theme: n,
                    productVariant: a,
                    buttonSize: "small",
                    priceConversion: h,
                    priceLabel: x
                }), s[0] = a, s[1] = h, s[2] = x, s[3] = n, s[4] = e) : e = s[4], e
            }
            if ("cro-campaign" === r && a) {
                let e;
                return s[5] !== a ? (e = (0, i.jsx)(f.default, {
                    variant: a,
                    size: "small"
                }), s[5] = a, s[6] = e) : e = s[6], e
            }
            if (!c && d) {
                let e;
                return s[7] !== a || s[8] !== o || s[9] !== d ? (e = (0, i.jsx)(g, {
                    currentVariant: a,
                    handle: o,
                    notifyMeFormName: d
                }), s[7] = a, s[8] = o, s[9] = d, s[10] = e) : e = s[10], e
            }
            return s[11] !== a || s[12] !== o || s[13] !== c ? (t = (0, i.jsx)(w, {
                currentVariant: a,
                handle: o,
                isAvailable: c,
                maxQuantityAllowed: a.maxQuantityAllowed
            }), s[11] = a, s[12] = o, s[13] = c, s[14] = t) : t = s[14], t
        };
    var k = e.i(253770),
        S = e.i(345082),
        H = e.i(999750),
        M = e.i(627528);
    let _ = e => {
        let r, m, f, j, g, b, L, v, w, _, N = (0, l.c)(113),
            {
                productsToCompare: R,
                selectedVariants: B,
                setSelectedVariants: D,
                theme: $,
                discontinuedHandles: F,
                buyMode: U
            } = e,
            A = void 0 === U ? "standard" : U,
            {
                cryptoVouchers: O
            } = (0, n.useContext)(k.cryptoVouchersContext),
            {
                t: T
            } = (0, t.useTranslation)("common"),
            {
                isUSAvailable: P
            } = (0, C.default)(),
            {
                isDeviceAvailable: E
            } = (0, y.default)(),
            {
                entryChannel: z
            } = (0, n.useContext)(H.EntryChannelContext),
            W = "dark" === $ ? "border-neutral-600" : "border-neutral-200";
        N[0] !== F || N[1] !== $ ? (r = e => F ? .includes(e) ? "dark" === $ ? "bg-neutral-800" : "bg-neutral-100" : null, N[0] = F, N[1] = $, N[2] = r) : r = N[2];
        let G = r;
        if (N[3] !== W || N[4] !== A || N[5] !== O ? .activeCryptoVouchers || N[6] !== F || N[7] !== z || N[8] !== G || N[9] !== R || N[10] !== B || N[11] !== D || N[12] !== $) {
            let e, l, t, r, n, c;
            N[19] !== O ? .activeCryptoVouchers || N[20] !== z || N[21] !== B ? (e = e => {
                let {
                    handle: i
                } = e, l = (0, S.default)(z, O ? .activeCryptoVouchers, B[i].id);
                return {
                    handle: i,
                    cardLabel: l ? .cardLabel,
                    cryptoCurrency: l ? .cryptoCurrency
                }
            }, N[19] = O ? .activeCryptoVouchers, N[20] = z, N[21] = B, N[22] = e) : e = N[22];
            let h = R.map(e),
                x = h.some(Z);
            if (N[23] !== W || N[24] !== G || N[25] !== R || N[26] !== B || N[27] !== $) {
                let e;
                N[29] !== W || N[30] !== G || N[31] !== B || N[32] !== $ ? (e = e => {
                    let {
                        handle: l,
                        tagLabel: t,
                        title: r
                    } = e, n = B[l];
                    return (0, i.jsxs)("th", {
                        className: (0, s.default)("border-e pt-24 last:border-e-0", t && "relative", W, G(l)),
                        children: [(0, i.jsx)("div", {
                            className: "relative h-112 md:h-256",
                            children: (0, i.jsx)(a.default, {
                                src: n.image.url,
                                alt: n.image.description || n.title,
                                fill: !0,
                                priority: !0,
                                sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
                                className: "object-contain"
                            })
                        }), t && (0, i.jsx)("div", {
                            className: "absolute top-8 flex w-full justify-center",
                            children: (0, i.jsx)(u.default, {
                                label: t,
                                size: "small",
                                theme: $
                            })
                        }), (0, i.jsx)("h3", {
                            className: "heading-5-semi-bold mb-32 md:mb-16",
                            children: r
                        })]
                    }, `${l}-comparison-product-header`)
                }, N[29] = W, N[30] = G, N[31] = B, N[32] = $, N[33] = e) : e = N[33], l = R.map(e), N[23] = W, N[24] = G, N[25] = R, N[26] = B, N[27] = $, N[28] = l
            } else l = N[28];
            if (N[34] !== l ? (m = (0, i.jsx)("tr", {
                    children: l
                }), N[34] = l, N[35] = m) : m = N[35], N[36] !== W || N[37] !== G || N[38] !== R || N[39] !== $) {
                let e;
                N[41] !== W || N[42] !== G || N[43] !== $ ? (e = e => {
                    let {
                        description: l,
                        handle: t
                    } = e;
                    return (0, i.jsx)("td", {
                        className: (0, s.default)("hidden md:table-cell", "border-e align-top last:border-e-0", W, G(t)),
                        children: (0, i.jsx)("div", {
                            className: "mb-12 px-20 text-center lg:px-24 xl:px-40",
                            children: l && (0, i.jsx)("p", {
                                className: (0, s.default)("body-1 hidden font-normal md:block", "dark" === $ && "text-neutral-300", "light" === $ && "text-neutral-600"),
                                children: l
                            })
                        })
                    }, `${t}-comparison-product-cell`)
                }, N[41] = W, N[42] = G, N[43] = $, N[44] = e) : e = N[44], t = R.map(e), N[36] = W, N[37] = G, N[38] = R, N[39] = $, N[40] = t
            } else t = N[40];
            if (N[45] !== t ? (f = (0, i.jsx)("tr", {
                    children: t
                }), N[45] = t, N[46] = f) : f = N[46], N[47] !== W || N[48] !== G || N[49] !== R || N[50] !== $) {
                let e;
                N[52] !== W || N[53] !== G || N[54] !== $ ? (e = e => {
                    let {
                        handle: l,
                        rating: t,
                        totalReviews: r
                    } = e;
                    return (0, i.jsx)("td", {
                        className: (0, s.default)("hidden md:table-cell", "border-e last:border-e-0", W, G(l)),
                        children: r > 0 && (0, i.jsx)("div", {
                            "data-testid": "review-stars",
                            className: "mb-12 flex justify-center",
                            children: (0, i.jsx)(o.default, {
                                rating: t,
                                size: "small",
                                color: "dark" === $ ? "white" : "black"
                            })
                        })
                    }, `${l}-comparison-product-cell`)
                }, N[52] = W, N[53] = G, N[54] = $, N[55] = e) : e = N[55], r = R.map(e), N[47] = W, N[48] = G, N[49] = R, N[50] = $, N[51] = r
            } else r = N[51];
            if (N[56] !== r ? (j = (0, i.jsx)("tr", {
                    children: r
                }), N[56] = r, N[57] = j) : j = N[57], N[58] !== W || N[59] !== G || N[60] !== R || N[61] !== B) {
                let e;
                N[63] !== W || N[64] !== G || N[65] !== B ? (e = e => {
                    let {
                        handle: l,
                        discontinuedProduct: t,
                        priceConversion: r,
                        priceLabel: n
                    } = e, a = B[l];
                    return (0, i.jsx)("td", {
                        className: (0, s.default)("border-e pb-24 last:border-e-0", W, G(l)),
                        children: (0, i.jsx)("div", {
                            className: "flex min-h-40 justify-center",
                            children: !t && (0, i.jsx)(d.default, {
                                variant: a,
                                manualDiscountConversion: r ? ? void 0,
                                discountLabel: n,
                                showDiscount: !0,
                                center: !0
                            })
                        })
                    }, `${l}-comparison-product-cell`)
                }, N[63] = W, N[64] = G, N[65] = B, N[66] = e) : e = N[66], n = R.map(e), N[58] = W, N[59] = G, N[60] = R, N[61] = B, N[62] = n
            } else n = N[62];
            if (N[67] !== n ? (g = (0, i.jsx)("tr", {
                    children: n
                }), N[67] = n, N[68] = g) : g = N[68], N[69] !== W || N[70] !== F || N[71] !== R || N[72] !== B || N[73] !== D || N[74] !== $) {
                let e;
                N[76] !== W || N[77] !== F || N[78] !== B || N[79] !== D || N[80] !== $ ? (e = e => {
                    let {
                        handle: l,
                        variants: t
                    } = e;
                    return (0, i.jsx)(p.default, {
                        borderColor: W,
                        handle: l,
                        discontinuedHandles: F,
                        selectedVariants: B,
                        setSelectedVariants: D,
                        variants: t,
                        theme: $
                    }, `${l}-comparison-product-cell`)
                }, N[76] = W, N[77] = F, N[78] = B, N[79] = D, N[80] = $, N[81] = e) : e = N[81], c = R.map(e), N[69] = W, N[70] = F, N[71] = R, N[72] = B, N[73] = D, N[74] = $, N[75] = c
            } else c = N[75];
            N[82] !== c ? (b = (0, i.jsx)("tr", {
                children: c
            }), N[82] = c, N[83] = b) : b = N[83], L = x && (0, i.jsx)("tr", {
                children: h.map(e => {
                    let {
                        handle: l,
                        cardLabel: t,
                        cryptoCurrency: r
                    } = e;
                    return (0, i.jsx)("td", {
                        className: (0, s.default)("border-e pb-16 last:border-e-0", W, G(l)),
                        children: t && r && "device-unlock-lns" !== A && (0, i.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, i.jsx)(M.default, {
                                label: t,
                                theme: $,
                                size: "small",
                                cryptoCurrency: r
                            })
                        })
                    }, `${l}-comparison-product-cell`)
                })
            }), N[3] = W, N[4] = A, N[5] = O ? .activeCryptoVouchers, N[6] = F, N[7] = z, N[8] = G, N[9] = R, N[10] = B, N[11] = D, N[12] = $, N[13] = m, N[14] = f, N[15] = j, N[16] = g, N[17] = b, N[18] = L
        } else m = N[13], f = N[14], j = N[15], g = N[16], b = N[17], L = N[18];
        if (N[84] !== W || N[85] !== A || N[86] !== G || N[87] !== E || N[88] !== P || N[89] !== R || N[90] !== B || N[91] !== T || N[92] !== $) {
            let e;
            N[94] !== W || N[95] !== A || N[96] !== G || N[97] !== E || N[98] !== P || N[99] !== B || N[100] !== T || N[101] !== $ ? (e = e => {
                let {
                    handle: l,
                    notifyMeFormName: t,
                    discontinuedProduct: r,
                    priceConversion: n,
                    priceLabel: a
                } = e, o = B[l], d = (0, c.default)(l, o), p = o.availableForSale && P(o.id) && E(o.sku);
                return (0, i.jsx)("td", {
                    className: (0, s.default)("border-e border-b last:border-e-0", W, G(l)),
                    children: !r && (0, i.jsxs)("div", {
                        className: "flex grow flex-col justify-end gap-16 pb-16 md:pb-24",
                        children: [(0, i.jsx)("div", {
                            "data-testid": "comparison-product-cell__buttons",
                            className: "flex w-full justify-center",
                            children: (0, i.jsx)(V, {
                                buyMode: A,
                                theme: $,
                                currentVariant: o,
                                isAvailable: p,
                                handle: l,
                                notifyMeFormName: t,
                                priceConversion: n,
                                priceLabel: a
                            })
                        }), (0, i.jsxs)(h.default, {
                            className: "body-3 md:body-1 flex flex-wrap items-center justify-center gap-8 wrap-break-word md:font-normal",
                            href: d,
                            "data-cs-override": `link-comparison-${l}`,
                            children: [(0, i.jsx)("span", {
                                children: T("productCards.learnMore")
                            }), (0, i.jsx)("span", {
                                children: (0, i.jsx)(x.default, {
                                    size: 18,
                                    name: "arrowRight",
                                    color: "dark" === $ ? "white" : "black"
                                })
                            })]
                        })]
                    })
                }, `${l}-comparison-product-cell`)
            }, N[94] = W, N[95] = A, N[96] = G, N[97] = E, N[98] = P, N[99] = B, N[100] = T, N[101] = $, N[102] = e) : e = N[102], v = R.map(e), N[84] = W, N[85] = A, N[86] = G, N[87] = E, N[88] = P, N[89] = R, N[90] = B, N[91] = T, N[92] = $, N[93] = v
        } else v = N[93];
        return N[103] !== v ? (w = (0, i.jsx)("tr", {
            children: v
        }), N[103] = v, N[104] = w) : w = N[104], N[105] !== w || N[106] !== m || N[107] !== f || N[108] !== j || N[109] !== g || N[110] !== b || N[111] !== L ? (_ = (0, i.jsxs)(i.Fragment, {
            children: [m, f, j, g, b, L, w]
        }), N[105] = w, N[106] = m, N[107] = f, N[108] = j, N[109] = g, N[110] = b, N[111] = L, N[112] = _) : _ = N[112], _
    };

    function Z(e) {
        return e.cardLabel && e.cryptoCurrency
    }
    let N = {
            "ledger-stax": {
                backupSolutions: ["security.backupSolutions.ledgerRecoveryKeyIncluded", "security.backupSolutions.recoverySheetsIncluded", "security.backupSolutions.recoverOptional"],
                battery: ["physicalCharacteristics.battery.stax"],
                body: ["physicalCharacteristics.body.aluminiumFrame", "physicalCharacteristics.body.plasticBack"],
                clearSigning: ["confidence.clearSigning.stax"],
                connectivity: ["connectivity.usbC", "connectivity.bluetooth", "connectivity.nfc", "connectivity.wirelessQiCharging"],
                includedExtras: ["includedExtras.staxMagnetShell", "includedExtras.plusLedgerRecoveryKey"],
                ledgerWallet: ["digitalAssets.ledgerWallet.coins", "digitalAssets.ledgerWallet.ethereumPolygonNFTs"],
                network: ["digitalAssets.network.compatibleWallets"],
                osCompatibilityDesktop: ["osCompatibility.desktopCompatibility.desktop", "osCompatibility.desktopCompatibility.windowsVersion", "osCompatibility.desktopCompatibility.macOSVersion", "osCompatibility.desktopCompatibility.linuxVersion"],
                osCompatibilityMobile: ["osCompatibility.mobileCompatibility.mobile", "osCompatibility.mobileCompatibility.androidVersion", "osCompatibility.mobileCompatibility.iOSVersion"],
                screenDetails: ["screen.details.16Grayscale", "screen.details.eInkCurvedTouchscreen", "screen.details.lightweightDurablePlastic", "screen.details.antiGlareCoating", "screen.sizePixel.stax"],
                screenSizePhysical: ["screen.sizePhysical.stax"],
                screenSpecSummary: ["physicalCharacteristics.screen.ultraThinPlasticTouchscreen"],
                screenSummary: ["screen.summary.stax"],
                secureElement: ["security.secureElement.ccEAL6"],
                securityKey: ["confidence.securityKey.stax"],
                size: ["physicalCharacteristics.size.creditCardSized", "physicalCharacteristics.size.stax"],
                soundFeedback: ["physicalCharacteristics.soundFeedback.soundFeedback"],
                thirdPartyWallet: ["digitalAssets.thirdPartyWallet.coins", "digitalAssets.thirdPartyWallet.multiBlockchainNFTs"],
                transactionCheck: ["confidence.transactionCheck.stax"],
                weight: ["physicalCharacteristics.weight.stax"],
                batteryCapacity: ["LNSComparison.upTo10Hours", "LNSComparison.weeksOnStandby"],
                deviceMemory: ["LNSComparison.1point5Memory"],
                isClearSigning: ["yes"],
                isLedgerLive: ["yes"],
                isLedgerRecover: ["yes"],
                isLedgerSync: ["yes"],
                isNftManagement: ["yes"],
                isSupportingBlockchains: ["yes"],
                secureElementLNSComparison: ["LNSComparison.certifiedSecureElementEAL6"]
            },
            "ledger-flex": {
                backupSolutions: ["security.backupSolutions.ledgerRecoveryKeyIncluded", "security.backupSolutions.recoverySheetsIncluded", "security.backupSolutions.recoverOptional"],
                battery: ["physicalCharacteristics.battery.flex"],
                body: ["physicalCharacteristics.body.aluminiumFrame", "physicalCharacteristics.body.plasticBack"],
                clearSigning: ["confidence.clearSigning.flex"],
                connectivity: ["connectivity.usbC", "connectivity.bluetooth", "connectivity.nfc"],
                includedExtras: ["includedExtras.ledgerRecoveryKeyIncluded"],
                ledgerWallet: ["digitalAssets.ledgerWallet.coins", "digitalAssets.ledgerWallet.ethereumPolygonNFTs"],
                network: ["digitalAssets.network.compatibleWallets"],
                osCompatibilityDesktop: ["osCompatibility.desktopCompatibility.desktop", "osCompatibility.desktopCompatibility.windowsVersion", "osCompatibility.desktopCompatibility.macOSVersion", "osCompatibility.desktopCompatibility.linuxVersion"],
                osCompatibilityMobile: ["osCompatibility.mobileCompatibility.mobile", "osCompatibility.mobileCompatibility.androidVersion", "osCompatibility.mobileCompatibility.iOSVersion"],
                screenDetails: ["screen.details.16Grayscale", "screen.details.eInkTouchscreen", "screen.details.gorillaGlass", "screen.details.antiGlareCoating", "screen.sizePixel.flex"],
                screenSizePhysical: ["screen.sizePhysical.flex"],
                screenSpecSummary: ["physicalCharacteristics.screen.gorillaGlassTouchscreen"],
                screenSummary: ["screen.summary.flex"],
                secureElement: ["security.secureElement.ccEAL6"],
                securityKey: ["confidence.securityKey.flex"],
                size: ["physicalCharacteristics.size.flex"],
                soundFeedback: ["physicalCharacteristics.soundFeedback.soundFeedback"],
                thirdPartyWallet: ["digitalAssets.thirdPartyWallet.coins", "digitalAssets.thirdPartyWallet.multiBlockchainNFTs"],
                transactionCheck: ["confidence.transactionCheck.flex"],
                weight: ["physicalCharacteristics.weight.flex"],
                batteryCapacity: ["LNSComparison.upTo10Hours", "LNSComparison.weeksOnStandby"],
                deviceMemory: ["LNSComparison.1point5Memory"],
                isClearSigning: ["yes"],
                isLedgerLive: ["yes"],
                isLedgerRecover: ["yes"],
                isLedgerSync: ["yes"],
                isNftManagement: ["yes"],
                isSupportingBlockchains: ["yes"],
                secureElementLNSComparison: ["LNSComparison.certifiedSecureElementEAL6"]
            },
            "ledger-nano-gen5": {
                backupSolutions: ["security.backupSolutions.ledgerRecoveryKeyIncluded", "security.backupSolutions.recoverySheetsIncluded", "security.backupSolutions.recoverOptional"],
                battery: ["physicalCharacteristics.battery.gen5"],
                body: ["physicalCharacteristics.body.plasticFrame", "physicalCharacteristics.body.plasticBack"],
                clearSigning: ["confidence.clearSigning.gen5"],
                connectivity: ["connectivity.usbC", "connectivity.bluetooth", "connectivity.nfc"],
                includedExtras: ["includedExtras.ledgerRecoveryKeyIncluded"],
                ledgerWallet: ["digitalAssets.ledgerWallet.coins", "digitalAssets.ledgerWallet.ethereumPolygonNFTs"],
                network: ["digitalAssets.network.compatibleWallets"],
                osCompatibilityDesktop: ["osCompatibility.desktopCompatibility.desktop", "osCompatibility.desktopCompatibility.windowsVersion", "osCompatibility.desktopCompatibility.macOSVersion", "osCompatibility.desktopCompatibility.linuxVersion"],
                osCompatibilityMobile: ["osCompatibility.mobileCompatibility.mobile", "osCompatibility.mobileCompatibility.androidVersion", "osCompatibility.mobileCompatibility.iOSVersion"],
                screenDetails: ["screen.details.monochromeDisplay", "screen.details.eInkTouchscreen", "screen.details.scratchResistantGlass", "screen.details.antiGlareCoating", "screen.sizePixel.gen5"],
                screenSizePhysical: ["screen.sizePhysical.gen5"],
                screenSpecSummary: ["physicalCharacteristics.screen.antiScratchTouchscreen"],
                screenSummary: ["screen.summary.gen5"],
                secureElement: ["security.secureElement.ccEAL6"],
                securityKey: ["confidence.securityKey.gen5"],
                size: ["physicalCharacteristics.size.gen5"],
                soundFeedback: null,
                thirdPartyWallet: ["digitalAssets.thirdPartyWallet.coins", "digitalAssets.thirdPartyWallet.multiBlockchainNFTs"],
                transactionCheck: ["confidence.transactionCheck.gen5"],
                weight: ["physicalCharacteristics.weight.gen5"],
                batteryCapacity: ["LNSComparison.upTo10Hours", "LNSComparison.weeksOnStandby"],
                deviceMemory: ["LNSComparison.1point5Memory"],
                isClearSigning: ["yes"],
                isLedgerLive: ["yes"],
                isLedgerRecover: ["yes"],
                isLedgerSync: ["yes"],
                isNftManagement: ["yes"],
                isSupportingBlockchains: ["yes"],
                secureElementLNSComparison: ["LNSComparison.certifiedSecureElementEAL6"]
            },
            "ledger-nano-x": {
                backupSolutions: ["security.backupSolutions.blank", "security.backupSolutions.recoverySheetsIncluded", "security.backupSolutions.recoverOptional"],
                battery: ["physicalCharacteristics.battery.lnx"],
                body: ["physicalCharacteristics.body.plasticBody", "physicalCharacteristics.body.stainlessSteelSwivel"],
                clearSigning: ["confidence.clearSigning.lnx"],
                connectivity: ["connectivity.usbAtoUsbC", "connectivity.bluetooth"],
                includedExtras: null,
                ledgerWallet: ["digitalAssets.ledgerWallet.coins", "digitalAssets.ledgerWallet.ethereumPolygonNFTs"],
                network: ["digitalAssets.network.compatibleWallets"],
                osCompatibilityDesktop: ["osCompatibility.desktopCompatibility.desktop", "osCompatibility.desktopCompatibility.windowsVersion", "osCompatibility.desktopCompatibility.macOSVersion", "osCompatibility.desktopCompatibility.linuxVersion"],
                osCompatibilityMobile: ["osCompatibility.mobileCompatibility.mobile", "osCompatibility.mobileCompatibility.androidVersion", "osCompatibility.mobileCompatibility.iOSVersion"],
                screenDetails: ["screen.details.monochromeDisplay", "screen.details.oledDisplay", "screen.sizePixel.lnx"],
                screenSizePhysical: ["screen.sizePhysical.lnx"],
                screenSpecSummary: ["physicalCharacteristics.screen.plasticScreen"],
                screenSummary: ["screen.summary.lnx"],
                secureElement: ["security.secureElement.ccEAL5"],
                securityKey: ["confidence.securityKey.lnx"],
                size: ["physicalCharacteristics.size.lnx"],
                soundFeedback: null,
                thirdPartyWallet: ["digitalAssets.thirdPartyWallet.coins", "digitalAssets.thirdPartyWallet.multiBlockchainNFTs"],
                transactionCheck: null,
                weight: ["physicalCharacteristics.weight.lnx"],
                batteryCapacity: ["LNSComparison.upTo10Hours", "LNSComparison.weeksOnStandby"],
                deviceMemory: ["LNSComparison.2point0Memory"],
                isClearSigning: ["yes"],
                isLedgerLive: ["yes"],
                isLedgerRecover: ["yes"],
                isLedgerSync: ["yes"],
                isNftManagement: ["yes"],
                isSupportingBlockchains: ["yes"],
                secureElementLNSComparison: ["LNSComparison.certifiedSecureElementEAL5"]
            },
            "ledger-nano-s-plus": {
                backupSolutions: ["security.backupSolutions.blank", "security.backupSolutions.recoverySheetsIncluded", "security.backupSolutions.recoverOptional"],
                battery: ["physicalCharacteristics.battery.lnsp"],
                body: ["physicalCharacteristics.body.plasticBody", "physicalCharacteristics.body.stainlessSteelSwivel"],
                clearSigning: ["confidence.clearSigning.lnsp"],
                connectivity: ["connectivity.usbAtoUsbC"],
                includedExtras: null,
                ledgerWallet: ["digitalAssets.ledgerWallet.coins", "digitalAssets.ledgerWallet.ethereumPolygonNFTs"],
                network: ["digitalAssets.network.compatibleWallets"],
                osCompatibilityDesktop: ["osCompatibility.desktopCompatibility.desktop", "osCompatibility.desktopCompatibility.windowsVersion", "osCompatibility.desktopCompatibility.macOSVersion", "osCompatibility.desktopCompatibility.linuxVersion"],
                osCompatibilityMobile: ["osCompatibility.mobileCompatibility.mobile", "osCompatibility.mobileCompatibility.androidVersion"],
                screenDetails: ["screen.details.monochromeDisplay", "screen.details.oledDisplay", "screen.sizePixel.lnsp"],
                screenSizePhysical: ["screen.sizePhysical.lnsp"],
                screenSpecSummary: ["physicalCharacteristics.screen.plasticScreen"],
                screenSummary: ["screen.summary.lnsp"],
                secureElement: ["security.secureElement.ccEAL6"],
                securityKey: ["confidence.securityKey.lnsp"],
                size: ["physicalCharacteristics.size.lnsp"],
                soundFeedback: null,
                thirdPartyWallet: ["digitalAssets.thirdPartyWallet.coins", "digitalAssets.thirdPartyWallet.multiBlockchainNFTs"],
                transactionCheck: null,
                weight: ["physicalCharacteristics.weight.lnsp"],
                batteryCapacity: ["LNSComparison.noBattery"],
                deviceMemory: ["LNSComparison.1point5Memory"],
                isClearSigning: ["yes"],
                isLedgerLive: ["yes"],
                isLedgerRecover: ["yes"],
                isLedgerSync: ["yes"],
                isNftManagement: ["yes"],
                isSupportingBlockchains: ["yes"],
                secureElementLNSComparison: ["LNSComparison.certifiedSecureElementEAL6"]
            },
            "ledger-nano-s": {
                backupSolutions: ["security.backupSolutions.blank", "security.backupSolutions.recoverySheetsIncluded", "security.backupSolutions.blank"],
                battery: ["physicalCharacteristics.battery.lns"],
                body: ["physicalCharacteristics.body.plasticBody", "physicalCharacteristics.body.stainlessSteelSwivel"],
                clearSigning: null,
                connectivity: ["connectivity.microUsb"],
                includedExtras: null,
                ledgerWallet: ["digitalAssets.ledgerWallet.coins", "digitalAssets.ledgerWallet.ethereumPolygonNFTs"],
                network: ["digitalAssets.network.compatibleWallets"],
                osCompatibilityDesktop: null,
                osCompatibilityMobile: null,
                screenDetails: ["screen.details.monochromeDisplay", "screen.details.blueDisplay", "screen.sizePixel.lns"],
                screenSizePhysical: ["screen.sizePhysical.lns"],
                screenSpecSummary: ["physicalCharacteristics.screen.plasticScreen"],
                screenSummary: ["screen.summary.lns"],
                secureElement: ["security.secureElement.ccEAL5"],
                securityKey: null,
                size: ["physicalCharacteristics.size.lns"],
                soundFeedback: null,
                thirdPartyWallet: ["digitalAssets.thirdPartyWallet.coins", "digitalAssets.thirdPartyWallet.multiBlockchainNFTs"],
                transactionCheck: null,
                weight: ["physicalCharacteristics.weight.lns"],
                batteryCapacity: ["LNSComparison.noBattery"],
                deviceMemory: ["LNSComparison.320Memory"],
                isClearSigning: ["no"],
                isLedgerLive: ["no"],
                isLedgerRecover: ["no"],
                isLedgerSync: ["no"],
                isNftManagement: ["no"],
                isSupportingBlockchains: ["no"],
                secureElementLNSComparison: ["LNSComparison.certifiedSecureElementEAL5"]
            }
        },
        R = (e, i) => {
            switch (i) {
                case "ledger-stax-belkin-boost-charge-bundle":
                    return N["ledger-stax"][e];
                case "ledger-stax":
                case "ledger-flex":
                case "ledger-nano-gen5":
                case "ledger-nano-x":
                case "ledger-nano-s-plus":
                case "ledger-nano-s":
                    return N[i][e];
                default:
                    return null
            }
        },
        B = e => {
            let t, r, a, c, o = (0, l.c)(14),
                {
                    alignTop: d,
                    children: h,
                    isProductDiscontinued: x
                } = e,
                p = void 0 !== x && x,
                u = void 0 !== d && d && h ? "align-top" : "align-middle",
                {
                    theme: C
                } = (0, n.useContext)(ev),
                y = "dark" === C && "border-neutral-600 text-neutral-200",
                m = "light" === C && "border-neutral-200 text-neutral-800",
                f = p && "light" === C && "bg-neutral-100",
                j = p && "dark" === C && "bg-neutral-800";
            return o[0] !== y || o[1] !== m || o[2] !== f || o[3] !== j || o[4] !== u ? (t = (0, s.default)("body-3 border-e px-8 py-24 text-center last:border-e-0", y, m, f, j, u), o[0] = y, o[1] = m, o[2] = f, o[3] = j, o[4] = u, o[5] = t) : t = o[5], o[6] !== h || o[7] !== C ? (r = h || (0, i.jsx)(D, {
                theme: C
            }), o[6] = h, o[7] = C, o[8] = r) : r = o[8], o[9] !== r ? (a = (0, i.jsx)("div", {
                className: "flex flex-col items-center justify-start",
                children: r
            }), o[9] = r, o[10] = a) : a = o[10], o[11] !== t || o[12] !== a ? (c = (0, i.jsx)("td", {
                className: t,
                children: a
            }), o[11] = t, o[12] = a, o[13] = c) : c = o[13], c
        },
        D = e => {
            let t, r, n = (0, l.c)(5),
                {
                    theme: a
                } = e,
                c = "light" === a && "bg-neutral-500",
                o = "dark" === a && "bg-neutral-400";
            return n[0] !== c || n[1] !== o ? (t = (0, s.default)("h-4 w-16", c, o), n[0] = c, n[1] = o, n[2] = t) : t = n[2], n[3] !== t ? (r = (0, i.jsx)("div", {
                className: t
            }), n[3] = t, n[4] = r) : r = n[4], r
        },
        $ = () => {
            let e, t = (0, l.c)(4),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_7788_6088" + s,
                c = "paint0_linear_7788_6058" + s;
            return t[0] !== a || t[1] !== c || t[2] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M57.043 17.5H57.4169C57.7627 17.5 58.043 17.7803 58.043 18.1261V24.8739C58.043 25.2197 57.7627 25.5 57.4169 25.5H57.043",
                    stroke: "white",
                    strokeWidth: "1.5"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 13C14 9.13401 17.134 6 21 6H51C54.866 6 58 9.13401 58 13V63C58 64.6569 56.6569 66 55 66H17C15.3431 66 14 64.6569 14 63V13ZM21 10C19.3431 10 18 11.3431 18 13V62H54V13C54 11.3431 52.6569 10 51 10H21Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M43.7852 25.5V29.5101H42.7852V27.2071L38.3738 31.6187L37.6666 30.9116L42.0781 26.5L39.7752 26.5V25.5L43.7852 25.5Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M28.5 40.7852L28.5 36.775H29.5L29.5 39.078L33.9114 34.6664L34.6185 35.3735L30.2071 39.7852H32.51V40.7852H28.5Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M18 55C18 56.1046 18.8954 57 20 57H52C53.1046 57 54 56.1046 54 55V64H18V55Z",
                    fill: "#BDBDBD"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "36",
                        y1: "8",
                        x2: "36",
                        y2: "57",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "white"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#BDBDBD"
                        })]
                    })
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M57.043 17.5H57.4169C57.7627 17.5 58.043 17.7803 58.043 18.1261V24.8739C58.043 25.2197 57.7627 25.5 57.4169 25.5H57.043",
                    stroke: "black",
                    strokeWidth: "1.5"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 13C14 9.13401 17.134 6 21 6H51C54.866 6 58 9.13401 58 13V63C58 64.6569 56.6569 66 55 66H17C15.3431 66 14 64.6569 14 63V13ZM21 10C19.3431 10 18 11.3431 18 13V62H54V13C54 11.3431 52.6569 10 51 10H21Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M43.7852 25.5V29.5101H42.7852V27.2071L38.3738 31.6187L37.6666 30.9116L42.0781 26.5L39.7752 26.5V25.5L43.7852 25.5Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M28.5 40.7852L28.5 36.775H29.5L29.5 39.078L33.9114 34.6664L34.6185 35.3735L30.2071 39.7852H32.51V40.7852H28.5Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M18 55C18 56.1046 18.8954 57 20 57H52C53.1046 57 54 56.1046 54 55V64H18V55Z",
                    fill: "black"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "36",
                        y1: "57",
                        x2: "36",
                        y2: "6",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })
                })]
            }), t[0] = a, t[1] = c, t[2] = r, t[3] = e) : e = t[3], e
        },
        F = () => {
            let e, t = (0, l.c)(4),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_15461_135429" + s,
                c = "paint0_linear_15461_135417" + s;
            return t[0] !== a || t[1] !== c || t[2] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M57.043 18.5H57.4169C57.7627 18.5 58.043 18.7803 58.043 19.1261V25.8739C58.043 26.2197 57.7627 26.5 57.4169 26.5H57.043",
                    stroke: "white",
                    strokeWidth: "1.5"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 11C14 7.13401 16.134 5 20 5H52C55.866 5 58 7.13401 58 11V61C58 65 56 67 52 67H20C16 67 14 65 14 61L14 11ZM21 10C20 10 19 11 19 12V63H53V12C53 11 52 10 51 10H21Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M43.7852 24.5V28.5101H42.7852V26.2071L38.3738 30.6187L37.6666 29.9116L42.0781 25.5L39.7752 25.5V24.5L43.7852 24.5Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M28.5 39.7852L28.5 35.775H29.5L29.5 38.078L33.9114 33.6664L34.6185 34.3735L30.2071 38.7852H32.51V39.7852H28.5Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M19 51C19 52.1046 19.8954 53 21 53H51C52.1046 53 53 52.1046 53 51V64H19V51Z",
                    fill: "#BDBDBD"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "36",
                        y1: "7.06667",
                        x2: "36",
                        y2: "57.7",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "white"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#BDBDBD"
                        })]
                    })
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M57.043 18.5H57.4169C57.7627 18.5 58.043 18.7803 58.043 19.1261V25.8739C58.043 26.2197 57.7627 26.5 57.4169 26.5H57.043",
                    stroke: "black",
                    strokeWidth: "1.5"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 11C14 7.13401 16.134 5 20 5H52C55.866 5 58 7.13401 58 11V61C58 65 56 67 52 67H20C16 67 14 65 14 61L14 11ZM21 10C20 10 19 11 19 12V63H53V12C53 11 52 10 51 10H21Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M43.7852 24.5V28.5101H42.7852V26.2071L38.3738 30.6187L37.6666 29.9116L42.0781 25.5L39.7752 25.5V24.5L43.7852 24.5Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M28.5 39.7852L28.5 35.775H29.5L29.5 38.078L33.9114 33.6664L34.6185 34.3735L30.2071 38.7852H32.51V39.7852H28.5Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M19 51C19 52.1046 19.8954 53 21 53H51C52.1046 53 53 52.1046 53 51V64H19V51Z",
                    fill: "black"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "36",
                        y1: "58",
                        x2: "36",
                        y2: "6.99999",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })
                })]
            }), t[0] = a, t[1] = c, t[2] = r, t[3] = e) : e = t[3], e
        },
        U = () => {
            let e, t = (0, l.c)(4),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_7795_14596" + s,
                c = "paint0_linear_7795_14587" + s;
            return t[0] !== a || t[1] !== c || t[2] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 27C8.89543 27 8 27.8954 8 29V42C8 43.1046 8.89543 44 10 44H66C67.1046 44 68 43.1046 68 42V29C68 27.8954 67.1046 27 66 27H10ZM49 29H15V42H49V29Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("path", {
                    d: "M17 27C17 26.4477 17.4477 26 18 26H22C22.5523 26 23 26.4477 23 27H17Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M41 27C41 26.4477 41.4477 26 42 26H46C46.5523 26 47 26.4477 47 27H41Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M58.5 39C60.433 39 62 37.433 62 35.5C62 33.567 60.433 32 58.5 32C56.567 32 55 33.567 55 35.5C55 37.433 56.567 39 58.5 39ZM58.5 40C60.9853 40 63 37.9853 63 35.5C63 33.0147 60.9853 31 58.5 31C56.0147 31 54 33.0147 54 35.5C54 37.9853 56.0147 40 58.5 40Z",
                    fill: "#373737"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M36.9498 30.5498V33.3998L36.0498 33.3998V32.0862L33.218 34.918L32.5816 34.2816L35.4134 31.4498L34.0998 31.4498V30.5498L36.9498 30.5498Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M27.0498 40.4498L27.0498 37.5998H27.9498L27.9498 38.9134L30.7816 36.0816L31.418 36.718L28.5862 39.5498H29.8998L29.8998 40.4498H27.0498Z",
                    fill: "white"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "67.5",
                        y1: "43.5",
                        x2: "7.5",
                        y2: "27",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#BDBDBD"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "white"
                        })]
                    })
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8 29C8 27.8954 8.89543 27 10 27H66C67.1046 27 68 27.8954 68 29V42C68 43.1046 67.1046 44 66 44H10C8.89543 44 8 43.1046 8 42V29ZM15 29H49V42H15V29Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M36.9498 30.5498V33.3998L36.0498 33.3998V32.0862L33.218 34.918L32.5816 34.2816L35.4134 31.4498L34.0998 31.4498V30.5498L36.9498 30.5498Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M27.0498 40.4498L27.0498 37.5998H27.9498L27.9498 38.9134L30.7816 36.0816L31.418 36.718L28.5862 39.5498H29.8998L29.8998 40.4498H27.0498Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M17 27C17 26.4477 17.4477 26 18 26H22C22.5523 26 23 26.4477 23 27H17Z",
                    fill: "#232323"
                }), (0, i.jsx)("path", {
                    d: "M41 27C41 26.4477 41.4477 26 42 26H46C46.5523 26 47 26.4477 47 27H41Z",
                    fill: "#232323"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "67.5",
                        y1: "43.5",
                        x2: "7.5",
                        y2: "27",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })
                })]
            }), t[0] = a, t[1] = c, t[2] = r, t[3] = e) : e = t[3], e
        },
        A = () => {
            let e, t = (0, l.c)(8),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_7795_12486" + s,
                c = "paint1_linear_7795_12486" + s,
                o = "paint2_linear_7795_12486" + s,
                d = "paint0_linear_7795_12480" + s,
                h = "paint1_linear_7795_12480" + s,
                x = "paint2_linear_7795_12480" + s;
            return t[0] !== a || t[1] !== c || t[2] !== o || t[3] !== d || t[4] !== h || t[5] !== x || t[6] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6 27C4.89543 27 4 27.8954 4 29V42C4 43.1046 4.89543 44 6 44H66C67.1046 44 68 43.1046 68 42V29C68 27.8954 67.1046 27 66 27H6ZM53 29H19V42H53V29Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("circle", {
                    cx: "11.5",
                    cy: "35.5",
                    r: "4.5",
                    fill: `url(#${c})`
                }), (0, i.jsx)("circle", {
                    cx: "60.5",
                    cy: "35.5",
                    r: "4.5",
                    fill: `url(#${o})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M40.9498 30.5498V33.3998L40.0498 33.3998V32.0862L37.218 34.918L36.5816 34.2816L39.4134 31.4498L38.0998 31.4498V30.5498L40.9498 30.5498Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M31.0498 40.4498L31.0498 37.5998H31.9498L31.9498 38.9134L34.7816 36.0816L35.418 36.718L32.5862 39.5498H33.8998L33.8998 40.4498H31.0498Z",
                    fill: "white"
                }), (0, i.jsxs)("defs", {
                    children: [(0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "67.5",
                        y1: "43.5",
                        x2: "7.5",
                        y2: "27",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#BDBDBD"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "white"
                        })]
                    }), (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "11.5",
                        y1: "40.5",
                        x2: "9.5",
                        y2: "31",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "white"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#D6D6D6"
                        })]
                    }), (0, i.jsxs)("linearGradient", {
                        id: o,
                        x1: "61",
                        y1: "40",
                        x2: "58",
                        y2: "27.5",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#BDBDBD"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#E6E6E6"
                        })]
                    })]
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6 27C4.89543 27 4 27.8954 4 29V42C4 43.1046 4.89543 44 6 44H66C67.1046 44 68 43.1046 68 42V29C68 27.8954 67.1046 27 66 27H6ZM53 29H19V42H53V29Z",
                    fill: `url(#${d})`
                }), (0, i.jsx)("circle", {
                    cx: "11.5",
                    cy: "35.5",
                    r: "4.5",
                    fill: `url(#${h})`
                }), (0, i.jsx)("circle", {
                    cx: "60.5",
                    cy: "35.5",
                    r: "4.5",
                    fill: `url(#${x})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M40.9498 30.5498V33.3998L40.0498 33.3998V32.0862L37.218 34.918L36.5816 34.2816L39.4134 31.4498L38.0998 31.4498V30.5498L40.9498 30.5498Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M31.0498 40.4498L31.0498 37.5998H31.9498L31.9498 38.9134L34.7816 36.0816L35.418 36.718L32.5862 39.5498H33.8998L33.8998 40.4498H31.0498Z",
                    fill: "black"
                }), (0, i.jsxs)("defs", {
                    children: [(0, i.jsxs)("linearGradient", {
                        id: d,
                        x1: "67.5",
                        y1: "43.5",
                        x2: "7.5",
                        y2: "27",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    }), (0, i.jsxs)("linearGradient", {
                        id: h,
                        x1: "11.5",
                        y1: "40.5",
                        x2: "9.5",
                        y2: "31",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#4B4B4B"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6C6C6C"
                        })]
                    }), (0, i.jsxs)("linearGradient", {
                        id: x,
                        x1: "61",
                        y1: "40",
                        x2: "58",
                        y2: "27.5",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })]
                })]
            }), t[0] = a, t[1] = c, t[2] = o, t[3] = d, t[4] = h, t[5] = x, t[6] = r, t[7] = e) : e = t[7], e
        },
        O = () => {
            let e, t = (0, l.c)(4),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_7788_6062" + s,
                c = "paint0_linear_7788_6052" + s;
            return t[0] !== a || t[1] !== c || t[2] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19 7.25C18.0335 7.25 17.25 8.0335 17.25 9V63C17.25 63.9665 18.0335 64.75 19 64.75H49C52.7279 64.75 55.75 61.7279 55.75 58V26.2094C56.349 26.0605 56.793 25.519 56.793 24.8739V18.1261C56.793 17.481 56.349 16.9395 55.75 16.7906V14C55.75 10.2721 52.7279 7.25 49 7.25H19ZM18.75 9C18.75 8.86193 18.8619 8.75 19 8.75H49C51.8995 8.75 54.25 11.1005 54.25 14V58C54.25 60.8995 51.8995 63.25 49 63.25H19C18.8619 63.25 18.75 63.1381 18.75 63V9Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M43.7852 28.5V32.5101H42.7852V30.2071L38.3738 34.6187L37.6666 33.9116L42.0781 29.5L39.7752 29.5V28.5L43.7852 28.5Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M28.5 43.7852L28.5 39.775H29.5L29.5 42.078L33.9114 37.6664L34.6185 38.3735L30.2071 42.7852H32.51V43.7852H28.5Z",
                    fill: "white"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "37.0215",
                        y1: "7.25",
                        x2: "37.0215",
                        y2: "64.75",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "white"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#999999"
                        })]
                    })
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19 7.25C18.0335 7.25 17.25 8.0335 17.25 9V63C17.25 63.9665 18.0335 64.75 19 64.75H49C52.7279 64.75 55.75 61.7279 55.75 58V26.2094C56.349 26.0605 56.793 25.519 56.793 24.8739V18.1261C56.793 17.481 56.349 16.9395 55.75 16.7906V14C55.75 10.2721 52.7279 7.25 49 7.25H19ZM18.75 9C18.75 8.86193 18.8619 8.75 19 8.75H49C51.8995 8.75 54.25 11.1005 54.25 14V58C54.25 60.8995 51.8995 63.25 49 63.25H19C18.8619 63.25 18.75 63.1381 18.75 63V9Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M43.7852 28.5V32.5101H42.7852V30.2071L38.3738 34.6187L37.6666 33.9116L42.0781 29.5L39.7752 29.5V28.5L43.7852 28.5Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M28.5 43.7852L28.5 39.775H29.5L29.5 42.078L33.9114 37.6664L34.6185 38.3735L30.2071 42.7852H32.51V43.7852H28.5Z",
                    fill: "black"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "31.5688",
                        y1: "64.75",
                        x2: "31.0711",
                        y2: "7.25003",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })
                })]
            }), t[0] = a, t[1] = c, t[2] = r, t[3] = e) : e = t[3], e
        },
        T = () => {
            let e, t = (0, l.c)(4),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_7795_14596" + s,
                c = "paint0_linear_1_4" + s;
            return t[0] !== a || t[1] !== c || t[2] !== r ? (e = "light" === r ? (0, i.jsxs)("svg", {
                width: "73",
                height: "72",
                viewBox: "0 0 73 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.19922 27H68.1992V44H8.19922V27ZM16.1992 30H48.1992V41H16.1992V30ZM62.1992 35.5C62.1992 37.433 60.6322 39 58.6992 39C56.7662 39 55.1992 37.433 55.1992 35.5C55.1992 33.567 56.7662 32 58.6992 32C60.6322 32 62.1992 33.567 62.1992 35.5ZM63.1992 35.5C63.1992 37.9853 61.1845 40 58.6992 40C56.2139 40 54.1992 37.9853 54.1992 35.5C54.1992 33.0147 56.2139 31 58.6992 31C61.1845 31 63.1992 33.0147 63.1992 35.5Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M36.1583 31.54V33.82L35.4383 33.82V32.7692L33.1728 35.0346L32.6637 34.5255L34.9292 32.26L33.8783 32.26V31.54L36.1583 31.54Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M28.2383 39.46L28.2383 37.18H28.9583L28.9583 38.2309L31.2237 35.9655L31.7328 36.4746L29.4674 38.74H30.5183L30.5183 39.46H28.2383Z",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "17.1992",
                    y: "26",
                    width: "6",
                    height: "1",
                    fill: "#232323"
                }), (0, i.jsx)("path", {
                    d: "M41.1992 27C41.1992 26.4477 41.6469 26 42.1992 26H46.1992C46.7515 26 47.1992 26.4477 47.1992 27H41.1992Z",
                    fill: "#232323"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "67.6992",
                        y1: "43.5",
                        x2: "7.69922",
                        y2: "27",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M68 27H8V44H68V27ZM48 30H16V41H48V30Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("path", {
                    d: "M23 26H17V27H23V26Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M47 26H41V27H47V26Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M58.5 39C60.433 39 62 37.433 62 35.5C62 33.567 60.433 32 58.5 32C56.567 32 55 33.567 55 35.5C55 37.433 56.567 39 58.5 39ZM58.5 40C60.9853 40 63 37.9853 63 35.5C63 33.0147 60.9853 31 58.5 31C56.0147 31 54 33.0147 54 35.5C54 37.9853 56.0147 40 58.5 40Z",
                    fill: "#373737"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M35.9591 31.54V33.82H35.2391V32.7692L32.9736 35.0346L32.4645 34.5255L34.7299 32.26H33.6791V31.54H35.9591Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M28.0391 39.46V37.18H28.7591V38.2309L31.0245 35.9655L31.5336 36.4746L29.2682 38.74H30.3191V39.46H28.0391Z",
                    fill: "white"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "67.5",
                        y1: "43.5",
                        x2: "7.5",
                        y2: "27",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#BDBDBD"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "white"
                        })]
                    })
                })]
            }), t[0] = a, t[1] = c, t[2] = r, t[3] = e) : e = t[3], e
        },
        P = e => {
            let t = (0, l.c)(8),
                {
                    handle: s
                } = e;
            switch (s) {
                case "ledger-stax":
                    {
                        let e;
                        return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(O, {}), t[0] = e) : e = t[0],
                        e
                    }
                case "ledger-stax-belkin-boost-charge-bundle":
                    {
                        let e;
                        return t[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(O, {}), t[1] = e) : e = t[1],
                        e
                    }
                case "ledger-flex":
                    {
                        let e;
                        return t[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)($, {}), t[2] = e) : e = t[2],
                        e
                    }
                case "ledger-nano-gen5":
                    {
                        let e;
                        return t[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(F, {}), t[3] = e) : e = t[3],
                        e
                    }
                case "ledger-nano-x":
                    {
                        let e;
                        return t[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(A, {}), t[4] = e) : e = t[4],
                        e
                    }
                case "ledger-nano-s-plus":
                    {
                        let e;
                        return t[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(U, {}), t[5] = e) : e = t[5],
                        e
                    }
                case "ledger-nano-s":
                    {
                        let e;
                        return t[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(T, {}), t[6] = e) : e = t[6],
                        e
                    }
                default:
                    {
                        let e;
                        return t[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(i.Fragment, {}), t[7] = e) : e = t[7],
                        e
                    }
            }
        },
        E = e => {
            let t, s = (0, l.c)(11),
                {
                    size: r
                } = e,
                a = void 0 === r ? 56 : r,
                {
                    instance: c,
                    theme: o
                } = (0, n.useContext)(ev),
                d = "mask0_7788_6054" + c,
                h = "paint0_linear_7788_6054" + c,
                x = "paint1_linear_7788_6054" + c,
                p = "clip0_7788_6054" + c,
                u = "mask0_7788_6068" + c,
                C = "paint0_linear_7788_6068" + c,
                y = "paint1_linear_7788_6068" + c,
                m = "clip0_7788_6068" + c;
            return s[0] !== d || s[1] !== h || s[2] !== x || s[3] !== p || s[4] !== u || s[5] !== C || s[6] !== y || s[7] !== m || s[8] !== a || s[9] !== o ? (t = "dark" === o ? (0, i.jsxs)("svg", {
                width: a,
                height: a,
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M58.7935 13.5435C58.7935 10.3438 56.1996 7.75 53 7.75V9.25C55.3712 9.25 57.2935 11.1722 57.2935 13.5435V58.4565C57.2935 60.8278 55.3712 62.75 53 62.75V64.25C56.1996 64.25 58.7935 61.6562 58.7935 58.4565V26.1978C59.3704 26.0341 59.793 25.5033 59.793 24.8739V18.1261C59.793 17.4967 59.3704 16.9659 58.7935 16.8022V13.5435Z",
                    fill: `url(#${C})`
                }), (0, i.jsx)("path", {
                    d: "M17.043 8.15376C17.043 7.51095 17.5297 6.97256 18.1693 6.90793L41.9995 4.5L44.3835 4.23638C47.9367 3.84349 51.043 6.62523 51.043 10.2V62.9553C51.043 65.9205 48.4772 68.2342 45.5278 67.9287L18.1661 65.0946C17.5279 65.0285 17.043 64.4907 17.043 63.8491V8.15376Z",
                    fill: "#D4D4D4"
                }), (0, i.jsx)("path", {
                    d: "M16.043 8.15091C16.043 7.5093 16.5279 6.97151 17.1661 6.9054L43.4248 4.18551C46.9641 3.81891 50.043 6.59537 50.043 10.1536V62.9553C50.043 65.9205 47.4772 68.2342 44.5278 67.9287L17.1661 65.0946C16.5279 65.0285 16.043 64.4907 16.043 63.8491V8.15091Z",
                    fill: `url(#${y})`
                }), (0, i.jsxs)("g", {
                    clipPath: `url(#${m})`,
                    children: [(0, i.jsx)("mask", {
                        id: u,
                        style: {
                            maskType: "luminance"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "35",
                        y: "53",
                        width: "10",
                        height: "10",
                        children: (0, i.jsx)("path", {
                            d: "M35 53L44.28 53.97V62.05L35 61.07V53Z",
                            fill: "white"
                        })
                    }), (0, i.jsx)("g", {
                        mask: `url(#${u})`,
                        children: (0, i.jsx)("path", {
                            d: "M35 58.78V61.07L38.49 61.44V60.93L35.51 60.62V58.84L35 58.79V58.78ZM43.77 59.7V61.48L40.79 61.17V61.68L44.28 62.05V59.76L43.77 59.71V59.7ZM38.49 55.66V59.15L40.78 59.39V58.93L39 58.74V55.71L38.49 55.66ZM35 53V55.29L35.51 55.34V53.56L38.49 53.87V53.37L35 53ZM40.79 53.61V54.12L43.77 54.43V56.21L44.28 56.26V53.97L40.79 53.6V53.61Z",
                            fill: "black"
                        })
                    })]
                }), (0, i.jsxs)("defs", {
                    children: [(0, i.jsxs)("linearGradient", {
                        id: C,
                        x1: "55.9998",
                        y1: "64",
                        x2: "55.9998",
                        y2: "8",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#525252"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#B8B8B8"
                        })]
                    }), (0, i.jsxs)("linearGradient", {
                        id: y,
                        x1: "47.9995",
                        y1: "4.5",
                        x2: "15.9995",
                        y2: "66.5",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "white"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#BDBDBD"
                        })]
                    }), (0, i.jsx)("clipPath", {
                        id: m,
                        children: (0, i.jsx)("rect", {
                            width: "9.28",
                            height: "9.05",
                            fill: "white",
                            transform: "translate(35 53)"
                        })
                    })]
                })]
            }) : (0, i.jsxs)("svg", {
                width: a,
                height: a,
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M58.7935 13.5435C58.7935 10.3438 56.1996 7.75 53 7.75V9.25C55.3712 9.25 57.2935 11.1722 57.2935 13.5435V58.4565C57.2935 60.8278 55.3712 62.75 53 62.75V64.25C56.1996 64.25 58.7935 61.6562 58.7935 58.4565V26.1978C59.3704 26.0341 59.793 25.5033 59.793 24.8739V18.1261C59.793 17.4967 59.3704 16.9659 58.7935 16.8022V13.5435Z",
                    fill: `url(#${h})`
                }), (0, i.jsx)("path", {
                    d: "M17.043 8.15376C17.043 7.51095 17.5297 6.97256 18.1693 6.90793L41.9995 4.5L44.3835 4.23638C47.9367 3.84349 51.043 6.62523 51.043 10.2V62.9553C51.043 65.9205 48.4772 68.2342 45.5278 67.9287L18.1661 65.0946C17.5279 65.0285 17.043 64.4907 17.043 63.8491V8.15376Z",
                    fill: "#525252"
                }), (0, i.jsx)("path", {
                    d: "M16.043 8.15091C16.043 7.5093 16.5279 6.97151 17.1661 6.9054L43.4248 4.18551C46.9641 3.81891 50.043 6.59537 50.043 10.1536V62.9553C50.043 65.9205 47.4772 68.2342 44.5278 67.9287L17.1661 65.0946C16.5279 65.0285 16.043 64.4907 16.043 63.8491V8.15091Z",
                    fill: `url(#${x})`
                }), (0, i.jsxs)("g", {
                    clipPath: `url(#${p})`,
                    children: [(0, i.jsx)("mask", {
                        id: d,
                        style: {
                            maskType: "luminance"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "35",
                        y: "53",
                        width: "10",
                        height: "10",
                        children: (0, i.jsx)("path", {
                            d: "M35 53L44.28 53.97V62.05L35 61.07V53Z",
                            fill: "white"
                        })
                    }), (0, i.jsx)("g", {
                        mask: `url(#${d})`,
                        children: (0, i.jsx)("path", {
                            d: "M35 58.78V61.07L38.49 61.44V60.93L35.51 60.62V58.84L35 58.79V58.78ZM43.77 59.7V61.48L40.79 61.17V61.68L44.28 62.05V59.76L43.77 59.71V59.7ZM38.49 55.66V59.15L40.78 59.39V58.93L39 58.74V55.71L38.49 55.66ZM35 53V55.29L35.51 55.34V53.56L38.49 53.87V53.37L35 53ZM40.79 53.61V54.12L43.77 54.43V56.21L44.28 56.26V53.97L40.79 53.6V53.61Z",
                            fill: "white"
                        })
                    })]
                }), (0, i.jsxs)("defs", {
                    children: [(0, i.jsxs)("linearGradient", {
                        id: h,
                        x1: "56.3965",
                        y1: "7.75",
                        x2: "56.3965",
                        y2: "64.25",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#A3A3A3"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#3D3D3D"
                        })]
                    }), (0, i.jsxs)("linearGradient", {
                        id: x,
                        x1: "46.4995",
                        y1: "5",
                        x2: "15.9995",
                        y2: "67",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#4C4C4C"
                        })]
                    }), (0, i.jsx)("clipPath", {
                        id: p,
                        children: (0, i.jsx)("rect", {
                            width: "9.28",
                            height: "9.05",
                            fill: "white",
                            transform: "translate(35 53)"
                        })
                    })]
                })]
            }), s[0] = d, s[1] = h, s[2] = x, s[3] = p, s[4] = u, s[5] = C, s[6] = y, s[7] = m, s[8] = a, s[9] = o, s[10] = t) : t = s[10], t
        },
        z = e => {
            let t, s, r, a, c, o = (0, l.c)(14),
                {
                    size: d
                } = e,
                h = void 0 === d ? 72 : d,
                {
                    theme: x,
                    instance: p
                } = (0, n.useContext)(ev),
                u = ("dark" === x ? "paint0_linear_14627_141037" : "paint0_linear_9553_34627") + p,
                C = `url(#${u})`;
            o[0] !== C ? (t = (0, i.jsx)("rect", {
                x: "15",
                y: "14.5",
                width: "42",
                height: "42",
                rx: "6",
                fill: C
            }), o[0] = C, o[1] = t) : t = o[1];
            let y = "dark" === x ? "#7B7B7B" : "#8D8D8D";
            return o[2] !== y ? (s = (0, i.jsx)("path", {
                d: "M24 40.0371V46H33.0274V44.6776H25.3153V40.0371H24ZM46.6847 40.0371V44.6776H38.9726V45.9997H48V40.0371H46.6847ZM24 25V30.9629H25.3153V26.3221H33.0274V25H24ZM38.9726 25V26.3221H46.6847V30.9629H48V25H38.9726Z",
                fill: y
            }), o[2] = y, o[3] = s) : s = o[3], o[4] !== x ? (r = "dark" === x ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("stop", {
                    offset: "0.025",
                    stopColor: "#949494"
                }), (0, i.jsx)("stop", {
                    offset: "0.275636",
                    stopColor: "#A8A8A8"
                }), (0, i.jsx)("stop", {
                    offset: "1",
                    stopColor: "#FCFCFC"
                })]
            }) : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                    offset: "1",
                    stopColor: "#4C4C4C"
                })]
            }), o[4] = x, o[5] = r) : r = o[5], o[6] !== u || o[7] !== r ? (a = (0, i.jsx)("defs", {
                children: (0, i.jsx)("linearGradient", {
                    id: u,
                    x1: "36",
                    y1: "14.5",
                    x2: "36",
                    y2: "56.5",
                    gradientUnits: "userSpaceOnUse",
                    children: r
                })
            }), o[6] = u, o[7] = r, o[8] = a) : a = o[8], o[9] !== h || o[10] !== t || o[11] !== s || o[12] !== a ? (c = (0, i.jsxs)("svg", {
                width: h,
                height: h,
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [t, s, a]
            }), o[9] = h, o[10] = t, o[11] = s, o[12] = a, o[13] = c) : c = o[13], c
        };
    var W = e.i(109007);
    let G = e => {
            let t, r, a, c, o, d = (0, l.c)(15),
                {
                    label: h,
                    colSpan: x,
                    link: p
                } = e,
                {
                    theme: u
                } = (0, n.useContext)(ev),
                C = "dark" === u && "border-neutral-600",
                y = "light" === u && "border-neutral-200";
            return d[0] !== C || d[1] !== y ? (t = (0, s.default)("border-y p-16 pt-40 heading-1-semi-bold md:pb-24 md:pt-48", C, y), d[0] = C, d[1] = y, d[2] = t) : t = d[2], d[3] !== h ? (r = (0, i.jsx)("span", {
                children: h
            }), d[3] = h, d[4] = r) : r = d[4], d[5] !== p || d[6] !== u ? (a = p && (0, i.jsx)("div", {
                className: "tracking-normal md:absolute md:inset-e-0 md:-me-16",
                children: (0, i.jsx)(b.default, {
                    href: p.href,
                    label: p.label,
                    icon: "arrowRight",
                    variant: "dark" === u ? "link-white" : "link-black",
                    size: "large"
                })
            }), d[5] = p, d[6] = u, d[7] = a) : a = d[7], d[8] !== r || d[9] !== a ? (c = (0, i.jsxs)("div", {
                className: "relative flex flex-col items-center gap-16 md:flex-row md:justify-center",
                children: [r, a]
            }), d[8] = r, d[9] = a, d[10] = c) : c = d[10], d[11] !== x || d[12] !== t || d[13] !== c ? (o = (0, i.jsx)("tr", {
                children: (0, i.jsx)("th", {
                    colSpan: x,
                    className: t,
                    scope: "colgroup",
                    children: c
                })
            }), d[11] = x, d[12] = t, d[13] = c, d[14] = o) : o = d[14], o
        },
        K = e => {
            let t, r, a = (0, l.c)(7),
                {
                    colSpan: c,
                    label: o
                } = e,
                {
                    theme: d
                } = (0, n.useContext)(ev),
                h = "dark" === d && "border-neutral-600 bg-neutral-900",
                x = "light" === d && "border-neutral-200 bg-neutral-500/6";
            return a[0] !== h || a[1] !== x ? (t = (0, s.default)("border-y border-e p-16 heading-5-semi-bold last:border-e-0", h, x), a[0] = h, a[1] = x, a[2] = t) : t = a[2], a[3] !== c || a[4] !== o || a[5] !== t ? (r = (0, i.jsx)("th", {
                colSpan: c,
                className: t,
                scope: "col",
                children: o
            }), a[3] = c, a[4] = o, a[5] = t, a[6] = r) : r = a[6], r
        },
        I = e => {
            let t, s = (0, l.c)(3),
                {
                    label: r,
                    colSpan: n
                } = e;
            return s[0] !== n || s[1] !== r ? (t = (0, i.jsx)("tr", {
                children: (0, i.jsx)(K, {
                    colSpan: n,
                    label: r
                })
            }), s[0] = n, s[1] = r, s[2] = t) : t = s[2], t
        },
        Q = () => {
            let e, t = (0, l.c)(4),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_16718_110692" + s,
                c = "paint0_linear_16718_110689" + s;
            return t[0] !== a || t[1] !== c || t[2] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.3949 1.4751C14.2351 1.4751 13.2949 2.4153 13.2949 3.5751V68.3751C13.2949 69.5349 14.2351 70.4751 15.3949 70.4751H51.3949C55.8684 70.4751 59.4949 66.8486 59.4949 62.3751V24.2264C60.2138 24.0477 60.7465 23.3979 60.7465 22.6238V14.5264C60.7465 13.7523 60.2138 13.1025 59.4949 12.9238V9.5751C59.4949 5.10159 55.8684 1.4751 51.3949 1.4751H15.3949ZM15.0949 3.5751C15.0949 3.40941 15.2292 3.2751 15.3949 3.2751H51.3949C54.8743 3.2751 57.6949 6.0957 57.6949 9.5751V62.3751C57.6949 65.8545 54.8743 68.6751 51.3949 68.6751H15.3949C15.2292 68.6751 15.0949 68.5408 15.0949 68.3751V3.5751Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "11.9751",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "26.375",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "40.7749",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "15.5752",
                    width: "27.6",
                    height: "2.5",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "29.9751",
                    width: "21.6",
                    height: "2.5",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "44.375",
                    width: "32.4",
                    height: "2.5",
                    fill: "white"
                }), (0, i.jsx)("circle", {
                    cx: "46.9004",
                    cy: "57.5",
                    r: "9.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("path", {
                    d: "M51.2979 55.1377L45.8691 61.9229L42.1582 58.2119L43.4316 56.9385L45.7197 59.2266L49.8926 54.0127L51.2979 55.1377Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M59.7002 57.5C59.7002 50.1146 53.9303 44.2002 46.9004 44.2002C39.8705 44.2002 34.1006 50.1146 34.1006 57.5C34.1006 64.8854 39.8705 70.7998 46.9004 70.7998V72C39.1684 72 32.9004 65.5081 32.9004 57.5C32.9004 49.4919 39.1684 43 46.9004 43C54.6324 43 60.9004 49.4919 60.9004 57.5C60.9004 65.5081 54.6324 72 46.9004 72V70.7998C53.9303 70.7998 59.7002 64.8854 59.7002 57.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "25.1449",
                        y1: "70.4751",
                        x2: "25.1449",
                        y2: "1.4751",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#525252"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#B8B8B8"
                        })]
                    })
                })]
            }) : (0, i.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.3949 1.4751C14.2351 1.4751 13.2949 2.4153 13.2949 3.5751V68.3751C13.2949 69.5349 14.2351 70.4751 15.3949 70.4751H51.3949C55.8684 70.4751 59.4949 66.8486 59.4949 62.3751V24.2264C60.2138 24.0477 60.7465 23.3979 60.7465 22.6238V14.5264C60.7465 13.7523 60.2138 13.1025 59.4949 12.9238V9.5751C59.4949 5.10159 55.8684 1.4751 51.3949 1.4751H15.3949ZM15.0949 3.5751C15.0949 3.40941 15.2292 3.2751 15.3949 3.2751H51.3949C54.8743 3.2751 57.6949 6.0957 57.6949 9.5751V62.3751C57.6949 65.8545 54.8743 68.6751 51.3949 68.6751H15.3949C15.2292 68.6751 15.0949 68.5408 15.0949 68.3751V3.5751Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "11.9751",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "26.375",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "40.7749",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "15.5752",
                    width: "27.6",
                    height: "2.5",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "29.9751",
                    width: "21.6",
                    height: "2.5",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "20.1953",
                    y: "44.375",
                    width: "32.4",
                    height: "2.5",
                    fill: "black"
                }), (0, i.jsx)("circle", {
                    cx: "46.9004",
                    cy: "57.5",
                    r: "9.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("path", {
                    d: "M51.2979 55.1377L45.8691 61.9229L42.1582 58.2119L43.4316 56.9385L45.7197 59.2266L49.8926 54.0127L51.2979 55.1377Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M59.7002 57.5C59.7002 50.1146 53.9303 44.2002 46.9004 44.2002C39.8705 44.2002 34.1006 50.1146 34.1006 57.5C34.1006 64.8854 39.8705 70.7998 46.9004 70.7998V72C39.1684 72 32.9004 65.5081 32.9004 57.5C32.9004 49.4919 39.1684 43 46.9004 43C54.6324 43 60.9004 49.4919 60.9004 57.5C60.9004 65.5081 54.6324 72 46.9004 72V70.7998C53.9303 70.7998 59.7002 64.8854 59.7002 57.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "30.4774",
                        y1: "70.4751",
                        x2: "29.8803",
                        y2: "1.47514",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })
                })]
            }), t[0] = a, t[1] = c, t[2] = r, t[3] = e) : e = t[3], e
        },
        Y = () => {
            let e, t = (0, l.c)(4),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_16718_110775" + s,
                c = "paint0_linear_16718_110772" + s;
            return t[0] !== a || t[1] !== c || t[2] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M61.6484 13.7998H62.0971C62.5121 13.7998 62.8484 14.1362 62.8484 14.5511V22.6485C62.8484 23.0634 62.5121 23.3998 62.0971 23.3998H61.6484",
                    stroke: "black",
                    strokeWidth: "1.8"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.99609 8.4C9.99609 3.76081 13.7569 0 18.3961 0H54.3961C59.0353 0 62.7961 3.76081 62.7961 8.4V68.4C62.7961 70.3882 61.1843 72 59.1961 72H13.5961C11.6079 72 9.99609 70.3882 9.99609 68.4V8.4ZM18.3961 4.8C16.4079 4.8 14.7961 6.41178 14.7961 8.4V67.2H57.9961V8.4C57.9961 6.41178 56.3843 4.8 54.3961 4.8H18.3961Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "10.7998",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "22.7998",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "34.7998",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "14.4004",
                    width: "27.6",
                    height: "2.5",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "26.4004",
                    width: "21.6",
                    height: "2.5",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "38.4004",
                    width: "32.4",
                    height: "2.5",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M14.7969 58.7998C14.7969 60.1253 15.8714 61.1998 17.1969 61.1998H55.5969C56.9224 61.1998 57.9969 60.1253 57.9969 58.7998V69.5998H14.7969V58.7998Z",
                    fill: "#BDBDBD"
                }), (0, i.jsx)("circle", {
                    cx: "47.0996",
                    cy: "52.5",
                    r: "9.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("path", {
                    d: "M51.499 50.1377L46.0703 56.9229L42.3594 53.2119L43.6328 51.9385L45.9209 54.2266L50.0938 49.0127L51.499 50.1377Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M60.3994 52.5C60.3994 45.1546 54.445 39.2002 47.0996 39.2002C39.7542 39.2002 33.7998 45.1546 33.7998 52.5C33.7998 59.8454 39.7542 65.7998 47.0996 65.7998V67C39.0915 67 32.5996 60.5081 32.5996 52.5C32.5996 44.4919 39.0915 38 47.0996 38C55.1077 38 61.5996 44.4919 61.5996 52.5C61.5996 60.5081 55.1077 67 47.0996 67V65.7998C54.445 65.7998 60.3994 59.8454 60.3994 52.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "36.3961",
                        y1: "2.4",
                        x2: "36.3961",
                        y2: "61.2",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "white"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#BDBDBD"
                        })]
                    })
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M61.6484 13.7998H62.0971C62.5121 13.7998 62.8484 14.1362 62.8484 14.5511V22.6485C62.8484 23.0634 62.5121 23.3998 62.0971 23.3998H61.6484",
                    stroke: "black",
                    strokeWidth: "1.8"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.99609 8.4C9.99609 3.76081 13.7569 0 18.3961 0H54.3961C59.0353 0 62.7961 3.76081 62.7961 8.4V68.4C62.7961 70.3882 61.1843 72 59.1961 72H13.5961C11.6079 72 9.99609 70.3882 9.99609 68.4V8.4ZM18.3961 4.8C16.4079 4.8 14.7961 6.41178 14.7961 8.4V67.2H57.9961V8.4C57.9961 6.41178 56.3843 4.8 54.3961 4.8H18.3961Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "10.7998",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "22.7998",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "34.7998",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "14.4004",
                    width: "27.6",
                    height: "2.5",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "26.4004",
                    width: "21.6",
                    height: "2.5",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "19.3965",
                    y: "38.4004",
                    width: "32.4",
                    height: "2.5",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M14.7969 58.7998C14.7969 60.1253 15.8714 61.1998 17.1969 61.1998H55.5969C56.9224 61.1998 57.9969 60.1253 57.9969 58.7998V69.5998H14.7969V58.7998Z",
                    fill: "black"
                }), (0, i.jsx)("circle", {
                    cx: "47.0996",
                    cy: "52.5",
                    r: "9.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("path", {
                    d: "M51.499 50.1377L46.0703 56.9229L42.3594 53.2119L43.6328 51.9385L45.9209 54.2266L50.0938 49.0127L51.499 50.1377Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M60.3994 52.5C60.3994 45.1546 54.445 39.2002 47.0996 39.2002C39.7542 39.2002 33.7998 45.1546 33.7998 52.5C33.7998 59.8454 39.7542 65.7998 47.0996 65.7998V67C39.0915 67 32.5996 60.5081 32.5996 52.5C32.5996 44.4919 39.0915 38 47.0996 38C55.1077 38 61.5996 44.4919 61.5996 52.5C61.5996 60.5081 55.1077 67 47.0996 67V65.7998C54.445 65.7998 60.3994 59.8454 60.3994 52.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "36.3961",
                        y1: "61.2",
                        x2: "36.3961",
                        y2: "-4.34971e-06",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })
                })]
            }), t[0] = a, t[1] = c, t[2] = r, t[3] = e) : e = t[3], e
        },
        q = () => {
            let e, t = (0, l.c)(4),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_16718_110733" + s,
                c = "paint0_linear_16718_110730" + s;
            return t[0] !== a || t[1] !== c || t[2] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M60.3867 16.0498H60.813C61.2072 16.0498 61.5267 16.3694 61.5267 16.7635V24.4561C61.5267 24.8503 61.2072 25.1698 60.813 25.1698H60.3867",
                    stroke: "black",
                    strokeWidth: "1.71"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.3164 7.50016C11.3164 3.09293 13.7492 0.660156 18.1564 0.660156H54.6364C59.0436 0.660156 61.4764 3.09292 61.4764 7.50016V64.5002C61.4764 69.0602 59.1964 71.3402 54.6364 71.3402H18.1564C13.5964 71.3402 11.3164 69.0602 11.3164 64.5002L11.3164 7.50016ZM19.2964 6.36016C18.1564 6.36016 17.0164 7.50016 17.0164 8.64016V66.7802H55.7764V8.64016C55.7764 7.50016 54.6364 6.36016 53.4964 6.36016H19.2964Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("path", {
                    d: "M17.0176 53.0996C17.0176 54.3588 18.0384 55.3796 19.2976 55.3796H53.4976C54.7568 55.3796 55.7776 54.3588 55.7776 53.0996V67.9196H17.0176V53.0996Z",
                    fill: "#BDBDBD"
                }), (0, i.jsx)("rect", {
                    x: "20.5254",
                    y: "13.2002",
                    width: "26.22",
                    height: "3.42",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "20.5254",
                    y: "22.3203",
                    width: "20.52",
                    height: "3.42",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "20.5254",
                    y: "31.4395",
                    width: "30.78",
                    height: "3.42",
                    fill: "white"
                }), (0, i.jsx)("circle", {
                    cx: "44.9004",
                    cy: "46.5",
                    r: "9.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("path", {
                    d: "M49.2998 44.1377L43.8711 50.9229L40.1602 47.2119L41.4336 45.9385L43.7217 48.2266L47.8945 43.0127L49.2998 44.1377Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M58.2002 46.5C58.2002 39.1546 52.2458 33.2002 44.9004 33.2002C37.555 33.2002 31.6006 39.1546 31.6006 46.5C31.6006 53.8454 37.555 59.7998 44.9004 59.7998V61C36.8923 61 30.4004 54.5081 30.4004 46.5C30.4004 38.4919 36.8923 32 44.9004 32C52.9085 32 59.4004 38.4919 59.4004 46.5C59.4004 54.5081 52.9085 61 44.9004 61V59.7998C52.2458 59.7998 58.2002 53.8454 58.2002 46.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "36.3964",
                        y1: "3.01616",
                        x2: "36.3964",
                        y2: "60.7382",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "white"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#BDBDBD"
                        })]
                    })
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M60.3867 16.0498H60.813C61.2072 16.0498 61.5267 16.3694 61.5267 16.7635V24.4561C61.5267 24.8503 61.2072 25.1698 60.813 25.1698H60.3867",
                    stroke: "black",
                    strokeWidth: "1.71"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.3164 7.50016C11.3164 3.09293 13.7492 0.660156 18.1564 0.660156H54.6364C59.0436 0.660156 61.4764 3.09292 61.4764 7.50016V64.5002C61.4764 69.0602 59.1964 71.3402 54.6364 71.3402H18.1564C13.5964 71.3402 11.3164 69.0602 11.3164 64.5002L11.3164 7.50016ZM19.2964 6.36016C18.1564 6.36016 17.0164 7.50016 17.0164 8.64016V66.7802H55.7764V8.64016C55.7764 7.50016 54.6364 6.36016 53.4964 6.36016H19.2964Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("path", {
                    d: "M17.0176 53.0996C17.0176 54.3588 18.0384 55.3796 19.2976 55.3796H53.4976C54.7568 55.3796 55.7776 54.3588 55.7776 53.0996V67.9196H17.0176V53.0996Z",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "20.5254",
                    y: "13.2002",
                    width: "26.22",
                    height: "3.42",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "20.5254",
                    y: "22.3203",
                    width: "20.52",
                    height: "3.42",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "20.5254",
                    y: "31.4395",
                    width: "30.78",
                    height: "3.42",
                    fill: "black"
                }), (0, i.jsx)("circle", {
                    cx: "44.9004",
                    cy: "46.5",
                    r: "9.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("path", {
                    d: "M49.2998 44.1377L43.8711 50.9229L40.1602 47.2119L41.4336 45.9385L43.7217 48.2266L47.8945 43.0127L49.2998 44.1377Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M58.2002 46.5C58.2002 39.1546 52.2458 33.2002 44.9004 33.2002C37.555 33.2002 31.6006 39.1546 31.6006 46.5C31.6006 53.8454 37.555 59.7998 44.9004 59.7998V61C36.8923 61 30.4004 54.5081 30.4004 46.5C30.4004 38.4919 36.8923 32 44.9004 32C52.9085 32 59.4004 38.4919 59.4004 46.5C59.4004 54.5081 52.9085 61 44.9004 61V59.7998C52.2458 59.7998 58.2002 53.8454 58.2002 46.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "36.3964",
                        y1: "61.0802",
                        x2: "36.3964",
                        y2: "2.94015",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })
                })]
            }), t[0] = a, t[1] = c, t[2] = r, t[3] = e) : e = t[3], e
        },
        J = () => {
            let e, t = (0, l.c)(7),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_16718_110820" + s,
                c = "paint1_linear_16718_110820" + s,
                o = "paint0_linear_16718_110813" + s,
                d = "paint1_linear_16718_110813" + s,
                h = "paint2_linear_16718_110813" + s;
            return t[0] !== a || t[1] !== c || t[2] !== o || t[3] !== d || t[4] !== h || t[5] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "73",
                height: "72",
                viewBox: "0 0 73 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M65.5605 27.2383C66.6342 27.2383 67.5049 28.109 67.5049 29.1826V41.8184C67.5048 42.892 66.6342 43.7627 65.5605 43.7627H7.24121C6.1676 43.7627 5.29692 42.892 5.29688 41.8184V29.1826C5.29688 28.109 6.16757 27.2383 7.24121 27.2383H65.5605ZM19.877 29.1826V41.8184H52.9248V29.1826H19.877Z",
                    fill: "#D9D9D9"
                }), (0, i.jsx)("rect", {
                    x: "22.4043",
                    y: "34.042",
                    width: "20.412",
                    height: "2.916",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M50.1641 35.5L47.2188 38.4453L46.1875 37.415L48.1016 35.5L46.1875 33.5859L47.2188 32.5547L50.1641 35.5Z",
                    fill: "white"
                }), (0, i.jsx)("circle", {
                    cx: "12.5869",
                    cy: "35.5",
                    r: "4.374",
                    fill: `url(#${a})`
                }), (0, i.jsx)("circle", {
                    cx: "60.2138",
                    cy: "35.5",
                    r: "4.374",
                    fill: `url(#${c})`
                }), (0, i.jsx)("circle", {
                    cx: "12.7012",
                    cy: "35.5",
                    r: "7.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("circle", {
                    cx: "60.7012",
                    cy: "35.5",
                    r: "7.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("path", {
                    d: "M23.001 35.5C23.001 29.8115 18.3897 25.2002 12.7012 25.2002C7.01264 25.2002 2.40137 29.8115 2.40137 35.5C2.40137 41.1885 7.01264 45.7998 12.7012 45.7998V47C6.3499 47 1.20117 41.8513 1.20117 35.5C1.20117 29.1487 6.3499 24 12.7012 24C19.0524 24 24.2012 29.1487 24.2012 35.5C24.2012 41.8513 19.0524 47 12.7012 47V45.7998C18.3897 45.7998 23.001 41.1885 23.001 35.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("path", {
                    d: "M71.001 35.5C71.001 29.8115 66.3897 25.2002 60.7012 25.2002C55.0126 25.2002 50.4014 29.8115 50.4014 35.5C50.4014 41.1885 55.0126 45.7998 60.7012 45.7998V47C54.3499 47 49.2012 41.8513 49.2012 35.5C49.2012 29.1487 54.3499 24 60.7012 24C67.0524 24 72.2012 29.1487 72.2012 35.5C72.2012 41.8513 67.0524 47 60.7012 47V45.7998C66.3897 45.7998 71.001 41.1885 71.001 35.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsxs)("defs", {
                    children: [(0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "13.0729",
                        y1: "39.874",
                        x2: "10.1569",
                        y2: "27.724",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#BDBDBD"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#E6E6E6"
                        })]
                    }), (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "60.6998",
                        y1: "39.874",
                        x2: "57.7838",
                        y2: "27.724",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#BDBDBD"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#E6E6E6"
                        })]
                    })]
                })]
            }) : (0, i.jsxs)("svg", {
                width: "73",
                height: "72",
                viewBox: "0 0 73 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M65.5605 27.2383C66.6342 27.2383 67.5049 28.109 67.5049 29.1826V41.8184C67.5048 42.892 66.6342 43.7627 65.5605 43.7627H7.24121C6.1676 43.7627 5.29692 42.892 5.29688 41.8184V29.1826C5.29688 28.109 6.16757 27.2383 7.24121 27.2383H65.5605ZM19.877 29.1826V41.8184H52.9248V29.1826H19.877Z",
                    fill: `url(#${o})`
                }), (0, i.jsx)("rect", {
                    x: "22.4043",
                    y: "34.042",
                    width: "20.412",
                    height: "2.916",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M50.1641 35.5L47.2188 38.4453L46.1875 37.415L48.1016 35.5L46.1875 33.5859L47.2188 32.5547L50.1641 35.5Z",
                    fill: "black"
                }), (0, i.jsx)("circle", {
                    cx: "12.5869",
                    cy: "35.5",
                    r: "4.374",
                    fill: `url(#${d})`
                }), (0, i.jsx)("circle", {
                    cx: "60.2138",
                    cy: "35.5",
                    r: "4.374",
                    fill: `url(#${h})`
                }), (0, i.jsx)("circle", {
                    cx: "12.7012",
                    cy: "35.5",
                    r: "7.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("circle", {
                    cx: "60.7012",
                    cy: "35.5",
                    r: "7.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("path", {
                    d: "M23.001 35.5C23.001 29.8115 18.3897 25.2002 12.7012 25.2002C7.01264 25.2002 2.40137 29.8115 2.40137 35.5C2.40137 41.1885 7.01264 45.7998 12.7012 45.7998V47C6.3499 47 1.20117 41.8513 1.20117 35.5C1.20117 29.1487 6.3499 24 12.7012 24C19.0524 24 24.2012 29.1487 24.2012 35.5C24.2012 41.8513 19.0524 47 12.7012 47V45.7998C18.3897 45.7998 23.001 41.1885 23.001 35.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("path", {
                    d: "M71.001 35.5C71.001 29.8115 66.3897 25.2002 60.7012 25.2002C55.0126 25.2002 50.4014 29.8115 50.4014 35.5C50.4014 41.1885 55.0126 45.7998 60.7012 45.7998V47C54.3499 47 49.2012 41.8513 49.2012 35.5C49.2012 29.1487 54.3499 24 60.7012 24C67.0524 24 72.2012 29.1487 72.2012 35.5C72.2012 41.8513 67.0524 47 60.7012 47V45.7998C66.3897 45.7998 71.001 41.1885 71.001 35.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsxs)("defs", {
                    children: [(0, i.jsxs)("linearGradient", {
                        id: o,
                        x1: "67.019",
                        y1: "43.2766",
                        x2: "8.69874",
                        y2: "27.2388",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    }), (0, i.jsxs)("linearGradient", {
                        id: d,
                        x1: "12.5869",
                        y1: "40.36",
                        x2: "10.6429",
                        y2: "31.126",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#4B4B4B"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6C6C6C"
                        })]
                    }), (0, i.jsxs)("linearGradient", {
                        id: h,
                        x1: "60.6998",
                        y1: "39.874",
                        x2: "57.7838",
                        y2: "27.724",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })]
                })]
            }), t[0] = a, t[1] = c, t[2] = o, t[3] = d, t[4] = h, t[5] = r, t[6] = e) : e = t[6], e
        },
        X = () => {
            let e, t = (0, l.c)(4),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_16718_110849" + s,
                c = "paint0_linear_16718_110841" + s;
            return t[0] !== a || t[1] !== c || t[2] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M69.5996 26.0996C70.9251 26.0996 72 27.1745 72 28.5V44.0996C72 45.4251 70.9251 46.5 69.5996 46.5H2.40039C1.07491 46.5 2.68887e-07 45.4251 0 44.0996V28.5C0 27.1745 1.07491 26.0996 2.40039 26.0996H69.5996ZM8.40039 44.0996H49.2002V28.5H8.40039V44.0996ZM60.5996 30.8994C57.6173 30.8994 55.1992 33.3175 55.1992 36.2998C55.1994 39.282 57.6174 41.6992 60.5996 41.6992C63.5816 41.699 65.9988 39.2818 65.999 36.2998C65.999 33.3176 63.5818 30.8996 60.5996 30.8994ZM60.5996 32.0996C62.919 32.0998 64.7988 33.9803 64.7988 36.2998C64.7986 38.6191 62.9189 40.4988 60.5996 40.499C58.2801 40.499 56.3996 38.6192 56.3994 36.2998C56.3994 33.9802 58.28 32.0996 60.5996 32.0996Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("rect", {
                    x: "15.8398",
                    y: "34.5",
                    width: "19.2",
                    height: "3.6",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M46.5127 36.2998L42.877 39.9365L41.6035 38.6631L43.9668 36.2998L41.6035 33.9365L42.877 32.6631L46.5127 36.2998Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M10.8008 26.1004C10.8008 25.4376 11.338 24.9004 12.0008 24.9004H16.8008C17.4635 24.9004 18.0008 25.4376 18.0008 26.1004H10.8008Z",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M39.5996 26.1004C39.5996 25.4376 40.1369 24.9004 40.7996 24.9004H45.5996C46.2624 24.9004 46.7996 25.4376 46.7996 26.1004H39.5996Z",
                    fill: "white"
                }), (0, i.jsx)("circle", {
                    cx: "14.0996",
                    cy: "25.5",
                    r: "7.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("circle", {
                    cx: "43.0996",
                    cy: "25.5",
                    r: "7.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("path", {
                    d: "M24.3994 25.5C24.3994 19.8115 19.7881 15.2002 14.0996 15.2002C8.41108 15.2002 3.7998 19.8115 3.7998 25.5C3.7998 31.1885 8.41108 35.7998 14.0996 35.7998V37C7.74833 37 2.59961 31.8513 2.59961 25.5C2.59961 19.1487 7.74833 14 14.0996 14C20.4509 14 25.5996 19.1487 25.5996 25.5C25.5996 31.8513 20.4509 37 14.0996 37V35.7998C19.7881 35.7998 24.3994 31.1885 24.3994 25.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("path", {
                    d: "M53.3994 25.5C53.3994 19.8115 48.7881 15.2002 43.0996 15.2002C37.4111 15.2002 32.7998 19.8115 32.7998 25.5C32.7998 31.1885 37.4111 35.7998 43.0996 35.7998V37C36.7483 37 31.5996 31.8513 31.5996 25.5C31.5996 19.1487 36.7483 14 43.0996 14C49.4509 14 54.5996 19.1487 54.5996 25.5C54.5996 31.8513 49.4509 37 43.0996 37V35.7998C48.7881 35.7998 53.3994 31.1885 53.3994 25.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "71.4",
                        y1: "45.9",
                        x2: "-0.600196",
                        y2: "26.1003",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#BDBDBD"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "white"
                        })]
                    })
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "72",
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M69.5996 26.0996C70.9251 26.0996 72 27.1745 72 28.5V44.0996C72 45.4251 70.9251 46.5 69.5996 46.5H2.40039C1.07491 46.5 2.68887e-07 45.4251 0 44.0996V28.5C0 27.1745 1.07491 26.0996 2.40039 26.0996H69.5996ZM8.40039 44.0996H49.2002V28.5H8.40039V44.0996ZM60.5996 30.8994C57.6173 30.8994 55.1992 33.3175 55.1992 36.2998C55.1994 39.282 57.6174 41.6992 60.5996 41.6992C63.5816 41.699 65.9988 39.2818 65.999 36.2998C65.999 33.3176 63.5818 30.8996 60.5996 30.8994ZM60.5996 32.0996C62.919 32.0998 64.7988 33.9803 64.7988 36.2998C64.7986 38.6191 62.9189 40.4988 60.5996 40.499C58.2801 40.499 56.3996 38.6192 56.3994 36.2998C56.3994 33.9802 58.28 32.0996 60.5996 32.0996Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("rect", {
                    x: "15.8398",
                    y: "34.5",
                    width: "19.2",
                    height: "3.6",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M46.5127 36.2998L42.877 39.9365L41.6035 38.6631L43.9668 36.2998L41.6035 33.9365L42.877 32.6631L46.5127 36.2998Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M10.8008 26.1004C10.8008 25.4376 11.338 24.9004 12.0008 24.9004H16.8008C17.4635 24.9004 18.0008 25.4376 18.0008 26.1004H10.8008Z",
                    fill: "#232323"
                }), (0, i.jsx)("path", {
                    d: "M39.5996 26.1004C39.5996 25.4376 40.1369 24.9004 40.7996 24.9004H45.5996C46.2624 24.9004 46.7996 25.4376 46.7996 26.1004H39.5996Z",
                    fill: "#232323"
                }), (0, i.jsx)("circle", {
                    cx: "14.0996",
                    cy: "25.5",
                    r: "7.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("circle", {
                    cx: "43.0996",
                    cy: "25.5",
                    r: "7.5",
                    fill: "#D4A0FF",
                    fillOpacity: "0.5"
                }), (0, i.jsx)("path", {
                    d: "M24.3994 25.5C24.3994 19.8115 19.7881 15.2002 14.0996 15.2002C8.41108 15.2002 3.7998 19.8115 3.7998 25.5C3.7998 31.1885 8.41108 35.7998 14.0996 35.7998V37C7.74833 37 2.59961 31.8513 2.59961 25.5C2.59961 19.1487 7.74833 14 14.0996 14C20.4509 14 25.5996 19.1487 25.5996 25.5C25.5996 31.8513 20.4509 37 14.0996 37V35.7998C19.7881 35.7998 24.3994 31.1885 24.3994 25.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("path", {
                    d: "M53.3994 25.5C53.3994 19.8115 48.7881 15.2002 43.0996 15.2002C37.4111 15.2002 32.7998 19.8115 32.7998 25.5C32.7998 31.1885 37.4111 35.7998 43.0996 35.7998V37C36.7483 37 31.5996 31.8513 31.5996 25.5C31.5996 19.1487 36.7483 14 43.0996 14C49.4509 14 54.5996 19.1487 54.5996 25.5C54.5996 31.8513 49.4509 37 43.0996 37V35.7998C48.7881 35.7998 53.3994 31.1885 53.3994 25.5Z",
                    fill: "#D4A0FF"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "71.4",
                        y1: "45.9",
                        x2: "-0.600196",
                        y2: "26.1003",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })
                })]
            }), t[0] = a, t[1] = c, t[2] = r, t[3] = e) : e = t[3], e
        },
        ee = () => {
            let e, t = (0, l.c)(6),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_16718_110718" + s,
                c = "paint0_linear_16718_110707" + s,
                o = "clip0_16718_110718" + s,
                d = "clip0_16718_110707" + s;
            return t[0] !== a || t[1] !== c || t[2] !== o || t[3] !== d || t[4] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "72",
                height: "74",
                viewBox: "0 0 72 74",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.3949 3.4751C14.2351 3.4751 13.2949 4.4153 13.2949 5.5751V70.3751C13.2949 71.5349 14.2351 72.4751 15.3949 72.4751H51.3949C55.8684 72.4751 59.4949 68.8486 59.4949 64.3751V26.2264C60.2138 26.0477 60.7465 25.3979 60.7465 24.6238V16.5264C60.7465 15.7523 60.2138 15.1025 59.4949 14.9238V11.5751C59.4949 7.10159 55.8684 3.4751 51.3949 3.4751H15.3949ZM15.0949 5.5751C15.0949 5.40941 15.2292 5.2751 15.3949 5.2751H51.3949C54.8743 5.2751 57.6949 8.0957 57.6949 11.5751V64.3751C57.6949 67.8545 54.8743 70.6751 51.3949 70.6751H15.3949C15.2292 70.6751 15.0949 70.5408 15.0949 70.3751V5.5751Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.2155 21.132C37.2287 19.397 34.7295 19.3922 33.7473 21.1332L33.7464 21.1349L27.3742 32.3013C26.3939 34.0164 27.6321 36.1508 29.6076 36.1508H42.3734C44.3433 36.1508 45.5886 34.011 44.6075 32.3012L44.6071 32.3004L38.2159 21.1328L38.2155 21.132ZM36.6245 25.8167C36.6245 25.4715 36.3447 25.1917 35.9995 25.1917C35.6544 25.1917 35.3745 25.4715 35.3745 25.8167V28.9333C35.3745 29.2785 35.6544 29.5583 35.9995 29.5583C36.3447 29.5583 36.6245 29.2785 36.6245 28.9333V25.8167ZM35.9912 30.8125L35.987 30.8125L35.9829 30.8125C35.9655 30.8125 35.9483 30.8132 35.9313 30.8146C35.4976 30.8451 35.1579 31.2041 35.1579 31.6458C35.1579 32.0831 35.5133 32.4791 35.9912 32.4791C36.2372 32.4791 36.442 32.3685 36.5779 32.2325C36.7139 32.0966 36.8245 31.8918 36.8245 31.6458C36.8245 31.1793 36.4559 30.8498 36.0525 30.8154C36.0323 30.8135 36.0119 30.8125 35.9912 30.8125Z",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "30.4004",
                    y: "43",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "22.4004",
                    y: "48.0254",
                    width: "27",
                    height: "2",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "25.4004",
                    y: "52.0254",
                    width: "21",
                    height: "2",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "23.4004",
                    y: "56.0254",
                    width: "25",
                    height: "2",
                    fill: "white"
                }), (0, i.jsx)("g", {
                    clipPath: `url(#${o})`,
                    children: (0, i.jsx)("path", {
                        d: "M65.9785 4.75586C66.8091 4.0783 68.0069 4.08173 68.832 4.76367L68.9912 4.90918L69.1367 5.06934C69.8184 5.89442 69.822 7.0914 69.1445 7.92188C69.1269 7.94352 69.1087 7.96473 69.0898 7.98535L69.0381 8.04199C69.0229 8.05861 69.0071 8.0749 68.9912 8.09082L57.9912 19.0908C57.5695 19.5125 56.9975 19.75 56.4004 19.75C55.8033 19.75 55.2312 19.5125 54.8096 19.0908L49.8096 14.0908C49.7937 14.0749 49.7778 14.0586 49.7627 14.042L49.7109 13.9854C49.6921 13.9647 49.6739 13.9435 49.6562 13.9219C48.9336 13.036 48.9859 11.7328 49.8096 10.9092L49.9697 10.7637C50.7397 10.1276 51.8338 10.0816 52.6514 10.6289L52.8223 10.7559L52.8857 10.8105L52.9424 10.8623C52.959 10.8775 52.9753 10.8933 52.9912 10.9092L56.4004 14.3184L65.8096 4.90918L65.8584 4.8623L65.915 4.81055L65.9785 4.75586Z",
                        fill: "white",
                        stroke: "black",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }), (0, i.jsxs)("defs", {
                    children: [(0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "25.1449",
                        y1: "72.4751",
                        x2: "25.1449",
                        y2: "3.4751",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "#525252"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#B8B8B8"
                        })]
                    }), (0, i.jsx)("clipPath", {
                        id: o,
                        children: (0, i.jsx)("rect", {
                            x: "47.4004",
                            width: "24",
                            height: "24",
                            rx: "12",
                            fill: "white"
                        })
                    })]
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "74",
                viewBox: "0 0 72 74",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.3949 3.4751C14.2351 3.4751 13.2949 4.4153 13.2949 5.5751V70.3751C13.2949 71.5349 14.2351 72.4751 15.3949 72.4751H51.3949C55.8684 72.4751 59.4949 68.8486 59.4949 64.3751V26.2264C60.2138 26.0477 60.7465 25.3979 60.7465 24.6238V16.5264C60.7465 15.7523 60.2138 15.1025 59.4949 14.9238V11.5751C59.4949 7.10159 55.8684 3.4751 51.3949 3.4751H15.3949ZM15.0949 5.5751C15.0949 5.40941 15.2292 5.2751 15.3949 5.2751H51.3949C54.8743 5.2751 57.6949 8.0957 57.6949 11.5751V64.3751C57.6949 67.8545 54.8743 70.6751 51.3949 70.6751H15.3949C15.2292 70.6751 15.0949 70.5408 15.0949 70.3751V5.5751Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.2155 21.132C37.2287 19.397 34.7295 19.3922 33.7473 21.1332L33.7464 21.1349L27.3742 32.3013C26.3939 34.0164 27.6321 36.1508 29.6076 36.1508H42.3734C44.3433 36.1508 45.5886 34.011 44.6075 32.3012L44.6071 32.3004L38.2159 21.1328L38.2155 21.132ZM36.6245 25.8167C36.6245 25.4715 36.3447 25.1917 35.9995 25.1917C35.6544 25.1917 35.3745 25.4715 35.3745 25.8167V28.9333C35.3745 29.2785 35.6544 29.5583 35.9995 29.5583C36.3447 29.5583 36.6245 29.2785 36.6245 28.9333V25.8167ZM35.9912 30.8125L35.987 30.8125L35.9829 30.8125C35.9655 30.8125 35.9483 30.8132 35.9313 30.8146C35.4976 30.8451 35.1579 31.2041 35.1579 31.6458C35.1579 32.0831 35.5133 32.4791 35.9912 32.4791C36.2372 32.4791 36.442 32.3685 36.5779 32.2325C36.7139 32.0966 36.8245 31.8918 36.8245 31.6458C36.8245 31.1793 36.4559 30.8498 36.0525 30.8154C36.0323 30.8135 36.0119 30.8125 35.9912 30.8125Z",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "30.4004",
                    y: "43",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "22.4004",
                    y: "48.0254",
                    width: "27",
                    height: "2",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "25.4004",
                    y: "52.0254",
                    width: "21",
                    height: "2",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "23.4004",
                    y: "56.0254",
                    width: "25",
                    height: "2",
                    fill: "black"
                }), (0, i.jsx)("g", {
                    clipPath: `url(#${d})`,
                    children: (0, i.jsx)("path", {
                        d: "M65.9785 4.75586C66.8091 4.0783 68.0069 4.08173 68.832 4.76367L68.9912 4.90918L69.1367 5.06934C69.8184 5.89442 69.822 7.0914 69.1445 7.92188C69.1269 7.94352 69.1087 7.96473 69.0898 7.98535L69.0381 8.04199C69.0229 8.05861 69.0071 8.0749 68.9912 8.09082L57.9912 19.0908C57.5695 19.5125 56.9975 19.75 56.4004 19.75C55.8033 19.75 55.2312 19.5125 54.8096 19.0908L49.8096 14.0908C49.7937 14.0749 49.7778 14.0586 49.7627 14.042L49.7109 13.9854C49.6921 13.9647 49.6739 13.9435 49.6562 13.9219C48.9336 13.036 48.9859 11.7328 49.8096 10.9092L49.9697 10.7637C50.7397 10.1276 51.8338 10.0816 52.6514 10.6289L52.8223 10.7559L52.8857 10.8105L52.9424 10.8623C52.959 10.8775 52.9753 10.8933 52.9912 10.9092L56.4004 14.3184L65.8096 4.90918L65.8584 4.8623L65.915 4.81055L65.9785 4.75586Z",
                        fill: "black",
                        stroke: "white",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }), (0, i.jsxs)("defs", {
                    children: [(0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "30.4774",
                        y1: "72.4751",
                        x2: "29.8803",
                        y2: "3.47514",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    }), (0, i.jsx)("clipPath", {
                        id: d,
                        children: (0, i.jsx)("rect", {
                            x: "47.4004",
                            width: "24",
                            height: "24",
                            rx: "12",
                            fill: "white"
                        })
                    })]
                })]
            }), t[0] = a, t[1] = c, t[2] = o, t[3] = d, t[4] = r, t[5] = e) : e = t[5], e
        },
        ei = () => {
            let e, t = (0, l.c)(4),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_16718_110758" + s,
                c = "paint0_linear_16718_110748" + s;
            return t[0] !== a || t[1] !== c || t[2] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "72",
                height: "74",
                viewBox: "0 0 72 74",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.3164 9.50016C11.3164 5.09293 13.7492 2.66016 18.1564 2.66016H54.6364C59.0436 2.66016 61.4764 5.09292 61.4764 9.50016V66.5002C61.4764 71.0602 59.1964 73.3402 54.6364 73.3402H18.1564C13.5964 73.3402 11.3164 71.0602 11.3164 66.5002L11.3164 9.50016ZM19.2964 8.36016C18.1564 8.36016 17.0164 9.50016 17.0164 10.6402V68.7802H55.7764V10.6402C55.7764 9.50016 54.6364 8.36016 53.4964 8.36016H19.2964Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.8151 14.132C37.8283 12.397 35.3291 12.3922 34.3469 14.1332L34.346 14.1349L27.9738 25.3013C26.9935 27.0164 28.2317 29.1508 30.2072 29.1508H42.973C44.943 29.1508 46.1882 27.011 45.2071 25.3012L45.2067 25.3004L38.8156 14.1328L38.8151 14.132ZM37.2242 18.8167C37.2242 18.4715 36.9443 18.1917 36.5992 18.1917C36.254 18.1917 35.9742 18.4715 35.9742 18.8167V21.9333C35.9742 22.2785 36.254 22.5583 36.5992 22.5583C36.9443 22.5583 37.2242 22.2785 37.2242 21.9333V18.8167ZM36.5908 23.8125L36.5866 23.8125L36.5825 23.8125C36.5651 23.8125 36.5479 23.8132 36.5309 23.8146C36.0972 23.8451 35.7575 24.2041 35.7575 24.6458C35.7575 25.0831 36.1129 25.4791 36.5908 25.4791C36.8368 25.4791 37.0416 25.3685 37.1776 25.2325C37.3135 25.0966 37.4242 24.8918 37.4242 24.6458C37.4242 24.1793 37.0555 23.8498 36.6521 23.8154C36.6319 23.8135 36.6115 23.8125 36.5908 23.8125Z",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "31",
                    y: "33",
                    width: "12",
                    height: "3",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "23",
                    y: "38",
                    width: "27",
                    height: "3",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "26",
                    y: "43",
                    width: "21",
                    height: "3",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "24",
                    y: "48",
                    width: "25",
                    height: "3",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M65.5781 4.75586C66.4087 4.0783 67.6065 4.08173 68.4316 4.76367L68.5908 4.90918L68.7363 5.06934C69.418 5.89442 69.4216 7.0914 68.7441 7.92188C68.7265 7.94352 68.7083 7.96473 68.6895 7.98535L68.6377 8.04199C68.6225 8.05861 68.6067 8.0749 68.5908 8.09082L57.5908 19.0908C57.1692 19.5125 56.5971 19.75 56 19.75C55.4029 19.75 54.8308 19.5125 54.4092 19.0908L49.4092 14.0908C49.3933 14.0749 49.3775 14.0586 49.3623 14.042L49.3105 13.9854C49.2917 13.9647 49.2735 13.9435 49.2559 13.9219C48.5332 13.036 48.5855 11.7328 49.4092 10.9092L49.5693 10.7637C50.3393 10.1276 51.4334 10.0816 52.251 10.6289L52.4219 10.7559L52.4854 10.8105L52.542 10.8623C52.5586 10.8775 52.5749 10.8933 52.5908 10.9092L56 14.3184L65.4092 4.90918L65.458 4.8623L65.5146 4.81055L65.5781 4.75586Z",
                    fill: "white",
                    stroke: "black",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, i.jsx)("path", {
                    d: "M17.0176 55.0996C17.0176 56.3588 18.0384 57.3796 19.2976 57.3796H53.4976C54.7568 57.3796 55.7776 56.3588 55.7776 55.0996V69.9196H17.0176V55.0996Z",
                    fill: "#BDBDBD"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "36.3964",
                        y1: "5.01616",
                        x2: "36.3964",
                        y2: "62.7382",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "white"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#BDBDBD"
                        })]
                    })
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "74",
                viewBox: "0 0 72 74",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M59.9863 18.0498H60.4126C60.8068 18.0498 61.1263 18.3694 61.1263 18.7635V26.4561C61.1263 26.8503 60.8068 27.1698 60.4126 27.1698H59.9863",
                    stroke: "black",
                    strokeWidth: "1.71"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.918 9.50016C10.918 5.09293 13.3507 2.66016 17.758 2.66016H54.238C58.6452 2.66016 61.078 5.09292 61.078 9.50016V66.5002C61.078 71.0602 58.798 73.3402 54.238 73.3402H17.758C13.198 73.3402 10.918 71.0602 10.918 66.5002L10.918 9.50016ZM18.898 8.36016C17.758 8.36016 16.618 9.50016 16.618 10.6402V68.7802H55.378V10.6402C55.378 9.50016 54.238 8.36016 53.098 8.36016H18.898Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.8151 14.132C37.8283 12.397 35.3291 12.3922 34.3469 14.1332L34.346 14.1349L27.9738 25.3013C26.9935 27.0164 28.2317 29.1508 30.2072 29.1508H42.973C44.943 29.1508 46.1882 27.011 45.2071 25.3012L45.2067 25.3004L38.8156 14.1328L38.8151 14.132ZM37.2242 18.8167C37.2242 18.4715 36.9443 18.1917 36.5992 18.1917C36.254 18.1917 35.9742 18.4715 35.9742 18.8167V21.9333C35.9742 22.2785 36.254 22.5583 36.5992 22.5583C36.9443 22.5583 37.2242 22.2785 37.2242 21.9333V18.8167ZM36.5908 23.8125L36.5866 23.8125L36.5825 23.8125C36.5651 23.8125 36.5479 23.8132 36.5309 23.8146C36.0972 23.8451 35.7575 24.2041 35.7575 24.6458C35.7575 25.0831 36.1129 25.4791 36.5908 25.4791C36.8368 25.4791 37.0416 25.3685 37.1776 25.2325C37.3135 25.0966 37.4242 24.8918 37.4242 24.6458C37.4242 24.1793 37.0555 23.8498 36.6521 23.8154C36.6319 23.8135 36.6115 23.8125 36.5908 23.8125Z",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "31",
                    y: "33",
                    width: "12",
                    height: "3",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "23",
                    y: "38",
                    width: "27",
                    height: "3",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "26",
                    y: "43",
                    width: "21",
                    height: "3",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "24",
                    y: "48",
                    width: "25",
                    height: "3",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M16.6172 55.0996C16.6172 56.3588 17.638 57.3796 18.8972 57.3796H53.0972C54.3564 57.3796 55.3772 56.3588 55.3772 55.0996V69.9196H16.6172V55.0996Z",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M65.5781 4.75586C66.4087 4.0783 67.6065 4.08173 68.4316 4.76367L68.5908 4.90918L68.7363 5.06934C69.418 5.89442 69.4216 7.0914 68.7441 7.92188C68.7265 7.94352 68.7083 7.96473 68.6895 7.98535L68.6377 8.04199C68.6225 8.05861 68.6067 8.0749 68.5908 8.09082L57.5908 19.0908C57.1692 19.5125 56.5971 19.75 56 19.75C55.4029 19.75 54.8308 19.5125 54.4092 19.0908L49.4092 14.0908C49.3933 14.0749 49.3775 14.0586 49.3623 14.042L49.3105 13.9854C49.2917 13.9647 49.2735 13.9435 49.2559 13.9219C48.5332 13.036 48.5855 11.7328 49.4092 10.9092L49.5693 10.7637C50.3393 10.1276 51.4334 10.0816 52.251 10.6289L52.4219 10.7559L52.4854 10.8105L52.542 10.8623C52.5586 10.8775 52.5749 10.8933 52.5908 10.9092L56 14.3184L65.4092 4.90918L65.458 4.8623L65.5146 4.81055L65.5781 4.75586Z",
                    fill: "black",
                    stroke: "white",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, i.jsx)("defs", {
                    children: (0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "35.998",
                        y1: "63.0802",
                        x2: "35.998",
                        y2: "4.94015",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    })
                })]
            }), t[0] = a, t[1] = c, t[2] = r, t[3] = e) : e = t[3], e
        },
        el = () => {
            let e, t = (0, l.c)(6),
                {
                    instance: s,
                    theme: r
                } = (0, n.useContext)(ev),
                a = "paint0_linear_16718_110783" + s,
                c = "paint0_linear_16718_110780" + s,
                o = "clip0_16718_110783" + s,
                d = "clip0_16718_110780" + s;
            return t[0] !== a || t[1] !== c || t[2] !== o || t[3] !== d || t[4] !== r ? (e = "dark" === r ? (0, i.jsxs)("svg", {
                width: "72",
                height: "74",
                viewBox: "0 0 72 74",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M61.248 15.7998H61.6967C62.1117 15.7998 62.448 16.1362 62.448 16.5511V24.6485C62.448 25.0634 62.1117 25.3998 61.6967 25.3998H61.248",
                    stroke: "black",
                    strokeWidth: "1.8"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.5957 10.4C9.5957 5.76081 13.3565 2 17.9957 2H53.9957C58.6349 2 62.3957 5.76081 62.3957 10.4V70.4C62.3957 72.3882 60.7839 74 58.7957 74H13.1957C11.2075 74 9.5957 72.3882 9.5957 70.4V10.4ZM17.9957 6.8C16.0075 6.8 14.3957 8.41178 14.3957 10.4V69.2H57.5957V10.4C57.5957 8.41178 55.9839 6.8 53.9957 6.8H17.9957Z",
                    fill: `url(#${a})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.0163 18.132C37.0294 16.397 34.5303 16.3922 33.5481 18.1332L33.5471 18.1349L27.175 29.3013C26.1947 31.0164 27.4329 33.1508 29.4084 33.1508H42.1742C44.1441 33.1508 45.3893 31.011 44.4083 29.3012L44.4079 29.3004L38.0167 18.1328L38.0163 18.132ZM36.4253 22.8167C36.4253 22.4715 36.1455 22.1917 35.8003 22.1917C35.4551 22.1917 35.1753 22.4715 35.1753 22.8167V25.9333C35.1753 26.2785 35.4551 26.5583 35.8003 26.5583C36.1455 26.5583 36.4253 26.2785 36.4253 25.9333V22.8167ZM35.792 27.8125L35.7878 27.8125L35.7837 27.8125C35.7663 27.8125 35.7491 27.8132 35.732 27.8146C35.2984 27.8451 34.9587 28.2041 34.9587 28.6458C34.9587 29.0831 35.3141 29.4791 35.792 29.4791C36.0379 29.4791 36.2428 29.3685 36.3787 29.2325C36.5147 29.0966 36.6253 28.8918 36.6253 28.6458C36.6253 28.1793 36.2567 27.8498 35.8533 27.8154C35.8331 27.8135 35.8127 27.8125 35.792 27.8125Z",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "30.1992",
                    y: "40",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "22.1992",
                    y: "45.0254",
                    width: "27",
                    height: "2",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "25.1992",
                    y: "49.0254",
                    width: "21",
                    height: "2",
                    fill: "white"
                }), (0, i.jsx)("rect", {
                    x: "23.1992",
                    y: "53.0254",
                    width: "25",
                    height: "2",
                    fill: "white"
                }), (0, i.jsx)("path", {
                    d: "M14.3965 60.7998C14.3965 62.1253 15.471 63.1998 16.7965 63.1998H55.1965C56.522 63.1998 57.5965 62.1253 57.5965 60.7998V71.5998H14.3965V60.7998Z",
                    fill: "#BDBDBD"
                }), (0, i.jsx)("g", {
                    clipPath: `url(#${o})`,
                    children: (0, i.jsx)("path", {
                        d: "M65.7773 4.75586C66.6079 4.0783 67.8058 4.08173 68.6309 4.76367L68.79 4.90918L68.9355 5.06934C69.6172 5.89442 69.6208 7.0914 68.9434 7.92188C68.9257 7.94352 68.9075 7.96473 68.8887 7.98535L68.8369 8.04199C68.8217 8.05861 68.806 8.0749 68.79 8.09082L57.79 19.0908C57.3684 19.5125 56.7964 19.75 56.1992 19.75C55.6021 19.75 55.03 19.5125 54.6084 19.0908L49.6084 14.0908C49.5925 14.0749 49.5767 14.0586 49.5615 14.042L49.5098 13.9854C49.4909 13.9647 49.4727 13.9435 49.4551 13.9219C48.7324 13.036 48.7847 11.7328 49.6084 10.9092L49.7686 10.7637C50.5385 10.1276 51.6326 10.0816 52.4502 10.6289L52.6211 10.7559L52.6846 10.8105L52.7412 10.8623C52.7578 10.8775 52.7742 10.8933 52.79 10.9092L56.1992 14.3184L65.6084 4.90918L65.6572 4.8623L65.7139 4.81055L65.7773 4.75586Z",
                        fill: "white",
                        stroke: "black",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }), (0, i.jsxs)("defs", {
                    children: [(0, i.jsxs)("linearGradient", {
                        id: a,
                        x1: "35.9957",
                        y1: "4.4",
                        x2: "35.9957",
                        y2: "63.2",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {
                            stopColor: "white"
                        }), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#BDBDBD"
                        })]
                    }), (0, i.jsx)("clipPath", {
                        id: o,
                        children: (0, i.jsx)("rect", {
                            x: "47.1992",
                            width: "24",
                            height: "24",
                            rx: "12",
                            fill: "white"
                        })
                    })]
                })]
            }) : (0, i.jsxs)("svg", {
                width: "72",
                height: "74",
                viewBox: "0 0 72 74",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, i.jsx)("path", {
                    d: "M61.248 15.7998H61.6967C62.1117 15.7998 62.448 16.1362 62.448 16.5511V24.6485C62.448 25.0634 62.1117 25.3998 61.6967 25.3998H61.248",
                    stroke: "black",
                    strokeWidth: "1.8"
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.5957 10.4C9.5957 5.76081 13.3565 2 17.9957 2H53.9957C58.6349 2 62.3957 5.76081 62.3957 10.4V70.4C62.3957 72.3882 60.7839 74 58.7957 74H13.1957C11.2075 74 9.5957 72.3882 9.5957 70.4V10.4ZM17.9957 6.8C16.0075 6.8 14.3957 8.41178 14.3957 10.4V69.2H57.5957V10.4C57.5957 8.41178 55.9839 6.8 53.9957 6.8H17.9957Z",
                    fill: `url(#${c})`
                }), (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.0163 18.132C37.0294 16.397 34.5303 16.3922 33.5481 18.1332L33.5471 18.1349L27.175 29.3013C26.1947 31.0164 27.4329 33.1508 29.4084 33.1508H42.1742C44.1441 33.1508 45.3893 31.011 44.4083 29.3012L44.4079 29.3004L38.0167 18.1328L38.0163 18.132ZM36.4253 22.8167C36.4253 22.4715 36.1455 22.1917 35.8003 22.1917C35.4551 22.1917 35.1753 22.4715 35.1753 22.8167V25.9333C35.1753 26.2785 35.4551 26.5583 35.8003 26.5583C36.1455 26.5583 36.4253 26.2785 36.4253 25.9333V22.8167ZM35.792 27.8125L35.7878 27.8125L35.7837 27.8125C35.7663 27.8125 35.7491 27.8132 35.732 27.8146C35.2984 27.8451 34.9587 28.2041 34.9587 28.6458C34.9587 29.0831 35.3141 29.4791 35.792 29.4791C36.0379 29.4791 36.2428 29.3685 36.3787 29.2325C36.5147 29.0966 36.6253 28.8918 36.6253 28.6458C36.6253 28.1793 36.2567 27.8498 35.8533 27.8154C35.8331 27.8135 35.8127 27.8125 35.792 27.8125Z",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "30.1992",
                    y: "40",
                    width: "12",
                    height: "2.4",
                    fill: "#888888"
                }), (0, i.jsx)("rect", {
                    x: "22.1992",
                    y: "45.0254",
                    width: "27",
                    height: "2",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "25.1992",
                    y: "49.0254",
                    width: "21",
                    height: "2",
                    fill: "black"
                }), (0, i.jsx)("rect", {
                    x: "23.1992",
                    y: "53.0254",
                    width: "25",
                    height: "2",
                    fill: "black"
                }), (0, i.jsx)("path", {
                    d: "M14.3965 60.7998C14.3965 62.1253 15.471 63.1998 16.7965 63.1998H55.1965C56.522 63.1998 57.5965 62.1253 57.5965 60.7998V71.5998H14.3965V60.7998Z",
                    fill: "black"
                }), (0, i.jsx)("g", {
                    clipPath: `url(#${d})`,
                    children: (0, i.jsx)("path", {
                        d: "M65.7773 4.75586C66.6079 4.0783 67.8058 4.08173 68.6309 4.76367L68.79 4.90918L68.9355 5.06934C69.6172 5.89442 69.6208 7.0914 68.9434 7.92188C68.9257 7.94352 68.9075 7.96473 68.8887 7.98535L68.8369 8.04199C68.8217 8.05861 68.806 8.0749 68.79 8.09082L57.79 19.0908C57.3684 19.5125 56.7964 19.75 56.1992 19.75C55.6021 19.75 55.03 19.5125 54.6084 19.0908L49.6084 14.0908C49.5925 14.0749 49.5767 14.0586 49.5615 14.042L49.5098 13.9854C49.4909 13.9647 49.4727 13.9435 49.4551 13.9219C48.7324 13.036 48.7847 11.7328 49.6084 10.9092L49.7686 10.7637C50.5385 10.1276 51.6326 10.0816 52.4502 10.6289L52.6211 10.7559L52.6846 10.8105L52.7412 10.8623C52.7578 10.8775 52.7742 10.8933 52.79 10.9092L56.1992 14.3184L65.6084 4.90918L65.6572 4.8623L65.7139 4.81055L65.7773 4.75586Z",
                        fill: "black",
                        stroke: "white",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }), (0, i.jsxs)("defs", {
                    children: [(0, i.jsxs)("linearGradient", {
                        id: c,
                        x1: "35.9957",
                        y1: "63.2",
                        x2: "35.9957",
                        y2: "2",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, i.jsx)("stop", {}), (0, i.jsx)("stop", {
                            offset: "1",
                            stopColor: "#595959"
                        })]
                    }), (0, i.jsx)("clipPath", {
                        id: d,
                        children: (0, i.jsx)("rect", {
                            x: "47.1992",
                            width: "24",
                            height: "24",
                            rx: "12",
                            fill: "white"
                        })
                    })]
                })]
            }), t[0] = a, t[1] = c, t[2] = o, t[3] = d, t[4] = r, t[5] = e) : e = t[5], e
        },
        et = e => {
            let s, r, n, a, c, o, d, h, p, u, C, y, m, f, j, g = (0, l.c)(49),
                {
                    handles: b
                } = e,
                L = b.length,
                {
                    t: v
                } = (0, t.useTranslation)("deviceComparison");
            if (g[0] !== v ? (s = v("confidence.heading"), g[0] = v, g[1] = s) : s = g[1], g[2] !== L || g[3] !== s ? (r = (0, i.jsx)(G, {
                    colSpan: L,
                    label: s
                }), g[2] = L, g[3] = s, g[4] = r) : r = g[4], g[5] !== v ? (n = v("confidence.clearSigning.heading"), g[5] = v, g[6] = n) : n = g[6], g[7] !== L || g[8] !== n ? (a = (0, i.jsx)(I, {
                    colSpan: L,
                    label: n
                }), g[7] = L, g[8] = n, g[9] = a) : a = g[9], g[10] !== b || g[11] !== v) {
                let e;
                g[13] !== v ? (e = e => {
                    let l = R("clearSigning", e),
                        t = `${e}-clear-signing`;
                    if (!l) return (0, i.jsx)(B, {
                        alignTop: !0,
                        children: null
                    }, `${t}-cell`);
                    let s = null;
                    switch (e) {
                        case "ledger-stax":
                            s = (0, i.jsx)(Q, {});
                            break;
                        case "ledger-flex":
                            s = (0, i.jsx)(Y, {});
                            break;
                        case "ledger-nano-gen5":
                            s = (0, i.jsx)(q, {});
                            break;
                        case "ledger-nano-x":
                            s = (0, i.jsx)(J, {});
                            break;
                        case "ledger-nano-s-plus":
                            s = (0, i.jsx)(X, {})
                    }
                    return (0, i.jsx)(B, {
                        alignTop: !0,
                        children: (0, i.jsxs)("div", {
                            className: "flex flex-col items-center gap-8",
                            children: [s, (0, i.jsx)("div", {
                                children: l ? .map(e => (0, i.jsx)("div", {
                                    children: (0, i.jsx)(W.Trans, {
                                        children: v(e)
                                    })
                                }, `${t}-${e}`))
                            })]
                        })
                    }, `${t}-cell`)
                }, g[13] = v, g[14] = e) : e = g[14], c = b.map(e), g[10] = b, g[11] = v, g[12] = c
            } else c = g[12];
            if (g[15] !== c ? (o = (0, i.jsx)("tr", {
                    children: c
                }), g[15] = c, g[16] = o) : o = g[16], g[17] !== v ? (d = v("confidence.transactionCheck.heading"), g[17] = v, g[18] = d) : d = g[18], g[19] !== L || g[20] !== d ? (h = (0, i.jsx)(I, {
                    colSpan: L,
                    label: d
                }), g[19] = L, g[20] = d, g[21] = h) : h = g[21], g[22] !== b || g[23] !== v) {
                let e;
                g[25] !== v ? (e = e => {
                    let l = R("transactionCheck", e),
                        t = `${e}-transaction-check`;
                    if (!l) return (0, i.jsx)(B, {
                        alignTop: !0,
                        children: null
                    }, `${t}-cell`);
                    let s = null;
                    switch (e) {
                        case "ledger-stax":
                            s = (0, i.jsx)(ee, {});
                            break;
                        case "ledger-flex":
                            s = (0, i.jsx)(el, {});
                            break;
                        case "ledger-nano-gen5":
                            s = (0, i.jsx)(ei, {});
                            break;
                        case "ledger-nano-x":
                        case "ledger-nano-s-plus":
                            s = null
                    }
                    return (0, i.jsx)(B, {
                        alignTop: !0,
                        children: (0, i.jsxs)("div", {
                            className: "flex flex-col items-center gap-8",
                            children: [s, (0, i.jsx)("div", {
                                children: l ? .map(e => (0, i.jsx)("div", {
                                    children: (0, i.jsx)(W.Trans, {
                                        children: v(e)
                                    })
                                }, `${t}-${e}`))
                            })]
                        })
                    }, `${t}-cell`)
                }, g[25] = v, g[26] = e) : e = g[26], p = b.map(e), g[22] = b, g[23] = v, g[24] = p
            } else p = g[24];
            if (g[27] !== p ? (u = (0, i.jsx)("tr", {
                    children: p
                }), g[27] = p, g[28] = u) : u = g[28], g[29] !== v ? (C = v("confidence.securityKey.heading"), g[29] = v, g[30] = C) : C = g[30], g[31] !== L || g[32] !== C ? (y = (0, i.jsx)(I, {
                    colSpan: L,
                    label: C
                }), g[31] = L, g[32] = C, g[33] = y) : y = g[33], g[34] !== b || g[35] !== v) {
                let e;
                g[37] !== v ? (e = e => {
                    let l = R("securityKey", e),
                        t = `${e}-security-key`;
                    return l ? (0, i.jsx)(B, {
                        alignTop: !0,
                        children: (0, i.jsxs)("div", {
                            className: "flex flex-col items-center gap-8",
                            children: [l.map(l => "confidence.securityKey.lnsp" === l || "confidence.securityKey.lnx" === l ? (0, i.jsx)(x.default, {
                                name: "usb",
                                size: 32
                            }, `${e}-security-key-${l}-icon`) : "confidence.securityKey.flex" === l || "confidence.securityKey.stax" === l || "confidence.securityKey.gen5" === l ? (0, i.jsxs)("div", {
                                className: "flex gap-8",
                                children: [(0, i.jsx)(x.default, {
                                    name: "nfc",
                                    size: 32,
                                    color: "current"
                                }), (0, i.jsx)(x.default, {
                                    name: "usbC",
                                    size: 32,
                                    color: "current"
                                })]
                            }, `${e}-security-key-${l}-icons`) : void 0), l.map(l => (0, i.jsx)("div", {
                                children: (0, i.jsx)(W.Trans, {
                                    children: v(l)
                                })
                            }, `${e}-security-key-${l}`))]
                        })
                    }, `${t}-cell`) : (0, i.jsx)(B, {
                        alignTop: !0,
                        children: null
                    }, `${t}-cell`)
                }, g[37] = v, g[38] = e) : e = g[38], m = b.map(e), g[34] = b, g[35] = v, g[36] = m
            } else m = g[36];
            return g[39] !== m ? (f = (0, i.jsx)("tr", {
                children: m
            }), g[39] = m, g[40] = f) : f = g[40], g[41] !== u || g[42] !== y || g[43] !== f || g[44] !== r || g[45] !== a || g[46] !== o || g[47] !== h ? (j = (0, i.jsxs)(i.Fragment, {
                children: [r, a, o, h, u, y, f]
            }), g[41] = u, g[42] = y, g[43] = f, g[44] = r, g[45] = a, g[46] = o, g[47] = h, g[48] = j) : j = g[48], j
        },
        es = e => {
            let s, r, a, c, o, d, h, p, u, C = (0, l.c)(34),
                {
                    handles: y
                } = e,
                {
                    t: m
                } = (0, t.useTranslation)("deviceComparison"),
                {
                    theme: f
                } = (0, n.useContext)(ev);
            C[0] !== f ? (s = "dark" === f ? {
                color: "white"
            } : {}, C[0] = f, C[1] = s) : s = C[1];
            let j = s;
            if (C[2] !== y || C[3] !== m) {
                let e;
                C[5] !== m ? (e = e => {
                    let l = R("screenSizePhysical", e),
                        t = R("screenDetails", e),
                        s = R("screenSummary", e);
                    return (0, i.jsxs)(B, {
                        alignTop: !0,
                        children: [(0, i.jsx)("div", {
                            className: "flex h-80 items-center",
                            children: (0, i.jsx)(P, {
                                handle: e
                            })
                        }), l && (0, i.jsx)("div", {
                            className: "heading-3-semi-bold pt-8",
                            children: m(l)
                        }), s && (0, i.jsx)("strong", {
                            className: "mb-20",
                            children: m(s)
                        }), t ? .map(l => (0, i.jsx)("div", {
                            children: m(l)
                        }, `${e}-screen-${l}`))]
                    }, `${e}-screen-description-cell`)
                }, C[5] = m, C[6] = e) : e = C[6], r = y.map(e), C[2] = y, C[3] = m, C[4] = r
            } else r = C[4];
            if (C[7] !== r ? (a = (0, i.jsx)("tr", {
                    children: r
                }), C[7] = r, C[8] = a) : a = C[8], C[9] !== y || C[10] !== j || C[11] !== m) {
                let e;
                C[13] !== j || C[14] !== m ? (e = e => {
                    let l = R("connectivity", e);
                    return (0, i.jsxs)(B, {
                        alignTop: !0,
                        children: [(0, i.jsx)("div", {
                            className: "flex gap-4 pb-8",
                            children: l ? .map(l => {
                                let t = `${e}-connectivity-${l}`;
                                switch (l) {
                                    case "connectivity.usbC":
                                        return (0, i.jsx)(x.default, {
                                            name: "usbC",
                                            size: 32,
                                            ...j
                                        }, t);
                                    case "connectivity.bluetooth":
                                        return (0, i.jsx)(x.default, {
                                            name: "bluetooth",
                                            size: 32,
                                            ...j
                                        }, t);
                                    case "connectivity.nfc":
                                        return (0, i.jsx)(x.default, {
                                            name: "nfc",
                                            size: 32,
                                            ...j
                                        }, t);
                                    case "connectivity.wirelessQiCharging":
                                        return (0, i.jsx)(x.default, {
                                            name: "charging",
                                            size: 32,
                                            ...j
                                        }, t);
                                    case "connectivity.usbAtoUsbC":
                                    case "connectivity.microUsb":
                                        return (0, i.jsx)(x.default, {
                                            name: "usb",
                                            size: 32,
                                            ...j
                                        }, t)
                                }
                            })
                        }), (0, i.jsx)("div", {
                            children: l ? .map(l => (0, i.jsx)("div", {
                                children: m(l)
                            }, `${e}-screen-${l}`))
                        })]
                    }, `${e}-connectivity-cell`)
                }, C[13] = j, C[14] = m, C[15] = e) : e = C[15], c = y.map(e), C[9] = y, C[10] = j, C[11] = m, C[12] = c
            } else c = C[12];
            if (C[16] !== c ? (o = (0, i.jsx)("tr", {
                    children: c
                }), C[16] = c, C[17] = o) : o = C[17], C[18] !== y || C[19] !== j || C[20] !== m) {
                let e;
                C[22] !== j || C[23] !== m ? (e = e => {
                    let l = R("includedExtras", e),
                        t = `${e}-included-extras`;
                    return l ? (0, i.jsxs)(B, {
                        alignTop: !0,
                        children: [(0, i.jsx)("div", {
                            className: "flex items-center gap-4 pb-8",
                            children: l ? .map(e => {
                                let l = `${t}-icon-${e}`;
                                switch (e) {
                                    case "includedExtras.staxMagnetShell":
                                        return (0, i.jsx)(E, {
                                            size: 56
                                        }, l);
                                    case "includedExtras.plusLedgerRecoveryKey":
                                        return (0, i.jsxs)(n.default.Fragment, {
                                            children: [(0, i.jsx)(x.default, {
                                                name: "plus",
                                                size: 16,
                                                ...j
                                            }), (0, i.jsx)(z, {
                                                size: 56
                                            })]
                                        }, l);
                                    case "includedExtras.ledgerRecoveryKeyIncluded":
                                        return (0, i.jsx)(z, {
                                            size: 72
                                        }, l)
                                }
                            })
                        }), (0, i.jsx)("div", {
                            children: l ? .map(e => (0, i.jsx)("div", {
                                children: m(e)
                            }, `${t}-${e}`))
                        })]
                    }, `${t}-cell`) : (0, i.jsx)(B, {
                        alignTop: !0,
                        children: null
                    }, `${t}-cell`)
                }, C[22] = j, C[23] = m, C[24] = e) : e = C[24], d = y.map(e), C[18] = y, C[19] = j, C[20] = m, C[21] = d
            } else d = C[21];
            return C[25] !== d ? (h = (0, i.jsx)("tr", {
                children: d
            }), C[25] = d, C[26] = h) : h = C[26], C[27] !== y ? (p = (0, i.jsx)(et, {
                handles: y
            }), C[27] = y, C[28] = p) : p = C[28], C[29] !== a || C[30] !== o || C[31] !== h || C[32] !== p ? (u = (0, i.jsxs)(i.Fragment, {
                children: [a, o, h, p]
            }), C[29] = a, C[30] = o, C[31] = h, C[32] = p, C[33] = u) : u = C[33], u
        },
        er = e => {
            let s, r, n, a, c, o, d, h = (0, l.c)(17),
                {
                    colSpan: p,
                    setIsBottomHidden: u,
                    theme: C,
                    dataCsOverrideId: y
                } = e;
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                keyPrefix: "ui"
            }, h[0] = s) : s = h[0];
            let {
                t: m
            } = (0, t.useTranslation)("deviceComparison", s);
            h[1] !== u ? (r = () => u(!1), h[1] = u, h[2] = r) : r = h[2], h[3] !== m ? (n = m("expandTheFullComparison"), h[3] = m, h[4] = n) : n = h[4];
            let f = "dark" === C ? "white" : "black";
            return h[5] !== f ? (a = (0, i.jsx)(x.default, {
                name: "arrowDown",
                color: f,
                size: 24
            }), h[5] = f, h[6] = a) : a = h[6], h[7] !== n || h[8] !== a ? (c = (0, i.jsxs)("span", {
                className: "flex items-center justify-center gap-4 body-1-semi-bold",
                children: [n, a]
            }), h[7] = n, h[8] = a, h[9] = c) : c = h[9], h[10] !== y || h[11] !== r || h[12] !== c ? (o = (0, i.jsx)("button", {
                className: "pt-56",
                type: "button",
                onClick: r,
                "data-cs-override-id": y,
                children: c
            }), h[10] = y, h[11] = r, h[12] = c, h[13] = o) : o = h[13], h[14] !== p || h[15] !== o ? (d = (0, i.jsx)("tr", {
                children: (0, i.jsx)("th", {
                    colSpan: p,
                    scope: "colgroup",
                    children: o
                })
            }), h[14] = p, h[15] = o, h[16] = d) : d = h[16], d
        };
    var en = e.i(657610),
        ea = e.i(198311);
    let ec = e => {
        let t, r, n, a, c, o, d, h, x, p = (0, l.c)(19),
            {
                products: u,
                theme: C,
                isVisible: y,
                maxWidth: m
            } = e,
            f = "dark" === (void 0 === C ? "dark" : C) ? "border-b border-slate-200 bg-white text-black" : "bg-black text-white";
        p[0] !== f ? (t = (0, s.default)("z-navigation pointer-events-none fixed top-0 left-0 z-20 w-full text-white", f), p[0] = f, p[1] = t) : t = p[1], p[2] === Symbol.for("react.memo_cache_sentinel") ? (r = {
            translateY: -48,
            opacity: 0
        }, p[2] = r) : r = p[2];
        let j = y ? 0 : -48,
            g = +!!y;
        return p[3] !== j || p[4] !== g ? (n = {
            translateY: j,
            opacity: g
        }, p[3] = j, p[4] = g, p[5] = n) : n = p[5], p[6] === Symbol.for("react.memo_cache_sentinel") ? (a = {
            translateY: {
                duration: .2,
                ease: "linear"
            },
            opacity: {
                duration: .2,
                ease: "linear"
            }
        }, c = {
            translateY: 48,
            opacity: 0
        }, p[6] = a, p[7] = c) : (a = p[6], c = p[7]), p[8] !== m ? (o = {
            maxWidth: m
        }, p[8] = m, p[9] = o) : o = p[9], p[10] !== u ? (d = u && (0, i.jsx)("ul", {
            className: `grid grid-cols-${u.length}`,
            children: u.map(eo)
        }), p[10] = u, p[11] = d) : d = p[11], p[12] !== o || p[13] !== d ? (h = (0, i.jsx)("div", {
            className: "mx-auto w-full",
            style: o,
            children: d
        }), p[12] = o, p[13] = d, p[14] = h) : h = p[14], p[15] !== h || p[16] !== t || p[17] !== n ? (x = (0, i.jsx)(ea.motion.div, {
            className: t,
            initial: r,
            animate: n,
            transition: a,
            exit: c,
            children: h
        }), p[15] = h, p[16] = t, p[17] = n, p[18] = x) : x = p[18], x
    };

    function eo(e) {
        return (0, i.jsx)("li", {
            className: "heading-5-semi-bold px-40 py-16 text-center lg:flex-none",
            children: e.title
        }, e.title)
    }
    let ed = e => {
            let s, r = (0, l.c)(14),
                {
                    handles: a,
                    discontinuedHandles: c
                } = e,
                {
                    t: o
                } = (0, t.useTranslation)("deviceComparison"),
                {
                    theme: d
                } = (0, n.useContext)(ev),
                h = "dark" === d ? "white" : "black";
            if (r[0] !== c || r[1] !== a || r[2] !== h || r[3] !== o) {
                let e, l;
                if (r[5] !== c || r[6] !== a || r[7] !== o) {
                    let l;
                    r[9] !== c || r[10] !== o ? (l = e => {
                        let l = R("screenSizePhysical", e),
                            t = R("screenSummary", e),
                            s = R("screenDetails", e);
                        return (0, i.jsxs)(B, {
                            alignTop: !0,
                            isProductDiscontinued: c ? .includes(e),
                            children: [(0, i.jsx)("div", {
                                className: "flex h-80 items-center",
                                children: (0, i.jsx)(P, {
                                    handle: e
                                })
                            }), l && (0, i.jsx)("div", {
                                className: "pt-8 heading-4-semi-bold",
                                children: o(l)
                            }), t && (0, i.jsx)("div", {
                                className: "mb-20",
                                children: o(t)
                            }), s ? .map(l => (0, i.jsx)("div", {
                                children: o(l)
                            }, `${e}-screen-${l}`))]
                        }, `${e}-screen-description-cell`)
                    }, r[9] = c, r[10] = o, r[11] = l) : l = r[11], e = a.map(l), r[5] = c, r[6] = a, r[7] = o, r[8] = e
                } else e = r[8];
                r[12] !== e ? (l = (0, i.jsx)("tr", {
                    children: e
                }), r[12] = e, r[13] = l) : l = r[13], s = (0, i.jsxs)(i.Fragment, {
                    children: [l, [{
                        key: "deviceMemory",
                        icons: {
                            "LNSComparison.320Memory": "lnsCoins",
                            "LNSComparison.1point5Memory": "moreCoins",
                            "LNSComparison.2point0Memory": "moreCoins"
                        }
                    }, {
                        key: "batteryCapacity",
                        icons: {
                            "LNSComparison.noBattery": "close",
                            "LNSComparison.upTo10Hours": "bolt",
                            "LNSComparison.weeksOnStandby": "bolt"
                        }
                    }, {
                        key: "connectivity",
                        icons: {
                            "connectivity.bluetooth": "bluetooth",
                            "connectivity.microUsb": "usb",
                            "connectivity.nfc": "nfc",
                            "connectivity.usbAtoUsbC": "usbC",
                            "connectivity.usbC": "usbC",
                            "connectivity.wirelessQiCharging": "charging"
                        }
                    }, {
                        key: "secureElementLNSComparison",
                        icons: {
                            "LNSComparison.certifiedSecureElementEAL6": "shield",
                            "LNSComparison.certifiedSecureElementEAL5": "shield"
                        }
                    }].map(e => {
                        let {
                            key: l,
                            icons: t
                        } = e;
                        return (0, i.jsx)("tr", {
                            children: a.map(e => {
                                let s = R(l, e),
                                    r = [...new Set(s ? .map(e => t[e]).filter(Boolean))],
                                    a = `${e}-${l}`;
                                return (0, i.jsxs)(B, {
                                    alignTop: !0,
                                    isProductDiscontinued: c ? .includes(e),
                                    children: [(0, i.jsx)("div", {
                                        className: "flex",
                                        children: r ? .map(e => (0, i.jsx)(n.Fragment, {
                                            children: (0, i.jsx)(x.default, {
                                                name: e,
                                                size: 32,
                                                color: h
                                            })
                                        }, `${a}-${e}`))
                                    }), s ? .map(l => (0, i.jsx)("div", {
                                        children: o(l)
                                    }, `${e}-screen-${l}`))]
                                }, `${a}-cell`)
                            })
                        }, l)
                    })]
                }), r[0] = c, r[1] = a, r[2] = h, r[3] = o, r[4] = s
            } else s = r[4];
            return s
        },
        eh = e => {
            let s, r = (0, l.c)(6),
                {
                    handles: a,
                    discontinuedHandles: c
                } = e,
                o = a.length,
                {
                    t: d
                } = (0, t.useTranslation)("deviceComparison"),
                {
                    theme: h
                } = (0, n.useContext)(ev),
                p = "dark" === h ? "white" : "black";
            return r[0] !== o || r[1] !== c || r[2] !== a || r[3] !== p || r[4] !== d ? (s = (0, i.jsx)(i.Fragment, {
                children: [{
                    key: "isClearSigning",
                    title: "LNSComparison.clearSigningSafety"
                }, {
                    key: "isLedgerLive",
                    title: "LNSComparison.ledgerLive",
                    descriptionIfYes: "LNSComparison.newestLeadingServices",
                    descriptionIfNo: "LNSComparison.newestServicesNotSuported"
                }, {
                    key: "isSupportingBlockchains",
                    title: "LNSComparison.supportOfLatestBlockchain"
                }, {
                    key: "isLedgerSync",
                    title: "LNSComparison.ledgerSync"
                }, {
                    key: "isNftManagement",
                    title: "LNSComparison.nftManagement"
                }, {
                    key: "isLedgerRecover",
                    title: "LNSComparison.ledgerRecoverNeverLoseAssets"
                }].map(e => {
                    let {
                        key: l,
                        title: t,
                        descriptionIfNo: s,
                        descriptionIfYes: r
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(I, {
                            colSpan: o,
                            label: d(t)
                        }), (0, i.jsx)("tr", {
                            children: a.map(e => {
                                let t = R(l, e),
                                    a = `${e}-${l}`;
                                return (0, i.jsx)(B, {
                                    alignTop: !0,
                                    isProductDiscontinued: c ? .includes(e),
                                    children: t ? .map(e => "yes" === e ? (0, i.jsxs)(n.Fragment, {
                                        children: [(0, i.jsx)(x.default, {
                                            name: "check2",
                                            size: 32,
                                            color: p
                                        }), r && (0, i.jsx)("div", {
                                            className: "mt-32",
                                            children: d(r)
                                        })]
                                    }, `${a}-${e}`) : (0, i.jsxs)(n.Fragment, {
                                        children: [(0, i.jsx)(x.default, {
                                            name: "close",
                                            size: 32,
                                            color: p
                                        }), s && (0, i.jsx)("div", {
                                            className: "mt-32",
                                            children: d(s)
                                        })]
                                    }, `${a}-${e}`))
                                }, `${a}-cell`)
                            })
                        }, l)]
                    })
                })
            }), r[0] = o, r[1] = c, r[2] = a, r[3] = p, r[4] = d, r[5] = s) : s = r[5], s
        },
        ex = e => {
            let s, r, n = (0, l.c)(13),
                {
                    alignTop: a,
                    handles: c,
                    discontinuedHandles: o,
                    contentKey: d
                } = e,
                h = void 0 !== a && a,
                {
                    t: x
                } = (0, t.useTranslation)("deviceComparison");
            if (n[0] !== h || n[1] !== d || n[2] !== o || n[3] !== c || n[4] !== x) {
                let e;
                n[6] !== h || n[7] !== d || n[8] !== o || n[9] !== x ? (e = e => {
                    let l = R(d, e),
                        t = `${e}-${d}`;
                    return (0, i.jsx)(B, {
                        alignTop: h,
                        isProductDiscontinued: o ? .includes(e),
                        children: l ? .length && l.map(e => (0, i.jsx)("div", {
                            children: (0, i.jsx)(W.Trans, {
                                children: x(e)
                            })
                        }, `${t}-${e}`))
                    }, `${t}-cell`)
                }, n[6] = h, n[7] = d, n[8] = o, n[9] = x, n[10] = e) : e = n[10], s = c.map(e), n[0] = h, n[1] = d, n[2] = o, n[3] = c, n[4] = x, n[5] = s
            } else s = n[5];
            return n[11] !== s ? (r = (0, i.jsx)("tr", {
                children: s
            }), n[11] = s, n[12] = r) : r = n[12], r
        },
        ep = e => {
            let s, r, n, a, c, o, d, h = (0, l.c)(18),
                {
                    handles: x,
                    discontinuedHandles: p
                } = e,
                {
                    t: u
                } = (0, t.useTranslation)("deviceComparison"),
                C = x.length;
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (s = ["body", "screenSpecSummary", "soundFeedback", "size", "weight"], h[0] = s) : s = h[0];
            let y = s;
            return h[1] !== u ? (r = u("physicalCharacteristics.heading"), h[1] = u, h[2] = r) : r = h[2], h[3] !== C || h[4] !== r ? (n = (0, i.jsx)(G, {
                colSpan: C,
                label: r
            }), h[3] = C, h[4] = r, h[5] = n) : n = h[5], h[6] !== u ? (a = u("physicalCharacteristics.body.heading"), h[6] = u, h[7] = a) : a = h[7], h[8] !== C || h[9] !== a ? (c = (0, i.jsx)(I, {
                colSpan: C,
                label: a
            }), h[8] = C, h[9] = a, h[10] = c) : c = h[10], h[11] !== p || h[12] !== x ? (o = y.map((e, l) => (0, i.jsx)(ex, {
                contentKey: e,
                handles: x,
                discontinuedHandles: p
            }, e + l)), h[11] = p, h[12] = x, h[13] = o) : o = h[13], h[14] !== n || h[15] !== c || h[16] !== o ? (d = (0, i.jsxs)(i.Fragment, {
                children: [n, c, o]
            }), h[14] = n, h[15] = c, h[16] = o, h[17] = d) : d = h[17], d
        },
        eu = e => {
            let s, r, n, a, c, o, d, h, x, p, u, C, y, m, f, j = (0, l.c)(40),
                {
                    handles: g
                } = e,
                b = g.length;
            j[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                keyPrefix: "digitalAssets"
            }, j[0] = s) : s = j[0];
            let {
                t: L
            } = (0, t.useTranslation)("deviceComparison", s);
            j[1] !== L ? (r = L("headingLink", {
                defaultValue: ""
            }), j[1] = L, j[2] = r) : r = j[2];
            let v = r;
            j[3] !== v ? (n = v ? {
                href: "/pages/supported-crypto-assets",
                label: v
            } : void 0, j[3] = v, j[4] = n) : n = j[4];
            let w = n;
            return j[5] !== L ? (a = L("heading"), j[5] = L, j[6] = a) : a = j[6], j[7] !== b || j[8] !== w || j[9] !== a ? (c = (0, i.jsx)(G, {
                colSpan: b,
                label: a,
                link: w
            }), j[7] = b, j[8] = w, j[9] = a, j[10] = c) : c = j[10], j[11] !== L ? (o = L("ledgerWallet.heading"), j[11] = L, j[12] = o) : o = j[12], j[13] !== b || j[14] !== o ? (d = (0, i.jsx)(I, {
                colSpan: b,
                label: o
            }), j[13] = b, j[14] = o, j[15] = d) : d = j[15], j[16] !== g ? (h = (0, i.jsx)(ex, {
                contentKey: "ledgerWallet",
                handles: g
            }), j[16] = g, j[17] = h) : h = j[17], j[18] !== L ? (x = L("thirdPartyWallet.heading"), j[18] = L, j[19] = x) : x = j[19], j[20] !== b || j[21] !== x ? (p = (0, i.jsx)(I, {
                colSpan: b,
                label: x
            }), j[20] = b, j[21] = x, j[22] = p) : p = j[22], j[23] !== g ? (u = (0, i.jsx)(ex, {
                contentKey: "thirdPartyWallet",
                handles: g
            }), j[23] = g, j[24] = u) : u = j[24], j[25] !== L ? (C = L("network.heading"), j[25] = L, j[26] = C) : C = j[26], j[27] !== b || j[28] !== C ? (y = (0, i.jsx)(I, {
                colSpan: b,
                label: C
            }), j[27] = b, j[28] = C, j[29] = y) : y = j[29], j[30] !== g ? (m = (0, i.jsx)(ex, {
                contentKey: "network",
                handles: g
            }), j[30] = g, j[31] = m) : m = j[31], j[32] !== p || j[33] !== u || j[34] !== y || j[35] !== m || j[36] !== c || j[37] !== d || j[38] !== h ? (f = (0, i.jsxs)(i.Fragment, {
                children: [c, d, h, p, u, y, m]
            }), j[32] = p, j[33] = u, j[34] = y, j[35] = m, j[36] = c, j[37] = d, j[38] = h, j[39] = f) : f = j[39], f
        },
        eC = e => {
            let s, r, n, a, c, o, d, h, x, p, u, C, y, m, f = (0, l.c)(34),
                {
                    handles: j
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                keyPrefix: "physicalCharacteristics"
            }, f[0] = s) : s = f[0];
            let {
                t: g
            } = (0, t.useTranslation)("deviceComparison", s), b = j.length;
            return f[1] !== g ? (r = g("heading"), f[1] = g, f[2] = r) : r = f[2], f[3] !== b || f[4] !== r ? (n = (0, i.jsx)(G, {
                colSpan: b,
                label: r
            }), f[3] = b, f[4] = r, f[5] = n) : n = f[5], f[6] !== g ? (a = g("body.heading"), f[6] = g, f[7] = a) : a = f[7], f[8] !== b || f[9] !== a ? (c = (0, i.jsx)(I, {
                colSpan: b,
                label: a
            }), f[8] = b, f[9] = a, f[10] = c) : c = f[10], f[11] !== j ? (d = (0, i.jsx)(ex, {
                contentKey: "body",
                handles: j
            }), h = (0, i.jsx)(ex, {
                contentKey: "screenSpecSummary",
                handles: j
            }), x = (0, i.jsx)(ex, {
                contentKey: "soundFeedback",
                handles: j
            }), p = (0, i.jsx)(ex, {
                contentKey: "size",
                handles: j
            }), o = (0, i.jsx)(ex, {
                contentKey: "weight",
                handles: j
            }), f[11] = j, f[12] = o, f[13] = d, f[14] = h, f[15] = x, f[16] = p) : (o = f[12], d = f[13], h = f[14], x = f[15], p = f[16]), f[17] !== g ? (u = g("battery.heading"), f[17] = g, f[18] = u) : u = f[18], f[19] !== b || f[20] !== u ? (C = (0, i.jsx)(I, {
                colSpan: b,
                label: u
            }), f[19] = b, f[20] = u, f[21] = C) : C = f[21], f[22] !== j ? (y = (0, i.jsx)(ex, {
                contentKey: "battery",
                handles: j
            }), f[22] = j, f[23] = y) : y = f[23], f[24] !== o || f[25] !== C || f[26] !== y || f[27] !== n || f[28] !== c || f[29] !== d || f[30] !== h || f[31] !== x || f[32] !== p ? (m = (0, i.jsxs)(i.Fragment, {
                children: [n, c, d, h, x, p, o, C, y]
            }), f[24] = o, f[25] = C, f[26] = y, f[27] = n, f[28] = c, f[29] = d, f[30] = h, f[31] = x, f[32] = p, f[33] = m) : m = f[33], m
        },
        ey = e => {
            let s, r, n, a, c, o, d, h, x, p, u = (0, l.c)(26),
                {
                    handles: C
                } = e,
                y = C.length;
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                keyPrefix: "security"
            }, u[0] = s) : s = u[0];
            let {
                t: m
            } = (0, t.useTranslation)("deviceComparison", s);
            return u[1] !== m ? (r = m("heading"), u[1] = m, u[2] = r) : r = u[2], u[3] !== y || u[4] !== r ? (n = (0, i.jsx)(G, {
                colSpan: y,
                label: r
            }), u[3] = y, u[4] = r, u[5] = n) : n = u[5], u[6] !== m ? (a = m("backupSolutions.heading"), u[6] = m, u[7] = a) : a = u[7], u[8] !== y || u[9] !== a ? (c = (0, i.jsx)(I, {
                colSpan: y,
                label: a
            }), u[8] = y, u[9] = a, u[10] = c) : c = u[10], u[11] !== C ? (o = (0, i.jsx)(ex, {
                contentKey: "backupSolutions",
                handles: C
            }), u[11] = C, u[12] = o) : o = u[12], u[13] !== m ? (d = m("secureElement.heading"), u[13] = m, u[14] = d) : d = u[14], u[15] !== y || u[16] !== d ? (h = (0, i.jsx)(I, {
                colSpan: y,
                label: d
            }), u[15] = y, u[16] = d, u[17] = h) : h = u[17], u[18] !== C ? (x = (0, i.jsx)(ex, {
                contentKey: "secureElement",
                handles: C
            }), u[18] = C, u[19] = x) : x = u[19], u[20] !== n || u[21] !== c || u[22] !== o || u[23] !== h || u[24] !== x ? (p = (0, i.jsxs)(i.Fragment, {
                children: [n, c, o, h, x]
            }), u[20] = n, u[21] = c, u[22] = o, u[23] = h, u[24] = x, u[25] = p) : p = u[25], p
        },
        em = e => {
            let s, r, n, a, c, o, d = (0, l.c)(13),
                {
                    handles: h
                } = e,
                x = h.length;
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                keyPrefix: "osCompatibility"
            }, d[0] = s) : s = d[0];
            let {
                t: p
            } = (0, t.useTranslation)("deviceComparison", s);
            return d[1] !== p ? (r = p("heading"), d[1] = p, d[2] = r) : r = d[2], d[3] !== x || d[4] !== r ? (n = (0, i.jsx)(G, {
                colSpan: x,
                label: r
            }), d[3] = x, d[4] = r, d[5] = n) : n = d[5], d[6] !== h ? (a = (0, i.jsx)(ex, {
                alignTop: !0,
                contentKey: "osCompatibilityDesktop",
                handles: h
            }), c = (0, i.jsx)(ex, {
                alignTop: !0,
                contentKey: "osCompatibilityMobile",
                handles: h
            }), d[6] = h, d[7] = a, d[8] = c) : (a = d[7], c = d[8]), d[9] !== n || d[10] !== a || d[11] !== c ? (o = (0, i.jsxs)(i.Fragment, {
                children: [n, a, c]
            }), d[9] = n, d[10] = a, d[11] = c, d[12] = o) : o = d[12], o
        },
        ef = e => {
            let t, s = (0, l.c)(2),
                {
                    handles: r
                } = e;
            return s[0] !== r ? (t = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(ey, {
                    handles: r
                }), (0, i.jsx)(eu, {
                    handles: r
                }), (0, i.jsx)(em, {
                    handles: r
                }), (0, i.jsx)(eC, {
                    handles: r
                })]
            }), s[0] = r, s[1] = t) : t = s[1], t
        },
        ej = {
            classic: "columnGroupHeadings.classic",
            touchscreen: "columnGroupHeadings.touchscreen"
        },
        eg = e => ({
            "ledger-nano-x": "classic",
            "ledger-nano-s-plus": "classic",
            "ledger-stax": "touchscreen",
            "ledger-flex": "touchscreen",
            "ledger-nano-gen5": "touchscreen"
        })[e],
        eb = e => e.handles.length < 2,
        eL = e => {
            let s, r, n, a, c, o = (0, l.c)(8),
                {
                    handles: d
                } = e;
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                keyPrefix: "ui"
            }, o[0] = s) : s = o[0];
            let {
                t: h
            } = (0, t.useTranslation)("deviceComparison", s);
            if (o[1] !== d) {
                a = Symbol.for("react.early_return_sentinel");
                e: {
                    r = [];
                    let e = null;
                    for (let i of d) {
                        let l = eg(i);
                        if (!l) {
                            a = null;
                            break e
                        }
                        e && e.deviceType === l ? e.handles.push(i) : (e = {
                            deviceType: l,
                            handles: [i]
                        }, r.push(e))
                    }
                    n = r.some(eb) || r.length < 2
                }
                o[1] = d, o[2] = r, o[3] = n, o[4] = a
            } else r = o[2], n = o[3], a = o[4];
            return a !== Symbol.for("react.early_return_sentinel") ? a : n ? null : (o[5] !== r || o[6] !== h ? (c = (0, i.jsx)("tr", {
                className: "hidden md:table-row",
                children: r.map((e, l) => (0, i.jsx)(K, {
                    colSpan: e.handles.length,
                    label: h(ej[e.deviceType])
                }, `${e.deviceType}-${l}`))
            }), o[5] = r, o[6] = h, o[7] = c) : c = o[7], c)
        },
        ev = (0, n.createContext)({
            instance: 0,
            theme: "light"
        }),
        ew = e => {
            let t, r, a, c, o, d, h, x, p, u, C, y, m, f, j, g, b, L, v, w, V, k, S = (0, l.c)(78),
                {
                    hideExtendedInformation: H,
                    instance: M,
                    productsToCompare: Z,
                    selectedVariants: N,
                    setSelectedVariants: R,
                    theme: B,
                    template: D,
                    hasStickyHeader: $,
                    buyMode: F
                } = e,
                U = void 0 === M ? 0 : M,
                A = void 0 === D ? "standard" : D;
            if (S[0] !== Z || S[1] !== N) {
                let e, i;
                S[5] !== N ? (e = e => N[e.handle], S[5] = N, S[6] = e) : e = S[6], r = Z.filter(e), S[7] !== Z ? (i = Z.filter(eV).map(ek), S[7] = Z, S[8] = i) : i = S[8], t = i, a = r.map(eS), S[0] = Z, S[1] = N, S[2] = t, S[3] = r, S[4] = a
            } else t = S[2], r = S[3], a = S[4];
            let O = a,
                T = `${Math.min(336*Z.length,1344)}px`,
                [P, E] = (0, n.useState)(H),
                [z, W] = (0, n.useState)(!1),
                G = (0, n.useRef)(null);
            S[9] === Symbol.for("react.memo_cache_sentinel") ? (c = {}, S[9] = c) : c = S[9];
            let K = (0, en.useInView)(G, c),
                I = (0, n.useRef)(null);
            S[10] === Symbol.for("react.memo_cache_sentinel") ? (o = {}, S[10] = o) : o = S[10];
            let Q = (0, en.useInView)(I, o);
            S[11] !== Q ? (d = () => {
                let e = G.current ? .getBoundingClientRect().bottom ? ? 0,
                    i = I.current ? .getBoundingClientRect().bottom ? ? 0;
                W(e < 0 && !Q && i > 0)
            }, S[11] = Q, S[12] = d) : d = S[12], S[13] !== Q || S[14] !== K ? (h = [K, Q], S[13] = Q, S[14] = K, S[15] = h) : h = S[15], (0, n.useEffect)(d, h), S[16] !== $ || S[17] !== z || S[18] !== T || S[19] !== r || S[20] !== B ? (x = $ && (0, i.jsx)(ec, {
                products: r,
                theme: B,
                isVisible: z,
                maxWidth: T
            }), S[16] = $, S[17] = z, S[18] = T, S[19] = r, S[20] = B, S[21] = x) : x = S[21], S[22] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, i.jsx)("div", {
                ref: G
            }), S[22] = p) : p = S[22], S[23] !== U || S[24] !== B ? (u = {
                instance: U,
                theme: B
            }, S[23] = U, S[24] = B, S[25] = u) : u = S[25];
            let Y = "dark" === B && "text-white",
                q = "light" === B && "text-neutral-800";
            S[26] !== Y || S[27] !== q ? (C = (0, s.default)("mx-auto w-full table-fixed", Y, q), S[26] = Y, S[27] = q, S[28] = C) : C = S[28], S[29] !== T ? (y = {
                maxWidth: T
            }, S[29] = T, S[30] = y) : y = S[30];
            let J = "dark" === B && "border-neutral-600",
                X = "light" === B && "border-neutral-200";
            return S[31] !== J || S[32] !== X ? (m = (0, s.default)("border-b", J, X), S[31] = J, S[32] = X, S[33] = m) : m = S[33], S[34] !== O ? (f = (0, i.jsx)(eL, {
                handles: O
            }), S[34] = O, S[35] = f) : f = S[35], S[36] !== F || S[37] !== t || S[38] !== r || S[39] !== N || S[40] !== R || S[41] !== B ? (j = (0, i.jsx)(_, {
                theme: B,
                productsToCompare: r,
                selectedVariants: N,
                setSelectedVariants: R,
                discontinuedHandles: t,
                buyMode: F
            }), S[36] = F, S[37] = t, S[38] = r, S[39] = N, S[40] = R, S[41] = B, S[42] = j) : j = S[42], S[43] !== m || S[44] !== f || S[45] !== j ? (g = (0, i.jsxs)("thead", {
                className: m,
                children: [f, j]
            }), S[43] = m, S[44] = f, S[45] = j, S[46] = g) : g = S[46], S[47] !== t || S[48] !== O || S[49] !== A ? (b = "LNSupgrade" === A && (0, i.jsxs)("tbody", {
                children: [(0, i.jsx)(ed, {
                    handles: O,
                    discontinuedHandles: t
                }), (0, i.jsx)(eh, {
                    handles: O,
                    discontinuedHandles: t
                }), (0, i.jsx)(ep, {
                    handles: O,
                    discontinuedHandles: t
                })]
            }), S[47] = t, S[48] = O, S[49] = A, S[50] = b) : b = S[50], S[51] !== O || S[52] !== P || S[53] !== A || S[54] !== B ? (L = "standard" === A && (0, i.jsxs)("tbody", {
                children: [(0, i.jsx)(es, {
                    handles: O
                }), P && (0, i.jsx)(er, {
                    colSpan: O.length,
                    setIsBottomHidden: E,
                    theme: B,
                    dataCsOverrideId: "expand-comparison"
                }), !P && (0, i.jsx)(ef, {
                    handles: O
                })]
            }), S[51] = O, S[52] = P, S[53] = A, S[54] = B, S[55] = L) : L = S[55], S[56] !== F || S[57] !== t || S[58] !== P || S[59] !== r || S[60] !== N || S[61] !== R || S[62] !== A || S[63] !== B ? (v = (!P || "LNSupgrade" === A) && (0, i.jsx)("tfoot", {
                ref: I,
                className: (0, s.default)("border-t", "dark" === B && "border-neutral-600", "light" === B && "border-neutral-200"),
                children: (0, i.jsx)(_, {
                    theme: B,
                    productsToCompare: r,
                    selectedVariants: N,
                    setSelectedVariants: R,
                    discontinuedHandles: t,
                    buyMode: F
                })
            }), S[56] = F, S[57] = t, S[58] = P, S[59] = r, S[60] = N, S[61] = R, S[62] = A, S[63] = B, S[64] = v) : v = S[64], S[65] !== C || S[66] !== y || S[67] !== g || S[68] !== b || S[69] !== L || S[70] !== v ? (w = (0, i.jsxs)("table", {
                className: C,
                style: y,
                children: [g, b, L, v]
            }), S[65] = C, S[66] = y, S[67] = g, S[68] = b, S[69] = L, S[70] = v, S[71] = w) : w = S[71], S[72] !== u || S[73] !== w ? (V = (0, i.jsx)(ev.Provider, {
                value: u,
                children: w
            }), S[72] = u, S[73] = w, S[74] = V) : V = S[74], S[75] !== V || S[76] !== x ? (k = (0, i.jsxs)(i.Fragment, {
                children: [x, p, V]
            }), S[75] = V, S[76] = x, S[77] = k) : k = S[77], k
        };

    function eV(e) {
        return e.discontinuedProduct
    }

    function ek(e) {
        return e.handle
    }

    function eS(e) {
        return e.handle
    }
    let eH = e => {
        let i, t, s, r, a = (0, l.c)(7);
        a[0] !== e ? (i = e.reduce(eM, {}), a[0] = e, a[1] = i) : i = a[1];
        let [c, o] = (0, n.useState)(i);
        return a[2] !== e ? (t = () => {
            o(i => {
                let l = !1,
                    t = { ...i
                    };
                return e.forEach(e => {
                    i[e.handle] || (t[e.handle] = e.variants[0], l = !0)
                }), l ? t : i
            })
        }, s = [e], a[2] = e, a[3] = t, a[4] = s) : (t = a[3], s = a[4]), (0, n.useEffect)(t, s), a[5] !== c ? (r = {
            selectedVariants: c,
            setSelectedVariants: o
        }, a[5] = c, a[6] = r) : r = a[6], r
    };

    function eM(e, i) {
        return { ...e,
            [i.handle]: i.variants[0]
        }
    }
    let e_ = e => {
            let a, c, o, d, h = (0, l.c)(23),
                {
                    productsToCompare: x,
                    theme: p,
                    template: u,
                    hideExtendedInformation: C,
                    hasStickyHeader: y,
                    buyMode: m
                } = e,
                f = void 0 === p ? "light" : p,
                j = void 0 === u ? "standard" : u,
                g = void 0 !== C && C,
                b = void 0 !== y && y,
                {
                    t: L
                } = (0, t.useTranslation)("sections"),
                {
                    product1: v,
                    product2: w,
                    setProduct1: V,
                    setProduct2: k,
                    selectedProducts: S
                } = (e => {
                    let i, t, s, r = (0, l.c)(14),
                        [a, c] = (0, n.useState)(e[0]),
                        [o, d] = (0, n.useState)(e[1]);
                    r[0] !== a.handle || r[1] !== o.handle ? (i = [a.handle, o.handle], r[0] = a.handle, r[1] = o.handle, r[2] = i) : i = r[2];
                    let h = i;
                    if (r[3] !== e || r[4] !== h) {
                        let i, l;
                        r[6] !== h ? (i = e => h.includes(e.handle), r[6] = h, r[7] = i) : i = r[7], r[8] !== h ? (l = (e, i) => h.indexOf(e.handle) - h.indexOf(i.handle), r[8] = h, r[9] = l) : l = r[9], t = e.filter(i).sort(l), r[3] = e, r[4] = h, r[5] = t
                    } else t = r[5];
                    let x = t;
                    return r[10] !== a || r[11] !== o || r[12] !== x ? (s = {
                        product1: a,
                        setProduct1: c,
                        product2: o,
                        setProduct2: d,
                        selectedProducts: x
                    }, r[10] = a, r[11] = o, r[12] = x, r[13] = s) : s = r[13], s
                })(x),
                {
                    selectedVariants: H,
                    setSelectedVariants: M
                } = eH(x),
                _ = x.length > 4 ? "lg:hidden" : "md:hidden";
            return h[0] !== _ ? (a = (0, s.default)(_), h[0] = _, h[1] = a) : a = h[1], h[2] !== v || h[3] !== w || h[4] !== x || h[5] !== V || h[6] !== k || h[7] !== L || h[8] !== f ? (c = x.length > 2 && (0, i.jsxs)("div", {
                className: "mb-20 flex flex-col gap-12",
                children: [(0, i.jsx)("p", {
                    className: (0, s.default)("text-center body-1-semi-bold", "dark" === f && "text-white"),
                    children: L("comparison.selectLabel")
                }), (0, i.jsx)(r.default, {
                    theme: f,
                    productsToCompare: x,
                    product1: v,
                    product2: w,
                    setProduct: V
                }), (0, i.jsx)(r.default, {
                    theme: f,
                    productsToCompare: x,
                    product1: w,
                    product2: v,
                    setProduct: k
                })]
            }), h[2] = v, h[3] = w, h[4] = x, h[5] = V, h[6] = k, h[7] = L, h[8] = f, h[9] = c) : c = h[9], h[10] !== m || h[11] !== b || h[12] !== g || h[13] !== S || h[14] !== H || h[15] !== M || h[16] !== j || h[17] !== f ? (o = (0, i.jsx)(ew, {
                hideExtendedInformation: g,
                instance: 0,
                productsToCompare: S,
                selectedVariants: H,
                setSelectedVariants: M,
                theme: f,
                template: j,
                hasStickyHeader: b,
                buyMode: m
            }), h[10] = m, h[11] = b, h[12] = g, h[13] = S, h[14] = H, h[15] = M, h[16] = j, h[17] = f, h[18] = o) : o = h[18], h[19] !== a || h[20] !== c || h[21] !== o ? (d = (0, i.jsxs)("div", {
                className: a,
                children: [c, o]
            }), h[19] = a, h[20] = c, h[21] = o, h[22] = d) : d = h[22], d
        },
        eZ = e => {
            let t, s = (0, l.c)(9),
                {
                    productsToCompare: r,
                    theme: n,
                    template: a,
                    hideExtendedInformation: c,
                    hasStickyHeader: o,
                    buyMode: d
                } = e,
                h = void 0 === n ? "light" : n,
                x = void 0 === a ? "standard" : a,
                p = void 0 !== c && c,
                u = void 0 !== o && o,
                {
                    selectedVariants: C,
                    setSelectedVariants: y
                } = eH(r);
            return s[0] !== d || s[1] !== u || s[2] !== p || s[3] !== r || s[4] !== C || s[5] !== y || s[6] !== x || s[7] !== h ? (t = (0, i.jsx)("div", {
                className: "hidden md:block",
                children: (0, i.jsx)(ew, {
                    hideExtendedInformation: p,
                    instance: 1,
                    productsToCompare: r,
                    selectedVariants: C,
                    setSelectedVariants: y,
                    theme: h,
                    template: x,
                    hasStickyHeader: u,
                    buyMode: d
                })
            }), s[0] = d, s[1] = u, s[2] = p, s[3] = r, s[4] = C, s[5] = y, s[6] = x, s[7] = h, s[8] = t) : t = s[8], t
        },
        eN = e => {
            let i, t = (0, l.c)(5),
                {
                    isDeviceAvailable: s
                } = (0, y.default)();
            if (t[0] !== s || t[1] !== e) {
                let l;
                t[3] !== s ? (l = e => e.variants.some(e => s(e.sku)), t[3] = s, t[4] = l) : l = t[4], i = e.filter(l), t[0] = s, t[1] = e, t[2] = i
            } else i = t[2];
            return i
        };

    function eR(e) {
        return e.length >= 2
    }
    e.s(["default", 0, e => {
        let t, s, r, n, a, c = (0, l.c)(12);
        c[0] !== e ? ({
            productsToCompareByDevice: s,
            ...t
        } = e, c[0] = e, c[1] = t, c[2] = s) : (t = c[1], s = c[2]);
        let {
            standard: o,
            mobile: d
        } = s, h = eN(d), x = eN(o);
        return c[3] !== h || c[4] !== t ? (r = eR(h) ? (0, i.jsx)(e_, { ...t,
            productsToCompare: h
        }) : null, c[3] = h, c[4] = t, c[5] = r) : r = c[5], c[6] !== x || c[7] !== t ? (n = eR(x) ? (0, i.jsx)(eZ, { ...t,
            productsToCompare: x
        }) : null, c[6] = x, c[7] = t, c[8] = n) : n = c[8], c[9] !== r || c[10] !== n ? (a = (0, i.jsxs)(i.Fragment, {
            children: [r, n]
        }), c[9] = r, c[10] = n, c[11] = a) : a = c[11], a
    }], 522441)
}]);

//# sourceMappingURL=0ng1prdzc.sfw.js.map