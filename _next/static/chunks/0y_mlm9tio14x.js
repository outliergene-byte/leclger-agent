(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 489180, e => {
    "use strict";
    var a = e.i(391398),
        l = e.i(261576),
        t = e.i(295485),
        r = e.i(648684),
        i = e.i(191788),
        s = e.i(253770),
        n = e.i(345082),
        d = e.i(999750),
        o = e.i(43039),
        c = e.i(773184),
        m = e.i(657510),
        u = e.i(126019);
    e.i(945210);
    var h = e.i(381234),
        x = e.i(981047),
        f = e.i(276284),
        p = e.i(108113),
        g = e.i(16951),
        v = e.i(708235),
        b = e.i(236663);
    e.i(310356);
    var j = e.i(621351);
    e.i(151153);
    var y = e.i(46050);
    e.i(349837);
    var w = e.i(64498);
    e.i(195512);
    var C = e.i(847562),
        N = e.i(150077);
    e.i(867094);
    var k = e.i(725524);
    e.i(872044);
    var _ = e.i(627528);
    e.i(259936);
    var S = e.i(838779),
        z = e.i(725069),
        T = e.i(547627),
        I = e.i(766442),
        O = e.i(212376),
        F = e.i(30210),
        V = e.i(309189);
    let L = e => {
            let t, r, i = (0, l.c)(27),
                {
                    variant: s,
                    notifyMeFormName: n,
                    theme: d,
                    buyMode: o,
                    variants: c,
                    offerTitle: m,
                    priceConversion: u,
                    priceLabel: h,
                    isOfferAvailable: x,
                    size: f
                } = e,
                p = void 0 === u ? null : u,
                g = void 0 === h ? null : h,
                v = void 0 === f ? "medium" : f,
                {
                    isUSAvailable: b
                } = (0, I.default)(),
                {
                    isDeviceAvailable: j
                } = (0, O.default)();
            i[0] !== j || i[1] !== x || i[2] !== b || i[3] !== s ? (t = x && b(s.id) && j(s.sku), i[0] = j, i[1] = x, i[2] = b, i[3] = s, i[4] = t) : t = i[4];
            let y = t;
            if ("buy-it-now" === o && s) {
                let e, l = `${m}-buy-it-now`;
                return i[5] !== y || i[6] !== v || i[7] !== l || i[8] !== s.id || i[9] !== s.sku ? (e = (0, a.jsx)(T.default, {
                    variantId: s.id,
                    sku: s.sku,
                    isOfferAvailable: y,
                    dataCsOverrideId: l,
                    size: v
                }), i[5] = y, i[6] = v, i[7] = l, i[8] = s.id, i[9] = s.sku, i[10] = e) : e = i[10], e
            }
            if ("device-unlock-lns" === o && s) {
                let e;
                return i[11] !== p || i[12] !== g || i[13] !== d || i[14] !== s ? (e = (0, a.jsx)(F.default, {
                    theme: d,
                    productVariant: s,
                    priceConversion: p,
                    priceLabel: g
                }), i[11] = p, i[12] = g, i[13] = d, i[14] = s, i[15] = e) : e = i[15], e
            }
            if ("cro-campaign" === o && s) {
                let e, l = `${m}-exclusive-offer`;
                return i[16] !== v || i[17] !== l || i[18] !== s ? (e = (0, a.jsx)(V.default, {
                    variant: s,
                    size: v,
                    dataCsOverrideId: l
                }), i[16] = v, i[17] = l, i[18] = s, i[19] = e) : e = i[19], e
            }
            let w = `${m}-atc`;
            return i[20] !== y || i[21] !== n || i[22] !== v || i[23] !== w || i[24] !== d || i[25] !== c ? (r = (0, a.jsx)(z.default, {
                variants: c,
                notifyMeFormName: n,
                isOfferAvailable: y,
                dataCsOverrideId: w,
                size: v,
                theme: d
            }), i[20] = y, i[21] = n, i[22] = v, i[23] = w, i[24] = d, i[25] = c, i[26] = r) : r = i[26], r
        },
        P = e => {
            let t, r, i, s, n, d, o, c, m, z, T, I, O, F, V, P, R, D = (0, l.c)(80),
                {
                    horizontal: B,
                    theme: $,
                    href: A,
                    isRecoverCard: E,
                    scrollToHighlightedBlock: H,
                    tag: M,
                    recover: U,
                    cardImageUrl: W,
                    offerTitle: X,
                    variants: Y,
                    currentVariant: q,
                    setCurrentVariant: G,
                    primaryVariants: K,
                    secondaryVariants: J,
                    buyMode: Q,
                    freeShipping: Z,
                    hideFreeShippingForNanoX: ee,
                    isBodyCentered: ea,
                    isCombinedAddToCart: el,
                    features: et,
                    reviews: er,
                    cryptoVoucher: ei,
                    priceConversion: es,
                    priceLabel: en,
                    variantDiscountLabel: ed,
                    isOfferAvailable: eo
                } = e,
                ec = E && H || void 0;
            return D[0] !== M || D[1] !== $ ? (t = M && (0, a.jsx)(j.default, {
                label: M,
                theme: $,
                variant: "purple"
            }), D[0] = M, D[1] = $, D[2] = t) : t = D[2], D[3] !== W || D[4] !== q || D[5] !== X || D[6] !== U ? (r = U && q ? (0, a.jsx)(v.CardImageWithRecover, {
                currentVariant: q,
                productHandle: q.handle,
                recoverCardImageUrl: U.image.url
            }) : (0, a.jsx)(u.default, {
                src: W,
                alt: "",
                fill: !0,
                priority: !0,
                sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
                className: "object-contain",
                "data-cs-override-id": `${X}-picture`
            }), D[3] = W, D[4] = q, D[5] = X, D[6] = U, D[7] = r) : r = D[7], D[8] !== A || D[9] !== ec || D[10] !== t || D[11] !== r ? (i = (0, a.jsxs)(x.CardHeader, {
                href: A,
                onClick: ec,
                children: [t, r]
            }), D[8] = A, D[9] = ec, D[10] = t, D[11] = r, D[12] = i) : i = D[12], D[13] !== A || D[14] !== X ? (s = (0, a.jsx)(g.CardTitle, {
                title: X,
                href: A
            }), D[13] = A, D[14] = X, D[15] = s) : s = D[15], D[16] !== q || D[17] !== $ ? (n = q ? .promoInfoText && (0, a.jsx)(w.default, {
                promoInfoText: q.promoInfoText,
                promoInfoLink: q.promoInfoLink,
                theme: $
            }), D[16] = q, D[17] = $, D[18] = n) : n = D[18], D[19] !== q || D[20] !== el || D[21] !== es || D[22] !== en || D[23] !== $ || D[24] !== ed || D[25] !== Y ? (d = el ? (0, a.jsx)(C.default, {
                variants: Y
            }) : (0, a.jsx)(N.default, {
                variant: q,
                size: "large",
                theme: $,
                discountLabel: en || ed,
                showDiscount: !!es || !!ed,
                ...es && {
                    manualDiscountConversion: es,
                    showStrikedPrice: !0
                }
            }), D[19] = q, D[20] = el, D[21] = es, D[22] = en, D[23] = $, D[24] = ed, D[25] = Y, D[26] = d) : d = D[26], D[27] !== Q || D[28] !== ei || D[29] !== $ ? (o = ei && "device-unlock-lns" !== Q && (0, a.jsx)(_.default, {
                label: ei.cardLabel,
                theme: $,
                cryptoCurrency: ei.cryptoCurrency,
                ...ei.link && {
                    drawer: ei.link
                }
            }), D[27] = Q, D[28] = ei, D[29] = $, D[30] = o) : o = D[30], D[31] !== er || D[32] !== $ ? (c = er && (0, a.jsx)(y.default, {
                rating: er.rating,
                totalReviews: er.totalReviews,
                color: "dark" === $ ? "white" : "black"
            }), D[31] = er, D[32] = $, D[33] = c) : c = D[33], D[34] !== s || D[35] !== n || D[36] !== d || D[37] !== o || D[38] !== c ? (m = (0, a.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [s, n, d, o, c]
            }), D[34] = s, D[35] = n, D[36] = d, D[37] = o, D[38] = c, D[39] = m) : m = D[39], D[40] !== et || D[41] !== $ ? (z = et.length > 0 && (0, a.jsx)("div", {
                className: "flex flex-wrap gap-8",
                children: et.map(e => {
                    let {
                        title: l,
                        icon: t,
                        variant: r
                    } = e;
                    return (0, a.jsx)(S.default, {
                        theme: $,
                        size: "small",
                        label: l,
                        icon: t,
                        variant: r
                    }, l)
                })
            }), D[40] = et, D[41] = $, D[42] = z) : z = D[42], D[43] !== q || D[44] !== K || D[45] !== J || D[46] !== G || D[47] !== $ || D[48] !== Y ? (T = q && (0, a.jsx)(k.default, {
                className: "flex-col",
                currentVariant: q,
                onChange: G,
                variants: Y,
                primaryVariants: K,
                secondaryVariants: J,
                theme: $
            }), D[43] = q, D[44] = K, D[45] = J, D[46] = G, D[47] = $, D[48] = Y, D[49] = T) : T = D[49], D[50] !== Q || D[51] !== q || D[52] !== eo || D[53] !== X || D[54] !== es || D[55] !== en || D[56] !== $ || D[57] !== Y ? (I = (0, a.jsx)(L, {
                variant: q,
                theme: $,
                buyMode: Q,
                variants: Y,
                offerTitle: X,
                isOfferAvailable: eo,
                priceConversion: es,
                priceLabel: en,
                size: "medium"
            }), D[50] = Q, D[51] = q, D[52] = eo, D[53] = X, D[54] = es, D[55] = en, D[56] = $, D[57] = Y, D[58] = I) : I = D[58], D[59] !== Z || D[60] !== ee || D[61] !== $ ? (O = Z && !ee && (0, a.jsx)(b.CardFreeShipping, {
                theme: $
            }), D[59] = Z, D[60] = ee, D[61] = $, D[62] = O) : O = D[62], D[63] !== I || D[64] !== O ? (F = (0, a.jsxs)("div", {
                className: "flex flex-wrap justify-between gap-16",
                children: [I, O]
            }), D[63] = I, D[64] = O, D[65] = F) : F = D[65], D[66] !== ea || D[67] !== T || D[68] !== F ? (V = (0, a.jsxs)(p.CardFooter, {
                isCardBodyCentered: ea,
                children: [T, F]
            }), D[66] = ea, D[67] = T, D[68] = F, D[69] = V) : V = D[69], D[70] !== ea || D[71] !== m || D[72] !== z || D[73] !== V ? (P = (0, a.jsxs)(f.CardBody, {
                isCardBodyCentered: ea,
                children: [m, z, V]
            }), D[70] = ea, D[71] = m, D[72] = z, D[73] = V, D[74] = P) : P = D[74], D[75] !== B || D[76] !== P || D[77] !== i || D[78] !== $ ? (R = (0, a.jsxs)(h.CardBorder, {
                className: "h-full scroll-smooth",
                horizontal: B,
                theme: $,
                children: [i, P]
            }), D[75] = B, D[76] = P, D[77] = i, D[78] = $, D[79] = R) : R = D[79], R
        };
    e.i(366539), e.i(923160);
    var R = e.i(217863);
    e.i(305231);
    var D = e.i(913473),
        B = e.i(682129),
        $ = e.i(383375),
        A = e.i(938936),
        E = e.i(628710),
        H = e.i(495854),
        M = e.i(41158);
    let U = e => {
            let t, r = (0, l.c)(3),
                {
                    href: i,
                    children: s
                } = e;
            return r[0] !== s || r[1] !== i ? (t = i ? (0, a.jsx)(M.default, {
                href: i,
                className: "block flex h-full flex-col gap-12",
                children: s
            }) : (0, a.jsx)(a.Fragment, {
                children: s
            }), r[0] = s, r[1] = i, r[2] = t) : t = r[2], t
        },
        W = e => {
            let t, r, i, s, n, d, o, c = (0, l.c)(25),
                {
                    tags: m,
                    theme: u
                } = e;
            if (c[0] !== m || c[1] !== u) {
                let e;
                c[3] !== u ? (e = e => {
                    let {
                        title: l,
                        icon: t,
                        variant: r
                    } = e;
                    return (0, a.jsx)(S.default, {
                        label: l,
                        icon: t,
                        variant: r,
                        theme: u,
                        size: "small"
                    }, l)
                }, c[3] = u, c[4] = e) : e = c[4], t = m.map(e), c[0] = m, c[1] = u, c[2] = t
            } else t = c[2];
            if (c[5] !== t ? (r = (0, a.jsx)("div", {
                    className: "hidden flex-1 flex-col items-start gap-8 sm:flex sm:flex-wrap sm:items-center lg:hidden xl:flex xl:flex-wrap xl:items-center",
                    children: t
                }), c[5] = t, c[6] = r) : r = c[6], c[7] !== m || c[8] !== u) {
                let e;
                c[10] !== u ? (e = e => {
                    let {
                        title: l,
                        variant: t
                    } = e;
                    return (0, a.jsx)(S.default, {
                        label: l,
                        variant: t,
                        theme: u,
                        size: "small"
                    }, l)
                }, c[10] = u, c[11] = e) : e = c[11], i = m.map(e), c[7] = m, c[8] = u, c[9] = i
            } else i = c[9];
            if (c[12] !== i ? (s = (0, a.jsx)("div", {
                    className: "hidden flex-1 flex-col items-start gap-8 lg:flex lg:flex-wrap lg:items-center xl:hidden",
                    children: i
                }), c[12] = i, c[13] = s) : s = c[13], c[14] !== m || c[15] !== u) {
                let e;
                c[17] !== u ? (e = e => {
                    let {
                        title: l,
                        icon: t,
                        variant: r
                    } = e;
                    return (0, a.jsx)(S.default, {
                        label: l,
                        icon: t,
                        size: "tiny",
                        variant: r,
                        theme: u
                    }, l)
                }, c[17] = u, c[18] = e) : e = c[18], n = m.map(e), c[14] = m, c[15] = u, c[16] = n
            } else n = c[16];
            return c[19] !== n ? (d = (0, a.jsx)("div", {
                className: "flex flex-1 flex-col items-start gap-8 sm:hidden sm:items-center",
                children: n
            }), c[19] = n, c[20] = d) : d = c[20], c[21] !== r || c[22] !== s || c[23] !== d ? (o = (0, a.jsxs)(a.Fragment, {
                children: [r, s, d]
            }), c[21] = r, c[22] = s, c[23] = d, c[24] = o) : o = c[24], o
        },
        X = e => {
            let t, r, s, n, d, o, c, m, h, x, f, p, g, v, b, y, w, C, k, S, z, T = (0, l.c)(71),
                {
                    title: I,
                    subtitle: O,
                    tags: F,
                    rating: V,
                    hudTag: P,
                    cryptoVoucher: M,
                    currentVariant: X,
                    variants: Y,
                    primaryVariants: q,
                    secondaryVariants: G,
                    setCurrentVariant: K,
                    theme: J,
                    href: Q,
                    image: Z
                } = e;
            T[0] !== F ? (t = void 0 === F ? [] : F, T[0] = F, T[1] = t) : t = T[1];
            let ee = t;
            T[2] !== Y ? (r = void 0 === Y ? [] : Y, T[2] = Y, T[3] = r) : r = T[3];
            let ea = r,
                el = void 0 === J ? "light" : J,
                [et, er] = (0, i.useState)(!!Z ? .url),
                ei = et ? Z ? .url : X ? .image.url;
            T[4] !== P || T[5] !== el ? (s = P && (0, a.jsx)(j.default, {
                label: P,
                theme: el,
                variant: "purple"
            }), T[4] = P, T[5] = el, T[6] = s) : s = T[6];
            let es = !et && "bg-neutral-100 sm:bg-transparent";
            return T[7] !== es ? (n = (0, H.default)("relative h-[150px] rounded-xs sm:rounded-none md:h-[230px]", es), T[7] = es, T[8] = n) : n = T[8], T[9] !== ei || T[10] !== et || T[11] !== X ? .image || T[12] !== Z ? .title ? (d = ei && (0, a.jsx)(u.default, {
                src: ei,
                alt: Z ? .title || X ? .image.description || "",
                fill: !0,
                className: (0, H.default)(et ? "object-cover" : "object-contain", "rounded-xs sm:rounded-none"),
                priority: !0,
                sizes: "(max-width: 768px) 168px, (max-width: 1024px) 352px, 230px",
                "data-cs-override-id": "small-offer-card-picture"
            }), T[9] = ei, T[10] = et, T[11] = X ? .image, T[12] = Z ? .title, T[13] = d) : d = T[13], T[14] !== n || T[15] !== d ? (o = (0, a.jsx)("div", {
                className: n,
                children: d
            }), T[14] = n, T[15] = d, T[16] = o) : o = T[16], T[17] !== Q || T[18] !== o || T[19] !== s ? (c = (0, a.jsxs)(E.default, {
                size: "small",
                href: Q,
                children: [s, o]
            }), T[17] = Q, T[18] = o, T[19] = s, T[20] = c) : c = T[20], T[21] !== I ? (m = I && (0, a.jsx)(A.default, {
                title: I,
                size: "small"
            }), T[21] = I, T[22] = m) : m = T[22], T[23] !== O || T[24] !== el ? (h = O && (0, a.jsx)("p", {
                className: (0, H.default)("body-3 sm:body-1 sm:font-normal sm:text-center", "dark" === el ? "text-neutral-400" : "text-neutral-600"),
                children: O
            }), T[23] = O, T[24] = el, T[25] = h) : h = T[25], T[26] !== m || T[27] !== h ? (x = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 sm:items-center sm:text-center",
                children: [m, h]
            }), T[26] = m, T[27] = h, T[28] = x) : x = T[28], T[29] !== ee || T[30] !== el ? (f = ee.length > 0 && (0, a.jsx)(W, {
                tags: ee,
                theme: el
            }), T[29] = ee, T[30] = el, T[31] = f) : f = T[31], T[32] !== V || T[33] !== el ? (p = V && (0, a.jsx)(R.default, {
                rating: V,
                size: "small",
                color: "dark" === el ? "white" : "black"
            }), T[32] = V, T[33] = el, T[34] = p) : p = T[34], T[35] !== X || T[36] !== el ? (g = X && (0, a.jsx)(N.default, {
                variant: X,
                showDiscount: !!X ? .discountLabel,
                discountLabel: X ? .discountLabel,
                theme: el
            }), T[35] = X, T[36] = el, T[37] = g) : g = T[37], T[38] !== M || T[39] !== el ? (v = M && (0, a.jsx)(_.default, {
                label: M.cardLabel,
                theme: el,
                cryptoCurrency: M.cryptoCurrency,
                size: "small",
                ...M.link && {
                    drawer: M.link
                }
            }), T[38] = M, T[39] = el, T[40] = v) : v = T[40], T[41] !== p || T[42] !== g || T[43] !== v ? (b = (0, a.jsxs)("div", {
                className: "flex flex-col gap-8 sm:items-center",
                children: [p, g, v]
            }), T[41] = p, T[42] = g, T[43] = v, T[44] = b) : b = T[44], T[45] !== Q || T[46] !== x || T[47] !== f || T[48] !== b ? (y = (0, a.jsxs)(U, {
                href: Q,
                children: [x, f, b]
            }), T[45] = Q, T[46] = x, T[47] = f, T[48] = b, T[49] = y) : y = T[49], T[50] !== X || T[51] !== q || T[52] !== G || T[53] !== K || T[54] !== el || T[55] !== ea ? (w = X && (0, a.jsx)(D.default, {
                currentVariant: X,
                onChange: e => {
                    er(!1), K(e)
                },
                variants: ea,
                secondaryVariants: G,
                primaryVariants: q,
                colorDot: !0,
                variantNumber: !0,
                size: "small",
                theme: el
            }), T[50] = X, T[51] = q, T[52] = G, T[53] = K, T[54] = el, T[55] = ea, T[56] = w) : w = T[56], T[57] !== X || T[58] !== el || T[59] !== ea ? (C = X && (0, a.jsx)(L, {
                variant: X,
                theme: el,
                buyMode: "standard",
                variants: ea,
                offerTitle: X.title,
                isOfferAvailable: X.availableForSale,
                size: "small"
            }), T[57] = X, T[58] = el, T[59] = ea, T[60] = C) : C = T[60], T[61] !== w || T[62] !== C ? (k = (0, a.jsxs)("div", {
                className: "flex flex-row items-end gap-8 sm:pt-12",
                children: [w, C]
            }), T[61] = w, T[62] = C, T[63] = k) : k = T[63], T[64] !== y || T[65] !== k ? (S = (0, a.jsxs)($.default, {
                size: "small",
                children: [y, k]
            }), T[64] = y, T[65] = k, T[66] = S) : S = T[66], T[67] !== c || T[68] !== S || T[69] !== el ? (z = (0, a.jsxs)(B.default, {
                className: "max-w-auto relative flex h-full flex-col sm:border",
                size: "small",
                theme: el,
                children: [c, S]
            }), T[67] = c, T[68] = S, T[69] = el, T[70] = z) : z = T[70], z
        },
        Y = e => {
            let t, r, u, h, x, f, p, g, v, b = (0, l.c)(64),
                {
                    data: j,
                    scrollToHighlightedBlock: y,
                    theme: w,
                    horizontal: C,
                    buyMode: N,
                    size: k
                } = e,
                _ = void 0 === w ? "dark" : w,
                S = void 0 !== C && C,
                {
                    combinedAddToCartVariants: z,
                    offerTitle: T,
                    reviews: I,
                    tag: O,
                    image: F,
                    subTitle: V,
                    features: L,
                    freeShipping: R,
                    variantLists: D
                } = j;
            b[0] !== z || b[1] !== D ? (t = {
                variants: z,
                variantLists: D
            }, b[0] = z, b[1] = D, b[2] = t) : t = b[2];
            let {
                variants: B,
                primaryVariants: $,
                secondaryVariants: A,
                currentVariant: E,
                setCurrentVariant: H,
                priceConversion: M,
                priceLabel: U
            } = (0, c.default)(t);
            b[3] !== B ? (r = B.every(q), b[3] = B, b[4] = r) : r = b[4];
            let W = r,
                {
                    entryChannel: Y
                } = (0, i.useContext)(d.EntryChannelContext),
                {
                    cryptoVouchers: Q
                } = (0, i.useContext)(s.cryptoVouchersContext),
                Z = Q ? .activeCryptoVouchers;
            b[5] !== E.id || b[6] !== Y || b[7] !== Z ? (u = (0, n.default)(Y, Z, E.id), b[5] = E.id, b[6] = Y, b[7] = Z, b[8] = u) : u = b[8];
            let ee = u;
            b[9] !== B[0] || b[10] !== B.length ? (h = 1 === B.length ? (0, o.default)(B[0].productHandle, B[0]) : null, b[9] = B[0], b[10] = B.length, b[11] = h) : h = b[11];
            let ea = h;
            b[12] !== B ? (x = B.find(G), b[12] = B, b[13] = x) : x = b[13];
            let el = x;
            b[14] !== ea || b[15] !== B ? (f = null === ea && B.some(K), b[14] = ea, b[15] = B, b[16] = f) : f = b[16];
            let et = f,
                er = E ? .customOfferCardImage ? .url || E ? .image.url || F ? .url || "";
            b[17] !== B ? (p = B.find(J), b[17] = B, b[18] = p) : p = b[18];
            let ei = p,
                {
                    discountLabel: es
                } = E,
                en = (0, m.default)(ei ? .productHandle);
            if (b[19] !== S || b[20] !== j) {
                let e, a;
                e = j.variantLists[0] ? .variants ? .length > 1, a = j.features ? .length > 0, g = !e && !a && S, b[19] = S, b[20] = j, b[21] = g
            } else g = b[21];
            let ed = g,
                eo = z.length > 0;
            if ("small" === (void 0 === k ? "medium" : k)) {
                let e, l = I ? .rating;
                return b[22] !== ee || b[23] !== E || b[24] !== L || b[25] !== ea || b[26] !== F || b[27] !== T || b[28] !== $ || b[29] !== A || b[30] !== H || b[31] !== V || b[32] !== l || b[33] !== O || b[34] !== _ || b[35] !== B ? (e = (0, a.jsx)(X, {
                    cryptoVoucher: ee,
                    currentVariant: E,
                    hudTag: O,
                    primaryVariants: $,
                    rating: l,
                    secondaryVariants: A,
                    setCurrentVariant: H,
                    subtitle: V,
                    tags: L,
                    theme: _,
                    title: T,
                    href: ea,
                    image: F,
                    variants: B
                }), b[22] = ee, b[23] = E, b[24] = L, b[25] = ea, b[26] = F, b[27] = T, b[28] = $, b[29] = A, b[30] = H, b[31] = V, b[32] = l, b[33] = O, b[34] = _, b[35] = B, b[36] = e) : e = b[36], e
            }
            return b[37] !== N || b[38] !== er || b[39] !== ee || b[40] !== E || b[41] !== L || b[42] !== R || b[43] !== en || b[44] !== S || b[45] !== ea || b[46] !== ed || b[47] !== eo || b[48] !== W || b[49] !== et || b[50] !== T || b[51] !== M || b[52] !== U || b[53] !== $ || b[54] !== el || b[55] !== I || b[56] !== y || b[57] !== A || b[58] !== H || b[59] !== O || b[60] !== _ || b[61] !== es || b[62] !== B ? (v = (0, a.jsx)(P, {
                buyMode: N,
                cardImageUrl: er,
                cryptoVoucher: ee,
                currentVariant: E,
                features: L,
                freeShipping: R,
                hideFreeShippingForNanoX: en,
                horizontal: S,
                href: ea,
                isBodyCentered: ed,
                isCombinedAddToCart: eo,
                isOfferAvailable: W,
                isRecoverCard: et,
                offerTitle: T,
                priceConversion: M,
                priceLabel: U,
                primaryVariants: $,
                recover: el,
                reviews: I,
                scrollToHighlightedBlock: y,
                secondaryVariants: A,
                setCurrentVariant: H,
                tag: O,
                theme: _,
                variantDiscountLabel: es,
                variants: B
            }), b[37] = N, b[38] = er, b[39] = ee, b[40] = E, b[41] = L, b[42] = R, b[43] = en, b[44] = S, b[45] = ea, b[46] = ed, b[47] = eo, b[48] = W, b[49] = et, b[50] = T, b[51] = M, b[52] = U, b[53] = $, b[54] = el, b[55] = I, b[56] = y, b[57] = A, b[58] = H, b[59] = O, b[60] = _, b[61] = es, b[62] = B, b[63] = v) : v = b[63], v
        };

    function q(e) {
        return e.availableForSale
    }

    function G(e) {
        return "ledger-recover" === e.productHandle
    }

    function K(e) {
        return "ledger-recover" === e.productHandle
    }

    function J(e) {
        return "ledger-nano-x" === e.productHandle
    }
    let Q = (0, r.cva)("mx-auto grid w-full", {
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
        let r, i, s, n, d, o, c, m = (0, l.c)(34),
            {
                title: u,
                subtitle: h,
                offerCards: x,
                scrollToHighlightedBlock: f,
                theme: p,
                buyMode: g,
                size: v
            } = e;
        m[0] !== x ? (r = void 0 === x ? [] : x, m[0] = x, m[1] = r) : r = m[1];
        let b = r,
            j = void 0 === v ? "medium" : v,
            y = b.length,
            w = 1 === y || y % 2 == 0;
        m[2] !== h || m[3] !== u ? (i = u && (0, a.jsx)("h2", {
            className: (0, H.default)("responsive-display-4 mt-24 text-center", h ? "mb-16" : "mb-40"),
            children: u
        }), m[2] = h, m[3] = u, m[4] = i) : i = m[4], m[5] !== h ? (s = h && (0, a.jsx)("p", {
            className: "heading-4 mb-40 text-center",
            children: h
        }), m[5] = h, m[6] = s) : s = m[6];
        let C = j || "medium",
            N = w ? "horizontal" : "vertical",
            k = 4 === y,
            _ = 3 === y,
            S = 2 === y,
            z = 1 === y;
        if (m[7] !== S || m[8] !== z || m[9] !== C || m[10] !== N || m[11] !== k || m[12] !== _ ? (n = Q({
                size: C,
                layout: N,
                displayFourColumns: k,
                displayThreeColumns: _,
                displayTwoColumns: S,
                displayOneColumn: z
            }), m[7] = S, m[8] = z, m[9] = C, m[10] = N, m[11] = k, m[12] = _, m[13] = n) : n = m[13], m[14] !== g || m[15] !== w || m[16] !== b || m[17] !== f || m[18] !== j || m[19] !== p) {
            let e;
            m[21] !== g || m[22] !== w || m[23] !== f || m[24] !== j || m[25] !== p ? (e = (e, l) => {
                let r = `ease-linear transition-all duration-500 ${"small"===j?"":["","delay-200","delay-400"][l]}`;
                return (0, a.jsx)(t.Transition, {
                    as: "div",
                    appear: !0,
                    show: !0,
                    enter: r,
                    enterFrom: "opacity-0 translate-y-10",
                    enterTo: "opacity-100 translate-y-0",
                    children: (0, a.jsx)(Y, {
                        data: e,
                        horizontal: w,
                        scrollToHighlightedBlock: f,
                        theme: p,
                        buyMode: g,
                        size: j
                    })
                }, e.image ? .url)
            }, m[21] = g, m[22] = w, m[23] = f, m[24] = j, m[25] = p, m[26] = e) : e = m[26], d = b.map(e), m[14] = g, m[15] = w, m[16] = b, m[17] = f, m[18] = j, m[19] = p, m[20] = d
        } else d = m[20];
        return m[27] !== n || m[28] !== d ? (o = (0, a.jsx)("div", {
            className: n,
            children: d
        }), m[27] = n, m[28] = d, m[29] = o) : o = m[29], m[30] !== o || m[31] !== i || m[32] !== s ? (c = (0, a.jsxs)(a.Fragment, {
            children: [i, s, o]
        }), m[30] = o, m[31] = i, m[32] = s, m[33] = c) : c = m[33], c
    }], 489180)
}, 708611, e => {
    "use strict";
    var a = e.i(391398),
        l = e.i(261576),
        t = e.i(191788);
    e.i(643781);
    var r = e.i(989606),
        i = e.i(495854),
        s = e.i(595990);
    e.s(["default", 0, () => {
        let e, n, d, o, c, m, u, h, x, f = (0, l.c)(12),
            {
                enabled: p
            } = (0, s.useFeatureFlag)("homeshop_comparisonbutton_2602"),
            [g, v] = (0, t.useState)(!0),
            [b, j] = (0, t.useState)(!1),
            [y, w] = (0, t.useState)(!1);
        if (f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
                let e = () => v(window.scrollY < 10);
                return e(), window.addEventListener("scroll", e, {
                    passive: !0
                }), () => window.removeEventListener("scroll", e)
            }, n = [], f[0] = e, f[1] = n) : (e = f[0], n = f[1]), (0, t.useEffect)(e, n), f[2] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
                let e = document.getElementById("category-cryptocurrency-wallets");
                if (!e) return;
                let a = new IntersectionObserver(e => {
                    let [a] = e;
                    return j(a.isIntersecting)
                }, {
                    threshold: 0
                });
                a.observe(e);
                let l = document.getElementById("category-srp-accessories"),
                    t = null;
                return l && (t = new IntersectionObserver(e => {
                    let [a] = e;
                    return w(a.isIntersecting)
                }, {
                    rootMargin: "0px 0px -160px 0px",
                    threshold: 0
                })).observe(l), () => {
                    a.disconnect(), t ? .disconnect()
                }
            }, o = [], f[2] = d, f[3] = o) : (d = f[2], o = f[3]), (0, t.useEffect)(d, o), !p) return null;
        let C = !g && b && !y;
        f[4] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, i.default)("fixed right-0 bottom-0 left-0 z-40 lg:relative lg:right-auto lg:bottom-auto lg:left-auto lg:z-auto lg:mt-40 lg:flex lg:justify-center"), f[4] = c) : c = f[4];
        let N = !C && "pointer-events-none translate-y-full",
            k = C && "translate-y-0";
        return f[5] !== N || f[6] !== k ? (m = (0, i.default)("w-full bg-white/70 p-16 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-lg backdrop-blur-md", "transition-transform duration-300 ease-out motion-reduce:transition-none", "lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none", N, k, "lg:pointer-events-auto lg:translate-y-0"), f[5] = N, f[6] = k, f[7] = m) : m = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)("div", {
            className: "w-full lg:hidden",
            children: (0, a.jsx)(r.default, {
                href: "/pages/hardware-wallets-comparison",
                label: "Compare features & specs",
                icon: "arrowRight",
                variant: "primary-black",
                size: "medium",
                isFull: !0,
                dataCsOverrideId: "compare-signers-cta-mobile"
            })
        }), f[8] = u) : u = f[8], f[9] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)("div", {
            className: "hidden h-80 w-full max-w-screen-2xl items-center justify-center rounded-xs border border-neutral-200 bg-neutral-100 px-32 lg:flex",
            children: (0, a.jsx)(r.default, {
                href: "/pages/hardware-wallets-comparison",
                label: "Compare features & specs",
                icon: "arrowRight",
                variant: "link-black",
                size: "large",
                dataCsOverrideId: "compare-signers-cta"
            })
        }), f[9] = h) : h = f[9], f[10] !== m ? (x = (0, a.jsx)("div", {
            className: c,
            children: (0, a.jsxs)("div", {
                className: m,
                children: [u, h]
            })
        }), f[10] = m, f[11] = x) : x = f[11], x
    }])
}, 672159, 776533, 430152, 983975, e => {
    "use strict";
    var a = e.i(391398),
        l = e.i(261576),
        t = e.i(191788),
        r = e.i(41158),
        i = e.i(126019);
    e.i(664157);
    var s = e.i(271179),
        n = e.i(455108),
        d = e.i(495854);
    e.i(643781);
    var o = e.i(989606);
    e.i(366539);
    var c = e.i(150077);
    e.i(108399);
    var m = e.i(860231),
        u = e.i(616066),
        h = e.i(264516);
    let x = e => {
            let t, r = (0, l.c)(2),
                {
                    url: s
                } = e;
            return r[0] !== s ? (t = (0, a.jsx)(i.default, {
                src: s,
                alt: "",
                width: 56,
                height: 56,
                className: "h-56 w-56 object-contain"
            }), r[0] = s, r[1] = t) : t = r[1], t
        },
        f = e => {
            let t, r, i, n, o, c, f, p, g, v, b, j = (0, l.c)(33),
                {
                    variants: y,
                    currentVariant: w,
                    onChange: C,
                    size: N
                } = e,
                {
                    t: k
                } = (0, s.useTranslation)("common");
            j[0] !== C || j[1] !== y ? (t = e => {
                let a = y.find(a => a.id === e);
                a && C(a)
            }, j[0] = C, j[1] = y, j[2] = t) : t = j[2];
            let _ = t;
            j[3] !== k ? (r = e => k(`variantColors.${(0,h.toCamelCase)(e)}`), j[3] = k, j[4] = r) : r = j[4];
            let S = r,
                z = "small" === N;
            j[5] !== z ? (i = (0, d.default)({
                "body-3 w-112 overflow-hidden text-ellipsis whitespace-nowrap": z
            }), j[5] = z, j[6] = i) : i = j[6];
            let T = i,
                I = w.id;
            if (j[7] !== w.image ? (n = w.image && (0, a.jsx)(x, {
                    url: w.image.url
                }), j[7] = w.image, j[8] = n) : n = j[8], j[9] !== w.title || j[10] !== S ? (o = S(w.title), j[9] = w.title, j[10] = S, j[11] = o) : o = j[11], j[12] !== T || j[13] !== o ? (c = (0, a.jsx)("span", {
                    className: T,
                    children: o
                }), j[12] = T, j[13] = o, j[14] = c) : c = j[14], j[15] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsx)("div", {
                    className: "text-primary ms-auto",
                    children: (0, a.jsx)(m.default, {
                        name: "chevronDown",
                        size: 25,
                        strokeWidth: 3.5,
                        color: "current"
                    })
                }), j[15] = f) : f = j[15], j[16] !== n || j[17] !== c ? (p = (0, a.jsxs)(u.SelectTrigger, {
                    "data-testid": "variant-selector-dropdown__button",
                    className: "flex h-auto w-full flex-row items-center justify-start gap-8 rounded-xs border-gray-300 bg-white py-0 ps-0 pe-16 transition-colors duration-300 ease-linear md:hover:border-neutral-400",
                    children: [n, c, f]
                }), j[16] = n, j[17] = c, j[18] = p) : p = j[18], j[19] !== T || j[20] !== S || j[21] !== y) {
                let e;
                j[23] !== T || j[24] !== S ? (e = e => (0, a.jsx)(u.SelectItem, {
                    value: e.id,
                    "data-testid": "variant-selector-dropdown__variant",
                    leading: e.image ? (0, a.jsx)(x, {
                        url: e.image.url
                    }) : null,
                    children: (0, a.jsx)("span", {
                        className: T,
                        children: S(e.title)
                    })
                }, e.id), j[23] = T, j[24] = S, j[25] = e) : e = j[25], g = y.map(e), j[19] = T, j[20] = S, j[21] = y, j[22] = g
            } else g = j[22];
            return j[26] !== g ? (v = (0, a.jsx)(u.SelectContent, {
                "data-testid": "variant-selector-dropdown__variants",
                className: "z-20",
                children: g
            }), j[26] = g, j[27] = v) : v = j[27], j[28] !== w.id || j[29] !== _ || j[30] !== p || j[31] !== v ? (b = (0, a.jsx)("div", {
                "data-testid": "variant-selector-dropdown",
                className: "relative w-full",
                children: (0, a.jsxs)(u.Select, {
                    value: I,
                    onValueChange: _,
                    children: [p, v]
                })
            }), j[28] = w.id, j[29] = _, j[30] = p, j[31] = v, j[32] = b) : b = j[32], b
        };
    e.s(["default", 0, f], 776533), e.s([], 430152), e.i(151153);
    var p = e.i(46050),
        g = e.i(43039),
        v = e.i(478797),
        b = e.i(351688),
        j = e.i(799444);
    e.i(310356);
    var y = e.i(621351),
        w = e.i(79564),
        C = e.i(620391),
        N = e.i(766442),
        k = e.i(212376),
        _ = e.i(876526);
    let S = e => {
        let t, r, i, n = (0, l.c)(12),
            {
                className: d,
                text: o,
                productName: c,
                variantId: m,
                variantName: u,
                sku: h
            } = e,
            x = void 0 === d ? "text-gray-600 body-1 uppercase lg:body-1" : d,
            {
                t: f
            } = (0, s.useTranslation)("common");
        n[0] !== c || n[1] !== h || n[2] !== m || n[3] !== u ? (t = {
            productName: c,
            variantId: m,
            variantName: u,
            sku: h
        }, n[0] = c, n[1] = h, n[2] = m, n[3] = u, n[4] = t) : t = n[4];
        let {
            ref: p
        } = (0, _.default)(t);
        return n[5] !== f || n[6] !== o ? (r = o || f("productCards.outOfStock"), n[5] = f, n[6] = o, n[7] = r) : r = n[7], n[8] !== x || n[9] !== p || n[10] !== r ? (i = (0, a.jsx)("p", {
            ref: p,
            className: x,
            children: r
        }), n[8] = x, n[9] = p, n[10] = r, n[11] = i) : i = n[11], i
    };

    function z(e) {
        return e.id
    }
    e.s(["default", 0, e => {
        let m, u, h, x, _, T, I, O, F, V, L, P, R, D, B, $, A, E, H, M, U = (0, l.c)(80),
            {
                cta: W,
                dontTrack: X,
                position: Y,
                product: q,
                showVariants: G,
                dataCsOverrideRoot: K,
                priority: J
            } = e,
            Q = void 0 === W ? "addToCart" : W,
            Z = void 0 !== X && X,
            ee = void 0 === G || G,
            ea = void 0 !== J && J,
            {
                category: el,
                discountLabel: et,
                rating: er,
                showDiscount: ei,
                statusLabel: es,
                title: en,
                totalReviews: ed,
                variants: eo,
                shortDescription: ec
            } = q,
            [em] = eo,
            [eu, eh] = (0, t.useState)(em),
            {
                trackEvent: ex
            } = (0, v.default)();
        U[0] === Symbol.for("react.memo_cache_sentinel") ? (m = {
            placement: "productCard"
        }, U[0] = m) : m = U[0];
        let {
            add: ef
        } = (0, w.default)(m), {
            t: ep
        } = (0, s.useTranslation)("common"), {
            isUSAvailable: eg
        } = (0, N.default)(), {
            isDeviceAvailable: ev
        } = (0, k.default)();
        U[1] !== eu.availableForSale || U[2] !== eu.id || U[3] !== eu.sku || U[4] !== ev || U[5] !== eg ? (u = eu.availableForSale && eg(eu.id) && ev(eu.sku), U[1] = eu.availableForSale, U[2] = eu.id, U[3] = eu.sku, U[4] = ev, U[5] = eg, U[6] = u) : u = U[6];
        let eb = u;
        U[7] !== eo ? (h = eo.map(z), U[7] = eo, U[8] = h) : h = U[8];
        let ej = h;
        (0, C.usePrefetchLocalisedPrices)(ej);
        let ey = (0, j.default)([eu.id]).prices ? .[0];
        U[9] !== eu || U[10] !== q.handle ? (x = (0, g.default)(q.handle, eu), U[9] = eu, U[10] = q.handle, U[11] = x) : x = U[11];
        let ew = x,
            eC = eu.id;
        U[12] !== el || U[13] !== Z || U[14] !== ey || U[15] !== Y || U[16] !== q || U[17] !== ex ? (_ = () => {
            void 0 !== Y && !Z && ey && ex("productClick", (0, b.productClickMapping)(q, Y, el, ey))
        }, U[12] = el, U[13] = Z, U[14] = ey, U[15] = Y, U[16] = q, U[17] = ex, U[18] = _) : _ = U[18];
        let eN = _;
        return U[19] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, d.default)("relative block h-256 overflow-hidden rounded-t-xs bg-neutral-100 px-80 lg:h-288"), U[19] = T) : T = U[19], U[20] !== es ? (I = es && (0, a.jsx)(y.default, {
            label: es.title,
            variant: es.variant,
            theme: "light"
        }), U[20] = es, U[21] = I) : I = U[21], U[22] !== eu || U[23] !== ea || U[24] !== q.backgroundFill ? (O = eu && (0, a.jsx)(i.default, {
            src: eu.image.url,
            alt: eu.title,
            fill: !0,
            priority: ea,
            sizes: "(max-width: 768px) 50vw, 300px",
            className: (0, d.default)("object-contain", q.backgroundFill && "object-cover")
        }), U[22] = eu, U[23] = ea, U[24] = q.backgroundFill, U[25] = O) : O = U[25], U[26] !== eN || U[27] !== ew || U[28] !== I || U[29] !== O ? (F = (0, a.jsxs)(r.default, {
            href: ew,
            className: T,
            onClick: eN,
            children: [I, O]
        }), U[26] = eN, U[27] = ew, U[28] = I, U[29] = O, U[30] = F) : F = U[30], U[31] !== eN || U[32] !== ew || U[33] !== en ? (V = (0, a.jsx)("h3", {
            className: "heading-5-semi-bold text-balance",
            children: (0, a.jsx)(r.default, {
                href: ew,
                onClick: eN,
                children: en
            })
        }), U[31] = eN, U[32] = ew, U[33] = en, U[34] = V) : V = U[34], U[35] !== ew || U[36] !== er || U[37] !== ed ? (L = ed > 0 && (0, a.jsx)(r.default, {
            href: `${ew}#reviews`,
            children: (0, a.jsx)(p.default, {
                rating: er,
                totalReviews: ed
            })
        }), U[35] = ew, U[36] = er, U[37] = ed, U[38] = L) : L = U[38], U[39] !== ec ? (P = ec && (0, a.jsx)("p", {
            className: "body-2 text-neutral-600",
            children: ec
        }), U[39] = ec, U[40] = P) : P = U[40], U[41] !== eu || U[42] !== et || U[43] !== ei ? (R = (0, a.jsx)(c.default, {
            variant: eu,
            showDiscount: ei,
            discountLabel: et
        }), U[41] = eu, U[42] = et, U[43] = ei, U[44] = R) : R = U[44], U[45] !== eu || U[46] !== ee || U[47] !== eo ? (D = ee && eo.length > 1 && (0, a.jsx)("div", {
            className: "mt-16",
            children: (0, a.jsx)(f, {
                variants: eo,
                currentVariant: eu,
                onChange: eh
            })
        }), U[45] = eu, U[46] = ee, U[47] = eo, U[48] = D) : D = U[48], U[49] !== V || U[50] !== L || U[51] !== P || U[52] !== R || U[53] !== D ? (B = (0, a.jsxs)("div", {
            className: "flex h-full flex-col gap-8",
            children: [V, L, P, R, D]
        }), U[49] = V, U[50] = L, U[51] = P, U[52] = R, U[53] = D, U[54] = B) : B = U[54], U[55] !== ef || U[56] !== Q || U[57] !== eu.id || U[58] !== eu.sku || U[59] !== eu.title || U[60] !== K || U[61] !== eb || U[62] !== q || U[63] !== ep || U[64] !== eC ? ($ = "addToCart" === Q && (eb ? (0, a.jsx)(o.default, {
            label: ep("productCards.addToCard"),
            onClick: () => ef([{
                product: q,
                variantId: eC
            }]),
            variant: "link-black",
            icon: "arrowRight",
            dataCsOverrideId: K ? `${K}-add-to-cart` : K
        }) : (0, a.jsx)(S, {
            productName: q.title,
            variantId: eu.id,
            variantName: eu.title,
            sku: eu.sku
        })), U[55] = ef, U[56] = Q, U[57] = eu.id, U[58] = eu.sku, U[59] = eu.title, U[60] = K, U[61] = eb, U[62] = q, U[63] = ep, U[64] = eC, U[65] = $) : $ = U[65], U[66] !== Q || U[67] !== ew || U[68] !== ep ? (A = "discover" === Q && (0, a.jsx)(o.default, {
            icon: "arrowRight",
            href: ew,
            label: ep("productCards.discover"),
            variant: "link-black"
        }), U[66] = Q, U[67] = ew, U[68] = ep, U[69] = A) : A = U[69], U[70] !== $ || U[71] !== A ? (E = (0, a.jsxs)("div", {
            "data-testid": "product-card__button",
            className: "mt-16",
            children: [$, A]
        }), U[70] = $, U[71] = A, U[72] = E) : E = U[72], U[73] !== B || U[74] !== E ? (H = (0, a.jsxs)("div", {
            className: "flex grow flex-col justify-between rounded-b-xs bg-white px-16 py-24",
            children: [B, E]
        }), U[73] = B, U[74] = E, U[75] = H) : H = U[75], U[76] !== K || U[77] !== F || U[78] !== H ? (M = (0, a.jsxs)(n.default.CardBorder, {
            className: "overflow-visible",
            "data-testid": "product-card",
            "data-cs-override-id": K,
            children: [F, H]
        }), U[76] = K, U[77] = F, U[78] = H, U[79] = M) : M = U[79], M
    }], 983975), e.s([], 672159)
}, 699336, e => {
    "use strict";
    var a = e.i(391398),
        l = e.i(261576);
    e.i(663485);
    var t = e.i(98887),
        r = e.i(41158),
        i = e.i(126019);
    let s = e => {
        let t, s, n, d, o = (0, l.c)(14),
            {
                title: c,
                image: m,
                anchorId: u,
                dataCsOverrideId: h,
                smoothScroll: x
            } = e,
            f = `#${u}`;
        o[0] !== u || o[1] !== x ? (t = e => {
            e.preventDefault(), x(u)
        }, o[0] = u, o[1] = x, o[2] = t) : t = o[2];
        let p = c || "";
        return o[3] !== m.url || o[4] !== p ? (s = (0, a.jsx)("div", {
            className: "relative h-48 w-full lg:h-96",
            children: (0, a.jsx)(i.default, {
                src: m.url,
                alt: p,
                fill: !0,
                priority: !0,
                className: "object-contain",
                sizes: "33vw"
            })
        }), o[3] = m.url, o[4] = p, o[5] = s) : s = o[5], o[6] !== c ? (n = (0, a.jsx)("h3", {
            className: "body-3 mt-8 lg:mt-12",
            children: c
        }), o[6] = c, o[7] = n) : n = o[7], o[8] !== h || o[9] !== f || o[10] !== t || o[11] !== s || o[12] !== n ? (d = (0, a.jsxs)(r.default, {
            href: f,
            className: "flex w-full flex-col items-center justify-start rounded-xs border border-transparent bg-neutral-100 py-12 text-center transition-all hover:border-gray-800 lg:bg-white lg:py-16",
            "data-cs-override-id": h,
            onClick: t,
            children: [s, n]
        }), o[8] = h, o[9] = f, o[10] = t, o[11] = s, o[12] = n, o[13] = d) : d = o[13], d
    };
    var n = e.i(495854);
    let d = e => {
        let t, s, d, o, c, m = (0, l.c)(15),
            {
                dataCsOverrideId: u,
                anchorId: h,
                imageUrl: x,
                title: f,
                smoothScroll: p
            } = e,
            g = `#${h}`;
        return m[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.default)("box-content flex w-fit items-center gap-16 rounded-full border px-12 duration-300 ease-in-out", "lg:h-64 lg:border-s-0 lg:border-neutral-600 lg:bg-neutral-900 lg:pe-20 lg:ps-0 lg:transition-colors hover:lg:border-white hover:lg:bg-neutral-800", "h-40 border-neutral-200"), m[0] = t) : t = m[0], m[1] !== h || m[2] !== p ? (s = e => {
            e.preventDefault(), p(h)
        }, m[1] = h, m[2] = p, m[3] = s) : s = m[3], m[4] !== x || m[5] !== f ? (d = x && (0, a.jsx)("div", {
            className: "hidden h-64 w-64 overflow-hidden rounded-full border border-inherit bg-neutral-400 lg:flex",
            children: (0, a.jsx)(i.default, {
                src: x,
                alt: f || "",
                priority: !0,
                height: 64,
                width: 64,
                className: "mx-auto my-auto max-h-64 max-w-64 object-scale-down object-center"
            })
        }), m[4] = x, m[5] = f, m[6] = d) : d = m[6], m[7] !== f ? (o = (0, a.jsx)("h3", {
            className: "body-3",
            children: f
        }), m[7] = f, m[8] = o) : o = m[8], m[9] !== u || m[10] !== g || m[11] !== s || m[12] !== d || m[13] !== o ? (c = (0, a.jsxs)(r.default, {
            href: g,
            className: t,
            "data-cs-override-id": u,
            onClick: s,
            children: [d, o]
        }), m[9] = u, m[10] = g, m[11] = s, m[12] = d, m[13] = o, m[14] = c) : c = m[14], c
    };
    e.i(664157);
    var o = e.i(271179),
        c = e.i(191788);
    e.i(672159);
    var m = e.i(983975);
    e.i(643781);
    var u = e.i(989606),
        h = e.i(455108);
    e.i(108399);
    var x = e.i(860231);
    e.i(573614);
    var f = e.i(126298);
    e.i(946262);
    var p = e.i(843888);
    e.i(47857);
    var g = e.i(227452);
    let v = e => {
        let t, r, i, s, n, d, o, m, u, h = (0, l.c)(22),
            {
                content: v,
                linkText: b,
                dataCsOverrideId: j
            } = e,
            {
                title: y,
                image: w,
                video: C,
                description: N
            } = v,
            [k, _] = (0, c.useState)(!1);
        h[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => _(!0), h[0] = t) : t = h[0];
        let S = t;
        h[1] === Symbol.for("react.memo_cache_sentinel") ? (r = () => _(!1), h[1] = r) : r = h[1];
        let z = r;
        return N ? (h[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(x.default, {
            name: "plus",
            size: 20,
            strokeWidth: 2.5,
            color: "current"
        }), h[2] = i) : i = h[2], h[3] !== b ? (s = (0, a.jsx)("span", {
            className: "-mt-[4px]",
            children: b
        }), h[3] = b, h[4] = s) : s = h[4], h[5] !== j || h[6] !== s ? (n = (0, a.jsxs)("button", {
            type: "button",
            onClick: S,
            className: "text-primary body-1 font-normal flex gap-8 text-start md:items-center",
            "data-cs-override-id": j,
            children: [i, s]
        }), h[5] = j, h[6] = s, h[7] = n) : n = h[7], h[8] !== w || h[9] !== k || h[10] !== C ? (d = k && (0, a.jsx)("div", {
            className: "min-w-0",
            children: (0, a.jsx)(g.default, {
                image: w,
                video: C
            })
        }), h[8] = w, h[9] = k, h[10] = C, h[11] = d) : d = h[11], h[12] !== N ? (o = (0, a.jsx)("div", {
            className: "min-w-0",
            children: (0, a.jsx)(p.default, {
                richText: N
            })
        }), h[12] = N, h[13] = o) : o = h[13], h[14] !== k || h[15] !== d || h[16] !== o || h[17] !== y ? (m = (0, a.jsxs)(f.default, {
            close: z,
            isOpen: k,
            title: y,
            children: [d, o]
        }), h[14] = k, h[15] = d, h[16] = o, h[17] = y, h[18] = m) : m = h[18], h[19] !== n || h[20] !== m ? (u = (0, a.jsxs)(a.Fragment, {
            children: [n, m]
        }), h[19] = n, h[20] = m, h[21] = u) : u = h[21], u) : null
    };
    var b = e.i(799444);
    e.i(310356);
    var j = e.i(621351),
        y = e.i(149818);
    let w = () => {
            let e, t, s, d, c, m, x, f, p, g, v, b, w, N, k, _, S, z = (0, l.c)(36),
                {
                    t: T
                } = (0, o.useTranslation)("common"),
                {
                    getRecover: I
                } = (0, y.useTrustServicesApi)();
            z[0] !== I ? (e = I(), z[0] = I, z[1] = e) : e = z[1];
            let O = e;
            return O ? .title && O.variant ? (z[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.default)("relative block h-256 rounded-t-xs px-80 lg:h-256"), z[2] = t) : t = z[2], z[3] !== T ? (s = T("productCards.subscriptionServiceBackup"), z[3] = T, z[4] = s) : s = z[4], z[5] !== s ? (d = (0, a.jsx)(j.default, {
                label: s,
                variant: "secondary",
                theme: "light"
            }), z[5] = s, z[6] = d) : d = z[6], z[7] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(i.default, {
                src: "https://cdn.shopify.com/s/files/1/2974/4858/files/asset_recover.webp?v=1728912173",
                alt: "recover card",
                fill: !0,
                sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
                className: "object-cover"
            }), z[7] = c) : c = z[7], z[8] !== d ? (m = (0, a.jsxs)(r.default, {
                href: "/pages/ledger-recover#recover-cards",
                className: t,
                children: [d, c]
            }), z[8] = d, z[9] = m) : m = z[9], z[10] !== O.title ? (x = (0, a.jsx)("h3", {
                className: "heading-5-semi-bold text-balance",
                children: (0, a.jsx)(r.default, {
                    href: "/pages/ledger-recover",
                    children: O.title
                })
            }), z[10] = O.title, z[11] = x) : x = z[11], z[12] !== T ? (f = T("productCards.recoverDescriptionLine1"), z[12] = T, z[13] = f) : f = z[13], z[14] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)("br", {}), z[14] = p) : p = z[14], z[15] !== T ? (g = T("productCards.recoverDescriptionLine2"), z[15] = T, z[16] = g) : g = z[16], z[17] !== f || z[18] !== g ? (v = (0, a.jsxs)("p", {
                className: "body-2 text-neutral-600",
                children: [f, " ", p, g]
            }), z[17] = f, z[18] = g, z[19] = v) : v = z[19], z[20] !== O.variant ? (b = (0, a.jsx)(C, {
                variant: O.variant
            }), z[20] = O.variant, z[21] = b) : b = z[21], z[22] !== v || z[23] !== b || z[24] !== x ? (w = (0, a.jsxs)("div", {
                className: "flex h-full flex-col gap-8",
                children: [x, v, b]
            }), z[22] = v, z[23] = b, z[24] = x, z[25] = w) : w = z[25], z[26] !== T ? (N = T("productCards.seeBundleOffers"), z[26] = T, z[27] = N) : N = z[27], z[28] !== N ? (k = (0, a.jsx)("div", {
                className: "mt-16",
                children: (0, a.jsx)(u.default, {
                    icon: "arrowRight",
                    href: "pages/ledger-recover#recover-cards",
                    label: N,
                    variant: "link-black"
                })
            }), z[28] = N, z[29] = k) : k = z[29], z[30] !== w || z[31] !== k ? (_ = (0, a.jsxs)("div", {
                className: "flex grow flex-col justify-between rounded-b-[4px] bg-white px-16 py-24",
                children: [w, k]
            }), z[30] = w, z[31] = k, z[32] = _) : _ = z[32], z[33] !== _ || z[34] !== m ? (S = (0, a.jsxs)(h.default.CardBorder, {
                children: [m, _]
            }), z[33] = _, z[34] = m, z[35] = S) : S = z[35], S) : null
        },
        C = e => {
            let t, r, i, s, d = (0, l.c)(13),
                {
                    variant: c
                } = e,
                {
                    t: m
                } = (0, o.useTranslation)("common"),
                u = c ? .id;
            d[0] !== u ? (t = [u], d[0] = u, d[1] = t) : t = d[1];
            let {
                prices: x
            } = (0, b.default)(t);
            if (!x) {
                let e;
                return d[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("div", {
                    role: "status",
                    "data-testid": "price-display__loading",
                    children: (0, a.jsx)(h.default.LoadingSpinner, {
                        className: "h-32 w-20 animate-spin text-white"
                    })
                }), d[2] = e) : e = d[2], e
            }
            let [f] = x, {
                compareAtLabel: p,
                label: g,
                taxMessage: v
            } = f, j = p && "gap-x-12";
            return d[3] !== j ? (r = (0, n.default)("flex flex-wrap items-center", "flex-row items-center", j), d[3] = j, d[4] = r) : r = d[4], d[5] !== p || d[6] !== g || d[7] !== m || d[8] !== v ? (i = p ? (0, a.jsxs)(a.Fragment, {
                children: [p && (0, a.jsx)("div", {
                    className: "body text-neutral-400 line-through",
                    children: p
                }), (0, a.jsx)("div", {
                    className: "flex flex-row flex-wrap items-center gap-x-12",
                    children: (0, a.jsx)("span", {
                        "data-testid": "price-display__price",
                        className: "body-4",
                        children: m("productCards.pricePerYear", {
                            price: g
                        })
                    })
                }), (0, a.jsx)("div", {
                    className: "body-4 basis-full text-gray-500",
                    children: v
                })]
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("span", {
                    "data-testid": "price-display__price",
                    className: "body-4",
                    children: m("productCards.pricePerYear", {
                        price: g
                    })
                }), (0, a.jsx)("div", {
                    className: "body-4 text-gray-500",
                    children: v
                })]
            }), d[5] = p, d[6] = g, d[7] = m, d[8] = v, d[9] = i) : i = d[9], d[10] !== r || d[11] !== i ? (s = (0, a.jsx)("div", {
                className: r,
                children: i
            }), d[10] = r, d[11] = i, d[12] = s) : s = d[12], s
        };
    var N = e.i(232567);
    let k = e => {
            let t, r, i, s, d, x, f, p, g, b, j, y = (0, l.c)(42),
                {
                    title: C,
                    products: k,
                    condensedView: _,
                    theme: S,
                    dataCsOverrideRoot: z,
                    headerLinkToDrawer: T,
                    priorityImages: I
                } = e,
                O = void 0 !== _ && _,
                F = void 0 === S ? "light" : S,
                V = void 0 !== I && I,
                {
                    t: L
                } = (0, o.useTranslation)("common"),
                [P, R] = (0, c.useState)(O),
                D = T ? .dynamicDrawerContent ? .[0],
                B = D ? .type === "ContentBlock" ? D.data : void 0;
            y[0] !== P ? (t = () => {
                R(!P)
            }, y[0] = P, y[1] = t) : t = y[1];
            let $ = t,
                A = (0, N.useAllowedProducts)(k),
                E = "dark" === F && "text-black",
                H = O ? "heading-1-semi-bold" : "responsive-display-4";
            y[2] !== E || y[3] !== H ? (r = (0, n.default)(E, H), y[2] = E, y[3] = H, y[4] = r) : r = y[4], y[5] !== r || y[6] !== C ? (i = (0, a.jsx)("h2", {
                className: r,
                children: C
            }), y[5] = r, y[6] = C, y[7] = i) : i = y[7], y[8] !== z || y[9] !== B || y[10] !== T ? (s = T ? .label && B && (0, a.jsx)(v, {
                dataCsOverrideId: z ? `${z}-info-link` : z,
                content: B,
                linkText: T.label
            }), y[8] = z, y[9] = B, y[10] = T, y[11] = s) : s = y[11], y[12] !== i || y[13] !== s ? (d = (0, a.jsxs)("div", {
                className: "mb-48 flex flex-col items-center gap-16 text-center lg:mb-32",
                children: [i, s]
            }), y[12] = i, y[13] = s, y[14] = d) : d = y[14];
            let M = O && "mb-40",
                U = P ? "[&>*:nth-child(-n+2)]:flex [&>*:nth-child(3)]:lg:flex *:hidden" : "[&>*:nth-child(-n+2)]:animate-none [&>*:nth-child(3)]:lg:animate-none *:flex *:animate-fadeInAnimation";
            if (y[15] !== M || y[16] !== U ? (x = (0, n.default)("grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-32", M, U), y[15] = M, y[16] = U, y[17] = x) : x = y[17], y[18] !== z ? (f = "card-srp-accessories" === z && (0, a.jsx)(w, {}), y[18] = z, y[19] = f) : f = y[19], y[20] !== A || y[21] !== z || y[22] !== V) {
                let e;
                y[24] !== z || y[25] !== V ? (e = (e, l) => (0, a.jsx)(m.default, {
                    cta: e.isTokenGated ? "discover" : "addToCart",
                    position: l,
                    product: e,
                    priority: V && l < 3,
                    dataCsOverrideRoot: z
                }, e.handle), y[24] = z, y[25] = V, y[26] = e) : e = y[26], p = A.map(e), y[20] = A, y[21] = z, y[22] = V, y[23] = p
            } else p = y[23];
            return y[27] !== x || y[28] !== f || y[29] !== p ? (g = (0, a.jsxs)("div", {
                className: x,
                children: [f, p]
            }), y[27] = x, y[28] = f, y[29] = p, y[30] = g) : g = y[30], y[31] !== $ || y[32] !== O || y[33] !== z || y[34] !== P || y[35] !== L || y[36] !== F ? (b = O && P && (0, a.jsx)("div", {
                className: (0, n.default)("flex justify-center", "dark" === F ? "text-white" : "text-black"),
                children: (0, a.jsx)(u.default, {
                    label: L("seeMore"),
                    size: "small",
                    variant: "secondary-black",
                    onClick: () => $(),
                    dataCsOverrideId: z ? `${z}-show-more` : z
                })
            }), y[31] = $, y[32] = O, y[33] = z, y[34] = P, y[35] = L, y[36] = F, y[37] = b) : b = y[37], y[38] !== d || y[39] !== g || y[40] !== b ? (j = (0, a.jsxs)(h.default.Section, {
                "data-testid": "product-collection",
                children: [d, g, b]
            }), y[38] = d, y[39] = g, y[40] = b, y[41] = j) : j = y[41], j
        },
        _ = e => {
            let t, s, d, o, c, m, x, f, p = (0, l.c)(19),
                {
                    dataCsOverrideId: g,
                    title: v,
                    image: b,
                    link: j
                } = e;
            return p[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.default)("flex flex-col md:flex-row", "mx-auto max-w-[calc(var(--breakpoint-2xl)-theme(space.16))]"), p[0] = t) : t = p[0], p[1] !== b ? (s = b && (0, a.jsx)("div", {
                className: "relative h-256 w-auto md:h-auto md:w-128 md:basis-6/12",
                children: (0, a.jsx)(i.default, {
                    src: b.url,
                    alt: "",
                    fill: !0,
                    className: "object-cover",
                    sizes: "(max-width: 768px) 100vw, 50vw"
                })
            }), p[1] = b, p[2] = s) : s = p[2], p[3] !== j || p[4] !== v ? (d = j ? .url ? (0, a.jsx)(r.default, {
                href: j.url,
                children: v
            }) : v, p[3] = j, p[4] = v, p[5] = d) : d = p[5], p[6] !== d ? (o = (0, a.jsx)("h2", {
                className: "mb-40 text-balance text-white responsive-display-4",
                children: d
            }), p[6] = d, p[7] = o) : o = p[7], p[8] !== j ? (c = j && (0, a.jsx)(u.default, {
                href: j.url,
                label: j.label,
                icon: "arrowRight",
                size: "medium"
            }), p[8] = j, p[9] = c) : c = p[9], p[10] !== o || p[11] !== c ? (m = (0, a.jsxs)("div", {
                className: "grow basis-6/12 self-center py-40 md:ps-16",
                children: [o, c]
            }), p[10] = o, p[11] = c, p[12] = m) : m = p[12], p[13] !== s || p[14] !== m ? (x = (0, a.jsx)(h.default.Section, {
                verticalSpacing: "none",
                children: (0, a.jsxs)("div", {
                    className: t,
                    children: [s, m]
                })
            }), p[13] = s, p[14] = m, p[15] = x) : x = p[15], p[16] !== g || p[17] !== x ? (f = (0, a.jsx)("aside", {
                className: "bg-black",
                "data-cs-override-id": g,
                children: x
            }), p[16] = g, p[17] = x, p[18] = f) : f = p[18], f
        };
    e.i(286941);
    var S = e.i(126762);
    let z = e => {
        let t, s, n, d, o, c, m = (0, l.c)(16),
            {
                title: h,
                description: x,
                image: f,
                link: p
            } = e;
        return m[0] !== f ? (t = f && (0, a.jsx)("div", {
            className: "relative block h-256 lg:h-256",
            children: (0, a.jsx)(i.default, {
                src: f.url,
                alt: "",
                fill: !0,
                className: "object-contain",
                sizes: "(max-width: 768px) 100vw, 50vw"
            })
        }), m[0] = f, m[1] = t) : t = m[1], m[2] !== p || m[3] !== h ? (s = p ? .url ? (0, a.jsx)(r.default, {
            href: p.url,
            children: h
        }) : h, m[2] = p, m[3] = h, m[4] = s) : s = m[4], m[5] !== s ? (n = (0, a.jsx)("h3", {
            className: "my-20 text-black heading-4-semi-bold",
            children: s
        }), m[5] = s, m[6] = n) : n = m[6], m[7] !== x ? (d = x && (0, a.jsx)(S.default, {
            content: x,
            className: "rich-text:text-black"
        }), m[7] = x, m[8] = d) : d = m[8], m[9] !== p ? (o = p && (0, a.jsx)("div", {
            className: "mt-40",
            children: (0, a.jsx)(u.default, {
                href: p.url,
                label: p.label,
                variant: "link-black",
                icon: "arrowRight"
            })
        }), m[9] = p, m[10] = o) : o = m[10], m[11] !== t || m[12] !== n || m[13] !== d || m[14] !== o ? (c = (0, a.jsxs)("aside", {
            className: "rounded-xs bg-neutral-200 px-20 py-40 md:px-40 lg:p-80",
            children: [t, n, d, o]
        }), m[11] = t, m[12] = n, m[13] = d, m[14] = o, m[15] = c) : c = m[15], c
    };
    var T = e.i(253770),
        I = e.i(999750);
    let O = (e, a, t) => {
            let r, i, s, n, d, o = (0, l.c)(19),
                {
                    cryptoVouchers: m
                } = (0, c.useContext)(T.cryptoVouchersContext),
                {
                    activeCryptoVouchers: u
                } = m,
                {
                    entryChannel: h
                } = (0, c.useContext)(I.EntryChannelContext),
                {
                    activeEntryChannel: x
                } = h,
                f = "affiliate-anonymous" === x ? "affiliate-named" : x;
            if (o[0] !== u || o[1] !== x || o[2] !== h.affiliateName || o[3] !== a || o[4] !== e || o[5] !== f) {
                let l, t;
                o[9] !== f ? (l = e => {
                    let {
                        type: a
                    } = e;
                    return a === f
                }, o[9] = f, o[10] = l) : l = o[10];
                let n = u.find(l);
                o[11] === Symbol.for("react.memo_cache_sentinel") ? (t = /\{.*?\}/g, o[11] = t) : t = o[11];
                let d = t;
                r = e => ("referral" === x || "affiliate-named" === x) && n ? null : e, i = n ? .heroTitle ? "referral" === x && n ? n.heroTitle : "affiliate-named" === x && n ? n.heroTitle.replace(d, h.affiliateName) : e : e, s = n ? .heroSubtitle && ("referral" === x || "affiliate-named" === x) && n ? n.heroSubtitle : a, o[0] = u, o[1] = x, o[2] = h.affiliateName, o[3] = a, o[4] = e, o[5] = f, o[6] = r, o[7] = i, o[8] = s
            } else r = o[6], i = o[7], s = o[8];
            let p = s;
            o[12] !== t || o[13] !== r ? (n = r(t), o[12] = t, o[13] = r, o[14] = n) : n = o[14];
            let g = n;
            return o[15] !== g || o[16] !== p || o[17] !== i ? (d = {
                heroTitle: i,
                heroSubtitle: p,
                heroDescription: g
            }, o[15] = g, o[16] = p, o[17] = i, o[18] = d) : d = o[18], d
        },
        F = e => {
            let t, r, i, s, n = (0, l.c)(10),
                {
                    title: d,
                    subtitle: o,
                    description: c
                } = e,
                {
                    heroTitle: m,
                    heroSubtitle: u,
                    heroDescription: h
                } = O(d, o, c);
            return n[0] !== m ? (t = (0, a.jsx)("h1", {
                className: "text-balance responsive-display-3",
                children: m
            }), n[0] = m, n[1] = t) : t = n[1], n[2] !== u ? (r = u && (0, a.jsx)("h2", {
                className: "mt-12 heading-5-semi-bold lg:mb-40 lg:heading-4-semi-bold",
                children: u
            }), n[2] = u, n[3] = r) : r = n[3], n[4] !== h ? (i = h && (0, a.jsx)("p", {
                className: "mt-20 hidden lg:block",
                children: h
            }), n[4] = h, n[5] = i) : i = n[5], n[6] !== t || n[7] !== r || n[8] !== i ? (s = (0, a.jsxs)("article", {
                className: "mx-auto py-16 text-center lg:max-w-[70%]",
                children: [t, r, i]
            }), n[6] = t, n[7] = r, n[8] = i, n[9] = s) : s = n[9], s
        },
        V = e => {
            let t, r, s, n, o, c, m, u, x, f = (0, l.c)(28),
                {
                    title: p,
                    subtitle: g,
                    description: v,
                    hardwareWallets: b,
                    bundlesPacks: j,
                    accessories: y,
                    image: w,
                    smoothScroll: C,
                    showAccessories: N
                } = e,
                {
                    heroTitle: k,
                    heroSubtitle: _
                } = O(p, g, v);
            return f[0] !== k ? (t = (0, a.jsx)("h1", {
                className: "responsive-display-4",
                children: k
            }), f[0] = k, f[1] = t) : t = f[1], f[2] !== _ ? (r = _ && (0, a.jsx)("h2", {
                className: "text-body mt-16 text-neutral-700 lg:mb-40 lg:mt-16 lg:text-white",
                children: _
            }), f[2] = _, f[3] = r) : r = f[3], f[4] !== b || f[5] !== C ? (s = b ? .image && (0, a.jsx)(d, {
                title: b.title,
                imageUrl: b.image.url,
                anchorId: "category-cryptocurrency-wallets",
                dataCsOverrideId: "homeshop-anchor-hardware",
                smoothScroll: C
            }), f[4] = b, f[5] = C, f[6] = s) : s = f[6], f[7] !== y || f[8] !== N || f[9] !== C ? (n = N && y ? .image && (0, a.jsx)(d, {
                title: y.title,
                imageUrl: y.image.url,
                anchorId: "category-accessories",
                dataCsOverrideId: "homeshop-anchor-accessories",
                smoothScroll: C
            }), f[7] = y, f[8] = N, f[9] = C, f[10] = n) : n = f[10], f[11] !== j || f[12] !== C ? (o = j ? .image && (0, a.jsx)(d, {
                title: j.title,
                imageUrl: j.image.url,
                anchorId: "category-bundle",
                dataCsOverrideId: "homeshop-anchor-bundles",
                smoothScroll: C
            }), f[11] = j, f[12] = C, f[13] = o) : o = f[13], f[14] !== s || f[15] !== n || f[16] !== o ? (c = (0, a.jsxs)("nav", {
                className: "mb-32 mt-16 flex flex-wrap gap-8 lg:relative lg:z-10 lg:mb-32 lg:gap-24",
                children: [s, n, o]
            }), f[14] = s, f[15] = n, f[16] = o, f[17] = c) : c = f[17], f[18] !== t || f[19] !== r || f[20] !== c ? (m = (0, a.jsxs)("div", {
                className: "flex-1 pb-16 pt-40",
                children: [t, r, c]
            }), f[18] = t, f[19] = r, f[20] = c, f[21] = m) : m = f[21], f[22] !== w || f[23] !== p ? (u = w && (0, a.jsx)(i.default, {
                src: w.url,
                alt: p,
                height: 600,
                width: 400,
                priority: !0,
                className: "hidden lg:absolute lg:end-0 lg:bottom-0 lg:block lg:w-[45.2%]"
            }), f[22] = w, f[23] = p, f[24] = u) : u = f[24], f[25] !== m || f[26] !== u ? (x = (0, a.jsx)(h.default.Section, {
                verticalSpacing: "none",
                children: (0, a.jsxs)("article", {
                    className: "flex text-start text-black lg:relative lg:text-white",
                    children: [m, u]
                })
            }), f[25] = m, f[26] = u, f[27] = x) : x = f[27], x
        };

    function L(e) {
        let {
            handle: a
        } = e;
        return a
    }
    e.i(277551);
    var P = e.i(544808),
        R = e.i(349057),
        D = e.i(489180);
    e.i(917350);
    var B = e.i(753221),
        $ = e.i(708611),
        A = e.i(212376);

    function E(e) {
        let {
            title: l,
            description: t,
            image: r,
            link: i
        } = e;
        return (0, a.jsx)(z, {
            title: l,
            description: t,
            image: r,
            link: i
        }, l)
    }

    function H(e, l) {
        return (0, a.jsx)(D.default, {
            title: e.title,
            subtitle: e.subtitle,
            offerCards: e.offerCards,
            buyMode: "standard",
            size: e.cardSize,
            theme: e.theme
        }, `offers-recap-${l}`)
    }

    function M(e) {
        let a = document.getElementById(e);
        a && (a.scrollIntoView({
            behavior: "smooth"
        }), history.pushState(null, "", `#${e}`))
    }

    function U(e) {
        return e.offerCards.length > 0
    }
    e.s(["__N_SSG", 0, !0, "default", 0, function(e) {
        let r, i, d, o, c, m, u, x, f, p, g, v, b, j, y, w, C, S, z, T, I, O, D, W = (0, l.c)(71),
            {
                settings: X,
                footer: Y,
                content: q,
                navigationData: G
            } = e,
            {
                pageMeta: K,
                hero: J,
                srpAccessories: Q,
                hardwareWallets: Z,
                collaborations: ee,
                bundlesPacks: ea,
                accessories: el,
                contentBanner: et,
                contentTiles: er,
                focusFeature: ei,
                productCollection: es
            } = q,
            {
                enteredViaLedgerLive: en
            } = (0, R.default)(),
            {
                isDeviceAvailable: ed
            } = (0, A.default)();
        W[0] !== ed ? (r = e => {
            for (let a of e.variantLists)
                for (let e of a.variants)
                    if (ed(e.sku)) return !0;
            return !1
        }, W[0] = ed, W[1] = r) : r = W[1];
        let eo = r;
        W[2] !== eo ? (i = e => ({ ...e,
            offerCards: e.offerCards.filter(eo)
        }), W[2] = eo, W[3] = i) : i = W[3];
        let ec = es.map(i).filter(U),
            {
                accessoriesProducts: em
            } = ((e, a) => {
                let t, r, i = (0, l.c)(10);
                e: {
                    let l, r;
                    if (!e || !a) {
                        let e;
                        i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = [], i[0] = e) : e = i[0], t = e;
                        break e
                    }
                    i[1] !== a ? (l = new Set(a.map(L)), i[1] = a, i[2] = l) : l = i[2];
                    let s = l;
                    if (i[3] !== e || i[4] !== s) {
                        let a;
                        i[6] !== s ? (a = e => {
                            let {
                                handle: a
                            } = e;
                            return !s.has(a)
                        }, i[6] = s, i[7] = a) : a = i[7], r = e.filter(a), i[3] = e, i[4] = s, i[5] = r
                    } else r = i[5];t = r
                }
                let s = t,
                    n = (0, N.useAllowedProducts)(s);
                return i[8] !== n ? (r = {
                    accessoriesProducts: n
                }, i[8] = n, i[9] = r) : r = i[9], r
            })(el ? .products, Q ? .products),
            eu = em.length > 0,
            eh = t.default;
        W[4] === Symbol.for("react.memo_cache_sentinel") ? (d = {
            page_type: "homepage"
        }, W[4] = d) : d = W[4], W[5] !== el || W[6] !== ea || W[7] !== en || W[8] !== Z || W[9] !== eu || W[10] !== J ? (o = J && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("div", {
                className: (0, n.default)("p-16 lg:hidden", !en && "navigation-safe-space"),
                children: (0, a.jsx)(F, {
                    title: J.title,
                    subtitle: J.subtitle,
                    description: J.description
                })
            }), (0, a.jsx)("div", {
                className: (0, n.default)("lg:bg-grey-linear hidden lg:block", !en && "navigation-safe-space"),
                children: (0, a.jsx)(V, {
                    title: J.title,
                    subtitle: J.subtitle,
                    description: J.description,
                    image: J.heroImage,
                    hardwareWallets: Z,
                    bundlesPacks: ea,
                    accessories: el,
                    smoothScroll: M,
                    showAccessories: eu
                })
            })]
        }), W[5] = el, W[6] = ea, W[7] = en, W[8] = Z, W[9] = eu, W[10] = J, W[11] = o) : o = W[11];
        let ex = eu ? "grid-cols-3" : "grid-cols-2";
        W[12] !== ex ? (c = (0, n.default)("grid gap-16 lg:hidden", ex), W[12] = ex, W[13] = c) : c = W[13], W[14] !== Z ? (m = Z ? .image && (0, a.jsx)(s, {
            title: Z.title,
            image: Z.image,
            anchorId: "category-cryptocurrency-wallets",
            dataCsOverrideId: "homeshop-anchor-hardware",
            smoothScroll: M
        }), W[14] = Z, W[15] = m) : m = W[15], W[16] !== el || W[17] !== eu ? (u = el ? .image && eu && (0, a.jsx)(s, {
            title: el.title,
            image: el.image,
            anchorId: "category-accessories",
            dataCsOverrideId: "homeshop-anchor-accessories",
            smoothScroll: M
        }), W[16] = el, W[17] = eu, W[18] = u) : u = W[18], W[19] !== ea ? (x = ea ? .image && (0, a.jsx)(s, {
            title: ea.title,
            image: ea.image,
            anchorId: "category-bundle",
            dataCsOverrideId: "homeshop-anchor-bundles",
            smoothScroll: M
        }), W[19] = ea, W[20] = x) : x = W[20], W[21] !== m || W[22] !== u || W[23] !== x || W[24] !== c ? (f = (0, a.jsx)(h.default.Section, {
            verticalSpacing: "none",
            children: (0, a.jsxs)("nav", {
                className: c,
                children: [m, u, x]
            })
        }), W[21] = m, W[22] = u, W[23] = x, W[24] = c, W[25] = f) : f = W[25];
        let ef = B.default,
            ep = h.default,
            eg = ec.map(H);
        return W[26] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)($.default, {}), W[26] = p) : p = W[26], W[27] !== ep.Section || W[28] !== eg ? (g = (0, a.jsxs)(ep.Section, {
            children: [eg, p]
        }), W[27] = ep.Section, W[28] = eg, W[29] = g) : g = W[29], W[30] !== ef || W[31] !== g ? (v = (0, a.jsx)(ef, {
            id: "category-cryptocurrency-wallets",
            children: g
        }), W[30] = ef, W[31] = g, W[32] = v) : v = W[32], W[33] !== Q ? (b = Q && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(h.default.Divider, {}), (0, a.jsx)("div", {
                "data-cs-override-id": "section-srp-accessories",
                id: "category-srp-accessories",
                children: (0, a.jsx)(k, {
                    title: Q.title,
                    products: Q.products,
                    dataCsOverrideRoot: "card-srp-accessories",
                    headerLinkToDrawer: Q.headerLinkToDrawer,
                    priorityImages: !0
                })
            })]
        }), W[33] = Q, W[34] = b) : b = W[34], W[35] !== ei ? (j = ei && (0, a.jsx)(P.default, { ...ei,
            verticalSpacing: "small",
            theme: "light"
        }), W[35] = ei, W[36] = j) : j = W[36], W[37] !== f || W[38] !== v || W[39] !== b || W[40] !== j || W[41] !== o ? (y = (0, a.jsxs)("div", {
            className: "mx-auto w-full bg-neutral-50",
            children: [o, f, v, b, j]
        }), W[37] = f, W[38] = v, W[39] = b, W[40] = j, W[41] = o, W[42] = y) : y = W[42], W[43] !== ee ? (w = ee && ee.products.length > 0 && (0, a.jsx)("div", {
            "data-cs-override-id": "section-collaborations",
            id: "collaborations",
            className: "bg-metallic",
            children: (0, a.jsx)(k, {
                title: ee.title,
                products: ee.products,
                theme: "dark",
                condensedView: !0,
                dataCsOverrideRoot: "card-collab"
            })
        }), W[43] = ee, W[44] = w) : w = W[44], W[45] !== el || W[46] !== em || W[47] !== eu ? (C = el && eu && (0, a.jsx)("div", {
            "data-cs-override-id": "section-accessories",
            id: "category-accessories",
            children: (0, a.jsx)(k, {
                title: el.title,
                products: em,
                dataCsOverrideRoot: "card-accessories"
            })
        }), W[45] = el, W[46] = em, W[47] = eu, W[48] = C) : C = W[48], W[49] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, a.jsx)(h.default.Divider, {}), W[49] = S) : S = W[49], W[50] !== ea ? (z = ea && (0, a.jsx)("div", {
            "data-cs-override-id": "section-bundles",
            id: "category-bundle",
            children: (0, a.jsx)(k, {
                title: ea.title,
                products: ea.products,
                dataCsOverrideRoot: "card-bundle"
            })
        }), W[50] = ea, W[51] = z) : z = W[51], W[52] !== C || W[53] !== z ? (T = (0, a.jsxs)("div", {
            className: "bg-neutral-50",
            children: [C, S, z]
        }), W[52] = C, W[53] = z, W[54] = T) : T = W[54], W[55] !== et ? (I = et && (0, a.jsx)(_, {
            dataCsOverrideId: "block-compare-wallet",
            image: et.image,
            link: et.link,
            title: et.title
        }), W[55] = et, W[56] = I) : I = W[56], W[57] !== er ? (O = er && er.length > 0 && (0, a.jsx)("div", {
            className: "bg-neutral-50 py-48",
            children: (0, a.jsx)("div", {
                className: "mx-auto w-full max-w-(--breakpoint-2xl) px-16",
                children: (0, a.jsx)("div", {
                    className: "grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-32",
                    children: er.map(E)
                })
            })
        }), W[57] = er, W[58] = O) : O = W[58], W[59] !== eh || W[60] !== Y || W[61] !== G || W[62] !== K || W[63] !== X || W[64] !== y || W[65] !== w || W[66] !== T || W[67] !== I || W[68] !== O || W[69] !== d ? (D = (0, a.jsxs)(eh, {
            pageMeta: K,
            siteSettings: X,
            footer: Y,
            navigationData: G,
            trackingData: d,
            theme: "dark",
            isHomePage: !0,
            children: [y, w, T, I, O]
        }), W[59] = eh, W[60] = Y, W[61] = G, W[62] = K, W[63] = X, W[64] = y, W[65] = w, W[66] = T, W[67] = I, W[68] = O, W[69] = d, W[70] = D) : D = W[70], D
    }], 699336)
}, 215805, (e, a, l) => {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/", () => e.r(699336)]), a.hot && a.hot.dispose(function() {
        window.__NEXT_P.push(["/"])
    })
}, 648761, e => {
    e.v(a => Promise.all(["static/chunks/0~1y3rya3twqr.js"].map(a => e.l(a))).then(() => a(493594)))
}, 828805, e => {
    e.v(a => Promise.all(["static/chunks/17m4lcp7g44-4.js"].map(a => e.l(a))).then(() => a(879466)))
}, 854172, e => {
    e.v(a => Promise.all(["static/chunks/0t50en83hc_a7.js"].map(a => e.l(a))).then(() => a(202295)))
}, 153459, e => {
    e.v(a => Promise.all(["static/chunks/0oryq34t1edi..js"].map(a => e.l(a))).then(() => a(531976)))
}]);

//# sourceMappingURL=0cqdmwipd9v~q.js.map