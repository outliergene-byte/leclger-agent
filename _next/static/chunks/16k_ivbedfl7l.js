(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 671599, (e, t, r) => {
    t.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }
}, 664157, 673279, 109007, 271179, 47620, 91214, e => {
    "use strict";
    let t;
    var r = e.i(191788);
    let i = e => "string" == typeof e,
        s = () => {
            let e, t, r = new Promise((r, i) => {
                e = r, t = i
            });
            return r.resolve = e, r.reject = t, r
        },
        n = e => null == e ? "" : "" + e,
        a = /###/g,
        o = e => e && e.indexOf("###") > -1 ? e.replace(a, ".") : e,
        l = e => !e || i(e),
        u = (e, t, r) => {
            let s = i(t) ? t.split(".") : t,
                n = 0;
            for (; n < s.length - 1;) {
                if (l(e)) return {};
                let t = o(s[n]);
                !e[t] && r && (e[t] = new r), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++n
            }
            return l(e) ? {} : {
                obj: e,
                k: o(s[n])
            }
        },
        c = (e, t, r) => {
            let {
                obj: i,
                k: s
            } = u(e, t, Object);
            if (void 0 !== i || 1 === t.length) {
                i[s] = r;
                return
            }
            let n = t[t.length - 1],
                a = t.slice(0, t.length - 1),
                o = u(e, a, Object);
            for (; void 0 === o.obj && a.length;) n = `${a[a.length-1]}.${n}`, o = u(e, a = a.slice(0, a.length - 1), Object), o ? .obj && void 0 !== o.obj[`${o.k}.${n}`] && (o.obj = void 0);
            o.obj[`${o.k}.${n}`] = r
        },
        p = (e, t) => {
            let {
                obj: r,
                k: i
            } = u(e, t);
            if (r && Object.prototype.hasOwnProperty.call(r, i)) return r[i]
        },
        h = (e, t, r) => {
            for (let s in t) "__proto__" !== s && "constructor" !== s && (s in e ? i(e[s]) || e[s] instanceof String || i(t[s]) || t[s] instanceof String ? r && (e[s] = t[s]) : h(e[s], t[s], r) : e[s] = t[s]);
            return e
        };
    var d = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };
    let g = e => i(e) ? e.replace(/[&<>"'\/]/g, e => d[e]) : e,
        f = [" ", ",", "?", "!", ";"],
        m = new class {
            constructor(e) {
                this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
            }
            getRegExp(e) {
                let t = this.regExpMap.get(e);
                if (void 0 !== t) return t;
                let r = new RegExp(e);
                return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, r), this.regExpQueue.push(e), r
            }
        }(20),
        y = (e, t, r = ".") => {
            if (!e) return;
            if (e[t]) {
                if (!Object.prototype.hasOwnProperty.call(e, t)) return;
                return e[t]
            }
            let i = t.split(r),
                s = e;
            for (let e = 0; e < i.length;) {
                let t;
                if (!s || "object" != typeof s) return;
                let n = "";
                for (let a = e; a < i.length; ++a)
                    if (a !== e && (n += r), n += i[a], void 0 !== (t = s[n])) {
                        if (["string", "number", "boolean"].indexOf(typeof t) > -1 && a < i.length - 1) continue;
                        e += a - e + 1;
                        break
                    }
                s = t
            }
            return s
        },
        b = e => e ? .replace("_", "-"),
        v = {
            type: "logger",
            log(e) {
                this.output("log", e)
            },
            warn(e) {
                this.output("warn", e)
            },
            error(e) {
                this.output("error", e)
            },
            output(e, t) {
                console ? .[e] ? .apply ? .(console, t)
            }
        };
    class x {
        constructor(e, t = {}) {
            this.init(e, t)
        }
        init(e, t = {}) {
            this.prefix = t.prefix || "i18next:", this.logger = e || v, this.options = t, this.debug = t.debug
        }
        log(...e) {
            return this.forward(e, "log", "", !0)
        }
        warn(...e) {
            return this.forward(e, "warn", "", !0)
        }
        error(...e) {
            return this.forward(e, "error", "")
        }
        deprecate(...e) {
            return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
        }
        forward(e, t, r, s) {
            return s && !this.debug ? null : (i(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[t](e))
        }
        create(e) {
            return new x(this.logger, { ...{
                    prefix: `${this.prefix}:${e}:`
                },
                ...this.options
            })
        }
        clone(e) {
            return (e = e || this.options).prefix = e.prefix || this.prefix, new x(this.logger, e)
        }
    }
    var O = new x;
    class S {
        constructor() {
            this.observers = {}
        }
        on(e, t) {
            return e.split(" ").forEach(e => {
                this.observers[e] || (this.observers[e] = new Map);
                let r = this.observers[e].get(t) || 0;
                this.observers[e].set(t, r + 1)
            }), this
        }
        off(e, t) {
            if (this.observers[e]) {
                if (!t) return void delete this.observers[e];
                this.observers[e].delete(t)
            }
        }
        emit(e, ...t) {
            this.observers[e] && Array.from(this.observers[e].entries()).forEach(([e, r]) => {
                for (let i = 0; i < r; i++) e(...t)
            }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([r, i]) => {
                for (let s = 0; s < i; s++) r.apply(r, [e, ...t])
            })
        }
    }
    class k extends S {
        constructor(e, t = {
            ns: ["translation"],
            defaultNS: "translation"
        }) {
            super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
        }
        addNamespaces(e) {
            0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
        }
        removeNamespaces(e) {
            let t = this.options.ns.indexOf(e);
            t > -1 && this.options.ns.splice(t, 1)
        }
        getResource(e, t, r, s = {}) {
            let n, a = void 0 !== s.keySeparator ? s.keySeparator : this.options.keySeparator,
                o = void 0 !== s.ignoreJSONStructure ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
            e.indexOf(".") > -1 ? n = e.split(".") : (n = [e, t], r && (Array.isArray(r) ? n.push(...r) : i(r) && a ? n.push(...r.split(a)) : n.push(r)));
            let l = p(this.data, n);
            return (!l && !t && !r && e.indexOf(".") > -1 && (e = n[0], t = n[1], r = n.slice(2).join(".")), !l && o && i(r)) ? y(this.data ? .[e] ? .[t], r, a) : l
        }
        addResource(e, t, r, i, s = {
            silent: !1
        }) {
            let n = void 0 !== s.keySeparator ? s.keySeparator : this.options.keySeparator,
                a = [e, t];
            r && (a = a.concat(n ? r.split(n) : r)), e.indexOf(".") > -1 && (a = e.split("."), i = t, t = a[1]), this.addNamespaces(t), c(this.data, a, i), s.silent || this.emit("added", e, t, r, i)
        }
        addResources(e, t, r, s = {
            silent: !1
        }) {
            for (let s in r)(i(r[s]) || Array.isArray(r[s])) && this.addResource(e, t, s, r[s], {
                silent: !0
            });
            s.silent || this.emit("added", e, t, r)
        }
        addResourceBundle(e, t, r, i, s, n = {
            silent: !1,
            skipCopy: !1
        }) {
            let a = [e, t];
            e.indexOf(".") > -1 && (a = e.split("."), i = r, r = t, t = a[1]), this.addNamespaces(t);
            let o = p(this.data, a) || {};
            n.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? h(o, r, s) : o = { ...o,
                ...r
            }, c(this.data, a, o), n.silent || this.emit("added", e, t, r)
        }
        removeResourceBundle(e, t) {
            this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
        }
        hasResourceBundle(e, t) {
            return void 0 !== this.getResource(e, t)
        }
        getResourceBundle(e, t) {
            return t || (t = this.options.defaultNS), this.getResource(e, t)
        }
        getDataByLanguage(e) {
            return this.data[e]
        }
        hasLanguageSomeTranslations(e) {
            let t = this.getDataByLanguage(e);
            return !!(t && Object.keys(t) || []).find(e => t[e] && Object.keys(t[e]).length > 0)
        }
        toJSON() {
            return this.data
        }
    }
    var L = {
        processors: {},
        addPostProcessor(e) {
            this.processors[e.name] = e
        },
        handle(e, t, r, i, s) {
            return e.forEach(e => {
                t = this.processors[e] ? .process(t, r, i, s) ? ? t
            }), t
        }
    };
    let w = Symbol("i18next/PATH_KEY");

    function $(e, t) {
        let r, i, s, {
            [w]: n
        } = e((i = [], (s = Object.create(null)).get = (e, t) => (r ? .revoke ? .(), t === w) ? i : (i.push(t), (r = Proxy.revocable(e, s)).proxy), Proxy.revocable(Object.create(null), s).proxy));
        return n.join(t ? .keySeparator ? ? ".")
    }
    let j = {},
        N = e => !i(e) && "boolean" != typeof e && "number" != typeof e;
    class P extends S {
        constructor(e, t = {}) {
            super(), ((e, t, r) => {
                e.forEach(e => {
                    t[e] && (r[e] = t[e])
                })
            })(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = O.create("translator")
        }
        changeLanguage(e) {
            e && (this.language = e)
        }
        exists(e, t = {
            interpolation: {}
        }) {
            let r = { ...t
            };
            if (null == e) return !1;
            let i = this.resolve(e, r);
            if (i ? .res === void 0) return !1;
            let s = N(i.res);
            return !1 !== r.returnObjects || !s
        }
        extractFromKey(e, t) {
            let r = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
            void 0 === r && (r = ":");
            let s = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                n = t.ns || this.options.defaultNS || [],
                a = r && e.indexOf(r) > -1,
                o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !((e, t, r) => {
                    t = t || "", r = r || "";
                    let i = f.filter(e => 0 > t.indexOf(e) && 0 > r.indexOf(e));
                    if (0 === i.length) return !0;
                    let s = m.getRegExp(`(${i.map(e=>"?"===e?"\\?":e).join("|")})`),
                        n = !s.test(e);
                    if (!n) {
                        let t = e.indexOf(r);
                        t > 0 && !s.test(e.substring(0, t)) && (n = !0)
                    }
                    return n
                })(e, r, s);
            if (a && !o) {
                let t = e.match(this.interpolator.nestingRegexp);
                if (t && t.length > 0) return {
                    key: e,
                    namespaces: i(n) ? [n] : n
                };
                let a = e.split(r);
                (r !== s || r === s && this.options.ns.indexOf(a[0]) > -1) && (n = a.shift()), e = a.join(s)
            }
            return {
                key: e,
                namespaces: i(n) ? [n] : n
            }
        }
        translate(e, t, r) {
            let s = "object" == typeof t ? { ...t
            } : t;
            if ("object" != typeof s && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof s && (s = { ...s
                }), s || (s = {}), null == e) return "";
            "function" == typeof e && (e = $(e, { ...this.options,
                ...s
            })), Array.isArray(e) || (e = [String(e)]);
            let n = void 0 !== s.returnDetails ? s.returnDetails : this.options.returnDetails,
                a = void 0 !== s.keySeparator ? s.keySeparator : this.options.keySeparator,
                {
                    key: o,
                    namespaces: l
                } = this.extractFromKey(e[e.length - 1], s),
                u = l[l.length - 1],
                c = void 0 !== s.nsSeparator ? s.nsSeparator : this.options.nsSeparator;
            void 0 === c && (c = ":");
            let p = s.lng || this.language,
                h = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if (p ? .toLowerCase() === "cimode") return h ? n ? {
                res: `${u}${c}${o}`,
                usedKey: o,
                exactUsedKey: o,
                usedLng: p,
                usedNS: u,
                usedParams: this.getUsedParamsDetails(s)
            } : `${u}${c}${o}` : n ? {
                res: o,
                usedKey: o,
                exactUsedKey: o,
                usedLng: p,
                usedNS: u,
                usedParams: this.getUsedParamsDetails(s)
            } : o;
            let d = this.resolve(e, s),
                g = d ? .res,
                f = d ? .usedKey || o,
                m = d ? .exactUsedKey || o,
                y = void 0 !== s.joinArrays ? s.joinArrays : this.options.joinArrays,
                b = !this.i18nFormat || this.i18nFormat.handleAsObject,
                v = void 0 !== s.count && !i(s.count),
                x = P.hasDefaultValue(s),
                O = v ? this.pluralResolver.getSuffix(p, s.count, s) : "",
                S = s.ordinal && v ? this.pluralResolver.getSuffix(p, s.count, {
                    ordinal: !1
                }) : "",
                k = v && !s.ordinal && 0 === s.count,
                L = k && s[`defaultValue${this.options.pluralSeparator}zero`] || s[`defaultValue${O}`] || s[`defaultValue${S}`] || s.defaultValue,
                w = g;
            b && !g && x && (w = L);
            let j = N(w),
                E = Object.prototype.toString.apply(w);
            if (b && w && j && 0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(E) && !(i(y) && Array.isArray(w))) {
                if (!s.returnObjects && !this.options.returnObjects) {
                    this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                    let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, w, { ...s,
                        ns: l
                    }) : `key '${o} (${this.language})' returned an object instead of string.`;
                    return n ? (d.res = e, d.usedParams = this.getUsedParamsDetails(s), d) : e
                }
                if (a) {
                    let e = Array.isArray(w),
                        t = e ? [] : {},
                        r = e ? m : f;
                    for (let e in w)
                        if (Object.prototype.hasOwnProperty.call(w, e)) {
                            let i = `${r}${a}${e}`;
                            x && !g ? t[e] = this.translate(i, { ...s,
                                defaultValue: N(L) ? L[e] : void 0,
                                ...{
                                    joinArrays: !1,
                                    ns: l
                                }
                            }) : t[e] = this.translate(i, { ...s,
                                joinArrays: !1,
                                ns: l
                            }), t[e] === i && (t[e] = w[e])
                        }
                    g = t
                }
            } else if (b && i(y) && Array.isArray(g))(g = g.join(y)) && (g = this.extendTranslation(g, e, s, r));
            else {
                let t = !1,
                    i = !1;
                !this.isValidLookup(g) && x && (t = !0, g = L), this.isValidLookup(g) || (i = !0, g = o);
                let n = (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && i ? void 0 : g,
                    l = x && L !== g && this.options.updateMissing;
                if (i || t || l) {
                    if (this.logger.log(l ? "updateKey" : "missingKey", p, u, o, l ? L : g), a) {
                        let e = this.resolve(o, { ...s,
                            keySeparator: !1
                        });
                        e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                    }
                    let e = [],
                        t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
                    if ("fallback" === this.options.saveMissingTo && t && t[0])
                        for (let r = 0; r < t.length; r++) e.push(t[r]);
                    else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(s.lng || this.language) : e.push(s.lng || this.language);
                    let r = (e, t, r) => {
                        let i = x && r !== g ? r : n;
                        this.options.missingKeyHandler ? this.options.missingKeyHandler(e, u, t, i, l, s) : this.backendConnector ? .saveMissing && this.backendConnector.saveMissing(e, u, t, i, l, s), this.emit("missingKey", e, u, t, g)
                    };
                    this.options.saveMissing && (this.options.saveMissingPlurals && v ? e.forEach(e => {
                        let t = this.pluralResolver.getSuffixes(e, s);
                        k && s[`defaultValue${this.options.pluralSeparator}zero`] && 0 > t.indexOf(`${this.options.pluralSeparator}zero`) && t.push(`${this.options.pluralSeparator}zero`), t.forEach(t => {
                            r([e], o + t, s[`defaultValue${t}`] || L)
                        })
                    }) : r(e, o, L))
                }
                g = this.extendTranslation(g, e, s, d, r), i && g === o && this.options.appendNamespaceToMissingKey && (g = `${u}${c}${o}`), (i || t) && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${c}${o}` : o, t ? g : void 0, s))
            }
            return n ? (d.res = g, d.usedParams = this.getUsedParamsDetails(s), d) : g
        }
        extendTranslation(e, t, r, s, n) {
            if (this.i18nFormat ? .parse) e = this.i18nFormat.parse(e, { ...this.options.interpolation.defaultVariables,
                ...r
            }, r.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
                resolved: s
            });
            else if (!r.skipInterpolation) {
                let a;
                r.interpolation && this.interpolator.init({ ...r,
                    ...{
                        interpolation: { ...this.options.interpolation,
                            ...r.interpolation
                        }
                    }
                });
                let o = i(e) && (r ? .interpolation ? .skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                if (o) {
                    let t = e.match(this.interpolator.nestingRegexp);
                    a = t && t.length
                }
                let l = r.replace && !i(r.replace) ? r.replace : r;
                if (this.options.interpolation.defaultVariables && (l = { ...this.options.interpolation.defaultVariables,
                        ...l
                    }), e = this.interpolator.interpolate(e, l, r.lng || this.language || s.usedLng, r), o) {
                    let t = e.match(this.interpolator.nestingRegexp);
                    a < (t && t.length) && (r.nest = !1)
                }!r.lng && s && s.res && (r.lng = this.language || s.usedLng), !1 !== r.nest && (e = this.interpolator.nest(e, (...e) => n ? .[0] !== e[0] || r.context ? this.translate(...e, t) : (this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`), null), r)), r.interpolation && this.interpolator.reset()
            }
            let a = r.postProcess || this.options.postProcess,
                o = i(a) ? [a] : a;
            return null != e && o ? .length && !1 !== r.applyPostProcessor && (e = L.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
                i18nResolved: { ...s,
                    usedParams: this.getUsedParamsDetails(r)
                },
                ...r
            } : r, this)), e
        }
        resolve(e, t = {}) {
            let r, s, n, a, o;
            return i(e) && (e = [e]), e.forEach(e => {
                if (this.isValidLookup(r)) return;
                let l = this.extractFromKey(e, t),
                    u = l.key;
                s = u;
                let c = l.namespaces;
                this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
                let p = void 0 !== t.count && !i(t.count),
                    h = p && !t.ordinal && 0 === t.count,
                    d = void 0 !== t.context && (i(t.context) || "number" == typeof t.context) && "" !== t.context,
                    g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
                c.forEach(e => {
                    this.isValidLookup(r) || (o = e, !j[`${g[0]}-${e}`] && this.utils ? .hasLoadedNamespace && !this.utils ? .hasLoadedNamespace(o) && (j[`${g[0]}-${e}`] = !0, this.logger.warn(`key "${s}" for languages "${g.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach(i => {
                        let s;
                        if (this.isValidLookup(r)) return;
                        a = i;
                        let o = [u];
                        if (this.i18nFormat ? .addLookupKeys) this.i18nFormat.addLookupKeys(o, u, i, e, t);
                        else {
                            let e;
                            p && (e = this.pluralResolver.getSuffix(i, t.count, t));
                            let r = `${this.options.pluralSeparator}zero`,
                                s = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                            if (p && (t.ordinal && 0 === e.indexOf(s) && o.push(u + e.replace(s, this.options.pluralSeparator)), o.push(u + e), h && o.push(u + r)), d) {
                                let i = `${u}${this.options.contextSeparator||"_"}${t.context}`;
                                o.push(i), p && (t.ordinal && 0 === e.indexOf(s) && o.push(i + e.replace(s, this.options.pluralSeparator)), o.push(i + e), h && o.push(i + r))
                            }
                        }
                        for (; s = o.pop();) this.isValidLookup(r) || (n = s, r = this.getResource(i, e, s, t))
                    }))
                })
            }), {
                res: r,
                usedKey: s,
                exactUsedKey: n,
                usedLng: a,
                usedNS: o
            }
        }
        isValidLookup(e) {
            return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
        }
        getResource(e, t, r, i = {}) {
            return this.i18nFormat ? .getResource ? this.i18nFormat.getResource(e, t, r, i) : this.resourceStore.getResource(e, t, r, i)
        }
        getUsedParamsDetails(e = {}) {
            let t = e.replace && !i(e.replace),
                r = t ? e.replace : e;
            if (t && void 0 !== e.count && (r.count = e.count), this.options.interpolation.defaultVariables && (r = { ...this.options.interpolation.defaultVariables,
                    ...r
                }), !t)
                for (let e of (r = { ...r
                    }, ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"])) delete r[e];
            return r
        }
        static hasDefaultValue(e) {
            let t = "defaultValue";
            for (let r in e)
                if (Object.prototype.hasOwnProperty.call(e, r) && t === r.substring(0, t.length) && void 0 !== e[r]) return !0;
            return !1
        }
    }
    class E {
        constructor(e) {
            this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = O.create("languageUtils")
        }
        getScriptPartFromCode(e) {
            if (!(e = b(e)) || 0 > e.indexOf("-")) return null;
            let t = e.split("-");
            return 2 === t.length || (t.pop(), "x" === t[t.length - 1].toLowerCase()) ? null : this.formatLanguageCode(t.join("-"))
        }
        getLanguagePartFromCode(e) {
            if (!(e = b(e)) || 0 > e.indexOf("-")) return e;
            let t = e.split("-");
            return this.formatLanguageCode(t[0])
        }
        formatLanguageCode(e) {
            if (i(e) && e.indexOf("-") > -1) {
                let t;
                try {
                    t = Intl.getCanonicalLocales(e)[0]
                } catch (e) {}
                return (t && this.options.lowerCaseLng && (t = t.toLowerCase()), t) ? t : this.options.lowerCaseLng ? e.toLowerCase() : e
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
        }
        isSupportedCode(e) {
            return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
        }
        getBestMatchFromCodes(e) {
            let t;
            return e ? (e.forEach(e => {
                if (t) return;
                let r = this.formatLanguageCode(e);
                (!this.options.supportedLngs || this.isSupportedCode(r)) && (t = r)
            }), !t && this.options.supportedLngs && e.forEach(e => {
                if (t) return;
                let r = this.getScriptPartFromCode(e);
                if (this.isSupportedCode(r)) return t = r;
                let i = this.getLanguagePartFromCode(e);
                if (this.isSupportedCode(i)) return t = i;
                t = this.options.supportedLngs.find(e => {
                    if (e === i || !(0 > e.indexOf("-") && 0 > i.indexOf("-")) && (e.indexOf("-") > 0 && 0 > i.indexOf("-") && e.substring(0, e.indexOf("-")) === i || 0 === e.indexOf(i) && i.length > 1)) return e
                })
            }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
        }
        getFallbackCodes(e, t) {
            if (!e) return [];
            if ("function" == typeof e && (e = e(t)), i(e) && (e = [e]), Array.isArray(e)) return e;
            if (!t) return e.default || [];
            let r = e[t];
            return r || (r = e[this.getScriptPartFromCode(t)]), r || (r = e[this.formatLanguageCode(t)]), r || (r = e[this.getLanguagePartFromCode(t)]), r || (r = e.default), r || []
        }
        toResolveHierarchy(e, t) {
            let r = this.getFallbackCodes((!1 === t ? [] : t) || this.options.fallbackLng || [], e),
                s = [],
                n = e => {
                    e && (this.isSupportedCode(e) ? s.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
                };
            return i(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && n(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && n(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && n(this.getLanguagePartFromCode(e))) : i(e) && n(this.formatLanguageCode(e)), r.forEach(e => {
                0 > s.indexOf(e) && n(this.formatLanguageCode(e))
            }), s
        }
    }
    let R = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        },
        C = {
            select: e => 1 === e ? "one" : "other",
            resolvedOptions: () => ({
                pluralCategories: ["one", "other"]
            })
        };
    class I {
        constructor(e, t = {}) {
            this.languageUtils = e, this.options = t, this.logger = O.create("pluralResolver"), this.pluralRulesCache = {}
        }
        addRule(e, t) {
            this.rules[e] = t
        }
        clearCache() {
            this.pluralRulesCache = {}
        }
        getRule(e, t = {}) {
            let r, i = b("dev" === e ? "en" : e),
                s = t.ordinal ? "ordinal" : "cardinal",
                n = JSON.stringify({
                    cleanedCode: i,
                    type: s
                });
            if (n in this.pluralRulesCache) return this.pluralRulesCache[n];
            try {
                r = new Intl.PluralRules(i, {
                    type: s
                })
            } catch (s) {
                if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), C;
                if (!e.match(/-|_/)) return C;
                let i = this.languageUtils.getLanguagePartFromCode(e);
                r = this.getRule(i, t)
            }
            return this.pluralRulesCache[n] = r, r
        }
        needsPlural(e, t = {}) {
            let r = this.getRule(e, t);
            return r || (r = this.getRule("dev", t)), r ? .resolvedOptions().pluralCategories.length > 1
        }
        getPluralFormsOfKey(e, t, r = {}) {
            return this.getSuffixes(e, r).map(e => `${t}${e}`)
        }
        getSuffixes(e, t = {}) {
            let r = this.getRule(e, t);
            return (r || (r = this.getRule("dev", t)), r) ? r.resolvedOptions().pluralCategories.sort((e, t) => R[e] - R[t]).map(e => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`) : []
        }
        getSuffix(e, t, r = {}) {
            let i = this.getRule(e, r);
            return i ? `${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, r))
        }
    }
    let A = (e, t, r, s = ".", n = !0) => {
        let a, o = void 0 !== (a = p(e, r)) ? a : p(t, r);
        return !o && n && i(r) && void 0 === (o = y(e, r, s)) && (o = y(t, r, s)), o
    };
    class T {
        constructor(e = {}) {
            this.logger = O.create("interpolator"), this.options = e, this.format = e ? .interpolation ? .format || (e => e), this.init(e)
        }
        init(e = {}) {
            e.interpolation || (e.interpolation = {
                escapeValue: !0
            });
            let {
                escape: t,
                escapeValue: r,
                useRawValueToEscape: i,
                prefix: s,
                prefixEscaped: n,
                suffix: a,
                suffixEscaped: o,
                formatSeparator: l,
                unescapeSuffix: u,
                unescapePrefix: c,
                nestingPrefix: p,
                nestingPrefixEscaped: h,
                nestingSuffix: d,
                nestingSuffixEscaped: f,
                nestingOptionsSeparator: m,
                maxReplaces: y,
                alwaysFormat: b
            } = e.interpolation;
            this.escape = void 0 !== t ? t : g, this.escapeValue = void 0 === r || r, this.useRawValueToEscape = void 0 !== i && i, this.prefix = s ? s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : n || "{{", this.suffix = a ? a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : o || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : c || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = p ? p.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : h || "$t(".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), this.nestingSuffix = d ? d.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : f || ")".replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = y || 1e3, this.alwaysFormat = void 0 !== b && b, this.resetRegExp()
        }
        reset() {
            this.options && this.init(this.options)
        }
        resetRegExp() {
            let e = (e, t) => e ? .source === t ? (e.lastIndex = 0, e) : RegExp(t, "g");
            this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)
        }
        interpolate(e, t, r, s) {
            let a, o, l, u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
                c = e => {
                    if (0 > e.indexOf(this.formatSeparator)) {
                        let i = A(t, u, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                        return this.alwaysFormat ? this.format(i, void 0, r, { ...s,
                            ...t,
                            interpolationkey: e
                        }) : i
                    }
                    let i = e.split(this.formatSeparator),
                        n = i.shift().trim(),
                        a = i.join(this.formatSeparator).trim();
                    return this.format(A(t, u, n, this.options.keySeparator, this.options.ignoreJSONStructure), a, r, { ...s,
                        ...t,
                        interpolationkey: n
                    })
                };
            this.resetRegExp();
            let p = s ? .missingInterpolationHandler || this.options.missingInterpolationHandler,
                h = s ? .interpolation ? .skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
            return [{
                regex: this.regexpUnescape,
                safeValue: e => e.replace(/\$/g, "$$$$")
            }, {
                regex: this.regexp,
                safeValue: e => this.escapeValue ? this.escape(e).replace(/\$/g, "$$$$") : e.replace(/\$/g, "$$$$")
            }].forEach(t => {
                for (l = 0; a = t.regex.exec(e);) {
                    let r = a[1].trim();
                    if (void 0 === (o = c(r)))
                        if ("function" == typeof p) {
                            let t = p(e, a, s);
                            o = i(t) ? t : ""
                        } else if (s && Object.prototype.hasOwnProperty.call(s, r)) o = "";
                    else if (h) {
                        o = a[0];
                        continue
                    } else this.logger.warn(`missed to pass in variable ${r} for interpolating ${e}`), o = "";
                    else i(o) || this.useRawValueToEscape || (o = n(o));
                    let u = t.safeValue(o);
                    if (e = e.replace(a[0], u), h ? (t.regex.lastIndex += o.length, t.regex.lastIndex -= a[0].length) : t.regex.lastIndex = 0, ++l >= this.maxReplaces) break
                }
            }), e
        }
        nest(e, t, r = {}) {
            let s, a, o, l = (e, t) => {
                let r = this.nestingOptionsSeparator;
                if (0 > e.indexOf(r)) return e;
                let i = e.split(RegExp(`${r}[ ]*{`)),
                    s = `{${i[1]}`;
                e = i[0];
                let n = (s = this.interpolate(s, o)).match(/'/g),
                    a = s.match(/"/g);
                ((n ? .length ? ? 0) % 2 != 0 || a) && a.length % 2 == 0 || (s = s.replace(/'/g, '"'));
                try {
                    o = JSON.parse(s), t && (o = { ...t,
                        ...o
                    })
                } catch (t) {
                    return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${r}${s}`
                }
                return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, e
            };
            for (; s = this.nestingRegexp.exec(e);) {
                let u = [];
                (o = (o = { ...r
                }).replace && !i(o.replace) ? o.replace : o).applyPostProcessor = !1, delete o.defaultValue;
                let c = /{.*}/.test(s[1]) ? s[1].lastIndexOf("}") + 1 : s[1].indexOf(this.formatSeparator);
                if (-1 !== c && (u = s[1].slice(c).split(this.formatSeparator).map(e => e.trim()).filter(Boolean), s[1] = s[1].slice(0, c)), (a = t(l.call(this, s[1].trim(), o), o)) && s[0] === e && !i(a)) return a;
                i(a) || (a = n(a)), a || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), a = ""), u.length && (a = u.reduce((e, t) => this.format(e, t, r.lng, { ...r,
                    interpolationkey: s[1].trim()
                }), a.trim())), e = e.replace(s[0], a), this.regexp.lastIndex = 0
            }
            return e
        }
    }
    let V = e => {
            let t = {};
            return (r, i, s) => {
                let n = s;
                s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (n = { ...n,
                    [s.interpolationkey]: void 0
                });
                let a = i + JSON.stringify(n),
                    o = t[a];
                return o || (o = e(b(i), s), t[a] = o), o(r)
            }
        },
        D = e => (t, r, i) => e(b(r), i)(t);
    class F {
        constructor(e = {}) {
            this.logger = O.create("formatter"), this.options = e, this.init(e)
        }
        init(e, t = {
            interpolation: {}
        }) {
            this.formatSeparator = t.interpolation.formatSeparator || ",";
            let r = t.cacheInBuiltFormats ? V : D;
            this.formats = {
                number: r((e, t) => {
                    let r = new Intl.NumberFormat(e, { ...t
                    });
                    return e => r.format(e)
                }),
                currency: r((e, t) => {
                    let r = new Intl.NumberFormat(e, { ...t,
                        style: "currency"
                    });
                    return e => r.format(e)
                }),
                datetime: r((e, t) => {
                    let r = new Intl.DateTimeFormat(e, { ...t
                    });
                    return e => r.format(e)
                }),
                relativetime: r((e, t) => {
                    let r = new Intl.RelativeTimeFormat(e, { ...t
                    });
                    return e => r.format(e, t.range || "day")
                }),
                list: r((e, t) => {
                    let r = new Intl.ListFormat(e, { ...t
                    });
                    return e => r.format(e)
                })
            }
        }
        add(e, t) {
            this.formats[e.toLowerCase().trim()] = t
        }
        addCached(e, t) {
            this.formats[e.toLowerCase().trim()] = V(t)
        }
        format(e, t, r, i = {}) {
            let s = t.split(this.formatSeparator);
            if (s.length > 1 && s[0].indexOf("(") > 1 && 0 > s[0].indexOf(")") && s.find(e => e.indexOf(")") > -1)) {
                let e = s.findIndex(e => e.indexOf(")") > -1);
                s[0] = [s[0], ...s.splice(1, e)].join(this.formatSeparator)
            }
            return s.reduce((e, t) => {
                let {
                    formatName: s,
                    formatOptions: n
                } = (e => {
                    let t = e.toLowerCase().trim(),
                        r = {};
                    if (e.indexOf("(") > -1) {
                        let i = e.split("(");
                        t = i[0].toLowerCase().trim();
                        let s = i[1].substring(0, i[1].length - 1);
                        "currency" === t && 0 > s.indexOf(":") ? r.currency || (r.currency = s.trim()) : "relativetime" === t && 0 > s.indexOf(":") ? r.range || (r.range = s.trim()) : s.split(";").forEach(e => {
                            if (e) {
                                let [t, ...i] = e.split(":"), s = i.join(":").trim().replace(/^'+|'+$/g, ""), n = t.trim();
                                r[n] || (r[n] = s), "false" === s && (r[n] = !1), "true" === s && (r[n] = !0), isNaN(s) || (r[n] = parseInt(s, 10))
                            }
                        })
                    }
                    return {
                        formatName: t,
                        formatOptions: r
                    }
                })(t);
                if (this.formats[s]) {
                    let t = e;
                    try {
                        let a = i ? .formatParams ? .[i.interpolationkey] || {},
                            o = a.locale || a.lng || i.locale || i.lng || r;
                        t = this.formats[s](e, o, { ...n,
                            ...i,
                            ...a
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                    return t
                }
                return this.logger.warn(`there was no format function for ${s}`), e
            }, e)
        }
    }
    class U extends S {
        constructor(e, t, r, i = {}) {
            super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = O.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend ? .init ? .(r, i.backend, i)
        }
        queueLoad(e, t, r, i) {
            let s = {},
                n = {},
                a = {},
                o = {};
            return e.forEach(e => {
                let i = !0;
                t.forEach(t => {
                    let a = `${e}|${t}`;
                    !r.reload && this.store.hasResourceBundle(e, t) ? this.state[a] = 2 : this.state[a] < 0 || (1 === this.state[a] ? void 0 === n[a] && (n[a] = !0) : (this.state[a] = 1, i = !1, void 0 === n[a] && (n[a] = !0), void 0 === s[a] && (s[a] = !0), void 0 === o[t] && (o[t] = !0)))
                }), i || (a[e] = !0)
            }), (Object.keys(s).length || Object.keys(n).length) && this.queue.push({
                pending: n,
                pendingCount: Object.keys(n).length,
                loaded: {},
                errors: [],
                callback: i
            }), {
                toLoad: Object.keys(s),
                pending: Object.keys(n),
                toLoadLanguages: Object.keys(a),
                toLoadNamespaces: Object.keys(o)
            }
        }
        loaded(e, t, r) {
            let i = e.split("|"),
                s = i[0],
                n = i[1];
            t && this.emit("failedLoading", s, n, t), !t && r && this.store.addResourceBundle(s, n, r, void 0, void 0, {
                skipCopy: !0
            }), this.state[e] = t ? -1 : 2, t && r && (this.state[e] = 0);
            let a = {};
            this.queue.forEach(r => {
                ((e, t, r, i) => {
                    let {
                        obj: s,
                        k: n
                    } = u(e, t, Object);
                    s[n] = s[n] || [], s[n].push(r)
                })(r.loaded, [s], n), void 0 !== r.pending[e] && (delete r.pending[e], r.pendingCount--), t && r.errors.push(t), 0 !== r.pendingCount || r.done || (Object.keys(r.loaded).forEach(e => {
                    a[e] || (a[e] = {});
                    let t = r.loaded[e];
                    t.length && t.forEach(t => {
                        void 0 === a[e][t] && (a[e][t] = !0)
                    })
                }), r.done = !0, r.errors.length ? r.callback(r.errors) : r.callback())
            }), this.emit("loaded", a), this.queue = this.queue.filter(e => !e.done)
        }
        read(e, t, r, i = 0, s = this.retryTimeout, n) {
            if (!e.length) return n(null, {});
            if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({
                lng: e,
                ns: t,
                fcName: r,
                tried: i,
                wait: s,
                callback: n
            });
            this.readingCalls++;
            let a = (a, o) => {
                    if (this.readingCalls--, this.waitingReads.length > 0) {
                        let e = this.waitingReads.shift();
                        this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                    }
                    a && o && i < this.maxRetries ? setTimeout(() => {
                        this.read.call(this, e, t, r, i + 1, 2 * s, n)
                    }, s) : n(a, o)
                },
                o = this.backend[r].bind(this.backend);
            if (2 === o.length) {
                try {
                    let r = o(e, t);
                    r && "function" == typeof r.then ? r.then(e => a(null, e)).catch(a) : a(null, r)
                } catch (e) {
                    a(e)
                }
                return
            }
            return o(e, t, a)
        }
        prepareLoading(e, t, r = {}, s) {
            if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
            i(e) && (e = this.languageUtils.toResolveHierarchy(e)), i(t) && (t = [t]);
            let n = this.queueLoad(e, t, r, s);
            if (!n.toLoad.length) return n.pending.length || s(), null;
            n.toLoad.forEach(e => {
                this.loadOne(e)
            })
        }
        load(e, t, r) {
            this.prepareLoading(e, t, {}, r)
        }
        reload(e, t, r) {
            this.prepareLoading(e, t, {
                reload: !0
            }, r)
        }
        loadOne(e, t = "") {
            let r = e.split("|"),
                i = r[0],
                s = r[1];
            this.read(i, s, "read", void 0, void 0, (r, n) => {
                r && this.logger.warn(`${t}loading namespace ${s} for language ${i} failed`, r), !r && n && this.logger.log(`${t}loaded namespace ${s} for language ${i}`, n), this.loaded(e, r, n)
            })
        }
        saveMissing(e, t, r, i, s, n = {}, a = () => {}) {
            if (this.services ? .utils ? .hasLoadedNamespace && !this.services ? .utils ? .hasLoadedNamespace(t)) return void this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            if (null != r && "" !== r) {
                if (this.backend ? .create) {
                    let o = { ...n,
                            isUpdate: s
                        },
                        l = this.backend.create.bind(this.backend);
                    if (l.length < 6) try {
                        let s;
                        (s = 5 === l.length ? l(e, t, r, i, o) : l(e, t, r, i)) && "function" == typeof s.then ? s.then(e => a(null, e)).catch(a) : a(null, s)
                    } catch (e) {
                        a(e)
                    } else l(e, t, r, i, a, o)
                }
                e && e[0] && this.store.addResource(e[0], t, r, i)
            }
        }
    }
    let M = () => ({
            debug: !1,
            initAsync: !0,
            ns: ["translation"],
            defaultNS: ["translation"],
            fallbackLng: ["dev"],
            fallbackNS: !1,
            supportedLngs: !1,
            nonExplicitSupportedLngs: !1,
            load: "all",
            preload: !1,
            simplifyPluralSuffix: !0,
            keySeparator: ".",
            nsSeparator: ":",
            pluralSeparator: "_",
            contextSeparator: "_",
            partialBundledLanguages: !1,
            saveMissing: !1,
            updateMissing: !1,
            saveMissingTo: "fallback",
            saveMissingPlurals: !0,
            missingKeyHandler: !1,
            missingInterpolationHandler: !1,
            postProcess: !1,
            postProcessPassResolved: !1,
            returnNull: !1,
            returnEmptyString: !0,
            returnObjects: !1,
            joinArrays: !1,
            returnedObjectHandler: !1,
            parseMissingKeyHandler: !1,
            appendNamespaceToMissingKey: !1,
            appendNamespaceToCIMode: !1,
            overloadTranslationOptionHandler: e => {
                let t = {};
                if ("object" == typeof e[1] && (t = e[1]), i(e[1]) && (t.defaultValue = e[1]), i(e[2]) && (t.tDescription = e[2]), "object" == typeof e[2] || "object" == typeof e[3]) {
                    let r = e[3] || e[2];
                    Object.keys(r).forEach(e => {
                        t[e] = r[e]
                    })
                }
                return t
            },
            interpolation: {
                escapeValue: !0,
                format: e => e,
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                nestingOptionsSeparator: ",",
                maxReplaces: 1e3,
                skipOnVariables: !0
            },
            cacheInBuiltFormats: !0
        }),
        K = e => (i(e.ns) && (e.ns = [e.ns]), i(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), i(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs ? .indexOf ? .("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), "boolean" == typeof e.initImmediate && (e.initAsync = e.initImmediate), e),
        z = () => {};
    class _ extends S {
        constructor(e = {}, t) {
            if (super(), this.options = K(e), this.services = {}, this.logger = O, this.modules = {
                    external: []
                }, (e => {
                    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t => {
                        "function" == typeof e[t] && (e[t] = e[t].bind(e))
                    })
                })(this), t && !this.isInitialized && !e.isClone) {
                if (!this.options.initAsync) return this.init(e, t), this;
                setTimeout(() => {
                    this.init(e, t)
                }, 0)
            }
        }
        init(e = {}, t) {
            this.isInitializing = !0, "function" == typeof e && (t = e, e = {}), null == e.defaultNS && e.ns && (i(e.ns) ? e.defaultNS = e.ns : 0 > e.ns.indexOf("translation") && (e.defaultNS = e.ns[0]));
            let r = M();
            this.options = { ...r,
                ...this.options,
                ...K(e)
            }, this.options.interpolation = { ...r.interpolation,
                ...this.options.interpolation
            }, void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator), void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator), "function" != typeof this.options.overloadTranslationOptionHandler && (this.options.overloadTranslationOptionHandler = r.overloadTranslationOptionHandler);
            let n = e => e ? "function" == typeof e ? new e : e : null;
            if (!this.options.isClone) {
                let e;
                this.modules.logger ? O.init(n(this.modules.logger), this.options) : O.init(null, this.options), e = this.modules.formatter ? this.modules.formatter : F;
                let t = new E(this.options);
                this.store = new k(this.options.resources, this.options);
                let i = this.services;
                i.logger = O, i.resourceStore = this.store, i.languageUtils = t, i.pluralResolver = new I(t, {
                    prepend: this.options.pluralSeparator,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                }), this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), e && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (i.formatter = n(e), i.formatter.init && i.formatter.init(i, this.options), this.options.interpolation.format = i.formatter.format.bind(i.formatter)), i.interpolator = new T(this.options), i.utils = {
                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                }, i.backendConnector = new U(n(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", (e, ...t) => {
                    this.emit(e, ...t)
                }), this.modules.languageDetector && (i.languageDetector = n(this.modules.languageDetector), i.languageDetector.init && i.languageDetector.init(i, this.options.detection, this.options)), this.modules.i18nFormat && (i.i18nFormat = n(this.modules.i18nFormat), i.i18nFormat.init && i.i18nFormat.init(this)), this.translator = new P(this.services, this.options), this.translator.on("*", (e, ...t) => {
                    this.emit(e, ...t)
                }), this.modules.external.forEach(e => {
                    e.init && e.init(this)
                })
            }
            if (this.format = this.options.interpolation.format, t || (t = z), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
            }
            this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(e => {
                this[e] = (...t) => this.store[e](...t)
            }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(e => {
                this[e] = (...t) => (this.store[e](...t), this)
            });
            let a = s(),
                o = () => {
                    let e = (e, r) => {
                        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(r), t(e, r)
                    };
                    if (this.languages && !this.isInitialized) return e(null, this.t.bind(this));
                    this.changeLanguage(this.options.lng, e)
                };
            return this.options.resources || !this.options.initAsync ? o() : setTimeout(o, 0), a
        }
        loadResources(e, t = z) {
            let r = t,
                s = i(e) ? e : this.language;
            if ("function" == typeof e && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
                if (s ? .toLowerCase() === "cimode" && (!this.options.preload || 0 === this.options.preload.length)) return r();
                let e = [],
                    t = t => {
                        t && "cimode" !== t && this.services.languageUtils.toResolveHierarchy(t).forEach(t => {
                            "cimode" !== t && 0 > e.indexOf(t) && e.push(t)
                        })
                    };
                s ? t(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e => t(e)), this.options.preload ? .forEach ? .(e => t(e)), this.services.backendConnector.load(e, this.options.ns, e => {
                    e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), r(e)
                })
            } else r(null)
        }
        reloadResources(e, t, r) {
            let i = s();
            return "function" == typeof e && (r = e, e = void 0), "function" == typeof t && (r = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), r || (r = z), this.services.backendConnector.reload(e, t, e => {
                i.resolve(), r(e)
            }), i
        }
        use(e) {
            if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
            if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
            return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && L.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
        }
        setResolvedLanguage(e) {
            if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1)) {
                for (let e = 0; e < this.languages.length; e++) {
                    let t = this.languages[e];
                    if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                        this.resolvedLanguage = t;
                        break
                    }
                }!this.resolvedLanguage && 0 > this.languages.indexOf(e) && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e))
            }
        }
        changeLanguage(e, t) {
            this.isLanguageChangingTo = e;
            let r = s();
            this.emit("languageChanging", e);
            let n = e => {
                    this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
                },
                a = (i, s) => {
                    s ? this.isLanguageChangingTo === e && (n(s), this.translator.changeLanguage(s), this.isLanguageChangingTo = void 0, this.emit("languageChanged", s), this.logger.log("languageChanged", s)) : this.isLanguageChangingTo = void 0, r.resolve((...e) => this.t(...e)), t && t(i, (...e) => this.t(...e))
                },
                o = t => {
                    e || t || !this.services.languageDetector || (t = []);
                    let r = i(t) ? t : t && t[0],
                        s = this.store.hasLanguageSomeTranslations(r) ? r : this.services.languageUtils.getBestMatchFromCodes(i(t) ? [t] : t);
                    s && (this.language || n(s), this.translator.language || this.translator.changeLanguage(s), this.services.languageDetector ? .cacheUserLanguage ? .(s)), this.loadResources(s, e => {
                        a(e, s)
                    })
                };
            return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), r
        }
        getFixedT(e, t, r) {
            let s = (e, t, ...i) => {
                let n, a;
                (n = "object" != typeof t ? this.options.overloadTranslationOptionHandler([e, t].concat(i)) : { ...t
                }).lng = n.lng || s.lng, n.lngs = n.lngs || s.lngs, n.ns = n.ns || s.ns, "" !== n.keyPrefix && (n.keyPrefix = n.keyPrefix || r || s.keyPrefix);
                let o = this.options.keySeparator || ".";
                return n.keyPrefix && Array.isArray(e) ? a = e.map(e => ("function" == typeof e && (e = $(e, { ...this.options,
                    ...t
                })), `${n.keyPrefix}${o}${e}`)) : ("function" == typeof e && (e = $(e, { ...this.options,
                    ...t
                })), a = n.keyPrefix ? `${n.keyPrefix}${o}${e}` : e), this.t(a, n)
            };
            return i(e) ? s.lng = e : s.lngs = e, s.ns = t, s.keyPrefix = r, s
        }
        t(...e) {
            return this.translator ? .translate(...e)
        }
        exists(...e) {
            return this.translator ? .exists(...e)
        }
        setDefaultNamespace(e) {
            this.options.defaultNS = e
        }
        hasLoadedNamespace(e, t = {}) {
            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
            let r = t.lng || this.resolvedLanguage || this.languages[0],
                i = !!this.options && this.options.fallbackLng,
                s = this.languages[this.languages.length - 1];
            if ("cimode" === r.toLowerCase()) return !0;
            let n = (e, t) => {
                let r = this.services.backendConnector.state[`${e}|${t}`];
                return -1 === r || 0 === r || 2 === r
            };
            if (t.precheck) {
                let e = t.precheck(this, n);
                if (void 0 !== e) return e
            }
            return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || n(r, e) && (!i || n(s, e)))
        }
        loadNamespaces(e, t) {
            let r = s();
            return this.options.ns ? (i(e) && (e = [e]), e.forEach(e => {
                0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
            }), this.loadResources(e => {
                r.resolve(), t && t(e)
            }), r) : (t && t(), Promise.resolve())
        }
        loadLanguages(e, t) {
            let r = s();
            i(e) && (e = [e]);
            let n = this.options.preload || [],
                a = e.filter(e => 0 > n.indexOf(e) && this.services.languageUtils.isSupportedCode(e));
            return a.length ? (this.options.preload = n.concat(a), this.loadResources(e => {
                r.resolve(), t && t(e)
            }), r) : (t && t(), Promise.resolve())
        }
        dir(e) {
            if (e || (e = this.resolvedLanguage || (this.languages ? .length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
            try {
                let t = new Intl.Locale(e);
                if (t && t.getTextInfo) {
                    let e = t.getTextInfo();
                    if (e && e.direction) return e.direction
                }
            } catch (e) {}
            let t = this.services ? .languageUtils || new E(M());
            return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
        }
        static createInstance(e = {}, t) {
            let r = new _(e, t);
            return r.createInstance = _.createInstance, r
        }
        cloneInstance(e = {}, t = z) {
            let r = e.forkResourceStore;
            r && delete e.forkResourceStore;
            let i = { ...this.options,
                    ...e,
                    isClone: !0
                },
                s = new _(i);
            return (void 0 !== e.debug || void 0 !== e.prefix) && (s.logger = s.logger.clone(e)), ["store", "services", "language"].forEach(e => {
                s[e] = this[e]
            }), s.services = { ...this.services
            }, s.services.utils = {
                hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
            }, r && (s.store = new k(Object.keys(this.store.data).reduce((e, t) => (e[t] = { ...this.store.data[t]
            }, e[t] = Object.keys(e[t]).reduce((r, i) => (r[i] = { ...e[t][i]
            }, r), e[t]), e), {}), i), s.services.resourceStore = s.store), e.interpolation && (s.services.interpolator = new T(i)), s.translator = new P(s.services, i), s.translator.on("*", (e, ...t) => {
                s.emit(e, ...t)
            }), s.init(i, t), s.translator.options = i, s.translator.backendConnector.services.utils = {
                hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
            }, s
        }
        toJSON() {
            return {
                options: this.options,
                store: this.store,
                language: this.language,
                languages: this.languages,
                resolvedLanguage: this.resolvedLanguage
            }
        }
    }
    let H = _.createInstance();
    H.createInstance, H.dir, H.init, H.loadResources, H.reloadResources, H.use, H.changeLanguage, H.getFixedT, H.t, H.exists, H.setDefaultNamespace, H.hasLoadedNamespace, H.loadNamespaces, H.loadLanguages, e.s(["default", 0, H, "keyFromSelector", 0, $], 673279);
    var B = e.i(671599),
        q = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

    function J(e) {
        var t = {
                type: "tag",
                name: "",
                voidElement: !1,
                attrs: {},
                children: []
            },
            r = e.match(/<\/?([^\s]+?)[/\s>]/);
        if (r && (t.name = r[1], (B.default[r[1]] || "/" === e.charAt(e.length - 2)) && (t.voidElement = !0), t.name.startsWith("!--"))) {
            var i = e.indexOf("-->");
            return {
                type: "comment",
                comment: -1 !== i ? e.slice(4, i) : ""
            }
        }
        for (var s = new RegExp(q), n = null; null !== (n = s.exec(e));)
            if (n[0].trim())
                if (n[1]) {
                    var a = n[1].trim(),
                        o = [a, ""];
                    a.indexOf("=") > -1 && (o = a.split("=")), t.attrs[o[0]] = o[1], s.lastIndex--
                } else n[2] && (t.attrs[n[2]] = n[3].trim().substring(1, n[3].length - 1));
        return t
    }
    var W = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        Y = /^\s*$/,
        G = Object.create(null);
    let Z = function(e, t) {
            t || (t = {}), t.components || (t.components = G);
            var r, i = [],
                s = [],
                n = -1,
                a = !1;
            if (0 !== e.indexOf("<")) {
                var o = e.indexOf("<");
                i.push({
                    type: "text",
                    content: -1 === o ? e : e.substring(0, o)
                })
            }
            return e.replace(W, function(o, l) {
                if (a) {
                    if (o !== "</" + r.name + ">") return;
                    a = !1
                }
                var u, c = "/" !== o.charAt(1),
                    p = o.startsWith("<!--"),
                    h = l + o.length,
                    d = e.charAt(h);
                if (p) {
                    var g = J(o);
                    return n < 0 ? i.push(g) : (u = s[n]).children.push(g), i
                }
                if (c && (n++, "tag" === (r = J(o)).type && t.components[r.name] && (r.type = "component", a = !0), r.voidElement || a || !d || "<" === d || r.children.push({
                        type: "text",
                        content: e.slice(h, e.indexOf("<", h))
                    }), 0 === n && i.push(r), (u = s[n - 1]) && u.children.push(r), s[n] = r), (!c || r.voidElement) && (n > -1 && (r.voidElement || r.name === o.slice(2, -1)) && (r = -1 == --n ? i : s[n]), !a && "<" !== d && d)) {
                    u = -1 === n ? i : s[n].children;
                    var f = e.indexOf("<", h),
                        m = e.slice(h, -1 === f ? void 0 : f);
                    Y.test(m) && (m = " "), (f > -1 && n + u.length >= 0 || " " !== m) && u.push({
                        type: "text",
                        content: m
                    })
                }
            }), i
        },
        Q = (e, t, r, i) => {
            let s = [r, {
                code: t,
                ...i || {}
            }];
            if (e ? .services ? .logger ? .forward) return e.services.logger.forward(s, "warn", "react-i18next::", !0);
            es(s[0]) && (s[0] = `react-i18next:: ${s[0]}`), e ? .services ? .logger ? .warn ? e.services.logger.warn(...s) : console ? .warn && console.warn(...s)
        },
        X = {},
        ee = (e, t, r, i) => {
            es(r) && X[r] || (es(r) && (X[r] = new Date), Q(e, t, r, i))
        },
        et = (e, t) => () => {
            if (e.isInitialized) t();
            else {
                let r = () => {
                    setTimeout(() => {
                        e.off("initialized", r)
                    }, 0), t()
                };
                e.on("initialized", r)
            }
        },
        er = (e, t, r) => {
            e.loadNamespaces(t, et(e, r))
        },
        ei = (e, t, r, i) => {
            if (es(r) && (r = [r]), e.options.preload && e.options.preload.indexOf(t) > -1) return er(e, r, i);
            r.forEach(t => {
                0 > e.options.ns.indexOf(t) && e.options.ns.push(t)
            }), e.loadLanguages(t, et(e, i))
        },
        es = e => "string" == typeof e,
        en = e => "object" == typeof e && null !== e,
        ea = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        eo = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"',
            "&nbsp;": " ",
            "&#160;": " ",
            "&copy;": "©",
            "&#169;": "©",
            "&reg;": "®",
            "&#174;": "®",
            "&hellip;": "…",
            "&#8230;": "…",
            "&#x2F;": "/",
            "&#47;": "/"
        },
        el = e => eo[e],
        eu = e => e.replace(ea, el),
        ec = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transWrapTextNodes: "",
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0,
            unescape: eu,
            transDefaultProps: void 0
        },
        ep = (e, t) => {
            if (!e) return !1;
            let r = e.props ? .children ? ? e.children;
            return t ? r.length > 0 : !!r
        },
        eh = e => {
            if (!e) return [];
            let t = e.props ? .children ? ? e.children;
            return e.props ? .i18nIsDynamicList ? ed(t) : t
        },
        ed = e => Array.isArray(e) ? e : [e],
        eg = (e, t, i, s) => {
            if (!e) return "";
            let n = "",
                a = ed(e),
                o = t ? .transSupportBasicHtmlNodes ? t.transKeepBasicHtmlNodesFor ? ? [] : [];
            return a.forEach((e, a) => {
                if (es(e)) {
                    n += `${e}`;
                    return
                }
                if ((0, r.isValidElement)(e)) {
                    let {
                        props: r,
                        type: l
                    } = e, u = Object.keys(r).length, c = o.indexOf(l) > -1, p = r.children;
                    if (!p && c && !u) {
                        n += `<${l}/>`;
                        return
                    }
                    if (!p && (!c || u) || r.i18nIsDynamicList) {
                        n += `<${a}></${a}>`;
                        return
                    }
                    if (c && 1 === u && es(p)) {
                        n += `<${l}>${p}</${l}>`;
                        return
                    }
                    let h = eg(p, t, i, s);
                    n += `<${a}>${h}</${a}>`;
                    return
                }
                if (null === e) return void Q(i, "TRANS_NULL_VALUE", "Passed in a null value as child", {
                    i18nKey: s
                });
                if (en(e)) {
                    let {
                        format: t,
                        ...r
                    } = e, a = Object.keys(r);
                    if (1 === a.length) {
                        let e = t ? `${a[0]}, ${t}` : a[0];
                        n += `{{${e}}}`;
                        return
                    }
                    Q(i, "TRANS_INVALID_OBJ", "Invalid child - Object should only have keys {{ value, format }} (format is optional).", {
                        i18nKey: s,
                        child: e
                    });
                    return
                }
                Q(i, "TRANS_INVALID_VAR", "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.", {
                    i18nKey: s,
                    child: e
                })
            }), n
        },
        ef = (e, t, i) => {
            let s = e.key || t,
                n = (0, r.cloneElement)(e, {
                    key: s
                });
            return !n.props || !n.props.children || 0 > i.indexOf(`${t}/>`) && 0 > i.indexOf(`${t} />`) ? n : (0, r.createElement)(function() {
                return (0, r.createElement)(r.Fragment, null, n)
            }, {
                key: s
            })
        },
        em = (0, r.createContext)();
    class ey {
        constructor() {
            this.usedNamespaces = {}
        }
        addUsedNamespaces(e) {
            e.forEach(e => {
                this.usedNamespaces[e] || (this.usedNamespaces[e] = !0)
            })
        }
        getUsedNamespaces() {
            return Object.keys(this.usedNamespaces)
        }
    }
    e.s(["Trans", 0, function({
        children: e,
        count: i,
        parent: s,
        i18nKey: n,
        context: a,
        tOptions: o = {},
        values: l,
        defaults: u,
        components: c,
        ns: p,
        i18n: h,
        t: d,
        shouldUnescape: g,
        ...f
    }) {
        let {
            i18n: m,
            defaultNS: y
        } = (0, r.useContext)(em) || {}, b = h || m || t, v = d || b ? .t.bind(b);
        return function({
            children: e,
            count: i,
            parent: s,
            i18nKey: n,
            context: a,
            tOptions: o = {},
            values: l,
            defaults: u,
            components: c,
            ns: p,
            i18n: h,
            t: d,
            shouldUnescape: g,
            ...f
        }) {
            let m = h || t;
            if (!m) return ee(m, "NO_I18NEXT_INSTANCE", "Trans: You need to pass in an i18next instance using i18nextReactModule", {
                i18nKey: n
            }), e;
            let y = d || m.t.bind(m) || (e => e),
                b = { ...ec,
                    ...m.options ? .react
                },
                v = p || y.ns || m.options ? .defaultNS;
            v = es(v) ? [v] : v || ["translation"];
            let {
                transDefaultProps: x
            } = b, O = x ? .tOptions ? { ...x.tOptions,
                ...o
            } : o, S = g ? ? x ? .shouldUnescape, k = x ? .values ? { ...x.values,
                ...l
            } : l, L = x ? .components ? { ...x.components,
                ...c
            } : c, w = eg(e, b, m, n), j = u || O ? .defaultValue || w || b.transEmptyNodeValue || ("function" == typeof n ? $(n) : n), {
                hashTransKey: N
            } = b, P = n || (N ? N(w || j) : w || j);
            l = m.options ? .interpolation ? .defaultVariables ? k && Object.keys(k).length > 0 ? { ...k,
                ...m.options.interpolation.defaultVariables
            } : { ...m.options.interpolation.defaultVariables
            } : k;
            let E = (e => {
                let t = {};
                if (!e) return t;
                let i = e => {
                    ed(e).forEach(e => {
                        es(e) || (ep(e) ? i(eh(e)) : en(e) && !(0, r.isValidElement)(e) && Object.assign(t, e))
                    })
                };
                return i(e), t
            })(e);
            E && "number" == typeof E.count && void 0 === i && (i = E.count);
            let R = !l && (void 0 === i || m.options ? .interpolation ? .alwaysFormat) && e ? {
                    interpolation: { ...O.interpolation,
                        prefix: "#$?",
                        suffix: "?$#"
                    }
                } : O.interpolation,
                C = { ...O,
                    context: a || O.context,
                    count: i,
                    ...l,
                    ...R,
                    defaultValue: j,
                    ns: v
                },
                I = P ? y(P, C) : j;
            I === P && j && (I = j);
            let A = ((e, t, r, i) => {
                    if (!e) return null;
                    if (Array.isArray(e)) return e.map((e, r) => ef(e, r, t));
                    if (en(e)) {
                        let r;
                        return r = {}, Object.keys(e).forEach(i => {
                            Object.assign(r, {
                                [i]: ef(e[i], i, t)
                            })
                        }), r
                    }
                    return ee(r, "TRANS_INVALID_COMPONENTS", '<Trans /> "components" prop expects an object or array', {
                        i18nKey: i
                    }), null
                })(L, I, m, n),
                T = A || e,
                V = null;
            !(!en(A) || Array.isArray(A)) && Object.keys(A).reduce((e, t) => e && Number.isNaN(Number.parseFloat(t)), !0) && (V = A, T = e);
            let D = ((e, t, i, s, n, a, o) => {
                    if ("" === i) return [];
                    let l = n.transKeepBasicHtmlNodesFor || [],
                        u = i && new RegExp(l.map(e => `<${e}`).join("|")).test(i);
                    if (!e && !t && !u && !o) return [i];
                    let c = t ? ? {},
                        p = e => {
                            ed(e).forEach(e => {
                                es(e) || (ep(e) ? p(eh(e)) : en(e) && !(0, r.isValidElement)(e) && Object.assign(c, e))
                            })
                        };
                    p(e);
                    let h = ((e, t = [], r = {}) => {
                            if (!e) return e;
                            let i = [...t, ...Object.keys(r)],
                                s = "",
                                n = 0;
                            for (; n < e.length;)
                                if ("<" === e[n]) {
                                    let t = !1,
                                        r = e.slice(n).match(/^<\/(\d+|[a-zA-Z][a-zA-Z0-9-]*)>/);
                                    if (r) {
                                        let e = r[1];
                                        (/^\d+$/.test(e) || i.includes(e)) && (t = !0, s += r[0], n += r[0].length)
                                    }
                                    if (!t) {
                                        let r = e.slice(n).match(/^<(\d+|[a-zA-Z][a-zA-Z0-9-]*)(\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*(\/)?>/);
                                        if (r) {
                                            let e = r[1];
                                            (/^\d+$/.test(e) || i.includes(e)) && (t = !0, s += r[0], n += r[0].length)
                                        }
                                    }
                                    t || (s += "&lt;", n += 1)
                                } else s += e[n], n += 1;
                            return s
                        })(i, l, c),
                        d = Z(`<0>${h}</0>`),
                        g = { ...c,
                            ...a
                        },
                        f = (e, t, i) => {
                            let s = eh(e),
                                n = y(s, t.children, i);
                            return Array.isArray(s) && s.every(r.isValidElement) && 0 === n.length || e.props ? .i18nIsDynamicList ? s : n
                        },
                        m = (e, t, i, s, n) => {
                            e.dummy ? (e.children = t, i.push((0, r.cloneElement)(e, {
                                key: s
                            }, n ? void 0 : t))) : i.push(...r.Children.map([e], e => {
                                let i = "data-i18n-is-dynamic-list",
                                    a = {
                                        key: s,
                                        [i]: void 0
                                    };
                                return e && e.props && Object.keys(e.props).forEach(t => {
                                    "ref" !== t && "children" !== t && "i18nIsDynamicList" !== t && t !== i && (a[t] = e.props[t])
                                }), (0, r.cloneElement)(e, a, n ? null : t)
                            }))
                        },
                        y = (e, i, a) => {
                            let c = ed(e);
                            return ed(i).reduce((e, i, p) => {
                                let h = i.children ? .[0] ? .content && s.services.interpolator.interpolate(i.children[0].content, g, s.language);
                                if ("tag" === i.type) {
                                    var d, b;
                                    let v, x = c[parseInt(i.name, 10)];
                                    !x && t && (x = t[i.name]), 1 !== a.length || x || (x = a[0][i.name]), x || (x = {});
                                    let O = { ...i.attrs
                                    };
                                    o && Object.keys(O).forEach(e => {
                                        let t = O[e];
                                        es(t) && (O[e] = eu(t))
                                    });
                                    let S = 0 !== Object.keys(O).length ? (d = {
                                            props: O
                                        }, (v = { ...b = x
                                        }).props = Object.assign(d.props, b.props), v) : x,
                                        k = (0, r.isValidElement)(S),
                                        L = k && ep(i, !0) && !i.voidElement,
                                        w = u && en(S) && S.dummy && !k,
                                        $ = en(t) && Object.hasOwnProperty.call(t, i.name);
                                    if (es(S)) {
                                        let t = s.services.interpolator.interpolate(S, g, s.language);
                                        e.push(t)
                                    } else if (ep(S) || L) {
                                        let t = f(S, i, a);
                                        m(S, t, e, p)
                                    } else if (w) m(S, y(c, i.children, a), e, p);
                                    else if (Number.isNaN(parseFloat(i.name)))
                                        if ($) {
                                            let t = f(S, i, a);
                                            m(S, t, e, p, i.voidElement)
                                        } else if (n.transSupportBasicHtmlNodes && l.indexOf(i.name) > -1)
                                        if (i.voidElement) e.push((0, r.createElement)(i.name, {
                                            key: `${i.name}-${p}`
                                        }));
                                        else {
                                            let t = y(c, i.children, a);
                                            e.push((0, r.createElement)(i.name, {
                                                key: `${i.name}-${p}`
                                            }, t))
                                        }
                                    else if (i.voidElement) e.push(`<${i.name} />`);
                                    else {
                                        let t = y(c, i.children, a);
                                        e.push(`<${i.name}>${t}</${i.name}>`)
                                    } else if (en(S) && !k) {
                                        let t = i.children[0] ? h : null;
                                        t && e.push(t)
                                    } else m(S, h, e, p, 1 !== i.children.length || !h)
                                } else if ("text" === i.type) {
                                    let t = n.transWrapTextNodes,
                                        a = "function" == typeof n.unescape ? n.unescape : ec.unescape,
                                        l = o ? a(s.services.interpolator.interpolate(i.content, g, s.language)) : s.services.interpolator.interpolate(i.content, g, s.language);
                                    t ? e.push((0, r.createElement)(t, {
                                        key: `${i.name}-${p}`
                                    }, l)) : e.push(l)
                                }
                                return e
                            }, [])
                        };
                    return eh(y([{
                        dummy: !0,
                        children: e || []
                    }], d, ed(e || []))[0])
                })(T, V, I, m, b, C, S),
                F = s ? ? b.defaultTransParent;
            return F ? (0, r.createElement)(F, f, D) : D
        }({
            children: e,
            count: i,
            parent: s,
            i18nKey: n,
            context: a,
            tOptions: o,
            values: l,
            defaults: u,
            components: c,
            ns: p || v ? .ns || y || b ? .options ? .defaultNS,
            i18n: b,
            t: d,
            shouldUnescape: g,
            ...f
        })
    }], 109007);
    let eb = {
            "&nbsp;": " ",
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&apos;": "'",
            "&copy;": "©",
            "&reg;": "®",
            "&trade;": "™",
            "&hellip;": "…",
            "&ndash;": "–",
            "&mdash;": "—",
            "&lsquo;": "‘",
            "&rsquo;": "’",
            "&sbquo;": "‚",
            "&ldquo;": "“",
            "&rdquo;": "”",
            "&bdquo;": "„",
            "&dagger;": "†",
            "&Dagger;": "‡",
            "&bull;": "•",
            "&prime;": "′",
            "&Prime;": "″",
            "&lsaquo;": "‹",
            "&rsaquo;": "›",
            "&sect;": "§",
            "&para;": "¶",
            "&middot;": "·",
            "&ensp;": " ",
            "&emsp;": " ",
            "&thinsp;": " ",
            "&euro;": "€",
            "&pound;": "£",
            "&yen;": "¥",
            "&cent;": "¢",
            "&curren;": "¤",
            "&times;": "×",
            "&divide;": "÷",
            "&minus;": "−",
            "&plusmn;": "±",
            "&ne;": "≠",
            "&le;": "≤",
            "&ge;": "≥",
            "&asymp;": "≈",
            "&equiv;": "≡",
            "&infin;": "∞",
            "&int;": "∫",
            "&sum;": "∑",
            "&prod;": "∏",
            "&radic;": "√",
            "&part;": "∂",
            "&permil;": "‰",
            "&deg;": "°",
            "&micro;": "µ",
            "&larr;": "←",
            "&uarr;": "↑",
            "&rarr;": "→",
            "&darr;": "↓",
            "&harr;": "↔",
            "&crarr;": "↵",
            "&lArr;": "⇐",
            "&uArr;": "⇑",
            "&rArr;": "⇒",
            "&dArr;": "⇓",
            "&hArr;": "⇔",
            "&alpha;": "α",
            "&beta;": "β",
            "&gamma;": "γ",
            "&delta;": "δ",
            "&epsilon;": "ε",
            "&zeta;": "ζ",
            "&eta;": "η",
            "&theta;": "θ",
            "&iota;": "ι",
            "&kappa;": "κ",
            "&lambda;": "λ",
            "&mu;": "μ",
            "&nu;": "ν",
            "&xi;": "ξ",
            "&omicron;": "ο",
            "&pi;": "π",
            "&rho;": "ρ",
            "&sigma;": "σ",
            "&tau;": "τ",
            "&upsilon;": "υ",
            "&phi;": "φ",
            "&chi;": "χ",
            "&psi;": "ψ",
            "&omega;": "ω",
            "&Alpha;": "Α",
            "&Beta;": "Β",
            "&Gamma;": "Γ",
            "&Delta;": "Δ",
            "&Epsilon;": "Ε",
            "&Zeta;": "Ζ",
            "&Eta;": "Η",
            "&Theta;": "Θ",
            "&Iota;": "Ι",
            "&Kappa;": "Κ",
            "&Lambda;": "Λ",
            "&Mu;": "Μ",
            "&Nu;": "Ν",
            "&Xi;": "Ξ",
            "&Omicron;": "Ο",
            "&Pi;": "Π",
            "&Rho;": "Ρ",
            "&Sigma;": "Σ",
            "&Tau;": "Τ",
            "&Upsilon;": "Υ",
            "&Phi;": "Φ",
            "&Chi;": "Χ",
            "&Psi;": "Ψ",
            "&Omega;": "Ω",
            "&Agrave;": "À",
            "&Aacute;": "Á",
            "&Acirc;": "Â",
            "&Atilde;": "Ã",
            "&Auml;": "Ä",
            "&Aring;": "Å",
            "&AElig;": "Æ",
            "&Ccedil;": "Ç",
            "&Egrave;": "È",
            "&Eacute;": "É",
            "&Ecirc;": "Ê",
            "&Euml;": "Ë",
            "&Igrave;": "Ì",
            "&Iacute;": "Í",
            "&Icirc;": "Î",
            "&Iuml;": "Ï",
            "&ETH;": "Ð",
            "&Ntilde;": "Ñ",
            "&Ograve;": "Ò",
            "&Oacute;": "Ó",
            "&Ocirc;": "Ô",
            "&Otilde;": "Õ",
            "&Ouml;": "Ö",
            "&Oslash;": "Ø",
            "&Ugrave;": "Ù",
            "&Uacute;": "Ú",
            "&Ucirc;": "Û",
            "&Uuml;": "Ü",
            "&Yacute;": "Ý",
            "&THORN;": "Þ",
            "&szlig;": "ß",
            "&agrave;": "à",
            "&aacute;": "á",
            "&acirc;": "â",
            "&atilde;": "ã",
            "&auml;": "ä",
            "&aring;": "å",
            "&aelig;": "æ",
            "&ccedil;": "ç",
            "&egrave;": "è",
            "&eacute;": "é",
            "&ecirc;": "ê",
            "&euml;": "ë",
            "&igrave;": "ì",
            "&iacute;": "í",
            "&icirc;": "î",
            "&iuml;": "ï",
            "&eth;": "ð",
            "&ntilde;": "ñ",
            "&ograve;": "ò",
            "&oacute;": "ó",
            "&ocirc;": "ô",
            "&otilde;": "õ",
            "&ouml;": "ö",
            "&oslash;": "ø",
            "&ugrave;": "ù",
            "&uacute;": "ú",
            "&ucirc;": "û",
            "&uuml;": "ü",
            "&yacute;": "ý",
            "&thorn;": "þ",
            "&yuml;": "ÿ",
            "&iexcl;": "¡",
            "&iquest;": "¿",
            "&fnof;": "ƒ",
            "&circ;": "ˆ",
            "&tilde;": "˜",
            "&OElig;": "Œ",
            "&oelig;": "œ",
            "&Scaron;": "Š",
            "&scaron;": "š",
            "&Yuml;": "Ÿ",
            "&ordf;": "ª",
            "&ordm;": "º",
            "&macr;": "¯",
            "&acute;": "´",
            "&cedil;": "¸",
            "&sup1;": "¹",
            "&sup2;": "²",
            "&sup3;": "³",
            "&frac14;": "¼",
            "&frac12;": "½",
            "&frac34;": "¾",
            "&spades;": "♠",
            "&clubs;": "♣",
            "&hearts;": "♥",
            "&diams;": "♦",
            "&loz;": "◊",
            "&oline;": "‾",
            "&frasl;": "⁄",
            "&weierp;": "℘",
            "&image;": "ℑ",
            "&real;": "ℜ",
            "&alefsym;": "ℵ"
        },
        ev = RegExp(Object.keys(eb).map(e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g");
    var ex = e.i(890979);
    let eO = {
            t: (e, t) => es(t) ? t : en(t) && es(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e,
            ready: !1
        },
        eS = () => () => {};

    function ek({
        i18n: e,
        defaultNS: t,
        children: i
    }) {
        let s = (0, r.useMemo)(() => ({
            i18n: e,
            defaultNS: t
        }), [e, t]);
        return (0, r.createElement)(em.Provider, {
            value: s
        }, i)
    }
    e.s(["useTranslation", 0, (e, i = {}) => {
        let {
            i18n: s
        } = i, {
            i18n: n,
            defaultNS: a
        } = (0, r.useContext)(em) || {}, o = s || n || t;
        o && !o.reportNamespaces && (o.reportNamespaces = new ey), o || ee(o, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
        let l = (0, r.useMemo)(() => ({ ...ec,
                ...o ? .options ? .react,
                ...i
            }), [o, i]),
            {
                useSuspense: u,
                keyPrefix: c
            } = l,
            p = e || a || o ? .options ? .defaultNS,
            h = es(p) ? [p] : p || ["translation"],
            d = (0, r.useMemo)(() => h, h);
        o ? .reportNamespaces ? .addUsedNamespaces ? .(d);
        let g = (0, r.useRef)(0),
            f = (0, r.useCallback)(e => {
                if (!o) return eS;
                let {
                    bindI18n: t,
                    bindI18nStore: r
                } = l, i = () => {
                    g.current += 1, e()
                };
                return t && o.on(t, i), r && o.store.on(r, i), () => {
                    t && t.split(" ").forEach(e => o.off(e, i)), r && r.split(" ").forEach(e => o.store.off(e, i))
                }
            }, [o, l]),
            m = (0, r.useRef)(),
            y = (0, r.useCallback)(() => {
                if (!o) return eO;
                let e = !!(o.isInitialized || o.initializedStoreOnce) && d.every(e => ((e, t, r = {}) => t.languages && t.languages.length ? t.hasLoadedNamespace(e, {
                        lng: r.lng,
                        precheck: (t, i) => {
                            if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !i(t.isLanguageChangingTo, e)) return !1
                        }
                    }) : (ee(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
                        languages: t.languages
                    }), !0))(e, o, l)),
                    t = i.lng || o.language,
                    r = g.current,
                    s = m.current;
                if (s && s.ready === e && s.lng === t && s.keyPrefix === c && s.revision === r) return s;
                let n = {
                    t: o.getFixedT(t, "fallback" === l.nsMode ? d : d[0], c),
                    ready: e,
                    lng: t,
                    keyPrefix: c,
                    revision: r
                };
                return m.current = n, n
            }, [o, d, c, l, i.lng]),
            [b, v] = (0, r.useState)(0),
            {
                t: x,
                ready: O
            } = (0, ex.useSyncExternalStore)(f, y, y);
        (0, r.useEffect)(() => {
            if (o && !O && !u) {
                let e = () => v(e => e + 1);
                i.lng ? ei(o, i.lng, d, e) : er(o, d, e)
            }
        }, [o, i.lng, d, O, u, b]);
        let S = o || {},
            k = (0, r.useRef)(null),
            L = (0, r.useRef)(),
            w = e => {
                let t = Object.getOwnPropertyDescriptors(e);
                t.__original && delete t.__original;
                let r = Object.create(Object.getPrototypeOf(e), t);
                if (!Object.prototype.hasOwnProperty.call(r, "__original")) try {
                    Object.defineProperty(r, "__original", {
                        value: e,
                        writable: !1,
                        enumerable: !1,
                        configurable: !1
                    })
                } catch (e) {}
                return r
            },
            $ = (0, r.useMemo)(() => {
                let e = S ? .language,
                    t = S;
                k.current && k.current.__original === S ? L.current !== e ? (k.current = t = w(S), L.current = e) : t = k.current : (k.current = t = w(S), L.current = e);
                let r = [x, t, O];
                return r.t = x, r.i18n = t, r.ready = O, r
            }, [x, S, O, S.resolvedLanguage, S.language, S.languages]);
        if (o && u && !O) throw new Promise(e => {
            let t = () => e();
            i.lng ? ei(o, i.lng, d, t) : er(o, d, t)
        });
        return $
    }], 271179), e.s([], 47620);
    var eL = e.i(75907);

    function ew(e) {
        return (ew = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function e$(e, t, r) {
        var i;
        return (i = function(e, t) {
            if ("object" != ew(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var i = r.call(e, t || "default");
                if ("object" != ew(i)) return i;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(t, "string"), (t = "symbol" == ew(i) ? i : i + "") in e) ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    var ej = e.i(734980);

    function eN(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
        return i
    }

    function eP(e, t) {
        if (e) {
            if ("string" == typeof e) return eN(e, t);
            var r = ({}).toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? eN(e, t) : void 0
        }
    }

    function eE(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
                var i, s, n, a, o = [],
                    l = !0,
                    u = !1;
                try {
                    if (n = (r = r.call(e)).next, 0 === t) {
                        if (Object(r) !== r) return;
                        l = !1
                    } else
                        for (; !(l = (i = n.call(r)).done) && (o.push(i.value), o.length !== t); l = !0);
                } catch (e) {
                    u = !0, s = e
                } finally {
                    try {
                        if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                    } finally {
                        if (u) throw s
                    }
                }
                return o
            }
        }(e, t) || eP(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function eR(e, t) {
        if (null == e) return {};
        var r, i, s = function(e, t) {
            if (null == e) return {};
            var r = {};
            for (var i in e)
                if (({}).hasOwnProperty.call(e, i)) {
                    if (-1 !== t.indexOf(i)) continue;
                    r[i] = e[i]
                }
            return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            for (i = 0; i < n.length; i++) r = n[i], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (s[r] = e[r])
        }
        return s
    }
    e.i(350461);
    var eC = {
            defaultNS: "common",
            errorStackTraceLimit: 0,
            i18n: {
                defaultLocale: "en",
                locales: ["en"]
            },
            get initImmediate() {
                return "u" > typeof window
            },
            get initAsync() {
                return "u" > typeof window
            },
            interpolation: {
                escapeValue: !1
            },
            load: "currentOnly",
            localeExtension: "json",
            localePath: "./public/locales",
            localeStructure: "{{lng}}/{{ns}}",
            react: {
                useSuspense: !1
            },
            reloadOnPrerender: !1,
            serializeConfig: !0,
            use: []
        },
        eI = "u" > typeof window ? r.useLayoutEffect : r.useEffect,
        eA = ["i18n"],
        eT = ["i18n"];

    function eV(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, i)
        }
        return r
    }

    function eD(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eV(Object(r), !0).forEach(function(t) {
                e$(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eV(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var eF = ["backend", "detection"],
        eU = function(e) {
            if ("string" != typeof(null == e ? void 0 : e.lng)) throw Error("config.lng was not passed into createConfig");
            var t, r, i, s = e.i18n,
                n = eR(e, eA),
                a = eC.i18n,
                o = eD(eD(eD(eD({}, eR(eC, eT)), n), a), s),
                l = o.defaultNS,
                u = o.lng,
                c = o.localeExtension,
                p = o.localePath,
                h = o.nonExplicitSupportedLngs,
                d = o.locales.filter(function(e) {
                    return "default" !== e
                });
            if ("cimode" === u) return o;
            void 0 === o.fallbackLng && (o.fallbackLng = o.defaultLocale, "default" === o.fallbackLng && (o.fallbackLng = eE(d, 1)[0]));
            var g = null == e || null == (t = e.interpolation) ? void 0 : t.prefix,
                f = null == e || null == (r = e.interpolation) ? void 0 : r.suffix,
                m = null != g ? g : "{{",
                y = null != f ? f : "}}";
            "string" != typeof(null == e ? void 0 : e.localeStructure) && (g || f) && (o.localeStructure = "".concat(m, "lng").concat(y, "/").concat(m, "ns").concat(y));
            var b = o.fallbackLng,
                v = o.localeStructure;
            if (h) {
                var x = function(e, t) {
                    var r = eE(t.split("-"), 1)[0];
                    return e[t] = [r], e
                };
                if ("string" == typeof b) o.fallbackLng = o.locales.filter(function(e) {
                    return e.includes("-")
                }).reduce(x, {
                    default: [b]
                });
                else if (Array.isArray(b)) o.fallbackLng = o.locales.filter(function(e) {
                    return e.includes("-")
                }).reduce(x, {
                    default: b
                });
                else if ("object" === ew(b)) o.fallbackLng = Object.entries(o.fallbackLng).reduce(function(e, t) {
                    var r = eE(t, 2),
                        i = r[0],
                        s = r[1];
                    return e[i] = i.includes("-") ? Array.from(new Set([i.split("-")[0]].concat(function(e) {
                        if (Array.isArray(e)) return eN(e)
                    }(s) || function(e) {
                        if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(s) || eP(s) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()))) : s, e
                }, b);
                else if ("function" == typeof b) throw Error("If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng")
            }
            return (null == e || null == (i = e.use) ? void 0 : i.some(function(e) {
                return "backend" === e.type
            })) || ("string" == typeof p ? o.backend = {
                addPath: "".concat(p, "/").concat(v, ".missing.").concat(c),
                loadPath: "".concat(p, "/").concat(v, ".").concat(c)
            } : "function" == typeof p && (o.backend = {
                addPath: function(e, t) {
                    return p(e, t, !0)
                },
                loadPath: function(e, t) {
                    return p(e, t, !1)
                }
            })), "string" == typeof o.ns || Array.isArray(o.ns) || (o.ns = [l]), eF.forEach(function(t) {
                e[t] && (o[t] = eD(eD({}, o[t]), e[t]))
            }), o
        };
    let eM = function(e) {
        void 0 === e.ns && (e.ns = []);
        var t, r, i = H.createInstance(e);
        return i.isInitialized ? t = Promise.resolve(H.t) : (null == e || null == (r = e.use) || r.forEach(function(e) {
            return i.use(e)
        }), "function" == typeof e.onPreInitI18next && e.onPreInitI18next(i), t = i.init(e)), {
            i18n: i,
            initPromise: t
        }
    };
    var eK = r.default.createElement;

    function ez(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, i)
        }
        return r
    }

    function e_(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ez(Object(r), !0).forEach(function(t) {
                e$(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ez(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var eH = function(e, t) {
        if (t && e.isInitialized)
            for (var r = 0, i = Object.keys(t); r < i.length; r++)
                for (var s = i[r], n = 0, a = Object.keys(t[s]); n < a.length; n++) {
                    var o, l = a[n];
                    null != e && null != (o = e.store) && o.data && e.store.data[s] && e.store.data[s][l] || e.addResourceBundle(s, l, t[s][l], !0, !0)
                }
    };
    e.s(["appWithTranslation", 0, function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, ej.default)(function(i) {
            var s, n, a = (i.pageProps || {})._nextI18Next,
                o = null != (s = null == a ? void 0 : a.initialLocale) ? s : null == i || null == (n = i.router) ? void 0 : n.locale,
                l = null == a ? void 0 : a.ns,
                u = (0, r.useRef)(null),
                c = (0, r.useMemo)(function() {
                    if (!a && !t) return null;
                    var e, r, i = null != t ? t : null == a ? void 0 : a.userConfig;
                    if (!i) throw Error("appWithTranslation was called without a next-i18next config");
                    if (!(null != i && i.i18n)) throw Error("appWithTranslation was called without config.i18n");
                    if (!(null != i && null != (e = i.i18n) && e.defaultLocale)) throw Error("config.i18n does not include a defaultLocale property");
                    var s = (a || {}).initialI18nStore,
                        n = null != (r = null == t ? void 0 : t.resources) ? r : s;
                    o || (o = i.i18n.defaultLocale);
                    var c = u.current;
                    return c ? eH(c, n) : (eH(c = eM(e_(e_(e_({}, eU(e_(e_({}, i), {}, {
                        lng: o
                    }))), {}, {
                        lng: o
                    }, l && {
                        ns: l
                    }), {}, {
                        resources: n
                    })).i18n, n), u.current = c), c
                }, [a, o, l]);
            return eI(function() {
                c && o && c.changeLanguage(o)
            }, [c, o]), null !== c ? eK(ek, {
                i18n: c
            }, eK(e, i)) : eK(e, (0, eL.default)({
                key: o
            }, i))
        }, e)
    }], 91214), e.s([], 664157)
}]);

//# sourceMappingURL=0o8lvnjzx~ua2.js.map