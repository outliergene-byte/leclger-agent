(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 945605, 234153, e => {
    "use strict";
    var t = e.i(391398),
        l = e.i(261576),
        a = e.i(126019),
        i = e.i(41158);
    e.i(108399);
    var s = e.i(860231);
    e.i(286941);
    var r = e.i(126762),
        n = e.i(191788),
        d = e.i(114168);
    let c = e => {
        let a, i, s, r, c, m = (0, l.c)(11),
            {
                children: h,
                theme: p
            } = e;
        m[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [...Array(21)].map(o), m[0] = a) : a = m[0];
        let u = a;
        m[1] === Symbol.for("react.memo_cache_sentinel") ? (i = {
            threshold: u,
            rootMargin: "-10%"
        }, m[1] = i) : i = m[1];
        let x = i,
            g = "dark" === p ? "text-white/(--calculatedVisibility)" : "text-black/(--calculatedVisibility)",
            {
                ref: f,
                entry: b
            } = (0, d.useInView)(x);
        return m[2] !== b ? (s = () => {
            if (!b) return;
            let e = b.target,
                {
                    intersectionRatio: t
                } = b;
            e.style.setProperty("--calculatedVisibility", (t + .3) / 1.3)
        }, m[2] = b, m[3] = s) : s = m[3], m[4] !== b || m[5] !== f ? (r = [b, f], m[4] = b, m[5] = f, m[6] = r) : r = m[6], (0, n.useEffect)(s, r), m[7] !== h || m[8] !== g || m[9] !== f ? (c = (0, t.jsx)("div", {
            ref: f,
            className: g,
            children: h
        }), m[7] = h, m[8] = g, m[9] = f, m[10] = c) : c = m[10], c
    };

    function o(e, t) {
        return t / 20
    }
    var m = e.i(455108),
        h = e.i(495854);
    e.s(["default", 0, e => {
        let n, d, o, p, u, x, g, f, b, v, j = (0, l.c)(29),
            {
                sectionInformation: w,
                theme: k,
                displayTitle: y,
                textBlockSize: N
            } = e,
            _ = void 0 === k ? "dark" : k,
            S = void 0 === y || y,
            T = void 0 === N ? "compact" : N,
            {
                contentBlocks: A,
                image: I,
                title: W
            } = w,
            B = "dark" === _ ? "bg-black text-white" : "bg-neutral-50 text-black";
        j[0] !== B ? (n = (0, h.default)("text-balance", B), j[0] = B, j[1] = n) : n = j[1], j[2] !== S || j[3] !== W ? (d = S && (0, t.jsx)("h2", {
            className: "responsive-display-4 mb-64",
            children: W
        }), j[2] = S, j[3] = W, j[4] = d) : d = j[4], j[5] !== I || j[6] !== T ? (o = I && (0, t.jsx)(a.default, {
            src: I.url,
            alt: "",
            width: "compact" === T ? 400 : 480,
            height: "compact" === T ? 500 : 480,
            className: "mx-auto mb-48 md:sticky md:top-[10%] md:mb-0"
        }), j[5] = I, j[6] = T, j[7] = o) : o = j[7], j[8] !== o ? (p = (0, t.jsx)("div", {
            className: "md:mb-64 md:max-w-[35%]",
            children: o
        }), j[8] = o, j[9] = p) : p = j[9];
        let C = "compact" === T ? "max-w-md" : "";
        if (j[10] !== C ? (u = (0, h.default)(C), j[10] = C, j[11] = u) : u = j[11], j[12] !== A || j[13] !== _) {
            let e;
            j[15] !== _ ? (e = e => (0, t.jsx)(c, {
                theme: _,
                children: (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("h3", {
                        className: "heading-3-semi-bold mb-24",
                        children: e.title
                    }), (0, t.jsxs)("div", {
                        className: "body-1 mb-64 font-normal",
                        children: [e.description && (0, t.jsx)(r.default, {
                            content: e.description,
                            className: "not-rich-text [&>h4]:heading-4-semi-bold [&>h4]:mt-24 [&>h4]:mb-0"
                        }), e.link ? .url && (0, t.jsxs)(i.default, {
                            href: e.link.url,
                            className: "body-3 mt-24 flex items-center",
                            children: [(0, t.jsx)("span", {
                                className: "me-12",
                                children: e.link.label
                            }), (0, t.jsx)(s.default, {
                                name: "arrowRight",
                                size: 18,
                                strokeWidth: 3.5,
                                color: "current"
                            })]
                        })]
                    })]
                })
            }, `introBlock${e.title}`), j[15] = _, j[16] = e) : e = j[16], x = A.map(e), j[12] = A, j[13] = _, j[14] = x
        } else x = j[14];
        return j[17] !== u || j[18] !== x ? (g = (0, t.jsx)("div", {
            className: u,
            children: x
        }), j[17] = u, j[18] = x, j[19] = g) : g = j[19], j[20] !== g || j[21] !== p ? (f = (0, t.jsxs)("div", {
            className: "md:flex md:flex-row-reverse md:justify-between md:gap-32",
            children: [p, g]
        }), j[20] = g, j[21] = p, j[22] = f) : f = j[22], j[23] !== f || j[24] !== d ? (b = (0, t.jsxs)(m.default.Section, {
            dataCsOverrideId: "section-introducing",
            children: [d, f]
        }), j[23] = f, j[24] = d, j[25] = b) : b = j[25], j[26] !== b || j[27] !== n ? (v = (0, t.jsx)("div", {
            className: n,
            children: b
        }), j[26] = b, j[27] = n, j[28] = v) : v = j[28], v
    }], 234153), e.s([], 945605)
}, 157540, 56786, e => {
    "use strict";
    var t = e.i(391398),
        l = e.i(261576),
        a = e.i(126019),
        i = e.i(840767),
        s = e.i(41158);
    e.i(664157);
    var r = e.i(271179);
    e.i(108399);
    var n = e.i(860231),
        d = e.i(495854);

    function c(e) {
        let {
            link: l,
            image: i
        } = e;
        return (0, t.jsx)(s.default, {
            href: l,
            target: "_blank",
            children: (0, t.jsx)(a.default, {
                src: `/images/${i}.png`,
                alt: "",
                width: 162,
                height: 64
            })
        }, i)
    }

    function o(e) {
        return (0, t.jsx)(i.MenuItem, {
            children: (0, t.jsxs)("a", {
                href: e.link,
                className: "flex w-full items-center gap-8 px-16 py-8 hover:bg-neutral-50",
                children: [(0, t.jsx)(n.default, {
                    isFilled: !0,
                    name: e.icon,
                    size: 20
                }), e.name]
            })
        }, e.link)
    }
    e.s(["default", 0, e => {
        let s, m, h, p, u, x, g, f, b, v, j, w, k, y, N, _, S, T, A, I, W, B, C, D, P, V = (0, l.c)(65),
            {
                title: z,
                description: L,
                downloadApps: O,
                downloadAppsInfo: E,
                theme: K
            } = e,
            q = void 0 === K ? "light" : K,
            {
                t: M
            } = (0, r.useTranslation)("common");
        if (!O || O.length < 2) return null;
        let R = O[0],
            U = O[1];
        V[0] !== M ? (s = M("windowsApp"), V[0] = M, V[1] = s) : s = V[1], V[2] !== s ? (m = {
            name: s,
            link: "https://download.live.ledger.com/latest/win",
            icon: "windows"
        }, V[2] = s, V[3] = m) : m = V[3], V[4] !== M ? (h = M("macApp"), V[4] = M, V[5] = h) : h = V[5], V[6] !== h ? (p = {
            name: h,
            link: "https://download.live.ledger.com/latest/mac",
            icon: "apple"
        }, V[6] = h, V[7] = p) : p = V[7], V[8] !== M ? (u = M("linuxApp"), V[8] = M, V[9] = u) : u = V[9], V[10] !== u ? (x = {
            name: u,
            link: "https://download.live.ledger.com/latest/linux",
            icon: "linux"
        }, V[10] = u, V[11] = x) : x = V[11], V[12] !== m || V[13] !== p || V[14] !== x ? (g = [m, p, x], V[12] = m, V[13] = p, V[14] = x, V[15] = g) : g = V[15];
        let F = g,
            X = "dark" === q,
            $ = X ? "app-store-download-light" : "app-store-download";
        V[16] !== $ ? (f = {
            image: $,
            link: "https://r354.adj.st/?adj_t=t2esmlk&adj_campaign=Ledger_Live"
        }, V[16] = $, V[17] = f) : f = V[17];
        let G = X ? "google-play-download-light" : "google-play-download";
        V[18] !== G ? (b = {
            image: G,
            link: "https://r354.adj.st/?adj_t=t2esmlk&adj_campaign=Ledger_Live"
        }, V[18] = G, V[19] = b) : b = V[19], V[20] !== f || V[21] !== b ? (v = [f, b], V[20] = f, V[21] = b, V[22] = v) : v = V[22];
        let H = v;
        return V[23] !== X ? (j = (0, d.default)("bg-white px-8 text-black", {
            "bg-black text-white": X
        }), V[23] = X, V[24] = j) : j = V[24], V[25] !== z ? (w = z && (0, t.jsx)("h3", {
            className: "responsive-display-4",
            children: z
        }), V[25] = z, V[26] = w) : w = V[26], V[27] !== L ? (k = L && (0, t.jsx)("p", {
            className: "heading-3-semi-bold font-normal",
            children: L
        }), V[27] = L, V[28] = k) : k = V[28], V[29] !== w || V[30] !== k ? (y = (0, t.jsxs)("div", {
            className: "mx-auto flex max-w-7xl flex-col items-center gap-12 text-center",
            children: [w, k]
        }), V[29] = w, V[30] = k, V[31] = y) : y = V[31], V[32] !== R.title ? (N = (0, t.jsx)("p", {
            className: "hidden body-3 lg:block",
            children: R.title
        }), V[32] = R.title, V[33] = N) : N = V[33], V[34] !== R.image ? (_ = R.image && (0, t.jsx)(a.default, {
            src: R.image.url,
            alt: R.image.title ? ? "",
            width: "280",
            height: "250",
            className: "hidden lg:block"
        }), V[34] = R.image, V[35] = _) : _ = V[35], V[36] !== H ? (S = (0, t.jsx)("div", {
            className: "flex flex-col gap-16 lg:flex-row",
            children: H.map(c)
        }), V[36] = H, V[37] = S) : S = V[37], V[38] !== N || V[39] !== _ || V[40] !== S ? (T = (0, t.jsxs)("div", {
            className: "flex flex-col items-center gap-24 border-neutral-300 lg:border-e lg:pe-16",
            children: [N, _, S]
        }), V[38] = N, V[39] = _, V[40] = S, V[41] = T) : T = V[41], V[42] !== U.title ? (A = (0, t.jsx)("p", {
            className: "text-center body-3",
            children: U.title
        }), V[42] = U.title, V[43] = A) : A = V[43], V[44] !== U.image ? (I = U.image && (0, t.jsx)(a.default, {
            src: U.image.url,
            alt: U.image.title ? ? "",
            width: "280",
            height: "250"
        }), V[44] = U.image, V[45] = I) : I = V[45], V[46] !== F || V[47] !== U.link || V[48] !== q ? (W = U.link && (0, t.jsx)(i.Menu, {
            children: (0, t.jsxs)("div", {
                className: "relative",
                children: [(0, t.jsxs)(i.MenuButton, {
                    className: (0, d.default)("flex w-fit items-center gap-4 rounded-full bg-black px-16 py-8 text-white", {
                        "bg-white text-black": "dark" === q
                    }),
                    children: [U.link.label, (0, t.jsx)(n.default, {
                        name: "chevronDown",
                        size: 25,
                        color: "dark" === q ? "black" : "white"
                    })]
                }), (0, t.jsx)(i.MenuItems, {
                    className: "absolute top-0 z-20 flex w-full flex-col divide-y divide-neutral-300 overflow-hidden rounded-xs border border-neutral-300 bg-white text-neutral-500",
                    children: F.map(o)
                })]
            })
        }), V[46] = F, V[47] = U.link, V[48] = q, V[49] = W) : W = V[49], V[50] !== A || V[51] !== I || V[52] !== W ? (B = (0, t.jsxs)("div", {
            className: "hidden flex-col items-center gap-24 lg:flex",
            children: [A, I, W]
        }), V[50] = A, V[51] = I, V[52] = W, V[53] = B) : B = V[53], V[54] !== T || V[55] !== B ? (C = (0, t.jsxs)("div", {
            className: "flex justify-center gap-64 py-32 lg:px-144 lg:py-64",
            children: [T, B]
        }), V[54] = T, V[55] = B, V[56] = C) : C = V[56], V[57] !== E || V[58] !== X ? (D = E && (0, t.jsx)("p", {
            className: (0, d.default)("text-center text-black body-3 md:hidden", {
                "text-white": X
            }),
            children: E
        }), V[57] = E, V[58] = X, V[59] = D) : D = V[59], V[60] !== j || V[61] !== y || V[62] !== C || V[63] !== D ? (P = (0, t.jsxs)("div", {
            className: j,
            children: [y, C, D]
        }), V[60] = j, V[61] = y, V[62] = C, V[63] = D, V[64] = P) : P = V[64], P
    }], 56786), e.s([], 157540)
}, 601584, e => {
    "use strict";
    var t = e.i(391398),
        l = e.i(261576),
        a = e.i(191788);
    e.i(663485);
    var i = e.i(98887);
    e.i(431877);
    var s = e.i(119978);
    e.i(828278);
    var r = e.i(739504);
    e.i(945605);
    var n = e.i(234153);
    e.i(883820);
    var d = e.i(748016),
        c = e.i(455108);
    let o = e => {
        let a, i, s, r = (0, l.c)(7),
            {
                title: n,
                subtitle: d
            } = e;
        return r[0] !== n ? (a = (0, t.jsx)("h2", {
            className: "responsive-display-4 mb-32 text-center",
            children: n
        }), r[0] = n, r[1] = a) : a = r[1], r[2] !== d ? (i = d && (0, t.jsx)("p", {
            className: "heading-4 mx-auto max-w-[90%] text-center text-neutral-800 sm:max-w-[60%]",
            children: d
        }), r[2] = d, r[3] = i) : i = r[3], r[4] !== a || r[5] !== i ? (s = (0, t.jsx)(c.default.Section, {
            children: (0, t.jsxs)("div", {
                className: "bg-metallic rounded-xs border border-neutral-300 py-56",
                children: [a, i]
            })
        }), r[4] = a, r[5] = i, r[6] = s) : s = r[6], s
    };
    e.i(277551);
    var m = e.i(544808);
    e.i(601917);
    var h = e.i(125125);
    e.i(506411);
    var p = e.i(237341);
    e.i(274250);
    var u = e.i(170255);
    e.i(157540);
    var x = e.i(56786),
        g = e.i(63535);
    e.i(664157);
    var f = e.i(271179),
        b = e.i(495854);
    let v = {
            hardwareWallets: {
                connectivity: "notConnected",
                privateKeyCustody: "nonCustodial",
                privateKeysStorage: "offline",
                accessibilityToBlockchains: "requiresHardwareWalletApp",
                security: "keysNeverLeaveDevice",
                dAppsAndWeb3Apps: "available",
                userInterface: "companionApp",
                idealUsage: "longTermStorage",
                price: "cost50To400",
                examples: "ledgerExamples"
            },
            softwareWallets: {
                connectivity: "connected",
                privateKeyCustody: "nonCustodial",
                privateKeysStorage: "online",
                accessibilityToBlockchains: "requiresSoftwareWalletInternet",
                security: "softwareWalletRisks",
                dAppsAndWeb3Apps: "available",
                userInterface: "mobileDesktopApps",
                idealUsage: "shortTermStorage",
                price: "free",
                examples: "softwareWalletExamples"
            },
            cryptoExchangeWallets: {
                connectivity: "connected",
                privateKeyCustody: "custodial",
                privateKeysStorage: "online",
                accessibilityToBlockchains: "requiresInternetConnection",
                security: "exchangeAccountRisks",
                dAppsAndWeb3Apps: "notAvailable",
                userInterface: "mobileDesktopApps",
                idealUsage: "tradingShortTerm",
                price: "free",
                examples: "exchangeExamples"
            }
        },
        j = Object.keys(v),
        w = Object.keys(v[j[0]]);
    e.i(286941);
    var k = e.i(126762);
    let y = e => {
        let a, i, s, r, n, d, o, m, h, p, u, x, g, y = (0, l.c)(36),
            {
                title: N,
                descriptionTop: _,
                descriptionBottom: S
            } = e,
            {
                t: T
            } = (0, f.useTranslation)("walletTypeComparison");
        if (y[0] !== _ || y[1] !== T || y[2] !== N) {
            let e, l, {
                headers: h,
                rows: p,
                data: u
            } = {
                headers: j,
                rows: w,
                data: v
            };
            a = c.default.Section, y[11] !== N ? (o = N && (0, t.jsx)("h3", {
                className: "responsive-display-4 text-left md:text-center",
                children: N
            }), y[11] = N, y[12] = o) : o = y[12], y[13] !== _ ? (m = _ && (0, t.jsx)("p", {
                className: "heading-4 mx-auto mt-16 mb-56 w-full text-left text-neutral-800 md:mb-80 md:w-3/5 md:text-center",
                children: _
            }), y[13] = _, y[14] = m) : m = y[14], d = "no-scrollbar overflow-x-auto", r = "mb-40 table-fixed max-md:w-[500px] max-md:min-w-full md:w-full", y[15] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, t.jsx)("th", {
                scope: "col",
                className: "sticky left-0 z-10 bg-neutral-50 md:relative"
            }), y[15] = e) : e = y[15], y[16] !== T ? (l = e => (0, t.jsx)("th", {
                scope: "col",
                className: "heading-4-semi-bold py-16 text-center",
                children: T(e)
            }, e), y[16] = T, y[17] = l) : l = y[17], n = (0, t.jsx)("thead", {
                children: (0, t.jsxs)("tr", {
                    children: [e, h.map(l)]
                })
            }), i = "border-y", s = p.map((e, l) => (0, t.jsxs)("tr", {
                className: "even:bg-neutral-50 [&>th]:odd:bg-white [&>th]:even:bg-neutral-50",
                children: [(0, t.jsx)("th", {
                    scope: "row",
                    className: "body-4 md:body-1-semi-bold sticky left-0 z-10 border-e px-8 wrap-break-word drop-shadow-md md:relative md:px-16 md:drop-shadow-none",
                    children: T(e)
                }), h.map((a, i) => (0, t.jsx)("td", {
                    className: (0, b.default)("body-4 md:body-1 table-cell border-e p-20 text-center wrap-break-word last:border-e-0 md:font-normal", 0 === i ? l % 2 == 0 ? "bg-purple-50" : "bg-purple-100" : l % 2 == 0 ? "bg-white" : "bg-neutral-50"),
                    children: T(u[a][e])
                }, i))]
            }, e)), y[0] = _, y[1] = T, y[2] = N, y[3] = a, y[4] = i, y[5] = s, y[6] = r, y[7] = n, y[8] = d, y[9] = o, y[10] = m
        } else a = y[3], i = y[4], s = y[5], r = y[6], n = y[7], d = y[8], o = y[9], m = y[10];
        return y[18] !== i || y[19] !== s ? (h = (0, t.jsx)("tbody", {
            className: i,
            children: s
        }), y[18] = i, y[19] = s, y[20] = h) : h = y[20], y[21] !== r || y[22] !== n || y[23] !== h ? (p = (0, t.jsxs)("table", {
            className: r,
            children: [n, h]
        }), y[21] = r, y[22] = n, y[23] = h, y[24] = p) : p = y[24], y[25] !== d || y[26] !== p ? (u = (0, t.jsx)("div", {
            className: d,
            children: p
        }), y[25] = d, y[26] = p, y[27] = u) : u = y[27], y[28] !== S ? (x = S && (0, t.jsx)(k.default, {
            className: "heading-4 mx-auto mt-32 w-full text-center text-neutral-800 md:max-w-5xl",
            content: S
        }), y[28] = S, y[29] = x) : x = y[29], y[30] !== a || y[31] !== u || y[32] !== x || y[33] !== o || y[34] !== m ? (g = (0, t.jsxs)(a, {
            children: [o, m, u, x]
        }), y[30] = a, y[31] = u, y[32] = x, y[33] = o, y[34] = m, y[35] = g) : g = y[35], g
    };
    var N = e.i(9446);
    e.i(917350);
    var _ = e.i(753221),
        S = e.i(462948),
        T = e.i(349057),
        A = e.i(229270);
    e.i(413202);
    var I = e.i(188532),
        W = e.i(780629);
    e.s(["__N_SSG", 0, !0, "default", 0, function(e) {
        let f, v, j, w, k, B, C, D, P, V, z, L, O, E, K, q, M = (0, l.c)(51),
            {
                settings: R,
                footer: U,
                navigationData: F,
                pageData: X
            } = e,
            {
                pageHeader: $,
                hardwareWallets: G,
                pageMeta: H,
                informationSection: J,
                hardwareWalletHighlighted: Q,
                comparison: Y,
                seedPhrase: Z,
                triSteps: ee,
                walletDifferences: et,
                hardwareWalletBenefits: el,
                bigSectionBlock: ea,
                supportedCryptoBlock: ei,
                downloadAppsTitle: es,
                downloadAppsDescription: er,
                downloadAppsInfo: en,
                downloadApps: ed,
                faqBlock: ec,
                ledgerWalletBlock: eo
            } = X,
            em = (0, a.useRef)(null),
            {
                enteredViaLedgerLive: eh
            } = (0, T.default)();
        M[0] === Symbol.for("react.memo_cache_sentinel") ? (f = {
            page_type: "seo_landing"
        }, M[0] = f) : f = M[0];
        let ep = !eh && "navigation-safe-space";
        M[1] !== ep ? (v = (0, b.default)("bg-black", ep), M[1] = ep, M[2] = v) : v = M[2], M[3] === Symbol.for("react.memo_cache_sentinel") ? (j = e => (0, N.scrollTo)(e, em), M[3] = j) : j = M[3], M[4] !== $.cta || M[5] !== $.headerDescription || M[6] !== $.miniTitle || M[7] !== $.smallVariantImage || M[8] !== $.title ? (w = (0, t.jsx)(s.default, {
            title: $.title,
            miniTitle: $.miniTitle,
            description: $.headerDescription,
            image: $.smallVariantImage,
            emphasisStyle: "purple",
            cta: $.cta,
            scrollToButton: j
        }, $.title), M[4] = $.cta, M[5] = $.headerDescription, M[6] = $.miniTitle, M[7] = $.smallVariantImage, M[8] = $.title, M[9] = w) : w = M[9], M[10] !== v || M[11] !== w ? (k = (0, t.jsx)("div", {
            className: v,
            children: w
        }), M[10] = v, M[11] = w, M[12] = k) : k = M[12], M[13] !== G || M[14] !== X.hardwareWalletsSubtitle || M[15] !== X.hardwareWalletsTitle ? (B = G && (0, t.jsx)(c.default.Section, {
            children: (0, t.jsx)(_.default, {
                id: "hardware-wallet-collection",
                ref: em,
                children: (0, t.jsx)(r.default, {
                    title: X.hardwareWalletsTitle,
                    subtitle: X.hardwareWalletsSubtitle,
                    products: G.products,
                    features: G.features
                })
            })
        }), M[13] = G, M[14] = X.hardwareWalletsSubtitle, M[15] = X.hardwareWalletsTitle, M[16] = B) : B = M[16], M[17] !== Y ? (C = Y && (0, t.jsx)(g.default, {
            dataCSOverrideId: "block-comparison",
            productsToCompareByDevice: Y.productsToCompareByDevice,
            subtitle: Y.subtitle,
            template: Y.template,
            theme: Y.theme,
            title: Y.title
        }), M[17] = Y, M[18] = C) : C = M[18], M[19] !== Q ? (D = Q && (0, t.jsx)(o, {
            title: Q.title,
            subtitle: Q.subtitle
        }), M[19] = Q, M[20] = D) : D = M[20], M[21] !== J ? (P = J && (0, t.jsx)(n.default, {
            theme: "light",
            displayTitle: !1,
            sectionInformation: J,
            textBlockSize: "large"
        }), M[21] = J, M[22] = P) : P = M[22], M[23] !== Z ? (V = Z && (0, t.jsx)("div", {
            className: "bg-metallic",
            children: (0, t.jsx)(m.default, {
                verticalSpacing: "medium",
                ...Z,
                theme: "light",
                dataCsOverrideId: "page-content-block"
            })
        }), M[23] = Z, M[24] = V) : V = M[24], M[25] !== ee ? (z = ee && (0, t.jsx)(S.default, { ...ee,
            hideBackground: !0
        }), M[25] = ee, M[26] = z) : z = M[26], M[27] !== et ? (L = (0, t.jsx)(y, { ...et
        }), M[27] = et, M[28] = L) : L = M[28], M[29] !== el ? (O = el && (0, t.jsx)(d.default, { ...el,
            sizeVariant: "default"
        }), M[29] = el, M[30] = O) : O = M[30], M[31] !== P || M[32] !== V || M[33] !== z || M[34] !== L || M[35] !== O || M[36] !== B || M[37] !== C || M[38] !== D ? (E = (0, t.jsxs)("div", {
            className: "bg-neutral-50",
            children: [B, C, D, P, V, z, L, O]
        }), M[31] = P, M[32] = V, M[33] = z, M[34] = L, M[35] = O, M[36] = B, M[37] = C, M[38] = D, M[39] = E) : E = M[39];
        let eu = !(0, A.default)() && (0, t.jsxs)(t.Fragment, {
            children: [ea && (0, t.jsx)(h.default, { ...ea
            }), eo && ("Ledger Wallet V4 Info" === eo.sectionInformationVariant ? (0, t.jsx)(W.LedgerWalletInfoNew, {
                contentBlocks: eo.contentBlocks,
                theme: "dark",
                dataCSOverrideId: "block-LedgerWalletInfo"
            }) : (0, t.jsx)(I.default, {
                title: eo.title,
                description: eo.subtitle,
                tag: eo.tag ? ? null,
                image: eo.image ? ? null,
                contentBlocks: eo.contentBlocks,
                disclaimer: eo.disclaimer,
                theme: "dark",
                dataCSOverrideId: "block-LedgerWalletInfo"
            })), ei && (0, t.jsx)(p.default, {
                contentBlock: ei
            }), (0, t.jsx)("div", {
                className: "bg-black pt-80",
                children: (0, t.jsx)(x.default, {
                    title: es,
                    description: er,
                    downloadAppsInfo: en,
                    downloadApps: ed,
                    theme: "dark"
                })
            })]
        });
        return M[40] !== ec ? (K = ec && (0, t.jsx)(u.default, {
            faq: ec
        }), M[40] = ec, M[41] = K) : K = M[41], M[42] !== U || M[43] !== F || M[44] !== H || M[45] !== R || M[46] !== E || M[47] !== eu || M[48] !== K || M[49] !== k ? (q = (0, t.jsxs)(i.default, {
            pageMeta: H,
            siteSettings: R,
            footer: U,
            navigationData: F,
            trackingData: f,
            theme: "dark",
            children: [k, E, eu, K]
        }), M[42] = U, M[43] = F, M[44] = H, M[45] = R, M[46] = E, M[47] = eu, M[48] = K, M[49] = k, M[50] = q) : q = M[50], q
    }], 601584)
}, 477110, (e, t, l) => {
    let a = "/pages/hardware-wallet";
    (window.__NEXT_P = window.__NEXT_P || []).push([a, () => e.r(601584)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push([a])
    })
}, 648761, e => {
    e.v(t => Promise.all(["static/chunks/0~1y3rya3twqr.js"].map(t => e.l(t))).then(() => t(493594)))
}, 828805, e => {
    e.v(t => Promise.all(["static/chunks/17m4lcp7g44-4.js"].map(t => e.l(t))).then(() => t(879466)))
}, 854172, e => {
    e.v(t => Promise.all(["static/chunks/0t50en83hc_a7.js"].map(t => e.l(t))).then(() => t(202295)))
}, 153459, e => {
    e.v(t => Promise.all(["static/chunks/0oryq34t1edi..js"].map(t => e.l(t))).then(() => t(531976)))
}]);

//# sourceMappingURL=00~neku.k5p4v.js.map