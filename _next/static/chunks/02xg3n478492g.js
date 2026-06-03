(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 791300, 333490, 499237, 686167, 106937, e => {
    "use strict";
    let t = globalThis,
        r = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        i = Symbol(),
        n = new WeakMap;
    class s {
        constructor(e, t, r) {
            if (this._$cssResult$ = !0, r !== i) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = e, this.t = t
        }
        get styleSheet() {
            let e = this.o,
                t = this.t;
            if (r && void 0 === e) {
                let r = void 0 !== t && 1 === t.length;
                r && (e = n.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), r && n.set(t, e))
            }
            return e
        }
        toString() {
            return this.cssText
        }
    }
    let l = e => new s("string" == typeof e ? e : e + "", void 0, i),
        a = (e, i) => {
            if (r) e.adoptedStyleSheets = i.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet);
            else
                for (let r of i) {
                    let i = document.createElement("style"),
                        n = t.litNonce;
                    void 0 !== n && i.setAttribute("nonce", n), i.textContent = r.cssText, e.appendChild(i)
                }
        },
        o = r ? e => e : e => e instanceof CSSStyleSheet ? (e => {
            let t = "";
            for (let r of e.cssRules) t += r.cssText;
            return l(t)
        })(e) : e;
    e.s(["adoptStyles", 0, a, "css", 0, (e, ...t) => new s(1 === e.length ? e[0] : t.reduce((t, r, i) => t + (e => {
        if (!0 === e._$cssResult$) return e.cssText;
        if ("number" == typeof e) return e;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
    })(r) + e[i + 1], e[0]), e, i), "getCompatibleStyle", 0, o, "unsafeCSS", 0, l], 333490);
    let {
        is: c,
        defineProperty: d,
        getOwnPropertyDescriptor: u,
        getOwnPropertyNames: h,
        getOwnPropertySymbols: f,
        getPrototypeOf: p
    } = Object, m = globalThis, v = m.trustedTypes, g = v ? v.emptyScript : "", y = m.reactiveElementPolyfillSupport, b = {
        toAttribute(e, t) {
            switch (t) {
                case Boolean:
                    e = e ? g : null;
                    break;
                case Object:
                case Array:
                    e = null == e ? e : JSON.stringify(e)
            }
            return e
        },
        fromAttribute(e, t) {
            let r = e;
            switch (t) {
                case Boolean:
                    r = null !== e;
                    break;
                case Number:
                    r = null === e ? null : Number(e);
                    break;
                case Object:
                case Array:
                    try {
                        r = JSON.parse(e)
                    } catch (e) {
                        r = null
                    }
            }
            return r
        }
    }, x = (e, t) => !c(e, t), _ = {
        attribute: !0,
        type: String,
        converter: b,
        reflect: !1,
        useDefault: !1,
        hasChanged: x
    };
    Symbol.metadata ? ? = Symbol("metadata"), m.litPropertyMetadata ? ? = new WeakMap;
    class w extends HTMLElement {
        static addInitializer(e) {
            this._$Ei(), (this.l ? ? = []).push(e)
        }
        static get observedAttributes() {
            return this.finalize(), this._$Eh && [...this._$Eh.keys()]
        }
        static createProperty(e, t = _) {
            if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
                let r = Symbol(),
                    i = this.getPropertyDescriptor(e, r, t);
                void 0 !== i && d(this.prototype, e, i)
            }
        }
        static getPropertyDescriptor(e, t, r) {
            let {
                get: i,
                set: n
            } = u(this.prototype, e) ? ? {
                get() {
                    return this[t]
                },
                set(e) {
                    this[t] = e
                }
            };
            return {
                get: i,
                set(t) {
                    let s = i ? .call(this);
                    n ? .call(this, t), this.requestUpdate(e, s, r)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(e) {
            return this.elementProperties.get(e) ? ? _
        }
        static _$Ei() {
            if (this.hasOwnProperty("elementProperties")) return;
            let e = p(this);
            e.finalize(), void 0 !== e.l && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties)
        }
        static finalize() {
            if (this.hasOwnProperty("finalized")) return;
            if (this.finalized = !0, this._$Ei(), this.hasOwnProperty("properties")) {
                let e = this.properties;
                for (let t of [...h(e), ...f(e)]) this.createProperty(t, e[t])
            }
            let e = this[Symbol.metadata];
            if (null !== e) {
                let t = litPropertyMetadata.get(e);
                if (void 0 !== t)
                    for (let [e, r] of t) this.elementProperties.set(e, r)
            }
            for (let [e, t] of (this._$Eh = new Map, this.elementProperties)) {
                let r = this._$Eu(e, t);
                void 0 !== r && this._$Eh.set(r, e)
            }
            this.elementStyles = this.finalizeStyles(this.styles)
        }
        static finalizeStyles(e) {
            let t = [];
            if (Array.isArray(e))
                for (let r of new Set(e.flat(1 / 0).reverse())) t.unshift(o(r));
            else void 0 !== e && t.push(o(e));
            return t
        }
        static _$Eu(e, t) {
            let r = t.attribute;
            return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof e ? e.toLowerCase() : void 0
        }
        constructor() {
            super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev()
        }
        _$Ev() {
            this._$ES = new Promise(e => this.enableUpdating = e), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l ? .forEach(e => e(this))
        }
        addController(e) {
            (this._$EO ? ? = new Set).add(e), void 0 !== this.renderRoot && this.isConnected && e.hostConnected ? .()
        }
        removeController(e) {
            this._$EO ? .delete(e)
        }
        _$E_() {
            let e = new Map;
            for (let t of this.constructor.elementProperties.keys()) this.hasOwnProperty(t) && (e.set(t, this[t]), delete this[t]);
            e.size > 0 && (this._$Ep = e)
        }
        createRenderRoot() {
            let e = this.shadowRoot ? ? this.attachShadow(this.constructor.shadowRootOptions);
            return a(e, this.constructor.elementStyles), e
        }
        connectedCallback() {
            this.renderRoot ? ? = this.createRenderRoot(), this.enableUpdating(!0), this._$EO ? .forEach(e => e.hostConnected ? .())
        }
        enableUpdating(e) {}
        disconnectedCallback() {
            this._$EO ? .forEach(e => e.hostDisconnected ? .())
        }
        attributeChangedCallback(e, t, r) {
            this._$AK(e, r)
        }
        _$ET(e, t) {
            let r = this.constructor.elementProperties.get(e),
                i = this.constructor._$Eu(e, r);
            if (void 0 !== i && !0 === r.reflect) {
                let n = (void 0 !== r.converter ? .toAttribute ? r.converter : b).toAttribute(t, r.type);
                this._$Em = e, null == n ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null
            }
        }
        _$AK(e, t) {
            let r = this.constructor,
                i = r._$Eh.get(e);
            if (void 0 !== i && this._$Em !== i) {
                let e = r.getPropertyOptions(i),
                    n = "function" == typeof e.converter ? {
                        fromAttribute: e.converter
                    } : void 0 !== e.converter ? .fromAttribute ? e.converter : b;
                this._$Em = i;
                let s = n.fromAttribute(t, e.type);
                this[i] = s ? ? this._$Ej ? .get(i) ? ? s, this._$Em = null
            }
        }
        requestUpdate(e, t, r) {
            if (void 0 !== e) {
                let i = this.constructor,
                    n = this[e];
                if (!(((r ? ? = i.getPropertyOptions(e)).hasChanged ? ? x)(n, t) || r.useDefault && r.reflect && n === this._$Ej ? .get(e) && !this.hasAttribute(i._$Eu(e, r)))) return;
                this.C(e, t, r)
            }!1 === this.isUpdatePending && (this._$ES = this._$EP())
        }
        C(e, t, {
            useDefault: r,
            reflect: i,
            wrapped: n
        }, s) {
            r && !(this._$Ej ? ? = new Map).has(e) && (this._$Ej.set(e, s ? ? t ? ? this[e]), !0 !== n || void 0 !== s) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), !0 === i && this._$Em !== e && (this._$Eq ? ? = new Set).add(e))
        }
        async _$EP() {
            this.isUpdatePending = !0;
            try {
                await this._$ES
            } catch (e) {
                Promise.reject(e)
            }
            let e = this.scheduleUpdate();
            return null != e && await e, !this.isUpdatePending
        }
        scheduleUpdate() {
            return this.performUpdate()
        }
        performUpdate() {
            if (!this.isUpdatePending) return;
            if (!this.hasUpdated) {
                if (this.renderRoot ? ? = this.createRenderRoot(), this._$Ep) {
                    for (let [e, t] of this._$Ep) this[e] = t;
                    this._$Ep = void 0
                }
                let e = this.constructor.elementProperties;
                if (e.size > 0)
                    for (let [t, r] of e) {
                        let {
                            wrapped: e
                        } = r, i = this[t];
                        !0 !== e || this._$AL.has(t) || void 0 === i || this.C(t, void 0, r, i)
                    }
            }
            let e = !1,
                t = this._$AL;
            try {
                (e = this.shouldUpdate(t)) ? (this.willUpdate(t), this._$EO ? .forEach(e => e.hostUpdate ? .()), this.update(t)) : this._$EM()
            } catch (t) {
                throw e = !1, this._$EM(), t
            }
            e && this._$AE(t)
        }
        willUpdate(e) {}
        _$AE(e) {
            this._$EO ? .forEach(e => e.hostUpdated ? .()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
        }
        _$EM() {
            this._$AL = new Map, this.isUpdatePending = !1
        }
        get updateComplete() {
            return this.getUpdateComplete()
        }
        getUpdateComplete() {
            return this._$ES
        }
        shouldUpdate(e) {
            return !0
        }
        update(e) {
            this._$Eq && = this._$Eq.forEach(e => this._$ET(e, this[e])), this._$EM()
        }
        updated(e) {}
        firstUpdated(e) {}
    }
    w.elementStyles = [], w.shadowRootOptions = {
        mode: "open"
    }, w.elementProperties = new Map, w.finalized = new Map, y ? .({
        ReactiveElement: w
    }), (m.reactiveElementVersions ? ? = []).push("2.1.1"), e.s(["ReactiveElement", 0, w, "defaultConverter", 0, b, "notEqual", 0, x], 499237);
    let C = globalThis,
        E = C.trustedTypes,
        j = E ? E.createPolicy("lit-html", {
            createHTML: e => e
        }) : void 0,
        N = "$lit$",
        A = `lit$${Math.random().toFixed(9).slice(2)}$`,
        $ = "?" + A,
        O = `<${$}>`,
        S = document,
        k = () => S.createComment(""),
        T = e => null === e || "object" != typeof e && "function" != typeof e,
        P = Array.isArray,
        L = e => P(e) || "function" == typeof e ? .[Symbol.iterator],
        R = "[ 	\n\f\r]",
        M = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        U = /-->/g,
        I = />/g,
        D = RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
        H = /'/g,
        z = /"/g,
        W = /^(?:script|style|textarea|title)$/i,
        B = e => (t, ...r) => ({
            _$litType$: e,
            strings: t,
            values: r
        }),
        V = B(1),
        F = B(2),
        q = (B(3), Symbol.for("lit-noChange")),
        K = Symbol.for("lit-nothing"),
        Q = new WeakMap,
        Y = S.createTreeWalker(S, 129);

    function J(e, t) {
        if (!P(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
        return void 0 !== j ? j.createHTML(t) : t
    }
    let X = (e, t) => {
        let r = e.length - 1,
            i = [],
            n, s = 2 === t ? "<svg>" : 3 === t ? "<math>" : "",
            l = M;
        for (let t = 0; t < r; t++) {
            let r = e[t],
                a, o, c = -1,
                d = 0;
            for (; d < r.length && (l.lastIndex = d, null !== (o = l.exec(r)));) d = l.lastIndex, l === M ? "!--" === o[1] ? l = U : void 0 !== o[1] ? l = I : void 0 !== o[2] ? (W.test(o[2]) && (n = RegExp("</" + o[2], "g")), l = D) : void 0 !== o[3] && (l = D) : l === D ? ">" === o[0] ? (l = n ? ? M, c = -1) : void 0 === o[1] ? c = -2 : (c = l.lastIndex - o[2].length, a = o[1], l = void 0 === o[3] ? D : '"' === o[3] ? z : H) : l === z || l === H ? l = D : l === U || l === I ? l = M : (l = D, n = void 0);
            let u = l === D && e[t + 1].startsWith("/>") ? " " : "";
            s += l === M ? r + O : c >= 0 ? (i.push(a), r.slice(0, c) + N + r.slice(c) + A + u) : r + A + (-2 === c ? t : u)
        }
        return [J(e, s + (e[r] || "<?>") + (2 === t ? "</svg>" : 3 === t ? "</math>" : "")), i]
    };
    class G {
        constructor({
            strings: e,
            _$litType$: t
        }, r) {
            let i;
            this.parts = [];
            let n = 0,
                s = 0;
            const l = e.length - 1,
                a = this.parts,
                [o, c] = X(e, t);
            if (this.el = G.createElement(o, r), Y.currentNode = this.el.content, 2 === t || 3 === t) {
                const e = this.el.content.firstChild;
                e.replaceWith(...e.childNodes)
            }
            for (; null !== (i = Y.nextNode()) && a.length < l;) {
                if (1 === i.nodeType) {
                    if (i.hasAttributes())
                        for (const e of i.getAttributeNames())
                            if (e.endsWith(N)) {
                                const t = c[s++],
                                    r = i.getAttribute(e).split(A),
                                    l = /([.?@])?(.*)/.exec(t);
                                a.push({
                                    type: 1,
                                    index: n,
                                    name: l[2],
                                    strings: r,
                                    ctor: "." === l[1] ? ei : "?" === l[1] ? en : "@" === l[1] ? es : er
                                }), i.removeAttribute(e)
                            } else e.startsWith(A) && (a.push({
                                type: 6,
                                index: n
                            }), i.removeAttribute(e));
                    if (W.test(i.tagName)) {
                        const e = i.textContent.split(A),
                            t = e.length - 1;
                        if (t > 0) {
                            i.textContent = E ? E.emptyScript : "";
                            for (let r = 0; r < t; r++) i.append(e[r], k()), Y.nextNode(), a.push({
                                type: 2,
                                index: ++n
                            });
                            i.append(e[t], k())
                        }
                    }
                } else if (8 === i.nodeType)
                    if (i.data === $) a.push({
                        type: 2,
                        index: n
                    });
                    else {
                        let e = -1;
                        for (; - 1 !== (e = i.data.indexOf(A, e + 1));) a.push({
                            type: 7,
                            index: n
                        }), e += A.length - 1
                    }
                n++
            }
        }
        static createElement(e, t) {
            let r = S.createElement("template");
            return r.innerHTML = e, r
        }
    }

    function Z(e, t, r = e, i) {
        if (t === q) return t;
        let n = void 0 !== i ? r._$Co ? .[i] : r._$Cl,
            s = T(t) ? void 0 : t._$litDirective$;
        return n ? .constructor !== s && (n ? ._$AO ? .(!1), void 0 === s ? n = void 0 : (n = new s(e))._$AT(e, r, i), void 0 !== i ? (r._$Co ? ? = [])[i] = n : r._$Cl = n), void 0 !== n && (t = Z(e, n._$AS(e, t.values), n, i)), t
    }
    class ee {
        constructor(e, t) {
            this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
        }
        get parentNode() {
            return this._$AM.parentNode
        }
        get _$AU() {
            return this._$AM._$AU
        }
        u(e) {
            let {
                el: {
                    content: t
                },
                parts: r
            } = this._$AD, i = (e ? .creationScope ? ? S).importNode(t, !0);
            Y.currentNode = i;
            let n = Y.nextNode(),
                s = 0,
                l = 0,
                a = r[0];
            for (; void 0 !== a;) {
                if (s === a.index) {
                    let t;
                    2 === a.type ? t = new et(n, n.nextSibling, this, e) : 1 === a.type ? t = new a.ctor(n, a.name, a.strings, this, e) : 6 === a.type && (t = new el(n, this, e)), this._$AV.push(t), a = r[++l]
                }
                s !== a ? .index && (n = Y.nextNode(), s++)
            }
            return Y.currentNode = S, i
        }
        p(e) {
            let t = 0;
            for (let r of this._$AV) void 0 !== r && (void 0 !== r.strings ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++
        }
    }
    class et {
        get _$AU() {
            return this._$AM ? ._$AU ? ? this._$Cv
        }
        constructor(e, t, r, i) {
            this.type = 2, this._$AH = K, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = i, this._$Cv = i ? .isConnected ? ? !0
        }
        get parentNode() {
            let e = this._$AA.parentNode,
                t = this._$AM;
            return void 0 !== t && 11 === e ? .nodeType && (e = t.parentNode), e
        }
        get startNode() {
            return this._$AA
        }
        get endNode() {
            return this._$AB
        }
        _$AI(e, t = this) {
            T(e = Z(this, e, t)) ? e === K || null == e || "" === e ? (this._$AH !== K && this._$AR(), this._$AH = K) : e !== this._$AH && e !== q && this._(e) : void 0 !== e._$litType$ ? this.$(e) : void 0 !== e.nodeType ? this.T(e) : L(e) ? this.k(e) : this._(e)
        }
        O(e) {
            return this._$AA.parentNode.insertBefore(e, this._$AB)
        }
        T(e) {
            this._$AH !== e && (this._$AR(), this._$AH = this.O(e))
        }
        _(e) {
            this._$AH !== K && T(this._$AH) ? this._$AA.nextSibling.data = e : this.T(S.createTextNode(e)), this._$AH = e
        }
        $(e) {
            let {
                values: t,
                _$litType$: r
            } = e, i = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = G.createElement(J(r.h, r.h[0]), this.options)), r);
            if (this._$AH ? ._$AD === i) this._$AH.p(t);
            else {
                let e = new ee(i, this),
                    r = e.u(this.options);
                e.p(t), this.T(r), this._$AH = e
            }
        }
        _$AC(e) {
            let t = Q.get(e.strings);
            return void 0 === t && Q.set(e.strings, t = new G(e)), t
        }
        k(e) {
            P(this._$AH) || (this._$AH = [], this._$AR());
            let t = this._$AH,
                r, i = 0;
            for (let n of e) i === t.length ? t.push(r = new et(this.O(k()), this.O(k()), this, this.options)) : r = t[i], r._$AI(n), i++;
            i < t.length && (this._$AR(r && r._$AB.nextSibling, i), t.length = i)
        }
        _$AR(e = this._$AA.nextSibling, t) {
            for (this._$AP ? .(!1, !0, t); e !== this._$AB;) {
                let t = e.nextSibling;
                e.remove(), e = t
            }
        }
        setConnected(e) {
            void 0 === this._$AM && (this._$Cv = e, this._$AP ? .(e))
        }
    }
    class er {
        get tagName() {
            return this.element.tagName
        }
        get _$AU() {
            return this._$AM._$AU
        }
        constructor(e, t, r, i, n) {
            this.type = 1, this._$AH = K, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = n, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = K
        }
        _$AI(e, t = this, r, i) {
            let n = this.strings,
                s = !1;
            if (void 0 === n)(s = !T(e = Z(this, e, t, 0)) || e !== this._$AH && e !== q) && (this._$AH = e);
            else {
                let i, l, a = e;
                for (e = n[0], i = 0; i < n.length - 1; i++)(l = Z(this, a[r + i], t, i)) === q && (l = this._$AH[i]), s || = !T(l) || l !== this._$AH[i], l === K ? e = K : e !== K && (e += (l ? ? "") + n[i + 1]), this._$AH[i] = l
            }
            s && !i && this.j(e)
        }
        j(e) {
            e === K ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ? ? "")
        }
    }
    class ei extends er {
        constructor() {
            super(...arguments), this.type = 3
        }
        j(e) {
            this.element[this.name] = e === K ? void 0 : e
        }
    }
    class en extends er {
        constructor() {
            super(...arguments), this.type = 4
        }
        j(e) {
            this.element.toggleAttribute(this.name, !!e && e !== K)
        }
    }
    class es extends er {
        constructor(e, t, r, i, n) {
            super(e, t, r, i, n), this.type = 5
        }
        _$AI(e, t = this) {
            if ((e = Z(this, e, t, 0) ? ? K) === q) return;
            let r = this._$AH,
                i = e === K && r !== K || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive,
                n = e !== K && (r === K || i);
            i && this.element.removeEventListener(this.name, this, r), n && this.element.addEventListener(this.name, this, e), this._$AH = e
        }
        handleEvent(e) {
            "function" == typeof this._$AH ? this._$AH.call(this.options ? .host ? ? this.element, e) : this._$AH.handleEvent(e)
        }
    }
    class el {
        constructor(e, t, r) {
            this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r
        }
        get _$AU() {
            return this._$AM._$AU
        }
        _$AI(e) {
            Z(this, e)
        }
    }
    let ea = C.litHtmlPolyfillSupport;
    ea ? .(G, et), (C.litHtmlVersions ? ? = []).push("3.3.1");
    let eo = (e, t, r) => {
        let i = r ? .renderBefore ? ? t,
            n = i._$litPart$;
        if (void 0 === n) {
            let e = r ? .renderBefore ? ? null;
            i._$litPart$ = n = new et(t.insertBefore(k(), e), e, void 0, r ? ? {})
        }
        return n._$AI(e), n
    };
    e.s(["_$LH", 0, {
        M: N,
        P: A,
        A: $,
        C: 1,
        L: X,
        R: ee,
        D: L,
        V: Z,
        I: et,
        H: er,
        N: en,
        U: es,
        B: ei,
        F: el
    }, "html", 0, V, "noChange", 0, q, "nothing", 0, K, "render", 0, eo, "svg", 0, F], 686167);
    let ec = globalThis;
    class ed extends w {
        constructor() {
            super(...arguments), this.renderOptions = {
                host: this
            }, this._$Do = void 0
        }
        createRenderRoot() {
            let e = super.createRenderRoot();
            return this.renderOptions.renderBefore ? ? = e.firstChild, e
        }
        update(e) {
            let t = this.render();
            this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = eo(t, this.renderRoot, this.renderOptions)
        }
        connectedCallback() {
            super.connectedCallback(), this._$Do ? .setConnected(!0)
        }
        disconnectedCallback() {
            super.disconnectedCallback(), this._$Do ? .setConnected(!1)
        }
        render() {
            return q
        }
    }
    ed._$litElement$ = !0, ed.finalized = !0, ec.litElementHydrateSupport ? .({
        LitElement: ed
    });
    let eu = ec.litElementPolyfillSupport;
    eu ? .({
        LitElement: ed
    }), (ec.litElementVersions ? ? = []).push("4.2.1"), e.s(["LitElement", 0, ed], 106937), e.s([], 791300)
}, 679753, (e, t, r) => {
    "use strict";
    var i, n = "object" == typeof Reflect ? Reflect : null,
        s = n && "function" == typeof n.apply ? n.apply : function(e, t, r) {
            return Function.prototype.apply.call(e, t, r)
        };
    i = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : function(e) {
        return Object.getOwnPropertyNames(e)
    };
    var l = Number.isNaN || function(e) {
        return e != e
    };

    function a() {
        a.init.call(this)
    }
    t.exports = a, t.exports.once = function(e, t) {
        return new Promise(function(r, i) {
            var n, s, l;

            function a(r) {
                e.removeListener(t, o), i(r)
            }

            function o() {
                "function" == typeof e.removeListener && e.removeListener("error", a), r([].slice.call(arguments))
            }
            g(e, t, o, {
                once: !0
            }), "error" !== t && (n = e, s = a, l = {
                once: !0
            }, "function" == typeof n.on && g(n, "error", s, l))
        })
    }, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var o = 10;

    function c(e) {
        if ("function" != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }

    function d(e) {
        return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
    }

    function u(e, t, r, i) {
        if (c(r), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), s = e._events), l = s[t]), void 0 === l) l = s[t] = r, ++e._eventsCount;
        else if ("function" == typeof l ? l = s[t] = i ? [r, l] : [l, r] : i ? l.unshift(r) : l.push(r), (n = d(e)) > 0 && l.length > n && !l.warned) {
            l.warned = !0;
            var n, s, l, a = Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = l.length, console && console.warn && console.warn(a)
        }
        return e
    }

    function h() {
        if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function f(e, t, r) {
        var i = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            n = h.bind(i);
        return n.listener = r, i.wrapFn = n, n
    }

    function p(e, t, r) {
        var i = e._events;
        if (void 0 === i) return [];
        var n = i[t];
        return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? function(e) {
            for (var t = Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
            return t
        }(n) : v(n, n.length)
    }

    function m(e) {
        var t = this._events;
        if (void 0 !== t) {
            var r = t[e];
            if ("function" == typeof r) return 1;
            if (void 0 !== r) return r.length
        }
        return 0
    }

    function v(e, t) {
        for (var r = Array(t), i = 0; i < t; ++i) r[i] = e[i];
        return r
    }

    function g(e, t, r, i) {
        if ("function" == typeof e.on) i.once ? e.once(t, r) : e.on(t, r);
        else if ("function" == typeof e.addEventListener) e.addEventListener(t, function n(s) {
            i.once && e.removeEventListener(t, n), r(s)
        });
        else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return o
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || l(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            o = e
        }
    }), a.init = function() {
        (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, a.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || l(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    }, a.prototype.getMaxListeners = function() {
        return d(this)
    }, a.prototype.emit = function(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
        var i = "error" === e,
            n = this._events;
        if (void 0 !== n) i = i && void 0 === n.error;
        else if (!i) return !1;
        if (i) {
            if (t.length > 0 && (l = t[0]), l instanceof Error) throw l;
            var l, a = Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
            throw a.context = l, a
        }
        var o = n[e];
        if (void 0 === o) return !1;
        if ("function" == typeof o) s(o, this, t);
        else
            for (var c = o.length, d = v(o, c), r = 0; r < c; ++r) s(d[r], this, t);
        return !0
    }, a.prototype.addListener = function(e, t) {
        return u(this, e, t, !1)
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(e, t) {
        return u(this, e, t, !0)
    }, a.prototype.once = function(e, t) {
        return c(t), this.on(e, f(this, e, t)), this
    }, a.prototype.prependOnceListener = function(e, t) {
        return c(t), this.prependListener(e, f(this, e, t)), this
    }, a.prototype.removeListener = function(e, t) {
        var r, i, n, s, l;
        if (c(t), void 0 === (i = this._events) || void 0 === (r = i[e])) return this;
        if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
        else if ("function" != typeof r) {
            for (n = -1, s = r.length - 1; s >= 0; s--)
                if (r[s] === t || r[s].listener === t) {
                    l = r[s].listener, n = s;
                    break
                }
            if (n < 0) return this;
            0 === n ? r.shift() : function(e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop()
            }(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, l || t)
        }
        return this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(e) {
        var t, r, i;
        if (void 0 === (r = this._events)) return this;
        if (void 0 === r.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
        if (0 == arguments.length) {
            var n, s = Object.keys(r);
            for (i = 0; i < s.length; ++i) "removeListener" !== (n = s[i]) && this.removeAllListeners(n);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof(t = r[e])) this.removeListener(e, t);
        else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
        return this
    }, a.prototype.listeners = function(e) {
        return p(this, e, !0)
    }, a.prototype.rawListeners = function(e) {
        return p(this, e, !1)
    }, a.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : m.call(e, t)
    }, a.prototype.listenerCount = m, a.prototype.eventNames = function() {
        return this._eventsCount > 0 ? i(this._events) : []
    }
}, 840387, (e, t, r) => {
    "function" == typeof Object.create ? t.exports = function(e, t) {
        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    } : t.exports = function(e, t) {
        if (t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        }
    }
}, 937412, 339668, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        i = e.i(870155),
        n = e.i(495854);
    e.i(828684);
    var s = e.i(454720),
        l = e.i(126019);
    e.i(108399);
    var a = e.i(860231),
        o = e.i(41158);

    function c(e) {
        let i, s, c, d, u, h, f, p, m, v, g = (0, r.c)(25),
            {
                image: y,
                hideImageMobile: b,
                text: x,
                subText: _,
                hasDrawer: w,
                link: C,
                isClickable: E
            } = e;
        return g[0] !== b || g[1] !== y ? (i = y && "object" == typeof y && (0, t.jsx)(l.default, {
            src: y.url,
            alt: y.title || "",
            height: 40,
            width: 40,
            className: (0, n.default)("md:flex", b && "hidden")
        }), g[0] = b, g[1] = y, g[2] = i) : i = g[2], g[3] !== y ? (s = "string" == typeof y && (0, t.jsx)(a.default, {
            name: y,
            size: 20,
            strokeWidth: 3.5
        }), g[3] = y, g[4] = s) : s = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, n.default)("flex flex-col items-start gap-1"), d = (0, n.default)("text-start"), g[5] = c, g[6] = d) : (c = g[5], d = g[6]), g[7] !== x ? (u = (0, t.jsx)("span", {
            className: d,
            children: x
        }), g[7] = x, g[8] = u) : u = g[8], g[9] !== _ ? (h = _ && (0, t.jsx)("span", {
            className: (0, n.default)("text-start"),
            children: _
        }), g[9] = _, g[10] = h) : h = g[10], g[11] !== w || g[12] !== C ? (f = !w && C ? .url && (0, t.jsx)(o.default, {
            href: C.url,
            className: "underline",
            children: C.label
        }), g[11] = w, g[12] = C, g[13] = f) : f = g[13], g[14] !== u || g[15] !== h || g[16] !== f ? (p = (0, t.jsxs)("div", {
            className: c,
            children: [u, h, f]
        }), g[14] = u, g[15] = h, g[16] = f, g[17] = p) : p = g[17], g[18] !== E ? (m = E && (0, t.jsx)("span", {
            className: "ms-auto",
            children: (0, t.jsx)(a.default, {
                name: "arrowRight",
                size: 20,
                strokeWidth: 3.5
            })
        }), g[18] = E, g[19] = m) : m = g[19], g[20] !== i || g[21] !== s || g[22] !== p || g[23] !== m ? (v = (0, t.jsxs)(t.Fragment, {
            children: [i, s, p, m]
        }), g[20] = i, g[21] = s, g[22] = p, g[23] = m, g[24] = v) : v = g[24], v
    }
    e.s(["default", 0, e => {
        var l;
        let a, o, d, u, h, f, p = (0, r.c)(37),
            {
                text: m,
                subText: v,
                link: g,
                image: y,
                theme: b,
                isFull: x,
                hideImageMobile: _,
                textSize: w,
                onClick: C
            } = e,
            E = void 0 === b ? "light" : b,
            j = void 0 !== _ && _;
        p[0] !== m ? (a = (0, i.default)(m, {
            font: "bold"
        }), p[0] = m, p[1] = a) : a = p[1];
        let N = a;
        p[2] !== v ? (o = (0, i.default)(v, {
            font: "bold"
        }), p[2] = v, p[3] = o) : o = p[3];
        let A = o;
        if (!m) return null;
        p[4] !== g ? (d = !!((l = g) && l.dynamicDrawerContent && l.dynamicDrawerContent.length > 0), p[4] = g, p[5] = d) : d = p[5];
        let $ = d,
            O = !!($ || C),
            S = O && "cursor-pointer",
            k = "light" === E ? "border-neutral-200 bg-white" : "border-neutral-600 bg-neutral-900 text-white",
            T = void 0 !== x && x ? "w-full justify-start" : "w-fit",
            P = "caption" === (void 0 === w ? "sm" : w) ? "body-3" : "text-sm";
        p[6] !== T || p[7] !== P || p[8] !== S || p[9] !== k ? (u = (0, n.default)("flex items-center justify-center gap-4 rounded-xs border px-16 py-8", S, k, T, P), p[6] = T, p[7] = P, p[8] = S, p[9] = k, p[10] = u) : u = p[10];
        let L = u,
            R = "dark" === E ? "dark" : "light";
        if ($) {
            let e, r, i = g.label ? ? m;
            return p[11] !== N || p[12] !== A || p[13] !== $ || p[14] !== j || p[15] !== y || p[16] !== O || p[17] !== g ? (e = (0, t.jsx)(c, {
                hasDrawer: $,
                isClickable: O,
                image: y,
                link: g,
                hideImageMobile: j,
                text: N,
                subText: A
            }), p[11] = N, p[12] = A, p[13] = $, p[14] = j, p[15] = y, p[16] = O, p[17] = g, p[18] = e) : e = p[18], p[19] !== L || p[20] !== R || p[21] !== g.dynamicDrawerContent || p[22] !== i || p[23] !== e ? (r = (0, t.jsx)(s.default, {
                label: i,
                dynamicDrawerContent: g.dynamicDrawerContent,
                drawerTheme: R,
                buttonClassname: L,
                dataCsOverrideId: void 0,
                children: e
            }), p[19] = L, p[20] = R, p[21] = g.dynamicDrawerContent, p[22] = i, p[23] = e, p[24] = r) : r = p[24], r
        }
        return p[25] !== N || p[26] !== A || p[27] !== $ || p[28] !== j || p[29] !== y || p[30] !== O || p[31] !== g ? (h = (0, t.jsx)(c, {
            hasDrawer: $,
            isClickable: O,
            image: y,
            link: g,
            hideImageMobile: j,
            text: N,
            subText: A
        }), p[25] = N, p[26] = A, p[27] = $, p[28] = j, p[29] = y, p[30] = O, p[31] = g, p[32] = h) : h = p[32], p[33] !== L || p[34] !== C || p[35] !== h ? (f = (0, t.jsx)("div", {
            className: L,
            onClick: C,
            children: h
        }), p[33] = L, p[34] = C, p[35] = h, p[36] = f) : f = p[36], f
    }], 339668), e.s([], 937412)
}, 536168, 482441, 310047, 452693, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        i = e.i(79564),
        n = e.i(620391),
        s = e.i(191788),
        l = e.i(198311),
        a = e.i(495854);
    e.i(643781);
    var o = e.i(989606);
    e.i(366539);
    var c = e.i(150077);
    e.i(664157);
    var d = e.i(271179),
        u = e.i(660600),
        h = e.i(767574),
        f = e.i(264516),
        p = e.i(985129);
    let m = e => {
            let i, n, s = (0, r.c)(9),
                {
                    variants: l,
                    theme: o
                } = e,
                {
                    t: c
                } = (0, d.useTranslation)("common");
            if (s[0] !== c || s[1] !== o || s[2] !== l) {
                let e;
                s[4] !== c || s[5] !== o ? (e = e => {
                    let r = (0, h.default)(e.sku),
                        i = !e.availableForSale;
                    return (0, t.jsx)(u.ListboxOption, {
                        value: e,
                        disabled: i,
                        className: e => {
                            let {
                                disabled: t,
                                selected: r
                            } = e;
                            return (0, a.default)("flex cursor-pointer items-center gap-8 rounded-sm border p-8 text-neutral-800", "light" === o ? "border-neutral-100 bg-white text-black hover:border-neutral-200 hover:bg-neutral-50" : "border-neutral-600 bg-neutral-900 text-white hover:bg-neutral-800 lg:border-neutral-100 lg:bg-white lg:text-black lg:hover:border-neutral-200 lg:hover:bg-neutral-50", t && "pointer-events-none opacity-40", r && "border-neutral-100", r && "dark" === o && "border-neutral-200 bg-neutral-800 lg:border-neutral-200 lg:bg-neutral-50", r && "light" === o && "border-neutral-200 bg-neutral-50")
                        },
                        children: n => {
                            let {
                                selected: s
                            } = n;
                            return (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("div", {
                                    children: (0, t.jsx)(p.default, {
                                        colorName: c(`variantColors.${(0,f.toCamelCase)(e.title)}`),
                                        colorClassName: r.colorClass,
                                        isSelected: s,
                                        isOutOfStock: i
                                    })
                                }), (0, t.jsx)("div", {
                                    "data-testid": "nav-color-swatch",
                                    children: c(`variantColors.${(0,f.toCamelCase)(e.title)}`)
                                })]
                            })
                        }
                    }, e.id)
                }, s[4] = c, s[5] = o, s[6] = e) : e = s[6], i = l.filter(g).map(e), s[0] = c, s[1] = o, s[2] = l, s[3] = i
            } else i = s[3];
            return s[7] !== i ? (n = (0, t.jsx)(t.Fragment, {
                children: i
            }), s[7] = i, s[8] = n) : n = s[8], n
        },
        v = e => {
            let i, n, s, l, o, c, v, g, y = (0, r.c)(23),
                {
                    variants: b,
                    currentVariant: x,
                    onChange: _,
                    theme: w
                } = e,
                C = void 0 === w ? "light" : w,
                {
                    t: E
                } = (0, d.useTranslation)("common");
            y[0] !== x.sku ? (i = (0, h.default)(x.sku), y[0] = x.sku, y[1] = i) : i = y[1];
            let j = i;
            y[2] !== x.title ? (n = (0, f.toCamelCase)(x.title), y[2] = x.title, y[3] = n) : n = y[3];
            let N = `variantColors.${n}`;
            y[4] !== E || y[5] !== N ? (s = E(N), y[4] = E, y[5] = N, y[6] = s) : s = y[6];
            let A = j ? .colorClass ? ? "";
            y[7] !== s || y[8] !== A ? (l = (0, t.jsx)(u.ListboxButton, {
                children: (0, t.jsx)(p.default, {
                    isSelected: !0,
                    colorName: s,
                    colorClassName: A
                })
            }), y[7] = s, y[8] = A, y[9] = l) : l = y[9];
            let $ = "light" === C ? "bg-white" : "bg-neutral-900 lg:bg-white";
            return y[10] !== $ ? (o = (0, a.default)("fixed bottom-[73px] left-0 z-40 flex w-full flex-col gap-8 overflow-hidden rounded-t-2xl bg-white p-16 body-1 font-normal", "lg:absolute lg:-left-80 lg:top-32 lg:h-fit lg:w-fit lg:min-w-max lg:rounded-xs lg:p-8", $), y[10] = $, y[11] = o) : o = y[11], y[12] !== C || y[13] !== b ? (c = (0, t.jsx)(m, {
                variants: b,
                theme: C
            }), y[12] = C, y[13] = b, y[14] = c) : c = y[14], y[15] !== c || y[16] !== o ? (v = (0, t.jsx)(u.ListboxOptions, {
                "data-testid": "variant-selector-navigation-swatches",
                className: o,
                children: c
            }), y[15] = c, y[16] = o, y[17] = v) : v = y[17], y[18] !== x || y[19] !== _ || y[20] !== v || y[21] !== l ? (g = (0, t.jsxs)(u.Listbox, {
                as: "div",
                "data-testid": "variant-selector-navigation",
                value: x,
                onChange: _,
                className: "flex justify-center",
                children: [l, v]
            }), y[18] = x, y[19] = _, y[20] = v, y[21] = l, y[22] = g) : g = y[22], g
        };

    function g(e) {
        let {
            sku: t
        } = e;
        return (0, h.default)(t)
    }
    e.i(544063);
    var y = e.i(525487),
        b = e.i(455108),
        x = e.i(9446),
        _ = e.i(766442),
        w = e.i(212376);
    let C = {
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
        E = e => {
            let i, n, u, h, f, p, m, g, E, A, $, O, S, k, T, P, L, R, M, U, I = (0, r.c)(64),
                {
                    theme: D,
                    product: H,
                    overrideTitle: z,
                    currentVariant: W,
                    variants: B,
                    setCurrentVariant: V,
                    onVariantChange: F,
                    navigation: q,
                    sectionRefs: K,
                    overrideButton: Q,
                    overrideButtonAnchorScroll: Y,
                    addToCart: J
                } = e,
                {
                    t: X
                } = (0, d.useTranslation)("common"),
                {
                    isUSAvailable: G
                } = (0, _.default)(),
                {
                    isDeviceAvailable: Z
                } = (0, w.default)(),
                [ee, et] = (0, s.useState)(!1),
                [er, ei] = (0, s.useState)("");
            I[0] !== W || I[1] !== Z || I[2] !== G ? (i = W && W.availableForSale && G(W.id) && Z(W.sku), I[0] = W, I[1] = Z, I[2] = G, I[3] = i) : i = I[3];
            let en = i,
                es = (U = K.map(e => e ? .current ? .id), q.filter(({
                    url: e
                }) => e && U.includes(e.replace("#", "")))),
                el = "dark" === D ? "text-white" : "text-black",
                ea = B ? .length && W && V;
            I[4] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                let e = () => {
                    window.scrollY > 500 ? et(!0) : et(!1)
                };
                return window.addEventListener("scroll", e), () => {
                    window.removeEventListener("scroll", e)
                }
            }, u = [], I[4] = n, I[5] = u) : (n = I[4], u = I[5]), (0, s.useEffect)(n, u), I[6] !== q || I[7] !== K ? (h = () => {
                if (!q && !K) return;
                let e = new IntersectionObserver(e => {
                    let t = e.filter(j);
                    t.length > 0 ? ei(t.reduce(N).target.id) : ei("")
                }, {
                    root: null,
                    rootMargin: "-30% 0% -70% 0%",
                    threshold: 0
                });
                return K ? .forEach(t => {
                    t.current && e.observe(t.current)
                }), () => {
                    K ? .forEach(t => {
                        t.current && e.unobserve(t.current)
                    })
                }
            }, I[6] = q, I[7] = K, I[8] = h) : h = I[8], I[9] === Symbol.for("react.memo_cache_sentinel") ? (f = [], I[9] = f) : f = I[9], (0, s.useEffect)(h, f), I[10] !== K ? (p = (e, t) => {
                let r = K ? .find(e => e.current && e.current.id === t);
                r ? (0, x.scrollTo)(e, r) : history.pushState(null, "", e.currentTarget.href)
            }, I[10] = K, I[11] = p) : p = I[11];
            let eo = p,
                ec = !ee && "pointer-events-none";
            I[12] !== ec ? (m = (0, a.default)("md:z-navigation fixed bottom-0 left-0 z-30 hidden w-full lg:top-16 lg:bottom-auto lg:left-1/2 lg:block lg:w-[calc(100%_-_var(--spacing-16)_-_var(--spacing-16))] lg:max-w-(--breakpoint-2xl) lg:-translate-x-1/2", ec), I[12] = ec, I[13] = m) : m = I[13];
            let ed = l.motion,
                eu = ee && "opacity-100",
                eh = "light" === D ? "border-t-neutral-200 bg-white lg:bg-white/80" : "border-t-neutral-800 bg-neutral-900 lg:bg-neutral-900/80";
            I[14] !== el || I[15] !== eu || I[16] !== eh ? (g = (0, a.default)("w-full border-t py-8 drop-shadow-lg lg:rounded-[24px] lg:border-0 lg:py-0 lg:pr-16 lg:pl-24 lg:backdrop-blur-xl", eu, eh, el), I[14] = el, I[15] = eu, I[16] = eh, I[17] = g) : g = I[17];
            let ef = ee ? "visible" : "hidden",
                ep = b.default;
            I[18] !== el ? (E = (0, a.default)("body-3 lg:heading-4-semi-bold hidden overflow-hidden !text-nowrap text-ellipsis lg:block", el), I[18] = el, I[19] = E) : E = I[19];
            let em = H ? .title || z;
            I[20] !== E || I[21] !== em ? (A = (0, t.jsx)("div", {
                className: E,
                children: em
            }), I[20] = E, I[21] = em, I[22] = A) : A = I[22], I[23] !== el || I[24] !== W || I[25] !== ea ? ($ = ea ? (0, t.jsx)("div", {
                className: (0, a.default)("flex min-h-56 min-w-[80px] lg:hidden lg:min-h-full", el),
                "data-testid": "priceDisplay",
                children: (0, t.jsx)(c.default, {
                    size: "small",
                    direction: "vertical-reversed",
                    variant: W
                })
            }) : null, I[23] = el, I[24] = W, I[25] = ea, I[26] = $) : $ = I[26], I[27] !== A || I[28] !== $ ? (O = (0, t.jsxs)("div", {
                className: "max-w-[190px] sm:max-w-min",
                children: [A, $]
            }), I[27] = A, I[28] = $, I[29] = O) : O = I[29];
            let ev = es && (0, t.jsx)("ul", {
                className: "col-span-3 hidden grow flex-row justify-center lg:flex",
                children: es.map((e, r) => e.url && (0, t.jsx)("li", {
                    children: (0, t.jsx)("a", {
                        href: e.url,
                        className: (0, a.default)("body-3 block h-full p-24 transition-all duration-300", "dark" === D ? "hover:bg-white/5" : "hover:bg-black/5", `#${er}` === e.url && ("light" === D ? "tab-halo-bottom-primary" : "tab-halo-bottom-white")),
                        onClick: t => e.url && eo(t, e.url.split("#")[1]),
                        "data-cs-override-id": `sticky-nav-${r+1}`,
                        children: e.label
                    })
                }, e.label))
            });
            return I[30] !== J || I[31] !== W || I[32] !== ea || I[33] !== en || I[34] !== F || I[35] !== Q || I[36] !== H || I[37] !== V || I[38] !== X || I[39] !== D || I[40] !== B ? (S = ea ? (0, t.jsxs)(t.Fragment, {
                children: [B.length > 1 && (0, t.jsx)("div", {
                    className: "me-auto md:relative lg:me-0",
                    "data-cs-override-id": "sticky-nav-variant",
                    children: (0, t.jsx)(v, {
                        variants: B,
                        currentVariant: W,
                        onChange: F || V,
                        theme: D
                    })
                }), (0, t.jsx)("div", {
                    className: "hidden lg:flex",
                    children: (0, t.jsx)(c.default, {
                        size: "small",
                        direction: "vertical",
                        variant: W,
                        center: !0
                    })
                }), !en && H ? .notifyMeFormName && !Q ? (0, t.jsx)(y.default, {
                    formName: H.notifyMeFormName,
                    variant: W,
                    buttonSize: "medium",
                    theme: D
                }) : (0, t.jsx)(o.default, {
                    nowrap: !1,
                    size: "small",
                    label: X(en ? "productCards.addToCard" : "productCards.outOfStock"),
                    onClick: () => J([{
                        product: {
                            handle: W.productHandle,
                            maxQuantityAllowed: W.maxQuantityAllowed ? ? 0
                        },
                        variantId: W.id,
                        quantityToAdd: 1
                    }]),
                    isDisabled: !en,
                    dataCsOverrideId: "sticky-nav-cta"
                })]
            }) : null, I[30] = J, I[31] = W, I[32] = ea, I[33] = en, I[34] = F, I[35] = Q, I[36] = H, I[37] = V, I[38] = X, I[39] = D, I[40] = B, I[41] = S) : S = I[41], I[42] !== Q || I[43] !== Y ? (k = Q && (0, t.jsx)(o.default, {
                size: "small",
                label: Q.label,
                ...Y && {
                    onClick: e => Y(e)
                },
                href: Q.url
            }), I[42] = Q, I[43] = Y, I[44] = k) : k = I[44], I[45] !== S || I[46] !== k ? (T = (0, t.jsxs)("div", {
                className: "flex items-center justify-end gap-16",
                children: [S, k]
            }), I[45] = S, I[46] = k, I[47] = T) : T = I[47], I[48] !== O || I[49] !== ev || I[50] !== T ? (P = (0, t.jsxs)("div", {
                className: "flex items-center justify-between gap-8 xl:grid xl:grid-cols-5",
                children: [O, ev, T]
            }), I[48] = O, I[49] = ev, I[50] = T, I[51] = P) : P = I[51], I[52] !== ep.Section || I[53] !== P ? (L = (0, t.jsx)(ep.Section, {
                verticalSpacing: "none",
                as: "div",
                className: "max-w-none px-0 md:px-0 lg:px-0 xl:px-0",
                children: P
            }), I[52] = ep.Section, I[53] = P, I[54] = L) : L = I[54], I[55] !== g || I[56] !== C || I[57] !== ef || I[58] !== L || I[59] !== ed.div ? (R = (0, t.jsx)(ed.div, {
                className: g,
                variants: C,
                initial: !1,
                animate: ef,
                children: L
            }), I[55] = g, I[56] = C, I[57] = ef, I[58] = L, I[59] = ed.div, I[60] = R) : R = I[60], I[61] !== R || I[62] !== m ? (M = (0, t.jsx)("nav", {
                children: (0, t.jsx)("div", {
                    className: m,
                    children: R
                })
            }), I[61] = R, I[62] = m, I[63] = M) : M = I[63], M
        };

    function j(e) {
        return e.isIntersecting
    }

    function N(e, t) {
        return e.intersectionRatio > t.intersectionRatio ? e : t
    }
    e.i(108399);
    var A = e.i(860231);
    e.i(305231);
    var $ = e.i(913473);
    e.i(831184);
    var O = e.i(229620);
    let S = e => {
        let i, n, l, o, c = (0, r.c)(10),
            {
                children: d,
                dataCsOverrideId: u
            } = e,
            [h, f] = (0, s.useState)(!1);
        c[0] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
            if (!O.isBrowser) return;
            let e = () => {
                f(globalThis.scrollY > globalThis.innerHeight)
            };
            return e(), globalThis.addEventListener("scroll", e, {
                passive: !0
            }), () => globalThis.removeEventListener("scroll", e)
        }, n = [], c[0] = i, c[1] = n) : (i = c[0], n = c[1]), (0, s.useEffect)(i, n), c[2] !== h ? (l = (0, a.default)("z-navigation fixed right-16 bottom-16 rounded-2xl border border-neutral-300 p-12 lg:hidden", "bg-[linear-gradient(123deg,var(--color-light-grey-050-70)_0%,var(--color-light-grey-050-50)_100%)]", "shadow-lg backdrop-blur-sm", "translate-y-256 transition-transform duration-300 ease-in-out motion-reduce:transition-none", {
            "translate-y-0": h
        }), c[2] = h, c[3] = l) : l = c[3];
        let p = !h,
            m = !h;
        return c[4] !== d || c[5] !== u || c[6] !== l || c[7] !== p || c[8] !== m ? (o = (0, t.jsx)("div", {
            className: l,
            "data-cs-override-id": u,
            "aria-hidden": p,
            inert: m,
            children: d
        }), c[4] = d, c[5] = u, c[6] = l, c[7] = p, c[8] = m, c[9] = o) : o = c[9], o
    };
    e.s(["default", 0, S], 482441), e.s([], 310047);
    let k = e => {
        let i, n, s, l, a, o, c, u = (0, r.c)(24),
            {
                currentVariant: h,
                variants: f,
                setCurrentVariant: p,
                onVariantChange: m,
                addToCart: v
            } = e,
            {
                t: g
            } = (0, d.useTranslation)("common"),
            {
                isUSAvailable: y
            } = (0, _.default)(),
            {
                isDeviceAvailable: b
            } = (0, w.default)(),
            x = f ? .length && h && p;
        u[0] !== h || u[1] !== b || u[2] !== y ? (i = !!h && h.availableForSale && y(h.id) && b(h.sku), u[0] = h, u[1] = b, u[2] = y, u[3] = i) : i = u[3];
        let C = i;
        if (!x) return null;
        u[4] !== h || u[5] !== m || u[6] !== p || u[7] !== f ? (n = f.length > 1 && (0, t.jsx)($.default, {
            currentVariant: h,
            onChange: m || p,
            variants: f,
            theme: "light",
            colorDot: !0,
            size: "small",
            dataCsOverrideId: "sticky-nav-variant"
        }), u[4] = h, u[5] = m, u[6] = p, u[7] = f, u[8] = n) : n = u[8], u[9] !== v || u[10] !== h.id || u[11] !== h.maxQuantityAllowed || u[12] !== h.productHandle ? (s = () => v([{
            product: {
                handle: h.productHandle,
                maxQuantityAllowed: h.maxQuantityAllowed ? ? 0
            },
            variantId: h.id,
            quantityToAdd: 1
        }]), u[9] = v, u[10] = h.id, u[11] = h.maxQuantityAllowed, u[12] = h.productHandle, u[13] = s) : s = u[13];
        let E = !C;
        return u[14] !== g ? (l = g("addToCart"), u[14] = g, u[15] = l) : l = u[15], u[16] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, t.jsx)(A.default, {
            name: "basketPutIn",
            size: 20,
            color: "white"
        }), u[16] = a) : a = u[16], u[17] !== s || u[18] !== E || u[19] !== l ? (o = (0, t.jsx)("button", {
            type: "button",
            onClick: s,
            disabled: E,
            className: "flex items-center justify-center rounded-full bg-black px-16 py-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:bg-neutral-600",
            "aria-label": l,
            "data-cs-override-id": "sticky-nav-cta",
            children: a
        }), u[17] = s, u[18] = E, u[19] = l, u[20] = o) : o = u[20], u[21] !== n || u[22] !== o ? (c = (0, t.jsx)("nav", {
            children: (0, t.jsx)(S, {
                dataCsOverrideId: "marketing-navigation-mobile",
                children: (0, t.jsxs)("div", {
                    className: "flex items-center justify-between gap-32",
                    children: [n, o]
                })
            })
        }), u[21] = n, u[22] = o, u[23] = c) : c = u[23], c
    };

    function T(e) {
        return e.id
    }
    e.s(["default", 0, e => {
        let s, l, a, o, c, d = (0, r.c)(25),
            {
                navigation: u,
                currentVariant: h,
                product: f,
                variants: p,
                setCurrentVariant: m,
                onVariantChange: v,
                theme: g,
                overrideButton: y,
                overrideButtonAnchorScroll: b,
                overrideTitle: x,
                sectionRefs: _
            } = e,
            w = void 0 === g ? "dark" : g;
        d[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
            placement: "marketingNavigation"
        }, d[0] = s) : s = d[0];
        let {
            add: C
        } = (0, i.default)(s);
        d[1] !== p ? (l = p ? .map(T) || [], d[1] = p, d[2] = l) : l = d[2];
        let j = l;
        return (0, n.usePrefetchLocalisedPrices)(j), d[3] !== C || d[4] !== h || d[5] !== u || d[6] !== v || d[7] !== y || d[8] !== b || d[9] !== x || d[10] !== f || d[11] !== _ || d[12] !== m || d[13] !== w || d[14] !== p ? (a = (0, t.jsx)(E, {
            theme: w,
            product: f,
            overrideTitle: x,
            currentVariant: h,
            variants: p,
            setCurrentVariant: m,
            onVariantChange: v,
            navigation: u,
            sectionRefs: _,
            overrideButton: y,
            overrideButtonAnchorScroll: b,
            addToCart: C
        }), d[3] = C, d[4] = h, d[5] = u, d[6] = v, d[7] = y, d[8] = b, d[9] = x, d[10] = f, d[11] = _, d[12] = m, d[13] = w, d[14] = p, d[15] = a) : a = d[15], d[16] !== C || d[17] !== h || d[18] !== v || d[19] !== m || d[20] !== p ? (o = (0, t.jsx)(k, {
            currentVariant: h,
            variants: p,
            setCurrentVariant: m,
            onVariantChange: v,
            addToCart: C
        }), d[16] = C, d[17] = h, d[18] = v, d[19] = m, d[20] = p, d[21] = o) : o = d[21], d[22] !== a || d[23] !== o ? (c = (0, t.jsxs)(t.Fragment, {
            children: [a, o]
        }), d[22] = a, d[23] = o, d[24] = c) : c = d[24], c
    }], 452693), e.s([], 536168)
}, 151153, 46050, 621351, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.i(664157);
    var i = e.i(271179),
        n = e.i(495854);
    e.i(923160);
    var s = e.i(217863);
    e.i(831184);
    var l = e.i(229620);
    e.s(["default", 0, e => {
        let a, o, c, d, u, h, f = (0, r.c)(19),
            {
                rating: p,
                totalReviews: m,
                direction: v,
                color: g,
                size: y
            } = e,
            b = void 0 === v ? "horizontal" : v,
            x = void 0 === g ? "black" : g,
            _ = void 0 === y ? "medium" : y,
            {
                t: w
            } = (0, i.useTranslation)("common");
        if (f[0] !== b || f[1] !== m) {
            let e = 0 === m && (0, l.isProduction)();
            a = (0, n.default)("flex gap-[2px]", "horizontal" === b ? "flex-row" : "flex-col", e && "invisible"), f[0] = b, f[1] = m, f[2] = a
        } else a = f[2];
        f[3] !== x || f[4] !== p || f[5] !== _ ? (o = (0, t.jsx)(s.default, {
            rating: p,
            size: _,
            color: x
        }), f[3] = x, f[4] = p, f[5] = _, f[6] = o) : o = f[6];
        let C = "horizontal" === b;
        return f[7] !== C ? (c = (0, n.default)("pl-8 text-neutral-500 body-3", {
            "mt-2": C
        }), f[7] = C, f[8] = c) : c = f[8], f[9] !== w || f[10] !== m ? (d = w("productCards.reviewsWithCount", {
            count: m
        }), f[9] = w, f[10] = m, f[11] = d) : d = f[11], f[12] !== c || f[13] !== d ? (u = (0, t.jsx)("p", {
            className: c,
            children: d
        }), f[12] = c, f[13] = d, f[14] = u) : u = f[14], f[15] !== a || f[16] !== o || f[17] !== u ? (h = (0, t.jsxs)("div", {
            className: a,
            children: [o, u]
        }), f[15] = a, f[16] = o, f[17] = u, f[18] = h) : h = f[18], h
    }], 46050), e.s([], 151153);
    var a = e.i(44073);
    e.s(["default", 0, e => {
        let i, s, l, o, c = (0, r.c)(10),
            {
                label: d,
                variant: u,
                theme: h,
                size: f
            } = e,
            p = void 0 === f ? "medium" : f;
        switch (u) {
            case "primary":
            case "highlight":
            case "purple":
                i = "purple";
                break;
            default:
                i = "grey"
        }
        let m = "small" === p && "start-8 top-8",
            v = "medium" === p && "start-12 top-12";
        return c[0] !== m || c[1] !== v ? (s = (0, n.default)("absolute z-10", m, v), c[0] = m, c[1] = v, c[2] = s) : s = c[2], c[3] !== i || c[4] !== d || c[5] !== h ? (l = (0, t.jsx)(a.default, {
            label: d,
            variant: i,
            theme: h
        }), c[3] = i, c[4] = d, c[5] = h, c[6] = l) : l = c[6], c[7] !== s || c[8] !== l ? (o = (0, t.jsx)("div", {
            className: s,
            children: l
        }), c[7] = s, c[8] = l, c[9] = o) : o = c[9], o
    }], 621351)
}, 917350, e => {
    "use strict";
    e.i(753221), e.s([])
}, 277551, e => {
    "use strict";
    e.i(544808), e.s([])
}, 657510, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(219501);
    e.s(["default", 0, e => {
        let i, n = (0, t.c)(3),
            {
                countryCode: s
            } = (0, r.default)(),
            l = "ledger-nano-x" === e;
        return n[0] !== s || n[1] !== l ? (i = !!s && l && ["GB", "AU", "ES", "US"].includes(s), n[0] = s, n[1] = l, n[2] = i) : i = n[2], i
    }])
}, 114168, e => {
    "use strict";
    var t = e.i(191788),
        r = Object.defineProperty,
        i = new Map,
        n = new WeakMap,
        s = 0,
        l = void 0;
    t.Component, e.s(["useInView", 0, function({
        threshold: e,
        delay: r,
        trackVisibility: a,
        rootMargin: o,
        root: c,
        triggerOnce: d,
        skip: u,
        initialInView: h,
        fallbackInView: f,
        onChange: p
    } = {}) {
        var m;
        let [v, g] = t.useState(null), y = t.useRef(p), [b, x] = t.useState({
            inView: !!h,
            entry: void 0
        });
        y.current = p, t.useEffect(() => {
            let t;
            if (!u && v) return t = function(e, t, r = {}, a = l) {
                if (void 0 === window.IntersectionObserver && void 0 !== a) {
                    let i = e.getBoundingClientRect();
                    return t(a, {
                        isIntersecting: a,
                        target: e,
                        intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
                        time: 0,
                        boundingClientRect: i,
                        intersectionRect: i,
                        rootBounds: i
                    }), () => {}
                }
                let {
                    id: o,
                    observer: c,
                    elements: d
                } = function(e) {
                    let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                            var r;
                            return `${t}_${"root"===t?!(r=e.root)?"0":(n.has(r)||(s+=1,n.set(r,s.toString())),n.get(r)):e[t]}`
                        }).toString(),
                        r = i.get(t);
                    if (!r) {
                        let n, s = new Map,
                            l = new IntersectionObserver(t => {
                                t.forEach(t => {
                                    var r;
                                    let i = t.isIntersecting && n.some(e => t.intersectionRatio >= e);
                                    e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i), null == (r = s.get(t.target)) || r.forEach(e => {
                                        e(i, t)
                                    })
                                })
                            }, e);
                        n = l.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
                            id: t,
                            observer: l,
                            elements: s
                        }, i.set(t, r)
                    }
                    return r
                }(r), u = d.get(e) || [];
                return d.has(e) || d.set(e, u), u.push(t), c.observe(e),
                    function() {
                        u.splice(u.indexOf(t), 1), 0 === u.length && (d.delete(e), c.unobserve(e)), 0 === d.size && (c.disconnect(), i.delete(o))
                    }
            }(v, (e, r) => {
                x({
                    inView: e,
                    entry: r
                }), y.current && y.current(e, r), r.isIntersecting && d && t && (t(), t = void 0)
            }, {
                root: c,
                rootMargin: o,
                threshold: e,
                trackVisibility: a,
                delay: r
            }, f), () => {
                t && t()
            }
        }, [Array.isArray(e) ? e.toString() : e, v, c, o, d, u, a, f, r]);
        let _ = null == (m = b.entry) ? void 0 : m.target,
            w = t.useRef(void 0);
        v || !_ || d || u || w.current === _ || (w.current = _, x({
            inView: !!h,
            entry: void 0
        }));
        let C = [g, b.inView, b.entry];
        return C.ref = C[0], C.inView = C[1], C.entry = C[2], C
    }])
}, 547627, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576);
    e.i(664157);
    var i = e.i(271179);
    e.i(643781);
    var n = e.i(989606),
        s = e.i(292905),
        l = e.i(217837),
        a = e.i(477180);
    let o = async e => {
        let t = await fetch("/api/buy-it-now", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        });
        if (!t.ok) throw Error("Buy it now failed");
        return t.json()
    };
    var c = e.i(414448);
    e.s(["default", 0, e => {
        let d, u, h, f = (0, r.c)(19),
            {
                variantId: p,
                dataCsOverrideId: m,
                isOfferAvailable: v,
                sku: g,
                size: y
            } = e,
            b = void 0 === y ? "medium" : y,
            {
                t: x
            } = (0, i.useTranslation)("common");
        f[0] !== p ? (d = {
            variantId: p
        }, f[0] = p, f[1] = d) : d = f[1];
        let {
            buyItNow: _,
            isPending: w
        } = (e => {
            let t, i, n, c, d, u, h, f = (0, r.c)(23),
                {
                    variantId: p,
                    onError: m
                } = e,
                {
                    country: v,
                    language: g
                } = (0, a.default)(),
                y = (0, l.useSearchParams)(),
                b = (0, l.useRouter)();
            f[0] !== y ? (t = y ? .get("discount_code"), f[0] = y, f[1] = t) : t = f[1];
            let x = t;
            f[2] !== x || f[3] !== p ? (i = ["buy-it-now", p, x], f[2] = x, f[3] = p, f[4] = i) : i = f[4], f[5] !== v || f[6] !== x || f[7] !== g || f[8] !== p ? (n = () => o({
                variantId: p,
                discountCode: x,
                language: g,
                country: v
            }), f[5] = v, f[6] = x, f[7] = g, f[8] = p, f[9] = n) : n = f[9], f[10] !== b ? (c = e => {
                b.push(e.checkoutUrl)
            }, f[10] = b, f[11] = c) : c = f[11], f[12] !== m ? (d = e => {
                console.error("Buy it now error:", e), m ? .(e)
            }, f[12] = m, f[13] = d) : d = f[13], f[14] !== i || f[15] !== n || f[16] !== c || f[17] !== d ? (u = {
                mutationKey: i,
                mutationFn: n,
                onSuccess: c,
                onError: d
            }, f[14] = i, f[15] = n, f[16] = c, f[17] = d, f[18] = u) : u = f[18];
            let {
                mutate: _,
                isPending: w,
                error: C
            } = (0, s.useMutation)(u);
            return f[19] !== C || f[20] !== w || f[21] !== _ ? (h = {
                buyItNow: _,
                isPending: w,
                error: C
            }, f[19] = C, f[20] = w, f[21] = _, f[22] = h) : h = f[22], h
        })(d);
        if (!v) {
            let e, r;
            f[2] !== x ? (e = x("productCards.outOfStock"), f[2] = x, f[3] = e) : e = f[3];
            let i = `${m}-buy-now`;
            return f[4] !== _ || f[5] !== b || f[6] !== g || f[7] !== e || f[8] !== i || f[9] !== p ? (r = (0, t.jsx)(c.default, {
                variantId: p,
                sku: g,
                label: e,
                onClick: _,
                dataCsOverrideId: i,
                size: b,
                variant: "primary-orange",
                nowrap: !1
            }), f[4] = _, f[5] = b, f[6] = g, f[7] = e, f[8] = i, f[9] = p, f[10] = r) : r = f[10], r
        }
        f[11] !== x ? (u = x("productCards.buyItNow"), f[11] = x, f[12] = u) : u = f[12];
        let C = `${m}-buy-now`;
        return f[13] !== _ || f[14] !== w || f[15] !== b || f[16] !== u || f[17] !== C ? (h = (0, t.jsx)(n.default, {
            nowrap: !1,
            size: b,
            variant: "primary-orange",
            label: u,
            onClick: _,
            isDisabled: w,
            dataCsOverrideId: C
        }), f[13] = _, f[14] = w, f[15] = b, f[16] = u, f[17] = C, f[18] = h) : h = f[18], h
    }], 547627)
}, 310356, e => {
    "use strict";
    e.i(621351), e.s([])
}, 773184, 725069, e => {
    "use strict";
    var t = e.i(261576),
        r = e.i(191788),
        i = e.i(620391);

    function n(e) {
        return e.id
    }

    function s(e) {
        return e.id
    }

    function l(e) {
        return e.id
    }
    e.s(["default", 0, e => {
        let a, o, c, d = (0, t.c)(14),
            {
                variants: u,
                variantLists: h
            } = e,
            [f, p] = h,
            m = f ? .priceLabel,
            v = f ? .priceConversion;
        d[0] !== f ? .variants || d[1] !== p ? .variants || d[2] !== u ? (a = [...u.map(n), ...f ? .variants.map(s) || [], ...p ? .variants.map(l) || []], d[0] = f ? .variants, d[1] = p ? .variants, d[2] = u, d[3] = a) : a = d[3];
        let g = a;
        (0, i.usePrefetchLocalisedPrices)(g);
        let [y, b] = (0, r.useState)(f ? .variants[0] || u[0]);
        return d[4] !== y || d[5] !== u ? (o = y ? [y, ...u] : u, d[4] = y, d[5] = u, d[6] = o) : o = d[6], d[7] !== y || d[8] !== v || d[9] !== m || d[10] !== f || d[11] !== p || d[12] !== o ? (c = {
            variants: o,
            primaryVariants: f,
            secondaryVariants: p,
            currentVariant: y,
            setCurrentVariant: b,
            priceLabel: m,
            priceConversion: v
        }, d[7] = y, d[8] = v, d[9] = m, d[10] = f, d[11] = p, d[12] = o, d[13] = c) : c = d[13], c
    }], 773184);
    var a = e.i(391398),
        o = e.i(525487),
        c = e.i(79564);

    function d(e) {
        let {
            id: t,
            productHandle: r,
            maxQuantityAllowed: i
        } = e;
        return {
            product: {
                handle: r,
                maxQuantityAllowed: i
            },
            variantId: t
        }
    }
    e.i(664157);
    var u = e.i(271179);
    e.i(643781);
    var h = e.i(989606),
        f = e.i(414448);
    e.s(["default", 0, e => {
        let r, i, n = (0, t.c)(27),
            {
                variants: s,
                isOfferAvailable: l,
                notifyMeFormName: p,
                dataCsOverrideId: m,
                size: v,
                theme: g
            } = e,
            y = void 0 === v ? "medium" : v,
            b = void 0 === g ? "light" : g,
            {
                t: x
            } = (0, u.useTranslation)("common"),
            _ = (e => {
                let r, i = (0, t.c)(3),
                    {
                        add: n
                    } = (0, c.default)();
                return i[0] !== n || i[1] !== e ? (r = () => {
                    n(e.map(d))
                }, i[0] = n, i[1] = e, i[2] = r) : r = i[2], r
            })(s);
        if (!l && p) {
            let e;
            return n[0] !== p || n[1] !== y || n[2] !== s[0] ? (e = (0, a.jsx)(o.default, {
                buttonSize: y,
                buttonVariant: "primary-orange",
                formName: p,
                variant: s[0]
            }), n[0] = p, n[1] = y, n[2] = s[0], n[3] = e) : e = n[3], e
        }
        if (!l) {
            let e, t;
            n[4] !== y || n[5] !== x ? (e = "small" === y ? void 0 : x("productCards.outOfStock"), n[4] = y, n[5] = x, n[6] = e) : e = n[6];
            let r = "dark" === b ? "primary-white" : "primary-black";
            return n[7] !== _ || n[8] !== m || n[9] !== y || n[10] !== e || n[11] !== r || n[12] !== s[0].id || n[13] !== s[0].productHandle || n[14] !== s[0].sku || n[15] !== s[0].title ? (t = (0, a.jsx)(f.default, {
                productName: s[0].productHandle,
                variantId: s[0].id,
                variantName: s[0].title,
                sku: s[0].sku,
                label: e,
                onClick: _,
                dataCsOverrideId: m,
                size: y,
                variant: r,
                nowrap: !1
            }), n[7] = _, n[8] = m, n[9] = y, n[10] = e, n[11] = r, n[12] = s[0].id, n[13] = s[0].productHandle, n[14] = s[0].sku, n[15] = s[0].title, n[16] = t) : t = n[16], t
        }
        n[17] !== y || n[18] !== x ? (r = "small" === y ? null : x("productCards.addToCard"), n[17] = y, n[18] = x, n[19] = r) : r = n[19];
        let w = "small" === y ? "basketPutIn" : void 0,
            C = "dark" === b ? "primary-orange" : "primary-black";
        return n[20] !== _ || n[21] !== m || n[22] !== y || n[23] !== r || n[24] !== w || n[25] !== C ? (i = (0, a.jsx)(h.default, {
            nowrap: !1,
            label: r,
            onClick: _,
            dataCsOverrideId: m,
            size: y,
            icon: w,
            variant: C
        }), n[20] = _, n[21] = m, n[22] = y, n[23] = r, n[24] = w, n[25] = C, n[26] = i) : i = n[26], i
    }], 725069)
}, 927947, e => {
    "use strict";
    var t = e.i(191788);
    e.s(["default", 0, (e, r, i = 200) => {
        let n = (0, t.useRef)(r);
        n.current = r, (0, t.useEffect)(() => {
            var t, r;
            let s, l, a;
            if (!e.current) return () => null;
            let o = (t = e.current, r = () => {
                n.current && n.current()
            }, s = !1, l = null, a = () => {
                l && clearTimeout(l), l = setTimeout(r, i)
            }, t.addEventListener("scroll", a), () => {
                s || (s = !0, l && clearTimeout(l), t.removeEventListener("scroll", a))
            });
            return () => o()
        })
    }])
}, 195512, 847562, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        i = e.i(203828),
        n = e.i(455108),
        s = e.i(799444);
    let l = (e, t, r) => Intl.NumberFormat(t, {
        style: "currency",
        currency: r,
        trailingZeroDisplay: "stripIfInteger"
    }).format(e);

    function a(e) {
        let {
            id: t
        } = e;
        return t
    }
    e.s(["default", 0, e => {
        let o, c, d, u = (0, r.c)(8),
            {
                variants: h
            } = e,
            {
                locale: f
            } = (0, i.useRouter)(),
            p = void 0 === f ? "en" : f;
        u[0] !== h ? (o = h.map(a), u[0] = h, u[1] = o) : o = u[1];
        let {
            prices: m
        } = (0, s.default)(o);
        u[2] !== p || u[3] !== m ? (c = ((e, t) => {
            if (!(e && 0 !== e.length)) return {
                combinedPrice: null,
                combinedCompareAtPrice: null
            };
            let {
                currency: r
            } = e[0], i = e.reduce((e, {
                amount: t
            }) => e + t, 0), n = e.reduce((e, {
                compareAtAmount: t,
                amount: r
            }) => e + (t || r), 0), s = l(i, t, r);
            return i === n ? {
                combinedPrice: s,
                combinedCompareAtPrice: null
            } : {
                combinedPrice: s,
                combinedCompareAtPrice: l(n, t, r)
            }
        })(m, p), u[2] = p, u[3] = m, u[4] = c) : c = u[4];
        let {
            combinedPrice: v,
            combinedCompareAtPrice: g
        } = c;
        return u[5] !== g || u[6] !== v ? (d = v ? (0, t.jsxs)("div", {
            className: "flex items-center gap-8",
            "data-testid": "price-display",
            children: [g && (0, t.jsx)("div", {
                className: "pe-8 text-neutral-400 line-through body-1 font-normal",
                children: g
            }), (0, t.jsx)("div", {
                className: "flex flex-row flex-wrap items-center gap-x-12",
                children: (0, t.jsx)("span", {
                    "data-testid": "price-display__price",
                    className: "heading-4-semi-bold",
                    children: v
                })
            })]
        }) : (0, t.jsx)(n.default.LoadingSpinner, {
            className: "h-32 w-20 animate-spin text-white"
        }), u[5] = g, u[6] = v, u[7] = d) : d = u[7], d
    }], 847562), e.s([], 195512)
}, 849513, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        i = e.i(455108);
    e.i(108399);
    var n = e.i(860231);
    let s = e => {
        let i, s, l, a, o = (0, r.c)(10),
            {
                title: c,
                description: d,
                icon: u
            } = e;
        return o[0] !== u ? (i = u && (0, t.jsx)(n.default, {
            name: u,
            color: "white",
            size: 25,
            strokeWidth: 3.5
        }), o[0] = u, o[1] = i) : i = o[1], o[2] !== c ? (s = (0, t.jsx)("h3", {
            className: "mb-12 mt-20 heading-5-semi-bold",
            children: c
        }), o[2] = c, o[3] = s) : s = o[3], o[4] !== d ? (l = (0, t.jsx)("p", {
            className: "text-gray-300",
            children: d
        }), o[4] = d, o[5] = l) : l = o[5], o[6] !== i || o[7] !== s || o[8] !== l ? (a = (0, t.jsxs)("div", {
            className: "w-full rounded-xs bg-neutral-900 px-16 py-24 text-white lg:px-24 lg:py-32",
            children: [i, s, l]
        }), o[6] = i, o[7] = s, o[8] = l, o[9] = a) : a = o[9], a
    };

    function l(e) {
        let {
            title: r,
            description: i,
            icon: n
        } = e;
        return (0, t.jsx)("div", {
            className: "flex w-[85vw] shrink-0 snap-start md:h-auto md:w-full md:items-stretch",
            children: (0, t.jsx)(s, {
                title: r,
                description: i,
                icon: n
            })
        }, r)
    }
    e.s(["default", 0, e => {
        let n, s, a, o, c = (0, r.c)(9),
            {
                title: d,
                featureBlocks: u
            } = e;
        return c[0] !== d ? (n = (0, t.jsx)("h2", {
            className: "pb-48 responsive-display-4",
            children: d
        }), c[0] = d, c[1] = n) : n = c[1], c[2] !== u ? (s = u.map(l), c[2] = u, c[3] = s) : s = c[3], c[4] !== s ? (a = (0, t.jsx)("div", {
            className: "no-scrollbar flex snap-x snap-mandatory gap-16 overflow-x-scroll scroll-smooth md:grid md:grid-cols-2 md:gap-24 md:overflow-x-hidden lg:grid-cols-3",
            children: s
        }), c[4] = s, c[5] = a) : a = c[5], c[6] !== n || c[7] !== a ? (o = (0, t.jsx)("div", {
            className: "bg-black text-white",
            children: (0, t.jsxs)(i.default.Section, {
                children: [n, a]
            })
        }), c[6] = n, c[7] = a, c[8] = o) : o = c[8], o
    }], 849513)
}, 520821, e => {
    "use strict";
    e.i(849513), e.s([])
}, 931922, e => {
    "use strict";
    e.s(["SolanaSignMessage", 0, "solana:signMessage"])
}, 852625, e => {
    "use strict";
    e.s(["SolanaSignAndSendTransaction", 0, "solana:signAndSendTransaction"])
}, 506392, e => {
    "use strict";
    e.s(["SolanaSignTransaction", 0, "solana:signTransaction"])
}, 945605, 234153, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        i = e.i(126019),
        n = e.i(41158);
    e.i(108399);
    var s = e.i(860231);
    e.i(286941);
    var l = e.i(126762),
        a = e.i(191788),
        o = e.i(114168);
    let c = e => {
        let i, n, s, l, c, u = (0, r.c)(11),
            {
                children: h,
                theme: f
            } = e;
        u[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [...Array(21)].map(d), u[0] = i) : i = u[0];
        let p = i;
        u[1] === Symbol.for("react.memo_cache_sentinel") ? (n = {
            threshold: p,
            rootMargin: "-10%"
        }, u[1] = n) : n = u[1];
        let m = n,
            v = "dark" === f ? "text-white/(--calculatedVisibility)" : "text-black/(--calculatedVisibility)",
            {
                ref: g,
                entry: y
            } = (0, o.useInView)(m);
        return u[2] !== y ? (s = () => {
            if (!y) return;
            let e = y.target,
                {
                    intersectionRatio: t
                } = y;
            e.style.setProperty("--calculatedVisibility", (t + .3) / 1.3)
        }, u[2] = y, u[3] = s) : s = u[3], u[4] !== y || u[5] !== g ? (l = [y, g], u[4] = y, u[5] = g, u[6] = l) : l = u[6], (0, a.useEffect)(s, l), u[7] !== h || u[8] !== v || u[9] !== g ? (c = (0, t.jsx)("div", {
            ref: g,
            className: v,
            children: h
        }), u[7] = h, u[8] = v, u[9] = g, u[10] = c) : c = u[10], c
    };

    function d(e, t) {
        return t / 20
    }
    var u = e.i(455108),
        h = e.i(495854);
    e.s(["default", 0, e => {
        let a, o, d, f, p, m, v, g, y, b, x = (0, r.c)(29),
            {
                sectionInformation: _,
                theme: w,
                displayTitle: C,
                textBlockSize: E
            } = e,
            j = void 0 === w ? "dark" : w,
            N = void 0 === C || C,
            A = void 0 === E ? "compact" : E,
            {
                contentBlocks: $,
                image: O,
                title: S
            } = _,
            k = "dark" === j ? "bg-black text-white" : "bg-neutral-50 text-black";
        x[0] !== k ? (a = (0, h.default)("text-balance", k), x[0] = k, x[1] = a) : a = x[1], x[2] !== N || x[3] !== S ? (o = N && (0, t.jsx)("h2", {
            className: "responsive-display-4 mb-64",
            children: S
        }), x[2] = N, x[3] = S, x[4] = o) : o = x[4], x[5] !== O || x[6] !== A ? (d = O && (0, t.jsx)(i.default, {
            src: O.url,
            alt: "",
            width: "compact" === A ? 400 : 480,
            height: "compact" === A ? 500 : 480,
            className: "mx-auto mb-48 md:sticky md:top-[10%] md:mb-0"
        }), x[5] = O, x[6] = A, x[7] = d) : d = x[7], x[8] !== d ? (f = (0, t.jsx)("div", {
            className: "md:mb-64 md:max-w-[35%]",
            children: d
        }), x[8] = d, x[9] = f) : f = x[9];
        let T = "compact" === A ? "max-w-md" : "";
        if (x[10] !== T ? (p = (0, h.default)(T), x[10] = T, x[11] = p) : p = x[11], x[12] !== $ || x[13] !== j) {
            let e;
            x[15] !== j ? (e = e => (0, t.jsx)(c, {
                theme: j,
                children: (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("h3", {
                        className: "heading-3-semi-bold mb-24",
                        children: e.title
                    }), (0, t.jsxs)("div", {
                        className: "body-1 mb-64 font-normal",
                        children: [e.description && (0, t.jsx)(l.default, {
                            content: e.description,
                            className: "not-rich-text [&>h4]:heading-4-semi-bold [&>h4]:mt-24 [&>h4]:mb-0"
                        }), e.link ? .url && (0, t.jsxs)(n.default, {
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
            }, `introBlock${e.title}`), x[15] = j, x[16] = e) : e = x[16], m = $.map(e), x[12] = $, x[13] = j, x[14] = m
        } else m = x[14];
        return x[17] !== p || x[18] !== m ? (v = (0, t.jsx)("div", {
            className: p,
            children: m
        }), x[17] = p, x[18] = m, x[19] = v) : v = x[19], x[20] !== v || x[21] !== f ? (g = (0, t.jsxs)("div", {
            className: "md:flex md:flex-row-reverse md:justify-between md:gap-32",
            children: [f, v]
        }), x[20] = v, x[21] = f, x[22] = g) : g = x[22], x[23] !== g || x[24] !== o ? (y = (0, t.jsxs)(u.default.Section, {
            dataCsOverrideId: "section-introducing",
            children: [o, g]
        }), x[23] = g, x[24] = o, x[25] = y) : y = x[25], x[26] !== y || x[27] !== a ? (b = (0, t.jsx)("div", {
            className: a,
            children: y
        }), x[26] = y, x[27] = a, x[28] = b) : b = x[28], b
    }], 234153), e.s([], 945605)
}, 568551, 829581, e => {
    "use strict";

    function t(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw Error("positive integer expected, got " + e)
    }

    function r(e, ...t) {
        if (!(e instanceof Uint8Array || ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length)) throw Error("Uint8Array expected of length " + t + ", got length=" + e.length)
    }
    e.s(["abytes", 0, r, "aexists", 0, function(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished) throw Error("Hash#digest() has already been called")
    }, "ahash", 0, function(e) {
        if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
        t(e.outputLen), t(e.blockLen)
    }, "anumber", 0, t, "aoutput", 0, function(e, t) {
        r(e);
        let i = t.outputLen;
        if (e.length < i) throw Error("digestInto() expects output buffer of length at least " + i)
    }], 568551);
    let i = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0,
        n = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];

    function s(e) {
        return "string" == typeof e && (e = function(e) {
            if ("string" != typeof e) throw Error("utf8ToBytes expected string, got " + typeof e);
            return new Uint8Array(new TextEncoder().encode(e))
        }(e)), r(e), e
    }
    e.s(["Hash", 0, class {
        clone() {
            return this._cloneInto()
        }
    }, "byteSwap32", 0, function(e) {
        for (let r = 0; r < e.length; r++) {
            var t;
            e[r] = (t = e[r]) << 24 & 0xff000000 | t << 8 & 0xff0000 | t >>> 8 & 65280 | t >>> 24 & 255
        }
    }, "concatBytes", 0, function(...e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
            let n = e[i];
            r(n), t += n.length
        }
        let i = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
            let n = e[t];
            i.set(n, r), r += n.length
        }
        return i
    }, "createView", 0, function(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength)
    }, "isLE", 0, n, "randomBytes", 0, function(e = 32) {
        if (i && "function" == typeof i.getRandomValues) return i.getRandomValues(new Uint8Array(e));
        if (i && "function" == typeof i.randomBytes) return i.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined")
    }, "rotr", 0, function(e, t) {
        return e << 32 - t | e >>> t
    }, "toBytes", 0, s, "u32", 0, function(e) {
        return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4))
    }, "wrapConstructor", 0, function(e) {
        let t = t => e().update(s(t)).digest(),
            r = e();
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
    }, "wrapXOFConstructorWithOpts", 0, function(e) {
        let t = (t, r) => e(r).update(s(t)).digest(),
            r = e({});
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = t => e(t), t
    }], 829581)
}, 564607, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        i = e.i(191788);
    e.i(664157);
    var n = e.i(271179);
    e.i(108399);
    var s = e.i(860231),
        l = e.i(927947),
        a = e.i(495854),
        o = e.i(498817),
        c = e.i(198311);
    let d = e => {
        let i, n, s, l, a = (0, r.c)(15),
            {
                previewImageUrl: d,
                slideIndex: u,
                currentIndex: h,
                onIndexChange: f,
                isLoading: p,
                aThumb: m
            } = e,
            v = 0 === u ? m : null,
            g = u === h,
            y = `Slide ${u}`;
        return a[0] !== f || a[1] !== u ? (i = () => f(u), a[0] = f, a[1] = u, a[2] = i) : i = a[2], a[3] !== p || a[4] !== d ? (n = (0, t.jsx)(o.AnimatePresence, {
            mode: "wait",
            children: p ? (0, t.jsx)(c.motion.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                className: "flex h-full w-full items-center justify-center bg-neutral-800/10"
            }, "loading-thumb") : (0, t.jsx)(c.motion.img, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                src: d,
                alt: ""
            }, "thumb-image")
        }), a[3] = p, a[4] = d, a[5] = n) : n = a[5], a[6] !== g || a[7] !== y || a[8] !== i || a[9] !== n ? (s = (0, t.jsx)("button", {
            type: "button",
            disabled: g,
            "aria-label": y,
            onClick: i,
            className: "flex h-80 w-64 shrink-0 items-center justify-center rounded-xs border-2 border-transparent bg-neutral-50 p-16 transition-all hover:border-neutral-200 disabled:border-neutral-400 disabled:bg-neutral-100 lg:h-[88px] lg:w-[72px]",
            children: n
        }), a[6] = g, a[7] = y, a[8] = i, a[9] = n, a[10] = s) : s = a[10], a[11] !== d || a[12] !== v || a[13] !== s ? (l = (0, t.jsx)("li", {
            ref: v,
            className: "snap-start",
            children: s
        }, d), a[11] = d, a[12] = v, a[13] = s, a[14] = l) : l = a[14], l
    };
    var u = e.i(455108);
    let h = e => {
        let i, n = (0, r.c)(5),
            {
                isLoading: s,
                aSlide: l,
                currentIndex: a,
                items: d
            } = e;
        return n[0] !== l || n[1] !== a || n[2] !== s || n[3] !== d ? (i = (0, t.jsx)(o.AnimatePresence, {
            mode: "wait",
            children: s ? (0, t.jsx)(c.motion.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                className: "flex h-full w-full items-center justify-center",
                children: (0, t.jsx)(u.default.LoadingSpinner, {
                    className: "h-32 w-32"
                })
            }, "loading") : (0, t.jsx)(t.Fragment, {
                children: d.map((e, r) => {
                    let {
                        previewImageUrl: i,
                        element: n
                    } = e;
                    return (0, t.jsx)(c.motion.li, {
                        ref: 0 === r ? l : null,
                        "data-test-current": a === r,
                        className: "min-w-full snap-center",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: .3
                        },
                        children: n
                    }, i)
                })
            })
        }), n[0] = l, n[1] = a, n[2] = s, n[3] = d, n[4] = i) : i = n[4], i
    };

    function f(e) {
        return e ? Array.from(e.children).filter(e => e instanceof HTMLElement && "LI" === e.tagName) : []
    }
    e.s(["default", 0, e => {
        let o, c, u, p, m, v, g, y, b, x, _, w, C, E, j, N, A, $, O, S, k, T, P, L, R, M, U = (0, r.c)(66),
            {
                className: I,
                items: D,
                onToggle3D: H,
                showToggleButton: z,
                centerThumbnails: W,
                isLoading: B
            } = e,
            V = void 0 !== W && W,
            F = void 0 !== B && B,
            [q, K] = (0, i.useState)(!0),
            [Q, Y] = (0, i.useState)(0),
            J = (0, i.useRef)(null),
            X = (0, i.useRef)(null),
            G = (0, i.useRef)(null),
            Z = (0, i.useRef)(null);
        U[0] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
            let e = X.current,
                t = f(e);
            if (!e || 0 === t.length) return;
            let r = e.scrollLeft,
                i = t.length > 1 ? t[1].offsetLeft - t[0].offsetLeft : t[0].offsetWidth;
            i <= 0 || Y(Math.min(t.length - 1, Math.max(0, Math.round(r / i))))
        }, U[0] = o) : o = U[0];
        let ee = o;
        (0, l.default)(X, ee), U[1] !== Q || U[2] !== q ? (c = () => {
            let e = f(X.current);
            X.current && e[Q] && X.current.scrollTo({
                left: e[Q].offsetLeft,
                ...q ? {
                    behavior: "smooth"
                } : {}
            });
            let t = f(Z.current);
            Z.current && t[Q] && Z.current.scrollTo({
                left: t[Q].offsetLeft
            })
        }, U[1] = Q, U[2] = q, U[3] = c) : c = U[3], U[4] !== Q || U[5] !== F || U[6] !== D || U[7] !== q ? (u = [D, Q, q, F], U[4] = Q, U[5] = F, U[6] = D, U[7] = q, U[8] = u) : u = U[8], (0, i.useEffect)(c, u), U[9] === Symbol.for("react.memo_cache_sentinel") ? (p = () => {
            K(!1), Y(0)
        }, U[9] = p) : p = U[9], U[10] !== D ? (m = [D], U[10] = D, U[11] = m) : m = U[11], (0, i.useEffect)(p, m), U[12] === Symbol.for("react.memo_cache_sentinel") ? (v = e => {
            K(!0), Y(e)
        }, U[12] = v) : v = U[12];
        let et = v,
            {
                t: er
            } = (0, n.useTranslation)("common"),
            ei = 0 === Q,
            en = Q + 1 === D.length,
            [es, el] = (0, i.useState)(z);
        U[13] !== es || U[14] !== z ? (y = () => {
            z && !es && el(!0)
        }, g = [z, es], U[13] = es, U[14] = z, U[15] = g, U[16] = y) : (g = U[15], y = U[16]), (0, i.useEffect)(y, g), U[17] !== es || U[18] !== H ? (b = es && (0, t.jsx)("button", {
            onClick: () => {
                el(!es), H ? .()
            },
            className: (0, a.default)("absolute right-20 bottom-20 z-10 flex h-64 w-56 items-center justify-center rounded-xs border border-neutral-200 bg-white transition hover:bg-neutral-100"),
            children: (0, t.jsx)(s.default, {
                name: "ar",
                size: 30,
                color: "none"
            })
        }), U[17] = es, U[18] = H, U[19] = b) : b = U[19], U[20] !== er ? (x = er("controls.previous"), U[20] = er, U[21] = x) : x = U[21], U[22] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, a.default)("ms-16 disabled:opacity-0", "flex h-40 w-40 items-center justify-center rounded-xs bg-neutral-600 transition-opacity"), U[22] = _) : _ = U[22], U[23] !== Q ? (w = () => et(Q - 1), U[23] = Q, U[24] = w) : w = U[24], U[25] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, t.jsx)(s.default, {
            name: "arrowLeft",
            size: 25,
            color: "white",
            strokeWidth: 3.5
        }), U[25] = C) : C = U[25], U[26] !== ei || U[27] !== x || U[28] !== w ? (E = (0, t.jsx)("button", {
            type: "button",
            disabled: ei,
            "aria-label": x,
            className: _,
            onClick: w,
            children: C
        }), U[26] = ei, U[27] = x, U[28] = w, U[29] = E) : E = U[29], U[30] !== er ? (j = er("controls.next"), U[30] = er, U[31] = j) : j = U[31], U[32] === Symbol.for("react.memo_cache_sentinel") ? (N = (0, a.default)("me-16 disabled:opacity-0", "flex h-40 w-40 items-center justify-center rounded-xs bg-neutral-600 transition-opacity"), U[32] = N) : N = U[32], U[33] !== Q ? (A = () => et(Q + 1), U[33] = Q, U[34] = A) : A = U[34], U[35] === Symbol.for("react.memo_cache_sentinel") ? ($ = (0, t.jsx)(s.default, {
            name: "arrowRight",
            size: 25,
            color: "white",
            strokeWidth: 3.5
        }), U[35] = $) : $ = U[35], U[36] !== en || U[37] !== j || U[38] !== A ? (O = (0, t.jsx)("button", {
            type: "button",
            disabled: en,
            "aria-label": j,
            className: N,
            onClick: A,
            children: $
        }), U[36] = en, U[37] = j, U[38] = A, U[39] = O) : O = U[39], U[40] !== E || U[41] !== O ? (S = (0, t.jsxs)("div", {
            className: "absolute z-2 hidden h-full w-full items-center justify-between opacity-0 transition-opacity group-hover:opacity-100 lg:flex",
            children: [E, O]
        }), U[40] = E, U[41] = O, U[42] = S) : S = U[42];
        let ea = q && "scroll-smooth";
        return U[43] !== ea ? (k = (0, a.default)("no-scrollbar flex h-[300px] snap-x snap-mandatory gap-24 overflow-x-scroll rounded-xs bg-neutral-50 md:h-[460px] lg:h-[560px]", ea), U[43] = ea, U[44] = k) : k = U[44], U[45] !== Q || U[46] !== F || U[47] !== D ? (T = (0, t.jsx)(h, {
            isLoading: F,
            aSlide: J,
            currentIndex: Q,
            items: D
        }), U[45] = Q, U[46] = F, U[47] = D, U[48] = T) : T = U[48], U[49] !== k || U[50] !== T ? (P = (0, t.jsx)("ul", {
            ref: X,
            "data-testid": "slides",
            className: k,
            children: T
        }), U[49] = k, U[50] = T, U[51] = P) : P = U[51], U[52] !== b || U[53] !== S || U[54] !== P ? (L = (0, t.jsxs)("div", {
            className: "group relative",
            children: [b, S, P]
        }), U[52] = b, U[53] = S, U[54] = P, U[55] = L) : L = U[55], U[56] !== V || U[57] !== Q || U[58] !== F || U[59] !== D || U[60] !== q ? (R = D.length > 1 && (0, t.jsx)("ul", {
            ref: Z,
            "data-testid": "thumbnails",
            className: (0, a.default)("no-scrollbar mt-16 hidden snap-x snap-proximity flex-nowrap gap-8 overflow-x-scroll md:flex", q && "scroll-smooth", V && "md:justify-center"),
            children: D.map((e, r) => {
                let {
                    previewImageUrl: i
                } = e;
                return (0, t.jsx)(d, {
                    previewImageUrl: i,
                    slideIndex: r,
                    currentIndex: Q,
                    onIndexChange: et,
                    isLoading: F,
                    aThumb: G
                }, i)
            })
        }), U[56] = V, U[57] = Q, U[58] = F, U[59] = D, U[60] = q, U[61] = R) : R = U[61], U[62] !== I || U[63] !== L || U[64] !== R ? (M = (0, t.jsxs)("div", {
            className: I,
            "data-testid": "product-gallery",
            children: [L, R]
        }), U[62] = I, U[63] = L, U[64] = R, U[65] = M) : M = U[65], M
    }], 564607)
}, 672159, 776533, 430152, 983975, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(261576),
        i = e.i(191788),
        n = e.i(41158),
        s = e.i(126019);
    e.i(664157);
    var l = e.i(271179),
        a = e.i(455108),
        o = e.i(495854);
    e.i(643781);
    var c = e.i(989606);
    e.i(366539);
    var d = e.i(150077);
    e.i(108399);
    var u = e.i(860231),
        h = e.i(616066),
        f = e.i(264516);
    let p = e => {
            let i, n = (0, r.c)(2),
                {
                    url: l
                } = e;
            return n[0] !== l ? (i = (0, t.jsx)(s.default, {
                src: l,
                alt: "",
                width: 56,
                height: 56,
                className: "h-56 w-56 object-contain"
            }), n[0] = l, n[1] = i) : i = n[1], i
        },
        m = e => {
            let i, n, s, a, c, d, m, v, g, y, b, x = (0, r.c)(33),
                {
                    variants: _,
                    currentVariant: w,
                    onChange: C,
                    size: E
                } = e,
                {
                    t: j
                } = (0, l.useTranslation)("common");
            x[0] !== C || x[1] !== _ ? (i = e => {
                let t = _.find(t => t.id === e);
                t && C(t)
            }, x[0] = C, x[1] = _, x[2] = i) : i = x[2];
            let N = i;
            x[3] !== j ? (n = e => j(`variantColors.${(0,f.toCamelCase)(e)}`), x[3] = j, x[4] = n) : n = x[4];
            let A = n,
                $ = "small" === E;
            x[5] !== $ ? (s = (0, o.default)({
                "body-3 w-112 overflow-hidden text-ellipsis whitespace-nowrap": $
            }), x[5] = $, x[6] = s) : s = x[6];
            let O = s,
                S = w.id;
            if (x[7] !== w.image ? (a = w.image && (0, t.jsx)(p, {
                    url: w.image.url
                }), x[7] = w.image, x[8] = a) : a = x[8], x[9] !== w.title || x[10] !== A ? (c = A(w.title), x[9] = w.title, x[10] = A, x[11] = c) : c = x[11], x[12] !== O || x[13] !== c ? (d = (0, t.jsx)("span", {
                    className: O,
                    children: c
                }), x[12] = O, x[13] = c, x[14] = d) : d = x[14], x[15] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, t.jsx)("div", {
                    className: "text-primary ms-auto",
                    children: (0, t.jsx)(u.default, {
                        name: "chevronDown",
                        size: 25,
                        strokeWidth: 3.5,
                        color: "current"
                    })
                }), x[15] = m) : m = x[15], x[16] !== a || x[17] !== d ? (v = (0, t.jsxs)(h.SelectTrigger, {
                    "data-testid": "variant-selector-dropdown__button",
                    className: "flex h-auto w-full flex-row items-center justify-start gap-8 rounded-xs border-gray-300 bg-white py-0 ps-0 pe-16 transition-colors duration-300 ease-linear md:hover:border-neutral-400",
                    children: [a, d, m]
                }), x[16] = a, x[17] = d, x[18] = v) : v = x[18], x[19] !== O || x[20] !== A || x[21] !== _) {
                let e;
                x[23] !== O || x[24] !== A ? (e = e => (0, t.jsx)(h.SelectItem, {
                    value: e.id,
                    "data-testid": "variant-selector-dropdown__variant",
                    leading: e.image ? (0, t.jsx)(p, {
                        url: e.image.url
                    }) : null,
                    children: (0, t.jsx)("span", {
                        className: O,
                        children: A(e.title)
                    })
                }, e.id), x[23] = O, x[24] = A, x[25] = e) : e = x[25], g = _.map(e), x[19] = O, x[20] = A, x[21] = _, x[22] = g
            } else g = x[22];
            return x[26] !== g ? (y = (0, t.jsx)(h.SelectContent, {
                "data-testid": "variant-selector-dropdown__variants",
                className: "z-20",
                children: g
            }), x[26] = g, x[27] = y) : y = x[27], x[28] !== w.id || x[29] !== N || x[30] !== v || x[31] !== y ? (b = (0, t.jsx)("div", {
                "data-testid": "variant-selector-dropdown",
                className: "relative w-full",
                children: (0, t.jsxs)(h.Select, {
                    value: S,
                    onValueChange: N,
                    children: [v, y]
                })
            }), x[28] = w.id, x[29] = N, x[30] = v, x[31] = y, x[32] = b) : b = x[32], b
        };
    e.s(["default", 0, m], 776533), e.s([], 430152), e.i(151153);
    var v = e.i(46050),
        g = e.i(43039),
        y = e.i(478797),
        b = e.i(351688),
        x = e.i(799444);
    e.i(310356);
    var _ = e.i(621351),
        w = e.i(79564),
        C = e.i(620391),
        E = e.i(766442),
        j = e.i(212376),
        N = e.i(876526);
    let A = e => {
        let i, n, s, a = (0, r.c)(12),
            {
                className: o,
                text: c,
                productName: d,
                variantId: u,
                variantName: h,
                sku: f
            } = e,
            p = void 0 === o ? "text-gray-600 body-1 uppercase lg:body-1" : o,
            {
                t: m
            } = (0, l.useTranslation)("common");
        a[0] !== d || a[1] !== f || a[2] !== u || a[3] !== h ? (i = {
            productName: d,
            variantId: u,
            variantName: h,
            sku: f
        }, a[0] = d, a[1] = f, a[2] = u, a[3] = h, a[4] = i) : i = a[4];
        let {
            ref: v
        } = (0, N.default)(i);
        return a[5] !== m || a[6] !== c ? (n = c || m("productCards.outOfStock"), a[5] = m, a[6] = c, a[7] = n) : n = a[7], a[8] !== p || a[9] !== v || a[10] !== n ? (s = (0, t.jsx)("p", {
            ref: v,
            className: p,
            children: n
        }), a[8] = p, a[9] = v, a[10] = n, a[11] = s) : s = a[11], s
    };

    function $(e) {
        return e.id
    }
    e.s(["default", 0, e => {
        let u, h, f, p, N, O, S, k, T, P, L, R, M, U, I, D, H, z, W, B, V = (0, r.c)(80),
            {
                cta: F,
                dontTrack: q,
                position: K,
                product: Q,
                showVariants: Y,
                dataCsOverrideRoot: J,
                priority: X
            } = e,
            G = void 0 === F ? "addToCart" : F,
            Z = void 0 !== q && q,
            ee = void 0 === Y || Y,
            et = void 0 !== X && X,
            {
                category: er,
                discountLabel: ei,
                rating: en,
                showDiscount: es,
                statusLabel: el,
                title: ea,
                totalReviews: eo,
                variants: ec,
                shortDescription: ed
            } = Q,
            [eu] = ec,
            [eh, ef] = (0, i.useState)(eu),
            {
                trackEvent: ep
            } = (0, y.default)();
        V[0] === Symbol.for("react.memo_cache_sentinel") ? (u = {
            placement: "productCard"
        }, V[0] = u) : u = V[0];
        let {
            add: em
        } = (0, w.default)(u), {
            t: ev
        } = (0, l.useTranslation)("common"), {
            isUSAvailable: eg
        } = (0, E.default)(), {
            isDeviceAvailable: ey
        } = (0, j.default)();
        V[1] !== eh.availableForSale || V[2] !== eh.id || V[3] !== eh.sku || V[4] !== ey || V[5] !== eg ? (h = eh.availableForSale && eg(eh.id) && ey(eh.sku), V[1] = eh.availableForSale, V[2] = eh.id, V[3] = eh.sku, V[4] = ey, V[5] = eg, V[6] = h) : h = V[6];
        let eb = h;
        V[7] !== ec ? (f = ec.map($), V[7] = ec, V[8] = f) : f = V[8];
        let ex = f;
        (0, C.usePrefetchLocalisedPrices)(ex);
        let e_ = (0, x.default)([eh.id]).prices ? .[0];
        V[9] !== eh || V[10] !== Q.handle ? (p = (0, g.default)(Q.handle, eh), V[9] = eh, V[10] = Q.handle, V[11] = p) : p = V[11];
        let ew = p,
            eC = eh.id;
        V[12] !== er || V[13] !== Z || V[14] !== e_ || V[15] !== K || V[16] !== Q || V[17] !== ep ? (N = () => {
            void 0 !== K && !Z && e_ && ep("productClick", (0, b.productClickMapping)(Q, K, er, e_))
        }, V[12] = er, V[13] = Z, V[14] = e_, V[15] = K, V[16] = Q, V[17] = ep, V[18] = N) : N = V[18];
        let eE = N;
        return V[19] === Symbol.for("react.memo_cache_sentinel") ? (O = (0, o.default)("relative block h-256 overflow-hidden rounded-t-xs bg-neutral-100 px-80 lg:h-288"), V[19] = O) : O = V[19], V[20] !== el ? (S = el && (0, t.jsx)(_.default, {
            label: el.title,
            variant: el.variant,
            theme: "light"
        }), V[20] = el, V[21] = S) : S = V[21], V[22] !== eh || V[23] !== et || V[24] !== Q.backgroundFill ? (k = eh && (0, t.jsx)(s.default, {
            src: eh.image.url,
            alt: eh.title,
            fill: !0,
            priority: et,
            sizes: "(max-width: 768px) 50vw, 300px",
            className: (0, o.default)("object-contain", Q.backgroundFill && "object-cover")
        }), V[22] = eh, V[23] = et, V[24] = Q.backgroundFill, V[25] = k) : k = V[25], V[26] !== eE || V[27] !== ew || V[28] !== S || V[29] !== k ? (T = (0, t.jsxs)(n.default, {
            href: ew,
            className: O,
            onClick: eE,
            children: [S, k]
        }), V[26] = eE, V[27] = ew, V[28] = S, V[29] = k, V[30] = T) : T = V[30], V[31] !== eE || V[32] !== ew || V[33] !== ea ? (P = (0, t.jsx)("h3", {
            className: "heading-5-semi-bold text-balance",
            children: (0, t.jsx)(n.default, {
                href: ew,
                onClick: eE,
                children: ea
            })
        }), V[31] = eE, V[32] = ew, V[33] = ea, V[34] = P) : P = V[34], V[35] !== ew || V[36] !== en || V[37] !== eo ? (L = eo > 0 && (0, t.jsx)(n.default, {
            href: `${ew}#reviews`,
            children: (0, t.jsx)(v.default, {
                rating: en,
                totalReviews: eo
            })
        }), V[35] = ew, V[36] = en, V[37] = eo, V[38] = L) : L = V[38], V[39] !== ed ? (R = ed && (0, t.jsx)("p", {
            className: "body-2 text-neutral-600",
            children: ed
        }), V[39] = ed, V[40] = R) : R = V[40], V[41] !== eh || V[42] !== ei || V[43] !== es ? (M = (0, t.jsx)(d.default, {
            variant: eh,
            showDiscount: es,
            discountLabel: ei
        }), V[41] = eh, V[42] = ei, V[43] = es, V[44] = M) : M = V[44], V[45] !== eh || V[46] !== ee || V[47] !== ec ? (U = ee && ec.length > 1 && (0, t.jsx)("div", {
            className: "mt-16",
            children: (0, t.jsx)(m, {
                variants: ec,
                currentVariant: eh,
                onChange: ef
            })
        }), V[45] = eh, V[46] = ee, V[47] = ec, V[48] = U) : U = V[48], V[49] !== P || V[50] !== L || V[51] !== R || V[52] !== M || V[53] !== U ? (I = (0, t.jsxs)("div", {
            className: "flex h-full flex-col gap-8",
            children: [P, L, R, M, U]
        }), V[49] = P, V[50] = L, V[51] = R, V[52] = M, V[53] = U, V[54] = I) : I = V[54], V[55] !== em || V[56] !== G || V[57] !== eh.id || V[58] !== eh.sku || V[59] !== eh.title || V[60] !== J || V[61] !== eb || V[62] !== Q || V[63] !== ev || V[64] !== eC ? (D = "addToCart" === G && (eb ? (0, t.jsx)(c.default, {
            label: ev("productCards.addToCard"),
            onClick: () => em([{
                product: Q,
                variantId: eC
            }]),
            variant: "link-black",
            icon: "arrowRight",
            dataCsOverrideId: J ? `${J}-add-to-cart` : J
        }) : (0, t.jsx)(A, {
            productName: Q.title,
            variantId: eh.id,
            variantName: eh.title,
            sku: eh.sku
        })), V[55] = em, V[56] = G, V[57] = eh.id, V[58] = eh.sku, V[59] = eh.title, V[60] = J, V[61] = eb, V[62] = Q, V[63] = ev, V[64] = eC, V[65] = D) : D = V[65], V[66] !== G || V[67] !== ew || V[68] !== ev ? (H = "discover" === G && (0, t.jsx)(c.default, {
            icon: "arrowRight",
            href: ew,
            label: ev("productCards.discover"),
            variant: "link-black"
        }), V[66] = G, V[67] = ew, V[68] = ev, V[69] = H) : H = V[69], V[70] !== D || V[71] !== H ? (z = (0, t.jsxs)("div", {
            "data-testid": "product-card__button",
            className: "mt-16",
            children: [D, H]
        }), V[70] = D, V[71] = H, V[72] = z) : z = V[72], V[73] !== I || V[74] !== z ? (W = (0, t.jsxs)("div", {
            className: "flex grow flex-col justify-between rounded-b-xs bg-white px-16 py-24",
            children: [I, z]
        }), V[73] = I, V[74] = z, V[75] = W) : W = V[75], V[76] !== J || V[77] !== T || V[78] !== W ? (B = (0, t.jsxs)(a.default.CardBorder, {
            className: "overflow-visible",
            "data-testid": "product-card",
            "data-cs-override-id": J,
            children: [T, W]
        }), V[76] = J, V[77] = T, V[78] = W, V[79] = B) : B = V[79], B
    }], 983975), e.s([], 672159)
}, 972276, e => {
    "use strict";
    Symbol();
    let t = Symbol(),
        r = Object.getPrototypeOf,
        i = new WeakMap,
        n = e => {
            let n;
            return (n = e) && (i.has(n) ? i.get(n) : r(n) === Object.prototype || r(n) === Array.prototype) && e[t] || null
        },
        s = (e, t = !0) => {
            i.set(e, t)
        },
        l = {
            get url() {
                return `file://${e.P("node_modules/valtio/esm/vanilla.mjs")}`
            }
        },
        a = e => "object" == typeof e && null !== e,
        o = new WeakMap,
        c = new WeakSet,
        [d] = ((e = Object.is, t = (e, t) => new Proxy(e, t), r = e => a(e) && !c.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer), i = e => {
            switch (e.status) {
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw e.reason;
                default:
                    throw e
            }
        }, d = new WeakMap, u = (e, t, r = i) => {
            let n = d.get(e);
            if ((null == n ? void 0 : n[0]) === t) return n[1];
            let l = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
            return s(l, !0), d.set(e, [t, l]), Reflect.ownKeys(e).forEach(t => {
                if (Object.getOwnPropertyDescriptor(l, t)) return;
                let i = Reflect.get(e, t),
                    n = {
                        value: i,
                        enumerable: !0,
                        configurable: !0
                    };
                if (c.has(i)) s(i, !1);
                else if (i instanceof Promise) delete n.value, n.get = () => r(i);
                else if (o.has(i)) {
                    let [e, t] = o.get(i);
                    n.value = u(e, t(), r)
                }
                Object.defineProperty(l, t, n)
            }), Object.preventExtensions(l)
        }, h = new WeakMap, f = [1, 1], p = i => {
            if (!a(i)) throw Error("object required");
            let s = h.get(i);
            if (s) return s;
            let d = f[0],
                m = new Set,
                v = (e, t = ++f[0]) => {
                    d !== t && (d = t, m.forEach(r => r(e, t)))
                },
                g = f[1],
                y = (e = ++f[1]) => (g === e || m.size || (g = e, x.forEach(([t]) => {
                    let r = t[1](e);
                    r > d && (d = r)
                })), d),
                b = e => (t, r) => {
                    let i = [...t];
                    i[1] = [e, ...i[1]], v(i, r)
                },
                x = new Map,
                _ = (e, t) => {
                    if ((l.env ? l.env.MODE : void 0) !== "production" && x.has(e)) throw Error("prop listener already exists");
                    if (m.size) {
                        let r = t[3](b(e));
                        x.set(e, [t, r])
                    } else x.set(e, [t])
                },
                w = e => {
                    var t;
                    let r = x.get(e);
                    r && (x.delete(e), null == (t = r[1]) || t.call(r))
                },
                C = e => {
                    m.add(e), 1 === m.size && x.forEach(([e, t], r) => {
                        if ((l.env ? l.env.MODE : void 0) !== "production" && t) throw Error("remove already exists");
                        let i = e[3](b(r));
                        x.set(r, [e, i])
                    });
                    let t = () => {
                        m.delete(e), 0 === m.size && x.forEach(([e, t], r) => {
                            t && (t(), x.set(r, [e]))
                        })
                    };
                    return t
                },
                E = Array.isArray(i) ? [] : Object.create(Object.getPrototypeOf(i)),
                j = {
                    deleteProperty(e, t) {
                        let r = Reflect.get(e, t);
                        w(t);
                        let i = Reflect.deleteProperty(e, t);
                        return i && v(["delete", [t], r]), i
                    },
                    set(t, i, s, l) {
                        let d = Reflect.has(t, i),
                            u = Reflect.get(t, i, l);
                        if (d && (e(u, s) || h.has(s) && e(u, h.get(s)))) return !0;
                        w(i), a(s) && (s = n(s) || s);
                        let f = s;
                        if (s instanceof Promise) s.then(e => {
                            s.status = "fulfilled", s.value = e, v(["resolve", [i], e])
                        }).catch(e => {
                            s.status = "rejected", s.reason = e, v(["reject", [i], e])
                        });
                        else {
                            !o.has(s) && r(s) && (f = p(s));
                            let e = !c.has(f) && o.get(f);
                            e && _(i, e)
                        }
                        return Reflect.set(t, i, f, l), v(["set", [i], s, u]), !0
                    }
                },
                N = t(E, j);
            h.set(i, N);
            let A = [E, y, u, C];
            return o.set(N, A), Reflect.ownKeys(i).forEach(e => {
                let t = Object.getOwnPropertyDescriptor(i, e);
                "value" in t && (N[e] = i[e], delete t.value, delete t.writable), Object.defineProperty(E, e, t)
            }), N
        }) => [p, o, c, e, t, r, i, d, u, h, f])();
    e.s(["getVersion", 0, function(e) {
        let t = o.get(e);
        return null == t ? void 0 : t[1]()
    }, "proxy", 0, function(e = {}) {
        return d(e)
    }, "snapshot", 0, function(e, t) {
        let r = o.get(e);
        (l.env ? l.env.MODE : void 0) === "production" || r || console.warn("Please use proxy object");
        let [i, n, s] = r;
        return s(i, n(), t)
    }, "subscribe", 0, function(e, t, r) {
        let i, n = o.get(e);
        (l.env ? l.env.MODE : void 0) === "production" || n || console.warn("Please use proxy object");
        let s = [],
            a = n[3],
            c = !1,
            d = a(e => {
                (s.push(e), r) ? t(s.splice(0)): i || (i = Promise.resolve().then(() => {
                    i = void 0, c && t(s.splice(0))
                }))
            });
        return c = !0, () => {
            c = !1, d()
        }
    }], 972276)
}, 328488, (e, t, r) => {
    "use strict";
    var i = {
        single_source_shortest_paths: function(e, t, r) {
            var n, s, l, a, o, c, d, u = {},
                h = {};
            h[t] = 0;
            var f = i.PriorityQueue.make();
            for (f.push(t, 0); !f.empty();)
                for (l in s = (n = f.pop()).value, a = n.cost, o = e[s] || {}) o.hasOwnProperty(l) && (c = a + o[l], d = h[l], (void 0 === h[l] || d > c) && (h[l] = c, f.push(l, c), u[l] = s));
            if (void 0 !== r && void 0 === h[r]) throw Error("Could not find a path from " + t + " to " + r + ".");
            return u
        },
        extract_shortest_path_from_predecessor_list: function(e, t) {
            for (var r = [], i = t; i;) r.push(i), e[i], i = e[i];
            return r.reverse(), r
        },
        find_path: function(e, t, r) {
            var n = i.single_source_shortest_paths(e, t, r);
            return i.extract_shortest_path_from_predecessor_list(n, r)
        },
        PriorityQueue: {
            make: function(e) {
                var t, r = i.PriorityQueue,
                    n = {};
                for (t in e = e || {}, r) r.hasOwnProperty(t) && (n[t] = r[t]);
                return n.queue = [], n.sorter = e.sorter || r.default_sorter, n
            },
            default_sorter: function(e, t) {
                return e.cost - t.cost
            },
            push: function(e, t) {
                this.queue.push({
                    value: e,
                    cost: t
                }), this.queue.sort(this.sorter)
            },
            pop: function() {
                return this.queue.shift()
            },
            empty: function() {
                return 0 === this.queue.length
            }
        }
    };
    t.exports = i
}, 932252, 146601, e => {
    "use strict";
    let t = {
        METMASK_CONNECTOR_NAME: "MetaMask",
        TRUST_CONNECTOR_NAME: "Trust Wallet",
        SOLFLARE_CONNECTOR_NAME: "Solflare",
        PHANTOM_CONNECTOR_NAME: "Phantom",
        COIN98_CONNECTOR_NAME: "Coin98",
        MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
        BACKPACK_CONNECTOR_NAME: "Backpack",
        BITGET_CONNECTOR_NAME: "Bitget Wallet",
        FRONTIER_CONNECTOR_NAME: "Frontier",
        XVERSE_CONNECTOR_NAME: "Xverse Wallet",
        LEATHER_CONNECTOR_NAME: "Leather",
        EIP155: "eip155",
        ADD_CHAIN_METHOD: "wallet_addEthereumChain",
        EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
        EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
        CONNECTOR_RDNS_MAP: {
            coinbaseWallet: "com.coinbase.wallet",
            coinbaseWalletSDK: "com.coinbase.wallet"
        },
        CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
        CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
        CONNECTOR_TYPE_INJECTED: "INJECTED",
        CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
        CONNECTOR_TYPE_AUTH: "AUTH",
        CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
        CONNECTOR_TYPE_W3M_AUTH: "ID_AUTH"
    };
    e.s(["ConstantsUtil", 0, t], 146601), e.s(["HelpersUtil", 0, {
        getCaipTokens(e) {
            if (!e) return;
            let r = {};
            return Object.entries(e).forEach(([e, i]) => {
                r[`${t.EIP155}:${e}`] = i
            }), r
        },
        isLowerCaseMatch: (e, t) => e ? .toLowerCase() === t ? .toLowerCase()
    }], 932252)
}, 358400, e => {
    "use strict";
    e.s(["ConnectorUtil", () => u]);
    var t = e.i(970422),
        r = e.i(439522),
        i = e.i(947366),
        n = e.i(591516),
        s = e.i(260687),
        l = e.i(425609),
        a = e.i(906349),
        o = e.i(609294),
        c = e.i(932252),
        d = e.i(72257);
    let u = {
        getConnectorsByType(e, t, r) {
            let {
                customWallets: i
            } = a.OptionsController.state, n = o.StorageUtil.getRecentWallets(), s = d.WalletUtil.filterOutDuplicateWallets(t), l = d.WalletUtil.filterOutDuplicateWallets(r), c = e.filter(e => "MULTI_CHAIN" === e.type), u = e.filter(e => "ANNOUNCED" === e.type), h = e.filter(e => "INJECTED" === e.type);
            return {
                custom: i,
                recent: n,
                external: e.filter(e => "EXTERNAL" === e.type),
                multiChain: c,
                announced: u,
                injected: h,
                recommended: s,
                featured: l
            }
        },
        showConnector(e) {
            let t = e.info ? .rdns,
                i = !!t && r.ApiController.state.excludedWallets.some(e => e.rdns === t),
                s = !!e.name && r.ApiController.state.excludedWallets.some(t => c.HelpersUtil.isLowerCaseMatch(t.name, e.name));
            return ("INJECTED" !== e.type || (!!l.CoreHelperUtil.isMobile() || "Browser Wallet" !== e.name) && (!!t || !!n.ConnectionController.checkInstalled()) && !i && !s) && ("ANNOUNCED" !== e.type || !i && !s)
        },
        getIsConnectedWithWC: () => Array.from(i.ChainController.state.chains.values()).some(e => s.ConnectorController.getConnectorId(e.namespace) === t.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),
        getConnectorTypeOrder({
            recommended: e,
            featured: t,
            custom: r,
            recent: i,
            announced: n,
            injected: s,
            multiChain: l,
            external: o,
            overriddenConnectors: c = a.OptionsController.state.features ? .connectorTypeOrder ? ? []
        }) {
            let d = u.getIsConnectedWithWC(),
                h = [{
                    type: "walletConnect",
                    isEnabled: a.OptionsController.state.enableWalletConnect && !d
                }, {
                    type: "recent",
                    isEnabled: i.length > 0
                }, {
                    type: "injected",
                    isEnabled: [...s, ...n, ...l].length > 0
                }, {
                    type: "featured",
                    isEnabled: t.length > 0
                }, {
                    type: "custom",
                    isEnabled: r && r.length > 0
                }, {
                    type: "external",
                    isEnabled: o.length > 0
                }, {
                    type: "recommended",
                    isEnabled: e.length > 0
                }].filter(e => e.isEnabled),
                f = new Set(h.map(e => e.type)),
                p = c.filter(e => f.has(e)).map(e => ({
                    type: e,
                    isEnabled: !0
                })),
                m = h.filter(({
                    type: e
                }) => !p.some(({
                    type: t
                }) => t === e));
            return Array.from(new Set([...p, ...m].map(({
                type: e
            }) => e)))
        }
    }
}, 72257, e => {
    "use strict";
    e.s(["WalletUtil", () => o]);
    var t = e.i(439522),
        r = e.i(260687),
        i = e.i(425609),
        n = e.i(906349),
        s = e.i(609294),
        l = e.i(358400),
        a = e.i(464664);
    let o = {
        filterOutDuplicatesByRDNS(e) {
            let t = n.OptionsController.state.enableEIP6963 ? r.ConnectorController.state.connectors : [],
                l = s.StorageUtil.getRecentWallets(),
                a = t.map(e => e.info ? .rdns).filter(Boolean),
                o = l.map(e => e.rdns).filter(Boolean),
                c = a.concat(o);
            if (c.includes("io.metamask.mobile") && i.CoreHelperUtil.isMobile()) {
                let e = c.indexOf("io.metamask.mobile");
                c[e] = "io.metamask"
            }
            return e.filter(e => !c.includes(String(e ? .rdns)))
        },
        filterOutDuplicatesByIds(e) {
            let t = r.ConnectorController.state.connectors.filter(e => "ANNOUNCED" === e.type || "INJECTED" === e.type),
                i = s.StorageUtil.getRecentWallets(),
                n = t.map(e => e.explorerId),
                l = i.map(e => e.id),
                a = n.concat(l);
            return e.filter(e => !a.includes(e ? .id))
        },
        filterOutDuplicateWallets(e) {
            let t = this.filterOutDuplicatesByRDNS(e);
            return this.filterOutDuplicatesByIds(t)
        },
        markWalletsAsInstalled(e) {
            let {
                connectors: t
            } = r.ConnectorController.state, i = t.filter(e => "ANNOUNCED" === e.type).reduce((e, t) => (t.info ? .rdns && (e[t.info.rdns] = !0), e), {});
            return e.map(e => ({ ...e,
                installed: !!e.rdns && !!i[e.rdns ? ? ""]
            })).sort((e, t) => Number(t.installed) - Number(e.installed))
        },
        getConnectOrderMethod(e, i) {
            let s = e ? .connectMethodsOrder || n.OptionsController.state.features ? .connectMethodsOrder,
                o = i || r.ConnectorController.state.connectors;
            if (s) return s;
            let {
                injected: c,
                announced: d
            } = l.ConnectorUtil.getConnectorsByType(o, t.ApiController.state.recommended, t.ApiController.state.featured), u = c.filter(l.ConnectorUtil.showConnector), h = d.filter(l.ConnectorUtil.showConnector);
            return u.length || h.length ? ["wallet", "email", "social"] : a.ConstantsUtil.DEFAULT_CONNECT_METHOD_ORDER
        }
    }
}, 648761, e => {
    e.v(t => Promise.all(["static/chunks/0~1y3rya3twqr.js"].map(t => e.l(t))).then(() => t(493594)))
}, 828805, e => {
    e.v(t => Promise.all(["static/chunks/17m4lcp7g44-4.js"].map(t => e.l(t))).then(() => t(879466)))
}, 921471, e => {
    e.v(t => Promise.all(["static/chunks/0ttseehyfcvng.js"].map(t => e.l(t))).then(() => t(151946)))
}, 520424, e => {
    e.v(t => Promise.all(["static/chunks/0m1.0r7o5yb33.js"].map(t => e.l(t))).then(() => t(420908)))
}, 934176, e => {
    e.v(t => Promise.all(["static/chunks/0nhtti~wozkwf.js"].map(t => e.l(t))).then(() => t(895546)))
}, 306836, e => {
    e.v(t => Promise.all(["static/chunks/0msvz0.f3-.kb.js"].map(t => e.l(t))).then(() => t(980062)))
}, 471578, e => {
    e.v(t => Promise.all(["static/chunks/0e.s.134g~lb9.js"].map(t => e.l(t))).then(() => t(777778)))
}, 782169, e => {
    e.v(t => Promise.all(["static/chunks/00cgj57y92899.js"].map(t => e.l(t))).then(() => t(257969)))
}, 101789, e => {
    e.v(t => Promise.all(["static/chunks/0vvqi4_e~oj_d.js", "static/chunks/0tsv9pezrtaan.js", "static/chunks/17tr0ta~wd19y.js"].map(t => e.l(t))).then(() => t(363038)))
}, 995490, e => {
    e.v(t => Promise.all(["static/chunks/16-e2pd8ed.pb.js", "static/chunks/0jq9-~qdrfl2y.js", "static/chunks/02_1bcc7vsn4m.js"].map(t => e.l(t))).then(() => t(206725)))
}, 572720, e => {
    e.v(t => Promise.all(["static/chunks/13igvxiw6x6z1.js", "static/chunks/12_lk5zo4.5ra.js"].map(t => e.l(t))).then(() => t(297338)))
}, 643304, e => {
    e.v(t => Promise.all(["static/chunks/0fy-jrl-~7f4i.js"].map(t => e.l(t))).then(() => t(309437)))
}, 88277, e => {
    e.v(t => Promise.all(["static/chunks/0-yjk4y5t1cwh.js"].map(t => e.l(t))).then(() => t(450399)))
}, 153459, e => {
    e.v(t => Promise.all(["static/chunks/0oryq34t1edi..js"].map(t => e.l(t))).then(() => t(531976)))
}, 854172, e => {
    e.v(t => Promise.all(["static/chunks/0t50en83hc_a7.js"].map(t => e.l(t))).then(() => t(202295)))
}]);

//# sourceMappingURL=0gkb2a.-sh7gd.js.map