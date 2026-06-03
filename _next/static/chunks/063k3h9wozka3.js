(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 663230, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let o = e.r(191788);

    function n(e, r) {
        let t = (0, o.useRef)(null),
            n = (0, o.useRef)(null);
        return (0, o.useCallback)(o => {
            if (null === o) {
                let e = t.current;
                e && (t.current = null, e());
                let r = n.current;
                r && (n.current = null, r())
            } else e && (t.current = l(e, o)), r && (n.current = l(r, o))
        }, [e, r])
    }

    function l(e, r) {
        if ("function" != typeof e) return e.current = r, () => {
            e.current = null
        }; {
            let t = e(r);
            return "function" == typeof t ? t : () => e(null)
        }
    }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
}, 771914, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "useIntersection", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let o = e.r(191788),
        n = e.r(799604),
        l = "function" == typeof IntersectionObserver,
        a = new Map,
        s = [];

    function i({
        rootRef: e,
        rootMargin: r,
        disabled: t
    }) {
        let c = t || !l,
            [d, u] = (0, o.useState)(!1),
            p = (0, o.useRef)(null),
            f = (0, o.useCallback)(e => {
                p.current = e
            }, []);
        return (0, o.useEffect)(() => {
            if (l) {
                if (c || d) return;
                let t = p.current;
                if (t && t.tagName) return function(e, r, t) {
                    let {
                        id: o,
                        observer: n,
                        elements: l
                    } = function(e) {
                        let r, t = {
                                root: e.root || null,
                                margin: e.rootMargin || ""
                            },
                            o = s.find(e => e.root === t.root && e.margin === t.margin);
                        if (o && (r = a.get(o))) return r;
                        let n = new Map;
                        return r = {
                            id: t,
                            observer: new IntersectionObserver(e => {
                                e.forEach(e => {
                                    let r = n.get(e.target),
                                        t = e.isIntersecting || e.intersectionRatio > 0;
                                    r && t && r(t)
                                })
                            }, e),
                            elements: n
                        }, s.push(t), a.set(t, r), r
                    }(t);
                    return l.set(e, r), n.observe(e),
                        function() {
                            if (l.delete(e), n.unobserve(e), 0 === l.size) {
                                n.disconnect(), a.delete(o);
                                let e = s.findIndex(e => e.root === o.root && e.margin === o.margin);
                                e > -1 && s.splice(e, 1)
                            }
                        }
                }(t, e => e && u(e), {
                    root: e ? .current,
                    rootMargin: r
                })
            } else if (!d) {
                let e = (0, n.requestIdleCallback)(() => u(!0));
                return () => (0, n.cancelIdleCallback)(e)
            }
        }, [c, r, e, d, p.current]), [f, d, (0, o.useCallback)(() => {
            u(!1)
        }, [])]
    }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
}, 502531, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "normalizeLocalePath", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let o = (r, t) => e.r(392090).normalizeLocalePath(r, t);
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
}, 154471, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "getDomainLocale", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let o = e.r(270090);

    function n(r, t, n, l) {
        {
            let a = e.r(502531).normalizeLocalePath,
                s = e.r(462205).detectDomainLocale,
                i = t || a(r, n).detectedLocale,
                c = s(l, void 0, i);
            if (c) {
                let e = `http${c.http?"":"s"}://`,
                    t = i === c.defaultLocale ? "" : `/${i}`;
                return `${e}${c.domain}${(0,o.normalizePathTrailingSlash)(`${t}${r}`)}`
            }
            return !1
        }
    }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
}, 548735, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "errorOnce", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let o = e => {}
}, 539149, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return z
        },
        useLinkStatus: function() {
            return j
        }
    };
    for (var n in o) Object.defineProperty(t, n, {
        enumerable: !0,
        get: o[n]
    });
    let l = e.r(871650),
        a = e.r(391398),
        s = l._(e.r(191788)),
        i = e.r(160472),
        c = e.r(471112),
        d = e.r(728169),
        u = e.r(889129),
        p = e.r(514862),
        f = e.r(425479),
        b = e.r(771914),
        g = e.r(154471),
        m = e.r(344113),
        h = e.r(663230);
    e.r(548735);
    let y = new Set;

    function v(e, r, t, o) {
        if (!("u" < typeof window) && (0, c.isLocalURL)(r)) {
            if (!o.bypassPrefetchedCheck) {
                let n = r + "%" + t + "%" + (void 0 !== o.locale ? o.locale : "locale" in e ? e.locale : void 0);
                if (y.has(n)) return;
                y.add(n)
            }
            e.prefetch(r, t, o).catch(e => {})
        }
    }

    function x(e) {
        return "string" == typeof e ? e : (0, d.formatUrl)(e)
    }
    let w = s.default.forwardRef(function(e, r) {
            let t, o, {
                href: n,
                as: l,
                children: d,
                prefetch: y = null,
                passHref: w,
                replace: k,
                shallow: j,
                scroll: z,
                locale: _,
                onClick: P,
                onNavigate: M,
                onMouseEnter: C,
                onTouchStart: O,
                legacyBehavior: S = !1,
                transitionTypes: L,
                ...R
            } = e;
            t = d, S && ("string" == typeof t || "number" == typeof t) && (t = (0, a.jsx)("a", {
                children: t
            }));
            let E = s.default.useContext(f.RouterContext),
                T = !1 !== y,
                {
                    href: I,
                    as: $
                } = s.default.useMemo(() => {
                    if (!E) {
                        let e = x(n);
                        return {
                            href: e,
                            as: l ? x(l) : e
                        }
                    }
                    let [e, r] = (0, i.resolveHref)(E, n, !0);
                    return {
                        href: e,
                        as: l ? (0, i.resolveHref)(E, l) : r || e
                    }
                }, [E, n, l]),
                G = s.default.useRef(I),
                A = s.default.useRef($);
            S && (o = s.default.Children.only(t));
            let N = S ? o && "object" == typeof o && o.ref : r,
                [U, D, K] = (0, b.useIntersection)({
                    rootMargin: "200px"
                }),
                W = s.default.useCallback(e => {
                    (A.current !== $ || G.current !== I) && (K(), A.current = $, G.current = I), U(e)
                }, [$, I, K, U]),
                q = (0, h.useMergedRef)(W, N);
            s.default.useEffect(() => {
                !E || D && T && v(E, I, $, {
                    locale: _
                })
            }, [$, I, D, _, T, E ? .locale, E]);
            let B = {
                ref: q,
                onClick(e) {
                    S || "function" != typeof P || P(e), S && o.props && "function" == typeof o.props.onClick && o.props.onClick(e), !E || e.defaultPrevented || function(e, r, t, o, n, l, a, s, i) {
                        let d, {
                            nodeName: u
                        } = e.currentTarget;
                        if (!("A" === u.toUpperCase() && ((d = e.currentTarget.getAttribute("target")) && "_self" !== d || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which) || e.currentTarget.hasAttribute("download"))) {
                            if (!(0, c.isLocalURL)(t)) {
                                n && (e.preventDefault(), location.replace(t));
                                return
                            }
                            e.preventDefault(), (() => {
                                if (i) {
                                    let e = !1;
                                    if (i({
                                            preventDefault: () => {
                                                e = !0
                                            }
                                        }), e) return
                                }
                                let e = a ? ? !0;
                                "beforePopState" in r ? r[n ? "replace" : "push"](t, o, {
                                    shallow: l,
                                    locale: s,
                                    scroll: e
                                }) : r[n ? "replace" : "push"](o || t, {
                                    scroll: e
                                })
                            })()
                        }
                    }(e, E, I, $, k, j, z, _, M)
                },
                onMouseEnter(e) {
                    S || "function" != typeof C || C(e), S && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), E && v(E, I, $, {
                        locale: _,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                },
                onTouchStart: function(e) {
                    S || "function" != typeof O || O(e), S && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), E && v(E, I, $, {
                        locale: _,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                }
            };
            if ((0, u.isAbsoluteUrl)($)) B.href = $;
            else if (!S || w || "a" === o.type && !("href" in o.props)) {
                let e = void 0 !== _ ? _ : E ? .locale;
                B.href = E ? .isLocaleDomain && (0, g.getDomainLocale)($, e, E ? .locales, E ? .domainLocales) || (0, m.addBasePath)((0, p.addLocale)($, e, E ? .defaultLocale))
            }
            return S ? s.default.cloneElement(o, B) : (0, a.jsx)("a", { ...R,
                ...B,
                children: t
            })
        }),
        k = (0, s.createContext)({
            pending: !1
        }),
        j = () => (0, s.useContext)(k),
        z = w;
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
}, 41158, (e, r, t) => {
    r.exports = e.r(539149)
}, 495854, 56206, 70471, e => {
    "use strict";

    function r() {
        for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++)(e = arguments[t]) && (r = function e(r) {
            var t, o, n = "";
            if ("string" == typeof r || "number" == typeof r) n += r;
            else if ("object" == typeof r)
                if (Array.isArray(r)) {
                    var l = r.length;
                    for (t = 0; t < l; t++) r[t] && (o = e(r[t])) && (n && (n += " "), n += o)
                } else
                    for (o in r) r[o] && (n && (n += " "), n += o);
            return n
        }(e)) && (o && (o += " "), o += r);
        return o
    }
    e.s(["clsx", 0, r], 56206);
    let t = (e, r) => {
            if (0 === e.length) return r.classGroupId;
            let o = e[0],
                n = r.nextPart.get(o),
                l = n ? t(e.slice(1), n) : void 0;
            if (l) return l;
            if (0 === r.validators.length) return;
            let a = e.join("-");
            return r.validators.find(({
                validator: e
            }) => e(a)) ? .classGroupId
        },
        o = /^\[(.+)\]$/,
        n = (e, r, t, o) => {
            e.forEach(e => {
                if ("string" == typeof e) {
                    ("" === e ? r : l(r, e)).classGroupId = t;
                    return
                }
                "function" == typeof e ? a(e) ? n(e(o), r, t, o) : r.validators.push({
                    validator: e,
                    classGroupId: t
                }) : Object.entries(e).forEach(([e, a]) => {
                    n(a, l(r, e), t, o)
                })
            })
        },
        l = (e, r) => {
            let t = e;
            return r.split("-").forEach(e => {
                t.nextPart.has(e) || t.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }), t = t.nextPart.get(e)
            }), t
        },
        a = e => e.isThemeGetter,
        s = (e, r) => r ? e.map(([e, t]) => [e, t.map(e => "string" == typeof e ? r + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [r + e, t])) : e)]) : e,
        i = e => {
            if (e.length <= 1) return e;
            let r = [],
                t = [];
            return e.forEach(e => {
                "[" === e[0] ? (r.push(...t.sort(), e), t = []) : t.push(e)
            }), r.push(...t.sort()), r
        },
        c = /\s+/;

    function d() {
        let e, r, t = 0,
            o = "";
        for (; t < arguments.length;)(e = arguments[t++]) && (r = u(e)) && (o && (o += " "), o += r);
        return o
    }
    let u = e => {
            let r;
            if ("string" == typeof e) return e;
            let t = "";
            for (let o = 0; o < e.length; o++) e[o] && (r = u(e[o])) && (t && (t += " "), t += r);
            return t
        },
        p = e => {
            let r = r => r[e] || [];
            return r.isThemeGetter = !0, r
        },
        f = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        b = /^\d+\/\d+$/,
        g = new Set(["px", "full", "screen"]),
        m = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        h = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        y = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        v = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        x = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        w = e => j(e) || g.has(e) || b.test(e),
        k = e => $(e, "length", G),
        j = e => !!e && !Number.isNaN(Number(e)),
        z = e => $(e, "number", j),
        _ = e => !!e && Number.isInteger(Number(e)),
        P = e => e.endsWith("%") && j(e.slice(0, -1)),
        M = e => f.test(e),
        C = e => m.test(e),
        O = new Set(["length", "size", "percentage"]),
        S = e => $(e, O, A),
        L = e => $(e, "position", A),
        R = new Set(["image", "url"]),
        E = e => $(e, R, U),
        T = e => $(e, "", N),
        I = () => !0,
        $ = (e, r, t) => {
            let o = f.exec(e);
            return !!o && (o[1] ? "string" == typeof r ? o[1] === r : r.has(o[1]) : t(o[2]))
        },
        G = e => h.test(e) && !y.test(e),
        A = () => !1,
        N = e => v.test(e),
        U = e => x.test(e),
        D = function(e, ...r) {
            let l, a, u, p = function(i) {
                let c;
                return a = (l = {
                    cache: (e => {
                        if (e < 1) return {
                            get: () => void 0,
                            set: () => {}
                        };
                        let r = 0,
                            t = new Map,
                            o = new Map,
                            n = (n, l) => {
                                t.set(n, l), ++r > e && (r = 0, o = t, t = new Map)
                            };
                        return {
                            get(e) {
                                let r = t.get(e);
                                return void 0 !== r ? r : void 0 !== (r = o.get(e)) ? (n(e, r), r) : void 0
                            },
                            set(e, r) {
                                t.has(e) ? t.set(e, r) : n(e, r)
                            }
                        }
                    })((c = r.reduce((e, r) => r(e), e())).cacheSize),
                    parseClassName: (e => {
                        let {
                            separator: r,
                            experimentalParseClassName: t
                        } = e, o = 1 === r.length, n = r[0], l = r.length, a = e => {
                            let t, a = [],
                                s = 0,
                                i = 0;
                            for (let c = 0; c < e.length; c++) {
                                let d = e[c];
                                if (0 === s) {
                                    if (d === n && (o || e.slice(c, c + l) === r)) {
                                        a.push(e.slice(i, c)), i = c + l;
                                        continue
                                    }
                                    if ("/" === d) {
                                        t = c;
                                        continue
                                    }
                                }
                                "[" === d ? s++ : "]" === d && s--
                            }
                            let c = 0 === a.length ? e : e.substring(i),
                                d = c.startsWith("!"),
                                u = d ? c.substring(1) : c;
                            return {
                                modifiers: a,
                                hasImportantModifier: d,
                                baseClassName: u,
                                maybePostfixModifierPosition: t && t > i ? t - i : void 0
                            }
                        };
                        return t ? e => t({
                            className: e,
                            parseClassName: a
                        }) : a
                    })(c),
                    ...(e => {
                        let r = (e => {
                                let {
                                    theme: r,
                                    prefix: t
                                } = e, o = {
                                    nextPart: new Map,
                                    validators: []
                                };
                                return s(Object.entries(e.classGroups), t).forEach(([e, t]) => {
                                    n(t, o, e, r)
                                }), o
                            })(e),
                            {
                                conflictingClassGroups: l,
                                conflictingClassGroupModifiers: a
                            } = e;
                        return {
                            getClassGroupId: e => {
                                let n = e.split("-");
                                return "" === n[0] && 1 !== n.length && n.shift(), t(n, r) || (e => {
                                    if (o.test(e)) {
                                        let r = o.exec(e)[1],
                                            t = r ? .substring(0, r.indexOf(":"));
                                        if (t) return "arbitrary.." + t
                                    }
                                })(e)
                            },
                            getConflictingClassGroupIds: (e, r) => {
                                let t = l[e] || [];
                                return r && a[e] ? [...t, ...a[e]] : t
                            }
                        }
                    })(c)
                }).cache.get, u = l.cache.set, p = f, f(i)
            };

            function f(e) {
                let r = a(e);
                if (r) return r;
                let t = ((e, r) => {
                    let {
                        parseClassName: t,
                        getClassGroupId: o,
                        getConflictingClassGroupIds: n
                    } = r, l = [], a = e.trim().split(c), s = "";
                    for (let e = a.length - 1; e >= 0; e -= 1) {
                        let r = a[e],
                            {
                                modifiers: c,
                                hasImportantModifier: d,
                                baseClassName: u,
                                maybePostfixModifierPosition: p
                            } = t(r),
                            f = !!p,
                            b = o(f ? u.substring(0, p) : u);
                        if (!b) {
                            if (!f || !(b = o(u))) {
                                s = r + (s.length > 0 ? " " + s : s);
                                continue
                            }
                            f = !1
                        }
                        let g = i(c).join(":"),
                            m = d ? g + "!" : g,
                            h = m + b;
                        if (l.includes(h)) continue;
                        l.push(h);
                        let y = n(b, f);
                        for (let e = 0; e < y.length; ++e) {
                            let r = y[e];
                            l.push(m + r)
                        }
                        s = r + (s.length > 0 ? " " + s : s)
                    }
                    return s
                })(e, l);
                return u(e, t), t
            }
            return function() {
                return p(d.apply(null, arguments))
            }
        }(() => {
            let e = p("colors"),
                r = p("spacing"),
                t = p("blur"),
                o = p("brightness"),
                n = p("borderColor"),
                l = p("borderRadius"),
                a = p("borderSpacing"),
                s = p("borderWidth"),
                i = p("contrast"),
                c = p("grayscale"),
                d = p("hueRotate"),
                u = p("invert"),
                f = p("gap"),
                b = p("gradientColorStops"),
                g = p("gradientColorStopPositions"),
                m = p("inset"),
                h = p("margin"),
                y = p("opacity"),
                v = p("padding"),
                x = p("saturate"),
                O = p("scale"),
                R = p("sepia"),
                $ = p("skew"),
                G = p("space"),
                A = p("translate"),
                N = () => ["auto", "contain", "none"],
                U = () => ["auto", "hidden", "clip", "visible", "scroll"],
                D = () => ["auto", M, r],
                K = () => [M, r],
                W = () => ["", w, k],
                q = () => ["auto", j, M],
                B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                H = () => ["solid", "dashed", "dotted", "double", "none"],
                F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                J = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                Q = () => ["", "0", M],
                V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                X = () => [j, M];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [I],
                    spacing: [w, k],
                    blur: ["none", "", C, M],
                    brightness: X(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", C, M],
                    borderSpacing: K(),
                    borderWidth: W(),
                    contrast: X(),
                    grayscale: Q(),
                    hueRotate: X(),
                    invert: Q(),
                    gap: K(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [P, k],
                    inset: D(),
                    margin: D(),
                    opacity: X(),
                    padding: K(),
                    saturate: X(),
                    scale: X(),
                    sepia: Q(),
                    skew: X(),
                    space: K(),
                    translate: K()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", M]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [C]
                    }],
                    "break-after": [{
                        "break-after": V()
                    }],
                    "break-before": [{
                        "break-before": V()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...B(), M]
                    }],
                    overflow: [{
                        overflow: U()
                    }],
                    "overflow-x": [{
                        "overflow-x": U()
                    }],
                    "overflow-y": [{
                        "overflow-y": U()
                    }],
                    overscroll: [{
                        overscroll: N()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": N()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": N()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [m]
                    }],
                    "inset-x": [{
                        "inset-x": [m]
                    }],
                    "inset-y": [{
                        "inset-y": [m]
                    }],
                    start: [{
                        start: [m]
                    }],
                    end: [{
                        end: [m]
                    }],
                    top: [{
                        top: [m]
                    }],
                    right: [{
                        right: [m]
                    }],
                    bottom: [{
                        bottom: [m]
                    }],
                    left: [{
                        left: [m]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", _, M]
                    }],
                    basis: [{
                        basis: D()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", M]
                    }],
                    grow: [{
                        grow: Q()
                    }],
                    shrink: [{
                        shrink: Q()
                    }],
                    order: [{
                        order: ["first", "last", "none", _, M]
                    }],
                    "grid-cols": [{
                        "grid-cols": [I]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", _, M]
                        }, M]
                    }],
                    "col-start": [{
                        "col-start": q()
                    }],
                    "col-end": [{
                        "col-end": q()
                    }],
                    "grid-rows": [{
                        "grid-rows": [I]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [_, M]
                        }, M]
                    }],
                    "row-start": [{
                        "row-start": q()
                    }],
                    "row-end": [{
                        "row-end": q()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", M]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", M]
                    }],
                    gap: [{
                        gap: [f]
                    }],
                    "gap-x": [{
                        "gap-x": [f]
                    }],
                    "gap-y": [{
                        "gap-y": [f]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...J()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...J(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...J(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [v]
                    }],
                    px: [{
                        px: [v]
                    }],
                    py: [{
                        py: [v]
                    }],
                    ps: [{
                        ps: [v]
                    }],
                    pe: [{
                        pe: [v]
                    }],
                    pt: [{
                        pt: [v]
                    }],
                    pr: [{
                        pr: [v]
                    }],
                    pb: [{
                        pb: [v]
                    }],
                    pl: [{
                        pl: [v]
                    }],
                    m: [{
                        m: [h]
                    }],
                    mx: [{
                        mx: [h]
                    }],
                    my: [{
                        my: [h]
                    }],
                    ms: [{
                        ms: [h]
                    }],
                    me: [{
                        me: [h]
                    }],
                    mt: [{
                        mt: [h]
                    }],
                    mr: [{
                        mr: [h]
                    }],
                    mb: [{
                        mb: [h]
                    }],
                    ml: [{
                        ml: [h]
                    }],
                    "space-x": [{
                        "space-x": [G]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [G]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, r]
                    }],
                    "min-w": [{
                        "min-w": [M, r, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [M, r, "none", "full", "min", "max", "fit", "prose", {
                            screen: [C]
                        }, C]
                    }],
                    h: [{
                        h: [M, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [M, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [M, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [M, r, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", C, k]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", z]
                    }],
                    "font-family": [{
                        font: [I]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", M]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", j, z]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", w, M]
                    }],
                    "list-image": [{
                        "list-image": ["none", M]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", M]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [y]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [y]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...H(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", w, k]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", w, M]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: K()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", M]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [y]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...B(), L]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", S]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, E]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [g]
                    }],
                    "gradient-via-pos": [{
                        via: [g]
                    }],
                    "gradient-to-pos": [{
                        to: [g]
                    }],
                    "gradient-from": [{
                        from: [b]
                    }],
                    "gradient-via": [{
                        via: [b]
                    }],
                    "gradient-to": [{
                        to: [b]
                    }],
                    rounded: [{
                        rounded: [l]
                    }],
                    "rounded-s": [{
                        "rounded-s": [l]
                    }],
                    "rounded-e": [{
                        "rounded-e": [l]
                    }],
                    "rounded-t": [{
                        "rounded-t": [l]
                    }],
                    "rounded-r": [{
                        "rounded-r": [l]
                    }],
                    "rounded-b": [{
                        "rounded-b": [l]
                    }],
                    "rounded-l": [{
                        "rounded-l": [l]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [l]
                    }],
                    "rounded-se": [{
                        "rounded-se": [l]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [l]
                    }],
                    "rounded-es": [{
                        "rounded-es": [l]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [l]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [l]
                    }],
                    "rounded-br": [{
                        "rounded-br": [l]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [l]
                    }],
                    "border-w": [{
                        border: [s]
                    }],
                    "border-w-x": [{
                        "border-x": [s]
                    }],
                    "border-w-y": [{
                        "border-y": [s]
                    }],
                    "border-w-s": [{
                        "border-s": [s]
                    }],
                    "border-w-e": [{
                        "border-e": [s]
                    }],
                    "border-w-t": [{
                        "border-t": [s]
                    }],
                    "border-w-r": [{
                        "border-r": [s]
                    }],
                    "border-w-b": [{
                        "border-b": [s]
                    }],
                    "border-w-l": [{
                        "border-l": [s]
                    }],
                    "border-opacity": [{
                        "border-opacity": [y]
                    }],
                    "border-style": [{
                        border: [...H(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [s]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [s]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [y]
                    }],
                    "divide-style": [{
                        divide: H()
                    }],
                    "border-color": [{
                        border: [n]
                    }],
                    "border-color-x": [{
                        "border-x": [n]
                    }],
                    "border-color-y": [{
                        "border-y": [n]
                    }],
                    "border-color-s": [{
                        "border-s": [n]
                    }],
                    "border-color-e": [{
                        "border-e": [n]
                    }],
                    "border-color-t": [{
                        "border-t": [n]
                    }],
                    "border-color-r": [{
                        "border-r": [n]
                    }],
                    "border-color-b": [{
                        "border-b": [n]
                    }],
                    "border-color-l": [{
                        "border-l": [n]
                    }],
                    "divide-color": [{
                        divide: [n]
                    }],
                    "outline-style": [{
                        outline: ["", ...H()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [w, M]
                    }],
                    "outline-w": [{
                        outline: [w, k]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: W()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [y]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [w, k]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", C, T]
                    }],
                    "shadow-color": [{
                        shadow: [I]
                    }],
                    opacity: [{
                        opacity: [y]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...F(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": F()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [t]
                    }],
                    brightness: [{
                        brightness: [o]
                    }],
                    contrast: [{
                        contrast: [i]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", C, M]
                    }],
                    grayscale: [{
                        grayscale: [c]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [d]
                    }],
                    invert: [{
                        invert: [u]
                    }],
                    saturate: [{
                        saturate: [x]
                    }],
                    sepia: [{
                        sepia: [R]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [t]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [o]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [i]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [c]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [d]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [u]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [y]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [x]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [R]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [a]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [a]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [a]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", M]
                    }],
                    duration: [{
                        duration: X()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", M]
                    }],
                    delay: [{
                        delay: X()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", M]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [O]
                    }],
                    "scale-x": [{
                        "scale-x": [O]
                    }],
                    "scale-y": [{
                        "scale-y": [O]
                    }],
                    rotate: [{
                        rotate: [_, M]
                    }],
                    "translate-x": [{
                        "translate-x": [A]
                    }],
                    "translate-y": [{
                        "translate-y": [A]
                    }],
                    "skew-x": [{
                        "skew-x": [$]
                    }],
                    "skew-y": [{
                        "skew-y": [$]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", M]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": K()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": K()
                    }],
                    "scroll-my": [{
                        "scroll-my": K()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": K()
                    }],
                    "scroll-me": [{
                        "scroll-me": K()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": K()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": K()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": K()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": K()
                    }],
                    "scroll-p": [{
                        "scroll-p": K()
                    }],
                    "scroll-px": [{
                        "scroll-px": K()
                    }],
                    "scroll-py": [{
                        "scroll-py": K()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": K()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": K()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": K()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": K()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": K()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": K()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", M]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [w, k, z]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        });
    e.s(["default", 0, function(...e) {
        return D(r(e))
    }], 495854), e.s(["getLinkTarget", 0, e => {
        if (!e.startsWith("http")) return "_self";
        try {
            let {
                hostname: r,
                pathname: t
            } = new URL(e);
            if ("ledger.com" === r && t.startsWith("/academy") || "quest.ledger.com" === r) return "_blank";
            if ("ledger.com" === r || "shop.ledger.com" === r) return "_self";
            return "_blank"
        } catch {
            return "_self"
        }
    }], 70471)
}]);

//# sourceMappingURL=18ba2ovsy4-vo.js.map