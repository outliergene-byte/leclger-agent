(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 937761, e => {
    e.v({
        className: "inter_81b5ab15-module__IiJYPG__className"
    })
}, 194182, (e, t, i) => {
    t.exports = e.r(161457)
}, 696350, e => {
    "use strict";
    (async function() {
        let {
            worker: t
        } = await e.A(875075);
        t.start()
    })(), e.s([])
}, 811625, e => {
    "use strict";
    let t, i, r, n, o, a, s, l, u;
    var c, d, p, h, f, g, v, m, _, E, y, b, I, O, R, S, T, w, N, A, C, D, x, k, P = e.i(350461),
        U = e.i(391398),
        L = e.i(261576),
        M = e.i(191788),
        F = e.i(203828),
        V = e.i(486533),
        z = e.i(456298),
        B = e.i(84813),
        G = e.i(465235),
        q = e.i(895564),
        j = class extends q.Subscribable {
            constructor(e = {}) {
                super(), this.config = e, this.#e = new Map
            }#
            e;
            build(e, t, i) {
                let r = t.queryKey,
                    n = t.queryHash ? ? (0, z.hashQueryKeyByOptions)(r, t),
                    o = this.get(n);
                return o || (o = new B.Query({
                    client: e,
                    queryKey: r,
                    queryHash: n,
                    options: e.defaultQueryOptions(t),
                    state: i,
                    defaultOptions: e.getQueryDefaults(r)
                }), this.add(o)), o
            }
            add(e) {
                this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                    type: "added",
                    query: e
                }))
            }
            remove(e) {
                let t = this.#e.get(e.queryHash);
                t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
                    type: "removed",
                    query: e
                }))
            }
            clear() {
                G.notifyManager.batch(() => {
                    this.getAll().forEach(e => {
                        this.remove(e)
                    })
                })
            }
            get(e) {
                return this.#e.get(e)
            }
            getAll() {
                return [...this.#e.values()]
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e => (0, z.matchQuery)(t, e))
            }
            findAll(e = {}) {
                let t = this.getAll();
                return Object.keys(e).length > 0 ? t.filter(t => (0, z.matchQuery)(e, t)) : t
            }
            notify(e) {
                G.notifyManager.batch(() => {
                    this.listeners.forEach(t => {
                        t(e)
                    })
                })
            }
            onFocus() {
                G.notifyManager.batch(() => {
                    this.getAll().forEach(e => {
                        e.onFocus()
                    })
                })
            }
            onOnline() {
                G.notifyManager.batch(() => {
                    this.getAll().forEach(e => {
                        e.onOnline()
                    })
                })
            }
        },
        K = e.i(948123),
        H = q,
        W = class extends H.Subscribable {
            constructor(e = {}) {
                super(), this.config = e, this.#t = new Set, this.#i = new Map, this.#r = 0
            }#
            t;#
            i;#
            r;
            build(e, t, i) {
                let r = new K.Mutation({
                    mutationCache: this,
                    mutationId: ++this.#r,
                    options: e.defaultMutationOptions(t),
                    state: i
                });
                return this.add(r), r
            }
            add(e) {
                this.#t.add(e);
                let t = Y(e);
                if ("string" == typeof t) {
                    let i = this.#i.get(t);
                    i ? i.push(e) : this.#i.set(t, [e])
                }
                this.notify({
                    type: "added",
                    mutation: e
                })
            }
            remove(e) {
                if (this.#t.delete(e)) {
                    let t = Y(e);
                    if ("string" == typeof t) {
                        let i = this.#i.get(t);
                        if (i)
                            if (i.length > 1) {
                                let t = i.indexOf(e); - 1 !== t && i.splice(t, 1)
                            } else i[0] === e && this.#i.delete(t)
                    }
                }
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            canRun(e) {
                let t = Y(e);
                if ("string" != typeof t) return !0; {
                    let i = this.#i.get(t),
                        r = i ? .find(e => "pending" === e.state.status);
                    return !r || r === e
                }
            }
            runNext(e) {
                let t = Y(e);
                if ("string" != typeof t) return Promise.resolve(); {
                    let i = this.#i.get(t) ? .find(t => t !== e && t.state.isPaused);
                    return i ? .continue() ? ? Promise.resolve()
                }
            }
            clear() {
                G.notifyManager.batch(() => {
                    this.#t.forEach(e => {
                        this.notify({
                            type: "removed",
                            mutation: e
                        })
                    }), this.#t.clear(), this.#i.clear()
                })
            }
            getAll() {
                return Array.from(this.#t)
            }
            find(e) {
                let t = {
                    exact: !0,
                    ...e
                };
                return this.getAll().find(e => (0, z.matchMutation)(t, e))
            }
            findAll(e = {}) {
                return this.getAll().filter(t => (0, z.matchMutation)(e, t))
            }
            notify(e) {
                G.notifyManager.batch(() => {
                    this.listeners.forEach(t => {
                        t(e)
                    })
                })
            }
            resumePausedMutations() {
                let e = this.getAll().filter(e => e.state.isPaused);
                return G.notifyManager.batch(() => Promise.all(e.map(e => e.continue().catch(z.noop))))
            }
        };

    function Y(e) {
        return e.options.scope ? .id
    }
    var X = e.i(879971),
        Q = e.i(490140),
        J = e.i(351773),
        $ = class {#
            n;#
            o;#
            a;#
            s;#
            l;#
            u;#
            c;#
            d;
            constructor(e = {}) {
                this.#n = e.queryCache || new j, this.#o = e.mutationCache || new W, this.#a = e.defaultOptions || {}, this.#s = new Map, this.#l = new Map, this.#u = 0
            }
            mount() {
                this.#u++, 1 === this.#u && (this.#c = X.focusManager.subscribe(async e => {
                    e && (await this.resumePausedMutations(), this.#n.onFocus())
                }), this.#d = Q.onlineManager.subscribe(async e => {
                    e && (await this.resumePausedMutations(), this.#n.onOnline())
                }))
            }
            unmount() {
                this.#u--, 0 === this.#u && (this.#c ? .(), this.#c = void 0, this.#d ? .(), this.#d = void 0)
            }
            isFetching(e) {
                return this.#n.findAll({ ...e,
                    fetchStatus: "fetching"
                }).length
            }
            isMutating(e) {
                return this.#o.findAll({ ...e,
                    status: "pending"
                }).length
            }
            getQueryData(e) {
                let t = this.defaultQueryOptions({
                    queryKey: e
                });
                return this.#n.get(t.queryHash) ? .state.data
            }
            ensureQueryData(e) {
                let t = this.defaultQueryOptions(e),
                    i = this.#n.build(this, t),
                    r = i.state.data;
                return void 0 === r ? this.fetchQuery(e) : (e.revalidateIfStale && i.isStaleByTime((0, z.resolveStaleTime)(t.staleTime, i)) && this.prefetchQuery(t), Promise.resolve(r))
            }
            getQueriesData(e) {
                return this.#n.findAll(e).map(({
                    queryKey: e,
                    state: t
                }) => [e, t.data])
            }
            setQueryData(e, t, i) {
                let r = this.defaultQueryOptions({
                        queryKey: e
                    }),
                    n = this.#n.get(r.queryHash),
                    o = n ? .state.data,
                    a = (0, z.functionalUpdate)(t, o);
                if (void 0 !== a) return this.#n.build(this, r).setData(a, { ...i,
                    manual: !0
                })
            }
            setQueriesData(e, t, i) {
                return G.notifyManager.batch(() => this.#n.findAll(e).map(({
                    queryKey: e
                }) => [e, this.setQueryData(e, t, i)]))
            }
            getQueryState(e) {
                let t = this.defaultQueryOptions({
                    queryKey: e
                });
                return this.#n.get(t.queryHash) ? .state
            }
            removeQueries(e) {
                let t = this.#n;
                G.notifyManager.batch(() => {
                    t.findAll(e).forEach(e => {
                        t.remove(e)
                    })
                })
            }
            resetQueries(e, t) {
                let i = this.#n,
                    r = {
                        type: "active",
                        ...e
                    };
                return G.notifyManager.batch(() => (i.findAll(e).forEach(e => {
                    e.reset()
                }), this.refetchQueries(r, t)))
            }
            cancelQueries(e, t = {}) {
                let i = {
                    revert: !0,
                    ...t
                };
                return Promise.all(G.notifyManager.batch(() => this.#n.findAll(e).map(e => e.cancel(i)))).then(z.noop).catch(z.noop)
            }
            invalidateQueries(e, t = {}) {
                return G.notifyManager.batch(() => {
                    if (this.#n.findAll(e).forEach(e => {
                            e.invalidate()
                        }), e ? .refetchType === "none") return Promise.resolve();
                    let i = { ...e,
                        type: e ? .refetchType ? ? e ? .type ? ? "active"
                    };
                    return this.refetchQueries(i, t)
                })
            }
            refetchQueries(e, t = {}) {
                let i = { ...t,
                    cancelRefetch: t.cancelRefetch ? ? !0
                };
                return Promise.all(G.notifyManager.batch(() => this.#n.findAll(e).filter(e => !e.isDisabled()).map(e => {
                    let t = e.fetch(void 0, i);
                    return i.throwOnError || (t = t.catch(z.noop)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                }))).then(z.noop)
            }
            fetchQuery(e) {
                let t = this.defaultQueryOptions(e);
                void 0 === t.retry && (t.retry = !1);
                let i = this.#n.build(this, t);
                return i.isStaleByTime((0, z.resolveStaleTime)(t.staleTime, i)) ? i.fetch(t) : Promise.resolve(i.state.data)
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(z.noop).catch(z.noop)
            }
            fetchInfiniteQuery(e) {
                return e.behavior = (0, J.infiniteQueryBehavior)(e.pages), this.fetchQuery(e)
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(z.noop).catch(z.noop)
            }
            ensureInfiniteQueryData(e) {
                return e.behavior = (0, J.infiniteQueryBehavior)(e.pages), this.ensureQueryData(e)
            }
            resumePausedMutations() {
                return Q.onlineManager.isOnline() ? this.#o.resumePausedMutations() : Promise.resolve()
            }
            getQueryCache() {
                return this.#n
            }
            getMutationCache() {
                return this.#o
            }
            getDefaultOptions() {
                return this.#a
            }
            setDefaultOptions(e) {
                this.#a = e
            }
            setQueryDefaults(e, t) {
                this.#s.set((0, z.hashKey)(e), {
                    queryKey: e,
                    defaultOptions: t
                })
            }
            getQueryDefaults(e) {
                let t = [...this.#s.values()],
                    i = {};
                return t.forEach(t => {
                    (0, z.partialMatchKey)(e, t.queryKey) && Object.assign(i, t.defaultOptions)
                }), i
            }
            setMutationDefaults(e, t) {
                this.#l.set((0, z.hashKey)(e), {
                    mutationKey: e,
                    defaultOptions: t
                })
            }
            getMutationDefaults(e) {
                let t = [...this.#l.values()],
                    i = {};
                return t.forEach(t => {
                    (0, z.partialMatchKey)(e, t.mutationKey) && (i = { ...i,
                        ...t.defaultOptions
                    })
                }), i
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                let t = { ...this.#a.queries,
                    ...this.getQueryDefaults(e.queryKey),
                    ...e,
                    _defaulted: !0
                };
                return t.queryHash || (t.queryHash = (0, z.hashQueryKeyByOptions)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === z.skipToken && (t.enabled = !1), t
            }
            defaultMutationOptions(e) {
                return e ? ._defaulted ? e : { ...this.#a.mutations,
                    ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                    ...e,
                    _defaulted : !0
                }
            }
            clear() {
                this.#n.clear(), this.#o.clear()
            }
        },
        Z = e.i(285700);

    function ee(e) {
        return e
    }

    function et(e, t, i) {
        if ("object" != typeof t || null === t) return;
        let r = e.getMutationCache(),
            n = e.getQueryCache(),
            o = i ? .defaultOptions ? .deserializeData ? ? e.getDefaultOptions().hydrate ? .deserializeData ? ? ee,
            a = t.mutations || [],
            s = t.queries || [];
        a.forEach(({
            state: t,
            ...n
        }) => {
            r.build(e, { ...e.getDefaultOptions().hydrate ? .mutations,
                ...i ? .defaultOptions ? .mutations,
                ...n
            }, t)
        }), s.forEach(({
            queryKey: t,
            state: r,
            queryHash: a,
            meta: s,
            promise: l
        }) => {
            let u = n.get(a),
                c = void 0 === r.data ? r.data : o(r.data);
            if (u) {
                if (u.state.dataUpdatedAt < r.dataUpdatedAt) {
                    let {
                        fetchStatus: e,
                        ...t
                    } = r;
                    u.setState({ ...t,
                        data: c
                    })
                }
            } else u = n.build(e, { ...e.getDefaultOptions().hydrate ? .queries,
                ...i ? .defaultOptions ? .queries,
                queryKey : t,
                queryHash : a,
                meta : s
            }, { ...r,
                data: c,
                fetchStatus: "idle"
            });
            if (l) {
                let e = Promise.resolve(l).then(o);
                u.fetch(void 0, {
                    initialPromise: e
                })
            }
        })
    }
    var ei = ({
        children: e,
        options: t = {},
        state: i,
        queryClient: r
    }) => {
        let n = (0, Z.useQueryClient)(r),
            [o, a] = M.useState(),
            s = M.useRef(t);
        return s.current = t, M.useMemo(() => {
            if (i) {
                if ("object" != typeof i) return;
                let e = n.getQueryCache(),
                    t = i.queries || [],
                    r = [],
                    l = [];
                for (let i of t) {
                    let t = e.get(i.queryHash);
                    if (t) {
                        let e = i.state.dataUpdatedAt > t.state.dataUpdatedAt,
                            r = o ? .find(e => e.queryHash === i.queryHash);
                        e && (!r || i.state.dataUpdatedAt > r.state.dataUpdatedAt) && l.push(i)
                    } else r.push(i)
                }
                r.length > 0 && et(n, {
                    queries: r
                }, s.current), l.length > 0 && a(e => e ? [...e, ...l] : l)
            }
        }, [n, o, i]), M.useEffect(() => {
            o && (et(n, {
                queries: o
            }, s.current), a(void 0))
        }, [n, o]), e
    };
    e.i(664157);
    var er = e.i(91214),
        en = e.i(937761);
    let eo = {
        className: en.default.className,
        style: {
            fontFamily: "'Inter', 'Inter Fallback'",
            fontStyle: "normal"
        }
    };
    null != en.default.variable && (eo.variable = en.default.variable);
    var ea = e.i(251462),
        es = e.i(644594),
        el = e.i(999750),
        eu = e.i(253770);
    let ec = e => {
        let t, i, r, n, o, a, s = (0, L.c)(17),
            {
                children: l
            } = e,
            [u, c] = (0, M.useState)(!1),
            [d, p] = (0, M.useState)(eu.DEFAULT_CRYPTO_VOUCHERS),
            [h, f] = (0, M.useState)(!1);
        s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
            step: "cart"
        }, s[0] = t) : t = s[0];
        let [g, v] = (0, M.useState)(t), [m, _] = (0, M.useState)(!1), [E, y] = (0, M.useState)(null);
        return s[1] !== d ? (i = {
            cryptoVouchers: d,
            setCryptoVouchers: p
        }, s[1] = d, s[2] = i) : i = s[2], s[3] !== g || s[4] !== h || s[5] !== u || s[6] !== E || s[7] !== m ? (r = {
            isDrawerOpen: u,
            sideCartBanner: E,
            drawerStep: g,
            setDrawerStep: v,
            isDrawerLoading: h,
            setIsDrawerLoading: f,
            slideDrawer: m,
            setSlideDrawer: _,
            setIsDrawerOpen: c,
            setSideCartBanner: y
        }, s[3] = g, s[4] = h, s[5] = u, s[6] = E, s[7] = m, s[8] = r) : r = s[8], s[9] !== l ? (n = (0, U.jsx)(el.EntryChannelProvider, {
            children: l
        }), s[9] = l, s[10] = n) : n = s[10], s[11] !== r || s[12] !== n ? (o = (0, U.jsx)(es.default, {
            value: r,
            children: n
        }), s[11] = r, s[12] = n, s[13] = o) : o = s[13], s[14] !== i || s[15] !== o ? (a = (0, U.jsx)(eu.default, {
            value: i,
            children: o
        }), s[14] = i, s[15] = o, s[16] = a) : a = s[16], a
    };
    var ed = e.i(41158);
    let ep = () => {
        let e, t, i = (0, L.c)(3),
            {
                asPath: r,
                locale: n
            } = (0, F.useRouter)(),
            o = encodeURIComponent(`${n??""}${r}`),
            a = `/api/disable-preview?path=${o}`;
        return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, U.jsx)("span", {
            children: "Preview Mode Enabled"
        }), i[0] = e) : e = i[0], i[1] !== a ? (t = (0, U.jsxs)("div", {
            className: "flex w-screen max-w-full items-center justify-between border-b px-24 py-8",
            children: [e, (0, U.jsx)(ed.default, {
                prefetch: !1,
                href: a,
                className: "flex items-center justify-center rounded-lg border px-8 py-4",
                children: "Exit preview mode"
            })]
        }), i[1] = a, i[2] = t) : t = i[2], t
    };
    var eh = e.i(578584),
        ef = e.i(441243),
        eg = e.i(730943);

    function ev(e, t, i) {
        let r, n = i.initialDeps ? ? [],
            o = !0;

        function a() {
            var a, s, l;
            let u, c;
            i.key && (null == (a = i.debug) ? void 0 : a.call(i)) && (u = Date.now());
            let d = e();
            if (!(d.length !== n.length || d.some((e, t) => n[t] !== e))) return r;
            if (n = d, i.key && (null == (s = i.debug) ? void 0 : s.call(i)) && (c = Date.now()), r = t(...d), i.key && (null == (l = i.debug) ? void 0 : l.call(i))) {
                let e = Math.round((Date.now() - u) * 100) / 100,
                    t = Math.round((Date.now() - c) * 100) / 100,
                    r = t / 16,
                    n = (e, t) => {
                        for (e = String(e); e.length < t;) e = " " + e;
                        return e
                    };
                console.info(`%c⏱ ${n(t,5)} /${n(e,5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*r,120))}deg 100% 31%);`, null == i ? void 0 : i.key)
            }
            return (null == i ? void 0 : i.onChange) && !(o && i.skipInitialOnChange) && i.onChange(r), o = !1, r
        }
        return a.updateDeps = e => {
            n = e
        }, a
    }

    function em(e, t) {
        if (void 0 !== e) return e;
        throw Error(`Unexpected undefined${t?`: ${t}`:""}`)
    }
    let e_ = e => {
            let {
                offsetWidth: t,
                offsetHeight: i
            } = e;
            return {
                width: t,
                height: i
            }
        },
        eE = e => e,
        ey = e => {
            let t = Math.max(e.startIndex - e.overscan, 0),
                i = Math.min(e.endIndex + e.overscan, e.count - 1),
                r = [];
            for (let e = t; e <= i; e++) r.push(e);
            return r
        },
        eb = (e, t) => {
            let i = e.scrollElement;
            if (!i) return;
            let r = e.targetWindow;
            if (!r) return;
            let n = e => {
                let {
                    width: i,
                    height: r
                } = e;
                t({
                    width: Math.round(i),
                    height: Math.round(r)
                })
            };
            if (n(e_(i)), !r.ResizeObserver) return () => {};
            let o = new r.ResizeObserver(t => {
                let r = () => {
                    let e = t[0];
                    if (null == e ? void 0 : e.borderBoxSize) {
                        let t = e.borderBoxSize[0];
                        if (t) return void n({
                            width: t.inlineSize,
                            height: t.blockSize
                        })
                    }
                    n(e_(i))
                };
                e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r()
            });
            return o.observe(i, {
                box: "border-box"
            }), () => {
                o.unobserve(i)
            }
        },
        eI = {
            passive: !0
        },
        eO = "u" < typeof window || "onscrollend" in window,
        eR = (e, t) => {
            var i, r;
            let n, o = e.scrollElement;
            if (!o) return;
            let a = e.targetWindow;
            if (!a) return;
            let s = 0,
                l = e.options.useScrollendEvent && eO ? () => void 0 : (i = () => {
                    t(s, !1)
                }, r = e.options.isScrollingResetDelay, function(...e) {
                    a.clearTimeout(n), n = a.setTimeout(() => i.apply(this, e), r)
                }),
                u = i => () => {
                    let {
                        horizontal: r,
                        isRtl: n
                    } = e.options;
                    s = r ? o.scrollLeft * (n && -1 || 1) : o.scrollTop, l(), t(s, i)
                },
                c = u(!0),
                d = u(!1);
            d(), o.addEventListener("scroll", c, eI);
            let p = e.options.useScrollendEvent && eO;
            return p && o.addEventListener("scrollend", d, eI), () => {
                o.removeEventListener("scroll", c), p && o.removeEventListener("scrollend", d)
            }
        },
        eS = (e, t, i) => {
            if (null == t ? void 0 : t.borderBoxSize) {
                let e = t.borderBoxSize[0];
                if (e) return Math.round(e[i.options.horizontal ? "inlineSize" : "blockSize"])
            }
            return e[i.options.horizontal ? "offsetWidth" : "offsetHeight"]
        },
        eT = (e, {
            adjustments: t = 0,
            behavior: i
        }, r) => {
            var n, o;
            null == (o = null == (n = r.scrollElement) ? void 0 : n.scrollTo) || o.call(n, {
                [r.options.horizontal ? "left" : "top"]: e + t,
                behavior: i
            })
        };
    class ew {
        constructor(e) {
            this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = new Map, this.laneAssignments = new Map, this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = new Map, this.observer = (() => {
                let e = null,
                    t = () => e || (this.targetWindow && this.targetWindow.ResizeObserver ? e = new this.targetWindow.ResizeObserver(e => {
                        e.forEach(e => {
                            let t = () => {
                                this._measureElement(e.target, e)
                            };
                            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t()
                        })
                    }) : null);
                return {
                    disconnect: () => {
                        var i;
                        null == (i = t()) || i.disconnect(), e = null
                    },
                    observe: e => {
                        var i;
                        return null == (i = t()) ? void 0 : i.observe(e, {
                            box: "border-box"
                        })
                    },
                    unobserve: e => {
                        var i;
                        return null == (i = t()) ? void 0 : i.unobserve(e)
                    }
                }
            })(), this.range = null, this.setOptions = e => {
                Object.entries(e).forEach(([t, i]) => {
                    void 0 === i && delete e[t]
                }), this.options = {
                    debug: !1,
                    initialOffset: 0,
                    overscan: 1,
                    paddingStart: 0,
                    paddingEnd: 0,
                    scrollPaddingStart: 0,
                    scrollPaddingEnd: 0,
                    horizontal: !1,
                    getItemKey: eE,
                    rangeExtractor: ey,
                    onChange: () => {},
                    measureElement: eS,
                    initialRect: {
                        width: 0,
                        height: 0
                    },
                    scrollMargin: 0,
                    gap: 0,
                    indexAttribute: "data-index",
                    initialMeasurementsCache: [],
                    lanes: 1,
                    isScrollingResetDelay: 150,
                    enabled: !0,
                    isRtl: !1,
                    useScrollendEvent: !1,
                    useAnimationFrameWithResizeObserver: !1,
                    ...e
                }
            }, this.notify = e => {
                var t, i;
                null == (i = (t = this.options).onChange) || i.call(t, this, e)
            }, this.maybeNotify = ev(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), e => {
                this.notify(e)
            }, {
                key: !1,
                debug: () => this.options.debug,
                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
            }), this.cleanup = () => {
                this.unsubs.filter(Boolean).forEach(e => e()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null
            }, this._didMount = () => () => {
                this.cleanup()
            }, this._willUpdate = () => {
                var e;
                let t = this.options.enabled ? this.options.getScrollElement() : null;
                if (this.scrollElement !== t) {
                    if (this.cleanup(), !t) return void this.maybeNotify();
                    this.scrollElement = t, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ? ? null, this.elementsCache.forEach(e => {
                        this.observer.observe(e)
                    }), this._scrollToOffset(this.getScrollOffset(), {
                        adjustments: void 0,
                        behavior: void 0
                    }), this.unsubs.push(this.options.observeElementRect(this, e => {
                        this.scrollRect = e, this.maybeNotify()
                    })), this.unsubs.push(this.options.observeElementOffset(this, (e, t) => {
                        this.scrollAdjustments = 0, this.scrollDirection = t ? this.getScrollOffset() < e ? "forward" : "backward" : null, this.scrollOffset = e, this.isScrolling = t, this.maybeNotify()
                    }))
                }
            }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ? ? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ? ? ("function" == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, t) => {
                let i = new Map,
                    r = new Map;
                for (let n = t - 1; n >= 0; n--) {
                    let t = e[n];
                    if (i.has(t.lane)) continue;
                    let o = r.get(t.lane);
                    if (null == o || t.end > o.end ? r.set(t.lane, t) : t.end < o.end && i.set(t.lane, !0), i.size === this.options.lanes) break
                }
                return r.size === this.options.lanes ? Array.from(r.values()).sort((e, t) => e.end === t.end ? e.index - t.index : e.end - t.end)[0] : void 0
            }, this.getMeasurementOptions = ev(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled, this.options.lanes], (e, t, i, r, n, o) => (void 0 !== this.prevLanes && this.prevLanes !== o && (this.lanesChangedFlag = !0), this.prevLanes = o, this.pendingMeasuredCacheIndexes = [], {
                count: e,
                paddingStart: t,
                scrollMargin: i,
                getItemKey: r,
                enabled: n,
                lanes: o
            }), {
                key: !1,
                skipInitialOnChange: !0,
                onChange: () => {
                    this.notify(this.isScrolling)
                }
            }), this.getMeasurements = ev(() => [this.getMeasurementOptions(), this.itemSizeCache], ({
                count: e,
                paddingStart: t,
                scrollMargin: i,
                getItemKey: r,
                enabled: n,
                lanes: o
            }, a) => {
                if (!n) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
                if (this.laneAssignments.size > e)
                    for (let t of this.laneAssignments.keys()) t >= e && this.laneAssignments.delete(t);
                this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), 0 === this.measurementsCache.length && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach(e => {
                    this.itemSizeCache.set(e.key, e.size)
                }));
                let s = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1);
                let l = this.measurementsCache.slice(0, s),
                    u = Array(o).fill(void 0);
                for (let e = 0; e < s; e++) {
                    let t = l[e];
                    t && (u[t.lane] = e)
                }
                for (let n = s; n < e; n++) {
                    let e, o, s = r(n),
                        c = this.laneAssignments.get(n);
                    if (void 0 !== c && this.options.lanes > 1) {
                        let r = u[e = c],
                            n = void 0 !== r ? l[r] : void 0;
                        o = n ? n.end + this.options.gap : t + i
                    } else {
                        let r = 1 === this.options.lanes ? l[n - 1] : this.getFurthestMeasurement(l, n);
                        o = r ? r.end + this.options.gap : t + i, e = r ? r.lane : n % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(n, e)
                    }
                    let d = a.get(s),
                        p = "number" == typeof d ? d : this.options.estimateSize(n),
                        h = o + p;
                    l[n] = {
                        index: n,
                        start: o,
                        size: p,
                        end: h,
                        key: s,
                        lane: e
                    }, u[e] = n
                }
                return this.measurementsCache = l, l
            }, {
                key: !1,
                debug: () => this.options.debug
            }), this.calculateRange = ev(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (e, t, i, r) => this.range = e.length > 0 && t > 0 ? function({
                measurements: e,
                outerSize: t,
                scrollOffset: i,
                lanes: r
            }) {
                let n = e.length - 1;
                if (e.length <= r) return {
                    startIndex: 0,
                    endIndex: n
                };
                let o = eN(0, n, t => e[t].start, i),
                    a = o;
                if (1 === r)
                    for (; a < n && e[a].end < i + t;) a++;
                else if (r > 1) {
                    let s = Array(r).fill(0);
                    for (; a < n && s.some(e => e < i + t);) {
                        let t = e[a];
                        s[t.lane] = t.end, a++
                    }
                    let l = Array(r).fill(i + t);
                    for (; o >= 0 && l.some(e => e >= i);) {
                        let t = e[o];
                        l[t.lane] = t.start, o--
                    }
                    o = Math.max(0, o - o % r), a = Math.min(n, a + (r - 1 - a % r))
                }
                return {
                    startIndex: o,
                    endIndex: a
                }
            }({
                measurements: e,
                outerSize: t,
                scrollOffset: i,
                lanes: r
            }) : null, {
                key: !1,
                debug: () => this.options.debug
            }), this.getVirtualIndexes = ev(() => {
                let e = null,
                    t = null,
                    i = this.calculateRange();
                return i && (e = i.startIndex, t = i.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e, t]), [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
            }, (e, t, i, r, n) => null === r || null === n ? [] : e({
                startIndex: r,
                endIndex: n,
                overscan: t,
                count: i
            }), {
                key: !1,
                debug: () => this.options.debug
            }), this.indexFromElement = e => {
                let t = this.options.indexAttribute,
                    i = e.getAttribute(t);
                return i ? parseInt(i, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1)
            }, this._measureElement = (e, t) => {
                let i = this.indexFromElement(e),
                    r = this.measurementsCache[i];
                if (!r) return;
                let n = r.key,
                    o = this.elementsCache.get(n);
                o !== e && (o && this.observer.unobserve(o), this.observer.observe(e), this.elementsCache.set(n, e)), e.isConnected && this.resizeItem(i, this.options.measureElement(e, t, this))
            }, this.resizeItem = (e, t) => {
                let i = this.measurementsCache[e];
                if (!i) return;
                let r = t - (this.itemSizeCache.get(i.key) ? ? i.size);
                0 !== r && ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange ? this.shouldAdjustScrollPositionOnItemSizeChange(i, r, this) : i.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: this.scrollAdjustments += r,
                    behavior: void 0
                }), this.pendingMeasuredCacheIndexes.push(i.index), this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, t)), this.notify(!1))
            }, this.measureElement = e => {
                e ? this._measureElement(e, void 0) : this.elementsCache.forEach((e, t) => {
                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t))
                })
            }, this.getVirtualItems = ev(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, t) => {
                let i = [];
                for (let r = 0, n = e.length; r < n; r++) {
                    let n = t[e[r]];
                    i.push(n)
                }
                return i
            }, {
                key: !1,
                debug: () => this.options.debug
            }), this.getVirtualItemForOffset = e => {
                let t = this.getMeasurements();
                if (0 !== t.length) return em(t[eN(0, t.length - 1, e => em(t[e]).start, e)])
            }, this.getOffsetForAlignment = (e, t, i = 0) => {
                let r = this.getSize(),
                    n = this.getScrollOffset();
                return "auto" === t && (t = e >= n + r ? "end" : "start"), "center" === t ? e += (i - r) / 2 : "end" === t && (e -= r), Math.max(Math.min(this.getTotalSize() + this.options.scrollMargin - r, e), 0)
            }, this.getOffsetForIndex = (e, t = "auto") => {
                e = Math.max(0, Math.min(e, this.options.count - 1));
                let i = this.measurementsCache[e];
                if (!i) return;
                let r = this.getSize(),
                    n = this.getScrollOffset();
                if ("auto" === t)
                    if (i.end >= n + r - this.options.scrollPaddingEnd) t = "end";
                    else {
                        if (!(i.start <= n + this.options.scrollPaddingStart)) return [n, t];
                        t = "start"
                    }
                let o = "end" === t ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
                return [this.getOffsetForAlignment(o, t, i.size), t]
            }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (e, {
                align: t = "start",
                behavior: i
            } = {}) => {
                "smooth" === i && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                    adjustments: void 0,
                    behavior: i
                })
            }, this.scrollToIndex = (e, {
                align: t = "auto",
                behavior: i
            } = {}) => {
                "smooth" === i && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), e = Math.max(0, Math.min(e, this.options.count - 1));
                let r = 0,
                    n = t => {
                        if (!this.targetWindow) return;
                        let r = this.getOffsetForIndex(e, t);
                        if (!r) return void console.warn("Failed to get offset for index:", e);
                        let [n, a] = r;
                        this._scrollToOffset(n, {
                            adjustments: void 0,
                            behavior: i
                        }), this.targetWindow.requestAnimationFrame(() => {
                            let t = this.getScrollOffset(),
                                i = this.getOffsetForIndex(e, a);
                            i ? 1.01 > Math.abs(i[0] - t) || o(a) : console.warn("Failed to get offset for index:", e)
                        })
                    },
                    o = t => {
                        this.targetWindow && (++r < 10 ? this.targetWindow.requestAnimationFrame(() => n(t)) : console.warn(`Failed to scroll to index ${e} after 10 attempts.`))
                    };
                n(t)
            }, this.scrollBy = (e, {
                behavior: t
            } = {}) => {
                "smooth" === t && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + e, {
                    adjustments: void 0,
                    behavior: t
                })
            }, this.getTotalSize = () => {
                var e;
                let t, i = this.getMeasurements();
                if (0 === i.length) t = this.options.paddingStart;
                else if (1 === this.options.lanes) t = (null == (e = i[i.length - 1]) ? void 0 : e.end) ? ? 0;
                else {
                    let e = Array(this.options.lanes).fill(null),
                        r = i.length - 1;
                    for (; r >= 0 && e.some(e => null === e);) {
                        let t = i[r];
                        null === e[t.lane] && (e[t.lane] = t.end), r--
                    }
                    t = Math.max(...e.filter(e => null !== e))
                }
                return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0)
            }, this._scrollToOffset = (e, {
                adjustments: t,
                behavior: i
            }) => {
                this.options.scrollToFn(e, {
                    behavior: i,
                    adjustments: t
                }, this)
            }, this.measure = () => {
                this.itemSizeCache = new Map, this.laneAssignments = new Map, this.notify(!1)
            }, this.setOptions(e)
        }
    }
    let eN = (e, t, i, r) => {
            for (; e <= t;) {
                let n = (e + t) / 2 | 0,
                    o = i(n);
                if (o < r) e = n + 1;
                else {
                    if (!(o > r)) return n;
                    t = n - 1
                }
            }
            return e > 0 ? e - 1 : 0
        },
        eA = "u" > typeof document ? M.useLayoutEffect : M.useEffect;
    var eC = e.i(872016),
        eD = e.i(759146),
        ex = e.i(829672),
        ek = e.i(160374),
        eP = e.i(626171),
        eU = e.i(880150),
        eL = e.i(993481),
        eM = e.i(71147),
        eF = e.i(373483),
        eV = e.i(264728),
        ez = e.i(215067),
        eB = e.i(468327),
        eG = e.i(587264),
        eq = e.i(476925),
        ej = e.i(941888),
        eK = e.i(855367),
        eH = e.i(780795),
        eW = e.i(675565);

    function eY(e) {
        let t = (0, M.useRef)({
            value: "",
            selectionStart: null,
            selectionEnd: null
        });
        return (0, eW.useEventListener)(e, "blur", e => {
            let i = e.target;
            eK.isHTMLInputElement(i) && (t.current = {
                value: i.value,
                selectionStart: i.selectionStart,
                selectionEnd: i.selectionEnd
            })
        }), (0, eL.useEvent)(() => {
            if (!(0, eH.isActiveElement)(e) && eK.isHTMLInputElement(e) && e.isConnected) {
                if (e.focus({
                        preventScroll: !0
                    }), e.value !== t.current.value) e.setSelectionRange(e.value.length, e.value.length);
                else {
                    let {
                        selectionStart: i,
                        selectionEnd: r
                    } = t.current;
                    null !== i && null !== r && e.setSelectionRange(i, r)
                }
                t.current = {
                    value: "",
                    selectionStart: null,
                    selectionEnd: null
                }
            }
        })
    }
    var eX = e.i(399030),
        eQ = e.i(104067),
        eJ = e.i(608404),
        e$ = e.i(156833),
        eZ = e.i(798294),
        e0 = e.i(880281),
        e1 = e.i(439048),
        e2 = e.i(651358),
        e5 = e.i(760360),
        e3 = e.i(315503),
        e4 = e.i(128708),
        e6 = e.i(448714),
        e8 = e.i(196061),
        e7 = e.i(896694),
        e9 = e.i(331774),
        te = e.i(459778),
        tt = e.i(636832),
        ti = e.i(387706),
        tr = e.i(760004),
        tn = e.i(426417),
        to = e.i(855251),
        ta = e.i(774664),
        ts = e.i(472381),
        tl = e.i(78270),
        tu = e.i(709769),
        tc = e.i(622898),
        td = e.i(962750),
        tp = e.i(214929),
        th = e.i(161614),
        tf = e.i(565383),
        tg = Object.defineProperty,
        tv = (e, t, i) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? tg(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i
            }) : e[r] = i, i
        },
        tm = ((t = tm || {})[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t),
        t_ = ((i = t_ || {})[i.Single = 0] = "Single", i[i.Multi = 1] = "Multi", i),
        tE = ((r = tE || {})[r.Pointer = 0] = "Pointer", r[r.Focus = 1] = "Focus", r[r.Other = 2] = "Other", r),
        ty = ((n = ty || {})[n.OpenCombobox = 0] = "OpenCombobox", n[n.CloseCombobox = 1] = "CloseCombobox", n[n.GoToOption = 2] = "GoToOption", n[n.SetTyping = 3] = "SetTyping", n[n.RegisterOption = 4] = "RegisterOption", n[n.UnregisterOption = 5] = "UnregisterOption", n[n.DefaultToFirstOption = 6] = "DefaultToFirstOption", n[n.SetActivationTrigger = 7] = "SetActivationTrigger", n[n.UpdateVirtualConfiguration = 8] = "UpdateVirtualConfiguration", n[n.SetInputElement = 9] = "SetInputElement", n[n.SetButtonElement = 10] = "SetButtonElement", n[n.SetOptionsElement = 11] = "SetOptionsElement", n[n.MarkInputAsMoved = 12] = "MarkInputAsMoved", n);

    function tb(e, t = e => e) {
        let i = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
            r = t(e.options.slice()),
            n = r.length > 0 && null !== r[0].dataRef.current.order ? r.sort((e, t) => e.dataRef.current.order - t.dataRef.current.order) : (0, tf.sortByDomNode)(r, e => e.dataRef.current.domRef.current),
            o = i ? n.indexOf(i) : null;
        return -1 === o && (o = null), {
            options: n,
            activeOptionIndex: o
        }
    }
    let tI = {
        1(e) {
            var t;
            if (null != (t = e.dataRef.current) && t.disabled || 1 === e.comboboxState) return e;
            let i = e.inputElement ? th.ElementPositionState.Tracked((0, th.computeVisualPosition)(e.inputElement)) : e.inputPositionState;
            return { ...e,
                activeOptionIndex: null,
                comboboxState: 1,
                isTyping: !1,
                activationTrigger: 2,
                inputPositionState: i,
                __demoMode: !1
            }
        },
        0(e) {
            var t, i;
            if (null != (t = e.dataRef.current) && t.disabled || 0 === e.comboboxState) return e;
            if (null != (i = e.dataRef.current) && i.value) {
                let t = e.dataRef.current.calculateIndex(e.dataRef.current.value);
                if (-1 !== t) return { ...e,
                    activeOptionIndex: t,
                    comboboxState: 0,
                    __demoMode: !1,
                    inputPositionState: th.ElementPositionState.Idle
                }
            }
            return { ...e,
                comboboxState: 0,
                inputPositionState: th.ElementPositionState.Idle,
                __demoMode: !1
            }
        },
        3: (e, t) => e.isTyping === t.isTyping ? e : { ...e,
            isTyping: t.isTyping
        },
        2(e, t) {
            var i, r, n, o;
            if (null != (i = e.dataRef.current) && i.disabled || e.optionsElement && !(null != (r = e.dataRef.current) && r.optionsPropsRef.current.static) && 1 === e.comboboxState) return e;
            if (e.virtual) {
                let {
                    options: i,
                    disabled: r
                } = e.virtual, o = t.focus === ti.Focus.Specific ? t.idx : (0, ti.calculateActiveIndex)(t, {
                    resolveItems: () => i,
                    resolveActiveIndex: () => {
                        var t, n;
                        return null != (n = null != (t = e.activeOptionIndex) ? t : i.findIndex(e => !r(e))) ? n : null
                    },
                    resolveDisabled: r,
                    resolveId() {
                        throw Error("Function not implemented.")
                    }
                }), a = null != (n = t.trigger) ? n : 2;
                return e.activeOptionIndex === o && e.activationTrigger === a ? e : { ...e,
                    activeOptionIndex: o,
                    activationTrigger: a,
                    isTyping: !1,
                    __demoMode: !1
                }
            }
            let a = tb(e);
            if (null === a.activeOptionIndex) {
                let e = a.options.findIndex(e => !e.dataRef.current.disabled); - 1 !== e && (a.activeOptionIndex = e)
            }
            let s = t.focus === ti.Focus.Specific ? t.idx : (0, ti.calculateActiveIndex)(t, {
                    resolveItems: () => a.options,
                    resolveActiveIndex: () => a.activeOptionIndex,
                    resolveId: e => e.id,
                    resolveDisabled: e => e.dataRef.current.disabled
                }),
                l = null != (o = t.trigger) ? o : 2;
            return e.activeOptionIndex === s && e.activationTrigger === l ? e : { ...e,
                ...a,
                isTyping: !1,
                activeOptionIndex: s,
                activationTrigger: l,
                __demoMode: !1
            }
        },
        4: (e, t) => {
            var i, r, n, o;
            if (null != (i = e.dataRef.current) && i.virtual) return { ...e,
                options: [...e.options, t.payload]
            };
            let a = t.payload,
                s = tb(e, e => (e.push(a), e));
            null === e.activeOptionIndex && null != (n = (r = e.dataRef.current).isSelected) && n.call(r, t.payload.dataRef.current.value) && (s.activeOptionIndex = s.options.indexOf(a));
            let l = { ...e,
                ...s,
                activationTrigger: 2
            };
            return null != (o = e.dataRef.current) && o.__demoMode && void 0 === e.dataRef.current.value && (l.activeOptionIndex = 0), l
        },
        5: (e, t) => {
            var i;
            if (null != (i = e.dataRef.current) && i.virtual) return { ...e,
                options: e.options.filter(e => e.id !== t.id)
            };
            let r = tb(e, e => {
                let i = e.findIndex(e => e.id === t.id);
                return -1 !== i && e.splice(i, 1), e
            });
            return { ...e,
                ...r,
                activationTrigger: 2
            }
        },
        6: (e, t) => e.defaultToFirstOption === t.value ? e : { ...e,
            defaultToFirstOption: t.value
        },
        7: (e, t) => e.activationTrigger === t.trigger ? e : { ...e,
            activationTrigger: t.trigger
        },
        8: (e, t) => {
            var i, r;
            if (null === e.virtual) return { ...e,
                virtual: {
                    options: t.options,
                    disabled: null != (i = t.disabled) ? i : () => !1
                }
            };
            if (e.virtual.options === t.options && e.virtual.disabled === t.disabled) return e;
            let n = e.activeOptionIndex;
            if (null !== e.activeOptionIndex) {
                let i = t.options.indexOf(e.virtual.options[e.activeOptionIndex]);
                n = -1 !== i ? i : null
            }
            return { ...e,
                activeOptionIndex: n,
                virtual: {
                    options: t.options,
                    disabled: null != (r = t.disabled) ? r : () => !1
                }
            }
        },
        9: (e, t) => e.inputElement === t.element ? e : { ...e,
            inputElement: t.element
        },
        10: (e, t) => e.buttonElement === t.element ? e : { ...e,
            buttonElement: t.element
        },
        11: (e, t) => e.optionsElement === t.element ? e : { ...e,
            optionsElement: t.element
        },
        12: e => "Tracked" !== e.inputPositionState.kind ? e : { ...e,
            inputPositionState: th.ElementPositionState.Moved
        }
    };
    class tO extends tp.Machine {
        constructor(e) {
            super(e), tv(this, "actions", {
                onChange: e => {
                    let {
                        onChange: t,
                        compare: i,
                        mode: r,
                        value: n
                    } = this.state.dataRef.current;
                    return (0, tn.match)(r, {
                        0: () => null == t ? void 0 : t(e),
                        1: () => {
                            let r = n.slice(),
                                o = r.findIndex(t => i(t, e));
                            return -1 === o ? r.push(e) : r.splice(o, 1), null == t ? void 0 : t(r)
                        }
                    })
                },
                registerOption: (e, t) => (this.send({
                    type: 4,
                    payload: {
                        id: e,
                        dataRef: t
                    }
                }), () => {
                    this.state.activeOptionIndex === this.state.dataRef.current.calculateIndex(t.current.value) && this.send({
                        type: 6,
                        value: !0
                    }), this.send({
                        type: 5,
                        id: e
                    })
                }),
                goToOption: (e, t) => (this.send({
                    type: 6,
                    value: !1
                }), this.send({
                    type: 2,
                    ...e,
                    trigger: t
                })),
                setIsTyping: e => {
                    this.send({
                        type: 3,
                        isTyping: e
                    })
                },
                closeCombobox: () => {
                    var e, t;
                    this.send({
                        type: 1
                    }), this.send({
                        type: 6,
                        value: !1
                    }), null == (t = (e = this.state.dataRef.current).onClose) || t.call(e)
                },
                openCombobox: () => {
                    this.send({
                        type: 0
                    }), this.send({
                        type: 6,
                        value: !0
                    })
                },
                setActivationTrigger: e => {
                    this.send({
                        type: 7,
                        trigger: e
                    })
                },
                selectActiveOption: () => {
                    let e = this.selectors.activeOptionIndex(this.state);
                    if (null !== e) {
                        if (this.actions.setIsTyping(!1), this.state.virtual) this.actions.onChange(this.state.virtual.options[e]);
                        else {
                            let {
                                dataRef: t
                            } = this.state.options[e];
                            this.actions.onChange(t.current.value)
                        }
                        this.actions.goToOption({
                            focus: ti.Focus.Specific,
                            idx: e
                        })
                    }
                },
                setInputElement: e => {
                    this.send({
                        type: 9,
                        element: e
                    })
                },
                setButtonElement: e => {
                    this.send({
                        type: 10,
                        element: e
                    })
                },
                setOptionsElement: e => {
                    this.send({
                        type: 11,
                        element: e
                    })
                }
            }), tv(this, "selectors", {
                activeDescendantId: e => {
                    var t, i;
                    let r = this.selectors.activeOptionIndex(e);
                    if (null !== r) return e.virtual ? null == (i = e.options.find(t => !t.dataRef.current.disabled && e.dataRef.current.compare(t.dataRef.current.value, e.virtual.options[r]))) ? void 0 : i.id : null == (t = e.options[r]) ? void 0 : t.id
                },
                activeOptionIndex: e => {
                    if (e.defaultToFirstOption && null === e.activeOptionIndex && (e.virtual ? e.virtual.options.length > 0 : e.options.length > 0)) {
                        if (e.virtual) {
                            let {
                                options: t,
                                disabled: i
                            } = e.virtual, r = t.findIndex(e => {
                                var t;
                                return !(null != (t = null == i ? void 0 : i(e)) && t)
                            });
                            if (-1 !== r) return r
                        }
                        let t = e.options.findIndex(e => !e.dataRef.current.disabled);
                        if (-1 !== t) return t
                    }
                    return e.activeOptionIndex
                },
                activeOption: e => {
                    var t, i;
                    let r = this.selectors.activeOptionIndex(e);
                    return null === r ? null : e.virtual ? e.virtual.options[null != r ? r : 0] : null != (i = null == (t = e.options[r]) ? void 0 : t.dataRef.current.value) ? i : null
                },
                isActive: (e, t, i) => {
                    var r;
                    let n = this.selectors.activeOptionIndex(e);
                    return null !== n && (e.virtual ? n === e.dataRef.current.calculateIndex(t) : (null == (r = e.options[n]) ? void 0 : r.id) === i)
                },
                shouldScrollIntoView: (e, t, i) => !(e.virtual || e.__demoMode || 0 !== e.comboboxState || 0 === e.activationTrigger || !this.selectors.isActive(e, t, i)),
                didInputMove: e => "Moved" === e.inputPositionState.kind
            }); {
                let e = this.state.id,
                    t = e9.stackMachines.get(null);
                this.disposables.add(t.on(e9.ActionTypes.Push, i => {
                    t.selectors.isTop(i, e) || 0 !== this.state.comboboxState || this.actions.closeCombobox()
                })), this.on(0, () => t.actions.push(e)), this.on(1, () => t.actions.pop(e))
            }
            this.disposables.group(e => {
                this.on(1, t => {
                    t.inputElement && (e.dispose(), e.add((0, th.detectMovement)(t.inputElement, t.inputPositionState, () => {
                        this.send({
                            type: 12
                        })
                    })))
                })
            })
        }
        static new({
            id: e,
            virtual: t = null,
            __demoMode: i = !1
        }) {
            var r;
            return new tO({
                id: e,
                dataRef: {
                    current: {}
                },
                comboboxState: +!i,
                isTyping: !1,
                options: [],
                virtual: t ? {
                    options: t.options,
                    disabled: null != (r = t.disabled) ? r : () => !1
                } : null,
                activeOptionIndex: null,
                activationTrigger: 2,
                inputElement: null,
                buttonElement: null,
                optionsElement: null,
                __demoMode: i,
                inputPositionState: th.ElementPositionState.Idle
            })
        }
        reduce(e, t) {
            return (0, tn.match)(t.type, tI, e, t)
        }
    }
    var tR = e.i(721867);
    let tS = (0, M.createContext)(null);

    function tT(e) {
        let t = (0, M.useContext)(tS);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, tw), t
        }
        return t
    }

    function tw({
        id: e,
        virtual: t = null,
        __demoMode: i = !1
    }) {
        let r = (0, M.useMemo)(() => tO.new({
            id: e,
            virtual: t,
            __demoMode: i
        }), []);
        return (0, tR.useOnUnmount)(() => r.dispose()), r
    }
    let tN = (0, M.createContext)(null);

    function tA(e) {
        let t = (0, M.useContext)(tN);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <Combobox /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, tA), t
        }
        return t
    }
    tN.displayName = "ComboboxDataContext";
    let tC = (0, M.createContext)(null);

    function tD(e) {
        let t = tT("VirtualProvider"),
            {
                options: i
            } = tA("VirtualProvider").virtual,
            r = (0, te.useSlice)(t, e => e.optionsElement),
            [n, o] = (0, M.useMemo)(() => {
                if (!r) return [0, 0];
                let e = window.getComputedStyle(r);
                return [parseFloat(e.paddingBlockStart || e.paddingTop), parseFloat(e.paddingBlockEnd || e.paddingBottom)]
            }, [r]),
            a = function(e) {
                let t = M.useReducer(() => ({}), {})[1],
                    i = { ...e,
                        onChange: (i, r) => {
                            var n;
                            r ? (0, eg.flushSync)(t) : t(), null == (n = e.onChange) || n.call(e, i, r)
                        }
                    },
                    [r] = M.useState(() => new ew(i));
                return r.setOptions(i), eA(() => r._didMount(), []), eA(() => r._willUpdate()), r
            }({
                observeElementRect: eb,
                observeElementOffset: eR,
                scrollToFn: eT,
                ...{
                    enabled: 0 !== i.length,
                    scrollPaddingStart: n,
                    scrollPaddingEnd: o,
                    count: i.length,
                    estimateSize: () => 40,
                    getScrollElement: () => t.state.optionsElement,
                    overscan: 12
                }
            }),
            [s, l] = (0, M.useState)(0);
        (0, eV.useIsoMorphicEffect)(() => {
            l(e => e + 1)
        }, [i]);
        let u = a.getVirtualItems(),
            c = (0, te.useSlice)(t, e => e.activationTrigger === tE.Pointer),
            d = (0, te.useSlice)(t, t.selectors.activeOptionIndex);
        return 0 === u.length ? null : M.default.createElement(tC.Provider, {
            value: a
        }, M.default.createElement("div", {
            style: {
                position: "relative",
                width: "100%",
                height: `${a.getTotalSize()}px`
            },
            ref: e => {
                e && (c || null !== d && i.length > d && a.scrollToIndex(d))
            }
        }, u.map(t => {
            var r;
            return M.default.createElement(M.Fragment, {
                key: t.key
            }, M.default.cloneElement(null == (r = e.children) ? void 0 : r.call(e, { ...e.slot,
                option: i[t.index]
            }), {
                key: `${s}-${t.key}`,
                "data-index": t.index,
                "aria-setsize": i.length,
                "aria-posinset": t.index + 1,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: `translateY(${t.start}px)`,
                    overflowAnchor: "none"
                }
            }))
        })))
    }
    let tx = M.Fragment,
        tk = ta.RenderFeatures.RenderStrategy | ta.RenderFeatures.Static,
        tP = (0, ta.forwardRefWithAs)(function(e, t) {
            let i = (0, M.useId)(),
                r = (0, e5.useDisabled)(),
                {
                    value: n,
                    defaultValue: o,
                    onChange: a,
                    form: s,
                    name: l,
                    by: u,
                    invalid: c = !1,
                    disabled: d = r || !1,
                    onClose: p,
                    __demoMode: h = !1,
                    multiple: f = !1,
                    immediate: g = !1,
                    virtual: v = null,
                    nullable: m,
                    ..._
                } = e,
                E = (0, ek.useDefaultValue)(o),
                [y = f ? [] : void 0, b] = (0, ex.useControllable)(n, a, E),
                I = tw({
                    id: i,
                    virtual: v,
                    __demoMode: h
                }),
                O = (0, M.useRef)({
                    static: !1,
                    hold: !1
                }),
                R = (0, eD.useByComparator)(u),
                S = (0, eL.useEvent)(e => v ? null === u ? v.options.indexOf(e) : v.options.findIndex(t => R(t, e)) : I.state.options.findIndex(t => R(t.dataRef.current.value, e))),
                T = (0, M.useCallback)(e => (0, tn.match)(A.mode, {
                    [t_.Multi]: () => y.some(t => R(t, e)),
                    [t_.Single]: () => R(y, e)
                }), [y]),
                w = (0, te.useSlice)(I, e => e.virtual),
                N = (0, eL.useEvent)(() => null == p ? void 0 : p()),
                A = (0, M.useMemo)(() => ({
                    __demoMode: h,
                    immediate: g,
                    optionsPropsRef: O,
                    value: y,
                    defaultValue: E,
                    disabled: d,
                    invalid: c,
                    mode: f ? t_.Multi : t_.Single,
                    virtual: v ? w : null,
                    onChange: b,
                    isSelected: T,
                    calculateIndex: S,
                    compare: R,
                    onClose: N
                }), [h, g, O, y, E, d, c, f, v, w, b, T, S, R, N]);
            (0, eV.useIsoMorphicEffect)(() => {
                var e;
                v && I.send({
                    type: ty.UpdateVirtualConfiguration,
                    options: v.options,
                    disabled: null != (e = v.disabled) ? e : null
                })
            }, [v, null == v ? void 0 : v.options, null == v ? void 0 : v.disabled]), (0, eV.useIsoMorphicEffect)(() => {
                I.state.dataRef.current = A
            }, [A]);
            let [C, D, x, k] = (0, te.useSlice)(I, e => [e.comboboxState, e.buttonElement, e.inputElement, e.optionsElement]), P = e9.stackMachines.get(null), U = (0, te.useSlice)(P, (0, M.useCallback)(e => P.selectors.isTop(e, i), [P, i]));
            (0, eG.useOutsideClick)(U, [D, x, k], () => I.actions.closeCombobox());
            let L = (0, te.useSlice)(I, I.selectors.activeOptionIndex),
                F = (0, te.useSlice)(I, I.selectors.activeOption),
                V = (0, eJ.useSlot)({
                    open: C === tm.Open,
                    disabled: d,
                    invalid: c,
                    activeIndex: L,
                    activeOption: F,
                    value: y
                }),
                [z, B] = (0, tu.useLabels)(),
                G = (0, M.useCallback)(() => {
                    if (void 0 !== E) return null == b ? void 0 : b(E)
                }, [b, E]),
                q = (0, ta.useRender)();
            return M.default.createElement(B, {
                value: z,
                props: {
                    htmlFor: null == x ? void 0 : x.id
                },
                slot: {
                    open: C === tm.Open,
                    disabled: d
                }
            }, M.default.createElement(e3.FloatingProvider, null, M.default.createElement(tN.Provider, {
                value: A
            }, M.default.createElement(tS.Provider, {
                value: I
            }, M.default.createElement(e7.OpenClosedProvider, {
                value: (0, tn.match)(C, {
                    [tm.Open]: e7.State.Open,
                    [tm.Closed]: e7.State.Closed
                })
            }, null != l && M.default.createElement(e4.FormFields, {
                disabled: d,
                data: null != y ? {
                    [l]: y
                } : {},
                form: s,
                onReset: G
            }), q({
                ourProps: null === t ? {} : {
                    ref: t
                },
                theirProps: _,
                slot: V,
                defaultTag: tx,
                name: "Combobox"
            }))))))
        }),
        tU = (0, ta.forwardRefWithAs)(function(e, t) {
            let i = tT("Combobox.Button"),
                r = tA("Combobox.Button"),
                [n, o] = (0, M.useState)(null),
                a = (0, e$.useSyncRefs)(t, o, i.actions.setButtonElement),
                s = (0, M.useId)(),
                {
                    id: l = `headlessui-combobox-button-${s}`,
                    disabled: u = r.disabled || !1,
                    autoFocus: c = !1,
                    ...d
                } = e,
                [p, h, f] = (0, te.useSlice)(i, e => [e.comboboxState, e.inputElement, e.optionsElement]),
                g = eY(h),
                v = p === tm.Open;
            (0, ej.useQuickRelease)(v, {
                trigger: n,
                action: (0, M.useCallback)(e => {
                    if (null != n && n.contains(e.target) || null != h && h.contains(e.target)) return ej.Action.Ignore;
                    let t = e.target.closest('[role="option"]:not([data-disabled])');
                    return eK.isHTMLElement(t) ? ej.Action.Select(t) : null != f && f.contains(e.target) ? ej.Action.Ignore : ej.Action.Close
                }, [n, h, f]),
                close: i.actions.closeCombobox,
                select: i.actions.selectActiveOption
            });
            let m = (0, eL.useEvent)(e => {
                    switch (e.key) {
                        case tl.Keys.Space:
                        case tl.Keys.Enter:
                            e.preventDefault(), e.stopPropagation(), i.state.comboboxState === tm.Closed && (0, eg.flushSync)(() => i.actions.openCombobox()), g();
                            return;
                        case tl.Keys.ArrowDown:
                            e.preventDefault(), e.stopPropagation(), i.state.comboboxState === tm.Closed && ((0, eg.flushSync)(() => i.actions.openCombobox()), i.state.dataRef.current.value || i.actions.goToOption({
                                focus: ti.Focus.First
                            })), g();
                            return;
                        case tl.Keys.ArrowUp:
                            e.preventDefault(), e.stopPropagation(), i.state.comboboxState === tm.Closed && ((0, eg.flushSync)(() => i.actions.openCombobox()), i.state.dataRef.current.value || i.actions.goToOption({
                                focus: ti.Focus.Last
                            })), g();
                            return;
                        case tl.Keys.Escape:
                            if (i.state.comboboxState !== tm.Open) return;
                            e.preventDefault(), i.state.optionsElement && !r.optionsPropsRef.current.static && e.stopPropagation(), (0, eg.flushSync)(() => i.actions.closeCombobox()), g();
                            return;
                        default:
                            return
                    }
                }),
                _ = (0, eM.useHandleToggle)(() => {
                    i.state.comboboxState === tm.Open ? i.actions.closeCombobox() : i.actions.openCombobox(), g()
                }),
                E = (0, tu.useLabelledBy)([l]),
                {
                    isFocusVisible: y,
                    focusProps: b
                } = (0, eh.useFocusRing)({
                    autoFocus: c
                }),
                {
                    isHovered: I,
                    hoverProps: O
                } = (0, ef.useHover)({
                    isDisabled: u
                }),
                {
                    pressed: R,
                    pressProps: S
                } = (0, eC.useActivePress)({
                    disabled: u
                }),
                T = (0, eJ.useSlot)({
                    open: p === tm.Open,
                    active: R || p === tm.Open,
                    disabled: u,
                    invalid: r.invalid,
                    value: r.value,
                    hover: I,
                    focus: y
                }),
                w = (0, ta.mergeProps)({
                    ref: a,
                    id: l,
                    type: (0, eX.useResolveButtonType)(e, n),
                    tabIndex: -1,
                    "aria-haspopup": "listbox",
                    "aria-controls": null == f ? void 0 : f.id,
                    "aria-expanded": p === tm.Open,
                    "aria-labelledby": E,
                    disabled: u || void 0,
                    autoFocus: c,
                    onKeyDown: m
                }, _, b, O, S);
            return (0, ta.useRender)()({
                ourProps: w,
                theirProps: d,
                slot: T,
                defaultTag: "button",
                name: "Combobox.Button"
            })
        }),
        tL = (0, ta.forwardRefWithAs)(function(e, t) {
            var i, r;
            let n = tT("Combobox.Input"),
                o = tA("Combobox.Input"),
                a = (0, M.useId)(),
                s = (0, e8.useProvidedId)(),
                {
                    id: l = s || `headlessui-combobox-input-${a}`,
                    onChange: u,
                    displayValue: c,
                    disabled: d = o.disabled || !1,
                    autoFocus: p = !1,
                    type: h = "text",
                    ...f
                } = e,
                g = (0, M.useRef)(null),
                v = (0, e$.useSyncRefs)(g, t, (0, e3.useFloatingReference)(), n.actions.setInputElement),
                [m, _] = (0, te.useSlice)(n, e => [e.comboboxState, e.isTyping]),
                E = (0, eP.useDisposables)(),
                y = (0, eL.useEvent)(() => {
                    n.actions.onChange(null), n.state.optionsElement && (n.state.optionsElement.scrollTop = 0), n.actions.goToOption({
                        focus: ti.Focus.Nothing
                    })
                }),
                b = (0, M.useMemo)(() => {
                    var e;
                    return "function" == typeof c && void 0 !== o.value ? null != (e = c(o.value)) ? e : "" : "string" == typeof o.value ? o.value : ""
                }, [o.value, c]);
            (0, e2.useWatch)(([e, t], [i, r]) => {
                if (n.state.isTyping) return;
                let o = g.current;
                o && ((r === tm.Open && t === tm.Closed || e !== i) && (o.value = e), requestAnimationFrame(() => {
                    if (n.state.isTyping || !o || (0, eH.isActiveElement)(o)) return;
                    let {
                        selectionStart: e,
                        selectionEnd: t
                    } = o;
                    0 === Math.abs((null != t ? t : 0) - (null != e ? e : 0)) && 0 === e && o.setSelectionRange(o.value.length, o.value.length)
                }))
            }, [b, m, _]), (0, e2.useWatch)(([e], [t]) => {
                if (e === tm.Open && t === tm.Closed) {
                    if (n.state.isTyping) return;
                    let e = g.current;
                    if (!e) return;
                    let t = e.value,
                        {
                            selectionStart: i,
                            selectionEnd: r,
                            selectionDirection: o
                        } = e;
                    e.value = "", e.value = t, null !== o ? e.setSelectionRange(i, r, o) : e.setSelectionRange(i, r)
                }
            }, [m]);
            let I = (0, M.useRef)(!1),
                O = (0, eL.useEvent)(() => {
                    I.current = !0
                }),
                R = (0, eL.useEvent)(() => {
                    E.nextFrame(() => {
                        I.current = !1
                    })
                }),
                S = (0, eL.useEvent)(e => {
                    switch (n.actions.setIsTyping(!0), e.key) {
                        case tl.Keys.Enter:
                            if (n.state.comboboxState !== tm.Open || I.current) return;
                            if (e.preventDefault(), e.stopPropagation(), null === n.selectors.activeOptionIndex(n.state)) return void n.actions.closeCombobox();
                            n.actions.selectActiveOption(), o.mode === t_.Single && n.actions.closeCombobox();
                            break;
                        case tl.Keys.ArrowDown:
                            return e.preventDefault(), e.stopPropagation(), (0, tn.match)(n.state.comboboxState, {
                                [tm.Open]: () => n.actions.goToOption({
                                    focus: ti.Focus.Next
                                }),
                                [tm.Closed]: () => n.actions.openCombobox()
                            });
                        case tl.Keys.ArrowUp:
                            return e.preventDefault(), e.stopPropagation(), (0, tn.match)(n.state.comboboxState, {
                                [tm.Open]: () => n.actions.goToOption({
                                    focus: ti.Focus.Previous
                                }),
                                [tm.Closed]: () => {
                                    (0, eg.flushSync)(() => n.actions.openCombobox()), o.value || n.actions.goToOption({
                                        focus: ti.Focus.Last
                                    })
                                }
                            });
                        case tl.Keys.Home:
                            if (n.state.comboboxState === tm.Closed || e.shiftKey) break;
                            return e.preventDefault(), e.stopPropagation(), n.actions.goToOption({
                                focus: ti.Focus.First
                            });
                        case tl.Keys.PageUp:
                            return e.preventDefault(), e.stopPropagation(), n.actions.goToOption({
                                focus: ti.Focus.First
                            });
                        case tl.Keys.End:
                            if (n.state.comboboxState === tm.Closed || e.shiftKey) break;
                            return e.preventDefault(), e.stopPropagation(), n.actions.goToOption({
                                focus: ti.Focus.Last
                            });
                        case tl.Keys.PageDown:
                            return e.preventDefault(), e.stopPropagation(), n.actions.goToOption({
                                focus: ti.Focus.Last
                            });
                        case tl.Keys.Escape:
                            return n.state.comboboxState !== tm.Open ? void 0 : (e.preventDefault(), n.state.optionsElement && !o.optionsPropsRef.current.static && e.stopPropagation(), o.mode === t_.Single && null === o.value && y(), n.actions.closeCombobox());
                        case tl.Keys.Tab:
                            if (n.actions.setIsTyping(!1), n.state.comboboxState !== tm.Open) return;
                            o.mode === t_.Single && n.state.activationTrigger !== tE.Focus && n.actions.selectActiveOption(), n.actions.closeCombobox()
                    }
                }),
                T = (0, eL.useEvent)(e => {
                    null == u || u(e), o.mode === t_.Single && "" === e.target.value && y(), n.actions.openCombobox()
                }),
                w = (0, eL.useEvent)(e => {
                    var t, i, r;
                    let a = null != (t = e.relatedTarget) ? t : tt.history.find(t => t !== e.currentTarget);
                    if (!(null != (i = n.state.optionsElement) && i.contains(a)) && !(null != (r = n.state.buttonElement) && r.contains(a)) && n.state.comboboxState === tm.Open) return e.preventDefault(), o.mode === t_.Single && null === o.value && y(), n.actions.closeCombobox()
                }),
                N = (0, eL.useEvent)(e => {
                    var t, i, r;
                    let a = null != (t = e.relatedTarget) ? t : tt.history.find(t => t !== e.currentTarget);
                    null != (i = n.state.buttonElement) && i.contains(a) || null != (r = n.state.optionsElement) && r.contains(a) || o.disabled || o.immediate && n.state.comboboxState !== tm.Open && E.microTask(() => {
                        (0, eg.flushSync)(() => n.actions.openCombobox()), n.actions.setActivationTrigger(tE.Focus)
                    })
                }),
                A = (0, tu.useLabelledBy)(),
                C = (0, ts.useDescribedBy)(),
                {
                    isFocused: D,
                    focusProps: x
                } = (0, eh.useFocusRing)({
                    autoFocus: p
                }),
                {
                    isHovered: k,
                    hoverProps: P
                } = (0, ef.useHover)({
                    isDisabled: d
                }),
                U = (0, te.useSlice)(n, e => e.optionsElement),
                L = (0, eJ.useSlot)({
                    open: m === tm.Open,
                    disabled: d,
                    invalid: o.invalid,
                    hover: k,
                    focus: D,
                    autofocus: p
                }),
                F = (0, ta.mergeProps)({
                    ref: v,
                    id: l,
                    role: "combobox",
                    type: h,
                    "aria-controls": null == U ? void 0 : U.id,
                    "aria-expanded": m === tm.Open,
                    "aria-activedescendant": (0, te.useSlice)(n, n.selectors.activeDescendantId),
                    "aria-labelledby": A,
                    "aria-describedby": C,
                    "aria-autocomplete": "list",
                    defaultValue: null != (r = null != (i = e.defaultValue) ? i : void 0 !== o.defaultValue ? null == c ? void 0 : c(o.defaultValue) : null) ? r : o.defaultValue,
                    disabled: d || void 0,
                    autoFocus: p,
                    onCompositionStart: O,
                    onCompositionEnd: R,
                    onKeyDown: S,
                    onChange: T,
                    onFocus: N,
                    onBlur: w
                }, x, P);
            return (0, ta.useRender)()({
                ourProps: F,
                theirProps: f,
                slot: L,
                defaultTag: "input",
                name: "Combobox.Input"
            })
        }),
        tM = tu.Label,
        tF = (0, ta.forwardRefWithAs)(function(e, t) {
            var i, r, n;
            let o = (0, M.useId)(),
                {
                    id: a = `headlessui-combobox-options-${o}`,
                    hold: s = !1,
                    anchor: l,
                    portal: u = !1,
                    modal: c = !0,
                    transition: d = !1,
                    ...p
                } = e,
                h = tT("Combobox.Options"),
                f = tA("Combobox.Options"),
                g = (0, e3.useResolvedAnchor)(l);
            g && (u = !0);
            let [v, m] = (0, e3.useFloatingPanel)(g), [_, E] = (0, M.useState)(null), y = (0, e3.useFloatingPanelProps)(), b = (0, e$.useSyncRefs)(t, g ? v : null, h.actions.setOptionsElement, E), [I, O, R, S, T] = (0, te.useSlice)(h, e => [e.comboboxState, e.inputElement, e.buttonElement, e.optionsElement, e.activationTrigger]), w = (0, eq.useOwnerDocument)(O || R), N = (0, eq.useOwnerDocument)(S), A = (0, e7.useOpenClosed)(), [C, D] = (0, e0.useTransition)(d, _, null !== A ? (A & e7.State.Open) === e7.State.Open : I === tm.Open);
            (0, eB.useOnDisappear)(C, O, h.actions.closeCombobox);
            let x = !f.__demoMode && c && I === tm.Open;
            (0, eQ.useScrollLock)(x, N);
            let k = !f.__demoMode && c && I === tm.Open;
            (0, eF.useInertOthers)(k, {
                allowed: (0, M.useCallback)(() => [O, R, S], [O, R, S])
            });
            let P = !(0, te.useSlice)(h, h.selectors.didInputMove) && C;
            (0, eV.useIsoMorphicEffect)(() => {
                var t;
                f.optionsPropsRef.current.static = null != (t = e.static) && t
            }, [f.optionsPropsRef, e.static]), (0, eV.useIsoMorphicEffect)(() => {
                f.optionsPropsRef.current.hold = s
            }, [f.optionsPropsRef, s]), (0, e1.useTreeWalker)(I === tm.Open, {
                container: S,
                accept: e => "option" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                walk(e) {
                    e.setAttribute("role", "none")
                }
            });
            let U = (0, tu.useLabelledBy)([null == R ? void 0 : R.id]),
                L = (0, eJ.useSlot)({
                    open: I === tm.Open,
                    option: void 0
                }),
                F = (0, eL.useEvent)(() => {
                    h.actions.setActivationTrigger(tE.Pointer)
                }),
                V = (0, eL.useEvent)(e => {
                    e.preventDefault(), h.actions.setActivationTrigger(tE.Pointer)
                }),
                z = (0, ta.mergeProps)(g ? y() : {}, {
                    "aria-labelledby": U,
                    role: "listbox",
                    "aria-multiselectable": f.mode === t_.Multi || void 0,
                    id: a,
                    ref: b,
                    style: { ...p.style,
                        ...m,
                        "--input-width": (0, eU.useElementSize)(C, O, !0).width,
                        "--button-width": (0, eU.useElementSize)(C, R, !0).width
                    },
                    onWheel: T === tE.Pointer ? void 0 : F,
                    onMouseDown: V,
                    ...(0, e0.transitionDataAttributes)(D)
                }),
                B = C && I === tm.Closed && !e.static,
                G = (0, e6.useFrozenData)(B, null == (i = f.virtual) ? void 0 : i.options),
                q = (0, e6.useFrozenData)(B, f.value),
                j = (0, M.useCallback)(e => f.compare(q, e), [f.compare, q]),
                K = (0, M.useMemo)(() => {
                    if (!f.virtual) return f;
                    if (void 0 === G) throw Error("Missing `options` in virtual mode");
                    return G !== f.virtual.options ? { ...f,
                        virtual: { ...f.virtual,
                            options: G
                        }
                    } : f
                }, [f, G, null == (r = f.virtual) ? void 0 : r.options]);
            f.virtual && Object.assign(p, {
                children: M.default.createElement(tN.Provider, {
                    value: K
                }, M.default.createElement(tD, {
                    slot: L
                }, p.children))
            });
            let H = (0, ta.useRender)(),
                W = (0, M.useMemo)(() => f.mode === t_.Multi ? f : { ...f,
                    isSelected: j
                }, [f, j]);
            return M.default.createElement(td.Portal, {
                enabled: !!u && (e.static || C),
                ownerDocument: w
            }, M.default.createElement(tN.Provider, {
                value: W
            }, H({
                ourProps: z,
                theirProps: { ...p,
                    children: M.default.createElement(e6.Frozen, {
                        freeze: B
                    }, "function" == typeof p.children ? null == (n = p.children) ? void 0 : n.call(p, L) : p.children)
                },
                slot: L,
                defaultTag: "div",
                features: tk,
                visible: P,
                name: "Combobox.Options"
            })))
        }),
        tV = (0, ta.forwardRefWithAs)(function(e, t) {
            var i, r, n;
            let o = tA("Combobox.Option"),
                a = tT("Combobox.Option"),
                s = (0, M.useId)(),
                {
                    id: l = `headlessui-combobox-option-${s}`,
                    value: u,
                    disabled: c = null != (n = null == (r = null == (i = o.virtual) ? void 0 : i.disabled) ? void 0 : r.call(i, u)) && n,
                    order: d = null,
                    ...p
                } = e,
                [h] = (0, te.useSlice)(a, e => [e.inputElement]),
                f = eY(h),
                g = (0, te.useSlice)(a, (0, M.useCallback)(e => a.selectors.isActive(e, u, l), [u, l])),
                v = o.isSelected(u),
                m = (0, M.useRef)(null),
                _ = (0, ez.useLatestValue)({
                    disabled: c,
                    value: u,
                    domRef: m,
                    order: d
                }),
                E = (0, M.useContext)(tC),
                y = (0, e$.useSyncRefs)(t, m, E ? E.measureElement : null),
                b = (0, eL.useEvent)(() => {
                    a.actions.setIsTyping(!1), a.actions.onChange(u)
                });
            (0, eV.useIsoMorphicEffect)(() => a.actions.registerOption(l, _), [_, l]);
            let I = (0, te.useSlice)(a, (0, M.useCallback)(e => a.selectors.shouldScrollIntoView(e, u, l), [u, l]));
            (0, eV.useIsoMorphicEffect)(() => {
                if (I) return (0, tr.disposables)().requestAnimationFrame(() => {
                    var e, t;
                    null == (t = null == (e = m.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                        block: "nearest"
                    })
                })
            }, [I, m]);
            let O = (0, eL.useEvent)(e => {
                    e.preventDefault(), e.button === tc.MouseButton.Left && (c || (b(), (0, to.isMobile)() || requestAnimationFrame(() => f()), o.mode === t_.Single && a.actions.closeCombobox()))
                }),
                R = (0, eL.useEvent)(() => {
                    if (c) return a.actions.goToOption({
                        focus: ti.Focus.Nothing
                    });
                    let e = o.calculateIndex(u);
                    a.actions.goToOption({
                        focus: ti.Focus.Specific,
                        idx: e
                    })
                }),
                S = (0, eZ.useTrackedPointer)(),
                T = (0, eL.useEvent)(e => S.update(e)),
                w = (0, eL.useEvent)(e => {
                    if (!S.wasMoved(e) || c || g && a.state.activationTrigger === tE.Pointer) return;
                    let t = o.calculateIndex(u);
                    a.actions.goToOption({
                        focus: ti.Focus.Specific,
                        idx: t
                    }, tE.Pointer)
                }),
                N = (0, eL.useEvent)(e => {
                    S.wasMoved(e) && (c || g && (o.optionsPropsRef.current.hold || a.state.activationTrigger === tE.Pointer && a.actions.goToOption({
                        focus: ti.Focus.Nothing
                    })))
                }),
                A = (0, eJ.useSlot)({
                    active: g,
                    focus: g,
                    selected: v,
                    disabled: c
                });
            return (0, ta.useRender)()({
                ourProps: {
                    id: l,
                    ref: y,
                    role: "option",
                    tabIndex: !0 === c ? void 0 : -1,
                    "aria-disabled": !0 === c || void 0,
                    "aria-selected": v,
                    disabled: void 0,
                    onMouseDown: O,
                    onFocus: R,
                    onPointerEnter: T,
                    onMouseEnter: T,
                    onPointerMove: w,
                    onMouseMove: w,
                    onPointerLeave: N,
                    onMouseLeave: N
                },
                theirProps: p,
                slot: A,
                defaultTag: "div",
                name: "Combobox.Option"
            })
        }),
        tz = Object.assign(tP, {
            Input: tL,
            Button: tU,
            Label: tM,
            Options: tF,
            Option: tV
        });
    var tB = e.i(28335),
        tG = e.i(448985),
        tq = e.i(226586),
        tj = e.i(778530),
        tK = e.i(330317),
        tH = tp,
        tW = Object.defineProperty,
        tY = (e, t, i) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? tW(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i
            }) : e[r] = i, i
        },
        tX = ((o = tX || {})[o.Open = 0] = "Open", o[o.Closed = 1] = "Closed", o),
        tQ = ((a = tQ || {})[a.OpenPopover = 0] = "OpenPopover", a[a.ClosePopover = 1] = "ClosePopover", a[a.SetButton = 2] = "SetButton", a[a.SetButtonId = 3] = "SetButtonId", a[a.SetPanel = 4] = "SetPanel", a[a.SetPanelId = 5] = "SetPanelId", a);
    let tJ = {
        0: e => 0 === e.popoverState ? e : { ...e,
            popoverState: 0,
            __demoMode: !1
        },
        1: e => 1 === e.popoverState ? e : { ...e,
            popoverState: 1,
            __demoMode: !1
        },
        2: (e, t) => e.button === t.button ? e : { ...e,
            button: t.button
        },
        3: (e, t) => e.buttonId === t.buttonId ? e : { ...e,
            buttonId: t.buttonId
        },
        4: (e, t) => e.panel === t.panel ? e : { ...e,
            panel: t.panel
        },
        5: (e, t) => e.panelId === t.panelId ? e : { ...e,
            panelId: t.panelId
        }
    };
    class t$ extends tH.Machine {
        constructor(e) {
            super(e), tY(this, "actions", {
                close: () => this.send({
                    type: 1
                }),
                refocusableClose: e => {
                    this.actions.close();
                    let t = e ? eK.isHTMLElement(e) ? e : "current" in e && eK.isHTMLElement(e.current) ? e.current : this.state.button : this.state.button;
                    null == t || t.focus()
                },
                open: () => this.send({
                    type: 0
                }),
                setButtonId: e => this.send({
                    type: 3,
                    buttonId: e
                }),
                setButton: e => this.send({
                    type: 2,
                    button: e
                }),
                setPanelId: e => this.send({
                    type: 5,
                    panelId: e
                }),
                setPanel: e => this.send({
                    type: 4,
                    panel: e
                })
            }), tY(this, "selectors", {
                isPortalled: e => {
                    var t;
                    if (!e.button || !e.panel) return !1;
                    let i = null != (t = (0, eH.getOwnerDocument)(e.button)) ? t : document;
                    for (let t of i.querySelectorAll("body > *"))
                        if (Number(null == t ? void 0 : t.contains(e.button)) ^ Number(null == t ? void 0 : t.contains(e.panel))) return !0;
                    let r = (0, tf.getFocusableElements)(i),
                        n = r.indexOf(e.button),
                        o = (n + r.length - 1) % r.length,
                        a = (n + 1) % r.length,
                        s = r[o],
                        l = r[a];
                    return !e.panel.contains(s) && !e.panel.contains(l)
                }
            }); {
                let e = this.state.id,
                    t = e9.stackMachines.get(null);
                this.on(0, () => t.actions.push(e)), this.on(1, () => t.actions.pop(e))
            }
        }
        static new({
            id: e,
            __demoMode: t = !1
        }) {
            return new t$({
                id: e,
                __demoMode: t,
                popoverState: +!t,
                buttons: {
                    current: []
                },
                button: null,
                buttonId: null,
                panel: null,
                panelId: null,
                beforePanelSentinel: {
                    current: null
                },
                afterPanelSentinel: {
                    current: null
                },
                afterButtonSentinel: {
                    current: null
                }
            })
        }
        reduce(e, t) {
            return (0, tn.match)(t.type, tJ, e, t)
        }
    }
    let tZ = (0, M.createContext)(null);

    function t0(e) {
        let t = (0, M.useContext)(tZ);
        if (null === t) {
            let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(t, t0), t
        }
        return t
    }
    let t1 = (0, M.createContext)(null);

    function t2() {
        return (0, M.useContext)(t1)
    }
    t1.displayName = "PopoverGroupContext";
    let t5 = (0, M.createContext)(null);
    t5.displayName = "PopoverPanelContext";
    let t3 = ta.RenderFeatures.RenderStrategy | ta.RenderFeatures.Static;

    function t4(e, t) {
        let i = (0, M.useId)(),
            {
                id: r = `headlessui-popover-backdrop-${i}`,
                transition: n = !1,
                ...o
            } = e,
            a = t0("Popover.Backdrop"),
            s = (0, te.useSlice)(a, (0, M.useCallback)(e => e.popoverState, [])),
            [l, u] = (0, M.useState)(null),
            c = (0, e$.useSyncRefs)(t, u),
            d = (0, e7.useOpenClosed)(),
            [p, h] = (0, e0.useTransition)(n, l, null !== d ? (d & e7.State.Open) === e7.State.Open : s === tX.Open),
            f = (0, eL.useEvent)(e => {
                if ((0, tK.isDisabledReactIssue7711)(e.currentTarget)) return e.preventDefault();
                a.actions.close()
            }),
            g = (0, eJ.useSlot)({
                open: s === tX.Open
            }),
            v = {
                ref: c,
                id: r,
                "aria-hidden": !0,
                onClick: f,
                ...(0, e0.transitionDataAttributes)(h)
            };
        return (0, ta.useRender)()({
            ourProps: v,
            theirProps: o,
            slot: g,
            defaultTag: "div",
            features: t3,
            visible: p,
            name: "Popover.Backdrop"
        })
    }
    let t6 = ta.RenderFeatures.RenderStrategy | ta.RenderFeatures.Static,
        t8 = (0, ta.forwardRefWithAs)(function(e, t) {
            var i;
            let r = (0, M.useId)(),
                {
                    __demoMode: n = !1,
                    ...o
                } = e,
                a = function({
                    id: e,
                    __demoMode: t = !1
                }) {
                    let i = (0, M.useMemo)(() => t$.new({
                        id: e,
                        __demoMode: t
                    }), []);
                    return (0, tR.useOnUnmount)(() => i.dispose()), i
                }({
                    id: r,
                    __demoMode: n
                }),
                s = (0, M.useRef)(null),
                l = (0, e$.useSyncRefs)(t, (0, e$.optionalRef)(e => {
                    s.current = e
                })),
                [u, c, d, p, h] = (0, te.useSlice)(a, (0, M.useCallback)(e => [e.popoverState, e.button, e.panel, e.buttonId, e.panelId], [])),
                f = (0, eq.useRootDocument)(null != (i = s.current) ? i : c),
                g = (0, ez.useLatestValue)(p),
                v = (0, ez.useLatestValue)(h),
                m = (0, M.useMemo)(() => ({
                    buttonId: g,
                    panelId: v,
                    close: a.actions.close
                }), [g, v, a]),
                _ = t2(),
                E = null == _ ? void 0 : _.registerPopover,
                y = (0, eL.useEvent)(() => {
                    var e, t;
                    let i = (0, eH.getActiveElement)(null != (e = s.current) ? e : c);
                    return null != (t = null == _ ? void 0 : _.isFocusWithinPopoverGroup()) ? t : i && ((null == c ? void 0 : c.contains(i)) || (null == d ? void 0 : d.contains(i)))
                });
            (0, M.useEffect)(() => null == E ? void 0 : E(m), [E, m]);
            let [b, I] = (0, td.useNestedPortals)(), O = (0, tB.useMainTreeNode)(c), R = (0, tB.useRootContainers)({
                mainTreeNode: O,
                portals: b,
                defaultContainers: [{
                    get current() {
                        return a.state.button
                    }
                }, {
                    get current() {
                        return a.state.panel
                    }
                }]
            });
            (0, eW.useEventListener)(f, "focus", e => {
                var t, i, r, n, o, s;
                e.target !== window && eK.isHTMLorSVGElement(e.target) && a.state.popoverState === tX.Open && (y() || a.state.button && a.state.panel && (R.contains(e.target) || null != (i = null == (t = a.state.beforePanelSentinel.current) ? void 0 : t.contains) && i.call(t, e.target) || null != (n = null == (r = a.state.afterPanelSentinel.current) ? void 0 : r.contains) && n.call(r, e.target) || null != (s = null == (o = a.state.afterButtonSentinel.current) ? void 0 : o.contains) && s.call(o, e.target) || a.actions.close()))
            }, !0);
            let S = u === tX.Open;
            (0, eG.useOutsideClick)(S, R.resolveContainers, (e, t) => {
                a.actions.close(), (0, tf.isFocusableElement)(t, tf.FocusableMode.Loose) || (e.preventDefault(), null == c || c.focus())
            });
            let T = (0, eJ.useSlot)({
                    open: u === tX.Open,
                    close: a.actions.refocusableClose
                }),
                w = (0, te.useSlice)(a, (0, M.useCallback)(e => (0, tn.match)(e.popoverState, {
                    [tX.Open]: e7.State.Open,
                    [tX.Closed]: e7.State.Closed
                }), [])),
                N = (0, ta.useRender)();
            return M.default.createElement(tB.MainTreeProvider, {
                node: O
            }, M.default.createElement(e3.FloatingProvider, null, M.default.createElement(t5.Provider, {
                value: null
            }, M.default.createElement(tZ.Provider, {
                value: a
            }, M.default.createElement(tq.CloseProvider, {
                value: a.actions.refocusableClose
            }, M.default.createElement(e7.OpenClosedProvider, {
                value: w
            }, M.default.createElement(I, null, N({
                ourProps: {
                    ref: l
                },
                theirProps: o,
                slot: T,
                defaultTag: "div",
                name: "Popover"
            }))))))))
        }),
        t7 = (0, ta.forwardRefWithAs)(function(e, t) {
            let i = (0, M.useId)(),
                {
                    id: r = `headlessui-popover-button-${i}`,
                    disabled: n = !1,
                    autoFocus: o = !1,
                    ...a
                } = e,
                s = t0("Popover.Button"),
                [l, u, c, d, p, h, f] = (0, te.useSlice)(s, (0, M.useCallback)(e => [e.popoverState, s.selectors.isPortalled(e), e.button, e.buttonId, e.panel, e.panelId, e.afterButtonSentinel], [])),
                g = (0, M.useRef)(null),
                v = `headlessui-focus-sentinel-${(0,M.useId)()}`,
                m = t2(),
                _ = null == m ? void 0 : m.closeOthers,
                E = null !== (0, M.useContext)(t5);
            (0, M.useEffect)(() => {
                if (!E) return s.actions.setButtonId(r), () => s.actions.setButtonId(null)
            }, [E, r, s]);
            let [y] = (0, M.useState)(() => Symbol()), b = (0, e$.useSyncRefs)(g, t, (0, e3.useFloatingReference)(), (0, eL.useEvent)(e => {
                if (!E) {
                    if (e) s.state.buttons.current.push(y);
                    else {
                        let e = s.state.buttons.current.indexOf(y); - 1 !== e && s.state.buttons.current.splice(e, 1)
                    }
                    s.state.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e && s.actions.setButton(e)
                }
            })), I = (0, e$.useSyncRefs)(g, t), O = (0, eL.useEvent)(e => {
                var t, i, r;
                if (E) {
                    if (s.state.popoverState === tX.Closed) return;
                    switch (e.key) {
                        case tl.Keys.Space:
                        case tl.Keys.Enter:
                            e.preventDefault(), null == (i = (t = e.target).click) || i.call(t), s.actions.close(), null == (r = s.state.button) || r.focus()
                    }
                } else switch (e.key) {
                    case tl.Keys.Space:
                    case tl.Keys.Enter:
                        e.preventDefault(), e.stopPropagation(), s.state.popoverState === tX.Closed ? (null == _ || _(s.state.buttonId), s.actions.open()) : s.actions.close();
                        break;
                    case tl.Keys.Escape:
                        if (s.state.popoverState !== tX.Open) return null == _ ? void 0 : _(s.state.buttonId);
                        if (!g.current) return;
                        let n = (0, eH.getActiveElement)(g.current);
                        if (n && !g.current.contains(n)) return;
                        e.preventDefault(), e.stopPropagation(), s.actions.close()
                }
            }), R = (0, eL.useEvent)(e => {
                E || e.key === tl.Keys.Space && e.preventDefault()
            }), S = (0, eL.useEvent)(e => {
                var t, i;
                (0, tK.isDisabledReactIssue7711)(e.currentTarget) || n || (E ? (s.actions.close(), null == (t = s.state.button) || t.focus()) : (e.preventDefault(), e.stopPropagation(), s.state.popoverState === tX.Closed ? (null == _ || _(s.state.buttonId), s.actions.open()) : s.actions.close(), null == (i = s.state.button) || i.focus()))
            }), T = (0, eL.useEvent)(e => {
                e.preventDefault(), e.stopPropagation()
            }), {
                isFocusVisible: w,
                focusProps: N
            } = (0, eh.useFocusRing)({
                autoFocus: o
            }), {
                isHovered: A,
                hoverProps: C
            } = (0, ef.useHover)({
                isDisabled: n
            }), {
                pressed: D,
                pressProps: x
            } = (0, eC.useActivePress)({
                disabled: n
            }), k = l === tX.Open, P = (0, eJ.useSlot)({
                open: k,
                active: D || k,
                disabled: n,
                hover: A,
                focus: w,
                autofocus: o
            }), U = (0, eX.useResolveButtonType)(e, c), L = E ? (0, ta.mergeProps)({
                ref: I,
                type: U,
                onKeyDown: O,
                onClick: S,
                disabled: n || void 0,
                autoFocus: o
            }, N, C, x) : (0, ta.mergeProps)({
                ref: b,
                id: d,
                type: U,
                "aria-expanded": l === tX.Open,
                "aria-controls": p ? h : void 0,
                disabled: n || void 0,
                autoFocus: o,
                onKeyDown: O,
                onKeyUp: R,
                onClick: S,
                onMouseDown: T
            }, N, C, x), F = (0, tG.useTabDirection)(), V = (0, eL.useEvent)(() => {
                if (!eK.isHTMLElement(s.state.panel)) return;
                let e = s.state.panel;
                (0, tn.match)(F.current, {
                    [tG.Direction.Forwards]: () => (0, tf.focusIn)(e, tf.Focus.First),
                    [tG.Direction.Backwards]: () => (0, tf.focusIn)(e, tf.Focus.Last)
                }) === tf.FocusResult.Error && (0, tf.focusIn)((0, tf.getFocusableElements)((0, eH.getRootNode)(s.state.button)).filter(e => "true" !== e.dataset.headlessuiFocusGuard), (0, tn.match)(F.current, {
                    [tG.Direction.Forwards]: tf.Focus.Next,
                    [tG.Direction.Backwards]: tf.Focus.Previous
                }), {
                    relativeTo: s.state.button
                })
            }), z = (0, ta.useRender)();
            return M.default.createElement(M.default.Fragment, null, z({
                ourProps: L,
                theirProps: a,
                slot: P,
                defaultTag: "button",
                name: "Popover.Button"
            }), k && !E && u && M.default.createElement(tj.Hidden, {
                id: v,
                ref: f,
                features: tj.HiddenFeatures.Focusable,
                "data-headlessui-focus-guard": !0,
                as: "button",
                type: "button",
                onFocus: V
            }))
        }),
        t9 = (0, ta.forwardRefWithAs)(t4),
        ie = (0, ta.forwardRefWithAs)(t4),
        it = (0, ta.forwardRefWithAs)(function(e, t) {
            let i = (0, M.useId)(),
                {
                    id: r = `headlessui-popover-panel-${i}`,
                    focus: n = !1,
                    anchor: o,
                    portal: a = !1,
                    modal: s = !1,
                    transition: l = !1,
                    ...u
                } = e,
                c = t0("Popover.Panel"),
                d = (0, te.useSlice)(c, c.selectors.isPortalled),
                [p, h, f, g, v] = (0, te.useSlice)(c, (0, M.useCallback)(e => [e.popoverState, e.button, e.__demoMode, e.beforePanelSentinel, e.afterPanelSentinel], [])),
                m = `headlessui-focus-sentinel-before-${i}`,
                _ = `headlessui-focus-sentinel-after-${i}`,
                E = (0, M.useRef)(null),
                y = (0, e3.useResolvedAnchor)(o),
                [b, I] = (0, e3.useFloatingPanel)(y),
                O = (0, e3.useFloatingPanelProps)();
            y && (a = !0);
            let [R, S] = (0, M.useState)(null), T = (0, e$.useSyncRefs)(E, t, y ? b : null, c.actions.setPanel, S), w = (0, eq.useOwnerDocument)(h), N = (0, eq.useOwnerDocument)(E.current);
            (0, eV.useIsoMorphicEffect)(() => (c.actions.setPanelId(r), () => c.actions.setPanelId(null)), [r, c]);
            let A = (0, e7.useOpenClosed)(),
                [C, D] = (0, e0.useTransition)(l, R, null !== A ? (A & e7.State.Open) === e7.State.Open : p === tX.Open);
            (0, eB.useOnDisappear)(C, h, c.actions.close), (0, eQ.useScrollLock)(!f && s && C, N);
            let x = (0, eL.useEvent)(e => {
                var t;
                if (e.key === tl.Keys.Escape) {
                    if (c.state.popoverState !== tX.Open || !E.current) return;
                    let i = (0, eH.getActiveElement)(E.current);
                    if (i && !E.current.contains(i)) return;
                    e.preventDefault(), e.stopPropagation(), c.actions.close(), null == (t = c.state.button) || t.focus()
                }
            });
            (0, M.useEffect)(() => {
                var t;
                e.static || p === tX.Closed && (null == (t = e.unmount) || t) && c.actions.setPanel(null)
            }, [p, e.unmount, e.static, c]), (0, M.useEffect)(() => {
                if (f || !n || p !== tX.Open || !E.current) return;
                let e = (0, eH.getActiveElement)(E.current);
                E.current.contains(e) || (0, tf.focusIn)(E.current, tf.Focus.First)
            }, [f, n, E.current, p]);
            let k = (0, eJ.useSlot)({
                    open: p === tX.Open,
                    close: c.actions.refocusableClose
                }),
                P = (0, ta.mergeProps)(y ? O() : {}, {
                    ref: T,
                    id: r,
                    onKeyDown: x,
                    onBlur: n && p === tX.Open ? e => {
                        var t, i, r, n, o;
                        let a = e.relatedTarget;
                        a && E.current && (null != (t = E.current) && t.contains(a) || (c.actions.close(), (null != (r = null == (i = g.current) ? void 0 : i.contains) && r.call(i, a) || null != (o = null == (n = v.current) ? void 0 : n.contains) && o.call(n, a)) && a.focus({
                            preventScroll: !0
                        })))
                    } : void 0,
                    tabIndex: -1,
                    style: { ...u.style,
                        ...I,
                        "--button-width": (0, eU.useElementSize)(C, h, !0).width
                    },
                    ...(0, e0.transitionDataAttributes)(D)
                }),
                U = (0, tG.useTabDirection)(),
                L = (0, eL.useEvent)(() => {
                    let e = E.current;
                    e && (0, tn.match)(U.current, {
                        [tG.Direction.Forwards]: () => {
                            var t;
                            (0, tf.focusIn)(e, tf.Focus.First) === tf.FocusResult.Error && (null == (t = c.state.afterPanelSentinel.current) || t.focus())
                        },
                        [tG.Direction.Backwards]: () => {
                            var e;
                            null == (e = c.state.button) || e.focus({
                                preventScroll: !0
                            })
                        }
                    })
                }),
                F = (0, eL.useEvent)(() => {
                    let e = E.current;
                    e && (0, tn.match)(U.current, {
                        [tG.Direction.Forwards]: () => {
                            var e;
                            if (!c.state.button) return;
                            let t = null != (e = (0, eH.getRootNode)(c.state.button)) ? e : document.body,
                                i = (0, tf.getFocusableElements)(t),
                                r = i.indexOf(c.state.button),
                                n = i.slice(0, r + 1),
                                o = [...i.slice(r + 1), ...n];
                            for (let e of o.slice())
                                if ("true" === e.dataset.headlessuiFocusGuard || null != R && R.contains(e)) {
                                    let t = o.indexOf(e); - 1 !== t && o.splice(t, 1)
                                }(0, tf.focusIn)(o, tf.Focus.First, {
                                    sorted: !1
                                })
                        },
                        [tG.Direction.Backwards]: () => {
                            var t;
                            (0, tf.focusIn)(e, tf.Focus.Previous) === tf.FocusResult.Error && (null == (t = c.state.button) || t.focus())
                        }
                    })
                }),
                V = (0, ta.useRender)();
            return M.default.createElement(e7.ResetOpenClosedProvider, null, M.default.createElement(t5.Provider, {
                value: r
            }, M.default.createElement(tq.CloseProvider, {
                value: c.actions.refocusableClose
            }, M.default.createElement(td.Portal, {
                enabled: !!a && (e.static || C),
                ownerDocument: w
            }, C && d && M.default.createElement(tj.Hidden, {
                id: m,
                ref: g,
                features: tj.HiddenFeatures.Focusable,
                "data-headlessui-focus-guard": !0,
                as: "button",
                type: "button",
                onFocus: L
            }), V({
                ourProps: P,
                theirProps: u,
                slot: k,
                defaultTag: "div",
                features: t6,
                visible: C,
                name: "Popover.Panel"
            }), C && d && M.default.createElement(tj.Hidden, {
                id: _,
                ref: v,
                features: tj.HiddenFeatures.Focusable,
                "data-headlessui-focus-guard": !0,
                as: "button",
                type: "button",
                onFocus: F
            })))))
        }),
        ii = Object.assign(t8, {
            Button: t7,
            Backdrop: ie,
            Overlay: t9,
            Panel: it,
            Group: (0, ta.forwardRefWithAs)(function(e, t) {
                let i = (0, M.useRef)(null),
                    r = (0, e$.useSyncRefs)(i, t),
                    [n, o] = (0, M.useState)([]),
                    a = (0, eL.useEvent)(e => {
                        o(t => {
                            let i = t.indexOf(e);
                            if (-1 !== i) {
                                let e = t.slice();
                                return e.splice(i, 1), e
                            }
                            return t
                        })
                    }),
                    s = (0, eL.useEvent)(e => (o(t => [...t, e]), () => a(e))),
                    l = (0, eL.useEvent)(() => {
                        var e;
                        let t = (0, eH.getRootNode)(i.current);
                        if (!t) return !1;
                        let r = (0, eH.getActiveElement)(i.current);
                        return !!(null != (e = i.current) && e.contains(r)) || n.some(e => {
                            var i, n;
                            return (null == (i = t.getElementById(e.buttonId.current)) ? void 0 : i.contains(r)) || (null == (n = t.getElementById(e.panelId.current)) ? void 0 : n.contains(r))
                        })
                    }),
                    u = (0, eL.useEvent)(e => {
                        for (let t of n) t.buttonId.current !== e && t.close()
                    }),
                    c = (0, M.useMemo)(() => ({
                        registerPopover: s,
                        unregisterPopover: a,
                        isFocusWithinPopoverGroup: l,
                        closeOthers: u
                    }), [s, a, l, u]),
                    d = (0, eJ.useSlot)({}),
                    p = (0, ta.useRender)();
                return M.default.createElement(tB.MainTreeProvider, null, M.default.createElement(t1.Provider, {
                    value: c
                }, p({
                    ourProps: {
                        ref: r
                    },
                    theirProps: e,
                    slot: d,
                    defaultTag: "div",
                    name: "Popover.Group"
                })))
            })
        });
    var ir = e.i(447105);
    let io = (0, M.createContext)(null);
    io.displayName = "GroupContext";
    let ia = M.Fragment,
        is = Object.assign((0, ta.forwardRefWithAs)(function(e, t) {
            var i;
            let r = (0, M.useId)(),
                n = (0, e8.useProvidedId)(),
                o = (0, e5.useDisabled)(),
                {
                    id: a = n || `headlessui-switch-${r}`,
                    disabled: s = o || !1,
                    checked: l,
                    defaultChecked: u,
                    onChange: c,
                    name: d,
                    value: p,
                    form: h,
                    autoFocus: f = !1,
                    ...g
                } = e,
                v = (0, M.useContext)(io),
                [m, _] = (0, M.useState)(null),
                E = (0, M.useRef)(null),
                y = (0, e$.useSyncRefs)(E, t, null === v ? null : v.setSwitch, _),
                b = (0, ek.useDefaultValue)(u),
                [I, O] = (0, ex.useControllable)(l, c, null != b && b),
                R = (0, eP.useDisposables)(),
                [S, T] = (0, M.useState)(!1),
                w = (0, eL.useEvent)(() => {
                    T(!0), null == O || O(!I), R.nextFrame(() => {
                        T(!1)
                    })
                }),
                N = (0, eL.useEvent)(e => {
                    if ((0, tK.isDisabledReactIssue7711)(e.currentTarget)) return e.preventDefault();
                    e.preventDefault(), w()
                }),
                A = (0, eL.useEvent)(e => {
                    e.key === tl.Keys.Space ? (e.preventDefault(), w()) : e.key === tl.Keys.Enter && (0, ir.attemptSubmit)(e.currentTarget)
                }),
                C = (0, eL.useEvent)(e => e.preventDefault()),
                D = (0, tu.useLabelledBy)(),
                x = (0, ts.useDescribedBy)(),
                {
                    isFocusVisible: k,
                    focusProps: P
                } = (0, eh.useFocusRing)({
                    autoFocus: f
                }),
                {
                    isHovered: U,
                    hoverProps: L
                } = (0, ef.useHover)({
                    isDisabled: s
                }),
                {
                    pressed: F,
                    pressProps: V
                } = (0, eC.useActivePress)({
                    disabled: s
                }),
                z = (0, eJ.useSlot)({
                    checked: I,
                    disabled: s,
                    hover: U,
                    focus: k,
                    active: F,
                    autofocus: f,
                    changing: S
                }),
                B = (0, ta.mergeProps)({
                    id: a,
                    ref: y,
                    role: "switch",
                    type: (0, eX.useResolveButtonType)(e, m),
                    tabIndex: -1 === e.tabIndex ? 0 : null != (i = e.tabIndex) ? i : 0,
                    "aria-checked": I,
                    "aria-labelledby": D,
                    "aria-describedby": x,
                    disabled: s || void 0,
                    autoFocus: f,
                    onClick: N,
                    onKeyUp: A,
                    onKeyPress: C
                }, P, L, V),
                G = (0, M.useCallback)(() => {
                    if (void 0 !== b) return null == O ? void 0 : O(b)
                }, [O, b]),
                q = (0, ta.useRender)();
            return M.default.createElement(M.default.Fragment, null, null != d && M.default.createElement(e4.FormFields, {
                disabled: s,
                data: {
                    [d]: p || "on"
                },
                overrides: {
                    type: "checkbox",
                    checked: I
                },
                form: h,
                onReset: G
            }), q({
                ourProps: B,
                theirProps: g,
                slot: z,
                defaultTag: "button",
                name: "Switch"
            }))
        }), {
            Group: function(e) {
                var t;
                let [i, r] = (0, M.useState)(null), [n, o] = (0, tu.useLabels)(), [a, s] = (0, ts.useDescriptions)(), l = (0, M.useMemo)(() => ({
                    switch: i,
                    setSwitch: r
                }), [i, r]), u = (0, ta.useRender)();
                return M.default.createElement(s, {
                    name: "Switch.Description",
                    value: a
                }, M.default.createElement(o, {
                    name: "Switch.Label",
                    value: n,
                    props: {
                        htmlFor: null == (t = l.switch) ? void 0 : t.id,
                        onClick(e) {
                            i && (eK.isHTMLLabelElement(e.currentTarget) && e.preventDefault(), i.click(), i.focus({
                                preventScroll: !0
                            }))
                        }
                    }
                }, M.default.createElement(io.Provider, {
                    value: l
                }, u({
                    ourProps: {},
                    theirProps: e,
                    slot: {},
                    defaultTag: ia,
                    name: "Switch.Group"
                }))))
            },
            Label: tu.Label,
            Description: ts.Description
        });
    e.i(295485), e.i(480495), e.i(595990), e.i(219501), e.i(495854);
    e.i(643781);
    e.i(989606), e.i(79564);
    var il = e.i(194182),
        iu = e.i(292905),
        ic = e.i(25741),
        id = e.i(477180),
        ip = e.i(770948),
        ih = e.i(215217),
        ig = e.i(468411);
    let iv = () => {
        let e, t, i, r, n, o, a = (0, L.c)(9),
            {
                addCartAttributes: s
            } = (() => {
                let e, t, i = (0, L.c)(8),
                    {
                        language: r,
                        country: n
                    } = (0, id.default)(),
                    {
                        updateCartCache: o
                    } = (0, ip.default)(),
                    {
                        cart: a
                    } = (0, ih.default)(),
                    {
                        isPreview: s
                    } = (0, F.useRouter)();
                i[0] !== a || i[1] !== n || i[2] !== s || i[3] !== r || i[4] !== o ? (e = {
                    mutationFn: async e => {
                        if (null === a) return;
                        let t = await (0, ic.default)({
                            newAttributes: e,
                            cart: a,
                            language: r,
                            country: n,
                            isPreview: s
                        });
                        t && o(t)
                    }
                }, i[0] = a, i[1] = n, i[2] = s, i[3] = r, i[4] = o, i[5] = e) : e = i[5];
                let {
                    mutate: l
                } = (0, iu.useMutation)(e);
                return i[6] !== l ? (t = {
                    addCartAttributes: l
                }, i[6] = l, i[7] = t) : t = i[7], t
            })(),
            {
                cart: l
            } = (0, ih.default)();
        a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
            local: {
                dataEnv: "qa",
                url: "https://qa.bglobale.com/Scripts/Merchants/globale.merchant.storefront.js"
            },
            dev: {
                dataEnv: "int",
                url: "https://www.bglobale.com/Scripts/Merchants/globale.merchant.storefront.js"
            },
            prd: {
                dataEnv: "prd",
                url: "https://web.global-e.com/Scripts/Merchants/globale.merchant.storefront.js"
            }
        }, a[0] = e) : e = a[0];
        let u = e.prd;
        a[1] !== s ? (t = () => {
            let e = e => {
                let {
                    detail: t
                } = e;
                t && Array.isArray(t.attributes) && s(t.attributes)
            };
            return window.document.addEventListener("geCartAttributes", e), () => window.removeEventListener("geCartAttributes", e)
        }, i = [s], a[1] = s, a[2] = t, a[3] = i) : (t = a[2], i = a[3]), (0, M.useEffect)(t, i), a[4] !== l ? (r = () => {
            let e = {
                platformCartId: l ? .id ? (0, ig.removeShopifyPrefix)(l.id) : null
            };
            window.document.dispatchEvent(new CustomEvent("geMerchantSession", {
                detail: e
            })), window.geMerchantSession = e
        }, a[4] = l, a[5] = r) : r = a[5];
        let c = l ? .id;
        return (a[6] !== c ? (n = [c], a[6] = c, a[7] = n) : n = a[7], (0, M.useEffect)(r, n), u) ? (a[8] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, U.jsx)(il.default, {
            async: !0,
            id: "ge-storefront-js",
            "data-mid": "8un7",
            "data-env": u.dataEnv,
            src: u.url
        }), a[8] = o) : o = a[8], o) : null
    };
    var im = e.i(149818);
    let i_ = (s = new Map, function(e, t) {
            s.has(e) && s.get(e) === t || (window.DD_RUM ? .addFeatureFlagEvaluation(e, t), s.set(e, t))
        }),
        iE = e => {
            let t, i, r, n = (0, L.c)(6),
                {
                    id: o
                } = e;
            if (n[0] !== o) {
                let e;
                n[2] === Symbol.for("react.memo_cache_sentinel") ? (e = /^GTM-/, n[2] = e) : e = n[2], t = o.replace(e, ""), n[0] = o, n[1] = t
            } else t = n[1];
            let a = t;
            n[3] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, U.jsx)(il.default, {
                id: "gtm-dataLayer",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: "window.dataLayer = window.dataLayer || []; window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});"
                }
            }), n[3] = i) : i = n[3];
            let s = `https://kin.ledger.com/he14a39t4mjjdwx.js?awl=${a}`;
            return n[4] !== s ? (r = (0, U.jsxs)(U.Fragment, {
                children: [i, (0, U.jsx)(il.default, {
                    id: "gtm-src",
                    strategy: "afterInteractive",
                    src: s
                })]
            }), n[4] = s, n[5] = r) : r = n[5], r
        },
        iy = "GTM-W5FKZ2N",
        ib = () => {
            let e, t = (0, L.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, U.jsx)(U.Fragment, {
                children: iy && (0, U.jsx)(iE, {
                    id: iy
                })
            }), t[0] = e) : e = t[0], e
        };
    var iI = e.i(777051),
        iO = e.i(190077),
        iR = e.i(434822),
        iS = e.i(8234),
        iT = e.i(937229),
        iw = function(e, t) {
            return (iw = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            })(e, t)
        };

    function iN(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function i() {
            this.constructor = e
        }
        iw(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    }
    var iA = function() {
        return (iA = Object.assign || function(e) {
            for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };

    function iC(e, t, i, r) {
        return new(i || (i = Promise))(function(n, o) {
            function a(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                    e(t)
                })).then(a, s)
            }
            l((r = r.apply(e, t || [])).next())
        })
    }

    function iD(e, t) {
        var i, r, n, o, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(s) {
            return function(l) {
                var u = [s, l];
                if (i) throw TypeError("Generator is already executing.");
                for (; o && (o = 0, u[0] && (a = 0)), a;) try {
                    if (i = 1, r && (n = 2 & u[0] ? r.return : u[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, u[1])).done) return n;
                    switch (r = 0, n && (u = [2 & u[0], n.value]), u[0]) {
                        case 0:
                        case 1:
                            n = u;
                            break;
                        case 4:
                            return a.label++, {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            a.label++, r = u[1], u = [0];
                            continue;
                        case 7:
                            u = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === u[0] && (!n || u[1] > n[0] && u[1] < n[3])) {
                                a.label = u[1];
                                break
                            }
                            if (6 === u[0] && a.label < n[1]) {
                                a.label = n[1], n = u;
                                break
                            }
                            if (n && a.label < n[2]) {
                                a.label = n[2], a.ops.push(u);
                                break
                            }
                            n[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    u = t.call(e, a)
                } catch (e) {
                    u = [6, e], r = 0
                } finally {
                    i = n = 0
                }
                if (5 & u[0]) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function ix(e, t, i) {
        if (i || 2 == arguments.length)
            for (var r, n = 0, o = t.length; n < o; n++) !r && n in t || (r || (r = Array.prototype.slice.call(t, 0, n)), r[n] = t[n]);
        return e.concat(r || Array.prototype.slice.call(t))
    }
    "function" == typeof SuppressedError && SuppressedError;
    var ik = new(function() {
        function e() {}
        return e.prototype.handleError = function(e) {}, e
    }());

    function iP(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        if (!e) return {};
        if ("function" == typeof Object.assign) return Object.assign.apply(Object, ix([e], t, !1));
        for (var r = Object(e), n = 0; n < t.length; n++) {
            var o = t[n];
            if (null != o)
                for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a])
        }
        return r
    }

    function iU(e, t) {
        return e ? function(e, t) {
            var i = {};
            return e.forEach(function(e) {
                i[t(e)] = e
            }), i
        }(e, function(e) {
            return e[t]
        }) : {}
    }

    function iL() {
        return (0, iO.v4)()
    }

    function iM(e, t) {
        for (var i = !1, r = Object.keys(e), n = 0; n < r.length; n++)
            if (t === e[r[n]]) {
                i = !0;
                break
            }
        return i
    }

    function iF(e) {
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    }

    function iV(e, t) {
        for (var i, r = 0; r < e.length; r++) {
            var n = e[r];
            if (t(n)) {
                i = n;
                break
            }
        }
        return i
    }

    function iz(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        var r = 0;
        return e.replace(/%s/g, function() {
            var e = t[r++],
                i = typeof e;
            return "function" === i ? e() : "string" === i ? e : String(e)
        })
    }
    var iB = function() {
            return Math.round(new Date().getTime())
        },
        iG = function(e) {
            return "number" == typeof e && 0x20000000000000 >= Math.abs(e)
        },
        iq = function(e) {
            return "number" == typeof e
        };
    (c = S || (S = {}))[c.NOTSET = 0] = "NOTSET", c[c.DEBUG = 1] = "DEBUG", c[c.INFO = 2] = "INFO", c[c.WARNING = 3] = "WARNING", c[c.ERROR = 4] = "ERROR";
    var ij = {
        NOTSET: 0,
        DEBUG: 1,
        INFO: 2,
        WARNING: 3,
        ERROR: 4
    };

    function iK(e) {
        return "string" != typeof e ? e : ("WARN" === (e = e.toUpperCase()) && (e = "WARNING"), ij[e]) ? ij[e] : e
    }
    var iH = function() {
            function e() {
                this.defaultLoggerFacade = new iQ, this.loggers = {}
            }
            return e.prototype.getLogger = function(e) {
                return e ? (this.loggers[e] || (this.loggers[e] = new iQ({
                    messagePrefix: e
                })), this.loggers[e]) : this.defaultLoggerFacade
            }, e
        }(),
        iW = function() {
            function e(e) {
                void 0 === e && (e = {}), this.logLevel = S.NOTSET, void 0 !== e.logLevel && iM(S, e.logLevel) && this.setLogLevel(e.logLevel), this.logToConsole = void 0 === e.logToConsole || !!e.logToConsole, this.prefix = void 0 !== e.prefix ? e.prefix : "[OPTIMIZELY]"
            }
            return e.prototype.log = function(e, t) {
                if (this.shouldLog(e) && this.logToConsole) {
                    var i = "".concat(this.prefix, " - ").concat(this.getLogLevelName(e), " ").concat(this.getTime(), " ").concat(t);
                    this.consoleLog(e, [i])
                }
            }, e.prototype.setLogLevel = function(e) {
                e = iK(e), iM(S, e) && void 0 !== e ? this.logLevel = e : this.logLevel = S.ERROR
            }, e.prototype.getTime = function() {
                return new Date().toISOString()
            }, e.prototype.shouldLog = function(e) {
                return e >= this.logLevel
            }, e.prototype.getLogLevelName = function(e) {
                switch (e) {
                    case S.DEBUG:
                        return "DEBUG";
                    case S.INFO:
                        return "INFO ";
                    case S.WARNING:
                        return "WARN ";
                    case S.ERROR:
                        return "ERROR";
                    default:
                        return "NOTSET"
                }
            }, e.prototype.consoleLog = function(e, t) {
                switch (e) {
                    case S.DEBUG:
                        console.log.apply(console, t);
                        break;
                    case S.INFO:
                        console.info.apply(console, t);
                        break;
                    case S.WARNING:
                        console.warn.apply(console, t);
                        break;
                    case S.ERROR:
                        console.error.apply(console, t);
                        break;
                    default:
                        console.log.apply(console, t)
                }
            }, e
        }(),
        iY = S.NOTSET,
        iX = null,
        iQ = function() {
            function e(e) {
                void 0 === e && (e = {}), this.messagePrefix = "", e.messagePrefix && (this.messagePrefix = e.messagePrefix)
            }
            return e.prototype.log = function(e, t) {
                for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
                this.internalLog(iK(e), {
                    message: t,
                    splat: i
                })
            }, e.prototype.info = function(e) {
                for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                this.namedLog(S.INFO, e, t)
            }, e.prototype.debug = function(e) {
                for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                this.namedLog(S.DEBUG, e, t)
            }, e.prototype.warn = function(e) {
                for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                this.namedLog(S.WARNING, e, t)
            }, e.prototype.error = function(e) {
                for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                this.namedLog(S.ERROR, e, t)
            }, e.prototype.format = function(e) {
                return "".concat(this.messagePrefix ? this.messagePrefix + ": " : "").concat(iz.apply(void 0, ix([e.message], e.splat, !1)))
            }, e.prototype.internalLog = function(e, t) {
                !iX || !(e < iY) && (iX.log(e, this.format(t)), t.error && t.error instanceof Error && ik.handleError(t.error))
            }, e.prototype.namedLog = function(e, t, i) {
                if (t instanceof Error) {
                    t = (r = t).message, this.internalLog(e, {
                        error: r,
                        message: t,
                        splat: i
                    });
                    return
                }
                if (0 === i.length) return void this.internalLog(e, {
                    message: t,
                    splat: i
                });
                var r, n = i[i.length - 1];
                n instanceof Error && (r = n, i.splice(-1)), this.internalLog(e, {
                    message: t,
                    error: r,
                    splat: i
                })
            }, e
        }(),
        iJ = new iH;

    function i$(e) {
        return iJ.getLogger(e)
    }

    function iZ(e) {
        iX = e
    }
    var i0 = function(e) {
        e = iK(e), iY = iM(S, e) && void 0 !== e ? e : S.ERROR
    };

    function i1(e, t) {
        var i = e.context,
            r = t.context;
        return i.accountId === r.accountId && i.projectId === r.projectId && i.clientName === r.clientName && i.clientVersion === r.clientVersion && i.revision === r.revision && i.anonymizeIP === r.anonymizeIP && i.botFiltering === r.botFiltering
    }
    var i2 = i$("EventProcessor"),
        i5 = function() {
            function e(e) {
                var t = e.timeout,
                    i = e.callback;
                this.timeout = Math.max(t, 0), this.callback = i
            }
            return e.prototype.start = function() {
                this.timeoutId = setTimeout(this.callback, this.timeout)
            }, e.prototype.refresh = function() {
                this.stop(), this.start()
            }, e.prototype.stop = function() {
                this.timeoutId && clearTimeout(this.timeoutId)
            }, e
        }(),
        i3 = function() {
            function e(e) {
                var t = e.sink;
                this.sink = t
            }
            return e.prototype.start = function() {
                return Promise.resolve()
            }, e.prototype.stop = function() {
                return Promise.resolve()
            }, e.prototype.enqueue = function(e) {
                this.sink([e])
            }, e
        }(),
        i4 = function() {
            function e(e) {
                var t = e.flushInterval,
                    i = e.maxQueueSize,
                    r = e.sink,
                    n = e.closingSink,
                    o = e.batchComparator;
                this.buffer = [], this.maxQueueSize = Math.max(i, 1), this.sink = r, this.closingSink = n, this.batchComparator = o, this.timer = new i5({
                    callback: this.flush.bind(this),
                    timeout: t
                }), this.started = !1
            }
            return e.prototype.start = function() {
                return this.started = !0, Promise.resolve()
            }, e.prototype.stop = function() {
                this.started = !1;
                var e = this.closingSink ? this.closingSink(this.buffer) : this.sink(this.buffer);
                return this.buffer = [], this.timer.stop(), e
            }, e.prototype.enqueue = function(e) {
                if (!this.started) return void i2.warn("Queue is stopped, not accepting event");
                var t = this.buffer[0];
                t && !this.batchComparator(t, e) && this.flush(), 0 === this.buffer.length && this.timer.refresh(), this.buffer.push(e), this.buffer.length >= this.maxQueueSize && this.flush()
            }, e.prototype.flush = function() {
                this.sink(this.buffer), this.buffer = [], this.timer.stop()
            }, e
        }(),
        i6 = {
            NOTSET: 0,
            DEBUG: 1,
            INFO: 2,
            WARNING: 3,
            ERROR: 4
        },
        i8 = {
            BROWSER_ODP_MANAGER_INITIALIZATION_FAILED: "%s: Error initializing Browser ODP Manager.",
            CONDITION_EVALUATOR_ERROR: "%s: Error evaluating audience condition of type %s: %s",
            DATAFILE_AND_SDK_KEY_MISSING: "%s: You must provide at least one of sdkKey or datafile. Cannot start Optimizely",
            EXPERIMENT_KEY_NOT_IN_DATAFILE: "%s: Experiment key %s is not in datafile.",
            FEATURE_NOT_IN_DATAFILE: "%s: Feature key %s is not in datafile.",
            FETCH_SEGMENTS_FAILED_NETWORK_ERROR: "%s: Audience segments fetch failed. (network error)",
            FETCH_SEGMENTS_FAILED_DECODE_ERROR: "%s: Audience segments fetch failed. (decode error)",
            IMPROPERLY_FORMATTED_EXPERIMENT: "%s: Experiment key %s is improperly formatted.",
            INVALID_ATTRIBUTES: "%s: Provided attributes are in an invalid format.",
            INVALID_BUCKETING_ID: "%s: Unable to generate hash for bucketing ID %s: %s",
            INVALID_DATAFILE: "%s: Datafile is invalid - property %s: %s",
            INVALID_DATAFILE_MALFORMED: "%s: Datafile is invalid because it is malformed.",
            INVALID_CONFIG: "%s: Provided Optimizely config is in an invalid format.",
            INVALID_JSON: "%s: JSON object is not valid.",
            INVALID_ERROR_HANDLER: '%s: Provided "errorHandler" is in an invalid format.',
            INVALID_EVENT_DISPATCHER: '%s: Provided "eventDispatcher" is in an invalid format.',
            INVALID_EVENT_TAGS: "%s: Provided event tags are in an invalid format.",
            INVALID_EXPERIMENT_KEY: "%s: Experiment key %s is not in datafile. It is either invalid, paused, or archived.",
            INVALID_EXPERIMENT_ID: "%s: Experiment ID %s is not in datafile.",
            INVALID_GROUP_ID: "%s: Group ID %s is not in datafile.",
            INVALID_LOGGER: '%s: Provided "logger" is in an invalid format.',
            INVALID_ROLLOUT_ID: "%s: Invalid rollout ID %s attached to feature %s",
            INVALID_USER_ID: "%s: Provided user ID is in an invalid format.",
            INVALID_USER_PROFILE_SERVICE: "%s: Provided user profile service instance is in an invalid format: %s.",
            LOCAL_STORAGE_DOES_NOT_EXIST: "Error accessing window localStorage.",
            MISSING_INTEGRATION_KEY: "%s: Integration key missing from datafile. All integrations should include a key.",
            NO_DATAFILE_SPECIFIED: "%s: No datafile specified. Cannot start optimizely.",
            NO_JSON_PROVIDED: "%s: No JSON object to validate against schema.",
            NO_VARIATION_FOR_EXPERIMENT_KEY: "%s: No variation key %s defined in datafile for experiment %s.",
            ODP_CONFIG_NOT_AVAILABLE: "%s: ODP is not integrated to the project.",
            ODP_EVENT_FAILED: "ODP event send failed.",
            ODP_FETCH_QUALIFIED_SEGMENTS_SEGMENTS_MANAGER_MISSING: "%s: ODP unable to fetch qualified segments (Segments Manager not initialized).",
            ODP_IDENTIFY_FAILED_EVENT_MANAGER_MISSING: "%s: ODP identify event %s is not dispatched (Event Manager not instantiated).",
            ODP_INITIALIZATION_FAILED: "%s: ODP failed to initialize.",
            ODP_INVALID_DATA: "%s: ODP data is not valid",
            ODP_EVENT_FAILED_ODP_MANAGER_MISSING: "%s: ODP Event failed to send. (ODP Manager not initialized).",
            ODP_FETCH_QUALIFIED_SEGMENTS_FAILED_ODP_MANAGER_MISSING: "%s: ODP failed to Fetch Qualified Segments. (ODP Manager not initialized).",
            ODP_IDENTIFY_USER_FAILED_ODP_MANAGER_MISSING: "%s: ODP failed to Identify User. (ODP Manager not initialized).",
            ODP_IDENTIFY_USER_FAILED_USER_CONTEXT_INITIALIZATION: "%s: ODP failed to Identify User. (Failed during User Context Initialization).",
            ODP_MANAGER_UPDATE_SETTINGS_FAILED_EVENT_MANAGER_MISSING: "%s: ODP Manager failed to update OdpConfig settings for internal event manager. (Event Manager not initialized).",
            ODP_MANAGER_UPDATE_SETTINGS_FAILED_SEGMENTS_MANAGER_MISSING: "%s: ODP Manager failed to update OdpConfig settings for internal segments manager. (Segments Manager not initialized).",
            ODP_NOT_ENABLED: "ODP is not enabled",
            ODP_NOT_INTEGRATED: "%s: ODP is not integrated",
            ODP_SEND_EVENT_FAILED_EVENT_MANAGER_MISSING: "%s: ODP send event %s was not dispatched (Event Manager not instantiated).",
            ODP_SEND_EVENT_FAILED_UID_MISSING: "%s: ODP send event %s was not dispatched (No valid user identifier provided).",
            ODP_SEND_EVENT_FAILED_VUID_MISSING: "%s: ODP send event %s was not dispatched (Unable to fetch VUID).",
            ODP_VUID_INITIALIZATION_FAILED: "%s: ODP VUID initialization failed.",
            ODP_VUID_REGISTRATION_FAILED: "%s: ODP VUID failed to be registered.",
            ODP_VUID_REGISTRATION_FAILED_EVENT_MANAGER_MISSING: "%s: ODP register vuid failed. (Event Manager not instantiated).",
            UNDEFINED_ATTRIBUTE: "%s: Provided attribute: %s has an undefined value.",
            UNRECOGNIZED_ATTRIBUTE: "%s: Unrecognized attribute %s provided. Pruning before sending event to Optimizely.",
            UNABLE_TO_CAST_VALUE: "%s: Unable to cast value %s to type %s, returning null.",
            USER_NOT_IN_FORCED_VARIATION: "%s: User %s is not in the forced variation map. Cannot remove their forced variation.",
            USER_PROFILE_LOOKUP_ERROR: '%s: Error while looking up user profile for user ID "%s": %s.',
            USER_PROFILE_SAVE_ERROR: '%s: Error while saving user profile for user ID "%s": %s.',
            VARIABLE_KEY_NOT_IN_DATAFILE: '%s: Variable with key "%s" associated with feature with key "%s" is not in datafile.',
            VARIATION_ID_NOT_IN_DATAFILE: "%s: No variation ID %s defined in datafile for experiment %s.",
            VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT: "%s: Variation ID %s is not in the datafile.",
            INVALID_INPUT_FORMAT: "%s: Provided %s is in an invalid format.",
            INVALID_DATAFILE_VERSION: "%s: This version of the JavaScript SDK does not support the given datafile version: %s",
            INVALID_VARIATION_KEY: "%s: Provided variation key is in an invalid format."
        },
        i7 = {
            ACTIVATE_USER: "%s: Activating user %s in experiment %s.",
            DISPATCH_CONVERSION_EVENT: "%s: Dispatching conversion event to URL %s with params %s.",
            DISPATCH_IMPRESSION_EVENT: "%s: Dispatching impression event to URL %s with params %s.",
            DEPRECATED_EVENT_VALUE: "%s: Event value is deprecated in %s call.",
            EVENT_KEY_NOT_FOUND: "%s: Event key %s is not in datafile.",
            EXPERIMENT_NOT_RUNNING: "%s: Experiment %s is not running.",
            FEATURE_ENABLED_FOR_USER: "%s: Feature %s is enabled for user %s.",
            FEATURE_NOT_ENABLED_FOR_USER: "%s: Feature %s is not enabled for user %s.",
            FEATURE_HAS_NO_EXPERIMENTS: "%s: Feature %s is not attached to any experiments.",
            FAILED_TO_PARSE_VALUE: '%s: Failed to parse event value "%s" from event tags.',
            FAILED_TO_PARSE_REVENUE: '%s: Failed to parse revenue value "%s" from event tags.',
            FORCED_BUCKETING_FAILED: "%s: Variation key %s is not in datafile. Not activating user %s.",
            INVALID_OBJECT: "%s: Optimizely object is not valid. Failing %s.",
            INVALID_CLIENT_ENGINE: "%s: Invalid client engine passed: %s. Defaulting to node-sdk.",
            INVALID_DEFAULT_DECIDE_OPTIONS: "%s: Provided default decide options is not an array.",
            INVALID_DECIDE_OPTIONS: "%s: Provided decide options is not an array. Using default decide options.",
            INVALID_VARIATION_ID: "%s: Bucketed into an invalid variation ID. Returning null.",
            NOTIFICATION_LISTENER_EXCEPTION: "%s: Notification listener for (%s) threw exception: %s",
            NO_ROLLOUT_EXISTS: "%s: There is no rollout of feature %s.",
            NOT_ACTIVATING_USER: "%s: Not activating user %s for experiment %s.",
            NOT_TRACKING_USER: "%s: Not tracking user %s.",
            ODP_DISABLED: "ODP Disabled.",
            ODP_IDENTIFY_FAILED_ODP_DISABLED: "%s: ODP identify event for user %s is not dispatched (ODP disabled).",
            ODP_IDENTIFY_FAILED_ODP_NOT_INTEGRATED: "%s: ODP identify event %s is not dispatched (ODP not integrated).",
            ODP_SEND_EVENT_IDENTIFIER_CONVERSION_FAILED: "%s: sendOdpEvent failed to parse through and convert fs_user_id aliases",
            PARSED_REVENUE_VALUE: '%s: Parsed revenue value "%s" from event tags.',
            PARSED_NUMERIC_VALUE: '%s: Parsed event value "%s" from event tags.',
            RETURNING_STORED_VARIATION: '%s: Returning previously activated variation "%s" of experiment "%s" for user "%s" from user profile.',
            ROLLOUT_HAS_NO_EXPERIMENTS: "%s: Rollout of feature %s has no experiments",
            SAVED_VARIATION: '%s: Saved variation "%s" of experiment "%s" for user "%s".',
            SAVED_VARIATION_NOT_FOUND: "%s: User %s was previously bucketed into variation with ID %s for experiment %s, but no matching variation was found.",
            SHOULD_NOT_DISPATCH_ACTIVATE: '%s: Experiment %s is not in "Running" state. Not activating user.',
            SKIPPING_JSON_VALIDATION: "%s: Skipping JSON schema validation.",
            TRACK_EVENT: "%s: Tracking event %s for user %s.",
            UNRECOGNIZED_DECIDE_OPTION: "%s: Unrecognized decide option %s provided.",
            USER_ASSIGNED_TO_EXPERIMENT_BUCKET: "%s: Assigned bucket %s to user with bucketing ID %s.",
            USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is in experiment %s of group %s.",
            USER_BUCKETED_INTO_TARGETING_RULE: "%s: User %s bucketed into targeting rule %s.",
            USER_IN_FEATURE_EXPERIMENT: "%s: User %s is in variation %s of experiment %s on the feature %s.",
            USER_IN_ROLLOUT: "%s: User %s is in rollout of feature %s.",
            USER_NOT_BUCKETED_INTO_EVERYONE_TARGETING_RULE: "%s: User %s not bucketed into everyone targeting rule due to traffic allocation.",
            USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is not in experiment %s of group %s.",
            USER_NOT_BUCKETED_INTO_ANY_EXPERIMENT_IN_GROUP: "%s: User %s is not in any experiment of group %s.",
            USER_NOT_BUCKETED_INTO_TARGETING_RULE: "%s User %s not bucketed into targeting rule %s due to traffic allocation. Trying everyone rule.",
            USER_NOT_IN_FEATURE_EXPERIMENT: "%s: User %s is not in any experiment on the feature %s.",
            USER_NOT_IN_ROLLOUT: "%s: User %s is not in rollout of feature %s.",
            USER_FORCED_IN_VARIATION: "%s: User %s is forced in variation %s.",
            USER_MAPPED_TO_FORCED_VARIATION: "%s: Set variation %s for experiment %s and user %s in the forced variation map.",
            USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s does not meet conditions for targeting rule %s.",
            USER_MEETS_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s meets conditions for targeting rule %s.",
            USER_HAS_VARIATION: "%s: User %s is in variation %s of experiment %s.",
            USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s) and user (%s) in the forced decision map.",
            USER_HAS_FORCED_VARIATION: "%s: Variation %s is mapped to experiment %s and user %s in the forced variation map.",
            USER_HAS_NO_VARIATION: "%s: User %s is in no variation of experiment %s.",
            USER_HAS_NO_FORCED_VARIATION: "%s: User %s is not in the forced variation map.",
            USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT: "%s: No experiment %s mapped to user %s in the forced variation map.",
            USER_NOT_IN_ANY_EXPERIMENT: "%s: User %s is not in any experiment of group %s.",
            USER_NOT_IN_EXPERIMENT: "%s: User %s does not meet conditions to be in experiment %s.",
            USER_RECEIVED_DEFAULT_VARIABLE_VALUE: '%s: User "%s" is not in any variation or rollout rule. Returning default value for variable "%s" of feature flag "%s".',
            FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Feature "%s" is not enabled for user %s. Returning the default variable value "%s".',
            VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Variable "%s" is not used in variation "%s". Returning default value.',
            USER_RECEIVED_VARIABLE_VALUE: '%s: Got variable value "%s" for variable "%s" of feature flag "%s"',
            VALID_DATAFILE: "%s: Datafile is valid.",
            VALID_USER_PROFILE_SERVICE: "%s: Valid user profile service provided.",
            VARIATION_REMOVED_FOR_USER: "%s: Variation mapped to experiment %s has been removed for user %s.",
            VARIABLE_REQUESTED_WITH_WRONG_TYPE: '%s: Requested variable type "%s", but variable is of type "%s". Use correct API to retrieve value. Returning None.',
            VALID_BUCKETING_ID: '%s: BucketingId is valid: "%s"',
            BUCKETING_ID_NOT_STRING: "%s: BucketingID attribute is not a string. Defaulted to userId",
            EVALUATING_AUDIENCE: '%s: Starting to evaluate audience "%s" with conditions: %s.',
            EVALUATING_AUDIENCES_COMBINED: '%s: Evaluating audiences for %s "%s": %s.',
            AUDIENCE_EVALUATION_RESULT: '%s: Audience "%s" evaluated to %s.',
            AUDIENCE_EVALUATION_RESULT_COMBINED: "%s: Audiences for %s %s collectively evaluated to %s.",
            MISSING_ATTRIBUTE_VALUE: '%s: Audience condition %s evaluated to UNKNOWN because no value was passed for user attribute "%s".',
            UNEXPECTED_CONDITION_VALUE: "%s: Audience condition %s evaluated to UNKNOWN because the condition value is not supported.",
            UNEXPECTED_TYPE: '%s: Audience condition %s evaluated to UNKNOWN because a value of type "%s" was passed for user attribute "%s".',
            UNEXPECTED_TYPE_NULL: '%s: Audience condition %s evaluated to UNKNOWN because a null value was passed for user attribute "%s".',
            UNKNOWN_CONDITION_TYPE: "%s: Audience condition %s has an unknown condition type. You may need to upgrade to a newer release of the Optimizely SDK.",
            UNKNOWN_MATCH_TYPE: "%s: Audience condition %s uses an unknown match type. You may need to upgrade to a newer release of the Optimizely SDK.",
            UPDATED_OPTIMIZELY_CONFIG: "%s: Updated Optimizely config to revision %s (project id %s)",
            OUT_OF_BOUNDS: '%s: Audience condition %s evaluated to UNKNOWN because the number value for user attribute "%s" is not in the range [-2^53, +2^53].',
            UNABLE_TO_ATTACH_UNLOAD: '%s: unable to bind optimizely.close() to page unload event: "%s"'
        },
        i9 = {
            BOT_FILTERING: "$opt_bot_filtering",
            BUCKETING_ID: "$opt_bucketing_id",
            STICKY_BUCKETING_KEY: "$opt_experiment_bucket_map",
            USER_AGENT: "$opt_user_agent",
            FORCED_DECISION_NULL_RULE_KEY: "$opt_null_rule_key"
        },
        re = "javascript-sdk",
        rt = "node-sdk",
        ri = "5.3.4",
        rr = {
            AB_TEST: "ab-test",
            FEATURE: "feature",
            FEATURE_TEST: "feature-test",
            FEATURE_VARIABLE: "feature-variable",
            ALL_FEATURE_VARIABLES: "all-feature-variables",
            FLAG: "flag"
        },
        rn = {
            FEATURE_TEST: "feature-test",
            ROLLOUT: "rollout",
            EXPERIMENT: "experiment"
        },
        ro = {
            RULE: "rule",
            EXPERIMENT: "experiment"
        },
        ra = {
            BOOLEAN: "boolean",
            DOUBLE: "double",
            INTEGER: "integer",
            STRING: "string",
            JSON: "json"
        },
        rs = {
            V2: "2",
            V3: "3",
            V4: "4"
        },
        rl = {
            SDK_NOT_READY: "Optimizely SDK not configured properly yet.",
            FLAG_KEY_INVALID: 'No flag was found for key "%s".',
            VARIABLE_VALUE_INVALID: 'Variable value for key "%s" is invalid or wrong type.'
        };
    (d = T || (T = {})).ACTIVATE = "ACTIVATE:experiment, user_id,attributes, variation, event", d.DECISION = "DECISION:type, userId, attributes, decisionInfo", d.LOG_EVENT = "LOG_EVENT:logEvent", d.OPTIMIZELY_CONFIG_UPDATE = "OPTIMIZELY_CONFIG_UPDATE", d.TRACK = "TRACK:event_key, user_id, attributes, event_tags, event", (p = w || (w = {})).VUID = "vuid", p.FS_USER_ID = "fs_user_id";
    var ru = "fs-user-id",
        rc = "fullstack";
    (h = N || (N = {})).IDENTIFIED = "identified", h.INITIALIZED = "client_initialized";
    var rd = Object.freeze({
            __proto__: null,
            LOG_LEVEL: i6,
            ERROR_MESSAGES: i8,
            LOG_MESSAGES: i7,
            CONTROL_ATTRIBUTES: i9,
            JAVASCRIPT_CLIENT_ENGINE: re,
            NODE_CLIENT_ENGINE: rt,
            REACT_CLIENT_ENGINE: "react-sdk",
            REACT_NATIVE_CLIENT_ENGINE: "react-native-sdk",
            REACT_NATIVE_JS_CLIENT_ENGINE: "react-native-js-sdk",
            CLIENT_VERSION: ri,
            DECISION_NOTIFICATION_TYPES: rr,
            DECISION_SOURCES: rn,
            AUDIENCE_EVALUATION_TYPES: ro,
            FEATURE_VARIABLE_TYPES: ra,
            DATAFILE_VERSIONS: rs,
            DECISION_MESSAGES: rl,
            get NOTIFICATION_TYPES() {
                return T
            },
            REQUEST_TIMEOUT_MS: 6e4,
            REQUEST_TIMEOUT_ODP_SEGMENTS_MS: 1e4,
            REQUEST_TIMEOUT_ODP_EVENTS_MS: 1e4,
            get ODP_USER_KEY() {
                return w
            },
            FS_USER_ID_ALIAS: ru,
            ODP_DEFAULT_EVENT_TYPE: rc,
            get ODP_EVENT_ACTION() {
                return N
            }
        }),
        rp = i$("EventProcessor"),
        rh = i$("EventProcessor"),
        rf = function() {
            function e(e) {
                var t = e.key,
                    i = e.maxValues;
                this.LS_KEY = t, this.maxValues = void 0 === i ? 1e3 : i
            }
            return e.prototype.get = function(e) {
                return this.getMap()[e] || null
            }, e.prototype.set = function(e, t) {
                var i = this.getMap();
                i[e] = t, this.replace(i)
            }, e.prototype.remove = function(e) {
                var t = this.getMap();
                delete t[e], this.replace(t)
            }, e.prototype.values = function() {
                return iF(this.getMap())
            }, e.prototype.clear = function() {
                this.replace({})
            }, e.prototype.replace = function(e) {
                try {
                    "u" > typeof window ? window && window.localStorage && localStorage.setItem(this.LS_KEY, JSON.stringify(e)) : localStorage.setItem(this.LS_KEY, JSON.stringify(e)), this.clean()
                } catch (e) {
                    rh.error(String(e))
                }
            }, e.prototype.clean = function() {
                var e = this.getMap(),
                    t = Object.keys(e),
                    i = t.length - this.maxValues;
                if (!(i < 1)) {
                    var r = t.map(function(t) {
                        return {
                            key: t,
                            value: e[t]
                        }
                    });
                    r.sort(function(e, t) {
                        return e.value.timestamp - t.value.timestamp
                    });
                    for (var n = 0; n < i; n++) delete e[r[n].key];
                    this.replace(e)
                }
            }, e.prototype.getMap = function() {
                try {
                    var e = "u" > typeof window ? window && window.localStorage && localStorage.getItem(this.LS_KEY) : localStorage.getItem(this.LS_KEY);
                    if (e) return JSON.parse(e) || {}
                } catch (e) {
                    rh.error(e)
                }
                return {}
            }, e
        }(),
        rg = i$("EventProcessor"),
        rv = function(e) {
            function t(t) {
                var i = t.eventDispatcher;
                return e.call(this, {
                    eventDispatcher: i,
                    store: new rf({
                        maxValues: 100,
                        key: "fs_optly_pending_events"
                    })
                }) || this
            }
            return iN(t, e), t
        }(function() {
            function e(e) {
                var t = e.eventDispatcher,
                    i = e.store;
                this.dispatcher = t, this.store = i
            }
            return e.prototype.dispatchEvent = function(e, t) {
                this.send({
                    uuid: iL(),
                    timestamp: new Date().getTime(),
                    request: e
                }, t)
            }, e.prototype.sendPendingEvents = function() {
                var e = this,
                    t = this.store.values();
                rg.debug("Sending %s pending events from previous page", t.length), t.forEach(function(t) {
                    try {
                        e.send(t, function() {})
                    } catch (e) {
                        rg.debug(String(e))
                    }
                })
            }, e.prototype.send = function(e, t) {
                var i = this;
                this.store.set(e.uuid, e), this.dispatcher.dispatchEvent(e.request, function(r) {
                    i.store.remove(e.uuid), t(r)
                })
            }, e
        }()),
        rm = "$opt_bot_filtering",
        r_ = function() {
            function e() {
                this.reqsInFlightCount = 0, this.reqsCompleteResolvers = []
            }
            return e.prototype.trackRequest = function(e) {
                var t = this;
                this.reqsInFlightCount++;
                var i = function() {
                    t.reqsInFlightCount--, 0 === t.reqsInFlightCount && (t.reqsCompleteResolvers.forEach(function(e) {
                        return e()
                    }), t.reqsCompleteResolvers = [])
                };
                e.then(i, i)
            }, e.prototype.onRequestsComplete = function() {
                var e = this;
                return new Promise(function(t) {
                    0 === e.reqsInFlightCount ? t() : e.reqsCompleteResolvers.push(t)
                })
            }, e
        }(),
        rE = i$("LogTierV1EventProcessor"),
        ry = function() {
            function e(e) {
                var t, i, r, n, o, a, s = e.dispatcher,
                    l = e.closingDispatcher,
                    u = e.flushInterval,
                    c = void 0 === u ? 3e4 : u,
                    d = e.batchSize,
                    p = void 0 === d ? 10 : d,
                    h = e.notificationCenter;
                this.dispatcher = s, this.closingDispatcher = l, this.notificationCenter = h, this.requestTracker = new r_, (t = c) <= 0 && (rp.warn("Invalid flushInterval ".concat(t, ", defaulting to ").concat(3e4)), t = 3e4), c = t, (i = Math.floor(i = p)) < 1 && (rp.warn("Invalid batchSize ".concat(i, ", defaulting to ").concat(10)), i = 10), p = i = Math.max(1, i), this.queue = (r = p, n = c, o = this.drainQueue.bind(this, !1), a = this.drainQueue.bind(this, !0), r > 1 ? new i4({
                    flushInterval: n,
                    maxQueueSize: r,
                    sink: o,
                    closingSink: a,
                    batchComparator: i1
                }) : new i3({
                    sink: o
                }))
            }
            return e.prototype.drainQueue = function(e, t) {
                var i = this,
                    r = new Promise(function(r) {
                        if (rE.debug("draining queue with %s events", t.length), 0 === t.length) return void r();
                        var n, o, a, s = {
                            url: "https://logx.optimizely.com/v1/events",
                            httpVerb: "POST",
                            params: (n = [], o = t[0], t.forEach(function(e) {
                                if ("conversion" === e.type || "impression" === e.type) {
                                    var t, i, r, o, a, s, l, u, c, d, p, h, f, g, v, m, _ = (i = {
                                        snapshots: [],
                                        visitor_id: (t = e).user.id,
                                        attributes: []
                                    }, t.user.attributes.forEach(function(e) {
                                        i.attributes.push({
                                            entity_id: e.entityId,
                                            key: e.key,
                                            type: "custom",
                                            value: e.value
                                        })
                                    }), "boolean" == typeof t.context.botFiltering && i.attributes.push({
                                        entity_id: rm,
                                        key: rm,
                                        type: "custom",
                                        value: t.context.botFiltering
                                    }), i);
                                    "impression" === e.type ? _.snapshots.push((s = (r = e).layer, l = r.experiment, u = r.variation, c = r.ruleKey, d = r.flagKey, p = r.ruleType, h = r.enabled, {
                                        decisions: [{
                                            campaign_id: f = s ? s.id : null,
                                            experiment_id: null != (o = null == l ? void 0 : l.id) ? o : "",
                                            variation_id: null != (a = null == u ? void 0 : u.id) ? a : "",
                                            metadata: {
                                                flag_key: d,
                                                rule_key: c,
                                                rule_type: p,
                                                variation_key: u ? u.key : "",
                                                enabled: h
                                            }
                                        }],
                                        events: [{
                                            entity_id: f,
                                            timestamp: r.timestamp,
                                            key: "campaign_activated",
                                            uuid: r.uuid
                                        }]
                                    })) : "conversion" === e.type && _.snapshots.push((v = iA({}, (g = e).tags), delete v.revenue, delete v.value, m = {
                                        entity_id: g.event.id,
                                        key: g.event.key,
                                        timestamp: g.timestamp,
                                        uuid: g.uuid
                                    }, g.tags && (m.tags = g.tags), null != g.value && (m.value = g.value), null != g.revenue && (m.revenue = g.revenue), {
                                        events: [m]
                                    })), n.push(_)
                                }
                            }), {
                                client_name: o.context.clientName,
                                client_version: o.context.clientVersion,
                                account_id: o.context.accountId,
                                project_id: o.context.projectId,
                                revision: o.context.revision,
                                anonymize_ip: o.context.anonymizeIP,
                                enrich_decisions: !0,
                                visitors: n
                            })
                        };
                        (e && i.closingDispatcher ? i.closingDispatcher : i.dispatcher).dispatchEvent(s, function() {
                            r()
                        }), a = i.notificationCenter, a && a.sendNotifications(T.LOG_EVENT, s)
                    });
                return this.requestTracker.trackRequest(r), r
            }, e.prototype.process = function(e) {
                this.queue.enqueue(e)
            }, e.prototype.stop = function() {
                try {
                    return this.queue.stop(), this.requestTracker.onRequestsComplete()
                } catch (e) {
                    rE.error('Error stopping EventProcessor: "%s"', Object(e).message, String(e))
                }
                return Promise.resolve()
            }, e.prototype.start = function() {
                return iC(this, void 0, void 0, function() {
                    return iD(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.queue.start()];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            }, e
        }(),
        rb = "CONFIG_VALIDATOR",
        rI = [rs.V2, rs.V3, rs.V4],
        rO = function(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.errorHandler,
                    i = e.eventDispatcher,
                    r = e.logger;
                if (t && "function" != typeof t.handleError) throw Error(iz(i8.INVALID_ERROR_HANDLER, rb));
                if (i && "function" != typeof i.dispatchEvent) throw Error(iz(i8.INVALID_EVENT_DISPATCHER, rb));
                if (r && "function" != typeof r.log) throw Error(iz(i8.INVALID_LOGGER, rb));
                return !0
            }
            throw Error(iz(i8.INVALID_CONFIG, rb))
        },
        rR = function(e) {
            if (!e) throw Error(iz(i8.NO_DATAFILE_SPECIFIED, rb));
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (e) {
                throw Error(iz(i8.INVALID_DATAFILE_MALFORMED, rb))
            }
            if ("object" == typeof e && !Array.isArray(e) && null !== e && -1 === rI.indexOf(e.version)) throw Error(iz(i8.INVALID_DATAFILE_VERSION, rb, e.version));
            return e
        },
        rS = "POST",
        rT = {
            dispatchEvent: function(e, t) {
                var i, r, n = e.params,
                    o = e.url;
                e.httpVerb === rS ? ((r = new XMLHttpRequest).open(rS, o, !0), r.setRequestHeader("Content-Type", "application/json"), r.onreadystatechange = function() {
                    if (4 === r.readyState && t && "function" == typeof t) try {
                        t({
                            statusCode: r.status
                        })
                    } catch (e) {}
                }, r.send(JSON.stringify(n))) : (o += "?wxhr=true", n && (o += "&" + Object.keys(i = n).map(function(e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(i[e])
                }).join("&")), (r = new XMLHttpRequest).open("GET", o, !0), r.onreadystatechange = function() {
                    if (4 === r.readyState && t && "function" == typeof t) try {
                        t({
                            statusCode: r.status
                        })
                    } catch (e) {}
                }, r.send())
            }
        },
        rw = {
            dispatchEvent: function(e, t) {
                var i = e.params,
                    r = e.url,
                    n = new Blob([JSON.stringify(i)], {
                        type: "application/json"
                    });
                t({
                    statusCode: navigator.sendBeacon(r, n) ? 200 : 500
                })
            }
        },
        rN = function() {
            function e() {}
            return e.prototype.log = function() {}, e
        }();

    function rA(e) {
        return new iW(e)
    }
    var rC = Object.freeze({
            __proto__: null,
            NoOpLogger: rN,
            createLogger: rA,
            createNoOpLogger: function() {
                return new rN
            }
        }),
        rD = function() {
            function e(e) {
                var t = this;
                this.logger = e.logger, this.errorHandler = e.errorHandler, this.notificationListeners = {}, iF(T).forEach(function(e) {
                    t.notificationListeners[e] = []
                }), this.listenerId = 1
            }
            return e.prototype.addNotificationListener = function(e, t) {
                try {
                    if (!(iF(T).indexOf(e) > -1)) return -1;
                    this.notificationListeners[e] || (this.notificationListeners[e] = []);
                    var i = !1;
                    if ((this.notificationListeners[e] || []).forEach(function(e) {
                            if (e.callback === t) {
                                i = !0;
                                return
                            }
                        }), i) return -1;
                    this.notificationListeners[e].push({
                        id: this.listenerId,
                        callback: t
                    });
                    var r = this.listenerId;
                    return this.listenerId += 1, r
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), -1
                }
            }, e.prototype.removeNotificationListener = function(e) {
                var t, i, r = this;
                try {
                    if (Object.keys(this.notificationListeners).some(function(n) {
                            return (r.notificationListeners[n] || []).every(function(r, o) {
                                return r.id !== e || (t = o, i = n, !1)
                            }), void 0 !== t && void 0 !== i
                        }), void 0 !== t && void 0 !== i) return this.notificationListeners[i].splice(t, 1), !0
                } catch (e) {
                    this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e)
                }
                return !1
            }, e.prototype.clearAllNotificationListeners = function() {
                var e = this;
                try {
                    iF(T).forEach(function(t) {
                        e.notificationListeners[t] = []
                    })
                } catch (e) {
                    this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e)
                }
            }, e.prototype.clearNotificationListeners = function(e) {
                try {
                    this.notificationListeners[e] = []
                } catch (e) {
                    this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e)
                }
            }, e.prototype.sendNotifications = function(e, t) {
                var i = this;
                try {
                    (this.notificationListeners[e] || []).forEach(function(r) {
                        var n = r.callback;
                        try {
                            n(t)
                        } catch (t) {
                            i.logger.log(i6.ERROR, i7.NOTIFICATION_LISTENER_EXCEPTION, "NOTIFICATION_CENTER", e, t.message)
                        }
                    })
                } catch (e) {
                    this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e)
                }
            }, e
        }(),
        rx = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(ry.bind.apply(ry, ix([void 0], e, !1)))
        };
    (f = A || (A = {})).IGNORE_CACHE = "IGNORE_CACHE", f.RESET_CACHE = "RESET_CACHE", (g = C || (C = {})).BOOLEAN = "boolean", g.DOUBLE = "double", g.INTEGER = "integer", g.STRING = "string", g.JSON = "json", (v = D || (D = {})).DISABLE_DECISION_EVENT = "DISABLE_DECISION_EVENT", v.ENABLED_FLAGS_ONLY = "ENABLED_FLAGS_ONLY", v.IGNORE_USER_PROFILE_SERVICE = "IGNORE_USER_PROFILE_SERVICE", v.INCLUDE_REASONS = "INCLUDE_REASONS", v.EXCLUDE_VARIABLES = "EXCLUDE_VARIABLES";
    var rk = "Polling intervals below ".concat(30, " seconds are not recommended."),
        rP = [0, 8, 16, 32, 64, 128, 256, 512],
        rU = i$("DatafileManager"),
        rL = function() {
            function e() {
                this.listeners = {}, this.listenerId = 1
            }
            return e.prototype.on = function(e, t) {
                var i = this;
                this.listeners[e] || (this.listeners[e] = {});
                var r = String(this.listenerId);
                return this.listenerId++, this.listeners[e][r] = t,
                    function() {
                        i.listeners[e] && delete i.listeners[e][r]
                    }
            }, e.prototype.emit = function(e, t) {
                var i = this.listeners[e];
                i && Object.keys(i).forEach(function(e) {
                    (0, i[e])(t)
                })
            }, e.prototype.removeAllListeners = function() {
                this.listeners = {}
            }, e
        }(),
        rM = function() {
            function e() {
                this.errorCount = 0
            }
            return e.prototype.getDelay = function() {
                return 0 === this.errorCount ? 0 : 1e3 * rP[Math.min(rP.length - 1, this.errorCount)] + Math.round(1e3 * Math.random())
            }, e.prototype.countError = function() {
                this.errorCount < rP.length - 1 && this.errorCount++
            }, e.prototype.reset = function() {
                this.errorCount = 0
            }, e
        }(),
        rF = function() {
            function e() {}
            return e.getNotificationCenter = function(e, t) {
                var i;
                return (void 0 === t && (t = i$()), e) ? (this._notificationCenters.has(e) ? i = this._notificationCenters.get(e) : (i = new rD({
                    logger: t,
                    errorHandler: {
                        handleError: function() {}
                    }
                }), this._notificationCenters.set(e, i)), i) : void t.log(S.ERROR, "No SDK key provided to getNotificationCenter.")
            }, e.removeNotificationCenter = function(e) {
                if (e) {
                    var t = this._notificationCenters.get(e);
                    t && (t.clearAllNotificationListeners(), this._notificationCenters.delete(e))
                }
            }, e._notificationCenters = new Map, e
        }(),
        rV = i$("DatafileManager");

    function rz(e) {
        return e >= 200 && e < 400
    }
    var rB = {
            get: function() {
                return Promise.resolve(void 0)
            },
            set: function() {
                return Promise.resolve()
            },
            contains: function() {
                return Promise.resolve(!1)
            },
            remove: function() {
                return Promise.resolve(!1)
            }
        },
        rG = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return iN(t, e), t.prototype.makeGetRequest = function(e, t) {
                var i;
                return i = new XMLHttpRequest, {
                    responsePromise: new Promise(function(r, n) {
                        i.open("GET", e, !0), Object.keys(t).forEach(function(e) {
                            var r = t[e];
                            i.setRequestHeader(e, r)
                        }), i.onreadystatechange = function() {
                            if (4 === i.readyState) {
                                if (0 === i.status) return void n(Error("Request error"));
                                var e = function(e) {
                                    var t = e.getAllResponseHeaders();
                                    if (null === t) return {};
                                    var i = t.split("\r\n"),
                                        r = {};
                                    return i.forEach(function(e) {
                                        var t = e.indexOf(": ");
                                        if (t > -1) {
                                            var i = e.slice(0, t),
                                                n = e.slice(t + 2);
                                            n.length > 0 && (r[i] = n)
                                        }
                                    }), r
                                }(i);
                                r({
                                    statusCode: i.status,
                                    body: i.responseText,
                                    headers: e
                                })
                            }
                        }, i.timeout = 6e4, i.ontimeout = function() {
                            rU.error("Request timed out")
                        }, i.send()
                    }),
                    abort: function() {
                        i.abort()
                    }
                }
            }, t.prototype.getConfigDefaults = function() {
                return {
                    autoUpdate: !1
                }
            }, t
        }(function() {
            function e(e) {
                var t = this,
                    i = iA(iA({}, this.getConfigDefaults()), e),
                    r = i.datafile,
                    n = i.autoUpdate,
                    o = i.sdkKey,
                    a = i.updateInterval,
                    s = i.urlTemplate,
                    l = i.cache;
                this.cache = void 0 === l ? rB : l, this.cacheKey = "opt-datafile-" + o, this.sdkKey = o, this.isReadyPromiseSettled = !1, this.readyPromiseResolver = function() {}, this.readyPromiseRejecter = function() {}, this.readyPromise = new Promise(function(e, i) {
                    t.readyPromiseResolver = e, t.readyPromiseRejecter = i
                }), r ? (this.currentDatafile = r, o || this.resolveReadyPromise()) : this.currentDatafile = "", this.isStarted = !1, this.datafileUrl = iz(void 0 === s ? "https://cdn.optimizely.com/datafiles/%s.json" : s, o), this.emitter = new rL, this.autoUpdate = void 0 !== n && n, this.updateInterval = void 0 === a ? 3e5 : a, this.updateInterval < 3e4 && rV.warn(rk), this.currentTimeout = null, this.currentRequest = null, this.backoffController = new rM, this.syncOnCurrentRequestComplete = !1
            }
            return e.prototype.get = function() {
                return this.currentDatafile
            }, e.prototype.start = function() {
                this.isStarted || (rV.debug("Datafile manager started"), this.isStarted = !0, this.backoffController.reset(), this.setDatafileFromCacheIfAvailable(), this.syncDatafile())
            }, e.prototype.stop = function() {
                return rV.debug("Datafile manager stopped"), this.isStarted = !1, this.currentTimeout && (clearTimeout(this.currentTimeout), this.currentTimeout = null), this.emitter.removeAllListeners(), this.currentRequest && (this.currentRequest.abort(), this.currentRequest = null), Promise.resolve()
            }, e.prototype.onReady = function() {
                return this.readyPromise
            }, e.prototype.on = function(e, t) {
                return this.emitter.on(e, t)
            }, e.prototype.onRequestRejected = function(e) {
                this.isStarted && (this.backoffController.countError(), e instanceof Error ? rV.error("Error fetching datafile: %s", e.message, e) : "string" == typeof e ? rV.error("Error fetching datafile: %s", e) : rV.error("Error fetching datafile"))
            }, e.prototype.onRequestResolved = function(e) {
                if (this.isStarted) {
                    void 0 !== e.statusCode && rz(e.statusCode) ? this.backoffController.reset() : this.backoffController.countError(), this.trySavingLastModified(e.headers);
                    var t, i = this.getNextDatafileFromResponse(e);
                    "" !== i && (rV.info("Updating datafile from response"), this.currentDatafile = i, this.cache.set(this.cacheKey, i), this.isReadyPromiseSettled ? (null == (t = rF.getNotificationCenter(this.sdkKey, rV)) || t.sendNotifications(T.OPTIMIZELY_CONFIG_UPDATE), this.emitter.emit("update", {
                        datafile: i
                    })) : this.resolveReadyPromise())
                }
            }, e.prototype.onRequestComplete = function() {
                this.isStarted && (this.currentRequest = null, this.isReadyPromiseSettled || this.autoUpdate || this.rejectReadyPromise(Error("Failed to become ready")), this.autoUpdate && this.syncOnCurrentRequestComplete && this.syncDatafile(), this.syncOnCurrentRequestComplete = !1)
            }, e.prototype.syncDatafile = function() {
                var e = this,
                    t = {};
                this.lastResponseLastModified && (t["if-modified-since"] = this.lastResponseLastModified), rV.debug("Making datafile request to url %s with headers: %s", this.datafileUrl, function() {
                    return JSON.stringify(t)
                }), this.currentRequest = this.makeGetRequest(this.datafileUrl, t);
                var i = function() {
                    e.onRequestComplete()
                };
                this.currentRequest.responsePromise.then(function(t) {
                    e.onRequestResolved(t)
                }, function(t) {
                    e.onRequestRejected(t)
                }).then(i, i), this.autoUpdate && this.scheduleNextUpdate()
            }, e.prototype.resolveReadyPromise = function() {
                this.readyPromiseResolver(), this.isReadyPromiseSettled = !0
            }, e.prototype.rejectReadyPromise = function(e) {
                this.readyPromiseRejecter(e), this.isReadyPromiseSettled = !0
            }, e.prototype.scheduleNextUpdate = function() {
                var e = this,
                    t = Math.max(this.backoffController.getDelay(), this.updateInterval);
                rV.debug("Scheduling sync in %s ms", t), this.currentTimeout = setTimeout(function() {
                    e.currentRequest ? e.syncOnCurrentRequestComplete = !0 : e.syncDatafile()
                }, t)
            }, e.prototype.getNextDatafileFromResponse = function(e) {
                return (rV.debug("Response status code: %s", e.statusCode), void 0 === e.statusCode || 304 === e.statusCode) ? "" : rz(e.statusCode) ? e.body : (rV.error("Datafile fetch request failed with status: ".concat(e.statusCode)), "")
            }, e.prototype.trySavingLastModified = function(e) {
                var t = e["last-modified"] || e["Last-Modified"];
                void 0 !== t && (this.lastResponseLastModified = t, rV.debug("Saved last modified header value from response: %s", this.lastResponseLastModified))
            }, e.prototype.setDatafileFromCacheIfAvailable = function() {
                var e = this;
                this.cache.get(this.cacheKey).then(function(t) {
                    e.isStarted && !e.isReadyPromiseSettled && t && (rV.debug("Using datafile from cache"), e.currentDatafile = t, e.resolveReadyPromise())
                })
            }, e
        }()),
        rq = function() {
            function e(e, t, i, r) {
                this.apiKey = e, this.apiHost = t, this.pixelUrl = i, this.segmentsToCheck = r
            }
            return e.prototype.equals = function(e) {
                var t, i;
                return this.apiHost === e.apiHost && this.apiKey === e.apiKey && this.pixelUrl === e.pixelUrl && (t = this.segmentsToCheck, i = e.segmentsToCheck, t.length === i.length && t.every(function(e, t) {
                    return e === i[t]
                }))
            }, e
        }(),
        rj = "Running",
        rK = "$opt_",
        rH = "PROJECT_CONFIG",
        rW = function(e, t) {
            void 0 === t && (t = null);
            var i, r, n, o, a = ((o = iP({}, e)).audiences = (e.audiences || []).map(function(e) {
                return iP({}, e)
            }), o.experiments = (e.experiments || []).map(function(e) {
                return iP({}, e)
            }), o.featureFlags = (e.featureFlags || []).map(function(e) {
                return iP({}, e)
            }), o.groups = (e.groups || []).map(function(e) {
                var t = iP({}, e);
                return t.experiments = (e.experiments || []).map(function(e) {
                    return iP({}, e)
                }), t
            }), o.rollouts = (e.rollouts || []).map(function(e) {
                var t = iP({}, e);
                return t.experiments = (e.experiments || []).map(function(e) {
                    return iP({}, e)
                }), t
            }), o.environmentKey = null != (r = e.environmentKey) ? r : "", o.sdkKey = null != (n = e.sdkKey) ? n : "", o);
            a.__datafileStr = null === t ? JSON.stringify(e) : t, (a.audiences || []).forEach(function(e) {
                e.conditions = JSON.parse(e.conditions)
            }), a.audiencesById = iU(a.audiences, "id"), iP(a.audiencesById, iU(a.typedAudiences, "id")), a.attributeKeyMap = iU(a.attributes, "key"), a.eventKeyMap = iU(a.events, "key"), a.groupIdMap = iU(a.groups, "id"), Object.keys(a.groupIdMap || {}).forEach(function(e) {
                (a.groupIdMap[e].experiments || []).forEach(function(t) {
                    a.experiments.push(iP(t, {
                        groupId: e
                    }))
                })
            }), a.rolloutIdMap = iU(a.rollouts || [], "id"), iF(a.rolloutIdMap || {}).forEach(function(e) {
                (e.experiments || []).forEach(function(e) {
                    a.experiments.push(e), e.variationKeyMap = iU(e.variations, "key")
                })
            });
            var s = new Set;
            Object.keys(a.audiencesById).map(function(e) {
                return rY(a.audiencesById[e])
            }).forEach(function(e) {
                e.forEach(function(e) {
                    s.add(e)
                })
            });
            var l = Array.from(s),
                u = !1,
                c = "",
                d = "",
                p = "";
            return a.integrations && (a.integrationKeyMap = iU(a.integrations, "key"), a.integrations.forEach(function(e) {
                if (!("key" in e)) throw Error(iz(i8.MISSING_INTEGRATION_KEY, rH));
                "odp" === e.key && (u = !0, d = d || e.publicKey || "", c = c || e.host || "", p = p || e.pixelUrl || "")
            })), u ? a.odpIntegrationConfig = {
                integrated: !0,
                odpConfig: new rq(d, c, p, l)
            } : a.odpIntegrationConfig = {
                integrated: !1
            }, a.experimentKeyMap = iU(a.experiments, "key"), a.experimentIdMap = iU(a.experiments, "id"), a.variationIdMap = {}, a.variationVariableUsageMap = {}, (a.experiments || []).forEach(function(e) {
                e.variationKeyMap = iU(e.variations, "key"), iP(a.variationIdMap, iU(e.variations, "id")), iF(e.variationKeyMap || {}).forEach(function(e) {
                    e.variables && (a.variationVariableUsageMap[e.id] = iU(e.variables, "id"))
                })
            }), a.experimentFeatureMap = {}, a.featureKeyMap = iU(a.featureFlags || [], "key"), iF(a.featureKeyMap || {}).forEach(function(e) {
                e.variables.forEach(function(e) {
                    e.type === ra.STRING && e.subType === ra.JSON && (e.type = ra.JSON, delete e.subType)
                }), e.variableKeyMap = iU(e.variables, "key"), (e.experimentIds || []).forEach(function(t) {
                    a.experimentFeatureMap[t] ? a.experimentFeatureMap[t].push(e.id) : a.experimentFeatureMap[t] = [e.id]
                })
            }), a.flagRulesMap = {}, (a.featureFlags || []).forEach(function(e) {
                var t = [];
                e.experimentIds.forEach(function(e) {
                    var i = a.experimentIdMap[e];
                    i && t.push(i)
                });
                var i = a.rolloutIdMap[e.rolloutId];
                i && t.push.apply(t, i.experiments), a.flagRulesMap[e.key] = t
            }), a.flagVariationsMap = {}, Object.keys(i = a.flagRulesMap || {}).map(function(e) {
                return [e, i[e]]
            }).forEach(function(e) {
                var t = e[0],
                    i = e[1],
                    r = [];
                i.forEach(function(e) {
                    e.variations.forEach(function(e) {
                        iV(r, function(t) {
                            return t.id === e.id
                        }) || r.push(e)
                    })
                }), a.flagVariationsMap[t] = r
            }), a
        },
        rY = function(e) {
            return e.conditions ? rX(e.conditions) : []
        },
        rX = function(e) {
            var t = [];
            return ["and", "or", "not"].includes(e) ? [] : (Array.isArray(e) ? e.forEach(function(e) {
                return t.push.apply(t, rX(e))
            }) : "qualified" === e.match && t.push(e.value), t)
        },
        rQ = function(e, t) {
            var i = e.experimentIdMap[t];
            if (!i) throw Error(iz(i8.INVALID_EXPERIMENT_ID, rH, t));
            return i.layerId
        },
        rJ = function(e, t, i) {
            var r = e.attributeKeyMap[t],
                n = 0 === t.indexOf(rK);
            return r ? (n && i.log(i6.WARNING, "Attribute %s unexpectedly has reserved prefix %s; using attribute ID instead of reserved attribute name.", t, rK), r.id) : n ? t : (i.log(i6.DEBUG, i8.UNRECOGNIZED_ATTRIBUTE, rH, t), null)
        },
        r$ = function(e, t) {
            var i = e.eventKeyMap[t];
            return i ? i.id : null
        },
        rZ = function(e, t) {
            var i = e.experimentKeyMap[t];
            if (!i) throw Error(iz(i8.INVALID_EXPERIMENT_KEY, rH, t));
            return i.status
        },
        r0 = function(e, t) {
            var i = e.experimentIdMap[t];
            if (!i) throw Error(iz(i8.INVALID_EXPERIMENT_ID, rH, t));
            return i.audienceConditions || i.audienceIds
        },
        r1 = function(e, t) {
            return e.variationIdMap.hasOwnProperty(t) ? e.variationIdMap[t].key : null
        },
        r2 = function(e, t, i) {
            var r = e.experimentKeyMap[t];
            return r.variationKeyMap.hasOwnProperty(i) ? r.variationKeyMap[i].id : null
        },
        r5 = function(e, t) {
            if (e.experimentKeyMap.hasOwnProperty(t)) {
                var i = e.experimentKeyMap[t];
                if (i) return i
            }
            throw Error(iz(i8.EXPERIMENT_KEY_NOT_IN_DATAFILE, rH, t))
        },
        r3 = function(e, t) {
            var i = e.experimentIdMap[t];
            if (!i) throw Error(iz(i8.INVALID_EXPERIMENT_ID, rH, t));
            return i.trafficAllocation
        },
        r4 = function(e, t, i) {
            if (e.experimentIdMap.hasOwnProperty(t)) {
                var r = e.experimentIdMap[t];
                if (r) return r
            }
            return i.log(i6.ERROR, i8.INVALID_EXPERIMENT_ID, rH, t), null
        },
        r6 = function(e, t, i) {
            if (!e) return null;
            var r = iV(e.flagVariationsMap[t], function(e) {
                return e.key === i
            });
            return r || null
        },
        r8 = function(e, t, i) {
            if (e.featureKeyMap.hasOwnProperty(t)) {
                var r = e.featureKeyMap[t];
                if (r) return r
            }
            return i.log(i6.ERROR, i8.FEATURE_NOT_IN_DATAFILE, rH, t), null
        },
        r7 = function(e, t, i, r) {
            var n = e.featureKeyMap[t];
            if (!n) return r.log(i6.ERROR, i8.FEATURE_NOT_IN_DATAFILE, rH, t), null;
            var o = n.variableKeyMap[i];
            return o || (r.log(i6.ERROR, i8.VARIABLE_KEY_NOT_IN_DATAFILE, rH, i, t), null)
        },
        r9 = function(e, t, i, r) {
            if (!t || !i) return null;
            if (!e.variationVariableUsageMap.hasOwnProperty(i.id)) return r.log(i6.ERROR, i8.VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT, rH, i.id), null;
            var n = e.variationVariableUsageMap[i.id][t.id];
            return n ? n.value : null
        },
        ne = function(e, t, i) {
            var r;
            switch (t) {
                case ra.BOOLEAN:
                    "true" !== e && "false" !== e ? (i.log(i6.ERROR, i8.UNABLE_TO_CAST_VALUE, rH, e, t), r = null) : r = "true" === e;
                    break;
                case ra.INTEGER:
                    isNaN(r = parseInt(e, 10)) && (i.log(i6.ERROR, i8.UNABLE_TO_CAST_VALUE, rH, e, t), r = null);
                    break;
                case ra.DOUBLE:
                    isNaN(r = parseFloat(e)) && (i.log(i6.ERROR, i8.UNABLE_TO_CAST_VALUE, rH, e, t), r = null);
                    break;
                case ra.JSON:
                    try {
                        r = JSON.parse(e)
                    } catch (n) {
                        i.log(i6.ERROR, i8.UNABLE_TO_CAST_VALUE, rH, e, t), r = null
                    }
                    break;
                default:
                    r = e
            }
            return r
        },
        nt = function(e) {
            return e.__datafileStr
        },
        ni = function(e) {
            try {
                t = rR(e.datafile)
            } catch (e) {
                return {
                    configObj: null,
                    error: e
                }
            }
            if (e.jsonSchemaValidator) try {
                e.jsonSchemaValidator.validate(t), e.logger.log(i6.INFO, i7.VALID_DATAFILE, rH)
            } catch (e) {
                return {
                    configObj: null,
                    error: e
                }
            } else e.logger.log(i6.INFO, i7.SKIPPING_JSON_VALIDATION, rH);
            var t, i = [t];
            return "string" == typeof e.datafile && i.push(e.datafile), {
                configObj: rW.apply(void 0, i),
                error: null
            }
        },
        nr = function(e) {
            return !!e.sendFlagDecisions
        },
        nn = function() {
            function e(e, t) {
                void 0 === t && (t = 6e4), this.logger = e, this.timeout = t
            }
            return e.prototype.makeRequest = function(e, t, i, r) {
                var n = this,
                    o = new XMLHttpRequest;
                return {
                    responsePromise: new Promise(function(a, s) {
                        o.open(i, e, !0), n.setHeadersInXhr(t, o), o.onreadystatechange = function() {
                            if (o.readyState === XMLHttpRequest.DONE) {
                                if (0 === o.status) return void s(Error("Request error"));
                                var e = n.parseHeadersFromXhr(o);
                                a({
                                    statusCode: o.status,
                                    body: o.responseText,
                                    headers: e
                                })
                            }
                        }, o.timeout = n.timeout, o.ontimeout = function() {
                            n.logger.log(S.WARNING, "Request timed out")
                        }, o.send(r)
                    }),
                    abort: function() {
                        o.abort()
                    }
                }
            }, e.prototype.setHeadersInXhr = function(e, t) {
                Object.keys(e).forEach(function(i) {
                    var r = e[i];
                    "string" == typeof r && t.setRequestHeader(i, r)
                })
            }, e.prototype.parseHeadersFromXhr = function(e) {
                var t = this,
                    i = e.getAllResponseHeaders();
                if (null === i) return {};
                var r = i.split("\r\n"),
                    n = {};
                return r.forEach(function(e) {
                    try {
                        var i = e.indexOf(": ");
                        if (i > -1) {
                            var r = e.slice(0, i),
                                o = e.slice(i + 2);
                            r && o && (n[r] = o)
                        }
                    } catch (i) {
                        t.logger.log(S.WARNING, "Unable to parse & skipped header item '".concat(e, "'"))
                    }
                }), n
            }, e
        }(),
        no = function(e) {
            var t = e.browserCallback,
                i = e.nonBrowserCallback;
            return "u" > typeof window ? t(null == window ? void 0 : window.localStorage) : i()
        },
        na = function() {
            function e() {
                this.logger = i$()
            }
            return e.prototype.contains = function(e) {
                return iC(this, void 0, void 0, function() {
                    var t = this;
                    return iD(this, function(i) {
                        return [2, no({
                            browserCallback: function(t) {
                                return (null == t ? void 0 : t.getItem(e)) !== null
                            },
                            nonBrowserCallback: function() {
                                return t.logger.error(i8.LOCAL_STORAGE_DOES_NOT_EXIST), !1
                            }
                        })]
                    })
                })
            }, e.prototype.get = function(e) {
                return iC(this, void 0, void 0, function() {
                    var t = this;
                    return iD(this, function(i) {
                        return [2, no({
                            browserCallback: function(t) {
                                return (null == t ? void 0 : t.getItem(e)) || void 0
                            },
                            nonBrowserCallback: function() {
                                t.logger.error(i8.LOCAL_STORAGE_DOES_NOT_EXIST)
                            }
                        })]
                    })
                })
            }, e.prototype.remove = function(e) {
                return iC(this, void 0, void 0, function() {
                    var t = this;
                    return iD(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.contains(e)];
                            case 1:
                                if (i.sent()) return no({
                                    browserCallback: function(t) {
                                        null == t || t.removeItem(e)
                                    },
                                    nonBrowserCallback: function() {
                                        t.logger.error(i8.LOCAL_STORAGE_DOES_NOT_EXIST)
                                    }
                                }), [2, !0];
                                return [2, !1]
                        }
                    })
                })
            }, e.prototype.set = function(e, t) {
                return iC(this, void 0, void 0, function() {
                    var i = this;
                    return iD(this, function(r) {
                        return [2, no({
                            browserCallback: function(i) {
                                null == i || i.setItem(e, t)
                            },
                            nonBrowserCallback: function() {
                                i.logger.error(i8.LOCAL_STORAGE_DOES_NOT_EXIST)
                            }
                        })]
                    })
                })
            }, e
        }(),
        ns = function() {
            function e(e) {
                void 0 === e && (e = null), this._value = e, this._time = Date.now()
            }
            return Object.defineProperty(e.prototype, "value", {
                get: function() {
                    return this._value
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "time", {
                get: function() {
                    return this._time
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.is_stale = function(e) {
                return !(e <= 0) && Date.now() - this._time >= e
            }, e
        }(),
        nl = function() {
            function e(e) {
                var t = e.maxSize,
                    i = e.timeout;
                this._map = new Map;
                var r = i$();
                r.debug("Provisioning cache with maxSize of ".concat(t)), r.debug("Provisioning cache with timeout of ".concat(i)), this._maxSize = t, this._timeout = i
            }
            return Object.defineProperty(e.prototype, "map", {
                get: function() {
                    return this._map
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "maxSize", {
                get: function() {
                    return this._maxSize
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "timeout", {
                get: function() {
                    return this._timeout
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.lookup = function(e) {
                if (this._maxSize <= 0) return null;
                var t = this._map.get(e);
                return t ? t.is_stale(this._timeout) ? (this._map.delete(e), null) : (this._map.delete(e), this._map.set(e, t), t.value) : null
            }, e.prototype.save = function(e) {
                var t = e.key,
                    i = e.value;
                if (!(this._maxSize <= 0) && (this._map.get(t) && this._map.delete(t), this._map.set(t, new ns(i)), this._map.size > this._maxSize)) {
                    var r = this._map.keys().next().value;
                    this._map.delete(r)
                }
            }, e.prototype.reset = function() {
                this._maxSize <= 0 || this._map.clear()
            }, e.prototype.peek = function(e) {
                if (this._maxSize <= 0) return null;
                var t, i = this._map.get(e);
                return null != (t = null == i ? void 0 : i.value) ? t : null
            }, e
        }(),
        nu = function(e) {
            function t(t) {
                var i, r;
                return e.call(this, {
                    maxSize: null != (i = null == t ? void 0 : t.maxSize) ? i : 100,
                    timeout: null != (r = null == t ? void 0 : t.timeout) ? r : 6e5
                }) || this
            }
            return iN(t, e), t
        }(nl);
    iN(function(e) {
        var t, i;
        return m.call(this, {
            maxSize: null != (t = null == e ? void 0 : e.maxSize) ? t : 1e4,
            timeout: null != (i = null == e ? void 0 : e.timeout) ? i : 6e5
        }) || this
    }, m = nl);
    var nc = function() {
        function e() {
            this._keyForVuid = "optimizely-vuid", this._vuid = ""
        }
        return Object.defineProperty(e.prototype, "vuid", {
            get: function() {
                return this._vuid
            },
            enumerable: !1,
            configurable: !0
        }), e.instance = function(t) {
            return iC(this, void 0, void 0, function() {
                return iD(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (this._instance || (this._instance = new e), this._instance._vuid) return [3, 2];
                            return [4, this._instance.load(t)];
                        case 1:
                            i.sent(), i.label = 2;
                        case 2:
                            return [2, this._instance]
                    }
                })
            })
        }, e.prototype.load = function(t) {
            return iC(this, void 0, void 0, function() {
                var i;
                return iD(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, t.get(this._keyForVuid)];
                        case 1:
                            if (!((i = r.sent()) && e.isVuid(i))) return [3, 2];
                            return this._vuid = i, [3, 4];
                        case 2:
                            return this._vuid = this.makeVuid(), [4, this.save(this._vuid, t)];
                        case 3:
                            r.sent(), r.label = 4;
                        case 4:
                            return [2, this._vuid]
                    }
                })
            })
        }, e.prototype.makeVuid = function() {
            var t = iL().replace(/-/g, "").toLowerCase(),
                i = "".concat(e.vuid_prefix).concat(t);
            return i.length <= 32 ? i : i.substring(0, 32)
        }, e.prototype.save = function(e, t) {
            return iC(this, void 0, void 0, function() {
                return iD(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, t.set(this._keyForVuid, e)];
                        case 1:
                            return i.sent(), [2]
                    }
                })
            })
        }, e._reset = function() {
            this._instance._vuid = ""
        }, e.vuid_prefix = "vuid_", e.isVuid = function(t) {
            return (null == t ? void 0 : t.startsWith(e.vuid_prefix)) || !1
        }, e
    }();

    function nd(e) {
        var t = ["string", "number", "boolean"],
            i = !1;
        return e.forEach(function(e) {
            t.includes(typeof e) || null === e || (i = !0)
        }), i
    }
    var np = function(e, t, i, r) {
            this.type = e, this.action = t, this.identifiers = null != i ? i : new Map, this.data = null != r ? r : new Map
        },
        nh = function() {};
    (_ = x || (x = {}))[_.Running = 0] = "Running", _[_.Stopped = 1] = "Stopped";
    var nf = function() {
            function e(e) {
                var t, i, r, n = e.odpIntegrationConfig,
                    o = e.segmentManager,
                    a = e.eventManager,
                    s = e.logger,
                    l = this;
                this.ready = !1, this.status = x.Stopped, this.segmentManager = o, this.eventManager = a, this.logger = s, this.configPromise = (t = nh, i = nh, {
                    promise: r = new Promise(function(e, r) {
                        t = e, i = r
                    }),
                    resolve: t,
                    reject: i,
                    then: r.then.bind(r)
                });
                var u = [this.configPromise];
                this.isVuidEnabled() && u.push(this.initializeVuid()), this.initPromise = Promise.all(u), this.onReady().then(function() {
                    l.ready = !0, l.isVuidEnabled() && l.status === x.Running && l.registerVuid()
                }), n && this.updateSettings(n)
            }
            return e.prototype.getStatus = function() {
                return this.status
            }, e.prototype.start = function() {
                return iC(this, void 0, void 0, function() {
                    return iD(this, function(e) {
                        return this.status === x.Running ? [2] : this.odpIntegrationConfig ? this.odpIntegrationConfig.integrated ? (this.status = x.Running, this.segmentManager.updateSettings(this.odpIntegrationConfig.odpConfig), this.eventManager.updateSettings(this.odpIntegrationConfig.odpConfig), this.eventManager.start(), [2, Promise.resolve()]) : [2, Promise.reject(Error("start() called when ODP is not integrated"))] : [2, Promise.reject(Error("cannot start without ODP config"))]
                    })
                })
            }, e.prototype.stop = function() {
                return iC(this, void 0, void 0, function() {
                    return iD(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (this.status === x.Stopped) return [2];
                                return this.status = x.Stopped, [4, this.eventManager.stop()];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            }, e.prototype.onReady = function() {
                return this.initPromise
            }, e.prototype.isReady = function() {
                return this.ready
            }, e.prototype.updateSettings = function(e) {
                var t;
                return this.configPromise.resolve(), !(this.odpIntegrationConfig && (t = this.odpIntegrationConfig, t.integrated === e.integrated && (!t.integrated || !e.integrated || t.odpConfig.equals(e.odpConfig)))) && (this.odpIntegrationConfig = e, e.integrated ? this.status === x.Running ? (this.segmentManager.updateSettings(e.odpConfig), this.eventManager.updateSettings(e.odpConfig)) : this.start() : this.stop(), !0)
            }, e.prototype.fetchQualifiedSegments = function(e, t) {
                return void 0 === t && (t = []), iC(this, void 0, void 0, function() {
                    return iD(this, function(i) {
                        return this.odpIntegrationConfig ? this.odpIntegrationConfig.integrated ? nc.isVuid(e) ? [2, this.segmentManager.fetchQualifiedSegments(w.VUID, e, t)] : [2, this.segmentManager.fetchQualifiedSegments(w.FS_USER_ID, e, t)] : (this.logger.log(S.ERROR, i8.ODP_NOT_INTEGRATED), [2, null]) : (this.logger.log(S.ERROR, i8.ODP_CONFIG_NOT_AVAILABLE), [2, null])
                    })
                })
            }, e.prototype.identifyUser = function(e, t) {
                this.odpIntegrationConfig ? this.odpIntegrationConfig.integrated ? e && nc.isVuid(e) ? this.eventManager.identifyUser(void 0, e) : this.eventManager.identifyUser(e, t) : this.logger.log(S.INFO, i8.ODP_NOT_INTEGRATED) : this.logger.log(S.ERROR, i8.ODP_CONFIG_NOT_AVAILABLE)
            }, e.prototype.sendEvent = function(e) {
                var t = e.type,
                    i = e.action,
                    r = e.identifiers,
                    n = e.data,
                    o = t;
                if (("string" != typeof o || "" === o) && (o = "fullstack"), !this.odpIntegrationConfig) return void this.logger.log(S.ERROR, i8.ODP_CONFIG_NOT_AVAILABLE);
                if (!this.odpIntegrationConfig.integrated) return void this.logger.log(S.ERROR, i8.ODP_NOT_INTEGRATED);
                if (nd(n)) throw Error(i8.ODP_INVALID_DATA);
                if ("string" != typeof i || "" === i) throw Error("ODP action is not valid (cannot be empty).");
                this.eventManager.sendEvent(new np(o, i, r, n))
            }, e.prototype.initializeVuid = function() {
                return Promise.resolve()
            }, e.prototype.registerVuid = function() {
                if (!this.odpIntegrationConfig) return void this.logger.log(S.ERROR, i8.ODP_CONFIG_NOT_AVAILABLE);
                if (!this.odpIntegrationConfig.integrated) return void this.logger.log(S.INFO, i8.ODP_NOT_INTEGRATED);
                var e = this.getVuid();
                if (e) try {
                    this.eventManager.registerVuid(e)
                } catch (e) {
                    this.logger.log(S.ERROR, i8.ODP_VUID_REGISTRATION_FAILED)
                }
            }, e
        }(),
        ng = "ODP event send failed",
        nv = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return iN(t, e), t.prototype.shouldSendEvents = function(e) {
                return e.length <= 1 || (this.getLogger().log(S.ERROR, "".concat("ODP event send failed", " (browser only supports batch size 1)")), !1)
            }, t.prototype.getPixelApiEndpoint = function(e) {
                return new URL("v2/zaius.gif", e.pixelUrl).href
            }, t.prototype.generateRequestData = function(e, t) {
                var i = this.getPixelApiEndpoint(e),
                    r = e.apiKey,
                    n = t[0],
                    o = new URL(i);
                return n.identifiers.forEach(function(e, t) {
                    o.searchParams.append(t, e)
                }), n.data.forEach(function(e, t) {
                    o.searchParams.append(t, e)
                }), o.searchParams.append("tracker_id", r), o.searchParams.append("event_type", n.type), o.searchParams.append("vdl_action", n.action), {
                    method: "GET",
                    endpoint: o.toString(),
                    headers: {},
                    data: ""
                }
            }, t
        }(function() {
            function e(e, t) {
                this.requestHandler = e, this.logger = t
            }
            return e.prototype.getLogger = function() {
                return this.logger
            }, e.prototype.sendEvents = function(e, t) {
                var i;
                return iC(this, void 0, void 0, function() {
                    var r, n, o, a, s, l, u, c, d;
                    return iD(this, function(p) {
                        switch (p.label) {
                            case 0:
                                if (r = !1, 0 === t.length) return this.logger.log(S.ERROR, "".concat(ng, " (no events)")), [2, r];
                                if (!this.shouldSendEvents(t)) return [2, r];
                                o = (n = this.generateRequestData(e, t)).method, a = n.endpoint, s = n.headers, l = n.data, u = 0, p.label = 1;
                            case 1:
                                return p.trys.push([1, 3, , 4]), [4, this.requestHandler.makeRequest(a, s, o, l).responsePromise];
                            case 2:
                                return u = null != (i = p.sent().statusCode) ? i : u, [3, 4];
                            case 3:
                                return c = p.sent(), d = "network error", c instanceof Error && (d = c.message), this.logger.log(S.ERROR, "".concat(ng, " (").concat(d, ")")), r = !0, [3, 4];
                            case 4:
                                return u >= 400 && this.logger.log(S.ERROR, "".concat(ng, " (").concat(u, ")")), u >= 500 && (r = !0), [2, r]
                        }
                    })
                })
            }, e
        }()),
        nm = function(e) {
            "function" == typeof queueMicrotask ? queueMicrotask(e) : setTimeout(e)
        };
    (E = k || (k = {}))[E.Stopped = 0] = "Stopped", E[E.Running = 1] = "Running";
    var n_ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.hasNecessaryIdentifiers = function(e) {
                    return e.identifiers.size >= 0
                }, t
            }
            return iN(t, e), t.prototype.initParams = function(e, t, i) {
                this.queueSize = t || 100, this.batchSize = 1, this.flushInterval = 0, void 0 !== e && 1 !== e && this.getLogger().log(S.WARNING, "ODP event batch size must be 1 in the browser."), void 0 !== i && 0 !== i && this.getLogger().log(S.WARNING, "ODP event flush interval must be 0 in the browser.")
            }, t.prototype.discardEventsIfNeeded = function() {
                this.getLogger().log(S.DEBUG, "ODPConfig not ready. Leaving events in queue.")
            }, t
        }(function() {
            function e(e) {
                var t = e.odpConfig,
                    i = e.apiManager,
                    r = e.logger,
                    n = e.clientEngine,
                    o = e.clientVersion,
                    a = e.queueSize,
                    s = e.batchSize,
                    l = e.flushInterval,
                    u = e.userAgentParser,
                    c = e.retries;
                if (this.status = k.Stopped, this.queue = [], this.apiManager = i, this.logger = r, this.clientEngine = n, this.clientVersion = o, this.initParams(s, a, l), this.status = k.Stopped, this.userAgentParser = u, this.retries = c || 3, u) {
                    var d = u.parseUserAgentInfo(),
                        p = d.os,
                        h = d.device,
                        f = {
                            os: p.name,
                            os_version: p.version,
                            device_type: h.type,
                            model: h.model
                        };
                    this.userAgentData = new Map(Object.entries(f).filter(function(e) {
                        e[0];
                        var t = e[1];
                        return null != t && void 0 != t
                    }))
                }
                t && this.updateSettings(t)
            }
            return e.prototype.updateSettings = function(e) {
                this.odpConfig && this.odpConfig.equals(e) || (this.flush(), this.odpConfig = e)
            }, e.prototype.flush = function() {
                this.processQueue(!0)
            }, e.prototype.start = function() {
                this.odpConfig ? (this.status = k.Running, this.batchSize > 1 && this.setNewTimeout()) : this.logger.log(S.ERROR, i8.ODP_CONFIG_NOT_AVAILABLE)
            }, e.prototype.stop = function() {
                return iC(this, void 0, void 0, function() {
                    return iD(this, function(e) {
                        return this.logger.log(S.DEBUG, "Stop requested."), this.flush(), this.clearCurrentTimeout(), this.status = k.Stopped, this.logger.log(S.DEBUG, "Stopped. Queue Count: %s", this.queue.length), [2]
                    })
                })
            }, e.prototype.registerVuid = function(e) {
                var t = new Map;
                t.set(w.VUID, e);
                var i = new np(rc, N.INITIALIZED, t);
                this.sendEvent(i)
            }, e.prototype.identifyUser = function(e, t) {
                var i = new Map;
                if (!e && !t) return void this.logger.log(S.ERROR, i8.ODP_SEND_EVENT_FAILED_UID_MISSING);
                t && i.set(w.VUID, t), e && i.set(w.FS_USER_ID, e);
                var r = new np(rc, N.IDENTIFIED, i);
                this.sendEvent(r)
            }, e.prototype.sendEvent = function(e) {
                nd(e.data) ? this.logger.log(S.ERROR, "Event data found to be invalid.") : (e.data = this.augmentCommonData(e.data), this.enqueue(e))
            }, e.prototype.enqueue = function(e) {
                this.status === k.Stopped ? this.logger.log(S.WARNING, "Failed to Process ODP Event. ODPEventManager is not running.") : this.hasNecessaryIdentifiers(e) ? this.queue.length >= this.queueSize ? this.logger.log(S.WARNING, "Failed to Process ODP Event. Event Queue full. queueSize = %s.", this.queue.length) : (this.queue.push(e), this.processQueue()) : this.logger.log(S.ERROR, "ODP events should have at least one key-value pair in identifiers.")
            }, e.prototype.processQueue = function(e) {
                if (void 0 === e && (e = !1), this.status === k.Running) {
                    if (e)
                        for (this.clearCurrentTimeout(); this.queueContainsItems();) this.makeAndSend1Batch();
                    else if (this.queueHasBatches())
                        for (this.clearCurrentTimeout(); this.queueHasBatches();) this.makeAndSend1Batch();
                    this.batchSize > 1 && this.setNewTimeout()
                }
            }, e.prototype.clearCurrentTimeout = function() {
                clearTimeout(this.timeoutId), this.timeoutId = void 0
            }, e.prototype.setNewTimeout = function() {
                var e = this;
                void 0 === this.timeoutId && (this.timeoutId = setTimeout(function() {
                    return e.processQueue(!0)
                }, this.flushInterval))
            }, e.prototype.makeAndSend1Batch = function() {
                var e = this;
                if (this.odpConfig) {
                    var t = this.queue.splice(0, this.batchSize),
                        i = this.odpConfig;
                    t.length > 0 && nm(function() {
                        return iC(e, void 0, void 0, function() {
                            var e, r;
                            return iD(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        r = 0, n.label = 1;
                                    case 1:
                                        return [4, this.apiManager.sendEvents(i, t)];
                                    case 2:
                                        e = n.sent(), r += 1, n.label = 3;
                                    case 3:
                                        if (e && r < this.retries) return [3, 1];
                                        n.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    })
                }
            }, e.prototype.queueHasBatches = function() {
                return this.queueContainsItems() && this.queue.length % this.batchSize == 0
            }, e.prototype.queueContainsItems = function() {
                return this.queue.length > 0
            }, e.prototype.augmentCommonData = function(e) {
                var t = new Map(this.userAgentData);
                return t.set("idempotence_id", iL()), t.set("data_source_type", "sdk"), t.set("data_source", this.clientEngine), t.set("data_source_version", this.clientVersion), e.forEach(function(e, i) {
                    return t.set(i, e)
                }), t
            }, e.prototype.getLogger = function() {
                return this.logger
            }, e.prototype.getQueue = function() {
                return this.queue
            }, e
        }()),
        nE = function() {
            function e(e, t, i, r) {
                this.odpConfig = r, this._segmentsCache = e, this.odpSegmentApiManager = t, this.logger = i || i$("OdpSegmentManager")
            }
            return Object.defineProperty(e.prototype, "segmentsCache", {
                get: function() {
                    return this._segmentsCache
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.fetchQualifiedSegments = function(e, t, i) {
                return iC(this, void 0, void 0, function() {
                    var r, n, o, a, s, l;
                    return iD(this, function(u) {
                        switch (u.label) {
                            case 0:
                                if (!this.odpConfig) return this.logger.log(S.WARNING, i8.ODP_CONFIG_NOT_AVAILABLE), [2, null];
                                if (!(r = this.odpConfig.segmentsToCheck) || r.length <= 0) return this.logger.log(S.DEBUG, "No segments are used in the project. Returning an empty list."), [2, []];
                                if (n = this.makeCacheKey(e, t), o = i.includes(A.IGNORE_CACHE), (a = i.includes(A.RESET_CACHE)) && this.reset(), !o && !a) {
                                    if (s = this._segmentsCache.lookup(n)) return this.logger.log(S.DEBUG, 'ODP cache hit. Returning segments from cache "%s".', n), [2, s];
                                    this.logger.log(S.DEBUG, "ODP cache miss.")
                                }
                                return this.logger.log(S.DEBUG, "Making a call to ODP server."), [4, this.odpSegmentApiManager.fetchSegments(this.odpConfig.apiKey, this.odpConfig.apiHost, e, t, r)];
                            case 1:
                                return (l = u.sent()) && !o && this._segmentsCache.save({
                                    key: n,
                                    value: l
                                }), [2, l]
                        }
                    })
                })
            }, e.prototype.reset = function() {
                this._segmentsCache.reset()
            }, e.prototype.makeCacheKey = function(e, t) {
                return "".concat(e, "-$-").concat(t)
            }, e.prototype.updateSettings = function(e) {
                this.odpConfig = e, this.reset()
            }, e
        }(),
        ny = {
            $schema: "http://json-schema.org/draft-04/schema#",
            title: "Project Config JSON Schema",
            type: "object",
            properties: {
                projectId: {
                    type: "string",
                    required: !0
                },
                accountId: {
                    type: "string",
                    required: !0
                },
                groups: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                required: !0
                            },
                            policy: {
                                type: "string",
                                required: !0
                            },
                            trafficAllocation: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        entityId: {
                                            type: "string",
                                            required: !0
                                        },
                                        endOfRange: {
                                            type: "integer",
                                            required: !0
                                        }
                                    }
                                },
                                required: !0
                            },
                            experiments: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                            required: !0
                                        },
                                        key: {
                                            type: "string",
                                            required: !0
                                        },
                                        status: {
                                            type: "string",
                                            required: !0
                                        },
                                        layerId: {
                                            type: "string",
                                            required: !0
                                        },
                                        variations: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    id: {
                                                        type: "string",
                                                        required: !0
                                                    },
                                                    key: {
                                                        type: "string",
                                                        required: !0
                                                    }
                                                }
                                            },
                                            required: !0
                                        },
                                        trafficAllocation: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    entityId: {
                                                        type: "string",
                                                        required: !0
                                                    },
                                                    endOfRange: {
                                                        type: "integer",
                                                        required: !0
                                                    }
                                                }
                                            },
                                            required: !0
                                        },
                                        audienceIds: {
                                            type: "array",
                                            items: {
                                                type: "string"
                                            },
                                            required: !0
                                        },
                                        forcedVariations: {
                                            type: "object",
                                            required: !0
                                        }
                                    }
                                },
                                required: !0
                            }
                        }
                    },
                    required: !0
                },
                experiments: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                required: !0
                            },
                            key: {
                                type: "string",
                                required: !0
                            },
                            status: {
                                type: "string",
                                required: !0
                            },
                            layerId: {
                                type: "string",
                                required: !0
                            },
                            variations: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                            required: !0
                                        },
                                        key: {
                                            type: "string",
                                            required: !0
                                        }
                                    }
                                },
                                required: !0
                            },
                            trafficAllocation: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        entityId: {
                                            type: "string",
                                            required: !0
                                        },
                                        endOfRange: {
                                            type: "integer",
                                            required: !0
                                        }
                                    }
                                },
                                required: !0
                            },
                            audienceIds: {
                                type: "array",
                                items: {
                                    type: "string"
                                },
                                required: !0
                            },
                            forcedVariations: {
                                type: "object",
                                required: !0
                            }
                        }
                    },
                    required: !0
                },
                events: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            key: {
                                type: "string",
                                required: !0
                            },
                            experimentIds: {
                                type: "array",
                                items: {
                                    type: "string",
                                    required: !0
                                }
                            },
                            id: {
                                type: "string",
                                required: !0
                            }
                        }
                    },
                    required: !0
                },
                audiences: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                required: !0
                            },
                            name: {
                                type: "string",
                                required: !0
                            },
                            conditions: {
                                type: "string",
                                required: !0
                            }
                        }
                    },
                    required: !0
                },
                attributes: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                required: !0
                            },
                            key: {
                                type: "string",
                                required: !0
                            }
                        }
                    },
                    required: !0
                },
                version: {
                    type: "string",
                    required: !0
                },
                revision: {
                    type: "string",
                    required: !0
                },
                integrations: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            key: {
                                type: "string",
                                required: !0
                            },
                            host: {
                                type: "string"
                            },
                            publicKey: {
                                type: "string"
                            },
                            pixelUrl: {
                                type: "string"
                            }
                        }
                    }
                }
            }
        },
        nb = {
            $schema: "https://json-schema.org/draft/2019-09/schema",
            $id: "https://example.com/example.json",
            title: "ODP Response Schema",
            type: "object",
            required: ["data"],
            properties: {
                data: {
                    title: "The data Schema",
                    type: "object",
                    required: ["customer"],
                    properties: {
                        customer: {
                            title: "The customer Schema",
                            type: "object",
                            required: [],
                            properties: {
                                audiences: {
                                    title: "The audiences Schema",
                                    type: "object",
                                    required: ["edges"],
                                    properties: {
                                        edges: {
                                            title: "The edges Schema",
                                            type: "array",
                                            items: {
                                                title: "A Schema",
                                                type: "object",
                                                required: ["node"],
                                                properties: {
                                                    node: {
                                                        title: "The node Schema",
                                                        type: "object",
                                                        required: ["name", "state"],
                                                        properties: {
                                                            name: {
                                                                title: "The name Schema",
                                                                type: "string",
                                                                examples: ["has_email", "has_email_opted_in"]
                                                            },
                                                            state: {
                                                                title: "The state Schema",
                                                                type: "string",
                                                                examples: ["qualified"]
                                                            }
                                                        },
                                                        examples: []
                                                    }
                                                },
                                                examples: []
                                            },
                                            examples: []
                                        }
                                    },
                                    examples: []
                                }
                            },
                            examples: []
                        }
                    },
                    examples: []
                },
                errors: {
                    title: "The errors Schema",
                    type: "array",
                    default: [],
                    items: {
                        title: "A Schema",
                        type: "object",
                        required: ["message", "locations", "extensions"],
                        properties: {
                            message: {
                                title: "The message Schema",
                                type: "string",
                                examples: ["Exception while fetching data (/customer) : java.lang.RuntimeException: could not resolve _fs_user_id = asdsdaddddd"]
                            },
                            locations: {
                                title: "The locations Schema",
                                type: "array",
                                items: {
                                    title: "A Schema",
                                    type: "object",
                                    required: ["line", "column"],
                                    properties: {
                                        line: {
                                            title: "The line Schema",
                                            type: "integer",
                                            examples: [2]
                                        },
                                        column: {
                                            title: "The column Schema",
                                            type: "integer",
                                            examples: [3]
                                        }
                                    },
                                    examples: []
                                },
                                examples: []
                            },
                            path: {
                                title: "The path Schema",
                                type: "array",
                                items: {
                                    title: "A Schema",
                                    type: "string",
                                    examples: ["customer"]
                                },
                                examples: []
                            },
                            extensions: {
                                title: "The extensions Schema",
                                type: "object",
                                required: ["classification"],
                                properties: {
                                    classification: {
                                        title: "The classification Schema",
                                        type: "string",
                                        examples: ["InvalidIdentifierException"]
                                    }
                                },
                                examples: []
                            }
                        },
                        examples: []
                    },
                    examples: []
                }
            },
            examples: []
        },
        nI = [],
        nO = "Audience segments fetch failed",
        nR = function() {
            function e(e, t) {
                this.toGraphQLJson = function(e, t, i) {
                    return ix(ix(['{"query" : "query {customer', "(".concat(e, ' : \\"').concat(t, '\\") '), "{audiences", "(subset: ["], (null == i ? void 0 : i.map(function(e, t) {
                        return '\\"'.concat(e, '\\"').concat(t < i.length - 1 ? "," : "")
                    })) || "", !0), [']) {edges {node {name state}}}}}"}'], !1).join("")
                }, this.requestHandler = e, this.logger = t
            }
            return e.prototype.fetchSegments = function(e, t, i, r, n) {
                var o, a, s, l;
                return iC(this, void 0, void 0, function() {
                    var u, c, d, p, h, f, g, v;
                    return iD(this, function(m) {
                        switch (m.label) {
                            case 0:
                                if (!e || !t) return this.logger.log(S.ERROR, "".concat(nO, " (Parameters apiKey or apiHost invalid)")), [2, null];
                                if ((null == n ? void 0 : n.length) === 0) return [2, nI];
                                return u = "".concat(t, "/v3/graphql"), c = this.toGraphQLJson(i, r, n), [4, this.querySegments(e, u, i, r, c)];
                            case 1:
                                if (!(d = m.sent())) return this.logger.log(S.ERROR, "".concat(nO, " (network error)")), [2, null];
                                if (!(p = this.parseSegmentsResponseJson(d))) return this.logger.log(S.ERROR, "".concat(nO, " (decode error)")), [2, null];
                                if ((null == (o = p.errors) ? void 0 : o.length) > 0) return f = (h = p.errors[0].extensions).code, g = h.classification, "INVALID_IDENTIFIER_EXCEPTION" == f ? this.logger.log(S.ERROR, "".concat(nO, " (invalid identifier)")) : this.logger.log(S.ERROR, "".concat(nO, " (").concat(g, ")")), [2, null];
                                if (!(v = null == (l = null == (s = null == (a = null == p ? void 0 : p.data) ? void 0 : a.customer) ? void 0 : s.audiences) ? void 0 : l.edges)) return this.logger.log(S.ERROR, "".concat(nO, " (decode error)")), [2, null];
                                return [2, v.filter(function(e) {
                                    return "qualified" == e.node.state
                                }).map(function(e) {
                                    return e.node.name
                                })]
                        }
                    })
                })
            }, e.prototype.querySegments = function(e, t, i, r, n) {
                return iC(this, void 0, void 0, function() {
                    var i, r, o, a;
                    return iD(this, function(s) {
                        switch (s.label) {
                            case 0:
                                i = "POST", r = t, o = {
                                    "Content-Type": "application/json",
                                    "x-api-key": e
                                }, s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, , 4]), [4, this.requestHandler.makeRequest(r, o, i, n).responsePromise];
                            case 2:
                                return a = s.sent(), [3, 4];
                            case 3:
                                return s.sent(), [2, null];
                            case 4:
                                return [2, a.body]
                        }
                    })
                })
            }, e.prototype.parseSegmentsResponseJson = function(e) {
                var t = {};
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    return null
                }
                return ! function(e, t, i) {
                    void 0 === t && (t = ny), void 0 === i && (i = !0);
                    var r = "".concat("JSON_SCHEMA_VALIDATOR", " (").concat(t.title, ")");
                    if ("object" != typeof e || null === e) throw Error(iz(i8.NO_JSON_PROVIDED, r));
                    var n = (0, iR.validate)(e, t);
                    if (n.valid) return !0;
                    if (!i) return !1;
                    if (Array.isArray(n.errors)) throw Error(iz(i8.INVALID_DATAFILE, r, n.errors[0].property, n.errors[0].message));
                    throw Error(iz(i8.INVALID_JSON, r))
                }(t, nb, !1) ? null : t
            }, e
        }(),
        nS = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return iN(t, e), t.createInstance = function(e) {
                var i, r, n, o = e.logger,
                    a = e.odpOptions,
                    s = e.odpIntegrationConfig,
                    l = e.clientEngine,
                    u = e.clientVersion;
                o = o || i$(), l = l || re, u = u || ri;
                var c = void 0;
                return (null == s ? void 0 : s.integrated) && (c = s.odpConfig), i = (null == a ? void 0 : a.segmentsRequestHandler) ? a.segmentsRequestHandler : new nn(o, (null == a ? void 0 : a.segmentsApiTimeout) || 1e4), r = (null == a ? void 0 : a.segmentManager) ? a.segmentManager : new nE((null == a ? void 0 : a.segmentsCache) || new nu({
                    maxSize: null == a ? void 0 : a.segmentsCacheSize,
                    timeout: null == a ? void 0 : a.segmentsCacheTimeout
                }), new nR(i, o), o, c), n = (null == a ? void 0 : a.eventRequestHandler) ? a.eventRequestHandler : new nn(o, (null == a ? void 0 : a.eventApiTimeout) || 1e4), new t({
                    odpIntegrationConfig: s,
                    segmentManager: r,
                    eventManager: (null == a ? void 0 : a.eventManager) ? a.eventManager : new n_({
                        odpConfig: c,
                        apiManager: new nv(n, o),
                        logger: o,
                        clientEngine: l,
                        clientVersion: u,
                        flushInterval: null == a ? void 0 : a.eventFlushInterval,
                        batchSize: null == a ? void 0 : a.eventBatchSize,
                        queueSize: null == a ? void 0 : a.eventQueueSize,
                        userAgentParser: null == a ? void 0 : a.userAgentParser
                    }),
                    logger: o
                })
            }, t.prototype.initializeVuid = function() {
                return iC(this, void 0, void 0, function() {
                    var e;
                    return iD(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, nc.instance(t.cache)];
                            case 1:
                                return e = i.sent(), this.vuid = e.vuid, [2]
                        }
                    })
                })
            }, t.prototype.identifyUser = function(t, i) {
                t && nc.isVuid(t) ? e.prototype.identifyUser.call(this, void 0, t) : t && i && nc.isVuid(i) ? e.prototype.identifyUser.call(this, t, i) : e.prototype.identifyUser.call(this, t, i || this.vuid)
            }, t.prototype.sendEvent = function(t) {
                var i = t.type,
                    r = t.action,
                    n = t.identifiers,
                    o = t.data,
                    a = new Map(n);
                if (!n.has(w.VUID))
                    if (this.vuid) a.set(w.VUID, this.vuid);
                    else throw Error(i8.ODP_SEND_EVENT_FAILED_VUID_MISSING);
                e.prototype.sendEvent.call(this, {
                    type: i,
                    action: r,
                    identifiers: a,
                    data: o
                })
            }, t.prototype.isVuidEnabled = function() {
                return !0
            }, t.prototype.getVuid = function() {
                return this.vuid
            }, t.cache = new na, t
        }(nf);

    function nT(e, t, i) {
        return {
            variationKey: null,
            enabled: !1,
            variables: {},
            ruleKey: null,
            flagKey: e,
            userContext: t,
            reasons: i
        }
    }
    var nw = function() {
            function e(e) {
                var t, i = e.optimizely,
                    r = e.userId,
                    n = e.attributes,
                    o = e.shouldIdentifyUser,
                    a = this;
                this._qualifiedSegments = null, this.optimizely = i, this.userId = r, this.attributes = null != (t = iA({}, n)) ? t : {}, this.forcedDecisionsMap = {}, (void 0 === o || o) && this.optimizely.onReady().then(function(e) {
                    e.success && a.identifyUser()
                })
            }
            return e.prototype.identifyUser = function() {
                this.optimizely.identifyUser(this.userId)
            }, e.prototype.setAttribute = function(e, t) {
                this.attributes[e] = t
            }, e.prototype.getUserId = function() {
                return this.userId
            }, e.prototype.getAttributes = function() {
                return iA({}, this.attributes)
            }, e.prototype.getOptimizely = function() {
                return this.optimizely
            }, Object.defineProperty(e.prototype, "qualifiedSegments", {
                get: function() {
                    return this._qualifiedSegments
                },
                set: function(e) {
                    this._qualifiedSegments = e
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.decide = function(e, t) {
                return void 0 === t && (t = []), this.optimizely.decide(this.cloneUserContext(), e, t)
            }, e.prototype.decideForKeys = function(e, t) {
                return void 0 === t && (t = []), this.optimizely.decideForKeys(this.cloneUserContext(), e, t)
            }, e.prototype.decideAll = function(e) {
                return void 0 === e && (e = []), this.optimizely.decideAll(this.cloneUserContext(), e)
            }, e.prototype.trackEvent = function(e, t) {
                this.optimizely.track(e, this.userId, this.attributes, t)
            }, e.prototype.setForcedDecision = function(e, t) {
                var i, r = e.flagKey,
                    n = null != (i = e.ruleKey) ? i : i9.FORCED_DECISION_NULL_RULE_KEY,
                    o = t.variationKey;
                return this.forcedDecisionsMap[r] || (this.forcedDecisionsMap[r] = {}), this.forcedDecisionsMap[r][n] = {
                    variationKey: o
                }, !0
            }, e.prototype.getForcedDecision = function(e) {
                return this.findForcedDecision(e)
            }, e.prototype.removeForcedDecision = function(e) {
                var t, i = null != (t = e.ruleKey) ? t : i9.FORCED_DECISION_NULL_RULE_KEY,
                    r = e.flagKey,
                    n = !1;
                return this.forcedDecisionsMap.hasOwnProperty(r) && (this.forcedDecisionsMap[r].hasOwnProperty(i) && (delete this.forcedDecisionsMap[r][i], n = !0), 0 === Object.keys(this.forcedDecisionsMap[r]).length && delete this.forcedDecisionsMap[r]), n
            }, e.prototype.removeAllForcedDecisions = function() {
                return this.forcedDecisionsMap = {}, !0
            }, e.prototype.findForcedDecision = function(e) {
                var t, i = null != (t = e.ruleKey) ? t : i9.FORCED_DECISION_NULL_RULE_KEY,
                    r = e.flagKey;
                if (this.forcedDecisionsMap.hasOwnProperty(e.flagKey)) {
                    var n = this.forcedDecisionsMap[r];
                    if (n.hasOwnProperty(i)) return {
                        variationKey: n[i].variationKey
                    }
                }
                return null
            }, e.prototype.cloneUserContext = function() {
                var t = new e({
                    shouldIdentifyUser: !1,
                    optimizely: this.getOptimizely(),
                    userId: this.getUserId(),
                    attributes: this.getAttributes()
                });
                return Object.keys(this.forcedDecisionsMap).length > 0 && (t.forcedDecisionsMap = iA({}, this.forcedDecisionsMap)), t._qualifiedSegments = this._qualifiedSegments, t
            }, e.prototype.fetchQualifiedSegments = function(e) {
                return iC(this, void 0, void 0, function() {
                    var t;
                    return iD(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.optimizely.fetchQualifiedSegments(this.userId, e)];
                            case 1:
                                return t = i.sent(), this.qualifiedSegments = t, [2, null !== t]
                        }
                    })
                })
            }, e.prototype.isQualifiedFor = function(e) {
                return !!this._qualifiedSegments && this._qualifiedSegments.indexOf(e) > -1
            }, e
        }(),
        nN = ["and", "or", "not"];

    function nA(e, t) {
        if (Array.isArray(e)) {
            var i = e[0],
                r = e.slice(1);
            switch ("string" == typeof i && -1 === nN.indexOf(i) && (i = "or", r = e), i) {
                case "and":
                    var n = r,
                        o = t,
                        a = !1;
                    if (Array.isArray(n)) {
                        for (var s = 0; s < n.length; s++) {
                            var l = nA(n[s], o);
                            if (!1 === l) return !1;
                            null === l && (a = !0)
                        }
                        return !a || null
                    }
                    return null;
                case "not":
                    var u = r,
                        c = t;
                    if (Array.isArray(u) && u.length > 0) {
                        var d = nA(u[0], c);
                        return null === d ? null : !d
                    }
                    return null;
                default:
                    var p = r,
                        h = t,
                        f = !1;
                    if (Array.isArray(p)) {
                        for (var g = 0; g < p.length; g++) {
                            var v = nA(p[g], h);
                            if (!0 === v) return !0;
                            null === v && (f = !0)
                        }
                        return !!f && null
                    }
                    return null
            }
        }
        return t(e)
    }
    var nC = function() {
            function e(t, i, r) {
                this.sdkKey = null != (n = t.sdkKey) ? n : "", this.environmentKey = null != (o = t.environmentKey) ? o : "", this.attributes = t.attributes, this.audiences = e.getAudiences(t), this.events = t.events, this.revision = t.revision;
                var n, o, a = (t.featureFlags || []).reduce(function(e, t) {
                        return e[t.id] = t.variables, e
                    }, {}),
                    s = e.getVariableIdMap(t),
                    l = e.getExperimentsMap(t, a, s, r),
                    u = l.experimentsMapById,
                    c = l.experimentsMapByKey;
                this.experimentsMap = c, this.featuresMap = e.getFeaturesMap(t, a, u, s), this.datafile = i
            }
            return e.prototype.getDatafile = function() {
                return this.datafile
            }, e.getAudiences = function(e) {
                var t = [],
                    i = [];
                return (e.typedAudiences || []).forEach(function(e) {
                    t.push({
                        id: e.id,
                        conditions: JSON.stringify(e.conditions),
                        name: e.name
                    }), i.push(e.id)
                }), (e.audiences || []).forEach(function(e) {
                    -1 === i.indexOf(e.id) && "$opt_dummy_audience" != e.id && t.push({
                        id: e.id,
                        conditions: JSON.stringify(e.conditions),
                        name: e.name
                    })
                }), t
            }, e.getSerializedAudiences = function(t, i) {
                var r = "";
                if (t) {
                    var n = "";
                    t.forEach(function(t) {
                        var o = "";
                        if (t instanceof Array) o = e.getSerializedAudiences(t, i), o = "(".concat(o, ")");
                        else if (nN.indexOf(t) > -1) n = t.toUpperCase();
                        else {
                            var a = i[t] ? i[t].name : t;
                            r || "NOT" === n ? (n = "" === n ? "OR" : n, r = "" === r ? "".concat(n, ' "').concat(i[t].name, '"') : r.concat(" ".concat(n, ' "').concat(a, '"'))) : r = '"'.concat(a, '"')
                        }
                        "" !== o && ("" !== r || "NOT" === n ? (n = "" === n ? "OR" : n, r = "" === r ? "".concat(n, " ").concat(o) : r.concat(" ".concat(n, " ").concat(o))) : r = r.concat(o))
                    })
                }
                return r
            }, e.getExperimentAudiences = function(t, i) {
                return t.audienceConditions ? e.getSerializedAudiences(t.audienceConditions, i.audiencesById) : ""
            }, e.mergeFeatureVariables = function(e, t, i, r, n) {
                var o = (e[i] || []).reduce(function(e, t) {
                    return e[t.key] = {
                        id: t.id,
                        key: t.key,
                        type: t.type,
                        value: t.defaultValue
                    }, e
                }, {});
                return (r || []).forEach(function(e) {
                    var i = t[e.id],
                        r = {
                            id: e.id,
                            key: i.key,
                            type: i.type,
                            value: n ? e.value : i.defaultValue
                        };
                    o[i.key] = r
                }), o
            }, e.getVariationsMap = function(t, i, r, n) {
                return t.reduce(function(t, o) {
                    var a = e.mergeFeatureVariables(i, r, n, o.variables, o.featureEnabled);
                    return t[o.key] = {
                        id: o.id,
                        key: o.key,
                        featureEnabled: o.featureEnabled,
                        variablesMap: a
                    }, t
                }, {})
            }, e.getVariableIdMap = function(e) {
                return (e.featureFlags || []).reduce(function(e, t) {
                    return t.variables.forEach(function(t) {
                        e[t.id] = t
                    }), e
                }, {})
            }, e.getDeliveryRules = function(t, i, r, n, o) {
                return n.map(function(n) {
                    return {
                        id: n.id,
                        key: n.key,
                        audiences: e.getExperimentAudiences(n, t),
                        variationsMap: e.getVariationsMap(n.variations, i, o, r)
                    }
                })
            }, e.getRolloutExperimentIds = function(e) {
                var t = [];
                return (e || []).forEach(function(e) {
                    e.experiments.forEach(function(e) {
                        t.push(e.id)
                    })
                }), t
            }, e.getExperimentsMap = function(t, i, r, n) {
                var o = this.getRolloutExperimentIds(t.rollouts),
                    a = {},
                    s = {};
                return (t.experiments || []).forEach(function(l) {
                    if (-1 === o.indexOf(l.id)) {
                        var u = t.experimentFeatureMap[l.id],
                            c = "";
                        u && u.length > 0 && (c = u[0]);
                        var d = e.getVariationsMap(l.variations, i, r, c.toString()),
                            p = {
                                id: l.id,
                                key: l.key,
                                audiences: e.getExperimentAudiences(l, t),
                                variationsMap: d
                            };
                        a[l.id] = p, s[l.key] && n && n.warn("Duplicate experiment keys found in datafile: ".concat(l.key)), s[l.key] = p
                    }
                }), {
                    experimentsMapById: a,
                    experimentsMapByKey: s
                }
            }, e.getExperimentsKeyMap = function(e) {
                var t = {};
                for (var i in e) {
                    var r = e[i];
                    t[r.key] = r
                }
                return t
            }, e.getFeaturesMap = function(t, i, r, n) {
                var o = {};
                return t.featureFlags.forEach(function(a) {
                    var s = {},
                        l = [];
                    a.experimentIds.forEach(function(e) {
                        var t = r[e];
                        t && (s[t.key] = t), l.push(r[e])
                    });
                    var u = (a.variables || []).reduce(function(e, t) {
                            return e[t.key] = {
                                id: t.id,
                                key: t.key,
                                type: t.type,
                                value: t.defaultValue
                            }, e
                        }, {}),
                        c = [],
                        d = t.rolloutIdMap[a.rolloutId];
                    d && (c = e.getDeliveryRules(t, i, a.id, d.experiments, n)), o[a.key] = {
                        id: a.id,
                        key: a.key,
                        experimentRules: l,
                        deliveryRules: c,
                        experimentsMap: s,
                        variablesMap: u
                    }
                }), o
            }, e
        }(),
        nD = i$();

    function nx(e, t) {
        return e instanceof Error ? e.message : t || "Unknown error"
    }
    var nk = function() {
            function e(e) {
                this.updateListeners = [], this.configObj = null, this.optimizelyConfigObj = null, this.datafileManager = null;
                try {
                    if (this.jsonSchemaValidator = e.jsonSchemaValidator, !e.datafile && !e.sdkKey) {
                        var t = Error(iz(i8.DATAFILE_AND_SDK_KEY_MISSING, "PROJECT_CONFIG_MANAGER"));
                        this.readyPromise = Promise.resolve({
                            success: !1,
                            reason: nx(t)
                        }), nD.error(t);
                        return
                    }
                    var i = null;
                    e.datafile && (i = this.handleNewDatafile(e.datafile)), e.sdkKey && e.datafileManager ? (this.datafileManager = e.datafileManager, this.datafileManager.start(), this.readyPromise = this.datafileManager.onReady().then(this.onDatafileManagerReadyFulfill.bind(this), this.onDatafileManagerReadyReject.bind(this)), this.datafileManager.on("update", this.onDatafileManagerUpdate.bind(this))) : this.configObj ? this.readyPromise = Promise.resolve({
                        success: !0
                    }) : this.readyPromise = Promise.resolve({
                        success: !1,
                        reason: nx(i, "Invalid datafile")
                    })
                } catch (e) {
                    nD.error(e), this.readyPromise = Promise.resolve({
                        success: !1,
                        reason: nx(e, "Error in initialize")
                    })
                }
            }
            return e.prototype.onDatafileManagerReadyFulfill = function() {
                if (this.datafileManager) {
                    var e = this.handleNewDatafile(this.datafileManager.get());
                    return e ? {
                        success: !1,
                        reason: nx(e)
                    } : {
                        success: !0
                    }
                }
                return {
                    success: !1,
                    reason: nx(null, "Datafile manager is not provided")
                }
            }, e.prototype.onDatafileManagerReadyReject = function(e) {
                return {
                    success: !1,
                    reason: nx(e, "Failed to become ready")
                }
            }, e.prototype.onDatafileManagerUpdate = function() {
                this.datafileManager && this.handleNewDatafile(this.datafileManager.get())
            }, e.prototype.handleNewDatafile = function(e) {
                var t = this,
                    i = ni({
                        datafile: e,
                        jsonSchemaValidator: this.jsonSchemaValidator,
                        logger: nD
                    }),
                    r = i.configObj,
                    n = i.error;
                if (n) nD.error(n);
                else {
                    var o = this.configObj ? this.configObj.revision : "null";
                    r && o !== r.revision && (this.configObj = r, this.optimizelyConfigObj = null, nm(function() {
                        t.updateListeners.forEach(function(e) {
                            return e(r)
                        })
                    }))
                }
                return n
            }, e.prototype.getConfig = function() {
                return this.configObj
            }, e.prototype.getOptimizelyConfig = function() {
                var e;
                return !this.optimizelyConfigObj && this.configObj && (this.optimizelyConfigObj = (e = this.configObj, new nC(e, nt(this.configObj), nD))), this.optimizelyConfigObj
            }, e.prototype.onReady = function() {
                return this.readyPromise
            }, e.prototype.onUpdate = function(e) {
                var t = this;
                return this.updateListeners.push(e),
                    function() {
                        var i = t.updateListeners.indexOf(e);
                        i > -1 && t.updateListeners.splice(i, 1)
                    }
            }, e.prototype.stop = function() {
                this.datafileManager && this.datafileManager.stop(), this.updateListeners = []
            }, e
        }(),
        nP = "BUCKETER",
        nU = function(e) {
            var t = [],
                i = e.experimentIdMap[e.experimentId].groupId;
            if (i) {
                var r = e.groupIdMap[i];
                if (!r) throw Error(iz(i8.INVALID_GROUP_ID, nP, i));
                if ("random" === r.policy) {
                    var n = nL(r, e.bucketingId, e.userId, e.logger);
                    if (null === n) return e.logger.log(i6.INFO, i7.USER_NOT_IN_ANY_EXPERIMENT, nP, e.userId, i), t.push([i7.USER_NOT_IN_ANY_EXPERIMENT, nP, e.userId, i]), {
                        result: null,
                        reasons: t
                    };
                    if (n !== e.experimentId) return e.logger.log(i6.INFO, i7.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP, nP, e.userId, e.experimentKey, i), t.push([i7.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP, nP, e.userId, e.experimentKey, i]), {
                        result: null,
                        reasons: t
                    };
                    e.logger.log(i6.INFO, i7.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP, nP, e.userId, e.experimentKey, i), t.push([i7.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP, nP, e.userId, e.experimentKey, i])
                }
            }
            var o = nF("".concat(e.bucketingId).concat(e.experimentId));
            e.logger.log(i6.DEBUG, i7.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, nP, o, e.userId), t.push([i7.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, nP, o, e.userId]);
            var a = nM(o, e.trafficAllocationConfig);
            return null === a || e.variationIdMap[a] ? {
                result: a,
                reasons: t
            } : (a && (e.logger.log(i6.WARNING, i7.INVALID_VARIATION_ID, nP), t.push([i7.INVALID_VARIATION_ID, nP])), {
                result: null,
                reasons: t
            })
        },
        nL = function(e, t, i, r) {
            var n = nF("".concat(t).concat(e.id));
            return r.log(i6.DEBUG, i7.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, nP, n, i), nM(n, e.trafficAllocation)
        },
        nM = function(e, t) {
            for (var i = 0; i < t.length; i++)
                if (e < t[i].endOfRange) return t[i].entityId;
            return null
        },
        nF = function(e) {
            try {
                var t = iS.default.v3(e, 1);
                return Math.floor(t / 0x100000000 * 1e4)
            } catch (t) {
                throw Error(iz(i8.INVALID_BUCKETING_ID, nP, e, t.message))
            }
        },
        nV = "SEMANTIC VERSION",
        nz = i$();

    function nB(e) {
        return /^\d+$/.test(e)
    }

    function nG(e) {
        var t = e.indexOf("-"),
            i = e.indexOf("+");
        return !(t < 0) && (i < 0 || t < i)
    }

    function nq(e) {
        var t = e.indexOf("-"),
            i = e.indexOf("+");
        return !(i < 0) && (t < 0 || i < t)
    }

    function nj(e) {
        var t = e,
            i = "";
        if (/\s/.test(e)) return nz.warn(i7.UNKNOWN_MATCH_TYPE, nV, e), null;
        if (nG(e) ? (t = e.substring(0, e.indexOf("-")), i = e.substring(e.indexOf("-") + 1)) : nq(e) && (t = e.substring(0, e.indexOf("+")), i = e.substring(e.indexOf("+") + 1)), "string" != typeof t || "string" != typeof i) return null;
        var r = t.split(".").length - 1;
        if (r > 2) return nz.warn(i7.UNKNOWN_MATCH_TYPE, nV, e), null;
        var n = t.split(".");
        if (n.length != r + 1) return nz.warn(i7.UNKNOWN_MATCH_TYPE, nV, e), null;
        for (var o = 0; o < n.length; o++)
            if (!nB(n[o])) return nz.warn(i7.UNKNOWN_MATCH_TYPE, nV, e), null;
        return i && n.push(i), n
    }
    var nK = "CUSTOM_ATTRIBUTE_CONDITION_EVALUATOR",
        nH = i$(),
        nW = "exact",
        nY = "exists",
        nX = "semver_eq",
        nQ = "semver_ge",
        nJ = "semver_gt",
        n$ = "semver_le",
        nZ = "semver_lt",
        n0 = "substring",
        n1 = [nW, nY, "gt", "ge", "lt", "le", n0, nX, nZ, n$, nJ, nQ],
        n2 = {};

    function n5(e) {
        return "string" == typeof e || "boolean" == typeof e || iq(e)
    }

    function n3(e, t) {
        var i = t.getAttributes(),
            r = e.value,
            n = typeof r,
            o = e.name,
            a = i[o],
            s = typeof a;
        return !n5(r) || iq(r) && !iG(r) ? (nH.warn(i7.UNEXPECTED_CONDITION_VALUE, nK, JSON.stringify(e)), null) : null === a ? (nH.debug(i7.UNEXPECTED_TYPE_NULL, nK, JSON.stringify(e), o), null) : n5(a) && n === s ? iq(a) && !iG(a) ? (nH.warn(i7.OUT_OF_BOUNDS, nK, JSON.stringify(e), o), null) : r === a : (nH.warn(i7.UNEXPECTED_TYPE, nK, JSON.stringify(e), s, o), null)
    }

    function n4(e, t) {
        var i = t.getAttributes(),
            r = e.name,
            n = i[r],
            o = typeof n,
            a = e.value;
        return null !== a && iG(a) ? null === n ? (nH.debug(i7.UNEXPECTED_TYPE_NULL, nK, JSON.stringify(e), r), !1) : iq(n) ? !!iG(n) || (nH.warn(i7.OUT_OF_BOUNDS, nK, JSON.stringify(e), r), !1) : (nH.warn(i7.UNEXPECTED_TYPE, nK, JSON.stringify(e), o, r), !1) : (nH.warn(i7.UNEXPECTED_CONDITION_VALUE, nK, JSON.stringify(e)), !1)
    }

    function n6(e, t) {
        var i = t.getAttributes(),
            r = e.name,
            n = i[r],
            o = e.value;
        return "string" != typeof o ? (nH.warn(i7.UNEXPECTED_CONDITION_VALUE, nK, JSON.stringify(e)), null) : null === n ? (nH.debug(i7.UNEXPECTED_TYPE_NULL, nK, JSON.stringify(e), r), null) : "string" != typeof n ? (nH.warn(i7.UNEXPECTED_TYPE, nK, JSON.stringify(e), typeof n, r), null) : function(e, t) {
            var i = nj(t),
                r = nj(e);
            if (!i || !r) return null;
            for (var n = i.length, o = 0; o < r.length; o++)
                if (n <= o) return nG(e) || nq(e) ? 1 : -1;
                else if (nB(i[o])) {
                var a = parseInt(i[o]),
                    s = parseInt(r[o]);
                if (a > s) return 1;
                if (a < s) return -1
            } else if (i[o] < r[o]) return nG(e) && !nG(t) ? 1 : -1;
            else if (i[o] > r[o]) return !nG(e) && nG(t) ? -1 : 1;
            return nG(t) && !nG(e) ? -1 : 0
        }(o, n)
    }
    n2[nW] = n3, n2[nY] = function(e, t) {
        return null != t.getAttributes()[e.name]
    }, n2.gt = function(e, t) {
        var i = t.getAttributes()[e.name],
            r = e.value;
        return n4(e, t) && null !== r ? i > r : null
    }, n2.ge = function(e, t) {
        var i = t.getAttributes()[e.name],
            r = e.value;
        return n4(e, t) && null !== r ? i >= r : null
    }, n2.lt = function(e, t) {
        var i = t.getAttributes()[e.name],
            r = e.value;
        return n4(e, t) && null !== r ? i < r : null
    }, n2.le = function(e, t) {
        var i = t.getAttributes()[e.name],
            r = e.value;
        return n4(e, t) && null !== r ? i <= r : null
    }, n2[n0] = function(e, t) {
        var i = t.getAttributes(),
            r = e.name,
            n = i[e.name],
            o = typeof n,
            a = e.value;
        return "string" != typeof a ? (nH.warn(i7.UNEXPECTED_CONDITION_VALUE, nK, JSON.stringify(e)), null) : null === n ? (nH.debug(i7.UNEXPECTED_TYPE_NULL, nK, JSON.stringify(e), r), null) : "string" != typeof n ? (nH.warn(i7.UNEXPECTED_TYPE, nK, JSON.stringify(e), o, r), null) : -1 !== n.indexOf(a)
    }, n2[nX] = function(e, t) {
        var i = n6(e, t);
        return null === i ? null : 0 === i
    }, n2[nJ] = function(e, t) {
        var i = n6(e, t);
        return null === i ? null : i > 0
    }, n2[nQ] = function(e, t) {
        var i = n6(e, t);
        return null === i ? null : i >= 0
    }, n2[nZ] = function(e, t) {
        var i = n6(e, t);
        return null === i ? null : i < 0
    }, n2[n$] = function(e, t) {
        var i = n6(e, t);
        return null === i ? null : i <= 0
    };
    var n8 = Object.freeze({
            __proto__: null,
            evaluate: function(e, t) {
                var i = t.getAttributes(),
                    r = e.match;
                if (void 0 !== r && -1 === n1.indexOf(r)) return nH.warn(i7.UNKNOWN_MATCH_TYPE, nK, JSON.stringify(e)), null;
                var n = e.name;
                return i.hasOwnProperty(n) || r == nY ? (r && n2[r] || n3)(e, t) : (nH.debug(i7.MISSING_ATTRIBUTE_VALUE, nK, JSON.stringify(e), n), null)
            }
        }),
        n7 = i$(),
        n9 = "qualified",
        oe = [n9],
        ot = {};

    function oi(e, t) {
        return t.isQualifiedFor(e.value)
    }
    ot[n9] = oi;
    var or = Object.freeze({
            __proto__: null,
            evaluate: function(e, t) {
                var i = e.match;
                return void 0 !== i && -1 === oe.indexOf(i) ? (n7.warn(i7.UNKNOWN_MATCH_TYPE, "ODP_SEGMENT_CONDITION_EVALUATOR", JSON.stringify(e)), null) : (i && ot[i] || oi)(e, t)
            }
        }),
        on = i$(),
        oo = "AUDIENCE_EVALUATOR",
        oa = function() {
            function e(e) {
                this.typeToEvaluatorMap = iP({}, e, {
                    custom_attribute: n8,
                    third_party_dimension: or
                })
            }
            return e.prototype.evaluate = function(e, t, i) {
                var r = this;
                return !e || 0 === e.length || !!nA(e, function(e) {
                    var n = t[e];
                    if (n) {
                        on.log(i6.DEBUG, i7.EVALUATING_AUDIENCE, oo, e, JSON.stringify(n.conditions));
                        var o = nA(n.conditions, r.evaluateConditionWithUserAttributes.bind(r, i)),
                            a = null === o ? "UNKNOWN" : o.toString().toUpperCase();
                        return on.log(i6.DEBUG, i7.AUDIENCE_EVALUATION_RESULT, oo, e, a), o
                    }
                    return null
                })
            }, e.prototype.evaluateConditionWithUserAttributes = function(e, t) {
                var i = this.typeToEvaluatorMap[t.type];
                if (!i) return on.log(i6.WARNING, i7.UNKNOWN_CONDITION_TYPE, oo, JSON.stringify(t)), null;
                try {
                    return i.evaluate(t, e)
                } catch (e) {
                    on.log(i6.ERROR, i8.CONDITION_EVALUATOR_ERROR, oo, t.type, e.message)
                }
                return null
            }, e
        }();

    function os(e) {
        return "string" == typeof e && "" !== e
    }
    var ol = "DECISION_SERVICE",
        ou = function() {
            function e(e) {
                this.audienceEvaluator = new oa(e.UNSTABLE_conditionEvaluators), this.forcedVariationMap = {}, this.logger = e.logger, this.userProfileService = e.userProfileService || null
            }
            return e.prototype.getVariation = function(e, t, i, r) {
                void 0 === r && (r = {});
                var n = i.getUserId(),
                    o = i.getAttributes(),
                    a = this.getBucketingId(n, o),
                    s = [],
                    l = t.key;
                if (!this.checkIfExperimentIsActive(e, l)) return this.logger.log(i6.INFO, i7.EXPERIMENT_NOT_RUNNING, ol, l), s.push([i7.EXPERIMENT_NOT_RUNNING, ol, l]), {
                    result: null,
                    reasons: s
                };
                var u = this.getForcedVariation(e, l, n);
                s.push.apply(s, u.reasons);
                var c = u.result;
                if (c) return {
                    result: c,
                    reasons: s
                };
                var d = this.getWhitelistedVariation(t, n);
                s.push.apply(s, d.reasons);
                var p = d.result;
                if (p) return {
                    result: p.key,
                    reasons: s
                };
                var h = r[D.IGNORE_USER_PROFILE_SERVICE],
                    f = this.resolveExperimentBucketMap(n, o);
                if (!h && (p = this.getStoredVariation(e, t, n, f))) return this.logger.log(i6.INFO, i7.RETURNING_STORED_VARIATION, ol, p.key, l, n), s.push([i7.RETURNING_STORED_VARIATION, ol, p.key, l, n]), {
                    result: p.key,
                    reasons: s
                };
                var g = this.checkIfUserIsInAudience(e, t, ro.EXPERIMENT, i, "");
                if (s.push.apply(s, g.reasons), !g.result) return this.logger.log(i6.INFO, i7.USER_NOT_IN_EXPERIMENT, ol, n, l), s.push([i7.USER_NOT_IN_EXPERIMENT, ol, n, l]), {
                    result: null,
                    reasons: s
                };
                var v = nU(this.buildBucketerParams(e, t, a, n));
                s.push.apply(s, v.reasons);
                var m = v.result;
                return (m && (p = e.variationIdMap[m]), p) ? (this.logger.log(i6.INFO, i7.USER_HAS_VARIATION, ol, n, p.key, l), s.push([i7.USER_HAS_VARIATION, ol, n, p.key, l]), h || this.saveUserProfile(t, p, n, f), {
                    result: p.key,
                    reasons: s
                }) : (this.logger.log(i6.DEBUG, i7.USER_HAS_NO_VARIATION, ol, n, l), s.push([i7.USER_HAS_NO_VARIATION, ol, n, l]), {
                    result: null,
                    reasons: s
                })
            }, e.prototype.resolveExperimentBucketMap = function(e, t) {
                t = t || {};
                var i = this.getUserProfile(e) || {},
                    r = t[i9.STICKY_BUCKETING_KEY];
                return iP({}, i.experiment_bucket_map, r)
            }, e.prototype.checkIfExperimentIsActive = function(e, t) {
                return rZ(e, t) === rj
            }, e.prototype.getWhitelistedVariation = function(e, t) {
                var i = [];
                if (e.forcedVariations && e.forcedVariations.hasOwnProperty(t)) {
                    var r = e.forcedVariations[t];
                    if (e.variationKeyMap.hasOwnProperty(r)) return this.logger.log(i6.INFO, i7.USER_FORCED_IN_VARIATION, ol, t, r), i.push([i7.USER_FORCED_IN_VARIATION, ol, t, r]), {
                        result: e.variationKeyMap[r],
                        reasons: i
                    };
                    this.logger.log(i6.ERROR, i7.FORCED_BUCKETING_FAILED, ol, r, t), i.push([i7.FORCED_BUCKETING_FAILED, ol, r, t])
                }
                return {
                    result: null,
                    reasons: i
                }
            }, e.prototype.checkIfUserIsInAudience = function(e, t, i, r, n) {
                var o = [],
                    a = r0(e, t.id),
                    s = e.audiencesById;
                this.logger.log(i6.DEBUG, i7.EVALUATING_AUDIENCES_COMBINED, ol, i, n || t.key, JSON.stringify(a)), o.push([i7.EVALUATING_AUDIENCES_COMBINED, ol, i, n || t.key, JSON.stringify(a)]);
                var l = this.audienceEvaluator.evaluate(a, s, r);
                return this.logger.log(i6.INFO, i7.AUDIENCE_EVALUATION_RESULT_COMBINED, ol, i, n || t.key, l.toString().toUpperCase()), o.push([i7.AUDIENCE_EVALUATION_RESULT_COMBINED, ol, i, n || t.key, l.toString().toUpperCase()]), {
                    result: l,
                    reasons: o
                }
            }, e.prototype.buildBucketerParams = function(e, t, i, r) {
                return {
                    bucketingId: i,
                    experimentId: t.id,
                    experimentKey: t.key,
                    experimentIdMap: e.experimentIdMap,
                    experimentKeyMap: e.experimentKeyMap,
                    groupIdMap: e.groupIdMap,
                    logger: this.logger,
                    trafficAllocationConfig: r3(e, t.id),
                    userId: r,
                    variationIdMap: e.variationIdMap
                }
            }, e.prototype.getStoredVariation = function(e, t, i, r) {
                if (r.hasOwnProperty(t.id)) {
                    var n = r[t.id],
                        o = n.variation_id;
                    if (e.variationIdMap.hasOwnProperty(o)) return e.variationIdMap[n.variation_id];
                    this.logger.log(i6.INFO, i7.SAVED_VARIATION_NOT_FOUND, ol, i, o, t.key)
                }
                return null
            }, e.prototype.getUserProfile = function(e) {
                if (!this.userProfileService) return {
                    user_id: e,
                    experiment_bucket_map: {}
                };
                try {
                    return this.userProfileService.lookup(e)
                } catch (t) {
                    this.logger.log(i6.ERROR, i8.USER_PROFILE_LOOKUP_ERROR, ol, e, t.message)
                }
                return null
            }, e.prototype.saveUserProfile = function(e, t, i, r) {
                if (this.userProfileService) try {
                    r[e.id] = {
                        variation_id: t.id
                    }, this.userProfileService.save({
                        user_id: i,
                        experiment_bucket_map: r
                    }), this.logger.log(i6.INFO, i7.SAVED_VARIATION, ol, t.key, e.key, i)
                } catch (e) {
                    this.logger.log(i6.ERROR, i8.USER_PROFILE_SAVE_ERROR, ol, i, e.message)
                }
            }, e.prototype.getVariationForFeature = function(e, t, i, r) {
                void 0 === r && (r = {});
                var n = [],
                    o = this.getVariationForFeatureExperiment(e, t, i, r);
                n.push.apply(n, o.reasons);
                var a = o.result;
                if (null !== a.variation) return {
                    result: a,
                    reasons: n
                };
                var s = this.getVariationForRollout(e, t, i);
                n.push.apply(n, s.reasons);
                var l = s.result,
                    u = i.getUserId();
                return l.variation ? (this.logger.log(i6.DEBUG, i7.USER_IN_ROLLOUT, ol, u, t.key), n.push([i7.USER_IN_ROLLOUT, ol, u, t.key])) : (this.logger.log(i6.DEBUG, i7.USER_NOT_IN_ROLLOUT, ol, u, t.key), n.push([i7.USER_NOT_IN_ROLLOUT, ol, u, t.key])), {
                    result: l,
                    reasons: n
                }
            }, e.prototype.getVariationForFeatureExperiment = function(e, t, i, r) {
                void 0 === r && (r = {});
                var n, o, a = [],
                    s = null;
                if (t.experimentIds.length > 0)
                    for (o = 0; o < t.experimentIds.length; o++) {
                        var l = r4(e, t.experimentIds[o], this.logger);
                        if (l && (n = this.getVariationFromExperimentRule(e, t.key, l, i, r), a.push.apply(a, n.reasons), s = n.result)) {
                            var u = null;
                            return (u = l.variationKeyMap[s]) || (u = r6(e, t.key, s)), {
                                result: {
                                    experiment: l,
                                    variation: u,
                                    decisionSource: rn.FEATURE_TEST
                                },
                                reasons: a
                            }
                        }
                    } else this.logger.log(i6.DEBUG, i7.FEATURE_HAS_NO_EXPERIMENTS, ol, t.key), a.push([i7.FEATURE_HAS_NO_EXPERIMENTS, ol, t.key]);
                return {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: rn.FEATURE_TEST
                    },
                    reasons: a
                }
            }, e.prototype.getVariationForRollout = function(e, t, i) {
                var r, n, o, a = [];
                if (!t.rolloutId) return this.logger.log(i6.DEBUG, i7.NO_ROLLOUT_EXISTS, ol, t.key), a.push([i7.NO_ROLLOUT_EXISTS, ol, t.key]), {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: rn.ROLLOUT
                    },
                    reasons: a
                };
                var s = e.rolloutIdMap[t.rolloutId];
                if (!s) return this.logger.log(i6.ERROR, i8.INVALID_ROLLOUT_ID, ol, t.rolloutId, t.key), a.push([i8.INVALID_ROLLOUT_ID, ol, t.rolloutId, t.key]), {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: rn.ROLLOUT
                    },
                    reasons: a
                };
                var l = s.experiments;
                if (0 === l.length) return this.logger.log(i6.ERROR, i7.ROLLOUT_HAS_NO_EXPERIMENTS, ol, t.rolloutId), a.push([i7.ROLLOUT_HAS_NO_EXPERIMENTS, ol, t.rolloutId]), {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: rn.ROLLOUT
                    },
                    reasons: a
                };
                for (var u = 0; u < l.length;) {
                    if (r = this.getVariationFromDeliveryRule(e, t.key, l, u, i), a.push.apply(a, r.reasons), o = r.result, n = r.skipToEveryoneElse, o) return {
                        result: {
                            experiment: e.experimentIdMap[l[u].id],
                            variation: o,
                            decisionSource: rn.ROLLOUT
                        },
                        reasons: a
                    };
                    u = n ? l.length - 1 : u + 1
                }
                return {
                    result: {
                        experiment: null,
                        variation: null,
                        decisionSource: rn.ROLLOUT
                    },
                    reasons: a
                }
            }, e.prototype.getBucketingId = function(e, t) {
                var i = e;
                return null != t && "object" == typeof t && t.hasOwnProperty(i9.BUCKETING_ID) && ("string" == typeof t[i9.BUCKETING_ID] ? (i = String(t[i9.BUCKETING_ID]), this.logger.log(i6.DEBUG, i7.VALID_BUCKETING_ID, ol, i)) : this.logger.log(i6.WARNING, i7.BUCKETING_ID_NOT_STRING, ol)), i
            }, e.prototype.findValidatedForcedDecision = function(e, t, i, r) {
                var n, o = [],
                    a = t.getForcedDecision({
                        flagKey: i,
                        ruleKey: r
                    }),
                    s = null,
                    l = t.getUserId();
                return e && a && ((s = r6(e, i, n = a.variationKey)) ? r ? (this.logger.log(i6.INFO, i7.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED, n, i, r, l), o.push([i7.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED, n, i, r, l])) : (this.logger.log(i6.INFO, i7.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED, n, i, l), o.push([i7.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED, n, i, l])) : r ? (this.logger.log(i6.INFO, i7.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID, i, r, l), o.push([i7.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID, i, r, l])) : (this.logger.log(i6.INFO, i7.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID, i, l), o.push([i7.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID, i, l]))), {
                    result: s,
                    reasons: o
                }
            }, e.prototype.removeForcedVariation = function(e, t, i) {
                if (!e) throw Error(iz(i8.INVALID_USER_ID, ol));
                if (this.forcedVariationMap.hasOwnProperty(e)) delete this.forcedVariationMap[e][t], this.logger.log(i6.DEBUG, i7.VARIATION_REMOVED_FOR_USER, ol, i, e);
                else throw Error(iz(i8.USER_NOT_IN_FORCED_VARIATION, ol, e))
            }, e.prototype.setInForcedVariationMap = function(e, t, i) {
                this.forcedVariationMap.hasOwnProperty(e) || (this.forcedVariationMap[e] = {}), this.forcedVariationMap[e][t] = i, this.logger.log(i6.DEBUG, i7.USER_MAPPED_TO_FORCED_VARIATION, ol, i, t, e)
            }, e.prototype.getForcedVariation = function(e, t, i) {
                var r, n = [],
                    o = this.forcedVariationMap[i];
                if (!o) return this.logger.log(i6.DEBUG, i7.USER_HAS_NO_FORCED_VARIATION, ol, i), {
                    result: null,
                    reasons: n
                };
                try {
                    var a = r5(e, t);
                    if (!a.hasOwnProperty("id")) return this.logger.log(i6.ERROR, i8.IMPROPERLY_FORMATTED_EXPERIMENT, ol, t), n.push([i8.IMPROPERLY_FORMATTED_EXPERIMENT, ol, t]), {
                        result: null,
                        reasons: n
                    };
                    r = a.id
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), n.push(e.message), {
                        result: null,
                        reasons: n
                    }
                }
                var s = o[r];
                if (!s) return this.logger.log(i6.DEBUG, i7.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, ol, t, i), {
                    result: null,
                    reasons: n
                };
                var l = r1(e, s);
                return l ? (this.logger.log(i6.DEBUG, i7.USER_HAS_FORCED_VARIATION, ol, l, t, i), n.push([i7.USER_HAS_FORCED_VARIATION, ol, l, t, i])) : this.logger.log(i6.DEBUG, i7.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, ol, t, i), {
                    result: l,
                    reasons: n
                }
            }, e.prototype.setForcedVariation = function(e, t, i, r) {
                if (null != r && !os(r)) return this.logger.log(i6.ERROR, i8.INVALID_VARIATION_KEY, ol), !1;
                try {
                    var n, o = r5(e, t);
                    if (!o.hasOwnProperty("id")) return this.logger.log(i6.ERROR, i8.IMPROPERLY_FORMATTED_EXPERIMENT, ol, t), !1;
                    n = o.id
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), !1
                }
                if (null == r) try {
                    return this.removeForcedVariation(i, n, t), !0
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), !1
                }
                var a = r2(e, t, r);
                if (!a) return this.logger.log(i6.ERROR, i8.NO_VARIATION_FOR_EXPERIMENT_KEY, ol, r, t), !1;
                try {
                    return this.setInForcedVariationMap(i, n, a), !0
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), !1
                }
            }, e.prototype.getVariationFromExperimentRule = function(e, t, i, r, n) {
                void 0 === n && (n = {});
                var o = [],
                    a = this.findValidatedForcedDecision(e, r, t, i.key);
                o.push.apply(o, a.reasons);
                var s = a.result;
                if (s) return {
                    result: s.key,
                    reasons: o
                };
                var l = this.getVariation(e, i, r, n);
                return o.push.apply(o, l.reasons), {
                    result: l.result,
                    reasons: o
                }
            }, e.prototype.getVariationFromDeliveryRule = function(e, t, i, r, n) {
                var o, a, s = [],
                    l = !1,
                    u = i[r],
                    c = this.findValidatedForcedDecision(e, n, t, u.key);
                s.push.apply(s, c.reasons);
                var d = c.result;
                if (d) return {
                    result: d,
                    reasons: s,
                    skipToEveryoneElse: l
                };
                var p = n.getUserId(),
                    h = n.getAttributes(),
                    f = this.getBucketingId(p, h),
                    g = r === i.length - 1,
                    v = g ? "Everyone Else" : r + 1,
                    m = null,
                    _ = this.checkIfUserIsInAudience(e, u, ro.RULE, n, v);
                return (s.push.apply(s, _.reasons), _.result) ? (this.logger.log(i6.DEBUG, i7.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE, ol, p, v), s.push([i7.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE, ol, p, v]), a = nU(this.buildBucketerParams(e, u, f, p)), s.push.apply(s, a.reasons), (o = a.result) && (m = e.variationIdMap.hasOwnProperty(o) ? e.variationIdMap[o] : null), m ? (this.logger.log(i6.DEBUG, i7.USER_BUCKETED_INTO_TARGETING_RULE, ol, p, v), s.push([i7.USER_BUCKETED_INTO_TARGETING_RULE, ol, p, v])) : g || (this.logger.log(i6.DEBUG, i7.USER_NOT_BUCKETED_INTO_TARGETING_RULE, ol, p, v), s.push([i7.USER_NOT_BUCKETED_INTO_TARGETING_RULE, ol, p, v]), l = !0)) : (this.logger.log(i6.DEBUG, i7.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE, ol, p, v), s.push([i7.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE, ol, p, v])), {
                    result: m,
                    reasons: s,
                    skipToEveryoneElse: l
                }
            }, e
        }(),
        oc = "EVENT_TAG_UTILS";

    function od(e, t) {
        var i = e.revenue;
        if (null == i) return null;
        var r = "string" == typeof i ? parseInt(i) : i;
        return isFinite(r) ? (t.log(i6.INFO, i7.PARSED_REVENUE_VALUE, oc, r), r) : (t.log(i6.INFO, i7.FAILED_TO_PARSE_REVENUE, oc, i), null)
    }

    function op(e, t) {
        var i = e.value;
        if (null == i) return null;
        var r = "string" == typeof i ? parseFloat(i) : i;
        return isFinite(r) ? (t.log(i6.INFO, i7.PARSED_NUMERIC_VALUE, oc, r), r) : (t.log(i6.INFO, i7.FAILED_TO_PARSE_VALUE, oc, i), null)
    }
    var oh = "ATTRIBUTES_VALIDATOR";

    function of (e, t) {
        return "string" == typeof e && ("string" == typeof t || "boolean" == typeof t || iq(t) && iG(t))
    }
    var og = "custom",
        ov = "https://logx.optimizely.com/v1/events",
        om = "POST";

    function o_(e) {
        var t = e.attributes,
            i = e.userId,
            r = e.clientEngine,
            n = e.clientVersion,
            o = e.configObj,
            a = e.logger,
            s = !!o.anonymizeIP && o.anonymizeIP,
            l = o.botFiltering,
            u = {
                account_id: o.accountId,
                project_id: o.projectId,
                visitors: [{
                    snapshots: [],
                    visitor_id: i,
                    attributes: []
                }],
                revision: o.revision,
                client_name: r,
                client_version: n,
                anonymize_ip: s,
                enrich_decisions: !0
            };
        return t && Object.keys(t || {}).forEach(function(e) {
            var i = t[e];
            if ( of (e, i)) {
                var r = rJ(o, e, a);
                r && u.visitors[0].attributes.push({
                    entity_id: r,
                    key: e,
                    type: og,
                    value: i
                })
            }
        }), "boolean" == typeof l && u.visitors[0].attributes.push({
            entity_id: i9.BOT_FILTERING,
            key: i9.BOT_FILTERING,
            type: og,
            value: l
        }), u
    }

    function oE(e) {
        var t, i;
        return null != (i = null == (t = e.experiment) ? void 0 : t.key) ? i : ""
    }

    function oy(e) {
        var t, i;
        return null != (i = null == (t = e.variation) ? void 0 : t.key) ? i : ""
    }

    function ob(e) {
        var t, i;
        return null != (i = null == (t = e.variation) ? void 0 : t.featureEnabled) && i
    }

    function oI(e) {
        var t, i;
        return null != (i = null == (t = e.experiment) ? void 0 : t.id) ? i : null
    }

    function oO(e) {
        var t, i;
        return null != (i = null == (t = e.variation) ? void 0 : t.id) ? i : null
    }
    var oR = i$("EVENT_BUILDER"),
        oS = function(e) {
            var t = e.configObj,
                i = e.decisionObj,
                r = e.userId,
                n = e.flagKey,
                o = e.enabled,
                a = e.userAttributes,
                s = e.clientEngine,
                l = e.clientVersion,
                u = i.decisionSource,
                c = oE(i),
                d = oI(i),
                p = oy(i),
                h = oO(i),
                f = null !== d ? rQ(t, d) : null;
            return {
                type: "impression",
                timestamp: iB(),
                uuid: iL(),
                user: {
                    id: r,
                    attributes: ow(t, a)
                },
                context: {
                    accountId: t.accountId,
                    projectId: t.projectId,
                    revision: t.revision,
                    clientName: s,
                    clientVersion: l,
                    anonymizeIP: t.anonymizeIP || !1,
                    botFiltering: t.botFiltering
                },
                layer: {
                    id: f
                },
                experiment: {
                    id: d,
                    key: c
                },
                variation: {
                    id: h,
                    key: p
                },
                ruleKey: c,
                flagKey: n,
                ruleType: u,
                enabled: o
            }
        },
        oT = function(e) {
            var t = e.configObj,
                i = e.userId,
                r = e.userAttributes,
                n = e.clientEngine,
                o = e.clientVersion,
                a = e.eventKey,
                s = e.eventTags,
                l = r$(t, a),
                u = s ? od(s, oR) : null,
                c = s ? op(s, oR) : null;
            return {
                type: "conversion",
                timestamp: iB(),
                uuid: iL(),
                user: {
                    id: i,
                    attributes: ow(t, r)
                },
                context: {
                    accountId: t.accountId,
                    projectId: t.projectId,
                    revision: t.revision,
                    clientName: n,
                    clientVersion: o,
                    anonymizeIP: t.anonymizeIP || !1,
                    botFiltering: t.botFiltering
                },
                event: {
                    id: l,
                    key: a
                },
                revenue: u,
                value: c,
                tags: s
            }
        };

    function ow(e, t) {
        var i = [];
        return t && Object.keys(t || {}).forEach(function(r) {
            var n = t[r];
            if ( of (r, n)) {
                var o = rJ(e, r, oR);
                o && i.push({
                    entityId: o,
                    key: r,
                    value: n
                })
            }
        }), i
    }
    var oN = "USER_PROFILE_SERVICE_VALIDATOR",
        oA = "OPTIMIZELY",
        oC = function() {
            function e(e) {
                var t, i = this,
                    r = e.clientEngine;
                r || (e.logger.log(i6.INFO, i7.INVALID_CLIENT_ENGINE, oA, r), r = rt), this.clientEngine = r, this.clientVersion = e.clientVersion || ri, this.errorHandler = e.errorHandler, this.isOptimizelyConfigValid = e.isValidInstance, this.logger = e.logger, this.odpManager = e.odpManager;
                var n = null != (t = e.defaultDecideOptions) ? t : [];
                Array.isArray(n) || (this.logger.log(i6.DEBUG, i7.INVALID_DEFAULT_DECIDE_OPTIONS, oA), n = []);
                var o = {};
                n.forEach(function(e) {
                    D[e] ? o[e] = !0 : i.logger.log(i6.WARNING, i7.UNRECOGNIZED_DECIDE_OPTION, oA, e)
                }), this.defaultDecideOptions = o, this.projectConfigManager = new nk({
                    datafile: e.datafile,
                    jsonSchemaValidator: e.jsonSchemaValidator,
                    sdkKey: e.sdkKey,
                    datafileManager: e.datafileManager
                }), this.disposeOnUpdate = this.projectConfigManager.onUpdate(function(e) {
                    i.logger.log(i6.INFO, i7.UPDATED_OPTIMIZELY_CONFIG, oA, e.revision, e.projectId), i.notificationCenter.sendNotifications(T.OPTIMIZELY_CONFIG_UPDATE), i.updateOdpSettings()
                });
                var a = this.projectConfigManager.onReady(),
                    s = null;
                if (e.userProfileService) try {
                    (function(e) {
                        if ("object" == typeof e && null !== e) {
                            if ("function" != typeof e.lookup) throw Error(iz(i8.INVALID_USER_PROFILE_SERVICE, oN, "Missing function 'lookup'"));
                            if ("function" != typeof e.save) throw Error(iz(i8.INVALID_USER_PROFILE_SERVICE, oN, "Missing function 'save'"));
                            return !0
                        }
                        throw Error(iz(i8.INVALID_USER_PROFILE_SERVICE, oN))
                    })(e.userProfileService) && (s = e.userProfileService, this.logger.log(i6.INFO, i7.VALID_USER_PROFILE_SERVICE, oA))
                } catch (e) {
                    this.logger.log(i6.WARNING, e.message)
                }
                this.decisionService = new ou({
                    userProfileService: s,
                    logger: this.logger,
                    UNSTABLE_conditionEvaluators: e.UNSTABLE_conditionEvaluators
                }), this.notificationCenter = e.notificationCenter, this.eventProcessor = e.eventProcessor;
                var l = this.eventProcessor.start();
                this.readyPromise = Promise.all([a, l, e.odpManager ? e.odpManager.onReady() : Promise.resolve()]).then(function(e) {
                    return e[0]
                }), this.readyTimeouts = {}, this.nextReadyTimeoutId = 0
            }
            return e.prototype.getProjectConfig = function() {
                return this.projectConfigManager.getConfig()
            }, e.prototype.isValidInstance = function() {
                return this.isOptimizelyConfigValid && !!this.projectConfigManager.getConfig()
            }, e.prototype.activate = function(e, t, i) {
                try {
                    if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "activate"), null;
                    if (!this.validateInputs({
                            experiment_key: e,
                            user_id: t
                        }, i)) return this.notActivatingExperiment(e, t);
                    var r = this.projectConfigManager.getConfig();
                    if (!r) return null;
                    try {
                        var n = this.getVariation(e, t, i);
                        if (null === n) return this.notActivatingExperiment(e, t);
                        if (rZ(r, e) !== rj) return this.logger.log(i6.DEBUG, i7.SHOULD_NOT_DISPATCH_ACTIVATE, oA, e), n;
                        var o = r5(r, e),
                            a = o.variationKeyMap[n],
                            s = {
                                experiment: o,
                                variation: a,
                                decisionSource: rn.EXPERIMENT
                            };
                        return this.sendImpressionEvent(s, "", t, !0, i), n
                    } catch (i) {
                        return this.logger.log(i6.ERROR, i.message), this.logger.log(i6.INFO, i7.NOT_ACTIVATING_USER, oA, t, e), this.errorHandler.handleError(i), null
                    }
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.sendImpressionEvent = function(e, t, i, r, n) {
                var o = this.projectConfigManager.getConfig();
                if (o) {
                    var a = oS({
                        decisionObj: e,
                        flagKey: t,
                        enabled: r,
                        userId: i,
                        userAttributes: n,
                        clientEngine: this.clientEngine,
                        clientVersion: this.clientVersion,
                        configObj: o
                    });
                    this.eventProcessor.process(a), this.emitNotificationCenterActivate(e, t, i, r, n)
                }
            }, e.prototype.emitNotificationCenterActivate = function(e, t, i, r, n) {
                var o, a, s = this.projectConfigManager.getConfig();
                if (s) {
                    var l, u, c, d, p, h, f, g, v, m, _, E, y = e.decisionSource,
                        b = oE(e),
                        I = oI(e),
                        O = oy(e),
                        R = oO(e);
                    null !== I && "" !== O && (o = s.experimentIdMap[I]);
                    var S = (u = o_(l = {
                        attributes: n,
                        clientEngine: this.clientEngine,
                        clientVersion: this.clientVersion,
                        configObj: s,
                        experimentId: I,
                        ruleKey: b,
                        flagKey: t,
                        ruleType: y,
                        userId: i,
                        enabled: r,
                        variationId: R,
                        logger: this.logger
                    }), c = l.configObj, d = l.experimentId, p = l.variationId, h = l.ruleKey, f = l.ruleType, g = l.flagKey, v = l.enabled, m = d ? rQ(c, d) : null, _ = p ? r1(c, p) : null, E = {
                        decisions: [{
                            campaign_id: m,
                            experiment_id: d,
                            variation_id: p,
                            metadata: {
                                flag_key: g,
                                rule_key: h,
                                rule_type: f,
                                variation_key: _ = _ || "",
                                enabled: v
                            }
                        }],
                        events: [{
                            entity_id: m,
                            timestamp: iB(),
                            key: "campaign_activated",
                            uuid: iL()
                        }]
                    }, u.visitors[0].snapshots.push(E), {
                        httpVerb: om,
                        url: ov,
                        params: u
                    });
                    o && o.variationKeyMap && "" !== O && (a = o.variationKeyMap[O]), this.notificationCenter.sendNotifications(T.ACTIVATE, {
                        experiment: o,
                        userId: i,
                        attributes: n,
                        variation: a,
                        logEvent: S
                    })
                }
            }, e.prototype.track = function(e, t, i, r) {
                try {
                    if (!this.isValidInstance()) return void this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "track");
                    if (!this.validateInputs({
                            user_id: t,
                            event_key: e
                        }, i, r)) return;
                    var n = this.projectConfigManager.getConfig();
                    if (!n) return;
                    if (!n.eventKeyMap.hasOwnProperty(e)) {
                        this.logger.log(i6.WARNING, i7.EVENT_KEY_NOT_FOUND, oA, e), this.logger.log(i6.WARNING, i7.NOT_TRACKING_USER, oA, t);
                        return
                    }
                    r = this.filterEmptyValues(r);
                    var o = oT({
                        eventKey: e,
                        eventTags: r,
                        userId: t,
                        userAttributes: i,
                        clientEngine: this.clientEngine,
                        clientVersion: this.clientVersion,
                        configObj: n
                    });
                    this.logger.log(i6.INFO, i7.TRACK_EVENT, oA, e, t), this.eventProcessor.process(o), this.emitNotificationCenterTrack(e, t, i, r)
                } catch (e) {
                    this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), this.logger.log(i6.ERROR, i7.NOT_TRACKING_USER, oA, t)
                }
            }, e.prototype.emitNotificationCenterTrack = function(e, t, i, r) {
                try {
                    var n, o, a, s = this.projectConfigManager.getConfig();
                    if (!s) return;
                    var l = (n = {
                        attributes: i,
                        clientEngine: this.clientEngine,
                        clientVersion: this.clientVersion,
                        configObj: s,
                        eventKey: e,
                        eventTags: r,
                        logger: this.logger,
                        userId: t
                    }, o = o_(n), a = function(e, t, i, r) {
                        var n = {
                                events: []
                            },
                            o = {
                                entity_id: r$(e, t),
                                timestamp: iB(),
                                uuid: iL(),
                                key: t
                            };
                        if (r) {
                            var a = od(r, i);
                            null !== a && (o.revenue = a);
                            var s = op(r, i);
                            null !== s && (o.value = s), o.tags = r
                        }
                        return n.events.push(o), n
                    }(n.configObj, n.eventKey, n.logger, n.eventTags), o.visitors[0].snapshots = [a], {
                        httpVerb: om,
                        url: ov,
                        params: o
                    });
                    this.notificationCenter.sendNotifications(T.TRACK, {
                        eventKey: e,
                        userId: t,
                        attributes: i,
                        eventTags: r,
                        logEvent: l
                    })
                } catch (e) {
                    this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e)
                }
            }, e.prototype.getVariation = function(e, t, i) {
                try {
                    if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "getVariation"), null;
                    try {
                        if (!this.validateInputs({
                                experiment_key: e,
                                user_id: t
                            }, i)) return null;
                        var r, n = this.projectConfigManager.getConfig();
                        if (!n) return null;
                        var o = n.experimentKeyMap[e];
                        if (!o) return this.logger.log(i6.DEBUG, i8.INVALID_EXPERIMENT_KEY, oA, e), null;
                        var a = this.decisionService.getVariation(n, o, this.createInternalUserContext(t, i)).result,
                            s = (r = o.id, n.experimentFeatureMap.hasOwnProperty(r)) ? rr.FEATURE_TEST : rr.AB_TEST;
                        return this.notificationCenter.sendNotifications(T.DECISION, {
                            type: s,
                            userId: t,
                            attributes: i || {},
                            decisionInfo: {
                                experimentKey: e,
                                variationKey: a
                            }
                        }), a
                    } catch (e) {
                        return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                    }
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.setForcedVariation = function(e, t, i) {
                if (!this.validateInputs({
                        experiment_key: e,
                        user_id: t
                    })) return !1;
                var r = this.projectConfigManager.getConfig();
                if (!r) return !1;
                try {
                    return this.decisionService.setForcedVariation(r, e, t, i)
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), !1
                }
            }, e.prototype.getForcedVariation = function(e, t) {
                if (!this.validateInputs({
                        experiment_key: e,
                        user_id: t
                    })) return null;
                var i = this.projectConfigManager.getConfig();
                if (!i) return null;
                try {
                    return this.decisionService.getForcedVariation(i, e, t).result
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.validateInputs = function(e, t, i) {
                try {
                    if (e.hasOwnProperty("user_id")) {
                        var r = e.user_id;
                        if ("string" != typeof r || null === r || "undefined" === r) throw Error(iz(i8.INVALID_INPUT_FORMAT, oA, "user_id"));
                        delete e.user_id
                    }
                    return Object.keys(e).forEach(function(t) {
                        if (!os(e[t])) throw Error(iz(i8.INVALID_INPUT_FORMAT, oA, t))
                    }), t && function(e) {
                        if ("object" == typeof e && !Array.isArray(e) && null !== e) return Object.keys(e).forEach(function(t) {
                            if (void 0 === e[t]) throw Error(iz(i8.UNDEFINED_ATTRIBUTE, oh, t))
                        });
                        throw Error(iz(i8.INVALID_ATTRIBUTES, oh))
                    }(t), i && function(e) {
                        if ("object" != typeof e || Array.isArray(e) || null === e) throw Error(iz(i8.INVALID_EVENT_TAGS, "EVENT_TAGS_VALIDATOR"))
                    }(i), !0
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), !1
                }
            }, e.prototype.notActivatingExperiment = function(e, t) {
                return this.logger.log(i6.INFO, i7.NOT_ACTIVATING_USER, oA, t, e), null
            }, e.prototype.filterEmptyValues = function(e) {
                for (var t in e) e.hasOwnProperty(t) && (null === e[t] || void 0 === e[t]) && delete e[t];
                return e
            }, e.prototype.isFeatureEnabled = function(e, t, i) {
                try {
                    if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "isFeatureEnabled"), !1;
                    if (!this.validateInputs({
                            feature_key: e,
                            user_id: t
                        }, i)) return !1;
                    var r = this.projectConfigManager.getConfig();
                    if (!r) return !1;
                    var n = r8(r, e, this.logger);
                    if (!n) return !1;
                    var o = {},
                        a = this.createInternalUserContext(t, i),
                        s = this.decisionService.getVariationForFeature(r, n, a).result,
                        l = s.decisionSource,
                        u = oE(s),
                        c = oy(s),
                        d = ob(s);
                    l === rn.FEATURE_TEST && (o = {
                        experimentKey: u,
                        variationKey: c
                    }), (l === rn.FEATURE_TEST || l === rn.ROLLOUT && nr(r)) && this.sendImpressionEvent(s, n.key, t, d, i), !0 === d ? this.logger.log(i6.INFO, i7.FEATURE_ENABLED_FOR_USER, oA, e, t) : (this.logger.log(i6.INFO, i7.FEATURE_NOT_ENABLED_FOR_USER, oA, e, t), d = !1);
                    var p = {
                        featureKey: e,
                        featureEnabled: d,
                        source: s.decisionSource,
                        sourceInfo: o
                    };
                    return this.notificationCenter.sendNotifications(T.DECISION, {
                        type: rr.FEATURE,
                        userId: t,
                        attributes: i || {},
                        decisionInfo: p
                    }), d
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), !1
                }
            }, e.prototype.getEnabledFeatures = function(e, t) {
                var i = this;
                try {
                    var r = [];
                    if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "getEnabledFeatures"), r;
                    if (!this.validateInputs({
                            user_id: e
                        })) return r;
                    var n = this.projectConfigManager.getConfig();
                    if (!n) return r;
                    return iF(n.featureKeyMap).forEach(function(n) {
                        i.isFeatureEnabled(n.key, e, t) && r.push(n.key)
                    }), r
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), []
                }
            }, e.prototype.getFeatureVariable = function(e, t, i, r) {
                try {
                    if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "getFeatureVariable"), null;
                    return this.getFeatureVariableForType(e, t, null, i, r)
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getFeatureVariableForType = function(e, t, i, r, n) {
                if (!this.validateInputs({
                        feature_key: e,
                        variable_key: t,
                        user_id: r
                    }, n)) return null;
                var o = this.projectConfigManager.getConfig();
                if (!o) return null;
                var a = r8(o, e, this.logger);
                if (!a) return null;
                var s = r7(o, e, t, this.logger);
                if (!s) return null;
                if (i && s.type !== i) return this.logger.log(i6.WARNING, i7.VARIABLE_REQUESTED_WITH_WRONG_TYPE, oA, i, s.type), null;
                var l = this.createInternalUserContext(r, n),
                    u = this.decisionService.getVariationForFeature(o, a, l).result,
                    c = ob(u),
                    d = this.getFeatureVariableValueFromVariation(e, c, u.variation, s, r),
                    p = {};
                return u.decisionSource === rn.FEATURE_TEST && null !== u.experiment && null !== u.variation && (p = {
                    experimentKey: u.experiment.key,
                    variationKey: u.variation.key
                }), this.notificationCenter.sendNotifications(T.DECISION, {
                    type: rr.FEATURE_VARIABLE,
                    userId: r,
                    attributes: n || {},
                    decisionInfo: {
                        featureKey: e,
                        featureEnabled: c,
                        source: u.decisionSource,
                        variableKey: t,
                        variableValue: d,
                        variableType: s.type,
                        sourceInfo: p
                    }
                }), d
            }, e.prototype.getFeatureVariableValueFromVariation = function(e, t, i, r, n) {
                var o = this.projectConfigManager.getConfig();
                if (!o) return null;
                var a = r.defaultValue;
                if (null !== i) {
                    var s = r9(o, r, i, this.logger);
                    null !== s ? t ? (a = s, this.logger.log(i6.INFO, i7.USER_RECEIVED_VARIABLE_VALUE, oA, a, r.key, e)) : this.logger.log(i6.INFO, i7.FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE, oA, e, n, a) : this.logger.log(i6.INFO, i7.VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE, oA, r.key, i.key)
                } else this.logger.log(i6.INFO, i7.USER_RECEIVED_DEFAULT_VARIABLE_VALUE, oA, n, r.key, e);
                return ne(a, r.type, this.logger)
            }, e.prototype.getFeatureVariableBoolean = function(e, t, i, r) {
                try {
                    if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "getFeatureVariableBoolean"), null;
                    return this.getFeatureVariableForType(e, t, ra.BOOLEAN, i, r)
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getFeatureVariableDouble = function(e, t, i, r) {
                try {
                    if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "getFeatureVariableDouble"), null;
                    return this.getFeatureVariableForType(e, t, ra.DOUBLE, i, r)
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getFeatureVariableInteger = function(e, t, i, r) {
                try {
                    if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "getFeatureVariableInteger"), null;
                    return this.getFeatureVariableForType(e, t, ra.INTEGER, i, r)
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getFeatureVariableString = function(e, t, i, r) {
                try {
                    if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "getFeatureVariableString"), null;
                    return this.getFeatureVariableForType(e, t, ra.STRING, i, r)
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getFeatureVariableJSON = function(e, t, i, r) {
                try {
                    if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "getFeatureVariableJSON"), null;
                    return this.getFeatureVariableForType(e, t, ra.JSON, i, r)
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getAllFeatureVariables = function(e, t, i) {
                var r = this;
                try {
                    if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "getAllFeatureVariables"), null;
                    if (!this.validateInputs({
                            feature_key: e,
                            user_id: t
                        }, i)) return null;
                    var n = this.projectConfigManager.getConfig();
                    if (!n) return null;
                    var o = r8(n, e, this.logger);
                    if (!o) return null;
                    var a = this.createInternalUserContext(t, i),
                        s = this.decisionService.getVariationForFeature(n, o, a).result,
                        l = ob(s),
                        u = {};
                    o.variables.forEach(function(i) {
                        u[i.key] = r.getFeatureVariableValueFromVariation(e, l, s.variation, i, t)
                    });
                    var c = {};
                    return s.decisionSource === rn.FEATURE_TEST && null !== s.experiment && null !== s.variation && (c = {
                        experimentKey: s.experiment.key,
                        variationKey: s.variation.key
                    }), this.notificationCenter.sendNotifications(T.DECISION, {
                        type: rr.ALL_FEATURE_VARIABLES,
                        userId: t,
                        attributes: i || {},
                        decisionInfo: {
                            featureKey: e,
                            featureEnabled: l,
                            source: s.decisionSource,
                            variableValues: u,
                            sourceInfo: c
                        }
                    }), u
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.getOptimizelyConfig = function() {
                try {
                    if (!this.projectConfigManager.getConfig()) return null;
                    return this.projectConfigManager.getOptimizelyConfig()
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), null
                }
            }, e.prototype.close = function() {
                var e, t = this;
                try {
                    this.odpManager && this.odpManager.stop(), this.notificationCenter.clearAllNotificationListeners();
                    var i = null == (e = this.projectConfigManager.getConfig()) ? void 0 : e.sdkKey;
                    i && rF.removeNotificationCenter(i);
                    var r = this.eventProcessor.stop();
                    return this.disposeOnUpdate && (this.disposeOnUpdate(), this.disposeOnUpdate = null), this.projectConfigManager && this.projectConfigManager.stop(), Object.keys(this.readyTimeouts).forEach(function(e) {
                        var i = t.readyTimeouts[e];
                        clearTimeout(i.readyTimeout), i.onClose()
                    }), this.readyTimeouts = {}, r.then(function() {
                        return {
                            success: !0
                        }
                    }, function(e) {
                        return {
                            success: !1,
                            reason: String(e)
                        }
                    })
                } catch (e) {
                    return this.logger.log(i6.ERROR, e.message), this.errorHandler.handleError(e), Promise.resolve({
                        success: !1,
                        reason: String(e)
                    })
                }
            }, e.prototype.onReady = function(e) {
                var t, i, r = this;
                "object" == typeof e && null !== e && void 0 !== e.timeout && (t = e.timeout), iG(t) || (t = 3e4);
                var n = new Promise(function(e) {
                        i = e
                    }),
                    o = this.nextReadyTimeoutId;
                this.nextReadyTimeoutId++;
                var a = setTimeout(function() {
                    delete r.readyTimeouts[o], i({
                        success: !1,
                        reason: iz("onReady timeout expired after %s ms", t)
                    })
                }, t);
                return this.readyTimeouts[o] = {
                    readyTimeout: a,
                    onClose: function() {
                        i({
                            success: !1,
                            reason: "Instance closed"
                        })
                    }
                }, this.readyPromise.then(function() {
                    clearTimeout(a), delete r.readyTimeouts[o], i({
                        success: !0
                    })
                }), Promise.race([this.readyPromise, n])
            }, e.prototype.createUserContext = function(e, t) {
                var i, r = null != e ? e : null == (i = this.odpManager) ? void 0 : i.getVuid();
                return void 0 !== r && this.validateInputs({
                    user_id: r
                }, t) ? new nw({
                    optimizely: this,
                    userId: r,
                    attributes: t,
                    shouldIdentifyUser: !0
                }) : null
            }, e.prototype.createInternalUserContext = function(e, t) {
                return new nw({
                    optimizely: this,
                    userId: e,
                    attributes: t,
                    shouldIdentifyUser: !1
                })
            }, e.prototype.decide = function(e, t, i) {
                var r, n, o, a, s, l = this;
                void 0 === i && (i = []);
                var u = e.getUserId(),
                    c = e.getAttributes(),
                    d = this.projectConfigManager.getConfig(),
                    p = [];
                if (!this.isValidInstance() || !d) return this.logger.log(i6.INFO, i7.INVALID_OBJECT, oA, "decide"), nT(t, e, [rl.SDK_NOT_READY]);
                var h = d.featureKeyMap[t];
                if (!h) return this.logger.log(i6.ERROR, i8.FEATURE_NOT_IN_DATAFILE, oA, t), nT(t, e, [iz(rl.FLAG_KEY_INVALID, t)]);
                var f = this.getAllDecideOptions(i),
                    g = this.decisionService.findValidatedForcedDecision(d, e, t);
                p.push.apply(p, g.reasons);
                var v = g.result;
                if (v) s = {
                    experiment: null,
                    variation: v,
                    decisionSource: rn.FEATURE_TEST
                };
                else {
                    var m = this.decisionService.getVariationForFeature(d, h, e, f);
                    p.push.apply(p, m.reasons), s = m.result
                }
                var _ = s.decisionSource,
                    E = null != (n = null == (r = s.experiment) ? void 0 : r.key) ? n : null,
                    y = null != (a = null == (o = s.variation) ? void 0 : o.key) ? a : null,
                    b = ob(s);
                !0 === b ? this.logger.log(i6.INFO, i7.FEATURE_ENABLED_FOR_USER, oA, t, u) : this.logger.log(i6.INFO, i7.FEATURE_NOT_ENABLED_FOR_USER, oA, t, u);
                var I = {},
                    O = !1;
                f[D.EXCLUDE_VARIABLES] || h.variables.forEach(function(e) {
                    I[e.key] = l.getFeatureVariableValueFromVariation(t, b, s.variation, e, u)
                }), !f[D.DISABLE_DECISION_EVENT] && (_ === rn.FEATURE_TEST || _ === rn.ROLLOUT && nr(d)) && (this.sendImpressionEvent(s, t, u, b, c), O = !0);
                var R = f[D.INCLUDE_REASONS],
                    S = [];
                R && (S = p.map(function(e) {
                    return iz.apply(void 0, ix([e[0]], e.slice(1), !1))
                }));
                var w = {
                    flagKey: t,
                    enabled: b,
                    variationKey: y,
                    ruleKey: E,
                    variables: I,
                    reasons: S,
                    decisionEventDispatched: O
                };
                return this.notificationCenter.sendNotifications(T.DECISION, {
                    type: rr.FLAG,
                    userId: u,
                    attributes: c,
                    decisionInfo: w
                }), {
                    variationKey: y,
                    enabled: b,
                    variables: I,
                    ruleKey: E,
                    flagKey: t,
                    userContext: e,
                    reasons: S
                }
            }, e.prototype.getAllDecideOptions = function(e) {
                var t = this,
                    i = iA({}, this.defaultDecideOptions);
                return Array.isArray(e) ? e.forEach(function(e) {
                    D[e] ? i[e] = !0 : t.logger.log(i6.WARNING, i7.UNRECOGNIZED_DECIDE_OPTION, oA, e)
                }) : this.logger.log(i6.DEBUG, i7.INVALID_DECIDE_OPTIONS, oA), i
            }, e.prototype.decideForKeys = function(e, t, i) {
                var r = this;
                void 0 === i && (i = []);
                var n = {};
                if (!this.isValidInstance()) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "decideForKeys"), n;
                if (0 === t.length) return n;
                var o = this.getAllDecideOptions(i);
                return t.forEach(function(t) {
                    var a = r.decide(e, t, i);
                    (!o[D.ENABLED_FLAGS_ONLY] || a.enabled) && (n[t] = a)
                }), n
            }, e.prototype.decideAll = function(e, t) {
                void 0 === t && (t = []);
                var i = this.projectConfigManager.getConfig();
                if (!this.isValidInstance() || !i) return this.logger.log(i6.ERROR, i7.INVALID_OBJECT, oA, "decideAll"), {};
                var r = Object.keys(i.featureKeyMap);
                return this.decideForKeys(e, r, t)
            }, e.prototype.updateOdpSettings = function() {
                var e = this.projectConfigManager.getConfig();
                e && this.odpManager && this.odpManager.updateSettings(e.odpIntegrationConfig)
            }, e.prototype.sendOdpEvent = function(e, t, i, r) {
                if (!this.odpManager) return void this.logger.error(i8.ODP_EVENT_FAILED_ODP_MANAGER_MISSING);
                var n = null != t ? t : rc,
                    o = new Map(i);
                if (i && i.size > 0) try {
                    i.forEach(function(e, t) {
                        (ru === t.toLowerCase() || w.FS_USER_ID === t.toLowerCase()) && (o.delete(t), o.set(w.FS_USER_ID, e))
                    })
                } catch (e) {
                    this.logger.warn(i7.ODP_SEND_EVENT_IDENTIFIER_CONVERSION_FAILED)
                }
                try {
                    var a = new np(n, e, o, r);
                    this.odpManager.sendEvent(a)
                } catch (e) {
                    this.logger.error(i8.ODP_EVENT_FAILED, e)
                }
            }, e.prototype.isOdpIntegrated = function() {
                var e, t, i;
                return null != (i = null == (t = null == (e = this.projectConfigManager.getConfig()) ? void 0 : e.odpIntegrationConfig) ? void 0 : t.integrated) && i
            }, e.prototype.identifyUser = function(e) {
                this.odpManager && this.isOdpIntegrated() && this.odpManager.identifyUser(e)
            }, e.prototype.fetchQualifiedSegments = function(e, t) {
                return iC(this, void 0, void 0, function() {
                    return iD(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!this.odpManager) return [2, null];
                                return [4, this.odpManager.fetchQualifiedSegments(e, t)];
                            case 1:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.prototype.getVuid = function() {
                var e;
                if (!this.odpManager) {
                    null == (e = this.logger) || e.error("Unable to get VUID - ODP Manager is not instantiated yet.");
                    return
                }
                return this.odpManager.isVuidEnabled() ? this.odpManager.getVuid() : void this.logger.log(i6.WARNING, "getVuid() unavailable for this platform", oA)
            }, e
        }(),
        oD = {
            parseUserAgentInfo: function() {
                var e = new iT.UAParser().getResult();
                return {
                    os: e.os,
                    device: e.device
                }
            }
        },
        ox = Object.freeze({
            __proto__: null,
            get LogLevel() {
                return S
            },
            getLogger: i$,
            setLogHandler: iZ,
            LOG_LEVEL: i6,
            createLogger: rA
        }),
        ok = i$();
    iZ(rA()), i0(S.INFO);
    var oP = !1;
    iA(iA({}, ox), {
        logging: rC,
        errorHandler: {
            handleError: function() {}
        },
        eventDispatcher: rT,
        sendBeaconEventDispatcher: rw,
        enums: rd,
        setLogger: iZ,
        setLogLevel: i0,
        createInstance: function(e) {
            var t;
            try {
                var i, r, n, o = !1;
                e.errorHandler && (ik = e.errorHandler), e.logger && (iZ(e.logger), i0(S.NOTSET)), void 0 !== e.logLevel && i0(e.logLevel);
                try {
                    rO(e), o = !0
                } catch (e) {
                    ok.error(e)
                }
                var a = void 0;
                null == e.eventDispatcher ? (a = new rv({
                    eventDispatcher: rT
                }), oP || (a.sendPendingEvents(), oP = !0)) : a = e.eventDispatcher;
                var s = e.closingEventDispatcher;
                !e.eventDispatcher && !s && window.navigator && "sendBeacon" in window.navigator && (s = rw);
                var l = e.eventBatchSize,
                    u = e.eventFlushInterval;
                i = e.eventBatchSize, "number" == typeof i && iG(i) && i >= 1 || (ok.warn("Invalid eventBatchSize %s, defaulting to %s", e.eventBatchSize, 10), l = 10), r = e.eventFlushInterval, "number" == typeof r && iG(r) && r > 0 || (ok.warn("Invalid eventFlushInterval %s, defaulting to %s", e.eventFlushInterval, 1e3), u = 1e3);
                var c = ik,
                    d = (n = {
                        logger: ok,
                        errorHandler: c
                    }, new rD(n)),
                    p = {
                        dispatcher: a,
                        closingDispatcher: s,
                        flushInterval: u,
                        batchSize: l,
                        maxQueueSize: e.eventMaxQueueSize || 1e4,
                        notificationCenter: d
                    },
                    h = (null == (t = e.odpOptions) ? void 0 : t.disabled) === !0;
                h && ok.info(i7.ODP_DISABLED);
                var f = e.clientEngine,
                    g = e.clientVersion,
                    v = iA(iA({
                        clientEngine: re
                    }, e), {
                        eventProcessor: rx(p),
                        logger: ok,
                        errorHandler: c,
                        datafileManager: e.sdkKey ? function(e, t, i, r) {
                            var n = {
                                sdkKey: e
                            };
                            if ((void 0 === r || "object" == typeof r && null !== r) && iP(n, r), i) {
                                var o = ni({
                                        datafile: i,
                                        jsonSchemaValidator: void 0,
                                        logger: t
                                    }),
                                    a = o.configObj,
                                    s = o.error;
                                s && t.error(s), a && (n.datafile = nt(a))
                            }
                            return new rG(n)
                        }(e.sdkKey, ok, e.datafile, e.datafileOptions) : void 0,
                        notificationCenter: d,
                        isValidInstance: o,
                        odpManager: h ? void 0 : nS.createInstance({
                            logger: ok,
                            odpOptions: e.odpOptions,
                            clientEngine: f,
                            clientVersion: g
                        })
                    }),
                    m = new oC(v);
                try {
                    if ("function" == typeof window.addEventListener) {
                        var _ = "onpagehide" in window ? "pagehide" : "unload";
                        window.addEventListener(_, function() {
                            m.close()
                        }, !1)
                    }
                } catch (e) {
                    ok.error(i7.UNABLE_TO_ATTACH_UNLOAD, "INDEX_BROWSER", e.message)
                }
                return m
            } catch (e) {
                return ok.error(e), null
            }
        },
        __internalResetRetryState: function() {
            oP = !1
        },
        OptimizelyDecideOption: D,
        getUserAgentParser: function() {
            return oD
        }
    });
    let oU = new Set,
        oL = 0;

    function oM(e) {
        let t = Symbol(`executeOnce-${++oL}`);
        return () => {
            (0, M.useEffect)(() => {
                if (!oU.has(t)) return oU.add(t), e()
            }, [])
        }
    }
    var oF = e.i(181475),
        oV = e.i(318897),
        oz = e.i(148728);
    let oB = oM(() => {
        let e = (0, iI.resolveUserID)();
        (0, oz.default)(() => {
            fetch("/api/shopify/master-cookie", {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    visitorId: e
                })
            }).catch(e => {
                console.error("Failed to set Shopify master cookie:", e)
            })
        })
    });
    var oG = "user-agent",
        oq = "function",
        oj = "object",
        oK = "string",
        oH = "undefined",
        oW = "browser",
        oY = "device",
        oX = "engine",
        oQ = "result",
        oJ = "name",
        o$ = "type",
        oZ = "vendor",
        o0 = "version",
        o1 = "architecture",
        o2 = "major",
        o5 = "model",
        o3 = "console",
        o4 = "mobile",
        o6 = "tablet",
        o8 = "smarttv",
        o7 = "wearable",
        o9 = "embedded",
        ae = "inapp",
        at = "brands",
        ai = "formFactors",
        ar = "fullVersionList",
        an = "platform",
        ao = "platformVersion",
        aa = "bitness",
        as = "sec-ch-ua",
        al = as + "-full-version-list",
        au = as + "-arch",
        ac = as + "-" + aa,
        ad = as + "-form-factors",
        ap = as + "-" + o4,
        ah = as + "-" + o5,
        af = as + "-" + an,
        ag = af + "-version",
        av = [at, ar, o4, o5, an, ao, o1, ai, aa],
        am = "Amazon",
        a_ = "Apple",
        aE = "ASUS",
        ay = "BlackBerry",
        ab = "Google",
        aI = "Huawei",
        aO = "Lenovo",
        aR = "Honor",
        aS = "Microsoft",
        aT = "Motorola",
        aw = "Nvidia",
        aN = "OnePlus",
        aA = "OPPO",
        aC = "Samsung",
        aD = "Sharp",
        ax = "Sony",
        ak = "Xiaomi",
        aP = "Zebra",
        aU = "Chrome",
        aL = "Chromium",
        aM = "Chromecast",
        aF = "Edge",
        aV = "Firefox",
        az = "Opera",
        aB = "Facebook",
        aG = "Sogou",
        aq = "Mobile ",
        aj = " Browser",
        aK = "Windows",
        aH = typeof window !== oH && window.navigator ? window.navigator : void 0,
        aW = aH && aH.userAgentData ? aH.userAgentData : void 0,
        aY = function(e, t) {
            var i = {},
                r = t;
            if (!aJ(t))
                for (var n in r = {}, t)
                    for (var o in t[n]) r[o] = t[n][o].concat(r[o] ? r[o] : []);
            for (var a in e) i[a] = r[a] && r[a].length % 2 == 0 ? r[a].concat(e[a]) : e[a];
            return i
        },
        aX = function(e) {
            for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
            return t
        },
        aQ = function(e, t) {
            if (typeof e === oj && e.length > 0) {
                for (var i in e)
                    if (a0(t) == a0(e[i])) return !0;
                return !1
            }
            return !!a$(e) && a0(t) == a0(e)
        },
        aJ = function(e, t) {
            for (var i in e) return /^(browser|cpu|device|engine|os)$/.test(i) || !!t && aJ(e[i])
        },
        a$ = function(e) {
            return typeof e === oK
        },
        aZ = function(e) {
            if (e) {
                for (var t = [], i = a5(/\\?\"/g, e).split(","), r = 0; r < i.length; r++)
                    if (i[r].indexOf(";") > -1) {
                        var n = a4(i[r]).split(";v=");
                        t[r] = {
                            brand: n[0],
                            version: n[1]
                        }
                    } else t[r] = a4(i[r]);
                return t
            }
        },
        a0 = function(e) {
            return a$(e) ? e.toLowerCase() : e
        },
        a1 = function(e) {
            return a$(e) ? a5(/[^\d\.]/g, e).split(".")[0] : void 0
        },
        a2 = function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    var i = e[t];
                    typeof i == oj && 2 == i.length ? this[i[0]] = i[1] : this[i] = void 0
                }
            return this
        },
        a5 = function(e, t) {
            return a$(t) ? t.replace(e, "") : t
        },
        a3 = function(e) {
            return a5(/\\?\"/g, e)
        },
        a4 = function(e, t) {
            return e = a5(/^\s\s*/, String(e)), typeof t === oH ? e : e.substring(0, t)
        },
        a6 = function(e, t) {
            if (e && t)
                for (var i, r, n, o, a, s, l = 0; l < t.length && !a;) {
                    var u = t[l],
                        c = t[l + 1];
                    for (i = r = 0; i < u.length && !a && u[i];)
                        if (a = u[i++].exec(e))
                            for (n = 0; n < c.length; n++) s = a[++r], typeof(o = c[n]) === oj && o.length > 0 ? 2 === o.length ? typeof o[1] == oq ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : o.length >= 3 && (typeof o[1] !== oq || o[1].exec && o[1].test ? 3 == o.length ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : 4 == o.length ? this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0 : o.length > 4 && (this[o[0]] = s ? o[3].apply(this, [s.replace(o[1], o[2])].concat(o.slice(4))) : void 0) : o.length > 3 ? this[o[0]] = s ? o[1].apply(this, o.slice(2)) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0) : this[o] = s || void 0;
                    l += 2
                }
        },
        a8 = function(e, t) {
            for (var i in t)
                if (typeof t[i] === oj && t[i].length > 0) {
                    for (var r = 0; r < t[i].length; r++)
                        if (aQ(t[i][r], e)) return "?" === i ? void 0 : i
                } else if (aQ(t[i], e)) return "?" === i ? void 0 : i;
            return t.hasOwnProperty("*") ? t["*"] : e
        },
        a7 = {
            ME: "4.90",
            "NT 3.51": "3.51",
            "NT 4.0": "4.0",
            2e3: ["5.0", "5.01"],
            XP: ["5.1", "5.2"],
            Vista: "6.0",
            7: "6.1",
            8: "6.2",
            "8.1": "6.3",
            10: ["6.4", "10.0"],
            NT: ""
        },
        a9 = {
            embedded: "Automotive",
            mobile: "Mobile",
            tablet: ["Tablet", "EInk"],
            smarttv: "TV",
            wearable: "Watch",
            xr: ["VR", "XR"],
            "?": ["Desktop", "Unknown"],
            "*": void 0
        },
        se = {
            Chrome: "Google Chrome",
            Edge: "Microsoft Edge",
            "Edge WebView2": "Microsoft Edge WebView2",
            "Chrome WebView": "Android WebView",
            "Chrome Headless": "HeadlessChrome",
            "Huawei Browser": "HuaweiBrowser",
            "MIUI Browser": "Miui Browser",
            "Opera Mobi": "OperaMobile",
            Yandex: "YaBrowser"
        },
        st = {
            browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [o0, [oJ, aq + "Chrome"]],
                [/webview.+edge\/([\w\.]+)/i],
                [o0, [oJ, aF + " WebView"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [o0, [oJ, "Edge"]],
                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                [oJ, o0],
                [/opios[\/ ]+([\w\.]+)/i],
                [o0, [oJ, az + " Mini"]],
                [/\bop(?:rg)?x\/([\w\.]+)/i],
                [o0, [oJ, az + " GX"]],
                [/\bopr\/([\w\.]+)/i],
                [o0, [oJ, az]],
                [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                [o0, [oJ, "Baidu"]],
                [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
                [o0, [oJ, "Maxthon"]],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser|palemoon)\/([-\w\.]+)/i, /(heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i, /(qwant)(?:ios|mobile)\/([\d\.]+)/i, /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],
                [oJ, o0],
                [/quark(?:pc)?\/([-\w\.]+)/i],
                [o0, [oJ, "Quark"]],
                [/\bddg\/([\w\.]+)/i],
                [o0, [oJ, "DuckDuckGo"]],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [o0, [oJ, "UCBrowser"]],
                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                [o0, [oJ, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [o0, [oJ, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [o0, [oJ, "IE"]],
                [/ya(?:search)?browser\/([\w\.]+)/i],
                [o0, [oJ, "Yandex"]],
                [/slbrowser\/([\w\.]+)/i],
                [o0, [oJ, "Smart " + aO + aj]],
                [/(avast|avg)\/([\w\.]+)/i],
                [
                    [oJ, /(.+)/, "$1 Secure" + aj], o0
                ],
                [/\bfocus\/([\w\.]+)/i],
                [o0, [oJ, aV + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [o0, [oJ, az + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [o0, [oJ, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [o0, [oJ, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [o0, [oJ, az + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [o0, [oJ, "MIUI" + aj]],
                [/fxios\/([\w\.-]+)/i],
                [o0, [oJ, aq + aV]],
                [/\bqihoobrowser\/?([\w\.]*)/i],
                [o0, [oJ, "360"]],
                [/\b(qq)\/([\w\.]+)/i],
                [
                    [oJ, /(.+)/, "$1Browser"], o0
                ],
                [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                [
                    [oJ, /(.+)/, "$1" + aj], o0
                ],
                [/samsungbrowser\/([\w\.]+)/i],
                [o0, [oJ, aC + " Internet"]],
                [/metasr[\/ ]?([\d\.]+)/i],
                [o0, [oJ, aG + " Explorer"]],
                [/(sogou)mo\w+\/([\d\.]+)/i],
                [
                    [oJ, aG + " Mobile"], o0
                ],
                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
                [oJ, o0],
                [/(lbbrowser|rekonq)/i],
                [oJ],
                [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
                [o0, oJ],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [
                    [oJ, aB], o0, [o$, ae]
                ],
                [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(bing)(?:web|sapphire)\/([\w\.]+)/i, /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i],
                [oJ, o0, [o$, ae]],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [o0, [oJ, "GSA"],
                    [o$, ae]
                ],
                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                [o0, [oJ, "TikTok"],
                    [o$, ae]
                ],
                [/\[(linkedin)app\]/i],
                [oJ, [o$, ae]],
                [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
                [
                    [oJ, /(.+)/, "Zalo"], o0, [o$, ae]
                ],
                [/(chromium)[\/ ]([-\w\.]+)/i],
                [oJ, o0],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [o0, [oJ, aU + " Headless"]],
                [/wv\).+chrome\/([\w\.]+).+edgw\//i],
                [o0, [oJ, aF + " WebView2"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [
                    [oJ, aU + " WebView"], o0
                ],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [o0, [oJ, "Android" + aj]],
                [/chrome\/([\w\.]+) mobile/i],
                [o0, [oJ, aq + "Chrome"]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [oJ, o0],
                [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
                [o0, [oJ, aq + "Safari"]],
                [/iphone .*mobile(?:\/\w+ | ?)safari/i],
                [
                    [oJ, aq + "Safari"]
                ],
                [/version\/([\w\.\,]+) .*(safari)/i],
                [o0, oJ],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [oJ, [o0, "1"]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [oJ, o0],
                [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
                [
                    [oJ, aq + aV], o0
                ],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [
                    [oJ, "Netscape"], o0
                ],
                [/(wolvic|librewolf)\/([\w\.]+)/i],
                [oJ, o0],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [o0, [oJ, aV + " Reality"]],
                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
                [oJ, [o0, /_/g, "."]],
                [/(cobalt)\/([\w\.]+)/i],
                [oJ, [o0, /[^\d\.]+./, ""]]
            ],
            cpu: [
                [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
                [
                    [o1, "amd64"]
                ],
                [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
                [
                    [o1, "ia32"]
                ],
                [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
                [
                    [o1, "arm64"]
                ],
                [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
                [
                    [o1, "armhf"]
                ],
                [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
                [
                    [o1, "arm"]
                ],
                [/ sun4\w[;\)]/i],
                [
                    [o1, "sparc"]
                ],
                [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i, /((ppc|powerpc)(64)?)( mac|;|\))/i, /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i],
                [
                    [o1, /ower/, "", a0]
                ],
                [/mc680.0/i],
                [
                    [o1, "68k"]
                ],
                [/winnt.+\[axp/i],
                [
                    [o1, "alpha"]
                ]
            ],
            device: [
                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                [o5, [oZ, aC],
                    [o$, o6]
                ],
                [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i, /sec-(sgh\w+)/i],
                [o5, [oZ, aC],
                    [o$, o4]
                ],
                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
                [o5, [oZ, a_],
                    [o$, o4]
                ],
                [/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
                [o5, [oZ, a_],
                    [o$, o6]
                ],
                [/(macintosh);/i],
                [o5, [oZ, a_]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [o5, [oZ, aD],
                    [o$, o4]
                ],
                [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
                [o5, [oZ, aR],
                    [o$, o6]
                ],
                [/honor([-\w ]+)[;\)]/i],
                [o5, [oZ, aR],
                    [o$, o4]
                ],
                [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
                [o5, [oZ, aI],
                    [o$, o6]
                ],
                [/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
                [o5, [oZ, aI],
                    [o$, o4]
                ],
                [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
                [
                    [o5, /_/g, " "],
                    [oZ, ak],
                    [o$, o6]
                ],
                [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
                [
                    [o5, /_/g, " "],
                    [oZ, ak],
                    [o$, o4]
                ],
                [/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                [o5, [oZ, aN],
                    [o$, o4]
                ],
                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                [o5, [oZ, aA],
                    [o$, o4]
                ],
                [/\b(opd2(\d{3}a?))(?: bui|\))/i],
                [o5, [oZ, a8, {
                        OnePlus: ["203", "304", "403", "404", "413", "415"],
                        "*": aA
                    }],
                    [o$, o6]
                ],
                [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
                [o5, [oZ, "BLU"],
                    [o$, o4]
                ],
                [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [o5, [oZ, "Vivo"],
                    [o$, o4]
                ],
                [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                [o5, [oZ, "Realme"],
                    [o$, o4]
                ],
                [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
                [o5, [oZ, aO],
                    [o$, o6]
                ],
                [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
                [o5, [oZ, aO],
                    [o$, o4]
                ],
                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i, /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i],
                [o5, [oZ, aT],
                    [o$, o4]
                ],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [o5, [oZ, aT],
                    [o$, o6]
                ],
                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                [o5, [oZ, "LG"],
                    [o$, o6]
                ],
                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i, /\blg-?([\d\w]+) bui/i],
                [o5, [oZ, "LG"],
                    [o$, o4]
                ],
                [/(nokia) (t[12][01])/i],
                [oZ, o5, [o$, o6]],
                [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
                [
                    [o5, /_/g, " "],
                    [o$, o4],
                    [oZ, "Nokia"]
                ],
                [/(pixel (c|tablet))\b/i],
                [o5, [oZ, ab],
                    [o$, o6]
                ],
                [/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],
                [o5, [oZ, ab],
                    [o$, o4]
                ],
                [/(google) (pixelbook( go)?)/i],
                [oZ, o5],
                [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [o5, [oZ, ax],
                    [o$, o4]
                ],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                    [o5, "Xperia Tablet"],
                    [oZ, ax],
                    [o$, o6]
                ],
                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                [o5, [oZ, am],
                    [o$, o6]
                ],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                    [o5, /(.+)/g, "Fire Phone $1"],
                    [oZ, am],
                    [o$, o4]
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [o5, oZ, [o$, o6]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
                [o5, [oZ, ay],
                    [o$, o4]
                ],
                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                [o5, [oZ, aE],
                    [o$, o6]
                ],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [o5, [oZ, aE],
                    [o$, o4]
                ],
                [/(nexus 9)/i],
                [o5, [oZ, "HTC"],
                    [o$, o6]
                ],
                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                [oZ, [o5, /_/g, " "],
                    [o$, o4]
                ],
                [/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],
                [o5, [oZ, "TCL"],
                    [o$, o6]
                ],
                [/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],
                [o5, [oZ, "TCL"],
                    [o$, o4]
                ],
                [/(itel) ((\w+))/i],
                [
                    [oZ, a0], o5, [o$, a8, {
                        tablet: ["p10001l", "w7001"],
                        "*": "mobile"
                    }]
                ],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [o5, [oZ, "Acer"],
                    [o$, o6]
                ],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [o5, [oZ, "Meizu"],
                    [o$, o4]
                ],
                [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                [o5, [oZ, "Ulefone"],
                    [o$, o4]
                ],
                [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
                [o5, [oZ, "Energizer"],
                    [o$, o4]
                ],
                [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
                [o5, [oZ, "Cat"],
                    [o$, o4]
                ],
                [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
                [o5, [oZ, "Smartfren"],
                    [o$, o4]
                ],
                [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
                [o5, [oZ, "Nothing"],
                    [o$, o4]
                ],
                [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
                [o5, [oZ, "Archos"],
                    [o$, o6]
                ],
                [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
                [o5, [oZ, "Archos"],
                    [o$, o4]
                ],
                [/; (n159v)/i],
                [o5, [oZ, "HMD"],
                    [o$, o4]
                ],
                [/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
                [oZ, o5, [o$, o6]],
                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(oppo) ?([\w ]+) bui/i, /(hisense) ([ehv][\w ]+)\)/i, /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i],
                [oZ, o5, [o$, o4]],
                [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i],
                [oZ, o5, [o$, o6]],
                [/(surface duo)/i],
                [o5, [oZ, aS],
                    [o$, o6]
                ],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [o5, [oZ, "Fairphone"],
                    [o$, o4]
                ],
                [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
                [o5, [oZ, aw],
                    [o$, o6]
                ],
                [/(sprint) (\w+)/i],
                [oZ, o5, [o$, o4]],
                [/(kin\.[onetw]{3})/i],
                [
                    [o5, /\./g, " "],
                    [oZ, aS],
                    [o$, o4]
                ],
                [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [o5, [oZ, aP],
                    [o$, o6]
                ],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [o5, [oZ, aP],
                    [o$, o4]
                ],
                [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
                [oZ, [o$, o8]],
                [/hbbtv.+maple;(\d+)/i],
                [
                    [o5, /^/, "SmartTV"],
                    [oZ, aC],
                    [o$, o8]
                ],
                [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
                [oZ, o5, [o$, o8]],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                    [oZ, "LG"],
                    [o$, o8]
                ],
                [/(apple) ?tv/i],
                [oZ, [o5, a_ + " TV"],
                    [o$, o8]
                ],
                [/crkey.*devicetype\/chromecast/i],
                [
                    [o5, aM + " Third Generation"],
                    [oZ, ab],
                    [o$, o8]
                ],
                [/crkey.*devicetype\/([^/]*)/i],
                [
                    [o5, /^/, "Chromecast "],
                    [oZ, ab],
                    [o$, o8]
                ],
                [/fuchsia.*crkey/i],
                [
                    [o5, aM + " Nest Hub"],
                    [oZ, ab],
                    [o$, o8]
                ],
                [/crkey/i],
                [
                    [o5, aM],
                    [oZ, ab],
                    [o$, o8]
                ],
                [/(portaltv)/i],
                [o5, [oZ, aB],
                    [o$, o8]
                ],
                [/droid.+aft(\w+)( bui|\))/i],
                [o5, [oZ, am],
                    [o$, o8]
                ],
                [/(shield \w+ tv)/i],
                [o5, [oZ, aw],
                    [o$, o8]
                ],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [o5, [oZ, aD],
                    [o$, o8]
                ],
                [/(bravia[\w ]+)( bui|\))/i],
                [o5, [oZ, ax],
                    [o$, o8]
                ],
                [/(mi(tv|box)-?\w+) bui/i],
                [o5, [oZ, ak],
                    [o$, o8]
                ],
                [/Hbbtv.*(technisat) (.*);/i],
                [oZ, o5, [o$, o8]],
                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                [
                    [oZ, /.+\/(\w+)/, "$1", a8, {
                        LG: "lge"
                    }],
                    [o5, a4],
                    [o$, o8]
                ],
                [/(playstation \w+)/i],
                [o5, [oZ, ax],
                    [o$, o3]
                ],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [o5, [oZ, aS],
                    [o$, o3]
                ],
                [/(ouya)/i, /(nintendo) (\w+)/i, /(retroid) (pocket ([^\)]+))/i],
                [oZ, o5, [o$, o3]],
                [/droid.+; (shield)( bui|\))/i],
                [o5, [oZ, aw],
                    [o$, o3]
                ],
                [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
                [o5, [oZ, aC],
                    [o$, o7]
                ],
                [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
                [oZ, o5, [o$, o7]],
                [/(ow(?:19|20)?we?[1-3]{1,3})/i],
                [o5, [oZ, aA],
                    [o$, o7]
                ],
                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                [o5, [oZ, a_],
                    [o$, o7]
                ],
                [/(opwwe\d{3})/i],
                [o5, [oZ, aN],
                    [o$, o7]
                ],
                [/(moto 360)/i],
                [o5, [oZ, aT],
                    [o$, o7]
                ],
                [/(smartwatch 3)/i],
                [o5, [oZ, ax],
                    [o$, o7]
                ],
                [/(g watch r)/i],
                [o5, [oZ, "LG"],
                    [o$, o7]
                ],
                [/droid.+; (wt63?0{2,3})\)/i],
                [o5, [oZ, aP],
                    [o$, o7]
                ],
                [/droid.+; (glass) \d/i],
                [o5, [oZ, ab],
                    [o$, "xr"]
                ],
                [/(pico) ([\w ]+) os\d/i],
                [oZ, o5, [o$, "xr"]],
                [/(quest( \d| pro)?s?).+vr/i],
                [o5, [oZ, aB],
                    [o$, "xr"]
                ],
                [/mobile vr; rv.+firefox/i],
                [
                    [o$, "xr"]
                ],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [oZ, [o$, o9]],
                [/(aeobc)\b/i],
                [o5, [oZ, am],
                    [o$, o9]
                ],
                [/(homepod).+mac os/i],
                [o5, [oZ, a_],
                    [o$, o9]
                ],
                [/windows iot/i],
                [
                    [o$, o9]
                ],
                [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
                [o5, [o$, o8]],
                [/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
                [
                    [o$, o8]
                ],
                [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
                [o5, [o$, a8, {
                    mobile: "Mobile",
                    xr: "VR",
                    "*": o6
                }]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [
                    [o$, o6]
                ],
                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                [
                    [o$, o4]
                ],
                [/droid .+?; ([\w\. -]+)( bui|\))/i],
                [o5, [oZ, "Generic"]]
            ],
            engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [o0, [oJ, aF + "HTML"]],
                [/(arkweb)\/([\w\.]+)/i],
                [oJ, o0],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [o0, [oJ, "Blink"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                [oJ, o0],
                [/ladybird\//i],
                [
                    [oJ, "LibWeb"]
                ],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [o0, oJ]
            ],
            os: [
                [/(windows nt) (6\.[23]); arm/i],
                [
                    [oJ, /N/, "R"],
                    [o0, a8, a7]
                ],
                [/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i, /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],
                [oJ, o0],
                [/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
                [
                    [o0, /(;|\))/g, "", a8, a7],
                    [oJ, aK]
                ],
                [/(windows ce)\/?([\d\.]*)/i],
                [oJ, o0],
                [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv|ios(?=.+ip(?:ad|hone))|ip(?:ad|hone)(?: |.+i(?:pad)?)os)[\/ ]([\w\.]+)/i, /cfnetwork\/.+darwin/i],
                [
                    [o0, /_/g, "."],
                    [oJ, "iOS"]
                ],
                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
                [
                    [oJ, "macOS"],
                    [o0, /_/g, "."]
                ],
                [/android ([\d\.]+).*crkey/i],
                [o0, [oJ, aM + " Android"]],
                [/fuchsia.*crkey\/([\d\.]+)/i],
                [o0, [oJ, aM + " Fuchsia"]],
                [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
                [o0, [oJ, aM + " SmartSpeaker"]],
                [/linux.*crkey\/([\d\.]+)/i],
                [o0, [oJ, aM + " Linux"]],
                [/crkey\/([\d\.]+)/i],
                [o0, [oJ, aM]],
                [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                [o0, oJ],
                [/(ubuntu) ([\w\.]+) like android/i],
                [
                    [oJ, /(.+)/, "$1 Touch"], o0
                ],
                [/(harmonyos)[\/ ]?([\d\.]*)/i, /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],
                [oJ, o0],
                [/\(bb(10);/i],
                [o0, [oJ, ay]],
                [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
                [o0, [oJ, "Symbian"]],
                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                [o0, [oJ, aV + " OS"]],
                [/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
                [o0, [oJ, "webOS"]],
                [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
                [
                    [o0, a8, {
                        25: "120",
                        24: "108",
                        23: "94",
                        22: "87",
                        6: "79",
                        5: "68",
                        4: "53",
                        3: "38",
                        2: "538",
                        1: "537",
                        "*": "TV"
                    }],
                    [oJ, "webOS"]
                ],
                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                [o0, [oJ, "watchOS"]],
                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                [
                    [oJ, "Chrome OS"], o0
                ],
                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) (\w+)/i, /(xbox); +xbox ([^\);]+)/i, /(pico) .+os([\w\.]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /linux.+(mint)[\/\(\) ]?([\w\.]*)/i, /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /\b(aix)[; ]([1-9\.]{0,4})/i, /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) ?(r\d)?/i],
                [oJ, o0],
                [/(sunos) ?([\d\.]*)/i],
                [
                    [oJ, "Solaris"], o0
                ],
                [/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                [oJ, o0]
            ]
        },
        si = (y = {
            init: {},
            isIgnore: {},
            isIgnoreRgx: {},
            toString: {}
        }, a2.call(y.init, [
            [oW, [oJ, o0, o2, o$]],
            ["cpu", [o1]],
            [oY, [o$, o5, oZ]],
            [oX, [oJ, o0]],
            ["os", [oJ, o0]]
        ]), a2.call(y.isIgnore, [
            [oW, [o0, o2]],
            [oX, [o0]],
            ["os", [o0]]
        ]), a2.call(y.isIgnoreRgx, [
            [oW, / ?browser$/i],
            ["os", / ?os$/i]
        ]), a2.call(y.toString, [
            [oW, [oJ, o0]],
            ["cpu", [o1]],
            [oY, [oZ, o5]],
            [oX, [oJ, o0]],
            ["os", [oJ, o0]]
        ]), y),
        sr = function(e, t) {
            var i = si.init[t],
                r = si.isIgnore[t] || 0,
                n = si.isIgnoreRgx[t] || 0,
                o = si.toString[t] || 0;

            function a() {
                a2.call(this, i)
            }
            return a.prototype.getItem = function() {
                return e
            }, a.prototype.withClientHints = function() {
                return aW ? aW.getHighEntropyValues(av).then(function(t) {
                    return e.setCH(new sn(t, !1)).parseCH().get()
                }) : e.parseCH().get()
            }, a.prototype.withFeatureCheck = function() {
                return e.detectFeature().get()
            }, t != oQ && (a.prototype.is = function(e) {
                var t = !1;
                for (var i in this)
                    if (this.hasOwnProperty(i) && !aQ(r, i) && a0(n ? a5(n, this[i]) : this[i]) == a0(n ? a5(n, e) : e)) {
                        if (t = !0, e != oH) break
                    } else if (e == oH && t) {
                    t = !t;
                    break
                }
                return t
            }, a.prototype.toString = function() {
                var e = "";
                for (var t in o) typeof this[o[t]] !== oH && (e += (e ? " " : "") + this[o[t]]);
                return e || oH
            }), aW || (a.prototype.then = function(e) {
                var t = this,
                    i = function() {
                        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e])
                    };
                i.prototype = {
                    is: a.prototype.is,
                    toString: a.prototype.toString
                };
                var r = new i;
                return e(r), r
            }), new a
        };

    function sn(e, t) {
        if (e = e || {}, a2.call(this, av), t) a2.call(this, [
            [at, aZ(e[as])],
            [ar, aZ(e[al])],
            [o4, /\?1/.test(e[ap])],
            [o5, a3(e[ah])],
            [an, a3(e[af])],
            [ao, a3(e[ag])],
            [o1, a3(e[au])],
            [ai, aZ(e[ad])],
            [aa, a3(e[ac])]
        ]);
        else
            for (var i in e) this.hasOwnProperty(i) && typeof e[i] !== oH && (this[i] = e[i])
    }

    function so(e, t, i, r) {
        return this.get = function(e) {
            return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data
        }, this.set = function(e, t) {
            return this.data[e] = t, this
        }, this.setCH = function(e) {
            return this.uaCH = e, this
        }, this.detectFeature = function() {
            if (aH && aH.userAgent == this.ua) switch (this.itemType) {
                case oW:
                    aH.brave && typeof aH.brave.isBrave == oq && this.set(oJ, "Brave");
                    break;
                case oY:
                    !this.get(o$) && aW && aW[o4] && this.set(o$, o4), "Macintosh" == this.get(o5) && aH && typeof aH.standalone !== oH && aH.maxTouchPoints && aH.maxTouchPoints > 2 && this.set(o5, "iPad").set(o$, o6);
                    break;
                case "os":
                    !this.get(oJ) && aW && aW[an] && this.set(oJ, aW[an]);
                    break;
                case oQ:
                    var e = this.data,
                        t = function(t) {
                            return e[t].getItem().detectFeature().get()
                        };
                    this.set(oW, t(oW)).set("cpu", t("cpu")).set(oY, t(oY)).set(oX, t(oX)).set("os", t("os"))
            }
            return this
        }, this.parseUA = function() {
            switch (this.itemType != oQ && a6.call(this.data, this.ua, this.rgxMap), this.itemType) {
                case oW:
                    this.set(o2, a1(this.get(o0)));
                    break;
                case "os":
                    if ("iOS" == this.get(oJ) && "18.6" == this.get(o0)) {
                        var e = /\) Version\/([\d\.]+)/.exec(this.ua);
                        e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(o0, e[1])
                    }
            }
            return this
        }, this.parseCH = function() {
            var e = this.uaCH,
                t = this.rgxMap;
            switch (this.itemType) {
                case oW:
                case oX:
                    var i, r = e[ar] || e[at];
                    if (r)
                        for (var n = 0; n < r.length; n++) {
                            var o = r[n].brand || r[n],
                                a = r[n].version;
                            this.itemType == oW && !/not.a.brand/i.test(o) && (!i || /Chrom/.test(i) && o != aL || i == aF && /WebView2/.test(o)) && (o = a8(o, se), (i = this.get(oJ)) && !/Chrom/.test(i) && /Chrom/.test(o) || this.set(oJ, o).set(o0, a).set(o2, a1(a)), i = o), this.itemType == oX && o == aL && this.set(o0, a)
                        }
                    break;
                case "cpu":
                    var s = e[o1];
                    s && (s && "64" == e[aa] && (s += "64"), a6.call(this.data, s + ";", t));
                    break;
                case oY:
                    if (e[o4] && this.set(o$, o4), e[o5] && (this.set(o5, e[o5]), !this.get(o$) || !this.get(oZ))) {
                        var l, u = {};
                        a6.call(u, "droid 9; " + e[o5] + ")", t), !this.get(o$) && u.type && this.set(o$, u.type), !this.get(oZ) && u.vendor && this.set(oZ, u.vendor)
                    }
                    if (e[ai]) {
                        if ("string" != typeof e[ai])
                            for (var c = 0; !l && c < e[ai].length;) l = a8(e[ai][c++], a9);
                        else l = a8(e[ai], a9);
                        this.set(o$, l)
                    }
                    break;
                case "os":
                    var d = e[an];
                    if (d) {
                        var p = e[ao];
                        d == aK && (p = parseInt(a1(p), 10) >= 13 ? "11" : "10"), this.set(oJ, d).set(o0, p)
                    }
                    this.get(oJ) == aK && "Xbox" == e[o5] && this.set(oJ, "Xbox").set(o0, void 0);
                    break;
                case oQ:
                    var h = this.data,
                        f = function(t) {
                            return h[t].getItem().setCH(e).parseCH().get()
                        };
                    this.set(oW, f(oW)).set("cpu", f("cpu")).set(oY, f(oY)).set(oX, f(oX)).set("os", f("os"))
            }
            return this
        }, a2.call(this, [
            ["itemType", e],
            ["ua", t],
            ["uaCH", r],
            ["rgxMap", i],
            ["data", sr(this, e)]
        ]), this
    }

    function sa(e, t, i) {
        if (typeof e === oj ? (aJ(e, !0) ? (typeof t === oj && (i = t), t = e) : (i = e, t = void 0), e = void 0) : typeof e !== oK || aJ(t, !0) || (i = t, t = void 0), i)
            if (typeof i.append === oq) {
                var r = {};
                i.forEach(function(e, t) {
                    r[String(t).toLowerCase()] = e
                }), i = r
            } else {
                var n = {};
                for (var o in i) i.hasOwnProperty(o) && (n[String(o).toLowerCase()] = i[o]);
                i = n
            }
        if (!(this instanceof sa)) return new sa(e, t, i).getResult();
        var a = typeof e === oK ? e : i && i[oG] ? i[oG] : aH && aH.userAgent ? aH.userAgent : "",
            s = new sn(i, !0),
            l = t ? aY(st, t) : st,
            u = function(e) {
                return e == oQ ? function() {
                    return new so(e, a, l, s).set("ua", a).set(oW, this.getBrowser()).set("cpu", this.getCPU()).set(oY, this.getDevice()).set(oX, this.getEngine()).set("os", this.getOS()).get()
                } : function() {
                    return new so(e, a, l[e], s).parseUA().get()
                }
            };
        return a2.call(this, [
            ["getBrowser", u(oW)],
            ["getCPU", u("cpu")],
            ["getDevice", u(oY)],
            ["getEngine", u(oX)],
            ["getOS", u("os")],
            ["getResult", u(oQ)],
            ["getUA", function() {
                return a
            }],
            ["setUA", function(e) {
                return a$(e) && (a = a4(e, 500)), this
            }]
        ]).setUA(a), this
    }
    sa.VERSION = "2.0.6", sa.BROWSER = aX([oJ, o0, o2, o$]), sa.CPU = aX([o1]), sa.DEVICE = aX([o5, oZ, o$, o3, o4, o8, o6, o7, o9]), sa.ENGINE = sa.OS = aX([oJ, o0]), e.i(831184);
    var ss = e.i(229620);
    class sl {
        consentState = "pending";
        eventQueue = [];
        boundHandleConsentChanged = this.handleConsentChanged.bind(this);
        baseDispatcher;
        constructor() {
            this.baseDispatcher = rT, this.setConsent((0, oF.getConsentState)(oF.ConsentCategory.PERFORMANCE)), ss.isBrowser && window.addEventListener(oF.CONSENT_UPDATED_EVENT_NAME, this.boundHandleConsentChanged)
        }
        setConsent(e) {
            this.consentState = e
        }
        get isConsented() {
            return "accepted" === this.consentState
        }
        get isConsentPending() {
            return "pending" === this.consentState
        }
        enqueue(e, t) {
            this.eventQueue.push({
                event: e,
                callback: t
            })
        }
        handleConsentChanged() {
            this.setConsent((0, oF.getConsentState)(oF.ConsentCategory.PERFORMANCE)), this.attemptToFlushQueue()
        }
        attemptToFlushQueue() {
            let e = [...this.eventQueue];
            for (let {
                    event: t,
                    callback: i
                } of (this.eventQueue = [], e)) this.dispatchEvent(t, i)
        }
        dispatchEvent(e, t) {
            this.isConsented ? this.baseDispatcher.dispatchEvent(e, t) : this.isConsentPending ? this.enqueue(e, t) : t({
                statusCode: 200
            })
        }
        cleanup() {
            this.eventQueue = [], ss.isBrowser && window.removeEventListener(oF.CONSENT_UPDATED_EVENT_NAME, this.boundHandleConsentChanged)
        }
    }
    var su = ((b = {}).TRACK_PAGE_VIEW = "trackPageview", b);
    let sc = (I = ss.isBrowser, function(e, t) {
            I && (window._uxa = window._uxa || [], window._uxa.push([e, t]))
        }),
        sd = function() {
            let e, t, i, r = (0, L.c)(4),
                {
                    events: n
                } = (0, F.useRouter)();
            r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = function(e) {
                sc(su.TRACK_PAGE_VIEW, e)
            }, r[0] = e) : e = r[0];
            let o = e;
            r[1] !== n ? (t = () => (n.on("routeChangeComplete", o), () => {
                n.off("routeChangeComplete", o)
            }), i = [n], r[1] = n, r[2] = t, r[3] = i) : (t = r[2], i = r[3]), (0, M.useEffect)(t, i)
        };
    var sp = e.i(12379),
        sh = e.i(38464),
        sf = e.i(449305),
        sg = e.i(326856);
    e.i(393713);
    let sv = "userContext",
        sm = "globalContext",
        s_ = "accountContext",
        sE = "getContext",
        sy = "setContext",
        sb = "setContextProperty",
        sI = "removeContextProperty",
        sO = "clearContext";
    var sR = e.i(793018),
        sS = e.i(328275),
        sT = e.i(602006),
        sw = e.i(931675),
        sN = e.i(287555),
        sA = e.i(548544);

    function sC() {
        let e = "",
            t = 0;
        return {
            isAsync: !1,
            get isEmpty() {
                return !e
            },
            write(i, r) {
                let n = (0, sA.computeBytesCount)(i);
                t += n, e += i, r && r(n)
            },
            finish(e) {
                e(this.finishSync())
            },
            finishSync() {
                let i = {
                    output: e,
                    outputBytesCount: t,
                    rawBytesCount: t,
                    pendingData: ""
                };
                return e = "", t = 0, i
            },
            estimateEncodedBytesCount: e => e.length
        }
    }

    function sD(e, t) {
        t.silentMultipleInit || sf.display.error(`${e} is already initialized.`)
    }
    var sx = e.i(61555);

    function sk(e, t, i, r) {
        return (0, sh.monitor)((...n) => (r && (0, sR.addTelemetryUsage)({
            feature: r
        }), e()[t][i](...n)))
    }
    var sP = e.i(628872),
        sU = e.i(291495),
        sL = e.i(256721),
        sM = e.i(797719),
        sF = e.i(592568),
        sV = e.i(191819),
        sz = e.i(450653),
        sB = e.i(197038);

    function sG(e, t, i) {
        if (e)
            for (let r of e) {
                let e = r[t];
                e && e(i)
            }
    }
    var sq = e.i(472822),
        sj = e.i(841259),
        sK = e.i(376426),
        sH = e.i(563746),
        sW = e.i(553790),
        sY = e.i(754614),
        sX = e.i(110977),
        sQ = e.i(815806),
        sJ = e.i(921458),
        s$ = e.i(867494),
        sZ = e.i(568432),
        s0 = e.i(982067),
        s1 = e.i(57329);
    let s2 = ["tracecontext", "datadog"];

    function s5(e) {
        return (0, sJ.isMatchOption)(e) ? {
            match: e,
            propagatorTypes: s2
        } : (0, s1.isIndexableObject)(e) && (0, sJ.isMatchOption)(e.match) && (null === e.propagatorTypes || void 0 === e.propagatorTypes || Array.isArray(e.propagatorTypes)) ? {
            match: e.match,
            propagatorTypes: e.propagatorTypes || s2
        } : void 0
    }
    var s3 = e.i(279710),
        s4 = e.i(774557),
        s6 = e.i(572528);
    let s8 = /[a-zA-Z_$]/,
        s7 = /[a-zA-Z0-9_$]/,
        s9 = /[0-9]/,
        le = /[a-fA-F0-9]/,
        lt = {
            0: () => !1,
            1: () => !1,
            2: e => s8.test(e),
            3: e => s7.test(e),
            4: e => "." === e,
            5: e => "[" === e,
            6: e => "]" === e,
            7: e => s9.test(e),
            8: e => "'\"".includes(e),
            9: (e, t) => e === t.quote,
            10: () => !0,
            11: e => "\\" === e,
            12: (e, t) => void 0 === t.escapeSequence ? `${t.quote}/\\bfnrtu`.includes(e) : !!t.escapeSequence.startsWith("u") && t.escapeSequence.length < 5 && le.test(e)
        },
        li = {
            0: [2, 5],
            1: [],
            2: [3, 4, 5, 1],
            3: [3, 4, 5, 1],
            4: [2],
            5: [8, 7],
            6: [4, 5, 1],
            7: [7, 6],
            8: [11, 9, 10],
            9: [6],
            10: [11, 9, 10],
            11: [12],
            12: [12, 11, 9, 10]
        },
        lr = [2, 3, 7, 10],
        ln = [4, 5, 6],
        lo = {
            '"': '"',
            "'": "'",
            "/": "/",
            "\\": "\\",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "	"
        },
        la = ["applicationId", "service", "env", "version", "sessionSampleRate", "sessionReplaySampleRate", "defaultPrivacyLevel", "enablePrivacyForActionName", "traceSampleRate", "trackSessionAcrossSubdomains", "allowedTracingUrls", "allowedTrackingOrigins"];
    async function ls(e, t) {
        let i, r, n = (i = {
                fetch: {}
            }, {
                get: () => i,
                increment: (e, t) => {
                    i[e] || (i[e] = {}), i[e][t] || (i[e][t] = 0), i[e][t] = i[e][t] + 1
                }
            }),
            o = await lu(e);
        return o.ok ? (n.increment("fetch", "success"), r = function(e, t, i, r) {
            let n = { ...e
            };
            return la.forEach(e => {
                e in t && (n[e] = o(t[e]))
            }), Object.keys(i).forEach(e => {
                var r;
                void 0 !== t[e] && (r = i[e], t[e].forEach(({
                    key: e,
                    value: t
                }) => {
                    r.setContextProperty(e, o(t))
                }))
            }), n;

            function o(e) {
                if (Array.isArray(e)) return e.map(o);
                if ((0, s1.isIndexableObject)(e)) {
                    if ("rcSerializedType" in e) {
                        let i = e.rcSerializedType;
                        switch (i) {
                            case "string":
                                return e.value;
                            case "regex":
                                return ll(e.value);
                            case "dynamic":
                                var t = e;
                                let n, o = t.strategy;
                                switch (o) {
                                    case "cookie":
                                        n = function({
                                            name: e
                                        }) {
                                            let t = (0, s4.getCookie)(e);
                                            return r.increment("cookie", void 0 !== t ? "success" : "missing"), t
                                        }(t);
                                        break;
                                    case "dom":
                                        n = function({
                                            selector: e,
                                            attribute: t
                                        }) {
                                            var i, n;
                                            let o;
                                            try {
                                                o = document.querySelector(e)
                                            } catch (t) {
                                                sf.display.error(`Invalid selector in the remote configuration: '${e}'`), r.increment("dom", "failure");
                                                return
                                            }
                                            if (!o) return void r.increment("dom", "missing");
                                            if (i = o, n = t, "password" === i.getAttribute("type") && "value" === n) {
                                                sf.display.error(`Forbidden element selected by the remote configuration: '${e}'`), r.increment("dom", "failure");
                                                return
                                            }
                                            let a = void 0 !== t ? o.getAttribute(t) : o.textContent;
                                            return null === a ? void r.increment("dom", "missing") : (r.increment("dom", "success"), a)
                                        }(t);
                                        break;
                                    case "js":
                                        n = function({
                                            path: e
                                        }) {
                                            let t = window,
                                                i = function(e) {
                                                    let t, i = [],
                                                        r = 0,
                                                        n = {
                                                            quote: void 0,
                                                            escapeSequence: void 0
                                                        },
                                                        o = "";
                                                    for (let l of e) {
                                                        if (!(t = li[r].find(e => lt[e](l, n)))) return [];
                                                        if (void 0 !== n.escapeSequence && 12 !== t) {
                                                            var a, s;
                                                            if (a = n.escapeSequence, !("\"'/\\bfnrt".includes(a) || a.startsWith("u") && 5 === a.length)) return [];
                                                            o += (s = n.escapeSequence).startsWith("u") ? String.fromCharCode(parseInt(s.slice(1), 16)) : lo[s], n.escapeSequence = void 0
                                                        }
                                                        lr.includes(t) ? o += l : ln.includes(t) && "" !== o ? (i.push(o), o = "") : 12 === t ? n.escapeSequence = n.escapeSequence ? `${n.escapeSequence}${l}` : l : 8 === t ? n.quote = l : 9 === t && (n.quote = void 0), r = t
                                                    }
                                                    return li[r].includes(1) ? ("" !== o && i.push(o), i) : []
                                                }(e);
                                            if (0 === i.length) {
                                                sf.display.error(`Invalid JSON path in the remote configuration: '${e}'`), r.increment("js", "failure");
                                                return
                                            }
                                            for (let n of i) {
                                                if (!(n in t)) return void r.increment("js", "missing");
                                                try {
                                                    t = t[n]
                                                } catch (t) {
                                                    sf.display.error(`Error accessing: '${e}'`, t), r.increment("js", "failure");
                                                    return
                                                }
                                            }
                                            return r.increment("js", "success"), t
                                        }(t);
                                        break;
                                    default:
                                        sf.display.error(`Unsupported remote configuration: "strategy": "${o}"`);
                                        return
                                }
                                let a = t.extractor;
                                return void 0 !== a && "string" == typeof n ? function(e, t) {
                                    let i = ll(e.value);
                                    if (void 0 === i) return;
                                    let r = i.exec(t);
                                    if (null === r) return;
                                    let [n, o] = r;
                                    return o || n
                                }(a, n) : n;
                            default:
                                sf.display.error(`Unsupported remote configuration: "rcSerializedType": "${i}"`);
                                return
                        }
                    }
                    return (0, sZ.mapValues)(e, o)
                }
                return e
            }
        }(e, o.value, t, n)) : (n.increment("fetch", "failure"), sf.display.error(o.error)), (0, sR.addTelemetryMetrics)("remote configuration metrics", {
            metrics: n.get()
        }), r
    }

    function ll(e) {
        try {
            return new RegExp(e)
        } catch (t) {
            sf.display.error(`Invalid regex in the remote configuration: '${e}'`)
        }
    }
    async function lu(e) {
        let t;
        try {
            var i;
            t = await (0, s6.fetch)((i = e).remoteConfigurationProxy ? i.remoteConfigurationProxy : `https://sdk-configuration.${(0,s3.buildEndpointHost)("rum",i)}/v1/${encodeURIComponent(i.remoteConfigurationId)}.json`)
        } catch (e) {
            t = void 0
        }
        if (!t || !t.ok) return {
            ok: !1,
            error: Error("Error fetching the remote configuration.")
        };
        let r = await t.json();
        return r.rum ? {
            ok: !0,
            value: r.rum
        } : {
            ok: !1,
            error: Error("No remote configuration for RUM.")
        }
    }

    function lc(e, t, i) {
        e.changeObservable.subscribe(() => {
            let r = e.getContext();
            i.add(e => e[t].setContext(r))
        })
    }
    var ld = e.i(730306),
        lp = e.i(662438),
        lh = e.i(124385);

    function lf(e, t, i) {
        let r, n = 0,
            o = [],
            a = !0,
            s = 0,
            l = [],
            {
                stop: u
            } = (0, lh.addEventListener)(e, t, "message", ({
                data: e
            }) => {
                if ("wrote" !== e.type || e.streamId !== i) return;
                let t = l[0];
                t && (t.id === e.id ? (l.shift(), n += e.additionalBytesCount, o.push(e.result), r = e.trailer, t.writeCallback ? t.writeCallback(e.result.byteLength) : t.finishCallback && t.finishCallback()) : t.id < e.id && u())
            });

        function c() {
            let e = 0 === o.length ? new Uint8Array(0) : (0, sA.concatBuffers)(o.concat(r)),
                t = {
                    rawBytesCount: n,
                    output: e,
                    outputBytesCount: e.byteLength,
                    encoding: "deflate"
                };
            return n = 0, o = [], t
        }

        function d() {
            a || (t.postMessage({
                action: "reset",
                streamId: i
            }), a = !0)
        }
        return {
            isAsync: !0,
            get isEmpty() {
                return a
            },
            write(e, r) {
                t.postMessage({
                    action: "write",
                    id: s,
                    data: e,
                    streamId: i
                }), l.push({
                    id: s,
                    writeCallback: r,
                    data: e
                }), a = !1, s += 1
            },
            finish(e) {
                d(), l.length ? (l.forEach(e => {
                    delete e.writeCallback
                }), l[l.length - 1].finishCallback = () => e(c())) : e(c())
            },
            finishSync() {
                d();
                let e = l.map(e => e.data).join("");
                return l.length = 0, { ...c(),
                    pendingData: e
                }
            },
            estimateEncodedBytesCount: e => e.length / 8,
            stop() {
                u()
            }
        }
    }
    var lg = e.i(442504);

    function lv({
        configuredUrl: e,
        error: t,
        source: i,
        scriptType: r
    }) {
        var n;
        if (sf.display.error(`${i} failed to start: an error occurred while initializing the ${r}:`, t), t instanceof Event || t instanceof Error && ((n = t.message).includes("Content Security Policy") || n.includes("requires 'TrustedScriptURL'"))) {
            let t;
            t = e ? `Please make sure the ${r} URL ${e} is correct and CSP is correctly configured.` : "Please make sure CSP is correctly configured.", sf.display.error(`${t} See documentation at ${sf.DOCS_ORIGIN}/integrations/content_security_policy_logs/#use-csp-with-real-user-monitoring-and-session-replay`)
        } else "worker" === r && (0, sR.addTelemetryError)(t)
    }
    let lm = 30 * sT.ONE_SECOND;

    function l_(e) {
        return new Worker(e.workerUrl || URL.createObjectURL(new Blob(['(()=>{function t(t){if(1===t.length)return t[0];const e=t.reduce((t,e)=>t+e.length,0),a=new Uint8Array(e);let n=0;for(const e of t)a.set(e,n),n+=e.length;return a}function e(t){for(var e=t.length;--e>=0;)t[e]=0}var a=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),n=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),r=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),i=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=Array(576);e(s);var h=Array(60);e(h);var l=Array(512);e(l);var _=Array(256);e(_);var o=Array(29);e(o);var d,u,f,c=Array(30);function p(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function g(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(c);var v=function(t){return t<256?l[t]:l[256+(t>>>7)]},w=function(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},m=function(t,e,a){t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,w(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},b=function(t,e,a){m(t,a[2*e],a[2*e+1])},y=function(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},z=function(t,e,a){var n,r,i=Array(16),s=0;for(n=1;n<=15;n++)i[n]=s=s+a[n-1]<<1;for(r=0;r<=e;r++){var h=t[2*r+1];0!==h&&(t[2*r]=y(i[h]++,h))}},k=function(t){var e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},x=function(t){t.bi_valid>8?w(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},A=function(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]},U=function(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&A(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!A(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n},B=function(t,e,r){var i,s,h,l,d=0;if(0!==t.last_lit)do{i=t.pending_buf[t.d_buf+2*d]<<8|t.pending_buf[t.d_buf+2*d+1],s=t.pending_buf[t.l_buf+d],d++,0===i?b(t,s,e):(h=_[s],b(t,h+256+1,e),0!==(l=a[h])&&(s-=o[h],m(t,s,l)),i--,h=v(i),b(t,h,r),0!==(l=n[h])&&(i-=c[h],m(t,i,l)))}while(d<t.last_lit);b(t,256,e)},I=function(t,e){var a,n,r,i=e.dyn_tree,s=e.stat_desc.static_tree,h=e.stat_desc.has_stree,l=e.stat_desc.elems,_=-1;for(t.heap_len=0,t.heap_max=573,a=0;a<l;a++)0!==i[2*a]?(t.heap[++t.heap_len]=_=a,t.depth[a]=0):i[2*a+1]=0;for(;t.heap_len<2;)i[2*(r=t.heap[++t.heap_len]=_<2?++_:0)]=1,t.depth[r]=0,t.opt_len--,h&&(t.static_len-=s[2*r+1]);for(e.max_code=_,a=t.heap_len>>1;a>=1;a--)U(t,i,a);r=l;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],U(t,i,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,i[2*r]=i[2*a]+i[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,i[2*a+1]=i[2*n+1]=r,t.heap[1]=r++,U(t,i,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,n,r,i,s,h,l=e.dyn_tree,_=e.max_code,o=e.stat_desc.static_tree,d=e.stat_desc.has_stree,u=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,c=e.stat_desc.max_length,p=0;for(i=0;i<=15;i++)t.bl_count[i]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<573;a++)(i=l[2*l[2*(n=t.heap[a])+1]+1]+1)>c&&(i=c,p++),l[2*n+1]=i,n>_||(t.bl_count[i]++,s=0,n>=f&&(s=u[n-f]),h=l[2*n],t.opt_len+=h*(i+s),d&&(t.static_len+=h*(o[2*n+1]+s)));if(0!==p){do{for(i=c-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[c]--,p-=2}while(p>0);for(i=c;0!==i;i--)for(n=t.bl_count[i];0!==n;)(r=t.heap[--a])>_||(l[2*r+1]!==i&&(t.opt_len+=(i-l[2*r+1])*l[2*r],l[2*r+1]=i),n--)}}(t,e),z(i,_,t.bl_count)},E=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++h<l&&r===s||(h<_?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[32]++):h<=10?t.bl_tree[34]++:t.bl_tree[36]++,h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4))},C=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++h<l&&r===s)){if(h<_)do{b(t,r,t.bl_tree)}while(0!==--h);else 0!==r?(r!==i&&(b(t,r,t.bl_tree),h--),b(t,16,t.bl_tree),m(t,h-3,2)):h<=10?(b(t,17,t.bl_tree),m(t,h-3,3)):(b(t,18,t.bl_tree),m(t,h-11,7));h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4)}},D=!1,M=function(t,e,a,n){m(t,0+(n?1:0),3),function(t,e,a){x(t),w(t,a),w(t,~a),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a}(t,e,a)},j=M,L=function(t,e,a,n){for(var r=65535&t,i=t>>>16&65535,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{i=i+(r=r+e[n++]|0)|0}while(--s);r%=65521,i%=65521}return r|i<<16},S=new Uint32Array(function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}()),T=function(t,e,a,n){var r=S,i=n+a;t^=-1;for(var s=n;s<i;s++)t=t>>>8^r[255&(t^e[s])];return-1^t},O={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},q=j,F=function(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(_[a]+256+1)]++,t.dyn_dtree[2*v(e)]++),t.last_lit===t.lit_bufsize-1},G=-2,H=258,J=262,K=103,N=113,P=666,Q=function(t,e){return t.msg=O[e],e},R=function(t){return(t<<1)-(t>4?9:0)},V=function(t){for(var e=t.length;--e>=0;)t[e]=0},W=function(t,e,a){return(e<<t.hash_shift^a)&t.hash_mask},X=function(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},Y=function(t,e){(function(t,e,a,n){var r,l,_=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),I(t,t.l_desc),I(t,t.d_desc),_=function(t){var e;for(E(t,t.dyn_ltree,t.l_desc.max_code),E(t,t.dyn_dtree,t.d_desc.max_code),I(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*i[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),r=t.opt_len+3+7>>>3,(l=t.static_len+3+7>>>3)<=r&&(r=l)):r=l=a+5,a+4<=r&&-1!==e?M(t,e,a,n):4===t.strategy||l===r?(m(t,2+(n?1:0),3),B(t,s,h)):(m(t,4+(n?1:0),3),function(t,e,a,n){var r;for(m(t,e-257,5),m(t,a-1,5),m(t,n-4,4),r=0;r<n;r++)m(t,t.bl_tree[2*i[r]+1],3);C(t,t.dyn_ltree,e-1),C(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,_+1),B(t,t.dyn_ltree,t.dyn_dtree)),k(t),n&&x(t)})(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,X(t.strm)},Z=function(t,e){t.pending_buf[t.pending++]=e},$=function(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},tt=function(t,e,a,n){var r=t.avail_in;return r>n&&(r=n),0===r?0:(t.avail_in-=r,e.set(t.input.subarray(t.next_in,t.next_in+r),a),1===t.state.wrap?t.adler=L(t.adler,e,r,a):2===t.state.wrap&&(t.adler=T(t.adler,e,r,a)),t.next_in+=r,t.total_in+=r,r)},et=function(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,l=t.strstart>t.w_size-J?t.strstart-(t.w_size-J):0,_=t.window,o=t.w_mask,d=t.prev,u=t.strstart+H,f=_[i+s-1],c=_[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do{if(_[(a=e)+s]===c&&_[a+s-1]===f&&_[a]===_[i]&&_[++a]===_[i+1]){i+=2,a++;do{}while(_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&i<u);if(n=H-(u-i),i=u-H,n>s){if(t.match_start=e,s=n,n>=h)break;f=_[i+s-1],c=_[i+s]}}}while((e=d[e&o])>l&&0!==--r);return s<=t.lookahead?s:t.lookahead},at=function(t){var e,a,n,r,i,s=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-J)){t.window.set(t.window.subarray(s,s+s),0),t.match_start-=s,t.strstart-=s,t.block_start-=s,e=a=t.hash_size;do{n=t.head[--e],t.head[e]=n>=s?n-s:0}while(--a);e=a=s;do{n=t.prev[--e],t.prev[e]=n>=s?n-s:0}while(--a);r+=s}if(0===t.strm.avail_in)break;if(a=tt(t.strm,t.window,t.strstart+t.lookahead,r),t.lookahead+=a,t.lookahead+t.insert>=3)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=W(t,t.ins_h,t.window[i+1]);t.insert&&(t.ins_h=W(t,t.ins_h,t.window[i+3-1]),t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<J&&0!==t.strm.avail_in)},nt=function(t,e){for(var a,n;;){if(t.lookahead<J){if(at(t),t.lookahead<J&&0===e)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=W(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-J&&(t.match_length=et(t,a)),t.match_length>=3)if(n=F(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=W(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=W(t,t.ins_h,t.window[t.strstart+1]);else n=F(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(Y(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,4===e?(Y(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Y(t,!1),0===t.strm.avail_out)?1:2},rt=function(t,e){for(var a,n,r;;){if(t.lookahead<J){if(at(t),t.lookahead<J&&0===e)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=W(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-J&&(t.match_length=et(t,a),t.match_length<=5&&(1===t.strategy||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-3,n=F(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=r&&(t.ins_h=W(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!==--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,n&&(Y(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((n=F(t,0,t.window[t.strstart-1]))&&Y(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=F(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,4===e?(Y(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Y(t,!1),0===t.strm.avail_out)?1:2};function it(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}var st=[new it(0,0,0,0,function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(at(t),0===t.lookahead&&0===e)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,Y(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-J&&(Y(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(Y(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(Y(t,!1),t.strm.avail_out),1)}),new it(4,4,8,4,nt),new it(4,5,16,8,nt),new it(4,6,32,32,nt),new it(4,4,16,16,rt),new it(8,16,32,32,rt),new it(8,16,128,128,rt),new it(8,32,128,256,rt),new it(32,128,258,1024,rt),new it(32,258,258,4096,rt)];function ht(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),V(this.dyn_ltree),V(this.dyn_dtree),V(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),V(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),V(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}for(var lt=function(t){var e,i=function(t){if(!t||!t.state)return Q(t,G);t.total_in=t.total_out=0,t.data_type=2;var e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:N,t.adler=2===e.wrap?0:1,e.last_flush=0,function(t){D||(function(){var t,e,i,g,v,w=Array(16);for(i=0,g=0;g<28;g++)for(o[g]=i,t=0;t<1<<a[g];t++)_[i++]=g;for(_[i-1]=g,v=0,g=0;g<16;g++)for(c[g]=v,t=0;t<1<<n[g];t++)l[v++]=g;for(v>>=7;g<30;g++)for(c[g]=v<<7,t=0;t<1<<n[g]-7;t++)l[256+v++]=g;for(e=0;e<=15;e++)w[e]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,w[8]++;for(;t<=255;)s[2*t+1]=9,t++,w[9]++;for(;t<=279;)s[2*t+1]=7,t++,w[7]++;for(;t<=287;)s[2*t+1]=8,t++,w[8]++;for(z(s,287,w),t=0;t<30;t++)h[2*t+1]=5,h[2*t]=y(t,5);d=new p(s,a,257,286,15),u=new p(h,n,0,30,15),f=new p([],r,0,19,7)}(),D=!0),t.l_desc=new g(t.dyn_ltree,d),t.d_desc=new g(t.dyn_dtree,u),t.bl_desc=new g(t.bl_tree,f),t.bi_buf=0,t.bi_valid=0,k(t)}(e),0}(t);return 0===i&&((e=t.state).window_size=2*e.w_size,V(e.head),e.max_lazy_match=st[e.level].max_lazy,e.good_match=st[e.level].good_length,e.nice_match=st[e.level].nice_length,e.max_chain_length=st[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),i},_t=function(t,e){var a,n;if(!t||!t.state||e>5||e<0)return t?Q(t,G):G;var r=t.state;if(!t.output||!t.input&&0!==t.avail_in||r.status===P&&4!==e)return Q(t,0===t.avail_out?-5:G);r.strm=t;var i=r.last_flush;if(r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,Z(r,31),Z(r,139),Z(r,8),r.gzhead?(Z(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),Z(r,255&r.gzhead.time),Z(r,r.gzhead.time>>8&255),Z(r,r.gzhead.time>>16&255),Z(r,r.gzhead.time>>24&255),Z(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),Z(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(Z(r,255&r.gzhead.extra.length),Z(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=T(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(Z(r,0),Z(r,0),Z(r,0),Z(r,0),Z(r,0),Z(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),Z(r,3),r.status=N);else{var h=8+(r.w_bits-8<<4)<<8;h|=(r.strategy>=2||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(h|=32),h+=31-h%31,r.status=N,$(r,h),0!==r.strstart&&($(r,t.adler>>>16),$(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),X(t),a=r.pending,r.pending!==r.pending_buf_size));)Z(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),X(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,Z(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),X(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,Z(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=T(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.status=K)}else r.status=K;if(r.status===K&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&X(t),r.pending+2<=r.pending_buf_size&&(Z(r,255&t.adler),Z(r,t.adler>>8&255),t.adler=0,r.status=N)):r.status=N),0!==r.pending){if(X(t),0===t.avail_out)return r.last_flush=-1,0}else if(0===t.avail_in&&R(e)<=R(i)&&4!==e)return Q(t,-5);if(r.status===P&&0!==t.avail_in)return Q(t,-5);if(0!==t.avail_in||0!==r.lookahead||0!==e&&r.status!==P){var l=2===r.strategy?function(t,e){for(var a;;){if(0===t.lookahead&&(at(t),0===t.lookahead)){if(0===e)return 1;break}if(t.match_length=0,a=F(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(Y(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(Y(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Y(t,!1),0===t.strm.avail_out)?1:2}(r,e):3===r.strategy?function(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=H){if(at(t),t.lookahead<=H&&0===e)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=s[r=t.strstart-1])===s[++r]&&n===s[++r]&&n===s[++r]){i=t.strstart+H;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=H-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=F(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=F(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(Y(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(Y(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Y(t,!1),0===t.strm.avail_out)?1:2}(r,e):st[r.level].func(r,e);if(3!==l&&4!==l||(r.status=P),1===l||3===l)return 0===t.avail_out&&(r.last_flush=-1),0;if(2===l&&(1===e?function(t){m(t,2,3),b(t,256,s),function(t){16===t.bi_valid?(w(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}(r):5!==e&&(q(r,0,0,!1),3===e&&(V(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),X(t),0===t.avail_out))return r.last_flush=-1,0}return 4!==e?0:r.wrap<=0?1:(2===r.wrap?(Z(r,255&t.adler),Z(r,t.adler>>8&255),Z(r,t.adler>>16&255),Z(r,t.adler>>24&255),Z(r,255&t.total_in),Z(r,t.total_in>>8&255),Z(r,t.total_in>>16&255),Z(r,t.total_in>>24&255)):($(r,t.adler>>>16),$(r,65535&t.adler)),X(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?0:1)},ot=function(t){if(!t||!t.state)return G;var e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&e!==K&&e!==N&&e!==P?Q(t,G):(t.state=null,e===N?Q(t,-3):0)},dt=new Uint8Array(256),ut=0;ut<256;ut++)dt[ut]=ut>=252?6:ut>=248?5:ut>=240?4:ut>=224?3:ut>=192?2:1;dt[254]=dt[254]=1;var ft=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},ct=Object.prototype.toString;function pt(){this.options={level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0};var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new ft,this.strm.avail_out=0;var e,a,n=function(t,e,a,n,r,i){if(!t)return G;var s=1;if(-1===e&&(e=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),r<1||r>9||8!==a||n<8||n>15||e<0||e>9||i<0||i>4)return Q(t,G);8===n&&(n=9);var h=new ht;return t.state=h,h.strm=t,h.wrap=s,h.gzhead=null,h.w_bits=n,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=r+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+3-1)/3),h.window=new Uint8Array(2*h.w_size),h.head=new Uint16Array(h.hash_size),h.prev=new Uint16Array(h.w_size),h.lit_bufsize=1<<r+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new Uint8Array(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=i,h.method=a,lt(t)}(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(0!==n)throw Error(O[n]);if(t.header&&(e=this.strm,a=t.header,e&&e.state&&(2!==e.state.wrap||(e.state.gzhead=a))),t.dictionary){var r;if(r="[object ArrayBuffer]"===ct.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,0!==(n=function(t,e){var a=e.length;if(!t||!t.state)return G;var n=t.state,r=n.wrap;if(2===r||1===r&&42!==n.status||n.lookahead)return G;if(1===r&&(t.adler=L(t.adler,e,a,0)),n.wrap=0,a>=n.w_size){0===r&&(V(n.head),n.strstart=0,n.block_start=0,n.insert=0);var i=new Uint8Array(n.w_size);i.set(e.subarray(a-n.w_size,a),0),e=i,a=n.w_size}var s=t.avail_in,h=t.next_in,l=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,at(n);n.lookahead>=3;){var _=n.strstart,o=n.lookahead-2;do{n.ins_h=W(n,n.ins_h,n.window[_+3-1]),n.prev[_&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=_,_++}while(--o);n.strstart=_,n.lookahead=2,at(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=h,t.input=l,t.avail_in=s,n.wrap=r,0}(this.strm,r)))throw Error(O[n]);this._dict_set=!0}}function gt(t,e,a){try{t.postMessage({type:"errored",error:e,streamId:a})}catch(n){t.postMessage({type:"errored",error:e+"",streamId:a})}}function vt(t){const e=t.strm.adler;return new Uint8Array([3,0,e>>>24&255,e>>>16&255,e>>>8&255,255&e])}pt.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;for(n=e===~~e?e:!0===e?4:0,"[object ArrayBuffer]"===ct.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;;)if(0===r.avail_out&&(r.output=new Uint8Array(i),r.next_out=0,r.avail_out=i),(2===n||3===n)&&r.avail_out<=6)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else{if(1===(a=_t(r,n)))return r.next_out>0&&this.onData(r.output.subarray(0,r.next_out)),a=ot(this.strm),this.onEnd(a),this.ended=!0,0===a;if(0!==r.avail_out){if(n>0&&r.next_out>0)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else if(0===r.avail_in)break}else this.onData(r.output)}return!0},pt.prototype.onData=function(t){this.chunks.push(t)},pt.prototype.onEnd=function(t){0===t&&(this.result=function(t){for(var e=0,a=0,n=t.length;a<n;a++)e+=t[a].length;for(var r=new Uint8Array(e),i=0,s=0,h=t.length;i<h;i++){var l=t[i];r.set(l,s),s+=l.length}return r}(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},function(e=self){try{const a=new Map;e.addEventListener("message",n=>{try{const r=function(e,a){switch(a.action){case"init":return{type:"initialized",version:"6.26.0"};case"write":{let n=e.get(a.streamId);n||(n=new pt,e.set(a.streamId,n));const r=n.chunks.length,i=function(t){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,n,r,i,s=t.length,h=0;for(r=0;r<s;r++)a=t.charCodeAt(r),55296==(64512&a)&&r+1<s&&(n=t.charCodeAt(r+1),56320==(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),r++)),h+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(h),i=0,r=0;i<h;r++)a=t.charCodeAt(r),55296==(64512&a)&&r+1<s&&(n=t.charCodeAt(r+1),56320==(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),r++)),a<128?e[i++]=a:a<2048?(e[i++]=192|a>>>6,e[i++]=128|63&a):a<65536?(e[i++]=224|a>>>12,e[i++]=128|a>>>6&63,e[i++]=128|63&a):(e[i++]=240|a>>>18,e[i++]=128|a>>>12&63,e[i++]=128|a>>>6&63,e[i++]=128|63&a);return e}(a.data);return n.push(i,2),{type:"wrote",id:a.id,streamId:a.streamId,result:t(n.chunks.slice(r)),trailer:vt(n),additionalBytesCount:i.length}}case"reset":e.delete(a.streamId)}}(a,n.data);r&&e.postMessage(r)}catch(t){gt(e,t,n.data&&"streamId"in n.data?n.data.streamId:void 0)}})}catch(t){gt(e,t)}}()})();'])))
    }
    let lE = {
        status: 0
    };

    function ly(e, t, i, r = l_) {
        switch (0 === lE.status && function(e, t, i = l_) {
            try {
                let r = i(e),
                    {
                        stop: n
                    } = (0, lh.addEventListener)(e, r, "error", i => {
                        lb(e, t, i)
                    }),
                    {
                        stop: o
                    } = (0, lh.addEventListener)(e, r, "message", ({
                        data: i
                    }) => {
                        var r;
                        "errored" === i.type ? lb(e, t, i.error, i.streamId) : "initialized" === i.type && (r = i.version, 1 === lE.status && (lE = {
                            status: 3,
                            worker: lE.worker,
                            stop: lE.stop,
                            version: r
                        }))
                    });
                r.postMessage({
                    action: "init"
                }), (0, lg.setTimeout)(() => {
                    var e;
                    return e = t, void(1 === lE.status && (sf.display.error(`${e} failed to start: a timeout occurred while initializing the Worker`), lE.initializationFailureCallbacks.forEach(e => e()), lE = {
                        status: 2
                    }))
                }, lm), lE = {
                    status: 1,
                    worker: r,
                    stop: () => {
                        n(), o()
                    },
                    initializationFailureCallbacks: []
                }
            } catch (i) {
                lb(e, t, i)
            }
        }(e, t, r), lE.status) {
            case 1:
                return lE.initializationFailureCallbacks.push(i), lE.worker;
            case 3:
                return lE.worker
        }
    }

    function lb(e, t, i, r) {
        1 === lE.status || 0 === lE.status ? (lv({
            configuredUrl: e.workerUrl,
            error: i,
            source: t,
            scriptType: "worker"
        }), 1 === lE.status && lE.initializationFailureCallbacks.forEach(e => e()), lE = {
            status: 2
        }) : (0, sR.addTelemetryError)(i, {
            worker_version: 3 === lE.status && lE.version,
            stream_id: r
        })
    }

    function lI() {
        return "function" == typeof Array.from && "function" == typeof CSSSupportsRule && "function" == typeof URL.createObjectURL && "forEach" in NodeList.prototype
    }
    var lO = e.i(796411),
        lR = e.i(93258);
    async function lS(e, t, i) {
        try {
            return await i
        } finally {
            e.notify(t)
        }
    }
    async function lT(e = lw) {
        try {
            return await e()
        } catch (e) {
            lv({
                error: e,
                source: "Recorder",
                scriptType: "module"
            })
        }
    }
    async function lw() {
        return (await e.A(241222)).startRecording
    }
    var lN = e.i(533253),
        lA = e.i(401017);
    async function lC(e = lD) {
        try {
            return await e()
        } catch (e) {
            lv({
                error: e,
                source: "Profiler",
                scriptType: "module"
            })
        }
    }
    async function lD() {
        return (await e.A(376594)).createRumProfiler
    }
    let lx = function(e) {
            let t;
            if ((0, sj.canUseEventBridge)() && !(0, sj.bridgeSupports)("records") || !lI()) return {
                start: sH.noop,
                stop: sH.noop,
                getReplayStats: () => void 0,
                onRumStart: sH.noop,
                isRecording: () => !1,
                getSessionReplayLink: () => void 0
            };
            let {
                strategy: i,
                shouldStartImmediately: r
            } = (t = 0, {
                strategy: {
                    start() {
                        t = 1
                    },
                    stop() {
                        t = 2
                    },
                    isRecording: () => !1,
                    getSessionReplayLink: sH.noop
                },
                shouldStartImmediately: e => 1 === t || 0 === t && !e.startSessionReplayRecordingManually
            });
            return {
                start: e => i.start(e),
                stop: () => i.stop(),
                getSessionReplayLink: () => i.getSessionReplayLink(),
                onRumStart: function(t, n, o, a, s, l) {
                    let u;
                    i = function(e, t, i, r, n, o, a) {
                        let s, l = 0;
                        t.subscribe(9, () => {
                            (2 === l || 3 === l) && (p(), l = 1)
                        }), t.subscribe(10, () => {
                            1 === l && d()
                        });
                        let u = new sP.Observable;
                        ! function(e, t) {
                            let i, r, n;
                            if (!e.metricsEnabled) return sH.noop;
                            let {
                                unsubscribe: o
                            } = t.subscribe(e => {
                                switch (e.type) {
                                    case "start":
                                        i = {
                                            forced: e.forced,
                                            timestamp: (0, sT.timeStampNow)()
                                        }, r = void 0, n = void 0;
                                        break;
                                    case "document-ready":
                                        i && (r = (0, sT.elapsed)(i.timestamp, (0, sT.timeStampNow)()));
                                        break;
                                    case "recorder-settled":
                                        i && (n = (0, sT.elapsed)(i.timestamp, (0, sT.timeStampNow)()));
                                        break;
                                    case "aborted":
                                    case "deflate-encoder-load-failed":
                                    case "recorder-load-failed":
                                    case "succeeded":
                                        var t, a, s, l;
                                        o(), i && (0, sR.addTelemetryMetrics)("Recorder init metrics", {
                                            metrics: (t = i.forced, a = n, s = (0, sT.elapsed)(i.timestamp, (0, sT.timeStampNow)()), l = e.type, {
                                                forced: t,
                                                loadRecorderModuleDuration: a,
                                                recorderInitDuration: s,
                                                result: l,
                                                waitForDocReadyDuration: r
                                            })
                                        })
                                }
                            })
                        }(a, u);
                        let c = async c => {
                            u.notify({
                                type: "start",
                                forced: c
                            });
                            let [d] = await Promise.all([lS(u, {
                                type: "recorder-settled"
                            }, n()), lS(u, {
                                type: "document-ready"
                            }, (0, lO.asyncRunOnReadyState)(e, "interactive"))]);
                            if (2 !== l) return void u.notify({
                                type: "aborted"
                            });
                            if (!d) {
                                l = 0, u.notify({
                                    type: "recorder-load-failed"
                                });
                                return
                            }
                            let p = o();
                            if (!p) {
                                l = 0, u.notify({
                                    type: "deflate-encoder-load-failed"
                                });
                                return
                            }({
                                stop: s
                            } = d(t, e, i, r, p, a)), l = 3, u.notify({
                                type: "succeeded"
                            })
                        };

                        function d(e) {
                            var t, r, n, o, a;
                            let s = i.findTrackedSession();
                            if (t = s, r = e, !t || 0 === t.sessionReplay && (!r || !r.force)) {
                                l = 1;
                                return
                            }
                            if (2 === (n = l) || 3 === n) return;
                            l = 2;
                            let u = (o = s, (a = e) && a.force && 0 === o.sessionReplay || !1);
                            c(u).catch(sh.monitorError), u && i.setForcedReplay()
                        }

                        function p() {
                            3 === l && (null == s || s()), l = 0
                        }
                        return {
                            start: d,
                            stop: p,
                            getSessionReplayLink: () => {
                                var t, n, o;
                                let a, s;
                                return t = 0 !== l, n = a = i.findTrackedSession(), o = t, s = lI() ? n ? 0 === n.sessionReplay ? "incorrect-session-plan" : o ? void 0 : "replay-not-started" : "rum-not-tracked" : "browser-not-supported",
                                    function(e, {
                                        session: t,
                                        viewContext: i,
                                        errorType: r
                                    }) {
                                        var n;
                                        let o, a, s = t ? t.id : "no-session-id",
                                            l = [];
                                        void 0 !== r && l.push(`error-type=${r}`), i && (l.push(`seed=${i.id}`), l.push(`from=${i.startClocks.timeStamp}`));
                                        let u = (o = (n = e).site, a = n.subdomain || function(e) {
                                                switch (e.site) {
                                                    case lR.INTAKE_SITE_US1:
                                                    case lR.INTAKE_SITE_EU1:
                                                        return "app";
                                                    case lR.INTAKE_SITE_STAGING:
                                                        return "dd";
                                                    default:
                                                        return
                                                }
                                            }(n), `https://${a?`${a}.`:""}${o}`),
                                            c = `/rum/replay/sessions/${s}`;
                                        return `${u}${c}?${l.join("&")}`
                                    }(e, {
                                        viewContext: r.findView(),
                                        errorType: s,
                                        session: a
                                    })
                            },
                            isRecording: () => 3 === l
                        }
                    }(n, t, o, a, e, function() {
                        return !u && (null != s || (s = ly(n, "Datadog Session Replay", () => {
                            i.stop()
                        }, void 0)), s && (u = lf(n, s, 1))), u
                    }, l), r(n) && i.start()
                },
                isRecording: () => 3 === lE.status && i.isRecording(),
                getReplayStats: e => 3 === lE.status ? (0, lp.getReplayStats)(e) : void 0
            }
        }(lT),
        lk = function(e, t, i, r = {}) {
            let n, o = (0, sx.createTrackingConsentState)(),
                a = (0, sB.createCustomVitalsState)(),
                s = function(e = function() {
                    return new sP.Observable(e => {
                        var t, i;
                        let r = (t, i) => {
                                let r = (0, sM.computeRawError)({
                                    stackTrace: i,
                                    originalError: t,
                                    startClocks: (0, sT.clocksNow)(),
                                    nonErrorPrefix: "Uncaught",
                                    source: sF.ErrorSource.SOURCE,
                                    handling: "unhandled"
                                });
                                e.notify(r)
                            },
                            {
                                stop: n
                            } = (t = r, (0, sU.instrumentMethod)((0, sg.getGlobalObject)(), "onerror", ({
                                parameters: [e, i, r, n, o]
                            }) => {
                                let a;
                                (0, sM.isError)(o) || (a = (0, sL.computeStackTraceFromOnErrorMessage)(e, i, r, n)), t(null != o ? o : e, a)
                            })),
                            {
                                stop: o
                            } = (i = r, (0, sU.instrumentMethod)((0, sg.getGlobalObject)(), "onunhandledrejection", ({
                                parameters: [e]
                            }) => {
                                i(e.reason || "Empty reason")
                            }));
                        return () => {
                            n(), o()
                        }
                    })
                }) {
                    let t = new sP.BufferedObservable(500),
                        i = e().subscribe(e => {
                            t.notify({
                                type: 0,
                                error: e
                            })
                        });
                    return {
                        observable: t,
                        stop: () => {
                            i.unsubscribe()
                        }
                    }
                }().observable,
                l = function({
                    ignoreInitIfSyntheticsWillInjectRum: e = !0,
                    startDeflateWorker: t
                }, i, r, n) {
                    let o, a, s, l, u, c = (u = [], {
                            add: e => {
                                u.push(e) > 500 && u.splice(0, 1)
                            },
                            remove: e => {
                                (0, sq.removeItem)(u, e)
                            },
                            drain: e => {
                                u.forEach(t => t(e)), u.length = 0
                            }
                        }),
                        d = (0, sX.buildGlobalContextManager)();
                    lc(d, sm, c);
                    let p = (0, sQ.buildUserContextManager)();
                    lc(p, sv, c);
                    let h = (0, sY.buildAccountContextManager)();
                    lc(h, s_, c);
                    let f = i.observable.subscribe(v),
                        g = {};

                    function v() {
                        let e;
                        if (!s || !l || !i.isGranted()) return;
                        if (f.unsubscribe(), l.trackViewsManually) {
                            if (!o) return;
                            c.remove(o.callback), e = o.options
                        }
                        let t = n(l, a, e);
                        c.drain(t)
                    }

                    function m(e, r) {
                        var n, o, u, c, d, p, h;
                        let f, g, m = (0, sj.canUseEventBridge)();
                        if (m && (e = { ...d = e,
                                applicationId: "00000000-aaaa-0000-aaaa-000000000000",
                                clientToken: "empty",
                                sessionSampleRate: 100,
                                defaultPrivacyLevel: null != (p = d.defaultPrivacyLevel) ? p : null == (h = (0, sj.getEventBridge)()) ? void 0 : h.getPrivacyLevel()
                            }), s = e, (0, sR.addTelemetryConfiguration)((n = e, f = (0, s$.serializeConfiguration)(n), {
                                session_replay_sample_rate: n.sessionReplaySampleRate,
                                start_session_replay_recording_manually: n.startSessionReplayRecordingManually,
                                trace_sample_rate: n.traceSampleRate,
                                trace_context_injection: n.traceContextInjection,
                                propagate_trace_baggage: n.propagateTraceBaggage,
                                action_name_attribute: n.actionNameAttribute,
                                use_allowed_tracing_urls: (0, sq.isNonEmptyArray)(n.allowedTracingUrls),
                                use_allowed_graph_ql_urls: (0, sq.isNonEmptyArray)(n.allowedGraphQlUrls),
                                use_track_graph_ql_payload: (u = n.allowedGraphQlUrls, (0, sq.isNonEmptyArray)(u) && u.some(e => (0, s1.isIndexableObject)(e) && e.trackPayload)),
                                use_track_graph_ql_response_errors: (c = n.allowedGraphQlUrls, (0, sq.isNonEmptyArray)(c) && c.some(e => (0, s1.isIndexableObject)(e) && e.trackResponseErrors)),
                                selected_tracing_propagators: (g = new Set, (0, sq.isNonEmptyArray)(n.allowedTracingUrls) && n.allowedTracingUrls.forEach(e => {
                                    var t;
                                    null == (t = s5(e)) || t.propagatorTypes.forEach(e => g.add(e))
                                }), Array.from(g)),
                                default_privacy_level: n.defaultPrivacyLevel,
                                enable_privacy_for_action_name: n.enablePrivacyForActionName,
                                use_excluded_activity_urls: (0, sq.isNonEmptyArray)(n.excludedActivityUrls),
                                use_worker_url: !!n.workerUrl,
                                compress_intake_requests: n.compressIntakeRequests,
                                track_views_manually: n.trackViewsManually,
                                track_user_interactions: n.trackUserInteractions,
                                track_resources: n.trackResources,
                                track_long_task: n.trackLongTasks,
                                track_bfcache_views: n.trackBfcacheViews,
                                track_early_requests: n.trackEarlyRequests,
                                plugins: null == (o = n.plugins) ? void 0 : o.map(e => {
                                    var t;
                                    return {
                                        name: e.name,
                                        ...null == (t = e.getConfigurationTelemetry) ? void 0 : t.call(e)
                                    }
                                }),
                                track_feature_flags_for_events: n.trackFeatureFlagsForEvents,
                                remote_configuration_id: n.remoteConfigurationId,
                                profiling_sample_rate: n.profilingSampleRate,
                                use_remote_configuration_proxy: !!n.remoteConfigurationProxy,
                                ...f
                            })), l) return void sD("DD_RUM", e);
                        let _ = function(e, t) {
                            var i, r, n, o, a, s, l;
                            if (void 0 === e.trackFeatureFlagsForEvents || Array.isArray(e.trackFeatureFlagsForEvents) || sf.display.warn("trackFeatureFlagsForEvents should be an array"), !e.applicationId) return void sf.display.error("Application ID is not configured, no RUM data will be collected.");
                            if (!(0, s$.isSampleRate)(e.sessionReplaySampleRate, "Session Replay") || !(0, s$.isSampleRate)(e.traceSampleRate, "Trace")) return;
                            if (void 0 !== e.excludedActivityUrls && !Array.isArray(e.excludedActivityUrls)) return void sf.display.error("Excluded Activity Urls should be an array");
                            let u = function(e) {
                                if (void 0 === e.allowedTracingUrls) return [];
                                if (!Array.isArray(e.allowedTracingUrls)) return void sf.display.error("Allowed Tracing URLs should be an array");
                                if (0 !== e.allowedTracingUrls.length && void 0 === e.service) return void sf.display.error("Service needs to be configured when tracing is enabled");
                                let t = [];
                                return e.allowedTracingUrls.forEach(e => {
                                    let i = s5(e);
                                    i ? t.push(i) : sf.display.warn("Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter", e)
                                }), t
                            }(e);
                            if (!u) return;
                            let c = (0, s$.validateAndBuildConfiguration)(e, t),
                                d = function(e) {
                                    if (!e.allowedGraphQlUrls) return [];
                                    if (!Array.isArray(e.allowedGraphQlUrls)) return sf.display.warn("allowedGraphQlUrls should be an array"), [];
                                    let t = [];
                                    return e.allowedGraphQlUrls.forEach(e => {
                                        (0, sJ.isMatchOption)(e) ? t.push({
                                            match: e,
                                            trackPayload: !1,
                                            trackResponseErrors: !1
                                        }): (0, s1.isIndexableObject)(e) && (0, sJ.isMatchOption)(e.match) && t.push({
                                            match: e.match,
                                            trackPayload: !!e.trackPayload,
                                            trackResponseErrors: !!e.trackResponseErrors
                                        })
                                    }), t
                                }(e);
                            if (!c) return;
                            let p = null != (i = e.sessionReplaySampleRate) ? i : 0;
                            return {
                                applicationId: e.applicationId,
                                actionNameAttribute: e.actionNameAttribute,
                                betaTrackActionsInShadowDom: !!e.betaTrackActionsInShadowDom,
                                sessionReplaySampleRate: p,
                                startSessionReplayRecordingManually: void 0 !== e.startSessionReplayRecordingManually ? !!e.startSessionReplayRecordingManually : 0 === p,
                                traceSampleRate: null != (r = e.traceSampleRate) ? r : 100,
                                rulePsr: (0, s0.isNumber)(e.traceSampleRate) ? e.traceSampleRate / 100 : void 0,
                                allowedTracingUrls: u,
                                excludedActivityUrls: null != (n = e.excludedActivityUrls) ? n : [],
                                workerUrl: e.workerUrl,
                                compressIntakeRequests: !!e.compressIntakeRequests,
                                trackUserInteractions: !!(null == (o = e.trackUserInteractions) || o),
                                trackViewsManually: !!e.trackViewsManually,
                                trackResources: !!(null == (a = e.trackResources) || a),
                                trackLongTasks: !!(null == (s = e.trackLongTasks) || s),
                                trackBfcacheViews: !!e.trackBfcacheViews,
                                trackEarlyRequests: !!e.trackEarlyRequests,
                                subdomain: e.subdomain,
                                defaultPrivacyLevel: (0, sZ.objectHasValue)(s$.DefaultPrivacyLevel, e.defaultPrivacyLevel) ? e.defaultPrivacyLevel : s$.DefaultPrivacyLevel.MASK,
                                enablePrivacyForActionName: !!e.enablePrivacyForActionName,
                                traceContextInjection: (0, sZ.objectHasValue)(s$.TraceContextInjection, e.traceContextInjection) ? e.traceContextInjection : s$.TraceContextInjection.SAMPLED,
                                plugins: e.plugins || [],
                                trackFeatureFlagsForEvents: e.trackFeatureFlagsForEvents || [],
                                profilingSampleRate: null != (l = e.profilingSampleRate) ? l : 0,
                                propagateTraceBaggage: !!e.propagateTraceBaggage,
                                allowedGraphQlUrls: d,
                                ...c
                            }
                        }(e, r);
                        if (_) {
                            if (!m && !_.sessionStoreStrategyType) return void sf.display.warn("No storage available for session. We will not send any data.");
                            if (_.compressIntakeRequests && !m && t && !(a = t(_, "Datadog RUM", sH.noop))) return;
                            l = _, (0, sW.initFetchObservable)().subscribe(sH.noop), i.tryToInit(_.trackingConsent), v()
                        }
                    }
                    let _ = e => {
                        c.add(t => t.addDurationVital(e))
                    };
                    return {
                        init(t, i, r) {
                            t ? ((0, sV.initFeatureFlags)(t.enableExperimentalFeatures), s = t, e && (0, sK.willSyntheticsInjectRum)() || (sG(t.plugins, "onInit", {
                                initConfiguration: t,
                                publicApi: i
                            }), t.remoteConfigurationId ? ls(t, {
                                user: p,
                                context: d
                            }).then(e => {
                                e && m(e, r)
                            }).catch(sh.monitorError) : m(t, r))) : sf.display.error("Missing configuration")
                        },
                        get initConfiguration() {
                            return s
                        },
                        getInternalContext: sH.noop,
                        stopSession: sH.noop,
                        addTiming(e, t = (0, sT.timeStampNow)()) {
                            c.add(i => i.addTiming(e, t))
                        },
                        startView(e, t = (0, sT.clocksNow)()) {
                            let i = i => {
                                i.startView(e, t)
                            };
                            c.add(i), o || (o = {
                                options: e,
                                callback: i
                            }, v())
                        },
                        setViewName(e) {
                            c.add(t => t.setViewName(e))
                        },
                        setViewContext(e) {
                            c.add(t => t.setViewContext(e))
                        },
                        setViewContextProperty(e, t) {
                            c.add(i => i.setViewContextProperty(e, t))
                        },
                        getViewContext: () => g,
                        globalContext: d,
                        userContext: p,
                        accountContext: h,
                        addAction(e) {
                            c.add(t => t.addAction(e))
                        },
                        startAction(e, t) {
                            let i = (0, sT.clocksNow)();
                            c.add(r => r.startAction(e, t, i))
                        },
                        stopAction(e, t) {
                            let i = (0, sT.clocksNow)();
                            c.add(r => r.stopAction(e, t, i))
                        },
                        addError(e) {
                            c.add(t => t.addError(e))
                        },
                        addFeatureFlagEvaluation(e, t) {
                            c.add(i => i.addFeatureFlagEvaluation(e, t))
                        },
                        startDurationVital: (e, t) => (0, sB.startDurationVital)(r, e, t),
                        stopDurationVital(e, t) {
                            (0, sB.stopDurationVital)(_, r, e, t)
                        },
                        addDurationVital: _,
                        addOperationStepVital: (e, t, i, r) => {
                            c.add(n => n.addOperationStepVital((0, sN.sanitize)(e), t, (0, sN.sanitize)(i), (0, sN.sanitize)(r)))
                        }
                    }
                }(r, o, a, (n, u, c) => {
                    var d, p;
                    let h = u && r.createDeflateEncoder ? e => r.createDeflateEncoder(n, u, e) : sC,
                        f = e(n, t, i, c, h, o, a, s, r.sdkName);
                    return t.onRumStart(f.lifeCycle, n, f.session, f.viewHistory, u, f.telemetry), i.onRumStart(f.lifeCycle, f.hooks, n, f.session, f.viewHistory, f.longTaskContexts, h), d = l, p = f, l = {
                        init: e => {
                            sD("DD_RUM", e)
                        },
                        initConfiguration: d.initConfiguration,
                        ...p
                    }, sG(n.plugins, "onRumStart", {
                        strategy: l,
                        addEvent: f.addEvent
                    }), f
                }),
                u = () => l,
                c = (0, sh.monitor)(e => {
                    l.startView("object" == typeof e ? e : {
                        name: e
                    }), (0, sR.addTelemetryUsage)({
                        feature: "start-view"
                    })
                }),
                d = (Object.defineProperty(n = {
                    version: "6.26.0",
                    onReady(e) {
                        e()
                    },
                    ...{
                        init: e => {
                            let t = Error().stack;
                            (0, sh.callMonitored)(() => l.init(e, d, t))
                        },
                        setTrackingConsent: (0, sh.monitor)(e => {
                            o.update(e), (0, sR.addTelemetryUsage)({
                                feature: "set-tracking-consent",
                                tracking_consent: e
                            })
                        }),
                        setViewName: (0, sh.monitor)(e => {
                            l.setViewName(e), (0, sR.addTelemetryUsage)({
                                feature: "set-view-name"
                            })
                        }),
                        setViewContext: (0, sh.monitor)(e => {
                            l.setViewContext(e), (0, sR.addTelemetryUsage)({
                                feature: "set-view-context"
                            })
                        }),
                        setViewContextProperty: (0, sh.monitor)((e, t) => {
                            l.setViewContextProperty(e, t), (0, sR.addTelemetryUsage)({
                                feature: "set-view-context-property"
                            })
                        }),
                        getViewContext: (0, sh.monitor)(() => ((0, sR.addTelemetryUsage)({
                            feature: "set-view-context-property"
                        }), l.getViewContext())),
                        getInternalContext: (0, sh.monitor)(e => l.getInternalContext(e)),
                        getInitConfiguration: (0, sh.monitor)(() => (0, sS.deepClone)(l.initConfiguration)),
                        addAction: (e, t) => {
                            let i = (0, sw.createHandlingStack)("action");
                            (0, sh.callMonitored)(() => {
                                l.addAction({
                                    name: (0, sN.sanitize)(e),
                                    context: (0, sN.sanitize)(t),
                                    startClocks: (0, sT.clocksNow)(),
                                    type: sz.ActionType.CUSTOM,
                                    handlingStack: i
                                }), (0, sR.addTelemetryUsage)({
                                    feature: "add-action"
                                })
                            })
                        },
                        startAction: (0, sh.monitor)((e, t) => {
                            (!l.initConfiguration || (0, sV.isExperimentalFeatureEnabled)(sV.ExperimentalFeature.START_STOP_ACTION)) && l.startAction((0, sN.sanitize)(e), {
                                type: (0, sN.sanitize)(t && t.type),
                                context: (0, sN.sanitize)(t && t.context),
                                actionKey: t && t.actionKey
                            })
                        }),
                        stopAction: (0, sh.monitor)((e, t) => {
                            (!l.initConfiguration || (0, sV.isExperimentalFeatureEnabled)(sV.ExperimentalFeature.START_STOP_ACTION)) && l.stopAction((0, sN.sanitize)(e), {
                                type: (0, sN.sanitize)(t && t.type),
                                context: (0, sN.sanitize)(t && t.context),
                                actionKey: t && t.actionKey
                            })
                        }),
                        addError: (e, t) => {
                            let i = (0, sw.createHandlingStack)("error");
                            (0, sh.callMonitored)(() => {
                                l.addError({
                                    error: e,
                                    handlingStack: i,
                                    context: (0, sN.sanitize)(t),
                                    startClocks: (0, sT.clocksNow)()
                                }), (0, sR.addTelemetryUsage)({
                                    feature: "add-error"
                                })
                            })
                        },
                        addTiming: (0, sh.monitor)((e, t) => {
                            l.addTiming((0, sN.sanitize)(e), t)
                        }),
                        setGlobalContext: sk(u, sm, sy, "set-global-context"),
                        getGlobalContext: sk(u, sm, sE, "get-global-context"),
                        setGlobalContextProperty: sk(u, sm, sb, "set-global-context-property"),
                        removeGlobalContextProperty: sk(u, sm, sI, "remove-global-context-property"),
                        clearGlobalContext: sk(u, sm, sO, "clear-global-context"),
                        setUser: sk(u, sv, sy, "set-user"),
                        getUser: sk(u, sv, sE, "get-user"),
                        setUserProperty: sk(u, sv, sb, "set-user-property"),
                        removeUserProperty: sk(u, sv, sI, "remove-user-property"),
                        clearUser: sk(u, sv, sO, "clear-user"),
                        setAccount: sk(u, s_, sy, "set-account"),
                        getAccount: sk(u, s_, sE, "get-account"),
                        setAccountProperty: sk(u, s_, sb, "set-account-property"),
                        removeAccountProperty: sk(u, s_, sI, "remove-account-property"),
                        clearAccount: sk(u, s_, sO, "clear-account"),
                        startView: c,
                        stopSession: (0, sh.monitor)(() => {
                            l.stopSession(), (0, sR.addTelemetryUsage)({
                                feature: "stop-session"
                            })
                        }),
                        addFeatureFlagEvaluation: (0, sh.monitor)((e, t) => {
                            l.addFeatureFlagEvaluation((0, sN.sanitize)(e), (0, sN.sanitize)(t)), (0, sR.addTelemetryUsage)({
                                feature: "add-feature-flag-evaluation"
                            })
                        }),
                        getSessionReplayLink: (0, sh.monitor)(() => t.getSessionReplayLink()),
                        startSessionReplayRecording: (0, sh.monitor)(e => {
                            t.start(e), (0, sR.addTelemetryUsage)({
                                feature: "start-session-replay-recording",
                                force: e && e.force
                            })
                        }),
                        stopSessionReplayRecording: (0, sh.monitor)(() => t.stop()),
                        addDurationVital: (0, sh.monitor)((e, t) => {
                            (0, sR.addTelemetryUsage)({
                                feature: "add-duration-vital"
                            }), l.addDurationVital({
                                name: (0, sN.sanitize)(e),
                                type: sz.VitalType.DURATION,
                                startClocks: (0, sT.timeStampToClocks)(t.startTime),
                                duration: t.duration,
                                context: (0, sN.sanitize)(t && t.context),
                                description: (0, sN.sanitize)(t && t.description)
                            })
                        }),
                        startDurationVital: (0, sh.monitor)((e, t) => ((0, sR.addTelemetryUsage)({
                            feature: "start-duration-vital"
                        }), l.startDurationVital((0, sN.sanitize)(e), {
                            context: (0, sN.sanitize)(t && t.context),
                            description: (0, sN.sanitize)(t && t.description)
                        }))),
                        stopDurationVital: (0, sh.monitor)((e, t) => {
                            (0, sR.addTelemetryUsage)({
                                feature: "stop-duration-vital"
                            }), l.stopDurationVital("string" == typeof e ? (0, sN.sanitize)(e) : e, {
                                context: (0, sN.sanitize)(t && t.context),
                                description: (0, sN.sanitize)(t && t.description)
                            })
                        }),
                        startFeatureOperation: (0, sh.monitor)((e, t) => {
                            (0, sR.addTelemetryUsage)({
                                feature: "add-operation-step-vital",
                                action_type: "start"
                            }), l.addOperationStepVital(e, "start", t)
                        }),
                        succeedFeatureOperation: (0, sh.monitor)((e, t) => {
                            (0, sR.addTelemetryUsage)({
                                feature: "add-operation-step-vital",
                                action_type: "succeed"
                            }), l.addOperationStepVital(e, "end", t)
                        }),
                        failFeatureOperation: (0, sh.monitor)((e, t, i) => {
                            (0, sR.addTelemetryUsage)({
                                feature: "add-operation-step-vital",
                                action_type: "fail"
                            }), l.addOperationStepVital(e, "end", i, t)
                        })
                    }
                }, "_setDebug", {
                    get: () => sh.setDebugMode,
                    enumerable: !1
                }), n);
            return d
        }(ld.startRum, lx, {
            onRumStart: function(e, t, i, r, n, o, a) {
                let s, u = r.findTrackedSession();
                if (!u || !(0, lN.isSampled)(u.id, i.profilingSampleRate)) return;
                let c = (s = {
                    status: "starting"
                }, t.register(0, ({
                    eventType: e
                }) => e !== sz.RumEventType.VIEW && e !== sz.RumEventType.LONG_TASK ? lA.SKIPPED : {
                    type: e,
                    _dd: {
                        profiling: s
                    }
                }), {
                    get: () => s,
                    set: e => {
                        s = e
                    }
                });
                void 0 === (0, sg.getGlobalObject)().Profiler ? c.set({
                    status: "error",
                    error_reason: "not-supported-by-browser"
                }) : lC().then(t => {
                    t ? (l = t(i, e, r, c, o, a, n, void 0)).start() : c.set({
                        status: "error",
                        error_reason: "failed-to-lazy-load"
                    })
                }).catch(sh.monitorError)
            },
            stop: () => {
                null == l || l.stop().catch(sh.monitorError)
            }
        }, {
            startDeflateWorker: ly,
            createDeflateEncoder: lf,
            sdkName: "rum"
        });
    O = (0, sg.getGlobalObject)(), (u = O[R = "DD_RUM"]) && !u.q && u.version && sf.display.warn("SDK is loaded more than once. This is unsupported and might have unexpected behavior."), O[R] = lk, u && u.q && u.q.forEach(e => (0, sp.catchUserErrors)(e, "onReady callback threw an error:")());
    let lP = [e.i(738368).Environment.PRODUCTION],
        lU = "https://ledgercustomersuccess--afshop.sandbox.my.site.com",
        lL = ["00DAY00000IosR4", "Ledger_Shop_Testing", `${lU}/ESWLedgerShopTesting1743614389502`, {
            scrt2URL: "https://ledgercustomersuccess--afshop.sandbox.my.salesforce-scrt.com"
        }],
        lM = "en_US",
        lF = `${lU}/ESWLedgerShopTesting1743614389502/assets/js/bootstrap.min.js`,
        lV = {
            en: "en_US",
            fr: "fr",
            tr: "tr",
            de: "de",
            pt: "pt_BR",
            es: "es",
            ja: "ja",
            ko: "ko",
            ar: "ar",
            th: "th",
            zh: "zh_CN"
        },
        lz = new class {
            initialised = !1;
            userLanguage = lM;
            constructor() {
                if (!(0, ss.getIsBrowser)()) return;
                window.addEventListener("onEmbeddedMessagingReady", () => {
                    this.initialised = !0
                })
            }
            withLanguage(e) {
                return this.userLanguage = e, this
            }
            initialize() {
                if ((0, ss.getIsBrowser)() && window.embeddedservice_bootstrap) try {
                    window.embeddedservice_bootstrap.settings.hideChatButtonOnLoad = !0, window.embeddedservice_bootstrap.settings.disableInlineAutoLaunch = !0, window.embeddedservice_bootstrap.settings.language = this.userLanguage, window.embeddedservice_bootstrap.init(...lL)
                } catch (e) {
                    this.logError("initialization failure", e)
                }
            }
            async launchChat() {
                let e = (0, ss.getIsBrowser)(),
                    t = "accepted" === (0, oF.getConsentState)(oF.ConsentCategory.PERFORMANCE);
                if (!this.initialised) return void this.logError("chat launched before initialization");
                if (!e || !t) return;
                let i = window.embeddedservice_bootstrap ? .utilAPI;
                return i ? i.launchChat().catch(e => {
                    this.logError("failed to launch", e)
                }) : void this.logError("failed to launch - embeddedservice not available")
            }
            logError(e, t) {
                console.error("AI Assistant: " + e, ...t ? [t] : [])
            }
        };

    function lB() {
        let e, t, i, r, n = (0, L.c)(6);
        n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, oF.getConsentState)(oF.ConsentCategory.FUNCTIONAL), n[0] = e) : e = n[0];
        let o = "accepted" === e,
            [a, s] = (0, M.useState)(o),
            l = function() {
                let {
                    locale: e
                } = (0, F.useRouter)();
                return e && e in lV ? lV[e] : lM
            }();
        return n[1] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
            let e = () => {
                s("accepted" === (0, oF.getConsentState)(oF.ConsentCategory.FUNCTIONAL))
            };
            return window.addEventListener(oF.CONSENT_UPDATED_EVENT_NAME, e), () => {
                window.removeEventListener(oF.CONSENT_UPDATED_EVENT_NAME, e)
            }
        }, i = [], n[1] = t, n[2] = i) : (t = n[1], i = n[2]), (0, M.useEffect)(t, i), n[3] !== a || n[4] !== l ? (r = a ? (0, U.jsx)(il.default, {
            "data-testid": "agentforce-bootstrap",
            type: "text/javascript",
            onLoad: () => lz.withLanguage(l).initialize(),
            src: lF
        }) : null, n[3] = a, n[4] = l, n[5] = r) : r = n[5], r
    }
    "enabled" === P.default.env.NEXT_PUBLIC_API_MOCKING && e.r(696350);
    let lG = (0, ea.createInstance)({
        sdkKey: "SQph7egmpsUxnu7rVu44H",
        logLevel: S.DEBUG,
        eventDispatcher: new sl
    });
    lG.notificationCenter.addNotificationListener(ea.enums.NOTIFICATION_TYPES.DECISION, function(e) {
        var t;
        if (!("object" == typeof(t = e) && null !== t && "decisionInfo" in t && "object" == typeof t.decisionInfo && null !== t.decisionInfo && "flagKey" in t.decisionInfo && "string" == typeof t.decisionInfo.flagKey && "variationKey" in t.decisionInfo && "string" == typeof t.decisionInfo.variationKey)) return;
        let i = !1,
            r = "AB_OP_SS_" + e.decisionInfo.flagKey,
            n = e.decisionInfo.variationKey;
        window._uxa = window._uxa || [], window._uxa.push(["afterPageView", function(e) {
            !i && window.CS_CONF && (i = !0, window.CS_CONF.integrations = window.CS_CONF.integrations || [], window.CS_CONF.integrations.push("Optimizely Feature Experimentation - v1.0.0"))
        }]), window._uxa.push(["trackDynamicVariable", {
            key: r,
            value: n
        }]), window.DD_RUM && i_(e.decisionInfo.flagKey, e.decisionInfo.variationKey)
    });
    let lq = oM(() => {
            (0, oF.initializeConsentSync)(), (0, oV.setClient)(lG)
        }),
        lj = oM(function() {
            if (!(0, ss.getIsBrowser)() || !lP.some(e => "prd" === e)) return;
            let e = "accepted" === (0, oF.getConsentState)(oF.ConsentCategory.PERFORMANCE);
            lk.init({
                clientToken: "pubcf664c43eac25f085a4d31b10e3d866f",
                applicationId: "a6cc4827-82b9-4132-a79c-5bc669f13e93",
                site: "datadoghq.eu",
                service: "ecommerce-shop-frontend",
                env: "prd",
                version: "70686c90bba0f2db14f81a75a7d399d4b09cd45b",
                sessionSampleRate: 5,
                sessionReplaySampleRate: 5,
                trackUserInteractions: !0,
                trackResources: !0,
                trackLongTasks: !0,
                defaultPrivacyLevel: "mask-user-input",
                silentMultipleInit: !0,
                trackingConsent: e ? "granted" : "not-granted"
            }), window.addEventListener(oF.CONSENT_UPDATED_EVENT_NAME, () => {
                let e = "accepted" === (0, oF.getConsentState)(oF.ConsentCategory.PERFORMANCE) ? "granted" : "not-granted";
                lk.setTrackingConsent(e)
            })
        }),
        lK = e => {
            let t, i, r, n, o, a, s, l, u, c, d, p, h, f, g, v = (0, L.c)(29),
                {
                    Component: m,
                    pageProps: _
                } = e,
                {
                    isPreview: E
                } = (0, F.useRouter)(),
                y = (0, im.useSetTrustServices)();
            v[0] !== _.settings ? (t = _.settings ? ? {}, v[0] = _.settings, v[1] = t) : t = v[1];
            let {
                trustServices: b
            } = t, {
                language: I,
                country: O
            } = (0, id.default)();
            if (lj(), lq(), oB(), sd(), v[2] !== O || v[3] !== I) {
                var R, S;
                let e, t, r, n;
                e = function(e) {
                    if ("string" == typeof e) return e;
                    if (!e || "object" != typeof e) return;
                    let t = "user-agent" in e ? e["user-agent"] : "userAgent" in e ? e.userAgent : void 0;
                    return "string" == typeof t ? t : Array.isArray(t) ? t[0] : void 0
                }(R = ss.isBrowser ? window.navigator.userAgent : void 0), t = "string" == typeof(S = R) ? sa(S) : S ? sa(void 0, S) : sa(), r = {}, t.os.name && (r.os = t.os.name), (n = function(e, t) {
                    if (e.device.type) return e.device.type;
                    let i = e.os.name ? .toLowerCase() || "",
                        r = e.device.model ? .toLowerCase() || "",
                        n = e.device.vendor ? .toLowerCase() || "",
                        o = (t || "").toLowerCase(),
                        a = /tablet|ipad|playbook|silk|kindle/i.test(o) || i.includes("android") && !/mobile/i.test(o) || r.includes("tablet") || n.includes("tablet"),
                        s = /mobile|android|iphone|ipod|blackberry|opera|mini|windows\s+phone|palm|iemobile|wpdesktop/i.test(o) || i.includes("android") && /mobile/i.test(o) || i.includes("ios") || r.includes("phone") || n.includes("mobile");
                    return a ? "tablet" : s ? "mobile" : "desktop"
                }(t, e)) && (r.device = n), i = r, O && (i.country = O), I && (i.language = I), v[2] = O, v[3] = I, v[4] = i
            } else i = v[4];
            v[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, iI.resolveUserID)(), v[5] = r) : r = v[5], v[6] !== i ? (n = {
                id: r,
                attributes: i
            }, v[6] = i, v[7] = n) : n = v[7];
            let T = n;
            return v[8] !== y || v[9] !== b ? (o = () => {
                b && y(b)
            }, a = [b, y], v[8] = y, v[9] = b, v[10] = o, v[11] = a) : (o = v[10], a = v[11]), (0, M.useEffect)(o, a), v[12] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, U.jsx)(ib, {}), l = (0, U.jsx)(lB, {}), u = (0, U.jsx)(iv, {}), v[12] = s, v[13] = l, v[14] = u) : (s = v[12], l = v[13], u = v[14]), v[15] !== E ? (c = E && (0, U.jsx)(ep, {}), v[15] = E, v[16] = c) : c = v[16], v[17] !== m || v[18] !== _ ? (d = (0, U.jsx)(m, { ..._
            }), v[17] = m, v[18] = _, v[19] = d) : d = v[19], v[20] !== d || v[21] !== c ? (p = (0, U.jsxs)("div", {
                className: `${eo.className}`,
                children: [s, l, u, c, d]
            }), v[20] = d, v[21] = c, v[22] = p) : p = v[22], v[23] === Symbol.for("react.memo_cache_sentinel") ? (h = !1, v[23] = h) : h = v[23], v[24] !== p ? (f = (0, U.jsxs)(ec, {
                children: [p, h]
            }), v[24] = p, v[25] = f) : f = v[25], v[26] !== T || v[27] !== f ? (g = (0, U.jsx)(ea.OptimizelyProvider, {
                optimizely: lG,
                user: T,
                children: f
            }), v[26] = T, v[27] = f, v[28] = g) : g = v[28], g
        },
        lH = (0, er.appWithTranslation)(e => {
            let t, i, r, n, o = (0, L.c)(13),
                {
                    Component: a,
                    pageProps: s,
                    router: l
                } = e,
                [u] = (0, M.useState)(lW);
            return o[0] !== a || o[1] !== s || o[2] !== l ? (t = (0, U.jsx)(lK, {
                pageProps: s,
                Component: a,
                router: l
            }), o[0] = a, o[1] = s, o[2] = l, o[3] = t) : t = o[3], o[4] !== s.dehydratedState || o[5] !== t ? (i = (0, U.jsx)(ei, {
                state: s.dehydratedState,
                children: t
            }), o[4] = s.dehydratedState, o[5] = t, o[6] = i) : i = o[6], o[7] !== u || o[8] !== i ? (r = (0, U.jsx)(Z.QueryClientProvider, {
                client: u,
                children: i
            }), o[7] = u, o[8] = i, o[9] = r) : r = o[9], o[10] !== s.session || o[11] !== r ? (n = (0, U.jsx)(V.SessionProvider, {
                session: s.session,
                refetchInterval: 0,
                children: r
            }), o[10] = s.session, o[11] = r, o[12] = n) : n = o[12], n
        });

    function lW() {
        return new $({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: !1
                }
            }
        })
    }
    e.s(["default", 0, lH], 811625)
}, 29661, (e, t, i) => {
    let r = "/_app";
    (window.__NEXT_P = window.__NEXT_P || []).push([r, () => e.r(811625)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push([r])
    })
}]);

//# sourceMappingURL=1080smc6o6aco.js.map