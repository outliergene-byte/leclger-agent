(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 578584, 441243, 181093, 780795, 638403, 760004, 626171, 264728, 215067, 993481, 872016, e => {
    "use strict";
    let t;
    e.i(350461);
    var n = e.i(191788);
    let r = "u" > typeof document ? n.default.useLayoutEffect : () => {},
        o = e => {
            var t;
            return null != (t = null == e ? void 0 : e.ownerDocument) ? t : document
        },
        i = e => e && "window" in e && e.window === e ? e : o(e).defaultView || window;
    "u" > typeof Element && Element.prototype;
    let l = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"];
    l.join(":not([hidden]),"), l.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), l.join(':not([hidden]):not([tabindex="-1"]),');
    let u = null;

    function s(e) {
        return e.nativeEvent = e, e.isDefaultPrevented = () => e.defaultPrevented, e.isPropagationStopped = () => e.cancelBubble, e.persist = () => {}, e
    }

    function a(e) {
        let t = (0, n.useRef)({
            isFocused: !1,
            observer: null
        });
        return r(() => {
            let e = t.current;
            return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
            }
        }, []), (0, n.useCallback)(n => {
            if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = n.target;
                r.addEventListener("focusout", n => {
                    if (t.current.isFocused = !1, r.disabled) {
                        let t = s(n);
                        null == e || e(t)
                    }
                    t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                }, {
                    once: !0
                }), t.current.observer = new MutationObserver(() => {
                    if (t.current.isFocused && r.disabled) {
                        var e;
                        null == (e = t.current.observer) || e.disconnect();
                        let n = r === document.activeElement ? null : document.activeElement;
                        r.dispatchEvent(new FocusEvent("blur", {
                            relatedTarget: n
                        })), r.dispatchEvent(new FocusEvent("focusout", {
                            bubbles: !0,
                            relatedTarget: n
                        }))
                    }
                }), t.current.observer.observe(r, {
                    attributes: !0,
                    attributeFilter: ["disabled"]
                })
            }
        }, [e])
    }

    function c(e) {
        var t;
        if ("u" < typeof window || null == window.navigator) return !1;
        let n = null == (t = window.navigator.userAgentData) ? void 0 : t.brands;
        return Array.isArray(n) && n.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
    }

    function f(e) {
        var t;
        return "u" > typeof window && null != window.navigator && e.test((null == (t = window.navigator.userAgentData) ? void 0 : t.platform) || window.navigator.platform)
    }

    function d(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
    }
    let p = d(function() {
            return f(/^Mac/i)
        }),
        m = d(function() {
            return f(/^iPhone/i)
        }),
        h = d(function() {
            return f(/^iPad/i) || p() && navigator.maxTouchPoints > 1
        }),
        g = d(function() {
            return m() || h()
        });
    d(function() {
        return p() || g()
    });
    let v = d(function() {
            return c(/AppleWebKit/i) && !y()
        }),
        y = d(function() {
            return c(/Chrome/i)
        }),
        b = d(function() {
            return c(/Android/i)
        }),
        w = d(function() {
            return c(/Firefox/i)
        });

    function E(e, t, n = !0) {
        var r, o;
        let {
            metaKey: i,
            ctrlKey: l,
            altKey: s,
            shiftKey: a
        } = t;
        w() && (null == (o = window.event) || null == (r = o.type) ? void 0 : r.startsWith("key")) && "_blank" === e.target && (p() ? i = !0 : l = !0);
        let c = v() && p() && !h() && 1 ? new KeyboardEvent("keydown", {
            keyIdentifier: "Enter",
            metaKey: i,
            ctrlKey: l,
            altKey: s,
            shiftKey: a
        }) : new MouseEvent("click", {
            metaKey: i,
            ctrlKey: l,
            altKey: s,
            shiftKey: a,
            detail: 1,
            bubbles: !0,
            cancelable: !0
        });
        if (E.isOpening = n, function() {
                if (null == u) {
                    u = !1;
                    try {
                        document.createElement("div").focus({
                            get preventScroll() {
                                return u = !0, !0
                            }
                        })
                    } catch {}
                }
                return u
            }()) e.focus({
            preventScroll: !0
        });
        else {
            let t = function(e) {
                let t = e.parentNode,
                    n = [],
                    r = document.scrollingElement || document.documentElement;
                for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
                    element: t,
                    scrollTop: t.scrollTop,
                    scrollLeft: t.scrollLeft
                }), t = t.parentNode;
                return r instanceof HTMLElement && n.push({
                    element: r,
                    scrollTop: r.scrollTop,
                    scrollLeft: r.scrollLeft
                }), n
            }(e);
            e.focus(),
                function(e) {
                    for (let {
                            element: t,
                            scrollTop: n,
                            scrollLeft: r
                        } of e) t.scrollTop = n, t.scrollLeft = r
                }(t)
        }
        e.dispatchEvent(c), E.isOpening = !1
    }
    E.isOpening = !1;
    let x = {
        prefix: String(Math.round(1e10 * Math.random())),
        current: 0
    };
    n.default.createContext(x), n.default.createContext(!1), "u" > typeof window && window.document && window.document.createElement, new WeakMap;
    n.default.useId;
    let T = null,
        S = new Set,
        L = new Map,
        R = !1,
        P = !1,
        C = {
            Tab: !0,
            Escape: !0
        };

    function M(e, t) {
        for (let n of S) n(e, t)
    }

    function F(e) {
        R = !0, E.isOpening || e.metaKey || !p() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (T = "keyboard", M("keyboard", e))
    }

    function A(e) {
        T = "pointer", "pointerType" in e && e.pointerType, ("mousedown" === e.type || "pointerdown" === e.type) && (R = !0, M("pointer", e))
    }

    function O(e) {
        E.isOpening || ("" !== e.pointerType || !e.isTrusted) && (b() && e.pointerType ? "click" !== e.type || 1 !== e.buttons : 0 !== e.detail || e.pointerType) || (R = !0, T = "virtual")
    }

    function k(e) {
        e.target !== window && e.target !== document && e.isTrusted && (R || P || (T = "virtual", M("virtual", e)), R = !1, P = !1)
    }

    function H() {
        R = !1, P = !0
    }

    function N(e) {
        if ("u" < typeof window || "u" < typeof document || L.get(i(e))) return;
        let t = i(e),
            n = o(e),
            r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
            R = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", F, !0), n.addEventListener("keyup", F, !0), n.addEventListener("click", O, !0), t.addEventListener("focus", k, !0), t.addEventListener("blur", H, !1), "u" > typeof PointerEvent && (n.addEventListener("pointerdown", A, !0), n.addEventListener("pointermove", A, !0), n.addEventListener("pointerup", A, !0)), t.addEventListener("beforeunload", () => {
            D(e)
        }, {
            once: !0
        }), L.set(t, {
            focus: r
        })
    }
    let D = (e, t) => {
        let n = i(e),
            r = o(e);
        t && r.removeEventListener("DOMContentLoaded", t), L.has(n) && (n.HTMLElement.prototype.focus = L.get(n).focus, r.removeEventListener("keydown", F, !0), r.removeEventListener("keyup", F, !0), r.removeEventListener("click", O, !0), n.removeEventListener("focus", k, !0), n.removeEventListener("blur", H, !1), "u" > typeof PointerEvent && (r.removeEventListener("pointerdown", A, !0), r.removeEventListener("pointermove", A, !0), r.removeEventListener("pointerup", A, !0)), L.delete(n))
    };

    function I() {
        return "pointer" !== T
    }
    "u" > typeof document && ("loading" !== (t = o(void 0)).readyState ? N(void 0) : t.addEventListener("DOMContentLoaded", () => {
        N(void 0)
    }));
    let j = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

    function W(e, t) {
        return !!t && !!e && e.contains(t)
    }

    function V() {
        let e = (0, n.useRef)(new Map),
            t = (0, n.useCallback)((t, n, r, o) => {
                let i = (null == o ? void 0 : o.once) ? (...t) => {
                    e.current.delete(r), r(...t)
                } : r;
                e.current.set(r, {
                    type: n,
                    eventTarget: t,
                    fn: i,
                    options: o
                }), t.addEventListener(n, i, o)
            }, []),
            r = (0, n.useCallback)((t, n, r, o) => {
                var i;
                let l = (null == (i = e.current.get(r)) ? void 0 : i.fn) || r;
                t.removeEventListener(n, l, o), e.current.delete(r)
            }, []),
            o = (0, n.useCallback)(() => {
                e.current.forEach((e, t) => {
                    r(e.eventTarget, e.type, t, e.options)
                })
            }, [r]);
        return (0, n.useEffect)(() => o, [o]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: o
        }
    }
    e.s(["useFocusRing", 0, function(e = {}) {
        var t;
        let {
            autoFocus: r = !1,
            isTextInput: l,
            within: u
        } = e, c = (0, n.useRef)({
            isFocused: !1,
            isFocusVisible: r || I()
        }), [f, d] = (0, n.useState)(!1), [p, m] = (0, n.useState)(() => c.current.isFocused && c.current.isFocusVisible), h = (0, n.useCallback)(() => m(c.current.isFocused && c.current.isFocusVisible), []), g = (0, n.useCallback)(e => {
            c.current.isFocused = e, d(e), h()
        }, [h]);
        t = {
            isTextInput: l
        }, N(), (0, n.useEffect)(() => {
            let e = (e, n) => {
                var r;
                let l, u, s, a, f;
                r = !!(null == t ? void 0 : t.isTextInput), l = o(null == n ? void 0 : n.target), u = "u" > typeof window ? i(null == n ? void 0 : n.target).HTMLInputElement : HTMLInputElement, s = "u" > typeof window ? i(null == n ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, a = "u" > typeof window ? i(null == n ? void 0 : n.target).HTMLElement : HTMLElement, f = "u" > typeof window ? i(null == n ? void 0 : n.target).KeyboardEvent : KeyboardEvent, (r = r || l.activeElement instanceof u && !j.has(l.activeElement.type) || l.activeElement instanceof s || l.activeElement instanceof a && l.activeElement.isContentEditable) && "keyboard" === e && n instanceof f && !C[n.key] || (e => {
                    c.current.isFocusVisible = e, h()
                })(I())
            };
            return S.add(e), () => {
                S.delete(e)
            }
        }, []);
        let {
            focusProps: v
        } = function(e) {
            let {
                isDisabled: t,
                onFocus: r,
                onBlur: i,
                onFocusChange: l
            } = e, u = (0, n.useCallback)(e => {
                if (e.target === e.currentTarget) return i && i(e), l && l(!1), !0
            }, [i, l]), s = a(u), c = (0, n.useCallback)(e => {
                var t;
                let n = o(e.target),
                    i = n ? ((e = document) => e.activeElement)(n) : ((e = document) => e.activeElement)();
                e.target === e.currentTarget && i === (t = e.nativeEvent, t.target) && (r && r(e), l && l(!0), s(e))
            }, [l, r, s]);
            return {
                focusProps: {
                    onFocus: !t && (r || l || i) ? c : void 0,
                    onBlur: !t && (i || l) ? u : void 0
                }
            }
        }({
            isDisabled: u,
            onFocusChange: g
        }), {
            focusWithinProps: y
        } = function(e) {
            let {
                isDisabled: t,
                onBlurWithin: r,
                onFocusWithin: i,
                onFocusWithinChange: l
            } = e, u = (0, n.useRef)({
                isFocusWithin: !1
            }), {
                addGlobalListener: c,
                removeAllGlobalListeners: f
            } = V(), d = (0, n.useCallback)(e => {
                e.currentTarget.contains(e.target) && u.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (u.current.isFocusWithin = !1, f(), r && r(e), l && l(!1))
            }, [r, l, u, f]), p = a(d), m = (0, n.useCallback)(e => {
                var t;
                if (!e.currentTarget.contains(e.target)) return;
                let n = o(e.target),
                    r = ((e = document) => e.activeElement)(n);
                if (!u.current.isFocusWithin && r === (t = e.nativeEvent, t.target)) {
                    i && i(e), l && l(!0), u.current.isFocusWithin = !0, p(e);
                    let t = e.currentTarget;
                    c(n, "focus", e => {
                        if (u.current.isFocusWithin && !W(t, e.target)) {
                            let r = new n.defaultView.FocusEvent("blur", {
                                relatedTarget: e.target
                            });
                            Object.defineProperty(r, "target", {
                                value: t
                            }), Object.defineProperty(r, "currentTarget", {
                                value: t
                            }), d(s(r))
                        }
                    }, {
                        capture: !0
                    })
                }
            }, [i, l, p, c, d]);
            return t ? {
                focusWithinProps: {
                    onFocus: void 0,
                    onBlur: void 0
                }
            } : {
                focusWithinProps: {
                    onFocus: m,
                    onBlur: d
                }
            }
        }({
            isDisabled: !u,
            onFocusWithinChange: g
        });
        return {
            isFocused: f,
            isFocusVisible: p,
            focusProps: u ? y : v
        }
    }], 578584);
    let B = !1,
        K = 0;

    function $(e) {
        "touch" === e.pointerType && (B = !0, setTimeout(() => {
            B = !1
        }, 50))
    }

    function U() {
        if ("u" > typeof document) return 0 === K && "u" > typeof PointerEvent && document.addEventListener("pointerup", $), K++, () => {
            !(--K > 0) && "u" > typeof PointerEvent && document.removeEventListener("pointerup", $)
        }
    }
    e.s(["useHover", 0, function(e) {
        let {
            onHoverStart: t,
            onHoverChange: r,
            onHoverEnd: i,
            isDisabled: l
        } = e, [u, s] = (0, n.useState)(!1), a = (0, n.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null
        }).current;
        (0, n.useEffect)(U, []);
        let {
            addGlobalListener: c,
            removeAllGlobalListeners: f
        } = V(), {
            hoverProps: d,
            triggerHoverEnd: p
        } = (0, n.useMemo)(() => {
            let e = (e, t) => {
                    let n = a.target;
                    a.pointerType = "", a.target = null, "touch" !== t && a.isHovered && n && (a.isHovered = !1, f(), i && i({
                        type: "hoverend",
                        target: n,
                        pointerType: t
                    }), r && r(!1), s(!1))
                },
                n = {};
            return "u" > typeof PointerEvent && (n.onPointerEnter = n => {
                B && "mouse" === n.pointerType || ((n, i) => {
                    if (a.pointerType = i, l || "touch" === i || a.isHovered || !n.currentTarget.contains(n.target)) return;
                    a.isHovered = !0;
                    let u = n.currentTarget;
                    a.target = u, c(o(n.target), "pointerover", t => {
                        a.isHovered && a.target && !W(a.target, t.target) && e(t, t.pointerType)
                    }, {
                        capture: !0
                    }), t && t({
                        type: "hoverstart",
                        target: u,
                        pointerType: i
                    }), r && r(!0), s(!0)
                })(n, n.pointerType)
            }, n.onPointerLeave = t => {
                !l && t.currentTarget.contains(t.target) && e(t, t.pointerType)
            }), {
                hoverProps: n,
                triggerHoverEnd: e
            }
        }, [t, r, i, l, a, c, f]);
        return (0, n.useEffect)(() => {
            l && p({
                currentTarget: a.target
            }, a.pointerType)
        }, [l]), {
            hoverProps: d,
            isHovered: u
        }
    }], 441243);
    var G = Object.defineProperty,
        _ = (e, t, n) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? G(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[r] = n, n
        };
    let q = new class {
        constructor() {
            _(this, "current", this.detect()), _(this, "handoffState", "pending"), _(this, "currentId", 0)
        }
        set(e) {
            this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return "server" === this.current
        }
        get isClient() {
            return "client" === this.current
        }
        detect() {
            return "u" < typeof window || "u" < typeof document ? "server" : "client"
        }
        handoff() {
            "pending" === this.handoffState && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return "complete" === this.handoffState
        }
    };

    function z(e) {
        var t;
        return q.isServer ? null : null == e ? document : null != (t = null == e ? void 0 : e.ownerDocument) ? t : document
    }

    function Y(e) {
        var t, n;
        return q.isServer ? null : null == e ? document : null != (n = null == (t = null == e ? void 0 : e.getRootNode) ? void 0 : t.call(e)) ? n : document
    }

    function X(e) {
        var t, n;
        return null != (n = null == (t = Y(e)) ? void 0 : t.activeElement) ? n : null
    }

    function J(e) {
        "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
            throw e
        }))
    }

    function Q() {
        let e = [],
            t = {
                addEventListener: (e, n, r, o) => (e.addEventListener(n, r, o), t.add(() => e.removeEventListener(n, r, o))),
                requestAnimationFrame(...e) {
                    let n = requestAnimationFrame(...e);
                    return t.add(() => cancelAnimationFrame(n))
                },
                nextFrame: (...e) => t.requestAnimationFrame(() => t.requestAnimationFrame(...e)),
                setTimeout(...e) {
                    let n = setTimeout(...e);
                    return t.add(() => clearTimeout(n))
                },
                microTask(...e) {
                    let n = {
                        current: !0
                    };
                    return J(() => {
                        n.current && e[0]()
                    }), t.add(() => {
                        n.current = !1
                    })
                },
                style(e, t, n) {
                    let r = e.style.getPropertyValue(t);
                    return Object.assign(e.style, {
                        [t]: n
                    }), this.add(() => {
                        Object.assign(e.style, {
                            [t]: r
                        })
                    })
                },
                group(e) {
                    let t = Q();
                    return e(t), this.add(() => t.dispose())
                },
                add: t => (e.includes(t) || e.push(t), () => {
                    let n = e.indexOf(t);
                    if (n >= 0)
                        for (let t of e.splice(n, 1)) t()
                }),
                dispose() {
                    for (let t of e.splice(0)) t()
                }
            };
        return t
    }

    function Z() {
        let [e] = (0, n.useState)(Q);
        return (0, n.useEffect)(() => () => e.dispose(), [e]), e
    }
    e.s(["env", 0, q], 181093), e.s(["getActiveElement", 0, X, "getOwnerDocument", 0, z, "getRootNode", 0, Y, "isActiveElement", 0, function(e) {
        return X(e) === e
    }], 780795), e.s(["microTask", 0, J], 638403), e.s(["disposables", 0, Q], 760004), e.s(["useDisposables", 0, Z], 626171);
    let ee = (e, t) => {
        q.isServer ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
    };

    function et(e) {
        let t = (0, n.useRef)(e);
        return ee(() => {
            t.current = e
        }, [e]), t
    }
    e.s(["useIsoMorphicEffect", 0, ee], 264728), e.s(["useLatestValue", 0, et], 215067);
    let en = function(e) {
        let t = et(e);
        return n.default.useCallback((...e) => t.current(...e), [t])
    };
    e.s(["useEvent", 0, en], 993481), e.s(["useActivePress", 0, function({
        disabled: e = !1
    } = {}) {
        let t = (0, n.useRef)(null),
            [r, o] = (0, n.useState)(!1),
            i = Z(),
            l = en(() => {
                t.current = null, o(!1), i.dispose()
            }),
            u = en(e => {
                if (i.dispose(), null === t.current) {
                    t.current = e.currentTarget, o(!0); {
                        let n = z(e.currentTarget);
                        i.addEventListener(n, "pointerup", l, !1), i.addEventListener(n, "pointermove", e => {
                            if (t.current) {
                                var n, r;
                                let i, l;
                                o((i = e.width / 2, l = e.height / 2, n = {
                                    top: e.clientY - l,
                                    right: e.clientX + i,
                                    bottom: e.clientY + l,
                                    left: e.clientX - i
                                }, r = t.current.getBoundingClientRect(), !(!n || !r || n.right < r.left || n.left > r.right || n.bottom < r.top || n.top > r.bottom)))
                            }
                        }, !1), i.addEventListener(n, "pointercancel", l, !1)
                    }
                }
            });
        return {
            pressed: r,
            pressProps: e ? {} : {
                onPointerDown: u,
                onPointerUp: l,
                onClick: l
            }
        }
    }], 872016)
}, 759146, 829672, 160374, e => {
    "use strict";
    var t = e.i(191788);

    function n(e, t) {
        return null !== e && null !== t && "object" == typeof e && "object" == typeof t && "id" in e && "id" in t ? e.id === t.id : e === t
    }
    e.s(["useByComparator", 0, function(e = n) {
        return (0, t.useCallback)((t, n) => "string" == typeof e ? (null == t ? void 0 : t[e]) === (null == n ? void 0 : n[e]) : e(t, n), [e])
    }], 759146);
    var r = e.i(730943),
        o = e.i(993481);
    e.s(["useControllable", 0, function(e, n, i) {
        let [l, u] = (0, t.useState)(i), s = void 0 !== e, a = (0, t.useRef)(s), c = (0, t.useRef)(!1), f = (0, t.useRef)(!1);
        return !s || a.current || c.current ? s || !a.current || f.current || (f.current = !0, a.current = s, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (c.current = !0, a.current = s, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [s ? e : l, (0, o.useEvent)(e => (s || (0, r.flushSync)(() => u(e)), null == n ? void 0 : n(e)))]
    }], 829672), e.s(["useDefaultValue", 0, function(e) {
        let [n] = (0, t.useState)(e);
        return n
    }], 160374)
}, 880150, 622898, e => {
    "use strict";
    let t;
    var n = e.i(191788),
        r = e.i(760004),
        o = e.i(264728);

    function i(e) {
        if (null === e) return {
            width: 0,
            height: 0
        };
        let {
            width: t,
            height: n
        } = e.getBoundingClientRect();
        return {
            width: t,
            height: n
        }
    }
    e.s(["useElementSize", 0, function(e, t, l = !1) {
        let [u, s] = (0, n.useState)(() => i(t));
        return (0, o.useIsoMorphicEffect)(() => {
            if (!t || !e) return;
            let n = (0, r.disposables)();
            return n.requestAnimationFrame(function e() {
                n.requestAnimationFrame(e), s(e => {
                    let n = i(t);
                    return n.width === e.width && n.height === e.height ? e : n
                })
            }), () => {
                n.dispose()
            }
        }, [t, e]), l ? {
            width: `${u.width}px`,
            height: `${u.height}px`
        } : u
    }], 880150);
    var l = ((t = l || {})[t.Left = 0] = "Left", t[t.Right = 2] = "Right", t);
    e.s(["MouseButton", 0, l], 622898)
}, 855367, e => {
    "use strict";

    function t(e) {
        return "object" == typeof e && null !== e && "nodeType" in e
    }

    function n(e) {
        return t(e) && "tagName" in e
    }

    function r(e) {
        return n(e) && "accessKey" in e
    }
    e.s(["hasInlineStyle", 0, function(e) {
        return n(e) && "style" in e
    }, "isElement", 0, n, "isHTMLElement", 0, r, "isHTMLFieldSetElement", 0, function(e) {
        return r(e) && "FIELDSET" === e.nodeName
    }, "isHTMLIframeElement", 0, function(e) {
        return r(e) && "IFRAME" === e.nodeName
    }, "isHTMLInputElement", 0, function(e) {
        return r(e) && "INPUT" === e.nodeName
    }, "isHTMLLabelElement", 0, function(e) {
        return r(e) && "LABEL" === e.nodeName
    }, "isHTMLLegendElement", 0, function(e) {
        return r(e) && "LEGEND" === e.nodeName
    }, "isHTMLorSVGElement", 0, function(e) {
        return n(e) && "tabIndex" in e
    }, "isInteractiveElement", 0, function(e) {
        return !!n(e) && e.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]')
    }, "isNode", 0, t])
}, 71147, 330317, e => {
    "use strict";
    var t = e.i(191788),
        n = e.i(622898),
        r = e.i(855367);

    function o(e) {
        let t = e.parentElement,
            n = null;
        for (; t && !r.isHTMLFieldSetElement(t);) r.isHTMLLegendElement(t) && (n = t), t = t.parentElement;
        let o = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return !(o && function(e) {
            if (!e) return !1;
            let t = e.previousElementSibling;
            for (; null !== t;) {
                if (r.isHTMLLegendElement(t)) return !1;
                t = t.previousElementSibling
            }
            return !0
        }(n)) && o
    }
    e.s(["isDisabledReactIssue7711", 0, o], 330317);
    var i = e.i(993481);
    e.s(["useHandleToggle", 0, function(e) {
        let r = (0, t.useRef)(null);
        return {
            onPointerDown: (0, i.useEvent)(t => {
                r.current = t.pointerType, o(t.currentTarget) || "mouse" !== t.pointerType || t.button !== n.MouseButton.Left || (t.preventDefault(), e(t))
            }),
            onClick: (0, i.useEvent)(t => {
                "mouse" !== r.current && (o(t.currentTarget) || e(t))
            })
        }
    }], 71147)
}, 214929, 303926, e => {
    "use strict";
    class t extends Map {
        constructor(e) {
            super(), this.factory = e
        }
        get(e) {
            let t = super.get(e);
            return void 0 === t && (t = this.factory(e), this.set(e, t)), t
        }
    }
    e.s(["DefaultMap", 0, t], 303926);
    var n, r, o, i = e.i(760004),
        l = e.i(181093),
        u = Object.defineProperty,
        s = (e, t, n) => {
            if (!t.has(e)) throw TypeError("Cannot " + n)
        },
        a = (e, t, n) => (s(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
        c = (e, t, n) => {
            if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
            t instanceof WeakSet ? t.add(e) : t.set(e, n)
        },
        f = (e, t, n, r) => (s(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);

    function d(e, t) {
        return !!Object.is(e, t) || "object" == typeof e && null !== e && "object" == typeof t && null !== t && (Array.isArray(e) && Array.isArray(t) ? e.length === t.length && p(e[Symbol.iterator](), t[Symbol.iterator]()) : e instanceof Map && t instanceof Map || e instanceof Set && t instanceof Set ? e.size === t.size && p(e.entries(), t.entries()) : !!(m(e) && m(t)) && p(Object.entries(e)[Symbol.iterator](), Object.entries(t)[Symbol.iterator]()))
    }

    function p(e, t) {
        for (;;) {
            let n = e.next(),
                r = t.next();
            if (n.done && r.done) return !0;
            if (n.done || r.done || !Object.is(n.value, r.value)) return !1
        }
    }

    function m(e) {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        let t = Object.getPrototypeOf(e);
        return null === t || null === Object.getPrototypeOf(t)
    }
    n = new WeakMap, r = new WeakMap, o = new WeakMap, e.s(["Machine", 0, class {
        constructor(e) {
            c(this, n, {}), c(this, r, new t(() => new Set)), c(this, o, new Set), ((e, t, n) => {
                let r;
                return (r = "symbol" != typeof t ? t + "" : t) in e ? u(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[r] = n
            })(this, "disposables", (0, i.disposables)()), f(this, n, e), l.env.isServer && this.disposables.microTask(() => {
                this.dispose()
            })
        }
        dispose() {
            this.disposables.dispose()
        }
        get state() {
            return a(this, n)
        }
        subscribe(e, t) {
            if (l.env.isServer) return () => {};
            let r = {
                selector: e,
                callback: t,
                current: e(a(this, n))
            };
            return a(this, o).add(r), this.disposables.add(() => {
                a(this, o).delete(r)
            })
        }
        on(e, t) {
            return l.env.isServer ? () => {} : (a(this, r).get(e).add(t), this.disposables.add(() => {
                a(this, r).get(e).delete(t)
            }))
        }
        send(e) {
            let t = this.reduce(a(this, n), e);
            if (t !== a(this, n)) {
                for (let e of (f(this, n, t), a(this, o))) {
                    let t = e.selector(a(this, n));
                    d(e.current, t) || (e.current = t, e.callback(t))
                }
                for (let t of a(this, r).get(e.type)) t(a(this, n), e)
            }
        }
    }, "batch", 0, function(e) {
        let [t, n] = e(), r = (0, i.disposables)();
        return (...e) => {
            t(...e), r.dispose(), r.microTask(n)
        }
    }, "shallowEqual", 0, d], 214929)
}, 426417, e => {
    "use strict";
    e.s(["match", 0, function e(t, n, ...r) {
        if (t in n) {
            let e = n[t];
            return "function" == typeof e ? e(...r) : e
        }
        let o = Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);
        throw Error.captureStackTrace && Error.captureStackTrace(o, e), o
    }])
}, 40238, (e, t, n) => {
    "use strict";
    var r = e.r(191788),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        i = r.useSyncExternalStore,
        l = r.useRef,
        u = r.useEffect,
        s = r.useMemo,
        a = r.useDebugValue;
    n.useSyncExternalStoreWithSelector = function(e, t, n, r, c) {
        var f = l(null);
        if (null === f.current) {
            var d = {
                hasValue: !1,
                value: null
            };
            f.current = d
        } else d = f.current;
        var p = i(e, (f = s(function() {
            function e(e) {
                if (!u) {
                    if (u = !0, i = e, e = r(e), void 0 !== c && d.hasValue) {
                        var t = d.value;
                        if (c(t, e)) return l = t
                    }
                    return l = e
                }
                if (t = l, o(i, e)) return t;
                var n = r(e);
                return void 0 !== c && c(t, n) ? (i = e, t) : (i = e, l = n)
            }
            var i, l, u = !1,
                s = void 0 === n ? null : n;
            return [function() {
                return e(t())
            }, null === s ? void 0 : function() {
                return e(s())
            }]
        }, [t, n, r, c]))[0], f[1]);
        return u(function() {
            d.hasValue = !0, d.value = p
        }, [p]), a(p), p
    }
}, 119979, (e, t, n) => {
    "use strict";
    t.exports = e.r(40238)
}, 373483, 331774, 459778, 530106, 468327, e => {
    "use strict";
    let t;
    var n = e.i(760004),
        r = e.i(780795),
        o = e.i(191788),
        i = e.i(214929),
        l = e.i(303926),
        u = e.i(426417),
        s = Object.defineProperty,
        a = (e, t, n) => {
            let r;
            return (r = "symbol" != typeof t ? t + "" : t) in e ? s(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[r] = n, n
        },
        c = ((t = c || {})[t.Push = 0] = "Push", t[t.Pop = 1] = "Pop", t);
    let f = {
        0(e, t) {
            let n = t.id,
                r = e.stack,
                o = e.stack.indexOf(n);
            if (-1 !== o) {
                let t = e.stack.slice();
                return t.splice(o, 1), t.push(n), r = t, { ...e,
                    stack: r
                }
            }
            return { ...e,
                stack: [...e.stack, n]
            }
        },
        1(e, t) {
            let n = t.id,
                r = e.stack.indexOf(n);
            if (-1 === r) return e;
            let o = e.stack.slice();
            return o.splice(r, 1), { ...e,
                stack: o
            }
        }
    };
    class d extends i.Machine {
        constructor() {
            super(...arguments), a(this, "actions", {
                push: e => this.send({
                    type: 0,
                    id: e
                }),
                pop: e => this.send({
                    type: 1,
                    id: e
                })
            }), a(this, "selectors", {
                isTop: (e, t) => e.stack[e.stack.length - 1] === t,
                inStack: (e, t) => e.stack.includes(t)
            })
        }
        static new() {
            return new d({
                stack: []
            })
        }
        reduce(e, t) {
            return (0, u.match)(t.type, f, e, t)
        }
    }
    let p = new l.DefaultMap(() => d.new());
    e.s(["ActionTypes", 0, c, "stackMachines", 0, p], 331774);
    var m = e.i(119979),
        h = e.i(993481);

    function g(e, t, n = i.shallowEqual) {
        return (0, m.useSyncExternalStoreWithSelector)((0, h.useEvent)(t => e.subscribe(v, t)), (0, h.useEvent)(() => e.state), (0, h.useEvent)(() => e.state), (0, h.useEvent)(t), n)
    }

    function v(e) {
        return e
    }
    e.s(["useSlice", 0, g], 459778);
    var y = e.i(264728);

    function b(e, t) {
        let n = (0, o.useId)(),
            r = p.get(t),
            [i, l] = g(r, (0, o.useCallback)(e => [r.selectors.isTop(e, n), r.selectors.inStack(e, n)], [r, n]));
        return (0, y.useIsoMorphicEffect)(() => {
            if (e) return r.actions.push(n), () => r.actions.pop(n)
        }, [r, e, n]), !!e && (!l || i)
    }
    e.s(["useIsTopLayer", 0, b], 530106);
    let w = new Map,
        E = new Map;

    function x(e) {
        var t;
        let n = null != (t = E.get(e)) ? t : 0;
        return E.set(e, n + 1), 0 !== n || (w.set(e, {
            "aria-hidden": e.getAttribute("aria-hidden"),
            inert: e.inert
        }), e.setAttribute("aria-hidden", "true"), e.inert = !0), () => (function(e) {
            var t;
            let n = null != (t = E.get(e)) ? t : 1;
            if (1 === n ? E.delete(e) : E.set(e, n - 1), 1 !== n) return;
            let r = w.get(e);
            r && (null === r["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, w.delete(e))
        })(e)
    }
    e.s(["useInertOthers", 0, function(e, {
        allowed: t,
        disallowed: o
    } = {}) {
        let i = b(e, "inert-others");
        (0, y.useIsoMorphicEffect)(() => {
            var e, l;
            if (!i) return;
            let u = (0, n.disposables)();
            for (let t of null != (e = null == o ? void 0 : o()) ? e : []) t && u.add(x(t));
            let s = null != (l = null == t ? void 0 : t()) ? l : [];
            for (let e of s) {
                if (!e) continue;
                let t = (0, r.getOwnerDocument)(e);
                if (!t) continue;
                let n = e.parentElement;
                for (; n && n !== t.body;) {
                    for (let e of n.children) s.some(t => e.contains(t)) || u.add(x(e));
                    n = n.parentElement
                }
            }
            return u.dispose
        }, [i, t, o])
    }], 373483);
    var T = e.i(855367),
        S = e.i(215067);
    e.s(["useOnDisappear", 0, function(e, t, r) {
        let i = (0, S.useLatestValue)(e => {
            let t = e.getBoundingClientRect();
            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && r()
        });
        (0, o.useEffect)(() => {
            if (!e) return;
            let r = null === t ? null : T.isHTMLElement(t) ? t : t.current;
            if (!r) return;
            let o = (0, n.disposables)();
            if ("u" > typeof ResizeObserver) {
                let e = new ResizeObserver(() => i.current(r));
                e.observe(r), o.add(() => e.disconnect())
            }
            if ("u" > typeof IntersectionObserver) {
                let e = new IntersectionObserver(() => i.current(r));
                e.observe(r), o.add(() => e.disconnect())
            }
            return () => o.dispose()
        }, [t, i, e])
    }], 468327)
}, 565383, e => {
    "use strict";
    let t, n, r, o, i;
    var l = e.i(760004),
        u = e.i(855367),
        s = e.i(426417),
        a = e.i(780795);
    let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(","),
        f = ["[data-autofocus]"].map(e => `${e}:not([tabindex='-1'])`).join(",");
    var d = ((t = d || {})[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t[t.AutoFocus = 64] = "AutoFocus", t),
        p = ((n = p || {})[n.Error = 0] = "Error", n[n.Overflow = 1] = "Overflow", n[n.Success = 2] = "Success", n[n.Underflow = 3] = "Underflow", n),
        m = ((r = m || {})[r.Previous = -1] = "Previous", r[r.Next = 1] = "Next", r);

    function h(e = document.body) {
        return null == e ? [] : Array.from(e.querySelectorAll(c)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
    }
    var g = ((o = g || {})[o.Strict = 0] = "Strict", o[o.Loose = 1] = "Loose", o);

    function v(e, t = 0) {
        var n;
        return e !== (null == (n = (0, a.getOwnerDocument)(e)) ? void 0 : n.body) && (0, s.match)(t, {
            0: () => e.matches(c),
            1() {
                let t = e;
                for (; null !== t;) {
                    if (t.matches(c)) return !0;
                    t = t.parentElement
                }
                return !1
            }
        })
    }
    var y = ((i = y || {})[i.Keyboard = 0] = "Keyboard", i[i.Mouse = 1] = "Mouse", i);

    function b(e) {
        null == e || e.focus({
            preventScroll: !0
        })
    }

    function w(e, t = e => e) {
        return e.slice().sort((e, n) => {
            let r = t(e),
                o = t(n);
            if (null === r || null === o) return 0;
            let i = r.compareDocumentPosition(o);
            return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
        })
    }

    function E(e, t, {
        sorted: n = !0,
        relativeTo: r = null,
        skipElements: o = []
    } = {}) {
        var i, l, u;
        let s = Array.isArray(e) ? e.length > 0 ? (0, a.getRootNode)(e[0]) : document : (0, a.getRootNode)(e),
            c = Array.isArray(e) ? n ? w(e) : e : 64 & t ? function(e = document.body) {
                return null == e ? [] : Array.from(e.querySelectorAll(f)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
            }(e) : h(e);
        o.length > 0 && c.length > 1 && (c = c.filter(e => !o.some(t => null != t && "current" in t ? (null == t ? void 0 : t.current) === e : t === e))), r = null != r ? r : null == s ? void 0 : s.activeElement;
        let d = (() => {
                if (5 & t) return 1;
                if (10 & t) return -1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            })(),
            p = (() => {
                if (1 & t) return 0;
                if (2 & t) return Math.max(0, c.indexOf(r)) - 1;
                if (4 & t) return Math.max(0, c.indexOf(r)) + 1;
                if (8 & t) return c.length - 1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            })(),
            m = 32 & t ? {
                preventScroll: !0
            } : {},
            g = 0,
            v = c.length,
            y;
        do {
            if (g >= v || g + v <= 0) return 0;
            let e = p + g;
            if (16 & t) e = (e + v) % v;
            else {
                if (e < 0) return 3;
                if (e >= v) return 1
            }
            null == (y = c[e]) || y.focus(m), g += d
        } while (y !== (0, a.getActiveElement)(y)) return 6 & t && null != (u = null == (l = null == (i = y) ? void 0 : i.matches) ? void 0 : l.call(i, "textarea,input")) && u && y.select(), 2
    }
    "u" > typeof window && "u" > typeof document && (document.addEventListener("keydown", e => {
        e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
    }, !0), document.addEventListener("click", e => {
        1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
    }, !0)), e.s(["Focus", 0, d, "FocusResult", 0, p, "FocusableMode", 0, g, "focusElement", 0, b, "focusFrom", 0, function(e, t, n = null === e ? document.body : (0, a.getRootNode)(e)) {
        return E(h(n), t, {
            relativeTo: e
        })
    }, "focusIn", 0, E, "focusableSelector", 0, c, "getFocusableElements", 0, h, "isFocusableElement", 0, v, "restoreFocusIfNecessary", 0, function(e) {
        (0, l.disposables)().nextFrame(() => {
            let t = (0, a.getActiveElement)(e);
            t && u.isHTMLorSVGElement(t) && !v(t, 0) && b(e)
        })
    }, "sortByDomNode", 0, w])
}, 587264, 855251, 299901, 395031, 476925, e => {
    "use strict";
    var t = e.i(191788),
        n = e.i(855367),
        r = e.i(565383);

    function o() {
        return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
    }

    function i() {
        return o() || /Android/gi.test(window.navigator.userAgent)
    }
    e.s(["isIOS", 0, o, "isMobile", 0, i], 855251);
    var l = e.i(215067);

    function u(e, n, r, o) {
        let i = (0, l.useLatestValue)(r);
        (0, t.useEffect)(() => {
            if (e) return document.addEventListener(n, t, o), () => document.removeEventListener(n, t, o);

            function t(e) {
                i.current(e)
            }
        }, [e, n, o])
    }

    function s(e, n, r, o) {
        let i = (0, l.useLatestValue)(r);
        (0, t.useEffect)(() => {
            if (e) return window.addEventListener(n, t, o), () => window.removeEventListener(n, t, o);

            function t(e) {
                i.current(e)
            }
        }, [e, n, o])
    }
    e.s(["useDocumentEvent", 0, u], 299901), e.s(["useWindowEvent", 0, s], 395031), e.s(["useOutsideClick", 0, function(e, o, a) {
        let c = (0, l.useLatestValue)(a),
            f = (0, t.useCallback)(function(e, t) {
                if (e.defaultPrevented) return;
                let n = t(e);
                if (null !== n && n.getRootNode().contains(n) && n.isConnected) {
                    for (let t of function e(t) {
                            return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                        }(o))
                        if (null !== t && (t.contains(n) || e.composed && e.composedPath().includes(t))) return;
                    return (0, r.isFocusableElement)(n, r.FocusableMode.Loose) || -1 === n.tabIndex || e.preventDefault(), c.current(e, n)
                }
            }, [c, o]),
            d = (0, t.useRef)(null);
        u(e, "pointerdown", e => {
            var t, n;
            i() || (d.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
        }, !0), u(e, "pointerup", e => {
            if (i() || !d.current) return;
            let t = d.current;
            return d.current = null, f(e, () => t)
        }, !0);
        let p = (0, t.useRef)({
            x: 0,
            y: 0
        });
        u(e, "touchstart", e => {
            p.current.x = e.touches[0].clientX, p.current.y = e.touches[0].clientY
        }, !0), u(e, "touchend", e => {
            let t = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY
            };
            if (!(Math.abs(t.x - p.current.x) >= 30 || Math.abs(t.y - p.current.y) >= 30)) return f(e, () => n.isHTMLorSVGElement(e.target) ? e.target : null)
        }, !0), s(e, "blur", e => f(e, () => n.isHTMLIframeElement(window.document.activeElement) ? window.document.activeElement : null), !0)
    }], 587264);
    var a = e.i(780795);
    e.s(["useOwnerDocument", 0, function(...e) {
        return (0, t.useMemo)(() => (0, a.getOwnerDocument)(...e), [...e])
    }, "useRootDocument", 0, function(...e) {
        return (0, t.useMemo)(() => (0, a.getRootNode)(...e), [...e])
    }], 476925)
}, 941888, e => {
    "use strict";
    let t;
    var n = e.i(191788),
        r = e.i(855367),
        o = e.i(299901),
        i = ((t = i || {})[t.Ignore = 0] = "Ignore", t[t.Select = 1] = "Select", t[t.Close = 2] = "Close", t);
    e.s(["Action", 0, {
        Ignore: {
            kind: 0
        },
        Select: e => ({
            kind: 1,
            target: e
        }),
        Close: {
            kind: 2
        }
    }, "useQuickRelease", 0, function(e, {
        trigger: t,
        action: i,
        close: l,
        select: u
    }) {
        let s = (0, n.useRef)(null),
            a = (0, n.useRef)(null),
            c = (0, n.useRef)(null);
        (0, o.useDocumentEvent)(e && null !== t, "pointerdown", e => {
            r.isNode(null == e ? void 0 : e.target) && null != t && t.contains(e.target) && (a.current = e.x, c.current = e.y, s.current = e.timeStamp)
        }), (0, o.useDocumentEvent)(e && null !== t, "pointerup", e => {
            var t, n;
            let o = s.current;
            if (null === o || (s.current = null, !r.isHTMLorSVGElement(e.target)) || 5 > Math.abs(e.x - (null != (t = a.current) ? t : e.x)) && 5 > Math.abs(e.y - (null != (n = c.current) ? n : e.y))) return;
            let f = i(e);
            switch (f.kind) {
                case 0:
                    return;
                case 1:
                    e.timeStamp - o > 200 && (u(f.target), l());
                    break;
                case 2:
                    l()
            }
        }, {
            capture: !0
        })
    }])
}, 399030, e => {
    "use strict";
    var t = e.i(191788);
    e.s(["useResolveButtonType", 0, function(e, n) {
        return (0, t.useMemo)(() => {
            var t;
            if (e.type) return e.type;
            let r = null != (t = e.as) ? t : "button";
            if ("string" == typeof r && "button" === r.toLowerCase() || (null == n ? void 0 : n.tagName) === "BUTTON" && !n.hasAttribute("type")) return "button"
        }, [e.type, e.as, n])
    }])
}, 104067, e => {
    "use strict";
    let t, n;
    var r, o, i = e.i(191788),
        l = e.i(264728),
        u = e.i(760004),
        s = e.i(855367),
        a = e.i(855251);

    function c(e) {
        let t = {};
        for (let n of e) Object.assign(t, n(t));
        return t
    }
    let f = (r = () => new Map, o = {
        PUSH(e, t) {
            var n;
            let r = null != (n = this.get(e)) ? n : {
                doc: e,
                count: 0,
                d: (0, u.disposables)(),
                meta: new Set,
                computedMeta: {}
            };
            return r.count++, r.meta.add(t), r.computedMeta = c(r.meta), this.set(e, r), this
        },
        POP(e, t) {
            let n = this.get(e);
            return n && (n.count--, n.meta.delete(t), n.computedMeta = c(n.meta)), this
        },
        SCROLL_PREVENT(e) {
            let t, n = {
                    doc: e.doc,
                    d: e.d,
                    meta: () => e.computedMeta
                },
                r = [(0, a.isIOS)() ? {
                    before({
                        doc: e,
                        d: t,
                        meta: n
                    }) {
                        function r(e) {
                            for (let t of n().containers)
                                for (let n of t())
                                    if (n.contains(e)) return !0;
                            return !1
                        }
                        t.microTask(() => {
                            var n;
                            if ("auto" !== window.getComputedStyle(e.documentElement).scrollBehavior) {
                                let n = (0, u.disposables)();
                                n.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => n.dispose()))
                            }
                            let o = null != (n = window.scrollY) ? n : window.pageYOffset,
                                i = null;
                            t.addEventListener(e, "click", t => {
                                if (s.isHTMLorSVGElement(t.target)) try {
                                    let n = t.target.closest("a");
                                    if (!n) return;
                                    let {
                                        hash: o
                                    } = new URL(n.href), l = e.querySelector(o);
                                    s.isHTMLorSVGElement(l) && !r(l) && (i = l)
                                } catch {}
                            }, !0), t.group(n => {
                                t.addEventListener(e, "touchstart", e => {
                                    if (n.dispose(), s.isHTMLorSVGElement(e.target) && s.hasInlineStyle(e.target))
                                        if (r(e.target)) {
                                            let t = e.target;
                                            for (; t.parentElement && r(t.parentElement);) t = t.parentElement;
                                            n.style(t, "overscrollBehavior", "contain")
                                        } else n.style(e.target, "touchAction", "none")
                                })
                            }), t.addEventListener(e, "touchmove", e => {
                                if (s.isHTMLorSVGElement(e.target) && !s.isHTMLInputElement(e.target))
                                    if (r(e.target)) {
                                        let t = e.target;
                                        for (; t.parentElement && "" !== t.dataset.headlessuiPortal && !(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);) t = t.parentElement;
                                        "" === t.dataset.headlessuiPortal && e.preventDefault()
                                    } else e.preventDefault()
                            }, {
                                passive: !1
                            }), t.add(() => {
                                var e;
                                o !== (null != (e = window.scrollY) ? e : window.pageYOffset) && window.scrollTo(0, o), i && i.isConnected && (i.scrollIntoView({
                                    block: "nearest"
                                }), i = null)
                            })
                        })
                    }
                } : {}, {
                    before({
                        doc: e
                    }) {
                        var n;
                        let r = e.documentElement;
                        t = Math.max(0, (null != (n = e.defaultView) ? n : window).innerWidth - r.clientWidth)
                    },
                    after({
                        doc: e,
                        d: n
                    }) {
                        let r = e.documentElement,
                            o = Math.max(0, r.clientWidth - r.offsetWidth),
                            i = Math.max(0, t - o);
                        n.style(r, "paddingRight", `${i}px`)
                    }
                }, {
                    before({
                        doc: e,
                        d: t
                    }) {
                        t.style(e.documentElement, "overflow", "hidden")
                    }
                }];
            r.forEach(({
                before: e
            }) => null == e ? void 0 : e(n)), r.forEach(({
                after: e
            }) => null == e ? void 0 : e(n))
        },
        SCROLL_ALLOW({
            d: e
        }) {
            e.dispose()
        },
        TEARDOWN({
            doc: e
        }) {
            this.delete(e)
        }
    }, t = r(), n = new Set, {
        getSnapshot: () => t,
        subscribe: e => (n.add(e), () => n.delete(e)),
        dispatch(e, ...r) {
            let i = o[e].call(t, ...r);
            i && (t = i, n.forEach(e => e()))
        }
    });
    f.subscribe(() => {
        let e = f.getSnapshot(),
            t = new Map;
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
            let e = "hidden" === t.get(n.doc),
                r = 0 !== n.count;
            (r && !e || !r && e) && f.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), 0 === n.count && f.dispatch("TEARDOWN", n)
        }
    });
    var d = e.i(530106);
    e.s(["useScrollLock", 0, function(e, t, n = () => [document.body]) {
        ! function(e, t, n = () => ({
            containers: []
        })) {
            let r = (0, i.useSyncExternalStore)(f.subscribe, f.getSnapshot, f.getSnapshot),
                o = t ? r.get(t) : void 0;
            o && o.count, (0, l.useIsoMorphicEffect)(() => {
                if (!(!t || !e)) return f.dispatch("PUSH", t, n), () => f.dispatch("POP", t, n)
            }, [e, t])
        }((0, d.useIsTopLayer)(e, "scroll-lock"), t, e => {
            var t;
            return {
                containers: [...null != (t = e.containers) ? t : [], n]
            }
        })
    }], 104067)
}, 608404, 156833, e => {
    "use strict";
    var t = e.i(191788);
    e.s(["useSlot", 0, function(e) {
        return (0, t.useMemo)(() => e, Object.values(e))
    }], 608404);
    var n = e.i(993481);
    let r = Symbol();
    e.s(["optionalRef", 0, function(e, t = !0) {
        return Object.assign(e, {
            [r]: t
        })
    }, "useSyncRefs", 0, function(...e) {
        let o = (0, t.useRef)(e);
        (0, t.useEffect)(() => {
            o.current = e
        }, [e]);
        let i = (0, n.useEvent)(e => {
            for (let t of o.current) null != t && ("function" == typeof t ? t(e) : t.current = e)
        });
        return e.every(e => null == e || (null == e ? void 0 : e[r])) ? void 0 : i
    }], 156833)
}, 798294, e => {
    "use strict";
    var t = e.i(191788);

    function n(e) {
        return [e.screenX, e.screenY]
    }
    e.s(["useTrackedPointer", 0, function() {
        let e = (0, t.useRef)([-1, -1]);
        return {
            wasMoved(t) {
                let r = n(t);
                return (e.current[0] !== r[0] || e.current[1] !== r[1]) && (e.current = r, !0)
            },
            update(t) {
                e.current = n(t)
            }
        }
    }])
}, 880281, e => {
    "use strict";
    let t;
    var n, r, o = e.i(350461),
        i = e.i(191788),
        l = e.i(760004),
        u = e.i(626171),
        s = e.i(264728);
    void 0 !== o.default && "u" > typeof globalThis && "u" > typeof Element && (null == (n = null == o.default ? void 0 : o.default.env) ? void 0 : n.NODE_ENV) === "test" && void 0 === (null == (r = null == Element ? void 0 : Element.prototype) ? void 0 : r.getAnimations) && (Element.prototype.getAnimations = function() {
        return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), []
    });
    var a = ((t = a || {})[t.None = 0] = "None", t[t.Closed = 1] = "Closed", t[t.Enter = 2] = "Enter", t[t.Leave = 4] = "Leave", t);
    e.s(["transitionDataAttributes", 0, function(e) {
        let t = {};
        for (let n in e) !0 === e[n] && (t[`data-${n}`] = "");
        return t
    }, "useTransition", 0, function(e, t, n, r) {
        let [o, a] = (0, i.useState)(n), {
            hasFlag: c,
            addFlag: f,
            removeFlag: d
        } = function(e = 0) {
            let [t, n] = (0, i.useState)(e), r = (0, i.useCallback)(e => n(e), []), o = (0, i.useCallback)(e => n(t => t | e), []), l = (0, i.useCallback)(e => (t & e) === e, [t]);
            return {
                flags: t,
                setFlag: r,
                addFlag: o,
                hasFlag: l,
                removeFlag: (0, i.useCallback)(e => n(t => t & ~e), []),
                toggleFlag: (0, i.useCallback)(e => n(t => t ^ e), [])
            }
        }(e && o ? 3 : 0), p = (0, i.useRef)(!1), m = (0, i.useRef)(!1), h = (0, u.useDisposables)();
        return (0, s.useIsoMorphicEffect)(() => {
            var o;
            if (e) {
                if (n && a(!0), !t) {
                    n && f(3);
                    return
                }
                return null == (o = null == r ? void 0 : r.start) || o.call(r, n),
                    function(e, {
                        prepare: t,
                        run: n,
                        done: r,
                        inFlight: o
                    }) {
                        let i = (0, l.disposables)();
                        return function(e, {
                            inFlight: t,
                            prepare: n
                        }) {
                            if (null != t && t.current) return n();
                            let r = e.style.transition;
                            e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r
                        }(e, {
                            prepare: t,
                            inFlight: o
                        }), i.nextFrame(() => {
                            n(), i.requestAnimationFrame(() => {
                                i.add(function(e, t) {
                                    var n, r;
                                    let o = (0, l.disposables)();
                                    if (!e) return o.dispose;
                                    let i = !1;
                                    o.add(() => {
                                        i = !0
                                    });
                                    let u = null != (r = null == (n = e.getAnimations) ? void 0 : n.call(e).filter(e => e instanceof CSSTransition)) ? r : [];
                                    return 0 === u.length ? t() : Promise.allSettled(u.map(e => e.finished)).then(() => {
                                        i || t()
                                    }), o.dispose
                                }(e, r))
                            })
                        }), i.dispose
                    }(t, {
                        inFlight: p,
                        prepare() {
                            m.current ? m.current = !1 : m.current = p.current, p.current = !0, m.current || (n ? (f(3), d(4)) : (f(4), d(2)))
                        },
                        run() {
                            m.current ? n ? (d(3), f(4)) : (d(4), f(3)) : n ? d(1) : f(1)
                        },
                        done() {
                            var e, o, i, l;
                            m.current && (null != (l = null == (i = (o = t).getAnimations) ? void 0 : i.call(o)) ? l : []).some(e => e instanceof CSSTransition && "finished" !== e.playState) || (p.current = !1, d(7), n || a(!1), null == (e = null == r ? void 0 : r.end) || e.call(r, n))
                        }
                    })
            }
        }, [e, n, t, h]), e ? [o, {
            closed: c(1),
            enter: c(2),
            leave: c(4),
            transition: c(2) || c(4)
        }] : [n, {
            closed: void 0,
            enter: void 0,
            leave: void 0,
            transition: void 0
        }]
    }], 880281)
}, 760360, e => {
    "use strict";
    var t = e.i(191788);
    let n = (0, t.createContext)(void 0);
    e.s(["DisabledProvider", 0, function({
        value: e,
        children: r
    }) {
        return t.default.createElement(n.Provider, {
            value: e
        }, r)
    }, "useDisabled", 0, function() {
        return (0, t.useContext)(n)
    }])
}, 195600, 32572, 536394, 95963, e => {
    "use strict";
    let t = ["top", "right", "bottom", "left"],
        n = t.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
        r = Math.min,
        o = Math.max,
        i = Math.round,
        l = Math.floor,
        u = e => ({
            x: e,
            y: e
        }),
        s = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        },
        a = {
            start: "end",
            end: "start"
        };

    function c(e, t, n) {
        return o(e, r(t, n))
    }

    function f(e, t) {
        return "function" == typeof e ? e(t) : e
    }

    function d(e) {
        return e.split("-")[0]
    }

    function p(e) {
        return e.split("-")[1]
    }

    function m(e) {
        return "x" === e ? "y" : "x"
    }

    function h(e) {
        return "y" === e ? "height" : "width"
    }
    let g = new Set(["top", "bottom"]);

    function v(e) {
        return g.has(d(e)) ? "y" : "x"
    }

    function y(e) {
        return m(v(e))
    }

    function b(e, t, n) {
        void 0 === n && (n = !1);
        let r = p(e),
            o = y(e),
            i = h(o),
            l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
        return t.reference[i] > t.floating[i] && (l = P(l)), [l, P(l)]
    }

    function w(e) {
        let t = P(e);
        return [E(e), t, E(t)]
    }

    function E(e) {
        return e.replace(/start|end/g, e => a[e])
    }
    let x = ["left", "right"],
        T = ["right", "left"],
        S = ["top", "bottom"],
        L = ["bottom", "top"];

    function R(e, t, n, r) {
        let o = p(e),
            i = function(e, t, n) {
                switch (e) {
                    case "top":
                    case "bottom":
                        if (n) return t ? T : x;
                        return t ? x : T;
                    case "left":
                    case "right":
                        return t ? S : L;
                    default:
                        return []
                }
            }(d(e), "start" === n, r);
        return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(E)))), i
    }

    function P(e) {
        return e.replace(/left|right|bottom|top/g, e => s[e])
    }

    function C(e) {
        return "number" != typeof e ? {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
        } : {
            top: e,
            right: e,
            bottom: e,
            left: e
        }
    }

    function M(e) {
        let {
            x: t,
            y: n,
            width: r,
            height: o
        } = e;
        return {
            width: r,
            height: o,
            top: n,
            left: t,
            right: t + r,
            bottom: n + o,
            x: t,
            y: n
        }
    }

    function F(e, t, n) {
        let r, {
                reference: o,
                floating: i
            } = e,
            l = v(t),
            u = y(t),
            s = h(u),
            a = d(t),
            c = "y" === l,
            f = o.x + o.width / 2 - i.width / 2,
            m = o.y + o.height / 2 - i.height / 2,
            g = o[s] / 2 - i[s] / 2;
        switch (a) {
            case "top":
                r = {
                    x: f,
                    y: o.y - i.height
                };
                break;
            case "bottom":
                r = {
                    x: f,
                    y: o.y + o.height
                };
                break;
            case "right":
                r = {
                    x: o.x + o.width,
                    y: m
                };
                break;
            case "left":
                r = {
                    x: o.x - i.width,
                    y: m
                };
                break;
            default:
                r = {
                    x: o.x,
                    y: o.y
                }
        }
        switch (p(t)) {
            case "start":
                r[u] -= g * (n && c ? -1 : 1);
                break;
            case "end":
                r[u] += g * (n && c ? -1 : 1)
        }
        return r
    }
    e.s(["clamp", 0, c, "createCoords", 0, u, "evaluate", 0, f, "floor", 0, l, "getAlignment", 0, p, "getAlignmentAxis", 0, y, "getAlignmentSides", 0, b, "getAxisLength", 0, h, "getExpandedPlacements", 0, w, "getOppositeAlignmentPlacement", 0, E, "getOppositeAxis", 0, m, "getOppositeAxisPlacements", 0, R, "getOppositePlacement", 0, P, "getPaddingObject", 0, C, "getSide", 0, d, "getSideAxis", 0, v, "max", 0, o, "min", 0, r, "placements", 0, n, "rectToClientRect", 0, M, "round", 0, i, "sides", 0, t], 32572);
    let A = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l
        } = n, u = i.filter(Boolean), s = await (null == l.isRTL ? void 0 : l.isRTL(t)), a = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }), {
            x: c,
            y: f
        } = F(a, r, s), d = r, p = {}, m = 0;
        for (let n = 0; n < u.length; n++) {
            let {
                name: i,
                fn: h
            } = u[n], {
                x: g,
                y: v,
                data: y,
                reset: b
            } = await h({
                x: c,
                y: f,
                initialPlacement: r,
                placement: d,
                strategy: o,
                middlewareData: p,
                rects: a,
                platform: l,
                elements: {
                    reference: e,
                    floating: t
                }
            });
            c = null != g ? g : c, f = null != v ? v : f, p = { ...p,
                [i]: { ...p[i],
                    ...y
                }
            }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (a = !0 === b.rects ? await l.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            }) : b.rects), {
                x: c,
                y: f
            } = F(a, d, s)), n = -1)
        }
        return {
            x: c,
            y: f,
            placement: d,
            strategy: o,
            middlewareData: p
        }
    };
    async function O(e, t) {
        var n;
        void 0 === t && (t = {});
        let {
            x: r,
            y: o,
            platform: i,
            rects: l,
            elements: u,
            strategy: s
        } = e, {
            boundary: a = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: m = 0
        } = f(t, e), h = C(m), g = u[p ? "floating" === d ? "reference" : "floating" : d], v = M(await i.getClippingRect({
            element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(u.floating)),
            boundary: a,
            rootBoundary: c,
            strategy: s
        })), y = "floating" === d ? {
            x: r,
            y: o,
            width: l.floating.width,
            height: l.floating.height
        } : l.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(u.floating)), w = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
            x: 1,
            y: 1
        }, E = M(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: u,
            rect: y,
            offsetParent: b,
            strategy: s
        }) : y);
        return {
            top: (v.top - E.top + h.top) / w.y,
            bottom: (E.bottom - v.bottom + h.bottom) / w.y,
            left: (v.left - E.left + h.left) / w.x,
            right: (E.right - v.right + h.right) / w.x
        }
    }

    function k(e, t) {
        return {
            top: e.top - t.height,
            right: e.right - t.width,
            bottom: e.bottom - t.height,
            left: e.left - t.width
        }
    }

    function H(e) {
        return t.some(t => e[t] >= 0)
    }

    function N(e) {
        let t = r(...e.map(e => e.left)),
            n = r(...e.map(e => e.top));
        return {
            x: t,
            y: n,
            width: o(...e.map(e => e.right)) - t,
            height: o(...e.map(e => e.bottom)) - n
        }
    }
    let D = new Set(["left", "top"]);
    async function I(e, t) {
        let {
            placement: n,
            platform: r,
            elements: o
        } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), l = d(n), u = p(n), s = "y" === v(n), a = D.has(l) ? -1 : 1, c = i && s ? -1 : 1, m = f(t, e), {
            mainAxis: h,
            crossAxis: g,
            alignmentAxis: y
        } = "number" == typeof m ? {
            mainAxis: m,
            crossAxis: 0,
            alignmentAxis: null
        } : {
            mainAxis: m.mainAxis || 0,
            crossAxis: m.crossAxis || 0,
            alignmentAxis: m.alignmentAxis
        };
        return u && "number" == typeof y && (g = "end" === u ? -1 * y : y), s ? {
            x: g * c,
            y: h * a
        } : {
            x: h * a,
            y: g * c
        }
    }

    function j() {
        return "u" > typeof window
    }

    function W(e) {
        return K(e) ? (e.nodeName || "").toLowerCase() : "#document"
    }

    function V(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
    }

    function B(e) {
        var t;
        return null == (t = (K(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
    }

    function K(e) {
        return !!j() && (e instanceof Node || e instanceof V(e).Node)
    }

    function $(e) {
        return !!j() && (e instanceof Element || e instanceof V(e).Element)
    }

    function U(e) {
        return !!j() && (e instanceof HTMLElement || e instanceof V(e).HTMLElement)
    }

    function G(e) {
        return !(!j() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof V(e).ShadowRoot)
    }
    let _ = new Set(["inline", "contents"]);

    function q(e) {
        let {
            overflow: t,
            overflowX: n,
            overflowY: r,
            display: o
        } = el(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !_.has(o)
    }
    let z = new Set(["table", "td", "th"]);

    function Y(e) {
        return z.has(W(e))
    }
    let X = [":popover-open", ":modal"];

    function J(e) {
        return X.some(t => {
            try {
                return e.matches(t)
            } catch (e) {
                return !1
            }
        })
    }
    let Q = ["transform", "translate", "scale", "rotate", "perspective"],
        Z = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        ee = ["paint", "layout", "strict", "content"];

    function et(e) {
        let t = er(),
            n = $(e) ? el(e) : e;
        return Q.some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || Z.some(e => (n.willChange || "").includes(e)) || ee.some(e => (n.contain || "").includes(e))
    }

    function en(e) {
        let t = es(e);
        for (; U(t) && !ei(t);) {
            if (et(t)) return t;
            if (J(t)) break;
            t = es(t)
        }
        return null
    }

    function er() {
        return !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
    }
    let eo = new Set(["html", "body", "#document"]);

    function ei(e) {
        return eo.has(W(e))
    }

    function el(e) {
        return V(e).getComputedStyle(e)
    }

    function eu(e) {
        return $(e) ? {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        } : {
            scrollLeft: e.scrollX,
            scrollTop: e.scrollY
        }
    }

    function es(e) {
        if ("html" === W(e)) return e;
        let t = e.assignedSlot || e.parentNode || G(e) && e.host || B(e);
        return G(t) ? t.host : t
    }

    function ea(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = function e(t) {
                let n = es(t);
                return ei(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : U(n) && q(n) ? n : e(n)
            }(e),
            i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
            l = V(o);
        if (i) {
            let e = ec(l);
            return t.concat(l, l.visualViewport || [], q(o) ? o : [], e && n ? ea(e) : [])
        }
        return t.concat(o, ea(o, [], n))
    }

    function ec(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
    }

    function ef(e) {
        let t = el(e),
            n = parseFloat(t.width) || 0,
            r = parseFloat(t.height) || 0,
            o = U(e),
            l = o ? e.offsetWidth : n,
            u = o ? e.offsetHeight : r,
            s = i(n) !== l || i(r) !== u;
        return s && (n = l, r = u), {
            width: n,
            height: r,
            $: s
        }
    }

    function ed(e) {
        return $(e) ? e : e.contextElement
    }

    function ep(e) {
        let t = ed(e);
        if (!U(t)) return u(1);
        let n = t.getBoundingClientRect(),
            {
                width: r,
                height: o,
                $: l
            } = ef(t),
            s = (l ? i(n.width) : n.width) / r,
            a = (l ? i(n.height) : n.height) / o;
        return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
            x: s,
            y: a
        }
    }
    e.s(["getComputedStyle", 0, el, "getContainingBlock", 0, en, "getDocumentElement", 0, B, "getFrameElement", 0, ec, "getNodeName", 0, W, "getNodeScroll", 0, eu, "getOverflowAncestors", 0, ea, "getParentNode", 0, es, "getWindow", 0, V, "isContainingBlock", 0, et, "isElement", 0, $, "isHTMLElement", 0, U, "isLastTraversableNode", 0, ei, "isOverflowElement", 0, q, "isShadowRoot", 0, G, "isTableElement", 0, Y, "isTopLayer", 0, J, "isWebKit", 0, er], 536394);
    let em = u(0);

    function eh(e) {
        let t = V(e);
        return er() && t.visualViewport ? {
            x: t.visualViewport.offsetLeft,
            y: t.visualViewport.offsetTop
        } : em
    }

    function eg(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
            l = ed(e),
            s = u(1);
        t && (r ? $(r) && (s = ep(r)) : s = ep(e));
        let a = (void 0 === (o = n) && (o = !1), r && (!o || r === V(l)) && o) ? eh(l) : u(0),
            c = (i.left + a.x) / s.x,
            f = (i.top + a.y) / s.y,
            d = i.width / s.x,
            p = i.height / s.y;
        if (l) {
            let e = V(l),
                t = r && $(r) ? V(r) : r,
                n = e,
                o = ec(n);
            for (; o && r && t !== n;) {
                let e = ep(o),
                    t = o.getBoundingClientRect(),
                    r = el(o),
                    i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                    l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                c *= e.x, f *= e.y, d *= e.x, p *= e.y, c += i, f += l, o = ec(n = V(o))
            }
        }
        return M({
            width: d,
            height: p,
            x: c,
            y: f
        })
    }

    function ev(e, t) {
        let n = eu(e).scrollLeft;
        return t ? t.left + n : eg(B(e)).left + n
    }

    function ey(e, t) {
        let n = e.getBoundingClientRect();
        return {
            x: n.left + t.scrollLeft - ev(e, n),
            y: n.top + t.scrollTop
        }
    }
    let eb = new Set(["absolute", "fixed"]);

    function ew(e, t, n) {
        var r;
        let i;
        if ("viewport" === t) i = function(e, t) {
            let n = V(e),
                r = B(e),
                o = n.visualViewport,
                i = r.clientWidth,
                l = r.clientHeight,
                u = 0,
                s = 0;
            if (o) {
                i = o.width, l = o.height;
                let e = er();
                (!e || e && "fixed" === t) && (u = o.offsetLeft, s = o.offsetTop)
            }
            let a = ev(r);
            if (a <= 0) {
                let e = r.ownerDocument,
                    t = e.body,
                    n = getComputedStyle(t),
                    o = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
                    l = Math.abs(r.clientWidth - t.clientWidth - o);
                l <= 25 && (i -= l)
            } else a <= 25 && (i += a);
            return {
                width: i,
                height: l,
                x: u,
                y: s
            }
        }(e, n);
        else if ("document" === t) {
            let t, n, l, u, s, a, c;
            r = B(e), t = B(r), n = eu(r), l = r.ownerDocument.body, u = o(t.scrollWidth, t.clientWidth, l.scrollWidth, l.clientWidth), s = o(t.scrollHeight, t.clientHeight, l.scrollHeight, l.clientHeight), a = -n.scrollLeft + ev(r), c = -n.scrollTop, "rtl" === el(l).direction && (a += o(t.clientWidth, l.clientWidth) - u), i = {
                width: u,
                height: s,
                x: a,
                y: c
            }
        } else if ($(t)) {
            let e, r, o, l, s, a;
            r = (e = eg(t, !0, "fixed" === n)).top + t.clientTop, o = e.left + t.clientLeft, l = U(t) ? ep(t) : u(1), s = t.clientWidth * l.x, a = t.clientHeight * l.y, i = {
                width: s,
                height: a,
                x: o * l.x,
                y: r * l.y
            }
        } else {
            let n = eh(e);
            i = {
                x: t.x - n.x,
                y: t.y - n.y,
                width: t.width,
                height: t.height
            }
        }
        return M(i)
    }

    function eE(e) {
        return "static" === el(e).position
    }

    function ex(e, t) {
        if (!U(e) || "fixed" === el(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return B(e) === n && (n = n.ownerDocument.body), n
    }

    function eT(e, t) {
        let n = V(e);
        if (J(e)) return n;
        if (!U(e)) {
            let t = es(e);
            for (; t && !ei(t);) {
                if ($(t) && !eE(t)) return t;
                t = es(t)
            }
            return n
        }
        let r = ex(e, t);
        for (; r && Y(r) && eE(r);) r = ex(r, t);
        return r && ei(r) && eE(r) && !et(r) ? n : r || en(e) || n
    }
    let eS = async function(e) {
            let t = this.getOffsetParent || eT,
                n = this.getDimensions,
                r = await n(e.floating);
            return {
                reference: function(e, t, n) {
                    let r = U(t),
                        o = B(t),
                        i = "fixed" === n,
                        l = eg(e, !0, i, t),
                        s = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        a = u(0);
                    if (r || !r && !i)
                        if (("body" !== W(t) || q(o)) && (s = eu(t)), r) {
                            let e = eg(t, !0, i, t);
                            a.x = e.x + t.clientLeft, a.y = e.y + t.clientTop
                        } else o && (a.x = ev(o));
                    i && !r && o && (a.x = ev(o));
                    let c = !o || r || i ? u(0) : ey(o, s);
                    return {
                        x: l.left + s.scrollLeft - a.x - c.x,
                        y: l.top + s.scrollTop - a.y - c.y,
                        width: l.width,
                        height: l.height
                    }
                }(e.reference, await t(e.floating), e.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    width: r.width,
                    height: r.height
                }
            }
        },
        eL = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {
                    elements: t,
                    rect: n,
                    offsetParent: r,
                    strategy: o
                } = e, i = "fixed" === o, l = B(r), s = !!t && J(t.floating);
                if (r === l || s && i) return n;
                let a = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    c = u(1),
                    f = u(0),
                    d = U(r);
                if ((d || !d && !i) && (("body" !== W(r) || q(l)) && (a = eu(r)), U(r))) {
                    let e = eg(r);
                    c = ep(r), f.x = e.x + r.clientLeft, f.y = e.y + r.clientTop
                }
                let p = !l || d || i ? u(0) : ey(l, a);
                return {
                    width: n.width * c.x,
                    height: n.height * c.y,
                    x: n.x * c.x - a.scrollLeft * c.x + f.x + p.x,
                    y: n.y * c.y - a.scrollTop * c.y + f.y + p.y
                }
            },
            getDocumentElement: B,
            getClippingRect: function(e) {
                let {
                    element: t,
                    boundary: n,
                    rootBoundary: i,
                    strategy: l
                } = e, u = [..."clippingAncestors" === n ? J(t) ? [] : function(e, t) {
                    let n = t.get(e);
                    if (n) return n;
                    let r = ea(e, [], !1).filter(e => $(e) && "body" !== W(e)),
                        o = null,
                        i = "fixed" === el(e).position,
                        l = i ? es(e) : e;
                    for (; $(l) && !ei(l);) {
                        let t = el(l),
                            n = et(l);
                        n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && eb.has(o.position) || q(l) && !n && function e(t, n) {
                            let r = es(t);
                            return !(r === n || !$(r) || ei(r)) && ("fixed" === el(r).position || e(r, n))
                        }(e, l)) ? r = r.filter(e => e !== l) : o = t, l = es(l)
                    }
                    return t.set(e, r), r
                }(t, this._c) : [].concat(n), i], s = u[0], a = u.reduce((e, n) => {
                    let i = ew(t, n, l);
                    return e.top = o(i.top, e.top), e.right = r(i.right, e.right), e.bottom = r(i.bottom, e.bottom), e.left = o(i.left, e.left), e
                }, ew(t, s, l));
                return {
                    width: a.right - a.left,
                    height: a.bottom - a.top,
                    x: a.left,
                    y: a.top
                }
            },
            getOffsetParent: eT,
            getElementRects: eS,
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                let {
                    width: t,
                    height: n
                } = ef(e);
                return {
                    width: t,
                    height: n
                }
            },
            getScale: ep,
            isElement: $,
            isRTL: function(e) {
                return "rtl" === el(e).direction
            }
        };

    function eR(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
    }
    let eP = function(e) {
            return void 0 === e && (e = 0), {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, r;
                    let {
                        x: o,
                        y: i,
                        placement: l,
                        middlewareData: u
                    } = t, s = await I(t, e);
                    return l === (null == (n = u.offset) ? void 0 : n.placement) && null != (r = u.arrow) && r.alignmentOffset ? {} : {
                        x: o + s.x,
                        y: i + s.y,
                        data: { ...s,
                            placement: l
                        }
                    }
                }
            }
        },
        eC = function(e) {
            return void 0 === e && (e = {}), {
                name: "shift",
                options: e,
                async fn(t) {
                    let {
                        x: n,
                        y: r,
                        placement: o
                    } = t, {
                        mainAxis: i = !0,
                        crossAxis: l = !1,
                        limiter: u = {
                            fn: e => {
                                let {
                                    x: t,
                                    y: n
                                } = e;
                                return {
                                    x: t,
                                    y: n
                                }
                            }
                        },
                        ...s
                    } = f(e, t), a = {
                        x: n,
                        y: r
                    }, p = await O(t, s), h = v(d(o)), g = m(h), y = a[g], b = a[h];
                    if (i) {
                        let e = "y" === g ? "top" : "left",
                            t = "y" === g ? "bottom" : "right",
                            n = y + p[e],
                            r = y - p[t];
                        y = c(n, y, r)
                    }
                    if (l) {
                        let e = "y" === h ? "top" : "left",
                            t = "y" === h ? "bottom" : "right",
                            n = b + p[e],
                            r = b - p[t];
                        b = c(n, b, r)
                    }
                    let w = u.fn({ ...t,
                        [g]: y,
                        [h]: b
                    });
                    return { ...w,
                        data: {
                            x: w.x - n,
                            y: w.y - r,
                            enabled: {
                                [g]: i,
                                [h]: l
                            }
                        }
                    }
                }
            }
        },
        eM = function(e) {
            return void 0 === e && (e = {}), {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, r, o, i, l;
                    let {
                        placement: u,
                        middlewareData: s,
                        rects: a,
                        initialPlacement: c,
                        platform: p,
                        elements: m
                    } = t, {
                        mainAxis: h = !0,
                        crossAxis: g = !0,
                        fallbackPlacements: y,
                        fallbackStrategy: E = "bestFit",
                        fallbackAxisSideDirection: x = "none",
                        flipAlignment: T = !0,
                        ...S
                    } = f(e, t);
                    if (null != (n = s.arrow) && n.alignmentOffset) return {};
                    let L = d(u),
                        C = v(c),
                        M = d(c) === c,
                        F = await (null == p.isRTL ? void 0 : p.isRTL(m.floating)),
                        A = y || (M || !T ? [P(c)] : w(c)),
                        k = "none" !== x;
                    !y && k && A.push(...R(c, T, x, F));
                    let H = [c, ...A],
                        N = await O(t, S),
                        D = [],
                        I = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                    if (h && D.push(N[L]), g) {
                        let e = b(u, a, F);
                        D.push(N[e[0]], N[e[1]])
                    }
                    if (I = [...I, {
                            placement: u,
                            overflows: D
                        }], !D.every(e => e <= 0)) {
                        let e = ((null == (o = s.flip) ? void 0 : o.index) || 0) + 1,
                            t = H[e];
                        if (t && ("alignment" !== g || C === v(t) || I.every(e => v(e.placement) !== C || e.overflows[0] > 0))) return {
                            data: {
                                index: e,
                                overflows: I
                            },
                            reset: {
                                placement: t
                            }
                        };
                        let n = null == (i = I.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                        if (!n) switch (E) {
                            case "bestFit":
                                {
                                    let e = null == (l = I.filter(e => {
                                        if (k) {
                                            let t = v(e.placement);
                                            return t === C || "y" === t
                                        }
                                        return !0
                                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (n = e);
                                    break
                                }
                            case "initialPlacement":
                                n = c
                        }
                        if (u !== n) return {
                            reset: {
                                placement: n
                            }
                        }
                    }
                    return {}
                }
            }
        },
        eF = function(e) {
            return void 0 === e && (e = {}), {
                name: "size",
                options: e,
                async fn(t) {
                    var n, i;
                    let l, u, {
                            placement: s,
                            rects: a,
                            platform: c,
                            elements: m
                        } = t,
                        {
                            apply: h = () => {},
                            ...g
                        } = f(e, t),
                        y = await O(t, g),
                        b = d(s),
                        w = p(s),
                        E = "y" === v(s),
                        {
                            width: x,
                            height: T
                        } = a.floating;
                    "top" === b || "bottom" === b ? (l = b, u = w === (await (null == c.isRTL ? void 0 : c.isRTL(m.floating)) ? "start" : "end") ? "left" : "right") : (u = b, l = "end" === w ? "top" : "bottom");
                    let S = T - y.top - y.bottom,
                        L = x - y.left - y.right,
                        R = r(T - y[l], S),
                        P = r(x - y[u], L),
                        C = !t.middlewareData.shift,
                        M = R,
                        F = P;
                    if (null != (n = t.middlewareData.shift) && n.enabled.x && (F = L), null != (i = t.middlewareData.shift) && i.enabled.y && (M = S), C && !w) {
                        let e = o(y.left, 0),
                            t = o(y.right, 0),
                            n = o(y.top, 0),
                            r = o(y.bottom, 0);
                        E ? F = x - 2 * (0 !== e || 0 !== t ? e + t : o(y.left, y.right)) : M = T - 2 * (0 !== n || 0 !== r ? n + r : o(y.top, y.bottom))
                    }
                    await h({ ...t,
                        availableWidth: F,
                        availableHeight: M
                    });
                    let A = await c.getDimensions(m.floating);
                    return x !== A.width || T !== A.height ? {
                        reset: {
                            rects: !0
                        }
                    } : {}
                }
            }
        },
        eA = function(e) {
            return void 0 === e && (e = {}), {
                name: "hide",
                options: e,
                async fn(t) {
                    let {
                        rects: n
                    } = t, {
                        strategy: r = "referenceHidden",
                        ...o
                    } = f(e, t);
                    switch (r) {
                        case "referenceHidden":
                            {
                                let e = k(await O(t, { ...o,
                                    elementContext: "reference"
                                }), n.reference);
                                return {
                                    data: {
                                        referenceHiddenOffsets: e,
                                        referenceHidden: H(e)
                                    }
                                }
                            }
                        case "escaped":
                            {
                                let e = k(await O(t, { ...o,
                                    altBoundary: !0
                                }), n.floating);
                                return {
                                    data: {
                                        escapedOffsets: e,
                                        escaped: H(e)
                                    }
                                }
                            }
                        default:
                            return {}
                    }
                }
            }
        },
        eO = e => ({
            name: "arrow",
            options: e,
            async fn(t) {
                let {
                    x: n,
                    y: o,
                    placement: i,
                    rects: l,
                    platform: u,
                    elements: s,
                    middlewareData: a
                } = t, {
                    element: d,
                    padding: m = 0
                } = f(e, t) || {};
                if (null == d) return {};
                let g = C(m),
                    v = {
                        x: n,
                        y: o
                    },
                    b = y(i),
                    w = h(b),
                    E = await u.getDimensions(d),
                    x = "y" === b,
                    T = x ? "clientHeight" : "clientWidth",
                    S = l.reference[w] + l.reference[b] - v[b] - l.floating[w],
                    L = v[b] - l.reference[b],
                    R = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(d)),
                    P = R ? R[T] : 0;
                P && await (null == u.isElement ? void 0 : u.isElement(R)) || (P = s.floating[T] || l.floating[w]);
                let M = P / 2 - E[w] / 2 - 1,
                    F = r(g[x ? "top" : "left"], M),
                    A = r(g[x ? "bottom" : "right"], M),
                    O = P - E[w] - A,
                    k = P / 2 - E[w] / 2 + (S / 2 - L / 2),
                    H = c(F, k, O),
                    N = !a.arrow && null != p(i) && k !== H && l.reference[w] / 2 - (k < F ? F : A) - E[w] / 2 < 0,
                    D = N ? k < F ? k - F : k - O : 0;
                return {
                    [b]: v[b] + D,
                    data: {
                        [b]: H,
                        centerOffset: k - H - D,
                        ...N && {
                            alignmentOffset: D
                        }
                    },
                    reset: N
                }
            }
        }),
        ek = function(e) {
            return void 0 === e && (e = {}), {
                options: e,
                fn(t) {
                    let {
                        x: n,
                        y: r,
                        placement: o,
                        rects: i,
                        middlewareData: l
                    } = t, {
                        offset: u = 0,
                        mainAxis: s = !0,
                        crossAxis: a = !0
                    } = f(e, t), c = {
                        x: n,
                        y: r
                    }, p = v(o), h = m(p), g = c[h], y = c[p], b = f(u, t), w = "number" == typeof b ? {
                        mainAxis: b,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...b
                    };
                    if (s) {
                        let e = "y" === h ? "height" : "width",
                            t = i.reference[h] - i.floating[e] + w.mainAxis,
                            n = i.reference[h] + i.reference[e] - w.mainAxis;
                        g < t ? g = t : g > n && (g = n)
                    }
                    if (a) {
                        var E, x;
                        let e = "y" === h ? "width" : "height",
                            t = D.has(d(o)),
                            n = i.reference[p] - i.floating[e] + (t && (null == (E = l.offset) ? void 0 : E[p]) || 0) + (t ? 0 : w.crossAxis),
                            r = i.reference[p] + i.reference[e] + (t ? 0 : (null == (x = l.offset) ? void 0 : x[p]) || 0) - (t ? w.crossAxis : 0);
                        y < n ? y = n : y > r && (y = r)
                    }
                    return {
                        [h]: g,
                        [p]: y
                    }
                }
            }
        },
        eH = (e, t, n) => {
            let r = new Map,
                o = {
                    platform: eL,
                    ...n
                },
                i = { ...o.platform,
                    _c: r
                };
            return A(e, t, { ...o,
                platform: i
            })
        };
    e.s(["arrow", 0, eO, "autoPlacement", 0, function(e) {
        return void 0 === e && (e = {}), {
            name: "autoPlacement",
            options: e,
            async fn(t) {
                var r, o, i, l;
                let {
                    rects: u,
                    middlewareData: s,
                    placement: a,
                    platform: c,
                    elements: m
                } = t, {
                    crossAxis: h = !1,
                    alignment: g,
                    allowedPlacements: v = n,
                    autoAlignment: y = !0,
                    ...w
                } = f(e, t), x = void 0 !== g || v === n ? ((l = g || null) ? [...v.filter(e => p(e) === l), ...v.filter(e => p(e) !== l)] : v.filter(e => d(e) === e)).filter(e => !l || p(e) === l || !!y && E(e) !== e) : v, T = await O(t, w), S = (null == (r = s.autoPlacement) ? void 0 : r.index) || 0, L = x[S];
                if (null == L) return {};
                let R = b(L, u, await (null == c.isRTL ? void 0 : c.isRTL(m.floating)));
                if (a !== L) return {
                    reset: {
                        placement: x[0]
                    }
                };
                let P = [T[d(L)], T[R[0]], T[R[1]]],
                    C = [...(null == (o = s.autoPlacement) ? void 0 : o.overflows) || [], {
                        placement: L,
                        overflows: P
                    }],
                    M = x[S + 1];
                if (M) return {
                    data: {
                        index: S + 1,
                        overflows: C
                    },
                    reset: {
                        placement: M
                    }
                };
                let F = C.map(e => {
                        let t = p(e.placement);
                        return [e.placement, t && h ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0], e.overflows]
                    }).sort((e, t) => e[1] - t[1]),
                    A = (null == (i = F.filter(e => e[2].slice(0, p(e[0]) ? 2 : 3).every(e => e <= 0))[0]) ? void 0 : i[0]) || F[0][0];
                return A !== a ? {
                    data: {
                        index: S + 1,
                        overflows: C
                    },
                    reset: {
                        placement: A
                    }
                } : {}
            }
        }
    }, "autoUpdate", 0, function(e, t, n, i) {
        let u;
        void 0 === i && (i = {});
        let {
            ancestorScroll: s = !0,
            ancestorResize: a = !0,
            elementResize: c = "function" == typeof ResizeObserver,
            layoutShift: f = "function" == typeof IntersectionObserver,
            animationFrame: d = !1
        } = i, p = ed(e), m = s || a ? [...p ? ea(p) : [], ...ea(t)] : [];
        m.forEach(e => {
            s && e.addEventListener("scroll", n, {
                passive: !0
            }), a && e.addEventListener("resize", n)
        });
        let h = p && f ? function(e, t) {
                let n, i = null,
                    u = B(e);

                function s() {
                    var e;
                    clearTimeout(n), null == (e = i) || e.disconnect(), i = null
                }
                return ! function a(c, f) {
                    void 0 === c && (c = !1), void 0 === f && (f = 1), s();
                    let d = e.getBoundingClientRect(),
                        {
                            left: p,
                            top: m,
                            width: h,
                            height: g
                        } = d;
                    if (c || t(), !h || !g) return;
                    let v = {
                            rootMargin: -l(m) + "px " + -l(u.clientWidth - (p + h)) + "px " + -l(u.clientHeight - (m + g)) + "px " + -l(p) + "px",
                            threshold: o(0, r(1, f)) || 1
                        },
                        y = !0;

                    function b(t) {
                        let r = t[0].intersectionRatio;
                        if (r !== f) {
                            if (!y) return a();
                            r ? a(!1, r) : n = setTimeout(() => {
                                a(!1, 1e-7)
                            }, 1e3)
                        }
                        1 !== r || eR(d, e.getBoundingClientRect()) || a(), y = !1
                    }
                    try {
                        i = new IntersectionObserver(b, { ...v,
                            root: u.ownerDocument
                        })
                    } catch (e) {
                        i = new IntersectionObserver(b, v)
                    }
                    i.observe(e)
                }(!0), s
            }(p, n) : null,
            g = -1,
            v = null;
        c && (v = new ResizeObserver(e => {
            let [r] = e;
            r && r.target === p && v && (v.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                var e;
                null == (e = v) || e.observe(t)
            })), n()
        }), p && !d && v.observe(p), v.observe(t));
        let y = d ? eg(e) : null;
        return d && function t() {
            let r = eg(e);
            y && !eR(y, r) && n(), y = r, u = requestAnimationFrame(t)
        }(), n(), () => {
            var e;
            m.forEach(e => {
                s && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n)
            }), null == h || h(), null == (e = v) || e.disconnect(), v = null, d && cancelAnimationFrame(u)
        }
    }, "computePosition", 0, eH, "detectOverflow", 0, O, "flip", 0, eM, "hide", 0, eA, "inline", 0, function(e) {
        return void 0 === e && (e = {}), {
            name: "inline",
            options: e,
            async fn(t) {
                let {
                    placement: n,
                    elements: i,
                    rects: l,
                    platform: u,
                    strategy: s
                } = t, {
                    padding: a = 2,
                    x: c,
                    y: p
                } = f(e, t), m = Array.from(await (null == u.getClientRects ? void 0 : u.getClientRects(i.reference)) || []), h = function(e) {
                    let t = e.slice().sort((e, t) => e.y - t.y),
                        n = [],
                        r = null;
                    for (let e = 0; e < t.length; e++) {
                        let o = t[e];
                        !r || o.y - r.y > r.height / 2 ? n.push([o]) : n[n.length - 1].push(o), r = o
                    }
                    return n.map(e => M(N(e)))
                }(m), g = M(N(m)), y = C(a), b = await u.getElementRects({
                    reference: {
                        getBoundingClientRect: function() {
                            if (2 === h.length && h[0].left > h[1].right && null != c && null != p) return h.find(e => c > e.left - y.left && c < e.right + y.right && p > e.top - y.top && p < e.bottom + y.bottom) || g;
                            if (h.length >= 2) {
                                if ("y" === v(n)) {
                                    let e = h[0],
                                        t = h[h.length - 1],
                                        r = "top" === d(n),
                                        o = e.top,
                                        i = t.bottom,
                                        l = r ? e.left : t.left,
                                        u = r ? e.right : t.right;
                                    return {
                                        top: o,
                                        bottom: i,
                                        left: l,
                                        right: u,
                                        width: u - l,
                                        height: i - o,
                                        x: l,
                                        y: o
                                    }
                                }
                                let e = "left" === d(n),
                                    t = o(...h.map(e => e.right)),
                                    i = r(...h.map(e => e.left)),
                                    l = h.filter(n => e ? n.left === i : n.right === t),
                                    u = l[0].top,
                                    s = l[l.length - 1].bottom;
                                return {
                                    top: u,
                                    bottom: s,
                                    left: i,
                                    right: t,
                                    width: t - i,
                                    height: s - u,
                                    x: i,
                                    y: u
                                }
                            }
                            return g
                        }
                    },
                    floating: i.floating,
                    strategy: s
                });
                return l.reference.x !== b.reference.x || l.reference.y !== b.reference.y || l.reference.width !== b.reference.width || l.reference.height !== b.reference.height ? {
                    reset: {
                        rects: b
                    }
                } : {}
            }
        }
    }, "limitShift", 0, ek, "offset", 0, eP, "shift", 0, eC, "size", 0, eF], 95963);
    var eN = e.i(191788),
        eD = e.i(730943),
        eI = "u" > typeof document ? eN.useLayoutEffect : function() {};

    function ej(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
            if (Array.isArray(e)) {
                if ((n = e.length) !== t.length) return !1;
                for (r = n; 0 != r--;)
                    if (!ej(e[r], t[r])) return !1;
                return !0
            }
            if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
            for (r = n; 0 != r--;)
                if (!({}).hasOwnProperty.call(t, o[r])) return !1;
            for (r = n; 0 != r--;) {
                let n = o[r];
                if (("_owner" !== n || !e.$$typeof) && !ej(e[n], t[n])) return !1
            }
            return !0
        }
        return e != e && t != t
    }

    function eW(e) {
        return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
    }

    function eV(e, t) {
        let n = eW(e);
        return Math.round(t * n) / n
    }

    function eB(e) {
        let t = eN.useRef(e);
        return eI(() => {
            t.current = e
        }), t
    }
    e.s(["arrow", 0, (e, t) => ({
        name: "arrow",
        options: e,
        fn(t) {
            let {
                element: n,
                padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? eO({
                element: n.current,
                padding: r
            }).fn(t) : {} : n ? eO({
                element: n,
                padding: r
            }).fn(t) : {}
        },
        options: [e, t]
    }), "flip", 0, (e, t) => ({ ...eM(e),
        options: [e, t]
    }), "hide", 0, (e, t) => ({ ...eA(e),
        options: [e, t]
    }), "limitShift", 0, (e, t) => ({ ...ek(e),
        options: [e, t]
    }), "offset", 0, (e, t) => ({ ...eP(e),
        options: [e, t]
    }), "shift", 0, (e, t) => ({ ...eC(e),
        options: [e, t]
    }), "size", 0, (e, t) => ({ ...eF(e),
        options: [e, t]
    }), "useFloating", 0, function(e) {
        void 0 === e && (e = {});
        let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: o,
            elements: {
                reference: i,
                floating: l
            } = {},
            transform: u = !0,
            whileElementsMounted: s,
            open: a
        } = e, [c, f] = eN.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1
        }), [d, p] = eN.useState(r);
        ej(d, r) || p(r);
        let [m, h] = eN.useState(null), [g, v] = eN.useState(null), y = eN.useCallback(e => {
            e !== x.current && (x.current = e, h(e))
        }, []), b = eN.useCallback(e => {
            e !== T.current && (T.current = e, v(e))
        }, []), w = i || m, E = l || g, x = eN.useRef(null), T = eN.useRef(null), S = eN.useRef(c), L = null != s, R = eB(s), P = eB(o), C = eB(a), M = eN.useCallback(() => {
            if (!x.current || !T.current) return;
            let e = {
                placement: t,
                strategy: n,
                middleware: d
            };
            P.current && (e.platform = P.current), eH(x.current, T.current, e).then(e => {
                let t = { ...e,
                    isPositioned: !1 !== C.current
                };
                F.current && !ej(S.current, t) && (S.current = t, eD.flushSync(() => {
                    f(t)
                }))
            })
        }, [d, t, n, P, C]);
        eI(() => {
            !1 === a && S.current.isPositioned && (S.current.isPositioned = !1, f(e => ({ ...e,
                isPositioned: !1
            })))
        }, [a]);
        let F = eN.useRef(!1);
        eI(() => (F.current = !0, () => {
            F.current = !1
        }), []), eI(() => {
            if (w && (x.current = w), E && (T.current = E), w && E) {
                if (R.current) return R.current(w, E, M);
                M()
            }
        }, [w, E, M, R, L]);
        let A = eN.useMemo(() => ({
                reference: x,
                floating: T,
                setReference: y,
                setFloating: b
            }), [y, b]),
            O = eN.useMemo(() => ({
                reference: w,
                floating: E
            }), [w, E]),
            k = eN.useMemo(() => {
                let e = {
                    position: n,
                    left: 0,
                    top: 0
                };
                if (!O.floating) return e;
                let t = eV(O.floating, c.x),
                    r = eV(O.floating, c.y);
                return u ? { ...e,
                    transform: "translate(" + t + "px, " + r + "px)",
                    ...eW(O.floating) >= 1.5 && {
                        willChange: "transform"
                    }
                } : {
                    position: n,
                    left: t,
                    top: r
                }
            }, [n, u, O.floating, c.x, c.y]);
        return eN.useMemo(() => ({ ...c,
            update: M,
            refs: A,
            elements: O,
            floatingStyles: k
        }), [c, M, A, O, k])
    }], 195600)
}, 315503, e => {
    "use strict";
    var t = e.i(95963),
        n = e.i(195600);
    e.i(350461);
    var r = e.i(191788),
        o = e.i(536394),
        i = e.i(32572),
        l = "u" < typeof Element;
    l || Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, l || Element.prototype.getRootNode;
    var u = e.i(730943);
    let s = { ...r
        },
        a = s.useInsertionEffect || (e => e());

    function c(e) {
        let t = r.useRef(() => {});
        return a(() => {
            t.current = e
        }), r.useCallback(function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n)
        }, [])
    }
    var f = "u" > typeof document ? r.useLayoutEffect : r.useEffect;
    let d = !1,
        p = 0,
        m = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + p++,
        h = s.useId || function() {
            let [e, t] = r.useState(() => d ? m() : void 0);
            return f(() => {
                null == e && t(m())
            }, []), r.useEffect(() => {
                d = !0
            }, []), e
        },
        g = r.createContext(null),
        v = r.createContext(null),
        y = "active",
        b = "selected";

    function w(e, t, n) {
        let r = new Map,
            o = "item" === n,
            i = e;
        if (o && e) {
            let {
                [y]: t, [b]: n, ...r
            } = e;
            i = r
        }
        return { ..."floating" === n && {
                tabIndex: -1,
                "data-floating-ui-focusable": ""
            },
            ...i,
            ...t.map(t => {
                let r = t ? t[n] : null;
                return "function" == typeof r ? e ? r(e) : null : r
            }).concat(e).reduce((e, t) => (t && Object.entries(t).forEach(t => {
                let [n, i] = t;
                if (!(o && [y, b].includes(n)))
                    if (0 === n.indexOf("on")) {
                        if (r.has(n) || r.set(n, []), "function" == typeof i) {
                            var l;
                            null == (l = r.get(n)) || l.push(i), e[n] = function() {
                                for (var e, t = arguments.length, o = Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                                return null == (e = r.get(n)) ? void 0 : e.map(e => e(...o)).find(e => void 0 !== e)
                            }
                        }
                    } else e[n] = i
            }), e), {})
        }
    }

    function E(e, t) {
        return { ...e,
            rects: { ...e.rects,
                floating: { ...e.rects.floating,
                    height: t
                }
            }
        }
    }
    var x = e.i(626171),
        T = e.i(993481),
        S = e.i(264728),
        L = e.i(855367);
    let R = (0, r.createContext)({
        styles: void 0,
        setReference: () => {},
        setFloating: () => {},
        getReferenceProps: () => ({}),
        getFloatingProps: () => ({}),
        slot: {}
    });
    R.displayName = "FloatingContext";
    let P = (0, r.createContext)(null);

    function C(e, t, n) {
        let o = (0, x.useDisposables)(),
            i = (0, T.useEvent)((e, t) => {
                if (null == e) return [n, null];
                if ("number" == typeof e) return [e, null];
                if ("string" == typeof e) {
                    if (!t) return [n, null];
                    let r = M(e, t);
                    return [r, n => {
                        let i = function e(t) {
                            let n = /var\((.*)\)/.exec(t);
                            if (n) {
                                let t = n[1].indexOf(",");
                                if (-1 === t) return [n[1]];
                                let r = n[1].slice(0, t).trim(),
                                    o = n[1].slice(t + 1).trim();
                                return o ? [r, ...e(o)] : [r]
                            }
                            return []
                        }(e); {
                            let l = i.map(e => window.getComputedStyle(t).getPropertyValue(e));
                            o.requestAnimationFrame(function u() {
                                o.nextFrame(u);
                                let s = !1;
                                for (let [e, n] of i.entries()) {
                                    let r = window.getComputedStyle(t).getPropertyValue(n);
                                    if (l[e] !== r) {
                                        l[e] = r, s = !0;
                                        break
                                    }
                                }
                                if (!s) return;
                                let a = M(e, t);
                                r !== a && (n(a), r = a)
                            })
                        }
                        return o.dispose
                    }]
                }
                return [n, null]
            }),
            l = (0, r.useMemo)(() => i(e, t)[0], [e, t]),
            [u = l, s] = (0, r.useState)();
        return (0, S.useIsoMorphicEffect)(() => {
            let [n, r] = i(e, t);
            if (s(n), r) return r(s)
        }, [e, t]), u
    }

    function M(e, t) {
        let n = document.createElement("div");
        t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
        let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
        return t.removeChild(n), r
    }
    P.displayName = "PlacementContext", e.s(["FloatingProvider", 0, function({
        children: e,
        enabled: l = !0
    }) {
        var s, a, d, p, m, y, b;
        let x, M, F, A, O, k, H, N, D, I, [j, W] = (0, r.useState)(null),
            [V, B] = (0, r.useState)(0),
            K = (0, r.useRef)(null),
            [$, U] = (0, r.useState)(null);
        a = $, (0, S.useIsoMorphicEffect)(() => {
            if (!a) return;
            let e = new MutationObserver(() => {
                let e = window.getComputedStyle(a).maxHeight,
                    t = parseFloat(e);
                if (isNaN(t)) return;
                let n = parseInt(e);
                isNaN(n) || t !== n && (a.style.maxHeight = `${Math.ceil(t)}px`)
            });
            return e.observe(a, {
                attributes: !0,
                attributeFilter: ["style"]
            }), () => {
                e.disconnect()
            }
        }, [a]);
        let G = l && null !== j && null !== $,
            {
                to: _ = "bottom",
                gap: q = 0,
                offset: z = 0,
                padding: Y = 0,
                inner: X
            } = (d = j, p = $, x = C(null != (m = null == d ? void 0 : d.gap) ? m : "var(--anchor-gap, 0)", p), M = C(null != (y = null == d ? void 0 : d.offset) ? y : "var(--anchor-offset, 0)", p), F = C(null != (b = null == d ? void 0 : d.padding) ? b : "var(--anchor-padding, 0)", p), { ...d,
                gap: x,
                offset: M,
                padding: F
            }),
            [J, Q = "center"] = _.split(" ");
        (0, S.useIsoMorphicEffect)(() => {
            G && B(0)
        }, [G]);
        let {
            refs: Z,
            floatingStyles: ee,
            context: et
        } = function(e) {
            void 0 === e && (e = {});
            let {
                nodeId: t
            } = e, i = function(e) {
                var t;
                let {
                    open: n = !1,
                    onOpenChange: o,
                    elements: i
                } = e, l = h(), u = r.useRef({}), [s] = r.useState(() => {
                    let e;
                    return e = new Map, {
                        emit(t, n) {
                            var r;
                            null == (r = e.get(t)) || r.forEach(e => e(n))
                        },
                        on(t, n) {
                            e.set(t, [...e.get(t) || [], n])
                        },
                        off(t, n) {
                            var r;
                            e.set(t, (null == (r = e.get(t)) ? void 0 : r.filter(e => e !== n)) || [])
                        }
                    }
                }), a = null != ((null == (t = r.useContext(g)) ? void 0 : t.id) || null), [f, d] = r.useState(i.reference), p = c((e, t, n) => {
                    u.current.openEvent = e ? t : void 0, s.emit("openchange", {
                        open: e,
                        event: t,
                        reason: n,
                        nested: a
                    }), null == o || o(e, t, n)
                }), m = r.useMemo(() => ({
                    setPositionReference: d
                }), []), v = r.useMemo(() => ({
                    reference: f || i.reference || null,
                    floating: i.floating || null,
                    domReference: i.reference
                }), [f, i.reference, i.floating]);
                return r.useMemo(() => ({
                    dataRef: u,
                    open: n,
                    onOpenChange: p,
                    elements: v,
                    events: s,
                    floatingId: l,
                    refs: m
                }), [n, p, v, s, l, m])
            }({ ...e,
                elements: {
                    reference: null,
                    floating: null,
                    ...e.elements
                }
            }), l = e.rootContext || i, u = l.elements, [s, a] = r.useState(null), [d, p] = r.useState(null), m = (null == u ? void 0 : u.domReference) || s, y = r.useRef(null), b = r.useContext(v);
            f(() => {
                m && (y.current = m)
            }, [m]);
            let w = (0, n.useFloating)({ ...e,
                    elements: { ...u,
                        ...d && {
                            reference: d
                        }
                    }
                }),
                E = r.useCallback(e => {
                    let t = (0, o.isElement)(e) ? {
                        getBoundingClientRect: () => e.getBoundingClientRect(),
                        contextElement: e
                    } : e;
                    p(t), w.refs.setReference(t)
                }, [w.refs]),
                x = r.useCallback(e => {
                    ((0, o.isElement)(e) || null === e) && (y.current = e, a(e)), ((0, o.isElement)(w.refs.reference.current) || null === w.refs.reference.current || null !== e && !(0, o.isElement)(e)) && w.refs.setReference(e)
                }, [w.refs]),
                T = r.useMemo(() => ({ ...w.refs,
                    setReference: x,
                    setPositionReference: E,
                    domReference: y
                }), [w.refs, x, E]),
                S = r.useMemo(() => ({ ...w.elements,
                    domReference: m
                }), [w.elements, m]),
                L = r.useMemo(() => ({ ...w,
                    ...l,
                    refs: T,
                    elements: S,
                    nodeId: t
                }), [w, T, S, t, l]);
            return f(() => {
                l.dataRef.current.floatingContext = L;
                let e = null == b ? void 0 : b.nodesRef.current.find(e => e.id === t);
                e && (e.context = L)
            }), r.useMemo(() => ({ ...w,
                context: L,
                refs: T,
                elements: S
            }), [w, T, S, L])
        }({
            open: G,
            placement: "selection" === J ? "center" === Q ? "bottom" : `bottom-${Q}` : "center" === Q ? `${J}` : `${J}-${Q}`,
            strategy: "absolute",
            transform: !1,
            middleware: [(0, n.offset)({
                mainAxis: "selection" === J ? 0 : q,
                crossAxis: z
            }), (0, n.shift)({
                padding: Y
            }), "selection" !== J && (0, n.flip)({
                padding: Y
            }), "selection" === J && X ? {
                name: "inner",
                options: A = { ...X,
                    padding: Y,
                    overflowRef: K,
                    offset: V,
                    minItemsVisible: 4,
                    referenceOverflowThreshold: Y,
                    onFallbackChange(e) {
                        var t, n;
                        if (!e) return;
                        let r = et.elements.floating;
                        if (!r) return;
                        let o = parseFloat(getComputedStyle(r).scrollPaddingBottom) || 0,
                            i = Math.min(4, r.childElementCount),
                            l = 0,
                            u = 0;
                        for (let e of null != (n = null == (t = et.elements.floating) ? void 0 : t.childNodes) ? n : [])
                            if (L.isHTMLElement(e)) {
                                let t = e.offsetTop,
                                    n = t + e.clientHeight + o,
                                    s = r.scrollTop,
                                    a = s + r.clientHeight;
                                if (t >= s && n <= a) i--;
                                else {
                                    u = Math.max(0, Math.min(n, a) - Math.max(t, s)), l = e.clientHeight;
                                    break
                                }
                            }
                        i >= 1 && B(e => {
                            let t = l * i - u + o;
                            return e >= t ? e : t
                        })
                    }
                },
                async fn(e) {
                    let {
                        listRef: r,
                        overflowRef: o,
                        onFallbackChange: l,
                        offset: s = 0,
                        index: a = 0,
                        minItemsVisible: c = 4,
                        referenceOverflowThreshold: f = 0,
                        scrollRef: d,
                        ...p
                    } = (0, i.evaluate)(A, e), {
                        rects: m,
                        elements: {
                            floating: h
                        }
                    } = e, g = r.current[a], v = (null == d ? void 0 : d.current) || h, y = h.clientTop || v.clientTop, b = 0 !== h.clientTop, w = 0 !== v.clientTop, x = h === v;
                    if (!g) return {};
                    let T = { ...e,
                            ...await (0, n.offset)(-g.offsetTop - h.clientTop - m.reference.height / 2 - g.offsetHeight / 2 - s).fn(e)
                        },
                        S = await (0, t.detectOverflow)(E(T, v.scrollHeight + y + h.clientTop), p),
                        L = await (0, t.detectOverflow)(T, { ...p,
                            elementContext: "reference"
                        }),
                        R = (0, i.max)(0, S.top),
                        P = T.y + R,
                        C = (v.scrollHeight > v.clientHeight ? e => e : i.round)((0, i.max)(0, v.scrollHeight + (b && x || w ? 2 * y : 0) - R - (0, i.max)(0, S.bottom)));
                    if (v.style.maxHeight = C + "px", v.scrollTop = R, l) {
                        let e = v.offsetHeight < g.offsetHeight * (0, i.min)(c, r.current.length) - 1 || L.top >= -f || L.bottom >= -f;
                        u.flushSync(() => l(e))
                    }
                    return o && (o.current = await (0, t.detectOverflow)(E({ ...T,
                        y: P
                    }, v.offsetHeight + y + h.clientTop), p)), {
                        y: P
                    }
                }
            } : null, (0, n.size)({
                padding: Y,
                apply({
                    availableWidth: e,
                    availableHeight: t,
                    elements: n
                }) {
                    Object.assign(n.floating.style, {
                        overflow: "auto",
                        maxWidth: `${e}px`,
                        maxHeight: `min(var(--anchor-max-height, 100vh), ${t}px)`
                    })
                }
            })].filter(Boolean),
            whileElementsMounted: t.autoUpdate
        }), [en = J, er = Q] = et.placement.split("-");
        "selection" === J && (en = "selection");
        let eo = (0, r.useMemo)(() => ({
                anchor: [en, er].filter(Boolean).join(" ")
            }), [en, er]),
            {
                getReferenceProps: ei,
                getFloatingProps: el
            } = (O = (s = [function(e, t) {
                let {
                    open: n,
                    elements: o
                } = e, {
                    enabled: i = !0,
                    overflowRef: l,
                    scrollRef: s,
                    onChange: a
                } = t, f = c(a), d = r.useRef(!1), p = r.useRef(null), m = r.useRef(null);
                r.useEffect(() => {
                    if (!i) return;

                    function e(e) {
                        if (e.ctrlKey || !t || null == l.current) return;
                        let n = e.deltaY,
                            r = l.current.top >= -.5,
                            o = l.current.bottom >= -.5,
                            i = t.scrollHeight - t.clientHeight,
                            s = n < 0 ? -1 : 1,
                            a = n < 0 ? "max" : "min";
                        if (!(t.scrollHeight <= t.clientHeight))
                            if (!r && n > 0 || !o && n < 0) e.preventDefault(), u.flushSync(() => {
                                f(e => e + Math[a](n, i * s))
                            });
                            else {
                                let e;
                                /firefox/i.test((e = navigator.userAgentData) && Array.isArray(e.brands) ? e.brands.map(e => {
                                    let {
                                        brand: t,
                                        version: n
                                    } = e;
                                    return t + "/" + n
                                }).join(" ") : navigator.userAgent) && (t.scrollTop += n)
                            }
                    }
                    let t = (null == s ? void 0 : s.current) || o.floating;
                    if (n && t) return t.addEventListener("wheel", e), requestAnimationFrame(() => {
                        p.current = t.scrollTop, null != l.current && (m.current = { ...l.current
                        })
                    }), () => {
                        p.current = null, m.current = null, t.removeEventListener("wheel", e)
                    }
                }, [i, n, o.floating, l, s, f]);
                let h = r.useMemo(() => ({
                    onKeyDown() {
                        d.current = !0
                    },
                    onWheel() {
                        d.current = !1
                    },
                    onPointerMove() {
                        d.current = !1
                    },
                    onScroll() {
                        let e = (null == s ? void 0 : s.current) || o.floating;
                        if (l.current && e && d.current) {
                            if (null !== p.current) {
                                let t = e.scrollTop - p.current;
                                (l.current.bottom < -.5 && t < -1 || l.current.top < -.5 && t > 1) && u.flushSync(() => f(e => e + t))
                            }
                            requestAnimationFrame(() => {
                                p.current = e.scrollTop
                            })
                        }
                    }
                }), [o.floating, f, l, s]);
                return r.useMemo(() => i ? {
                    floating: h
                } : {}, [i, h])
            }(et, {
                overflowRef: K,
                onChange: B
            })]).map(e => null == e ? void 0 : e.reference), k = s.map(e => null == e ? void 0 : e.floating), H = s.map(e => null == e ? void 0 : e.item), N = r.useCallback(e => w(e, s, "reference"), O), D = r.useCallback(e => w(e, s, "floating"), k), I = r.useCallback(e => w(e, s, "item"), H), r.useMemo(() => ({
                getReferenceProps: N,
                getFloatingProps: D,
                getItemProps: I
            }), [N, D, I])),
            eu = (0, T.useEvent)(e => {
                U(e), Z.setFloating(e)
            });
        return r.createElement(P.Provider, {
            value: W
        }, r.createElement(R.Provider, {
            value: {
                setFloating: eu,
                setReference: Z.setReference,
                styles: ee,
                getReferenceProps: ei,
                getFloatingProps: el,
                slot: eo
            }
        }, e))
    }, "useFloatingPanel", 0, function(e = null) {
        !1 === e && (e = null), "string" == typeof e && (e = {
            to: e
        });
        let t = (0, r.useContext)(P),
            n = (0, r.useMemo)(() => e, [JSON.stringify(e, (e, t) => {
                var n;
                return null != (n = null == t ? void 0 : t.outerHTML) ? n : t
            })]);
        (0, S.useIsoMorphicEffect)(() => {
            null == t || t(null != n ? n : null)
        }, [t, n]);
        let o = (0, r.useContext)(R);
        return (0, r.useMemo)(() => [o.setFloating, e ? o.styles : {}], [o.setFloating, e, o.styles])
    }, "useFloatingPanelProps", 0, function() {
        let {
            getFloatingProps: e,
            slot: t
        } = (0, r.useContext)(R);
        return (0, r.useCallback)((...n) => Object.assign({}, e(...n), {
            "data-anchor": t.anchor
        }), [e, t])
    }, "useFloatingReference", 0, function() {
        return (0, r.useContext)(R).setReference
    }, "useFloatingReferenceProps", 0, function() {
        return (0, r.useContext)(R).getReferenceProps
    }, "useResolvedAnchor", 0, function(e) {
        return (0, r.useMemo)(() => e ? "string" == typeof e ? {
            to: e
        } : e : null, [e])
    }], 315503)
}, 447105, e => {
    "use strict";
    var t = e.i(191788);

    function n(e, t) {
        return e ? e + "[" + t + "]" : t
    }
    e.s(["attemptSubmit", 0, function(e) {
        var t, n;
        let r = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
        if (r) {
            for (let t of r.elements)
                if (t !== e && ("INPUT" === t.tagName && "submit" === t.type || "BUTTON" === t.tagName && "submit" === t.type || "INPUT" === t.nodeName && "image" === t.type)) return void t.click();
            null == (n = r.requestSubmit) || n.call(r)
        }
    }, "objectToFormEntries", 0, function e(r = {}, o = null, i = []) {
        for (let [l, u] of Object.entries(r)) ! function r(o, i, l) {
            if (Array.isArray(l))
                for (let [e, t] of l.entries()) r(o, n(i, e.toString()), t);
            else l instanceof Date ? o.push([i, l.toISOString()]) : "boolean" == typeof l ? o.push([i, l ? "1" : "0"]) : "string" == typeof l ? o.push([i, l]) : "number" == typeof l ? o.push([i, `${l}`]) : null == l ? o.push([i, ""]) : function(e) {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                let t = Object.getPrototypeOf(e);
                return null === t || null === Object.getPrototypeOf(t)
            }(l) && !(0, t.isValidElement)(l) && e(l, i, o)
        }(i, n(o, l), u);
        return i
    }])
}, 321713, e => {
    "use strict";
    e.s(["classNames", 0, function(...e) {
        return Array.from(new Set(e.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
    }])
}, 778530, 774664, e => {
    "use strict";
    let t, n, r;
    var o = e.i(191788),
        i = e.i(321713),
        l = e.i(426417),
        u = ((t = u || {})[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t),
        s = ((n = s || {})[n.Unmount = 0] = "Unmount", n[n.Hidden = 1] = "Hidden", n);

    function a() {
        let e, t, n = (e = (0, o.useRef)([]), t = (0, o.useCallback)(t => {
            for (let n of e.current) null != n && ("function" == typeof n ? n(t) : n.current = t)
        }, []), (...n) => {
            if (!n.every(e => null == e)) return e.current = n, t
        });
        return (0, o.useCallback)(e => (function({
            ourProps: e,
            theirProps: t,
            slot: n,
            defaultTag: r,
            features: o,
            visible: i = !0,
            name: u,
            mergeRefs: s
        }) {
            s = null != s ? s : f;
            let a = d(t, e);
            if (i) return c(a, n, r, u, s);
            let p = null != o ? o : 0;
            if (2 & p) {
                let {
                    static: e = !1,
                    ...t
                } = a;
                if (e) return c(t, n, r, u, s)
            }
            if (1 & p) {
                let {
                    unmount: e = !0,
                    ...t
                } = a;
                return (0, l.match)(+!e, {
                    0: () => null,
                    1: () => c({ ...t,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }, n, r, u, s)
                })
            }
            return c(a, n, r, u, s)
        })({
            mergeRefs: n,
            ...e
        }), [n])
    }

    function c(e, t = {}, n, r, l) {
        let {
            as: u = n,
            children: s,
            refName: a = "ref",
            ...f
        } = h(e, ["unmount", "static"]), p = void 0 !== e.ref ? {
            [a]: e.ref
        } : {}, v = "function" == typeof s ? s(t) : s;
        "className" in f && f.className && "function" == typeof f.className && (f.className = f.className(t)), f["aria-labelledby"] && f["aria-labelledby"] === f.id && (f["aria-labelledby"] = void 0);
        let y = {};
        if (t) {
            let e = !1,
                n = [];
            for (let [r, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && n.push(r.replace(/([A-Z])/g, e => `-${e.toLowerCase()}`));
            if (e)
                for (let e of (y["data-headlessui-state"] = n.join(" "), n)) y[`data-${e}`] = ""
        }
        if (g(u) && (Object.keys(m(f)).length > 0 || Object.keys(m(y)).length > 0))
            if (!(0, o.isValidElement)(v) || Array.isArray(v) && v.length > 1 || g(v.type)) {
                if (Object.keys(m(f)).length > 0) throw Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m(f)).concat(Object.keys(m(y))).map(e => `  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`)].join(`
`))
            } else {
                var b;
                let e = v.props,
                    t = null == e ? void 0 : e.className,
                    n = "function" == typeof t ? (...e) => (0, i.classNames)(t(...e), f.className) : (0, i.classNames)(t, f.className),
                    r = d(v.props, m(h(f, ["ref"])));
                for (let e in y) e in r && delete y[e];
                return (0, o.cloneElement)(v, Object.assign({}, r, y, p, {
                    ref: l((b = v, o.default.version.split(".")[0] >= "19" ? b.props.ref : b.ref), p.ref)
                }, n ? {
                    className: n
                } : {}))
            }
        return (0, o.createElement)(u, Object.assign({}, h(f, ["ref"]), !g(u) && p, !g(u) && y), v)
    }

    function f(...e) {
        return e.every(e => null == e) ? void 0 : t => {
            for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
        }
    }

    function d(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
            n = {};
        for (let r of e)
            for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
        if (t.disabled || t["aria-disabled"])
            for (let e in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e) && (n[e] = [e => {
                var t;
                return null == (t = null == e ? void 0 : e.preventDefault) ? void 0 : t.call(e)
            }]);
        for (let e in n) Object.assign(t, {
            [e](t, ...r) {
                for (let o of n[e]) {
                    if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                    o(t, ...r)
                }
            }
        });
        return t
    }

    function p(e) {
        var t;
        return Object.assign((0, o.forwardRef)(e), {
            displayName: null != (t = e.displayName) ? t : e.name
        })
    }

    function m(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t
    }

    function h(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n
    }

    function g(e) {
        return e === o.Fragment || e === Symbol.for("react.fragment")
    }
    e.s(["RenderFeatures", 0, u, "RenderStrategy", 0, s, "compact", 0, m, "forwardRefWithAs", 0, p, "isFragment", 0, g, "mergeProps", 0, function(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
            n = {};
        for (let r of e)
            for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
        for (let e in n) Object.assign(t, {
            [e](...t) {
                for (let r of n[e]) null == r || r(...t)
            }
        });
        return t
    }, "useRender", 0, a], 774664);
    var v = ((r = v || {})[r.None = 1] = "None", r[r.Focusable = 2] = "Focusable", r[r.Hidden = 4] = "Hidden", r);
    let y = p(function(e, t) {
        var n;
        let {
            features: r = 1,
            ...o
        } = e, i = {
            ref: t,
            "aria-hidden": (2 & r) == 2 || (null != (n = o["aria-hidden"]) ? n : void 0),
            hidden: (4 & r) == 4 || void 0,
            style: {
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0",
                ...(4 & r) == 4 && (2 & r) != 2 && {
                    display: "none"
                }
            }
        };
        return a()({
            ourProps: i,
            theirProps: o,
            slot: {},
            defaultTag: "span",
            name: "Hidden"
        })
    });
    e.s(["Hidden", 0, y, "HiddenFeatures", 0, v], 778530)
}, 128708, 448714, e => {
    "use strict";
    var t = e.i(191788),
        n = e.i(730943),
        r = e.i(626171),
        o = e.i(447105),
        i = e.i(774664),
        l = e.i(778530);
    let u = (0, t.createContext)(null);

    function s({
        children: e
    }) {
        let r = (0, t.useContext)(u);
        if (!r) return t.default.createElement(t.default.Fragment, null, e);
        let {
            target: o
        } = r;
        return o ? (0, n.createPortal)(t.default.createElement(t.default.Fragment, null, e), o) : null
    }

    function a({
        setForm: e,
        formId: n
    }) {
        return (0, t.useEffect)(() => {
            if (n) {
                let t = document.getElementById(n);
                t && e(t)
            }
        }, [e, n]), n ? null : t.default.createElement(l.Hidden, {
            features: l.HiddenFeatures.Hidden,
            as: "input",
            type: "hidden",
            hidden: !0,
            readOnly: !0,
            ref: t => {
                if (!t) return;
                let n = t.closest("form");
                n && e(n)
            }
        })
    }
    e.s(["FormFields", 0, function({
        data: e,
        form: n,
        disabled: u,
        onReset: c,
        overrides: f
    }) {
        let [d, p] = (0, t.useState)(null), m = (0, r.useDisposables)();
        return (0, t.useEffect)(() => {
            if (c && d) return m.addEventListener(d, "reset", c)
        }, [d, n, c]), t.default.createElement(s, null, t.default.createElement(a, {
            setForm: p,
            formId: n
        }), (0, o.objectToFormEntries)(e).map(([e, r]) => t.default.createElement(l.Hidden, {
            features: l.HiddenFeatures.Hidden,
            ...(0, i.compact)({
                key: e,
                as: "input",
                type: "hidden",
                hidden: !0,
                readOnly: !0,
                form: n,
                disabled: u,
                name: e,
                value: r,
                ...f
            })
        })))
    }, "FormFieldsProvider", 0, function(e) {
        let [n, r] = (0, t.useState)(null);
        return t.default.createElement(u.Provider, {
            value: {
                target: n
            }
        }, e.children, t.default.createElement(l.Hidden, {
            features: l.HiddenFeatures.Hidden,
            ref: r
        }))
    }], 128708);
    let c = t.default.forwardRef(function({
        children: e,
        freeze: n
    }, r) {
        let o = f(n, e);
        return (0, t.isValidElement)(o) ? (0, t.cloneElement)(o, {
            ref: r
        }) : t.default.createElement(t.default.Fragment, null, o)
    });

    function f(e, n) {
        let [r, o] = (0, t.useState)(n);
        return e || r === n || o(n), e ? r : n
    }
    e.s(["Frozen", 0, c, "useFrozenData", 0, f], 448714)
}, 196061, e => {
    "use strict";
    var t = e.i(191788);
    let n = (0, t.createContext)(void 0);
    e.s(["IdProvider", 0, function({
        id: e,
        children: r
    }) {
        return t.default.createElement(n.Provider, {
            value: e
        }, r)
    }, "useProvidedId", 0, function() {
        return (0, t.useContext)(n)
    }])
}, 896694, e => {
    "use strict";
    let t;
    var n = e.i(191788);
    let r = (0, n.createContext)(null);
    r.displayName = "OpenClosedContext";
    var o = ((t = o || {})[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t);
    e.s(["OpenClosedProvider", 0, function({
        value: e,
        children: t
    }) {
        return n.default.createElement(r.Provider, {
            value: e
        }, t)
    }, "ResetOpenClosedProvider", 0, function({
        children: e
    }) {
        return n.default.createElement(r.Provider, {
            value: null
        }, e)
    }, "State", 0, o, "useOpenClosed", 0, function() {
        return (0, n.useContext)(r)
    }])
}, 387706, e => {
    "use strict";
    let t;
    var n = ((t = n || {})[t.First = 0] = "First", t[t.Previous = 1] = "Previous", t[t.Next = 2] = "Next", t[t.Last = 3] = "Last", t[t.Specific = 4] = "Specific", t[t.Nothing = 5] = "Nothing", t);
    e.s(["Focus", 0, n, "calculateActiveIndex", 0, function(e, t) {
        let n = t.resolveItems();
        if (n.length <= 0) return null;
        let r = t.resolveActiveIndex(),
            o = null != r ? r : -1;
        switch (e.focus) {
            case 0:
                for (let e = 0; e < n.length; ++e)
                    if (!t.resolveDisabled(n[e], e, n)) return e;
                return r;
            case 1:
                -1 === o && (o = n.length);
                for (let e = o - 1; e >= 0; --e)
                    if (!t.resolveDisabled(n[e], e, n)) return e;
                return r;
            case 2:
                for (let e = o + 1; e < n.length; ++e)
                    if (!t.resolveDisabled(n[e], e, n)) return e;
                return r;
            case 3:
                for (let e = n.length - 1; e >= 0; --e)
                    if (!t.resolveDisabled(n[e], e, n)) return e;
                return r;
            case 4:
                for (let r = 0; r < n.length; ++r)
                    if (t.resolveId(n[r], r, n) === e.id) return r;
                return r;
            case 5:
                return null;
            default:
                throw Error("Unexpected object: " + e)
        }
    }])
}, 472381, e => {
    "use strict";
    var t = e.i(191788),
        n = e.i(993481),
        r = e.i(264728),
        o = e.i(608404),
        i = e.i(156833),
        l = e.i(760360),
        u = e.i(774664);
    let s = (0, t.createContext)(null);
    s.displayName = "DescriptionContext";
    let a = Object.assign((0, u.forwardRefWithAs)(function(e, n) {
        let a = (0, t.useId)(),
            c = (0, l.useDisabled)(),
            {
                id: f = `headlessui-description-${a}`,
                ...d
            } = e,
            p = function e() {
                let n = (0, t.useContext)(s);
                if (null === n) {
                    let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
                }
                return n
            }(),
            m = (0, i.useSyncRefs)(n);
        (0, r.useIsoMorphicEffect)(() => p.register(f), [f, p.register]);
        let h = (0, o.useSlot)({ ...p.slot,
                disabled: c || !1
            }),
            g = {
                ref: m,
                ...p.props,
                id: f
            };
        return (0, u.useRender)()({
            ourProps: g,
            theirProps: d,
            slot: h,
            defaultTag: "p",
            name: p.name || "Description"
        })
    }), {});
    e.s(["Description", 0, a, "useDescribedBy", 0, function() {
        var e, n;
        return null != (n = null == (e = (0, t.useContext)(s)) ? void 0 : e.value) ? n : void 0
    }, "useDescriptions", 0, function() {
        let [e, r] = (0, t.useState)([]);
        return [e.length > 0 ? e.join(" ") : void 0, (0, t.useMemo)(() => function(e) {
            let o = (0, n.useEvent)(e => (r(t => [...t, e]), () => r(t => {
                    let n = t.slice(),
                        r = n.indexOf(e);
                    return -1 !== r && n.splice(r, 1), n
                }))),
                i = (0, t.useMemo)(() => ({
                    register: o,
                    slot: e.slot,
                    name: e.name,
                    props: e.props,
                    value: e.value
                }), [o, e.slot, e.name, e.props, e.value]);
            return t.default.createElement(s.Provider, {
                value: i
            }, e.children)
        }, [r])]
    }])
}, 78270, e => {
    "use strict";
    let t;
    var n = ((t = n || {}).Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t);
    e.s(["Keys", 0, n])
}, 709769, e => {
    "use strict";
    var t = e.i(191788),
        n = e.i(993481),
        r = e.i(264728),
        o = e.i(608404),
        i = e.i(156833),
        l = e.i(760360),
        u = e.i(196061),
        s = e.i(855367),
        a = e.i(774664);
    let c = (0, t.createContext)(null);

    function f() {
        let e = (0, t.useContext)(c);
        if (null === e) {
            let e = Error("You used a <Label /> component, but it is not inside a relevant parent.");
            throw Error.captureStackTrace && Error.captureStackTrace(e, f), e
        }
        return e
    }

    function d(e) {
        var n, r, o;
        let i = null != (r = null == (n = (0, t.useContext)(c)) ? void 0 : n.value) ? r : void 0;
        return (null != (o = null == e ? void 0 : e.length) ? o : 0) > 0 ? [i, ...e].filter(Boolean).join(" ") : i
    }
    c.displayName = "LabelContext";
    let p = Object.assign((0, a.forwardRefWithAs)(function(e, c) {
        var d;
        let p = (0, t.useId)(),
            m = f(),
            h = (0, u.useProvidedId)(),
            g = (0, l.useDisabled)(),
            {
                id: v = `headlessui-label-${p}`,
                htmlFor: y = null != h ? h : null == (d = m.props) ? void 0 : d.htmlFor,
                passive: b = !1,
                ...w
            } = e,
            E = (0, i.useSyncRefs)(c);
        (0, r.useIsoMorphicEffect)(() => m.register(v), [v, m.register]);
        let x = (0, n.useEvent)(e => {
                let t = e.currentTarget;
                if (!(e.target !== e.currentTarget && s.isInteractiveElement(e.target)) && (s.isHTMLLabelElement(t) && e.preventDefault(), m.props && "onClick" in m.props && "function" == typeof m.props.onClick && m.props.onClick(e), s.isHTMLLabelElement(t))) {
                    let e = document.getElementById(t.htmlFor);
                    if (e) {
                        let t = e.getAttribute("disabled");
                        if ("true" === t || "" === t) return;
                        let n = e.getAttribute("aria-disabled");
                        if ("true" === n || "" === n) return;
                        (s.isHTMLInputElement(e) && ("file" === e.type || "radio" === e.type || "checkbox" === e.type) || "radio" === e.role || "checkbox" === e.role || "switch" === e.role) && e.click(), e.focus({
                            preventScroll: !0
                        })
                    }
                }
            }),
            T = (0, o.useSlot)({ ...m.slot,
                disabled: g || !1
            }),
            S = {
                ref: E,
                ...m.props,
                id: v,
                htmlFor: y,
                onClick: x
            };
        return b && ("onClick" in S && (delete S.htmlFor, delete S.onClick), "onClick" in w && delete w.onClick), (0, a.useRender)()({
            ourProps: S,
            theirProps: w,
            slot: T,
            defaultTag: y ? "label" : "div",
            name: m.name || "Label"
        })
    }), {});
    e.s(["Label", 0, p, "useLabelContext", 0, f, "useLabelledBy", 0, d, "useLabels", 0, function({
        inherit: e = !1
    } = {}) {
        let r = d(),
            [o, i] = (0, t.useState)([]),
            l = e ? [r, ...o].filter(Boolean) : o;
        return [l.length > 0 ? l.join(" ") : void 0, (0, t.useMemo)(() => function(e) {
            let r = (0, n.useEvent)(e => (i(t => [...t, e]), () => i(t => {
                    let n = t.slice(),
                        r = n.indexOf(e);
                    return -1 !== r && n.splice(r, 1), n
                }))),
                o = (0, t.useMemo)(() => ({
                    register: r,
                    slot: e.slot,
                    name: e.name,
                    props: e.props,
                    value: e.value
                }), [r, e.slot, e.name, e.props, e.value]);
            return t.default.createElement(c.Provider, {
                value: o
            }, e.children)
        }, [i])]
    }])
}, 721867, e => {
    "use strict";
    var t = e.i(191788),
        n = e.i(638403),
        r = e.i(993481);
    e.s(["useOnUnmount", 0, function(e) {
        let o = (0, r.useEvent)(e),
            i = (0, t.useRef)(!1);
        (0, t.useEffect)(() => (i.current = !1, () => {
            i.current = !0, (0, n.microTask)(() => {
                i.current && o()
            })
        }), [o])
    }])
}, 375621, e => {
    "use strict";
    var t = e.i(191788);
    let n = (0, t.createContext)(!1);
    e.s(["ForcePortalRoot", 0, function(e) {
        return t.default.createElement(n.Provider, {
            value: e.force
        }, e.children)
    }, "usePortalRoot", 0, function() {
        return (0, t.useContext)(n)
    }])
}, 962750, e => {
    "use strict";
    var t = e.i(191788),
        n = e.i(730943),
        r = e.i(626171),
        o = e.i(993481),
        i = e.i(721867),
        l = e.i(476925),
        u = e.i(156833),
        s = e.i(375621),
        a = e.i(181093),
        c = e.i(774664);
    let f = t.Fragment,
        d = (0, c.forwardRefWithAs)(function(e, o) {
            let {
                ownerDocument: d = null,
                ...p
            } = e, g = (0, t.useRef)(null), v = (0, u.useSyncRefs)((0, u.optionalRef)(e => {
                g.current = e
            }), o), y = (0, l.useOwnerDocument)(g.current), b = function(e) {
                let n = (0, s.usePortalRoot)(),
                    r = (0, t.useContext)(m),
                    [o, i] = (0, t.useState)(() => {
                        var t;
                        if (!n && null !== r) return null != (t = r.current) ? t : null;
                        if (a.env.isServer) return null;
                        let o = null == e ? void 0 : e.getElementById("headlessui-portal-root");
                        if (o) return o;
                        if (null === e) return null;
                        let i = e.createElement("div");
                        return i.setAttribute("id", "headlessui-portal-root"), e.body.appendChild(i)
                    });
                return (0, t.useEffect)(() => {
                    null !== o && (null != e && e.body.contains(o) || null == e || e.body.appendChild(o))
                }, [o, e]), (0, t.useEffect)(() => {
                    n || null !== r && i(r.current)
                }, [r, i, n]), o
            }(null != d ? d : y), w = (0, t.useContext)(h), E = (0, r.useDisposables)(), x = (0, c.useRender)();
            return (0, i.useOnUnmount)(() => {
                var e;
                b && b.childNodes.length <= 0 && (null == (e = b.parentElement) || e.removeChild(b))
            }), b ? (0, n.createPortal)(t.default.createElement("div", {
                "data-headlessui-portal": "",
                ref: e => {
                    E.dispose(), w && e && E.add(w.register(e))
                }
            }, x({
                ourProps: {
                    ref: v
                },
                theirProps: p,
                slot: {},
                defaultTag: f,
                name: "Portal"
            })), b) : null
        }),
        p = t.Fragment,
        m = (0, t.createContext)(null),
        h = (0, t.createContext)(null),
        g = (0, c.forwardRefWithAs)(function(e, n) {
            let r = (0, u.useSyncRefs)(n),
                {
                    enabled: o = !0,
                    ownerDocument: i,
                    ...l
                } = e,
                s = (0, c.useRender)();
            return o ? t.default.createElement(d, { ...l,
                ownerDocument: i,
                ref: r
            }) : s({
                ourProps: {
                    ref: r
                },
                theirProps: l,
                slot: {},
                defaultTag: f,
                name: "Portal"
            })
        }),
        v = (0, c.forwardRefWithAs)(function(e, n) {
            let {
                target: r,
                ...o
            } = e, i = {
                ref: (0, u.useSyncRefs)(n)
            }, l = (0, c.useRender)();
            return t.default.createElement(m.Provider, {
                value: r
            }, l({
                ourProps: i,
                theirProps: o,
                defaultTag: p,
                name: "Popover.Group"
            }))
        }),
        y = Object.assign(g, {
            Group: v
        });
    e.s(["Portal", 0, y, "PortalGroup", 0, v, "useNestedPortals", 0, function() {
        let e = (0, t.useContext)(h),
            n = (0, t.useRef)([]),
            r = (0, o.useEvent)(t => (n.current.push(t), e && e.register(t), () => i(t))),
            i = (0, o.useEvent)(t => {
                let r = n.current.indexOf(t); - 1 !== r && n.current.splice(r, 1), e && e.unregister(t)
            }),
            l = (0, t.useMemo)(() => ({
                register: r,
                unregister: i,
                portals: n
            }), [r, i, n]);
        return [n, (0, t.useMemo)(() => function({
            children: e
        }) {
            return t.default.createElement(h.Provider, {
                value: l
            }, e)
        }, [l])]
    }])
}, 161614, e => {
    "use strict";
    var t = e.i(760004);

    function n(e) {
        let t = e.getBoundingClientRect();
        return `${t.x},${t.y}`
    }
    e.s(["ElementPositionState", 0, {
        Idle: {
            kind: "Idle"
        },
        Tracked: e => ({
            kind: "Tracked",
            position: e
        }),
        Moved: {
            kind: "Moved"
        }
    }, "computeVisualPosition", 0, n, "detectMovement", 0, function(e, r, o) {
        let i = (0, t.disposables)();
        if ("Tracked" === r.kind) {
            let t = function() {
                    l !== n(e) && (i.dispose(), o())
                },
                {
                    position: l
                } = r,
                u = new ResizeObserver(t);
            u.observe(e), i.add(() => u.disconnect()), i.addEventListener(window, "scroll", t, {
                passive: !0
            }), i.addEventListener(window, "resize", t)
        }
        return () => i.dispose()
    }])
}, 785046, e => {
    "use strict";
    var t = e.i(191788),
        n = e.i(264728);
    e.s(["useIsMounted", 0, function() {
        let e = (0, t.useRef)(!1);
        return (0, n.useIsoMorphicEffect)(() => (e.current = !0, () => {
            e.current = !1
        }), []), e
    }])
}]);

//# sourceMappingURL=10e6tg_n1x8ud.js.map