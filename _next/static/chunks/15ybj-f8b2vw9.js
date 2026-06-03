(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 43039, e => {
    "use strict";
    e.s(["default", 0, (e, t) => {
        let r = ["/products", e];
        return t && e !== t.handle && r.push(t.handle), r.join("/")
    }])
}, 694778, 247286, e => {
    "use strict";
    e.i(350461);
    var t = e.i(261576),
        r = e.i(292905);
    let i = async ({
        formName: e,
        email: t,
        consent: r,
        staxConsent: i,
        source: n,
        locale: a,
        variantId: s
    }) => {
        let o = (({
                formName: e,
                email: t,
                consent: r,
                staxConsent: i,
                source: n,
                locale: a,
                variantId: s
            }) => {
                let o = new FormData;
                return o.append("elqFormName", e), o.append("M14KZX", t), o.append("elqSiteID", "1909208"), o.append("RRW624", a), o.append("NKF1L1", !0 === r ? "1" : "0"), void 0 !== i && o.append("STXGVY", !0 === i ? "1" : "0"), o.append("8L9GGC", n || "waiting list"), void 0 !== s && o.append("variant", s.toString()), o
            })({
                formName: e,
                email: t,
                consent: r,
                staxConsent: i,
                source: n,
                locale: a,
                variantId: s
            }),
            c = async e => {
                let t = await fetch(e, {
                    method: "POST",
                    body: o
                });
                if (!t.ok) throw Error("To receive a notification when the product is back in stock, please make sure to disable your adblocker.");
                return t
            };
        try {
            return await c("https://s1909208.t.eloqua.com/e/f2")
        } catch {
            return await c("/eloqua")
        }
    };
    e.s(["default", 0, () => {
        let e, n, a = (0, t.c)(7);
        a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
            mutationFn: i,
            retry: 1
        }, a[0] = e) : e = a[0];
        let {
            mutate: s,
            isSuccess: o,
            isPending: c,
            isError: l,
            reset: u
        } = (0, r.useMutation)(e);
        return a[1] !== l || a[2] !== c || a[3] !== o || a[4] !== u || a[5] !== s ? (n = {
            sendEmailToEloqua: s,
            isSuccess: o,
            isPending: c,
            isError: l,
            reset: u
        }, a[1] = l, a[2] = c, a[3] = o, a[4] = u, a[5] = s, a[6] = n) : n = a[6], n
    }], 694778), e.s(["default", 0, e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)], 247286)
}, 876526, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(191788),
        i = e.i(830746),
        n = e.i(219501),
        a = e.i(595990),
        s = e.i(766442),
        o = e.i(701894);
    e.i(831184);
    var c = e.i(229620),
        l = e.i(468411);
    let u = new Set([0x2c708a35014a, 0x241d0f660048, 0x23eb445c0048, 0x23eb44b60048]),
        d = new Set;
    e.s(["default", 0, e => {
        let h, p, f, x, m, y, k, g, v, b = (0, t.c)(25),
            {
                productName: E,
                variantId: _,
                variantName: S,
                sku: A
            } = e,
            {
                countryCode: D
            } = (0, n.default)(),
            {
                enabled: w
            } = (0, a.useFeatureFlag)("us_inventory_availability"),
            {
                isUSAvailable: T
            } = (0, s.default)();
        b[0] === Symbol.for("react.memo_cache_sentinel") ? (h = new Set, b[0] = h) : h = b[0];
        let O = (0, r.useRef)(h),
            B = (0, r.useRef)(null),
            R = "US" === D;
        b[1] !== w || b[2] !== T || b[3] !== R || b[4] !== _ ? (p = R && w && null != _ && !T(_), b[1] = w, b[2] = T, b[3] = R, b[4] = _, b[5] = p) : p = b[5];
        let I = p;
        b[6] !== E || b[7] !== I || b[8] !== _ || b[9] !== S ? (f = () => {
            !I || null == _ || O.current.has(_) || (O.current.add(_), i.default.dataLayer({
                dataLayer: {
                    event: "out_of_stock_item",
                    item_id: _,
                    item_name: S,
                    product_name: E,
                    page_url: window.location.href
                }
            }))
        }, b[6] = E, b[7] = I, b[8] = _, b[9] = S, b[10] = f) : f = b[10];
        let C = f;
        b[11] !== I || b[12] !== C ? (x = e => {
            e && I && (B.current && B.current.disconnect(), B.current = new IntersectionObserver(e => {
                e.forEach(e => {
                    e.isIntersecting && C()
                })
            }, {
                threshold: .1
            }), B.current.observe(e))
        }, b[11] = I, b[12] = C, b[13] = x) : x = b[13];
        let N = x;
        return b[14] === Symbol.for("react.memo_cache_sentinel") ? (m = () => () => {
            B.current && B.current.disconnect()
        }, y = [], b[14] = m, b[15] = y) : (m = b[14], y = b[15]), (0, r.useEffect)(m, y), b[16] !== D || b[17] !== E || b[18] !== A || b[19] !== _ || b[20] !== S ? (k = () => {
            let e = _ ? (0, l.toNumericId)(_) : 0;
            (0, c.isProduction)() && D && _ && e > 0 && u.has(e) && !d.has(e) && (d.add(e), (0, o.notifyUSAlertOutOfStock)({
                country: D,
                productName: E,
                variantName: S,
                variantId: _,
                sku: A
            }))
        }, g = [E, S, _, A, D], b[16] = D, b[17] = E, b[18] = A, b[19] = _, b[20] = S, b[21] = k, b[22] = g) : (k = b[21], g = b[22]), (0, r.useEffect)(k, g), b[23] !== N ? (v = {
            ref: N
        }, b[23] = N, b[24] = v) : v = b[24], v
    }])
}, 525487, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        i = e.i(191788),
        n = e.i(203828);
    e.i(664157);
    var a = e.i(271179),
        s = e.i(109007),
        o = e.i(41158),
        c = e.i(126019);
    e.i(643781);
    var l = e.i(989606),
        u = e.i(694778),
        d = e.i(247286);
    e.i(108399);
    var h = e.i(860231),
        p = e.i(455108),
        f = e.i(468411);
    e.i(881106);
    var x = e.i(800087),
        m = e.i(876526);
    e.s(["default", 0, e => {
        let y, k, g, v, b, E, _, S, A, D, w, T, O, B, R, I, C, N, P, j, F, V, G, L, M, U, $, q, z, H, W = (0, r.c)(91),
            {
                buttonSize: K,
                buttonVariant: J,
                dataCsOverrideId: X,
                formName: Y,
                variant: Q,
                theme: Z
            } = e,
            [ee, et] = (0, i.useState)(!1);
        W[0] !== Q.id || W[1] !== Q.productHandle || W[2] !== Q.title ? (y = {
            productName: Q.productHandle,
            variantId: Q.id,
            variantName: Q.title
        }, W[0] = Q.id, W[1] = Q.productHandle, W[2] = Q.title, W[3] = y) : y = W[3];
        let {
            ref: er
        } = (0, m.default)(y), [ei, en] = (0, i.useState)(!1), [ea, es] = (0, i.useState)(!1), [eo, ec] = (0, i.useState)(""), {
            t: el
        } = (0, a.useTranslation)("common"), {
            locale: eu
        } = (0, n.useRouter)(), {
            isPending: ed,
            reset: eh,
            sendEmailToEloqua: ep,
            isSuccess: ef,
            isError: ex
        } = (0, u.default)();
        W[4] !== ei || W[5] !== eo || W[6] !== Y || W[7] !== eu || W[8] !== ep || W[9] !== ea || W[10] !== Q.id ? (k = () => {
            ep({
                consent: ei,
                staxConsent: ea,
                email: eo,
                formName: Y,
                locale: eu,
                variantId: (0, f.toNumericId)(Q.id)
            })
        }, W[4] = ei, W[5] = eo, W[6] = Y, W[7] = eu, W[8] = ep, W[9] = ea, W[10] = Q.id, W[11] = k) : k = W[11];
        let em = k;
        W[12] === Symbol.for("react.memo_cache_sentinel") ? (g = () => {
            et(!1)
        }, W[12] = g) : g = W[12];
        let ey = g;
        W[13] !== eh ? (v = () => {
            eh(), ec(""), en(!1), es(!1)
        }, W[13] = eh, W[14] = v) : v = W[14];
        let ek = v;
        W[15] !== ef || W[16] !== el ? (b = ef ? (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("span", {
                children: el("notifyMe.allGood")
            }), (0, t.jsx)("span", {
                children: el("notifyMe.wellNotify")
            })]
        }) : el("notifyMe.title"), W[15] = ef, W[16] = el, W[17] = b) : b = W[17];
        let eg = b;
        W[18] !== el ? (E = el("notifyMe.emailDisclaimer"), W[18] = el, W[19] = E) : E = W[19], W[20] !== E ? (_ = {
            text: E,
            href: "/pages/privacy-notice"
        }, W[20] = E, W[21] = _) : _ = W[21];
        let ev = _;
        W[22] !== Q.image.url || W[23] !== Q.title ? (S = {
            title: Q.title,
            src: Q.image.url
        }, W[22] = Q.image.url, W[23] = Q.title, W[24] = S) : S = W[24];
        let eb = S;
        W[25] !== eo ? (A = (0, d.default)(eo), W[25] = eo, W[26] = A) : A = W[26];
        let eE = !A,
            e_ = J || ("light" === (void 0 === Z ? "light" : Z) ? "primary-black" : "primary-white"),
            eS = "lstax-01" === Q.sku;
        W[27] !== el ? (D = el("notifyMe.label"), W[27] = el, W[28] = D) : D = W[28], W[29] === Symbol.for("react.memo_cache_sentinel") ? (w = () => et(!0), W[29] = w) : w = W[29], W[30] !== e_ || W[31] !== K || W[32] !== X || W[33] !== D ? (T = (0, t.jsx)(l.default, {
            dataCsOverrideId: X,
            label: D,
            onClick: w,
            variant: e_,
            size: K,
            dataTestId: "notify-me-button"
        }), W[30] = e_, W[31] = K, W[32] = X, W[33] = D, W[34] = T) : T = W[34], W[35] !== er || W[36] !== T ? (O = (0, t.jsx)("div", {
            ref: er,
            children: T
        }), W[35] = er, W[36] = T, W[37] = O) : O = W[37], W[38] === Symbol.for("react.memo_cache_sentinel") ? (B = (0, t.jsxs)("button", {
            type: "button",
            onClick: ey,
            className: "absolute right-16 top-16 md:right-12 md:top-12",
            children: [(0, t.jsx)("span", {
                className: "sr-only",
                children: "Close"
            }), (0, t.jsx)(h.default, {
                name: "close",
                color: "black",
                size: 22
            })]
        }), W[38] = B) : B = W[38], W[39] !== eg ? (R = (0, t.jsx)("h3", {
            className: "flex flex-col justify-center text-center text-gray-900 heading-5-semi-bold",
            children: eg
        }), W[39] = eg, W[40] = R) : R = W[40], W[41] !== eb.src || W[42] !== eb.title ? (I = (0, t.jsx)("div", {
            className: "relative block h-160 md:h-256",
            children: (0, t.jsx)(c.default, {
                src: eb.src,
                alt: eb.title,
                fill: !0,
                className: "object-contain"
            })
        }), W[41] = eb.src, W[42] = eb.title, W[43] = I) : I = W[43], W[44] !== eb.title ? (C = (0, t.jsx)("div", {
            className: "text-center heading-5-semi-bold",
            children: eb.title
        }), W[44] = eb.title, W[45] = C) : C = W[45], W[46] !== ei || W[47] !== eo || W[48] !== ex || W[49] !== eS || W[50] !== ef || W[51] !== ea || W[52] !== el ? (N = !ef && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("div", {
                className: "flex w-full flex-col gap-8",
                children: [(0, t.jsx)("div", {
                    children: el("email")
                }), (0, t.jsx)("input", {
                    "data-testid": "notify-me-email",
                    type: "email",
                    id: "email",
                    required: !0,
                    onChange: e => ec(e.target.value),
                    value: eo,
                    className: "w-full cursor-pointer appearance-none rounded-lg border border-gray-400 bg-transparent p-12 leading-tight text-black placeholder-black xl:py-20"
                }), ex && (0, t.jsx)("div", {
                    className: "text-red-500",
                    children: el("anErrorHappened")
                })]
            }), (0, t.jsxs)("div", {
                className: "flex flex-row gap-8",
                children: [(0, t.jsx)("div", {
                    className: "self-center",
                    children: (0, t.jsx)("input", {
                        "data-testid": "notify-me-checkbox",
                        type: "checkbox",
                        className: "h-20 w-20 rounded-full border-2 border-transparent text-teal-700 transition focus:outline-none focus:ring-2 focus:ring-teal-500",
                        checked: ei,
                        onChange: () => en(!ei)
                    })
                }), (0, t.jsx)("p", {
                    className: "body-3",
                    children: el("notifyMe.consent")
                })]
            }), eS && (0, t.jsxs)("div", {
                className: "flex flex-row gap-8",
                children: [(0, t.jsx)("div", {
                    className: "self-center",
                    children: (0, t.jsx)("input", {
                        "data-testid": "stax-notify-me-checkbox",
                        type: "checkbox",
                        className: "h-20 w-20 rounded-full border-2 border-transparent text-teal-700 transition focus:outline-none focus:ring-2 focus:ring-teal-500",
                        checked: ea,
                        onChange: () => es(!ea)
                    })
                }), (0, t.jsx)("p", {
                    className: "body-3",
                    children: (0, t.jsx)(s.Trans, {
                        i18nKey: "notifyMe.staxConsent",
                        children: (0, t.jsx)("a", {
                            href: "https://www.ledger.com/join-the-ledger-stax-waitlist-for-a-chance-to-win-a-ledger-stax",
                            target: "_blank",
                            className: "underline",
                            rel: "noreferrer"
                        })
                    })
                })]
            })]
        }), W[46] = ei, W[47] = eo, W[48] = ex, W[49] = eS, W[50] = ef, W[51] = ea, W[52] = el, W[53] = N) : N = W[53], W[54] !== eE || W[55] !== ed || W[56] !== ef || W[57] !== em || W[58] !== el ? (P = (0, t.jsx)("div", {
            className: "m-auto mt-16 flex w-16/2 justify-center md:mt-32 md:w-16/12",
            "data-testid": "notify-me-submit",
            children: ed ? (0, t.jsx)("div", {
                className: "flex w-full items-center justify-center rounded-full bg-black px-24 py-16",
                children: (0, t.jsx)(p.default.LoadingSpinner, {})
            }) : (0, t.jsx)(l.default, {
                isFull: !0,
                onClick: ef ? ey : em,
                isDisabled: eE,
                label: el(ef ? "close" : "notifyMe.cta"),
                variant: "primary-black"
            })
        }), W[54] = eE, W[55] = ed, W[56] = ef, W[57] = em, W[58] = el, W[59] = P) : P = W[59], W[60] !== ev.text ? (j = (0, t.jsx)("div", {
            children: ev.text
        }), W[60] = ev.text, W[61] = j) : j = W[61];
        let eA = ev.href;
        return W[62] !== el ? (F = el("notifyMe.learnMore"), W[62] = el, W[63] = F) : F = W[63], W[64] !== F ? (V = (0, t.jsx)("span", {
            className: "whitespace-normal",
            children: F
        }), W[64] = F, W[65] = V) : V = W[65], W[66] === Symbol.for("react.memo_cache_sentinel") ? (G = (0, t.jsx)("span", {
            className: "ms-32 inline [&>svg]:inline [&>svg]:align-middle",
            children: (0, t.jsx)(h.default, {
                name: "arrowRight",
                size: 18,
                color: "black"
            })
        }), W[66] = G) : G = W[66], W[67] !== V ? (L = (0, t.jsxs)("p", {
            className: "whitespace-nowrap",
            children: [V, G]
        }), W[67] = V, W[68] = L) : L = W[68], W[69] !== ev.href || W[70] !== L ? (M = (0, t.jsx)(o.default, {
            href: eA,
            className: "flex-wrap underline",
            target: "_blank",
            children: L
        }), W[69] = ev.href, W[70] = L, W[71] = M) : M = W[71], W[72] !== j || W[73] !== M ? (U = (0, t.jsxs)("div", {
            className: "-mx-16 mt-16 bg-neutral-100 px-16 py-8 body-3 md:mx-0",
            children: [j, M]
        }), W[72] = j, W[73] = M, W[74] = U) : U = W[74], W[75] !== I || W[76] !== C || W[77] !== N || W[78] !== P || W[79] !== U ? ($ = (0, t.jsxs)("div", {
            className: "flex flex-col gap-8 md:mb-48",
            children: [I, C, N, P, U]
        }), W[75] = I, W[76] = C, W[77] = N, W[78] = P, W[79] = U, W[80] = $) : $ = W[80], W[81] !== R || W[82] !== $ ? (q = (0, t.jsxs)("div", {
            className: "relative flex flex-col justify-center",
            children: [B, (0, t.jsxs)("div", {
                className: "flex h-full flex-1 flex-col justify-center p-16 pt-24 md:p-32",
                children: [R, $]
            })]
        }), W[81] = R, W[82] = $, W[83] = q) : q = W[83], W[84] !== ee || W[85] !== ek || W[86] !== q ? (z = (0, t.jsx)(x.default, {
            afterLeave: ek,
            closeModal: ey,
            isOpen: ee,
            children: q
        }), W[84] = ee, W[85] = ek, W[86] = q, W[87] = z) : z = W[87], W[88] !== O || W[89] !== z ? (H = (0, t.jsxs)(t.Fragment, {
            children: [O, z]
        }), W[88] = O, W[89] = z, W[90] = H) : H = W[90], H
    }])
}, 414448, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.i(664157);
    var i = e.i(271179);
    e.i(643781);
    var n = e.i(989606),
        a = e.i(876526);
    e.s(["default", 0, e => {
        let s, o, c, l, u = (0, r.c)(19),
            {
                label: d,
                size: h,
                variant: p,
                onClick: f,
                dataCsOverrideId: x,
                dataTestId: m,
                nowrap: y,
                productName: k,
                variantId: g,
                variantName: v,
                sku: b
            } = e,
            E = void 0 === h ? "medium" : h,
            _ = void 0 === p ? "primary-orange" : p,
            S = void 0 !== y && y,
            {
                t: A
            } = (0, i.useTranslation)("common");
        u[0] !== k || u[1] !== b || u[2] !== g || u[3] !== v ? (s = {
            productName: k,
            variantId: g,
            variantName: v,
            sku: b
        }, u[0] = k, u[1] = b, u[2] = g, u[3] = v, u[4] = s) : s = u[4];
        let {
            ref: D
        } = (0, a.default)(s);
        return u[5] !== d || u[6] !== A ? (o = d || A("productCards.outOfStock"), u[5] = d, u[6] = A, u[7] = o) : o = u[7], u[8] !== x || u[9] !== m || u[10] !== S || u[11] !== f || u[12] !== E || u[13] !== o || u[14] !== _ ? (c = (0, t.jsx)(n.default, {
            label: o,
            size: E,
            variant: _,
            onClick: f,
            isDisabled: !0,
            dataCsOverrideId: x,
            dataTestId: m,
            nowrap: S
        }), u[8] = x, u[9] = m, u[10] = S, u[11] = f, u[12] = E, u[13] = o, u[14] = _, u[15] = c) : c = u[15], u[16] !== D || u[17] !== c ? (l = (0, t.jsx)("div", {
            ref: D,
            children: c
        }), u[16] = D, u[17] = c, u[18] = l) : l = u[18], l
    }])
}, 587593, (e, t, r) => {
    var i, n;
    n = i || (i = {}),
        function(t) {
            var r = "object" == typeof globalThis ? globalThis : e.g,
                i = a(n);

            function a(e, t) {
                return function(r, i) {
                    Object.defineProperty(e, r, {
                        configurable: !0,
                        writable: !0,
                        value: i
                    }), t && t(r, i)
                }
            }
            void 0 !== r.Reflect && (i = a(r.Reflect, i)), t(i, r), void 0 === r.Reflect && (r.Reflect = n)
        }(function(e, t) {
            var r, i = Object.prototype.hasOwnProperty,
                n = "function" == typeof Symbol,
                a = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
                s = n && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
                o = "function" == typeof Object.create,
                c = ({
                    __proto__: []
                }) instanceof Array,
                l = !o && !c,
                u = {
                    create: o ? function() {
                        return F(Object.create(null))
                    } : c ? function() {
                        return F({
                            __proto__: null
                        })
                    } : function() {
                        return F({})
                    },
                    has: l ? function(e, t) {
                        return i.call(e, t)
                    } : function(e, t) {
                        return t in e
                    },
                    get: l ? function(e, t) {
                        return i.call(e, t) ? e[t] : void 0
                    } : function(e, t) {
                        return e[t]
                    }
                },
                d = Object.getPrototypeOf(Function),
                h = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : function() {
                    var e = {},
                        t = [],
                        r = function() {
                            function e(e, t, r) {
                                this._index = 0, this._keys = e, this._values = t, this._selector = r
                            }
                            return e.prototype["@@iterator"] = function() {
                                return this
                            }, e.prototype[s] = function() {
                                return this
                            }, e.prototype.next = function() {
                                var e = this._index;
                                if (e >= 0 && e < this._keys.length) {
                                    var r = this._selector(this._keys[e], this._values[e]);
                                    return e + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, {
                                        value: r,
                                        done: !1
                                    }
                                }
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }, e.prototype.throw = function(e) {
                                throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), e
                            }, e.prototype.return = function(e) {
                                return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), {
                                    value: e,
                                    done: !0
                                }
                            }, e
                        }();

                    function i() {
                        this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2
                    }
                    return Object.defineProperty(i.prototype, "size", {
                        get: function() {
                            return this._keys.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), i.prototype.has = function(e) {
                        return this._find(e, !1) >= 0
                    }, i.prototype.get = function(e) {
                        var t = this._find(e, !1);
                        return t >= 0 ? this._values[t] : void 0
                    }, i.prototype.set = function(e, t) {
                        var r = this._find(e, !0);
                        return this._values[r] = t, this
                    }, i.prototype.delete = function(t) {
                        var r = this._find(t, !1);
                        if (r >= 0) {
                            for (var i = this._keys.length, n = r + 1; n < i; n++) this._keys[n - 1] = this._keys[n], this._values[n - 1] = this._values[n];
                            return this._keys.length--, this._values.length--, B(t, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0
                        }
                        return !1
                    }, i.prototype.clear = function() {
                        this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2
                    }, i.prototype.keys = function() {
                        return new r(this._keys, this._values, n)
                    }, i.prototype.values = function() {
                        return new r(this._keys, this._values, a)
                    }, i.prototype.entries = function() {
                        return new r(this._keys, this._values, o)
                    }, i.prototype["@@iterator"] = function() {
                        return this.entries()
                    }, i.prototype[s] = function() {
                        return this.entries()
                    }, i.prototype._find = function(e, t) {
                        if (!B(this._cacheKey, e)) {
                            this._cacheIndex = -1;
                            for (var r = 0; r < this._keys.length; r++)
                                if (B(this._keys[r], e)) {
                                    this._cacheIndex = r;
                                    break
                                }
                        }
                        return this._cacheIndex < 0 && t && (this._cacheIndex = this._keys.length, this._keys.push(e), this._values.push(void 0)), this._cacheIndex
                    }, i;

                    function n(e, t) {
                        return e
                    }

                    function a(e, t) {
                        return t
                    }

                    function o(e, t) {
                        return [e, t]
                    }
                }(),
                p = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : function() {
                    function e() {
                        this._map = new h
                    }
                    return Object.defineProperty(e.prototype, "size", {
                        get: function() {
                            return this._map.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.has = function(e) {
                        return this._map.has(e)
                    }, e.prototype.add = function(e) {
                        return this._map.set(e, e), this
                    }, e.prototype.delete = function(e) {
                        return this._map.delete(e)
                    }, e.prototype.clear = function() {
                        this._map.clear()
                    }, e.prototype.keys = function() {
                        return this._map.keys()
                    }, e.prototype.values = function() {
                        return this._map.keys()
                    }, e.prototype.entries = function() {
                        return this._map.entries()
                    }, e.prototype["@@iterator"] = function() {
                        return this.keys()
                    }, e.prototype[s] = function() {
                        return this.keys()
                    }, e
                }(),
                f = "function" == typeof WeakMap ? WeakMap : function() {
                    var e = u.create(),
                        t = n();

                    function r() {
                        this._key = n()
                    }
                    return r.prototype.has = function(e) {
                        var t = a(e, !1);
                        return void 0 !== t && u.has(t, this._key)
                    }, r.prototype.get = function(e) {
                        var t = a(e, !1);
                        return void 0 !== t ? u.get(t, this._key) : void 0
                    }, r.prototype.set = function(e, t) {
                        return a(e, !0)[this._key] = t, this
                    }, r.prototype.delete = function(e) {
                        var t = a(e, !1);
                        return void 0 !== t && delete t[this._key]
                    }, r.prototype.clear = function() {
                        this._key = n()
                    }, r;

                    function n() {
                        var t;
                        do t = "@@WeakMap@@" + function() {
                            var e = function() {
                                if ("function" == typeof Uint8Array) {
                                    var e = new Uint8Array(16);
                                    return "u" > typeof crypto ? crypto.getRandomValues(e) : "u" > typeof msCrypto ? msCrypto.getRandomValues(e) : s(e, 16), e
                                }
                                return s(Array(16), 16)
                            }();
                            e[6] = 79 & e[6] | 64, e[8] = 191 & e[8] | 128;
                            for (var t = "", r = 0; r < 16; ++r) {
                                var i = e[r];
                                (4 === r || 6 === r || 8 === r) && (t += "-"), i < 16 && (t += "0"), t += i.toString(16).toLowerCase()
                            }
                            return t
                        }(); while (u.has(e, t)) return e[t] = !0, t
                    }

                    function a(e, r) {
                        if (!i.call(e, t)) {
                            if (!r) return;
                            Object.defineProperty(e, t, {
                                value: u.create()
                            })
                        }
                        return e[t]
                    }

                    function s(e, t) {
                        for (var r = 0; r < t; ++r) e[r] = 255 * Math.random() | 0;
                        return e
                    }
                }(),
                x = n ? Symbol.for("@reflect-metadata:registry") : void 0,
                m = (!_(x) && A(t.Reflect) && Object.isExtensible(t.Reflect) && (r = t.Reflect[x]), _(r) && (r = function() {
                    _(x) || void 0 === t.Reflect || x in t.Reflect || "function" != typeof t.Reflect.defineMetadata || (r = (e = t.Reflect).defineMetadata, i = e.hasOwnMetadata, n = e.getOwnMetadata, a = e.getOwnMetadataKeys, s = e.deleteMetadata, o = new f, c = {
                        isProviderFor: function(e, t) {
                            var r = o.get(e);
                            return !!(!_(r) && r.has(t)) || !!a(e, t).length && (_(r) && (r = new p, o.set(e, r)), r.add(t), !0)
                        },
                        OrdinaryDefineOwnMetadata: r,
                        OrdinaryHasOwnMetadata: i,
                        OrdinaryGetOwnMetadata: n,
                        OrdinaryOwnMetadataKeys: a,
                        OrdinaryDeleteMetadata: s
                    });
                    var e, r, i, n, a, s, o, c, l, u, d, m = new f,
                        y = {
                            registerProvider: function(e) {
                                if (!Object.isExtensible(y)) throw Error("Cannot add provider to a frozen registry.");
                                switch (!0) {
                                    case c === e:
                                        break;
                                    case _(l):
                                        l = e;
                                        break;
                                    case l === e:
                                        break;
                                    case _(u):
                                        u = e;
                                        break;
                                    case u === e:
                                        break;
                                    default:
                                        void 0 === d && (d = new p), d.add(e)
                                }
                            },
                            getProvider: k,
                            setProvider: function(e, t, r) {
                                if (! function(e) {
                                        if (_(e)) throw TypeError();
                                        return l === e || u === e || !_(d) && d.has(e)
                                    }(r)) throw Error("Metadata provider not registered.");
                                var i = k(e, t);
                                if (i !== r) {
                                    if (!_(i)) return !1;
                                    var n = m.get(e);
                                    _(n) && (n = new h, m.set(e, n)), n.set(t, r)
                                }
                                return !0
                            }
                        };
                    return y;

                    function k(e, t) {
                        var r, i = m.get(e);
                        return _(i) || (r = i.get(t)), _(r) && (r = function(e, t) {
                            if (!_(l)) {
                                if (l.isProviderFor(e, t)) return l;
                                if (!_(u)) {
                                    if (u.isProviderFor(e, t)) return l;
                                    if (!_(d))
                                        for (var r = I(d);;) {
                                            var i = C(r);
                                            if (!i) return;
                                            var n = i.value;
                                            if (n.isProviderFor(e, t)) return N(r), n
                                        }
                                }
                            }
                            if (!_(c) && c.isProviderFor(e, t)) return c
                        }(e, t), _(r) || (_(i) && (i = new h, m.set(e, i)), i.set(t, r))), r
                    }
                }()), !_(x) && A(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, x, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: r
                }), r),
                y = function(e) {
                    var t = new f,
                        r = {
                            isProviderFor: function(e, r) {
                                var i = t.get(e);
                                return !_(i) && i.has(r)
                            },
                            OrdinaryDefineOwnMetadata: function(e, t, r, n) {
                                i(r, n, !0).set(e, t)
                            },
                            OrdinaryHasOwnMetadata: function(e, t, r) {
                                var n = i(t, r, !1);
                                return !_(n) && !!n.has(e)
                            },
                            OrdinaryGetOwnMetadata: function(e, t, r) {
                                var n = i(t, r, !1);
                                if (!_(n)) return n.get(e)
                            },
                            OrdinaryOwnMetadataKeys: function(e, t) {
                                var r = [],
                                    n = i(e, t, !1);
                                if (_(n)) return r;
                                for (var a = I(n.keys()), s = 0;;) {
                                    var o = C(a);
                                    if (!o) return r.length = s, r;
                                    var c = o.value;
                                    try {
                                        r[s] = c
                                    } catch (e) {
                                        try {
                                            N(a)
                                        } finally {
                                            throw e
                                        }
                                    }
                                    s++
                                }
                            },
                            OrdinaryDeleteMetadata: function(e, r, n) {
                                var a = i(r, n, !1);
                                if (_(a) || !a.delete(e)) return !1;
                                if (0 === a.size) {
                                    var s = t.get(r);
                                    _(s) || (s.delete(n), 0 === s.size && t.delete(s))
                                }
                                return !0
                            }
                        };
                    return m.registerProvider(r), r;

                    function i(i, n, a) {
                        var s = t.get(i),
                            o = !1;
                        if (_(s)) {
                            if (!a) return;
                            s = new h, t.set(i, s), o = !0
                        }
                        var c = s.get(n);
                        if (_(c)) {
                            if (!a) return;
                            if (c = new h, s.set(n, c), !e.setProvider(i, n, r)) throw s.delete(n), o && t.delete(i), Error("Wrong provider for target.")
                        }
                        return c
                    }
                }(m);

            function k(e, t, r) {
                var i = j(t, r, !1);
                return !_(i) && !!i.OrdinaryHasOwnMetadata(e, t, r)
            }

            function g(e, t, r) {
                var i = j(t, r, !1);
                if (!_(i)) return i.OrdinaryGetOwnMetadata(e, t, r)
            }

            function v(e, t, r, i) {
                j(r, i, !0).OrdinaryDefineOwnMetadata(e, t, r, i)
            }

            function b(e, t) {
                var r = j(e, t, !1);
                return r ? r.OrdinaryOwnMetadataKeys(e, t) : []
            }

            function E(e) {
                if (null === e) return 1;
                switch (typeof e) {
                    case "undefined":
                        return 0;
                    case "boolean":
                        return 2;
                    case "string":
                        return 3;
                    case "symbol":
                        return 4;
                    case "number":
                        return 5;
                    case "object":
                        return null === e ? 1 : 6;
                    default:
                        return 6
                }
            }

            function _(e) {
                return void 0 === e
            }

            function S(e) {
                return null === e
            }

            function A(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
            e("decorate", function(e, t, r, i) {
                if (_(r)) {
                    if (!w(e) || !O(t)) throw TypeError();
                    for (var n = e, a = t, s = n.length - 1; s >= 0; --s) {
                        var o = (0, n[s])(a);
                        if (!_(o) && !S(o)) {
                            if (!O(o)) throw TypeError();
                            a = o
                        }
                    }
                    return a
                }
                if (!w(e) || !A(t) || !A(i) && !_(i) && !S(i)) throw TypeError();
                return S(i) && (i = void 0),
                    function(e, t, r, i) {
                        for (var n = e.length - 1; n >= 0; --n) {
                            var a = (0, e[n])(t, r, i);
                            if (!_(a) && !S(a)) {
                                if (!A(a)) throw TypeError();
                                i = a
                            }
                        }
                        return i
                    }(e, t, r = D(r), i)
            }), e("metadata", function(e, t) {
                return function(r, i) {
                    if (!A(r) || !_(i) && ! function(e) {
                            switch (E(e)) {
                                case 3:
                                case 4:
                                    return !0;
                                default:
                                    return !1
                            }
                        }(i)) throw TypeError();
                    v(e, t, r, i)
                }
            }), e("defineMetadata", function(e, t, r, i) {
                if (!A(r)) throw TypeError();
                return _(i) || (i = D(i)), v(e, t, r, i)
            }), e("hasMetadata", function(e, t, r) {
                if (!A(t)) throw TypeError();
                return _(r) || (r = D(r)),
                    function e(t, r, i) {
                        if (k(t, r, i)) return !0;
                        var n = P(r);
                        return !S(n) && e(t, n, i)
                    }(e, t, r)
            }), e("hasOwnMetadata", function(e, t, r) {
                if (!A(t)) throw TypeError();
                return _(r) || (r = D(r)), k(e, t, r)
            }), e("getMetadata", function(e, t, r) {
                if (!A(t)) throw TypeError();
                return _(r) || (r = D(r)),
                    function e(t, r, i) {
                        if (k(t, r, i)) return g(t, r, i);
                        var n = P(r);
                        if (!S(n)) return e(t, n, i)
                    }(e, t, r)
            }), e("getOwnMetadata", function(e, t, r) {
                if (!A(t)) throw TypeError();
                return _(r) || (r = D(r)), g(e, t, r)
            }), e("getMetadataKeys", function(e, t) {
                if (!A(e)) throw TypeError();
                return _(t) || (t = D(t)),
                    function e(t, r) {
                        var i = b(t, r),
                            n = P(t);
                        if (null === n) return i;
                        var a = e(n, r);
                        if (a.length <= 0) return i;
                        if (i.length <= 0) return a;
                        for (var s = new p, o = [], c = 0; c < i.length; c++) {
                            var l = i[c],
                                u = s.has(l);
                            u || (s.add(l), o.push(l))
                        }
                        for (var d = 0; d < a.length; d++) {
                            var l = a[d],
                                u = s.has(l);
                            u || (s.add(l), o.push(l))
                        }
                        return o
                    }(e, t)
            }), e("getOwnMetadataKeys", function(e, t) {
                if (!A(e)) throw TypeError();
                return _(t) || (t = D(t)), b(e, t)
            }), e("deleteMetadata", function(e, t, r) {
                if (!A(t) || (_(r) || (r = D(r)), !A(t))) throw TypeError();
                _(r) || (r = D(r));
                var i = j(t, r, !1);
                return !_(i) && i.OrdinaryDeleteMetadata(e, t, r)
            });

            function D(e) {
                var t = function(e) {
                    switch (E(e)) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            return e
                    }
                    var t = "string",
                        r = R(e, a);
                    if (void 0 !== r) {
                        var i = r.call(e, t);
                        if (A(i)) throw TypeError();
                        return i
                    }
                    return function(e, t) {
                        if ("string" === t) {
                            var r = e.toString;
                            if (T(r)) {
                                var i = r.call(e);
                                if (!A(i)) return i
                            }
                            var n = e.valueOf;
                            if (T(n)) {
                                var i = n.call(e);
                                if (!A(i)) return i
                            }
                        } else {
                            var n = e.valueOf;
                            if (T(n)) {
                                var i = n.call(e);
                                if (!A(i)) return i
                            }
                            var a = e.toString;
                            if (T(a)) {
                                var i = a.call(e);
                                if (!A(i)) return i
                            }
                        }
                        throw TypeError()
                    }(e, t)
                }(e);
                return "symbol" == typeof t ? t : "" + t
            }

            function w(e) {
                return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : "[object Array]" === Object.prototype.toString.call(e)
            }

            function T(e) {
                return "function" == typeof e
            }

            function O(e) {
                return "function" == typeof e
            }

            function B(e, t) {
                return e === t || e != e && t != t
            }

            function R(e, t) {
                var r = e[t];
                if (null != r) {
                    if (!T(r)) throw TypeError();
                    return r
                }
            }

            function I(e) {
                var t = R(e, s);
                if (!T(t)) throw TypeError();
                var r = t.call(e);
                if (!A(r)) throw TypeError();
                return r
            }

            function C(e) {
                var t = e.next();
                return !t.done && t
            }

            function N(e) {
                var t = e.return;
                t && t.call(e)
            }

            function P(e) {
                var t = Object.getPrototypeOf(e);
                if ("function" != typeof e || e === d || t !== d) return t;
                var r = e.prototype,
                    i = r && Object.getPrototypeOf(r);
                if (null == i || i === Object.prototype) return t;
                var n = i.constructor;
                return "function" != typeof n || n === e ? t : n
            }

            function j(e, t, r) {
                var i = m.getProvider(e, t);
                if (!_(i)) return i;
                if (r) {
                    if (m.setProvider(e, t, y)) return y;
                    throw Error("Illegal state.")
                }
            }

            function F(e) {
                return e.__ = void 0, delete e.__, e
            }
        })
}, 305265, (e, t, r) => {
    "use strict";
    t.exports = {
        MAX_LENGTH: 256,
        MAX_SAFE_COMPONENT_LENGTH: 16,
        MAX_SAFE_BUILD_LENGTH: 250,
        MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 0x1fffffffffffff,
        RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
        SEMVER_SPEC_VERSION: "2.0.0",
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2
    }
}, 327528, (e, t, r) => {
    "use strict";
    var i = e.i(350461);
    t.exports = "object" == typeof i.default && i.default.env && i.default.env.NODE_DEBUG && /\bsemver\b/i.test(i.default.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {}
}, 909601, (e, t, r) => {
    "use strict";
    let {
        MAX_SAFE_COMPONENT_LENGTH: i,
        MAX_SAFE_BUILD_LENGTH: n,
        MAX_LENGTH: a
    } = e.r(305265), s = e.r(327528), o = (r = t.exports = {}).re = [], c = r.safeRe = [], l = r.src = [], u = r.safeSrc = [], d = r.t = {}, h = 0, p = "[a-zA-Z0-9-]", f = [
        ["\\s", 1],
        ["\\d", a],
        [p, n]
    ], x = (e, t, r) => {
        let i = (e => {
                for (let [t, r] of f) e = e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);
                return e
            })(t),
            n = h++;
        s(e, n, t), d[e] = n, l[n] = t, u[n] = i, o[n] = new RegExp(t, r ? "g" : void 0), c[n] = new RegExp(i, r ? "g" : void 0)
    };
    x("NUMERICIDENTIFIER", "0|[1-9]\\d*"), x("NUMERICIDENTIFIERLOOSE", "\\d+"), x("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${p}*`), x("MAINVERSION", `(${l[d.NUMERICIDENTIFIER]})\\.(${l[d.NUMERICIDENTIFIER]})\\.(${l[d.NUMERICIDENTIFIER]})`), x("MAINVERSIONLOOSE", `(${l[d.NUMERICIDENTIFIERLOOSE]})\\.(${l[d.NUMERICIDENTIFIERLOOSE]})\\.(${l[d.NUMERICIDENTIFIERLOOSE]})`), x("PRERELEASEIDENTIFIER", `(?:${l[d.NONNUMERICIDENTIFIER]}|${l[d.NUMERICIDENTIFIER]})`), x("PRERELEASEIDENTIFIERLOOSE", `(?:${l[d.NONNUMERICIDENTIFIER]}|${l[d.NUMERICIDENTIFIERLOOSE]})`), x("PRERELEASE", `(?:-(${l[d.PRERELEASEIDENTIFIER]}(?:\\.${l[d.PRERELEASEIDENTIFIER]})*))`), x("PRERELEASELOOSE", `(?:-?(${l[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[d.PRERELEASEIDENTIFIERLOOSE]})*))`), x("BUILDIDENTIFIER", `${p}+`), x("BUILD", `(?:\\+(${l[d.BUILDIDENTIFIER]}(?:\\.${l[d.BUILDIDENTIFIER]})*))`), x("FULLPLAIN", `v?${l[d.MAINVERSION]}${l[d.PRERELEASE]}?${l[d.BUILD]}?`), x("FULL", `^${l[d.FULLPLAIN]}$`), x("LOOSEPLAIN", `[v=\\s]*${l[d.MAINVERSIONLOOSE]}${l[d.PRERELEASELOOSE]}?${l[d.BUILD]}?`), x("LOOSE", `^${l[d.LOOSEPLAIN]}$`), x("GTLT", "((?:<|>)?=?)"), x("XRANGEIDENTIFIERLOOSE", `${l[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), x("XRANGEIDENTIFIER", `${l[d.NUMERICIDENTIFIER]}|x|X|\\*`), x("XRANGEPLAIN", `[v=\\s]*(${l[d.XRANGEIDENTIFIER]})(?:\\.(${l[d.XRANGEIDENTIFIER]})(?:\\.(${l[d.XRANGEIDENTIFIER]})(?:${l[d.PRERELEASE]})?${l[d.BUILD]}?)?)?`), x("XRANGEPLAINLOOSE", `[v=\\s]*(${l[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[d.XRANGEIDENTIFIERLOOSE]})(?:${l[d.PRERELEASELOOSE]})?${l[d.BUILD]}?)?)?`), x("XRANGE", `^${l[d.GTLT]}\\s*${l[d.XRANGEPLAIN]}$`), x("XRANGELOOSE", `^${l[d.GTLT]}\\s*${l[d.XRANGEPLAINLOOSE]}$`), x("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), x("COERCE", `${l[d.COERCEPLAIN]}(?:$|[^\\d])`), x("COERCEFULL", l[d.COERCEPLAIN] + `(?:${l[d.PRERELEASE]})?` + `(?:${l[d.BUILD]})?` + "(?:$|[^\\d])"), x("COERCERTL", l[d.COERCE], !0), x("COERCERTLFULL", l[d.COERCEFULL], !0), x("LONETILDE", "(?:~>?)"), x("TILDETRIM", `(\\s*)${l[d.LONETILDE]}\\s+`, !0), r.tildeTrimReplace = "$1~", x("TILDE", `^${l[d.LONETILDE]}${l[d.XRANGEPLAIN]}$`), x("TILDELOOSE", `^${l[d.LONETILDE]}${l[d.XRANGEPLAINLOOSE]}$`), x("LONECARET", "(?:\\^)"), x("CARETTRIM", `(\\s*)${l[d.LONECARET]}\\s+`, !0), r.caretTrimReplace = "$1^", x("CARET", `^${l[d.LONECARET]}${l[d.XRANGEPLAIN]}$`), x("CARETLOOSE", `^${l[d.LONECARET]}${l[d.XRANGEPLAINLOOSE]}$`), x("COMPARATORLOOSE", `^${l[d.GTLT]}\\s*(${l[d.LOOSEPLAIN]})$|^$`), x("COMPARATOR", `^${l[d.GTLT]}\\s*(${l[d.FULLPLAIN]})$|^$`), x("COMPARATORTRIM", `(\\s*)${l[d.GTLT]}\\s*(${l[d.LOOSEPLAIN]}|${l[d.XRANGEPLAIN]})`, !0), r.comparatorTrimReplace = "$1$2$3", x("HYPHENRANGE", `^\\s*(${l[d.XRANGEPLAIN]})\\s+-\\s+(${l[d.XRANGEPLAIN]})\\s*$`), x("HYPHENRANGELOOSE", `^\\s*(${l[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[d.XRANGEPLAINLOOSE]})\\s*$`), x("STAR", "(<|>)?=?\\s*\\*"), x("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), x("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
}, 384301, (e, t, r) => {
    "use strict";
    let i = Object.freeze({
            loose: !0
        }),
        n = Object.freeze({});
    t.exports = e => e ? "object" != typeof e ? i : e : n
}, 189681, (e, t, r) => {
    "use strict";
    let i = /^[0-9]+$/,
        n = (e, t) => {
            if ("number" == typeof e && "number" == typeof t) return e === t ? 0 : e < t ? -1 : 1;
            let r = i.test(e),
                n = i.test(t);
            return r && n && (e *= 1, t *= 1), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
        };
    t.exports = {
        compareIdentifiers: n,
        rcompareIdentifiers: (e, t) => n(t, e)
    }
}, 633371, (e, t, r) => {
    "use strict";
    let i = e.r(327528),
        {
            MAX_LENGTH: n,
            MAX_SAFE_INTEGER: a
        } = e.r(305265),
        {
            safeRe: s,
            t: o
        } = e.r(909601),
        c = e.r(384301),
        {
            compareIdentifiers: l
        } = e.r(189681);
    class u {
        constructor(e, t) {
            if (t = c(t), e instanceof u)
                if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
                else e = e.version;
            else if ("string" != typeof e) throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
            if (e.length > n) throw TypeError(`version is longer than ${n} characters`);
            i("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
            const r = e.trim().match(t.loose ? s[o.LOOSE] : s[o.FULL]);
            if (!r) throw TypeError(`Invalid Version: ${e}`);
            if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > a || this.major < 0) throw TypeError("Invalid major version");
            if (this.minor > a || this.minor < 0) throw TypeError("Invalid minor version");
            if (this.patch > a || this.patch < 0) throw TypeError("Invalid patch version");
            r[4] ? this.prerelease = r[4].split(".").map(e => {
                if (/^[0-9]+$/.test(e)) {
                    let t = +e;
                    if (t >= 0 && t < a) return t
                }
                return e
            }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format()
        }
        format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
        }
        toString() {
            return this.version
        }
        compare(e) {
            if (i("SemVer.compare", this.version, this.options, e), !(e instanceof u)) {
                if ("string" == typeof e && e === this.version) return 0;
                e = new u(e, this.options)
            }
            return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
        }
        compareMain(e) {
            return (e instanceof u || (e = new u(e, this.options)), this.major < e.major) ? -1 : this.major > e.major ? 1 : this.minor < e.minor ? -1 : this.minor > e.minor ? 1 : this.patch < e.patch ? -1 : +(this.patch > e.patch)
        }
        comparePre(e) {
            if (e instanceof u || (e = new u(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
            if (!this.prerelease.length && e.prerelease.length) return 1;
            if (!this.prerelease.length && !e.prerelease.length) return 0;
            let t = 0;
            do {
                let r = this.prerelease[t],
                    n = e.prerelease[t];
                if (i("prerelease compare", t, r, n), void 0 === r && void 0 === n) return 0;
                if (void 0 === n) return 1;
                if (void 0 === r) return -1;
                else if (r === n) continue;
                else return l(r, n)
            } while (++t)
        }
        compareBuild(e) {
            e instanceof u || (e = new u(e, this.options));
            let t = 0;
            do {
                let r = this.build[t],
                    n = e.build[t];
                if (i("build compare", t, r, n), void 0 === r && void 0 === n) return 0;
                if (void 0 === n) return 1;
                if (void 0 === r) return -1;
                else if (r === n) continue;
                else return l(r, n)
            } while (++t)
        }
        inc(e, t, r) {
            if (e.startsWith("pre")) {
                if (!t && !1 === r) throw Error("invalid increment argument: identifier is empty");
                if (t) {
                    let e = `-${t}`.match(this.options.loose ? s[o.PRERELEASELOOSE] : s[o.PRERELEASE]);
                    if (!e || e[1] !== t) throw Error(`invalid identifier: ${t}`)
                }
            }
            switch (e) {
                case "premajor":
                    this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, r);
                    break;
                case "preminor":
                    this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, r);
                    break;
                case "prepatch":
                    this.prerelease.length = 0, this.inc("patch", t, r), this.inc("pre", t, r);
                    break;
                case "prerelease":
                    0 === this.prerelease.length && this.inc("patch", t, r), this.inc("pre", t, r);
                    break;
                case "release":
                    if (0 === this.prerelease.length) throw Error(`version ${this.raw} is not a prerelease`);
                    this.prerelease.length = 0;
                    break;
                case "major":
                    (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                    break;
                case "minor":
                    (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
                    break;
                case "patch":
                    0 === this.prerelease.length && this.patch++, this.prerelease = [];
                    break;
                case "pre":
                    {
                        let e = +!!Number(r);
                        if (0 === this.prerelease.length) this.prerelease = [e];
                        else {
                            let i = this.prerelease.length;
                            for (; --i >= 0;) "number" == typeof this.prerelease[i] && (this.prerelease[i]++, i = -2);
                            if (-1 === i) {
                                if (t === this.prerelease.join(".") && !1 === r) throw Error("invalid increment argument: identifier already exists");
                                this.prerelease.push(e)
                            }
                        }
                        if (t) {
                            let i = [t, e];
                            !1 === r && (i = [t]), 0 === l(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i
                        }
                        break
                    }
                default:
                    throw Error(`invalid increment argument: ${e}`)
            }
            return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this
        }
    }
    t.exports = u
}, 993446, (e, t, r) => {
    "use strict";
    let i = e.r(633371);
    t.exports = (e, t, r = !1) => {
        if (e instanceof i) return e;
        try {
            return new i(e, t)
        } catch (e) {
            if (!r) return null;
            throw e
        }
    }
}, 217691, (e, t, r) => {
    "use strict";
    let i = e.r(993446);
    t.exports = (e, t) => {
        let r = i(e, t);
        return r ? r.version : null
    }
}, 166251, (e, t, r) => {
    "use strict";
    let i = e.r(993446);
    t.exports = (e, t) => {
        let r = i(e.trim().replace(/^[=v]+/, ""), t);
        return r ? r.version : null
    }
}, 33988, (e, t, r) => {
    "use strict";
    let i = e.r(633371);
    t.exports = (e, t, r, n, a) => {
        "string" == typeof r && (a = n, n = r, r = void 0);
        try {
            return new i(e instanceof i ? e.version : e, r).inc(t, n, a).version
        } catch (e) {
            return null
        }
    }
}, 325207, (e, t, r) => {
    "use strict";
    let i = e.r(993446);
    t.exports = (e, t) => {
        let r = i(e, null, !0),
            n = i(t, null, !0),
            a = r.compare(n);
        if (0 === a) return null;
        let s = a > 0,
            o = s ? r : n,
            c = s ? n : r,
            l = !!o.prerelease.length;
        if (c.prerelease.length && !l) {
            if (!c.patch && !c.minor) return "major";
            if (0 === c.compareMain(o)) return c.minor && !c.patch ? "minor" : "patch"
        }
        let u = l ? "pre" : "";
        return r.major !== n.major ? u + "major" : r.minor !== n.minor ? u + "minor" : r.patch !== n.patch ? u + "patch" : "prerelease"
    }
}, 684990, (e, t, r) => {
    "use strict";
    let i = e.r(633371);
    t.exports = (e, t) => new i(e, t).major
}, 738861, (e, t, r) => {
    "use strict";
    let i = e.r(633371);
    t.exports = (e, t) => new i(e, t).minor
}, 117474, (e, t, r) => {
    "use strict";
    let i = e.r(633371);
    t.exports = (e, t) => new i(e, t).patch
}, 962364, (e, t, r) => {
    "use strict";
    let i = e.r(993446);
    t.exports = (e, t) => {
        let r = i(e, t);
        return r && r.prerelease.length ? r.prerelease : null
    }
}, 109314, (e, t, r) => {
    "use strict";
    let i = e.r(633371);
    t.exports = (e, t, r) => new i(e, r).compare(new i(t, r))
}, 557566, (e, t, r) => {
    "use strict";
    let i = e.r(109314);
    t.exports = (e, t, r) => i(t, e, r)
}, 614975, (e, t, r) => {
    "use strict";
    let i = e.r(109314);
    t.exports = (e, t) => i(e, t, !0)
}, 985604, (e, t, r) => {
    "use strict";
    let i = e.r(633371);
    t.exports = (e, t, r) => {
        let n = new i(e, r),
            a = new i(t, r);
        return n.compare(a) || n.compareBuild(a)
    }
}, 475206, (e, t, r) => {
    "use strict";
    let i = e.r(985604);
    t.exports = (e, t) => e.sort((e, r) => i(e, r, t))
}, 437837, (e, t, r) => {
    "use strict";
    let i = e.r(985604);
    t.exports = (e, t) => e.sort((e, r) => i(r, e, t))
}, 50929, (e, t, r) => {
    "use strict";
    let i = e.r(109314);
    t.exports = (e, t, r) => i(e, t, r) > 0
}, 830243, (e, t, r) => {
    "use strict";
    let i = e.r(109314);
    t.exports = (e, t, r) => 0 > i(e, t, r)
}, 907899, (e, t, r) => {
    "use strict";
    let i = e.r(109314);
    t.exports = (e, t, r) => 0 === i(e, t, r)
}, 239988, (e, t, r) => {
    "use strict";
    let i = e.r(109314);
    t.exports = (e, t, r) => 0 !== i(e, t, r)
}, 426879, (e, t, r) => {
    "use strict";
    let i = e.r(109314);
    t.exports = (e, t, r) => i(e, t, r) >= 0
}, 773484, (e, t, r) => {
    "use strict";
    let i = e.r(109314);
    t.exports = (e, t, r) => 0 >= i(e, t, r)
}, 211056, (e, t, r) => {
    "use strict";
    let i = e.r(907899),
        n = e.r(239988),
        a = e.r(50929),
        s = e.r(426879),
        o = e.r(830243),
        c = e.r(773484);
    t.exports = (e, t, r, l) => {
        switch (t) {
            case "===":
                return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e === r;
            case "!==":
                return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e !== r;
            case "":
            case "=":
            case "==":
                return i(e, r, l);
            case "!=":
                return n(e, r, l);
            case ">":
                return a(e, r, l);
            case ">=":
                return s(e, r, l);
            case "<":
                return o(e, r, l);
            case "<=":
                return c(e, r, l);
            default:
                throw TypeError(`Invalid operator: ${t}`)
        }
    }
}, 859693, (e, t, r) => {
    "use strict";
    let i = e.r(633371),
        n = e.r(993446),
        {
            safeRe: a,
            t: s
        } = e.r(909601);
    t.exports = (e, t) => {
        if (e instanceof i) return e;
        if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
        let r = null;
        if ((t = t || {}).rtl) {
            let i, n = t.includePrerelease ? a[s.COERCERTLFULL] : a[s.COERCERTL];
            for (;
                (i = n.exec(e)) && (!r || r.index + r[0].length !== e.length);) r && i.index + i[0].length === r.index + r[0].length || (r = i), n.lastIndex = i.index + i[1].length + i[2].length;
            n.lastIndex = -1
        } else r = e.match(t.includePrerelease ? a[s.COERCEFULL] : a[s.COERCE]);
        if (null === r) return null;
        let o = r[2],
            c = r[3] || "0",
            l = r[4] || "0",
            u = t.includePrerelease && r[5] ? `-${r[5]}` : "",
            d = t.includePrerelease && r[6] ? `+${r[6]}` : "";
        return n(`${o}.${c}.${l}${u}${d}`, t)
    }
}, 699669, (e, t, r) => {
    "use strict";
    t.exports = class {
        constructor() {
            this.max = 1e3, this.map = new Map
        }
        get(e) {
            let t = this.map.get(e);
            if (void 0 !== t) return this.map.delete(e), this.map.set(e, t), t
        }
        delete(e) {
            return this.map.delete(e)
        }
        set(e, t) {
            if (!this.delete(e) && void 0 !== t) {
                if (this.map.size >= this.max) {
                    let e = this.map.keys().next().value;
                    this.delete(e)
                }
                this.map.set(e, t)
            }
            return this
        }
    }
}, 101907, (e, t, r) => {
    "use strict";
    let i = /\s+/g;
    class n {
        constructor(e, t) {
            if (t = s(t), e instanceof n)
                if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
                else return new n(e.raw, t);
            if (e instanceof o) return this.raw = e.value, this.set = [
                [e]
            ], this.formatted = void 0, this;
            if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().replace(i, " "), this.set = this.raw.split("||").map(e => this.parseRange(e.trim())).filter(e => e.length), !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
            if (this.set.length > 1) {
                const e = this.set[0];
                if (this.set = this.set.filter(e => !y(e[0])), 0 === this.set.length) this.set = [e];
                else if (this.set.length > 1) {
                    for (const e of this.set)
                        if (1 === e.length && k(e[0])) {
                            this.set = [e];
                            break
                        }
                }
            }
            this.formatted = void 0
        }
        get range() {
            if (void 0 === this.formatted) {
                this.formatted = "";
                for (let e = 0; e < this.set.length; e++) {
                    e > 0 && (this.formatted += "||");
                    let t = this.set[e];
                    for (let e = 0; e < t.length; e++) e > 0 && (this.formatted += " "), this.formatted += t[e].toString().trim()
                }
            }
            return this.formatted
        }
        format() {
            return this.range
        }
        toString() {
            return this.range
        }
        parseRange(e) {
            let t = ((this.options.includePrerelease && x) | (this.options.loose && m)) + ":" + e,
                r = a.get(t);
            if (r) return r;
            let i = this.options.loose,
                n = i ? u[d.HYPHENRANGELOOSE] : u[d.HYPHENRANGE];
            c("hyphen replace", e = e.replace(n, B(this.options.includePrerelease))), c("comparator trim", e = e.replace(u[d.COMPARATORTRIM], h)), c("tilde trim", e = e.replace(u[d.TILDETRIM], p)), c("caret trim", e = e.replace(u[d.CARETTRIM], f));
            let s = e.split(" ").map(e => v(e, this.options)).join(" ").split(/\s+/).map(e => O(e, this.options));
            i && (s = s.filter(e => (c("loose invalid filter", e, this.options), !!e.match(u[d.COMPARATORLOOSE])))), c("range list", s);
            let l = new Map;
            for (let e of s.map(e => new o(e, this.options))) {
                if (y(e)) return [e];
                l.set(e.value, e)
            }
            l.size > 1 && l.has("") && l.delete("");
            let k = [...l.values()];
            return a.set(t, k), k
        }
        intersects(e, t) {
            if (!(e instanceof n)) throw TypeError("a Range is required");
            return this.set.some(r => g(r, t) && e.set.some(e => g(e, t) && r.every(r => e.every(e => r.intersects(e, t)))))
        }
        test(e) {
            if (!e) return !1;
            if ("string" == typeof e) try {
                e = new l(e, this.options)
            } catch (e) {
                return !1
            }
            for (let t = 0; t < this.set.length; t++)
                if (R(this.set[t], e, this.options)) return !0;
            return !1
        }
    }
    t.exports = n;
    let a = new(e.r(699669)),
        s = e.r(384301),
        o = e.r(31360),
        c = e.r(327528),
        l = e.r(633371),
        {
            safeRe: u,
            t: d,
            comparatorTrimReplace: h,
            tildeTrimReplace: p,
            caretTrimReplace: f
        } = e.r(909601),
        {
            FLAG_INCLUDE_PRERELEASE: x,
            FLAG_LOOSE: m
        } = e.r(305265),
        y = e => "<0.0.0-0" === e.value,
        k = e => "" === e.value,
        g = (e, t) => {
            let r = !0,
                i = e.slice(),
                n = i.pop();
            for (; r && i.length;) r = i.every(e => n.intersects(e, t)), n = i.pop();
            return r
        },
        v = (e, t) => (c("comp", e = e.replace(u[d.BUILD], ""), t), c("caret", e = S(e, t)), c("tildes", e = E(e, t)), c("xrange", e = D(e, t)), c("stars", e = T(e, t)), e),
        b = e => !e || "x" === e.toLowerCase() || "*" === e,
        E = (e, t) => e.trim().split(/\s+/).map(e => _(e, t)).join(" "),
        _ = (e, t) => {
            let r = t.loose ? u[d.TILDELOOSE] : u[d.TILDE];
            return e.replace(r, (t, r, i, n, a) => {
                let s;
                return c("tilde", e, t, r, i, n, a), b(r) ? s = "" : b(i) ? s = `>=${r}.0.0 <${+r+1}.0.0-0` : b(n) ? s = `>=${r}.${i}.0 <${r}.${+i+1}.0-0` : a ? (c("replaceTilde pr", a), s = `>=${r}.${i}.${n}-${a} <${r}.${+i+1}.0-0`) : s = `>=${r}.${i}.${n} <${r}.${+i+1}.0-0`, c("tilde return", s), s
            })
        },
        S = (e, t) => e.trim().split(/\s+/).map(e => A(e, t)).join(" "),
        A = (e, t) => {
            c("caret", e, t);
            let r = t.loose ? u[d.CARETLOOSE] : u[d.CARET],
                i = t.includePrerelease ? "-0" : "";
            return e.replace(r, (t, r, n, a, s) => {
                let o;
                return c("caret", e, t, r, n, a, s), b(r) ? o = "" : b(n) ? o = `>=${r}.0.0${i} <${+r+1}.0.0-0` : b(a) ? o = "0" === r ? `>=${r}.${n}.0${i} <${r}.${+n+1}.0-0` : `>=${r}.${n}.0${i} <${+r+1}.0.0-0` : s ? (c("replaceCaret pr", s), o = "0" === r ? "0" === n ? `>=${r}.${n}.${a}-${s} <${r}.${n}.${+a+1}-0` : `>=${r}.${n}.${a}-${s} <${r}.${+n+1}.0-0` : `>=${r}.${n}.${a}-${s} <${+r+1}.0.0-0`) : (c("no pr"), o = "0" === r ? "0" === n ? `>=${r}.${n}.${a}${i} <${r}.${n}.${+a+1}-0` : `>=${r}.${n}.${a}${i} <${r}.${+n+1}.0-0` : `>=${r}.${n}.${a} <${+r+1}.0.0-0`), c("caret return", o), o
            })
        },
        D = (e, t) => (c("replaceXRanges", e, t), e.split(/\s+/).map(e => w(e, t)).join(" ")),
        w = (e, t) => {
            e = e.trim();
            let r = t.loose ? u[d.XRANGELOOSE] : u[d.XRANGE];
            return e.replace(r, (r, i, n, a, s, o) => {
                c("xRange", e, r, i, n, a, s, o);
                let l = b(n),
                    u = l || b(a),
                    d = u || b(s);
                return "=" === i && d && (i = ""), o = t.includePrerelease ? "-0" : "", l ? r = ">" === i || "<" === i ? "<0.0.0-0" : "*" : i && d ? (u && (a = 0), s = 0, ">" === i ? (i = ">=", u ? (n = +n + 1, a = 0) : a = +a + 1, s = 0) : "<=" === i && (i = "<", u ? n = +n + 1 : a = +a + 1), "<" === i && (o = "-0"), r = `${i+n}.${a}.${s}${o}`) : u ? r = `>=${n}.0.0${o} <${+n+1}.0.0-0` : d && (r = `>=${n}.${a}.0${o} <${n}.${+a+1}.0-0`), c("xRange return", r), r
            })
        },
        T = (e, t) => (c("replaceStars", e, t), e.trim().replace(u[d.STAR], "")),
        O = (e, t) => (c("replaceGTE0", e, t), e.trim().replace(u[t.includePrerelease ? d.GTE0PRE : d.GTE0], "")),
        B = e => (t, r, i, n, a, s, o, c, l, u, d, h) => (r = b(i) ? "" : b(n) ? `>=${i}.0.0${e?"-0":""}` : b(a) ? `>=${i}.${n}.0${e?"-0":""}` : s ? `>=${r}` : `>=${r}${e?"-0":""}`, c = b(l) ? "" : b(u) ? `<${+l+1}.0.0-0` : b(d) ? `<${l}.${+u+1}.0-0` : h ? `<=${l}.${u}.${d}-${h}` : e ? `<${l}.${u}.${+d+1}-0` : `<=${c}`, `${r} ${c}`.trim()),
        R = (e, t, r) => {
            for (let r = 0; r < e.length; r++)
                if (!e[r].test(t)) return !1;
            if (t.prerelease.length && !r.includePrerelease) {
                for (let r = 0; r < e.length; r++)
                    if (c(e[r].semver), e[r].semver !== o.ANY && e[r].semver.prerelease.length > 0) {
                        let i = e[r].semver;
                        if (i.major === t.major && i.minor === t.minor && i.patch === t.patch) return !0
                    }
                return !1
            }
            return !0
        }
}, 31360, (e, t, r) => {
    "use strict";
    let i = Symbol("SemVer ANY");
    class n {
        static get ANY() {
            return i
        }
        constructor(e, t) {
            if (t = a(t), e instanceof n)
                if (!!t.loose === e.loose) return e;
                else e = e.value;
            l("comparator", e = e.trim().split(/\s+/).join(" "), t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === i ? this.value = "" : this.value = this.operator + this.semver.version, l("comp", this)
        }
        parse(e) {
            let t = this.options.loose ? s[o.COMPARATORLOOSE] : s[o.COMPARATOR],
                r = e.match(t);
            if (!r) throw TypeError(`Invalid comparator: ${e}`);
            this.operator = void 0 !== r[1] ? r[1] : "", "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new u(r[2], this.options.loose) : this.semver = i
        }
        toString() {
            return this.value
        }
        test(e) {
            if (l("Comparator.test", e, this.options.loose), this.semver === i || e === i) return !0;
            if ("string" == typeof e) try {
                e = new u(e, this.options)
            } catch (e) {
                return !1
            }
            return c(e, this.operator, this.semver, this.options)
        }
        intersects(e, t) {
            if (!(e instanceof n)) throw TypeError("a Comparator is required");
            return "" === this.operator ? "" === this.value || new d(e.value, t).test(this.value) : "" === e.operator ? "" === e.value || new d(this.value, t).test(e.semver) : !((t = a(t)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === e.value) || !t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) && !!(this.operator.startsWith(">") && e.operator.startsWith(">") || this.operator.startsWith("<") && e.operator.startsWith("<") || this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=") || c(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<") || c(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">"))
        }
    }
    t.exports = n;
    let a = e.r(384301),
        {
            safeRe: s,
            t: o
        } = e.r(909601),
        c = e.r(211056),
        l = e.r(327528),
        u = e.r(633371),
        d = e.r(101907)
}, 965116, (e, t, r) => {
    "use strict";
    let i = e.r(101907);
    t.exports = (e, t, r) => {
        try {
            t = new i(t, r)
        } catch (e) {
            return !1
        }
        return t.test(e)
    }
}, 444317, (e, t, r) => {
    "use strict";
    let i = e.r(101907);
    t.exports = (e, t) => new i(e, t).set.map(e => e.map(e => e.value).join(" ").trim().split(" "))
}, 149065, (e, t, r) => {
    "use strict";
    let i = e.r(633371),
        n = e.r(101907);
    t.exports = (e, t, r) => {
        let a = null,
            s = null,
            o = null;
        try {
            o = new n(t, r)
        } catch (e) {
            return null
        }
        return e.forEach(e => {
            o.test(e) && (!a || -1 === s.compare(e)) && (s = new i(a = e, r))
        }), a
    }
}, 651055, (e, t, r) => {
    "use strict";
    let i = e.r(633371),
        n = e.r(101907);
    t.exports = (e, t, r) => {
        let a = null,
            s = null,
            o = null;
        try {
            o = new n(t, r)
        } catch (e) {
            return null
        }
        return e.forEach(e => {
            o.test(e) && (!a || 1 === s.compare(e)) && (s = new i(a = e, r))
        }), a
    }
}, 913398, (e, t, r) => {
    "use strict";
    let i = e.r(633371),
        n = e.r(101907),
        a = e.r(50929);
    t.exports = (e, t) => {
        e = new n(e, t);
        let r = new i("0.0.0");
        if (e.test(r) || (r = new i("0.0.0-0"), e.test(r))) return r;
        r = null;
        for (let t = 0; t < e.set.length; ++t) {
            let n = e.set[t],
                s = null;
            n.forEach(e => {
                let t = new i(e.semver.version);
                switch (e.operator) {
                    case ">":
                        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                    case "":
                    case ">=":
                        (!s || a(t, s)) && (s = t);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw Error(`Unexpected operation: ${e.operator}`)
                }
            }), s && (!r || a(r, s)) && (r = s)
        }
        return r && e.test(r) ? r : null
    }
}, 508037, (e, t, r) => {
    "use strict";
    let i = e.r(101907);
    t.exports = (e, t) => {
        try {
            return new i(e, t).range || "*"
        } catch (e) {
            return null
        }
    }
}, 965846, (e, t, r) => {
    "use strict";
    let i = e.r(633371),
        n = e.r(31360),
        {
            ANY: a
        } = n,
        s = e.r(101907),
        o = e.r(965116),
        c = e.r(50929),
        l = e.r(830243),
        u = e.r(773484),
        d = e.r(426879);
    t.exports = (e, t, r, h) => {
        let p, f, x, m, y;
        switch (e = new i(e, h), t = new s(t, h), r) {
            case ">":
                p = c, f = u, x = l, m = ">", y = ">=";
                break;
            case "<":
                p = l, f = d, x = c, m = "<", y = "<=";
                break;
            default:
                throw TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (o(e, t, h)) return !1;
        for (let r = 0; r < t.set.length; ++r) {
            let i = t.set[r],
                s = null,
                o = null;
            if (i.forEach(e => {
                    e.semver === a && (e = new n(">=0.0.0")), s = s || e, o = o || e, p(e.semver, s.semver, h) ? s = e : x(e.semver, o.semver, h) && (o = e)
                }), s.operator === m || s.operator === y || (!o.operator || o.operator === m) && f(e, o.semver) || o.operator === y && x(e, o.semver)) return !1
        }
        return !0
    }
}, 239890, (e, t, r) => {
    "use strict";
    let i = e.r(965846);
    t.exports = (e, t, r) => i(e, t, ">", r)
}, 739370, (e, t, r) => {
    "use strict";
    let i = e.r(965846);
    t.exports = (e, t, r) => i(e, t, "<", r)
}, 872362, (e, t, r) => {
    "use strict";
    let i = e.r(101907);
    t.exports = (e, t, r) => (e = new i(e, r), t = new i(t, r), e.intersects(t, r))
}, 524141, (e, t, r) => {
    "use strict";
    let i = e.r(965116),
        n = e.r(109314);
    t.exports = (e, t, r) => {
        let a = [],
            s = null,
            o = null,
            c = e.sort((e, t) => n(e, t, r));
        for (let e of c) i(e, t, r) ? (o = e, s || (s = e)) : (o && a.push([s, o]), o = null, s = null);
        s && a.push([s, null]);
        let l = [];
        for (let [e, t] of a) e === t ? l.push(e) : t || e !== c[0] ? t ? e === c[0] ? l.push(`<=${t}`) : l.push(`${e} - ${t}`) : l.push(`>=${e}`) : l.push("*");
        let u = l.join(" || "),
            d = "string" == typeof t.raw ? t.raw : String(t);
        return u.length < d.length ? u : t
    }
}, 544414, (e, t, r) => {
    "use strict";
    let i = e.r(101907),
        n = e.r(31360),
        {
            ANY: a
        } = n,
        s = e.r(965116),
        o = e.r(109314),
        c = [new n(">=0.0.0-0")],
        l = [new n(">=0.0.0")],
        u = (e, t, r) => {
            let i, n, u, p, f, x, m;
            if (e === t) return !0;
            if (1 === e.length && e[0].semver === a)
                if (1 === t.length && t[0].semver === a) return !0;
                else e = r.includePrerelease ? c : l;
            if (1 === t.length && t[0].semver === a)
                if (r.includePrerelease) return !0;
                else t = l;
            let y = new Set;
            for (let t of e) ">" === t.operator || ">=" === t.operator ? i = d(i, t, r) : "<" === t.operator || "<=" === t.operator ? n = h(n, t, r) : y.add(t.semver);
            if (y.size > 1) return null;
            if (i && n && ((u = o(i.semver, n.semver, r)) > 0 || 0 === u && (">=" !== i.operator || "<=" !== n.operator))) return null;
            for (let e of y) {
                if (i && !s(e, String(i), r) || n && !s(e, String(n), r)) return null;
                for (let i of t)
                    if (!s(e, String(i), r)) return !1;
                return !0
            }
            let k = !!n && !r.includePrerelease && !!n.semver.prerelease.length && n.semver,
                g = !!i && !r.includePrerelease && !!i.semver.prerelease.length && i.semver;
            for (let e of (k && 1 === k.prerelease.length && "<" === n.operator && 0 === k.prerelease[0] && (k = !1), t)) {
                if (m = m || ">" === e.operator || ">=" === e.operator, x = x || "<" === e.operator || "<=" === e.operator, i) {
                    if (g && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === g.major && e.semver.minor === g.minor && e.semver.patch === g.patch && (g = !1), ">" === e.operator || ">=" === e.operator) {
                        if ((p = d(i, e, r)) === e && p !== i) return !1
                    } else if (">=" === i.operator && !s(i.semver, String(e), r)) return !1
                }
                if (n) {
                    if (k && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === k.major && e.semver.minor === k.minor && e.semver.patch === k.patch && (k = !1), "<" === e.operator || "<=" === e.operator) {
                        if ((f = h(n, e, r)) === e && f !== n) return !1
                    } else if ("<=" === n.operator && !s(n.semver, String(e), r)) return !1
                }
                if (!e.operator && (n || i) && 0 !== u) return !1
            }
            return (!i || !x || !!n || 0 === u) && (!n || !m || !!i || 0 === u) && !g && !k && !0
        },
        d = (e, t, r) => {
            if (!e) return t;
            let i = o(e.semver, t.semver, r);
            return i > 0 ? e : i < 0 || ">" === t.operator && ">=" === e.operator ? t : e
        },
        h = (e, t, r) => {
            if (!e) return t;
            let i = o(e.semver, t.semver, r);
            return i < 0 ? e : i > 0 || "<" === t.operator && "<=" === e.operator ? t : e
        };
    t.exports = (e, t, r = {}) => {
        if (e === t) return !0;
        e = new i(e, r), t = new i(t, r);
        let n = !1;
        e: for (let i of e.set) {
            for (let e of t.set) {
                let t = u(i, e, r);
                if (n = n || null !== t, t) continue e
            }
            if (n) return !1
        }
        return !0
    }
}, 656073, (e, t, r) => {
    "use strict";
    let i = e.r(909601),
        n = e.r(305265),
        a = e.r(633371),
        s = e.r(189681),
        o = e.r(993446),
        c = e.r(217691),
        l = e.r(166251),
        u = e.r(33988),
        d = e.r(325207),
        h = e.r(684990),
        p = e.r(738861),
        f = e.r(117474),
        x = e.r(962364),
        m = e.r(109314),
        y = e.r(557566),
        k = e.r(614975),
        g = e.r(985604),
        v = e.r(475206),
        b = e.r(437837),
        E = e.r(50929),
        _ = e.r(830243),
        S = e.r(907899),
        A = e.r(239988),
        D = e.r(426879),
        w = e.r(773484),
        T = e.r(211056),
        O = e.r(859693),
        B = e.r(31360),
        R = e.r(101907),
        I = e.r(965116),
        C = e.r(444317),
        N = e.r(149065),
        P = e.r(651055),
        j = e.r(913398),
        F = e.r(508037),
        V = e.r(965846),
        G = e.r(239890),
        L = e.r(739370),
        M = e.r(872362);
    t.exports = {
        parse: o,
        valid: c,
        clean: l,
        inc: u,
        diff: d,
        major: h,
        minor: p,
        patch: f,
        prerelease: x,
        compare: m,
        rcompare: y,
        compareLoose: k,
        compareBuild: g,
        sort: v,
        rsort: b,
        gt: E,
        lt: _,
        eq: S,
        neq: A,
        gte: D,
        lte: w,
        cmp: T,
        coerce: O,
        Comparator: B,
        Range: R,
        satisfies: I,
        toComparators: C,
        maxSatisfying: N,
        minSatisfying: P,
        minVersion: j,
        validRange: F,
        outside: V,
        gtr: G,
        ltr: L,
        intersects: M,
        simplifyRange: e.r(524141),
        subset: e.r(544414),
        SemVer: a,
        re: i.re,
        src: i.src,
        tokens: i.t,
        SEMVER_SPEC_VERSION: n.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: n.RELEASE_TYPES,
        compareIdentifiers: s.compareIdentifiers,
        rcompareIdentifiers: s.rcompareIdentifiers
    }
}, 993440, (e, t, r) => {
    t.exports = {
        name: "@ledgerhq/device-management-kit",
        version: "0.6.1",
        private: !1,
        license: "Apache-2.0",
        exports: {
            ".": {
                types: "./lib/types/index.d.ts",
                import: "./lib/esm/index.js",
                require: "./lib/cjs/index.js"
            }
        },
        files: ["./lib", "package.json"],
        scripts: {
            prebuild: "rimraf lib",
            build: "pnpm lmdk-build --entryPoints index.ts,src/**/*.ts --tsconfig tsconfig.prod.json",
            dev: 'concurrently "pnpm watch:builds" "pnpm watch:types"',
            "watch:builds": "pnpm lmdk-watch --entryPoints index.ts,src/**/*.ts --tsconfig tsconfig.prod.json",
            "watch:types": 'concurrently "tsc --watch -p tsconfig.prod.json" "tsc-alias --watch -p tsconfig.prod.json"',
            lint: "eslint",
            "lint:fix": "pnpm lint --fix",
            postpack: "find . -name '*.tgz' -exec cp {} ../../dist/ \\; ",
            prettier: "prettier . --check",
            "prettier:fix": "prettier . --write",
            test: "vitest run",
            "test:watch": "vitest",
            "test:coverage": "vitest run --coverage",
            typecheck: "tsc --noEmit",
            "module:create": "pnpm hygen core-module with-prompt"
        },
        dependencies: {
            "@sentry/minimal": "^6.19.7",
            axios: "^1.7.9",
            inversify: "^6.2.2",
            "inversify-logger-middleware": "^3.1.0",
            "isomorphic-ws": "^5.0.0",
            "purify-ts": "^2.1.0",
            "reflect-metadata": "^0.2.2",
            semver: "^7.6.3",
            uuid: "^11.0.3",
            ws: "^8.18.0",
            xstate: "^5.19.2"
        },
        peerDependencies: {
            rxjs: "^7.8.1"
        },
        devDependencies: {
            "@ledgerhq/esbuild-tools": "workspace:*",
            "@ledgerhq/eslint-config-dsdk": "workspace:*",
            "@ledgerhq/prettier-config-dsdk": "workspace:*",
            "@ledgerhq/tsconfig-dsdk": "workspace:*",
            "@ledgerhq/vitest-config-dmk": "workspace:*",
            "@statelyai/inspect": "^0.4.0",
            "@types/semver": "^7.5.8",
            "@types/uuid": "^10.0.0",
            "@types/ws": "^8.5.14",
            rxjs: "^7.8.1",
            "ts-node": "^10.9.2"
        }
    }
}, 388478, (e, t, r) => {
    ! function() {
        "use strict";
        var e = {
                815: function(e) {
                    e.exports = function(e, r, i, n) {
                        r = r || "&", i = i || "=";
                        var a = {};
                        if ("string" != typeof e || 0 === e.length) return a;
                        var s = /\+/g;
                        e = e.split(r);
                        var o = 1e3;
                        n && "number" == typeof n.maxKeys && (o = n.maxKeys);
                        var c = e.length;
                        o > 0 && c > o && (c = o);
                        for (var l = 0; l < c; ++l) {
                            var u, d, h, p, f = e[l].replace(s, "%20"),
                                x = f.indexOf(i);
                            (x >= 0 ? (u = f.substr(0, x), d = f.substr(x + 1)) : (u = f, d = ""), h = decodeURIComponent(u), p = decodeURIComponent(d), Object.prototype.hasOwnProperty.call(a, h)) ? t(a[h]) ? a[h].push(p) : a[h] = [a[h], p]: a[h] = p
                        }
                        return a
                    };
                    var t = Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }
                },
                577: function(e) {
                    var t = function(e) {
                        switch (typeof e) {
                            case "string":
                                return e;
                            case "boolean":
                                return e ? "true" : "false";
                            case "number":
                                return isFinite(e) ? e : "";
                            default:
                                return ""
                        }
                    };
                    e.exports = function(e, a, s, o) {
                        return (a = a || "&", s = s || "=", null === e && (e = void 0), "object" == typeof e) ? i(n(e), function(n) {
                            var o = encodeURIComponent(t(n)) + s;
                            return r(e[n]) ? i(e[n], function(e) {
                                return o + encodeURIComponent(t(e))
                            }).join(a) : o + encodeURIComponent(t(e[n]))
                        }).join(a) : o ? encodeURIComponent(t(o)) + s + encodeURIComponent(t(e)) : ""
                    };
                    var r = Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    };

                    function i(e, t) {
                        if (e.map) return e.map(t);
                        for (var r = [], i = 0; i < e.length; i++) r.push(t(e[i], i));
                        return r
                    }
                    var n = Object.keys || function(e) {
                        var t = [];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                        return t
                    }
                }
            },
            r = {};

        function i(t) {
            var n = r[t];
            if (void 0 !== n) return n.exports;
            var a = r[t] = {
                    exports: {}
                },
                s = !0;
            try {
                e[t](a, a.exports, i), s = !1
            } finally {
                s && delete r[t]
            }
            return a.exports
        }
        i.ab = "/ROOT/node_modules/next/dist/compiled/querystring-es3/";
        var n = {};
        n.decode = n.parse = i(815), n.encode = n.stringify = i(577), t.exports = n
    }()
}, 561466, (e, t, r) => {
    var i = {
            452: function(t) {
                "use strict";
                t.exports = e.r(388478)
            }
        },
        n = {};

    function a(e) {
        var t = n[e];
        if (void 0 !== t) return t.exports;
        var r = n[e] = {
                exports: {}
            },
            s = !0;
        try {
            i[e](r, r.exports, a), s = !1
        } finally {
            s && delete n[e]
        }
        return r.exports
    }
    a.ab = "/ROOT/node_modules/next/dist/compiled/native-url/";
    var s = {};
    ! function() {
        var e, t = (e = a(452)) && "object" == typeof e && "default" in e ? e.default : e,
            r = /https?|ftp|gopher|file/;

        function i(e) {
            "string" == typeof e && (e = y(e));
            var i, n, a, s, o, c, l, u, d, h = (n = (i = e).auth, a = i.hostname, s = i.protocol || "", o = i.pathname || "", c = i.hash || "", l = i.query || "", u = !1, n = n ? encodeURIComponent(n).replace(/%3A/i, ":") + "@" : "", i.host ? u = n + i.host : a && (u = n + (~a.indexOf(":") ? "[" + a + "]" : a), i.port && (u += ":" + i.port)), l && "object" == typeof l && (l = t.encode(l)), d = i.search || l && "?" + l || "", s && ":" !== s.substr(-1) && (s += ":"), i.slashes || (!s || r.test(s)) && !1 !== u ? (u = "//" + (u || ""), o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""), c && "#" !== c[0] && (c = "#" + c), d && "?" !== d[0] && (d = "?" + d), {
                protocol: s,
                host: u,
                pathname: o = o.replace(/[?#]/g, encodeURIComponent),
                search: d = d.replace("#", "%23"),
                hash: c
            });
            return "" + h.protocol + h.host + h.pathname + h.search + h.hash
        }
        var n = "http://",
            o = n + "w.w",
            c = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
            l = /https?|ftp|gopher|file/;

        function u(e, t) {
            var r = "string" == typeof e ? y(e) : e;
            e = "object" == typeof e ? i(e) : e;
            var a = y(t),
                s = "";
            r.protocol && !r.slashes && (s = r.protocol, e = e.replace(r.protocol, ""), s += "/" === t[0] || "/" === e[0] ? "/" : ""), s && a.protocol && (s = "", a.slashes || (s = a.protocol, t = t.replace(a.protocol, "")));
            var u = e.match(c);
            u && !a.protocol && (e = e.substr((s = u[1] + (u[2] || "")).length), /^\/\/[^/]/.test(t) && (s = s.slice(0, -1)));
            var d = new URL(e, o + "/"),
                h = new URL(t, d).toString().replace(o, ""),
                p = a.protocol || r.protocol;
            return p += r.slashes || a.slashes ? "//" : "", !s && p ? h = h.replace(n, p) : s && (h = h.replace(n, "")), l.test(h) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== h.slice(-1) || (h = h.slice(0, -1)), s && (h = s + ("/" === h[0] ? h.substr(1) : h)), h
        }

        function d() {}
        d.prototype.parse = y, d.prototype.format = i, d.prototype.resolve = u, d.prototype.resolveObject = u;
        var h = /^https?|ftp|gopher|file/,
            p = /^(.*?)([#?].*)/,
            f = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
            x = /^([a-z0-9.+-]*:)?\/\/\/*/i,
            m = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;

        function y(e, r, n) {
            if (void 0 === r && (r = !1), void 0 === n && (n = !1), e && "object" == typeof e && e instanceof d) return e;
            var a = (e = e.trim()).match(p);
            e = a ? a[1].replace(/\\/g, "/") + a[2] : e.replace(/\\/g, "/"), m.test(e) && "/" !== e.slice(-1) && (e += "/");
            var s = !/(^javascript)/.test(e) && e.match(f),
                c = x.test(e),
                l = "";
            s && (h.test(s[1]) || (l = s[1].toLowerCase(), e = "" + s[2] + s[3]), s[2] || (c = !1, h.test(s[1]) ? (l = s[1], e = "" + s[3]) : e = "//" + s[3]), 3 !== s[2].length && 1 !== s[2].length || (l = s[1], e = "/" + s[3]));
            var u, y = (a ? a[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
                k = y && y[1],
                g = new d,
                v = "",
                b = "";
            try {
                u = new URL(e)
            } catch (t) {
                v = t, l || n || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || (b = "/", e = e.substr(1));
                try {
                    u = new URL(e, o)
                } catch (e) {
                    return g.protocol = l, g.href = l, g
                }
            }
            g.slashes = c && !b, g.host = "w.w" === u.host ? "" : u.host, g.hostname = "w.w" === u.hostname ? "" : u.hostname.replace(/(\[|\])/g, ""), g.protocol = v ? l || null : u.protocol, g.search = u.search.replace(/\\/g, "%5C"), g.hash = u.hash.replace(/\\/g, "%5C");
            var E = e.split("#");
            !g.search && ~E[0].indexOf("?") && (g.search = "?"), g.hash || "" !== E[1] || (g.hash = "#"), g.query = r ? t.decode(u.search.substr(1)) : g.search.substr(1), g.pathname = b + (s ? u.pathname.replace(/['^|`]/g, function(e) {
                return "%" + e.charCodeAt().toString(16).toUpperCase()
            }).replace(/((?:%[0-9A-F]{2})+)/g, function(e, t) {
                try {
                    return decodeURIComponent(t).split("").map(function(e) {
                        var t = e.charCodeAt();
                        return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase()
                    }).join("")
                } catch (e) {
                    return t
                }
            }) : u.pathname), "about:" === g.protocol && "blank" === g.pathname && (g.protocol = "", g.pathname = ""), v && "/" !== e[0] && (g.pathname = g.pathname.substr(1)), l && !h.test(l) && "/" !== e.slice(-1) && "/" === g.pathname && (g.pathname = ""), g.path = g.pathname + g.search, g.auth = [u.username, u.password].map(decodeURIComponent).filter(Boolean).join(":"), g.port = u.port, k && !g.host.endsWith(k) && (g.host += k, g.port = k.slice(1)), g.href = b ? "" + g.pathname + g.search + g.hash : i(g);
            var _ = /^(file)/.test(g.href) ? ["host", "hostname"] : [];
            return Object.keys(g).forEach(function(e) {
                ~_.indexOf(e) || (g[e] = g[e] || null)
            }), g
        }
        s.parse = y, s.format = i, s.resolve = u, s.resolveObject = function(e, t) {
            return y(u(e, t))
        }, s.Url = d
    }(), t.exports = s
}, 16058, 246306, 328037, 241186, 343736, e => {
    "use strict";
    let t, r, i, n, a, s, o, c, l, u, d, h, p, f, x, m, y, k, g, v, b, E, _, S, A, D, w, T, O, B;
    e.i(587593);
    class R {
        cla;
        ins;
        p1;
        p2;
        data;
        constructor(e, t, r, i, n) {
            this.cla = e, this.ins = t, this.p1 = r, this.p2 = i, this.data = n ? ? new Uint8Array
        }
        getRawApdu() {
            let e = Uint8Array.from([this.cla, this.ins, this.p1, this.p2, this.data.length]),
                t = new Uint8Array(e.length + this.data.length);
            return t.set(e, 0), this.data.length > 0 && t.set(this.data, e.length), t
        }
    }
    let I = e => {
        if (e.startsWith("0x") && (e = e.slice(2)), 0 === e.length) return new Uint8Array;
        if (e.length % 2 != 0 && (e = "0" + e), !1 === /^[0-9a-fA-F]*$/.test(e)) return null;
        let t = e.match(/.{1,2}/g) ? .map(e => parseInt(e, 16));
        return !t || t.some(isNaN) ? null : new Uint8Array(t)
    };
    class C {
        _tag = "ValueOverflow";
        originalError;
        message;
        constructor(e, t = F) {
            this.message = `Value overflow for ${e}, max is ${t}`
        }
    }
    class N {
        _tag = "DataOverflow";
        message;
        originalError;
        constructor(e, t = 0) {
            this.message = 0 === t ? `this.data is already full (value: ${e})` : `this.data will overflow with "${e}", remaining bytes: ${t}`
        }
    }
    class P {
        _tag = "HexaString";
        message;
        originalError;
        constructor(e) {
            this.message = `Invalid encoded hexa string or length is null: ${e}`
        }
    }
    class j {
        constructor(e = 0xffffffff) {
            this.maxPayloadSize = e
        }
        data = new Uint8Array;
        errors = [];
        build = () => this.data;
        tryBuild = () => this.hasErrors() ? void 0 : this.data;
        add8BitUIntToData = e => this.addNumberToData(e, 8 n, !1, !1);
        add16BitUIntToData = (e, t = !0) => this.addNumberToData(e, 16 n, !1, t);
        add32BitUIntToData = (e, t = !0) => this.addNumberToData(e, 32 n, !1, t);
        add64BitUIntToData = (e, t = !0) => this.addNumberToData(e, 64 n, !1, t);
        add128BitUIntToData = (e, t = !0) => this.addNumberToData(e, 128 n, !1, t);
        add256BitUIntToData = (e, t = !0) => this.addNumberToData(e, 256 n, !1, t);
        add16BitIntToData = (e, t = !0) => this.addNumberToData(e, 16 n, !0, t);
        add32BitIntToData = (e, t = !0) => this.addNumberToData(e, 32 n, !0, t);
        add64BitIntToData = (e, t = !0) => this.addNumberToData(e, 64 n, !0, t);
        add128BitIntToData = (e, t = !0) => this.addNumberToData(e, 128 n, !0, t);
        add256BitIntToData = (e, t = !0) => this.addNumberToData(e, 256 n, !0, t);
        addBufferToData = e => (this.hasEnoughLengthRemaining(e) ? this.data = Uint8Array.from([...this.data, ...e]) : this.errors.push(new N(e.toString())), this);
        addHexaStringToData = e => {
            let t = I(e);
            return null === t || 0 === t.length ? this.errors.push(new P(e)) : this.addBufferToData(t), this
        };
        addAsciiStringToData = e => {
            let t = new TextEncoder().encode(e);
            return this.addBufferToData(t), this
        };
        encodeInLVFromHexa = e => {
            let t = I(e);
            return null === t || 0 === t.length ? this.errors.push(new P(e)) : this.hasEnoughLengthRemaining(t, !0) ? (this.add8BitUIntToData(t.length), this.addBufferToData(t)) : this.errors.push(new N(e)), this
        };
        encodeInLVFromBuffer = e => (this.hasEnoughLengthRemaining(e, !0) ? (this.add8BitUIntToData(e.length), this.addBufferToData(e)) : this.errors.push(new N(e.toString())), this);
        encodeInLVFromAscii = e => (this.hasEnoughLengthRemaining(e, !0) ? (this.add8BitUIntToData(e.length), this.addAsciiStringToData(e)) : this.errors.push(new N(e)), this);
        getAvailablePayloadLength = () => this.maxPayloadSize - this.data.length;
        getErrors = () => this.errors;
        hasErrors = () => 0 !== this.errors.length;
        hasEnoughLengthRemaining = (e, t = !1) => this.data.length + e.length + +!!t <= this.maxPayloadSize;
        addNumberToData(e, t, r, i) {
            let n = this.checkBoundsAndConvert(e, t, r);
            if (void 0 === n) return this;
            let a = Number(t) / 8,
                s = new Uint8Array(a);
            if (i)
                for (let e = a - 1; e >= 0; e--) s[e] = Number(255 n & n), n >>= 8 n;
            else
                for (let e = 0; e < a; e++) s[e] = Number(255 n & n), n >>= 8 n;
            return this.addBufferToData(s)
        }
        checkBoundsAndConvert(e, t, r) {
            if ("number" == typeof e) {
                if (!Number.isInteger(e) || e > Number.MAX_SAFE_INTEGER) return void this.errors.push(new C(e.toString()));
                e = BigInt(e)
            }
            if (r) {
                let r = 1 n << t - 1 n;
                if (e >= r || e < -r) return void this.errors.push(new C(e.toString(), r - 1 n));
                e < 0 n && (e = (~(e = -e) & (1 n << t) - 1 n) + 1 n)
            } else {
                let r = 1 n << t;
                if (e < 0 || e >= r) return void this.errors.push(new C(e.toString(), r - 1 n))
            }
            return e
        }
    }
    let F = 255;
    class V {
        _ins;
        _cla;
        _p1;
        p2;
        data = new j(F);
        constructor({
            ins: e,
            cla: t,
            p1: r,
            p2: i
        }) {
            this._cla = 255 & t, this._ins = 255 & e, this._p1 = 255 & r, this.p2 = 255 & i
        }
        build = () => new R(this._cla, this._ins, this._p1, this.p2, this.data.build());
        add8BitUIntToData = e => (this.data.add8BitUIntToData(e), this);
        add16BitUIntToData = e => (this.data.add16BitUIntToData(e), this);
        add32BitUIntToData = e => (this.data.add32BitUIntToData(e), this);
        addBufferToData = e => (this.data.addBufferToData(e), this);
        addHexaStringToData = e => (this.data.addHexaStringToData(e), this);
        addAsciiStringToData = e => (this.data.addAsciiStringToData(e), this);
        encodeInLVFromHexa = e => (this.data.encodeInLVFromHexa(e), this);
        encodeInLVFromBuffer = e => (this.data.encodeInLVFromBuffer(e), this);
        encodeInLVFromAscii = e => (this.data.encodeInLVFromAscii(e), this);
        getAvailablePayloadLength = () => this.data.getAvailablePayloadLength();
        getErrors = () => this.data.getErrors()
    }
    class G {
        constructor(e) {
            this.buffer = e
        }
        index = 0;
        testMinimalLength(e) {
            return e <= this.buffer.length - this.index
        }
        extract8BitUInt() {
            if (!this.outOfRange(1)) return this.buffer[this.index++]
        }
        extract16BitUInt(e = !0) {
            let t = this.extractNumber(16 n, !1, e);
            return void 0 === t ? void 0 : Number(t)
        }
        extract16BitInt(e = !0) {
            let t = this.extractNumber(16 n, !0, e);
            return void 0 === t ? void 0 : Number(t)
        }
        extract32BitUInt(e = !0) {
            let t = this.extractNumber(32 n, !1, e);
            return void 0 === t ? void 0 : Number(t)
        }
        extract32BitInt(e = !0) {
            let t = this.extractNumber(32 n, !0, e);
            return void 0 === t ? void 0 : Number(t)
        }
        extract64BitUInt(e = !0) {
            return this.extractNumber(64 n, !1, e)
        }
        extract64BitInt(e = !0) {
            return this.extractNumber(64 n, !0, e)
        }
        extract128BitUInt(e = !0) {
            return this.extractNumber(128 n, !1, e)
        }
        extract128BitInt(e = !0) {
            return this.extractNumber(128 n, !0, e)
        }
        extract256BitUInt(e = !0) {
            return this.extractNumber(256 n, !1, e)
        }
        extract256BitInt(e = !0) {
            return this.extractNumber(256 n, !0, e)
        }
        extractFieldByLength(e) {
            if (this.outOfRange(e)) return;
            if (0 === e) return new Uint8Array;
            let t = this.buffer.slice(this.index, this.index + e);
            return this.index += e, t
        }
        extractFieldLVEncoded() {
            let e = this.extract8BitUInt();
            if (void 0 === e) return;
            if (0 === e) return new Uint8Array;
            let t = this.extractFieldByLength(e);
            return void 0 === t && this.index--, t
        }
        extractFieldTLVEncoded() {
            if (this.outOfRange(2)) return;
            let e = this.extract8BitUInt(),
                t = this.extractFieldLVEncoded();
            return void 0 === e || void 0 === t ? void this.index-- : {
                tag: e,
                value: t
            }
        }
        encodeToHexaString(e, t = !1) {
            if (void 0 === e || 0 === e.length) return "";
            let r = `0x${Array.from(e,e=>e.toString(16).padStart(2,"0")).join("")}`;
            return t ? r : r.slice(2)
        }
        encodeToString(e) {
            let t = "",
                r = 0;
            if (!e) return t;
            for (; r <= e.length;) {
                let i = e[r];
                i && (t += String.fromCharCode(i)), r++
            }
            return t
        }
        getCurrentIndex() {
            return this.index
        }
        resetIndex() {
            this.index = 0
        }
        getUnparsedRemainingLength() {
            return this.buffer.length - this.index
        }
        outOfRange(e) {
            return this.index + e > this.buffer.length
        }
        extractNumber(e, t, r) {
            let i = Number(e) / 8;
            if (this.outOfRange(i)) return;
            let n = 0 n;
            if (r)
                for (let e = 0; e < i; e++) n = n << 8 n | BigInt(this.buffer[e + this.index]);
            else
                for (let e = i - 1; e >= 0; e--) n = n << 8 n | BigInt(this.buffer[e + this.index]);
            if (t) {
                let t = 1 n << e - 1 n;
                n & t && (n -= t << 1 n)
            }
            return this.index += i, n
        }
    }
    class L {
        parser;
        constructor(e) {
            this.parser = new G(e.data)
        }
        testMinimalLength = e => this.parser.testMinimalLength(e);
        extract8BitUInt = () => this.parser.extract8BitUInt();
        extract16BitUInt = () => this.parser.extract16BitUInt();
        extract32BitUInt = () => this.parser.extract32BitUInt();
        extractFieldByLength = e => this.parser.extractFieldByLength(e);
        extractFieldLVEncoded = () => this.parser.extractFieldLVEncoded();
        extractFieldTLVEncoded = () => this.parser.extractFieldTLVEncoded();
        encodeToHexaString(e, t = !1) {
            return t ? this.parser.encodeToHexaString(e, !0) : this.parser.encodeToHexaString(e, !1)
        }
        encodeToString = e => this.parser.encodeToString(e);
        getUnparsedRemainingLength = () => this.parser.getUnparsedRemainingLength()
    }
    class M {
        _tag = "InvalidResponseFormatError";
        originalError;
        constructor(e) {
            this.originalError = Error(e ? ? "Invalid response format.")
        }
    }
    var U, $, q, z, H, W, K, J, X, Y, Q, Z, ee, et, er, ei, en, ea, es, eo = ((i = eo || {}).Error = "ERROR", i.Success = "SUCCESS", i);

    function ec({
        data: e,
        error: t
    }) {
        return t ? {
            status: "ERROR",
            error: t
        } : {
            status: "SUCCESS",
            data: e
        }
    }
    class el {
        static isValidStatusCode(e) {
            return 2 === e.length
        }
        static isSuccessResponse({
            statusCode: e
        }) {
            return !!el.isValidStatusCode(e) && 144 === e[0] && 0 === e[1]
        }
        static isLockedDeviceResponse({
            statusCode: e
        }) {
            return !!el.isValidStatusCode(e) && 85 === e[0] && 21 === e[1]
        }
    }
    class eu {
        _tag;
        originalError;
        errorCode;
        message;
        constructor({
            tag: e,
            errorCode: t,
            originalError: r,
            message: i
        }) {
            this._tag = e, this.originalError = r, this.errorCode = t, this.message = i ? ? "An error occured during device exchange."
        }
    }
    class ed {
        _tag = "UnknownDeviceExchangeError";
        originalError;
        message;
        constructor(e) {
            this.originalError = e, this.message = "Unexpected device exchange error happened."
        }
    }
    class eh {
        _tag = "DeviceBusyError";
        originalError;
        constructor(e) {
            this.originalError = e ? ? Error("Device is busy, please try again later")
        }
    }
    class ep extends eu {
        constructor(e) {
            super({
                tag: "GlobalCommandError",
                ...e
            })
        }
    }
    let ef = {
        5515: {
            message: "Device is locked.",
            tag: "DeviceLockedError"
        },
        5501: {
            message: "Action refused on device.",
            tag: "ActionRefusedError"
        },
        5502: {
            message: "Pin is not set",
            tag: "PinNotSetError"
        },
        5223: {
            message: "Device internal error",
            tag: "DeviceInternalError"
        }
    };
    class ex {
        static handle(e) {
            let t = new L(e).encodeToHexaString(e.statusCode);
            return Object.keys(ef).includes(t) ? new ep({ ...ef[t],
                errorCode: t
            }) : new ed({
                message: "UnknownError",
                errorCode: t
            })
        }
    }
    class em {
        args = void 0;
        getApdu() {
            return new V({
                cla: 176,
                ins: 1,
                p1: 0,
                p2: 0
            }).build()
        }
        parseResponse(e) {
            if (!el.isSuccessResponse(e)) return ec({
                error: ex.handle(e)
            });
            let t = new L(e);
            if (1 !== t.extract8BitUInt()) return ec({
                error: new M("getAppAndVersion: format not supported")
            });
            let r = t.encodeToString(t.extractFieldLVEncoded()),
                i = t.encodeToString(t.extractFieldLVEncoded());
            return 0 === t.getUnparsedRemainingLength() ? ec({
                data: {
                    name: r,
                    version: i
                }
            }) : ec({
                data: {
                    name: r,
                    version: i,
                    flags: t.extractFieldLVEncoded()
                }
            })
        }
    }
    var ey = ((n = ey || {})[n.BATTERY_PERCENTAGE = 0] = "BATTERY_PERCENTAGE", n[n.BATTERY_VOLTAGE = 1] = "BATTERY_VOLTAGE", n[n.BATTERY_TEMPERATURE = 2] = "BATTERY_TEMPERATURE", n[n.BATTERY_CURRENT = 3] = "BATTERY_CURRENT", n[n.BATTERY_FLAGS = 4] = "BATTERY_FLAGS", n),
        ek = ((a = ek || {})[a.NONE = 0] = "NONE", a[a.USB = 1] = "USB", a[a.QI = 2] = "QI", a),
        eg = ((s = eg || {}).NANO_S = "nanoS", s.NANO_SP = "nanoSP", s.NANO_X = "nanoX", s.STAX = "stax", s.FLEX = "flex", s);
    class ev {
        id;
        model;
        name;
        constructor({
            id: e,
            model: t,
            name: r
        }) {
            this.id = e, this.model = t, this.name = r
        }
    }
    e.s(["DeviceModel", 0, ev, "DeviceModelId", 0, eg, "LEDGER_VENDOR_ID", 0, 11415], 246306);
    class eb {
        args = void 0;
        getApdu() {
            return new V({
                cla: 224,
                ins: 1,
                p1: 0,
                p2: 0
            }).build()
        }
        parseResponse(e, t) {
            if (!el.isSuccessResponse(e)) return ec({
                error: ex.handle(e)
            });
            let r = new L(e),
                i = parseInt(r.encodeToHexaString(r.extractFieldByLength(4)), 16),
                n = r.encodeToString(r.extractFieldLVEncoded()),
                a = parseInt(r.encodeToHexaString(r.extractFieldLVEncoded()).toString(), 16),
                s = r.encodeToString(r.extractFieldLVEncoded()),
                o = r.encodeToString(r.extractFieldLVEncoded()),
                c = "00";
            return t === eg.NANO_X && (c = r.encodeToHexaString(r.extractFieldLVEncoded())), ec({
                data: {
                    targetId: i,
                    seVersion: n,
                    seFlags: a,
                    mcuSephVersion: s,
                    mcuBootloaderVersion: o,
                    hwVersion: c,
                    langId: r.encodeToHexaString(r.extractFieldLVEncoded()),
                    recoverState: r.encodeToHexaString(r.extractFieldLVEncoded()) || "0"
                }
            })
        }
    }
    var eE = ((o = eE || {}).LOCKED = "LOCKED", o.BUSY = "BUSY", o.CONNECTED = "CONNECTED", o.NOT_CONNECTED = "NOT CONNECTED", o),
        e_ = ((c = e_ || {}).NotStarted = "not-started", c.Pending = "pending", c.Stopped = "stopped", c.Completed = "completed", c.Error = "error", c),
        eS = ((l = eS || {}).None = "none", l.UnlockDevice = "unlock-device", l.AllowSecureConnection = "allow-secure-connection", l.ConfirmOpenApp = "confirm-open-app", l.SignTransaction = "sign-transaction", l.SignTypedData = "sign-typed-data", l.AllowListApps = "allow-list-apps", l.VerifyAddress = "verify-address", l.SignPersonalMessage = "sign-personal-message", l);
    let eA = { of: e => eT(e),
        empty: () => eO,
        zero: () => eO,
        fromNullable: e => null == e ? eO : eT(e),
        fromFalsy: e => e ? eT(e) : eO,
        fromPredicate(e, t) {
            return 1 == arguments.length ? t => eA.fromPredicate(e, t) : e(t) ? eT(t) : eO
        },
        mapMaybe(e, t) {
            return 1 == arguments.length ? t => eA.mapMaybe(e, t) : eA.catMaybes(t.map(e))
        },
        catMaybes(e) {
            let t = [];
            for (let r of e) r.isJust() && t.push(r.extract());
            return t
        },
        encase(e) {
            try {
                return eT(e())
            } catch {
                return eO
            }
        },
        isMaybe: e => e instanceof eD || e instanceof ew,
        sequence(e) {
            let t = [];
            for (let r of e)
                if (!r.isJust()) return eO;
                else t.push(r.extract());
            return eT(t)
        },
        "fantasy-land/of" (e) {
            return this.of(e)
        },
        "fantasy-land/empty" () {
            return this.empty()
        },
        "fantasy-land/zero" () {
            return this.zero()
        }
    };
    class eD {
        constructor(e) {
            this.__value = e
        }
        isJust() {
            return !0
        }
        isNothing() {
            return !1
        }
        inspect() {
            return `Just(${this.__value})`
        }[Symbol.for("nodejs.util.inspect.custom")](e, t, r) {
            return `Just(${r(this.__value,t)})`
        }
        toString() {
            return this.inspect()
        }
        toJSON() {
            let e = this.__value;
            return e instanceof Date ? e.toJSON() : e
        }
        equals(e) {
            return this.extract() === e.extract()
        }
        map(e) {
            return eT(e(this.__value))
        }
        ap(e) {
            return e.isJust() ? this.map(e.extract()) : eO
        }
        alt(e) {
            return this
        }
        altLazy(e) {
            return this
        }
        chain(e) {
            return e(this.__value)
        }
        chainNullable(e) {
            return eA.fromNullable(e(this.__value))
        }
        join() {
            return this.__value
        }
        reduce(e, t) {
            return e(t, this.__value)
        }
        extend(e) {
            return eT(e(this))
        }
        unsafeCoerce() {
            return this.__value
        }
        caseOf(e) {
            return "_" in e ? e._() : e.Just(this.__value)
        }
        orDefault(e) {
            return this.__value
        }
        orDefaultLazy(e) {
            return this.__value
        }
        toList() {
            return [this.__value]
        }
        mapOrDefault(e, t) {
            return e(this.__value)
        }
        extract() {
            return this.__value
        }
        extractNullable() {
            return this.__value
        }
        toEither(e) {
            return eN(this.__value)
        }
        ifJust(e) {
            return e(this.__value), this
        }
        ifNothing(e) {
            return this
        }
        filter(e) {
            return e(this.__value) ? eT(this.__value) : eO
        }
    }
    eD.prototype["fantasy-land/equals"] = eD.prototype.equals, eD.prototype["fantasy-land/map"] = eD.prototype.map, eD.prototype["fantasy-land/ap"] = eD.prototype.ap, eD.prototype["fantasy-land/alt"] = eD.prototype.alt, eD.prototype["fantasy-land/chain"] = eD.prototype.chain, eD.prototype["fantasy-land/reduce"] = eD.prototype.reduce, eD.prototype["fantasy-land/extend"] = eD.prototype.extend, eD.prototype["fantasy-land/filter"] = eD.prototype.filter, eD.prototype.constructor = eA;
    class ew {
        isJust() {
            return !1
        }
        isNothing() {
            return !0
        }
        inspect() {
            return "Nothing"
        }[Symbol.for("nodejs.util.inspect.custom")]() {
            return "Nothing"
        }
        toString() {
            return this.inspect()
        }
        toJSON() {
            return this.__value
        }
        equals(e) {
            return this.extract() === e.extract()
        }
        map(e) {
            return eO
        }
        ap(e) {
            return eO
        }
        alt(e) {
            return e
        }
        altLazy(e) {
            return e()
        }
        chain(e) {
            return eO
        }
        chainNullable(e) {
            return eO
        }
        join() {
            return eO
        }
        reduce(e, t) {
            return t
        }
        extend(e) {
            return eO
        }
        unsafeCoerce() {
            throw Error("Maybe#unsafeCoerce was ran on a Nothing")
        }
        caseOf(e) {
            return "_" in e ? e._() : e.Nothing()
        }
        orDefault(e) {
            return e
        }
        orDefaultLazy(e) {
            return e()
        }
        toList() {
            return []
        }
        mapOrDefault(e, t) {
            return t
        }
        extract() {}
        extractNullable() {
            return null
        }
        toEither(e) {
            return eC(e)
        }
        ifJust(e) {
            return this
        }
        ifNothing(e) {
            return e(), this
        }
        filter(e) {
            return eO
        }
    }
    ew.prototype["fantasy-land/equals"] = ew.prototype.equals, ew.prototype["fantasy-land/map"] = ew.prototype.map, ew.prototype["fantasy-land/ap"] = ew.prototype.ap, ew.prototype["fantasy-land/alt"] = ew.prototype.alt, ew.prototype["fantasy-land/chain"] = ew.prototype.chain, ew.prototype["fantasy-land/reduce"] = ew.prototype.reduce, ew.prototype["fantasy-land/extend"] = ew.prototype.extend, ew.prototype["fantasy-land/filter"] = ew.prototype.filter, ew.prototype.constructor = eA;
    let eT = e => new eD(e),
        eO = new ew,
        eB = { of: e => eN(e),
            lefts(e) {
                let t = [];
                for (let r of e) r.isLeft() && t.push(r.extract());
                return t
            },
            rights(e) {
                let t = [];
                for (let r of e) r.isRight() && t.push(r.extract());
                return t
            },
            encase(e) {
                try {
                    return eN(e())
                } catch (e) {
                    return eC(e)
                }
            },
            sequence(e) {
                let t = [];
                for (let r of e) {
                    if (r.isLeft()) return r;
                    t.push(r.extract())
                }
                return eN(t)
            },
            isEither: e => e instanceof eI || e instanceof eR,
            "fantasy-land/of": e => eB.of(e)
        };
    class eR {
        constructor(e) {
            this.__value = e, this._ = "R"
        }
        isLeft() {
            return !1
        }
        isRight() {
            return !0
        }
        toJSON() {
            return this.__value
        }
        inspect() {
            return `Right(${this.__value})`
        }[Symbol.for("nodejs.util.inspect.custom")](e, t, r) {
            return `Right(${r(this.__value,t)})`
        }
        toString() {
            return this.inspect()
        }
        bimap(e, t) {
            return eN(t(this.__value))
        }
        map(e) {
            return eN(e(this.__value))
        }
        mapLeft(e) {
            return this
        }
        ap(e) {
            return e.isRight() ? this.map(e.extract()) : e
        }
        equals(e) {
            return !!e.isRight() && this.__value === e.extract()
        }
        chain(e) {
            return e(this.__value)
        }
        chainLeft(e) {
            return this
        }
        join() {
            return this.__value
        }
        alt(e) {
            return this
        }
        altLazy(e) {
            return this
        }
        reduce(e, t) {
            return e(t, this.__value)
        }
        extend(e) {
            return eN(e(this))
        }
        unsafeCoerce() {
            return this.__value
        }
        caseOf(e) {
            return "_" in e ? e._() : e.Right(this.__value)
        }
        leftOrDefault(e) {
            return e
        }
        orDefault(e) {
            return this.__value
        }
        orDefaultLazy(e) {
            return this.__value
        }
        leftOrDefaultLazy(e) {
            return e()
        }
        ifLeft(e) {
            return this
        }
        ifRight(e) {
            return e(this.__value), this
        }
        toMaybe() {
            return eT(this.__value)
        }
        leftToMaybe() {
            return eO
        }
        extract() {
            return this.__value
        }
        swap() {
            return eC(this.__value)
        }
    }
    eR.prototype["fantasy-land/bimap"] = eR.prototype.bimap, eR.prototype["fantasy-land/map"] = eR.prototype.map, eR.prototype["fantasy-land/ap"] = eR.prototype.ap, eR.prototype["fantasy-land/equals"] = eR.prototype.equals, eR.prototype["fantasy-land/chain"] = eR.prototype.chain, eR.prototype["fantasy-land/alt"] = eR.prototype.alt, eR.prototype["fantasy-land/reduce"] = eR.prototype.reduce, eR.prototype["fantasy-land/extend"] = eR.prototype.extend, eR.prototype.constructor = eB;
    class eI {
        constructor(e) {
            this.__value = e, this._ = "L"
        }
        isLeft() {
            return !0
        }
        isRight() {
            return !1
        }
        toJSON() {
            return this.__value
        }
        inspect() {
            return `Left(${JSON.stringify(this.__value)})`
        }[Symbol.for("nodejs.util.inspect.custom")](e, t, r) {
            return `Left(${r(this.__value,t)})`
        }
        toString() {
            return this.inspect()
        }
        bimap(e, t) {
            return eC(e(this.__value))
        }
        map(e) {
            return this
        }
        mapLeft(e) {
            return eC(e(this.__value))
        }
        ap(e) {
            return e.isLeft() ? e : this
        }
        equals(e) {
            return !!e.isLeft() && e.extract() === this.__value
        }
        chain(e) {
            return this
        }
        chainLeft(e) {
            return e(this.__value)
        }
        join() {
            return this
        }
        alt(e) {
            return e
        }
        altLazy(e) {
            return e()
        }
        reduce(e, t) {
            return t
        }
        extend(e) {
            return this
        }
        unsafeCoerce() {
            if (this.__value instanceof Error) throw this.__value;
            throw Error("Either#unsafeCoerce was ran on a Left")
        }
        caseOf(e) {
            return "_" in e ? e._() : e.Left(this.__value)
        }
        leftOrDefault(e) {
            return this.__value
        }
        orDefault(e) {
            return e
        }
        orDefaultLazy(e) {
            return e()
        }
        leftOrDefaultLazy(e) {
            return this.__value
        }
        ifLeft(e) {
            return e(this.__value), this
        }
        ifRight(e) {
            return this
        }
        toMaybe() {
            return eO
        }
        leftToMaybe() {
            return eT(this.__value)
        }
        extract() {
            return this.__value
        }
        swap() {
            return eN(this.__value)
        }
    }
    eI.prototype["fantasy-land/bimap"] = eI.prototype.bimap, eI.prototype["fantasy-land/map"] = eI.prototype.map, eI.prototype["fantasy-land/ap"] = eI.prototype.ap, eI.prototype["fantasy-land/equals"] = eI.prototype.equals, eI.prototype["fantasy-land/chain"] = eI.prototype.chain, eI.prototype["fantasy-land/alt"] = eI.prototype.alt, eI.prototype["fantasy-land/reduce"] = eI.prototype.reduce, eI.prototype["fantasy-land/extend"] = eI.prototype.extend, eI.prototype.constructor = eB;
    let eC = e => new eI(e),
        eN = e => new eR(e),
        eP = e => e,
        ej = Object.assign(e => e, {
            fromArray: e => ej.isNonEmpty(e) ? eT(e) : eO,
            unsafeCoerce: e => {
                if (ej.isNonEmpty(e)) return e;
                throw Error("NonEmptyList#unsafeCoerce was ran on an empty array")
            },
            fromTuple: e => ej(e.toArray()),
            head: e => e[0],
            last: e => e[e.length - 1],
            isNonEmpty: e => e.length > 0,
            tail: e => e.slice(1)
        }),
        eF = (e, t) => "bigint" == typeof t ? t.toString() : t,
        eV = (e, t) => {
            let r = "";
            switch (typeof t) {
                case "undefined":
                    r = "undefined";
                    break;
                case "object":
                    r = null === t ? "null" : Array.isArray(t) ? "an array with value " + JSON.stringify(t, eF) : "an object with value " + JSON.stringify(t, eF);
                    break;
                case "boolean":
                    r = "a boolean";
                    break;
                case "symbol":
                    r = "a symbol";
                    break;
                case "function":
                    r = "a function";
                    break;
                case "bigint":
                    r = `a bigint with value ${t.toString()}`
            }
            return r = r || `a ${typeof t} with value ${JSON.stringify(t,eF)}`, `Expected ${e}, but received ${r}`
        },
        eG = e => ((e => {
            if (Array.isArray(e.oneOf))
                for (let t = 0; t < e.oneOf.length; t++) {
                    let r = e.oneOf[t];
                    if ("object" == typeof r && r.oneOf) return e.oneOf.splice(t, 1), e.oneOf.push(...r.oneOf), eG(e)
                }
        })(e), 1 === Object.keys(e).length && e.oneOf ? .length === 1 && "object" == typeof e.oneOf[0] && (Object.assign(e, e.oneOf[0]), delete e.oneOf), e),
        eL = {
            interface(e) {
                let t = Object.keys(e),
                    r = r => {
                        if (!("object" == typeof r && null !== r && !Array.isArray(r))) return eC(eV("an object", r));
                        let i = {};
                        for (let n of t) {
                            if (!Object.prototype.hasOwnProperty.call(r, n) && !e[n]._isOptional) return eC(`Problem with property "${n}": it does not exist in received object ${JSON.stringify(r,eF)}`);
                            let t = e[n].decode(r[n]);
                            if (t.isLeft()) return eC(`Problem with the value of property "${n}": ${t.extract()}`);
                            let a = t.extract();
                            void 0 !== a && (i[n] = a)
                        }
                        return eN(i)
                    };
                return {
                    decode: r,
                    encode: r => {
                        let i = {};
                        for (let n of t) i[n] = e[n].encode(r[n]);
                        return i
                    },
                    unsafeDecode: e => r(e).mapLeft(Error).unsafeCoerce(),
                    schema: () => t.reduce((t, r) => (e[r]._isOptional || t.required.push(r), t.properties[r] = eG(e[r].schema()), t), {
                        type: "object",
                        properties: {},
                        required: []
                    })
                }
            },
            custom: ({
                decode: e,
                encode: t,
                schema: r
            }) => ({
                decode: e,
                encode: t,
                unsafeDecode: t => e(t).mapLeft(Error).unsafeCoerce(),
                schema: r ? ? (() => ({}))
            })
        },
        eM = eL.custom({
            decode: e => "string" == typeof e ? eN(e) : eC(eV("a string", e)),
            encode: eP,
            schema: () => ({
                type: "string"
            })
        }),
        eU = eL.custom({
            decode: e => "number" == typeof e ? eN(e) : eC(eV("a number", e)),
            encode: eP,
            schema: () => ({
                type: "number"
            })
        });
    eL.custom({
        decode: e => null === e ? eN(e) : eC(eV("a null", e)),
        encode: eP,
        schema: () => ({
            type: "null"
        })
    }), eL.custom({
        decode: e => void 0 === e ? eN(e) : eC(eV("an undefined", e)),
        encode: eP
    }), eL.custom({
        decode: e => "boolean" == typeof e ? eN(e) : eC(eV("a boolean", e)),
        encode: eP,
        schema: () => ({
            type: "boolean"
        })
    }), eL.custom({
        decode: eN,
        encode: eP,
        schema: () => ({})
    }), eL.custom({
        decode: e => eM.decode(e).chain(t => isFinite(+t) ? eN(t) : eC(eV("a number", e))),
        encode: eP,
        schema: eU.schema
    }), eL.custom({
        decode: e => eM.decode(e).mapLeft(e => `Problem with date string: ${e}`).chain(e => Number.isNaN(Date.parse(e)) ? eC("Expected a valid date string, but received a string that cannot be parsed") : eN(new Date(e))),
        encode: e => e.toISOString(),
        schema: () => ({
            type: "string",
            format: "date-time"
        })
    });
    class e$ {
        constructor(e, t) {
            this.first = e, this.second = t, this.length = 2, this[0] = e, this[1] = t
        }*[Symbol.iterator]() {
            yield this.first, yield this.second
        }
        toJSON() {
            return this.toArray()
        }
        inspect() {
            return `Tuple(${JSON.stringify(this.first)}, ${JSON.stringify(this.second)})`
        }[Symbol.for("nodejs.util.inspect.custom")](e, t, r) {
            return `Tuple(${r(this.first,t)}, ${r(this.second,t)})`
        }
        toString() {
            return this.inspect()
        }
        fst() {
            return this.first
        }
        snd() {
            return this.second
        }
        equals(e) {
            return this.first === e.fst() && this.second === e.snd()
        }
        bimap(e, t) {
            return eq(e(this.first), t(this.second))
        }
        mapFirst(e) {
            return eq(e(this.first), this.second)
        }
        map(e) {
            return eq(this.first, e(this.second))
        }
        reduce(e, t) {
            return e(t, this.second)
        }
        toArray() {
            return [this.first, this.second]
        }
        swap() {
            return eq(this.second, this.first)
        }
        ap(e) {
            return eq(this.first, e.snd()(this.second))
        }
        every(e) {
            return e(this.first) && e(this.second)
        }
        some(e) {
            return e(this.first) || e(this.second)
        }
    }
    e$.prototype["fantasy-land/equals"] = e$.prototype.equals, e$.prototype["fantasy-land/bimap"] = e$.prototype.bimap, e$.prototype["fantasy-land/map"] = e$.prototype.map, e$.prototype["fantasy-land/reduce"] = e$.prototype.reduce, e$.prototype["fantasy-land/ap"] = e$.prototype.ap;
    let eq = Object.assign((e, t) => new e$(e, t), {
        fromArray: ([e, t]) => eq(e, t),
        fanout: (...e) => {
            let [t, r, i] = e;
            switch (e.length) {
                case 3:
                    return eq(t(i), r(i));
                case 2:
                    return e => eq.fanout(t, r, e);
                default:
                    return e => r => eq.fanout(t, e, r)
            }
        }
    });
    e$.prototype.constructor = eq;
    let ez = {
        liftEither(e) {
            if (e.isRight()) return Promise.resolve(e.extract());
            throw e.extract()
        },
        fromPromise: e => e.then(ez.liftEither),
        throwE(e) {
            throw e
        }
    };
    class eH {
        constructor(e) {
            this.runPromise = e, this[ee] = "EitherAsync", this.then = (e, t) => this.run().then(e, t)
        }
        leftOrDefault(e) {
            return this.run().then(t => t.leftOrDefault(e))
        }
        orDefault(e) {
            return this.run().then(t => t.orDefault(e))
        }
        join() {
            return eW(async e => {
                let t = await this;
                if (t.isRight()) {
                    let r = await t.extract();
                    return e.liftEither(r)
                }
                return e.liftEither(t)
            })
        }
        ap(e) {
            return eW(async t => {
                let r = await e;
                if (r.isRight()) {
                    let e = await this.run();
                    return e.isRight() ? r.extract()(e.extract()) : t.liftEither(e)
                }
                return t.liftEither(r)
            })
        }
        alt(e) {
            return eW(async t => {
                let r = await this.run();
                if (r.isRight()) return r.extract(); {
                    let r = await e;
                    return t.liftEither(r)
                }
            })
        }
        extend(e) {
            return eW(async t => {
                let r = await this.run();
                if (r.isRight()) {
                    let i = eW.liftEither(r);
                    return t.liftEither(eN(e(i)))
                }
                return t.liftEither(r)
            })
        }
        async run() {
            try {
                return eN(await this.runPromise(ez))
            } catch (e) {
                return eC(e)
            }
        }
        bimap(e, t) {
            return eW(async r => {
                let i = await this.run();
                try {
                    return await r.liftEither(i.bimap(e, t))
                } catch (e) {
                    throw await e
                }
            })
        }
        map(e) {
            return eW(t => this.runPromise(t).then(e))
        }
        mapLeft(e) {
            return eW(async t => {
                try {
                    return await this.runPromise(t)
                } catch (t) {
                    throw await e(t)
                }
            })
        }
        chain(e) {
            return eW(async t => {
                let r = await this.runPromise(t);
                return t.fromPromise(e(r))
            })
        }
        chainLeft(e) {
            return eW(async t => {
                try {
                    return await this.runPromise(t)
                } catch (r) {
                    return t.fromPromise(e(r))
                }
            })
        }
        toMaybeAsync() {
            return eX(async ({
                liftMaybe: e
            }) => e((await this.run()).toMaybe()))
        }
        swap() {
            return eW(async e => {
                let t = await this.run();
                return t.isRight() && e.throwE(t.extract()), e.liftEither(eN(t.extract()))
            })
        }
        ifLeft(e) {
            return eW(async t => {
                let r = await this.run();
                return r.ifLeft(e), t.liftEither(r)
            })
        }
        ifRight(e) {
            return eW(async t => {
                let r = await this.run();
                return r.ifRight(e), t.liftEither(r)
            })
        }
        void() {
            return this.map(e => {})
        }
        caseOf(e) {
            return this.run().then(t => t.caseOf(e))
        } finally(e) {
            return eW(({
                fromPromise: t
            }) => t(this.run().finally(e)))
        }
    }
    ee = Symbol.toStringTag, eH.prototype["fantasy-land/chain"] = eH.prototype.chain, eH.prototype["fantasy-land/alt"] = eH.prototype.alt;
    let eW = Object.assign(e => new eH(e), {
        fromPromise: e => eW(({
            fromPromise: t
        }) => t(e())),
        liftEither: e => eW(({
            liftEither: t
        }) => t(e)),
        lefts: e => Promise.all(e.map(e => e.run())).then(eB.lefts),
        rights: e => Promise.all(e.map(e => e.run())).then(eB.rights),
        sequence: e => eW(async t => {
            let r = [];
            for await (let i of e) {
                if (i.isLeft()) return t.liftEither(i);
                r.push(i.extract())
            }
            return t.liftEither(eN(r))
        }),
        all: e => eW.fromPromise(async () => Promise.all(e).then(eB.sequence))
    });
    eH.prototype.constructor = eW;
    let eK = {
        liftMaybe(e) {
            if (e.isJust()) return Promise.resolve(e.extract());
            throw eO
        },
        fromPromise: e => e.then(eK.liftMaybe)
    };
    class eJ {
        constructor(e) {
            this.runPromise = e, this[et] = "MaybeAsync"
        }
        orDefault(e) {
            return this.run().then(t => t.orDefault(e))
        }
        join() {
            return eX(async e => {
                let t = await this.run();
                if (t.isJust()) {
                    let r = await t.extract();
                    return e.liftMaybe(r)
                }
                return e.liftMaybe(eO)
            })
        }
        ap(e) {
            return eX(async t => {
                let r = await e;
                if (r.isJust()) {
                    let e = await this.run();
                    if (e.isJust()) return r.extract()(e.extract())
                }
                return t.liftMaybe(eO)
            })
        }
        alt(e) {
            return eX(async t => {
                let r = await this.run();
                if (r.isJust()) return r.extract(); {
                    let r = await e;
                    return t.liftMaybe(r)
                }
            })
        }
        extend(e) {
            return eX(async t => {
                let r = await this.run();
                if (r.isJust()) {
                    let i = eX.liftMaybe(r);
                    return t.liftMaybe(eT(e(i)))
                }
                return t.liftMaybe(eO)
            })
        }
        filter(e) {
            return eX(async t => {
                let r = await this.run();
                return t.liftMaybe(r.filter(e))
            })
        }
        async run() {
            try {
                return eT(await this.runPromise(eK))
            } catch {
                return eO
            }
        }
        map(e) {
            return eX(t => this.runPromise(t).then(e))
        }
        chain(e) {
            return eX(async t => {
                let r = await this.runPromise(t);
                return t.fromPromise(e(r))
            })
        }
        toEitherAsync(e) {
            return eW(async ({
                liftEither: t
            }) => t((await this.run()).toEither(e)))
        }
        ifJust(e) {
            return eX(async t => {
                let r = await this.run();
                return r.ifJust(e), t.liftMaybe(r)
            })
        }
        ifNothing(e) {
            return eX(async t => {
                let r = await this.run();
                return r.ifNothing(e), t.liftMaybe(r)
            })
        }
        void() {
            return this.map(e => {})
        }
        caseOf(e) {
            return this.run().then(t => t.caseOf(e))
        } finally(e) {
            return eX(({
                fromPromise: t
            }) => t(this.run().finally(e)))
        }
        then(e, t) {
            return this.run().then(e, t)
        }
    }
    et = Symbol.toStringTag, eJ.prototype["fantasy-land/chain"] = eJ.prototype.chain, eJ.prototype["fantasy-land/filter"] = eJ.prototype.filter, eJ.prototype["fantasy-land/alt"] = eJ.prototype.alt;
    let eX = Object.assign(e => new eJ(e), {
        catMaybes: e => Promise.all(e).then(eA.catMaybes),
        fromPromise: e => eX(({
            fromPromise: t
        }) => t(e())),
        liftMaybe: e => eX(({
            liftMaybe: t
        }) => t(e))
    });
    eJ.prototype.constructor = eX;
    (H = {})[H.NotStarted = 0] = "NotStarted", H[H.Running = 1] = "Running", H[H.Stopped = 2] = "Stopped", console.log.bind(console), new WeakMap, new WeakMap;
    var eY = e.i(189280);

    function eQ(e) {
        return "function" == typeof e
    }

    function eZ(e) {
        var t = e(function(e) {
            Error.call(e), e.stack = Error().stack
        });
        return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
    }
    var e0 = eZ(function(e) {
        return function(t) {
            e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
                return t + 1 + ") " + e.toString()
            }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t
        }
    });

    function e1(e, t) {
        if (e) {
            var r = e.indexOf(t);
            0 <= r && e.splice(r, 1)
        }
    }
    var e3 = function() {
            var e;

            function t(e) {
                this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
            }
            return t.prototype.unsubscribe = function() {
                if (!this.closed) {
                    this.closed = !0;
                    var e, t, r, i, n, a = this._parentage;
                    if (a)
                        if (this._parentage = null, Array.isArray(a)) try {
                            for (var s = (0, eY.__values)(a), o = s.next(); !o.done; o = s.next()) o.value.remove(this)
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (t = s.return) && t.call(s)
                            } finally {
                                if (e) throw e.error
                            }
                        } else a.remove(this);
                    var c = this.initialTeardown;
                    if (eQ(c)) try {
                        c()
                    } catch (e) {
                        n = e instanceof e0 ? e.errors : [e]
                    }
                    var l = this._finalizers;
                    if (l) {
                        this._finalizers = null;
                        try {
                            for (var u = (0, eY.__values)(l), d = u.next(); !d.done; d = u.next()) {
                                var h = d.value;
                                try {
                                    e5(h)
                                } catch (e) {
                                    n = null != n ? n : [], e instanceof e0 ? n = (0, eY.__spreadArray)((0, eY.__spreadArray)([], (0, eY.__read)(n)), (0, eY.__read)(e.errors)) : n.push(e)
                                }
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                d && !d.done && (i = u.return) && i.call(u)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }
                    if (n) throw new e0(n)
                }
            }, t.prototype.add = function(e) {
                var r;
                if (e && e !== this)
                    if (this.closed) e5(e);
                    else {
                        if (e instanceof t) {
                            if (e.closed || e._hasParent(this)) return;
                            e._addParent(this)
                        }(this._finalizers = null != (r = this._finalizers) ? r : []).push(e)
                    }
            }, t.prototype._hasParent = function(e) {
                var t = this._parentage;
                return t === e || Array.isArray(t) && t.includes(e)
            }, t.prototype._addParent = function(e) {
                var t = this._parentage;
                this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e
            }, t.prototype._removeParent = function(e) {
                var t = this._parentage;
                t === e ? this._parentage = null : Array.isArray(t) && e1(t, e)
            }, t.prototype.remove = function(e) {
                var r = this._finalizers;
                r && e1(r, e), e instanceof t && e._removeParent(this)
            }, (e = new t).closed = !0, t.EMPTY = e, t
        }(),
        e2 = e3.EMPTY;

    function e6(e) {
        return e instanceof e3 || e && "closed" in e && eQ(e.remove) && eQ(e.add) && eQ(e.unsubscribe)
    }

    function e5(e) {
        eQ(e) ? e() : e.unsubscribe()
    }
    var e4 = void 0,
        e7 = {
            setTimeout: function(e, t) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                var n = e7.delegate;
                return (null == n ? void 0 : n.setTimeout) ? n.setTimeout.apply(n, (0, eY.__spreadArray)([e, t], (0, eY.__read)(r))) : setTimeout.apply(void 0, (0, eY.__spreadArray)([e, t], (0, eY.__read)(r)))
            },
            clearTimeout: function(e) {
                var t = e7.delegate;
                return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e)
            },
            delegate: void 0
        };

    function e8(e) {
        e7.setTimeout(function() {
            !1;
            throw e
        })
    }

    function e9() {}
    var te = tt("C", void 0, void 0);

    function tt(e, t, r) {
        return {
            kind: e,
            value: t,
            error: r
        }
    }
    var tr = null;

    function ti(e) {
        var t, r, i, n;
        1;
        e()
    }
    var tn = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.isStopped = !1, t ? (r.destination = t, e6(t) && t.add(r)) : r.destination = td, r
            }
            return (0, eY.__extends)(t, e), t.create = function(e, t, r) {
                return new tc(e, t, r)
            }, t.prototype.next = function(e) {
                this.isStopped ? tu(tt("N", e, void 0), this) : this._next(e)
            }, t.prototype.error = function(e) {
                this.isStopped ? tu(tt("E", void 0, e), this) : (this.isStopped = !0, this._error(e))
            }, t.prototype.complete = function() {
                this.isStopped ? tu(te, this) : (this.isStopped = !0, this._complete())
            }, t.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
            }, t.prototype._next = function(e) {
                this.destination.next(e)
            }, t.prototype._error = function(e) {
                try {
                    this.destination.error(e)
                } finally {
                    this.unsubscribe()
                }
            }, t.prototype._complete = function() {
                try {
                    this.destination.complete()
                } finally {
                    this.unsubscribe()
                }
            }, t
        }(e3),
        ta = Function.prototype.bind;

    function ts(e, t) {
        return ta.call(e, t)
    }
    var to = function() {
            function e(e) {
                this.partialObserver = e
            }
            return e.prototype.next = function(e) {
                var t = this.partialObserver;
                if (t.next) try {
                    t.next(e)
                } catch (e) {
                    tl(e)
                }
            }, e.prototype.error = function(e) {
                var t = this.partialObserver;
                if (t.error) try {
                    t.error(e)
                } catch (e) {
                    tl(e)
                } else tl(e)
            }, e.prototype.complete = function() {
                var e = this.partialObserver;
                if (e.complete) try {
                    e.complete()
                } catch (e) {
                    tl(e)
                }
            }, e
        }(),
        tc = function(e) {
            function t(t, r, i) {
                var n, a, s = e.call(this) || this;
                return eQ(t) || !t ? n = {
                    next: null != t ? t : void 0,
                    error: null != r ? r : void 0,
                    complete: null != i ? i : void 0
                } : n = t, s.destination = new to(n), s
            }
            return (0, eY.__extends)(t, e), t
        }(tn);

    function tl(e) {
        1;
        e8(e)
    }

    function tu(e, t) {}
    var td = {
            closed: !0,
            next: e9,
            error: function(e) {
                throw e
            },
            complete: e9
        },
        th = "function" == typeof Symbol && Symbol.observable || "@@observable";

    function tp(e) {
        return e
    }
    var tf = function() {
        function e(e) {
            e && (this._subscribe = e)
        }
        return e.prototype.lift = function(t) {
            var r = new e;
            return r.source = this, r.operator = t, r
        }, e.prototype.subscribe = function(e, t, r) {
            var i = this,
                n = ! function(e) {
                    return e && e instanceof tn || e && eQ(e.next) && eQ(e.error) && eQ(e.complete) && e6(e)
                }(e) ? new tc(e, t, r) : e;
            return ti(function() {
                var e = i.operator,
                    t = i.source;
                n.add(e ? e.call(n, t) : t ? i._subscribe(n) : i._trySubscribe(n))
            }), n
        }, e.prototype._trySubscribe = function(e) {
            try {
                return this._subscribe(e)
            } catch (t) {
                e.error(t)
            }
        }, e.prototype.forEach = function(e, t) {
            var r = this;
            return new(t = tx(t))(function(t, i) {
                var n = new tc({
                    next: function(t) {
                        try {
                            e(t)
                        } catch (e) {
                            i(e), n.unsubscribe()
                        }
                    },
                    error: i,
                    complete: t
                });
                r.subscribe(n)
            })
        }, e.prototype._subscribe = function(e) {
            var t;
            return null == (t = this.source) ? void 0 : t.subscribe(e)
        }, e.prototype[th] = function() {
            return this
        }, e.prototype.pipe = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return (0 === e.length ? tp : 1 === e.length ? e[0] : function(t) {
                return e.reduce(function(e, t) {
                    return t(e)
                }, t)
            })(this)
        }, e.prototype.toPromise = function(e) {
            var t = this;
            return new(e = tx(e))(function(e, r) {
                var i;
                t.subscribe(function(e) {
                    return i = e
                }, function(e) {
                    return r(e)
                }, function() {
                    return e(i)
                })
            })
        }, e.create = function(t) {
            return new e(t)
        }, e
    }();

    function tx(e) {
        var t;
        return null != (t = null != e ? e : e4) ? t : Promise
    }

    function tm(e) {
        return function(t) {
            if (eQ(null == t ? void 0 : t.lift)) return t.lift(function(t) {
                try {
                    return e(t, this)
                } catch (e) {
                    this.error(e)
                }
            });
            throw TypeError("Unable to lift unknown Observable type")
        }
    }

    function ty(e, t, r, i, n) {
        return new tk(e, t, r, i, n)
    }
    var tk = function(e) {
            function t(t, r, i, n, a, s) {
                var o = e.call(this, t) || this;
                return o.onFinalize = a, o.shouldUnsubscribe = s, o._next = r ? function(e) {
                    try {
                        r(e)
                    } catch (e) {
                        t.error(e)
                    }
                } : e.prototype._next, o._error = n ? function(e) {
                    try {
                        n(e)
                    } catch (e) {
                        t.error(e)
                    } finally {
                        this.unsubscribe()
                    }
                } : e.prototype._error, o._complete = i ? function() {
                    try {
                        i()
                    } catch (e) {
                        t.error(e)
                    } finally {
                        this.unsubscribe()
                    }
                } : e.prototype._complete, o
            }
            return (0, eY.__extends)(t, e), t.prototype.unsubscribe = function() {
                var t;
                if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                    var r = this.closed;
                    e.prototype.unsubscribe.call(this), r || null == (t = this.onFinalize) || t.call(this)
                }
            }, t
        }(tn),
        tg = function(e) {
            function t(t, r) {
                return e.call(this) || this
            }
            return (0, eY.__extends)(t, e), t.prototype.schedule = function(e, t) {
                return void 0 === t && (t = 0), this
            }, t
        }(e3),
        tv = {
            setInterval: function(e, t) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                var n = tv.delegate;
                return (null == n ? void 0 : n.setInterval) ? n.setInterval.apply(n, (0, eY.__spreadArray)([e, t], (0, eY.__read)(r))) : setInterval.apply(void 0, (0, eY.__spreadArray)([e, t], (0, eY.__read)(r)))
            },
            clearInterval: function(e) {
                var t = tv.delegate;
                return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e)
            },
            delegate: void 0
        },
        tb = function(e) {
            function t(t, r) {
                var i = e.call(this, t, r) || this;
                return i.scheduler = t, i.work = r, i.pending = !1, i
            }
            return (0, eY.__extends)(t, e), t.prototype.schedule = function(e, t) {
                if (void 0 === t && (t = 0), this.closed) return this;
                this.state = e;
                var r, i = this.id,
                    n = this.scheduler;
                return null != i && (this.id = this.recycleAsyncId(n, i, t)), this.pending = !0, this.delay = t, this.id = null != (r = this.id) ? r : this.requestAsyncId(n, this.id, t), this
            }, t.prototype.requestAsyncId = function(e, t, r) {
                return void 0 === r && (r = 0), tv.setInterval(e.flush.bind(e, this), r)
            }, t.prototype.recycleAsyncId = function(e, t, r) {
                if (void 0 === r && (r = 0), null != r && this.delay === r && !1 === this.pending) return t;
                null != t && tv.clearInterval(t)
            }, t.prototype.execute = function(e, t) {
                if (this.closed) return Error("executing a cancelled action");
                this.pending = !1;
                var r = this._execute(e, t);
                if (r) return r;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }, t.prototype._execute = function(e, t) {
                var r, i = !1;
                try {
                    this.work(e)
                } catch (e) {
                    i = !0, r = e || Error("Scheduled action threw falsy error")
                }
                if (i) return this.unsubscribe(), r
            }, t.prototype.unsubscribe = function() {
                if (!this.closed) {
                    var t = this.id,
                        r = this.scheduler,
                        i = r.actions;
                    this.work = this.state = this.scheduler = null, this.pending = !1, e1(i, this), null != t && (this.id = this.recycleAsyncId(r, t, null)), this.delay = null, e.prototype.unsubscribe.call(this)
                }
            }, t
        }(tg),
        tE = {
            now: function() {
                return (tE.delegate || Date).now()
            },
            delegate: void 0
        },
        t_ = function() {
            function e(t, r) {
                void 0 === r && (r = e.now), this.schedulerActionCtor = t, this.now = r
            }
            return e.prototype.schedule = function(e, t, r) {
                return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t)
            }, e.now = tE.now, e
        }(),
        tS = new(function(e) {
            function t(t, r) {
                void 0 === r && (r = t_.now);
                var i = e.call(this, t, r) || this;
                return i.actions = [], i._active = !1, i
            }
            return (0, eY.__extends)(t, e), t.prototype.flush = function(e) {
                var t, r = this.actions;
                if (this._active) return void r.push(e);
                this._active = !0;
                do
                    if (t = e.execute(e.state, e.delay)) break; while (e = r.shift()) if (this._active = !1, t) {
                    for (; e = r.shift();) e.unsubscribe();
                    throw t
                }
            }, t
        }(t_))(tb),
        tA = function(e) {
            return e && "number" == typeof e.length && "function" != typeof e
        };

    function tD(e) {
        return eQ(null == e ? void 0 : e.then)
    }

    function tw(e) {
        return Symbol.asyncIterator && eQ(null == e ? void 0 : e[Symbol.asyncIterator])
    }

    function tT(e) {
        return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
    }
    var tO = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";

    function tB(e) {
        return eQ(null == e ? void 0 : e[tO])
    }

    function tR(e) {
        return (0, eY.__asyncGenerator)(this, arguments, function() {
            var t, r, i;
            return (0, eY.__generator)(this, function(n) {
                switch (n.label) {
                    case 0:
                        t = e.getReader(), n.label = 1;
                    case 1:
                        n.trys.push([1, , 9, 10]), n.label = 2;
                    case 2:
                        return [4, (0, eY.__await)(t.read())];
                    case 3:
                        if (i = (r = n.sent()).value, !r.done) return [3, 5];
                        return [4, (0, eY.__await)(void 0)];
                    case 4:
                        return [2, n.sent()];
                    case 5:
                        return [4, (0, eY.__await)(i)];
                    case 6:
                        return [4, n.sent()];
                    case 7:
                        return n.sent(), [3, 2];
                    case 8:
                        return [3, 10];
                    case 9:
                        return t.releaseLock(), [7];
                    case 10:
                        return [2]
                }
            })
        })
    }

    function tI(e) {
        return eQ(null == e ? void 0 : e.getReader)
    }

    function tC(e) {
        if (e instanceof tf) return e;
        if (null != e) {
            var t, r, i, n;
            if (eQ(e[th])) {
                return t = e, new tf(function(e) {
                    var r = t[th]();
                    if (eQ(r.subscribe)) return r.subscribe(e);
                    throw TypeError("Provided object does not correctly implement Symbol.observable")
                })
            }
            if (tA(e)) {
                return r = e, new tf(function(e) {
                    for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
                    e.complete()
                })
            }
            if (tD(e)) {
                return i = e, new tf(function(e) {
                    i.then(function(t) {
                        e.closed || (e.next(t), e.complete())
                    }, function(t) {
                        return e.error(t)
                    }).then(null, e8)
                })
            }
            if (tw(e)) return tN(e);
            if (tB(e)) {
                return n = e, new tf(function(e) {
                    var t, r;
                    try {
                        for (var i = (0, eY.__values)(n), a = i.next(); !a.done; a = i.next()) {
                            var s = a.value;
                            if (e.next(s), e.closed) return
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (r = i.return) && r.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    e.complete()
                })
            }
            if (tI(e)) return tN(tR(e))
        }
        throw tT(e)
    }

    function tN(e) {
        return new tf(function(t) {
            (function(e, t) {
                var r, i, n, a;
                return (0, eY.__awaiter)(this, void 0, void 0, function() {
                    var s;
                    return (0, eY.__generator)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                o.trys.push([0, 5, 6, 11]), r = (0, eY.__asyncValues)(e), o.label = 1;
                            case 1:
                                return [4, r.next()];
                            case 2:
                                if ((i = o.sent()).done) return [3, 4];
                                if (s = i.value, t.next(s), t.closed) return [2];
                                o.label = 3;
                            case 3:
                                return [3, 1];
                            case 4:
                                return [3, 11];
                            case 5:
                                return n = {
                                    error: o.sent()
                                }, [3, 11];
                            case 6:
                                if (o.trys.push([6, , 9, 10]), !(i && !i.done && (a = r.return))) return [3, 8];
                                return [4, a.call(r)];
                            case 7:
                                o.sent(), o.label = 8;
                            case 8:
                                return [3, 10];
                            case 9:
                                if (n) throw n.error;
                                return [7];
                            case 10:
                                return [7];
                            case 11:
                                return t.complete(), [2]
                        }
                    })
                })
            })(e, t).catch(function(e) {
                return t.error(e)
            })
        })
    }

    function tP(e, t, r, i, n) {
        void 0 === i && (i = 0), void 0 === n && (n = !1);
        var a = t.schedule(function() {
            r(), n ? e.add(this.schedule(null, i)) : this.unsubscribe()
        }, i);
        if (e.add(a), !n) return a
    }
    eZ(function(e) {
        return function(t) {
            void 0 === t && (t = null), e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t
        }
    });
    var tj = eZ(function(e) {
            return function() {
                e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
            }
        }),
        tF = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
            }
            return (0, eY.__extends)(t, e), t.prototype.lift = function(e) {
                var t = new tV(this, this);
                return t.operator = e, t
            }, t.prototype._throwIfClosed = function() {
                if (this.closed) throw new tj
            }, t.prototype.next = function(e) {
                var t = this;
                ti(function() {
                    var r, i;
                    if (t._throwIfClosed(), !t.isStopped) {
                        t.currentObservers || (t.currentObservers = Array.from(t.observers));
                        try {
                            for (var n = (0, eY.__values)(t.currentObservers), a = n.next(); !a.done; a = n.next()) a.value.next(e)
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (i = n.return) && i.call(n)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }
                })
            }, t.prototype.error = function(e) {
                var t = this;
                ti(function() {
                    if (t._throwIfClosed(), !t.isStopped) {
                        t.hasError = t.isStopped = !0, t.thrownError = e;
                        for (var r = t.observers; r.length;) r.shift().error(e)
                    }
                })
            }, t.prototype.complete = function() {
                var e = this;
                ti(function() {
                    if (e._throwIfClosed(), !e.isStopped) {
                        e.isStopped = !0;
                        for (var t = e.observers; t.length;) t.shift().complete()
                    }
                })
            }, t.prototype.unsubscribe = function() {
                this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
            }, Object.defineProperty(t.prototype, "observed", {
                get: function() {
                    var e;
                    return (null == (e = this.observers) ? void 0 : e.length) > 0
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype._trySubscribe = function(t) {
                return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
            }, t.prototype._subscribe = function(e) {
                return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e)
            }, t.prototype._innerSubscribe = function(e) {
                var t = this,
                    r = this.hasError,
                    i = this.isStopped,
                    n = this.observers;
                return r || i ? e2 : (this.currentObservers = null, n.push(e), new e3(function() {
                    t.currentObservers = null, e1(n, e)
                }))
            }, t.prototype._checkFinalizedStatuses = function(e) {
                var t = this.hasError,
                    r = this.thrownError,
                    i = this.isStopped;
                t ? e.error(r) : i && e.complete()
            }, t.prototype.asObservable = function() {
                var e = new tf;
                return e.source = this, e
            }, t.create = function(e, t) {
                return new tV(e, t)
            }, t
        }(tf),
        tV = function(e) {
            function t(t, r) {
                var i = e.call(this) || this;
                return i.destination = t, i.source = r, i
            }
            return (0, eY.__extends)(t, e), t.prototype.next = function(e) {
                var t, r;
                null == (r = null == (t = this.destination) ? void 0 : t.next) || r.call(t, e)
            }, t.prototype.error = function(e) {
                var t, r;
                null == (r = null == (t = this.destination) ? void 0 : t.error) || r.call(t, e)
            }, t.prototype.complete = function() {
                var e, t;
                null == (t = null == (e = this.destination) ? void 0 : e.complete) || t.call(e)
            }, t.prototype._subscribe = function(e) {
                var t, r;
                return null != (r = null == (t = this.source) ? void 0 : t.subscribe(e)) ? r : e2
            }, t
        }(tF),
        tG = function(e) {
            function t(t, r, i) {
                void 0 === t && (t = 1 / 0), void 0 === r && (r = 1 / 0), void 0 === i && (i = tE);
                var n = e.call(this) || this;
                return n._bufferSize = t, n._windowTime = r, n._timestampProvider = i, n._buffer = [], n._infiniteTimeWindow = !0, n._infiniteTimeWindow = r === 1 / 0, n._bufferSize = Math.max(1, t), n._windowTime = Math.max(1, r), n
            }
            return (0, eY.__extends)(t, e), t.prototype.next = function(t) {
                var r = this.isStopped,
                    i = this._buffer,
                    n = this._infiniteTimeWindow,
                    a = this._timestampProvider,
                    s = this._windowTime;
                !r && (i.push(t), n || i.push(a.now() + s)), this._trimBuffer(), e.prototype.next.call(this, t)
            }, t.prototype._subscribe = function(e) {
                this._throwIfClosed(), this._trimBuffer();
                for (var t = this._innerSubscribe(e), r = this._infiniteTimeWindow, i = this._buffer.slice(), n = 0; n < i.length && !e.closed; n += r ? 1 : 2) e.next(i[n]);
                return this._checkFinalizedStatuses(e), t
            }, t.prototype._trimBuffer = function() {
                var e = this._bufferSize,
                    t = this._timestampProvider,
                    r = this._buffer,
                    i = this._infiniteTimeWindow,
                    n = (i ? 1 : 2) * e;
                if (e < 1 / 0 && n < r.length && r.splice(0, r.length - n), !i) {
                    for (var a = t.now(), s = 0, o = 1; o < r.length && r[o] <= a; o += 2) s = o;
                    s && r.splice(0, s + 1)
                }
            }, t
        }(tF),
        tL = ((u = tL || {})[u.Connected = 0] = "Connected", u[u.ReadyWithoutSecureChannel = 1] = "ReadyWithoutSecureChannel", u[u.ReadyWithSecureChannel = 2] = "ReadyWithSecureChannel", u);
    let tM = Symbol.for("@inversifyjs/common/islazyServiceIdentifier");
    class tU {
        [tM];#
        e;
        constructor(e) {
            this.#e = e, this[tM] = !0
        }
        static is(e) {
            return "object" == typeof e && null !== e && !0 === e[tM]
        }
        unwrap() {
            return this.#e()
        }
    }

    function t$(e, t) {
        return Reflect.getMetadata(t, e)
    }

    function tq(e, t, r, i) {
        let n = i(t$(e, t) ? ? r);
        Reflect.defineMetadata(t, n, e)
    }
    let tz = "named",
        tH = "name",
        tW = "unmanaged",
        tK = "optional",
        tJ = "inject",
        tX = "multi_inject",
        tY = "post_construct",
        tQ = "pre_destroy",
        tZ = [tJ, tX, tH, tW, tz, tK],
        t0 = Symbol.for("@inversifyjs/core/InversifyCoreError");
    class t1 extends Error {
        [t0];
        kind;
        constructor(e, t, r) {
            super(t, r), this[t0] = !0, this.kind = e
        }
        static is(e) {
            return "object" == typeof e && null !== e && !0 === e[t0]
        }
        static isErrorOfKind(e, t) {
            return t1.is(e) && e.kind === t
        }
    }

    function t3(e, t) {
        let r = [];
        for (let e = 0; e < t.length; ++e) void 0 === t[e] && r.push(e);
        if (r.length > 0) throw new t1(er.missingInjectionDecorator, `Found unexpected missing metadata on type "${e.name}" at constructor indexes "${r.join('", "')}".

Are you using @inject, @multiInject or @unmanaged decorators at those indexes?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`)
    }

    function t2(e) {
        return {
            kind: ei.singleInjection,
            name: void 0,
            optional: !1,
            tags: new Map,
            targetName: void 0,
            value: e
        }
    }

    function t6(e) {
        let t = e.find(e => e.key === tJ),
            r = e.find(e => e.key === tX);
        if (void 0 !== e.find(e => e.key === tW)) {
            if (void 0 !== r || void 0 !== t) throw new t1(er.missingInjectionDecorator, "Expected a single @inject, @multiInject or @unmanaged metadata");
            return {
                kind: ei.unmanaged
            }
        }
        if (void 0 === r && void 0 === t) throw new t1(er.missingInjectionDecorator, "Expected @inject, @multiInject or @unmanaged metadata");
        let i = e.find(e => e.key === tz),
            n = e.find(e => e.key === tK),
            a = e.find(e => e.key === tH);
        return {
            kind: void 0 === t ? ei.multipleInjection : ei.singleInjection,
            name: i ? .value,
            optional: void 0 !== n,
            tags: new Map(e.filter(e => tZ.every(t => e.key !== t)).map(e => [e.key, e.value])),
            targetName: a ? .value,
            value: void 0 === t ? r ? .value : t.value
        }
    }

    function t5(e, t, r) {
        try {
            return t6(r)
        } catch (r) {
            throw t1.isErrorOfKind(r, er.missingInjectionDecorator) ? new t1(er.missingInjectionDecorator, `Expected a single @inject, @multiInject or @unmanaged decorator at type "${e.name}" at constructor arguments at index "${t.toString()}"`, {
                cause: r
            }) : r
        }
    }

    function t4(e, t, r) {
        try {
            return t6(r)
        } catch (r) {
            throw t1.isErrorOfKind(r, er.missingInjectionDecorator) ? new t1(er.missingInjectionDecorator, `Expected a single @inject, @multiInject or @unmanaged decorator at type "${e.name}" at property "${t.toString()}"`, {
                cause: r
            }) : r
        }
    }

    function t7(e) {
        let t = t$(e, "inversify:tagged_props"),
            r = new Map;
        if (void 0 !== t)
            for (let i of Reflect.ownKeys(t)) {
                let n = t[i];
                r.set(i, t4(e, i, n))
            }
        return r
    }

    function t8(e) {
        let t = t$(e, tY),
            r = t$(e, tQ);
        return {
            constructorArguments: function(e) {
                let t = t$(e, "design:paramtypes"),
                    r = t$(e, "inversify:tagged"),
                    i = [];
                if (void 0 !== r)
                    for (let [t, n] of Object.entries(r)) {
                        let r = parseInt(t);
                        i[r] = t5(e, r, n)
                    }
                if (void 0 !== t) {
                    for (let e = 0; e < t.length; ++e)
                        if (void 0 === i[e]) {
                            let r = t[e];
                            i[e] = t2(r)
                        }
                }
                return t3(e, i), i
            }(e),
            lifecycle: {
                postConstructMethodName: t ? .value,
                preDestroyMethodName: r ? .value
            },
            properties: t7(e)
        }
    }

    function t9(e, t) {
        let r = t.getPropertiesMetadata(e),
            i = new Map;
        for (let t of Reflect.ownKeys(r)) {
            let n = r[t];
            i.set(t, t4(e, t, n))
        }
        return i
    }

    function re(e) {
        let t = Object.getPrototypeOf(e.prototype);
        return t ? .constructor
    }(W = er || (er = {}))[W.injectionDecoratorConflict = 0] = "injectionDecoratorConflict", W[W.missingInjectionDecorator = 1] = "missingInjectionDecorator", W[W.planning = 2] = "planning", W[W.unknown = 3] = "unknown", (K = ei || (ei = {}))[K.multipleInjection = 0] = "multipleInjection", K[K.singleInjection = 1] = "singleInjection", K[K.unmanaged = 2] = "unmanaged";
    class rt {#
        t;
        constructor(e) {
            this.#t = e
        }
        startsWith(e) {
            return this.#t.startsWith(e)
        }
        endsWith(e) {
            return this.#t.endsWith(e)
        }
        contains(e) {
            return this.#t.includes(e)
        }
        equals(e) {
            return this.#t === e
        }
        value() {
            return this.#t
        }
    }
    let rr = "@inversifyjs/core/targetId";
    class ri {#
        e;#
        r;#
        i;#
        n;#
        a;#
        s;
        constructor(e, t, r) {
            this.#r = function() {
                let e = t$(Object, rr) ? ? 0;
                return e === Number.MAX_SAFE_INTEGER ? tq(Object, rr, e, () => Number.MIN_SAFE_INTEGER) : tq(Object, rr, e, e => e + 1), e
            }(), this.#i = e, this.#n = void 0, this.#e = t, this.#a = new rt("string" == typeof e ? e : e.toString().slice(7, -1)), this.#s = r
        }
        get id() {
            return this.#r
        }
        get identifier() {
            return this.#i
        }
        get metadata() {
            var e;
            return void 0 === this.#n && (this.#n = (e = this.#e).kind === ei.unmanaged ? [{
                key: tW,
                value: !0
            }] : function(e) {
                let t = [function(e) {
                    let t;
                    switch (e.kind) {
                        case ei.multipleInjection:
                            t = {
                                key: tX,
                                value: e.value
                            };
                            break;
                        case ei.singleInjection:
                            t = {
                                key: tJ,
                                value: e.value
                            }
                    }
                    return t
                }(e)];
                for (let [r, i] of (void 0 !== e.name && t.push({
                        key: tz,
                        value: e.name
                    }), e.optional && t.push({
                        key: tK,
                        value: !0
                    }), e.tags)) t.push({
                    key: r,
                    value: i
                });
                return void 0 !== e.targetName && t.push({
                    key: tH,
                    value: e.targetName
                }), t
            }(e)), this.#n
        }
        get name() {
            return this.#a
        }
        get type() {
            return this.#s
        }
        get serviceIdentifier() {
            return tU.is(this.#e.value) ? this.#e.value.unwrap() : this.#e.value
        }
        getCustomTags() {
            return [...this.#e.tags.entries()].map(([e, t]) => ({
                key: e,
                value: t
            }))
        }
        getNamedTag() {
            return void 0 === this.#e.name ? null : {
                key: tz,
                value: this.#e.name
            }
        }
        hasTag(e) {
            return this.metadata.some(t => t.key === e)
        }
        isArray() {
            return this.#e.kind === ei.multipleInjection
        }
        isNamed() {
            return void 0 !== this.#e.name
        }
        isOptional() {
            return this.#e.optional
        }
        isTagged() {
            return this.#e.tags.size > 0
        }
        matchesArray(e) {
            return this.isArray() && this.#e.value === e
        }
        matchesNamedTag(e) {
            return this.#e.name === e
        }
        matchesTag(e) {
            return t => this.metadata.some(r => r.key === e && r.value === t)
        }
    }
    let rn = e => {
            var t, r;
            return t = void 0 === e ? t8 : t => {
                    let r, i;
                    return r = t$(t, tY), i = t$(t, tQ), {
                        constructorArguments: function(e, t) {
                            let r = t.getConstructorMetadata(e),
                                i = [];
                            for (let [t, n] of Object.entries(r.userGeneratedMetadata)) {
                                let r = parseInt(t);
                                i[r] = t5(e, r, n)
                            }
                            if (void 0 !== r.compilerGeneratedMetadata) {
                                for (let e = 0; e < r.compilerGeneratedMetadata.length; ++e)
                                    if (void 0 === i[e]) {
                                        let t = r.compilerGeneratedMetadata[e];
                                        i[e] = t2(t)
                                    }
                            }
                            return t3(e, i), i
                        }(t, e),
                        lifecycle: {
                            postConstructMethodName: r ? .value,
                            preDestroyMethodName: i ? .value
                        },
                        properties: t9(t, e)
                    }
                }, r = void 0 === e ? t7 : t => t9(t, e),
                function(e) {
                    let i = t(e),
                        n = re(e);
                    for (; void 0 !== n && n !== Object;) {
                        for (let [e, t] of r(n)) i.properties.has(e) || i.properties.set(e, t);
                        n = re(n)
                    }
                    let a = [];
                    for (let e of i.constructorArguments)
                        if (e.kind !== ei.unmanaged) {
                            let t = e.targetName ? ? "";
                            a.push(new ri(t, e, "ConstructorArgument"))
                        }
                    for (let [e, t] of i.properties)
                        if (t.kind !== ei.unmanaged) {
                            let r = t.targetName ? ? e;
                            a.push(new ri(r, t, "ClassProperty"))
                        }
                    return a
                }
        },
        ra = "named",
        rs = "name",
        ro = "unmanaged",
        rc = "optional",
        rl = "inject",
        ru = "multi_inject",
        rd = "inversify:tagged",
        rh = "inversify:tagged_props",
        rp = "inversify:paramtypes",
        rf = "design:paramtypes",
        rx = "post_construct",
        rm = "pre_destroy",
        ry = [rl, ru, rs, ro, ra, rc];
    Object.freeze({
        __proto__: null,
        DESIGN_PARAM_TYPES: rf,
        INJECT_TAG: rl,
        MULTI_INJECT_TAG: ru,
        NAMED_TAG: ra,
        NAME_TAG: rs,
        NON_CUSTOM_TAG_KEYS: ry,
        OPTIONAL_TAG: rc,
        PARAM_TYPES: rp,
        POST_CONSTRUCT: rx,
        PRE_DESTROY: rm,
        TAGGED: rd,
        TAGGED_PROP: rh,
        UNMANAGED_TAG: ro
    });
    let rk = "Request",
        rg = "Singleton",
        rv = "Transient",
        rb = "ConstantValue",
        rE = "Constructor",
        r_ = "DynamicValue",
        rS = "Factory",
        rA = "Function",
        rD = "Instance",
        rw = "Provider",
        rT = 0;
    class rO {
        id;
        moduleId;
        activated;
        serviceIdentifier;
        implementationType;
        cache;
        dynamicValue;
        scope;
        type;
        factory;
        provider;
        constraint;
        onActivation;
        onDeactivation;
        constructor(e, t) {
            this.id = rT++, this.activated = !1, this.serviceIdentifier = e, this.scope = t, this.type = "Invalid", this.constraint = e => !0, this.implementationType = null, this.cache = null, this.factory = null, this.provider = null, this.onActivation = null, this.onDeactivation = null, this.dynamicValue = null
        }
        clone() {
            let e = new rO(this.serviceIdentifier, this.scope);
            return e.activated = e.scope === rg && this.activated, e.implementationType = this.implementationType, e.dynamicValue = this.dynamicValue, e.scope = this.scope, e.type = this.type, e.factory = this.factory, e.provider = this.provider, e.constraint = this.constraint, e.onActivation = this.onActivation, e.onDeactivation = this.onDeactivation, e.cache = this.cache, e
        }
    }
    let rB = "Metadata key was used more than once in a parameter:",
        rR = "NULL argument",
        rI = "Key Not Found",
        rC = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.",
        rN = (e, t) => `onDeactivation() error in class ${e}: ${t}`;
    class rP {
        getConstructorMetadata(e) {
            return {
                compilerGeneratedMetadata: Reflect.getMetadata(rf, e) ? ? [],
                userGeneratedMetadata: Reflect.getMetadata(rd, e) ? ? {}
            }
        }
        getPropertiesMetadata(e) {
            return Reflect.getMetadata(rh, e) ? ? {}
        }
    }

    function rj(e) {
        return e instanceof RangeError || "Maximum call stack size exceeded" === e.message
    }

    function rF(e) {
        return "function" == typeof e ? e.name : "symbol" == typeof e ? e.toString() : e
    }

    function rV(e, t, r) {
        let i = "",
            n = r(e, t);
        return 0 !== n.length && (i = "\nRegistered bindings:", n.forEach(e => {
            let t = "Object";
            null !== e.implementationType && (t = rG(e.implementationType)), i = `${i}
 ${t}`, e.constraint.metaData && (i = `${i} - ${e.constraint.metaData}`)
        })), i
    }

    function rG(e) {
        if (null != e.name && "" !== e.name) return e.name; {
            let t = e.toString(),
                r = t.match(/^function\s*([^\s(]+)/);
            return null === r ? `Anonymous function: ${t}` : r[1]
        }
    }

    function rL(e) {
        return `{"key":"${e.key.toString()}","value":"${e.value.toString()}"}`
    }(J = en || (en = {}))[J.MultipleBindingsAvailable = 2] = "MultipleBindingsAvailable", J[J.NoBindingsAvailable = 0] = "NoBindingsAvailable", J[J.OnlyOneBindingAvailable = 1] = "OnlyOneBindingAvailable";
    class rM {
        id;
        container;
        plan;
        currentRequest;
        constructor(e) {
            this.id = rT++, this.container = e
        }
        addPlan(e) {
            this.plan = e
        }
        setCurrentRequest(e) {
            this.currentRequest = e
        }
    }
    class rU {
        key;
        value;
        constructor(e, t) {
            this.key = e, this.value = t
        }
        toString() {
            return this.key === ra ? `named: ${String(this.value).toString()} ` : `tagged: { key:${this.key.toString()}, value: ${String(this.value)} }`
        }
    }
    class r$ {
        parentContext;
        rootRequest;
        constructor(e, t) {
            this.parentContext = e, this.rootRequest = t
        }
    }
    class rq {
        id;
        serviceIdentifier;
        parentContext;
        parentRequest;
        bindings;
        childRequests;
        target;
        requestScope;
        constructor(e, t, r, i, n) {
            this.id = rT++, this.serviceIdentifier = e, this.parentContext = t, this.parentRequest = r, this.target = n, this.childRequests = [], this.bindings = Array.isArray(i) ? i : [i], this.requestScope = null === r ? new Map : null
        }
        addChildRequest(e, t, r) {
            let i = new rq(e, this.parentContext, this, t, r);
            return this.childRequests.push(i), i
        }
    }

    function rz(e) {
        return e._bindingDictionary
    }

    function rH(e, t, r, i, n) {
        let a = rK(r.container, n.serviceIdentifier),
            s = [];
        return a.length === en.NoBindingsAvailable && !0 === r.container.options.autoBindInjectable && "function" == typeof n.serviceIdentifier && e.getConstructorMetadata(n.serviceIdentifier).compilerGeneratedMetadata && (r.container.bind(n.serviceIdentifier).toSelf(), a = rK(r.container, n.serviceIdentifier)), s = t ? a : a.filter(e => {
                let t = new rq(e.serviceIdentifier, r, i, e, n);
                return e.constraint(t)
            }),
            function(e, t, r, i, n) {
                switch (t.length) {
                    case en.NoBindingsAvailable:
                        if (i.isOptional()) return; {
                            let t = rF(e),
                                a = "No matching bindings found for serviceIdentifier:";
                            throw a += function(e, t) {
                                if (t.isTagged() || t.isNamed()) {
                                    let r = "",
                                        i = t.getNamedTag(),
                                        n = t.getCustomTags();
                                    return null !== i && (r += rL(i) + "\n"), null !== n && n.forEach(e => {
                                        r += rL(e) + "\n"
                                    }), ` ${e}
 ${e} - ${r}`
                                }
                                return ` ${e}`
                            }(t, i), a += rV(n, t, rK), null !== r && (a += `
Trying to resolve bindings for "${rF(r.serviceIdentifier)}"`), Error(a)
                        }
                    case en.OnlyOneBindingAvailable:
                        return;
                    case en.MultipleBindingsAvailable:
                    default:
                        if (i.isArray()) return; {
                            let t = rF(e),
                                r = `Ambiguous match found for serviceIdentifier: ${t}`;
                            throw Error(r += rV(n, t, rK))
                        }
                }
            }(n.serviceIdentifier, s, i, n, r.container), s
    }

    function rW(e, t) {
        let r = [new rU(t.isMultiInject ? ru : rl, e)];
        return void 0 !== t.customTag && r.push(new rU(t.customTag.key, t.customTag.value)), !0 === t.isOptional && r.push(new rU(rc, !0)), r
    }

    function rK(e, t) {
        let r = [],
            i = rz(e);
        return i.hasKey(t) ? r = i.get(t) : null !== e.parent && (r = rK(e.parent, t)), r
    }

    function rJ(e) {
        return ("object" == typeof e && null !== e || "function" == typeof e) && "function" == typeof e.then
    }

    function rX(e) {
        return !!rJ(e) || Array.isArray(e) && e.some(rJ)
    }
    let rY = async (e, t) => {
        try {
            e.cache = await t
        } catch (t) {
            throw e.cache = null, e.activated = !1, t
        }
    };

    function rQ(e) {
        let t = new e.constr(...e.constructorInjections);
        return e.propertyRequests.forEach((r, i) => {
            let n = r.target.identifier,
                a = e.propertyInjections[i];
            r.target.isOptional() && void 0 === a || (t[n] = a)
        }), t
    }
    async function rZ(e) {
        let t = [];
        for (let r of e) Array.isArray(r) ? t.push(Promise.all(r)) : t.push(r);
        return Promise.all(t)
    }

    function r0(e, t) {
        let r = function(e, t) {
            var r, i;
            if (Reflect.hasMetadata(rx, e)) {
                let n = Reflect.getMetadata(rx, e);
                try {
                    return t[n.value] ? .()
                } catch (t) {
                    if (t instanceof Error) throw Error((r = e.name, i = t.message, `@postConstruct error in class ${r}: ${i}`))
                }
            }
        }(e, t);
        return rJ(r) ? r.then(() => t) : t
    }(X = ea || (ea = {})).DynamicValue = "toDynamicValue", X.Factory = "toFactory", X.Provider = "toProvider";
    let r1 = e => t => {
            t.parentContext.setCurrentRequest(t);
            let r = t.bindings,
                i = t.childRequests,
                n = t.target && t.target.isArray(),
                a = !(t.parentRequest && t.parentRequest.target && t.target && t.parentRequest.target.matchesArray(t.target.serviceIdentifier));
            return n && a ? i.map(t => r1(e)(t)) : t.target.isOptional() && 0 === r.length ? void 0 : r3(e, t, r[0])
        },
        r3 = (e, t, r) => {
            var i, n;
            let a;
            return i = () => {
                let i = ((e, t, r) => {
                    let i, n, a = t.childRequests;
                    switch ((e => {
                        let t = null;
                        switch (e.type) {
                            case rb:
                            case rA:
                                t = e.cache;
                                break;
                            case rE:
                            case rD:
                                t = e.implementationType;
                                break;
                            case r_:
                                t = e.dynamicValue;
                                break;
                            case rw:
                                t = e.provider;
                                break;
                            case rS:
                                t = e.factory
                        }
                        if (null === t) {
                            let t = rF(e.serviceIdentifier);
                            throw Error(`Invalid binding type: ${t}`)
                        }
                    })(r), r.type) {
                        case rb:
                        case rA:
                            i = r.cache;
                            break;
                        case rE:
                            i = r.implementationType;
                            break;
                        case rD:
                            var s, o;
                            s = r.implementationType, o = r1(e), r.scope !== rg && function(e, t) {
                                let r = `Class cannot be instantiated in ${e.scope===rk?"request":"transient"} scope.`;
                                if ("function" == typeof e.onDeactivation) throw Error(rN(t.name, r));
                                if (Reflect.hasMetadata(rm, t)) throw Error(`@preDestroy error in class ${t.name}: ${r}`)
                            }(r, s), i = rJ(n = function(e, t, r) {
                                let i;
                                if (t.length > 0) {
                                    let n = t.reduce((e, t) => {
                                            let i = r(t);
                                            return "ConstructorArgument" === t.target.type ? e.constructorInjections.push(i) : (e.propertyRequests.push(t), e.propertyInjections.push(i)), e.isAsync || (e.isAsync = rX(i)), e
                                        }, {
                                            constructorInjections: [],
                                            isAsync: !1,
                                            propertyInjections: [],
                                            propertyRequests: []
                                        }),
                                        a = { ...n,
                                            constr: e
                                        };
                                    i = n.isAsync ? async function(e) {
                                        let t = await rZ(e.constructorInjections),
                                            r = await rZ(e.propertyInjections);
                                        return rQ({ ...e,
                                            constructorInjections: t,
                                            propertyInjections: r
                                        })
                                    }(a) : rQ(a)
                                } else i = new e;
                                return i
                            }(s, a, o)) ? n.then(e => r0(s, e)) : r0(s, n);
                            break;
                        default:
                            i = ((e, t) => {
                                let r = (e => {
                                    switch (e.type) {
                                        case rS:
                                            return {
                                                factory: e.factory,
                                                factoryType: ea.Factory
                                            };
                                        case rw:
                                            return {
                                                factory: e.provider,
                                                factoryType: ea.Provider
                                            };
                                        case r_:
                                            return {
                                                factory: e.dynamicValue,
                                                factoryType: ea.DynamicValue
                                            };
                                        default:
                                            throw Error(`Unexpected factory type ${e.type}`)
                                    }
                                })(e);
                                try {
                                    return r.factory.bind(e)(t)
                                } catch (e) {
                                    if (rj(e)) {
                                        var i, n;
                                        throw Error((i = r.factoryType, n = t.currentRequest.serviceIdentifier.toString(), `It looks like there is a circular dependency in one of the '${i}' bindings. Please investigate bindings with service identifier '${n}'.`))
                                    }
                                    throw e
                                }
                            })(r, t.parentContext)
                    }
                    return i
                })(e, t, r);
                return rJ(i) ? i.then(e => r2(t, r, e)) : r2(t, r, i)
            }, null !== (a = r.scope === rg && r.activated ? r.cache : r.scope === rk && e.has(r.id) ? e.get(r.id) : null) || (a = i(), n = a, r.scope === rg && (r.cache = n, r.activated = !0, rJ(n) && rY(r, n)), r.scope === rk && (e.has(r.id) || e.set(r.id, n))), a
        };

    function r2(e, t, r) {
        let i = r6(e.parentContext, t, r),
            n = r8(e.parentContext.container),
            a, s = n.next();
        do {
            a = s.value;
            let t = e.parentContext,
                r = r7(a, e.serviceIdentifier);
            i = rJ(i) ? r4(r, t, i) : r5(r, t, i), s = n.next()
        } while (!0 !== s.done && !rz(a).hasKey(e.serviceIdentifier)) return i
    }
    let r6 = (e, t, r) => "function" == typeof t.onActivation ? t.onActivation(e, r) : r,
        r5 = (e, t, r) => {
            let i = e.next();
            for (; !0 !== i.done;) {
                if (rJ(r = i.value(t, r))) return r4(e, t, r);
                i = e.next()
            }
            return r
        },
        r4 = async (e, t, r) => {
            let i = await r,
                n = e.next();
            for (; !0 !== n.done;) i = await n.value(t, i), n = e.next();
            return i
        },
        r7 = (e, t) => {
            let r = e._activations;
            return r.hasKey(t) ? r.get(t).values() : [].values()
        },
        r8 = e => {
            let t = [e],
                r = e.parent;
            for (; null !== r;) t.push(r), r = r.parent;
            return {
                next: () => {
                    let e = t.pop();
                    return void 0 !== e ? {
                        done: !1,
                        value: e
                    } : {
                        done: !0,
                        value: void 0
                    }
                }
            }
        },
        r9 = (e, t) => {
            let r = e.parentRequest;
            return null !== r && (!!t(r) || r9(r, t))
        },
        ie = e => t => {
            let r = r => null !== r && null !== r.target && r.target.matchesTag(e)(t);
            return r.metaData = new rU(e, t), r
        },
        it = ie(ra),
        ir = e => t => {
            let r = null;
            return null !== t && ((r = t.bindings[0], "string" == typeof e) ? r.serviceIdentifier === e : e === t.bindings[0].implementationType)
        };
    class ii {
        _binding;
        constructor(e) {
            this._binding = e
        }
        when(e) {
            return this._binding.constraint = e, new ia(this._binding)
        }
        whenTargetNamed(e) {
            return this._binding.constraint = it(e), new ia(this._binding)
        }
        whenTargetIsDefault() {
            return this._binding.constraint = e => null !== e && null !== e.target && !e.target.isNamed() && !e.target.isTagged(), new ia(this._binding)
        }
        whenTargetTagged(e, t) {
            return this._binding.constraint = ie(e)(t), new ia(this._binding)
        }
        whenInjectedInto(e) {
            return this._binding.constraint = t => null !== t && ir(e)(t.parentRequest), new ia(this._binding)
        }
        whenParentNamed(e) {
            return this._binding.constraint = t => null !== t && it(e)(t.parentRequest), new ia(this._binding)
        }
        whenParentTagged(e, t) {
            return this._binding.constraint = r => null !== r && ie(e)(t)(r.parentRequest), new ia(this._binding)
        }
        whenAnyAncestorIs(e) {
            return this._binding.constraint = t => null !== t && r9(t, ir(e)), new ia(this._binding)
        }
        whenNoAncestorIs(e) {
            return this._binding.constraint = t => null !== t && !r9(t, ir(e)), new ia(this._binding)
        }
        whenAnyAncestorNamed(e) {
            return this._binding.constraint = t => null !== t && r9(t, it(e)), new ia(this._binding)
        }
        whenNoAncestorNamed(e) {
            return this._binding.constraint = t => null !== t && !r9(t, it(e)), new ia(this._binding)
        }
        whenAnyAncestorTagged(e, t) {
            return this._binding.constraint = r => null !== r && r9(r, ie(e)(t)), new ia(this._binding)
        }
        whenNoAncestorTagged(e, t) {
            return this._binding.constraint = r => null !== r && !r9(r, ie(e)(t)), new ia(this._binding)
        }
        whenAnyAncestorMatches(e) {
            return this._binding.constraint = t => null !== t && r9(t, e), new ia(this._binding)
        }
        whenNoAncestorMatches(e) {
            return this._binding.constraint = t => null !== t && !r9(t, e), new ia(this._binding)
        }
    }
    class ia {
        _binding;
        constructor(e) {
            this._binding = e
        }
        onActivation(e) {
            return this._binding.onActivation = e, new ii(this._binding)
        }
        onDeactivation(e) {
            return this._binding.onDeactivation = e, new ii(this._binding)
        }
    }
    class is {
        _bindingWhenSyntax;
        _bindingOnSyntax;
        _binding;
        constructor(e) {
            this._binding = e, this._bindingWhenSyntax = new ii(this._binding), this._bindingOnSyntax = new ia(this._binding)
        }
        when(e) {
            return this._bindingWhenSyntax.when(e)
        }
        whenTargetNamed(e) {
            return this._bindingWhenSyntax.whenTargetNamed(e)
        }
        whenTargetIsDefault() {
            return this._bindingWhenSyntax.whenTargetIsDefault()
        }
        whenTargetTagged(e, t) {
            return this._bindingWhenSyntax.whenTargetTagged(e, t)
        }
        whenInjectedInto(e) {
            return this._bindingWhenSyntax.whenInjectedInto(e)
        }
        whenParentNamed(e) {
            return this._bindingWhenSyntax.whenParentNamed(e)
        }
        whenParentTagged(e, t) {
            return this._bindingWhenSyntax.whenParentTagged(e, t)
        }
        whenAnyAncestorIs(e) {
            return this._bindingWhenSyntax.whenAnyAncestorIs(e)
        }
        whenNoAncestorIs(e) {
            return this._bindingWhenSyntax.whenNoAncestorIs(e)
        }
        whenAnyAncestorNamed(e) {
            return this._bindingWhenSyntax.whenAnyAncestorNamed(e)
        }
        whenAnyAncestorTagged(e, t) {
            return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t)
        }
        whenNoAncestorNamed(e) {
            return this._bindingWhenSyntax.whenNoAncestorNamed(e)
        }
        whenNoAncestorTagged(e, t) {
            return this._bindingWhenSyntax.whenNoAncestorTagged(e, t)
        }
        whenAnyAncestorMatches(e) {
            return this._bindingWhenSyntax.whenAnyAncestorMatches(e)
        }
        whenNoAncestorMatches(e) {
            return this._bindingWhenSyntax.whenNoAncestorMatches(e)
        }
        onActivation(e) {
            return this._bindingOnSyntax.onActivation(e)
        }
        onDeactivation(e) {
            return this._bindingOnSyntax.onDeactivation(e)
        }
    }
    class io {
        _binding;
        constructor(e) {
            this._binding = e
        }
        inRequestScope() {
            return this._binding.scope = rk, new is(this._binding)
        }
        inSingletonScope() {
            return this._binding.scope = rg, new is(this._binding)
        }
        inTransientScope() {
            return this._binding.scope = rv, new is(this._binding)
        }
    }
    class ic {
        _bindingInSyntax;
        _bindingWhenSyntax;
        _bindingOnSyntax;
        _binding;
        constructor(e) {
            this._binding = e, this._bindingWhenSyntax = new ii(this._binding), this._bindingOnSyntax = new ia(this._binding), this._bindingInSyntax = new io(e)
        }
        inRequestScope() {
            return this._bindingInSyntax.inRequestScope()
        }
        inSingletonScope() {
            return this._bindingInSyntax.inSingletonScope()
        }
        inTransientScope() {
            return this._bindingInSyntax.inTransientScope()
        }
        when(e) {
            return this._bindingWhenSyntax.when(e)
        }
        whenTargetNamed(e) {
            return this._bindingWhenSyntax.whenTargetNamed(e)
        }
        whenTargetIsDefault() {
            return this._bindingWhenSyntax.whenTargetIsDefault()
        }
        whenTargetTagged(e, t) {
            return this._bindingWhenSyntax.whenTargetTagged(e, t)
        }
        whenInjectedInto(e) {
            return this._bindingWhenSyntax.whenInjectedInto(e)
        }
        whenParentNamed(e) {
            return this._bindingWhenSyntax.whenParentNamed(e)
        }
        whenParentTagged(e, t) {
            return this._bindingWhenSyntax.whenParentTagged(e, t)
        }
        whenAnyAncestorIs(e) {
            return this._bindingWhenSyntax.whenAnyAncestorIs(e)
        }
        whenNoAncestorIs(e) {
            return this._bindingWhenSyntax.whenNoAncestorIs(e)
        }
        whenAnyAncestorNamed(e) {
            return this._bindingWhenSyntax.whenAnyAncestorNamed(e)
        }
        whenAnyAncestorTagged(e, t) {
            return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t)
        }
        whenNoAncestorNamed(e) {
            return this._bindingWhenSyntax.whenNoAncestorNamed(e)
        }
        whenNoAncestorTagged(e, t) {
            return this._bindingWhenSyntax.whenNoAncestorTagged(e, t)
        }
        whenAnyAncestorMatches(e) {
            return this._bindingWhenSyntax.whenAnyAncestorMatches(e)
        }
        whenNoAncestorMatches(e) {
            return this._bindingWhenSyntax.whenNoAncestorMatches(e)
        }
        onActivation(e) {
            return this._bindingOnSyntax.onActivation(e)
        }
        onDeactivation(e) {
            return this._bindingOnSyntax.onDeactivation(e)
        }
    }
    class il {
        _binding;
        constructor(e) {
            this._binding = e
        }
        to(e) {
            return this._binding.type = rD, this._binding.implementationType = e, new ic(this._binding)
        }
        toSelf() {
            if ("function" != typeof this._binding.serviceIdentifier) throw Error("The toSelf function can only be applied when a constructor is used as service identifier");
            let e = this._binding.serviceIdentifier;
            return this.to(e)
        }
        toConstantValue(e) {
            return this._binding.type = rb, this._binding.cache = e, this._binding.dynamicValue = null, this._binding.implementationType = null, this._binding.scope = rg, new is(this._binding)
        }
        toDynamicValue(e) {
            return this._binding.type = r_, this._binding.cache = null, this._binding.dynamicValue = e, this._binding.implementationType = null, new ic(this._binding)
        }
        toConstructor(e) {
            return this._binding.type = rE, this._binding.implementationType = e, this._binding.scope = rg, new is(this._binding)
        }
        toFactory(e) {
            return this._binding.type = rS, this._binding.factory = e, this._binding.scope = rg, new is(this._binding)
        }
        toFunction(e) {
            if ("function" != typeof e) throw Error("Value provided to function binding must be a function!");
            let t = this.toConstantValue(e);
            return this._binding.type = rA, this._binding.scope = rg, t
        }
        toAutoFactory(e) {
            return this._binding.type = rS, this._binding.factory = t => () => t.container.get(e), this._binding.scope = rg, new is(this._binding)
        }
        toAutoNamedFactory(e) {
            return this._binding.type = rS, this._binding.factory = t => r => t.container.getNamed(e, r), new is(this._binding)
        }
        toProvider(e) {
            return this._binding.type = rw, this._binding.provider = e, this._binding.scope = rg, new is(this._binding)
        }
        toService(e) {
            this._binding.type = r_, Object.defineProperty(this._binding, "cache", {
                configurable: !0,
                enumerable: !0,
                get: () => null,
                set(e) {}
            }), this._binding.dynamicValue = t => {
                try {
                    return t.container.get(e)
                } catch (r) {
                    return t.container.getAsync(e)
                }
            }, this._binding.implementationType = null
        }
    }
    class iu {
        bindings;
        activations;
        deactivations;
        middleware;
        moduleActivationStore;
        static of (e, t, r, i, n) {
            let a = new iu;
            return a.bindings = e, a.middleware = t, a.deactivations = i, a.activations = r, a.moduleActivationStore = n, a
        }
    }
    class id {
        _map;
        constructor() {
            this._map = new Map
        }
        getMap() {
            return this._map
        }
        add(e, t) {
            if (this._checkNonNulish(e), null == t) throw Error(rR);
            let r = this._map.get(e);
            void 0 !== r ? r.push(t) : this._map.set(e, [t])
        }
        get(e) {
            this._checkNonNulish(e);
            let t = this._map.get(e);
            if (void 0 !== t) return t;
            throw Error(rI)
        }
        remove(e) {
            if (this._checkNonNulish(e), !this._map.delete(e)) throw Error(rI)
        }
        removeIntersection(e) {
            this.traverse((t, r) => {
                let i = e.hasKey(t) ? e.get(t) : void 0;
                if (void 0 !== i) {
                    let e = r.filter(e => !i.some(t => e === t));
                    this._setValue(t, e)
                }
            })
        }
        removeByCondition(e) {
            let t = [];
            return this._map.forEach((r, i) => {
                let n = [];
                for (let i of r) e(i) ? t.push(i) : n.push(i);
                this._setValue(i, n)
            }), t
        }
        hasKey(e) {
            return this._checkNonNulish(e), this._map.has(e)
        }
        clone() {
            let e = new id;
            return this._map.forEach((t, r) => {
                t.forEach(t => {
                    e.add(r, "object" == typeof t && null !== t && "clone" in t && "function" == typeof t.clone ? t.clone() : t)
                })
            }), e
        }
        traverse(e) {
            this._map.forEach((t, r) => {
                e(r, t)
            })
        }
        _checkNonNulish(e) {
            if (null == e) throw Error(rR)
        }
        _setValue(e, t) {
            t.length > 0 ? this._map.set(e, t) : this._map.delete(e)
        }
    }
    class ih {
        _map = new Map;
        remove(e) {
            let t = this._map.get(e);
            return void 0 === t ? this._getEmptyHandlersStore() : (this._map.delete(e), t)
        }
        addDeactivation(e, t, r) {
            this._getModuleActivationHandlers(e).onDeactivations.add(t, r)
        }
        addActivation(e, t, r) {
            this._getModuleActivationHandlers(e).onActivations.add(t, r)
        }
        clone() {
            let e = new ih;
            return this._map.forEach((t, r) => {
                e._map.set(r, {
                    onActivations: t.onActivations.clone(),
                    onDeactivations: t.onDeactivations.clone()
                })
            }), e
        }
        _getModuleActivationHandlers(e) {
            let t = this._map.get(e);
            return void 0 === t && (t = this._getEmptyHandlersStore(), this._map.set(e, t)), t
        }
        _getEmptyHandlersStore() {
            return {
                onActivations: new id,
                onDeactivations: new id
            }
        }
    }
    class ip {
        id;
        parent;
        options;
        _middleware;
        _bindingDictionary;
        _activations;
        _deactivations;
        _snapshots;
        _metadataReader;
        _moduleActivationStore;
        constructor(e) {
            const t = e || {};
            if ("object" != typeof t) throw Error("Invalid Container constructor argument. Container options must be an object.");
            if (void 0 === t.defaultScope) t.defaultScope = rv;
            else if (t.defaultScope !== rg && t.defaultScope !== rv && t.defaultScope !== rk) throw Error('Invalid Container option. Default scope must be a string ("singleton" or "transient").');
            if (void 0 === t.autoBindInjectable) t.autoBindInjectable = !1;
            else if ("boolean" != typeof t.autoBindInjectable) throw Error("Invalid Container option. Auto bind injectable must be a boolean");
            if (void 0 === t.skipBaseClassChecks) t.skipBaseClassChecks = !1;
            else if ("boolean" != typeof t.skipBaseClassChecks) throw Error("Invalid Container option. Skip base check must be a boolean");
            this.options = {
                autoBindInjectable: t.autoBindInjectable,
                defaultScope: t.defaultScope,
                skipBaseClassChecks: t.skipBaseClassChecks
            }, this.id = rT++, this._bindingDictionary = new id, this._snapshots = [], this._middleware = null, this._activations = new id, this._deactivations = new id, this.parent = null, this._metadataReader = new rP, this._moduleActivationStore = new ih
        }
        static merge(e, t, ...r) {
            let i = new ip,
                n = [e, t, ...r].map(e => rz(e)),
                a = rz(i);
            return n.forEach(e => {
                e.traverse((e, t) => {
                    t.forEach(e => {
                        a.add(e.serviceIdentifier, e.clone())
                    })
                })
            }), i
        }
        load(...e) {
            let t = this._getContainerModuleHelpersFactory();
            for (let r of e) {
                let e = t(r.id);
                r.registry(e.bindFunction, e.unbindFunction, e.isboundFunction, e.rebindFunction, e.unbindAsyncFunction, e.onActivationFunction, e.onDeactivationFunction)
            }
        }
        async loadAsync(...e) {
            let t = this._getContainerModuleHelpersFactory();
            for (let r of e) {
                let e = t(r.id);
                await r.registry(e.bindFunction, e.unbindFunction, e.isboundFunction, e.rebindFunction, e.unbindAsyncFunction, e.onActivationFunction, e.onDeactivationFunction)
            }
        }
        unload(...e) {
            e.forEach(e => {
                let t = this._removeModuleBindings(e.id);
                this._deactivateSingletons(t), this._removeModuleHandlers(e.id)
            })
        }
        async unloadAsync(...e) {
            for (let t of e) {
                let e = this._removeModuleBindings(t.id);
                await this._deactivateSingletonsAsync(e), this._removeModuleHandlers(t.id)
            }
        }
        bind(e) {
            return this._bind(this._buildBinding(e))
        }
        rebind(e) {
            return this.unbind(e), this.bind(e)
        }
        async rebindAsync(e) {
            return await this.unbindAsync(e), this.bind(e)
        }
        unbind(e) {
            if (this._bindingDictionary.hasKey(e)) {
                let t = this._bindingDictionary.get(e);
                this._deactivateSingletons(t)
            }
            this._removeServiceFromDictionary(e)
        }
        async unbindAsync(e) {
            if (this._bindingDictionary.hasKey(e)) {
                let t = this._bindingDictionary.get(e);
                await this._deactivateSingletonsAsync(t)
            }
            this._removeServiceFromDictionary(e)
        }
        unbindAll() {
            this._bindingDictionary.traverse((e, t) => {
                this._deactivateSingletons(t)
            }), this._bindingDictionary = new id
        }
        async unbindAllAsync() {
            let e = [];
            this._bindingDictionary.traverse((t, r) => {
                e.push(this._deactivateSingletonsAsync(r))
            }), await Promise.all(e), this._bindingDictionary = new id
        }
        onActivation(e, t) {
            this._activations.add(e, t)
        }
        onDeactivation(e, t) {
            this._deactivations.add(e, t)
        }
        isBound(e) {
            let t = this._bindingDictionary.hasKey(e);
            return !t && this.parent && (t = this.parent.isBound(e)), t
        }
        isCurrentBound(e) {
            return this._bindingDictionary.hasKey(e)
        }
        isBoundNamed(e, t) {
            return this.isBoundTagged(e, ra, t)
        }
        isBoundTagged(e, t, r) {
            let i = !1;
            if (this._bindingDictionary.hasKey(e)) {
                let n = this._bindingDictionary.get(e),
                    a = function(e, t, r) {
                        let i = t6(rW(t, r));
                        if (i.kind === ei.unmanaged) throw Error("Unexpected metadata when creating target");
                        let n = new ri("", i, "Variable");
                        return new rq(t, new rM(e), null, [], n)
                    }(this, e, {
                        customTag: {
                            key: t,
                            value: r
                        },
                        isMultiInject: !1
                    });
                i = n.some(e => e.constraint(a))
            }
            return !i && this.parent && (i = this.parent.isBoundTagged(e, t, r)), i
        }
        snapshot() {
            this._snapshots.push(iu.of(this._bindingDictionary.clone(), this._middleware, this._activations.clone(), this._deactivations.clone(), this._moduleActivationStore.clone()))
        }
        restore() {
            let e = this._snapshots.pop();
            if (void 0 === e) throw Error("No snapshot available to restore.");
            this._bindingDictionary = e.bindings, this._activations = e.activations, this._deactivations = e.deactivations, this._middleware = e.middleware, this._moduleActivationStore = e.moduleActivationStore
        }
        createChild(e) {
            let t = new ip(e || this.options);
            return t.parent = this, t
        }
        applyMiddleware(...e) {
            let t = this._middleware ? this._middleware : this._planAndResolve();
            this._middleware = e.reduce((e, t) => t(e), t)
        }
        applyCustomMetadataReader(e) {
            this._metadataReader = e
        }
        get(e) {
            let t = this._getNotAllArgs(e, !1, !1);
            return this._getButThrowIfAsync(t)
        }
        async getAsync(e) {
            let t = this._getNotAllArgs(e, !1, !1);
            return this._get(t)
        }
        getTagged(e, t, r) {
            let i = this._getNotAllArgs(e, !1, !1, t, r);
            return this._getButThrowIfAsync(i)
        }
        async getTaggedAsync(e, t, r) {
            let i = this._getNotAllArgs(e, !1, !1, t, r);
            return this._get(i)
        }
        getNamed(e, t) {
            return this.getTagged(e, ra, t)
        }
        async getNamedAsync(e, t) {
            return this.getTaggedAsync(e, ra, t)
        }
        getAll(e, t) {
            let r = this._getAllArgs(e, t, !1);
            return this._getButThrowIfAsync(r)
        }
        async getAllAsync(e, t) {
            let r = this._getAllArgs(e, t, !1);
            return this._getAll(r)
        }
        getAllTagged(e, t, r) {
            let i = this._getNotAllArgs(e, !0, !1, t, r);
            return this._getButThrowIfAsync(i)
        }
        async getAllTaggedAsync(e, t, r) {
            let i = this._getNotAllArgs(e, !0, !1, t, r);
            return this._getAll(i)
        }
        getAllNamed(e, t) {
            return this.getAllTagged(e, ra, t)
        }
        async getAllNamedAsync(e, t) {
            return this.getAllTaggedAsync(e, ra, t)
        }
        resolve(e) {
            let t = this.isBound(e);
            t || this.bind(e).toSelf();
            let r = this.get(e);
            return t || this.unbind(e), r
        }
        tryGet(e) {
            let t = this._getNotAllArgs(e, !1, !0);
            return this._getButThrowIfAsync(t)
        }
        async tryGetAsync(e) {
            let t = this._getNotAllArgs(e, !1, !0);
            return this._get(t)
        }
        tryGetTagged(e, t, r) {
            let i = this._getNotAllArgs(e, !1, !0, t, r);
            return this._getButThrowIfAsync(i)
        }
        async tryGetTaggedAsync(e, t, r) {
            let i = this._getNotAllArgs(e, !1, !0, t, r);
            return this._get(i)
        }
        tryGetNamed(e, t) {
            return this.tryGetTagged(e, ra, t)
        }
        async tryGetNamedAsync(e, t) {
            return this.tryGetTaggedAsync(e, ra, t)
        }
        tryGetAll(e, t) {
            let r = this._getAllArgs(e, t, !0);
            return this._getButThrowIfAsync(r)
        }
        async tryGetAllAsync(e, t) {
            let r = this._getAllArgs(e, t, !0);
            return this._getAll(r)
        }
        tryGetAllTagged(e, t, r) {
            let i = this._getNotAllArgs(e, !0, !0, t, r);
            return this._getButThrowIfAsync(i)
        }
        async tryGetAllTaggedAsync(e, t, r) {
            let i = this._getNotAllArgs(e, !0, !0, t, r);
            return this._getAll(i)
        }
        tryGetAllNamed(e, t) {
            return this.tryGetAllTagged(e, ra, t)
        }
        async tryGetAllNamedAsync(e, t) {
            return this.tryGetAllTaggedAsync(e, ra, t)
        }
        _preDestroy(e, t) {
            if (void 0 !== e && Reflect.hasMetadata(rm, e)) {
                let r = Reflect.getMetadata(rm, e);
                return t[r.value] ? .()
            }
        }
        _removeModuleHandlers(e) {
            let t = this._moduleActivationStore.remove(e);
            this._activations.removeIntersection(t.onActivations), this._deactivations.removeIntersection(t.onDeactivations)
        }
        _removeModuleBindings(e) {
            return this._bindingDictionary.removeByCondition(t => t.moduleId === e)
        }
        _deactivate(e, t) {
            let r = null == t ? void 0 : Object.getPrototypeOf(t).constructor;
            try {
                if (this._deactivations.hasKey(e.serviceIdentifier)) {
                    let i = this._deactivateContainer(t, this._deactivations.get(e.serviceIdentifier).values());
                    if (rJ(i)) return this._handleDeactivationError(i.then(async () => this._propagateContainerDeactivationThenBindingAndPreDestroyAsync(e, t, r)), e.serviceIdentifier)
                }
                let i = this._propagateContainerDeactivationThenBindingAndPreDestroy(e, t, r);
                if (rJ(i)) return this._handleDeactivationError(i, e.serviceIdentifier)
            } catch (t) {
                if (t instanceof Error) throw Error(rN(rF(e.serviceIdentifier), t.message))
            }
        }
        async _handleDeactivationError(e, t) {
            try {
                await e
            } catch (e) {
                if (e instanceof Error) throw Error(rN(rF(t), e.message))
            }
        }
        _deactivateContainer(e, t) {
            let r = t.next();
            for (;
                "function" == typeof r.value;) {
                let i = r.value(e);
                if (rJ(i)) return i.then(async () => this._deactivateContainerAsync(e, t));
                r = t.next()
            }
        }
        async _deactivateContainerAsync(e, t) {
            let r = t.next();
            for (;
                "function" == typeof r.value;) await r.value(e), r = t.next()
        }
        _getContainerModuleHelpersFactory() {
            let e = e => t => {
                    let r = this._buildBinding(t);
                    return r.moduleId = e, this._bind(r)
                },
                t = () => e => {
                    this.unbind(e)
                },
                r = () => async e => this.unbindAsync(e),
                i = () => e => this.isBound(e),
                n = t => {
                    let r = e(t);
                    return e => (this.unbind(e), r(e))
                },
                a = e => (t, r) => {
                    this._moduleActivationStore.addActivation(e, t, r), this.onActivation(t, r)
                },
                s = e => (t, r) => {
                    this._moduleActivationStore.addDeactivation(e, t, r), this.onDeactivation(t, r)
                };
            return o => ({
                bindFunction: e(o),
                isboundFunction: i(),
                onActivationFunction: a(o),
                onDeactivationFunction: s(o),
                rebindFunction: n(o),
                unbindAsyncFunction: r(),
                unbindFunction: t()
            })
        }
        _bind(e) {
            return this._bindingDictionary.add(e.serviceIdentifier, e), new il(e)
        }
        _buildBinding(e) {
            return new rO(e, this.options.defaultScope || rv)
        }
        async _getAll(e) {
            return Promise.all(this._get(e))
        }
        _get(e) {
            let t = { ...e,
                contextInterceptor: e => e,
                targetType: "Variable"
            };
            if (this._middleware) {
                let e = this._middleware(t);
                if (null == e) throw Error("Invalid return type in middleware. Middleware must return!");
                return e
            }
            return this._planAndResolve()(t)
        }
        _getButThrowIfAsync(e) {
            let t = this._get(e);
            if (rX(t)) {
                var r;
                throw Error(`You are attempting to construct ${"function"==typeof(r=e.serviceIdentifier)?`[function/class ${r.name||"<anonymous>"}]`:"symbol"==typeof r?r.toString():`'${r}'`} in a synchronous way but it has asynchronous dependencies.`)
            }
            return t
        }
        _getAllArgs(e, t, r) {
            return {
                avoidConstraints: !t ? .enforceBindingConstraints,
                isMultiInject: !0,
                isOptional: r,
                serviceIdentifier: e
            }
        }
        _getNotAllArgs(e, t, r, i, n) {
            return {
                avoidConstraints: !1,
                isMultiInject: t,
                isOptional: r,
                key: i,
                serviceIdentifier: e,
                value: n
            }
        }
        _getPlanMetadataFromNextArgs(e) {
            let t = {
                isMultiInject: e.isMultiInject
            };
            return void 0 !== e.key && (t.customTag = {
                key: e.key,
                value: e.value
            }), !0 === e.isOptional && (t.isOptional = !0), t
        }
        _planAndResolve() {
            return e => {
                var t;
                let r = function(e, t, r, i, n, a = !1) {
                    let s = new rM(t),
                        o = function(e, t, r) {
                            let i = t6(rW(t, r));
                            if (i.kind === ei.unmanaged) throw Error("Unexpected metadata when creating target");
                            return new ri("", i, e)
                        }(r, i, n);
                    try {
                        return function e(t, r, i, n, a, s) {
                            let o, c;
                            if (null === a) {
                                o = rH(t, r, n, null, s), c = new rq(i, n, null, o, s);
                                let e = new r$(n, c);
                                n.addPlan(e)
                            } else o = rH(t, r, n, a, s), c = a.addChildRequest(s.serviceIdentifier, o, s);
                            o.forEach(r => {
                                let i = null;
                                if (s.isArray()) i = c.addChildRequest(r.serviceIdentifier, r, s);
                                else {
                                    if (null !== r.cache) return;
                                    i = c
                                }
                                if (r.type === rD && null !== r.implementationType) {
                                    var a;
                                    let s = (a = r.implementationType, rn(t)(a));
                                    if (!0 !== n.container.options.skipBaseClassChecks) {
                                        let e = function e(t, r) {
                                            let i, n = (i = Object.getPrototypeOf(r.prototype), i ? .constructor);
                                            if (void 0 === n || n === Object) return 0;
                                            let a = rn(t)(n),
                                                s = a.map(e => e.metadata.filter(e => e.key === ro)),
                                                o = [].concat.apply([], s).length,
                                                c = a.length - o;
                                            return c > 0 ? c : e(t, n)
                                        }(t, r.implementationType);
                                        if (s.length < e) throw Error(`The number of constructor arguments in the derived class ${rG(r.implementationType)} must be >= than the number of constructor arguments of its base class.`)
                                    }
                                    s.forEach(r => {
                                        e(t, !1, r.serviceIdentifier, n, i, r)
                                    })
                                }
                            })
                        }(e, a, i, s, null, o), s
                    } catch (e) {
                        throw rj(e) && function e(t) {
                            t.childRequests.forEach(r => {
                                if (function e(t, r) {
                                        return null !== t.parentRequest && (t.parentRequest.serviceIdentifier === r || e(t.parentRequest, r))
                                    }(t, r.serviceIdentifier)) {
                                    let e = (function e(t, r = []) {
                                        let i = rF(t.serviceIdentifier);
                                        return r.push(i), null !== t.parentRequest ? e(t.parentRequest, r) : r
                                    })(r).reverse().join(" --> ");
                                    throw Error(`Circular dependency found: ${e}`)
                                }
                                e(r)
                            })
                        }(s.plan.rootRequest), e
                    }
                }(this._metadataReader, this, e.targetType, e.serviceIdentifier, this._getPlanMetadataFromNextArgs(e), e.avoidConstraints);
                return r1((t = r = e.contextInterceptor(r)).plan.rootRequest.requestScope)(t.plan.rootRequest)
            }
        }
        _deactivateIfSingleton(e) {
            if (e.activated) return rJ(e.cache) ? e.cache.then(t => this._deactivate(e, t)) : this._deactivate(e, e.cache)
        }
        _deactivateSingletons(e) {
            for (let t of e)
                if (rJ(this._deactivateIfSingleton(t))) throw Error("Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)")
        }
        async _deactivateSingletonsAsync(e) {
            await Promise.all(e.map(async e => this._deactivateIfSingleton(e)))
        }
        _propagateContainerDeactivationThenBindingAndPreDestroy(e, t, r) {
            return this.parent ? this._deactivate.bind(this.parent)(e, t) : this._bindingDeactivationAndPreDestroy(e, t, r)
        }
        async _propagateContainerDeactivationThenBindingAndPreDestroyAsync(e, t, r) {
            this.parent ? await this._deactivate.bind(this.parent)(e, t) : await this._bindingDeactivationAndPreDestroyAsync(e, t, r)
        }
        _removeServiceFromDictionary(e) {
            try {
                this._bindingDictionary.remove(e)
            } catch (t) {
                throw Error(`Could not unbind serviceIdentifier: ${rF(e)}`)
            }
        }
        _bindingDeactivationAndPreDestroy(e, t, r) {
            if ("function" == typeof e.onDeactivation) {
                let i = e.onDeactivation(t);
                if (rJ(i)) return i.then(() => this._preDestroy(r, t))
            }
            return this._preDestroy(r, t)
        }
        async _bindingDeactivationAndPreDestroyAsync(e, t, r) {
            "function" == typeof e.onDeactivation && await e.onDeactivation(t), await this._preDestroy(r, t)
        }
    }
    class ix {
        id;
        registry;
        constructor(e) {
            this.id = rT++, this.registry = e
        }
    }

    function im(e, t, r, i) {
        let n = function(e) {
                let t = [];
                if (Array.isArray(e)) {
                    let r = function(e) {
                        let t = new Set;
                        for (let r of e) {
                            if (t.has(r)) return r;
                            t.add(r)
                        }
                    }((t = e).map(e => e.key));
                    if (void 0 !== r) throw Error(`${rB} ${r.toString()}`)
                } else t = [e];
                return t
            }(i),
            a = {};
        Reflect.hasOwnMetadata(e, t) && (a = Reflect.getMetadata(e, t));
        let s = a[r];
        if (void 0 === s) s = [];
        else
            for (let e of s)
                if (n.some(t => t.key === e.key)) throw Error(`${rB} ${e.key.toString()}`);
        s.push(...n), a[r] = s, Reflect.defineMetadata(e, a, t)
    }

    function iy() {
        return function(e) {
            if (Reflect.hasOwnMetadata(rp, e)) throw Error("Cannot apply @injectable decorator multiple times.");
            return Reflect.defineMetadata(rp, Reflect.getMetadata(rf, e) || [], e), e
        }
    }

    function ik(e) {
        return t => (r, i, n) => {
            var a;
            if (void 0 === t) {
                let e = "function" == typeof r ? r.name : r.constructor.name;
                throw Error(`@inject called with undefined this could mean that the class ${e} has a circular dependency problem. You can use a LazyServiceIdentifer to overcome this limitation.`)
            }(a = new rU(e, t), (e, t, r) => {
                "number" == typeof r ? (function(e) {
                    if (void 0 !== e) throw Error(rC)
                }(t), im(rd, e, r.toString(), a)) : function(e, t, r) {
                    if (void 0 !== e.prototype) throw Error(rC);
                    im(rh, e.constructor, t, r)
                }(e, t, a)
            })(r, i, n)
        }
    }
    let ig = ik(rl);

    function iv(e, t) {
        return () => (r, i) => {
            let n = new rU(e, i);
            if (Reflect.hasOwnMetadata(e, r.constructor)) throw Error(t);
            Reflect.defineMetadata(e, n, r.constructor)
        }
    }
    ik(ru), iv(rx, "Cannot apply @postConstruct decorator multiple times in the same class"), iv(rm, "Cannot apply @preDestroy decorator multiple times in the same class");
    class ib {
        constructor(e, t, r, i, n) {
            this.deviceModel = e, this.serviceUuid = t, this.writeUuid = r, this.writeCmdUuid = i, this.notifyUuid = n
        }
    }
    var iE = e.i(656073);
    class i_ {
        id;
        productName;
        usbProductId;
        bootloaderUsbProductId;
        usbOnly;
        memorySize;
        masks;
        bluetoothSpec;
        constructor(e) {
            this.id = e.id, this.productName = e.productName, this.usbProductId = e.usbProductId, this.bootloaderUsbProductId = e.bootloaderUsbProductId, this.usbOnly = e.usbOnly, this.memorySize = e.memorySize, this.masks = e.masks, this.bluetoothSpec = e.bluetoothSpec
        }
        getBlockSize(e) {
            switch (this.id) {
                case eg.NANO_S:
                    return iE.default.lt(iE.default.coerce(e) ? ? "", "2.0.0") ? 4096 : 2048;
                case eg.NANO_X:
                    return 4096;
                case eg.NANO_SP:
                case eg.STAX:
                case eg.FLEX:
                    return 32
            }
        }
    }
    var iS = Object.defineProperty,
        iA = Object.getOwnPropertyDescriptor;
    let iD = class {
        getAllDeviceModels() {
            return Object.values(iD.deviceModelByIds)
        }
        getDeviceModel(e) {
            return iD.deviceModelByIds[e.id]
        }
        filterDeviceModels(e) {
            return this.getAllDeviceModels().filter(t => Object.entries(e).every(([e, r]) => t[e] === r))
        }
        getBluetoothServicesInfos() {
            return Object.values(iD.deviceModelByIds).reduce((e, t) => {
                let {
                    bluetoothSpec: r
                } = t;
                return r ? { ...e,
                    ...r.reduce((e, r) => ({ ...e,
                        [r.serviceUuid]: new ib(t, r.serviceUuid, r.writeUuid, r.writeCmdUuid, r.notifyUuid)
                    }), {})
                } : e
            }, {})
        }
        getBluetoothServices() {
            return Object.values(iD.deviceModelByIds).map(e => (e.bluetoothSpec || []).map(e => e.serviceUuid)).flat().filter(e => !!e)
        }
    };
    Y = iD, Q = "deviceModelByIds", Z = {
        [eg.NANO_S]: new i_({
            id: eg.NANO_S,
            productName: "Ledger Nano S",
            usbProductId: 16,
            bootloaderUsbProductId: 1,
            usbOnly: !0,
            memorySize: 327680,
            masks: [0x31100000]
        }),
        [eg.NANO_SP]: new i_({
            id: eg.NANO_SP,
            productName: "Ledger Nano S Plus",
            usbProductId: 80,
            bootloaderUsbProductId: 5,
            usbOnly: !0,
            memorySize: 1569792,
            masks: [0x33100000]
        }),
        [eg.NANO_X]: new i_({
            id: eg.NANO_X,
            productName: "Ledger Nano X",
            usbProductId: 64,
            bootloaderUsbProductId: 4,
            usbOnly: !1,
            memorySize: 2097152,
            masks: [0x33000000],
            bluetoothSpec: [{
                serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
                notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
                writeUuid: "13d63400-2c97-0004-0002-4c6564676572",
                writeCmdUuid: "13d63400-2c97-0004-0003-4c6564676572"
            }]
        }),
        [eg.STAX]: new i_({
            id: eg.STAX,
            productName: "Ledger Stax",
            usbProductId: 96,
            bootloaderUsbProductId: 6,
            usbOnly: !1,
            memorySize: 1569792,
            masks: [0x33200000],
            bluetoothSpec: [{
                serviceUuid: "13d63400-2c97-6004-0000-4c6564676572",
                notifyUuid: "13d63400-2c97-6004-0001-4c6564676572",
                writeUuid: "13d63400-2c97-6004-0002-4c6564676572",
                writeCmdUuid: "13d63400-2c97-6004-0003-4c6564676572"
            }]
        }),
        [eg.FLEX]: new i_({
            id: eg.FLEX,
            productName: "Ledger Flex",
            usbProductId: 112,
            bootloaderUsbProductId: 7,
            usbOnly: !1,
            memorySize: 1569792,
            masks: [0x33300000],
            bluetoothSpec: [{
                serviceUuid: "13d63400-2c97-3004-0000-4c6564676572",
                notifyUuid: "13d63400-2c97-3004-0001-4c6564676572",
                writeUuid: "13d63400-2c97-3004-0002-4c6564676572",
                writeCmdUuid: "13d63400-2c97-3004-0003-4c6564676572"
            }]
        })
    }, (d = "symbol" != typeof Q ? Q + "" : Q) in Y ? iS(Y, d, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Z
    }) : Y[d] = Z, iD = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? iA(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && iS(t, r, a), a
    })([iy()], iD);
    class iw {
        statusCode;
        data;
        constructor({
            statusCode: e,
            data: t
        }) {
            this.statusCode = e, this.data = t
        }
    }
    let iT = "u" > typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        iO = new Uint8Array(16),
        iB = [];
    for (let e = 0; e < 256; ++e) iB.push((e + 256).toString(16).slice(1));
    let iR = function(e, r, i) {
            if (iT && !r && !e) return iT();
            let n = (e = e || {}).random ? ? e.rng ? .() ? ? function() {
                if (!t) {
                    if ("u" < typeof crypto || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    t = crypto.getRandomValues.bind(crypto)
                }
                return t(iO)
            }();
            if (n.length < 16) throw Error("Random bytes length must be >= 16");
            if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, r) {
                if ((i = i || 0) < 0 || i + 16 > r.length) throw RangeError(`UUID byte range ${i}:${i+15} is out of buffer bounds`);
                for (let e = 0; e < 16; ++e) r[i + e] = n[e];
                return r
            }
            return function(e, t = 0) {
                return (iB[e[t + 0]] + iB[e[t + 1]] + iB[e[t + 2]] + iB[e[t + 3]] + "-" + iB[e[t + 4]] + iB[e[t + 5]] + "-" + iB[e[t + 6]] + iB[e[t + 7]] + "-" + iB[e[t + 8]] + iB[e[t + 9]] + "-" + iB[e[t + 10]] + iB[e[t + 11]] + iB[e[t + 12]] + iB[e[t + 13]] + iB[e[t + 14]] + iB[e[t + 15]]).toLowerCase()
            }(n)
        },
        iI = (e, t) => new Uint8Array(t).map((r, i) => e >> 8 * (t - 1 - i) & 255);
    class iC {
        _tag = "FramerOverflowError";
        originalError;
        constructor() {
            this.originalError = Error("Frame header length is greater than frame size")
        }
    }
    class iN {
        _tag = "FramerApduError";
        originalError;
        constructor() {
            this.originalError = Error("Frame offset is greater than apdu length")
        }
    }
    class iP {
        _tag = "ReceiverApduError";
        originalError;
        constructor(e) {
            this.originalError = Error(e ? ? "Unable to parse apdu")
        }
    }
    class ij {
        _tag = "DeviceSessionNotFound";
        originalError;
        constructor(e) {
            this.originalError = e ? ? Error("Device session not found")
        }
    }
    class iF {
        _header;
        _data;
        constructor({
            header: e,
            data: t
        }) {
            this._header = e, this._data = t
        }
        toString() {
            return JSON.stringify({
                header: this._header.toString(),
                data: this._data.toString()
            }, null, 2)
        }
        getRawData() {
            let e = this._header.getRawData(),
                t = new Uint8Array(e.length + this._data.length);
            return t.set(e, 0), t.set(this._data, e.length), t
        }
        getHeader() {
            return this._header
        }
        getData() {
            return this._data
        }
    }
    class iV {
        _uuid;
        _channel;
        _headTag;
        _index;
        _length;
        _dataLength;
        constructor({
            uuid: e,
            dataSize: t,
            index: r,
            headTag: i,
            length: n,
            channel: a
        }) {
            this._uuid = e, this._dataLength = t, this._index = r, this._headTag = i, this._length = n, this._channel = a
        }
        getDataLength() {
            return this._dataLength.map(e => {
                let t;
                return (t = e).reduce((e, r, i) => e + r * Math.pow(256, t.length - 1 - i), 0)
            })
        }
        setDataSize(e) {
            return this._dataLength = e, this
        }
        getLength() {
            return this._length
        }
        toString() {
            return JSON.stringify({
                uuid: this._uuid.toString(),
                dataSize: this._dataLength.extract() ? .toString(),
                index: this._index.toString(),
                headTag: this._headTag.toString(),
                length: this._length.toString(),
                channel: this._channel.extract() ? .toString()
            })
        }
        getRawData() {
            return new Uint8Array([...this._channel.caseOf({
                Just: e => [...e],
                Nothing: () => []
            }), ...this._headTag, ...this._index, ...this._dataLength.caseOf({
                Just: e => [...e],
                Nothing: () => []
            })])
        }
    }
    let iG = {
        LoggerPublisherServiceFactory: Symbol.for("LoggerPublisherServiceFactory")
    };
    var iL = Object.defineProperty,
        iM = Object.getOwnPropertyDescriptor;
    let iU = class {
        _channel;
        _logger;
        _pendingFrames;
        constructor({
            channel: e = eA.zero()
        }, t) {
            this._channel = e, this._logger = t("ApduReceiverService"), this._pendingFrames = []
        }
        handleFrame(e) {
            return this.getFrameFromBytes(e).map(e => {
                if (this._logger.debug("handle frame", {
                        data: {
                            frame: e.getRawData()
                        }
                    }), this._pendingFrames.push(e), !this._pendingFrames[0]) return eO;
                let t = this._pendingFrames[0].getHeader().getDataLength();
                return this.getCompleteFrame(t)
            })
        }
        getCompleteFrame(e) {
            return e.chain(e => {
                let t, r, i, n;
                if (!this.isComplete(e)) return this._logger.debug("frame is not complete, waiting for more"), eO;
                let a = (t = this.concatFrames(this._pendingFrames), r = e, t.slice(0, r)),
                    s = (i = a, n = a.length - 2, i.slice(0, n)),
                    o = a.slice(-2);
                return this._pendingFrames = [], eT(new iw({
                    data: s,
                    statusCode: o
                }))
            })
        }
        getFrameFromBytes(e) {
            let t = this._channel.caseOf({
                    Just: () => 2,
                    Nothing: () => 0
                }),
                r = e.slice(t, t + 1),
                i = e.slice(t + 1, t + 1 + 2),
                n = 0 === i.reduce((e, t) => e + t, 0);
            if (!n && 0 === this._pendingFrames.length) return eC(new iP);
            let a = t + 1 + 2,
                s = 2 * !!n;
            if (e.length < t + 1 + 2 + s) return eC(new iP("Unable to parse header from apdu"));
            let o = n ? eT(e.slice(a, a + s)) : eO,
                c = e.slice(a + s);
            return eN(new iF({
                header: new iV({
                    uuid: iR(),
                    channel: this._channel,
                    dataSize: o,
                    headTag: r,
                    index: i,
                    length: t + 1 + 2 + s
                }),
                data: c
            }))
        }
        isComplete(e) {
            return this._pendingFrames.reduce((e, t) => e + t.getData().length, 0) >= e
        }
        concatFrames(e) {
            return e.reduce((e, t) => Uint8Array.from([...e, ...t.getData()]), new Uint8Array(0))
        }
    };
    iU = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? iM(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && iL(t, r, a), a
    })([iy(), (h = ig(iG.LoggerPublisherServiceFactory), (e, t) => h(e, t, 1))], iU);
    var i$ = Object.defineProperty,
        iq = Object.getOwnPropertyDescriptor;
    let iz = class {
        _frameSize;
        _channel;
        _padding;
        _logger;
        constructor({
            frameSize: e,
            channel: t = eA.zero(),
            padding: r = !1
        }, i) {
            this._frameSize = e, this._channel = t, this._padding = r, this._logger = i("framer")
        }
        getFrames(e) {
            let t = [],
                r = 0,
                i = this.getFrameAtIndex(e, r);
            for (; i.isRight();) t.push(i.extract()), r += 1, i = this.getFrameAtIndex(e, r).mapLeft(e => (e instanceof iC ? this._logger.debug("Frames parsed", {
                data: {
                    count: r
                }
            }) : this._logger.error("Error while parsing frame", {
                data: {
                    error: e
                }
            }), e));
            return t
        }
        getFrameAtIndex(e, t) {
            let r = this.getFrameHeaderFrom(t, e.length),
                i = t * this._frameSize - this.getHeaderSizeSumFrom(t);
            if (i > e.length) return eC(new iC);
            if (r.getLength() > this._frameSize) return eC(new iN);
            let n = this._frameSize - r.getLength(),
                a = e.slice(0 === t ? 0 : i, 0 === t ? n : i + this._frameSize - r.getLength()),
                s = this._padding ? new Uint8Array(n).fill(0) : new Uint8Array(a.length < n ? a.length : n);
            return s.set(a, 0), eN(new iF({
                header: r,
                data: s
            }))
        }
        getFrameHeaderFrom(e, t) {
            let r = new iV({
                uuid: iR(),
                channel: this._channel.map(e => e.slice(-2)),
                headTag: new Uint8Array([5]),
                index: iI(e, 2),
                length: this.getFrameHeaderSizeFromIndex(e),
                dataSize: eA.zero()
            });
            return 0 === e && r.setDataSize(eA.of(iI(t, 2))), r
        }
        getHeaderSizeSumFrom(e) {
            let t = this.getFrameHeaderSizeFromIndex(0),
                r = 1;
            for (; r < e;) t += this.getFrameHeaderSizeFromIndex(r), r += 1;
            return t
        }
        getFrameHeaderSizeFromIndex(e) {
            return this._channel.caseOf({
                Just: () => 2,
                Nothing: () => 0
            }) + 2 + 1 + 2 * (0 === e)
        }
    };
    iz = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? iq(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && i$(t, r, a), a
    })([iy(), (p = ig(iG.LoggerPublisherServiceFactory), (e, t) => p(e, t, 1))], iz);
    let iH = {
            SendCommandUseCase: Symbol.for("SendCommandUseCase")
        },
        iW = {
            LocalConfigDataSource: Symbol.for("LocalConfigDataSource"),
            RemoteConfigDataSource: Symbol.for("RemoteConfigDataSource"),
            ConfigService: Symbol.for("ConfigService"),
            GetDmkVersionUseCase: Symbol.for("GetDmkVersionUseCase")
        },
        iK = {
            ApduSenderServiceFactory: Symbol.for("ApduSenderServiceFactory"),
            ApduReceiverServiceFactory: Symbol.for("ApduReceiverServiceFactory"),
            DeviceSessionService: Symbol.for("DeviceSessionService"),
            GetDeviceSessionStateUseCase: Symbol.for("GetDeviceSessionStateUseCase"),
            ToggleDeviceSessionRefresherUseCase: Symbol.for("ToggleDeviceSessionRefresherUseCase"),
            CloseSessionsUseCase: Symbol.for("CloseSessionsUseCase")
        },
        iJ = {
            StartDiscoveringUseCase: Symbol.for("StartDiscoveringUseCase"),
            StopDiscoveringUseCase: Symbol.for("StopDiscoveringUseCase"),
            ConnectUseCase: Symbol.for("ConnectUseCase"),
            DisconnectUseCase: Symbol.for("DisconnectUseCase"),
            GetConnectedDeviceUseCase: Symbol.for("GetConnectedDeviceUseCase"),
            ListenToKnownDevicesUseCase: Symbol.for("ListenToKnownDevicesUseCase"),
            ListenToConnectedDeviceUseCase: Symbol.for("ListenToConnectedDeviceUseCase"),
            ListConnectedDevicesUseCase: Symbol.for("ListConnectedDevicesUseCase")
        },
        iX = {
            SendApduUseCase: Symbol.for("SendApduUseCase")
        };
    var iY = Object.defineProperty,
        iQ = Object.getOwnPropertyDescriptor,
        iZ = (e, t) => (r, i) => t(r, i, e);
    let i0 = class {
        _sessionService;
        _logger;
        constructor(e, t) {
            this._sessionService = e, this._logger = t("SendCommandUseCase")
        }
        async execute({
            sessionId: e,
            command: t
        }) {
            return this._sessionService.getDeviceSessionById(e).caseOf({
                Right: async e => await e.sendCommand(t),
                Left: e => {
                    throw this._logger.error("Error getting session", {
                        data: {
                            error: e
                        }
                    }), e
                }
            })
        }
    };
    i0 = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? iQ(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && iY(t, r, a), a
    })([iy(), iZ(0, ig(iK.DeviceSessionService)), iZ(1, ig(iG.LoggerPublisherServiceFactory))], i0);
    var i1 = Object.defineProperty,
        i3 = Object.getOwnPropertyDescriptor;
    let i2 = class {
        execute = vi.fn(() => "stub")
    };
    i2 = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? i3(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && i1(t, r, a), a
    })([iy()], i2);
    var i6 = Object.defineProperty,
        i5 = Object.getOwnPropertyDescriptor,
        i4 = (e, t) => (r, i) => t(r, i, e);
    let i7 = class {
        _sessionService;
        _logger;
        constructor(e, t) {
            this._sessionService = e, this._logger = t("ExecuteDeviceActionUseCase")
        }
        execute({
            sessionId: e,
            deviceAction: t
        }) {
            return this._sessionService.getDeviceSessionById(e).caseOf({
                Right: e => e.executeDeviceAction(t),
                Left: e => {
                    throw this._logger.error("Error getting session", {
                        data: {
                            error: e
                        }
                    }), e
                }
            })
        }
    };
    i7 = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? i5(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && i6(t, r, a), a
    })([iy(), i4(0, ig(iK.DeviceSessionService)), i4(1, ig(iG.LoggerPublisherServiceFactory))], i7);
    let i8 = {
        ExecuteDeviceActionUseCase: Symbol.for("ExecuteDeviceActionUseCase")
    };
    class i9 {
        constructor(e) {
            this.err = e, this.originalError = e
        }
        _tag = "ApiCallError";
        originalError
    }
    class ne {
        constructor(e) {
            this.err = e, this.originalError = e
        }
        _tag = "ParseResponseError";
        originalError
    }
    class nt {
        constructor(e) {
            this.err = e, this.originalError = e
        }
        _tag = "JSONParseError";
        originalError
    }
    class nr {
        constructor(e) {
            this.err = e, this.originalError = e
        }
        _tag = "ReadFileError";
        originalError
    }
    var ni = e.i(993440),
        nn = Object.defineProperty,
        na = Object.getOwnPropertyDescriptor;
    let ns = {
            name: ni.default.name,
            version: ni.default.version
        },
        no = class {
            getConfig() {
                return eB.encase(() => JSON.stringify(ns)).mapLeft(e => new nr(e)).chain(e => eB.encase(() => {
                    let t = JSON.parse(e);
                    if ("object" == typeof t && null !== t && "version" in t && "name" in t && "string" == typeof t.version && "string" == typeof t.name) return t;
                    throw Error("Invalid config file")
                }).mapLeft(e => new nt(e)))
            }
        };
    no = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? na(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && nn(t, r, a), a
    })([iy()], no);
    var nc = Object.defineProperty,
        nl = Object.getOwnPropertyDescriptor;
    let nu = class {
        getConfig() {
            return eB.of({
                name: "DeviceSDK",
                version: "0.0.0-stub.1"
            })
        }
    };
    nu = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? nl(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && nc(t, r, a), a
    })([iy()], nu);
    var nd = Object.defineProperty,
        nh = Object.getOwnPropertyDescriptor;
    let np = class {
        async getConfig() {
            let e = await this._callApi();
            if (e.isLeft()) return eC(new i9(e.extract()));
            if (!e.extract().ok) return eC(new i9(Error("response not ok")));
            let t = await e.extract().json();
            return t.isLeft() ? eC(new nt) : t.chain(e => this._parseResponse(e)).map(e => e)
        }
        _parseResponse(e) {
            let {
                name: t,
                version: r
            } = e;
            return t && r ? eB.of({
                name: t,
                version: r
            }) : eC(new ne)
        }
        _callApi() {
            return new Promise(e => {
                e(eB.of({
                    ok: !0,
                    json: async () => new Promise(e => {
                        e(eB.of({
                            name: "DeviceSDK",
                            version: "0.0.0-fake.1",
                            yolo: "yolo"
                        }))
                    })
                }))
            })
        }
    };
    np = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? nh(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && nd(t, r, a), a
    })([iy()], np);
    var nf = Object.defineProperty,
        nx = Object.getOwnPropertyDescriptor;
    let nm = class {
        async getConfig() {
            return new Promise(e => e(eB.of({
                name: "DeviceSDK",
                version: "0.0.0-fake.2"
            })))
        }
    };
    nm = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? nx(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && nf(t, r, a), a
    })([iy()], nm);
    var ny = Object.defineProperty,
        nk = Object.getOwnPropertyDescriptor,
        ng = (e, t) => (r, i) => t(r, i, e);
    let nv = class {
        _local;
        _remote;
        _logger;
        constructor(e, t, r) {
            this._local = e, this._remote = t, this._logger = r("config")
        }
        async getDmkConfig() {
            let e = this._local.getConfig().ifLeft(e => {
                this._logger.error("Local config not available", {
                    data: {
                        error: e
                    }
                })
            });
            if (e.isRight()) {
                let t = e.extract();
                return this._logger.info("Local config available", {
                    data: {
                        config: t
                    }
                }), t
            }
            return this._remote.getConfig().then(e => e.mapLeft(e => (this._logger.error("Local config available", {
                data: {
                    error: e
                }
            }), {
                name: "DeadDmk",
                version: "0.0.0-dead.1"
            })).extract())
        }
    };
    nv = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? nk(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && ny(t, r, a), a
    })([iy(), ng(0, ig(iW.LocalConfigDataSource)), ng(1, ig(iW.RemoteConfigDataSource)), ng(2, ig(iG.LoggerPublisherServiceFactory))], nv);
    var nb = Object.defineProperty,
        nE = Object.getOwnPropertyDescriptor;
    let n_ = class {
        _configService;
        constructor(e) {
            this._configService = e
        }
        async getDmkVersion() {
            return (await this._configService.getDmkConfig()).version
        }
    };
    n_ = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? nE(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && nb(t, r, a), a
    })([iy(), (f = ig(iW.ConfigService), (e, t) => f(e, t, 0))], n_);
    let nS = {
        DeviceModelDataSource: Symbol.for("DeviceModelDataSource")
    };
    var nA = Object.defineProperty,
        nD = Object.getOwnPropertyDescriptor,
        nw = (e, t) => (r, i) => t(r, i, e);
    let nT = class {
        constructor(e, t) {
            this._sessionService = e, this._logger = t("ToggleDeviceSessionRefresherUseCase")
        }
        _logger;
        execute({
            sessionId: e,
            enabled: t
        }) {
            return this._sessionService.getDeviceSessionById(e).caseOf({
                Left: e => {
                    throw this._logger.error("Error getting device session", {
                        data: {
                            error: e
                        }
                    }), e
                },
                Right: e => e.toggleRefresher(t)
            })
        }
    };
    nT = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? nD(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && nA(t, r, a), a
    })([iy(), nw(0, ig(iK.DeviceSessionService)), nw(1, ig(iG.LoggerPublisherServiceFactory))], nT);
    var nO = Object.defineProperty,
        nB = Object.getOwnPropertyDescriptor;
    let nR = class {
        _sessions;
        _logger;
        _sessionsSubject;
        constructor(e) {
            this._sessions = [], this._sessionsSubject = new tG, this._logger = e("DeviceSessionService")
        }
        get sessionsObs() {
            return this._sessionsSubject.asObservable()
        }
        addDeviceSession(e) {
            return this._sessions.find(t => t.id === e.id) ? this._logger.warn("DeviceSession already exists", {
                data: {
                    deviceSession: e
                }
            }) : (this._sessions.push(e), this._sessionsSubject.next(e), this._logger.info("DeviceSession added", {
                data: {
                    deviceSession: e
                }
            })), this
        }
        removeDeviceSession(e) {
            let t = this._sessions.find(t => t.id === e);
            return t ? (t.close(), this._sessions = this._sessions.filter(t => t.id !== e), this._logger.info("DeviceSession removed", {
                data: {
                    sessionId: e
                }
            })) : this._logger.warn("DeviceSession not found", {
                data: {
                    sessionId: e
                }
            }), this
        }
        getDeviceSessionById(e) {
            return eA.fromNullable(this._sessions.find(t => t.id === e)).toEither(new ij)
        }
        getDeviceSessionByDeviceId(e) {
            return eA.fromNullable(this._sessions.find(t => t.connectedDevice.id === e)).toEither(new ij)
        }
        getDeviceSessions() {
            return this._sessions
        }
    };
    nR = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? nB(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && nO(t, r, a), a
    })([iy(), (x = ig(iG.LoggerPublisherServiceFactory), (e, t) => x(e, t, 0))], nR);
    var nI = Object.defineProperty,
        nC = Object.getOwnPropertyDescriptor;
    let nN = class {
        _sessionService;
        constructor(e) {
            this._sessionService = e
        }
        execute() {
            for (let e of this._sessionService.getDeviceSessions()) e.close()
        }
    };
    nN = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? nC(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && nI(t, r, a), a
    })([iy(), (m = ig(iK.DeviceSessionService), (e, t) => m(e, t, 0))], nN);
    var nP = Object.defineProperty,
        nj = Object.getOwnPropertyDescriptor,
        nF = (e, t) => (r, i) => t(r, i, e);
    let nV = class {
        _sessionService;
        _logger;
        constructor(e, t) {
            this._sessionService = e, this._logger = t("GetDeviceSessionStateUseCase")
        }
        execute({
            sessionId: e
        }) {
            return this._sessionService.getDeviceSessionById(e).caseOf({
                Left: e => {
                    throw this._logger.error("Error getting session device", {
                        data: {
                            error: e
                        }
                    }), e
                },
                Right: e => e.state
            })
        }
    };
    nV = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? nj(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && nP(t, r, a), a
    })([iy(), nF(0, ig(iK.DeviceSessionService)), nF(1, ig(iG.LoggerPublisherServiceFactory))], nV);
    class nG {
        _tag = "GeneralDmkError";
        originalError;
        constructor(e) {
            e instanceof Error ? this.originalError = e : void 0 !== e && (this.originalError = Error(String(e)))
        }
    }
    class nL extends nG {
        constructor(e) {
            super(e), this.err = e
        }
        _tag = "DeviceNotRecognizedError"
    }
    class nM extends nG {
        constructor(e) {
            super(e), this.err = e
        }
        _tag = "NoAccessibleDeviceError"
    }
    class nU extends nG {
        constructor(e) {
            super(e), this.err = e
        }
        _tag = "ConnectionOpeningError"
    }
    class n$ extends nG {
        constructor(e) {
            super(e), this.err = e
        }
        _tag = "UnknownDeviceError"
    }
    class nq extends nG {
        constructor(e) {
            super(e), this.err = e
        }
        _tag = "TransportNotSupportedError"
    }
    class nz extends nG {
        constructor(e) {
            super(e), this.err = e
        }
        _tag = "ReconnectionFailedError"
    }
    class nH extends nG {
        constructor(e) {
            super(e), this.err = e
        }
        _tag = "TransportAlreadyExistsError"
    }
    class nW extends nG {
        constructor(e) {
            super(e), this.err = e
        }
        _tag = "NoTransportProvidedError"
    }
    var nK = function(e) {
        function t(t) {
            var r = e.call(this) || this;
            return r._value = t, r
        }
        return (0, eY.__extends)(t, e), Object.defineProperty(t.prototype, "value", {
            get: function() {
                return this.getValue()
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype._subscribe = function(t) {
            var r = e.prototype._subscribe.call(this, t);
            return r.closed || t.next(this._value), r
        }, t.prototype.getValue = function() {
            var e = this.hasError,
                t = this.thrownError,
                r = this._value;
            if (e) throw t;
            return this._throwIfClosed(), r
        }, t.prototype.next = function(t) {
            e.prototype.next.call(this, this._value = t)
        }, t
    }(tF);

    function nJ(e, t) {
        return tm(function(r, i) {
            var n = 0;
            r.subscribe(ty(i, function(r) {
                i.next(e.call(t, r, n++))
            }))
        })
    }

    function nX(e, t, r) {
        return (void 0 === r && (r = 1 / 0), eQ(t)) ? nX(function(r, i) {
            return nJ(function(e, n) {
                return t(r, e, i, n)
            })(tC(e(r, i)))
        }, r) : ("number" == typeof t && (r = t), tm(function(t, i) {
            var n, a, s, o, c, l, u, d;
            return n = r, a = [], s = 0, o = 0, c = !1, l = function() {
                    !c || a.length || s || i.complete()
                }, u = function(e) {
                    return s < n ? d(e) : a.push(e)
                }, d = function(t) {
                    s++;
                    var r = !1;
                    tC(e(t, o++)).subscribe(ty(i, function(e) {
                        i.next(e)
                    }, function() {
                        r = !0
                    }, void 0, function() {
                        if (r) try {
                            for (s--; a.length && s < n;) ! function() {
                                var e = a.shift();
                                d(e)
                            }();
                            l()
                        } catch (e) {
                            i.error(e)
                        }
                    }))
                }, t.subscribe(ty(i, u, function() {
                    c = !0, l()
                })),
                function() {}
        }))
    }

    function nY(e) {
        return void 0 === e && (e = 1 / 0), nX(tp, e)
    }

    function nQ(e) {
        return e && eQ(e.schedule)
    }

    function nZ(e) {
        return e[e.length - 1]
    }

    function n0(e) {
        return nQ(nZ(e)) ? e.pop() : void 0
    }

    function n1(e, t) {
        return void 0 === t && (t = 0), tm(function(r, i) {
            r.subscribe(ty(i, function(r) {
                return tP(i, e, function() {
                    return i.next(r)
                }, t)
            }, function() {
                return tP(i, e, function() {
                    return i.complete()
                }, t)
            }, function(r) {
                return tP(i, e, function() {
                    return i.error(r)
                }, t)
            }))
        })
    }

    function n3(e, t) {
        return void 0 === t && (t = 0), tm(function(r, i) {
            i.add(e.schedule(function() {
                return r.subscribe(i)
            }, t))
        })
    }

    function n2(e, t) {
        if (!e) throw Error("Iterable cannot be null");
        return new tf(function(r) {
            tP(r, t, function() {
                var i = e[Symbol.asyncIterator]();
                tP(r, t, function() {
                    i.next().then(function(e) {
                        e.done ? r.complete() : r.next(e.value)
                    })
                }, 0, !0)
            })
        })
    }

    function n6(e, t) {
        return t ? function(e, t) {
            if (null != e) {
                if (eQ(e[th])) return tC(e).pipe(n3(t), n1(t));
                if (tA(e)) return new tf(function(r) {
                    var i = 0;
                    return t.schedule(function() {
                        i === e.length ? r.complete() : (r.next(e[i++]), r.closed || this.schedule())
                    })
                });
                if (tD(e)) return tC(e).pipe(n3(t), n1(t));
                if (tw(e)) return n2(e, t);
                if (tB(e)) return new tf(function(r) {
                    var i;
                    return tP(r, t, function() {
                            i = e[tO](), tP(r, t, function() {
                                var e, t, n;
                                try {
                                    t = (e = i.next()).value, n = e.done
                                } catch (e) {
                                    r.error(e);
                                    return
                                }
                                n ? r.complete() : r.next(t)
                            }, 0, !0)
                        }),
                        function() {
                            return eQ(null == i ? void 0 : i.return) && i.return()
                        }
                });
                if (tI(e)) return n2(tR(e), t)
            }
            throw tT(e)
        }(e, t) : tC(e)
    }
    var n5 = new tf(function(e) {
        return e.complete()
    });

    function n4(e) {
        return e <= 0 ? function() {
            return n5
        } : tm(function(t, r) {
            var i = 0;
            t.subscribe(ty(r, function(t) {
                ++i <= e && (r.next(t), e <= i && r.complete())
            }))
        })
    }

    function n7(e, t, r) {
        void 0 === e && (e = 0), void 0 === r && (r = tS);
        var i = -1;
        return null != t && (nQ(t) ? r = t : i = t), new tf(function(t) {
            var n, a = (n = e) instanceof Date && !isNaN(n) ? e - r.now() : e;
            a < 0 && (a = 0);
            var s = 0;
            return r.schedule(function() {
                t.closed || (t.next(s++), 0 <= i ? this.schedule(void 0, i) : t.complete())
            }, a)
        })
    }

    function n8(e, t) {
        return tm(function(r, i) {
            var n = 0;
            r.subscribe(ty(i, function(r) {
                return e.call(t, r, n++) && i.next(r)
            }))
        })
    }

    function n9(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = tS), e < 0 && (e = 0), n7(e, e, t)
    }

    function ae() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = n0(e);
        return n6(e, r)
    }
    var at = Array.isArray;

    function ar(e, t) {
        return tm(function(r, i) {
            var n = null,
                a = 0,
                s = !1,
                o = function() {
                    return s && !n && i.complete()
                };
            r.subscribe(ty(i, function(r) {
                null == n || n.unsubscribe();
                var s = 0,
                    c = a++;
                tC(e(r, c)).subscribe(n = ty(i, function(e) {
                    return i.next(t ? t(r, e, c, s++) : e)
                }, function() {
                    n = null, o()
                }))
            }, function() {
                s = !0, o()
            }))
        })
    }
    var ai = Object.defineProperty,
        an = Object.getOwnPropertyDescriptor;
    let aa = class {
        _logger;
        _getAppAndVersionCommand = new em;
        _getOsVersionCommand = new eb;
        _deviceStatus;
        _subscription;
        _refreshInterval;
        _deviceModelId;
        _sendApduFn;
        _updateStateFn;
        constructor({
            refreshInterval: e,
            deviceStatus: t,
            sendApduFn: r,
            updateStateFn: i,
            deviceModelId: n
        }, a) {
            this._deviceStatus = t, this._logger = a, this._sendApduFn = r, this._updateStateFn = i, this._refreshInterval = e, this._deviceModelId = n, this.start()
        }
        start() {
            if (this._subscription && !this._subscription.closed) return void this._logger.warn("Refresher already started");
            let e = this._deviceModelId === eg.NANO_S ? this._getNanoSRefreshObservable(2 * this._refreshInterval) : this._getDefaultRefreshObservable(n9(this._refreshInterval));
            this._subscription = e.subscribe(e => {
                e && "SUCCESS" === e.status && this._updateStateFn(t => ({ ...t,
                    sessionStateType: tL.ReadyWithoutSecureChannel,
                    deviceStatus: this._deviceStatus,
                    currentApp: e.data,
                    installedApps: "installedApps" in t ? t.installedApps : []
                }))
            })
        }
        _getDefaultRefreshObservable(e = n6([0])) {
            return e.pipe(n8(() => ![eE.BUSY, eE.NOT_CONNECTED].includes(this._deviceStatus)), ar(async () => {
                let e = this._getAppAndVersionCommand.getApdu().getRawApdu();
                return await this._sendApduFn(e)
            }), nJ(e => e.caseOf({
                Left: e => (this._logger.error("Error in sending APDU when polling", {
                    data: {
                        error: e
                    }
                }), null),
                Right: e => {
                    try {
                        return this._getAppAndVersionCommand.parseResponse(e)
                    } catch (e) {
                        return this._logger.error("Error in parsing APDU response", {
                            data: {
                                error: e
                            }
                        }), null
                    }
                }
            })), n8(e => null !== e))
        }
        _getNanoSRefreshObservable(e) {
            var t, r;
            let i = this._getDefaultRefreshObservable().pipe(ar(async e => {
                    let t = this._getOsVersionCommand.getApdu().getRawApdu();
                    return await this._sendApduFn(t), e
                })),
                n = ae(null).pipe((void 0 === t && (t = tS), r = n7(e, t), function e(t, r) {
                    return r ? function(i) {
                        return function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return nY(1)(n6(e, n0(e)))
                        }(r.pipe(n4(1), tm(function(e, t) {
                            e.subscribe(ty(t, e9))
                        })), i.pipe(e(t)))
                    } : nX(function(e, r) {
                        return tC(t(e, r)).pipe(n4(1), nJ(function() {
                            return e
                        }))
                    })
                }(function() {
                    return r
                })), nJ(e => {
                    this._logger.warn("Nanos refresh timeout, setting device status to LOCKED"), this._updateStateFn(e => ({ ...e,
                        deviceStatus: eE.LOCKED
                    }))
                }));
            return n9(e + 100).pipe(ar(() => (function() {
                for (var e, t, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                return 1 === (r = 1 === (t = r).length && at(t[0]) ? t[0] : t).length ? tC(r[0]) : new tf((e = r, function(t) {
                    for (var r = [], i = function(i) {
                            r.push(tC(e[i]).subscribe(ty(t, function(e) {
                                if (r) {
                                    for (var n = 0; n < r.length; n++) n !== i && r[n].unsubscribe();
                                    r = null
                                }
                                t.next(e)
                            })))
                        }, n = 0; r && !t.closed && n < e.length; n++) i(n)
                }))
            })(i, n)))
        }
        setDeviceStatus(e) {
            e === eE.NOT_CONNECTED && this.stop(), this._deviceStatus = e
        }
        stop() {
            !this._subscription || this._subscription.closed || (this._subscription.unsubscribe(), this._subscription = void 0)
        }
    };
    aa = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? an(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && ai(t, r, a), a
    })([iy()], aa);
    class as {
        _id;
        _connectedDevice;
        _deviceState;
        _refresher;
        _managerApiService;
        _secureChannelService;
        constructor({
            connectedDevice: e,
            id: t = iR()
        }, r, i, n) {
            this._id = t, this._connectedDevice = e, this._deviceState = new nK({
                sessionStateType: tL.Connected,
                deviceStatus: eE.CONNECTED,
                deviceModelId: this._connectedDevice.deviceModel.id
            }), this._refresher = new aa({
                refreshInterval: 1e3,
                deviceStatus: eE.CONNECTED,
                deviceModelId: this._connectedDevice.deviceModel.id,
                sendApduFn: e => this.sendApdu(e, {
                    isPolling: !0,
                    triggersDisconnection: !1
                }),
                updateStateFn: e => {
                    let t = this._deviceState.getValue();
                    this.setDeviceSessionState(e(t))
                }
            }, r("device-session-refresher")), this._managerApiService = i, this._secureChannelService = n
        }
        get id() {
            return this._id
        }
        get connectedDevice() {
            return this._connectedDevice
        }
        get state() {
            return this._deviceState.asObservable()
        }
        setDeviceSessionState(e) {
            this._deviceState.next(e)
        }
        updateDeviceStatus(e) {
            let t = this._deviceState.getValue();
            this._refresher.setDeviceStatus(e), this._deviceState.next({ ...t,
                deviceStatus: e
            })
        }
        async sendApdu(e, t = {
            isPolling: !1,
            triggersDisconnection: !1
        }) {
            return this._deviceState.getValue().deviceStatus === eE.BUSY ? eC(new eh) : (t.isPolling || this.updateDeviceStatus(eE.BUSY), (await this._connectedDevice.sendApdu(e, t.triggersDisconnection)).ifRight(e => {
                el.isLockedDeviceResponse(e) ? this.updateDeviceStatus(eE.LOCKED) : this.updateDeviceStatus(eE.CONNECTED)
            }).ifLeft(() => {
                this.updateDeviceStatus(eE.CONNECTED)
            }))
        }
        async sendCommand(e) {
            let t = e.getApdu();
            return (await this.sendApdu(t.getRawApdu(), {
                isPolling: !1,
                triggersDisconnection: e.triggersDisconnection ? ? !1
            })).caseOf({
                Left: e => {
                    throw e
                },
                Right: t => e.parseResponse(t, this._connectedDevice.deviceModel.id)
            })
        }
        executeDeviceAction(e) {
            let {
                observable: t,
                cancel: r
            } = e._execute({
                sendApdu: async e => this.sendApdu(e),
                sendCommand: async e => this.sendCommand(e),
                getDeviceSessionState: () => this._deviceState.getValue(),
                getDeviceSessionStateObservable: () => this.state,
                setDeviceSessionState: e => (this.setDeviceSessionState(e), this._deviceState.getValue()),
                getManagerApiService: () => this._managerApiService,
                getSecureChannelService: () => this._secureChannelService
            });
            return {
                observable: t,
                cancel: r
            }
        }
        close() {
            this.updateDeviceStatus(eE.NOT_CONNECTED), this._deviceState.complete(), this._refresher.stop()
        }
        toggleRefresher(e) {
            e ? this._refresher.start() : this._refresher.stop()
        }
    }
    let ao = {
            ManagerApiService: Symbol.for("ManagerApiService"),
            ManagerApiDataSource: Symbol.for("ManagerApiDataSource"),
            DmkConfig: Symbol.for("ManagerApiDmkConfig")
        },
        ac = {
            SecureChannelService: Symbol.for("SecureChannelService"),
            SecureChannelDataSource: Symbol.for("SecureChannelDataSource"),
            DmkConfig: Symbol.for("SecureChannelDmkConfig")
        },
        al = {
            DmkConfig: Symbol.for("TransportDmkConfig"),
            TransportService: Symbol.for("TransportService"),
            TransportsInput: Symbol.for("TransportsInput")
        };
    var au = Object.defineProperty,
        ad = Object.getOwnPropertyDescriptor,
        ah = (e, t) => (r, i) => t(r, i, e);
    let ap = class {
        _transportService;
        _sessionService;
        _loggerFactory;
        _managerApi;
        _secureChannel;
        _logger;
        constructor(e, t, r, i, n) {
            this._sessionService = t, this._transportService = e, this._loggerFactory = r, this._logger = r("ConnectUseCase"), this._managerApi = i, this._secureChannel = n
        }
        handleDeviceDisconnect(e) {
            this._sessionService.getDeviceSessionByDeviceId(e).map(e => {
                this._sessionService.removeDeviceSession(e.id)
            })
        }
        async execute({
            device: e
        }) {
            let t = this._transportService.getTransport(e.transport);
            return eW.liftEither(t.toEither(new nq(Error("Unknown transport")))).chain(async t => t.connect({
                deviceId: e.id,
                onDisconnect: e => this.handleDeviceDisconnect(e)
            })).ifLeft(t => {
                this._logger.error("Error connecting to device", {
                    data: {
                        deviceId: e.id,
                        error: t
                    }
                })
            }).map(e => {
                let t = new as({
                    connectedDevice: e
                }, this._loggerFactory, this._managerApi, this._secureChannel);
                return this._sessionService.addDeviceSession(t), t.id
            }).caseOf({
                Left: e => {
                    throw e
                },
                Right: e => e
            })
        }
    };
    ap = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? ad(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && au(t, r, a), a
    })([iy(), ah(0, ig(al.TransportService)), ah(1, ig(iK.DeviceSessionService)), ah(2, ig(iG.LoggerPublisherServiceFactory)), ah(3, ig(ao.ManagerApiService)), ah(4, ig(ac.SecureChannelService))], ap);
    var af = Object.defineProperty,
        ax = Object.getOwnPropertyDescriptor,
        am = (e, t) => (r, i) => t(r, i, e);
    let ay = class {
        _transportService;
        _sessionService;
        _logger;
        constructor(e, t, r) {
            this._sessionService = t, this._transportService = e, this._logger = r("DisconnectUseCase")
        }
        async execute({
            sessionId: e
        }) {
            return eW(async ({
                liftEither: t
            }) => {
                let r = await t(this._sessionService.getDeviceSessionById(e).ifLeft(t => {
                        this._logger.error("Device session not found", {
                            data: {
                                sessionId: e,
                                error: t
                            }
                        })
                    })),
                    i = r.connectedDevice.transport,
                    n = await t(this._transportService.getTransport(i).toEither(new nq(Error("Unknown transport"))));
                r.close(), this._sessionService.removeDeviceSession(e), await n.disconnect({
                    connectedDevice: r.connectedDevice
                })
            }).caseOf({
                Left: e => {
                    throw this._logger.error("Error disconnecting from device", {
                        data: {
                            error: e
                        }
                    }), e
                },
                Right: () => {}
            })
        }
    };
    ay = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? ax(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && af(t, r, a), a
    })([iy(), am(0, ig(al.TransportService)), am(1, ig(iK.DeviceSessionService)), am(2, ig(iG.LoggerPublisherServiceFactory))], ay);
    class ak {
        id;
        sessionId;
        modelId;
        name;
        type;
        constructor({
            transportConnectedDevice: {
                id: e,
                deviceModel: {
                    id: t,
                    productName: r
                },
                type: i
            },
            sessionId: n
        }) {
            this.id = e, this.sessionId = n, this.modelId = t, this.name = r, this.type = i
        }
    }
    var ag = Object.defineProperty,
        av = Object.getOwnPropertyDescriptor,
        ab = (e, t) => (r, i) => t(r, i, e);
    let aE = class {
        _sessionService;
        _logger;
        constructor(e, t) {
            this._sessionService = e, this._logger = t("GetConnectedDeviceUseCase")
        }
        execute({
            sessionId: e
        }) {
            return this._sessionService.getDeviceSessionById(e).caseOf({
                Right: e => new ak({
                    sessionId: e.id,
                    transportConnectedDevice: e.connectedDevice
                }),
                Left: e => {
                    throw this._logger.error("Error getting session", {
                        data: {
                            error: e
                        }
                    }), e
                }
            })
        }
    };
    aE = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? av(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && ag(t, r, a), a
    })([iy(), ab(0, ig(iK.DeviceSessionService)), ab(1, ig(iG.LoggerPublisherServiceFactory))], aE);
    var a_ = Object.defineProperty,
        aS = Object.getOwnPropertyDescriptor,
        aA = (e, t) => (r, i) => t(r, i, e);
    let aD = class {
        _sessionService;
        _logger;
        constructor(e, t) {
            this._sessionService = e, this._logger = t("ListConnectedDeviceUseCase")
        }
        execute() {
            return this._logger.info("Listing connected devices"), this._sessionService.getDeviceSessions().map(e => new ak({
                transportConnectedDevice: e.connectedDevice,
                sessionId: e.id
            }))
        }
    };
    aD = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? aS(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && a_(t, r, a), a
    })([iy(), aA(0, ig(iK.DeviceSessionService)), aA(1, ig(iG.LoggerPublisherServiceFactory))], aD);
    var aw = Object.defineProperty,
        aT = Object.getOwnPropertyDescriptor,
        aO = (e, t) => (r, i) => t(r, i, e);
    let aB = class {
        constructor(e, t) {
            this._sessionService = e, this._logger = t("ListenToConnectedDeviceUseCase")
        }
        _logger;
        execute() {
            return this._logger.info("Observe connected devices"), this._sessionService.sessionsObs.pipe(nJ(e => new ak({
                transportConnectedDevice: e.connectedDevice,
                sessionId: e.id
            })))
        }
    };
    aB = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? aT(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && aw(t, r, a), a
    })([iy(), aO(0, ig(iK.DeviceSessionService)), aO(1, ig(iG.LoggerPublisherServiceFactory))], aB);
    var aR = Object.defineProperty,
        aI = Object.getOwnPropertyDescriptor;
    let aC = class {
        _transports;
        constructor(e) {
            this._transports = e.getAllTransports()
        }
        mapTransportDiscoveredDeviceToDiscoveredDevice(e) {
            return {
                id: e.id,
                deviceModel: new ev({
                    id: e.id,
                    model: e.deviceModel.id,
                    name: e.deviceModel.productName
                }),
                transport: e.transport
            }
        }
        execute() {
            return 0 === this._transports.length ? n6([
                []
            ]) : (function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                var i = n0(t),
                    n = (e = 1 / 0, "number" == typeof nZ(t) ? t.pop() : e);
                return t.length ? 1 === t.length ? tC(t[0]) : nY(n)(n6(t, i)) : n5
            })(...this._transports.map((e, t) => e.listenToKnownDevices().pipe(nJ(e => ({
                index: t,
                arr: e
            }))))).pipe(function(e, t) {
                var r;
                return tm((r = arguments.length >= 2, function(i, n) {
                    var a = r,
                        s = t,
                        o = 0;
                    i.subscribe(ty(n, function(t) {
                        var r = o++;
                        s = a ? e(s, t, r) : (a = !0, t), n.next(s)
                    }, void 0))
                }))
            }((e, {
                index: t,
                arr: r
            }) => (e[t] = r, e), {}), nJ(e => Object.values(e).flat().map(this.mapTransportDiscoveredDeviceToDiscoveredDevice)))
        }
    };
    aC = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? aI(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && aR(t, r, a), a
    })([iy(), (y = ig(al.TransportService), (e, t) => y(e, t, 0))], aC);
    var aN = Object.defineProperty,
        aP = Object.getOwnPropertyDescriptor;
    let aj = class {
        constructor(e) {
            this._transportService = e
        }
        mapDiscoveredDevice(e) {
            let t = new ev({
                id: e.id,
                model: e.deviceModel.id,
                name: e.deviceModel.productName
            });
            return {
                id: e.id,
                deviceModel: t,
                transport: e.transport
            }
        }
        execute({
            transport: e
        }) {
            return e ? this._transportService.getTransport(e).caseOf({
                Just: e => e.startDiscovering().pipe(nJ(e => this.mapDiscoveredDevice(e))),
                Nothing: () => {
                    throw new nq(Error("Unknown transport"))
                }
            }) : ae(...this._transportService.getAllTransports()).pipe(nX(e => e.startDiscovering().pipe(nJ(e => this.mapDiscoveredDevice(e)))))
        }
    };
    aj = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? aP(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && aN(t, r, a), a
    })([iy(), (k = ig(al.TransportService), (e, t) => k(e, t, 0))], aj);
    var aF = Object.defineProperty,
        aV = Object.getOwnPropertyDescriptor;
    let aG = class {
        constructor(e) {
            this.transportService = e
        }
        execute() {
            for (let e of this.transportService.getAllTransports()) e.stopDiscovering()
        }
    };
    aG = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? aV(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && aF(t, r, a), a
    })([iy(), (g = ig(al.TransportService), (e, t) => g(e, t, 0))], aG);
    var aL = ((v = aL || {})[v.Fatal = 0] = "Fatal", v[v.Error = 1] = "Error", v[v.Warning = 2] = "Warning", v[v.Info = 3] = "Info", v[v.Debug = 4] = "Debug", v),
        aM = Object.defineProperty,
        aU = Object.getOwnPropertyDescriptor;
    let a$ = class {
        subscribers;
        tag;
        constructor(e, t) {
            this.subscribers = e, this.tag = t
        }
        _log(e, t, r) {
            this.subscribers.forEach(i => {
                let n = {
                    timestamp: Date.now(),
                    tag: this.tag,
                    ...r
                };
                i.log(e, t, n)
            })
        }
        info(e, t) {
            this._log(aL.Info, e, t)
        }
        warn(e, t) {
            this._log(aL.Warning, e, t)
        }
        debug(e, t) {
            this._log(aL.Debug, e, t)
        }
        error(e, t) {
            this._log(aL.Error, e, t)
        }
    };
    a$ = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? aU(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && aM(t, r, a), a
    })([iy()], a$);
    var aq = e.i(350461);

    function az(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    let {
        toString: aH
    } = Object.prototype, {
        getPrototypeOf: aW
    } = Object, {
        iterator: aK,
        toStringTag: aJ
    } = Symbol, aX = (b = Object.create(null), e => {
        let t = aH.call(e);
        return b[t] || (b[t] = t.slice(8, -1).toLowerCase())
    }), aY = e => (e = e.toLowerCase(), t => aX(t) === e), aQ = e => t => typeof t === e, {
        isArray: aZ
    } = Array, a0 = aQ("undefined");

    function a1(e) {
        return null !== e && !a0(e) && null !== e.constructor && !a0(e.constructor) && a6(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }
    let a3 = aY("ArrayBuffer"),
        a2 = aQ("string"),
        a6 = aQ("function"),
        a5 = aQ("number"),
        a4 = e => null !== e && "object" == typeof e,
        a7 = e => {
            if ("object" !== aX(e)) return !1;
            let t = aW(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(aJ in e) && !(aK in e)
        },
        a8 = aY("Date"),
        a9 = aY("File"),
        se = aY("Blob"),
        st = aY("FileList"),
        sr = "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : "u" > typeof window ? window : e.g,
        si = void 0 !== sr.FormData ? sr.FormData : void 0,
        sn = aY("URLSearchParams"),
        [sa, ss, so, sc] = ["ReadableStream", "Request", "Response", "Headers"].map(aY);

    function sl(e, t, {
        allOwnKeys: r = !1
    } = {}) {
        let i, n;
        if (null != e)
            if ("object" != typeof e && (e = [e]), aZ(e))
                for (i = 0, n = e.length; i < n; i++) t.call(null, e[i], i, e);
            else {
                let n;
                if (a1(e)) return;
                let a = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
                    s = a.length;
                for (i = 0; i < s; i++) n = a[i], t.call(null, e[n], n, e)
            }
    }

    function su(e, t) {
        let r;
        if (a1(e)) return null;
        t = t.toLowerCase();
        let i = Object.keys(e),
            n = i.length;
        for (; n-- > 0;)
            if (t === (r = i[n]).toLowerCase()) return r;
        return null
    }
    let sd = "u" > typeof globalThis ? globalThis : "u" > typeof self ? self : "u" > typeof window ? window : e.g,
        sh = e => !a0(e) && e !== sd,
        sp = (E = "u" > typeof Uint8Array && aW(Uint8Array), e => E && e instanceof E),
        sf = aY("HTMLFormElement"),
        sx = (({
            hasOwnProperty: e
        }) => (t, r) => e.call(t, r))(Object.prototype),
        sm = aY("RegExp"),
        sy = (e, t) => {
            let r = Object.getOwnPropertyDescriptors(e),
                i = {};
            sl(r, (r, n) => {
                let a;
                !1 !== (a = t(r, n, e)) && (i[n] = a || r)
            }), Object.defineProperties(e, i)
        },
        sk = aY("AsyncFunction"),
        sg = (U = "function" == typeof setImmediate, $ = a6(sd.postMessage), U ? setImmediate : $ ? (q = `axios@${Math.random()}`, z = [], sd.addEventListener("message", ({
            source: e,
            data: t
        }) => {
            e === sd && t === q && z.length && z.shift()()
        }, !1), e => {
            z.push(e), sd.postMessage(q, "*")
        }) : e => setTimeout(e)),
        sv = "u" > typeof queueMicrotask ? queueMicrotask.bind(sd) : void 0 !== aq.default && aq.default.nextTick || sg,
        sb = {
            isArray: aZ,
            isArrayBuffer: a3,
            isBuffer: a1,
            isFormData: e => {
                let t;
                return e && (si && e instanceof si || a6(e.append) && ("formdata" === (t = aX(e)) || "object" === t && a6(e.toString) && "[object FormData]" === e.toString()))
            },
            isArrayBufferView: function(e) {
                return "u" > typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && a3(e.buffer)
            },
            isString: a2,
            isNumber: a5,
            isBoolean: e => !0 === e || !1 === e,
            isObject: a4,
            isPlainObject: a7,
            isEmptyObject: e => {
                if (!a4(e) || a1(e)) return !1;
                try {
                    return 0 === Object.keys(e).length && Object.getPrototypeOf(e) === Object.prototype
                } catch (e) {
                    return !1
                }
            },
            isReadableStream: sa,
            isRequest: ss,
            isResponse: so,
            isHeaders: sc,
            isUndefined: a0,
            isDate: a8,
            isFile: a9,
            isReactNativeBlob: e => !!(e && void 0 !== e.uri),
            isReactNative: e => e && void 0 !== e.getParts,
            isBlob: se,
            isRegExp: sm,
            isFunction: a6,
            isStream: e => a4(e) && a6(e.pipe),
            isURLSearchParams: sn,
            isTypedArray: sp,
            isFileList: st,
            forEach: sl,
            merge: function e() {
                let {
                    caseless: t,
                    skipUndefined: r
                } = sh(this) && this || {}, i = {}, n = (n, a) => {
                    if ("__proto__" === a || "constructor" === a || "prototype" === a) return;
                    let s = t && su(i, a) || a;
                    a7(i[s]) && a7(n) ? i[s] = e(i[s], n) : a7(n) ? i[s] = e({}, n) : aZ(n) ? i[s] = n.slice() : r && a0(n) || (i[s] = n)
                };
                for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && sl(arguments[e], n);
                return i
            },
            extend: (e, t, r, {
                allOwnKeys: i
            } = {}) => (sl(t, (t, i) => {
                r && a6(t) ? Object.defineProperty(e, i, {
                    value: az(t, r),
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }) : Object.defineProperty(e, i, {
                    value: t,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                })
            }, {
                allOwnKeys: i
            }), e),
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, r, i) => {
                e.prototype = Object.create(t.prototype, i), Object.defineProperty(e.prototype, "constructor", {
                    value: e,
                    writable: !0,
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e, "super", {
                    value: t.prototype
                }), r && Object.assign(e.prototype, r)
            },
            toFlatObject: (e, t, r, i) => {
                let n, a, s, o = {};
                if (t = t || {}, null == e) return t;
                do {
                    for (a = (n = Object.getOwnPropertyNames(e)).length; a-- > 0;) s = n[a], (!i || i(s, e, t)) && !o[s] && (t[s] = e[s], o[s] = !0);
                    e = !1 !== r && aW(e)
                } while (e && (!r || r(e, t)) && e !== Object.prototype) return t
            },
            kindOf: aX,
            kindOfTest: aY,
            endsWith: (e, t, r) => {
                e = String(e), (void 0 === r || r > e.length) && (r = e.length), r -= t.length;
                let i = e.indexOf(t, r);
                return -1 !== i && i === r
            },
            toArray: e => {
                if (!e) return null;
                if (aZ(e)) return e;
                let t = e.length;
                if (!a5(t)) return null;
                let r = Array(t);
                for (; t-- > 0;) r[t] = e[t];
                return r
            },
            forEachEntry: (e, t) => {
                let r, i = (e && e[aK]).call(e);
                for (;
                    (r = i.next()) && !r.done;) {
                    let i = r.value;
                    t.call(e, i[0], i[1])
                }
            },
            matchAll: (e, t) => {
                let r, i = [];
                for (; null !== (r = e.exec(t));) i.push(r);
                return i
            },
            isHTMLForm: sf,
            hasOwnProperty: sx,
            hasOwnProp: sx,
            reduceDescriptors: sy,
            freezeMethods: e => {
                sy(e, (t, r) => {
                    if (a6(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                    if (a6(e[r])) {
                        if (t.enumerable = !1, "writable" in t) {
                            t.writable = !1;
                            return
                        }
                        t.set || (t.set = () => {
                            throw Error("Can not rewrite read-only method '" + r + "'")
                        })
                    }
                })
            },
            toObjectSet: (e, t) => {
                let r = {};
                return (aZ(e) ? e : String(e).split(t)).forEach(e => {
                    r[e] = !0
                }), r
            },
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
                return t.toUpperCase() + r
            }),
            noop: () => {},
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e *= 1) ? e : t,
            findKey: su,
            global: sd,
            isContextDefined: sh,
            isSpecCompliantForm: function(e) {
                return !!(e && a6(e.append) && "FormData" === e[aJ] && e[aK])
            },
            toJSONObject: e => {
                let t = Array(10),
                    r = (e, i) => {
                        if (a4(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (a1(e)) return e;
                            if (!("toJSON" in e)) {
                                t[i] = e;
                                let n = aZ(e) ? [] : {};
                                return sl(e, (e, t) => {
                                    let a = r(e, i + 1);
                                    a0(a) || (n[t] = a)
                                }), t[i] = void 0, n
                            }
                        }
                        return e
                    };
                return r(e, 0)
            },
            isAsyncFn: sk,
            isThenable: e => e && (a4(e) || a6(e)) && a6(e.then) && a6(e.catch),
            setImmediate: sg,
            asap: sv,
            isIterable: e => null != e && a6(e[aK])
        };
    var sE = e.i(221168);
    class s_ extends Error {
        static from(e, t, r, i, n, a) {
            let s = new s_(e.message, t || e.code, r, i, n);
            return s.cause = e, s.name = e.name, null != e.status && null == s.status && (s.status = e.status), a && Object.assign(s, a), s
        }
        constructor(e, t, r, i, n) {
            super(e), Object.defineProperty(this, "message", {
                value: e,
                enumerable: !0,
                writable: !0,
                configurable: !0
            }), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), r && (this.config = r), i && (this.request = i), n && (this.response = n, this.status = n.status)
        }
        toJSON() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: sb.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    }
    s_.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", s_.ERR_BAD_OPTION = "ERR_BAD_OPTION", s_.ECONNABORTED = "ECONNABORTED", s_.ETIMEDOUT = "ETIMEDOUT", s_.ERR_NETWORK = "ERR_NETWORK", s_.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", s_.ERR_DEPRECATED = "ERR_DEPRECATED", s_.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", s_.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", s_.ERR_CANCELED = "ERR_CANCELED", s_.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", s_.ERR_INVALID_URL = "ERR_INVALID_URL";
    let sS = s_;

    function sA(e) {
        return sb.isPlainObject(e) || sb.isArray(e)
    }

    function sD(e) {
        return sb.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function sw(e, t, r) {
        return e ? e.concat(t).map(function(e, t) {
            return e = sD(e), !r && t ? "[" + e + "]" : e
        }).join(r ? "." : "") : t
    }
    let sT = sb.toFlatObject(sb, {}, null, function(e) {
            return /^is[A-Z]/.test(e)
        }),
        sO = function(e, t, r) {
            if (!sb.isObject(e)) throw TypeError("target must be an object");
            t = t || new FormData;
            let i = (r = sb.toFlatObject(r, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, function(e, t) {
                    return !sb.isUndefined(t[e])
                })).metaTokens,
                n = r.visitor || l,
                a = r.dots,
                s = r.indexes,
                o = (r.Blob || "u" > typeof Blob && Blob) && sb.isSpecCompliantForm(t);
            if (!sb.isFunction(n)) throw TypeError("visitor must be a function");

            function c(e) {
                if (null === e) return "";
                if (sb.isDate(e)) return e.toISOString();
                if (sb.isBoolean(e)) return e.toString();
                if (!o && sb.isBlob(e)) throw new sS("Blob is not supported. Use a Buffer instead.");
                return sb.isArrayBuffer(e) || sb.isTypedArray(e) ? o && "function" == typeof Blob ? new Blob([e]) : sE.Buffer.from(e) : e
            }

            function l(e, r, n) {
                let o = e;
                if (sb.isReactNative(t) && sb.isReactNativeBlob(e)) return t.append(sw(n, r, a), c(e)), !1;
                if (e && !n && "object" == typeof e)
                    if (sb.endsWith(r, "{}")) r = i ? r : r.slice(0, -2), e = JSON.stringify(e);
                    else {
                        var l;
                        if (sb.isArray(e) && (l = e, sb.isArray(l) && !l.some(sA)) || (sb.isFileList(e) || sb.endsWith(r, "[]")) && (o = sb.toArray(e))) return r = sD(r), o.forEach(function(e, i) {
                            sb.isUndefined(e) || null === e || t.append(!0 === s ? sw([r], i, a) : null === s ? r : r + "[]", c(e))
                        }), !1
                    }
                return !!sA(e) || (t.append(sw(n, r, a), c(e)), !1)
            }
            let u = [],
                d = Object.assign(sT, {
                    defaultVisitor: l,
                    convertValue: c,
                    isVisitable: sA
                });
            if (!sb.isObject(e)) throw TypeError("data must be an object");
            return ! function e(r, i) {
                if (!sb.isUndefined(r)) {
                    if (-1 !== u.indexOf(r)) throw Error("Circular reference detected in " + i.join("."));
                    u.push(r), sb.forEach(r, function(r, a) {
                        !0 === (!(sb.isUndefined(r) || null === r) && n.call(t, r, sb.isString(a) ? a.trim() : a, i, d)) && e(r, i ? i.concat(a) : [a])
                    }), u.pop()
                }
            }(e), t
        };

    function sB(e) {
        let t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
            return t[e]
        })
    }

    function sR(e, t) {
        this._pairs = [], e && sO(e, this, t)
    }
    let sI = sR.prototype;

    function sC(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
    }

    function sN(e, t, r) {
        let i;
        if (!t) return e;
        let n = r && r.encode || sC,
            a = sb.isFunction(r) ? {
                serialize: r
            } : r,
            s = a && a.serialize;
        if (i = s ? s(t, a) : sb.isURLSearchParams(t) ? t.toString() : new sR(t, a).toString(n)) {
            let t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
        }
        return e
    }
    sI.append = function(e, t) {
        this._pairs.push([e, t])
    }, sI.toString = function(e) {
        let t = e ? function(t) {
            return e.call(this, t, sB)
        } : sB;
        return this._pairs.map(function(e) {
            return t(e[0]) + "=" + t(e[1])
        }, "").join("&")
    };
    let sP = class {
            constructor() {
                this.handlers = []
            }
            use(e, t, r) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!r && r.synchronous,
                    runWhen: r ? r.runWhen : null
                }), this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                sb.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }
        },
        sj = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
            legacyInterceptorReqResOrdering: !0
        },
        sF = "u" > typeof URLSearchParams ? URLSearchParams : sR,
        sV = "u" > typeof FormData ? FormData : null,
        sG = "u" > typeof Blob ? Blob : null,
        sL = "u" > typeof window && "u" > typeof document,
        sM = "object" == typeof navigator && navigator || void 0,
        sU = sL && (!sM || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(sM.product)),
        s$ = "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        sq = sL && window.location.href || "http://localhost";
    e.s(["hasBrowserEnv", 0, sL, "hasStandardBrowserEnv", 0, sU, "hasStandardBrowserWebWorkerEnv", 0, s$, "navigator", 0, sM, "origin", 0, sq], 438358);
    let sz = { ...e.i(438358),
            isBrowser: !0,
            classes: {
                URLSearchParams: sF,
                FormData: sV,
                Blob: sG
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        sH = function(e) {
            if (sb.isFormData(e) && sb.isFunction(e.entries)) {
                let t = {};
                return sb.forEachEntry(e, (e, r) => {
                    ! function e(t, r, i, n) {
                        let a = t[n++];
                        if ("__proto__" === a) return !0;
                        let s = Number.isFinite(+a),
                            o = n >= t.length;
                        return (a = !a && sb.isArray(i) ? i.length : a, o) ? sb.hasOwnProp(i, a) ? i[a] = [i[a], r] : i[a] = r : (i[a] && sb.isObject(i[a]) || (i[a] = []), e(t, r, i[a], n) && sb.isArray(i[a]) && (i[a] = function(e) {
                            let t, r, i = {},
                                n = Object.keys(e),
                                a = n.length;
                            for (t = 0; t < a; t++) i[r = n[t]] = e[r];
                            return i
                        }(i[a]))), !s
                    }(sb.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]), r, t, 0)
                }), t
            }
            return null
        },
        sW = {
            transitional: sj,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                let r, i = t.getContentType() || "",
                    n = i.indexOf("application/json") > -1,
                    a = sb.isObject(e);
                if (a && sb.isHTMLForm(e) && (e = new FormData(e)), sb.isFormData(e)) return n ? JSON.stringify(sH(e)) : e;
                if (sb.isArrayBuffer(e) || sb.isBuffer(e) || sb.isStream(e) || sb.isFile(e) || sb.isBlob(e) || sb.isReadableStream(e)) return e;
                if (sb.isArrayBufferView(e)) return e.buffer;
                if (sb.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                if (a) {
                    if (i.indexOf("application/x-www-form-urlencoded") > -1) {
                        var s, o;
                        return (s = e, o = this.formSerializer, sO(s, new sz.classes.URLSearchParams, {
                            visitor: function(e, t, r, i) {
                                return sz.isNode && sb.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments)
                            },
                            ...o
                        })).toString()
                    }
                    if ((r = sb.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                        let t = this.env && this.env.FormData;
                        return sO(r ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                if (a || n) {
                    t.setContentType("application/json", !1);
                    var c = e;
                    if (sb.isString(c)) try {
                        return (0, JSON.parse)(c), sb.trim(c)
                    } catch (e) {
                        if ("SyntaxError" !== e.name) throw e
                    }
                    return (0, JSON.stringify)(c)
                }
                return e
            }],
            transformResponse: [function(e) {
                let t = this.transitional || sW.transitional,
                    r = t && t.forcedJSONParsing,
                    i = "json" === this.responseType;
                if (sb.isResponse(e) || sb.isReadableStream(e)) return e;
                if (e && sb.isString(e) && (r && !this.responseType || i)) {
                    let r = t && t.silentJSONParsing;
                    try {
                        return JSON.parse(e, this.parseReviver)
                    } catch (e) {
                        if (!r && i) {
                            if ("SyntaxError" === e.name) throw sS.from(e, sS.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e
                        }
                    }
                }
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: sz.classes.FormData,
                Blob: sz.classes.Blob
            },
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": void 0
                }
            }
        };
    sb.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
        sW.headers[e] = {}
    });
    let sK = sb.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        sJ = Symbol("internals");

    function sX(e) {
        return e && String(e).trim().toLowerCase()
    }

    function sY(e) {
        return !1 === e || null == e ? e : sb.isArray(e) ? e.map(sY) : function(e) {
            let t = e.length;
            for (; t > 0;) {
                let r = e.charCodeAt(t - 1);
                if (10 !== r && 13 !== r) break;
                t -= 1
            }
            return t === e.length ? e : e.slice(0, t)
        }(String(e))
    }

    function sQ(e, t, r, i, n) {
        if (sb.isFunction(i)) return i.call(this, t, r);
        if (n && (t = r), sb.isString(t)) {
            if (sb.isString(i)) return -1 !== t.indexOf(i);
            if (sb.isRegExp(i)) return i.test(t)
        }
    }
    class sZ {
        constructor(e) {
            e && this.set(e)
        }
        set(e, t, r) {
            let i = this;

            function n(e, t, r) {
                let n = sX(t);
                if (!n) throw Error("header name must be a non-empty string");
                let a = sb.findKey(i, n);
                a && void 0 !== i[a] && !0 !== r && (void 0 !== r || !1 === i[a]) || (! function e(t, r) {
                    if (!1 !== t && null != t) {
                        let i;
                        if (sb.isArray(t)) return void t.forEach(t => e(t, r));
                        if (i = String(t), /[\r\n]/.test(i)) throw Error(`Invalid character in header content ["${r}"]`)
                    }
                }(e, t), i[a || t] = sY(e))
            }
            let a = (e, t) => sb.forEach(e, (e, r) => n(e, r, t));
            if (sb.isPlainObject(e) || e instanceof this.constructor) a(e, t);
            else {
                let i;
                if (sb.isString(e) && (e = e.trim()) && (i = e, !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim()))) {
                    var s;
                    let r, i, n, o;
                    a((o = {}, (s = e) && s.split("\n").forEach(function(e) {
                        n = e.indexOf(":"), r = e.substring(0, n).trim().toLowerCase(), i = e.substring(n + 1).trim(), !r || o[r] && sK[r] || ("set-cookie" === r ? o[r] ? o[r].push(i) : o[r] = [i] : o[r] = o[r] ? o[r] + ", " + i : i)
                    }), o), t)
                } else if (sb.isObject(e) && sb.isIterable(e)) {
                    let r = {},
                        i, n;
                    for (let t of e) {
                        if (!sb.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
                        r[n = t[0]] = (i = r[n]) ? sb.isArray(i) ? [...i, t[1]] : [i, t[1]] : t[1]
                    }
                    a(r, t)
                } else null != e && n(t, e, r)
            }
            return this
        }
        get(e, t) {
            if (e = sX(e)) {
                let r = sb.findKey(this, e);
                if (r) {
                    let e = this[r];
                    if (!t) return e;
                    if (!0 === t) {
                        let t, r = Object.create(null),
                            i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        for (; t = i.exec(e);) r[t[1]] = t[2];
                        return r
                    }
                    if (sb.isFunction(t)) return t.call(this, e, r);
                    if (sb.isRegExp(t)) return t.exec(e);
                    throw TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(e, t) {
            if (e = sX(e)) {
                let r = sb.findKey(this, e);
                return !!(r && void 0 !== this[r] && (!t || sQ(this, this[r], r, t)))
            }
            return !1
        }
        delete(e, t) {
            let r = this,
                i = !1;

            function n(e) {
                if (e = sX(e)) {
                    let n = sb.findKey(r, e);
                    n && (!t || sQ(r, r[n], n, t)) && (delete r[n], i = !0)
                }
            }
            return sb.isArray(e) ? e.forEach(n) : n(e), i
        }
        clear(e) {
            let t = Object.keys(this),
                r = t.length,
                i = !1;
            for (; r--;) {
                let n = t[r];
                (!e || sQ(this, this[n], n, e, !0)) && (delete this[n], i = !0)
            }
            return i
        }
        normalize(e) {
            let t = this,
                r = {};
            return sb.forEach(this, (i, n) => {
                let a = sb.findKey(r, n);
                if (a) {
                    t[a] = sY(i), delete t[n];
                    return
                }
                let s = e ? n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r) : String(n).trim();
                s !== n && delete t[n], t[s] = sY(i), r[s] = !0
            }), this
        }
        concat(...e) {
            return this.constructor.concat(this, ...e)
        }
        toJSON(e) {
            let t = Object.create(null);
            return sb.forEach(this, (r, i) => {
                null != r && !1 !== r && (t[i] = e && sb.isArray(r) ? r.join(", ") : r)
            }), t
        }[Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n")
        }
        getSetCookie() {
            return this.get("set-cookie") || []
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(e) {
            return e instanceof this ? e : new this(e)
        }
        static concat(e, ...t) {
            let r = new this(e);
            return t.forEach(e => r.set(e)), r
        }
        static accessor(e) {
            let t = (this[sJ] = this[sJ] = {
                    accessors: {}
                }).accessors,
                r = this.prototype;

            function i(e) {
                let i = sX(e);
                if (!t[i]) {
                    let n;
                    n = sb.toCamelCase(" " + e), ["get", "set", "has"].forEach(t => {
                        Object.defineProperty(r, t + n, {
                            value: function(r, i, n) {
                                return this[t].call(this, e, r, i, n)
                            },
                            configurable: !0
                        })
                    }), t[i] = !0
                }
            }
            return sb.isArray(e) ? e.forEach(i) : i(e), this
        }
    }

    function s0(e, t) {
        let r = this || sW,
            i = t || r,
            n = sZ.from(i.headers),
            a = i.data;
        return sb.forEach(e, function(e) {
            a = e.call(r, a, n.normalize(), t ? t.status : void 0)
        }), n.normalize(), a
    }

    function s1(e) {
        return !!(e && e.__CANCEL__)
    }
    sZ.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), sb.reduceDescriptors(sZ.prototype, ({
        value: e
    }, t) => {
        let r = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => e,
            set(e) {
                this[r] = e
            }
        }
    }), sb.freezeMethods(sZ);
    let s3 = class extends sS {
        constructor(e, t, r) {
            super(null == e ? "canceled" : e, sS.ERR_CANCELED, t, r), this.name = "CanceledError", this.__CANCEL__ = !0
        }
    };

    function s2(e, t, r) {
        let i = r.config.validateStatus;
        !r.status || !i || i(r.status) ? e(r) : t(new sS("Request failed with status code " + r.status, [sS.ERR_BAD_REQUEST, sS.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
    }
    let s6 = function(e, t) {
            let r, i = Array(e = e || 10),
                n = Array(e),
                a = 0,
                s = 0;
            return t = void 0 !== t ? t : 1e3,
                function(o) {
                    let c = Date.now(),
                        l = n[s];
                    r || (r = c), i[a] = o, n[a] = c;
                    let u = s,
                        d = 0;
                    for (; u !== a;) d += i[u++], u %= e;
                    if ((a = (a + 1) % e) === s && (s = (s + 1) % e), c - r < t) return;
                    let h = l && c - l;
                    return h ? Math.round(1e3 * d / h) : void 0
                }
        },
        s5 = function(e, t) {
            let r, i, n = 0,
                a = 1e3 / t,
                s = (t, a = Date.now()) => {
                    n = a, r = null, i && (clearTimeout(i), i = null), e(...t)
                };
            return [(...e) => {
                let t = Date.now(),
                    o = t - n;
                o >= a ? s(e, t) : (r = e, i || (i = setTimeout(() => {
                    i = null, s(r)
                }, a - o)))
            }, () => r && s(r)]
        },
        s4 = (e, t, r = 3) => {
            let i = 0,
                n = s6(50, 250);
            return s5(r => {
                let a = r.loaded,
                    s = r.lengthComputable ? r.total : void 0,
                    o = a - i,
                    c = n(o);
                i = a, e({
                    loaded: a,
                    total: s,
                    progress: s ? a / s : void 0,
                    bytes: o,
                    rate: c || void 0,
                    estimated: c && s && a <= s ? (s - a) / c : void 0,
                    event: r,
                    lengthComputable: null != s,
                    [t ? "download" : "upload"]: !0
                })
            }, r)
        },
        s7 = (e, t) => {
            let r = null != e;
            return [i => t[0]({
                lengthComputable: r,
                total: e,
                loaded: i
            }), t[1]]
        },
        s8 = e => (...t) => sb.asap(() => e(...t)),
        s9 = sz.hasStandardBrowserEnv ? (_ = new URL(sz.origin), S = sz.navigator && /(msie|trident)/i.test(sz.navigator.userAgent), e => (e = new URL(e, sz.origin), _.protocol === e.protocol && _.host === e.host && (S || _.port === e.port))) : () => !0,
        oe = sz.hasStandardBrowserEnv ? {
            write(e, t, r, i, n, a, s) {
                if ("u" < typeof document) return;
                let o = [`${e}=${encodeURIComponent(t)}`];
                sb.isNumber(r) && o.push(`expires=${new Date(r).toUTCString()}`), sb.isString(i) && o.push(`path=${i}`), sb.isString(n) && o.push(`domain=${n}`), !0 === a && o.push("secure"), sb.isString(s) && o.push(`SameSite=${s}`), document.cookie = o.join("; ")
            },
            read(e) {
                if ("u" < typeof document) return null;
                let t = document.cookie.match(RegExp("(?:^|; )" + e + "=([^;]*)"));
                return t ? decodeURIComponent(t[1]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5, "/")
            }
        } : {
            write() {},
            read: () => null,
            remove() {}
        };

    function ot(e, t, r) {
        let i = !("string" == typeof t && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t));
        return e && (i || !1 == r) ? t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e : t
    }
    let or = e => e instanceof sZ ? { ...e
    } : e;

    function oi(e, t) {
        t = t || {};
        let r = {};

        function i(e, t, r, i) {
            return sb.isPlainObject(e) && sb.isPlainObject(t) ? sb.merge.call({
                caseless: i
            }, e, t) : sb.isPlainObject(t) ? sb.merge({}, t) : sb.isArray(t) ? t.slice() : t
        }

        function n(e, t, r, n) {
            return sb.isUndefined(t) ? sb.isUndefined(e) ? void 0 : i(void 0, e, r, n) : i(e, t, r, n)
        }

        function a(e, t) {
            if (!sb.isUndefined(t)) return i(void 0, t)
        }

        function s(e, t) {
            return sb.isUndefined(t) ? sb.isUndefined(e) ? void 0 : i(void 0, e) : i(void 0, t)
        }

        function o(r, n, a) {
            return a in t ? i(r, n) : a in e ? i(void 0, r) : void 0
        }
        let c = {
            url: a,
            method: a,
            data: a,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            withXSRFToken: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            beforeRedirect: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: o,
            headers: (e, t, r) => n(or(e), or(t), r, !0)
        };
        return sb.forEach(Object.keys({ ...e,
            ...t
        }), function(i) {
            if ("__proto__" === i || "constructor" === i || "prototype" === i) return;
            let a = sb.hasOwnProp(c, i) ? c[i] : n,
                s = a(e[i], t[i], i);
            sb.isUndefined(s) && a !== o || (r[i] = s)
        }), r
    }
    let on = e => {
            let t = oi({}, e),
                {
                    data: r,
                    withXSRFToken: i,
                    xsrfHeaderName: n,
                    xsrfCookieName: a,
                    headers: s,
                    auth: o
                } = t;
            if (t.headers = s = sZ.from(s), t.url = sN(ot(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), o && s.set("Authorization", "Basic " + btoa((o.username || "") + ":" + (o.password ? unescape(encodeURIComponent(o.password)) : ""))), sb.isFormData(r)) {
                if (sz.hasStandardBrowserEnv || sz.hasStandardBrowserWebWorkerEnv) s.setContentType(void 0);
                else if (sb.isFunction(r.getHeaders)) {
                    let e = r.getHeaders(),
                        t = ["content-type", "content-length"];
                    Object.entries(e).forEach(([e, r]) => {
                        t.includes(e.toLowerCase()) && s.set(e, r)
                    })
                }
            }
            if (sz.hasStandardBrowserEnv && (i && sb.isFunction(i) && (i = i(t)), i || !1 !== i && s9(t.url))) {
                let e = n && a && oe.read(a);
                e && s.set(n, e)
            }
            return t
        },
        oa = "u" > typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, r) {
                var i;
                let n, a, s, o, c, l, u = on(e),
                    d = u.data,
                    h = sZ.from(u.headers).normalize(),
                    {
                        responseType: p,
                        onUploadProgress: f,
                        onDownloadProgress: x
                    } = u;

                function m() {
                    o && o(), c && c(), u.cancelToken && u.cancelToken.unsubscribe(n), u.signal && u.signal.removeEventListener("abort", n)
                }
                let y = new XMLHttpRequest;

                function k() {
                    if (!y) return;
                    let i = sZ.from("getAllResponseHeaders" in y && y.getAllResponseHeaders());
                    s2(function(e) {
                        t(e), m()
                    }, function(e) {
                        r(e), m()
                    }, {
                        data: p && "text" !== p && "json" !== p ? y.response : y.responseText,
                        status: y.status,
                        statusText: y.statusText,
                        headers: i,
                        config: e,
                        request: y
                    }), y = null
                }
                y.open(u.method.toUpperCase(), u.url, !0), y.timeout = u.timeout, "onloadend" in y ? y.onloadend = k : y.onreadystatechange = function() {
                    !y || 4 !== y.readyState || (0 !== y.status || y.responseURL && 0 === y.responseURL.indexOf("file:")) && setTimeout(k)
                }, y.onabort = function() {
                    y && (r(new sS("Request aborted", sS.ECONNABORTED, e, y)), y = null)
                }, y.onerror = function(t) {
                    let i = new sS(t && t.message ? t.message : "Network Error", sS.ERR_NETWORK, e, y);
                    i.event = t || null, r(i), y = null
                }, y.ontimeout = function() {
                    let t = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded",
                        i = u.transitional || sj;
                    u.timeoutErrorMessage && (t = u.timeoutErrorMessage), r(new sS(t, i.clarifyTimeoutError ? sS.ETIMEDOUT : sS.ECONNABORTED, e, y)), y = null
                }, void 0 === d && h.setContentType(null), "setRequestHeader" in y && sb.forEach(h.toJSON(), function(e, t) {
                    y.setRequestHeader(t, e)
                }), sb.isUndefined(u.withCredentials) || (y.withCredentials = !!u.withCredentials), p && "json" !== p && (y.responseType = u.responseType), x && ([s, c] = s4(x, !0), y.addEventListener("progress", s)), f && y.upload && ([a, o] = s4(f), y.upload.addEventListener("progress", a), y.upload.addEventListener("loadend", o)), (u.cancelToken || u.signal) && (n = t => {
                    y && (r(!t || t.type ? new s3(null, e, y) : t), y.abort(), y = null)
                }, u.cancelToken && u.cancelToken.subscribe(n), u.signal && (u.signal.aborted ? n() : u.signal.addEventListener("abort", n)));
                let g = (i = u.url, (l = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i)) && l[1] || "");
                g && -1 === sz.protocols.indexOf(g) ? r(new sS("Unsupported protocol " + g + ":", sS.ERR_BAD_REQUEST, e)) : y.send(d || null)
            })
        },
        os = function*(e, t) {
            let r, i = e.byteLength;
            if (!t || i < t) return void(yield e);
            let n = 0;
            for (; n < i;) r = n + t, yield e.slice(n, r), n = r
        },
        oo = async function*(e, t) {
            for await (let r of oc(e)) yield* os(r, t)
        },
        oc = async function*(e) {
            if (e[Symbol.asyncIterator]) return void(yield* e);
            let t = e.getReader();
            try {
                for (;;) {
                    let {
                        done: e,
                        value: r
                    } = await t.read();
                    if (e) break;
                    yield r
                }
            } finally {
                await t.cancel()
            }
        },
        ol = (e, t, r, i) => {
            let n, a = oo(e, t),
                s = 0,
                o = e => {
                    !n && (n = !0, i && i(e))
                };
            return new ReadableStream({
                async pull(e) {
                    try {
                        let {
                            done: t,
                            value: i
                        } = await a.next();
                        if (t) {
                            o(), e.close();
                            return
                        }
                        let n = i.byteLength;
                        if (r) {
                            let e = s += n;
                            r(e)
                        }
                        e.enqueue(new Uint8Array(i))
                    } catch (e) {
                        throw o(e), e
                    }
                },
                cancel: e => (o(e), a.return())
            }, {
                highWaterMark: 2
            })
        },
        {
            isFunction: ou
        } = sb,
        od = (({
            Request: e,
            Response: t
        }) => ({
            Request: e,
            Response: t
        }))(sb.global),
        {
            ReadableStream: oh,
            TextEncoder: op
        } = sb.global,
        of = (e, ...t) => {
            try {
                return !!e(...t)
            } catch (e) {
                return !1
            }
        },
        ox = e => {
            let t, {
                    fetch: r,
                    Request: i,
                    Response: n
                } = e = sb.merge.call({
                    skipUndefined: !0
                }, od, e),
                a = r ? ou(r) : "function" == typeof fetch,
                s = ou(i),
                o = ou(n);
            if (!a) return !1;
            let c = a && ou(oh),
                l = a && ("function" == typeof op ? (t = new op, e => t.encode(e)) : async e => new Uint8Array(await new i(e).arrayBuffer())),
                u = s && c && of (() => {
                    let e = !1,
                        t = new oh,
                        r = new i(sz.origin, {
                            body: t,
                            method: "POST",
                            get duplex() {
                                return e = !0, "half"
                            }
                        }).headers.has("Content-Type");
                    return t.cancel(), e && !r
                }),
                d = o && c && of (() => sb.isReadableStream(new n("").body)),
                h = {
                    stream: d && (e => e.body)
                };
            a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
                h[e] || (h[e] = (t, r) => {
                    let i = t && t[e];
                    if (i) return i.call(t);
                    throw new sS(`Response type '${e}' is not supported`, sS.ERR_NOT_SUPPORT, r)
                })
            });
            let p = async e => {
                    if (null == e) return 0;
                    if (sb.isBlob(e)) return e.size;
                    if (sb.isSpecCompliantForm(e)) {
                        let t = new i(sz.origin, {
                            method: "POST",
                            body: e
                        });
                        return (await t.arrayBuffer()).byteLength
                    }
                    return sb.isArrayBufferView(e) || sb.isArrayBuffer(e) ? e.byteLength : (sb.isURLSearchParams(e) && (e += ""), sb.isString(e)) ? (await l(e)).byteLength : void 0
                },
                f = async (e, t) => {
                    let r = sb.toFiniteNumber(e.getContentLength());
                    return null == r ? p(t) : r
                };
            return async e => {
                let t, {
                        url: a,
                        method: o,
                        data: c,
                        signal: l,
                        cancelToken: p,
                        timeout: x,
                        onDownloadProgress: m,
                        onUploadProgress: y,
                        responseType: k,
                        headers: g,
                        withCredentials: v = "same-origin",
                        fetchOptions: b
                    } = on(e),
                    E = r || fetch;
                k = k ? (k + "").toLowerCase() : "text";
                let _ = ((e, t) => {
                        let {
                            length: r
                        } = e = e ? e.filter(Boolean) : [];
                        if (t || r) {
                            let r, i = new AbortController,
                                n = function(e) {
                                    if (!r) {
                                        r = !0, s();
                                        let t = e instanceof Error ? e : this.reason;
                                        i.abort(t instanceof sS ? t : new s3(t instanceof Error ? t.message : t))
                                    }
                                },
                                a = t && setTimeout(() => {
                                    a = null, n(new sS(`timeout of ${t}ms exceeded`, sS.ETIMEDOUT))
                                }, t),
                                s = () => {
                                    e && (a && clearTimeout(a), a = null, e.forEach(e => {
                                        e.unsubscribe ? e.unsubscribe(n) : e.removeEventListener("abort", n)
                                    }), e = null)
                                };
                            e.forEach(e => e.addEventListener("abort", n));
                            let {
                                signal: o
                            } = i;
                            return o.unsubscribe = () => sb.asap(s), o
                        }
                    })([l, p && p.toAbortSignal()], x),
                    S = null,
                    A = _ && _.unsubscribe && (() => {
                        _.unsubscribe()
                    });
                try {
                    if (y && u && "get" !== o && "head" !== o && 0 !== (t = await f(g, c))) {
                        let e, r = new i(a, {
                            method: "POST",
                            body: c,
                            duplex: "half"
                        });
                        if (sb.isFormData(c) && (e = r.headers.get("content-type")) && g.setContentType(e), r.body) {
                            let [e, i] = s7(t, s4(s8(y)));
                            c = ol(r.body, 65536, e, i)
                        }
                    }
                    sb.isString(v) || (v = v ? "include" : "omit");
                    let r = s && "credentials" in i.prototype,
                        l = { ...b,
                            signal: _,
                            method: o.toUpperCase(),
                            headers: g.normalize().toJSON(),
                            body: c,
                            duplex: "half",
                            credentials: r ? v : void 0
                        };
                    S = s && new i(a, l);
                    let p = await (s ? E(S, b) : E(a, l)),
                        x = d && ("stream" === k || "response" === k);
                    if (d && (m || x && A)) {
                        let e = {};
                        ["status", "statusText", "headers"].forEach(t => {
                            e[t] = p[t]
                        });
                        let t = sb.toFiniteNumber(p.headers.get("content-length")),
                            [r, i] = m && s7(t, s4(s8(m), !0)) || [];
                        p = new n(ol(p.body, 65536, r, () => {
                            i && i(), A && A()
                        }), e)
                    }
                    k = k || "text";
                    let D = await h[sb.findKey(h, k) || "text"](p, e);
                    return !x && A && A(), await new Promise((t, r) => {
                        s2(t, r, {
                            data: D,
                            headers: sZ.from(p.headers),
                            status: p.status,
                            statusText: p.statusText,
                            config: e,
                            request: S
                        })
                    })
                } catch (t) {
                    if (A && A(), t && "TypeError" === t.name && /Load failed|fetch/i.test(t.message)) throw Object.assign(new sS("Network Error", sS.ERR_NETWORK, e, S, t && t.response), {
                        cause: t.cause || t
                    });
                    throw sS.from(t, t && t.code, e, S, t && t.response)
                }
            }
        },
        om = new Map,
        oy = e => {
            let t = e && e.env || {},
                {
                    fetch: r,
                    Request: i,
                    Response: n
                } = t,
                a = [i, n, r],
                s = a.length,
                o, c, l = om;
            for (; s--;) o = a[s], void 0 === (c = l.get(o)) && l.set(o, c = s ? new Map : ox(t)), l = c;
            return c
        };
    oy();
    let ok = {
        http: null,
        xhr: oa,
        fetch: {
            get: oy
        }
    };
    sb.forEach(ok, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch (e) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    });
    let og = e => `- ${e}`,
        ov = e => sb.isFunction(e) || null === e || !1 === e,
        ob = function(e, t) {
            let r, i, {
                    length: n
                } = e = sb.isArray(e) ? e : [e],
                a = {};
            for (let s = 0; s < n; s++) {
                let n;
                if (i = r = e[s], !ov(r) && void 0 === (i = ok[(n = String(r)).toLowerCase()])) throw new sS(`Unknown adapter '${n}'`);
                if (i && (sb.isFunction(i) || (i = i.get(t)))) break;
                a[n || "#" + s] = i
            }
            if (!i) {
                let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
                throw new sS("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(og).join("\n") : " " + og(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
            }
            return i
        };

    function oE(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new s3(null, e)
    }

    function o_(e) {
        return oE(e), e.headers = sZ.from(e.headers), e.data = s0.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), ob(e.adapter || sW.adapter, e)(e).then(function(t) {
            return oE(e), t.data = s0.call(e, e.transformResponse, t), t.headers = sZ.from(t.headers), t
        }, function(t) {
            return !s1(t) && (oE(e), t && t.response && (t.response.data = s0.call(e, e.transformResponse, t.response), t.response.headers = sZ.from(t.response.headers))), Promise.reject(t)
        })
    }
    let oS = "1.15.0",
        oA = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        oA[e] = function(r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
        }
    });
    let oD = {};
    oA.transitional = function(e, t, r) {
        function i(e, t) {
            return "[Axios v" + oS + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "")
        }
        return (r, n, a) => {
            if (!1 === e) throw new sS(i(n, " has been removed" + (t ? " in " + t : "")), sS.ERR_DEPRECATED);
            return t && !oD[n] && (oD[n] = !0, console.warn(i(n, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(r, n, a)
        }
    }, oA.spelling = function(e) {
        return (t, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0)
    };
    let ow = function(e, t, r) {
        if ("object" != typeof e) throw new sS("options must be an object", sS.ERR_BAD_OPTION_VALUE);
        let i = Object.keys(e),
            n = i.length;
        for (; n-- > 0;) {
            let a = i[n],
                s = t[a];
            if (s) {
                let t = e[a],
                    r = void 0 === t || s(t, a, e);
                if (!0 !== r) throw new sS("option " + a + " must be " + r, sS.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (!0 !== r) throw new sS("Unknown option " + a, sS.ERR_BAD_OPTION)
        }
    };
    class oT {
        constructor(e) {
            this.defaults = e || {}, this.interceptors = {
                request: new sP,
                response: new sP
            }
        }
        async request(e, t) {
            try {
                return await this._request(e, t)
            } catch (e) {
                if (e instanceof Error) {
                    let t = {};
                    Error.captureStackTrace ? Error.captureStackTrace(t) : t = Error();
                    let r = (() => {
                        if (!t.stack) return "";
                        let e = t.stack.indexOf("\n");
                        return -1 === e ? "" : t.stack.slice(e + 1)
                    })();
                    try {
                        if (e.stack) {
                            if (r) {
                                let t = r.indexOf("\n"),
                                    i = -1 === t ? -1 : r.indexOf("\n", t + 1),
                                    n = -1 === i ? "" : r.slice(i + 1);
                                String(e.stack).endsWith(n) || (e.stack += "\n" + r)
                            }
                        } else e.stack = r
                    } catch (e) {}
                }
                throw e
            }
        }
        _request(e, t) {
            let r, i;
            "string" == typeof e ? (t = t || {}).url = e : t = e || {};
            let {
                transitional: n,
                paramsSerializer: a,
                headers: s
            } = t = oi(this.defaults, t);
            void 0 !== n && ow(n, {
                silentJSONParsing: oA.transitional(oA.boolean),
                forcedJSONParsing: oA.transitional(oA.boolean),
                clarifyTimeoutError: oA.transitional(oA.boolean),
                legacyInterceptorReqResOrdering: oA.transitional(oA.boolean)
            }, !1), null != a && (sb.isFunction(a) ? t.paramsSerializer = {
                serialize: a
            } : ow(a, {
                encode: oA.function,
                serialize: oA.function
            }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), ow(t, {
                baseUrl: oA.spelling("baseURL"),
                withXsrfToken: oA.spelling("withXSRFToken")
            }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
            let o = s && sb.merge(s.common, s[t.method]);
            s && sb.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                delete s[e]
            }), t.headers = sZ.concat(o, s);
            let c = [],
                l = !0;
            this.interceptors.request.forEach(function(e) {
                if ("function" == typeof e.runWhen && !1 === e.runWhen(t)) return;
                l = l && e.synchronous;
                let r = t.transitional || sj;
                r && r.legacyInterceptorReqResOrdering ? c.unshift(e.fulfilled, e.rejected) : c.push(e.fulfilled, e.rejected)
            });
            let u = [];
            this.interceptors.response.forEach(function(e) {
                u.push(e.fulfilled, e.rejected)
            });
            let d = 0;
            if (!l) {
                let e = [o_.bind(this), void 0];
                for (e.unshift(...c), e.push(...u), i = e.length, r = Promise.resolve(t); d < i;) r = r.then(e[d++], e[d++]);
                return r
            }
            i = c.length;
            let h = t;
            for (; d < i;) {
                let e = c[d++],
                    t = c[d++];
                try {
                    h = e(h)
                } catch (e) {
                    t.call(this, e);
                    break
                }
            }
            try {
                r = o_.call(this, h)
            } catch (e) {
                return Promise.reject(e)
            }
            for (d = 0, i = u.length; d < i;) r = r.then(u[d++], u[d++]);
            return r
        }
        getUri(e) {
            return sN(ot((e = oi(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer)
        }
    }
    sb.forEach(["delete", "get", "head", "options"], function(e) {
        oT.prototype[e] = function(t, r) {
            return this.request(oi(r || {}, {
                method: e,
                url: t,
                data: (r || {}).data
            }))
        }
    }), sb.forEach(["post", "put", "patch"], function(e) {
        function t(t) {
            return function(r, i, n) {
                return this.request(oi(n || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: r,
                    data: i
                }))
            }
        }
        oT.prototype[e] = t(), oT.prototype[e + "Form"] = t(!0)
    });
    class oO {
        constructor(e) {
            let t;
            if ("function" != typeof e) throw TypeError("executor must be a function.");
            this.promise = new Promise(function(e) {
                t = e
            });
            const r = this;
            this.promise.then(e => {
                if (!r._listeners) return;
                let t = r._listeners.length;
                for (; t-- > 0;) r._listeners[t](e);
                r._listeners = null
            }), this.promise.then = e => {
                let t, i = new Promise(e => {
                    r.subscribe(e), t = e
                }).then(e);
                return i.cancel = function() {
                    r.unsubscribe(t)
                }, i
            }, e(function(e, i, n) {
                r.reason || (r.reason = new s3(e, i, n), t(r.reason))
            })
        }
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
        unsubscribe(e) {
            if (!this._listeners) return;
            let t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
        }
        toAbortSignal() {
            let e = new AbortController,
                t = t => {
                    e.abort(t)
                };
            return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
        }
        static source() {
            let e;
            return {
                token: new oO(function(t) {
                    e = t
                }),
                cancel: e
            }
        }
    }
    let oB = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
        WebServerIsDown: 521,
        ConnectionTimedOut: 522,
        OriginIsUnreachable: 523,
        TimeoutOccurred: 524,
        SslHandshakeFailed: 525,
        InvalidSslCertificate: 526
    };
    Object.entries(oB).forEach(([e, t]) => {
        oB[t] = e
    });
    let oR = function e(t) {
        let r = new oT(t),
            i = az(oT.prototype.request, r);
        return sb.extend(i, oT.prototype, r, {
            allOwnKeys: !0
        }), sb.extend(i, r, null, {
            allOwnKeys: !0
        }), i.create = function(r) {
            return e(oi(t, r))
        }, i
    }(sW);
    oR.Axios = oT, oR.CanceledError = s3, oR.CancelToken = oO, oR.isCancel = s1, oR.VERSION = oS, oR.toFormData = sO, oR.AxiosError = sS, oR.Cancel = oR.CanceledError, oR.all = function(e) {
        return Promise.all(e)
    }, oR.spread = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }, oR.isAxiosError = function(e) {
        return sb.isObject(e) && !0 === e.isAxiosError
    }, oR.mergeConfig = oi, oR.AxiosHeaders = sZ, oR.formToJSON = e => sH(sb.isHTMLForm(e) ? new FormData(e) : e), oR.getAdapter = ob, oR.HttpStatusCode = oB, oR.default = oR;
    var oI = ((A = oI || {}).currency = "currency", A.plugin = "plugin", A.tool = "tool", A.swap = "swap", A);
    class oC {
        constructor(e) {
            this.error = e, this.originalError = e
        }
        _tag = "FetchError";
        originalError
    }
    var oN = ((D = oN || {}).currency = "currency", D.plugin = "plugin", D.tool = "tool", D.swap = "swap", D),
        oP = Object.defineProperty,
        oj = Object.getOwnPropertyDescriptor;
    let oF = class {
        managerApiBaseUrl;
        webSocketBaseUrl;
        constructor({
            managerApiUrl: e,
            webSocketUrl: t
        }) {
            this.managerApiBaseUrl = e, this.webSocketBaseUrl = t, console.log(this.webSocketBaseUrl)
        }
        getDeviceVersion(e, t) {
            return eW(() => oR.get(`${this.managerApiBaseUrl}/get_device_version`, {
                params: {
                    target_id: e,
                    provider: t
                }
            })).map(e => e.data).mapLeft(e => new oC(e))
        }
        getFirmwareVersion(e, t, r) {
            return eW(() => oR.get(`${this.managerApiBaseUrl}/get_firmware_version`, {
                params: {
                    device_version: t,
                    version_name: e,
                    provider: r
                }
            })).map(e => e.data).mapLeft(e => new oC(e))
        }
        getAppsByHash(e) {
            return eW(() => oR.post(`${this.managerApiBaseUrl}/v2/apps/hash`, e)).map(e => e.data).map(e => this.mapApplicationDtoToApplication(e)).mapLeft(e => new oC(e))
        }
        mapAppTypeDtoToAppType(e) {
            switch (e) {
                case oN.currency:
                    return oI.currency;
                case oN.plugin:
                    return oI.plugin;
                case oN.tool:
                    return oI.tool;
                case oN.swap:
                    return oI.swap
            }
        }
        mapApplicationDtoToApplication(e) {
            return e.map(e => {
                if (null === e) return null;
                let {
                    applicationType: t,
                    ...r
                } = e;
                return { ...r,
                    applicationType: this.mapAppTypeDtoToAppType(t)
                }
            })
        }
    };
    oF = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? oj(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && oP(t, r, a), a
    })([iy(), (w = ig(ao.DmkConfig), (e, t) => w(e, t, 0))], oF);
    var oV = Object.defineProperty,
        oG = Object.getOwnPropertyDescriptor;
    let oL = class {
        constructor(e) {
            this.dataSource = e
        }
        getDeviceVersion(e, t) {
            return this.dataSource.getDeviceVersion(e.targetId.toString(), t)
        }
        getFirmwareVersion(e, t, r) {
            return this.dataSource.getFirmwareVersion(e.seVersion, t.id, r)
        }
        getAppsByHash(e) {
            let t = e.reduce((e, t) => t.appFullHash ? e.concat(t.appFullHash) : e, []);
            return eW(async ({
                fromPromise: e,
                throwE: r
            }) => {
                if (0 === t.length) return [];
                try {
                    return await e(this.dataSource.getAppsByHash(t))
                } catch (e) {
                    return r(e instanceof oC ? e : new oC(e))
                }
            })
        }
    };
    oL = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? oG(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && oV(t, r, a), a
    })([iy(), (T = ig(ao.ManagerApiDataSource), (e, t) => T(e, t, 0))], oL);
    let oM = "https://manager.api.live.ledger.com/api",
        oU = "http://localhost:8080";
    var o$ = null;
    let oq = o$ = "u" > typeof WebSocket ? WebSocket : "u" > typeof MozWebSocket ? MozWebSocket : e.g.WebSocket || e.g.MozWebSocket;
    var oz = e.i(561466);
    class oH {
        constructor(e) {
            this.error = e, this.originalError = e
        }
        _tag = "WebSocketConnectionError";
        originalError
    }
    var oW = Object.defineProperty,
        oK = Object.getOwnPropertyDescriptor;
    let oJ = class {
        webSocketBaseUrl;
        constructor({
            webSocketUrl: e
        }) {
            this.webSocketBaseUrl = e
        }
        genuineCheck(e) {
            let t = oz.default.format({
                pathname: `${this.webSocketBaseUrl}/genuine`,
                query: e
            });
            return this._connectWebSocket(t)
        }
        listInstalledApps(e) {
            let t = oz.default.format({
                pathname: `${this.webSocketBaseUrl}/apps/list`,
                query: e
            });
            return this._connectWebSocket(t)
        }
        updateMcu(e) {
            let t = oz.default.format({
                pathname: `${this.webSocketBaseUrl}/mcu`,
                query: e
            });
            return this._connectWebSocket(t)
        }
        updateFirmware(e) {
            let t = oz.default.format({
                pathname: `${this.webSocketBaseUrl}/install`,
                query: e
            });
            return this._connectWebSocket(t)
        }
        installApp(e) {
            let t = oz.default.format({
                pathname: `${this.webSocketBaseUrl}/install`,
                query: e
            });
            return this._connectWebSocket(t)
        }
        uninstallApp(e) {
            let t = oz.default.format({
                pathname: `${this.webSocketBaseUrl}/install`,
                query: e
            });
            return this._connectWebSocket(t)
        }
        _connectWebSocket(e) {
            try {
                return eN(new oq(e))
            } catch (e) {
                return eC(new oH(e))
            }
        }
    };
    oJ = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? oK(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && oW(t, r, a), a
    })([iy(), (O = ig(ac.DmkConfig), (e, t) => O(e, t, 0))], oJ);
    var oX = Object.defineProperty,
        oY = Object.getOwnPropertyDescriptor;
    let oQ = class {
        constructor(e) {
            this.dataSource = e
        }
        genuineCheck(e, t) {
            let r = {
                targetId: e.targetId.toString(),
                perso: t.perso
            };
            return this.dataSource.genuineCheck(r)
        }
        listInstalledApps(e, t) {
            let r = {
                targetId: e.targetId.toString(),
                perso: t.perso
            };
            return this.dataSource.listInstalledApps(r)
        }
        updateMcu(e, t) {
            let r = {
                targetId: e.targetId.toString(),
                version: t.version
            };
            return this.dataSource.updateMcu(r)
        }
        updateFirmware(e, t) {
            let r = {
                targetId: e.targetId.toString(),
                perso: t.perso,
                firmware: t.firmware,
                firmwareKey: t.firmwareKey
            };
            return this.dataSource.updateFirmware(r)
        }
        installApp(e, t, r, i, n, a) {
            let s = {
                targetId: e.targetId.toString(),
                perso: t,
                firmware: r,
                firmwareKey: i,
                deleteKey: n,
                hash: a
            };
            return this.dataSource.installApp(s)
        }
        uninstallApp(e, t, r, i, n, a) {
            let s = {
                targetId: e.targetId.toString(),
                perso: t,
                firmware: r,
                firmwareKey: i,
                deleteKey: n,
                hash: a
            };
            return this.dataSource.uninstallApp(s)
        }
    };
    oQ = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? oY(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && oX(t, r, a), a
    })([iy(), (B = ig(ac.SecureChannelDataSource), (e, t) => B(e, t, 0))], oQ);
    let oZ = "wss://scriptrunner.api.live.ledger.com/update";
    var o0 = Object.defineProperty,
        o1 = Object.getOwnPropertyDescriptor,
        o3 = (e, t) => (r, i) => t(r, i, e);
    let o2 = class {
        _sessionService;
        _logger;
        constructor(e, t) {
            this._sessionService = e, this._logger = t("SendApduUseCase")
        }
        async execute({
            sessionId: e,
            apdu: t
        }) {
            return this._sessionService.getDeviceSessionById(e).caseOf({
                Right: async r => (await r.sendApdu(t)).caseOf({
                    Right: e => e,
                    Left: r => {
                        throw this._logger.error("Error sending APDU", {
                            data: {
                                sessionId: e,
                                apdu: t,
                                error: r
                            }
                        }), r
                    }
                }),
                Left: e => {
                    throw this._logger.error("Error getting deviceSession", {
                        data: {
                            error: e
                        }
                    }), e
                }
            })
        }
    };
    o2 = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? o1(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && o0(t, r, a), a
    })([iy(), o3(0, ig(iK.DeviceSessionService)), o3(1, ig(iG.LoggerPublisherServiceFactory))], o2);
    var o6 = Object.defineProperty,
        o5 = Object.getOwnPropertyDescriptor,
        o4 = (e, t) => (r, i) => t(r, i, e);
    let o7 = class {
        constructor(e, t, r, i, n, a) {
            if (this._config = t, this._loggerModuleFactory = r, this._deviceModelDataSource = i, this._apduSenderServiceFactory = n, this._apduReceiverServiceFactory = a, this._logger = r("TransportService"), 0 === e.length) throw this._logger.warn("No transports provided, please check your configuration"), new nW("No transports provided, please check your configuration");
            for (const t of e) {
                const e = this.addTransport(t);
                if (e.isLeft()) throw e.extract()
            }
        }
        _transports = new Map;
        _logger;
        addTransport(e) {
            let t = e({
                deviceModelDataSource: this._deviceModelDataSource,
                loggerServiceFactory: this._loggerModuleFactory,
                config: this._config,
                apduSenderServiceFactory: this._apduSenderServiceFactory,
                apduReceiverServiceFactory: this._apduReceiverServiceFactory
            });
            return this.addTransportInternal(t)
        }
        addTransportInternal(e) {
            return this.getTransport(e.getIdentifier()).isJust() ? (this._logger.warn(`Transport ${e.getIdentifier()} already exists, please check your configuration`), eC(new nH(`Transport ${e.getIdentifier()} already exists, please check your configuration`))) : (this._transports.set(e.getIdentifier(), e), eN(void 0))
        }
        getTransport(e) {
            return eA.fromNullable(this._transports.get(e))
        }
        getAllTransports() {
            return Array.from(this._transports.values())
        }
    };
    o7 = ((e, t, r, i) => {
        for (var n, a = i > 1 ? void 0 : i ? o5(t, r) : t, s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
        return i && a && o6(t, r, a), a
    })([iy(), o4(0, ig(al.TransportsInput)), o4(1, ig(al.DmkConfig)), o4(2, ig(iG.LoggerPublisherServiceFactory)), o4(3, ig(nS.DeviceModelDataSource)), o4(4, ig(iK.ApduSenderServiceFactory)), o4(5, ig(iK.ApduReceiverServiceFactory))], o7);
    class o8 {
        container;
        constructor({
            stub: e,
            transports: t,
            loggers: r,
            config: i
        } = {}) {
            this.container = (({
                stub: e = !1,
                transports: t = [],
                loggers: r = [],
                config: i = {
                    mockUrl: oU,
                    managerApiUrl: oM,
                    webSocketUrl: oZ
                }
            }) => {
                let n = new ip;
                return n.load((({
                    stub: e
                }) => new ix((t, r, i, n) => {
                    t(iW.LocalConfigDataSource).to(no), t(iW.RemoteConfigDataSource).to(np), t(iW.GetDmkVersionUseCase).to(n_), t(iW.ConfigService).to(nv), e && (n(iW.LocalConfigDataSource).to(nu), n(iW.RemoteConfigDataSource).to(nm))
                }))({
                    stub: e
                }), (({
                    stub: e
                }) => new ix((e, t, r, i) => {
                    e(nS.DeviceModelDataSource).to(iD)
                }))({
                    stub: e
                }), (({
                    stub: e = !1,
                    transports: t = [],
                    config: r
                } = {}) => new ix((e, i, n, a) => {
                    e(al.TransportsInput).toConstantValue(t), e(al.TransportService).to(o7).inSingletonScope(), e(al.DmkConfig).toConstantValue(r)
                }))({
                    stub: e,
                    transports: t,
                    config: i
                }), (({
                    stub: e,
                    config: t
                }) => new ix((r, i, n, a) => {
                    r(ao.DmkConfig).toConstantValue(t), r(ao.ManagerApiDataSource).to(oF), r(ao.ManagerApiService).to(oL), e && (a(ao.ManagerApiDataSource).to(i2), a(ao.ManagerApiService).to(i2))
                }))({
                    stub: e,
                    config: i
                }), (({
                    stub: e,
                    config: t
                }) => new ix((e, r, i, n) => {
                    e(ac.DmkConfig).toConstantValue(t), e(ac.SecureChannelDataSource).to(oJ), e(ac.SecureChannelService).to(oQ)
                }))({
                    stub: e,
                    config: i
                }), (({
                    stub: e = !1
                }) => new ix((t, r, i, n) => {
                    t(iJ.ConnectUseCase).to(ap), t(iJ.DisconnectUseCase).to(ay), t(iJ.StartDiscoveringUseCase).to(aj), t(iJ.StopDiscoveringUseCase).to(aG), t(iJ.GetConnectedDeviceUseCase).to(aE), t(iJ.ListenToKnownDevicesUseCase).to(aC), t(iJ.ListenToConnectedDeviceUseCase).to(aB), t(iJ.ListConnectedDevicesUseCase).to(aD), e && (n(iJ.StartDiscoveringUseCase).to(i2), n(iJ.StopDiscoveringUseCase).to(i2), n(iJ.ConnectUseCase).to(i2), n(iJ.DisconnectUseCase).to(i2), n(iJ.GetConnectedDeviceUseCase).to(i2), n(iJ.ListenToKnownDevicesUseCase).to(i2), n(iJ.ListenToConnectedDeviceUseCase).to(i2), n(iJ.ListConnectedDevicesUseCase).to(i2))
                }))({
                    stub: e
                }), (({
                    subscribers: e
                } = {
                    subscribers: []
                }) => new ix((t, r, i, n, a, s, o) => {
                    t(iG.LoggerPublisherServiceFactory).toFactory(t => t => new a$(e, t))
                }))({
                    subscribers: r
                }), (({
                    stub: e
                } = {
                    stub: !1
                }) => new ix((t, r, i, n, a, s, o) => {
                    t(iK.ApduSenderServiceFactory).toFactory(e => {
                        let t = e.container.get(iG.LoggerPublisherServiceFactory);
                        return e => new iz(e, t)
                    }), t(iK.ApduReceiverServiceFactory).toFactory(e => {
                        let t = e.container.get(iG.LoggerPublisherServiceFactory);
                        return (e = {}) => new iU(e, t)
                    }), t(iK.DeviceSessionService).to(nR).inSingletonScope(), t(iK.GetDeviceSessionStateUseCase).to(nV), t(iK.CloseSessionsUseCase).to(nN), t(iK.ToggleDeviceSessionRefresherUseCase).to(nT), e && (n(iK.GetDeviceSessionStateUseCase).to(i2), n(iK.ToggleDeviceSessionRefresherUseCase).to(i2))
                }))({
                    stub: e
                }), (({
                    stub: e = !1
                }) => new ix((t, r, i, n, a, s, o) => {
                    t(iX.SendApduUseCase).to(o2), e && n(iX.SendApduUseCase).to(i2)
                }))({
                    stub: e
                }), (({
                    stub: e = !1
                } = {}) => new ix((t, r, i, n, a, s, o) => {
                    t(iH.SendCommandUseCase).to(i0), e && n(iH.SendCommandUseCase).to(i2)
                }))({
                    stub: e
                }), (({
                    stub: e = !1
                } = {}) => new ix((t, r, i, n, a, s, o) => {
                    t(i8.ExecuteDeviceActionUseCase).to(i7), e && n(i8.ExecuteDeviceActionUseCase).to(i2)
                }))({
                    stub: e
                })), n
            })({
                stub: e,
                transports: t,
                loggers: r,
                config: i
            })
        }
        getVersion() {
            return this.container.get(iW.GetDmkVersionUseCase).getDmkVersion()
        }
        startDiscovering(e) {
            return this.container.get(iJ.StartDiscoveringUseCase).execute(e)
        }
        stopDiscovering() {
            return this.container.get(iJ.StopDiscoveringUseCase).execute()
        }
        listenToKnownDevices() {
            return this.container.get(iJ.ListenToKnownDevicesUseCase).execute()
        }
        connect(e) {
            return this.container.get(iJ.ConnectUseCase).execute(e)
        }
        disconnect(e) {
            return this.container.get(iJ.DisconnectUseCase).execute(e)
        }
        sendApdu(e) {
            return this.container.get(iX.SendApduUseCase).execute(e)
        }
        sendCommand(e) {
            return this.container.get(iH.SendCommandUseCase).execute(e)
        }
        executeDeviceAction(e) {
            return this.container.get(i8.ExecuteDeviceActionUseCase).execute(e)
        }
        getConnectedDevice(e) {
            return this.container.get(iJ.GetConnectedDeviceUseCase).execute(e)
        }
        getDeviceSessionState(e) {
            return this.container.get(iK.GetDeviceSessionStateUseCase).execute(e)
        }
        close() {
            return this.container.get(iK.CloseSessionsUseCase).execute()
        }
        listConnectedDevices() {
            return this.container.get(iJ.ListConnectedDevicesUseCase).execute()
        }
        listenToConnectedDevice() {
            return this.container.get(iJ.ListenToConnectedDeviceUseCase).execute()
        }
        toggleDeviceSessionRefresher(e) {
            return this.container.get(iK.ToggleDeviceSessionRefresherUseCase).execute(e)
        }
    }
    e.s(["DeviceManagementKitBuilder", () => o9], 328037);
    class o9 {
        stub = !1;
        loggers = [];
        transports = [];
        config = {
            managerApiUrl: oM,
            mockUrl: oU,
            webSocketUrl: oZ
        };
        build() {
            return new o8({
                stub: this.stub,
                transports: this.transports,
                loggers: this.loggers,
                config: this.config
            })
        }
        setStub(e) {
            return this.stub = e, this
        }
        addTransport(e) {
            return this.transports.push(e), this
        }
        addLogger(e) {
            return this.loggers.push(e), this
        }
        addConfig(e) {
            return this.config = { ...this.config,
                ...e
            }, this
        }
    }
    class ce {
        id;
        deviceModel;
        sendApdu;
        type;
        transport;
        constructor({
            id: e,
            deviceModel: t,
            type: r,
            transport: i,
            sendApdu: n
        }) {
            this.id = e, this.deviceModel = t, this.sendApdu = n, this.type = r, this.transport = i
        }
    }
    e.s([], 16058);
    class ct extends nG {
        constructor(e) {
            super(e), this.err = e
        }
        _tag = "WebHidTransportNotSupportedError"
    }
    class cr extends nG {
        constructor(e) {
            super(e), this.err = e
        }
        _tag = "WebHidSendReportError"
    }
    var ci = function() {
        return (ci = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };

    function cn() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(function(e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var i, n, a = r.call(e),
                s = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(i = a.next()).done;) s.push(i.value)
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
            return s
        }(arguments[t]));
        return e
    }
    var ca = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

    function cs() {
        return !("u" > typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call(void 0 !== aq.default ? aq.default : 0)
    }
    var co = {};

    function cc() {
        return cs() ? e.g : "u" > typeof window ? window : "u" > typeof self ? self : co
    }

    function cl(e, t, r) {
        var i = r || cc(),
            n = i.__SENTRY__ = i.__SENTRY__ || {};
        return n[e] || (n[e] = t())
    }
    var cu = cc(),
        cd = ["debug", "info", "warn", "error", "log", "assert"];

    function ch(e) {
        var t = cc();
        if (!("console" in t)) return e();
        var r = t.console,
            i = {};
        cd.forEach(function(e) {
            var n = r[e] && r[e].__sentry_original__;
            e in t.console && n && (i[e] = r[e], r[e] = n)
        });
        try {
            return e()
        } finally {
            Object.keys(i).forEach(function(e) {
                r[e] = i[e]
            })
        }
    }

    function cp() {
        var e = !1,
            t = {
                enable: function() {
                    e = !0
                },
                disable: function() {
                    e = !1
                }
            };
        return ca ? cd.forEach(function(r) {
            t[r] = function() {
                for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                e && ch(function() {
                    var e;
                    (e = cu.console)[r].apply(e, function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(function(e, t) {
                            var r = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!r) return e;
                            var i, n, a = r.call(e),
                                s = [];
                            try {
                                for (;
                                    (void 0 === t || t-- > 0) && !(i = a.next()).done;) s.push(i.value)
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
                            return s
                        }(arguments[t]));
                        return e
                    }(["Sentry Logger [" + r + "]:"], t))
                })
            }
        }) : cd.forEach(function(e) {
            t[e] = function() {}
        }), t
    }
    es = ca ? cl("logger", cp) : cp();
    var cf = {
            nowSeconds: function() {
                return Date.now() / 1e3
            }
        },
        cx = cs() ? function() {
            try {
                var e;
                return (e = module, e.require("perf_hooks")).performance
            } catch (e) {
                return
            }
        }() : function() {
            var e = cc().performance;
            if (e && e.now) return {
                now: function() {
                    return e.now()
                },
                timeOrigin: Date.now() - e.now()
            }
        }(),
        cm = void 0 === cx ? cf : {
            nowSeconds: function() {
                return (cx.timeOrigin + cx.now()) / 1e3
            }
        },
        cy = cf.nowSeconds.bind(cf),
        ck = cm.nowSeconds.bind(cm);

    function cg() {
        var e = cc(),
            t = e.crypto || e.msCrypto;
        if (void 0 !== t && t.getRandomValues) {
            var r = new Uint16Array(8);
            t.getRandomValues(r), r[3] = 4095 & r[3] | 16384, r[4] = 16383 & r[4] | 32768;
            var i = function(e) {
                for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                return t
            };
            return i(r[0]) + i(r[1]) + i(r[2]) + i(r[3]) + i(r[4]) + i(r[5]) + i(r[6]) + i(r[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }! function() {
        var e = cc().performance;
        if (e && e.now) {
            var t = e.now(),
                r = Date.now(),
                i = e.timeOrigin ? Math.abs(e.timeOrigin + t - r) : 36e5,
                n = e.timing && e.timing.navigationStart,
                a = "number" == typeof n ? Math.abs(n + t - r) : 36e5;
            (i < 36e5 || a < 36e5) && i <= a && e.timeOrigin
        }
    }();
    var cv = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        cb = Object.prototype.toString;

    function cE(e) {
        return "[object Object]" === cb.call(e)
    }

    function c_(e) {
        return !!(e && e.then && "function" == typeof e.then)
    }
    var cS = function() {
            function e(e) {
                var t = this;
                this._state = 0, this._handlers = [], this._resolve = function(e) {
                    t._setResult(1, e)
                }, this._reject = function(e) {
                    t._setResult(2, e)
                }, this._setResult = function(e, r) {
                    if (0 === t._state) {
                        if (c_(r)) return void r.then(t._resolve, t._reject);
                        t._state = e, t._value = r, t._executeHandlers()
                    }
                }, this._executeHandlers = function() {
                    if (0 !== t._state) {
                        var e = t._handlers.slice();
                        t._handlers = [], e.forEach(function(e) {
                            e[0] || (1 === t._state && e[1](t._value), 2 === t._state && e[2](t._value), e[0] = !0)
                        })
                    }
                };
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }
            return e.prototype.then = function(t, r) {
                var i = this;
                return new e(function(e, n) {
                    i._handlers.push([!1, function(r) {
                        if (t) try {
                            e(t(r))
                        } catch (e) {
                            n(e)
                        } else e(r)
                    }, function(t) {
                        if (r) try {
                            e(r(t))
                        } catch (e) {
                            n(e)
                        } else n(t)
                    }]), i._executeHandlers()
                })
            }, e.prototype.catch = function(e) {
                return this.then(function(e) {
                    return e
                }, e)
            }, e.prototype.finally = function(t) {
                var r = this;
                return new e(function(e, i) {
                    var n, a;
                    return r.then(function(e) {
                        a = !1, n = e, t && t()
                    }, function(e) {
                        a = !0, n = e, t && t()
                    }).then(function() {
                        a ? i(n) : e(n)
                    })
                })
            }, e
        }(),
        cA = function() {
            function e() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
            }
            return e.clone = function(t) {
                var r = new e;
                return t && (r._breadcrumbs = cn(t._breadcrumbs), r._tags = ci({}, t._tags), r._extra = ci({}, t._extra), r._contexts = ci({}, t._contexts), r._user = t._user, r._level = t._level, r._span = t._span, r._session = t._session, r._transactionName = t._transactionName, r._fingerprint = t._fingerprint, r._eventProcessors = cn(t._eventProcessors), r._requestSession = t._requestSession), r
            }, e.prototype.addScopeListener = function(e) {
                this._scopeListeners.push(e)
            }, e.prototype.addEventProcessor = function(e) {
                return this._eventProcessors.push(e), this
            }, e.prototype.setUser = function(e) {
                return this._user = e || {}, this._session && this._session.update({
                    user: e
                }), this._notifyScopeListeners(), this
            }, e.prototype.getUser = function() {
                return this._user
            }, e.prototype.getRequestSession = function() {
                return this._requestSession
            }, e.prototype.setRequestSession = function(e) {
                return this._requestSession = e, this
            }, e.prototype.setTags = function(e) {
                return this._tags = ci(ci({}, this._tags), e), this._notifyScopeListeners(), this
            }, e.prototype.setTag = function(e, t) {
                var r;
                return this._tags = ci(ci({}, this._tags), ((r = {})[e] = t, r)), this._notifyScopeListeners(), this
            }, e.prototype.setExtras = function(e) {
                return this._extra = ci(ci({}, this._extra), e), this._notifyScopeListeners(), this
            }, e.prototype.setExtra = function(e, t) {
                var r;
                return this._extra = ci(ci({}, this._extra), ((r = {})[e] = t, r)), this._notifyScopeListeners(), this
            }, e.prototype.setFingerprint = function(e) {
                return this._fingerprint = e, this._notifyScopeListeners(), this
            }, e.prototype.setLevel = function(e) {
                return this._level = e, this._notifyScopeListeners(), this
            }, e.prototype.setTransactionName = function(e) {
                return this._transactionName = e, this._notifyScopeListeners(), this
            }, e.prototype.setTransaction = function(e) {
                return this.setTransactionName(e)
            }, e.prototype.setContext = function(e, t) {
                var r;
                return null === t ? delete this._contexts[e] : this._contexts = ci(ci({}, this._contexts), ((r = {})[e] = t, r)), this._notifyScopeListeners(), this
            }, e.prototype.setSpan = function(e) {
                return this._span = e, this._notifyScopeListeners(), this
            }, e.prototype.getSpan = function() {
                return this._span
            }, e.prototype.getTransaction = function() {
                var e = this.getSpan();
                return e && e.transaction
            }, e.prototype.setSession = function(e) {
                return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
            }, e.prototype.getSession = function() {
                return this._session
            }, e.prototype.update = function(t) {
                if (!t) return this;
                if ("function" == typeof t) {
                    var r = t(this);
                    return r instanceof e ? r : this
                }
                return t instanceof e ? (this._tags = ci(ci({}, this._tags), t._tags), this._extra = ci(ci({}, this._extra), t._extra), this._contexts = ci(ci({}, this._contexts), t._contexts), t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : cE(t) && (this._tags = ci(ci({}, this._tags), t.tags), this._extra = ci(ci({}, this._extra), t.extra), this._contexts = ci(ci({}, this._contexts), t.contexts), t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession)), this
            }, e.prototype.clear = function() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
            }, e.prototype.addBreadcrumb = function(e, t) {
                var r = "number" == typeof t ? Math.min(t, 100) : 100;
                if (r <= 0) return this;
                var i = ci({
                    timestamp: cy()
                }, e);
                return this._breadcrumbs = cn(this._breadcrumbs, [i]).slice(-r), this._notifyScopeListeners(), this
            }, e.prototype.clearBreadcrumbs = function() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }, e.prototype.applyToEvent = function(e, t) {
                if (this._extra && Object.keys(this._extra).length && (e.extra = ci(ci({}, this._extra), e.extra)), this._tags && Object.keys(this._tags).length && (e.tags = ci(ci({}, this._tags), e.tags)), this._user && Object.keys(this._user).length && (e.user = ci(ci({}, this._user), e.user)), this._contexts && Object.keys(this._contexts).length && (e.contexts = ci(ci({}, this._contexts), e.contexts)), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
                    e.contexts = ci({
                        trace: this._span.getTraceContext()
                    }, e.contexts);
                    var r = this._span.transaction && this._span.transaction.name;
                    r && (e.tags = ci({
                        transaction: r
                    }, e.tags))
                }
                return this._applyFingerprint(e), e.breadcrumbs = cn(e.breadcrumbs || [], this._breadcrumbs), e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = this._sdkProcessingMetadata, this._notifyEventProcessors(cn(cl("globalEventProcessors", function() {
                    return []
                }), this._eventProcessors), e, t)
            }, e.prototype.setSDKProcessingMetadata = function(e) {
                return this._sdkProcessingMetadata = ci(ci({}, this._sdkProcessingMetadata), e), this
            }, e.prototype._notifyEventProcessors = function(e, t, r, i) {
                var n = this;
                return void 0 === i && (i = 0), new cS(function(a, s) {
                    var o = e[i];
                    if (null === t || "function" != typeof o) a(t);
                    else {
                        var c = o(ci({}, t), r);
                        c_(c) ? c.then(function(t) {
                            return n._notifyEventProcessors(e, t, r, i + 1).then(a)
                        }).then(null, s) : n._notifyEventProcessors(e, c, r, i + 1).then(a).then(null, s)
                    }
                })
            }, e.prototype._notifyScopeListeners = function() {
                var e = this;
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(function(t) {
                    t(e)
                }), this._notifyingListeners = !1)
            }, e.prototype._applyFingerprint = function(e) {
                e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
            }, e
        }(),
        cD = function() {
            function e(e) {
                this.errors = 0, this.sid = cg(), this.duration = 0, this.status = "ok", this.init = !0, this.ignoreDuration = !1;
                var t = ck();
                this.timestamp = t, this.started = t, e && this.update(e)
            }
            return e.prototype.update = function(e) {
                if (void 0 === e && (e = {}), e.user && (!this.ipAddress && e.user.ip_address && (this.ipAddress = e.user.ip_address), this.did || e.did || (this.did = e.user.id || e.user.email || e.user.username)), this.timestamp = e.timestamp || ck(), e.ignoreDuration && (this.ignoreDuration = e.ignoreDuration), e.sid && (this.sid = 32 === e.sid.length ? e.sid : cg()), void 0 !== e.init && (this.init = e.init), !this.did && e.did && (this.did = "" + e.did), "number" == typeof e.started && (this.started = e.started), this.ignoreDuration) this.duration = void 0;
                else if ("number" == typeof e.duration) this.duration = e.duration;
                else {
                    var t = this.timestamp - this.started;
                    this.duration = t >= 0 ? t : 0
                }
                e.release && (this.release = e.release), e.environment && (this.environment = e.environment), !this.ipAddress && e.ipAddress && (this.ipAddress = e.ipAddress), !this.userAgent && e.userAgent && (this.userAgent = e.userAgent), "number" == typeof e.errors && (this.errors = e.errors), e.status && (this.status = e.status)
            }, e.prototype.close = function(e) {
                e ? this.update({
                    status: e
                }) : "ok" === this.status ? this.update({
                    status: "exited"
                }) : this.update()
            }, e.prototype.toJSON = function() {
                return function e(t) {
                    var r, i;
                    if (cE(t)) {
                        var n = {};
                        try {
                            for (var a = function(e) {
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
                                }(Object.keys(t)), s = a.next(); !s.done; s = a.next()) {
                                var o = s.value;
                                void 0 !== t[o] && (n[o] = e(t[o]))
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (i = a.return) && i.call(a)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return n
                    }
                    return Array.isArray(t) ? t.map(e) : t
                }({
                    sid: "" + this.sid,
                    init: this.init,
                    started: new Date(1e3 * this.started).toISOString(),
                    timestamp: new Date(1e3 * this.timestamp).toISOString(),
                    status: this.status,
                    errors: this.errors,
                    did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                    duration: this.duration,
                    attrs: {
                        release: this.release,
                        environment: this.environment,
                        ip_address: this.ipAddress,
                        user_agent: this.userAgent
                    }
                })
            }, e
        }(),
        cw = function() {
            function e(e, t, r) {
                void 0 === t && (t = new cA), void 0 === r && (r = 4), this._version = r, this._stack = [{}], this.getStackTop().scope = t, e && this.bindClient(e)
            }
            return e.prototype.isOlderThan = function(e) {
                return this._version < e
            }, e.prototype.bindClient = function(e) {
                this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations()
            }, e.prototype.pushScope = function() {
                var e = cA.clone(this.getScope());
                return this.getStack().push({
                    client: this.getClient(),
                    scope: e
                }), e
            }, e.prototype.popScope = function() {
                return !(this.getStack().length <= 1) && !!this.getStack().pop()
            }, e.prototype.withScope = function(e) {
                var t = this.pushScope();
                try {
                    e(t)
                } finally {
                    this.popScope()
                }
            }, e.prototype.getClient = function() {
                return this.getStackTop().client
            }, e.prototype.getScope = function() {
                return this.getStackTop().scope
            }, e.prototype.getStack = function() {
                return this._stack
            }, e.prototype.getStackTop = function() {
                return this._stack[this._stack.length - 1]
            }, e.prototype.captureException = function(e, t) {
                var r = this._lastEventId = t && t.event_id ? t.event_id : cg(),
                    i = t;
                if (!t) {
                    var n = void 0;
                    try {
                        throw Error("Sentry syntheticException")
                    } catch (e) {
                        n = e
                    }
                    i = {
                        originalException: e,
                        syntheticException: n
                    }
                }
                return this._invokeClient("captureException", e, ci(ci({}, i), {
                    event_id: r
                })), r
            }, e.prototype.captureMessage = function(e, t, r) {
                var i = this._lastEventId = r && r.event_id ? r.event_id : cg(),
                    n = r;
                if (!r) {
                    var a = void 0;
                    try {
                        throw Error(e)
                    } catch (e) {
                        a = e
                    }
                    n = {
                        originalException: e,
                        syntheticException: a
                    }
                }
                return this._invokeClient("captureMessage", e, t, ci(ci({}, n), {
                    event_id: i
                })), i
            }, e.prototype.captureEvent = function(e, t) {
                var r = t && t.event_id ? t.event_id : cg();
                return "transaction" !== e.type && (this._lastEventId = r), this._invokeClient("captureEvent", e, ci(ci({}, t), {
                    event_id: r
                })), r
            }, e.prototype.lastEventId = function() {
                return this._lastEventId
            }, e.prototype.addBreadcrumb = function(e, t) {
                var r = this.getStackTop(),
                    i = r.scope,
                    n = r.client;
                if (i && n) {
                    var a = n.getOptions && n.getOptions() || {},
                        s = a.beforeBreadcrumb,
                        o = void 0 === s ? null : s,
                        c = a.maxBreadcrumbs,
                        l = void 0 === c ? 100 : c;
                    if (!(l <= 0)) {
                        var u = cy(),
                            d = ci({
                                timestamp: u
                            }, e),
                            h = o ? ch(function() {
                                return o(d, t)
                            }) : d;
                        null !== h && i.addBreadcrumb(h, l)
                    }
                }
            }, e.prototype.setUser = function(e) {
                var t = this.getScope();
                t && t.setUser(e)
            }, e.prototype.setTags = function(e) {
                var t = this.getScope();
                t && t.setTags(e)
            }, e.prototype.setExtras = function(e) {
                var t = this.getScope();
                t && t.setExtras(e)
            }, e.prototype.setTag = function(e, t) {
                var r = this.getScope();
                r && r.setTag(e, t)
            }, e.prototype.setExtra = function(e, t) {
                var r = this.getScope();
                r && r.setExtra(e, t)
            }, e.prototype.setContext = function(e, t) {
                var r = this.getScope();
                r && r.setContext(e, t)
            }, e.prototype.configureScope = function(e) {
                var t = this.getStackTop(),
                    r = t.scope,
                    i = t.client;
                r && i && e(r)
            }, e.prototype.run = function(e) {
                var t = cO(this);
                try {
                    e(this)
                } finally {
                    cO(t)
                }
            }, e.prototype.getIntegration = function(e) {
                var t = this.getClient();
                if (!t) return null;
                try {
                    return t.getIntegration(e)
                } catch (t) {
                    return cv && es.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null
                }
            }, e.prototype.startSpan = function(e) {
                return this._callExtensionMethod("startSpan", e)
            }, e.prototype.startTransaction = function(e, t) {
                return this._callExtensionMethod("startTransaction", e, t)
            }, e.prototype.traceHeaders = function() {
                return this._callExtensionMethod("traceHeaders")
            }, e.prototype.captureSession = function(e) {
                if (void 0 === e && (e = !1), e) return this.endSession();
                this._sendSessionUpdate()
            }, e.prototype.endSession = function() {
                var e = this.getStackTop(),
                    t = e && e.scope,
                    r = t && t.getSession();
                r && r.close(), this._sendSessionUpdate(), t && t.setSession()
            }, e.prototype.startSession = function(e) {
                var t = this.getStackTop(),
                    r = t.scope,
                    i = t.client,
                    n = i && i.getOptions() || {},
                    a = n.release,
                    s = n.environment,
                    o = (cc().navigator || {}).userAgent,
                    c = new cD(ci(ci(ci({
                        release: a,
                        environment: s
                    }, r && {
                        user: r.getUser()
                    }), o && {
                        userAgent: o
                    }), e));
                if (r) {
                    var l = r.getSession && r.getSession();
                    l && "ok" === l.status && l.update({
                        status: "exited"
                    }), this.endSession(), r.setSession(c)
                }
                return c
            }, e.prototype._sendSessionUpdate = function() {
                var e = this.getStackTop(),
                    t = e.scope,
                    r = e.client;
                if (t) {
                    var i = t.getSession && t.getSession();
                    i && r && r.captureSession && r.captureSession(i)
                }
            }, e.prototype._invokeClient = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                var i = this.getStackTop(),
                    n = i.scope,
                    a = i.client;
                a && a[e] && a[e].apply(a, cn(t, [n]))
            }, e.prototype._callExtensionMethod = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                var i = cT().__SENTRY__;
                if (i && i.extensions && "function" == typeof i.extensions[e]) return i.extensions[e].apply(this, t);
                cv && es.warn("Extension method " + e + " couldn't be found, doing nothing.")
            }, e
        }();

    function cT() {
        var e = cc();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function cO(e) {
        var t = cT(),
            r = cR(t);
        return cI(t, e), r
    }

    function cB(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function cR(e) {
        return cl("hub", function() {
            return new cw
        }, e)
    }

    function cI(e, t) {
        return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, !0)
    }

    function cC(e, t) {
        return function(e) {
            for (var t, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
            var n = ((!cB(t = cT()) || cR(t).isOlderThan(4)) && cI(t, new cw), cs()) ? function(e) {
                try {
                    var t = cT().__SENTRY__,
                        r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
                    if (!r) return cR(e);
                    if (!cB(r) || cR(r).isOlderThan(4)) {
                        var i = cR(e).getStackTop();
                        cI(r, new cw(i.client, cA.clone(i.scope)))
                    }
                    return cR(r)
                } catch (t) {
                    return cR(e)
                }
            }(t) : cR(t);
            if (n && n[e]) return n[e].apply(n, function() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(function(e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var i, n, a = r.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(i = a.next()).done;) s.push(i.value)
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
                    return s
                }(arguments[t]));
                return e
            }(r));
            throw Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
        }("captureException", e, {
            captureContext: t,
            originalException: e,
            syntheticException: Error("Sentry syntheticException")
        })
    }
    let cN = "u" > typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        cP = new Uint8Array(16),
        cj = [];
    for (let e = 0; e < 256; ++e) cj.push((e + 256).toString(16).slice(1));
    let cF = function(e, t, i) {
        if (cN && !t && !e) return cN();
        let n = (e = e || {}).random ? ? e.rng ? .() ? ? function() {
            if (!r) {
                if ("u" < typeof crypto || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                r = crypto.getRandomValues.bind(crypto)
            }
            return r(cP)
        }();
        if (n.length < 16) throw Error("Random bytes length must be >= 16");
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
            if ((i = i || 0) < 0 || i + 16 > t.length) throw RangeError(`UUID byte range ${i}:${i+15} is out of buffer bounds`);
            for (let e = 0; e < 16; ++e) t[i + e] = n[e];
            return t
        }
        return function(e, t = 0) {
            return (cj[e[t + 0]] + cj[e[t + 1]] + cj[e[t + 2]] + cj[e[t + 3]] + "-" + cj[e[t + 4]] + cj[e[t + 5]] + "-" + cj[e[t + 6]] + cj[e[t + 7]] + "-" + cj[e[t + 8]] + cj[e[t + 9]] + "-" + cj[e[t + 10]] + cj[e[t + 11]] + cj[e[t + 12]] + cj[e[t + 13]] + cj[e[t + 14]] + cj[e[t + 15]]).toLowerCase()
        }(n)
    };
    var cV = eZ(function(e) {
        return function() {
            e(this), this.name = "EmptyError", this.message = "no elements in sequence"
        }
    });
    class cG {
        _device;
        _deviceId;
        _apduSender;
        _apduReceiver;
        _sendApduSubject = new tF;
        _logger;
        _pendingApdu = eO;
        _onConnectionTerminated;
        reconnectionSubject = new tF;
        waitingForReconnection = !1;
        lostConnectionTimeout = null;
        terminated = !1;
        constructor({
            device: e,
            deviceId: t,
            apduSender: r,
            apduReceiver: i,
            onConnectionTerminated: n
        }, a) {
            this._apduSender = r, this._apduReceiver = i, this._onConnectionTerminated = n, this._logger = a("WebHidDeviceConnection"), this._device = e, this._device.oninputreport = e => this.receiveHidInputReport(e), this._deviceId = t, this._logger.info("🔌 Connected to device")
        }
        get device() {
            return this._device
        }
        get deviceId() {
            return this._deviceId
        }
        async sendApdu(e, t) {
            this._sendApduSubject = new tF, this._pendingApdu = eA.of(e), this._logger.debug("Sending APDU", {
                data: {
                    apdu: e
                },
                tag: "apdu-sender"
            });
            let r = new Promise(e => {
                this._sendApduSubject.subscribe({
                    next: async r => {
                        this._pendingApdu = eO, t && el.isSuccessResponse(r) ? (await this.waitForReconnection()).caseOf({
                            Left: t => e(eC(t)),
                            Right: () => e(eN(r))
                        }) : e(eN(r))
                    },
                    error: t => {
                        this._pendingApdu = eO, e(eC(t))
                    }
                })
            });
            if (this.waitingForReconnection || !this.device.opened) {
                let e = this.device.opened && this._pendingApdu.isJust(),
                    t = await this.waitForReconnection(e);
                if (t.isLeft()) return t
            }
            for (let t of this._apduSender.getFrames(e)) {
                this._logger.debug("Sending Frame", {
                    data: {
                        frame: t.getRawData()
                    }
                });
                try {
                    await
                    function(e) {
                        return new Promise(function(t, r) {
                            var i = new tc({
                                next: function(e) {
                                    t(e), i.unsubscribe()
                                },
                                error: r,
                                complete: function() {
                                    r(new cV)
                                }
                            });
                            e.subscribe(i)
                        })
                    }(n6(this._device.sendReport(0, t.getRawData())).pipe(function(e) {
                        void 0 === e && (e = 1 / 0);
                        var t = e && "object" == typeof e ? e : {
                                count: e
                            },
                            r = t.count,
                            i = void 0 === r ? 1 / 0 : r,
                            n = t.delay,
                            a = t.resetOnSuccess,
                            s = void 0 !== a && a;
                        return i <= 0 ? tp : tm(function(e, t) {
                            var r, a = 0,
                                o = function() {
                                    var c = !1;
                                    r = e.subscribe(ty(t, function(e) {
                                        s && (a = 0), t.next(e)
                                    }, void 0, function(e) {
                                        if (a++ < i) {
                                            var s = function() {
                                                r ? (r.unsubscribe(), r = null, o()) : c = !0
                                            };
                                            if (null != n) {
                                                var l = "number" == typeof n ? n7(n) : tC(n(e, a)),
                                                    u = ty(t, function() {
                                                        u.unsubscribe(), s()
                                                    }, function() {
                                                        t.complete()
                                                    });
                                                l.subscribe(u)
                                            } else s()
                                        } else t.error(e)
                                    })), c && (r.unsubscribe(), r = null, o())
                                };
                            o()
                        })
                    }({
                        count: 3,
                        delay: 500
                    })))
                } catch (e) {
                    return this._logger.error("Error sending frame", {
                        data: {
                            error: e
                        }
                    }), Promise.resolve(eC(new cr(e)))
                }
            }
            return r
        }
        receiveHidInputReport(e) {
            let t = new Uint8Array(e.data.buffer);
            this._logger.debug("Received Frame", {
                data: {
                    frame: t
                },
                tag: "apdu-receiver"
            }), this._apduReceiver.handleFrame(t).caseOf({
                Right: e => {
                    e.map(e => {
                        this._logger.debug("Received APDU Response", {
                            data: {
                                response: e
                            }
                        }), this._sendApduSubject.next(e), this._sendApduSubject.complete()
                    })
                },
                Left: e => {
                    this._sendApduSubject.error(e)
                }
            })
        }
        waitForReconnection(e = !1) {
            return this.terminated ? Promise.resolve(eC(new nz)) : new Promise(t => {
                let r = this.reconnectionSubject.subscribe({
                    next: i => {
                        e && this._sendApduSubject.error(new cr(Error("Device disconnected while waiting for device response"))), t("success" === i ? eN(void 0) : eC(i)), r.unsubscribe()
                    }
                })
            })
        }
        lostConnection() {
            this._logger.info("⏱️ Lost connection, starting timer"), this.waitingForReconnection = !0, this.lostConnectionTimeout = setTimeout(() => {
                this._logger.info("❌ Disconnection timeout, terminating connection"), this.disconnect()
            }, 6e3)
        }
        async reconnectHidDevice(e) {
            this._device = e, this._device.oninputreport = e => this.receiveHidInputReport(e), this.lostConnectionTimeout && clearTimeout(this.lostConnectionTimeout), this._pendingApdu.isJust() && this._sendApduSubject.error(new cr), await e.open(), this._logger.info("⏱️🔌 Device reconnected"), this.waitingForReconnection = !1, this.reconnectionSubject.next("success")
        }
        disconnect() {
            this._pendingApdu.isJust() && this._sendApduSubject.error(new cr), this._logger.info("🔚 Disconnect"), this.lostConnectionTimeout && clearTimeout(this.lostConnectionTimeout), this.terminated = !0, this._onConnectionTerminated(), this.reconnectionSubject.next(new nz)
        }
    }
    let cL = "WEB-HID";
    class cM {
        constructor(e, t, r, i) {
            this._deviceModelDataSource = e, this._loggerServiceFactory = t, this._apduSenderFactory = r, this._apduReceiverFactory = i, this._logger = t("WebWebHidTransport"), this.startListeningToConnectionEvents()
        }
        _transportDiscoveredDevices = new nK([]);
        _deviceConnectionsByHidDevice = new Map;
        _deviceConnectionsPendingReconnection = new Set;
        _connectionListenersAbortController = new AbortController;
        _logger;
        connectionType = "USB";
        identifier = cL;
        get hidApi() {
            return this.isSupported() ? eN(navigator.hid) : eC(new ct("WebHID not supported"))
        }
        isSupported() {
            try {
                let e = !!navigator ? .hid;
                return this._logger.debug(`isSupported: ${e}`), e
            } catch (e) {
                return this._logger.error("isSupported: error", {
                    data: {
                        error: e
                    }
                }), !1
            }
        }
        getIdentifier() {
            return this.identifier
        }
        async getDevices() {
            return eW.liftEither(this.hidApi).map(async e => {
                try {
                    return (await e.getDevices()).filter(e => 11415 === e.vendorId)
                } catch (t) {
                    let e = new nM(t);
                    throw this._logger.error("getDevices: error getting devices", {
                        data: {
                            error: t
                        }
                    }), cC(e), e
                }
            })
        }
        mapHIDDeviceToTransportDiscoveredDevice(e) {
            let t = this._transportDiscoveredDevices.getValue().find(t => t.hidDevice === e);
            if (t) return t;
            let r = this._deviceConnectionsByHidDevice.get(e);
            return this.getDeviceModel(e).caseOf({
                Just: t => {
                    let i = r ? .deviceId ? ? cF(),
                        n = {
                            id: i,
                            deviceModel: t,
                            hidDevice: e,
                            transport: this.identifier
                        };
                    return this._logger.debug(`Discovered device ${i} ${n.deviceModel.productName}`), n
                },
                Nothing: () => {
                    throw this._logger.warn(`Device not recognized: hidDevice.productId: 0x${e.productId.toString(16)}`), new nL(`Device not recognized: hidDevice.productId: 0x${e.productId.toString(16)}`)
                }
            })
        }
        listenToKnownDevices() {
            return this.updateTransportDiscoveredDevices(), this._transportDiscoveredDevices.pipe(nJ(e => e.map(({
                hidDevice: e,
                ...t
            }) => t)))
        }
        async updateTransportDiscoveredDevices() {
            (await this.getDevices()).caseOf({
                Left: e => {
                    this._logger.error("Error while getting accessible device", {
                        data: {
                            error: e
                        }
                    }), cC(e)
                },
                Right: e => {
                    this._transportDiscoveredDevices.next(e.map(e => this.mapHIDDeviceToTransportDiscoveredDevice(e)))
                }
            })
        }
        async promptDeviceAccess() {
            return eW.liftEither(this.hidApi).map(async e => {
                let t = [];
                try {
                    t = await e.requestDevice({
                        filters: [{
                            vendorId: 11415
                        }]
                    }), await this.updateTransportDiscoveredDevices()
                } catch (t) {
                    let e = new nM(t);
                    throw this._logger.error("promptDeviceAccess: error requesting device", {
                        data: {
                            error: t
                        }
                    }), cC(e), e
                }
                if (this._logger.debug(`promptDeviceAccess: hidDevices len ${t.length}`), 0 === t.length) throw this._logger.warn("No device was selected"), new nM("No selected device");
                let r = [];
                for (let e of t) r.push(e), this._logger.debug("promptDeviceAccess: selected device", {
                    data: {
                        hidDevice: e
                    }
                });
                return r
            }).run()
        }
        startDiscovering() {
            return this._logger.debug("startDiscovering"), n6(this.promptDeviceAccess()).pipe(ar(e => e.caseOf({
                Left: e => {
                    throw this._logger.error("Error while getting accessible device", {
                        data: {
                            error: e
                        }
                    }), cC(e), e
                },
                Right: e => (this._logger.info(`Got access to ${e.length} HID devices`), n6(e.map(e => this.mapHIDDeviceToTransportDiscoveredDevice(e))))
            })))
        }
        stopDiscovering() {}
        startListeningToConnectionEvents() {
            this._logger.debug("startListeningToConnectionEvents"), this.hidApi.map(e => {
                e.addEventListener("connect", e => this.handleDeviceConnectionEvent(e), {
                    signal: this._connectionListenersAbortController.signal
                }), e.addEventListener("disconnect", e => this.handleDeviceDisconnectionEvent(e), {
                    signal: this._connectionListenersAbortController.signal
                })
            })
        }
        stopListeningToConnectionEvents() {
            this._logger.debug("stopListeningToConnectionEvents"), this._connectionListenersAbortController.abort()
        }
        async connect({
            deviceId: e,
            onDisconnect: t
        }) {
            this._logger.debug("connect", {
                data: {
                    deviceId: e
                }
            });
            let r = this._transportDiscoveredDevices.getValue().find(t => t.id === e);
            if (!r) return this._logger.error(`Unknown device ${e}`), eC(new n$(`Unknown device ${e}`));
            try {
                if (this._deviceConnectionsByHidDevice.get(r.hidDevice)) throw Error("Device already opened");
                await r.hidDevice.open()
            } catch (t) {
                if (t instanceof DOMException && "InvalidStateError" === t.name) this._logger.debug(`Device ${e} is already opened`);
                else {
                    let r = new nU(t);
                    return this._logger.debug(`Error while opening device: ${e}`, {
                        data: {
                            error: t
                        }
                    }), cC(r), eC(r)
                }
            }
            let {
                deviceModel: i
            } = r, n = eA.of(iI(Math.floor(65535 * Math.random()), 2)), a = new cG({
                device: r.hidDevice,
                deviceId: e,
                apduSender: this._apduSenderFactory({
                    frameSize: 64,
                    channel: n,
                    padding: !0
                }),
                apduReceiver: this._apduReceiverFactory({
                    channel: n
                }),
                onConnectionTerminated: () => {
                    t(e), this._deviceConnectionsPendingReconnection.delete(a), this._deviceConnectionsByHidDevice.delete(r.hidDevice), a.device.close()
                }
            }, this._loggerServiceFactory);
            return this._deviceConnectionsByHidDevice.set(r.hidDevice, a), eN(new ce({
                sendApdu: (e, t) => a.sendApdu(e, t),
                deviceModel: i,
                id: e,
                type: this.connectionType,
                transport: this.identifier
            }))
        }
        getDeviceModel(e) {
            let {
                productId: t
            } = e, r = this._deviceModelDataSource.getAllDeviceModels().find(e => e.usbProductId === t >> 8 || e.bootloaderUsbProductId === t);
            return r ? eA.of(r) : eA.zero()
        }
        getHidUsbProductId(e) {
            return this.getDeviceModel(e).caseOf({
                Just: e => e.usbProductId,
                Nothing: () => e.productId >> 8
            })
        }
        async disconnect(e) {
            this._logger.debug("disconnect", {
                data: {
                    connectedDevice: e
                }
            });
            let t = Array.from(this._deviceConnectionsByHidDevice.values()).find(t => t.deviceId === e.connectedDevice.id);
            return t ? (t.disconnect(), Promise.resolve(eN(void 0))) : (this._logger.error("No matching device connection found", {
                data: {
                    connectedDevice: e
                }
            }), Promise.resolve(eC(new n$(`Unknown device ${e.connectedDevice.id}`))))
        }
        isHIDConnectionEvent(e) {
            return "device" in e && "object" == typeof e.device && null !== e.device && "productId" in e.device && "number" == typeof e.device.productId
        }
        async handleDeviceDisconnectionEvent(e) {
            if (!this.isHIDConnectionEvent(e)) return void this._logger.error("Invalid event", {
                data: {
                    event: e
                }
            });
            this._logger.info("[handleDeviceDisconnectionEvent] Device disconnected", {
                data: {
                    event: e
                }
            }), this.updateTransportDiscoveredDevices();
            try {
                await e.device.close()
            } catch (t) {
                this._logger.error("Error while closing device ", {
                    data: {
                        event: e,
                        error: t
                    }
                })
            }
            let t = this._deviceConnectionsByHidDevice.get(e.device);
            t && (t.lostConnection(), this._deviceConnectionsPendingReconnection.add(t), this._deviceConnectionsByHidDevice.delete(e.device))
        }
        handleDeviceReconnection(e, t) {
            this._deviceConnectionsPendingReconnection.delete(e), this._deviceConnectionsByHidDevice.set(t, e);
            try {
                e.reconnectHidDevice(t)
            } catch (t) {
                this._logger.error("Error while reconnecting to device", {
                    data: {
                        event,
                        error: t
                    }
                }), e.disconnect()
            }
        }
        handleDeviceConnectionEvent(e) {
            if (!this.isHIDConnectionEvent(e)) return void this._logger.error("Invalid event", {
                data: {
                    event: e
                }
            });
            this._logger.info("[handleDeviceConnectionEvent] Device connected", {
                data: {
                    event: e
                }
            });
            let t = Array.from(this._deviceConnectionsPendingReconnection).find(t => this.getHidUsbProductId(t.device) === this.getHidUsbProductId(e.device));
            t && this.handleDeviceReconnection(t, e.device), this.updateTransportDiscoveredDevices()
        }
        destroy() {
            this.stopListeningToConnectionEvents(), this._deviceConnectionsByHidDevice.forEach(e => {
                e.disconnect()
            }), this._deviceConnectionsPendingReconnection.clear()
        }
    }
    e.s(["WebHidTransport", 0, cM, "webHidIdentifier", 0, cL, "webHidTransportFactory", 0, ({
        deviceModelDataSource: e,
        loggerServiceFactory: t,
        apduSenderServiceFactory: r,
        apduReceiverServiceFactory: i
    }) => new cM(e, t, r, i)], 241186), e.s([], 343736)
}, 625213, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);

    function i(e) {
        return (0, t.jsx)("div", {
            className: "h-16 w-16 rounded-full bg-neutral-600",
            style: {
                animation: `bounce 1s infinite ease-in-out ${.15*e}s`
            }
        }, e)
    }
    e.s(["default", 0, () => {
        let e, n = (0, r.c)(1);
        return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
            className: "flex items-center gap-4",
            children: [0, 1, 2].map(i)
        }), n[0] = e) : e = n[0], e
    }])
}, 309189, 610014, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    let i = (0, e.i(505888).create)(e => ({
        current: {
            state: "checking_eligibility"
        },
        setEligible: () => e({
            current: {
                state: "eligible"
            }
        }),
        setError: () => e({
            current: {
                state: "error"
            }
        })
    }));
    e.s(["default", 0, i], 610014);
    var n = e.i(292905),
        a = e.i(217837),
        s = e.i(477180),
        o = e.i(605672),
        c = e.i(191051),
        l = e.i(989606);
    e.i(664157);
    var u = e.i(271179),
        d = e.i(590149);

    function h(e) {
        return e.current
    }
    e.s(["default", 0, e => {
        let p, f, x, m, y = (0, r.c)(17),
            {
                variant: k,
                size: g,
                dataCsOverrideId: v
            } = e,
            b = void 0 === g ? "medium" : g,
            {
                t: E
            } = (0, u.useTranslation)("productUpgrade");
        y[0] !== k.id || y[1] !== k.sku ? (p = {
            variantId: k.id,
            sku: k.sku
        }, y[0] = k.id, y[1] = k.sku, y[2] = p) : p = y[2];
        let {
            exclusiveOfferBuyItNow: _,
            isPending: S,
            isError: A
        } = (e => {
            let t, i, l, u, d, h, p = (0, r.c)(19),
                {
                    variantId: f,
                    sku: x
                } = e,
                {
                    country: m,
                    language: y
                } = (0, s.default)(),
                k = (0, a.useRouter)();
            p[0] !== f ? (t = ["exclusive-offer-buy-it-now", f], p[0] = f, p[1] = t) : t = p[1], p[2] !== m || p[3] !== y || p[4] !== x || p[5] !== f ? (i = () => {
                var e;
                return e = {
                    variantId: f,
                    sku: x,
                    language: y,
                    country: m,
                    isLedgerLiveMobileApp: (0, c.isLedgerLiveMobileApp)()
                }, (0, o.jsonMutationFetch)("/api/exclusive-offers/buy-it-now", "POST", e)
            }, p[2] = m, p[3] = y, p[4] = x, p[5] = f, p[6] = i) : i = p[6], p[7] !== k ? (l = e => {
                k.push(e.checkoutUrl)
            }, u = () => {
                k.push("https://shop.ledger.com/pages/offer-unavailable")
            }, p[7] = k, p[8] = l, p[9] = u) : (l = p[8], u = p[9]), p[10] !== t || p[11] !== i || p[12] !== l || p[13] !== u ? (d = {
                mutationKey: t,
                mutationFn: i,
                onSuccess: l,
                onError: u
            }, p[10] = t, p[11] = i, p[12] = l, p[13] = u, p[14] = d) : d = p[14];
            let {
                mutate: g,
                isPending: v,
                error: b
            } = (0, n.useMutation)(d), E = null !== b;
            return p[15] !== v || p[16] !== g || p[17] !== E ? (h = {
                exclusiveOfferBuyItNow: g,
                isPending: v,
                isError: E
            }, p[15] = v, p[16] = g, p[17] = E, p[18] = h) : h = p[18], h
        })(p), D = i(h);
        return y[3] !== D.state || y[4] !== E ? (f = "checking_eligibility" === D.state && (0, t.jsxs)("div", {
            className: "flex items-center justify-center gap-8",
            children: [(0, t.jsx)(d.default, {}), (0, t.jsx)("span", {
                className: "body-1 font-normal",
                children: E("exclusiveOffer.verifyingOffer")
            })]
        }), y[3] = D.state, y[4] = E, y[5] = f) : f = y[5], y[6] !== D.state || y[7] !== v || y[8] !== _ || y[9] !== A || y[10] !== S || y[11] !== b || y[12] !== E ? (x = "eligible" === D.state && (0, t.jsx)(l.default, {
            nowrap: !1,
            size: b,
            variant: "primary-orange",
            label: E("exclusiveOffer.buyItNow"),
            onClick: _,
            isDisabled: S || A,
            dataCsOverrideId: v
        }), y[6] = D.state, y[7] = v, y[8] = _, y[9] = A, y[10] = S, y[11] = b, y[12] = E, y[13] = x) : x = y[13], y[14] !== f || y[15] !== x ? (m = (0, t.jsxs)(t.Fragment, {
            children: [f, x]
        }), y[14] = f, y[15] = x, y[16] = m) : m = y[16], m
    }], 309189)
}, 832992, e => {
    "use strict";
    e.s(["default", 0, e => ({
        current: {
            state: "locked"
        },
        setCorrectDevice: () => e({
            current: {
                state: "correct_device_selected"
            }
        }),
        unlock: () => e({
            current: {
                state: "unlocked"
            }
        }),
        reset: () => e({
            current: {
                state: "locked"
            }
        })
    })])
}, 715108, e => {
    "use strict";
    var t = e.i(505888),
        r = e.i(832992);
    e.i(16058);
    var i = e.i(328037),
        n = e.i(246306);
    e.i(343736);
    var a = e.i(241186);
    let s = [n.DeviceModelId.NANO_S, n.DeviceModelId.NANO_X, n.DeviceModelId.NANO_SP];

    function o(e) {
        return e && "object" == typeof e && "_tag" in e && "string" == typeof e._tag ? e._tag : "unexpected error"
    }
    let c = (0, t.create)()((...e) => ({ ...(0, r.default)(...e),
        ...(e => ({
            connectDevice: () => {
                e({
                    current: {
                        state: "waiting_for_device"
                    }
                });
                let t = new i.DeviceManagementKitBuilder().addTransport(a.webHidTransportFactory).build();
                t.startDiscovering({
                    transport: a.webHidIdentifier
                }).subscribe({
                    next: async r => {
                        try {
                            await t.connect({
                                device: r
                            }), s.includes(r.deviceModel.model) ? e({
                                current: {
                                    state: "correct_device_selected"
                                }
                            }) : e({
                                current: {
                                    state: "error",
                                    message: "wrongDevice"
                                }
                            })
                        } catch (i) {
                            let t = o(i),
                                r = "unexpectedError";
                            "ConnectionOpeningError" === t ? r = "deviceLocked" : console.error(i), e({
                                current: {
                                    state: "error",
                                    message: r
                                }
                            })
                        }
                    },
                    error: t => {
                        "NoAccessibleDeviceError" === o(t) ? e({
                            current: {
                                state: "locked"
                            }
                        }) : (e({
                            current: {
                                state: "error",
                                message: "unexpectedError"
                            }
                        }), console.error(t))
                    }
                })
            }
        }))(...e)
    }));
    e.s(["default", 0, c], 715108)
}, 78450, (e, t, r) => {
    t.exports = JSON.parse('{"v":"5.7.4","fr":25,"ip":0,"op":256,"w":1000,"h":272,"nm":"NANO S DARK DEVICES ACTIONS-- Plug and pin code","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Nano Sv3 Silhouettes 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[386.013,93.132,0],"ix":2,"l":2},"a":{"a":0,"k":[230,41,0],"ix":1,"l":2},"s":{"a":0,"k":[162.174,162.174,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"s","pt":{"a":0,"k":{"i":[[9.77,0],[0,-9.748],[-9.77,0],[0,9.748]],"o":[[-9.77,0],[0,9.748],[9.77,0],[0,-9.748]],"v":[[232.967,25.43],[215.278,43.081],[232.967,60.732],[250.657,43.081]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Masque 1"}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-3.59,0],[0,0],[0,0]],"o":[[0,0],[0,3.589],[0,0],[0,0],[0,0]],"v":[[-4.835,-4.835],[-4.835,-1.663],[1.664,4.835],[4.835,4.835],[4.835,-4.835]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.812928981407,0.966836727367,0.992463235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[4.835,35.781],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-4.835,4.835],[4.835,4.835],[4.835,-4.835],[-4.835,-4.835]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.812928981407,0.966836727367,0.992463235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[20.308,35.781],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,3.589],[0,0],[0,0]],"o":[[0,0],[3.589,0],[0,0],[0,0],[0,0]],"v":[[-4.835,4.835],[-1.663,4.835],[4.836,-1.663],[4.836,-4.835],[-4.835,-4.835]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.812928981407,0.966836727367,0.992463235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[35.781,35.78],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[4.835,-4.835],[-4.835,-4.835],[-4.835,4.835],[4.835,4.835]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.812928981407,0.966836727367,0.992463235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[4.836,20.308],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-3.59],[0,0],[0,0]],"o":[[0,0],[-3.589,0],[0,0],[0,0],[0,0]],"v":[[4.835,-4.835],[1.663,-4.835],[-4.835,1.664],[-4.835,4.835],[4.835,4.835]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.812928981407,0.966836727367,0.992463235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[4.835,4.835],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.589,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,-3.59]],"v":[[6.073,-12.572],[-12.572,-12.572],[-12.572,12.572],[12.572,12.572],[12.572,-6.072]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.812928981407,0.966836727367,0.992463235294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[28.044,12.572],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 6","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[92.602,41.734],"ix":2},"a":{"a":0,"k":[20.308,20.308],"ix":1},"s":{"a":0,"k":[48.863,48.863],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":0,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 14","np":6,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-10.83,0],[0,10.83],[10.83,0],[0,-10.83]],"o":[[10.83,0],[0,-10.83],[-10.83,0],[0,10.83]],"v":[[0,19.609],[19.609,0.001],[0,-19.609],[-19.609,0.001]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.219999994016,0.219999994016,0.219999994016,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4.783,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[233,43],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.015,-0.332],[-11.815,0],[-0.523,-11.686],[0,0.335],[12.15,0],[0,-12.15]],"o":[[0.523,-11.686],[11.815,0],[0.015,-0.332],[0,-12.15],[-12.15,0],[0,0.335]],"v":[[-21.978,11.5],[0,-9.5],[21.978,11.5],[22,10.5],[0,-11.5],[-22,10.5]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,30.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":15,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.016,0.332],[11.816,0],[0.523,11.687],[0,-0.335],[-12.149,0],[0,12.15]],"o":[[-0.522,11.687],[-11.814,0],[-0.015,0.332],[0,12.15],[12.151,0],[0,-0.335]],"v":[[21.978,-11.5],[0,9.5],[-21.978,-11.5],[-22,-10.5],[0,11.5],[22,-10.5]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[233,55.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":60,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":4,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-12.15],[12.15,0],[0,12.15],[-12.15,0]],"o":[[0,12.15],[-12.15,0],[0,-12.15],[12.15,0]],"v":[[-71.392,0.159],[-93.392,22.159],[-115.392,0.159],[-93.392,-21.842]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[2.209,0],[0,0],[0,21.38],[0,0],[-21.387,0.003],[0,0],[0,-2.21],[0,0]],"o":[[0,0],[-21.38,0.003],[0,0],[0,-21.386],[0,0],[2.21,0],[0,0],[0,2.209]],"v":[[129.508,38.708],[-94.798,38.732],[-133.515,0.025],[-133.515,0.016],[-94.789,-38.71],[129.514,-38.736],[133.516,-34.734],[133.506,34.708]],"c":true},"ix":2},"nm":"Tracé 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":5,"nm":"Fusionner les tracés 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-326.392,39.159],[133.608,39.159],[133.608,-42.841],[-326.392,-42.841]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-326.392,-42.841],[133.608,-42.841],[133.608,39.159],[-326.392,39.159]],"c":true},"ix":2},"nm":"Tracé 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"mm","mm":5,"nm":"Fusionner les tracés 2","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.866999966491,0.866999966491,0.866999966491,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[326.619,42.884],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 4","np":6,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.104,0],[0,0],[0,-1.104],[0,0],[-1.105,0],[0,0],[0,1.104],[0,0]],"o":[[0,0],[-1.105,0],[0,0],[0,1.104],[0,0],[1.104,0],[0,0],[0,-1.104]],"v":[[63.068,-20],[-63.068,-20],[-65.068,-18],[-65.068,18],[-63.068,20],[63.068,20],[65.068,18],[65.068,-18]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.14856004902,0.14856004902,0.14856004902,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[94.5,43],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 5","np":4,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.104,0],[0,0],[0,-1.104],[0,0],[-1.105,0],[0,0],[0,1.104],[0,0]],"o":[[0,0],[-1.105,0],[0,0],[0,1.104],[0,0],[1.104,0],[0,0],[0,-1.104]],"v":[[63.068,-20],[-63.068,-20],[-65.068,-18],[-65.068,18],[-63.068,20],[63.068,20],[65.068,18],[65.068,-18]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[95.5,44],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":15,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 6","np":4,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.104,0],[0,0],[0,-1.104],[0,0],[-1.105,0],[0,0],[0,1.104],[0,0]],"o":[[0,0],[-1.105,0],[0,0],[0,1.104],[0,0],[1.104,0],[0,0],[0,-1.104]],"v":[[63.068,-20],[-63.068,-20],[-65.068,-18],[-65.068,18],[-63.068,20],[63.068,20],[65.068,18],[65.068,-18]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[93.5,42],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 7","np":4,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-14.912,0],[0,14.912],[14.912,0],[0,-14.911]],"o":[[14.912,0],[0,-14.911],[-14.912,0],[0,14.912]],"v":[[5.718,27.785],[32.718,0.785],[5.718,-26.215],[-21.282,0.785]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[13.107,-16.719],[0,0],[-16.691,-12.996],[0,0],[0,0],[-0.002,3.998]],"o":[[0,0],[-16.762,-13.051],[0,0],[-12.996,16.691],[0,0],[0,0],[3.998,-0.002],[0,0]],"v":[[40.919,-14.763],[26.186,-26.234],[-27.845,-19.6],[-27.923,-19.5],[-21.233,34.253],[-15.166,38.976],[33.218,39.285],[40.895,31.712]],"c":true},"ix":2},"nm":"Tracé 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":5,"nm":"Fusionner les tracés 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[227.282,42.215],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 8","np":6,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[11.57,-1.216],[-1.21,-11.514],[-11.57,1.216],[1.21,11.513]],"o":[[-11.57,1.216],[1.21,11.513],[11.57,-1.216],[-1.21,-11.514]],"v":[[95.913,-25.398],[73.413,3.102],[100.413,25.602],[123.913,-2.898]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,-4.001],[0,0],[0,0],[3.998,-0.002],[0,0],[0,1.105],[0,0],[0,0],[-1.104,0]],"o":[[4.001,-0.001],[0,0],[0,0],[-0.002,3.998],[0,0],[-1.105,0],[0,0],[0,0],[0,-1.104],[0,0]],"v":[[126.373,-38.398],[133.621,-31.157],[133.621,-31.149],[133.59,31.028],[126.349,38.269],[-131.62,38.399],[-133.621,36.4],[-133.621,36.398],[-133.584,-36.268],[-131.585,-38.267]],"c":true},"ix":2},"nm":"Tracé 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les tracés 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[134.597,43.096],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":30,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 15","np":6,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[11.57,-1.216],[-1.21,-11.514],[-11.57,1.216],[1.21,11.513]],"o":[[-11.57,1.216],[1.21,11.513],[11.57,-1.216],[-1.21,-11.514]],"v":[[95.913,-25.398],[73.413,3.102],[100.413,25.602],[123.913,-2.898]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,-4.001],[0,0],[0,0],[3.998,-0.002],[0,0],[0,1.105],[0,0],[0,0],[-1.104,0]],"o":[[4.001,-0.001],[0,0],[0,0],[-0.002,3.998],[0,0],[-1.105,0],[0,0],[0,0],[0,-1.104],[0,0]],"v":[[126.373,-38.398],[133.621,-31.157],[133.621,-31.149],[133.59,31.028],[126.349,38.269],[-131.62,38.399],[-133.621,36.4],[-133.621,36.398],[-133.584,-36.268],[-131.585,-38.267]],"c":true},"ix":2},"nm":"Tracé 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les tracés 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[134.597,43.096],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 9","np":6,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[12,-4],[-12,-4],[-12,4],[12,4]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.188235309077,0.188235309077,0.188235309077,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[147,7],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 10","np":4,"cix":2,"bm":0,"ix":13,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.105,0],[0,0],[0,-1.104],[0,0],[-1.105,0],[0,0],[0,1.104],[0,0]],"o":[[0,0],[-1.105,0],[0,0],[0,1.104],[0,0],[1.105,0],[0,0],[0,-1.104]],"v":[[10,-4],[-10,-4],[-12,-2],[-12,2],[-10,4],[10,4],[12,2],[12,-2]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[147,4],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":30,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 11","np":4,"cix":2,"bm":0,"ix":14,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.105,0],[0,0],[0,-1.104],[0,0],[-1.105,0],[0,0],[0,1.104],[0,0]],"o":[[0,0],[-1.105,0],[0,0],[0,1.104],[0,0],[1.105,0],[0,0],[0,-1.104]],"v":[[10,-4],[-10,-4],[-12,-2],[-12,2],[-10,4],[10,4],[12,2],[12,-2]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[147,4],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 17","np":4,"cix":2,"bm":0,"ix":15,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[12,-4],[-12,-4],[-12,4],[12,4]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.109999997008,0.109999997008,0.109999997008,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[42,7],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":60,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 12","np":4,"cix":2,"bm":0,"ix":16,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.104,0],[0,0],[0,-1.104],[0,0],[-1.104,0],[0,0],[0,1.104],[0,0]],"o":[[0,0],[-1.104,0],[0,0],[0,1.104],[0,0],[1.104,0],[0,0],[0,-1.104]],"v":[[10,-4],[-10,-4],[-12,-2],[-12,2],[-10,4],[10,4],[12,2],[12,-2]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[42,4],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":30,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 13","np":4,"cix":2,"bm":0,"ix":17,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.104,0],[0,0],[0,-1.104],[0,0],[-1.104,0],[0,0],[0,1.104],[0,0]],"o":[[0,0],[-1.104,0],[0,0],[0,1.104],[0,0],[1.104,0],[0,0],[0,-1.104]],"v":[[10,-4],[-10,-4],[-12,-2],[-12,2],[-10,4],[10,4],[12,2],[12,-2]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[42,4],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 16","np":4,"cix":2,"bm":0,"ix":18,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":4125,"st":0,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"USB 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[228,48,0],"ix":2,"l":2},"a":{"a":0,"k":[143.5,19,0],"ix":1,"l":2},"s":{"a":0,"k":[150.174,150.174,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.762,0],[0,0],[0,-0.552],[0,0],[0.553,0],[0,0],[0,2.762],[0,0]],"o":[[0,0],[0.553,0],[0,0],[0,0.553],[0,0],[-2.762,0],[0,0],[0,-2.761]],"v":[[-17,-19],[21,-19],[22,-18],[22,18],[21,19],[-17,19],[-22,14],[-22,-14]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[244,19],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":27,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.762,0],[0,0],[0,-0.552],[0,0],[0.553,0],[0,0],[0,2.762],[0,0]],"o":[[0,0],[0.553,0],[0,0],[0,0.553],[0,0],[-2.762,0],[0,0],[0,-2.761]],"v":[[-17,-19],[21,-19],[22,-18],[22,18],[21,19],[-17,19],[-22,14],[-22,-14]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[244,19],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 6","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.657,0],[0,0],[0,-1.657],[0,0],[1.657,0],[0,0],[0,1.657],[0,0]],"o":[[0,0],[1.657,0],[0,0],[0,1.657],[0,0],[-1.657,0],[0,0],[0,-1.657]],"v":[[-8,-9],[8,-9],[11,-6],[11,6],[8,9],[-8,9],[-11,6],[-11,-6]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[223,19],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":25,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.657,0],[0,0],[0,-1.657],[0,0],[1.657,0],[0,0],[0,1.657],[0,0]],"o":[[0,0],[1.657,0],[0,0],[0,1.657],[0,0],[-1.657,0],[0,0],[0,-1.657]],"v":[[-8,-9],[8,-9],[11,-6],[11,6],[8,9],[-8,9],[-11,6],[-11,-6]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[223,19],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 5","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-6.5,-13],[6.5,-13],[6.5,13],[-6.5,13]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.709221813725,0.709221813725,0.709221813725,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[262.5,19],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.657,0],[0,0],[0,-1.657],[0,0],[1.657,0],[0,0],[0,1.657],[0,0]],"o":[[0,0],[1.657,0],[0,0],[0,1.657],[0,0],[-1.657,0],[0,0],[0,-1.657]],"v":[[-12.5,-13],[12.5,-13],[15.5,-10],[15.5,10],[12.5,13],[-12.5,13],[-15.5,10],[-15.5,-10]],"c":true},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.866666726505,0.866666726505,0.866666726505,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[271.5,19],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 4","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":4125,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Cable 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[788.5,45.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-789.5,2.5],[-401,2.5]],"c":false},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":15,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.219607992733,0.219607992733,0.219607992733,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":25,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Forme 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-789.5,2.5],[-401,2.5]],"c":false},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":15,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.219607992733,0.219607992733,0.219607992733,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Forme 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Réduire les tracés 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":4125,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"NEW en bas -------------------------------------------------","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[500,434.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":4125,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"cercle echo droit 12","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":269,"s":[0,0,100]},{"t":291,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":269,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":280.479,"s":[6]},{"t":291,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":269,"op":303,"st":206,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"cercle droit 12","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":269,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":275,"s":[100]},{"t":293,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":269,"s":[0,0,100]},{"t":297,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":269,"op":303,"st":206,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"cercle echo droit 11","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":269,"s":[0,0,100]},{"t":291,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":269,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":280.479,"s":[6]},{"t":291,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":269,"op":303,"st":206,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"cercle droit 11","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":269,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":275,"s":[100]},{"t":293,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":269,"s":[0,0,100]},{"t":297,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":269,"op":303,"st":206,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"cercle echo droit 14","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":271,"s":[0,0,100]},{"t":293,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":271,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":282.479,"s":[6]},{"t":293,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":271,"op":305,"st":208,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"cercle droit 14","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":271,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":277,"s":[100]},{"t":295,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":271,"s":[0,0,100]},{"t":299,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":271,"op":305,"st":208,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"cercle echo droit 13","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":271,"s":[0,0,100]},{"t":293,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":271,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":282.479,"s":[6]},{"t":293,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":271,"op":305,"st":208,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"cercle droit 13","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":271,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":277,"s":[100]},{"t":295,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":271,"s":[0,0,100]},{"t":299,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":271,"op":305,"st":208,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Calque de forme 1","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":371,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.75,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-119,-294.25],[-114.5,-289.25],[-109,-296.75]],"c":false},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Forme 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":232,"op":568,"st":90,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"cercle echo droit 10","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":215,"s":[0,0,100]},{"t":237,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":215,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":226.479,"s":[6]},{"t":237,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":215,"op":249,"st":152,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"cercle droit 10","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":215,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":221,"s":[100]},{"t":239,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":215,"s":[0,0,100]},{"t":243,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":215,"op":249,"st":152,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"cercle echo droit 9","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":215,"s":[0,0,100]},{"t":237,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":215,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":226.479,"s":[6]},{"t":237,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":215,"op":249,"st":152,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"cercle droit 9","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":215,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":221,"s":[100]},{"t":239,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":215,"s":[0,0,100]},{"t":243,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":215,"op":249,"st":152,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"cercle echo droit 8","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":181,"s":[0,0,100]},{"t":203,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":181,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":192.479,"s":[6]},{"t":203,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":181,"op":215,"st":118,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"cercle droit 8","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":181,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":187,"s":[100]},{"t":205,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":181,"s":[0,0,100]},{"t":209,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":181,"op":215,"st":118,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"cercle echo droit 7","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":181,"s":[0,0,100]},{"t":203,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":181,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":192.479,"s":[6]},{"t":203,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":181,"op":215,"st":118,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"cercle droit 7","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":181,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":187,"s":[100]},{"t":205,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":181,"s":[0,0,100]},{"t":209,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":181,"op":215,"st":118,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"cercle echo droit 6","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":149,"s":[0,0,100]},{"t":171,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":149,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":160.479,"s":[6]},{"t":171,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":149,"op":183,"st":86,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"cercle droit 6","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":149,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":155,"s":[100]},{"t":173,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":149,"s":[0,0,100]},{"t":177,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":149,"op":183,"st":86,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"cercle echo droit 5","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":149,"s":[0,0,100]},{"t":171,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":149,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":160.479,"s":[6]},{"t":171,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":149,"op":183,"st":86,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"cercle droit 5","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":149,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":155,"s":[100]},{"t":173,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":149,"s":[0,0,100]},{"t":177,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":149,"op":183,"st":86,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"cercle echo droit 4","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":115,"s":[0,0,100]},{"t":137,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":115,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":126.479,"s":[6]},{"t":137,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":115,"op":149,"st":52,"bm":0},{"ddd":0,"ind":24,"ty":4,"nm":"cercle droit 4","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":115,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":121,"s":[100]},{"t":139,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":115,"s":[0,0,100]},{"t":143,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":115,"op":149,"st":52,"bm":0},{"ddd":0,"ind":25,"ty":4,"nm":"cercle echo droit 3","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":115,"s":[0,0,100]},{"t":137,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":115,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":126.479,"s":[6]},{"t":137,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":115,"op":149,"st":52,"bm":0},{"ddd":0,"ind":26,"ty":4,"nm":"cercle droit 3","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":115,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":121,"s":[100]},{"t":139,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":115,"s":[0,0,100]},{"t":143,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":115,"op":149,"st":52,"bm":0},{"ddd":0,"ind":27,"ty":4,"nm":"cercle echo droit 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":81,"s":[0,0,100]},{"t":103,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":81,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":92.479,"s":[6]},{"t":103,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":81,"op":115,"st":18,"bm":0},{"ddd":0,"ind":28,"ty":4,"nm":"cercle droit 2","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":81,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":87,"s":[100]},{"t":105,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-34.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":81,"s":[0,0,100]},{"t":109,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":81,"op":115,"st":18,"bm":0},{"ddd":0,"ind":29,"ty":4,"nm":"cercle echo droit","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.881,-374.25,0],"ix":2,"l":2},"a":{"a":0,"k":[6.5,3.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":81,"s":[0,0,100]},{"t":103,"s":[168,168,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Echo","np":7,"mn":"ADBE Echo","ix":1,"en":1,"ef":[{"ty":0,"nm":"Echo Time (seconds)","mn":"ADBE Echo-0001","ix":1,"v":{"a":0,"k":-0.333,"ix":1}},{"ty":0,"nm":"Number Of Echoes","mn":"ADBE Echo-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":0,"nm":"Starting Intensity","mn":"ADBE Echo-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":0,"nm":"Decay","mn":"ADBE Echo-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Echo Operator","mn":"ADBE Echo-0005","ix":5,"v":{"a":0,"k":1,"ix":5}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[70,70],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":81,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":92.479,"s":[6]},{"t":103,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[6.5,3.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":81,"op":115,"st":18,"bm":0},{"ddd":0,"ind":30,"ty":4,"nm":"cercle droit","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.747],"y":[0.901]},"o":{"x":[0.747],"y":[0.393]},"t":81,"s":[0]},{"i":{"x":[0.421],"y":[1]},"o":{"x":[0.196],"y":[-0.23]},"t":87,"s":[100]},{"t":105,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.375,-374.266,0],"ix":2,"l":2},"a":{"a":0,"k":[-138.25,-1.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[1,1,-23.167]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":81,"s":[0,0,100]},{"t":109,"s":[290,290,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[39.098,39.098],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracé d\'ellipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.811765005074,0.968627989526,0.992156982422,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-138.451,-1.451],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":81,"op":115,"st":18,"bm":0},{"ddd":0,"ind":31,"ty":4,"nm":"TIRET 11 Outlines","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":370,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-74.245,-288.245,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,0.75,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3,0.5],[3,0.5],[3,-0.5],[-3,-0.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":603,"st":145,"bm":0},{"ddd":0,"ind":33,"ty":4,"nm":"TIRET 10 Outlines","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":370,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-87.495,-288.245,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,0.75,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3,0.5],[3,0.5],[3,-0.5],[-3,-0.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":603,"st":145,"bm":0},{"ddd":0,"ind":35,"ty":4,"nm":"TIRET 9 Outlines","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":370,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-100.745,-288.245,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,0.75,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3,0.5],[3,0.5],[3,-0.5],[-3,-0.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":603,"st":145,"bm":0},{"ddd":0,"ind":37,"ty":4,"nm":"TIRET 3 Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-114.245,-288.245,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,0.75,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3,0.5],[3,0.5],[3,-0.5],[-3,-0.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":231,"st":145,"bm":0},{"ddd":0,"ind":39,"ty":4,"nm":"POINT 4 Outlines","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":371,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-128.145,-293.18,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,3.25,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-1,-3],[1,-3],[1,-2],[2,-2],[2,-1],[3,-1],[3,1],[2,1],[2,2],[1,2],[1,3],[-1,3],[-1,2],[-2,2],[-2,1],[-3,1],[-3,-1],[-2,-1],[-2,-2],[-1,-2]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,3.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":189,"op":599,"st":135,"bm":0},{"ddd":0,"ind":41,"ty":4,"nm":"TIRET 2 Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-128.345,-288.245,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,0.75,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3,0.5],[3,0.5],[3,-0.5],[-3,-0.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":189,"st":134,"bm":0},{"ddd":0,"ind":43,"ty":4,"nm":"POINT 3 Outlines","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":371,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-142.145,-293.18,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,3.25,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-1,-3],[1,-3],[1,-2],[2,-2],[2,-1],[3,-1],[3,1],[2,1],[2,2],[1,2],[1,3],[-1,3],[-1,2],[-2,2],[-2,1],[-3,1],[-3,-1],[-2,-1],[-2,-2],[-1,-2]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,3.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":162,"op":599,"st":122,"bm":0},{"ddd":0,"ind":45,"ty":4,"nm":"TIRET Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-142.445,-288.245,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,0.75,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3,0.5],[3,0.5],[3,-0.5],[-3,-0.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":163,"st":122,"bm":0},{"ddd":0,"ind":47,"ty":4,"nm":"POINT 2 Outlines","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":371,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-156.645,-293.18,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,3.25,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-1,-3],[1,-3],[1,-2],[2,-2],[2,-1],[3,-1],[3,1],[2,1],[2,2],[1,2],[1,3],[-1,3],[-1,2],[-2,2],[-2,1],[-3,1],[-3,-1],[-2,-1],[-2,-2],[-1,-2]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,3.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":124,"op":599,"st":95,"bm":0},{"ddd":0,"ind":49,"ty":4,"nm":"TIRET 7 Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-156.445,-288.245,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,0.75,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3,0.5],[3,0.5],[3,-0.5],[-3,-0.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":125,"st":89,"bm":0},{"ddd":0,"ind":51,"ty":4,"nm":"POINT Outlines","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":371,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-170.645,-293.18,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,3.25,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-1,-3],[1,-3],[1,-2],[2,-2],[2,-1],[3,-1],[3,1],[2,1],[2,2],[1,2],[1,3],[-1,3],[-1,2],[-2,2],[-2,1],[-3,1],[-3,-1],[-2,-1],[-2,-2],[-1,-2]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,3.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":95,"op":599,"st":80,"bm":0},{"ddd":0,"ind":53,"ty":4,"nm":"TIRET 8 Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-170.445,-288.245,0],"ix":2,"l":2},"a":{"a":0,"k":[3.25,0.75,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3,0.5],[3,0.5],[3,-0.5],[-3,-0.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.25,0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":95,"st":80,"bm":0},{"ddd":0,"ind":55,"ty":4,"nm":"BASE Outlines","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":371,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-121.295,-293.18,0],"ix":2,"l":2},"a":{"a":0,"k":[42.25,7.25,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-40,-7],[40,-7],[40,-6],[41,-6],[41,-5],[42,-5],[42,5],[41,5],[41,6],[40,6],[40,7],[-40,7],[-40,6],[-41,6],[-41,5],[-42,5],[-42,-5],[-41,-5],[-41,-6],[-40,-6]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.815686334348,0.882353001015,0.909803981407,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[42.25,7.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":599,"st":80,"bm":0},{"ddd":0,"ind":57,"ty":4,"nm":"PIN CODE Outlines","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":371,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-120.943,-314.506,0],"ix":2,"l":2},"a":{"a":0,"k":[22.252,4.483,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.465,0],[0.283,-0.308],[0.05,-0.544],[0,0],[0.251,0.297]],"o":[[-0.473,0],[-0.28,0.308],[0,0],[0,-0.562],[-0.25,-0.301]],"v":[[19.596,-1.122],[18.464,-0.661],[17.969,0.618],[21.046,0.618],[20.671,-0.672]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0.397,0],[0.505,0.53],[0,0.941],[-0.466,0.559],[-0.788,0],[-0.43,-0.487],[0,-0.795],[0,0],[0,0],[-0.329,-0.358],[-0.602,0],[-0.62,0.265],[0,0],[0.283,-0.058]],"o":[[-0.87,0],[-0.501,-0.53],[0,-0.949],[0.469,-0.558],[0.737,0],[0.429,0.483],[0,0],[0,0],[0.018,0.691],[0.333,0.358],[0.634,0],[0,0],[-0.315,0.136],[-0.28,0.061]],"v":[[19.839,4.232],[17.775,3.438],[17.023,1.23],[17.723,-1.031],[19.607,-1.87],[21.358,-1.139],[22.003,0.779],[22.003,1.342],[17.947,1.342],[18.468,2.917],[19.87,3.454],[21.751,3.057],[21.751,3.852],[20.854,4.141]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-0.533,0],[-0.272,0.33],[0,0.738],[0,0],[0.28,0.355],[0.608,0],[0.28,-0.408],[0,-0.741],[-0.275,-0.383]],"o":[[0.609,0],[0.275,-0.333],[0,0],[0,-0.834],[-0.275,-0.358],[-0.523,0],[-0.275,0.405],[0,0.752],[0.276,0.383]],"v":[[12.828,3.486],[14.15,2.992],[14.563,1.385],[14.563,1.197],[14.145,-0.585],[12.818,-1.122],[11.615,-0.51],[11.201,1.208],[11.615,2.911]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.82,0],[0.43,0.527],[0,0.971],[-0.43,0.537],[-0.767,0],[-0.426,-0.581],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[-0.412,0.598],[-0.77,0],[-0.426,-0.526],[0,-0.97],[0.429,-0.537],[0.798,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[14.613,3.335],[14.563,3.335],[12.716,4.232],[10.917,3.443],[10.277,1.197],[10.923,-1.064],[12.716,-1.87],[14.552,-0.999],[14.622,-0.999],[14.585,-1.424],[14.563,-1.837],[14.563,-4.232],[15.455,-4.232],[15.455,4.126],[14.73,4.126]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,-0.759],[-0.301,-0.394],[-0.583,0],[-0.301,0.39],[0,0.755],[0.304,0.387],[0.59,0],[0.298,-0.383]],"o":[[0,0.752],[0.301,0.393],[0.584,0],[0.304,-0.394],[0,-0.749],[-0.301,-0.39],[-0.584,0],[-0.297,0.384]],"v":[[4.552,1.176],[5.003,2.896],[6.329,3.486],[7.656,2.9],[8.113,1.176],[7.656,-0.527],[6.32,-1.111],[4.997,-0.538]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,-0.935],[0.484,-0.54],[0.852,0],[0.408,0.247],[0.222,0.462],[0,0.619],[-0.479,0.534],[-0.852,0],[-0.483,-0.548]],"o":[[0,0.959],[-0.483,0.537],[-0.526,0],[-0.408,-0.247],[-0.222,-0.462],[0,-0.96],[0.48,-0.537],[0.824,0],[0.487,0.548]],"v":[[9.036,1.176],[8.311,3.426],[6.309,4.232],[4.906,3.861],[3.962,2.799],[3.628,1.176],[4.348,-1.064],[6.345,-1.87],[8.307,-1.048]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0.598,0],[0.469,0.523],[0,0.959],[-0.472,0.537],[-0.877,0],[-0.282,-0.061],[-0.161,-0.083],[0,0],[0.233,0.05],[0.179,0],[0,-1.525],[-0.29,-0.387],[-0.573,0],[-0.516,0.212],[0,0]],"o":[[-0.853,0],[-0.466,-0.527],[0,-0.985],[0.477,-0.537],[0.283,0],[0.283,0.061],[0,0],[-0.197,-0.079],[-0.233,-0.054],[-1.196,0],[0,0.723],[0.294,0.387],[0.491,0],[0,0],[-0.394,0.204]],"v":[[1.066,4.232],[-0.915,3.449],[-1.615,1.219],[-0.906,-1.064],[1.126,-1.87],[1.973,-1.777],[2.639,-1.562],[2.367,-0.805],[1.721,-0.999],[1.104,-1.079],[-0.691,1.208],[-0.256,2.874],[1.044,3.454],[2.555,3.137],[2.555,3.926]],"c":true},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-0.644],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.025,0.523],[-0.007,0.226],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0.058,0.774],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.007,-0.096],[-0.025,-0.526],[0,0],[0,0],[0,0]],"v":[[-6.169,4.126],[-7.21,4.126],[-11.503,-2.465],[-11.546,-2.465],[-11.46,-0.339],[-11.46,4.126],[-12.303,4.126],[-12.303,-3.728],[-11.271,-3.728],[-6.991,2.835],[-6.948,2.835],[-6.995,1.906],[-7.023,0.779],[-7.023,-3.728],[-6.169,-3.728]],"c":true},"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-15.374,-3.728],[-14.462,-3.728],[-14.462,4.126],[-15.374,4.126]],"c":true},"ix":2},"nm":"Path 9","mn":"ADBE Vector Shape - Group","hd":false},{"ind":9,"ty":"sh","ix":10,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[-15.374,4.126]],"c":false},"ix":2},"nm":"Path 10","mn":"ADBE Vector Shape - Group","hd":false},{"ind":10,"ty":"sh","ix":11,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.362,0.261],[0,0.577],[0.34,0.254],[0.72,0],[0,0]],"o":[[0,0],[0.809,0],[0.362,-0.261],[0,-0.519],[-0.34,-0.254],[0,0],[0,0]],"v":[[-21.09,0.253],[-20.268,0.253],[-18.512,-0.139],[-17.969,-1.396],[-18.48,-2.557],[-20.07,-2.938],[-21.09,-2.938]],"c":true},"ix":2},"nm":"Path 11","mn":"ADBE Vector Shape - Group","hd":false},{"ind":11,"ty":"sh","ix":12,"ks":{"a":0,"k":{"i":[[0,-1.525],[0.545,-0.43],[1.01,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0.795],[-0.54,0.426],[0,0],[0,0],[0,0],[0,0],[0,0],[1.963,0]],"v":[[-17.023,-1.439],[-17.84,0.398],[-20.165,1.036],[-21.09,1.036],[-21.09,4.126],[-22.003,4.126],[-22.003,-3.728],[-19.967,-3.728]],"c":true},"ix":2},"nm":"Path 12","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.815686334348,0.882353001015,0.909803981407,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[22.252,4.483],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":14,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":599,"st":80,"bm":0},{"ddd":0,"ind":59,"ty":4,"nm":"FLACHE BAS Outlines","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":371,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-205.19,-303.05,0],"ix":2,"l":2},"a":{"a":0,"k":[3.75,2.25,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-2.5,-1],[-3.5,-1],[-3.5,-2],[-2.5,-2]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-2.5,-1],[-1.5,-1],[-1.5,0],[-2.5,0]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-1.5,0],[-0.5,0],[-0.5,1],[-1.5,1]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[2.5,-2],[3.5,-2],[3.5,-1],[2.5,-1]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[2.5,-1]],"c":false},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[2.5,-1],[1.5,-1],[1.5,0],[2.5,0]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1.5,1],[0.5,1],[0.5,0],[1.5,0]],"c":true},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[1.5,0]],"c":false},"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[0.5,2],[-0.5,2],[-0.5,1],[0.5,1]],"c":true},"ix":2},"nm":"Path 9","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.815686334348,0.882353001015,0.909803981407,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.75,2.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":11,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":599,"st":80,"bm":0},{"ddd":0,"ind":61,"ty":4,"nm":"FLACHE HAUT Outlines","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":345,"s":[100]},{"t":371,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-37.4,-303.05,0],"ix":2,"l":2},"a":{"a":0,"k":[3.75,2.25,0],"ix":1,"l":2},"s":{"a":0,"k":[141,141,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[2.5,1],[3.5,1],[3.5,2],[2.5,2]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[2.5,1],[1.5,1],[1.5,0],[2.5,0]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[1.5,0],[0.5,0],[0.5,-1],[1.5,-1]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-2.5,2],[-3.5,2],[-3.5,1],[-2.5,1]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[-2.5,1]],"c":false},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-2.5,1],[-1.5,1],[-1.5,0],[-2.5,0]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-1.5,-1],[-0.5,-1],[-0.5,0],[-1.5,0]],"c":true},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[-1.5,0]],"c":false},"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-0.5,-2],[0.5,-2],[0.5,-1],[-0.5,-1]],"c":true},"ix":2},"nm":"Path 9","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.815686334348,0.882353001015,0.909803981407,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.75,2.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":11,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":80,"op":599,"st":80,"bm":0},{"ddd":0,"ind":63,"ty":4,"nm":"LEDGER-WORDMARK-SINGLE-CHARACTER-WHITE-RGB-01 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[375,133,0],"ix":2,"l":2},"a":{"a":0,"k":[384.5,335,0],"ix":1,"l":2},"s":{"a":0,"k":[6,6,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[95.235,-334.675],[95.235,-292.535],[342.315,-292.535],[342.315,-144.615],[384.455,-144.615],[384.455,-334.675]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-384.455,-334.675],[-384.455,-144.615],[-342.315,-144.615],[-342.315,-292.535],[-95.235,-292.535],[-95.235,-334.675]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-94.815,-144.615],[-94.815,144.605],[95.235,144.605],[95.235,106.595],[-52.675,106.595],[-52.675,-144.615]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[342.315,144.615],[342.315,292.525],[95.235,292.525],[95.235,334.665],[384.455,334.665],[384.455,144.615]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-384.455,144.615],[-384.455,334.675],[-95.235,334.675],[-95.235,292.525],[-342.315,292.525],[-342.315,144.615]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[384.455,334.675],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":7,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":44,"op":80,"st":-28,"bm":0},{"ddd":0,"ind":65,"ty":4,"nm":"eclat 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":72,"ix":10},"p":{"a":0,"k":[171.5,198.5,0],"ix":2,"l":2},"a":{"a":0,"k":[-325,-79,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-325,-79],[-301,-52]],"c":false},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Forme 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[0]},{"t":35,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":35,"s":[0]},{"t":40,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Réduire les tracés 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":5,"op":4130,"st":5,"bm":0},{"ddd":0,"ind":66,"ty":4,"nm":"eclat 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":72,"ix":10},"p":{"a":0,"k":[203.5,183.5,0],"ix":2,"l":2},"a":{"a":0,"k":[-325,-79,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-325,-79],[-301,-52]],"c":false},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Forme 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[0]},{"t":30,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[0]},{"t":35,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Réduire les tracés 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":4125,"st":0,"bm":0},{"ddd":0,"ind":67,"ty":4,"nm":"eclat 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[139,44,0],"ix":2,"l":2},"a":{"a":0,"k":[-325,-79,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-325,-79],[-301,-52]],"c":false},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Forme 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[100]},{"t":35,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":35,"s":[100]},{"t":40,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Réduire les tracés 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":5,"op":4130,"st":5,"bm":0},{"ddd":0,"ind":68,"ty":4,"nm":"eclat","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[175,57,0],"ix":2,"l":2},"a":{"a":0,"k":[-325,-79,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-325,-79],[-301,-52]],"c":false},"ix":2},"nm":"Tracé 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.831372608858,0.627450980392,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Contour 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Forme 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[100]},{"t":30,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[100]},{"t":35,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Réduire les tracés 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":4125,"st":0,"bm":0},{"ddd":0,"ind":69,"ty":0,"nm":"NANO S DEVICE VECTO DARK","parent":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":325,"s":[100]},{"t":350,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.036,"y":0.712},"o":{"x":0.333,"y":0},"t":21,"s":[98,-372,0],"to":[1.5,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.945,"y":0.242},"t":26.923,"s":[107,-372,0],"to":[0,0,0],"ti":[1.5,0,0]},{"t":32,"s":[98,-372,0]}],"ix":2,"l":2},"a":{"a":0,"k":[384.5,24.649,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":769,"h":199,"ip":-49,"op":4076,"st":-49,"bm":0},{"ddd":0,"ind":70,"ty":0,"nm":"USB CABLE VECTO DARK","parent":69,"refId":"comp_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":325,"s":[100]},{"t":350,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.72,"y":0},"t":0,"s":[-456.5,62.649,0],"to":[44.833,0,0],"ti":[-44.833,0,0]},{"t":23,"s":[-187.5,62.649,0]}],"ix":2,"l":2},"a":{"a":0,"k":[207.368,11.707,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":644,"h":93,"ip":-49,"op":4076,"st":-49,"bm":0}],"markers":[]}')
}, 285824, (e, t, r) => {
    t.exports = JSON.parse('{"nm":"lottie (mobile)","ddd":0,"h":812,"w":609,"meta":{"g":"@lottiefiles/toolkit-js 0.33.2"},"layers":[{"ty":0,"nm":"cannon (small - left)","sr":1,"st":0,"op":300,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,360,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[76,452,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":480,"h":720,"refId":"comp_0","ind":1},{"ty":0,"nm":"cannon (small - right)","sr":1,"st":0,"op":300,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[479.994,360,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[533,452,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":480,"h":720,"refId":"comp_2","ind":2},{"ty":0,"nm":"cannon (small - top)","sr":1,"st":0,"op":300,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[102,102,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[304,408,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":800,"h":800,"refId":"comp_3","ind":3}],"v":"5.5.6","fr":60,"op":300,"ip":0,"assets":[{"nm":"","id":"comp_0","layers":[{"ty":0,"nm":"_small-side","sr":1,"st":15,"op":234,"ip":15,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[218,320,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":800,"h":800,"refId":"comp_1","ind":1}]},{"nm":"","id":"comp_1","layers":[{"ty":4,"nm":"streamer b","sr":1,"st":9,"op":58,"ip":9,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-157,-245,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[554,664,0],"ix":2},"r":{"a":0,"k":166,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-1.685,-13.314],[0,-14.907],[0,-15.206],[0,-14.907],[0,-14.907],[0,-15.206],[1.754,-14.206],[-3.934,-9.465]],"o":[[-3.895,8.562],[1.872,14.789],[0,15.206],[0,14.907],[0,14.907],[0,15.206],[0,14.314],[-1.803,14.605],[0,0]],"v":[[-156.5,-406],[-166.5,-367],[-146.5,-327],[-166.5,-286],[-146.5,-246],[-166.5,-206],[-146.5,-165],[-166.5,-127],[-156.5,-84]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[4],"t":9},{"s":[0.5],"t":57}],"ix":5},"c":{"a":0,"k":[0.7333,0.6902,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":9},{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[35],"t":14},{"s":[100],"t":57}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":14},{"s":[100],"t":57}],"ix":1},"m":1}],"ind":1},{"ty":4,"nm":"streamer a","sr":1,"st":5,"op":49,"ip":5,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-157,-245,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[532,582,0],"ix":2},"r":{"a":0,"k":167,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-1.685,-13.314],[0,-14.907],[0,-15.206],[0,-14.907],[0,-14.907],[0,-15.206],[1.754,-14.206],[-3.934,-9.465]],"o":[[-3.895,8.562],[1.872,14.789],[0,15.206],[0,14.907],[0,14.907],[0,15.206],[0,14.314],[-1.803,14.605],[0,0]],"v":[[-156.5,-406],[-166.5,-367],[-146.5,-327],[-166.5,-286],[-146.5,-246],[-166.5,-206],[-146.5,-165],[-166.5,-127],[-156.5,-84]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[4],"t":5},{"s":[0.5],"t":48}],"ix":5},"c":{"a":0,"k":[0.6275,0.2,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":5},{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[35],"t":10},{"s":[100],"t":48}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":10},{"s":[100],"t":48}],"ix":1},"m":1}],"ind":2},{"ty":4,"nm":"circle a","sr":1,"st":1,"op":159,"ip":1,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[50,100,100],"t":1},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":29},{"s":[100,50,100],"t":128}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,838,0],"t":1,"ti":[46.667,0,0],"to":[-30,-106.667,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[419.5,198,0],"t":29,"ti":[0,0,0],"to":[-46.667,0,0]},{"s":[319.5,838,0],"t":158}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":1},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[321.019],"t":29},{"s":[1800],"t":158}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":2,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7333,0.6902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3},{"ty":4,"nm":"circle b","sr":1,"st":3,"op":129,"ip":3,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[50,100,100],"t":3},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":21},{"s":[100,50,100],"t":98}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,838,0],"t":3,"ti":[66.667,0,0],"to":[-26.667,-93.333,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[439.5,278,0],"t":21,"ti":[0,0,0],"to":[-66.667,0,0]},{"s":[199.5,838,0],"t":128}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":3},{"s":[1440],"t":128}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":2,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.4314,0.3647,0.8471],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":4},{"ty":4,"nm":"star a","sr":1,"st":1,"op":159,"ip":1,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[50,100,100],"t":1},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":31},{"s":[100,50,100],"t":128}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[596.087,836.292,0],"t":1,"ti":[52.765,0,0],"to":[-36.098,-100,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[379.5,236.292,0],"t":31,"ti":[0,0,0],"to":[-52.765,0,0]},{"s":[279.5,836.292,0],"t":158}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":1},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[343.949],"t":31},{"s":[1800],"t":158}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Polystar 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sr","bm":0,"hd":false,"mn":"ADBE Vector Shape - Star","nm":"Polystar Path 1","ix":1,"d":1,"ir":{"a":0,"k":5,"ix":6},"is":{"a":0,"k":0,"ix":8},"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"or":{"a":0,"k":12,"ix":7},"os":{"a":0,"k":0,"ix":9},"r":{"a":0,"k":0,"ix":5},"sy":1},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7333,0.6902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":5},{"ty":4,"nm":"star b","sr":1,"st":3,"op":129,"ip":3,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[50,100,100],"t":3},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":23},{"s":[100,50,100],"t":98}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[596.087,836.292,0],"t":3,"ti":[66.098,1.667,0],"to":[-39.431,-113.333,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[359.5,156.292,0],"t":23,"ti":[0,0,0],"to":[-66.098,-1.667,0]},{"s":[199.5,826.292,0],"t":128}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":3},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[288],"t":23},{"s":[1800],"t":128}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Polystar 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sr","bm":0,"hd":false,"mn":"ADBE Vector Shape - Star","nm":"Polystar Path 1","ix":1,"d":1,"ir":{"a":0,"k":5,"ix":6},"is":{"a":0,"k":0,"ix":8},"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"or":{"a":0,"k":12,"ix":7},"os":{"a":0,"k":0,"ix":9},"r":{"a":0,"k":0,"ix":5},"sy":1},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.5373,0.1961,0.9294],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":6},{"ty":4,"nm":"rec a","sr":1,"st":0,"op":219,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[50,100,100],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":33},{"s":[100,50,100],"t":188}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,842,0],"t":0,"ti":[41.333,1.333,0],"to":[-23.333,-100,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[459.5,242,0],"t":33,"ti":[0,0,0],"to":[-41.333,-1.333,0]},{"s":[351.5,834,0],"t":218}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[381.468],"t":33},{"s":[2520],"t":218}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,8],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.6275,0.2,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":7},{"ty":4,"nm":"rec b","sr":1,"st":2,"op":192,"ip":2,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[50,100,100],"t":2},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":25},{"s":[100,50,100],"t":161}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,842,0],"t":2,"ti":[74,5,0],"to":[-23.333,-113.333,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[459.5,162,0],"t":25,"ti":[0,0,0],"to":[-74,-5,0]},{"s":[155.5,812,0],"t":191}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":2},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[262.857],"t":25},{"s":[2160],"t":191}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,8],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7333,0.6902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":8},{"ty":4,"nm":"square a","sr":1,"st":0,"op":219,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[50,100,100],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":35},{"s":[100,50,100],"t":188}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,838,0],"t":0,"ti":[60,0,0],"to":[-43.333,-123.333,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[339.5,98,0],"t":35,"ti":[0,0,0],"to":[-60,0,0]},{"s":[239.5,838,0],"t":218}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[462.385],"t":35},{"s":[2880],"t":218}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3098,0.2431,0.7216],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":9},{"ty":4,"nm":"square b","sr":1,"st":2,"op":192,"ip":2,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[50,100,100],"t":2},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":27},{"s":[100,50,100],"t":161}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,838,0],"t":2,"ti":[75,3.333,0],"to":[-30,-120,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[419.5,118,0],"t":27,"ti":[0,0,0],"to":[-75,-3.333,0]},{"s":[149.5,818,0],"t":191}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":2},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[285.714],"t":27},{"s":[2160],"t":191}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.6275,0.2,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":10},{"ty":4,"nm":"streamer b 2","sr":1,"st":13,"op":62,"ip":13,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-157,-245,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[543,427,0],"ix":2},"r":{"a":0,"k":171,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-1.685,-13.314],[0,-14.907],[0,-15.206],[0,-14.907],[0,-14.907],[0,-15.206],[1.754,-14.206],[-3.934,-9.465]],"o":[[-3.895,8.562],[1.872,14.789],[0,15.206],[0,14.907],[0,14.907],[0,15.206],[0,14.314],[-1.803,14.605],[0,0]],"v":[[-156.5,-406],[-166.5,-367],[-146.5,-327],[-166.5,-286],[-146.5,-246],[-166.5,-206],[-146.5,-165],[-166.5,-127],[-156.5,-84]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[4],"t":13},{"s":[0.5],"t":61}],"ix":5},"c":{"a":0,"k":[0.4314,0.3647,0.8471],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":13},{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[35],"t":18},{"s":[100],"t":61}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":18},{"s":[100],"t":61}],"ix":1},"m":1}],"ind":11},{"ty":4,"nm":"streamer a 2","sr":1,"st":10,"op":54,"ip":10,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-157,-245,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[454,444,0],"ix":2},"r":{"a":0,"k":151,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-1.685,-13.314],[0,-14.907],[0,-15.206],[0,-14.907],[0,-14.907],[0,-15.206],[1.754,-14.206],[-3.934,-9.465]],"o":[[-3.895,8.562],[1.872,14.789],[0,15.206],[0,14.907],[0,14.907],[0,15.206],[0,14.314],[-1.803,14.605],[0,0]],"v":[[-156.5,-406],[-166.5,-367],[-146.5,-327],[-166.5,-286],[-146.5,-246],[-166.5,-206],[-146.5,-165],[-166.5,-127],[-156.5,-84]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[4],"t":10},{"s":[0.5],"t":53}],"ix":5},"c":{"a":0,"k":[0.3098,0.2431,0.7216],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":10},{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[35],"t":15},{"s":[100],"t":53}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":15},{"s":[100],"t":53}],"ix":1},"m":1}],"ind":12},{"ty":4,"nm":"circle a 2","sr":1,"st":1,"op":192,"ip":1,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100,50,100],"t":1},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":29},{"s":[50,100,100],"t":161}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,838,0],"t":1,"ti":[56.667,-3.333,0],"to":[-53.333,-113.333,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[279.5,158,0],"t":29,"ti":[0,0,0],"to":[-56.667,3.333,0]},{"s":[259.5,858,0],"t":191}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":1},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[-371.368],"t":29},{"s":[-2520],"t":191}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":2,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.6275,0.2,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":13},{"ty":4,"nm":"circle b 2","sr":1,"st":3,"op":159,"ip":3,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100,50,100],"t":3},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":21},{"s":[50,100,100],"t":128}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,838,0],"t":3,"ti":[63,-7,0],"to":[-53.333,-100,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[279.5,238,0],"t":21,"ti":[0,0,0],"to":[-63,7,0]},{"s":[221.5,880,0],"t":158}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":3},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[-250.839],"t":21},{"s":[-2160],"t":158}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":2,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.5373,0.1961,0.9294],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":14},{"ty":4,"nm":"star a 2","sr":1,"st":1,"op":192,"ip":1,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100,50,100],"t":1},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":31},{"s":[50,100,100],"t":161}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[596.087,836.292,0],"t":1,"ti":[42.765,-3.333,0],"to":[-9.431,-113.333,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[539.5,156.292,0],"t":31,"ti":[0,0,0],"to":[-42.765,3.333,0]},{"s":[339.5,856.292,0],"t":191}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":1},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[-397.895],"t":31},{"s":[-2520],"t":191}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Polystar 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sr","bm":0,"hd":false,"mn":"ADBE Vector Shape - Star","nm":"Polystar Path 1","ix":1,"d":1,"ir":{"a":0,"k":5,"ix":6},"is":{"a":0,"k":0,"ix":8},"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"or":{"a":0,"k":12,"ix":7},"os":{"a":0,"k":0,"ix":9},"r":{"a":0,"k":0,"ix":5},"sy":1},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3098,0.2431,0.7216],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":15},{"ty":4,"nm":"star b 2","sr":1,"st":3,"op":159,"ip":3,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100,50,100],"t":3},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":23},{"s":[50,100,100],"t":128}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[596.087,836.292,0],"t":3,"ti":[52.765,-3.333,0],"to":[-12.765,-96.667,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[519.5,256.292,0],"t":23,"ti":[0,0,0],"to":[-52.765,3.333,0]},{"s":[279.5,856.292,0],"t":158}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":3},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[-278.71],"t":23},{"s":[-2160],"t":158}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Polystar 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sr","bm":0,"hd":false,"mn":"ADBE Vector Shape - Star","nm":"Polystar Path 1","ix":1,"d":1,"ir":{"a":0,"k":5,"ix":6},"is":{"a":0,"k":0,"ix":8},"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"or":{"a":0,"k":12,"ix":7},"os":{"a":0,"k":0,"ix":9},"r":{"a":0,"k":0,"ix":5},"sy":1},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7333,0.6902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":16},{"ty":4,"nm":"rec a 2","sr":1,"st":0,"op":129,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100,50,100],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":33},{"s":[100,50,100],"t":98}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,842,0],"t":0,"ti":[66.667,0,0],"to":[-16.667,-120,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[499.5,122,0],"t":33,"ti":[0,0,0],"to":[-66.667,0,0]},{"s":[199.5,842,0],"t":128}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[-556.875],"t":33},{"s":[-2160],"t":128}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,8],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3098,0.2431,0.7216],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":17},{"ty":4,"nm":"rec b 2","sr":1,"st":2,"op":219,"ip":2,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100,50,100],"t":2},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":25},{"s":[50,100,100],"t":188}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,842,0],"t":2,"ti":[2.877,-2.055,0],"to":[-22.62,-109.87,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[339.5,262,0],"t":25,"ti":[0,0,0],"to":[-51.333,36.667,0]},{"s":[219.5,862,0],"t":218}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":2},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[-306.667],"t":25},{"s":[-2880],"t":218}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,8],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.4314,0.3647,0.8471],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":18},{"ty":4,"nm":"square a 2","sr":1,"st":0,"op":129,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100,50,100],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":35},{"s":[50,100,100],"t":98}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,838,0],"t":0,"ti":[36.667,0,0],"to":[-20,-90,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[479.5,298,0],"t":35,"ti":[0,0,0],"to":[-36.667,0,0]},{"s":[379.5,838,0],"t":128}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[-590.625],"t":35},{"s":[-2160],"t":128}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7333,0.6902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":19},{"ty":4,"nm":"square b 2","sr":1,"st":2,"op":219,"ip":2,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[100,50,100],"t":2},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[100,100,100],"t":27},{"s":[50,100,100],"t":188}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[599.5,838,0],"t":2,"ti":[50,0,0],"to":[-10,-103.333,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[539.5,218,0],"t":27,"ti":[0,0,0],"to":[-50,0,0]},{"s":[299.5,838,0],"t":218}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[0],"t":2},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[-333.333],"t":27},{"s":[-2880],"t":218}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.4314,0.3647,0.8471],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":20}]},{"nm":"","id":"comp_2","layers":[{"ty":0,"nm":"_small-side","sr":1,"st":0,"op":219,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[260,320,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":800,"h":800,"refId":"comp_1","ind":1}]},{"nm":"","id":"comp_3","layers":[{"ty":0,"nm":"left","sr":1,"st":13,"op":313,"ip":13,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[400,400,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":800,"h":800,"refId":"comp_4","ind":1},{"ty":0,"nm":"right","sr":1,"st":30,"op":330,"ip":30,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[400,400,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":800,"h":800,"refId":"comp_4","ind":2}]},{"nm":"","id":"comp_4","layers":[{"ty":4,"nm":"streamer a 4","sr":1,"st":13,"op":174,"ip":13,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-157,-245,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[219.178,-190.096,0],"t":13,"ti":[167.333,-560.667,0],"to":[-95.333,426.667,0]},{"s":[179.178,989.904,0],"t":173}],"ix":2},"r":{"a":0,"k":14,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-1.685,-13.314],[0,-14.907],[0,-15.206],[0,-14.907],[0,-14.907],[0,-15.206],[1.754,-14.206],[-3.934,-9.465]],"o":[[-3.895,8.562],[1.872,14.789],[0,15.206],[0,14.907],[0,14.907],[0,15.206],[0,14.314],[-1.803,14.605],[0,0]],"v":[[-156.5,-406],[-166.5,-367],[-146.5,-327],[-166.5,-286],[-146.5,-246],[-166.5,-206],[-146.5,-165],[-166.5,-127],[-156.5,-84]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[4],"t":13},{"s":[0.5],"t":176}],"ix":5},"c":{"a":0,"k":[0.6275,0.2,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":13},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[40],"t":18},{"s":[100],"t":176}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":18},{"s":[100],"t":176}],"ix":1},"m":1}],"ind":1},{"ty":4,"nm":"streamer b 4","sr":1,"st":5,"op":174,"ip":5,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-157,-245,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[269.863,-175.455,0],"t":5,"ti":[216,-599.333,0],"to":[-110,415.333,0]},{"s":[69.863,984.545,0],"t":173}],"ix":2},"r":{"a":0,"k":-1.458,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-1.685,-13.314],[0,-14.907],[0,-15.206],[0,-14.907],[0,-14.907],[0,-15.206],[1.754,-14.206],[-3.934,-9.465]],"o":[[-3.895,8.562],[1.872,14.789],[0,15.206],[0,14.907],[0,14.907],[0,15.206],[0,14.314],[-1.803,14.605],[0,0]],"v":[[-156.5,-406],[-166.5,-367],[-146.5,-327],[-166.5,-286],[-146.5,-246],[-166.5,-206],[-146.5,-165],[-166.5,-127],[-156.5,-84]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[4],"t":5},{"s":[0.5],"t":173}],"ix":5},"c":{"a":0,"k":[0.7333,0.6902,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":5},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[40],"t":10},{"s":[100],"t":173}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":10},{"s":[100],"t":173}],"ix":1},"m":1}],"ind":2},{"ty":4,"nm":"circle a 4","sr":1,"st":-7,"op":156,"ip":8,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[50,100,100],"t":8},{"s":[100,50,100],"t":155}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[325.643,-26.292,0],"t":8,"ti":[15.333,-507.667,0],"to":[-101.333,75.667,0]},{"s":[125.643,835.708,0],"t":155}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":8},{"s":[1800],"t":155}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":2,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7333,0.6902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3},{"ty":4,"nm":"circle b 4","sr":1,"st":-13,"op":216,"ip":2,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[50,100,100],"t":2},{"s":[100,50,100],"t":215}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[619.5,-26.292,0],"t":2,"ti":[-2,-497.667,0],"to":[-138,77.667,0]},{"s":[259.5,835.708,0],"t":215}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":2},{"s":[2520],"t":215}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":2,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.4314,0.3647,0.8471],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":4},{"ty":4,"nm":"star a 4","sr":1,"st":-9,"op":246,"ip":6,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[50,100,100],"t":6},{"s":[100,50,100],"t":245}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[376.929,-28,0],"t":6,"ti":[173.333,-127.667,0],"to":[-213.333,157.667,0]},{"s":[116.929,834,0],"t":245}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":6},{"s":[2880],"t":245}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Polystar 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sr","bm":0,"hd":false,"mn":"ADBE Vector Shape - Star","nm":"Polystar Path 1","ix":1,"d":1,"ir":{"a":0,"k":5,"ix":6},"is":{"a":0,"k":0,"ix":8},"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"or":{"a":0,"k":12,"ix":7},"os":{"a":0,"k":0,"ix":9},"r":{"a":0,"k":0,"ix":5},"sy":1},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7333,0.6902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":5},{"ty":4,"nm":"star b 4","sr":1,"st":-13,"op":126,"ip":2,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[50,100,100],"t":2},{"s":[100,50,100],"t":125}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[171.786,-28,0],"t":2,"ti":[-161.333,-275.667,0],"to":[0,0,0]},{"s":[251.786,834,0],"t":125}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":2},{"s":[1800],"t":125}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Polystar 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sr","bm":0,"hd":false,"mn":"ADBE Vector Shape - Star","nm":"Polystar Path 1","ix":1,"d":1,"ir":{"a":0,"k":5,"ix":6},"is":{"a":0,"k":0,"ix":8},"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"or":{"a":0,"k":12,"ix":7},"os":{"a":0,"k":0,"ix":9},"r":{"a":0,"k":0,"ix":5},"sy":1},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.5373,0.1961,0.9294],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":6},{"ty":4,"nm":"rec a 4","sr":1,"st":-11,"op":186,"ip":4,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[50,100,100],"t":4},{"s":[100,50,100],"t":185}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[428.214,-22.292,0],"t":4,"ti":[-130.667,-315.667,0],"to":[-167.333,119.667,0]},{"s":[228.214,839.708,0],"t":185}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":4},{"s":[2520],"t":185}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,8],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.6275,0.2,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":7},{"ty":4,"nm":"rec b 4","sr":1,"st":-9,"op":246,"ip":6,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[50,100,100],"t":6},{"s":[100,50,100],"t":245}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[223.071,-22.292,0],"t":6,"ti":[-92.571,-383.708,0],"to":[0,0,0]},{"s":[223.071,839.708,0],"t":245}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":6},{"s":[2880],"t":245}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,8],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7333,0.6902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":8},{"ty":4,"nm":"square a 4","sr":1,"st":-11,"op":218,"ip":4,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[50,100,100],"t":4},{"s":[100,50,100],"t":217}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[120.5,-26.292,0],"t":4,"ti":[52.221,-418.892,0],"to":[13,430.305,0]},{"s":[198.5,833.708,0],"t":217}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":4},{"s":[2520],"t":217}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3098,0.2431,0.7216],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":9},{"ty":4,"nm":"square b 4","sr":1,"st":-7,"op":216,"ip":8,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[50,100,100],"t":8},{"s":[100,50,100],"t":215}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[274.357,-26.292,0],"t":8,"ti":[22.667,-253.667,0],"to":[157.333,415.667,0]},{"s":[114.357,835.708,0],"t":215}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":8},{"s":[2520],"t":215}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3098,0.2431,0.7216],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":10},{"ty":4,"nm":"streamer a 3","sr":1,"st":0,"op":186,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-157,-245,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[275.178,-173.096,0],"t":0,"ti":[177.333,-643.333,0],"to":[-87.333,413.333,0]},{"s":[219.178,974.904,0],"t":185}],"ix":2},"r":{"a":0,"k":3,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-1.685,-13.314],[0,-14.907],[0,-15.206],[0,-14.907],[0,-14.907],[0,-15.206],[1.754,-14.206],[-3.934,-9.465]],"o":[[-3.895,8.562],[1.872,14.789],[0,15.206],[0,14.907],[0,14.907],[0,15.206],[0,14.314],[-1.803,14.605],[0,0]],"v":[[-156.5,-406],[-166.5,-367],[-146.5,-327],[-166.5,-286],[-146.5,-246],[-166.5,-206],[-146.5,-165],[-166.5,-127],[-156.5,-84]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[4],"t":0},{"s":[0.5],"t":177}],"ix":5},"c":{"a":0,"k":[0.3098,0.2431,0.7216],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[40],"t":5},{"s":[100],"t":177}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":5},{"s":[100],"t":177}],"ix":1},"m":1}],"ind":11},{"ty":4,"nm":"streamer b 3","sr":1,"st":11,"op":218,"ip":11,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-157,-245,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[199.863,74.545,0],"t":11,"ti":[179.333,-430.667,0],"to":[-13.363,405.455,0]},{"s":[139.863,834.545,0],"t":217}],"ix":2},"r":{"a":0,"k":9,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-1.685,-13.314],[0,-14.907],[0,-15.206],[0,-14.907],[0,-14.907],[0,-15.206],[1.754,-14.206],[-3.934,-9.465]],"o":[[-3.895,8.562],[1.872,14.789],[0,15.206],[0,14.907],[0,14.907],[0,15.206],[0,14.314],[-1.803,14.605],[0,0]],"v":[[-156.5,-406],[-166.5,-367],[-146.5,-327],[-166.5,-286],[-146.5,-246],[-166.5,-206],[-146.5,-165],[-166.5,-127],[-156.5,-84]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[4],"t":11},{"s":[0.5],"t":199}],"ix":5},"c":{"a":0,"k":[0.4314,0.3647,0.8471],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":11},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[40],"t":16},{"s":[100],"t":199}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":16},{"s":[100],"t":199}],"ix":1},"m":1}],"ind":12},{"ty":4,"nm":"circle a 3","sr":1,"st":-13,"op":126,"ip":2,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100,50,100],"t":2},{"s":[50,100,100],"t":125}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[365.643,-26.292,0],"t":2,"ti":[15.333,-507.667,0],"to":[-101.333,75.667,0]},{"s":[165.643,835.708,0],"t":125}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":2},{"s":[-1800],"t":125}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":2,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.6275,0.2,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":13},{"ty":4,"nm":"circle b 3","sr":1,"st":-7,"op":246,"ip":8,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100,50,100],"t":8},{"s":[50,100,100],"t":245}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[519.5,-26.292,0],"t":8,"ti":[-2,-497.667,0],"to":[-138,77.667,0]},{"s":[159.5,835.708,0],"t":245}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":8},{"s":[-2880],"t":245}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":2,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.5373,0.1961,0.9294],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":14},{"ty":4,"nm":"star a 3","sr":1,"st":-9,"op":246,"ip":6,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100,50,100],"t":6},{"s":[50,100,100],"t":245}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[416.929,-28,0],"t":6,"ti":[173.333,-127.667,0],"to":[-213.333,157.667,0]},{"s":[156.929,834,0],"t":245}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":6},{"s":[-2880],"t":245}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Polystar 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sr","bm":0,"hd":false,"mn":"ADBE Vector Shape - Star","nm":"Polystar Path 1","ix":1,"d":1,"ir":{"a":0,"k":5,"ix":6},"is":{"a":0,"k":0,"ix":8},"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"or":{"a":0,"k":12,"ix":7},"os":{"a":0,"k":0,"ix":9},"r":{"a":0,"k":0,"ix":5},"sy":1},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3098,0.2431,0.7216],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":15},{"ty":4,"nm":"star b 3","sr":1,"st":-7,"op":156,"ip":8,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100,50,100],"t":8},{"s":[50,100,100],"t":155}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[211.786,-28,0],"t":8,"ti":[-161.333,-275.667,0],"to":[0,0,0]},{"s":[291.786,834,0],"t":155}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":8},{"s":[-2160],"t":155}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Polystar 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sr","bm":0,"hd":false,"mn":"ADBE Vector Shape - Star","nm":"Polystar Path 1","ix":1,"d":1,"ir":{"a":0,"k":5,"ix":6},"is":{"a":0,"k":0,"ix":8},"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"or":{"a":0,"k":12,"ix":7},"os":{"a":0,"k":0,"ix":9},"r":{"a":0,"k":0,"ix":5},"sy":1},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7333,0.6902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":16},{"ty":4,"nm":"rec a 3","sr":1,"st":-11,"op":186,"ip":4,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100,50,100],"t":4},{"s":[50,100,100],"t":185}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[468.214,-22.292,0],"t":4,"ti":[-130.667,-315.667,0],"to":[-167.333,119.667,0]},{"s":[268.214,839.708,0],"t":185}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":4},{"s":[-2160],"t":185}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,8],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3098,0.2431,0.7216],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":17},{"ty":4,"nm":"rec b 3","sr":1,"st":-9,"op":246,"ip":6,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100,50,100],"t":6},{"s":[50,100,100],"t":245}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[263.071,-22.292,0],"t":6,"ti":[-114.571,-267.708,0],"to":[0,143.667,0]},{"s":[263.071,839.708,0],"t":245}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":6},{"s":[-2880],"t":245}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,8],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.4314,0.3647,0.8471],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":18},{"ty":4,"nm":"square a 3","sr":1,"st":-13,"op":218,"ip":2,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100,50,100],"t":2},{"s":[50,100,100],"t":217}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[160.5,-26.292,0],"t":2,"ti":[52.221,-418.892,0],"to":[13,430.305,0]},{"s":[238.5,833.708,0],"t":217}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":2},{"s":[-2520],"t":217}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.7333,0.6902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":19},{"ty":4,"nm":"square b 3","sr":1,"st":-11,"op":186,"ip":4,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100,50,100],"t":4},{"s":[50,100,100],"t":185}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[314.357,-26.292,0],"t":4,"ti":[22.667,-253.667,0],"to":[157.333,415.667,0]},{"s":[154.357,835.708,0],"t":185}],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":4},{"s":[-2160],"t":185}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":50,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":2,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[16,16],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.4314,0.3647,0.8471],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":20}]}]}')
}, 30210, e => {
    "use strict";
    e.s(["default", () => M, "useUnlockCurrentVariant", () => L], 30210);
    var t = e.i(391398),
        r = e.i(261576);
    e.i(664157);
    var i = e.i(271179),
        n = e.i(191788);
    e.i(643781);
    var a = e.i(989606);
    e.i(881106);
    var s = e.i(800087),
        o = e.i(529669),
        c = e.i(715108);
    e.i(108399);
    var l = e.i(860231),
        u = e.i(168489),
        d = e.i(78450),
        h = e.i(722068),
        p = e.i(625213);
    let f = (0, u.default)(() => e.A(854172), {
            loadableGenerated: {
                modules: [202295]
            },
            ssr: !1
        }),
        x = () => {
            let e, n, s, o, u, x, g, v, b, E, _, S, A, D, w, T, O = (0, r.c)(40),
                B = (0, c.default)(m),
                R = (0, c.default)(y),
                {
                    t: I
                } = (0, i.useTranslation)("productUpgrade");
            O[0] !== I ? (e = Array.from({
                length: 3
            }, (e, t) => I(`lockedView.steps.${t}`)), O[0] = I, O[1] = e) : e = O[1];
            let C = e;
            return O[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, t.jsx)(f, {
                animationData: d.default,
                className: "hidden w-256 lg:block"
            }), O[2] = n) : n = O[2], O[3] !== I ? (s = I("lockedView.title"), O[3] = I, O[4] = s) : s = O[4], O[5] !== s ? (o = (0, t.jsx)("h3", {
                className: "hidden text-center heading-3-semi-bold lg:block",
                children: s
            }), O[5] = s, O[6] = o) : o = O[6], O[7] !== I ? (u = I("lockedView.mobileTitle"), O[7] = I, O[8] = u) : u = O[8], O[9] !== u ? (x = (0, t.jsx)("h3", {
                className: "text-center heading-3-semi-bold lg:hidden",
                children: u
            }), O[9] = u, O[10] = x) : x = O[10], O[11] !== C ? (g = (0, t.jsx)("div", {
                className: "flex flex-col divide-y divide-neutral-200 rounded-xs bg-neutral-50 px-16 body-3",
                children: C.map(k)
            }), O[11] = C, O[12] = g) : g = O[12], O[13] !== R || O[14] !== B.state || O[15] !== I ? (v = "waiting_for_device" === B.state ? (0, t.jsx)(h.default, {
                message: I("lockedView.waitingForDevice"),
                animatedIcon: (0, t.jsx)(p.default, {})
            }) : (0, t.jsx)("div", {
                className: "hidden lg:block",
                children: (0, t.jsx)(a.default, {
                    variant: "primary-black",
                    onClick: R,
                    label: I("lockedView.connectDevice"),
                    size: "medium",
                    icon: "arrowRight",
                    "data-cs-override-id": "connect-ledger-nano-s-button"
                })
            }), O[13] = R, O[14] = B.state, O[15] = I, O[16] = v) : v = O[16], O[17] !== B.message || O[18] !== B.state || O[19] !== I ? (b = "error" === B.state && (0, t.jsx)(h.default, {
                message: I("lockedView." + B.message),
                variant: "error"
            }), O[17] = B.message, O[18] = B.state, O[19] = I, O[20] = b) : b = O[20], O[21] === Symbol.for("react.memo_cache_sentinel") ? (E = (0, t.jsx)(l.default, {
                name: "shieldLock",
                size: 40
            }), O[21] = E) : E = O[21], O[22] !== I ? (_ = I("lockedView.safeAssets"), O[22] = I, O[23] = _) : _ = O[23], O[24] !== _ ? (S = (0, t.jsx)("div", {
                children: _
            }), O[24] = _, O[25] = S) : S = O[25], O[26] !== I ? (A = I("lockedView.connectionRequired"), O[26] = I, O[27] = A) : A = O[27], O[28] !== A ? (D = (0, t.jsx)("div", {
                children: A
            }), O[28] = A, O[29] = D) : D = O[29], O[30] !== S || O[31] !== D ? (w = (0, t.jsxs)("div", {
                className: "flex items-center gap-8 rounded-xs border border-neutral-200 p-16 body-3",
                children: [E, (0, t.jsxs)("div", {
                    children: [S, D]
                })]
            }), O[30] = S, O[31] = D, O[32] = w) : w = O[32], O[33] !== w || O[34] !== o || O[35] !== x || O[36] !== g || O[37] !== v || O[38] !== b ? (T = (0, t.jsx)("div", {
                className: "flex-1 p-32",
                "data-cs-override-id": "eligibility-check-panel",
                children: (0, t.jsxs)("div", {
                    className: "flex h-full flex-col items-center gap-32",
                    children: [n, o, x, g, v, b, w]
                })
            }), O[33] = w, O[34] = o, O[35] = x, O[36] = g, O[37] = v, O[38] = b, O[39] = T) : T = O[39], T
        };

    function m(e) {
        return e.current
    }

    function y(e) {
        return e.connectDevice
    }

    function k(e, r) {
        return (0, t.jsxs)("div", {
            className: "flex items-center gap-8 py-16",
            children: [(0, t.jsx)("div", {
                className: "flex h-24 w-24 min-w-24 items-center justify-center rounded-full bg-purple-100 text-purple-800",
                children: r + 1
            }), (0, t.jsx)("p", {
                children: e
            })]
        }, e)
    }
    e.i(350461), e.i(214495);
    var g = e.i(744295),
        v = e.i(126019),
        b = e.i(292905),
        E = e.i(605672);

    function _(e) {
        return e.unlock
    }

    function S(e) {
        var t;
        return t = {
            reCaptchaToken: e
        }, (0, E.jsonMutationFetch)("/api/upgrade-program/unlock-offer", "POST", t)
    }
    e.i(632920);
    let A = (0, u.default)(() => e.A(153459), {
            loadableGenerated: {
                modules: [531976]
            },
            ssr: !1
        }),
        D = () => {
            let e, n, a, s, o, l, u, d, p, f, x = (0, r.c)(25),
                {
                    currentVariant: m
                } = L(),
                {
                    t: y
                } = (0, i.useTranslation)("productUpgrade"),
                {
                    handleRecaptcha: k,
                    error: E
                } = (() => {
                    let e, t, i, n, a = (0, r.c)(8),
                        s = (0, c.default)(_);
                    a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = ["unlock-upgrade-program-offer"], a[0] = e) : e = a[0], a[1] !== s ? (t = {
                        mutationKey: e,
                        mutationFn: S,
                        onSuccess: () => {
                            s()
                        }
                    }, a[1] = s, a[2] = t) : t = a[2];
                    let {
                        mutate: o,
                        error: l
                    } = (0, b.useMutation)(t);
                    a[3] !== o ? (i = e => {
                        o(e)
                    }, a[3] = o, a[4] = i) : i = a[4];
                    let u = i;
                    return a[5] !== l || a[6] !== u ? (n = {
                        handleRecaptcha: u,
                        error: l
                    }, a[5] = l, a[6] = u, a[7] = n) : n = a[7], n
                })(),
                D = m.image.title || "";
            return x[0] !== m.image.url || x[1] !== D ? (e = (0, t.jsx)("div", {
                className: "h-fit w-fit",
                children: (0, t.jsx)(v.default, {
                    src: m.image.url,
                    alt: D,
                    width: 198,
                    height: 262,
                    className: "block h-auto"
                })
            }), x[0] = m.image.url, x[1] = D, x[2] = e) : e = x[2], x[3] !== y ? (n = y("correctDeviceSelectedView.title"), x[3] = y, x[4] = n) : n = x[4], x[5] !== n ? (a = (0, t.jsx)("h3", {
                className: "text-center text-black heading-3-semi-bold",
                children: n
            }), x[5] = n, x[6] = a) : a = x[6], x[7] !== e || x[8] !== a ? (s = (0, t.jsxs)("div", {
                className: "flex flex-col items-center justify-center gap-8",
                children: [e, a]
            }), x[7] = e, x[8] = a, x[9] = s) : s = x[9], x[10] !== y ? (o = y("correctDeviceSelectedView.description"), x[10] = y, x[11] = o) : o = x[11], x[12] !== o ? (l = (0, t.jsx)("p", {
                className: "text-center text-neutral-600 body-1 font-normal",
                children: o
            }), x[12] = o, x[13] = l) : l = x[13], x[14] !== k ? (u = (0, t.jsx)(A, {
                sitekey: "6LenSPAqAAAAAMyzhRiDZODWC17BFE6v0nO1F9bl",
                onChange: e => k(e || "")
            }), x[14] = k, x[15] = u) : u = x[15], x[16] !== E ? (d = E && (0, t.jsx)(h.default, {
                message: E.message,
                variant: "error"
            }), x[16] = E, x[17] = d) : d = x[17], x[18] !== l || x[19] !== u || x[20] !== d ? (p = (0, t.jsxs)("div", {
                className: "flex flex-col items-center justify-center gap-16",
                children: [l, u, d]
            }), x[18] = l, x[19] = u, x[20] = d, x[21] = p) : p = x[21], x[22] !== s || x[23] !== p ? (f = (0, t.jsx)(g.default, {
                verticalSpacing: "x-small",
                "data-cs-override-id": "recaptcha-panel",
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col gap-32",
                    children: [s, p]
                })
            }), x[22] = s, x[23] = p, x[24] = f) : f = x[24], f
        };
    e.i(366539);
    var w = e.i(150077),
        T = e.i(217837),
        O = e.i(477180),
        B = e.i(191051);
    let R = e => {
        let n, s, o, c = (0, r.c)(11),
            {
                variantId: l,
                dataCsOverrideId: u,
                variantInStock: d,
                size: h
            } = e,
            p = void 0 === h ? "medium" : h,
            {
                t: f
            } = (0, i.useTranslation)("common");
        c[0] !== l ? (n = {
            variantId: l
        }, c[0] = l, c[1] = n) : n = c[1];
        let {
            upgradeProgramBuyItNow: x,
            isPending: m
        } = (e => {
            let t, i, n, a, s, o = (0, r.c)(16),
                {
                    variantId: c
                } = e,
                {
                    country: l,
                    language: u
                } = (0, O.default)(),
                d = (0, T.useRouter)();
            o[0] !== c ? (t = ["upgrade-program-upsell", c], o[0] = c, o[1] = t) : t = o[1], o[2] !== l || o[3] !== u || o[4] !== c ? (i = () => {
                var e;
                return e = {
                    variantId: c,
                    language: u,
                    country: l,
                    isLedgerLiveMobileApp: (0, B.isLedgerLiveMobileApp)()
                }, (0, E.jsonMutationFetch)("/api/upgrade-program/buy-it-now", "POST", e)
            }, o[2] = l, o[3] = u, o[4] = c, o[5] = i) : i = o[5], o[6] !== d ? (n = e => {
                d.push(e.checkoutUrl)
            }, o[6] = d, o[7] = n) : n = o[7], o[8] !== t || o[9] !== i || o[10] !== n ? (a = {
                mutationKey: t,
                mutationFn: i,
                onSuccess: n
            }, o[8] = t, o[9] = i, o[10] = n, o[11] = a) : a = o[11];
            let {
                mutate: h,
                isPending: p,
                error: f
            } = (0, b.useMutation)(a);
            return o[12] !== f || o[13] !== p || o[14] !== h ? (s = {
                upgradeProgramBuyItNow: h,
                isPending: p,
                error: f
            }, o[12] = f, o[13] = p, o[14] = h, o[15] = s) : s = o[15], s
        })(n);
        c[2] !== f || c[3] !== d ? (s = f(d ? "productCards.buyItNow" : "productCards.outOfStock"), c[2] = f, c[3] = d, c[4] = s) : s = c[4];
        let y = !d || m,
            k = `${void 0===u?"upgrade-program-buy-it-now":u}-buy-now`;
        return c[5] !== p || c[6] !== s || c[7] !== y || c[8] !== k || c[9] !== x ? (o = (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(a.default, {
                nowrap: !1,
                size: p,
                variant: "primary-orange",
                label: s,
                onClick: x,
                isDisabled: y,
                dataCsOverrideId: k
            })
        }), c[5] = p, c[6] = s, c[7] = y, c[8] = k, c[9] = x, c[10] = o) : o = c[10], o
    };
    var I = e.i(285824);
    e.i(47620);
    let C = (0, u.default)(() => e.A(854172), {
            loadableGenerated: {
                modules: [202295]
            },
            ssr: !1
        }),
        N = () => {
            let e, n, a, s, o, c, l, u, d, h = (0, r.c)(26),
                {
                    t: p
                } = (0, i.useTranslation)("productUpgrade"),
                {
                    priceConversion: f,
                    priceLabel: x,
                    currentVariant: m
                } = L(),
                {
                    image: y,
                    handle: k,
                    title: b,
                    id: E
                } = m;
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("div", {
                className: "absolute inset-0 -z-10 overflow-hidden",
                children: (0, t.jsx)(C, {
                    animationData: I.default,
                    loop: !1
                })
            }), h[0] = e) : e = h[0], h[1] !== p ? (n = p("unlockDealDescription"), h[1] = p, h[2] = n) : n = h[2], h[3] !== n ? (a = (0, t.jsx)("h3", {
                className: "heading-3-semi-bold text-center",
                children: n
            }), h[3] = n, h[4] = a) : a = h[4];
            let _ = y.title || b,
                S = `${k}-picture`;
            h[5] !== y.url || h[6] !== _ || h[7] !== S ? (s = (0, t.jsx)("div", {
                className: "relative h-256 w-256",
                children: (0, t.jsx)(v.default, {
                    src: y.url,
                    alt: _,
                    fill: !0,
                    priority: !0,
                    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
                    className: "object-contain",
                    "data-cs-override-id": S
                })
            }), h[5] = y.url, h[6] = _, h[7] = S, h[8] = s) : s = h[8], h[9] !== f ? (o = f && {
                manualDiscountConversion: f,
                showStrikedPrice: !0
            }, h[9] = f, h[10] = o) : o = h[10];
            let A = !!f;
            return h[11] !== m || h[12] !== x || h[13] !== o || h[14] !== A ? (c = (0, t.jsx)("div", {
                className: "flex",
                children: (0, t.jsx)(w.default, {
                    variant: m,
                    size: "large",
                    ...o,
                    showDiscount: A,
                    discountLabel: x
                })
            }), h[11] = m, h[12] = x, h[13] = o, h[14] = A, h[15] = c) : c = h[15], h[16] !== m.availableForSale || h[17] !== E ? (l = (0, t.jsx)("div", {
                className: "mt-16",
                children: (0, t.jsx)(R, {
                    variantId: E,
                    variantInStock: m.availableForSale,
                    dataCsOverrideId: "upgrade-program-buy-it-now"
                })
            }), h[16] = m.availableForSale, h[17] = E, h[18] = l) : l = h[18], h[19] !== s || h[20] !== c || h[21] !== l ? (u = (0, t.jsxs)("div", {
                className: "flex flex-col items-center justify-center",
                children: [s, c, l]
            }), h[19] = s, h[20] = c, h[21] = l, h[22] = u) : u = h[22], h[23] !== u || h[24] !== a ? (d = (0, t.jsxs)("div", {
                "data-cs-override-id": "unlock-deal-panel",
                children: [e, (0, t.jsxs)(g.default, {
                    verticalSpacing: "x-small",
                    children: [a, u]
                })]
            }), h[23] = u, h[24] = a, h[25] = d) : d = h[25], d
        },
        P = () => {
            let e = (0, r.c)(3);
            switch ((0, c.default)(j).state) {
                case "correct_device_selected":
                    {
                        let r;
                        return e[0] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)(D, {}), e[0] = r) : r = e[0],
                        r
                    }
                case "unlocked":
                    {
                        let r;
                        return e[1] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)(N, {}), e[1] = r) : r = e[1],
                        r
                    }
                default:
                    {
                        let r;
                        return e[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, t.jsx)(x, {}), e[2] = r) : r = e[2],
                        r
                    }
            }
        };

    function j(e) {
        return e.current
    }
    var F = e.i(382691);
    let V = e => {
            let n, a, s, c, l, u, d, h, p = (0, r.c)(17),
                {
                    closeDrawer: f
                } = e,
                {
                    t: x
                } = (0, i.useTranslation)("productUpgrade");
            return p[0] !== x ? (n = x("unlockDealTitle"), p[0] = x, p[1] = n) : n = p[1], p[2] !== n ? (a = (0, t.jsx)("h3", {
                className: "flex-1 heading-5-semi-bold",
                children: n
            }), p[2] = n, p[3] = a) : a = p[3], p[4] !== f ? (s = (0, t.jsx)(o.default, {
                onClick: f
            }), p[4] = f, p[5] = s) : s = p[5], p[6] !== a || p[7] !== s ? (c = (0, t.jsxs)(F.default, {
                children: [a, s]
            }), p[6] = a, p[7] = s, p[8] = c) : c = p[8], p[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, t.jsx)("div", {
                className: "flex flex-1 items-center justify-center",
                children: (0, t.jsx)(P, {})
            }), p[9] = l) : l = p[9], p[10] !== x ? (u = x("lockedView.disclaimer"), p[10] = x, p[11] = u) : u = p[11], p[12] !== u ? (d = (0, t.jsx)("div", {
                className: "px-32 py-16 text-center text-neutral-600 body-4",
                children: u
            }), p[12] = u, p[13] = d) : d = p[13], p[14] !== c || p[15] !== d ? (h = (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [c, l, d]
            }), p[14] = c, p[15] = d, p[16] = h) : h = p[16], h
        },
        G = n.default.createContext(null),
        L = () => {
            let e = n.default.useContext(G);
            if (!e) throw Error("useUnlockCurrentVariant must be used within a CurrentVariantContext.Provider");
            return e
        },
        M = e => {
            let o, l, u, d, h, p, f, x, m = (0, r.c)(22),
                {
                    productVariant: y,
                    priceConversion: k,
                    priceLabel: g,
                    theme: v,
                    buttonSize: b
                } = e,
                E = void 0 === b ? "medium" : b,
                {
                    t: _
                } = (0, i.useTranslation)("productUpgrade"),
                [S, A] = (0, n.useState)(!1);
            m[0] === Symbol.for("react.memo_cache_sentinel") ? (o = () => A(!0), m[0] = o) : o = m[0];
            let D = o;
            m[1] === Symbol.for("react.memo_cache_sentinel") ? (l = () => A(!1), m[1] = l) : l = m[1];
            let w = l,
                {
                    state: T
                } = (0, c.default)(U),
                O = y.availableForSale;
            return m[2] !== E || m[3] !== y.id || m[4] !== T || m[5] !== _ || m[6] !== v || m[7] !== O ? (u = "unlocked" === T ? (0, t.jsx)(R, {
                variantId: y.id,
                variantInStock: O,
                size: E
            }) : (0, t.jsx)(a.default, {
                label: _("unlockDeal"),
                variant: "dark" === v ? "primary-white" : "primary-black",
                isDisabled: !O,
                onClick: D,
                size: E
            }), m[2] = E, m[3] = y.id, m[4] = T, m[5] = _, m[6] = v, m[7] = O, m[8] = u) : u = m[8], m[9] !== k || m[10] !== g || m[11] !== y ? (d = {
                currentVariant: y,
                priceConversion: k,
                priceLabel: g
            }, m[9] = k, m[10] = g, m[11] = y, m[12] = d) : d = m[12], m[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, t.jsx)(V, {
                closeDrawer: w
            }), m[13] = h) : h = m[13], m[14] !== d ? (p = (0, t.jsx)(G.Provider, {
                value: d,
                children: h
            }), m[14] = d, m[15] = p) : p = m[15], m[16] !== S || m[17] !== p ? (f = (0, t.jsx)(s.default, {
                isOpen: S,
                closeModal: w,
                children: p
            }), m[16] = S, m[17] = p, m[18] = f) : f = m[18], m[19] !== u || m[20] !== f ? (x = (0, t.jsxs)(t.Fragment, {
                children: [u, f]
            }), m[19] = u, m[20] = f, m[21] = x) : x = m[21], x
        };

    function U(e) {
        return e.current
    }
}]);

//# sourceMappingURL=17eizzhza6y51.js.map