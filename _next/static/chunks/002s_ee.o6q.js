(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 393783, 748016, 883820, e => {
    "use strict";
    var t = e.i(391398),
        l = e.i(261576);
    e.i(664157);
    var a = e.i(271179),
        i = e.i(191788);
    let r = e => {
        let a, i, r, s, n = (0, l.c)(10),
            {
                number: o,
                label: d
            } = e;
        n[0] !== d || n[1] !== o ? (a = "days" === d ? o.toString() : o.toString().padStart(2, "0"), n[0] = d, n[1] = o, n[2] = a) : a = n[2];
        let c = a;
        return n[3] !== c ? (i = (0, t.jsx)("span", {
            className: "responsive-display-4",
            children: c
        }), n[3] = c, n[4] = i) : i = n[4], n[5] !== d ? (r = (0, t.jsx)("span", {
            className: "heading-4-semi-bold",
            children: d
        }), n[5] = d, n[6] = r) : r = n[6], n[7] !== i || n[8] !== r ? (s = (0, t.jsxs)("div", {
            className: "flex items-center gap-8 text-white",
            children: [i, r]
        }), n[7] = i, n[8] = r, n[9] = s) : s = n[9], s
    };
    e.s(["default", 0, e => {
        let s, n, o, d, c, u, m, h, f, x, v, p, g, b, j, y = (0, l.c)(35),
            {
                countdownEndDate: w
            } = e,
            {
                t: k
            } = (0, a.useTranslation)("common");
        y[0] !== w ? (s = () => {
            let e = new Date,
                t = new Date(w).getTime() - e.getTime(),
                l = {
                    days: 0,
                    hours: 0,
                    minutes: 0
                };
            return t > 0 && (l = {
                days: Math.floor(t / 864e5),
                hours: Math.floor(t / 36e5 % 24),
                minutes: Math.ceil(t / 1e3 / 60 % 60)
            }), l
        }, y[0] = w, y[1] = s) : s = y[1];
        let N = s;
        y[2] !== N ? (n = N(), y[2] = N, y[3] = n) : n = y[3];
        let [C, P] = (0, i.useState)(n);
        y[4] !== N ? (o = () => {
            let e = setInterval(() => {
                P(N())
            }, 1e3);
            return () => clearInterval(e)
        }, y[4] = N, y[5] = o) : o = y[5], y[6] !== w ? (d = [w], y[6] = w, y[7] = d) : d = y[7], (0, i.useEffect)(o, d), y[8] !== k ? (c = (e, t) => k(`countdown.${e}`, {
            count: t
        }), y[8] = k, y[9] = c) : c = y[9];
        let S = c;
        y[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, t.jsx)("div", {
            className: "bg-grey-divider h-px w-full"
        }), y[10] = u) : u = y[10];
        let _ = C.days;
        y[11] !== S || y[12] !== C.days ? (m = S("days", C.days), y[11] = S, y[12] = C.days, y[13] = m) : m = y[13], y[14] !== m || y[15] !== C.days ? (h = (0, t.jsx)(r, {
            number: _,
            label: m
        }), y[14] = m, y[15] = C.days, y[16] = h) : h = y[16], y[17] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, t.jsx)("span", {
            className: "animate-countdownBlink text-neutral-700 responsive-display-4",
            children: ":"
        }), y[17] = f) : f = y[17];
        let T = C.hours;
        y[18] !== S || y[19] !== C.hours ? (x = S("hours", C.hours), y[18] = S, y[19] = C.hours, y[20] = x) : x = y[20], y[21] !== x || y[22] !== C.hours ? (v = (0, t.jsx)(r, {
            number: T,
            label: x
        }), y[21] = x, y[22] = C.hours, y[23] = v) : v = y[23], y[24] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, t.jsx)("span", {
            className: "animate-countdownBlink text-neutral-700 responsive-display-4",
            children: ":"
        }), y[24] = p) : p = y[24];
        let z = C.minutes;
        return y[25] !== S || y[26] !== C.minutes ? (g = S("minutes", C.minutes), y[25] = S, y[26] = C.minutes, y[27] = g) : g = y[27], y[28] !== g || y[29] !== C.minutes ? (b = (0, t.jsx)(r, {
            number: z,
            label: g
        }), y[28] = g, y[29] = C.minutes, y[30] = b) : b = y[30], y[31] !== v || y[32] !== b || y[33] !== h ? (j = (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
                children: [u, (0, t.jsx)("div", {
                    className: "pb-32 pt-32",
                    children: (0, t.jsxs)("div", {
                        className: "flex justify-center gap-8 sm:gap-40 md:gap-80",
                        children: [h, f, v, p, b]
                    })
                })]
            })
        }), y[31] = v, y[32] = b, y[33] = h, y[34] = j) : j = y[34], j
    }], 393783);
    var s = e.i(126019),
        n = e.i(455108);
    e.i(286941);
    var o = e.i(126762),
        d = e.i(495854),
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
        let a, i, r, v, p, g, b, j = (0, l.c)(26),
            {
                title: y,
                contentBlocks: w,
                theme: k,
                dataCsOverrideId: N,
                sizeVariant: C
            } = e,
            P = "compact" === C ? 24 : 48,
            S = "dark" === k ? "bg-black text-white" : "bg-neutral-50 text-black";
        j[0] !== S ? (a = (0, d.default)(S), j[0] = S, j[1] = a) : a = j[1], j[2] !== y ? (i = y && (0, t.jsx)("h3", {
            className: "responsive-display-4 mb-16 text-center",
            "data-testid": "icon-cards-title",
            children: y
        }), j[2] = y, j[3] = i) : i = j[3];
        let _ = "dark" === k ? "divide-neutral-600" : "divide-neutral-200";
        if (j[4] !== _ ? (r = (0, d.default)("flex flex-col max-md:divide-y md:flex-row md:divide-x md:py-32 rtl:md:divide-x-reverse", _), j[4] = _, j[5] = r) : r = j[5], j[6] !== w || j[7] !== N || j[8] !== P || j[9] !== C || j[10] !== k) {
            let e;
            j[12] !== N || j[13] !== P || j[14] !== C || j[15] !== k ? (e = (e, l) => (0, t.jsxs)("div", {
                className: (0, d.default)("flex w-full flex-col gap-16 px-40 py-32 first:ps-0 last:pe-0 max-md:px-0", !x(e) && "max-md:items-center"),
                "data-cs-override-id": N && `${N}-${l+1}`,
                children: [(0, t.jsxs)("div", {
                    className: (0, d.default)("flex", "compact" === C ? (0, d.default)("flex-row items-center gap-8", !x(e) && "justify-center") : "flex-col gap-16"),
                    children: [e.image && (0, t.jsx)(m.motion.div, { ...f(0),
                        children: (0, t.jsx)(s.default, {
                            src: e.image.url,
                            alt: e.image.title ? ? "",
                            width: P,
                            height: P,
                            "data-testid": "icon-cards-image"
                        })
                    }), (0, t.jsx)(m.motion.h4, { ...f(.15),
                        className: "heading-4-semi-bold",
                        children: e.title
                    })]
                }), e.subtitle && (0, t.jsx)(m.motion.span, { ...f(.3),
                    children: (0, t.jsx)("p", {
                        className: (0, d.default)("body-1 m-0 font-normal", "dark" === k ? "text-neutral-200" : "text-neutral-800"),
                        children: e.subtitle
                    })
                }), e.description && (0, t.jsx)(m.motion.span, { ...f(.3),
                    children: (0, t.jsx)(o.default, {
                        content: e.description,
                        className: (0, d.default)("rich-text-p:m-0 rich-text-p:heading-4", "dark" === k ? "text-neutral-200" : "text-neutral-800")
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
                        className: (0, d.default)("group flex items-center gap-4", !x(e) && "max-md:justify-center"),
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
            }, e.title), j[12] = N, j[13] = P, j[14] = C, j[15] = k, j[16] = e) : e = j[16], v = w.map(e), j[6] = w, j[7] = N, j[8] = P, j[9] = C, j[10] = k, j[11] = v
        } else v = j[11];
        return j[17] !== r || j[18] !== v ? (p = (0, t.jsx)("div", {
            className: r,
            children: v
        }), j[17] = r, j[18] = v, j[19] = p) : p = j[19], j[20] !== i || j[21] !== p ? (g = (0, t.jsxs)(n.default.Section, {
            verticalSpacing: "none",
            children: [i, p]
        }), j[20] = i, j[21] = p, j[22] = g) : g = j[22], j[23] !== a || j[24] !== g ? (b = (0, t.jsx)("div", {
            className: a,
            "data-testid": "icon-cards",
            children: g
        }), j[23] = a, j[24] = g, j[25] = b) : b = j[25], b
    }], 748016), e.s([], 883820)
}, 747815, e => {
    "use strict";
    var t = e.i(391398),
        l = e.i(261576),
        a = e.i(191788),
        i = e.i(648684),
        r = e.i(870155),
        s = e.i(495854);
    e.i(937412);
    var n = e.i(339668),
        o = e.i(722068),
        d = e.i(455108),
        c = e.i(126019),
        u = e.i(992219);
    let m = e => {
            let a, i, r, n, o, d, u = (0, l.c)(18),
                {
                    visualPositionLeft: m,
                    image: h,
                    imageForMobile: f,
                    theme: x
                } = e;
            if (!h) return null;
            let v = h.title || "Product image",
                p = f ? .title || v,
                g = h.url,
                b = m ? "left-0" : "right-0",
                j = f && "hidden md:block";
            u[0] !== b || u[1] !== j ? (a = (0, s.default)("absolute top-0 bottom-0 z-0 h-full w-3/5 object-cover object-right xl:w-auto xl:object-center", b, j), u[0] = b, u[1] = j, u[2] = a) : a = u[2], u[3] !== v || u[4] !== h.url || u[5] !== a ? (i = (0, t.jsx)(c.default, {
                src: g,
                alt: v,
                className: a,
                priority: !0,
                sizes: "max-height: 100vh, 100vw",
                width: 748,
                height: 600
            }), u[3] = v, u[4] = h.url, u[5] = a, u[6] = i) : i = u[6], u[7] !== f || u[8] !== p ? (r = f && (0, t.jsx)(c.default, {
                src: f.url,
                alt: p,
                className: "block h-full w-full object-contain md:hidden",
                priority: !0,
                sizes: "320px",
                width: 320,
                height: 320
            }), u[7] = f, u[8] = p, u[9] = r) : r = u[9];
            let y = "dark" === x ? "bg-linear-to-t from-black via-black/80 to-transparent" : "bg-linear-to-t from-neutral-50 via-neutral-50/90";
            return u[10] !== y ? (n = (0, s.default)("pointer-events-none absolute right-0 bottom-0 left-0 z-30 h-256 lg:hidden lg:h-256", y), u[10] = y, u[11] = n) : n = u[11], u[12] !== n ? (o = (0, t.jsx)("div", {
                className: n
            }), u[12] = n, u[13] = o) : o = u[13], u[14] !== i || u[15] !== r || u[16] !== o ? (d = (0, t.jsxs)("div", {
                className: "relative -mt-[72px] flex w-full justify-center md:static md:w-auto lg:mt-0",
                children: [i, r, o]
            }), u[14] = i, u[15] = r, u[16] = o, u[17] = d) : d = u[17], d
        },
        h = e => {
            let a, i, r, n, o = (0, l.c)(12),
                {
                    image: d,
                    imageForMobile: u
                } = e;
            if (!d) return null;
            let m = d.title || "Product image",
                h = u ? .title || m,
                f = d.url,
                x = u && "hidden lg:block";
            return o[0] !== x ? (a = (0, s.default)("block max-h-256 object-contain lg:max-h-full", x), o[0] = x, o[1] = a) : a = o[1], o[2] !== m || o[3] !== d.url || o[4] !== a ? (i = (0, t.jsx)(c.default, {
                src: f,
                alt: m,
                className: a,
                priority: !0,
                sizes: "(max-width: 748px) 100vw, 748px",
                width: 748,
                height: 600
            }), o[2] = m, o[3] = d.url, o[4] = a, o[5] = i) : i = o[5], o[6] !== u || o[7] !== h ? (r = u && (0, t.jsx)(c.default, {
                src: u.url,
                alt: h,
                className: "block w-full object-contain lg:hidden",
                priority: !0,
                sizes: "320px",
                width: 320,
                height: 320
            }), o[6] = u, o[7] = h, o[8] = r) : r = o[8], o[9] !== i || o[10] !== r ? (n = (0, t.jsxs)("div", {
                className: "relative z-10 flex justify-center lg:static",
                children: [i, r]
            }), o[9] = i, o[10] = r, o[11] = n) : n = o[11], n
        },
        f = e => {
            let a = (0, l.c)(12),
                {
                    videoUrl: i,
                    loopVideo: r,
                    welcomingVideo: n,
                    fullScreenVisual: o,
                    visualPositionLeft: d,
                    image: c,
                    imageForMobile: f,
                    theme: x
                } = e,
                v = void 0 === r || r;
            if (i && n && !o) {
                let e, l;
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, s.default)("max-h-256 w-full md:max-h-full"), a[0] = e) : e = a[0], a[1] !== v || a[2] !== i ? (l = (0, t.jsx)("div", {
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
                }), a[1] = v, a[2] = i, a[3] = l) : l = a[3], l
            }
            if (c) {
                let e;
                if (o) {
                    let e;
                    return a[4] !== c || a[5] !== f || a[6] !== x || a[7] !== d ? (e = (0, t.jsx)(m, {
                        visualPositionLeft: d,
                        image: c,
                        imageForMobile: f,
                        theme: x
                    }), a[4] = c, a[5] = f, a[6] = x, a[7] = d, a[8] = e) : e = a[8], e
                }
                return a[9] !== c || a[10] !== f ? (e = (0, t.jsx)(h, {
                    image: c,
                    imageForMobile: f
                }), a[9] = c, a[10] = f, a[11] = e) : e = a[11], e
            }
            return null
        };
    e.i(664157);
    var x = e.i(271179);
    e.i(366539);
    var v = e.i(150077);
    e.i(544063);
    var p = e.i(525487);
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
    var P = e.i(627528),
        S = e.i(79564);

    function _(e) {
        let a, i, r = (0, l.c)(6),
            {
                scrollToButton: s,
                theme: n
            } = e,
            {
                t: o
            } = (0, x.useTranslation)("common");
        r[0] !== o ? (a = o("productCards.learnMore"), r[0] = o, r[1] = a) : a = r[1];
        let d = "light" === n ? "primary-black" : "primary-white";
        return r[2] !== s || r[3] !== a || r[4] !== d ? (i = (0, t.jsx)(w.default, {
            label: a,
            onClick: s,
            icon: "arrowDown",
            dataTestId: "marketing-page-learn-more",
            size: "medium",
            variant: d,
            dataCsOverrideId: "learnmore-anchor"
        }), r[2] = s, r[3] = a, r[4] = d, r[5] = i) : i = r[5], i
    }
    var T = e.i(766442),
        z = e.i(212376);
    let I = e => {
        let i, r, n, o, d, c, u, m, h, f, I, V, F, L, M = (0, l.c)(62),
            {
                productVariants: D,
                currentVariant: O,
                setCurrentVariant: A,
                primaryVariants: B,
                secondaryVariants: E,
                theme: R,
                visualPositionLeft: q,
                scrollToButton: $,
                onVariantChange: H
            } = e,
            {
                t: U
            } = (0, x.useTranslation)("common");
        M[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
            placement: "marketingPageHeader"
        }, M[0] = i) : i = M[0];
        let {
            add: Q
        } = (0, S.default)(i), {
            cryptoVouchers: G
        } = (0, a.useContext)(k.cryptoVouchersContext), {
            entryChannel: Y
        } = (0, a.useContext)(C.EntryChannelContext), {
            isUSAvailable: W
        } = (0, T.default)(), {
            isDeviceAvailable: X
        } = (0, z.default)(), {
            discountLabel: K,
            shippingTag: J
        } = O, Z = (0, j.default)(O), ee = J ? .title, et = B ? .variants ? .length || E ? .variants ? .length;
        M[1] !== G.activeCryptoVouchers || M[2] !== O.id || M[3] !== Y ? (r = (0, N.default)(Y, G.activeCryptoVouchers, O.id), M[1] = G.activeCryptoVouchers, M[2] = O.id, M[3] = Y, M[4] = r) : r = M[4];
        let el = r;
        M[5] !== H || M[6] !== A ? (n = e => {
            A(e), H ? .(e)
        }, M[5] = H, M[6] = A, M[7] = n) : n = M[7];
        let ea = n,
            {
                availableForSale: ei,
                bisFormName: er,
                productHandle: es,
                maxQuantityAllowed: en,
                id: eo
            } = O;
        M[8] !== ei || M[9] !== O.sku || M[10] !== X || M[11] !== W || M[12] !== eo ? (o = ei && W(eo) && X(O.sku), M[8] = ei, M[9] = O.sku, M[10] = X, M[11] = W, M[12] = eo, M[13] = o) : o = M[13];
        let ed = o,
            ec = "light" === R ? "secondary-black" : "secondary-white";
        M[14] !== Q || M[15] !== en || M[16] !== es || M[17] !== eo ? (d = () => {
            Q([{
                product: {
                    handle: es,
                    maxQuantityAllowed: en
                },
                variantId: eo,
                quantityToAdd: 1
            }])
        }, M[14] = Q, M[15] = en, M[16] = es, M[17] = eo, M[18] = d) : d = M[18];
        let eu = d,
            em = q ? "md:items-end" : "md:items-start";
        return M[19] !== em ? (c = (0, s.default)("flex flex-col items-center gap-24 md:gap-32", em), M[19] = em, M[20] = c) : c = M[20], M[21] !== O || M[22] !== ea || M[23] !== B || M[24] !== D || M[25] !== E || M[26] !== et || M[27] !== R || M[28] !== K || M[29] !== q ? (u = et && (0, t.jsxs)("div", {
            className: (0, s.default)("flex items-center gap-16", q ? "md:items-end" : "md:items-start", E ? .variants ? .length ? "flex-col-reverse" : "flex-col md:flex-row md:items-center"),
            children: [(0, t.jsx)(g.default, {
                className: (0, s.default)("flex flex-col items-center text-right md:items-end", q ? "md:items-end" : "md:items-start"),
                currentVariant: O,
                onChange: ea,
                showColorName: !1,
                variants: D,
                primaryVariants: B,
                secondaryVariants: E,
                theme: R
            }), (0, t.jsx)(v.default, {
                size: "large",
                direction: "horizontal",
                variant: O,
                center: !0,
                showDiscount: !!K,
                discountLabel: K,
                theme: R
            })]
        }), M[21] = O, M[22] = ea, M[23] = B, M[24] = D, M[25] = E, M[26] = et, M[27] = R, M[28] = K, M[29] = q, M[30] = u) : u = M[30], M[31] !== el || M[32] !== R ? (m = el && (0, t.jsx)("div", {
            className: "w-fit shrink-0",
            children: (0, t.jsx)(P.default, {
                label: el.cardLabel,
                theme: R,
                cryptoCurrency: el.cryptoCurrency,
                ...el.link && {
                    drawer: el.link
                }
            })
        }), M[31] = el, M[32] = R, M[33] = m) : m = M[33], M[34] !== er || M[35] !== ec || M[36] !== O || M[37] !== eu || M[38] !== ed || M[39] !== U ? (h = (0, t.jsx)("div", {
            className: "flex",
            children: !ed && er ? (0, t.jsx)(p.default, {
                formName: er,
                variant: O,
                buttonVariant: ec,
                buttonSize: "medium",
                dataCsOverrideId: "notify-me-CTA"
            }) : (0, t.jsx)(w.default, {
                size: "medium",
                label: U(ed ? "productCards.addToCard" : "productCards.outOfStock"),
                onClick: eu,
                isDisabled: !ed,
                variant: ec,
                dataTestId: "marketing-header-pdp-add-to-cart",
                dataCsOverrideId: "add-to-cart-CTA"
            })
        }), M[34] = er, M[35] = ec, M[36] = O, M[37] = eu, M[38] = ed, M[39] = U, M[40] = h) : h = M[40], M[41] !== $ || M[42] !== R ? (f = $ && (0, t.jsx)(_, {
            scrollToButton: $,
            theme: R
        }), M[41] = $, M[42] = R, M[43] = f) : f = M[43], M[44] !== h || M[45] !== f ? (I = (0, t.jsxs)("div", {
            className: "flex gap-16",
            children: [h, f]
        }), M[44] = h, M[45] = f, M[46] = I) : I = M[46], M[47] !== Z || M[48] !== J || M[49] !== ee ? (V = ee ? (0, t.jsx)(b.default, {
            label: J.title,
            variant: J.variant ? ? "primary",
            icon: J.icon ? ? "informationFillFlexMP"
        }) : Z ? (0, t.jsx)(b.default, {
            label: Z.batchMessage,
            icon: "informationFillFlexMP"
        }) : null, M[47] = Z, M[48] = J, M[49] = ee, M[50] = V) : V = M[50], M[51] !== O.promoInfoLink || M[52] !== O.promoInfoText || M[53] !== R ? (F = O ? .promoInfoText && (0, t.jsx)("div", {
            className: "flex justify-center md:justify-end",
            children: (0, t.jsx)(y.default, {
                promoInfoText: O.promoInfoText,
                promoInfoLink: O.promoInfoLink,
                theme: R
            })
        }), M[51] = O.promoInfoLink, M[52] = O.promoInfoText, M[53] = R, M[54] = F) : F = M[54], M[55] !== I || M[56] !== V || M[57] !== F || M[58] !== c || M[59] !== u || M[60] !== m ? (L = (0, t.jsxs)("div", {
            className: c,
            children: [u, m, I, V, F]
        }), M[55] = I, M[56] = V, M[57] = F, M[58] = c, M[59] = u, M[60] = m, M[61] = L) : L = M[61], L
    };
    var V = e.i(349057);
    let F = e => {
        let a, i, r, n, o = (0, l.c)(13),
            {
                videoUrl: d,
                videoUrlMobile: c,
                loopVideo: m,
                theme: h
            } = e,
            f = void 0 !== m && m;
        if (!d) return null;
        let x = c && "hidden md:block";
        return o[0] !== x ? (a = (0, s.default)("w-full object-cover md:absolute md:inset-0 md:h-full md:object-[60%_50%] lg:object-[55%_50%] xl:object-[40%_50%]", x), o[0] = x, o[1] = a) : a = o[1], o[2] !== f || o[3] !== a || o[4] !== d ? (i = (0, t.jsx)(u.default, {
            source: d,
            loop: f,
            playsInline: !0,
            className: a,
            autoPlay: !0,
            muted: !0
        }), o[2] = f, o[3] = a, o[4] = d, o[5] = i) : i = o[5], o[6] !== f || o[7] !== h || o[8] !== c ? (r = c && (0, t.jsxs)(t.Fragment, {
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
        }), o[6] = f, o[7] = h, o[8] = c, o[9] = r) : r = o[9], o[10] !== i || o[11] !== r ? (n = (0, t.jsxs)("div", {
            "aria-label": "Product video",
            className: "relative inset-0 mx-auto w-full max-w-[2000px] object-cover md:absolute md:block md:h-full",
            children: [i, r]
        }), o[10] = i, o[11] = r, o[12] = n) : n = o[12], n
    };
    var L = e.i(393783);
    let M = (0, i.cva)(["relative mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col items-center"], {
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
        D = (0, i.cva)(["pointer-events-none absolute right-0 bottom-0 left-0 z-10 hidden h-3/4 lg:block"], {
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
        B = (0, i.cva)(["flex flex-col items-center gap-8"], {
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
        let i, u, m, h, x, v, p, g, b, j, y, k, N, C, P, S, T, z, E, R, q, $, H, U, Q, G = (0, l.c)(103),
            {
                title: Y,
                titleSize: W,
                miniTitle: X,
                description: K,
                videoUrl: J,
                videoUrlMobile: Z,
                loopVideo: ee,
                emphasisStyle: et,
                productVariants: el,
                highlightBlock: ea,
                theme: ei,
                setCurrentVariant: er,
                currentVariant: es,
                primaryVariants: en,
                secondaryVariants: eo,
                scrollToButton: ed,
                visualPositionLeft: ec,
                backgroundImage: eu,
                fullScreenVisual: em,
                image: eh,
                imageForMobile: ef,
                heroProductFeatures: ex,
                cta: ev,
                ctaSecondary: ep,
                countdownEndDate: eg
            } = e,
            eb = void 0 === W ? "responsive-display-3" : W,
            ej = void 0 === et ? "primary" : et,
            ey = void 0 === ei ? "dark" : ei,
            ew = void 0 === ec || ec,
            [ek, eN] = (0, a.useState)(!!J),
            [eC, eP] = (0, a.useState)(!!eh),
            {
                enteredViaLedgerLive: eS
            } = (0, V.default)(),
            e_ = em && (ek || eC),
            eT = !!(eu || e_),
            ez = eC ? ef : es ? .headerAssetMobile,
            eI = eC ? eh : em && J && ek ? void 0 : es ? .headerAsset,
            eV = Y || "";
        G[0] !== eV ? (i = (0, r.default)(eV, {
            style: "thin"
        }), G[0] = eV, G[1] = i) : i = G[1];
        let eF = i,
            eL = K || "";
        G[2] !== ej || G[3] !== eL ? (u = (0, r.default)(eL, {
            style: ej
        }), G[2] = ej, G[3] = eL, G[4] = u) : u = G[4];
        let eM = u;
        G[5] === Symbol.for("react.memo_cache_sentinel") ? (m = e => {
            eN(!1), eP(!1)
        }, G[5] = m) : m = G[5];
        let eD = m,
            eO = "dark" === ey ? "bg-black" : "bg-neutral-50",
            eA = ew ? "md:items-end rtl:md:items-start rtl:md:justify-start" : "md:items-start rtl:md:items-end rtl:md:justify-end",
            eB = !e_ && "md:flex-col md:justify-center",
            eE = !eS && "navigation-safe-space";
        G[6] !== eO || G[7] !== eA || G[8] !== eB || G[9] !== eE ? (h = (0, s.default)("relative md:flex md:flex-col", eO, eA, eB, eE), G[6] = eO, G[7] = eA, G[8] = eB, G[9] = eE, G[10] = h) : h = G[10], G[11] !== eu ? (x = eu && (0, t.jsx)(c.default, {
            src: eu.url,
            alt: eu.title ? ? "",
            fill: !0,
            className: (0, s.default)("absolute inset-0 hidden object-cover md:block"),
            sizes: "(max-width: 1200px) 100vw, 1200px"
        }), G[11] = eu, G[12] = x) : x = G[12], G[13] !== em || G[14] !== ee || G[15] !== ey || G[16] !== J || G[17] !== Z || G[18] !== ek ? (v = em && J && ek && (0, t.jsx)(F, {
            videoUrl: J,
            videoUrlMobile: Z,
            loopVideo: ee,
            theme: ey
        }), G[13] = em, G[14] = ee, G[15] = ey, G[16] = J, G[17] = Z, G[18] = ek, G[19] = v) : v = G[19];
        let eR = ew ? "left" : "right",
            eq = !!e_;
        G[20] !== eR || G[21] !== eq || G[22] !== ey ? (p = M({
            theme: ey,
            visualPosition: eR,
            fullScreenVisual: eq
        }), G[20] = eR, G[21] = eq, G[22] = ey, G[23] = p) : p = G[23];
        let e$ = ek ? null : ez;
        G[24] !== eI || G[25] !== ee || G[26] !== e_ || G[27] !== e$ || G[28] !== ey || G[29] !== J || G[30] !== ew || G[31] !== ek ? (g = (0, t.jsx)("div", {
            className: "w-full flex-1",
            children: (0, t.jsx)(f, {
                videoUrl: J,
                visualPositionLeft: ew,
                image: eI,
                imageForMobile: e$,
                welcomingVideo: ek,
                loopVideo: ee,
                fullScreenVisual: e_,
                theme: ey
            })
        }), G[24] = eI, G[25] = ee, G[26] = e_, G[27] = e$, G[28] = ey, G[29] = J, G[30] = ew, G[31] = ek, G[32] = g) : g = G[32], G[33] !== eg || G[34] !== e_ || G[35] !== ew ? (b = (0, s.default)(O({
            visualPosition: ew ? "left" : "right",
            fullScreenVisual: !!e_
        }), eg && "pb-48 lg:pb-24"), G[33] = eg, G[34] = e_, G[35] = ew, G[36] = b) : b = G[36];
        let eH = ew ? "left" : "right";
        G[37] !== eH ? (j = A({
            visualPosition: eH
        }), G[37] = eH, G[38] = j) : j = G[38], G[39] !== X || G[40] !== ey ? (y = X && (0, t.jsx)(d.default.TagHud, {
            label: X,
            size: "medium",
            theme: ey,
            variant: "purple"
        }), G[39] = X, G[40] = ey, G[41] = y) : y = G[41], G[42] !== eb ? (k = (0, s.default)(eb, "md:mb-8 md:max-w-[560px] lg:max-w-[789px] xl:max-w-full"), G[42] = eb, G[43] = k) : k = G[43], G[44] !== eF || G[45] !== k ? (N = (0, t.jsx)("h1", {
            className: k,
            children: eF
        }), G[44] = eF, G[45] = k, G[46] = N) : N = G[46];
        let eU = "dark" === ey ? "text-white" : "text-neutral-800";
        return G[47] !== eU ? (C = (0, s.default)("heading-4 flex w-auto items-center md:pr-16 [&>span]:py-0", eU), G[47] = eU, G[48] = C) : C = G[48], G[49] !== eM || G[50] !== C ? (P = (0, t.jsx)("p", {
            className: C,
            children: eM
        }), G[49] = eM, G[50] = C, G[51] = P) : P = G[51], G[52] !== j || G[53] !== y || G[54] !== N || G[55] !== P ? (S = (0, t.jsxs)("div", {
            className: j,
            children: [y, N, P]
        }), G[52] = j, G[53] = y, G[54] = N, G[55] = P, G[56] = S) : S = G[56], G[57] !== ea ? (T = ea ? .text && (0, t.jsx)(n.default, {
            text: ea.text,
            image: ea.image,
            theme: "dark",
            hideImageMobile: !0
        }), G[57] = ea, G[58] = T) : T = G[58], G[59] !== es || G[60] !== en || G[61] !== el || G[62] !== ed || G[63] !== eo || G[64] !== er || G[65] !== ey || G[66] !== ew ? (z = es && er && (0, t.jsx)(I, {
            productVariants: el,
            currentVariant: es,
            setCurrentVariant: er,
            primaryVariants: en,
            secondaryVariants: eo,
            theme: ey,
            visualPositionLeft: ew ? ? !0,
            scrollToButton: ed,
            onVariantChange: eD
        }), G[59] = es, G[60] = en, G[61] = el, G[62] = ed, G[63] = eo, G[64] = er, G[65] = ey, G[66] = ew, G[67] = z) : z = G[67], G[68] !== ev || G[69] !== ep || G[70] !== es || G[71] !== ed || G[72] !== ey ? (E = !es && (0, t.jsxs)("div", {
            className: "flex flex-wrap justify-center gap-16 md:flex-nowrap",
            children: [ev && (0, t.jsx)(w.default, {
                label: ev.label,
                href: ev.url,
                size: "medium",
                variant: "light" === ey ? "secondary-black" : "secondary-white",
                ...ev.displayDownloadIcon && {
                    icon: "download"
                }
            }), ep && !ed && (0, t.jsx)(w.default, {
                label: ep.label,
                href: ep.url,
                size: "medium",
                variant: "light" === ey ? "primary-black" : "primary-white",
                ...ep.displayDownloadIcon && {
                    icon: "download"
                }
            }), ed && (0, t.jsx)(_, {
                scrollToButton: ed,
                theme: ey
            })]
        }), G[68] = ev, G[69] = ep, G[70] = es, G[71] = ed, G[72] = ey, G[73] = E) : E = G[73], G[74] !== ex || G[75] !== ey || G[76] !== ew ? (R = ex && ex.length > 0 && (0, t.jsx)("div", {
            className: B({
                visualPosition: ew ? "left" : "right"
            }),
            children: ex.map(e => {
                let {
                    title: l,
                    icon: a
                } = e;
                return (0, t.jsx)(o.default, {
                    message: l,
                    icon: a,
                    variant: "default",
                    theme: ey,
                    size: "small"
                }, l)
            })
        }), G[74] = ex, G[75] = ey, G[76] = ew, G[77] = R) : R = G[77], G[78] !== b || G[79] !== S || G[80] !== T || G[81] !== z || G[82] !== E || G[83] !== R ? (q = (0, t.jsxs)("div", {
            className: b,
            children: [S, T, z, E, R]
        }), G[78] = b, G[79] = S, G[80] = T, G[81] = z, G[82] = E, G[83] = R, G[84] = q) : q = G[84], G[85] !== p || G[86] !== g || G[87] !== q ? ($ = (0, t.jsxs)("div", {
            "data-testid": "marketing-header-container",
            className: p,
            children: [g, q]
        }), G[85] = p, G[86] = g, G[87] = q, G[88] = $) : $ = G[88], G[89] !== eu || G[90] !== eg || G[91] !== eT || G[92] !== ey ? (H = eT && (0, t.jsx)("div", {
            className: D({
                theme: ey,
                size: eg ? "extraLarge" : eu ? "large" : "small"
            })
        }), G[89] = eu, G[90] = eg, G[91] = eT, G[92] = ey, G[93] = H) : H = G[93], G[94] !== eg ? (U = eg && (0, t.jsx)("div", {
            className: "z-20 w-full",
            children: (0, t.jsx)(L.default, {
                countdownEndDate: eg
            })
        }), G[94] = eg, G[95] = U) : U = G[95], G[96] !== h || G[97] !== x || G[98] !== v || G[99] !== $ || G[100] !== H || G[101] !== U ? (Q = (0, t.jsxs)("header", {
            className: h,
            "data-cs-override-id": "hero-block",
            children: [x, v, $, H, U]
        }), G[96] = h, G[97] = x, G[98] = v, G[99] = $, G[100] = H, G[101] = U, G[102] = Q) : Q = G[102], Q
    }], 747815)
}, 685472, e => {
    "use strict";
    let t = e.i(462948).default;
    e.s(["default", 0, t])
}, 554694, e => {
    "use strict";
    e.s(["generateDefaultVariant", 0, e => {
        let [{
            availableForSale: t,
            handle: l,
            id: a,
            image: i,
            maxQuantityAllowed: r,
            price: s,
            productAssociated: n,
            productHandle: o,
            selectedOptions: d,
            sku: c,
            title: u
        }] = e;
        return {
            availableForSale: t,
            bisFormName: null,
            contentfulId: "",
            discountLabel: null,
            handle: l,
            headerAsset: null,
            headerAssetMobile: null,
            id: a,
            image: i,
            maxQuantityAllowed: r,
            price: s,
            pricePrefix: null,
            priceSuffix: null,
            productAssociated: n,
            productHandle: o,
            promoInfoLink: null,
            promoInfoText: null,
            promotionImage: null,
            promotionImageMobile: null,
            selectedOptions: d,
            shippingTag: null,
            sku: c,
            title: u
        }
    }])
}, 937412, 339668, e => {
    "use strict";
    var t = e.i(391398),
        l = e.i(261576),
        a = e.i(870155),
        i = e.i(495854);
    e.i(828684);
    var r = e.i(454720),
        s = e.i(126019);
    e.i(108399);
    var n = e.i(860231),
        o = e.i(41158);

    function d(e) {
        let a, r, d, c, u, m, h, f, x, v, p = (0, l.c)(25),
            {
                image: g,
                hideImageMobile: b,
                text: j,
                subText: y,
                hasDrawer: w,
                link: k,
                isClickable: N
            } = e;
        return p[0] !== b || p[1] !== g ? (a = g && "object" == typeof g && (0, t.jsx)(s.default, {
            src: g.url,
            alt: g.title || "",
            height: 40,
            width: 40,
            className: (0, i.default)("md:flex", b && "hidden")
        }), p[0] = b, p[1] = g, p[2] = a) : a = p[2], p[3] !== g ? (r = "string" == typeof g && (0, t.jsx)(n.default, {
            name: g,
            size: 20,
            strokeWidth: 3.5
        }), p[3] = g, p[4] = r) : r = p[4], p[5] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, i.default)("flex flex-col items-start gap-1"), c = (0, i.default)("text-start"), p[5] = d, p[6] = c) : (d = p[5], c = p[6]), p[7] !== j ? (u = (0, t.jsx)("span", {
            className: c,
            children: j
        }), p[7] = j, p[8] = u) : u = p[8], p[9] !== y ? (m = y && (0, t.jsx)("span", {
            className: (0, i.default)("text-start"),
            children: y
        }), p[9] = y, p[10] = m) : m = p[10], p[11] !== w || p[12] !== k ? (h = !w && k ? .url && (0, t.jsx)(o.default, {
            href: k.url,
            className: "underline",
            children: k.label
        }), p[11] = w, p[12] = k, p[13] = h) : h = p[13], p[14] !== u || p[15] !== m || p[16] !== h ? (f = (0, t.jsxs)("div", {
            className: d,
            children: [u, m, h]
        }), p[14] = u, p[15] = m, p[16] = h, p[17] = f) : f = p[17], p[18] !== N ? (x = N && (0, t.jsx)("span", {
            className: "ms-auto",
            children: (0, t.jsx)(n.default, {
                name: "arrowRight",
                size: 20,
                strokeWidth: 3.5
            })
        }), p[18] = N, p[19] = x) : x = p[19], p[20] !== a || p[21] !== r || p[22] !== f || p[23] !== x ? (v = (0, t.jsxs)(t.Fragment, {
            children: [a, r, f, x]
        }), p[20] = a, p[21] = r, p[22] = f, p[23] = x, p[24] = v) : v = p[24], v
    }
    e.s(["default", 0, e => {
        var s;
        let n, o, c, u, m, h, f = (0, l.c)(37),
            {
                text: x,
                subText: v,
                link: p,
                image: g,
                theme: b,
                isFull: j,
                hideImageMobile: y,
                textSize: w,
                onClick: k
            } = e,
            N = void 0 === b ? "light" : b,
            C = void 0 !== y && y;
        f[0] !== x ? (n = (0, a.default)(x, {
            font: "bold"
        }), f[0] = x, f[1] = n) : n = f[1];
        let P = n;
        f[2] !== v ? (o = (0, a.default)(v, {
            font: "bold"
        }), f[2] = v, f[3] = o) : o = f[3];
        let S = o;
        if (!x) return null;
        f[4] !== p ? (c = !!((s = p) && s.dynamicDrawerContent && s.dynamicDrawerContent.length > 0), f[4] = p, f[5] = c) : c = f[5];
        let _ = c,
            T = !!(_ || k),
            z = T && "cursor-pointer",
            I = "light" === N ? "border-neutral-200 bg-white" : "border-neutral-600 bg-neutral-900 text-white",
            V = void 0 !== j && j ? "w-full justify-start" : "w-fit",
            F = "caption" === (void 0 === w ? "sm" : w) ? "body-3" : "text-sm";
        f[6] !== V || f[7] !== F || f[8] !== z || f[9] !== I ? (u = (0, i.default)("flex items-center justify-center gap-4 rounded-xs border px-16 py-8", z, I, V, F), f[6] = V, f[7] = F, f[8] = z, f[9] = I, f[10] = u) : u = f[10];
        let L = u,
            M = "dark" === N ? "dark" : "light";
        if (_) {
            let e, l, a = p.label ? ? x;
            return f[11] !== P || f[12] !== S || f[13] !== _ || f[14] !== C || f[15] !== g || f[16] !== T || f[17] !== p ? (e = (0, t.jsx)(d, {
                hasDrawer: _,
                isClickable: T,
                image: g,
                link: p,
                hideImageMobile: C,
                text: P,
                subText: S
            }), f[11] = P, f[12] = S, f[13] = _, f[14] = C, f[15] = g, f[16] = T, f[17] = p, f[18] = e) : e = f[18], f[19] !== L || f[20] !== M || f[21] !== p.dynamicDrawerContent || f[22] !== a || f[23] !== e ? (l = (0, t.jsx)(r.default, {
                label: a,
                dynamicDrawerContent: p.dynamicDrawerContent,
                drawerTheme: M,
                buttonClassname: L,
                dataCsOverrideId: void 0,
                children: e
            }), f[19] = L, f[20] = M, f[21] = p.dynamicDrawerContent, f[22] = a, f[23] = e, f[24] = l) : l = f[24], l
        }
        return f[25] !== P || f[26] !== S || f[27] !== _ || f[28] !== C || f[29] !== g || f[30] !== T || f[31] !== p ? (m = (0, t.jsx)(d, {
            hasDrawer: _,
            isClickable: T,
            image: g,
            link: p,
            hideImageMobile: C,
            text: P,
            subText: S
        }), f[25] = P, f[26] = S, f[27] = _, f[28] = C, f[29] = g, f[30] = T, f[31] = p, f[32] = m) : m = f[32], f[33] !== L || f[34] !== k || f[35] !== m ? (h = (0, t.jsx)("div", {
            className: L,
            onClick: k,
            children: m
        }), f[33] = L, f[34] = k, f[35] = m, f[36] = h) : h = f[36], h
    }], 339668), e.s([], 937412)
}, 536168, 482441, 310047, 452693, e => {
    "use strict";
    var t = e.i(391398),
        l = e.i(261576),
        a = e.i(79564),
        i = e.i(620391),
        r = e.i(191788),
        s = e.i(198311),
        n = e.i(495854);
    e.i(643781);
    var o = e.i(989606);
    e.i(366539);
    var d = e.i(150077);
    e.i(664157);
    var c = e.i(271179),
        u = e.i(660600),
        m = e.i(767574),
        h = e.i(264516),
        f = e.i(985129);
    let x = e => {
            let a, i, r = (0, l.c)(9),
                {
                    variants: s,
                    theme: o
                } = e,
                {
                    t: d
                } = (0, c.useTranslation)("common");
            if (r[0] !== d || r[1] !== o || r[2] !== s) {
                let e;
                r[4] !== d || r[5] !== o ? (e = e => {
                    let l = (0, m.default)(e.sku),
                        a = !e.availableForSale;
                    return (0, t.jsx)(u.ListboxOption, {
                        value: e,
                        disabled: a,
                        className: e => {
                            let {
                                disabled: t,
                                selected: l
                            } = e;
                            return (0, n.default)("flex cursor-pointer items-center gap-8 rounded-sm border p-8 text-neutral-800", "light" === o ? "border-neutral-100 bg-white text-black hover:border-neutral-200 hover:bg-neutral-50" : "border-neutral-600 bg-neutral-900 text-white hover:bg-neutral-800 lg:border-neutral-100 lg:bg-white lg:text-black lg:hover:border-neutral-200 lg:hover:bg-neutral-50", t && "pointer-events-none opacity-40", l && "border-neutral-100", l && "dark" === o && "border-neutral-200 bg-neutral-800 lg:border-neutral-200 lg:bg-neutral-50", l && "light" === o && "border-neutral-200 bg-neutral-50")
                        },
                        children: i => {
                            let {
                                selected: r
                            } = i;
                            return (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("div", {
                                    children: (0, t.jsx)(f.default, {
                                        colorName: d(`variantColors.${(0,h.toCamelCase)(e.title)}`),
                                        colorClassName: l.colorClass,
                                        isSelected: r,
                                        isOutOfStock: a
                                    })
                                }), (0, t.jsx)("div", {
                                    "data-testid": "nav-color-swatch",
                                    children: d(`variantColors.${(0,h.toCamelCase)(e.title)}`)
                                })]
                            })
                        }
                    }, e.id)
                }, r[4] = d, r[5] = o, r[6] = e) : e = r[6], a = s.filter(p).map(e), r[0] = d, r[1] = o, r[2] = s, r[3] = a
            } else a = r[3];
            return r[7] !== a ? (i = (0, t.jsx)(t.Fragment, {
                children: a
            }), r[7] = a, r[8] = i) : i = r[8], i
        },
        v = e => {
            let a, i, r, s, o, d, v, p, g = (0, l.c)(23),
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
            g[0] !== j.sku ? (a = (0, m.default)(j.sku), g[0] = j.sku, g[1] = a) : a = g[1];
            let C = a;
            g[2] !== j.title ? (i = (0, h.toCamelCase)(j.title), g[2] = j.title, g[3] = i) : i = g[3];
            let P = `variantColors.${i}`;
            g[4] !== N || g[5] !== P ? (r = N(P), g[4] = N, g[5] = P, g[6] = r) : r = g[6];
            let S = C ? .colorClass ? ? "";
            g[7] !== r || g[8] !== S ? (s = (0, t.jsx)(u.ListboxButton, {
                children: (0, t.jsx)(f.default, {
                    isSelected: !0,
                    colorName: r,
                    colorClassName: S
                })
            }), g[7] = r, g[8] = S, g[9] = s) : s = g[9];
            let _ = "light" === k ? "bg-white" : "bg-neutral-900 lg:bg-white";
            return g[10] !== _ ? (o = (0, n.default)("fixed bottom-[73px] left-0 z-40 flex w-full flex-col gap-8 overflow-hidden rounded-t-2xl bg-white p-16 body-1 font-normal", "lg:absolute lg:-left-80 lg:top-32 lg:h-fit lg:w-fit lg:min-w-max lg:rounded-xs lg:p-8", _), g[10] = _, g[11] = o) : o = g[11], g[12] !== k || g[13] !== b ? (d = (0, t.jsx)(x, {
                variants: b,
                theme: k
            }), g[12] = k, g[13] = b, g[14] = d) : d = g[14], g[15] !== d || g[16] !== o ? (v = (0, t.jsx)(u.ListboxOptions, {
                "data-testid": "variant-selector-navigation-swatches",
                className: o,
                children: d
            }), g[15] = d, g[16] = o, g[17] = v) : v = g[17], g[18] !== j || g[19] !== y || g[20] !== v || g[21] !== s ? (p = (0, t.jsxs)(u.Listbox, {
                as: "div",
                "data-testid": "variant-selector-navigation",
                value: j,
                onChange: y,
                className: "flex justify-center",
                children: [s, v]
            }), g[18] = j, g[19] = y, g[20] = v, g[21] = s, g[22] = p) : p = g[22], p
        };

    function p(e) {
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
            let a, i, u, m, h, f, x, p, N, S, _, T, z, I, V, F, L, M, D, O, A = (0, l.c)(64),
                {
                    theme: B,
                    product: E,
                    overrideTitle: R,
                    currentVariant: q,
                    variants: $,
                    setCurrentVariant: H,
                    onVariantChange: U,
                    navigation: Q,
                    sectionRefs: G,
                    overrideButton: Y,
                    overrideButtonAnchorScroll: W,
                    addToCart: X
                } = e,
                {
                    t: K
                } = (0, c.useTranslation)("common"),
                {
                    isUSAvailable: J
                } = (0, y.default)(),
                {
                    isDeviceAvailable: Z
                } = (0, w.default)(),
                [ee, et] = (0, r.useState)(!1),
                [el, ea] = (0, r.useState)("");
            A[0] !== q || A[1] !== Z || A[2] !== J ? (a = q && q.availableForSale && J(q.id) && Z(q.sku), A[0] = q, A[1] = Z, A[2] = J, A[3] = a) : a = A[3];
            let ei = a,
                er = (O = G.map(e => e ? .current ? .id), Q.filter(({
                    url: e
                }) => e && O.includes(e.replace("#", "")))),
                es = "dark" === B ? "text-white" : "text-black",
                en = $ ? .length && q && H;
            A[4] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
                let e = () => {
                    window.scrollY > 500 ? et(!0) : et(!1)
                };
                return window.addEventListener("scroll", e), () => {
                    window.removeEventListener("scroll", e)
                }
            }, u = [], A[4] = i, A[5] = u) : (i = A[4], u = A[5]), (0, r.useEffect)(i, u), A[6] !== Q || A[7] !== G ? (m = () => {
                if (!Q && !G) return;
                let e = new IntersectionObserver(e => {
                    let t = e.filter(C);
                    t.length > 0 ? ea(t.reduce(P).target.id) : ea("")
                }, {
                    root: null,
                    rootMargin: "-30% 0% -70% 0%",
                    threshold: 0
                });
                return G ? .forEach(t => {
                    t.current && e.observe(t.current)
                }), () => {
                    G ? .forEach(t => {
                        t.current && e.unobserve(t.current)
                    })
                }
            }, A[6] = Q, A[7] = G, A[8] = m) : m = A[8], A[9] === Symbol.for("react.memo_cache_sentinel") ? (h = [], A[9] = h) : h = A[9], (0, r.useEffect)(m, h), A[10] !== G ? (f = (e, t) => {
                let l = G ? .find(e => e.current && e.current.id === t);
                l ? (0, j.scrollTo)(e, l) : history.pushState(null, "", e.currentTarget.href)
            }, A[10] = G, A[11] = f) : f = A[11];
            let eo = f,
                ed = !ee && "pointer-events-none";
            A[12] !== ed ? (x = (0, n.default)("md:z-navigation fixed bottom-0 left-0 z-30 hidden w-full lg:top-16 lg:bottom-auto lg:left-1/2 lg:block lg:w-[calc(100%_-_var(--spacing-16)_-_var(--spacing-16))] lg:max-w-(--breakpoint-2xl) lg:-translate-x-1/2", ed), A[12] = ed, A[13] = x) : x = A[13];
            let ec = s.motion,
                eu = ee && "opacity-100",
                em = "light" === B ? "border-t-neutral-200 bg-white lg:bg-white/80" : "border-t-neutral-800 bg-neutral-900 lg:bg-neutral-900/80";
            A[14] !== es || A[15] !== eu || A[16] !== em ? (p = (0, n.default)("w-full border-t py-8 drop-shadow-lg lg:rounded-[24px] lg:border-0 lg:py-0 lg:pr-16 lg:pl-24 lg:backdrop-blur-xl", eu, em, es), A[14] = es, A[15] = eu, A[16] = em, A[17] = p) : p = A[17];
            let eh = ee ? "visible" : "hidden",
                ef = b.default;
            A[18] !== es ? (N = (0, n.default)("body-3 lg:heading-4-semi-bold hidden overflow-hidden !text-nowrap text-ellipsis lg:block", es), A[18] = es, A[19] = N) : N = A[19];
            let ex = E ? .title || R;
            A[20] !== N || A[21] !== ex ? (S = (0, t.jsx)("div", {
                className: N,
                children: ex
            }), A[20] = N, A[21] = ex, A[22] = S) : S = A[22], A[23] !== es || A[24] !== q || A[25] !== en ? (_ = en ? (0, t.jsx)("div", {
                className: (0, n.default)("flex min-h-56 min-w-[80px] lg:hidden lg:min-h-full", es),
                "data-testid": "priceDisplay",
                children: (0, t.jsx)(d.default, {
                    size: "small",
                    direction: "vertical-reversed",
                    variant: q
                })
            }) : null, A[23] = es, A[24] = q, A[25] = en, A[26] = _) : _ = A[26], A[27] !== S || A[28] !== _ ? (T = (0, t.jsxs)("div", {
                className: "max-w-[190px] sm:max-w-min",
                children: [S, _]
            }), A[27] = S, A[28] = _, A[29] = T) : T = A[29];
            let ev = er && (0, t.jsx)("ul", {
                className: "col-span-3 hidden grow flex-row justify-center lg:flex",
                children: er.map((e, l) => e.url && (0, t.jsx)("li", {
                    children: (0, t.jsx)("a", {
                        href: e.url,
                        className: (0, n.default)("body-3 block h-full p-24 transition-all duration-300", "dark" === B ? "hover:bg-white/5" : "hover:bg-black/5", `#${el}` === e.url && ("light" === B ? "tab-halo-bottom-primary" : "tab-halo-bottom-white")),
                        onClick: t => e.url && eo(t, e.url.split("#")[1]),
                        "data-cs-override-id": `sticky-nav-${l+1}`,
                        children: e.label
                    })
                }, e.label))
            });
            return A[30] !== X || A[31] !== q || A[32] !== en || A[33] !== ei || A[34] !== U || A[35] !== Y || A[36] !== E || A[37] !== H || A[38] !== K || A[39] !== B || A[40] !== $ ? (z = en ? (0, t.jsxs)(t.Fragment, {
                children: [$.length > 1 && (0, t.jsx)("div", {
                    className: "me-auto md:relative lg:me-0",
                    "data-cs-override-id": "sticky-nav-variant",
                    children: (0, t.jsx)(v, {
                        variants: $,
                        currentVariant: q,
                        onChange: U || H,
                        theme: B
                    })
                }), (0, t.jsx)("div", {
                    className: "hidden lg:flex",
                    children: (0, t.jsx)(d.default, {
                        size: "small",
                        direction: "vertical",
                        variant: q,
                        center: !0
                    })
                }), !ei && E ? .notifyMeFormName && !Y ? (0, t.jsx)(g.default, {
                    formName: E.notifyMeFormName,
                    variant: q,
                    buttonSize: "medium",
                    theme: B
                }) : (0, t.jsx)(o.default, {
                    nowrap: !1,
                    size: "small",
                    label: K(ei ? "productCards.addToCard" : "productCards.outOfStock"),
                    onClick: () => X([{
                        product: {
                            handle: q.productHandle,
                            maxQuantityAllowed: q.maxQuantityAllowed ? ? 0
                        },
                        variantId: q.id,
                        quantityToAdd: 1
                    }]),
                    isDisabled: !ei,
                    dataCsOverrideId: "sticky-nav-cta"
                })]
            }) : null, A[30] = X, A[31] = q, A[32] = en, A[33] = ei, A[34] = U, A[35] = Y, A[36] = E, A[37] = H, A[38] = K, A[39] = B, A[40] = $, A[41] = z) : z = A[41], A[42] !== Y || A[43] !== W ? (I = Y && (0, t.jsx)(o.default, {
                size: "small",
                label: Y.label,
                ...W && {
                    onClick: e => W(e)
                },
                href: Y.url
            }), A[42] = Y, A[43] = W, A[44] = I) : I = A[44], A[45] !== z || A[46] !== I ? (V = (0, t.jsxs)("div", {
                className: "flex items-center justify-end gap-16",
                children: [z, I]
            }), A[45] = z, A[46] = I, A[47] = V) : V = A[47], A[48] !== T || A[49] !== ev || A[50] !== V ? (F = (0, t.jsxs)("div", {
                className: "flex items-center justify-between gap-8 xl:grid xl:grid-cols-5",
                children: [T, ev, V]
            }), A[48] = T, A[49] = ev, A[50] = V, A[51] = F) : F = A[51], A[52] !== ef.Section || A[53] !== F ? (L = (0, t.jsx)(ef.Section, {
                verticalSpacing: "none",
                as: "div",
                className: "max-w-none px-0 md:px-0 lg:px-0 xl:px-0",
                children: F
            }), A[52] = ef.Section, A[53] = F, A[54] = L) : L = A[54], A[55] !== p || A[56] !== k || A[57] !== eh || A[58] !== L || A[59] !== ec.div ? (M = (0, t.jsx)(ec.div, {
                className: p,
                variants: k,
                initial: !1,
                animate: eh,
                children: L
            }), A[55] = p, A[56] = k, A[57] = eh, A[58] = L, A[59] = ec.div, A[60] = M) : M = A[60], A[61] !== M || A[62] !== x ? (D = (0, t.jsx)("nav", {
                children: (0, t.jsx)("div", {
                    className: x,
                    children: M
                })
            }), A[61] = M, A[62] = x, A[63] = D) : D = A[63], D
        };

    function C(e) {
        return e.isIntersecting
    }

    function P(e, t) {
        return e.intersectionRatio > t.intersectionRatio ? e : t
    }
    e.i(108399);
    var S = e.i(860231);
    e.i(305231);
    var _ = e.i(913473);
    e.i(831184);
    var T = e.i(229620);
    let z = e => {
        let a, i, s, o, d = (0, l.c)(10),
            {
                children: c,
                dataCsOverrideId: u
            } = e,
            [m, h] = (0, r.useState)(!1);
        d[0] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
            if (!T.isBrowser) return;
            let e = () => {
                h(globalThis.scrollY > globalThis.innerHeight)
            };
            return e(), globalThis.addEventListener("scroll", e, {
                passive: !0
            }), () => globalThis.removeEventListener("scroll", e)
        }, i = [], d[0] = a, d[1] = i) : (a = d[0], i = d[1]), (0, r.useEffect)(a, i), d[2] !== m ? (s = (0, n.default)("z-navigation fixed right-16 bottom-16 rounded-2xl border border-neutral-300 p-12 lg:hidden", "bg-[linear-gradient(123deg,var(--color-light-grey-050-70)_0%,var(--color-light-grey-050-50)_100%)]", "shadow-lg backdrop-blur-sm", "translate-y-256 transition-transform duration-300 ease-in-out motion-reduce:transition-none", {
            "translate-y-0": m
        }), d[2] = m, d[3] = s) : s = d[3];
        let f = !m,
            x = !m;
        return d[4] !== c || d[5] !== u || d[6] !== s || d[7] !== f || d[8] !== x ? (o = (0, t.jsx)("div", {
            className: s,
            "data-cs-override-id": u,
            "aria-hidden": f,
            inert: x,
            children: c
        }), d[4] = c, d[5] = u, d[6] = s, d[7] = f, d[8] = x, d[9] = o) : o = d[9], o
    };
    e.s(["default", 0, z], 482441), e.s([], 310047);
    let I = e => {
        let a, i, r, s, n, o, d, u = (0, l.c)(24),
            {
                currentVariant: m,
                variants: h,
                setCurrentVariant: f,
                onVariantChange: x,
                addToCart: v
            } = e,
            {
                t: p
            } = (0, c.useTranslation)("common"),
            {
                isUSAvailable: g
            } = (0, y.default)(),
            {
                isDeviceAvailable: b
            } = (0, w.default)(),
            j = h ? .length && m && f;
        u[0] !== m || u[1] !== b || u[2] !== g ? (a = !!m && m.availableForSale && g(m.id) && b(m.sku), u[0] = m, u[1] = b, u[2] = g, u[3] = a) : a = u[3];
        let k = a;
        if (!j) return null;
        u[4] !== m || u[5] !== x || u[6] !== f || u[7] !== h ? (i = h.length > 1 && (0, t.jsx)(_.default, {
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
        return u[14] !== p ? (s = p("addToCart"), u[14] = p, u[15] = s) : s = u[15], u[16] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(S.default, {
            name: "basketPutIn",
            size: 20,
            color: "white"
        }), u[16] = n) : n = u[16], u[17] !== r || u[18] !== N || u[19] !== s ? (o = (0, t.jsx)("button", {
            type: "button",
            onClick: r,
            disabled: N,
            className: "flex items-center justify-center rounded-full bg-black px-16 py-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:bg-neutral-600",
            "aria-label": s,
            "data-cs-override-id": "sticky-nav-cta",
            children: n
        }), u[17] = r, u[18] = N, u[19] = s, u[20] = o) : o = u[20], u[21] !== i || u[22] !== o ? (d = (0, t.jsx)("nav", {
            children: (0, t.jsx)(z, {
                dataCsOverrideId: "marketing-navigation-mobile",
                children: (0, t.jsxs)("div", {
                    className: "flex items-center justify-between gap-32",
                    children: [i, o]
                })
            })
        }), u[21] = i, u[22] = o, u[23] = d) : d = u[23], d
    };

    function V(e) {
        return e.id
    }
    e.s(["default", 0, e => {
        let r, s, n, o, d, c = (0, l.c)(25),
            {
                navigation: u,
                currentVariant: m,
                product: h,
                variants: f,
                setCurrentVariant: x,
                onVariantChange: v,
                theme: p,
                overrideButton: g,
                overrideButtonAnchorScroll: b,
                overrideTitle: j,
                sectionRefs: y
            } = e,
            w = void 0 === p ? "dark" : p;
        c[0] === Symbol.for("react.memo_cache_sentinel") ? (r = {
            placement: "marketingNavigation"
        }, c[0] = r) : r = c[0];
        let {
            add: k
        } = (0, a.default)(r);
        c[1] !== f ? (s = f ? .map(V) || [], c[1] = f, c[2] = s) : s = c[2];
        let C = s;
        return (0, i.usePrefetchLocalisedPrices)(C), c[3] !== k || c[4] !== m || c[5] !== u || c[6] !== v || c[7] !== g || c[8] !== b || c[9] !== j || c[10] !== h || c[11] !== y || c[12] !== x || c[13] !== w || c[14] !== f ? (n = (0, t.jsx)(N, {
            theme: w,
            product: h,
            overrideTitle: j,
            currentVariant: m,
            variants: f,
            setCurrentVariant: x,
            onVariantChange: v,
            navigation: u,
            sectionRefs: y,
            overrideButton: g,
            overrideButtonAnchorScroll: b,
            addToCart: k
        }), c[3] = k, c[4] = m, c[5] = u, c[6] = v, c[7] = g, c[8] = b, c[9] = j, c[10] = h, c[11] = y, c[12] = x, c[13] = w, c[14] = f, c[15] = n) : n = c[15], c[16] !== k || c[17] !== m || c[18] !== v || c[19] !== x || c[20] !== f ? (o = (0, t.jsx)(I, {
            currentVariant: m,
            variants: f,
            setCurrentVariant: x,
            onVariantChange: v,
            addToCart: k
        }), c[16] = k, c[17] = m, c[18] = v, c[19] = x, c[20] = f, c[21] = o) : o = c[21], c[22] !== n || c[23] !== o ? (d = (0, t.jsxs)(t.Fragment, {
            children: [n, o]
        }), c[22] = n, c[23] = o, c[24] = d) : d = c[24], d
    }], 452693), e.s([], 536168)
}, 969743, e => {
    "use strict";
    var t = e.i(391398),
        l = e.i(261576),
        a = e.i(198311),
        i = e.i(491900),
        r = e.i(793087),
        s = e.i(63120),
        n = e.i(191788);
    e.s(["TextMaskReveal", 0, e => {
        let o, d, c, u, m, h, f = (0, l.c)(9),
            {
                children: x
            } = e,
            v = (0, n.useRef)(null);
        f[0] === Symbol.for("react.memo_cache_sentinel") ? (o = {
            target: v,
            offset: ["start start", "end end"]
        }, f[0] = o) : o = f[0];
        let {
            scrollYProgress: p
        } = (0, r.useScroll)(o);
        f[1] === Symbol.for("react.memo_cache_sentinel") ? (d = [0, 1], c = ["-1783.29px 0px", "1000px 0"], f[1] = d, f[2] = c) : (d = f[1], c = f[2]);
        let g = (0, s.useTransform)(p, d, c),
            [b, j] = (0, n.useState)(!1);
        f[3] === Symbol.for("react.memo_cache_sentinel") ? (u = e => {
            0 === e && j(!0)
        }, f[3] = u) : u = f[3], (0, i.useMotionValueEvent)(p, "change", u);
        let y = b ? "-1783.29px 0px" : g;
        return f[4] !== y ? (m = {
            maskPosition: y
        }, f[4] = y, f[5] = m) : m = f[5], f[6] !== x || f[7] !== m ? (h = (0, t.jsx)(a.motion.div, {
            ref: v,
            className: "animation-text-mask z-1",
            style: m,
            children: x
        }), f[6] = x, f[7] = m, f[8] = h) : h = f[8], h
    }])
}, 842948, 613142, 631935, 569837, 174715, e => {
    "use strict";
    var t = e.i(391398);
    e.i(664157);
    var l = e.i(271179),
        a = e.i(335536),
        i = e.i(992219),
        r = e.i(191788),
        s = e.i(657610),
        n = e.i(495854),
        o = e.i(767574),
        d = e.i(969743),
        c = e.i(261576),
        u = e.i(198311);
    let m = e => {
        let l, a, i, r, s, o, d, m, h = (0, c.c)(13),
            {
                fill: f,
                position: x
            } = e,
            v = "right" === (void 0 === x ? "right" : x) && "-scale-x-100";
        h[0] !== v ? (l = (0, n.default)("z-1 pointer-events-none absolute inset-0 h-lvh w-full overflow-hidden", v), h[0] = v, h[1] = l) : l = h[1], h[2] === Symbol.for("react.memo_cache_sentinel") ? (a = {
            opacity: 0,
            x: "-72%",
            y: "-35%",
            scale: .5,
            rotate: "-9deg"
        }, i = {
            opacity: 1,
            x: "-50%",
            y: "-16%",
            scale: 1,
            rotate: "-9deg"
        }, r = {
            duration: 2,
            ease: "linear",
            delay: .75
        }, h[2] = a, h[3] = i, h[4] = r) : (a = h[2], i = h[3], r = h[4]);
        let p = f || "white";
        return h[5] !== p ? (s = (0, t.jsx)("g", {
            filter: "url(#filter)",
            children: (0, t.jsx)("ellipse", {
                cx: "1924.71",
                cy: "273.501",
                rx: "1924.71",
                ry: "273.501",
                transform: "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",
                fill: p,
                fillOpacity: "0.21"
            })
        }), h[5] = p, h[6] = s) : s = h[6], h[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, t.jsx)("defs", {
            children: (0, t.jsxs)("filter", {
                id: "filter",
                x: "0.860352",
                y: "0.838989",
                width: "3785.16",
                height: "2840.26",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [(0, t.jsx)("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix"
                }), (0, t.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), (0, t.jsx)("feGaussianBlur", {
                    stdDeviation: "151",
                    result: "effect1_foregroundBlur_1065_8"
                })]
            })
        }), h[7] = o) : o = h[7], h[8] !== s ? (d = (0, t.jsxs)(u.motion.svg, {
            initial: a,
            whileInView: i,
            transition: r,
            className: "z-1 pointer-events-none absolute right-0 h-full w-full opacity-0 md:w-[138%] lg:w-[84%]",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 3787 2842",
            fill: "none",
            children: [s, o]
        }), h[8] = s, h[9] = d) : d = h[9], h[10] !== d || h[11] !== l ? (m = (0, t.jsx)("div", {
            className: l,
            children: d
        }), h[10] = d, h[11] = l, h[12] = m) : m = h[12], m
    };
    e.s(["SpotlightAnimation", 0, m], 613142), e.i(214495);
    var h = e.i(744295),
        f = e.i(44073);
    e.i(906550);
    var x = e.i(722846),
        v = e.i(264516);
    e.i(338018);
    var p = e.i(985129);
    e.s(["default", 0, ({
        tagLabel: e,
        title: c,
        theme: g,
        devices: b,
        isVariant: j = !1,
        dataCsOverrideId: y,
        dataCsOverrideIdTab: w
    }) => {
        let k = (0, r.useRef)(b.map(() => (0, r.createRef)())),
            N = (0, r.useRef)(null),
            C = (0, s.useInView)(N, {
                once: !0
            }),
            [P, S] = (0, r.useState)(0),
            {
                t: _
            } = (0, l.useTranslation)("common");
        return (0, r.useEffect)(() => {
            C && k.current.forEach(e => {
                e.current && e.current.play()
            })
        }, [C]), (0, t.jsxs)("div", {
            ref: N,
            className: (0, n.default)("dark" === g ? "bg-black text-white" : "bg-neutral-50 text-black", "relative"),
            "data-cs-override-id": y,
            children: [(0, t.jsx)(m, {
                position: "left"
            }), (0, t.jsx)(h.default, {
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [(0, t.jsx)(u.motion.div, {
                        initial: {
                            opacity: 0
                        },
                        transition: {
                            duration: .3,
                            delay: .3
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: !0,
                            amount: .1
                        },
                        children: e && (0, t.jsx)(f.default, {
                            label: e,
                            theme: g,
                            variant: "grey"
                        })
                    }), c && (0, t.jsx)(d.TextMaskReveal, {
                        children: (0, t.jsx)("h3", {
                            className: (0, n.default)("responsive-display-1 ru:responsive-display-2 text-center text-transparent", "dark" === g && "-mb-16 bg-linear-to-r from-white/15 via-white to-white/15 bg-clip-text pb-32"),
                            children: c
                        })
                    }), (0, t.jsxs)(a.TabGroup, {
                        selectedIndex: P,
                        onChange: S,
                        children: [(0, t.jsx)(a.TabPanels, {
                            children: b.map(({
                                videoUrl: e,
                                title: l
                            }, r) => (0, t.jsx)(a.TabPanel, {
                                unmount: !1,
                                children: (0, t.jsx)(i.default, {
                                    autoPlay: !0,
                                    muted: !0,
                                    loop: !0,
                                    playsInline: !0,
                                    source: e,
                                    ref: k.current[r],
                                    className: "h-[300px] md:h-[560px]"
                                })
                            }, `video-panel-${r}-${l}`))
                        }), j && (0, t.jsx)(a.TabList, {
                            className: (0, n.default)("mx-auto flex w-fit flex-row gap-4 rounded-full p-[2px] transition-all", {
                                "bg-neutral-800": "dark" === g,
                                "flex flex-col items-center gap-8": j
                            }),
                            children: (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("div", {
                                    className: "flex justify-center gap-16",
                                    children: b.map(e => {
                                        let l = (0, o.default)(e ? .sku || "");
                                        return l ? (0, t.jsx)(a.Tab, {
                                            "data-cs-override-id": w,
                                            children: ({
                                                selected: e
                                            }) => (0, t.jsx)(p.default, {
                                                isSelected: e,
                                                colorName: _(`variantColors.${(0,v.toCamelCase)(l.variantTitle)}`),
                                                colorClassName: l.colorClass,
                                                theme: g
                                            })
                                        }, e.title) : null
                                    })
                                }), (0, t.jsx)("div", {
                                    children: (0, o.default)(b[P].sku || "") ? .variantTitle
                                })]
                            })
                        }), !j && b.length > 1 && (0, t.jsx)(x.default, {
                            tabsList: b.map(({
                                title: e
                            }) => e),
                            theme: g,
                            selectedIndex: P
                        })]
                    })]
                })
            })]
        })
    }], 631935), e.s([], 842948), e.s(["default", 0, e => {
        let l, a, i, r, s = (0, c.c)(10),
            {
                text: o,
                type: d
            } = e,
            u = void 0 === d ? "page" : d,
            m = "header" === u ? "bg-neutral-900 p-8" : "bg-black pb-80";
        s[0] !== m ? (l = (0, n.default)(m, "text-center"), s[0] = m, s[1] = l) : l = s[1];
        let h = "header" === u ? "italic text-gray-400 body-3" : "mx-auto max-w-3xl px-16 text-white body-4 lg:px-0";
        return s[2] !== h ? (a = (0, n.default)(h), s[2] = h, s[3] = a) : a = s[3], s[4] !== a || s[5] !== o ? (i = (0, t.jsx)("p", {
            className: a,
            children: o
        }), s[4] = a, s[5] = o, s[6] = i) : i = s[6], s[7] !== l || s[8] !== i ? (r = (0, t.jsx)("div", {
            "data-testid": "disclaimer",
            className: l,
            children: i
        }), s[7] = l, s[8] = i, s[9] = r) : r = s[9], r
    }], 569837), e.s([], 174715)
}, 583446, e => {
    "use strict";
    let t = e.i(761420).FlexMarketingPage;
    e.s(["__N_SSG", 0, !0, "default", 0, t])
}, 350140, (e, t, l) => {
    let a = "/pages/ledger-flex";
    (window.__NEXT_P = window.__NEXT_P || []).push([a, () => e.r(583446)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push([a])
    })
}, 648761, e => {
    e.v(t => Promise.all(["static/chunks/0~1y3rya3twqr.js"].map(t => e.l(t))).then(() => t(493594)))
}, 828805, e => {
    e.v(t => Promise.all(["static/chunks/17m4lcp7g44-4.js"].map(t => e.l(t))).then(() => t(879466)))
}, 714172, e => {
    e.v(t => Promise.all(["static/chunks/0elxab1v~mphk.js"].map(t => e.l(t))).then(() => t(560724)))
}, 104619, e => {
    e.v(t => Promise.all(["static/chunks/049f7b690w9-8.js"].map(t => e.l(t))).then(() => t(438922)))
}, 876130, e => {
    e.v(t => Promise.all(["static/chunks/0cx-l0s84_kna.js"].map(t => e.l(t))).then(() => t(932874)))
}, 499600, e => {
    e.v(t => Promise.all(["static/chunks/11gbzabg19grg.js"].map(t => e.l(t))).then(() => t(291970)))
}, 303454, e => {
    e.v(t => Promise.all(["static/chunks/07~i95d0~lq3p.js"].map(t => e.l(t))).then(() => t(869527)))
}, 379238, e => {
    e.v(t => Promise.all(["static/chunks/0g_-m2lclc2mc.js"].map(t => e.l(t))).then(() => t(994247)))
}, 166436, e => {
    e.v(t => Promise.all(["static/chunks/0faehn6dqe9hl.js"].map(t => e.l(t))).then(() => t(586341)))
}, 361282, e => {
    e.v(t => Promise.all(["static/chunks/08toy9xs83v-n.js"].map(t => e.l(t))).then(() => t(74130)))
}, 221637, e => {
    e.v(t => Promise.all(["static/chunks/00lgtun6n9sdl.js"].map(t => e.l(t))).then(() => t(571820)))
}, 977536, e => {
    e.v(t => Promise.all(["static/chunks/0c13xofy_dz6k.js"].map(t => e.l(t))).then(() => t(495960)))
}, 286466, e => {
    e.v(t => Promise.all(["static/chunks/0iwcjp~7ceays.js"].map(t => e.l(t))).then(() => t(850075)))
}, 588981, e => {
    e.v(t => Promise.all(["static/chunks/0_kq4tqbfge7g.js"].map(t => e.l(t))).then(() => t(74984)))
}, 854172, e => {
    e.v(t => Promise.all(["static/chunks/0t50en83hc_a7.js"].map(t => e.l(t))).then(() => t(202295)))
}, 153459, e => {
    e.v(t => Promise.all(["static/chunks/0oryq34t1edi..js"].map(t => e.l(t))).then(() => t(531976)))
}, 651776, e => {
    e.v(t => Promise.all(["static/chunks/0yxygz40vwnny.js"].map(t => e.l(t))).then(() => t(251801)))
}, 608583, e => {
    e.v(t => Promise.all(["static/chunks/0d~0r0-wc37ev.js"].map(t => e.l(t))).then(() => t(91115)))
}, 896839, e => {
    e.v(t => Promise.all(["static/chunks/0ddqu0zguasfy.js"].map(t => e.l(t))).then(() => t(478993)))
}, 205631, e => {
    e.v(t => Promise.all(["static/chunks/0oaueyc0g5n9s.js"].map(t => e.l(t))).then(() => t(147364)))
}, 324963, e => {
    e.v(t => Promise.all(["static/chunks/10ohmxo-7_s5..js"].map(t => e.l(t))).then(() => t(65053)))
}, 328583, e => {
    e.v(t => Promise.all(["static/chunks/0369oc~0b1gmw.js"].map(t => e.l(t))).then(() => t(832357)))
}, 224209, e => {
    e.v(t => Promise.all(["static/chunks/0fhmb~ogzft6y.js"].map(t => e.l(t))).then(() => t(267686)))
}, 534034, e => {
    e.v(t => Promise.all(["static/chunks/03sgbflfxdz4w.js"].map(t => e.l(t))).then(() => t(553735)))
}, 107451, e => {
    e.v(t => Promise.all(["static/chunks/0i7e-rqydk1zf.js"].map(t => e.l(t))).then(() => t(744826)))
}, 559368, e => {
    e.v(t => Promise.all(["static/chunks/0n1zlpfzvih--.js"].map(t => e.l(t))).then(() => t(748145)))
}, 937416, e => {
    e.v(t => Promise.all(["static/chunks/0w4jae-x7py.7.js"].map(t => e.l(t))).then(() => t(609524)))
}, 839917, e => {
    e.v(t => Promise.all(["static/chunks/07ucy~26-iisb.js"].map(t => e.l(t))).then(() => t(10075)))
}]);

//# sourceMappingURL=0-9o7r66c0k37.js.map