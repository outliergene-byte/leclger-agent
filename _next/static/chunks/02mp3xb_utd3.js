(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 1523, e => {
    "use strict";
    var t = e.i(221168),
        s = e.i(972276);
    let o = (0, s.proxy)({
            history: ["ConnectWallet"],
            view: "ConnectWallet",
            data: void 0
        }),
        i = {
            state: o,
            subscribe: e => (0, s.subscribe)(o, () => e(o)),
            push(e, t) {
                e !== o.view && (o.view = e, t && (o.data = t), o.history.push(e))
            },
            reset(e) {
                o.view = e, o.history = [e]
            },
            replace(e) {
                o.history.length > 1 && (o.history[o.history.length - 1] = e, o.view = e)
            },
            goBack() {
                if (o.history.length > 1) {
                    o.history.pop();
                    let [e] = o.history.slice(-1);
                    o.view = e
                }
            },
            setData(e) {
                o.data = e
            }
        },
        a = {
            WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
            WCM_VERSION: "WCM_VERSION",
            RECOMMENDED_WALLET_AMOUNT: 9,
            isMobile: () => "u" > typeof window && !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
            isAndroid: () => a.isMobile() && navigator.userAgent.toLowerCase().includes("android"),
            isIos() {
                let e = navigator.userAgent.toLowerCase();
                return a.isMobile() && (e.includes("iphone") || e.includes("ipad"))
            },
            isHttpUrl: e => e.startsWith("http://") || e.startsWith("https://"),
            isArray: e => Array.isArray(e) && e.length > 0,
            isTelegram: () => "u" > typeof window && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto),
            formatNativeUrl(e, t, s) {
                if (a.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
                let o = e;
                o.includes("://") || (o = e.replaceAll("/", "").replaceAll(":", ""), o = `${o}://`), o.endsWith("/") || (o = `${o}/`), this.setWalletConnectDeepLink(o, s);
                let i = encodeURIComponent(t);
                return `${o}wc?uri=${i}`
            },
            formatUniversalUrl(e, s, o) {
                if (!a.isHttpUrl(e)) return this.formatNativeUrl(e, s, o);
                let i = e;
                if (i.startsWith("https://t.me")) {
                    let e = t.Buffer.from(s).toString("base64").replace(/[=]/g, "");
                    i.endsWith("/") && (i = i.slice(0, -1)), this.setWalletConnectDeepLink(i, o);
                    let a = new URL(i);
                    return a.searchParams.set("startapp", e), a.toString()
                }
                i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, o);
                let r = encodeURIComponent(s);
                return `${i}wc?uri=${r}`
            },
            wait: async e => new Promise(t => {
                setTimeout(t, e)
            }),
            openHref(e, t) {
                let s = this.isTelegram() ? "_blank" : t;
                window.open(e, s, "noreferrer noopener")
            },
            setWalletConnectDeepLink(e, t) {
                try {
                    localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                        href: e,
                        name: t
                    }))
                } catch (e) {
                    console.info("Unable to set WalletConnect deep link")
                }
            },
            setWalletConnectAndroidDeepLink(e) {
                try {
                    let [t] = e.split("?");
                    localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                        href: t,
                        name: "Android"
                    }))
                } catch (e) {
                    console.info("Unable to set WalletConnect android deep link")
                }
            },
            removeWalletConnectDeepLink() {
                try {
                    localStorage.removeItem(a.WALLETCONNECT_DEEPLINK_CHOICE)
                } catch (e) {
                    console.info("Unable to remove WalletConnect deep link")
                }
            },
            setModalVersionInStorage() {
                try {
                    "u" > typeof localStorage && localStorage.setItem(a.WCM_VERSION, "2.7.0")
                } catch (e) {
                    console.info("Unable to set Web3Modal version in storage")
                }
            },
            getWalletRouterData() {
                var e;
                let t = null == (e = i.state.data) ? void 0 : e.Wallet;
                if (!t) throw Error('Missing "Wallet" view data');
                return t
            }
        },
        r = "u" > typeof location && (location.hostname.includes("localhost") || location.protocol.includes("https")),
        l = (0, s.proxy)({
            enabled: r,
            userSessionId: "",
            events: [],
            connectedWalletId: void 0
        }),
        n = {
            state: l,
            subscribe: e => (0, s.subscribe)(l.events, () => e((0, s.snapshot)(l.events[l.events.length - 1]))),
            initialize() {
                l.enabled && void 0 !== (null == crypto ? void 0 : crypto.randomUUID) && (l.userSessionId = crypto.randomUUID())
            },
            setConnectedWalletId(e) {
                l.connectedWalletId = e
            },
            click(e) {
                if (l.enabled) {
                    let t = {
                        type: "CLICK",
                        name: e.name,
                        userSessionId: l.userSessionId,
                        timestamp: Date.now(),
                        data: e
                    };
                    l.events.push(t)
                }
            },
            track(e) {
                if (l.enabled) {
                    let t = {
                        type: "TRACK",
                        name: e.name,
                        userSessionId: l.userSessionId,
                        timestamp: Date.now(),
                        data: e
                    };
                    l.events.push(t)
                }
            },
            view(e) {
                if (l.enabled) {
                    let t = {
                        type: "VIEW",
                        name: e.name,
                        userSessionId: l.userSessionId,
                        timestamp: Date.now(),
                        data: e
                    };
                    l.events.push(t)
                }
            }
        },
        c = (0, s.proxy)({
            chains: void 0,
            walletConnectUri: void 0,
            isAuth: !1,
            isCustomDesktop: !1,
            isCustomMobile: !1,
            isDataLoaded: !1,
            isUiLoaded: !1
        }),
        d = {
            state: c,
            subscribe: e => (0, s.subscribe)(c, () => e(c)),
            setChains(e) {
                c.chains = e
            },
            setWalletConnectUri(e) {
                c.walletConnectUri = e
            },
            setIsCustomDesktop(e) {
                c.isCustomDesktop = e
            },
            setIsCustomMobile(e) {
                c.isCustomMobile = e
            },
            setIsDataLoaded(e) {
                c.isDataLoaded = e
            },
            setIsUiLoaded(e) {
                c.isUiLoaded = e
            },
            setIsAuth(e) {
                c.isAuth = e
            }
        },
        p = (0, s.proxy)({
            projectId: "",
            mobileWallets: void 0,
            desktopWallets: void 0,
            walletImages: void 0,
            chains: void 0,
            enableAuthMode: !1,
            enableExplorer: !0,
            explorerExcludedWalletIds: void 0,
            explorerRecommendedWalletIds: void 0,
            termsOfServiceUrl: void 0,
            privacyPolicyUrl: void 0
        }),
        u = {
            state: p,
            subscribe: e => (0, s.subscribe)(p, () => e(p)),
            setConfig(e) {
                var t, s;
                n.initialize(), d.setChains(e.chains), d.setIsAuth(!!e.enableAuthMode), d.setIsCustomMobile(!!(null == (t = e.mobileWallets) ? void 0 : t.length)), d.setIsCustomDesktop(!!(null == (s = e.desktopWallets) ? void 0 : s.length)), a.setModalVersionInStorage(), Object.assign(p, e)
            }
        };
    var m = Object.defineProperty,
        h = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        C = Object.prototype.propertyIsEnumerable,
        v = (e, t, s) => t in e ? m(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
    let g = "https://explorer-api.walletconnect.com",
        y = "js-2.7.0";
    async function w(e, t) {
        let s = ((e, t) => {
                for (var s in t || (t = {})) b.call(t, s) && v(e, s, t[s]);
                if (h)
                    for (var s of h(t)) C.call(t, s) && v(e, s, t[s]);
                return e
            })({
                sdkType: "wcm",
                sdkVersion: y
            }, t),
            o = new URL(e, g);
        return o.searchParams.append("projectId", u.state.projectId), Object.entries(s).forEach(([e, t]) => {
            t && o.searchParams.append(e, String(t))
        }), (await fetch(o)).json()
    }
    let I = async e => w("/w3m/v1/getDesktopListings", e),
        f = async e => w("/w3m/v1/getMobileListings", e),
        W = async e => w("/w3m/v1/getAllListings", e);
    var O = Object.defineProperty,
        E = Object.getOwnPropertySymbols,
        L = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable,
        U = (e, t, s) => t in e ? O(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
    let M = a.isMobile(),
        T = (0, s.proxy)({
            wallets: {
                listings: [],
                total: 0,
                page: 1
            },
            search: {
                listings: [],
                total: 0,
                page: 1
            },
            recomendedWallets: []
        }),
        j = (0, s.proxy)({
            open: !1
        });
    var k = Object.defineProperty,
        D = Object.getOwnPropertySymbols,
        S = Object.prototype.hasOwnProperty,
        P = Object.prototype.propertyIsEnumerable,
        N = (e, t, s) => t in e ? k(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
    let x = (0, s.proxy)({
            themeMode: "u" > typeof matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        }),
        _ = (0, s.proxy)({
            open: !1,
            message: "",
            variant: "success"
        });
    e.s(["ConfigCtrl", 0, u, "CoreUtil", 0, a, "EventsCtrl", 0, n, "ExplorerCtrl", 0, {
        state: T,
        async getRecomendedWallets() {
            let {
                explorerRecommendedWalletIds: e,
                explorerExcludedWalletIds: t
            } = u.state;
            if ("NONE" === e || "ALL" === t && !e) return T.recomendedWallets;
            if (a.isArray(e)) {
                let t = e.join(","),
                    {
                        listings: s
                    } = await W({
                        recommendedIds: t
                    }),
                    o = Object.values(s);
                o.sort((t, s) => e.indexOf(t.id) - e.indexOf(s.id)), T.recomendedWallets = o
            } else {
                let {
                    chains: e,
                    isAuth: s
                } = d.state, o = null == e ? void 0 : e.join(","), i = a.isArray(t), r = {
                    page: 1,
                    sdks: s ? "auth_v1" : void 0,
                    entries: a.RECOMMENDED_WALLET_AMOUNT,
                    chains: o,
                    version: 2,
                    excludedIds: i ? t.join(",") : void 0
                }, {
                    listings: l
                } = M ? await f(r) : await I(r);
                T.recomendedWallets = Object.values(l)
            }
            return T.recomendedWallets
        },
        async getWallets(e) {
            let t = ((e, t) => {
                    for (var s in t || (t = {})) L.call(t, s) && U(e, s, t[s]);
                    if (E)
                        for (var s of E(t)) A.call(t, s) && U(e, s, t[s]);
                    return e
                })({}, e),
                {
                    explorerRecommendedWalletIds: s,
                    explorerExcludedWalletIds: o
                } = u.state,
                {
                    recomendedWallets: i
                } = T;
            if ("ALL" === o) return T.wallets;
            i.length ? t.excludedIds = i.map(e => e.id).join(",") : a.isArray(s) && (t.excludedIds = s.join(",")), a.isArray(o) && (t.excludedIds = [t.excludedIds, o].filter(Boolean).join(",")), d.state.isAuth && (t.sdks = "auth_v1");
            let {
                page: r,
                search: l
            } = e, {
                listings: n,
                total: c
            } = M ? await f(t) : await I(t), p = Object.values(n), m = l ? "search" : "wallets";
            return T[m] = {
                listings: [...T[m].listings, ...p],
                total: c,
                page: null != r ? r : 1
            }, {
                listings: p,
                total: c
            }
        },
        getWalletImageUrl: e => {
            let t;
            return t = e, `${g}/w3m/v1/getWalletImage/${t}?projectId=${u.state.projectId}&sdkType=wcm&sdkVersion=${y}`
        },
        getAssetImageUrl: e => {
            let t;
            return t = e, `${g}/w3m/v1/getAssetImage/${t}?projectId=${u.state.projectId}&sdkType=wcm&sdkVersion=${y}`
        },
        resetSearch() {
            T.search = {
                listings: [],
                total: 0,
                page: 1
            }
        }
    }, "ModalCtrl", 0, {
        state: j,
        subscribe: e => (0, s.subscribe)(j, () => e(j)),
        open: async e => new Promise(t => {
            let {
                isUiLoaded: s,
                isDataLoaded: o
            } = d.state;
            if (a.removeWalletConnectDeepLink(), d.setWalletConnectUri(null == e ? void 0 : e.uri), d.setChains(null == e ? void 0 : e.chains), i.reset("ConnectWallet"), s && o) j.open = !0, t();
            else {
                let e = setInterval(() => {
                    let s = d.state;
                    s.isUiLoaded && s.isDataLoaded && (clearInterval(e), j.open = !0, t())
                }, 200)
            }
        }),
        close() {
            j.open = !1
        }
    }, "OptionsCtrl", 0, d, "RouterCtrl", 0, i, "ThemeCtrl", 0, {
        state: x,
        subscribe: e => (0, s.subscribe)(x, () => e(x)),
        setThemeConfig(e) {
            let {
                themeMode: t,
                themeVariables: s
            } = e;
            t && (x.themeMode = t), s && (x.themeVariables = ((e, t) => {
                for (var s in t || (t = {})) S.call(t, s) && N(e, s, t[s]);
                if (D)
                    for (var s of D(t)) P.call(t, s) && N(e, s, t[s]);
                return e
            })({}, s))
        }
    }, "ToastCtrl", 0, {
        state: _,
        subscribe: e => (0, s.subscribe)(_, () => e(_)),
        openToast(e, t) {
            _.open = !0, _.message = e, _.variant = t
        },
        closeToast() {
            _.open = !1
        }
    }])
}, 106202, e => {
    "use strict";
    var t = e.i(1523);
    e.s(["WalletConnectModal", 0, class {
        constructor(e) {
            this.openModal = t.ModalCtrl.open, this.closeModal = t.ModalCtrl.close, this.subscribeModal = t.ModalCtrl.subscribe, this.setTheme = t.ThemeCtrl.setThemeConfig, t.ThemeCtrl.setThemeConfig(e), t.ConfigCtrl.setConfig(e), this.initUi()
        }
        async initUi() {
            if ("u" > typeof window) {
                await e.A(225334);
                let s = document.createElement("wcm-modal");
                document.body.insertAdjacentElement("beforeend", s), t.OptionsCtrl.setIsUiLoaded(!0)
            }
        }
    }])
}, 225334, e => {
    e.v(t => Promise.all(["static/chunks/0-0ox_ii0~a2n.js", "static/chunks/0k1e~m5se-385.js"].map(t => e.l(t))).then(() => t(172212)))
}]);

//# sourceMappingURL=0mhnfgn.eqeoz.js.map